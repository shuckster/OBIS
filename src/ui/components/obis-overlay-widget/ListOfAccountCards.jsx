import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

import { store } from '@/obis/store'
import { pipe } from '@/cjs/fp'

// Components
import { Account } from './atoms/Account'
import { AccountName } from './atoms/AccountName'
import { Accounts } from './atoms/Accounts'
import { StatementsLoaded } from './atoms/StatementsLoaded'
import { YearsLoaded } from './atoms/YearsLoaded'

export const ListOfAccountCards = ViewComponent(() => {
  return (
    <Accounts>
      {store().accounts.map(account => {
        const allStatementYears = pipe(
          store(),
          $ => $.statements.filter(x => x.accountId === account.id),
          $ => $.map(x => new Date(x.endDate).getFullYear())
        )

        const uniqueStatementYears = pipe(
          allStatementYears,
          $ => new Set($),
          $ => [...$]
        )

        return (
          <Account key={account.id}>
            <StatementsLoaded>
              Statements: {allStatementYears.length}
            </StatementsLoaded>
            <YearsLoaded>{uniqueStatementYears.join(' ')}</YearsLoaded>
            <AccountName>
              {account.sortCode} {account.accountNumber}
            </AccountName>
          </Account>
        )
      })}
    </Accounts>
  )
})
