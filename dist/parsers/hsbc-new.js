
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

 Parses an HSBC UK statement.

 Updated to support the new dojo-based HSBC UK web app. However, it is
 now a more difficult job to parse all statements at once now, so for
 now you'll have to do it one at a time.

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

		df = df || document;

		var grabber, selector, domElements, domElement, domKey;

		var grabbers = {
			elBorderedContent: '.borderedContent'
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
			accountSummaryObject = { error: false, errors: [] };

		// RegEx tests
		var rxAccountSortCodeAndNumber = /(\d{2}\-\d{2}\-\d{2}).*(\d{8})/,
			rxAccountSortCode = /(\d{2})\-(\d{2})\-(\d{2})/,
			rxAccountNumber = /(\d{8})/,
			rxAccountNameStrip = /[^A-Z ]/g,
			rxAccountCurrencyMatch = /(?:Currency )?([A-Z]{3})/,
			rxMatchStatementDate = /(\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{2,4})/;

		/*
		 * Account details
		 */

		var elAccountSummary, elStatementTransactions, elStatementList,

			// 0 = Account summary, 1 = Statement, or statements list
			elBorderedContent = ROOT.find( '.borderedContent' );

		// ...

		var potentialAccountSummary,
			elAccountType,
			elAccountFullNumber,
			elAccountName, // Holder?
			elAccountCurrency;


		if ( 0 < elBorderedContent.length ) {

			// Contains type, name, number, and potentially a statement-list
			elAccountSummary = jQuery( elBorderedContent[ 0 ] );

			switch ( elBorderedContent.length ) {

				// Single statement page, probably
				case 2:

					potentialAccountSummary = elAccountSummary.find( '.loanDetailsWrapper' ).children();

					elAccountType = potentialAccountSummary.get( 0 );
					elAccountFullNumber = potentialAccountSummary.get( 1 );
					elAccountName = potentialAccountSummary.get( 2 );
					elAccountCurrency = potentialAccountSummary.get( 3 );

					// Contains table of transactions
					elStatementTransactions = jQuery( elBorderedContent[ 1 ] );

				break;

				// Statement selection/list page, probably
				case 1:

					potentialAccountSummary = elAccountSummary.find( '.stmtCurrencyDropDown' ).children();

					elAccountType = potentialAccountSummary.get( 0 );
					elAccountFullNumber = potentialAccountSummary.find( '.accountDetails' ).get( 0 );
					elAccountName = potentialAccountSummary.get( 1 );
					elAccountCurrency = potentialAccountSummary.find( '.currencyDetails' ).get( 0 );

					// Rest is probably a list of statements

					elStatementList = elBorderedContent.find( '.statementList' );
					// ...
				break;

				default:

					console.warn( 'I don\'t know how to deal with this page!' );
					accountSummaryObject.errors.push( 'I don\'t know how to deal with this page!' );
					accountSummaryObject.error = true;
			}

		}

		/*
		 * Parse account summary
		 */

		var accountMatches, accountCurrencyMatches, accountFullNumber,

			accountType,
			accountName,
			accountSortCode,
			accountNumber,
			accountCurrency;

		// Account type (BANK A/C, ONLINE SAVER, etc...)
		if ( elAccountType ) {
			accountType = elAccountType.innerText;
		}

		// Account name (SURNAME INITIALS, etc...)
		if ( elAccountName ) {

			accountName = elAccountName.innerText;

			// Strip out cruft from name
			accountName = accountName.replace( rxAccountNameStrip, '' ).trim();
		}

		// Get sort-code + account number
		if ( elAccountFullNumber ) {

			accountFullNumber = elAccountFullNumber.innerText;

			if ( rxAccountSortCodeAndNumber.test( accountFullNumber ) ) {

				accountMatches = accountFullNumber.match( rxAccountSortCode );
				accountSortCode = accountMatches[ 1 ] + accountMatches[ 2 ] + accountMatches[ 3 ];
				accountMatches = accountFullNumber.match( rxAccountNumber );
				accountNumber = accountMatches[ 1 ];
			}
		}

		// Account currency (Currency GBP, etc...)
		if ( elAccountCurrency ) {

			accountCurrency = elAccountCurrency.innerText;
			accountCurrencyMatches = accountCurrency.match( rxAccountCurrencyMatch );

			if ( accountCurrencyMatches ) {
				accountCurrency = accountCurrencyMatches[ 1 ];
			}
			else {

				console.warn( 'Unknown currency: ' + accountCurrency );
				accountSummaryObject.errors.push( 'Unknown currency: ' + accountCurrency );
				accountSummaryObject.error = true;
				accountCurrency = '???';
			}
		}

		// Finished getting summary, put into return object...
		if ( accountName ) { accountSummaryObject.name = accountName; }
		if ( accountType ) { accountSummaryObject.type = accountType; }
		if ( accountNumber ) { accountSummaryObject.accountNumber = accountNumber; }
		if ( accountSortCode ) { accountSummaryObject.sortCode = accountSortCode; }
		if ( accountCurrency ) { accountSummaryObject.currency = accountCurrency; }

		/*
		 * Looks like a single statement
		 */

		if ( elStatementTransactions ) {

			/*
			 * Get statement date, IBAN, BIC
			 */

			var elDateAndIBANAndBIC = elAccountSummary.find( '.currencyDetails' ),

				elDate = elDateAndIBANAndBIC.get( 4 ),
				elIBAN = elDateAndIBANAndBIC.get( 3 ),
				elBIC = elDateAndIBANAndBIC.get( 2 );

			var statementDateString = elDate.innerText,
				statementIBANString = elIBAN.innerText,
				statementBICString = elBIC.innerText,
				expectedDateMatch = statementDateString.match( rxMatchStatementDate );

			if ( !expectedDateMatch ) {

				console.warn( 'Error trying to parse statement date: ' + statementDateString );
				accountSummaryObject.errors.push( 'Error trying to parse statement date: ' + statementDateString );
				accountSummaryObject.error = true;
			}
			else {
				accountSummaryObject.date = new Date( expectedDateMatch[ 1 ] );
			}

			if ( statementIBANString ) { accountSummaryObject.iban = statementIBANString.replace( /^IBAN /, '' ); }
			if ( statementBICString ) { accountSummaryObject.bic = statementBICString.replace( /^BIC /, '' ); }

			// Another page?
			/*var elNextPage = ROOT.find( 'a[title="Next page of this statement"]' );

			if ( elNextPage ) {

				var nextPageUrl = elNextPage.attr( 'href' );
				accountSummaryObject.nextPageUrl = nextPageUrl;
			}*/
		}

		/*
		 * Looks like a list of statements
		 */

		var statementLinks;

		if ( elStatementList ) {
			statementLinks = [];
		}

		accountSummaryObject.statementLinks = statementLinks;

		if ( !html ) {

			// ROOT.find( 'h3.divRedVerticalBar' ).first().parent().prepend(
			ROOT.find( '.returnToStmtsTop' ).first().parent().prepend(
				this.drawViewStatementsButton( accountSummaryObject.statementLinks ),
				this.drawDownloadZipButton(),
				this.drawGeneratorPicker()
			);

		}

		return accountSummaryObject;

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

		var statementEntries = [],
			runningBalances = [],

			memoUrls = [];

		var ROOT = jQuery( html || document ),
			self = this;

		var elStatementGrid = ROOT.find( '.stmtGrid' );
		var elStatementHeader = elStatementGrid.find( '.gridxHeader' );
		var elStatementRows = elStatementGrid.find( '.gridxMain > .gridxBody > .gridxRow > .gridxRowTable > tbody > tr' );

		// For the sake of the dodgy date-formats we loop through the transactions backwards
		var elReversedStatementRows = [];
		elStatementRows.each( function _jQuery_forEach() {
			elReversedStatementRows.unshift( this );
		});

		// date, payee, amount, balance

		var rxHasBigSpacer = / {2,}/;
		var rxSplitSpacers = /([\w\W]+?) {2,}([\w\W]+)/;

		function splitBigSpacersInTwo( line ) {

			var followingLines;
			var splitBySpacers = line.match( rxSplitSpacers );

			if ( !splitBySpacers ) {

				return {
					"line1": line,
					"line2": ''
				};
			}

			followingLines = [];
			splitBySpacers.slice( 2 ).forEach( function _forEach( followingLine ) {
				followingLines.push( followingLine.trim() );
			});

			return {
				"line1": String( splitBySpacers[ 1 ] ).trim(),
				"line2": followingLines.join( ' ' )
			};
		}

		elReversedStatementRows.forEach( function _forEach( tr ) {

			var descriptionSplit;

			var elRow = jQuery( tr );
			var elCols = elRow.find( 'td' );

			var dateText, payeeText, descriptionText, creditText, debitText, balanceText,

				entry = { debit: 0, credit: 0 },
				isRunningBalance = false;

			elCols.each( function _jQuery_forEach_td() {

				var line, lines, lineSplit;

				var elCol = jQuery( this );
				var sanitizedCol = jQuery( '<div>' + elCol.html() + '</div>' );
				sanitizedCol.find( '.accessible' ).remove();


				if ( elCol.is( '.date' ) ) {

					dateText  = sanitizedCol.html();
				}

				if ( elCol.is( '.payee' ) ) {

					lines = [];

					sanitizedCol.find( 'span' ).each( function _jQuery_forEach_span() {
						lines.push( String( this.innerText ).trim() );
					});

					if ( rxHasBigSpacer.test( lines[ 0 ] )) {

						lineSplit = splitBigSpacersInTwo( lines[ 0 ] );
						payeeText = lineSplit.line1;
						descriptionText = [ lineSplit.line2 ].concat( lines.slice( 1 )).join( ' ' );
					}
					else {

						payeeText = lines[ 0 ];
						descriptionText = lines.slice( 1 ).join( ' ' );
					}
				}

				if ( elCol.is( '.amount' )) {

					// Ignore open/closing balances for transactions
					if ( elCol.is( '.openCloseBal' )) {
						isRunningBalance = true;
					}
					else {

						line  = sanitizedCol.html();

						if ( '-' === line.charAt( 0 )) {
							debitText = line;
						}
						else {
							creditText = line;
						}
					}
				}

				if ( elCol.is( '.balance' ) ) {

					line = sanitizedCol.html();

					if ( !isNaN( parseFloat( line ))) {
						balanceText = line;
					}
				}
			});

			/*
			 * If the description appears to be made of a few "columns", take the first one
			 * out and append it to the payee. Helps to make the payee more descriptive, for
			 * example when it is:

					"INT'L 0123456789"

			 * it would be transformed into:

					"INT'L 0123456789 Amazon"

			 */

			if ( rxHasBigSpacer.test( descriptionText )) {

				descriptionSplit = splitBigSpacersInTwo( descriptionText );
				payeeText += ' ' + descriptionSplit.line1;
				descriptionText = descriptionSplit.line2;
			}

			// Further columns should be joined by commas

			descriptionSplit = descriptionText.split( '  ' );

			if ( 1 < descriptionSplit.length ) {

				descriptionText = [];
				descriptionSplit.forEach( function _forEach( col ) {

					col = col.trim();

					if ( col ) {
						descriptionText.push( col );
					}
				});
				descriptionText = descriptionText.join( ', ' );
			}

			// Populate

			entry.date = new Date( dateText );
			entry.description = payeeText;
			entry.memo = descriptionText;

			if ( undefined !== creditText ) {
				entry.credit = obis.utils.convertDecimalToCents( creditText );
			}

			if ( undefined !== debitText ) {
				entry.debit = -Math.abs( obis.utils.convertDecimalToCents( debitText ));
			}

			if ( !isRunningBalance ) {
				entry.type = ( undefined !== debitText ) ? 'WITHD' : 'DEP';
			}

			if ( undefined !== balanceText ) {
				entry.balance = obis.utils.convertDecimalToCents( balanceText );
			}
			else {
				entry.balance = 0;
			}

			entry.id = self.generateIdForTransaction( entry );
			entry._id = entry.id; // DOM version

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
			memoUrls: memoUrls // Not needed anymore?
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

						// We have the memo now - regenerate the ID
						entry.id = self.generateIdForTransaction( entry );

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

		// Check for duplicate IDs

		var memoTextIds = {};

		jQuery.each( statement.entries, function _forEach() {

			var statement = this;
			var memoId = statement.id;
			var uniqueId = memoId;

			if ( !memoTextIds[ memoId ] ) {
				memoTextIds[ memoId ] = 1;
			}
			else {
				memoTextIds[ memoId ] += 1;
				uniqueId += '_' + memoTextIds[ memoId ];
			}

			statement.id = uniqueId;
		});


		statement.processed = true;
		this.toggleViewAndDownloadButtons();
		jQuery( document ).trigger( 'memos:processed' );
	}

});
