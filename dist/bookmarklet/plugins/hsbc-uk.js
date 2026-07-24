(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
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

  // node_modules/.pnpm/match-iz@5.1.1/node_modules/match-iz/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/match-iz@5.1.1/node_modules/match-iz/dist/index.js"(exports, module) {
      var N = Object.defineProperty;
      var rt = Object.getOwnPropertyDescriptor;
      var ot = Object.getOwnPropertyNames;
      var y = Object.getOwnPropertySymbols;
      var M = Object.prototype.hasOwnProperty;
      var C = Object.prototype.propertyIsEnumerable;
      var z = (t, e, n) => e in t ? N(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
      var H = (t, e) => {
        for (var n in e || (e = {})) M.call(e, n) && z(t, n, e[n]);
        if (y) for (var n of y(e)) C.call(e, n) && z(t, n, e[n]);
        return t;
      };
      var V = (t, e) => {
        var n = {};
        for (var s in t) M.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
        if (t != null && y) for (var s of y(t)) e.indexOf(s) < 0 && C.call(t, s) && (n[s] = t[s]);
        return n;
      };
      var $ = (t, e) => {
        for (var n in e) N(t, n, { get: e[n], enumerable: true });
      };
      var it = (t, e, n, s) => {
        if (e && typeof e == "object" || typeof e == "function") for (let r of ot(e)) !M.call(t, r) && r !== n && N(t, r, { get: () => e[r], enumerable: !(s = rt(e, r)) || s.enumerable });
        return t;
      };
      var ct = (t) => it(N({}, "__esModule", { value: true }), t);
      var le = {};
      $(le, { against: () => Z, allOf: () => tt, anyOf: () => k, cata: () => se, deepEq: () => Ht, defined: () => Gt, empty: () => et, endsWith: () => xt, eq: () => x, every: () => $t, falsy: () => oe, firstOf: () => Jt, getIterationLimit: () => It, gt: () => Qt, gte: () => Xt, hasOwn: () => ne, inRange: () => Zt, includedIn: () => te, includes: () => kt, instanceOf: () => vt, isArray: () => p, isDate: () => bt, isFunction: () => a, isIterable: () => Y, isNumber: () => X, isPojo: () => d, isRegExp: () => P, isStrictly: () => ee, isString: () => v, lastOf: () => Ut, lt: () => Tt, lte: () => Yt, match: () => Kt, not: () => Vt, otherwise: () => Wt, pluck: () => qt, rest: () => zt, setIterationLimit: () => Mt, some: () => Bt, spread: () => ue, startsWith: () => _t, truthy: () => re, when: () => Lt });
      module.exports = ct(le);
      var b = {};
      $(b, { instanceOf: () => w, isArguments: () => J, isArray: () => lt, isDate: () => ft, isFormData: () => Ot, isFunction: () => U, isIterable: () => wt, isMap: () => dt, isNumber: () => gt, isObject: () => G, isPojo: () => ht, isRegExp: () => pt, isSet: () => at, isString: () => mt });
      var B = Object.prototype;
      var ut = B.toString;
      var D = (t) => (e) => typeof e === t;
      var w = (t) => (e) => e instanceof t;
      function m(t, e) {
        let n = { [e]: function(...s) {
          return t.apply(this, s);
        } }[e];
        return Object.defineProperty(n, "name", { value: e }), n;
      }
      var lt = m(Array.isArray, "isArray");
      var J = m((t) => ut.call(t) === "[object Arguments]", "isArguments");
      var ft = m((t) => w(Date)(t) && !isNaN(t), "isDate");
      var U = m(D("function"), "isFunction");
      var mt = m(D("string"), "isString");
      var gt = m((t) => t === t && D("number")(t), "isNumber");
      var G = m((t) => t !== null && D("object")(t), "isObject");
      var pt = m(w(RegExp), "isRegExp");
      var at = m(w(Set), "isSet");
      var dt = m(w(Map), "isMap");
      var ht = m((t) => t === null || !G(t) || J(t) ? false : Object.getPrototypeOf(t) === B, "isPojo");
      var wt = m((t) => t != null && [t[Symbol.iterator], t.next].every(U), "isIterable");
      var Ot = m((t) => typeof FormData != "undefined" && w(FormData)(t), "isFormData");
      var { isArguments: St, isArray: p, isDate: bt, isFunction: a, isNumber: X } = b;
      var { isPojo: d, isRegExp: P, isString: v, instanceOf: vt } = b;
      var { isMap: Ft, isSet: yt, isIterable: Y, isFormData: Nt } = b;
      var { keys: h, entries: Dt, assign: E } = Object;
      var O2 = 2e4;
      var Et = true;
      var It = () => O2;
      var Mt = (t) => {
        let e = O2;
        return O2 = t, () => O2 = e;
      };
      function At(t, e) {
        for (let n = t.length - 1; n >= 0; n--) if (e(t[n])) return t[n];
      }
      function Q(t, e) {
        if (Et && !K(e)) {
          let n = `Exhausted all patterns without finding a match for input: ${JSON.stringify(t)}. Handle it, or use otherwise() for the fall-through case.`;
          throw new Error(n);
        }
      }
      function Kt(t) {
        return (...e) => Z(...e)(t);
      }
      var Z = (...t) => (e) => {
        let [n, s] = St(e) ? [{}, Array.from(e)] : Ft(e) || Nt(e) ? [{ isMap: true }, e.entries()] : yt(e) ? [{ isSet: true }, e.values()] : [{}, e];
        if (!Y(s)) {
          let i = s, { found: g, result: f } = T(...t)(i);
          if (g) return f;
          let S = At(t, K);
          return Q(i, S), f;
        }
        let r = s, [c, u] = t.reduce(([i, g], f) => K(f) ? [f, g] : [i, [...g, f]], [() => ({ value: () => {
        } }), []]), o = [];
        do {
          let { value: i, done: g } = r.next();
          if (g) return Q(r, c), c().value();
          o.push(i);
          let { found: f, result: S } = T(...u)(n.isSet ? i : n.isMap ? { key: i[0], value: i[1] } : [...o]);
          if (f) return S;
        } while (o.length < O2 || n.isSet || n.isMap);
        throw new Error(`Hit iterationLimit: ${O2}. Use setIterationLimit(Infinity) to disable.`);
      };
      var T = (...t) => {
        let e;
        return (n) => ({ found: !!t.find((r) => {
          let c = r(n), { matched: u, value: o } = c || {};
          return [u, o].every(a) ? u(n) && (e = o(n), true) : c && (e = c);
        }), result: e });
      };
      var R = "@@match-iz/rest";
      var Pt = (t) => a(t == null ? void 0 : t[R]);
      var Rt = (t) => t[R];
      var _ = /* @__PURE__ */ Symbol("@@match-iz/otherwise");
      var K = (t) => (t == null ? void 0 : t[_]) === true;
      var Wt = (t) => {
        let e = (n) => ({ matched: () => true, value: () => a(t) ? t(n) : t });
        return e[_] = true, e;
      };
      var A = (t) => (e) => (n) => {
        let s = { haystack: n };
        return { matched: () => l(t, n, (r) => n = r, s), value: () => a(e) ? v(n) && P(t) ? e(...jt(n.match(t))) : e(n, s.rest) : e };
      };
      var Lt = (...t) => {
        if (t.length === 1) {
          let [e] = t;
          return A(e);
        }
        if (t.length === 2) {
          let [e, n] = t;
          return A(e)(n);
        }
        if (t.length > 2) {
          let e = t.slice(-1)[0], n = t.slice(0, -1);
          return A(tt(n))(e);
        }
        throw new Error("Expected at least 1 argument");
      };
      var jt = (t) => {
        let { groups: e } = t;
        return e ? [e, t] : [t];
      };
      var l = (t, e, n, s = { haystack: e }) => d(t) ? h(t).every((r) => (s.consumedKeys = s.consumedKeys || [], s.consumedKeys.push(r), s.key = r, l(t[r], e == null ? void 0 : e[r], n, s))) : p(t) ? p(e) && t.every((r, c) => {
        let u = Pt(r) ? Rt(r) : r;
        return s.key = c, l(u, e == null ? void 0 : e[c], n, s);
      }) : a(t) ? t(e, n, s) : v(e) && P(t) ? t.test(e) : t === e || [t, e].every(Number.isNaN);
      var qt = (...t) => (e, n, s) => t.length === 0 || (a(t[0]) ? t[0](e) : l(t[0], e, n, s)) ? (n(e), true) : false;
      var zt = (...t) => {
        let e = t.length === 0 ? () => true : t[0], n = () => e, s = (c) => (u, o) => E(u, { [o]: c.haystack[o] }), r = (c, u) => E(c, { [u]: e });
        return { [R]: (c, u, o) => {
          if (d(o.haystack)) {
            let i = [], g = h(o.haystack).reduce((q, I) => ((o.consumedKeys || []).includes(I) ? i.push(I) : q.push(I), q), []), f = i.reduce(s(o), {}), S = g.reduce(r, {}), j = l(E({}, f, S), o.haystack, u);
            return j && (o.rest = g.reduce(s(o), {})), j;
          }
          if (p(o.haystack)) {
            let i = o.haystack.slice(0, o.key), g = o.haystack.slice(o.key).map(n), f = l(i.concat(g), o.haystack, u);
            return f && (o.rest = o.haystack.slice(o.key)), f;
          }
          return false;
        } };
      };
      var Ct = (t, e) => [t, e].every(p) ? t.length === e.length : [t, e].every(d) ? h(t).length === h(e).length : true;
      var x = (t) => (e, n, s) => Ct(t, e) && l(t, e, n, s);
      var Ht = (t) => W(t, (e) => d(e) ? x(e) : e);
      var Vt = (t) => (e, n, s) => !l(t, e, n, s);
      var k = (...t) => (e, n, s) => t.flat().some((r) => l(r, e, n, s));
      var tt = (...t) => (e, n, s) => t.flat().every((r) => l(r, e, n, s));
      var $t = (t) => st((e, n, s) => e.every((r) => l(t, r, n, s)));
      var Bt = (t) => st((e, n, s) => e.some((r) => l(t, r, n, s)));
      var Jt = (...t) => L((e, n, s) => t.length <= e.length && l(t, e.slice(0, t.length), n, s));
      var Ut = (...t) => L((e, n, s) => t.length <= e.length && l(t, e.slice(e.length - t.length), n, s));
      var et = (t) => t !== t || !t && t !== 0 && t !== false || p(t) && !t.length || d(t) && !h(t).length;
      var Gt = (t) => !et(t);
      var Qt = (t) => F((e) => e > t);
      var Tt = (t) => F((e) => e < t);
      var Xt = (t) => F((e) => e >= t);
      var Yt = (t) => F((e) => e <= t);
      var Zt = (t, e) => F((n) => n >= Math.min(t, e) && n <= Math.max(t, e));
      var _t = (t) => nt((e) => e.startsWith(t));
      var xt = (t) => nt((e) => e.endsWith(t));
      var kt = (t) => L((e) => e.includes(t));
      var te = k;
      var ee = (t) => (e) => e === t;
      var ne = (...t) => (e) => d(e) && (([n, s]) => n.length && n.every((r) => s.includes(r)))([t.flat(), h(e)]);
      var se = (n) => {
        var s = n, { getValue: t } = s, e = V(s, ["getValue"]);
        return Dt(e).reduce((r, [c, u]) => E(r, { [c]: (o) => (i) => ({ matched: () => u(i), value: () => a(o) ? o(t(i)) : o }) }), {});
      };
      var re = (t) => !!t;
      var oe = (t) => !t;
      var ie = (t) => (e, n) => (e[n] = W(e[n], t), e);
      var ce = (t) => (e) => W(e, t);
      var W = (t, e) => e(d(t) ? h(t).reduce(ie(e), H({}, t)) : p(t) ? t.map(ce(e)) : t);
      var ue = (t) => new Proxy({}, { get: () => t });
      var nt = (t) => (e) => v(e) && t(e);
      var F = (t) => (e) => X(e) && t(e);
      var st = (t) => (e, n, s) => p(e) && t(e, n, s);
      var L = (t) => (e, n, s) => (p(e) || v(e)) && t(e, n, s);
    }
  });

  // src/common/cjs/fp.js
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

  // node_modules/.pnpm/jmespath@0.16.0/node_modules/jmespath/jmespath.js
  var require_jmespath = __commonJS({
    "node_modules/.pnpm/jmespath@0.16.0/node_modules/jmespath/jmespath.js"(exports) {
      (function(exports2) {
        "use strict";
        function isArray4(obj) {
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
          if (isArray4(first) === true) {
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
          } else if (isArray4(obj) && obj.length === 0) {
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
                if (!isArray4(value)) {
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
                if (!isArray4(value)) {
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
                if (!isArray4(base)) {
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
                if (!isArray4(base)) {
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
                if (!isArray4(original)) {
                  return null;
                }
                var merged = [];
                for (i = 0; i < original.length; i++) {
                  current2 = original[i];
                  if (isArray4(current2)) {
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
          if (!canRun) return;
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
          const [promise, O2, X] = makePromise();
          promise.finally(() => (running -= 1, next()));
          pending.add({ promiseMakerFn, O: O2, X });
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

  // node_modules/.pnpm/immer@11.1.15/node_modules/immer/dist/immer.mjs
  var NOTHING = /* @__PURE__ */ Symbol.for("immer-nothing");
  var DRAFTABLE = /* @__PURE__ */ Symbol.for("immer-draftable");
  var DRAFT_STATE = /* @__PURE__ */ Symbol.for("immer-state");
  var errors = true ? [
    // All error codes, starting by 0:
    function(plugin) {
      return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
      return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
      return `'original' expects a draft, got: ${thing}`;
    }
    // Note: if more errors are added, the errorOffset in Patches.ts should be increased
    // See Patches.ts for additional errors
  ] : [];
  function die(error, ...args) {
    if (true) {
      const e = errors[error];
      const msg = isFunction2(e) ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var O = Object;
  var getPrototypeOf = O.getPrototypeOf;
  var CONSTRUCTOR = "constructor";
  var PROTOTYPE = "prototype";
  var CONFIGURABLE = "configurable";
  var ENUMERABLE = "enumerable";
  var WRITABLE = "writable";
  var VALUE = "value";
  var isDraft = (value) => !!value && !!value[DRAFT_STATE];
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject(value) || isArray2(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
  var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
  function isPlainObject(value) {
    if (!value || !isObjectish(value))
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null || proto === O[PROTOTYPE])
      return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object)
      return true;
    if (!isFunction2(Ctor))
      return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
      ctorString = Function.toString.call(Ctor);
      cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
  }
  function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0) {
      const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
      keys.forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : isArray2(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  var has = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
  var get = (thing, prop, type = getArchtype(thing)) => (
    // @ts-ignore
    type === 2 ? thing.get(prop) : thing[prop]
  );
  var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
    if (type === 2)
      thing.set(propOrOldValue, value);
    else if (type === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  var isArray2 = Array.isArray;
  var isMap = (target) => target instanceof Map;
  var isSet = (target) => target instanceof Set;
  var isObjectish = (target) => typeof target === "object";
  var isFunction2 = (target) => typeof target === "function";
  var isBoolean = (target) => typeof target === "boolean";
  function isArrayIndex(value) {
    const n = +value;
    return Number.isInteger(n) && String(n) === value;
  }
  var latest = (state) => state.copy_ || state.base_;
  var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (isArray2(base))
      return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = O.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc[WRITABLE] === false) {
          desc[WRITABLE] = true;
          desc[CONFIGURABLE] = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            [CONFIGURABLE]: true,
            [WRITABLE]: true,
            // could live with !!desc.set as well here...
            [ENUMERABLE]: desc[ENUMERABLE],
            [VALUE]: base[key]
          };
      }
      return O.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = O.create(proto);
      return O.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      O.defineProperties(obj, {
        set: dontMutateMethodOverride,
        add: dontMutateMethodOverride,
        clear: dontMutateMethodOverride,
        delete: dontMutateMethodOverride
      });
    }
    O.freeze(obj);
    if (deep)
      each(
        obj,
        (_key, value) => {
          freeze(value, true);
        },
        false
      );
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  var dontMutateMethodOverride = {
    [VALUE]: dontMutateFrozenCollections
  };
  function isFrozen(obj) {
    if (obj === null || !isObjectish(obj))
      return true;
    return O.isFrozen(obj);
  }
  var PluginMapSet = "MapSet";
  var PluginPatches = "Patches";
  var PluginArrayMethods = "ArrayMethods";
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];
  var currentScope;
  var getCurrentScope = () => currentScope;
  var createScope = (parent_, immer_) => ({
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: /* @__PURE__ */ new Set(),
    processedForPatches_: /* @__PURE__ */ new Set(),
    mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
    arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
  });
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      scope.patchPlugin_ = getPlugin(PluginPatches);
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
  var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
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
      }
      const { patchPlugin_ } = scope;
      if (patchPlugin_) {
        patchPlugin_.generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope
        );
      }
    } else {
      result = finalize(scope, baseDraft);
    }
    maybeFreeze(scope, result, true);
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
      return finalValue;
    }
    if (!isSameScope(state, rootScope)) {
      return value;
    }
    if (!state.modified_) {
      return state.base_;
    }
    if (!state.finalized_) {
      const { callbacks_ } = state;
      if (callbacks_) {
        while (callbacks_.length > 0) {
          const callback = callbacks_.pop();
          callback(rootScope);
        }
      }
      generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
  }
  var isSameScope = (state, rootScope) => state.scope_ === rootScope;
  var EMPTY_LOCATIONS_RESULT = [];
  function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest(parent);
    const parentType = parent.type_;
    if (originalKey !== void 0) {
      const currentValue = get(parentCopy, originalKey, parentType);
      if (currentValue === draftValue) {
        set(parentCopy, originalKey, finalizedValue, parentType);
        return;
      }
    }
    if (!parent.draftLocations_) {
      const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
      each(parentCopy, (key, value) => {
        if (isDraft(value)) {
          const keys = draftLocations.get(value) || [];
          keys.push(key);
          draftLocations.set(value, keys);
        }
      });
    }
    const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location of locations) {
      set(parentCopy, location, finalizedValue, parentType);
    }
  }
  function registerChildFinalizationCallback(parent, child, key) {
    parent.callbacks_.push(function childCleanup(rootScope) {
      const state = child;
      if (!state || !isSameScope(state, rootScope)) {
        return;
      }
      rootScope.mapSetPlugin_?.fixSetContents(state);
      const finalizedValue = getFinalValue(state);
      updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
      generatePatchesAndFinalize(state, rootScope);
    });
  }
  function generatePatchesAndFinalize(state, rootScope) {
    const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 || state.type_ === 1 && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0);
    if (shouldFinalize) {
      const { patchPlugin_ } = rootScope;
      if (patchPlugin_) {
        const basePath = patchPlugin_.getPath(state);
        if (basePath) {
          patchPlugin_.generatePatches_(state, basePath, rootScope);
        }
      }
      markStateFinalized(state);
    }
  }
  function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft(value)) {
      const state = value[DRAFT_STATE];
      if (isSameScope(state, scope_)) {
        state.callbacks_.push(function crossReferenceCleanup() {
          prepareCopy(target);
          const finalizedValue = getFinalValue(state);
          updateDraftInParent(target, value, finalizedValue, key);
        });
      }
    } else if (isDraftable(value)) {
      target.callbacks_.push(function nestedDraftCleanup() {
        const targetCopy = latest(target);
        if (target.type_ === 3) {
          if (targetCopy.has(value)) {
            handleValue(value, scope_.handledSet_, scope_);
          }
        } else {
          if (get(targetCopy, key, target.type_) === value) {
            if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
              handleValue(
                get(target.copy_, key, target.type_),
                scope_.handledSet_,
                scope_
              );
            }
          }
        }
      });
    }
  }
  function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return target;
    }
    if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
      return target;
    }
    handledSet.add(target);
    each(target, (key, value) => {
      if (isDraft(value)) {
        const state = value[DRAFT_STATE];
        if (isSameScope(state, rootScope)) {
          const updatedValue = getFinalValue(state);
          set(target, key, updatedValue, target.type_);
          markStateFinalized(state);
        }
      } else if (isDraftable(value)) {
        handleValue(value, handledSet, rootScope);
      }
    });
    return target;
  }
  function createProxyProxy(base, parent) {
    const baseIsArray = isArray2(base);
    const state = {
      type_: baseIsArray ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      // actually instantiated in `prepareCopy()`
      assigned_: void 0,
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
      isManual_: false,
      // `callbacks` actually gets assigned in `createProxy`
      callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps;
    if (baseIsArray) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [proxy, state];
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      let arrayPlugin = state.scope_.arrayMethodsPlugin_;
      const isArrayWithStringProp = state.type_ === 1 && typeof prop === "string";
      if (isArrayWithStringProp) {
        if (arrayPlugin?.isArrayOperationMethod(prop)) {
          return arrayPlugin.createMethodInterceptor(state, prop);
        }
      }
      const source = latest(state);
      if (!has(source, prop, state.type_)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(
        state.operationMethod
      ) && isArrayIndex(prop)) {
        return value;
      }
      if (value === peek(state.base_, prop) || isRelocatedBaseRef(state, prop, value)) {
        prepareCopy(state);
        const childKey = state.type_ === 1 ? +prop : prop;
        const childDraft = createProxy(state.scope_, value, state, childKey);
        return state.copy_[childKey] = childDraft;
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
          state.assigned_.set(prop, false);
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || has(state.copy_, prop, state.type_)) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_.set(prop, true);
      handleCrossReference(state, prop, value);
      return true;
    },
    deleteProperty(state, prop) {
      prepareCopy(state);
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_.set(prop, false);
        markChanged(state);
      } else {
        state.assigned_.delete(prop);
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
        [WRITABLE]: true,
        [CONFIGURABLE]: state.type_ !== 1 || prop !== "length",
        [ENUMERABLE]: desc[ENUMERABLE],
        [VALUE]: owner[prop]
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
  for (let key in objectTraps) {
    let fn = objectTraps[key];
    arrayTraps[key] = function() {
      const args = arguments;
      args[0] = args[0][0];
      return fn.apply(this, args);
    };
  }
  arrayTraps.deleteProperty = function(state, prop) {
    if (isNaN(parseInt(prop)))
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop)))
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function isRelocatedBaseRef(state, prop, value) {
    if (state.type_ !== 1 || !state.allIndicesReassigned_ || state.assigned_?.get(prop) || !isDraftable(value) || value[DRAFT_STATE]) {
      return false;
    }
    return state.baseRefs_.has(value);
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : (
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
      state.assigned_ = /* @__PURE__ */ new Map();
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
      this.useStrictIteration_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (isFunction2(base) && !isFunction2(recipe)) {
          const defaultBase = recipe;
          recipe = base;
          const self2 = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (!isFunction2(recipe))
          die(6);
        if (patchListener !== void 0 && !isFunction2(patchListener))
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(scope, base, void 0);
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
        } else if (!base || !isObjectish(base)) {
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
            getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
              patches_: p,
              inversePatches_: ip
            });
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (isFunction2(base)) {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (isBoolean(config?.autoFreeze))
        this.setAutoFreeze(config.autoFreeze);
      if (isBoolean(config?.useStrictShallowCopy))
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
      if (isBoolean(config?.useStrictIteration))
        this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(scope, base, void 0);
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
    /**
     * Pass false to use faster iteration that skips non-enumerable properties
     * but still handles symbols for compatibility.
     *
     * By default, strict iteration is enabled (includes all own properties).
     */
    setUseStrictIteration(value) {
      this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
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
      const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(rootScope, value, parent, key) {
    const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent?.scope_ ?? getCurrentScope();
    scope.drafts_.push(draft);
    state.callbacks_ = parent?.callbacks_ ?? [];
    state.key_ = key;
    if (parent && key !== void 0) {
      registerChildFinalizationCallback(parent, state, key);
    } else {
      state.callbacks_.push(function rootDraftCleanup(rootScope2) {
        rootScope2.mapSetPlugin_?.fixSetContents(state);
        const { patchPlugin_ } = rootScope2;
        if (state.modified_ && patchPlugin_) {
          patchPlugin_.generatePatches_(state, [], rootScope2);
        }
      });
    }
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
    let strict = true;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
      strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
      copy = shallowCopy(value, true);
    }
    each(
      copy,
      (key, childValue) => {
        set(copy, key, currentImpl(childValue));
      },
      strict
    );
    if (state) {
      state.finalized_ = false;
    }
    return copy;
  }
  var immer = new Immer2();
  var produce = immer.produce;

  // src/common/esm/bus.js
  var import_regexp = __toESM(require_regexp());
  (function() {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent2(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    window.CustomEvent = CustomEvent2;
  })();
  var messages = (function() {
    let global;
    try {
      global = window;
    } catch {
      global = self;
    }
    const BUS = "message-bus";
    const eventMap = /* @__PURE__ */ new Map();
    function emit(eventName, ...args) {
      const detail = { eventName, args, timestamp: Date.now() };
      const event = new CustomEvent(BUS, { detail });
      global.dispatchEvent(event);
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
  })();

  // src/common/esm/types.js
  function isEventEmitter(obj) {
    return isObject(obj) && isFunction3(obj.emit) && (isFunction3(obj.addListener) || isFunction3(obj.on)) && (isFunction3(obj.removeListener) || isFunction3(obj.off));
  }
  isEventEmitter.displayName = "isEventEmitter";
  function isUnset(obj) {
    return obj === null || obj === void 0;
  }
  isArray3.displayName = "isUnset";
  function isArray3(obj) {
    return Array.isArray(obj);
  }
  isArray3.displayName = "isArray";
  function isArguments(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
  }
  isArguments.displayName = "isArguments";
  function isBoolean2(obj) {
    return obj === true || obj === false;
  }
  isBoolean2.displayName = "isBoolean";
  function isFunction3(obj) {
    return typeof obj === "function";
  }
  isFunction3.displayName = "isFunction";
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
    if (!isArray3(obj)) {
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
      (argType2) => isFunction3(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)
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
    } catch {
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
    // productCategoryCode,
    transactionStartDate = "yyyy-MM-dd",
    transactionEndDate = "yyyy-MM-dd"
  }) {
    const baseUrl = [
      host,
      "/api",
      "/wpb-mmf-gb-hrfb-pa-account-transactions-prod-proxy",
      "/v2",
      "/transactions"
    ].join("");
    const params = new URLSearchParams({
      identifier: accountId,
      limit: "500",
      transactionCategory: "HISTORIC",
      identifierType: "ACCOUNT",
      transactionStartDate,
      transactionEndDate,
      txnSearch: "true"
    });
    const url = `${baseUrl}?${params.toString()}`;
    return url;
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
    const transactionsKey = "transactions";
    if (!Array.isArray(json[transactionsKey])) {
      console.warn("No transactions found in JSON", { accountId, json });
      return [];
    }
    const entriesPath = `
        ${transactionsKey}[].{
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
      //
      // Accounts
      //
      "idle -> getting_accounts": {
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
      "getting_accounts -> found_accounts": {
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
      "getting_accounts -> failed_accounts": {
        on: actions.error.ACCOUNTS,
        then: fetcher.Enter("idle")
      },
      //
      // Statements list
      //
      "found_accounts -> getting_statements": {
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
      "getting_statements -> found_statements": {
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
      "getting_statements -> failed_statements": {
        on: actions.error.STATEMENTS,
        then: fetcher.Enter("idle")
      },
      //
      // Transactions
      //
      "found_statements -> getting_entries": {
        on: actions.get.ENTRIES,
        then: ({ accountsTransactionsQueries }) => {
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
      "getting_entries -> found_entries": {
        on: actions.got.ENTRIES,
        then: () => {
        }
      },
      "getting_entries -> failed_entries": {
        on: actions.error.ENTRIES,
        then: fetcher.Enter("idle")
      },
      //
      // Downloading
      //
      "found_entries -> download_all": {
        on: actions.ui.DOWNLOAD_STATEMENTS,
        then: () => {
        }
      },
      "download_all -> found_entries": {
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
        failed_accounts |
      failed_statements |
         failed_entries -> idle

    `]: () => {
        console.warn("Problem fetching data. Please try again.");
      }
    });
    fetcher.info();
  });
})();
