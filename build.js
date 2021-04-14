require('module-alias/register')

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')

const { makePromise } = require('@/cjs/promises')
const { composePaths } = require('@/cjs/compose-paths')
const { loadTextFile, fileOnly } = require('@/cjs/files')

const MINIFY_DISTRIBUTION = false
const PLUGIN_SOURCE_NAME = 'plugin.js'

const paths = composePaths(`
  ${__dirname}
    /src                               = SRC
      /plugins
        /**/plugin.json                = SRC_PLUGINS

      /ui
        /index.js                      = SRC_UI
        /styles
          /statements-browser/
            /all.scss                  = SRC_STATEMENTS_CSS

      /bookmarklet.js                  = SRC_BOOKMARKLET
      /main.js                         = SRC_MAIN

      /_mock-server
        /index.js                      = SERVER_SCRIPT

    /dist
      /bookmarklet                     = DIST
        /plugins                       = DIST_PLUGINS
        /plugins.js                    = DIST_PLUGIN_JS
        /ui.js                         = DIST_UI
        /bookmarklet.js                = DIST_BOOKMARKLET
        /main.js                       = DIST_MAIN
        /statement.css                 = DIST_STATEMENTS_CSS

      /extension                       = EXTENSION_FOLDER
        /manifest.json                 = EXTENSION_MANIFEST
        /obis-hsbc-uk.js               = EXTENSION_MAIN
        /statement.css                 = EXTENSION_STATEMENTS_CSS
        /ui.css                        = EXTENSION_UI_CSS
`)

// Require plugins folder before moving on...

if (!fs.statSync(paths.DIST_PLUGINS).isDirectory()) {
  process.exit(255)
}

const DO_NOT_WRITE = true
const RUN_MOCK_SERVER = process.argv.some(arg => arg === '--mock-server')
const IS_LOCAL = (process.env.NODE_ENV || 'local') === 'local'
const SOURCE_MAPS = false // IS_LOCAL
const BUILD_REPLACEMENTS = {
  'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
  'process.env.HYDRATE': `"${process.env.HYDRATE}"`
}

console.log('IS_LOCAL', IS_LOCAL)

function main() {
  return buildWebExtension()
    .then(buildBookmarklet)
    .then(buildPlugins)
    .then(() => buildUi())
    .then(() => buildMain())
    .then(() => buildStatementsCss())
    .then(maybeRunMockServer)
}

function maybeRunMockServer() {
  if (!RUN_MOCK_SERVER) {
    return
  }

  const nodemon = require('nodemon')
  nodemon({
    script: paths.SERVER_SCRIPT,
    ext: 'js,jsx,json,scss',
    env: { HYDRATE: process.env.HYDRATE }
  })
    .on('start', () => {
      console.log('nodemon started')
    })
    .on('crash', error => {
      console.log('script crashed for some reason')
      console.error(error)
    })

  process.on('SIGINT', function () {
    console.log('Caught interrupt signal')
    nodemon.emit('quit')
    process.exit()
  })
}

//
// Builders
//

const commonBuildOptions = {
  define: BUILD_REPLACEMENTS,
  minify: MINIFY_DISTRIBUTION,
  sourcemap: SOURCE_MAPS
}

function buildBookmarklet() {
  return esbuild
    .build({
      ...commonBuildOptions,
      entryPoints: [paths.SRC_BOOKMARKLET],
      bundle: true,
      minify: true, // Always minify bookmarklet
      platform: 'browser',
      outfile: paths.DIST_BOOKMARKLET
    })
    .then(() => loadTextFile(paths.DIST_BOOKMARKLET))
    .then(bookmarkletContent => 'javascript:' + bookmarkletContent.toString())
    .then(writeTextFile(paths.DIST_BOOKMARKLET))
}

function buildMain(doNotWrite) {
  const options = {
    ...commonBuildOptions,
    entryPoints: [paths.SRC_MAIN],
    bundle: true,
    platform: 'browser',
    write: !doNotWrite,
    ...(!doNotWrite && { outfile: paths.DIST_MAIN })
  }
  return esbuild.build(options)
}

function buildUi(doNotWrite) {
  const options = {
    ...commonBuildOptions,
    entryPoints: [paths.SRC_UI],
    bundle: true,
    platform: 'browser',
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
    plugins: [sassPlugin()],
    write: !doNotWrite,
    ...(doNotWrite
      ? { outdir: paths.EXTENSION_FOLDER }
      : { outfile: paths.DIST_UI })
  }
  return esbuild.build(options)
}

function buildStatementsCss(doNotWrite) {
  const options = {
    ...commonBuildOptions,
    entryPoints: [paths.SRC_STATEMENTS_CSS],
    bundle: true,
    loader: { '.scss': 'css' },
    plugins: [sassPlugin()],
    write: !doNotWrite,
    ...(!doNotWrite && { outfile: paths.DIST_STATEMENTS_CSS })
  }
  return esbuild.build(options)
}

function buildPlugins() {
  return buildAndMinifyPlugins().then(results => {
    const allPluginMeta = results.map(({ pluginMeta }) => pluginMeta)
    const allPluginContent = results.map(({ pluginContent, pluginMeta }) => ({
      dist: pluginMeta.dist,
      content: pluginContent
    }))
    const pluginPromises = allPluginContent.map(({ dist, content }) =>
      writeTextFile(dist)(content)
    )
    const registryPromise = writeTextFile(paths.DIST_PLUGIN_JS)(
      buildPluginsRegistry(allPluginMeta)
    )
    return Promise.all(pluginPromises.concat(registryPromise))
  })
}

//
// Extension building
//

