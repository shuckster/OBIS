/*

OBIS: Online Banking Is Shit
==============================

#### A JavaScript framework for downloading bank statements

Copyright (c) 2017 by [Conan Theobald](mailto:me[at]conans[dot]co[dot]uk)

MIT licensed: See [LICENSE.md](LICENSE.md)

## About

Right now, OBIS is for downloading statements from HSBC UK Personal Banking
in a variety of different formats. HSBC only allows downloading of the last
3 months of transaction data. That's shit. OBIS can download the lot.

Currently supports _only_ HSBC UK, but other parsers are possible. Works best
in Google Chrome. Other browsers will work, but won't benefit from automatic
naming of your Zip download.

Saves a Zip of your statements in OFX, QIF, CSV, JSON, or all of them.

![Screenshot of HSBC UK parser](screenshot.gif)

## Instructions

Open `dist/bookmarklet.js`, copy everything, paste into a new bookmark, log in
to your HSBC UK _Previous Statements_ page, click the new bookmark.

That bookmark will load OBIS directly from the Github raw master, so if
something breaks you shouldn't need to do anything when it gets fixed. (Except
maybe clear your browser-cache).

## Developers

Open [API.md](API.md) for instructions on how to use OBIS with your own
parsers.

## Credits

Inspired by:

*   https://github.com/LTheobald/HSBCToOFX (Removed, but [author](https://github.com/LTheobald) still active.)
*   https://ar.al/3744/

Implements the fine work of these 3rd parties:

*   http://stuartk.com/jszip
*   http://eligrey.com/blog/post/saving-generated-files-on-the-client-side
*   http://www.webtoolkit.info/
*   http://jquery.com/
*   https://github.com/satazor/SparkMD5

jQuery 1.5.2 is used because that's the version HSBC UK use.

*/

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2013-01-23
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  || (navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator))
  || (function(view) {
    "use strict";
    var
          doc = view.document
          // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
        , get_URL = function() {
            return view.URL || view.webkitURL || view;
        }
        , URL = view.URL || view.webkitURL || view
        , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
        , can_use_save_link = "download" in save_link
        , click = function(node) {
            var event = doc.createEvent("MouseEvents");
            event.initMouseEvent(
                "click", true, false, view, 0, 0, 0, 0, 0
                , false, false, false, false, 0, null
            );
            return node.dispatchEvent(event); // false if event was cancelled
        }
        , webkit_req_fs = view.webkitRequestFileSystem
        , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
        , throw_outside = function (ex) {
            (view.setImmediate || view.setTimeout)(function() {
                throw ex;
            }, 0);
        }
        , force_saveable_type = "application/octet-stream"
        , fs_min_size = 0
        , deletion_queue = []
        , process_deletion_queue = function() {
            var i = deletion_queue.length;
            while (i--) {
                var file = deletion_queue[i];
                if (typeof file === "string") { // file is an object URL
                    URL.revokeObjectURL(file);
                } else { // file is a File
                    file.remove();
                }
            }
            deletion_queue.length = 0; // clear queue
        }
        , dispatch = function(filesaver, event_types, event) {
            event_types = [].concat(event_types);
            var i = event_types.length;
            while (i--) {
                var listener = filesaver["on" + event_types[i]];
                if (typeof listener === "function") {
                    try {
                        listener.call(filesaver, event || filesaver);
                    } catch (ex) {
                        throw_outside(ex);
                    }
                }
            }
        }
        , FileSaver = function(blob, name) {
            // First try a.download, then web filesystem, then object URLs
            var
                  filesaver = this
                , type = blob.type
                , blob_changed = false
                , object_url
                , target_view
                , get_object_url = function() {
                    var object_url = get_URL().createObjectURL(blob);
                    deletion_queue.push(object_url);
                    return object_url;
                }
                , dispatch_all = function() {
                    dispatch(filesaver, "writestart progress write writeend".split(" "));
                }
                // on any filesys errors revert to saving with object URLs
                , fs_error = function() {
                    // don't create more object URLs than needed
                    if (blob_changed || !object_url) {
                        object_url = get_object_url(blob);
                    }
                    if (target_view) {
                        target_view.location.href = object_url;
                    }
                    filesaver.readyState = filesaver.DONE;
                    dispatch_all();
                }
                , abortable = function(func) {
                    return function() {
                        if (filesaver.readyState !== filesaver.DONE) {
                            return func.apply(this, arguments);
                        }
                    };
                }
                , create_if_not_found = {create: true, exclusive: false}
                , slice
            ;
            filesaver.readyState = filesaver.INIT;
            if (!name) {
                name = "download";
            }
            if (can_use_save_link) {
                object_url = get_object_url(blob);
                save_link.href = object_url;
                save_link.download = name;
                if (click(save_link)) {
                    filesaver.readyState = filesaver.DONE;
                    dispatch_all();
                    return;
                }
            }
            // Object and web filesystem URLs have a problem saving in Google Chrome when
            // viewed in a tab, so I force save with application/octet-stream
            // http://code.google.com/p/chromium/issues/detail?id=91158
            if (view.chrome && type && type !== force_saveable_type) {
                slice = blob.slice || blob.webkitSlice;
                blob = slice.call(blob, 0, blob.size, force_saveable_type);
                blob_changed = true;
            }
            // Since I can't be sure that the guessed media type will trigger a download
            // in WebKit, I append .download to the filename.
            // https://bugs.webkit.org/show_bug.cgi?id=65440
            if (webkit_req_fs && name !== "download") {
                name += ".download";
            }
            if (type === force_saveable_type || webkit_req_fs) {
                target_view = view;
            } else {
                target_view = view.open();
            }
            if (!req_fs) {
                fs_error();
                return;
            }
            fs_min_size += blob.size;
            req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
                fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
                    var save = function() {
                        dir.getFile(name, create_if_not_found, abortable(function(file) {
                            file.createWriter(abortable(function(writer) {
                                writer.onwriteend = function(event) {
                                    target_view.location.href = file.toURL();
                                    deletion_queue.push(file);
                                    filesaver.readyState = filesaver.DONE;
                                    dispatch(filesaver, "writeend", event);
                                };
                                writer.onerror = function() {
                                    var error = writer.error;
                                    if (error.code !== error.ABORT_ERR) {
                                        fs_error();
                                    }
                                };
                                "writestart progress write abort".split(" ").forEach(function(event) {
                                    writer["on" + event] = filesaver["on" + event];
                                });
                                writer.write(blob);
                                filesaver.abort = function() {
                                    writer.abort();
                                    filesaver.readyState = filesaver.DONE;
                                };
                                filesaver.readyState = filesaver.WRITING;
                            }), fs_error);
                        }), fs_error);
                    };
                    dir.getFile(name, {create: false}, abortable(function(file) {
                        // delete file if it already exists
                        file.remove();
                        save();
                    }), abortable(function(ex) {
                        if (ex.code === ex.NOT_FOUND_ERR) {
                            save();
                        } else {
                            fs_error();
                        }
                    }));
                }), fs_error);
            }), fs_error);
        }
        , FS_proto = FileSaver.prototype
        , saveAs = function(blob, name) {
            return new FileSaver(blob, name);
        }
    ;
    FS_proto.abort = function() {
        var filesaver = this;
        filesaver.readyState = filesaver.DONE;
        dispatch(filesaver, "abort");
    };
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;

    FS_proto.error =
    FS_proto.onwritestart =
    FS_proto.onprogress =
    FS_proto.onwrite =
    FS_proto.onabort =
    FS_proto.onerror =
    FS_proto.onwriteend =
        null;

    view.addEventListener("unload", process_deletion_queue, false);
    return saveAs;
}(self));

// https://github.com/satazor/SparkMD5
// 2.0.0

(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a = ff(a, b, c, d, k[0], 7, -680876936);
        d = ff(d, a, b, c, k[1], 12, -389564586);
        c = ff(c, d, a, b, k[2], 17, 606105819);
        b = ff(b, c, d, a, k[3], 22, -1044525330);
        a = ff(a, b, c, d, k[4], 7, -176418897);
        d = ff(d, a, b, c, k[5], 12, 1200080426);
        c = ff(c, d, a, b, k[6], 17, -1473231341);
        b = ff(b, c, d, a, k[7], 22, -45705983);
        a = ff(a, b, c, d, k[8], 7, 1770035416);
        d = ff(d, a, b, c, k[9], 12, -1958414417);
        c = ff(c, d, a, b, k[10], 17, -42063);
        b = ff(b, c, d, a, k[11], 22, -1990404162);
        a = ff(a, b, c, d, k[12], 7, 1804603682);
        d = ff(d, a, b, c, k[13], 12, -40341101);
        c = ff(c, d, a, b, k[14], 17, -1502002290);
        b = ff(b, c, d, a, k[15], 22, 1236535329);

        a = gg(a, b, c, d, k[1], 5, -165796510);
        d = gg(d, a, b, c, k[6], 9, -1069501632);
        c = gg(c, d, a, b, k[11], 14, 643717713);
        b = gg(b, c, d, a, k[0], 20, -373897302);
        a = gg(a, b, c, d, k[5], 5, -701558691);
        d = gg(d, a, b, c, k[10], 9, 38016083);
        c = gg(c, d, a, b, k[15], 14, -660478335);
        b = gg(b, c, d, a, k[4], 20, -405537848);
        a = gg(a, b, c, d, k[9], 5, 568446438);
        d = gg(d, a, b, c, k[14], 9, -1019803690);
        c = gg(c, d, a, b, k[3], 14, -187363961);
        b = gg(b, c, d, a, k[8], 20, 1163531501);
        a = gg(a, b, c, d, k[13], 5, -1444681467);
        d = gg(d, a, b, c, k[2], 9, -51403784);
        c = gg(c, d, a, b, k[7], 14, 1735328473);
        b = gg(b, c, d, a, k[12], 20, -1926607734);

        a = hh(a, b, c, d, k[5], 4, -378558);
        d = hh(d, a, b, c, k[8], 11, -2022574463);
        c = hh(c, d, a, b, k[11], 16, 1839030562);
        b = hh(b, c, d, a, k[14], 23, -35309556);
        a = hh(a, b, c, d, k[1], 4, -1530992060);
        d = hh(d, a, b, c, k[4], 11, 1272893353);
        c = hh(c, d, a, b, k[7], 16, -155497632);
        b = hh(b, c, d, a, k[10], 23, -1094730640);
        a = hh(a, b, c, d, k[13], 4, 681279174);
        d = hh(d, a, b, c, k[0], 11, -358537222);
        c = hh(c, d, a, b, k[3], 16, -722521979);
        b = hh(b, c, d, a, k[6], 23, 76029189);
        a = hh(a, b, c, d, k[9], 4, -640364487);
        d = hh(d, a, b, c, k[12], 11, -421815835);
        c = hh(c, d, a, b, k[15], 16, 530742520);
        b = hh(b, c, d, a, k[2], 23, -995338651);

        a = ii(a, b, c, d, k[0], 6, -198630844);
        d = ii(d, a, b, c, k[7], 10, 1126891415);
        c = ii(c, d, a, b, k[14], 15, -1416354905);
        b = ii(b, c, d, a, k[5], 21, -57434055);
        a = ii(a, b, c, d, k[12], 6, 1700485571);
        d = ii(d, a, b, c, k[3], 10, -1894986606);
        c = ii(c, d, a, b, k[10], 15, -1051523);
        b = ii(b, c, d, a, k[1], 21, -2054922799);
        a = ii(a, b, c, d, k[8], 6, 1873313359);
        d = ii(d, a, b, c, k[15], 10, -30611744);
        c = ii(c, d, a, b, k[6], 15, -1560198380);
        b = ii(b, c, d, a, k[13], 21, 1309151649);
        a = ii(a, b, c, d, k[4], 6, -145523070);
        d = ii(d, a, b, c, k[11], 10, -1120210379);
        c = ii(c, d, a, b, k[2], 15, 718787259);
        b = ii(b, c, d, a, k[9], 21, -343485551);

        x[0] = add32(a, x[0]);
        x[1] = add32(b, x[1]);
        x[2] = add32(c, x[2]);
        x[3] = add32(d, x[3]);
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));
/**

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2012 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See LICENSE.markdown.

Usage:
   zip = new JSZip();
   zip.file("hello.txt", "Hello, World!").add("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */
var JSZip = function(data, options) {
   // object containing the files :
   // {
   //   "folder/" : {...},
   //   "folder/data.txt" : {...}
   // }
   this.files = {};

   // Where we are in the hierarchy
   this.root = "";

   if (data) {
      this.load(data, options);
   }
};

JSZip.signature = {
   LOCAL_FILE_HEADER : "\x50\x4b\x03\x04",
   CENTRAL_FILE_HEADER : "\x50\x4b\x01\x02",
   CENTRAL_DIRECTORY_END : "\x50\x4b\x05\x06",
   ZIP64_CENTRAL_DIRECTORY_LOCATOR : "\x50\x4b\x06\x07",
   ZIP64_CENTRAL_DIRECTORY_END : "\x50\x4b\x06\x06",
   DATA_DESCRIPTOR : "\x50\x4b\x07\x08"
};

// Default properties for a new file
JSZip.defaults = {
   base64: false,
   binary: false,
   dir: false,
   date: null
};


