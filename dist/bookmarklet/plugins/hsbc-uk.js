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
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/match-iz@3.9.0/node_modules/match-iz/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@3.9.0/node_modules/match-iz/dist/index.js"(exports, module) {
      var I2 = Object.defineProperty;
      var _2 = Object.getOwnPropertyDescriptor;
      var j2 = Object.getOwnPropertyNames;
      var v2 = Object.getOwnPropertySymbols;
      var D2 = Object.prototype.hasOwnProperty;
      var L2 = Object.prototype.propertyIsEnumerable;
      var E2 = (t2, n2, e) => n2 in t2 ? I2(t2, n2, { enumerable: true, configurable: true, writable: true, value: e }) : t2[n2] = e;
      var P2 = (t2, n2) => {
        for (var e in n2 || (n2 = {}))
          D2.call(n2, e) && E2(t2, e, n2[e]);
        if (v2)
          for (var e of v2(n2))
            L2.call(n2, e) && E2(t2, e, n2[e]);
        return t2;
      };
      var q2 = (t2, n2) => {
        var e = {};
        for (var o2 in t2)
          D2.call(t2, o2) && n2.indexOf(o2) < 0 && (e[o2] = t2[o2]);
        if (t2 != null && v2)
          for (var o2 of v2(t2))
            n2.indexOf(o2) < 0 && L2.call(t2, o2) && (e[o2] = t2[o2]);
        return e;
      };
      var R2 = (t2, n2) => {
        for (var e in n2)
          I2(t2, e, { get: n2[e], enumerable: true });
      };
      var y2 = (t2, n2, e, o2) => {
        if (n2 && typeof n2 == "object" || typeof n2 == "function")
          for (let r2 of j2(n2))
            !D2.call(t2, r2) && r2 !== e && I2(t2, r2, { get: () => n2[r2], enumerable: !(o2 = _2(n2, r2)) || o2.enumerable });
        return t2;
      };
      var a2 = (t2) => y2(I2({}, "__esModule", { value: true }), t2);
      var yt = {};
      R2(yt, { against: () => C, allOf: () => Q2, anyOf: () => K, cata: () => Tt, deepEq: () => Mt, defined: () => Vt, empty: () => T, endsWith: () => Ct, eq: () => J, every: () => Lt, falsy: () => Yt, firstOf: () => qt, getIterationLimit: () => bt, gt: () => ht, gte: () => Ht, hasOwn: () => Qt, inRange: () => $t, includedIn: () => Jt, includes: () => Gt, instanceOf: () => gt, isArray: () => l2, isDate: () => ft, isFunction: () => f2, isIterable: () => B2, isNumber: () => $, isPojo: () => g2, isRegExp: () => W2, isStrictly: () => Kt, isString: () => b2, lastOf: () => Rt, lt: () => zt, lte: () => Ut, match: () => vt, not: () => Et, otherwise: () => xt, pluck: () => Wt, setIterationLimit: () => Nt, some: () => Pt, spread: () => jt, startsWith: () => Bt, truthy: () => Xt, when: () => Dt });
      module.exports = a2(yt);
      var d2 = {};
      R2(d2, { instanceOf: () => p2, isArguments: () => h2, isArray: () => tt, isDate: () => nt, isFormData: () => mt, isFunction: () => z2, isIterable: () => ut, isMap: () => it, isNumber: () => ot, isObject: () => H2, isPojo: () => ct, isRegExp: () => rt, isSet: () => st, isString: () => et });
      var V = Object.prototype;
      var k2 = V.toString;
      var x2 = (t2) => (n2) => typeof n2 === t2;
      var p2 = (t2) => (n2) => n2 instanceof t2;
      var { isArray: tt } = Array;
      var h2 = (t2) => k2.call(t2) === "[object Arguments]";
      var nt = (t2) => p2(Date)(t2) && !isNaN(t2);
      var z2 = x2("function");
      var et = x2("string");
      var ot = (t2) => t2 === t2 && x2("number")(t2);
      var H2 = (t2) => t2 !== null && x2("object")(t2);
      var rt = p2(RegExp);
      var st = p2(Set);
      var it = p2(Map);
      var ct = (t2) => t2 === null || !H2(t2) || h2(t2) ? false : Object.getPrototypeOf(t2) === V;
      var ut = (t2) => t2 != null && [t2[Symbol.iterator], t2.next].every(z2);
      var mt = (t2) => typeof FormData != "undefined" && p2(FormData)(t2);
      var { isArguments: lt, isArray: l2, isDate: ft, isFunction: f2, isNumber: $ } = d2;
      var { isPojo: g2, isRegExp: W2, isString: b2, instanceOf: gt } = d2;
      var { isMap: pt, isSet: Ot, isIterable: B2, isFormData: wt } = d2;
      var { keys: w2, entries: St, assign: dt } = Object;
      var O2 = 2e4;
      var bt = () => O2;
      var Nt = (t2) => {
        let n2 = O2;
        return O2 = t2, () => O2 = n2;
      };
      function vt(t2) {
        return (...n2) => C(...n2)(t2);
      }
      var C = (...t2) => (n2) => {
        let [e, o2] = lt(n2) ? [{}, Array.from(n2)] : pt(n2) || wt(n2) ? [{ isMap: true }, n2.entries()] : Ot(n2) ? [{ isSet: true }, n2.values()] : [{}, n2];
        if (!B2(o2))
          return U2(...t2)(o2).result;
        let [r2, u2] = t2.reduce(([s2, m], S2) => It(S2) ? [S2, m] : [s2, [...m, S2]], [() => ({ value: () => {
        } }), []]), c2 = [];
        do {
          let { value: s2, done: m } = o2.next();
          if (m)
            return r2().value();
          c2.push(s2);
          let { found: S2, result: Z2 } = U2(...u2)(e.isSet ? s2 : e.isMap ? { key: s2[0], value: s2[1] } : [...c2]);
          if (S2)
            return Z2;
        } while (c2.length < O2 || e.isSet || e.isMap);
        throw new Error(`Hit iterationLimit: ${O2}. Use setIterationLimit(Infinity) to disable.`);
      };
      var U2 = (...t2) => {
        let n2;
        return (e) => ({ found: !!t2.find((r2) => {
          let u2 = r2(e), { matched: c2, value: s2 } = u2 || {};
          return [c2, s2].every(f2) ? c2(e) && (n2 = s2(e), true) : u2 && (n2 = u2);
        }), result: n2 });
      };
      var G2 = Symbol("@@match-iz/otherwise");
      var It = (t2) => (t2 == null ? void 0 : t2[G2]) === true;
      var xt = (t2) => {
        let n2 = (e) => ({ matched: () => true, value: () => f2(t2) ? t2(e) : t2 });
        return n2[G2] = true, n2;
      };
      var F2 = (t2) => (n2) => (e) => ({ matched: () => i2(t2, e, (o2) => e = o2), value: () => f2(n2) ? b2(e) && W2(t2) ? n2(...Ft(e.match(t2))) : n2(e) : n2 });
      var Dt = (...t2) => {
        if (t2.length === 1) {
          let [n2] = t2;
          return F2(n2);
        }
        if (t2.length === 2) {
          let [n2, e] = t2;
          return F2(n2)(e);
        }
        if (t2.length > 2) {
          let n2 = t2.slice(-1)[0], e = t2.slice(0, -1);
          return F2(Q2(e))(n2);
        }
        throw new Error("Expected at least 1 argument");
      };
      var Ft = (t2) => {
        let { groups: n2 } = t2;
        return n2 ? [n2, t2] : [t2];
      };
      var i2 = (t2, n2, e) => g2(t2) ? w2(t2).every((o2) => i2(t2[o2], n2 == null ? void 0 : n2[o2], e)) : l2(t2) ? l2(n2) && t2.length === n2.length && t2.every((o2, r2) => i2(o2, n2 == null ? void 0 : n2[r2], e)) : f2(t2) ? t2(n2, e) : b2(n2) && W2(t2) ? t2.test(n2) : t2 === n2 || [t2, n2].every(Number.isNaN);
      var Wt = (...t2) => (n2, e) => t2.length === 0 || (f2(t2[0]) ? t2[0](n2) : i2(t2[0], n2, e)) ? (e(n2), true) : false;
      var At = (t2, n2) => [t2, n2].every(g2) ? w2(t2).length === w2(n2).length : true;
      var J = (t2) => (n2, e) => At(t2, n2) && i2(t2, n2, e);
      var Mt = (t2) => A2(t2, (n2) => g2(n2) ? J(n2) : n2);
      var Et = (t2) => (n2, e) => !i2(t2, n2, e);
      var K = (...t2) => (n2, e) => t2.flat().some((o2) => i2(o2, n2, e));
      var Q2 = (...t2) => (n2, e) => t2.flat().every((o2) => i2(o2, n2, e));
      var Lt = (t2) => Y((n2) => n2.every((e) => i2(t2, e)));
      var Pt = (t2) => Y((n2) => n2.some((e) => i2(t2, e)));
      var qt = (...t2) => M2((n2, e) => t2.length <= n2.length && i2(t2, n2.slice(0, t2.length), e));
      var Rt = (...t2) => M2((n2, e) => t2.length <= n2.length && i2(t2, n2.slice(n2.length - t2.length), e));
      var T = (t2) => t2 !== t2 || !t2 && t2 !== 0 && t2 !== false || l2(t2) && !t2.length || g2(t2) && !w2(t2).length;
      var Vt = (t2) => !T(t2);
      var ht = (t2) => N((n2) => n2 > t2);
      var zt = (t2) => N((n2) => n2 < t2);
      var Ht = (t2) => N((n2) => n2 >= t2);
      var Ut = (t2) => N((n2) => n2 <= t2);
      var $t = (t2, n2) => N((e) => e >= Math.min(t2, n2) && e <= Math.max(t2, n2));
      var Bt = (t2) => X2((n2) => n2.startsWith(t2));
      var Ct = (t2) => X2((n2) => n2.endsWith(t2));
      var Gt = (t2) => M2((n2) => n2.includes(t2));
      var Jt = K;
      var Kt = (t2) => (n2) => n2 === t2;
      var Qt = (...t2) => (n2) => g2(n2) && (([e, o2]) => e.length && e.every((r2) => o2.includes(r2)))([t2.flat(), w2(n2)]);
      var Tt = (e) => {
        var o2 = e, { getValue: t2 } = o2, n2 = q2(o2, ["getValue"]);
        return St(n2).reduce((r2, [u2, c2]) => dt(r2, { [u2]: (s2) => (m) => ({ matched: () => c2(m), value: () => f2(s2) ? s2(t2(m)) : s2 }) }), {});
      };
      var Xt = (t2) => !!t2;
      var Yt = (t2) => !t2;
      var Zt = (t2) => (n2, e) => (n2[e] = A2(n2[e], t2), n2);
      var _t = (t2) => (n2) => A2(n2, t2);
      var A2 = (t2, n2) => n2(g2(t2) ? w2(t2).reduce(Zt(n2), P2({}, t2)) : l2(t2) ? t2.map(_t(n2)) : t2);
      var jt = (t2) => new Proxy({}, { get: () => t2 });
      var X2 = (t2) => (n2) => b2(n2) && t2(n2);
      var N = (t2) => (n2) => $(n2) && t2(n2);
      var Y = (t2) => (n2, e) => l2(n2) && t2(n2, e);
      var M2 = (t2) => (n2, e) => (l2(n2) || b2(n2)) && t2(n2, e);
    }
  });

  // src/common/cjs/fp.js
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

  // src/common/cjs/regexp.js
  var require_regexp = __commonJS({
    "src/common/cjs/regexp.js"(exports, module) {
      var { against: against2, when: when2, otherwise: otherwise2, isString: isString3 } = require_dist();
      var { pipe, flow, memo } = require_fp();
      var makeRegExpFromWildcardString2 = memo((str) => {
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
        makeRegExpFromWildcardString: makeRegExpFromWildcardString2,
        escapeStringForRegExp
      };
    }
  });

  // node_modules/.pnpm/jmespath@0.16.0/node_modules/jmespath/jmespath.js
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
              var error = new Error(
                "Unexpected token type: " + t2.type + ", value: " + t2.value
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
            decorated.sort(function(a2, b2) {
              var exprA = interpreter.visit(exprefNode, a2[1]);
              var exprB = interpreter.visit(exprefNode, b2[1]);
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

  // src/common/cjs/timers.js
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

  // src/common/cjs/promises.js
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

  // node_modules/.pnpm/immer@9.0.15/node_modules/immer/dist/immer.esm.mjs
  function n(n2) {
    for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
      t2[e - 1] = arguments[e];
    if (false) {
      var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
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
      if (!n3 || "object" != typeof n3)
        return false;
      var r2 = Object.getPrototypeOf(n3);
      if (null === r2)
        return true;
      var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
      return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
    }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
  }
  function i(n2, r2, t2) {
    void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
      t2 && "symbol" == typeof e || r2(e, n2[e], n2);
    }) : n2.forEach(function(t3, e) {
      return r2(e, t3, n2);
    });
  }
  function o(n2) {
    var r2 = n2[Q];
    return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
  }
  function u(n2, r2) {
    return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
  }
  function a(n2, r2) {
    return 2 === o(n2) ? n2.get(r2) : n2[r2];
  }
  function f(n2, r2, t2) {
    var e = o(n2);
    2 === e ? n2.set(r2, t2) : 3 === e ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
  }
  function c(n2, r2) {
    return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
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
      false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
    }
    return Object.create(Object.getPrototypeOf(n2), r2);
  }
  function d(n2, e) {
    return void 0 === e && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
      return d(r2, true);
    }, true), n2);
  }
  function h() {
    n(2);
  }
  function y(n2) {
    return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
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
    0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
  }
  function P(r2, e) {
    e._ = e.p.length;
    var i2 = e.p[0], o2 = void 0 !== r2 && r2 !== i2;
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
      var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
      i(3 === e.i ? new Set(o2) : o2, function(r3, i2) {
        return A(n2, e, o2, r3, i2, t2);
      }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
    }
    return e.o;
  }
  function A(e, i2, o2, a2, c2, s2) {
    if (false, r(c2)) {
      var v2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.D, a2) ? s2.concat(a2) : void 0);
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
    void 0 === t2 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
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
      }), 3 === c2 ? new Set(e2) : e2;
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
  var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
  var X = "undefined" != typeof Map;
  var q = "undefined" != typeof Set;
  var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
  var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Z = "" + Object.prototype.constructor;
  var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
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
        return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
      }(n2, e, r2);
    var i2 = e[r2];
    return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
  }, has: function(n2, r2) {
    return r2 in p(n2);
  }, ownKeys: function(n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function(n2, r2, t2) {
    var e = I(p(n2), r2);
    if (null == e ? void 0 : e.set)
      return e.set.call(n2.k, t2), true;
    if (!n2.P) {
      var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
      if (o2 && o2.t === t2)
        return n2.o[r2] = t2, n2.D[r2] = false, true;
      if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
        return true;
      E(n2), k(n2);
    }
    return n2.o[r2] === t2 && "number" != typeof t2 && (void 0 !== t2 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
  }, deleteProperty: function(n2, r2) {
    return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  }, getOwnPropertyDescriptor: function(n2, r2) {
    var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e.enumerable, value: t2[r2] } : e;
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
        if ("function" == typeof r3 && "function" != typeof i3) {
          var u2 = i3;
          i3 = r3;
          var a2 = e2;
          return function(n2) {
            var r4 = this;
            void 0 === n2 && (n2 = u2);
            for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
              e3[o3 - 1] = arguments[o3];
            return a2.produce(n2, function(n3) {
              var t3;
              return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
            });
          };
        }
        var f2;
        if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
          var c2 = w(e2), s2 = R(e2, r3, void 0), v2 = true;
          try {
            f2 = i3(s2), v2 = false;
          } finally {
            v2 ? O(c2) : g(c2);
          }
          return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c2, o2), P(n2, c2);
          }, function(n2) {
            throw O(c2), n2;
          }) : (j(c2, o2), P(f2, c2));
        }
        if (!r3 || "object" != typeof r3) {
          if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e2.F && d(f2, true), o2) {
            var p2 = [], l2 = [];
            b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
          }
          return f2;
        }
        n(21, r3);
      }, this.produceWithPatches = function(n2, r3) {
        if ("function" == typeof n2)
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
        return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
          return [n3, t2, i3];
        }) : [o2, t2, i3];
      }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
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
        if (0 === i3.path.length && "replace" === i3.op) {
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

  // src/common/esm/bus.js
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
    let global;
    try {
      global = window;
    } catch (e) {
      global = self;
    }
    const BUS = "message-bus";
    const eventMap = /* @__PURE__ */ new Map();
    function emit(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event = new CustomEvent(BUS, { detail });
      global.dispatchEvent(event);
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
      global.addEventListener(BUS, eventHandler);
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
      global.removeEventListener(BUS, eventHandler);
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

  // src/common/esm/types.js
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
          (x2) => isArguments(x2) ? Array.from(x2) : x2
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

  // src/common/obis/store.js
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
        const existingStatement = draftState.statements.find(
          (x2) => x2.id === statement.id
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
    const nextStore = fn(currentStore, (draftState) => {
      statements.forEach((statement) => {
        const err = checkSchemaForUpdatingAStatement(statement);
        if (err) {
          throw TypeError(err);
        }
        const existingStatement = draftState.statements.find(
          (x2) => x2.id === statement.id
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

  // src/common/obis/utils/dates.js
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

  // src/common/obis/utils/currency.js
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

  // src/common/esm/md5.js
  var { SparkMD5 } = obis.deps;
  function md5(str) {
    return SparkMD5.hash(str);
  }

  // src/common/obis/generators.js
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

  // src/plugins/hsbc-uk/api/accounts.js
  var import_jmespath = __toESM(require_jmespath());

  // src/common/esm/maybe.js
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

  // src/plugins/hsbc-uk/helpers.js
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

  // src/plugins/hsbc-uk/urls.js
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

  // src/plugins/hsbc-uk/api/accounts.js
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

  // src/plugins/hsbc-uk/api/statements.js
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

  // src/plugins/hsbc-uk/api/transactions.js
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
    const [debit, credit] = (amount < 0 ? [amount, 0] : [0, amount]).map((x2) => x2 * 100).map(Math.abs).map(Math.round);
    return { debit, credit };
  }

  // src/plugins/hsbc-uk/plugin.js
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
