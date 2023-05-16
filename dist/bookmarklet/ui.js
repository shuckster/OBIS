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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/vnode.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/hyperscriptVnode.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/hasOwn.js
  var require_hasOwn = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/hasOwn.js"(exports, module) {
      "use strict";
      module.exports = {}.hasOwnProperty;
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/hyperscript.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/trust.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/fragment.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/hyperscript.js
  var require_hyperscript2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/hyperscript.js"(exports, module) {
      "use strict";
      var hyperscript = require_hyperscript();
      hyperscript.trust = require_trust();
      hyperscript.fragment = require_fragment();
      module.exports = hyperscript;
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/promise/polyfill.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/promise/promise.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render/render.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render.js
  var require_render2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/render.js"(exports, module) {
      "use strict";
      module.exports = require_render()(typeof window !== "undefined" ? window : null);
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/api/mount-redraw.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/mount-redraw.js
  var require_mount_redraw2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/mount-redraw.js"(exports, module) {
      "use strict";
      var render = require_render2();
      module.exports = require_mount_redraw()(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null);
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/querystring/build.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/assign.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/build.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/request/request.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/request.js
  var require_request2 = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/request.js"(exports, module) {
      "use strict";
      var PromisePolyfill = require_promise();
      var mountRedraw = require_mount_redraw2();
      module.exports = require_request()(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw);
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/querystring/parse.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/parse.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/pathname/compileTemplate.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/util/censor.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/api/router.js
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

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/route.js
  var require_route = __commonJS({
    "node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/route.js"(exports, module) {
      "use strict";
      var mountRedraw = require_mount_redraw2();
      module.exports = require_router()(typeof window !== "undefined" ? window : null, mountRedraw);
    }
  });

  // node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/index.js
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

  // src/common/cjs/timers.js
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

  // src/common/cjs/promises.js
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

  // node_modules/.pnpm/match-iz@3.10.0/node_modules/match-iz/dist/index.js
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

  // src/common/cjs/fp.js
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

  // src/common/cjs/regexp.js
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

  // src/ui/index.js
  var import_mithril30 = __toESM(require_mithril());
  var import_timers3 = __toESM(require_timers());
  var import_promises2 = __toESM(require_promises());

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

  // node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
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

  // src/common/esm/bus.js
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
    const currentStore = store();
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
    const currentStore = store();
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
    const currentStore = store();
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
    const currentStore = store();
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

  // src/common/obis/zip.js
  var import_promises = __toESM(require_promises());

  // src/common/obis/utils/escape.js
  function ofxEscape(str) {
    return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
  }
  function csvEscape(str) {
    return String(str).replace(/"/g, '""').replace(/\r\n|\r|\n/g, " ").trim();
  }
  function qifEscape(str) {
    return String(str).replace(/\r\n|\r|\n/g, " ").trim();
  }

  // src/common/obis/utils/dates.js
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

  // src/common/obis/generators/csv.js
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

  // src/common/obis/utils/strings.js
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

  // src/common/obis/generators/hsbc-csv.js
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

  // src/common/obis/generators/json.js
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

  // src/common/obis/utils/sorting.js
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

  // src/common/obis/generators/midata.js
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

  // src/common/obis/generators/ofx.js
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

  // src/common/obis/generators/qif.js
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

  // src/common/esm/md5.js
  var { SparkMD5 } = obis.deps;
  function md5(str) {
    return SparkMD5.hash(str);
  }

  // src/common/obis/generators.js
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

  // src/common/obis/statements.js
  function compatMakeStatements() {
    const { accounts, statements, entries } = store();
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

  // src/common/obis/zip.js
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

  // src/ui/store/progressBar.js
  var progressBar = {
    max: 0,
    value: 0
  };

  // src/ui/components/app.jsx
  var import_mithril22 = __toESM(require_mithril());

  // node_modules/.pnpm/mithril-hooks@0.7.2_mithril@2.2.2/node_modules/mithril-hooks/dist/mithril-hooks.module.js
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

  // node_modules/.pnpm/mitt@3.0.0/node_modules/mitt/dist/mitt.mjs
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

  // node_modules/.pnpm/statebot@3.1.3/node_modules/statebot/dist/esm/statebot.mjs
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
    function define(word, definition) {
      dictionary[word] = dictionary[word] || [];
      dictionary[word].push(definition);
      return () => undefine(word, definition);
    }
    function definitionsOf(word) {
      return dictionary[word] || [];
    }
    return {
      define,
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

  // node_modules/.pnpm/statebot@3.1.3/node_modules/statebot/hooks/make-hooks.mjs
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

  // node_modules/.pnpm/statebot@3.1.3/node_modules/statebot/hooks/mithril/index.mjs
  var { useStatebot, useStatebotFactory, useStatebotEvent } = makeHooks({
    Statebot,
    useEffect,
    useState,
    useMemo
  });

  // src/ui/components/app.jsx
  var import_timers2 = __toESM(require_timers());

  // src/flows/uiWidgetStates.js
  var uiWidgetStates = `

  loading ->
  rendering-ui ->

    closed -> opened -> closed

`;

  // src/ui/components/constants.js
  var SUPPORTS_YEARS_SLIDER = false;
  var MAXIMUM_YEARS_TO_FETCH = 10;
  var DEFAULT_YEARS_TO_FETCH = 3;
  var STATEMENTS_KEEP_BALANCE_HISTORY = false;

  // src/ui/components/obis-overlay-widget/atoms/Header.jsx
  var import_mithril2 = __toESM(require_mithril());
  var Header = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril2.default)("h1", null, "OBIS | ", children);
  });

  // src/ui/components/obis-overlay-widget/_ObisOverlayWidget.jsx
  var import_mithril8 = __toESM(require_mithril());

  // node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
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

  // src/ui/components/common/VerticalAnimationContainer.jsx
  var import_mithril4 = __toESM(require_mithril());
  var import_timers = __toESM(require_timers());

  // src/ui/components/common/ContainerWithRef.jsx
  var import_mithril3 = __toESM(require_mithril());
  var ContainerWithRef = withHooks((props) => {
    const { children } = props || {};
    const { setRef = () => {
    } } = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", { oncreate: (vnode) => setRef(vnode.dom) }, children);
  });

  // src/ui/components/common/VerticalAnimationContainer.jsx
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

  // src/ui/components/common/Button.jsx
  var import_mithril6 = __toESM(require_mithril());
  var Button = withHooks((props) => {
    const { children } = props || {};
    const { className, onClick: handleClick, disabled } = props || {};
    return /* @__PURE__ */ (0, import_mithril6.default)("button", { className, onclick: handleClick, disabled }, children);
  });

  // src/ui/components/common/Dialog.jsx
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

  // src/ui/components/obis-overlay-widget/_ObisOverlayWidget.jsx
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

  // src/ui/components/obis-overlay-widget/YearsAndActionButtons.jsx
  var import_mithril11 = __toESM(require_mithril());

  // node_modules/.pnpm/match-iz@3.10.0/node_modules/match-iz/dist/index.mjs
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

  // src/ui/components/obis-overlay-widget/atoms/Actions.jsx
  var import_mithril9 = __toESM(require_mithril());
  var Actions = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril9.default)("div", { className: "actions" }, children);
  });

  // src/ui/components/obis-overlay-widget/YearsSlider.jsx
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

  // src/ui/components/obis-overlay-widget/YearsAndActionButtons.jsx
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

  // src/ui/components/obis-overlay-widget/ListOfAccountCards.jsx
  var import_mithril17 = __toESM(require_mithril());
  var import_fp2 = __toESM(require_fp());

  // src/ui/components/obis-overlay-widget/atoms/Account.jsx
  var import_mithril12 = __toESM(require_mithril());
  var Account = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril12.default)("div", { className: "account" }, children);
  });

  // src/ui/components/obis-overlay-widget/atoms/AccountName.jsx
  var import_mithril13 = __toESM(require_mithril());
  var AccountName = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril13.default)("h3", { className: "account-name" }, children);
  });

  // src/ui/components/obis-overlay-widget/atoms/Accounts.jsx
  var import_mithril14 = __toESM(require_mithril());
  var Accounts = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril14.default)("div", { className: "accounts" }, children);
  });

  // src/ui/components/obis-overlay-widget/atoms/StatementsLoaded.jsx
  var import_mithril15 = __toESM(require_mithril());
  var StatementsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril15.default)("div", { className: "statements-loaded" }, children);
  });

  // src/ui/components/obis-overlay-widget/atoms/YearsLoaded.jsx
  var import_mithril16 = __toESM(require_mithril());
  var YearsLoaded = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril16.default)("div", { className: "years-loaded" }, children);
  });

  // src/ui/components/obis-overlay-widget/ListOfAccountCards.jsx
  var ListOfAccountCards = withHooks(() => {
    return /* @__PURE__ */ (0, import_mithril17.default)(Accounts, null, store().accounts.map((account) => {
      const allStatementYears = (0, import_fp2.pipe)(
        store(),
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

  // src/ui/components/obis-overlay-widget/HelpAndProgressBar.jsx
  var import_mithril21 = __toESM(require_mithril());

  // src/ui/components/common/ProgressBar.jsx
  var import_mithril18 = __toESM(require_mithril());
  var ProgressBar = withHooks((props) => {
    const { value, max } = props || {};
    return /* @__PURE__ */ (0, import_mithril18.default)("progress", { value, max });
  });

  // src/ui/components/common/Subheader.jsx
  var import_mithril19 = __toESM(require_mithril());
  var Subheader = withHooks((props) => {
    const { children } = props || {};
    return /* @__PURE__ */ (0, import_mithril19.default)("h2", null, children);
  });

  // src/ui/components/common/ShowHelpOnError.jsx
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

  // src/ui/components/obis-overlay-widget/HelpAndProgressBar.jsx
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

  // src/ui/components/app.jsx
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

  // src/ui/components/statements-browser/_StatementsBrowser.jsx
  var import_mithril29 = __toESM(require_mithril());

  // src/ui/store/base.js
  var { messages: messages3 } = obis.deps;
  function useAccounts() {
    const [accounts, setAccounts] = useState(store().accounts);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        setAccounts(store().accounts);
      });
      return () => off();
    }, []);
    return accounts;
  }
  function useStatements() {
    const [statements, setStatements] = useState(store().statements);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        const sortedStatements = [...store().statements].sort(SortByNumber("endDate")).reverse();
        setStatements(sortedStatements);
      });
      return () => off();
    }, []);
    return statements;
  }
  function useEntries() {
    const [entries, setEntries] = useState(store().entries);
    useEffect(() => {
      const off = messages3.on(actions.STORE_UPDATED, () => {
        const sortedEntries = [...store().entries].sort(SortByNumber("date")).reverse();
        setEntries(sortedEntries);
      });
      return () => off();
    }, []);
    return entries;
  }

  // src/ui/store/derived.js
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

  // src/ui/components/statements-browser/_StatementsBrowser.jsx
  var import_fp3 = __toESM(require_fp());

  // src/ui/components/statements-browser/atoms/Info.jsx
  var import_mithril24 = __toESM(require_mithril());
  var Info = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });

  // src/ui/components/statements-browser/Accounts.jsx
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

  // src/ui/components/statements-browser/atoms/Cursor.jsx
  var Cursor = withHooks((props) => {
    const { children = [] } = props || {};
    return children;
  });

  // src/ui/components/statements-browser/Months.jsx
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

  // src/ui/components/statements-browser/Years.jsx
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

  // src/ui/components/statements-browser/Statement.jsx
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

  // src/ui/components/statements-browser/_StatementsBrowser.jsx
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
          @import url('${obis.rootPath}/statement.css');
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

  // src/ui/index.js
  var { fetchMachine: fetcher4 } = obis;
  var { messages: messages4 } = obis.deps;
  var { on, emit } = messages4;
  var { Emit: Emit2 } = fetcher4;
  window.store = store;
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
