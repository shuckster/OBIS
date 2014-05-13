`EDIT: 12th May 2014` Just noticed Github now serve the JS as text/plain, which breaks the Bookmarklet in various browsers. Hosting the files yourself will fix the problem. Alternatively, wait a week or two while I work out a solution.

OBIS: Online Banking Is Shit
==============================

#### A JavaScript framework for downloading bank statements

Copyright (c) 2014 by [Conan Theobald](mailto:me[at]conans[dot]co[dot]uk)

MIT licensed: See [LICENSE.md](LICENSE.md)

## About

Right now, OBIS is for downloading statements from HSBC UK Personal Banking
in a variety of different formats. HSBC only allows downloading of the last
3 months of transaction data. That's shit. OBIS can download the lot.

Currently supports _only_ HSBC UK, but other parsers are possible. Works best
in Google Chrome. Other browsers will work, but won't benefit from automatic
naming of your Zip download.

Saves a Zip of your statements in OFX, QIF, CSV, JSON, or all of them.

![Screenshot of HSBC UK parser](screenshot.gif)

## Instructions

Open `dist/bookmarklet.js`, copy everything, paste into a new bookmark, log in
to your HSBC UK _Previous Statements_ page, click the new bookmark.

That bookmark will load OBIS directly from the Github raw master, so if
something breaks you shouldn't need to do anything when it gets fixed. (Except
maybe clear your browser-cache).

## Developers

Open [API.md](API.md) for instructions on how to use OBIS with your own
parsers.

## Credits

Inspired by:

*   https://github.com/LTheobald/HSBCToOFX
*   http://aralbalkan.com/3744

Implements the fine work of these 3rd parties:

*   http://stuartk.com/jszip
*   http://eligrey.com/blog/post/saving-generated-files-on-the-client-side
*   http://www.webtoolkit.info/
*   http://jquery.com/

jQuery 1.5.2 is used because that's the version HSBC UK use.
