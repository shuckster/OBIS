
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2016 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: obis.js: The obis object
 *

 Parsers should overwrite the following methods:

	parse()
		Parser entry point

 */

// jshint unused:true
/* globals obis,JSZip,saveAs,alert */

/*

 Events:
	statements:updated
	popup:opened
	popup:closed

 Methods:
	parse()

	// Model
	addStatement( statement )
	filenameFromStatement( statement, extension )
	zipnameFromStatement( statement )
	downloadStatementsZip()

	// Views
	drawViewStatementsButton( count )
	drawDownloadZipButton()
	drawGeneratorPicker()
	toggleViewAndDownloadButtons()

	popupSelectStatement( selectBox )
	popupRefreshStatementsPicker()
	generateStatementPickerHTML()
	generateStatementHTML( statement )

	openStatementsPopup( statement )

	// Events
	statementsPopupOpened()
	statementsPopupClosed()

 */

jQuery.extend( obis, {

	windowRef: null,

	generators: [],

	elements: {
		viewStatementsButton: null,
		downloadStatementsButton: null,
		retrieveStatementsButton: null,
		allGeneratorsCheckbox: null,
		allStatementsCheckbox: null,
		generatorCheckboxes: [],
		statementCheckboxes: []
	},

	statements: [],

	/*
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
	*/

	init: function _init() {

		var self = this;

		jQuery( document ).bind( 'statements:updated', function _statementsUpdated() {
			self.toggleViewAndDownloadButtons();
		});

		this.parse();

	},

	// To be overloaded by a parser
	parse: function _parse() {
		console.error( 'No parser loaded.' );
	},

	/*
	 * Add statements, generate zip file
	 */

	addStatement: function _addStatement( statement ) {

		var nextStatement,
			sidx = this.statements.length - 1,
			found = false;

		for ( ; sidx >= 0 ; sidx -- ) {

			nextStatement = this.statements[ sidx ];

			if ( statement.date.getTime() == nextStatement.date.getTime() ) {
				found = true;
				break;
			}

		}

		if ( !found ) {
			statement.id = obis.utils.dateTimeString( statement.date );
			this.statements.push( statement );

			jQuery( document ).trigger( 'statements:updated', [ this.statements.length ] );
		}

	},

	filenameFromStatement: function _filenameFromStatement( statement, extension ) {

		return (
			statement.type.replace( /[^a-zA-Z]/g, '_' ) + '-' +
			statement.date.getFullYear() + '-' + obis.utils.addZeros( statement.date.getMonth() + 1 ) + '-' + obis.utils.addZeros( statement.date.getDate() ) + '.' + extension
		);

	},

	zipnameFromStatement: function _zipnameFromStatement( statement ) {

		return (
			statement.type.replace( /[^a-zA-Z]/g, '_' ) + '-' +
			statement.date.getFullYear() + '.zip'
		);

	},

	downloadStatementsZip: function _downloadStatementsZip() {

		var blob, zip, zipName,
			zipContents = [ /* { folder: '', files: [ { name: '', content: '' }, ] } */ ],
			self = this;

		// See which generators we want to use
		jQuery.each( this.generators, function _forEach() {

			var zipContent = {},
				generator = this;

			if ( generator.checked ) {

				zipContent.folder = generator.folder;
				zipContent.files = [];

				// Generate statements with this generator
				jQuery.each( self.statements, function _forEach( index ) {

					var statement = this,
						filename = self.filenameFromStatement( statement, generator.extension ),
						content = generator.generate( statement );

					zipContent.files.push({
						name: filename,
						content: content
					});

					if ( 0 === index ) {
						zipName = self.zipnameFromStatement( statement, 'zip' );
					}

				});

				zipContents.push( zipContent );

			}

		});

		// Got some content? Generate the Zip!
		if ( zipContents.length ) {

			zip = new JSZip();

			jQuery.each( zipContents, function _forEach() {

				var folder = zip.folder( this.folder );

				jQuery.each( this.files, function _forEach() {
					folder.file( this.name, this.content, { type: 'string' } );
				});

			});

			/*blob = new BlobBuilder();
			blob.append( zip.generate({ base64: true }) );
			saveAs( blob.getBlob( 'application/zip;charset=' + document.characterSet ), zipName );*/

			// Works in Chrome... nowhere else yet
			if ( /Chrome/.test( navigator.userAgent ) ) {
				saveAs( zip.generate({ type: 'blob', compression: 'DEFLATE' }), zipName );
			}
			else {
				alert( 'OBIS: Don\'t forget to rename the file to something like "' + zipName + '" after downloading.\n\nIf you use Google Chrome the filename will be set for you.' );
				blob = zip.generate({ type: 'base64', compression: 'DEFLATE' });

				location.href = 'data:application/zip;base64,' + blob;
			}

		}
		else {
			console.warn( 'No statements to download: Not creating Zip file' );
		}

	},

	/*
	 * Generate DOM/HTML stuff
	 */

	drawViewStatementsButton: function _drawViewStatementsButton( count ) {

		var elViewButton = jQuery( '<input type="button" value="View statement' + ( count ? 's' : '' ) + '" disabled="disabled" />' );

		this.elements.viewStatementsButton = elViewButton;

		elViewButton.bind( 'click', function _onClick() {
			obis.openStatementsPopup();
		});

		return elViewButton;

	},

	drawDownloadZipButton: function _drawDownloadZipButton() {

		var elDownloadButton = jQuery( '<input type="button" value="Download Zip" style="margin-left: 5px !important;" disabled="disabled" />' );

		this.elements.downloadStatementsButton = elDownloadButton;

		elDownloadButton.bind( 'click', function _onClick() {
			obis.downloadStatementsZip();
		});

		return elDownloadButton;

	},

	toggleViewAndDownloadButtons: function _toggleViewAndDownloadButtons() {

		var generators,
			generatorCount = 0,
			statementsProcessed = 0,
			statements = !!this.statements.length;

		jQuery.each( this.statements, function _forEach() {
			if ( this.processed ) {
				statementsProcessed ++;
			}
		});

		jQuery.each( this.generators, function _forEach() {
			if ( this.checked ) {
				generatorCount ++;
			}
		});

		generators = !!generatorCount;

		if ( this.elements.viewStatementsButton ) {
			this.elements.viewStatementsButton[ 0 ].disabled = ( !statements );
		}

		if ( this.elements.downloadStatementsButton ) {
			this.elements.downloadStatementsButton[ 0 ].disabled = ( !statementsProcessed || !generators || this.alreadyProcessing );
		}

	},

	drawGeneratorPicker: function _drawGeneratorPicker() {

		var el = jQuery( '<p style="color: black; padding: 10px;" />' ),
			self = this;

		jQuery.each( this.generators, function _forEach() {

			var generator = this,
				elCheckbox = jQuery( '<input id="gen_' + obis.utils.htmlEscape( generator.id ) + '" type="checkbox" checked="checked" />' ),
				elLabel = jQuery( '<label for="gen_' + obis.utils.htmlEscape( generator.id ) + '" style="margin-left: 5px;">' + obis.utils.htmlEscape( generator.description ) + '</label><br/>' );

			generator.checked = true;

			elCheckbox.bind( 'change', function _onChange() {
				generator.checked = this.checked;
				self.toggleViewAndDownloadButtons();
			});

			elCheckbox.appendTo( el );
			elLabel.appendTo( el );

			// ...
			elCheckbox.data( 'generator', generator );
			self.elements.generatorCheckboxes.push( elCheckbox );

		});

		return el;

	},

	/*
	 * Popup window stuff
	 */

	popupSelectStatement: function _popupSelectStatement( selectBox ) {

		var statement, html,
			el = jQuery( selectBox ),
			value = el.val(),
			self = this;

		jQuery.each( this.statements, function _forEach() {
			if ( this.id === value ) {
				statement = this;
				return false;
			}
		});

		if ( statement ) {
			html = self.generateStatementHTML( statement );
			el.next().replaceWith( html );
			this.selectedStatement = statement;
		}

	},

	popupRefreshStatementsPicker: function _popupRefreshStatementsPicker() {

		if ( obis.windowRef ) {
			var el = jQuery( obis.windowRef.document ).find( 'body > select#statement-picker' );
			el.replaceWith( obis.generateStatementPickerHTML() );
		}

	},

	generateStatementPickerHTML: function _generateStatementPickerHTML() {

		var selection = this.selectedStatement || {},
			html = '';

		this.statements.sort( function _sortMethod( a, b ) {
			var date1 = a.date.getTime(),
				date2 = b.date.getTime();

			if ( date1 > date2 ) return -1;
			if ( date1 < date2 ) return 1;
			return 0;
		});

		jQuery.each( this.statements, function _forEach() {
			html += '<option value="' + this.id + '"' + ( this === selection ? ' selected="selected"' : '' )  +'>' + obis.utils.simpleDate( this.date ) + '</option>';
		});

		return '<select id="statement-picker" onchange="opener.obis.popupSelectStatement(this);">' + html + '</select>';

	},

	generateStatementHTML: function _generateStatementHTML( statement ) {

		statement = statement || this.statements[ 0 ];

		var html =
				'<table id="statement-viewer">' +
					'<thead>' +
						'<tr>' +
							'<th>Date</th>' +
							'<th>Type</th>' +
							'<th>Description</th>' +
							'<th>Memo</th>' +
							'<th>Debit</th>' +
							'<th>Credit</th>' +
							'<th>Balance</th>' +
							'<th>(Calculated)</th>' +
						'</tr>' +
					'</thead>' +
					'<tbody>';

		var runningBalance = ( statement && statement.balances && statement.balances.length ) ? ( statement.balances[ 0 ].balance || 0 ) : 0;

		jQuery.each( statement.entries, function _forEach() {

			var balanceIssue = false;
			var discrepancy = 0;

			runningBalance += this.credit;
			runningBalance += this.debit;

			if ( 0 !== this.balance && ( runningBalance !== this.balance ) ) { // jshint ignore:line

				console.warn( 'Running balance discrepancy: ' +

					'runningBalance = ', obis.utils.convertCentsToDecimal( runningBalance ),
					', this.balance = ', obis.utils.convertCentsToDecimal( this.balance ),
					', discrepancy = ', obis.utils.convertCentsToDecimal( this.balance - runningBalance )
				);

				balanceIssue = true;
				discrepancy = this.balance - runningBalance;
			}

			html +=
				'<tr id="_' + this.id + '" class="' + ( balanceIssue ? 'balance_issue' : '' ) + '">' +

					'<td class="date">' +
					obis.utils.htmlEscape(
						obis.utils.simpleDate( this.date )
					) +
					'</td>' +

					'<td class="type">' +
					obis.utils.htmlEscape(
						this.type
					) +
					'</td>' +

					'<td class="description">' +
					obis.utils.htmlEscape(
						this.description
					) +
					'</td>' +

					'<td class="memo">' +
					obis.utils.htmlEscape(
						'memo' in this ? this.memo : ( this.memoLink ? '...' : '' )
					) +
					'</td>' +

					'<td class="debit">' +
					obis.utils.htmlEscape(
						obis.utils.convertCentsToDecimal( this.debit )
					) +
					'</td>' +

					'<td class="credit">' +
					obis.utils.htmlEscape(
						obis.utils.convertCentsToDecimal( this.credit )
					) +
					'</td>' +

					'<td class="balance' + ( this.balance < 0 ? ' negative' : '' ) + '">' +
					obis.utils.htmlEscape(
						obis.utils.convertCentsToDecimal( this.balance )
					) +
					'</td>' +

					'<td class="calculated' + ( runningBalance < 0 ? ' negative' : '' ) + '">' +

					( discrepancy ? ('(Calculation discrepancy: ' + obis.utils.convertCentsToDecimal( discrepancy ) + ')&nbsp;&nbsp;&nbsp;') : '' ) +

					obis.utils.htmlEscape(
						obis.utils.convertCentsToDecimal( runningBalance )
					) +
					'</td>' +

				'</tr>';

		});

		html +=
				'</tbody>' +
			'</table>';

		return html;

	},

	// ...

	openStatementsPopup: function _openStatementsPopup() {

		this.windowRef = window.open( 'text/html', 'obis', 'width=1000,height=750,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1' );
		this.windowRef.document.writeln(
			'<html>' +
				'<head>'+
					'<title>Statements</title>'+
					'<style type="text/css">' +
						'body * { font-size: 12px; } ' +
						'.balance_issue .balance, .balance_issue .calculated, .negative, .processing { color: #f00; font-weight: bold; } ' +
						'.processing { font-size: 24px; line-height: 12px; } ' +
						'table { border-collapse: collapse; } ' +
						'tr > * { padding: 5px; border-bottom: 1px solid #ddd; } ' +
						'tr:hover > td { background: #ffc; } ' +
						'.date, .debit, .credit, .balance, .calculated { text-align: right; } ' +
					'</style>' +
				'</head>' +
				'<body onload="opener.obis.statementsPopupOpened();" onunload="opener.obis.statementsPopupClosed();">' +
					'<input type="button" value="Close" onclick="window.close();" />' +
					this.generateStatementPickerHTML() +
					this.generateStatementHTML() +
				'</body>' +
			'</html>'
		);

		this.windowRef.document.close();

	},

	statementsPopupOpened: function _statementsPopupOpened() {
		jQuery( document ).trigger( 'popup:opened' );
		jQuery( document ).bind( 'statements:updated', this.popupRefreshStatementsPicker );
	},

	statementsPopupClosed: function _statementsPopupClosed() {
		delete this.selectedStatement;
		jQuery( document ).unbind( 'statements:updated', this.popupRefreshStatementsPicker );
		jQuery( document ).trigger( 'popup:closed' );
	}

});
