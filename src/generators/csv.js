
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: csv.js: CSV generator
 *

 Based on RFC4180 specification:
 	http://tools.ietf.org/html/rfc4180

 */

// jshint unused:true
/* globals obis,jQuery */

/*

 Events:
	None

 Methods:
	generate( statement )

 */

obis.generators.push({

	id: 'CSV',
	folder: 'csv',
	extension: 'csv',
	description: 'CSV RFC4180 (Excel, Numbers)',

	generate: function _generate( statement ) {

		var csv;

		csv =
			'"Transaction ID","Date","Account type","Account number","Payee","Memo","Type","Amount"' + '\r\n' +
			'\r\n';

		jQuery.each( statement.entries, function _forEach() {

			var transactionAmount = obis.utils.convertCentsToDecimal( this.debit + this.credit );

			csv +=
				'"' + obis.utils.csvEscape( this.id ) + '",' +
				'"' + obis.utils.csvEscape( obis.utils.simpleDate( this.date ) ) + '",' +
				'"' + obis.utils.csvEscape( statement.type ) + '",' +
				'"' + obis.utils.csvEscape( statement.sortCode + ' ' + statement.accountNumber ) + '",' +
				'"' + obis.utils.csvEscape( this.description ) + '",' +
				'"' + obis.utils.csvEscape( 'memo' in this ? this.memo : '' ) + '",' +
				'"' + obis.utils.csvEscape( this.type ) + '",' +
				'"' + obis.utils.csvEscape( transactionAmount ) + '"' +
				'\r\n';

		});

		csv +=
			'\r\n';

		return csv;

	}

});
