//
// Message-bus actions
//

const actions = {
  PLUGINS_REGISTERED: 'plugins/registered',
  PLUGIN_AVAILABLE: 'plugin/available',
  PLUGIN_LOADED: 'plugin/loaded',
  FIRST_RUN: 'first-run',
  STORE_HYDRATED: 'ui/store-hydrated',
  STORE_UPDATED: 'ui/store-updated',
  ui: {
    RENDERING: 'ui/rendering',
    RENDERED: 'ui/rendered',
    TOGGLE_OPEN: 'ui/toggle-open',
    FIND_ACCOUNTS: 'ui/find-accounts',
    FIND_STATEMENTS: 'ui/find-statements',
    VIEW_STATEMENTS: 'ui/view-statements',
    DOWNLOAD_STATEMENTS: 'ui/download-statements',
    DOWNLOADED_STATEMENTS: 'ui/downloaded-statements',
    UPDATE_PROGRESS_BAR: 'ui/update-progress-bar',
    STATEMENTS_WINDOW_READY: 'ui/statements-window-ready',
    STATEMENTS_WINDOW_CLOSED: 'ui/statements-window-closed',
    CLOSE_STATEMENTS_WINDOW: 'ui/close-statements-window',
    CHANGE_STATEMENT: 'ui/change-statement'
  },
  get: {
    ACCOUNTS: 'get/accounts',
    STATEMENTS: 'get/statements',
    ENTRIES: 'get/entries'
  },
  error: {
    ACCOUNTS: 'error/accounts',
    STATEMENTS: 'error/statements',
    ENTRIES: 'error/entries'
  },
  got: {
    ACCOUNTS: 'got/accounts',
    STATEMENTS: 'got/statements',
    ENTRIES: 'got/entries'
  },
  add: {
    ACCOUNTS: 'add/accounts',
    STATEMENTS: 'add/statements',
    ENTRIES: 'add/entries'
  },
  update: {
    ACCOUNTS: 'update/accounts',
    STATEMENTS: 'update/statements',
    ENTRIES: 'update/entries'
  }
}

export { actions }
