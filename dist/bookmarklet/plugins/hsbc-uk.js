(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/.pnpm/match-iz@1.11.2/node_modules/match-iz/dist/match-iz.cjs.js
  var require_match_iz_cjs = __commonJS({
    "node_modules/.pnpm/match-iz@1.11.2/node_modules/match-iz/dist/match-iz.cjs.js"(exports, module) {
      var x2 = Object.defineProperty;
      var D2 = Object.getOwnPropertyDescriptor;
      var E2 = Object.getOwnPropertyNames;
      var F2 = Object.prototype.hasOwnProperty;
      var I2 = (t2) => x2(t2, "__esModule", { value: true });
      var q2 = (t2, n2) => {
        for (var o2 in n2)
          x2(t2, o2, { get: n2[o2], enumerable: true });
      };
      var z2 = (t2, n2, o2, s2) => {
        if (n2 && typeof n2 == "object" || typeof n2 == "function")
          for (let r2 of E2(n2))
            !F2.call(t2, r2) && (o2 || r2 !== "default") && x2(t2, r2, { get: () => n2[r2], enumerable: !(s2 = D2(n2, r2)) || s2.enumerable });
        return t2;
      };
      var B2 = ((t2) => (n2, o2) => t2 && t2.get(n2) || (o2 = z2(I2({}), n2, 1), t2 && t2.set(n2, o2), o2))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
      var nt = {};
      q2(nt, { against: () => w2, allOf: () => T, anyOf: () => R2, defined: () => U2, empty: () => W2, endsWith: () => l2, falsy: () => k2, gt: () => V2, gte: () => Y, hasOwn: () => v2, inRange: () => _2, includedIn: () => d2, includes: () => y2, instanceOf: () => u2, isArray: () => e, isDate: () => P2, isFunction: () => i2, isNumber: () => b2, isPojo: () => g2, isRegExp: () => O2, isString: () => f2, lt: () => X2, lte: () => Z2, match: () => J, not: () => Q2, otherwise: () => K, pluck: () => M2, spread: () => a2, startsWith: () => $, truthy: () => h2, when: () => L2 });
      var j2 = Object.prototype;
      var C = j2.toString;
      var p2 = (t2) => (n2) => typeof n2 === t2;
      var u2 = (t2) => (n2) => n2 instanceof t2;
      var { isArray: e } = Array;
      var G2 = (t2) => C.call(t2) === "[object Arguments]";
      var P2 = (t2) => u2(Date)(t2) && !isNaN(t2);
      var i2 = p2("function");
      var f2 = p2("string");
      var b2 = (t2) => t2 === t2 && p2("number")(t2);
      var H2 = (t2) => t2 !== null && p2("object")(t2);
      var O2 = u2(RegExp);
      var g2 = (t2) => t2 === null || !H2(t2) || G2(t2) ? false : Object.getPrototypeOf(t2) === j2;
      function J(t2) {
        return (...n2) => w2(...n2)(t2);
      }
      var w2 = (...t2) => {
        let n2;
        return (o2) => t2.find((s2) => {
          let r2 = s2(o2), { matched: N, value: S2 } = r2 || {};
          return [N, S2].every(i2) ? N(o2) && (n2 = S2(o2), true) : r2 && (n2 = r2);
        }) && n2;
      };
      var K = (t2) => (n2) => ({ matched: () => true, value: () => i2(t2) ? t2(n2) : t2 });
      var L2 = (t2) => (n2) => (o2) => ({ matched: () => c2(t2, o2, (s2) => o2 = s2), value: () => i2(n2) ? f2(o2) && O2(t2) ? n2(o2.match(t2)) : n2(o2) : n2 });
      var c2 = (t2, n2, o2) => g2(t2) ? Object.keys(t2).every((s2) => c2(t2[s2], n2 == null ? void 0 : n2[s2], o2)) : e(t2) ? e(n2) ? t2.length === n2.length && t2.every((s2, r2) => c2(s2, n2 == null ? void 0 : n2[r2], o2)) : t2.some((s2) => c2(s2, n2, o2)) : i2(t2) ? t2(n2, o2) : f2(n2) && O2(t2) ? t2.test(n2) : t2 === n2 || [t2, n2].every(Number.isNaN);
      var M2 = (...t2) => (n2, o2) => t2.length === 0 || (i2(t2[0]) ? t2[0](n2) : c2(t2[0], n2, o2)) ? (o2(n2), true) : false;
      var Q2 = (t2) => (n2, o2) => !c2(t2, n2, o2);
      var R2 = (...t2) => t2.flat();
      var T = (...t2) => (n2, o2) => t2.flat().every((s2) => c2(s2, n2, o2));
      var W2 = (t2) => t2 !== t2 || !t2 && t2 !== 0 && t2 !== false || e(t2) && !t2.length || g2(t2) && !Object.keys(t2).length;
      var U2 = (t2) => !W2(t2);
      var V2 = (t2) => m((n2) => n2 > t2);
      var X2 = (t2) => m((n2) => n2 < t2);
      var Y = (t2) => m((n2) => n2 >= t2);
      var Z2 = (t2) => m((n2) => n2 <= t2);
      var _2 = (t2, n2) => m((o2) => o2 >= t2 && o2 <= n2);
      var $ = (t2) => A2((n2) => n2.startsWith(t2));
      var l2 = (t2) => A2((n2) => n2.endsWith(t2));
      var y2 = (t2) => tt((n2) => n2.includes(t2));
      var d2 = R2;
      var v2 = (...t2) => (n2) => g2(n2) && (([o2, s2]) => o2.length && o2.every((r2) => s2.includes(r2)))([t2.flat(), Object.keys(n2)]);
      var h2 = (t2) => !!t2;
      var k2 = (t2) => !t2;
      var a2 = (t2) => new Proxy({}, { get: () => t2 });
      var A2 = (t2) => (n2) => f2(n2) && t2(n2);
      var m = (t2) => (n2) => b2(n2) && t2(n2);
      var tt = (t2) => (n2) => (e(n2) || f2(n2)) && t2(n2);
      module.exports = B2(nt);
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
      var { against: against2, when: when2, otherwise: otherwise2, isString: isString3 } = require_match_iz_cjs();
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
        makePromise: makePromise3,
        delay,
        unzip,
        makeIdleDetectorWithTimeout,
        poolPromises: poolPromises3,
        makePromisePool,
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
      function makePromise3() {
        let _resolve;
        let _reject;
        const promise = new Promise((resolve, reject) => {
          _resolve = resolve;
          _reject = reject;
        });
        return [promise, _resolve, _reject];
      }
      function delay(ms) {
        const [promise, resolve] = makePromise3();
        setTimeout(resolve, ms || 0);
        return promise;
      }
      function makeIdleDetectorWithTimeout(initBouncer = () => {
      }, { withinMs = 500, timeoutInMs = seconds(5) }) {
        const [promise, resolve, reject] = makePromise3();
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
      function poolPromises3(limit, ...promiseMakerFns) {
        const checkAll = () => canPromisesRun.forEach((check) => check());
        const context = makePoolCounter(limit, checkAll);
        const [pooledPromises, canPromisesRun] = promiseMakerFns.map((fn2) => makePoolAwarePromise(context, fn2)).reduce(...makeUnzipReducer());
        checkAll();
        return Promise.allSettled(pooledPromises);
      }
      function makePoolAwarePromise(context, promiseMakerFn) {
        const { allowedToStartNext, bumpRunCount, unbump } = context;
        const [promise, resolve, reject] = makePromise3();
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
          const [promise, O2, X2] = makePromise3();
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
        const [promise, resolve, reject] = makePromise3();
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

  // node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
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
  var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
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
      false;
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
  function isThisValue(value) {
    function inObject(obj) {
      return obj === value;
    }
    inObject.displayName = `isThisValue(${value})`;
    return inObject;
  }
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
  function store() {
    return storeHistory[storeHistory.length - 1];
  }
  store.history = storeHistory;
  store.hydrate = hydrate;
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
    const currentStore = store();
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
    const currentStore = store();
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
    const currentStore = store();
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
    const currentStore = store();
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
    const currentStore = store();
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

  // src/plugins/hsbc/actions.js
  var actions2 = {
    received: {
      ACCOUNTS_LIST: "received/hsbc:accounts-list",
      STATEMENTS_LIST: "received/hsbc:statements-list",
      STATEMENT_DETAILS: "received/hsbc:statement-details"
    }
  };

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

  // src/common/obis/utils/cookie.js
  function getCookie(name) {
    const cookie = document.cookie.split(";").reduce((acc, keyValueStr) => {
      const equalsPos = keyValueStr.indexOf("=");
      const key = keyValueStr.slice(0, equalsPos).trim();
      const value = keyValueStr.slice(equalsPos + 1).trim();
      return {
        ...acc,
        [key]: value
      };
    }, {});
    return cookie[name];
  }

  // src/plugins/hsbc/helpers.js
  function parseDescriptionIntoPayeeAndNote(payeeAndNote) {
    const matches = payeeAndNote.split(/\s{3,}/);
    const [payee, ...notes] = matches.map((x2) => x2.trim().replace(/ +/g, " "));
    return [payee, notes.join(" ")];
  }
  function parseHsbcDateTimeString(dateTimeString2) {
    const rxDateTime = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    const matches = dateTimeString2.match(rxDateTime);
    if (!matches) {
      const reason = `dateTimeString does not match expected pattern: ${rxDateTime.toString()}`;
      throw new TypeError(reason);
    }
    const [, year, month, day, hours, minutes, seconds] = matches;
    return Date.UTC(year, month - 1, day, hours, minutes, seconds);
  }
  function hsbcBrowserTimeStamp() {
    const now = new Date();
    return now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + zeroPad(now.getMinutes()) + ":" + zeroPad(now.getSeconds());
  }
  function hsbcGetJSCDataTimeStamp() {
    const { getJSCDataTimeStamp, HSBCGLBL } = window;
    if (typeof getJSCDataTimeStamp === "function") {
      return getJSCDataTimeStamp();
    }
    if (HSBCGLBL && typeof HSBCGLBL.hsbcglblform === "function") {
      const JSCData = HSBCGLBL.hsbcglblform();
      return JSCData + ":" + hsbcBrowserTimeStamp();
    }
    return null;
  }
  function hsbcCommonHeaders() {
    const headers = {
      "Content-type": "application/json",
      "X-HDR-Synchronizer-Token": getCookie("SYNC_TOKEN"),
      "X-HDR-jscData": hsbcGetJSCDataTimeStamp()
    };
    return headers;
  }
  function hsbcCodes(storage = sessionStorage) {
    const { jmespath } = obis.deps;
    const { accountselected = "{}" } = storage;
    const json = JSON.parse(accountselected);
    const codesPath = `
    {
      ctryCde: entityIdentifier.ctryCde,
      grpMmbr: entityIdentifier.grpMmbr
    }
  `;
    const { ctryCde, grpMmbr } = jmespath.search(json, codesPath);
    return {
      ctryCde: ctryCde || "GB",
      grpMmbr: grpMmbr || "HBEU"
    };
  }

  // src/plugins/hsbc/hijack/accounts.js
  var checkSchema2 = ObjTypeError("addStatementDetailInterceptor#");
  function addAccountsInterceptor() {
    const { addAjaxListener, AjaxRequester, jmespath, messages: messages2 } = obis.deps;
    addAjaxListener({
      name: "rtrvAcctSumm",
      description: "Parse a list of accounts",
      rx: /\/accountDataSvc\/rtrvAcctSumm/,
      onFullResponse: (payload) => {
        const { responseText } = payload;
        const json = JSON.parse(responseText);
        const entriesPath = `
        countriesAccountList[].acctLiteWrapper[].{
          id:                         acctIndex,
          accountHolderName:          acctHldrFulName[0],
          sortCodeAndAccountNumber:   displyID,

          entProdTypCde: entProdTypCde,
          entProdCatCde: entProdCatCde
        }
      `;
        const entityPath = `
        countriesAccountList[].entityID
      `;
        const validateEntry = (entry) => !checkSchema2({
          id: isString2,
          accountHolderName: isString2,
          sortCodeAndAccountNumber: isString2
        })("validateEntry")(entry);
        const validateEntity = (entity2) => !checkSchema2({
          ctryCde: isString2,
          grpMmbr: isString2
        })("validateEntity")(entity2);
        const entries = jmespath.search(json, entriesPath);
        const entity = jmespath.search(json, entityPath);
        const entriesValid = entries.every(validateEntry);
        const entityValid = entity.every(validateEntity);
        if (!entriesValid || !entityValid) {
          const reason = `rtrvAcctSumm :: Validation failed: ${entries} + ${entity}`;
          messages2.emit(actions.error.ACCOUNTS, new TypeError(reason));
          return;
        }
        const { ctryCde, grpMmbr } = entity[0];
        const sanitizedEntity = {
          ctryCde: ctryCde.toLowerCase(),
          grpMmbr
        };
        const obisEntries = entries.map((entry) => {
          const { sortCodeAndAccountNumber, ...restEntry } = entry;
          const [sortCode, accountNumber] = sortCodeAndAccountNumber.split(" ");
          return {
            ...sanitizedEntity,
            ...restEntry,
            sortCode,
            accountNumber
          };
        });
        messages2.emit(actions2.received.ACCOUNTS_LIST, obisEntries);
      }
    });
    return AjaxRequester({
      name: "rtrvAcctSumm",
      description: "Request a list of accounts",
      method: "post",
      url: "/gpib/channel/proxy/accountDataSvc/rtrvAcctSumm",
      setHeaders: hsbcCommonHeaders,
      setPayload: (options) => {
        const err = checkSchema2({
          ctryCde: isString2,
          grpMmbr: isString2
        })("AjaxRequester")(options);
        if (err) {
          const reason = `rtrvAcctSumm :: Invalid options: ${err}`;
          messages2.emit(actions.error.ACCOUNTS, new TypeError(reason));
          return;
        }
        const payload = {
          accountSummaryFilter: {
            txnTypCdes: [],
            entityCdes: [
              {
                ctryCde: options.ctryCde,
                grpMmbr: options.grpMmbr
              }
            ]
          }
        };
        return JSON.stringify(payload);
      }
    });
  }

  // src/plugins/hsbc/requesters/accounts.js
  var accounts_default = configureAccountsInterceptor;
  function configureAccountsInterceptor() {
    const { messages: messages2 } = obis.deps;
    const { on: on2, emit } = messages2;
    const requestAccounts = addAccountsInterceptor();
    function _requestAccounts() {
      requestAccounts(hsbcCodes());
    }
    on2(actions2.received.ACCOUNTS_LIST, (accountsResponse) => {
      const accountsUpdate = accountsResponse.map((accountResponse) => {
        return {
          id: accountResponse.id,
          accountNumber: accountResponse.accountNumber,
          sortCode: accountResponse.sortCode,
          name: accountResponse.accountHolderName,
          type: accountResponse.entProdTypCde,
          iban: LEAVE_UNCHANGED,
          bic: LEAVE_UNCHANGED
        };
      });
      emit(actions.add.ACCOUNTS, accountsUpdate);
      emit(actions.got.ACCOUNTS, accountsResponse);
    });
    return {
      canRequestAccounts: () => true,
      requestAccounts: _requestAccounts
    };
  }

  // src/plugins/hsbc/requesters/statements.js
  var import_promises = __toESM(require_promises());

  // src/plugins/hsbc/hijack/statements.js
  var checkSchema3 = ObjTypeError("addAccountStatementsInterceptor#");
  function addAccountStatementsInterceptor() {
    const { addAjaxListener, AjaxRequester, jmespath, messages: messages2 } = obis.deps;
    addAjaxListener({
      name: "rtrvStmtAcctList",
      description: "Parse a list of available statements in an account",
      rx: /\/accountDataSvc\/rtrvStmtAcctList/,
      onFullResponse: (payload) => {
        const { responseText } = payload;
        const json = JSON.parse(responseText);
        const entriesPath = `
        {
          id:     stmtAcctList[].acctIdr.acctIndex | [0],
          bic:    extensions[?name=='bic'].value   | [0],
          iban:   extensions[?name=='iban'].value  | [0],

          entProdCatCde: stmtAcctList[].acctIdr.entProdCatCde | [0],
          entProdTypCde: stmtAcctList[].acctIdr.entProdTypCde | [0],

          startSheet: stmtAcctList[].startSheet | [0],
          statementIds: stmtAcctList[].stmts[?stmtType=='BASE'][].{
            id:       stmtPart[].partId | [0],
            endDate:  stmtEndDt
          }
        }
      `;
        const validateEntries = (entry) => !checkSchema3({
          id: isString2,
          bic: isString2,
          iban: isString2,
          entProdCatCde: isString2,
          entProdTypCde: isString2,
          startSheet: isNumber2,
          statementIds: isValidStatementIds
        })("validateEntries")(entry);
        const entries = jmespath.search(json, entriesPath);
        const entriesValid = validateEntries(entries);
        if (!entriesValid) {
          const reason = `rtrvStmtAcctList :: Validation failed: ${entries}`;
          messages2.emit(actions.error.STATEMENTS, new TypeError(reason));
          return;
        }
        messages2.emit(actions2.received.STATEMENTS_LIST, [entries]);
      }
    });
    return AjaxRequester({
      name: "rtrvStmtAcctList",
      description: "Request a list of available statements in an account",
      method: "post",
      url: "/gpib/channel/proxy/accountDataSvc/rtrvStmtAcctList",
      setHeaders: hsbcCommonHeaders,
      setPayload: (options) => {
        const err = checkSchema3({
          ctryCde: isString2,
          grpMmbr: isString2,
          year: [isThisValue("Latest"), isString2],
          acctIndex: isString2,
          entProdTypCde: isString2,
          entProdCatCde: isString2
        })("AjaxRequester")(options);
        if (err) {
          const reason = `rtrvStmtAcctList :: Invalid options: ${err}`;
          messages2.emit(actions.error.STATEMENTS, new TypeError(reason));
          return;
        }
        const payload = {
          extensions: [
            {
              name: "date",
              value: options.year || "Latest"
            }
          ],
          custIdr: {
            entityID: {
              ctryCde: options.ctryCde,
              grpMmbr: options.grpMmbr
            },
            custID: " "
          },
          account: [
            {
              acctIdr: {
                acctIndex: options.acctIndex,
                entProdTypCde: options.entProdTypCde,
                entProdCatCde: options.entProdCatCde
              },
              procFlag: " ",
              eStmFlag: " ",
              emailId: " "
            }
          ]
        };
        return JSON.stringify(payload);
      }
    });
  }
  function isValidStatementIds(...statementIds) {
    return statementIds.every(({ id, endDate }) => {
      return typeof id === "string" && typeof endDate === "string";
    });
  }
  isValidStatementIds.displayName = "isValidStatementIds";

  // src/plugins/hsbc/requesters/statements.js
  var statements_default = configureStatementsInterceptor;
  function generateStatementListRequesterPayloads(accountsResponse, years = ["Latest"]) {
    return years.map((year) => accountsResponse.map((act) => ({
      year,
      acctIndex: act.id,
      ctryCde: act.ctryCde,
      grpMmbr: act.grpMmbr,
      entProdTypCde: act.entProdTypCde,
      entProdCatCde: act.entProdCatCde
    })));
  }
  function configureStatementsInterceptor() {
    const { messages: messages2 } = obis.deps;
    const { on: on2, emit } = messages2;
    const requestStatementListForAccount = addAccountStatementsInterceptor();
    const accountsResponse = [];
    on2(actions.got.ACCOUNTS, (_accountsResponse) => {
      accountsResponse.push(..._accountsResponse);
    });
    function updateProgressBar(max, value) {
      emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value });
    }
    function _requestStatements(years = ["Latest"]) {
      const statementListRequesters = generateStatementListRequesterPayloads(accountsResponse, years).flat().map((payload) => () => {
        const [prom, res, rej] = (0, import_promises.makePromise)();
        const resOff = on2(actions2.received.STATEMENTS_LIST, res);
        const rejOff = on2(actions.error.STATEMENTS, rej);
        requestStatementListForAccount(payload);
        updateProgressBar(statementListRequesters.length, ++count);
        return prom.finally(() => {
          resOff();
          rejOff();
        });
      });
      let count = 0;
      updateProgressBar(statementListRequesters.length, count);
      const CONCURRENT_REQUESTS_NOT_POSSIBLE_YET = 1;
      (0, import_promises.poolPromises)(CONCURRENT_REQUESTS_NOT_POSSIBLE_YET, ...statementListRequesters).then((everything) => {
        const fulfilled = everything.filter((x2) => x2.status === "fulfilled").map((x2) => x2.value[0]);
        if (!fulfilled.length) {
          const reasons = everything.filter((x2) => x2.status === "rejected").map((x2) => x2.reason);
          emit(actions.error.STATEMENTS, reasons);
          return;
        }
        const accountUpdates = fulfilled.map((x2) => ({
          id: x2.id,
          iban: x2.iban,
          bic: x2.bic,
          accountNumber: LEAVE_UNCHANGED,
          sortCode: LEAVE_UNCHANGED,
          name: LEAVE_UNCHANGED,
          type: LEAVE_UNCHANGED
        }));
        const statementsAdded = fulfilled.map((account) => account.statementIds.map((statement) => ({
          id: statement.id,
          accountId: account.id,
          endDate: new Date(statement.endDate).getTime(),
          startDate: LEAVE_UNCHANGED,
          startBalance: LEAVE_UNCHANGED,
          endBalance: LEAVE_UNCHANGED
        }))).flat();
        emit(actions.update.ACCOUNTS, accountUpdates);
        emit(actions.add.STATEMENTS, statementsAdded);
        emit(actions.got.STATEMENTS);
        accountsResponse.length = 0;
      });
    }
    return {
      canRequestStatements: () => !!accountsResponse.length,
      requestStatements: _requestStatements
    };
  }

  // src/plugins/hsbc/requesters/entries.js
  var import_promises2 = __toESM(require_promises());

  // src/common/obis/utils/currency.js
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
    return dateTime + "_" + md5(dateTime + (index !== void 0 ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount);
  }

  // src/plugins/hsbc/hijack/entries.js
  var checkSchema4 = ObjTypeError("addStatementDetailInterceptor#");
  function addStatementDetailInterceptor() {
    const { addAjaxListener, AjaxRequester, jmespath, messages: messages2 } = obis.deps;
    addAjaxListener({
      name: "rtrvStmtDetl",
      description: "Parse a statement part",
      rx: /\/accountDataSvc\/rtrvStmtDetl/,
      onFullResponse: (payload) => {
        const { data = "{}", responseText } = payload;
        const postData = JSON.parse(data);
        const json = JSON.parse(responseText);
        const idsPath = `
        {
          accountId: acctIdr.acctIndex,
          statementId: stmtDtl.stmtId
        }
      `;
        const ids = jmespath.search(postData, idsPath);
        const idsErr = checkSchema4({
          accountId: isString2,
          statementId: isString2
        })("ids")(ids);
        if (idsErr) {
          const reason = `rtrvStmtDetl :: Validation failed: ${idsErr}`;
          messages2.emit(actions.error.ENTRIES, new TypeError(reason));
          return;
        }
        const balancesPath = `
        stmtInfo.{
          startDate:      stmtPrdDetl.stmtPrdStrtDt,
          endDate:        stmtPrdDetl.stmtPrdEndDt,
          endBalance:     stmtStartBal.amt,
          startBalance:   stmtEndBal.amt
        }
      `;
        const balances = jmespath.search(json, balancesPath);
        const balancesErr = checkSchema4({
          startDate: isString2,
          startBalance: isNumber2,
          endDate: isString2,
          endBalance: isNumber2
        })("balances")(balances);
        if (balancesErr) {
          const reason = `rtrvStmtDetl :: Validation failed: ${balancesErr}`;
          messages2.emit(actions.error.ENTRIES, new TypeError(reason));
          return;
        }
        const entriesPath = `
        stmtInfo.stmtTxnDetl[].{
          fullDescription:   txnDetail[0],
          amount:            txnAmt.amt,
          runningBalance:    balRunAmt.amt,
          date:              txnDt
        }
      `;
        const validateEntry = (entry) => !checkSchema4({
          date: isString2,
          fullDescription: isString2,
          amount: isNumber2,
          runningBalance: [isNumber2, isThisValue(null)]
        })("validateEntry")(entry);
        const entries = jmespath.search(json, entriesPath);
        const entriesValid = entries.every(validateEntry);
        if (!entriesValid) {
          const reason = `rtrvStmtDetl :: Validation failed: ${entries}`;
          messages2.emit(actions.error.ENTRIES, new TypeError(reason));
          return;
        }
        const obisBalances = {
          ...ids,
          startDate: parseHsbcDateTimeString(balances.startDate),
          endDate: parseHsbcDateTimeString(balances.endDate),
          startBalance: Math.round(balances.startBalance * 100),
          endBalance: Math.round(balances.endBalance * 100)
        };
        const obisEntries = entries.map((entry) => {
          const { fullDescription, amount, runningBalance, date } = entry;
          const [payee, note] = parseDescriptionIntoPayeeAndNote(fullDescription);
          const debit = Math.round(Math.abs(Math.min(amount, 0)) * 100);
          const credit = Math.round(Math.max(amount, 0) * 100);
          const balance = Math.round(runningBalance * 100);
          const transaction = {
            ...ids,
            payee,
            note,
            date: parseHsbcDateTimeString(date),
            debit,
            credit,
            balance
          };
          const id = generateIdForTransaction(transaction);
          return {
            id,
            ...transaction
          };
        });
        messages2.emit(actions2.received.STATEMENT_DETAILS, {
          balances: obisBalances,
          entries: obisEntries
        });
      }
    });
    return AjaxRequester({
      name: "rtrvStmtDetl",
      description: "Request a statement part",
      method: "post",
      url: "/gpib/channel/proxy/accountDataSvc/rtrvStmtDetl",
      setHeaders: hsbcCommonHeaders,
      setPayload: (options) => {
        const err = checkSchema4({
          entProdTypCde: isString2,
          acctIndex: isString2,
          startSheet: isNumber2,
          stmtId: isString2,
          stmtDt: isString2
        })("AjaxRequester")(options);
        if (err) {
          const reason = `rtrvStmtDetl :: Invalid options: ${err}`;
          messages2.emit(actions.error.ENTRIES, new TypeError(reason));
          return;
        }
        const payload = {
          acctIdr: {
            acctIndex: options.acctIndex,
            entProdTypCde: options.entProdTypCde
          },
          startSheet: options.startSheet,
          bulkKey: 0,
          bulkKeyNum: 0,
          stmtDtl: {
            stmtId: options.stmtId,
            stmtDt: options.stmtDt,
            stmtType: "undefined"
          },
          pagingInfo: {},
          extensions: [
            {
              name: " ",
              value: "1"
            },
            {
              name: " ",
              value: "1"
            },
            {
              name: " ",
              value: "1"
            }
          ]
        };
        return JSON.stringify(payload);
      }
    });
  }

  // src/plugins/hsbc/requesters/entries.js
  var entries_default = configureEntriesInterceptor;
  function generateStatementDetailsRequesterPayloads(statementsListResponse) {
    return statementsListResponse.map((stmtList) => stmtList.statementIds.map((stmtMeta) => ({
      entProdTypCde: stmtList.entProdTypCde,
      acctIndex: stmtList.id,
      startSheet: stmtList.startSheet,
      stmtId: stmtMeta.id,
      stmtDt: stmtMeta.endDate
    })));
  }
  function configureEntriesInterceptor() {
    const { messages: messages2 } = obis.deps;
    const { on: on2, emit } = messages2;
    const requestStatementDetail = addStatementDetailInterceptor();
    const statementsListResponses = [];
    on2(actions2.received.STATEMENTS_LIST, (_statementsListResponse) => {
      statementsListResponses.push(..._statementsListResponse);
    });
    function updateProgressBar(max, value) {
      emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value });
    }
    function _requestEntries() {
      const statementDetailsRequesters = generateStatementDetailsRequesterPayloads(statementsListResponses).flat().map((payload) => () => {
        const [prom, res, rej] = (0, import_promises2.makePromise)();
        const resOff = on2(actions2.received.STATEMENT_DETAILS, res);
        const rejOff = on2(actions.error.ENTRIES, rej);
        requestStatementDetail(payload);
        updateProgressBar(statementDetailsRequesters.length, ++count);
        return prom.finally(() => {
          resOff();
          rejOff();
        });
      });
      let count = 0;
      updateProgressBar(statementDetailsRequesters.length, count);
      const CONCURRENT_REQUESTS_NOT_POSSIBLE_YET = 1;
      (0, import_promises2.poolPromises)(CONCURRENT_REQUESTS_NOT_POSSIBLE_YET, ...statementDetailsRequesters).then((everything) => {
        const fulfilled = everything.filter((x2) => x2.status === "fulfilled").map((x2) => x2.value);
        if (!fulfilled.length) {
          const reasons = everything.filter((x2) => x2.status === "rejected").map((x2) => x2.reason);
          emit(actions.error.ENTRIES, reasons);
          return;
        }
        const allBalances = fulfilled.map((x2) => x2.balances);
        const allEntries = fulfilled.map((x2) => x2.entries).flat();
        const statementUpdates = allBalances.map((balance) => {
          const { statementId, startDate, endDate, startBalance, endBalance } = balance;
          return {
            id: statementId,
            accountId: LEAVE_UNCHANGED,
            endDate,
            startDate,
            startBalance,
            endBalance
          };
        });
        const entriesAdded = allEntries.map((entry) => {
          const amount = entry.credit + -entry.debit;
          const type = amount < 0 ? "WITHD" : "DEP";
          return {
            id: entry.id,
            accountId: entry.accountId,
            statementId: entry.statementId,
            date: entry.date,
            type,
            payee: entry.payee,
            note: entry.note,
            debit: entry.debit,
            credit: entry.credit,
            balance: entry.balance
          };
        });
        emit(actions.update.STATEMENTS, statementUpdates);
        emit(actions.add.ENTRIES, entriesAdded);
        emit(actions.got.ENTRIES);
        statementsListResponses.length = 0;
      });
    }
    return {
      canRequestEntries: () => !!statementsListResponses.length,
      requestEntries: _requestEntries
    };
  }

  // src/plugins/hsbc/plugin.js
  obis.makePluginAvailable("hsbc-uk", () => {
    const { requestAccounts } = accounts_default();
    const { requestStatements } = statements_default();
    const { requestEntries } = entries_default();
    const fetcher = obis.fetchMachine;
    const { messages: messages2 } = obis.deps;
    const { emit } = messages2;
    let yearsToDownload;
    fetcher.performTransitions({
      "idle -> getting-accounts": {
        on: actions.get.ACCOUNTS,
        then: (requestedYearsToDownload) => {
          yearsToDownload = requestedYearsToDownload;
          console.log("requestedYearsToDownload = ", requestedYearsToDownload);
          requestAccounts();
        }
      },
      "getting-accounts -> found-accounts": {
        on: actions.got.ACCOUNTS,
        then: () => emit(actions.get.STATEMENTS)
      },
      "getting-accounts -> failed-accounts": {
        on: actions.error.ACCOUNTS,
        then: () => fetcher.enter("idle")
      },
      "found-accounts -> getting-statements": {
        on: actions.get.STATEMENTS,
        then: () => {
          const thisYear = new Date().getFullYear();
          const yearsToRequest = new Array(yearsToDownload).fill().map((_2, goBack) => String(thisYear - goBack));
          requestStatements(yearsToRequest.length ? yearsToRequest : ["Latest"]);
        }
      },
      "getting-statements -> found-statements": {
        on: actions.got.STATEMENTS,
        then: () => emit(actions.get.ENTRIES)
      },
      "getting-statements -> failed-statements": {
        on: actions.error.STATEMENTS,
        then: () => fetcher.enter("found-accounts")
      },
      "found-statements -> getting-entries": {
        on: actions.get.ENTRIES,
        then: () => requestEntries()
      },
      "getting-entries -> found-entries": {
        on: actions.got.ENTRIES,
        then: () => {
        }
      },
      "getting-entries -> failed-entries": {
        on: actions.error.ENTRIES,
        then: () => fetcher.enter("found-statements")
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
    fetcher.info();
  });
})();
