
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2021 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: qif.js: QIF generator
 *

 Based on the output from MoneyWell and the specs from:
 	http://svn.gnucash.org/trac/browser/gnucash/trunk/src/import-export/qif-import/file-format.txt
 	http://en.wikipedia.org/wiki/Quicken_Interchange_Format

 */

// jshint unused:true
/* globals obis */

/*

 Events:
	None

 Methods:
	generate( statement )

 */

obis.generators.push({

	id: 'QIF',
	folder: 'qif',
	extension: 'qif',
	description: 'QIF (Quicken)',

	generate: function _generate( statement ) {

		var qif;
		var latestBalanceIndex = statement.balances.length - 1;

		qif =
			'!Account' + '\n' +
			'N' + obis.utils.qifEscape( statement.type ) + '\n' +
			'A' + obis.utils.qifEscape( statement.sortCode + '/' + statement.sortCode + statement.accountNumber ) + '\n' +
			'/' + obis.utils.qifEscape( obis.utils.USDateTimeString( statement.balances[ latestBalanceIndex ].date ) ) + '\n' +
			'$' + obis.utils.qifEscape( obis.utils.convertCentsToDecimal( statement.balances[ latestBalanceIndex ].balance ) ) + '\n' +
			'T' + 'Bank' + '\n' +
			'^' + '\n' +

			'!Type:Bank' + '\n';

		jQuery.each( statement.entries, function _forEach() {

			var transactionAmount = obis.utils.convertCentsToDecimal( this.debit + this.credit );

			qif +=
				'D' + obis.utils.qifEscape( obis.utils.USDateTimeString( this.date ) ) + '\n' +
				'N' + obis.utils.qifEscape( (( this.debit + this.credit ) < 0 ? 'WITHD' : 'DEP') ) + '\n' +
				'T' + obis.utils.qifEscape( transactionAmount ) + '\n' +
				'C' + '\n' +
				'P' + obis.utils.qifEscape( this.description ) + '\n' +
				( 'memo' in this ? ( 'M' + obis.utils.qifEscape( this.memo ) + '\n' ) : '' ) +
				'^' + '\n';

		});

		qif +=
			'\n';

		return qif;

	}

});
