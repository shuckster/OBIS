OBIS: Online Banking Is Shit
==============================

#### A JavaScript framework for downloading bank statements

Copyright (c) 2013 by [Conan Theobald](mailto:me[at]conans[dot]co[dot]uk)

MIT licensed: See LICENSE.md

## About

This document is for people who want to write a parser for OBIS.

Parsers are the _bank specific_ parts of OBIS. It is the job of a parser to
extract information from a statement, put the data into a model, and provide
a means for the user to download it. A parser can use the OBIS API to simplify
some of these steps.

The "public" API is really very basic and won't help you much with _actual_
parsing, but in time I hope to improve this so work can be consolidated
across different parsers. Right now OBIS helps out by drawing a few buttons
and preparing your data for download in a format that's useful.

## Writing a parser with OBIS

Take a look at `parsers/hsbc.js` for an example of a working (at the time of
writing!) parser. There is a simpler pseudo-code example at the end of this
file, plus a sprinkling of smaller examples throughout the API.

If the HSBC UK parser is broken check for an update on Github. I use this one
myself, so if parsing problems crop-up because HSBC change their website I'll
catch them! :)

### Best practices

Processing statements one at a time is tedious. A good parser will allow the
user to pull, say, a years worth of data in one shot. The provided HSBC UK
parser can do this, and such functionality should be considered a _minimum
requirement_.

OBIS will automatically load jQuery for you (if it is not already loaded by
your bank website) so you can more easily parse your transactions. There's
no excuse for not making at least a half-arsed effort at writing a parser. :)

## API overview

### Public methods

	// Entry point
	obis.parse()

	// Model
	obis.addStatement( statement )

	// Views
	obis.drawViewStatementsButton( count )
	obis.drawDownloadZipButton()
	obis.drawGeneratorPicker()
	obis.toggleViewAndDownloadButtons()

These are the OBIS "public" methods. There are others, but you shouldn't need
to use them. Have a look at the source if you're interested.

### Entry-point

#### obis.parse()

`Arguments: None` `Returns: undefined`

This method should be overloaded by the parser, and is automatically called
after initialisation.

##### Example usage:

	jQuery.extend( obis, {
		parse: function () {
			// Perform parsing on bank-statement, invoke various
			// OBIS API methods to draw buttons, etc...
		}
	});

### Model

#### obis.addStatement( `statement` )

`Arguments: statement(Object)` `Returns: undefined`

Add a statement to the model. The schema should look like this:

	statement = {

		"id": String,                  // Unique ID
		"iban": String,                // International Bank Account Number
		"bic": String,                 // Business Identifier Code
		"type": String,                // Account type (eg; "Current Account")
		"name": String,                // Account name (eg; "My Account")
		"accountNumber": String,       // Account number (eg; "123456789")
		"sortCode": String,            // Account sort-code (eg; "102030")
		"date": Date,                  // Statement date

		"entries": Array of <Entry> = {
			"id": String,              // Unique ID
			"date": Date,              // Transaction date
			"type": String,            // Transaction type
			"description": String,     // Transaction description
			"memo": String,            // Transaction memo

			"debit": Number,           // Amount debited
			"credit": Number,          // Amount credited
			"balance": Number          // Bank-calculated balance
		},

		"balances": Array of <Entry>,  // Start and end balances

		"processed": Boolean           // Statement contains "complete" data

	};

The `processed` variable is useful in case your bank-statements need more than
one _pass_ to get all the data. For example, HSBC UK Personal Banking requires
you to follow a link in order to retrieve the full memo of a transaction.

##### Example usage:

	parse: function () {
		var statement = this.myFancyStatementParser( document );
		this.addStatement( statement );
	}

### Views

#### obis.drawViewStatementsButton( `count` )

`Arguments: count(Number)` `Returns: jQuery object`

Generate a _View statement(s)_ button as a jQuery object that you can insert
into the page. Pass the number of statements into `count` to pluralize the
button-text.

OBIS will take care of enabling/disabling the generated button depending on
whether or not the model has any data in it.

