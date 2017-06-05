
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2015 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: main.js: Bookmarklet loader
 */

/*

 Events:
 	None

 Methods:
 	_obisLoad()
 	loadScript( url )     // Defined in bookmarklet
 	loadScripts()

 */

(function _obisLoad() {

	var jQueryAvailable = 'jQuery' in window;

	// Various bank statement parsers (and by "various" I mean "HSBC UK")
	var parsers = [

		{ name: 'HSBC UK Legacy', rx: /^https?\:\/\/(www\.)?(saas\.)?hsbc\.co\.uk\//,
		  url: 'https://shuckster.github.io/OBIS/dist/parsers/hsbc.js' },

		{ name: 'HSBC UK', rx: /^https?\:\/\/(www\.)?(services\.online\-banking\.)?hsbc\.co\.uk\//,
		  url: 'https://shuckster.github.io/OBIS/dist/parsers/hsbc-new.js' },

		{ name: 'HSBC UK (testing)', rx: /localhost\/OBIS-tests/,
		  url: '/OBIS/dist/parsers/hsbc-new.js' }
	];

	/*
	 * JavaScript loader + callback
	 */

	var loadQueue = [
		'https://shuckster.github.io/OBIS/dist/obis.js',
	];

	// Load jQuery if we're missing it
	if ( !jQueryAvailable ) {
		console.log( 'Adding jQuery to loadQueue...' );
		loadQueue.unshift( 'https://code.jquery.com/jquery-1.5.2.min.js' );
	}

	// Load everything in loadQueue until done (or error)
	var loadScripts = function _loadScripts() {

		if ( loadQueue.length ) {

			obis.loadScript( loadQueue.shift(), function _complete( script, success ) {
				if ( !success ) {
					console.error( 'Could not load script: ' + script );
				}
				else {
					loadScripts();
				}
			});

		}
		else {

			console.log( 'Done loading scripts' );

			jQuery( function _onReady() {
				obis.parse();
			});

		}

	};

	// Detect the parser to use and add it to the loadQueue
	var parser,
		parserDetected = false,
		parserIndex = parsers.length - 1;

	for ( ; parserIndex >= 0 ; parserIndex -- ) {

		parser = parsers[ parserIndex ];

		if ( parser.rx.test( location.href ) ) {
			console.log( 'Detected ' + parser.name + ': Adding parser' );

			loadQueue.push( parser.url );
			parserDetected = true;
			break;
		}

	}

	if ( !parserDetected ) {
		console.error( 'No parser detected. Nothing to do.' );
	}
	else {
		loadScripts();
	}

})();
