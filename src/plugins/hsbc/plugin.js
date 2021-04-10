/* globals obis */

//
// HSBC UK plugin entry-point
//

import { actions } from '@/obis/actions'

import configureAccountsInterceptor from './requesters/accounts'
import configureStatementsInterceptor from './requesters/statements'
import configureEntriesInterceptor from './requesters/entries'

obis.makePluginAvailable('hsbc-uk', () => {
  const { requestAccounts } = configureAccountsInterceptor()
  const { requestStatements } = configureStatementsInterceptor()
  const { requestEntries } = configureEntriesInterceptor()

  const fetcher = obis.fetchMachine
  const { messages } = obis.deps
  const { emit } = messages

  let yearsToDownload

  fetcher.performTransitions({
    //
    // Accounts
    //
    'idle -> getting-accounts': {
      on: actions.get.ACCOUNTS,
      then: requestedYearsToDownload => {
        yearsToDownload = requestedYearsToDownload
        console.log('requestedYearsToDownload = ', requestedYearsToDownload)
        requestAccounts()
      }
    },
    'getting-accounts -> found-accounts': {
      on: actions.got.ACCOUNTS,
      then: () => emit(actions.get.STATEMENTS)
    },
    'getting-accounts -> failed-accounts': {
      on: actions.error.ACCOUNTS,
      then: () => fetcher.enter('idle')
    },

    //
    // Statements list
    //
    'found-accounts -> getting-statements': {
      on: actions.get.STATEMENTS,
      then: () => {
        const thisYear = new Date().getFullYear()
        const yearsToRequest = new Array(yearsToDownload)
          .fill()
          .map((_, goBack) => String(thisYear - goBack))

        requestStatements(yearsToRequest.length ? yearsToRequest : ['Latest'])
      }
    },
    'getting-statements -> found-statements': {
      on: actions.got.STATEMENTS,
      then: () => emit(actions.get.ENTRIES)
    },
    'getting-statements -> failed-statements': {
      on: actions.error.STATEMENTS,
      then: () => fetcher.enter('found-accounts')
    },

    //
    // Statement detail
    //
    'found-statements -> getting-entries': {
      on: actions.get.ENTRIES,
      then: () => requestEntries()
    },
    'getting-entries -> found-entries': {
      on: actions.got.ENTRIES,
      then: () => {}
    },
    'getting-entries -> failed-entries': {
      on: actions.error.ENTRIES,
      then: () => fetcher.enter('found-statements')
    },

    //
    // Downloading
    //
    'found-entries -> download-all': {
      on: actions.ui.DOWNLOAD_STATEMENTS,
      then: () => {}
    },
    'download-all -> found-entries': {
      on: actions.ui.DOWNLOADED_STATEMENTS,
      then: () => {}
    }
  })

  fetcher.info()
})
