import { SortByNumber } from '@/obis/utils/sorting'
import { useState, useEffect, useCallback, useMemo } from 'mithril-hooks'
import { useAccounts, useStatements, useEntries } from './base'

const UNKNOWN_ACCOUNT = { sortCode: '', accountNumber: '' }

//
// Statements in an account
//

export function useAccountStatements(accountId) {
  const accounts = useAccounts()
  const [account, setAccount] = useState()
  const [accountInfo, setAccountInfo] = useState()

  useEffect(() => {
    const account = accounts.find(x => x.id === accountId)
    const { sortCode, accountNumber } = account ?? UNKNOWN_ACCOUNT
    const accountInfo = `${sortCode} ${accountNumber}`
    setAccount(account)
    setAccountInfo(accountInfo)
  }, [accounts, accountId, setAccount, setAccountInfo])

  // Statements

  const statements = useStatements()
  const accountStatements = useMemo(
    () => statements.filter(x => x.accountId === accountId),
    [statements, accountId]
  )

  const getNewest = useCallback(() => {
    return accountStatements[0]?.id
  }, [accountStatements])

  const getNewerThan = useCallback(
    statementId => {
      const currentStatementIndex = accountStatements
        .map((x, index) => (x.id === statementId ? index : null))
        .filter(x => x !== null)[0]

      return accountStatements[Math.max(0, currentStatementIndex - 1)]?.id
    },
    [accountStatements]
  )

  const getOlderThan = useCallback(
    statementId => {
      const currentStatementIndex = accountStatements
        .map((x, index) => (x.id === statementId ? index : null))
        .filter(x => x !== null)[0]

      return accountStatements[
        Math.min(accountStatements.length - 1, currentStatementIndex + 1)
      ]?.id
    },
    [accountStatements]
  )

  const getNearestToDate = useCallback(
    timestamp => {
      const statementsWithDateDeltas = accountStatements
        .map(x => ({
          dateDelta: Math.abs(timestamp - x.endDate),
          id: x.id
        }))
        .sort(SortByNumber('dateDelta'))

      return statementsWithDateDeltas[0]?.id ?? getNewest()
    },
    [accountStatements]
  )

  return {
    account,
    accountInfo,
    accountStatements,
    getNewest,
    getNewerThan,
    getOlderThan,
    getNearestToDate
  }
}

//
// Entries in a statement
//

export function useStatementEntries(statementId) {
  const statements = useStatements()
  const { startDate, startBalance, endDate, endBalance } = useMemo(
    () => statements.find(x => x.id === statementId) ?? {},
    [statements, statementId]
  )

  // Entries

  const entries = useEntries()
  const [statementEntries, setStatementEntries] = useState([])
  const [totalDebit, setTotalDebit] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
  const [creditDebitDiff, setCreditDebitDiff] = useState(0)

  useEffect(() => {
    const statementEntries = entries.filter(x => x.statementId === statementId)
    setStatementEntries(statementEntries)

    const totalDebit = statementEntries.reduce((acc, x) => acc + x.debit, 0)
    const totalCredit = statementEntries.reduce((acc, x) => acc + x.credit, 0)
    const creditDebitDiff = totalCredit - totalDebit

    setTotalDebit(isNaN(totalDebit) ? 0 : totalDebit)
    setTotalCredit(isNaN(totalCredit) ? 0 : totalCredit)
    setCreditDebitDiff(isNaN(creditDebitDiff) ? 0 : creditDebitDiff)
  }, [statementId, entries, setStatementEntries])

  return {
    entries: statementEntries,
    startDate,
    startBalance,
    endDate,
    endBalance,
    totalDebit,
    totalCredit,
    creditDebitDiff
  }
}
