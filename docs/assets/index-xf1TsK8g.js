var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Fv(a3, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const c in s) if (c !== "default" && !(c in a3)) {
        const f = Object.getOwnPropertyDescriptor(s, c);
        f && Object.defineProperty(a3, c, f.get ? f : { enumerable: true, get: () => s[c] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(a3, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const f of c) if (f.type === "childList") for (const p of f.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
  }).observe(document, { childList: true, subtree: true });
  function o(c) {
    const f = {};
    return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
  }
  function s(c) {
    if (c.ep) return;
    c.ep = true;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function Lg(a3) {
  return a3 && a3.__esModule && Object.prototype.hasOwnProperty.call(a3, "default") ? a3.default : a3;
}
var $c = { exports: {} }, vi = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var wm;
function Wv() {
  if (wm) return vi;
  wm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, c, f) {
    var p = null;
    if (f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      f = {};
      for (var h in c) h !== "key" && (f[h] = c[h]);
    } else f = c;
    return c = f.ref, { $$typeof: a3, type: s, key: p, ref: c !== void 0 ? c : null, props: f };
  }
  return vi.Fragment = r, vi.jsx = o, vi.jsxs = o, vi;
}
var Mm;
function Jv() {
  return Mm || (Mm = 1, $c.exports = Wv()), $c.exports;
}
var U = Jv(), qc = { exports: {} }, wt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Om;
function Iv() {
  if (Om) return wt;
  Om = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object" ? null : (E = b && E[b] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var z = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, R = Object.assign, x = {};
  function D(E, $, it) {
    this.props = E, this.context = $, this.refs = x, this.updater = it || z;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(E, $) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, $, "setState");
  }, D.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function k() {
  }
  k.prototype = D.prototype;
  function q(E, $, it) {
    this.props = E, this.context = $, this.refs = x, this.updater = it || z;
  }
  var B = q.prototype = new k();
  B.constructor = q, R(B, D.prototype), B.isPureReactComponent = true;
  var j = Array.isArray, w = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function Y(E, $, it, st, rt, St) {
    return it = St.ref, { $$typeof: a3, type: E, key: $, ref: it !== void 0 ? it : null, props: St };
  }
  function at(E, $) {
    return Y(E.type, $, void 0, void 0, void 0, E.props);
  }
  function X(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a3;
  }
  function v(E) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(it) {
      return $[it];
    });
  }
  var P = /\/+/g;
  function lt(E, $) {
    return typeof E == "object" && E !== null && E.key != null ? v("" + E.key) : $.toString(36);
  }
  function nt() {
  }
  function tt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(nt, nt) : (E.status = "pending", E.then(function($) {
          E.status === "pending" && (E.status = "fulfilled", E.value = $);
        }, function($) {
          E.status === "pending" && (E.status = "rejected", E.reason = $);
        })), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function F(E, $, it, st, rt) {
    var St = typeof E;
    (St === "undefined" || St === "boolean") && (E = null);
    var ht = false;
    if (E === null) ht = true;
    else switch (St) {
      case "bigint":
      case "string":
      case "number":
        ht = true;
        break;
      case "object":
        switch (E.$$typeof) {
          case a3:
          case r:
            ht = true;
            break;
          case S:
            return ht = E._init, F(ht(E._payload), $, it, st, rt);
        }
    }
    if (ht) return rt = rt(E), ht = st === "" ? "." + lt(E, 0) : st, j(rt) ? (it = "", ht != null && (it = ht.replace(P, "$&/") + "/"), F(rt, $, it, "", function(Ut) {
      return Ut;
    })) : rt != null && (X(rt) && (rt = at(rt, it + (rt.key == null || E && E.key === rt.key ? "" : ("" + rt.key).replace(P, "$&/") + "/") + ht)), $.push(rt)), 1;
    ht = 0;
    var Jt = st === "" ? "." : st + ":";
    if (j(E)) for (var Et = 0; Et < E.length; Et++) st = E[Et], St = Jt + lt(st, Et), ht += F(st, $, it, St, rt);
    else if (Et = C(E), typeof Et == "function") for (E = Et.call(E), Et = 0; !(st = E.next()).done; ) st = st.value, St = Jt + lt(st, Et++), ht += F(st, $, it, St, rt);
    else if (St === "object") {
      if (typeof E.then == "function") return F(tt(E), $, it, st, rt);
      throw $ = String(E), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ht;
  }
  function H(E, $, it) {
    if (E == null) return E;
    var st = [], rt = 0;
    return F(E, st, "", "", function(St) {
      return $.call(it, St, rt++);
    }), st;
  }
  function J(E) {
    if (E._status === -1) {
      var $ = E._result;
      $ = $(), $.then(function(it) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = it);
      }, function(it) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = it);
      }), E._status === -1 && (E._status = 0, E._result = $);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var W = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var $ = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E), error: E });
      if (!window.dispatchEvent($)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function et() {
  }
  return wt.Children = { map: H, forEach: function(E, $, it) {
    H(E, function() {
      $.apply(this, arguments);
    }, it);
  }, count: function(E) {
    var $ = 0;
    return H(E, function() {
      $++;
    }), $;
  }, toArray: function(E) {
    return H(E, function($) {
      return $;
    }) || [];
  }, only: function(E) {
    if (!X(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, wt.Component = D, wt.Fragment = o, wt.Profiler = c, wt.PureComponent = q, wt.StrictMode = s, wt.Suspense = g, wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, wt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, wt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, wt.cloneElement = function(E, $, it) {
    if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
    var st = R({}, E.props), rt = E.key, St = void 0;
    if ($ != null) for (ht in $.ref !== void 0 && (St = void 0), $.key !== void 0 && (rt = "" + $.key), $) !V.call($, ht) || ht === "key" || ht === "__self" || ht === "__source" || ht === "ref" && $.ref === void 0 || (st[ht] = $[ht]);
    var ht = arguments.length - 2;
    if (ht === 1) st.children = it;
    else if (1 < ht) {
      for (var Jt = Array(ht), Et = 0; Et < ht; Et++) Jt[Et] = arguments[Et + 2];
      st.children = Jt;
    }
    return Y(E.type, rt, void 0, void 0, St, st);
  }, wt.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }, E.Provider = E, E.Consumer = { $$typeof: f, _context: E }, E;
  }, wt.createElement = function(E, $, it) {
    var st, rt = {}, St = null;
    if ($ != null) for (st in $.key !== void 0 && (St = "" + $.key), $) V.call($, st) && st !== "key" && st !== "__self" && st !== "__source" && (rt[st] = $[st]);
    var ht = arguments.length - 2;
    if (ht === 1) rt.children = it;
    else if (1 < ht) {
      for (var Jt = Array(ht), Et = 0; Et < ht; Et++) Jt[Et] = arguments[Et + 2];
      rt.children = Jt;
    }
    if (E && E.defaultProps) for (st in ht = E.defaultProps, ht) rt[st] === void 0 && (rt[st] = ht[st]);
    return Y(E, St, void 0, void 0, null, rt);
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(E) {
    return { $$typeof: h, render: E };
  }, wt.isValidElement = X, wt.lazy = function(E) {
    return { $$typeof: S, _payload: { _status: -1, _result: E }, _init: J };
  }, wt.memo = function(E, $) {
    return { $$typeof: m, type: E, compare: $ === void 0 ? null : $ };
  }, wt.startTransition = function(E) {
    var $ = w.T, it = {};
    w.T = it;
    try {
      var st = E(), rt = w.S;
      rt !== null && rt(it, st), typeof st == "object" && st !== null && typeof st.then == "function" && st.then(et, W);
    } catch (St) {
      W(St);
    } finally {
      w.T = $;
    }
  }, wt.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, wt.use = function(E) {
    return w.H.use(E);
  }, wt.useActionState = function(E, $, it) {
    return w.H.useActionState(E, $, it);
  }, wt.useCallback = function(E, $) {
    return w.H.useCallback(E, $);
  }, wt.useContext = function(E) {
    return w.H.useContext(E);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(E, $) {
    return w.H.useDeferredValue(E, $);
  }, wt.useEffect = function(E, $) {
    return w.H.useEffect(E, $);
  }, wt.useId = function() {
    return w.H.useId();
  }, wt.useImperativeHandle = function(E, $, it) {
    return w.H.useImperativeHandle(E, $, it);
  }, wt.useInsertionEffect = function(E, $) {
    return w.H.useInsertionEffect(E, $);
  }, wt.useLayoutEffect = function(E, $) {
    return w.H.useLayoutEffect(E, $);
  }, wt.useMemo = function(E, $) {
    return w.H.useMemo(E, $);
  }, wt.useOptimistic = function(E, $) {
    return w.H.useOptimistic(E, $);
  }, wt.useReducer = function(E, $, it) {
    return w.H.useReducer(E, $, it);
  }, wt.useRef = function(E) {
    return w.H.useRef(E);
  }, wt.useState = function(E) {
    return w.H.useState(E);
  }, wt.useSyncExternalStore = function(E, $, it) {
    return w.H.useSyncExternalStore(E, $, it);
  }, wt.useTransition = function() {
    return w.H.useTransition();
  }, wt.version = "19.0.0", wt;
}
var zm;
function Tf() {
  return zm || (zm = 1, qc.exports = Iv()), qc.exports;
}
var A = Tf();
const na = Lg(A), lf = Fv({ __proto__: null, default: na }, [A]);
var Yc = { exports: {} }, bi = {}, Gc = { exports: {} }, Vc = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _m;
function tb() {
  return _m || (_m = 1, function(a3) {
    function r(H, J) {
      var W = H.length;
      H.push(J);
      t: for (; 0 < W; ) {
        var et = W - 1 >>> 1, E = H[et];
        if (0 < c(E, J)) H[et] = J, H[W] = E, W = et;
        else break t;
      }
    }
    function o(H) {
      return H.length === 0 ? null : H[0];
    }
    function s(H) {
      if (H.length === 0) return null;
      var J = H[0], W = H.pop();
      if (W !== J) {
        H[0] = W;
        t: for (var et = 0, E = H.length, $ = E >>> 1; et < $; ) {
          var it = 2 * (et + 1) - 1, st = H[it], rt = it + 1, St = H[rt];
          if (0 > c(st, W)) rt < E && 0 > c(St, st) ? (H[et] = St, H[rt] = W, et = rt) : (H[et] = st, H[it] = W, et = it);
          else if (rt < E && 0 > c(St, W)) H[et] = St, H[rt] = W, et = rt;
          else break t;
        }
      }
      return J;
    }
    function c(H, J) {
      var W = H.sortIndex - J.sortIndex;
      return W !== 0 ? W : H.id - J.id;
    }
    if (a3.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a3.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, h = p.now();
      a3.unstable_now = function() {
        return p.now() - h;
      };
    }
    var g = [], m = [], S = 1, b = null, C = 3, z = false, R = false, x = false, D = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function B(H) {
      for (var J = o(m); J !== null; ) {
        if (J.callback === null) s(m);
        else if (J.startTime <= H) s(m), J.sortIndex = J.expirationTime, r(g, J);
        else break;
        J = o(m);
      }
    }
    function j(H) {
      if (x = false, B(H), !R) if (o(g) !== null) R = true, tt();
      else {
        var J = o(m);
        J !== null && F(j, J.startTime - H);
      }
    }
    var w = false, V = -1, Y = 5, at = -1;
    function X() {
      return !(a3.unstable_now() - at < Y);
    }
    function v() {
      if (w) {
        var H = a3.unstable_now();
        at = H;
        var J = true;
        try {
          t: {
            R = false, x && (x = false, k(V), V = -1), z = true;
            var W = C;
            try {
              e: {
                for (B(H), b = o(g); b !== null && !(b.expirationTime > H && X()); ) {
                  var et = b.callback;
                  if (typeof et == "function") {
                    b.callback = null, C = b.priorityLevel;
                    var E = et(b.expirationTime <= H);
                    if (H = a3.unstable_now(), typeof E == "function") {
                      b.callback = E, B(H), J = true;
                      break e;
                    }
                    b === o(g) && s(g), B(H);
                  } else s(g);
                  b = o(g);
                }
                if (b !== null) J = true;
                else {
                  var $ = o(m);
                  $ !== null && F(j, $.startTime - H), J = false;
                }
              }
              break t;
            } finally {
              b = null, C = W, z = false;
            }
            J = void 0;
          }
        } finally {
          J ? P() : w = false;
        }
      }
    }
    var P;
    if (typeof q == "function") P = function() {
      q(v);
    };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), nt = lt.port2;
      lt.port1.onmessage = v, P = function() {
        nt.postMessage(null);
      };
    } else P = function() {
      D(v, 0);
    };
    function tt() {
      w || (w = true, P());
    }
    function F(H, J) {
      V = D(function() {
        H(a3.unstable_now());
      }, J);
    }
    a3.unstable_IdlePriority = 5, a3.unstable_ImmediatePriority = 1, a3.unstable_LowPriority = 4, a3.unstable_NormalPriority = 3, a3.unstable_Profiling = null, a3.unstable_UserBlockingPriority = 2, a3.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, a3.unstable_continueExecution = function() {
      R || z || (R = true, tt());
    }, a3.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < H ? Math.floor(1e3 / H) : 5;
    }, a3.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, a3.unstable_getFirstCallbackNode = function() {
      return o(g);
    }, a3.unstable_next = function(H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = C;
      }
      var W = C;
      C = J;
      try {
        return H();
      } finally {
        C = W;
      }
    }, a3.unstable_pauseExecution = function() {
    }, a3.unstable_requestPaint = function() {
    }, a3.unstable_runWithPriority = function(H, J) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var W = C;
      C = H;
      try {
        return J();
      } finally {
        C = W;
      }
    }, a3.unstable_scheduleCallback = function(H, J, W) {
      var et = a3.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? et + W : et) : W = et, H) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = W + E, H = { id: S++, callback: J, priorityLevel: H, startTime: W, expirationTime: E, sortIndex: -1 }, W > et ? (H.sortIndex = W, r(m, H), o(g) === null && H === o(m) && (x ? (k(V), V = -1) : x = true, F(j, W - et))) : (H.sortIndex = E, r(g, H), R || z || (R = true, tt())), H;
    }, a3.unstable_shouldYield = X, a3.unstable_wrapCallback = function(H) {
      var J = C;
      return function() {
        var W = C;
        C = J;
        try {
          return H.apply(this, arguments);
        } finally {
          C = W;
        }
      };
    };
  }(Vc)), Vc;
}
var km;
function eb() {
  return km || (km = 1, Gc.exports = tb()), Gc.exports;
}
var Xc = { exports: {} }, Ke = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dm;
function nb() {
  if (Dm) return Ke;
  Dm = 1;
  var a3 = Tf();
  function r(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = { d: { f: o, r: function() {
    throw Error(r(522));
  }, D: o, C: o, L: o, m: o, X: o, S: o, M: o }, p: 0, findDOMNode: null }, c = Symbol.for("react.portal");
  function f(g, m, S) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: b == null ? null : "" + b, children: g, containerInfo: m, implementation: S };
  }
  var p = a3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ke.createPortal = function(g, m) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
    return f(g, m, null, S);
  }, Ke.flushSync = function(g) {
    var m = p.T, S = s.p;
    try {
      if (p.T = null, s.p = 2, g) return g();
    } finally {
      p.T = m, s.p = S, s.d.f();
    }
  }, Ke.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(g, m));
  }, Ke.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, Ke.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var S = m.as, b = h(S, m.crossOrigin), C = typeof m.integrity == "string" ? m.integrity : void 0, z = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      S === "style" ? s.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: b, integrity: C, fetchPriority: z }) : S === "script" && s.d.X(g, { crossOrigin: b, integrity: C, fetchPriority: z, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, Ke.preinitModule = function(g, m) {
    if (typeof g == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var S = h(m.as, m.crossOrigin);
        s.d.M(g, { crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && s.d.M(g);
  }, Ke.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var S = m.as, b = h(S, m.crossOrigin);
      s.d.L(g, S, { crossOrigin: b, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, Ke.preloadModule = function(g, m) {
    if (typeof g == "string") if (m) {
      var S = h(m.as, m.crossOrigin);
      s.d.m(g, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else s.d.m(g);
  }, Ke.requestFormReset = function(g) {
    s.d.r(g);
  }, Ke.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, Ke.useFormState = function(g, m, S) {
    return p.H.useFormState(g, m, S);
  }, Ke.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Ke.version = "19.0.0", Ke;
}
var Bm;
function $g() {
  if (Bm) return Xc.exports;
  Bm = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Xc.exports = nb(), Xc.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nm;
function ab() {
  if (Nm) return bi;
  Nm = 1;
  var a3 = eb(), r = Tf(), o = $g();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  var f = Symbol.for("react.element"), p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), C = Symbol.for("react.consumer"), z = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), j = Symbol.for("react.memo_cache_sentinel"), w = Symbol.iterator;
  function V(t) {
    return t === null || typeof t != "object" ? null : (t = w && t[w] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Y = Symbol.for("react.client.reference");
  function at(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Y ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case g:
        return "Fragment";
      case h:
        return "Portal";
      case S:
        return "Profiler";
      case m:
        return "StrictMode";
      case x:
        return "Suspense";
      case D:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case z:
        return (t.displayName || "Context") + ".Provider";
      case C:
        return (t._context.displayName || "Context") + ".Consumer";
      case R:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case k:
        return e = t.displayName || null, e !== null ? e : at(t.type) || "Memo";
      case q:
        e = t._payload, t = t._init;
        try {
          return at(t(e));
        } catch {
        }
    }
    return null;
  }
  var X = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.assign, P, lt;
  function nt(t) {
    if (P === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      P = e && e[1] || "", lt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + P + t + lt;
  }
  var tt = false;
  function F(t, e) {
    if (!t || tt) return "";
    tt = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var I = function() {
              throw Error();
            };
            if (Object.defineProperty(I.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(I, []);
              } catch (Q) {
                var L = Q;
              }
              Reflect.construct(t, [], I);
            } else {
              try {
                I.call();
              } catch (Q) {
                L = Q;
              }
              t.call(I.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              L = Q;
            }
            (I = t()) && typeof I.catch == "function" && I.catch(function() {
            });
          }
        } catch (Q) {
          if (Q && L && typeof Q.stack == "string") return [Q.stack, L.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      i && i.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = l.DetermineComponentFrameRoot(), d = u[0], y = u[1];
      if (d && y) {
        var T = d.split(`
`), O = y.split(`
`);
        for (i = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; i < O.length && !O[i].includes("DetermineComponentFrameRoot"); ) i++;
        if (l === T.length || i === O.length) for (l = T.length - 1, i = O.length - 1; 1 <= l && 0 <= i && T[l] !== O[i]; ) i--;
        for (; 1 <= l && 0 <= i; l--, i--) if (T[l] !== O[i]) {
          if (l !== 1 || i !== 1) do
            if (l--, i--, 0 > i || T[l] !== O[i]) {
              var K = `
` + T[l].replace(" at new ", " at ");
              return t.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", t.displayName)), K;
            }
          while (1 <= l && 0 <= i);
          break;
        }
      }
    } finally {
      tt = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? nt(n) : "";
  }
  function H(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return nt(t.type);
      case 16:
        return nt("Lazy");
      case 13:
        return nt("Suspense");
      case 19:
        return nt("SuspenseList");
      case 0:
      case 15:
        return t = F(t.type, false), t;
      case 11:
        return t = F(t.type.render, false), t;
      case 1:
        return t = F(t.type, true), t;
      default:
        return "";
    }
  }
  function J(t) {
    try {
      var e = "";
      do
        e += H(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function W(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, e.flags & 4098 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function et(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function E(t) {
    if (W(t) !== t) throw Error(s(188));
  }
  function $(t) {
    var e = t.alternate;
    if (!e) {
      if (e = W(t), e === null) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (l = i.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return E(i), t;
          if (u === l) return E(i), e;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) n = i, l = u;
      else {
        for (var d = false, y = i.child; y; ) {
          if (y === n) {
            d = true, n = i, l = u;
            break;
          }
          if (y === l) {
            d = true, l = i, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = u.child; y; ) {
            if (y === n) {
              d = true, n = u, l = i;
              break;
            }
            if (y === l) {
              d = true, l = u, n = i;
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function it(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = it(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var st = Array.isArray, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, St = { pending: false, data: null, method: null, action: null }, ht = [], Jt = -1;
  function Et(t) {
    return { current: t };
  }
  function Ut(t) {
    0 > Jt || (t.current = ht[Jt], ht[Jt] = null, Jt--);
  }
  function Mt(t, e) {
    Jt++, ht[Jt] = t.current, t.current = e;
  }
  var ce = Et(null), It = Et(null), Lt = Et(null), Oe = Et(null);
  function bn(t, e) {
    switch (Mt(Lt, e), Mt(It, t), Mt(ce, null), t = e.nodeType, t) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? nm(e) : 0;
        break;
      default:
        if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI) t = nm(t), e = am(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    Ut(ce), Mt(ce, e);
  }
  function Ye() {
    Ut(ce), Ut(It), Ut(Lt);
  }
  function Ht(t) {
    t.memoizedState !== null && Mt(Oe, t);
    var e = ce.current, n = am(e, t.type);
    e !== n && (Mt(It, t), Mt(ce, n));
  }
  function fe(t) {
    It.current === t && (Ut(ce), Ut(It)), Oe.current === t && (Ut(Oe), pi._currentValue = St);
  }
  var sn = Object.prototype.hasOwnProperty, Ue = a3.unstable_scheduleCallback, tn = a3.unstable_cancelCallback, bt = a3.unstable_shouldYield, $n = a3.unstable_requestPaint, He = a3.unstable_now, ut = a3.unstable_getCurrentPriorityLevel, ot = a3.unstable_ImmediatePriority, At = a3.unstable_UserBlockingPriority, Ot = a3.unstable_NormalPriority, zt = a3.unstable_LowPriority, Rt = a3.unstable_IdlePriority, Ce = a3.log, Ge = a3.unstable_setDisableYieldValue, te = null, Kt = null;
  function ft(t) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(te, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  function dt(t) {
    if (typeof Ce == "function" && Ge(t), Kt && typeof Kt.setStrictMode == "function") try {
      Kt.setStrictMode(te, t);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : Ve, Bt = Math.log, le = Math.LN2;
  function Ve(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Bt(t) / le | 0) | 0;
  }
  var en = 128, Gt = 4194304;
  function Pt(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Sn(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var l = 0, i = t.suspendedLanes, u = t.pingedLanes, d = t.warmLanes;
    t = t.finishedLanes !== 0;
    var y = n & 134217727;
    return y !== 0 ? (n = y & ~i, n !== 0 ? l = Pt(n) : (u &= y, u !== 0 ? l = Pt(u) : t || (d = y & ~d, d !== 0 && (l = Pt(d))))) : (y = n & ~i, y !== 0 ? l = Pt(y) : u !== 0 ? l = Pt(u) : t || (d = n & ~d, d !== 0 && (l = Pt(d)))), l === 0 ? 0 : e !== 0 && e !== l && !(e & i) && (i = l & -l, d = e & -e, i >= d || i === 32 && (d & 4194176) !== 0) ? e : l;
  }
  function Qn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function qn(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var t = en;
    return en <<= 1, !(en & 4194176) && (en = 128), t;
  }
  function Zf() {
    var t = Gt;
    return Gt <<= 1, !(Gt & 62914560) && (Gt = 4194304), t;
  }
  function Ns(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Cr(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function L0(t, e, n, l, i, u) {
    var d = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var y = t.entanglements, T = t.expirationTimes, O = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var K = 31 - Tt(n), I = 1 << K;
      y[K] = 0, T[K] = -1;
      var L = O[K];
      if (L !== null) for (O[K] = null, K = 0; K < L.length; K++) {
        var Q = L[K];
        Q !== null && (Q.lane &= -536870913);
      }
      n &= ~I;
    }
    l !== 0 && Ff(t, l, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e));
  }
  function Ff(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Tt(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194218;
  }
  function Wf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - Tt(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function Jf(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function If() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : xm(t.type));
  }
  function $0(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var wa = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + wa, nn = "__reactProps$" + wa, Ml = "__reactContainer$" + wa, Us = "__reactEvents$" + wa, q0 = "__reactListeners$" + wa, Y0 = "__reactHandles$" + wa, td = "__reactResources$" + wa, Ar = "__reactMarker$" + wa;
  function Hs(t) {
    delete t[Xe], delete t[nn], delete t[Us], delete t[q0], delete t[Y0];
  }
  function tl(t) {
    var e = t[Xe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Ml] || n[Xe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = im(t); t !== null; ) {
          if (n = t[Xe]) return n;
          t = im(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Ol(t) {
    if (t = t[Xe] || t[Ml]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Rr(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function zl(t) {
    var e = t[td];
    return e || (e = t[td] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ke(t) {
    t[Ar] = true;
  }
  var ed = /* @__PURE__ */ new Set(), nd = {};
  function el(t, e) {
    _l(t, e), _l(t + "Capture", e);
  }
  function _l(t, e) {
    for (nd[t] = e, t = 0; t < e.length; t++) ed.add(e[t]);
  }
  var ia = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), G0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ad = {}, ld = {};
  function V0(t) {
    return sn.call(ld, t) ? true : sn.call(ad, t) ? false : G0.test(t) ? ld[t] = true : (ad[t] = true, false);
  }
  function Yi(t, e, n) {
    if (V0(e)) if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var l = e.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Gi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function oa(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function xn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function rd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function X0(t) {
    var e = rd(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), l = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, u = n.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return i.call(this);
      }, set: function(d) {
        l = "" + d, u.call(this, d);
      } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(d) {
        l = "" + d;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function Vi(t) {
    t._valueTracker || (t._valueTracker = X0(t));
  }
  function id(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), l = "";
    return t && (l = rd(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), true) : false;
  }
  function Xi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Q0 = /[\n"\\]/g;
  function Tn(t) {
    return t.replace(Q0, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function js(t, e, n, l, i, u, d, y) {
    t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + xn(e)) : t.value !== "" + xn(e) && (t.value = "" + xn(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Ls(t, d, xn(e)) : n != null ? Ls(t, d, xn(n)) : l != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + xn(y) : t.removeAttribute("name");
  }
  function od(t, e, n, l, i, u, d, y) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) return;
      n = n != null ? "" + xn(n) : "", e = e != null ? "" + xn(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = y ? t.checked : !!l, t.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d);
  }
  function Ls(t, e, n) {
    e === "number" && Xi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function kl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++) e["$" + n[i]] = true;
      for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && l && (t[n].defaultSelected = true);
    } else {
      for (n = "" + xn(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = true, l && (t[i].defaultSelected = true);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = true);
    }
  }
  function sd(t, e, n) {
    if (e != null && (e = "" + xn(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + xn(n) : "";
  }
  function ud(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (st(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = xn(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l);
  }
  function Dl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var K0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function cd(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || K0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function fd(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (t = t.style, n != null) {
      for (var l in n) !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e) l = e[i], e.hasOwnProperty(i) && n[i] !== l && cd(t, i, l);
    } else for (var u in e) e.hasOwnProperty(u) && cd(t, u, e[u]);
  }
  function $s(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var P0 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Z0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qi(t) {
    return Z0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var qs = null;
  function Ys(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Bl = null, Nl = null;
  function dd(t) {
    var e = Ol(t);
    if (e && (t = e.stateNode)) {
      var n = t[nn] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (js(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Tn("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[nn] || null;
                if (!i) throw Error(s(90));
                js(l, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
              }
            }
            for (e = 0; e < n.length; e++) l = n[e], l.form === t.form && id(l);
          }
          break t;
        case "textarea":
          sd(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && kl(t, !!n.multiple, e, false);
      }
    }
  }
  var Gs = false;
  function pd(t, e, n) {
    if (Gs) return t(e, n);
    Gs = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Gs = false, (Bl !== null || Nl !== null) && (zo(), Bl && (e = Bl, t = Nl, Nl = Bl = null, dd(e), t))) for (e = 0; e < t.length; e++) dd(t[e]);
    }
  }
  function wr(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[nn] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var Vs = false;
  if (ia) try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", { get: function() {
      Vs = true;
    } }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr);
  } catch {
    Vs = false;
  }
  var Ma = null, Xs = null, Ki = null;
  function hd() {
    if (Ki) return Ki;
    var t, e = Xs, n = e.length, l, i = "value" in Ma ? Ma.value : Ma.textContent, u = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === i[u - l]; l++) ;
    return Ki = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Pi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Zi() {
    return true;
  }
  function md() {
    return false;
  }
  function an(t) {
    function e(n, l, i, u, d) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var y in t) t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Zi : md, this.isPropagationStopped = md, this;
    }
    return v(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Zi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Zi);
    }, persist: function() {
    }, isPersistent: Zi }), e;
  }
  var nl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fi = an(nl), Or = v({}, nl, { view: 0, detail: 0 }), F0 = an(Or), Qs, Ks, zr, Wi = v({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zs, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== zr && (zr && t.type === "mousemove" ? (Qs = t.screenX - zr.screenX, Ks = t.screenY - zr.screenY) : Ks = Qs = 0, zr = t), Qs);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Ks;
  } }), gd = an(Wi), W0 = v({}, Wi, { dataTransfer: 0 }), J0 = an(W0), I0 = v({}, Or, { relatedTarget: 0 }), Ps = an(I0), ty = v({}, nl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ey = an(ty), ny = v({}, nl, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), ay = an(ny), ly = v({}, nl, { data: 0 }), yd = an(ly), ry = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, iy = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, oy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = oy[t]) ? !!e[t] : false;
  }
  function Zs() {
    return sy;
  }
  var uy = v({}, Or, { key: function(t) {
    if (t.key) {
      var e = ry[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = Pi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? iy[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zs, charCode: function(t) {
    return t.type === "keypress" ? Pi(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Pi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), cy = an(uy), fy = v({}, Wi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vd = an(fy), dy = v({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zs }), py = an(dy), hy = v({}, nl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), my = an(hy), gy = v({}, Wi, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), yy = an(gy), vy = v({}, nl, { newState: 0, oldState: 0 }), by = an(vy), Sy = [9, 13, 27, 32], Fs = ia && "CompositionEvent" in window, _r = null;
  ia && "documentMode" in document && (_r = document.documentMode);
  var xy = ia && "TextEvent" in window && !_r, bd = ia && (!Fs || _r && 8 < _r && 11 >= _r), Sd = " ", xd = false;
  function Td(t, e) {
    switch (t) {
      case "keyup":
        return Sy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Ed(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ul = false;
  function Ty(t, e) {
    switch (t) {
      case "compositionend":
        return Ed(e);
      case "keypress":
        return e.which !== 32 ? null : (xd = true, Sd);
      case "textInput":
        return t = e.data, t === Sd && xd ? null : t;
      default:
        return null;
    }
  }
  function Ey(t, e) {
    if (Ul) return t === "compositionend" || !Fs && Td(t, e) ? (t = hd(), Ki = Xs = Ma = null, Ul = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return bd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Cy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Cd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Cy[t.type] : e === "textarea";
  }
  function Ad(t, e, n, l) {
    Bl ? Nl ? Nl.push(l) : Nl = [l] : Bl = l, e = No(e, "onChange"), 0 < e.length && (n = new Fi("onChange", "change", null, n, l), t.push({ event: n, listeners: e }));
  }
  var kr = null, Dr = null;
  function Ay(t) {
    Wh(t, 0);
  }
  function Ji(t) {
    var e = Rr(t);
    if (id(e)) return t;
  }
  function Rd(t, e) {
    if (t === "change") return e;
  }
  var wd = false;
  if (ia) {
    var Ws;
    if (ia) {
      var Js = "oninput" in document;
      if (!Js) {
        var Md = document.createElement("div");
        Md.setAttribute("oninput", "return;"), Js = typeof Md.oninput == "function";
      }
      Ws = Js;
    } else Ws = false;
    wd = Ws && (!document.documentMode || 9 < document.documentMode);
  }
  function Od() {
    kr && (kr.detachEvent("onpropertychange", zd), Dr = kr = null);
  }
  function zd(t) {
    if (t.propertyName === "value" && Ji(Dr)) {
      var e = [];
      Ad(e, Dr, t, Ys(t)), pd(Ay, e);
    }
  }
  function Ry(t, e, n) {
    t === "focusin" ? (Od(), kr = e, Dr = n, kr.attachEvent("onpropertychange", zd)) : t === "focusout" && Od();
  }
  function wy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ji(Dr);
  }
  function My(t, e) {
    if (t === "click") return Ji(e);
  }
  function Oy(t, e) {
    if (t === "input" || t === "change") return Ji(e);
  }
  function zy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var un = typeof Object.is == "function" ? Object.is : zy;
  function Br(t, e) {
    if (un(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return false;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!sn.call(e, i) || !un(t[i], e[i])) return false;
    }
    return true;
  }
  function _d(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function kd(t, e) {
    var n = _d(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e) return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = _d(n);
    }
  }
  function Dd(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Dd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Bd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Xi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Xi(t.document);
    }
    return e;
  }
  function Is(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  function _y(t, e) {
    var n = Bd(e);
    e = t.focusedElem;
    var l = t.selectionRange;
    if (n !== e && e && e.ownerDocument && Dd(e.ownerDocument.documentElement, e)) {
      if (l !== null && Is(e)) {
        if (t = l.start, n = l.end, n === void 0 && (n = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length);
        else if (n = (t = e.ownerDocument || document) && t.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var i = e.textContent.length, u = Math.min(l.start, i);
          l = l.end === void 0 ? u : Math.min(l.end, i), !n.extend && u > l && (i = l, l = u, u = i), i = kd(e, u);
          var d = kd(e, l);
          i && d && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== d.node || n.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), n.removeAllRanges(), u > l ? (n.addRange(t), n.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; n = n.parentNode; ) n.nodeType === 1 && t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) n = t[e], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ky = ia && "documentMode" in document && 11 >= document.documentMode, Hl = null, tu = null, Nr = null, eu = false;
  function Nd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    eu || Hl == null || Hl !== Xi(l) || (l = Hl, "selectionStart" in l && Is(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Nr && Br(Nr, l) || (Nr = l, l = No(tu, "onSelect"), 0 < l.length && (e = new Fi("onSelect", "select", null, e, n), t.push({ event: e, listeners: l }), e.target = Hl)));
  }
  function al(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var jl = { animationend: al("Animation", "AnimationEnd"), animationiteration: al("Animation", "AnimationIteration"), animationstart: al("Animation", "AnimationStart"), transitionrun: al("Transition", "TransitionRun"), transitionstart: al("Transition", "TransitionStart"), transitioncancel: al("Transition", "TransitionCancel"), transitionend: al("Transition", "TransitionEnd") }, nu = {}, Ud = {};
  ia && (Ud = document.createElement("div").style, "AnimationEvent" in window || (delete jl.animationend.animation, delete jl.animationiteration.animation, delete jl.animationstart.animation), "TransitionEvent" in window || delete jl.transitionend.transition);
  function ll(t) {
    if (nu[t]) return nu[t];
    if (!jl[t]) return t;
    var e = jl[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in Ud) return nu[t] = e[n];
    return t;
  }
  var Hd = ll("animationend"), jd = ll("animationiteration"), Ld = ll("animationstart"), Dy = ll("transitionrun"), By = ll("transitionstart"), Ny = ll("transitioncancel"), $d = ll("transitionend"), qd = /* @__PURE__ */ new Map(), Yd = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
  function Yn(t, e) {
    qd.set(t, e), el(e, [t]);
  }
  var En = [], Ll = 0, au = 0;
  function Ii() {
    for (var t = Ll, e = au = Ll = 0; e < t; ) {
      var n = En[e];
      En[e++] = null;
      var l = En[e];
      En[e++] = null;
      var i = En[e];
      En[e++] = null;
      var u = En[e];
      if (En[e++] = null, l !== null && i !== null) {
        var d = l.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i;
      }
      u !== 0 && Gd(n, i, u);
    }
  }
  function to(t, e, n, l) {
    En[Ll++] = t, En[Ll++] = e, En[Ll++] = n, En[Ll++] = l, au |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function lu(t, e, n, l) {
    return to(t, e, n, l), eo(t);
  }
  function Oa(t, e) {
    return to(t, null, null, e), eo(t);
  }
  function Gd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = false, u = t.return; u !== null; ) u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = true)), t = u, u = u.return;
    i && e !== null && t.tag === 3 && (u = t.stateNode, i = 31 - Tt(n), u = u.hiddenUpdates, t = u[i], t === null ? u[i] = [e] : t.push(e), e.lane = n | 536870912);
  }
  function eo(t) {
    if (50 < ii) throw ii = 0, cc = null, Error(s(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var $l = {}, Vd = /* @__PURE__ */ new WeakMap();
  function Cn(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Vd.get(t);
      return n !== void 0 ? n : (e = { value: t, source: e, stack: J(e) }, Vd.set(t, e), e);
    }
    return { value: t, source: e, stack: J(e) };
  }
  var ql = [], Yl = 0, no = null, ao = 0, An = [], Rn = 0, rl = null, sa = 1, ua = "";
  function il(t, e) {
    ql[Yl++] = ao, ql[Yl++] = no, no = t, ao = e;
  }
  function Xd(t, e, n) {
    An[Rn++] = sa, An[Rn++] = ua, An[Rn++] = rl, rl = t;
    var l = sa;
    t = ua;
    var i = 32 - Tt(l) - 1;
    l &= ~(1 << i), n += 1;
    var u = 32 - Tt(e) + i;
    if (30 < u) {
      var d = i - i % 5;
      u = (l & (1 << d) - 1).toString(32), l >>= d, i -= d, sa = 1 << 32 - Tt(e) + i | n << i | l, ua = u + t;
    } else sa = 1 << u | n << i | l, ua = t;
  }
  function ru(t) {
    t.return !== null && (il(t, 1), Xd(t, 1, 0));
  }
  function iu(t) {
    for (; t === no; ) no = ql[--Yl], ql[Yl] = null, ao = ql[--Yl], ql[Yl] = null;
    for (; t === rl; ) rl = An[--Rn], An[Rn] = null, ua = An[--Rn], An[Rn] = null, sa = An[--Rn], An[Rn] = null;
  }
  var Ze = null, je = null, $t = false, Gn = null, Kn = false, ou = Error(s(519));
  function ol(t) {
    var e = Error(s(418, ""));
    throw jr(Cn(e, t)), ou;
  }
  function Qd(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[Xe] = t, e[nn] = l, n) {
      case "dialog":
        Nt("cancel", e), Nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Nt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < si.length; n++) Nt(si[n], e);
        break;
      case "source":
        Nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Nt("error", e), Nt("load", e);
        break;
      case "details":
        Nt("toggle", e);
        break;
      case "input":
        Nt("invalid", e), od(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true), Vi(e);
        break;
      case "select":
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), ud(e, l.value, l.defaultValue, l.children), Vi(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === true || em(e.textContent, n) ? (l.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)), l.onScroll != null && Nt("scroll", e), l.onScrollEnd != null && Nt("scrollend", e), l.onClick != null && (e.onclick = Uo), e = true) : e = false, e || ol(t);
  }
  function Kd(t) {
    for (Ze = t.return; Ze; ) switch (Ze.tag) {
      case 3:
      case 27:
        Kn = true;
        return;
      case 5:
      case 13:
        Kn = false;
        return;
      default:
        Ze = Ze.return;
    }
  }
  function Ur(t) {
    if (t !== Ze) return false;
    if (!$t) return Kd(t), $t = true, false;
    var e = false, n;
    if ((n = t.tag !== 3 && t.tag !== 27) && ((n = t.tag === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || wc(t.type, t.memoizedProps)), n = !n), n && (e = true), e && je && ol(t), Kd(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (n = t.data, n === "/$") {
            if (e === 0) {
              je = Xn(t.nextSibling);
              break t;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        je = null;
      }
    } else je = Ze ? Xn(t.stateNode.nextSibling) : null;
    return true;
  }
  function Hr() {
    je = Ze = null, $t = false;
  }
  function jr(t) {
    Gn === null ? Gn = [t] : Gn.push(t);
  }
  var Lr = Error(s(460)), Pd = Error(s(474)), su = { then: function() {
  } };
  function Zd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function lo() {
  }
  function Fd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(lo, lo), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, t === Lr ? Error(s(483)) : t;
      default:
        if (typeof e.status == "string") e.then(lo, lo);
        else {
          if (t = re, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
          t = e, t.status = "pending", t.then(function(l) {
            if (e.status === "pending") {
              var i = e;
              i.status = "fulfilled", i.value = l;
            }
          }, function(l) {
            if (e.status === "pending") {
              var i = e;
              i.status = "rejected", i.reason = l;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, t === Lr ? Error(s(483)) : t;
        }
        throw $r = e, Lr;
    }
  }
  var $r = null;
  function Wd() {
    if ($r === null) throw Error(s(459));
    var t = $r;
    return $r = null, t;
  }
  var Gl = null, qr = 0;
  function ro(t) {
    var e = qr;
    return qr += 1, Gl === null && (Gl = []), Fd(Gl, t, e);
  }
  function Yr(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function io(t, e) {
    throw e.$$typeof === f ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Jd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Id(t) {
    function e(_, M) {
      if (t) {
        var N = _.deletions;
        N === null ? (_.deletions = [M], _.flags |= 16) : N.push(M);
      }
    }
    function n(_, M) {
      if (!t) return null;
      for (; M !== null; ) e(_, M), M = M.sibling;
      return null;
    }
    function l(_) {
      for (var M = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? M.set(_.key, _) : M.set(_.index, _), _ = _.sibling;
      return M;
    }
    function i(_, M) {
      return _ = qa(_, M), _.index = 0, _.sibling = null, _;
    }
    function u(_, M, N) {
      return _.index = N, t ? (N = _.alternate, N !== null ? (N = N.index, N < M ? (_.flags |= 33554434, M) : N) : (_.flags |= 33554434, M)) : (_.flags |= 1048576, M);
    }
    function d(_) {
      return t && _.alternate === null && (_.flags |= 33554434), _;
    }
    function y(_, M, N, Z) {
      return M === null || M.tag !== 6 ? (M = nc(N, _.mode, Z), M.return = _, M) : (M = i(M, N), M.return = _, M);
    }
    function T(_, M, N, Z) {
      var ct = N.type;
      return ct === g ? K(_, M, N.props.children, Z, N.key) : M !== null && (M.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === q && Jd(ct) === M.type) ? (M = i(M, N.props), Yr(M, N), M.return = _, M) : (M = Ao(N.type, N.key, N.props, null, _.mode, Z), Yr(M, N), M.return = _, M);
    }
    function O(_, M, N, Z) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== N.containerInfo || M.stateNode.implementation !== N.implementation ? (M = ac(N, _.mode, Z), M.return = _, M) : (M = i(M, N.children || []), M.return = _, M);
    }
    function K(_, M, N, Z, ct) {
      return M === null || M.tag !== 7 ? (M = yl(N, _.mode, Z, ct), M.return = _, M) : (M = i(M, N), M.return = _, M);
    }
    function I(_, M, N) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = nc("" + M, _.mode, N), M.return = _, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case p:
            return N = Ao(M.type, M.key, M.props, null, _.mode, N), Yr(N, M), N.return = _, N;
          case h:
            return M = ac(M, _.mode, N), M.return = _, M;
          case q:
            var Z = M._init;
            return M = Z(M._payload), I(_, M, N);
        }
        if (st(M) || V(M)) return M = yl(M, _.mode, N, null), M.return = _, M;
        if (typeof M.then == "function") return I(_, ro(M), N);
        if (M.$$typeof === z) return I(_, To(_, M), N);
        io(_, M);
      }
      return null;
    }
    function L(_, M, N, Z) {
      var ct = M !== null ? M.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return ct !== null ? null : y(_, M, "" + N, Z);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case p:
            return N.key === ct ? T(_, M, N, Z) : null;
          case h:
            return N.key === ct ? O(_, M, N, Z) : null;
          case q:
            return ct = N._init, N = ct(N._payload), L(_, M, N, Z);
        }
        if (st(N) || V(N)) return ct !== null ? null : K(_, M, N, Z, null);
        if (typeof N.then == "function") return L(_, M, ro(N), Z);
        if (N.$$typeof === z) return L(_, M, To(_, N), Z);
        io(_, N);
      }
      return null;
    }
    function Q(_, M, N, Z, ct) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return _ = _.get(N) || null, y(M, _, "" + Z, ct);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case p:
            return _ = _.get(Z.key === null ? N : Z.key) || null, T(M, _, Z, ct);
          case h:
            return _ = _.get(Z.key === null ? N : Z.key) || null, O(M, _, Z, ct);
          case q:
            var kt = Z._init;
            return Z = kt(Z._payload), Q(_, M, N, Z, ct);
        }
        if (st(Z) || V(Z)) return _ = _.get(N) || null, K(M, _, Z, ct, null);
        if (typeof Z.then == "function") return Q(_, M, N, ro(Z), ct);
        if (Z.$$typeof === z) return Q(_, M, N, To(M, Z), ct);
        io(M, Z);
      }
      return null;
    }
    function pt(_, M, N, Z) {
      for (var ct = null, kt = null, mt = M, vt = M = 0, Ne = null; mt !== null && vt < N.length; vt++) {
        mt.index > vt ? (Ne = mt, mt = null) : Ne = mt.sibling;
        var qt = L(_, mt, N[vt], Z);
        if (qt === null) {
          mt === null && (mt = Ne);
          break;
        }
        t && mt && qt.alternate === null && e(_, mt), M = u(qt, M, vt), kt === null ? ct = qt : kt.sibling = qt, kt = qt, mt = Ne;
      }
      if (vt === N.length) return n(_, mt), $t && il(_, vt), ct;
      if (mt === null) {
        for (; vt < N.length; vt++) mt = I(_, N[vt], Z), mt !== null && (M = u(mt, M, vt), kt === null ? ct = mt : kt.sibling = mt, kt = mt);
        return $t && il(_, vt), ct;
      }
      for (mt = l(mt); vt < N.length; vt++) Ne = Q(mt, _, vt, N[vt], Z), Ne !== null && (t && Ne.alternate !== null && mt.delete(Ne.key === null ? vt : Ne.key), M = u(Ne, M, vt), kt === null ? ct = Ne : kt.sibling = Ne, kt = Ne);
      return t && mt.forEach(function(Pa) {
        return e(_, Pa);
      }), $t && il(_, vt), ct;
    }
    function Ct(_, M, N, Z) {
      if (N == null) throw Error(s(151));
      for (var ct = null, kt = null, mt = M, vt = M = 0, Ne = null, qt = N.next(); mt !== null && !qt.done; vt++, qt = N.next()) {
        mt.index > vt ? (Ne = mt, mt = null) : Ne = mt.sibling;
        var Pa = L(_, mt, qt.value, Z);
        if (Pa === null) {
          mt === null && (mt = Ne);
          break;
        }
        t && mt && Pa.alternate === null && e(_, mt), M = u(Pa, M, vt), kt === null ? ct = Pa : kt.sibling = Pa, kt = Pa, mt = Ne;
      }
      if (qt.done) return n(_, mt), $t && il(_, vt), ct;
      if (mt === null) {
        for (; !qt.done; vt++, qt = N.next()) qt = I(_, qt.value, Z), qt !== null && (M = u(qt, M, vt), kt === null ? ct = qt : kt.sibling = qt, kt = qt);
        return $t && il(_, vt), ct;
      }
      for (mt = l(mt); !qt.done; vt++, qt = N.next()) qt = Q(mt, _, vt, qt.value, Z), qt !== null && (t && qt.alternate !== null && mt.delete(qt.key === null ? vt : qt.key), M = u(qt, M, vt), kt === null ? ct = qt : kt.sibling = qt, kt = qt);
      return t && mt.forEach(function(Zv) {
        return e(_, Zv);
      }), $t && il(_, vt), ct;
    }
    function be(_, M, N, Z) {
      if (typeof N == "object" && N !== null && N.type === g && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case p:
            t: {
              for (var ct = N.key; M !== null; ) {
                if (M.key === ct) {
                  if (ct = N.type, ct === g) {
                    if (M.tag === 7) {
                      n(_, M.sibling), Z = i(M, N.props.children), Z.return = _, _ = Z;
                      break t;
                    }
                  } else if (M.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === q && Jd(ct) === M.type) {
                    n(_, M.sibling), Z = i(M, N.props), Yr(Z, N), Z.return = _, _ = Z;
                    break t;
                  }
                  n(_, M);
                  break;
                } else e(_, M);
                M = M.sibling;
              }
              N.type === g ? (Z = yl(N.props.children, _.mode, Z, N.key), Z.return = _, _ = Z) : (Z = Ao(N.type, N.key, N.props, null, _.mode, Z), Yr(Z, N), Z.return = _, _ = Z);
            }
            return d(_);
          case h:
            t: {
              for (ct = N.key; M !== null; ) {
                if (M.key === ct) if (M.tag === 4 && M.stateNode.containerInfo === N.containerInfo && M.stateNode.implementation === N.implementation) {
                  n(_, M.sibling), Z = i(M, N.children || []), Z.return = _, _ = Z;
                  break t;
                } else {
                  n(_, M);
                  break;
                }
                else e(_, M);
                M = M.sibling;
              }
              Z = ac(N, _.mode, Z), Z.return = _, _ = Z;
            }
            return d(_);
          case q:
            return ct = N._init, N = ct(N._payload), be(_, M, N, Z);
        }
        if (st(N)) return pt(_, M, N, Z);
        if (V(N)) {
          if (ct = V(N), typeof ct != "function") throw Error(s(150));
          return N = ct.call(N), Ct(_, M, N, Z);
        }
        if (typeof N.then == "function") return be(_, M, ro(N), Z);
        if (N.$$typeof === z) return be(_, M, To(_, N), Z);
        io(_, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, M !== null && M.tag === 6 ? (n(_, M.sibling), Z = i(M, N), Z.return = _, _ = Z) : (n(_, M), Z = nc(N, _.mode, Z), Z.return = _, _ = Z), d(_)) : n(_, M);
    }
    return function(_, M, N, Z) {
      try {
        qr = 0;
        var ct = be(_, M, N, Z);
        return Gl = null, ct;
      } catch (mt) {
        if (mt === Lr) throw mt;
        var kt = zn(29, mt, null, _.mode);
        return kt.lanes = Z, kt.return = _, kt;
      } finally {
      }
    };
  }
  var sl = Id(true), tp = Id(false), Vl = Et(null), oo = Et(0);
  function ep(t, e) {
    t = Sa, Mt(oo, t), Mt(Vl, e), Sa = t | e.baseLanes;
  }
  function uu() {
    Mt(oo, Sa), Mt(Vl, Vl.current);
  }
  function cu() {
    Sa = oo.current, Ut(Vl), Ut(oo);
  }
  var wn = Et(null), Pn = null;
  function za(t) {
    var e = t.alternate;
    Mt(ze, ze.current & 1), Mt(wn, t), Pn === null && (e === null || Vl.current !== null || e.memoizedState !== null) && (Pn = t);
  }
  function np(t) {
    if (t.tag === 22) {
      if (Mt(ze, ze.current), Mt(wn, t), Pn === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Pn = t);
      }
    } else _a();
  }
  function _a() {
    Mt(ze, ze.current), Mt(wn, wn.current);
  }
  function ca(t) {
    Ut(wn), Pn === t && (Pn = null), Ut(ze);
  }
  var ze = Et(0);
  function so(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Uy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(n, l) {
      t.push(l);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(n) {
        return n();
      });
    };
  }, Hy = a3.unstable_scheduleCallback, jy = a3.unstable_NormalPriority, _e = { $$typeof: z, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function fu() {
    return { controller: new Uy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Gr(t) {
    t.refCount--, t.refCount === 0 && Hy(jy, function() {
      t.controller.abort();
    });
  }
  var Vr = null, du = 0, Xl = 0, Ql = null;
  function Ly(t, e) {
    if (Vr === null) {
      var n = Vr = [];
      du = 0, Xl = vc(), Ql = { status: "pending", value: void 0, then: function(l) {
        n.push(l);
      } };
    }
    return du++, e.then(ap, ap), e;
  }
  function ap() {
    if (--du === 0 && Vr !== null) {
      Ql !== null && (Ql.status = "fulfilled");
      var t = Vr;
      Vr = null, Xl = 0, Ql = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $y(t, e) {
    var n = [], l = { status: "pending", value: null, reason: null, then: function(i) {
      n.push(i);
    } };
    return t.then(function() {
      l.status = "fulfilled", l.value = e;
      for (var i = 0; i < n.length; i++) (0, n[i])(e);
    }, function(i) {
      for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
    }), l;
  }
  var lp = X.S;
  X.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Ly(t, e), lp !== null && lp(t, e);
  };
  var ul = Et(null);
  function pu() {
    var t = ul.current;
    return t !== null ? t : re.pooledCache;
  }
  function uo(t, e) {
    e === null ? Mt(ul, ul.current) : Mt(ul, e.pool);
  }
  function rp() {
    var t = pu();
    return t === null ? null : { parent: _e._currentValue, pool: t };
  }
  var ka = 0, _t = null, Zt = null, Ae = null, co = false, Kl = false, cl = false, fo = 0, Xr = 0, Pl = null, qy = 0;
  function Te() {
    throw Error(s(321));
  }
  function hu(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!un(t[n], e[n])) return false;
    return true;
  }
  function mu(t, e, n, l, i, u) {
    return ka = u, _t = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, X.H = t === null || t.memoizedState === null ? fl : Da, cl = false, u = n(l, i), cl = false, Kl && (u = op(e, n, l, i)), ip(t), u;
  }
  function ip(t) {
    X.H = Zn;
    var e = Zt !== null && Zt.next !== null;
    if (ka = 0, Ae = Zt = _t = null, co = false, Xr = 0, Pl = null, e) throw Error(s(300));
    t === null || De || (t = t.dependencies, t !== null && xo(t) && (De = true));
  }
  function op(t, e, n, l) {
    _t = t;
    var i = 0;
    do {
      if (Kl && (Pl = null), Xr = 0, Kl = false, 25 <= i) throw Error(s(301));
      if (i += 1, Ae = Zt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      X.H = dl, u = e(n, l);
    } while (Kl);
    return u;
  }
  function Yy() {
    var t = X.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Qr(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (_t.flags |= 1024), e;
  }
  function gu() {
    var t = fo !== 0;
    return fo = 0, t;
  }
  function yu(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function vu(t) {
    if (co) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      co = false;
    }
    ka = 0, Ae = Zt = _t = null, Kl = false, Xr = fo = 0, Pl = null;
  }
  function ln() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? _t.memoizedState = Ae = t : Ae = Ae.next = t, Ae;
  }
  function Re() {
    if (Zt === null) {
      var t = _t.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Zt.next;
    var e = Ae === null ? _t.memoizedState : Ae.next;
    if (e !== null) Ae = e, Zt = t;
    else {
      if (t === null) throw _t.alternate === null ? Error(s(467)) : Error(s(310));
      Zt = t, t = { memoizedState: Zt.memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null }, Ae === null ? _t.memoizedState = Ae = t : Ae = Ae.next = t;
    }
    return Ae;
  }
  var po;
  po = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Qr(t) {
    var e = Xr;
    return Xr += 1, Pl === null && (Pl = []), t = Fd(Pl, t, e), e = _t, (Ae === null ? e.memoizedState : Ae.next) === null && (e = e.alternate, X.H = e === null || e.memoizedState === null ? fl : Da), t;
  }
  function ho(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Qr(t);
      if (t.$$typeof === z) return Qe(t);
    }
    throw Error(s(438, String(t)));
  }
  function bu(t) {
    var e = null, n = _t.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = _t.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(i) {
        return i.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = po(), _t.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = j;
    return e.index++, n;
  }
  function fa(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function mo(t) {
    var e = Re();
    return Su(e, Zt, t);
  }
  function Su(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var i = t.baseQueue, u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var d = i.next;
        i.next = u.next, u.next = d;
      }
      e.baseQueue = i = u, l.pending = null;
    }
    if (u = t.baseState, i === null) t.memoizedState = u;
    else {
      e = i.next;
      var y = d = null, T = null, O = e, K = false;
      do {
        var I = O.lane & -536870913;
        if (I !== O.lane ? (jt & I) === I : (ka & I) === I) {
          var L = O.revertLane;
          if (L === 0) T !== null && (T = T.next = { lane: 0, revertLane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), I === Xl && (K = true);
          else if ((ka & L) === L) {
            O = O.next, L === Xl && (K = true);
            continue;
          } else I = { lane: 0, revertLane: O.revertLane, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, T === null ? (y = T = I, d = u) : T = T.next = I, _t.lanes |= L, Ya |= L;
          I = O.action, cl && n(u, I), u = O.hasEagerState ? O.eagerState : n(u, I);
        } else L = { lane: I, revertLane: O.revertLane, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, T === null ? (y = T = L, d = u) : T = T.next = L, _t.lanes |= I, Ya |= I;
        O = O.next;
      } while (O !== null && O !== e);
      if (T === null ? d = u : T.next = y, !un(u, t.memoizedState) && (De = true, K && (n = Ql, n !== null))) throw n;
      t.memoizedState = u, t.baseState = d, t.baseQueue = T, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function xu(t) {
    var e = Re(), n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, i = n.pending, u = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = i = i.next;
      do
        u = t(u, d.action), d = d.next;
      while (d !== i);
      un(u, e.memoizedState) || (De = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function sp(t, e, n) {
    var l = _t, i = Re(), u = $t;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !un((Zt || i).memoizedState, n);
    if (d && (i.memoizedState = n, De = true), i = i.queue, Cu(fp.bind(null, l, i, t), [t]), i.getSnapshot !== e || d || Ae !== null && Ae.memoizedState.tag & 1) {
      if (l.flags |= 2048, Zl(9, cp.bind(null, l, i, n, e), { destroy: void 0 }, null), re === null) throw Error(s(349));
      u || ka & 60 || up(l, e, n);
    }
    return n;
  }
  function up(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = _t.updateQueue, e === null ? (e = po(), _t.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function cp(t, e, n, l) {
    e.value = n, e.getSnapshot = l, dp(e) && pp(t);
  }
  function fp(t, e, n) {
    return n(function() {
      dp(e) && pp(t);
    });
  }
  function dp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !un(t, n);
    } catch {
      return true;
    }
  }
  function pp(t) {
    var e = Oa(t, 2);
    e !== null && Fe(e, t, 2);
  }
  function Tu(t) {
    var e = ln();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), cl) {
        dt(true);
        try {
          n();
        } finally {
          dt(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: t }, e;
  }
  function hp(t, e, n, l) {
    return t.baseState = n, Su(t, Zt, typeof l == "function" ? l : fa);
  }
  function Gy(t, e, n, l, i) {
    if (vo(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var u = { payload: i, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(d) {
        u.listeners.push(d);
      } };
      X.T !== null ? n(true) : u.isTransition = false, l(u), n = e.pending, n === null ? (u.next = e.pending = u, mp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function mp(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var u = X.T, d = {};
      X.T = d;
      try {
        var y = n(i, l), T = X.S;
        T !== null && T(d, y), gp(t, e, y);
      } catch (O) {
        Eu(t, e, O);
      } finally {
        X.T = u;
      }
    } else try {
      u = n(i, l), gp(t, e, u);
    } catch (O) {
      Eu(t, e, O);
    }
  }
  function gp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
      yp(t, e, l);
    }, function(l) {
      return Eu(t, e, l);
    }) : yp(t, e, n);
  }
  function yp(t, e, n) {
    e.status = "fulfilled", e.value = n, vp(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, mp(t, n)));
  }
  function Eu(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, vp(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function vp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function bp(t, e) {
    return e;
  }
  function Sp(t, e) {
    if ($t) {
      var n = re.formState;
      if (n !== null) {
        t: {
          var l = _t;
          if ($t) {
            if (je) {
              e: {
                for (var i = je, u = Kn; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break e;
                  }
                  if (i = Xn(i.nextSibling), i === null) {
                    i = null;
                    break e;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                je = Xn(i.nextSibling), l = i.data === "F!";
                break t;
              }
            }
            ol(l);
          }
          l = false;
        }
        l && (e = n[0]);
      }
    }
    return n = ln(), n.memoizedState = n.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: bp, lastRenderedState: e }, n.queue = l, n = jp.bind(null, _t, l), l.dispatch = n, l = Tu(false), u = Ou.bind(null, _t, false, l.queue), l = ln(), i = { state: e, dispatch: null, action: t, pending: null }, l.queue = i, n = Gy.bind(null, _t, i, u, n), i.dispatch = n, l.memoizedState = t, [e, n, false];
  }
  function xp(t) {
    var e = Re();
    return Tp(e, Zt, t);
  }
  function Tp(t, e, n) {
    e = Su(t, e, bp)[0], t = mo(fa)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? Qr(e) : e;
    var l = Re(), i = l.queue, u = i.dispatch;
    return n !== l.memoizedState && (_t.flags |= 2048, Zl(9, Vy.bind(null, i, n), { destroy: void 0 }, null)), [e, u, t];
  }
  function Vy(t, e) {
    t.action = e;
  }
  function Ep(t) {
    var e = Re(), n = Zt;
    if (n !== null) return Tp(e, n, t);
    Re(), e = e.memoizedState, n = Re();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, false];
  }
  function Zl(t, e, n, l) {
    return t = { tag: t, create: e, inst: n, deps: l, next: null }, e = _t.updateQueue, e === null && (e = po(), _t.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Cp() {
    return Re().memoizedState;
  }
  function go(t, e, n, l) {
    var i = ln();
    _t.flags |= t, i.memoizedState = Zl(1 | e, n, { destroy: void 0 }, l === void 0 ? null : l);
  }
  function yo(t, e, n, l) {
    var i = Re();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Zt !== null && l !== null && hu(l, Zt.memoizedState.deps) ? i.memoizedState = Zl(e, n, u, l) : (_t.flags |= t, i.memoizedState = Zl(1 | e, n, u, l));
  }
  function Ap(t, e) {
    go(8390656, 8, t, e);
  }
  function Cu(t, e) {
    yo(2048, 8, t, e);
  }
  function Rp(t, e) {
    return yo(4, 2, t, e);
  }
  function wp(t, e) {
    return yo(4, 4, t, e);
  }
  function Mp(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function Op(t, e, n) {
    n = n != null ? n.concat([t]) : null, yo(4, 4, Mp.bind(null, e, t), n);
  }
  function Au() {
  }
  function zp(t, e) {
    var n = Re();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && hu(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function _p(t, e) {
    var n = Re();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && hu(e, l[1])) return l[0];
    if (l = t(), cl) {
      dt(true);
      try {
        t();
      } finally {
        dt(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function Ru(t, e, n) {
    return n === void 0 || ka & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = Dh(), _t.lanes |= t, Ya |= t, n);
  }
  function kp(t, e, n, l) {
    return un(n, e) ? n : Vl.current !== null ? (t = Ru(t, n, l), un(t, e) || (De = true), t) : ka & 42 ? (t = Dh(), _t.lanes |= t, Ya |= t, e) : (De = true, t.memoizedState = n);
  }
  function Dp(t, e, n, l, i) {
    var u = rt.p;
    rt.p = u !== 0 && 8 > u ? u : 8;
    var d = X.T, y = {};
    X.T = y, Ou(t, false, e, n);
    try {
      var T = i(), O = X.S;
      if (O !== null && O(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var K = $y(T, l);
        Kr(t, e, K, pn(t));
      } else Kr(t, e, l, pn(t));
    } catch (I) {
      Kr(t, e, { then: function() {
      }, status: "rejected", reason: I }, pn());
    } finally {
      rt.p = u, X.T = d;
    }
  }
  function Xy() {
  }
  function wu(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var i = Bp(t).queue;
    Dp(t, i, e, St, n === null ? Xy : function() {
      return Np(t), n(l);
    });
  }
  function Bp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: St, baseState: St, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: St }, next: null };
    var n = {};
    return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Np(t) {
    var e = Bp(t).next.queue;
    Kr(t, e, {}, pn());
  }
  function Mu() {
    return Qe(pi);
  }
  function Up() {
    return Re().memoizedState;
  }
  function Hp() {
    return Re().memoizedState;
  }
  function Qy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pn();
          t = Ua(n);
          var l = Ha(e, t, n);
          l !== null && (Fe(l, e, n), Fr(l, e, n)), e = { cache: fu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Ky(t, e, n) {
    var l = pn();
    n = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null }, vo(t) ? Lp(e, n) : (n = lu(t, e, n, l), n !== null && (Fe(n, t, l), $p(n, e, l)));
  }
  function jp(t, e, n) {
    var l = pn();
    Kr(t, e, n, l);
  }
  function Kr(t, e, n, l) {
    var i = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null };
    if (vo(t)) Lp(e, i);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var d = e.lastRenderedState, y = u(d, n);
        if (i.hasEagerState = true, i.eagerState = y, un(y, d)) return to(t, e, i, 0), re === null && Ii(), false;
      } catch {
      } finally {
      }
      if (n = lu(t, e, i, l), n !== null) return Fe(n, t, l), $p(n, e, l), true;
    }
    return false;
  }
  function Ou(t, e, n, l) {
    if (l = { lane: 2, revertLane: vc(), action: l, hasEagerState: false, eagerState: null, next: null }, vo(t)) {
      if (e) throw Error(s(479));
    } else e = lu(t, n, l, 2), e !== null && Fe(e, t, 2);
  }
  function vo(t) {
    var e = t.alternate;
    return t === _t || e !== null && e === _t;
  }
  function Lp(t, e) {
    Kl = co = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function $p(t, e, n) {
    if (n & 4194176) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Wf(t, n);
    }
  }
  var Zn = { readContext: Qe, use: ho, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useLayoutEffect: Te, useInsertionEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useSyncExternalStore: Te, useId: Te };
  Zn.useCacheRefresh = Te, Zn.useMemoCache = Te, Zn.useHostTransitionStatus = Te, Zn.useFormState = Te, Zn.useActionState = Te, Zn.useOptimistic = Te;
  var fl = { readContext: Qe, use: ho, useCallback: function(t, e) {
    return ln().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Qe, useEffect: Ap, useImperativeHandle: function(t, e, n) {
    n = n != null ? n.concat([t]) : null, go(4194308, 4, Mp.bind(null, e, t), n);
  }, useLayoutEffect: function(t, e) {
    return go(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    go(4, 2, t, e);
  }, useMemo: function(t, e) {
    var n = ln();
    e = e === void 0 ? null : e;
    var l = t();
    if (cl) {
      dt(true);
      try {
        t();
      } finally {
        dt(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }, useReducer: function(t, e, n) {
    var l = ln();
    if (n !== void 0) {
      var i = n(e);
      if (cl) {
        dt(true);
        try {
          n(e);
        } finally {
          dt(false);
        }
      }
    } else i = e;
    return l.memoizedState = l.baseState = i, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, l.queue = t, t = t.dispatch = Ky.bind(null, _t, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var e = ln();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = Tu(t);
    var e = t.queue, n = jp.bind(null, _t, e);
    return e.dispatch = n, [t.memoizedState, n];
  }, useDebugValue: Au, useDeferredValue: function(t, e) {
    var n = ln();
    return Ru(n, t, e);
  }, useTransition: function() {
    var t = Tu(false);
    return t = Dp.bind(null, _t, t.queue, true, false), ln().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, n) {
    var l = _t, i = ln();
    if ($t) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = e(), re === null) throw Error(s(349));
      jt & 60 || up(l, e, n);
    }
    i.memoizedState = n;
    var u = { value: n, getSnapshot: e };
    return i.queue = u, Ap(fp.bind(null, l, u, t), [t]), l.flags |= 2048, Zl(9, cp.bind(null, l, u, n, e), { destroy: void 0 }, null), n;
  }, useId: function() {
    var t = ln(), e = re.identifierPrefix;
    if ($t) {
      var n = ua, l = sa;
      n = (l & ~(1 << 32 - Tt(l) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = fo++, 0 < n && (e += "H" + n.toString(32)), e += ":";
    } else n = qy++, e = ":" + e + "r" + n.toString(32) + ":";
    return t.memoizedState = e;
  }, useCacheRefresh: function() {
    return ln().memoizedState = Qy.bind(null, _t);
  } };
  fl.useMemoCache = bu, fl.useHostTransitionStatus = Mu, fl.useFormState = Sp, fl.useActionState = Sp, fl.useOptimistic = function(t) {
    var e = ln();
    e.memoizedState = e.baseState = t;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = n, e = Ou.bind(null, _t, true, n), n.dispatch = e, [t, e];
  };
  var Da = { readContext: Qe, use: ho, useCallback: zp, useContext: Qe, useEffect: Cu, useImperativeHandle: Op, useInsertionEffect: Rp, useLayoutEffect: wp, useMemo: _p, useReducer: mo, useRef: Cp, useState: function() {
    return mo(fa);
  }, useDebugValue: Au, useDeferredValue: function(t, e) {
    var n = Re();
    return kp(n, Zt.memoizedState, t, e);
  }, useTransition: function() {
    var t = mo(fa)[0], e = Re().memoizedState;
    return [typeof t == "boolean" ? t : Qr(t), e];
  }, useSyncExternalStore: sp, useId: Up };
  Da.useCacheRefresh = Hp, Da.useMemoCache = bu, Da.useHostTransitionStatus = Mu, Da.useFormState = xp, Da.useActionState = xp, Da.useOptimistic = function(t, e) {
    var n = Re();
    return hp(n, Zt, t, e);
  };
  var dl = { readContext: Qe, use: ho, useCallback: zp, useContext: Qe, useEffect: Cu, useImperativeHandle: Op, useInsertionEffect: Rp, useLayoutEffect: wp, useMemo: _p, useReducer: xu, useRef: Cp, useState: function() {
    return xu(fa);
  }, useDebugValue: Au, useDeferredValue: function(t, e) {
    var n = Re();
    return Zt === null ? Ru(n, t, e) : kp(n, Zt.memoizedState, t, e);
  }, useTransition: function() {
    var t = xu(fa)[0], e = Re().memoizedState;
    return [typeof t == "boolean" ? t : Qr(t), e];
  }, useSyncExternalStore: sp, useId: Up };
  dl.useCacheRefresh = Hp, dl.useMemoCache = bu, dl.useHostTransitionStatus = Mu, dl.useFormState = Ep, dl.useActionState = Ep, dl.useOptimistic = function(t, e) {
    var n = Re();
    return Zt !== null ? hp(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  };
  function zu(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : v({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var _u = { isMounted: function(t) {
    return (t = t._reactInternals) ? W(t) === t : false;
  }, enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var l = pn(), i = Ua(l);
    i.payload = e, n != null && (i.callback = n), e = Ha(t, i, l), e !== null && (Fe(e, t, l), Fr(e, t, l));
  }, enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var l = pn(), i = Ua(l);
    i.tag = 1, i.payload = e, n != null && (i.callback = n), e = Ha(t, i, l), e !== null && (Fe(e, t, l), Fr(e, t, l));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = pn(), l = Ua(n);
    l.tag = 2, e != null && (l.callback = e), e = Ha(t, l, n), e !== null && (Fe(e, t, n), Fr(e, t, n));
  } };
  function qp(t, e, n, l, i, u, d) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, d) : e.prototype && e.prototype.isPureReactComponent ? !Br(n, l) || !Br(i, u) : true;
  }
  function Yp(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && _u.enqueueReplaceState(e, e.state, null);
  }
  function pl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = v({}, n));
      for (var i in t) n[i] === void 0 && (n[i] = t[i]);
    }
    return n;
  }
  var bo = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Gp(t) {
    bo(t);
  }
  function Vp(t) {
    console.error(t);
  }
  function Xp(t) {
    bo(t);
  }
  function So(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Qp(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function ku(t, e, n) {
    return n = Ua(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      So(t, e);
    }, n;
  }
  function Kp(t) {
    return t = Ua(t), t.tag = 3, t;
  }
  function Pp(t, e, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      t.payload = function() {
        return i(u);
      }, t.callback = function() {
        Qp(e, n, l);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
      Qp(e, n, l), typeof i != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
    });
  }
  function Py(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Zr(e, n, i, true), n = wn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Pn === null ? pc() : n.alternate === null && ve === 0 && (ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === su ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), mc(t, l, i)), false;
          case 22:
            return n.flags |= 65536, l === su ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), mc(t, l, i)), false;
        }
        throw Error(s(435, n.tag));
      }
      return mc(t, l, i), pc(), false;
    }
    if ($t) return e = wn.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== ou && (t = Error(s(422), { cause: l }), jr(Cn(t, n)))) : (l !== ou && (e = Error(s(423), { cause: l }), jr(Cn(e, n))), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Cn(l, n), i = ku(t.stateNode, l, i), Ku(t, i), ve !== 4 && (ve = 2)), false;
    var u = Error(s(520), { cause: l });
    if (u = Cn(u, n), li === null ? li = [u] : li.push(u), ve !== 4 && (ve = 2), e === null) return true;
    l = Cn(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = ku(n.stateNode, l, t), Ku(n, t), false;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ga === null || !Ga.has(u)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Kp(i), Pp(i, t, n, l), Ku(n, i), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Zp = Error(s(461)), De = false;
  function Le(t, e, n, l) {
    e.child = t === null ? tp(e, null, n, l) : sl(e, t.child, n, l);
  }
  function Fp(t, e, n, l, i) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var y in l) y !== "ref" && (d[y] = l[y]);
    } else d = l;
    return ml(e), l = mu(t, e, n, d, u, i), y = gu(), t !== null && !De ? (yu(t, e, i), da(t, e, i)) : ($t && y && ru(e), e.flags |= 1, Le(t, e, l, i), e.child);
  }
  function Wp(t, e, n, l, i) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !ec(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, Jp(t, e, u, l, i)) : (t = Ao(n.type, null, l, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !qu(t, i)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Br, n(d, l) && t.ref === e.ref) return da(t, e, i);
    }
    return e.flags |= 1, t = qa(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Jp(t, e, n, l, i) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Br(u, l) && t.ref === e.ref) if (De = false, e.pendingProps = l = u, qu(t, i)) t.flags & 131072 && (De = true);
      else return e.lanes = t.lanes, da(t, e, i);
    }
    return Du(t, e, n, l, i);
  }
  function Ip(t, e, n) {
    var l = e.pendingProps, i = l.children, u = (e.stateNode._pendingVisibility & 2) !== 0, d = t !== null ? t.memoizedState : null;
    if (Pr(t, e), l.mode === "hidden" || u) {
      if (e.flags & 128) {
        if (l = d !== null ? d.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, u = 0; i !== null; ) u = u | i.lanes | i.childLanes, i = i.sibling;
          e.childLanes = u & ~l;
        } else e.childLanes = 0, e.child = null;
        return th(t, e, l, n);
      }
      if (n & 536870912) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && uo(e, d !== null ? d.cachePool : null), d !== null ? ep(e, d) : uu(), np(e);
      else return e.lanes = e.childLanes = 536870912, th(t, e, d !== null ? d.baseLanes | n : n, n);
    } else d !== null ? (uo(e, d.cachePool), ep(e, d), _a(), e.memoizedState = null) : (t !== null && uo(e, null), uu(), _a());
    return Le(t, e, i, n), e.child;
  }
  function th(t, e, n, l) {
    var i = pu();
    return i = i === null ? null : { parent: _e._currentValue, pool: i }, e.memoizedState = { baseLanes: n, cachePool: i }, t !== null && uo(e, null), uu(), np(e), t !== null && Zr(t, e, l, true), null;
  }
  function Pr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function Du(t, e, n, l, i) {
    return ml(e), n = mu(t, e, n, l, void 0, i), l = gu(), t !== null && !De ? (yu(t, e, i), da(t, e, i)) : ($t && l && ru(e), e.flags |= 1, Le(t, e, n, i), e.child);
  }
  function eh(t, e, n, l, i, u) {
    return ml(e), e.updateQueue = null, n = op(e, l, n, i), ip(t), l = gu(), t !== null && !De ? (yu(t, e, u), da(t, e, u)) : ($t && l && ru(e), e.flags |= 1, Le(t, e, n, u), e.child);
  }
  function nh(t, e, n, l, i) {
    if (ml(e), e.stateNode === null) {
      var u = $l, d = n.contextType;
      typeof d == "object" && d !== null && (u = Qe(d)), u = new n(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _u, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Xu(e), d = n.contextType, u.context = typeof d == "object" && d !== null ? Qe(d) : $l, u.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (zu(e, n, d, l), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && _u.enqueueReplaceState(u, u.state, null), Jr(e, l, u, i), Wr(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      u = e.stateNode;
      var y = e.memoizedProps, T = pl(n, y);
      u.props = T;
      var O = u.context, K = n.contextType;
      d = $l, typeof K == "object" && K !== null && (d = Qe(K));
      var I = n.getDerivedStateFromProps;
      K = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || O !== d) && Yp(e, u, l, d), Na = false;
      var L = e.memoizedState;
      u.state = L, Jr(e, l, u, i), Wr(), O = e.memoizedState, y || L !== O || Na ? (typeof I == "function" && (zu(e, n, I, l), O = e.memoizedState), (T = Na || qp(e, n, T, l, L, O, d)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = O), u.props = l, u.state = O, u.context = d, l = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      u = e.stateNode, Qu(t, e), d = e.memoizedProps, K = pl(n, d), u.props = K, I = e.pendingProps, L = u.context, O = n.contextType, T = $l, typeof O == "object" && O !== null && (T = Qe(O)), y = n.getDerivedStateFromProps, (O = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== I || L !== T) && Yp(e, u, l, T), Na = false, L = e.memoizedState, u.state = L, Jr(e, l, u, i), Wr();
      var Q = e.memoizedState;
      d !== I || L !== Q || Na || t !== null && t.dependencies !== null && xo(t.dependencies) ? (typeof y == "function" && (zu(e, n, y, l), Q = e.memoizedState), (K = Na || qp(e, n, K, l, L, Q, T) || t !== null && t.dependencies !== null && xo(t.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, Q, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, Q, T)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = Q), u.props = l, u.state = Q, u.context = T, l = K) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return u = l, Pr(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = sl(e, t.child, null, i), e.child = sl(e, null, n, i)) : Le(t, e, n, i), e.memoizedState = u.state, t = e.child) : t = da(t, e, i), t;
  }
  function ah(t, e, n, l) {
    return Hr(), e.flags |= 256, Le(t, e, n, l), e.child;
  }
  var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nu(t) {
    return { baseLanes: t, cachePool: rp() };
  }
  function Uu(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= _n), t;
  }
  function lh(t, e, n) {
    var l = e.pendingProps, i = false, u = (e.flags & 128) !== 0, d;
    if ((d = u) || (d = t !== null && t.memoizedState === null ? false : (ze.current & 2) !== 0), d && (i = true, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if ($t) {
        if (i ? za(e) : _a(), $t) {
          var y = je, T;
          if (T = y) {
            t: {
              for (T = y, y = Kn; T.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (T = Xn(T.nextSibling), T === null) {
                  y = null;
                  break t;
                }
              }
              y = T;
            }
            y !== null ? (e.memoizedState = { dehydrated: y, treeContext: rl !== null ? { id: sa, overflow: ua } : null, retryLane: 536870912 }, T = zn(18, null, null, 0), T.stateNode = y, T.return = e, e.child = T, Ze = e, je = null, T = true) : T = false;
          }
          T || ol(e);
        }
        if (y = e.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return y.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
        ca(e);
      }
      return y = l.children, l = l.fallback, i ? (_a(), i = e.mode, y = ju({ mode: "hidden", children: y }, i), l = yl(l, i, n, null), y.return = e, l.return = e, y.sibling = l, e.child = y, i = e.child, i.memoizedState = Nu(n), i.childLanes = Uu(t, d, n), e.memoizedState = Bu, l) : (za(e), Hu(e, y));
    }
    if (T = t.memoizedState, T !== null && (y = T.dehydrated, y !== null)) {
      if (u) e.flags & 256 ? (za(e), e.flags &= -257, e = Lu(t, e, n)) : e.memoizedState !== null ? (_a(), e.child = t.child, e.flags |= 128, e = null) : (_a(), i = l.fallback, y = e.mode, l = ju({ mode: "visible", children: l.children }, y), i = yl(i, y, n, null), i.flags |= 2, l.return = e, i.return = e, l.sibling = i, e.child = l, sl(e, t.child, null, n), l = e.child, l.memoizedState = Nu(n), l.childLanes = Uu(t, d, n), e.memoizedState = Bu, e = i);
      else if (za(e), y.data === "$!") {
        if (d = y.nextSibling && y.nextSibling.dataset, d) var O = d.dgst;
        d = O, l = Error(s(419)), l.stack = "", l.digest = d, jr({ value: l, source: null, stack: null }), e = Lu(t, e, n);
      } else if (De || Zr(t, e, n, false), d = (n & t.childLanes) !== 0, De || d) {
        if (d = re, d !== null) {
          if (l = n & -n, l & 42) l = 1;
          else switch (l) {
            case 2:
              l = 1;
              break;
            case 8:
              l = 4;
              break;
            case 32:
              l = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              l = 64;
              break;
            case 268435456:
              l = 134217728;
              break;
            default:
              l = 0;
          }
          if (l = l & (d.suspendedLanes | n) ? 0 : l, l !== 0 && l !== T.retryLane) throw T.retryLane = l, Oa(t, l), Fe(d, t, l), Zp;
        }
        y.data === "$?" || pc(), e = Lu(t, e, n);
      } else y.data === "$?" ? (e.flags |= 128, e.child = t.child, e = uv.bind(null, t), y._reactRetry = e, e = null) : (t = T.treeContext, je = Xn(y.nextSibling), Ze = e, $t = true, Gn = null, Kn = false, t !== null && (An[Rn++] = sa, An[Rn++] = ua, An[Rn++] = rl, sa = t.id, ua = t.overflow, rl = e), e = Hu(e, l.children), e.flags |= 4096);
      return e;
    }
    return i ? (_a(), i = l.fallback, y = e.mode, T = t.child, O = T.sibling, l = qa(T, { mode: "hidden", children: l.children }), l.subtreeFlags = T.subtreeFlags & 31457280, O !== null ? i = qa(O, i) : (i = yl(i, y, n, null), i.flags |= 2), i.return = e, l.return = e, l.sibling = i, e.child = l, l = i, i = e.child, y = t.child.memoizedState, y === null ? y = Nu(n) : (T = y.cachePool, T !== null ? (O = _e._currentValue, T = T.parent !== O ? { parent: O, pool: O } : T) : T = rp(), y = { baseLanes: y.baseLanes | n, cachePool: T }), i.memoizedState = y, i.childLanes = Uu(t, d, n), e.memoizedState = Bu, l) : (za(e), n = t.child, t = n.sibling, n = qa(n, { mode: "visible", children: l.children }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Hu(t, e) {
    return e = ju({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function ju(t, e) {
    return zh(t, e, 0, null);
  }
  function Lu(t, e, n) {
    return sl(e, t.child, null, n), t = Hu(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function rh(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Gu(t.return, e, n);
  }
  function $u(t, e, n, l, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: i } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = i);
  }
  function ih(t, e, n) {
    var l = e.pendingProps, i = l.revealOrder, u = l.tail;
    if (Le(t, e, l.children, n), l = ze.current, l & 2) l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && rh(t, n, e);
        else if (t.tag === 19) rh(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      l &= 1;
    }
    switch (Mt(ze, l), i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; ) t = n.alternate, t !== null && so(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), $u(e, false, i, n, u);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && so(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        $u(e, true, n, null, u);
        break;
      case "together":
        $u(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function da(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Ya |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (Zr(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, n = qa(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = qa(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function qu(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && xo(t)));
  }
  function Zy(t, e, n) {
    switch (e.tag) {
      case 3:
        bn(e, e.stateNode.containerInfo), Ba(e, _e, t.memoizedState.cache), Hr();
        break;
      case 27:
      case 5:
        Ht(e);
        break;
      case 4:
        bn(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ba(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (za(e), e.flags |= 128, null) : n & e.child.childLanes ? lh(t, e, n) : (za(e), t = da(t, e, n), t !== null ? t.sibling : null);
        za(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Zr(t, e, n, false), l = (n & e.childLanes) !== 0), i) {
          if (l) return ih(t, e, n);
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Mt(ze, ze.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Ip(t, e, n);
      case 24:
        Ba(e, _e, t.memoizedState.cache);
    }
    return da(t, e, n);
  }
  function oh(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) De = true;
    else {
      if (!qu(t, n) && !(e.flags & 128)) return De = false, Zy(t, e, n);
      De = !!(t.flags & 131072);
    }
    else De = false, $t && e.flags & 1048576 && Xd(e, ao, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, i = l._init;
          if (l = i(l._payload), e.type = l, typeof l == "function") ec(l) ? (t = pl(l, t), e.tag = 1, e = nh(null, e, l, t, n)) : (e.tag = 0, e = Du(null, e, l, t, n));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === R) {
                e.tag = 11, e = Fp(null, e, l, t, n);
                break t;
              } else if (i === k) {
                e.tag = 14, e = Wp(null, e, l, t, n);
                break t;
              }
            }
            throw e = at(l) || l, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Du(t, e, e.type, e.pendingProps, n);
      case 1:
        return l = e.type, i = pl(l, e.pendingProps), nh(t, e, l, i, n);
      case 3:
        t: {
          if (bn(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
          var u = e.pendingProps;
          i = e.memoizedState, l = i.element, Qu(t, e), Jr(e, u, null, n);
          var d = e.memoizedState;
          if (u = d.cache, Ba(e, _e, u), u !== i.cache && Vu(e, [_e], n, true), Wr(), u = d.element, i.isDehydrated) if (i = { element: u, isDehydrated: false, cache: d.cache }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
            e = ah(t, e, u, n);
            break t;
          } else if (u !== l) {
            l = Cn(Error(s(424)), e), jr(l), e = ah(t, e, u, n);
            break t;
          } else for (je = Xn(e.stateNode.containerInfo.firstChild), Ze = e, $t = true, Gn = null, Kn = true, n = tp(e, null, u, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hr(), u === l) {
              e = da(t, e, n);
              break t;
            }
            Le(t, e, u, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Pr(t, e), t === null ? (n = cm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : $t || (n = e.type, t = e.pendingProps, l = Ho(Lt.current).createElement(n), l[Xe] = e, l[nn] = t, $e(l, n, t), ke(l), e.stateNode = l) : e.memoizedState = cm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Ht(e), t === null && $t && (l = e.stateNode = om(e.type, e.pendingProps, Lt.current), Ze = e, Kn = true, je = Xn(l.firstChild)), l = e.pendingProps.children, t !== null || $t ? Le(t, e, l, n) : e.child = sl(e, null, l, n), Pr(t, e), e.child;
      case 5:
        return t === null && $t && ((i = l = je) && (l = Av(l, e.type, e.pendingProps, Kn), l !== null ? (e.stateNode = l, Ze = e, je = Xn(l.firstChild), Kn = false, i = true) : i = false), i || ol(e)), Ht(e), i = e.type, u = e.pendingProps, d = t !== null ? t.memoizedProps : null, l = u.children, wc(i, u) ? l = null : d !== null && wc(i, d) && (e.flags |= 32), e.memoizedState !== null && (i = mu(t, e, Yy, null, null, n), pi._currentValue = i), Pr(t, e), Le(t, e, l, n), e.child;
      case 6:
        return t === null && $t && ((t = n = je) && (n = Rv(n, e.pendingProps, Kn), n !== null ? (e.stateNode = n, Ze = e, je = null, t = true) : t = false), t || ol(e)), null;
      case 13:
        return lh(t, e, n);
      case 4:
        return bn(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = sl(e, null, l, n) : Le(t, e, l, n), e.child;
      case 11:
        return Fp(t, e, e.type, e.pendingProps, n);
      case 7:
        return Le(t, e, e.pendingProps, n), e.child;
      case 8:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return l = e.pendingProps, Ba(e, e.type, l.value), Le(t, e, l.children, n), e.child;
      case 9:
        return i = e.type._context, l = e.pendingProps.children, ml(e), i = Qe(i), l = l(i), e.flags |= 1, Le(t, e, l, n), e.child;
      case 14:
        return Wp(t, e, e.type, e.pendingProps, n);
      case 15:
        return Jp(t, e, e.type, e.pendingProps, n);
      case 19:
        return ih(t, e, n);
      case 22:
        return Ip(t, e, n);
      case 24:
        return ml(e), l = Qe(_e), t === null ? (i = pu(), i === null && (i = re, u = fu(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), e.memoizedState = { parent: l, cache: i }, Xu(e), Ba(e, _e, i)) : (t.lanes & n && (Qu(t, e), Jr(e, null, null, n), Wr()), i = t.memoizedState, u = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Ba(e, _e, l)) : (l = u.cache, Ba(e, _e, l), l !== i.cache && Vu(e, [_e], n, true))), Le(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  var Yu = Et(null), hl = null, pa = null;
  function Ba(t, e, n) {
    Mt(Yu, e._currentValue), e._currentValue = n;
  }
  function ha(t) {
    t._currentValue = Yu.current, Ut(Yu);
  }
  function Gu(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Vu(t, e, n, l) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var d = i.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var y = u;
          u = i;
          for (var T = 0; T < e.length; T++) if (y.context === e[T]) {
            u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), Gu(u.return, n, t), l || (d = null);
            break t;
          }
          u = y.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(s(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), Gu(d, n, t), d = null;
      } else d = i.child;
      if (d !== null) d.return = i;
      else for (d = i; d !== null; ) {
        if (d === t) {
          d = null;
          break;
        }
        if (i = d.sibling, i !== null) {
          i.return = d.return, d = i;
          break;
        }
        d = d.return;
      }
      i = d;
    }
  }
  function Zr(t, e, n, l) {
    t = null;
    for (var i = e, u = false; i !== null; ) {
      if (!u) {
        if (i.flags & 524288) u = true;
        else if (i.flags & 262144) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(s(387));
        if (d = d.memoizedProps, d !== null) {
          var y = i.type;
          un(i.pendingProps.value, d.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (i === Oe.current) {
        if (d = i.alternate, d === null) throw Error(s(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(pi) : t = [pi]);
      }
      i = i.return;
    }
    t !== null && Vu(e, t, n, l), e.flags |= 262144;
  }
  function xo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!un(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function ml(t) {
    hl = t, pa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Qe(t) {
    return sh(hl, t);
  }
  function To(t, e) {
    return hl === null && ml(t), sh(t, e);
  }
  function sh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, pa === null) {
      if (t === null) throw Error(s(308));
      pa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else pa = pa.next = e;
    return n;
  }
  var Na = false;
  function Xu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Qu(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Ua(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ha(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, me & 2) {
      var i = l.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = eo(t), Gd(t, null, n), e;
    }
    return to(t, l, e, n), eo(t);
  }
  function Fr(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194176) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Wf(t, n);
    }
  }
  function Ku(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var i = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          u === null ? i = u = d : u = u.next = d, n = n.next;
        } while (n !== null);
        u === null ? i = u = e : u = u.next = e;
      } else i = u = e;
      n = { baseState: l.baseState, firstBaseUpdate: i, lastBaseUpdate: u, shared: l.shared, callbacks: l.callbacks }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Pu = false;
  function Wr() {
    if (Pu) {
      var t = Ql;
      if (t !== null) throw t;
    }
  }
  function Jr(t, e, n, l) {
    Pu = false;
    var i = t.updateQueue;
    Na = false;
    var u = i.firstBaseUpdate, d = i.lastBaseUpdate, y = i.shared.pending;
    if (y !== null) {
      i.shared.pending = null;
      var T = y, O = T.next;
      T.next = null, d === null ? u = O : d.next = O, d = T;
      var K = t.alternate;
      K !== null && (K = K.updateQueue, y = K.lastBaseUpdate, y !== d && (y === null ? K.firstBaseUpdate = O : y.next = O, K.lastBaseUpdate = T));
    }
    if (u !== null) {
      var I = i.baseState;
      d = 0, K = O = T = null, y = u;
      do {
        var L = y.lane & -536870913, Q = L !== y.lane;
        if (Q ? (jt & L) === L : (l & L) === L) {
          L !== 0 && L === Xl && (Pu = true), K !== null && (K = K.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
          t: {
            var pt = t, Ct = y;
            L = e;
            var be = n;
            switch (Ct.tag) {
              case 1:
                if (pt = Ct.payload, typeof pt == "function") {
                  I = pt.call(be, I, L);
                  break t;
                }
                I = pt;
                break t;
              case 3:
                pt.flags = pt.flags & -65537 | 128;
              case 0:
                if (pt = Ct.payload, L = typeof pt == "function" ? pt.call(be, I, L) : pt, L == null) break t;
                I = v({}, I, L);
                break t;
              case 2:
                Na = true;
            }
          }
          L = y.callback, L !== null && (t.flags |= 64, Q && (t.flags |= 8192), Q = i.callbacks, Q === null ? i.callbacks = [L] : Q.push(L));
        } else Q = { lane: L, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, K === null ? (O = K = Q, T = I) : K = K.next = Q, d |= L;
        if (y = y.next, y === null) {
          if (y = i.shared.pending, y === null) break;
          Q = y, y = Q.next, Q.next = null, i.lastBaseUpdate = Q, i.shared.pending = null;
        }
      } while (true);
      K === null && (T = I), i.baseState = T, i.firstBaseUpdate = O, i.lastBaseUpdate = K, u === null && (i.shared.lanes = 0), Ya |= d, t.lanes = d, t.memoizedState = I;
    }
  }
  function uh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function ch(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) uh(n[t], e);
  }
  function Ir(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var u = n.create, d = n.inst;
            l = u(), d.destroy = l;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (y) {
      ee(e, e.return, y);
    }
  }
  function ja(t, e, n) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst, y = d.destroy;
            if (y !== void 0) {
              d.destroy = void 0, i = e;
              var T = n;
              try {
                y();
              } catch (O) {
                ee(i, T, O);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (O) {
      ee(e, e.return, O);
    }
  }
  function fh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ch(e, n);
      } catch (l) {
        ee(t, t.return, l);
      }
    }
  }
  function dh(t, e, n) {
    n.props = pl(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      ee(t, e, l);
    }
  }
  function gl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var l = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = l;
            break;
          default:
            i = l;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (u) {
      ee(t, e, u);
    }
  }
  function cn(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null) if (typeof l == "function") try {
      l();
    } catch (i) {
      ee(t, e, i);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ee(t, e, i);
    }
    else n.current = null;
  }
  function ph(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      ee(t, t.return, i);
    }
  }
  function hh(t, e, n) {
    try {
      var l = t.stateNode;
      Sv(l, t.type, n, e), l[nn] = e;
    } catch (i) {
      ee(t, t.return, i);
    }
  }
  function mh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function Zu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || mh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Fu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Uo));
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (Fu(t, e, n), t = t.sibling; t !== null; ) Fu(t, e, n), t = t.sibling;
  }
  function Eo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (Eo(t, e, n), t = t.sibling; t !== null; ) Eo(t, e, n), t = t.sibling;
  }
  var ma = false, ye = false, Wu = false, gh = typeof WeakSet == "function" ? WeakSet : Set, Be = null, yh = false;
  function Fy(t, e) {
    if (t = t.containerInfo, Ac = Go, t = Bd(t), Is(t)) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var l = n.getSelection && n.getSelection();
        if (l && l.rangeCount !== 0) {
          n = l.anchorNode;
          var i = l.anchorOffset, u = l.focusNode;
          l = l.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break t;
          }
          var d = 0, y = -1, T = -1, O = 0, K = 0, I = t, L = null;
          e: for (; ; ) {
            for (var Q; I !== n || i !== 0 && I.nodeType !== 3 || (y = d + i), I !== u || l !== 0 && I.nodeType !== 3 || (T = d + l), I.nodeType === 3 && (d += I.nodeValue.length), (Q = I.firstChild) !== null; ) L = I, I = Q;
            for (; ; ) {
              if (I === t) break e;
              if (L === n && ++O === i && (y = d), L === u && ++K === l && (T = d), (Q = I.nextSibling) !== null) break;
              I = L, L = I.parentNode;
            }
            I = Q;
          }
          n = y === -1 || T === -1 ? null : { start: y, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Rc = { focusedElem: t, selectionRange: n }, Go = false, Be = e; Be !== null; ) if (e = Be, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Be = t;
    else for (; Be !== null; ) {
      switch (e = Be, u = e.alternate, t = e.flags, e.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (t & 1024 && u !== null) {
            t = void 0, n = e, i = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
            try {
              var pt = pl(n.type, i, n.elementType === n.type);
              t = l.getSnapshotBeforeUpdate(pt, u), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Ct) {
              ee(n, n.return, Ct);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) zc(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                zc(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if (t & 1024) throw Error(s(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Be = t;
        break;
      }
      Be = e.return;
    }
    return pt = yh, yh = false, pt;
  }
  function vh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ya(t, n), l & 4 && Ir(5, n);
        break;
      case 1:
        if (ya(t, n), l & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (y) {
          ee(n, n.return, y);
        }
        else {
          var i = pl(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (y) {
            ee(n, n.return, y);
          }
        }
        l & 64 && fh(n), l & 512 && gl(n, n.return);
        break;
      case 3:
        if (ya(t, n), l & 64 && (l = n.updateQueue, l !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            ch(l, t);
          } catch (y) {
            ee(n, n.return, y);
          }
        }
        break;
      case 26:
        ya(t, n), l & 512 && gl(n, n.return);
        break;
      case 27:
      case 5:
        ya(t, n), e === null && l & 4 && ph(n), l & 512 && gl(n, n.return);
        break;
      case 12:
        ya(t, n);
        break;
      case 13:
        ya(t, n), l & 4 && xh(t, n);
        break;
      case 22:
        if (i = n.memoizedState !== null || ma, !i) {
          e = e !== null && e.memoizedState !== null || ye;
          var u = ma, d = ye;
          ma = i, (ye = e) && !d ? La(t, n, (n.subtreeFlags & 8772) !== 0) : ya(t, n), ma = u, ye = d;
        }
        l & 512 && (n.memoizedProps.mode === "manual" ? gl(n, n.return) : cn(n, n.return));
        break;
      default:
        ya(t, n);
    }
  }
  function bh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, bh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Hs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var we = null, fn = false;
  function ga(t, e, n) {
    for (n = n.child; n !== null; ) Sh(t, e, n), n = n.sibling;
  }
  function Sh(t, e, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(te, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        ye || cn(n, e), ga(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ye || cn(n, e);
        var l = we, i = fn;
        for (we = n.stateNode, ga(t, e, n), n = n.stateNode, e = n.attributes; e.length; ) n.removeAttributeNode(e[0]);
        Hs(n), we = l, fn = i;
        break;
      case 5:
        ye || cn(n, e);
      case 6:
        i = we;
        var u = fn;
        if (we = null, ga(t, e, n), we = i, fn = u, we !== null) if (fn) try {
          t = we, l = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l);
        } catch (d) {
          ee(n, e, d);
        }
        else try {
          we.removeChild(n.stateNode);
        } catch (d) {
          ee(n, e, d);
        }
        break;
      case 18:
        we !== null && (fn ? (e = we, n = n.stateNode, e.nodeType === 8 ? Oc(e.parentNode, n) : e.nodeType === 1 && Oc(e, n), yi(e)) : Oc(we, n.stateNode));
        break;
      case 4:
        l = we, i = fn, we = n.stateNode.containerInfo, fn = true, ga(t, e, n), we = l, fn = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ye || ja(2, n, e), ye || ja(4, n, e), ga(t, e, n);
        break;
      case 1:
        ye || (cn(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && dh(n, e, l)), ga(t, e, n);
        break;
      case 21:
        ga(t, e, n);
        break;
      case 22:
        ye || cn(n, e), ye = (l = ye) || n.memoizedState !== null, ga(t, e, n), ye = l;
        break;
      default:
        ga(t, e, n);
    }
  }
  function xh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      yi(t);
    } catch (n) {
      ee(e, e.return, n);
    }
  }
  function Wy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new gh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new gh()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Ju(t, e) {
    var n = Wy(t);
    e.forEach(function(l) {
      var i = cv.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Mn(t, e) {
    var n = e.deletions;
    if (n !== null) for (var l = 0; l < n.length; l++) {
      var i = n[l], u = t, d = e, y = d;
      t: for (; y !== null; ) {
        switch (y.tag) {
          case 27:
          case 5:
            we = y.stateNode, fn = false;
            break t;
          case 3:
            we = y.stateNode.containerInfo, fn = true;
            break t;
          case 4:
            we = y.stateNode.containerInfo, fn = true;
            break t;
        }
        y = y.return;
      }
      if (we === null) throw Error(s(160));
      Sh(u, d, i), we = null, fn = false, u = i.alternate, u !== null && (u.return = null), i.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) Th(e, t), e = e.sibling;
  }
  var Vn = null;
  function Th(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Mn(e, t), On(t), l & 4 && (ja(3, t, t.return), Ir(3, t), ja(5, t, t.return));
        break;
      case 1:
        Mn(e, t), On(t), l & 512 && (ye || n === null || cn(n, n.return)), l & 64 && ma && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = Vn;
        if (Mn(e, t), On(t), l & 512 && (ye || n === null || cn(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null) if (l === null) if (t.stateNode === null) {
            t: {
              l = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
              e: switch (l) {
                case "title":
                  u = i.getElementsByTagName("title")[0], (!u || u[Ar] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(u, i.querySelector("head > title"))), $e(u, l, n), u[Xe] = t, ke(u), l = u;
                  break t;
                case "link":
                  var d = pm("link", "href", i).get(l + (n.href || ""));
                  if (d) {
                    for (var y = 0; y < d.length; y++) if (u = d[y], u.getAttribute("href") === (n.href == null ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      d.splice(y, 1);
                      break e;
                    }
                  }
                  u = i.createElement(l), $e(u, l, n), i.head.appendChild(u);
                  break;
                case "meta":
                  if (d = pm("meta", "content", i).get(l + (n.content || ""))) {
                    for (y = 0; y < d.length; y++) if (u = d[y], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      d.splice(y, 1);
                      break e;
                    }
                  }
                  u = i.createElement(l), $e(u, l, n), i.head.appendChild(u);
                  break;
                default:
                  throw Error(s(468, l));
              }
              u[Xe] = t, ke(u), l = u;
            }
            t.stateNode = l;
          } else hm(i, t.type, t.stateNode);
          else t.stateNode = dm(i, l, t.memoizedProps);
          else u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? hm(i, t.type, t.stateNode) : dm(i, l, t.memoizedProps)) : l === null && t.stateNode !== null && hh(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          i = t.stateNode, u = t.memoizedProps;
          try {
            for (var T = i.firstChild; T; ) {
              var O = T.nextSibling, K = T.nodeName;
              T[Ar] || K === "HEAD" || K === "BODY" || K === "SCRIPT" || K === "STYLE" || K === "LINK" && T.rel.toLowerCase() === "stylesheet" || i.removeChild(T), T = O;
            }
            for (var I = t.type, L = i.attributes; L.length; ) i.removeAttributeNode(L[0]);
            $e(i, I, u), i[Xe] = t, i[nn] = u;
          } catch (pt) {
            ee(t, t.return, pt);
          }
        }
      case 5:
        if (Mn(e, t), On(t), l & 512 && (ye || n === null || cn(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            Dl(i, "");
          } catch (pt) {
            ee(t, t.return, pt);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, hh(t, i, n !== null ? n.memoizedProps : i)), l & 1024 && (Wu = true);
        break;
      case 6:
        if (Mn(e, t), On(t), l & 4) {
          if (t.stateNode === null) throw Error(s(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (pt) {
            ee(t, t.return, pt);
          }
        }
        break;
      case 3:
        if ($o = null, i = Vn, Vn = jo(e.containerInfo), Mn(e, t), Vn = i, On(t), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
          yi(e.containerInfo);
        } catch (pt) {
          ee(t, t.return, pt);
        }
        Wu && (Wu = false, Eh(t));
        break;
      case 4:
        l = Vn, Vn = jo(t.stateNode.containerInfo), Mn(e, t), On(t), Vn = l;
        break;
      case 12:
        Mn(e, t), On(t);
        break;
      case 13:
        Mn(e, t), On(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (oc = He()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ju(t, l)));
        break;
      case 22:
        if (l & 512 && (ye || n === null || cn(n, n.return)), T = t.memoizedState !== null, O = n !== null && n.memoizedState !== null, K = ma, I = ye, ma = K || T, ye = I || O, Mn(e, t), ye = I, ma = K, On(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, l & 8192 && (e._visibility = T ? e._visibility & -2 : e._visibility | 1, T && (e = ma || ye, n === null || O || e || Fl(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual")) t: for (n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
            if (n === null) {
              O = n = e;
              try {
                if (i = O.stateNode, T) u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                else {
                  d = O.stateNode, y = O.memoizedProps.style;
                  var Q = y != null && y.hasOwnProperty("display") ? y.display : null;
                  d.style.display = Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                }
              } catch (pt) {
                ee(O, O.return, pt);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              O = e;
              try {
                O.stateNode.nodeValue = T ? "" : O.memoizedProps;
              } catch (pt) {
                ee(O, O.return, pt);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), e = e.return;
          }
          n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
        }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Ju(t, n))));
        break;
      case 19:
        Mn(e, t), On(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ju(t, l)));
        break;
      case 21:
        break;
      default:
        Mn(e, t), On(t);
    }
  }
  function On(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (mh(n)) {
                var l = n;
                break t;
              }
              n = n.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var i = l.stateNode, u = Zu(t);
              Eo(t, u, i);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (Dl(d, ""), l.flags &= -33);
              var y = Zu(t);
              Eo(t, y, d);
              break;
            case 3:
            case 4:
              var T = l.stateNode.containerInfo, O = Zu(t);
              Fu(t, O, T);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (K) {
        ee(t, t.return, K);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Eh(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      Eh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function ya(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) vh(t, e.alternate, e), e = e.sibling;
  }
  function Fl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ja(4, e, e.return), Fl(e);
          break;
        case 1:
          cn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && dh(e, e.return, n), Fl(e);
          break;
        case 26:
        case 27:
        case 5:
          cn(e, e.return), Fl(e);
          break;
        case 22:
          cn(e, e.return), e.memoizedState === null && Fl(e);
          break;
        default:
          Fl(e);
      }
      t = t.sibling;
    }
  }
  function La(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, i = t, u = e, d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          La(i, u, n), Ir(4, u);
          break;
        case 1:
          if (La(i, u, n), l = u, i = l.stateNode, typeof i.componentDidMount == "function") try {
            i.componentDidMount();
          } catch (O) {
            ee(l, l.return, O);
          }
          if (l = u, i = l.updateQueue, i !== null) {
            var y = l.stateNode;
            try {
              var T = i.shared.hiddenCallbacks;
              if (T !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < T.length; i++) uh(T[i], y);
            } catch (O) {
              ee(l, l.return, O);
            }
          }
          n && d & 64 && fh(u), gl(u, u.return);
          break;
        case 26:
        case 27:
        case 5:
          La(i, u, n), n && l === null && d & 4 && ph(u), gl(u, u.return);
          break;
        case 12:
          La(i, u, n);
          break;
        case 13:
          La(i, u, n), n && d & 4 && xh(i, u);
          break;
        case 22:
          u.memoizedState === null && La(i, u, n), gl(u, u.return);
          break;
        default:
          La(i, u, n);
      }
      e = e.sibling;
    }
  }
  function Iu(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Gr(n));
  }
  function tc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Gr(t));
  }
  function $a(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ch(t, e, n, l), e = e.sibling;
  }
  function Ch(t, e, n, l) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $a(t, e, n, l), i & 2048 && Ir(9, e);
        break;
      case 3:
        $a(t, e, n, l), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Gr(t)));
        break;
      case 12:
        if (i & 2048) {
          $a(t, e, n, l), t = e.stateNode;
          try {
            var u = e.memoizedProps, d = u.id, y = u.onPostCommit;
            typeof y == "function" && y(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (T) {
            ee(e, e.return, T);
          }
        } else $a(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, e.memoizedState !== null ? u._visibility & 4 ? $a(t, e, n, l) : ti(t, e) : u._visibility & 4 ? $a(t, e, n, l) : (u._visibility |= 4, Wl(t, e, n, l, (e.subtreeFlags & 10256) !== 0)), i & 2048 && Iu(e.alternate, e);
        break;
      case 24:
        $a(t, e, n, l), i & 2048 && tc(e.alternate, e);
        break;
      default:
        $a(t, e, n, l);
    }
  }
  function Wl(t, e, n, l, i) {
    for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t, d = e, y = n, T = l, O = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Wl(u, d, y, T, i), Ir(8, d);
          break;
        case 23:
          break;
        case 22:
          var K = d.stateNode;
          d.memoizedState !== null ? K._visibility & 4 ? Wl(u, d, y, T, i) : ti(u, d) : (K._visibility |= 4, Wl(u, d, y, T, i)), i && O & 2048 && Iu(d.alternate, d);
          break;
        case 24:
          Wl(u, d, y, T, i), i && O & 2048 && tc(d.alternate, d);
          break;
        default:
          Wl(u, d, y, T, i);
      }
      e = e.sibling;
    }
  }
  function ti(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, l = e, i = l.flags;
      switch (l.tag) {
        case 22:
          ti(n, l), i & 2048 && Iu(l.alternate, l);
          break;
        case 24:
          ti(n, l), i & 2048 && tc(l.alternate, l);
          break;
        default:
          ti(n, l);
      }
      e = e.sibling;
    }
  }
  var ei = 8192;
  function Jl(t) {
    if (t.subtreeFlags & ei) for (t = t.child; t !== null; ) Ah(t), t = t.sibling;
  }
  function Ah(t) {
    switch (t.tag) {
      case 26:
        Jl(t), t.flags & ei && t.memoizedState !== null && Lv(Vn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Jl(t);
        break;
      case 3:
      case 4:
        var e = Vn;
        Vn = jo(t.stateNode.containerInfo), Jl(t), Vn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = ei, ei = 16777216, Jl(t), ei = e) : Jl(t));
        break;
      default:
        Jl(t);
    }
  }
  function Rh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ni(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, Mh(l, t);
      }
      Rh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) wh(t), t = t.sibling;
  }
  function wh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ni(t), t.flags & 2048 && ja(9, t, t.return);
        break;
      case 3:
        ni(t);
        break;
      case 12:
        ni(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, Co(t)) : ni(t);
        break;
      default:
        ni(t);
    }
  }
  function Co(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, Mh(l, t);
      }
      Rh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, e, e.return), Co(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 4 && (n._visibility &= -5, Co(e));
          break;
        default:
          Co(e);
      }
      t = t.sibling;
    }
  }
  function Mh(t, e) {
    for (; Be !== null; ) {
      var n = Be;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Gr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Be = l;
      else t: for (n = t; Be !== null; ) {
        l = Be;
        var i = l.sibling, u = l.return;
        if (bh(l), l === n) {
          Be = null;
          break t;
        }
        if (i !== null) {
          i.return = u, Be = i;
          break t;
        }
        Be = u;
      }
    }
  }
  function Jy(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zn(t, e, n, l) {
    return new Jy(t, e, n, l);
  }
  function ec(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function qa(t, e) {
    var n = t.alternate;
    return n === null ? (n = zn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 31457280, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Oh(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Ao(t, e, n, l, i, u) {
    var d = 0;
    if (l = t, typeof t == "function") ec(t) && (d = 1);
    else if (typeof t == "string") d = Hv(t, n, ce.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case g:
        return yl(n.children, i, u, e);
      case m:
        d = 8, i |= 24;
        break;
      case S:
        return t = zn(12, n, e, i | 2), t.elementType = S, t.lanes = u, t;
      case x:
        return t = zn(13, n, e, i), t.elementType = x, t.lanes = u, t;
      case D:
        return t = zn(19, n, e, i), t.elementType = D, t.lanes = u, t;
      case B:
        return zh(n, i, u, e);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case b:
          case z:
            d = 10;
            break t;
          case C:
            d = 9;
            break t;
          case R:
            d = 11;
            break t;
          case k:
            d = 14;
            break t;
          case q:
            d = 16, l = null;
            break t;
        }
        d = 29, n = Error(s(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return e = zn(d, n, e, i), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function yl(t, e, n, l) {
    return t = zn(7, t, l, e), t.lanes = n, t;
  }
  function zh(t, e, n, l) {
    t = zn(22, t, l, e), t.elementType = B, t.lanes = n;
    var i = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (!(i._pendingVisibility & 2)) {
        var d = Oa(u, 2);
        d !== null && (i._pendingVisibility |= 2, Fe(d, u, 2));
      }
    }, attach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (i._pendingVisibility & 2) {
        var d = Oa(u, 2);
        d !== null && (i._pendingVisibility &= -3, Fe(d, u, 2));
      }
    } };
    return t.stateNode = i, t;
  }
  function nc(t, e, n) {
    return t = zn(6, t, null, e), t.lanes = n, t;
  }
  function ac(t, e, n) {
    return e = zn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  function va(t) {
    t.flags |= 4;
  }
  function _h(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !mm(e)) {
      if (e = wn.current, e !== null && ((jt & 4194176) === jt ? Pn !== null : (jt & 62914560) !== jt && !(jt & 536870912) || e !== Pn)) throw $r = su, Pd;
      t.flags |= 8192;
    }
  }
  function Ro(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Zf() : 536870912, t.lanes |= e, tr |= e);
  }
  function ai(t, e) {
    if (!$t) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var l = null; n !== null; ) n.alternate !== null && (l = n), n = n.sibling;
        l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
    }
  }
  function he(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e) for (var i = t.child; i !== null; ) n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 31457280, l |= i.flags & 31457280, i.return = t, i = i.sibling;
    else for (i = t.child; i !== null; ) n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function Iy(t, e, n) {
    var l = e.pendingProps;
    switch (iu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return he(e), null;
      case 1:
        return he(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ha(_e), Ye(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ur(e) ? va(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Gn !== null && (fc(Gn), Gn = null))), he(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (va(e), n !== null ? (he(e), _h(e, n)) : (he(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (va(e), he(e), _h(e, n)) : (he(e), e.flags &= -16777217) : (t.memoizedProps !== l && va(e), he(e), e.flags &= -16777217), null;
      case 27:
        fe(e), n = Lt.current;
        var i = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && va(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return he(e), null;
          }
          t = ce.current, Ur(e) ? Qd(e) : (t = om(i, l, n), e.stateNode = t, va(e));
        }
        return he(e), null;
      case 5:
        if (fe(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && va(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return he(e), null;
          }
          if (t = ce.current, Ur(e)) Qd(e);
          else {
            switch (i = Ho(Lt.current), t) {
              case 1:
                t = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    t = i.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof l.is == "string" ? i.createElement("select", { is: l.is }) : i.createElement("select"), l.multiple ? t.multiple = true : l.size && (t.size = l.size);
                    break;
                  default:
                    t = typeof l.is == "string" ? i.createElement(n, { is: l.is }) : i.createElement(n);
                }
            }
            t[Xe] = e, t[nn] = l;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = t;
            t: switch ($e(t, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = true;
                break t;
              default:
                t = false;
            }
            t && va(e);
          }
        }
        return he(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && va(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (t = Lt.current, Ur(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = Ze, i !== null) switch (i.tag) {
              case 27:
              case 5:
                l = i.memoizedProps;
            }
            t[Xe] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === true || em(t.nodeValue, n)), t || ol(e);
          } else t = Ho(t).createTextNode(l), t[Xe] = e, e.stateNode = t;
        }
        return he(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = Ur(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(s(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Xe] = e;
            } else Hr(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            he(e), i = false;
          } else Gn !== null && (fc(Gn), Gn = null), i = true;
          if (!i) return e.flags & 256 ? (ca(e), e) : (ca(e), null);
        }
        if (ca(e), e.flags & 128) return e.lanes = n, e;
        if (n = l !== null, t = t !== null && t.memoizedState !== null, n) {
          l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), Ro(e, e.updateQueue), he(e), null;
      case 4:
        return Ye(), t === null && Tc(e.stateNode.containerInfo), he(e), null;
      case 10:
        return ha(e.type), he(e), null;
      case 19:
        if (Ut(ze), i = e.memoizedState, i === null) return he(e), null;
        if (l = (e.flags & 128) !== 0, u = i.rendering, u === null) if (l) ai(i, false);
        else {
          if (ve !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = so(t), u !== null) {
              for (e.flags |= 128, ai(i, false), t = u.updateQueue, e.updateQueue = t, Ro(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) Oh(n, t), n = n.sibling;
              return Mt(ze, ze.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && He() > wo && (e.flags |= 128, l = true, ai(i, false), e.lanes = 4194304);
        }
        else {
          if (!l) if (t = so(u), t !== null) {
            if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, Ro(e, t), ai(i, true), i.tail === null && i.tailMode === "hidden" && !u.alternate && !$t) return he(e), null;
          } else 2 * He() - i.renderingStartTime > wo && n !== 536870912 && (e.flags |= 128, l = true, ai(i, false), e.lanes = 4194304);
          i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = He(), e.sibling = null, t = ze.current, Mt(ze, l ? t & 1 | 2 : t & 1), e) : (he(e), null);
      case 22:
      case 23:
        return ca(e), cu(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? n & 536870912 && !(e.flags & 128) && (he(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : he(e), n = e.updateQueue, n !== null && Ro(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && Ut(ul), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ha(_e), he(e), null;
      case 25:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function tv(t, e) {
    switch (iu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ha(_e), Ye(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return fe(e), null;
      case 13:
        if (ca(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(s(340));
          Hr();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ut(ze), null;
      case 4:
        return Ye(), null;
      case 10:
        return ha(e.type), null;
      case 22:
      case 23:
        return ca(e), cu(), t !== null && Ut(ul), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ha(_e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kh(t, e) {
    switch (iu(e), e.tag) {
      case 3:
        ha(_e), Ye();
        break;
      case 26:
      case 27:
      case 5:
        fe(e);
        break;
      case 4:
        Ye();
        break;
      case 13:
        ca(e);
        break;
      case 19:
        Ut(ze);
        break;
      case 10:
        ha(e.type);
        break;
      case 22:
      case 23:
        ca(e), cu(), t !== null && Ut(ul);
        break;
      case 24:
        ha(_e);
    }
  }
  var ev = { getCacheForType: function(t) {
    var e = Qe(_e), n = e.data.get(t);
    return n === void 0 && (n = t(), e.data.set(t, n)), n;
  } }, nv = typeof WeakMap == "function" ? WeakMap : Map, me = 0, re = null, Dt = null, jt = 0, ie = 0, dn = null, ba = false, Il = false, lc = false, Sa = 0, ve = 0, Ya = 0, vl = 0, rc = 0, _n = 0, tr = 0, li = null, Fn = null, ic = false, oc = 0, wo = 1 / 0, Mo = null, Ga = null, Oo = false, bl = null, ri = 0, sc = 0, uc = null, ii = 0, cc = null;
  function pn() {
    if (me & 2 && jt !== 0) return jt & -jt;
    if (X.T !== null) {
      var t = Xl;
      return t !== 0 ? t : vc();
    }
    return If();
  }
  function Dh() {
    _n === 0 && (_n = !(jt & 536870912) || $t ? Pf() : 536870912);
    var t = wn.current;
    return t !== null && (t.flags |= 32), _n;
  }
  function Fe(t, e, n) {
    (t === re && ie === 2 || t.cancelPendingCommit !== null) && (er(t, 0), xa(t, jt, _n, false)), Cr(t, n), (!(me & 2) || t !== re) && (t === re && (!(me & 2) && (vl |= n), ve === 4 && xa(t, jt, _n, false)), Wn(t));
  }
  function Bh(t, e, n) {
    if (me & 6) throw Error(s(327));
    var l = !n && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Qn(t, e), i = l ? rv(t, e) : hc(t, e, true), u = l;
    do {
      if (i === 0) {
        Il && !l && xa(t, e, 0, false);
        break;
      } else if (i === 6) xa(t, e, 0, !ba);
      else {
        if (n = t.current.alternate, u && !av(n)) {
          i = hc(t, e, false), u = false;
          continue;
        }
        if (i === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var d = 0;
          else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            e = d;
            t: {
              var y = t;
              i = li;
              var T = y.current.memoizedState.isDehydrated;
              if (T && (er(y, d).flags |= 256), d = hc(y, d, false), d !== 2) {
                if (lc && !T) {
                  y.errorRecoveryDisabledLanes |= u, vl |= u, i = 4;
                  break t;
                }
                u = Fn, Fn = i, u !== null && fc(u);
              }
              i = d;
            }
            if (u = false, i !== 2) continue;
          }
        }
        if (i === 1) {
          er(t, 0), xa(t, e, 0, true);
          break;
        }
        t: {
          switch (l = t, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194176) === e) {
                xa(l, e, _n, !ba);
                break t;
              }
              break;
            case 2:
              Fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (l.finishedWork = n, l.finishedLanes = e, (e & 62914560) === e && (u = oc + 300 - He(), 10 < u)) {
            if (xa(l, e, _n, !ba), Sn(l, 0) !== 0) break t;
            l.timeoutHandle = lm(Nh.bind(null, l, n, Fn, Mo, ic, e, _n, vl, tr, ba, 2, -0, 0), u);
            break t;
          }
          Nh(l, n, Fn, Mo, ic, e, _n, vl, tr, ba, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Wn(t);
  }
  function fc(t) {
    Fn === null ? Fn = t : Fn.push.apply(Fn, t);
  }
  function Nh(t, e, n, l, i, u, d, y, T, O, K, I, L) {
    var Q = e.subtreeFlags;
    if ((Q & 8192 || (Q & 16785408) === 16785408) && (di = { stylesheets: null, count: 0, unsuspend: jv }, Ah(e), e = $v(), e !== null)) {
      t.cancelPendingCommit = e(Yh.bind(null, t, n, l, i, d, y, T, 1, I, L)), xa(t, u, d, !O);
      return;
    }
    Yh(t, n, l, i, d, y, T, K, I, L);
  }
  function av(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var l = 0; l < n.length; l++) {
        var i = n[l], u = i.getSnapshot;
        i = i.value;
        try {
          if (!un(u(), i)) return false;
        } catch {
          return false;
        }
      }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function xa(t, e, n, l) {
    e &= ~rc, e &= ~vl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var u = 31 - Tt(i), d = 1 << u;
      l[u] = -1, i &= ~d;
    }
    n !== 0 && Ff(t, n, e);
  }
  function zo() {
    return me & 6 ? true : (oi(0), false);
  }
  function dc() {
    if (Dt !== null) {
      if (ie === 0) var t = Dt.return;
      else t = Dt, pa = hl = null, vu(t), Gl = null, qr = 0, t = Dt;
      for (; t !== null; ) kh(t.alternate, t), t = t.return;
      Dt = null;
    }
  }
  function er(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Tv(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), dc(), re = t, Dt = n = qa(t.current, null), jt = e, ie = 0, dn = null, ba = false, Il = Qn(t, e), lc = false, tr = _n = rc = vl = Ya = ve = 0, Fn = li = null, ic = false, e & 8 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var i = 31 - Tt(l), u = 1 << i;
      e |= t[i], l &= ~u;
    }
    return Sa = e, Ii(), n;
  }
  function Uh(t, e) {
    _t = null, X.H = Zn, e === Lr ? (e = Wd(), ie = 3) : e === Pd ? (e = Wd(), ie = 4) : ie = e === Zp ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, dn = e, Dt === null && (ve = 1, So(t, Cn(e, t.current)));
  }
  function Hh() {
    var t = X.H;
    return X.H = Zn, t === null ? Zn : t;
  }
  function jh() {
    var t = X.A;
    return X.A = ev, t;
  }
  function pc() {
    ve = 4, ba || (jt & 4194176) !== jt && wn.current !== null || (Il = true), !(Ya & 134217727) && !(vl & 134217727) || re === null || xa(re, jt, _n, false);
  }
  function hc(t, e, n) {
    var l = me;
    me |= 2;
    var i = Hh(), u = jh();
    (re !== t || jt !== e) && (Mo = null, er(t, e)), e = false;
    var d = ve;
    t: do
      try {
        if (ie !== 0 && Dt !== null) {
          var y = Dt, T = dn;
          switch (ie) {
            case 8:
              dc(), d = 6;
              break t;
            case 3:
            case 2:
            case 6:
              wn.current === null && (e = true);
              var O = ie;
              if (ie = 0, dn = null, nr(t, y, T, O), n && Il) {
                d = 0;
                break t;
              }
              break;
            default:
              O = ie, ie = 0, dn = null, nr(t, y, T, O);
          }
        }
        lv(), d = ve;
        break;
      } catch (K) {
        Uh(t, K);
      }
    while (true);
    return e && t.shellSuspendCounter++, pa = hl = null, me = l, X.H = i, X.A = u, Dt === null && (re = null, jt = 0, Ii()), d;
  }
  function lv() {
    for (; Dt !== null; ) Lh(Dt);
  }
  function rv(t, e) {
    var n = me;
    me |= 2;
    var l = Hh(), i = jh();
    re !== t || jt !== e ? (Mo = null, wo = He() + 500, er(t, e)) : Il = Qn(t, e);
    t: do
      try {
        if (ie !== 0 && Dt !== null) {
          e = Dt;
          var u = dn;
          e: switch (ie) {
            case 1:
              ie = 0, dn = null, nr(t, e, u, 1);
              break;
            case 2:
              if (Zd(u)) {
                ie = 0, dn = null, $h(e);
                break;
              }
              e = function() {
                ie === 2 && re === t && (ie = 7), Wn(t);
              }, u.then(e, e);
              break t;
            case 3:
              ie = 7;
              break t;
            case 4:
              ie = 5;
              break t;
            case 7:
              Zd(u) ? (ie = 0, dn = null, $h(e)) : (ie = 0, dn = null, nr(t, e, u, 7));
              break;
            case 5:
              var d = null;
              switch (Dt.tag) {
                case 26:
                  d = Dt.memoizedState;
                case 5:
                case 27:
                  var y = Dt;
                  if (!d || mm(d)) {
                    ie = 0, dn = null;
                    var T = y.sibling;
                    if (T !== null) Dt = T;
                    else {
                      var O = y.return;
                      O !== null ? (Dt = O, _o(O)) : Dt = null;
                    }
                    break e;
                  }
              }
              ie = 0, dn = null, nr(t, e, u, 5);
              break;
            case 6:
              ie = 0, dn = null, nr(t, e, u, 6);
              break;
            case 8:
              dc(), ve = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        iv();
        break;
      } catch (K) {
        Uh(t, K);
      }
    while (true);
    return pa = hl = null, X.H = l, X.A = i, me = n, Dt !== null ? 0 : (re = null, jt = 0, Ii(), ve);
  }
  function iv() {
    for (; Dt !== null && !bt(); ) Lh(Dt);
  }
  function Lh(t) {
    var e = oh(t.alternate, t, Sa);
    t.memoizedProps = t.pendingProps, e === null ? _o(t) : Dt = e;
  }
  function $h(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = eh(n, e, e.pendingProps, e.type, void 0, jt);
        break;
      case 11:
        e = eh(n, e, e.pendingProps, e.type.render, e.ref, jt);
        break;
      case 5:
        vu(e);
      default:
        kh(n, e), e = Dt = Oh(e, Sa), e = oh(n, e, Sa);
    }
    t.memoizedProps = t.pendingProps, e === null ? _o(t) : Dt = e;
  }
  function nr(t, e, n, l) {
    pa = hl = null, vu(e), Gl = null, qr = 0;
    var i = e.return;
    try {
      if (Py(t, i, e, n, jt)) {
        ve = 1, So(t, Cn(n, t.current)), Dt = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw Dt = i, u;
      ve = 1, So(t, Cn(n, t.current)), Dt = null;
      return;
    }
    e.flags & 32768 ? ($t || l === 1 ? t = true : Il || jt & 536870912 ? t = false : (ba = t = true, (l === 2 || l === 3 || l === 6) && (l = wn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), qh(e, t)) : _o(e);
  }
  function _o(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        qh(e, ba);
        return;
      }
      t = e.return;
      var n = Iy(e.alternate, e, Sa);
      if (n !== null) {
        Dt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Dt = e;
        return;
      }
      Dt = e = t;
    } while (e !== null);
    ve === 0 && (ve = 5);
  }
  function qh(t, e) {
    do {
      var n = tv(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Dt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Dt = t;
        return;
      }
      Dt = t = n;
    } while (t !== null);
    ve = 6, Dt = null;
  }
  function Yh(t, e, n, l, i, u, d, y, T, O) {
    var K = X.T, I = rt.p;
    try {
      rt.p = 2, X.T = null, ov(t, e, n, l, I, i, u, d, y, T, O);
    } finally {
      X.T = K, rt.p = I;
    }
  }
  function ov(t, e, n, l, i, u, d, y) {
    do
      ar();
    while (bl !== null);
    if (me & 6) throw Error(s(327));
    var T = t.finishedWork;
    if (l = t.finishedLanes, T === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, T === t.current) throw Error(s(177));
    t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
    var O = T.lanes | T.childLanes;
    if (O |= au, L0(t, l, O, u, d, y), t === re && (Dt = re = null, jt = 0), !(T.subtreeFlags & 10256) && !(T.flags & 10256) || Oo || (Oo = true, sc = O, uc = n, fv(Ot, function() {
      return ar(), null;
    })), n = (T.flags & 15990) !== 0, T.subtreeFlags & 15990 || n ? (n = X.T, X.T = null, u = rt.p, rt.p = 2, d = me, me |= 4, Fy(t, T), Th(T, t), _y(Rc, t.containerInfo), Go = !!Ac, Rc = Ac = null, t.current = T, vh(t, T.alternate, T), $n(), me = d, rt.p = u, X.T = n) : t.current = T, Oo ? (Oo = false, bl = t, ri = l) : Gh(t, O), O = t.pendingLanes, O === 0 && (Ga = null), ft(T.stateNode), Wn(t), e !== null) for (i = t.onRecoverableError, T = 0; T < e.length; T++) O = e[T], i(O.value, { componentStack: O.stack });
    return ri & 3 && ar(), O = t.pendingLanes, l & 4194218 && O & 42 ? t === cc ? ii++ : (ii = 0, cc = t) : ii = 0, oi(0), null;
  }
  function Gh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Gr(e)));
  }
  function ar() {
    if (bl !== null) {
      var t = bl, e = sc;
      sc = 0;
      var n = Jf(ri), l = X.T, i = rt.p;
      try {
        if (rt.p = 32 > n ? 32 : n, X.T = null, bl === null) var u = false;
        else {
          n = uc, uc = null;
          var d = bl, y = ri;
          if (bl = null, ri = 0, me & 6) throw Error(s(331));
          var T = me;
          if (me |= 4, wh(d.current), Ch(d, d.current, y, n), me = T, oi(0, false), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(te, d);
          } catch {
          }
          u = true;
        }
        return u;
      } finally {
        rt.p = i, X.T = l, Gh(t, e);
      }
    }
    return false;
  }
  function Vh(t, e, n) {
    e = Cn(n, e), e = ku(t.stateNode, e, 2), t = Ha(t, e, 2), t !== null && (Cr(t, 2), Wn(t));
  }
  function ee(t, e, n) {
    if (t.tag === 3) Vh(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Vh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ga === null || !Ga.has(l))) {
          t = Cn(n, t), n = Kp(2), l = Ha(e, n, 2), l !== null && (Pp(n, l, e, t), Cr(l, 2), Wn(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function mc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new nv();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (lc = true, i.add(n), t = sv.bind(null, t, e, n), e.then(t, t));
  }
  function sv(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, re === t && (jt & n) === n && (ve === 4 || ve === 3 && (jt & 62914560) === jt && 300 > He() - oc ? !(me & 2) && er(t, 0) : rc |= n, tr === jt && (tr = 0)), Wn(t);
  }
  function Xh(t, e) {
    e === 0 && (e = Zf()), t = Oa(t, e), t !== null && (Cr(t, e), Wn(t));
  }
  function uv(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Xh(t, n);
  }
  function cv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), Xh(t, n);
  }
  function fv(t, e) {
    return Ue(t, e);
  }
  var ko = null, lr = null, gc = false, Do = false, yc = false, Sl = 0;
  function Wn(t) {
    t !== lr && t.next === null && (lr === null ? ko = lr = t : lr = lr.next = t), Do = true, gc || (gc = true, pv(dv));
  }
  function oi(t, e) {
    if (!yc && Do) {
      yc = true;
      do
        for (var n = false, l = ko; l !== null; ) {
          if (t !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var d = l.suspendedLanes, y = l.pingedLanes;
              u = (1 << 31 - Tt(42 | t) + 1) - 1, u &= i & ~(d & ~y), u = u & 201326677 ? u & 201326677 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, Ph(l, u));
          } else u = jt, u = Sn(l, l === re ? u : 0), !(u & 3) || Qn(l, u) || (n = true, Ph(l, u));
          l = l.next;
        }
      while (n);
      yc = false;
    }
  }
  function dv() {
    Do = gc = false;
    var t = 0;
    Sl !== 0 && (xv() && (t = Sl), Sl = 0);
    for (var e = He(), n = null, l = ko; l !== null; ) {
      var i = l.next, u = Qh(l, e);
      u === 0 ? (l.next = null, n === null ? ko = i : n.next = i, i === null && (lr = n)) : (n = l, (t !== 0 || u & 3) && (Do = true)), l = i;
    }
    oi(t);
  }
  function Qh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - Tt(u), y = 1 << d, T = i[d];
      T === -1 ? (!(y & n) || y & l) && (i[d] = qn(y, e)) : T <= e && (t.expiredLanes |= y), u &= ~y;
    }
    if (e = re, n = jt, n = Sn(t, t === e ? n : 0), l = t.callbackNode, n === 0 || t === e && ie === 2 || t.cancelPendingCommit !== null) return l !== null && l !== null && tn(l), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Qn(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && tn(l), Jf(n)) {
        case 2:
        case 8:
          n = At;
          break;
        case 32:
          n = Ot;
          break;
        case 268435456:
          n = Rt;
          break;
        default:
          n = Ot;
      }
      return l = Kh.bind(null, t), n = Ue(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && tn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Kh(t, e) {
    var n = t.callbackNode;
    if (ar() && t.callbackNode !== n) return null;
    var l = jt;
    return l = Sn(t, t === re ? l : 0), l === 0 ? null : (Bh(t, l, e), Qh(t, He()), t.callbackNode != null && t.callbackNode === n ? Kh.bind(null, t) : null);
  }
  function Ph(t, e) {
    if (ar()) return null;
    Bh(t, e, true);
  }
  function pv(t) {
    Ev(function() {
      me & 6 ? Ue(ot, t) : t();
    });
  }
  function vc() {
    return Sl === 0 && (Sl = Pf()), Sl;
  }
  function Zh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Qi("" + t);
  }
  function Fh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function hv(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var u = Zh((i[nn] || null).action), d = l.submitter;
      d && (e = (e = d[nn] || null) ? Zh(e.formAction) : d.getAttribute("formAction"), e !== null && (u = e, d = null));
      var y = new Fi("action", "action", null, l, i);
      t.push({ event: y, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (Sl !== 0) {
            var T = d ? Fh(i, d) : new FormData(i);
            wu(n, { pending: true, data: T, method: i.method, action: u }, null, T);
          }
        } else typeof u == "function" && (y.preventDefault(), T = d ? Fh(i, d) : new FormData(i), wu(n, { pending: true, data: T, method: i.method, action: u }, u, T));
      }, currentTarget: i }] });
    }
  }
  for (var bc = 0; bc < Yd.length; bc++) {
    var Sc = Yd[bc], mv = Sc.toLowerCase(), gv = Sc[0].toUpperCase() + Sc.slice(1);
    Yn(mv, "on" + gv);
  }
  Yn(Hd, "onAnimationEnd"), Yn(jd, "onAnimationIteration"), Yn(Ld, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(Dy, "onTransitionRun"), Yn(By, "onTransitionStart"), Yn(Ny, "onTransitionCancel"), Yn($d, "onTransitionEnd"), _l("onMouseEnter", ["mouseout", "mouseover"]), _l("onMouseLeave", ["mouseout", "mouseover"]), _l("onPointerEnter", ["pointerout", "pointerover"]), _l("onPointerLeave", ["pointerout", "pointerover"]), el("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), el("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), el("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), el("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), el("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), el("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));
  function Wh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e) for (var d = l.length - 1; 0 <= d; d--) {
          var y = l[d], T = y.instance, O = y.currentTarget;
          if (y = y.listener, T !== u && i.isPropagationStopped()) break t;
          u = y, i.currentTarget = O;
          try {
            u(i);
          } catch (K) {
            bo(K);
          }
          i.currentTarget = null, u = T;
        }
        else for (d = 0; d < l.length; d++) {
          if (y = l[d], T = y.instance, O = y.currentTarget, y = y.listener, T !== u && i.isPropagationStopped()) break t;
          u = y, i.currentTarget = O;
          try {
            u(i);
          } catch (K) {
            bo(K);
          }
          i.currentTarget = null, u = T;
        }
      }
    }
  }
  function Nt(t, e) {
    var n = e[Us];
    n === void 0 && (n = e[Us] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Jh(e, t, 2, false), n.add(l));
  }
  function xc(t, e, n) {
    var l = 0;
    e && (l |= 4), Jh(n, t, l, e);
  }
  var Bo = "_reactListening" + Math.random().toString(36).slice(2);
  function Tc(t) {
    if (!t[Bo]) {
      t[Bo] = true, ed.forEach(function(n) {
        n !== "selectionchange" && (yv.has(n) || xc(n, false, t), xc(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Bo] || (e[Bo] = true, xc("selectionchange", false, e));
    }
  }
  function Jh(t, e, n, l) {
    switch (xm(e)) {
      case 2:
        var i = Gv;
        break;
      case 8:
        i = Vv;
        break;
      default:
        i = Nc;
    }
    n = i.bind(null, e, n, t), i = void 0, !Vs || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), l ? i !== void 0 ? t.addEventListener(e, n, { capture: true, passive: i }) : t.addEventListener(e, n, true) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, false);
  }
  function Ec(t, e, n, l, i) {
    var u = l;
    if (!(e & 1) && !(e & 2) && l !== null) t: for (; ; ) {
      if (l === null) return;
      var d = l.tag;
      if (d === 3 || d === 4) {
        var y = l.stateNode.containerInfo;
        if (y === i || y.nodeType === 8 && y.parentNode === i) break;
        if (d === 4) for (d = l.return; d !== null; ) {
          var T = d.tag;
          if ((T === 3 || T === 4) && (T = d.stateNode.containerInfo, T === i || T.nodeType === 8 && T.parentNode === i)) return;
          d = d.return;
        }
        for (; y !== null; ) {
          if (d = tl(y), d === null) return;
          if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
            l = u = d;
            continue t;
          }
          y = y.parentNode;
        }
      }
      l = l.return;
    }
    pd(function() {
      var O = u, K = Ys(n), I = [];
      t: {
        var L = qd.get(t);
        if (L !== void 0) {
          var Q = Fi, pt = t;
          switch (t) {
            case "keypress":
              if (Pi(n) === 0) break t;
            case "keydown":
            case "keyup":
              Q = cy;
              break;
            case "focusin":
              pt = "focus", Q = Ps;
              break;
            case "focusout":
              pt = "blur", Q = Ps;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Ps;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = gd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = py;
              break;
            case Hd:
            case jd:
            case Ld:
              Q = ey;
              break;
            case $d:
              Q = my;
              break;
            case "scroll":
            case "scrollend":
              Q = F0;
              break;
            case "wheel":
              Q = yy;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = ay;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = vd;
              break;
            case "toggle":
            case "beforetoggle":
              Q = by;
          }
          var Ct = (e & 4) !== 0, be = !Ct && (t === "scroll" || t === "scrollend"), _ = Ct ? L !== null ? L + "Capture" : null : L;
          Ct = [];
          for (var M = O, N; M !== null; ) {
            var Z = M;
            if (N = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || N === null || _ === null || (Z = wr(M, _), Z != null && Ct.push(ui(M, Z, N))), be) break;
            M = M.return;
          }
          0 < Ct.length && (L = new Q(L, pt, null, n, K), I.push({ event: L, listeners: Ct }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (L = t === "mouseover" || t === "pointerover", Q = t === "mouseout" || t === "pointerout", L && n !== qs && (pt = n.relatedTarget || n.fromElement) && (tl(pt) || pt[Ml])) break t;
          if ((Q || L) && (L = K.window === K ? K : (L = K.ownerDocument) ? L.defaultView || L.parentWindow : window, Q ? (pt = n.relatedTarget || n.toElement, Q = O, pt = pt ? tl(pt) : null, pt !== null && (be = W(pt), Ct = pt.tag, pt !== be || Ct !== 5 && Ct !== 27 && Ct !== 6) && (pt = null)) : (Q = null, pt = O), Q !== pt)) {
            if (Ct = gd, Z = "onMouseLeave", _ = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (Ct = vd, Z = "onPointerLeave", _ = "onPointerEnter", M = "pointer"), be = Q == null ? L : Rr(Q), N = pt == null ? L : Rr(pt), L = new Ct(Z, M + "leave", Q, n, K), L.target = be, L.relatedTarget = N, Z = null, tl(K) === O && (Ct = new Ct(_, M + "enter", pt, n, K), Ct.target = N, Ct.relatedTarget = be, Z = Ct), be = Z, Q && pt) e: {
              for (Ct = Q, _ = pt, M = 0, N = Ct; N; N = rr(N)) M++;
              for (N = 0, Z = _; Z; Z = rr(Z)) N++;
              for (; 0 < M - N; ) Ct = rr(Ct), M--;
              for (; 0 < N - M; ) _ = rr(_), N--;
              for (; M--; ) {
                if (Ct === _ || _ !== null && Ct === _.alternate) break e;
                Ct = rr(Ct), _ = rr(_);
              }
              Ct = null;
            }
            else Ct = null;
            Q !== null && Ih(I, L, Q, Ct, false), pt !== null && be !== null && Ih(I, be, pt, Ct, true);
          }
        }
        t: {
          if (L = O ? Rr(O) : window, Q = L.nodeName && L.nodeName.toLowerCase(), Q === "select" || Q === "input" && L.type === "file") var ct = Rd;
          else if (Cd(L)) if (wd) ct = Oy;
          else {
            ct = wy;
            var kt = Ry;
          }
          else Q = L.nodeName, !Q || Q.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? O && $s(O.elementType) && (ct = Rd) : ct = My;
          if (ct && (ct = ct(t, O))) {
            Ad(I, ct, n, K);
            break t;
          }
          kt && kt(t, L, O), t === "focusout" && O && L.type === "number" && O.memoizedProps.value != null && Ls(L, "number", L.value);
        }
        switch (kt = O ? Rr(O) : window, t) {
          case "focusin":
            (Cd(kt) || kt.contentEditable === "true") && (Hl = kt, tu = O, Nr = null);
            break;
          case "focusout":
            Nr = tu = Hl = null;
            break;
          case "mousedown":
            eu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            eu = false, Nd(I, n, K);
            break;
          case "selectionchange":
            if (ky) break;
          case "keydown":
          case "keyup":
            Nd(I, n, K);
        }
        var mt;
        if (Fs) t: {
          switch (t) {
            case "compositionstart":
              var vt = "onCompositionStart";
              break t;
            case "compositionend":
              vt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              vt = "onCompositionUpdate";
              break t;
          }
          vt = void 0;
        }
        else Ul ? Td(t, n) && (vt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (vt = "onCompositionStart");
        vt && (bd && n.locale !== "ko" && (Ul || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Ul && (mt = hd()) : (Ma = K, Xs = "value" in Ma ? Ma.value : Ma.textContent, Ul = true)), kt = No(O, vt), 0 < kt.length && (vt = new yd(vt, t, null, n, K), I.push({ event: vt, listeners: kt }), mt ? vt.data = mt : (mt = Ed(n), mt !== null && (vt.data = mt)))), (mt = xy ? Ty(t, n) : Ey(t, n)) && (vt = No(O, "onBeforeInput"), 0 < vt.length && (kt = new yd("onBeforeInput", "beforeinput", null, n, K), I.push({ event: kt, listeners: vt }), kt.data = mt)), hv(I, t, O, n, K);
      }
      Wh(I, e);
    });
  }
  function ui(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function No(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, u = i.stateNode;
      i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = wr(t, n), i != null && l.unshift(ui(t, i, u)), i = wr(t, e), i != null && l.push(ui(t, i, u))), t = t.return;
    }
    return l;
  }
  function rr(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ih(t, e, n, l, i) {
    for (var u = e._reactName, d = []; n !== null && n !== l; ) {
      var y = n, T = y.alternate, O = y.stateNode;
      if (y = y.tag, T !== null && T === l) break;
      y !== 5 && y !== 26 && y !== 27 || O === null || (T = O, i ? (O = wr(n, u), O != null && d.unshift(ui(n, O, T))) : i || (O = wr(n, u), O != null && d.push(ui(n, O, T)))), n = n.return;
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var vv = /\r\n?/g, bv = /\u0000|\uFFFD/g;
  function tm(t) {
    return (typeof t == "string" ? t : "" + t).replace(vv, `
`).replace(bv, "");
  }
  function em(t, e) {
    return e = tm(e), tm(t) === e;
  }
  function Uo() {
  }
  function Ft(t, e, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Dl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Dl(t, "" + l);
        break;
      case "className":
        Gi(t, "class", l);
        break;
      case "tabIndex":
        Gi(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gi(t, n, l);
        break;
      case "style":
        fd(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Gi(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Qi("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (e !== "input" && Ft(t, e, "name", i.name, i, null), Ft(t, e, "formEncType", i.formEncType, i, null), Ft(t, e, "formMethod", i.formMethod, i, null), Ft(t, e, "formTarget", i.formTarget, i, null)) : (Ft(t, e, "encType", i.encType, i, null), Ft(t, e, "method", i.method, i, null), Ft(t, e, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Qi("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = Uo);
        break;
      case "onScroll":
        l != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Qi("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === true ? t.setAttribute(n, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        Nt("beforetoggle", t), Nt("toggle", t), Yi(t, "popover", l);
        break;
      case "xlinkActuate":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        oa(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        oa(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        oa(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        oa(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Yi(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = P0.get(n) || n, Yi(t, n, l));
    }
  }
  function Cc(t, e, n, l, i, u) {
    switch (n) {
      case "style":
        fd(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Dl(t, l) : (typeof l == "number" || typeof l == "bigint") && Dl(t, "" + l);
        break;
      case "onScroll":
        l != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Nt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Uo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!nd.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), u = t[nn] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof l == "function")) {
            typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, i);
            break t;
          }
          n in t ? t[n] = l : l === true ? t.setAttribute(n, "") : Yi(t, n, l);
        }
    }
  }
  function $e(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Nt("error", t), Nt("load", t);
        var l = false, i = false, u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var d = n[u];
          if (d != null) switch (u) {
            case "src":
              l = true;
              break;
            case "srcSet":
              i = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, e));
            default:
              Ft(t, e, u, d, n, null);
          }
        }
        i && Ft(t, e, "srcSet", n.srcSet, n, null), l && Ft(t, e, "src", n.src, n, null);
        return;
      case "input":
        Nt("invalid", t);
        var y = u = d = i = null, T = null, O = null;
        for (l in n) if (n.hasOwnProperty(l)) {
          var K = n[l];
          if (K != null) switch (l) {
            case "name":
              i = K;
              break;
            case "type":
              d = K;
              break;
            case "checked":
              T = K;
              break;
            case "defaultChecked":
              O = K;
              break;
            case "value":
              u = K;
              break;
            case "defaultValue":
              y = K;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (K != null) throw Error(s(137, e));
              break;
            default:
              Ft(t, e, l, K, n, null);
          }
        }
        od(t, u, y, T, O, d, i, false), Vi(t);
        return;
      case "select":
        Nt("invalid", t), l = d = u = null;
        for (i in n) if (n.hasOwnProperty(i) && (y = n[i], y != null)) switch (i) {
          case "value":
            u = y;
            break;
          case "defaultValue":
            d = y;
            break;
          case "multiple":
            l = y;
          default:
            Ft(t, e, i, y, n, null);
        }
        e = u, n = d, t.multiple = !!l, e != null ? kl(t, !!l, e, false) : n != null && kl(t, !!l, n, true);
        return;
      case "textarea":
        Nt("invalid", t), u = i = l = null;
        for (d in n) if (n.hasOwnProperty(d) && (y = n[d], y != null)) switch (d) {
          case "value":
            l = y;
            break;
          case "defaultValue":
            i = y;
            break;
          case "children":
            u = y;
            break;
          case "dangerouslySetInnerHTML":
            if (y != null) throw Error(s(91));
            break;
          default:
            Ft(t, e, d, y, n, null);
        }
        ud(t, l, i, u), Vi(t);
        return;
      case "option":
        for (T in n) if (n.hasOwnProperty(T) && (l = n[T], l != null)) switch (T) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            Ft(t, e, T, l, n, null);
        }
        return;
      case "dialog":
        Nt("cancel", t), Nt("close", t);
        break;
      case "iframe":
      case "object":
        Nt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < si.length; l++) Nt(si[l], t);
        break;
      case "image":
        Nt("error", t), Nt("load", t);
        break;
      case "details":
        Nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Nt("error", t), Nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n) if (n.hasOwnProperty(O) && (l = n[O], l != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, e));
          default:
            Ft(t, e, O, l, n, null);
        }
        return;
      default:
        if ($s(e)) {
          for (K in n) n.hasOwnProperty(K) && (l = n[K], l !== void 0 && Cc(t, e, K, l, n, void 0));
          return;
        }
    }
    for (y in n) n.hasOwnProperty(y) && (l = n[y], l != null && Ft(t, e, y, l, n, null));
  }
  function Sv(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null, u = null, d = null, y = null, T = null, O = null, K = null;
        for (Q in n) {
          var I = n[Q];
          if (n.hasOwnProperty(Q) && I != null) switch (Q) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              T = I;
            default:
              l.hasOwnProperty(Q) || Ft(t, e, Q, null, l, I);
          }
        }
        for (var L in l) {
          var Q = l[L];
          if (I = n[L], l.hasOwnProperty(L) && (Q != null || I != null)) switch (L) {
            case "type":
              u = Q;
              break;
            case "name":
              i = Q;
              break;
            case "checked":
              O = Q;
              break;
            case "defaultChecked":
              K = Q;
              break;
            case "value":
              d = Q;
              break;
            case "defaultValue":
              y = Q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Q != null) throw Error(s(137, e));
              break;
            default:
              Q !== I && Ft(t, e, L, Q, l, I);
          }
        }
        js(t, d, y, T, O, K, u, i);
        return;
      case "select":
        Q = d = y = L = null;
        for (u in n) if (T = n[u], n.hasOwnProperty(u) && T != null) switch (u) {
          case "value":
            break;
          case "multiple":
            Q = T;
          default:
            l.hasOwnProperty(u) || Ft(t, e, u, null, l, T);
        }
        for (i in l) if (u = l[i], T = n[i], l.hasOwnProperty(i) && (u != null || T != null)) switch (i) {
          case "value":
            L = u;
            break;
          case "defaultValue":
            y = u;
            break;
          case "multiple":
            d = u;
          default:
            u !== T && Ft(t, e, i, u, l, T);
        }
        e = y, n = d, l = Q, L != null ? kl(t, !!n, L, false) : !!l != !!n && (e != null ? kl(t, !!n, e, true) : kl(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        Q = L = null;
        for (y in n) if (i = n[y], n.hasOwnProperty(y) && i != null && !l.hasOwnProperty(y)) switch (y) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ft(t, e, y, null, l, i);
        }
        for (d in l) if (i = l[d], u = n[d], l.hasOwnProperty(d) && (i != null || u != null)) switch (d) {
          case "value":
            L = i;
            break;
          case "defaultValue":
            Q = i;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(s(91));
            break;
          default:
            i !== u && Ft(t, e, d, i, l, u);
        }
        sd(t, L, Q);
        return;
      case "option":
        for (var pt in n) if (L = n[pt], n.hasOwnProperty(pt) && L != null && !l.hasOwnProperty(pt)) switch (pt) {
          case "selected":
            t.selected = false;
            break;
          default:
            Ft(t, e, pt, null, l, L);
        }
        for (T in l) if (L = l[T], Q = n[T], l.hasOwnProperty(T) && L !== Q && (L != null || Q != null)) switch (T) {
          case "selected":
            t.selected = L && typeof L != "function" && typeof L != "symbol";
            break;
          default:
            Ft(t, e, T, L, l, Q);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ct in n) L = n[Ct], n.hasOwnProperty(Ct) && L != null && !l.hasOwnProperty(Ct) && Ft(t, e, Ct, null, l, L);
        for (O in l) if (L = l[O], Q = n[O], l.hasOwnProperty(O) && L !== Q && (L != null || Q != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (L != null) throw Error(s(137, e));
            break;
          default:
            Ft(t, e, O, L, l, Q);
        }
        return;
      default:
        if ($s(e)) {
          for (var be in n) L = n[be], n.hasOwnProperty(be) && L !== void 0 && !l.hasOwnProperty(be) && Cc(t, e, be, void 0, l, L);
          for (K in l) L = l[K], Q = n[K], !l.hasOwnProperty(K) || L === Q || L === void 0 && Q === void 0 || Cc(t, e, K, L, l, Q);
          return;
        }
    }
    for (var _ in n) L = n[_], n.hasOwnProperty(_) && L != null && !l.hasOwnProperty(_) && Ft(t, e, _, null, l, L);
    for (I in l) L = l[I], Q = n[I], !l.hasOwnProperty(I) || L === Q || L == null && Q == null || Ft(t, e, I, L, l, Q);
  }
  var Ac = null, Rc = null;
  function Ho(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function am(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function wc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Mc = null;
  function xv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Mc ? false : (Mc = t, true) : (Mc = null, false);
  }
  var lm = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, rm = typeof Promise == "function" ? Promise : void 0, Ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof rm < "u" ? function(t) {
    return rm.resolve(null).then(t).catch(Cv);
  } : lm;
  function Cv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Oc(t, e) {
    var n = e, l = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (l === 0) {
          t.removeChild(i), yi(e);
          return;
        }
        l--;
      } else n !== "$" && n !== "$?" && n !== "$!" || l++;
      n = i;
    } while (n);
    yi(e);
  }
  function zc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zc(n), Hs(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Av(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Ar]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (u !== i.rel || t.getAttribute("href") !== (i.href == null ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (u = t.getAttribute("src"), (u !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (t = Xn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Rv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Xn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Xn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function im(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function om(t, e, n) {
    switch (e = Ho(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  var kn = /* @__PURE__ */ new Map(), sm = /* @__PURE__ */ new Set();
  function jo(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var Ta = rt.d;
  rt.d = { f: wv, r: Mv, D: Ov, C: zv, L: _v, m: kv, X: Bv, S: Dv, M: Nv };
  function wv() {
    var t = Ta.f(), e = zo();
    return t || e;
  }
  function Mv(t) {
    var e = Ol(t);
    e !== null && e.tag === 5 && e.type === "form" ? Np(e) : Ta.r(t);
  }
  var ir = typeof document > "u" ? null : document;
  function um(t, e, n) {
    var l = ir;
    if (l && typeof e == "string" && e) {
      var i = Tn(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), sm.has(i) || (sm.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), $e(e, "link", t), ke(e), l.head.appendChild(e)));
    }
  }
  function Ov(t) {
    Ta.D(t), um("dns-prefetch", t, null);
  }
  function zv(t, e) {
    Ta.C(t, e), um("preconnect", t, e);
  }
  function _v(t, e, n) {
    Ta.L(t, e, n);
    var l = ir;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + Tn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Tn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Tn(n.imageSizes) + '"]')) : i += '[href="' + Tn(t) + '"]';
      var u = i;
      switch (e) {
        case "style":
          u = or(t);
          break;
        case "script":
          u = sr(t);
      }
      kn.has(u) || (t = v({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), kn.set(u, t), l.querySelector(i) !== null || e === "style" && l.querySelector(ci(u)) || e === "script" && l.querySelector(fi(u)) || (e = l.createElement("link"), $e(e, "link", t), ke(e), l.head.appendChild(e)));
    }
  }
  function kv(t, e) {
    Ta.m(t, e);
    var n = ir;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + Tn(l) + '"][href="' + Tn(t) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = sr(t);
      }
      if (!kn.has(u) && (t = v({ rel: "modulepreload", href: t }, e), kn.set(u, t), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fi(u))) return;
        }
        l = n.createElement("link"), $e(l, "link", t), ke(l), n.head.appendChild(l);
      }
    }
  }
  function Dv(t, e, n) {
    Ta.S(t, e, n);
    var l = ir;
    if (l && t) {
      var i = zl(l).hoistableStyles, u = or(t);
      e = e || "default";
      var d = i.get(u);
      if (!d) {
        var y = { loading: 0, preload: null };
        if (d = l.querySelector(ci(u))) y.loading = 5;
        else {
          t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = kn.get(u)) && _c(t, n);
          var T = d = l.createElement("link");
          ke(T), $e(T, "link", t), T._p = new Promise(function(O, K) {
            T.onload = O, T.onerror = K;
          }), T.addEventListener("load", function() {
            y.loading |= 1;
          }), T.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Lo(d, e, l);
        }
        d = { type: "stylesheet", instance: d, count: 1, state: y }, i.set(u, d);
      }
    }
  }
  function Bv(t, e) {
    Ta.X(t, e);
    var n = ir;
    if (n && t) {
      var l = zl(n).hoistableScripts, i = sr(t), u = l.get(i);
      u || (u = n.querySelector(fi(i)), u || (t = v({ src: t, async: true }, e), (e = kn.get(i)) && kc(t, e), u = n.createElement("script"), ke(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function Nv(t, e) {
    Ta.M(t, e);
    var n = ir;
    if (n && t) {
      var l = zl(n).hoistableScripts, i = sr(t), u = l.get(i);
      u || (u = n.querySelector(fi(i)), u || (t = v({ src: t, async: true, type: "module" }, e), (e = kn.get(i)) && kc(t, e), u = n.createElement("script"), ke(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function cm(t, e, n, l) {
    var i = (i = Lt.current) ? jo(i) : null;
    if (!i) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = or(n.href), n = zl(i).hoistableStyles, l = n.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = or(n.href);
          var u = zl(i).hoistableStyles, d = u.get(t);
          if (d || (i = i.ownerDocument || i, d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(t, d), (u = i.querySelector(ci(t))) && !u._p && (d.instance = u, d.state.loading = 5), kn.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, kn.set(t, n), u || Uv(i, t, n, d.state))), e && l === null) throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = sr(n), n = zl(i).hoistableScripts, l = n.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function or(t) {
    return 'href="' + Tn(t) + '"';
  }
  function ci(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function fm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Uv(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), $e(e, "link", n), ke(e), t.head.appendChild(e));
  }
  function sr(t) {
    return '[src="' + Tn(t) + '"]';
  }
  function fi(t) {
    return "script[async]" + t;
  }
  function dm(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + Tn(n.href) + '"]');
        if (l) return e.instance = l, ke(l), l;
        var i = v({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return l = (t.ownerDocument || t).createElement("style"), ke(l), $e(l, "style", i), Lo(l, n.precedence, t), e.instance = l;
      case "stylesheet":
        i = or(n.href);
        var u = t.querySelector(ci(i));
        if (u) return e.state.loading |= 4, e.instance = u, ke(u), u;
        l = fm(n), (i = kn.get(i)) && _c(l, i), u = (t.ownerDocument || t).createElement("link"), ke(u);
        var d = u;
        return d._p = new Promise(function(y, T) {
          d.onload = y, d.onerror = T;
        }), $e(u, "link", l), e.state.loading |= 4, Lo(u, n.precedence, t), e.instance = u;
      case "script":
        return u = sr(n.src), (i = t.querySelector(fi(u))) ? (e.instance = i, ke(i), i) : (l = n, (i = kn.get(u)) && (l = v({}, n), kc(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), ke(i), $e(i, "link", l), t.head.appendChild(i), e.instance = i);
      case "void":
        return null;
      default:
        throw Error(s(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (l = e.instance, e.state.loading |= 4, Lo(l, n.precedence, t));
    return e.instance;
  }
  function Lo(t, e, n) {
    for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = l.length ? l[l.length - 1] : null, u = i, d = 0; d < l.length; d++) {
      var y = l[d];
      if (y.dataset.precedence === e) u = y;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function _c(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function kc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var $o = null;
  function pm(t, e, n) {
    if ($o === null) {
      var l = /* @__PURE__ */ new Map(), i = $o = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else i = $o, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Ar] || u[Xe] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(e) || "";
        d = t + d;
        var y = l.get(d);
        y ? y.push(u) : l.set(d, [u]);
      }
    }
    return l;
  }
  function hm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function Hv(t, e, n) {
    if (n === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function mm(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var di = null;
  function jv() {
  }
  function Lv(t, e, n) {
    if (di === null) throw Error(s(475));
    var l = di;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && !(e.state.loading & 4)) {
      if (e.instance === null) {
        var i = or(n.href), u = t.querySelector(ci(i));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = qo.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, ke(u);
          return;
        }
        u = t.ownerDocument || t, n = fm(n), (i = kn.get(i)) && _c(n, i), u = u.createElement("link"), ke(u);
        var d = u;
        d._p = new Promise(function(y, T) {
          d.onload = y, d.onerror = T;
        }), $e(u, "link", n), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (l.count++, e = qo.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function $v() {
    if (di === null) throw Error(s(475));
    var t = di;
    return t.stylesheets && t.count === 0 && Dc(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Dc(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function qo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Dc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Yo = null;
  function Dc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Yo = /* @__PURE__ */ new Map(), e.forEach(qv, t), Yo = null, qo.call(t));
  }
  function qv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Yo.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Yo.set(t, n);
        for (var i = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < i.length; u++) {
          var d = i[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), l = d);
        }
        l && n.set(null, l);
      }
      i = e.instance, d = i.getAttribute("data-precedence"), u = n.get(d) || l, u === l && n.set(null, i), n.set(d, i), this.count++, l = qo.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var pi = { $$typeof: z, Provider: null, Consumer: null, _currentValue: St, _currentValue2: St, _threadCount: 0 };
  function Yv(t, e, n, l, i, u, d, y) {
    this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ns(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ns(0), this.hiddenUpdates = Ns(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gm(t, e, n, l, i, u, d, y, T, O, K, I) {
    return t = new Yv(t, e, n, d, y, T, O, I), e = 1, u === true && (e |= 24), u = zn(3, null, null, e), t.current = u, u.stateNode = t, e = fu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = { element: l, isDehydrated: n, cache: e }, Xu(u), t;
  }
  function ym(t) {
    return t ? (t = $l, t) : $l;
  }
  function vm(t, e, n, l, i, u) {
    i = ym(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ua(e), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = Ha(t, l, e), n !== null && (Fe(n, t, e), Fr(n, t, e));
  }
  function bm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Bc(t, e) {
    bm(t, e), (t = t.alternate) && bm(t, e);
  }
  function Sm(t) {
    if (t.tag === 13) {
      var e = Oa(t, 67108864);
      e !== null && Fe(e, t, 67108864), Bc(t, 67108864);
    }
  }
  var Go = true;
  function Gv(t, e, n, l) {
    var i = X.T;
    X.T = null;
    var u = rt.p;
    try {
      rt.p = 2, Nc(t, e, n, l);
    } finally {
      rt.p = u, X.T = i;
    }
  }
  function Vv(t, e, n, l) {
    var i = X.T;
    X.T = null;
    var u = rt.p;
    try {
      rt.p = 8, Nc(t, e, n, l);
    } finally {
      rt.p = u, X.T = i;
    }
  }
  function Nc(t, e, n, l) {
    if (Go) {
      var i = Uc(l);
      if (i === null) Ec(t, e, l, Vo, n), Tm(t, l);
      else if (Qv(i, t, e, n, l)) l.stopPropagation();
      else if (Tm(t, l), e & 4 && -1 < Xv.indexOf(t)) {
        for (; i !== null; ) {
          var u = Ol(i);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var d = Pt(u.pendingLanes);
                if (d !== 0) {
                  var y = u;
                  for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
                    var T = 1 << 31 - Tt(d);
                    y.entanglements[1] |= T, d &= ~T;
                  }
                  Wn(u), !(me & 6) && (wo = He() + 500, oi(0));
                }
              }
              break;
            case 13:
              y = Oa(u, 2), y !== null && Fe(y, u, 2), zo(), Bc(u, 2);
          }
          if (u = Uc(l), u === null && Ec(t, e, l, Vo, n), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else Ec(t, e, l, null, n);
    }
  }
  function Uc(t) {
    return t = Ys(t), Hc(t);
  }
  var Vo = null;
  function Hc(t) {
    if (Vo = null, t = tl(t), t !== null) {
      var e = W(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = et(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Vo = t, null;
  }
  function xm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ut()) {
          case ot:
            return 2;
          case At:
            return 8;
          case Ot:
          case zt:
            return 32;
          case Rt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jc = false, Va = null, Xa = null, Qa = null, hi = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map(), Ka = [], Xv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Tm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Va = null;
        break;
      case "dragenter":
      case "dragleave":
        Xa = null;
        break;
      case "mouseover":
      case "mouseout":
        Qa = null;
        break;
      case "pointerover":
      case "pointerout":
        hi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mi.delete(e.pointerId);
    }
  }
  function gi(t, e, n, l, i, u) {
    return t === null || t.nativeEvent !== u ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: u, targetContainers: [i] }, e !== null && (e = Ol(e), e !== null && Sm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Qv(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return Va = gi(Va, t, e, n, l, i), true;
      case "dragenter":
        return Xa = gi(Xa, t, e, n, l, i), true;
      case "mouseover":
        return Qa = gi(Qa, t, e, n, l, i), true;
      case "pointerover":
        var u = i.pointerId;
        return hi.set(u, gi(hi.get(u) || null, t, e, n, l, i)), true;
      case "gotpointercapture":
        return u = i.pointerId, mi.set(u, gi(mi.get(u) || null, t, e, n, l, i)), true;
    }
    return false;
  }
  function Em(t) {
    var e = tl(t.target);
    if (e !== null) {
      var n = W(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = et(n), e !== null) {
            t.blockedOn = e, $0(t.priority, function() {
              if (n.tag === 13) {
                var l = pn(), i = Oa(n, l);
                i !== null && Fe(i, n, l), Bc(n, l);
              }
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Xo(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Uc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        qs = l, n.target.dispatchEvent(l), qs = null;
      } else return e = Ol(n), e !== null && Sm(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function Cm(t, e, n) {
    Xo(t) && n.delete(e);
  }
  function Kv() {
    jc = false, Va !== null && Xo(Va) && (Va = null), Xa !== null && Xo(Xa) && (Xa = null), Qa !== null && Xo(Qa) && (Qa = null), hi.forEach(Cm), mi.forEach(Cm);
  }
  function Qo(t, e) {
    t.blockedOn === e && (t.blockedOn = null, jc || (jc = true, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, Kv)));
  }
  var Ko = null;
  function Am(t) {
    Ko !== t && (Ko = t, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, function() {
      Ko === t && (Ko = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], l = t[e + 1], i = t[e + 2];
        if (typeof l != "function") {
          if (Hc(l || n) === null) continue;
          break;
        }
        var u = Ol(n);
        u !== null && (t.splice(e, 3), e -= 3, wu(u, { pending: true, data: i, method: n.method, action: l }, l, i));
      }
    }));
  }
  function yi(t) {
    function e(T) {
      return Qo(T, t);
    }
    Va !== null && Qo(Va, t), Xa !== null && Qo(Xa, t), Qa !== null && Qo(Qa, t), hi.forEach(e), mi.forEach(e);
    for (var n = 0; n < Ka.length; n++) {
      var l = Ka[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ka.length && (n = Ka[0], n.blockedOn === null); ) Em(n), n.blockedOn === null && Ka.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (l = 0; l < n.length; l += 3) {
      var i = n[l], u = n[l + 1], d = i[nn] || null;
      if (typeof u == "function") d || Am(n);
      else if (d) {
        var y = null;
        if (u && u.hasAttribute("formAction")) {
          if (i = u, d = u[nn] || null) y = d.formAction;
          else if (Hc(i) !== null) continue;
        } else y = d.action;
        typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3), l -= 3), Am(n);
      }
    }
  }
  function Lc(t) {
    this._internalRoot = t;
  }
  Po.prototype.render = Lc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var n = e.current, l = pn();
    vm(n, l, t, e, null, null);
  }, Po.prototype.unmount = Lc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t.tag === 0 && ar(), vm(t.current, 2, null, t, null, null), zo(), e[Ml] = null;
    }
  };
  function Po(t) {
    this._internalRoot = t;
  }
  Po.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = If();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ka.length && e !== 0 && e < Ka[n].priority; n++) ;
      Ka.splice(n, 0, t), n === 0 && Em(t);
    }
  };
  var Rm = r.version;
  if (Rm !== "19.0.0") throw Error(s(527, Rm, "19.0.0"));
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = $(e), t = t !== null ? it(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Pv = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: X, findFiberByHostInstance: tl, reconcilerVersion: "19.0.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber) try {
      te = Zo.inject(Pv), Kt = Zo;
    } catch {
    }
  }
  return bi.createRoot = function(t, e) {
    if (!c(t)) throw Error(s(299));
    var n = false, l = "", i = Gp, u = Vp, d = Xp, y = null;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (y = e.unstable_transitionCallbacks)), e = gm(t, 1, false, null, null, n, l, i, u, d, y, null), t[Ml] = e.current, Tc(t.nodeType === 8 ? t.parentNode : t), new Lc(e);
  }, bi.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(s(299));
    var l = false, i = "", u = Gp, d = Vp, y = Xp, T = null, O = null;
    return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks), n.formState !== void 0 && (O = n.formState)), e = gm(t, 1, true, e, n ?? null, l, i, u, d, y, T, O), e.context = ym(null), n = e.current, l = pn(), i = Ua(l), i.callback = null, Ha(n, i, l), e.current.lanes = l, Cr(e, l), Wn(e), t[Ml] = e.current, Tc(t), new Po(e);
  }, bi.version = "19.0.0", bi;
}
var Um;
function lb() {
  if (Um) return Yc.exports;
  Um = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Yc.exports = ab(), Yc.exports;
}
var rb = lb();
const Oi = { black: "#000", white: "#fff" }, ur = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, cr = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, fr = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, dr = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, pr = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, Si = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, ib = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Rl(a3, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${a3}`);
  return r.forEach((s) => o.searchParams.append("args[]", s)), `Minified MUI error #${a3}; visit ${o} for the full message.`;
}
const xs = "$$material";
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(a3) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var s in o) ({}).hasOwnProperty.call(o, s) && (a3[s] = o[s]);
    }
    return a3;
  }, fs.apply(null, arguments);
}
function ob(a3) {
  if (a3.sheet) return a3.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === a3) return document.styleSheets[r];
}
function sb(a3) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a3.key), a3.nonce !== void 0 && r.setAttribute("nonce", a3.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var ub = function() {
  function a3(o) {
    var s = this;
    this._insertTag = function(c) {
      var f;
      s.tags.length === 0 ? s.insertionPoint ? f = s.insertionPoint.nextSibling : s.prepend ? f = s.container.firstChild : f = s.before : f = s.tags[s.tags.length - 1].nextSibling, s.container.insertBefore(c, f), s.tags.push(c);
    }, this.isSpeedy = o.speedy === void 0 ? true : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var r = a3.prototype;
  return r.hydrate = function(s) {
    s.forEach(this._insertTag);
  }, r.insert = function(s) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(sb(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = ob(c);
      try {
        f.insertRule(s, f.cssRules.length);
      } catch {
      }
    } else c.appendChild(document.createTextNode(s));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(s) {
      var c;
      return (c = s.parentNode) == null ? void 0 : c.removeChild(s);
    }), this.tags = [], this.ctr = 0;
  }, a3;
}(), Pe = "-ms-", ds = "-moz-", Vt = "-webkit-", qg = "comm", Ef = "rule", Cf = "decl", cb = "@import", Yg = "@keyframes", fb = "@layer", db = Math.abs, Ts = String.fromCharCode, pb = Object.assign;
function hb(a3, r) {
  return qe(a3, 0) ^ 45 ? (((r << 2 ^ qe(a3, 0)) << 2 ^ qe(a3, 1)) << 2 ^ qe(a3, 2)) << 2 ^ qe(a3, 3) : 0;
}
function Gg(a3) {
  return a3.trim();
}
function mb(a3, r) {
  return (a3 = r.exec(a3)) ? a3[0] : a3;
}
function Xt(a3, r, o) {
  return a3.replace(r, o);
}
function rf(a3, r) {
  return a3.indexOf(r);
}
function qe(a3, r) {
  return a3.charCodeAt(r) | 0;
}
function zi(a3, r, o) {
  return a3.slice(r, o);
}
function In(a3) {
  return a3.length;
}
function Af(a3) {
  return a3.length;
}
function Fo(a3, r) {
  return r.push(a3), a3;
}
function gb(a3, r) {
  return a3.map(r).join("");
}
var Es = 1, Sr = 1, Vg = 0, on = 0, Me = 0, Er = "";
function Cs(a3, r, o, s, c, f, p) {
  return { value: a3, root: r, parent: o, type: s, props: c, children: f, line: Es, column: Sr, length: p, return: "" };
}
function xi(a3, r) {
  return pb(Cs("", null, null, "", null, null, 0), a3, { length: -a3.length }, r);
}
function yb() {
  return Me;
}
function vb() {
  return Me = on > 0 ? qe(Er, --on) : 0, Sr--, Me === 10 && (Sr = 1, Es--), Me;
}
function gn() {
  return Me = on < Vg ? qe(Er, on++) : 0, Sr++, Me === 10 && (Sr = 1, Es++), Me;
}
function aa() {
  return qe(Er, on);
}
function is() {
  return on;
}
function Bi(a3, r) {
  return zi(Er, a3, r);
}
function _i(a3) {
  switch (a3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Xg(a3) {
  return Es = Sr = 1, Vg = In(Er = a3), on = 0, [];
}
function Qg(a3) {
  return Er = "", a3;
}
function os(a3) {
  return Gg(Bi(on - 1, of(a3 === 91 ? a3 + 2 : a3 === 40 ? a3 + 1 : a3)));
}
function bb(a3) {
  for (; (Me = aa()) && Me < 33; ) gn();
  return _i(a3) > 2 || _i(Me) > 3 ? "" : " ";
}
function Sb(a3, r) {
  for (; --r && gn() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); ) ;
  return Bi(a3, is() + (r < 6 && aa() == 32 && gn() == 32));
}
function of(a3) {
  for (; gn(); ) switch (Me) {
    case a3:
      return on;
    case 34:
    case 39:
      a3 !== 34 && a3 !== 39 && of(Me);
      break;
    case 40:
      a3 === 41 && of(a3);
      break;
    case 92:
      gn();
      break;
  }
  return on;
}
function xb(a3, r) {
  for (; gn() && a3 + Me !== 57; ) if (a3 + Me === 84 && aa() === 47) break;
  return "/*" + Bi(r, on - 1) + "*" + Ts(a3 === 47 ? a3 : gn());
}
function Tb(a3) {
  for (; !_i(aa()); ) gn();
  return Bi(a3, on);
}
function Eb(a3) {
  return Qg(ss("", null, null, null, [""], a3 = Xg(a3), 0, [0], a3));
}
function ss(a3, r, o, s, c, f, p, h, g) {
  for (var m = 0, S = 0, b = p, C = 0, z = 0, R = 0, x = 1, D = 1, k = 1, q = 0, B = "", j = c, w = f, V = s, Y = B; D; ) switch (R = q, q = gn()) {
    case 40:
      if (R != 108 && qe(Y, b - 1) == 58) {
        rf(Y += Xt(os(q), "&", "&\f"), "&\f") != -1 && (k = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      Y += os(q);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      Y += bb(R);
      break;
    case 92:
      Y += Sb(is() - 1, 7);
      continue;
    case 47:
      switch (aa()) {
        case 42:
        case 47:
          Fo(Cb(xb(gn(), is()), r, o), g);
          break;
        default:
          Y += "/";
      }
      break;
    case 123 * x:
      h[m++] = In(Y) * k;
    case 125 * x:
    case 59:
    case 0:
      switch (q) {
        case 0:
        case 125:
          D = 0;
        case 59 + S:
          k == -1 && (Y = Xt(Y, /\f/g, "")), z > 0 && In(Y) - b && Fo(z > 32 ? jm(Y + ";", s, o, b - 1) : jm(Xt(Y, " ", "") + ";", s, o, b - 2), g);
          break;
        case 59:
          Y += ";";
        default:
          if (Fo(V = Hm(Y, r, o, m, S, c, h, B, j = [], w = [], b), f), q === 123) if (S === 0) ss(Y, r, V, V, j, f, b, h, w);
          else switch (C === 99 && qe(Y, 3) === 110 ? 100 : C) {
            case 100:
            case 108:
            case 109:
            case 115:
              ss(a3, V, V, s && Fo(Hm(a3, V, V, 0, 0, c, h, B, c, j = [], b), w), c, w, b, h, s ? j : w);
              break;
            default:
              ss(Y, V, V, V, [""], w, 0, h, w);
          }
      }
      m = S = z = 0, x = k = 1, B = Y = "", b = p;
      break;
    case 58:
      b = 1 + In(Y), z = R;
    default:
      if (x < 1) {
        if (q == 123) --x;
        else if (q == 125 && x++ == 0 && vb() == 125) continue;
      }
      switch (Y += Ts(q), q * x) {
        case 38:
          k = S > 0 ? 1 : (Y += "\f", -1);
          break;
        case 44:
          h[m++] = (In(Y) - 1) * k, k = 1;
          break;
        case 64:
          aa() === 45 && (Y += os(gn())), C = aa(), S = b = In(B = Y += Tb(is())), q++;
          break;
        case 45:
          R === 45 && In(Y) == 2 && (x = 0);
      }
  }
  return f;
}
function Hm(a3, r, o, s, c, f, p, h, g, m, S) {
  for (var b = c - 1, C = c === 0 ? f : [""], z = Af(C), R = 0, x = 0, D = 0; R < s; ++R) for (var k = 0, q = zi(a3, b + 1, b = db(x = p[R])), B = a3; k < z; ++k) (B = Gg(x > 0 ? C[k] + " " + q : Xt(q, /&\f/g, C[k]))) && (g[D++] = B);
  return Cs(a3, r, o, c === 0 ? Ef : h, g, m, S);
}
function Cb(a3, r, o) {
  return Cs(a3, r, o, qg, Ts(yb()), zi(a3, 2, -2), 0);
}
function jm(a3, r, o, s) {
  return Cs(a3, r, o, Cf, zi(a3, 0, s), zi(a3, s + 1, -1), s);
}
function vr(a3, r) {
  for (var o = "", s = Af(a3), c = 0; c < s; c++) o += r(a3[c], c, a3, r) || "";
  return o;
}
function Ab(a3, r, o, s) {
  switch (a3.type) {
    case fb:
      if (a3.children.length) break;
    case cb:
    case Cf:
      return a3.return = a3.return || a3.value;
    case qg:
      return "";
    case Yg:
      return a3.return = a3.value + "{" + vr(a3.children, s) + "}";
    case Ef:
      a3.value = a3.props.join(",");
  }
  return In(o = vr(a3.children, s)) ? a3.return = a3.value + "{" + o + "}" : "";
}
function Rb(a3) {
  var r = Af(a3);
  return function(o, s, c, f) {
    for (var p = "", h = 0; h < r; h++) p += a3[h](o, s, c, f) || "";
    return p;
  };
}
function wb(a3) {
  return function(r) {
    r.root || (r = r.return) && a3(r);
  };
}
function Kg(a3) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = a3(o)), r[o];
  };
}
var Mb = function(r, o, s) {
  for (var c = 0, f = 0; c = f, f = aa(), c === 38 && f === 12 && (o[s] = 1), !_i(f); ) gn();
  return Bi(r, on);
}, Ob = function(r, o) {
  var s = -1, c = 44;
  do
    switch (_i(c)) {
      case 0:
        c === 38 && aa() === 12 && (o[s] = 1), r[s] += Mb(on - 1, o, s);
        break;
      case 2:
        r[s] += os(c);
        break;
      case 4:
        if (c === 44) {
          r[++s] = aa() === 58 ? "&\f" : "", o[s] = r[s].length;
          break;
        }
      default:
        r[s] += Ts(c);
    }
  while (c = gn());
  return r;
}, zb = function(r, o) {
  return Qg(Ob(Xg(r), o));
}, Lm = /* @__PURE__ */ new WeakMap(), _b = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var o = r.value, s = r.parent, c = r.column === s.column && r.line === s.line; s.type !== "rule"; ) if (s = s.parent, !s) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Lm.get(s)) && !c) {
      Lm.set(r, true);
      for (var f = [], p = zb(o, f), h = s.props, g = 0, m = 0; g < p.length; g++) for (var S = 0; S < h.length; S++, m++) r.props[m] = f[g] ? p[g].replace(/&\f/g, h[S]) : h[S] + " " + p[g];
    }
  }
}, kb = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Pg(a3, r) {
  switch (hb(a3, r)) {
    case 5103:
      return Vt + "print-" + a3 + a3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Vt + a3 + a3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Vt + a3 + ds + a3 + Pe + a3 + a3;
    case 6828:
    case 4268:
      return Vt + a3 + Pe + a3 + a3;
    case 6165:
      return Vt + a3 + Pe + "flex-" + a3 + a3;
    case 5187:
      return Vt + a3 + Xt(a3, /(\w+).+(:[^]+)/, Vt + "box-$1$2" + Pe + "flex-$1$2") + a3;
    case 5443:
      return Vt + a3 + Pe + "flex-item-" + Xt(a3, /flex-|-self/, "") + a3;
    case 4675:
      return Vt + a3 + Pe + "flex-line-pack" + Xt(a3, /align-content|flex-|-self/, "") + a3;
    case 5548:
      return Vt + a3 + Pe + Xt(a3, "shrink", "negative") + a3;
    case 5292:
      return Vt + a3 + Pe + Xt(a3, "basis", "preferred-size") + a3;
    case 6060:
      return Vt + "box-" + Xt(a3, "-grow", "") + Vt + a3 + Pe + Xt(a3, "grow", "positive") + a3;
    case 4554:
      return Vt + Xt(a3, /([^-])(transform)/g, "$1" + Vt + "$2") + a3;
    case 6187:
      return Xt(Xt(Xt(a3, /(zoom-|grab)/, Vt + "$1"), /(image-set)/, Vt + "$1"), a3, "") + a3;
    case 5495:
    case 3959:
      return Xt(a3, /(image-set\([^]*)/, Vt + "$1$`$1");
    case 4968:
      return Xt(Xt(a3, /(.+:)(flex-)?(.*)/, Vt + "box-pack:$3" + Pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Vt + a3 + a3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Xt(a3, /(.+)-inline(.+)/, Vt + "$1$2") + a3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (In(a3) - 1 - r > 6) switch (qe(a3, r + 1)) {
        case 109:
          if (qe(a3, r + 4) !== 45) break;
        case 102:
          return Xt(a3, /(.+:)(.+)-([^]+)/, "$1" + Vt + "$2-$3$1" + ds + (qe(a3, r + 3) == 108 ? "$3" : "$2-$3")) + a3;
        case 115:
          return ~rf(a3, "stretch") ? Pg(Xt(a3, "stretch", "fill-available"), r) + a3 : a3;
      }
      break;
    case 4949:
      if (qe(a3, r + 1) !== 115) break;
    case 6444:
      switch (qe(a3, In(a3) - 3 - (~rf(a3, "!important") && 10))) {
        case 107:
          return Xt(a3, ":", ":" + Vt) + a3;
        case 101:
          return Xt(a3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Vt + (qe(a3, 14) === 45 ? "inline-" : "") + "box$3$1" + Vt + "$2$3$1" + Pe + "$2box$3") + a3;
      }
      break;
    case 5936:
      switch (qe(a3, r + 11)) {
        case 114:
          return Vt + a3 + Pe + Xt(a3, /[svh]\w+-[tblr]{2}/, "tb") + a3;
        case 108:
          return Vt + a3 + Pe + Xt(a3, /[svh]\w+-[tblr]{2}/, "tb-rl") + a3;
        case 45:
          return Vt + a3 + Pe + Xt(a3, /[svh]\w+-[tblr]{2}/, "lr") + a3;
      }
      return Vt + a3 + Pe + a3 + a3;
  }
  return a3;
}
var Db = function(r, o, s, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Cf:
      r.return = Pg(r.value, r.length);
      break;
    case Yg:
      return vr([xi(r, { value: Xt(r.value, "@", "@" + Vt) })], c);
    case Ef:
      if (r.length) return gb(r.props, function(f) {
        switch (mb(f, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vr([xi(r, { props: [Xt(f, /:(read-\w+)/, ":" + ds + "$1")] })], c);
          case "::placeholder":
            return vr([xi(r, { props: [Xt(f, /:(plac\w+)/, ":" + Vt + "input-$1")] }), xi(r, { props: [Xt(f, /:(plac\w+)/, ":" + ds + "$1")] }), xi(r, { props: [Xt(f, /:(plac\w+)/, Pe + "input-$1")] })], c);
        }
        return "";
      });
  }
}, Bb = [Db], Nb = function(r) {
  var o = r.key;
  if (o === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(x) {
      var D = x.getAttribute("data-emotion");
      D.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || Bb, f = {}, p, h = [];
  p = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function(x) {
    for (var D = x.getAttribute("data-emotion").split(" "), k = 1; k < D.length; k++) f[D[k]] = true;
    h.push(x);
  });
  var g, m = [_b, kb];
  {
    var S, b = [Ab, wb(function(x) {
      S.insert(x);
    })], C = Rb(m.concat(c, b)), z = function(D) {
      return vr(Eb(D), C);
    };
    g = function(D, k, q, B) {
      S = q, z(D ? D + "{" + k.styles + "}" : k.styles), B && (R.inserted[k.name] = true);
    };
  }
  var R = { key: o, sheet: new ub({ key: o, container: p, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: f, registered: {}, insert: g };
  return R.sheet.hydrate(h), R;
}, Qc = { exports: {} }, Qt = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $m;
function Ub() {
  if ($m) return Qt;
  $m = 1;
  var a3 = typeof Symbol == "function" && Symbol.for, r = a3 ? Symbol.for("react.element") : 60103, o = a3 ? Symbol.for("react.portal") : 60106, s = a3 ? Symbol.for("react.fragment") : 60107, c = a3 ? Symbol.for("react.strict_mode") : 60108, f = a3 ? Symbol.for("react.profiler") : 60114, p = a3 ? Symbol.for("react.provider") : 60109, h = a3 ? Symbol.for("react.context") : 60110, g = a3 ? Symbol.for("react.async_mode") : 60111, m = a3 ? Symbol.for("react.concurrent_mode") : 60111, S = a3 ? Symbol.for("react.forward_ref") : 60112, b = a3 ? Symbol.for("react.suspense") : 60113, C = a3 ? Symbol.for("react.suspense_list") : 60120, z = a3 ? Symbol.for("react.memo") : 60115, R = a3 ? Symbol.for("react.lazy") : 60116, x = a3 ? Symbol.for("react.block") : 60121, D = a3 ? Symbol.for("react.fundamental") : 60117, k = a3 ? Symbol.for("react.responder") : 60118, q = a3 ? Symbol.for("react.scope") : 60119;
  function B(w) {
    if (typeof w == "object" && w !== null) {
      var V = w.$$typeof;
      switch (V) {
        case r:
          switch (w = w.type, w) {
            case g:
            case m:
            case s:
            case f:
            case c:
            case b:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case h:
                case S:
                case R:
                case z:
                case p:
                  return w;
                default:
                  return V;
              }
          }
        case o:
          return V;
      }
    }
  }
  function j(w) {
    return B(w) === m;
  }
  return Qt.AsyncMode = g, Qt.ConcurrentMode = m, Qt.ContextConsumer = h, Qt.ContextProvider = p, Qt.Element = r, Qt.ForwardRef = S, Qt.Fragment = s, Qt.Lazy = R, Qt.Memo = z, Qt.Portal = o, Qt.Profiler = f, Qt.StrictMode = c, Qt.Suspense = b, Qt.isAsyncMode = function(w) {
    return j(w) || B(w) === g;
  }, Qt.isConcurrentMode = j, Qt.isContextConsumer = function(w) {
    return B(w) === h;
  }, Qt.isContextProvider = function(w) {
    return B(w) === p;
  }, Qt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }, Qt.isForwardRef = function(w) {
    return B(w) === S;
  }, Qt.isFragment = function(w) {
    return B(w) === s;
  }, Qt.isLazy = function(w) {
    return B(w) === R;
  }, Qt.isMemo = function(w) {
    return B(w) === z;
  }, Qt.isPortal = function(w) {
    return B(w) === o;
  }, Qt.isProfiler = function(w) {
    return B(w) === f;
  }, Qt.isStrictMode = function(w) {
    return B(w) === c;
  }, Qt.isSuspense = function(w) {
    return B(w) === b;
  }, Qt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === s || w === m || w === f || w === c || w === b || w === C || typeof w == "object" && w !== null && (w.$$typeof === R || w.$$typeof === z || w.$$typeof === p || w.$$typeof === h || w.$$typeof === S || w.$$typeof === D || w.$$typeof === k || w.$$typeof === q || w.$$typeof === x);
  }, Qt.typeOf = B, Qt;
}
var qm;
function Hb() {
  return qm || (qm = 1, Qc.exports = Ub()), Qc.exports;
}
var Kc, Ym;
function jb() {
  if (Ym) return Kc;
  Ym = 1;
  var a3 = Hb(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, o = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, s = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, c = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, f = {};
  f[a3.ForwardRef] = s, f[a3.Memo] = c;
  function p(R) {
    return a3.isMemo(R) ? c : f[R.$$typeof] || r;
  }
  var h = Object.defineProperty, g = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, C = Object.prototype;
  function z(R, x, D) {
    if (typeof x != "string") {
      if (C) {
        var k = b(x);
        k && k !== C && z(R, k, D);
      }
      var q = g(x);
      m && (q = q.concat(m(x)));
      for (var B = p(R), j = p(x), w = 0; w < q.length; ++w) {
        var V = q[w];
        if (!o[V] && !(D && D[V]) && !(j && j[V]) && !(B && B[V])) {
          var Y = S(x, V);
          try {
            h(R, V, Y);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return Kc = z, Kc;
}
jb();
var Lb = true;
function Zg(a3, r, o) {
  var s = "";
  return o.split(" ").forEach(function(c) {
    a3[c] !== void 0 ? r.push(a3[c] + ";") : c && (s += c + " ");
  }), s;
}
var Rf = function(r, o, s) {
  var c = r.key + "-" + o.name;
  (s === false || Lb === false) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
}, Fg = function(r, o, s) {
  Rf(r, o, s);
  var c = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var f = o;
    do
      r.insert(o === f ? "." + c : "", f, r.sheet, true), f = f.next;
    while (f !== void 0);
  }
};
function $b(a3) {
  for (var r = 0, o, s = 0, c = a3.length; c >= 4; ++s, c -= 4) o = a3.charCodeAt(s) & 255 | (a3.charCodeAt(++s) & 255) << 8 | (a3.charCodeAt(++s) & 255) << 16 | (a3.charCodeAt(++s) & 255) << 24, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= o >>> 24, r = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (a3.charCodeAt(s + 2) & 255) << 16;
    case 2:
      r ^= (a3.charCodeAt(s + 1) & 255) << 8;
    case 1:
      r ^= a3.charCodeAt(s) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var qb = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Yb = /[A-Z]|^ms/g, Gb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wg = function(r) {
  return r.charCodeAt(1) === 45;
}, Gm = function(r) {
  return r != null && typeof r != "boolean";
}, Pc = Kg(function(a3) {
  return Wg(a3) ? a3 : a3.replace(Yb, "-$&").toLowerCase();
}), Vm = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string") return o.replace(Gb, function(s, c, f) {
        return ta = { name: c, styles: f, next: ta }, c;
      });
  }
  return qb[r] !== 1 && !Wg(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function ki(a3, r, o) {
  if (o == null) return "";
  var s = o;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var c = o;
      if (c.anim === 1) return ta = { name: c.name, styles: c.styles, next: ta }, c.name;
      var f = o;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0) for (; p !== void 0; ) ta = { name: p.name, styles: p.styles, next: ta }, p = p.next;
        var h = f.styles + ";";
        return h;
      }
      return Vb(a3, r, o);
    }
    case "function": {
      if (a3 !== void 0) {
        var g = ta, m = o(a3);
        return ta = g, ki(a3, r, m);
      }
      break;
    }
  }
  var S = o;
  if (r == null) return S;
  var b = r[S];
  return b !== void 0 ? b : S;
}
function Vb(a3, r, o) {
  var s = "";
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) s += ki(a3, r, o[c]) + ";";
  else for (var f in o) {
    var p = o[f];
    if (typeof p != "object") {
      var h = p;
      r != null && r[h] !== void 0 ? s += f + "{" + r[h] + "}" : Gm(h) && (s += Pc(f) + ":" + Vm(f, h) + ";");
    } else if (Array.isArray(p) && typeof p[0] == "string" && (r == null || r[p[0]] === void 0)) for (var g = 0; g < p.length; g++) Gm(p[g]) && (s += Pc(f) + ":" + Vm(f, p[g]) + ";");
    else {
      var m = ki(a3, r, p);
      switch (f) {
        case "animation":
        case "animationName": {
          s += Pc(f) + ":" + m + ";";
          break;
        }
        default:
          s += f + "{" + m + "}";
      }
    }
  }
  return s;
}
var Xm = /label:\s*([^\s;{]+)\s*(;|$)/g, ta;
function As(a3, r, o) {
  if (a3.length === 1 && typeof a3[0] == "object" && a3[0] !== null && a3[0].styles !== void 0) return a3[0];
  var s = true, c = "";
  ta = void 0;
  var f = a3[0];
  if (f == null || f.raw === void 0) s = false, c += ki(o, r, f);
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a3.length; h++) if (c += ki(o, r, a3[h]), s) {
    var g = f;
    c += g[h];
  }
  Xm.lastIndex = 0;
  for (var m = "", S; (S = Xm.exec(c)) !== null; ) m += "-" + S[1];
  var b = $b(c) + m;
  return { name: b, styles: c, next: ta };
}
var Xb = function(r) {
  return r();
}, Qb = lf.useInsertionEffect ? lf.useInsertionEffect : false, Jg = Qb || Xb, Ig = A.createContext(typeof HTMLElement < "u" ? Nb({ key: "css" }) : null);
Ig.Provider;
var t0 = function(r) {
  return A.forwardRef(function(o, s) {
    var c = A.useContext(Ig);
    return r(o, c, s);
  });
}, wf = A.createContext({}), Mf = {}.hasOwnProperty, sf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Kb = function(r, o) {
  var s = {};
  for (var c in o) Mf.call(o, c) && (s[c] = o[c]);
  return s[sf] = r, s;
}, Pb = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return Rf(o, s, c), Jg(function() {
    return Fg(o, s, c);
  }), null;
}, Zb = t0(function(a3, r, o) {
  var s = a3.css;
  typeof s == "string" && r.registered[s] !== void 0 && (s = r.registered[s]);
  var c = a3[sf], f = [s], p = "";
  typeof a3.className == "string" ? p = Zg(r.registered, f, a3.className) : a3.className != null && (p = a3.className + " ");
  var h = As(f, void 0, A.useContext(wf));
  p += r.key + "-" + h.name;
  var g = {};
  for (var m in a3) Mf.call(a3, m) && m !== "css" && m !== sf && (g[m] = a3[m]);
  return g.className = p, o && (g.ref = o), A.createElement(A.Fragment, null, A.createElement(Pb, { cache: r, serialized: h, isStringTag: typeof c == "string" }), A.createElement(c, g));
}), Fb = Zb, Qm = function(r, o) {
  var s = arguments;
  if (o == null || !Mf.call(o, "css")) return A.createElement.apply(void 0, s);
  var c = s.length, f = new Array(c);
  f[0] = Fb, f[1] = Kb(r, o);
  for (var p = 2; p < c; p++) f[p] = s[p];
  return A.createElement.apply(null, f);
};
(function(a3) {
  var r;
  r || (r = a3.JSX || (a3.JSX = {}));
})(Qm || (Qm = {}));
function Of() {
  for (var a3 = arguments.length, r = new Array(a3), o = 0; o < a3; o++) r[o] = arguments[o];
  return As(r);
}
function Ni() {
  var a3 = Of.apply(void 0, arguments), r = "animation-" + a3.name;
  return { name: r, styles: "@keyframes " + r + "{" + a3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Wb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jb = Kg(function(a3) {
  return Wb.test(a3) || a3.charCodeAt(0) === 111 && a3.charCodeAt(1) === 110 && a3.charCodeAt(2) < 91;
}), Ib = Jb, t1 = function(r) {
  return r !== "theme";
}, Km = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? Ib : t1;
}, Pm = function(r, o, s) {
  var c;
  if (o) {
    var f = o.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(p) {
      return r.__emotion_forwardProp(p) && f(p);
    } : f;
  }
  return typeof c != "function" && s && (c = r.__emotion_forwardProp), c;
}, e1 = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return Rf(o, s, c), Jg(function() {
    return Fg(o, s, c);
  }), null;
}, n1 = function a(r, o) {
  var s = r.__emotion_real === r, c = s && r.__emotion_base || r, f, p;
  o !== void 0 && (f = o.label, p = o.target);
  var h = Pm(r, o, s), g = h || Km(c), m = !g("as");
  return function() {
    var S = arguments, b = s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && b.push("label:" + f + ";"), S[0] == null || S[0].raw === void 0) b.push.apply(b, S);
    else {
      var C = S[0];
      b.push(C[0]);
      for (var z = S.length, R = 1; R < z; R++) b.push(S[R], C[R]);
    }
    var x = t0(function(D, k, q) {
      var B = m && D.as || c, j = "", w = [], V = D;
      if (D.theme == null) {
        V = {};
        for (var Y in D) V[Y] = D[Y];
        V.theme = A.useContext(wf);
      }
      typeof D.className == "string" ? j = Zg(k.registered, w, D.className) : D.className != null && (j = D.className + " ");
      var at = As(b.concat(w), k.registered, V);
      j += k.key + "-" + at.name, p !== void 0 && (j += " " + p);
      var X = m && h === void 0 ? Km(B) : g, v = {};
      for (var P in D) m && P === "as" || X(P) && (v[P] = D[P]);
      return v.className = j, q && (v.ref = q), A.createElement(A.Fragment, null, A.createElement(e1, { cache: k, serialized: at, isStringTag: typeof B == "string" }), A.createElement(B, v));
    });
    return x.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = c, x.__emotion_styles = b, x.__emotion_forwardProp = h, Object.defineProperty(x, "toString", { value: function() {
      return "." + p;
    } }), x.withComponent = function(D, k) {
      var q = a(D, fs({}, o, k, { shouldForwardProp: Pm(x, k, true) }));
      return q.apply(void 0, b);
    }, x;
  };
}, a1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], uf = n1.bind(null);
a1.forEach(function(a3) {
  uf[a3] = uf(a3);
});
/**
* @mui/styled-engine v6.4.3
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function e0(a3, r) {
  return uf(a3, r);
}
function l1(a3, r) {
  Array.isArray(a3.__emotion_styles) && (a3.__emotion_styles = r(a3.__emotion_styles));
}
const Zm = [];
function Fm(a3) {
  return Zm[0] = a3, As(Zm);
}
var Zc = { exports: {} }, Wt = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wm;
function r1() {
  if (Wm) return Wt;
  Wm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function R(x) {
    if (typeof x == "object" && x !== null) {
      var D = x.$$typeof;
      switch (D) {
        case a3:
          switch (x = x.type, x) {
            case o:
            case c:
            case s:
            case g:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case p:
                case h:
                case b:
                case S:
                  return x;
                case f:
                  return x;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  return Wt.ContextConsumer = f, Wt.ContextProvider = p, Wt.Element = a3, Wt.ForwardRef = h, Wt.Fragment = o, Wt.Lazy = b, Wt.Memo = S, Wt.Portal = r, Wt.Profiler = c, Wt.StrictMode = s, Wt.Suspense = g, Wt.SuspenseList = m, Wt.isContextConsumer = function(x) {
    return R(x) === f;
  }, Wt.isContextProvider = function(x) {
    return R(x) === p;
  }, Wt.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a3;
  }, Wt.isForwardRef = function(x) {
    return R(x) === h;
  }, Wt.isFragment = function(x) {
    return R(x) === o;
  }, Wt.isLazy = function(x) {
    return R(x) === b;
  }, Wt.isMemo = function(x) {
    return R(x) === S;
  }, Wt.isPortal = function(x) {
    return R(x) === r;
  }, Wt.isProfiler = function(x) {
    return R(x) === c;
  }, Wt.isStrictMode = function(x) {
    return R(x) === s;
  }, Wt.isSuspense = function(x) {
    return R(x) === g;
  }, Wt.isSuspenseList = function(x) {
    return R(x) === m;
  }, Wt.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === c || x === s || x === g || x === m || x === C || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === S || x.$$typeof === p || x.$$typeof === f || x.$$typeof === h || x.$$typeof === z || x.getModuleId !== void 0);
  }, Wt.typeOf = R, Wt;
}
var Jm;
function i1() {
  return Jm || (Jm = 1, Zc.exports = r1()), Zc.exports;
}
var n0 = i1();
function ea(a3) {
  if (typeof a3 != "object" || a3 === null) return false;
  const r = Object.getPrototypeOf(a3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a3) && !(Symbol.iterator in a3);
}
function a0(a3) {
  if (A.isValidElement(a3) || n0.isValidElementType(a3) || !ea(a3)) return a3;
  const r = {};
  return Object.keys(a3).forEach((o) => {
    r[o] = a0(a3[o]);
  }), r;
}
function yn(a3, r, o = { clone: true }) {
  const s = o.clone ? { ...a3 } : a3;
  return ea(a3) && ea(r) && Object.keys(r).forEach((c) => {
    A.isValidElement(r[c]) || n0.isValidElementType(r[c]) ? s[c] = r[c] : ea(r[c]) && Object.prototype.hasOwnProperty.call(a3, c) && ea(a3[c]) ? s[c] = yn(a3[c], r[c], o) : o.clone ? s[c] = ea(r[c]) ? a0(r[c]) : r[c] : s[c] = r[c];
  }), s;
}
const o1 = (a3) => {
  const r = Object.keys(a3).map((o) => ({ key: o, val: a3[o] })) || [];
  return r.sort((o, s) => o.val - s.val), r.reduce((o, s) => ({ ...o, [s.key]: s.val }), {});
};
function s1(a3) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = "px", step: s = 5, ...c } = a3, f = o1(r), p = Object.keys(f);
  function h(C) {
    return `@media (min-width:${typeof r[C] == "number" ? r[C] : C}${o})`;
  }
  function g(C) {
    return `@media (max-width:${(typeof r[C] == "number" ? r[C] : C) - s / 100}${o})`;
  }
  function m(C, z) {
    const R = p.indexOf(z);
    return `@media (min-width:${typeof r[C] == "number" ? r[C] : C}${o}) and (max-width:${(R !== -1 && typeof r[p[R]] == "number" ? r[p[R]] : z) - s / 100}${o})`;
  }
  function S(C) {
    return p.indexOf(C) + 1 < p.length ? m(C, p[p.indexOf(C) + 1]) : h(C);
  }
  function b(C) {
    const z = p.indexOf(C);
    return z === 0 ? h(p[1]) : z === p.length - 1 ? g(p[z]) : m(C, p[p.indexOf(C) + 1]).replace("@media", "@media not all and");
  }
  return { keys: p, values: f, up: h, down: g, between: m, only: S, not: b, unit: o, ...c };
}
function u1(a3, r) {
  if (!a3.containerQueries) return r;
  const o = Object.keys(r).filter((s) => s.startsWith("@container")).sort((s, c) => {
    var _a, _b2;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((_a = s.match(f)) == null ? void 0 : _a[1]) || 0) - +(((_b2 = c.match(f)) == null ? void 0 : _b2[1]) || 0);
  });
  return o.length ? o.reduce((s, c) => {
    const f = r[c];
    return delete s[c], s[c] = f, s;
  }, { ...r }) : r;
}
function c1(a3, r) {
  return r === "@" || r.startsWith("@") && (a3.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function f1(a3, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, s, c] = o, f = Number.isNaN(+s) ? s || 0 : +s;
  return a3.containerQueries(c).up(f);
}
function d1(a3) {
  const r = (f, p) => f.replace("@media", p ? `@container ${p}` : "@container");
  function o(f, p) {
    f.up = (...h) => r(a3.breakpoints.up(...h), p), f.down = (...h) => r(a3.breakpoints.down(...h), p), f.between = (...h) => r(a3.breakpoints.between(...h), p), f.only = (...h) => r(a3.breakpoints.only(...h), p), f.not = (...h) => {
      const g = r(a3.breakpoints.not(...h), p);
      return g.includes("not all and") ? g.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : g;
    };
  }
  const s = {}, c = (f) => (o(s, f), s);
  return o(c), { ...a3, containerQueries: c };
}
const p1 = { borderRadius: 4 };
function wi(a3, r) {
  return r ? yn(a3, r, { clone: false }) : a3;
}
const Rs = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Im = { keys: ["xs", "sm", "md", "lg", "xl"], up: (a3) => `@media (min-width:${Rs[a3]}px)` }, h1 = { containerQueries: (a3) => ({ up: (r) => {
  let o = typeof r == "number" ? r : Rs[r] || r;
  return typeof o == "number" && (o = `${o}px`), a3 ? `@container ${a3} (min-width:${o})` : `@container (min-width:${o})`;
} }) };
function Aa(a3, r, o) {
  const s = a3.theme || {};
  if (Array.isArray(r)) {
    const f = s.breakpoints || Im;
    return r.reduce((p, h, g) => (p[f.up(f.keys[g])] = o(r[g]), p), {});
  }
  if (typeof r == "object") {
    const f = s.breakpoints || Im;
    return Object.keys(r).reduce((p, h) => {
      if (c1(f.keys, h)) {
        const g = f1(s.containerQueries ? s : h1, h);
        g && (p[g] = o(r[h], h));
      } else if (Object.keys(f.values || Rs).includes(h)) {
        const g = f.up(h);
        p[g] = o(r[h], h);
      } else {
        const g = h;
        p[g] = r[g];
      }
      return p;
    }, {});
  }
  return o(r);
}
function m1(a3 = {}) {
  var _a;
  return ((_a = a3.keys) == null ? void 0 : _a.reduce((o, s) => {
    const c = a3.up(s);
    return o[c] = {}, o;
  }, {})) || {};
}
function g1(a3, r) {
  return a3.reduce((o, s) => {
    const c = o[s];
    return (!c || Object.keys(c).length === 0) && delete o[s], o;
  }, r);
}
function gt(a3) {
  if (typeof a3 != "string") throw new Error(Rl(7));
  return a3.charAt(0).toUpperCase() + a3.slice(1);
}
function ws(a3, r, o = true) {
  if (!r || typeof r != "string") return null;
  if (a3 && a3.vars && o) {
    const s = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a3);
    if (s != null) return s;
  }
  return r.split(".").reduce((s, c) => s && s[c] != null ? s[c] : null, a3);
}
function ps(a3, r, o, s = o) {
  let c;
  return typeof a3 == "function" ? c = a3(o) : Array.isArray(a3) ? c = a3[o] || s : c = ws(a3, o) || s, r && (c = r(c, s, a3)), c;
}
function Ee(a3) {
  const { prop: r, cssProperty: o = a3.prop, themeKey: s, transform: c } = a3, f = (p) => {
    if (p[r] == null) return null;
    const h = p[r], g = p.theme, m = ws(g, s) || {};
    return Aa(p, h, (b) => {
      let C = ps(m, c, b);
      return b === C && typeof b == "string" && (C = ps(m, c, `${r}${b === "default" ? "" : gt(b)}`, b)), o === false ? C : { [o]: C };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function y1(a3) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = a3(o)), r[o]);
}
const v1 = { m: "margin", p: "padding" }, b1 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, tg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, S1 = y1((a3) => {
  if (a3.length > 2) if (tg[a3]) a3 = tg[a3];
  else return [a3];
  const [r, o] = a3.split(""), s = v1[r], c = b1[o] || "";
  return Array.isArray(c) ? c.map((f) => s + f) : [s + c];
}), zf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _f = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...zf, ..._f];
function Ui(a3, r, o, s) {
  const c = ws(a3, r, true) ?? o;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string") return f;
    const p = Math.abs(f), h = c[p];
    return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof c == "function" ? c : () => {
  };
}
function kf(a3) {
  return Ui(a3, "spacing", 8);
}
function Hi(a3, r) {
  return typeof r == "string" || r == null ? r : a3(r);
}
function x1(a3, r) {
  return (o) => a3.reduce((s, c) => (s[c] = Hi(r, o), s), {});
}
function T1(a3, r, o, s) {
  if (!r.includes(o)) return null;
  const c = S1(o), f = x1(c, s), p = a3[o];
  return Aa(a3, p, f);
}
function l0(a3, r) {
  const o = kf(a3.theme);
  return Object.keys(a3).map((s) => T1(a3, r, s, o)).reduce(wi, {});
}
function Se(a3) {
  return l0(a3, zf);
}
Se.propTypes = {};
Se.filterProps = zf;
function xe(a3) {
  return l0(a3, _f);
}
xe.propTypes = {};
xe.filterProps = _f;
function r0(a3 = 8, r = kf({ spacing: a3 })) {
  if (a3.mui) return a3;
  const o = (...s) => (s.length === 0 ? [1] : s).map((f) => {
    const p = r(f);
    return typeof p == "number" ? `${p}px` : p;
  }).join(" ");
  return o.mui = true, o;
}
function Ms(...a3) {
  const r = a3.reduce((s, c) => (c.filterProps.forEach((f) => {
    s[f] = c;
  }), s), {}), o = (s) => Object.keys(s).reduce((c, f) => r[f] ? wi(c, r[f](s)) : c, {});
  return o.propTypes = {}, o.filterProps = a3.reduce((s, c) => s.concat(c.filterProps), []), o;
}
function Nn(a3) {
  return typeof a3 != "number" ? a3 : `${a3}px solid`;
}
function Ln(a3, r) {
  return Ee({ prop: a3, themeKey: "borders", transform: r });
}
const E1 = Ln("border", Nn), C1 = Ln("borderTop", Nn), A1 = Ln("borderRight", Nn), R1 = Ln("borderBottom", Nn), w1 = Ln("borderLeft", Nn), M1 = Ln("borderColor"), O1 = Ln("borderTopColor"), z1 = Ln("borderRightColor"), _1 = Ln("borderBottomColor"), k1 = Ln("borderLeftColor"), D1 = Ln("outline", Nn), B1 = Ln("outlineColor"), Os = (a3) => {
  if (a3.borderRadius !== void 0 && a3.borderRadius !== null) {
    const r = Ui(a3.theme, "shape.borderRadius", 4), o = (s) => ({ borderRadius: Hi(r, s) });
    return Aa(a3, a3.borderRadius, o);
  }
  return null;
};
Os.propTypes = {};
Os.filterProps = ["borderRadius"];
Ms(E1, C1, A1, R1, w1, M1, O1, z1, _1, k1, Os, D1, B1);
const zs = (a3) => {
  if (a3.gap !== void 0 && a3.gap !== null) {
    const r = Ui(a3.theme, "spacing", 8), o = (s) => ({ gap: Hi(r, s) });
    return Aa(a3, a3.gap, o);
  }
  return null;
};
zs.propTypes = {};
zs.filterProps = ["gap"];
const _s = (a3) => {
  if (a3.columnGap !== void 0 && a3.columnGap !== null) {
    const r = Ui(a3.theme, "spacing", 8), o = (s) => ({ columnGap: Hi(r, s) });
    return Aa(a3, a3.columnGap, o);
  }
  return null;
};
_s.propTypes = {};
_s.filterProps = ["columnGap"];
const ks = (a3) => {
  if (a3.rowGap !== void 0 && a3.rowGap !== null) {
    const r = Ui(a3.theme, "spacing", 8), o = (s) => ({ rowGap: Hi(r, s) });
    return Aa(a3, a3.rowGap, o);
  }
  return null;
};
ks.propTypes = {};
ks.filterProps = ["rowGap"];
const N1 = Ee({ prop: "gridColumn" }), U1 = Ee({ prop: "gridRow" }), H1 = Ee({ prop: "gridAutoFlow" }), j1 = Ee({ prop: "gridAutoColumns" }), L1 = Ee({ prop: "gridAutoRows" }), $1 = Ee({ prop: "gridTemplateColumns" }), q1 = Ee({ prop: "gridTemplateRows" }), Y1 = Ee({ prop: "gridTemplateAreas" }), G1 = Ee({ prop: "gridArea" });
Ms(zs, _s, ks, N1, U1, H1, j1, L1, $1, q1, Y1, G1);
function br(a3, r) {
  return r === "grey" ? r : a3;
}
const V1 = Ee({ prop: "color", themeKey: "palette", transform: br }), X1 = Ee({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: br }), Q1 = Ee({ prop: "backgroundColor", themeKey: "palette", transform: br });
Ms(V1, X1, Q1);
function mn(a3) {
  return a3 <= 1 && a3 !== 0 ? `${a3 * 100}%` : a3;
}
const K1 = Ee({ prop: "width", transform: mn }), Df = (a3) => {
  if (a3.maxWidth !== void 0 && a3.maxWidth !== null) {
    const r = (o) => {
      var _a, _b2, _c, _d, _e;
      const s = ((_c = (_b2 = (_a = a3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c[o]) || Rs[o];
      return s ? ((_e = (_d = a3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${s}${a3.theme.breakpoints.unit}` } : { maxWidth: s } : { maxWidth: mn(o) };
    };
    return Aa(a3, a3.maxWidth, r);
  }
  return null;
};
Df.filterProps = ["maxWidth"];
const P1 = Ee({ prop: "minWidth", transform: mn }), Z1 = Ee({ prop: "height", transform: mn }), F1 = Ee({ prop: "maxHeight", transform: mn }), W1 = Ee({ prop: "minHeight", transform: mn });
Ee({ prop: "size", cssProperty: "width", transform: mn });
Ee({ prop: "size", cssProperty: "height", transform: mn });
const J1 = Ee({ prop: "boxSizing" });
Ms(K1, Df, P1, Z1, F1, W1, J1);
const ji = { border: { themeKey: "borders", transform: Nn }, borderTop: { themeKey: "borders", transform: Nn }, borderRight: { themeKey: "borders", transform: Nn }, borderBottom: { themeKey: "borders", transform: Nn }, borderLeft: { themeKey: "borders", transform: Nn }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Nn }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Os }, color: { themeKey: "palette", transform: br }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: br }, backgroundColor: { themeKey: "palette", transform: br }, p: { style: xe }, pt: { style: xe }, pr: { style: xe }, pb: { style: xe }, pl: { style: xe }, px: { style: xe }, py: { style: xe }, padding: { style: xe }, paddingTop: { style: xe }, paddingRight: { style: xe }, paddingBottom: { style: xe }, paddingLeft: { style: xe }, paddingX: { style: xe }, paddingY: { style: xe }, paddingInline: { style: xe }, paddingInlineStart: { style: xe }, paddingInlineEnd: { style: xe }, paddingBlock: { style: xe }, paddingBlockStart: { style: xe }, paddingBlockEnd: { style: xe }, m: { style: Se }, mt: { style: Se }, mr: { style: Se }, mb: { style: Se }, ml: { style: Se }, mx: { style: Se }, my: { style: Se }, margin: { style: Se }, marginTop: { style: Se }, marginRight: { style: Se }, marginBottom: { style: Se }, marginLeft: { style: Se }, marginX: { style: Se }, marginY: { style: Se }, marginInline: { style: Se }, marginInlineStart: { style: Se }, marginInlineEnd: { style: Se }, marginBlock: { style: Se }, marginBlockStart: { style: Se }, marginBlockEnd: { style: Se }, displayPrint: { cssProperty: false, transform: (a3) => ({ "@media print": { display: a3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: zs }, rowGap: { style: ks }, columnGap: { style: _s }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: mn }, maxWidth: { style: Df }, minWidth: { transform: mn }, height: { transform: mn }, maxHeight: { transform: mn }, minHeight: { transform: mn }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function I1(...a3) {
  const r = a3.reduce((s, c) => s.concat(Object.keys(c)), []), o = new Set(r);
  return a3.every((s) => o.size === Object.keys(s).length);
}
function tS(a3, r) {
  return typeof a3 == "function" ? a3(r) : a3;
}
function eS() {
  function a3(o, s, c, f) {
    const p = { [o]: s, theme: c }, h = f[o];
    if (!h) return { [o]: s };
    const { cssProperty: g = o, themeKey: m, transform: S, style: b } = h;
    if (s == null) return null;
    if (m === "typography" && s === "inherit") return { [o]: s };
    const C = ws(c, m) || {};
    return b ? b(p) : Aa(p, s, (R) => {
      let x = ps(C, S, R);
      return R === x && typeof R == "string" && (x = ps(C, S, `${o}${R === "default" ? "" : gt(R)}`, R)), g === false ? x : { [g]: x };
    });
  }
  function r(o) {
    const { sx: s, theme: c = {} } = o || {};
    if (!s) return null;
    const f = c.unstable_sxConfig ?? ji;
    function p(h) {
      let g = h;
      if (typeof h == "function") g = h(c);
      else if (typeof h != "object") return h;
      if (!g) return null;
      const m = m1(c.breakpoints), S = Object.keys(m);
      let b = m;
      return Object.keys(g).forEach((C) => {
        const z = tS(g[C], c);
        if (z != null) if (typeof z == "object") if (f[C]) b = wi(b, a3(C, z, c, f));
        else {
          const R = Aa({ theme: c }, z, (x) => ({ [C]: x }));
          I1(R, z) ? b[C] = r({ sx: z, theme: c }) : b = wi(b, R);
        }
        else b = wi(b, a3(C, z, c, f));
      }), u1(c, g1(S, b));
    }
    return Array.isArray(s) ? s.map(p) : p(s);
  }
  return r;
}
const wl = eS();
wl.filterProps = ["sx"];
function nS(a3, r) {
  var _a;
  const o = this;
  if (o.vars) {
    if (!((_a = o.colorSchemes) == null ? void 0 : _a[a3]) || typeof o.getColorSchemeSelector != "function") return {};
    let s = o.getColorSchemeSelector(a3);
    return s === "&" ? r : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), { [s]: r });
  }
  return o.palette.mode === a3 ? r : {};
}
function Bf(a3 = {}, ...r) {
  const { breakpoints: o = {}, palette: s = {}, spacing: c, shape: f = {}, ...p } = a3, h = s1(o), g = r0(c);
  let m = yn({ breakpoints: h, direction: "ltr", components: {}, palette: { mode: "light", ...s }, spacing: g, shape: { ...p1, ...f } }, p);
  return m = d1(m), m.applyStyles = nS, m = r.reduce((S, b) => yn(S, b), m), m.unstable_sxConfig = { ...ji, ...p == null ? void 0 : p.unstable_sxConfig }, m.unstable_sx = function(b) {
    return wl({ sx: b, theme: this });
  }, m;
}
function aS(a3) {
  return Object.keys(a3).length === 0;
}
function lS(a3 = null) {
  const r = A.useContext(wf);
  return !r || aS(r) ? a3 : r;
}
const rS = Bf();
function Nf(a3 = rS) {
  return lS(a3);
}
const iS = (a3) => {
  var _a;
  const r = { systemProps: {}, otherProps: {} }, o = ((_a = a3 == null ? void 0 : a3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? ji;
  return Object.keys(a3).forEach((s) => {
    o[s] ? r.systemProps[s] = a3[s] : r.otherProps[s] = a3[s];
  }), r;
};
function i0(a3) {
  const { sx: r, ...o } = a3, { systemProps: s, otherProps: c } = iS(o);
  let f;
  return Array.isArray(r) ? f = [s, ...r] : typeof r == "function" ? f = (...p) => {
    const h = r(...p);
    return ea(h) ? { ...s, ...h } : s;
  } : f = { ...s, ...r }, { ...c, sx: f };
}
const eg = (a3) => a3, oS = () => {
  let a3 = eg;
  return { configure(r) {
    a3 = r;
  }, generate(r) {
    return a3(r);
  }, reset() {
    a3 = eg;
  } };
}, o0 = oS();
function s0(a3) {
  var r, o, s = "";
  if (typeof a3 == "string" || typeof a3 == "number") s += a3;
  else if (typeof a3 == "object") if (Array.isArray(a3)) {
    var c = a3.length;
    for (r = 0; r < c; r++) a3[r] && (o = s0(a3[r])) && (s && (s += " "), s += o);
  } else for (o in a3) a3[o] && (s && (s += " "), s += o);
  return s;
}
function xt() {
  for (var a3, r, o = 0, s = "", c = arguments.length; o < c; o++) (a3 = arguments[o]) && (r = s0(a3)) && (s && (s += " "), s += r);
  return s;
}
function sS(a3 = {}) {
  const { themeId: r, defaultTheme: o, defaultClassName: s = "MuiBox-root", generateClassName: c } = a3, f = e0("div", { shouldForwardProp: (h) => h !== "theme" && h !== "sx" && h !== "as" })(wl);
  return A.forwardRef(function(g, m) {
    const S = Nf(o), { className: b, component: C = "div", ...z } = i0(g);
    return U.jsx(f, { as: C, ref: m, className: xt(b, c ? c(s) : s), theme: r && S[r] || S, ...z });
  });
}
const uS = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function ue(a3, r, o = "Mui") {
  const s = uS[r];
  return s ? `${o}-${s}` : `${o0.generate(a3)}-${r}`;
}
function oe(a3, r, o = "Mui") {
  const s = {};
  return r.forEach((c) => {
    s[c] = ue(a3, c, o);
  }), s;
}
function u0(a3) {
  const { variants: r, ...o } = a3, s = { variants: r, style: Fm(o), isProcessed: true };
  return s.style === o || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = Fm(c.style));
  }), s;
}
const cS = Bf();
function Fc(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
function fS(a3) {
  return a3 ? (r, o) => o[a3] : null;
}
function dS(a3, r, o) {
  a3.theme = mS(a3.theme) ? o : a3.theme[r] || a3.theme;
}
function us(a3, r) {
  const o = typeof r == "function" ? r(a3) : r;
  if (Array.isArray(o)) return o.flatMap((s) => us(a3, s));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed) s = o.style;
    else {
      const { variants: c, ...f } = o;
      s = f;
    }
    return c0(a3, o.variants, [s]);
  }
  return (o == null ? void 0 : o.isProcessed) ? o.style : o;
}
function c0(a3, r, o = []) {
  var _a;
  let s;
  t: for (let c = 0; c < r.length; c += 1) {
    const f = r[c];
    if (typeof f.props == "function") {
      if (s ?? (s = { ...a3, ...a3.ownerState, ownerState: a3.ownerState }), !f.props(s)) continue;
    } else for (const p in f.props) if (a3[p] !== f.props[p] && ((_a = a3.ownerState) == null ? void 0 : _a[p]) !== f.props[p]) continue t;
    typeof f.style == "function" ? (s ?? (s = { ...a3, ...a3.ownerState, ownerState: a3.ownerState }), o.push(f.style(s))) : o.push(f.style);
  }
  return o;
}
function pS(a3 = {}) {
  const { themeId: r, defaultTheme: o = cS, rootShouldForwardProp: s = Fc, slotShouldForwardProp: c = Fc } = a3;
  function f(h) {
    dS(h, r, o);
  }
  return (h, g = {}) => {
    l1(h, (w) => w.filter((V) => V !== wl));
    const { name: m, slot: S, skipVariantsResolver: b, skipSx: C, overridesResolver: z = fS(yS(S)), ...R } = g, x = b !== void 0 ? b : S && S !== "Root" && S !== "root" || false, D = C || false;
    let k = Fc;
    S === "Root" || S === "root" ? k = s : S ? k = c : gS(h) && (k = void 0);
    const q = e0(h, { shouldForwardProp: k, label: hS(), ...R }), B = (w) => {
      if (typeof w == "function" && w.__emotion_real !== w) return function(Y) {
        return us(Y, w);
      };
      if (ea(w)) {
        const V = u0(w);
        return V.variants ? function(at) {
          return us(at, V);
        } : V.style;
      }
      return w;
    }, j = (...w) => {
      const V = [], Y = w.map(B), at = [];
      if (V.push(f), m && z && at.push(function(lt) {
        var _a, _b2;
        const tt = (_b2 = (_a = lt.theme.components) == null ? void 0 : _a[m]) == null ? void 0 : _b2.styleOverrides;
        if (!tt) return null;
        const F = {};
        for (const H in tt) F[H] = us(lt, tt[H]);
        return z(lt, F);
      }), m && !x && at.push(function(lt) {
        var _a, _b2, _c;
        const tt = (_c = (_b2 = (_a = lt.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[m]) == null ? void 0 : _c.variants;
        return tt ? c0(lt, tt) : null;
      }), D || at.push(wl), Array.isArray(Y[0])) {
        const P = Y.shift(), lt = new Array(V.length).fill(""), nt = new Array(at.length).fill("");
        let tt;
        tt = [...lt, ...P, ...nt], tt.raw = [...lt, ...P.raw, ...nt], V.unshift(tt);
      }
      const X = [...V, ...Y, ...at], v = q(...X);
      return h.muiName && (v.muiName = h.muiName), v;
    };
    return q.withConfig && (j.withConfig = q.withConfig), j;
  };
}
function hS(a3, r) {
  return void 0;
}
function mS(a3) {
  for (const r in a3) return false;
  return true;
}
function gS(a3) {
  return typeof a3 == "string" && a3.charCodeAt(0) > 96;
}
function yS(a3) {
  return a3 && a3.charAt(0).toLowerCase() + a3.slice(1);
}
function hs(a3, r) {
  const o = { ...r };
  for (const s in a3) if (Object.prototype.hasOwnProperty.call(a3, s)) {
    const c = s;
    if (c === "components" || c === "slots") o[c] = { ...a3[c], ...o[c] };
    else if (c === "componentsProps" || c === "slotProps") {
      const f = a3[c], p = r[c];
      if (!p) o[c] = f || {};
      else if (!f) o[c] = p;
      else {
        o[c] = { ...p };
        for (const h in f) if (Object.prototype.hasOwnProperty.call(f, h)) {
          const g = h;
          o[c][g] = hs(f[g], p[g]);
        }
      }
    } else o[c] === void 0 && (o[c] = a3[c]);
  }
  return o;
}
function vS(a3) {
  const { theme: r, name: o, props: s } = a3;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps ? s : hs(r.components[o].defaultProps, s);
}
function bS({ props: a3, name: r, defaultTheme: o, themeId: s }) {
  let c = Nf(o);
  return c = c[s] || c, vS({ theme: c, name: r, props: a3 });
}
const Di = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function gr(a3, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a3, o));
}
function Uf(a3, r = 0, o = 1) {
  return gr(a3, r, o);
}
function SS(a3) {
  a3 = a3.slice(1);
  const r = new RegExp(`.{1,${a3.length >= 6 ? 2 : 1}}`, "g");
  let o = a3.match(r);
  return o && o[0].length === 1 && (o = o.map((s) => s + s)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((s, c) => c < 3 ? parseInt(s, 16) : Math.round(parseInt(s, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Wa(a3) {
  if (a3.type) return a3;
  if (a3.charAt(0) === "#") return Wa(SS(a3));
  const r = a3.indexOf("("), o = a3.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o)) throw new Error(Rl(9, a3));
  let s = a3.substring(r + 1, a3.length - 1), c;
  if (o === "color") {
    if (s = s.split(" "), c = s.shift(), s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c)) throw new Error(Rl(10, c));
  } else s = s.split(",");
  return s = s.map((f) => parseFloat(f)), { type: o, values: s, colorSpace: c };
}
const xS = (a3) => {
  const r = Wa(a3);
  return r.values.slice(0, 3).map((o, s) => r.type.includes("hsl") && s !== 0 ? `${o}%` : o).join(" ");
}, Ti = (a3, r) => {
  try {
    return xS(a3);
  } catch {
    return a3;
  }
};
function Ds(a3) {
  const { type: r, colorSpace: o } = a3;
  let { values: s } = a3;
  return r.includes("rgb") ? s = s.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (s[1] = `${s[1]}%`, s[2] = `${s[2]}%`), r.includes("color") ? s = `${o} ${s.join(" ")}` : s = `${s.join(", ")}`, `${r}(${s})`;
}
function f0(a3) {
  a3 = Wa(a3);
  const { values: r } = a3, o = r[0], s = r[1] / 100, c = r[2] / 100, f = s * Math.min(c, 1 - c), p = (m, S = (m + o / 30) % 12) => c - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let h = "rgb";
  const g = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return a3.type === "hsla" && (h += "a", g.push(r[3])), Ds({ type: h, values: g });
}
function cf(a3) {
  a3 = Wa(a3);
  let r = a3.type === "hsl" || a3.type === "hsla" ? Wa(f0(a3)).values : a3.values;
  return r = r.map((o) => (a3.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function TS(a3, r) {
  const o = cf(a3), s = cf(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function Ra(a3, r) {
  return a3 = Wa(a3), r = Uf(r), (a3.type === "rgb" || a3.type === "hsl") && (a3.type += "a"), a3.type === "color" ? a3.values[3] = `/${r}` : a3.values[3] = r, Ds(a3);
}
function Wo(a3, r, o) {
  try {
    return Ra(a3, r);
  } catch {
    return a3;
  }
}
function Ja(a3, r) {
  if (a3 = Wa(a3), r = Uf(r), a3.type.includes("hsl")) a3.values[2] *= 1 - r;
  else if (a3.type.includes("rgb") || a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] *= 1 - r;
  return Ds(a3);
}
function ne(a3, r, o) {
  try {
    return Ja(a3, r);
  } catch {
    return a3;
  }
}
function Ia(a3, r) {
  if (a3 = Wa(a3), r = Uf(r), a3.type.includes("hsl")) a3.values[2] += (100 - a3.values[2]) * r;
  else if (a3.type.includes("rgb")) for (let o = 0; o < 3; o += 1) a3.values[o] += (255 - a3.values[o]) * r;
  else if (a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] += (1 - a3.values[o]) * r;
  return Ds(a3);
}
function ae(a3, r, o) {
  try {
    return Ia(a3, r);
  } catch {
    return a3;
  }
}
function d0(a3, r = 0.15) {
  return cf(a3) > 0.5 ? Ja(a3, r) : Ia(a3, r);
}
function Jo(a3, r, o) {
  try {
    return d0(a3, r);
  } catch {
    return a3;
  }
}
function ng(...a3) {
  return a3.reduce((r, o) => o == null ? r : function(...c) {
    r.apply(this, c), o.apply(this, c);
  }, () => {
  });
}
function p0(a3, r = 166) {
  let o;
  function s(...c) {
    const f = () => {
      a3.apply(this, c);
    };
    clearTimeout(o), o = setTimeout(f, r);
  }
  return s.clear = () => {
    clearTimeout(o);
  }, s;
}
function Je(a3) {
  return a3 && a3.ownerDocument || document;
}
function xr(a3) {
  return Je(a3).defaultView || window;
}
function ff(a3, r) {
  typeof a3 == "function" ? a3(r) : a3 && (a3.current = r);
}
let ag = 0;
function ES(a3) {
  const [r, o] = A.useState(a3), s = a3 || r;
  return A.useEffect(() => {
    r == null && (ag += 1, o(`mui-${ag}`));
  }, [r]), s;
}
const CS = { ...lf }, lg = CS.useId;
function AS(a3) {
  if (lg !== void 0) {
    const r = lg();
    return a3 ?? r;
  }
  return ES(a3);
}
function h0({ controlled: a3, default: r, name: o, state: s = "value" }) {
  const { current: c } = A.useRef(a3 !== void 0), [f, p] = A.useState(r), h = c ? a3 : f, g = A.useCallback((m) => {
    c || p(m);
  }, []);
  return [h, g];
}
function Ie(a3) {
  const r = A.useRef(a3);
  return Di(() => {
    r.current = a3;
  }), A.useRef((...o) => (0, r.current)(...o)).current;
}
function jn(...a3) {
  return A.useMemo(() => a3.every((r) => r == null) ? null : (r) => {
    a3.forEach((o) => {
      ff(o, r);
    });
  }, a3);
}
const rg = {};
function m0(a3, r) {
  const o = A.useRef(rg);
  return o.current === rg && (o.current = a3(r)), o;
}
const RS = [];
function wS(a3) {
  A.useEffect(a3, RS);
}
class Hf {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Hf();
  }
  start(r, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, r);
  }
}
function jf() {
  const a3 = m0(Hf.create).current;
  return wS(a3.disposeEffect), a3;
}
function ms(a3) {
  try {
    return a3.matches(":focus-visible");
  } catch {
  }
  return false;
}
function MS(a3 = window) {
  const r = a3.document.documentElement.clientWidth;
  return a3.innerWidth - r;
}
const OS = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", whiteSpace: "nowrap", width: "1px" };
function pe(a3, r, o = void 0) {
  const s = {};
  for (const c in a3) {
    const f = a3[c];
    let p = "", h = true;
    for (let g = 0; g < f.length; g += 1) {
      const m = f[g];
      m && (p += (h === true ? "" : " ") + r(m), h = false, o && o[m] && (p += " " + o[m]));
    }
    s[c] = p;
  }
  return s;
}
function zS(a3) {
  return typeof a3 == "string";
}
function g0(a3, r, o) {
  return a3 === void 0 || zS(a3) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function Al(a3, r = []) {
  if (a3 === void 0) return {};
  const o = {};
  return Object.keys(a3).filter((s) => s.match(/^on[A-Z]/) && typeof a3[s] == "function" && !r.includes(s)).forEach((s) => {
    o[s] = a3[s];
  }), o;
}
function ig(a3) {
  if (a3 === void 0) return {};
  const r = {};
  return Object.keys(a3).filter((o) => !(o.match(/^on[A-Z]/) && typeof a3[o] == "function")).forEach((o) => {
    r[o] = a3[o];
  }), r;
}
function y0(a3) {
  const { getSlotProps: r, additionalProps: o, externalSlotProps: s, externalForwardedProps: c, className: f } = a3;
  if (!r) {
    const z = xt(o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), R = { ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, x = { ...o, ...c, ...s };
    return z.length > 0 && (x.className = z), Object.keys(R).length > 0 && (x.style = R), { props: x, internalRef: void 0 };
  }
  const p = Al({ ...c, ...s }), h = ig(s), g = ig(c), m = r(p), S = xt(m == null ? void 0 : m.className, o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), b = { ...m == null ? void 0 : m.style, ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, C = { ...m, ...o, ...g, ...h };
  return S.length > 0 && (C.className = S), Object.keys(b).length > 0 && (C.style = b), { props: C, internalRef: m.ref };
}
function v0(a3, r, o) {
  return typeof a3 == "function" ? a3(r, o) : a3;
}
function hn(a3) {
  var _a;
  const { elementType: r, externalSlotProps: o, ownerState: s, skipResolvingSlotProps: c = false, ...f } = a3, p = c ? {} : v0(o, s), { props: h, internalRef: g } = y0({ ...f, externalSlotProps: p }), m = jn(g, p == null ? void 0 : p.ref, (_a = a3.additionalProps) == null ? void 0 : _a.ref);
  return g0(r, { ...h, ref: m }, s);
}
function Li(a3) {
  var _a;
  return parseInt(A.version, 10) >= 19 ? ((_a = a3 == null ? void 0 : a3.props) == null ? void 0 : _a.ref) || null : (a3 == null ? void 0 : a3.ref) || null;
}
const _S = A.createContext(), Lf = () => A.useContext(_S) ?? false, kS = A.createContext(void 0);
function DS(a3) {
  const { theme: r, name: o, props: s } = a3;
  if (!r || !r.components || !r.components[o]) return s;
  const c = r.components[o];
  return c.defaultProps ? hs(c.defaultProps, s) : !c.styleOverrides && !c.variants ? hs(c, s) : s;
}
function BS({ props: a3, name: r }) {
  const o = A.useContext(kS);
  return DS({ props: a3, name: r, theme: { components: o } });
}
const og = { theme: void 0 };
function NS(a3) {
  let r, o;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== o) && (og.theme = c.theme, f = u0(a3(og)), r = f, o = c.theme), f;
  };
}
function US(a3 = "") {
  function r(...s) {
    if (!s.length) return "";
    const c = s[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a3 ? `${a3}-` : ""}${c}${r(...s.slice(1))})` : `, ${c}`;
  }
  return (s, ...c) => `var(--${a3 ? `${a3}-` : ""}${s}${r(...c)})`;
}
const sg = (a3, r, o, s = []) => {
  let c = a3;
  r.forEach((f, p) => {
    p === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = o : c && typeof c == "object" && (c[f] = o) : c && typeof c == "object" && (c[f] || (c[f] = s.includes(f) ? [] : {}), c = c[f]);
  });
}, HS = (a3, r, o) => {
  function s(c, f = [], p = []) {
    Object.entries(c).forEach(([h, g]) => {
      (!o || o && !o([...f, h])) && g != null && (typeof g == "object" && Object.keys(g).length > 0 ? s(g, [...f, h], Array.isArray(g) ? [...p, h] : p) : r([...f, h], g, p));
    });
  }
  s(a3);
}, jS = (a3, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) => a3.includes(s)) || a3[a3.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Wc(a3, r) {
  const { prefix: o, shouldSkipGeneratingVar: s } = r || {}, c = {}, f = {}, p = {};
  return HS(a3, (h, g, m) => {
    if ((typeof g == "string" || typeof g == "number") && (!s || !s(h, g))) {
      const S = `--${o ? `${o}-` : ""}${h.join("-")}`, b = jS(h, g);
      Object.assign(c, { [S]: b }), sg(f, h, `var(${S})`, m), sg(p, h, `var(${S}, ${b})`, m);
    }
  }, (h) => h[0] === "vars"), { css: c, vars: f, varsWithDefaults: p };
}
function LS(a3, r = {}) {
  const { getSelector: o = D, disableCssColorScheme: s, colorSchemeSelector: c } = r, { colorSchemes: f = {}, components: p, defaultColorScheme: h = "light", ...g } = a3, { vars: m, css: S, varsWithDefaults: b } = Wc(g, r);
  let C = b;
  const z = {}, { [h]: R, ...x } = f;
  if (Object.entries(x || {}).forEach(([B, j]) => {
    const { vars: w, css: V, varsWithDefaults: Y } = Wc(j, r);
    C = yn(C, Y), z[B] = { css: V, vars: w };
  }), R) {
    const { css: B, vars: j, varsWithDefaults: w } = Wc(R, r);
    C = yn(C, w), z[h] = { css: B, vars: j };
  }
  function D(B, j) {
    var _a, _b2;
    let w = c;
    if (c === "class" && (w = ".%s"), c === "data" && (w = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (w = `[${c}="%s"]`), B) {
      if (w === "media") return a3.defaultColorScheme === B ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = f[B]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || B})`]: { ":root": j } };
      if (w) return a3.defaultColorScheme === B ? `:root, ${w.replace("%s", String(B))}` : w.replace("%s", String(B));
    }
    return ":root";
  }
  return { vars: C, generateThemeVars: () => {
    let B = { ...m };
    return Object.entries(z).forEach(([, { vars: j }]) => {
      B = yn(B, j);
    }), B;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const B = [], j = a3.defaultColorScheme || "light";
    function w(at, X) {
      Object.keys(X).length && B.push(typeof at == "string" ? { [at]: { ...X } } : at);
    }
    w(o(void 0, { ...S }), S);
    const { [j]: V, ...Y } = z;
    if (V) {
      const { css: at } = V, X = (_b2 = (_a = f[j]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, v = !s && X ? { colorScheme: X, ...at } : { ...at };
      w(o(j, { ...v }), v);
    }
    return Object.entries(Y).forEach(([at, { css: X }]) => {
      var _a2, _b3;
      const v = (_b3 = (_a2 = f[at]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, P = !s && v ? { colorScheme: v, ...X } : { ...X };
      w(o(at, { ...P }), P);
    }), B;
  } };
}
function $S(a3) {
  return function(o) {
    return a3 === "media" ? `@media (prefers-color-scheme: ${o})` : a3 ? a3.startsWith("data-") && !a3.includes("%s") ? `[${a3}="${o}"] &` : a3 === "class" ? `.${o} &` : a3 === "data" ? `[data-${o}] &` : `${a3.replace("%s", o)} &` : "&";
  };
}
function b0() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Oi.white, default: Oi.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const qS = b0();
function S0() {
  return { text: { primary: Oi.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Oi.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const ug = S0();
function cg(a3, r, o, s) {
  const c = s.light || s, f = s.dark || s * 1.5;
  a3[r] || (a3.hasOwnProperty(o) ? a3[r] = a3[o] : r === "light" ? a3.light = Ia(a3.main, c) : r === "dark" && (a3.dark = Ja(a3.main, f)));
}
function YS(a3 = "light") {
  return a3 === "dark" ? { main: fr[200], light: fr[50], dark: fr[400] } : { main: fr[700], light: fr[400], dark: fr[800] };
}
function GS(a3 = "light") {
  return a3 === "dark" ? { main: cr[200], light: cr[50], dark: cr[400] } : { main: cr[500], light: cr[300], dark: cr[700] };
}
function VS(a3 = "light") {
  return a3 === "dark" ? { main: ur[500], light: ur[300], dark: ur[700] } : { main: ur[700], light: ur[400], dark: ur[800] };
}
function XS(a3 = "light") {
  return a3 === "dark" ? { main: dr[400], light: dr[300], dark: dr[700] } : { main: dr[700], light: dr[500], dark: dr[900] };
}
function QS(a3 = "light") {
  return a3 === "dark" ? { main: pr[400], light: pr[300], dark: pr[700] } : { main: pr[800], light: pr[500], dark: pr[900] };
}
function KS(a3 = "light") {
  return a3 === "dark" ? { main: Si[400], light: Si[300], dark: Si[700] } : { main: "#ed6c02", light: Si[500], dark: Si[900] };
}
function $f(a3) {
  const { mode: r = "light", contrastThreshold: o = 3, tonalOffset: s = 0.2, ...c } = a3, f = a3.primary || YS(r), p = a3.secondary || GS(r), h = a3.error || VS(r), g = a3.info || XS(r), m = a3.success || QS(r), S = a3.warning || KS(r);
  function b(x) {
    return TS(x, ug.text.primary) >= o ? ug.text.primary : qS.text.primary;
  }
  const C = ({ color: x, name: D, mainShade: k = 500, lightShade: q = 300, darkShade: B = 700 }) => {
    if (x = { ...x }, !x.main && x[k] && (x.main = x[k]), !x.hasOwnProperty("main")) throw new Error(Rl(11, D ? ` (${D})` : "", k));
    if (typeof x.main != "string") throw new Error(Rl(12, D ? ` (${D})` : "", JSON.stringify(x.main)));
    return cg(x, "light", q, s), cg(x, "dark", B, s), x.contrastText || (x.contrastText = b(x.main)), x;
  };
  let z;
  return r === "light" ? z = b0() : r === "dark" && (z = S0()), yn({ common: { ...Oi }, mode: r, primary: C({ color: f, name: "primary" }), secondary: C({ color: p, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: C({ color: h, name: "error" }), warning: C({ color: S, name: "warning" }), info: C({ color: g, name: "info" }), success: C({ color: m, name: "success" }), grey: ib, contrastThreshold: o, getContrastText: b, augmentColor: C, tonalOffset: s, ...z }, c);
}
function PS(a3) {
  const r = {};
  return Object.entries(a3).forEach((s) => {
    const [c, f] = s;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function ZS(a3, r) {
  return { toolbar: { minHeight: 56, [a3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [a3.up("sm")]: { minHeight: 64 } }, ...r };
}
function FS(a3) {
  return Math.round(a3 * 1e5) / 1e5;
}
const fg = { textTransform: "uppercase" }, dg = '"Roboto", "Helvetica", "Arial", sans-serif';
function WS(a3, r) {
  const { fontFamily: o = dg, fontSize: s = 14, fontWeightLight: c = 300, fontWeightRegular: f = 400, fontWeightMedium: p = 500, fontWeightBold: h = 700, htmlFontSize: g = 16, allVariants: m, pxToRem: S, ...b } = typeof r == "function" ? r(a3) : r, C = s / 14, z = S || ((D) => `${D / g * C}rem`), R = (D, k, q, B, j) => ({ fontFamily: o, fontWeight: D, fontSize: z(k), lineHeight: q, ...o === dg ? { letterSpacing: `${FS(B / k)}em` } : {}, ...j, ...m }), x = { h1: R(c, 96, 1.167, -1.5), h2: R(c, 60, 1.2, -0.5), h3: R(f, 48, 1.167, 0), h4: R(f, 34, 1.235, 0.25), h5: R(f, 24, 1.334, 0), h6: R(p, 20, 1.6, 0.15), subtitle1: R(f, 16, 1.75, 0.15), subtitle2: R(p, 14, 1.57, 0.1), body1: R(f, 16, 1.5, 0.15), body2: R(f, 14, 1.43, 0.15), button: R(p, 14, 1.75, 0.4, fg), caption: R(f, 12, 1.66, 0.4), overline: R(f, 12, 2.66, 1, fg), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return yn({ htmlFontSize: g, pxToRem: z, fontFamily: o, fontSize: s, fontWeightLight: c, fontWeightRegular: f, fontWeightMedium: p, fontWeightBold: h, ...x }, b, { clone: false });
}
const JS = 0.2, IS = 0.14, t2 = 0.12;
function de(...a3) {
  return [`${a3[0]}px ${a3[1]}px ${a3[2]}px ${a3[3]}px rgba(0,0,0,${JS})`, `${a3[4]}px ${a3[5]}px ${a3[6]}px ${a3[7]}px rgba(0,0,0,${IS})`, `${a3[8]}px ${a3[9]}px ${a3[10]}px ${a3[11]}px rgba(0,0,0,${t2})`].join(",");
}
const e2 = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], n2 = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, a2 = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function pg(a3) {
  return `${Math.round(a3)}ms`;
}
function l2(a3) {
  if (!a3) return 0;
  const r = a3 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function r2(a3) {
  const r = { ...n2, ...a3.easing }, o = { ...a2, ...a3.duration };
  return { getAutoHeightDuration: l2, create: (c = ["all"], f = {}) => {
    const { duration: p = o.standard, easing: h = r.easeInOut, delay: g = 0, ...m } = f;
    return (Array.isArray(c) ? c : [c]).map((S) => `${S} ${typeof p == "string" ? p : pg(p)} ${h} ${typeof g == "string" ? g : pg(g)}`).join(",");
  }, ...a3, easing: r, duration: o };
}
const i2 = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function o2(a3) {
  return ea(a3) || typeof a3 > "u" || typeof a3 == "string" || typeof a3 == "boolean" || typeof a3 == "number" || Array.isArray(a3);
}
function x0(a3 = {}) {
  const r = { ...a3 };
  function o(s) {
    const c = Object.entries(s);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !o2(h) || p.startsWith("unstable_") ? delete s[p] : ea(h) && (s[p] = { ...h }, o(s[p]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function df(a3 = {}, ...r) {
  const { breakpoints: o, mixins: s = {}, spacing: c, palette: f = {}, transitions: p = {}, typography: h = {}, shape: g, ...m } = a3;
  if (a3.vars) throw new Error(Rl(20));
  const S = $f(f), b = Bf(a3);
  let C = yn(b, { mixins: ZS(b.breakpoints, s), palette: S, shadows: e2.slice(), typography: WS(S, h), transitions: r2(p), zIndex: { ...i2 } });
  return C = yn(C, m), C = r.reduce((z, R) => yn(z, R), C), C.unstable_sxConfig = { ...ji, ...m == null ? void 0 : m.unstable_sxConfig }, C.unstable_sx = function(R) {
    return wl({ sx: R, theme: this });
  }, C.toRuntimeSource = x0, C;
}
function pf(a3) {
  let r;
  return a3 < 1 ? r = 5.11916 * a3 ** 2 : r = 4.5 * Math.log(a3 + 1) + 2, Math.round(r * 10) / 1e3;
}
const s2 = [...Array(25)].map((a3, r) => {
  if (r === 0) return "none";
  const o = pf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function T0(a3) {
  return { inputPlaceholder: a3 === "dark" ? 0.5 : 0.42, inputUnderline: a3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: a3 === "dark" ? 0.2 : 0.12, switchTrack: a3 === "dark" ? 0.3 : 0.38 };
}
function E0(a3) {
  return a3 === "dark" ? s2 : [];
}
function u2(a3) {
  const { palette: r = { mode: "light" }, opacity: o, overlays: s, ...c } = a3, f = $f(r);
  return { palette: f, opacity: { ...T0(f.mode), ...o }, overlays: s || E0(f.mode), ...c };
}
function c2(a3) {
  var _a;
  return !!a3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a3[0].match(/sxConfig$/) || a3[0] === "palette" && !!((_a = a3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const f2 = (a3) => [...[...Array(25)].map((r, o) => `--${a3 ? `${a3}-` : ""}overlays-${o}`), `--${a3 ? `${a3}-` : ""}palette-AppBar-darkBg`, `--${a3 ? `${a3}-` : ""}palette-AppBar-darkColor`], d2 = (a3) => (r, o) => {
  const s = a3.rootSelector || ":root", c = a3.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (f = `[${c}="%s"]`), a3.defaultColorScheme === r) {
    if (r === "dark") {
      const p = {};
      return f2(a3.cssVarPrefix).forEach((h) => {
        p[h] = o[h], delete o[h];
      }), f === "media" ? { [s]: o, "@media (prefers-color-scheme: dark)": { [s]: p } } : f ? { [f.replace("%s", r)]: p, [`${s}, ${f.replace("%s", r)}`]: o } : { [s]: { ...o, ...p } };
    }
    if (f && f !== "media") return `${s}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media") return { [`@media (prefers-color-scheme: ${String(r)})`]: { [s]: o } };
    if (f) return f.replace("%s", String(r));
  }
  return s;
};
function p2(a3, r) {
  r.forEach((o) => {
    a3[o] || (a3[o] = {});
  });
}
function G(a3, r, o) {
  !a3[r] && o && (a3[r] = o);
}
function Ei(a3) {
  return typeof a3 != "string" || !a3.startsWith("hsl") ? a3 : f0(a3);
}
function Ea(a3, r) {
  `${r}Channel` in a3 || (a3[`${r}Channel`] = Ti(Ei(a3[r])));
}
function h2(a3) {
  return typeof a3 == "number" ? `${a3}px` : typeof a3 == "string" || typeof a3 == "function" || Array.isArray(a3) ? a3 : "8px";
}
const Jn = (a3) => {
  try {
    return a3();
  } catch {
  }
}, m2 = (a3 = "mui") => US(a3);
function Jc(a3, r, o, s) {
  if (!r) return;
  r = r === true ? {} : r;
  const c = s === "dark" ? "dark" : "light";
  if (!o) {
    a3[s] = u2({ ...r, palette: { mode: c, ...r == null ? void 0 : r.palette } });
    return;
  }
  const { palette: f, ...p } = df({ ...o, palette: { mode: c, ...r == null ? void 0 : r.palette } });
  return a3[s] = { ...r, palette: f, opacity: { ...T0(c), ...r == null ? void 0 : r.opacity }, overlays: (r == null ? void 0 : r.overlays) || E0(c) }, p;
}
function g2(a3 = {}, ...r) {
  const { colorSchemes: o = { light: true }, defaultColorScheme: s, disableCssColorScheme: c = false, cssVarPrefix: f = "mui", shouldSkipGeneratingVar: p = c2, colorSchemeSelector: h = o.light && o.dark ? "media" : void 0, rootSelector: g = ":root", ...m } = a3, S = Object.keys(o)[0], b = s || (o.light && S !== "light" ? "light" : S), C = m2(f), { [b]: z, light: R, dark: x, ...D } = o, k = { ...D };
  let q = z;
  if ((b === "dark" && !("dark" in o) || b === "light" && !("light" in o)) && (q = true), !q) throw new Error(Rl(21, b));
  const B = Jc(k, q, m, b);
  R && !k.light && Jc(k, R, void 0, "light"), x && !k.dark && Jc(k, x, void 0, "dark");
  let j = { defaultColorScheme: b, ...B, cssVarPrefix: f, colorSchemeSelector: h, rootSelector: g, getCssVar: C, colorSchemes: k, font: { ...PS(B.typography), ...B.font }, spacing: h2(m.spacing) };
  Object.keys(j.colorSchemes).forEach((X) => {
    const v = j.colorSchemes[X].palette, P = (lt) => {
      const nt = lt.split("-"), tt = nt[1], F = nt[2];
      return C(lt, v[tt][F]);
    };
    if (v.mode === "light" && (G(v.common, "background", "#fff"), G(v.common, "onBackground", "#000")), v.mode === "dark" && (G(v.common, "background", "#000"), G(v.common, "onBackground", "#fff")), p2(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      G(v.Alert, "errorColor", ne(v.error.light, 0.6)), G(v.Alert, "infoColor", ne(v.info.light, 0.6)), G(v.Alert, "successColor", ne(v.success.light, 0.6)), G(v.Alert, "warningColor", ne(v.warning.light, 0.6)), G(v.Alert, "errorFilledBg", P("palette-error-main")), G(v.Alert, "infoFilledBg", P("palette-info-main")), G(v.Alert, "successFilledBg", P("palette-success-main")), G(v.Alert, "warningFilledBg", P("palette-warning-main")), G(v.Alert, "errorFilledColor", Jn(() => v.getContrastText(v.error.main))), G(v.Alert, "infoFilledColor", Jn(() => v.getContrastText(v.info.main))), G(v.Alert, "successFilledColor", Jn(() => v.getContrastText(v.success.main))), G(v.Alert, "warningFilledColor", Jn(() => v.getContrastText(v.warning.main))), G(v.Alert, "errorStandardBg", ae(v.error.light, 0.9)), G(v.Alert, "infoStandardBg", ae(v.info.light, 0.9)), G(v.Alert, "successStandardBg", ae(v.success.light, 0.9)), G(v.Alert, "warningStandardBg", ae(v.warning.light, 0.9)), G(v.Alert, "errorIconColor", P("palette-error-main")), G(v.Alert, "infoIconColor", P("palette-info-main")), G(v.Alert, "successIconColor", P("palette-success-main")), G(v.Alert, "warningIconColor", P("palette-warning-main")), G(v.AppBar, "defaultBg", P("palette-grey-100")), G(v.Avatar, "defaultBg", P("palette-grey-400")), G(v.Button, "inheritContainedBg", P("palette-grey-300")), G(v.Button, "inheritContainedHoverBg", P("palette-grey-A100")), G(v.Chip, "defaultBorder", P("palette-grey-400")), G(v.Chip, "defaultAvatarColor", P("palette-grey-700")), G(v.Chip, "defaultIconColor", P("palette-grey-700")), G(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), G(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), G(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), G(v.LinearProgress, "primaryBg", ae(v.primary.main, 0.62)), G(v.LinearProgress, "secondaryBg", ae(v.secondary.main, 0.62)), G(v.LinearProgress, "errorBg", ae(v.error.main, 0.62)), G(v.LinearProgress, "infoBg", ae(v.info.main, 0.62)), G(v.LinearProgress, "successBg", ae(v.success.main, 0.62)), G(v.LinearProgress, "warningBg", ae(v.warning.main, 0.62)), G(v.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), G(v.Slider, "primaryTrack", ae(v.primary.main, 0.62)), G(v.Slider, "secondaryTrack", ae(v.secondary.main, 0.62)), G(v.Slider, "errorTrack", ae(v.error.main, 0.62)), G(v.Slider, "infoTrack", ae(v.info.main, 0.62)), G(v.Slider, "successTrack", ae(v.success.main, 0.62)), G(v.Slider, "warningTrack", ae(v.warning.main, 0.62));
      const lt = Jo(v.background.default, 0.8);
      G(v.SnackbarContent, "bg", lt), G(v.SnackbarContent, "color", Jn(() => v.getContrastText(lt))), G(v.SpeedDialAction, "fabHoverBg", Jo(v.background.paper, 0.15)), G(v.StepConnector, "border", P("palette-grey-400")), G(v.StepContent, "border", P("palette-grey-400")), G(v.Switch, "defaultColor", P("palette-common-white")), G(v.Switch, "defaultDisabledColor", P("palette-grey-100")), G(v.Switch, "primaryDisabledColor", ae(v.primary.main, 0.62)), G(v.Switch, "secondaryDisabledColor", ae(v.secondary.main, 0.62)), G(v.Switch, "errorDisabledColor", ae(v.error.main, 0.62)), G(v.Switch, "infoDisabledColor", ae(v.info.main, 0.62)), G(v.Switch, "successDisabledColor", ae(v.success.main, 0.62)), G(v.Switch, "warningDisabledColor", ae(v.warning.main, 0.62)), G(v.TableCell, "border", ae(Wo(v.divider, 1), 0.88)), G(v.Tooltip, "bg", Wo(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      G(v.Alert, "errorColor", ae(v.error.light, 0.6)), G(v.Alert, "infoColor", ae(v.info.light, 0.6)), G(v.Alert, "successColor", ae(v.success.light, 0.6)), G(v.Alert, "warningColor", ae(v.warning.light, 0.6)), G(v.Alert, "errorFilledBg", P("palette-error-dark")), G(v.Alert, "infoFilledBg", P("palette-info-dark")), G(v.Alert, "successFilledBg", P("palette-success-dark")), G(v.Alert, "warningFilledBg", P("palette-warning-dark")), G(v.Alert, "errorFilledColor", Jn(() => v.getContrastText(v.error.dark))), G(v.Alert, "infoFilledColor", Jn(() => v.getContrastText(v.info.dark))), G(v.Alert, "successFilledColor", Jn(() => v.getContrastText(v.success.dark))), G(v.Alert, "warningFilledColor", Jn(() => v.getContrastText(v.warning.dark))), G(v.Alert, "errorStandardBg", ne(v.error.light, 0.9)), G(v.Alert, "infoStandardBg", ne(v.info.light, 0.9)), G(v.Alert, "successStandardBg", ne(v.success.light, 0.9)), G(v.Alert, "warningStandardBg", ne(v.warning.light, 0.9)), G(v.Alert, "errorIconColor", P("palette-error-main")), G(v.Alert, "infoIconColor", P("palette-info-main")), G(v.Alert, "successIconColor", P("palette-success-main")), G(v.Alert, "warningIconColor", P("palette-warning-main")), G(v.AppBar, "defaultBg", P("palette-grey-900")), G(v.AppBar, "darkBg", P("palette-background-paper")), G(v.AppBar, "darkColor", P("palette-text-primary")), G(v.Avatar, "defaultBg", P("palette-grey-600")), G(v.Button, "inheritContainedBg", P("palette-grey-800")), G(v.Button, "inheritContainedHoverBg", P("palette-grey-700")), G(v.Chip, "defaultBorder", P("palette-grey-700")), G(v.Chip, "defaultAvatarColor", P("palette-grey-300")), G(v.Chip, "defaultIconColor", P("palette-grey-300")), G(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), G(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), G(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), G(v.LinearProgress, "primaryBg", ne(v.primary.main, 0.5)), G(v.LinearProgress, "secondaryBg", ne(v.secondary.main, 0.5)), G(v.LinearProgress, "errorBg", ne(v.error.main, 0.5)), G(v.LinearProgress, "infoBg", ne(v.info.main, 0.5)), G(v.LinearProgress, "successBg", ne(v.success.main, 0.5)), G(v.LinearProgress, "warningBg", ne(v.warning.main, 0.5)), G(v.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), G(v.Slider, "primaryTrack", ne(v.primary.main, 0.5)), G(v.Slider, "secondaryTrack", ne(v.secondary.main, 0.5)), G(v.Slider, "errorTrack", ne(v.error.main, 0.5)), G(v.Slider, "infoTrack", ne(v.info.main, 0.5)), G(v.Slider, "successTrack", ne(v.success.main, 0.5)), G(v.Slider, "warningTrack", ne(v.warning.main, 0.5));
      const lt = Jo(v.background.default, 0.98);
      G(v.SnackbarContent, "bg", lt), G(v.SnackbarContent, "color", Jn(() => v.getContrastText(lt))), G(v.SpeedDialAction, "fabHoverBg", Jo(v.background.paper, 0.15)), G(v.StepConnector, "border", P("palette-grey-600")), G(v.StepContent, "border", P("palette-grey-600")), G(v.Switch, "defaultColor", P("palette-grey-300")), G(v.Switch, "defaultDisabledColor", P("palette-grey-600")), G(v.Switch, "primaryDisabledColor", ne(v.primary.main, 0.55)), G(v.Switch, "secondaryDisabledColor", ne(v.secondary.main, 0.55)), G(v.Switch, "errorDisabledColor", ne(v.error.main, 0.55)), G(v.Switch, "infoDisabledColor", ne(v.info.main, 0.55)), G(v.Switch, "successDisabledColor", ne(v.success.main, 0.55)), G(v.Switch, "warningDisabledColor", ne(v.warning.main, 0.55)), G(v.TableCell, "border", ne(Wo(v.divider, 1), 0.68)), G(v.Tooltip, "bg", Wo(v.grey[700], 0.92));
    }
    Ea(v.background, "default"), Ea(v.background, "paper"), Ea(v.common, "background"), Ea(v.common, "onBackground"), Ea(v, "divider"), Object.keys(v).forEach((lt) => {
      const nt = v[lt];
      lt !== "tonalOffset" && nt && typeof nt == "object" && (nt.main && G(v[lt], "mainChannel", Ti(Ei(nt.main))), nt.light && G(v[lt], "lightChannel", Ti(Ei(nt.light))), nt.dark && G(v[lt], "darkChannel", Ti(Ei(nt.dark))), nt.contrastText && G(v[lt], "contrastTextChannel", Ti(Ei(nt.contrastText))), lt === "text" && (Ea(v[lt], "primary"), Ea(v[lt], "secondary")), lt === "action" && (nt.active && Ea(v[lt], "active"), nt.selected && Ea(v[lt], "selected")));
    });
  }), j = r.reduce((X, v) => yn(X, v), j);
  const w = { prefix: f, disableCssColorScheme: c, shouldSkipGeneratingVar: p, getSelector: d2(j) }, { vars: V, generateThemeVars: Y, generateStyleSheets: at } = LS(j, w);
  return j.vars = V, Object.entries(j.colorSchemes[j.defaultColorScheme]).forEach(([X, v]) => {
    j[X] = v;
  }), j.generateThemeVars = Y, j.generateStyleSheets = at, j.generateSpacing = function() {
    return r0(m.spacing, kf(this));
  }, j.getColorSchemeSelector = $S(h), j.spacing = j.generateSpacing(), j.shouldSkipGeneratingVar = p, j.unstable_sxConfig = { ...ji, ...m == null ? void 0 : m.unstable_sxConfig }, j.unstable_sx = function(v) {
    return wl({ sx: v, theme: this });
  }, j.toRuntimeSource = x0, j;
}
function hg(a3, r, o) {
  a3.colorSchemes && o && (a3.colorSchemes[r] = { ...o !== true && o, palette: $f({ ...o === true ? {} : o.palette, mode: r }) });
}
function C0(a3 = {}, ...r) {
  const { palette: o, cssVariables: s = false, colorSchemes: c = o ? void 0 : { light: true }, defaultColorScheme: f = o == null ? void 0 : o.mode, ...p } = a3, h = f || "light", g = c == null ? void 0 : c[h], m = { ...c, ...o ? { [h]: { ...typeof g != "boolean" && g, palette: o } } : void 0 };
  if (s === false) {
    if (!("colorSchemes" in a3)) return df(a3, ...r);
    let S = o;
    "palette" in a3 || m[h] && (m[h] !== true ? S = m[h].palette : h === "dark" && (S = { mode: "dark" }));
    const b = df({ ...a3, palette: S }, ...r);
    return b.defaultColorScheme = h, b.colorSchemes = m, b.palette.mode === "light" && (b.colorSchemes.light = { ...m.light !== true && m.light, palette: b.palette }, hg(b, "dark", m.dark)), b.palette.mode === "dark" && (b.colorSchemes.dark = { ...m.dark !== true && m.dark, palette: b.palette }, hg(b, "light", m.light)), b;
  }
  return !o && !("light" in m) && h === "light" && (m.light = true), g2({ ...p, colorSchemes: m, defaultColorScheme: h, ...typeof s != "boolean" && s }, ...r);
}
const qf = C0();
function $i() {
  const a3 = Nf(qf);
  return a3[xs] || a3;
}
function y2({ props: a3, name: r }) {
  return bS({ props: a3, name: r, defaultTheme: qf, themeId: xs });
}
function Yf(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
const Gf = (a3) => Yf(a3) && a3 !== "classes", yt = pS({ themeId: xs, defaultTheme: qf, rootShouldForwardProp: Gf });
function v2() {
  return i0;
}
const Yt = NS;
function ge(a3) {
  return BS(a3);
}
function b2(a3) {
  return ue("MuiSvgIcon", a3);
}
oe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const S2 = (a3) => {
  const { color: r, fontSize: o, classes: s } = a3, c = { root: ["root", r !== "inherit" && `color${gt(r)}`, `fontSize${gt(o)}`] };
  return pe(c, b2, s);
}, x2 = yt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.color !== "inherit" && r[`color${gt(o.color)}`], r[`fontSize${gt(o.fontSize)}`]];
} })(Yt(({ theme: a3 }) => {
  var _a, _b2, _c, _d, _e, _f2, _g2, _h, _i2, _j, _k, _l, _m2, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = a3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c = (_b2 = (a3.vars ?? a3).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = a3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g2 = a3.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = a3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((a3.vars ?? a3).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a2, _b3;
    return { props: { color: r }, style: { color: (_b3 = (_a2 = (a3.vars ?? a3).palette) == null ? void 0 : _a2[r]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k = (a3.vars ?? a3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m2 = (a3.vars ?? a3).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), hf = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSvgIcon" }), { children: c, className: f, color: p = "inherit", component: h = "svg", fontSize: g = "medium", htmlColor: m, inheritViewBox: S = false, titleAccess: b, viewBox: C = "0 0 24 24", ...z } = s, R = A.isValidElement(c) && c.type === "svg", x = { ...s, color: p, component: h, fontSize: g, instanceFontSize: r.fontSize, inheritViewBox: S, viewBox: C, hasSvgAsChild: R }, D = {};
  S || (D.viewBox = C);
  const k = S2(x);
  return U.jsxs(x2, { as: h, className: xt(k.root, f), focusable: "false", color: m, "aria-hidden": b ? void 0 : true, role: b ? "img" : void 0, ref: o, ...D, ...z, ...R && c.props, ownerState: x, children: [R ? c.props.children : c, b ? U.jsx("title", { children: b }) : null] });
});
hf.muiName = "SvgIcon";
function la(a3, r) {
  function o(s, c) {
    return U.jsx(hf, { "data-testid": `${r}Icon`, ref: c, ...s, children: a3 });
  }
  return o.muiName = hf.muiName, A.memo(A.forwardRef(o));
}
function A0(a3, r) {
  if (a3 == null) return {};
  var o = {};
  for (var s in a3) if ({}.hasOwnProperty.call(a3, s)) {
    if (r.indexOf(s) !== -1) continue;
    o[s] = a3[s];
  }
  return o;
}
function mf(a3, r) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, mf(a3, r);
}
function R0(a3, r) {
  a3.prototype = Object.create(r.prototype), a3.prototype.constructor = a3, mf(a3, r);
}
var w0 = $g();
const Io = Lg(w0), mg = { disabled: false }, gs = na.createContext(null);
var T2 = function(r) {
  return r.scrollTop;
}, Ci = "unmounted", xl = "exited", Tl = "entering", yr = "entered", gf = "exiting", ra = function(a3) {
  R0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = c, h = p && !p.isMounting ? s.enter : s.appear, g;
    return f.appearStatus = null, s.in ? h ? (g = xl, f.appearStatus = Tl) : g = yr : s.unmountOnExit || s.mountOnEnter ? g = Ci : g = xl, f.state = { status: g }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var p = c.in;
    return p && f.status === Ci ? { status: xl } : null;
  };
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, o.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var p = this.state.status;
      this.props.in ? p !== Tl && p !== yr && (f = Tl) : (p === Tl || p === yr) && (f = gf);
    }
    this.updateStatus(false, f);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var c = this.props.timeout, f, p, h;
    return f = p = h = c, c != null && typeof c != "number" && (f = c.exit, p = c.enter, h = c.appear !== void 0 ? c.appear : p), { exit: f, enter: p, appear: h };
  }, o.updateStatus = function(c, f) {
    if (c === void 0 && (c = false), f !== null) if (this.cancelNextCallback(), f === Tl) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var p = this.props.nodeRef ? this.props.nodeRef.current : Io.findDOMNode(this);
        p && T2(p);
      }
      this.performEnter(c);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === xl && this.setState({ status: Ci });
  }, o.performEnter = function(c) {
    var f = this, p = this.props.enter, h = this.context ? this.context.isMounting : c, g = this.props.nodeRef ? [h] : [Io.findDOMNode(this), h], m = g[0], S = g[1], b = this.getTimeouts(), C = h ? b.appear : b.enter;
    if (!c && !p || mg.disabled) {
      this.safeSetState({ status: yr }, function() {
        f.props.onEntered(m);
      });
      return;
    }
    this.props.onEnter(m, S), this.safeSetState({ status: Tl }, function() {
      f.props.onEntering(m, S), f.onTransitionEnd(C, function() {
        f.safeSetState({ status: yr }, function() {
          f.props.onEntered(m, S);
        });
      });
    });
  }, o.performExit = function() {
    var c = this, f = this.props.exit, p = this.getTimeouts(), h = this.props.nodeRef ? void 0 : Io.findDOMNode(this);
    if (!f || mg.disabled) {
      this.safeSetState({ status: xl }, function() {
        c.props.onExited(h);
      });
      return;
    }
    this.props.onExit(h), this.safeSetState({ status: gf }, function() {
      c.props.onExiting(h), c.onTransitionEnd(p.exit, function() {
        c.safeSetState({ status: xl }, function() {
          c.props.onExited(h);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, o.setNextCallback = function(c) {
    var f = this, p = true;
    return this.nextCallback = function(h) {
      p && (p = false, f.nextCallback = null, c(h));
    }, this.nextCallback.cancel = function() {
      p = false;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var p = this.props.nodeRef ? this.props.nodeRef.current : Io.findDOMNode(this), h = c == null && !this.props.addEndListener;
    if (!p || h) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var g = this.props.nodeRef ? [this.nextCallback] : [p, this.nextCallback], m = g[0], S = g[1];
      this.props.addEndListener(m, S);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, o.render = function() {
    var c = this.state.status;
    if (c === Ci) return null;
    var f = this.props, p = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var h = A0(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return na.createElement(gs.Provider, { value: null }, typeof p == "function" ? p(c, h) : na.cloneElement(na.Children.only(p), h));
  }, r;
}(na.Component);
ra.contextType = gs;
ra.propTypes = {};
function hr() {
}
ra.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: hr, onEntering: hr, onEntered: hr, onExit: hr, onExiting: hr, onExited: hr };
ra.UNMOUNTED = Ci;
ra.EXITED = xl;
ra.ENTERING = Tl;
ra.ENTERED = yr;
ra.EXITING = gf;
function E2(a3) {
  if (a3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a3;
}
function Vf(a3, r) {
  var o = function(f) {
    return r && A.isValidElement(f) ? r(f) : f;
  }, s = /* @__PURE__ */ Object.create(null);
  return a3 && A.Children.map(a3, function(c) {
    return c;
  }).forEach(function(c) {
    s[c.key] = o(c);
  }), s;
}
function C2(a3, r) {
  a3 = a3 || {}, r = r || {};
  function o(S) {
    return S in r ? r[S] : a3[S];
  }
  var s = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in a3) f in r ? c.length && (s[f] = c, c = []) : c.push(f);
  var p, h = {};
  for (var g in r) {
    if (s[g]) for (p = 0; p < s[g].length; p++) {
      var m = s[g][p];
      h[s[g][p]] = o(m);
    }
    h[g] = o(g);
  }
  for (p = 0; p < c.length; p++) h[c[p]] = o(c[p]);
  return h;
}
function Cl(a3, r, o) {
  return o[r] != null ? o[r] : a3.props[r];
}
function A2(a3, r) {
  return Vf(a3.children, function(o) {
    return A.cloneElement(o, { onExited: r.bind(null, o), in: true, appear: Cl(o, "appear", a3), enter: Cl(o, "enter", a3), exit: Cl(o, "exit", a3) });
  });
}
function R2(a3, r, o) {
  var s = Vf(a3.children), c = C2(r, s);
  return Object.keys(c).forEach(function(f) {
    var p = c[f];
    if (A.isValidElement(p)) {
      var h = f in r, g = f in s, m = r[f], S = A.isValidElement(m) && !m.props.in;
      g && (!h || S) ? c[f] = A.cloneElement(p, { onExited: o.bind(null, p), in: true, exit: Cl(p, "exit", a3), enter: Cl(p, "enter", a3) }) : !g && h && !S ? c[f] = A.cloneElement(p, { in: false }) : g && h && A.isValidElement(m) && (c[f] = A.cloneElement(p, { onExited: o.bind(null, p), in: m.props.in, exit: Cl(p, "exit", a3), enter: Cl(p, "enter", a3) }));
    }
  }), c;
}
var w2 = Object.values || function(a3) {
  return Object.keys(a3).map(function(r) {
    return a3[r];
  });
}, M2 = { component: "div", childFactory: function(r) {
  return r;
} }, Xf = function(a3) {
  R0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = f.handleExited.bind(E2(f));
    return f.state = { contextValue: { isMounting: true }, handleExited: p, firstRender: true }, f;
  }
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, o.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(c, f) {
    var p = f.children, h = f.handleExited, g = f.firstRender;
    return { children: g ? A2(c, h) : R2(c, p, h), firstRender: false };
  }, o.handleExited = function(c, f) {
    var p = Vf(this.props.children);
    c.key in p || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(h) {
      var g = fs({}, h.children);
      return delete g[c.key], { children: g };
    }));
  }, o.render = function() {
    var c = this.props, f = c.component, p = c.childFactory, h = A0(c, ["component", "childFactory"]), g = this.state.contextValue, m = w2(this.state.children).map(p);
    return delete h.appear, delete h.enter, delete h.exit, f === null ? na.createElement(gs.Provider, { value: g }, m) : na.createElement(gs.Provider, { value: g }, na.createElement(f, h, m));
  }, r;
}(na.Component);
Xf.propTypes = {};
Xf.defaultProps = M2;
const M0 = (a3) => a3.scrollTop;
function ys(a3, r) {
  const { timeout: o, easing: s, style: c = {} } = a3;
  return { duration: c.transitionDuration ?? (typeof o == "number" ? o : o[r.mode] || 0), easing: c.transitionTimingFunction ?? (typeof s == "object" ? s[r.mode] : s), delay: c.transitionDelay };
}
function O2(a3) {
  return ue("MuiPaper", a3);
}
oe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const z2 = (a3) => {
  const { square: r, elevation: o, variant: s, classes: c } = a3, f = { root: ["root", s, !r && "rounded", s === "elevation" && `elevation${o}`] };
  return pe(f, O2, c);
}, _2 = yt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], !o.square && r.rounded, o.variant === "elevation" && r[`elevation${o.elevation}`]];
} })(Yt(({ theme: a3 }) => ({ backgroundColor: (a3.vars || a3).palette.background.paper, color: (a3.vars || a3).palette.text.primary, transition: a3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: a3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(a3.vars || a3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Bs = A.forwardRef(function(r, o) {
  var _a;
  const s = ge({ props: r, name: "MuiPaper" }), c = $i(), { className: f, component: p = "div", elevation: h = 1, square: g = false, variant: m = "elevation", ...S } = s, b = { ...s, component: p, elevation: h, square: g, variant: m }, C = z2(b);
  return U.jsx(_2, { as: p, ownerState: b, className: xt(C.root, f), ref: o, ...S, style: { ...m === "elevation" && { "--Paper-shadow": (c.vars || c).shadows[h], ...c.vars && { "--Paper-overlay": (_a = c.vars.overlays) == null ? void 0 : _a[h] }, ...!c.vars && c.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Ra("#fff", pf(h))}, ${Ra("#fff", pf(h))})` } }, ...S.style } });
});
function Un(a3, r) {
  const { className: o, elementType: s, ownerState: c, externalForwardedProps: f, internalForwardedProps: p, shouldForwardComponentProp: h = false, ...g } = r, { component: m, slots: S = { [a3]: void 0 }, slotProps: b = { [a3]: void 0 }, ...C } = f, z = S[a3] || s, R = v0(b[a3], c), { props: { component: x, ...D }, internalRef: k } = y0({ className: o, ...g, externalForwardedProps: a3 === "root" ? C : void 0, externalSlotProps: R }), q = jn(k, R == null ? void 0 : R.ref, r.ref), B = a3 === "root" ? x || m : x, j = g0(z, { ...a3 === "root" && !m && !S[a3] && p, ...a3 !== "root" && !S[a3] && p, ...D, ...B && !h && { as: B }, ...B && h && { component: B }, ref: q }, c);
  return [z, j];
}
class vs {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new vs();
  }
  static use() {
    const r = m0(vs.create).current, [o, s] = A.useState(false);
    return r.shouldMount = o, r.setShouldMount = s, A.useEffect(r.mountEffect, [o]), r;
  }
  mount() {
    return this.mounted || (this.mounted = D2(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...r);
    });
  }
}
function k2() {
  return vs.use();
}
function D2() {
  let a3, r;
  const o = new Promise((s, c) => {
    a3 = s, r = c;
  });
  return o.resolve = a3, o.reject = r, o;
}
function B2(a3) {
  const { className: r, classes: o, pulsate: s = false, rippleX: c, rippleY: f, rippleSize: p, in: h, onExited: g, timeout: m } = a3, [S, b] = A.useState(false), C = xt(r, o.ripple, o.rippleVisible, s && o.ripplePulsate), z = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c }, R = xt(o.child, S && o.childLeaving, s && o.childPulsate);
  return !h && !S && b(true), A.useEffect(() => {
    if (!h && g != null) {
      const x = setTimeout(g, m);
      return () => {
        clearTimeout(x);
      };
    }
  }, [g, h, m]), U.jsx("span", { className: C, style: z, children: U.jsx("span", { className: R }) });
}
const Bn = oe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yf = 550, N2 = 80, U2 = Ni`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, H2 = Ni`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, j2 = Ni`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, L2 = yt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), $2 = yt(B2, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Bn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${U2};
    animation-duration: ${yf}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  &.${Bn.ripplePulsate} {
    animation-duration: ${({ theme: a3 }) => a3.transitions.duration.shorter}ms;
  }

  & .${Bn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Bn.childLeaving} {
    opacity: 0;
    animation-name: ${H2};
    animation-duration: ${yf}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  & .${Bn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${j2};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, q2 = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTouchRipple" }), { center: c = false, classes: f = {}, className: p, ...h } = s, [g, m] = A.useState([]), S = A.useRef(0), b = A.useRef(null);
  A.useEffect(() => {
    b.current && (b.current(), b.current = null);
  }, [g]);
  const C = A.useRef(false), z = jf(), R = A.useRef(null), x = A.useRef(null), D = A.useCallback((j) => {
    const { pulsate: w, rippleX: V, rippleY: Y, rippleSize: at, cb: X } = j;
    m((v) => [...v, U.jsx($2, { classes: { ripple: xt(f.ripple, Bn.ripple), rippleVisible: xt(f.rippleVisible, Bn.rippleVisible), ripplePulsate: xt(f.ripplePulsate, Bn.ripplePulsate), child: xt(f.child, Bn.child), childLeaving: xt(f.childLeaving, Bn.childLeaving), childPulsate: xt(f.childPulsate, Bn.childPulsate) }, timeout: yf, pulsate: w, rippleX: V, rippleY: Y, rippleSize: at }, S.current)]), S.current += 1, b.current = X;
  }, [f]), k = A.useCallback((j = {}, w = {}, V = () => {
  }) => {
    const { pulsate: Y = false, center: at = c || w.pulsate, fakeElement: X = false } = w;
    if ((j == null ? void 0 : j.type) === "mousedown" && C.current) {
      C.current = false;
      return;
    }
    (j == null ? void 0 : j.type) === "touchstart" && (C.current = true);
    const v = X ? null : x.current, P = v ? v.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let lt, nt, tt;
    if (at || j === void 0 || j.clientX === 0 && j.clientY === 0 || !j.clientX && !j.touches) lt = Math.round(P.width / 2), nt = Math.round(P.height / 2);
    else {
      const { clientX: F, clientY: H } = j.touches && j.touches.length > 0 ? j.touches[0] : j;
      lt = Math.round(F - P.left), nt = Math.round(H - P.top);
    }
    if (at) tt = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), tt % 2 === 0 && (tt += 1);
    else {
      const F = Math.max(Math.abs((v ? v.clientWidth : 0) - lt), lt) * 2 + 2, H = Math.max(Math.abs((v ? v.clientHeight : 0) - nt), nt) * 2 + 2;
      tt = Math.sqrt(F ** 2 + H ** 2);
    }
    (j == null ? void 0 : j.touches) ? R.current === null && (R.current = () => {
      D({ pulsate: Y, rippleX: lt, rippleY: nt, rippleSize: tt, cb: V });
    }, z.start(N2, () => {
      R.current && (R.current(), R.current = null);
    })) : D({ pulsate: Y, rippleX: lt, rippleY: nt, rippleSize: tt, cb: V });
  }, [c, D, z]), q = A.useCallback(() => {
    k({}, { pulsate: true });
  }, [k]), B = A.useCallback((j, w) => {
    if (z.clear(), (j == null ? void 0 : j.type) === "touchend" && R.current) {
      R.current(), R.current = null, z.start(0, () => {
        B(j, w);
      });
      return;
    }
    R.current = null, m((V) => V.length > 0 ? V.slice(1) : V), b.current = w;
  }, [z]);
  return A.useImperativeHandle(o, () => ({ pulsate: q, start: k, stop: B }), [q, k, B]), U.jsx(L2, { className: xt(Bn.root, f.root, p), ref: x, ...h, children: U.jsx(Xf, { component: null, exit: true, children: g }) });
});
function Y2(a3) {
  return ue("MuiButtonBase", a3);
}
const G2 = oe("MuiButtonBase", ["root", "disabled", "focusVisible"]), V2 = (a3) => {
  const { disabled: r, focusVisible: o, focusVisibleClassName: s, classes: c } = a3, p = pe({ root: ["root", r && "disabled", o && "focusVisible"] }, Y2, c);
  return o && s && (p.root += ` ${s}`), p;
}, X2 = yt("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (a3, r) => r.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${G2.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), qi = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiButtonBase" }), { action: c, centerRipple: f = false, children: p, className: h, component: g = "button", disabled: m = false, disableRipple: S = false, disableTouchRipple: b = false, focusRipple: C = false, focusVisibleClassName: z, LinkComponent: R = "a", onBlur: x, onClick: D, onContextMenu: k, onDragLeave: q, onFocus: B, onFocusVisible: j, onKeyDown: w, onKeyUp: V, onMouseDown: Y, onMouseLeave: at, onMouseUp: X, onTouchEnd: v, onTouchMove: P, onTouchStart: lt, tabIndex: nt = 0, TouchRippleProps: tt, touchRippleRef: F, type: H, ...J } = s, W = A.useRef(null), et = k2(), E = jn(et.ref, F), [$, it] = A.useState(false);
  m && $ && it(false), A.useImperativeHandle(c, () => ({ focusVisible: () => {
    it(true), W.current.focus();
  } }), []);
  const st = et.shouldMount && !S && !m;
  A.useEffect(() => {
    $ && C && !S && et.pulsate();
  }, [S, C, $, et]);
  const rt = Ca(et, "start", Y, b), St = Ca(et, "stop", k, b), ht = Ca(et, "stop", q, b), Jt = Ca(et, "stop", X, b), Et = Ca(et, "stop", (bt) => {
    $ && bt.preventDefault(), at && at(bt);
  }, b), Ut = Ca(et, "start", lt, b), Mt = Ca(et, "stop", v, b), ce = Ca(et, "stop", P, b), It = Ca(et, "stop", (bt) => {
    ms(bt.target) || it(false), x && x(bt);
  }, false), Lt = Ie((bt) => {
    W.current || (W.current = bt.currentTarget), ms(bt.target) && (it(true), j && j(bt)), B && B(bt);
  }), Oe = () => {
    const bt = W.current;
    return g && g !== "button" && !(bt.tagName === "A" && bt.href);
  }, bn = Ie((bt) => {
    C && !bt.repeat && $ && bt.key === " " && et.stop(bt, () => {
      et.start(bt);
    }), bt.target === bt.currentTarget && Oe() && bt.key === " " && bt.preventDefault(), w && w(bt), bt.target === bt.currentTarget && Oe() && bt.key === "Enter" && !m && (bt.preventDefault(), D && D(bt));
  }), Ye = Ie((bt) => {
    C && bt.key === " " && $ && !bt.defaultPrevented && et.stop(bt, () => {
      et.pulsate(bt);
    }), V && V(bt), D && bt.target === bt.currentTarget && Oe() && bt.key === " " && !bt.defaultPrevented && D(bt);
  });
  let Ht = g;
  Ht === "button" && (J.href || J.to) && (Ht = R);
  const fe = {};
  Ht === "button" ? (fe.type = H === void 0 ? "button" : H, fe.disabled = m) : (!J.href && !J.to && (fe.role = "button"), m && (fe["aria-disabled"] = m));
  const sn = jn(o, W), Ue = { ...s, centerRipple: f, component: g, disabled: m, disableRipple: S, disableTouchRipple: b, focusRipple: C, tabIndex: nt, focusVisible: $ }, tn = V2(Ue);
  return U.jsxs(X2, { as: Ht, className: xt(tn.root, h), ownerState: Ue, onBlur: It, onClick: D, onContextMenu: St, onFocus: Lt, onKeyDown: bn, onKeyUp: Ye, onMouseDown: rt, onMouseLeave: Et, onMouseUp: Jt, onDragLeave: ht, onTouchEnd: Mt, onTouchMove: ce, onTouchStart: Ut, ref: sn, tabIndex: m ? -1 : nt, type: H, ...fe, ...J, children: [p, st ? U.jsx(q2, { ref: E, center: f, ...tt }) : null] });
});
function Ca(a3, r, o, s = false) {
  return Ie((c) => (o && o(c), s || a3[r](c), true));
}
function Q2(a3) {
  return typeof a3.main == "string";
}
function K2(a3, r = []) {
  if (!Q2(a3)) return false;
  for (const o of r) if (!a3.hasOwnProperty(o) || typeof a3[o] != "string") return false;
  return true;
}
function vn(a3 = []) {
  return ([, r]) => r && K2(r, a3);
}
function P2(a3) {
  return ue("MuiAlert", a3);
}
const gg = oe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function Z2(a3) {
  return ue("MuiCircularProgress", a3);
}
oe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Za = 44, vf = Ni`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bf = Ni`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, F2 = typeof vf != "string" ? Of`
        animation: ${vf} 1.4s linear infinite;
      ` : null, W2 = typeof bf != "string" ? Of`
        animation: ${bf} 1.4s ease-in-out infinite;
      ` : null, J2 = (a3) => {
  const { classes: r, variant: o, color: s, disableShrink: c } = a3, f = { root: ["root", o, `color${gt(s)}`], svg: ["svg"], circle: ["circle", `circle${gt(o)}`, c && "circleDisableShrink"] };
  return pe(f, Z2, r);
}, I2 = yt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`color${gt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: F2 || { animation: `${vf} 1.4s linear infinite` } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } }))] }))), tx = yt("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (a3, r) => r.svg })({ display: "block" }), ex = yt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.circle, r[`circle${gt(o.variant)}`], o.disableShrink && r.circleDisableShrink];
} })(Yt(({ theme: a3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: W2 || { animation: `${bf} 1.4s ease-in-out infinite` } }] }))), nx = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiCircularProgress" }), { className: c, color: f = "primary", disableShrink: p = false, size: h = 40, style: g, thickness: m = 3.6, value: S = 0, variant: b = "indeterminate", ...C } = s, z = { ...s, color: f, disableShrink: p, size: h, thickness: m, value: S, variant: b }, R = J2(z), x = {}, D = {}, k = {};
  if (b === "determinate") {
    const q = 2 * Math.PI * ((Za - m) / 2);
    x.strokeDasharray = q.toFixed(3), k["aria-valuenow"] = Math.round(S), x.strokeDashoffset = `${((100 - S) / 100 * q).toFixed(3)}px`, D.transform = "rotate(-90deg)";
  }
  return U.jsx(I2, { className: xt(R.root, c), style: { width: h, height: h, ...D, ...g }, ownerState: z, ref: o, role: "progressbar", ...k, ...C, children: U.jsx(tx, { className: R.svg, ownerState: z, viewBox: `${Za / 2} ${Za / 2} ${Za} ${Za}`, children: U.jsx(ex, { className: R.circle, style: x, ownerState: z, cx: Za, cy: Za, r: (Za - m) / 2, fill: "none", strokeWidth: m }) }) });
});
function ax(a3) {
  return ue("MuiIconButton", a3);
}
const yg = oe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), lx = (a3) => {
  const { classes: r, disabled: o, color: s, edge: c, size: f, loading: p } = a3, h = { root: ["root", p && "loading", o && "disabled", s !== "default" && `color${gt(s)}`, c && `edge${gt(c)}`, `size${gt(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return pe(h, ax, r);
}, rx = yt(qi, { name: "MuiIconButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.loading && r.loading, o.color !== "default" && r[`color${gt(o.color)}`], o.edge && r[`edge${gt(o.edge)}`], r[`size${gt(o.size)}`]];
} })(Yt(({ theme: a3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: a3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (a3.vars || a3).palette.action.active, transition: a3.transitions.create("background-color", { duration: a3.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette.action.active, a3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Yt(({ theme: a3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${(a3.vars || a3).palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra((a3.vars || a3).palette[r].main, a3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: a3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: a3.typography.pxToRem(28) } }], [`&.${yg.disabled}`]: { backgroundColor: "transparent", color: (a3.vars || a3).palette.action.disabled }, [`&.${yg.loading}`]: { color: "transparent" } }))), ix = yt("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (a3, r) => r.loadingIndicator })(({ theme: a3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (a3.vars || a3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), ox = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiIconButton" }), { edge: c = false, children: f, className: p, color: h = "default", disabled: g = false, disableFocusRipple: m = false, size: S = "medium", id: b, loading: C = null, loadingIndicator: z, ...R } = s, x = AS(b), D = z ?? U.jsx(nx, { "aria-labelledby": x, color: "inherit", size: 16 }), k = { ...s, edge: c, color: h, disabled: g, disableFocusRipple: m, loading: C, loadingIndicator: D, size: S }, q = lx(k);
  return U.jsxs(rx, { id: C ? x : b, className: xt(q.root, p), centerRipple: true, focusRipple: !m, disabled: g || C, ref: o, ...R, ownerState: k, children: [typeof C == "boolean" && U.jsx("span", { className: q.loadingWrapper, style: { display: "contents" }, children: U.jsx(ix, { className: q.loadingIndicator, ownerState: k, children: C && D }) }), f] });
}), sx = la(U.jsx("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), ux = la(U.jsx("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), cx = la(U.jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), fx = la(U.jsx("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), dx = la(U.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), px = (a3) => {
  const { variant: r, color: o, severity: s, classes: c } = a3, f = { root: ["root", `color${gt(o || s)}`, `${r}${gt(o || s)}`, `${r}`], icon: ["icon"], message: ["message"], action: ["action"] };
  return pe(f, P2, c);
}, hx = yt(Bs, { name: "MuiAlert", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`${o.variant}${gt(o.color || o.severity)}`]];
} })(Yt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? Ja : Ia, o = a3.palette.mode === "light" ? Ia : Ja;
  return { ...a3.typography.body2, backgroundColor: "transparent", display: "flex", padding: "6px 16px", variants: [...Object.entries(a3.palette).filter(vn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "standard" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), backgroundColor: a3.vars ? a3.vars.palette.Alert[`${s}StandardBg`] : o(a3.palette[s].light, 0.9), [`& .${gg.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(vn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "outlined" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), border: `1px solid ${(a3.vars || a3).palette[s].light}`, [`& .${gg.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(vn(["dark"])).map(([s]) => ({ props: { colorSeverity: s, variant: "filled" }, style: { fontWeight: a3.typography.fontWeightMedium, ...a3.vars ? { color: a3.vars.palette.Alert[`${s}FilledColor`], backgroundColor: a3.vars.palette.Alert[`${s}FilledBg`] } : { backgroundColor: a3.palette.mode === "dark" ? a3.palette[s].dark : a3.palette[s].main, color: a3.palette.getContrastText(a3.palette[s].main) } } }))] };
})), mx = yt("div", { name: "MuiAlert", slot: "Icon", overridesResolver: (a3, r) => r.icon })({ marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: 0.9 }), gx = yt("div", { name: "MuiAlert", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0", minWidth: 0, overflow: "auto" }), yx = yt("div", { name: "MuiAlert", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8 }), vg = { success: U.jsx(sx, { fontSize: "inherit" }), warning: U.jsx(ux, { fontSize: "inherit" }), error: U.jsx(cx, { fontSize: "inherit" }), info: U.jsx(fx, { fontSize: "inherit" }) }, vx = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAlert" }), { action: c, children: f, className: p, closeText: h = "Close", color: g, components: m = {}, componentsProps: S = {}, icon: b, iconMapping: C = vg, onClose: z, role: R = "alert", severity: x = "success", slotProps: D = {}, slots: k = {}, variant: q = "standard", ...B } = s, j = { ...s, color: g, severity: x, variant: q, colorSeverity: g || x }, w = px(j), V = { slots: { closeButton: m.CloseButton, closeIcon: m.CloseIcon, ...k }, slotProps: { ...S, ...D } }, [Y, at] = Un("root", { ref: o, shouldForwardComponentProp: true, className: xt(w.root, p), elementType: hx, externalForwardedProps: { ...V, ...B }, ownerState: j, additionalProps: { role: R, elevation: 0 } }), [X, v] = Un("icon", { className: w.icon, elementType: mx, externalForwardedProps: V, ownerState: j }), [P, lt] = Un("message", { className: w.message, elementType: gx, externalForwardedProps: V, ownerState: j }), [nt, tt] = Un("action", { className: w.action, elementType: yx, externalForwardedProps: V, ownerState: j }), [F, H] = Un("closeButton", { elementType: ox, externalForwardedProps: V, ownerState: j }), [J, W] = Un("closeIcon", { elementType: dx, externalForwardedProps: V, ownerState: j });
  return U.jsxs(Y, { ...at, children: [b !== false ? U.jsx(X, { ...v, children: b || C[x] || vg[x] }) : null, U.jsx(P, { ...lt, children: f }), c != null ? U.jsx(nt, { ...tt, children: c }) : null, c == null && z ? U.jsx(nt, { ...tt, children: U.jsx(F, { size: "small", "aria-label": h, title: h, color: "inherit", onClick: z, ...H, children: U.jsx(J, { fontSize: "small", ...W }) }) }) : null] });
});
function bx(a3) {
  return ue("MuiTypography", a3);
}
oe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Sx = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, xx = v2(), Tx = (a3) => {
  const { align: r, gutterBottom: o, noWrap: s, paragraph: c, variant: f, classes: p } = a3, h = { root: ["root", f, a3.align !== "inherit" && `align${gt(r)}`, o && "gutterBottom", s && "noWrap", c && "paragraph"] };
  return pe(h, bx, p);
}, Ex = yt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.variant && r[o.variant], o.align !== "inherit" && r[`align${gt(o.align)}`], o.noWrap && r.noWrap, o.gutterBottom && r.gutterBottom, o.paragraph && r.paragraph];
} })(Yt(({ theme: a3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(a3.typography).filter(([r, o]) => r !== "inherit" && o && typeof o == "object").map(([r, o]) => ({ props: { variant: r }, style: o })), ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(((_a = a3.palette) == null ? void 0 : _a.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${gt(r)}` }, style: { color: (a3.vars || a3).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), bg = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, Tr = A.forwardRef(function(r, o) {
  const { color: s, ...c } = ge({ props: r, name: "MuiTypography" }), f = !Sx[s], p = xx({ ...c, ...f && { color: s } }), { align: h = "inherit", className: g, component: m, gutterBottom: S = false, noWrap: b = false, paragraph: C = false, variant: z = "body1", variantMapping: R = bg, ...x } = p, D = { ...p, align: h, color: s, className: g, component: m, gutterBottom: S, noWrap: b, paragraph: C, variant: z, variantMapping: R }, k = m || (C ? "p" : R[z] || bg[z]) || "span", q = Tx(D);
  return U.jsx(Ex, { as: k, ref: o, className: xt(q.root, g), ...x, ownerState: D, style: { ...h !== "inherit" && { "--Typography-textAlign": h }, ...x.style } });
});
function Cx(a3) {
  return ue("MuiAppBar", a3);
}
oe("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Ax = (a3) => {
  const { color: r, position: o, classes: s } = a3, c = { root: ["root", `color${gt(r)}`, `position${gt(o)}`] };
  return pe(c, Cx, s);
}, Sg = (a3, r) => a3 ? `${a3 == null ? void 0 : a3.replace(")", "")}, ${r})` : r, Rx = yt(Bs, { name: "MuiAppBar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`position${gt(o.position)}`], r[`color${gt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", flexShrink: 0, variants: [{ props: { position: "fixed" }, style: { position: "fixed", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0, "@media print": { position: "absolute" } } }, { props: { position: "absolute" }, style: { position: "absolute", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "sticky" }, style: { position: "sticky", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "static" }, style: { position: "static" } }, { props: { position: "relative" }, style: { position: "relative" } }, { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } }, { props: { color: "default" }, style: { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[100], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[100]), ...a3.applyStyles("dark", { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[900], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[900]) }) } }, ...Object.entries(a3.palette).filter(vn(["contrastText"])).map(([r]) => ({ props: { color: r }, style: { "--AppBar-background": (a3.vars ?? a3).palette[r].main, "--AppBar-color": (a3.vars ?? a3).palette[r].contrastText } })), { props: (r) => r.enableColorOnDark === true && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" } }, { props: (r) => r.enableColorOnDark === false && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundColor: a3.vars ? Sg(a3.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null, color: a3.vars ? Sg(a3.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null }) } }, { props: { color: "transparent" }, style: { "--AppBar-background": "transparent", "--AppBar-color": "inherit", backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundImage: "none" }) } }] }))), wx = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAppBar" }), { className: c, color: f = "primary", enableColorOnDark: p = false, position: h = "fixed", ...g } = s, m = { ...s, color: f, position: h, enableColorOnDark: p }, S = Ax(m);
  return U.jsx(Rx, { square: true, component: "header", ownerState: m, elevation: 4, className: xt(S.root, c, h === "fixed" && "mui-fixed"), ref: o, ...g });
});
function Mx(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
const Ox = A.forwardRef(function(r, o) {
  const { children: s, container: c, disablePortal: f = false } = r, [p, h] = A.useState(null), g = jn(A.isValidElement(s) ? Li(s) : null, o);
  if (Di(() => {
    f || h(Mx(c) || document.body);
  }, [c, f]), Di(() => {
    if (p && !f) return ff(o, p), () => {
      ff(o, null);
    };
  }, [o, p, f]), f) {
    if (A.isValidElement(s)) {
      const m = { ref: g };
      return A.cloneElement(s, m);
    }
    return s;
  }
  return p && w0.createPortal(s, p);
});
function cs(a3) {
  return typeof a3 == "string";
}
function O0({ props: a3, states: r, muiFormControl: o }) {
  return r.reduce((s, c) => (s[c] = a3[c], o && typeof a3[c] > "u" && (s[c] = o[c]), s), {});
}
const zx = A.createContext(void 0);
function Qf() {
  return A.useContext(zx);
}
const _x = la(U.jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function kx(a3) {
  return ue("MuiAvatar", a3);
}
oe("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Dx = (a3) => {
  const { classes: r, variant: o, colorDefault: s } = a3;
  return pe({ root: ["root", o, s && "colorDefault"], img: ["img"], fallback: ["fallback"] }, kx, r);
}, Bx = yt("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], o.colorDefault && r.colorDefault];
} })(Yt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: a3.typography.fontFamily, fontSize: a3.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (a3.vars || a3).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (a3.vars || a3).palette.background.default, ...a3.vars ? { backgroundColor: a3.vars.palette.Avatar.defaultBg } : { backgroundColor: a3.palette.grey[400], ...a3.applyStyles("dark", { backgroundColor: a3.palette.grey[600] }) } } }] }))), Nx = yt("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (a3, r) => r.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), Ux = yt(_x, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (a3, r) => r.fallback })({ width: "75%", height: "75%" });
function Hx({ crossOrigin: a3, referrerPolicy: r, src: o, srcSet: s }) {
  const [c, f] = A.useState(false);
  return A.useEffect(() => {
    if (!o && !s) return;
    f(false);
    let p = true;
    const h = new Image();
    return h.onload = () => {
      p && f("loaded");
    }, h.onerror = () => {
      p && f("error");
    }, h.crossOrigin = a3, h.referrerPolicy = r, h.src = o, s && (h.srcset = s), () => {
      p = false;
    };
  }, [a3, r, o, s]), c;
}
const jx = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAvatar" }), { alt: c, children: f, className: p, component: h = "div", slots: g = {}, slotProps: m = {}, imgProps: S, sizes: b, src: C, srcSet: z, variant: R = "circular", ...x } = s;
  let D = null;
  const k = { ...s, component: h, variant: R }, q = Hx({ ...S, ...typeof m.img == "function" ? m.img(k) : m.img, src: C, srcSet: z }), B = C || z, j = B && q !== "error";
  k.colorDefault = !j, delete k.ownerState;
  const w = Dx(k), [V, Y] = Un("img", { className: w.img, elementType: Nx, externalForwardedProps: { slots: g, slotProps: { img: { ...S, ...m.img } } }, additionalProps: { alt: c, src: C, srcSet: z, sizes: b }, ownerState: k });
  return j ? D = U.jsx(V, { ...Y }) : f || f === 0 ? D = f : B && c ? D = c[0] : D = U.jsx(Ux, { ownerState: k, className: w.fallback }), U.jsx(Bx, { as: h, className: xt(w.root, p), ref: o, ...x, ownerState: k, children: D });
}), Lx = { entering: { opacity: 1 }, entered: { opacity: 1 } }, $x = A.forwardRef(function(r, o) {
  const s = $i(), c = { enter: s.transitions.duration.enteringScreen, exit: s.transitions.duration.leavingScreen }, { addEndListener: f, appear: p = true, children: h, easing: g, in: m, onEnter: S, onEntered: b, onEntering: C, onExit: z, onExited: R, onExiting: x, style: D, timeout: k = c, TransitionComponent: q = ra, ...B } = r, j = A.useRef(null), w = jn(j, Li(h), o), V = (tt) => (F) => {
    if (tt) {
      const H = j.current;
      F === void 0 ? tt(H) : tt(H, F);
    }
  }, Y = V(C), at = V((tt, F) => {
    M0(tt);
    const H = ys({ style: D, timeout: k, easing: g }, { mode: "enter" });
    tt.style.webkitTransition = s.transitions.create("opacity", H), tt.style.transition = s.transitions.create("opacity", H), S && S(tt, F);
  }), X = V(b), v = V(x), P = V((tt) => {
    const F = ys({ style: D, timeout: k, easing: g }, { mode: "exit" });
    tt.style.webkitTransition = s.transitions.create("opacity", F), tt.style.transition = s.transitions.create("opacity", F), z && z(tt);
  }), lt = V(R), nt = (tt) => {
    f && f(j.current, tt);
  };
  return U.jsx(q, { appear: p, in: m, nodeRef: j, onEnter: at, onEntered: X, onEntering: Y, onExit: P, onExited: lt, onExiting: v, addEndListener: nt, timeout: k, ...B, children: (tt, { ownerState: F, ...H }) => A.cloneElement(h, { style: { opacity: 0, visibility: tt === "exited" && !m ? "hidden" : void 0, ...Lx[tt], ...D, ...h.props.style }, ref: w, ...H }) });
});
function qx(a3) {
  return ue("MuiBackdrop", a3);
}
oe("MuiBackdrop", ["root", "invisible"]);
const Yx = (a3) => {
  const { classes: r, invisible: o } = a3;
  return pe({ root: ["root", o && "invisible"] }, qx, r);
}, Gx = yt("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.invisible && r.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), Vx = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiBackdrop" }), { children: c, className: f, component: p = "div", invisible: h = false, open: g, components: m = {}, componentsProps: S = {}, slotProps: b = {}, slots: C = {}, TransitionComponent: z, transitionDuration: R, ...x } = s, D = { ...s, component: p, invisible: h }, k = Yx(D), q = { transition: z, root: m.Root, ...C }, B = { ...S, ...b }, j = { slots: q, slotProps: B }, [w, V] = Un("root", { elementType: Gx, externalForwardedProps: j, className: xt(k.root, f), ownerState: D }), [Y, at] = Un("transition", { elementType: $x, externalForwardedProps: j, ownerState: D });
  return U.jsx(Y, { in: g, timeout: R, ...x, ...at, children: U.jsx(w, { "aria-hidden": true, ...V, classes: k, ref: o, children: c }) });
}), Xx = oe("MuiBox", ["root"]), Qx = C0(), Fa = sS({ themeId: xs, defaultTheme: Qx, defaultClassName: Xx.root, generateClassName: o0.generate });
function Kx(a3) {
  return ue("PrivateSwitchBase", a3);
}
oe("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Px = (a3) => {
  const { classes: r, checked: o, disabled: s, edge: c } = a3, f = { root: ["root", o && "checked", s && "disabled", c && `edge${gt(c)}`], input: ["input"] };
  return pe(f, Kx, r);
}, Zx = yt(qi)({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "start" && r.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "end" && r.size !== "small", style: { marginRight: -12 } }] }), Fx = yt("input", { shouldForwardProp: Gf })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), Wx = A.forwardRef(function(r, o) {
  const { autoFocus: s, checked: c, checkedIcon: f, className: p, defaultChecked: h, disabled: g, disableFocusRipple: m = false, edge: S = false, icon: b, id: C, inputProps: z, inputRef: R, name: x, onBlur: D, onChange: k, onFocus: q, readOnly: B, required: j = false, tabIndex: w, type: V, value: Y, ...at } = r, [X, v] = h0({ controlled: c, default: !!h, name: "SwitchBase", state: "checked" }), P = Qf(), lt = (et) => {
    q && q(et), P && P.onFocus && P.onFocus(et);
  }, nt = (et) => {
    D && D(et), P && P.onBlur && P.onBlur(et);
  }, tt = (et) => {
    if (et.nativeEvent.defaultPrevented) return;
    const E = et.target.checked;
    v(E), k && k(et, E);
  };
  let F = g;
  P && typeof F > "u" && (F = P.disabled);
  const H = V === "checkbox" || V === "radio", J = { ...r, checked: X, disabled: F, disableFocusRipple: m, edge: S }, W = Px(J);
  return U.jsxs(Zx, { component: "span", className: xt(W.root, p), centerRipple: true, focusRipple: !m, disabled: F, tabIndex: null, role: void 0, onFocus: lt, onBlur: nt, ownerState: J, ref: o, ...at, children: [U.jsx(Fx, { autoFocus: s, checked: c, defaultChecked: h, className: W.input, disabled: F, id: H ? C : void 0, name: x, onChange: tt, readOnly: B, ref: R, required: j, ownerState: J, tabIndex: w, type: V, ...V === "checkbox" && Y === void 0 ? {} : { value: Y }, ...z }), X ? f : b] });
});
function xg(a3) {
  return a3.substring(2).toLowerCase();
}
function Jx(a3, r) {
  return r.documentElement.clientWidth < a3.clientX || r.documentElement.clientHeight < a3.clientY;
}
function Ix(a3) {
  const { children: r, disableReactTree: o = false, mouseEvent: s = "onClick", onClickAway: c, touchEvent: f = "onTouchEnd" } = a3, p = A.useRef(false), h = A.useRef(null), g = A.useRef(false), m = A.useRef(false);
  A.useEffect(() => (setTimeout(() => {
    g.current = true;
  }, 0), () => {
    g.current = false;
  }), []);
  const S = jn(Li(r), h), b = Ie((R) => {
    const x = m.current;
    m.current = false;
    const D = Je(h.current);
    if (!g.current || !h.current || "clientX" in R && Jx(R, D)) return;
    if (p.current) {
      p.current = false;
      return;
    }
    let k;
    R.composedPath ? k = R.composedPath().includes(h.current) : k = !D.documentElement.contains(R.target) || h.current.contains(R.target), !k && (o || !x) && c(R);
  }), C = (R) => (x) => {
    m.current = true;
    const D = r.props[R];
    D && D(x);
  }, z = { ref: S };
  return f !== false && (z[f] = C(f)), A.useEffect(() => {
    if (f !== false) {
      const R = xg(f), x = Je(h.current), D = () => {
        p.current = true;
      };
      return x.addEventListener(R, b), x.addEventListener("touchmove", D), () => {
        x.removeEventListener(R, b), x.removeEventListener("touchmove", D);
      };
    }
  }, [b, f]), s !== false && (z[s] = C(s)), A.useEffect(() => {
    if (s !== false) {
      const R = xg(s), x = Je(h.current);
      return x.addEventListener(R, b), () => {
        x.removeEventListener(R, b);
      };
    }
  }, [b, s]), A.cloneElement(r, z);
}
function tT(a3) {
  const r = Je(a3);
  return r.body === a3 ? xr(a3).innerWidth > r.documentElement.clientWidth : a3.scrollHeight > a3.clientHeight;
}
function Mi(a3, r) {
  r ? a3.setAttribute("aria-hidden", "true") : a3.removeAttribute("aria-hidden");
}
function Tg(a3) {
  return parseInt(xr(a3).getComputedStyle(a3).paddingRight, 10) || 0;
}
function eT(a3) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a3.tagName), s = a3.tagName === "INPUT" && a3.getAttribute("type") === "hidden";
  return o || s;
}
function Eg(a3, r, o, s, c) {
  const f = [r, o, ...s];
  [].forEach.call(a3.children, (p) => {
    const h = !f.includes(p), g = !eT(p);
    h && g && Mi(p, c);
  });
}
function Ic(a3, r) {
  let o = -1;
  return a3.some((s, c) => r(s) ? (o = c, true) : false), o;
}
function nT(a3, r) {
  const o = [], s = a3.container;
  if (!r.disableScrollLock) {
    if (tT(s)) {
      const p = MS(xr(s));
      o.push({ value: s.style.paddingRight, property: "padding-right", el: s }), s.style.paddingRight = `${Tg(s) + p}px`;
      const h = Je(s).querySelectorAll(".mui-fixed");
      [].forEach.call(h, (g) => {
        o.push({ value: g.style.paddingRight, property: "padding-right", el: g }), g.style.paddingRight = `${Tg(g) + p}px`;
      });
    }
    let f;
    if (s.parentNode instanceof DocumentFragment) f = Je(s).body;
    else {
      const p = s.parentElement, h = xr(s);
      f = (p == null ? void 0 : p.nodeName) === "HTML" && h.getComputedStyle(p).overflowY === "scroll" ? p : s;
    }
    o.push({ value: f.style.overflow, property: "overflow", el: f }, { value: f.style.overflowX, property: "overflow-x", el: f }, { value: f.style.overflowY, property: "overflow-y", el: f }), f.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({ value: f, el: p, property: h }) => {
      f ? p.style.setProperty(h, f) : p.style.removeProperty(h);
    });
  };
}
function aT(a3) {
  const r = [];
  return [].forEach.call(a3.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && r.push(o);
  }), r;
}
class lT {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, o) {
    let s = this.modals.indexOf(r);
    if (s !== -1) return s;
    s = this.modals.length, this.modals.push(r), r.modalRef && Mi(r.modalRef, false);
    const c = aT(o);
    Eg(o, r.mount, r.modalRef, c, true);
    const f = Ic(this.containers, (p) => p.container === o);
    return f !== -1 ? (this.containers[f].modals.push(r), s) : (this.containers.push({ modals: [r], container: o, restore: null, hiddenSiblings: c }), s);
  }
  mount(r, o) {
    const s = Ic(this.containers, (f) => f.modals.includes(r)), c = this.containers[s];
    c.restore || (c.restore = nT(c, o));
  }
  remove(r, o = true) {
    const s = this.modals.indexOf(r);
    if (s === -1) return s;
    const c = Ic(this.containers, (p) => p.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(s, 1), f.modals.length === 0) f.restore && f.restore(), r.modalRef && Mi(r.modalRef, o), Eg(f.container, r.mount, r.modalRef, f.hiddenSiblings, false), this.containers.splice(c, 1);
    else {
      const p = f.modals[f.modals.length - 1];
      p.modalRef && Mi(p.modalRef, false);
    }
    return s;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const rT = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function iT(a3) {
  const r = parseInt(a3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a3.contentEditable === "true" || (a3.nodeName === "AUDIO" || a3.nodeName === "VIDEO" || a3.nodeName === "DETAILS") && a3.getAttribute("tabindex") === null ? 0 : a3.tabIndex : r;
}
function oT(a3) {
  if (a3.tagName !== "INPUT" || a3.type !== "radio" || !a3.name) return false;
  const r = (s) => a3.ownerDocument.querySelector(`input[type="radio"]${s}`);
  let o = r(`[name="${a3.name}"]:checked`);
  return o || (o = r(`[name="${a3.name}"]`)), o !== a3;
}
function sT(a3) {
  return !(a3.disabled || a3.tagName === "INPUT" && a3.type === "hidden" || oT(a3));
}
function uT(a3) {
  const r = [], o = [];
  return Array.from(a3.querySelectorAll(rT)).forEach((s, c) => {
    const f = iT(s);
    f === -1 || !sT(s) || (f === 0 ? r.push(s) : o.push({ documentOrder: c, tabIndex: f, node: s }));
  }), o.sort((s, c) => s.tabIndex === c.tabIndex ? s.documentOrder - c.documentOrder : s.tabIndex - c.tabIndex).map((s) => s.node).concat(r);
}
function cT() {
  return true;
}
function fT(a3) {
  const { children: r, disableAutoFocus: o = false, disableEnforceFocus: s = false, disableRestoreFocus: c = false, getTabbable: f = uT, isEnabled: p = cT, open: h } = a3, g = A.useRef(false), m = A.useRef(null), S = A.useRef(null), b = A.useRef(null), C = A.useRef(null), z = A.useRef(false), R = A.useRef(null), x = jn(Li(r), R), D = A.useRef(null);
  A.useEffect(() => {
    !h || !R.current || (z.current = !o);
  }, [o, h]), A.useEffect(() => {
    if (!h || !R.current) return;
    const B = Je(R.current);
    return R.current.contains(B.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), z.current && R.current.focus()), () => {
      c || (b.current && b.current.focus && (g.current = true, b.current.focus()), b.current = null);
    };
  }, [h]), A.useEffect(() => {
    if (!h || !R.current) return;
    const B = Je(R.current), j = (Y) => {
      D.current = Y, !(s || !p() || Y.key !== "Tab") && B.activeElement === R.current && Y.shiftKey && (g.current = true, S.current && S.current.focus());
    }, w = () => {
      var _a, _b2;
      const Y = R.current;
      if (Y === null) return;
      if (!B.hasFocus() || !p() || g.current) {
        g.current = false;
        return;
      }
      if (Y.contains(B.activeElement) || s && B.activeElement !== m.current && B.activeElement !== S.current) return;
      if (B.activeElement !== C.current) C.current = null;
      else if (C.current !== null) return;
      if (!z.current) return;
      let at = [];
      if ((B.activeElement === m.current || B.activeElement === S.current) && (at = f(R.current)), at.length > 0) {
        const X = !!(((_a = D.current) == null ? void 0 : _a.shiftKey) && ((_b2 = D.current) == null ? void 0 : _b2.key) === "Tab"), v = at[0], P = at[at.length - 1];
        typeof v != "string" && typeof P != "string" && (X ? P.focus() : v.focus());
      } else Y.focus();
    };
    B.addEventListener("focusin", w), B.addEventListener("keydown", j, true);
    const V = setInterval(() => {
      B.activeElement && B.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(V), B.removeEventListener("focusin", w), B.removeEventListener("keydown", j, true);
    };
  }, [o, s, c, p, h, f]);
  const k = (B) => {
    b.current === null && (b.current = B.relatedTarget), z.current = true, C.current = B.target;
    const j = r.props.onFocus;
    j && j(B);
  }, q = (B) => {
    b.current === null && (b.current = B.relatedTarget), z.current = true;
  };
  return U.jsxs(A.Fragment, { children: [U.jsx("div", { tabIndex: h ? 0 : -1, onFocus: q, ref: m, "data-testid": "sentinelStart" }), A.cloneElement(r, { ref: x, onFocus: k }), U.jsx("div", { tabIndex: h ? 0 : -1, onFocus: q, ref: S, "data-testid": "sentinelEnd" })] });
}
function dT(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
function pT(a3) {
  return a3 ? a3.props.hasOwnProperty("in") : false;
}
const Cg = () => {
}, ts = new lT();
function hT(a3) {
  const { container: r, disableEscapeKeyDown: o = false, disableScrollLock: s = false, closeAfterTransition: c = false, onTransitionEnter: f, onTransitionExited: p, children: h, onClose: g, open: m, rootRef: S } = a3, b = A.useRef({}), C = A.useRef(null), z = A.useRef(null), R = jn(z, S), [x, D] = A.useState(!m), k = pT(h);
  let q = true;
  (a3["aria-hidden"] === "false" || a3["aria-hidden"] === false) && (q = false);
  const B = () => Je(C.current), j = () => (b.current.modalRef = z.current, b.current.mount = C.current, b.current), w = () => {
    ts.mount(j(), { disableScrollLock: s }), z.current && (z.current.scrollTop = 0);
  }, V = Ie(() => {
    const F = dT(r) || B().body;
    ts.add(j(), F), z.current && w();
  }), Y = () => ts.isTopModal(j()), at = Ie((F) => {
    C.current = F, F && (m && Y() ? w() : z.current && Mi(z.current, q));
  }), X = A.useCallback(() => {
    ts.remove(j(), q);
  }, [q]);
  A.useEffect(() => () => {
    X();
  }, [X]), A.useEffect(() => {
    m ? V() : (!k || !c) && X();
  }, [m, X, k, c, V]);
  const v = (F) => (H) => {
    var _a;
    (_a = F.onKeyDown) == null ? void 0 : _a.call(F, H), !(H.key !== "Escape" || H.which === 229 || !Y()) && (o || (H.stopPropagation(), g && g(H, "escapeKeyDown")));
  }, P = (F) => (H) => {
    var _a;
    (_a = F.onClick) == null ? void 0 : _a.call(F, H), H.target === H.currentTarget && g && g(H, "backdropClick");
  };
  return { getRootProps: (F = {}) => {
    const H = Al(a3);
    delete H.onTransitionEnter, delete H.onTransitionExited;
    const J = { ...H, ...F };
    return { role: "presentation", ...J, onKeyDown: v(J), ref: R };
  }, getBackdropProps: (F = {}) => {
    const H = F;
    return { "aria-hidden": true, ...H, onClick: P(H), open: m };
  }, getTransitionProps: () => {
    const F = () => {
      D(false), f && f();
    }, H = () => {
      D(true), p && p(), c && X();
    };
    return { onEnter: ng(F, (h == null ? void 0 : h.props.onEnter) ?? Cg), onExited: ng(H, (h == null ? void 0 : h.props.onExited) ?? Cg) };
  }, rootRef: R, portalRef: at, isTopModal: Y, exited: x, hasTransition: k };
}
function mT(a3) {
  return ue("MuiModal", a3);
}
oe("MuiModal", ["root", "hidden", "backdrop"]);
const gT = (a3) => {
  const { open: r, exited: o, classes: s } = a3;
  return pe({ root: ["root", !r && o && "hidden"], backdrop: ["backdrop"] }, mT, s);
}, yT = yt("div", { name: "MuiModal", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, !o.open && o.exited && r.hidden];
} })(Yt(({ theme: a3 }) => ({ position: "fixed", zIndex: (a3.vars || a3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: "hidden" } }] }))), vT = yt(Vx, { name: "MuiModal", slot: "Backdrop", overridesResolver: (a3, r) => r.backdrop })({ zIndex: -1 }), bT = A.forwardRef(function(r, o) {
  const s = ge({ name: "MuiModal", props: r }), { BackdropComponent: c = vT, BackdropProps: f, classes: p, className: h, closeAfterTransition: g = false, children: m, container: S, component: b, components: C = {}, componentsProps: z = {}, disableAutoFocus: R = false, disableEnforceFocus: x = false, disableEscapeKeyDown: D = false, disablePortal: k = false, disableRestoreFocus: q = false, disableScrollLock: B = false, hideBackdrop: j = false, keepMounted: w = false, onBackdropClick: V, onClose: Y, onTransitionEnter: at, onTransitionExited: X, open: v, slotProps: P = {}, slots: lt = {}, theme: nt, ...tt } = s, F = { ...s, closeAfterTransition: g, disableAutoFocus: R, disableEnforceFocus: x, disableEscapeKeyDown: D, disablePortal: k, disableRestoreFocus: q, disableScrollLock: B, hideBackdrop: j, keepMounted: w }, { getRootProps: H, getBackdropProps: J, getTransitionProps: W, portalRef: et, isTopModal: E, exited: $, hasTransition: it } = hT({ ...F, rootRef: o }), st = { ...F, exited: $ }, rt = gT(st), St = {};
  if (m.props.tabIndex === void 0 && (St.tabIndex = "-1"), it) {
    const { onEnter: It, onExited: Lt } = W();
    St.onEnter = It, St.onExited = Lt;
  }
  const ht = { ...tt, slots: { root: C.Root, backdrop: C.Backdrop, ...lt }, slotProps: { ...z, ...P } }, [Jt, Et] = Un("root", { elementType: yT, externalForwardedProps: ht, getSlotProps: H, additionalProps: { ref: o, as: b }, ownerState: st, className: xt(h, rt == null ? void 0 : rt.root, !st.open && st.exited && (rt == null ? void 0 : rt.hidden)) }), [Ut, Mt] = Un("backdrop", { elementType: c, externalForwardedProps: ht, additionalProps: f, getSlotProps: (It) => J({ ...It, onClick: (Lt) => {
    V && V(Lt), (It == null ? void 0 : It.onClick) && It.onClick(Lt);
  } }), className: xt(f == null ? void 0 : f.className, rt == null ? void 0 : rt.backdrop), ownerState: st }), ce = jn(f == null ? void 0 : f.ref, Mt.ref);
  return !w && !v && (!it || $) ? null : U.jsx(Ox, { ref: et, container: S, disablePortal: k, children: U.jsxs(Jt, { ...Et, children: [!j && c ? U.jsx(Ut, { ...Mt, ref: ce }) : null, U.jsx(fT, { disableEnforceFocus: x, disableAutoFocus: R, disableRestoreFocus: q, isEnabled: E, open: v, children: A.cloneElement(m, St) })] }) });
});
function ST(a3) {
  return ue("MuiFab", a3);
}
const Ag = oe("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), xT = (a3) => {
  const { color: r, variant: o, classes: s, size: c } = a3, f = { root: ["root", o, `size${gt(c)}`, r === "inherit" ? "colorInherit" : r] }, p = pe(f, ST, s);
  return { ...s, ...p };
}, TT = yt(qi, { name: "MuiFab", slot: "Root", shouldForwardProp: (a3) => Gf(a3) || a3 === "classes", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`size${gt(o.size)}`], o.color === "inherit" && r.colorInherit, r[gt(o.size)], r[o.color]];
} })(Yt(({ theme: a3 }) => {
  var _a, _b2;
  return { ...a3.typography.button, minHeight: 36, transition: a3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: a3.transitions.duration.short }), borderRadius: "50%", padding: 0, minWidth: 0, width: 56, height: 56, zIndex: (a3.vars || a3).zIndex.fab, boxShadow: (a3.vars || a3).shadows[6], "&:active": { boxShadow: (a3.vars || a3).shadows[12] }, color: a3.vars ? a3.vars.palette.text.primary : (_b2 = (_a = a3.palette).getContrastText) == null ? void 0 : _b2.call(_a, a3.palette.grey[300]), backgroundColor: (a3.vars || a3).palette.grey[300], "&:hover": { backgroundColor: (a3.vars || a3).palette.grey.A100, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette.grey[300] }, textDecoration: "none" }, [`&.${Ag.focusVisible}`]: { boxShadow: (a3.vars || a3).shadows[6] }, variants: [{ props: { size: "small" }, style: { width: 40, height: 40 } }, { props: { size: "medium" }, style: { width: 48, height: 48 } }, { props: { variant: "extended" }, style: { borderRadius: 48 / 2, padding: "0 16px", width: "auto", minHeight: "auto", minWidth: 48, height: 48 } }, { props: { variant: "extended", size: "small" }, style: { width: "auto", padding: "0 8px", borderRadius: 34 / 2, minWidth: 34, height: 34 } }, { props: { variant: "extended", size: "medium" }, style: { width: "auto", padding: "0 16px", borderRadius: 40 / 2, minWidth: 40, height: 40 } }, { props: { color: "inherit" }, style: { color: "inherit" } }] };
}), Yt(({ theme: a3 }) => ({ variants: [...Object.entries(a3.palette).filter(vn(["dark", "contrastText"])).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].contrastText, backgroundColor: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: (a3.vars || a3).palette[r].dark, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette[r].main } } } }))] })), Yt(({ theme: a3 }) => ({ [`&.${Ag.disabled}`]: { color: (a3.vars || a3).palette.action.disabled, boxShadow: (a3.vars || a3).shadows[0], backgroundColor: (a3.vars || a3).palette.action.disabledBackground } }))), ET = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFab" }), { children: c, className: f, color: p = "default", component: h = "button", disabled: g = false, disableFocusRipple: m = false, focusVisibleClassName: S, size: b = "large", variant: C = "circular", ...z } = s, R = { ...s, color: p, component: h, disabled: g, disableFocusRipple: m, size: b, variant: C }, x = xT(R);
  return U.jsx(TT, { className: xt(x.root, f), component: h, disabled: g, focusRipple: !m, focusVisibleClassName: xt(x.focusVisible, S), ownerState: R, ref: o, ...z, classes: x, children: c });
});
function CT(a3) {
  return ue("MuiFormControlLabel", a3);
}
const Ai = oe("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), AT = (a3) => {
  const { classes: r, disabled: o, labelPlacement: s, error: c, required: f } = a3, p = { root: ["root", o && "disabled", `labelPlacement${gt(s)}`, c && "error", f && "required"], label: ["label", o && "disabled"], asterisk: ["asterisk", c && "error"] };
  return pe(p, CT, r);
}, RT = yt("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${Ai.label}`]: r.label }, r.root, r[`labelPlacement${gt(o.labelPlacement)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${Ai.disabled}`]: { cursor: "default" }, [`& .${Ai.label}`]: { [`&.${Ai.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: r }) => r === "start" || r === "top" || r === "bottom", style: { marginLeft: 16 } }] }))), wT = yt("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (a3, r) => r.asterisk })(Yt(({ theme: a3 }) => ({ [`&.${Ai.error}`]: { color: (a3.vars || a3).palette.error.main } }))), Rg = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFormControlLabel" }), { checked: c, className: f, componentsProps: p = {}, control: h, disabled: g, disableTypography: m, inputRef: S, label: b, labelPlacement: C = "end", name: z, onChange: R, required: x, slots: D = {}, slotProps: k = {}, value: q, ...B } = s, j = Qf(), w = g ?? h.props.disabled ?? (j == null ? void 0 : j.disabled), V = x ?? h.props.required, Y = { disabled: w, required: V };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((F) => {
    typeof h.props[F] > "u" && typeof s[F] < "u" && (Y[F] = s[F]);
  });
  const at = O0({ props: s, muiFormControl: j, states: ["error"] }), X = { ...s, disabled: w, labelPlacement: C, required: V, error: at.error }, v = AT(X), P = { slots: D, slotProps: { ...p, ...k } }, [lt, nt] = Un("typography", { elementType: Tr, externalForwardedProps: P, ownerState: X });
  let tt = b;
  return tt != null && tt.type !== Tr && !m && (tt = U.jsx(lt, { component: "span", ...nt, className: xt(v.label, nt == null ? void 0 : nt.className), children: tt })), U.jsxs(RT, { className: xt(v.root, f), ownerState: X, ref: o, ...B, children: [A.cloneElement(h, Y), V ? U.jsxs("div", { children: [tt, U.jsxs(wT, { ownerState: X, "aria-hidden": true, className: v.asterisk, children: ["\u2009", "*"] })] }) : tt] });
});
function MT(a3) {
  return ue("MuiFormGroup", a3);
}
oe("MuiFormGroup", ["root", "row", "error"]);
const OT = (a3) => {
  const { classes: r, row: o, error: s } = a3;
  return pe({ root: ["root", o && "row", s && "error"] }, MT, r);
}, zT = yt("div", { name: "MuiFormGroup", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.row && r.row];
} })({ display: "flex", flexDirection: "column", flexWrap: "wrap", variants: [{ props: { row: true }, style: { flexDirection: "row" } }] }), _T = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFormGroup" }), { className: c, row: f = false, ...p } = s, h = Qf(), g = O0({ props: s, muiFormControl: h, states: ["error"] }), m = { ...s, row: f, error: g.error }, S = OT(m);
  return U.jsx(zT, { className: xt(S.root, c), ownerState: m, ref: o, ...p });
});
function Sf(a3) {
  return `scale(${a3}, ${a3 ** 2})`;
}
const kT = { entering: { opacity: 1, transform: Sf(1) }, entered: { opacity: 1, transform: "none" } }, tf = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), xf = A.forwardRef(function(r, o) {
  const { addEndListener: s, appear: c = true, children: f, easing: p, in: h, onEnter: g, onEntered: m, onEntering: S, onExit: b, onExited: C, onExiting: z, style: R, timeout: x = "auto", TransitionComponent: D = ra, ...k } = r, q = jf(), B = A.useRef(), j = $i(), w = A.useRef(null), V = jn(w, Li(f), o), Y = (F) => (H) => {
    if (F) {
      const J = w.current;
      H === void 0 ? F(J) : F(J, H);
    }
  }, at = Y(S), X = Y((F, H) => {
    M0(F);
    const { duration: J, delay: W, easing: et } = ys({ style: R, timeout: x, easing: p }, { mode: "enter" });
    let E;
    x === "auto" ? (E = j.transitions.getAutoHeightDuration(F.clientHeight), B.current = E) : E = J, F.style.transition = [j.transitions.create("opacity", { duration: E, delay: W }), j.transitions.create("transform", { duration: tf ? E : E * 0.666, delay: W, easing: et })].join(","), g && g(F, H);
  }), v = Y(m), P = Y(z), lt = Y((F) => {
    const { duration: H, delay: J, easing: W } = ys({ style: R, timeout: x, easing: p }, { mode: "exit" });
    let et;
    x === "auto" ? (et = j.transitions.getAutoHeightDuration(F.clientHeight), B.current = et) : et = H, F.style.transition = [j.transitions.create("opacity", { duration: et, delay: J }), j.transitions.create("transform", { duration: tf ? et : et * 0.666, delay: tf ? J : J || et * 0.333, easing: W })].join(","), F.style.opacity = 0, F.style.transform = Sf(0.75), b && b(F);
  }), nt = Y(C), tt = (F) => {
    x === "auto" && q.start(B.current || 0, F), s && s(w.current, F);
  };
  return U.jsx(D, { appear: c, in: h, nodeRef: w, onEnter: X, onEntered: v, onEntering: at, onExit: lt, onExited: nt, onExiting: P, addEndListener: tt, timeout: x === "auto" ? null : x, ...k, children: (F, { ownerState: H, ...J }) => A.cloneElement(f, { style: { opacity: 0, transform: Sf(0.75), visibility: F === "exited" && !h ? "hidden" : void 0, ...kT[F], ...R, ...f.props.style }, ref: V, ...J }) });
});
xf && (xf.muiSupportAuto = true);
function DT(a3, r, o = (s, c) => s === c) {
  return a3.length === r.length && a3.every((s, c) => o(s, r[c]));
}
const BT = 2;
function mr(a3, r, o, s, c) {
  return o === 1 ? Math.min(a3 + r, c) : Math.max(a3 - r, s);
}
function z0(a3, r) {
  return a3 - r;
}
function wg(a3, r) {
  const { index: o } = a3.reduce((s, c, f) => {
    const p = Math.abs(r - c);
    return s === null || p < s.distance || p === s.distance ? { distance: p, index: f } : s;
  }, null) ?? {};
  return o;
}
function es(a3, r) {
  if (r.current !== void 0 && a3.changedTouches) {
    const o = a3;
    for (let s = 0; s < o.changedTouches.length; s += 1) {
      const c = o.changedTouches[s];
      if (c.identifier === r.current) return { x: c.clientX, y: c.clientY };
    }
    return false;
  }
  return { x: a3.clientX, y: a3.clientY };
}
function bs(a3, r, o) {
  return (a3 - r) * 100 / (o - r);
}
function NT(a3, r, o) {
  return (o - r) * a3 + r;
}
function UT(a3) {
  if (Math.abs(a3) < 1) {
    const o = a3.toExponential().split("e-"), s = o[0].split(".")[1];
    return (s ? s.length : 0) + parseInt(o[1], 10);
  }
  const r = a3.toString().split(".")[1];
  return r ? r.length : 0;
}
function HT(a3, r, o) {
  const s = Math.round((a3 - o) / r) * r + o;
  return Number(s.toFixed(UT(r)));
}
function Mg({ values: a3, newValue: r, index: o }) {
  const s = a3.slice();
  return s[o] = r, s.sort(z0);
}
function ns({ sliderRef: a3, activeIndex: r, setActive: o }) {
  var _a, _b2, _c;
  const s = Je(a3.current);
  (!((_a = a3.current) == null ? void 0 : _a.contains(s.activeElement)) || Number((_b2 = s == null ? void 0 : s.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== r) && ((_c = a3.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${r}"]`).focus()), o && o(r);
}
function as(a3, r) {
  return typeof a3 == "number" && typeof r == "number" ? a3 === r : typeof a3 == "object" && typeof r == "object" ? DT(a3, r) : false;
}
const jT = { horizontal: { offset: (a3) => ({ left: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, "horizontal-reverse": { offset: (a3) => ({ right: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, vertical: { offset: (a3) => ({ bottom: `${a3}%` }), leap: (a3) => ({ height: `${a3}%` }) } }, LT = (a3) => a3;
let ls;
function Og() {
  return ls === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? ls = CSS.supports("touch-action", "none") : ls = true), ls;
}
function $T(a3) {
  const { "aria-labelledby": r, defaultValue: o, disabled: s = false, disableSwap: c = false, isRtl: f = false, marks: p = false, max: h = 100, min: g = 0, name: m, onChange: S, onChangeCommitted: b, orientation: C = "horizontal", rootRef: z, scale: R = LT, step: x = 1, shiftStep: D = 10, tabIndex: k, value: q } = a3, B = A.useRef(void 0), [j, w] = A.useState(-1), [V, Y] = A.useState(-1), [at, X] = A.useState(false), v = A.useRef(0), P = A.useRef(null), [lt, nt] = h0({ controlled: q, default: o ?? g, name: "Slider" }), tt = S && ((ut, ot, At) => {
    const Ot = ut.nativeEvent || ut, zt = new Ot.constructor(Ot.type, Ot);
    Object.defineProperty(zt, "target", { writable: true, value: { value: ot, name: m } }), P.current = ot, S(zt, ot, At);
  }), F = Array.isArray(lt);
  let H = F ? lt.slice().sort(z0) : [lt];
  H = H.map((ut) => ut == null ? g : gr(ut, g, h));
  const J = p === true && x !== null ? [...Array(Math.floor((h - g) / x) + 1)].map((ut, ot) => ({ value: g + x * ot })) : p || [], W = J.map((ut) => ut.value), [et, E] = A.useState(-1), $ = A.useRef(null), it = jn(z, $), st = (ut) => (ot) => {
    var _a;
    const At = Number(ot.currentTarget.getAttribute("data-index"));
    ms(ot.target) && E(At), Y(At), (_a = ut == null ? void 0 : ut.onFocus) == null ? void 0 : _a.call(ut, ot);
  }, rt = (ut) => (ot) => {
    var _a;
    ms(ot.target) || E(-1), Y(-1), (_a = ut == null ? void 0 : ut.onBlur) == null ? void 0 : _a.call(ut, ot);
  }, St = (ut, ot) => {
    const At = Number(ut.currentTarget.getAttribute("data-index")), Ot = H[At], zt = W.indexOf(Ot);
    let Rt = ot;
    if (J && x == null) {
      const Ce = W[W.length - 1];
      Rt >= Ce ? Rt = Ce : Rt <= W[0] ? Rt = W[0] : Rt = Rt < Ot ? W[zt - 1] : W[zt + 1];
    }
    if (Rt = gr(Rt, g, h), F) {
      c && (Rt = gr(Rt, H[At - 1] || -1 / 0, H[At + 1] || 1 / 0));
      const Ce = Rt;
      Rt = Mg({ values: H, newValue: Rt, index: At });
      let Ge = At;
      c || (Ge = Rt.indexOf(Ce)), ns({ sliderRef: $, activeIndex: Ge });
    }
    nt(Rt), E(At), tt && !as(Rt, lt) && tt(ut, Rt, At), b && b(ut, P.current ?? Rt);
  }, ht = (ut) => (ot) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(ot.key)) {
      ot.preventDefault();
      const At = Number(ot.currentTarget.getAttribute("data-index")), Ot = H[At];
      let zt = null;
      if (x != null) {
        const Rt = ot.shiftKey ? D : x;
        switch (ot.key) {
          case "ArrowUp":
            zt = mr(Ot, Rt, 1, g, h);
            break;
          case "ArrowRight":
            zt = mr(Ot, Rt, f ? -1 : 1, g, h);
            break;
          case "ArrowDown":
            zt = mr(Ot, Rt, -1, g, h);
            break;
          case "ArrowLeft":
            zt = mr(Ot, Rt, f ? 1 : -1, g, h);
            break;
          case "PageUp":
            zt = mr(Ot, D, 1, g, h);
            break;
          case "PageDown":
            zt = mr(Ot, D, -1, g, h);
            break;
          case "Home":
            zt = g;
            break;
          case "End":
            zt = h;
            break;
        }
      } else if (J) {
        const Rt = W[W.length - 1], Ce = W.indexOf(Ot), Ge = [f ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], te = [f ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        Ge.includes(ot.key) ? Ce === 0 ? zt = W[0] : zt = W[Ce - 1] : te.includes(ot.key) && (Ce === W.length - 1 ? zt = Rt : zt = W[Ce + 1]);
      }
      zt != null && St(ot, zt);
    }
    (_a = ut == null ? void 0 : ut.onKeyDown) == null ? void 0 : _a.call(ut, ot);
  };
  Di(() => {
    var _a;
    s && $.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [s]), s && j !== -1 && w(-1), s && et !== -1 && E(-1);
  const Jt = (ut) => (ot) => {
    var _a;
    (_a = ut.onChange) == null ? void 0 : _a.call(ut, ot), St(ot, ot.target.valueAsNumber);
  }, Et = A.useRef(void 0);
  let Ut = C;
  f && C === "horizontal" && (Ut += "-reverse");
  const Mt = ({ finger: ut, move: ot = false }) => {
    const { current: At } = $, { width: Ot, height: zt, bottom: Rt, left: Ce } = At.getBoundingClientRect();
    let Ge;
    Ut.startsWith("vertical") ? Ge = (Rt - ut.y) / zt : Ge = (ut.x - Ce) / Ot, Ut.includes("-reverse") && (Ge = 1 - Ge);
    let te;
    if (te = NT(Ge, g, h), x) te = HT(te, x, g);
    else {
      const ft = wg(W, te);
      te = W[ft];
    }
    te = gr(te, g, h);
    let Kt = 0;
    if (F) {
      ot ? Kt = Et.current : Kt = wg(H, te), c && (te = gr(te, H[Kt - 1] || -1 / 0, H[Kt + 1] || 1 / 0));
      const ft = te;
      te = Mg({ values: H, newValue: te, index: Kt }), c && ot || (Kt = te.indexOf(ft), Et.current = Kt);
    }
    return { newValue: te, activeIndex: Kt };
  }, ce = Ie((ut) => {
    const ot = es(ut, B);
    if (!ot) return;
    if (v.current += 1, ut.type === "mousemove" && ut.buttons === 0) {
      It(ut);
      return;
    }
    const { newValue: At, activeIndex: Ot } = Mt({ finger: ot, move: true });
    ns({ sliderRef: $, activeIndex: Ot, setActive: w }), nt(At), !at && v.current > BT && X(true), tt && !as(At, lt) && tt(ut, At, Ot);
  }), It = Ie((ut) => {
    const ot = es(ut, B);
    if (X(false), !ot) return;
    const { newValue: At } = Mt({ finger: ot, move: true });
    w(-1), ut.type === "touchend" && Y(-1), b && b(ut, P.current ?? At), B.current = void 0, Oe();
  }), Lt = Ie((ut) => {
    if (s) return;
    Og() || ut.preventDefault();
    const ot = ut.changedTouches[0];
    ot != null && (B.current = ot.identifier);
    const At = es(ut, B);
    if (At !== false) {
      const { newValue: zt, activeIndex: Rt } = Mt({ finger: At });
      ns({ sliderRef: $, activeIndex: Rt, setActive: w }), nt(zt), tt && !as(zt, lt) && tt(ut, zt, Rt);
    }
    v.current = 0;
    const Ot = Je($.current);
    Ot.addEventListener("touchmove", ce, { passive: true }), Ot.addEventListener("touchend", It, { passive: true });
  }), Oe = A.useCallback(() => {
    const ut = Je($.current);
    ut.removeEventListener("mousemove", ce), ut.removeEventListener("mouseup", It), ut.removeEventListener("touchmove", ce), ut.removeEventListener("touchend", It);
  }, [It, ce]);
  A.useEffect(() => {
    const { current: ut } = $;
    return ut.addEventListener("touchstart", Lt, { passive: Og() }), () => {
      ut.removeEventListener("touchstart", Lt), Oe();
    };
  }, [Oe, Lt]), A.useEffect(() => {
    s && Oe();
  }, [s, Oe]);
  const bn = (ut) => (ot) => {
    var _a;
    if ((_a = ut.onMouseDown) == null ? void 0 : _a.call(ut, ot), s || ot.defaultPrevented || ot.button !== 0) return;
    ot.preventDefault();
    const At = es(ot, B);
    if (At !== false) {
      const { newValue: zt, activeIndex: Rt } = Mt({ finger: At });
      ns({ sliderRef: $, activeIndex: Rt, setActive: w }), nt(zt), tt && !as(zt, lt) && tt(ot, zt, Rt);
    }
    v.current = 0;
    const Ot = Je($.current);
    Ot.addEventListener("mousemove", ce, { passive: true }), Ot.addEventListener("mouseup", It);
  }, Ye = bs(F ? H[0] : g, g, h), Ht = bs(H[H.length - 1], g, h) - Ye, fe = (ut = {}) => {
    const ot = Al(ut), At = { onMouseDown: bn(ot || {}) }, Ot = { ...ot, ...At };
    return { ...ut, ref: it, ...Ot };
  }, sn = (ut) => (ot) => {
    var _a;
    (_a = ut.onMouseOver) == null ? void 0 : _a.call(ut, ot);
    const At = Number(ot.currentTarget.getAttribute("data-index"));
    Y(At);
  }, Ue = (ut) => (ot) => {
    var _a;
    (_a = ut.onMouseLeave) == null ? void 0 : _a.call(ut, ot), Y(-1);
  }, tn = (ut = {}) => {
    const ot = Al(ut), At = { onMouseOver: sn(ot || {}), onMouseLeave: Ue(ot || {}) };
    return { ...ut, ...ot, ...At };
  }, bt = (ut) => ({ pointerEvents: j !== -1 && j !== ut ? "none" : void 0 });
  let $n;
  return C === "vertical" && ($n = f ? "vertical-rl" : "vertical-lr"), { active: j, axis: Ut, axisProps: jT, dragging: at, focusedThumbIndex: et, getHiddenInputProps: (ut = {}) => {
    const ot = Al(ut), At = { onChange: Jt(ot || {}), onFocus: st(ot || {}), onBlur: rt(ot || {}), onKeyDown: ht(ot || {}) }, Ot = { ...ot, ...At };
    return { tabIndex: k, "aria-labelledby": r, "aria-orientation": C, "aria-valuemax": R(h), "aria-valuemin": R(g), name: m, type: "range", min: a3.min, max: a3.max, step: a3.step === null && a3.marks ? "any" : a3.step ?? void 0, disabled: s, ...ut, ...Ot, style: { ...OS, direction: f ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: $n } };
  }, getRootProps: fe, getThumbProps: tn, marks: J, open: V, range: F, rootRef: it, trackLeap: Ht, trackOffset: Ye, values: H, getThumbStyle: bt };
}
const qT = (a3) => !a3 || !cs(a3);
function YT(a3) {
  return ue("MuiSlider", a3);
}
const Hn = oe("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), GT = (a3) => {
  const { open: r } = a3;
  return { offset: xt(r && Hn.valueLabelOpen), circle: Hn.valueLabelCircle, label: Hn.valueLabelLabel };
};
function VT(a3) {
  const { children: r, className: o, value: s } = a3, c = GT(a3);
  return r ? A.cloneElement(r, { className: xt(r.props.className) }, U.jsxs(A.Fragment, { children: [r.props.children, U.jsx("span", { className: xt(c.offset, o), "aria-hidden": true, children: U.jsx("span", { className: c.circle, children: U.jsx("span", { className: c.label, children: s }) }) })] })) : null;
}
function zg(a3) {
  return a3;
}
const XT = yt("span", { name: "MuiSlider", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`color${gt(o.color)}`], o.size !== "medium" && r[`size${gt(o.size)}`], o.marked && r.marked, o.orientation === "vertical" && r.vertical, o.track === "inverted" && r.trackInverted, o.track === false && r.trackFalse];
} })(Yt(({ theme: a3 }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${Hn.disabled}`]: { pointerEvents: "none", cursor: "default", color: (a3.vars || a3).palette.grey[400] }, [`&.${Hn.dragging}`]: { [`& .${Hn.thumb}, & .${Hn.track}`]: { transition: "none" } }, variants: [...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), QT = yt("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (a3, r) => r.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), KT = yt("span", { name: "MuiSlider", slot: "Track", overridesResolver: (a3, r) => r.track })(Yt(({ theme: a3 }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: a3.transitions.create(["left", "width", "bottom", "height"], { duration: a3.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r, track: "inverted" }, style: { ...a3.vars ? { backgroundColor: a3.vars.palette.Slider[`${r}Track`], borderColor: a3.vars.palette.Slider[`${r}Track`] } : { backgroundColor: Ia(a3.palette[r].main, 0.62), borderColor: Ia(a3.palette[r].main, 0.62), ...a3.applyStyles("dark", { backgroundColor: Ja(a3.palette[r].main, 0.5) }), ...a3.applyStyles("dark", { borderColor: Ja(a3.palette[r].main, 0.5) }) } } }))] }))), PT = yt("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.thumb, r[`thumbColor${gt(o.color)}`], o.size !== "medium" && r[`thumbSize${gt(o.size)}`]];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: a3.transitions.create(["box-shadow", "left", "bottom"], { duration: a3.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (a3.vars || a3).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${Hn.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { [`&:hover, &.${Hn.focusVisible}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 8px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${Ra(a3.palette[r].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${Hn.active}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 14px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${Ra(a3.palette[r].main, 0.16)}` } } } }))] }))), ZT = yt(VT, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (a3, r) => r.valueLabel })(Yt(({ theme: a3 }) => ({ zIndex: 1, whiteSpace: "nowrap", ...a3.typography.body2, fontWeight: 500, transition: a3.transitions.create(["transform"], { duration: a3.transitions.duration.shortest }), position: "absolute", backgroundColor: (a3.vars || a3).palette.grey[600], borderRadius: 2, color: (a3.vars || a3).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${Hn.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${Hn.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: a3.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), FT = yt("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (a3) => Yf(a3) && a3 !== "markActive", overridesResolver: (a3, r) => {
  const { markActive: o } = a3;
  return [r.mark, o && r.markActive];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (a3.vars || a3).palette.background.paper, opacity: 0.8 } }] }))), WT = yt("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (a3) => Yf(a3) && a3 !== "markLabelActive", overridesResolver: (a3, r) => r.markLabel })(Yt(({ theme: a3 }) => ({ ...a3.typography.body2, color: (a3.vars || a3).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (a3.vars || a3).palette.text.primary } }] }))), JT = (a3) => {
  const { disabled: r, dragging: o, marked: s, orientation: c, track: f, classes: p, color: h, size: g } = a3, m = { root: ["root", r && "disabled", o && "dragging", s && "marked", c === "vertical" && "vertical", f === "inverted" && "trackInverted", f === false && "trackFalse", h && `color${gt(h)}`, g && `size${gt(g)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", r && "disabled", g && `thumbSize${gt(g)}`, h && `thumbColor${gt(h)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return pe(m, YT, p);
}, IT = ({ children: a3 }) => a3, _0 = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSlider" }), c = Lf(), { "aria-label": f, "aria-valuetext": p, "aria-labelledby": h, component: g = "span", components: m = {}, componentsProps: S = {}, color: b = "primary", classes: C, className: z, disableSwap: R = false, disabled: x = false, getAriaLabel: D, getAriaValueText: k, marks: q = false, max: B = 100, min: j = 0, name: w, onChange: V, onChangeCommitted: Y, orientation: at = "horizontal", shiftStep: X = 10, size: v = "medium", step: P = 1, scale: lt = zg, slotProps: nt, slots: tt, tabIndex: F, track: H = "normal", value: J, valueLabelDisplay: W = "off", valueLabelFormat: et = zg, ...E } = s, $ = { ...s, isRtl: c, max: B, min: j, classes: C, disabled: x, disableSwap: R, orientation: at, marks: q, color: b, size: v, step: P, shiftStep: X, scale: lt, track: H, valueLabelDisplay: W, valueLabelFormat: et }, { axisProps: it, getRootProps: st, getHiddenInputProps: rt, getThumbProps: St, open: ht, active: Jt, axis: Et, focusedThumbIndex: Ut, range: Mt, dragging: ce, marks: It, values: Lt, trackOffset: Oe, trackLeap: bn, getThumbStyle: Ye } = $T({ ...$, rootRef: o });
  $.marked = It.length > 0 && It.some((Gt) => Gt.label), $.dragging = ce, $.focusedThumbIndex = Ut;
  const Ht = JT($), fe = (tt == null ? void 0 : tt.root) ?? m.Root ?? XT, sn = (tt == null ? void 0 : tt.rail) ?? m.Rail ?? QT, Ue = (tt == null ? void 0 : tt.track) ?? m.Track ?? KT, tn = (tt == null ? void 0 : tt.thumb) ?? m.Thumb ?? PT, bt = (tt == null ? void 0 : tt.valueLabel) ?? m.ValueLabel ?? ZT, $n = (tt == null ? void 0 : tt.mark) ?? m.Mark ?? FT, He = (tt == null ? void 0 : tt.markLabel) ?? m.MarkLabel ?? WT, ut = (tt == null ? void 0 : tt.input) ?? m.Input ?? "input", ot = (nt == null ? void 0 : nt.root) ?? S.root, At = (nt == null ? void 0 : nt.rail) ?? S.rail, Ot = (nt == null ? void 0 : nt.track) ?? S.track, zt = (nt == null ? void 0 : nt.thumb) ?? S.thumb, Rt = (nt == null ? void 0 : nt.valueLabel) ?? S.valueLabel, Ce = (nt == null ? void 0 : nt.mark) ?? S.mark, Ge = (nt == null ? void 0 : nt.markLabel) ?? S.markLabel, te = (nt == null ? void 0 : nt.input) ?? S.input, Kt = hn({ elementType: fe, getSlotProps: st, externalSlotProps: ot, externalForwardedProps: E, additionalProps: { ...qT(fe) && { as: g } }, ownerState: { ...$, ...ot == null ? void 0 : ot.ownerState }, className: [Ht.root, z] }), ft = hn({ elementType: sn, externalSlotProps: At, ownerState: $, className: Ht.rail }), dt = hn({ elementType: Ue, externalSlotProps: Ot, additionalProps: { style: { ...it[Et].offset(Oe), ...it[Et].leap(bn) } }, ownerState: { ...$, ...Ot == null ? void 0 : Ot.ownerState }, className: Ht.track }), Tt = hn({ elementType: tn, getSlotProps: St, externalSlotProps: zt, ownerState: { ...$, ...zt == null ? void 0 : zt.ownerState }, className: Ht.thumb }), Bt = hn({ elementType: bt, externalSlotProps: Rt, ownerState: { ...$, ...Rt == null ? void 0 : Rt.ownerState }, className: Ht.valueLabel }), le = hn({ elementType: $n, externalSlotProps: Ce, ownerState: $, className: Ht.mark }), Ve = hn({ elementType: He, externalSlotProps: Ge, ownerState: $, className: Ht.markLabel }), en = hn({ elementType: ut, getSlotProps: rt, externalSlotProps: te, ownerState: $ });
  return U.jsxs(fe, { ...Kt, children: [U.jsx(sn, { ...ft }), U.jsx(Ue, { ...dt }), It.filter((Gt) => Gt.value >= j && Gt.value <= B).map((Gt, Pt) => {
    const Sn = bs(Gt.value, j, B), Qn = it[Et].offset(Sn);
    let qn;
    return H === false ? qn = Lt.includes(Gt.value) : qn = H === "normal" && (Mt ? Gt.value >= Lt[0] && Gt.value <= Lt[Lt.length - 1] : Gt.value <= Lt[0]) || H === "inverted" && (Mt ? Gt.value <= Lt[0] || Gt.value >= Lt[Lt.length - 1] : Gt.value >= Lt[0]), U.jsxs(A.Fragment, { children: [U.jsx($n, { "data-index": Pt, ...le, ...!cs($n) && { markActive: qn }, style: { ...Qn, ...le.style }, className: xt(le.className, qn && Ht.markActive) }), Gt.label != null ? U.jsx(He, { "aria-hidden": true, "data-index": Pt, ...Ve, ...!cs(He) && { markLabelActive: qn }, style: { ...Qn, ...Ve.style }, className: xt(Ht.markLabel, Ve.className, qn && Ht.markLabelActive), children: Gt.label }) : null] }, Pt);
  }), Lt.map((Gt, Pt) => {
    const Sn = bs(Gt, j, B), Qn = it[Et].offset(Sn), qn = W === "off" ? IT : bt;
    return U.jsx(qn, { ...!cs(qn) && { valueLabelFormat: et, valueLabelDisplay: W, value: typeof et == "function" ? et(lt(Gt), Pt) : et, index: Pt, open: ht === Pt || Jt === Pt || W === "on", disabled: x }, ...Bt, children: U.jsx(tn, { "data-index": Pt, ...Tt, className: xt(Ht.thumb, Tt.className, Jt === Pt && Ht.active, Ut === Pt && Ht.focusVisible), style: { ...Qn, ...Ye(Pt), ...Tt.style }, children: U.jsx(ut, { "data-index": Pt, "aria-label": D ? D(Pt) : f, "aria-valuenow": lt(Gt), "aria-labelledby": h, "aria-valuetext": k ? k(lt(Gt), Pt) : p, value: Lt[Pt], ...en }) }) }, Pt);
  })] });
});
function tE(a3 = {}) {
  const { autoHideDuration: r = null, disableWindowBlurListener: o = false, onClose: s, open: c, resumeHideDuration: f } = a3, p = jf();
  A.useEffect(() => {
    if (!c) return;
    function k(q) {
      q.defaultPrevented || q.key === "Escape" && (s == null ? void 0 : s(q, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", k), () => {
      document.removeEventListener("keydown", k);
    };
  }, [c, s]);
  const h = Ie((k, q) => {
    s == null ? void 0 : s(k, q);
  }), g = Ie((k) => {
    !s || k == null || p.start(k, () => {
      h(null, "timeout");
    });
  });
  A.useEffect(() => (c && g(r), p.clear), [c, r, g, p]);
  const m = (k) => {
    s == null ? void 0 : s(k, "clickaway");
  }, S = p.clear, b = A.useCallback(() => {
    r != null && g(f ?? r * 0.5);
  }, [r, f, g]), C = (k) => (q) => {
    const B = k.onBlur;
    B == null ? void 0 : B(q), b();
  }, z = (k) => (q) => {
    const B = k.onFocus;
    B == null ? void 0 : B(q), S();
  }, R = (k) => (q) => {
    const B = k.onMouseEnter;
    B == null ? void 0 : B(q), S();
  }, x = (k) => (q) => {
    const B = k.onMouseLeave;
    B == null ? void 0 : B(q), b();
  };
  return A.useEffect(() => {
    if (!o && c) return window.addEventListener("focus", b), window.addEventListener("blur", S), () => {
      window.removeEventListener("focus", b), window.removeEventListener("blur", S);
    };
  }, [o, c, b, S]), { getRootProps: (k = {}) => {
    const q = { ...Al(a3), ...Al(k) };
    return { role: "presentation", ...k, ...q, onBlur: C(q), onFocus: z(q), onMouseEnter: R(q), onMouseLeave: x(q) };
  }, onClickAway: m };
}
function eE(a3) {
  return ue("MuiSnackbarContent", a3);
}
oe("MuiSnackbarContent", ["root", "message", "action"]);
const nE = (a3) => {
  const { classes: r } = a3;
  return pe({ root: ["root"], action: ["action"], message: ["message"] }, eE, r);
}, aE = yt(Bs, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (a3, r) => r.root })(Yt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? 0.8 : 0.98, o = d0(a3.palette.background.default, r);
  return { ...a3.typography.body2, color: a3.vars ? a3.vars.palette.SnackbarContent.color : a3.palette.getContrastText(o), backgroundColor: a3.vars ? a3.vars.palette.SnackbarContent.bg : o, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (a3.vars || a3).shape.borderRadius, flexGrow: 1, [a3.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), lE = yt("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0" }), rE = yt("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), iE = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSnackbarContent" }), { action: c, className: f, message: p, role: h = "alert", ...g } = s, m = s, S = nE(m);
  return U.jsxs(aE, { role: h, square: true, elevation: 6, className: xt(S.root, f), ownerState: m, ref: o, ...g, children: [U.jsx(lE, { className: S.message, ownerState: m, children: p }), c ? U.jsx(rE, { className: S.action, ownerState: m, children: c }) : null] });
});
function oE(a3) {
  return ue("MuiSnackbar", a3);
}
oe("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const sE = (a3) => {
  const { classes: r, anchorOrigin: o } = a3, s = { root: ["root", `anchorOrigin${gt(o.vertical)}${gt(o.horizontal)}`] };
  return pe(s, oE, r);
}, _g = yt("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`anchorOrigin${gt(o.anchorOrigin.vertical)}${gt(o.anchorOrigin.horizontal)}`]];
} })(Yt(({ theme: a3 }) => ({ zIndex: (a3.vars || a3).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: r }) => r.anchorOrigin.vertical === "top", style: { top: 8, [a3.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.vertical !== "top", style: { bottom: 8, [a3.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [a3.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [a3.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "center", style: { [a3.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), uE = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSnackbar" }), c = $i(), f = { enter: c.transitions.duration.enteringScreen, exit: c.transitions.duration.leavingScreen }, { action: p, anchorOrigin: { vertical: h, horizontal: g } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: m = null, children: S, className: b, ClickAwayListenerProps: C, ContentProps: z, disableWindowBlurListener: R = false, message: x, onBlur: D, onClose: k, onFocus: q, onMouseEnter: B, onMouseLeave: j, open: w, resumeHideDuration: V, TransitionComponent: Y = xf, transitionDuration: at = f, TransitionProps: { onEnter: X, onExited: v, ...P } = {}, ...lt } = s, nt = { ...s, anchorOrigin: { vertical: h, horizontal: g }, autoHideDuration: m, disableWindowBlurListener: R, TransitionComponent: Y, transitionDuration: at }, tt = sE(nt), { getRootProps: F, onClickAway: H } = tE({ ...nt }), [J, W] = A.useState(true), et = hn({ elementType: _g, getSlotProps: F, externalForwardedProps: lt, ownerState: nt, additionalProps: { ref: o }, className: [tt.root, b] }), E = (it) => {
    W(true), v && v(it);
  }, $ = (it, st) => {
    W(false), X && X(it, st);
  };
  return !w && J ? null : U.jsx(Ix, { onClickAway: H, ...C, children: U.jsx(_g, { ...et, children: U.jsx(Y, { appear: true, in: w, timeout: at, direction: h === "top" ? "down" : "up", onEnter: $, onExited: E, ...P, children: S || U.jsx(iE, { message: x, action: p, ...z }) }) }) });
});
function cE(a3) {
  return ue("MuiSwitch", a3);
}
const We = oe("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), fE = (a3) => {
  const { classes: r, edge: o, size: s, color: c, checked: f, disabled: p } = a3, h = { root: ["root", o && `edge${gt(o)}`, `size${gt(s)}`], switchBase: ["switchBase", `color${gt(c)}`, f && "checked", p && "disabled"], thumb: ["thumb"], track: ["track"], input: ["input"] }, g = pe(h, cE, r);
  return { ...r, ...g };
}, dE = yt("span", { name: "MuiSwitch", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.edge && r[`edge${gt(o.edge)}`], r[`size${gt(o.size)}`]];
} })({ display: "inline-flex", width: 34 + 12 * 2, height: 14 + 12 * 2, overflow: "hidden", padding: 12, boxSizing: "border-box", position: "relative", flexShrink: 0, zIndex: 0, verticalAlign: "middle", "@media print": { colorAdjust: "exact" }, variants: [{ props: { edge: "start" }, style: { marginLeft: -8 } }, { props: { edge: "end" }, style: { marginRight: -8 } }, { props: { size: "small" }, style: { width: 40, height: 24, padding: 7, [`& .${We.thumb}`]: { width: 16, height: 16 }, [`& .${We.switchBase}`]: { padding: 4, [`&.${We.checked}`]: { transform: "translateX(16px)" } } } }] }), pE = yt(Wx, { name: "MuiSwitch", slot: "SwitchBase", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.switchBase, { [`& .${We.input}`]: r.input }, o.color !== "default" && r[`color${gt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", top: 0, left: 0, zIndex: 1, color: a3.vars ? a3.vars.palette.Switch.defaultColor : `${a3.palette.mode === "light" ? a3.palette.common.white : a3.palette.grey[300]}`, transition: a3.transitions.create(["left", "transform"], { duration: a3.transitions.duration.shortest }), [`&.${We.checked}`]: { transform: "translateX(20px)" }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch.defaultDisabledColor : `${a3.palette.mode === "light" ? a3.palette.grey[100] : a3.palette.grey[600]}` }, [`&.${We.checked} + .${We.track}`]: { opacity: 0.5 }, [`&.${We.disabled} + .${We.track}`]: { opacity: a3.vars ? a3.vars.opacity.switchTrackDisabled : `${a3.palette.mode === "light" ? 0.12 : 0.2}` }, [`& .${We.input}`]: { left: "-100%", width: "300%" } })), Yt(({ theme: a3 }) => ({ "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette.action.active, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, variants: [...Object.entries(a3.palette).filter(vn(["light"])).map(([r]) => ({ props: { color: r }, style: { [`&.${We.checked}`]: { color: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette[r].main, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch[`${r}DisabledColor`] : `${a3.palette.mode === "light" ? Ia(a3.palette[r].main, 0.62) : Ja(a3.palette[r].main, 0.55)}` } }, [`&.${We.checked} + .${We.track}`]: { backgroundColor: (a3.vars || a3).palette[r].main } } }))] }))), hE = yt("span", { name: "MuiSwitch", slot: "Track", overridesResolver: (a3, r) => r.track })(Yt(({ theme: a3 }) => ({ height: "100%", width: "100%", borderRadius: 14 / 2, zIndex: -1, transition: a3.transitions.create(["opacity", "background-color"], { duration: a3.transitions.duration.shortest }), backgroundColor: a3.vars ? a3.vars.palette.common.onBackground : `${a3.palette.mode === "light" ? a3.palette.common.black : a3.palette.common.white}`, opacity: a3.vars ? a3.vars.opacity.switchTrack : `${a3.palette.mode === "light" ? 0.38 : 0.3}` }))), mE = yt("span", { name: "MuiSwitch", slot: "Thumb", overridesResolver: (a3, r) => r.thumb })(Yt(({ theme: a3 }) => ({ boxShadow: (a3.vars || a3).shadows[1], backgroundColor: "currentColor", width: 20, height: 20, borderRadius: "50%" }))), kg = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSwitch" }), { className: c, color: f = "primary", edge: p = false, size: h = "medium", sx: g, ...m } = s, S = { ...s, color: f, edge: p, size: h }, b = fE(S), C = U.jsx(mE, { className: b.thumb, ownerState: S });
  return U.jsxs(dE, { className: xt(b.root, c), sx: g, ownerState: S, children: [U.jsx(pE, { type: "checkbox", icon: C, checkedIcon: C, ref: o, ownerState: S, ...m, classes: { ...b, root: b.switchBase } }), U.jsx(hE, { className: b.track, ownerState: S })] });
});
function gE(a3) {
  return ue("MuiTab", a3);
}
const Dn = oe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), yE = (a3) => {
  const { classes: r, textColor: o, fullWidth: s, wrapped: c, icon: f, label: p, selected: h, disabled: g } = a3, m = { root: ["root", f && p && "labelIcon", `textColor${gt(o)}`, s && "fullWidth", c && "wrapped", h && "selected", g && "disabled"], icon: ["iconWrapper", "icon"] };
  return pe(m, gE, r);
}, vE = yt(qi, { name: "MuiTab", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.label && o.icon && r.labelIcon, r[`textColor${gt(o.textColor)}`], o.fullWidth && r.fullWidth, o.wrapped && r.wrapped, { [`& .${Dn.iconWrapper}`]: r.iconWrapper }, { [`& .${Dn.icon}`]: r.icon }];
} })(Yt(({ theme: a3 }) => ({ ...a3.typography.button, maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center", lineHeight: 1.25, variants: [{ props: ({ ownerState: r }) => r.label && (r.iconPosition === "top" || r.iconPosition === "bottom"), style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.label && r.iconPosition !== "top" && r.iconPosition !== "bottom", style: { flexDirection: "row" } }, { props: ({ ownerState: r }) => r.icon && r.label, style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "top", style: { [`& > .${Dn.icon}`]: { marginBottom: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "bottom", style: { [`& > .${Dn.icon}`]: { marginTop: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "start", style: { [`& > .${Dn.icon}`]: { marginRight: a3.spacing(1) } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "end", style: { [`& > .${Dn.icon}`]: { marginLeft: a3.spacing(1) } } }, { props: { textColor: "inherit" }, style: { color: "inherit", opacity: 0.6, [`&.${Dn.selected}`]: { opacity: 1 }, [`&.${Dn.disabled}`]: { opacity: (a3.vars || a3).palette.action.disabledOpacity } } }, { props: { textColor: "primary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.primary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: { textColor: "secondary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.secondary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: ({ ownerState: r }) => r.fullWidth, style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" } }, { props: ({ ownerState: r }) => r.wrapped, style: { fontSize: a3.typography.pxToRem(12) } }] }))), ef = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTab" }), { className: c, disabled: f = false, disableFocusRipple: p = false, fullWidth: h, icon: g, iconPosition: m = "top", indicator: S, label: b, onChange: C, onClick: z, onFocus: R, selected: x, selectionFollowsFocus: D, textColor: k = "inherit", value: q, wrapped: B = false, ...j } = s, w = { ...s, disabled: f, disableFocusRipple: p, selected: x, icon: !!g, iconPosition: m, label: !!b, fullWidth: h, textColor: k, wrapped: B }, V = yE(w), Y = g && b && A.isValidElement(g) ? A.cloneElement(g, { className: xt(V.icon, g.props.className) }) : g, at = (v) => {
    !x && C && C(v, q), z && z(v);
  }, X = (v) => {
    D && !x && C && C(v, q), R && R(v);
  };
  return U.jsxs(vE, { focusRipple: !p, className: xt(V.root, c), ref: o, role: "tab", "aria-selected": x, disabled: f, onClick: at, onFocus: X, ownerState: w, tabIndex: x ? 0 : -1, ...j, children: [m === "top" || m === "start" ? U.jsxs(A.Fragment, { children: [Y, b] }) : U.jsxs(A.Fragment, { children: [b, Y] }), S] });
});
function bE(a3) {
  return ue("MuiToolbar", a3);
}
oe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const SE = (a3) => {
  const { classes: r, disableGutters: o, variant: s } = a3;
  return pe({ root: ["root", !o && "gutters", s] }, bE, r);
}, xE = yt("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, !o.disableGutters && r.gutters, r[o.variant]];
} })(Yt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: a3.spacing(2), paddingRight: a3.spacing(2), [a3.breakpoints.up("sm")]: { paddingLeft: a3.spacing(3), paddingRight: a3.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: a3.mixins.toolbar }] }))), TE = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiToolbar" }), { className: c, component: f = "div", disableGutters: p = false, variant: h = "regular", ...g } = s, m = { ...s, component: f, disableGutters: p, variant: h }, S = SE(m);
  return U.jsx(xE, { as: f, className: xt(S.root, c), ref: o, ownerState: m, ...g });
}), EE = la(U.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), CE = la(U.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
function AE(a3) {
  return (1 + Math.sin(Math.PI * a3 - Math.PI / 2)) / 2;
}
function RE(a3, r, o, s = {}, c = () => {
}) {
  const { ease: f = AE, duration: p = 300 } = s;
  let h = null;
  const g = r[a3];
  let m = false;
  const S = () => {
    m = true;
  }, b = (C) => {
    if (m) {
      c(new Error("Animation cancelled"));
      return;
    }
    h === null && (h = C);
    const z = Math.min(1, (C - h) / p);
    if (r[a3] = f(z) * (o - g) + g, z >= 1) {
      requestAnimationFrame(() => {
        c(null);
      });
      return;
    }
    requestAnimationFrame(b);
  };
  return g === o ? (c(new Error("Element already at target position")), S) : (requestAnimationFrame(b), S);
}
const wE = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function ME(a3) {
  const { onChange: r, ...o } = a3, s = A.useRef(), c = A.useRef(null), f = () => {
    s.current = c.current.offsetHeight - c.current.clientHeight;
  };
  return Di(() => {
    const p = p0(() => {
      const g = s.current;
      f(), g !== s.current && r(s.current);
    }), h = xr(c.current);
    return h.addEventListener("resize", p), () => {
      p.clear(), h.removeEventListener("resize", p);
    };
  }, [r]), A.useEffect(() => {
    f(), r(s.current);
  }, [r]), U.jsx("div", { style: wE, ...o, ref: c });
}
function OE(a3) {
  return ue("MuiTabScrollButton", a3);
}
const zE = oe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), _E = (a3) => {
  const { classes: r, orientation: o, disabled: s } = a3;
  return pe({ root: ["root", o, s && "disabled"] }, OE, r);
}, kE = yt(qi, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.orientation && r[o.orientation]];
} })({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${zE.disabled}`]: { opacity: 0 }, variants: [{ props: { orientation: "vertical" }, style: { width: "100%", height: 40, "& svg": { transform: "var(--TabScrollButton-svgRotate)" } } }] }), DE = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTabScrollButton" }), { className: c, slots: f = {}, slotProps: p = {}, direction: h, orientation: g, disabled: m, ...S } = s, b = Lf(), C = { isRtl: b, ...s }, z = _E(C), R = f.StartScrollButtonIcon ?? EE, x = f.EndScrollButtonIcon ?? CE, D = hn({ elementType: R, externalSlotProps: p.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: C }), k = hn({ elementType: x, externalSlotProps: p.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: C });
  return U.jsx(kE, { component: "div", className: xt(z.root, c), ref: o, role: null, ownerState: C, tabIndex: null, ...S, style: { ...S.style, ...g === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${b ? -90 : 90}deg)` } }, children: h === "left" ? U.jsx(R, { ...D }) : U.jsx(x, { ...k }) });
});
function BE(a3) {
  return ue("MuiTabs", a3);
}
const nf = oe("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Dg = (a3, r) => a3 === r ? a3.firstChild : r && r.nextElementSibling ? r.nextElementSibling : a3.firstChild, Bg = (a3, r) => a3 === r ? a3.lastChild : r && r.previousElementSibling ? r.previousElementSibling : a3.lastChild, rs = (a3, r, o) => {
  let s = false, c = o(a3, r);
  for (; c; ) {
    if (c === a3.firstChild) {
      if (s) return;
      s = true;
    }
    const f = c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || f) c = o(a3, c);
    else {
      c.focus();
      return;
    }
  }
}, NE = (a3) => {
  const { vertical: r, fixed: o, hideScrollbar: s, scrollableX: c, scrollableY: f, centered: p, scrollButtonsHideMobile: h, classes: g } = a3;
  return pe({ root: ["root", r && "vertical"], scroller: ["scroller", o && "fixed", s && "hideScrollbar", c && "scrollableX", f && "scrollableY"], flexContainer: ["flexContainer", r && "flexContainerVertical", p && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", h && "scrollButtonsHideMobile"], scrollableX: [c && "scrollableX"], hideScrollbar: [s && "hideScrollbar"] }, BE, g);
}, UE = yt("div", { name: "MuiTabs", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${nf.scrollButtons}`]: r.scrollButtons }, { [`& .${nf.scrollButtons}`]: o.scrollButtonsHideMobile && r.scrollButtonsHideMobile }, r.root, o.vertical && r.vertical];
} })(Yt(({ theme: a3 }) => ({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex", variants: [{ props: ({ ownerState: r }) => r.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.scrollButtonsHideMobile, style: { [`& .${nf.scrollButtons}`]: { [a3.breakpoints.down("sm")]: { display: "none" } } } }] }))), HE = yt("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.scroller, o.fixed && r.fixed, o.hideScrollbar && r.hideScrollbar, o.scrollableX && r.scrollableX, o.scrollableY && r.scrollableY];
} })({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap", variants: [{ props: ({ ownerState: a3 }) => a3.fixed, style: { overflowX: "hidden", width: "100%" } }, { props: ({ ownerState: a3 }) => a3.hideScrollbar, style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, { props: ({ ownerState: a3 }) => a3.scrollableX, style: { overflowX: "auto", overflowY: "hidden" } }, { props: ({ ownerState: a3 }) => a3.scrollableY, style: { overflowY: "auto", overflowX: "hidden" } }] }), jE = yt("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.flexContainer, o.vertical && r.flexContainerVertical, o.centered && r.centered];
} })({ display: "flex", variants: [{ props: ({ ownerState: a3 }) => a3.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: a3 }) => a3.centered, style: { justifyContent: "center" } }] }), LE = yt("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (a3, r) => r.indicator })(Yt(({ theme: a3 }) => ({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: a3.transitions.create(), variants: [{ props: { indicatorColor: "primary" }, style: { backgroundColor: (a3.vars || a3).palette.primary.main } }, { props: { indicatorColor: "secondary" }, style: { backgroundColor: (a3.vars || a3).palette.secondary.main } }, { props: ({ ownerState: r }) => r.vertical, style: { height: "100%", width: 2, right: 0 } }] }))), $E = yt(ME)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), Ng = {}, qE = A.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTabs" }), c = $i(), f = Lf(), { "aria-label": p, "aria-labelledby": h, action: g, centered: m = false, children: S, className: b, component: C = "div", allowScrollButtonsMobile: z = false, indicatorColor: R = "primary", onChange: x, orientation: D = "horizontal", ScrollButtonComponent: k = DE, scrollButtons: q = "auto", selectionFollowsFocus: B, slots: j = {}, slotProps: w = {}, TabIndicatorProps: V = {}, TabScrollButtonProps: Y = {}, textColor: at = "primary", value: X, variant: v = "standard", visibleScrollbar: P = false, ...lt } = s, nt = v === "scrollable", tt = D === "vertical", F = tt ? "scrollTop" : "scrollLeft", H = tt ? "top" : "left", J = tt ? "bottom" : "right", W = tt ? "clientHeight" : "clientWidth", et = tt ? "height" : "width", E = { ...s, component: C, allowScrollButtonsMobile: z, indicatorColor: R, orientation: D, vertical: tt, scrollButtons: q, textColor: at, variant: v, visibleScrollbar: P, fixed: !nt, hideScrollbar: nt && !P, scrollableX: nt && !tt, scrollableY: nt && tt, centered: m && !nt, scrollButtonsHideMobile: !z }, $ = NE(E), it = hn({ elementType: j.StartScrollButtonIcon, externalSlotProps: w.startScrollButtonIcon, ownerState: E }), st = hn({ elementType: j.EndScrollButtonIcon, externalSlotProps: w.endScrollButtonIcon, ownerState: E }), [rt, St] = A.useState(false), [ht, Jt] = A.useState(Ng), [Et, Ut] = A.useState(false), [Mt, ce] = A.useState(false), [It, Lt] = A.useState(false), [Oe, bn] = A.useState({ overflow: "hidden", scrollbarWidth: 0 }), Ye = /* @__PURE__ */ new Map(), Ht = A.useRef(null), fe = A.useRef(null), sn = () => {
    const ft = Ht.current;
    let dt;
    if (ft) {
      const Bt = ft.getBoundingClientRect();
      dt = { clientWidth: ft.clientWidth, scrollLeft: ft.scrollLeft, scrollTop: ft.scrollTop, scrollWidth: ft.scrollWidth, top: Bt.top, bottom: Bt.bottom, left: Bt.left, right: Bt.right };
    }
    let Tt;
    if (ft && X !== false) {
      const Bt = fe.current.children;
      if (Bt.length > 0) {
        const le = Bt[Ye.get(X)];
        Tt = le ? le.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: dt, tabMeta: Tt };
  }, Ue = Ie(() => {
    const { tabsMeta: ft, tabMeta: dt } = sn();
    let Tt = 0, Bt;
    tt ? (Bt = "top", dt && ft && (Tt = dt.top - ft.top + ft.scrollTop)) : (Bt = f ? "right" : "left", dt && ft && (Tt = (f ? -1 : 1) * (dt[Bt] - ft[Bt] + ft.scrollLeft)));
    const le = { [Bt]: Tt, [et]: dt ? dt[et] : 0 };
    if (typeof ht[Bt] != "number" || typeof ht[et] != "number") Jt(le);
    else {
      const Ve = Math.abs(ht[Bt] - le[Bt]), en = Math.abs(ht[et] - le[et]);
      (Ve >= 1 || en >= 1) && Jt(le);
    }
  }), tn = (ft, { animation: dt = true } = {}) => {
    dt ? RE(F, Ht.current, ft, { duration: c.transitions.duration.standard }) : Ht.current[F] = ft;
  }, bt = (ft) => {
    let dt = Ht.current[F];
    tt ? dt += ft : dt += ft * (f ? -1 : 1), tn(dt);
  }, $n = () => {
    const ft = Ht.current[W];
    let dt = 0;
    const Tt = Array.from(fe.current.children);
    for (let Bt = 0; Bt < Tt.length; Bt += 1) {
      const le = Tt[Bt];
      if (dt + le[W] > ft) {
        Bt === 0 && (dt = ft);
        break;
      }
      dt += le[W];
    }
    return dt;
  }, He = () => {
    bt(-1 * $n());
  }, ut = () => {
    bt($n());
  }, ot = A.useCallback((ft) => {
    bn({ overflow: null, scrollbarWidth: ft });
  }, []), At = () => {
    const ft = {};
    ft.scrollbarSizeListener = nt ? U.jsx($E, { onChange: ot, className: xt($.scrollableX, $.hideScrollbar) }) : null;
    const Tt = nt && (q === "auto" && (Et || Mt) || q === true);
    return ft.scrollButtonStart = Tt ? U.jsx(k, { slots: { StartScrollButtonIcon: j.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: it }, orientation: D, direction: f ? "right" : "left", onClick: He, disabled: !Et, ...Y, className: xt($.scrollButtons, Y.className) }) : null, ft.scrollButtonEnd = Tt ? U.jsx(k, { slots: { EndScrollButtonIcon: j.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: st }, orientation: D, direction: f ? "left" : "right", onClick: ut, disabled: !Mt, ...Y, className: xt($.scrollButtons, Y.className) }) : null, ft;
  }, Ot = Ie((ft) => {
    const { tabsMeta: dt, tabMeta: Tt } = sn();
    if (!(!Tt || !dt)) {
      if (Tt[H] < dt[H]) {
        const Bt = dt[F] + (Tt[H] - dt[H]);
        tn(Bt, { animation: ft });
      } else if (Tt[J] > dt[J]) {
        const Bt = dt[F] + (Tt[J] - dt[J]);
        tn(Bt, { animation: ft });
      }
    }
  }), zt = Ie(() => {
    nt && q !== false && Lt(!It);
  });
  A.useEffect(() => {
    const ft = p0(() => {
      Ht.current && Ue();
    });
    let dt;
    const Tt = (Ve) => {
      Ve.forEach((en) => {
        en.removedNodes.forEach((Gt) => {
          dt == null ? void 0 : dt.unobserve(Gt);
        }), en.addedNodes.forEach((Gt) => {
          dt == null ? void 0 : dt.observe(Gt);
        });
      }), ft(), zt();
    }, Bt = xr(Ht.current);
    Bt.addEventListener("resize", ft);
    let le;
    return typeof ResizeObserver < "u" && (dt = new ResizeObserver(ft), Array.from(fe.current.children).forEach((Ve) => {
      dt.observe(Ve);
    })), typeof MutationObserver < "u" && (le = new MutationObserver(Tt), le.observe(fe.current, { childList: true })), () => {
      ft.clear(), Bt.removeEventListener("resize", ft), le == null ? void 0 : le.disconnect(), dt == null ? void 0 : dt.disconnect();
    };
  }, [Ue, zt]), A.useEffect(() => {
    const ft = Array.from(fe.current.children), dt = ft.length;
    if (typeof IntersectionObserver < "u" && dt > 0 && nt && q !== false) {
      const Tt = ft[0], Bt = ft[dt - 1], le = { root: Ht.current, threshold: 0.99 }, Ve = (Sn) => {
        Ut(!Sn[0].isIntersecting);
      }, en = new IntersectionObserver(Ve, le);
      en.observe(Tt);
      const Gt = (Sn) => {
        ce(!Sn[0].isIntersecting);
      }, Pt = new IntersectionObserver(Gt, le);
      return Pt.observe(Bt), () => {
        en.disconnect(), Pt.disconnect();
      };
    }
  }, [nt, q, It, S == null ? void 0 : S.length]), A.useEffect(() => {
    St(true);
  }, []), A.useEffect(() => {
    Ue();
  }), A.useEffect(() => {
    Ot(Ng !== ht);
  }, [Ot, ht]), A.useImperativeHandle(g, () => ({ updateIndicator: Ue, updateScrollButtons: zt }), [Ue, zt]);
  const Rt = U.jsx(LE, { ...V, className: xt($.indicator, V.className), ownerState: E, style: { ...ht, ...V.style } });
  let Ce = 0;
  const Ge = A.Children.map(S, (ft) => {
    if (!A.isValidElement(ft)) return null;
    const dt = ft.props.value === void 0 ? Ce : ft.props.value;
    Ye.set(dt, Ce);
    const Tt = dt === X;
    return Ce += 1, A.cloneElement(ft, { fullWidth: v === "fullWidth", indicator: Tt && !rt && Rt, selected: Tt, selectionFollowsFocus: B, onChange: x, textColor: at, value: dt, ...Ce === 1 && X === false && !ft.props.tabIndex ? { tabIndex: 0 } : {} });
  }), te = (ft) => {
    const dt = fe.current, Tt = Je(dt).activeElement;
    if (Tt.getAttribute("role") !== "tab") return;
    let le = D === "horizontal" ? "ArrowLeft" : "ArrowUp", Ve = D === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (D === "horizontal" && f && (le = "ArrowRight", Ve = "ArrowLeft"), ft.key) {
      case le:
        ft.preventDefault(), rs(dt, Tt, Bg);
        break;
      case Ve:
        ft.preventDefault(), rs(dt, Tt, Dg);
        break;
      case "Home":
        ft.preventDefault(), rs(dt, null, Dg);
        break;
      case "End":
        ft.preventDefault(), rs(dt, null, Bg);
        break;
    }
  }, Kt = At();
  return U.jsxs(UE, { className: xt($.root, b), ownerState: E, ref: o, as: C, ...lt, children: [Kt.scrollButtonStart, Kt.scrollbarSizeListener, U.jsxs(HE, { className: $.scroller, ownerState: E, style: { overflow: Oe.overflow, [tt ? `margin${f ? "Left" : "Right"}` : "marginBottom"]: P ? void 0 : -Oe.scrollbarWidth }, ref: Ht, children: [U.jsx(jE, { "aria-label": p, "aria-labelledby": h, "aria-orientation": D === "vertical" ? "vertical" : null, className: $.flexContainer, ownerState: E, onKeyDown: te, ref: fe, role: "tablist", children: Ge }), rt && Rt] }), Kt.scrollButtonEnd] });
}), k0 = A.createContext(null);
function YE() {
  const [a3, r] = A.useState(null);
  return A.useEffect(() => {
    r(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []), a3;
}
function GE(a3) {
  const { children: r, value: o } = a3, s = YE(), c = A.useMemo(() => ({ idPrefix: s, value: o }), [s, o]);
  return U.jsx(k0.Provider, { value: c, children: r });
}
function D0() {
  return A.useContext(k0);
}
function B0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-P-${r}`;
}
function N0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-T-${r}`;
}
const VE = A.forwardRef(function(r, o) {
  const { children: s, ...c } = r, f = D0();
  if (f === null) throw new TypeError("No TabContext provided");
  const p = A.Children.map(s, (h) => A.isValidElement(h) ? A.cloneElement(h, { "aria-controls": B0(f, h.props.value), id: N0(f, h.props.value) }) : null);
  return U.jsx(qE, { ...c, ref: o, value: f.value, children: p });
});
function XE(a3) {
  return ue("MuiTabPanel", a3);
}
oe("MuiTabPanel", ["root", "hidden"]);
const QE = (a3) => {
  const { classes: r, hidden: o } = a3;
  return pe({ root: ["root", o && "hidden"] }, XE, r);
}, KE = yt("div", { name: "MuiTabPanel", slot: "Root", overridesResolver: (a3, r) => r.root })(({ theme: a3 }) => ({ padding: a3.spacing(3) })), af = A.forwardRef(function(r, o) {
  const s = y2({ props: r, name: "MuiTabPanel" }), { children: c, className: f, value: p, keepMounted: h = false, ...g } = s, m = { ...s }, S = QE(m), b = D0();
  if (b === null) throw new TypeError("No TabContext provided");
  const C = B0(b, p), z = N0(b, p);
  return U.jsx(KE, { "aria-labelledby": z, className: xt(S.root, f), hidden: p !== b.value, id: C, ref: o, role: "tabpanel", ownerState: m, ...g, children: (h || p === b.value) && c });
}), PE = la(U.jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8" }), "Replay");
class rn {
  constructor(r, o) {
    __publicField(this, "x");
    __publicField(this, "y");
    this.x = r, this.y = o;
  }
  static new(r, o) {
    return new rn(r, o);
  }
  asKey() {
    return `coord[${this.x},${this.y}]`;
  }
  equals(r, o) {
    return r instanceof rn ? this.x === r.x && this.y === r.y : typeof r == "number" && typeof o == "number" ? this.x === r && this.y === o : false;
  }
}
class ZE {
  constructor(r) {
    __publicField(this, "position");
    this.position = r;
  }
  getPosition() {
    return this.position;
  }
  isAt(r, o) {
    return r instanceof rn ? this.position.equals(r) : this.position.equals(r, o);
  }
}
class FE {
  constructor() {
    __publicField(this, "direction");
    __publicField(this, "positions");
    __publicField(this, "lastTickDirection");
    __publicField(this, "growth");
    __publicField(this, "keyPressQueue");
    __publicField(this, "keyPressedThisTick");
    this.positions = [rn.new(5, 7), rn.new(5, 6), rn.new(5, 5)], this.direction = "right", this.lastTickDirection = "right", this.growth = 0, this.keyPressQueue = "", this.keyPressedThisTick = false;
  }
  getHead() {
    return this.positions[0];
  }
  getPositions() {
    return this.positions.slice();
  }
  tick() {
    this.lastTickDirection = this.direction;
    const r = this.getTickedHead();
    if (this.positions.unshift(r), this.growth == 0 ? this.positions.pop() : this.growth -= 1, this.keyPressQueue !== "") {
      this.keyPressedThisTick = false;
      const o = this.keyPressQueue;
      this.keyPressQueue = "", this.setDirection(o);
    }
    this.keyPressedThisTick = false;
  }
  eat() {
    this.growth += 1;
  }
  isDead(r, o) {
    const s = this.getHead();
    return s.x < 0 || s.x >= r || s.y < 0 || s.y >= o ? true : this.positions.slice(1).some((f) => f.equals(s));
  }
  setDirection(r) {
    if (!this.keyPressedThisTick) {
      if (this.oppositeDirection(this.lastTickDirection, r)) return;
      this.direction = r, this.keyPressedThisTick = true;
      return;
    }
    this.keyPressQueue = r;
  }
  oppositeDirection(r, o) {
    return r === "up" && o === "down" || r === "down" && o === "up" || r === "left" && o === "right" || r === "right" && o === "left";
  }
  getTickedHead() {
    const r = this.getHead();
    switch (this.direction) {
      case "up":
        return rn.new(r.x - 1, r.y);
      case "down":
        return rn.new(r.x + 1, r.y);
      case "left":
        return rn.new(r.x, r.y - 1);
      case "right":
        return rn.new(r.x, r.y + 1);
      default:
        return r;
    }
  }
}
class Ug {
  constructor(r) {
    __publicField(this, "gridSize");
    __publicField(this, "snake");
    __publicField(this, "foods");
    this.gridSize = r, this.snake = new FE(), this.foods = [], this.spawnFood();
  }
  getSnakeCoords() {
    return this.snake.getPositions();
  }
  setDirection(r) {
    this.snake.setDirection(r);
  }
  getFoods() {
    return this.foods;
  }
  tick() {
    let r = 0;
    if (this.snake.isDead(this.gridSize, this.gridSize)) return r;
    this.snake.tick();
    const o = this.snake.getHead(), s = this.foods.filter((c) => c.isAt(o));
    return s.forEach((c) => {
      this.snake.eat();
    }), s.length > 0 && (this.spawnFood(), r += s.length), this.foods = this.foods.filter((c) => !c.isAt(o)), r;
  }
  gameOver() {
    return this.snake.isDead(this.gridSize, this.gridSize);
  }
  spawnFood() {
    const r = this.uniqueRandomCoord(), o = new ZE(r);
    this.foods.push(o);
  }
  uniqueRandomCoord() {
    let r;
    do {
      const o = Math.floor(Math.random() * this.gridSize), s = Math.floor(Math.random() * this.gridSize);
      r = rn.new(o, s);
    } while (this.snake.getPositions().some((o) => o.equals(r)) || this.foods.some((o) => o.isAt(r)));
    return r;
  }
}
function U0(a3, r, o, s, c = "1px solid black") {
  const [f, p] = a3, [h, g] = r.map((m) => `${m}px`);
  return U.jsx("div", { className: "grid", children: Array(f).fill(0).map((m, S) => U.jsx("div", { className: "row", children: Array(p).fill(0).map((b, C) => {
    const z = new rn(S, C), R = o.get(z.asKey());
    return U.jsx(Fa, { className: "cell", sx: { backgroundColor: R ?? s, height: h, width: g, border: c } }, C);
  }) }, S)) });
}
function WE() {
  const a3 = "#61dafb", r = "#ff6347", o = "#282c34", h = "#870089", [g, m] = A.useState(0), [S, b] = A.useState(300), [C, z] = A.useState(new Ug(20)), [R, x] = A.useState(/* @__PURE__ */ new Map()), [D, k] = A.useState(false), q = () => U0([20, 20], [30, 30], R, o), B = (Y) => {
    const at = /* @__PURE__ */ new Map();
    for (const X of Y.getSnakeCoords()) at.set(X.asKey(), a3);
    for (const X of Y.getFoods()) at.set(X.getPosition().asKey(), r);
    return at;
  }, j = () => {
    const Y = new Ug(20);
    z(Y), m(0), k(false), x(B(C));
  }, w = A.useCallback((Y) => {
    switch (Y.key) {
      case "ArrowUp":
        C.setDirection("up");
        break;
      case "ArrowDown":
        C.setDirection("down");
        break;
      case "ArrowLeft":
        C.setDirection("left");
        break;
      case "ArrowRight":
        C.setDirection("right");
        break;
      case "r":
        j();
        break;
    }
  }, [C]);
  A.useEffect(() => (window.addEventListener("keydown", w), () => {
    window.removeEventListener("keydown", w);
  }), [C]), A.useEffect(() => {
    const Y = setInterval(() => {
      const at = C.tick();
      m((X) => X + at), C.gameOver() && k(true), x(B(C));
    }, S);
    return () => {
      clearInterval(Y);
    };
  }, [C, S]);
  const V = q();
  return U.jsxs(U.Fragment, { children: [U.jsx(uE, { open: D, autoHideDuration: 6e3, anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: U.jsxs(vx, { onClose: () => k(false), severity: "error", sx: { width: "100%" }, children: ["Game Over! Your score is ", g, "."] }) }), U.jsx(Bs, { elevation: 15, children: V }), U.jsx(Fa, { component: "section", color: "secondary", sx: { p: "10px" }, children: U.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", margin: "0px" }, children: [U.jsx(_0, { "aria-label": "Speed", value: 300 - S, min: 10, max: 300, color: "secondary", onChange: (Y) => {
    const at = Y.target;
    b(300 - Number(at.value));
  }, marks: [{ value: 10, label: "Slow" }, { value: 300, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${h}` } } }), U.jsxs("div", { style: { margin: "0px", color: `${h}` }, children: ["Score: ", g, U.jsxs(ET, { color: "secondary", variant: "extended", sx: { fontSize: "0.65rem", color: `${h}` }, onClick: j, children: [U.jsx(PE, { sx: { ml: -1 } }), " Restart"] })] })] }) })] });
}
const JE = la(U.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z" }), "Info");
let se;
const H0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && H0.decode();
let Ri = null;
function IE() {
  return (Ri === null || Ri.byteLength === 0) && (Ri = new Uint8Array(se.memory.buffer)), Ri;
}
function tC(a3, r) {
  return a3 = a3 >>> 0, H0.decode(IE().subarray(a3, a3 + r));
}
let El = null;
function eC() {
  return (El === null || El.buffer.detached === true || El.buffer.detached === void 0 && El.buffer !== se.memory.buffer) && (El = new DataView(se.memory.buffer)), El;
}
function nC(a3, r) {
  a3 = a3 >>> 0;
  const o = eC(), s = [];
  for (let c = a3; c < a3 + 4 * r; c += 4) s.push(se.__wbindgen_export_0.get(o.getUint32(c, true)));
  return se.__externref_drop_slice(a3, r), s;
}
const Hg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => se.__wbg_coordrs_free(a3 >>> 0, 1));
class Kf {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create(Kf.prototype);
    return o.__wbg_ptr = r, Hg.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hg.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    se.__wbg_coordrs_free(r, 0);
  }
  get x() {
    return se.__wbg_get_coordrs_x(this.__wbg_ptr) >>> 0;
  }
  set x(r) {
    se.__wbg_set_coordrs_x(this.__wbg_ptr, r);
  }
  get y() {
    return se.__wbg_get_coordrs_y(this.__wbg_ptr) >>> 0;
  }
  set y(r) {
    se.__wbg_set_coordrs_y(this.__wbg_ptr, r);
  }
}
const jg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => se.__wbg_terrarium_free(a3 >>> 0, 1));
class Ss {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create(Ss.prototype);
    return o.__wbg_ptr = r, jg.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jg.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    se.__wbg_terrarium_free(r, 0);
  }
  static new(r, o) {
    const s = se.terrarium_new(r, o);
    return Ss.__wrap(s);
  }
  toggle(r, o) {
    se.terrarium_toggle(this.__wbg_ptr, r, o);
  }
  set(r, o, s) {
    se.terrarium_set(this.__wbg_ptr, r, o, s);
  }
  get_cells() {
    const r = se.terrarium_get_cells(this.__wbg_ptr);
    var o = nC(r[0], r[1]).slice();
    return se.__wbindgen_free(r[0], r[1] * 4, 4), o;
  }
  tick(r) {
    se.terrarium_tick(this.__wbg_ptr, r);
  }
}
async function aC(a3, r) {
  if (typeof Response == "function" && a3 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(a3, r);
    } catch (s) {
      if (a3.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const o = await a3.arrayBuffer();
    return await WebAssembly.instantiate(o, r);
  } else {
    const o = await WebAssembly.instantiate(a3, r);
    return o instanceof WebAssembly.Instance ? { instance: o, module: a3 } : o;
  }
}
function lC() {
  const a3 = {};
  return a3.wbg = {}, a3.wbg.__wbg_coordrs_new = function(r) {
    return Kf.__wrap(r);
  }, a3.wbg.__wbindgen_init_externref_table = function() {
    const r = se.__wbindgen_export_0, o = r.grow(4);
    r.set(0, void 0), r.set(o + 0, void 0), r.set(o + 1, null), r.set(o + 2, true), r.set(o + 3, false);
  }, a3.wbg.__wbindgen_throw = function(r, o) {
    throw new Error(tC(r, o));
  }, a3;
}
function rC(a3, r) {
  return se = a3.exports, j0.__wbindgen_wasm_module = r, El = null, Ri = null, se.__wbindgen_start(), se;
}
async function j0(a3) {
  if (se !== void 0) return se;
  typeof a3 < "u" && (Object.getPrototypeOf(a3) === Object.prototype ? { module_or_path: a3 } = a3 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof a3 > "u" && (a3 = new URL("/assets/wasm-frontman_bg-Bo8dvM5D.wasm", import.meta.url));
  const r = lC();
  (typeof a3 == "string" || typeof Request == "function" && a3 instanceof Request || typeof URL == "function" && a3 instanceof URL) && (a3 = fetch(a3));
  const { instance: o, module: s } = await aC(await a3, r);
  return rC(o, s);
}
const iC = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "#242424", border: "2px solid #000", boxShadow: 24, p: 4 };
function oC() {
  const f = Math.round(33.333333333333336), p = Math.round(1e3 / 30), h = "#ff6347", g = "#282c34", m = A.useRef(null), S = (J) => rn.new(J.x, J.y), b = (J) => U0([30, 30], [f, p], J, g, "1px solid black"), C = (J) => {
    const W = /* @__PURE__ */ new Map();
    J.get_cells().map((et) => S(et)).forEach((et) => {
      W.set(et.asKey(), h);
    }), lt(W);
  }, z = (J) => {
    J.tick(X), C(J);
  }, R = (J) => {
    v((W) => !W);
  }, x = (J) => {
    V((W) => !W);
  }, D = (J) => {
    const W = (et, E) => E < 0 || et < 0 || E >= 30 || et >= 30;
    if (m.current && F !== null) {
      const et = m.current.getBoundingClientRect(), E = J.clientX - et.left, $ = J.clientY - et.top, it = Math.floor(E / (p + 1 * 1)), st = Math.floor($ / (f + 2 * 1));
      W(st, it) || F.toggle(st, it), C(F);
    }
  }, k = (J) => {
    J.key === " " && F !== null && z(F);
  }, q = () => U.jsx(bT, { open: nt, onClose: () => tt(false), "aria-labeledby": "help-modal", "aria-describedby": "help-modal-description", children: U.jsxs(Fa, { sx: iC, children: [U.jsx(Tr, { id: "modal-modal-title", variant: "h5", component: "h2", children: 'Interactive finite "Game of Life" toy' }), U.jsx(Tr, { id: "modal-modal-title", variant: "h6", component: "h2", children: 'You can click one the grid to toggle the cells as "alive" or "dead". Pressing space will tick the simulation. There are toggles for whether the border is considered alive, and an auto-play feature with adjustable speed.' })] }) }), [B, j] = A.useState(false), [w, V] = A.useState(false), [Y, at] = A.useState(20), [X, v] = A.useState(false), [P, lt] = A.useState(/* @__PURE__ */ new Map()), [nt, tt] = A.useState(false), [F, H] = A.useState(null);
  return A.useEffect(() => w ? () => {
  } : (window.addEventListener("keydown", k), () => {
    window.removeEventListener("keydown", k);
  }), [F, w, X]), A.useEffect(() => {
    if (!w) return;
    const J = setInterval(() => {
      F !== null && z(F);
    }, 1e3 - 9 * Y);
    return () => clearInterval(J);
  }, [F, w, Y, X]), j0().then(() => {
    if (B) return;
    const J = Ss.new(30, 30);
    H(J), j(true);
  }), B ? U.jsxs("div", { style: { display: "flex" }, children: [q(), U.jsxs(_T, { children: [U.jsx(Rg, { control: U.jsx(kg, { checked: X, onChange: R }), label: "Border lives" }), U.jsx(Rg, { control: U.jsx(kg, { checked: w, onChange: x }), label: "Auto tick" }), U.jsxs(Fa, { marginRight: "15px", children: ["Tick speed", U.jsx(_0, { ...w ? { disabled: false } : { disabled: true }, "aria-label": "auto tick speed", value: Y, min: 1, max: 100, onChange: (J, W) => at(Number(W)) })] }), U.jsxs(Fa, { onClick: () => tt(true), children: [U.jsx(JE, {}), " What gives?"] })] }), U.jsx("div", { ref: m, onClick: D, style: { width: 1e3, height: 1e3 }, children: b(P) })] }) : U.jsx("div", { children: "Loading..." });
}
function sC() {
  const r = "https://avatars.githubusercontent.com/u/19390975?s=400&u=1358e735334214fa0a842a63d949fe5363e88494&v=4", [o, s] = A.useState("start"), c = (f, p) => {
    s(p);
  };
  return U.jsxs(Fa, { sx: { display: "flex" }, children: [U.jsx(wx, { position: "fixed", color: "primary", sx: { height: "65px" }, children: U.jsxs(TE, { sx: { display: "flex", justifyContent: "flex-end" }, children: [U.jsx(jx, { src: r, alt: "Martin Frisk", sx: { border: "2px solid#222222", marginRight: "20px" } }), U.jsx(Tr, { variant: "h5", noWrap: true, component: "div", children: "mightypirate1" })] }) }), U.jsx(Fa, { component: "nav", sx: { width: "100hh", marginTop: "65px" }, children: U.jsxs(GE, { value: o, children: [U.jsx(Fa, { sx: { borderBottom: 1, borderColor: "divider" }, children: U.jsxs(VE, { onChange: c, "aria-label": "lab API tabs example", children: [U.jsx(ef, { label: "Disclaimer", value: "start" }), U.jsx(ef, { label: "Snake", value: "snake" }), U.jsx(ef, { label: "Life", value: "life" })] }) }), U.jsxs(af, { value: "start", children: [U.jsx(Tr, { children: "I am not a frontender, as you well can tell!" }), "Either way, there are some toys on the tabs above."] }), U.jsx(af, { value: "snake", children: U.jsx(WE, {}) }), U.jsx(af, { value: "life", children: U.jsx(oC, {}) })] }) })] });
}
function uC() {
  return U.jsx(sC, {});
}
rb.createRoot(document.getElementById("root")).render(U.jsx(A.StrictMode, { children: U.jsx(uC, {}) }));
