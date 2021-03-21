/* globals obis */

//
// OBIS Statements Browser
//

import m from 'mithril'
import {
  withHooks as ViewComponent,
  useState,
  useCallback,
  useEffect
} from 'mithril-hooks'

import clsx from 'clsx'

import { actions } from '@/obis/actions'
import { simpleDate } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'

import { useAccounts } from '../store/base'
import { useAccountStatements, useStatementEntries } from '../store/derived'

export function createStatementsWindow() {
  const windowRef = window.open(
    'text/html',
    'obis',
    'width=1000,height=750,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1'
  )

  windowRef.document.writeln(`
    <html>
      <head>
        <title>Statements</title>
        <style type="text/css">
          @import url('${obis.rootPath}/statement.css');
        </style>
      </head>
      <body
        onload="opener.messages.emit('${actions.ui.STATEMENTS_WINDOW_READY}');"
        onunload="opener.messages.emit('${actions.ui.STATEMENTS_WINDOW_CLOSED}');"
      >
      </body>
    </html>
  `)
  windowRef.document.close()

  return windowRef
}

const Info = ViewComponent(props => {
  const { children = [] } = props || {}
  return children
})

const Accounts = ViewComponent(props => {
  const { selectedAccountId, handleClick } = props
  const accounts = useAccounts()

  const clickHandler = useCallback(
    event => {
      const accountId = event?.path
        .map(x => x?.dataset?.account)
        .filter(Boolean)[0]

      handleClick(accountId)
    },
    [handleClick]
  )

  return accounts.map(account => (
    <div
      onclick={clickHandler}
      key={account.id}
      data-account={account.id}
      className={clsx('account', {
        selected: account.id === selectedAccountId
      })}
    >
      <div className="statements-loaded"></div>
      <div className="years-loaded"></div>
      <div className="account-name">
        {account.sortCode} {account.accountNumber}
      </div>
    </div>
  ))
})

const Cursor = ViewComponent(props => {
  const { children = [] } = props || {}
  return children
})

const Months = ViewComponent(props => {
  const _months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|')
  const { selectedMonth, months = [], handleClick } = props || {}

  const clickHandler = useCallback(
    event => handleClick(event?.target?.dataset?.month),
    [handleClick]
  )

  return _months.map((month, index) => (
    <div
      onclick={clickHandler}
      key={month}
      data-month={index}
      className={clsx('month', {
        selected: index === selectedMonth,
        'no-entries': !months.includes(index)
      })}
    >
      {month}
    </div>
  ))
})

const Years = ViewComponent(props => {
  const { selectedYear, years = [], handleClick } = props || {}

  const clickHandler = useCallback(
    event => handleClick(event?.target?.dataset?.year),
    [handleClick]
  )

  return years.map(year => (
    <div
      onclick={clickHandler}
      key={year}
      data-year={year}
      className={clsx('year', {
        selected: year == selectedYear
      })}
    >
      {year}
    </div>
  ))
})

const Statement = ViewComponent(props => {
  const { selectedStatementId } = props
  const { entries, startBalance, endBalance } = useStatementEntries(
    selectedStatementId
  )

  let totalCredit = 0
  let totalDebit = 0
  let runningBalance = startBalance ?? 0

  const rows = entries.map(entry => {
    const { id, date, type, payee, note, debit, credit, balance } = entry

    totalDebit -= debit
    totalCredit += credit
    runningBalance += credit - debit

    return (
      <tr key={id}>
        <td className="no-wrap">{simpleDate(date)}</td>
        <td>{type}</td>
        <td>{payee}</td>
        <td>{note}</td>
        <td className="currency">{convertCentsToDecimal(debit)}</td>
        <td className="currency">{convertCentsToDecimal(credit)}</td>
        <td
          className={clsx('currency', {
            negative: balance < 0
          })}
        >
          {convertCentsToDecimal(balance)}
        </td>
        <td
          className={clsx('currency', {
            negative: runningBalance < 0
          })}
        >
          {convertCentsToDecimal(runningBalance)}
        </td>
      </tr>
    )
  })

  let emptyState

  if (!rows.length) {
    emptyState = (
      <tr>
        <td className="no-wrap no-entries" colspan="8">
          No entries for this period
        </td>
      </tr>
    )
  }

  return (
    <table className="statement">
      <thead>
        <tr className="table-header">
          <th>Date</th>
          <th>Type</th>
          <th>Description</th>
          <th>Memo</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance</th>
          <th>(Calculated)</th>
        </tr>
      </thead>
      <tbody>{rows.length ? rows : emptyState}</tbody>
      <tfoot>
        <tr className="table-footer">
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th className="currency">{convertCentsToDecimal(totalDebit)}</th>
          <th className="currency">{convertCentsToDecimal(totalCredit)}</th>
          <th className="currency">{convertCentsToDecimal(endBalance)}</th>
          <th className="currency">{convertCentsToDecimal(runningBalance)}</th>
        </tr>
      </tfoot>
    </table>
  )
})

