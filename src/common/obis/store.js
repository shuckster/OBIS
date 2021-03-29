import { produce } from 'immer'
import { messages } from '@/esm/bus'
import { actions } from '@/obis/actions'

import { ObjTypeError, isString, isNumber, isUnset } from '@/esm/types'

//
// Keep a history of changes for debugging. We're using immer, so it's cheap
//

const HISTORY_LIMIT = 10

const storeHistory = [
  {
    accounts: [],
    statements: [],
    entries: []
  }
]

//
// STORE
//

function hydrate(payload) {
  pushStore(payload)
  messages.emit(actions.STORE_HYDRATED)
}

function store() {
  return storeHistory[storeHistory.length - 1]
}
store.history = storeHistory
store.hydrate = hydrate

function pushStore(nextStore) {
  storeHistory.push(nextStore)
  if (storeHistory.length > HISTORY_LIMIT) {
    storeHistory.shift()
  }

  messages.emit(actions.STORE_UPDATED)
}

const checkSchema = ObjTypeError('store#')

export const LEAVE_UNCHANGED = null

//
// INTERFACES:
//

// Accounts
//

const checkSchemaForAddingAnAccount = checkSchema({
  id: isString,

  accountNumber: isString,
  sortCode: isString,
  name: [isString, isUnset],
  type: [isString, isUnset],
  iban: [isString, isUnset],
  bic: [isString, isUnset]
})(actions.add.ACCOUNTS)

const checkSchemaForUpdatingAnAccount = checkSchema({
  id: isString,

  accountNumber: [isString, isUnset],
  sortCode: [isString, isUnset],
  name: [isString, isUnset],
  type: [isString, isUnset],
  iban: [isString, isUnset],
  bic: [isString, isUnset]
})(actions.update.ACCOUNTS)

messages.on(actions.add.ACCOUNTS, accounts => {
  const currentStore = store()
  const nextStore = produce(currentStore, draftState => {
    accounts.forEach(account => {
      const err = checkSchemaForAddingAnAccount(account)
      if (err) {
        throw TypeError(err)
      }

      const existingAccount = draftState.accounts.find(x => x.id === account.id)
      if (existingAccount) {
        console.log('Account exists', existingAccount)
        return
      }

      draftState.accounts.push({ ...account })
    })
  })

  if (nextStore !== currentStore) {
    pushStore(nextStore)
  }
})

messages.on(actions.update.ACCOUNTS, accounts => {
  const unseenAccounts = []
  const currentStore = store()
  const nextStore = produce(currentStore, draftState => {
    accounts.forEach(account => {
      const err = checkSchemaForUpdatingAnAccount(account)
      if (err) {
        throw TypeError(err)
      }

      const existingAccount = draftState.accounts.find(x => x.id === account.id)
      if (!existingAccount) {
        unseenAccounts.push(account)
        return
      }

      Object.entries(account).forEach(([key, value]) => {
        if (isUnset(value)) {
          return
        }
        existingAccount[key] = value
      })
    })
  })

  if (unseenAccounts.length) {
    console.log('Not updating unseen accounts: ', unseenAccounts)
  }

  if (nextStore !== currentStore) {
    pushStore(nextStore)
  }
})

//
// Statements
//

const checkSchemaForAddingAStatement = checkSchema({
  id: isString,
  accountId: isString,

  endDate: isNumber,
  startDate: [isNumber, isUnset],
  startBalance: [isNumber, isUnset],
  endBalance: [isNumber, isUnset]
})(actions.add.STATEMENTS)

const checkSchemaForUpdatingAStatement = checkSchema({
  id: isString,
  accountId: [isString, isUnset],

  endDate: isNumber,
  startDate: isNumber,
  startBalance: isNumber,
  endBalance: isNumber
})(actions.update.STATEMENTS)

messages.on(actions.add.STATEMENTS, statements => {
  const existingStatements = []
  const currentStore = store()
  const nextStore = produce(currentStore, draftState => {
    statements.forEach(statement => {
      const err = checkSchemaForAddingAStatement(statement)
      if (err) {
        throw TypeError(err)
      }

      const existingStatement = draftState.statements.find(
        x => x.id === statement.id
      )
      if (existingStatement) {
        existingStatements.push(existingStatement)
        return
      }

      draftState.statements.push({ ...statement })
    })
  })

  if (existingStatements.length) {
    console.log('Not overwriting existing statements: ', existingStatements)
  }

  if (nextStore !== currentStore) {
    pushStore(nextStore)
  }
})

messages.on(actions.update.STATEMENTS, statements => {
  const unseenStatements = []
  const currentStore = store()
  const nextStore = produce(currentStore, draftState => {
    statements.forEach(statement => {
      const err = checkSchemaForUpdatingAStatement(statement)
      if (err) {
        throw TypeError(err)
      }

      const existingStatement = draftState.statements.find(
        x => x.id === statement.id
      )
      if (!existingStatement) {
        unseenStatements.push(statement)
        return
      }

      Object.entries(statement).forEach(([key, value]) => {
        if (isUnset(value)) {
          return
        }
        existingStatement[key] = value
      })
    })
  })

  if (unseenStatements.length) {
    console.log('Not updating unseen statements: ', unseenStatements)
  }

  if (nextStore !== currentStore) {
    pushStore(nextStore)
  }
})

//
// Entries
//

const checkSchemaForAddingAnEntry = checkSchema({
  id: isString,
  accountId: isString,
  statementId: isString,

  date: isNumber,
  type: isString,
  payee: isString,
  note: isString,
  debit: isNumber,
  credit: isNumber,
  balance: isNumber
})(actions.add.ENTRIES)

messages.on(actions.add.ENTRIES, entries => {
  const existingEntries = []
  const currentStore = store()
  const nextStore = produce(currentStore, draftState => {
    entries.forEach(entry => {
      const err = checkSchemaForAddingAnEntry(entry)
      if (err) {
        throw TypeError(err)
      }

      const existingEntry = draftState.entries.find(x => x.id === entry.id)
      if (existingEntry) {
        existingEntries.push(existingEntry)
        return
      }

      draftState.entries.push({ ...entry })
    })
  })

  if (existingEntries.length) {
    console.log('Not overwriting existing entries: ', existingEntries)
  }

  if (nextStore !== currentStore) {
    pushStore(nextStore)
  }
})

export { store }
