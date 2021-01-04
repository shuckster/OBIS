
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2021 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: hsbc.js: CSV generator in the style of HSBC UK's Recent Transactions download
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

	id: 'HSBC',
	folder: 'hsbc',
	extension: 'csv',
	description: 'CSV Legacy HSBC (à la Recent Transactions)',

	generate: function _generate( statement ) {

		var csv;

		csv = '';
			// 'Date","Payee + Memo + Type","Amount"' + '\r\n' +
			// '\r\n';

		jQuery.each( statement.entries, function _forEach() {

			var transactionAmount = obis.utils.convertCentsToDecimal( this.debit + this.credit );

			csv +=
				'"' + obis.utils.csvEscape( obis.utils.UKDateTimeString( this.date ) ) + '",' +

				'"' +
					obis.utils.csvEscape(
						obis.utils.addSpaces( this.description, 25 ) +
						obis.utils.addSpaces( 'memo' in this ? this.memo : '', 25 ) +
						this.type
					) +
				'",' +

				'"' + obis.utils.csvEscape( transactionAmount ) + '"' +
				'\r\n';

		});

		csv +=
			'\r\n';

		return csv;

	}

});