JSZip.prototype = (function () {
   /**
    * A simple object representing a file in the zip file.
    * @constructor
    * @param {string} name the name of the file
    * @param {string} data the data
    * @param {Object} options the options of the file
    */
   var ZipObject = function (name, data, options) {
      this.name = name;
      this.data = data;
      this.options = options;
   };

   ZipObject.prototype = {
      /**
       * Return the content as UTF8 string.
       * @return {string} the UTF8 string.
       */
      asText : function () {
         var result = this.data;
         if (this.options.base64) {
            result = JSZipBase64.decode(result);
         }
         if (this.options.binary) {
            result = JSZip.prototype.utf8decode(result);
         }
         return result;
      },
      /**
       * Returns the binary content.
       * @return {string} the content as binary.
       */
      asBinary : function () {
         var result = this.data;
         if (this.options.base64) {
            result = JSZipBase64.decode(result);
         }
         if (!this.options.binary) {
            result = JSZip.prototype.utf8encode(result);
         }
         return result;
      },
      /**
       * Returns the content as an Uint8Array.
       * @return {Uint8Array} the content as an Uint8Array.
       */
      asUint8Array : function () {
         return JSZip.utils.string2Uint8Array(this.asBinary());
      },
      /**
       * Returns the content as an ArrayBuffer.
       * @return {ArrayBuffer} the content as an ArrayBufer.
       */
      asArrayBuffer : function () {
         return JSZip.utils.string2Uint8Array(this.asBinary()).buffer;
      }
   };

   /**
    * Transform an integer into a string in hexadecimal.
    * @private
    * @param {number} dec the number to convert.
    * @param {number} bytes the number of bytes to generate.
    * @returns {string} the result.
    */
   var decToHex = function(dec, bytes) {
      var hex = "", i;
      for(i = 0; i < bytes; i++) {
         hex += String.fromCharCode(dec&0xff);
         dec=dec>>>8;
      }
      return hex;
   };

   /**
    * Merge the objects passed as parameters into a new one.
    * @private
    * @param {...Object} var_args All objects to merge.
    * @return {Object} a new object with the data of the others.
    */
   var extend = function () {
      var result = {}, i, attr;
      for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
         for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
               result[attr] = arguments[i][attr];
            }
         }
      }
      return result;
   };

   /**
    * Transforms the (incomplete) options from the user into the complete
    * set of options to create a file.
    * @private
    * @param {Object} o the options from the user.
    * @return {Object} the complete set of options.
    */
   var prepareFileAttrs = function (o) {
      o = o || {};
      if (o.base64 === true && o.binary == null) {
         o.binary = true;
      }
      o = extend(o, JSZip.defaults);
      o.date = o.date || new Date();

      return o;
   };

  /**
   * Add a file in the current folder.
   * @private
   * @param {string} name the name of the file
   * @param {String|ArrayBuffer|Uint8Array} data the data of the file
   * @param {Object} o the options of the file
   * @return {Object} the new file.
   */
   var fileAdd = function (name, data, o) {
      // be sure sub folders exist
      var parent = parentFolder(name);
      if (parent) {
         folderAdd.call(this, parent);
      }

      o = prepareFileAttrs(o);

      if (JSZip.support.uint8array && data instanceof Uint8Array) {
         o.base64 = false;
         o.binary = true;
         data = JSZip.utils.uint8Array2String(data);
      } else if (JSZip.support.arraybuffer && data instanceof ArrayBuffer) {
         o.base64 = false;
         o.binary = true;
         var bufferView = new Uint8Array(data);
         data = JSZip.utils.uint8Array2String(bufferView);
      } else if (o.binary && !o.base64) {
         // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
         if (o.optimizedBinaryString !== true) {
            // this is a string, not in a base64 format.
            // Be sure that this is a correct "binary string"
            data = JSZip.utils.string2binary(data);
         }
         // we remove this option since it's only relevant here
         delete o.optimizedBinaryString;
      }

      return this.files[name] = new ZipObject(name, data, o);
   };


   /**
    * Find the parent folder of the path.
    * @private
    * @param {string} path the path to use
    * @return {string} the parent folder, or ""
    */
   var parentFolder = function (path) {
      if (path.slice(-1) == '/') {
         path = path.substring(0, path.length - 1);
      }
      var lastSlash = path.lastIndexOf('/');
      return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
   };

   /**
    * Add a (sub) folder in the current folder.
    * @private
    * @param {string} name the folder's name
    * @return {Object} the new folder.
    */
   var folderAdd = function (name) {
      // Check the name ends with a /
      if (name.slice(-1) != "/") {
         name += "/"; // IE doesn't like substr(-1)
      }

      // Does this folder already exist?
      if (!this.files[name]) {
         // be sure sub folders exist
         var parent = parentFolder(name);
         if (parent) {
            folderAdd.call(this, parent);
         }

         fileAdd.call(this, name, '', {dir:true});
      }
      return this.files[name];
   };

   /**
    * Generate the data found in the local header of a zip file.
    * Do not create it now, as some parts are re-used later.
    * @private
    * @param {Object} file the file to use.
    * @param {string} utfEncodedFileName the file name, utf8 encoded.
    * @param {string} compressionType the compression to use.
    * @return {Object} an object containing header and compressedData.
    */
   var prepareLocalHeaderData = function(file, utfEncodedFileName, compressionType) {
      var useUTF8 = utfEncodedFileName !== file.name,
          data    = file.asBinary(),
          o       = file.options,
          dosTime,
          dosDate;

      // date
      // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
      // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
      // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

      dosTime = o.date.getHours();
      dosTime = dosTime << 6;
      dosTime = dosTime | o.date.getMinutes();
      dosTime = dosTime << 5;
      dosTime = dosTime | o.date.getSeconds() / 2;

      dosDate = o.date.getFullYear() - 1980;
      dosDate = dosDate << 4;
      dosDate = dosDate | (o.date.getMonth() + 1);
      dosDate = dosDate << 5;
      dosDate = dosDate | o.date.getDate();

      var compression    = JSZip.compressions[compressionType];
      var compressedData = compression.compress(data);

      var header = "";

      // version needed to extract
      header += "\x0A\x00";
      // general purpose bit flag
      // set bit 11 if utf8
      header += useUTF8 ? "\x00\x08" : "\x00\x00";
      // compression method
      header += compression.magic;
      // last mod file time
      header += decToHex(dosTime, 2);
      // last mod file date
      header += decToHex(dosDate, 2);
      // crc-32
      header += decToHex(this.crc32(data), 4);
      // compressed size
      header += decToHex(compressedData.length, 4);
      // uncompressed size
      header += decToHex(data.length, 4);
      // file name length
      header += decToHex(utfEncodedFileName.length, 2);
      // extra field length
      header += "\x00\x00";

      return {
         header:header,
         compressedData:compressedData
      };
   };


   // return the actual prototype of JSZip
   return {
      /**
       * Read an existing zip and merge the data in the current JSZip object.
       * The implementation is in jszip-load.js, don't forget to include it.
       * @param {String|ArrayBuffer|Uint8Array} stream  The stream to load
       * @param {Object} options Options for loading the stream.
       *  options.base64 : is the stream in base64 ? default : false
       * @return {JSZip} the current JSZip object
       */
      load : function (stream, options) {
         throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
      },

      /**
       * Filter nested files/folders with the specified function.
       * @param {Function} search the predicate to use :
       * function (relativePath, file) {...}
       * It takes 2 arguments : the relative path and the file.
       * @return {Array} An array of matching elements.
       */
      filter : function (search) {
         var result = [], filename, relativePath, file, fileClone;
         for (filename in this.files) {
            if ( !this.files.hasOwnProperty(filename) ) { continue; }
            file = this.files[filename];
            // return a new object, don't let the user mess with our internal objects :)
            fileClone = new ZipObject(file.name, file.data, extend(file.options));
            relativePath = filename.slice(this.root.length, filename.length);
            if (filename.slice(0, this.root.length) === this.root && // the file is in the current root
                search(relativePath, fileClone)) { // and the file matches the function
               result.push(fileClone);
            }
         }
         return result;
      },

      /**
       * Add a file to the zip file, or search a file.
       * @param   {string|RegExp} name The name of the file to add (if data is defined),
       * the name of the file to find (if no data) or a regex to match files.
       * @param   {String|ArrayBuffer|Uint8Array} data  The file data, either raw or base64 encoded
       * @param   {Object} o     File options
       * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
       * a file (when searching by string) or an array of files (when searching by regex).
       */
      file : function(name, data, o) {
         if (arguments.length === 1) {
            if (name instanceof RegExp) {
               var regexp = name;
               return this.filter(function(relativePath, file) {
                  return !file.options.dir && regexp.test(relativePath);
               });
            } else { // text
               return this.filter(function (relativePath, file) {
                  return !file.options.dir && relativePath === name;
               })[0]||null;
            }
         } else { // more than one argument : we have data !
            name = this.root+name;
            fileAdd.call(this, name, data, o);
         }
         return this;
      },

      /**
       * Add a directory to the zip file, or search.
       * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
       * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
       */
      folder : function(arg) {
         if (!arg) {
            return this;
         }

         if (arg instanceof RegExp) {
            return this.filter(function(relativePath, file) {
               return file.options.dir && arg.test(relativePath);
            });
         }

         // else, name is a new folder
         var name = this.root + arg;
         var newFolder = folderAdd.call(this, name);

         // Allow chaining by returning a new object with this folder as the root
         var ret = this.clone();
         ret.root = newFolder.name;
         return ret;
      },

      /**
       * Delete a file, or a directory and all sub-files, from the zip
       * @param {string} name the name of the file to delete
       * @return {JSZip} this JSZip object
       */
      remove : function(name) {
         name = this.root + name;
         var file = this.files[name];
         if (!file) {
            // Look for any folders
            if (name.slice(-1) != "/") {
               name += "/";
            }
            file = this.files[name];
         }

         if (file) {
            if (!file.options.dir) {
               // file
               delete this.files[name];
            } else {
               // folder
               var kids = this.filter(function (relativePath, file) {
                  return file.name.slice(0, name.length) === name;
               });
               for (var i = 0; i < kids.length; i++) {
                  delete this.files[kids[i].name];
               }
            }
         }

         return this;
      },

      /**
       * Generate the complete zip file
       * @param {Object} options the options to generate the zip file :
       * - base64, (deprecated, use type instead) true to generate base64.
       * - compression, "STORE" by default.
       * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
       * @return {String|Uint8Array|ArrayBuffer|Blob} the zip file
       */
      generate : function(options) {
         options = extend(options || {}, {
            base64 : true,
            compression : "STORE",
            type : "base64"
         });
         var compression = options.compression.toUpperCase();

         // The central directory, and files data
         var directory = [], files = [], fileOffset = 0;

         if (!JSZip.compressions[compression]) {
            throw compression + " is not a valid compression method !";
         }

         for (var name in this.files) {
            if ( !this.files.hasOwnProperty(name) ) { continue; }

            var file = this.files[name];

            var utfEncodedFileName = this.utf8encode(file.name);

            var fileRecord = "",
            dirRecord = "",
            data = prepareLocalHeaderData.call(this, file, utfEncodedFileName, compression);
            fileRecord = JSZip.signature.LOCAL_FILE_HEADER + data.header + utfEncodedFileName + data.compressedData;

            dirRecord = JSZip.signature.CENTRAL_FILE_HEADER +
            // version made by (00: DOS)
            "\x14\x00" +
            // file header (common to file and central directory)
            data.header +
            // file comment length
            "\x00\x00" +
            // disk number start
            "\x00\x00" +
            // internal file attributes TODO
            "\x00\x00" +
            // external file attributes
            (this.files[name].options.dir===true?"\x10\x00\x00\x00":"\x00\x00\x00\x00")+
            // relative offset of local header
            decToHex(fileOffset, 4) +
            // file name
            utfEncodedFileName;

            fileOffset += fileRecord.length;

            files.push(fileRecord);
            directory.push(dirRecord);
         }

         var fileData = files.join("");
         var dirData = directory.join("");

         var dirEnd = "";

         // end of central dir signature
         dirEnd = JSZip.signature.CENTRAL_DIRECTORY_END +
         // number of this disk
         "\x00\x00" +
         // number of the disk with the start of the central directory
         "\x00\x00" +
         // total number of entries in the central directory on this disk
         decToHex(files.length, 2) +
         // total number of entries in the central directory
         decToHex(files.length, 2) +
         // size of the central directory   4 bytes
         decToHex(dirData.length, 4) +
         // offset of start of central directory with respect to the starting disk number
         decToHex(fileData.length, 4) +
         // .ZIP file comment length
         "\x00\x00";

         var zip = fileData + dirData + dirEnd;


         switch(options.type.toLowerCase()) {
            case "uint8array" :
               return JSZip.utils.string2Uint8Array(zip);
            case "arraybuffer" :
               return JSZip.utils.string2Uint8Array(zip).buffer;
            case "blob" :
               return JSZip.utils.string2Blob(zip);
            case "base64" :
               return (options.base64) ? JSZipBase64.encode(zip) : zip;
            default : // case "string" :
               return zip;
         }
      },

      /**
       *
       *  Javascript crc32
       *  http://www.webtoolkit.info/
       *
       */
      crc32 : function(str, crc) {

         if (str === "" || typeof str === "undefined") {
            return 0;
         }

         var table = [
            0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
            0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
            0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
            0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
            0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
            0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
            0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
            0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
            0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
            0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
            0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
            0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
            0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
            0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
            0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
            0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
            0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
            0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
            0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
            0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
            0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
            0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
            0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
            0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
            0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
            0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
            0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
            0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
            0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
            0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
            0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
            0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
            0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
            0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
            0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
            0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
            0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
            0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
            0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
            0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
            0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
            0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
            0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
            0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
            0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
            0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
            0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
            0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
            0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
            0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
            0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
            0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
            0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
            0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
            0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
            0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
            0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
            0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
            0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
            0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
            0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
            0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
            0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
            0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D
         ];

         if (typeof(crc) == "undefined") { crc = 0; }
         var x = 0;
         var y = 0;

         crc = crc ^ (-1);
         for( var i = 0, iTop = str.length; i < iTop; i++ ) {
            y = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
            x = table[y];
            crc = ( crc >>> 8 ) ^ x;
         }

         return crc ^ (-1);
      },

      // Inspired by http://my.opera.com/GreyWyvern/blog/show.dml/1725165
      clone : function() {
         var newObj = new JSZip();
         for (var i in this) {
            if (typeof this[i] !== "function") {
               newObj[i] = this[i];
            }
         }
         return newObj;
      },


      /**
       * http://www.webtoolkit.info/javascript-utf8.html
       */
      utf8encode : function (string) {
         string = string.replace(/\r\n/g,"\n");
         var utftext = "";

         for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
               utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
               utftext += String.fromCharCode((c >> 6) | 192);
               utftext += String.fromCharCode((c & 63) | 128);
            } else {
               utftext += String.fromCharCode((c >> 12) | 224);
               utftext += String.fromCharCode(((c >> 6) & 63) | 128);
               utftext += String.fromCharCode((c & 63) | 128);
            }

         }

         return utftext;
      },

      /**
       * http://www.webtoolkit.info/javascript-utf8.html
       */
      utf8decode : function (utftext) {
         var string = "";
         var i = 0;
         var c = 0, c1 = 0, c2 = 0, c3 = 0;

         while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
               string += String.fromCharCode(c);
               i++;
            } else if ((c > 191) && (c < 224)) {
               c2 = utftext.charCodeAt(i+1);
               string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
               i += 2;
            } else {
               c2 = utftext.charCodeAt(i+1);
               c3 = utftext.charCodeAt(i+2);
               string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
               i += 3;
            }

         }

         return string;
      }
   };
}());

