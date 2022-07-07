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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
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
              var error = new Error("Unexpected token type: " + t.type + ", value: " + t.value);
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
                  if (!this._typeMatches(this._getTypeName(argValue[i2]), subtype, argValue[i2])) {
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
            var requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]));
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
        if (typeof define == "function" && define.amd)
          define([], b);
        else if (typeof exports != "undefined")
          b();
        else {
          b(), a.FileSaver = { exports: {} }.exports;
        }
      })(exports, function() {
        "use strict";
        function b(a2, b2) {
          return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
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
          var i2 = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i2.createObjectURL(b2), setTimeout(function() {
            i2.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", typeof f2 != "string")
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
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
            return c(b2, d2, e2);
          var h = b2.type === "application/octet-stream", i2 = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i2 || a) && typeof FileReader != "undefined") {
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
    }
  });
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.8.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var x2 = Object.defineProperty;
      var T = Object.getOwnPropertyDescriptor;
      var U = Object.getOwnPropertyNames;
      var O = Object.getOwnPropertySymbols;
      var W = Object.prototype.hasOwnProperty;
      var d = Object.prototype.propertyIsEnumerable;
      var F = (t, n, o) => n in t ? x2(t, n, { enumerable: true, configurable: true, writable: true, value: o }) : t[n] = o;
      var R = (t, n) => {
        for (var o in n || (n = {}))
          W.call(n, o) && F(t, o, n[o]);
        if (O)
          for (var o of O(n))
            d.call(n, o) && F(t, o, n[o]);
        return t;
      };
      var v = (t, n) => {
        var o = {};
        for (var s in t)
          W.call(t, s) && n.indexOf(s) < 0 && (o[s] = t[s]);
        if (t != null && O)
          for (var s of O(t))
            n.indexOf(s) < 0 && d.call(t, s) && (o[s] = t[s]);
        return o;
      };
      var I = (t, n) => {
        for (var o in n)
          x2(t, o, { get: n[o], enumerable: true });
      };
      var X = (t, n, o, s) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let e of U(n))
            !W.call(t, e) && e !== o && x2(t, e, { get: () => n[e], enumerable: !(s = T(n, e)) || s.enumerable });
        return t;
      };
      var Y2 = (t) => X(x2({}, "__esModule", { value: true }), t);
      var Ct = {};
      I(Ct, { against: () => G, allOf: () => K, anyOf: () => J, cata: () => Rt, deepEq: () => ft, defined: () => Nt, empty: () => L, endsWith: () => qt, eq: () => H, every: () => lt, falsy: () => It, firstOf: () => Ot, gt: () => wt, gte: () => Wt, hasOwn: () => dt, inRange: () => bt, includedIn: () => Et, includes: () => Dt, instanceOf: () => nt, isArray: () => i2, isDate: () => tt, isFunction: () => c, isNumber: () => C, isPojo: () => g, isRegExp: () => A, isStrictly: () => Ft, isString: () => f, lastOf: () => xt, lt: () => St, lte: () => Pt, match: () => et2, not: () => mt2, otherwise: () => rt, pluck: () => gt, some: () => pt, spread: () => Bt, startsWith: () => At, truthy: () => vt, when: () => it });
      module.exports = Y2(Ct);
      var w = {};
      I(w, { instanceOf: () => P, isArguments: () => z, isArray: () => _, isDate: () => $, isFunction: () => j, isNumber: () => y, isObject: () => B, isPojo: () => a, isRegExp: () => k, isString: () => h });
      var V = Object.prototype;
      var Z = V.toString;
      var N = (t) => (n) => typeof n === t;
      var P = (t) => (n) => n instanceof t;
      var { isArray: _ } = Array;
      var z = (t) => Z.call(t) === "[object Arguments]";
      var $ = (t) => P(Date)(t) && !isNaN(t);
      var j = N("function");
      var h = N("string");
      var y = (t) => t === t && N("number")(t);
      var B = (t) => t !== null && N("object")(t);
      var k = P(RegExp);
      var a = (t) => t === null || !B(t) || z(t) ? false : Object.getPrototypeOf(t) === V;
      var { isArray: i2, isDate: tt, isFunction: c, isNumber: C } = w;
      var { isPojo: g, isRegExp: A, isString: f, instanceOf: nt } = w;
      var { keys: u, entries: ot, assign: st } = Object;
      function et2(t) {
        return (...n) => G(...n)(t);
      }
      var G = (...t) => {
        let n;
        return (o) => t.find((s) => {
          let e = s(o), { matched: l, value: p } = e || {};
          return [l, p].every(c) ? l(o) && (n = p(o), true) : e && (n = e);
        }) && n;
      };
      var rt = (t) => (n) => ({ matched: () => true, value: () => c(t) ? t(n) : t });
      var b = (t) => (n) => (o) => ({ matched: () => r(t, o, (s) => o = s), value: () => c(n) ? f(o) && A(t) ? n(...ct(o.match(t))) : n(o) : n });
      var it = (...t) => {
        if (t.length === 1) {
          let [n] = t;
          return b(n);
        }
        if (t.length === 2) {
          let [n, o] = t;
          return b(n)(o);
        }
        if (t.length > 2) {
          let n = t.slice(-1)[0], o = t.slice(0, -1);
          return b(K(o))(n);
        }
        throw new Error("expected 1 or 2 arguments");
      };
      var ct = (t) => {
        let { groups: n } = t;
        return n ? [n, t] : [t];
      };
      var r = (t, n, o) => g(t) ? u(t).every((s) => r(t[s], n == null ? void 0 : n[s], o)) : i2(t) ? i2(n) && t.length === n.length && t.every((s, e) => r(s, n == null ? void 0 : n[e], o)) : c(t) ? t(n, o) : f(n) && A(t) ? t.test(n) : t === n || [t, n].every(Number.isNaN);
      var gt = (...t) => (n, o) => t.length === 0 || (c(t[0]) ? t[0](n) : r(t[0], n, o)) ? (o(n), true) : false;
      var ut = (t, n) => [t, n].every(g) ? u(t).length === u(n).length : true;
      var H = (t) => (n, o) => ut(t, n) && r(t, n, o);
      var ft = (t) => q(t, (n) => g(n) ? H(n) : n);
      var mt2 = (t) => (n, o) => !r(t, n, o);
      var J = (...t) => (n, o) => t.flat().some((s) => r(s, n, o));
      var K = (...t) => (n, o) => t.flat().every((s) => r(s, n, o));
      var lt = (t) => Q((n) => n.every((o) => r(t, o)));
      var pt = (t) => Q((n) => n.some((o) => r(t, o)));
      var Ot = (...t) => D((n, o) => t.length <= n.length && r(t, n.slice(0, t.length), o));
      var xt = (...t) => D((n, o) => t.length <= n.length && r(t, n.slice(n.length - t.length), o));
      var L = (t) => t !== t || !t && t !== 0 && t !== false || i2(t) && !t.length || g(t) && !u(t).length;
      var Nt = (t) => !L(t);
      var wt = (t) => m((n) => n > t);
      var St = (t) => m((n) => n < t);
      var Wt = (t) => m((n) => n >= t);
      var Pt = (t) => m((n) => n <= t);
      var bt = (t, n) => m((o) => o >= Math.min(t, n) && o <= Math.max(t, n));
      var At = (t) => M((n) => n.startsWith(t));
      var qt = (t) => M((n) => n.endsWith(t));
      var Dt = (t) => D((n) => n.includes(t));
      var Et = J;
      var Ft = (t) => (n) => n === t;
      var dt = (...t) => (n) => g(n) && (([o, s]) => o.length && o.every((e) => s.includes(e)))([t.flat(), u(n)]);
      var Rt = (o) => {
        var s = o, { getValue: t } = s, n = v(s, ["getValue"]);
        return ot(n).reduce((e, [l, p]) => st(e, { [l]: (S) => (E) => ({ matched: () => p(E), value: () => c(S) ? S(t(E)) : S }) }), {});
      };
      var vt = (t) => !!t;
      var It = (t) => !t;
      var Vt = (t) => (n, o) => (n[o] = q(n[o], t), n);
      var zt = (t) => (n) => q(n, t);
      var q = (t, n) => n(g(t) ? u(t).reduce(Vt(n), R({}, t)) : i2(t) ? t.map(zt(n)) : t);
      var Bt = (t) => new Proxy({}, { get: () => t });
      var M = (t) => (n) => f(n) && t(n);
      var m = (t) => (n) => C(n) && t(n);
      var Q = (t) => (n, o) => i2(n) && t(n, o);
      var D = (t) => (n, o) => (i2(n) || f(n)) && t(n, o);
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
        return pipe(str.replace(rxConsecutiveWildcards(), "*").split("*").map((x2) => x2.trim()).map(escapeStringForRegExp), against2(when2(hasNoWildcards)(templateMatchExact), when2(hasNoWildcardAtStart)(flow(insertWildcards, templateMatchStart)), when2(hasNoWildcardAtEnd)(flow(insertWildcards, templateMatchEnd)), otherwise2(insertWildcards)), ($) => new RegExp($));
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
  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
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
    d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
      err(10);
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
  function mitt(n) {
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
    const errorDescs = permittedArgTypes.map((argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)).filter(isString2);
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
    return input.reduce((acc, one) => acc.indexOf(one) === -1 ? (acc.push(one), acc) : acc, []);
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
      dictionary[word] = (dictionary[word] || []).filter((next) => next !== definition);
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
    const err2 = argTypeError({ chart: isTemplateLiteral })("decomposeChart")(chart);
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
    return fromStates.reduce((acc, fromState) => (acc.push(...toStates.map((toState) => [fromState, toState])), acc), []);
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
    const events = isUndefined(options.events) ? wrapEmitter(mitt()) : isEventEmitter(options.events) && wrapEmitter(options.events);
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
    const { pause, resume, paused, Pausable } = Pausables(false, () => _console.warn(`${logPrefix}: Ignoring callback, paused`));
    const transitionsFromEvents = Definitions();
    const internalEvents = wrapEmitter(mitt());
    const emitInternalEvent = Pausable(internalEvents.emit);
    function onInternalEvent(eventName, cb) {
      internalEvents.on(eventName, cb);
      return () => internalEvents.off(eventName, cb);
    }
    const statesHandled = ReferenceCounter(logPrefix, "states", "Listening for the following state-changes", [...states]);
    const routesHandled = ReferenceCounter(logPrefix, "transitions", "Listening for the following transitions", [...routes]);
    const eventsHandled = ReferenceCounter(logPrefix, "events", "Listening for the following events");
    function applyHitcher(hitcher, fnName) {
      const hitcherActions = isFunction2(hitcher) ? hitcher({ enter, emit, Enter, Emit }) : isPojo2(hitcher) ? hitcher : null;
      if (!isPojo2(hitcherActions)) {
        throw new TypeError(`${logPrefix}#${fnName}(): Expected an object, or a function that returns an object`);
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
          _console.warn(`${logPrefix}#${fnName}(): Invalid states specified:
` + invalidStates.map((state) => `  > "${state}"`).join("\n"));
        }
        if (invalidRoutes.length) {
          _console.warn(`${logPrefix}#${fnName}(): Invalid transitions specified:
` + invalidRoutes.map((route) => `  > "${route}"`).join("\n"));
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
        ].concat(configs.map(({ fromState, toState }) => transitionsFromEvents.define(`${eventName}:${fromState}`, toState)));
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
      const err2 = argTypeError2({ states: isAllStrings })("canTransitionTo")([states2]);
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
        const err2 = argTypeError2({ thisState: isString2, "{ afterEmitting }": isString2 })("canTransitionTo")(thisState, afterEmitting);
        if (err2) {
          throw new TypeError(err2);
        }
        return thisState !== currentState() && _peek(afterEmitting) === thisState;
      }
      return _state_canTransitionTo(...testStates);
    }
    function statesAvailableFromHere(state) {
      const _state = !isUndefined(state) ? state : currentState();
      const err2 = argTypeError2({ state: isString2 })("statesAvailableFromHere")(_state);
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
      const err2 = argTypeError2({ state: [isString2, isPojo2] })("inState")(args[0]);
      if (err2) {
        throw new TypeError(err2);
      }
      return isPojo2(args[0]) ? _inStateObject(...args) : _inState(...args);
    }
    const emit = (eventName, ...args) => {
      const err2 = argTypeError2({ eventName: isString2 })("emit")(eventName);
      if (err2) {
        throw new TypeError(err2);
      }
      _peek(eventName);
      return events.emit(eventName, ...args);
    };
    const enter = (state, ...args) => {
      const err2 = argTypeError2({ state: isString2 })("enter")(state);
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
      const err2 = argTypeError2({ eventName: isString2, cb: isFunction2 })("onEvent")(eventName, cb);
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
          const err2 = argTypeError2({ state: isString2, cb: isFunction2 })(methodName)(state, cb);
          if (err2) {
            throw new TypeError(err2);
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
        ...transitions.map(([fromState, toState]) => ({ fromState, toState, action }))
      ];
    }, []);
    return {
      configs: _configs,
      states: allStates,
      routes: allRoutes
    };
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
  var import_regexp2 = __toESM(require_regexp());
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
    (getting-statements -> failed-statements -> idle)
    (getting-entries -> failed-entries -> idle)

