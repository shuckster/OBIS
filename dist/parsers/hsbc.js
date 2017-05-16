
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: hsbc.js: HSBC UK Personal Banking parser. Use on a "Previous
 * Statements" page, or a single past-statement. Will not work on the
 * "Recent Transactions" page.
 *

 Parses an HSBC UK statement or the statements-list page.

 Automatically fetches those horrible click-through memos for transactions.

 Generates IDs that should be reasonably unique. Certainly any given
 statement will regenerate the same IDs. They're made by md5'ing some
 of the transaction data. OFX and CSV are currently the only generators
 that export the IDs.

 */

// jshint unused:true
/* globals obis,jQuery,console */

/*

 Events:
 	memos:processed
 	pages:retrieved

 Methods:
	parse( html, statusElement )
	sanitizedDocumentFragment( documentFragment )

	preparse( html )
	retrieveCheckedStatementLinks( statementLinks )
	toggleRetrieveStatementsButton()

	parseStatement( preparse, html )
	parseStatementMemos( statement, button, buttonValue )
	finishedWithStatement( statement )

*/

jQuery.extend( obis, {

	// FIXME: This is OFX specific stuff
	INTU_BID: '01267',
	LANGUAGE: 'ENG',
	CURDEF: 'GBP',

	memoUrls: [],

/*

########     ###    ########   ######  ########
##     ##   ## ##   ##     ## ##    ## ##
##     ##  ##   ##  ##     ## ##       ##
########  ##     ## ########   ######  ######
##        ######### ##   ##         ## ##
##        ##     ## ##    ##  ##    ## ##
##        ##     ## ##     ##  ######  ########

*/

	parse: function _parse( htmlOrFrag, statusElement, statementPages ) {

		// No need to sanitize the root document
		if ( htmlOrFrag ) {
			htmlOrFrag = this.sanitizedDocumentFragment( htmlOrFrag );
		}

		var preparse = this.preparse( htmlOrFrag ),
			self = this;

		statementPages = statementPages || [];

		// No statement-links? Probably a single statement
		if ( !preparse.statementLinks ) {

			if ( !statementPages.length ) {

				var afterAllStatementPagesRetrieved = function _afterAllStatementPagesRetrieved() {

					jQuery( document ).unbind( 'pages:retrieved', afterAllStatementPagesRetrieved );

					var statement;

					if ( statementPages.length ) {

						jQuery.each( statementPages, function _forEach( pageNumber ) {

							var currentStatement = self.parseStatement( preparse, this, pageNumber );

							if ( currentStatement ) {

								if ( !statement ) {
									statement = currentStatement;
								}
								else {
									statement.entries.push.apply( statement.entries, currentStatement.entries );
									statement.balances.push.apply( statement.balances, currentStatement.balances );
									statement.memoUrls.push.apply( statement.memoUrls, currentStatement.memoUrls );
								}
							}
						});

						// Was for debugging only - real multipage statements probably
						// won't just be copy-pastes of a single page :P
						/*var sortByDate = obis.utils.sortByNumber( 'date' );
						statement.entries.sort( sortByDate );
						statement.balances.sort( sortByDate );*/
					}

					else {
						statement = self.parseStatement( preparse, htmlOrFrag );
					}

					// All pages should have processed by now - finish off
					statementPages.length = 0;

					if ( statement ) {

						jQuery.extend( statement, preparse );
						self.addStatement( statement );

						if ( statement.memoUrls.length ) {
							self.parseStatementMemos( statement, statusElement || self.elements.downloadStatementsButton );
						}
						else {
							self.finishedWithStatement( statement );
						}
					}
				};

				jQuery( document ).bind( 'pages:retrieved', afterAllStatementPagesRetrieved );
			}

			statementPages.push( htmlOrFrag || document );

			// Another page, eh?
			if ( preparse.nextPageUrl ) {

				// Process...
				jQuery.ajax({
					url: preparse.nextPageUrl,
					dataType : 'html',
					complete: function _onComplete( xhr ) {

						if ( 200 === xhr.status ) {

							// Add and process
							var responseText = xhr.responseText;

							// jQuery borks when dealing with stuff that's too big,
							// so we'll make a native document fragment, sanitize it,
							// then pass it to jQuery
							var nextPageFragment = obis.utils.domFragmentFromString( responseText );
							self.parse( nextPageFragment, statusElement, statementPages );
						}
					}
				});
			}

			// We have all statement pages: Start processing...
			else {

				jQuery( document ).trigger( 'pages:retrieved' );
			}
		}

		// A bunch of statements... possibly...
		else {

			this.statementLinks = preparse.statementLinks;
			this.toggleRetrieveStatementsButton();
		}

	},

/*

 ######     ###    ##    ## #### ######## #### ######## ########
##    ##   ## ##   ###   ##  ##     ##     ##       ##  ##
##        ##   ##  ####  ##  ##     ##     ##      ##   ##
 ######  ##     ## ## ## ##  ##     ##     ##     ##    ######
      ## ######### ##  ####  ##     ##     ##    ##     ##
##    ## ##     ## ##   ###  ##     ##     ##   ##      ##
 ######  ##     ## ##    ## ####    ##    #### ######## ########

*/

	/*
	 * Only grab the elements we're interested in parsing
	 */

	sanitizedDocumentFragment: function _sanitizedDocumentFragment( df ) {

		var grabber, selector, domElements, domElement, domKey;

		var grabbers = {
			elActiveAccount: '.hsbcActiveAccount',
			elDateAndIBANAndBIC: '.hsbcTextRight',
			elStatementsTable: 'table.hsbcRowSeparator',
			elStatementTable: 'table[summary="This table contains a statement of your account"]',
			elNextPage: 'a[title="Next page of this statement"]'
		};

		var newFrag = document.createDocumentFragment();
		var elContainer = jQuery( '<div />' );

		for ( grabber in grabbers ) {
			if ( grabbers.hasOwnProperty( grabber ) ) {

				selector = grabbers[ grabber ];
				domElements = df.querySelectorAll( selector );

				if ( domElements.length ) {

					for ( domKey in domElements ) {
						if ( domElements.hasOwnProperty( domKey ) ) {

							domElement = domElements[ domKey ];
							newFrag.append( obis.utils.domFragmentFromString( domElement.outerHTML ) );
						}
					}
				}
			}
		}

		elContainer.append( newFrag );
		return elContainer;
	},

/*

########  ########  ######## ########     ###    ########   ######  ########
##     ## ##     ## ##       ##     ##   ## ##   ##     ## ##    ## ##
##     ## ##     ## ##       ##     ##  ##   ##  ##     ## ##       ##
########  ########  ######   ########  ##     ## ########   ######  ######
##        ##   ##   ##       ##        ######### ##   ##         ## ##
##        ##    ##  ##       ##        ##     ## ##    ##  ##    ## ##
##        ##     ## ######## ##        ##     ## ##     ##  ######  ########

*/

	/*
	 * Pull account info from both a statement page and the statement-list page.
	 * While we're here, we also add buttons and stuff depending on what page we're on.
	 */

	preparse: function _preparse( html ) {

		var ROOT = jQuery( html || document ),
			object = { error: false };

		// RegEx tests
		var rxAccountSortCodeAndNumber = /(\d{2}\-\d{2}\-\d{2}).*(\d{8})/,
			rxAccountSortCode = /(\d{2})\-(\d{2})\-(\d{2})/,
			rxAccountNumber = /(\d{8})/,
			rxAccountNameStrip = /[^A-Z ]/g,
			rxIsStatementDate = /\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}/;

		/*
		 * Account details
		 */

		// Get active account
		var accountMatches, accountSortCode, accountNumber, accountFullNumber,

			elActiveAccount = ROOT.find( '.hsbcActiveAccount' ),
			elAccountName = elActiveAccount.find( '.hsbcAccountName' ),
			elAccountNumber = elActiveAccount.find( '.hsbcAccountNumber' ).detach(),
			elAccountType = elActiveAccount.find( '.hsbcAccountType' ),

			accountName = elAccountName.html(),
			accountType = elAccountType.html();

		if ( !elActiveAccount.length || !elAccountName.length || !elAccountNumber.length || !elAccountType.length ) {
			console.error( 'Error trying to find account information' );
			return null;
		}

		// ...

		accountFullNumber = elAccountNumber.html();
		elAccountName.append( elAccountNumber );

		// Strip out cruft from name
		accountName = accountName.replace( rxAccountNameStrip, '' ).trim();

		// Get sort-code + account number
		if ( rxAccountSortCodeAndNumber.test( accountFullNumber ) ) {
			accountMatches = accountFullNumber.match( rxAccountSortCode );
			accountSortCode = accountMatches[ 1 ] + accountMatches[ 2 ] + accountMatches[ 3 ];
			accountMatches = accountFullNumber.match( rxAccountNumber );
			accountNumber = accountMatches[ 1 ];
		}

		if ( accountName ) { object.name = accountName; }
		if ( accountType ) { object.type = accountType; }
		if ( accountNumber ) { object.accountNumber = accountNumber; }
		if ( accountSortCode ) { object.sortCode = accountSortCode; }

		/*
		 * Statement details
		 */

		// Get statement date, IBAN, BIC
		var timer, elStatementFirstHeader, elStatementLastHeader,

			elDateAndIBANAndBIC = ROOT.find( '.hsbcTextRight' ),
			elDate = elDateAndIBANAndBIC.first(),
			elIBAN = elDateAndIBANAndBIC.eq( 1 ),
			elBIC = elDateAndIBANAndBIC.eq( 2 ),
			statementLinks = [];

		if ( !elDate.length || !elIBAN.length || !elBIC.length ) {

			console.warn( 'Error trying to find date, IBAN, and BIC information' );

			/*
			 * If there was a problem trying to parse, see if we're on a "Statements" (plural)
			 * page instead of just a single one.
			 */

			console.log( 'Trying to find statement links...' );

			var elStatementsTable, retrieveStatementsButton, allStatementsCheckbox;

			elStatementsTable = ROOT.find( 'table.hsbcRowSeparator' );

			if ( elStatementsTable.length ) {

				this.elements.retrieveStatementsButton = retrieveStatementsButton = jQuery( '<input type="button" value="Retrieve checked" />' );
				this.elements.allStatementsCheckbox = allStatementsCheckbox = jQuery( '<input type="checkbox" style="margin-left: 10px;" />' );

				elStatementFirstHeader = jQuery( '<th />' );
				elStatementLastHeader = jQuery( '<th />' );

				elStatementFirstHeader.append( allStatementsCheckbox );
				elStatementLastHeader.append( retrieveStatementsButton );

				elStatementsTable.find( 'thead > tr' )
					.prepend( elStatementFirstHeader )
					.append( elStatementLastHeader );

				allStatementsCheckbox.bind( 'change', function _onChange() {

					var checked = this.checked;

					jQuery.each( statementLinks, function _forEach() {
						this.checkbox[ 0 ].checked = checked;
						this.checkbox.change();
					});

				});

				retrieveStatementsButton.bind( 'click', function _onClick() {
					obis.retrieveCheckedStatementLinks();
				});

				elStatementsTable.find( 'a' ).each( function _forEach() {

					var elLink = jQuery( this ),
						title = elLink.attr( 'title' ),
						href = elLink.attr( 'href' ),
						rxStatementTitle = /^\d{2} (January|February|March|April|May|June|July|August|September|October|November|December) \d{4} statement$/,
						obj = {};

					if ( rxStatementTitle.test( title ) ) {

						obj.checked = false;
						obj.href = href;
						obj.checkbox = elLink.parent().parent().prepend( '<td><input type="checkbox" /></td>' ).find( 'input' );
						obj.progress = elLink.parent().parent().append( '<td class="progress"></td>' ).find( 'td.progress' );

						obj.checkbox.bind( 'change', function _onChange() {

							clearTimeout( timer );
							obj.checked = this.checked;

							timer = setTimeout( function _timeout() {
								obis.toggleRetrieveStatementsButton();
							}, 0.1 );

						});

						statementLinks.unshift( obj );

					}

				});

			}

			if ( statementLinks.length ) {
				console.log( 'Looks like a previous statements page!' );
				object.statementLinks = statementLinks;
			}
			else {
				console.warn( 'No statement links found: Nothing to do on this page' );
				object.error = true;
			}

			object.date = new Date();

		}

		// Looks like a single statement
		else {

			var statementDateString = elDate.html(),
				statementIBANString = elIBAN.html(),
				statementBICString = elBIC.html(),
				expectedDate = rxIsStatementDate.test( statementDateString );

			if ( !expectedDate ) {
				console.error( 'Error trying to parse statement date' );
			}
			else {
				object.date = new Date( statementDateString );
			}

			if ( statementIBANString ) { object.iban = statementIBANString; }
			if ( statementBICString ) { object.bic = statementBICString; }

			// Another page?
			var elNextPage = ROOT.find( 'a[title="Next page of this statement"]' );

			if ( elNextPage ) {

				var nextPageUrl = elNextPage.attr( 'href' );
				object.nextPageUrl = nextPageUrl;
			}
		}

		if ( !html ) {

			elActiveAccount.prepend(
				this.drawViewStatementsButton( object.statementLinks ),
				this.drawDownloadZipButton(),
				this.drawGeneratorPicker()
			);

		}

		return object;

	},

/*

   ###    ##       ##           ######  #### ##     ## ######## ##    ## ########  ######
  ## ##   ##       ##          ##    ## #### ###   ### ##       ###   ##    ##    ##    ##
 ##   ##  ##       ##          ##        ##  #### #### ##       ####  ##    ##    ##
##     ## ##       ##           ######  ##   ## ### ## ######   ## ## ##    ##     ######
######### ##       ##                ##      ##     ## ##       ##  ####    ##          ##
##     ## ##       ##          ##    ##      ##     ## ##       ##   ###    ##    ##    ##
##     ## ######## ########     ######       ##     ## ######## ##    ##    ##     ######

*/

	toggleRetrieveStatementsButton: function _toggleRetrieveStatementsButton() {

		var count = 0;

		jQuery.each( this.statementLinks, function _forEach() {
			if ( this.checked ) {
				count ++;
			}
		});

		var statements = !!count;

		if ( this.elements.retrieveStatementsButton ) {
			this.elements.retrieveStatementsButton[ 0 ].disabled = ( !statements || this.alreadyProcessing );
		}

	},

	retrieveCheckedStatementLinks: function _retrieveCheckedStatementLinks( statementLinks ) {

		var statementLink,

			newStatementLinks = [],
			self = this;

		if ( this.alreadyProcessing ) {
			console.warn( 'Already processing!' );
			return;
		}

		if ( !statementLinks ) {

			statementLinks = [];

			jQuery.each( this.statementLinks, function _forEach() {

				if ( this.checked ) {
					this.checkbox.remove();
					this.progress.text( 'Waiting' );

					statementLinks.push( this );
				}
				else {
					newStatementLinks.push( this );
				}

			});

			this.statementLinks = newStatementLinks;
			this.toggleRetrieveStatementsButton();

		}

		if ( !statementLinks.length ) {
			console.warn( 'Nothing to do' );
		}
		else {

			this.alreadyProcessing = true;

			statementLink = statementLinks.pop();
			statementLink.progress.text( 'Retrieving' );

			var afterMemoProcessing = function _afterMemoProcessing() {

				jQuery( document ).unbind( 'memos:processed', afterMemoProcessing );

				statementLink.progress.text( 'Retrieved' );

				self.alreadyProcessing = false;

				if ( statementLinks.length ) {
					self.retrieveCheckedStatementLinks( statementLinks );
				}
				else {
					self.toggleRetrieveStatementsButton();
					self.toggleViewAndDownloadButtons();
				}

			};

			jQuery( document ).bind( 'memos:processed', afterMemoProcessing );

			// Process...
			jQuery.ajax({
				url: statementLink.href,
				dataType : 'html',
				complete: function _onComplete( xhr ) {

					if ( 200 === xhr.status ) {

						statementLink.progress.text( 'Retrieving' );

						// Add and process
						var responseText = xhr.responseText;

						// jQuery borks when dealing with stuff that's too big,
						// so we'll make a native document fragment, sanitize it,
						// then pass it to jQuery
						var nextPageFragment = obis.utils.domFragmentFromString( responseText );

						self.parse( nextPageFragment, statementLink.progress );
					}
				}
			});

		}

	},

/*

 ######  #### ##    ##  ######   ##       ########     ######  #### ##     ## ######## ##    ## ########
##    ##  ##  ###   ## ##    ##  ##       ##          ##    ## #### ###   ### ##       ###   ##    ##
##        ##  ####  ## ##        ##       ##          ##        ##  #### #### ##       ####  ##    ##
 ######   ##  ## ## ## ##   #### ##       ######       ######  ##   ## ### ## ######   ## ## ##    ##
      ##  ##  ##  #### ##    ##  ##       ##                ##      ##     ## ##       ##  ####    ##
##    ##  ##  ##   ### ##    ##  ##       ##          ##    ##      ##     ## ##       ##   ###    ##
 ######  #### ##    ##  ######   ######## ########     ######       ##     ## ######## ##    ##    ##

*/

	generateIdForTransaction: function _generateIdForTransaction( entry, memoText ) {

		var dateTime = obis.utils.dateTimeString( entry.date ) || 'UNKNOWN_DATE',
			transactionAmount = obis.utils.convertCentsToDecimal( entry.debit + entry.credit );

		// Generate unique ID for this transaction
		return dateTime + '_' + obis.utils.md5(

			dateTime +
			( undefined !== entry.index ? entry.index : '' ) +
			( entry.accountNumber || '' ) +
			( entry.sortCode || '' ) +
			( entry.type || '' )  +
			( entry.description || '' ) +

			// HSBC can change the memoUrl! Use it only temporarily, and if specified
			( memoText || entry.memo || '' ) +

			transactionAmount
		);

	},

	/*
	 * Parse a proper statement page, passing-in the preparse info.
	 */

	parseStatement: function _parseStatement( preparse, html, pageNumber ) {

		var ROOT = jQuery( html || document ),
			self = this;

		var maxEntriesPerPage = 201;
		pageNumber = undefined !== pageNumber ? pageNumber : 0;

		// RegEx tests
		var rxIsDayAndMonthOnly = /^\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/,

			rxDateCol = /Date/,
			rxTypeCol = /Type/,
			rxDescCol = /Description/,
			rxDebitCol = /Paid out/,
			rxCreditCol = /Paid in/,
			rxBalanceCol = /Balance/,

			rxIsBalanceEntry = /^Balance (brought|carried) forward$/,
			rxTableIsStatement = /statement.*account/,

			rxBalanceWithDebitMarker = /([^D]+)(D?$)/;

		// Get statement
		var elStatementTable = ROOT.find( 'table[summary="This table contains a statement of your account"]' );

		if ( !elStatementTable.length ) {

			elStatementTable = ROOT.find( 'table > thead' ).parent();

			if ( 1 < elStatementTable.length ) {

				elStatementTable.each( function _forEach() {
					var el = jQuery( this ),
						summary = el.attr( 'summary' );

					if ( rxTableIsStatement.test( summary ) ) {
						elStatementTable = el;
					}
				});
			}
		}

		// Does it look like a statement?
		if ( !elStatementTable.length ) {
			console.error( 'Error trying to find statement table' );
			return false;
		}

		// ...

		// Parse statement
		var elStatementHeader, elStatementBody,

			elReversedTransactions = [],
			elTransactions = [],
			memoUrls = [],
			columns = [],
			statementEntries = [],
			runningBalances = [],
			latestTransactionDate = new Date( preparse.date ),
			balanceIncludesDebitColumn = false;

		// Get columns
		elStatementHeader = elStatementTable.find( 'thead' );
		elStatementHeader.find( '> tr > th' ).each( function _forEach() {

			var el = jQuery( this ),
				html = el.html();

			if ( rxDateCol.test( html ) ) { columns.push( 'Date' ); }
			if ( rxTypeCol.test( html ) ) { columns.push( 'Type' ); }
			if ( rxDescCol.test( html ) ) { columns.push( 'Description' ); }
			if ( rxDebitCol.test( html ) ) { columns.push( 'Debit' ); }
			if ( rxCreditCol.test( html ) ) { columns.push( 'Credit' ); }

			if ( rxBalanceCol.test( html ) ) {

				columns.push( 'Balance' );

				if ( 2 == el.attr( 'colspan' ) ) {

					balanceIncludesDebitColumn = true;
					columns.push( 'Marker' );
				}
			}

		});

		// Parse statement proper
		elStatementBody = elStatementTable.find( 'tbody' );

		// For the sake of the dodgy date-formats we loop through the transactions backwards
		elTransactions = elStatementBody.find( '> tr' );
		elTransactions.each( function _forEach() {
			elReversedTransactions.unshift( this );
		});

		jQuery.each( elReversedTransactions, function _forEach( indexInArray ) {

			var elRow = jQuery( this ),
				entry = { debit: 0, credit: 0 },
				isRunningBalance = false;

			// Only tweak entry.id's after the first page to try
			// and keep them backwards compatible
			if ( pageNumber && 0 < pageNumber ) {
				entry.index = indexInArray + ( pageNumber * maxEntriesPerPage );
			}

			elRow.find( '> td' ).each( function _forEach( colIndex ) {

				var tempDate, entryDate, colType, colData, elColData,
					matches, amount, marker,
					elCol = jQuery( this );

				if ( columns.length > colIndex ) {

					colType = columns[ colIndex ];
					elColData = elCol.find( '*' ).last();

					if ( elColData.length ) {
						colData = obis.utils.htmlUnescape( elColData.html() );
					}

					switch ( colType ) {

						case 'Date':

							if ( rxIsDayAndMonthOnly.test( colData ) ) {

								entryDate = new Date( latestTransactionDate );
								tempDate = new Date( colData + ' ' + preparse.date.getFullYear() );

								while ( entryDate.getMonth() !== tempDate.getMonth() ) {
									entryDate.setMonth( entryDate.getMonth() - 1 );
								}

								entryDate.setDate( tempDate.getDate() );
								entry.date = entryDate;
								latestTransactionDate = entryDate;

							}
							// Default: Try to calculate using Date
							else {
								entry.date = new Date( colData );
							}

						break;

						case 'Type':
							entry.type = colData;
						break;

						case 'Description':

							// Row is "Balance brought/carried forward" ... ?
							isRunningBalance = rxIsBalanceEntry.test( colData );
							entry.description = colData;

							// Test to see if we can get a memo too
							if ( elColData.is( 'a' ) ) {
								entry.memoUrl = elColData.attr( 'href' );
								memoUrls.push( entry.memoUrl );
							}

						break;

						case 'Debit':
							entry.debit = -Math.abs( obis.utils.convertDecimalToCents( !colData ? '0' : colData ));
						break;

						case 'Credit':
							entry.credit = obis.utils.convertDecimalToCents( !colData ? '0' : colData );
						break;

						case 'Balance':

							amount = 0;

							if ( balanceIncludesDebitColumn ) {

								amount = obis.utils.convertDecimalToCents( !colData ? '0' : colData );
							}
							else if ( colData ) {

								matches = colData.match( rxBalanceWithDebitMarker );

								if ( matches ) {

									amount = matches[ 1 ];
									amount = obis.utils.convertDecimalToCents( !amount ? '0' : amount );
									marker = matches[ 2 ];

									if ( 'D' === marker ) {
										amount = -amount;
									}
								}
							}

							entry.balance = amount;

						break;

						case 'Marker':

							if ( ( 'D' === colData ) && entry.balance ) {
								entry.balance = -entry.balance;
							}

						break;

					}

				}

			});

			// Memo-less, but guaranteed unique ID at this point.
			// We regenerate the ID with the memo-text later, checking for duplicates afterwards.
			// Duplicates can occur for transactions with the same name, memo, and amount on the same day.
			entry.id = self.generateIdForTransaction( entry, entry.memoUrl );

			// Keep unique memo-less ID around for use in the DOM
			entry._id = entry.id;

			if ( !isRunningBalance ) {
				statementEntries.unshift( entry );
			}
			else {
				runningBalances.unshift( entry );
			}

		});

		return {
			entries: statementEntries,
			balances: runningBalances,
			memoUrls: memoUrls
		};

	},

/*

##     ## ######## ##     ##  #######   ######
###   ### ##       ###   ### ##     ## ##    ##
#### #### ##       #### #### ##     ## ##
## ### ## ######   ## ### ## ##     ##  ######
##     ## ##       ##     ## ##     ##       ##
##     ## ##       ##     ## ##     ## ##    ##
##     ## ######## ##     ##  #######   ######

*/

	/*
	 * If a transaction has a description with a link we can retrieve a memo.
	 */

	parseStatementMemos: function _parseStatementMemos( statement, button, buttonValue ) {

		var link, entry, id, elButton, elButtonIsInput,
			// elMemo,

			windowRef = this.windowRef,
			memoUrls = statement.memoUrls || [],
			self = this;

		if ( button ) {
			elButton = jQuery( button );
			elButtonIsInput = elButton.is( 'input' );
			buttonValue = buttonValue || elButton[ elButtonIsInput ? 'val' : 'text' ]();
		}

		if ( !memoUrls.length ) {
			console.warn( 'No memos to process for statement:' + obis.utils.simpleDate( statement ) );
			this.finishedWithStatement( statement );

			return;
		}

		link = memoUrls.pop();

		jQuery.each( statement.entries, function _forEach() {

			if ( link === this.memoUrl ) {

				entry = this;
				id = this._id; // memo-less id

				if ( windowRef ) {
					jQuery( windowRef.document ).find( '#_' + id + ' td.memo' ).html( '&bull;' ).addClass( 'processing' );
				}
			}
		});

		var memoTextIds = {};

		jQuery.ajax({
			url: link,
			dataType : 'html',
			complete: function _onComplete( xhr ) {

				var response, elCols, description,

					additionalDetails = null,
					rxDescription = /Description\:/,
					rxAdditionalDetails = /Additional details\:/;

				if ( 200 === xhr.status ) {

					// Stick response into a jQuery object so we can use jQuery methods to parse it
					response = jQuery( xhr.responseText );
					elCols = response.find( '.extTableColumn1' );

					// elCols contains a bunch of stuff, but we only want the "Description" and "Additional details", so lets look for them
					elCols.each( function _forEach() {

						var elValue, lines, text,
							filteredLines = [],
							elCol = jQuery( this ),
							columnDescription = elCol.find( '*' ).last().text(),
							isDescription = rxDescription.test( columnDescription ),
							isAdditionalDetails = rxAdditionalDetails.test( columnDescription );

						// Don't process if we don't need to
						if ( !isDescription && !isAdditionalDetails ) {
							return;
						}

						// Get the sibling element; it contains the value we're interested in
						elValue = elCol.next();
						lines = elValue.text().trim().split( '\n' );

						// Trim
						jQuery.each( lines, function _forEach() {
							var trimmed = this.trim();
							if ( trimmed ) {
								if ( ( isAdditionalDetails && trimmed !== description ) || ( isDescription ) ) {
									filteredLines.push( trimmed );
								}
							}
						});

						text = filteredLines.join( ', ' );

						if ( isDescription ) {
							description = text;
						}

						if ( isAdditionalDetails ) {
							additionalDetails = text;
						}

					});

					// Update statement
					if ( null !== additionalDetails ) {

						entry.memo = additionalDetails;

						// We have the memo now - regenerate the ID and check for duplicates
						var memoTextIdKey = self.generateIdForTransaction( entry );
						var memoTextIdForTransaction = memoTextIdKey;

						if ( !memoTextIds[ memoTextIdKey ] ) {
							memoTextIds[ memoTextIdKey ] = 1;
						}
						else {
							memoTextIds[ memoTextIdKey ] += 1;
							memoTextIdForTransaction += '_' + memoTextIds[ memoTextIdKey ];
						}

						// Update entry ID
						entry.id = memoTextIdForTransaction;

						if ( windowRef ) {
							jQuery( windowRef.document ).find( '#_' + id + ' td.memo' ).html( additionalDetails ).removeClass( 'processing' );
						}
					}

				}
				else {
					statement.error = true;
				}

				delete entry.memoUrl;

				// Keep processing
				if ( memoUrls.length ) {

					if ( elButton ) {
						elButton[ elButtonIsInput ? 'val' : 'text' ]( buttonValue + ' (' + memoUrls.length + ')' );
					}

					self.parseStatementMemos( statement, button, buttonValue );

				}
				else {

					console.log( 'No more memos to process for statement: ' + obis.utils.simpleDate( statement.date ) );

					if ( elButton ) {
						elButton[ elButtonIsInput ? 'val' : 'text' ]( buttonValue );
					}

					self.finishedWithStatement( statement );

				}

			}
		});

	},

/*

######## #### ##    ##    ###    ##       ####  ######  ########
##        ##  ###   ##   ## ##   ##        ##  ##    ## ##
##        ##  ####  ##  ##   ##  ##        ##  ##       ##
######    ##  ## ## ## ##     ## ##        ##   ######  ######
##        ##  ##  #### ######### ##        ##        ## ##
##        ##  ##   ### ##     ## ##        ##  ##    ## ##
##       #### ##    ## ##     ## ######## ####  ######  ########

*/

	/*
	 * Once we've got all memos for a statement we can mark it as "processed".
	 */

	finishedWithStatement: function _finishedWithStatement( statement ) {
		statement.processed = true;
		this.toggleViewAndDownloadButtons();
		jQuery( document ).trigger( 'memos:processed' );
	}

});
