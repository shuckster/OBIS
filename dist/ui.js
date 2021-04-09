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

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/vnode.js
  var require_vnode = __commonJS((exports, module) => {
    "use strict";
    function Vnode(tag, key, attrs, children, text, dom) {
      return {tag, key, attrs, children, text, dom, domSize: void 0, state: void 0, events: void 0, instance: void 0};
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
        for (var i2 = 1; i2 < input.length; i2++) {
          if ((input[i2] != null && input[i2].key != null) !== isKeyed) {
            throw new TypeError("Vnodes must either always have keys or never have keys!");
          }
        }
        for (var i2 = 0; i2 < input.length; i2++) {
          children[i2] = Vnode.normalize(input[i2]);
        }
      }
      return children;
    };
    module.exports = Vnode;
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/hyperscriptVnode.js
  var require_hyperscriptVnode = __commonJS((exports, module) => {
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/hyperscript.js
  var require_hyperscript = __commonJS((exports, module) => {
    "use strict";
    var Vnode = require_vnode();
    var hyperscriptVnode = require_hyperscriptVnode();
    var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
    var selectorCache = {};
    var hasOwn = {}.hasOwnProperty;
    function isEmpty(object) {
      for (var key in object)
        if (hasOwn.call(object, key))
          return false;
      return true;
    }
    function compileSelector(selector) {
      var match, tag = "div", classes = [], attrs = {};
      while (match = selectorParser.exec(selector)) {
        var type = match[1], value = match[2];
        if (type === "" && value !== "")
          tag = value;
        else if (type === "#")
          attrs.id = value;
        else if (type === ".")
          classes.push(value);
        else if (match[3][0] === "[") {
          var attrValue = match[6];
          if (attrValue)
            attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
          if (match[4] === "class")
            classes.push(attrValue);
          else
            attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
        }
      }
      if (classes.length > 0)
        attrs.className = classes.join(" ");
      return selectorCache[selector] = {tag, attrs};
    }
    function execSelector(state, vnode) {
      var attrs = vnode.attrs;
      var children = Vnode.normalizeChildren(vnode.children);
      var hasClass = hasOwn.call(attrs, "class");
      var className = hasClass ? attrs.class : attrs.className;
      vnode.tag = state.tag;
      vnode.attrs = null;
      vnode.children = void 0;
      if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
        var newAttrs = {};
        for (var key in attrs) {
          if (hasOwn.call(attrs, key))
            newAttrs[key] = attrs[key];
        }
        attrs = newAttrs;
      }
      for (var key in state.attrs) {
        if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)) {
          attrs[key] = state.attrs[key];
        }
      }
      if (className != null || state.attrs.className != null)
        attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
      if (hasClass)
        attrs.class = null;
      for (var key in attrs) {
        if (hasOwn.call(attrs, key) && key !== "key") {
          vnode.attrs = attrs;
          break;
        }
      }
      if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
        vnode.text = children[0].children;
      } else {
        vnode.children = children;
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/trust.js
  var require_trust = __commonJS((exports, module) => {
    "use strict";
    var Vnode = require_vnode();
    module.exports = function(html) {
      if (html == null)
        html = "";
      return Vnode("<", void 0, void 0, html, void 0, void 0);
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/fragment.js
  var require_fragment = __commonJS((exports, module) => {
    "use strict";
    var Vnode = require_vnode();
    var hyperscriptVnode = require_hyperscriptVnode();
    module.exports = function() {
      var vnode = hyperscriptVnode.apply(0, arguments);
      vnode.tag = "[";
      vnode.children = Vnode.normalizeChildren(vnode.children);
      return vnode;
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/hyperscript.js
  var require_hyperscript2 = __commonJS((exports, module) => {
    "use strict";
    var hyperscript = require_hyperscript();
    hyperscript.trust = require_trust();
    hyperscript.fragment = require_fragment();
    module.exports = hyperscript;
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/promise/polyfill.js
  var require_polyfill = __commonJS((exports, module) => {
    "use strict";
    var PromisePolyfill = function(executor) {
      if (!(this instanceof PromisePolyfill))
        throw new Error("Promise must be called with `new`");
      if (typeof executor !== "function")
        throw new TypeError("executor must be a function");
      var self2 = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
      var instance = self2._instance = {resolvers, rejectors};
      var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
      function handler(list, shouldAbsorb) {
        return function execute(value) {
          var then;
          try {
            if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
              if (value === self2)
                throw new TypeError("Promise can't be resolved w/ itself");
              executeOnce(then.bind(value));
            } else {
              callAsync(function() {
                if (!shouldAbsorb && list.length === 0)
                  console.error("Possible unhandled promise rejection:", value);
                for (var i2 = 0; i2 < list.length; i2++)
                  list[i2](value);
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
          for (var i2 = 0; i2 < list.length; i2++) {
            (function(i3) {
              function consume(value) {
                count++;
                values[i3] = value;
                if (count === total)
                  resolve(values);
              }
              if (list[i3] != null && (typeof list[i3] === "object" || typeof list[i3] === "function") && typeof list[i3].then === "function") {
                list[i3].then(consume, reject);
              } else
                consume(list[i3]);
            })(i2);
          }
      });
    };
    PromisePolyfill.race = function(list) {
      return new PromisePolyfill(function(resolve, reject) {
        for (var i2 = 0; i2 < list.length; i2++) {
          list[i2].then(resolve, reject);
        }
      });
    };
    module.exports = PromisePolyfill;
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/promise/promise.js
  var require_promise = __commonJS((exports, module) => {
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render/render.js
  var require_render = __commonJS((exports, module) => {
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
          throw new Error("`vnode.state` must not be modified");
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
        for (var i2 = start; i2 < end; i2++) {
          var vnode = vnodes[i2];
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
      var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"};
      function createHTML(parent, vnode, ns, nextSibling) {
        var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
        var temp = $doc.createElement(possibleParents[match[1]] || "div");
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
        var element = ns ? is ? $doc.createElementNS(ns, tag, {is}) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {is}) : $doc.createElement(tag);
        vnode.dom = element;
        if (attrs != null) {
          setAttrs(vnode, attrs, ns);
        }
        insertNode(parent, element, nextSibling);
        if (!maybeSetContentEditable(vnode)) {
          if (vnode.text != null) {
            if (vnode.text !== "")
              element.textContent = vnode.text;
            else
              vnode.children = [Vnode("#", void 0, void 0, vnode.text, void 0, void 0)];
          }
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
          if (isKeyed === null && isOldKeyed == null)
            return;
          if (isOldKeyed !== isKeyed) {
            removeNodes(parent, old, oldStart, old.length);
            createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
          } else if (!isKeyed) {
            var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
            start = start < oldStart ? start : oldStart;
            for (; start < commonLength; start++) {
              o2 = old[start];
              v2 = vnodes[start];
              if (o2 === v2 || o2 == null && v2 == null)
                continue;
              else if (o2 == null)
                createNode(parent, v2, hooks, ns, getNextSibling(old, start + 1, nextSibling));
              else if (v2 == null)
                removeNode(parent, o2);
              else
                updateNode(parent, o2, v2, hooks, getNextSibling(old, start + 1, nextSibling), ns);
            }
            if (old.length > commonLength)
              removeNodes(parent, old, start, old.length);
            if (vnodes.length > commonLength)
              createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
          } else {
            var oldEnd = old.length - 1, end = vnodes.length - 1, map, o2, v2, oe, ve, topSibling;
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
              v2 = vnodes[start];
              if (o2.key !== v2.key)
                break;
              oldStart++, start++;
              if (o2 !== v2)
                updateNode(parent, o2, v2, hooks, getNextSibling(old, oldStart, nextSibling), ns);
            }
            while (oldEnd >= oldStart && end >= start) {
              if (start === end)
                break;
              if (o2.key !== ve.key || oe.key !== v2.key)
                break;
              topSibling = getNextSibling(old, oldStart, nextSibling);
              moveNodes(parent, oe, topSibling);
              if (oe !== v2)
                updateNode(parent, oe, v2, hooks, topSibling, ns);
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
              var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i2 = 0, pos = 2147483647, matched = 0, map, lisIndices;
              for (i2 = 0; i2 < vnodesLength; i2++)
                oldIndices[i2] = -1;
              for (i2 = end; i2 >= start; i2--) {
                if (map == null)
                  map = getKeyMap(old, oldStart, oldEnd + 1);
                ve = vnodes[i2];
                var oldIndex = map[ve.key];
                if (oldIndex != null) {
                  pos = oldIndex < pos ? oldIndex : -1;
                  oldIndices[i2 - start] = oldIndex;
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
                  for (i2 = end; i2 >= start; i2--) {
                    v2 = vnodes[i2];
                    if (oldIndices[i2 - start] === -1)
                      createNode(parent, v2, hooks, ns, nextSibling);
                    else {
                      if (lisIndices[li] === i2 - start)
                        li--;
                      else
                        moveNodes(parent, v2, nextSibling);
                    }
                    if (v2.dom != null)
                      nextSibling = vnodes[i2].dom;
                  }
                } else {
                  for (i2 = end; i2 >= start; i2--) {
                    v2 = vnodes[i2];
                    if (oldIndices[i2 - start] === -1)
                      createNode(parent, v2, hooks, ns, nextSibling);
                    if (v2.dom != null)
                      nextSibling = vnodes[i2].dom;
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
          for (var i2 = 0; i2 < children.length; i2++) {
            var child = children[i2];
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
          if (vnode.text != null) {
            vnode.attrs.value = vnode.text;
            vnode.text = void 0;
          }
        }
        updateAttrs(vnode, old.attrs, vnode.attrs, ns);
        if (!maybeSetContentEditable(vnode)) {
          if (old.text != null && vnode.text != null && vnode.text !== "") {
            if (old.text.toString() !== vnode.text.toString())
              old.dom.firstChild.nodeValue = vnode.text;
          } else {
            if (old.text != null)
              old.children = [Vnode("#", void 0, void 0, old.text, void 0, old.dom.firstChild)];
            if (vnode.text != null)
              vnode.children = [Vnode("#", void 0, void 0, vnode.text, void 0, void 0)];
            updateNodes(element, old.children, vnode.children, hooks, null, ns);
          }
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
        var map = Object.create(null);
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
        var u2 = 0, v2 = 0, i2 = 0;
        var il = lisTemp.length = a2.length;
        for (var i2 = 0; i2 < il; i2++)
          lisTemp[i2] = a2[i2];
        for (var i2 = 0; i2 < il; ++i2) {
          if (a2[i2] === -1)
            continue;
          var j2 = result[result.length - 1];
          if (a2[j2] < a2[i2]) {
            lisTemp[i2] = j2;
            result.push(i2);
            continue;
          }
          u2 = 0;
          v2 = result.length - 1;
          while (u2 < v2) {
            var c2 = (u2 >>> 1) + (v2 >>> 1) + (u2 & v2 & 1);
            if (a2[result[c2]] < a2[i2]) {
              u2 = c2 + 1;
            } else {
              v2 = c2;
            }
          }
          if (a2[i2] < a2[result[u2]]) {
            if (u2 > 0)
              lisTemp[i2] = result[u2 - 1];
            result[u2] = i2;
          }
        }
        u2 = result.length;
        v2 = result[u2 - 1];
        while (u2-- > 0) {
          result[u2] = v2;
          v2 = lisTemp[v2];
        }
        lisTemp.length = 0;
        return result;
      }
      function getNextSibling(vnodes, i2, nextSibling) {
        for (; i2 < vnodes.length; i2++) {
          if (vnodes[i2] != null && vnodes[i2].dom != null)
            return vnodes[i2].dom;
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
            for (var i2 = 0; i2 < vnode.instance.length; i2++) {
              frag.appendChild(vnode.instance[i2]);
            }
          } else if (vnode.tag !== "[") {
            frag.appendChild(vnode.dom);
          } else if (vnode.children.length === 1) {
            vnode = vnode.children[0];
            if (vnode != null)
              continue;
          } else {
            for (var i2 = 0; i2 < vnode.children.length; i2++) {
              var child = vnode.children[i2];
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
        } else if (vnode.text != null || children != null && children.length !== 0)
          throw new Error("Child node of a contenteditable must be trusted");
        return true;
      }
      function removeNodes(parent, vnodes, start, end) {
        for (var i2 = start; i2 < end; i2++) {
          var vnode = vnodes[i2];
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
        for (var i2 = 0; i2 < vnode.instance.length; i2++) {
          parent.removeChild(vnode.instance[i2]);
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
              for (var i2 = 0; i2 < vnode.children.length; i2++) {
                var child = vnode.children[i2];
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
            for (var i2 = 0; i2 < children.length; i2++) {
              var child = children[i2];
              if (child != null)
                onremove(child);
            }
          }
        }
      }
      function setAttrs(vnode, attrs, ns) {
        for (var key in attrs) {
          setAttr(vnode, key, null, attrs[key], ns);
        }
      }
      function setAttr(vnode, key, old, value, ns) {
        if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object")
          return;
        if (key[0] === "o" && key[1] === "n")
          return updateEvent(vnode, key, value);
        if (key.slice(0, 6) === "xlink:")
          vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        else if (key === "style")
          updateStyle(vnode.dom, old, value);
        else if (hasPropertyKey(vnode, key, ns)) {
          if (key === "value") {
            if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement())
              return;
            if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value)
              return;
            if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value)
              return;
          }
          if (vnode.tag === "input" && key === "type")
            vnode.dom.setAttribute(key, value);
          else
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
        if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key))
          updateEvent(vnode, key, void 0);
        else if (key === "style")
          updateStyle(vnode.dom, old, null);
        else if (hasPropertyKey(vnode, key, ns) && key !== "className" && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) {
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
        if (attrs != null) {
          for (var key in attrs) {
            setAttr(vnode, key, old && old[key], attrs[key], ns);
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
      EventDict.prototype = Object.create(null);
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
      return function(dom, vnodes, redraw) {
        if (!dom)
          throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
        var hooks = [];
        var active = activeElement();
        var namespace = dom.namespaceURI;
        if (dom.vnodes == null)
          dom.textContent = "";
        vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes]);
        var prevRedraw = currentRedraw;
        try {
          currentRedraw = typeof redraw === "function" ? redraw : void 0;
          updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? void 0 : namespace);
        } finally {
          currentRedraw = prevRedraw;
        }
        dom.vnodes = vnodes;
        if (active != null && activeElement() !== active && typeof active.focus === "function")
          active.focus();
        for (var i2 = 0; i2 < hooks.length; i2++)
          hooks[i2]();
      };
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/render.js
  var require_render2 = __commonJS((exports, module) => {
    "use strict";
    module.exports = require_render()(window);
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/api/mount-redraw.js
  var require_mount_redraw = __commonJS((exports, module) => {
    "use strict";
    var Vnode = require_vnode();
    module.exports = function(render, schedule, console2) {
      var subscriptions = [];
      var rendering = false;
      var pending = false;
      function sync() {
        if (rendering)
          throw new Error("Nested m.redraw.sync() call");
        rendering = true;
        for (var i2 = 0; i2 < subscriptions.length; i2 += 2) {
          try {
            render(subscriptions[i2], Vnode(subscriptions[i2 + 1]), redraw);
          } catch (e) {
            console2.error(e);
          }
        }
        rendering = false;
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
          throw new TypeError("m.mount(element, component) expects a component, not a vnode");
        }
        var index = subscriptions.indexOf(root);
        if (index >= 0) {
          subscriptions.splice(index, 2);
          render(root, [], redraw);
        }
        if (component != null) {
          subscriptions.push(root, component);
          render(root, Vnode(component), redraw);
        }
      }
      return {mount, redraw};
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/mount-redraw.js
  var require_mount_redraw2 = __commonJS((exports, module) => {
    "use strict";
    var render = require_render2();
    module.exports = require_mount_redraw()(render, requestAnimationFrame, console);
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/querystring/build.js
  var require_build = __commonJS((exports, module) => {
    "use strict";
    module.exports = function(object) {
      if (Object.prototype.toString.call(object) !== "[object Object]")
        return "";
      var args = [];
      for (var key in object) {
        destructure(key, object[key]);
      }
      return args.join("&");
      function destructure(key2, value) {
        if (Array.isArray(value)) {
          for (var i2 = 0; i2 < value.length; i2++) {
            destructure(key2 + "[" + i2 + "]", value[i2]);
          }
        } else if (Object.prototype.toString.call(value) === "[object Object]") {
          for (var i2 in value) {
            destructure(key2 + "[" + i2 + "]", value[i2]);
          }
        } else
          args.push(encodeURIComponent(key2) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
      }
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/pathname/assign.js
  var require_assign = __commonJS((exports, module) => {
    "use strict";
    module.exports = Object.assign || function(target, source) {
      if (source)
        Object.keys(source).forEach(function(key) {
          target[key] = source[key];
        });
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/pathname/build.js
  var require_build2 = __commonJS((exports, module) => {
    "use strict";
    var buildQueryString = require_build();
    var assign = require_assign();
    module.exports = function(template, params) {
      if (/:([^\/\.-]+)(\.{3})?:/.test(template)) {
        throw new SyntaxError("Template parameter names *must* be separated");
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/request/request.js
  var require_request = __commonJS((exports, module) => {
    "use strict";
    var buildPathname = require_build2();
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
                  for (var i2 = 0; i2 < data.length; i2++) {
                    data[i2] = new args.type(data[i2]);
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
          if ({}.hasOwnProperty.call(args.headers, key) && name.test(key))
            return true;
        }
        return false;
      }
      return {
        request: makeRequest(function(url, args, resolve, reject) {
          var method = args.method != null ? args.method.toUpperCase() : "GET";
          var body = args.body;
          var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData);
          var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
          var xhr = new $window.XMLHttpRequest(), aborted = false;
          var original = xhr, replacedAbort;
          var abort = xhr.abort;
          xhr.abort = function() {
            aborted = true;
            abort.call(this);
          };
          xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : void 0, typeof args.password === "string" ? args.password : void 0);
          if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          }
          if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
            xhr.setRequestHeader("Accept", "application/json, text/*");
          }
          if (args.withCredentials)
            xhr.withCredentials = args.withCredentials;
          if (args.timeout)
            xhr.timeout = args.timeout;
          xhr.responseType = responseType;
          for (var key in args.headers) {
            if ({}.hasOwnProperty.call(args.headers, key)) {
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
                  if (!ev.target.responseType && typeof args.extract !== "function")
                    response = JSON.parse(ev.target.responseText);
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
                  try {
                    message = ev.target.responseText;
                  } catch (e) {
                    message = response;
                  }
                  var error = new Error(message);
                  error.code = ev.target.status;
                  error.response = response;
                  reject(error);
                }
              } catch (e) {
                reject(e);
              }
            }
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
          else if (body instanceof $window.FormData)
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/request.js
  var require_request2 = __commonJS((exports, module) => {
    "use strict";
    var PromisePolyfill = require_promise();
    var mountRedraw = require_mount_redraw2();
    module.exports = require_request()(window, PromisePolyfill, mountRedraw.redraw);
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/querystring/parse.js
  var require_parse = __commonJS((exports, module) => {
    "use strict";
    module.exports = function(string) {
      if (string === "" || string == null)
        return {};
      if (string.charAt(0) === "?")
        string = string.slice(1);
      var entries = string.split("&"), counters = {}, data = {};
      for (var i2 = 0; i2 < entries.length; i2++) {
        var entry = entries[i2].split("=");
        var key = decodeURIComponent(entry[0]);
        var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
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
          var isNumber2 = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
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
              cursor[level] = desc = isNumber2 ? [] : {};
            cursor = desc;
          }
        }
      }
      return data;
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/pathname/parse.js
  var require_parse2 = __commonJS((exports, module) => {
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/pathname/compileTemplate.js
  var require_compileTemplate = __commonJS((exports, module) => {
    "use strict";
    var parsePathname = require_parse2();
    module.exports = function(template) {
      var templateData = parsePathname(template);
      var templateKeys = Object.keys(templateData.params);
      var keys = [];
      var regexp = new RegExp("^" + templateData.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m7, key, extra) {
        if (key == null)
          return "\\" + m7;
        keys.push({k: key, r: extra === "..."});
        if (extra === "...")
          return "(.*)";
        if (extra === ".")
          return "([^/]+)\\.";
        return "([^/]+)" + (extra || "");
      }) + "$");
      return function(data) {
        for (var i2 = 0; i2 < templateKeys.length; i2++) {
          if (templateData.params[templateKeys[i2]] !== data.params[templateKeys[i2]])
            return false;
        }
        if (!keys.length)
          return regexp.test(data.path);
        var values = regexp.exec(data.path);
        if (values == null)
          return false;
        for (var i2 = 0; i2 < keys.length; i2++) {
          data.params[keys[i2].k] = keys[i2].r ? values[i2 + 1] : decodeURIComponent(values[i2 + 1]);
        }
        return true;
      };
    };
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/api/router.js
  var require_router = __commonJS((exports, module) => {
    "use strict";
    var Vnode = require_vnode();
    var m7 = require_hyperscript();
    var Promise2 = require_promise();
    var buildPathname = require_build2();
    var parsePathname = require_parse2();
    var compileTemplate = require_compileTemplate();
    var assign = require_assign();
    var sentinel = {};
    module.exports = function($window, mountRedraw) {
      var fireAsync;
      function setPath(path, data, options) {
        path = buildPathname(path, data);
        if (fireAsync != null) {
          fireAsync();
          var state = options ? options.state : null;
          var title = options ? options.title : null;
          if (options && options.replace)
            $window.history.replaceState(state, title, route.prefix + path);
          else
            $window.history.pushState(state, title, route.prefix + path);
        } else {
          $window.location.href = route.prefix + path;
        }
      }
      var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
      var SKIP = route.SKIP = {};
      function route(root, defaultRoute, routes) {
        if (root == null)
          throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
        var state = 0;
        var compiled = Object.keys(routes).map(function(route2) {
          if (route2[0] !== "/")
            throw new SyntaxError("Routes must start with a `/`");
          if (/:([^\/\.-]+)(\.{3})?:/.test(route2)) {
            throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");
          }
          return {
            route: route2,
            component: routes[route2],
            check: compileTemplate(route2)
          };
        });
        var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
        var p2 = Promise2.resolve();
        var scheduled = false;
        var onremove;
        fireAsync = null;
        if (defaultRoute != null) {
          var defaultData = parsePathname(defaultRoute);
          if (!compiled.some(function(i2) {
            return i2.check(defaultData);
          })) {
            throw new ReferenceError("Default route doesn't match any known routes");
          }
        }
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
          var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent).slice(route.prefix.length);
          var data = parsePathname(path);
          assign(data.params, $window.history.state);
          function fail() {
            if (path === defaultRoute)
              throw new Error("Could not resolve default route " + defaultRoute);
            setPath(defaultRoute, null, {replace: true});
          }
          loop(0);
          function loop(i2) {
            for (; i2 < compiled.length; i2++) {
              if (compiled[i2].check(data)) {
                var payload = compiled[i2].component;
                var matchedRoute = compiled[i2].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                  if (update !== lastUpdate)
                    return;
                  if (comp === SKIP)
                    return loop(i2 + 1);
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
                  }).then(update, fail);
                } else
                  update("div");
                return;
              }
            }
            fail();
          }
        }
        fireAsync = function() {
          if (!scheduled) {
            scheduled = true;
            callAsync(resolveRoute);
          }
        };
        if (typeof $window.history.pushState === "function") {
          onremove = function() {
            $window.removeEventListener("popstate", fireAsync, false);
          };
          $window.addEventListener("popstate", fireAsync, false);
        } else if (route.prefix[0] === "#") {
          fireAsync = null;
          onremove = function() {
            $window.removeEventListener("hashchange", resolveRoute, false);
          };
          $window.addEventListener("hashchange", resolveRoute, false);
        }
        return mountRedraw.mount(root, {
          onbeforeupdate: function() {
            state = state ? 2 : 1;
            return !(!state || sentinel === currentResolver);
          },
          oncreate: resolveRoute,
          onremove,
          view: function() {
            if (!state || sentinel === currentResolver)
              return;
            var vnode = [Vnode(component, attrs.key, attrs)];
            if (currentResolver)
              vnode = currentResolver.render(vnode[0]);
            return vnode;
          }
        });
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
          var options = vnode.attrs.options;
          var attrs2 = {}, onclick, href;
          assign(attrs2, vnode.attrs);
          attrs2.selector = attrs2.options = attrs2.key = attrs2.oninit = attrs2.oncreate = attrs2.onbeforeupdate = attrs2.onupdate = attrs2.onbeforeremove = attrs2.onremove = null;
          var child = m7(vnode.attrs.selector || "a", attrs2, vnode.children);
          if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
            child.attrs.href = null;
            child.attrs["aria-disabled"] = "true";
            child.attrs.onclick = null;
          } else {
            onclick = child.attrs.onclick;
            href = child.attrs.href;
            child.attrs.href = route.prefix + href;
            child.attrs.onclick = function(e) {
              var result;
              if (typeof onclick === "function") {
                result = onclick.call(e.currentTarget, e);
              } else if (onclick == null || typeof onclick !== "object") {
              } else if (typeof onclick.handleEvent === "function") {
                onclick.handleEvent(e);
              }
              if (result !== false && !e.defaultPrevented && (e.button === 0 || e.which === 0 || e.which === 1) && (!e.currentTarget.target || e.currentTarget.target === "_self") && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
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
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/route.js
  var require_route = __commonJS((exports, module) => {
    "use strict";
    var mountRedraw = require_mount_redraw2();
    module.exports = require_router()(window, mountRedraw);
  });

  // node_modules/.pnpm/mithril@2.0.4/node_modules/mithril/index.js
  var require_mithril = __commonJS((exports, module) => {
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
    module.exports = m7;
  });

  // src/common/cjs/timers.js
  var require_timers = __commonJS((exports, module) => {
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
      const cancel = () => clearTimeout(timerId);
      const debouncedFn = (...args) => {
        cancel();
        timerId = setTimeout(fn2, ms, ...args);
      };
      return [debouncedFn, cancel];
    }
    function makeThrottler(fn2, ms) {
      let canRun = true;
      const [reset, clear] = makeDebouncer(ms, () => canRun = true);
      const throttledFn = (...args) => {
        if (canRun) {
          canRun = false;
          reset();
          fn2(...args);
        }
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
      const timerId = setInterval(fn2, ms, {cleanup});
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
    function runFnWhenValueChanges({fn: fn2, getValueFn}) {
      const performCheck = makeValueChangeDetector({getValueFn, onChange: fn2});
      const checkPeriodInMs = 16;
      const cleanup = runFnPeriodically(performCheck, checkPeriodInMs);
      return cleanup;
    }
  });

  // src/common/cjs/promises.js
  var require_promises = __commonJS((exports, module) => {
    module.exports = {
      isThennable,
      makePromise: makePromise2,
      delay: delay2,
      unzip,
      makeIdleDetectorWithTimeout,
      poolPromises,
      runPromisesInSequence
    };
    var {seconds: seconds3, runOnce, makeDebouncer} = require_timers();
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
    }, {withinMs = 500, timeoutInMs = seconds3(5)}) {
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
      const {allowedToStartNext, bumpRunCount, unbump} = context;
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
    function runPromisesInSequence(initialState, ...promiseMakerFns) {
      const [promise, resolve, reject] = makePromise2();
      promiseMakerFns.reduce(promiseSequenceReducer(reject), Promise.resolve(initialState)).then(resolve).catch(reject);
      return promise;
    }
    function promiseSequenceReducer(reject) {
      return (lastPromise, createNextPromise) => {
        return lastPromise.then(createNextPromise, reject);
      };
    }
  });

  // node_modules/.pnpm/statebot@2.7.2/node_modules/statebot/dist/cjs/statebot.min.js
  var require_statebot_min = __commonJS((exports) => {
    "use strict";
    function t2(t3) {
      return {all: t3 = t3 || new Map(), on: function(n3, e2) {
        var r3 = t3.get(n3);
        r3 && r3.push(e2) || t3.set(n3, [e2]);
      }, off: function(n3, e2) {
        var r3 = t3.get(n3);
        r3 && r3.splice(r3.indexOf(e2) >>> 0, 1);
      }, emit: function(n3, e2) {
        (t3.get(n3) || []).slice().map(function(t4) {
          t4(e2);
        }), (t3.get("*") || []).slice().map(function(t4) {
          t4(n3, e2);
        });
      }};
    }
    function n2(t3) {
      return Array.isArray(t3);
    }
    function e(t3) {
      return typeof t3 == "function";
    }
    function r2(t3) {
      return typeof t3 == "string";
    }
    function o2(t3) {
      return typeof t3 == "object";
    }
    function i2(t3) {
      return !(t3 === null || !o2(t3)) && Object.getPrototypeOf(t3) === Object.prototype;
    }
    function s2(t3) {
      return !!r2(t3) || !!n2(t3) && t3.every(r2);
    }
    Object.defineProperty(exports, "__esModule", {value: true});
    function c2(t3) {
      return function(n3, o3, ...i3) {
        const s3 = Object.entries(o3).map(([t4, n4]) => ({argName: t4, argType: n4})), c3 = i3.map((...t4) => ((t5, n4, o4) => {
          const {argName: i4, argType: s4} = t5[o4];
          if (n4 === void 0)
            return `Argument undefined: "${i4}"`;
          const c4 = Array.isArray(s4) ? s4 : [s4], a4 = c4.map((t6) => e(t6) ? ((t7, n5, e2) => n5(e2) ? void 0 : `${n5.name}(${t7}) did not return true`)(i4, t6, n4) : ((t7, n5, e2) => typeof e2 === n5 ? void 0 : `Argument "${t7}" should be a ${n5}`)(i4, t6, n4)).filter(r2);
          return (c4.length > 1 ? a4.length > 1 : a4.length) ? `${a4.join("\n| ")}
> typeof ${i4} === ${typeof n4}(${JSON.stringify(n4)})` : void 0;
        })(s3, ...t4)).filter(r2);
        if (!c3.length)
          return;
        const a3 = Object.keys(o3).join(", ");
        return `
${t3 || ""}${n3}(${a3}):
${c3.map((t4) => `| ${t4}`).join("\n")}`;
      };
    }
    function a2(t3) {
      const n3 = t3.addListener ? (...n4) => t3.addListener(...n4) : (...n4) => t3.on(...n4), e2 = t3.removeListener ? (...n4) => t3.removeListener(...n4) : (...n4) => t3.off(...n4), r3 = new Map();
      return {emit: (n4, ...e3) => t3.emit(n4, e3), on: function(t4, e3) {
        let o3 = r3.get(e3);
        o3 || (o3 = {handleEvent: (t5) => e3(...t5 || []), refCount: 0}, r3.set(e3, o3)), o3.refCount += 1, n3(t4, o3.handleEvent);
      }, off: function(t4, n4) {
        let o3 = r3.get(n4);
        o3 && (e2(t4, o3.handleEvent), o3.refCount -= 1, o3.refCount === 0 && r3.delete(n4));
      }};
    }
    function u2(t3) {
      return t3.reduce((t4, n3) => t4.indexOf(n3) === -1 ? [...t4, n3] : t4, []);
    }
    function f2(t3) {
      return (...n3) => function(t4, ...n4) {
        const e2 = setTimeout(t4, 0, ...n4);
        return () => {
          clearTimeout(e2);
        };
      }(t3, ...n3);
    }
    function l2(t3) {
      let n3, e2 = false;
      return {fn: (...r3) => (e2 || (n3 = t3(...r3)), n3), revoke: () => {
        e2 = true;
      }};
    }
    function p2(t3, n3, e2, ...r3) {
      const o3 = [...r3].flat().reduce((t4, n4) => ({...t4, [n4]: 0}), {});
      function i3(t4) {
        const n4 = s3(t4) - 1;
        o3[t4] = Math.max(n4, 0);
      }
      function s3(t4) {
        return o3[t4] || 0;
      }
      return {increase: function(t4) {
        return o3[t4] = s3(t4) + 1, () => {
          i3(t4);
        };
      }, decrease: i3, countOf: s3, toValue: function() {
        return {description: `Statebot[${t3}]: ${e2}:`, table: Object.keys(o3).sort().map((t4) => [t4, o3[t4]]).map(([t4, e3]) => ({[n3]: t4, refs: e3 || "None"}))};
      }, refs: function() {
        return {...o3};
      }};
    }
    function m7(t3, n3) {
      function e2() {
        return t3 >= 1;
      }
      function o3() {
        return t3 >= 2;
      }
      function i3() {
        return t3 >= 3;
      }
      r2(t3) && (t3 = {info: 3, log: 2, warn: 1, none: 0}[t3] || 3);
      const {info: s3, table: c3, log: a3, warn: u3, error: f3} = n3 || console;
      return {canWarn: e2, canLog: o3, canInfo: i3, info: (...t4) => {
        i3() && s3(...t4);
      }, table: (...t4) => {
        o3() && c3(...t4);
      }, log: (...t4) => {
        o3() && a3(...t4);
      }, warn: (...t4) => {
        e2() && u3(...t4);
      }, error: (...t4) => {
        f3(...t4);
      }};
    }
    var h2 = /[\r\n]/;
    var d2 = "|";
    var g2 = "->";
    var $ = [d2, g2].map((t3) => t3.replace("|", "\\|")).join("|");
    var w2 = new RegExp(`(${$})$`);
    var E2 = /[^a-z0-9!@#$%^&*:_+=<>|~.\x2D]/gi;
    var v2 = /(\/\/[^\n\r]*)/;
    var T = c2("statebot.");
    function y2(t3) {
      const n3 = T("decomposeRoute", {templateLiteral: s2}, t3);
      if (n3)
        throw TypeError(n3);
      return O2(S2(t3)).flat(2);
    }
    function b2(t3) {
      const n3 = T("decomposeChart", {chart: s2}, t3);
      if (n3)
        throw TypeError(n3);
      const e2 = O2(S2(t3)), r3 = e2.map(A2).flat(1).map(j2).flat(1);
      let o3 = false;
      const i3 = u2(r3.map((t4) => (t4.includes("") && (o3 = true), t4.join(g2)))), c3 = u2(e2.flat(3));
      return {transitions: i3.map((t4) => t4.split(g2)), routes: i3, states: o3 ? c3 : c3.filter(Boolean)};
    }
    function S2(t3) {
      const n3 = function(t4) {
        return [t4].flat().reduce((t5, n4) => [...t5, ...n4.split(h2)], []);
      }(t3), e2 = [];
      let r3 = false;
      const o3 = n3.reduce((t4, n4) => {
        const o4 = n4.replace(v2, "").replace(E2, "");
        return o4 ? (r3 = w2.test(o4), r3 ? t4 + o4 : (e2.push(t4 + o4), "")) : t4;
      }, "");
      return r3 || o3 ? [...e2, o3] : [...e2];
    }
    function O2(t3) {
      return t3.map((t4) => t4.split(g2).map((t5) => t5.split(d2)));
    }
    function A2(t3) {
      const n3 = [];
      return t3.reduce((t4, e2) => (t4 === false || n3.push([t4, [...e2]]), [...e2]), false), n3;
    }
    function j2([t3, n3]) {
      return t3.reduce((t4, e2) => [...t4, ...n3.map((t5) => [e2, t5])], []);
    }
    var x2 = "onExiting";
    var I2 = "onEntering";
    var L2 = "onExited";
    var N = "onEntered";
    var C = "onSwitching";
    var P2 = "onSwitched";
    var _2 = {[C]: "(ANY)state:changing", [P2]: "(ANY)state:changed"};
    function k2(t3, n3) {
      const e2 = [], r3 = [];
      return {configs: t3.reduce((t4, o3) => {
        const {routeChart: i3, action: s3} = o3, {states: c3, routes: a3, transitions: u3} = b2(i3);
        return n3() && (e2.push(...c3), r3.push(...a3)), [...t4, ...u3.map(([t5, n4]) => ({fromState: t5, toState: n4, action: s3}))];
      }, []), states: e2, routes: r3};
    }
    function R2(t3) {
      return i2(t3) && typeof t3.__STATEBOT__ == "number";
    }
    var M2 = c2("statebot.");
    var D2 = 0;
    function F2() {
      const t3 = Date.now();
      function n3(t4, n4) {
        return t4.toFixed(n4).replace(/\.0+$/, "");
      }
      return function() {
        const e2 = Date.now() - t3;
        return e2 < 500 ? `${n3(e2)} ms` : e2 < 5e3 ? `${n3(e2 / 1e3, 2)} s ` : e2 < 6e4 ? `${n3(e2 / 1e3, 1)} s ` : `${n3(e2 / 1e3 / 60, 1)} m `;
      };
    }
    exports.Statebot = function(s3, u3) {
      if (!r2(s3))
        throw new TypeError("\nStatebot: Please specify a name for this machine");
      const f3 = `Statebot[${s3}]`;
      if (!i2(u3))
        throw new TypeError(`
${f3}: Please specify options for this machine`);
      const {chart: l3, logLevel: h3 = 3, historyLimit: d3 = 2} = u3 || {}, $2 = u3.events === void 0 ? a2(t2()) : o2(w3 = u3.events) && e(w3.emit) && (e(w3.addListener) || e(w3.on)) && (e(w3.removeListener) || e(w3.off)) && a2(u3.events);
      var w3;
      if (!$2)
        throw new TypeError(`
${f3}: Invalid event-emitter specified in options`);
      const {states: E3 = [], routes: v3 = []} = l3 ? b2(l3) : u3, {startIn: T2 = E3[0]} = u3;
      if (!E3.includes(T2))
        throw new Error(`${f3}: Starting-state not in chart: "${T2}"`);
      const y3 = c2(`${f3}#`), S3 = m7(h3, console), {canWarn: O3} = S3, A3 = [T2], j3 = Math.max(d3, 2);
      let R3 = 0;
      const {pause: M3, resume: D3, paused: F3, Pausable: Y} = function(t3, n3) {
        n3 = n3 || function() {
        };
        let e2 = !!t3;
        return {Pausable: function(t4) {
          return (...r3) => e2 ? (n3(), false) : t4(...r3);
        }, paused: () => e2, pause: () => {
          e2 = true;
        }, resume: () => {
          e2 = false;
        }};
      }(false, () => S3.warn(`${f3}: Ignoring callback, paused`)), B2 = a2(t2()), G2 = Y(B2.emit);
      function H2(t3, n3) {
        return B2.on(t3, n3), () => B2.off(t3, n3);
      }
      const U2 = p2(s3, "states", "Listening for the following state-changes", [...E3]), V2 = p2(s3, "transitions", "Listening for the following transitions", [...v3]), W2 = p2(s3, "events", "Listening for the following events");
      function z2(t3, o3) {
        const c3 = e(t3) ? t3({enter: tt, emit: Z2, Enter: it, Emit: ot}) : i2(t3) ? t3 : null;
        if (!i2(c3))
          throw new TypeError(`Statebot[${s3}]#${o3}(): Expected an object, or a function that returns an object`);
        const a3 = [], u4 = [], {transitionsForEvents: f4, transitionsOnly: l4} = function(t4) {
          const o4 = {}, s4 = [];
          return Object.entries(t4).map(([t5, c4]) => {
            if (e(c4))
              return void s4.push({routeChart: t5, action: c4});
            if (!i2(c4))
              return;
            const {on: a4, then: u5} = c4;
            if (r2(a4) || n2(a4)) {
              [a4].flat().map((n3) => {
                o4[n3] = o4[n3] || [], o4[n3].push({routeChart: t5, action: u5});
              });
            } else
              e(u5) && s4.push({routeChart: t5, action: c4});
          }), {transitionsForEvents: o4, transitionsOnly: s4};
        }(c3), p3 = Object.entries(f4).reduce(function(t4, [n3, e2]) {
          const {states: r3, routes: o4, configs: i3} = k2(e2, O3);
          O3() && (a3.push(...r3), u4.push(...o4));
          return {...t4, [n3]: i3};
        }, {}), m8 = k2(l4, O3), h4 = Object.entries(p3).map(function([t4, n3]) {
          return [W2.increase(t4), nt(t4, (...e2) => {
            n3.map((t5) => ({...t5, args: e2})).some(d4) || st(`Event not handled: "${t4}"`);
          })];
        }).concat(m8.configs.map(function(t4) {
          const {fromState: n3, toState: e2, action: r3} = t4, o4 = `${n3}->${e2}`;
          return [V2.increase(o4), H2(o4, r3)];
        })).flat();
        if (O3()) {
          a3.push(...m8.states), u4.push(...m8.routes);
          const t4 = a3.filter((t5) => !E3.includes(t5)), n3 = u4.filter((t5) => !v3.includes(t5));
          t4.length && S3.warn(`Statebot[${s3}]#${o3}(): Invalid states specified:
` + t4.map((t5) => `  > "${t5}"`).join("\n")), n3.length && S3.warn(`Statebot[${s3}]#${o3}(): Invalid transitions specified:
` + n3.map((t5) => `  > "${t5}"`).join("\n"));
        }
        return () => h4.map((t4) => t4());
        function d4({fromState: t4, toState: n3, action: r3, args: o4}) {
          return X2(t4, () => (tt(n3, ...o4), e(r3) && r3(...o4), true));
        }
      }
      function J() {
        return A3[A3.length - 2];
      }
      function K() {
        return A3[A3.length - 1];
      }
      function q2(t3) {
        const n3 = t3 !== void 0 ? t3 : K(), e2 = y3("statesAvailableFromHere", {state: r2}, n3);
        if (e2)
          throw new TypeError(e2);
        return v3.reduce((t4, e3) => {
          const [r3, o3] = e3.split(g2).map((t5) => t5.trim());
          return r3 === n3 ? [...t4, o3] : t4;
        }, []);
      }
      function Q2(t3, n3, ...r3) {
        const o3 = K() === t3;
        return n3 === void 0 ? o3 : o3 ? e(n3) ? n3(...r3) : n3 : null;
      }
      function X2(...t3) {
        const n3 = y3("inState", {state: [r2, i2]}, t3[0]);
        if (n3)
          throw new TypeError(n3);
        return i2(t3[0]) ? function(t4, ...n4) {
          const e2 = Object.entries(t4).find(([t5]) => Q2(t5));
          return e2 ? Q2(...e2.concat(n4)) : null;
        }(...t3) : Q2(...t3);
      }
      const Z2 = Y((t3, ...n3) => {
        const e2 = y3("emit", {eventName: r2}, t3);
        if (e2)
          throw new TypeError(e2);
        return $2.emit(t3, ...n3);
      }), tt = Y((t3, ...n3) => {
        const e2 = y3("enter", {state: r2}, t3);
        if (e2)
          throw new TypeError(e2);
        const o3 = K(), i3 = t3;
        if (i3 === o3)
          return st(`Already in state: "${i3}"`), false;
        if (!E3.includes(i3))
          return st(`Invalid state "${i3}", not switching`), false;
        const s4 = `${o3}->${i3}`;
        return v3.includes(s4) ? (S3.info(`${f3}: tId<${++R3}>: ${s4}`), A3.push(i3), A3.length > j3 && A3.shift(), G2(_2[C], i3, o3, ...n3), G2(s4, ...n3), G2(_2[P2], i3, o3, ...n3), true) : (st(`Invalid transition "${s4}", not switching`), false);
      });
      function nt(t3, n3) {
        const o3 = y3("onEvent", {eventName: r2, cb: e}, t3, n3);
        if (o3)
          throw new TypeError(o3);
        return $2.on(t3, n3), () => $2.off(t3, n3);
      }
      const et = Object.keys(_2).reduce((t3, n3) => ({...t3, [n3]: (t4) => {
        const r3 = y3(n3, {cb: e}, t4);
        if (r3)
          throw new TypeError(r3);
        const o3 = U2.increase(_2[n3]), i3 = H2(_2[n3], t4);
        return () => {
          i3(), o3();
        };
      }}), {}), rt = [[x2, C], [I2, C], [L2, P2], [N, P2]].reduce((t3, n3) => {
        const [o3, i3] = n3, s4 = o3.slice(2), c3 = s4.toLowerCase();
        return {...t3, [o3]: (t4, n4) => {
          const a3 = y3(o3, {state: r2, cb: e}, t4, n4);
          if (a3)
            throw new TypeError(a3);
          const u4 = [U2.increase(t4), U2.increase(`${t4}:${c3}`)], f4 = et[i3]((e2, r3, ...o4) => {
            s4.indexOf("Exit") === 0 ? t4 === r3 && n4(e2, ...o4) : t4 === e2 && n4(r3, ...o4);
          });
          return () => {
            f4(), u4.map((t5) => t5());
          };
        }};
      }, {});
      function ot(t3, ...n3) {
        const e2 = y3("Emit", {eventName: r2}, t3);
        if (e2)
          throw new TypeError(e2);
        return (...e3) => Z2(t3, ...n3, ...e3);
      }
      function it(t3, ...n3) {
        const e2 = y3("Enter", {state: r2}, t3);
        if (e2)
          throw new TypeError(e2);
        return (...e3) => tt(t3, ...n3, ...e3);
      }
      function st(t3) {
        const n3 = J(), e2 = K(), r3 = `${n3 === void 0 ? "[undefined]" : n3}->${e2}`, o3 = q2();
        o3.length ? S3.info(`${f3}: ${t3}
  > Previous transition: "${r3}"
  > From "${e2}", valid states are: [${o3.map((t4) => `"${t4}"`).join(", ")}]`) : S3.info(`${f3}: ${t3}
  > Previous transition: "${r3}"
  > There are no states available from "${e2}"`);
      }
      function ct(t3) {
        const {description: n3, table: e2} = t3.toValue();
        S3.log(n3), e2.length ? S3.table(e2) : S3.log("  > No information");
      }
      return {__STATEBOT__: 1, canTransitionTo: function(...t3) {
        const n3 = t3.flat(), e2 = y3("canTransitionTo", {state: r2}, n3[0]);
        if (e2)
          throw new TypeError(e2);
        if (!n3.length)
          return false;
        const o3 = q2();
        return n3.every((t4) => o3.includes(t4));
      }, currentState: K, emit: Z2, Emit: ot, enter: tt, Enter: it, history: () => [...A3], info: () => (S3.log(`${f3}: Information about this state-machine`), ct(U2), ct(V2), void ct(W2)), inspect: () => ({states: U2.refs(), transitions: V2.refs(), events: W2.refs()}), inState: X2, InState: function(...t3) {
        const n3 = y3("InState", {state: [r2, i2]}, t3[0]);
        if (n3)
          throw new TypeError(n3);
        return i2(t3[0]) ? function(t4, ...n4) {
          return (...e2) => X2(t4, ...n4, ...e2);
        }(...t3) : function(t4, n4, ...e2) {
          return (...r3) => X2(t4, n4, ...e2, ...r3);
        }(...t3);
      }, name: () => s3, onEntered: rt[N], onEntering: rt[I2], onEvent: nt, onExited: rt[L2], onExiting: rt[x2], onSwitched: et[P2], onSwitching: et[C], onTransitions: (t3) => z2(t3, "onTransitions"), pause: M3, paused: F3, performTransitions: (t3) => z2(t3, "performTransitions"), previousState: J, reset: function() {
        S3.warn(`${f3}: State-machine reset!`), A3.length = 0, A3.push(T2);
      }, resume: D3, statesAvailableFromHere: q2};
    }, exports.assertRoute = function(t3, n3, e2) {
      const r3 = M2("assertRoute", {machine: R2, expectedRoute: s2}, t3, n3);
      if (r3)
        throw TypeError(r3);
      D2 += 1;
      const {description: o3 = "Assertion complete", fromState: i3 = "", run: c3 = () => {
      }, permittedDeviations: a3 = 0, timeoutInMs: u3 = 1e3, logLevel: p3 = 3} = e2 || {}, h3 = m7(p3), d3 = `Statebot[${t3.name()}]: aId<${D2}>`, g3 = y2(n3);
      h3.log(`
${d3}: Asserting route: [${g3.join(" > ")}]`), h3.log(`${d3}: > Assertion will start from state: "${i3}"`);
      const $2 = f2(c3);
      let w3 = () => {
      };
      const E3 = F2();
      let v3, T2 = F2(), b3 = 0, S3 = true, O3 = false;
      const A3 = [...g3], j3 = function(t4, n4) {
        n4 = n4 || [];
        const e3 = [], r4 = (t4 = t4 || []).map((t5, e4) => n4[e4] || "center");
        let o4 = false;
        function i4() {
          o4 = true;
        }
        function s3(...n5) {
          if (o4)
            return;
          const r5 = t4.reduce((t5, e4, r6) => ({...t5, [e4]: n5[r6] || ""}), {});
          e3.push(r5);
        }
        function c4() {
          return e3.reduce((n5, e4) => t4.map((t5, r5) => Math.max(e4[t5].length, n5[r5])), t4.map(() => 0));
        }
        function a4() {
          const n5 = c4();
          function o5(t5, e4) {
            const o6 = n5[e4], i5 = r4[e4];
            return i5 === "left" ? t5.padEnd(o6) : i5 === "right" ? t5.padStart(o6) : t5;
          }
          return e3.reduce((n6, e4) => [...n6, t4.reduce((t5, n7, r5) => ({...t5, [n7]: o5(e4[n7], r5)}), {})], []);
        }
        return {lock: i4, addRow: s3, content: a4};
      }(["state", "expected", "info", "took"], ["center", "center", "left", "right"]), x3 = function(t4) {
        const {revoke: n4, fn: e3} = l2(t4);
        let r4;
        return function(...t5) {
          return r4 = e3(...t5), n4(), r4;
        };
      }((t4) => (I3("", "", "", "TOTAL: " + E3()), j3.lock(), h3.log(`
${d3}: ${o3}: [${t4 ? "FAILED" : "SUCCESS"}]`), h3.table(j3.content()), t4)), {addRow: I3} = j3;
      return new Promise((n4, e3) => {
        if (A3.length === 0)
          return void e3(x3(new Error("NO ROUTE TO TEST")));
        const r4 = (n5) => {
          for (; A3.length; ) {
            const e4 = A3.shift();
            I3(t3.currentState(), `(${e4})`, n5), O3 = false;
          }
          ((t4) => {
            clearTimeout(v3), w3(), c4(), e3(t4);
          })(x3(new Error(n5)));
        };
        t3.inState(i3) && (S3 = false, w3 = $2());
        const {revoke: o4, fn: s3} = l2((t4) => {
          v3 = setTimeout(() => {
            o4(), r4("TIMEOUT");
          }, u3), function(t5) {
            if (S3)
              I3(t5, "-", "PENDING");
            else {
              const n5 = A3[0];
              n5 === t5 ? (I3(t5, n5, O3 ? "REALIGNED" : "OKAY", T2()), O3 = false, A3.shift()) : (I3(t5, n5, "WRONG STATE", T2()), O3 = true, b3 += 1), T2 = F2();
            }
          }(t4), S3 && t4 === i3 && (S3 = false, w3 = $2()), b3 > a3 && (o4(), r4("TOO MANY DEVIATIONS")), A3.length <= 0 && (o4(), ((...t5) => {
            clearTimeout(v3), w3(), c4(), n4(...t5);
          })(x3()));
        }), c4 = t3.onSwitching(s3);
      });
    }, exports.decomposeChart = b2, exports.isStatebot = R2, exports.routeIsPossible = function(t3, n3) {
      const e2 = M2("routeIsPossible", {machine: R2, route: s2}, t3, n3);
      if (e2)
        throw TypeError(e2);
      const r3 = y2(n3);
      return r3.every((n4, e3) => {
        if (e3 === r3.length - 1)
          return true;
        {
          const o3 = r3[e3 + 1];
          return t3.statesAvailableFromHere(n4).includes(o3);
        }
      });
    };
  });

  // node_modules/.pnpm/statebot@2.7.2/node_modules/statebot/dist/cjs/statebot.dev.js
  var require_statebot_dev = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function mitt(n2) {
      return {all: n2 = n2 || new Map(), on: function(t2, e) {
        var i2 = n2.get(t2);
        i2 && i2.push(e) || n2.set(t2, [e]);
      }, off: function(t2, e) {
        var i2 = n2.get(t2);
        i2 && i2.splice(i2.indexOf(e) >>> 0, 1);
      }, emit: function(t2, e) {
        (n2.get(t2) || []).slice().map(function(n3) {
          n3(e);
        }), (n2.get("*") || []).slice().map(function(n3) {
          n3(t2, e);
        });
      }};
    }
    function isEventEmitter2(obj) {
      return isObject2(obj) && isFunction2(obj.emit) && (isFunction2(obj.addListener) || isFunction2(obj.on)) && (isFunction2(obj.removeListener) || isFunction2(obj.off));
    }
    function isArray2(obj) {
      return Array.isArray(obj);
    }
    function isFunction2(obj) {
      return typeof obj === "function";
    }
    function isString2(obj) {
      return typeof obj === "string";
    }
    function isObject2(obj) {
      return typeof obj === "object";
    }
    function isPojo2(obj) {
      if (obj === null || !isObject2(obj)) {
        return false;
      }
      return Object.getPrototypeOf(obj) === Object.prototype;
    }
    function isTemplateLiteral2(obj) {
      if (isString2(obj)) {
        return true;
      }
      if (!isArray2(obj)) {
        return false;
      }
      return obj.every(isString2);
    }
    var typeErrorStringIfFnReturnsFalse2 = (argName, argTypeFn, arg) => {
      return argTypeFn(arg) ? void 0 : `${argTypeFn.name}(${argName}) did not return true`;
    };
    var typeErrorStringIfTypeOfFails2 = (argName, argType, arg) => {
      return typeof arg === argType ? void 0 : `Argument "${argName}" should be a ${argType}`;
    };
    var typeErrorStringFromArgument2 = (argMap, arg, index) => {
      const {argName, argType} = argMap[index];
      if (arg === void 0) {
        return `Argument undefined: "${argName}"`;
      }
      const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
      const errorDescs = permittedArgTypes.map((argType2) => isFunction2(argType2) ? typeErrorStringIfFnReturnsFalse2(argName, argType2, arg) : typeErrorStringIfTypeOfFails2(argName, argType2, arg)).filter(isString2);
      const multipleTypesSpecified = permittedArgTypes.length > 1;
      const shouldError = multipleTypesSpecified ? errorDescs.length > 1 : errorDescs.length;
      if (shouldError) {
        return `${errorDescs.join("\n| ")}
> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`;
      }
    };
    function ArgTypeError2(errPrefix) {
      return function(fnName, typeMap, ...args) {
        const argMap = Object.entries(typeMap).map(([argName, argType]) => ({argName, argType}));
        const err = args.map((...args2) => typeErrorStringFromArgument2(argMap, ...args2)).filter(isString2);
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
      const emit2 = (eventName, ...args) => events.emit(eventName, args);
      const addListener = events.addListener ? (...args) => events.addListener(...args) : (...args) => events.on(...args);
      const removeListener = events.removeListener ? (...args) => events.removeListener(...args) : (...args) => events.off(...args);
      const wrapMap = new Map();
      function on3(eventName, fn2) {
        let fnMeta = wrapMap.get(fn2);
        if (!fnMeta) {
          fnMeta = {
            handleEvent: (args) => fn2(...args || []),
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
      return input.reduce((acc, one) => acc.indexOf(one) === -1 ? [...acc, one] : acc, []);
    }
    function defer(fn2, ...args) {
      const timer = setTimeout(fn2, 0, ...args);
      return () => {
        clearTimeout(timer);
      };
    }
    function Defer(fn2) {
      return (...args) => defer(fn2, ...args);
    }
    function Once(fn2) {
      const {revoke, fn: _fn} = Revokable(fn2);
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
    var argTypeError = ArgTypeError2("statebot.");
    function decomposeRoute(templateLiteral) {
      const err = argTypeError("decomposeRoute", {templateLiteral: isTemplateLiteral2}, templateLiteral);
      if (err) {
        throw TypeError(err);
      }
      const lines = condensedLines(templateLiteral);
      const linesOfTokens = tokenisedLines(lines);
      const route = linesOfTokens.flat(2);
      return route;
    }
    function decomposeChart(chart2) {
      const err = argTypeError("decomposeChart", {chart: isTemplateLiteral2}, chart2);
      if (err) {
        throw TypeError(err);
      }
      const lines = condensedLines(chart2);
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
    function Statebot3(name, options) {
      if (!isString2(name)) {
        throw new TypeError("\nStatebot: Please specify a name for this machine");
      }
      const logPrefix = `Statebot[${name}]`;
      if (!isPojo2(options)) {
        throw new TypeError(`
${logPrefix}: Please specify options for this machine`);
      }
      const {
        chart: chart2 = void 0,
        logLevel = 3,
        historyLimit = 2
      } = options || {};
      const events = options.events === void 0 ? wrapEmitter(mitt()) : isEventEmitter2(options.events) && wrapEmitter(options.events);
      if (!events) {
        throw new TypeError(`
${logPrefix}: Invalid event-emitter specified in options`);
      }
      const {states = [], routes = []} = chart2 ? decomposeChart(chart2) : options;
      const {startIn = states[0]} = options;
      if (!states.includes(startIn)) {
        throw new Error(`${logPrefix}: Starting-state not in chart: "${startIn}"`);
      }
      const argTypeError2 = ArgTypeError2(`${logPrefix}#`);
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
        const hitcherActions = isFunction2(hitcher) ? hitcher({enter, emit: emit2, Enter, Emit: Emit3}) : isPojo2(hitcher) ? hitcher : null;
        if (!isPojo2(hitcherActions)) {
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
        return () => allCleanupFns.map((fn2) => fn2());
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
            isFunction2(action) && action(...args);
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
      function currentState2() {
        return stateHistory[stateHistory.length - 1];
      }
      function canTransitionTo(...states2) {
        const testStates = states2.flat();
        const err = argTypeError2("canTransitionTo", {state: isString2}, testStates[0]);
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
        const _state = state !== void 0 ? state : currentState2();
        const err = argTypeError2("statesAvailableFromHere", {state: isString2}, _state);
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
        if (anyOrFn === void 0) {
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
        const match = Object.entries(stateObject).find(([state]) => _inState(state));
        return match ? _inState(...match.concat(fnArgs)) : null;
      }
      function inState(...args) {
        const err = argTypeError2("inState", {state: [isString2, isPojo2]}, args[0]);
        if (err) {
          throw new TypeError(err);
        }
        return isPojo2(args[0]) ? _inStateObject(...args) : _inState(...args);
      }
      const emit2 = Pausable((eventName, ...args) => {
        const err = argTypeError2("emit", {eventName: isString2}, eventName);
        if (err) {
          throw new TypeError(err);
        }
        return events.emit(eventName, ...args);
      });
      const enter = Pausable((state, ...args) => {
        const err = argTypeError2("enter", {state: isString2}, state);
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
      });
      function onEvent(eventName, cb) {
        const err = argTypeError2("onEvent", {eventName: isString2, cb: isFunction2}, eventName, cb);
        if (err) {
          throw new TypeError(err);
        }
        events.on(eventName, cb);
        return () => events.off(eventName, cb);
      }
      const switchMethods = Object.keys(INTERNAL_EVENTS).reduce((obj, methodName) => ({
        ...obj,
        [methodName]: (cb) => {
          const err = argTypeError2(methodName, {cb: isFunction2}, cb);
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
            const err = argTypeError2(methodName, {state: isString2, cb: isFunction2}, state, cb);
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
        const err = argTypeError2("Emit", {eventName: isString2}, eventName);
        if (err) {
          throw new TypeError(err);
        }
        return (...args) => emit2(eventName, ...[...curriedArgs, ...args]);
      }
      function Enter(state, ...curriedArgs) {
        const err = argTypeError2("Enter", {state: isString2}, state);
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
        const err = argTypeError2("InState", {state: [isString2, isPojo2]}, args[0]);
        if (err) {
          throw new TypeError(err);
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
        const inState2 = currentState2();
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
        currentState: currentState2,
        emit: emit2,
        Emit: Emit3,
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
        if (isFunction2(actionFnOrConfigObj)) {
          transitionsOnly.push({routeChart, action: actionFnOrConfigObj});
          return;
        }
        if (!isPojo2(actionFnOrConfigObj)) {
          return;
        }
        const {on: _on, then: _then} = actionFnOrConfigObj;
        const hasValidEventNames = isString2(_on) || isArray2(_on);
        if (hasValidEventNames) {
          const eventNames = [_on].flat();
          eventNames.map((name) => {
            transitionsForEvents[name] = transitionsForEvents[name] || [];
            transitionsForEvents[name].push({routeChart, action: _then});
          });
          return;
        }
        if (isFunction2(_then)) {
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
      return isPojo2(object) && typeof object.__STATEBOT__ === "number";
    }
    var argTypeError$1 = ArgTypeError2("statebot.");
    function routeIsPossible(machine, route) {
      const err = argTypeError$1("routeIsPossible", {machine: isStatebot, route: isTemplateLiteral2}, machine, route);
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
      const err = argTypeError$1("assertRoute", {machine: isStatebot, expectedRoute: isTemplateLiteral2}, machine, expectedRoute);
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
        const {revoke, fn: fn2} = Revokable((state) => {
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
        const removeOnSwitchingListener = machine.onSwitching(fn2);
      });
    }
    function Table(columns, alignments) {
      columns = columns || [];
      alignments = alignments || [];
      const table = [];
      const alignment = columns.map((_2, index) => alignments[index] || "center");
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
    exports.Statebot = Statebot3;
    exports.assertRoute = assertRoute;
    exports.decomposeChart = decomposeChart;
    exports.isStatebot = isStatebot;
    exports.routeIsPossible = routeIsPossible;
  });

  // node_modules/.pnpm/statebot@2.7.2/node_modules/statebot/index.js
  var require_statebot = __commonJS((exports, module) => {
    "use strict";
    if (typeof process !== "undefined" && true) {
      module.exports = require_statebot_min();
    } else {
      module.exports = require_statebot_dev();
    }
  });

  // src/ui/index.js
  var import_mithril6 = __toModule(require_mithril());
  var import_timers3 = __toModule(require_timers());
  var import_promises2 = __toModule(require_promises());

  // src/common/obis/actions.js
  var actions = {
    FIRST_RUN: "first-run",
    STORE_HYDRATED: "ui/store-hydrated",
    STORE_UPDATED: "ui/store-updated",
    ui: {
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

  // node_modules/.pnpm/immer@9.0.1/node_modules/immer/dist/immer.esm.js
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
      return typeof t2 == "function" && Function.toString.call(t2) === Z;
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
      o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = {configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2]});
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
  function g(n2) {
    O(n2), n2.p.forEach(S), n2.p = null;
  }
  function O(n2) {
    n2 === U && (U = n2.l);
  }
  function w(n2) {
    return U = {p: [], l: U, h: n2, m: true, _: 0};
  }
  function S(n2) {
    var r2 = n2[Q];
    r2.i === 0 || r2.i === 1 ? r2.j() : r2.g = true;
  }
  function P(r2, e) {
    e._ = e.p.length;
    var i2 = e.p[0], o2 = r2 !== void 0 && r2 !== i2;
    return e.h.O || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (g(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q], r2, e.u, e.s)) : r2 = M(e, i2, []), g(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
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
    var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
      var t3 = Array.isArray(n3), e2 = {i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false}, i2 = e2, o2 = en;
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
  var en = {get: function(n2, r2) {
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
    return n2.o[r2] === t2 && typeof t2 != "number" || (n2.o[r2] = t2, n2.D[r2] = true, true);
  }, deleteProperty: function(n2, r2) {
    return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  }, getOwnPropertyDescriptor: function(n2, r2) {
    var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e ? {writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2]} : e;
  }, defineProperty: function() {
    n(11);
  }, getPrototypeOf: function(n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function() {
    n(12);
  }};
  var on = {};
  i(en, function(n2, r2) {
    on[n2] = function() {
      return arguments[0] = arguments[0][0], r2.apply(this, arguments);
    };
  }), on.deleteProperty = function(r2, t2) {
    return false, en.deleteProperty.call(this, r2[0], t2);
  }, on.set = function(r2, t2, e) {
    return false, en.set.call(this, r2[0], t2, e, r2[0]);
  };
  var un = function() {
    function e(r2) {
      var e2 = this;
      this.O = B, this.F = true, this.produce = function(r3, i3, o2) {
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
            v2 ? g(c2) : O(c2);
          }
          return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c2, o2), P(n2, c2);
          }, function(n2) {
            throw g(c2), n2;
          }) : (j(c2, o2), P(f2, c2));
        }
        if (!r3 || typeof r3 != "object") {
          if ((f2 = i3(r3)) === H)
            return;
          return f2 === void 0 && (f2 = r3), e2.F && d(f2, true), f2;
        }
        n(21, r3);
      }, this.produceWithPatches = function(n2, r3) {
        return typeof n2 == "function" ? function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o2 = 1; o2 < t3; o2++)
            i4[o2 - 1] = arguments[o2];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        } : [e2.produce(n2, r3, function(n3, r4) {
          t2 = n3, i3 = r4;
        }), t2, i3];
        var t2, i3;
      }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
    }
    var i2 = e.prototype;
    return i2.createDraft = function(e2) {
      t(e2) || n(8), r(e2) && (e2 = D(e2));
      var i3 = w(this), o2 = R(this, e2, void 0);
      return o2[Q].C = true, O(i3), o2;
    }, i2.finishDraft = function(r2, t2) {
      var e2 = r2 && r2[Q];
      false;
      var i3 = e2.A;
      return j(i3, t2), P(void 0, i3);
    }, i2.setAutoFreeze = function(n2) {
      this.F = n2;
    }, i2.setUseProxies = function(r2) {
      r2 && !B && n(20), this.O = r2;
    }, i2.applyPatches = function(n2, t2) {
      var e2;
      for (e2 = t2.length - 1; e2 >= 0; e2--) {
        var i3 = t2[e2];
        if (i3.path.length === 0 && i3.op === "replace") {
          n2 = i3.value;
          break;
        }
      }
      var o2 = b("Patches").$;
      return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
        return o2(n3, t2.slice(e2 + 1));
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
  (function() {
    if (typeof window.CustomEvent === "function")
      return false;
    function CustomEvent2(event2, params) {
      params = params || {bubbles: false, cancelable: false, detail: null};
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
    const eventMap = new Map();
    function emit2(eventName, ...args) {
      const detail = {eventName, args, timestamp: Date.now()};
      const event2 = new CustomEvent(BUS, {detail});
      global2.dispatchEvent(event2);
    }
    function on3(eventNameOrPattern, cb) {
      if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
      }
      const cbMap = eventMap.has(eventNameOrPattern) ? eventMap.get(eventNameOrPattern) : eventMap.set(eventNameOrPattern, new Map()).get(eventNameOrPattern);
      if (cbMap.has(cb)) {
        throw new Error("Callback already deals with this event");
      }
      const isPlainMatcher = typeof eventNameOrPattern === "string" && eventNameOrPattern.indexOf("*") === -1;
      const rx = typeof eventNameOrPattern === "string" ? rxFromString(eventNameOrPattern) : eventNameOrPattern instanceof RegExp ? eventNameOrPattern : null;
      if (rx === null) {
        const reason = `Could not figure-out eventNameOrPattern`;
        throw new Error(`${reason} = ${eventNameOrPattern}`);
      }
      const eventHandler = (event2) => {
        const {eventName, args} = event2.detail;
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
    function rxFromString(str) {
      if (!str.length) {
        throw new Error("String should not be empty");
      }
      const sanitized = str.split("*").map((x2) => x2.trim()).map(escapeRegExp);
      let rxString = sanitized.join(".*");
      if (sanitized.length === 1) {
        rxString = `^${rxString}$`;
      } else {
        if (sanitized[0] !== "") {
          rxString = `^${rxString}`;
        }
        if (sanitized[sanitized.length - 1] !== "") {
          rxString = `${rxString}$`;
        }
      }
      return new RegExp(rxString);
    }
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    return {
      emit: emit2,
      on: on3,
      off
    };
  }();

  // src/common/esm/types.js
  function isEventEmitter(obj) {
    return isObject(obj) && isFunction(obj.emit) && (isFunction(obj.addListener) || isFunction(obj.on)) && (isFunction(obj.removeListener) || isFunction(obj.off));
  }
  isEventEmitter.displayName = "isEventEmitter";
  function isUnset(obj) {
    return obj === null || obj === void 0;
  }
  isArray.displayName = "isUnset";
  function isArray(obj) {
    return Array.isArray(obj);
  }
  isArray.displayName = "isArray";
  function isArguments(obj) {
    if (!isObject(obj)) {
      return false;
    }
    const hasMap = isFunction(obj.map);
    const hasLength = isNumber(obj.length);
    const hasObjectPrototype = obj.__proto__ === Object.prototype;
    return hasObjectPrototype && hasLength && !hasMap;
  }
  isArguments.displayName = "isArguments";
  function isFunction(obj) {
    return typeof obj === "function";
  }
  isFunction.displayName = "isFunction";
  function isString(obj) {
    return typeof obj === "string";
  }
  isString.displayName = "isString";
  function isNumber(obj) {
    return typeof obj === "number";
  }
  isNumber.displayName = "isNumber";
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  isObject.displayName = "isObject";
  function isPojo(obj) {
    if (obj === null || !isObject(obj)) {
      return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  isPojo.displayName = "isPojo";
  function isTemplateLiteral(obj) {
    if (isString(obj)) {
      return true;
    }
    if (!isArray(obj)) {
      return false;
    }
    return obj.every(isString);
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
    const {argName, argType} = argMap[index];
    if (arg === void 0) {
      return `Argument undefined: "${argName}"`;
    }
    const permittedArgTypes = Array.isArray(argType) ? argType : [argType];
    const errorDescs = permittedArgTypes.map((argType2) => isFunction(argType2) ? typeErrorStringIfFnReturnsFalse(argName, argType2, arg) : typeErrorStringIfTypeOfFails(argName, argType2, arg)).filter(isString);
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
        const err = processedArgs.map(typeErrorStringFromArgument(argMap)).filter(isString);
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
        const values = valuesOf(obj, {keys});
        const err = objTypeError(fnName)(...values);
        return err;
      };
    };
  }
  function valuesOf(obj, options) {
    const {keys} = options;
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
    id: isString,
    accountNumber: isString,
    sortCode: isString,
    name: [isString, isUnset],
    type: [isString, isUnset],
    iban: [isString, isUnset],
    bic: [isString, isUnset]
  })(actions.add.ACCOUNTS);
  var checkSchemaForUpdatingAnAccount = checkSchema({
    id: isString,
    accountNumber: [isString, isUnset],
    sortCode: [isString, isUnset],
    name: [isString, isUnset],
    type: [isString, isUnset],
    iban: [isString, isUnset],
    bic: [isString, isUnset]
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
        draftState.accounts.push({...account});
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
    id: isString,
    accountId: isString,
    endDate: isNumber,
    startDate: [isNumber, isUnset],
    startBalance: [isNumber, isUnset],
    endBalance: [isNumber, isUnset]
  })(actions.add.STATEMENTS);
  var checkSchemaForUpdatingAStatement = checkSchema({
    id: isString,
    accountId: [isString, isUnset],
    endDate: isNumber,
    startDate: isNumber,
    startBalance: isNumber,
    endBalance: isNumber
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
          existingStatements.push(existingStatement);
          return;
        }
        draftState.statements.push({...statement});
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
    id: isString,
    accountId: isString,
    statementId: isString,
    date: isNumber,
    type: isString,
    payee: isString,
    note: isString,
    debit: isNumber,
    credit: isNumber,
    balance: isNumber
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
          existingEntries.push(existingEntry);
          return;
        }
        draftState.entries.push({...entry});
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
  var import_promises = __toModule(require_promises());

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

  // src/common/obis/utils/currency.js
  function convertCentsToDecimal(cents) {
    if (!cents || typeof cents !== "number") {
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
          const {debit, credit, id, date, payee, note, type} = entry;
          const transactionAmount = convertCentsToDecimal(debit + credit);
          csv.push('"' + csvEscape(id) + '","' + csvEscape(simpleDate(date)) + '","' + csvEscape(statement.type) + '","' + csvEscape(statement.sortCode + " " + statement.accountNumber) + '","' + csvEscape(payee) + '","' + csvEscape(note || "") + '","' + csvEscape(type) + '","' + csvEscape(transactionAmount) + '"');
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
          const {debit, credit, id, date, payee, note, type} = entry;
          const transactionAmount = convertCentsToDecimal(debit + credit);
          csv.push('"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(addSpaces(payee, 25) + addSpaces(note || "", 25) + type) + '","' + csvEscape(transactionAmount) + '"');
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
      generate: (statement) => JSON.stringify(statement, (key, replacementValue) => {
        if (["debit", "credit", "balance"].indexOf(key) !== -1) {
          const float = parseFloat(convertCentsToDecimal(replacementValue));
          if (isNaN(float)) {
            return key === "balance" ? void 0 : 0;
          } else {
            return float;
          }
        }
        return replacementValue;
      }, 2)
    };
  }

  // src/common/obis/utils/sorting.js
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

  // src/common/obis/generators/midata.js
  function makeGenerator4() {
    return {
      id: "MIDATA",
      folder: "midata",
      extension: "csv",
      description: "midata (non-standard, CSV)",
      generate: (statement) => {
        const initialBalanceInCents = (statement.balances || [{date: 0, balance: 0}]).sort(SortByNumber("date"))[0].balance;
        let runningBalanceInCents = initialBalanceInCents;
        const csv = [" Date,Type,Merchant/Description,Debit/Credit,Balance", ""];
        statement.entries.forEach((entry) => {
          const {debit, credit, date, type, payee, note} = entry;
          const transactionAmountInCents = debit + credit;
          runningBalanceInCents += transactionAmountInCents;
          csv.push('"' + csvEscape(UKDateTimeString(date)) + '","' + csvEscape(type) + '","' + csvEscape(payee + (note || "")) + '","' + csvEscape(convertCentsToDecimal(transactionAmountInCents)) + '","' + csvEscape(convertCentsToDecimal(runningBalanceInCents)) + '"');
        });
        csv.push("", "Arranged overdraft limit," + csvEscape(UKDateTimeString(statement.date)) + ",\xA30.00", "");
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
        ofx = "OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n\n<OFX>\n\n	<SIGNONMSGSRSV1>\n		<SONRS>\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n			<DTSERVER>" + ofxEscape(dateTimeString(new Date())) + "</DTSERVER>\n			<LANGUAGE>" + ofxEscape(HSBC_OFX.LANGUAGE) + "</LANGUAGE>\n			<INTU.BID>" + ofxEscape(HSBC_OFX.INTU_BID) + "</INTU.BID>\n		</SONRS>\n	</SIGNONMSGSRSV1>\n\n	<BANKMSGSRSV1>\n\n		<STMTTRNRS>\n\n			<TRNUID>1</TRNUID>\n\n			<STATUS>\n				<CODE>0</CODE>\n				<SEVERITY>INFO</SEVERITY>\n			</STATUS>\n\n			<STMTRS>\n\n				<CURDEF>" + ofxEscape(HSBC_OFX.CURDEF) + "</CURDEF>\n\n				<BANKACCTFROM>\n					<BANKID>" + ofxEscape(statement.sortCode) + "</BANKID>\n					<ACCTID>" + ofxEscape(statement.sortCode + statement.accountNumber) + "</ACCTID>\n					<ACCTTYPE>CHECKING</ACCTTYPE>\n				</BANKACCTFROM>\n\n				<BANKTRANLIST>\n\n					<DTSTART>" + ofxEscape(dateTimeString(statement.balances[0].date)) + "</DTSTART>\n					<DTEND>" + ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) + "</DTEND>\n\n";
        statement.entries.forEach((entry) => {
          const {debit, credit, type, date, id, payee, note} = entry;
          const transactionAmount = convertCentsToDecimal(debit + credit);
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
        qif = "!Account\nN" + qifEscape(statement.type) + "\nA" + qifEscape(statement.sortCode + "/" + statement.sortCode + statement.accountNumber) + "\n/" + qifEscape(USDateTimeString(statement.balances[latestBalanceIndex].date)) + "\n$" + qifEscape(convertCentsToDecimal(statement.balances[latestBalanceIndex].balance)) + "\nTBank\n^\n!Type:Bank\n";
        statement.entries.forEach((entry) => {
          const {debit, credit, id, date, payee, note, type} = entry;
          const transactionAmount = convertCentsToDecimal(debit + credit);
          qif += "D" + qifEscape(USDateTimeString(date)) + "\nN" + qifEscape(debit + credit < 0 ? "WITHD" : "DEP") + "\nT" + qifEscape(transactionAmount) + "\nC\nP" + qifEscape(payee) + "\n" + (note ? "M" + qifEscape(note) + "\n" : "") + "^\n";
        });
        qif += "\n";
        return qif;
      }
    };
  }

  // src/common/esm/md5.js
  var {SparkMD5} = obis.deps;
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
    const transactionAmount = convertCentsToDecimal(debit + credit);
    return dateTime + "_" + md5(dateTime + (index !== void 0 ? index : "") + (accountNumber || "") + (sortCode || "") + (type || "") + (payee || "") + (note || "") + transactionAmount);
  }

  // src/common/obis/statements.js
  function compatMakeStatements() {
    const {accounts, statements, entries} = store();
    const compatStatements = statements.reduce((acc, statement) => {
      const statementAccount = accounts.find((account) => account.id === statement.accountId);
      const statementBalances = [
        compatMakeBalance(statement, "start"),
        compatMakeBalance(statement, "end")
      ];
      const statementEntries = entries.filter((entry) => entry.statementId === statement.id).map((entry) => {
        const {id, date, type: type2, payee, note, debit, credit, balance} = entry;
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
      const {iban, bic, type, name, accountNumber, sortCode} = statementAccount;
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

  // src/common/obis/zip.js
  var {fflate, saveAs} = obis.deps;
  function makeZip() {
    const {filename, content} = fflateBuildZipContent();
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
    const {filename, content} = compatBuildZipContent();
    return {
      filename,
      content: content.reduce((acc, {folder, files}) => {
        return {
          ...acc,
          [folder]: files.reduce((acc2, {name, content: content2}) => {
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
      const {generate, extension, folder} = generator;
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
    const {date, type, sortCode, accountNumber} = statement;
    const statementDate = new Date(date);
    return `${type} ${sortCode} ${accountNumber}`.replace(/[^a-zA-Z0-9-]/g, "_") + "-" + statementDate.getFullYear() + "-" + zeroPad(statementDate.getMonth() + 1) + "-" + zeroPad(statementDate.getDate()) + "." + extension;
  }
  function zipnameFromStatement(statement) {
    const {date} = statement;
    const statementDate = new Date(date);
    return "OBIS-Statements-" + statementDate.getFullYear() + "-" + dateTimeString(new Date(), "_") + ".zip";
  }

  // src/ui/components/app.jsx
  var import_mithril4 = __toModule(require_mithril());

  // node_modules/.pnpm/mithril-hooks@0.6.3_mithril@2.0.4/node_modules/mithril-hooks/dist/mithril-hooks.mjs
  var import_mithril = __toModule(require_mithril());
  var currentState;
  var call = Function.prototype.call.bind(Function.prototype.call);
  var scheduleRender = () => import_mithril.default.redraw();
  var updateDeps = (deps) => {
    const state = currentState;
    const depsIndex = state.depsIndex++;
    const prevDeps = state.depsStates[depsIndex] || [];
    const shouldRecompute = deps === void 0 ? true : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x2, i2) => x2 === prevDeps[i2]) : !state.setup : false;
    if (deps !== void 0) {
      state.depsStates[depsIndex] = deps;
    }
    return shouldRecompute;
  };
  var effect = (isAsync = false) => (fn2, deps) => {
    const state = currentState;
    const shouldRecompute = updateDeps(deps);
    if (shouldRecompute) {
      const depsIndex = state.depsIndex;
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
    const index = state.statesIndex++;
    if (!state.setup) {
      state.states[index] = initialState;
    }
    return [
      state.states[index],
      (value) => {
        const previousValue = state.states[index];
        const newValue = newValueFn ? newValueFn(value, index) : value;
        state.states[index] = newValue;
        if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
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
        cleanups: new Map(),
        teardowns: new Map()
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
    };
    const teardown = (vnode) => {
      const prevState = currentState;
      currentState = vnode.state;
      try {
        [...vnode.state.teardowns.values()].forEach(call);
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

  // node_modules/.pnpm/statebot-mithril-hooks@1.2.0_e960771ee17908bb2774079709a1d229/node_modules/statebot-mithril-hooks/dist/esm/statebot-mithril-hooks.js
  var import_statebot = __toModule(require_statebot());
  function useStatebot(bot) {
    const [state, setState] = useState(bot.currentState());
    useEffect(() => {
      let done = false;
      const removeListener = bot.onSwitched((toState) => {
        if (!done) {
          setState(toState);
        }
      });
      return () => {
        done = true;
        removeListener();
      };
    }, [bot]);
    return state;
  }
  function useStatebotFactory(name, config) {
    const {bot, listeners} = useMemo(() => {
      const {
        performTransitions = {},
        onTransitions = {},
        ...botConfig
      } = config || {};
      const bot2 = (0, import_statebot.Statebot)(name, botConfig);
      const listeners2 = [
        bot2.performTransitions(performTransitions),
        bot2.onTransitions(onTransitions)
      ];
      return {
        bot: bot2,
        listeners: listeners2
      };
    }, []);
    useEffect(() => () => {
      if (typeof bot.pause === "function") {
        bot.pause();
      }
      listeners.forEach((off) => off());
    }, [bot, listeners]);
    const state = useStatebot(bot);
    return {state, bot};
  }

  // node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
  function toVal(mix) {
    var k2, y2, str = "";
    if (typeof mix === "string" || typeof mix === "number") {
      str += mix;
    } else if (typeof mix === "object") {
      if (Array.isArray(mix)) {
        for (k2 = 0; k2 < mix.length; k2++) {
          if (mix[k2]) {
            if (y2 = toVal(mix[k2])) {
              str && (str += " ");
              str += y2;
            }
          }
        }
      } else {
        for (k2 in mix) {
          if (mix[k2]) {
            str && (str += " ");
            str += k2;
          }
        }
      }
    }
    return str;
  }
  function clsx_m_default() {
    var i2 = 0, tmp, x2, str = "";
    while (i2 < arguments.length) {
      if (tmp = arguments[i2++]) {
        if (x2 = toVal(tmp)) {
          str && (str += " ");
          str += x2;
        }
      }
    }
    return str;
  }

  // src/ui/components/animation.jsx
  var import_mithril2 = __toModule(require_mithril());
  var import_timers = __toModule(require_timers());
  var ContainerWithRef = withHooks((props) => {
    const {children} = props || {};
    const {setRef = () => {
    }} = props || {};
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
    const {children} = props || {};
    const {opened = false, durationInMs = 250} = props || {};
    const {state, bot} = useStatebotFactory("animated-close/open", {
      chart,
      startIn: opened ? "opened" : "closed",
      logLevel: 2,
      performTransitions: ({Emit: Emit3}) => ({
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

  // src/ui/components/dialog.jsx
  var import_mithril3 = __toModule(require_mithril());
  var Dialog = withHooks((props) => {
    const {children, hidden} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: clsx_m_default("dialog", {
        hidden
      })
    }, children);
  });
  var Header = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("h1", null, "OBIS | ", children);
  });
  var Subheader = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("h2", null, children);
  });
  var Button = withHooks((props) => {
    const {children} = props || {};
    const {className, handleClick, disabled} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("button", {
      className,
      onclick: handleClick,
      disabled
    }, children);
  });
  var YearsSlider = withHooks((props) => {
    const {value, max = 15, handleUpdate, disabled} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("input", {
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
    const {value, max} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("progress", {
      value,
      max
    });
  });
  var Account = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: "account"
    }, children);
  });
  var Accounts = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: "accounts"
    }, children);
  });
  var StatementsLoaded = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: "statements-loaded"
    }, children);
  });
  var YearsLoaded = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: "years-loaded"
    }, children);
  });
  var AccountName = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("h3", {
      className: "account-name"
    }, children);
  });
  var Actions = withHooks((props) => {
    const {children} = props || {};
    return /* @__PURE__ */ (0, import_mithril3.default)("div", {
      className: "actions"
    }, children);
  });

  // src/ui/components/app.jsx
  var import_timers2 = __toModule(require_timers());
  var {fetchMachine: fetcher} = obis;
  var {Statebot: Statebot2, messages: messages2} = obis.deps;
  var {Emit} = fetcher;
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
    const handleRangeSlider = useCallback((event2) => {
      const val = parseInt(event2?.target?.value, 10);
      setYearsToFetch(isNaN(val) ? DEFAULT_YEARS_TO_FETCH : val);
    }, [setYearsToFetch]);
    const handleFetchClick = useCallback(Emit(actions.get.ACCOUNTS, yearsToFetch), [yearsToFetch]);
    const handleViewStatementsClick = useCallback(Emit(actions.ui.VIEW_STATEMENTS), []);
    const handleDownloadAllClick = useCallback(Emit(actions.ui.DOWNLOAD_STATEMENTS), []);
    return /* @__PURE__ */ (0, import_mithril4.default)(Dialog, {
      hidden: !ready
    }, ready && /* @__PURE__ */ (0, import_mithril4.default)(Button, {
      className: clsx_m_default("toggle-button", {
        opened,
        closed
      }),
      handleClick: handleToggleOpen,
      disabled: !opened && !closed
    }, "\u21E7"), /* @__PURE__ */ (0, import_mithril4.default)(Header, null, obis.plugin.name), /* @__PURE__ */ (0, import_mithril4.default)(Subheader, null, ready ? opened ? "Hit the button below to try and download everything automatically." : "Welcome! Click that button on the right to see if we can download some statements." : "Loading...", /* @__PURE__ */ (0, import_mithril4.default)("br", null), /* @__PURE__ */ (0, import_mithril4.default)("br", null), fetcher.inState({
      "getting-accounts": "Finding accounts...",
      "getting-statements": "Getting statements...",
      "getting-entries": "Getting transactions..."
    }), /* @__PURE__ */ (0, import_mithril4.default)(ProgressBar, {
      ...progressBar
    })), ready && /* @__PURE__ */ (0, import_mithril4.default)(VerticalAnimationContainer, {
      opened
    }, /* @__PURE__ */ (0, import_mithril4.default)(Accounts, null, store().accounts.map((account) => {
      const allStatementYears = store().statements.filter((x2) => x2.accountId === account.id).map((x2) => new Date(x2.endDate).getFullYear());
      const uniqueStatementYears = [...new Set(allStatementYears)];
      return /* @__PURE__ */ (0, import_mithril4.default)(Account, {
        key: account.id
      }, /* @__PURE__ */ (0, import_mithril4.default)(StatementsLoaded, null, "Statements: ", allStatementYears.length), /* @__PURE__ */ (0, import_mithril4.default)(YearsLoaded, null, uniqueStatementYears.join(" ")), /* @__PURE__ */ (0, import_mithril4.default)(AccountName, null, account.sortCode, " ", account.accountNumber));
    })), /* @__PURE__ */ (0, import_mithril4.default)(Actions, null, /* @__PURE__ */ (0, import_mithril4.default)(YearsSlider, {
      max: MAXIMUM_YEARS_TO_FETCH,
      value: yearsToFetch,
      handleUpdate: handleRangeSlider,
      disabled: !fetcher.inState("idle")
    }), /* @__PURE__ */ (0, import_mithril4.default)(Button, {
      handleClick: handleFetchClick,
      className: "fetch-everything",
      disabled: !fetcher.inState("idle")
    }, "Fetch ", yearsToFetch, " ", yearsToFetch == 1 ? "year" : "years"), /* @__PURE__ */ (0, import_mithril4.default)(Button, {
      handleClick: handleViewStatementsClick,
      disabled: !fetcher.inState("found-entries")
    }, "View statements"), /* @__PURE__ */ (0, import_mithril4.default)(Button, {
      handleClick: handleDownloadAllClick,
      disabled: !fetcher.inState("found-entries")
    }, "Download all"))));
  });

  // src/ui/components/statements.jsx
  var import_mithril5 = __toModule(require_mithril());

  // src/ui/store/base.js
  var {messages: messages3} = obis.deps;
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
  var UNKNOWN_ACCOUNT = {sortCode: "", accountNumber: ""};
  function useAccountStatements(accountId) {
    const accounts = useAccounts();
    const [account, setAccount] = useState();
    const [accountInfo, setAccountInfo] = useState();
    useEffect(() => {
      const account2 = accounts.find((x2) => x2.id === accountId);
      const {sortCode, accountNumber} = account2 ?? UNKNOWN_ACCOUNT;
      const accountInfo2 = `${sortCode} ${accountNumber}`;
      setAccount(account2);
      setAccountInfo(accountInfo2);
    }, [accounts, accountId, setAccount, setAccountInfo]);
    const statements = useStatements();
    const accountStatements = useMemo(() => statements.filter((x2) => x2.accountId === accountId), [statements, accountId]);
    const getNewest = useCallback(() => {
      return accountStatements[0]?.id;
    }, [accountStatements]);
    const getNewerThan = useCallback((statementId) => {
      const currentStatementIndex = accountStatements.map((x2, index) => x2.id === statementId ? index : null).filter((x2) => x2 !== null)[0];
      return accountStatements[Math.max(0, currentStatementIndex - 1)]?.id;
    }, [accountStatements]);
    const getOlderThan = useCallback((statementId) => {
      const currentStatementIndex = accountStatements.map((x2, index) => x2.id === statementId ? index : null).filter((x2) => x2 !== null)[0];
      return accountStatements[Math.min(accountStatements.length - 1, currentStatementIndex + 1)]?.id;
    }, [accountStatements]);
    const getNearestToDate = useCallback((timestamp) => {
      const statementsWithDateDeltas = accountStatements.map((x2) => ({
        dateDelta: Math.abs(timestamp - x2.endDate),
        id: x2.id
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
    const {startDate, startBalance, endDate, endBalance} = useMemo(() => statements.find((x2) => x2.id === statementId) ?? {}, [statements, statementId]);
    const entries = useEntries();
    const [statementEntries, setStatementEntries] = useState([]);
    const [totalDebit, setTotalDebit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [creditDebitDiff, setCreditDebitDiff] = useState(0);
    useEffect(() => {
      const statementEntries2 = entries.filter((x2) => x2.statementId === statementId);
      setStatementEntries(statementEntries2);
      const totalDebit2 = statementEntries2.reduce((acc, x2) => acc + x2.debit, 0);
      const totalCredit2 = statementEntries2.reduce((acc, x2) => acc + x2.credit, 0);
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

  // src/ui/components/statements.jsx
  function createStatementsWindow() {
    const windowRef = window.open("text/html", "obis", "width=1000,height=750,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
    windowRef.document.writeln(`
    <html>
      <head>
        <title>Statements</title>
        <style type="text/css">
          @import url('${obis.rootPath}/statement.css');
        </style>
      </head>
      <body
        onload="opener.messages.emit('${actions.ui.STATEMENTS_WINDOW_READY}');"
        onunload="opener.messages.emit('${actions.ui.STATEMENTS_WINDOW_CLOSED}');"
      >
      </body>
    </html>
  `);
    windowRef.document.close();
    return windowRef;
  }
  var Info = withHooks((props) => {
    const {children = []} = props || {};
    return children;
  });
  var Accounts2 = withHooks((props) => {
    const {selectedAccountId, handleClick} = props;
    const accounts = useAccounts();
    const clickHandler = useCallback((event2) => {
      const accountId = event2?.path.map((x2) => x2?.dataset?.account).filter(Boolean)[0];
      handleClick(accountId);
    }, [handleClick]);
    return accounts.map((account) => /* @__PURE__ */ (0, import_mithril5.default)("div", {
      onclick: clickHandler,
      key: account.id,
      "data-account": account.id,
      className: clsx_m_default("account", {
        selected: account.id === selectedAccountId
      })
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "statements-loaded"
    }), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "years-loaded"
    }), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "account-name"
    }, account.sortCode, " ", account.accountNumber)));
  });
  var Cursor = withHooks((props) => {
    const {children = []} = props || {};
    return children;
  });
  var Months = withHooks((props) => {
    const _months = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|");
    const {selectedMonth, months = [], handleClick} = props || {};
    const clickHandler = useCallback((event2) => handleClick(event2?.target?.dataset?.month), [handleClick]);
    return _months.map((month, index) => /* @__PURE__ */ (0, import_mithril5.default)("div", {
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
    const {selectedYear, years = [], handleClick} = props || {};
    const clickHandler = useCallback((event2) => handleClick(event2?.target?.dataset?.year), [handleClick]);
    return years.map((year) => /* @__PURE__ */ (0, import_mithril5.default)("div", {
      onclick: clickHandler,
      key: year,
      "data-year": year,
      className: clsx_m_default("year", {
        selected: year == selectedYear
      })
    }, year));
  });
  var Statement = withHooks((props) => {
    const {selectedStatementId} = props;
    const {entries, startBalance, endBalance} = useStatementEntries(selectedStatementId);
    let totalCredit = 0;
    let totalDebit = 0;
    let runningBalance = startBalance ?? 0;
    const rows = entries.map((entry) => {
      const {id, date, type, payee, note, debit, credit, balance} = entry;
      totalDebit -= debit;
      totalCredit += credit;
      runningBalance += credit - debit;
      return /* @__PURE__ */ (0, import_mithril5.default)("tr", {
        key: id
      }, /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: "no-wrap"
      }, simpleDate(date)), /* @__PURE__ */ (0, import_mithril5.default)("td", null, type), /* @__PURE__ */ (0, import_mithril5.default)("td", null, payee), /* @__PURE__ */ (0, import_mithril5.default)("td", null, note), /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: "currency"
      }, convertCentsToDecimal(debit)), /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: "currency"
      }, convertCentsToDecimal(credit)), /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: clsx_m_default("currency", {
          negative: balance < 0
        })
      }, convertCentsToDecimal(balance)), /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: clsx_m_default("currency", {
          negative: runningBalance < 0
        })
      }, convertCentsToDecimal(runningBalance)));
    });
    let emptyState;
    if (!rows.length) {
      emptyState = /* @__PURE__ */ (0, import_mithril5.default)("tr", null, /* @__PURE__ */ (0, import_mithril5.default)("td", {
        className: "no-wrap no-entries",
        colspan: "8"
      }, "No entries for this period"));
    }
    return /* @__PURE__ */ (0, import_mithril5.default)("table", {
      className: "statement"
    }, /* @__PURE__ */ (0, import_mithril5.default)("thead", null, /* @__PURE__ */ (0, import_mithril5.default)("tr", {
      className: "table-header"
    }, /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Date"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Type"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Description"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Memo"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Debit"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Credit"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "Balance"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "(Calculated)"))), /* @__PURE__ */ (0, import_mithril5.default)("tbody", null, rows.length ? rows : emptyState), /* @__PURE__ */ (0, import_mithril5.default)("tfoot", null, /* @__PURE__ */ (0, import_mithril5.default)("tr", {
      className: "table-footer"
    }, /* @__PURE__ */ (0, import_mithril5.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril5.default)("th", null, "\xA0"), /* @__PURE__ */ (0, import_mithril5.default)("th", {
      className: "currency"
    }, convertCentsToDecimal(totalDebit)), /* @__PURE__ */ (0, import_mithril5.default)("th", {
      className: "currency"
    }, convertCentsToDecimal(totalCredit)), /* @__PURE__ */ (0, import_mithril5.default)("th", {
      className: "currency"
    }, convertCentsToDecimal(endBalance)), /* @__PURE__ */ (0, import_mithril5.default)("th", {
      className: "currency"
    }, convertCentsToDecimal(runningBalance)))));
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
    const [selectedStatementDate, setSelectedStatementDate] = useState(accountStatements.find((x2) => x2.id === selectedStatementId)?.endDate);
    useEffect(() => {
      const selectedStatement2 = accountStatements.find((x2) => x2.id === selectedStatementId);
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
      const allYears = accountStatements.map((x2) => new Date(x2.endDate).getFullYear());
      const uniqueYears = [...new Set(allYears)];
      const allMonths = accountStatements.filter((x2) => new Date(x2.endDate).getFullYear() == selectedYear).map((x2) => new Date(x2.endDate).getMonth());
      const uniqueMonths = [...new Set(allMonths)];
      setYears(uniqueYears);
      setMonths(uniqueMonths);
    }, [accountStatements, selectedStatementDate, selectedYear]);
    const selectedStatement = useStatementEntries(selectedStatementId);
    const {totalDebit, totalCredit, creditDebitDiff} = selectedStatement;
    const selectAccount = useCallback((accountId2) => setAccountId(accountId2), [
      setAccountId
    ]);
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
    return /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "grid-container"
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "header"
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "info-and-accounts"
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "info"
    }, /* @__PURE__ */ (0, import_mithril5.default)(Info, null, /* @__PURE__ */ (0, import_mithril5.default)("h1", null, "OBIS | Statements Browser"), /* @__PURE__ */ (0, import_mithril5.default)("h2", null, accountInfo, " \u2022", " ", !isNaN(selectedStatementDate) && simpleDate(selectedStatementDate)), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "balance-summary"
    }, totalCredit > 0 && /* @__PURE__ */ (0, import_mithril5.default)("span", null, convertCentsToDecimal(totalCredit), " in"), totalDebit > 0 && /* @__PURE__ */ (0, import_mithril5.default)("span", null, convertCentsToDecimal(totalDebit), " out"), creditDebitDiff !== 0 && /* @__PURE__ */ (0, import_mithril5.default)("span", {
      className: clsx_m_default({
        black: creditDebitDiff > 0,
        red: creditDebitDiff < 0
      })
    }, creditDebitDiff <= 0 ? "\u{1F4C9} " : "\u{1F4C8} ", convertCentsToDecimal(creditDebitDiff))))), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "accounts"
    }, /* @__PURE__ */ (0, import_mithril5.default)(Accounts2, {
      selectedAccountId: accountId,
      handleClick: selectAccount
    }))), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "cursor-and-months"
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "months"
    }, /* @__PURE__ */ (0, import_mithril5.default)(Months, {
      months,
      selectedMonth,
      handleClick: selectMonth
    })), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "cursor"
    }, /* @__PURE__ */ (0, import_mithril5.default)(Cursor, null, /* @__PURE__ */ (0, import_mithril5.default)("div", {
      onclick: olderStatement
    }, "Older"), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      onclick: latestStatement
    }, "\u2022"), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      onclick: newerStatement
    }, "Newer"))))), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "main"
    }, /* @__PURE__ */ (0, import_mithril5.default)(Statement, {
      selectedStatementId
    })), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "years"
    }, /* @__PURE__ */ (0, import_mithril5.default)("div", null, /* @__PURE__ */ (0, import_mithril5.default)(Years, {
      years,
      selectedYear,
      handleClick: selectYear
    }))), /* @__PURE__ */ (0, import_mithril5.default)("div", {
      className: "spacing"
    }));
  });

  // src/ui/index.js
  var {fetchMachine: fetcher2} = obis;
  var {messages: messages4} = obis.deps;
  var {on: on2, emit} = messages4;
  var {Emit: Emit2} = fetcher2;
  window.store = store;
  window.actions = actions;
  window.messages = messages4;
  function viewStatements() {
    const windowRef = createStatementsWindow();
    import_mithril6.default.mount(windowRef.document.body, StatementsPicker);
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
    emit(actions.ui.RENDERING, import_mithril6.default);
    const rootEl = document.querySelector("#obis-root") || document.body.appendChild(withProps(document.createElement("div"), {id: "obis-root"}));
    import_mithril6.default.mount(rootEl, App);
    const rafRedraw = () => requestAnimationFrame(() => import_mithril6.default.redraw());
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
  main();
})();