/*
 * Compression methods
 * This object is filled in as follow :
 * name : {
 *    magic // the 2 bytes indentifying the compression method
 *    compress // function, take the uncompressed content and return it compressed.
 *    uncompress // function, take the compressed content and return it uncompressed.
 * }
 *
 * STORE is the default compression method, so it's included in this file.
 * Other methods should go to separated files : the user wants modularity.
 */
JSZip.compressions = {
   "STORE" : {
      magic : "\x00\x00",
      compress : function (content) {
         return content; // no compression
      },
      uncompress : function (content) {
         return content; // no compression
      }
   }
};

/*
 * List features that require a modern browser, and if the current browser support them.
 */
JSZip.support = {
   // contains true if JSZip can read/generate ArrayBuffer, false otherwise.
   arraybuffer : (function(){
      return typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
   })(),
   // contains true if JSZip can read/generate Uint8Array, false otherwise.
   uint8array : (function(){
      return typeof Uint8Array !== "undefined";
   })(),
   // contains true if JSZip can read/generate Blob, false otherwise.
   blob : (function(){
      // the spec started with BlobBuilder then replaced it with a construtor for Blob.
      // Result : we have browsers that :
      // * know the BlobBuilder (but with prefix)
      // * know the Blob constructor
      // * know about Blob but not about how to build them
      // About the "=== 0" test : if given the wrong type, it may be converted to a string.
      // Instead of an empty content, we will get "[object Uint8Array]" for example.
      if (typeof ArrayBuffer === "undefined") {
         return false;
      }
      var buffer = new ArrayBuffer(0);
      try {
         return new Blob([buffer], { type: "application/zip" }).size === 0;
      }
      catch(e) {}

      try {
         var builder = new (window.BlobBuilder || window.WebKitBlobBuilder ||
                            window.MozBlobBuilder || window.MSBlobBuilder)();
         builder.append(buffer);
         return builder.getBlob('application/zip').size === 0;
      }
      catch(e) {}

      return false;
   })()
};

JSZip.utils = {
   /**
    * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
    * @param {string} str the string to transform.
    * @return {String} the binary string.
    */
   string2binary : function (str) {
      var result = "";
      for (var i = 0; i < str.length; i++) {
         result += String.fromCharCode(str.charCodeAt(i) & 0xff);
      }
      return result;
   },
   /**
    * Create a Uint8Array from the string.
    * @param {string} str the string to transform.
    * @return {Uint8Array} the typed array.
    * @throws {Error} an Error if the browser doesn't support the requested feature.
    */
   string2Uint8Array : function (str) {
      if (!JSZip.support.uint8array) {
         throw new Error("Uint8Array is not supported by this browser");
      }
      var buffer = new ArrayBuffer(str.length);
      var bufferView = new Uint8Array(buffer);
      for(var i = 0; i < str.length; i++) {
         bufferView[i] = str.charCodeAt(i);
      }

      return bufferView;
   },

   /**
    * Create a string from the Uint8Array.
    * @param {Uint8Array} array the array to transform.
    * @return {string} the string.
    * @throws {Error} an Error if the browser doesn't support the requested feature.
    */
   uint8Array2String : function (array) {
      if (!JSZip.support.uint8array) {
         throw new Error("Uint8Array is not supported by this browser");
      }
      var result = "";
      for(var i = 0; i < array.length; i++) {
         result += String.fromCharCode(array[i]);
      }

      return result;
   },
   /**
    * Create a blob from the given string.
    * @param {string} str the string to transform.
    * @return {Blob} the string.
    * @throws {Error} an Error if the browser doesn't support the requested feature.
    */
   string2Blob : function (str) {
      if (!JSZip.support.blob) {
         throw new Error("Blob is not supported by this browser");
      }

      var buffer = JSZip.utils.string2Uint8Array(str).buffer;
      try {
         // Blob constructor
         return new Blob([buffer], { type: "application/zip" });
      }
      catch(e) {}

      try {
         // deprecated, browser only, old way
         var builder = new (window.BlobBuilder || window.WebKitBlobBuilder ||
                            window.MozBlobBuilder || window.MSBlobBuilder)();
         builder.append(buffer);
         return builder.getBlob('application/zip');
      }
      catch(e) {}

      // well, fuck ?!
      throw new Error("Bug : can't construct the Blob.");
   }
};

/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 *  Hacked so that it doesn't utf8 en/decode everything
 **/
var JSZipBase64 = (function() {
   // private property
   var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

   return {
      // public method for encoding
      encode : function(input, utf8) {
         var output = "";
         var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
         var i = 0;

         while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
               enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
               enc4 = 64;
            }

            output = output +
               _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
               _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

         }

         return output;
      },

      // public method for decoding
      decode : function(input, utf8) {
         var output = "";
         var chr1, chr2, chr3;
         var enc1, enc2, enc3, enc4;
         var i = 0;

         input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

         while (i < input.length) {

            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
               output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
               output = output + String.fromCharCode(chr3);
            }

         }

         return output;

      }
   };
}());

// enforcing Stuk's coding style
// vim: set shiftwidth=3 softtabstop=3:
/*
 * Port of a script by Masanao Izumo.
 *
 * Only changes : wrap all the variables in a function and add the
 * main function to JSZip (DEFLATE compression method).
 * Everything else was written by M. Izumo.
 *
 * Original code can be found here: http://www.onicos.com/staff/iz/amuse/javascript/expert/deflate.txt
 */

if(!JSZip) {
   throw "JSZip not defined";
}

/*
 * Original:
 *   http://www.onicos.com/staff/iz/amuse/javascript/expert/deflate.txt
 */

