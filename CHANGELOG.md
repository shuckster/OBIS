OBIS: Online Banking Is Shit
==============================

#### A JavaScript framework for downloading bank statements

Copyright (c) 2017 by [Conan Theobald](mailto:me[at]conans[dot]co[dot]uk)

MIT licensed: See [LICENSE.md](LICENSE.md)

## Changelog

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