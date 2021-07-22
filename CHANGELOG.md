# Changelog

All notable changes to this project will be documented in this file.

Unreleased

- Web Extension work-in-progress, currently supports Chrome

22nd June 2021

- Remove grouping "," separators from downloads, ie; 1,000.00 vs. 1000.00
- Debits were not distinguished in some exported formats

21st March 2021

- Complete rewrite

20th February 2021

- Updated Github user-content URLs, but I'm afraid OBIS is no longer working with the new HSBC statements page. :( Will post an update if I can get it working again. Online Banking is Still Shit

4th January 2021

- Zip filename now in YYYY-MM format, thanks @lesterw1!

5th June 2017

- HSBC UK: Rewritten parser for new dojo-based HSBC web-app. Unfortunately multi-statement download is not yet working

16th May 2017

- HSBC UK: Avoid duplicate IDs for transactions with the same name/memo/date
- OFX: Balance carried forward should be converted to decimal

19th April 2017

- Support downloading HSBC-style CSV
- Tweak default CSV downloads to include fields for the transaction-type
- Added a midata generator, but it’s not implemented since it does not adhere to the full standard
- Fix QIF generator to use US-style dates

19th January 2017:

- Generators should convert cents to decimals (fixes Zip downloads)

18th January 2017:

- Support statements spanning multiple pages
- Convert decimal to cents when working with currency
- More clearly show any discrepancies between calculated/parsed running totals

19th January 2016:

- Fix confused (un)escaping in parser and generators

18th January 2016:

- HSBC UK parser: Use MD5 for ID generation, fix (hopefully) reproducibility problem
- General jslint'ing

31st March 2015:

- HSBC UK domain changed from www.hsbc.co.uk -> www.saas.hsbc.co.uk

28th September 2014:

- Bugfix HSBC UK parsing of "Balance" columns

13th May 2014:

- Use Github Pages to host dist/ files

20th February 2013:

- Initial release