(function(){

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = zip_deflate(src);
 */

/* constant parameters */
var zip_WSIZE = 32768;      // Sliding Window size
var zip_STORED_BLOCK = 0;
var zip_STATIC_TREES = 1;
var zip_DYN_TREES    = 2;

/* for deflate */
var zip_DEFAULT_LEVEL = 6;
var zip_FULL_SEARCH = true;
var zip_INBUFSIZ = 32768;   // Input buffer size
var zip_INBUF_EXTRA = 64;   // Extra buffer
var zip_OUTBUFSIZ = 1024 * 8;
var zip_window_size = 2 * zip_WSIZE;
var zip_MIN_MATCH = 3;
var zip_MAX_MATCH = 258;
var zip_BITS = 16;
// for SMALL_MEM
var zip_LIT_BUFSIZE = 0x2000;
var zip_HASH_BITS = 13;
// for MEDIUM_MEM
// var zip_LIT_BUFSIZE = 0x4000;
// var zip_HASH_BITS = 14;
// for BIG_MEM
// var zip_LIT_BUFSIZE = 0x8000;
// var zip_HASH_BITS = 15;
if(zip_LIT_BUFSIZE > zip_INBUFSIZ)
    alert("error: zip_INBUFSIZ is too small");
if((zip_WSIZE<<1) > (1<<zip_BITS))
    alert("error: zip_WSIZE is too large");
if(zip_HASH_BITS > zip_BITS-1)
    alert("error: zip_HASH_BITS is too large");
if(zip_HASH_BITS < 8 || zip_MAX_MATCH != 258)
    alert("error: Code too clever");
var zip_DIST_BUFSIZE = zip_LIT_BUFSIZE;
var zip_HASH_SIZE = 1 << zip_HASH_BITS;
var zip_HASH_MASK = zip_HASH_SIZE - 1;
var zip_WMASK = zip_WSIZE - 1;
var zip_NIL = 0; // Tail of hash chains
var zip_TOO_FAR = 4096;
var zip_MIN_LOOKAHEAD = zip_MAX_MATCH + zip_MIN_MATCH + 1;
var zip_MAX_DIST = zip_WSIZE - zip_MIN_LOOKAHEAD;
var zip_SMALLEST = 1;
var zip_MAX_BITS = 15;
var zip_MAX_BL_BITS = 7;
var zip_LENGTH_CODES = 29;
var zip_LITERALS =256;
var zip_END_BLOCK = 256;
var zip_L_CODES = zip_LITERALS + 1 + zip_LENGTH_CODES;
var zip_D_CODES = 30;
var zip_BL_CODES = 19;
var zip_REP_3_6 = 16;
var zip_REPZ_3_10 = 17;
var zip_REPZ_11_138 = 18;
var zip_HEAP_SIZE = 2 * zip_L_CODES + 1;
var zip_H_SHIFT = parseInt((zip_HASH_BITS + zip_MIN_MATCH - 1) /
               zip_MIN_MATCH);

/* variables */
var zip_free_queue;
var zip_qhead, zip_qtail;
var zip_initflag;
var zip_outbuf = null;
var zip_outcnt, zip_outoff;
var zip_complete;
var zip_window;
var zip_d_buf;
var zip_l_buf;
var zip_prev;
var zip_bi_buf;
var zip_bi_valid;
var zip_block_start;
var zip_ins_h;
var zip_hash_head;
var zip_prev_match;
var zip_match_available;
var zip_match_length;
var zip_prev_length;
var zip_strstart;
var zip_match_start;
var zip_eofile;
var zip_lookahead;
var zip_max_chain_length;
var zip_max_lazy_match;
var zip_compr_level;
var zip_good_match;
var zip_nice_match;
var zip_dyn_ltree;
var zip_dyn_dtree;
var zip_static_ltree;
var zip_static_dtree;
var zip_bl_tree;
var zip_l_desc;
var zip_d_desc;
var zip_bl_desc;
var zip_bl_count;
var zip_heap;
var zip_heap_len;
var zip_heap_max;
var zip_depth;
var zip_length_code;
var zip_dist_code;
var zip_base_length;
var zip_base_dist;
var zip_flag_buf;
var zip_last_lit;
var zip_last_dist;
var zip_last_flags;
var zip_flags;
var zip_flag_bit;
var zip_opt_len;
var zip_static_len;
var zip_deflate_data;
var zip_deflate_pos;

/* objects (deflate) */

var zip_DeflateCT = function() {
    this.fc = 0; // frequency count or bit string
    this.dl = 0; // father node in Huffman tree or length of bit string
}

var zip_DeflateTreeDesc = function() {
    this.dyn_tree = null;   // the dynamic tree
    this.static_tree = null;    // corresponding static tree or NULL
    this.extra_bits = null; // extra bits for each code or NULL
    this.extra_base = 0;    // base index for extra_bits
    this.elems = 0;     // max number of elements in the tree
    this.max_length = 0;    // max bit length for the codes
    this.max_code = 0;      // largest code with non zero frequency
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
var zip_DeflateConfiguration = function(a, b, c, d) {
    this.good_length = a; // reduce lazy search above this match length
    this.max_lazy = b;    // do not perform lazy search above this match length
    this.nice_length = c; // quit search above this match length
    this.max_chain = d;
}

var zip_DeflateBuffer = function() {
    this.next = null;
    this.len = 0;
    this.ptr = new Array(zip_OUTBUFSIZ);
    this.off = 0;
}

/* constant tables */
var zip_extra_lbits = new Array(
    0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0);
var zip_extra_dbits = new Array(
    0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13);
var zip_extra_blbits = new Array(
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7);
var zip_bl_order = new Array(
    16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15);
var zip_configuration_table = new Array(
    new zip_DeflateConfiguration(0,    0,   0,    0),
    new zip_DeflateConfiguration(4,    4,   8,    4),
    new zip_DeflateConfiguration(4,    5,  16,    8),
    new zip_DeflateConfiguration(4,    6,  32,   32),
    new zip_DeflateConfiguration(4,    4,  16,   16),
    new zip_DeflateConfiguration(8,   16,  32,   32),
    new zip_DeflateConfiguration(8,   16, 128,  128),
    new zip_DeflateConfiguration(8,   32, 128,  256),
    new zip_DeflateConfiguration(32, 128, 258, 1024),
    new zip_DeflateConfiguration(32, 258, 258, 4096));


/* routines (deflate) */

var zip_deflate_start = function(level) {
    var i;

    if(!level)
    level = zip_DEFAULT_LEVEL;
    else if(level < 1)
    level = 1;
    else if(level > 9)
    level = 9;

    zip_compr_level = level;
    zip_initflag = false;
    zip_eofile = false;
    if(zip_outbuf != null)
    return;

    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = new Array(zip_OUTBUFSIZ);
    zip_window = new Array(zip_window_size);
    zip_d_buf = new Array(zip_DIST_BUFSIZE);
    zip_l_buf = new Array(zip_INBUFSIZ + zip_INBUF_EXTRA);
    zip_prev = new Array(1 << zip_BITS);
    zip_dyn_ltree = new Array(zip_HEAP_SIZE);
    for(i = 0; i < zip_HEAP_SIZE; i++)
    zip_dyn_ltree[i] = new zip_DeflateCT();
    zip_dyn_dtree = new Array(2*zip_D_CODES+1);
    for(i = 0; i < 2*zip_D_CODES+1; i++)
    zip_dyn_dtree[i] = new zip_DeflateCT();
    zip_static_ltree = new Array(zip_L_CODES+2);
    for(i = 0; i < zip_L_CODES+2; i++)
    zip_static_ltree[i] = new zip_DeflateCT();
    zip_static_dtree = new Array(zip_D_CODES);
    for(i = 0; i < zip_D_CODES; i++)
    zip_static_dtree[i] = new zip_DeflateCT();
    zip_bl_tree = new Array(2*zip_BL_CODES+1);
    for(i = 0; i < 2*zip_BL_CODES+1; i++)
    zip_bl_tree[i] = new zip_DeflateCT();
    zip_l_desc = new zip_DeflateTreeDesc();
    zip_d_desc = new zip_DeflateTreeDesc();
    zip_bl_desc = new zip_DeflateTreeDesc();
    zip_bl_count = new Array(zip_MAX_BITS+1);
    zip_heap = new Array(2*zip_L_CODES+1);
    zip_depth = new Array(2*zip_L_CODES+1);
    zip_length_code = new Array(zip_MAX_MATCH-zip_MIN_MATCH+1);
    zip_dist_code = new Array(512);
    zip_base_length = new Array(zip_LENGTH_CODES);
    zip_base_dist = new Array(zip_D_CODES);
    zip_flag_buf = new Array(parseInt(zip_LIT_BUFSIZE / 8));
}

var zip_deflate_end = function() {
    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = null;
    zip_window = null;
    zip_d_buf = null;
    zip_l_buf = null;
    zip_prev = null;
    zip_dyn_ltree = null;
    zip_dyn_dtree = null;
    zip_static_ltree = null;
    zip_static_dtree = null;
    zip_bl_tree = null;
    zip_l_desc = null;
    zip_d_desc = null;
    zip_bl_desc = null;
    zip_bl_count = null;
    zip_heap = null;
    zip_depth = null;
    zip_length_code = null;
    zip_dist_code = null;
    zip_base_length = null;
    zip_base_dist = null;
    zip_flag_buf = null;
}

var zip_reuse_queue = function(p) {
    p.next = zip_free_queue;
    zip_free_queue = p;
}

var zip_new_queue = function() {
    var p;

    if(zip_free_queue != null)
    {
    p = zip_free_queue;
    zip_free_queue = zip_free_queue.next;
    }
    else
    p = new zip_DeflateBuffer();
    p.next = null;
    p.len = p.off = 0;

    return p;
}

var zip_head1 = function(i) {
    return zip_prev[zip_WSIZE + i];
}

var zip_head2 = function(i, val) {
    return zip_prev[zip_WSIZE + i] = val;
}

/* put_byte is used for the compressed output, put_ubyte for the
 * uncompressed output. However unlzw() uses window for its
 * suffix table instead of its output buffer, so it does not use put_ubyte
 * (to be cleaned up).
 */
var zip_put_byte = function(c) {
    zip_outbuf[zip_outoff + zip_outcnt++] = c;
    if(zip_outoff + zip_outcnt == zip_OUTBUFSIZ)
    zip_qoutbuf();
}

/* Output a 16 bit value, lsb first */
var zip_put_short = function(w) {
    w &= 0xffff;
    if(zip_outoff + zip_outcnt < zip_OUTBUFSIZ - 2) {
    zip_outbuf[zip_outoff + zip_outcnt++] = (w & 0xff);
    zip_outbuf[zip_outoff + zip_outcnt++] = (w >>> 8);
    } else {
    zip_put_byte(w & 0xff);
    zip_put_byte(w >>> 8);
    }
}

/* ==========================================================================
 * Insert string s in the dictionary and set match_head to the previous head
 * of the hash chain (the most recent string with same hash key). Return
 * the previous length of the hash chain.
 * IN  assertion: all calls to to INSERT_STRING are made with consecutive
 *    input characters and the first MIN_MATCH bytes of s are valid
 *    (except for the last MIN_MATCH-1 bytes of the input file).
 */
var zip_INSERT_STRING = function() {
    zip_ins_h = ((zip_ins_h << zip_H_SHIFT)
         ^ (zip_window[zip_strstart + zip_MIN_MATCH - 1] & 0xff))
    & zip_HASH_MASK;
    zip_hash_head = zip_head1(zip_ins_h);
    zip_prev[zip_strstart & zip_WMASK] = zip_hash_head;
    zip_head2(zip_ins_h, zip_strstart);
}

/* Send a code of the given tree. c and tree must not have side effects */
var zip_SEND_CODE = function(c, tree) {
    zip_send_bits(tree[c].fc, tree[c].dl);
}

/* Mapping from a distance to a distance code. dist is the distance - 1 and
 * must not have side effects. dist_code[256] and dist_code[257] are never
 * used.
 */
var zip_D_CODE = function(dist) {
    return (dist < 256 ? zip_dist_code[dist]
        : zip_dist_code[256 + (dist>>7)]) & 0xff;
}

/* ==========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
var zip_SMALLER = function(tree, n, m) {
    return tree[n].fc < tree[m].fc ||
      (tree[n].fc == tree[m].fc && zip_depth[n] <= zip_depth[m]);
}

/* ==========================================================================
 * read string data
 */
var zip_read_buff = function(buff, offset, n) {
    var i;
    for(i = 0; i < n && zip_deflate_pos < zip_deflate_data.length; i++)
    buff[offset + i] =
        zip_deflate_data.charCodeAt(zip_deflate_pos++) & 0xff;
    return i;
}

/* ==========================================================================
 * Initialize the "longest match" routines for a new file
 */
var zip_lm_init = function() {
    var j;

    /* Initialize the hash table. */
    for(j = 0; j < zip_HASH_SIZE; j++)
//  zip_head2(j, zip_NIL);
    zip_prev[zip_WSIZE + j] = 0;
    /* prev will be initialized on the fly */

    /* Set the default configuration parameters:
     */
    zip_max_lazy_match = zip_configuration_table[zip_compr_level].max_lazy;
    zip_good_match     = zip_configuration_table[zip_compr_level].good_length;
    if(!zip_FULL_SEARCH)
    zip_nice_match = zip_configuration_table[zip_compr_level].nice_length;
    zip_max_chain_length = zip_configuration_table[zip_compr_level].max_chain;

    zip_strstart = 0;
    zip_block_start = 0;

    zip_lookahead = zip_read_buff(zip_window, 0, 2 * zip_WSIZE);
    if(zip_lookahead <= 0) {
    zip_eofile = true;
    zip_lookahead = 0;
    return;
    }
    zip_eofile = false;
    /* Make sure that we always have enough lookahead. This is important
     * if input comes from a device such as a tty.
     */
    while(zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
    zip_fill_window();

    /* If lookahead < MIN_MATCH, ins_h is garbage, but this is
     * not important since only literal bytes will be emitted.
     */
    zip_ins_h = 0;
    for(j = 0; j < zip_MIN_MATCH - 1; j++) {
//      UPDATE_HASH(ins_h, window[j]);
    zip_ins_h = ((zip_ins_h << zip_H_SHIFT) ^ (zip_window[j] & 0xff)) & zip_HASH_MASK;
    }
}

/* ==========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 */
var zip_longest_match = function(cur_match) {
    var chain_length = zip_max_chain_length; // max hash chain length
    var scanp = zip_strstart; // current string
    var matchp;     // matched string
    var len;        // length of current match
    var best_len = zip_prev_length; // best match length so far

    /* Stop when cur_match becomes <= limit. To simplify the code,
     * we prevent matches with the string of window index 0.
     */
    var limit = (zip_strstart > zip_MAX_DIST ? zip_strstart - zip_MAX_DIST : zip_NIL);

    var strendp = zip_strstart + zip_MAX_MATCH;
    var scan_end1 = zip_window[scanp + best_len - 1];
    var scan_end  = zip_window[scanp + best_len];

    /* Do not waste too much time if we already have a good match: */
    if(zip_prev_length >= zip_good_match)
    chain_length >>= 2;

//  Assert(encoder->strstart <= window_size-MIN_LOOKAHEAD, "insufficient lookahead");

    do {
//    Assert(cur_match < encoder->strstart, "no future");
    matchp = cur_match;

    /* Skip to next match if the match length cannot increase
        * or if the match length is less than 2:
    */
    if(zip_window[matchp + best_len]    != scan_end  ||
       zip_window[matchp + best_len - 1]    != scan_end1 ||
       zip_window[matchp]           != zip_window[scanp] ||
       zip_window[++matchp]         != zip_window[scanp + 1]) {
        continue;
    }

    /* The check at best_len-1 can be removed because it will be made
         * again later. (This heuristic is not always a win.)
         * It is not necessary to compare scan[2] and match[2] since they
         * are always equal when the other bytes match, given that
         * the hash keys are equal and that HASH_BITS >= 8.
         */
    scanp += 2;
    matchp++;

    /* We check for insufficient lookahead only every 8th comparison;
         * the 256th check will be made at strstart+258.
         */
    do {
    } while(zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        zip_window[++scanp] == zip_window[++matchp] &&
        scanp < strendp);

      len = zip_MAX_MATCH - (strendp - scanp);
      scanp = strendp - zip_MAX_MATCH;

      if(len > best_len) {
      zip_match_start = cur_match;
      best_len = len;
      if(zip_FULL_SEARCH) {
          if(len >= zip_MAX_MATCH) break;
      } else {
          if(len >= zip_nice_match) break;
      }

      scan_end1  = zip_window[scanp + best_len-1];
      scan_end   = zip_window[scanp + best_len];
      }
    } while((cur_match = zip_prev[cur_match & zip_WMASK]) > limit
        && --chain_length != 0);

    return best_len;
}

/* ==========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead, and sets eofile if end of input file.
 * IN assertion: lookahead < MIN_LOOKAHEAD && strstart + lookahead > 0
 * OUT assertions: at least one byte has been read, or eofile is set;
 *    file reads are performed for at least two bytes (required for the
 *    translate_eol option).
 */
var zip_fill_window = function() {
    var n, m;

    // Amount of free space at the end of the window.
    var more = zip_window_size - zip_lookahead - zip_strstart;

    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if(more == -1) {
    /* Very unlikely, but possible on 16 bit machine if strstart == 0
         * and lookahead == 1 (input done one byte at time)
         */
    more--;
    } else if(zip_strstart >= zip_WSIZE + zip_MAX_DIST) {
    /* By the IN assertion, the window is not empty so we can't confuse
         * more == 0 with more == 64K on a 16 bit machine.
         */
//  Assert(window_size == (ulg)2*WSIZE, "no sliding with BIG_MEM");

//  System.arraycopy(window, WSIZE, window, 0, WSIZE);
    for(n = 0; n < zip_WSIZE; n++)
        zip_window[n] = zip_window[n + zip_WSIZE];

    zip_match_start -= zip_WSIZE;
    zip_strstart    -= zip_WSIZE; /* we now have strstart >= MAX_DIST: */
    zip_block_start -= zip_WSIZE;

    for(n = 0; n < zip_HASH_SIZE; n++) {
        m = zip_head1(n);
        zip_head2(n, m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL);
    }
    for(n = 0; n < zip_WSIZE; n++) {
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
        m = zip_prev[n];
        zip_prev[n] = (m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL);
    }
    more += zip_WSIZE;
    }
    // At this point, more >= 2
    if(!zip_eofile) {
    n = zip_read_buff(zip_window, zip_strstart + zip_lookahead, more);
    if(n <= 0)
        zip_eofile = true;
    else
        zip_lookahead += n;
    }
}

/* ==========================================================================
 * Processes a new input file and return its compressed length. This
 * function does not perform lazy evaluationof matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
var zip_deflate_fast = function() {
    while(zip_lookahead != 0 && zip_qhead == null) {
    var flush; // set if current block must be flushed

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    zip_INSERT_STRING();

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if(zip_hash_head != zip_NIL &&
       zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        zip_match_length = zip_longest_match(zip_hash_head);
        /* longest_match() sets match_start */
        if(zip_match_length > zip_lookahead)
        zip_match_length = zip_lookahead;
    }
    if(zip_match_length >= zip_MIN_MATCH) {
//      check_match(strstart, match_start, match_length);

        flush = zip_ct_tally(zip_strstart - zip_match_start,
                 zip_match_length - zip_MIN_MATCH);
        zip_lookahead -= zip_match_length;

        /* Insert new strings in the hash table only if the match length
         * is not too large. This saves time but degrades compression.
         */
        if(zip_match_length <= zip_max_lazy_match) {
        zip_match_length--; // string at strstart already in hash table
        do {
            zip_strstart++;
            zip_INSERT_STRING();
            /* strstart never exceeds WSIZE-MAX_MATCH, so there are
             * always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
             * these bytes are garbage, but it does not matter since
             * the next lookahead bytes will be emitted as literals.
             */
        } while(--zip_match_length != 0);
        zip_strstart++;
        } else {
        zip_strstart += zip_match_length;
        zip_match_length = 0;
        zip_ins_h = zip_window[zip_strstart] & 0xff;
//      UPDATE_HASH(ins_h, window[strstart + 1]);
        zip_ins_h = ((zip_ins_h<<zip_H_SHIFT) ^ (zip_window[zip_strstart + 1] & 0xff)) & zip_HASH_MASK;

//#if MIN_MATCH != 3
//      Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif

        }
    } else {
        /* No match, output a literal byte */
        flush = zip_ct_tally(0, zip_window[zip_strstart] & 0xff);
        zip_lookahead--;
        zip_strstart++;
    }
    if(flush) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
    }

    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    while(zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
        zip_fill_window();
    }
}

var zip_deflate_better = function() {
    /* Process the input block. */
    while(zip_lookahead != 0 && zip_qhead == null) {
    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    zip_INSERT_STRING();

    /* Find the longest match, discarding those <= prev_length.
     */
    zip_prev_length = zip_match_length;
    zip_prev_match = zip_match_start;
    zip_match_length = zip_MIN_MATCH - 1;

    if(zip_hash_head != zip_NIL &&
       zip_prev_length < zip_max_lazy_match &&
       zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        zip_match_length = zip_longest_match(zip_hash_head);
        /* longest_match() sets match_start */
        if(zip_match_length > zip_lookahead)
        zip_match_length = zip_lookahead;

        /* Ignore a length 3 match if it is too distant: */
        if(zip_match_length == zip_MIN_MATCH &&
           zip_strstart - zip_match_start > zip_TOO_FAR) {
        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        zip_match_length--;
        }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if(zip_prev_length >= zip_MIN_MATCH &&
       zip_match_length <= zip_prev_length) {
        var flush; // set if current block must be flushed

//      check_match(strstart - 1, prev_match, prev_length);
        flush = zip_ct_tally(zip_strstart - 1 - zip_prev_match,
                 zip_prev_length - zip_MIN_MATCH);

        /* Insert in hash table all strings up to the end of the match.
         * strstart-1 and strstart are already inserted.
         */
        zip_lookahead -= zip_prev_length - 1;
        zip_prev_length -= 2;
        do {
        zip_strstart++;
        zip_INSERT_STRING();
        /* strstart never exceeds WSIZE-MAX_MATCH, so there are
         * always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
         * these bytes are garbage, but it does not matter since the
         * next lookahead bytes will always be emitted as literals.
         */
        } while(--zip_prev_length != 0);
        zip_match_available = 0;
        zip_match_length = zip_MIN_MATCH - 1;
        zip_strstart++;
        if(flush) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
        }
    } else if(zip_match_available != 0) {
        /* If there was no match at the previous position, output a
         * single literal. If there was a match but the current match
         * is longer, truncate the previous match to a single literal.
         */
        if(zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff)) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
        }
        zip_strstart++;
        zip_lookahead--;
    } else {
        /* There is no previous match to compare with, wait for
         * the next step to decide.
         */
        zip_match_available = 1;
        zip_strstart++;
        zip_lookahead--;
    }

    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    while(zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
        zip_fill_window();
    }
}

