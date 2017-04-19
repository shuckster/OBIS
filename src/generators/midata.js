
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: midata.js: CSV generator in the style of midata:
 *    http://www.pcamidata.co.uk/
 *

NOTE: This generator does not replace personally-identifiable information
with asterisks, as per the standard. The arranged overdraft limit is also
hard-coded to £0

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

	id: 'MIDATA',
	folder: 'midata',
	extension: 'csv',
	description: 'midata (non-standard, CSV)',

	generate: function _generate( statement ) {

		var csv;

		csv =
			' Date,Type,Merchant/Description,Debit/Credit,Balance' + '\r\n' +
			'\r\n';

		var initialBalanceInCents = ( statement.balances || [{ date: 0, balance: 0 }]).sort( obis.utils.sortByNumber( 'date' ))[ 0 ].balance;
		var runningBalanceInCents = initialBalanceInCents;

		jQuery.each( statement.entries, function _forEach() {

			var transactionAmountInCents = ( this.debit + this.credit ); // obis.utils.convertCentsToDecimal
			runningBalanceInCents += transactionAmountInCents;

			csv +=
				'"' + obis.utils.csvEscape( obis.utils.UKDateTimeString( this.date )) + '",' +
				'"' + obis.utils.csvEscape( this.type ) + '",' +
				'"' +
					obis.utils.csvEscape(
						this.description +
						( 'memo' in this ? this.memo : '' )
					) +
				'",' +
				'"' + obis.utils.csvEscape( obis.utils.convertCentsToDecimal( transactionAmountInCents )) + '",' +
				'"' + obis.utils.csvEscape( obis.utils.convertCentsToDecimal( runningBalanceInCents )) + '"' +
				'\r\n';

		});

		csv +=
			'\r\n' +
			'Arranged overdraft limit,' + obis.utils.csvEscape( obis.utils.UKDateTimeString( statement.date )) + ',£0.00\r\n' +
			'\r\n';

		return csv;

	}

});
