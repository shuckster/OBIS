
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2014 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: hsbc.js: HSBC UK Personal Banking parser. Use on a "Previous
 * Statements" page, or a single past-statement. Will not work on the
 * "Recent Transactions" page.
 *

 Parses an HSBC UK statement or the statements-list page.

 Automatically fetches those horrible click-through memos for transactions.

 Generates IDs that should be reasonably unique. Certainly any given
 statement will regenerate the same IDs. They're made by CRC32'ing
 most of the transaction data. OFX and CSV are currently the only
 generators that use the IDs.

 */

/*

 Events:
 	memos:processed

 Methods:
	parse( html, statusElement )

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

	parse: function _parse( html, statusElement ) {

		var statement,
			preparse = this.preparse( html );

		// A statement
		if ( !preparse.statementLinks ) {

			statement = this.parseStatement( preparse, html );

			if ( statement ) {

				jQuery.extend( statement, preparse );
				this.addStatement( statement );

				if ( statement.memoUrls.length ) {
					this.parseStatementMemos( statement, statusElement || this.elements.downloadStatementsButton );
				}
				else {
					this.finishedWithStatement( statement );
				}

			}

		}
		// A bunch of statements... possibly...
		else {
			this.statementLinks = preparse.statementLinks;
			this.toggleRetrieveStatementsButton();
		}

	},

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
		var elStatementHeader, elStatementBody, timer,
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

			var elStatementsTable, elStatementHeader, retrieveStatementsButton, allStatementsCheckbox;

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
		else {

			var statementDate,
				statementDateString = elDate.html(),
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
				complete: function _onComplete( xhr, status ) {

					var response;

					if ( 200 === xhr.status ) {
						statementLink.progress.text( 'Retrieving' );
						self.parse( xhr.responseText, statementLink.progress );
					}

				}
			});

		}

	},

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

	/*
	 * Parse a proper statement page, passing-in the preparse info.
	 */

	parseStatement: function _parseStatement( preparse, html ) {

		var ROOT = jQuery( html || document ),
			ids = [];

		// RegEx tests
		var rxIsDayAndMonthOnly = /^\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/,

			rxDateCol = /Date/,
			rxTypeCol = /Type/,
			rxDescCol = /Description/,
			rxDebitCol = /Paid out/,
			rxCreditCol = /Paid in/,
			rxBalanceCol = /Balance/,

			rxIsBalanceEntry = /^Balance (brought|carried) forward$/,
			rxTableIsStatement = /statement.*account/;

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
		var elReversedTransactions = [],
			elTransactions = [],
			memoUrls = [],
			columns = [],
			statementEntries = [],
			runningBalances = [],
			runningBalance = null,
			latestTransactionDate = new Date( preparse.date );

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
			if ( rxBalanceCol.test( html ) ) { columns.push( 'Balance' ); }

		});

		// Parse statement proper
		elStatementBody = elStatementTable.find( 'tbody' );

		// For the sake of the dodgy date-formats we loop through the transactions backwards
		elTransactions = elStatementBody.find( '> tr' );
		elTransactions.each( function _forEach() {
			elReversedTransactions.unshift( this );
		});

		jQuery.each( elReversedTransactions, function _forEach() {

			var elRow = jQuery( this ),
				entry = { debit: 0, credit: 0 },
				isRunningBalance = false;

			elRow.find( '> td' ).each( function _forEach( colIndex ) {

				var tempDate, entryDate, colType, colData, elColData,
					elCol = jQuery( this );

				if ( columns.length > colIndex ) {

					colType = columns[ colIndex ];
					elColData = elCol.find( '*' ).last();

					if ( elColData.length ) {
						colData = elColData.html().replace( /\&nbsp\;/g, '' ).trim();
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
							entry.debit = parseFloat( '' == colData ? '0' : ( '-' + colData.replace( /^\-/, '' ) ) );
						break;

						case 'Credit':
							entry.credit = parseFloat( '' == colData ? '0' : colData );
						break;

						case 'Balance':
							entry.balance = parseFloat( '' == colData ? '0' : colData );
						break;

					}

				}

			});

			// Need a toString() to avoid octal pollution
			var dateTime = obis.utils.dateTimeString( entry.date ),
				transactionAmount = ( entry.debit + entry.credit ).toFixed( 2 ),
				id = dateTime + Math.abs( crc32( dateTime + entry.accountNumber + entry.sortCode + entry.type + entry.description + ( entry.memoUrl ? entry.memoUrl : '' ) + transactionAmount ) );

			entry.id = id;

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
	 * If a transaction has a description with a link we can retrieve a memo.
	 */

	parseStatementMemos: function _parseStatementMemos( statement, button, buttonValue ) {

		var link, entry, id, elMemo, elButton, elButtonIsInput,
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
				id = this.id;

				if ( windowRef ) {
					jQuery( windowRef.document ).find( '#_' + id + ' td.memo' ).html( '&bull;' ).addClass( 'processing' );
				}
			}
		});

		jQuery.ajax({
			url: link,
			dataType : 'html',
			complete: function _onComplete( xhr, status ) {

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
	 * Once we've got all memos for a statement we can mark it as "processed".
	 */

	finishedWithStatement: function _finishedWithStatement( statement ) {
		statement.processed = true;
		this.toggleViewAndDownloadButtons();
		jQuery( document ).trigger( 'memos:processed' );
	}

});
