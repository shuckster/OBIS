
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: utils.js: Helper methods
 */

// jshint unused:true
/* globals obis,SparkMD5 */

/*

 Methods:
	htmlEscape( str )
	csvEscape( string )
	addZeros( number )
	convertDecimalToCents( decimalCurrencyString )
	convertCentsToDecimal( cents )
	simpleDate( date )
	dateTimeString( date )
	USDateTimeString( date )
	arrayWithout( array, without )
	domFragmentFromString( str )
	sortByNumber( str )

 */

jQuery.extend( obis, {

	utils: {

		htmlEscape: function _htmlEscape( str ) {

			return String( str )
				.replace( /&/g, '&amp;' )
				.replace( /"/g, '&quot;' )
				.replace( /'/g, '&#39;' )
				.replace( /</g, '&lt;' )
				.replace( />/g, '&gt;' )
				.trim();
		},

		htmlUnescape: function _htmlUnescape( str ) {

			return String( str )
				.replace( /&amp;/gi, '&' )
				.replace( /&nbsp;/gi, ' ' )
				.replace( /&quot;/gi, '"' )
				.replace( /&#39;/gi, '\'' )
				.replace( /&lt;/gi, '<' )
				.replace( /&gt;/gi, '>' )
				.trim();
		},

		ofxEscape: function _ofxEscape( str ) {

			return String( str )
				.replace( /</g, '&lt;' )
				.replace( />/g, '&gt;' )
				.trim();
		},

		csvEscape: function _csvEscape( str ) {

			return String( str )
				.replace( /"/g, '""' )
				.replace( /\r\n|\r|\n/g, ' ' )
				.trim();
		},

		qifEscape: function _qifEscape( str ) {

			return String( str )
				.replace( /\r\n|\r|\n/g, ' ' )
				.trim();
		},

		addZeros: function _addZeros( number ) {
			return String( 10 > number ? ( '0' + number ) : number );
		},

		convertDecimalToCents: function _convertDecimalToCents( decimalCurrencyString ) {

			var float = parseFloat( decimalCurrencyString );
			if ( isNaN( float ) ) { float = 0; }
			var negative = 0 > float;
			decimalCurrencyString = Math.abs( float ).toFixed( 2 );

			var parts = ( decimalCurrencyString ).split( '.' );
			var left = parts[ 0 ];
			var right = parts[ 1 ];
			var hundreds = parseInt( left ) * 100;
			var cents = parseInt( right );

			if ( negative ) {
				hundreds = -hundreds;
				cents = -cents;
			}

			return hundreds + cents;
		},

		convertCentsToDecimal: function _convertCentsToDecimal( cents ) {

			if ( !cents || 'number' !== typeof cents ) {
				return '-';
			}

			var negative = 0 > cents;
			cents = Math.abs( cents );

			var hundreds = cents / 100;
			var parts = hundreds.toFixed( 2 ).split( '.' );
			var left = parts[ 0 ];
			var right = parts[ 1 ];

			return ( negative ? '-' : '' ) + left + '.' + right;
		},

		simpleDate: function _simpleDate( date ) {

			var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

			return String(
				date.getDate() + ' ' +
				months[ date.getMonth() ] + ' ' +
				date.getFullYear()
			);

		},

		dateTimeString: function _dateTimeString( date ) {

			return String(
				'' +
				date.getFullYear() +
				obis.utils.addZeros( date.getMonth() + 1 ) +
				obis.utils.addZeros( date.getDate() ) +
				obis.utils.addZeros( date.getHours() ) +
				obis.utils.addZeros( date.getMinutes() ) +
				obis.utils.addZeros( date.getSeconds() )
			);

		},

		USDateTimeString: function _USDateTimeString( date ) {

			return String(
				'' +
				obis.utils.addZeros( date.getDate() ) + '/' +
				obis.utils.addZeros( date.getMonth() + 1 ) + '/' +
				date.getFullYear()
			);
		},

		arrayWithout: function _arrayWithout( array, without ) {

			var newArray = [];

			jQuery.each( array, function _forEach() {
				if ( this !== without ) {
					newArray.push( this );
				}
			});

			return newArray;
		},

		md5: function _md5( str ) {

			return SparkMD5.hash( str );
		},

		// http://stackoverflow.com/a/25214113
		domFragmentFromString: function _domFragmentFromString( str ) {
			return document.createRange().createContextualFragment( str );
		},

		sortByNumber: function _sortByNumber( field ) {

			if ( field ) {

				return function _sortByNumberInObject( a, b ) {
					return +a[ field ] - +b[ field ];
				};
			}
			else {

				return function _sortByNumber( a, b ) {
					return +a - +b;
				};
			}
		}
	}
});
