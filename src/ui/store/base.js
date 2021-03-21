/* globals obis */

import { useState, useEffect } from 'mithril-hooks'
import { actions } from '@/obis/actions'
import { store } from '@/obis/store'
import { SortByNumber } from '@/obis/utils/sorting'

const { messages } = obis.deps

export function useAccounts() {
  const [accounts, setAccounts] = useState(store().accounts)

  useEffect(() => {
    const off = messages.on(actions.STORE_UPDATED, () => {
      setAccounts(store().accounts)
    })
    return () => off()
  }, [])

  return accounts
}

export function useStatements() {
  const [statements, setStatements] = useState(store().statements)

  useEffect(() => {
    const off = messages.on(actions.STORE_UPDATED, () => {
      const sortedStatements = [...store().statements]
        .sort(SortByNumber('endDate'))
        .reverse()

      setStatements(sortedStatements)
    })
    return () => off()
  }, [])

  return statements
}

export function useEntries() {
  const [entries, setEntries] = useState(store().entries)

  useEffect(() => {
    const off = messages.on(actions.STORE_UPDATED, () => {
      const sortedEntries = [...store().entries]
        .sort(SortByNumber('date'))
        .reverse()

      setEntries(sortedEntries)
    })
    return () => off()
  }, [])

  return entries
}
