
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2016 by Conan Theobald <me[at]conans[dot]co[dot]uk>
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
	numberToCurrency( number )
	simpleDate( date )
	dateTimeString( date )
	USDateTimeString( date )
	arrayWithout( array, without )

 */

jQuery.extend( obis, {

	utils: {

		htmlEscape: function _htmlEscape( str ) {

			return String( str )
				.replace( /&/g, '&amp;' )
				.replace( /"/g, '&quot;' )
				.replace( /'/g, '&#39;' )
				.replace( /</g, '&lt;' )
				.replace( />/g, '&gt;' );

		},

		csvEscape: function _csvEscape( string ) {
			return ( '' + string ).replace( /"/g, '""' );
		},

		addZeros: function _addZeros( number ) {
			return ( 10 > number ? ( '0' + number ) : number );
		},

		numberToCurrency: function _numberToCurrency( number ) {

			var value = number.toFixed( 2 );

			if ( !value ) {
				value = '-';
			}

			return value;

		},

		simpleDate: function _simpleDate( date ) {

			var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

			return (
				date.getDate() + ' ' +
				months[ date.getMonth() ] + ' ' +
				date.getFullYear()
			);

		},

		dateTimeString: function _dateTimeString( date ) {

			return (
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

			return (
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
		}

	}

});