var zip_init_deflate = function() {
    if(zip_eofile)
    return;
    zip_bi_buf = 0;
    zip_bi_valid = 0;
    zip_ct_init();
    zip_lm_init();

    zip_qhead = null;
    zip_outcnt = 0;
    zip_outoff = 0;

    if(zip_compr_level <= 3)
    {
    zip_prev_length = zip_MIN_MATCH - 1;
    zip_match_length = 0;
    }
    else
    {
    zip_match_length = zip_MIN_MATCH - 1;
    zip_match_available = 0;
    }

    zip_complete = false;
}

/* ==========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
var zip_deflate_internal = function(buff, off, buff_size) {
    var n;

    if(!zip_initflag)
    {
    zip_init_deflate();
    zip_initflag = true;
    if(zip_lookahead == 0) { // empty
        zip_complete = true;
        return 0;
    }
    }

    if((n = zip_qcopy(buff, off, buff_size)) == buff_size)
    return buff_size;

    if(zip_complete)
    return n;

    if(zip_compr_level <= 3) // optimized for speed
    zip_deflate_fast();
    else
    zip_deflate_better();
    if(zip_lookahead == 0) {
    if(zip_match_available != 0)
        zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff);
    zip_flush_block(1);
    zip_complete = true;
    }
    return n + zip_qcopy(buff, n + off, buff_size - n);
}

var zip_qcopy = function(buff, off, buff_size) {
    var n, i, j;

    n = 0;
    while(zip_qhead != null && n < buff_size)
    {
    i = buff_size - n;
    if(i > zip_qhead.len)
        i = zip_qhead.len;
//      System.arraycopy(qhead.ptr, qhead.off, buff, off + n, i);
    for(j = 0; j < i; j++)
        buff[off + n + j] = zip_qhead.ptr[zip_qhead.off + j];

    zip_qhead.off += i;
    zip_qhead.len -= i;
    n += i;
    if(zip_qhead.len == 0) {
        var p;
        p = zip_qhead;
        zip_qhead = zip_qhead.next;
        zip_reuse_queue(p);
    }
    }

    if(n == buff_size)
    return n;

    if(zip_outoff < zip_outcnt) {
    i = buff_size - n;
    if(i > zip_outcnt - zip_outoff)
        i = zip_outcnt - zip_outoff;
    // System.arraycopy(outbuf, outoff, buff, off + n, i);
    for(j = 0; j < i; j++)
        buff[off + n + j] = zip_outbuf[zip_outoff + j];
    zip_outoff += i;
    n += i;
    if(zip_outcnt == zip_outoff)
        zip_outcnt = zip_outoff = 0;
    }
    return n;
}

/* ==========================================================================
 * Allocate the match buffer, initialize the various tables and save the
 * location of the internal file attribute (ascii/binary) and method
 * (DEFLATE/STORE).
 */
var zip_ct_init = function() {
    var n;  // iterates over tree elements
    var bits;   // bit counter
    var length; // length value
    var code;   // code value
    var dist;   // distance index

    if(zip_static_dtree[0].dl != 0) return; // ct_init already called

    zip_l_desc.dyn_tree     = zip_dyn_ltree;
    zip_l_desc.static_tree  = zip_static_ltree;
    zip_l_desc.extra_bits   = zip_extra_lbits;
    zip_l_desc.extra_base   = zip_LITERALS + 1;
    zip_l_desc.elems        = zip_L_CODES;
    zip_l_desc.max_length   = zip_MAX_BITS;
    zip_l_desc.max_code     = 0;

    zip_d_desc.dyn_tree     = zip_dyn_dtree;
    zip_d_desc.static_tree  = zip_static_dtree;
    zip_d_desc.extra_bits   = zip_extra_dbits;
    zip_d_desc.extra_base   = 0;
    zip_d_desc.elems        = zip_D_CODES;
    zip_d_desc.max_length   = zip_MAX_BITS;
    zip_d_desc.max_code     = 0;

    zip_bl_desc.dyn_tree    = zip_bl_tree;
    zip_bl_desc.static_tree = null;
    zip_bl_desc.extra_bits  = zip_extra_blbits;
    zip_bl_desc.extra_base  = 0;
    zip_bl_desc.elems       = zip_BL_CODES;
    zip_bl_desc.max_length  = zip_MAX_BL_BITS;
    zip_bl_desc.max_code    = 0;

    // Initialize the mapping length (0..255) -> length code (0..28)
    length = 0;
    for(code = 0; code < zip_LENGTH_CODES-1; code++) {
    zip_base_length[code] = length;
    for(n = 0; n < (1<<zip_extra_lbits[code]); n++)
        zip_length_code[length++] = code;
    }
    // Assert (length == 256, "ct_init: length != 256");

    /* Note that the length 255 (match length 258) can be represented
     * in two different ways: code 284 + 5 bits or code 285, so we
     * overwrite length_code[255] to use the best encoding:
     */
    zip_length_code[length-1] = code;

    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
    dist = 0;
    for(code = 0 ; code < 16; code++) {
    zip_base_dist[code] = dist;
    for(n = 0; n < (1<<zip_extra_dbits[code]); n++) {
        zip_dist_code[dist++] = code;
    }
    }
    // Assert (dist == 256, "ct_init: dist != 256");
    dist >>= 7; // from now on, all distances are divided by 128
    for( ; code < zip_D_CODES; code++) {
    zip_base_dist[code] = dist << 7;
    for(n = 0; n < (1<<(zip_extra_dbits[code]-7)); n++)
        zip_dist_code[256 + dist++] = code;
    }
    // Assert (dist == 256, "ct_init: 256+dist != 512");

    // Construct the codes of the static literal tree
    for(bits = 0; bits <= zip_MAX_BITS; bits++)
    zip_bl_count[bits] = 0;
    n = 0;
    while(n <= 143) { zip_static_ltree[n++].dl = 8; zip_bl_count[8]++; }
    while(n <= 255) { zip_static_ltree[n++].dl = 9; zip_bl_count[9]++; }
    while(n <= 279) { zip_static_ltree[n++].dl = 7; zip_bl_count[7]++; }
    while(n <= 287) { zip_static_ltree[n++].dl = 8; zip_bl_count[8]++; }
    /* Codes 286 and 287 do not exist, but we must include them in the
     * tree construction to get a canonical Huffman tree (longest code
     * all ones)
     */
    zip_gen_codes(zip_static_ltree, zip_L_CODES + 1);

    /* The static distance tree is trivial: */
    for(n = 0; n < zip_D_CODES; n++) {
    zip_static_dtree[n].dl = 5;
    zip_static_dtree[n].fc = zip_bi_reverse(n, 5);
    }

    // Initialize the first block of the first file:
    zip_init_block();
}

/* ==========================================================================
 * Initialize a new block.
 */
var zip_init_block = function() {
    var n; // iterates over tree elements

    // Initialize the trees.
    for(n = 0; n < zip_L_CODES;  n++) zip_dyn_ltree[n].fc = 0;
    for(n = 0; n < zip_D_CODES;  n++) zip_dyn_dtree[n].fc = 0;
    for(n = 0; n < zip_BL_CODES; n++) zip_bl_tree[n].fc = 0;

    zip_dyn_ltree[zip_END_BLOCK].fc = 1;
    zip_opt_len = zip_static_len = 0;
    zip_last_lit = zip_last_dist = zip_last_flags = 0;
    zip_flags = 0;
    zip_flag_bit = 1;
}

/* ==========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
var zip_pqdownheap = function(
    tree,   // the tree to restore
    k) {    // node to move down
    var v = zip_heap[k];
    var j = k << 1; // left son of k

    while(j <= zip_heap_len) {
    // Set j to the smallest of the two sons:
    if(j < zip_heap_len &&
       zip_SMALLER(tree, zip_heap[j + 1], zip_heap[j]))
        j++;

    // Exit if v is smaller than both sons
    if(zip_SMALLER(tree, v, zip_heap[j]))
        break;

    // Exchange v with the smallest son
    zip_heap[k] = zip_heap[j];
    k = j;

    // And continue down the tree, setting j to the left son of k
    j <<= 1;
    }
    zip_heap[k] = v;
}

/* ==========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
var zip_gen_bitlen = function(desc) { // the tree descriptor
    var tree        = desc.dyn_tree;
    var extra       = desc.extra_bits;
    var base        = desc.extra_base;
    var max_code    = desc.max_code;
    var max_length  = desc.max_length;
    var stree       = desc.static_tree;
    var h;      // heap index
    var n, m;       // iterate over the tree elements
    var bits;       // bit length
    var xbits;      // extra bits
    var f;      // frequency
    var overflow = 0;   // number of elements with bit length too large

    for(bits = 0; bits <= zip_MAX_BITS; bits++)
    zip_bl_count[bits] = 0;

    /* In a first pass, compute the optimal bit lengths (which may
     * overflow in the case of the bit length tree).
     */
    tree[zip_heap[zip_heap_max]].dl = 0; // root of the heap

    for(h = zip_heap_max + 1; h < zip_HEAP_SIZE; h++) {
    n = zip_heap[h];
    bits = tree[tree[n].dl].dl + 1;
    if(bits > max_length) {
        bits = max_length;
        overflow++;
    }
    tree[n].dl = bits;
    // We overwrite tree[n].dl which is no longer needed

    if(n > max_code)
        continue; // not a leaf node

    zip_bl_count[bits]++;
    xbits = 0;
    if(n >= base)
        xbits = extra[n - base];
    f = tree[n].fc;
    zip_opt_len += f * (bits + xbits);
    if(stree != null)
        zip_static_len += f * (stree[n].dl + xbits);
    }
    if(overflow == 0)
    return;

    // This happens for example on obj2 and pic of the Calgary corpus

    // Find the first bit length which could increase:
    do {
    bits = max_length - 1;
    while(zip_bl_count[bits] == 0)
        bits--;
    zip_bl_count[bits]--;       // move one leaf down the tree
    zip_bl_count[bits + 1] += 2;    // move one overflow item as its brother
    zip_bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
    } while(overflow > 0);

    /* Now recompute all bit lengths, scanning in increasing frequency.
     * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
     * lengths instead of fixing only the wrong ones. This idea is taken
     * from 'ar' written by Haruhiko Okumura.)
     */
    for(bits = max_length; bits != 0; bits--) {
    n = zip_bl_count[bits];
    while(n != 0) {
        m = zip_heap[--h];
        if(m > max_code)
        continue;
        if(tree[m].dl != bits) {
        zip_opt_len += (bits - tree[m].dl) * tree[m].fc;
        tree[m].fc = bits;
        }
        n--;
    }
    }
}

  /* ==========================================================================
   * Generate the codes for a given tree and bit counts (which need not be
   * optimal).
   * IN assertion: the array bl_count contains the bit length statistics for
   * the given tree and the field len is set for all tree elements.
   * OUT assertion: the field code is set for all tree elements of non
   *     zero code length.
   */
