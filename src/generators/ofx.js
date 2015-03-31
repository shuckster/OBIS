
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2015 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: ofx.js: OFX 1.0.2 generator
 *

 Based on output from the HSBC UK Personal Banking website.
	http://www.hsbc.co.uk/

 */

/*

 Events:
	None

 Methods:
	filterTransactionType( type )
	generate( statement )

 */

obis.generators.push({

	id: 'OFX',
	folder: 'ofx',
	extension: 'ofx',
	description: 'OFX 1.0.2 (Money, Quicken)',

	filterTransactionType: function _filterTransactionType( type ) {
		return type;
	},

	generate: function _generate( statement ) {

		var ofx,
			self = this;

		// TODO: Move into hsbc.js somehow
		function filterTransactionType( type ) {

			switch ( type ) {
				case 'ATM': break;
				case 'TFR': type = 'XFER'; break;

				default:
					type = 'OTHER';
			}

			return type;

		};

		ofx =
			'OFXHEADER:100' + '\n' +
			'DATA:OFXSGML' + '\n' +
			'VERSION:102' + '\n' +
			'SECURITY:NONE' + '\n' +
			'ENCODING:USASCII' + '\n' +
			'CHARSET:1252' + '\n' +
			'COMPRESSION:NONE' + '\n' +
			'OLDFILEUID:NONE' + '\n' +
			'NEWFILEUID:NONE' + '\n' +
			'\n' +
			'<OFX>' + '\n' +
			'\n' +
			'\t' + '<SIGNONMSGSRSV1>' + '\n' +
			'\t\t' + '<SONRS>' + '\n' +
			'\t\t\t' + '<STATUS>' + '\n' +
			'\t\t\t\t' + '<CODE>0</CODE>' + '\n' +
			'\t\t\t\t' + '<SEVERITY>INFO</SEVERITY>' + '\n' +
			'\t\t\t' + '</STATUS>' + '\n' +
			'\t\t\t' + '<DTSERVER>' + obis.utils.dateTimeString( new Date() ) + '</DTSERVER>' + '\n' +
			'\t\t\t' + '<LANGUAGE>' + obis.LANGUAGE + '</LANGUAGE>' + '\n' +
			'\t\t\t' + '<INTU.BID>' + obis.INTU_BID + '</INTU.BID>' + '\n' +
			'\t\t' + '</SONRS>' + '\n' +
			'\t' + '</SIGNONMSGSRSV1>' + '\n' +
			'\n' +
			'\t' + '<BANKMSGSRSV1>' + '\n' +
			'\n' +
			'\t\t' + '<STMTTRNRS>' + '\n' +
			'\n' +
			'\t\t\t' + '<TRNUID>1</TRNUID>' + '\n' +
			'\n' +
			'\t\t\t' + '<STATUS>' + '\n' +
			'\t\t\t\t' + '<CODE>0</CODE>' + '\n' +
			'\t\t\t\t' + '<SEVERITY>INFO</SEVERITY>' + '\n' +
			'\t\t\t' + '</STATUS>' + '\n' +
			'\n' +
			'\t\t\t' + '<STMTRS>' + '\n' +
			'\n' +
			'\t\t\t\t' + '<CURDEF>' + obis.CURDEF + '</CURDEF>' + '\n' +
			'\n' +
			'\t\t\t\t' + '<BANKACCTFROM>' + '\n' +
			'\t\t\t\t\t' + '<BANKID>' + statement.sortCode + '</BANKID>' + '\n' +
			'\t\t\t\t\t' + '<ACCTID>' + statement.sortCode + statement.accountNumber + '</ACCTID>' + '\n' +
			'\t\t\t\t\t' + '<ACCTTYPE>CHECKING</ACCTTYPE>' + '\n' +
			'\t\t\t\t' + '</BANKACCTFROM>' + '\n' +
			'\n' +
			'\t\t\t\t' + '<BANKTRANLIST>' + '\n' +
			'\n' +
			'\t\t\t\t\t' + '<DTSTART>' + obis.utils.dateTimeString( statement.balances[ 0 ].date ) + '</DTSTART>' + '\n' +
			'\t\t\t\t\t' + '<DTEND>' + obis.utils.dateTimeString( statement.balances[ statement.balances.length - 1 ].date ) + '</DTEND>' + '\n' +
			'\n';

		jQuery.each( statement.entries, function _forEach( index ) {

			var transactionAmount = ( this.debit + this.credit ).toFixed( 2 );

			ofx +=
				'\t\t\t\t\t' + '<STMTTRN>' + '\n' +
				'\t\t\t\t\t\t' + '<TRNTYPE>' + filterTransactionType( this.type ) + '</TRNTYPE>' + '\n' +
				'\t\t\t\t\t\t' + '<DTPOSTED>' + obis.utils.dateTimeString( this.date ) + '</DTPOSTED>' + '\n' +
				'\t\t\t\t\t\t' + '<TRNAMT>' + transactionAmount + '</TRNAMT>' + '\n' +
				'\t\t\t\t\t\t' + '<FITID>' + this.id + '</FITID>' + '\n' +
				'\t\t\t\t\t\t' + '<NAME>' + obis.utils.htmlEscape( this.description ) + '</NAME>' + '\n' +
				( 'memo' in this ? ( '\t\t\t\t\t\t' + '<MEMO>' + obis.utils.htmlEscape( this.memo ) + '</MEMO>' + '\n' ) : '' ) +
				'\t\t\t\t\t' + '</STMTTRN>' + '\n' +
				'\n';

		});

		ofx +=
			'\t\t\t\t' + '</BANKTRANLIST>' + '\n' +
			'\n' +
			'\t\t\t\t' + '<LEDGERBAL>' + '\n' +
			'\t\t\t\t\t' + '<BALAMT>' + statement.balances[ statement.balances.length - 1 ].balance + '</BALAMT>' + '\n' +
			'\t\t\t\t\t' + '<DTASOF>' + obis.utils.dateTimeString( statement.balances[ statement.balances.length - 1 ].date ) + '</DTASOF>' + '\n' +
			'\t\t\t\t' + '</LEDGERBAL>' + '\n' +
			'\n' +
			'\t\t\t' + '</STMTRS>' + '\n' +
			'\t\t' + '</STMTTRNRS>' + '\n' +
			'\t' + '</BANKMSGSRSV1>' + '\n' +
			'\n' +
			'</OFX>' + '\n';

		return ofx;

	}

});
