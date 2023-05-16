import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'
import clsx from 'clsx'
import { simpleDate } from '@/obis/utils/dates'
import { convertCentsToDecimalForDisplay } from '@/obis/utils/currency'
import { useStatementEntries } from '@/store/derived'
import { STATEMENTS_KEEP_BALANCE_HISTORY } from './StatementsBrowser'

export const Statement = ViewComponent(props => {
  const { selectedStatementId } = props
  const { entries, startBalance, endBalance } =
    useStatementEntries(selectedStatementId)

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
        <td className="currency">{convertCentsToDecimalForDisplay(debit)}</td>
        <td className="currency">{convertCentsToDecimalForDisplay(credit)}</td>
        <td
          className={clsx('currency', {
            negative: balance < 0
          })}
        >
          {convertCentsToDecimalForDisplay(balance)}
        </td>
        {STATEMENTS_KEEP_BALANCE_HISTORY && (
          <td
            className={clsx('currency', {
              negative: runningBalance < 0
            })}
          >
            {convertCentsToDecimalForDisplay(runningBalance)}
          </td>
        )}
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
          {STATEMENTS_KEEP_BALANCE_HISTORY && <th>(Calculated)</th>}
        </tr>
      </thead>
      <tbody>{rows.length ? rows : emptyState}</tbody>
      <tfoot>
        <tr className="table-footer">
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th className="currency">
            {convertCentsToDecimalForDisplay(totalDebit)}
          </th>
          <th className="currency">
            {convertCentsToDecimalForDisplay(totalCredit)}
          </th>
          <th className="currency">
            {convertCentsToDecimalForDisplay(endBalance)}
          </th>
          {STATEMENTS_KEEP_BALANCE_HISTORY && (
            <th className="currency">
              {convertCentsToDecimalForDisplay(runningBalance)}
            </th>
          )}
        </tr>
      </tfoot>
    </table>
  )
})
