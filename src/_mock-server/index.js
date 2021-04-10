const path = require('path')
const http = require('http')
const express = require('express')

require('module-alias/register')

const { composePaths, zip } = require('@/cjs/compose-paths')
const { loadTextFile } = require('@/cjs/files')

//
// CONFIG
//

const ENV = 'local' // mock-server only ever runs locally
const NON_PRODUCTION_HOST_PORT = 4000
const ROOT_PATH = { local: '' }

// APPLIED CONFIG

const BASE_URL = ROOT_PATH[ENV]
const HOST_PORT = NON_PRODUCTION_HOST_PORT

//
// PATHS
//

// eslint-disable-next-line no-unused-vars
const paths = composePaths(`
  ${__dirname}/../..
    /dist
      /main.js                        = BOOKMARKLET_LOADER
      /main.js.map                    = BOOKMARKLET_LOADER_MAP

      /ui.js                          = UI
      /ui.js.map                      = UI_MAP
      /ui.css                         = UI_CSS
      /statement.css                  = STATEMENT_CSS

      /plugins.js                     = PLUGINS_REGISTRY
      /plugins
        /hsbc-uk.js                   = HSBC_PLUGIN
        /hsbc-uk.js.map               = HSBC_PLUGIN_MAP

    /src
      /_mock-server
        /public
          /index.html                 = HOME
          /index.html                 = INDEX
          /debug.html                 = DEBUG

          /hsbc/full/store.json       = FULL_MOCK

          /hsbc/fixtures
            /rtrvAcctSumm.json        = ACCOUNT_SUMMARY
            /rtrvStmtAcctList.json    = STATEMENT_ACCOUNT_LIST
            /rtrvStmtDetl.json        = STATEMENT_DETAIL

      /common
        /bus.js                       = BUS
        /ajacks.js                    = AJAX_HIJACK
        /hsbc.js                      = HSBC_HIJACK

      /bookmarklet.js                 = DEBUG_BOOKMARKLET
`)

const routes = composePaths(`
  /                                   = HOME
    /index.html                       = INDEX
    /main.js                          = BOOKMARKLET_LOADER
    /main.js.map                      = BOOKMARKLET_LOADER_MAP

    /ui.js                            = UI
    /ui.js.map                        = UI_MAP
    /ui.css                           = UI_CSS
    /statement.css                    = STATEMENT_CSS

    /plugins.js                       = PLUGINS_REGISTRY
    /plugins
      /hsbc-uk.js                     = HSBC_PLUGIN
      /hsbc-uk.js.map                 = HSBC_PLUGIN_MAP

  /debug                              = DEBUG
    /bookmarklet.js                   = DEBUG_BOOKMARKLET

  /lib
    /bus.js                           = BUS
    /ajacks.js                        = AJAX_HIJACK
    /hsbc.js                          = HSBC_HIJACK

  /hsbc/full/store.json               = FULL_MOCK

  /gpib/channel/proxy/accountDataSvc
    /rtrvAcctSumm                     = ACCOUNT_SUMMARY
    /rtrvStmtAcctList                 = STATEMENT_ACCOUNT_LIST
    /rtrvStmtDetl                     = STATEMENT_DETAIL
`)

const fixedRoutes = zip(routes, paths, {
  aliases: ['DEBUG_BOOKMARKLET', 'INDEX', 'HOME'],
  ignoreAliases: true
})

const headers = {
  '*.html': {
    'Content-Type': 'text/html'
  },
  '*.json': {
    'Content-Type': 'application/json'
  },
  '*.js': {
    'Content-Type': 'application/javascript'
  }
}

function detectHeader(_path) {
  const found = Object.entries(headers).find(([pattern]) => {
    const matcher = makeRegExpFromWildcardString(pattern)
    return matcher.test(_path)
  })
  return found && found[1]
}

//
// MAIN
//

