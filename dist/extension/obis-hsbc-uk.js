(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_spark_md5 = __commonJS({
    "node_modules/.pnpm/spark-md5@3.0.2/node_modules/spark-md5/spark-md5.js"(exports, module) {
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
        function cmn(q, a, b, x2, s, t) {
          a = add32(add32(a, q), add32(x2, t));
          return add32(a << s | a >>> 32 - s, b);
        }
        function md5cycle(x2, k) {
          var a = x2[0], b = x2[1], c = x2[2], d = x2[3];
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
          x2[0] = a + x2[0] | 0;
          x2[1] = b + x2[1] | 0;
          x2[2] = c + x2[2] | 0;
          x2[3] = d + x2[3] | 0;
        }
        function md5blk(s) {
          var md5blks = [], i2;
          for (i2 = 0; i2 < 64; i2 += 4) {
            md5blks[i2 >> 2] = s.charCodeAt(i2) + (s.charCodeAt(i2 + 1) << 8) + (s.charCodeAt(i2 + 2) << 16) + (s.charCodeAt(i2 + 3) << 24);
          }
          return md5blks;
        }
        function md5blk_array(a) {
          var md5blks = [], i2;
          for (i2 = 0; i2 < 64; i2 += 4) {
            md5blks[i2 >> 2] = a[i2] + (a[i2 + 1] << 8) + (a[i2 + 2] << 16) + (a[i2 + 3] << 24);
          }
          return md5blks;
        }
        function md51(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi;
          for (i2 = 64; i2 <= n; i2 += 64) {
            md5cycle(state, md5blk(s.substring(i2 - 64, i2)));
          }
          s = s.substring(i2 - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i2 = 0; i2 < length; i2 += 1) {
            tail[i2 >> 2] |= s.charCodeAt(i2) << (i2 % 4 << 3);
          }
          tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
          if (i2 > 55) {
            md5cycle(state, tail);
            for (i2 = 0; i2 < 16; i2 += 1) {
              tail[i2] = 0;
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
          var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi;
          for (i2 = 64; i2 <= n; i2 += 64) {
            md5cycle(state, md5blk_array(a.subarray(i2 - 64, i2)));
          }
          a = i2 - 64 < n ? a.subarray(i2 - 64) : new Uint8Array(0);
          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i2 = 0; i2 < length; i2 += 1) {
            tail[i2 >> 2] |= a[i2] << (i2 % 4 << 3);
          }
          tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
          if (i2 > 55) {
            md5cycle(state, tail);
            for (i2 = 0; i2 < 16; i2 += 1) {
              tail[i2] = 0;
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
        function hex(x2) {
          var i2;
          for (i2 = 0; i2 < x2.length; i2 += 1) {
            x2[i2] = rhex(x2[i2]);
          }
          return x2.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
          add32 = function(x2, y) {
            var lsw = (x2 & 65535) + (y & 65535), msw = (x2 >> 16) + (y >> 16) + (lsw >> 16);
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
          var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i2;
          for (i2 = 0; i2 < length; i2 += 1) {
            arr[i2] = str.charCodeAt(i2);
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
          var bytes = [], length = hex2.length, x2;
          for (x2 = 0; x2 < length - 1; x2 += 2) {
            bytes.push(parseInt(hex2.substr(x2, 2), 16));
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
          var length = this._buff.length, i2;
          for (i2 = 64; i2 <= length; i2 += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i2 - 64, i2)));
          }
          this._buff = this._buff.substring(i2 - 64);
          return this;
        };
        SparkMD52.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, i2, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
          for (i2 = 0; i2 < length; i2 += 1) {
            tail[i2 >> 2] |= buff.charCodeAt(i2) << (i2 % 4 << 3);
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
          var i2 = length, tmp, lo, hi;
          tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
          if (i2 > 55) {
            md5cycle(this._hash, tail);
            for (i2 = 0; i2 < 16; i2 += 1) {
              tail[i2] = 0;
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
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i2;
          this._length += arr.byteLength;
          for (i2 = 64; i2 <= length; i2 += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i2 - 64, i2)));
          }
          this._buff = i2 - 64 < length ? new Uint8Array(buff.buffer.slice(i2 - 64)) : new Uint8Array(0);
          return this;
        };
        SparkMD52.ArrayBuffer.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i2, ret;
          for (i2 = 0; i2 < length; i2 += 1) {
            tail[i2 >> 2] |= buff[i2] << (i2 % 4 << 3);
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
    }
  });
  var require_jmespath = __commonJS({
    "node_modules/.pnpm/jmespath@0.16.0/node_modules/jmespath/jmespath.js"(exports) {
      (function(exports2) {
        "use strict";
        function isArray3(obj) {
          if (obj !== null) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          } else {
            return false;
          }
        }
        function isObject2(obj) {
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
          if (isArray3(first) === true) {
            if (first.length !== second.length) {
              return false;
            }
            for (var i2 = 0; i2 < first.length; i2++) {
              if (strictDeepEqual(first[i2], second[i2]) === false) {
                return false;
              }
            }
            return true;
          }
          if (isObject2(first) === true) {
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
          } else if (isArray3(obj) && obj.length === 0) {
            return true;
          } else if (isObject2(obj)) {
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
          for (var i2 = 0; i2 < keys.length; i2++) {
            values.push(obj[keys[i2]]);
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
        var TYPE_NAME_TABLE = {
          0: "number",
          1: "any",
          2: "string",
          3: "array",
          4: "object",
          5: "boolean",
          6: "expression",
          7: "null",
          8: "Array<number>",
          9: "Array<string>"
        };
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
                  tokens.push({ type: TOK_AND, value: "&&", start });
                } else {
                  tokens.push({ type: TOK_EXPREF, value: "&", start });
                }
              } else if (stream[this._current] === "|") {
                start = this._current;
                this._current++;
                if (stream[this._current] === "|") {
                  this._current++;
                  tokens.push({ type: TOK_OR, value: "||", start });
                } else {
                  tokens.push({ type: TOK_PIPE, value: "|", start });
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
            return { type: TOK_NUMBER, value, start };
          },
          _consumeLBracket: function(stream) {
            var start = this._current;
            this._current++;
            if (stream[this._current] === "?") {
              this._current++;
              return { type: TOK_FILTER, value: "[?", start };
            } else if (stream[this._current] === "]") {
              this._current++;
              return { type: TOK_FLATTEN, value: "[]", start };
            } else {
              return { type: TOK_LBRACKET, value: "[", start };
            }
          },
          _consumeOperator: function(stream) {
            var start = this._current;
            var startingChar = stream[start];
            this._current++;
            if (startingChar === "!") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_NE, value: "!=", start };
              } else {
                return { type: TOK_NOT, value: "!", start };
              }
            } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_LTE, value: "<=", start };
              } else {
                return { type: TOK_LT, value: "<", start };
              }
            } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_GTE, value: ">=", start };
              } else {
                return { type: TOK_GT, value: ">", start };
              }
            } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_EQ, value: "==", start };
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
              var error = new Error(
                "Unexpected token type: " + t.type + ", value: " + t.value
              );
              error.name = "ParserError";
              throw error;
            }
            return ast;
          },
          _loadTokens: function(expression) {
            var lexer = new Lexer();
            var tokens = lexer.tokenize(expression);
            tokens.push({ type: TOK_EOF, value: "", start: expression.length });
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
                return { type: "Literal", value: token.value };
              case TOK_UNQUOTEDIDENTIFIER:
                return { type: "Field", name: token.value };
              case TOK_QUOTEDIDENTIFIER:
                var node = { type: "Field", name: token.value };
                if (this._lookahead(0) === TOK_LPAREN) {
                  throw new Error("Quoted identifier not allowed for function names.");
                }
                return node;
              case TOK_NOT:
                right = this.expression(bindingPower.Not);
                return { type: "NotExpression", children: [right] };
              case TOK_STAR:
                left = { type: "Identity" };
                right = null;
                if (this._lookahead(0) === TOK_RBRACKET) {
                  right = { type: "Identity" };
                } else {
                  right = this._parseProjectionRHS(bindingPower.Star);
                }
                return { type: "ValueProjection", children: [left, right] };
              case TOK_FILTER:
                return this.led(token.type, { type: "Identity" });
              case TOK_LBRACE:
                return this._parseMultiselectHash();
              case TOK_FLATTEN:
                left = { type: TOK_FLATTEN, children: [{ type: "Identity" }] };
                right = this._parseProjectionRHS(bindingPower.Flatten);
                return { type: "Projection", children: [left, right] };
              case TOK_LBRACKET:
                if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                  right = this._parseIndexExpression();
                  return this._projectIfSlice({ type: "Identity" }, right);
                } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
                  this._advance();
                  this._advance();
                  right = this._parseProjectionRHS(bindingPower.Star);
                  return {
                    type: "Projection",
                    children: [{ type: "Identity" }, right]
                  };
                }
                return this._parseMultiselectList();
              case TOK_CURRENT:
                return { type: TOK_CURRENT };
              case TOK_EXPREF:
                expression = this.expression(bindingPower.Expref);
                return { type: "ExpressionReference", children: [expression] };
              case TOK_LPAREN:
                var args = [];
                while (this._lookahead(0) !== TOK_RPAREN) {
                  if (this._lookahead(0) === TOK_CURRENT) {
                    expression = { type: TOK_CURRENT };
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
                  return { type: "Subexpression", children: [left, right] };
                }
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return { type: "ValueProjection", children: [left, right] };
              case TOK_PIPE:
                right = this.expression(bindingPower.Pipe);
                return { type: TOK_PIPE, children: [left, right] };
              case TOK_OR:
                right = this.expression(bindingPower.Or);
                return { type: "OrExpression", children: [left, right] };
              case TOK_AND:
                right = this.expression(bindingPower.And);
                return { type: "AndExpression", children: [left, right] };
              case TOK_LPAREN:
                var name = left.name;
                var args = [];
                var expression, node;
                while (this._lookahead(0) !== TOK_RPAREN) {
                  if (this._lookahead(0) === TOK_CURRENT) {
                    expression = { type: TOK_CURRENT };
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
                node = { type: "Function", name, children: args };
                return node;
              case TOK_FILTER:
                var condition = this.expression(0);
                this._match(TOK_RBRACKET);
                if (this._lookahead(0) === TOK_FLATTEN) {
                  right = { type: "Identity" };
                } else {
                  right = this._parseProjectionRHS(bindingPower.Filter);
                }
                return { type: "FilterProjection", children: [left, right, condition] };
              case TOK_FLATTEN:
                var leftNode = { type: TOK_FLATTEN, children: [left] };
                var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
                return { type: "Projection", children: [leftNode, rightNode] };
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
                }
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return { type: "Projection", children: [left, right] };
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
            var indexExpr = { type: "IndexExpression", children: [left, right] };
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
            return { type: "Comparator", name: comparator, children: [left, right] };
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
              right = { type: "Identity" };
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
            return { type: "MultiSelectList", children: expressions };
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
              node = { type: "KeyValuePair", name: keyName, value };
              pairs.push(node);
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              } else if (this._lookahead(0) === TOK_RBRACE) {
                this._match(TOK_RBRACE);
                break;
              }
            }
            return { type: "MultiSelectHash", children: pairs };
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
            var matched, current, result, first, second, field, left, right, collected, i2;
            switch (node.type) {
              case "Field":
                if (value !== null && isObject2(value)) {
                  field = value[node.name];
                  if (field === void 0) {
                    return null;
                  } else {
                    return field;
                  }
                }
                return null;
              case "Subexpression":
                result = this.visit(node.children[0], value);
                for (i2 = 1; i2 < node.children.length; i2++) {
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
                if (!isArray3(value)) {
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
                if (!isArray3(value)) {
                  return null;
                }
                var sliceParams = node.children.slice(0);
                var computed = this.computeSliceParams(value.length, sliceParams);
                var start = computed[0];
                var stop = computed[1];
                var step = computed[2];
                result = [];
                if (step > 0) {
                  for (i2 = start; i2 < stop; i2 += step) {
                    result.push(value[i2]);
                  }
                } else {
                  for (i2 = start; i2 > stop; i2 += step) {
                    result.push(value[i2]);
                  }
                }
                return result;
              case "Projection":
                var base = this.visit(node.children[0], value);
                if (!isArray3(base)) {
                  return null;
                }
                collected = [];
                for (i2 = 0; i2 < base.length; i2++) {
                  current = this.visit(node.children[1], base[i2]);
                  if (current !== null) {
                    collected.push(current);
                  }
                }
                return collected;
              case "ValueProjection":
                base = this.visit(node.children[0], value);
                if (!isObject2(base)) {
                  return null;
                }
                collected = [];
                var values = objValues(base);
                for (i2 = 0; i2 < values.length; i2++) {
                  current = this.visit(node.children[1], values[i2]);
                  if (current !== null) {
                    collected.push(current);
                  }
                }
                return collected;
              case "FilterProjection":
                base = this.visit(node.children[0], value);
                if (!isArray3(base)) {
                  return null;
                }
                var filtered = [];
                var finalResults = [];
                for (i2 = 0; i2 < base.length; i2++) {
                  matched = this.visit(node.children[2], base[i2]);
                  if (!isFalse(matched)) {
                    filtered.push(base[i2]);
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
                if (!isArray3(original)) {
                  return null;
                }
                var merged = [];
                for (i2 = 0; i2 < original.length; i2++) {
                  current = original[i2];
                  if (isArray3(current)) {
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
                for (i2 = 0; i2 < node.children.length; i2++) {
                  collected.push(this.visit(node.children[i2], value));
                }
                return collected;
              case "MultiSelectHash":
                if (value === null) {
                  return null;
                }
                collected = {};
                var child;
                for (i2 = 0; i2 < node.children.length; i2++) {
                  child = node.children[i2];
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
                for (i2 = 0; i2 < node.children.length; i2++) {
                  resolvedArgs.push(this.visit(node.children[i2], value));
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
            // name: [function, <signature>]
            // The <signature> can be:
            //
            // {
            //   args: [[type1, type2], [type1, type2]],
            //   variadic: true|false
            // }
            //
            // Each arg in the arg list is a list of valid types
            // (if the function is overloaded and supports multiple
            // types.  If the type is "any" then no type checking
            // occurs on the argument.  Variadic is optional
            // and if not provided is assumed to be false.
            abs: { _func: this._functionAbs, _signature: [{ types: [TYPE_NUMBER] }] },
            avg: { _func: this._functionAvg, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
            ceil: { _func: this._functionCeil, _signature: [{ types: [TYPE_NUMBER] }] },
            contains: {
              _func: this._functionContains,
              _signature: [
                { types: [TYPE_STRING, TYPE_ARRAY] },
                { types: [TYPE_ANY] }
              ]
            },
            "ends_with": {
              _func: this._functionEndsWith,
              _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }]
            },
            floor: { _func: this._functionFloor, _signature: [{ types: [TYPE_NUMBER] }] },
            length: {
              _func: this._functionLength,
              _signature: [{ types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT] }]
            },
            map: {
              _func: this._functionMap,
              _signature: [{ types: [TYPE_EXPREF] }, { types: [TYPE_ARRAY] }]
            },
            max: {
              _func: this._functionMax,
              _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }]
            },
            "merge": {
              _func: this._functionMerge,
              _signature: [{ types: [TYPE_OBJECT], variadic: true }]
            },
            "max_by": {
              _func: this._functionMaxBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            sum: { _func: this._functionSum, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
            "starts_with": {
              _func: this._functionStartsWith,
              _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }]
            },
            min: {
              _func: this._functionMin,
              _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }]
            },
            "min_by": {
              _func: this._functionMinBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            type: { _func: this._functionType, _signature: [{ types: [TYPE_ANY] }] },
            keys: { _func: this._functionKeys, _signature: [{ types: [TYPE_OBJECT] }] },
            values: { _func: this._functionValues, _signature: [{ types: [TYPE_OBJECT] }] },
            sort: { _func: this._functionSort, _signature: [{ types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER] }] },
            "sort_by": {
              _func: this._functionSortBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            join: {
              _func: this._functionJoin,
              _signature: [
                { types: [TYPE_STRING] },
                { types: [TYPE_ARRAY_STRING] }
              ]
            },
            reverse: {
              _func: this._functionReverse,
              _signature: [{ types: [TYPE_STRING, TYPE_ARRAY] }]
            },
            "to_array": { _func: this._functionToArray, _signature: [{ types: [TYPE_ANY] }] },
            "to_string": { _func: this._functionToString, _signature: [{ types: [TYPE_ANY] }] },
            "to_number": { _func: this._functionToNumber, _signature: [{ types: [TYPE_ANY] }] },
            "not_null": {
              _func: this._functionNotNull,
              _signature: [{ types: [TYPE_ANY], variadic: true }]
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
            for (var i2 = 0; i2 < signature.length; i2++) {
              typeMatched = false;
              currentSpec = signature[i2].types;
              actualType = this._getTypeName(args[i2]);
              for (var j = 0; j < currentSpec.length; j++) {
                if (this._typeMatches(actualType, currentSpec[j], args[i2])) {
                  typeMatched = true;
                  break;
                }
              }
              if (!typeMatched) {
                var expected = currentSpec.map(function(typeIdentifier) {
                  return TYPE_NAME_TABLE[typeIdentifier];
                }).join(",");
                throw new Error("TypeError: " + name + "() expected argument " + (i2 + 1) + " to be type " + expected + " but received type " + TYPE_NAME_TABLE[actualType] + " instead.");
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
                for (var i2 = 0; i2 < argValue.length; i2++) {
                  if (!this._typeMatches(
                    this._getTypeName(argValue[i2]),
                    subtype,
                    argValue[i2]
                  )) {
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
              for (var i2 = originalStr.length - 1; i2 >= 0; i2--) {
                reversedStr += originalStr[i2];
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
            for (var i2 = 0; i2 < inputArray.length; i2++) {
              sum += inputArray[i2];
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
            if (!isObject2(resolvedArgs[0])) {
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
            for (var i2 = 0; i2 < elements.length; i2++) {
              mapped.push(interpreter.visit(exprefNode, elements[i2]));
            }
            return mapped;
          },
          _functionMerge: function(resolvedArgs) {
            var merged = {};
            for (var i2 = 0; i2 < resolvedArgs.length; i2++) {
              var current = resolvedArgs[i2];
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
                for (var i2 = 1; i2 < elements.length; i2++) {
                  if (maxElement.localeCompare(elements[i2]) < 0) {
                    maxElement = elements[i2];
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
                for (var i2 = 1; i2 < elements.length; i2++) {
                  if (elements[i2].localeCompare(minElement) < 0) {
                    minElement = elements[i2];
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
            for (var i2 = 0; i2 < listToSum.length; i2++) {
              sum += listToSum[i2];
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
            for (var i2 = 0; i2 < keys.length; i2++) {
              values.push(obj[keys[i2]]);
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
            for (var i2 = 0; i2 < resolvedArgs.length; i2++) {
              if (this._getTypeName(resolvedArgs[i2]) !== TYPE_NULL) {
                return resolvedArgs[i2];
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
            var requiredType = this._getTypeName(
              interpreter.visit(exprefNode, sortedArray[0])
            );
            if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
              throw new Error("TypeError");
            }
            var that = this;
            var decorated = [];
            for (var i2 = 0; i2 < sortedArray.length; i2++) {
              decorated.push([i2, sortedArray[i2]]);
            }
            decorated.sort(function(a, b) {
              var exprA = interpreter.visit(exprefNode, a[1]);
              var exprB = interpreter.visit(exprefNode, b[1]);
              if (that._getTypeName(exprA) !== requiredType) {
                throw new Error(
                  "TypeError: expected " + requiredType + ", received " + that._getTypeName(exprA)
                );
              } else if (that._getTypeName(exprB) !== requiredType) {
                throw new Error(
                  "TypeError: expected " + requiredType + ", received " + that._getTypeName(exprB)
                );
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
            for (var i2 = 0; i2 < resolvedArray.length; i2++) {
              current = keyFunction(resolvedArray[i2]);
              if (current > maxNumber) {
                maxNumber = current;
                maxRecord = resolvedArray[i2];
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
            for (var i2 = 0; i2 < resolvedArray.length; i2++) {
              current = keyFunction(resolvedArray[i2]);
              if (current < minNumber) {
                minNumber = current;
                minRecord = resolvedArray[i2];
              }
            }
            return minRecord;
          },
          createKeyFunction: function(exprefNode, allowedTypes) {
            var that = this;
            var interpreter = this._interpreter;
            var keyFunc = function(x2) {
              var current = interpreter.visit(exprefNode, x2);
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
    }
  });
  var require_FileSaver_min = __commonJS({
    "node_modules/.pnpm/file-saver@2.0.5/node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
      (function(a, b) {
        if ("function" == typeof define && define.amd)
          define([], b);
        else if ("undefined" != typeof exports)
          b();
        else {
          b(), a.FileSaver = { exports: {} }.exports;
        }
      })(exports, function() {
        "use strict";
        function b(a2, b2) {
          return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
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
        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
          var i2 = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i2.createObjectURL(b2), setTimeout(function() {
            i2.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", "string" != typeof f2)
            navigator.msSaveOrOpenBlob(b(f2, h), g2);
          else if (d(f2))
            c(f2, g2, h);
          else {
            var i2 = document.createElement("a");
            i2.href = f2, i2.target = "_blank", setTimeout(function() {
              e(i2);
            });
          }
        } : function(b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
            return c(b2, d2, e2);
          var h = "application/octet-stream" === b2.type, i2 = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i2 || a) && "undefined" != typeof FileReader) {
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
        f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
      });
    }
  });
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.10.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var I = Object.defineProperty;
      var _ = Object.getOwnPropertyDescriptor;
      var j = Object.getOwnPropertyNames;
      var v = Object.getOwnPropertySymbols;
      var F = Object.prototype.hasOwnProperty;
      var L = Object.prototype.propertyIsEnumerable;
      var E = (t, n, e) => n in t ? I(t, n, { enumerable: true, configurable: true, writable: true, value: e }) : t[n] = e;
      var P = (t, n) => {
        for (var e in n || (n = {}))
          F.call(n, e) && E(t, e, n[e]);
        if (v)
          for (var e of v(n))
            L.call(n, e) && E(t, e, n[e]);
        return t;
      };
      var q = (t, n) => {
        var e = {};
        for (var o in t)
          F.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
        if (t != null && v)
          for (var o of v(t))
            n.indexOf(o) < 0 && L.call(t, o) && (e[o] = t[o]);
        return e;
      };
      var R = (t, n) => {
        for (var e in n)
          I(t, e, { get: n[e], enumerable: true });
      };
      var y = (t, n, e, o) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let r of j(n))
            !F.call(t, r) && r !== e && I(t, r, { get: () => n[r], enumerable: !(o = _(n, r)) || o.enumerable });
        return t;
      };
      var a = (t) => y(I({}, "__esModule", { value: true }), t);
      var yt = {};
      R(yt, { against: () => C, allOf: () => Q, anyOf: () => K, cata: () => Tt, deepEq: () => Mt, defined: () => Vt, empty: () => T, endsWith: () => Ct, eq: () => J, every: () => Lt, falsy: () => Yt, firstOf: () => qt, getIterationLimit: () => bt, gt: () => ht, gte: () => Ht, hasOwn: () => Qt, inRange: () => $t, includedIn: () => Jt, includes: () => Gt, instanceOf: () => gt, isArray: () => l, isDate: () => ft, isFunction: () => f, isIterable: () => B, isNumber: () => $, isPojo: () => g, isRegExp: () => x2, isStrictly: () => Kt, isString: () => b, lastOf: () => Rt, lt: () => zt, lte: () => Ut, match: () => vt, not: () => Et, otherwise: () => Dt, pluck: () => xt, setIterationLimit: () => Nt, some: () => Pt, spread: () => jt, startsWith: () => Bt, truthy: () => Xt, when: () => Ft });
      module.exports = a(yt);
      var d = {};
      R(d, { instanceOf: () => p, isArguments: () => h, isArray: () => tt, isDate: () => nt, isFormData: () => mt2, isFunction: () => z, isIterable: () => ut, isMap: () => it, isNumber: () => ot, isObject: () => H, isPojo: () => ct, isRegExp: () => rt, isSet: () => st, isString: () => et2 });
      var V = Object.prototype;
      var k = V.toString;
      var D = (t) => (n) => typeof n === t;
      var p = (t) => (n) => n instanceof t;
      var { isArray: tt } = Array;
      var h = (t) => k.call(t) === "[object Arguments]";
      var nt = (t) => p(Date)(t) && !isNaN(t);
      var z = D("function");
      var et2 = D("string");
      var ot = (t) => t === t && D("number")(t);
      var H = (t) => t !== null && D("object")(t);
      var rt = p(RegExp);
      var st = p(Set);
      var it = p(Map);
      var ct = (t) => t === null || !H(t) || h(t) ? false : Object.getPrototypeOf(t) === V;
      var ut = (t) => t != null && [t[Symbol.iterator], t.next].every(z);
      var mt2 = (t) => typeof FormData != "undefined" && p(FormData)(t);
      var { isArguments: lt, isArray: l, isDate: ft, isFunction: f, isNumber: $ } = d;
      var { isPojo: g, isRegExp: x2, isString: b, instanceOf: gt } = d;
      var { isMap: pt, isSet: Ot, isIterable: B, isFormData: wt } = d;
      var { keys: w, entries: St, assign: dt } = Object;
      var O = 2e4;
      var bt = () => O;
      var Nt = (t) => {
        let n = O;
        return O = t, () => O = n;
      };
      function vt(t) {
        return (...n) => C(...n)(t);
      }
      var C = (...t) => (n) => {
        let [e, o] = lt(n) ? [{}, Array.from(n)] : pt(n) || wt(n) ? [{ isMap: true }, n.entries()] : Ot(n) ? [{ isSet: true }, n.values()] : [{}, n];
        if (!B(o))
          return U(...t)(o).result;
        let [r, u] = t.reduce(([s, m], S) => It(S) ? [S, m] : [s, [...m, S]], [() => ({ value: () => {
        } }), []]), c = [];
        do {
          let { value: s, done: m } = o.next();
          if (m)
            return r().value();
          c.push(s);
          let { found: S, result: Z } = U(...u)(e.isSet ? s : e.isMap ? { key: s[0], value: s[1] } : [...c]);
          if (S)
            return Z;
        } while (c.length < O || e.isSet || e.isMap);
        throw new Error(`Hit iterationLimit: ${O}. Use setIterationLimit(Infinity) to disable.`);
      };
      var U = (...t) => {
        let n;
        return (e) => ({ found: !!t.find((r) => {
          let u = r(e), { matched: c, value: s } = u || {};
          return [c, s].every(f) ? c(e) && (n = s(e), true) : u && (n = u);
        }), result: n });
      };
      var G = Symbol("@@match-iz/otherwise");
      var It = (t) => (t == null ? void 0 : t[G]) === true;
      var Dt = (t) => {
        let n = (e) => ({ matched: () => true, value: () => f(t) ? t(e) : t });
        return n[G] = true, n;
      };
      var W = (t) => (n) => (e) => ({ matched: () => i2(t, e, (o) => e = o), value: () => f(n) ? b(e) && x2(t) ? n(...Wt(e.match(t))) : n(e) : n });
      var Ft = (...t) => {
        if (t.length === 1) {
          let [n] = t;
          return W(n);
        }
        if (t.length === 2) {
          let [n, e] = t;
          return W(n)(e);
        }
        if (t.length > 2) {
          let n = t.slice(-1)[0], e = t.slice(0, -1);
          return W(Q(e))(n);
        }
        throw new Error("Expected at least 1 argument");
      };
      var Wt = (t) => {
        let { groups: n } = t;
        return n ? [n, t] : [t];
      };
      var i2 = (t, n, e) => g(t) ? w(t).every((o) => i2(t[o], n == null ? void 0 : n[o], e)) : l(t) ? l(n) && t.length === n.length && t.every((o, r) => i2(o, n == null ? void 0 : n[r], e)) : f(t) ? t(n, e) : b(n) && x2(t) ? t.test(n) : t === n || [t, n].every(Number.isNaN);
      var xt = (...t) => (n, e) => t.length === 0 || (f(t[0]) ? t[0](n) : i2(t[0], n, e)) ? (e(n), true) : false;
      var At = (t, n) => [t, n].every(g) ? w(t).length === w(n).length : true;
      var J = (t) => (n, e) => At(t, n) && i2(t, n, e);
      var Mt = (t) => A(t, (n) => g(n) ? J(n) : n);
      var Et = (t) => (n, e) => !i2(t, n, e);
      var K = (...t) => (n, e) => t.flat().some((o) => i2(o, n, e));
      var Q = (...t) => (n, e) => t.flat().every((o) => i2(o, n, e));
      var Lt = (t) => Y((n) => n.every((e) => i2(t, e)));
      var Pt = (t) => Y((n) => n.some((e) => i2(t, e)));
      var qt = (...t) => M((n, e) => t.length <= n.length && i2(t, n.slice(0, t.length), e));
      var Rt = (...t) => M((n, e) => t.length <= n.length && i2(t, n.slice(n.length - t.length), e));
      var T = (t) => t !== t || !t && t !== 0 && t !== false || l(t) && !t.length || g(t) && !w(t).length;
      var Vt = (t) => !T(t);
      var ht = (t) => N((n) => n > t);
      var zt = (t) => N((n) => n < t);
      var Ht = (t) => N((n) => n >= t);
      var Ut = (t) => N((n) => n <= t);
      var $t = (t, n) => N((e) => e >= Math.min(t, n) && e <= Math.max(t, n));
      var Bt = (t) => X((n) => n.startsWith(t));
      var Ct = (t) => X((n) => n.endsWith(t));
      var Gt = (t) => M((n) => n.includes(t));
      var Jt = K;
      var Kt = (t) => (n) => n === t;
      var Qt = (...t) => (n) => g(n) && (([e, o]) => e.length && e.every((r) => o.includes(r)))([t.flat(), w(n)]);
      var Tt = (e) => {
        var o = e, { getValue: t } = o, n = q(o, ["getValue"]);
        return St(n).reduce((r, [u, c]) => dt(r, { [u]: (s) => (m) => ({ matched: () => c(m), value: () => f(s) ? s(t(m)) : s }) }), {});
      };
      var Xt = (t) => !!t;
      var Yt = (t) => !t;
      var Zt = (t) => (n, e) => (n[e] = A(n[e], t), n);
      var _t = (t) => (n) => A(n, t);
      var A = (t, n) => n(g(t) ? w(t).reduce(Zt(n), P({}, t)) : l(t) ? t.map(_t(n)) : t);
      var jt = (t) => new Proxy({}, { get: () => t });
      var X = (t) => (n) => b(n) && t(n);
      var N = (t) => (n) => $(n) && t(n);
      var Y = (t) => (n, e) => l(n) && t(n, e);
      var M = (t) => (n, e) => (l(n) || b(n)) && t(n, e);
    }
  });
  var require_fp = __commonJS({
    "src/common/cjs/fp.js"(exports, module) {
      function compose(...fns) {
        return (...x2) => fns.reduceRight((g, f) => [f(...g)], x2)[0];
      }
      function flow(...fns) {
        return (...x2) => fns.reduce((g, f) => [f(...g)], x2)[0];
      }
      function pipe(x2, ...fns) {
        return fns.reduce((g, f) => f(g), x2);
      }
      function flip(fn) {
        return (...x2) => (...y) => fn(...y)(...x2);
      }
      function do_(f) {
        return f();
      }
      function memo(fn) {
        const table = /* @__PURE__ */ new Map();
        return (x2) => table.has(x2) ? table.get(x2) : table.set(x2, fn(x2)).get(x2);
      }
      function cache(fn) {
        const cache2 = /* @__PURE__ */ new Map();
        return (x2) => cache2.has(x2) ? cache2.get(x2) : cache2.set(x2, fn(x2, invalidater(cache2, x2))).get(x2);
      }
      var invalidater = (cache2, x2) => () => cache2.delete(x2);
      function aside(fn) {
        return (x2) => (fn(x2), x2);
      }
      module.exports = {
        compose,
        pipe,
        flow,
        flip,
        do_,
        memo,
        cache,
        aside
      };
    }
  });
  var require_regexp = __commonJS({
    "src/common/cjs/regexp.js"(exports, module) {
      var { against: against2, when: when2, otherwise: otherwise2, isString: isString3 } = require_dist();
      var { pipe, flow, memo } = require_fp();
      var makeRegExpFromWildcardString3 = memo((str) => {
        if (!isString3(str) || !str.length) {
          throw new TypeError("Please pass a non-empty string");
        }
        return pipe(
          str.replace(rxConsecutiveWildcards(), "*").split("*").map((x2) => x2.trim()).map(escapeStringForRegExp),
          against2(
            when2(hasNoWildcards)(templateMatchExact),
            when2(hasNoWildcardAtStart)(flow(insertWildcards, templateMatchStart)),
            when2(hasNoWildcardAtEnd)(flow(insertWildcards, templateMatchEnd)),
            otherwise2(insertWildcards)
          ),
          ($) => new RegExp($)
        );
      });
      var rxEscape = () => /[.*+?^${}()|[\]\\]/g;
      var rxConsecutiveWildcards = () => /\*{2,}/g;
      var hasNoWildcards = (x2) => x2.length === 1;
      var hasNoWildcardAtStart = (x2) => x2.at(0) !== "";
      var hasNoWildcardAtEnd = (x2) => x2.at(-1) !== "";
      var insertWildcards = (x2) => x2.join("(.*)");
      var templateMatchExact = ([x2]) => `^${x2}$`;
      var templateMatchStart = (x2) => `^${x2}`;
      var templateMatchEnd = (x2) => `${x2}$`;
      function escapeStringForRegExp(str) {
        if (!isString3(str)) {
          throw new TypeError("Please pass a string");
        }
        return str.replace(rxEscape(), "\\$&");
      }
      module.exports = {
        makeRegExpFromWildcardString: makeRegExpFromWildcardString3,
        escapeStringForRegExp
      };
    }
  });
  var obisDefault = { rootPath: "." };
  var obis2 = window.obis || (window.obis = obisDefault);
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i2 = n.get(t);
      i2 ? i2.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i2 = n.get(t);
      i2 && (e ? i2.splice(i2.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i2 = n.get(t);
      i2 && i2.slice().map(function(n2) {
        n2(e);
      }), (i2 = n.get("*")) && i2.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }
  function isEventEmitter(obj) {
    return isObject(obj) && isFunction2(obj.emit) && (isFunction2(obj.addListener) || isFunction2(obj.on)) && (isFunction2(obj.removeListener) || isFunction2(obj.off));
  }
  isEventEmitter.displayName = "isEventEmitter";
  isArray2.displayName = "isUnset";
  function isArray2(obj) {
    return Array.isArray(obj);
  }
  isArray2.displayName = "isArray";
  function isArguments(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
  }
  isArguments.displayName = "isArguments";
  function isFunction2(obj) {
    return typeof obj === "function";
  }
  isFunction2.displayName = "isFunction";
  function isString2(obj) {
    return typeof obj === "string";
  }
  isString2.displayName = "isString";
  function isAllStrings(arr) {
    return isArray2(arr) && arr.every(isString2);
  }
  isAllStrings.displayName = "isAllStrings";
  function isUndefined(obj) {
    return obj === void 0;
  }
  isUndefined.displayName = "isUndefined";
  function isNull(obj) {
    return obj === null;
  }
  isNull.displayName = "isNull";
  function isNumber2(obj) {
    return typeof obj === "number";
  }
  isNumber2.displayName = "isNumber";
  function isObject(obj) {
    return typeof obj === "object" && !isNull(obj);
  }
  isObject.displayName = "isObject";
  function isPojo2(obj) {
    if (isNull(obj) || !isObject(obj) || isArguments(obj)) {
      return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  isPojo2.displayName = "isPojo";
  function isTemplateLiteral(obj) {
    if (isString2(obj)) {
      return true;
    }
    if (!isArray2(obj)) {
      return false;
    }
    return obj.every(isString2);
  }
  isTemplateLiteral.displayName = "isTemplateLiteral";
  var typeErrorStringIfFnReturnsFalse = (argName, argTypeFn, arg) => {
    return argTypeFn(arg) ? void 0 : (argTypeFn.displayName || argTypeFn.name) + `(${argName}) did not return true`;
  };
  var typeErrorStringIfTypeOfFails = (argName, argType, arg) => {
    return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
  };
  var typeErrorStringFromArgument = (argMap) => (arg, index) => {
    if (index >= argMap.length) {
      return;
    }
    const { argName, argType } = argMap[index];
    if (isUndefined(arg)) {
      return `Argument undefined: "${argName}"`;
    }
    const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
    const errorDescs = permittedArgTypes.map(
      (argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)
    ).filter(isString2);
    const multipleTypesSpecified = permittedArgTypes.length > 1;
    const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
    if (shouldError) {
      return errorDescs.join("\n| ") + `
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
    }
  };
  function ArgTypeError(namespace) {
    return (typeMap) => {
      const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
        argName,
        argType
      }));
      return (fnName) => (...args) => {
        const processedArgs = Array.from(args, (x2) => isArguments(x2) ? Array.from(x2) : x2).flat(1);
        const err2 = processedArgs.map(typeErrorStringFromArgument(argMap)).filter(isString2);
        if (!err2.length) {
          return;
        }
        const signature = Object.keys(typeMap).join(", ");
        return `
${namespace || ""}${fnName}(${signature}):
${err2.map((err3) => `| ${err3}`).join("\n")}`;
      };
    };
  }
  function wrapEmitter(events) {
    const emit = (eventName, ...args) => events.emit(eventName, args);
    const addListener = events.addListener ? (...args) => events.addListener(...args) : (...args) => events.on(...args);
    const removeListener = events.removeListener ? (...args) => events.removeListener(...args) : (...args) => events.off(...args);
    const wrapMap = /* @__PURE__ */ new Map();
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
    return input.reduce(
      (acc, one) => acc.indexOf(one) === -1 ? (acc.push(one), acc) : acc,
      []
    );
  }
  function Once(fn) {
    const { revoke, fn: _fn } = Revokable(fn);
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
  function ReferenceCounter(logPrefix, kind, description, ...expecting) {
    const _refs = [...expecting].flat().reduce((acc, ref) => ({ ...acc, [ref]: 0 }), {});
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
      return { ..._refs };
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
        description: `${logPrefix}: ${description}:`,
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
  function Definitions() {
    const dictionary = {};
    function undefine(word, definition) {
      dictionary[word] = (dictionary[word] || []).filter(
        (next) => next !== definition
      );
      if (dictionary[word].length === 0) {
        delete dictionary[word];
      }
    }
    function define2(word, definition) {
      dictionary[word] = dictionary[word] || [];
      dictionary[word].push(definition);
      return () => undefine(word, definition);
    }
    function definitionsOf(word) {
      return dictionary[word] || [];
    }
    return {
      define: define2,
      undefine,
      definitionsOf
    };
  }
  function Logger(level, _console) {
    if (isString2(level)) {
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
    const { info, table, log, warn, error } = _console || console;
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
  var argTypeError = ArgTypeError("statebot.");
  function decomposeChart(chart) {
    const err2 = argTypeError(
      { chart: isTemplateLiteral }
    )("decomposeChart")(chart);
    if (err2) {
      throw TypeError(err2);
    }
    const lines = condensedLines(chart);
    const linesOfTokens = tokenisedLines(lines);
    const linesOfRoutes = linesOfTokens.flatMap(decomposeRouteFromTokens);
    const linesOfTransitions = linesOfRoutes.flatMap(decomposeTransitionsFromRoute);
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
    return lines.map(
      (line) => line.split(cxArrow).map((str) => str.split(cxPipe))
    );
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
    return fromStates.reduce(
      (acc, fromState) => (acc.push(...toStates.map((toState) => [fromState, toState])), acc),
      []
    );
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
  function Statebot(name, options) {
    if (!isString2(name)) {
      throw new TypeError("\nStatebot: Please specify a name for this machine");
    }
    const logPrefix = `Statebot[${name}]`;
    if (!isPojo2(options)) {
      throw new TypeError(`
${logPrefix}: Please specify options for this machine`);
    }
    const {
      chart = void 0,
      logLevel = 3,
      historyLimit = 2
    } = options || {};
    const events = isUndefined(options.events) ? wrapEmitter(mitt_default()) : isEventEmitter(options.events) && wrapEmitter(options.events);
    if (!events) {
      throw new TypeError(`
${logPrefix}: Invalid event-emitter specified in options`);
    }
    const { states = [], routes = [] } = chart ? decomposeChart(chart) : options;
    const { startIn = states[0] } = options;
    if (!states.includes(startIn)) {
      throw new Error(`${logPrefix}: Starting-state not in chart: "${startIn}"`);
    }
    const argTypeError2 = ArgTypeError(`${logPrefix}#`);
    const _console = Logger(logLevel, console);
    const { canWarn } = _console;
    const stateHistory = [startIn];
    const stateHistoryLimit = Math.max(historyLimit, 2);
    let transitionId = 0;
    const { pause, resume, paused, Pausable } = Pausables(
      false,
      () => _console.warn(`${logPrefix}: Ignoring callback, paused`)
    );
    const transitionsFromEvents = Definitions();
    const internalEvents = wrapEmitter(mitt_default());
    const emitInternalEvent = Pausable(internalEvents.emit);
    function onInternalEvent(eventName, cb) {
      internalEvents.on(eventName, cb);
      return () => internalEvents.off(eventName, cb);
    }
    const statesHandled = ReferenceCounter(
      logPrefix,
      "states",
      "Listening for the following state-changes",
      [...states]
    );
    const routesHandled = ReferenceCounter(
      logPrefix,
      "transitions",
      "Listening for the following transitions",
      [...routes]
    );
    const eventsHandled = ReferenceCounter(
      logPrefix,
      "events",
      "Listening for the following events"
    );
    function applyHitcher(hitcher, fnName) {
      const hitcherActions = isFunction2(hitcher) ? hitcher({ enter, emit, Enter, Emit }) : isPojo2(hitcher) ? hitcher : null;
      if (!isPojo2(hitcherActions)) {
        throw new TypeError(
          `${logPrefix}#${fnName}(): Expected an object, or a function that returns an object`
        );
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
          _console.warn(
            `${logPrefix}#${fnName}(): Invalid states specified:
` + invalidStates.map((state) => `  > "${state}"`).join("\n")
          );
        }
        if (invalidRoutes.length) {
          _console.warn(
            `${logPrefix}#${fnName}(): Invalid transitions specified:
` + invalidRoutes.map((route) => `  > "${route}"`).join("\n")
          );
        }
      }
      return () => allCleanupFns.map((fn) => fn());
      function runThenMethodOnTransition(config) {
        const { fromState, toState, action } = config;
        const route = `${fromState}->${toState}`;
        return [
          routesHandled.increase(route),
          onInternalEvent(route, bindActionTo(toState, action))
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
      function ifStateThenEnterState({ fromState, toState, action, args }) {
        return inState(fromState, () => {
          enter(toState, ...args);
          isFunction2(action) && runActionFor(toState, action, ...args);
          return true;
        });
      }
      function createEventHandlerForTransition([eventName, configs]) {
        return [
          eventsHandled.increase(eventName),
          onEvent(eventName, (...args) => {
            const eventWasHandled = configs.map((config) => ({ ...config, args })).some(ifStateThenEnterState);
            if (!eventWasHandled) {
              transitionNoOp(`Event not handled: "${eventName}"`);
            }
          })
        ].concat(
          configs.map(
            ({ fromState, toState }) => transitionsFromEvents.define(`${eventName}:${fromState}`, toState)
          )
        );
      }
      function runActionFor(state, actionFn, ...args) {
        const onExitingState = actionFn(...args);
        if (isFunction2(onExitingState)) {
          const uninstall = Once(enterExitMethods[ON_EXITING](state, (toState) => {
            uninstall();
            onExitingState(toState);
          }));
          allCleanupFns.push(uninstall);
        }
      }
      function bindActionTo(state, actionFn) {
        return (...args) => runActionFor(state, actionFn, ...args);
      }
    }
    function _peek(eventName, stateObject, calledInternally = true) {
      const err1 = argTypeError2({ eventName: isString2 })("peek")(eventName);
      if (err1) {
        throw new TypeError(err1);
      }
      const eventAndState = eventName + ":" + currentState();
      const statesFromEvent = transitionsFromEvents.definitionsOf(eventAndState);
      if (statesFromEvent.length > 1) {
        const reason = `${logPrefix}: Event "${eventName}" causes multiple transitions.
  > From state: "${currentState()}"
  > To states: "${statesFromEvent.join(", ")}"

Check your performTransitions() config.`;
        throw new RangeError(reason);
      }
      if (!calledInternally && statesFromEvent.length === 0) {
        if (eventsHandled.countOf(eventName) === 0) {
          _console.warn(`${logPrefix}: Event not handled: "${eventName}"`);
        } else {
          _console.warn(`${logPrefix}: Will not transition after emitting: "${eventName}"`);
        }
      }
      const toState = statesFromEvent[0];
      if (isUndefined(stateObject)) {
        return isUndefined(toState) ? currentState() : toState;
      }
      const err2 = argTypeError2({ stateObject: isPojo2 })("peek")(stateObject);
      if (err2) {
        throw new TypeError(err2);
      }
      if (Object.prototype.hasOwnProperty.call(stateObject, toState)) {
        const anyOrFn = stateObject[toState];
        return isFunction2(anyOrFn) ? anyOrFn() : anyOrFn;
      }
      return null;
    }
    function peek(eventName, stateObject) {
      return _peek(eventName, stateObject, false);
    }
    function previousState() {
      return stateHistory[stateHistory.length - 2];
    }
    function currentState() {
      return stateHistory[stateHistory.length - 1];
    }
    function _state_canTransitionTo(...states2) {
      const err2 = argTypeError2(
        { states: isAllStrings }
      )("canTransitionTo")([states2]);
      if (err2) {
        throw new TypeError(err2);
      }
      if (!states2.length) {
        return false;
      }
      const nextStates = statesAvailableFromHere();
      return states2.every((state) => nextStates.includes(state));
    }
    function canTransitionTo(...states2) {
      const testStates = states2.flat();
      if (testStates.length === 2 && isString2(testStates[0]) && isPojo2(testStates[1])) {
        const thisState = testStates[0];
        const { afterEmitting } = testStates[1];
        const err2 = argTypeError2(
          { thisState: isString2, "{ afterEmitting }": isString2 }
        )("canTransitionTo")(thisState, afterEmitting);
        if (err2) {
          throw new TypeError(err2);
        }
        return thisState !== currentState() && _peek(afterEmitting) === thisState;
      }
      return _state_canTransitionTo(...testStates);
    }
    function statesAvailableFromHere(state) {
      const _state = !isUndefined(state) ? state : currentState();
      const err2 = argTypeError2(
        { state: isString2 }
      )("statesAvailableFromHere")(_state);
      if (err2) {
        throw new TypeError(err2);
      }
      return routes.reduce((acc, route) => {
        const [fromState, toState] = route.split(cxArrow).map((state2) => state2.trim());
        return fromState === _state ? [...acc, toState] : acc;
      }, []);
    }
    function _inState(state, anyOrFn, ...fnArgs) {
      const conditionMatches = currentState() === state;
      if (isUndefined(anyOrFn)) {
        return conditionMatches;
      }
      if (!conditionMatches) {
        return null;
      }
      if (isFunction2(anyOrFn)) {
        return anyOrFn(...fnArgs);
      }
      return anyOrFn;
    }
    function _inStateObject(stateObject, ...fnArgs) {
      const match2 = Object.entries(stateObject).find(([state]) => _inState(state));
      return match2 ? _inState(...match2.concat(fnArgs)) : null;
    }
    function inState(...args) {
      const err2 = argTypeError2(
        { state: [isString2, isPojo2] }
      )("inState")(args[0]);
      if (err2) {
        throw new TypeError(err2);
      }
      return isPojo2(args[0]) ? _inStateObject(...args) : _inState(...args);
    }
    const emit = (eventName, ...args) => {
      const err2 = argTypeError2(
        { eventName: isString2 }
      )("emit")(eventName);
      if (err2) {
        throw new TypeError(err2);
      }
      _peek(eventName);
      return events.emit(eventName, ...args);
    };
    const enter = (state, ...args) => {
      const err2 = argTypeError2(
        { state: isString2 }
      )("enter")(state);
      if (err2) {
        throw new TypeError(err2);
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
    };
    function onEvent(eventName, cb) {
      const err2 = argTypeError2(
        { eventName: isString2, cb: isFunction2 }
      )("onEvent")(eventName, cb);
      if (err2) {
        throw new TypeError(err2);
      }
      events.on(eventName, cb);
      return () => events.off(eventName, cb);
    }
    const switchMethods = Object.keys(INTERNAL_EVENTS).reduce((obj, methodName) => ({
      ...obj,
      [methodName]: (cb) => {
        const err2 = argTypeError2({ cb: isFunction2 })(methodName)(cb);
        if (err2) {
          throw new TypeError(err2);
        }
        const decreaseRefCount = statesHandled.increase(
          INTERNAL_EVENTS[methodName]
        );
        const removeEvent = onInternalEvent(
          INTERNAL_EVENTS[methodName],
          cb
        );
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
          const err2 = argTypeError2(
            { state: isString2, cb: isFunction2 }
          )(methodName)(state, cb);
          if (err2) {
            throw new TypeError(err2);
          }
          const decreaseRefCounts = [
            statesHandled.increase(state),
            statesHandled.increase(`${state}:${eventName}`)
          ];
          const removeEvent = switchMethods[switchMethod](
            (toState, fromState, ...args) => {
              if (name2.indexOf("Exit") === 0) {
                state === fromState && cb(toState, ...args);
              } else {
                state === toState && cb(fromState, ...args);
              }
            }
          );
          return () => {
            removeEvent();
            decreaseRefCounts.map((fn) => fn());
          };
        }
      };
    }, {});
    function Emit(eventName, ...curriedArgs) {
      const err2 = argTypeError2({ eventName: isString2 })("Emit")(eventName);
      if (err2) {
        throw new TypeError(err2);
      }
      return (...args) => emit(eventName, ...[...curriedArgs, ...args]);
    }
    function Enter(state, ...curriedArgs) {
      const err2 = argTypeError2({ state: isString2 })("Enter")(state);
      if (err2) {
        throw new TypeError(err2);
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
      const err2 = argTypeError2({ state: [isString2, isPojo2] })("InState")(args[0]);
      if (err2) {
        throw new TypeError(err2);
      }
      return isPojo2(args[0]) ? _InStateObject(...args) : _InState(...args);
    }
    function reset() {
      _console.warn(`${logPrefix}: State-machine reset!`);
      stateHistory.length = 0;
      stateHistory.push(startIn);
    }
    function transitionNoOp(message) {
      const lastState = previousState();
      const inState2 = currentState();
      const prevRoute = `${isUndefined(lastState) ? "[undefined]" : lastState}->${inState2}`;
      const availableStates = statesAvailableFromHere();
      if (!availableStates.length) {
        _console.info(
          `${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > There are no states available from "${inState2}"`
        );
      } else {
        _console.info(
          `${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > From "${inState2}", valid states are: [${availableStates.map((state) => `"${state}"`).join(", ")}]`
        );
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
      const { description, table } = refCounter.toValue();
      _console.log(description);
      if (table.length) {
        _console.table(table);
      } else {
        _console.log("  > No information");
      }
    }
    return {
      __STATEBOT__: 1,
      statesAvailableFromHere,
      canTransitionTo,
      currentState,
      previousState,
      history: () => [...stateHistory],
      emit: Pausable(emit),
      Emit: Pausable(Emit),
      enter: Pausable(enter),
      Enter: Pausable(Enter),
      inState,
      InState,
      info: () => info(),
      inspect: () => inspect(),
      name: () => name,
      onEntered: enterExitMethods[ON_ENTERED],
      onEntering: enterExitMethods[ON_ENTERING],
      onExited: enterExitMethods[ON_EXITED],
      onExiting: enterExitMethods[ON_EXITING],
      onSwitched: switchMethods[ON_SWITCHED],
      onSwitching: switchMethods[ON_SWITCHING],
      onEvent,
      onTransitions: (transitions) => applyHitcher(transitions, "onTransitions"),
      performTransitions: (transitions) => applyHitcher(transitions, "performTransitions"),
      pause,
      paused,
      peek,
      reset,
      resume
    };
  }
  function decomposeHitcherActions(hitcherActions) {
    const transitionsForEvents = {};
    const transitionsOnly = [];
    Object.entries(hitcherActions).map(([routeChart, actionFnOrConfigObj]) => {
      if (isFunction2(actionFnOrConfigObj)) {
        transitionsOnly.push({ routeChart, action: actionFnOrConfigObj });
        return;
      }
      if (!isPojo2(actionFnOrConfigObj)) {
        return;
      }
      const { on: _on, then: _then } = actionFnOrConfigObj;
      const hasValidEventNames = isString2(_on) || isArray2(_on);
      if (hasValidEventNames) {
        const eventNames = [_on].flat();
        eventNames.map((name) => {
          transitionsForEvents[name] = transitionsForEvents[name] || [];
          transitionsForEvents[name].push({ routeChart, action: _then });
        });
        return;
      }
      if (isFunction2(_then)) {
        transitionsOnly.push({ routeChart, action: actionFnOrConfigObj });
      }
    });
    return { transitionsForEvents, transitionsOnly };
  }
  function expandTransitions(configs, canWarn) {
    const allStates = [];
    const allRoutes = [];
    const _configs = configs.reduce((acc, config) => {
      const { routeChart, action } = config;
      const { states, routes, transitions } = decomposeChart(routeChart);
      if (canWarn()) {
        allStates.push(...states);
        allRoutes.push(...routes);
      }
      return [
        ...acc,
        ...transitions.map(
          ([fromState, toState]) => ({ fromState, toState, action })
        )
      ];
    }, []);
    return {
      configs: _configs,
      states: allStates,
      routes: allRoutes
    };
  }
  var import_spark_md5 = __toESM(require_spark_md5());
  var import_jmespath = __toESM(require_jmespath());
  var ch2 = {};
  var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
      c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], { type: "text/javascript" }))));
    w.onmessage = function(e) {
      var d = e.data, ed = d.$e$;
      if (ed) {
        var err2 = new Error(ed[0]);
        err2["code"] = ed[1];
        err2.stack = ed[2];
        cb(err2, null);
      } else
        cb(null, d);
    };
    w.postMessage(msg, transfer);
    return w;
  };
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var u32 = Uint32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i2 = 0; i2 < 31; ++i2) {
      b[i2] = start += 1 << eb[i2 - 1];
    }
    var r = new u32(b[30]);
    for (var i2 = 1; i2 < 30; ++i2) {
      for (var j = b[i2]; j < b[i2 + 1]; ++j) {
        r[j] = j - b[i2] << 5 | i2;
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
  for (i = 0; i < 32768; ++i) {
    x = (i & 43690) >>> 1 | (i & 21845) << 1;
    x = (x & 52428) >>> 2 | (x & 13107) << 2;
    x = (x & 61680) >>> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
  }
  var x;
  var i;
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i2 = 0;
    var l = new u16(mb);
    for (; i2 < s; ++i2) {
      if (cd[i2])
        ++l[cd[i2] - 1];
    }
    var le = new u16(mb);
    for (i2 = 0; i2 < mb; ++i2) {
      le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          var sv = i2 << 4 | cd[i2];
          var r_1 = mb - cd[i2];
          var v = le[cd[i2] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >>> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (i = 0; i < 144; ++i)
    flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i)
    flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i)
    flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i)
    flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i)
    fdt[i] = 5;
  var i;
  var flm = /* @__PURE__ */ hMap(flt, 9, 0);
  var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
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
    for (var i2 = 0; i2 < d.length; ++i2) {
      if (d[i2])
        t.push({ s: i2, f: d[i2] });
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
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i22 = 2;
    t[0] = { s: -1, f: l.f + r.f, l, r };
    while (i1 != s - 1) {
      l = t[t[i0].f < t[i22].f ? i0++ : i22++];
      r = t[i0 != i1 && t[i0].f < t[i22].f ? i0++ : i22++];
      t[i1++] = { s: -1, f: l.f + r.f, l, r };
    }
    var maxSym = t2[0].s;
    for (var i2 = 1; i2 < s; ++i2) {
      if (t2[i2].s > maxSym)
        maxSym = t2[i2].s;
    }
    var tr = new u16(maxSym + 1);
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
      var i2 = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t2.sort(function(a, b) {
        return tr[b.s] - tr[a.s] || a.f - b.f;
      });
      for (; i2 < s; ++i2) {
        var i2_1 = t2[i2].s;
        if (tr[i2_1] > mb) {
          dt += cst - (1 << mbt - tr[i2_1]);
          tr[i2_1] = mb;
        } else
          break;
      }
      dt >>>= lft;
      while (dt > 0) {
        var i2_2 = t2[i2].s;
        if (tr[i2_2] < mb)
          dt -= 1 << mb - tr[i2_2]++ - 1;
        else
          ++i2;
      }
      for (; i2 >= 0 && dt; --i2) {
        var i2_3 = t2[i2].s;
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
    for (var i2 = 1; i2 <= s; ++i2) {
      if (c[i2] == cln && i2 != s)
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
        cln = c[i2];
      }
    }
    return [cl.subarray(0, cli), s];
  };
  var clen = function(cf, cl) {
    var l = 0;
    for (var i2 = 0; i2 < cl.length; ++i2)
      l += cf[i2] * cl[i2];
    return l;
  };
  var wfblk = function(out, pos, dat) {
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i2 = 0; i2 < s; ++i2)
      out[o + i2 + 4] = dat[i2];
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
    for (var i2 = 0; i2 < lclt.length; ++i2)
      lcfreq[lclt[i2] & 31]++;
    for (var i2 = 0; i2 < lcdt.length; ++i2)
      lcfreq[lcdt[i2] & 31]++;
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
      for (var i2 = 0; i2 < nlcc; ++i2)
        wbits(out, p + 3 * i2, lct[clim[i2]]);
      p += 3 * nlcc;
      var lcts = [lclt, lcdt];
      for (var it = 0; it < 2; ++it) {
        var clct = lcts[it];
        for (var i2 = 0; i2 < clct.length; ++i2) {
          var len = clct[i2] & 31;
          wbits(out, p, llm[len]), p += lct[len];
          if (len > 15)
            wbits(out, p, clct[i2] >>> 5 & 127), p += clct[i2] >>> 12;
        }
      }
    } else {
      lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i2 = 0; i2 < li; ++i2) {
      if (syms[i2] > 255) {
        var len = syms[i2] >>> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7)
          wbits(out, p, syms[i2] >>> 23 & 31), p += fleb[len];
        var dst = syms[i2] & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3)
          wbits16(out, p, syms[i2] >>> 5 & 8191), p += fdeb[dst];
      } else {
        wbits16(out, p, lm[syms[i2]]), p += ll[syms[i2]];
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
      for (var i2 = 0; i2 <= s; i2 += 65535) {
        var e = i2 + 65535;
        if (e >= s) {
          w[pos >> 3] = lst;
        }
        pos = wfblk(w, pos + 1, dat.subarray(i2, e));
      }
    } else {
      var opt = deo[lvl - 1];
      var n = opt >>> 13, c = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev = new u16(32768), head = new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
      var hsh = function(i22) {
        return (dat[i22] ^ dat[i22 + 1] << bs1_1 ^ dat[i22 + 2] << bs2_1) & msk_1;
      };
      var syms = new u32(25e3);
      var lf = new u16(288), df = new u16(32);
      var lc_1 = 0, eb = 0, i2 = 0, li = 0, wi = 0, bs = 0;
      for (; i2 < s; ++i2) {
        var hv = hsh(i2);
        var imod = i2 & 32767, pimod = head[hv];
        prev[imod] = pimod;
        head[hv] = imod;
        if (wi <= i2) {
          var rem = s - i2;
          if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
            pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i2 - bs, pos);
            li = lc_1 = eb = 0, bs = i2;
            for (var j = 0; j < 286; ++j)
              lf[j] = 0;
            for (var j = 0; j < 30; ++j)
              df[j] = 0;
          }
          var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
          if (rem > 2 && hv == hsh(i2 - dif)) {
            var maxn = Math.min(n, rem) - 1;
            var maxd = Math.min(32767, i2);
            var ml = Math.min(258, rem);
            while (dif <= maxd && --ch_1 && imod != pimod) {
              if (dat[i2 + l] == dat[i2 + l - dif]) {
                var nl = 0;
                for (; nl < ml && dat[i2 + nl] == dat[i2 + nl - dif]; ++nl)
                  ;
                if (nl > l) {
                  l = nl, d = dif;
                  if (nl > maxn)
                    break;
                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;
                  for (var j = 0; j < mmd; ++j) {
                    var ti = i2 - dif + j + 32768 & 32767;
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
            wi = i2 + l;
            ++lc_1;
          } else {
            syms[li++] = dat[i2];
            ++lf[dat[i2]];
          }
        }
      }
      pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i2 - bs, pos);
      if (!lst && pos & 7)
        pos = wfblk(w, pos + 1, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
  };
  var crct = /* @__PURE__ */ function() {
    var t = new Int32Array(256);
    for (var i2 = 0; i2 < 256; ++i2) {
      var c = i2, k = 9;
      while (--k)
        c = (c & 1 && -306674912) ^ c >>> 1;
      t[i2] = c;
    }
    return t;
  }();
  var crc = function() {
    var c = -1;
    return {
      p: function(d) {
        var cr = c;
        for (var i2 = 0; i2 < d.length; ++i2)
          cr = crct[cr & 255 ^ d[i2]] ^ cr >>> 8;
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
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
    for (var i2 = 0; i2 < dt.length; ++i2) {
      var v = dt[i2], k = ks[i2];
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
      if (v[k].buffer) {
        tl.push((v[k] = new v[k].constructor(v[k])).buffer);
      }
    }
    return tl;
  };
  var wrkr = function(fns, init, id, cb) {
    var _a2;
    if (!ch[id]) {
      var fnStr = "", td_1 = {}, m = fns.length - 1;
      for (var i2 = 0; i2 < m; ++i2)
        _a2 = wcln(fns[i2], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
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
    var w = wrkr(fns, init, id, function(err2, dat2) {
      w.terminate();
      cb(err2, dat2);
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
      err(7);
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
      var val = d[k], n = p + k, op = o;
      if (Array.isArray(val))
        op = mrg(o, val[1]), val = val[0];
      if (val instanceof u8)
        t[n] = [val, op];
      else {
        t[n += "/"] = [new u8(0), op];
        fltn(val, n, t, o);
      }
    }
  };
  var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }
  function strToU8(str, latin1) {
    if (latin1) {
      var ar_1 = new u8(str.length);
      for (var i2 = 0; i2 < str.length; ++i2)
        ar_1[i2] = str.charCodeAt(i2);
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
    for (var i2 = 0; i2 < l; ++i2) {
      if (ai + 5 > ar.length) {
        var n = new u8(ai + 8 + (l - i2 << 1));
        n.set(ar);
        ar = n;
      }
      var c = str.charCodeAt(i2);
      if (c < 128 || latin1)
        w(c);
      else if (c < 2048)
        w(192 | c >> 6), w(128 | c & 63);
      else if (c > 55295 && c < 57344)
        c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i2) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
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
          err(9);
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
    d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
      err(10);
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;
    if (c != -1) {
      wbytes(d, b, f.crc);
      wbytes(d, b + 4, c < 0 ? -c - 2 : c);
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
      err(7);
    var r = {};
    fltn(data, "", r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
      for (var i22 = 0; i22 < term.length; ++i22)
        term[i22]();
    };
    var cbd = function(a, b) {
      mt(function() {
        cb(a, b);
      });
    };
    mt(function() {
      cbd = cb;
    });
    var cbf = function() {
      var out = new u8(tot + 22), oe = o, cdl = tot - o;
      tot = 0;
      for (var i22 = 0; i22 < slft; ++i22) {
        var f = files[i22];
        try {
          var l = f.c.length;
          wzh(out, tot, f, f.f, f.u, l);
          var badd = 30 + f.f.length + exfl(f.extra);
          var loc = tot + badd;
          out.set(f.c, loc);
          wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
        } catch (e) {
          return cbd(e, null);
        }
      }
      wzf(out, o, files.length, cdl, oe);
      cbd(null, out);
    };
    if (!lft)
      cbf();
    var _loop_1 = function(i22) {
      var fn = k[i22];
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
          cbd(e, null);
        } else {
          var l = d.length;
          files[i22] = mrg(p, {
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
        cbl(err(11, 0, 1), null);
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
    for (var i2 = 0; i2 < slft; ++i2) {
      _loop_1(i2);
    }
    return tAll;
  }
  var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
    fn();
  };
  var import_file_saver = __toESM(require_FileSaver_min());
  var addAjaxListener = function() {
    attachAjaxEventRepeater();
    function onRx(eventName, options) {
      const { rx, cb } = options;
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
          runCallback = -1 !== rx.indexOf(url);
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
        onRx("ajax:onBeforeOpen", { rx, cb: onBeforeOpen });
      }
      if (typeof onBeforeSend === "function") {
        onRx("ajax:onBeforeSend", { rx, cb: onBeforeSend });
      }
      if (typeof onFullResponse === "function") {
        onRx("ajax:onFullResponse", { rx, cb: onFullResponse });
      }
    };
  }();
  function AjaxRequester(options) {
    const { name, description, method, url, setHeaders, setPayload } = options;
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
      const event = new CustomEvent(eventName, { detail: options });
      window.dispatchEvent(event);
    }
    const open2 = window.XMLHttpRequest.prototype.open;
    const send = window.XMLHttpRequest.prototype.send;
    function openReplacement(method, url, async = true, user, password) {
      this._options = { method, url, async, user, password, xhr: this };
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
  var import_regexp = __toESM(require_regexp());
  (function() {
    if (typeof window.CustomEvent === "function")
      return false;
    function CustomEvent2(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
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
    const eventMap = /* @__PURE__ */ new Map();
    function emit(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event = new CustomEvent(BUS, { detail });
      global2.dispatchEvent(event);
    }
    function on(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      const cbMap = eventMap.has(eventNameOrPattern) ? eventMap.get(eventNameOrPattern) : eventMap.set(eventNameOrPattern, /* @__PURE__ */ new Map()).get(eventNameOrPattern);
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
        const { eventName = "", args = [] } = event?.detail || {};
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
    (getting-statements -> failed-statements -> idle)
    (getting-entries -> failed-entries -> idle)

`;
  obis2.pluginRegistry = /* @__PURE__ */ new Map();
  var getPluginMeta = (name) => obis2.pluginRegistry.has(name) ? obis2.pluginRegistry.get(name) : obis2.pluginRegistry.set(name, {}).get(name);
  function extendObisNamespace(obis22) {
    obis22.deps = {
      addAjaxListener,
      AjaxRequester,
      fflate: { zip, strToU8 },
      jmespath: import_jmespath.default,
      messages,
      saveAs: import_file_saver.saveAs,
      SparkMD5: import_spark_md5.default,
      Statebot
    };
    obis22.fetchMachine = Statebot("fetcher", {
      events: messages,
      startIn: false ? "found-entries" : "idle",
      chart: obisFetchFlow,
      logLevel: 2
    });
    obis22.makePluginAvailable = (name, pluginLoaderFn) => {
      console.log(`Registering plugin loader: ${name}`);
      const meta = getPluginMeta(name);
      meta.name = name;
      meta.loaderFn = pluginLoaderFn;
      messages.emit(actions.plugin.AVAILABLE, name);
    };
    obis22.registerPlugins = (plugins) => {
      plugins.map((plugin) => {
        const meta = getPluginMeta(plugin.name);
        meta.name = plugin.name;
        meta.description = plugin.description;
        meta.urls = plugin.urls;
      });
      messages.emit(actions.plugin.ALL_REGISTERED);
    };
  }
  var import_regexp2 = __toESM(require_regexp());
  function loadObisInChunks(obis22) {
    const { rootPath, pluginRegistry } = obis22;
    const loadQueue = [`${rootPath}/plugins.js`];
    const loadAfterPlugin = [`${rootPath}/ui.css`, `${rootPath}/ui.js`];
    function pluginValidForLocation(plugin) {
      const { urls = [] } = plugin;
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
      obis22.plugin = getPluginMeta(name);
      const { loaderFn } = obis22.plugin;
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
    obis22.loadStyle = (url, cb) => {
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
        obis22.loadStyle(nextFile, (style, success) => {
          if (!success) {
            console.error("Could not load style: " + style);
          } else {
            loadQueuedFiles();
          }
        });
      } else {
        obis22.loadScript(nextFile, (script, success) => {
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
  function loadObisAsBundle(obis22) {
    messages.on(actions.plugin.AVAILABLE, (name) => {
      obis22.plugin = getPluginMeta(name);
      const { loaderFn } = obis22.plugin;
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
  messages.on(actions.ui.RENDERING, (m) => {
    m.Fragment = {
      view: function(vnode) {
        return vnode.children;
      }
    };
  });
  extendObisNamespace(obis2);
  if (document.title !== "OBIS :: Statements Browser") {
    main();
  }
  function main() {
    if (obis2.fromBookmarklet) {
      loadObisInChunks(obis2);
    } else {
      loadObisAsBundle(obis2);
    }
  }
})();
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_vnode = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/vnode.js"(exports, module) {
      "use strict";
      function Vnode(tag, key, attrs, children, text, dom) {
        return { tag, key, attrs, children, text, dom, domSize: void 0, state: void 0, events: void 0, instance: void 0 };
      }
      Vnode.normalize = function(node) {
        if (Array.isArray(node))
          return Vnode("[", void 0, void 0, Vnode.normalizeChildren(node), void 0, void 0);
        if (node == null || typeof node === "boolean")
          return null;
        if (typeof node === "object")
          return node;
        return Vnode("#", void 0, void 0, String(node), void 0, void 0);
      };
      Vnode.normalizeChildren = function(input) {
        var children = [];
        if (input.length) {
          var isKeyed = input[0] != null && input[0].key != null;
          for (var i = 1; i < input.length; i++) {
            if ((input[i] != null && input[i].key != null) !== isKeyed) {
              throw new TypeError(
                isKeyed && (input[i] != null || typeof input[i] === "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys."
              );
            }
          }
          for (var i = 0; i < input.length; i++) {
            children[i] = Vnode.normalize(input[i]);
          }
        }
        return children;
      };
      module.exports = Vnode;
    }
  });
  var require_hyperscriptVnode = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/hyperscriptVnode.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function() {
        var attrs = arguments[this], start = this + 1, children;
        if (attrs == null) {
          attrs = {};
        } else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
          attrs = {};
          start = this;
        }
        if (arguments.length === start + 1) {
          children = arguments[start];
          if (!Array.isArray(children))
            children = [children];
        } else {
          children = [];
          while (start < arguments.length)
            children.push(arguments[start++]);
        }
        return Vnode("", attrs.key, attrs, children);
      };
    }
  });
  var require_hasOwn = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/hasOwn.js"(exports, module) {
      "use strict";
      module.exports = {}.hasOwnProperty;
    }
  });
  var require_hyperscript = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/hyperscript.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var hyperscriptVnode = require_hyperscriptVnode();
      var hasOwn2 = require_hasOwn();
      var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
      var selectorCache = {};
      function isEmpty(object2) {
        for (var key in object2)
          if (hasOwn2.call(object2, key))
            return false;
        return true;
      }
      function compileSelector(selector) {
        var match2, tag = "div", classes = [], attrs = {};
        while (match2 = selectorParser.exec(selector)) {
          var type = match2[1], value = match2[2];
          if (type === "" && value !== "")
            tag = value;
          else if (type === "#")
            attrs.id = value;
          else if (type === ".")
            classes.push(value);
          else if (match2[3][0] === "[") {
            var attrValue = match2[6];
            if (attrValue)
              attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match2[4] === "class")
              classes.push(attrValue);
            else
              attrs[match2[4]] = attrValue === "" ? attrValue : attrValue || true;
          }
        }
        if (classes.length > 0)
          attrs.className = classes.join(" ");
        return selectorCache[selector] = { tag, attrs };
      }
      function execSelector(state, vnode) {
        var attrs = vnode.attrs;
        var hasClass = hasOwn2.call(attrs, "class");
        var className = hasClass ? attrs.class : attrs.className;
        vnode.tag = state.tag;
        vnode.attrs = {};
        if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
          var newAttrs = {};
          for (var key in attrs) {
            if (hasOwn2.call(attrs, key))
              newAttrs[key] = attrs[key];
          }
          attrs = newAttrs;
        }
        for (var key in state.attrs) {
          if (hasOwn2.call(state.attrs, key) && key !== "className" && !hasOwn2.call(attrs, key)) {
            attrs[key] = state.attrs[key];
          }
        }
        if (className != null || state.attrs.className != null)
          attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
        if (hasClass)
          attrs.class = null;
        for (var key in attrs) {
          if (hasOwn2.call(attrs, key) && key !== "key") {
            vnode.attrs = attrs;
            break;
          }
        }
        return vnode;
      }
      function hyperscript(selector) {
        if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
          throw Error("The selector must be either a string or a component.");
        }
        var vnode = hyperscriptVnode.apply(1, arguments);
        if (typeof selector === "string") {
          vnode.children = Vnode.normalizeChildren(vnode.children);
          if (selector !== "[")
            return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
        }
        vnode.tag = selector;
        return vnode;
      }
      module.exports = hyperscript;
    }
  });
  var require_trust = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/trust.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function(html) {
        if (html == null)
          html = "";
        return Vnode("<", void 0, void 0, html, void 0, void 0);
      };
    }
  });
  var require_fragment = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/fragment.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var hyperscriptVnode = require_hyperscriptVnode();
      module.exports = function() {
        var vnode = hyperscriptVnode.apply(0, arguments);
        vnode.tag = "[";
        vnode.children = Vnode.normalizeChildren(vnode.children);
        return vnode;
      };
    }
  });
  var require_hyperscript2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/hyperscript.js"(exports, module) {
      "use strict";
      var hyperscript = require_hyperscript();
      hyperscript.trust = require_trust();
      hyperscript.fragment = require_fragment();
      module.exports = hyperscript;
    }
  });
  var require_polyfill = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/promise/polyfill.js"(exports, module) {
      "use strict";
      var PromisePolyfill = function(executor) {
        if (!(this instanceof PromisePolyfill))
          throw new Error("Promise must be called with 'new'.");
        if (typeof executor !== "function")
          throw new TypeError("executor must be a function.");
        var self2 = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
        var instance = self2._instance = { resolvers, rejectors };
        var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
        function handler(list, shouldAbsorb) {
          return function execute(value) {
            var then;
            try {
              if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
                if (value === self2)
                  throw new TypeError("Promise can't be resolved with itself.");
                executeOnce(then.bind(value));
              } else {
                callAsync(function() {
                  if (!shouldAbsorb && list.length === 0)
                    console.error("Possible unhandled promise rejection:", value);
                  for (var i = 0; i < list.length; i++)
                    list[i](value);
                  resolvers.length = 0, rejectors.length = 0;
                  instance.state = shouldAbsorb;
                  instance.retry = function() {
                    execute(value);
                  };
                });
              }
            } catch (e) {
              rejectCurrent(e);
            }
          };
        }
        function executeOnce(then) {
          var runs = 0;
          function run(fn) {
            return function(value) {
              if (runs++ > 0)
                return;
              fn(value);
            };
          }
          var onerror = run(rejectCurrent);
          try {
            then(run(resolveCurrent), onerror);
          } catch (e) {
            onerror(e);
          }
        }
        executeOnce(executor);
      };
      PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
        var self2 = this, instance = self2._instance;
        function handle(callback, list, next, state) {
          list.push(function(value) {
            if (typeof callback !== "function")
              next(value);
            else
              try {
                resolveNext(callback(value));
              } catch (e) {
                if (rejectNext)
                  rejectNext(e);
              }
          });
          if (typeof instance.retry === "function" && state === instance.state)
            instance.retry();
        }
        var resolveNext, rejectNext;
        var promise = new PromisePolyfill(function(resolve, reject) {
          resolveNext = resolve, rejectNext = reject;
        });
        handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
        return promise;
      };
      PromisePolyfill.prototype.catch = function(onRejection) {
        return this.then(null, onRejection);
      };
      PromisePolyfill.prototype.finally = function(callback) {
        return this.then(
          function(value) {
            return PromisePolyfill.resolve(callback()).then(function() {
              return value;
            });
          },
          function(reason) {
            return PromisePolyfill.resolve(callback()).then(function() {
              return PromisePolyfill.reject(reason);
            });
          }
        );
      };
      PromisePolyfill.resolve = function(value) {
        if (value instanceof PromisePolyfill)
          return value;
        return new PromisePolyfill(function(resolve) {
          resolve(value);
        });
      };
      PromisePolyfill.reject = function(value) {
        return new PromisePolyfill(function(resolve, reject) {
          reject(value);
        });
      };
      PromisePolyfill.all = function(list) {
        return new PromisePolyfill(function(resolve, reject) {
          var total = list.length, count = 0, values = [];
          if (list.length === 0)
            resolve([]);
          else
            for (var i = 0; i < list.length; i++) {
              (function(i2) {
                function consume(value) {
                  count++;
                  values[i2] = value;
                  if (count === total)
                    resolve(values);
                }
                if (list[i2] != null && (typeof list[i2] === "object" || typeof list[i2] === "function") && typeof list[i2].then === "function") {
                  list[i2].then(consume, reject);
                } else
                  consume(list[i2]);
              })(i);
            }
        });
      };
      PromisePolyfill.race = function(list) {
        return new PromisePolyfill(function(resolve, reject) {
          for (var i = 0; i < list.length; i++) {
            list[i].then(resolve, reject);
          }
        });
      };
      module.exports = PromisePolyfill;
    }
  });
  var require_promise = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/promise/promise.js"(exports, module) {
      "use strict";
      var PromisePolyfill = require_polyfill();
      if (typeof window !== "undefined") {
        if (typeof window.Promise === "undefined") {
          window.Promise = PromisePolyfill;
        } else if (!window.Promise.prototype.finally) {
          window.Promise.prototype.finally = PromisePolyfill.prototype.finally;
        }
        module.exports = window.Promise;
      } else if (typeof global !== "undefined") {
        if (typeof global.Promise === "undefined") {
          global.Promise = PromisePolyfill;
        } else if (!global.Promise.prototype.finally) {
          global.Promise.prototype.finally = PromisePolyfill.prototype.finally;
        }
        module.exports = global.Promise;
      } else {
        module.exports = PromisePolyfill;
      }
    }
  });
  var require_render = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/render.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function($window) {
        var $doc = $window && $window.document;
        var currentRedraw;
        var nameSpace = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        function getNameSpace(vnode) {
          return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
        }
        function checkState(vnode, original) {
          if (vnode.state !== original)
            throw new Error("'vnode.state' must not be modified.");
        }
        function callHook(vnode) {
          var original = vnode.state;
          try {
            return this.apply(original, arguments);
          } finally {
            checkState(vnode, original);
          }
        }
        function activeElement() {
          try {
            return $doc.activeElement;
          } catch (e) {
            return null;
          }
        }
        function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
          for (var i = start; i < end; i++) {
            var vnode = vnodes[i];
            if (vnode != null) {
              createNode(parent, vnode, hooks, ns, nextSibling);
            }
          }
        }
        function createNode(parent, vnode, hooks, ns, nextSibling) {
          var tag = vnode.tag;
          if (typeof tag === "string") {
            vnode.state = {};
            if (vnode.attrs != null)
              initLifecycle(vnode.attrs, vnode, hooks);
            switch (tag) {
              case "#":
                createText(parent, vnode, nextSibling);
                break;
              case "<":
                createHTML(parent, vnode, ns, nextSibling);
                break;
              case "[":
                createFragment(parent, vnode, hooks, ns, nextSibling);
                break;
              default:
                createElement(parent, vnode, hooks, ns, nextSibling);
            }
          } else
            createComponent(parent, vnode, hooks, ns, nextSibling);
        }
        function createText(parent, vnode, nextSibling) {
          vnode.dom = $doc.createTextNode(vnode.children);
          insertNode(parent, vnode.dom, nextSibling);
        }
        var possibleParents = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" };
        function createHTML(parent, vnode, ns, nextSibling) {
          var match2 = vnode.children.match(/^\s*?<(\w+)/im) || [];
          var temp = $doc.createElement(possibleParents[match2[1]] || "div");
          if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + vnode.children + "</svg>";
            temp = temp.firstChild;
          } else {
            temp.innerHTML = vnode.children;
          }
          vnode.dom = temp.firstChild;
          vnode.domSize = temp.childNodes.length;
          vnode.instance = [];
          var fragment = $doc.createDocumentFragment();
          var child;
          while (child = temp.firstChild) {
            vnode.instance.push(child);
            fragment.appendChild(child);
          }
          insertNode(parent, fragment, nextSibling);
        }
        function createFragment(parent, vnode, hooks, ns, nextSibling) {
          var fragment = $doc.createDocumentFragment();
          if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
          }
          vnode.dom = fragment.firstChild;
          vnode.domSize = fragment.childNodes.length;
          insertNode(parent, fragment, nextSibling);
        }
        function createElement(parent, vnode, hooks, ns, nextSibling) {
          var tag = vnode.tag;
          var attrs = vnode.attrs;
          var is2 = attrs && attrs.is;
          ns = getNameSpace(vnode) || ns;
          var element = ns ? is2 ? $doc.createElementNS(ns, tag, { is: is2 }) : $doc.createElementNS(ns, tag) : is2 ? $doc.createElement(tag, { is: is2 }) : $doc.createElement(tag);
          vnode.dom = element;
          if (attrs != null) {
            setAttrs(vnode, attrs, ns);
          }
          insertNode(parent, element, nextSibling);
          if (!maybeSetContentEditable(vnode)) {
            if (vnode.children != null) {
              var children = vnode.children;
              createNodes(element, children, 0, children.length, hooks, null, ns);
              if (vnode.tag === "select" && attrs != null)
                setLateSelectAttrs(vnode, attrs);
            }
          }
        }
        function initComponent(vnode, hooks) {
          var sentinel;
          if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null)
              return;
            sentinel.$$reentrantLock$$ = true;
          } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null)
              return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
          }
          initLifecycle(vnode.state, vnode, hooks);
          if (vnode.attrs != null)
            initLifecycle(vnode.attrs, vnode, hooks);
          vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
          if (vnode.instance === vnode)
            throw Error("A view cannot return the vnode it received as argument");
          sentinel.$$reentrantLock$$ = null;
        }
        function createComponent(parent, vnode, hooks, ns, nextSibling) {
          initComponent(vnode, hooks);
          if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
          } else {
            vnode.domSize = 0;
          }
        }
        function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
          if (old === vnodes || old == null && vnodes == null)
            return;
          else if (old == null || old.length === 0)
            createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
          else if (vnodes == null || vnodes.length === 0)
            removeNodes(parent, old, 0, old.length);
          else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start = 0, oldStart = 0;
            if (!isOldKeyed)
              while (oldStart < old.length && old[oldStart] == null)
                oldStart++;
            if (!isKeyed)
              while (start < vnodes.length && vnodes[start] == null)
                start++;
            if (isOldKeyed !== isKeyed) {
              removeNodes(parent, old, oldStart, old.length);
              createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
              var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
              start = start < oldStart ? start : oldStart;
              for (; start < commonLength; start++) {
                o = old[start];
                v2 = vnodes[start];
                if (o === v2 || o == null && v2 == null)
                  continue;
                else if (o == null)
                  createNode(parent, v2, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                else if (v2 == null)
                  removeNode(parent, o);
                else
                  updateNode(parent, o, v2, hooks, getNextSibling(old, start + 1, nextSibling), ns);
              }
              if (old.length > commonLength)
                removeNodes(parent, old, start, old.length);
              if (vnodes.length > commonLength)
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
              var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v2, oe, ve, topSibling;
              while (oldEnd >= oldStart && end >= start) {
                oe = old[oldEnd];
                ve = vnodes[end];
                if (oe.key !== ve.key)
                  break;
                if (oe !== ve)
                  updateNode(parent, oe, ve, hooks, nextSibling, ns);
                if (ve.dom != null)
                  nextSibling = ve.dom;
                oldEnd--, end--;
              }
              while (oldEnd >= oldStart && end >= start) {
                o = old[oldStart];
                v2 = vnodes[start];
                if (o.key !== v2.key)
                  break;
                oldStart++, start++;
                if (o !== v2)
                  updateNode(parent, o, v2, hooks, getNextSibling(old, oldStart, nextSibling), ns);
              }
              while (oldEnd >= oldStart && end >= start) {
                if (start === end)
                  break;
                if (o.key !== ve.key || oe.key !== v2.key)
                  break;
                topSibling = getNextSibling(old, oldStart, nextSibling);
                moveNodes(parent, oe, topSibling);
                if (oe !== v2)
                  updateNode(parent, oe, v2, hooks, topSibling, ns);
                if (++start <= --end)
                  moveNodes(parent, o, nextSibling);
                if (o !== ve)
                  updateNode(parent, o, ve, hooks, nextSibling, ns);
                if (ve.dom != null)
                  nextSibling = ve.dom;
                oldStart++;
                oldEnd--;
                oe = old[oldEnd];
                ve = vnodes[end];
                o = old[oldStart];
                v2 = vnodes[start];
              }
              while (oldEnd >= oldStart && end >= start) {
                if (oe.key !== ve.key)
                  break;
                if (oe !== ve)
                  updateNode(parent, oe, ve, hooks, nextSibling, ns);
                if (ve.dom != null)
                  nextSibling = ve.dom;
                oldEnd--, end--;
                oe = old[oldEnd];
                ve = vnodes[end];
              }
              if (start > end)
                removeNodes(parent, old, oldStart, oldEnd + 1);
              else if (oldStart > oldEnd)
                createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
              else {
                var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map, lisIndices;
                for (i = 0; i < vnodesLength; i++)
                  oldIndices[i] = -1;
                for (i = end; i >= start; i--) {
                  if (map == null)
                    map = getKeyMap(old, oldStart, oldEnd + 1);
                  ve = vnodes[i];
                  var oldIndex = map[ve.key];
                  if (oldIndex != null) {
                    pos = oldIndex < pos ? oldIndex : -1;
                    oldIndices[i - start] = oldIndex;
                    oe = old[oldIndex];
                    old[oldIndex] = null;
                    if (oe !== ve)
                      updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null)
                      nextSibling = ve.dom;
                    matched++;
                  }
                }
                nextSibling = originalNextSibling;
                if (matched !== oldEnd - oldStart + 1)
                  removeNodes(parent, old, oldStart, oldEnd + 1);
                if (matched === 0)
                  createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                else {
                  if (pos === -1) {
                    lisIndices = makeLisIndices(oldIndices);
                    li = lisIndices.length - 1;
                    for (i = end; i >= start; i--) {
                      v2 = vnodes[i];
                      if (oldIndices[i - start] === -1)
                        createNode(parent, v2, hooks, ns, nextSibling);
                      else {
                        if (lisIndices[li] === i - start)
                          li--;
                        else
                          moveNodes(parent, v2, nextSibling);
                      }
                      if (v2.dom != null)
                        nextSibling = vnodes[i].dom;
                    }
                  } else {
                    for (i = end; i >= start; i--) {
                      v2 = vnodes[i];
                      if (oldIndices[i - start] === -1)
                        createNode(parent, v2, hooks, ns, nextSibling);
                      if (v2.dom != null)
                        nextSibling = vnodes[i].dom;
                    }
                  }
                }
              }
            }
          }
        }
        function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
          var oldTag = old.tag, tag = vnode.tag;
          if (oldTag === tag) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old))
              return;
            if (typeof oldTag === "string") {
              if (vnode.attrs != null) {
                updateLifecycle(vnode.attrs, vnode, hooks);
              }
              switch (oldTag) {
                case "#":
                  updateText(old, vnode);
                  break;
                case "<":
                  updateHTML(parent, old, vnode, ns, nextSibling);
                  break;
                case "[":
                  updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                  break;
                default:
                  updateElement(old, vnode, hooks, ns);
              }
            } else
              updateComponent(parent, old, vnode, hooks, nextSibling, ns);
          } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
          }
        }
        function updateText(old, vnode) {
          if (old.children.toString() !== vnode.children.toString()) {
            old.dom.nodeValue = vnode.children;
          }
          vnode.dom = old.dom;
        }
        function updateHTML(parent, old, vnode, ns, nextSibling) {
          if (old.children !== vnode.children) {
            removeHTML(parent, old);
            createHTML(parent, vnode, ns, nextSibling);
          } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
            vnode.instance = old.instance;
          }
        }
        function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
          updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
          var domSize = 0, children = vnode.children;
          vnode.dom = null;
          if (children != null) {
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              if (child != null && child.dom != null) {
                if (vnode.dom == null)
                  vnode.dom = child.dom;
                domSize += child.domSize || 1;
              }
            }
            if (domSize !== 1)
              vnode.domSize = domSize;
          }
        }
        function updateElement(old, vnode, hooks, ns) {
          var element = vnode.dom = old.dom;
          ns = getNameSpace(vnode) || ns;
          if (vnode.tag === "textarea") {
            if (vnode.attrs == null)
              vnode.attrs = {};
          }
          updateAttrs(vnode, old.attrs, vnode.attrs, ns);
          if (!maybeSetContentEditable(vnode)) {
            updateNodes(element, old.children, vnode.children, hooks, null, ns);
          }
        }
        function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
          vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
          if (vnode.instance === vnode)
            throw Error("A view cannot return the vnode it received as argument");
          updateLifecycle(vnode.state, vnode, hooks);
          if (vnode.attrs != null)
            updateLifecycle(vnode.attrs, vnode, hooks);
          if (vnode.instance != null) {
            if (old.instance == null)
              createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else
              updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
          } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = void 0;
            vnode.domSize = 0;
          } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
          }
        }
        function getKeyMap(vnodes, start, end) {
          var map = /* @__PURE__ */ Object.create(null);
          for (; start < end; start++) {
            var vnode = vnodes[start];
            if (vnode != null) {
              var key = vnode.key;
              if (key != null)
                map[key] = start;
            }
          }
          return map;
        }
        var lisTemp = [];
        function makeLisIndices(a2) {
          var result = [0];
          var u = 0, v2 = 0, i = 0;
          var il = lisTemp.length = a2.length;
          for (var i = 0; i < il; i++)
            lisTemp[i] = a2[i];
          for (var i = 0; i < il; ++i) {
            if (a2[i] === -1)
              continue;
            var j2 = result[result.length - 1];
            if (a2[j2] < a2[i]) {
              lisTemp[i] = j2;
              result.push(i);
              continue;
            }
            u = 0;
            v2 = result.length - 1;
            while (u < v2) {
              var c = (u >>> 1) + (v2 >>> 1) + (u & v2 & 1);
              if (a2[result[c]] < a2[i]) {
                u = c + 1;
              } else {
                v2 = c;
              }
            }
            if (a2[i] < a2[result[u]]) {
              if (u > 0)
                lisTemp[i] = result[u - 1];
              result[u] = i;
            }
          }
          u = result.length;
          v2 = result[u - 1];
          while (u-- > 0) {
            result[u] = v2;
            v2 = lisTemp[v2];
          }
          lisTemp.length = 0;
          return result;
        }
        function getNextSibling(vnodes, i, nextSibling) {
          for (; i < vnodes.length; i++) {
            if (vnodes[i] != null && vnodes[i].dom != null)
              return vnodes[i].dom;
          }
          return nextSibling;
        }
        function moveNodes(parent, vnode, nextSibling) {
          var frag = $doc.createDocumentFragment();
          moveChildToFrag(parent, frag, vnode);
          insertNode(parent, frag, nextSibling);
        }
        function moveChildToFrag(parent, frag, vnode) {
          while (vnode.dom != null && vnode.dom.parentNode === parent) {
            if (typeof vnode.tag !== "string") {
              vnode = vnode.instance;
              if (vnode != null)
                continue;
            } else if (vnode.tag === "<") {
              for (var i = 0; i < vnode.instance.length; i++) {
                frag.appendChild(vnode.instance[i]);
              }
            } else if (vnode.tag !== "[") {
              frag.appendChild(vnode.dom);
            } else if (vnode.children.length === 1) {
              vnode = vnode.children[0];
              if (vnode != null)
                continue;
            } else {
              for (var i = 0; i < vnode.children.length; i++) {
                var child = vnode.children[i];
                if (child != null)
                  moveChildToFrag(parent, frag, child);
              }
            }
            break;
          }
        }
        function insertNode(parent, dom, nextSibling) {
          if (nextSibling != null)
            parent.insertBefore(dom, nextSibling);
          else
            parent.appendChild(dom);
        }
        function maybeSetContentEditable(vnode) {
          if (vnode.attrs == null || vnode.attrs.contenteditable == null && // attribute
          vnode.attrs.contentEditable == null)
            return false;
          var children = vnode.children;
          if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content)
              vnode.dom.innerHTML = content;
          } else if (children != null && children.length !== 0)
            throw new Error("Child node of a contenteditable must be trusted.");
          return true;
        }
        function removeNodes(parent, vnodes, start, end) {
          for (var i = start; i < end; i++) {
            var vnode = vnodes[i];
            if (vnode != null)
              removeNode(parent, vnode);
          }
        }
        function removeNode(parent, vnode) {
          var mask = 0;
          var original = vnode.state;
          var stateResult, attrsResult;
          if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
            var result = callHook.call(vnode.state.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
              mask = 1;
              stateResult = result;
            }
          }
          if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
            var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
              mask |= 2;
              attrsResult = result;
            }
          }
          checkState(vnode, original);
          if (!mask) {
            onremove(vnode);
            removeChild(parent, vnode);
          } else {
            if (stateResult != null) {
              var next = function() {
                if (mask & 1) {
                  mask &= 2;
                  if (!mask)
                    reallyRemove();
                }
              };
              stateResult.then(next, next);
            }
            if (attrsResult != null) {
              var next = function() {
                if (mask & 2) {
                  mask &= 1;
                  if (!mask)
                    reallyRemove();
                }
              };
              attrsResult.then(next, next);
            }
          }
          function reallyRemove() {
            checkState(vnode, original);
            onremove(vnode);
            removeChild(parent, vnode);
          }
        }
        function removeHTML(parent, vnode) {
          for (var i = 0; i < vnode.instance.length; i++) {
            parent.removeChild(vnode.instance[i]);
          }
        }
        function removeChild(parent, vnode) {
          while (vnode.dom != null && vnode.dom.parentNode === parent) {
            if (typeof vnode.tag !== "string") {
              vnode = vnode.instance;
              if (vnode != null)
                continue;
            } else if (vnode.tag === "<") {
              removeHTML(parent, vnode);
            } else {
              if (vnode.tag !== "[") {
                parent.removeChild(vnode.dom);
                if (!Array.isArray(vnode.children))
                  break;
              }
              if (vnode.children.length === 1) {
                vnode = vnode.children[0];
                if (vnode != null)
                  continue;
              } else {
                for (var i = 0; i < vnode.children.length; i++) {
                  var child = vnode.children[i];
                  if (child != null)
                    removeChild(parent, child);
                }
              }
            }
            break;
          }
        }
        function onremove(vnode) {
          if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function")
            callHook.call(vnode.state.onremove, vnode);
          if (vnode.attrs && typeof vnode.attrs.onremove === "function")
            callHook.call(vnode.attrs.onremove, vnode);
          if (typeof vnode.tag !== "string") {
            if (vnode.instance != null)
              onremove(vnode.instance);
          } else {
            var children = vnode.children;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child != null)
                  onremove(child);
              }
            }
          }
        }
        function setAttrs(vnode, attrs, ns) {
          if (vnode.tag === "input" && attrs.type != null)
            vnode.dom.setAttribute("type", attrs.type);
          var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file";
          for (var key in attrs) {
            setAttr(vnode, key, null, attrs[key], ns, isFileInput);
          }
        }
        function setAttr(vnode, key, old, value, ns, isFileInput) {
          if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object" || key === "type" && vnode.tag === "input")
            return;
          if (key[0] === "o" && key[1] === "n")
            return updateEvent(vnode, key, value);
          if (key.slice(0, 6) === "xlink:")
            vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
          else if (key === "style")
            updateStyle(vnode.dom, old, value);
          else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
              if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement()))
                return;
              if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value)
                return;
              if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value)
                return;
              if (isFileInput && "" + value !== "") {
                console.error("`value` is read-only on file inputs!");
                return;
              }
            }
            vnode.dom[key] = value;
          } else {
            if (typeof value === "boolean") {
              if (value)
                vnode.dom.setAttribute(key, "");
              else
                vnode.dom.removeAttribute(key);
            } else
              vnode.dom.setAttribute(key === "className" ? "class" : key, value);
          }
        }
        function removeAttr(vnode, key, old, ns) {
          if (key === "key" || key === "is" || old == null || isLifecycleMethod(key))
            return;
          if (key[0] === "o" && key[1] === "n")
            updateEvent(vnode, key, void 0);
          else if (key === "style")
            updateStyle(vnode.dom, old, null);
          else if (hasPropertyKey(vnode, key, ns) && key !== "className" && key !== "title" && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) {
            vnode.dom[key] = null;
          } else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1)
              key = key.slice(nsLastIndex + 1);
            if (old !== false)
              vnode.dom.removeAttribute(key === "className" ? "class" : key);
          }
        }
        function setLateSelectAttrs(vnode, attrs) {
          if ("value" in attrs) {
            if (attrs.value === null) {
              if (vnode.dom.selectedIndex !== -1)
                vnode.dom.value = null;
            } else {
              var normalized = "" + attrs.value;
              if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
                vnode.dom.value = normalized;
              }
            }
          }
          if ("selectedIndex" in attrs)
            setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, void 0);
        }
        function updateAttrs(vnode, old, attrs, ns) {
          if (old && old === attrs) {
            console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major");
          }
          if (attrs != null) {
            if (vnode.tag === "input" && attrs.type != null)
              vnode.dom.setAttribute("type", attrs.type);
            var isFileInput = vnode.tag === "input" && attrs.type === "file";
            for (var key in attrs) {
              setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput);
            }
          }
          var val;
          if (old != null) {
            for (var key in old) {
              if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) {
                removeAttr(vnode, key, val, ns);
              }
            }
          }
        }
        function isFormAttribute(vnode, attr) {
          return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement;
        }
        function isLifecycleMethod(attr) {
          return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
        }
        function hasPropertyKey(vnode, key, ns) {
          return ns === void 0 && // If it's a custom element, just keep it.
          (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
          key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height") && key in vnode.dom;
        }
        var uppercaseRegex = /[A-Z]/g;
        function toLowerCase(capital) {
          return "-" + capital.toLowerCase();
        }
        function normalizeKey(key) {
          return key[0] === "-" && key[1] === "-" ? key : key === "cssFloat" ? "float" : key.replace(uppercaseRegex, toLowerCase);
        }
        function updateStyle(element, old, style) {
          if (old === style) {
          } else if (style == null) {
            element.style.cssText = "";
          } else if (typeof style !== "object") {
            element.style.cssText = style;
          } else if (old == null || typeof old !== "object") {
            element.style.cssText = "";
            for (var key in style) {
              var value = style[key];
              if (value != null)
                element.style.setProperty(normalizeKey(key), String(value));
            }
          } else {
            for (var key in style) {
              var value = style[key];
              if (value != null && (value = String(value)) !== String(old[key])) {
                element.style.setProperty(normalizeKey(key), value);
              }
            }
            for (var key in old) {
              if (old[key] != null && style[key] == null) {
                element.style.removeProperty(normalizeKey(key));
              }
            }
          }
        }
        function EventDict() {
          this._ = currentRedraw;
        }
        EventDict.prototype = /* @__PURE__ */ Object.create(null);
        EventDict.prototype.handleEvent = function(ev) {
          var handler = this["on" + ev.type];
          var result;
          if (typeof handler === "function")
            result = handler.call(ev.currentTarget, ev);
          else if (typeof handler.handleEvent === "function")
            handler.handleEvent(ev);
          if (this._ && ev.redraw !== false)
            (0, this._)();
          if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
          }
        };
        function updateEvent(vnode, key, value) {
          if (vnode.events != null) {
            vnode.events._ = currentRedraw;
            if (vnode.events[key] === value)
              return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
              if (vnode.events[key] == null)
                vnode.dom.addEventListener(key.slice(2), vnode.events, false);
              vnode.events[key] = value;
            } else {
              if (vnode.events[key] != null)
                vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
              vnode.events[key] = void 0;
            }
          } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
          }
        }
        function initLifecycle(source, vnode, hooks) {
          if (typeof source.oninit === "function")
            callHook.call(source.oninit, vnode);
          if (typeof source.oncreate === "function")
            hooks.push(callHook.bind(source.oncreate, vnode));
        }
        function updateLifecycle(source, vnode, hooks) {
          if (typeof source.onupdate === "function")
            hooks.push(callHook.bind(source.onupdate, vnode));
        }
        function shouldNotUpdate(vnode, old) {
          do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
              var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
              if (force !== void 0 && !force)
                break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
              var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
              if (force !== void 0 && !force)
                break;
            }
            return false;
          } while (false);
          vnode.dom = old.dom;
          vnode.domSize = old.domSize;
          vnode.instance = old.instance;
          vnode.attrs = old.attrs;
          vnode.children = old.children;
          vnode.text = old.text;
          return true;
        }
        var currentDOM;
        return function(dom, vnodes, redraw) {
          if (!dom)
            throw new TypeError("DOM element being rendered to does not exist.");
          if (currentDOM != null && dom.contains(currentDOM)) {
            throw new TypeError("Node is currently being rendered to and thus is locked.");
          }
          var prevRedraw = currentRedraw;
          var prevDOM = currentDOM;
          var hooks = [];
          var active = activeElement();
          var namespace = dom.namespaceURI;
          currentDOM = dom;
          currentRedraw = typeof redraw === "function" ? redraw : void 0;
          try {
            if (dom.vnodes == null)
              dom.textContent = "";
            vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes]);
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? void 0 : namespace);
            dom.vnodes = vnodes;
            if (active != null && activeElement() !== active && typeof active.focus === "function")
              active.focus();
            for (var i = 0; i < hooks.length; i++)
              hooks[i]();
          } finally {
            currentRedraw = prevRedraw;
            currentDOM = prevDOM;
          }
        };
      };
    }
  });
  var require_render2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render.js"(exports, module) {
      "use strict";
      module.exports = require_render()(typeof window !== "undefined" ? window : null);
    }
  });
  var require_mount_redraw = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/api/mount-redraw.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function(render, schedule, console2) {
        var subscriptions = [];
        var pending = false;
        var offset = -1;
        function sync() {
          for (offset = 0; offset < subscriptions.length; offset += 2) {
            try {
              render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw);
            } catch (e) {
              console2.error(e);
            }
          }
          offset = -1;
        }
        function redraw() {
          if (!pending) {
            pending = true;
            schedule(function() {
              pending = false;
              sync();
            });
          }
        }
        redraw.sync = sync;
        function mount(root, component) {
          if (component != null && component.view == null && typeof component !== "function") {
            throw new TypeError("m.mount expects a component, not a vnode.");
          }
          var index = subscriptions.indexOf(root);
          if (index >= 0) {
            subscriptions.splice(index, 2);
            if (index <= offset)
              offset -= 2;
            render(root, []);
          }
          if (component != null) {
            subscriptions.push(root, component);
            render(root, Vnode(component), redraw);
          }
        }
        return { mount, redraw };
      };
    }
  });
  var require_mount_redraw2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/mount-redraw.js"(exports, module) {
      "use strict";
      var render = require_render2();
      module.exports = require_mount_redraw()(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null);
    }
  });
  var require_build = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/querystring/build.js"(exports, module) {
      "use strict";
      module.exports = function(object2) {
        if (Object.prototype.toString.call(object2) !== "[object Object]")
          return "";
        var args = [];
        for (var key in object2) {
          destructure(key, object2[key]);
        }
        return args.join("&");
        function destructure(key2, value) {
          if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              destructure(key2 + "[" + i + "]", value[i]);
            }
          } else if (Object.prototype.toString.call(value) === "[object Object]") {
            for (var i in value) {
              destructure(key2 + "[" + i + "]", value[i]);
            }
          } else
            args.push(encodeURIComponent(key2) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
        }
      };
    }
  });
  var require_assign = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/assign.js"(exports, module) {
      "use strict";
      var hasOwn2 = require_hasOwn();
      module.exports = Object.assign || function(target, source) {
        for (var key in source) {
          if (hasOwn2.call(source, key))
            target[key] = source[key];
        }
      };
    }
  });
  var require_build2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/build.js"(exports, module) {
      "use strict";
      var buildQueryString = require_build();
      var assign = require_assign();
      module.exports = function(template, params) {
        if (/:([^\/\.-]+)(\.{3})?:/.test(template)) {
          throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
        }
        if (params == null)
          return template;
        var queryIndex = template.indexOf("?");
        var hashIndex = template.indexOf("#");
        var queryEnd = hashIndex < 0 ? template.length : hashIndex;
        var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
        var path = template.slice(0, pathEnd);
        var query = {};
        assign(query, params);
        var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m29, key, variadic) {
          delete query[key];
          if (params[key] == null)
            return m29;
          return variadic ? params[key] : encodeURIComponent(String(params[key]));
        });
        var newQueryIndex = resolved.indexOf("?");
        var newHashIndex = resolved.indexOf("#");
        var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
        var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
        var result = resolved.slice(0, newPathEnd);
        if (queryIndex >= 0)
          result += template.slice(queryIndex, queryEnd);
        if (newQueryIndex >= 0)
          result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
        var querystring = buildQueryString(query);
        if (querystring)
          result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
        if (hashIndex >= 0)
          result += template.slice(hashIndex);
        if (newHashIndex >= 0)
          result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
        return result;
      };
    }
  });
  var require_request = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/request/request.js"(exports, module) {
      "use strict";
      var buildPathname = require_build2();
      var hasOwn2 = require_hasOwn();
      module.exports = function($window, Promise2, oncompletion) {
        var callbackCount = 0;
        function PromiseProxy(executor) {
          return new Promise2(executor);
        }
        PromiseProxy.prototype = Promise2.prototype;
        PromiseProxy.__proto__ = Promise2;
        function makeRequest(factory) {
          return function(url, args) {
            if (typeof url !== "string") {
              args = url;
              url = url.url;
            } else if (args == null)
              args = {};
            var promise = new Promise2(function(resolve, reject) {
              factory(buildPathname(url, args.params), args, function(data) {
                if (typeof args.type === "function") {
                  if (Array.isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                      data[i] = new args.type(data[i]);
                    }
                  } else
                    data = new args.type(data);
                }
                resolve(data);
              }, reject);
            });
            if (args.background === true)
              return promise;
            var count = 0;
            function complete() {
              if (--count === 0 && typeof oncompletion === "function")
                oncompletion();
            }
            return wrap(promise);
            function wrap(promise2) {
              var then = promise2.then;
              promise2.constructor = PromiseProxy;
              promise2.then = function() {
                count++;
                var next = then.apply(promise2, arguments);
                next.then(complete, function(e) {
                  complete();
                  if (count === 0)
                    throw e;
                });
                return wrap(next);
              };
              return promise2;
            }
          };
        }
        function hasHeader(args, name) {
          for (var key in args.headers) {
            if (hasOwn2.call(args.headers, key) && key.toLowerCase() === name)
              return true;
          }
          return false;
        }
        return {
          request: makeRequest(function(url, args, resolve, reject) {
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
              aborted = true;
              abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : void 0, typeof args.password === "string" ? args.password : void 0);
            if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
              xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            }
            if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
              xhr.setRequestHeader("Accept", "application/json, text/*");
            }
            if (args.withCredentials)
              xhr.withCredentials = args.withCredentials;
            if (args.timeout)
              xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for (var key in args.headers) {
              if (hasOwn2.call(args.headers, key)) {
                xhr.setRequestHeader(key, args.headers[key]);
              }
            }
            xhr.onreadystatechange = function(ev) {
              if (aborted)
                return;
              if (ev.target.readyState === 4) {
                try {
                  var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                  var response = ev.target.response, message;
                  if (responseType === "json") {
                    if (!ev.target.responseType && typeof args.extract !== "function") {
                      try {
                        response = JSON.parse(ev.target.responseText);
                      } catch (e) {
                        response = null;
                      }
                    }
                  } else if (!responseType || responseType === "text") {
                    if (response == null)
                      response = ev.target.responseText;
                  }
                  if (typeof args.extract === "function") {
                    response = args.extract(ev.target, args);
                    success = true;
                  } else if (typeof args.deserialize === "function") {
                    response = args.deserialize(response);
                  }
                  if (success)
                    resolve(response);
                  else {
                    var completeErrorResponse = function() {
                      try {
                        message = ev.target.responseText;
                      } catch (e) {
                        message = response;
                      }
                      var error = new Error(message);
                      error.code = ev.target.status;
                      error.response = response;
                      reject(error);
                    };
                    if (xhr.status === 0) {
                      setTimeout(function() {
                        if (isTimeout)
                          return;
                        completeErrorResponse();
                      });
                    } else
                      completeErrorResponse();
                  }
                } catch (e) {
                  reject(e);
                }
              }
            };
            xhr.ontimeout = function(ev) {
              isTimeout = true;
              var error = new Error("Request timed out");
              error.code = ev.target.status;
              reject(error);
            };
            if (typeof args.config === "function") {
              xhr = args.config(xhr, args, url) || xhr;
              if (xhr !== original) {
                replacedAbort = xhr.abort;
                xhr.abort = function() {
                  aborted = true;
                  replacedAbort.call(this);
                };
              }
            }
            if (body == null)
              xhr.send();
            else if (typeof args.serialize === "function")
              xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams)
              xhr.send(body);
            else
              xhr.send(JSON.stringify(body));
          }),
          jsonp: makeRequest(function(url, args, resolve, reject) {
            var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
            var script = $window.document.createElement("script");
            $window[callbackName] = function(data) {
              delete $window[callbackName];
              script.parentNode.removeChild(script);
              resolve(data);
            };
            script.onerror = function() {
              delete $window[callbackName];
              script.parentNode.removeChild(script);
              reject(new Error("JSONP request failed"));
            };
            script.src = url + (url.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(args.callbackKey || "callback") + "=" + encodeURIComponent(callbackName);
            $window.document.documentElement.appendChild(script);
          })
        };
      };
    }
  });
  var require_request2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/request.js"(exports, module) {
      "use strict";
      var PromisePolyfill = require_promise();
      var mountRedraw = require_mount_redraw2();
      module.exports = require_request()(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw);
    }
  });
  var require_parse = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/querystring/parse.js"(exports, module) {
      "use strict";
      function decodeURIComponentSave(str) {
        try {
          return decodeURIComponent(str);
        } catch (err) {
          return str;
        }
      }
      module.exports = function(string) {
        if (string === "" || string == null)
          return {};
        if (string.charAt(0) === "?")
          string = string.slice(1);
        var entries = string.split("&"), counters = {}, data = {};
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i].split("=");
          var key = decodeURIComponentSave(entry[0]);
          var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : "";
          if (value === "true")
            value = true;
          else if (value === "false")
            value = false;
          var levels = key.split(/\]\[?|\[/);
          var cursor = data;
          if (key.indexOf("[") > -1)
            levels.pop();
          for (var j2 = 0; j2 < levels.length; j2++) {
            var level = levels[j2], nextLevel = levels[j2 + 1];
            var isNumber4 = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
              var key = levels.slice(0, j2).join();
              if (counters[key] == null) {
                counters[key] = Array.isArray(cursor) ? cursor.length : 0;
              }
              level = counters[key]++;
            } else if (level === "__proto__")
              break;
            if (j2 === levels.length - 1)
              cursor[level] = value;
            else {
              var desc = Object.getOwnPropertyDescriptor(cursor, level);
              if (desc != null)
                desc = desc.value;
              if (desc == null)
                cursor[level] = desc = isNumber4 ? [] : {};
              cursor = desc;
            }
          }
        }
        return data;
      };
    }
  });
  var require_parse2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/parse.js"(exports, module) {
      "use strict";
      var parseQueryString = require_parse();
      module.exports = function(url) {
        var queryIndex = url.indexOf("?");
        var hashIndex = url.indexOf("#");
        var queryEnd = hashIndex < 0 ? url.length : hashIndex;
        var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
        var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
        if (!path)
          path = "/";
        else {
          if (path[0] !== "/")
            path = "/" + path;
          if (path.length > 1 && path[path.length - 1] === "/")
            path = path.slice(0, -1);
        }
        return {
          path,
          params: queryIndex < 0 ? {} : parseQueryString(url.slice(queryIndex + 1, queryEnd))
        };
      };
    }
  });
  var require_compileTemplate = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/compileTemplate.js"(exports, module) {
      "use strict";
      var parsePathname = require_parse2();
      module.exports = function(template) {
        var templateData = parsePathname(template);
        var templateKeys = Object.keys(templateData.params);
        var keys = [];
        var regexp = new RegExp("^" + templateData.path.replace(
          // I escape literal text so people can use things like `:file.:ext` or
          // `:lang-:locale` in routes. This is all merged into one pass so I
          // don't also accidentally escape `-` and make it harder to detect it to
          // ban it from template parameters.
          /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
          function(m29, key, extra) {
            if (key == null)
              return "\\" + m29;
            keys.push({ k: key, r: extra === "..." });
            if (extra === "...")
              return "(.*)";
            if (extra === ".")
              return "([^/]+)\\.";
            return "([^/]+)" + (extra || "");
          }
        ) + "$");
        return function(data) {
          for (var i = 0; i < templateKeys.length; i++) {
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]])
              return false;
          }
          if (!keys.length)
            return regexp.test(data.path);
          var values = regexp.exec(data.path);
          if (values == null)
            return false;
          for (var i = 0; i < keys.length; i++) {
            data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
          }
          return true;
        };
      };
    }
  });
  var require_censor = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/censor.js"(exports, module) {
      "use strict";
      var hasOwn2 = require_hasOwn();
      var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
      module.exports = function(attrs, extras) {
        var result = {};
        if (extras != null) {
          for (var key in attrs) {
            if (hasOwn2.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
              result[key] = attrs[key];
            }
          }
        } else {
          for (var key in attrs) {
            if (hasOwn2.call(attrs, key) && !magic.test(key)) {
              result[key] = attrs[key];
            }
          }
        }
        return result;
      };
    }
  });
  var require_router = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/api/router.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var m29 = require_hyperscript();
      var Promise2 = require_promise();
      var buildPathname = require_build2();
      var parsePathname = require_parse2();
      var compileTemplate = require_compileTemplate();
      var assign = require_assign();
      var censor = require_censor();
      var sentinel = {};
      function decodeURIComponentSave(component) {
        try {
          return decodeURIComponent(component);
        } catch (e) {
          return component;
        }
      }
      module.exports = function($window, mountRedraw) {
        var callAsync = $window == null ? null : typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout;
        var p2 = Promise2.resolve();
        var scheduled = false;
        var ready = false;
        var state = 0;
        var compiled, fallbackRoute;
        var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
        var RouterRoot = {
          onbeforeupdate: function() {
            state = state ? 2 : 1;
            return !(!state || sentinel === currentResolver);
          },
          onremove: function() {
            $window.removeEventListener("popstate", fireAsync, false);
            $window.removeEventListener("hashchange", resolveRoute, false);
          },
          view: function() {
            if (!state || sentinel === currentResolver)
              return;
            var vnode = [Vnode(component, attrs.key, attrs)];
            if (currentResolver)
              vnode = currentResolver.render(vnode[0]);
            return vnode;
          }
        };
        var SKIP = route.SKIP = {};
        function resolveRoute() {
          scheduled = false;
          var prefix = $window.location.hash;
          if (route.prefix[0] !== "#") {
            prefix = $window.location.search + prefix;
            if (route.prefix[0] !== "?") {
              prefix = $window.location.pathname + prefix;
              if (prefix[0] !== "/")
                prefix = "/" + prefix;
            }
          }
          var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave).slice(route.prefix.length);
          var data = parsePathname(path);
          assign(data.params, $window.history.state);
          function reject(e) {
            console.error(e);
            setPath(fallbackRoute, null, { replace: true });
          }
          loop(0);
          function loop(i) {
            for (; i < compiled.length; i++) {
              if (compiled[i].check(data)) {
                var payload = compiled[i].component;
                var matchedRoute = compiled[i].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                  if (update !== lastUpdate)
                    return;
                  if (comp === SKIP)
                    return loop(i + 1);
                  component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                  attrs = data.params, currentPath = path, lastUpdate = null;
                  currentResolver = payload.render ? payload : null;
                  if (state === 2)
                    mountRedraw.redraw();
                  else {
                    state = 2;
                    mountRedraw.redraw.sync();
                  }
                };
                if (payload.view || typeof payload === "function") {
                  payload = {};
                  update(localComp);
                } else if (payload.onmatch) {
                  p2.then(function() {
                    return payload.onmatch(data.params, path, matchedRoute);
                  }).then(update, path === fallbackRoute ? null : reject);
                } else
                  update("div");
                return;
              }
            }
            if (path === fallbackRoute) {
              throw new Error("Could not resolve default route " + fallbackRoute + ".");
            }
            setPath(fallbackRoute, null, { replace: true });
          }
        }
        function fireAsync() {
          if (!scheduled) {
            scheduled = true;
            callAsync(resolveRoute);
          }
        }
        function setPath(path, data, options) {
          path = buildPathname(path, data);
          if (ready) {
            fireAsync();
            var state2 = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace)
              $window.history.replaceState(state2, title, route.prefix + path);
            else
              $window.history.pushState(state2, title, route.prefix + path);
          } else {
            $window.location.href = route.prefix + path;
          }
        }
        function route(root, defaultRoute, routes) {
          if (!root)
            throw new TypeError("DOM element being rendered to does not exist.");
          compiled = Object.keys(routes).map(function(route2) {
            if (route2[0] !== "/")
              throw new SyntaxError("Routes must start with a '/'.");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route2)) {
              throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
            }
            return {
              route: route2,
              component: routes[route2],
              check: compileTemplate(route2)
            };
          });
          fallbackRoute = defaultRoute;
          if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
              return i.check(defaultData);
            })) {
              throw new ReferenceError("Default route doesn't match any known routes.");
            }
          }
          if (typeof $window.history.pushState === "function") {
            $window.addEventListener("popstate", fireAsync, false);
          } else if (route.prefix[0] === "#") {
            $window.addEventListener("hashchange", resolveRoute, false);
          }
          ready = true;
          mountRedraw.mount(root, RouterRoot);
          resolveRoute();
        }
        route.set = function(path, data, options) {
          if (lastUpdate != null) {
            options = options || {};
            options.replace = true;
          }
          lastUpdate = null;
          setPath(path, data, options);
        };
        route.get = function() {
          return currentPath;
        };
        route.prefix = "#!";
        route.Link = {
          view: function(vnode) {
            var child = m29(
              vnode.attrs.selector || "a",
              censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
              vnode.children
            );
            var options, onclick, href;
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
              child.attrs.href = null;
              child.attrs["aria-disabled"] = "true";
            } else {
              options = vnode.attrs.options;
              onclick = vnode.attrs.onclick;
              href = buildPathname(child.attrs.href, vnode.attrs.params);
              child.attrs.href = route.prefix + href;
              child.attrs.onclick = function(e) {
                var result;
                if (typeof onclick === "function") {
                  result = onclick.call(e.currentTarget, e);
                } else if (onclick == null || typeof onclick !== "object") {
                } else if (typeof onclick.handleEvent === "function") {
                  onclick.handleEvent(e);
                }
                if (
                  // Skip if `onclick` prevented default
                  result !== false && !e.defaultPrevented && // Ignore everything but left clicks
                  (e.button === 0 || e.which === 0 || e.which === 1) && // Let the browser handle `target=_blank`, etc.
                  (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                  !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
                ) {
                  e.preventDefault();
                  e.redraw = false;
                  route.set(href, null, options);
                }
              };
            }
            return child;
          }
        };
        route.param = function(key) {
          return attrs && key != null ? attrs[key] : attrs;
        };
        return route;
      };
    }
  });
  var require_route = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/route.js"(exports, module) {
      "use strict";
      var mountRedraw = require_mount_redraw2();
      module.exports = require_router()(typeof window !== "undefined" ? window : null, mountRedraw);
    }
  });
  var require_mithril = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/index.js"(exports, module) {
      "use strict";
      var hyperscript = require_hyperscript2();
      var request = require_request2();
      var mountRedraw = require_mount_redraw2();
      var m29 = function m30() {
        return hyperscript.apply(this, arguments);
      };
      m29.m = hyperscript;
      m29.trust = hyperscript.trust;
      m29.fragment = hyperscript.fragment;
      m29.Fragment = "[";
      m29.mount = mountRedraw.mount;
      m29.route = require_route();
      m29.render = require_render2();
      m29.redraw = mountRedraw.redraw;
      m29.request = request.request;
      m29.jsonp = request.jsonp;
      m29.parseQueryString = require_parse();
      m29.buildQueryString = require_build();
      m29.parsePathname = require_parse2();
      m29.buildPathname = require_build2();
      m29.vnode = require_vnode();
      m29.PromisePolyfill = require_polyfill();
      m29.censor = require_censor();
      module.exports = m29;
    }
  });
  var require_timers = __commonJS({
    "src/common/cjs/timers.js"(exports, module) {
      module.exports = {
        seconds: seconds3,
        makeDebouncer,
        makeThrottler,
        runAfter,
        runOnce,
        runFnPeriodically,
        makeValueChangeDetector,
        makeValueInPredicateDetector,
        runFnWhenValueChanges,
        Delay: Delay3
      };
      function seconds3(n) {
        const ms = n * 1e3;
        return ms;
      }
      function Delay3(fn, forMs) {
        const [_fn] = makeDebouncer(forMs, fn);
        return (...args) => _fn(...args);
      }
      function makeDebouncer(ms, fn) {
        let timerId;
        const clear = () => clearTimeout(timerId);
        const debouncedFn = (...args) => {
          clear();
          timerId = setTimeout(fn, ms, ...args);
        };
        return [debouncedFn, clear];
      }
      function makeThrottler(fn, ms) {
        let canRun = true;
        const [throttle, clear] = makeDebouncer(ms, () => canRun = true);
        const throttledFn = (...args) => {
          if (!canRun)
            return;
          canRun = false;
          throttle();
          fn(...args);
        };
        return [throttledFn, clear];
      }
      function runAfter(delayInMs, fn) {
        const [runSoon, cancel] = makeDebouncer(delayInMs, fn);
        runSoon();
        return cancel;
      }
      function runOnce(fn) {
        let run = true;
        let predicateFn = () => true;
        const onceFn = (...args) => {
          if (run && predicateFn()) {
            run = false;
            fn(...args);
          }
        };
        onceFn.when = (fn2) => {
          predicateFn = fn2;
          return onceFn;
        };
        return onceFn;
      }
      function runFnPeriodically(fn, ms = 16) {
        const cleanup = () => clearInterval(timerId);
        const timerId = setInterval(fn, ms, { cleanup });
        return cleanup;
      }
      function makeValueChangeDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        equalityFn = (a2, b) => a2 === b
      }) {
        let currentValue = getValueFn();
        const performCheck = (...checkArgs) => {
          const newValue = getValueFn();
          if (!equalityFn(newValue, currentValue)) {
            const oldValue = currentValue;
            currentValue = newValue;
            onChange(newValue, oldValue, ...checkArgs);
          }
        };
        return performCheck;
      }
      function makeValueInPredicateDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        predicateFn = () => true
      }) {
        const performCheck = makeValueChangeDetector({
          getValueFn,
          onChange: (newValue) => predicateFn(newValue) && onChange()
        });
        return performCheck;
      }
      function runFnWhenValueChanges({ fn, getValueFn }) {
        const performCheck = makeValueChangeDetector({ getValueFn, onChange: fn });
        const checkPeriodInMs = 16;
        const cleanup = runFnPeriodically(performCheck, checkPeriodInMs);
        return cleanup;
      }
    }
  });
  var require_promises = __commonJS({
    "src/common/cjs/promises.js"(exports, module) {
      module.exports = {
        isThennable,
        makePromise: makePromise2,
        delay: delay2,
        unzip,
        makeIdleDetectorWithTimeout,
        poolPromises,
        makePromisePool,
        runPromisesInSequence
      };
      var { seconds: seconds3, runOnce, makeDebouncer } = require_timers();
      function makeUnzipReducer() {
        return [
          (acc, [first, second]) => [
            [...acc[0], first],
            [...acc[1], second]
          ],
          [[], []]
        ];
      }
      function unzip(arr) {
        return arr.reduce(...makeUnzipReducer());
      }
      function isThennable(obj) {
        return obj && typeof obj.then === "function";
      }
      function makePromise2() {
        let _resolve;
        let _reject;
        const promise = new Promise((resolve, reject) => {
          _resolve = resolve;
          _reject = reject;
        });
        return [promise, _resolve, _reject];
      }
      function delay2(ms) {
        const [promise, resolve] = makePromise2();
        setTimeout(resolve, ms || 0);
        return promise;
      }
      function makeIdleDetectorWithTimeout(initBouncer = () => {
      }, { withinMs = 500, timeoutInMs = seconds3(5) }) {
        const [promise, resolve, reject] = makePromise2();
        const [resolveSoon, dontResolve] = makeDebouncer(resolve, withinMs);
        const [rejectLater, dontReject] = makeDebouncer(reject, timeoutInMs);
        const cleanup = initBouncer(resolveSoon);
        resolveSoon();
        rejectLater();
        return promise.finally(() => {
          cleanup && cleanup();
          dontResolve();
          dontReject();
        });
      }
      function poolPromises(limit, ...promiseMakerFns) {
        const checkAll = () => canPromisesRun.forEach((check) => check());
        const context = makePoolCounter(limit, checkAll);
        const [pooledPromises, canPromisesRun] = promiseMakerFns.map((fn) => makePoolAwarePromise(context, fn)).reduce(...makeUnzipReducer());
        checkAll();
        return Promise.allSettled(pooledPromises);
      }
      function makePoolAwarePromise(context, promiseMakerFn) {
        const { allowedToStartNext, bumpRunCount, unbump } = context;
        const [promise, resolve, reject] = makePromise2();
        const startPromise = () => {
          bumpRunCount();
          promiseMakerFn().then(resolve, reject).finally(unbump);
        };
        return [promise, runOnce(startPromise).when(allowedToStartNext)];
      }
      function makePoolCounter(limit, onChange) {
        let running = 0;
        return {
          allowedToStartNext: () => running < Math.max(1, limit),
          bumpRunCount: () => onChange(++running),
          unbump: () => onChange(--running)
        };
      }
      function makePromisePool(limit) {
        let running = 0;
        const pending = /* @__PURE__ */ new Set();
        return (promiseMakerFn) => {
          const [promise, O2, X2] = makePromise2();
          promise.finally(() => (running -= 1, next()));
          pending.add({ promiseMakerFn, O: O2, X: X2 });
          next();
          return promise;
        };
        function next() {
          Array.from(pending).every((config) => {
            if (running < limit) {
              running += 1;
              pending.delete(config);
              config.promiseMakerFn().then(config.O, config.X);
              return true;
            }
          });
        }
      }
      function runPromisesInSequence(initialState, ...promiseMakerFns) {
        const [promise, resolve, reject] = makePromise2();
        promiseMakerFns.reduce(PromiseSequenceReducer(reject), Promise.resolve(initialState)).then(resolve).catch(reject);
        return promise;
      }
      function PromiseSequenceReducer(reject) {
        return (lastPromise, createNextPromise) => {
          return lastPromise.then(createNextPromise, reject);
        };
      }
    }
  });
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.10.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var I2 = Object.defineProperty;
      var _2 = Object.getOwnPropertyDescriptor;
      var j2 = Object.getOwnPropertyNames;
      var v2 = Object.getOwnPropertySymbols;
      var F = Object.prototype.hasOwnProperty;
      var L = Object.prototype.propertyIsEnumerable;
      var E = (t, n, e) => n in t ? I2(t, n, { enumerable: true, configurable: true, writable: true, value: e }) : t[n] = e;
      var P = (t, n) => {
        for (var e in n || (n = {}))
          F.call(n, e) && E(t, e, n[e]);
        if (v2)
          for (var e of v2(n))
            L.call(n, e) && E(t, e, n[e]);
        return t;
      };
      var q2 = (t, n) => {
        var e = {};
        for (var o in t)
          F.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
        if (t != null && v2)
          for (var o of v2(t))
            n.indexOf(o) < 0 && L.call(t, o) && (e[o] = t[o]);
        return e;
      };
      var R2 = (t, n) => {
        for (var e in n)
          I2(t, e, { get: n[e], enumerable: true });
      };
      var y2 = (t, n, e, o) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let r2 of j2(n))
            !F.call(t, r2) && r2 !== e && I2(t, r2, { get: () => n[r2], enumerable: !(o = _2(n, r2)) || o.enumerable });
        return t;
      };
      var a2 = (t) => y2(I2({}, "__esModule", { value: true }), t);
      var yt = {};
      R2(yt, { against: () => C, allOf: () => Q2, anyOf: () => K2, cata: () => Tt, deepEq: () => Mt, defined: () => Vt, empty: () => T2, endsWith: () => Ct, eq: () => J2, every: () => Lt, falsy: () => Yt, firstOf: () => qt, getIterationLimit: () => bt2, gt: () => ht, gte: () => Ht, hasOwn: () => Qt, inRange: () => $t, includedIn: () => Jt, includes: () => Gt, instanceOf: () => gt, isArray: () => l2, isDate: () => ft, isFunction: () => f2, isIterable: () => B, isNumber: () => $, isPojo: () => g2, isRegExp: () => x, isStrictly: () => Kt, isString: () => b, lastOf: () => Rt, lt: () => zt, lte: () => Ut, match: () => vt, not: () => Et, otherwise: () => Dt2, pluck: () => xt, setIterationLimit: () => Nt2, some: () => Pt, spread: () => jt, startsWith: () => Bt, truthy: () => Xt, when: () => Ft2 });
      module.exports = a2(yt);
      var d2 = {};
      R2(d2, { instanceOf: () => p2, isArguments: () => h2, isArray: () => tt2, isDate: () => nt2, isFormData: () => mt2, isFunction: () => z2, isIterable: () => ut2, isMap: () => it2, isNumber: () => ot2, isObject: () => H2, isPojo: () => ct2, isRegExp: () => rt2, isSet: () => st2, isString: () => et2 });
      var V2 = Object.prototype;
      var k2 = V2.toString;
      var D2 = (t) => (n) => typeof n === t;
      var p2 = (t) => (n) => n instanceof t;
      var { isArray: tt2 } = Array;
      var h2 = (t) => k2.call(t) === "[object Arguments]";
      var nt2 = (t) => p2(Date)(t) && !isNaN(t);
      var z2 = D2("function");
      var et2 = D2("string");
      var ot2 = (t) => t === t && D2("number")(t);
      var H2 = (t) => t !== null && D2("object")(t);
      var rt2 = p2(RegExp);
      var st2 = p2(Set);
      var it2 = p2(Map);
      var ct2 = (t) => t === null || !H2(t) || h2(t) ? false : Object.getPrototypeOf(t) === V2;
      var ut2 = (t) => t != null && [t[Symbol.iterator], t.next].every(z2);
      var mt2 = (t) => typeof FormData != "undefined" && p2(FormData)(t);
      var { isArguments: lt, isArray: l2, isDate: ft, isFunction: f2, isNumber: $ } = d2;
      var { isPojo: g2, isRegExp: x, isString: b, instanceOf: gt } = d2;
      var { isMap: pt2, isSet: Ot, isIterable: B, isFormData: wt } = d2;
      var { keys: w2, entries: St, assign: dt } = Object;
      var O2 = 2e4;
      var bt2 = () => O2;
      var Nt2 = (t) => {
        let n = O2;
        return O2 = t, () => O2 = n;
      };
      function vt(t) {
        return (...n) => C(...n)(t);
      }
      var C = (...t) => (n) => {
        let [e, o] = lt(n) ? [{}, Array.from(n)] : pt2(n) || wt(n) ? [{ isMap: true }, n.entries()] : Ot(n) ? [{ isSet: true }, n.values()] : [{}, n];
        if (!B(o))
          return U2(...t)(o).result;
        let [r2, u] = t.reduce(([s2, m29], S) => It(S) ? [S, m29] : [s2, [...m29, S]], [() => ({ value: () => {
        } }), []]), c = [];
        do {
          let { value: s2, done: m29 } = o.next();
          if (m29)
            return r2().value();
          c.push(s2);
          let { found: S, result: Z2 } = U2(...u)(e.isSet ? s2 : e.isMap ? { key: s2[0], value: s2[1] } : [...c]);
          if (S)
            return Z2;
        } while (c.length < O2 || e.isSet || e.isMap);
        throw new Error(`Hit iterationLimit: ${O2}. Use setIterationLimit(Infinity) to disable.`);
      };
      var U2 = (...t) => {
        let n;
        return (e) => ({ found: !!t.find((r2) => {
          let u = r2(e), { matched: c, value: s2 } = u || {};
          return [c, s2].every(f2) ? c(e) && (n = s2(e), true) : u && (n = u);
        }), result: n });
      };
      var G2 = Symbol("@@match-iz/otherwise");
      var It = (t) => (t == null ? void 0 : t[G2]) === true;
      var Dt2 = (t) => {
        let n = (e) => ({ matched: () => true, value: () => f2(t) ? t(e) : t });
        return n[G2] = true, n;
      };
      var W = (t) => (n) => (e) => ({ matched: () => i(t, e, (o) => e = o), value: () => f2(n) ? b(e) && x(t) ? n(...Wt2(e.match(t))) : n(e) : n });
      var Ft2 = (...t) => {
        if (t.length === 1) {
          let [n] = t;
          return W(n);
        }
        if (t.length === 2) {
          let [n, e] = t;
          return W(n)(e);
        }
        if (t.length > 2) {
          let n = t.slice(-1)[0], e = t.slice(0, -1);
          return W(Q2(e))(n);
        }
        throw new Error("Expected at least 1 argument");
      };
      var Wt2 = (t) => {
        let { groups: n } = t;
        return n ? [n, t] : [t];
      };
      var i = (t, n, e) => g2(t) ? w2(t).every((o) => i(t[o], n == null ? void 0 : n[o], e)) : l2(t) ? l2(n) && t.length === n.length && t.every((o, r2) => i(o, n == null ? void 0 : n[r2], e)) : f2(t) ? t(n, e) : b(n) && x(t) ? t.test(n) : t === n || [t, n].every(Number.isNaN);
      var xt = (...t) => (n, e) => t.length === 0 || (f2(t[0]) ? t[0](n) : i(t[0], n, e)) ? (e(n), true) : false;
      var At = (t, n) => [t, n].every(g2) ? w2(t).length === w2(n).length : true;
      var J2 = (t) => (n, e) => At(t, n) && i(t, n, e);
      var Mt = (t) => A2(t, (n) => g2(n) ? J2(n) : n);
      var Et = (t) => (n, e) => !i(t, n, e);
      var K2 = (...t) => (n, e) => t.flat().some((o) => i(o, n, e));
      var Q2 = (...t) => (n, e) => t.flat().every((o) => i(o, n, e));
      var Lt = (t) => Y2((n) => n.every((e) => i(t, e)));
      var Pt = (t) => Y2((n) => n.some((e) => i(t, e)));
      var qt = (...t) => M((n, e) => t.length <= n.length && i(t, n.slice(0, t.length), e));
      var Rt = (...t) => M((n, e) => t.length <= n.length && i(t, n.slice(n.length - t.length), e));
      var T2 = (t) => t !== t || !t && t !== 0 && t !== false || l2(t) && !t.length || g2(t) && !w2(t).length;
      var Vt = (t) => !T2(t);
      var ht = (t) => N((n) => n > t);
      var zt = (t) => N((n) => n < t);
      var Ht = (t) => N((n) => n >= t);
      var Ut = (t) => N((n) => n <= t);
      var $t = (t, n) => N((e) => e >= Math.min(t, n) && e <= Math.max(t, n));
      var Bt = (t) => X2((n) => n.startsWith(t));
      var Ct = (t) => X2((n) => n.endsWith(t));
      var Gt = (t) => M((n) => n.includes(t));
      var Jt = K2;
      var Kt = (t) => (n) => n === t;
      var Qt = (...t) => (n) => g2(n) && (([e, o]) => e.length && e.every((r2) => o.includes(r2)))([t.flat(), w2(n)]);
      var Tt = (e) => {
        var o = e, { getValue: t } = o, n = q2(o, ["getValue"]);
        return St(n).reduce((r2, [u, c]) => dt(r2, { [u]: (s2) => (m29) => ({ matched: () => c(m29), value: () => f2(s2) ? s2(t(m29)) : s2 }) }), {});
      };
      var Xt = (t) => !!t;
      var Yt = (t) => !t;
      var Zt = (t) => (n, e) => (n[e] = A2(n[e], t), n);
      var _t = (t) => (n) => A2(n, t);
      var A2 = (t, n) => n(g2(t) ? w2(t).reduce(Zt(n), P({}, t)) : l2(t) ? t.map(_t(n)) : t);
      var jt = (t) => new Proxy({}, { get: () => t });
      var X2 = (t) => (n) => b(n) && t(n);
      var N = (t) => (n) => $(n) && t(n);
      var Y2 = (t) => (n, e) => l2(n) && t(n, e);
      var M = (t) => (n, e) => (l2(n) || b(n)) && t(n, e);
    }
  });
  var require_fp = __commonJS({
    "src/common/cjs/fp.js"(exports, module) {
      function compose(...fns) {
        return (...x) => fns.reduceRight((g2, f2) => [f2(...g2)], x)[0];
      }
      function flow2(...fns) {
        return (...x) => fns.reduce((g2, f2) => [f2(...g2)], x)[0];
      }
      function pipe3(x, ...fns) {
        return fns.reduce((g2, f2) => f2(g2), x);
      }
      function flip(fn) {
        return (...x) => (...y2) => fn(...y2)(...x);
      }
      function do_(f2) {
        return f2();
      }
      function memo(fn) {
        const table = /* @__PURE__ */ new Map();
        return (x) => table.has(x) ? table.get(x) : table.set(x, fn(x)).get(x);
      }
      function cache(fn) {
        const cache2 = /* @__PURE__ */ new Map();
        return (x) => cache2.has(x) ? cache2.get(x) : cache2.set(x, fn(x, invalidater(cache2, x))).get(x);
      }
      var invalidater = (cache2, x) => () => cache2.delete(x);
      function aside(fn) {
        return (x) => (fn(x), x);
      }
      module.exports = {
        compose,
        pipe: pipe3,
        flow: flow2,
        flip,
        do_,
        memo,
        cache,
        aside
      };
    }
  });
  var require_regexp = __commonJS({
    "src/common/cjs/regexp.js"(exports, module) {
      var { against: against2, when: when2, otherwise: otherwise2, isString: isString4 } = require_dist();
      var { pipe: pipe3, flow: flow2, memo } = require_fp();
      var makeRegExpFromWildcardString2 = memo((str) => {
        if (!isString4(str) || !str.length) {
          throw new TypeError("Please pass a non-empty string");
        }
        return pipe3(
          str.replace(rxConsecutiveWildcards(), "*").split("*").map((x) => x.trim()).map(escapeStringForRegExp),
          against2(
            when2(hasNoWildcards)(templateMatchExact),
            when2(hasNoWildcardAtStart)(flow2(insertWildcards, templateMatchStart)),
            when2(hasNoWildcardAtEnd)(flow2(insertWildcards, templateMatchEnd)),
            otherwise2(insertWildcards)
          ),
          ($) => new RegExp($)
        );
      });
      var rxEscape = () => /[.*+?^${}()|[\]\\]/g;
      var rxConsecutiveWildcards = () => /\*{2,}/g;
      var hasNoWildcards = (x) => x.length === 1;
      var hasNoWildcardAtStart = (x) => x.at(0) !== "";
      var hasNoWildcardAtEnd = (x) => x.at(-1) !== "";
      var insertWildcards = (x) => x.join("(.*)");
      var templateMatchExact = ([x]) => `^${x}$`;
      var templateMatchStart = (x) => `^${x}`;
      var templateMatchEnd = (x) => `${x}$`;
      function escapeStringForRegExp(str) {
        if (!isString4(str)) {
          throw new TypeError("Please pass a string");
        }
        return str.replace(rxEscape(), "\\$&");
      }
      module.exports = {
        makeRegExpFromWildcardString: makeRegExpFromWildcardString2,
        escapeStringForRegExp
      };
    }
  });
  var import_mithril30 = __toESM(require_mithril());
  var import_timers3 = __toESM(require_timers());
  var import_promises2 = __toESM(require_promises());
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
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");
  function die(error, ...args) {
    if (false) {
      const e = errors[error];
      const msg = typeof e === "function" ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var getPrototypeOf = Object.getPrototypeOf;
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = Object.prototype.constructor.toString();
  function isPlainObject(value) {
    if (!value || typeof value !== "object")
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object)
      return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0) {
      Object.entries(obj).forEach(([key, value]) => {
        iter(key, value, obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2)
      thing.set(propOrOldValue, value);
    else if (t === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  }
  function is(x, y2) {
    if (x === y2) {
      return x !== 0 || 1 / x === 1 / y2;
    } else {
      return x !== x && y2 !== y2;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state) {
    return state.copy_ || state.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base))
      return Array.prototype.slice.call(base);
    if (!strict && isPlainObject(base)) {
      if (!getPrototypeOf(base)) {
        const obj = /* @__PURE__ */ Object.create(null);
        return Object.assign(obj, base);
      }
      return { ...base };
    }
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep)
      each(obj, (_key, value) => freeze(value, true), true);
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  var currentScope;
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
  }
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 || state.type_ === 1)
      state.revoke_();
    else
      state.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_)
          maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope.patches_,
          scope.inversePatches_
        );
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      each(
        value,
        (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
        true
        // See #590, don't recurse into non-enumerable of non drafted objects
      );
      return value;
    }
    if (state.scope_ !== rootScope)
      return value;
    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    }
    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = state.copy_;
      let resultEach = result;
      let isSet2 = false;
      if (state.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(
        resultEach,
        (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
      );
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(
          state,
          path,
          rootScope.patches_,
          rootScope.inversePatches_
        );
      }
    }
    return state.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (false)
      die(5);
    if (isDraft(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      const res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else
        return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if (!parentState || !parentState.scope_.parent_)
        maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    const isArray4 = Array.isArray(base);
    const state = {
      type_: isArray4 ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray4) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      const source = latest(state);
      if (!has(source, prop)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        return state.copy_[prop] = createProxy(value, state);
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc?.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState2 = current2?.[DRAFT_STATE];
        if (currentState2 && currentState2.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_[prop] = false;
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_[prop] = true;
      return true;
    },
    deleteProperty(state, prop) {
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_[prop] = false;
        prepareCopy(state);
        markChanged(state);
      } else {
        delete state.assigned_[prop];
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        writable: true,
        configurable: state.type_ !== 1 || prop !== "length",
        enumerable: desc.enumerable,
        value: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  each(objectTraps, (key, fn) => {
    arrayTraps[key] = function() {
      arguments[0] = arguments[0][0];
      return fn.apply(this, arguments);
    };
  });
  arrayTraps.deleteProperty = function(state, prop) {
    if (false)
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (false)
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged(state.parent_);
      }
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = shallowCopy(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }
  var Immer2 = class {
    constructor(config) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (typeof base === "function" && typeof recipe !== "function") {
          const defaultBase = recipe;
          recipe = base;
          const self2 = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (typeof recipe !== "function")
          die(6);
        if (patchListener !== void 0 && typeof patchListener !== "function")
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope(scope);
            else
              leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || typeof base !== "object") {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING)
            result = void 0;
          if (this.autoFreeze_)
            freeze(result, true);
          if (patchListener) {
            const p2 = [];
            const ip = [];
            getPlugin("Patches").generateReplacementPatches_(base, result, p2, ip);
            patchListener(p2, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (typeof base === "function") {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p2, ip) => {
          patches = p2;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (typeof config?.autoFreeze === "boolean")
        this.setAutoFreeze(config.autoFreeze);
      if (typeof config?.useStrictShallowCopy === "boolean")
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_)
        die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin("Patches").applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value))
      die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    let copy;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    });
    if (state) {
      state.finalized_ = false;
    }
    return copy;
  }
  var immer = new Immer2();
  var produce = immer.produce;
  var produceWithPatches = immer.produceWithPatches.bind(
    immer
  );
  var setAutoFreeze = immer.setAutoFreeze.bind(immer);
  var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
  var applyPatches = immer.applyPatches.bind(immer);
  var createDraft = immer.createDraft.bind(immer);
  var finishDraft = immer.finishDraft.bind(immer);
  var import_regexp = __toESM(require_regexp());
  (function() {
    if (typeof window.CustomEvent === "function")
      return false;
    function CustomEvent2(event2, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event2, params.bubbles, params.cancelable, params.detail);
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
    const eventMap = /* @__PURE__ */ new Map();
    function emit2(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event2 = new CustomEvent(BUS, { detail });
      global2.dispatchEvent(event2);
    }
    function on2(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      const cbMap = eventMap.has(eventNameOrPattern) ? eventMap.get(eventNameOrPattern) : eventMap.set(eventNameOrPattern, /* @__PURE__ */ new Map()).get(eventNameOrPattern);
      if (cbMap.has(cb)) {
        throw new Error("Callback already deals with this event");
      }
      const isPlainMatcher = typeof eventNameOrPattern === "string" && eventNameOrPattern.indexOf("*") === -1;
      const rx = typeof eventNameOrPattern === "string" ? (0, import_regexp.makeRegExpFromWildcardString)(eventNameOrPattern) : eventNameOrPattern instanceof RegExp ? eventNameOrPattern : null;
      if (rx === null) {
        const reason = `Could not figure-out eventNameOrPattern`;
        throw new Error(`${reason} = ${eventNameOrPattern}`);
      }
      const eventHandler = (event2) => {
        const { eventName = "", args = [] } = event2?.detail || {};
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
      const off2 = on2(eventNameOrPattern, handle);
      return off2;
      function handle(...args) {
        cb(...args);
        off2();
      }
    }
    return {
      emit: emit2,
      on: on2,
      off,
      once
    };
  }();
  function isEventEmitter(obj) {
    return isObject(obj) && isFunction2(obj.emit) && (isFunction2(obj.addListener) || isFunction2(obj.on)) && (isFunction2(obj.removeListener) || isFunction2(obj.off));
  }
  isEventEmitter.displayName = "isEventEmitter";
  function isUnset(obj) {
    return obj === null || obj === void 0;
  }
  isArray2.displayName = "isUnset";
  function isArray2(obj) {
    return Array.isArray(obj);
  }
  isArray2.displayName = "isArray";
  function isArguments(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
  }
  isArguments.displayName = "isArguments";
  function isBoolean(obj) {
    return obj === true || obj === false;
  }
  isBoolean.displayName = "isBoolean";
  function isFunction2(obj) {
    return typeof obj === "function";
  }
  isFunction2.displayName = "isFunction";
  function isString2(obj) {
    return typeof obj === "string";
  }
  isString2.displayName = "isString";
  function isNull(obj) {
    return obj === null;
  }
  isNull.displayName = "isNull";
  function isNumber2(obj) {
    return typeof obj === "number";
  }
  isNumber2.displayName = "isNumber";
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  isObject.displayName = "isObject";
  function isPojo2(obj) {
    if (obj === null || !isObject(obj) || isArguments(obj)) {
      return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  isPojo2.displayName = "isPojo";
  function isTemplateLiteral(obj) {
    if (isString2(obj)) {
      return true;
    }
    if (!isArray2(obj)) {
      return false;
    }
    return obj.every(isString2);
  }
  isTemplateLiteral.displayName = "isTemplateLiteral";
  var typeErrorStringIfFnReturnsFalse = (argName, argTypeFn, arg) => {
    return argTypeFn(arg) ? void 0 : (argTypeFn.displayName || argTypeFn.name) + `(${argName}) did not return true`;
  };
  var typeErrorStringIfTypeOfFails = (argName, argType, arg) => {
    return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
  };
  var typeErrorStringFromArgument = (argMap) => (arg, index) => {
    if (index >= argMap.length) {
      return;
    }
    const { argName, argType } = argMap[index];
    if (arg === void 0) {
      return `Argument undefined: "${argName}"`;
    }
    const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
    const errorDescs = permittedArgTypes.map(
      (argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)
    ).filter(isString2);
    const multipleTypesSpecified = permittedArgTypes.length > 1;
    const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
    if (shouldError) {
      return errorDescs.join("\n| ") + `
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
    }
  };
  function ArgTypeError(namespace) {
    return (typeMap) => {
      const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
        argName,
        argType
      }));
      return (fnName) => (...args) => {
        const processedArgs = Array.from(
          args,
          (x) => isArguments(x) ? Array.from(x) : x
        ).flat(1);
        const err = processedArgs.map(typeErrorStringFromArgument(argMap)).filter(isString2);
        if (!err.length) {
          return;
        }
        const signature = Object.keys(typeMap).join(", ");
        return `
${namespace || ""}${fnName}(${signature}):
${err.map((err2) => `| ${err2}`).join("\n")}`;
      };
    };
  }
  function ObjTypeError(namespace) {
    return (typeMap) => {
      const keys = Object.keys(typeMap);
      const objTypeError = ArgTypeError(namespace)(typeMap);
      return (fnName) => (obj) => {
        const values = valuesOf(obj, { keys });
        const err = objTypeError(fnName)(...values);
        return err;
      };
    };
  }
  function valuesOf(obj, options) {
    const { keys } = options;
    if (!Array.isArray(keys)) {
      return Object.values(obj);
    }
    return keys.reduce((acc, key) => {
      return [...acc, obj[key]];
    }, []);
  }
  var HISTORY_LIMIT = 10;
  var storeHistory = [
    {
      accounts: [],
      statements: [],
      entries: []
    }
  ];
  function hydrate(payload) {
    pushStore(payload);
    messages.emit(actions.STORE_HYDRATED);
  }
  function store2() {
    return storeHistory[storeHistory.length - 1];
  }
  store2.history = storeHistory;
  store2.hydrate = hydrate;
  function pushStore(nextStore) {
    storeHistory.push(nextStore);
    if (storeHistory.length > HISTORY_LIMIT) {
      storeHistory.shift();
    }
    messages.emit(actions.STORE_UPDATED);
  }
  var checkSchema = ObjTypeError("store#");
  var checkSchemaForAddingAnAccount = checkSchema({
    id: isString2,
    accountNumber: isString2,
    sortCode: isString2,
    name: [isString2, isUnset],
    type: [isString2, isUnset],
    iban: [isString2, isUnset],
    bic: [isString2, isUnset],
    ledgerBalance: [isNumber2, isUnset],
    lastUpdatedTimestamp: [isNumber2, isUnset]
  })(actions.add.ACCOUNTS);
  var checkSchemaForUpdatingAnAccount = checkSchema({
    id: isString2,
    accountNumber: [isString2, isUnset],
    sortCode: [isString2, isUnset],
    name: [isString2, isUnset],
    type: [isString2, isUnset],
    iban: [isString2, isUnset],
    bic: [isString2, isUnset]
  })(actions.update.ACCOUNTS);
  messages.on(actions.add.ACCOUNTS, (accounts) => {
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForAddingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x) => x.id === account.id);
        if (existingAccount) {
          console.log("Account exists", existingAccount);
          return;
        }
        draftState.accounts.push({ ...account });
      });
    });
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  messages.on(actions.update.ACCOUNTS, (accounts) => {
    const unseenAccounts = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForUpdatingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x) => x.id === account.id);
        if (!existingAccount) {
          unseenAccounts.push(account);
          return;
        }
        Object.entries(account).forEach(([key, value]) => {
          if (isUnset(value)) {
            return;
          }
          existingAccount[key] = value;
        });
      });
    });
    if (unseenAccounts.length) {
      console.log("Not updating unseen accounts: ", unseenAccounts);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  var checkSchemaForAddingAStatement = checkSchema({
    id: isString2,
    accountId: isString2,
    endDate: isNumber2,
    startDate: [isNumber2, isUnset],
    startBalance: [isNumber2, isUnset],
    endBalance: [isNumber2, isUnset]
  })(actions.add.STATEMENTS);
  var checkSchemaForUpdatingAStatement = checkSchema({
    id: isString2,
    accountId: [isString2, isUnset],
    endDate: isNumber2,
    startDate: isNumber2,
    startBalance: isNumber2,
    endBalance: isNumber2
  })(actions.update.STATEMENTS);
  messages.on(actions.add.STATEMENTS, (statements) => {
    const existingStatements = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForAddingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find(
          (x) => x.id === statement.id
        );
        if (existingStatement) {
          existingStatements.push({ newStatement: statement, existingStatement });
          return;
        }
        draftState.statements.push({ ...statement });
      });
    });
    if (existingStatements.length) {
      console.log("Not overwriting existing statements: ", existingStatements);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  messages.on(actions.update.STATEMENTS, (statements) => {
    const unseenStatements = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForUpdatingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find(
          (x) => x.id === statement.id
        );
        if (!existingStatement) {
          unseenStatements.push(statement);
          return;
        }
        Object.entries(statement).forEach(([key, value]) => {
          if (isUnset(value)) {
            return;
          }
          existingStatement[key] = value;
        });
      });
    });
    if (unseenStatements.length) {
      console.log("Not updating unseen statements: ", unseenStatements);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  var checkSchemaForAddingAnEntry = checkSchema({
    id: isString2,
    accountId: isString2,
    statementId: isString2,
    date: isNumber2,
    type: isString2,
    payee: isString2,
    note: isString2,
    debit: isNumber2,
    credit: isNumber2,
    balance: isNumber2
  })(actions.add.ENTRIES);
  messages.on(actions.add.ENTRIES, (entries) => {
    const existingEntries = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      entries.forEach((entry) => {
        const err = checkSchemaForAddingAnEntry(entry);
        if (err) {
          throw TypeError(err);
        }
        const existingEntry = draftState.entries.find((x) => x.id === entry.id);
        if (existingEntry) {
          existingEntries.push({ newEntry: entry, existingEntry });
          return;
        }
        draftState.entries.push({ ...entry });
      });
    });
    if (existingEntries.length) {
      console.log("Not overwriting existing entries: ", existingEntries);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  var import_promises = __toESM(require_promises());
  function ofxEscape(str) {
    return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
  }
  function csvEscape(str) {
    return String(str).replace(/"/g, '""').replace(/\r\n|\r|\n/g, " ").trim();
  }
  function qifEscape(str) {
    return String(str).replace(/\r\n|\r|\n/g, " ").trim();
  }
  function USDateTimeString(timestampOrDate) {
    const date = new Date(timestampOrDate);
    return String(
      zeroPad(date.getMonth() + 1) + "/" + zeroPad(date.getDate()) + "/" + date.getFullYear()
    );
  }
  function UKDateTimeString(timestampOrDate) {
    const date = new Date(timestampOrDate);
    return String(
      zeroPad(date.getDate()) + "/" + zeroPad(date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }
  function simpleDate(timestampOrDate) {
    const date = new Date(timestampOrDate);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return String(
      date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
    );
  }
  function dateTimeString(timestampOrDate, delim = "") {
    const date = new Date(timestampOrDate);
    return [
      date.getFullYear(),
      zeroPad(date.getMonth() + 1),
      zeroPad(date.getDate()),
      zeroPad(date.getHours()),
      zeroPad(date.getMinutes()),
      zeroPad(date.getSeconds())
    ].join(delim);
  }
  function zeroPad(num) {
    if (num < 10) {
      return "0" + num;
    }
    return "" + num;
  }
  function convertCentsToDecimal(cents) {
    if (!cents || "number" !== typeof cents) {
      return "-";
    }
    const decimal = cents / 100;
    return decimal.toLocaleString("en-GB", {
      useGrouping: false,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  function convertCentsToDecimalForDisplay(cents) {
    if (!cents || "number" !== typeof cents) {
      return "-";
    }
    const decimal = cents / 100;
    return decimal.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  function makeGenerator() {
    return {
      id: "CSV",
      folder: "csv",
      extension: "csv",
      description: "CSV RFC4180 (Excel, Numbers)",
      generate: (statement) => {
        const csv = [
          '"Transaction ID","Date","Account type","Account number","Payee","Memo","Type","Amount"',
          ""
        ];
        statement.entries.forEach((entry) => {
          const { debit, credit, id, date, payee, note, type } = entry;
          const transactionAmount = convertCentsToDecimal(-debit + credit);
          csv.push(
            '"' + csvEscape(id) + '","' + csvEscape(simpleDate(date)) + '","' + csvEscape(statement.type) + '","' + csvEscape(statement.sortCode + " " + statement.accountNumber) + '","' + csvEscape(payee) + '","' + csvEscape(note || "") + '","' + csvEscape(type) + '","' + csvEscape(transactionAmount) + '"'
          );
        });
        csv.push("");
        return csv.join("\r\n");
      }
    };
  }
  function addSpaces(str, len) {
    if (!str) {
      return "";
    }
    str = "" + str;
    while (str.length < len) {
      str = str + " ";
    }
    if (str.length > len) {
      str.length = len;
    }
    return str;
  }
  function makeGenerator2() {
    return {
      id: "HSBC",
      folder: "hsbc-legacy",
      extension: "csv",
      description: "CSV Legacy HSBC (\xE0 la Recent Transactions)",
      generate: (statement) => {
        const csv = [];
        statement.entries.forEach((entry) => {
          const { debit, credit, id, date, payee, note, type } = entry;
          const transactionAmount = convertCentsToDecimal(-debit + credit);
          csv.push(
            '"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(addSpaces(payee, 25) + addSpaces(note || "", 25) + type) + '","' + csvEscape(transactionAmount) + '"'
          );
        });
        csv.push("");
        return csv.join("\r\n");
      }
    };
  }
  function makeGenerator3() {
    return {
      id: "JSON",
      folder: "json",
      extension: "json",
      description: "JSON (JavaScript Object Notation)",
      generate: (statement) => JSON.stringify(
        statement,
        (key, replacementValue) => {
          if (-1 !== ["debit", "credit", "balance"].indexOf(key)) {
            const float = parseFloat(convertCentsToDecimal(replacementValue));
            if (isNaN(float)) {
              return "balance" === key ? void 0 : 0;
            } else {
              return key === "debit" ? -float : float;
            }
          }
          return replacementValue;
        },
        2
      )
    };
  }
  function SortByNumber(field) {
    if (field) {
      return function sortByNumberInObject(a2, b) {
        return +a2[field] - +b[field];
      };
    } else {
      return function sortByNumber(a2, b) {
        return +a2 - +b;
      };
    }
  }
  function makeGenerator4() {
    return {
      id: "MIDATA",
      folder: "midata",
      extension: "csv",
      description: "midata (non-standard, CSV)",
      generate: (statement) => {
        const initialBalanceInCents = (statement.balances || [{ date: 0, balance: 0 }]).sort(SortByNumber("date"))[0].balance;
        let runningBalanceInCents = initialBalanceInCents;
        const csv = [" Date,Type,Merchant/Description,Debit/Credit,Balance", ""];
        statement.entries.forEach((entry) => {
          const { debit, credit, date, type, payee, note } = entry;
          const transactionAmountInCents = -debit + credit;
          runningBalanceInCents += transactionAmountInCents;
          csv.push(
            '"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(type) + '","' + csvEscape(payee + (note || "")) + '","' + csvEscape(convertCentsToDecimal(transactionAmountInCents)) + '","' + csvEscape(convertCentsToDecimal(runningBalanceInCents)) + '"'
          );
        });
        csv.push(
          "",
          "Arranged overdraft limit," + csvEscape(UKDateTimeString(statement.date)) + ",\xA30.00",
          ""
        );
        return csv.join("\r\n");
      }
    };
  }
  var HSBC_OFX = {
    INTU_BID: "01267",
    LANGUAGE: "ENG",
    CURDEF: "GBP"
  };
  function makeGenerator5() {
    return {
      id: "OFX",
      folder: "ofx",
      extension: "ofx",
      description: "OFX 1.0.2 (Money, Quicken)",
      generate: (statement) => {
        let ofx;
        const latestBalanceIndex = statement.balances.length - 1;
        function filterTransactionType(type) {
          switch (type) {
            case "ATM":
              break;
            case "TFR":
              type = "XFER";
              break;
            default:
              type = "OTHER";
          }
          return type;
        }
        ofx = "OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n\n<OFX>\n\n	<SIGNONMSGSRSV1>\n		<SONRS>\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n			<DTSERVER>" + ofxEscape(dateTimeString(/* @__PURE__ */ new Date())) + "</DTSERVER>\n			<LANGUAGE>" + ofxEscape(HSBC_OFX.LANGUAGE) + "</LANGUAGE>\n			<INTU.BID>" + ofxEscape(HSBC_OFX.INTU_BID) + "</INTU.BID>\n		</SONRS>\n	</SIGNONMSGSRSV1>\n\n	<BANKMSGSRSV1>\n\n		<STMTTRNRS>\n\n			<TRNUID>1</TRNUID>\n\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n\n			<STMTRS>\n\n				<CURDEF>" + ofxEscape(HSBC_OFX.CURDEF) + "</CURDEF>\n\n				<BANKACCTFROM>\n					<BANKID>" + ofxEscape(statement.sortCode) + "</BANKID>\n					<ACCTID>" + ofxEscape(statement.sortCode + statement.accountNumber) + "</ACCTID>\n					<ACCTTYPE>CHECKING</ACCTTYPE>\n				</BANKACCTFROM>\n\n				<BANKTRANLIST>\n\n					<DTSTART>" + ofxEscape(dateTimeString(statement.balances[0].date)) + "</DTSTART>\n					<DTEND>" + ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) + "</DTEND>\n\n";
        statement.entries.forEach((entry) => {
          const { debit, credit, type, date, id, payee, note } = entry;
          const transactionAmount = convertCentsToDecimal(-debit + credit);
          ofx += "					<STMTTRN>\n						<TRNTYPE>" + ofxEscape(filterTransactionType(type)) + "</TRNTYPE>\n						<DTPOSTED>" + ofxEscape(dateTimeString(date)) + "</DTPOSTED>\n						<TRNAMT>" + ofxEscape(transactionAmount) + "</TRNAMT>\n						<FITID>" + ofxEscape(id) + "</FITID>\n						<NAME>" + ofxEscape(payee) + "</NAME>\n" + (note ? "						<MEMO>" + ofxEscape(note) + "</MEMO>\n" : "") + "					</STMTTRN>\n\n";
        });
        const balanceCarriedForward = statement.balances[latestBalanceIndex].balance;
        ofx += "				</BANKTRANLIST>\n\n				<LEDGERBAL>\n					<BALAMT>" + ofxEscape(convertCentsToDecimal(balanceCarriedForward)) + "</BALAMT>\n					<DTASOF>" + ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) + "</DTASOF>\n				</LEDGERBAL>\n\n			</STMTRS>\n		</STMTTRNRS>\n	</BANKMSGSRSV1>\n\n</OFX>\n";
        return ofx;
      }
    };
  }
  function makeGenerator6() {
    return {
      id: "QIF",
      folder: "qif",
      extension: "qif",
      description: "QIF (Quicken)",
      generate: (statement) => {
        let qif;
        const latestBalanceIndex = statement.balances.length - 1;
        qif = "!Account\nN" + qifEscape(statement.type) + "\nA" + qifEscape(
          statement.sortCode + "/" + statement.sortCode + statement.accountNumber
        ) + "\n/" + qifEscape(
          USDateTimeString(statement.balances[latestBalanceIndex].date)
        ) + "\n$" + qifEscape(
          convertCentsToDecimal(statement.balances[latestBalanceIndex].balance)
        ) + "\nTBank\n^\n!Type:Bank\n";
        statement.entries.forEach((entry) => {
          const { debit, credit, id, date, payee, note, type } = entry;
          const transactionAmount = convertCentsToDecimal(-debit + credit);
          qif += "D" + qifEscape(USDateTimeString(date)) + "\nN" + qifEscape(-debit + credit < 0 ? "WITHD" : "DEP") + "\nT" + qifEscape(transactionAmount) + "\nC\nP" + qifEscape(payee) + "\n" + (note ? "M" + qifEscape(note) + "\n" : "") + "^\n";
        });
        qif += "\n";
        return qif;
      }
    };
  }
  var { SparkMD5 } = obis.deps;
  function md5(str) {
    return SparkMD5.hash(str);
  }
  function getGenerators() {
    return [makeGenerator(), makeGenerator2(), makeGenerator3(), makeGenerator4(), makeGenerator5(), makeGenerator6()];
  }
  function generateIdForTransaction(fullEntry) {
    const {
      date,
      debit,
      credit,
      index,
      accountNumber,
      sortCode,
      type,
      payee,
      note
    } = fullEntry;
    const dateTime = dateTimeString(date) || "UNKNOWN_DATE";
    const transactionAmount = convertCentsToDecimal(-debit + credit);
    return dateTime + "_" + md5(
      dateTime + (void 0 !== index ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount
    );
  }
  function compatMakeStatements() {
    const { accounts, statements, entries } = store2();
    const compatStatements = statements.reduce((acc, statement) => {
      const statementAccount = accounts.find(
        (account) => account.id === statement.accountId
      );
      const statementBalances = [
        compatMakeBalance(statement, "start"),
        compatMakeBalance(statement, "end")
      ];
      const statementEntries = entries.filter((entry) => entry.statementId === statement.id).map((entry) => {
        const { id, date, type: type2, payee, note, debit, credit, balance } = entry;
        return {
          id,
          date,
          type: type2,
          payee,
          note,
          debit,
          credit,
          balance
        };
      });
      const { iban, bic, type, name, accountNumber, sortCode } = statementAccount;
      return [
        ...acc,
        {
          id: `${iban}_${dateTimeString(statement.endDate)}`,
          // id: statement.id,
          iban,
          bic,
          type,
          name,
          accountNumber,
          sortCode,
          date: statement.endDate,
          entries: statementEntries,
          balances: statementBalances
        }
      ];
    }, []);
    return compatStatements;
  }
  function compatMakeBalance(statement, startOrEnd) {
    const keyPrefix = startOrEnd === "start" ? "start" : "end";
    const memoPrefix = keyPrefix === "start" ? "Opening" : "Closing";
    const balance = {
      debit: 0,
      credit: 0,
      balance: statement[`${keyPrefix}Balance`],
      date: statement[`${keyPrefix}Date`],
      payee: "",
      memo: `${memoPrefix} balance this month`
    };
    const id = generateIdForTransaction(balance);
    return {
      id,
      ...balance
    };
  }
  var { fflate, saveAs } = obis.deps;
  function makeZip() {
    const { filename, content } = fflateBuildZipContent();
    const [zipPromise, resolve, reject] = (0, import_promises.makePromise)();
    fflate.zip(content, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
    return zipPromise.then(makeBlob).then((blob) => {
      saveAs(blob, filename);
    });
  }
  function makeBlob(zipped) {
    const [promise, resolve] = (0, import_promises.makePromise)();
    resolve(new Blob([zipped]));
    return promise;
  }
  function fflateBuildZipContent() {
    const { filename, content } = compatBuildZipContent();
    return {
      filename,
      content: content.reduce((acc, { folder, files }) => {
        return {
          ...acc,
          [folder]: files.reduce((acc2, { name, content: content2 }) => {
            if (acc2[name]) {
              return acc2;
            }
            return {
              ...acc2,
              [name]: fflate.strToU8(content2)
            };
          }, {})
        };
      }, {})
    };
  }
  function compatBuildZipContent() {
    const statements = compatMakeStatements();
    const generators = getGenerators();
    const zipContents = [
      /* { folder: '', files: [ { name: '', content: '' }, ] } */
    ];
    let zipName;
    generators.forEach((generator) => {
      const { generate, extension, folder } = generator;
      const zipContent = {
        folder,
        files: []
      };
      statements.forEach((statement) => {
        const filename = filenameFromStatement(statement, extension);
        const content = generate(statement);
        zipContent.files.push({
          name: filename,
          content
        });
        if (!zipName) {
          zipName = zipnameFromStatement(statement);
        }
      });
      zipContents.push(zipContent);
    });
    return {
      filename: zipName,
      content: zipContents
    };
  }
  function filenameFromStatement(statement, extension) {
    const { date, type, sortCode, accountNumber } = statement;
    const statementDate = new Date(date);
    return `${type} ${sortCode} ${accountNumber}`.replace(/[^a-zA-Z0-9-]/g, "_") + "-" + statementDate.getFullYear() + "-" + zeroPad(statementDate.getMonth() + 1) + "-" + zeroPad(statementDate.getDate()) + "." + extension;
  }
  function zipnameFromStatement(statement) {
    const { date } = statement;
    const statementDate = new Date(date);
    return "OBIS-Statements-" + statementDate.getFullYear() + "-" + dateTimeString(/* @__PURE__ */ new Date(), "_") + ".zip";
  }
  var progressBar = {
    max: 0,
    value: 0
  };
  var import_mithril22 = __toESM(require_mithril());
  var import_mithril = __toESM(require_mithril(), 1);
  var { parse: $parse, stringify: $stringify } = JSON;
  var Primitive = String;
  var primitive = "string";
  var object = "object";
  var noop = (_2, value) => value;
  var set2 = (known, input, value) => {
    const index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  };
  var stringify = (value, replacer, space) => {
    const $ = replacer && typeof replacer === object ? (k2, v2) => k2 === "" || -1 < replacer.indexOf(k2) ? v2 : void 0 : replacer || noop;
    const known = /* @__PURE__ */ new Map();
    const input = [];
    const output = [];
    let i = +set2(known, input, $.call({ "": value }, "", value));
    let firstRun = !i;
    while (i < input.length) {
      firstRun = true;
      output[i] = $stringify(input[i++], replace, space);
    }
    return "[" + output.join(",") + "]";
    function replace(key, value2) {
      if (firstRun) {
        firstRun = !firstRun;
        return value2;
      }
      const after = $.call(this, key, value2);
      switch (typeof after) {
        case object:
          if (after === null)
            return after;
        case primitive:
          return known.get(after) || set2(known, input, after);
      }
      return after;
    }
  };
  var currentState;
  var call = Function.prototype.call.bind(Function.prototype.call);
  var scheduleRender = () => (
    // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
    import_mithril.default.redraw()
  );
  var updateDeps = (deps) => {
    const state = currentState;
    const { depsIndex } = state;
    state.depsIndex += 1;
    const prevDeps = state.depsStates[depsIndex] || [];
    const shouldRecompute = deps === void 0 ? true : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) : !state.setup : false;
    if (deps !== void 0) {
      state.depsStates[depsIndex] = deps;
    }
    return shouldRecompute;
  };
  var effect = (isAsync = false) => (fn, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);
    if (shouldRecompute) {
      const { depsIndex } = state;
      const runCallbackFn = () => {
        const teardown2 = fn();
        if (typeof teardown2 === "function") {
          state.teardowns.set(
            depsIndex,
            teardown2
          );
          state.teardowns.set("_", scheduleRender);
        }
      };
      const teardown = state.teardowns.get(depsIndex);
      try {
        if (typeof teardown === "function") {
          teardown();
        }
      } finally {
        state.teardowns.delete(depsIndex);
      }
      state.updates.push(
        isAsync ? () => new Promise((resolve) => {
          requestAnimationFrame(resolve);
        }).then(runCallbackFn) : runCallbackFn
      );
    }
  };
  var updateState = (initialState, newValueFn) => {
    const state = currentState;
    const index = state.statesIndex;
    state.statesIndex += 1;
    if (!state.setup) {
      state.states[index] = initialState;
    }
    return [
      state.states[index],
      (value) => {
        const previousValue = state.states[index];
        const newValue = newValueFn ? newValueFn(value, index) : value;
        state.states[index] = newValue;
        if (stringify(newValue) !== stringify(previousValue)) {
          scheduleRender();
        }
      },
      index
    ];
  };
  var useState = (initialState) => {
    const state = currentState;
    const newValueFn = (value, index) => typeof value === "function" ? value(state.states[index], index) : value;
    return updateState(initialState, newValueFn);
  };
  var useEffect = effect(true);
  var useLayoutEffect = effect();
  var useMemo = (fn, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);
    const [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();
    if (state.setup && shouldRecompute) {
      setMemoized(fn());
    }
    return memoized;
  };
  var useCallback = (callback, deps) => (
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => callback, deps)
  );
  var withHooks = (renderFunction, initialAttrs) => {
    const init = (vnode) => {
      Object.assign(vnode.state, {
        setup: false,
        states: [],
        statesIndex: 0,
        depsStates: [],
        depsIndex: 0,
        updates: [],
        cleanups: /* @__PURE__ */ new Map(),
        teardowns: /* @__PURE__ */ new Map()
        // Keep track of teardowns even when the update was run only once
      });
    };
    const update = (vnode) => {
      const prevState = currentState;
      currentState = vnode.state;
      try {
        vnode.state.updates.forEach(call);
      } finally {
        Object.assign(vnode.state, {
          setup: true,
          updates: [],
          depsIndex: 0,
          statesIndex: 0
        });
        currentState = prevState;
      }
    };
    const render = (vnode) => {
      const prevState = currentState;
      currentState = vnode.state;
      try {
        return renderFunction({
          ...initialAttrs,
          ...vnode.attrs,
          vnode,
          children: vnode.children
        });
      } catch (e) {
        console.error(e);
      } finally {
        currentState = prevState;
      }
      return void 0;
    };
    const teardown = (vnode) => {
      const prevState = currentState;
      currentState = vnode.state;
      try {
        vnode.state.teardowns.forEach(call);
      } finally {
        currentState = prevState;
      }
    };
    return {
      oninit: init,
      oncreate: update,
      onupdate: update,
      view: render,
      onremove: teardown
    };
  };
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }
  function isEventEmitter2(obj) {
    return isObject2(obj) && isFunction3(obj.emit) && (isFunction3(obj.addListener) || isFunction3(obj.on)) && (isFunction3(obj.removeListener) || isFunction3(obj.off));
  }
  isEventEmitter2.displayName = "isEventEmitter";
  isArray3.displayName = "isUnset";
  function isArray3(obj) {
    return Array.isArray(obj);
  }
  isArray3.displayName = "isArray";
  function isArguments2(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
  }
  isArguments2.displayName = "isArguments";
  function isFunction3(obj) {
    return typeof obj === "function";
  }
  isFunction3.displayName = "isFunction";
  function isString3(obj) {
    return typeof obj === "string";
  }
  isString3.displayName = "isString";
  function isAllStrings(arr) {
    return isArray3(arr) && arr.every(isString3);
  }
  isAllStrings.displayName = "isAllStrings";
  function isUndefined(obj) {
    return obj === void 0;
  }
  isUndefined.displayName = "isUndefined";
  function isNull2(obj) {
    return obj === null;
  }
  isNull2.displayName = "isNull";
  function isNumber3(obj) {
    return typeof obj === "number";
  }
  isNumber3.displayName = "isNumber";
  function isObject2(obj) {
    return typeof obj === "object" && !isNull2(obj);
  }
  isObject2.displayName = "isObject";
  function isPojo3(obj) {
    if (isNull2(obj) || !isObject2(obj) || isArguments2(obj)) {
      return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  isPojo3.displayName = "isPojo";
  function isTemplateLiteral2(obj) {
    if (isString3(obj)) {
      return true;
    }
    if (!isArray3(obj)) {
      return false;
    }
    return obj.every(isString3);
  }
  isTemplateLiteral2.displayName = "isTemplateLiteral";
  var typeErrorStringIfFnReturnsFalse2 = (argName, argTypeFn, arg) => {
    return argTypeFn(arg) ? void 0 : (argTypeFn.displayName || argTypeFn.name) + `(${argName}) did not return true`;
  };
  var typeErrorStringIfTypeOfFails2 = (argName, argType, arg) => {
    return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
  };
  var typeErrorStringFromArgument2 = (argMap) => (arg, index) => {
    if (index >= argMap.length) {
      return;
    }
    const { argName, argType } = argMap[index];
    if (isUndefined(arg)) {
      return `Argument undefined: "${argName}"`;
    }
    const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
    const errorDescs = permittedArgTypes.map(
      (argType2) => isFunction3(argType2) ? typeErrorStringIfFnReturnsFalse2(argName, argType2, arg) : typeErrorStringIfTypeOfFails2(argName, argType2, arg)
    ).filter(isString3);
    const multipleTypesSpecified = permittedArgTypes.length > 1;
    const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
    if (shouldError) {
      return errorDescs.join("\n| ") + `
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
    }
  };
  function ArgTypeError2(namespace) {
    return (typeMap) => {
      const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
        argName,
        argType
      }));
      return (fnName) => (...args) => {
        const processedArgs = Array.from(args, (x) => isArguments2(x) ? Array.from(x) : x).flat(1);
        const err = processedArgs.map(typeErrorStringFromArgument2(argMap)).filter(isString3);
        if (!err.length) {
          return;
        }
        const signature = Object.keys(typeMap).join(", ");
        return `
${namespace || ""}${fnName}(${signature}):
${err.map((err2) => `| ${err2}`).join("\n")}`;
      };
    };
  }
  function wrapEmitter(events) {
    const emit2 = (eventName, ...args) => events.emit(eventName, args);
    const addListener = events.addListener ? (...args) => events.addListener(...args) : (...args) => events.on(...args);
    const removeListener = events.removeListener ? (...args) => events.removeListener(...args) : (...args) => events.off(...args);
    const wrapMap = /* @__PURE__ */ new Map();
    function on2(eventName, fn) {
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
      emit: emit2,
      on: on2,
      off
    };
  }
  function uniq(input) {
    return input.reduce(
      (acc, one) => acc.indexOf(one) === -1 ? (acc.push(one), acc) : acc,
      []
    );
  }
  function Once(fn) {
    const { revoke, fn: _fn } = Revokable(fn);
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
  function ReferenceCounter(logPrefix, kind, description, ...expecting) {
    const _refs = [...expecting].flat().reduce((acc, ref) => ({ ...acc, [ref]: 0 }), {});
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
      return { ..._refs };
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
        description: `${logPrefix}: ${description}:`,
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
  function Definitions() {
    const dictionary = {};
    function undefine(word, definition) {
      dictionary[word] = (dictionary[word] || []).filter(
        (next) => next !== definition
      );
      if (dictionary[word].length === 0) {
        delete dictionary[word];
      }
    }
    function define2(word, definition) {
      dictionary[word] = dictionary[word] || [];
      dictionary[word].push(definition);
      return () => undefine(word, definition);
    }
    function definitionsOf(word) {
      return dictionary[word] || [];
    }
    return {
      define: define2,
      undefine,
      definitionsOf
    };
  }
  function Logger(level, _console) {
    if (isString3(level)) {
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
    const { info, table, log, warn, error } = _console || console;
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
  var argTypeError = ArgTypeError2("statebot.");
  function decomposeChart(chart2) {
    const err = argTypeError(
      { chart: isTemplateLiteral2 }
    )("decomposeChart")(chart2);
    if (err) {
      throw TypeError(err);
    }
    const lines = condensedLines(chart2);
    const linesOfTokens = tokenisedLines(lines);
    const linesOfRoutes = linesOfTokens.flatMap(decomposeRouteFromTokens);
    const linesOfTransitions = linesOfRoutes.flatMap(decomposeTransitionsFromRoute);
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
    return lines.map(
      (line) => line.split(cxArrow).map((str) => str.split(cxPipe))
    );
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
    return fromStates.reduce(
      (acc, fromState) => (acc.push(...toStates.map((toState) => [fromState, toState])), acc),
      []
    );
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
  function Statebot(name, options) {
    if (!isString3(name)) {
      throw new TypeError("\nStatebot: Please specify a name for this machine");
    }
    const logPrefix = `Statebot[${name}]`;
    if (!isPojo3(options)) {
      throw new TypeError(`
${logPrefix}: Please specify options for this machine`);
    }
    const {
      chart: chart2 = void 0,
      logLevel = 3,
      historyLimit = 2
    } = options || {};
    const events = isUndefined(options.events) ? wrapEmitter(mitt_default()) : isEventEmitter2(options.events) && wrapEmitter(options.events);
    if (!events) {
      throw new TypeError(`
${logPrefix}: Invalid event-emitter specified in options`);
    }
    const { states = [], routes = [] } = chart2 ? decomposeChart(chart2) : options;
    const { startIn = states[0] } = options;
    if (!states.includes(startIn)) {
      throw new Error(`${logPrefix}: Starting-state not in chart: "${startIn}"`);
    }
    const argTypeError2 = ArgTypeError2(`${logPrefix}#`);
    const _console = Logger(logLevel, console);
    const { canWarn } = _console;
    const stateHistory = [startIn];
    const stateHistoryLimit = Math.max(historyLimit, 2);
    let transitionId = 0;
    const { pause, resume, paused, Pausable } = Pausables(
      false,
      () => _console.warn(`${logPrefix}: Ignoring callback, paused`)
    );
    const transitionsFromEvents = Definitions();
    const internalEvents = wrapEmitter(mitt_default());
    const emitInternalEvent = Pausable(internalEvents.emit);
    function onInternalEvent(eventName, cb) {
      internalEvents.on(eventName, cb);
      return () => internalEvents.off(eventName, cb);
    }
    const statesHandled = ReferenceCounter(
      logPrefix,
      "states",
      "Listening for the following state-changes",
      [...states]
    );
    const routesHandled = ReferenceCounter(
      logPrefix,
      "transitions",
      "Listening for the following transitions",
      [...routes]
    );
    const eventsHandled = ReferenceCounter(
      logPrefix,
      "events",
      "Listening for the following events"
    );
    function applyHitcher(hitcher, fnName) {
      const hitcherActions = isFunction3(hitcher) ? hitcher({ enter, emit: emit2, Enter, Emit: Emit3 }) : isPojo3(hitcher) ? hitcher : null;
      if (!isPojo3(hitcherActions)) {
        throw new TypeError(
          `${logPrefix}#${fnName}(): Expected an object, or a function that returns an object`
        );
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
          _console.warn(
            `${logPrefix}#${fnName}(): Invalid states specified:
` + invalidStates.map((state) => `  > "${state}"`).join("\n")
          );
        }
        if (invalidRoutes.length) {
          _console.warn(
            `${logPrefix}#${fnName}(): Invalid transitions specified:
` + invalidRoutes.map((route) => `  > "${route}"`).join("\n")
          );
        }
      }
      return () => allCleanupFns.map((fn) => fn());
      function runThenMethodOnTransition(config) {
        const { fromState, toState, action } = config;
        const route = `${fromState}->${toState}`;
        return [
          routesHandled.increase(route),
          onInternalEvent(route, bindActionTo(toState, action))
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
      function ifStateThenEnterState({ fromState, toState, action, args }) {
        return inState(fromState, () => {
          enter(toState, ...args);
          isFunction3(action) && runActionFor(toState, action, ...args);
          return true;
        });
      }
      function createEventHandlerForTransition([eventName, configs]) {
        return [
          eventsHandled.increase(eventName),
          onEvent(eventName, (...args) => {
            const eventWasHandled = configs.map((config) => ({ ...config, args })).some(ifStateThenEnterState);
            if (!eventWasHandled) {
              transitionNoOp(`Event not handled: "${eventName}"`);
            }
          })
        ].concat(
          configs.map(
            ({ fromState, toState }) => transitionsFromEvents.define(`${eventName}:${fromState}`, toState)
          )
        );
      }
      function runActionFor(state, actionFn, ...args) {
        const onExitingState = actionFn(...args);
        if (isFunction3(onExitingState)) {
          const uninstall = Once(enterExitMethods[ON_EXITING](state, (toState) => {
            uninstall();
            onExitingState(toState);
          }));
          allCleanupFns.push(uninstall);
        }
      }
      function bindActionTo(state, actionFn) {
        return (...args) => runActionFor(state, actionFn, ...args);
      }
    }
    function _peek(eventName, stateObject, calledInternally = true) {
      const err1 = argTypeError2({ eventName: isString3 })("peek")(eventName);
      if (err1) {
        throw new TypeError(err1);
      }
      const eventAndState = eventName + ":" + currentState2();
      const statesFromEvent = transitionsFromEvents.definitionsOf(eventAndState);
      if (statesFromEvent.length > 1) {
        const reason = `${logPrefix}: Event "${eventName}" causes multiple transitions.
  > From state: "${currentState2()}"
  > To states: "${statesFromEvent.join(", ")}"

Check your performTransitions() config.`;
        throw new RangeError(reason);
      }
      if (!calledInternally && statesFromEvent.length === 0) {
        if (eventsHandled.countOf(eventName) === 0) {
          _console.warn(`${logPrefix}: Event not handled: "${eventName}"`);
        } else {
          _console.warn(`${logPrefix}: Will not transition after emitting: "${eventName}"`);
        }
      }
      const toState = statesFromEvent[0];
      if (isUndefined(stateObject)) {
        return isUndefined(toState) ? currentState2() : toState;
      }
      const err2 = argTypeError2({ stateObject: isPojo3 })("peek")(stateObject);
      if (err2) {
        throw new TypeError(err2);
      }
      if (Object.prototype.hasOwnProperty.call(stateObject, toState)) {
        const anyOrFn = stateObject[toState];
        return isFunction3(anyOrFn) ? anyOrFn() : anyOrFn;
      }
      return null;
    }
    function peek2(eventName, stateObject) {
      return _peek(eventName, stateObject, false);
    }
    function previousState() {
      return stateHistory[stateHistory.length - 2];
    }
    function currentState2() {
      return stateHistory[stateHistory.length - 1];
    }
    function _state_canTransitionTo(...states2) {
      const err = argTypeError2(
        { states: isAllStrings }
      )("canTransitionTo")([states2]);
      if (err) {
        throw new TypeError(err);
      }
      if (!states2.length) {
        return false;
      }
      const nextStates = statesAvailableFromHere();
      return states2.every((state) => nextStates.includes(state));
    }
    function canTransitionTo(...states2) {
      const testStates = states2.flat();
      if (testStates.length === 2 && isString3(testStates[0]) && isPojo3(testStates[1])) {
        const thisState = testStates[0];
        const { afterEmitting } = testStates[1];
        const err = argTypeError2(
          { thisState: isString3, "{ afterEmitting }": isString3 }
        )("canTransitionTo")(thisState, afterEmitting);
        if (err) {
          throw new TypeError(err);
        }
        return thisState !== currentState2() && _peek(afterEmitting) === thisState;
      }
      return _state_canTransitionTo(...testStates);
    }
    function statesAvailableFromHere(state) {
      const _state = !isUndefined(state) ? state : currentState2();
      const err = argTypeError2(
        { state: isString3 }
      )("statesAvailableFromHere")(_state);
      if (err) {
        throw new TypeError(err);
      }
      return routes.reduce((acc, route) => {
        const [fromState, toState] = route.split(cxArrow).map((state2) => state2.trim());
        return fromState === _state ? [...acc, toState] : acc;
      }, []);
    }
    function _inState(state, anyOrFn, ...fnArgs) {
      const conditionMatches = currentState2() === state;
      if (isUndefined(anyOrFn)) {
        return conditionMatches;
      }
      if (!conditionMatches) {
        return null;
      }
      if (isFunction3(anyOrFn)) {
        return anyOrFn(...fnArgs);
      }
      return anyOrFn;
    }
    function _inStateObject(stateObject, ...fnArgs) {
      const match2 = Object.entries(stateObject).find(([state]) => _inState(state));
      return match2 ? _inState(...match2.concat(fnArgs)) : null;
    }
    function inState(...args) {
      const err = argTypeError2(
        { state: [isString3, isPojo3] }
      )("inState")(args[0]);
      if (err) {
        throw new TypeError(err);
      }
      return isPojo3(args[0]) ? _inStateObject(...args) : _inState(...args);
    }
    const emit2 = (eventName, ...args) => {
      const err = argTypeError2(
        { eventName: isString3 }
      )("emit")(eventName);
      if (err) {
        throw new TypeError(err);
      }
      _peek(eventName);
      return events.emit(eventName, ...args);
    };
    const enter = (state, ...args) => {
      const err = argTypeError2(
        { state: isString3 }
      )("enter")(state);
      if (err) {
        throw new TypeError(err);
      }
      const inState2 = currentState2();
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
    };
    function onEvent(eventName, cb) {
      const err = argTypeError2(
        { eventName: isString3, cb: isFunction3 }
      )("onEvent")(eventName, cb);
      if (err) {
        throw new TypeError(err);
      }
      events.on(eventName, cb);
      return () => events.off(eventName, cb);
    }
    const switchMethods = Object.keys(INTERNAL_EVENTS).reduce((obj, methodName) => ({
      ...obj,
      [methodName]: (cb) => {
        const err = argTypeError2({ cb: isFunction3 })(methodName)(cb);
        if (err) {
          throw new TypeError(err);
        }
        const decreaseRefCount = statesHandled.increase(
          INTERNAL_EVENTS[methodName]
        );
        const removeEvent = onInternalEvent(
          INTERNAL_EVENTS[methodName],
          cb
        );
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
          const err = argTypeError2(
            { state: isString3, cb: isFunction3 }
          )(methodName)(state, cb);
          if (err) {
            throw new TypeError(err);
          }
          const decreaseRefCounts = [
            statesHandled.increase(state),
            statesHandled.increase(`${state}:${eventName}`)
          ];
          const removeEvent = switchMethods[switchMethod](
            (toState, fromState, ...args) => {
              if (name2.indexOf("Exit") === 0) {
                state === fromState && cb(toState, ...args);
              } else {
                state === toState && cb(fromState, ...args);
              }
            }
          );
          return () => {
            removeEvent();
            decreaseRefCounts.map((fn) => fn());
          };
        }
      };
    }, {});
    function Emit3(eventName, ...curriedArgs) {
      const err = argTypeError2({ eventName: isString3 })("Emit")(eventName);
      if (err) {
        throw new TypeError(err);
      }
      return (...args) => emit2(eventName, ...[...curriedArgs, ...args]);
    }
    function Enter(state, ...curriedArgs) {
      const err = argTypeError2({ state: isString3 })("Enter")(state);
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
      const err = argTypeError2({ state: [isString3, isPojo3] })("InState")(args[0]);
      if (err) {
        throw new TypeError(err);
      }
      return isPojo3(args[0]) ? _InStateObject(...args) : _InState(...args);
    }
    function reset() {
      _console.warn(`${logPrefix}: State-machine reset!`);
      stateHistory.length = 0;
      stateHistory.push(startIn);
    }
    function transitionNoOp(message) {
      const lastState = previousState();
      const inState2 = currentState2();
      const prevRoute = `${isUndefined(lastState) ? "[undefined]" : lastState}->${inState2}`;
      const availableStates = statesAvailableFromHere();
      if (!availableStates.length) {
        _console.info(
          `${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > There are no states available from "${inState2}"`
        );
      } else {
        _console.info(
          `${logPrefix}: ${message}
  > Previous transition: "${prevRoute}"
  > From "${inState2}", valid states are: [${availableStates.map((state) => `"${state}"`).join(", ")}]`
        );
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
      const { description, table } = refCounter.toValue();
      _console.log(description);
      if (table.length) {
        _console.table(table);
      } else {
        _console.log("  > No information");
      }
    }
    return {
      __STATEBOT__: 1,
      statesAvailableFromHere,
      canTransitionTo,
      currentState: currentState2,
      previousState,
      history: () => [...stateHistory],
      emit: Pausable(emit2),
      Emit: Pausable(Emit3),
      enter: Pausable(enter),
      Enter: Pausable(Enter),
      inState,
      InState,
      info: () => info(),
      inspect: () => inspect(),
      name: () => name,
      onEntered: enterExitMethods[ON_ENTERED],
      onEntering: enterExitMethods[ON_ENTERING],
      onExited: enterExitMethods[ON_EXITED],
      onExiting: enterExitMethods[ON_EXITING],
      onSwitched: switchMethods[ON_SWITCHED],
      onSwitching: switchMethods[ON_SWITCHING],
      onEvent,
      onTransitions: (transitions) => applyHitcher(transitions, "onTransitions"),
      performTransitions: (transitions) => applyHitcher(transitions, "performTransitions"),
      pause,
      paused,
      peek: peek2,
      reset,
      resume
    };
  }
  function decomposeHitcherActions(hitcherActions) {
    const transitionsForEvents = {};
    const transitionsOnly = [];
    Object.entries(hitcherActions).map(([routeChart, actionFnOrConfigObj]) => {
      if (isFunction3(actionFnOrConfigObj)) {
        transitionsOnly.push({ routeChart, action: actionFnOrConfigObj });
        return;
      }
      if (!isPojo3(actionFnOrConfigObj)) {
        return;
      }
      const { on: _on, then: _then } = actionFnOrConfigObj;
      const hasValidEventNames = isString3(_on) || isArray3(_on);
      if (hasValidEventNames) {
        const eventNames = [_on].flat();
        eventNames.map((name) => {
          transitionsForEvents[name] = transitionsForEvents[name] || [];
          transitionsForEvents[name].push({ routeChart, action: _then });
        });
        return;
      }
      if (isFunction3(_then)) {
        transitionsOnly.push({ routeChart, action: actionFnOrConfigObj });
      }
    });
    return { transitionsForEvents, transitionsOnly };
  }
  function expandTransitions(configs, canWarn) {
    const allStates = [];
    const allRoutes = [];
    const _configs = configs.reduce((acc, config) => {
      const { routeChart, action } = config;
      const { states, routes, transitions } = decomposeChart(routeChart);
      if (canWarn()) {
        allStates.push(...states);
        allRoutes.push(...routes);
      }
      return [
        ...acc,
        ...transitions.map(
          ([fromState, toState]) => ({ fromState, toState, action })
        )
      ];
    }, []);
    return {
      configs: _configs,
      states: allStates,
      routes: allRoutes
    };
  }
  var makeHooks = ({ Statebot: Statebot3, useEffect: useEffect2, useState: useState2, useMemo: useMemo2 }) => {
    if (![useEffect2, useState2, useMemo2].every((x) => typeof x === "function")) {
      console.warn("Statebot Hooks unavailable: React or Mithril not found");
    }
    function useStatebot2(bot) {
      const [state, setState] = useState2(bot.currentState());
      useEffect2(() => {
        let done = false;
        const removeListener = bot.onSwitched((toState) => {
          if (done) {
            return;
          }
          setState(toState);
        });
        return () => {
          done = true;
          removeListener();
        };
      }, [bot]);
      return state;
    }
    function useStatebotFactory2(name, config) {
      const { bot, listeners } = useMemo2(() => {
        const {
          performTransitions = {},
          onTransitions = {},
          ...botConfig
        } = config || {};
        const bot2 = Statebot3(name, botConfig);
        const listeners2 = [
          bot2.performTransitions(performTransitions),
          bot2.onTransitions(onTransitions)
        ];
        return {
          bot: bot2,
          listeners: listeners2
        };
      }, []);
      useEffect2(
        () => () => {
          if (typeof bot.pause === "function") {
            bot.pause();
          }
          listeners.forEach((off) => off());
        },
        [bot, listeners]
      );
      const state = useStatebot2(bot);
      return { state, bot };
    }
    function useStatebotEvent2(bot, eventName, stateOrFn, maybeFn) {
      useEffect2(() => {
        let done = false;
        function onSwitchFn(...args2) {
          if (done) {
            return;
          }
          stateOrFn(...args2);
        }
        function onEnterOrExitFn(...args2) {
          if (done) {
            return;
          }
          maybeFn(...args2);
        }
        const args = typeof maybeFn === "function" ? [stateOrFn, onEnterOrExitFn] : [onSwitchFn];
        const removeListener = bot[eventName](...args);
        return () => {
          done = true;
          removeListener();
        };
      }, [bot, eventName, stateOrFn, maybeFn]);
    }
    return {
      useStatebot: useStatebot2,
      useStatebotFactory: useStatebotFactory2,
      useStatebotEvent: useStatebotEvent2
    };
  };
  var { useStatebot, useStatebotFactory, useStatebotEvent } = makeHooks({
    Statebot,
    useEffect,
    useState,
    useMemo
  });
  var import_timers2 = __toESM(require_timers());
  var uiWidgetStates = `

  loading ->
  rendering-ui ->

    closed -> opened -> closed

`;
  var SUPPORTS_YEARS_SLIDER = false;
  var MAXIMUM_YEARS_TO_FETCH = 10;
  var DEFAULT_YEARS_TO_FETCH = 3;
  var STATEMENTS_KEEP_BALANCE_HISTORY = false;
  var import_mithril2 = __toESM(require_mithril());
  var Header = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril2.default)("h1", null, "OBIS | ", children);
  });
  var import_mithril8 = __toESM(require_mithril());
  function r(e) {
    var t, f2, n = "";
    if ("string" == typeof e || "number" == typeof e)
      n += e;
    else if ("object" == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (f2 = r(e[t])) && (n && (n += " "), n += f2);
      else
        for (t in e)
          e[t] && (n && (n += " "), n += t);
    return n;
  }
  function clsx() {
    for (var e, t, f2 = 0, n = ""; f2 < arguments.length; )
      (e = arguments[f2++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_m_default = clsx;
  var import_mithril4 = __toESM(require_mithril());
  var import_timers = __toESM(require_timers());
  var import_mithril3 = __toESM(require_mithril());
  var ContainerWithRef = withHooks((props) => {
    const { children } = props || {};
    const { setRef = () => {
    } } = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", { oncreate: (vnode) => setRef(vnode.dom) }, children);
  });
  var event = {
    TOGGLE_OPEN: "toggle-open",
    OPEN_FINISHED: "open-finished",
    CLOSE_FINISHED: "close-finished"
  };
  var chart = `
  closed -> opening -> opened
  opened -> closing -> closed
`;
  var VerticalAnimationContainer = withHooks((props) => {
    const { children } = props || {};
    const { opened = false, durationInMs = 250 } = props || {};
    const { state, bot } = useStatebotFactory("animated-close/open", {
      chart,
      startIn: opened ? "opened" : "closed",
      logLevel: 2,
      performTransitions: ({ Emit: Emit3 }) => ({
        // Open
        "closed -> opening": {
          on: event.TOGGLE_OPEN,
          then: (0, import_timers.Delay)(Emit3(event.OPEN_FINISHED), durationInMs)
        },
        "opening -> opened": {
          on: event.OPEN_FINISHED
        },
        // Close
        "opened -> closing": {
          on: event.TOGGLE_OPEN,
          then: (0, import_timers.Delay)(Emit3(event.CLOSE_FINISHED), durationInMs)
        },
        "closing -> closed": {
          on: event.CLOSE_FINISHED
        }
      })
    });
    const [firstRun, setFirstRun] = useState(true);
    useEffect(() => {
      if (firstRun) {
        setFirstRun(false);
        return;
      }
      const expectedState = opened ? "opened" : "closed";
      const removeListener = bot.onSwitched((toState) => {
        if (["opened", "closed"].includes(toState) && toState !== expectedState) {
          bot.emit(event.TOGGLE_OPEN);
        }
      });
      bot.emit(event.TOGGLE_OPEN);
      return removeListener;
    }, [bot, opened]);
    const [containerEl, setContainerEl] = useState(void 0);
    const [containerHeight, setContainerHeight] = useState(void 0);
    useEffect(
      () => void (containerEl && setContainerHeight(containerEl.scrollHeight)),
      [containerEl, children]
    );
    return /* @__PURE__ */ (0, import_mithril4.default)(
      "div",
      {
        className: `vertical-animation-container ${state}`,
        style: `max-height: ${containerHeight}px`
      },
      /* @__PURE__ */ (0, import_mithril4.default)(ContainerWithRef, { setRef: setContainerEl }, children)
    );
  });
  var import_mithril6 = __toESM(require_mithril());
  var Button = withHooks((props) => {
    const { children } = props || {};
    const { className, onClick: handleClick, disabled } = props || {};
    return /* @__PURE__ */ (0, import_mithril6.default)("button", { className, onclick: handleClick, disabled }, children);
  });
  var import_mithril7 = __toESM(require_mithril());
  var Dialog = withHooks((props) => {
    const { children, hidden } = props || {};
    return /* @__PURE__ */ (0, import_mithril7.default)(
      "div",
      {
        className: clsx_m_default("dialog", {
          hidden
        })
      },
      children
    );
  });
  var ObisOverlayWidget = withHooks((props) => {
    const {
      ready = true,
      opened = false,
      alwaysVisibleSlot = null,
      toggledSlot = null,
      onToggle: handleToggle = () => {
      }
    } = props || {};
    const closed = !opened;
    return /* @__PURE__ */ (0, import_mithril8.default)(Dialog, { hidden: !ready }, ready && /* @__PURE__ */ (0, import_mithril8.default)(
      Button,
      {
        className: clsx_m_default("toggle-button", { opened, closed }),
        onClick: handleToggle,
        disabled: !ready
      },
      "\u21E7"
    ), alwaysVisibleSlot, /* @__PURE__ */ (0, import_mithril8.default)(VerticalAnimationContainer, { opened }, toggledSlot));
  });
  var import_mithril11 = __toESM(require_mithril());
  var A = Object.defineProperty;
  var G = (t, n) => {
    for (var e in n)
      A(t, e, { get: n[e], enumerable: true });
  };
  var d = {};
  G(d, { instanceOf: () => l, isArguments: () => R, isArray: () => K, isDate: () => Q, isFormData: () => a, isFunction: () => V, isIterable: () => y, isMap: () => _, isNumber: () => X, isObject: () => h, isPojo: () => j, isRegExp: () => Y, isSet: () => Z, isString: () => T });
  var q = Object.prototype;
  var J = q.toString;
  var v = (t) => (n) => typeof n === t;
  var l = (t) => (n) => n instanceof t;
  var { isArray: K } = Array;
  var R = (t) => J.call(t) === "[object Arguments]";
  var Q = (t) => l(Date)(t) && !isNaN(t);
  var V = v("function");
  var T = v("string");
  var X = (t) => t === t && v("number")(t);
  var h = (t) => t !== null && v("object")(t);
  var Y = l(RegExp);
  var Z = l(Set);
  var _ = l(Map);
  var j = (t) => t === null || !h(t) || R(t) ? false : Object.getPrototypeOf(t) === q;
  var y = (t) => t != null && [t[Symbol.iterator], t.next].every(V);
  var a = (t) => typeof FormData != "undefined" && l(FormData)(t);
  var { isArguments: k, isArray: g, isDate: bt, isFunction: O, isNumber: tt } = d;
  var { isPojo: w, isRegExp: H, isString: I, instanceOf: Nt } = d;
  var { isMap: nt, isSet: et, isIterable: ot, isFormData: rt } = d;
  var { keys: p, entries: st, assign: it } = Object;
  var f = 2e4;
  function Dt(t) {
    return (...n) => ct(...n)(t);
  }
  var ct = (...t) => (n) => {
    let [e, o] = k(n) ? [{}, Array.from(n)] : nt(n) || rt(n) ? [{ isMap: true }, n.entries()] : et(n) ? [{ isSet: true }, n.values()] : [{}, n];
    if (!ot(o))
      return z(...t)(o).result;
    let [i, u] = t.reduce(([r2, m29], S) => ut(S) ? [S, m29] : [r2, [...m29, S]], [() => ({ value: () => {
    } }), []]), c = [];
    do {
      let { value: r2, done: m29 } = o.next();
      if (m29)
        return i().value();
      c.push(r2);
      let { found: S, result: C } = z(...u)(e.isSet ? r2 : e.isMap ? { key: r2[0], value: r2[1] } : [...c]);
      if (S)
        return C;
    } while (c.length < f || e.isSet || e.isMap);
    throw new Error(`Hit iterationLimit: ${f}. Use setIterationLimit(Infinity) to disable.`);
  };
  var z = (...t) => {
    let n;
    return (e) => ({ found: !!t.find((i) => {
      let u = i(e), { matched: c, value: r2 } = u || {};
      return [c, r2].every(O) ? c(e) && (n = r2(e), true) : u && (n = u);
    }), result: n });
  };
  var U = Symbol("@@match-iz/otherwise");
  var ut = (t) => (t == null ? void 0 : t[U]) === true;
  var Ft = (t) => {
    let n = (e) => ({ matched: () => true, value: () => O(t) ? t(e) : t });
    return n[U] = true, n;
  };
  var D = (t) => (n) => (e) => ({ matched: () => s(t, e, (o) => e = o), value: () => O(n) ? I(e) && H(t) ? n(...mt(e.match(t))) : n(e) : n });
  var Wt = (...t) => {
    if (t.length === 1) {
      let [n] = t;
      return D(n);
    }
    if (t.length === 2) {
      let [n, e] = t;
      return D(n)(e);
    }
    if (t.length > 2) {
      let n = t.slice(-1)[0], e = t.slice(0, -1);
      return D(pt(e))(n);
    }
    throw new Error("Expected at least 1 argument");
  };
  var mt = (t) => {
    let { groups: n } = t;
    return n ? [n, t] : [t];
  };
  var s = (t, n, e) => w(t) ? p(t).every((o) => s(t[o], n == null ? void 0 : n[o], e)) : g(t) ? g(n) && t.length === n.length && t.every((o, i) => s(o, n == null ? void 0 : n[i], e)) : O(t) ? t(n, e) : I(n) && H(t) ? t.test(n) : t === n || [t, n].every(Number.isNaN);
  var pt = (...t) => (n, e) => t.flat().every((o) => s(o, n, e));
  var import_mithril9 = __toESM(require_mithril());
  var Actions = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril9.default)("div", { className: "actions" }, children);
  });
  var import_mithril10 = __toESM(require_mithril());
  var import_fp = __toESM(require_fp());
  var YearsSlider = withHooks((props) => {
    const {
      value,
      maxYears = 15,
      defaultYears = 7,
      onUpdate,
      disabled
    } = props || {};
    const handleUpdate = useCallback(
      (0, import_fp.flow)(
        (event2) => event2?.target?.value,
        ($) => parseInt($, 10),
        ($) => isNaN($) ? defaultYears : $,
        ($) => onUpdate($)
      ),
      [onUpdate, defaultYears]
    );
    return /* @__PURE__ */ (0, import_mithril10.default)(
      "input",
      {
        className: "fetch-slider",
        type: "range",
        min: "1",
        max: maxYears,
        oninput: handleUpdate,
        onchange: handleUpdate,
        value,
        disabled
      }
    );
  });
  var { fetchMachine: fetcher } = obis;
  var YearsAndActionButtons = withHooks((props) => {
    const {
      onYearsChanged,
      onFetch: handleFetchClick,
      onViewStatements: handleViewStatementsClick2,
      onDownloadAll: handleDownloadAllClick2
    } = props || {};
    const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH);
    const handleYearsChanged = useCallback(
      (years) => {
        setYearsToFetch(years);
        onYearsChanged(years);
      },
      [onYearsChanged]
    );
    return /* @__PURE__ */ (0, import_mithril11.default)(Actions, null, Dt(SUPPORTS_YEARS_SLIDER)(
      Wt(true)(
        /* @__PURE__ */ (0, import_mithril11.default)(
          YearsSlider,
          {
            maxYears: MAXIMUM_YEARS_TO_FETCH,
            defaultYears: DEFAULT_YEARS_TO_FETCH,
            value: yearsToFetch,
            onUpdate: handleYearsChanged,
            disabled: !fetcher.inState("idle")
          }
        )
      ),
      Ft(/* @__PURE__ */ (0, import_mithril11.default)("div", null, "\xA0"))
    ), /* @__PURE__ */ (0, import_mithril11.default)(
      Button,
      {
        onClick: handleFetchClick,
        className: "fetch-everything",
        disabled: !fetcher.inState("idle")
      },
      Dt(SUPPORTS_YEARS_SLIDER)(
        Wt(true)(
          /* @__PURE__ */ (0, import_mithril11.default)(import_mithril11.default.Fragment, null, "Fetch ", yearsToFetch, " ", yearsToFetch == 1 ? "year" : "years")
        ),
        Ft("Fetch statements")
      )
    ), /* @__PURE__ */ (0, import_mithril11.default)(
      Button,
      {
        onClick: handleViewStatementsClick2,
        disabled: !fetcher.inState("found-entries")
      },
      "View statements"
    ), /* @__PURE__ */ (0, import_mithril11.default)(
      Button,
      {
        onClick: handleDownloadAllClick2,
        disabled: !fetcher.inState("found-entries")
      },
      "Download all"
    ));
  });
  var import_mithril17 = __toESM(require_mithril());
  var import_fp2 = __toESM(require_fp());
  var import_mithril12 = __toESM(require_mithril());
  var Account = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril12.default)("div", { className: "account" }, children);
  });
  var import_mithril13 = __toESM(require_mithril());
  var AccountName = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril13.default)("h3", { className: "account-name" }, children);
  });
  var import_mithril14 = __toESM(require_mithril());
  var Accounts = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril14.default)("div", { className: "accounts" }, children);
  });
  var import_mithril15 = __toESM(require_mithril());
  var StatementsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril15.default)("div", { className: "statements-loaded" }, children);
  });
  var import_mithril16 = __toESM(require_mithril());
  var YearsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril16.default)("div", { className: "years-loaded" }, children);
  });
  var ListOfAccountCards = withHooks(() => {
    return /* @__PURE__ */ (0, import_mithril17.default)(Accounts, null, store2().accounts.map((account) => {
      const allStatementYears = (0, import_fp2.pipe)(
        store2(),
        ($) => $.statements.filter((x) => x.accountId === account.id),
        ($) => $.map((x) => new Date(x.endDate).getFullYear())
      );
      const uniqueStatementYears = (0, import_fp2.pipe)(
        allStatementYears,
        ($) => new Set($),
        ($) => [...$]
      );
      return /* @__PURE__ */ (0, import_mithril17.default)(Account, { key: account.id }, /* @__PURE__ */ (0, import_mithril17.default)(StatementsLoaded, null, "Statements: ", allStatementYears.length), /* @__PURE__ */ (0, import_mithril17.default)(YearsLoaded, null, uniqueStatementYears.join(" ")), /* @__PURE__ */ (0, import_mithril17.default)(AccountName, null, account.sortCode, " ", account.accountNumber));
    }));
  });
  var import_mithril21 = __toESM(require_mithril());
  var import_mithril18 = __toESM(require_mithril());
  var ProgressBar = withHooks((props) => {
    const { value, max } = props || {};
    return /* @__PURE__ */ (0, import_mithril18.default)("progress", { value, max });
  });
  var import_mithril19 = __toESM(require_mithril());
  var Subheader = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril19.default)("h2", null, children);
  });
  var import_mithril20 = __toESM(require_mithril());
  var ShowHelpOnError = withHooks(() => {
    return /* @__PURE__ */ (0, import_mithril20.default)("span", { style: "font-weight: bold; color: red;" }, "Sorry, something went wrong. Please try again, or report a problem on the", " ", /* @__PURE__ */ (0, import_mithril20.default)(
      "a",
      {
        href: "https://github.com/shuckster/OBIS/issues",
        target: "_blank",
        rel: "noopener noreferrer"
      },
      "OBIS Github repo"
    ));
  });
  var { fetchMachine: fetcher2 } = obis;
  var HelpAndProgressBar = withHooks((props) => {
    const { ready, opened } = props || {};
    return /* @__PURE__ */ (0, import_mithril21.default)(Subheader, null, Dt({ ready, opened })(
      Wt({ ready: true, opened: true })(
        'Hit the "Fetch" button below to try and download everything automatically.'
      ),
      Wt({ ready: true, opened: false })(
        "Welcome! Click that button on the right to see if we can download some statements."
      ),
      Ft("Loading...")
    ), /* @__PURE__ */ (0, import_mithril21.default)("br", null), /* @__PURE__ */ (0, import_mithril21.default)("br", null), fetcher2.inState({
      "getting-accounts": "Finding accounts...",
      "getting-statements": "Getting statements...",
      "getting-entries": "Getting transactions... (takes a moment to finish)",
      idle: () => Dt(fetcher2.history().some((state) => /^failed-/.test(state)))(
        Wt(true)(/* @__PURE__ */ (0, import_mithril21.default)(ShowHelpOnError, null)),
        Ft("")
      )
    }), /* @__PURE__ */ (0, import_mithril21.default)(ProgressBar, { ...progressBar }));
  });
  var { fetchMachine: fetcher3 } = obis;
  var { Statebot: Statebot2, messages: messages2 } = obis.deps;
  var { Emit } = fetcher3;
  var uiMachine = Statebot2("UI", {
    events: messages2,
    chart: uiWidgetStates,
    startIn: false ? "opened" : "loading",
    logLevel: 2
  });
  uiMachine.performTransitions({
    "loading -> rendering-ui": {
      on: actions.ui.RENDERED,
      then: (0, import_timers2.Delay)(Emit(actions.FIRST_RUN), (0, import_timers2.seconds)(0.1))
    },
    "rendering-ui -> closed": {
      on: actions.FIRST_RUN
    },
    "closed -> opened -> closed": {
      on: actions.ui.TOGGLE_OPEN
    }
  });
  var handleToggleOpen = Emit(actions.ui.TOGGLE_OPEN);
  var handleViewStatementsClick = Emit(actions.ui.VIEW_STATEMENTS);
  var handleDownloadAllClick = Emit(actions.ui.DOWNLOAD_STATEMENTS);
  var App = withHooks(() => {
    const state = useStatebot(uiMachine);
    const ready = !["idle", "loading"].includes(state);
    const opened = state === "opened";
    const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH);
    const handleFetchClick = useCallback(
      Emit(actions.get.ACCOUNTS, yearsToFetch),
      [yearsToFetch]
    );
    return /* @__PURE__ */ (0, import_mithril22.default)(
      ObisOverlayWidget,
      {
        ready,
        opened,
        onToggle: handleToggleOpen,
        alwaysVisibleSlot: /* @__PURE__ */ (0, import_mithril22.default)(import_mithril22.default.Fragment, null, /* @__PURE__ */ (0, import_mithril22.default)(Header, null, obis.plugin.description), /* @__PURE__ */ (0, import_mithril22.default)(HelpAndProgressBar, { ready, opened })),
        toggledSlot: /* @__PURE__ */ (0, import_mithril22.default)(import_mithril22.default.Fragment, null, ready && /* @__PURE__ */ (0, import_mithril22.default)(import_mithril22.default.Fragment, null, /* @__PURE__ */ (0, import_mithril22.default)(ListOfAccountCards, null), /* @__PURE__ */ (0, import_mithril22.default)(
          YearsAndActionButtons,
          {
            onYearsChanged: setYearsToFetch,
            onFetch: handleFetchClick,
            onViewStatements: handleViewStatementsClick,
            onDownloadAll: handleDownloadAllClick
          }
        )))
      }
    );
  });
  var import_mithril29 = __toESM(require_mithril());
  var { messages: messages3 } = obis.deps;
  function useAccounts() {
    const [accounts, setAccounts] = useState(store2().accounts);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        setAccounts(store2().accounts);
      });
      return () => off();
    }, []);
    return accounts;
  }
  function useStatements() {
    const [statements, setStatements] = useState(store2().statements);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        const sortedStatements = [...store2().statements].sort(SortByNumber("endDate")).reverse();
        setStatements(sortedStatements);
      });
      return () => off();
    }, []);
    return statements;
  }
  function useEntries() {
    const [entries, setEntries] = useState(store2().entries);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        const sortedEntries = [...store2().entries].sort(SortByNumber("date")).reverse();
        setEntries(sortedEntries);
      });
      return () => off();
    }, []);
    return entries;
  }
  var UNKNOWN_ACCOUNT = { sortCode: "", accountNumber: "" };
  function useAccountStatements(accountId) {
    const accounts = useAccounts();
    const [account, setAccount] = useState();
    const [accountInfo, setAccountInfo] = useState();
    useEffect(() => {
      const account2 = accounts.find((x) => x.id === accountId);
      const { sortCode, accountNumber } = account2 ?? UNKNOWN_ACCOUNT;
      const accountInfo2 = `${sortCode} ${accountNumber}`;
      setAccount(account2);
      setAccountInfo(accountInfo2);
    }, [accounts, accountId, setAccount, setAccountInfo]);
    const statements = useStatements();
    const accountStatements = useMemo(
      () => statements.filter((x) => x.accountId === accountId),
      [statements, accountId]
    );
    const getNewest = useCallback(() => {
      return accountStatements[0]?.id;
    }, [accountStatements]);
    const getNewerThan = useCallback(
      (statementId) => {
        const currentStatementIndex = accountStatements.map((x, index) => x.id === statementId ? index : null).filter((x) => x !== null)[0];
        return accountStatements[Math.max(0, currentStatementIndex - 1)]?.id;
      },
      [accountStatements]
    );
    const getOlderThan = useCallback(
      (statementId) => {
        const currentStatementIndex = accountStatements.map((x, index) => x.id === statementId ? index : null).filter((x) => x !== null)[0];
        return accountStatements[Math.min(accountStatements.length - 1, currentStatementIndex + 1)]?.id;
      },
      [accountStatements]
    );
    const getNearestToDate = useCallback(
      (timestamp) => {
        const statementsWithDateDeltas = accountStatements.map((x) => ({
          dateDelta: Math.abs(timestamp - x.endDate),
          id: x.id
        })).sort(SortByNumber("dateDelta"));
        return statementsWithDateDeltas[0]?.id ?? getNewest();
      },
      [accountStatements]
    );
    return {
      account,
      accountInfo,
      accountStatements,
      getNewest,
      getNewerThan,
      getOlderThan,
      getNearestToDate
    };
  }
  function useStatementEntries(statementId) {
    const statements = useStatements();
    const { startDate, startBalance, endDate, endBalance } = useMemo(
      () => statements.find((x) => x.id === statementId) ?? {},
      [statements, statementId]
    );
    const entries = useEntries();
    const [statementEntries, setStatementEntries] = useState([]);
    const [totalDebit, setTotalDebit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [creditDebitDiff, setCreditDebitDiff] = useState(0);
    useEffect(() => {
      const statementEntries2 = entries.filter((x) => x.statementId === statementId);
      setStatementEntries(statementEntries2);
      const totalDebit2 = statementEntries2.reduce((acc, x) => acc + x.debit, 0);
      const totalCredit2 = statementEntries2.reduce((acc, x) => acc + x.credit, 0);
      const creditDebitDiff2 = totalCredit2 - totalDebit2;
      setTotalDebit(isNaN(totalDebit2) ? 0 : totalDebit2);
      setTotalCredit(isNaN(totalCredit2) ? 0 : totalCredit2);
      setCreditDebitDiff(isNaN(creditDebitDiff2) ? 0 : creditDebitDiff2);
    }, [statementId, entries, setStatementEntries]);
    return {
      entries: statementEntries,
      startDate,
      startBalance,
      endDate,
      endBalance,
      totalDebit,
      totalCredit,
      creditDebitDiff
    };
  }
  var import_fp3 = __toESM(require_fp());
  var import_mithril24 = __toESM(require_mithril());
  var Info = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });
  var import_mithril25 = __toESM(require_mithril());
  var Accounts2 = withHooks((props) => {
    const { selectedAccountId, handleClick } = props;
    const accounts = useAccounts();
    const clickHandler = useCallback(
      (event2) => {
        const accountId = event2?.composedPath().map((x) => x?.dataset?.account).filter(Boolean)[0];
        handleClick(accountId);
      },
      [handleClick]
    );
    return accounts.map((account) => /* @__PURE__ */ (0, import_mithril25.default)(
      "div",
      {
        onclick: clickHandler,
        key: account.id,
        "data-account": account.id,
        className: clsx_m_default("account", {
          selected: account.id === selectedAccountId
        })
      },
      /* @__PURE__ */ (0, import_mithril25.default)("div", { className: "statements-loaded" }),
      /* @__PURE__ */ (0, import_mithril25.default)("div", { className: "years-loaded" }),
      /* @__PURE__ */ (0, import_mithril25.default)("div", { className: "account-name" }, account.sortCode, " ", account.accountNumber)
    ));
  });
  var Cursor = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });
  var import_mithril26 = __toESM(require_mithril());
  var Months = withHooks((props) => {
    const _months = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|");
    const { selectedMonth, months = [], handleClick } = props || {};
    const clickHandler = useCallback(
      (event2) => handleClick(event2?.target?.dataset?.month),
      [handleClick]
    );
    return _months.map((month, index) => /* @__PURE__ */ (0, import_mithril26.default)(
      "div",
      {
        onclick: clickHandler,
        key: month,
        "data-month": index,
        className: clsx_m_default("month", {
          selected: index === selectedMonth,
          "no-entries": !months.includes(index)
        })
      },
      month
    ));
  });
  var import_mithril27 = __toESM(require_mithril());
  var Years = withHooks((props) => {
    const { selectedYear, years = [], handleClick } = props || {};
    const clickHandler = useCallback(
      (event2) => handleClick(event2?.target?.dataset?.year),
      [handleClick]
    );
    return years.map((year) => /* @__PURE__ */ (0, import_mithril27.default)(
      "div",
      {
        onclick: clickHandler,
        key: year,
        "data-year": year,
        className: clsx_m_default("year", {
          selected: year == selectedYear
        })
      },
      year
    ));
  });
  var import_mithril28 = __toESM(require_mithril());
  var Statement = withHooks((props) => {
    const { selectedStatementId } = props;
    const { entries, startBalance, endBalance } = useStatementEntries(selectedStatementId);
    let totalCredit = 0;
    let totalDebit = 0;
    let runningBalance = startBalance ?? 0;
    const rows = entries.map((entry) => {
      const { id, date, type, payee, note, debit, credit, balance } = entry;
      totalDebit -= debit;
      totalCredit += credit;
      runningBalance += credit - debit;
      return /* @__PURE__ */ (0, import_mithril28.default)("tr", { key: id }, /* @__PURE__ */ (0, import_mithril28.default)("td", { className: "no-wrap" }, simpleDate(date)), /* @__PURE__ */ (0, import_mithril28.default)("td", null, type), /* @__PURE__ */ (0, import_mithril28.default)("td", null, payee), /* @__PURE__ */ (0, import_mithril28.default)("td", null, note), /* @__PURE__ */ (0, import_mithril28.default)("td", { className: "currency" }, convertCentsToDecimalForDisplay(debit)), /* @__PURE__ */ (0, import_mithril28.default)("td", { className: "currency" }, convertCentsToDecimalForDisplay(credit)), /* @__PURE__ */ (0, import_mithril28.default)(
        "td",
        {
          className: clsx_m_default("currency", {
            negative: balance < 0
          })
        },
        convertCentsToDecimalForDisplay(balance)
      ), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril28.default)(
        "td",
        {
          className: clsx_m_default("currency", {
            negative: runningBalance < 0
          })
        },
        convertCentsToDecimalForDisplay(runningBalance)
      ));
    });
    let emptyState;
    if (!rows.length) {
      emptyState = /* @__PURE__ */ (0, import_mithril28.default)("tr", null, /* @__PURE__ */ (0, import_mithril28.default)("td", { className: "no-wrap no-entries", colspan: "8" }, "No entries for this period"));
    }
    return /* @__PURE__ */ (0, import_mithril28.default)("table", { className: "statement" }, /* @__PURE__ */ (0, import_mithril28.default)("thead", null, /* @__PURE__ */ (0, import_mithril28.default)("tr", { className: "table-header" }, /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Date"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Type"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Description"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Memo"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Debit"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Credit"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "Balance"), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril28.default)("th", null, "(Calculated)"))), /* @__PURE__ */ (0, import_mithril28.default)("tbody", null, rows.length ? rows : emptyState), /* @__PURE__ */ (0, import_mithril28.default)("tfoot", null, /* @__PURE__ */ (0, import_mithril28.default)("tr", { className: "table-footer" }, /* @__PURE__ */ (0, import_mithril28.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril28.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril28.default)("th", { className: "currency" }, convertCentsToDecimalForDisplay(totalDebit)), /* @__PURE__ */ (0, import_mithril28.default)("th", { className: "currency" }, convertCentsToDecimalForDisplay(totalCredit)), /* @__PURE__ */ (0, import_mithril28.default)("th", { className: "currency" }, convertCentsToDecimalForDisplay(endBalance)), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril28.default)("th", { className: "currency" }, convertCentsToDecimalForDisplay(runningBalance)))));
  });
  function createStatementsWindow() {
    const windowRef = window.open(
      "text/html",
      "obis",
      "width=1000,height=750"
      // ,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=yes
    );
    windowRef.document.writeln(`
    <html>
      <head>
        <title>OBIS :: Statements Browser</title>
        <style type="text/css">
          /* ../../../../../var/folders/74/5b1jhx655yg17x4s7m5bxsvr0000gn/T/tmp-77544-BlSShICvynJS/OBIS/src/ui/styles/statements-browser/all.css */
body.obis-statements-browser {
  font-size: 13px;
  font-family: sans-serif;
  text-align: left;
  margin: 2rem 3rem 0 2rem;
  background: #1a1a1a;
}
body.obis-statements-browser * {
  color: #f5f5ee;
  font-family: sans-serif;
}
body.obis-statements-browser {
}
body.obis-statements-browser table {
  width: 100%;
  border-radius: 0.5rem;
  border-collapse: collapse;
}
body.obis-statements-browser thead,
body.obis-statements-browser .year {
  text-align: center;
}
body.obis-statements-browser table .currency {
  text-align: right;
}
body.obis-statements-browser thead > tr > th:first-child {
  border-top-left-radius: 0.5rem;
}
body.obis-statements-browser thead > tr > th:last-child {
  border-top-right-radius: 0.5rem;
}
body.obis-statements-browser tfoot > tr > th:first-child {
  border-bottom-left-radius: 0.5rem;
}
body.obis-statements-browser tfoot > tr > th:last-child {
  border-bottom-right-radius: 0.5rem;
}
body.obis-statements-browser td,
body.obis-statements-browser th {
  padding: 0.5rem 0.6rem;
  font-size: 0.75rem;
}
body.obis-statements-browser .grid-container {
  display: grid;
  grid-template-columns: auto min-content;
  grid-template-rows: min-content auto;
  gap: 1rem 1rem;
  grid-template-areas: "header spacing" "main years";
}
body.obis-statements-browser .header {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  gap: 0px 0px;
  grid-template-areas: "info-and-accounts" "cursor-and-months";
  grid-area: header;
}
body.obis-statements-browser .main {
  grid-area: main;
}
body.obis-statements-browser .years {
  grid-area: years;
}
body.obis-statements-browser .spacing {
  grid-area: spacing;
}
body.obis-statements-browser .info-and-accounts {
  height: 8rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas: "info accounts";
  grid-area: info-and-accounts;
}
body.obis-statements-browser .info-and-accounts .info {
  grid-area: info;
}
body.obis-statements-browser .info-and-accounts .accounts {
  grid-area: accounts;
}
body.obis-statements-browser .cursor-and-months {
  height: 2rem;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas: "months cursor";
  grid-area: cursor-and-months;
}
body.obis-statements-browser .cursor-and-months .months {
  grid-area: months;
}
body.obis-statements-browser .cursor-and-months .cursor {
  grid-area: cursor;
}
body.obis-statements-browser {
}
body.obis-statements-browser .header {
  z-index: 1001;
  top: 0;
  position: sticky;
  background: #1a1a1a;
  padding: 0 0 1rem 0;
}
body.obis-statements-browser .header h1 {
  margin: 1rem 0 1rem 0;
  padding: 0;
}
body.obis-statements-browser .header h2 {
  margin: 0.5rem 0 0.75rem 0;
  padding: 0;
}
body.obis-statements-browser .balance-summary {
  font-family: sans-serif;
  font-size: 1rem;
}
body.obis-statements-browser .balance-summary > span {
  background: #333;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem 1rem;
}
body.obis-statements-browser .balance-summary > span.black {
  background: #2a4522;
}
body.obis-statements-browser .balance-summary > span.red {
  background: #3e211f;
}
body.obis-statements-browser .accounts {
  display: flex;
  justify-content: flex-end;
}
body.obis-statements-browser .accounts > .account.selected {
  border: 1px solid #b84eff;
}
body.obis-statements-browser .accounts > .account {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
  margin-top: 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 5rem;
  min-height: 6rem;
  background: #272727;
}
body.obis-statements-browser .accounts > .account .statements-loaded {
  font-size: 0.575rem;
  font-weight: 600;
  text-align: right;
}
body.obis-statements-browser .accounts > .account .years-loaded {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: right;
  color: #aaa;
  flex: 2;
}
body.obis-statements-browser .accounts > .account .account-name {
  font-size: 0.9rem;
  font-weight: 800;
  text-align: left;
  margin-bottom: auto;
}
body.obis-statements-browser .statement {
  padding: 1rem;
  margin-bottom: 2rem;
  background: #222;
  box-shadow: rgba(0, 0, 0, 0.5) 0.25rem 0.25rem 1rem;
}
body.obis-statements-browser table {
  cursor: default;
}
body.obis-statements-browser .table-header > th {
  z-index: 1000;
  top: 12rem;
  position: sticky;
  background: #444;
}
body.obis-statements-browser tbody > tr:hover {
  background: #111;
}
body.obis-statements-browser tbody .no-wrap {
  white-space: nowrap;
}
body.obis-statements-browser tbody .no-entries {
  padding: 2rem;
  text-align: center;
}
body.obis-statements-browser tbody .negative {
  color: #ff3f3f;
}
body.obis-statements-browser .table-footer > th {
  z-index: 1000;
  background: #d2d2d2;
  color: black;
}
body.obis-statements-browser .months,
body.obis-statements-browser .cursor {
  display: flex;
  justify-content: flex-end;
}
body.obis-statements-browser .years > div {
  top: 1rem;
  position: sticky;
}
body.obis-statements-browser .cursor > div {
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-left: 1px solid #445;
  border-right: 1px solid #445;
}
body.obis-statements-browser .months > div,
body.obis-statements-browser .years > div > div {
  padding: 0.75rem 0.8rem 0.75rem 0.8rem;
  border-bottom: 1px solid #445;
  width: 100%;
}
body.obis-statements-browser .months > div.selected,
body.obis-statements-browser .years > div > div.selected {
  background: #555;
}
body.obis-statements-browser .cursor > div:hover,
body.obis-statements-browser .accounts > .account:hover,
body.obis-statements-browser .months > div:hover,
body.obis-statements-browser .years > div > div:hover {
  background: #333;
}
body.obis-statements-browser .cursor > div,
body.obis-statements-browser .account,
body.obis-statements-browser .year,
body.obis-statements-browser .month {
  cursor: pointer;
}
body.obis-statements-browser .month.no-entries {
  text-decoration: line-through;
  color: #888;
}

        </style>
      </head>
      <body
        class="obis-statements-browser"
        onload="opener.messages?.emit?.('${actions.ui.STATEMENTS_WINDOW_READY}');"
        onunload="opener.messages?.emit?.('${actions.ui.STATEMENTS_WINDOW_CLOSED}');"
      >
      </body>
    </html>
  `);
    windowRef.document.close();
    return windowRef;
  }
  var StatementsBrowser = withHooks(() => {
    const accounts = useAccounts();
    const [accountId, setAccountId] = useState(accounts[0]?.id);
    const {
      accountInfo,
      accountStatements,
      getNewest,
      getNewerThan,
      getOlderThan,
      getNearestToDate
    } = useAccountStatements(accountId);
    const [selectedStatementId, setSelectedStatementId] = useState(getNewest());
    const [selectedStatementDate, setSelectedStatementDate] = useState(
      accountStatements.find((x) => x.id === selectedStatementId)?.endDate
    );
    useEffect(() => {
      const selectedStatement2 = accountStatements.find(
        (x) => x.id === selectedStatementId
      );
      if (selectedStatement2) {
        setSelectedStatementDate(selectedStatement2.endDate);
      } else {
        const newStatementId = getNearestToDate(selectedStatementDate);
        setSelectedStatementId(newStatementId);
      }
    }, [
      accountStatements,
      selectedStatementId,
      selectedStatementDate,
      setSelectedStatementId,
      setSelectedStatementDate,
      getNearestToDate
    ]);
    const initialDate = new Date(selectedStatementDate);
    const [selectedMonth, setSelectedMonth] = useState(initialDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(initialDate.getFullYear());
    useEffect(() => {
      const updatedDate = new Date(selectedStatementDate);
      setSelectedMonth(updatedDate.getMonth());
      setSelectedYear(updatedDate.getFullYear());
    }, [selectedStatementDate]);
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    useEffect(() => {
      const uniqueYears = (0, import_fp3.pipe)(
        accountStatements,
        ($) => $.map((x) => new Date(x.endDate)),
        ($) => $.map((x) => x.getFullYear()),
        ($) => new Set($),
        ($) => [...$]
      );
      const uniqueMonths = (0, import_fp3.pipe)(
        accountStatements,
        ($) => $.map((x) => new Date(x.endDate)),
        ($) => $.filter((x) => x.getFullYear() == selectedYear),
        ($) => $.map((x) => x.getMonth()),
        ($) => new Set($),
        ($) => [...$]
      );
      setYears(uniqueYears);
      setMonths(uniqueMonths);
    }, [accountStatements, selectedStatementDate, selectedYear]);
    const selectedStatement = useStatementEntries(selectedStatementId);
    const { totalDebit, totalCredit, creditDebitDiff } = selectedStatement;
    const selectAccount = useCallback(
      (accountId2) => setAccountId(accountId2),
      [setAccountId]
    );
    const latestStatement = useCallback(
      () => setSelectedStatementId(getNewest()),
      [setSelectedStatementId, getNewest]
    );
    const olderStatement = useCallback(
      () => setSelectedStatementId(getOlderThan(selectedStatementId)),
      [setSelectedStatementId, getOlderThan, selectedStatementId]
    );
    const newerStatement = useCallback(
      () => setSelectedStatementId(getNewerThan(selectedStatementId)),
      [setSelectedStatementId, getNewerThan, selectedStatementId]
    );
    const selectMonth = (month) => {
      const dateWithDifferentMonth = new Date(selectedStatementDate);
      dateWithDifferentMonth.setMonth(month);
      setSelectedStatementId(getNearestToDate(dateWithDifferentMonth));
    };
    const selectYear = (year) => {
      const dateWithDifferentYear = new Date(selectedStatementDate);
      dateWithDifferentYear.setFullYear(year);
      setSelectedStatementId(getNearestToDate(dateWithDifferentYear));
    };
    return /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "grid-container" }, /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "header" }, /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "info-and-accounts" }, /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "info" }, /* @__PURE__ */ (0, import_mithril29.default)(Info, null, /* @__PURE__ */ (0, import_mithril29.default)("h1", null, "OBIS | Statements Browser"), /* @__PURE__ */ (0, import_mithril29.default)("h2", null, accountInfo, " \u2022", " ", !isNaN(selectedStatementDate) && simpleDate(selectedStatementDate)), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "balance-summary" }, totalCredit > 0 && /* @__PURE__ */ (0, import_mithril29.default)("span", null, convertCentsToDecimalForDisplay(totalCredit), " in"), totalDebit > 0 && /* @__PURE__ */ (0, import_mithril29.default)("span", null, convertCentsToDecimalForDisplay(totalDebit), " out"), creditDebitDiff !== 0 && /* @__PURE__ */ (0, import_mithril29.default)(
      "span",
      {
        className: clsx_m_default({
          black: creditDebitDiff > 0,
          red: creditDebitDiff < 0
        })
      },
      creditDebitDiff <= 0 ? "\u{1F4C9} " : "\u{1F4C8} ",
      convertCentsToDecimalForDisplay(creditDebitDiff)
    )))), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "accounts" }, /* @__PURE__ */ (0, import_mithril29.default)(
      Accounts2,
      {
        selectedAccountId: accountId,
        handleClick: selectAccount
      }
    ))), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "cursor-and-months" }, /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "months" }, /* @__PURE__ */ (0, import_mithril29.default)(
      Months,
      {
        months,
        selectedMonth,
        handleClick: selectMonth
      }
    )), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "cursor" }, /* @__PURE__ */ (0, import_mithril29.default)(Cursor, null, /* @__PURE__ */ (0, import_mithril29.default)("div", { onclick: olderStatement }, "Older"), /* @__PURE__ */ (0, import_mithril29.default)("div", { onclick: latestStatement }, "\u2022"), /* @__PURE__ */ (0, import_mithril29.default)("div", { onclick: newerStatement }, "Newer"))))), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "main" }, /* @__PURE__ */ (0, import_mithril29.default)(Statement, { selectedStatementId })), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "years" }, /* @__PURE__ */ (0, import_mithril29.default)("div", null, /* @__PURE__ */ (0, import_mithril29.default)(
      Years,
      {
        years,
        selectedYear,
        handleClick: selectYear
      }
    ))), /* @__PURE__ */ (0, import_mithril29.default)("div", { className: "spacing" }));
  });
  var { fetchMachine: fetcher4 } = obis;
  var { messages: messages4 } = obis.deps;
  var { on, emit } = messages4;
  var { Emit: Emit2 } = fetcher4;
  window.store = store2;
  window.actions = actions;
  window.messages = messages4;
  function viewStatements() {
    const windowRef = createStatementsWindow();
    import_mithril30.default.mount(windowRef.document.body, StatementsBrowser);
    const offClose = on(actions.ui.CLOSE_STATEMENTS_WINDOW, () => {
      offClose();
      windowRef.close();
    });
  }
  on(actions.ui.VIEW_STATEMENTS, viewStatements);
  on(actions.ui.DOWNLOAD_STATEMENTS, () => {
    makeZip().finally(() => (0, import_promises2.delay)((0, import_timers3.seconds)(3))).finally(Emit2(actions.ui.DOWNLOADED_STATEMENTS));
  });
  function main() {
    emit(actions.ui.RENDERING, import_mithril30.default);
    const rootEl = document.querySelector("#obis-root") || document.body.appendChild(
      withProps(document.createElement("div"), { id: "obis-root" })
    );
    import_mithril30.default.mount(rootEl, App);
    const rafRedraw = () => requestAnimationFrame(() => import_mithril30.default.redraw());
    fetcher4.onSwitched(rafRedraw);
    on(actions.STORE_UPDATED, rafRedraw);
    on(actions.ui.UPDATE_PROGRESS_BAR, (metrics) => {
      const newMax = metrics.max;
      const newValue = metrics.value;
      progressBar.max = newMax;
      progressBar.value = newValue;
      rafRedraw();
    });
    (0, import_promises2.delay)().then(Emit2(actions.ui.RENDERED));
  }
  function withProps(obj, props) {
    return Object.entries(props).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, obj);
  }
  messages4.once(actions.OBIS_READY, main);
  messages4.emit(actions.ui.LOADED);
})();
/*! Bundled license information:

mithril-hooks/dist/mithril-hooks.module.js:
  (*! (c) 2020 Andrea Giammarchi *)
*/
obis.registerPlugins([
  {
    "name": "hsbc-uk",
    "description": "HSBC UK",
    "urls": [
      "http://localhost:4001/*",
      "https://*.hsbc.co.uk/online/dashboard/*"
    ]
  }
]);
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.10.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var I = Object.defineProperty;
      var _ = Object.getOwnPropertyDescriptor;
      var j = Object.getOwnPropertyNames;
      var v = Object.getOwnPropertySymbols;
      var F = Object.prototype.hasOwnProperty;
      var L = Object.prototype.propertyIsEnumerable;
      var E = (t, n, e) => n in t ? I(t, n, { enumerable: true, configurable: true, writable: true, value: e }) : t[n] = e;
      var P = (t, n) => {
        for (var e in n || (n = {}))
          F.call(n, e) && E(t, e, n[e]);
        if (v)
          for (var e of v(n))
            L.call(n, e) && E(t, e, n[e]);
        return t;
      };
      var q = (t, n) => {
        var e = {};
        for (var o in t)
          F.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
        if (t != null && v)
          for (var o of v(t))
            n.indexOf(o) < 0 && L.call(t, o) && (e[o] = t[o]);
        return e;
      };
      var R = (t, n) => {
        for (var e in n)
          I(t, e, { get: n[e], enumerable: true });
      };
      var y = (t, n, e, o) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let r of j(n))
            !F.call(t, r) && r !== e && I(t, r, { get: () => n[r], enumerable: !(o = _(n, r)) || o.enumerable });
        return t;
      };
      var a = (t) => y(I({}, "__esModule", { value: true }), t);
      var yt = {};
      R(yt, { against: () => C, allOf: () => Q, anyOf: () => K, cata: () => Tt, deepEq: () => Mt, defined: () => Vt, empty: () => T, endsWith: () => Ct, eq: () => J, every: () => Lt, falsy: () => Yt, firstOf: () => qt, getIterationLimit: () => bt, gt: () => ht, gte: () => Ht, hasOwn: () => Qt, inRange: () => $t, includedIn: () => Jt, includes: () => Gt, instanceOf: () => gt, isArray: () => l, isDate: () => ft, isFunction: () => f, isIterable: () => B, isNumber: () => $, isPojo: () => g, isRegExp: () => x, isStrictly: () => Kt, isString: () => b, lastOf: () => Rt, lt: () => zt, lte: () => Ut, match: () => vt, not: () => Et, otherwise: () => Dt, pluck: () => xt, setIterationLimit: () => Nt, some: () => Pt, spread: () => jt, startsWith: () => Bt, truthy: () => Xt, when: () => Ft });
      module.exports = a(yt);
      var d = {};
      R(d, { instanceOf: () => p, isArguments: () => h, isArray: () => tt, isDate: () => nt, isFormData: () => mt, isFunction: () => z, isIterable: () => ut, isMap: () => it, isNumber: () => ot, isObject: () => H, isPojo: () => ct, isRegExp: () => rt, isSet: () => st, isString: () => et });
      var V = Object.prototype;
      var k = V.toString;
      var D = (t) => (n) => typeof n === t;
      var p = (t) => (n) => n instanceof t;
      var { isArray: tt } = Array;
      var h = (t) => k.call(t) === "[object Arguments]";
      var nt = (t) => p(Date)(t) && !isNaN(t);
      var z = D("function");
      var et = D("string");
      var ot = (t) => t === t && D("number")(t);
      var H = (t) => t !== null && D("object")(t);
      var rt = p(RegExp);
      var st = p(Set);
      var it = p(Map);
      var ct = (t) => t === null || !H(t) || h(t) ? false : Object.getPrototypeOf(t) === V;
      var ut = (t) => t != null && [t[Symbol.iterator], t.next].every(z);
      var mt = (t) => typeof FormData != "undefined" && p(FormData)(t);
      var { isArguments: lt, isArray: l, isDate: ft, isFunction: f, isNumber: $ } = d;
      var { isPojo: g, isRegExp: x, isString: b, instanceOf: gt } = d;
      var { isMap: pt, isSet: Ot, isIterable: B, isFormData: wt } = d;
      var { keys: w, entries: St, assign: dt } = Object;
      var O = 2e4;
      var bt = () => O;
      var Nt = (t) => {
        let n = O;
        return O = t, () => O = n;
      };
      function vt(t) {
        return (...n) => C(...n)(t);
      }
      var C = (...t) => (n) => {
        let [e, o] = lt(n) ? [{}, Array.from(n)] : pt(n) || wt(n) ? [{ isMap: true }, n.entries()] : Ot(n) ? [{ isSet: true }, n.values()] : [{}, n];
        if (!B(o))
          return U(...t)(o).result;
        let [r, u] = t.reduce(([s, m], S) => It(S) ? [S, m] : [s, [...m, S]], [() => ({ value: () => {
        } }), []]), c = [];
        do {
          let { value: s, done: m } = o.next();
          if (m)
            return r().value();
          c.push(s);
          let { found: S, result: Z } = U(...u)(e.isSet ? s : e.isMap ? { key: s[0], value: s[1] } : [...c]);
          if (S)
            return Z;
        } while (c.length < O || e.isSet || e.isMap);
        throw new Error(`Hit iterationLimit: ${O}. Use setIterationLimit(Infinity) to disable.`);
      };
      var U = (...t) => {
        let n;
        return (e) => ({ found: !!t.find((r) => {
          let u = r(e), { matched: c, value: s } = u || {};
          return [c, s].every(f) ? c(e) && (n = s(e), true) : u && (n = u);
        }), result: n });
      };
      var G = Symbol("@@match-iz/otherwise");
      var It = (t) => (t == null ? void 0 : t[G]) === true;
      var Dt = (t) => {
        let n = (e) => ({ matched: () => true, value: () => f(t) ? t(e) : t });
        return n[G] = true, n;
      };
      var W = (t) => (n) => (e) => ({ matched: () => i(t, e, (o) => e = o), value: () => f(n) ? b(e) && x(t) ? n(...Wt(e.match(t))) : n(e) : n });
      var Ft = (...t) => {
        if (t.length === 1) {
          let [n] = t;
          return W(n);
        }
        if (t.length === 2) {
          let [n, e] = t;
          return W(n)(e);
        }
        if (t.length > 2) {
          let n = t.slice(-1)[0], e = t.slice(0, -1);
          return W(Q(e))(n);
        }
        throw new Error("Expected at least 1 argument");
      };
      var Wt = (t) => {
        let { groups: n } = t;
        return n ? [n, t] : [t];
      };
      var i = (t, n, e) => g(t) ? w(t).every((o) => i(t[o], n == null ? void 0 : n[o], e)) : l(t) ? l(n) && t.length === n.length && t.every((o, r) => i(o, n == null ? void 0 : n[r], e)) : f(t) ? t(n, e) : b(n) && x(t) ? t.test(n) : t === n || [t, n].every(Number.isNaN);
      var xt = (...t) => (n, e) => t.length === 0 || (f(t[0]) ? t[0](n) : i(t[0], n, e)) ? (e(n), true) : false;
      var At = (t, n) => [t, n].every(g) ? w(t).length === w(n).length : true;
      var J = (t) => (n, e) => At(t, n) && i(t, n, e);
      var Mt = (t) => A(t, (n) => g(n) ? J(n) : n);
      var Et = (t) => (n, e) => !i(t, n, e);
      var K = (...t) => (n, e) => t.flat().some((o) => i(o, n, e));
      var Q = (...t) => (n, e) => t.flat().every((o) => i(o, n, e));
      var Lt = (t) => Y((n) => n.every((e) => i(t, e)));
      var Pt = (t) => Y((n) => n.some((e) => i(t, e)));
      var qt = (...t) => M((n, e) => t.length <= n.length && i(t, n.slice(0, t.length), e));
      var Rt = (...t) => M((n, e) => t.length <= n.length && i(t, n.slice(n.length - t.length), e));
      var T = (t) => t !== t || !t && t !== 0 && t !== false || l(t) && !t.length || g(t) && !w(t).length;
      var Vt = (t) => !T(t);
      var ht = (t) => N((n) => n > t);
      var zt = (t) => N((n) => n < t);
      var Ht = (t) => N((n) => n >= t);
      var Ut = (t) => N((n) => n <= t);
      var $t = (t, n) => N((e) => e >= Math.min(t, n) && e <= Math.max(t, n));
      var Bt = (t) => X((n) => n.startsWith(t));
      var Ct = (t) => X((n) => n.endsWith(t));
      var Gt = (t) => M((n) => n.includes(t));
      var Jt = K;
      var Kt = (t) => (n) => n === t;
      var Qt = (...t) => (n) => g(n) && (([e, o]) => e.length && e.every((r) => o.includes(r)))([t.flat(), w(n)]);
      var Tt = (e) => {
        var o = e, { getValue: t } = o, n = q(o, ["getValue"]);
        return St(n).reduce((r, [u, c]) => dt(r, { [u]: (s) => (m) => ({ matched: () => c(m), value: () => f(s) ? s(t(m)) : s }) }), {});
      };
      var Xt = (t) => !!t;
      var Yt = (t) => !t;
      var Zt = (t) => (n, e) => (n[e] = A(n[e], t), n);
      var _t = (t) => (n) => A(n, t);
      var A = (t, n) => n(g(t) ? w(t).reduce(Zt(n), P({}, t)) : l(t) ? t.map(_t(n)) : t);
      var jt = (t) => new Proxy({}, { get: () => t });
      var X = (t) => (n) => b(n) && t(n);
      var N = (t) => (n) => $(n) && t(n);
      var Y = (t) => (n, e) => l(n) && t(n, e);
      var M = (t) => (n, e) => (l(n) || b(n)) && t(n, e);
    }
  });
  var require_fp = __commonJS({
    "src/common/cjs/fp.js"(exports, module) {
      function compose(...fns) {
        return (...x) => fns.reduceRight((g, f) => [f(...g)], x)[0];
      }
      function flow(...fns) {
        return (...x) => fns.reduce((g, f) => [f(...g)], x)[0];
      }
      function pipe(x, ...fns) {
        return fns.reduce((g, f) => f(g), x);
      }
      function flip(fn) {
        return (...x) => (...y) => fn(...y)(...x);
      }
      function do_(f) {
        return f();
      }
      function memo(fn) {
        const table = /* @__PURE__ */ new Map();
        return (x) => table.has(x) ? table.get(x) : table.set(x, fn(x)).get(x);
      }
      function cache(fn) {
        const cache2 = /* @__PURE__ */ new Map();
        return (x) => cache2.has(x) ? cache2.get(x) : cache2.set(x, fn(x, invalidater(cache2, x))).get(x);
      }
      var invalidater = (cache2, x) => () => cache2.delete(x);
      function aside(fn) {
        return (x) => (fn(x), x);
      }
      module.exports = {
        compose,
        pipe,
        flow,
        flip,
        do_,
        memo,
        cache,
        aside
      };
    }
  });
  var require_regexp = __commonJS({
    "src/common/cjs/regexp.js"(exports, module) {
      var { against: against2, when: when2, otherwise: otherwise2, isString: isString3 } = require_dist();
      var { pipe, flow, memo } = require_fp();
      var makeRegExpFromWildcardString2 = memo((str) => {
        if (!isString3(str) || !str.length) {
          throw new TypeError("Please pass a non-empty string");
        }
        return pipe(
          str.replace(rxConsecutiveWildcards(), "*").split("*").map((x) => x.trim()).map(escapeStringForRegExp),
          against2(
            when2(hasNoWildcards)(templateMatchExact),
            when2(hasNoWildcardAtStart)(flow(insertWildcards, templateMatchStart)),
            when2(hasNoWildcardAtEnd)(flow(insertWildcards, templateMatchEnd)),
            otherwise2(insertWildcards)
          ),
          ($) => new RegExp($)
        );
      });
      var rxEscape = () => /[.*+?^${}()|[\]\\]/g;
      var rxConsecutiveWildcards = () => /\*{2,}/g;
      var hasNoWildcards = (x) => x.length === 1;
      var hasNoWildcardAtStart = (x) => x.at(0) !== "";
      var hasNoWildcardAtEnd = (x) => x.at(-1) !== "";
      var insertWildcards = (x) => x.join("(.*)");
      var templateMatchExact = ([x]) => `^${x}$`;
      var templateMatchStart = (x) => `^${x}`;
      var templateMatchEnd = (x) => `${x}$`;
      function escapeStringForRegExp(str) {
        if (!isString3(str)) {
          throw new TypeError("Please pass a string");
        }
        return str.replace(rxEscape(), "\\$&");
      }
      module.exports = {
        makeRegExpFromWildcardString: makeRegExpFromWildcardString2,
        escapeStringForRegExp
      };
    }
  });
  var require_jmespath = __commonJS({
    "node_modules/.pnpm/jmespath@0.16.0/node_modules/jmespath/jmespath.js"(exports) {
      (function(exports2) {
        "use strict";
        function isArray3(obj) {
          if (obj !== null) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          } else {
            return false;
          }
        }
        function isObject2(obj) {
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
          if (isArray3(first) === true) {
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
          if (isObject2(first) === true) {
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
          } else if (isArray3(obj) && obj.length === 0) {
            return true;
          } else if (isObject2(obj)) {
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
        var TYPE_NAME_TABLE = {
          0: "number",
          1: "any",
          2: "string",
          3: "array",
          4: "object",
          5: "boolean",
          6: "expression",
          7: "null",
          8: "Array<number>",
          9: "Array<string>"
        };
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
        function isAlpha(ch) {
          return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_";
        }
        function isNum(ch) {
          return ch >= "0" && ch <= "9" || ch === "-";
        }
        function isAlphaNum(ch) {
          return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "_";
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
                  tokens.push({ type: TOK_AND, value: "&&", start });
                } else {
                  tokens.push({ type: TOK_EXPREF, value: "&", start });
                }
              } else if (stream[this._current] === "|") {
                start = this._current;
                this._current++;
                if (stream[this._current] === "|") {
                  this._current++;
                  tokens.push({ type: TOK_OR, value: "||", start });
                } else {
                  tokens.push({ type: TOK_PIPE, value: "|", start });
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
              var current2 = this._current;
              if (stream[current2] === "\\" && (stream[current2 + 1] === "\\" || stream[current2 + 1] === '"')) {
                current2 += 2;
              } else {
                current2++;
              }
              this._current = current2;
            }
            this._current++;
            return JSON.parse(stream.slice(start, this._current));
          },
          _consumeRawStringLiteral: function(stream) {
            var start = this._current;
            this._current++;
            var maxLength = stream.length;
            while (stream[this._current] !== "'" && this._current < maxLength) {
              var current2 = this._current;
              if (stream[current2] === "\\" && (stream[current2 + 1] === "\\" || stream[current2 + 1] === "'")) {
                current2 += 2;
              } else {
                current2++;
              }
              this._current = current2;
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
            return { type: TOK_NUMBER, value, start };
          },
          _consumeLBracket: function(stream) {
            var start = this._current;
            this._current++;
            if (stream[this._current] === "?") {
              this._current++;
              return { type: TOK_FILTER, value: "[?", start };
            } else if (stream[this._current] === "]") {
              this._current++;
              return { type: TOK_FLATTEN, value: "[]", start };
            } else {
              return { type: TOK_LBRACKET, value: "[", start };
            }
          },
          _consumeOperator: function(stream) {
            var start = this._current;
            var startingChar = stream[start];
            this._current++;
            if (startingChar === "!") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_NE, value: "!=", start };
              } else {
                return { type: TOK_NOT, value: "!", start };
              }
            } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_LTE, value: "<=", start };
              } else {
                return { type: TOK_LT, value: "<", start };
              }
            } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_GTE, value: ">=", start };
              } else {
                return { type: TOK_GT, value: ">", start };
              }
            } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                this._current++;
                return { type: TOK_EQ, value: "==", start };
              }
            }
          },
          _consumeLiteral: function(stream) {
            this._current++;
            var start = this._current;
            var maxLength = stream.length;
            var literal;
            while (stream[this._current] !== "`" && this._current < maxLength) {
              var current2 = this._current;
              if (stream[current2] === "\\" && (stream[current2 + 1] === "\\" || stream[current2 + 1] === "`")) {
                current2 += 2;
              } else {
                current2++;
              }
              this._current = current2;
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
              var error = new Error(
                "Unexpected token type: " + t.type + ", value: " + t.value
              );
              error.name = "ParserError";
              throw error;
            }
            return ast;
          },
          _loadTokens: function(expression) {
            var lexer = new Lexer();
            var tokens = lexer.tokenize(expression);
            tokens.push({ type: TOK_EOF, value: "", start: expression.length });
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
                return { type: "Literal", value: token.value };
              case TOK_UNQUOTEDIDENTIFIER:
                return { type: "Field", name: token.value };
              case TOK_QUOTEDIDENTIFIER:
                var node = { type: "Field", name: token.value };
                if (this._lookahead(0) === TOK_LPAREN) {
                  throw new Error("Quoted identifier not allowed for function names.");
                }
                return node;
              case TOK_NOT:
                right = this.expression(bindingPower.Not);
                return { type: "NotExpression", children: [right] };
              case TOK_STAR:
                left = { type: "Identity" };
                right = null;
                if (this._lookahead(0) === TOK_RBRACKET) {
                  right = { type: "Identity" };
                } else {
                  right = this._parseProjectionRHS(bindingPower.Star);
                }
                return { type: "ValueProjection", children: [left, right] };
              case TOK_FILTER:
                return this.led(token.type, { type: "Identity" });
              case TOK_LBRACE:
                return this._parseMultiselectHash();
              case TOK_FLATTEN:
                left = { type: TOK_FLATTEN, children: [{ type: "Identity" }] };
                right = this._parseProjectionRHS(bindingPower.Flatten);
                return { type: "Projection", children: [left, right] };
              case TOK_LBRACKET:
                if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                  right = this._parseIndexExpression();
                  return this._projectIfSlice({ type: "Identity" }, right);
                } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
                  this._advance();
                  this._advance();
                  right = this._parseProjectionRHS(bindingPower.Star);
                  return {
                    type: "Projection",
                    children: [{ type: "Identity" }, right]
                  };
                }
                return this._parseMultiselectList();
              case TOK_CURRENT:
                return { type: TOK_CURRENT };
              case TOK_EXPREF:
                expression = this.expression(bindingPower.Expref);
                return { type: "ExpressionReference", children: [expression] };
              case TOK_LPAREN:
                var args = [];
                while (this._lookahead(0) !== TOK_RPAREN) {
                  if (this._lookahead(0) === TOK_CURRENT) {
                    expression = { type: TOK_CURRENT };
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
                  return { type: "Subexpression", children: [left, right] };
                }
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return { type: "ValueProjection", children: [left, right] };
              case TOK_PIPE:
                right = this.expression(bindingPower.Pipe);
                return { type: TOK_PIPE, children: [left, right] };
              case TOK_OR:
                right = this.expression(bindingPower.Or);
                return { type: "OrExpression", children: [left, right] };
              case TOK_AND:
                right = this.expression(bindingPower.And);
                return { type: "AndExpression", children: [left, right] };
              case TOK_LPAREN:
                var name = left.name;
                var args = [];
                var expression, node;
                while (this._lookahead(0) !== TOK_RPAREN) {
                  if (this._lookahead(0) === TOK_CURRENT) {
                    expression = { type: TOK_CURRENT };
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
                node = { type: "Function", name, children: args };
                return node;
              case TOK_FILTER:
                var condition = this.expression(0);
                this._match(TOK_RBRACKET);
                if (this._lookahead(0) === TOK_FLATTEN) {
                  right = { type: "Identity" };
                } else {
                  right = this._parseProjectionRHS(bindingPower.Filter);
                }
                return { type: "FilterProjection", children: [left, right, condition] };
              case TOK_FLATTEN:
                var leftNode = { type: TOK_FLATTEN, children: [left] };
                var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
                return { type: "Projection", children: [leftNode, rightNode] };
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
                }
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return { type: "Projection", children: [left, right] };
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
            var indexExpr = { type: "IndexExpression", children: [left, right] };
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
            return { type: "Comparator", name: comparator, children: [left, right] };
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
              right = { type: "Identity" };
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
            return { type: "MultiSelectList", children: expressions };
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
              node = { type: "KeyValuePair", name: keyName, value };
              pairs.push(node);
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              } else if (this._lookahead(0) === TOK_RBRACE) {
                this._match(TOK_RBRACE);
                break;
              }
            }
            return { type: "MultiSelectHash", children: pairs };
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
            var matched, current2, result, first, second, field, left, right, collected, i;
            switch (node.type) {
              case "Field":
                if (value !== null && isObject2(value)) {
                  field = value[node.name];
                  if (field === void 0) {
                    return null;
                  } else {
                    return field;
                  }
                }
                return null;
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
                if (!isArray3(value)) {
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
                if (!isArray3(value)) {
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
                if (!isArray3(base)) {
                  return null;
                }
                collected = [];
                for (i = 0; i < base.length; i++) {
                  current2 = this.visit(node.children[1], base[i]);
                  if (current2 !== null) {
                    collected.push(current2);
                  }
                }
                return collected;
              case "ValueProjection":
                base = this.visit(node.children[0], value);
                if (!isObject2(base)) {
                  return null;
                }
                collected = [];
                var values = objValues(base);
                for (i = 0; i < values.length; i++) {
                  current2 = this.visit(node.children[1], values[i]);
                  if (current2 !== null) {
                    collected.push(current2);
                  }
                }
                return collected;
              case "FilterProjection":
                base = this.visit(node.children[0], value);
                if (!isArray3(base)) {
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
                  current2 = this.visit(node.children[1], filtered[j]);
                  if (current2 !== null) {
                    finalResults.push(current2);
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
                if (!isArray3(original)) {
                  return null;
                }
                var merged = [];
                for (i = 0; i < original.length; i++) {
                  current2 = original[i];
                  if (isArray3(current2)) {
                    merged.push.apply(merged, current2);
                  } else {
                    merged.push(current2);
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
            // name: [function, <signature>]
            // The <signature> can be:
            //
            // {
            //   args: [[type1, type2], [type1, type2]],
            //   variadic: true|false
            // }
            //
            // Each arg in the arg list is a list of valid types
            // (if the function is overloaded and supports multiple
            // types.  If the type is "any" then no type checking
            // occurs on the argument.  Variadic is optional
            // and if not provided is assumed to be false.
            abs: { _func: this._functionAbs, _signature: [{ types: [TYPE_NUMBER] }] },
            avg: { _func: this._functionAvg, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
            ceil: { _func: this._functionCeil, _signature: [{ types: [TYPE_NUMBER] }] },
            contains: {
              _func: this._functionContains,
              _signature: [
                { types: [TYPE_STRING, TYPE_ARRAY] },
                { types: [TYPE_ANY] }
              ]
            },
            "ends_with": {
              _func: this._functionEndsWith,
              _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }]
            },
            floor: { _func: this._functionFloor, _signature: [{ types: [TYPE_NUMBER] }] },
            length: {
              _func: this._functionLength,
              _signature: [{ types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT] }]
            },
            map: {
              _func: this._functionMap,
              _signature: [{ types: [TYPE_EXPREF] }, { types: [TYPE_ARRAY] }]
            },
            max: {
              _func: this._functionMax,
              _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }]
            },
            "merge": {
              _func: this._functionMerge,
              _signature: [{ types: [TYPE_OBJECT], variadic: true }]
            },
            "max_by": {
              _func: this._functionMaxBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            sum: { _func: this._functionSum, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
            "starts_with": {
              _func: this._functionStartsWith,
              _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }]
            },
            min: {
              _func: this._functionMin,
              _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }]
            },
            "min_by": {
              _func: this._functionMinBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            type: { _func: this._functionType, _signature: [{ types: [TYPE_ANY] }] },
            keys: { _func: this._functionKeys, _signature: [{ types: [TYPE_OBJECT] }] },
            values: { _func: this._functionValues, _signature: [{ types: [TYPE_OBJECT] }] },
            sort: { _func: this._functionSort, _signature: [{ types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER] }] },
            "sort_by": {
              _func: this._functionSortBy,
              _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }]
            },
            join: {
              _func: this._functionJoin,
              _signature: [
                { types: [TYPE_STRING] },
                { types: [TYPE_ARRAY_STRING] }
              ]
            },
            reverse: {
              _func: this._functionReverse,
              _signature: [{ types: [TYPE_STRING, TYPE_ARRAY] }]
            },
            "to_array": { _func: this._functionToArray, _signature: [{ types: [TYPE_ANY] }] },
            "to_string": { _func: this._functionToString, _signature: [{ types: [TYPE_ANY] }] },
            "to_number": { _func: this._functionToNumber, _signature: [{ types: [TYPE_ANY] }] },
            "not_null": {
              _func: this._functionNotNull,
              _signature: [{ types: [TYPE_ANY], variadic: true }]
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
                var expected = currentSpec.map(function(typeIdentifier) {
                  return TYPE_NAME_TABLE[typeIdentifier];
                }).join(",");
                throw new Error("TypeError: " + name + "() expected argument " + (i + 1) + " to be type " + expected + " but received type " + TYPE_NAME_TABLE[actualType] + " instead.");
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
                  if (!this._typeMatches(
                    this._getTypeName(argValue[i]),
                    subtype,
                    argValue[i]
                  )) {
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
            if (!isObject2(resolvedArgs[0])) {
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
              var current2 = resolvedArgs[i];
              for (var key in current2) {
                merged[key] = current2[key];
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
            var requiredType = this._getTypeName(
              interpreter.visit(exprefNode, sortedArray[0])
            );
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
                throw new Error(
                  "TypeError: expected " + requiredType + ", received " + that._getTypeName(exprA)
                );
              } else if (that._getTypeName(exprB) !== requiredType) {
                throw new Error(
                  "TypeError: expected " + requiredType + ", received " + that._getTypeName(exprB)
                );
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
            var current2;
            for (var i = 0; i < resolvedArray.length; i++) {
              current2 = keyFunction(resolvedArray[i]);
              if (current2 > maxNumber) {
                maxNumber = current2;
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
            var current2;
            for (var i = 0; i < resolvedArray.length; i++) {
              current2 = keyFunction(resolvedArray[i]);
              if (current2 < minNumber) {
                minNumber = current2;
                minRecord = resolvedArray[i];
              }
            }
            return minRecord;
          },
          createKeyFunction: function(exprefNode, allowedTypes) {
            var that = this;
            var interpreter = this._interpreter;
            var keyFunc = function(x) {
              var current2 = interpreter.visit(exprefNode, x);
              if (allowedTypes.indexOf(that._getTypeName(current2)) < 0) {
                var msg = "TypeError: expected one of " + allowedTypes + ", received " + that._getTypeName(current2);
                throw new Error(msg);
              }
              return current2;
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
    }
  });
  var require_timers = __commonJS({
    "src/common/cjs/timers.js"(exports, module) {
      module.exports = {
        seconds,
        makeDebouncer,
        makeThrottler,
        runAfter,
        runOnce,
        runFnPeriodically,
        makeValueChangeDetector,
        makeValueInPredicateDetector,
        runFnWhenValueChanges,
        Delay
      };
      function seconds(n) {
        const ms = n * 1e3;
        return ms;
      }
      function Delay(fn, forMs) {
        const [_fn] = makeDebouncer(forMs, fn);
        return (...args) => _fn(...args);
      }
      function makeDebouncer(ms, fn) {
        let timerId;
        const clear = () => clearTimeout(timerId);
        const debouncedFn = (...args) => {
          clear();
          timerId = setTimeout(fn, ms, ...args);
        };
        return [debouncedFn, clear];
      }
      function makeThrottler(fn, ms) {
        let canRun = true;
        const [throttle, clear] = makeDebouncer(ms, () => canRun = true);
        const throttledFn = (...args) => {
          if (!canRun)
            return;
          canRun = false;
          throttle();
          fn(...args);
        };
        return [throttledFn, clear];
      }
      function runAfter(delayInMs, fn) {
        const [runSoon, cancel] = makeDebouncer(delayInMs, fn);
        runSoon();
        return cancel;
      }
      function runOnce(fn) {
        let run = true;
        let predicateFn = () => true;
        const onceFn = (...args) => {
          if (run && predicateFn()) {
            run = false;
            fn(...args);
          }
        };
        onceFn.when = (fn2) => {
          predicateFn = fn2;
          return onceFn;
        };
        return onceFn;
      }
      function runFnPeriodically(fn, ms = 16) {
        const cleanup = () => clearInterval(timerId);
        const timerId = setInterval(fn, ms, { cleanup });
        return cleanup;
      }
      function makeValueChangeDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        equalityFn = (a, b) => a === b
      }) {
        let currentValue = getValueFn();
        const performCheck = (...checkArgs) => {
          const newValue = getValueFn();
          if (!equalityFn(newValue, currentValue)) {
            const oldValue = currentValue;
            currentValue = newValue;
            onChange(newValue, oldValue, ...checkArgs);
          }
        };
        return performCheck;
      }
      function makeValueInPredicateDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        predicateFn = () => true
      }) {
        const performCheck = makeValueChangeDetector({
          getValueFn,
          onChange: (newValue) => predicateFn(newValue) && onChange()
        });
        return performCheck;
      }
      function runFnWhenValueChanges({ fn, getValueFn }) {
        const performCheck = makeValueChangeDetector({ getValueFn, onChange: fn });
        const checkPeriodInMs = 16;
        const cleanup = runFnPeriodically(performCheck, checkPeriodInMs);
        return cleanup;
      }
    }
  });
  var require_promises = __commonJS({
    "src/common/cjs/promises.js"(exports, module) {
      module.exports = {
        isThennable,
        makePromise,
        delay,
        unzip,
        makeIdleDetectorWithTimeout,
        poolPromises,
        makePromisePool: makePromisePool2,
        runPromisesInSequence
      };
      var { seconds, runOnce, makeDebouncer } = require_timers();
      function makeUnzipReducer() {
        return [
          (acc, [first, second]) => [
            [...acc[0], first],
            [...acc[1], second]
          ],
          [[], []]
        ];
      }
      function unzip(arr) {
        return arr.reduce(...makeUnzipReducer());
      }
      function isThennable(obj) {
        return obj && typeof obj.then === "function";
      }
      function makePromise() {
        let _resolve;
        let _reject;
        const promise = new Promise((resolve, reject) => {
          _resolve = resolve;
          _reject = reject;
        });
        return [promise, _resolve, _reject];
      }
      function delay(ms) {
        const [promise, resolve] = makePromise();
        setTimeout(resolve, ms || 0);
        return promise;
      }
      function makeIdleDetectorWithTimeout(initBouncer = () => {
      }, { withinMs = 500, timeoutInMs = seconds(5) }) {
        const [promise, resolve, reject] = makePromise();
        const [resolveSoon, dontResolve] = makeDebouncer(resolve, withinMs);
        const [rejectLater, dontReject] = makeDebouncer(reject, timeoutInMs);
        const cleanup = initBouncer(resolveSoon);
        resolveSoon();
        rejectLater();
        return promise.finally(() => {
          cleanup && cleanup();
          dontResolve();
          dontReject();
        });
      }
      function poolPromises(limit, ...promiseMakerFns) {
        const checkAll = () => canPromisesRun.forEach((check) => check());
        const context = makePoolCounter(limit, checkAll);
        const [pooledPromises, canPromisesRun] = promiseMakerFns.map((fn) => makePoolAwarePromise(context, fn)).reduce(...makeUnzipReducer());
        checkAll();
        return Promise.allSettled(pooledPromises);
      }
      function makePoolAwarePromise(context, promiseMakerFn) {
        const { allowedToStartNext, bumpRunCount, unbump } = context;
        const [promise, resolve, reject] = makePromise();
        const startPromise = () => {
          bumpRunCount();
          promiseMakerFn().then(resolve, reject).finally(unbump);
        };
        return [promise, runOnce(startPromise).when(allowedToStartNext)];
      }
      function makePoolCounter(limit, onChange) {
        let running = 0;
        return {
          allowedToStartNext: () => running < Math.max(1, limit),
          bumpRunCount: () => onChange(++running),
          unbump: () => onChange(--running)
        };
      }
      function makePromisePool2(limit) {
        let running = 0;
        const pending = /* @__PURE__ */ new Set();
        return (promiseMakerFn) => {
          const [promise, O, X] = makePromise();
          promise.finally(() => (running -= 1, next()));
          pending.add({ promiseMakerFn, O, X });
          next();
          return promise;
        };
        function next() {
          Array.from(pending).every((config) => {
            if (running < limit) {
              running += 1;
              pending.delete(config);
              config.promiseMakerFn().then(config.O, config.X);
              return true;
            }
          });
        }
      }
      function runPromisesInSequence(initialState, ...promiseMakerFns) {
        const [promise, resolve, reject] = makePromise();
        promiseMakerFns.reduce(PromiseSequenceReducer(reject), Promise.resolve(initialState)).then(resolve).catch(reject);
        return promise;
      }
      function PromiseSequenceReducer(reject) {
        return (lastPromise, createNextPromise) => {
          return lastPromise.then(createNextPromise, reject);
        };
      }
    }
  });
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
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");
  function die(error, ...args) {
    if (false) {
      const e = errors[error];
      const msg = typeof e === "function" ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var getPrototypeOf = Object.getPrototypeOf;
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = Object.prototype.constructor.toString();
  function isPlainObject(value) {
    if (!value || typeof value !== "object")
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object)
      return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0) {
      Object.entries(obj).forEach(([key, value]) => {
        iter(key, value, obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2)
      thing.set(propOrOldValue, value);
    else if (t === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  }
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state) {
    return state.copy_ || state.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base))
      return Array.prototype.slice.call(base);
    if (!strict && isPlainObject(base)) {
      if (!getPrototypeOf(base)) {
        const obj = /* @__PURE__ */ Object.create(null);
        return Object.assign(obj, base);
      }
      return { ...base };
    }
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep)
      each(obj, (_key, value) => freeze(value, true), true);
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  var currentScope;
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
  }
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 || state.type_ === 1)
      state.revoke_();
    else
      state.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_)
          maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope.patches_,
          scope.inversePatches_
        );
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      each(
        value,
        (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
        true
        // See #590, don't recurse into non-enumerable of non drafted objects
      );
      return value;
    }
    if (state.scope_ !== rootScope)
      return value;
    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    }
    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = state.copy_;
      let resultEach = result;
      let isSet2 = false;
      if (state.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(
        resultEach,
        (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
      );
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(
          state,
          path,
          rootScope.patches_,
          rootScope.inversePatches_
        );
      }
    }
    return state.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (false)
      die(5);
    if (isDraft(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      const res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else
        return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if (!parentState || !parentState.scope_.parent_)
        maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    const isArray3 = Array.isArray(base);
    const state = {
      type_: isArray3 ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray3) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      const source = latest(state);
      if (!has(source, prop)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        return state.copy_[prop] = createProxy(value, state);
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc?.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState = current2?.[DRAFT_STATE];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_[prop] = false;
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_[prop] = true;
      return true;
    },
    deleteProperty(state, prop) {
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_[prop] = false;
        prepareCopy(state);
        markChanged(state);
      } else {
        delete state.assigned_[prop];
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        writable: true,
        configurable: state.type_ !== 1 || prop !== "length",
        enumerable: desc.enumerable,
        value: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  each(objectTraps, (key, fn) => {
    arrayTraps[key] = function() {
      arguments[0] = arguments[0][0];
      return fn.apply(this, arguments);
    };
  });
  arrayTraps.deleteProperty = function(state, prop) {
    if (false)
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (false)
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged(state.parent_);
      }
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = shallowCopy(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }
  var Immer2 = class {
    constructor(config) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (typeof base === "function" && typeof recipe !== "function") {
          const defaultBase = recipe;
          recipe = base;
          const self2 = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (typeof recipe !== "function")
          die(6);
        if (patchListener !== void 0 && typeof patchListener !== "function")
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope(scope);
            else
              leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || typeof base !== "object") {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING)
            result = void 0;
          if (this.autoFreeze_)
            freeze(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (typeof base === "function") {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (typeof config?.autoFreeze === "boolean")
        this.setAutoFreeze(config.autoFreeze);
      if (typeof config?.useStrictShallowCopy === "boolean")
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_)
        die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin("Patches").applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value))
      die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    let copy;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    });
    if (state) {
      state.finalized_ = false;
    }
    return copy;
  }
  var immer = new Immer2();
  var produce = immer.produce;
  var produceWithPatches = immer.produceWithPatches.bind(
    immer
  );
  var setAutoFreeze = immer.setAutoFreeze.bind(immer);
  var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
  var applyPatches = immer.applyPatches.bind(immer);
  var createDraft = immer.createDraft.bind(immer);
  var finishDraft = immer.finishDraft.bind(immer);
  var import_regexp = __toESM(require_regexp());
  (function() {
    if (typeof window.CustomEvent === "function")
      return false;
    function CustomEvent2(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
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
    const eventMap = /* @__PURE__ */ new Map();
    function emit(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event = new CustomEvent(BUS, { detail });
      global2.dispatchEvent(event);
    }
    function on(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      const cbMap = eventMap.has(eventNameOrPattern) ? eventMap.get(eventNameOrPattern) : eventMap.set(eventNameOrPattern, /* @__PURE__ */ new Map()).get(eventNameOrPattern);
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
        const { eventName = "", args = [] } = event?.detail || {};
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
  function isEventEmitter(obj) {
    return isObject(obj) && isFunction2(obj.emit) && (isFunction2(obj.addListener) || isFunction2(obj.on)) && (isFunction2(obj.removeListener) || isFunction2(obj.off));
  }
  isEventEmitter.displayName = "isEventEmitter";
  function isUnset(obj) {
    return obj === null || obj === void 0;
  }
  isArray2.displayName = "isUnset";
  function isArray2(obj) {
    return Array.isArray(obj);
  }
  isArray2.displayName = "isArray";
  function isArguments(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
  }
  isArguments.displayName = "isArguments";
  function isBoolean(obj) {
    return obj === true || obj === false;
  }
  isBoolean.displayName = "isBoolean";
  function isFunction2(obj) {
    return typeof obj === "function";
  }
  isFunction2.displayName = "isFunction";
  function isString2(obj) {
    return typeof obj === "string";
  }
  isString2.displayName = "isString";
  function isNull(obj) {
    return obj === null;
  }
  isNull.displayName = "isNull";
  function isNumber2(obj) {
    return typeof obj === "number";
  }
  isNumber2.displayName = "isNumber";
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  isObject.displayName = "isObject";
  function isPojo2(obj) {
    if (obj === null || !isObject(obj) || isArguments(obj)) {
      return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  isPojo2.displayName = "isPojo";
  function isTemplateLiteral(obj) {
    if (isString2(obj)) {
      return true;
    }
    if (!isArray2(obj)) {
      return false;
    }
    return obj.every(isString2);
  }
  isTemplateLiteral.displayName = "isTemplateLiteral";
  var typeErrorStringIfFnReturnsFalse = (argName, argTypeFn, arg) => {
    return argTypeFn(arg) ? void 0 : (argTypeFn.displayName || argTypeFn.name) + `(${argName}) did not return true`;
  };
  var typeErrorStringIfTypeOfFails = (argName, argType, arg) => {
    return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
  };
  var typeErrorStringFromArgument = (argMap) => (arg, index) => {
    if (index >= argMap.length) {
      return;
    }
    const { argName, argType } = argMap[index];
    if (arg === void 0) {
      return `Argument undefined: "${argName}"`;
    }
    const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
    const errorDescs = permittedArgTypes.map(
      (argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)
    ).filter(isString2);
    const multipleTypesSpecified = permittedArgTypes.length > 1;
    const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
    if (shouldError) {
      return errorDescs.join("\n| ") + `
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
    }
  };
  function ArgTypeError(namespace) {
    return (typeMap) => {
      const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
        argName,
        argType
      }));
      return (fnName) => (...args) => {
        const processedArgs = Array.from(
          args,
          (x) => isArguments(x) ? Array.from(x) : x
        ).flat(1);
        const err = processedArgs.map(typeErrorStringFromArgument(argMap)).filter(isString2);
        if (!err.length) {
          return;
        }
        const signature = Object.keys(typeMap).join(", ");
        return `
${namespace || ""}${fnName}(${signature}):
${err.map((err2) => `| ${err2}`).join("\n")}`;
      };
    };
  }
  function ObjTypeError(namespace) {
    return (typeMap) => {
      const keys = Object.keys(typeMap);
      const objTypeError = ArgTypeError(namespace)(typeMap);
      return (fnName) => (obj) => {
        const values = valuesOf(obj, { keys });
        const err = objTypeError(fnName)(...values);
        return err;
      };
    };
  }
  function valuesOf(obj, options) {
    const { keys } = options;
    if (!Array.isArray(keys)) {
      return Object.values(obj);
    }
    return keys.reduce((acc, key) => {
      return [...acc, obj[key]];
    }, []);
  }
  var HISTORY_LIMIT = 10;
  var storeHistory = [
    {
      accounts: [],
      statements: [],
      entries: []
    }
  ];
  function hydrate(payload) {
    pushStore(payload);
    messages.emit(actions.STORE_HYDRATED);
  }
  function store2() {
    return storeHistory[storeHistory.length - 1];
  }
  store2.history = storeHistory;
  store2.hydrate = hydrate;
  function pushStore(nextStore) {
    storeHistory.push(nextStore);
    if (storeHistory.length > HISTORY_LIMIT) {
      storeHistory.shift();
    }
    messages.emit(actions.STORE_UPDATED);
  }
  var checkSchema = ObjTypeError("store#");
  var LEAVE_UNCHANGED = null;
  var checkSchemaForAddingAnAccount = checkSchema({
    id: isString2,
    accountNumber: isString2,
    sortCode: isString2,
    name: [isString2, isUnset],
    type: [isString2, isUnset],
    iban: [isString2, isUnset],
    bic: [isString2, isUnset],
    ledgerBalance: [isNumber2, isUnset],
    lastUpdatedTimestamp: [isNumber2, isUnset]
  })(actions.add.ACCOUNTS);
  var checkSchemaForUpdatingAnAccount = checkSchema({
    id: isString2,
    accountNumber: [isString2, isUnset],
    sortCode: [isString2, isUnset],
    name: [isString2, isUnset],
    type: [isString2, isUnset],
    iban: [isString2, isUnset],
    bic: [isString2, isUnset]
  })(actions.update.ACCOUNTS);
  messages.on(actions.add.ACCOUNTS, (accounts) => {
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForAddingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x) => x.id === account.id);
        if (existingAccount) {
          console.log("Account exists", existingAccount);
          return;
        }
        draftState.accounts.push({ ...account });
      });
    });
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  messages.on(actions.update.ACCOUNTS, (accounts) => {
    const unseenAccounts = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForUpdatingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x) => x.id === account.id);
        if (!existingAccount) {
          unseenAccounts.push(account);
          return;
        }
        Object.entries(account).forEach(([key, value]) => {
          if (isUnset(value)) {
            return;
          }
          existingAccount[key] = value;
        });
      });
    });
    if (unseenAccounts.length) {
      console.log("Not updating unseen accounts: ", unseenAccounts);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  var checkSchemaForAddingAStatement = checkSchema({
    id: isString2,
    accountId: isString2,
    endDate: isNumber2,
    startDate: [isNumber2, isUnset],
    startBalance: [isNumber2, isUnset],
    endBalance: [isNumber2, isUnset]
  })(actions.add.STATEMENTS);
  var checkSchemaForUpdatingAStatement = checkSchema({
    id: isString2,
    accountId: [isString2, isUnset],
    endDate: isNumber2,
    startDate: isNumber2,
    startBalance: isNumber2,
    endBalance: isNumber2
  })(actions.update.STATEMENTS);
  messages.on(actions.add.STATEMENTS, (statements) => {
    const existingStatements = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForAddingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find(
          (x) => x.id === statement.id
        );
        if (existingStatement) {
          existingStatements.push({ newStatement: statement, existingStatement });
          return;
        }
        draftState.statements.push({ ...statement });
      });
    });
    if (existingStatements.length) {
      console.log("Not overwriting existing statements: ", existingStatements);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  messages.on(actions.update.STATEMENTS, (statements) => {
    const unseenStatements = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForUpdatingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find(
          (x) => x.id === statement.id
        );
        if (!existingStatement) {
          unseenStatements.push(statement);
          return;
        }
        Object.entries(statement).forEach(([key, value]) => {
          if (isUnset(value)) {
            return;
          }
          existingStatement[key] = value;
        });
      });
    });
    if (unseenStatements.length) {
      console.log("Not updating unseen statements: ", unseenStatements);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  var checkSchemaForAddingAnEntry = checkSchema({
    id: isString2,
    accountId: isString2,
    statementId: isString2,
    date: isNumber2,
    type: isString2,
    payee: isString2,
    note: isString2,
    debit: isNumber2,
    credit: isNumber2,
    balance: isNumber2
  })(actions.add.ENTRIES);
  messages.on(actions.add.ENTRIES, (entries) => {
    const existingEntries = [];
    const currentStore = store2();
    const nextStore = produce(currentStore, (draftState) => {
      entries.forEach((entry) => {
        const err = checkSchemaForAddingAnEntry(entry);
        if (err) {
          throw TypeError(err);
        }
        const existingEntry = draftState.entries.find((x) => x.id === entry.id);
        if (existingEntry) {
          existingEntries.push({ newEntry: entry, existingEntry });
          return;
        }
        draftState.entries.push({ ...entry });
      });
    });
    if (existingEntries.length) {
      console.log("Not overwriting existing entries: ", existingEntries);
    }
    if (nextStore !== currentStore) {
      pushStore(nextStore);
    }
  });
  function dateTimeString(timestampOrDate, delim = "") {
    const date = new Date(timestampOrDate);
    return [
      date.getFullYear(),
      zeroPad(date.getMonth() + 1),
      zeroPad(date.getDate()),
      zeroPad(date.getHours()),
      zeroPad(date.getMinutes()),
      zeroPad(date.getSeconds())
    ].join(delim);
  }
  function zeroPad(num) {
    if (num < 10) {
      return "0" + num;
    }
    return "" + num;
  }
  function convertCentsToDecimal(cents) {
    if (!cents || "number" !== typeof cents) {
      return "-";
    }
    const decimal = cents / 100;
    return decimal.toLocaleString("en-GB", {
      useGrouping: false,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  var { SparkMD5 } = obis.deps;
  function md5(str) {
    return SparkMD5.hash(str);
  }
  function generateIdForTransaction(fullEntry) {
    const {
      date,
      debit,
      credit,
      index,
      accountNumber,
      sortCode,
      type,
      payee,
      note
    } = fullEntry;
    const dateTime = dateTimeString(date) || "UNKNOWN_DATE";
    const transactionAmount = convertCentsToDecimal(-debit + credit);
    return dateTime + "_" + md5(
      dateTime + (void 0 !== index ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount
    );
  }
  var import_jmespath = __toESM(require_jmespath());
  var Nothing = () => ({
    valueOf: () => void 0,
    toString: () => "Nothing",
    map: () => Nothing(),
    chain: () => Nothing(),
    fork: (f) => f(),
    orElse: (f) => f(),
    ap: () => Nothing(),
    isNothing: true,
    isJust: false
  });
  Nothing.of = () => Nothing();
  var Just = (x) => ({
    valueOf: () => x,
    toString: () => `Just(${x})`,
    map: (f) => Just(f(x)),
    chain: (f) => f(x),
    fork: (_, g) => g(x),
    orElse: () => Just(x),
    ap: (m) => m.map(x),
    isNothing: false,
    isJust: true
  });
  Just.of = (x) => Just(x);
  var safe = (predicate = (x) => x != null) => {
    const Maybe2 = (x) => {
      return predicate(x) ? Just(x) : Nothing();
    };
    Maybe2.of = (x) => Maybe2(x);
    return Maybe2;
  };
  var maybeTry = (f) => (x) => {
    try {
      return Just(f(x));
    } catch (e) {
      return Nothing();
    }
  };
  var Maybe = safe();
  var siteConfigFromHtmlBody = () => Maybe.of(document.getElementById("siteConfig")).chain(maybeTry((el) => JSON.parse(el.attributes?.value?.value))).orElse(() => Just({})).valueOf();
  var buildHeadersFromSiteConfig = (cfg = siteConfigFromHtmlBody()) => ({
    "x-hsbc-channel-id": cfg.channelId,
    "x-hsbc-client-id": cfg.clientId,
    "x-hsbc-source-system-id": cfg.sourceSystemId,
    "x-hsbc-chnl-countrycode": cfg.countryCode,
    "x-hsbc-chnl-group-member": cfg.groupMemberId,
    "x-hsbc-locale": cfg.locale,
    "x-hsbc-gbgf": cfg.globalBusinessGlobalFunction,
    "x-hsbc-global-channel-id": cfg.globalChannelId
  });
  function map(pred) {
    return (arr) => {
      if (Array.isArray(arr)) {
        return arr.map(pred);
      }
      console.warn("Not an array, passing-through", { arr, pred });
      return arr;
    };
  }
  function onlyFulfilled(promiseResults) {
    return promiseResults.filter((result) => result.status === "fulfilled").map((result) => result.value);
  }
  var liveHost = "https://www.hsbc.co.uk";
  function makeAccountsUrl({ host = liveHost }) {
    return [
      host,
      `/api`,
      `/dcc-gb-hrfb-account-list-papi-prod-proxy/v1/accounts/domestic`
    ].join("");
  }
  function makeStatementsUrl({ host = liveHost, accountId }) {
    return [
      host,
      `/api`,
      `/mmf-files-statements--gb-hrfb-prod-proxy/v2/customer-accounts/${accountId}`,
      `/statements?statementType=REGULAR`
    ].join("");
  }
  function makeTransactionsUrl({
    host = liveHost,
    accountId,
    productCategoryCode,
    transactionStartDate = "yyyy-MM-dd",
    transactionEndDate = "yyyy-MM-dd"
  }) {
    return [
      host,
      `/api`,
      `/dcc-gb-hrfb-account-transactions-papi-prod-proxy/v1/accounts/${productCategoryCode}-${accountId}`,
      `/historical-transactions?`,
      `transactionStartDate=${transactionStartDate}&`,
      `transactionEndDate=${transactionEndDate}&`,
      `sortCode=D&`,
      `txnSearch=true`
    ].join("");
  }
  var fetchAccounts = ({ host = "" } = {}) => fetch(makeAccountsUrl({ host }), {
    method: "GET",
    headers: {
      ...buildHeadersFromSiteConfig(),
      "content-type": "application/json",
      accept: "application/json, text/plain, */*",
      adrum: "isAjax:true",
      token_type: "SESSION_TOKEN",
      iscacheable: "false"
    }
  }).then((res) => res.json()).then((json) => {
    if (!Array.isArray(json.accountList)) {
      console.warn("No accounts-list found in JSON", { json });
      return [];
    }
    const entriesPath = `
        accountList[].{
          id:                         accountIdentifier.accountNumber,
          accountHolderName:          accountHolderName,
          sortCodeAndAccountNumber:   accountDisplay,
          ledgerBalance:              ledgerBalance.amount,
          lastUpdatedDate:            lastUpdatedDate,

          productCode:           accountIdentifier.productCode,
          productCategoryCode:   accountIdentifier.productCategoryCode
        }
      `;
    const entries = import_jmespath.default.search(json, entriesPath);
    return entries;
  });
  var import_jmespath2 = __toESM(require_jmespath());
  var fetchStatementsList = ({ host = "", accountId } = {}) => fetch(makeStatementsUrl({ host, accountId }), {
    method: "GET",
    headers: {
      ...buildHeadersFromSiteConfig(),
      "content-type": "application/json",
      accept: "application/json, text/plain, */*",
      adrum: "isAjax:true",
      token_type: "SESSION_TOKEN",
      iscacheable: "false"
    }
  }).then((res) => res.json()).then((json) => {
    if (!Array.isArray(json.statements)) {
      console.warn("No statements found in JSON", { accountId, json });
      return [];
    }
    const entriesPath = `
        statements[].{
          "id":               statementIdentifier,
          "accountNumber":    accountNumber,
          "endDate":          statementDate
        }
      `;
    const entries = import_jmespath2.default.search(json, entriesPath);
    return entries;
  });
  var import_jmespath3 = __toESM(require_jmespath());
  var fetchTransactions = ({
    host = "",
    accountId,
    productCategoryCode,
    transactionStartDate,
    transactionEndDate
  } = {}) => fetch(
    makeTransactionsUrl({
      host,
      accountId,
      productCategoryCode,
      transactionStartDate,
      transactionEndDate
    }),
    {
      method: "GET",
      headers: {
        ...buildHeadersFromSiteConfig(),
        "content-type": "application/json",
        accept: "application/json, text/plain, */*",
        adrum: "isAjax:true",
        token_type: "SESSION_TOKEN",
        iscacheable: "false"
      }
    }
  ).then((res) => res.json()).then((json) => {
    if (!Array.isArray(json.transactionSummary)) {
      console.warn("No transactions found in JSON", { accountId, json });
      return [];
    }
    const entriesPath = `
        transactionSummary[].{
          "date":        transactionDate,
          "payee":       transactionDescriptions[0],
          "note":        transactionDescriptions[1:-1:] | join(' ', @),
          "amount":      transactionAmount.amount,
          "balance":     runningBalanceAmount.amount
        }
      `;
    const entries = import_jmespath3.default.search(json, entriesPath).map((entry) => {
      const { date, amount, balance, ...restEntry } = entry;
      return {
        date: new Date(date).getTime(),
        type: amount > 0 ? "DEP" : "WITHD",
        ...restEntry,
        ...creditAndDebitFromAmount(amount),
        balance: Math.round(balance * 100)
      };
    });
    return entries;
  });
  function creditAndDebitFromAmount(amount) {
    const [debit, credit] = (amount < 0 ? [amount, 0] : [0, amount]).map((x) => x * 100).map(Math.abs).map(Math.round);
    return { debit, credit };
  }
  var import_promises = __toESM(require_promises());
  function getHost() {
    return "";
  }
  var pool = (0, import_promises.makePromisePool)(3);
  obis.makePluginAvailable("hsbc-uk", () => {
    const fetcher = obis.fetchMachine;
    const { messages: messages2 } = obis.deps;
    const { emit } = messages2;
    const updateProgressBar = (max) => (value) => emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value });
    fetcher.performTransitions({
      //
      // Accounts
      //
      "idle -> getting-accounts": {
        on: actions.get.ACCOUNTS,
        then: (requestedYearsToDownload) => fetchAccounts().then((accountsResponse) => {
          const accountsUpdate = accountsResponse.map((accountResponse) => {
            const { sortCodeAndAccountNumber } = accountResponse;
            if (!sortCodeAndAccountNumber) {
              console.warn(
                "No sortCodeAndAccountNumber in accountResponse",
                { accountResponse }
              );
              return;
            }
            const [sortCode = "", accountNumber = ""] = (sortCodeAndAccountNumber || "").split(" ");
            if (!sortCode || !accountNumber) {
              console.warn("Could not parse sortCodeAndAccountNumber", {
                sortCodeAndAccountNumber,
                accountResponse
              });
              return;
            }
            return {
              id: accountResponse.id,
              accountNumber,
              sortCode,
              name: accountResponse.accountHolderName,
              type: accountResponse.productCode,
              ledgerBalance: Math.round(
                accountResponse.ledgerBalance * 100
              ),
              lastUpdatedTimestamp: new Date(
                accountResponse.lastUpdatedDate
              ).getTime(),
              iban: LEAVE_UNCHANGED,
              bic: LEAVE_UNCHANGED
            };
          }).filter(Boolean);
          emit(actions.add.ACCOUNTS, accountsUpdate);
          emit(actions.got.ACCOUNTS, {
            accountsResponse,
            yearsToDownload: requestedYearsToDownload
          });
        }).catch(fetcher.Emit(actions.error.ACCOUNTS))
      },
      "getting-accounts -> found-accounts": {
        on: actions.got.ACCOUNTS,
        then: ({ accountsResponse, yearsToDownload }) => {
          const statementsQueries = accountsResponse.map((accountResponse) => ({
            host: getHost(),
            accountId: accountResponse.id,
            productCategoryCode: accountResponse.productCategoryCode
          }));
          emit(actions.get.STATEMENTS, { statementsQueries, yearsToDownload });
        }
      },
      "getting-accounts -> failed-accounts": {
        on: actions.error.ACCOUNTS,
        then: fetcher.Enter("idle")
      },
      //
      // Statements list
      //
      "found-accounts -> getting-statements": {
        on: actions.get.STATEMENTS,
        then: ({ statementsQueries, yearsToDownload }) => {
          const progress = updateProgressBar(statementsQueries.length);
          progress(0);
          const fetchStatementsJobs = statementsQueries.map(
            (statementsQuery, idx) => {
              const { accountId, productCategoryCode } = statementsQuery;
              return pool(() => {
                progress(idx + 1);
                return fetchStatementsList(statementsQuery).then(
                  map((statementsResponse) => {
                    const { endDate, accountNumber: mashed } = statementsResponse;
                    const [, sortCode1, sortCode2, sortCode3, accountNumber] = mashed.match(/^(\d{2})(\d{2})(\d{2})(\d{8})$/);
                    const sortCode = `${sortCode1}-${sortCode2}-${sortCode3}`;
                    return {
                      //
                      // We're only actually interested in the endDate, not
                      // the statement-ids. Requesting transactions requires
                      // only the account-id + a date range.
                      //
                      id: statementsResponse.id,
                      accountId,
                      sortCode,
                      accountNumber,
                      productCategoryCode,
                      endDate
                    };
                  })
                );
              });
            }
          );
          Promise.allSettled(fetchStatementsJobs).then(onlyFulfilled).then((allAcctStatements) => {
            const allStatements = allAcctStatements.flat();
            if (allStatements.length === 0) {
              fetcher.emit(actions.error.STATEMENTS);
              return;
            }
            const statementsUpdate = allStatements.map(
              ({ id, accountId, endDate: endDateString }) => {
                const endDate = new Date(endDateString);
                const startDate = new Date(endDate);
                startDate.setMonth(startDate.getMonth() - 1);
                return {
                  id,
                  accountId,
                  endDate: endDate.getTime(),
                  startDate: startDate.getTime(),
                  startBalance: LEAVE_UNCHANGED,
                  endBalance: LEAVE_UNCHANGED
                };
              }
            );
            emit(actions.add.STATEMENTS, statementsUpdate);
            emit(actions.got.STATEMENTS, { allStatements, yearsToDownload });
          });
        }
      },
      "getting-statements -> found-statements": {
        on: actions.got.STATEMENTS,
        then: ({ allStatements, yearsToDownload }) => {
          const accountsTransactionsQueries = allStatements.map(
            ({ id, accountId, endDate: endDateString, productCategoryCode }) => {
              const endDate = new Date(endDateString);
              const startDate = new Date(endDate);
              startDate.setMonth(startDate.getMonth() - 1);
              return {
                host: getHost(),
                id,
                accountId,
                productCategoryCode,
                transactionStartDate: startDate.toISOString().split("T")[0],
                transactionEndDate: endDate.toISOString().split("T")[0]
              };
            }
          );
          emit(actions.get.ENTRIES, {
            accountsTransactionsQueries,
            yearsToDownload
          });
        }
      },
      "getting-statements -> failed-statements": {
        on: actions.error.STATEMENTS,
        then: fetcher.Enter("idle")
      },
      //
      // Transactions
      //
      "found-statements -> getting-entries": {
        on: actions.get.ENTRIES,
        then: ({ accountsTransactionsQueries, yearsToDownload }) => {
          const progress = updateProgressBar(accountsTransactionsQueries.length);
          progress(0);
          const fetchAccountsTransactionsJobs = accountsTransactionsQueries.map(
            (query, idx) => {
              const { id, accountId } = query;
              return pool(() => {
                progress(idx + 1);
                return fetchTransactions(query).then(
                  map((transaction) => ({
                    accountId,
                    statementId: id,
                    ...transaction
                  }))
                );
              });
            }
          );
          Promise.allSettled(fetchAccountsTransactionsJobs).then(onlyFulfilled).then((allTransactionsInAccount) => {
            const allTransactions = allTransactionsInAccount.flat();
            if (allTransactions.length === 0) {
              fetcher.emit(actions.error.ENTRIES);
              return;
            }
            allTransactions.map((transaction) => {
              const { date, debit, credit, type, payee, note } = transaction;
              const { accountNumber, sortCode } = store().accounts.find(
                (acct) => acct.id === transaction.accountId
              );
              return Object.assign(transaction, {
                id: generateIdForTransaction({
                  date,
                  debit,
                  credit,
                  accountNumber,
                  sortCode,
                  type,
                  payee,
                  note
                })
              });
            });
            emit(actions.add.ENTRIES, allTransactions);
            emit(actions.got.ENTRIES);
          });
        }
      },
      "getting-entries -> found-entries": {
        on: actions.got.ENTRIES,
        then: () => {
        }
      },
      "getting-entries -> failed-entries": {
        on: actions.error.ENTRIES,
        then: fetcher.Enter("idle")
      },
      //
      // Downloading
      //
      "found-entries -> download-all": {
        on: actions.ui.DOWNLOAD_STATEMENTS,
        then: () => {
        }
      },
      "download-all -> found-entries": {
        on: actions.ui.DOWNLOADED_STATEMENTS,
        then: () => {
        }
      }
    });
    fetcher.onTransitions({
      //
      // Flag a problem
      //
      [`
        failed-accounts |
      failed-statements |
         failed-entries -> idle

    `]: () => {
        console.warn("Problem fetching data. Please try again.");
      }
    });
    fetcher.info();
  });
})();
