#!/bin/bash

#
# OBIS: Online Banking Is Shit
# A JavaScript framework for downloading bank statements
# Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
# MIT licensed: See LICENSE.md
#
# File: make.sh: dist/ folder builder
#

echo "/*" > dist/obis.js
echo "" >> dist/obis.js
cat README.md >> dist/obis.js
echo "" >> dist/obis.js
echo "*/" >> dist/obis.js
echo "" >> dist/obis.js

cat src/externals/FileSaver.js \
src/externals/spark-md5.js \
src/externals/jszip.js \
src/externals/jszip-deflate.js \
src/utils.js \
src/obis.js \
src/generators/csv.js \
src/generators/json.js \
src/generators/ofx.js \
src/generators/qif.js >> dist/obis.js

# cp src/main.js dist/main.js

mkdir dist/parsers

cp src/parsers/hsbc.js dist/parsers