`;
  var obisDefault = { rootPath: "." };
  var obis2 = window.obis || (window.obis = obisDefault);
  obis2.pluginRegistry = /* @__PURE__ */ new Map();
  var getPluginMeta = (name) => obis2.pluginRegistry.has(name) ? obis2.pluginRegistry.get(name) : obis2.pluginRegistry.set(name, {}).get(name);
  addObisDependencies(obis2);
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
  function addObisDependencies(obis22) {
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
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
          for (var i3 = 1; i3 < input.length; i3++) {
            if ((input[i3] != null && input[i3].key != null) !== isKeyed) {
              throw new TypeError(isKeyed && (input[i3] != null || typeof input[i3] === "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys.");
            }
          }
          for (var i3 = 0; i3 < input.length; i3++) {
            children[i3] = Vnode.normalize(input[i3]);
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
                  for (var i3 = 0; i3 < list.length; i3++)
                    list[i3](value);
                  resolvers.length = 0, rejectors.length = 0;
                  instance.state = shouldAbsorb;
                  instance.retry = function() {
                    execute(value);
                  };
                });
              }
            } catch (e2) {
              rejectCurrent(e2);
            }
          };
        }
        function executeOnce(then) {
          var runs = 0;
          function run(fn2) {
            return function(value) {
              if (runs++ > 0)
                return;
              fn2(value);
            };
          }
          var onerror = run(rejectCurrent);
          try {
            then(run(resolveCurrent), onerror);
          } catch (e2) {
            onerror(e2);
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
              } catch (e2) {
                if (rejectNext)
                  rejectNext(e2);
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
        return this.then(function(value) {
          return PromisePolyfill.resolve(callback()).then(function() {
            return value;
          });
        }, function(reason) {
          return PromisePolyfill.resolve(callback()).then(function() {
            return PromisePolyfill.reject(reason);
          });
        });
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
            for (var i3 = 0; i3 < list.length; i3++) {
              (function(i4) {
                function consume(value) {
                  count++;
                  values[i4] = value;
                  if (count === total)
                    resolve(values);
                }
                if (list[i4] != null && (typeof list[i4] === "object" || typeof list[i4] === "function") && typeof list[i4].then === "function") {
                  list[i4].then(consume, reject);
                } else
                  consume(list[i4]);
              })(i3);
            }
        });
      };
      PromisePolyfill.race = function(list) {
        return new PromisePolyfill(function(resolve, reject) {
          for (var i3 = 0; i3 < list.length; i3++) {
            list[i3].then(resolve, reject);
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
          } catch (e2) {
            return null;
          }
        }
        function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
          for (var i3 = start; i3 < end; i3++) {
            var vnode = vnodes[i3];
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
          var is = attrs && attrs.is;
          ns = getNameSpace(vnode) || ns;
          var element = ns ? is ? $doc.createElementNS(ns, tag, { is }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, { is }) : $doc.createElement(tag);
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
                o2 = old[start];
                v3 = vnodes[start];
                if (o2 === v3 || o2 == null && v3 == null)
                  continue;
                else if (o2 == null)
                  createNode(parent, v3, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                else if (v3 == null)
                  removeNode(parent, o2);
                else
                  updateNode(parent, o2, v3, hooks, getNextSibling(old, start + 1, nextSibling), ns);
              }
              if (old.length > commonLength)
                removeNodes(parent, old, start, old.length);
              if (vnodes.length > commonLength)
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
              var oldEnd = old.length - 1, end = vnodes.length - 1, map, o2, v3, oe, ve, topSibling;
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
                o2 = old[oldStart];
                v3 = vnodes[start];
                if (o2.key !== v3.key)
                  break;
                oldStart++, start++;
                if (o2 !== v3)
                  updateNode(parent, o2, v3, hooks, getNextSibling(old, oldStart, nextSibling), ns);
              }
              while (oldEnd >= oldStart && end >= start) {
                if (start === end)
                  break;
                if (o2.key !== ve.key || oe.key !== v3.key)
                  break;
                topSibling = getNextSibling(old, oldStart, nextSibling);
                moveNodes(parent, oe, topSibling);
                if (oe !== v3)
                  updateNode(parent, oe, v3, hooks, topSibling, ns);
                if (++start <= --end)
                  moveNodes(parent, o2, nextSibling);
                if (o2 !== ve)
                  updateNode(parent, o2, ve, hooks, nextSibling, ns);
                if (ve.dom != null)
                  nextSibling = ve.dom;
                oldStart++;
                oldEnd--;
                oe = old[oldEnd];
                ve = vnodes[end];
                o2 = old[oldStart];
                v3 = vnodes[start];
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
                var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i3 = 0, pos = 2147483647, matched = 0, map, lisIndices;
                for (i3 = 0; i3 < vnodesLength; i3++)
                  oldIndices[i3] = -1;
                for (i3 = end; i3 >= start; i3--) {
                  if (map == null)
                    map = getKeyMap(old, oldStart, oldEnd + 1);
                  ve = vnodes[i3];
                  var oldIndex = map[ve.key];
                  if (oldIndex != null) {
                    pos = oldIndex < pos ? oldIndex : -1;
                    oldIndices[i3 - start] = oldIndex;
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
                    for (i3 = end; i3 >= start; i3--) {
                      v3 = vnodes[i3];
                      if (oldIndices[i3 - start] === -1)
                        createNode(parent, v3, hooks, ns, nextSibling);
                      else {
                        if (lisIndices[li] === i3 - start)
                          li--;
                        else
                          moveNodes(parent, v3, nextSibling);
                      }
                      if (v3.dom != null)
                        nextSibling = vnodes[i3].dom;
                    }
                  } else {
                    for (i3 = end; i3 >= start; i3--) {
                      v3 = vnodes[i3];
                      if (oldIndices[i3 - start] === -1)
                        createNode(parent, v3, hooks, ns, nextSibling);
                      if (v3.dom != null)
                        nextSibling = vnodes[i3].dom;
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
            for (var i3 = 0; i3 < children.length; i3++) {
              var child = children[i3];
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
          var u3 = 0, v3 = 0, i3 = 0;
          var il = lisTemp.length = a2.length;
          for (var i3 = 0; i3 < il; i3++)
            lisTemp[i3] = a2[i3];
          for (var i3 = 0; i3 < il; ++i3) {
            if (a2[i3] === -1)
              continue;
            var j2 = result[result.length - 1];
            if (a2[j2] < a2[i3]) {
              lisTemp[i3] = j2;
              result.push(i3);
              continue;
            }
            u3 = 0;
            v3 = result.length - 1;
            while (u3 < v3) {
              var c3 = (u3 >>> 1) + (v3 >>> 1) + (u3 & v3 & 1);
              if (a2[result[c3]] < a2[i3]) {
                u3 = c3 + 1;
              } else {
                v3 = c3;
              }
            }
            if (a2[i3] < a2[result[u3]]) {
              if (u3 > 0)
                lisTemp[i3] = result[u3 - 1];
              result[u3] = i3;
            }
          }
          u3 = result.length;
          v3 = result[u3 - 1];
          while (u3-- > 0) {
            result[u3] = v3;
            v3 = lisTemp[v3];
          }
          lisTemp.length = 0;
          return result;
        }
        function getNextSibling(vnodes, i3, nextSibling) {
          for (; i3 < vnodes.length; i3++) {
            if (vnodes[i3] != null && vnodes[i3].dom != null)
              return vnodes[i3].dom;
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
              for (var i3 = 0; i3 < vnode.instance.length; i3++) {
                frag.appendChild(vnode.instance[i3]);
              }
            } else if (vnode.tag !== "[") {
              frag.appendChild(vnode.dom);
            } else if (vnode.children.length === 1) {
              vnode = vnode.children[0];
              if (vnode != null)
                continue;
            } else {
              for (var i3 = 0; i3 < vnode.children.length; i3++) {
                var child = vnode.children[i3];
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
          if (vnode.attrs == null || vnode.attrs.contenteditable == null && vnode.attrs.contentEditable == null)
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
          for (var i3 = start; i3 < end; i3++) {
            var vnode = vnodes[i3];
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
          for (var i3 = 0; i3 < vnode.instance.length; i3++) {
            parent.removeChild(vnode.instance[i3]);
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
                for (var i3 = 0; i3 < vnode.children.length; i3++) {
                  var child = vnode.children[i3];
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
              for (var i3 = 0; i3 < children.length; i3++) {
                var child = children[i3];
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
          return ns === void 0 && (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height") && key in vnode.dom;
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
            for (var i3 = 0; i3 < hooks.length; i3++)
              hooks[i3]();
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
            } catch (e2) {
              console2.error(e2);
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
            for (var i3 = 0; i3 < value.length; i3++) {
              destructure(key2 + "[" + i3 + "]", value[i3]);
            }
          } else if (Object.prototype.toString.call(value) === "[object Object]") {
            for (var i3 in value) {
              destructure(key2 + "[" + i3 + "]", value[i3]);
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
        var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m7, key, variadic) {
          delete query[key];
          if (params[key] == null)
            return m7;
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
                    for (var i3 = 0; i3 < data.length; i3++) {
                      data[i3] = new args.type(data[i3]);
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
                next.then(complete, function(e2) {
                  complete();
                  if (count === 0)
                    throw e2;
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
                      } catch (e2) {
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
                      } catch (e2) {
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
                } catch (e2) {
                  reject(e2);
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
        for (var i3 = 0; i3 < entries.length; i3++) {
          var entry = entries[i3].split("=");
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
        var keys2 = [];
        var regexp = new RegExp("^" + templateData.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m7, key, extra) {
          if (key == null)
            return "\\" + m7;
          keys2.push({ k: key, r: extra === "..." });
          if (extra === "...")
            return "(.*)";
          if (extra === ".")
            return "([^/]+)\\.";
          return "([^/]+)" + (extra || "");
        }) + "$");
        return function(data) {
          for (var i3 = 0; i3 < templateKeys.length; i3++) {
            if (templateData.params[templateKeys[i3]] !== data.params[templateKeys[i3]])
              return false;
          }
          if (!keys2.length)
            return regexp.test(data.path);
          var values = regexp.exec(data.path);
          if (values == null)
            return false;
          for (var i3 = 0; i3 < keys2.length; i3++) {
            data.params[keys2[i3].k] = keys2[i3].r ? values[i3 + 1] : decodeURIComponent(values[i3 + 1]);
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
      var m7 = require_hyperscript();
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
        } catch (e2) {
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
          function reject(e2) {
            console.error(e2);
            setPath(fallbackRoute, null, { replace: true });
          }
          loop(0);
          function loop(i3) {
            for (; i3 < compiled.length; i3++) {
              if (compiled[i3].check(data)) {
                var payload = compiled[i3].component;
                var matchedRoute = compiled[i3].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                  if (update !== lastUpdate)
                    return;
                  if (comp === SKIP)
                    return loop(i3 + 1);
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
            if (!compiled.some(function(i3) {
              return i3.check(defaultData);
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
            var child = m7(vnode.attrs.selector || "a", censor(vnode.attrs, ["options", "params", "selector", "onclick"]), vnode.children);
            var options, onclick, href;
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
              child.attrs.href = null;
              child.attrs["aria-disabled"] = "true";
            } else {
              options = vnode.attrs.options;
              onclick = vnode.attrs.onclick;
              href = buildPathname(child.attrs.href, vnode.attrs.params);
              child.attrs.href = route.prefix + href;
              child.attrs.onclick = function(e2) {
                var result;
                if (typeof onclick === "function") {
                  result = onclick.call(e2.currentTarget, e2);
                } else if (onclick == null || typeof onclick !== "object") {
                } else if (typeof onclick.handleEvent === "function") {
                  onclick.handleEvent(e2);
                }
                if (result !== false && !e2.defaultPrevented && (e2.button === 0 || e2.which === 0 || e2.which === 1) && (!e2.currentTarget.target || e2.currentTarget.target === "_self") && !e2.ctrlKey && !e2.metaKey && !e2.shiftKey && !e2.altKey) {
                  e2.preventDefault();
                  e2.redraw = false;
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
      var m7 = function m8() {
        return hyperscript.apply(this, arguments);
      };
      m7.m = hyperscript;
      m7.trust = hyperscript.trust;
      m7.fragment = hyperscript.fragment;
      m7.Fragment = "[";
      m7.mount = mountRedraw.mount;
      m7.route = require_route();
      m7.render = require_render2();
      m7.redraw = mountRedraw.redraw;
      m7.request = request.request;
      m7.jsonp = request.jsonp;
      m7.parseQueryString = require_parse();
      m7.buildQueryString = require_build();
      m7.parsePathname = require_parse2();
      m7.buildPathname = require_build2();
      m7.vnode = require_vnode();
      m7.PromisePolyfill = require_polyfill();
      m7.censor = require_censor();
      module.exports = m7;
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
      function seconds3(n2) {
        const ms = n2 * 1e3;
        return ms;
      }
      function Delay3(fn2, forMs) {
        const [_fn] = makeDebouncer(forMs, fn2);
        return (...args) => _fn(...args);
      }
      function makeDebouncer(ms, fn2) {
        let timerId;
        const clear = () => clearTimeout(timerId);
        const debouncedFn = (...args) => {
          clear();
          timerId = setTimeout(fn2, ms, ...args);
        };
        return [debouncedFn, clear];
      }
      function makeThrottler(fn2, ms) {
        let canRun = true;
        const [throttle, clear] = makeDebouncer(ms, () => canRun = true);
        const throttledFn = (...args) => {
          if (!canRun)
            return;
          canRun = false;
          throttle();
          fn2(...args);
        };
        return [throttledFn, clear];
      }
      function runAfter(delayInMs, fn2) {
        const [runSoon, cancel] = makeDebouncer(delayInMs, fn2);
        runSoon();
        return cancel;
      }
      function runOnce(fn2) {
        let run = true;
        let predicateFn = () => true;
        const onceFn = (...args) => {
          if (run && predicateFn()) {
            run = false;
            fn2(...args);
          }
        };
        onceFn.when = (fn3) => {
          predicateFn = fn3;
          return onceFn;
        };
        return onceFn;
      }
      function runFnPeriodically(fn2, ms = 16) {
        const cleanup = () => clearInterval(timerId);
        const timerId = setInterval(fn2, ms, { cleanup });
        return cleanup;
      }
      function makeValueChangeDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        equalityFn = (a2, b2) => a2 === b2
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
      function runFnWhenValueChanges({ fn: fn2, getValueFn }) {
        const performCheck = makeValueChangeDetector({ getValueFn, onChange: fn2 });
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
        const [pooledPromises, canPromisesRun] = promiseMakerFns.map((fn2) => makePoolAwarePromise(context, fn2)).reduce(...makeUnzipReducer());
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
          const [promise, O3, X3] = makePromise2();
          promise.finally(() => (running -= 1, next()));
          pending.add({ promiseMakerFn, O: O3, X: X3 });
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
    "node_modules/.pnpm/match-iz@3.8.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var x3 = Object.defineProperty;
      var T2 = Object.getOwnPropertyDescriptor;
      var U3 = Object.getOwnPropertyNames;
      var O3 = Object.getOwnPropertySymbols;
      var W3 = Object.prototype.hasOwnProperty;
      var d2 = Object.prototype.propertyIsEnumerable;
      var F2 = (t2, n2, o2) => n2 in t2 ? x3(t2, n2, { enumerable: true, configurable: true, writable: true, value: o2 }) : t2[n2] = o2;
      var R2 = (t2, n2) => {
        for (var o2 in n2 || (n2 = {}))
          W3.call(n2, o2) && F2(t2, o2, n2[o2]);
        if (O3)
          for (var o2 of O3(n2))
            d2.call(n2, o2) && F2(t2, o2, n2[o2]);
        return t2;
      };
      var v3 = (t2, n2) => {
        var o2 = {};
        for (var s2 in t2)
          W3.call(t2, s2) && n2.indexOf(s2) < 0 && (o2[s2] = t2[s2]);
        if (t2 != null && O3)
          for (var s2 of O3(t2))
            n2.indexOf(s2) < 0 && d2.call(t2, s2) && (o2[s2] = t2[s2]);
        return o2;
      };
      var I3 = (t2, n2) => {
        for (var o2 in n2)
          x3(t2, o2, { get: n2[o2], enumerable: true });
      };
      var X3 = (t2, n2, o2, s2) => {
        if (n2 && typeof n2 == "object" || typeof n2 == "function")
          for (let e2 of U3(n2))
            !W3.call(t2, e2) && e2 !== o2 && x3(t2, e2, { get: () => n2[e2], enumerable: !(s2 = T2(n2, e2)) || s2.enumerable });
        return t2;
      };
      var Y22 = (t2) => X3(x3({}, "__esModule", { value: true }), t2);
      var Ct = {};
      I3(Ct, { against: () => G3, allOf: () => K2, anyOf: () => J2, cata: () => Rt, deepEq: () => ft, defined: () => Nt, empty: () => L3, endsWith: () => qt, eq: () => H3, every: () => lt, falsy: () => It, firstOf: () => Ot, gt: () => wt, gte: () => Wt, hasOwn: () => dt, inRange: () => bt, includedIn: () => Et, includes: () => Dt, instanceOf: () => nt, isArray: () => i3, isDate: () => tt, isFunction: () => c3, isNumber: () => C, isPojo: () => g3, isRegExp: () => A2, isStrictly: () => Ft, isString: () => f2, lastOf: () => xt, lt: () => St, lte: () => Pt, match: () => et2, not: () => mt, otherwise: () => rt2, pluck: () => gt, some: () => pt, spread: () => Bt, startsWith: () => At, truthy: () => vt, when: () => it2 });
      module.exports = Y22(Ct);
      var w2 = {};
      I3(w2, { instanceOf: () => P2, isArguments: () => z3, isArray: () => _3, isDate: () => $2, isFunction: () => j2, isNumber: () => y2, isObject: () => B2, isPojo: () => a2, isRegExp: () => k3, isString: () => h2 });
      var V2 = Object.prototype;
      var Z3 = V2.toString;
      var N2 = (t2) => (n2) => typeof n2 === t2;
      var P2 = (t2) => (n2) => n2 instanceof t2;
      var { isArray: _3 } = Array;
      var z3 = (t2) => Z3.call(t2) === "[object Arguments]";
      var $2 = (t2) => P2(Date)(t2) && !isNaN(t2);
      var j2 = N2("function");
      var h2 = N2("string");
      var y2 = (t2) => t2 === t2 && N2("number")(t2);
      var B2 = (t2) => t2 !== null && N2("object")(t2);
      var k3 = P2(RegExp);
      var a2 = (t2) => t2 === null || !B2(t2) || z3(t2) ? false : Object.getPrototypeOf(t2) === V2;
      var { isArray: i3, isDate: tt, isFunction: c3, isNumber: C } = w2;
      var { isPojo: g3, isRegExp: A2, isString: f2, instanceOf: nt } = w2;
      var { keys: u3, entries: ot, assign: st2 } = Object;
      function et2(t2) {
        return (...n2) => G3(...n2)(t2);
      }
      var G3 = (...t2) => {
        let n2;
        return (o2) => t2.find((s2) => {
          let e2 = s2(o2), { matched: l2, value: p2 } = e2 || {};
          return [l2, p2].every(c3) ? l2(o2) && (n2 = p2(o2), true) : e2 && (n2 = e2);
        }) && n2;
      };
      var rt2 = (t2) => (n2) => ({ matched: () => true, value: () => c3(t2) ? t2(n2) : t2 });
      var b2 = (t2) => (n2) => (o2) => ({ matched: () => r3(t2, o2, (s2) => o2 = s2), value: () => c3(n2) ? f2(o2) && A2(t2) ? n2(...ct2(o2.match(t2))) : n2(o2) : n2 });
      var it2 = (...t2) => {
        if (t2.length === 1) {
          let [n2] = t2;
          return b2(n2);
        }
        if (t2.length === 2) {
          let [n2, o2] = t2;
          return b2(n2)(o2);
        }
        if (t2.length > 2) {
          let n2 = t2.slice(-1)[0], o2 = t2.slice(0, -1);
          return b2(K2(o2))(n2);
        }
        throw new Error("expected 1 or 2 arguments");
      };
      var ct2 = (t2) => {
        let { groups: n2 } = t2;
        return n2 ? [n2, t2] : [t2];
      };
      var r3 = (t2, n2, o2) => g3(t2) ? u3(t2).every((s2) => r3(t2[s2], n2 == null ? void 0 : n2[s2], o2)) : i3(t2) ? i3(n2) && t2.length === n2.length && t2.every((s2, e2) => r3(s2, n2 == null ? void 0 : n2[e2], o2)) : c3(t2) ? t2(n2, o2) : f2(n2) && A2(t2) ? t2.test(n2) : t2 === n2 || [t2, n2].every(Number.isNaN);
      var gt = (...t2) => (n2, o2) => t2.length === 0 || (c3(t2[0]) ? t2[0](n2) : r3(t2[0], n2, o2)) ? (o2(n2), true) : false;
      var ut = (t2, n2) => [t2, n2].every(g3) ? u3(t2).length === u3(n2).length : true;
      var H3 = (t2) => (n2, o2) => ut(t2, n2) && r3(t2, n2, o2);
      var ft = (t2) => q2(t2, (n2) => g3(n2) ? H3(n2) : n2);
      var mt = (t2) => (n2, o2) => !r3(t2, n2, o2);
      var J2 = (...t2) => (n2, o2) => t2.flat().some((s2) => r3(s2, n2, o2));
      var K2 = (...t2) => (n2, o2) => t2.flat().every((s2) => r3(s2, n2, o2));
      var lt = (t2) => Q3((n2) => n2.every((o2) => r3(t2, o2)));
      var pt = (t2) => Q3((n2) => n2.some((o2) => r3(t2, o2)));
      var Ot = (...t2) => D3((n2, o2) => t2.length <= n2.length && r3(t2, n2.slice(0, t2.length), o2));
      var xt = (...t2) => D3((n2, o2) => t2.length <= n2.length && r3(t2, n2.slice(n2.length - t2.length), o2));
      var L3 = (t2) => t2 !== t2 || !t2 && t2 !== 0 && t2 !== false || i3(t2) && !t2.length || g3(t2) && !u3(t2).length;
      var Nt = (t2) => !L3(t2);
      var wt = (t2) => m7((n2) => n2 > t2);
      var St = (t2) => m7((n2) => n2 < t2);
      var Wt = (t2) => m7((n2) => n2 >= t2);
      var Pt = (t2) => m7((n2) => n2 <= t2);
      var bt = (t2, n2) => m7((o2) => o2 >= Math.min(t2, n2) && o2 <= Math.max(t2, n2));
      var At = (t2) => M3((n2) => n2.startsWith(t2));
      var qt = (t2) => M3((n2) => n2.endsWith(t2));
      var Dt = (t2) => D3((n2) => n2.includes(t2));
      var Et = J2;
      var Ft = (t2) => (n2) => n2 === t2;
      var dt = (...t2) => (n2) => g3(n2) && (([o2, s2]) => o2.length && o2.every((e2) => s2.includes(e2)))([t2.flat(), u3(n2)]);
      var Rt = (o2) => {
        var s2 = o2, { getValue: t2 } = s2, n2 = v3(s2, ["getValue"]);
        return ot(n2).reduce((e2, [l2, p2]) => st2(e2, { [l2]: (S3) => (E2) => ({ matched: () => p2(E2), value: () => c3(S3) ? S3(t2(E2)) : S3 }) }), {});
      };
      var vt = (t2) => !!t2;
      var It = (t2) => !t2;
      var Vt = (t2) => (n2, o2) => (n2[o2] = q2(n2[o2], t2), n2);
      var zt = (t2) => (n2) => q2(n2, t2);
      var q2 = (t2, n2) => n2(g3(t2) ? u3(t2).reduce(Vt(n2), R2({}, t2)) : i3(t2) ? t2.map(zt(n2)) : t2);
      var Bt = (t2) => new Proxy({}, { get: () => t2 });
      var M3 = (t2) => (n2) => f2(n2) && t2(n2);
      var m7 = (t2) => (n2) => C(n2) && t2(n2);
      var Q3 = (t2) => (n2, o2) => i3(n2) && t2(n2, o2);
      var D3 = (t2) => (n2, o2) => (i3(n2) || f2(n2)) && t2(n2, o2);
    }
  });
  var require_fp = __commonJS({
    "src/common/cjs/fp.js"(exports, module) {
      function compose(...fns) {
        return (...x3) => fns.reduceRight((g3, f2) => [f2(...g3)], x3)[0];
      }
      function flow2(...fns) {
        return (...x3) => fns.reduce((g3, f2) => [f2(...g3)], x3)[0];
      }
      function pipe3(x3, ...fns) {
        return fns.reduce((g3, f2) => f2(g3), x3);
      }
      function flip(fn2) {
        return (...x3) => (...y2) => fn2(...y2)(...x3);
      }
      function do_(f2) {
        return f2();
      }
      function memo(fn2) {
        const table = /* @__PURE__ */ new Map();
        return (x3) => table.has(x3) ? table.get(x3) : table.set(x3, fn2(x3)).get(x3);
      }
      function cache(fn2) {
        const cache2 = /* @__PURE__ */ new Map();
        return (x3) => cache2.has(x3) ? cache2.get(x3) : cache2.set(x3, fn2(x3, invalidater(cache2, x3))).get(x3);
      }
      var invalidater = (cache2, x3) => () => cache2.delete(x3);
      function aside(fn2) {
        return (x3) => (fn2(x3), x3);
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
        return pipe3(str.replace(rxConsecutiveWildcards(), "*").split("*").map((x3) => x3.trim()).map(escapeStringForRegExp), against2(when2(hasNoWildcards)(templateMatchExact), when2(hasNoWildcardAtStart)(flow2(insertWildcards, templateMatchStart)), when2(hasNoWildcardAtEnd)(flow2(insertWildcards, templateMatchEnd)), otherwise2(insertWildcards)), ($2) => new RegExp($2));
      });
      var rxEscape = () => /[.*+?^${}()|[\]\\]/g;
      var rxConsecutiveWildcards = () => /\*{2,}/g;
      var hasNoWildcards = (x3) => x3.length === 1;
      var hasNoWildcardAtStart = (x3) => x3.at(0) !== "";
      var hasNoWildcardAtEnd = (x3) => x3.at(-1) !== "";
      var insertWildcards = (x3) => x3.join("(.*)");
      var templateMatchExact = ([x3]) => `^${x3}$`;
      var templateMatchStart = (x3) => `^${x3}`;
      var templateMatchEnd = (x3) => `${x3}$`;
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
  var import_mithril8 = __toESM(require_mithril());
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
  function n(n2) {
    for (var r3 = arguments.length, t2 = Array(r3 > 1 ? r3 - 1 : 0), e2 = 1; e2 < r3; e2++)
      t2[e2 - 1] = arguments[e2];
    if (false) {
      var i3 = Y2[n2], o2 = i3 ? typeof i3 == "function" ? i3.apply(null, t2) : i3 : "unknown error nr: " + n2;
      throw Error("[Immer] " + o2);
    }
    throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
      return "'" + n3 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r(n2) {
    return !!n2 && !!n2[Q];
  }
  function t(n2) {
    return !!n2 && (function(n3) {
      if (!n3 || typeof n3 != "object")
        return false;
      var r3 = Object.getPrototypeOf(n3);
      if (r3 === null)
        return true;
      var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
      return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
    }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
  }
  function i(n2, r3, t2) {
    t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
      t2 && typeof e2 == "symbol" || r3(e2, n2[e2], n2);
    }) : n2.forEach(function(t3, e2) {
      return r3(e2, t3, n2);
    });
  }
  function o(n2) {
    var r3 = n2[Q];
    return r3 ? r3.i > 3 ? r3.i - 4 : r3.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
  }
  function u(n2, r3) {
    return o(n2) === 2 ? n2.has(r3) : Object.prototype.hasOwnProperty.call(n2, r3);
  }
  function a(n2, r3) {
    return o(n2) === 2 ? n2.get(r3) : n2[r3];
  }
  function f(n2, r3, t2) {
    var e2 = o(n2);
    e2 === 2 ? n2.set(r3, t2) : e2 === 3 ? (n2.delete(r3), n2.add(t2)) : n2[r3] = t2;
  }
  function c(n2, r3) {
    return n2 === r3 ? n2 !== 0 || 1 / n2 == 1 / r3 : n2 != n2 && r3 != r3;
  }
  function s(n2) {
    return X && n2 instanceof Map;
  }
  function v(n2) {
    return q && n2 instanceof Set;
  }
  function p(n2) {
    return n2.o || n2.t;
  }
  function l(n2) {
    if (Array.isArray(n2))
      return Array.prototype.slice.call(n2);
    var r3 = rn(n2);
    delete r3[Q];
    for (var t2 = nn(r3), e2 = 0; e2 < t2.length; e2++) {
      var i3 = t2[e2], o2 = r3[i3];
      o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r3[i3] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i3] });
    }
    return Object.create(Object.getPrototypeOf(n2), r3);
  }
  function d(n2, e2) {
    return e2 === void 0 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r3) {
      return d(r3, true);
    }, true), n2);
  }
  function h() {
    n(2);
  }
  function y(n2) {
    return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
  }
  function b(r3) {
    var t2 = tn[r3];
    return t2 || n(18, r3), t2;
  }
  function _() {
    return true, U;
  }
  function j(n2, r3) {
    r3 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r3);
  }
  function O(n2) {
    g(n2), n2.p.forEach(S), n2.p = null;
  }
  function g(n2) {
    n2 === U && (U = n2.l);
  }
  function w(n2) {
    return U = { p: [], l: U, h: n2, m: true, _: 0 };
  }
  function S(n2) {
    var r3 = n2[Q];
    r3.i === 0 || r3.i === 1 ? r3.j() : r3.O = true;
  }
  function P(r3, e2) {
    e2._ = e2.p.length;
    var i3 = e2.p[0], o2 = r3 !== void 0 && r3 !== i3;
    return e2.h.g || b("ES5").S(e2, r3, o2), o2 ? (i3[Q].P && (O(e2), n(4)), t(r3) && (r3 = M(e2, r3), e2.l || x(e2, r3)), e2.u && b("Patches").M(i3[Q].t, r3, e2.u, e2.s)) : r3 = M(e2, i3, []), O(e2), e2.u && e2.v(e2.u, e2.s), r3 !== H ? r3 : void 0;
  }
  function M(n2, r3, t2) {
    if (y(r3))
      return r3;
    var e2 = r3[Q];
    if (!e2)
      return i(r3, function(i3, o3) {
        return A(n2, e2, r3, i3, o3, t2);
      }, true), r3;
    if (e2.A !== n2)
      return r3;
    if (!e2.P)
      return x(n2, e2.t, true), e2.t;
    if (!e2.I) {
      e2.I = true, e2.A._--;
      var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
      i(e2.i === 3 ? new Set(o2) : o2, function(r4, i3) {
        return A(n2, e2, o2, r4, i3, t2);
      }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
    }
    return e2.o;
  }
  function A(e2, i3, o2, a2, c3, s2) {
    if (false, r(c3)) {
      var v3 = M(e2, c3, s2 && i3 && i3.i !== 3 && !u(i3.D, a2) ? s2.concat(a2) : void 0);
      if (f(o2, a2, v3), !r(v3))
        return;
      e2.m = false;
    }
    if (t(c3) && !y(c3)) {
      if (!e2.h.F && e2._ < 1)
        return;
      M(e2, c3), i3 && i3.A.l || x(e2, c3);
    }
  }
  function x(n2, r3, t2) {
    t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r3, t2);
  }
  function z(n2, r3) {
    var t2 = n2[Q];
    return (t2 ? p(t2) : n2)[r3];
  }
  function I(n2, r3) {
    if (r3 in n2)
      for (var t2 = Object.getPrototypeOf(n2); t2; ) {
        var e2 = Object.getOwnPropertyDescriptor(t2, r3);
        if (e2)
          return e2;
        t2 = Object.getPrototypeOf(t2);
      }
  }
  function k(n2) {
    n2.P || (n2.P = true, n2.l && k(n2.l));
  }
  function E(n2) {
    n2.o || (n2.o = l(n2.t));
  }
  function R(n2, r3, t2) {
    var e2 = s(r3) ? b("MapSet").N(r3, t2) : v(r3) ? b("MapSet").T(r3, t2) : n2.g ? function(n3, r4) {
      var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r4 ? r4.A : _(), P: false, I: false, D: {}, l: r4, t: n3, k: null, o: null, j: null, C: false }, i3 = e3, o2 = en;
      t3 && (i3 = [e3], o2 = on);
      var u3 = Proxy.revocable(i3, o2), a2 = u3.revoke, f2 = u3.proxy;
      return e3.k = f2, e3.j = a2, f2;
    }(r3, t2) : b("ES5").J(r3, t2);
    return (t2 ? t2.A : _()).p.push(e2), e2;
  }
  function D(e2) {
    return r(e2) || n(22, e2), function n2(r3) {
      if (!t(r3))
        return r3;
      var e3, u3 = r3[Q], c3 = o(r3);
      if (u3) {
        if (!u3.P && (u3.i < 4 || !b("ES5").K(u3)))
          return u3.t;
        u3.I = true, e3 = F(r3, c3), u3.I = false;
      } else
        e3 = F(r3, c3);
      return i(e3, function(r4, t2) {
        u3 && a(u3.t, r4) === t2 || f(e3, r4, n2(t2));
      }), c3 === 3 ? new Set(e3) : e3;
    }(e2);
  }
  function F(n2, r3) {
    switch (r3) {
      case 2:
        return new Map(n2);
      case 3:
        return Array.from(n2);
    }
    return l(n2);
  }
  var G;
  var U;
  var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var X = typeof Map != "undefined";
  var q = typeof Set != "undefined";
  var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
  var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Z = "" + Object.prototype.constructor;
  var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
    return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
  } : Object.getOwnPropertyNames;
  var rn = Object.getOwnPropertyDescriptors || function(n2) {
    var r3 = {};
    return nn(n2).forEach(function(t2) {
      r3[t2] = Object.getOwnPropertyDescriptor(n2, t2);
    }), r3;
  };
  var tn = {};
  var en = { get: function(n2, r3) {
    if (r3 === Q)
      return n2;
    var e2 = p(n2);
    if (!u(e2, r3))
      return function(n3, r4, t2) {
        var e3, i4 = I(r4, t2);
        return i4 ? "value" in i4 ? i4.value : (e3 = i4.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
      }(n2, e2, r3);
    var i3 = e2[r3];
    return n2.I || !t(i3) ? i3 : i3 === z(n2.t, r3) ? (E(n2), n2.o[r3] = R(n2.A.h, i3, n2)) : i3;
  }, has: function(n2, r3) {
    return r3 in p(n2);
  }, ownKeys: function(n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function(n2, r3, t2) {
    var e2 = I(p(n2), r3);
    if (e2 == null ? void 0 : e2.set)
      return e2.set.call(n2.k, t2), true;
    if (!n2.P) {
      var i3 = z(p(n2), r3), o2 = i3 == null ? void 0 : i3[Q];
      if (o2 && o2.t === t2)
        return n2.o[r3] = t2, n2.D[r3] = false, true;
      if (c(t2, i3) && (t2 !== void 0 || u(n2.t, r3)))
        return true;
      E(n2), k(n2);
    }
    return n2.o[r3] === t2 && typeof t2 != "number" && (t2 !== void 0 || r3 in n2.o) || (n2.o[r3] = t2, n2.D[r3] = true, true);
  }, deleteProperty: function(n2, r3) {
    return z(n2.t, r3) !== void 0 || r3 in n2.t ? (n2.D[r3] = false, E(n2), k(n2)) : delete n2.D[r3], n2.o && delete n2.o[r3], true;
  }, getOwnPropertyDescriptor: function(n2, r3) {
    var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r3);
    return e2 ? { writable: true, configurable: n2.i !== 1 || r3 !== "length", enumerable: e2.enumerable, value: t2[r3] } : e2;
  }, defineProperty: function() {
    n(11);
  }, getPrototypeOf: function(n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function() {
    n(12);
  } };
  var on = {};
  i(en, function(n2, r3) {
    on[n2] = function() {
      return arguments[0] = arguments[0][0], r3.apply(this, arguments);
    };
  }), on.deleteProperty = function(r3, t2) {
    return false, on.set.call(this, r3, t2, void 0);
  }, on.set = function(r3, t2, e2) {
    return false, en.set.call(this, r3[0], t2, e2, r3[0]);
  };
  var un = function() {
    function e2(r3) {
      var e3 = this;
      this.g = B, this.F = true, this.produce = function(r4, i4, o2) {
        if (typeof r4 == "function" && typeof i4 != "function") {
          var u3 = i4;
          i4 = r4;
          var a2 = e3;
          return function(n2) {
            var r5 = this;
            n2 === void 0 && (n2 = u3);
            for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
              e4[o3 - 1] = arguments[o3];
            return a2.produce(n2, function(n3) {
              var t3;
              return (t3 = i4).call.apply(t3, [r5, n3].concat(e4));
            });
          };
        }
        var f2;
        if (typeof i4 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r4)) {
          var c3 = w(e3), s2 = R(e3, r4, void 0), v3 = true;
          try {
            f2 = i4(s2), v3 = false;
          } finally {
            v3 ? O(c3) : g(c3);
          }
          return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c3, o2), P(n2, c3);
          }, function(n2) {
            throw O(c3), n2;
          }) : (j(c3, o2), P(f2, c3));
        }
        if (!r4 || typeof r4 != "object") {
          if ((f2 = i4(r4)) === void 0 && (f2 = r4), f2 === H && (f2 = void 0), e3.F && d(f2, true), o2) {
            var p2 = [], l2 = [];
            b("Patches").M(r4, f2, p2, l2), o2(p2, l2);
          }
          return f2;
        }
        n(21, r4);
      }, this.produceWithPatches = function(n2, r4) {
        if (typeof n2 == "function")
          return function(r5) {
            for (var t3 = arguments.length, i5 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
              i5[o3 - 1] = arguments[o3];
            return e3.produceWithPatches(r5, function(r6) {
              return n2.apply(void 0, [r6].concat(i5));
            });
          };
        var t2, i4, o2 = e3.produce(n2, r4, function(n3, r5) {
          t2 = n3, i4 = r5;
        });
        return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
          return [n3, t2, i4];
        }) : [o2, t2, i4];
      }, typeof (r3 == null ? void 0 : r3.useProxies) == "boolean" && this.setUseProxies(r3.useProxies), typeof (r3 == null ? void 0 : r3.autoFreeze) == "boolean" && this.setAutoFreeze(r3.autoFreeze);
    }
    var i3 = e2.prototype;
    return i3.createDraft = function(e3) {
      t(e3) || n(8), r(e3) && (e3 = D(e3));
      var i4 = w(this), o2 = R(this, e3, void 0);
      return o2[Q].C = true, g(i4), o2;
    }, i3.finishDraft = function(r3, t2) {
      var e3 = r3 && r3[Q];
      var i4 = e3.A;
      return j(i4, t2), P(void 0, i4);
    }, i3.setAutoFreeze = function(n2) {
      this.F = n2;
    }, i3.setUseProxies = function(r3) {
      r3 && !B && n(20), this.g = r3;
    }, i3.applyPatches = function(n2, t2) {
      var e3;
      for (e3 = t2.length - 1; e3 >= 0; e3--) {
        var i4 = t2[e3];
        if (i4.path.length === 0 && i4.op === "replace") {
          n2 = i4.value;
          break;
        }
      }
      e3 > -1 && (t2 = t2.slice(e3 + 1));
      var o2 = b("Patches").$;
      return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
        return o2(n3, t2);
      });
    }, e2;
  }();
  var an = new un();
  var fn = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);
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
    } catch (e2) {
      global2 = self;
    }
    const BUS = "message-bus";
    const eventMap = /* @__PURE__ */ new Map();
    function emit2(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event2 = new CustomEvent(BUS, { detail });
      global2.dispatchEvent(event2);
    }
    function on3(eventNameOrPattern, cb) {
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
      const off2 = on3(eventNameOrPattern, handle);
      return off2;
      function handle(...args) {
        cb(...args);
        off2();
      }
    }
    return {
      emit: emit2,
      on: on3,
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
    const errorDescs = permittedArgTypes.map((argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)).filter(isString2);
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
        const processedArgs = Array.from(args, (x3) => isArguments(x3) ? Array.from(x3) : x3).flat(1);
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
      const keys2 = Object.keys(typeMap);
      const objTypeError = ArgTypeError(namespace)(typeMap);
      return (fnName) => (obj) => {
        const values = valuesOf(obj, { keys: keys2 });
        const err = objTypeError(fnName)(...values);
        return err;
      };
    };
  }
  function valuesOf(obj, options) {
    const { keys: keys2 } = options;
    if (!Array.isArray(keys2)) {
      return Object.values(obj);
    }
    return keys2.reduce((acc, key) => {
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
    const nextStore = fn(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForAddingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x3) => x3.id === account.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForUpdatingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x3) => x3.id === account.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForAddingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find((x3) => x3.id === statement.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForUpdatingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find((x3) => x3.id === statement.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      entries.forEach((entry) => {
        const err = checkSchemaForAddingAnEntry(entry);
        if (err) {
          throw TypeError(err);
        }
        const existingEntry = draftState.entries.find((x3) => x3.id === entry.id);
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
    return String(zeroPad(date.getMonth() + 1) + "/" + zeroPad(date.getDate()) + "/" + date.getFullYear());
  }
  function UKDateTimeString(timestampOrDate) {
    const date = new Date(timestampOrDate);
    return String(zeroPad(date.getDate()) + "/" + zeroPad(date.getMonth() + 1) + "/" + date.getFullYear());
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
    return String(date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
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
    if (!cents || typeof cents !== "number") {
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
    if (!cents || typeof cents !== "number") {
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
          csv.push('"' + csvEscape(id) + '","' + csvEscape(simpleDate(date)) + '","' + csvEscape(statement.type) + '","' + csvEscape(statement.sortCode + " " + statement.accountNumber) + '","' + csvEscape(payee) + '","' + csvEscape(note || "") + '","' + csvEscape(type) + '","' + csvEscape(transactionAmount) + '"');
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
          csv.push('"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(addSpaces(payee, 25) + addSpaces(note || "", 25) + type) + '","' + csvEscape(transactionAmount) + '"');
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
      generate: (statement) => JSON.stringify(statement, (key, replacementValue) => {
        if (["debit", "credit", "balance"].indexOf(key) !== -1) {
          const float = parseFloat(convertCentsToDecimal(replacementValue));
          if (isNaN(float)) {
            return key === "balance" ? void 0 : 0;
          } else {
            return key === "debit" ? -float : float;
          }
        }
        return replacementValue;
      }, 2)
    };
  }
  function SortByNumber(field) {
    if (field) {
      return function sortByNumberInObject(a2, b2) {
        return +a2[field] - +b2[field];
      };
    } else {
      return function sortByNumber(a2, b2) {
        return +a2 - +b2;
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
          csv.push('"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(type) + '","' + csvEscape(payee + (note || "")) + '","' + csvEscape(convertCentsToDecimal(transactionAmountInCents)) + '","' + csvEscape(convertCentsToDecimal(runningBalanceInCents)) + '"');
        });
        csv.push("", "Arranged overdraft limit," + csvEscape(UKDateTimeString(statement.date)) + ",\xA30.00", "");
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
        ofx = "OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n\n<OFX>\n\n	<SIGNONMSGSRSV1>\n		<SONRS>\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n			<DTSERVER>" + ofxEscape(dateTimeString(new Date())) + "</DTSERVER>\n			<LANGUAGE>" + ofxEscape(HSBC_OFX.LANGUAGE) + "</LANGUAGE>\n			<INTU.BID>" + ofxEscape(HSBC_OFX.INTU_BID) + "</INTU.BID>\n		</SONRS>\n	</SIGNONMSGSRSV1>\n\n	<BANKMSGSRSV1>\n\n		<STMTTRNRS>\n\n			<TRNUID>1</TRNUID>\n\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n\n			<STMTRS>\n\n				<CURDEF>" + ofxEscape(HSBC_OFX.CURDEF) + "</CURDEF>\n\n				<BANKACCTFROM>\n					<BANKID>" + ofxEscape(statement.sortCode) + "</BANKID>\n					<ACCTID>" + ofxEscape(statement.sortCode + statement.accountNumber) + "</ACCTID>\n					<ACCTTYPE>CHECKING</ACCTTYPE>\n				</BANKACCTFROM>\n\n				<BANKTRANLIST>\n\n					<DTSTART>" + ofxEscape(dateTimeString(statement.balances[0].date)) + "</DTSTART>\n					<DTEND>" + ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) + "</DTEND>\n\n";
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
        qif = "!Account\nN" + qifEscape(statement.type) + "\nA" + qifEscape(statement.sortCode + "/" + statement.sortCode + statement.accountNumber) + "\n/" + qifEscape(USDateTimeString(statement.balances[latestBalanceIndex].date)) + "\n$" + qifEscape(convertCentsToDecimal(statement.balances[latestBalanceIndex].balance)) + "\nTBank\n^\n!Type:Bank\n";
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
    return dateTime + "_" + md5(dateTime + (index !== void 0 ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount);
  }
  function compatMakeStatements() {
    const { accounts, statements, entries } = store2();
    const compatStatements = statements.reduce((acc, statement) => {
      const statementAccount = accounts.find((account) => account.id === statement.accountId);
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
    const zipContents = [];
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
    return "OBIS-Statements-" + statementDate.getFullYear() + "-" + dateTimeString(new Date(), "_") + ".zip";
  }
  var import_mithril5 = __toESM(require_mithril());
  var { parse: $parse, stringify: $stringify } = JSON;
  var { keys } = Object;
  var Primitive = String;
  var primitive = "string";
  var object = "object";
  var noop = (_3, value) => value;
  var set = (known, input, value) => {
    const index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  };
  var stringify = (value, replacer, space) => {
    const $2 = replacer && typeof replacer === object ? (k3, v3) => k3 === "" || -1 < replacer.indexOf(k3) ? v3 : void 0 : replacer || noop;
    const known = /* @__PURE__ */ new Map();
    const input = [];
    const output = [];
    let i3 = +set(known, input, $2.call({ "": value }, "", value));
    let firstRun = !i3;
    while (i3 < input.length) {
      firstRun = true;
      output[i3] = $stringify(input[i3++], replace, space);
    }
    return "[" + output.join(",") + "]";
    function replace(key, value2) {
      if (firstRun) {
        firstRun = !firstRun;
        return value2;
      }
      const after = $2.call(this, key, value2);
      switch (typeof after) {
        case object:
          if (after === null)
            return after;
        case primitive:
          return known.get(after) || set(known, input, after);
      }
      return after;
    }
  };
  var import_mithril = __toESM(require_mithril());
  var currentState;
  var call = Function.prototype.call.bind(Function.prototype.call);
  var scheduleRender = () => import_mithril.default.redraw();
  var updateDeps = (deps) => {
    const state = currentState;
    const { depsIndex } = state;
    state.depsIndex += 1;
    const prevDeps = state.depsStates[depsIndex] || [];
    const shouldRecompute = deps === void 0 ? true : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x3, i3) => x3 === prevDeps[i3]) : !state.setup : false;
    if (deps !== void 0) {
      state.depsStates[depsIndex] = deps;
    }
    return shouldRecompute;
  };
  var effect = (isAsync = false) => (fn2, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);
    if (shouldRecompute) {
      const { depsIndex } = state;
      const runCallbackFn = () => {
        const teardown2 = fn2();
        if (typeof teardown2 === "function") {
          state.teardowns.set(depsIndex, teardown2);
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
      state.updates.push(isAsync ? () => new Promise((resolve) => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
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
  var useMemo = (fn2, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);
    const [memoized, setMemoized] = !state.setup ? updateState(fn2()) : updateState();
    if (state.setup && shouldRecompute) {
      setMemoized(fn2());
    }
    return memoized;
  };
  var useCallback = (callback, deps) => useMemo(() => callback, deps);
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
      } catch (e2) {
        console.error(e2);
      } finally {
        currentState = prevState;
      }
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
  function mitt(n2) {
    return { all: n2 = n2 || /* @__PURE__ */ new Map(), on: function(t2, e2) {
      var i3 = n2.get(t2);
      i3 ? i3.push(e2) : n2.set(t2, [e2]);
    }, off: function(t2, e2) {
      var i3 = n2.get(t2);
      i3 && (e2 ? i3.splice(i3.indexOf(e2) >>> 0, 1) : n2.set(t2, []));
    }, emit: function(t2, e2) {
      var i3 = n2.get(t2);
      i3 && i3.slice().map(function(n3) {
        n3(e2);
      }), (i3 = n2.get("*")) && i3.slice().map(function(n3) {
        n3(t2, e2);
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
    const errorDescs = permittedArgTypes.map((argType2) => isFunction3(argType2) ? typeErrorStringIfFnReturnsFalse2(argName, argType2, arg) : typeErrorStringIfTypeOfFails2(argName, argType2, arg)).filter(isString3);
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
        const processedArgs = Array.from(args, (x3) => isArguments2(x3) ? Array.from(x3) : x3).flat(1);
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
    function on3(eventName, fn2) {
      let fnMeta = wrapMap.get(fn2);
      if (!fnMeta) {
        fnMeta = {
          handleEvent: (args = []) => fn2(...[args].flat()),
          refCount: 0
        };
        wrapMap.set(fn2, fnMeta);
      }
      fnMeta.refCount += 1;
      addListener(eventName, fnMeta.handleEvent);
    }
    function off(eventName, fn2) {
      let fnMeta = wrapMap.get(fn2);
      if (!fnMeta) {
        return;
      }
      removeListener(eventName, fnMeta.handleEvent);
      fnMeta.refCount -= 1;
      if (fnMeta.refCount === 0) {
        wrapMap.delete(fn2);
      }
    }
    return {
      emit: emit2,
      on: on3,
      off
    };
  }
  function uniq(input) {
    return input.reduce((acc, one) => acc.indexOf(one) === -1 ? (acc.push(one), acc) : acc, []);
  }
  function Once(fn2) {
    const { revoke, fn: _fn } = Revokable(fn2);
    let result;
    return function(...args) {
      result = _fn(...args);
      revoke();
      return result;
    };
  }
  function Revokable(fn2) {
    let revoked = false;
    let result;
    return {
      fn: (...args) => {
        if (!revoked) {
          result = fn2(...args);
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
    function Pausable(fn2) {
      return (...args) => {
        if (paused) {
          runFnWhenPaused();
          return false;
        }
        return fn2(...args);
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
      dictionary[word] = (dictionary[word] || []).filter((next) => next !== definition);
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
    const err = argTypeError({ chart: isTemplateLiteral2 })("decomposeChart")(chart2);
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
    return fromStates.reduce((acc, fromState) => (acc.push(...toStates.map((toState) => [fromState, toState])), acc), []);
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
    const events = isUndefined(options.events) ? wrapEmitter(mitt()) : isEventEmitter2(options.events) && wrapEmitter(options.events);
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
    const { pause, resume, paused, Pausable } = Pausables(false, () => _console.warn(`${logPrefix}: Ignoring callback, paused`));
    const transitionsFromEvents = Definitions();
    const internalEvents = wrapEmitter(mitt());
    const emitInternalEvent = Pausable(internalEvents.emit);
    function onInternalEvent(eventName, cb) {
      internalEvents.on(eventName, cb);
      return () => internalEvents.off(eventName, cb);
    }
    const statesHandled = ReferenceCounter(logPrefix, "states", "Listening for the following state-changes", [...states]);
    const routesHandled = ReferenceCounter(logPrefix, "transitions", "Listening for the following transitions", [...routes]);
    const eventsHandled = ReferenceCounter(logPrefix, "events", "Listening for the following events");
    function applyHitcher(hitcher, fnName) {
      const hitcherActions = isFunction3(hitcher) ? hitcher({ enter, emit: emit2, Enter, Emit: Emit3 }) : isPojo3(hitcher) ? hitcher : null;
      if (!isPojo3(hitcherActions)) {
        throw new TypeError(`${logPrefix}#${fnName}(): Expected an object, or a function that returns an object`);
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
          _console.warn(`${logPrefix}#${fnName}(): Invalid states specified:
` + invalidStates.map((state) => `  > "${state}"`).join("\n"));
        }
        if (invalidRoutes.length) {
          _console.warn(`${logPrefix}#${fnName}(): Invalid transitions specified:
` + invalidRoutes.map((route) => `  > "${route}"`).join("\n"));
        }
      }
      return () => allCleanupFns.map((fn2) => fn2());
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
        ].concat(configs.map(({ fromState, toState }) => transitionsFromEvents.define(`${eventName}:${fromState}`, toState)));
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
    function peek(eventName, stateObject) {
      return _peek(eventName, stateObject, false);
    }
    function previousState() {
      return stateHistory[stateHistory.length - 2];
    }
    function currentState2() {
      return stateHistory[stateHistory.length - 1];
    }
    function _state_canTransitionTo(...states2) {
      const err = argTypeError2({ states: isAllStrings })("canTransitionTo")([states2]);
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
        const err = argTypeError2({ thisState: isString3, "{ afterEmitting }": isString3 })("canTransitionTo")(thisState, afterEmitting);
        if (err) {
          throw new TypeError(err);
        }
        return thisState !== currentState2() && _peek(afterEmitting) === thisState;
      }
      return _state_canTransitionTo(...testStates);
    }
    function statesAvailableFromHere(state) {
      const _state = !isUndefined(state) ? state : currentState2();
      const err = argTypeError2({ state: isString3 })("statesAvailableFromHere")(_state);
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
      const err = argTypeError2({ state: [isString3, isPojo3] })("inState")(args[0]);
      if (err) {
        throw new TypeError(err);
      }
      return isPojo3(args[0]) ? _inStateObject(...args) : _inState(...args);
    }
    const emit2 = (eventName, ...args) => {
      const err = argTypeError2({ eventName: isString3 })("emit")(eventName);
      if (err) {
        throw new TypeError(err);
      }
      _peek(eventName);
      return events.emit(eventName, ...args);
    };
    const enter = (state, ...args) => {
      const err = argTypeError2({ state: isString3 })("enter")(state);
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
      const err = argTypeError2({ eventName: isString3, cb: isFunction3 })("onEvent")(eventName, cb);
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
          const err = argTypeError2({ state: isString3, cb: isFunction3 })(methodName)(state, cb);
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
            decreaseRefCounts.map((fn2) => fn2());
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
      peek,
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
        ...transitions.map(([fromState, toState]) => ({ fromState, toState, action }))
      ];
    }, []);
    return {
      configs: _configs,
      states: allStates,
      routes: allRoutes
    };
  }
  var makeHooks = ({ Statebot: Statebot3, useEffect: useEffect2, useState: useState2, useMemo: useMemo2 }) => {
    if (![useEffect2, useState2, useMemo2].every((x3) => typeof x3 === "function")) {
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
      useEffect2(() => () => {
        if (typeof bot.pause === "function") {
          bot.pause();
        }
        listeners.forEach((off) => off());
      }, [bot, listeners]);
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
  var {
    useStatebot,
    useStatebotFactory,
    useStatebotEvent
  } = makeHooks({ Statebot, useEffect, useState, useMemo });
  var D2 = Object.defineProperty;
  var G2 = (t2, n2) => {
    for (var o2 in n2)
      D2(t2, o2, { get: n2[o2], enumerable: true });
  };
  var x2 = {};
  G2(x2, { instanceOf: () => S2, isArguments: () => I2, isArray: () => J, isDate: () => K, isFunction: () => L2, isNumber: () => Q2, isObject: () => V, isPojo: () => U2, isRegExp: () => T, isString: () => M2 });
  var v2 = Object.prototype;
  var H2 = v2.toString;
  var O2 = (t2) => (n2) => typeof n2 === t2;
  var S2 = (t2) => (n2) => n2 instanceof t2;
  var { isArray: J } = Array;
  var I2 = (t2) => H2.call(t2) === "[object Arguments]";
  var K = (t2) => S2(Date)(t2) && !isNaN(t2);
  var L2 = O2("function");
  var M2 = O2("string");
  var Q2 = (t2) => t2 === t2 && O2("number")(t2);
  var V = (t2) => t2 !== null && O2("object")(t2);
  var T = S2(RegExp);
  var U2 = (t2) => t2 === null || !V(t2) || I2(t2) ? false : Object.getPrototypeOf(t2) === v2;
  var { isArray: i2, isDate: st, isFunction: g2, isNumber: X2 } = x2;
  var { isPojo: u2, isRegExp: z2, isString: N, instanceOf: et } = x2;
  var { keys: c2, entries: Y2, assign: Z2 } = Object;
  function rt(t2) {
    return (...n2) => _2(...n2)(t2);
  }
  var _2 = (...t2) => {
    let n2;
    return (o2) => t2.find((s2) => {
      let r3 = s2(o2), { matched: m7, value: l2 } = r3 || {};
      return [m7, l2].every(g2) ? m7(o2) && (n2 = l2(o2), true) : r3 && (n2 = r3);
    }) && n2;
  };
  var it = (t2) => (n2) => ({ matched: () => true, value: () => g2(t2) ? t2(n2) : t2 });
  var W2 = (t2) => (n2) => (o2) => ({ matched: () => e(t2, o2, (s2) => o2 = s2), value: () => g2(n2) ? N(o2) && z2(t2) ? n2(...$(o2.match(t2))) : n2(o2) : n2 });
  var ct = (...t2) => {
    if (t2.length === 1) {
      let [n2] = t2;
      return W2(n2);
    }
    if (t2.length === 2) {
      let [n2, o2] = t2;
      return W2(n2)(o2);
    }
    if (t2.length > 2) {
      let n2 = t2.slice(-1)[0], o2 = t2.slice(0, -1);
      return W2(k2(o2))(n2);
    }
    throw new Error("expected 1 or 2 arguments");
  };
  var $ = (t2) => {
    let { groups: n2 } = t2;
    return n2 ? [n2, t2] : [t2];
  };
  var e = (t2, n2, o2) => u2(t2) ? c2(t2).every((s2) => e(t2[s2], n2 == null ? void 0 : n2[s2], o2)) : i2(t2) ? i2(n2) && t2.length === n2.length && t2.every((s2, r3) => e(s2, n2 == null ? void 0 : n2[r3], o2)) : g2(t2) ? t2(n2, o2) : N(n2) && z2(t2) ? t2.test(n2) : t2 === n2 || [t2, n2].every(Number.isNaN);
  var k2 = (...t2) => (n2, o2) => t2.flat().every((s2) => e(s2, n2, o2));
  function r2(e2) {
    var t2, f2, n2 = "";
    if (typeof e2 == "string" || typeof e2 == "number")
      n2 += e2;
    else if (typeof e2 == "object")
      if (Array.isArray(e2))
        for (t2 = 0; t2 < e2.length; t2++)
          e2[t2] && (f2 = r2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
      else
        for (t2 in e2)
          e2[t2] && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  function clsx() {
    for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
      (e2 = arguments[f2++]) && (t2 = r2(e2)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  var clsx_m_default = clsx;
  var import_mithril2 = __toESM(require_mithril());
  var import_timers = __toESM(require_timers());
  var ContainerWithRef = withHooks((props) => {
    const { children } = props || {};
    const { setRef = () => {
    } } = props || {};
    return /* @__PURE__ */ (0, import_mithril2.default)("div", {
      oncreate: (vnode) => setRef(vnode.dom)
    }, children);
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
        "closed -> opening": {
          on: event.TOGGLE_OPEN,
          then: (0, import_timers.Delay)(Emit3(event.OPEN_FINISHED), durationInMs)
        },
        "opening -> opened": {
          on: event.OPEN_FINISHED
        },
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
    useEffect(() => void (containerEl && setContainerHeight(containerEl.scrollHeight)), [containerEl, children]);
    return /* @__PURE__ */ (0, import_mithril2.default)("div", {
      className: `vertical-animation-container ${state}`,
      style: `max-height: ${containerHeight}px`
    }, /* @__PURE__ */ (0, import_mithril2.default)(ContainerWithRef, {
      setRef: setContainerEl
    }, children));
  });
  var import_mithril4 = __toESM(require_mithril());
  var Dialog = withHooks((props) => {
    const { children, hidden } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: clsx_m_default("dialog", {
        hidden
      })
    }, children);
  });
  var Header = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("h1", null, "OBIS | ", children);
  });
  var Subheader = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("h2", null, children);
  });
  var Button = withHooks((props) => {
    const { children } = props || {};
    const { className, handleClick, disabled } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("button", {
      className,
      onclick: handleClick,
      disabled
    }, children);
  });
  var YearsSlider = withHooks((props) => {
    const { value, max = 15, handleUpdate, disabled } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("input", {
      className: "fetch-slider",
      type: "range",
      min: "1",
      max,
      oninput: handleUpdate,
      onchange: handleUpdate,
      value,
      disabled
    });
  });
  var ProgressBar = withHooks((props) => {
    const { value, max } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("progress", {
      value,
      max
    });
  });
  var Account = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: "account"
    }, children);
  });
  var Accounts = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: "accounts"
    }, children);
  });
  var StatementsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: "statements-loaded"
    }, children);
  });
  var YearsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: "years-loaded"
    }, children);
  });
  var AccountName = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("h3", {
      className: "account-name"
    }, children);
  });
  var Actions = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril4.default)("div", {
      className: "actions"
    }, children);
  });
  var import_timers2 = __toESM(require_timers());
  var import_fp = __toESM(require_fp());
  var SUPPORTS_YEARS_SLIDER = false;
  var { fetchMachine: fetcher } = obis;
  var { Statebot: Statebot2, messages: messages2 } = obis.deps;
  var { Emit } = fetcher;
  var MAXIMUM_YEARS_TO_FETCH = 10;
  var DEFAULT_YEARS_TO_FETCH = 3;
  var uiMachine = Statebot2("UI", {
    events: messages2,
    chart: `

    loading ->
    rendering-ui ->
      closed -> opened -> closed

  `,
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
  var progressBar = {
    max: 0,
    value: 0
  };
  var App = withHooks(() => {
    const state = useStatebot(uiMachine);
    const ready = !["idle", "loading"].includes(state);
    const closed = state === "closed";
    const opened = state === "opened";
    const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH);
    const handleToggleOpen = useCallback(Emit(actions.ui.TOGGLE_OPEN), []);
    const handleRangeSlider = useCallback((0, import_fp.flow)((event2) => event2?.target?.value, ($2) => parseInt($2, 10), ($2) => isNaN($2) ? DEFAULT_YEARS_TO_FETCH : $2, ($2) => setYearsToFetch($2)), [setYearsToFetch]);
    const handleFetchClick = useCallback(Emit(actions.get.ACCOUNTS, yearsToFetch), [yearsToFetch]);
    const handleViewStatementsClick = useCallback(Emit(actions.ui.VIEW_STATEMENTS), []);
    const handleDownloadAllClick = useCallback(Emit(actions.ui.DOWNLOAD_STATEMENTS), []);
    return /* @__PURE__ */ (0, import_mithril5.default)(Dialog, {
      hidden: !ready
    }, ready && /* @__PURE__ */ (0, import_mithril5.default)(Button, {
      className: clsx_m_default("toggle-button", {
        opened,
        closed
      }),
      handleClick: handleToggleOpen,
      disabled: !opened && !closed
    }, "\u21E7"), /* @__PURE__ */ (0, import_mithril5.default)(Header, null, obis.plugin.description), /* @__PURE__ */ (0, import_mithril5.default)(Subheader, null, rt({ ready, opened })(ct({ ready: true, opened: true })("Hit the button below to try and download everything automatically."), ct({ ready: true, opened: false })("Welcome! Click that button on the right to see if we can download some statements."), it("Loading...")), /* @__PURE__ */ (0, import_mithril5.default)("br", null), /* @__PURE__ */ (0, import_mithril5.default)("br", null), fetcher.inState({
      "getting-accounts": "Finding accounts...",
      "getting-statements": "Getting statements...",
      "getting-entries": "Getting transactions... (takes a moment to finish)",
      idle: () => rt(fetcher.history().some((state2) => /^failed-/.test(state2)))(ct(true)(/* @__PURE__ */ (0, import_mithril5.default)("span", {
        style: "font-weight: bold; color: red;"
      }, "Sorry, something went wrong. Please try again, or report a problem on the", " ", /* @__PURE__ */ (0, import_mithril5.default)("a", {
        href: "https://github.com/shuckster/OBIS/issues",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "OBIS Github repo"))), it(""))
    }), /* @__PURE__ */ (0, import_mithril5.default)(ProgressBar, {
      ...progressBar
    })), ready && /* @__PURE__ */ (0, import_mithril5.default)(VerticalAnimationContainer, {
      opened
    }, /* @__PURE__ */ (0, import_mithril5.default)(Accounts, null, store2().accounts.map((account) => {
      const allStatementYears = (0, import_fp.pipe)(store2(), ($2) => $2.statements.filter((x3) => x3.accountId === account.id), ($2) => $2.map((x3) => new Date(x3.endDate).getFullYear()));
      const uniqueStatementYears = (0, import_fp.pipe)(allStatementYears, ($2) => new Set($2), ($2) => [...$2]);
      return /* @__PURE__ */ (0, import_mithril5.default)(Account, {
        key: account.id
      }, /* @__PURE__ */ (0, import_mithril5.default)(StatementsLoaded, null, "Statements: ", allStatementYears.length), /* @__PURE__ */ (0, import_mithril5.default)(YearsLoaded, null, uniqueStatementYears.join(" ")), /* @__PURE__ */ (0, import_mithril5.default)(AccountName, null, account.sortCode, " ", account.accountNumber));
    })), /* @__PURE__ */ (0, import_mithril5.default)(Actions, null, rt(SUPPORTS_YEARS_SLIDER)(ct(true)(/* @__PURE__ */ (0, import_mithril5.default)(YearsSlider, {
      max: MAXIMUM_YEARS_TO_FETCH,
      value: yearsToFetch,
      handleUpdate: handleRangeSlider,
      disabled: !fetcher.inState("idle")
    })), it(/* @__PURE__ */ (0, import_mithril5.default)("div", null, "\xA0"))), /* @__PURE__ */ (0, import_mithril5.default)(Button, {
      handleClick: handleFetchClick,
      className: "fetch-everything",
      disabled: !fetcher.inState("idle")
    }, rt(SUPPORTS_YEARS_SLIDER)(ct(true)(/* @__PURE__ */ (0, import_mithril5.default)(import_mithril5.default.Fragment, null, "Fetch ", yearsToFetch, " ", yearsToFetch == 1 ? "year" : "years")), it("Fetch statements"))), /* @__PURE__ */ (0, import_mithril5.default)(Button, {
      handleClick: handleViewStatementsClick,
      disabled: !fetcher.inState("found-entries")
    }, "View statements"), /* @__PURE__ */ (0, import_mithril5.default)(Button, {
      handleClick: handleDownloadAllClick,
      disabled: !fetcher.inState("found-entries")
    }, "Download all"))));
  });
  var import_mithril7 = __toESM(require_mithril());
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
      const account2 = accounts.find((x3) => x3.id === accountId);
      const { sortCode, accountNumber } = account2 ?? UNKNOWN_ACCOUNT;
      const accountInfo2 = `${sortCode} ${accountNumber}`;
      setAccount(account2);
      setAccountInfo(accountInfo2);
    }, [accounts, accountId, setAccount, setAccountInfo]);
    const statements = useStatements();
    const accountStatements = useMemo(() => statements.filter((x3) => x3.accountId === accountId), [statements, accountId]);
    const getNewest = useCallback(() => {
      return accountStatements[0]?.id;
    }, [accountStatements]);
    const getNewerThan = useCallback((statementId) => {
      const currentStatementIndex = accountStatements.map((x3, index) => x3.id === statementId ? index : null).filter((x3) => x3 !== null)[0];
      return accountStatements[Math.max(0, currentStatementIndex - 1)]?.id;
    }, [accountStatements]);
    const getOlderThan = useCallback((statementId) => {
      const currentStatementIndex = accountStatements.map((x3, index) => x3.id === statementId ? index : null).filter((x3) => x3 !== null)[0];
      return accountStatements[Math.min(accountStatements.length - 1, currentStatementIndex + 1)]?.id;
    }, [accountStatements]);
    const getNearestToDate = useCallback((timestamp) => {
      const statementsWithDateDeltas = accountStatements.map((x3) => ({
        dateDelta: Math.abs(timestamp - x3.endDate),
        id: x3.id
      })).sort(SortByNumber("dateDelta"));
      return statementsWithDateDeltas[0]?.id ?? getNewest();
    }, [accountStatements]);
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
    const { startDate, startBalance, endDate, endBalance } = useMemo(() => statements.find((x3) => x3.id === statementId) ?? {}, [statements, statementId]);
    const entries = useEntries();
    const [statementEntries, setStatementEntries] = useState([]);
    const [totalDebit, setTotalDebit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [creditDebitDiff, setCreditDebitDiff] = useState(0);
    useEffect(() => {
      const statementEntries2 = entries.filter((x3) => x3.statementId === statementId);
      setStatementEntries(statementEntries2);
      const totalDebit2 = statementEntries2.reduce((acc, x3) => acc + x3.debit, 0);
      const totalCredit2 = statementEntries2.reduce((acc, x3) => acc + x3.credit, 0);
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
  var import_fp2 = __toESM(require_fp());
  var STATEMENTS_KEEP_BALANCE_HISTORY = false;
  function createStatementsWindow() {
    const windowRef = window.open("text/html", "obis", "width=1000,height=750,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
    windowRef.document.writeln(`
    <html>
      <head>
        <title>OBIS :: Statements Browser</title>
        <style type="text/css">
          /* ../../../../var/folders/74/5b1jhx655yg17x4s7m5bxsvr0000gn/T/tmp-18198-3SqCM54xw7Hj/OBIS/src/ui/styles/statements-browser/all.css */
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
  var Info = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });
  var Accounts2 = withHooks((props) => {
    const { selectedAccountId, handleClick } = props;
    const accounts = useAccounts();
    const clickHandler = useCallback((event2) => {
      const accountId = event2?.composedPath().map((x3) => x3?.dataset?.account).filter(Boolean)[0];
      handleClick(accountId);
    }, [handleClick]);
    return accounts.map((account) => /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: clickHandler,
      key: account.id,
      "data-account": account.id,
      className: clsx_m_default("account", {
        selected: account.id === selectedAccountId
      })
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "statements-loaded"
    }), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "years-loaded"
    }), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "account-name"
    }, account.sortCode, " ", account.accountNumber)));
  });
  var Cursor = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });
  var Months = withHooks((props) => {
    const _months = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|");
    const { selectedMonth, months = [], handleClick } = props || {};
    const clickHandler = useCallback((event2) => handleClick(event2?.target?.dataset?.month), [handleClick]);
    return _months.map((month, index) => /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: clickHandler,
      key: month,
      "data-month": index,
      className: clsx_m_default("month", {
        selected: index === selectedMonth,
        "no-entries": !months.includes(index)
      })
    }, month));
  });
  var Years = withHooks((props) => {
    const { selectedYear, years = [], handleClick } = props || {};
    const clickHandler = useCallback((event2) => handleClick(event2?.target?.dataset?.year), [handleClick]);
    return years.map((year) => /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: clickHandler,
      key: year,
      "data-year": year,
      className: clsx_m_default("year", {
        selected: year == selectedYear
      })
    }, year));
  });
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
      return /* @__PURE__ */ (0, import_mithril7.default)("tr", {
        key: id
      }, /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: "no-wrap"
      }, simpleDate(date)), /* @__PURE__ */ (0, import_mithril7.default)("td", null, type), /* @__PURE__ */ (0, import_mithril7.default)("td", null, payee), /* @__PURE__ */ (0, import_mithril7.default)("td", null, note), /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: "currency"
      }, convertCentsToDecimalForDisplay(debit)), /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: "currency"
      }, convertCentsToDecimalForDisplay(credit)), /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: clsx_m_default("currency", {
          negative: balance < 0
        })
      }, convertCentsToDecimalForDisplay(balance)), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: clsx_m_default("currency", {
          negative: runningBalance < 0
        })
      }, convertCentsToDecimalForDisplay(runningBalance)));
    });
    let emptyState;
    if (!rows.length) {
      emptyState = /* @__PURE__ */ (0, import_mithril7.default)("tr", null, /* @__PURE__ */ (0, import_mithril7.default)("td", {
        className: "no-wrap no-entries",
        colspan: "8"
      }, "No entries for this period"));
    }
    return /* @__PURE__ */ (0, import_mithril7.default)("table", {
      className: "statement"
    }, /* @__PURE__ */ (0, import_mithril7.default)("thead", null, /* @__PURE__ */ (0, import_mithril7.default)("tr", {
      className: "table-header"
    }, /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Date"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Type"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Description"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Memo"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Debit"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Credit"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "Balance"), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril7.default)("th", null, "(Calculated)"))), /* @__PURE__ */ (0, import_mithril7.default)("tbody", null, rows.length ? rows : emptyState), /* @__PURE__ */ (0, import_mithril7.default)("tfoot", null, /* @__PURE__ */ (0, import_mithril7.default)("tr", {
      className: "table-footer"
    }, /* @__PURE__ */ (0, import_mithril7.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril7.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril7.default)("th", {
      className: "currency"
    }, convertCentsToDecimalForDisplay(totalDebit)), /* @__PURE__ */ (0, import_mithril7.default)("th", {
      className: "currency"
    }, convertCentsToDecimalForDisplay(totalCredit)), /* @__PURE__ */ (0, import_mithril7.default)("th", {
      className: "currency"
    }, convertCentsToDecimalForDisplay(endBalance)), STATEMENTS_KEEP_BALANCE_HISTORY && /* @__PURE__ */ (0, import_mithril7.default)("th", {
      className: "currency"
    }, convertCentsToDecimalForDisplay(runningBalance)))));
  });
  var StatementsPicker = withHooks(() => {
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
    const [selectedStatementDate, setSelectedStatementDate] = useState(accountStatements.find((x3) => x3.id === selectedStatementId)?.endDate);
    useEffect(() => {
      const selectedStatement2 = accountStatements.find((x3) => x3.id === selectedStatementId);
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
      const uniqueYears = (0, import_fp2.pipe)(accountStatements, ($2) => $2.map((x3) => new Date(x3.endDate)), ($2) => $2.map((x3) => x3.getFullYear()), ($2) => new Set($2), ($2) => [...$2]);
      const uniqueMonths = (0, import_fp2.pipe)(accountStatements, ($2) => $2.map((x3) => new Date(x3.endDate)), ($2) => $2.filter((x3) => x3.getFullYear() == selectedYear), ($2) => $2.map((x3) => x3.getMonth()), ($2) => new Set($2), ($2) => [...$2]);
      setYears(uniqueYears);
      setMonths(uniqueMonths);
    }, [accountStatements, selectedStatementDate, selectedYear]);
    const selectedStatement = useStatementEntries(selectedStatementId);
    const { totalDebit, totalCredit, creditDebitDiff } = selectedStatement;
    const selectAccount = useCallback((accountId2) => setAccountId(accountId2), [setAccountId]);
    const latestStatement = useCallback(() => setSelectedStatementId(getNewest()), [setSelectedStatementId, getNewest]);
    const olderStatement = useCallback(() => setSelectedStatementId(getOlderThan(selectedStatementId)), [setSelectedStatementId, getOlderThan, selectedStatementId]);
    const newerStatement = useCallback(() => setSelectedStatementId(getNewerThan(selectedStatementId)), [setSelectedStatementId, getNewerThan, selectedStatementId]);
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
    return /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "grid-container"
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "header"
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "info-and-accounts"
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "info"
    }, /* @__PURE__ */ (0, import_mithril7.default)(Info, null, /* @__PURE__ */ (0, import_mithril7.default)("h1", null, "OBIS | Statements Browser"), /* @__PURE__ */ (0, import_mithril7.default)("h2", null, accountInfo, " \u2022", " ", !isNaN(selectedStatementDate) && simpleDate(selectedStatementDate)), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "balance-summary"
    }, totalCredit > 0 && /* @__PURE__ */ (0, import_mithril7.default)("span", null, convertCentsToDecimalForDisplay(totalCredit), " in"), totalDebit > 0 && /* @__PURE__ */ (0, import_mithril7.default)("span", null, convertCentsToDecimalForDisplay(totalDebit), " out"), creditDebitDiff !== 0 && /* @__PURE__ */ (0, import_mithril7.default)("span", {
      className: clsx_m_default({
        black: creditDebitDiff > 0,
        red: creditDebitDiff < 0
      })
    }, creditDebitDiff <= 0 ? "\u{1F4C9} " : "\u{1F4C8} ", convertCentsToDecimalForDisplay(creditDebitDiff))))), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "accounts"
    }, /* @__PURE__ */ (0, import_mithril7.default)(Accounts2, {
      selectedAccountId: accountId,
      handleClick: selectAccount
    }))), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "cursor-and-months"
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "months"
    }, /* @__PURE__ */ (0, import_mithril7.default)(Months, {
      months,
      selectedMonth,
      handleClick: selectMonth
    })), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "cursor"
    }, /* @__PURE__ */ (0, import_mithril7.default)(Cursor, null, /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: olderStatement
    }, "Older"), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: latestStatement
    }, "\u2022"), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      onclick: newerStatement
    }, "Newer"))))), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "main"
    }, /* @__PURE__ */ (0, import_mithril7.default)(Statement, {
      selectedStatementId
    })), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "years"
    }, /* @__PURE__ */ (0, import_mithril7.default)("div", null, /* @__PURE__ */ (0, import_mithril7.default)(Years, {
      years,
      selectedYear,
      handleClick: selectYear
    }))), /* @__PURE__ */ (0, import_mithril7.default)("div", {
      className: "spacing"
    }));
  });
  var { fetchMachine: fetcher2 } = obis;
  var { messages: messages4 } = obis.deps;
  var { on: on2, emit } = messages4;
  var { Emit: Emit2 } = fetcher2;
  window.store = store2;
  window.actions = actions;
  window.messages = messages4;
  function viewStatements() {
    const windowRef = createStatementsWindow();
    import_mithril8.default.mount(windowRef.document.body, StatementsPicker);
    const offClose = on2(actions.ui.CLOSE_STATEMENTS_WINDOW, () => {
      offClose();
      windowRef.close();
    });
  }
  on2(actions.ui.VIEW_STATEMENTS, viewStatements);
  on2(actions.ui.DOWNLOAD_STATEMENTS, () => {
    makeZip().finally(() => (0, import_promises2.delay)((0, import_timers3.seconds)(3))).finally(Emit2(actions.ui.DOWNLOADED_STATEMENTS));
  });
  function main() {
    emit(actions.ui.RENDERING, import_mithril8.default);
    const rootEl = document.querySelector("#obis-root") || document.body.appendChild(withProps(document.createElement("div"), { id: "obis-root" }));
    import_mithril8.default.mount(rootEl, App);
    const rafRedraw = () => requestAnimationFrame(() => import_mithril8.default.redraw());
    fetcher2.onSwitched(rafRedraw);
    on2(actions.STORE_UPDATED, rafRedraw);
    on2(actions.ui.UPDATE_PROGRESS_BAR, (metrics) => {
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
/*! (c) 2020 Andrea Giammarchi */
obis.registerPlugins([
  {
    "name": "hsbc-uk",
    "description": "HSBC UK",
    "urls": [
      "http://localhost:4000/*",
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.8.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var x2 = Object.defineProperty;
      var T = Object.getOwnPropertyDescriptor;
      var U2 = Object.getOwnPropertyNames;
      var O2 = Object.getOwnPropertySymbols;
      var W2 = Object.prototype.hasOwnProperty;
      var d2 = Object.prototype.propertyIsEnumerable;
      var F2 = (t2, n2, o2) => n2 in t2 ? x2(t2, n2, { enumerable: true, configurable: true, writable: true, value: o2 }) : t2[n2] = o2;
      var R2 = (t2, n2) => {
        for (var o2 in n2 || (n2 = {}))
          W2.call(n2, o2) && F2(t2, o2, n2[o2]);
        if (O2)
          for (var o2 of O2(n2))
            d2.call(n2, o2) && F2(t2, o2, n2[o2]);
        return t2;
      };
      var v2 = (t2, n2) => {
        var o2 = {};
        for (var s2 in t2)
          W2.call(t2, s2) && n2.indexOf(s2) < 0 && (o2[s2] = t2[s2]);
        if (t2 != null && O2)
          for (var s2 of O2(t2))
            n2.indexOf(s2) < 0 && d2.call(t2, s2) && (o2[s2] = t2[s2]);
        return o2;
      };
      var I2 = (t2, n2) => {
        for (var o2 in n2)
          x2(t2, o2, { get: n2[o2], enumerable: true });
      };
      var X2 = (t2, n2, o2, s2) => {
        if (n2 && typeof n2 == "object" || typeof n2 == "function")
          for (let e of U2(n2))
            !W2.call(t2, e) && e !== o2 && x2(t2, e, { get: () => n2[e], enumerable: !(s2 = T(n2, e)) || s2.enumerable });
        return t2;
      };
      var Y2 = (t2) => X2(x2({}, "__esModule", { value: true }), t2);
      var Ct = {};
      I2(Ct, { against: () => G2, allOf: () => K, anyOf: () => J, cata: () => Rt, deepEq: () => ft, defined: () => Nt, empty: () => L2, endsWith: () => qt, eq: () => H2, every: () => lt, falsy: () => It, firstOf: () => Ot, gt: () => wt, gte: () => Wt, hasOwn: () => dt, inRange: () => bt, includedIn: () => Et, includes: () => Dt, instanceOf: () => nt, isArray: () => i2, isDate: () => tt, isFunction: () => c2, isNumber: () => C, isPojo: () => g2, isRegExp: () => A2, isStrictly: () => Ft, isString: () => f2, lastOf: () => xt, lt: () => St, lte: () => Pt, match: () => et, not: () => mt, otherwise: () => rt, pluck: () => gt, some: () => pt, spread: () => Bt, startsWith: () => At, truthy: () => vt, when: () => it });
      module.exports = Y2(Ct);
      var w2 = {};
      I2(w2, { instanceOf: () => P2, isArguments: () => z2, isArray: () => _2, isDate: () => $, isFunction: () => j2, isNumber: () => y2, isObject: () => B2, isPojo: () => a2, isRegExp: () => k2, isString: () => h2 });
      var V = Object.prototype;
      var Z2 = V.toString;
      var N = (t2) => (n2) => typeof n2 === t2;
      var P2 = (t2) => (n2) => n2 instanceof t2;
      var { isArray: _2 } = Array;
      var z2 = (t2) => Z2.call(t2) === "[object Arguments]";
      var $ = (t2) => P2(Date)(t2) && !isNaN(t2);
      var j2 = N("function");
      var h2 = N("string");
      var y2 = (t2) => t2 === t2 && N("number")(t2);
      var B2 = (t2) => t2 !== null && N("object")(t2);
      var k2 = P2(RegExp);
      var a2 = (t2) => t2 === null || !B2(t2) || z2(t2) ? false : Object.getPrototypeOf(t2) === V;
      var { isArray: i2, isDate: tt, isFunction: c2, isNumber: C } = w2;
      var { isPojo: g2, isRegExp: A2, isString: f2, instanceOf: nt } = w2;
      var { keys: u2, entries: ot, assign: st } = Object;
      function et(t2) {
        return (...n2) => G2(...n2)(t2);
      }
      var G2 = (...t2) => {
        let n2;
        return (o2) => t2.find((s2) => {
          let e = s2(o2), { matched: l2, value: p2 } = e || {};
          return [l2, p2].every(c2) ? l2(o2) && (n2 = p2(o2), true) : e && (n2 = e);
        }) && n2;
      };
      var rt = (t2) => (n2) => ({ matched: () => true, value: () => c2(t2) ? t2(n2) : t2 });
      var b2 = (t2) => (n2) => (o2) => ({ matched: () => r2(t2, o2, (s2) => o2 = s2), value: () => c2(n2) ? f2(o2) && A2(t2) ? n2(...ct(o2.match(t2))) : n2(o2) : n2 });
      var it = (...t2) => {
        if (t2.length === 1) {
          let [n2] = t2;
          return b2(n2);
        }
        if (t2.length === 2) {
          let [n2, o2] = t2;
          return b2(n2)(o2);
        }
        if (t2.length > 2) {
          let n2 = t2.slice(-1)[0], o2 = t2.slice(0, -1);
          return b2(K(o2))(n2);
        }
        throw new Error("expected 1 or 2 arguments");
      };
      var ct = (t2) => {
        let { groups: n2 } = t2;
        return n2 ? [n2, t2] : [t2];
      };
      var r2 = (t2, n2, o2) => g2(t2) ? u2(t2).every((s2) => r2(t2[s2], n2 == null ? void 0 : n2[s2], o2)) : i2(t2) ? i2(n2) && t2.length === n2.length && t2.every((s2, e) => r2(s2, n2 == null ? void 0 : n2[e], o2)) : c2(t2) ? t2(n2, o2) : f2(n2) && A2(t2) ? t2.test(n2) : t2 === n2 || [t2, n2].every(Number.isNaN);
      var gt = (...t2) => (n2, o2) => t2.length === 0 || (c2(t2[0]) ? t2[0](n2) : r2(t2[0], n2, o2)) ? (o2(n2), true) : false;
      var ut = (t2, n2) => [t2, n2].every(g2) ? u2(t2).length === u2(n2).length : true;
      var H2 = (t2) => (n2, o2) => ut(t2, n2) && r2(t2, n2, o2);
      var ft = (t2) => q2(t2, (n2) => g2(n2) ? H2(n2) : n2);
      var mt = (t2) => (n2, o2) => !r2(t2, n2, o2);
      var J = (...t2) => (n2, o2) => t2.flat().some((s2) => r2(s2, n2, o2));
      var K = (...t2) => (n2, o2) => t2.flat().every((s2) => r2(s2, n2, o2));
      var lt = (t2) => Q2((n2) => n2.every((o2) => r2(t2, o2)));
      var pt = (t2) => Q2((n2) => n2.some((o2) => r2(t2, o2)));
      var Ot = (...t2) => D2((n2, o2) => t2.length <= n2.length && r2(t2, n2.slice(0, t2.length), o2));
      var xt = (...t2) => D2((n2, o2) => t2.length <= n2.length && r2(t2, n2.slice(n2.length - t2.length), o2));
      var L2 = (t2) => t2 !== t2 || !t2 && t2 !== 0 && t2 !== false || i2(t2) && !t2.length || g2(t2) && !u2(t2).length;
      var Nt = (t2) => !L2(t2);
      var wt = (t2) => m((n2) => n2 > t2);
      var St = (t2) => m((n2) => n2 < t2);
      var Wt = (t2) => m((n2) => n2 >= t2);
      var Pt = (t2) => m((n2) => n2 <= t2);
      var bt = (t2, n2) => m((o2) => o2 >= Math.min(t2, n2) && o2 <= Math.max(t2, n2));
      var At = (t2) => M2((n2) => n2.startsWith(t2));
      var qt = (t2) => M2((n2) => n2.endsWith(t2));
      var Dt = (t2) => D2((n2) => n2.includes(t2));
      var Et = J;
      var Ft = (t2) => (n2) => n2 === t2;
      var dt = (...t2) => (n2) => g2(n2) && (([o2, s2]) => o2.length && o2.every((e) => s2.includes(e)))([t2.flat(), u2(n2)]);
      var Rt = (o2) => {
        var s2 = o2, { getValue: t2 } = s2, n2 = v2(s2, ["getValue"]);
        return ot(n2).reduce((e, [l2, p2]) => st(e, { [l2]: (S2) => (E2) => ({ matched: () => p2(E2), value: () => c2(S2) ? S2(t2(E2)) : S2 }) }), {});
      };
      var vt = (t2) => !!t2;
      var It = (t2) => !t2;
      var Vt = (t2) => (n2, o2) => (n2[o2] = q2(n2[o2], t2), n2);
      var zt = (t2) => (n2) => q2(n2, t2);
      var q2 = (t2, n2) => n2(g2(t2) ? u2(t2).reduce(Vt(n2), R2({}, t2)) : i2(t2) ? t2.map(zt(n2)) : t2);
      var Bt = (t2) => new Proxy({}, { get: () => t2 });
      var M2 = (t2) => (n2) => f2(n2) && t2(n2);
      var m = (t2) => (n2) => C(n2) && t2(n2);
      var Q2 = (t2) => (n2, o2) => i2(n2) && t2(n2, o2);
      var D2 = (t2) => (n2, o2) => (i2(n2) || f2(n2)) && t2(n2, o2);
    }
  });
  var require_fp = __commonJS({
    "src/common/cjs/fp.js"(exports, module) {
      function compose(...fns) {
        return (...x2) => fns.reduceRight((g2, f2) => [f2(...g2)], x2)[0];
      }
      function flow(...fns) {
        return (...x2) => fns.reduce((g2, f2) => [f2(...g2)], x2)[0];
      }
      function pipe(x2, ...fns) {
        return fns.reduce((g2, f2) => f2(g2), x2);
      }
      function flip(fn2) {
        return (...x2) => (...y2) => fn2(...y2)(...x2);
      }
      function do_(f2) {
        return f2();
      }
      function memo(fn2) {
        const table = /* @__PURE__ */ new Map();
        return (x2) => table.has(x2) ? table.get(x2) : table.set(x2, fn2(x2)).get(x2);
      }
      function cache(fn2) {
        const cache2 = /* @__PURE__ */ new Map();
        return (x2) => cache2.has(x2) ? cache2.get(x2) : cache2.set(x2, fn2(x2, invalidater(cache2, x2))).get(x2);
      }
      var invalidater = (cache2, x2) => () => cache2.delete(x2);
      function aside(fn2) {
        return (x2) => (fn2(x2), x2);
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
        return pipe(str.replace(rxConsecutiveWildcards(), "*").split("*").map((x2) => x2.trim()).map(escapeStringForRegExp), against2(when2(hasNoWildcards)(templateMatchExact), when2(hasNoWildcardAtStart)(flow(insertWildcards, templateMatchStart)), when2(hasNoWildcardAtEnd)(flow(insertWildcards, templateMatchEnd)), otherwise2(insertWildcards)), ($) => new RegExp($));
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
        function merge(a2, b2) {
          var merged = {};
          for (var key in a2) {
            merged[key] = a2[key];
          }
          for (var key2 in b2) {
            merged[key2] = b2[key2];
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
              var t2 = this._lookaheadToken(0);
              var error = new Error("Unexpected token type: " + t2.type + ", value: " + t2.value);
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
              var t2 = this._lookaheadToken(0);
              var error = new Error("Expected " + tokenType + ", got: " + t2.type);
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
                var t2 = this._lookahead(0);
                var error = new Error("Syntax error, unexpected token: " + t2.value + "(" + t2.type + ")");
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
              var t2 = this._lookaheadToken(0);
              var error = new Error("Sytanx error, unexpected token: " + t2.value + "(" + t2.type + ")");
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
                for (var j2 = 0; j2 < filtered.length; j2++) {
                  current = this.visit(node.children[1], filtered[j2]);
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
              for (var j2 = 0; j2 < currentSpec.length; j2++) {
                if (this._typeMatches(actualType, currentSpec[j2], args[i2])) {
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
                  if (!this._typeMatches(this._getTypeName(argValue[i2]), subtype, argValue[i2])) {
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
            var requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]));
            if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
              throw new Error("TypeError");
            }
            var that = this;
            var decorated = [];
            for (var i2 = 0; i2 < sortedArray.length; i2++) {
              decorated.push([i2, sortedArray[i2]]);
            }
            decorated.sort(function(a2, b2) {
              var exprA = interpreter.visit(exprefNode, a2[1]);
              var exprB = interpreter.visit(exprefNode, b2[1]);
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
                return a2[0] - b2[0];
              }
            });
            for (var j2 = 0; j2 < decorated.length; j2++) {
              sortedArray[j2] = decorated[j2][1];
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
      function seconds(n2) {
        const ms = n2 * 1e3;
        return ms;
      }
      function Delay(fn2, forMs) {
        const [_fn] = makeDebouncer(forMs, fn2);
        return (...args) => _fn(...args);
      }
      function makeDebouncer(ms, fn2) {
        let timerId;
        const clear = () => clearTimeout(timerId);
        const debouncedFn = (...args) => {
          clear();
          timerId = setTimeout(fn2, ms, ...args);
        };
        return [debouncedFn, clear];
      }
      function makeThrottler(fn2, ms) {
        let canRun = true;
        const [throttle, clear] = makeDebouncer(ms, () => canRun = true);
        const throttledFn = (...args) => {
          if (!canRun)
            return;
          canRun = false;
          throttle();
          fn2(...args);
        };
        return [throttledFn, clear];
      }
      function runAfter(delayInMs, fn2) {
        const [runSoon, cancel] = makeDebouncer(delayInMs, fn2);
        runSoon();
        return cancel;
      }
      function runOnce(fn2) {
        let run = true;
        let predicateFn = () => true;
        const onceFn = (...args) => {
          if (run && predicateFn()) {
            run = false;
            fn2(...args);
          }
        };
        onceFn.when = (fn3) => {
          predicateFn = fn3;
          return onceFn;
        };
        return onceFn;
      }
      function runFnPeriodically(fn2, ms = 16) {
        const cleanup = () => clearInterval(timerId);
        const timerId = setInterval(fn2, ms, { cleanup });
        return cleanup;
      }
      function makeValueChangeDetector({
        onChange = () => {
        },
        getValueFn = () => NaN,
        equalityFn = (a2, b2) => a2 === b2
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
      function runFnWhenValueChanges({ fn: fn2, getValueFn }) {
        const performCheck = makeValueChangeDetector({ getValueFn, onChange: fn2 });
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
        const [pooledPromises, canPromisesRun] = promiseMakerFns.map((fn2) => makePoolAwarePromise(context, fn2)).reduce(...makeUnzipReducer());
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
          const [promise, O2, X2] = makePromise();
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
  function n(n2) {
    for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
      t2[e - 1] = arguments[e];
    if (false) {
      var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
      throw Error("[Immer] " + o2);
    }
    throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
      return "'" + n3 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r(n2) {
    return !!n2 && !!n2[Q];
  }
  function t(n2) {
    return !!n2 && (function(n3) {
      if (!n3 || typeof n3 != "object")
        return false;
      var r2 = Object.getPrototypeOf(n3);
      if (r2 === null)
        return true;
      var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
      return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
    }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
  }
  function i(n2, r2, t2) {
    t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
      t2 && typeof e == "symbol" || r2(e, n2[e], n2);
    }) : n2.forEach(function(t3, e) {
      return r2(e, t3, n2);
    });
  }
  function o(n2) {
    var r2 = n2[Q];
    return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
  }
  function u(n2, r2) {
    return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
  }
  function a(n2, r2) {
    return o(n2) === 2 ? n2.get(r2) : n2[r2];
  }
  function f(n2, r2, t2) {
    var e = o(n2);
    e === 2 ? n2.set(r2, t2) : e === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
  }
  function c(n2, r2) {
    return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
  }
  function s(n2) {
    return X && n2 instanceof Map;
  }
  function v(n2) {
    return q && n2 instanceof Set;
  }
  function p(n2) {
    return n2.o || n2.t;
  }
  function l(n2) {
    if (Array.isArray(n2))
      return Array.prototype.slice.call(n2);
    var r2 = rn(n2);
    delete r2[Q];
    for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
      var i2 = t2[e], o2 = r2[i2];
      o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
    }
    return Object.create(Object.getPrototypeOf(n2), r2);
  }
  function d(n2, e) {
    return e === void 0 && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
      return d(r2, true);
    }, true), n2);
  }
  function h() {
    n(2);
  }
  function y(n2) {
    return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
  }
  function b(r2) {
    var t2 = tn[r2];
    return t2 || n(18, r2), t2;
  }
  function _() {
    return true, U;
  }
  function j(n2, r2) {
    r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
  }
  function O(n2) {
    g(n2), n2.p.forEach(S), n2.p = null;
  }
  function g(n2) {
    n2 === U && (U = n2.l);
  }
  function w(n2) {
    return U = { p: [], l: U, h: n2, m: true, _: 0 };
  }
  function S(n2) {
    var r2 = n2[Q];
    r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
  }
  function P(r2, e) {
    e._ = e.p.length;
    var i2 = e.p[0], o2 = r2 !== void 0 && r2 !== i2;
    return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
  }
  function M(n2, r2, t2) {
    if (y(r2))
      return r2;
    var e = r2[Q];
    if (!e)
      return i(r2, function(i2, o3) {
        return A(n2, e, r2, i2, o3, t2);
      }, true), r2;
    if (e.A !== n2)
      return r2;
    if (!e.P)
      return x(n2, e.t, true), e.t;
    if (!e.I) {
      e.I = true, e.A._--;
      var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
      i(e.i === 3 ? new Set(o2) : o2, function(r3, i2) {
        return A(n2, e, o2, r3, i2, t2);
      }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
    }
    return e.o;
  }
  function A(e, i2, o2, a2, c2, s2) {
    if (false, r(c2)) {
      var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
      if (f(o2, a2, v2), !r(v2))
        return;
      e.m = false;
    }
    if (t(c2) && !y(c2)) {
      if (!e.h.F && e._ < 1)
        return;
      M(e, c2), i2 && i2.A.l || x(e, c2);
    }
  }
  function x(n2, r2, t2) {
    t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
  }
  function z(n2, r2) {
    var t2 = n2[Q];
    return (t2 ? p(t2) : n2)[r2];
  }
  function I(n2, r2) {
    if (r2 in n2)
      for (var t2 = Object.getPrototypeOf(n2); t2; ) {
        var e = Object.getOwnPropertyDescriptor(t2, r2);
        if (e)
          return e;
        t2 = Object.getPrototypeOf(t2);
      }
  }
  function k(n2) {
    n2.P || (n2.P = true, n2.l && k(n2.l));
  }
  function E(n2) {
    n2.o || (n2.o = l(n2.t));
  }
  function R(n2, r2, t2) {
    var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
      var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
      t3 && (i2 = [e2], o2 = on);
      var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
      return e2.k = f2, e2.j = a2, f2;
    }(r2, t2) : b("ES5").J(r2, t2);
    return (t2 ? t2.A : _()).p.push(e), e;
  }
  function D(e) {
    return r(e) || n(22, e), function n2(r2) {
      if (!t(r2))
        return r2;
      var e2, u2 = r2[Q], c2 = o(r2);
      if (u2) {
        if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
          return u2.t;
        u2.I = true, e2 = F(r2, c2), u2.I = false;
      } else
        e2 = F(r2, c2);
      return i(e2, function(r3, t2) {
        u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
      }), c2 === 3 ? new Set(e2) : e2;
    }(e);
  }
  function F(n2, r2) {
    switch (r2) {
      case 2:
        return new Map(n2);
      case 3:
        return Array.from(n2);
    }
    return l(n2);
  }
  var G;
  var U;
  var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var X = typeof Map != "undefined";
  var q = typeof Set != "undefined";
  var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
  var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Z = "" + Object.prototype.constructor;
  var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
    return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
  } : Object.getOwnPropertyNames;
  var rn = Object.getOwnPropertyDescriptors || function(n2) {
    var r2 = {};
    return nn(n2).forEach(function(t2) {
      r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
    }), r2;
  };
  var tn = {};
  var en = { get: function(n2, r2) {
    if (r2 === Q)
      return n2;
    var e = p(n2);
    if (!u(e, r2))
      return function(n3, r3, t2) {
        var e2, i3 = I(r3, t2);
        return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
      }(n2, e, r2);
    var i2 = e[r2];
    return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
  }, has: function(n2, r2) {
    return r2 in p(n2);
  }, ownKeys: function(n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function(n2, r2, t2) {
    var e = I(p(n2), r2);
    if (e == null ? void 0 : e.set)
      return e.set.call(n2.k, t2), true;
    if (!n2.P) {
      var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === t2)
        return n2.o[r2] = t2, n2.D[r2] = false, true;
      if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
        return true;
      E(n2), k(n2);
    }
    return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
  }, deleteProperty: function(n2, r2) {
    return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  }, getOwnPropertyDescriptor: function(n2, r2) {
    var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2] } : e;
  }, defineProperty: function() {
    n(11);
  }, getPrototypeOf: function(n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function() {
    n(12);
  } };
  var on = {};
  i(en, function(n2, r2) {
    on[n2] = function() {
      return arguments[0] = arguments[0][0], r2.apply(this, arguments);
    };
  }), on.deleteProperty = function(r2, t2) {
    return false, on.set.call(this, r2, t2, void 0);
  }, on.set = function(r2, t2, e) {
    return false, en.set.call(this, r2[0], t2, e, r2[0]);
  };
  var un = function() {
    function e(r2) {
      var e2 = this;
      this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
        if (typeof r3 == "function" && typeof i3 != "function") {
          var u2 = i3;
          i3 = r3;
          var a2 = e2;
          return function(n2) {
            var r4 = this;
            n2 === void 0 && (n2 = u2);
            for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
              e3[o3 - 1] = arguments[o3];
            return a2.produce(n2, function(n3) {
              var t3;
              return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
            });
          };
        }
        var f2;
        if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
          var c2 = w(e2), s2 = R(e2, r3, void 0), v2 = true;
          try {
            f2 = i3(s2), v2 = false;
          } finally {
            v2 ? O(c2) : g(c2);
          }
          return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c2, o2), P(n2, c2);
          }, function(n2) {
            throw O(c2), n2;
          }) : (j(c2, o2), P(f2, c2));
        }
        if (!r3 || typeof r3 != "object") {
          if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e2.F && d(f2, true), o2) {
            var p2 = [], l2 = [];
            b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
          }
          return f2;
        }
        n(21, r3);
      }, this.produceWithPatches = function(n2, r3) {
        if (typeof n2 == "function")
          return function(r4) {
            for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
              i4[o3 - 1] = arguments[o3];
            return e2.produceWithPatches(r4, function(r5) {
              return n2.apply(void 0, [r5].concat(i4));
            });
          };
        var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
          t2 = n3, i3 = r4;
        });
        return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
          return [n3, t2, i3];
        }) : [o2, t2, i3];
      }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
    }
    var i2 = e.prototype;
    return i2.createDraft = function(e2) {
      t(e2) || n(8), r(e2) && (e2 = D(e2));
      var i3 = w(this), o2 = R(this, e2, void 0);
      return o2[Q].C = true, g(i3), o2;
    }, i2.finishDraft = function(r2, t2) {
      var e2 = r2 && r2[Q];
      var i3 = e2.A;
      return j(i3, t2), P(void 0, i3);
    }, i2.setAutoFreeze = function(n2) {
      this.F = n2;
    }, i2.setUseProxies = function(r2) {
      r2 && !B && n(20), this.g = r2;
    }, i2.applyPatches = function(n2, t2) {
      var e2;
      for (e2 = t2.length - 1; e2 >= 0; e2--) {
        var i3 = t2[e2];
        if (i3.path.length === 0 && i3.op === "replace") {
          n2 = i3.value;
          break;
        }
      }
      e2 > -1 && (t2 = t2.slice(e2 + 1));
      var o2 = b("Patches").$;
      return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
        return o2(n3, t2);
      });
    }, e;
  }();
  var an = new un();
  var fn = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);
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
      const off2 = on2(eventNameOrPattern, handle);
      return off2;
      function handle(...args) {
        cb(...args);
        off2();
      }
    }
    return {
      emit,
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
    const errorDescs = permittedArgTypes.map((argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)).filter(isString2);
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
    const nextStore = fn(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForAddingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x2) => x2.id === account.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      accounts.forEach((account) => {
        const err = checkSchemaForUpdatingAnAccount(account);
        if (err) {
          throw TypeError(err);
        }
        const existingAccount = draftState.accounts.find((x2) => x2.id === account.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForAddingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find((x2) => x2.id === statement.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForUpdatingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find((x2) => x2.id === statement.id);
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
    const nextStore = fn(currentStore, (draftState) => {
      entries.forEach((entry) => {
        const err = checkSchemaForAddingAnEntry(entry);
        if (err) {
          throw TypeError(err);
        }
        const existingEntry = draftState.entries.find((x2) => x2.id === entry.id);
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
    if (!cents || typeof cents !== "number") {
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
    return dateTime + "_" + md5(dateTime + (index !== void 0 ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount);
  }
  var import_jmespath = __toESM(require_jmespath());
  var Nothing = () => ({
    valueOf: () => void 0,
    toString: () => "Nothing",
    map: () => Nothing(),
    chain: () => Nothing(),
    fork: (f2) => f2(),
    orElse: (f2) => f2(),
    ap: () => Nothing(),
    isNothing: true,
    isJust: false
  });
  Nothing.of = () => Nothing();
  var Just = (x2) => ({
    valueOf: () => x2,
    toString: () => `Just(${x2})`,
    map: (f2) => Just(f2(x2)),
    chain: (f2) => f2(x2),
    fork: (_2, g2) => g2(x2),
    orElse: () => Just(x2),
    ap: (m) => m.map(x2),
    isNothing: false,
    isJust: true
  });
  Just.of = (x2) => Just(x2);
  var safe = (predicate = (x2) => x2 != null) => {
    const Maybe2 = (x2) => {
      return predicate(x2) ? Just(x2) : Nothing();
    };
    Maybe2.of = (x2) => Maybe2(x2);
    return Maybe2;
  };
  var maybeTry = (f2) => (x2) => {
    try {
      return Just(f2(x2));
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
    return (arr) => arr.map(pred);
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
  } = {}) => fetch(makeTransactionsUrl({
    host,
    accountId,
    productCategoryCode,
    transactionStartDate,
    transactionEndDate
  }), {
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
    const [debit, credit] = (amount < 0 ? [amount, 0] : [0, amount]).map((x2) => x2 * 100).map(Math.abs).map(Math.round);
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
      "idle -> getting-accounts": {
        on: actions.get.ACCOUNTS,
        then: (requestedYearsToDownload) => fetchAccounts().then((accountsResponse) => {
          const accountsUpdate = accountsResponse.map((accountResponse) => {
            const [sortCode, accountNumber] = accountResponse.sortCodeAndAccountNumber.split(" ");
            return {
              id: accountResponse.id,
              accountNumber,
              sortCode,
              name: accountResponse.accountHolderName,
              type: accountResponse.productCode,
              ledgerBalance: Math.round(accountResponse.ledgerBalance * 100),
              lastUpdatedTimestamp: new Date(accountResponse.lastUpdatedDate).getTime(),
              iban: LEAVE_UNCHANGED,
              bic: LEAVE_UNCHANGED
            };
          });
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
      "found-accounts -> getting-statements": {
        on: actions.get.STATEMENTS,
        then: ({ statementsQueries, yearsToDownload }) => {
          const progress = updateProgressBar(statementsQueries.length);
          progress(0);
          const fetchStatementsJobs = statementsQueries.map((statementsQuery, idx) => {
            const { accountId, productCategoryCode } = statementsQuery;
            return pool(() => {
              progress(idx + 1);
              return fetchStatementsList(statementsQuery).then(map((statementsResponse) => {
                const { endDate, accountNumber: mashed } = statementsResponse;
                const [, sortCode1, sortCode2, sortCode3, accountNumber] = mashed.match(/^(\d{2})(\d{2})(\d{2})(\d{8})$/);
                const sortCode = `${sortCode1}-${sortCode2}-${sortCode3}`;
                return {
                  id: statementsResponse.id,
                  accountId,
                  sortCode,
                  accountNumber,
                  productCategoryCode,
                  endDate
                };
              }));
            });
          });
          Promise.allSettled(fetchStatementsJobs).then(onlyFulfilled).then((allAcctStatements) => {
            const allStatements = allAcctStatements.flat();
            if (allStatements.length === 0) {
              fetcher.emit(actions.error.STATEMENTS);
              return;
            }
            const statementsUpdate = allStatements.map(({ id, accountId, endDate: endDateString }) => {
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
            });
            emit(actions.add.STATEMENTS, statementsUpdate);
            emit(actions.got.STATEMENTS, { allStatements, yearsToDownload });
          });
        }
      },
      "getting-statements -> found-statements": {
        on: actions.got.STATEMENTS,
        then: ({ allStatements, yearsToDownload }) => {
          const accountsTransactionsQueries = allStatements.map(({ id, accountId, endDate: endDateString, productCategoryCode }) => {
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
          });
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
      "found-statements -> getting-entries": {
        on: actions.get.ENTRIES,
        then: ({ accountsTransactionsQueries, yearsToDownload }) => {
          const progress = updateProgressBar(accountsTransactionsQueries.length);
          progress(0);
          const fetchAccountsTransactionsJobs = accountsTransactionsQueries.map((query, idx) => {
            const { id, accountId } = query;
            return pool(() => {
              progress(idx + 1);
              return fetchTransactions(query).then(map((transaction) => ({
                accountId,
                statementId: id,
                ...transaction
              })));
            });
          });
          Promise.allSettled(fetchAccountsTransactionsJobs).then(onlyFulfilled).then((allTransactionsInAccount) => {
            const allTransactions = allTransactionsInAccount.flat();
            if (allTransactions.length === 0) {
              fetcher.emit(actions.error.ENTRIES);
              return;
            }
            allTransactions.map((transaction) => {
              const { date, debit, credit, type, payee, note } = transaction;
              const { accountNumber, sortCode } = store().accounts.find((acct) => acct.id === transaction.accountId);
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
