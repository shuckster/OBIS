import { mermaid } from 'statebot'

/**
 * Flow for the accounts/statements fetcher
 */

export const obisFetchFlow = mermaid(`
::: mermaid

stateDiagram-v2
  %% Happy path
  %%
    idle --> getting_accounts
    getting_accounts --> found_accounts
    found_accounts --> getting_statements
    getting_statements --> found_statements
    found_statements --> getting_entries
    getting_entries --> found_entries

  %% Downloading Zip
  %%
    found_entries --> download_all
    download_all --> found_entries

  %% Failures
  %%
    getting_accounts --> failed_accounts
    failed_accounts --> idle
    getting_statements --> failed_statements
    failed_statements --> idle
    getting_entries --> failed_entries
    failed_entries --> idle

:::
`)
