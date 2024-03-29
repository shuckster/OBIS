require('module-alias/register')

const fs = require('fs')
const path = require('path')
const { glob } = require('glob')
const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')
const { composePaths } = require('compose-paths')

const { makePromise } = require('@/cjs/promises')
const { loadTextFile, fileOnly } = require('@/cjs/files')
const { pipe } = require('@/cjs/fp')

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
const ifLocal = getIf(() => IS_LOCAL, '')

console.log('IS_LOCAL', IS_LOCAL)

function main() {
  const concurrentJobs = [
    buildWebExtension(),
    buildBookmarklet(),
    buildPlugins(),
    buildUi(),
    buildMain(),
    buildStatementsCss()
  ]

  return Promise.all(concurrentJobs).then(maybeRunMockServer)
}

function maybeRunMockServer() {
  if (!RUN_MOCK_SERVER) {
    return
  }

  const nodemon = require('nodemon')
  const config = {
    script: paths.SERVER_SCRIPT,
    ext: 'js,jsx,json,scss',
    env: { HYDRATE: process.env.HYDRATE }
  }

  function handleStart() {
    console.log('nodemon started')
  }

  function handleCrash(error) {
    console.log('script crashed for some reason')
    console.error(error)
  }

  function handleSIGINT() {
    console.log('Caught interrupt signal')
    nodemon.emit('quit')
    process.exit()
  }

  nodemon(config).on('start', handleStart).on('crash', handleCrash)
  process.on('SIGINT', handleSIGINT)
}

//
// Builders
//

const commonBuildOptions = {
  define: BUILD_REPLACEMENTS,
  minify: MINIFY_DISTRIBUTION,
  sourcemap: SOURCE_MAPS,
  target: 'es2020'
}

function buildBookmarklet() {
  const decoder = new TextDecoder()
  return esbuild
    .build({
      ...commonBuildOptions,
      entryPoints: [paths.SRC_BOOKMARKLET],
      bundle: true,
      minify: true, // Always minify bookmarklet
      platform: 'browser',
      write: false
    })
    .then(getConcatenatedEsbuildContent)
    .then(bookmarkletContent => decoder.decode(bookmarkletContent))
    .then(bookmarkletContent => 'javascript:' + bookmarkletContent)
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
    const writeRegistryJob = pipe(
      results,
      $ => $.map(({ pluginMeta }) => pluginMeta),
      $ => buildPluginsRegistry($),
      $ => writeTextFile(paths.DIST_PLUGIN_JS)($)
    )
    const writePluginJobs = results.map(({ pluginContent, pluginMeta }) =>
      writeTextFile(pluginMeta.dist)(pluginContent)
    )
    const concurrentJobs = [...writePluginJobs, writeRegistryJob]
    return Promise.all(concurrentJobs)
  })
}

//
// Extension building
//

