OBIS: Online Banking Is Shit
==============================

## A JavaScript framework for downloading bank statements

OBIS can download statements from HSBC UK Personal Banking in a variety of
formats. HSBC has historically been very limiting with its download options,
and since 2021 only allows PDF downloads of historical statements.

That's shit. OBIS can generate a Zip of your statements in OFX, QIF, CSV,
and JSON:

![Screenshot of HSBC UK parser](screenshot.gif)

OBIS currently supports _only_ HSBC UK, but other parsers are possible.

Works best in Google Chrome. Other browsers will probably work, too.

## Instructions

Open `dist/bookmarklet.js`, copy everything, paste into a new bookmark, log in
to your HSBC UK account, and click the new bookmark.

That bookmark will load OBIS directly from the Github raw master, so if
something breaks you shouldn't need to do anything when it gets fixed. (Except
maybe clear your browser-cache).

**Note:** If you used OBIS before 21st March 2021, you'll need to update any
previously created bookmarklet!

## Update @ 21st March 2021

CORB measures will likely render the above installation instructions useless.

However, you can still run OBIS locally:

```sh
git clone https://github.com/shuckster/OBIS.git
cd OBIS
pnpm i
pnpm run debug:live
```

At this point an express-server should be running, and a local bookmarklet will
have been built in `dist/` that points to it. Click it after logging into your
HSBC UK account.

## Is it safe?

If you're concerned about security on the Internet (and you should be) feel free
to browse the code of the project right here on Github. For maximum peace of
mind you can fork the project to inspect and build it yourself.

## About

OBIS was written by [Conan Theobald](https://github.com/shuckster/).

## Contributing

To support my efforts with this project please consider checking out the
accountancy company I work for: [Crunch](https://www.crunch.co.uk/).

If you'd rather not change your accountancy solution but OBIS has
made managing your finances a little less shit, you can
[buy me a coffee](https://www.buymeacoffee.com/shuckster). :)

## Credits

Contributors: @lesterw1

Inspired by:

*   https://github.com/LTheobald/HSBCToOFX (Removed, but [author](https://github.com/LTheobald) still active.)
*   https://ar.al/3744/

## License

MIT licensed: See [LICENSE](LICENSE)