const extensionManifestTemplate = {
  name: 'OBIS',
  description: `Easily download your HSBC UK bank-statements.${
    IS_LOCAL ? ' (DEBUGGING)' : ''
  }`,
  version: '0.0.0.1',
  manifest_version: 2,
  content_scripts: [
    {
      matches: [],
      css: ['ui.css', 'statement.css'],
      js: ['obis-${pluginName}.js']
    }
  ],
  web_accessible_resources: ['statement.css'],
  icons: {
    16: 'images/icon-16.png',
    32: 'images/icon-32.png',
    48: 'images/icon-48.png',
    128: 'images/icon-128.png'
  }
}

function buildWebExtension() {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  return buildMain(DO_NOT_WRITE)
    .then(getFullEsbuildContent)
    .then(mainContent => {
      buildUi(DO_NOT_WRITE).then(uiBuild => {
        const uiContent = uiBuild.outputFiles.find(({ path }) =>
          path.includes('index.js')
        ).contents

        const uiCssContent = uiBuild.outputFiles.find(({ path }) =>
          path.includes('index.css')
        ).contents

        writeTextFile(paths.EXTENSION_UI_CSS)(uiCssContent)
          .then(() => buildAndMinifyPlugins())
          .then(results => {
            const allPluginMeta = results.map(({ pluginMeta }) => pluginMeta)
            const pluginRegistryJs = buildPluginsRegistry(allPluginMeta)
            const pluginRegistry = encoder.encode(pluginRegistryJs)

            // Generate manifest.json
            const contentScriptTemplate = extensionManifestTemplate.content_scripts.pop()
            const manifest = { ...extensionManifestTemplate }
            manifest.content_scripts = allPluginMeta.map(meta => ({
              ...contentScriptTemplate,
              matches: meta.urls.filter(
                url => IS_LOCAL || !url.includes('localhost')
              ),
              js: contentScriptTemplate.js.map(js =>
                js.replace('${pluginName}', meta.name)
              )
            }))

            return writeTextFile(paths.EXTENSION_MANIFEST)(
              JSON.stringify(manifest, null, 2)
            ).then(
              Promise.all(
                results.map(({ pluginMeta, pluginContent }) => {
                  const bundleWithoutPlugin = mergeTypedArrays([
                    mainContent,
                    uiContent,
                    pluginRegistry,
                    pluginContent
                  ])
                  const bundleJs = decoder.decode(bundleWithoutPlugin)
                  return buildExtensionContentScript(
                    `obis-${pluginMeta.name}.js`,
                    bundleJs
                  )
                })
              )
            )
          })
      })
    })
    .then(() =>
      buildStatementsCss(DO_NOT_WRITE)
        .then(getFullEsbuildContent)
        .then(cssContent => decoder.decode(cssContent))
        .then(writeTextFile(paths.EXTENSION_STATEMENTS_CSS))
    )
}

function buildExtensionContentScript(name, bundleJs) {
  return esbuild
    .transform(bundleJs, commonBuildOptions)
    .then(({ code }) => code)
    .then(writeTextFile(path.join(paths.EXTENSION_FOLDER, name)))
}

//
// Plugin building helpers
//

function buildPluginsRegistry(allPluginMeta) {
  const pluginInfo = allPluginMeta.map(result => {
    // eslint-disable-next-line no-unused-vars
    const { src, dist, ...restValue } = result
    return restValue
  })

  return `obis.registerPlugins(${JSON.stringify(pluginInfo, null, 2)});`
}

function buildAndMinifyPlugins() {
  return (
    metaForAllAvailablePlugins()
      // Bundle/minify plugins
      .then(allPluginMeta =>
        Promise.allSettled(
          allPluginMeta.map(pluginMeta =>
            esbuild
              .build({
                ...commonBuildOptions,
                entryPoints: [pluginMeta.src],
                bundle: true,
                platform: 'browser',
                write: false
              })
              .then(build => ({
                pluginMeta,
                pluginContent: getFullEsbuildContent(build)
              }))
          )
        )
      )
      .then(results =>
        results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value)
      )
  )
}

function metaForAllAvailablePlugins() {
  const loadPluginFile = fileName =>
    loadTextFile(fileName).then(src => ({ fileName, src }))

  return (
    allPluginFileNames()
      // Load all plugins
      .then(pluginsFiles =>
        Promise.allSettled(pluginsFiles.map(loadPluginFile))
      )
      // Build plugins.js output (but don't write it yet)
      .then(results =>
        results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value)
          .map(details => {
            const { fileName, src } = details
            const { name, description, urls } = JSON.parse(src)
            const { dir } = path.parse(fileName)
            const srcJs = path.join(dir, PLUGIN_SOURCE_NAME)
            const distJs = path.join(paths.DIST_PLUGINS, `${name}.js`)
            return {
              src: srcJs,
              dist: distJs,
              name,
              description,
              urls
            }
          })
      )
  )
}

function allPluginFileNames() {
  const [promise, resolve, reject] = makePromise()

  glob(paths.SRC_PLUGINS, {}, (err, files) => {
    return err
      ? reject(err)
      : Promise.all(files.map(fileOnly)).then(resolve, reject)
  })

  return promise
}

main()

//
// Helpers
//

function writeTextFile(path) {
  return textContent => {
    const [promise, resolve, reject] = makePromise()
    fs.writeFile(path, textContent, err => (err ? reject(err) : resolve()))
    return promise
  }
}

function getFullEsbuildContent(build) {
  return mergeTypedArrays(
    build.outputFiles.map(out => out.contents),
    Uint8Array
  )
}

// https://stackoverflow.com/a/56993335/127928
const mergeTypedArrays = (arrays, type = Uint8Array) => {
  const result = new type(arrays.reduce((acc, arr) => acc + arr.byteLength, 0))
  let offset = 0
  arrays.forEach(arr => {
    result.set(arr, offset)
    offset += arr.byteLength
  })
  return result
}