export const StatementsPicker = ViewComponent(() => {
  const accounts = useAccounts()
  const [accountId, setAccountId] = useState(accounts[0]?.id)

  //
  // Statements
  //

  const {
    accountInfo,
    accountStatements,
    getNewest,
    getNewerThan,
    getOlderThan,
    getNearestToDate
  } = useAccountStatements(accountId)

  const [selectedStatementId, setSelectedStatementId] = useState(getNewest())
  const [selectedStatementDate, setSelectedStatementDate] = useState(
    accountStatements.find(x => x.id === selectedStatementId)?.endDate
  )

  //
  // Deal with selecting a statement after switching accounts
  //

  useEffect(() => {
    const selectedStatement = accountStatements.find(
      x => x.id === selectedStatementId
    )

    if (selectedStatement) {
      setSelectedStatementDate(selectedStatement.endDate)
    } else {
      const newStatementId = getNearestToDate(selectedStatementDate)
      setSelectedStatementId(newStatementId)
    }
  }, [
    accountStatements,
    selectedStatementId,
    selectedStatementDate,
    setSelectedStatementId,
    setSelectedStatementDate,
    getNearestToDate
  ])

  //
  // Available years/months in account-statements
  //

  const initialDate = new Date(selectedStatementDate)
  const [selectedMonth, setSelectedMonth] = useState(initialDate.getMonth())
  const [selectedYear, setSelectedYear] = useState(initialDate.getFullYear())

  useEffect(() => {
    const updatedDate = new Date(selectedStatementDate)
    setSelectedMonth(updatedDate.getMonth())
    setSelectedYear(updatedDate.getFullYear())
  }, [selectedStatementDate])

  const [years, setYears] = useState([])
  const [months, setMonths] = useState([])

  useEffect(() => {
    const allYears = accountStatements.map(x =>
      new Date(x.endDate).getFullYear()
    )
    const uniqueYears = [...new Set(allYears)]

    // Months
    const allMonths = accountStatements
      .filter(x => new Date(x.endDate).getFullYear() == selectedYear)
      .map(x => new Date(x.endDate).getMonth())

    const uniqueMonths = [...new Set(allMonths)]

    // Update
    setYears(uniqueYears)
    setMonths(uniqueMonths)
  }, [accountStatements, selectedStatementDate, selectedYear])

  //
  // Balance summary
  //

  const selectedStatement = useStatementEntries(selectedStatementId)
  const { totalDebit, totalCredit, creditDebitDiff } = selectedStatement

  //
  // Click handlers
  //

  const selectAccount = useCallback(accountId => setAccountId(accountId), [
    setAccountId
  ])

  const latestStatement = useCallback(
    () => setSelectedStatementId(getNewest()),
    [setSelectedStatementId, getNewest]
  )

  const olderStatement = useCallback(
    () => setSelectedStatementId(getOlderThan(selectedStatementId)),
    [setSelectedStatementId, getOlderThan, selectedStatementId]
  )

  const newerStatement = useCallback(
    () => setSelectedStatementId(getNewerThan(selectedStatementId)),
    [setSelectedStatementId, getNewerThan, selectedStatementId]
  )

  // FIXME: useCallback() not updating across years?
  const selectMonth = month => {
    const dateWithDifferentMonth = new Date(selectedStatementDate)
    dateWithDifferentMonth.setMonth(month)
    setSelectedStatementId(getNearestToDate(dateWithDifferentMonth))
  }

  const selectYear = year => {
    const dateWithDifferentYear = new Date(selectedStatementDate)
    dateWithDifferentYear.setFullYear(year)
    setSelectedStatementId(getNearestToDate(dateWithDifferentYear))
  }

  return (
    <div className="grid-container">
      <div className="header">
        <div className="info-and-accounts">
          <div className="info">
            <Info>
              <h1>OBIS | Statements Browser</h1>
              <h2>
                {accountInfo} &bull;{' '}
                {!isNaN(selectedStatementDate) &&
                  simpleDate(selectedStatementDate)}
              </h2>
              <div className="balance-summary">
                {totalCredit > 0 && (
                  <span>{convertCentsToDecimal(totalCredit)} in</span>
                )}
                {totalDebit > 0 && (
                  <span>{convertCentsToDecimal(totalDebit)} out</span>
                )}
                {creditDebitDiff !== 0 && (
                  <span
                    className={clsx({
                      black: creditDebitDiff > 0,
                      red: creditDebitDiff < 0
                    })}
                  >
                    {creditDebitDiff <= 0 ? '📉 ' : '📈 '}
                    {convertCentsToDecimal(creditDebitDiff)}
                  </span>
                )}
              </div>
            </Info>
          </div>
          <div className="accounts">
            <Accounts
              selectedAccountId={accountId}
              handleClick={selectAccount}
            />
          </div>
        </div>
        <div className="cursor-and-months">
          <div className="months">
            <Months
              months={months}
              selectedMonth={selectedMonth}
              handleClick={selectMonth}
            />
          </div>
          <div className="cursor">
            <Cursor>
              <div onclick={olderStatement}>Older</div>
              <div onclick={latestStatement}>&bull;</div>
              <div onclick={newerStatement}>Newer</div>
            </Cursor>
          </div>
        </div>
      </div>
      <div className="main">
        <Statement selectedStatementId={selectedStatementId} />
      </div>
      <div className="years">
        <div>
          <Years
            years={years}
            selectedYear={selectedYear}
            handleClick={selectYear}
          />
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  )
})
