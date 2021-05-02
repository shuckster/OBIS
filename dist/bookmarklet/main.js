(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/.pnpm/spark-md5@3.0.1/node_modules/spark-md5/spark-md5.js
  var require_spark_md5 = __commonJS((exports, module) => {
    (function(factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        var glob;
        try {
          glob = window;
        } catch (e) {
          glob = self;
        }
        glob.SparkMD5 = factory();
      }
    })(function(undefined2) {
      "use strict";
      var add32 = function(a, b) {
        return a + b & 4294967295;
      }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
      }
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
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
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
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
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
          var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        };
      }
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined2) {
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
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
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
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex2.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD52() {
        this.reset();
      }
      SparkMD52.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD52.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD52.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD52.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD52.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD52.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD52.hash = function(str, raw) {
        return SparkMD52.hashBinary(toUtf8(str), raw);
      };
      SparkMD52.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD52.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD52.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD52.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD52.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD52.prototype.setState.call(this, state);
      };
      SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
      SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
      SparkMD52.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD52;
    });
  });

  // node_modules/.pnpm/jmespath@0.15.0/node_modules/jmespath/jmespath.js
  var require_jmespath = __commonJS((exports) => {
    (function(exports2) {
      "use strict";
      function isArray(obj) {
        if (obj !== null) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        } else {
          return false;
        }
      }
      function isObject(obj) {
        if (obj !== null) {
          return Object.prototype.toString.call(obj) === "[object Object]";
        } else {
          return false;
        }
      }
      function strictDeepEqual(first, second) {
        if (first === second) {
          return true;
        }
        var firstType = Object.prototype.toString.call(first);
        if (firstType !== Object.prototype.toString.call(second)) {
          return false;
        }
        if (isArray(first) === true) {
          if (first.length !== second.length) {
            return false;
          }
          for (var i = 0; i < first.length; i++) {
            if (strictDeepEqual(first[i], second[i]) === false) {
              return false;
            }
          }
          return true;
        }
        if (isObject(first) === true) {
          var keysSeen = {};
          for (var key in first) {
            if (hasOwnProperty.call(first, key)) {
              if (strictDeepEqual(first[key], second[key]) === false) {
                return false;
              }
              keysSeen[key] = true;
            }
          }
          for (var key2 in second) {
            if (hasOwnProperty.call(second, key2)) {
              if (keysSeen[key2] !== true) {
                return false;
              }
            }
          }
          return true;
        }
        return false;
      }
      function isFalse(obj) {
        if (obj === "" || obj === false || obj === null) {
          return true;
        } else if (isArray(obj) && obj.length === 0) {
          return true;
        } else if (isObject(obj)) {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              return false;
            }
          }
          return true;
        } else {
          return false;
        }
      }
      function objValues(obj) {
        var keys = Object.keys(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
          values.push(obj[keys[i]]);
        }
        return values;
      }
      function merge(a, b) {
        var merged = {};
        for (var key in a) {
          merged[key] = a[key];
        }
        for (var key2 in b) {
          merged[key2] = b[key2];
        }
        return merged;
      }
      var trimLeft;
      if (typeof String.prototype.trimLeft === "function") {
        trimLeft = function(str) {
          return str.trimLeft();
        };
      } else {
        trimLeft = function(str) {
          return str.match(/^\s*(.*)/)[1];
        };
      }
      var TYPE_NUMBER = 0;
      var TYPE_ANY = 1;
      var TYPE_STRING = 2;
      var TYPE_ARRAY = 3;
      var TYPE_OBJECT = 4;
      var TYPE_BOOLEAN = 5;
      var TYPE_EXPREF = 6;
      var TYPE_NULL = 7;
      var TYPE_ARRAY_NUMBER = 8;
      var TYPE_ARRAY_STRING = 9;
      var TOK_EOF = "EOF";
      var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
      var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
      var TOK_RBRACKET = "Rbracket";
      var TOK_RPAREN = "Rparen";
      var TOK_COMMA = "Comma";
      var TOK_COLON = "Colon";
      var TOK_RBRACE = "Rbrace";
      var TOK_NUMBER = "Number";
      var TOK_CURRENT = "Current";
      var TOK_EXPREF = "Expref";
      var TOK_PIPE = "Pipe";
      var TOK_OR = "Or";
      var TOK_AND = "And";
      var TOK_EQ = "EQ";
      var TOK_GT = "GT";
      var TOK_LT = "LT";
      var TOK_GTE = "GTE";
      var TOK_LTE = "LTE";
      var TOK_NE = "NE";
      var TOK_FLATTEN = "Flatten";
      var TOK_STAR = "Star";
      var TOK_FILTER = "Filter";
      var TOK_DOT = "Dot";
      var TOK_NOT = "Not";
      var TOK_LBRACE = "Lbrace";
      var TOK_LBRACKET = "Lbracket";
      var TOK_LPAREN = "Lparen";
      var TOK_LITERAL = "Literal";
      var basicTokens = {
        ".": TOK_DOT,
        "*": TOK_STAR,
        ",": TOK_COMMA,
        ":": TOK_COLON,
        "{": TOK_LBRACE,
        "}": TOK_RBRACE,
        "]": TOK_RBRACKET,
        "(": TOK_LPAREN,
        ")": TOK_RPAREN,
        "@": TOK_CURRENT
      };
      var operatorStartToken = {
        "<": true,
        ">": true,
        "=": true,
        "!": true
      };
      var skipChars = {
        " ": true,
        "	": true,
        "\n": true
      };
      function isAlpha(ch3) {
        return ch3 >= "a" && ch3 <= "z" || ch3 >= "A" && ch3 <= "Z" || ch3 === "_";
      }
      function isNum(ch3) {
        return ch3 >= "0" && ch3 <= "9" || ch3 === "-";
      }
      function isAlphaNum(ch3) {
        return ch3 >= "a" && ch3 <= "z" || ch3 >= "A" && ch3 <= "Z" || ch3 >= "0" && ch3 <= "9" || ch3 === "_";
      }
      function Lexer() {
      }
      Lexer.prototype = {
        tokenize: function(stream) {
          var tokens = [];
          this._current = 0;
          var start;
          var identifier;
          var token;
          while (this._current < stream.length) {
            if (isAlpha(stream[this._current])) {
              start = this._current;
              identifier = this._consumeUnquotedIdentifier(stream);
              tokens.push({
                type: TOK_UNQUOTEDIDENTIFIER,
                value: identifier,
                start
              });
            } else if (basicTokens[stream[this._current]] !== void 0) {
              tokens.push({
                type: basicTokens[stream[this._current]],
                value: stream[this._current],
                start: this._current
              });
              this._current++;
            } else if (isNum(stream[this._current])) {
              token = this._consumeNumber(stream);
              tokens.push(token);
            } else if (stream[this._current] === "[") {
              token = this._consumeLBracket(stream);
              tokens.push(token);
            } else if (stream[this._current] === '"') {
              start = this._current;
              identifier = this._consumeQuotedIdentifier(stream);
              tokens.push({
                type: TOK_QUOTEDIDENTIFIER,
                value: identifier,
                start
              });
            } else if (stream[this._current] === "'") {
              start = this._current;
              identifier = this._consumeRawStringLiteral(stream);
              tokens.push({
                type: TOK_LITERAL,
                value: identifier,
                start
              });
            } else if (stream[this._current] === "`") {
              start = this._current;
              var literal = this._consumeLiteral(stream);
              tokens.push({
                type: TOK_LITERAL,
                value: literal,
                start
              });
            } else if (operatorStartToken[stream[this._current]] !== void 0) {
              tokens.push(this._consumeOperator(stream));
            } else if (skipChars[stream[this._current]] !== void 0) {
              this._current++;
            } else if (stream[this._current] === "&") {
              start = this._current;
              this._current++;
              if (stream[this._current] === "&") {
                this._current++;
                tokens.push({type: TOK_AND, value: "&&", start});
              } else {
                tokens.push({type: TOK_EXPREF, value: "&", start});
              }
            } else if (stream[this._current] === "|") {
              start = this._current;
              this._current++;
              if (stream[this._current] === "|") {
                this._current++;
                tokens.push({type: TOK_OR, value: "||", start});
              } else {
                tokens.push({type: TOK_PIPE, value: "|", start});
              }
            } else {
              var error = new Error("Unknown character:" + stream[this._current]);
              error.name = "LexerError";
              throw error;
            }
          }
          return tokens;
        },
        _consumeUnquotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
            this._current++;
          }
          return stream.slice(start, this._current);
        },
        _consumeQuotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== '"' && this._current < maxLength) {
            var current = this._current;
            if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === '"')) {
              current += 2;
            } else {
              current++;
            }
            this._current = current;
          }
          this._current++;
          return JSON.parse(stream.slice(start, this._current));
        },
        _consumeRawStringLiteral: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "'" && this._current < maxLength) {
            var current = this._current;
            if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === "'")) {
              current += 2;
            } else {
              current++;
            }
            this._current = current;
          }
          this._current++;
          var literal = stream.slice(start + 1, this._current - 1);
          return literal.replace("\\'", "'");
        },
        _consumeNumber: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (isNum(stream[this._current]) && this._current < maxLength) {
            this._current++;
          }
          var value = parseInt(stream.slice(start, this._current));
          return {type: TOK_NUMBER, value, start};
        },
        _consumeLBracket: function(stream) {
          var start = this._current;
          this._current++;
          if (stream[this._current] === "?") {
            this._current++;
            return {type: TOK_FILTER, value: "[?", start};
          } else if (stream[this._current] === "]") {
            this._current++;
            return {type: TOK_FLATTEN, value: "[]", start};
          } else {
            return {type: TOK_LBRACKET, value: "[", start};
          }
        },
        _consumeOperator: function(stream) {
          var start = this._current;
          var startingChar = stream[start];
          this._current++;
          if (startingChar === "!") {
            if (stream[this._current] === "=") {
              this._current++;
              return {type: TOK_NE, value: "!=", start};
            } else {
              return {type: TOK_NOT, value: "!", start};
            }
          } else if (startingChar === "<") {
            if (stream[this._current] === "=") {
              this._current++;
              return {type: TOK_LTE, value: "<=", start};
            } else {
              return {type: TOK_LT, value: "<", start};
            }
          } else if (startingChar === ">") {
            if (stream[this._current] === "=") {
              this._current++;
              return {type: TOK_GTE, value: ">=", start};
            } else {
              return {type: TOK_GT, value: ">", start};
            }
          } else if (startingChar === "=") {
            if (stream[this._current] === "=") {
              this._current++;
              return {type: TOK_EQ, value: "==", start};
            }
          }
        },
        _consumeLiteral: function(stream) {
          this._current++;
          var start = this._current;
          var maxLength = stream.length;
          var literal;
          while (stream[this._current] !== "`" && this._current < maxLength) {
            var current = this._current;
            if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === "`")) {
              current += 2;
            } else {
              current++;
            }
            this._current = current;
          }
          var literalString = trimLeft(stream.slice(start, this._current));
          literalString = literalString.replace("\\`", "`");
          if (this._looksLikeJSON(literalString)) {
            literal = JSON.parse(literalString);
          } else {
            literal = JSON.parse('"' + literalString + '"');
          }
          this._current++;
          return literal;
        },
        _looksLikeJSON: function(literalString) {
          var startingChars = '[{"';
          var jsonLiterals = ["true", "false", "null"];
          var numberLooking = "-0123456789";
          if (literalString === "") {
            return false;
          } else if (startingChars.indexOf(literalString[0]) >= 0) {
            return true;
          } else if (jsonLiterals.indexOf(literalString) >= 0) {
            return true;
          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
            try {
              JSON.parse(literalString);
              return true;
            } catch (ex) {
              return false;
            }
          } else {
            return false;
          }
        }
      };
      var bindingPower = {};
      bindingPower[TOK_EOF] = 0;
      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_RBRACKET] = 0;
      bindingPower[TOK_RPAREN] = 0;
      bindingPower[TOK_COMMA] = 0;
      bindingPower[TOK_RBRACE] = 0;
      bindingPower[TOK_NUMBER] = 0;
      bindingPower[TOK_CURRENT] = 0;
      bindingPower[TOK_EXPREF] = 0;
      bindingPower[TOK_PIPE] = 1;
      bindingPower[TOK_OR] = 2;
      bindingPower[TOK_AND] = 3;
      bindingPower[TOK_EQ] = 5;
      bindingPower[TOK_GT] = 5;
      bindingPower[TOK_LT] = 5;
      bindingPower[TOK_GTE] = 5;
      bindingPower[TOK_LTE] = 5;
      bindingPower[TOK_NE] = 5;
      bindingPower[TOK_FLATTEN] = 9;
      bindingPower[TOK_STAR] = 20;
      bindingPower[TOK_FILTER] = 21;
      bindingPower[TOK_DOT] = 40;
      bindingPower[TOK_NOT] = 45;
      bindingPower[TOK_LBRACE] = 50;
      bindingPower[TOK_LBRACKET] = 55;
      bindingPower[TOK_LPAREN] = 60;
      function Parser() {
      }
      Parser.prototype = {
        parse: function(expression) {
          this._loadTokens(expression);
          this.index = 0;
          var ast = this.expression(0);
          if (this._lookahead(0) !== TOK_EOF) {
            var t = this._lookaheadToken(0);
            var error = new Error("Unexpected token type: " + t.type + ", value: " + t.value);
            error.name = "ParserError";
            throw error;
          }
          return ast;
        },
        _loadTokens: function(expression) {
          var lexer = new Lexer();
          var tokens = lexer.tokenize(expression);
          tokens.push({type: TOK_EOF, value: "", start: expression.length});
          this.tokens = tokens;
        },
        expression: function(rbp) {
          var leftToken = this._lookaheadToken(0);
          this._advance();
          var left = this.nud(leftToken);
          var currentToken = this._lookahead(0);
          while (rbp < bindingPower[currentToken]) {
            this._advance();
            left = this.led(currentToken, left);
            currentToken = this._lookahead(0);
          }
          return left;
        },
        _lookahead: function(number) {
          return this.tokens[this.index + number].type;
        },
        _lookaheadToken: function(number) {
          return this.tokens[this.index + number];
        },
        _advance: function() {
          this.index++;
        },
        nud: function(token) {
          var left;
          var right;
          var expression;
          switch (token.type) {
            case TOK_LITERAL:
              return {type: "Literal", value: token.value};
            case TOK_UNQUOTEDIDENTIFIER:
              return {type: "Field", name: token.value};
            case TOK_QUOTEDIDENTIFIER:
              var node = {type: "Field", name: token.value};
              if (this._lookahead(0) === TOK_LPAREN) {
                throw new Error("Quoted identifier not allowed for function names.");
              } else {
                return node;
              }
              break;
            case TOK_NOT:
              right = this.expression(bindingPower.Not);
              return {type: "NotExpression", children: [right]};
            case TOK_STAR:
              left = {type: "Identity"};
              right = null;
              if (this._lookahead(0) === TOK_RBRACKET) {
                right = {type: "Identity"};
              } else {
                right = this._parseProjectionRHS(bindingPower.Star);
              }
              return {type: "ValueProjection", children: [left, right]};
            case TOK_FILTER:
              return this.led(token.type, {type: "Identity"});
            case TOK_LBRACE:
              return this._parseMultiselectHash();
            case TOK_FLATTEN:
              left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
              right = this._parseProjectionRHS(bindingPower.Flatten);
              return {type: "Projection", children: [left, right]};
            case TOK_LBRACKET:
              if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice({type: "Identity"}, right);
              } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
                this._advance();
                this._advance();
                right = this._parseProjectionRHS(bindingPower.Star);
                return {
                  type: "Projection",
                  children: [{type: "Identity"}, right]
                };
              } else {
                return this._parseMultiselectList();
              }
              break;
            case TOK_CURRENT:
              return {type: TOK_CURRENT};
            case TOK_EXPREF:
              expression = this.expression(bindingPower.Expref);
              return {type: "ExpressionReference", children: [expression]};
            case TOK_LPAREN:
              var args = [];
              while (this._lookahead(0) !== TOK_RPAREN) {
                if (this._lookahead(0) === TOK_CURRENT) {
                  expression = {type: TOK_CURRENT};
                  this._advance();
                } else {
                  expression = this.expression(0);
                }
                args.push(expression);
              }
              this._match(TOK_RPAREN);
              return args[0];
            default:
              this._errorToken(token);
          }
        },
        led: function(tokenName, left) {
          var right;
          switch (tokenName) {
            case TOK_DOT:
              var rbp = bindingPower.Dot;
              if (this._lookahead(0) !== TOK_STAR) {
                right = this._parseDotRHS(rbp);
                return {type: "Subexpression", children: [left, right]};
              } else {
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return {type: "ValueProjection", children: [left, right]};
              }
              break;
            case TOK_PIPE:
              right = this.expression(bindingPower.Pipe);
              return {type: TOK_PIPE, children: [left, right]};
            case TOK_OR:
              right = this.expression(bindingPower.Or);
              return {type: "OrExpression", children: [left, right]};
            case TOK_AND:
              right = this.expression(bindingPower.And);
              return {type: "AndExpression", children: [left, right]};
            case TOK_LPAREN:
              var name = left.name;
              var args = [];
              var expression, node;
              while (this._lookahead(0) !== TOK_RPAREN) {
                if (this._lookahead(0) === TOK_CURRENT) {
                  expression = {type: TOK_CURRENT};
                  this._advance();
                } else {
                  expression = this.expression(0);
                }
                if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                }
                args.push(expression);
              }
              this._match(TOK_RPAREN);
              node = {type: "Function", name, children: args};
              return node;
            case TOK_FILTER:
              var condition = this.expression(0);
              this._match(TOK_RBRACKET);
              if (this._lookahead(0) === TOK_FLATTEN) {
                right = {type: "Identity"};
              } else {
                right = this._parseProjectionRHS(bindingPower.Filter);
              }
              return {type: "FilterProjection", children: [left, right, condition]};
            case TOK_FLATTEN:
              var leftNode = {type: TOK_FLATTEN, children: [left]};
              var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
              return {type: "Projection", children: [leftNode, rightNode]};
            case TOK_EQ:
            case TOK_NE:
            case TOK_GT:
            case TOK_GTE:
            case TOK_LT:
            case TOK_LTE:
              return this._parseComparator(left, tokenName);
            case TOK_LBRACKET:
              var token = this._lookaheadToken(0);
              if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice(left, right);
              } else {
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection", children: [left, right]};
              }
              break;
            default:
              this._errorToken(this._lookaheadToken(0));
          }
        },
        _match: function(tokenType) {
          if (this._lookahead(0) === tokenType) {
            this._advance();
          } else {
            var t = this._lookaheadToken(0);
            var error = new Error("Expected " + tokenType + ", got: " + t.type);
            error.name = "ParserError";
            throw error;
          }
        },
        _errorToken: function(token) {
          var error = new Error("Invalid token (" + token.type + '): "' + token.value + '"');
          error.name = "ParserError";
          throw error;
        },
        _parseIndexExpression: function() {
          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
            return this._parseSliceExpression();
          } else {
            var node = {
              type: "Index",
              value: this._lookaheadToken(0).value
            };
            this._advance();
            this._match(TOK_RBRACKET);
            return node;
          }
        },
        _projectIfSlice: function(left, right) {
          var indexExpr = {type: "IndexExpression", children: [left, right]};
          if (right.type === "Slice") {
            return {
              type: "Projection",
              children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
            };
          } else {
            return indexExpr;
          }
        },
        _parseSliceExpression: function() {
          var parts = [null, null, null];
          var index = 0;
          var currentToken = this._lookahead(0);
          while (currentToken !== TOK_RBRACKET && index < 3) {
            if (currentToken === TOK_COLON) {
              index++;
              this._advance();
            } else if (currentToken === TOK_NUMBER) {
              parts[index] = this._lookaheadToken(0).value;
              this._advance();
            } else {
              var t = this._lookahead(0);
              var error = new Error("Syntax error, unexpected token: " + t.value + "(" + t.type + ")");
              error.name = "Parsererror";
              throw error;
            }
            currentToken = this._lookahead(0);
          }
          this._match(TOK_RBRACKET);
          return {
            type: "Slice",
            children: parts
          };
        },
        _parseComparator: function(left, comparator) {
          var right = this.expression(bindingPower[comparator]);
          return {type: "Comparator", name: comparator, children: [left, right]};
        },
        _parseDotRHS: function(rbp) {
          var lookahead = this._lookahead(0);
          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
          if (exprTokens.indexOf(lookahead) >= 0) {
            return this.expression(rbp);
          } else if (lookahead === TOK_LBRACKET) {
            this._match(TOK_LBRACKET);
            return this._parseMultiselectList();
          } else if (lookahead === TOK_LBRACE) {
            this._match(TOK_LBRACE);
            return this._parseMultiselectHash();
          }
        },
        _parseProjectionRHS: function(rbp) {
          var right;
          if (bindingPower[this._lookahead(0)] < 10) {
            right = {type: "Identity"};
          } else if (this._lookahead(0) === TOK_LBRACKET) {
            right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_FILTER) {
            right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_DOT) {
            this._match(TOK_DOT);
            right = this._parseDotRHS(rbp);
          } else {
            var t = this._lookaheadToken(0);
            var error = new Error("Sytanx error, unexpected token: " + t.value + "(" + t.type + ")");
            error.name = "ParserError";
            throw error;
          }
          return right;
        },
        _parseMultiselectList: function() {
          var expressions = [];
          while (this._lookahead(0) !== TOK_RBRACKET) {
            var expression = this.expression(0);
            expressions.push(expression);
            if (this._lookahead(0) === TOK_COMMA) {
              this._match(TOK_COMMA);
              if (this._lookahead(0) === TOK_RBRACKET) {
                throw new Error("Unexpected token Rbracket");
              }
            }
          }
          this._match(TOK_RBRACKET);
          return {type: "MultiSelectList", children: expressions};
        },
        _parseMultiselectHash: function() {
          var pairs = [];
          var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
          var keyToken, keyName, value, node;
          for (; ; ) {
            keyToken = this._lookaheadToken(0);
            if (identifierTypes.indexOf(keyToken.type) < 0) {
              throw new Error("Expecting an identifier token, got: " + keyToken.type);
            }
            keyName = keyToken.value;
            this._advance();
            this._match(TOK_COLON);
            value = this.expression(0);
            node = {type: "KeyValuePair", name: keyName, value};
            pairs.push(node);
            if (this._lookahead(0) === TOK_COMMA) {
              this._match(TOK_COMMA);
            } else if (this._lookahead(0) === TOK_RBRACE) {
              this._match(TOK_RBRACE);
              break;
            }
          }
          return {type: "MultiSelectHash", children: pairs};
        }
      };
      function TreeInterpreter(runtime) {
        this.runtime = runtime;
      }
      TreeInterpreter.prototype = {
        search: function(node, value) {
          return this.visit(node, value);
        },
        visit: function(node, value) {
          var matched, current, result, first, second, field, left, right, collected, i;
          switch (node.type) {
            case "Field":
              if (value === null) {
                return null;
              } else if (isObject(value)) {
                field = value[node.name];
                if (field === void 0) {
                  return null;
                } else {
                  return field;
                }
              } else {
                return null;
              }
              break;
            case "Subexpression":
              result = this.visit(node.children[0], value);
              for (i = 1; i < node.children.length; i++) {
                result = this.visit(node.children[1], result);
                if (result === null) {
                  return null;
                }
              }
              return result;
            case "IndexExpression":
              left = this.visit(node.children[0], value);
              right = this.visit(node.children[1], left);
              return right;
            case "Index":
              if (!isArray(value)) {
                return null;
              }
              var index = node.value;
              if (index < 0) {
                index = value.length + index;
              }
              result = value[index];
              if (result === void 0) {
                result = null;
              }
              return result;
            case "Slice":
              if (!isArray(value)) {
                return null;
              }
              var sliceParams = node.children.slice(0);
              var computed = this.computeSliceParams(value.length, sliceParams);
              var start = computed[0];
              var stop = computed[1];
              var step = computed[2];
              result = [];
              if (step > 0) {
                for (i = start; i < stop; i += step) {
                  result.push(value[i]);
                }
              } else {
                for (i = start; i > stop; i += step) {
                  result.push(value[i]);
                }
              }
              return result;
            case "Projection":
              var base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              collected = [];
              for (i = 0; i < base.length; i++) {
                current = this.visit(node.children[1], base[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "ValueProjection":
              base = this.visit(node.children[0], value);
              if (!isObject(base)) {
                return null;
              }
              collected = [];
              var values = objValues(base);
              for (i = 0; i < values.length; i++) {
                current = this.visit(node.children[1], values[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "FilterProjection":
              base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              var filtered = [];
              var finalResults = [];
              for (i = 0; i < base.length; i++) {
                matched = this.visit(node.children[2], base[i]);
                if (!isFalse(matched)) {
                  filtered.push(base[i]);
                }
              }
              for (var j = 0; j < filtered.length; j++) {
                current = this.visit(node.children[1], filtered[j]);
                if (current !== null) {
                  finalResults.push(current);
                }
              }
              return finalResults;
            case "Comparator":
              first = this.visit(node.children[0], value);
              second = this.visit(node.children[1], value);
              switch (node.name) {
                case TOK_EQ:
                  result = strictDeepEqual(first, second);
                  break;
                case TOK_NE:
                  result = !strictDeepEqual(first, second);
                  break;
                case TOK_GT:
                  result = first > second;
                  break;
                case TOK_GTE:
                  result = first >= second;
                  break;
                case TOK_LT:
                  result = first < second;
                  break;
                case TOK_LTE:
                  result = first <= second;
                  break;
                default:
                  throw new Error("Unknown comparator: " + node.name);
              }
              return result;
            case TOK_FLATTEN:
              var original = this.visit(node.children[0], value);
              if (!isArray(original)) {
                return null;
              }
              var merged = [];
              for (i = 0; i < original.length; i++) {
                current = original[i];
                if (isArray(current)) {
                  merged.push.apply(merged, current);
                } else {
                  merged.push(current);
                }
              }
              return merged;
            case "Identity":
              return value;
            case "MultiSelectList":
              if (value === null) {
                return null;
              }
              collected = [];
              for (i = 0; i < node.children.length; i++) {
                collected.push(this.visit(node.children[i], value));
              }
              return collected;
            case "MultiSelectHash":
              if (value === null) {
                return null;
              }
              collected = {};
              var child;
              for (i = 0; i < node.children.length; i++) {
                child = node.children[i];
                collected[child.name] = this.visit(child.value, value);
              }
              return collected;
            case "OrExpression":
              matched = this.visit(node.children[0], value);
              if (isFalse(matched)) {
                matched = this.visit(node.children[1], value);
              }
              return matched;
            case "AndExpression":
              first = this.visit(node.children[0], value);
              if (isFalse(first) === true) {
                return first;
              }
              return this.visit(node.children[1], value);
            case "NotExpression":
              first = this.visit(node.children[0], value);
              return isFalse(first);
            case "Literal":
              return node.value;
            case TOK_PIPE:
              left = this.visit(node.children[0], value);
              return this.visit(node.children[1], left);
            case TOK_CURRENT:
              return value;
            case "Function":
              var resolvedArgs = [];
              for (i = 0; i < node.children.length; i++) {
                resolvedArgs.push(this.visit(node.children[i], value));
              }
              return this.runtime.callFunction(node.name, resolvedArgs);
            case "ExpressionReference":
              var refNode = node.children[0];
              refNode.jmespathType = TOK_EXPREF;
              return refNode;
            default:
              throw new Error("Unknown node type: " + node.type);
          }
        },
        computeSliceParams: function(arrayLength, sliceParams) {
          var start = sliceParams[0];
          var stop = sliceParams[1];
          var step = sliceParams[2];
          var computed = [null, null, null];
          if (step === null) {
            step = 1;
          } else if (step === 0) {
            var error = new Error("Invalid slice, step cannot be 0");
            error.name = "RuntimeError";
            throw error;
          }
          var stepValueNegative = step < 0 ? true : false;
          if (start === null) {
            start = stepValueNegative ? arrayLength - 1 : 0;
          } else {
            start = this.capSliceRange(arrayLength, start, step);
          }
          if (stop === null) {
            stop = stepValueNegative ? -1 : arrayLength;
          } else {
            stop = this.capSliceRange(arrayLength, stop, step);
          }
          computed[0] = start;
          computed[1] = stop;
          computed[2] = step;
          return computed;
        },
        capSliceRange: function(arrayLength, actualValue, step) {
          if (actualValue < 0) {
            actualValue += arrayLength;
            if (actualValue < 0) {
              actualValue = step < 0 ? -1 : 0;
            }
          } else if (actualValue >= arrayLength) {
            actualValue = step < 0 ? arrayLength - 1 : arrayLength;
          }
          return actualValue;
        }
      };
      function Runtime(interpreter) {
        this._interpreter = interpreter;
        this.functionTable = {
          abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
          avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
          ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
          contains: {
            _func: this._functionContains,
            _signature: [
              {types: [TYPE_STRING, TYPE_ARRAY]},
              {types: [TYPE_ANY]}
            ]
          },
          ends_with: {
            _func: this._functionEndsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
          },
          floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
          length: {
            _func: this._functionLength,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]
          },
          map: {
            _func: this._functionMap,
            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]
          },
          max: {
            _func: this._functionMax,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]
          },
          merge: {
            _func: this._functionMerge,
            _signature: [{types: [TYPE_OBJECT], variadic: true}]
          },
          max_by: {
            _func: this._functionMaxBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
          starts_with: {
            _func: this._functionStartsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]
          },
          min: {
            _func: this._functionMin,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]
          },
          min_by: {
            _func: this._functionMinBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
          keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
          values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
          sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
          sort_by: {
            _func: this._functionSortBy,
            _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
          },
          join: {
            _func: this._functionJoin,
            _signature: [
              {types: [TYPE_STRING]},
              {types: [TYPE_ARRAY_STRING]}
            ]
          },
          reverse: {
            _func: this._functionReverse,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]
          },
          to_array: {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
          to_string: {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
          to_number: {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
          not_null: {
            _func: this._functionNotNull,
            _signature: [{types: [TYPE_ANY], variadic: true}]
          }
        };
      }
      Runtime.prototype = {
        callFunction: function(name, resolvedArgs) {
          var functionEntry = this.functionTable[name];
          if (functionEntry === void 0) {
            throw new Error("Unknown function: " + name + "()");
          }
          this._validateArgs(name, resolvedArgs, functionEntry._signature);
          return functionEntry._func.call(this, resolvedArgs);
        },
        _validateArgs: function(name, args, signature) {
          var pluralized;
          if (signature[signature.length - 1].variadic) {
            if (args.length < signature.length) {
              pluralized = signature.length === 1 ? " argument" : " arguments";
              throw new Error("ArgumentError: " + name + "() takes at least" + signature.length + pluralized + " but received " + args.length);
            }
          } else if (args.length !== signature.length) {
            pluralized = signature.length === 1 ? " argument" : " arguments";
            throw new Error("ArgumentError: " + name + "() takes " + signature.length + pluralized + " but received " + args.length);
          }
          var currentSpec;
          var actualType;
          var typeMatched;
          for (var i = 0; i < signature.length; i++) {
            typeMatched = false;
            currentSpec = signature[i].types;
            actualType = this._getTypeName(args[i]);
            for (var j = 0; j < currentSpec.length; j++) {
              if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                typeMatched = true;
                break;
              }
            }
            if (!typeMatched) {
              throw new Error("TypeError: " + name + "() expected argument " + (i + 1) + " to be type " + currentSpec + " but received type " + actualType + " instead.");
            }
          }
        },
        _typeMatches: function(actual, expected, argValue) {
          if (expected === TYPE_ANY) {
            return true;
          }
          if (expected === TYPE_ARRAY_STRING || expected === TYPE_ARRAY_NUMBER || expected === TYPE_ARRAY) {
            if (expected === TYPE_ARRAY) {
              return actual === TYPE_ARRAY;
            } else if (actual === TYPE_ARRAY) {
              var subtype;
              if (expected === TYPE_ARRAY_NUMBER) {
                subtype = TYPE_NUMBER;
              } else if (expected === TYPE_ARRAY_STRING) {
                subtype = TYPE_STRING;
              }
              for (var i = 0; i < argValue.length; i++) {
                if (!this._typeMatches(this._getTypeName(argValue[i]), subtype, argValue[i])) {
                  return false;
                }
              }
              return true;
            }
          } else {
            return actual === expected;
          }
        },
        _getTypeName: function(obj) {
          switch (Object.prototype.toString.call(obj)) {
            case "[object String]":
              return TYPE_STRING;
            case "[object Number]":
              return TYPE_NUMBER;
            case "[object Array]":
              return TYPE_ARRAY;
            case "[object Boolean]":
              return TYPE_BOOLEAN;
            case "[object Null]":
              return TYPE_NULL;
            case "[object Object]":
              if (obj.jmespathType === TOK_EXPREF) {
                return TYPE_EXPREF;
              } else {
                return TYPE_OBJECT;
              }
          }
        },
        _functionStartsWith: function(resolvedArgs) {
          return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
        },
        _functionEndsWith: function(resolvedArgs) {
          var searchStr = resolvedArgs[0];
          var suffix = resolvedArgs[1];
          return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
        },
        _functionReverse: function(resolvedArgs) {
          var typeName = this._getTypeName(resolvedArgs[0]);
          if (typeName === TYPE_STRING) {
            var originalStr = resolvedArgs[0];
            var reversedStr = "";
            for (var i = originalStr.length - 1; i >= 0; i--) {
              reversedStr += originalStr[i];
            }
            return reversedStr;
          } else {
            var reversedArray = resolvedArgs[0].slice(0);
            reversedArray.reverse();
            return reversedArray;
          }
        },
        _functionAbs: function(resolvedArgs) {
          return Math.abs(resolvedArgs[0]);
        },
        _functionCeil: function(resolvedArgs) {
          return Math.ceil(resolvedArgs[0]);
        },
        _functionAvg: function(resolvedArgs) {
          var sum = 0;
          var inputArray = resolvedArgs[0];
          for (var i = 0; i < inputArray.length; i++) {
            sum += inputArray[i];
          }
          return sum / inputArray.length;
        },
        _functionContains: function(resolvedArgs) {
          return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
        },
        _functionFloor: function(resolvedArgs) {
          return Math.floor(resolvedArgs[0]);
        },
        _functionLength: function(resolvedArgs) {
          if (!isObject(resolvedArgs[0])) {
            return resolvedArgs[0].length;
          } else {
            return Object.keys(resolvedArgs[0]).length;
          }
        },
        _functionMap: function(resolvedArgs) {
          var mapped = [];
          var interpreter = this._interpreter;
          var exprefNode = resolvedArgs[0];
          var elements = resolvedArgs[1];
          for (var i = 0; i < elements.length; i++) {
            mapped.push(interpreter.visit(exprefNode, elements[i]));
          }
          return mapped;
        },
        _functionMerge: function(resolvedArgs) {
          var merged = {};
          for (var i = 0; i < resolvedArgs.length; i++) {
            var current = resolvedArgs[i];
            for (var key in current) {
              merged[key] = current[key];
            }
          }
          return merged;
        },
        _functionMax: function(resolvedArgs) {
          if (resolvedArgs[0].length > 0) {
            var typeName = this._getTypeName(resolvedArgs[0][0]);
            if (typeName === TYPE_NUMBER) {
              return Math.max.apply(Math, resolvedArgs[0]);
            } else {
              var elements = resolvedArgs[0];
              var maxElement = elements[0];
              for (var i = 1; i < elements.length; i++) {
                if (maxElement.localeCompare(elements[i]) < 0) {
                  maxElement = elements[i];
                }
              }
              return maxElement;
            }
          } else {
            return null;
          }
        },
        _functionMin: function(resolvedArgs) {
          if (resolvedArgs[0].length > 0) {
            var typeName = this._getTypeName(resolvedArgs[0][0]);
            if (typeName === TYPE_NUMBER) {
              return Math.min.apply(Math, resolvedArgs[0]);
            } else {
              var elements = resolvedArgs[0];
              var minElement = elements[0];
              for (var i = 1; i < elements.length; i++) {
                if (elements[i].localeCompare(minElement) < 0) {
                  minElement = elements[i];
                }
              }
              return minElement;
            }
          } else {
            return null;
          }
        },
        _functionSum: function(resolvedArgs) {
          var sum = 0;
          var listToSum = resolvedArgs[0];
          for (var i = 0; i < listToSum.length; i++) {
            sum += listToSum[i];
          }
          return sum;
        },
        _functionType: function(resolvedArgs) {
          switch (this._getTypeName(resolvedArgs[0])) {
            case TYPE_NUMBER:
              return "number";
            case TYPE_STRING:
              return "string";
            case TYPE_ARRAY:
              return "array";
            case TYPE_OBJECT:
              return "object";
            case TYPE_BOOLEAN:
              return "boolean";
            case TYPE_EXPREF:
              return "expref";
            case TYPE_NULL:
              return "null";
          }
        },
        _functionKeys: function(resolvedArgs) {
          return Object.keys(resolvedArgs[0]);
        },
        _functionValues: function(resolvedArgs) {
          var obj = resolvedArgs[0];
          var keys = Object.keys(obj);
          var values = [];
          for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
          }
          return values;
        },
        _functionJoin: function(resolvedArgs) {
          var joinChar = resolvedArgs[0];
          var listJoin = resolvedArgs[1];
          return listJoin.join(joinChar);
        },
        _functionToArray: function(resolvedArgs) {
          if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
            return resolvedArgs[0];
          } else {
            return [resolvedArgs[0]];
          }
        },
        _functionToString: function(resolvedArgs) {
          if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
            return resolvedArgs[0];
          } else {
            return JSON.stringify(resolvedArgs[0]);
          }
        },
        _functionToNumber: function(resolvedArgs) {
          var typeName = this._getTypeName(resolvedArgs[0]);
          var convertedValue;
          if (typeName === TYPE_NUMBER) {
            return resolvedArgs[0];
          } else if (typeName === TYPE_STRING) {
            convertedValue = +resolvedArgs[0];
            if (!isNaN(convertedValue)) {
              return convertedValue;
            }
          }
          return null;
        },
        _functionNotNull: function(resolvedArgs) {
          for (var i = 0; i < resolvedArgs.length; i++) {
            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
              return resolvedArgs[i];
            }
          }
          return null;
        },
        _functionSort: function(resolvedArgs) {
          var sortedArray = resolvedArgs[0].slice(0);
          sortedArray.sort();
          return sortedArray;
        },
        _functionSortBy: function(resolvedArgs) {
          var sortedArray = resolvedArgs[0].slice(0);
          if (sortedArray.length === 0) {
            return sortedArray;
          }
          var interpreter = this._interpreter;
          var exprefNode = resolvedArgs[1];
          var requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]));
          if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
            throw new Error("TypeError");
          }
          var that = this;
          var decorated = [];
          for (var i = 0; i < sortedArray.length; i++) {
            decorated.push([i, sortedArray[i]]);
          }
          decorated.sort(function(a, b) {
            var exprA = interpreter.visit(exprefNode, a[1]);
            var exprB = interpreter.visit(exprefNode, b[1]);
            if (that._getTypeName(exprA) !== requiredType) {
              throw new Error("TypeError: expected " + requiredType + ", received " + that._getTypeName(exprA));
            } else if (that._getTypeName(exprB) !== requiredType) {
              throw new Error("TypeError: expected " + requiredType + ", received " + that._getTypeName(exprB));
            }
            if (exprA > exprB) {
              return 1;
            } else if (exprA < exprB) {
              return -1;
            } else {
              return a[0] - b[0];
            }
          });
          for (var j = 0; j < decorated.length; j++) {
            sortedArray[j] = decorated[j][1];
          }
          return sortedArray;
        },
        _functionMaxBy: function(resolvedArgs) {
          var exprefNode = resolvedArgs[1];
          var resolvedArray = resolvedArgs[0];
          var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
          var maxNumber = -Infinity;
          var maxRecord;
          var current;
          for (var i = 0; i < resolvedArray.length; i++) {
            current = keyFunction(resolvedArray[i]);
            if (current > maxNumber) {
              maxNumber = current;
              maxRecord = resolvedArray[i];
            }
          }
          return maxRecord;
        },
        _functionMinBy: function(resolvedArgs) {
          var exprefNode = resolvedArgs[1];
          var resolvedArray = resolvedArgs[0];
          var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
          var minNumber = Infinity;
          var minRecord;
          var current;
          for (var i = 0; i < resolvedArray.length; i++) {
            current = keyFunction(resolvedArray[i]);
            if (current < minNumber) {
              minNumber = current;
              minRecord = resolvedArray[i];
            }
          }
          return minRecord;
        },
        createKeyFunction: function(exprefNode, allowedTypes) {
          var that = this;
          var interpreter = this._interpreter;
          var keyFunc = function(x) {
            var current = interpreter.visit(exprefNode, x);
            if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
              var msg = "TypeError: expected one of " + allowedTypes + ", received " + that._getTypeName(current);
              throw new Error(msg);
            }
            return current;
          };
          return keyFunc;
        }
      };
      function compile(stream) {
        var parser = new Parser();
        var ast = parser.parse(stream);
        return ast;
      }
      function tokenize(stream) {
        var lexer = new Lexer();
        return lexer.tokenize(stream);
      }
      function search(data, expression) {
        var parser = new Parser();
        var runtime = new Runtime();
        var interpreter = new TreeInterpreter(runtime);
        runtime._interpreter = interpreter;
        var node = parser.parse(expression);
        return interpreter.search(node, data);
      }
      exports2.tokenize = tokenize;
      exports2.compile = compile;
      exports2.search = search;
      exports2.strictDeepEqual = strictDeepEqual;
    })(typeof exports === "undefined" ? exports.jmespath = {} : exports);
  });

  // node_modules/.pnpm/file-saver@2.0.5/node_modules/file-saver/dist/FileSaver.min.js
  var require_FileSaver_min = __commonJS((exports, module) => {
    (function(a, b) {
      if (typeof define == "function" && define.amd)
        define([], b);
      else if (typeof exports != "undefined")
        b();
      else {
        b(), a.FileSaver = {exports: {}}.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return typeof b2 == "undefined" ? b2 = {autoBom: false} : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = {autoBom: !b2}), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], {type: a2.type}) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", typeof f2 != "string")
          navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2))
          c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
          return c(b2, d2, e2);
        var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && typeof FileReader != "undefined") {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, typeof module != "undefined" && (module.exports = g);
    });
  });

  // node_modules/.pnpm/statebot@2.7.4/node_modules/statebot/dist/cjs/statebot.min.js
  var require_statebot_min = __commonJS((exports) => {
    "use strict";
    function t(t2) {
      return {all: t2 = t2 || new Map(), on: function(n2, e2) {
        var r2 = t2.get(n2);
        r2 && r2.push(e2) || t2.set(n2, [e2]);
      }, off: function(n2, e2) {
        var r2 = t2.get(n2);
        r2 && r2.splice(r2.indexOf(e2) >>> 0, 1);
      }, emit: function(n2, e2) {
        (t2.get(n2) || []).slice().map(function(t3) {
          t3(e2);
        }), (t2.get("*") || []).slice().map(function(t3) {
          t3(n2, e2);
        });
      }};
    }
    function n(t2) {
      return Array.isArray(t2);
    }
    function e(t2) {
      return typeof t2 == "function";
    }
    function r(t2) {
      return typeof t2 == "string";
    }
    function o(t2) {
      return typeof t2 == "object";
    }
    function i(t2) {
      return !(t2 === null || !o(t2)) && Object.getPrototypeOf(t2) === Object.prototype;
    }
    function s(t2) {
      return !!r(t2) || !!n(t2) && t2.every(r);
    }
    Object.defineProperty(exports, "__esModule", {value: true});
    function c(t2) {
      return function(n2, o2, ...i2) {
        const s2 = Object.entries(o2).map(([t3, n3]) => ({argName: t3, argType: n3})), c2 = i2.map((...t3) => ((t4, n3, o3) => {
          const {argName: i3, argType: s3} = t4[o3];
          if (n3 === void 0)
            return `Argument undefined: "${i3}"`;
          const c3 = Array.isArray(s3) ? s3 : [s3], a3 = c3.map((t5) => e(t5) ? ((t6, n4, e2) => n4(e2) ? void 0 : `${n4.name}(${t6}) did not return true`)(i3, t5, n3) : ((t6, n4, e2) => typeof e2 === n4 ? void 0 : `Argument "${t6}" should be a ${n4}`)(i3, t5, n3)).filter(r);
          return (c3.length > 1 ? a3.length > 1 : a3.length) ? `${a3.join("\n| ")}
> typeof ${i3} === ${typeof n3}(${JSON.stringify(n3)})` : void 0;
        })(s2, ...t3)).filter(r);
        if (!c2.length)
          return;
        const a2 = Object.keys(o2).join(", ");
        return `
${t2 || ""}${n2}(${a2}):
${c2.map((t3) => `| ${t3}`).join("\n")}`;
      };
    }
    function a(t2) {
      const n2 = t2.addListener ? (...n3) => t2.addListener(...n3) : (...n3) => t2.on(...n3), e2 = t2.removeListener ? (...n3) => t2.removeListener(...n3) : (...n3) => t2.off(...n3), r2 = new Map();
      return {emit: (n3, ...e3) => t2.emit(n3, e3), on: function(t3, e3) {
        let o2 = r2.get(e3);
        o2 || (o2 = {handleEvent: (t4 = []) => e3(...[t4].flat()), refCount: 0}, r2.set(e3, o2)), o2.refCount += 1, n2(t3, o2.handleEvent);
      }, off: function(t3, n3) {
        let o2 = r2.get(n3);
        o2 && (e2(t3, o2.handleEvent), o2.refCount -= 1, o2.refCount === 0 && r2.delete(n3));
      }};
    }
    function u(t2) {
      return t2.reduce((t3, n2) => t3.indexOf(n2) === -1 ? [...t3, n2] : t3, []);
    }
    function f(t2) {
      return (...n2) => function(t3, ...n3) {
        const e2 = setTimeout(t3, 0, ...n3);
        return () => {
          clearTimeout(e2);
        };
      }(t2, ...n2);
    }
    function l(t2) {
      let n2, e2 = false;
      return {fn: (...r2) => (e2 || (n2 = t2(...r2)), n2), revoke: () => {
        e2 = true;
      }};
    }
    function p(t2, n2, e2, ...r2) {
      const o2 = [...r2].flat().reduce((t3, n3) => ({...t3, [n3]: 0}), {});
      function i2(t3) {
        const n3 = s2(t3) - 1;
        o2[t3] = Math.max(n3, 0);
      }
      function s2(t3) {
        return o2[t3] || 0;
      }
      return {increase: function(t3) {
        return o2[t3] = s2(t3) + 1, () => {
          i2(t3);
        };
      }, decrease: i2, countOf: s2, toValue: function() {
        return {description: `Statebot[${t2}]: ${e2}:`, table: Object.keys(o2).sort().map((t3) => [t3, o2[t3]]).map(([t3, e3]) => ({[n2]: t3, refs: e3 || "None"}))};
      }, refs: function() {
        return {...o2};
      }};
    }
    function m(t2, n2) {
      function e2() {
        return t2 >= 1;
      }
      function o2() {
        return t2 >= 2;
      }
      function i2() {
        return t2 >= 3;
      }
      r(t2) && (t2 = {info: 3, log: 2, warn: 1, none: 0}[t2] || 3);
      const {info: s2, table: c2, log: a2, warn: u2, error: f2} = n2 || console;
      return {canWarn: e2, canLog: o2, canInfo: i2, info: (...t3) => {
        i2() && s2(...t3);
      }, table: (...t3) => {
        o2() && c2(...t3);
      }, log: (...t3) => {
        o2() && a2(...t3);
      }, warn: (...t3) => {
        e2() && u2(...t3);
      }, error: (...t3) => {
        f2(...t3);
      }};
    }
    var h = /[\r\n]/;
    var d = "|";
    var g = "->";
    var $ = [d, g].map((t2) => t2.replace("|", "\\|")).join("|");
    var w = new RegExp(`(${$})$`);
    var E = /[^a-z0-9!@#$%^&*:_+=<>|~.\x2D]/gi;
    var v = /(\/\/[^\n\r]*)/;
    var T = c("statebot.");
    function y(t2) {
      const n2 = T("decomposeRoute", {templateLiteral: s}, t2);
      if (n2)
        throw TypeError(n2);
      return O(S(t2)).flat(2);
    }
    function b(t2) {
      const n2 = T("decomposeChart", {chart: s}, t2);
      if (n2)
        throw TypeError(n2);
      const e2 = O(S(t2)), r2 = e2.map(A).flat(1).map(j).flat(1);
      let o2 = false;
      const i2 = u(r2.map((t3) => (t3.includes("") && (o2 = true), t3.join(g)))), c2 = u(e2.flat(3));
      return {transitions: i2.map((t3) => t3.split(g)), routes: i2, states: o2 ? c2 : c2.filter(Boolean)};
    }
    function S(t2) {
      const n2 = function(t3) {
        return [t3].flat().reduce((t4, n3) => [...t4, ...n3.split(h)], []);
      }(t2), e2 = [];
      let r2 = false;
      const o2 = n2.reduce((t3, n3) => {
        const o3 = n3.replace(v, "").replace(E, "");
        return o3 ? (r2 = w.test(o3), r2 ? t3 + o3 : (e2.push(t3 + o3), "")) : t3;
      }, "");
      return r2 || o2 ? [...e2, o2] : [...e2];
    }
    function O(t2) {
      return t2.map((t3) => t3.split(g).map((t4) => t4.split(d)));
    }
    function A(t2) {
      const n2 = [];
      return t2.reduce((t3, e2) => (t3 === false || n2.push([t3, [...e2]]), [...e2]), false), n2;
    }
    function j([t2, n2]) {
      return t2.reduce((t3, e2) => [...t3, ...n2.map((t4) => [e2, t4])], []);
    }
    var x = "onExiting";
    var I = "onEntering";
    var L = "onExited";
    var N = "onEntered";
    var C = "onSwitching";
    var P = "onSwitched";
    var _ = {[C]: "(ANY)state:changing", [P]: "(ANY)state:changed"};
    function k(t2, n2) {
      const e2 = [], r2 = [];
      return {configs: t2.reduce((t3, o2) => {
        const {routeChart: i2, action: s2} = o2, {states: c2, routes: a2, transitions: u2} = b(i2);
        return n2() && (e2.push(...c2), r2.push(...a2)), [...t3, ...u2.map(([t4, n3]) => ({fromState: t4, toState: n3, action: s2}))];
      }, []), states: e2, routes: r2};
    }
    function R(t2) {
      return i(t2) && typeof t2.__STATEBOT__ == "number";
    }
    var M = c("statebot.");
    var D = 0;
    function F() {
      const t2 = Date.now();
      function n2(t3, n3) {
        return t3.toFixed(n3).replace(/\.0+$/, "");
      }
      return function() {
        const e2 = Date.now() - t2;
        return e2 < 500 ? `${n2(e2)} ms` : e2 < 5e3 ? `${n2(e2 / 1e3, 2)} s ` : e2 < 6e4 ? `${n2(e2 / 1e3, 1)} s ` : `${n2(e2 / 1e3 / 60, 1)} m `;
      };
    }
    exports.Statebot = function(s2, u2) {
      if (!r(s2))
        throw new TypeError("\nStatebot: Please specify a name for this machine");
      const f2 = `Statebot[${s2}]`;
      if (!i(u2))
        throw new TypeError(`
${f2}: Please specify options for this machine`);
      const {chart: l2, logLevel: h2 = 3, historyLimit: d2 = 2} = u2 || {}, $2 = u2.events === void 0 ? a(t()) : o(w2 = u2.events) && e(w2.emit) && (e(w2.addListener) || e(w2.on)) && (e(w2.removeListener) || e(w2.off)) && a(u2.events);
      var w2;
      if (!$2)
        throw new TypeError(`
${f2}: Invalid event-emitter specified in options`);
      const {states: E2 = [], routes: v2 = []} = l2 ? b(l2) : u2, {startIn: T2 = E2[0]} = u2;
      if (!E2.includes(T2))
        throw new Error(`${f2}: Starting-state not in chart: "${T2}"`);
      const y2 = c(`${f2}#`), S2 = m(h2, console), {canWarn: O2} = S2, A2 = [T2], j2 = Math.max(d2, 2);
      let R2 = 0;
      const {pause: M2, resume: D2, paused: F2, Pausable: Y} = function(t2, n2) {
        n2 = n2 || function() {
        };
        let e2 = !!t2;
        return {Pausable: function(t3) {
          return (...r2) => e2 ? (n2(), false) : t3(...r2);
        }, paused: () => e2, pause: () => {
          e2 = true;
        }, resume: () => {
          e2 = false;
        }};
      }(false, () => S2.warn(`${f2}: Ignoring callback, paused`)), B = a(t()), G = Y(B.emit);
      function H(t2, n2) {
        return B.on(t2, n2), () => B.off(t2, n2);
      }
      const U = p(s2, "states", "Listening for the following state-changes", [...E2]), V = p(s2, "transitions", "Listening for the following transitions", [...v2]), W = p(s2, "events", "Listening for the following events");
      function z(t2, o2) {
        const c2 = e(t2) ? t2({enter: tt, emit: Z, Enter: it, Emit: ot}) : i(t2) ? t2 : null;
        if (!i(c2))
          throw new TypeError(`Statebot[${s2}]#${o2}(): Expected an object, or a function that returns an object`);
        const a2 = [], u3 = [], {transitionsForEvents: f3, transitionsOnly: l3} = function(t3) {
          const o3 = {}, s3 = [];
          return Object.entries(t3).map(([t4, c3]) => {
            if (e(c3))
              return void s3.push({routeChart: t4, action: c3});
            if (!i(c3))
              return;
            const {on: a3, then: u4} = c3;
            if (r(a3) || n(a3)) {
              [a3].flat().map((n2) => {
                o3[n2] = o3[n2] || [], o3[n2].push({routeChart: t4, action: u4});
              });
            } else
              e(u4) && s3.push({routeChart: t4, action: c3});
          }), {transitionsForEvents: o3, transitionsOnly: s3};
        }(c2), p2 = Object.entries(f3).reduce(function(t3, [n2, e2]) {
          const {states: r2, routes: o3, configs: i2} = k(e2, O2);
          O2() && (a2.push(...r2), u3.push(...o3));
          return {...t3, [n2]: i2};
        }, {}), m2 = k(l3, O2), h3 = Object.entries(p2).map(function([t3, n2]) {
          return [W.increase(t3), nt(t3, (...e2) => {
            n2.map((t4) => ({...t4, args: e2})).some(d3) || st(`Event not handled: "${t3}"`);
          })];
        }).concat(m2.configs.map(function(t3) {
          const {fromState: n2, toState: e2, action: r2} = t3, o3 = `${n2}->${e2}`;
          return [V.increase(o3), H(o3, r2)];
        })).flat();
        if (O2()) {
          a2.push(...m2.states), u3.push(...m2.routes);
          const t3 = a2.filter((t4) => !E2.includes(t4)), n2 = u3.filter((t4) => !v2.includes(t4));
          t3.length && S2.warn(`Statebot[${s2}]#${o2}(): Invalid states specified:
` + t3.map((t4) => `  > "${t4}"`).join("\n")), n2.length && S2.warn(`Statebot[${s2}]#${o2}(): Invalid transitions specified:
` + n2.map((t4) => `  > "${t4}"`).join("\n"));
        }
        return () => h3.map((t3) => t3());
        function d3({fromState: t3, toState: n2, action: r2, args: o3}) {
          return X(t3, () => (tt(n2, ...o3), e(r2) && r2(...o3), true));
        }
      }
      function J() {
        return A2[A2.length - 2];
      }
      function K() {
        return A2[A2.length - 1];
      }
      function q(t2) {
        const n2 = t2 !== void 0 ? t2 : K(), e2 = y2("statesAvailableFromHere", {state: r}, n2);
        if (e2)
          throw new TypeError(e2);
        return v2.reduce((t3, e3) => {
          const [r2, o2] = e3.split(g).map((t4) => t4.trim());
          return r2 === n2 ? [...t3, o2] : t3;
        }, []);
      }
      function Q(t2, n2, ...r2) {
        const o2 = K() === t2;
        return n2 === void 0 ? o2 : o2 ? e(n2) ? n2(...r2) : n2 : null;
      }
      function X(...t2) {
        const n2 = y2("inState", {state: [r, i]}, t2[0]);
        if (n2)
          throw new TypeError(n2);
        return i(t2[0]) ? function(t3, ...n3) {
          const e2 = Object.entries(t3).find(([t4]) => Q(t4));
          return e2 ? Q(...e2.concat(n3)) : null;
        }(...t2) : Q(...t2);
      }
      const Z = Y((t2, ...n2) => {
        const e2 = y2("emit", {eventName: r}, t2);
        if (e2)
          throw new TypeError(e2);
        return $2.emit(t2, ...n2);
      }), tt = Y((t2, ...n2) => {
        const e2 = y2("enter", {state: r}, t2);
        if (e2)
          throw new TypeError(e2);
        const o2 = K(), i2 = t2;
        if (i2 === o2)
          return st(`Already in state: "${i2}"`), false;
        if (!E2.includes(i2))
          return st(`Invalid state "${i2}", not switching`), false;
        const s3 = `${o2}->${i2}`;
        return v2.includes(s3) ? (S2.info(`${f2}: tId<${++R2}>: ${s3}`), A2.push(i2), A2.length > j2 && A2.shift(), G(_[C], i2, o2, ...n2), G(s3, ...n2), G(_[P], i2, o2, ...n2), true) : (st(`Invalid transition "${s3}", not switching`), false);
      });
      function nt(t2, n2) {
        const o2 = y2("onEvent", {eventName: r, cb: e}, t2, n2);
        if (o2)
          throw new TypeError(o2);
        return $2.on(t2, n2), () => $2.off(t2, n2);
      }
      const et2 = Object.keys(_).reduce((t2, n2) => ({...t2, [n2]: (t3) => {
        const r2 = y2(n2, {cb: e}, t3);
        if (r2)
          throw new TypeError(r2);
        const o2 = U.increase(_[n2]), i2 = H(_[n2], t3);
        return () => {
          i2(), o2();
        };
      }}), {}), rt = [[x, C], [I, C], [L, P], [N, P]].reduce((t2, n2) => {
        const [o2, i2] = n2, s3 = o2.slice(2), c2 = s3.toLowerCase();
        return {...t2, [o2]: (t3, n3) => {
          const a2 = y2(o2, {state: r, cb: e}, t3, n3);
          if (a2)
            throw new TypeError(a2);
          const u3 = [U.increase(t3), U.increase(`${t3}:${c2}`)], f3 = et2[i2]((e2, r2, ...o3) => {
            s3.indexOf("Exit") === 0 ? t3 === r2 && n3(e2, ...o3) : t3 === e2 && n3(r2, ...o3);
          });
          return () => {
            f3(), u3.map((t4) => t4());
          };
        }};
      }, {});
      function ot(t2, ...n2) {
        const e2 = y2("Emit", {eventName: r}, t2);
        if (e2)
          throw new TypeError(e2);
        return (...e3) => Z(t2, ...n2, ...e3);
      }
      function it(t2, ...n2) {
        const e2 = y2("Enter", {state: r}, t2);
        if (e2)
          throw new TypeError(e2);
        return (...e3) => tt(t2, ...n2, ...e3);
      }
      function st(t2) {
        const n2 = J(), e2 = K(), r2 = `${n2 === void 0 ? "[undefined]" : n2}->${e2}`, o2 = q();
        o2.length ? S2.info(`${f2}: ${t2}
  > Previous transition: "${r2}"
  > From "${e2}", valid states are: [${o2.map((t3) => `"${t3}"`).join(", ")}]`) : S2.info(`${f2}: ${t2}
  > Previous transition: "${r2}"
  > There are no states available from "${e2}"`);
      }
      function ct(t2) {
        const {description: n2, table: e2} = t2.toValue();
        S2.log(n2), e2.length ? S2.table(e2) : S2.log("  > No information");
      }
      return {__STATEBOT__: 1, canTransitionTo: function(...t2) {
        const n2 = t2.flat(), e2 = y2("canTransitionTo", {state: r}, n2[0]);
        if (e2)
          throw new TypeError(e2);
        if (!n2.length)
          return false;
        const o2 = q();
        return n2.every((t3) => o2.includes(t3));
      }, currentState: K, emit: Z, Emit: ot, enter: tt, Enter: it, history: () => [...A2], info: () => (S2.log(`${f2}: Information about this state-machine`), ct(U), ct(V), void ct(W)), inspect: () => ({states: U.refs(), transitions: V.refs(), events: W.refs()}), inState: X, InState: function(...t2) {
        const n2 = y2("InState", {state: [r, i]}, t2[0]);
        if (n2)
          throw new TypeError(n2);
        return i(t2[0]) ? function(t3, ...n3) {
          return (...e2) => X(t3, ...n3, ...e2);
        }(...t2) : function(t3, n3, ...e2) {
          return (...r2) => X(t3, n3, ...e2, ...r2);
        }(...t2);
      }, name: () => s2, onEntered: rt[N], onEntering: rt[I], onEvent: nt, onExited: rt[L], onExiting: rt[x], onSwitched: et2[P], onSwitching: et2[C], onTransitions: (t2) => z(t2, "onTransitions"), pause: M2, paused: F2, performTransitions: (t2) => z(t2, "performTransitions"), previousState: J, reset: function() {
        S2.warn(`${f2}: State-machine reset!`), A2.length = 0, A2.push(T2);
      }, resume: D2, statesAvailableFromHere: q};
    }, exports.assertRoute = function(t2, n2, e2) {
      const r2 = M("assertRoute", {machine: R, expectedRoute: s}, t2, n2);
      if (r2)
        throw TypeError(r2);
      D += 1;
      const {description: o2 = "Assertion complete", fromState: i2 = "", run: c2 = () => {
      }, permittedDeviations: a2 = 0, timeoutInMs: u2 = 1e3, logLevel: p2 = 3} = e2 || {}, h2 = m(p2), d2 = `Statebot[${t2.name()}]: aId<${D}>`, g2 = y(n2);
      h2.log(`
${d2}: Asserting route: [${g2.join(" > ")}]`), h2.log(`${d2}: > Assertion will start from state: "${i2}"`);
      const $2 = f(c2);
      let w2 = () => {
      };
      const E2 = F();
      let v2, T2 = F(), b2 = 0, S2 = true, O2 = false;
      const A2 = [...g2], j2 = function(t3, n3) {
        n3 = n3 || [];
        const e3 = [], r3 = (t3 = t3 || []).map((t4, e4) => n3[e4] || "center");
        let o3 = false;
        function i3() {
          o3 = true;
        }
        function s2(...n4) {
          if (o3)
            return;
          const r4 = t3.reduce((t4, e4, r5) => ({...t4, [e4]: n4[r5] || ""}), {});
          e3.push(r4);
        }
        function c3() {
          return e3.reduce((n4, e4) => t3.map((t4, r4) => Math.max(e4[t4].length, n4[r4])), t3.map(() => 0));
        }
        function a3() {
          const n4 = c3();
          function o4(t4, e4) {
            const o5 = n4[e4], i4 = r3[e4];
            return i4 === "left" ? t4.padEnd(o5) : i4 === "right" ? t4.padStart(o5) : t4;
          }
          return e3.reduce((n5, e4) => [...n5, t3.reduce((t4, n6, r4) => ({...t4, [n6]: o4(e4[n6], r4)}), {})], []);
        }
        return {lock: i3, addRow: s2, content: a3};
      }(["state", "expected", "info", "took"], ["center", "center", "left", "right"]), x2 = function(t3) {
        const {revoke: n3, fn: e3} = l(t3);
        let r3;
        return function(...t4) {
          return r3 = e3(...t4), n3(), r3;
        };
      }((t3) => (I2("", "", "", "TOTAL: " + E2()), j2.lock(), h2.log(`
${d2}: ${o2}: [${t3 ? "FAILED" : "SUCCESS"}]`), h2.table(j2.content()), t3)), {addRow: I2} = j2;
      return new Promise((n3, e3) => {
        if (A2.length === 0)
          return void e3(x2(new Error("NO ROUTE TO TEST")));
        const r3 = (n4) => {
          for (; A2.length; ) {
            const e4 = A2.shift();
            I2(t2.currentState(), `(${e4})`, n4), O2 = false;
          }
          ((t3) => {
            clearTimeout(v2), w2(), c3(), e3(t3);
          })(x2(new Error(n4)));
        };
        t2.inState(i2) && (S2 = false, w2 = $2());
        const {revoke: o3, fn: s2} = l((t3) => {
          v2 = setTimeout(() => {
            o3(), r3("TIMEOUT");
          }, u2), function(t4) {
            if (S2)
              I2(t4, "-", "PENDING");
            else {
              const n4 = A2[0];
              n4 === t4 ? (I2(t4, n4, O2 ? "REALIGNED" : "OKAY", T2()), O2 = false, A2.shift()) : (I2(t4, n4, "WRONG STATE", T2()), O2 = true, b2 += 1), T2 = F();
            }
          }(t3), S2 && t3 === i2 && (S2 = false, w2 = $2()), b2 > a2 && (o3(), r3("TOO MANY DEVIATIONS")), A2.length <= 0 && (o3(), ((...t4) => {
            clearTimeout(v2), w2(), c3(), n3(...t4);
          })(x2()));
        }), c3 = t2.onSwitching(s2);
      });
    }, exports.decomposeChart = b, exports.isStatebot = R, exports.routeIsPossible = function(t2, n2) {
      const e2 = M("routeIsPossible", {machine: R, route: s}, t2, n2);
      if (e2)
        throw TypeError(e2);
      const r2 = y(n2);
      return r2.every((n3, e3) => {
        if (e3 === r2.length - 1)
          return true;
        {
          const o2 = r2[e3 + 1];
          return t2.statesAvailableFromHere(n3).includes(o2);
        }
      });
    };
  });

  // node_modules/.pnpm/statebot@2.7.4/node_modules/statebot/dist/cjs/statebot.dev.js
  var require_statebot_dev = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function mitt(n) {
      return {all: n = n || new Map(), on: function(t, e) {
        var i = n.get(t);
        i && i.push(e) || n.set(t, [e]);
      }, off: function(t, e) {
        var i = n.get(t);
        i && i.splice(i.indexOf(e) >>> 0, 1);
      }, emit: function(t, e) {
        (n.get(t) || []).slice().map(function(n2) {
          n2(e);
        }), (n.get("*") || []).slice().map(function(n2) {
          n2(t, e);
        });
      }};
    }
    function isEventEmitter(obj) {
      return isObject(obj) && isFunction(obj.emit) && (isFunction(obj.addListener) || isFunction(obj.on)) && (isFunction(obj.removeListener) || isFunction(obj.off));
    }
    function isArray(obj) {
      return Array.isArray(obj);
    }
    function isFunction(obj) {
      return typeof obj === "function";
    }
    function isString(obj) {
      return typeof obj === "string";
    }
    function isObject(obj) {
      return typeof obj === "object";
    }
    function isPojo(obj) {
      if (obj === null || !isObject(obj)) {
        return false;
      }
      return Object.getPrototypeOf(obj) === Object.prototype;
    }
    function isTemplateLiteral(obj) {
      if (isString(obj)) {
        return true;
      }
      if (!isArray(obj)) {
        return false;
      }
      return obj.every(isString);
    }
    var typeErrorStringIfFnReturnsFalse = (argName, argTypeFn, arg) => {
      return argTypeFn(arg) ? void 0 : `${argTypeFn.name}(${argName}) did not return true`;
    };
    var typeErrorStringIfTypeOfFails = (argName, argType, arg) => {
      return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
    };
    var typeErrorStringFromArgument = (argMap, arg, index) => {
      const {argName, argType} = argMap[index];
      if (arg === void 0) {
        return `Argument undefined: "${argName}"`;
      }
      const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
      const errorDescs = permittedArgTypes.map((argType2) => isFunction(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)).filter(isString);
      const multipleTypesSpecified = permittedArgTypes.length > 1;
      const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
      if (shouldError) {
        return `${errorDescs.join("\n| ")}
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
      }
    };
    function ArgTypeError(errPrefix) {
      return function(fnName, typeMap, ...args) {
        const argMap = Object.entries(typeMap).map(([argName, argType]) => ({argName, argType}));
        const err = args.map((...args2) => typeErrorStringFromArgument(argMap, ...args2)).filter(isString);
        if (!err.length) {
          return;
        }
        const signature = Object.keys(typeMap).join(", ");
        return `
${errPrefix || ""}${fnName}(${signature}):
${err.map((err2) => `| ${err2}`).join("\n")}`;
      };
    }
    function wrapEmitter(events) {
      const emit = (eventName, ...args) => events.emit(eventName, args);
      const addListener = events.addListener ? (...args) => events.addListener(...args) : (...args) => events.on(...args);
      const removeListener = events.removeListener ? (...args) => events.removeListener(...args) : (...args) => events.off(...args);
      const wrapMap = new Map();
      function on(eventName, fn) {
        let fnMeta = wrapMap.get(fn);
        if (!fnMeta) {
          fnMeta = {
            handleEvent: (args = []) => fn(...[args].flat()),
            refCount: 0
          };
          wrapMap.set(fn, fnMeta);
        }
        fnMeta.refCount += 1;
        addListener(eventName, fnMeta.handleEvent);
      }
      function off(eventName, fn) {
        let fnMeta = wrapMap.get(fn);
        if (!fnMeta) {
          return;
        }
        removeListener(eventName, fnMeta.handleEvent);
        fnMeta.refCount -= 1;
        if (fnMeta.refCount === 0) {
          wrapMap.delete(fn);
        }
      }
      return {
        emit,
        on,
        off
      };
    }
    function uniq(input) {
      return input.reduce((acc, one) => acc.indexOf(one) === -1 ? [...acc, one] : acc, []);
    }
    function defer(fn, ...args) {
      const timer = setTimeout(fn, 0, ...args);
      return () => {
        clearTimeout(timer);
      };
    }
    function Defer(fn) {
      return (...args) => defer(fn, ...args);
    }
    function Once(fn) {
      const {revoke, fn: _fn} = Revokable(fn);
      let result;
      return function(...args) {
        result = _fn(...args);
        revoke();
        return result;
      };
    }
    function Revokable(fn) {
      let revoked = false;
      let result;
      return {
        fn: (...args) => {
          if (!revoked) {
            result = fn(...args);
          }
          return result;
        },
        revoke: () => {
          revoked = true;
        }
      };
    }
    function Pausables(startPaused, runFnWhenPaused) {
      runFnWhenPaused = runFnWhenPaused || function() {
      };
      let paused = !!startPaused;
      function Pausable(fn) {
        return (...args) => {
          if (paused) {
            runFnWhenPaused();
            return false;
          }
          return fn(...args);
        };
      }
      return {
        Pausable,
        paused: () => paused,
        pause: () => {
          paused = true;
        },
        resume: () => {
          paused = false;
        }
      };
    }
    function ReferenceCounter(name, kind, description, ...expecting) {
      const _refs = [...expecting].flat().reduce((acc, ref) => ({...acc, [ref]: 0}), {});
      function increase(ref) {
        _refs[ref] = countOf(ref) + 1;
        return () => {
          decrease(ref);
        };
      }
      function decrease(ref) {
        const count = countOf(ref) - 1;
        _refs[ref] = Math.max(count, 0);
      }
      function countOf(ref) {
        return _refs[ref] || 0;
      }
      function refs() {
        return {..._refs};
      }
      function table() {
        return Object.keys(_refs).sort().map((key) => [key, _refs[key]]).map(([ref, count]) => {
          return {
            [kind]: ref,
            refs: count || "None"
          };
        });
      }
      function toValue() {
        return {
          description: `Statebot[${name}]: ${description}:`,
          table: table()
        };
      }
      return {
        increase,
        decrease,
        countOf,
        toValue,
        refs
      };
    }
    function Logger(level, _console) {
      if (isString(level)) {
        level = {
          info: 3,
          log: 2,
          warn: 1,
          none: 0
        }[level] || 3;
      }
      function canWarn() {
        return level >= 1;
      }
      function canLog() {
        return level >= 2;
      }
      function canInfo() {
        return level >= 3;
      }
      const {info, table, log, warn, error} = _console || console;
      return {
        canWarn,
        canLog,
        canInfo,
        info: (...args) => {
          canInfo() && info(...args);
        },
        table: (...args) => {
          canLog() && table(...args);
        },
        log: (...args) => {
          canLog() && log(...args);
        },
        warn: (...args) => {
          canWarn() && warn(...args);
        },
        error: (...args) => {
          error(...args);
        }
      };
    }
    var rxCRLF = /[\r\n]/;
    var cxPipe = "|";
    var cxArrow = "->";
    var rxOperators = [cxPipe, cxArrow].map((rxUnsafe) => rxUnsafe.replace("|", "\\|")).join("|");
    var rxLineContinuations = new RegExp(`(${rxOperators})$`);
    var rxDisallowedCharacters = /[^a-z0-9!@#$%^&*:_+=<>|~.\x2D]/gi;
    var rxComment = /(\/\/[^\n\r]*)/;
    var argTypeError$1 = ArgTypeError("statebot.");
    function decomposeRoute(templateLiteral) {
      const err = argTypeError$1("decomposeRoute", {templateLiteral: isTemplateLiteral}, templateLiteral);
      if (err) {
        throw TypeError(err);
      }
      const lines = condensedLines(templateLiteral);
      const linesOfTokens = tokenisedLines(lines);
      const route = linesOfTokens.flat(2);
      return route;
    }
    function decomposeChart(chart) {
      const err = argTypeError$1("decomposeChart", {chart: isTemplateLiteral}, chart);
      if (err) {
        throw TypeError(err);
      }
      const lines = condensedLines(chart);
      const linesOfTokens = tokenisedLines(lines);
      const linesOfRoutes = linesOfTokens.map(decomposeRouteFromTokens).flat(1);
      const linesOfTransitions = linesOfRoutes.map(decomposeTransitionsFromRoute).flat(1);
      let emptyStateFound = false;
      const routeKeys = linesOfTransitions.map((route) => {
        if (route.includes("")) {
          emptyStateFound = true;
        }
        return route.join(cxArrow);
      });
      const filteredRoutes = uniq(routeKeys);
      const filteredStates = uniq(linesOfTokens.flat(3));
      return {
        transitions: filteredRoutes.map((route) => route.split(cxArrow)),
        routes: filteredRoutes,
        states: !emptyStateFound ? filteredStates.filter(Boolean) : filteredStates
      };
    }
    function linesFrom(strOrArr) {
      return [strOrArr].flat().reduce((acc, line) => [...acc, ...line.split(rxCRLF)], []);
    }
    function condensedLines(strOrArr) {
      const input = linesFrom(strOrArr);
      const output = [];
      let previousLineHasContinuation = false;
      const condenseLine = (condensedLine, line) => {
        const sanitisedLine = line.replace(rxComment, "").replace(rxDisallowedCharacters, "");
        if (!sanitisedLine) {
          return condensedLine;
        }
        previousLineHasContinuation = rxLineContinuations.test(sanitisedLine);
        if (previousLineHasContinuation) {
          return condensedLine + sanitisedLine;
        }
        output.push(condensedLine + sanitisedLine);
        return "";
      };
      const finalCondensedLine = input.reduce(condenseLine, "");
      if (previousLineHasContinuation || finalCondensedLine) {
        return [...output, finalCondensedLine];
      }
      return [...output];
    }
    function tokenisedLines(lines) {
      return lines.map((line) => line.split(cxArrow).map((str) => str.split(cxPipe)));
    }
    function decomposeRouteFromTokens(line) {
      const output = [];
      line.reduce((previousStates, states) => {
        if (previousStates === false) {
          return [...states];
        }
        output.push([previousStates, [...states]]);
        return [...states];
      }, false);
      return output;
    }
    function decomposeTransitionsFromRoute([fromStates, toStates]) {
      return fromStates.reduce((acc, fromState) => [
        ...acc,
        ...toStates.map((toState) => [fromState, toState])
      ], []);
    }
    var ON_EXITING = "onExiting";
    var ON_ENTERING = "onEntering";
    var ON_EXITED = "onExited";
    var ON_ENTERED = "onEntered";
    var ON_SWITCHING = "onSwitching";
    var ON_SWITCHED = "onSwitched";
    var INTERNAL_EVENTS = {
      [ON_SWITCHING]: "(ANY)state:changing",
      [ON_SWITCHED]: "(ANY)state:changed"
    };
    function Statebot2(name, options) {
      if (!isString(name)) {
        throw new TypeError("\nStatebot: Please specify a name for this machine");
      }
      const logPrefix = `Statebot[${name}]`;
      if (!isPojo(options)) {
        throw new TypeError(`
${logPrefix}: Please specify options for this machine`);
      }
      const {
        chart = void 0,
        logLevel = 3,
        historyLimit = 2
      } = options || {};
      const events = options.events === void 0 ? wrapEmitter(mitt()) : isEventEmitter(options.events) && wrapEmitter(options.events);
      if (!events) {
        throw new TypeError(`
${logPrefix}: Invalid event-emitter specified in options`);
      }
      const {states = [], routes = []} = chart ? decomposeChart(chart) : options;
      const {startIn = states[0]} = options;
      if (!states.includes(startIn)) {
        throw new Error(`${logPrefix}: Starting-state not in chart: "${startIn}"`);
      }
      const argTypeError2 = ArgTypeError(`${logPrefix}#`);
      const _console = Logger(logLevel, console);
      const {canWarn} = _console;
      const stateHistory = [startIn];
      const stateHistoryLimit = Math.max(historyLimit, 2);
      let transitionId = 0;
      const {pause, resume, paused, Pausable} = Pausables(false, () => _console.warn(`${logPrefix}: Ignoring callback, paused`));
      const internalEvents = wrapEmitter(mitt());
      const emitInternalEvent = Pausable(internalEvents.emit);
      function onInternalEvent(eventName, cb) {
        internalEvents.on(eventName, cb);
        return () => internalEvents.off(eventName, cb);
      }
      const statesHandled = ReferenceCounter(name, "states", "Listening for the following state-changes", [...states]);
      const routesHandled = ReferenceCounter(name, "transitions", "Listening for the following transitions", [...routes]);
      const eventsHandled = ReferenceCounter(name, "events", "Listening for the following events");
      function applyHitcher(hitcher, fnName) {
        const hitcherActions = isFunction(hitcher) ? hitcher({enter, emit, Enter, Emit}) : isPojo(hitcher) ? hitcher : null;
        if (!isPojo(hitcherActions)) {
          throw new TypeError(`Statebot[${name}]#${fnName}(): Expected an object, or a function that returns an object`);
        }
        const allStates = [];
        const allRoutes = [];
        const {
          transitionsForEvents,
          transitionsOnly
        } = decomposeHitcherActions(hitcherActions);
        const eventsMappedToTransitionConfigs = Object.entries(transitionsForEvents).reduce(decomposeTransitionsForEvent, {});
        const transitionConfigs = expandTransitions(transitionsOnly, canWarn);
        const allCleanupFns = Object.entries(eventsMappedToTransitionConfigs).map(createEventHandlerForTransition).concat(transitionConfigs.configs.map(runThenMethodOnTransition)).flat();
        if (canWarn()) {
          allStates.push(...transitionConfigs.states);
          allRoutes.push(...transitionConfigs.routes);
          const invalidStates = allStates.filter((state) => !states.includes(state));
          const invalidRoutes = allRoutes.filter((route) => !routes.includes(route));
          if (invalidStates.length) {
            _console.warn(`Statebot[${name}]#${fnName}(): Invalid states specified:
` + invalidStates.map((state) => `  > "${state}"`).join("\n"));
          }
          if (invalidRoutes.length) {
            _console.warn(`Statebot[${name}]#${fnName}(): Invalid transitions specified:
` + invalidRoutes.map((route) => `  > "${route}"`).join("\n"));
          }
        }
        return () => allCleanupFns.map((fn) => fn());
        function runThenMethodOnTransition(config) {
          const {fromState, toState, action} = config;
          const route = `${fromState}->${toState}`;
          return [
            routesHandled.increase(route),
            onInternalEvent(route, action)
          ];
        }
        function decomposeTransitionsForEvent(acc, [eventName, transitionsAndAction]) {
          const {
            states: states2,
            routes: routes2,
            configs
          } = expandTransitions(transitionsAndAction, canWarn);
          if (canWarn()) {
            allStates.push(...states2);
            allRoutes.push(...routes2);
          }
          return {
            ...acc,
            [eventName]: configs
          };
        }
        function ifStateThenEnterState({fromState, toState, action, args}) {
          return inState(fromState, () => {
            enter(toState, ...args);
            isFunction(action) && action(...args);
            return true;
          });
        }
        function createEventHandlerForTransition([eventName, configs]) {
          return [
            eventsHandled.increase(eventName),
            onEvent(eventName, (...args) => {
              const eventWasHandled = configs.map((config) => ({...config, args})).some(ifStateThenEnterState);
              if (!eventWasHandled) {
                transitionNoOp(`Event not handled: "${eventName}"`);
              }
            })
          ];
        }
      }
      function previousState() {
        return stateHistory[stateHistory.length - 2];
      }
      function currentState() {
        return stateHistory[stateHistory.length - 1];
      }
      function canTransitionTo(...states2) {
        const testStates = states2.flat();
        const err = argTypeError2("canTransitionTo", {state: isString}, testStates[0]);
        if (err) {
          throw new TypeError(err);
        }
        if (!testStates.length) {
          return false;
        }
        const nextStates = statesAvailableFromHere();
        return testStates.every((state) => nextStates.includes(state));
      }
      function statesAvailableFromHere(state) {
        const _state = state !== void 0 ? state : currentState();
        const err = argTypeError2("statesAvailableFromHere", {state: isString}, _state);
        if (err) {
          throw new TypeError(err);
        }
        return routes.reduce((acc, route) => {
          const [fromState, toState] = route.split(cxArrow).map((state2) => state2.trim());
          return fromState === _state ? [...acc, toState] : acc;
        }, []);
      }
      function _inState(state, anyOrFn, ...fnArgs) {
        const conditionMatches = currentState() === state;
        if (anyOrFn === void 0) {
          return conditionMatches;
        }
        if (!conditionMatches) {
          return null;
        }
        if (isFunction(anyOrFn)) {
          return anyOrFn(...fnArgs);
        }
        return anyOrFn;
      }
      function _inStateObject(stateObject, ...fnArgs) {
        const match = Object.entries(stateObject).find(([state]) => _inState(state));
        return match ? _inState(...match.concat(fnArgs)) : null;
      }
      function inState(...args) {
        const err = argTypeError2("inState", {state: [isString, isPojo]}, args[0]);
        if (err) {
          throw new TypeError(err);
        }
        return isPojo(args[0]) ? _inStateObject(...args) : _inState(...args);
      }
      const emit = Pausable((eventName, ...args) => {
        const err = argTypeError2("emit", {eventName: isString}, eventName);
        if (err) {
          throw new TypeError(err);
        }
        return events.emit(eventName, ...args);
      });
      const enter = Pausable((state, ...args) => {
        const err = argTypeError2("enter", {state: isString}, state);
        if (err) {
          throw new TypeError(err);
        }
        const inState2 = currentState();
        const toState = state;
        if (toState === inState2) {
          transitionNoOp(`Already in state: "${toState}"`);
          return false;
        }
        if (!states.includes(toState)) {
          transitionNoOp(`Invalid state "${toState}", not switching`);
          return false;
        }
        const nextRoute = `${inState2}->${toState}`;
        if (!routes.includes(nextRoute)) {
          transitionNoOp(`Invalid transition "${nextRoute}", not switching`);
          return false;
        }
        _console.info(`${logPrefix}: tId<${++transitionId}>: ${nextRoute}`);
        stateHistory.push(toState);
        if (stateHistory.length > stateHistoryLimit) {
          stateHistory.shift();
        }
        emitInternalEvent(INTERNAL_EVENTS[ON_SWITCHING], toState, inState2, ...args);
        emitInternalEvent(nextRoute, ...args);
        emitInternalEvent(INTERNAL_EVENTS[ON_SWITCHED], toState, inState2, ...args);
        return true;
      });
      function onEvent(eventName, cb) {
        const err = argTypeError2("onEvent", {eventName: isString, cb: isFunction}, eventName, cb);
        if (err) {
          throw new TypeError(err);
        }
        events.on(eventName, cb);
        return () => events.off(eventName, cb);
      }
      const switchMethods = Object.keys(INTERNAL_EVENTS).reduce((obj, methodName) => ({
        ...obj,
        [methodName]: (cb) => {
          const err = argTypeError2(methodName, {cb: isFunction}, cb);
          if (err) {
            throw new TypeError(err);
          }
          const decreaseRefCount = statesHandled.increase(INTERNAL_EVENTS[methodName]);
          const removeEvent = onInternalEvent(INTERNAL_EVENTS[methodName], cb);
          return () => {
            removeEvent();
            decreaseRefCount();
          };
        }
      }), {});
      const enterExitMethods = [
        [ON_EXITING, ON_SWITCHING],
        [ON_ENTERING, ON_SWITCHING],
        [ON_EXITED, ON_SWITCHED],
        [ON_ENTERED, ON_SWITCHED]
      ].reduce((obj, names) => {
        const [methodName, switchMethod] = names;
        const name2 = methodName.slice(2);
        const eventName = name2.toLowerCase();
        return {
          ...obj,
          [methodName]: (state, cb) => {
            const err = argTypeError2(methodName, {state: isString, cb: isFunction}, state, cb);
            if (err) {
              throw new TypeError(err);
            }
            const decreaseRefCounts = [
              statesHandled.increase(state),
              statesHandled.increase(`${state}:${eventName}`)
            ];
            const removeEvent = switchMethods[switchMethod]((toState, fromState, ...args) => {
              if (name2.indexOf("Exit") === 0) {
                state === fromState && cb(toState, ...args);
              } else {
                state === toState && cb(fromState, ...args);
              }
            });
            return () => {
              removeEvent();
              decreaseRefCounts.map((fn) => fn());
            };
          }
        };
      }, {});
      function Emit(eventName, ...curriedArgs) {
        const err = argTypeError2("Emit", {eventName: isString}, eventName);
        if (err) {
          throw new TypeError(err);
        }
        return (...args) => emit(eventName, ...[...curriedArgs, ...args]);
      }
      function Enter(state, ...curriedArgs) {
        const err = argTypeError2("Enter", {state: isString}, state);
        if (err) {
          throw new TypeError(err);
        }
        return (...args) => enter(state, ...[...curriedArgs, ...args]);
      }
      function _InState(state, anyOrFn, ...curriedFnArgs) {
        return (...fnArgs) => inState(state, anyOrFn, ...[...curriedFnArgs, ...fnArgs]);
      }
      function _InStateObject(stateObject, ...curriedFnArgs) {
        return (...fnArgs) => inState(stateObject, ...[...curriedFnArgs, ...fnArgs]);
      }
      function InState(...args) {
        const err = argTypeError2("InState", {state: [isString, isPojo]}, args[0]);
        if (err) {
          throw new TypeError(err);
        }
        return isPojo(args[0]) ? _InStateObject(...args) : _InState(...args);
      }
      function reset() {
        _console.warn(`${logPrefix}: State-machine reset!`);
        stateHistory.length = 0;
        stateHistory.push(startIn);
      }
      function transitionNoOp(message) {
        const lastState = previousState();
        const inState2 = currentState();
        const prevRoute = `${lastState === void 0 ? "[undefined]" : lastState}->${inState2}`;
        const availableStates = statesAvailableFromHere();
        if (!availableStates.length) {
          _console.info(`${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > There are no states available from "${inState2}"`);
        } else {
          _console.info(`${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > From "${inState2}", valid states are: [${availableStates.map((state) => `"${state}"`).join(", ")}]`);
        }
      }
      function inspect() {
        return {
          states: statesHandled.refs(),
          transitions: routesHandled.refs(),
          events: eventsHandled.refs()
        };
      }
      function info() {
        _console.log(`${logPrefix}: Information about this state-machine`);
        logRefCounterInfo(statesHandled);
        logRefCounterInfo(routesHandled);
        logRefCounterInfo(eventsHandled);
      }
      function logRefCounterInfo(refCounter) {
        const {description, table} = refCounter.toValue();
        _console.log(description);
        if (table.length) {
          _console.table(table);
        } else {
          _console.log("  > No information");
        }
      }
      return {
        __STATEBOT__: 1,
        canTransitionTo,
        currentState,
        emit,
        Emit,
        enter,
        Enter,
        history: () => [...stateHistory],
        info: () => info(),
        inspect: () => inspect(),
        inState,
        InState,
        name: () => name,
        onEntered: enterExitMethods[ON_ENTERED],
        onEntering: enterExitMethods[ON_ENTERING],
        onEvent,
        onExited: enterExitMethods[ON_EXITED],
        onExiting: enterExitMethods[ON_EXITING],
        onSwitched: switchMethods[ON_SWITCHED],
        onSwitching: switchMethods[ON_SWITCHING],
        onTransitions: (transitions) => applyHitcher(transitions, "onTransitions"),
        pause,
        paused,
        performTransitions: (transitions) => applyHitcher(transitions, "performTransitions"),
        previousState,
        reset,
        resume,
        statesAvailableFromHere
      };
    }
    function decomposeHitcherActions(hitcherActions) {
      const transitionsForEvents = {};
      const transitionsOnly = [];
      Object.entries(hitcherActions).map(([routeChart, actionFnOrConfigObj]) => {
        if (isFunction(actionFnOrConfigObj)) {
          transitionsOnly.push({routeChart, action: actionFnOrConfigObj});
          return;
        }
        if (!isPojo(actionFnOrConfigObj)) {
          return;
        }
        const {on: _on, then: _then} = actionFnOrConfigObj;
        const hasValidEventNames = isString(_on) || isArray(_on);
        if (hasValidEventNames) {
          const eventNames = [_on].flat();
          eventNames.map((name) => {
            transitionsForEvents[name] = transitionsForEvents[name] || [];
            transitionsForEvents[name].push({routeChart, action: _then});
          });
          return;
        }
        if (isFunction(_then)) {
          transitionsOnly.push({routeChart, action: actionFnOrConfigObj});
        }
      });
      return {transitionsForEvents, transitionsOnly};
    }
    function expandTransitions(configs, canWarn) {
      const allStates = [];
      const allRoutes = [];
      const _configs = configs.reduce((acc, config) => {
        const {routeChart, action} = config;
        const {states, routes, transitions} = decomposeChart(routeChart);
        if (canWarn()) {
          allStates.push(...states);
          allRoutes.push(...routes);
        }
        return [
          ...acc,
          ...transitions.map(([fromState, toState]) => ({fromState, toState, action}))
        ];
      }, []);
      return {
        configs: _configs,
        states: allStates,
        routes: allRoutes
      };
    }
    function isStatebot(object) {
      return isPojo(object) && typeof object.__STATEBOT__ === "number";
    }
    var argTypeError = ArgTypeError("statebot.");
    function routeIsPossible(machine, route) {
      const err = argTypeError("routeIsPossible", {machine: isStatebot, route: isTemplateLiteral}, machine, route);
      if (err) {
        throw TypeError(err);
      }
      const _route = decomposeRoute(route);
      return _route.every((state, index) => {
        if (index === _route.length - 1) {
          return true;
        } else {
          const nextState = _route[index + 1];
          const availableStates = machine.statesAvailableFromHere(state);
          const passes = availableStates.includes(nextState);
          return passes;
        }
      });
    }
    var assertionId = 0;
    function assertRoute(machine, expectedRoute, options) {
      const err = argTypeError("assertRoute", {machine: isStatebot, expectedRoute: isTemplateLiteral}, machine, expectedRoute);
      if (err) {
        throw TypeError(err);
      }
      assertionId += 1;
      const {
        description = "Assertion complete",
        fromState = "",
        run = () => {
        },
        permittedDeviations = 0,
        timeoutInMs = 1e3,
        logLevel = 3
      } = options || {};
      const console2 = Logger(logLevel);
      const prefix = `Statebot[${machine.name()}]: aId<${assertionId}>`;
      const route = decomposeRoute(expectedRoute);
      console2.log(`
${prefix}: Asserting route: [${route.join(" > ")}]`);
      console2.log(`${prefix}: > Assertion will start from state: "${fromState}"`);
      const fromStateActionFn = Defer(run);
      let removeFromStateActionFn = () => {
      };
      const totalTimeTaken = TimeTaken();
      let stateTimeTaken = TimeTaken();
      let assertionTimeoutTimer;
      let deviations = 0;
      let pending = true;
      let unexpected = false;
      const consumeRoute = [...route];
      const report = Table(["state", "expected", "info", "took"], ["center", "center", "left", "right"]);
      const finaliseReport = Once((err2) => {
        addRow("", "", "", "TOTAL: " + totalTimeTaken());
        report.lock();
        console2.log(`
${prefix}: ${description}: [${err2 ? "FAILED" : "SUCCESS"}]`);
        console2.table(report.content());
        return err2;
      });
      const {addRow} = report;
      function enteredState(state) {
        if (pending) {
          addRow(state, "-", "PENDING");
        } else {
          const expectedState = consumeRoute[0];
          if (expectedState === state) {
            addRow(state, expectedState, unexpected ? "REALIGNED" : "OKAY", stateTimeTaken());
            unexpected = false;
            consumeRoute.shift();
          } else {
            addRow(state, expectedState, "WRONG STATE", stateTimeTaken());
            unexpected = true;
            deviations += 1;
          }
          stateTimeTaken = TimeTaken();
        }
      }
      return new Promise((resolve, reject) => {
        if (consumeRoute.length === 0) {
          reject(finaliseReport(new Error("NO ROUTE TO TEST")));
          return;
        }
        const clearTimeoutAndResolve = (...args) => {
          clearTimeout(assertionTimeoutTimer);
          removeFromStateActionFn();
          removeOnSwitchingListener();
          resolve(...args);
        };
        const clearTimeoutAndReject = (err2) => {
          clearTimeout(assertionTimeoutTimer);
          removeFromStateActionFn();
          removeOnSwitchingListener();
          reject(err2);
        };
        const bailout = (message) => {
          while (consumeRoute.length) {
            const expectedState = consumeRoute.shift();
            addRow(machine.currentState(), `(${expectedState})`, message);
            unexpected = false;
          }
          clearTimeoutAndReject(finaliseReport(new Error(message)));
        };
        if (machine.inState(fromState)) {
          pending = false;
          removeFromStateActionFn = fromStateActionFn();
        }
        const {revoke, fn} = Revokable((state) => {
          assertionTimeoutTimer = setTimeout(() => {
            revoke();
            bailout("TIMEOUT");
          }, timeoutInMs);
          enteredState(state);
          if (pending && state === fromState) {
            pending = false;
            removeFromStateActionFn = fromStateActionFn();
          }
          if (deviations > permittedDeviations) {
            revoke();
            bailout("TOO MANY DEVIATIONS");
          }
          if (consumeRoute.length <= 0) {
            revoke();
            clearTimeoutAndResolve(finaliseReport());
          }
        });
        const removeOnSwitchingListener = machine.onSwitching(fn);
      });
    }
    function Table(columns, alignments) {
      columns = columns || [];
      alignments = alignments || [];
      const table = [];
      const alignment = columns.map((_, index) => alignments[index] || "center");
      let locked = false;
      function lock() {
        locked = true;
      }
      function addRow(...args) {
        if (locked) {
          return;
        }
        const obj = columns.reduce((acc, col, index) => {
          const row = args[index] || "";
          return {
            ...acc,
            [col]: row
          };
        }, {});
        table.push(obj);
      }
      function colSizes() {
        return table.reduce((acc, row) => columns.map((col, index) => Math.max(row[col].length, acc[index])), columns.map(() => 0));
      }
      function content() {
        const sizes = colSizes();
        function formatField(value, index) {
          const size = sizes[index];
          const align = alignment[index];
          if (align === "left") {
            return value.padEnd(size);
          }
          if (align === "right") {
            return value.padStart(size);
          }
          return value;
        }
        const output = table.reduce((acc, row) => {
          const formattedRow = columns.reduce((acc2, col, index) => ({
            ...acc2,
            [col]: formatField(row[col], index)
          }), {});
          return [...acc, formattedRow];
        }, []);
        return output;
      }
      return {
        lock,
        addRow,
        content
      };
    }
    function TimeTaken() {
      const startTime = Date.now();
      function fmt(num, digits) {
        return num.toFixed(digits).replace(/\.0+$/, "");
      }
      return function() {
        const duration = Date.now() - startTime;
        if (duration < 500) {
          return `${fmt(duration)} ms`;
        } else if (duration < 5e3) {
          return `${fmt(duration / 1e3, 2)} s `;
        } else if (duration < 6e4) {
          return `${fmt(duration / 1e3, 1)} s `;
        } else {
          return `${fmt(duration / 1e3 / 60, 1)} m `;
        }
      };
    }
    exports.Statebot = Statebot2;
    exports.assertRoute = assertRoute;
    exports.decomposeChart = decomposeChart;
    exports.isStatebot = isStatebot;
    exports.routeIsPossible = routeIsPossible;
  });

  // node_modules/.pnpm/statebot@2.7.4/node_modules/statebot/index.js
  var require_statebot = __commonJS((exports, module) => {
    "use strict";
    if (typeof process !== "undefined" && true) {
      module.exports = require_statebot_min();
    } else {
      module.exports = require_statebot_dev();
    }
  });

  // src/common/cjs/regexp.js
  var require_regexp = __commonJS((exports, module) => {
    function memoize(fn, cache = new Map()) {
      return (x) => cache.has(x) ? cache.get(x) : cache.set(x, fn(x)).get(x);
    }
    var makeRegExpFromWildcardString3 = memoize((str) => {
      if (!str.length) {
        throw new Error("String should not be empty");
      }
      const sanitized = str.split("*").map((x) => x.trim()).map(escapeStringForRegExp);
      const rxString = sanitized.join("(.*)");
      switch (true) {
        case sanitized.length === 1:
          return new RegExp(`^${rxString}$`);
        case sanitized[0] !== "":
          return new RegExp(`^${rxString}`);
        case sanitized[sanitized.length - 1] !== "":
          return new RegExp(`${rxString}$`);
      }
      return new RegExp(rxString);
    });
    function escapeStringForRegExp(string) {
      if (typeof string !== "string") {
        throw new TypeError("Expected string to be passed-in");
      }
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    module.exports = {
      memoize,
      makeRegExpFromWildcardString: makeRegExpFromWildcardString3,
      escapeStringForRegExp
    };
  });

  // src/main.js
  var import_spark_md5 = __toModule(require_spark_md5());
  var import_jmespath = __toModule(require_jmespath());

  // node_modules/.pnpm/fflate@0.6.10/node_modules/fflate/esm/browser.js
  var ch2 = {};
  var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c], {type: "text/javascript"}))));
    w.onerror = function(e) {
      return cb(e.error, null);
    };
    w.onmessage = function(e) {
      return cb(null, e.data);
    };
    w.postMessage(msg, transfer);
    return w;
  };
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var u32 = Uint32Array;
  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return [b, r];
  };
  var _a = freb(fleb, 2);
  var fl = _a[0];
  var revfl = _a[1];
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b[0];
  var revfd = _b[1];
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    x = (i & 43690) >>> 1 | (i & 21845) << 1;
    x = (x & 52428) >>> 2 | (x & 13107) << 2;
    x = (x & 61680) >>> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
  }
  var x;
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l = new u16(mb);
    for (; i < s; ++i)
      ++l[cd[i] - 1];
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
      le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          var sv = i << 4 | cd[i];
          var r_1 = mb - cd[i];
          var v = le[cd[i] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >>> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var flm = /* @__PURE__ */ hMap(flt, 9, 0);
  var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
  var shft = function(p) {
    return (p / 8 | 0) + (p & 7 && 1);
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
  };
  var wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
  };
  var wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
  };
  var hTree = function(d, mb) {
    var t = [];
    for (var i = 0; i < d.length; ++i) {
      if (d[i])
        t.push({s: i, f: d[i]});
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
      return [et, 0];
    if (s == 1) {
      var v = new u8(t[0].s + 1);
      v[t[0].s] = 1;
      return [v, 1];
    }
    t.sort(function(a, b) {
      return a.f - b.f;
    });
    t.push({s: -1, f: 25001});
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {s: -1, f: l.f + r.f, l, r};
    while (i1 != s - 1) {
      l = t[t[i0].f < t[i2].f ? i0++ : i2++];
      r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
      t[i1++] = {s: -1, f: l.f + r.f, l, r};
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
      if (t2[i].s > maxSym)
        maxSym = t2[i].s;
    }
    var tr = new u16(maxSym + 1);
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
      var i = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t2.sort(function(a, b) {
        return tr[b.s] - tr[a.s] || a.f - b.f;
      });
      for (; i < s; ++i) {
        var i2_1 = t2[i].s;
        if (tr[i2_1] > mb) {
          dt += cst - (1 << mbt - tr[i2_1]);
          tr[i2_1] = mb;
        } else
          break;
      }
      dt >>>= lft;
      while (dt > 0) {
        var i2_2 = t2[i].s;
        if (tr[i2_2] < mb)
          dt -= 1 << mb - tr[i2_2]++ - 1;
        else
          ++i;
      }
      for (; i >= 0 && dt; --i) {
        var i2_3 = t2[i].s;
        if (tr[i2_3] == mb) {
          --tr[i2_3];
          ++dt;
        }
      }
      mbt = mb;
    }
    return [new u8(tr), mbt];
  };
  var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
  };
  var lc = function(c) {
    var s = c.length;
    while (s && !c[--s])
      ;
    var cl = new u16(++s);
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
      cl[cli++] = v;
    };
    for (var i = 1; i <= s; ++i) {
      if (c[i] == cln && i != s)
        ++cls;
      else {
        if (!cln && cls > 2) {
          for (; cls > 138; cls -= 138)
            w(32754);
          if (cls > 2) {
            w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
            cls = 0;
          }
        } else if (cls > 3) {
          w(cln), --cls;
          for (; cls > 6; cls -= 6)
            w(8304);
          if (cls > 2)
            w(cls - 3 << 5 | 8208), cls = 0;
        }
        while (cls--)
          w(cln);
        cls = 1;
        cln = c[i];
      }
    }
    return [cl.subarray(0, cli), s];
  };
  var clen = function(cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
      l += cf[i] * cl[i];
    return l;
  };
  var wfblk = function(out, pos, dat) {
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
      out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
  };
  var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a2 = hTree(lf, 15), dlt = _a2[0], mlb = _a2[1];
    var _b2 = hTree(df, 15), ddt = _b2[0], mdb = _b2[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
      lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
      lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
      ;
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
      return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
      lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
      var llm = hMap(lct, mlcb, 0);
      wbits(out, p, nlc - 257);
      wbits(out, p + 5, ndc - 1);
      wbits(out, p + 10, nlcc - 4);
      p += 14;
      for (var i = 0; i < nlcc; ++i)
        wbits(out, p + 3 * i, lct[clim[i]]);
      p += 3 * nlcc;
      var lcts = [lclt, lcdt];
      for (var it = 0; it < 2; ++it) {
        var clct = lcts[it];
        for (var i = 0; i < clct.length; ++i) {
          var len = clct[i] & 31;
          wbits(out, p, llm[len]), p += lct[len];
          if (len > 15)
            wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
        }
      }
    } else {
      lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
      if (syms[i] > 255) {
        var len = syms[i] >>> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7)
          wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
        var dst = syms[i] & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3)
          wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
      } else {
        wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
      }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
  };
  var deo = /* @__PURE__ */ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var et = /* @__PURE__ */ new u8(0);
  var dflt = function(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
      for (var i = 0; i <= s; i += 65535) {
        var e = i + 65535;
        if (e < s) {
          pos = wfblk(w, pos, dat.subarray(i, e));
        } else {
          w[i] = lst;
          pos = wfblk(w, pos, dat.subarray(i, s));
        }
      }
    } else {
      var opt = deo[lvl - 1];
      var n = opt >>> 13, c = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev = new u16(32768), head = new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
      var hsh = function(i2) {
        return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
      };
      var syms = new u32(25e3);
      var lf = new u16(288), df = new u16(32);
      var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
      for (; i < s; ++i) {
        var hv = hsh(i);
        var imod = i & 32767, pimod = head[hv];
        prev[imod] = pimod;
        head[hv] = imod;
        if (wi <= i) {
          var rem = s - i;
          if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
            pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
            li = lc_1 = eb = 0, bs = i;
            for (var j = 0; j < 286; ++j)
              lf[j] = 0;
            for (var j = 0; j < 30; ++j)
              df[j] = 0;
          }
          var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
          if (rem > 2 && hv == hsh(i - dif)) {
            var maxn = Math.min(n, rem) - 1;
            var maxd = Math.min(32767, i);
            var ml = Math.min(258, rem);
            while (dif <= maxd && --ch_1 && imod != pimod) {
              if (dat[i + l] == dat[i + l - dif]) {
                var nl = 0;
                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                  ;
                if (nl > l) {
                  l = nl, d = dif;
                  if (nl > maxn)
                    break;
                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;
                  for (var j = 0; j < mmd; ++j) {
                    var ti = i - dif + j + 32768 & 32767;
                    var pti = prev[ti];
                    var cd = ti - pti + 32768 & 32767;
                    if (cd > md)
                      md = cd, pimod = ti;
                  }
                }
              }
              imod = pimod, pimod = prev[imod];
              dif += imod - pimod + 32768 & 32767;
            }
          }
          if (d) {
            syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
            var lin = revfl[l] & 31, din = revfd[d] & 31;
            eb += fleb[lin] + fdeb[din];
            ++lf[257 + lin];
            ++df[din];
            wi = i + l;
            ++lc_1;
          } else {
            syms[li++] = dat[i];
            ++lf[dat[i]];
          }
        }
      }
      pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
      if (!lst && pos & 7)
        pos = wfblk(w, pos + 1, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
  };
  var crct = /* @__PURE__ */ function() {
    var t = new Int32Array(256);
    for (var i = 0; i < 256; ++i) {
      var c = i, k = 9;
      while (--k)
        c = (c & 1 && -306674912) ^ c >>> 1;
      t[i] = c;
    }
    return t;
  }();
  var crc = function() {
    var c = -1;
    return {
      p: function(d) {
        var cr = c;
        for (var i = 0; i < d.length; ++i)
          cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
        c = cr;
      },
      d: function() {
        return ~c;
      }
    };
  };
  var dopt = function(dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
  };
  var mrg = function(a, b) {
    var o = {};
    for (var k in a)
      o[k] = a[k];
    for (var k in b)
      o[k] = b[k];
    return o;
  };
  var wcln = function(fn, fnStr, td2) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/ /g, "").split(",");
    for (var i = 0; i < dt.length; ++i) {
      var v = dt[i], k = ks[i];
      if (typeof v == "function") {
        fnStr += ";" + k + "=";
        var st_1 = v.toString();
        if (v.prototype) {
          if (st_1.indexOf("[native code]") != -1) {
            var spInd = st_1.indexOf(" ", 8) + 1;
            fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
          } else {
            fnStr += st_1;
            for (var t in v.prototype)
              fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
          }
        } else
          fnStr += st_1;
      } else
        td2[k] = v;
    }
    return [fnStr, td2];
  };
  var ch = [];
  var cbfs = function(v) {
    var tl = [];
    for (var k in v) {
      if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32)
        tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
    return tl;
  };
  var wrkr = function(fns, init, id, cb) {
    var _a2;
    if (!ch[id]) {
      var fnStr = "", td_1 = {}, m = fns.length - 1;
      for (var i = 0; i < m; ++i)
        _a2 = wcln(fns[i], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
      ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td2 = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
  };
  var bDflt = function() {
    return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
  };
  var pbf = function(msg) {
    return postMessage(msg, [msg.buffer]);
  };
  var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err, dat2) {
      w.terminate();
      cb(err, dat2);
    });
    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
    return function() {
      w.terminate();
    };
  };
  var wbytes = function(d, b, v) {
    for (; v; ++b)
      d[b] = v, v >>>= 8;
  };
  function deflate(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      throw "no callback";
    return cbify(data, opts, [
      bDflt
    ], function(ev) {
      return pbf(deflateSync(ev.data[0], ev.data[1]));
    }, 0, cb);
  }
  function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
  }
  var fltn = function(d, p, t, o) {
    for (var k in d) {
      var val = d[k], n = p + k;
      if (val instanceof u8)
        t[n] = [val, o];
      else if (Array.isArray(val))
        t[n] = [val[0], mrg(o, val[1])];
      else
        fltn(val, n + "/", t, o);
    }
  };
  var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, {stream: true});
    tds = 1;
  } catch (e) {
  }
  function strToU8(str, latin1) {
    if (latin1) {
      var ar_1 = new u8(str.length);
      for (var i = 0; i < str.length; ++i)
        ar_1[i] = str.charCodeAt(i);
      return ar_1;
    }
    if (te)
      return te.encode(str);
    var l = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w = function(v) {
      ar[ai++] = v;
    };
    for (var i = 0; i < l; ++i) {
      if (ai + 5 > ar.length) {
        var n = new u8(ai + 8 + (l - i << 1));
        n.set(ar);
        ar = n;
      }
      var c = str.charCodeAt(i);
      if (c < 128 || latin1)
        w(c);
      else if (c < 2048)
        w(192 | c >> 6), w(128 | c & 63);
      else if (c > 55295 && c < 57344)
        c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
      else
        w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
    }
    return slc(ar, 0, ai);
  }
  var exfl = function(ex) {
    var le = 0;
    if (ex) {
      for (var k in ex) {
        var l = ex[k].length;
        if (l > 65535)
          throw "extra field too long";
        le += l + 4;
      }
    }
    return le;
  };
  var wzh = function(d, b, f, fn, u, c, ce, co) {
    var fl2 = fn.length, ex = f.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
    if (ce != null)
      d[b++] = 20, d[b++] = f.os;
    d[b] = 20, b += 2;
    d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
      throw "date not in range 1980-2099";
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;
    if (c != null) {
      wbytes(d, b, f.crc);
      wbytes(d, b + 4, c);
      wbytes(d, b + 8, f.size);
    }
    wbytes(d, b + 12, fl2);
    wbytes(d, b + 14, exl), b += 16;
    if (ce != null) {
      wbytes(d, b, col);
      wbytes(d, b + 6, f.attrs);
      wbytes(d, b + 10, ce), b += 14;
    }
    d.set(fn, b);
    b += fl2;
    if (exl) {
      for (var k in ex) {
        var exf = ex[k], l = exf.length;
        wbytes(d, b, +k);
        wbytes(d, b + 2, l);
        d.set(exf, b + 4), b += 4 + l;
      }
    }
    if (col)
      d.set(co, b), b += col;
    return b;
  };
  var wzf = function(o, b, c, d, e) {
    wbytes(o, b, 101010256);
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
  };
  function zip(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      throw "no callback";
    var r = {};
    fltn(data, "", r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
      for (var i2 = 0; i2 < term.length; ++i2)
        term[i2]();
    };
    var cbf = function() {
      var out = new u8(tot + 22), oe = o, cdl = tot - o;
      tot = 0;
      for (var i2 = 0; i2 < slft; ++i2) {
        var f = files[i2];
        try {
          var l = f.c.length;
          wzh(out, tot, f, f.f, f.u, l);
          var badd = 30 + f.f.length + exfl(f.extra);
          var loc = tot + badd;
          out.set(f.c, loc);
          wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
        } catch (e) {
          return cb(e, null);
        }
      }
      wzf(out, o, files.length, cdl, oe);
      cb(null, out);
    };
    if (!lft)
      cbf();
    var _loop_1 = function(i2) {
      var fn = k[i2];
      var _a2 = r[fn], file = _a2[0], p = _a2[1];
      var c = crc(), size = file.length;
      c.p(file);
      var f = strToU8(fn), s = f.length;
      var com = p.comment, m = com && strToU8(com), ms = m && m.length;
      var exl = exfl(p.extra);
      var compression = p.level == 0 ? 0 : 8;
      var cbl = function(e, d) {
        if (e) {
          tAll();
          cb(e, null);
        } else {
          var l = d.length;
          files[i2] = mrg(p, {
            size,
            crc: c.d(),
            c: d,
            f,
            m,
            u: s != fn.length || m && com.length != ms,
            compression
          });
          o += 30 + s + exl + l;
          tot += 76 + 2 * (s + exl) + (ms || 0) + l;
          if (!--lft)
            cbf();
        }
      };
      if (s > 65535)
        cbl("filename too long", null);
      if (!compression)
        cbl(null, file);
      else if (size < 16e4) {
        try {
          cbl(null, deflateSync(file, p));
        } catch (e) {
          cbl(e, null);
        }
      } else
        term.push(deflate(file, p, cbl));
    };
    for (var i = 0; i < slft; ++i) {
      _loop_1(i);
    }
    return tAll;
  }

  // src/main.js
  var import_file_saver = __toModule(require_FileSaver_min());
  var import_statebot = __toModule(require_statebot());

  // src/common/esm/bus.js
  var import_regexp = __toModule(require_regexp());
  (function() {
    if (typeof window.CustomEvent === "function")
      return false;
    function CustomEvent2(event, params) {
      params = params || {bubbles: false, cancelable: false, detail: null};
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    window.CustomEvent = CustomEvent2;
  })();
  var messages = function() {
    let global2;
    try {
      global2 = window;
    } catch (e) {
      global2 = self;
    }
    const BUS = "message-bus";
    const eventMap = new Map();
    function emit(eventName, ...args) {
      const detail = {eventName, args, timestamp: Date.now()};
      const event = new CustomEvent(BUS, {detail});
      global2.dispatchEvent(event);
    }
    function on(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      const cbMap = eventMap.has(eventNameOrPattern) ? eventMap.get(eventNameOrPattern) : eventMap.set(eventNameOrPattern, new Map()).get(eventNameOrPattern);
      if (cbMap.has(cb)) {
        throw new Error("Callback already deals with this event");
      }
      const isPlainMatcher = typeof eventNameOrPattern === "string" && eventNameOrPattern.indexOf("*") === -1;
      const rx = typeof eventNameOrPattern === "string" ? (0, import_regexp.makeRegExpFromWildcardString)(eventNameOrPattern) : eventNameOrPattern instanceof RegExp ? eventNameOrPattern : null;
      if (rx === null) {
        const reason = `Could not figure-out eventNameOrPattern`;
        throw new Error(`${reason} = ${eventNameOrPattern}`);
      }
      const eventHandler = (event) => {
        const {eventName = "", args = []} = event?.detail || {};
        const runCallback = rx.test(eventName);
        if (runCallback) {
          if (isPlainMatcher) {
            cb(...args);
          } else {
            cb(eventName, ...args);
          }
        }
      };
      cbMap.set(cb, eventHandler);
      global2.addEventListener(BUS, eventHandler);
      return () => off(eventNameOrPattern, cb);
    }
    function off(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      if (!eventMap.has(eventNameOrPattern)) {
        throw new Error("No event-listener for that name/pattern");
      }
      const cbMap = eventMap.get(eventNameOrPattern);
      if (!cbMap.has(cb)) {
        throw new Error("Event callback not found for name/pattern");
      }
      const eventHandler = cbMap.get(cb);
      global2.removeEventListener(BUS, eventHandler);
      cbMap.delete(cb);
    }
    function once(eventNameOrPattern, cb) {
      const off2 = on(eventNameOrPattern, handle);
      return off2;
      function handle(...args) {
        cb(...args);
        off2();
      }
    }
    return {
      emit,
      on,
      off,
      once
    };
  }();

  // src/common/esm/ajacks.js
  var addAjaxListener = function() {
    attachAjaxEventRepeater();
    function onRx(eventName, options) {
      const {rx, cb} = options;
      if (typeof cb !== "function") {
        throw TypeError("Callback is not a function");
      }
      window.addEventListener(eventName, (event) => {
        const options2 = event.detail;
        const url = options2?.url ?? "";
        let runCallback = true;
        if (rx instanceof RegExp) {
          runCallback = rx.test(url);
        } else if (typeof rx === "string") {
          runCallback = rx.indexOf(url) !== -1;
        }
        if (runCallback) {
          cb(options2);
        }
      });
    }
    return function(options) {
      const {
        name,
        description,
        rx,
        onBeforeOpen,
        onBeforeSend,
        onFullResponse
      } = options || {};
      console.info(`AjaxListener[${name}]: ${description}`);
      if (typeof onBeforeOpen === "function") {
        onRx("ajax:onBeforeOpen", {rx, cb: onBeforeOpen});
      }
      if (typeof onBeforeSend === "function") {
        onRx("ajax:onBeforeSend", {rx, cb: onBeforeSend});
      }
      if (typeof onFullResponse === "function") {
        onRx("ajax:onFullResponse", {rx, cb: onFullResponse});
      }
    };
  }();
  function AjaxRequester(options) {
    const {name, description, method, url, setHeaders, setPayload} = options;
    const _method = (method || "get").toUpperCase();
    const _formatPayload = (...args) => {
      let data;
      if (typeof setPayload === "function") {
        data = setPayload(...args);
      } else {
        data = setPayload;
      }
      return data ? data : "";
    };
    const _setHeaders = (...args) => {
      let headers;
      if (typeof setHeaders === "function") {
        headers = setHeaders(...args);
      } else {
        headers = setHeaders;
      }
      return headers ? headers : {};
    };
    const requesterFn = (...args) => {
      console.info(`AjaxRequester[${name}]: ${description}`);
      const headers = _setHeaders(...args);
      const xhr = new XMLHttpRequest();
      xhr.open(_method, url);
      Object.keys(headers).forEach((header) => {
        const value = headers[header];
        if (header && value) {
          xhr.setRequestHeader(header, value);
        }
      });
      xhr.send(_formatPayload(...args));
    };
    return requesterFn;
  }
  function attachAjaxEventRepeater() {
    function emit(eventName, options) {
      const event = new CustomEvent(eventName, {detail: options});
      window.dispatchEvent(event);
    }
    const open2 = window.XMLHttpRequest.prototype.open;
    const send = window.XMLHttpRequest.prototype.send;
    function openReplacement(method, url, async = true, user, password) {
      this._options = {method, url, async, user, password, xhr: this};
      emit("ajax:onBeforeOpen", this._options);
      return open2.apply(this, arguments);
    }
    function sendReplacement(data) {
      this._options.data = data;
      if (this.onreadystatechange) {
        this._onreadystatechange = this.onreadystatechange;
      }
      this.onreadystatechange = onReadyStateChangeReplacement;
      emit("ajax:onBeforeSend", this._options);
      return send.apply(this, arguments);
    }
    function onReadyStateChangeReplacement() {
      if (this.readyState === 4) {
        this._options.status = this.status;
        this._options.responseText = this.responseText;
        emit("ajax:onFullResponse", this._options);
      }
      if (this._onreadystatechange) {
        return this._onreadystatechange.apply(this, arguments);
      }
    }
    window.XMLHttpRequest.prototype.open = openReplacement;
    window.XMLHttpRequest.prototype.send = sendReplacement;
    console.log("attachAjaxEventRepeater");
  }

  // src/main.js
  var import_regexp2 = __toModule(require_regexp());

  // src/common/obis/actions.js
  var actions = {
    OBIS_READY: "obis-ready",
    FIRST_RUN: "first-run",
    STORE_HYDRATED: "ui/store-hydrated",
    STORE_UPDATED: "ui/store-updated",
    plugin: {
      ALL_REGISTERED: "plugins/registered",
      AVAILABLE: "plugin/available",
      LOADED: "plugin/loaded"
    },
    ui: {
      LOADED: "ui/loaded",
      RENDERING: "ui/rendering",
      RENDERED: "ui/rendered",
      TOGGLE_OPEN: "ui/toggle-open",
      FIND_ACCOUNTS: "ui/find-accounts",
      FIND_STATEMENTS: "ui/find-statements",
      VIEW_STATEMENTS: "ui/view-statements",
      DOWNLOAD_STATEMENTS: "ui/download-statements",
      DOWNLOADED_STATEMENTS: "ui/downloaded-statements",
      UPDATE_PROGRESS_BAR: "ui/update-progress-bar",
      STATEMENTS_WINDOW_READY: "ui/statements-window-ready",
      STATEMENTS_WINDOW_CLOSED: "ui/statements-window-closed",
      CLOSE_STATEMENTS_WINDOW: "ui/close-statements-window",
      CHANGE_STATEMENT: "ui/change-statement"
    },
    get: {
      ACCOUNTS: "get/accounts",
      STATEMENTS: "get/statements",
      ENTRIES: "get/entries"
    },
    error: {
      ACCOUNTS: "error/accounts",
      STATEMENTS: "error/statements",
      ENTRIES: "error/entries"
    },
    got: {
      ACCOUNTS: "got/accounts",
      STATEMENTS: "got/statements",
      ENTRIES: "got/entries"
    },
    add: {
      ACCOUNTS: "add/accounts",
      STATEMENTS: "add/statements",
      ENTRIES: "add/entries"
    },
    update: {
      ACCOUNTS: "update/accounts",
      STATEMENTS: "update/statements",
      ENTRIES: "update/entries"
    }
  };

  // src/main.js
  messages.on(actions.ui.RENDERING, (m) => {
    m.Fragment = {
      view: function(vnode) {
        return vnode.children;
      }
    };
  });
  var obisFetchFlow = `

  // Happy path
  //
    [idle] -> getting-accounts ->
    [found-accounts] -> getting-statements ->
    [found-statements] -> getting-entries ->
    [found-entries]

  // Downloading Zip
  //
    found-entries -> [download-all] -> found-entries

  // Failures
  //
    (getting-accounts -> failed-accounts -> idle)
    (getting-statements -> failed-statements -> found-accounts)
    (getting-entries -> failed-entries -> found-statements)

`;
  var obisDefault = {rootPath: "."};
  var obis = window.obis || (window.obis = obisDefault);
  obis.pluginRegistry = new Map();
  var getPluginMeta = (name) => obis.pluginRegistry.has(name) ? obis.pluginRegistry.get(name) : obis.pluginRegistry.set(name, {}).get(name);
  addObisDependencies(obis);
  if (document.title !== "OBIS :: Statements Browser") {
    main();
  }
  function main() {
    if (obis.fromBookmarklet) {
      loadObisInChunks(obis);
    } else {
      loadObisAsBundle(obis);
    }
  }
  function addObisDependencies(obis2) {
    obis2.deps = {
      addAjaxListener,
      AjaxRequester,
      fflate: {zip, strToU8},
      jmespath: import_jmespath.default,
      messages,
      saveAs: import_file_saver.saveAs,
      SparkMD5: import_spark_md5.default,
      Statebot: import_statebot.Statebot
    };
    obis2.fetchMachine = (0, import_statebot.Statebot)("fetcher", {
      events: messages,
      startIn: false ? "found-entries" : "idle",
      chart: obisFetchFlow,
      logLevel: 2
    });
    obis2.makePluginAvailable = (name, pluginLoaderFn) => {
      console.log(`Registering plugin loader: ${name}`);
      const meta = getPluginMeta(name);
      meta.name = name;
      meta.loaderFn = pluginLoaderFn;
      messages.emit(actions.plugin.AVAILABLE, name);
    };
    obis2.registerPlugins = (plugins) => {
      plugins.map((plugin) => {
        const meta = getPluginMeta(plugin.name);
        meta.name = plugin.name;
        meta.description = plugin.description;
        meta.urls = plugin.urls;
      });
      messages.emit(actions.plugin.ALL_REGISTERED);
    };
  }
  function loadObisAsBundle(obis2) {
    messages.on(actions.plugin.AVAILABLE, (name) => {
      obis2.plugin = getPluginMeta(name);
      const {loaderFn} = obis2.plugin;
      if (typeof loaderFn !== "function") {
        const reason = `Plugin "${name}" did not provide a valid load-function: ${loaderFn}`;
        throw new TypeError(reason);
      }
      loaderFn();
      messages.emit(actions.plugin.LOADED);
    });
    let waitingOn = 2;
    function checkReady() {
      waitingOn -= 1;
      if (waitingOn === 0) {
        messages.emit(actions.OBIS_READY);
      }
    }
    messages.on(actions.ui.LOADED, checkReady);
    messages.on(actions.plugin.LOADED, checkReady);
  }
  function loadObisInChunks(obis2) {
    const {rootPath, pluginRegistry} = obis2;
    const loadQueue = [`${rootPath}/plugins.js`];
    const loadAfterPlugin = [`${rootPath}/ui.css`, `${rootPath}/ui.js`];
    function pluginValidForLocation(plugin) {
      const {urls = []} = plugin;
      const usePlugin = urls.some((url) => {
        const rx = typeof url === "string" ? (0, import_regexp2.makeRegExpFromWildcardString)(url) : url instanceof RegExp ? url : null;
        return rx?.test(location.href);
      });
      return usePlugin;
    }
    messages.on(actions.plugin.ALL_REGISTERED, () => {
      const plugins = Array.from(pluginRegistry.values());
      const pluginDetected = plugins.find(pluginValidForLocation);
      if (!pluginDetected) {
        const reason = "No plugin valid for current location. Nothing to do.";
        throw new Error(reason);
      }
      loadQueue.push(`${rootPath}/plugins/${pluginDetected.name}.js`);
    });
    messages.on(actions.plugin.AVAILABLE, (name) => {
      obis2.plugin = getPluginMeta(name);
      const {loaderFn} = obis2.plugin;
      if (typeof loaderFn !== "function") {
        const reason = `Plugin "${name}" did not provide a valid load-function: ${loaderFn}`;
        throw new TypeError(reason);
      }
      loaderFn();
      messages.emit(actions.plugin.LOADED);
    });
    messages.on(actions.plugin.LOADED, () => {
      loadQueue.push(...loadAfterPlugin);
    });
    messages.on(actions.ui.LOADED, () => {
      messages.emit(actions.OBIS_READY);
    });
    obis2.loadStyle = (url, cb) => {
      const el = document.createElement("link");
      el.href = url;
      el.rel = "stylesheet";
      el.type = "text/css";
      console.log("Loading: " + url);
      if (cb instanceof Function) {
        el.onload = () => cb(url, true);
        el.onerror = () => cb(url, false);
      }
      document.getElementsByTagName("head")[0].appendChild(el);
    };
    const loadQueuedFiles = () => {
      if (!loadQueue.length) {
        console.log("Done loading scripts");
        return;
      }
      const nextFile = loadQueue.shift();
      if (/\.css$/.test(nextFile)) {
        obis2.loadStyle(nextFile, (style, success) => {
          if (!success) {
            console.error("Could not load style: " + style);
          } else {
            loadQueuedFiles();
          }
        });
      } else {
        obis2.loadScript(nextFile, (script, success) => {
          if (!success) {
            console.error("Could not load script: " + script);
          } else {
            loadQueuedFiles();
          }
        });
      }
    };
    loadQueuedFiles();
  }
})();