var zip_gen_codes = function(tree,  // the tree to decorate
           max_code) {  // largest code with non zero frequency
    var next_code = new Array(zip_MAX_BITS+1); // next code value for each bit length
    var code = 0;       // running code value
    var bits;           // bit index
    var n;          // code index

    /* The distribution counts are first used to generate the code values
     * without bit reversal.
     */
    for(bits = 1; bits <= zip_MAX_BITS; bits++) {
    code = ((code + zip_bl_count[bits-1]) << 1);
    next_code[bits] = code;
    }

    /* Check that the bit counts in bl_count are consistent. The last code
     * must be all ones.
     */
//    Assert (code + encoder->bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
//      "inconsistent bit counts");
//    Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

    for(n = 0; n <= max_code; n++) {
    var len = tree[n].dl;
    if(len == 0)
        continue;
    // Now reverse the bits
    tree[n].fc = zip_bi_reverse(next_code[len]++, len);

//      Tracec(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
//    n, (isgraph(n) ? n : ' '), len, tree[n].fc, next_code[len]-1));
    }
}

/* ==========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
var zip_build_tree = function(desc) { // the tree descriptor
    var tree    = desc.dyn_tree;
    var stree   = desc.static_tree;
    var elems   = desc.elems;
    var n, m;       // iterate over heap elements
    var max_code = -1;  // largest code with non zero frequency
    var node = elems;   // next internal node of the tree

    /* Construct the initial heap, with least frequent element in
     * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
     * heap[0] is not used.
     */
    zip_heap_len = 0;
    zip_heap_max = zip_HEAP_SIZE;

    for(n = 0; n < elems; n++) {
    if(tree[n].fc != 0) {
        zip_heap[++zip_heap_len] = max_code = n;
        zip_depth[n] = 0;
    } else
        tree[n].dl = 0;
    }

    /* The pkzip format requires that at least one distance code exists,
     * and that at least one bit should be sent even if there is only one
     * possible code. So to avoid special checks later on we force at least
     * two codes of non zero frequency.
     */
    while(zip_heap_len < 2) {
    var xnew = zip_heap[++zip_heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[xnew].fc = 1;
    zip_depth[xnew] = 0;
    zip_opt_len--;
    if(stree != null)
        zip_static_len -= stree[xnew].dl;
    // new is 0 or 1 so it does not have extra bits
    }
    desc.max_code = max_code;

    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
     * establish sub-heaps of increasing lengths:
     */
    for(n = zip_heap_len >> 1; n >= 1; n--)
    zip_pqdownheap(tree, n);

    /* Construct the Huffman tree by repeatedly combining the least two
     * frequent nodes.
     */
    do {
    n = zip_heap[zip_SMALLEST];
    zip_heap[zip_SMALLEST] = zip_heap[zip_heap_len--];
    zip_pqdownheap(tree, zip_SMALLEST);

    m = zip_heap[zip_SMALLEST];  // m = node of next least frequency

    // keep the nodes sorted by frequency
    zip_heap[--zip_heap_max] = n;
    zip_heap[--zip_heap_max] = m;

    // Create a new node father of n and m
    tree[node].fc = tree[n].fc + tree[m].fc;
//  depth[node] = (char)(MAX(depth[n], depth[m]) + 1);
    if(zip_depth[n] > zip_depth[m] + 1)
        zip_depth[node] = zip_depth[n];
    else
        zip_depth[node] = zip_depth[m] + 1;
    tree[n].dl = tree[m].dl = node;

    // and insert the new node in the heap
    zip_heap[zip_SMALLEST] = node++;
    zip_pqdownheap(tree, zip_SMALLEST);

    } while(zip_heap_len >= 2);

    zip_heap[--zip_heap_max] = zip_heap[zip_SMALLEST];

    /* At this point, the fields freq and dad are set. We can now
     * generate the bit lengths.
     */
    zip_gen_bitlen(desc);

    // The field len is now set, we can generate the bit codes
    zip_gen_codes(tree, max_code);
}

/* ==========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree. Updates opt_len to take into account the repeat
 * counts. (The contribution of the bit length codes will be added later
 * during the construction of bl_tree.)
 */
var zip_scan_tree = function(tree,// the tree to be scanned
               max_code) {  // and its largest code of non zero frequency
    var n;          // iterates over all tree elements
    var prevlen = -1;       // last emitted length
    var curlen;         // length of current code
    var nextlen = tree[0].dl;   // length of next code
    var count = 0;      // repeat count of the current code
    var max_count = 7;      // max repeat count
    var min_count = 4;      // min repeat count

    if(nextlen == 0) {
    max_count = 138;
    min_count = 3;
    }
    tree[max_code + 1].dl = 0xffff; // guard

    for(n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[n + 1].dl;
    if(++count < max_count && curlen == nextlen)
        continue;
    else if(count < min_count)
        zip_bl_tree[curlen].fc += count;
    else if(curlen != 0) {
        if(curlen != prevlen)
        zip_bl_tree[curlen].fc++;
        zip_bl_tree[zip_REP_3_6].fc++;
    } else if(count <= 10)
        zip_bl_tree[zip_REPZ_3_10].fc++;
    else
        zip_bl_tree[zip_REPZ_11_138].fc++;
    count = 0; prevlen = curlen;
    if(nextlen == 0) {
        max_count = 138;
        min_count = 3;
    } else if(curlen == nextlen) {
        max_count = 6;
        min_count = 3;
    } else {
        max_count = 7;
        min_count = 4;
    }
    }
}

  /* ==========================================================================
   * Send a literal or distance tree in compressed form, using the codes in
   * bl_tree.
   */
var zip_send_tree = function(tree, // the tree to be scanned
           max_code) { // and its largest code of non zero frequency
    var n;          // iterates over all tree elements
    var prevlen = -1;       // last emitted length
    var curlen;         // length of current code
    var nextlen = tree[0].dl;   // length of next code
    var count = 0;      // repeat count of the current code
    var max_count = 7;      // max repeat count
    var min_count = 4;      // min repeat count

    /* tree[max_code+1].dl = -1; */  /* guard already set */
    if(nextlen == 0) {
      max_count = 138;
      min_count = 3;
    }

    for(n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[n+1].dl;
    if(++count < max_count && curlen == nextlen) {
        continue;
    } else if(count < min_count) {
        do { zip_SEND_CODE(curlen, zip_bl_tree); } while(--count != 0);
    } else if(curlen != 0) {
        if(curlen != prevlen) {
        zip_SEND_CODE(curlen, zip_bl_tree);
        count--;
        }
        // Assert(count >= 3 && count <= 6, " 3_6?");
        zip_SEND_CODE(zip_REP_3_6, zip_bl_tree);
        zip_send_bits(count - 3, 2);
    } else if(count <= 10) {
        zip_SEND_CODE(zip_REPZ_3_10, zip_bl_tree);
        zip_send_bits(count-3, 3);
    } else {
        zip_SEND_CODE(zip_REPZ_11_138, zip_bl_tree);
        zip_send_bits(count-11, 7);
    }
    count = 0;
    prevlen = curlen;
    if(nextlen == 0) {
        max_count = 138;
        min_count = 3;
    } else if(curlen == nextlen) {
        max_count = 6;
        min_count = 3;
    } else {
        max_count = 7;
        min_count = 4;
    }
    }
}

/* ==========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
var zip_build_bl_tree = function() {
    var max_blindex;  // index of last bit length code of non zero freq

    // Determine the bit length frequencies for literal and distance trees
    zip_scan_tree(zip_dyn_ltree, zip_l_desc.max_code);
    zip_scan_tree(zip_dyn_dtree, zip_d_desc.max_code);

    // Build the bit length tree:
    zip_build_tree(zip_bl_desc);
    /* opt_len now includes the length of the tree representations, except
     * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
     */

    /* Determine the number of bit length codes to send. The pkzip format
     * requires that at least 4 bit length codes be sent. (appnote.txt says
     * 3 but the actual value used is 4.)
     */
    for(max_blindex = zip_BL_CODES-1; max_blindex >= 3; max_blindex--) {
    if(zip_bl_tree[zip_bl_order[max_blindex]].dl != 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */
    zip_opt_len += 3*(max_blindex+1) + 5+5+4;
//    Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
//      encoder->opt_len, encoder->static_len));

    return max_blindex;
}

/* ==========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
var zip_send_all_trees = function(lcodes, dcodes, blcodes) { // number of codes for each tree
    var rank; // index in bl_order

//    Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
//    Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
//      "too many codes");
//    Tracev((stderr, "\nbl counts: "));
    zip_send_bits(lcodes-257, 5); // not +255 as stated in appnote.txt
    zip_send_bits(dcodes-1,   5);
    zip_send_bits(blcodes-4,  4); // not -3 as stated in appnote.txt
    for(rank = 0; rank < blcodes; rank++) {
//      Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    zip_send_bits(zip_bl_tree[zip_bl_order[rank]].dl, 3);
    }

    // send the literal tree
    zip_send_tree(zip_dyn_ltree,lcodes-1);

    // send the distance tree
    zip_send_tree(zip_dyn_dtree,dcodes-1);
}

/* ==========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
var zip_flush_block = function(eof) { // true if this is the last block for a file
    var opt_lenb, static_lenb; // opt_len and static_len in bytes
    var max_blindex;    // index of last bit length code of non zero freq
    var stored_len; // length of input block

    stored_len = zip_strstart - zip_block_start;
    zip_flag_buf[zip_last_flags] = zip_flags; // Save the flags for the last 8 items

    // Construct the literal and distance trees
    zip_build_tree(zip_l_desc);
//    Tracev((stderr, "\nlit data: dyn %ld, stat %ld",
//      encoder->opt_len, encoder->static_len));

    zip_build_tree(zip_d_desc);
//    Tracev((stderr, "\ndist data: dyn %ld, stat %ld",
//      encoder->opt_len, encoder->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = zip_build_bl_tree();

    // Determine the best encoding. Compute first the block length in bytes
    opt_lenb    = (zip_opt_len   +3+7)>>3;
    static_lenb = (zip_static_len+3+7)>>3;

//    Trace((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u dist %u ",
//     opt_lenb, encoder->opt_len,
//     static_lenb, encoder->static_len, stored_len,
//     encoder->last_lit, encoder->last_dist));

    if(static_lenb <= opt_lenb)
    opt_lenb = static_lenb;
    if(stored_len + 4 <= opt_lenb // 4: two words for the lengths
       && zip_block_start >= 0) {
    var i;

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    zip_send_bits((zip_STORED_BLOCK<<1)+eof, 3);  /* send block type */
    zip_bi_windup();         /* align on byte boundary */
    zip_put_short(stored_len);
    zip_put_short(~stored_len);

      // copy block
/*
      p = &window[block_start];
      for(i = 0; i < stored_len; i++)
    put_byte(p[i]);
*/
    for(i = 0; i < stored_len; i++)
        zip_put_byte(zip_window[zip_block_start + i]);

    } else if(static_lenb == opt_lenb) {
    zip_send_bits((zip_STATIC_TREES<<1)+eof, 3);
    zip_compress_block(zip_static_ltree, zip_static_dtree);
    } else {
    zip_send_bits((zip_DYN_TREES<<1)+eof, 3);
    zip_send_all_trees(zip_l_desc.max_code+1,
               zip_d_desc.max_code+1,
               max_blindex+1);
    zip_compress_block(zip_dyn_ltree, zip_dyn_dtree);
    }

    zip_init_block();

    if(eof != 0)
    zip_bi_windup();
}

/* ==========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
var zip_ct_tally = function(
    dist, // distance of matched string
    lc) { // match length-MIN_MATCH or unmatched char (if dist==0)
    zip_l_buf[zip_last_lit++] = lc;
    if(dist == 0) {
    // lc is the unmatched char
    zip_dyn_ltree[lc].fc++;
    } else {
    // Here, lc is the match length - MIN_MATCH
    dist--;         // dist = match distance - 1
//      Assert((ush)dist < (ush)MAX_DIST &&
//       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
//       (ush)D_CODE(dist) < (ush)D_CODES,  "ct_tally: bad match");

    zip_dyn_ltree[zip_length_code[lc]+zip_LITERALS+1].fc++;
    zip_dyn_dtree[zip_D_CODE(dist)].fc++;

    zip_d_buf[zip_last_dist++] = dist;
    zip_flags |= zip_flag_bit;
    }
    zip_flag_bit <<= 1;

    // Output the flags if they fill a byte
    if((zip_last_lit & 7) == 0) {
    zip_flag_buf[zip_last_flags++] = zip_flags;
    zip_flags = 0;
    zip_flag_bit = 1;
    }
    // Try to guess if it is profitable to stop the current block here
    if(zip_compr_level > 2 && (zip_last_lit & 0xfff) == 0) {
    // Compute an upper bound for the compressed length
    var out_length = zip_last_lit * 8;
    var in_length = zip_strstart - zip_block_start;
    var dcode;

    for(dcode = 0; dcode < zip_D_CODES; dcode++) {
        out_length += zip_dyn_dtree[dcode].fc * (5 + zip_extra_dbits[dcode]);
    }
    out_length >>= 3;
//      Trace((stderr,"\nlast_lit %u, last_dist %u, in %ld, out ~%ld(%ld%%) ",
//       encoder->last_lit, encoder->last_dist, in_length, out_length,
//       100L - out_length*100L/in_length));
    if(zip_last_dist < parseInt(zip_last_lit/2) &&
       out_length < parseInt(in_length/2))
        return true;
    }
    return (zip_last_lit == zip_LIT_BUFSIZE-1 ||
        zip_last_dist == zip_DIST_BUFSIZE);
    /* We avoid equality with LIT_BUFSIZE because of wraparound at 64K
     * on 16 bit machines and because stored blocks are restricted to
     * 64K-1 bytes.
     */
}

  /* ==========================================================================
   * Send the block data compressed using the given Huffman trees
   */
