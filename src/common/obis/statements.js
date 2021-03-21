//
// Creates statements in the ancient OBIS format for the sake of compatibility
//

import { store } from '@/obis/store'
import { generateIdForTransaction } from '@/obis/generators'
import { dateTimeString } from '@/obis/utils/dates'

export function compatMakeStatements() {
  const { accounts, statements, entries } = store()

  const compatStatements = statements.reduce((acc, statement) => {
    const statementAccount = accounts.find(
      account => account.id === statement.accountId
    )

    const statementBalances = [
      compatMakeBalance(statement, 'start'),
      compatMakeBalance(statement, 'end')
    ]

    const statementEntries = entries
      .filter(entry => entry.statementId === statement.id)
      .map(entry => {
        const { id, date, type, payee, note, debit, credit, balance } = entry
        return {
          id,
          date,
          type,
          payee,
          note,
          debit,
          credit,
          balance
        }
      })

    const { iban, bic, type, name, accountNumber, sortCode } = statementAccount

    return [
      ...acc,
      {
        id: `${iban}_${dateTimeString(statement.endDate)}`,
        // id: statement.id,
        iban,
        bic,
        type,
        name,
        accountNumber,
        sortCode,
        date: statement.endDate,
        entries: statementEntries,
        balances: statementBalances
      }
    ]
  }, [])

  return compatStatements
}

function compatMakeBalance(statement, startOrEnd) {
  const keyPrefix = startOrEnd === 'start' ? 'start' : 'end'
  const memoPrefix = keyPrefix === 'start' ? 'Opening' : 'Closing'
  const balance = {
    debit: 0,
    credit: 0,
    balance: statement[`${keyPrefix}Balance`],
    date: statement[`${keyPrefix}Date`],
    payee: '',
    memo: `${memoPrefix} balance this month`
  }
  const id = generateIdForTransaction(balance)
  return {
    id,
    ...balance
  }
}
