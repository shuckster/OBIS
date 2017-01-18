
/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: json.js: JSON generator
 *

 Based on JSON specification:
 	http://json.org/

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

	id: 'JSON',
	folder: 'json',
	extension: 'json',
	description: 'JSON (JavaScript Object Notation)',

	generate: function _generate( statement ) {

		return JSON.stringify( statement );

	}

});