var zip_compress_block = function(
    ltree,  // literal tree
    dtree) {    // distance tree
    var dist;       // distance of matched string
    var lc;     // match length or unmatched char (if dist == 0)
    var lx = 0;     // running index in l_buf
    var dx = 0;     // running index in d_buf
    var fx = 0;     // running index in flag_buf
    var flag = 0;   // current flags
    var code;       // the code to send
    var extra;      // number of extra bits to send

    if(zip_last_lit != 0) do {
    if((lx & 7) == 0)
        flag = zip_flag_buf[fx++];
    lc = zip_l_buf[lx++] & 0xff;
    if((flag & 1) == 0) {
        zip_SEND_CODE(lc, ltree); /* send a literal byte */
//  Tracecv(isgraph(lc), (stderr," '%c' ", lc));
    } else {
        // Here, lc is the match length - MIN_MATCH
        code = zip_length_code[lc];
        zip_SEND_CODE(code+zip_LITERALS+1, ltree); // send the length code
        extra = zip_extra_lbits[code];
        if(extra != 0) {
        lc -= zip_base_length[code];
        zip_send_bits(lc, extra); // send the extra length bits
        }
        dist = zip_d_buf[dx++];
        // Here, dist is the match distance - 1
        code = zip_D_CODE(dist);
//  Assert (code < D_CODES, "bad d_code");

        zip_SEND_CODE(code, dtree);   // send the distance code
        extra = zip_extra_dbits[code];
        if(extra != 0) {
        dist -= zip_base_dist[code];
        zip_send_bits(dist, extra);   // send the extra distance bits
        }
    } // literal or match pair ?
    flag >>= 1;
    } while(lx < zip_last_lit);

    zip_SEND_CODE(zip_END_BLOCK, ltree);
}

/* ==========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
var zip_Buf_size = 16; // bit size of bi_buf
var zip_send_bits = function(
    value,  // value to send
    length) {   // number of bits
    /* If not enough room in bi_buf, use (valid) bits from bi_buf and
     * (16 - bi_valid) bits from value, leaving (width - (16-bi_valid))
     * unused bits in value.
     */
    if(zip_bi_valid > zip_Buf_size - length) {
    zip_bi_buf |= (value << zip_bi_valid);
    zip_put_short(zip_bi_buf);
    zip_bi_buf = (value >> (zip_Buf_size - zip_bi_valid));
    zip_bi_valid += length - zip_Buf_size;
    } else {
    zip_bi_buf |= value << zip_bi_valid;
    zip_bi_valid += length;
    }
}

/* ==========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
var zip_bi_reverse = function(
    code,   // the value to invert
    len) {  // its bit length
    var res = 0;
    do {
    res |= code & 1;
    code >>= 1;
    res <<= 1;
    } while(--len > 0);
    return res >> 1;
}

/* ==========================================================================
 * Write out any remaining bits in an incomplete byte.
 */
var zip_bi_windup = function() {
    if(zip_bi_valid > 8) {
    zip_put_short(zip_bi_buf);
    } else if(zip_bi_valid > 0) {
    zip_put_byte(zip_bi_buf);
    }
    zip_bi_buf = 0;
    zip_bi_valid = 0;
}

var zip_qoutbuf = function() {
    if(zip_outcnt != 0) {
    var q, i;
    q = zip_new_queue();
    if(zip_qhead == null)
        zip_qhead = zip_qtail = q;
    else
        zip_qtail = zip_qtail.next = q;
    q.len = zip_outcnt - zip_outoff;
//      System.arraycopy(zip_outbuf, zip_outoff, q.ptr, 0, q.len);
    for(i = 0; i < q.len; i++)
        q.ptr[i] = zip_outbuf[zip_outoff + i];
    zip_outcnt = zip_outoff = 0;
    }
}

var zip_deflate = function(str, level) {
    var i, j;

    zip_deflate_data = str;
    zip_deflate_pos = 0;
    if(typeof level == "undefined")
    level = zip_DEFAULT_LEVEL;
    zip_deflate_start(level);

    var buff = new Array(1024);
    var aout = [];
    while((i = zip_deflate_internal(buff, 0, buff.length)) > 0) {
    var cbuf = new Array(i);
    for(j = 0; j < i; j++){
        cbuf[j] = String.fromCharCode(buff[j]);
    }
    aout[aout.length] = cbuf.join("");
    }
    zip_deflate_data = null; // G.C.
    return aout.join("");
}

//
// end of the script of Masanao Izumo.
//

// we add the compression method for JSZip
if(!JSZip.compressions["DEFLATE"]) {
  JSZip.compressions["DEFLATE"] = {
    magic : "\x08\x00",
    compress : zip_deflate
  }
} else {
  JSZip.compressions["DEFLATE"].compress = zip_deflate;
}

})();

// enforcing Stuk's coding style
// vim: set shiftwidth=3 softtabstop=3:

/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: utils.js: Helper methods
 */

// jshint unused:true
/* globals obis,SparkMD5,jQuery */

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

        addSpaces: function _addSpaces( str, len ) {

            if ( !str ) {
                return '';
            }

            str = '' + str;

            while ( str.length < len ) {
                str = str + ' ';
            }

            if ( str.length > len ) {
                str.length = len;
            }

            return str;
        },

        convertDecimalToCents: function _convertDecimalToCents( decimalCurrencyString ) {

            var float = parseFloat( decimalCurrencyString );
            if ( isNaN( float ) ) { float = 0; }
            var negative = 0 > float;

            var parts = Math.abs( float ).toFixed( 2 ).split( '.' );
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
            var hundreds = Math.abs( cents ) / 100;
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
                obis.utils.addZeros( date.getMonth() + 1 ) + '/' +
                obis.utils.addZeros( date.getDate() ) + '/' +
                date.getFullYear()
            );
        },

        UKDateTimeString: function _UKDateTimeString( date ) {

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
        },

        // http://stackoverflow.com/a/25214113
        domFragmentFromString: function _domFragmentFromString( str ) {
            return document.createRange().createContextualFragment( str );
        }

    }
});

/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2016 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: obis.js: The obis object
 *

 Parsers should overwrite the following methods:

    parse()
        Parser entry point

 */

// jshint unused:true
/* globals obis,JSZip,saveAs,alert */

/*

 Events:
    statements:updated
    popup:opened
    popup:closed

 Methods:
    parse()

    // Model
    addStatement( statement )
    filenameFromStatement( statement, extension )
    zipnameFromStatement( statement )
    downloadStatementsZip()

    // Views
    drawViewStatementsButton( count )
    drawDownloadZipButton()
    drawGeneratorPicker()
    toggleViewAndDownloadButtons()

    popupSelectStatement( selectBox )
    popupRefreshStatementsPicker()
    generateStatementPickerHTML()
    generateStatementHTML( statement )

    openStatementsPopup( statement )

    // Events
    statementsPopupOpened()
    statementsPopupClosed()

 */

jQuery.extend( obis, {

    windowRef: null,

    generators: [],

    elements: {
        viewStatementsButton: null,
        downloadStatementsButton: null,
        retrieveStatementsButton: null,
        allGeneratorsCheckbox: null,
        allStatementsCheckbox: null,
        generatorCheckboxes: [],
        statementCheckboxes: []
    },

    statements: [],

    /*
        statement = {

            "id": String,                  // Unique ID
            "iban": String,                // International Bank Account Number
            "bic": String,                 // Business Identifier Code
            "type": String,                // Account type (eg; "Current Account")
            "name": String,                // Account name (eg; "My Account")
            "accountNumber": String,       // Account number (eg; "123456789")
            "sortCode": String,            // Account sort-code (eg; "102030")
            "date": Date,                  // Statement date

            "entries": Array of <Entry> = {
                "id": String,              // Unique ID
                "date": Date,              // Transaction date
                "type": String,            // Transaction type
                "description": String,     // Transaction description
                "memo": String,            // Transaction memo

                "debit": Number,           // Amount debited
                "credit": Number,          // Amount credited
                "balance": Number          // Bank-calculated balance
            },

            "balances": Array of <Entry>,  // Start and end balances

            "processed": Boolean           // Statement contains "complete" data

        };
    */

    init: function _init() {

        var self = this;

        jQuery( document ).bind( 'statements:updated', function _statementsUpdated() {
            self.toggleViewAndDownloadButtons();
        });

        this.parse();

    },

    // To be overloaded by a parser
    parse: function _parse() {
        console.error( 'No parser loaded.' );
    },

    /*
     * Add statements, generate zip file
     */

    addStatement: function _addStatement( statement ) {

        var nextStatement,
            sidx = this.statements.length - 1,
            found = false;

        for ( ; sidx >= 0 ; sidx -- ) {

            nextStatement = this.statements[ sidx ];

            if ( statement.date.getTime() == nextStatement.date.getTime() ) {
                found = true;
                break;
            }

        }

        if ( !found ) {
            statement.id = obis.utils.dateTimeString( statement.date );
            this.statements.push( statement );

            jQuery( document ).trigger( 'statements:updated', [ this.statements.length ] );
        }

    },

    filenameFromStatement: function _filenameFromStatement( statement, extension ) {

        return (
            statement.type.replace( /[^a-zA-Z]/g, '_' ) + '-' +
            statement.date.getFullYear() + '-' + obis.utils.addZeros( statement.date.getMonth() + 1 ) + '-' + obis.utils.addZeros( statement.date.getDate() ) + '.' + extension
        );

    },

    zipnameFromStatement: function _zipnameFromStatement( statement ) {

        return (
            statement.type.replace( /[^a-zA-Z]/g, '_' ) + '-' +
            statement.date.getFullYear() + '.zip'
        );

    },

    downloadStatementsZip: function _downloadStatementsZip() {

        var blob, zip, zipName,
            zipContents = [ /* { folder: '', files: [ { name: '', content: '' }, ] } */ ],
            self = this;

        // See which generators we want to use
        jQuery.each( this.generators, function _forEach() {

            var zipContent = {},
                generator = this;

            if ( generator.checked ) {

                zipContent.folder = generator.folder;
                zipContent.files = [];

                // Generate statements with this generator
                jQuery.each( self.statements, function _forEach( index ) {

                    var statement = this,
                        filename = self.filenameFromStatement( statement, generator.extension ),
                        content = generator.generate( statement );

                    zipContent.files.push({
                        name: filename,
                        content: content
                    });

                    if ( 0 === index ) {
                        zipName = self.zipnameFromStatement( statement, 'zip' );
                    }

                });

                zipContents.push( zipContent );

            }

        });

        // Got some content? Generate the Zip!
        if ( zipContents.length ) {

            zip = new JSZip();

            jQuery.each( zipContents, function _forEach() {

                var folder = zip.folder( this.folder );

                jQuery.each( this.files, function _forEach() {
                    folder.file( this.name, this.content, { type: 'string' } );
                });

            });

            /*blob = new BlobBuilder();
            blob.append( zip.generate({ base64: true }) );
            saveAs( blob.getBlob( 'application/zip;charset=' + document.characterSet ), zipName );*/

            // Works in Chrome... nowhere else yet
            if ( /Chrome/.test( navigator.userAgent ) ) {
                saveAs( zip.generate({ type: 'blob', compression: 'DEFLATE' }), zipName );
            }
            else {
                alert( 'OBIS: Don\'t forget to rename the file to something like "' + zipName + '" after downloading.\n\nIf you use Google Chrome the filename will be set for you.' );
                blob = zip.generate({ type: 'base64', compression: 'DEFLATE' });

                location.href = 'data:application/zip;base64,' + blob;
            }

        }
        else {
            console.warn( 'No statements to download: Not creating Zip file' );
        }

    },

    /*
     * Generate DOM/HTML stuff
     */

    drawViewStatementsButton: function _drawViewStatementsButton( count ) {

        var elViewButton = jQuery( '<input type="button" value="View statement' + ( count ? 's' : '' ) + '" disabled="disabled" />' );

        this.elements.viewStatementsButton = elViewButton;

        elViewButton.bind( 'click', function _onClick() {
            obis.openStatementsPopup();
        });

        return elViewButton;

    },

    drawDownloadZipButton: function _drawDownloadZipButton() {

        var elDownloadButton = jQuery( '<input type="button" value="Download Zip" style="margin-left: 5px !important;" disabled="disabled" />' );

        this.elements.downloadStatementsButton = elDownloadButton;

        elDownloadButton.bind( 'click', function _onClick() {
            obis.downloadStatementsZip();
        });

        return elDownloadButton;

    },

    toggleViewAndDownloadButtons: function _toggleViewAndDownloadButtons() {

        var generators,
            generatorCount = 0,
            statementsProcessed = 0,
            statements = !!this.statements.length;

        jQuery.each( this.statements, function _forEach() {
            if ( this.processed ) {
                statementsProcessed ++;
            }
        });

        jQuery.each( this.generators, function _forEach() {
            if ( this.checked ) {
                generatorCount ++;
            }
        });

        generators = !!generatorCount;

        if ( this.elements.viewStatementsButton ) {
            this.elements.viewStatementsButton[ 0 ].disabled = ( !statements );
        }

        if ( this.elements.downloadStatementsButton ) {
            this.elements.downloadStatementsButton[ 0 ].disabled = ( !statementsProcessed || !generators || this.alreadyProcessing );
        }

    },

    drawGeneratorPicker: function _drawGeneratorPicker() {

        var el = jQuery( '<p style="color: black; padding: 10px;" />' ),
            self = this;

        jQuery.each( this.generators, function _forEach() {

            var generator = this,
                elCheckbox = jQuery( '<input id="gen_' + obis.utils.htmlEscape( generator.id ) + '" type="checkbox" checked="checked" />' ),
                elLabel = jQuery( '<label for="gen_' + obis.utils.htmlEscape( generator.id ) + '" style="margin-left: 5px;">' + obis.utils.htmlEscape( generator.description ) + '</label><br/>' );

            generator.checked = true;

            elCheckbox.bind( 'change', function _onChange() {
                generator.checked = this.checked;
                self.toggleViewAndDownloadButtons();
            });

            elCheckbox.appendTo( el );
            elLabel.appendTo( el );

            // ...
            elCheckbox.data( 'generator', generator );
            self.elements.generatorCheckboxes.push( elCheckbox );

        });

        return el;

    },

    /*
     * Popup window stuff
     */

    popupSelectStatement: function _popupSelectStatement( selectBox ) {

        var statement, html,
            el = jQuery( selectBox ),
            value = el.val(),
            self = this;

        jQuery.each( this.statements, function _forEach() {
            if ( this.id === value ) {
                statement = this;
                return false;
            }
        });

        if ( statement ) {
            html = self.generateStatementHTML( statement );
            el.next().replaceWith( html );
            this.selectedStatement = statement;
        }

    },

    popupRefreshStatementsPicker: function _popupRefreshStatementsPicker() {

        if ( obis.windowRef ) {
            var el = jQuery( obis.windowRef.document ).find( 'body > select#statement-picker' );
            el.replaceWith( obis.generateStatementPickerHTML() );
        }

    },

    generateStatementPickerHTML: function _generateStatementPickerHTML() {

        var selection = this.selectedStatement || {},
            html = '';

        this.statements.sort( function _sortMethod( a, b ) {
            var date1 = a.date.getTime(),
                date2 = b.date.getTime();

            if ( date1 > date2 ) return -1;
            if ( date1 < date2 ) return 1;
            return 0;
        });

        jQuery.each( this.statements, function _forEach() {
            html += '<option value="' + this.id + '"' + ( this === selection ? ' selected="selected"' : '' )  +'>' + obis.utils.simpleDate( this.date ) + '</option>';
        });

        return '<select id="statement-picker" onchange="opener.obis.popupSelectStatement(this);">' + html + '</select>';

    },

    generateStatementHTML: function _generateStatementHTML( statement ) {

        statement = statement || this.statements[ 0 ];

        var html =
                '<table id="statement-viewer">' +
                    '<thead>' +
                        '<tr>' +
                            '<th>Date</th>' +
                            '<th>Type</th>' +
                            '<th>Description</th>' +
                            '<th>Memo</th>' +
                            '<th>Debit</th>' +
                            '<th>Credit</th>' +
                            '<th>Balance</th>' +
                            '<th>(Calculated)</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>';

        var runningBalance = ( statement && statement.balances && statement.balances.length ) ? ( statement.balances[ 0 ].balance || 0 ) : 0;

        jQuery.each( statement.entries, function _forEach() {

            var balanceIssue = false;
            var discrepancy = 0;

            runningBalance += this.credit;
            runningBalance += this.debit;

            if ( 0 !== this.balance && ( runningBalance !== this.balance ) ) { // jshint ignore:line

                console.warn( 'Running balance discrepancy: ' +

                    'runningBalance = ', obis.utils.convertCentsToDecimal( runningBalance ),
                    ', this.balance = ', obis.utils.convertCentsToDecimal( this.balance ),
                    ', discrepancy = ', obis.utils.convertCentsToDecimal( this.balance - runningBalance )
                );

                balanceIssue = true;
                discrepancy = this.balance - runningBalance;
            }

            html +=
                '<tr id="_' + this.id + '" class="' + ( balanceIssue ? 'balance_issue' : '' ) + '">' +

                    '<td class="date">' +
                    obis.utils.htmlEscape(
                        obis.utils.simpleDate( this.date )
                    ) +
                    '</td>' +

                    '<td class="type">' +
                    obis.utils.htmlEscape(
                        this.type
                    ) +
                    '</td>' +

                    '<td class="description">' +
                    obis.utils.htmlEscape(
                        this.description
                    ) +
                    '</td>' +

                    '<td class="memo">' +
                    obis.utils.htmlEscape(
                        'memo' in this ? this.memo : ( this.memoLink ? '...' : '' )
                    ) +
                    '</td>' +

                    '<td class="debit">' +
                    obis.utils.htmlEscape(
                        obis.utils.convertCentsToDecimal( this.debit )
                    ) +
                    '</td>' +

                    '<td class="credit">' +
                    obis.utils.htmlEscape(
                        obis.utils.convertCentsToDecimal( this.credit )
                    ) +
                    '</td>' +

                    '<td class="balance' + ( this.balance < 0 ? ' negative' : '' ) + '">' +
                    obis.utils.htmlEscape(
                        obis.utils.convertCentsToDecimal( this.balance )
                    ) +
                    '</td>' +

                    '<td class="calculated' + ( runningBalance < 0 ? ' negative' : '' ) + '">' +

                    ( discrepancy ? ('(Calculation discrepancy: ' + obis.utils.convertCentsToDecimal( discrepancy ) + ')&nbsp;&nbsp;&nbsp;') : '' ) +

                    obis.utils.htmlEscape(
                        obis.utils.convertCentsToDecimal( runningBalance )
                    ) +
                    '</td>' +

                '</tr>';

        });

        html +=
                '</tbody>' +
            '</table>';

        return html;

    },

    // ...

    openStatementsPopup: function _openStatementsPopup() {

        this.windowRef = window.open( 'text/html', 'obis', 'width=1000,height=750,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1' );
        this.windowRef.document.writeln(
            '<html>' +
                '<head>'+
                    '<title>Statements</title>'+
                    '<style type="text/css">' +
                        'body * { font-size: 12px; } ' +
                        '.balance_issue .balance, .balance_issue .calculated, .negative, .processing { color: #f00; font-weight: bold; } ' +
                        '.processing { font-size: 24px; line-height: 12px; } ' +
                        'table { border-collapse: collapse; } ' +
                        'tr > * { padding: 5px; border-bottom: 1px solid #ddd; } ' +
                        'tr:hover > td { background: #ffc; } ' +
                        '.date, .debit, .credit, .balance, .calculated { text-align: right; } ' +
                    '</style>' +
                '</head>' +
                '<body onload="opener.obis.statementsPopupOpened();" onunload="opener.obis.statementsPopupClosed();">' +
                    '<input type="button" value="Close" onclick="window.close();" />' +
                    this.generateStatementPickerHTML() +
                    this.generateStatementHTML() +
                '</body>' +
            '</html>'
        );

        this.windowRef.document.close();

    },

    statementsPopupOpened: function _statementsPopupOpened() {
        jQuery( document ).trigger( 'popup:opened' );
        jQuery( document ).bind( 'statements:updated', this.popupRefreshStatementsPicker );
    },

    statementsPopupClosed: function _statementsPopupClosed() {
        delete this.selectedStatement;
        jQuery( document ).unbind( 'statements:updated', this.popupRefreshStatementsPicker );
        jQuery( document ).trigger( 'popup:closed' );
    }

});

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