##### Example usage:

	parse: function () {

		// Figure out how many statements we can parse on this page
		var statementsToParse = this.getStatementsToParse();

		// Find a place where we can attach our button...
		var elAccountInfo = jQuery( '.account_info' );

		// ...attach the button!
		elAccountInfo.append(
			this.drawViewStatementsButton( statementsToParse )
		);

	}

- - -

#### obis.drawDownloadZipButton()

`Arguments: None` `Returns: jQuery object`

Generate a _Download Zip_ button as a jQuery object that you can insert into
the page.

OBIS will take care of enabling/disabling the generated button depending on
whether or not the model has any data in it.

##### Example usage:

	parse: function () {

		// Find a place where we can attach our button...
		var elTransactionInfo = jQuery( '.transaction_info' );

		// ...attach the button!
		elTransactionInfo.prepend(
			this.drawDownloadZipButton()
		);

	}

- - -

#### obis.drawGeneratorPicker()

`Arguments: None` `Returns: jQuery object`

Generate a _Generator Picker_ as a jQuery object that you can insert into the
page. The Generator Picker is a bunch of checkboxes where the user can select
the data formats they want in the Zip download.

##### Example usage:

	parse: function () {

		// Find a place where we can attach our picker...
		var elTransactionInfo = jQuery( '.transaction_info' );

		// ...attach the picker!
		elTransactionInfo.append(
			this.drawGeneratorPicker()
		);

	}

- - -

#### obis.toggleViewAndDownloadButtons()

`Arguments: None` `Returns: undefined`

See if any previously inserted _View statement(s)_ or _Download Zip_ buttons
should be enabled or not.

##### Example usage:

	parse: function() {

		// Pre-parse, draw buttons + pickers
		// ...snip...

		// Loop through all statements and parse them. This process can take
		// a while, but it's okay to let the user view statements that have
		// been downloaded while they continue to wait for the rest. We use
		// obis.toggleViewAndDownloadButtons() to check this.
		jQuery.each( this.getAllStatements(), function () {

			// Parse the current statement and add to the model
			var statement = obis.parseStatement( this );
			obis.addStatement( statement );

			// See if the user can press any of the buttons yet
			obis.toggleViewAndDownloadButtons();

		});

	}

## A pseudo-code example

Lets see how we might structure a parser with some simple pseudo-code. The
HSBC UK parser is loosely structured this way:

	// Extend the main OBIS object
	jQuery.extend( obis, {

		// Get account name, type, number, and sort-code
		scrapeAccountDetails: function ( doc ) {
			return account details;
		},

		// Get all transactions in a statement
		scrapeTransactions: function ( doc ) {
			return transaction details;
		},

		// Entry-point
		parse: function () {

			details = this.scrapeAccountDetails( current document );
			get numberOfStatementsToParse;

			obis.drawViewStatementsButton( numberOfStatementsToParse );
			obis.drawDownloadZipButton();
			obis.drawGeneratorPicker();

			if ( 1 < numberOfStatementsToParse ) {

				if ( the user asks for it ) {
					loop through all statements ( statement ) {
						transactions = this.scrapeTransactions( statement );
						obis.addStatement( details + transactions );
					}
				}

			}
			else if ( we can see some transaction data ) {
				transactions = this.scrapeTransactions( current document );
				obis.addStatement( details + transactions );
			}

		}

	});

Obviously the real parser is a bit more complex than this, but this gives a
rough idea of how to structure one.

If you want a parser for a specific bank but don't know how to do it, post a
feature-request to Github and I'll do my best to assist.

Now that you've written a parser, we need a way to tell OBIS how to detect
when to use it.

Open `src/main.js` and look for these lines:

	var parsers = [
		{ name: 'HSBC UK', rx: /^https?\:\/\/(www\.)?hsbc\.co\.uk\//,
			url: 'https://dl.dropbox.com/s/0cj7lq25n3m3rev/hsbc.js?dl=1' },
		{ name: 'HSBC UK (testing)', rx: /localhost\/OBIS-tests/,
			url: '/OBIS/src/parsers/hsbc.js' }
	];

OBIS tests a Regular Expression `rx` against the current URL. If it passes,
that parser will be loaded and its `parse()` method invoked.