const extensionManifestTemplate = {
  manifest_version: 2,
  short_name: 'OBIS',
  name: 'OBIS | Online Banking Is Shit',
  version: '0.0.0.5',
  homepage_url: 'https://shuckster.github.io/OBIS/',
  author: 'Conan Theobald',
  description: `${ifLocal(
    '(DEBUGGING) '
  )}Easily download your HSBC UK bank-statements.`,
  content_scripts: [
    {
      matches: [],
      css: ['ui.css'],
      js: ['obis-${pluginName}.js']
    }
  ],
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

  const concurrentJobs = [
    buildAndMinifyPlugins(),
    buildMain(DO_NOT_WRITE).then(getConcatenatedEsbuildContent),
    buildUi(DO_NOT_WRITE)
      .then(getEsbuiltJavaScriptWithCss)
      .then(({ jsContent, cssContent }) =>
        writeTextFile(paths.EXTENSION_UI_CSS)(cssContent).then(() => jsContent)
      ),
    buildStatementsCss(DO_NOT_WRITE)
      .then(getConcatenatedEsbuildContent)
      .then(cssContent => decoder.decode(cssContent))
      .then(writeTextFile(paths.EXTENSION_STATEMENTS_CSS))
  ]

  return Promise.all(concurrentJobs).then(
    ([plugins, mainContent, uiContent]) => {
      const allPluginMeta = plugins.map(({ pluginMeta }) => pluginMeta)
      const pluginRegistryJs = buildPluginsRegistry(allPluginMeta)
      const pluginRegistry = encoder.encode(pluginRegistryJs)

      // Generate manifest.json
      const contentScriptTemplate =
        extensionManifestTemplate.content_scripts.pop()
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

      // Write manifest:
      const manifestJob = writeTextFile(paths.EXTENSION_MANIFEST)(
        JSON.stringify(manifest, null, 2)
      )

      // Bundle OBIS + each plugin per bank:
      const pluginJobs = plugins.map(({ pluginMeta, pluginContent }) => {
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

      const allPluginJobs = [manifestJob, ...pluginJobs]
      return Promise.all(allPluginJobs)
    }
  )
}

function buildExtensionContentScript(name, bundleJs) {
  return (
    esbuild
      .transform(bundleJs, commonBuildOptions)
      .then(({ code }) => code)
      // FIXME: Dirty hack to fix Chrome warning about text/plain MIME type
      // when serving statements.css from the extension.
      .then(code =>
        Promise.all([
          Promise.resolve(code),
          loadTextFile(path.join(paths.EXTENSION_FOLDER, 'statement.css'))
        ])
      )
      .then(([code, cssToInline]) => {
        return code.replace(
          `@import url('\${obis.rootPath}/statement.css');`,
          cssToInline
        )
      })
      .then(writeTextFile(path.join(paths.EXTENSION_FOLDER, name)))
  )
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
  const buildPlugin = pluginMeta =>
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
        pluginContent: getConcatenatedEsbuildContent(build)
      }))

  const buildAllPlugins = allPluginMeta => allPluginMeta.map(buildPlugin)

  return (
    metaForAllAvailablePlugins()
      // Bundle/minify plugins
      .then(allPluginMeta => Promise.allSettled(buildAllPlugins(allPluginMeta)))
      .then(filter(result => result.status === 'fulfilled'))
      .then(map(result => result.value))
  )
}

function metaForAllAvailablePlugins() {
  const loadPluginFile = fileName =>
    loadTextFile(fileName).then(src => ({ fileName, src }))

  return allPluginConfigFiles()
    .then(pluginConfigFiles =>
      Promise.allSettled(pluginConfigFiles.map(loadPluginFile))
        .then(filter(result => result.status === 'fulfilled'))
        .then(map(result => result.value))
    )
    .then(
      map(details => {
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
}

function allPluginConfigFiles() {
  return glob(paths.SRC_PLUGINS, {})
    .then(files => files.map(fileOnly))
    .then(filesOnly => Promise.all(filesOnly))
}

main()

//
// Helpers
//

function filter(pred) {
  return arr => arr.filter(pred)
}

function map(pred) {
  return arr => arr.map(pred)
}

function getIf(pred, fallback = '') {
  return val => (pred() ? val : fallback)
}

function writeTextFile(path) {
  return textContent => {
    const [promise, resolve, reject] = makePromise()
    fs.writeFile(path, textContent, err => (err ? reject(err) : resolve()))
    return promise
  }
}

function getConcatenatedEsbuildContent(build) {
  return mergeTypedArrays(
    build.outputFiles.map(out => out.contents),
    Uint8Array
  )
}

function getEsbuiltJavaScriptWithCss(build) {
  const { outputFiles } = build
  const { contents: jsContent } = outputFiles.find(({ path }) =>
    path.includes('index.js')
  )
  const { contents: cssContent } = outputFiles.find(({ path }) =>
    path.includes('index.css')
  )
  return { jsContent, cssContent }
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
