import m from 'mithril'
import { withHooks as ViewComponent, useCallback } from 'mithril-hooks'
import clsx from 'clsx'
import { useAccounts } from '@/store/base'

export const Accounts = ViewComponent(props => {
  const { selectedAccountId, handleClick } = props
  const accounts = useAccounts()

  const clickHandler = useCallback(
    event => {
      const accountId = event
        ?.composedPath()
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
