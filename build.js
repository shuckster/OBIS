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

    /dist                              = DIST
      /plugins                         = DIST_PLUGINS
      /plugins.js                      = DIST_PLUGIN_JS
      /ui.js                           = DIST_UI
      /bookmarklet.js                  = DIST_BOOKMARKLET
      /main.js                         = DIST_MAIN
      /statement.css                   = DIST_STATEMENTS_CSS
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
  return buildBookmarklet()
    .then(buildMain)
    .then(buildPlugins)
    .then(buildUi)
    .then(buildStatementsCss)
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

function buildBookmarklet() {
  return esbuild
    .build({
      define: BUILD_REPLACEMENTS,
      entryPoints: [paths.SRC_BOOKMARKLET],
      bundle: true,
      minify: true, // Always minify bookmarklet
      platform: 'browser',
      sourcemap: SOURCE_MAPS,
      outfile: paths.DIST_BOOKMARKLET
    })
    .then(() => loadTextFile(paths.DIST_BOOKMARKLET))
    .then(bookmarkletContent =>
      fs.writeFileSync(
        paths.DIST_BOOKMARKLET,
        'javascript:' + bookmarkletContent.toString()
      )
    )
}

function buildMain(doNotWrite) {
  const options = {
    define: BUILD_REPLACEMENTS,
    entryPoints: [paths.SRC_MAIN],
    bundle: true,
    minify: MINIFY_DISTRIBUTION,
    platform: 'browser',
    sourcemap: SOURCE_MAPS,
    write: !doNotWrite,
    ...(!doNotWrite && { outfile: paths.DIST_MAIN })
  }
  return esbuild.build(options)
}

function buildUi() {
  return esbuild.build({
    define: BUILD_REPLACEMENTS,
    entryPoints: [paths.SRC_UI],
    bundle: true,
    minify: MINIFY_DISTRIBUTION,
    platform: 'browser',
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
    plugins: [sassPlugin()],
    sourcemap: SOURCE_MAPS,
    outfile: paths.DIST_UI
  })
}

function buildStatementsCss(doNotWrite) {
  const options = {
    entryPoints: [paths.SRC_STATEMENTS_CSS],
    bundle: true,
    minify: MINIFY_DISTRIBUTION,
    loader: { '.scss': 'css' },
    plugins: [sassPlugin()],
    sourcemap: SOURCE_MAPS,
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

    const pluginPromises = allPluginContent.map(({ dist, content }) => {
      const [promise, resolve, reject] = makePromise()
      fs.writeFile(dist, content, err => (err ? reject(err) : resolve()))
      return promise
    })

    const pluginRegistryJs = buildPluginsRegistryContent(allPluginMeta)
    const [registryPromise, resolve, reject] = makePromise()
    fs.writeFile(paths.DIST_PLUGIN_JS, pluginRegistryJs, err =>
      err ? reject(err) : resolve()
    )

    return Promise.all(pluginPromises.concat(registryPromise))
  })
}

//
// Plugin building helpers
//

function buildPluginsRegistryContent(allPluginMeta) {
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
          allPluginMeta.map(pluginMeta => {
            return esbuild
              .build({
                define: BUILD_REPLACEMENTS,
                entryPoints: [pluginMeta.src],
                bundle: true,
                minify: MINIFY_DISTRIBUTION,
                platform: 'browser',
                sourcemap: SOURCE_MAPS,
                write: false
              })
              .then(build => {
                return {
                  pluginMeta,
                  pluginContent: getFullEsbuildContent(build)
                }
              })
          })
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
