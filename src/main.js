
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: main.js: Bookmarklet loader
 */

// jshint unused:true
/* globals obis,jQuery,console */

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
		{ name: 'HSBC UK', rx: /^https?\:\/\/(www\.)?(saas\.)?hsbc\.co\.uk\//, url: 'https://dl.dropbox.com/s/0cj7lq25n3m3rev/hsbc.js?dl=1' },
		{ name: 'HSBC UK (testing)', rx: /localhost\/OBIS\/_Scratch\/OBIS-tests/, url: '/OBIS/src/parsers/hsbc.js' }
	];

	/*
	 * JavaScript loader + callback
	 */

	var loadQueue = [
		//'https://dl.dropbox.com/s/esd941mx42x8ioe/Blob.js?dl=1',
		'https://dl.dropbox.com/s/2v7rned1i3givhb/FileSaver.js?dl=1',
		'https://dl.dropbox.com/s/6fq1vm5c9gouik7/crc32.js?dl=1',
		'https://dl.dropbox.com/s/ikb36clu4q8emos/jszip.js?dl=1',
		'https://dl.dropbox.com/s/4bmqek17uw1ez90/jszip-deflate.js?dl=1',
		'https://dl.dropbox.com/s/hnp6htq4z5keqko/utils.js?dl=1',
		'https://dl.dropbox.com/s/sf2b18fozqijne3/obis.js?dl=1',
		'https://dl.dropbox.com/s/j7m72x3k78g2fwi/csv.js?dl=1',
		'https://dl.dropbox.com/s/yr03r22k6u8jugd/ofx.js?dl=1',
		'https://dl.dropbox.com/s/32dx2bmkurk2xro/qif.js?dl=1',
		'https://dl.dropbox.com/s/32dx2bmkurk2xro/json.js?dl=1'
	];

	if ( /localhost\/OBIS\/_Scratch\/OBIS-tests/.test( location.href ) ) {

		console.log('localhost testing...');

		loadQueue = [
			//'/OBIS/src/externals/Blob.js',
			'/OBIS/src/externals/FileSaver.js',
			// '/OBIS/src/externals/crc32.js',
			'/OBIS/src/externals/spark-md5.js',
			'/OBIS/src/externals/jszip.js',
			'/OBIS/src/externals/jszip-deflate.js',
			// '/OBIS/src/externals/htmlminifier.min.js',
			'/OBIS/src/utils.js',
			'/OBIS/src/obis.js',
			'/OBIS/src/generators/csv.js',
			'/OBIS/src/generators/hsbc.js',
			'/OBIS/src/generators/json.js',
			'/OBIS/src/generators/ofx.js',
			'/OBIS/src/generators/qif.js'
			// '/OBIS/src/generators/midata.js'
		];

	}

	// Load jQuery if we're missing it
	if ( !jQueryAvailable ) {
		console.log( 'Adding jQuery to loadQueue...' );
		loadQueue.unshift( 'http://code.jquery.com/jquery-1.5.2.min.js' );
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
				obis.init();
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