/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
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
    description: 'HSBC CSV (à la Recent Transactions)',

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

        return JSON.stringify( statement, function _replacer( key, value ) {

            var float;

            if ( -1 !== [ 'debit', 'credit', 'balance' ].indexOf( key )) {

                float = parseFloat( obis.utils.convertCentsToDecimal( value ));

                if ( isNaN( float )) {
                    return 'balance' === key ? undefined : 0;
                }
                else {
                    return float;
                }
            }

            return value;
        });

    }

});

/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: ofx.js: OFX 1.0.2 generator
 *

 Based on output from the HSBC UK Personal Banking website.
    http://www.hsbc.co.uk/

 */

// jshint unused:true
/* globals obis */

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

        var ofx;
        var latestBalanceIndex = statement.balances.length - 1;

        // TODO: Move into hsbc.js somehow
        function filterTransactionType( type ) {

            switch ( type ) {
                case 'ATM': break;
                case 'TFR': type = 'XFER'; break;

                default:
                    type = 'OTHER';
            }

            return type;

        }

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
            '\t\t\t' + '<DTSERVER>' + obis.utils.ofxEscape( obis.utils.dateTimeString( new Date() ) ) + '</DTSERVER>' + '\n' +
            '\t\t\t' + '<LANGUAGE>' + obis.utils.ofxEscape( obis.LANGUAGE ) + '</LANGUAGE>' + '\n' +
            '\t\t\t' + '<INTU.BID>' + obis.utils.ofxEscape( obis.INTU_BID ) + '</INTU.BID>' + '\n' +
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
            '\t\t\t\t' + '<CURDEF>' + obis.utils.ofxEscape( obis.CURDEF ) + '</CURDEF>' + '\n' +
            '\n' +
            '\t\t\t\t' + '<BANKACCTFROM>' + '\n' +
            '\t\t\t\t\t' + '<BANKID>' + obis.utils.ofxEscape( statement.sortCode ) + '</BANKID>' + '\n' +
            '\t\t\t\t\t' + '<ACCTID>' + obis.utils.ofxEscape( statement.sortCode + statement.accountNumber ) + '</ACCTID>' + '\n' +
            '\t\t\t\t\t' + '<ACCTTYPE>CHECKING</ACCTTYPE>' + '\n' +
            '\t\t\t\t' + '</BANKACCTFROM>' + '\n' +
            '\n' +
            '\t\t\t\t' + '<BANKTRANLIST>' + '\n' +
            '\n' +
            '\t\t\t\t\t' + '<DTSTART>' + obis.utils.ofxEscape( obis.utils.dateTimeString( statement.balances[ 0 ].date ) ) + '</DTSTART>' + '\n' +
            '\t\t\t\t\t' + '<DTEND>' + obis.utils.ofxEscape( obis.utils.dateTimeString( statement.balances[ latestBalanceIndex ].date ) ) + '</DTEND>' + '\n' +
            '\n';

        jQuery.each( statement.entries, function _forEach() {

            var transactionAmount = obis.utils.convertCentsToDecimal( this.debit + this.credit );

            ofx +=
                '\t\t\t\t\t' + '<STMTTRN>' + '\n' +
                '\t\t\t\t\t\t' + '<TRNTYPE>' + obis.utils.ofxEscape( filterTransactionType( this.type ) ) + '</TRNTYPE>' + '\n' +
                '\t\t\t\t\t\t' + '<DTPOSTED>' + obis.utils.ofxEscape( obis.utils.dateTimeString( this.date ) ) + '</DTPOSTED>' + '\n' +
                '\t\t\t\t\t\t' + '<TRNAMT>' + obis.utils.ofxEscape( transactionAmount ) + '</TRNAMT>' + '\n' +
                '\t\t\t\t\t\t' + '<FITID>' + obis.utils.ofxEscape( this.id ) + '</FITID>' + '\n' +
                '\t\t\t\t\t\t' + '<NAME>' + obis.utils.ofxEscape( this.description ) + '</NAME>' + '\n' +
                ( 'memo' in this ? ( '\t\t\t\t\t\t' + '<MEMO>' + obis.utils.ofxEscape( this.memo ) + '</MEMO>' + '\n' ) : '' ) +
                '\t\t\t\t\t' + '</STMTTRN>' + '\n' +
                '\n';

        });

        var balanceCarriedForward = statement.balances[ latestBalanceIndex ].balance;

        ofx +=
            '\t\t\t\t' + '</BANKTRANLIST>' + '\n' +
            '\n' +
            '\t\t\t\t' + '<LEDGERBAL>' + '\n' +
            '\t\t\t\t\t' + '<BALAMT>' + obis.utils.ofxEscape( obis.utils.convertCentsToDecimal( balanceCarriedForward ) ) + '</BALAMT>' + '\n' +
            '\t\t\t\t\t' + '<DTASOF>' + obis.utils.ofxEscape( obis.utils.dateTimeString( statement.balances[ latestBalanceIndex ].date ) ) + '</DTASOF>' + '\n' +
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

/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2017 by Conan Theobald <me[at]conans[dot]co[dot]uk>
 * MIT licensed: See LICENSE.md
 *
 * File: qif.js: QIF generator
 *

 Based on the output from MoneyWell and the specs from:
    http://svn.gnucash.org/trac/browser/gnucash/trunk/src/import-export/qif-import/file-format.txt
    http://en.wikipedia.org/wiki/Quicken_Interchange_Format

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

    id: 'QIF',
    folder: 'qif',
    extension: 'qif',
    description: 'QIF (Quicken)',

    generate: function _generate( statement ) {

        var qif;
        var latestBalanceIndex = statement.balances.length - 1;

        qif =
            '!Account' + '\n' +
            'N' + obis.utils.qifEscape( statement.type ) + '\n' +
            'A' + obis.utils.qifEscape( statement.sortCode + '/' + statement.sortCode + statement.accountNumber ) + '\n' +
            '/' + obis.utils.qifEscape( obis.utils.USDateTimeString( statement.balances[ latestBalanceIndex ].date ) ) + '\n' +
            '$' + obis.utils.qifEscape( obis.utils.convertCentsToDecimal( statement.balances[ latestBalanceIndex ].balance ) ) + '\n' +
            'T' + 'Bank' + '\n' +
            '^' + '\n' +

            '!Type:Bank' + '\n';

        jQuery.each( statement.entries, function _forEach() {

            var transactionAmount = obis.utils.convertCentsToDecimal( this.debit + this.credit );

            qif +=
                'D' + obis.utils.qifEscape( obis.utils.USDateTimeString( this.date ) ) + '\n' +
                'N' + obis.utils.qifEscape( (( this.debit + this.credit ) < 0 ? 'WITHD' : 'DEP') ) + '\n' +
                'T' + obis.utils.qifEscape( transactionAmount ) + '\n' +
                'C' + '\n' +
                'P' + obis.utils.qifEscape( this.description ) + '\n' +
                ( 'memo' in this ? ( 'M' + obis.utils.qifEscape( this.memo ) + '\n' ) : '' ) +
                '^' + '\n';

        });

        qif +=
            '\n';

        return qif;

    }

});
