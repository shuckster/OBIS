
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2016 by Conan Theobald <me[at]conans[dot]co[dot]uk>
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

		qif =
			'!Account' + '\n' +
			'N' + statement.type + '\n' +
			'A' + statement.sortCode + '/' + statement.sortCode + statement.accountNumber + '\n' +
			'/' + obis.utils.USDateTimeString( statement.balances[ statement.balances.length - 1 ].date ) + '\n' +
			'$' + statement.balances[ statement.balances.length - 1 ].balance.toFixed( 2 ) + '\n' +
			'T' + 'Bank' + '\n' +
			'^' + '\n' +

			'!Type:Bank' + '\n';

		jQuery.each( statement.entries, function _forEach() {

			var transactionAmount = ( this.debit + this.credit ).toFixed( 2 );

			qif +=
				'D' + obis.utils.USDateTimeString( this.date ) + '\n' +
				'N' + ( ( this.debit + this.credit ) < 0 ? 'WITHD' : 'DEP' ) + '\n' +
				'T' + transactionAmount + '\n' +
				'C' + '\n' +
				'P' + this.description + '\n' +
				( 'memo' in this ? ( 'M' + this.memo + '\n' ) : '' ) +
				'^' + '\n';

		});

		qif +=
			'\n';

		return qif;

	}

});
