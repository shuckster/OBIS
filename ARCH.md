# OBIS architecture notes

Folders:

- `_mock-server/` - For running a "fake" HSBC site for testing
- `common/` - General client/server helpers
- `plugins/<bank-name>/plugin.json`
- `ui/` - OBIS main UI + statements-browser

The OBIS UI is built with [Mithril.js](https://mithril.js.org/) and [Statebot](https://github.com/shuckster/statebot), hence the state-charts:

## Application state-chart

```mermaid
stateDiagram
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
    failed_statements --> found_accounts

  getting_entries --> failed_entries
    failed_entries --> found_statements
```

The HSBC UK parser uses [JMESPath](https://jmespath.org/), which takes a great
deal of tedium out of parsing JSON API responses.

## Build system overview

Build commands:

```sh
pnpm run build:all    # create dist/
pnpm run debug        # watch build + run mock-data server
pnpm run debug:live   # run server for testing against a live site
```

Flow:

```
.----------.
| build.js |
'-+--------'
  |
  |   .---------.                            .----------------.
  +---> esbuild +--------------------------+-> bookmarklet.js +--------+
  |   '---------'                          | '----------------'        |
  |                                        |                           |
  |   .----------------------------.       | .---------.               |
  +---> src/plugins/**/plugin.json |       +-> main.js +---------------+
      '---+------------------------'         '---------'               |
          |                                                            |
          |   .------------------------.     .-------------------.     |
          +---> { name } = plugin.json +-----> ${name}/plugin.js |     |
          |   '------------------------'     '----+--------------'     |
          |                                       |                    |
          |                                  .----v----.               |
          |   .-----------------.            | esbuild +-----+         |
          +---> Create registry |            '---------'     |         |
              | > plugins.js    |                            |         |
              '--------+--------'                            |         |
                       |                                     |         |
                       |                               .-----v-----.   |
                       |                               |           |   |
                       +------------------------------->   dist/   <---+
                                                       |           |
                                                       '-----------'
```

## Module aliases

### `@/ = src/common`

| Configured:   | Used by:                                                      |
| ------------- | ------------------------------------------------------------- |
| package.json  | `module-alias/register` used by `build.js` and `_mock-server` |
| jsconfig.json | esbuild                                                       |