function main() {
  const app = express()
  const server = http.createServer(app)
  const io = require('socket.io')(server)

  // Bootstrap

  fixedRoutes.forEach(([_route, _path]) => {
    app.get(route(_route), sendFile(_path, detectHeader(_path)))
  })

  // Bookmarklet

  app.get(
    route(routes.DEBUG_BOOKMARKLET),
    sendText(
      loadTextFile(paths.DEBUG_BOOKMARKLET).then(text =>
        text.replace('process.env.NODE_ENV', `"${ENV}"`)
      ),
      detectHeader(paths.DEBUG_BOOKMARKLET)
    )
  )

  // Load index.html, but inject the bookmarklet script so we don't have
  // to manually load it every time.

  const injectBookmarkletIntoIndex = sendText(
    loadTextFile(paths.INDEX).then(text =>
      text.replace(
        '<!-- Load bookmarklet automatically -->',
        '<script defer src="/debug/bookmarklet.js"></script>'
      )
    ),
    detectHeader(paths.INDEX)
  )

  app.get(route(routes.HOME), injectBookmarkletIntoIndex)
  app.get(route(routes.INDEX), injectBookmarkletIntoIndex)

  // HSBC debugging fixtures

  app.post(
    route(routes.ACCOUNT_SUMMARY),
    sendFile(paths.ACCOUNT_SUMMARY, headers.JSON)
  )
  app.post(
    route(routes.STATEMENT_ACCOUNT_LIST),
    sendFile(paths.STATEMENT_ACCOUNT_LIST, headers.JSON)
  )
  app.post(
    route(routes.STATEMENT_DETAIL),
    sendFile(paths.STATEMENT_DETAIL, headers.JSON)
  )

  // Repeat messages in debug-window via websocket

  io.on('connection', socket => {
    socket.on('message-bus', detail => {
      if (
        detail?.eventName === 'ui/rendered' &&
        process.env.HYDRATE === 'yes'
      ) {
        io.emit('message-bus', {
          eventName: 'debug/hydrate',
          args: [],
          timestamp: Date.now()
        })
      }

      socket.broadcast.emit('message-bus', detail)
    })
  })

  server.listen(HOST_PORT, () => {
    console.log(`Mock-server running at: http://localhost:${HOST_PORT}`)
    console.log(`> Use the OBIS bookmarklet on that page.`)
  })
}

//
// HELPERS
//

function route(relPath) {
  return path.join(BASE_URL || '', relPath || '/')
}

function sendFile(name, headers = {}) {
  return (req, res) => {
    Object.entries(headers).forEach(([header, value]) =>
      res.setHeader(header, value)
    )

    res.sendFile(name)
  }
}

function sendText(textPromise, headers = {}) {
  return (req, res) =>
    textPromise
      .then(text => {
        Object.entries(headers).forEach(([header, value]) =>
          res.setHeader(header, value)
        )

        res.writeHead(200)
        res.end(text)
      })
      .catch(err => {
        res.writeHead(500)
        res.end(`Error: ${err}`)
      })
}

function memoize(fn, cache = new Map()) {
  return x => (cache.has(x) ? cache.get(x) : cache.set(x, fn(x)).get(x))
}

const makeRegExpFromWildcardString = memoize(str => {
  if (!str.length) {
    throw new Error('String should not be empty')
  }
  const sanitized = str
    .split('*')
    .map(x => x.trim())
    .map(escapeStringForRegExp)

  // Allow matching of wildcards
  let rxString = sanitized.join('(.*)')

  if (sanitized.length === 1) {
    // No wildcards? Match string exactly
    rxString = `^${rxString}$`
  } else {
    // No wildcard at the start? Match string-start exactly
    if (sanitized[0] !== '') {
      rxString = `^${rxString}`
    }
    // No wildcard at the end? Match string-end exactly
    if (sanitized[sanitized.length - 1] !== '') {
      rxString = `${rxString}$`
    }
  }
  return new RegExp(rxString)
})

function escapeStringForRegExp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected string to be passed-in')
  }
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

//
// ENTRY POINT
//

main()
