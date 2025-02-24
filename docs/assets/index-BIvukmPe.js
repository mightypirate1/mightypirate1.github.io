var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function eb(a3, r) {
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
function Gg(a3) {
  return a3 && a3.__esModule && Object.prototype.hasOwnProperty.call(a3, "default") ? a3.default : a3;
}
var Xc = { exports: {} }, xi = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dm;
function nb() {
  if (Dm) return xi;
  Dm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, c, f) {
    var p = null;
    if (f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      f = {};
      for (var h in c) h !== "key" && (f[h] = c[h]);
    } else f = c;
    return c = f.ref, { $$typeof: a3, type: s, key: p, ref: c !== void 0 ? c : null, props: f };
  }
  return xi.Fragment = r, xi.jsx = o, xi.jsxs = o, xi;
}
var Bm;
function ab() {
  return Bm || (Bm = 1, Xc.exports = nb()), Xc.exports;
}
var z = ab(), Pc = { exports: {} }, zt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nm;
function lb() {
  if (Nm) return zt;
  Nm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object" ? null : (E = b && E[b] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var _ = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, x = {};
  function N(E, L, ot) {
    this.props = E, this.context = L, this.refs = x, this.updater = ot || _;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, L, "setState");
  }, N.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function D() {
  }
  D.prototype = N.prototype;
  function q(E, L, ot) {
    this.props = E, this.context = L, this.refs = x, this.updater = ot || _;
  }
  var B = q.prototype = new D();
  B.constructor = q, A(B, N.prototype), B.isPureReactComponent = true;
  var H = Array.isArray, R = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function Z(E, L, ot, st, rt, St) {
    return ot = St.ref, { $$typeof: a3, type: E, key: L, ref: ot !== void 0 ? ot : null, props: St };
  }
  function it(E, L) {
    return Z(E.type, L, void 0, void 0, void 0, E.props);
  }
  function G(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a3;
  }
  function y(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ot) {
      return L[ot];
    });
  }
  var P = /\/+/g;
  function lt(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? y("" + E.key) : L.toString(36);
  }
  function at() {
  }
  function I(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(at, at) : (E.status = "pending", E.then(function(L) {
          E.status === "pending" && (E.status = "fulfilled", E.value = L);
        }, function(L) {
          E.status === "pending" && (E.status = "rejected", E.reason = L);
        })), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Y(E, L, ot, st, rt) {
    var St = typeof E;
    (St === "undefined" || St === "boolean") && (E = null);
    var nt = false;
    if (E === null) nt = true;
    else switch (St) {
      case "bigint":
      case "string":
      case "number":
        nt = true;
        break;
      case "object":
        switch (E.$$typeof) {
          case a3:
          case r:
            nt = true;
            break;
          case S:
            return nt = E._init, Y(nt(E._payload), L, ot, st, rt);
        }
    }
    if (nt) return rt = rt(E), nt = st === "" ? "." + lt(E, 0) : st, H(rt) ? (ot = "", nt != null && (ot = nt.replace(P, "$&/") + "/"), Y(rt, L, ot, "", function(Ct) {
      return Ct;
    })) : rt != null && (G(rt) && (rt = it(rt, ot + (rt.key == null || E && E.key === rt.key ? "" : ("" + rt.key).replace(P, "$&/") + "/") + nt)), L.push(rt)), 1;
    nt = 0;
    var yt = st === "" ? "." : st + ":";
    if (H(E)) for (var dt = 0; dt < E.length; dt++) st = E[dt], St = yt + lt(st, dt), nt += Y(st, L, ot, St, rt);
    else if (dt = w(E), typeof dt == "function") for (E = dt.call(E), dt = 0; !(st = E.next()).done; ) st = st.value, St = yt + lt(st, dt++), nt += Y(st, L, ot, St, rt);
    else if (St === "object") {
      if (typeof E.then == "function") return Y(I(E), L, ot, st, rt);
      throw L = String(E), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nt;
  }
  function U(E, L, ot) {
    if (E == null) return E;
    var st = [], rt = 0;
    return Y(E, st, "", "", function(St) {
      return L.call(ot, St, rt++);
    }), st;
  }
  function J(E) {
    if (E._status === -1) {
      var L = E._result;
      L = L(), L.then(function(ot) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ot);
      }, function(ot) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ot);
      }), E._status === -1 && (E._status = 0, E._result = L);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var W = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E), error: E });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function et() {
  }
  return zt.Children = { map: U, forEach: function(E, L, ot) {
    U(E, function() {
      L.apply(this, arguments);
    }, ot);
  }, count: function(E) {
    var L = 0;
    return U(E, function() {
      L++;
    }), L;
  }, toArray: function(E) {
    return U(E, function(L) {
      return L;
    }) || [];
  }, only: function(E) {
    if (!G(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, zt.Component = N, zt.Fragment = o, zt.Profiler = c, zt.PureComponent = q, zt.StrictMode = s, zt.Suspense = g, zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, zt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, zt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, zt.cloneElement = function(E, L, ot) {
    if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
    var st = A({}, E.props), rt = E.key, St = void 0;
    if (L != null) for (nt in L.ref !== void 0 && (St = void 0), L.key !== void 0 && (rt = "" + L.key), L) !V.call(L, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && L.ref === void 0 || (st[nt] = L[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) st.children = ot;
    else if (1 < nt) {
      for (var yt = Array(nt), dt = 0; dt < nt; dt++) yt[dt] = arguments[dt + 2];
      st.children = yt;
    }
    return Z(E.type, rt, void 0, void 0, St, st);
  }, zt.createContext = function(E) {
    return E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }, E.Provider = E, E.Consumer = { $$typeof: f, _context: E }, E;
  }, zt.createElement = function(E, L, ot) {
    var st, rt = {}, St = null;
    if (L != null) for (st in L.key !== void 0 && (St = "" + L.key), L) V.call(L, st) && st !== "key" && st !== "__self" && st !== "__source" && (rt[st] = L[st]);
    var nt = arguments.length - 2;
    if (nt === 1) rt.children = ot;
    else if (1 < nt) {
      for (var yt = Array(nt), dt = 0; dt < nt; dt++) yt[dt] = arguments[dt + 2];
      rt.children = yt;
    }
    if (E && E.defaultProps) for (st in nt = E.defaultProps, nt) rt[st] === void 0 && (rt[st] = nt[st]);
    return Z(E, St, void 0, void 0, null, rt);
  }, zt.createRef = function() {
    return { current: null };
  }, zt.forwardRef = function(E) {
    return { $$typeof: h, render: E };
  }, zt.isValidElement = G, zt.lazy = function(E) {
    return { $$typeof: S, _payload: { _status: -1, _result: E }, _init: J };
  }, zt.memo = function(E, L) {
    return { $$typeof: m, type: E, compare: L === void 0 ? null : L };
  }, zt.startTransition = function(E) {
    var L = R.T, ot = {};
    R.T = ot;
    try {
      var st = E(), rt = R.S;
      rt !== null && rt(ot, st), typeof st == "object" && st !== null && typeof st.then == "function" && st.then(et, W);
    } catch (St) {
      W(St);
    } finally {
      R.T = L;
    }
  }, zt.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, zt.use = function(E) {
    return R.H.use(E);
  }, zt.useActionState = function(E, L, ot) {
    return R.H.useActionState(E, L, ot);
  }, zt.useCallback = function(E, L) {
    return R.H.useCallback(E, L);
  }, zt.useContext = function(E) {
    return R.H.useContext(E);
  }, zt.useDebugValue = function() {
  }, zt.useDeferredValue = function(E, L) {
    return R.H.useDeferredValue(E, L);
  }, zt.useEffect = function(E, L) {
    return R.H.useEffect(E, L);
  }, zt.useId = function() {
    return R.H.useId();
  }, zt.useImperativeHandle = function(E, L, ot) {
    return R.H.useImperativeHandle(E, L, ot);
  }, zt.useInsertionEffect = function(E, L) {
    return R.H.useInsertionEffect(E, L);
  }, zt.useLayoutEffect = function(E, L) {
    return R.H.useLayoutEffect(E, L);
  }, zt.useMemo = function(E, L) {
    return R.H.useMemo(E, L);
  }, zt.useOptimistic = function(E, L) {
    return R.H.useOptimistic(E, L);
  }, zt.useReducer = function(E, L, ot) {
    return R.H.useReducer(E, L, ot);
  }, zt.useRef = function(E) {
    return R.H.useRef(E);
  }, zt.useState = function(E) {
    return R.H.useState(E);
  }, zt.useSyncExternalStore = function(E, L, ot) {
    return R.H.useSyncExternalStore(E, L, ot);
  }, zt.useTransition = function() {
    return R.H.useTransition();
  }, zt.version = "19.0.0", zt;
}
var jm;
function Af() {
  return jm || (jm = 1, Pc.exports = lb()), Pc.exports;
}
var C = Af();
const na = Gg(C), sf = eb({ __proto__: null, default: na }, [C]);
var Qc = { exports: {} }, Ti = {}, Kc = { exports: {} }, Zc = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Um;
function rb() {
  return Um || (Um = 1, function(a3) {
    function r(U, J) {
      var W = U.length;
      U.push(J);
      t: for (; 0 < W; ) {
        var et = W - 1 >>> 1, E = U[et];
        if (0 < c(E, J)) U[et] = J, U[W] = E, W = et;
        else break t;
      }
    }
    function o(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var J = U[0], W = U.pop();
      if (W !== J) {
        U[0] = W;
        t: for (var et = 0, E = U.length, L = E >>> 1; et < L; ) {
          var ot = 2 * (et + 1) - 1, st = U[ot], rt = ot + 1, St = U[rt];
          if (0 > c(st, W)) rt < E && 0 > c(St, st) ? (U[et] = St, U[rt] = W, et = rt) : (U[et] = st, U[ot] = W, et = ot);
          else if (rt < E && 0 > c(St, W)) U[et] = St, U[rt] = W, et = rt;
          else break t;
        }
      }
      return J;
    }
    function c(U, J) {
      var W = U.sortIndex - J.sortIndex;
      return W !== 0 ? W : U.id - J.id;
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
    var g = [], m = [], S = 1, b = null, w = 3, _ = false, A = false, x = false, N = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function B(U) {
      for (var J = o(m); J !== null; ) {
        if (J.callback === null) s(m);
        else if (J.startTime <= U) s(m), J.sortIndex = J.expirationTime, r(g, J);
        else break;
        J = o(m);
      }
    }
    function H(U) {
      if (x = false, B(U), !A) if (o(g) !== null) A = true, I();
      else {
        var J = o(m);
        J !== null && Y(H, J.startTime - U);
      }
    }
    var R = false, V = -1, Z = 5, it = -1;
    function G() {
      return !(a3.unstable_now() - it < Z);
    }
    function y() {
      if (R) {
        var U = a3.unstable_now();
        it = U;
        var J = true;
        try {
          t: {
            A = false, x && (x = false, D(V), V = -1), _ = true;
            var W = w;
            try {
              e: {
                for (B(U), b = o(g); b !== null && !(b.expirationTime > U && G()); ) {
                  var et = b.callback;
                  if (typeof et == "function") {
                    b.callback = null, w = b.priorityLevel;
                    var E = et(b.expirationTime <= U);
                    if (U = a3.unstable_now(), typeof E == "function") {
                      b.callback = E, B(U), J = true;
                      break e;
                    }
                    b === o(g) && s(g), B(U);
                  } else s(g);
                  b = o(g);
                }
                if (b !== null) J = true;
                else {
                  var L = o(m);
                  L !== null && Y(H, L.startTime - U), J = false;
                }
              }
              break t;
            } finally {
              b = null, w = W, _ = false;
            }
            J = void 0;
          }
        } finally {
          J ? P() : R = false;
        }
      }
    }
    var P;
    if (typeof q == "function") P = function() {
      q(y);
    };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), at = lt.port2;
      lt.port1.onmessage = y, P = function() {
        at.postMessage(null);
      };
    } else P = function() {
      N(y, 0);
    };
    function I() {
      R || (R = true, P());
    }
    function Y(U, J) {
      V = N(function() {
        U(a3.unstable_now());
      }, J);
    }
    a3.unstable_IdlePriority = 5, a3.unstable_ImmediatePriority = 1, a3.unstable_LowPriority = 4, a3.unstable_NormalPriority = 3, a3.unstable_Profiling = null, a3.unstable_UserBlockingPriority = 2, a3.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, a3.unstable_continueExecution = function() {
      A || _ || (A = true, I());
    }, a3.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < U ? Math.floor(1e3 / U) : 5;
    }, a3.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, a3.unstable_getFirstCallbackNode = function() {
      return o(g);
    }, a3.unstable_next = function(U) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var W = w;
      w = J;
      try {
        return U();
      } finally {
        w = W;
      }
    }, a3.unstable_pauseExecution = function() {
    }, a3.unstable_requestPaint = function() {
    }, a3.unstable_runWithPriority = function(U, J) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var W = w;
      w = U;
      try {
        return J();
      } finally {
        w = W;
      }
    }, a3.unstable_scheduleCallback = function(U, J, W) {
      var et = a3.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? et + W : et) : W = et, U) {
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
      return E = W + E, U = { id: S++, callback: J, priorityLevel: U, startTime: W, expirationTime: E, sortIndex: -1 }, W > et ? (U.sortIndex = W, r(m, U), o(g) === null && U === o(m) && (x ? (D(V), V = -1) : x = true, Y(H, W - et))) : (U.sortIndex = E, r(g, U), A || _ || (A = true, I())), U;
    }, a3.unstable_shouldYield = G, a3.unstable_wrapCallback = function(U) {
      var J = w;
      return function() {
        var W = w;
        w = J;
        try {
          return U.apply(this, arguments);
        } finally {
          w = W;
        }
      };
    };
  }(Zc)), Zc;
}
var Hm;
function ib() {
  return Hm || (Hm = 1, Kc.exports = rb()), Kc.exports;
}
var Fc = { exports: {} }, Qe = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Lm;
function ob() {
  if (Lm) return Qe;
  Lm = 1;
  var a3 = Af();
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
  return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Qe.createPortal = function(g, m) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
    return f(g, m, null, S);
  }, Qe.flushSync = function(g) {
    var m = p.T, S = s.p;
    try {
      if (p.T = null, s.p = 2, g) return g();
    } finally {
      p.T = m, s.p = S, s.d.f();
    }
  }, Qe.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(g, m));
  }, Qe.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, Qe.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var S = m.as, b = h(S, m.crossOrigin), w = typeof m.integrity == "string" ? m.integrity : void 0, _ = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      S === "style" ? s.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: b, integrity: w, fetchPriority: _ }) : S === "script" && s.d.X(g, { crossOrigin: b, integrity: w, fetchPriority: _, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, Qe.preinitModule = function(g, m) {
    if (typeof g == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var S = h(m.as, m.crossOrigin);
        s.d.M(g, { crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && s.d.M(g);
  }, Qe.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var S = m.as, b = h(S, m.crossOrigin);
      s.d.L(g, S, { crossOrigin: b, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, Qe.preloadModule = function(g, m) {
    if (typeof g == "string") if (m) {
      var S = h(m.as, m.crossOrigin);
      s.d.m(g, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else s.d.m(g);
  }, Qe.requestFormReset = function(g) {
    s.d.r(g);
  }, Qe.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, Qe.useFormState = function(g, m, S) {
    return p.H.useFormState(g, m, S);
  }, Qe.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Qe.version = "19.0.0", Qe;
}
var $m;
function Yg() {
  if ($m) return Fc.exports;
  $m = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Fc.exports = ob(), Fc.exports;
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
var qm;
function sb() {
  if (qm) return Ti;
  qm = 1;
  var a3 = ib(), r = Af(), o = Yg();
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
  var f = Symbol.for("react.element"), p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), H = Symbol.for("react.memo_cache_sentinel"), R = Symbol.iterator;
  function V(t) {
    return t === null || typeof t != "object" ? null : (t = R && t[R] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Z = Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Z ? null : t.displayName || t.name || null;
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
      case N:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case _:
        return (t.displayName || "Context") + ".Provider";
      case w:
        return (t._context.displayName || "Context") + ".Consumer";
      case A:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case D:
        return e = t.displayName || null, e !== null ? e : it(t.type) || "Memo";
      case q:
        e = t._payload, t = t._init;
        try {
          return it(t(e));
        } catch {
        }
    }
    return null;
  }
  var G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.assign, P, lt;
  function at(t) {
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
  var I = false;
  function Y(t, e) {
    if (!t || I) return "";
    I = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var tt = function() {
              throw Error();
            };
            if (Object.defineProperty(tt.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(tt, []);
              } catch (Q) {
                var $ = Q;
              }
              Reflect.construct(t, [], tt);
            } else {
              try {
                tt.call();
              } catch (Q) {
                $ = Q;
              }
              t.call(tt.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              $ = Q;
            }
            (tt = t()) && typeof tt.catch == "function" && tt.catch(function() {
            });
          }
        } catch (Q) {
          if (Q && $ && typeof Q.stack == "string") return [Q.stack, $.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      i && i.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = l.DetermineComponentFrameRoot(), d = u[0], v = u[1];
      if (d && v) {
        var T = d.split(`
`), O = v.split(`
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
      I = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? at(n) : "";
  }
  function U(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return at(t.type);
      case 16:
        return at("Lazy");
      case 13:
        return at("Suspense");
      case 19:
        return at("SuspenseList");
      case 0:
      case 15:
        return t = Y(t.type, false), t;
      case 11:
        return t = Y(t.type.render, false), t;
      case 1:
        return t = Y(t.type, true), t;
      default:
        return "";
    }
  }
  function J(t) {
    try {
      var e = "";
      do
        e += U(t), t = t.return;
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
  function L(t) {
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
        for (var d = false, v = i.child; v; ) {
          if (v === n) {
            d = true, n = i, l = u;
            break;
          }
          if (v === l) {
            d = true, l = i, n = u;
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = u.child; v; ) {
            if (v === n) {
              d = true, n = u, l = i;
              break;
            }
            if (v === l) {
              d = true, l = u, n = i;
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function ot(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = ot(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var st = Array.isArray, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, St = { pending: false, data: null, method: null, action: null }, nt = [], yt = -1;
  function dt(t) {
    return { current: t };
  }
  function Ct(t) {
    0 > yt || (t.current = nt[yt], nt[yt] = null, yt--);
  }
  function Rt(t, e) {
    yt++, nt[yt] = t.current, t.current = e;
  }
  var ce = dt(null), It = dt(null), $t = dt(null), Oe = dt(null);
  function bn(t, e) {
    switch (Rt($t, e), Rt(It, t), Rt(ce, null), t = e.nodeType, t) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? sm(e) : 0;
        break;
      default:
        if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI) t = sm(t), e = um(t, e);
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
    Ct(ce), Rt(ce, e);
  }
  function Ge() {
    Ct(ce), Ct(It), Ct($t);
  }
  function Ht(t) {
    t.memoizedState !== null && Rt(Oe, t);
    var e = ce.current, n = um(e, t.type);
    e !== n && (Rt(It, t), Rt(ce, n));
  }
  function fe(t) {
    It.current === t && (Ct(ce), Ct(It)), Oe.current === t && (Ct(Oe), gi._currentValue = St);
  }
  var sn = Object.prototype.hasOwnProperty, je = a3.unstable_scheduleCallback, en = a3.unstable_cancelCallback, Tt = a3.unstable_shouldYield, $n = a3.unstable_requestPaint, Ue = a3.unstable_now, ct = a3.unstable_getCurrentPriorityLevel, ut = a3.unstable_ImmediatePriority, Mt = a3.unstable_UserBlockingPriority, _t = a3.unstable_NormalPriority, kt = a3.unstable_LowPriority, Ot = a3.unstable_IdlePriority, Ce = a3.log, Ye = a3.unstable_setDisableYieldValue, te = null, Kt = null;
  function pt(t) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(te, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  function ht(t) {
    if (typeof Ce == "function" && Ye(t), Kt && typeof Kt.setStrictMode == "function") try {
      Kt.setStrictMode(te, t);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : Ve, jt = Math.log, le = Math.LN2;
  function Ve(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jt(t) / le | 0) | 0;
  }
  var nn = 128, Vt = 4194304;
  function Zt(t) {
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
    var v = n & 134217727;
    return v !== 0 ? (n = v & ~i, n !== 0 ? l = Zt(n) : (u &= v, u !== 0 ? l = Zt(u) : t || (d = v & ~d, d !== 0 && (l = Zt(d))))) : (v = n & ~i, v !== 0 ? l = Zt(v) : u !== 0 ? l = Zt(u) : t || (d = n & ~d, d !== 0 && (l = Zt(d)))), l === 0 ? 0 : e !== 0 && e !== l && !(e & i) && (i = l & -l, d = e & -e, i >= d || i === 32 && (d & 4194176) !== 0) ? e : l;
  }
  function Pn(t, e) {
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
  function td() {
    var t = nn;
    return nn <<= 1, !(nn & 4194176) && (nn = 128), t;
  }
  function ed() {
    var t = Vt;
    return Vt <<= 1, !(Vt & 62914560) && (Vt = 4194304), t;
  }
  function $s(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Rr(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function V0(t, e, n, l, i, u) {
    var d = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var v = t.entanglements, T = t.expirationTimes, O = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var K = 31 - wt(n), tt = 1 << K;
      v[K] = 0, T[K] = -1;
      var $ = O[K];
      if ($ !== null) for (O[K] = null, K = 0; K < $.length; K++) {
        var Q = $[K];
        Q !== null && (Q.lane &= -536870913);
      }
      n &= ~tt;
    }
    l !== 0 && nd(t, l, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e));
  }
  function nd(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - wt(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194218;
  }
  function ad(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - wt(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function ld(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function rd() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Rm(t.type));
  }
  function X0(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var Ma = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + Ma, an = "__reactProps$" + Ma, Ol = "__reactContainer$" + Ma, qs = "__reactEvents$" + Ma, P0 = "__reactListeners$" + Ma, Q0 = "__reactHandles$" + Ma, id = "__reactResources$" + Ma, Mr = "__reactMarker$" + Ma;
  function Gs(t) {
    delete t[Xe], delete t[an], delete t[qs], delete t[P0], delete t[Q0];
  }
  function el(t) {
    var e = t[Xe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Ol] || n[Xe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = dm(t); t !== null; ) {
          if (n = t[Xe]) return n;
          t = dm(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function zl(t) {
    if (t = t[Xe] || t[Ol]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Or(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function _l(t) {
    var e = t[id];
    return e || (e = t[id] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ke(t) {
    t[Mr] = true;
  }
  var od = /* @__PURE__ */ new Set(), sd = {};
  function nl(t, e) {
    kl(t, e), kl(t + "Capture", e);
  }
  function kl(t, e) {
    for (sd[t] = e, t = 0; t < e.length; t++) od.add(e[t]);
  }
  var ia = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), K0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ud = {}, cd = {};
  function Z0(t) {
    return sn.call(cd, t) ? true : sn.call(ud, t) ? false : K0.test(t) ? cd[t] = true : (ud[t] = true, false);
  }
  function Qi(t, e, n) {
    if (Z0(e)) if (n === null) t.removeAttribute(e);
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
  function Ki(t, e, n) {
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
  function fd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function F0(t) {
    var e = fd(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), l = "" + t[e];
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
  function Zi(t) {
    t._valueTracker || (t._valueTracker = F0(t));
  }
  function dd(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), l = "";
    return t && (l = fd(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), true) : false;
  }
  function Fi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var W0 = /[\n"\\]/g;
  function Tn(t) {
    return t.replace(W0, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ys(t, e, n, l, i, u, d, v) {
    t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + xn(e)) : t.value !== "" + xn(e) && (t.value = "" + xn(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Vs(t, d, xn(e)) : n != null ? Vs(t, d, xn(n)) : l != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + xn(v) : t.removeAttribute("name");
  }
  function pd(t, e, n, l, i, u, d, v) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) return;
      n = n != null ? "" + xn(n) : "", e = e != null ? "" + xn(e) : n, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = v ? t.checked : !!l, t.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d);
  }
  function Vs(t, e, n) {
    e === "number" && Fi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Dl(t, e, n, l) {
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
  function hd(t, e, n) {
    if (e != null && (e = "" + xn(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + xn(n) : "";
  }
  function md(t, e, n, l) {
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
  function Bl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var J0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function gd(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || J0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function yd(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (t = t.style, n != null) {
      for (var l in n) !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e) l = e[i], e.hasOwnProperty(i) && n[i] !== l && gd(t, i, l);
    } else for (var u in e) e.hasOwnProperty(u) && gd(t, u, e[u]);
  }
  function Xs(t) {
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
  var I0 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), ty = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wi(t) {
    return ty.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Ps = null;
  function Qs(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Nl = null, jl = null;
  function vd(t) {
    var e = zl(t);
    if (e && (t = e.stateNode)) {
      var n = t[an] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ys(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Tn("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[an] || null;
                if (!i) throw Error(s(90));
                Ys(l, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
              }
            }
            for (e = 0; e < n.length; e++) l = n[e], l.form === t.form && dd(l);
          }
          break t;
        case "textarea":
          hd(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Dl(t, !!n.multiple, e, false);
      }
    }
  }
  var Ks = false;
  function bd(t, e, n) {
    if (Ks) return t(e, n);
    Ks = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Ks = false, (Nl !== null || jl !== null) && (No(), Nl && (e = Nl, t = jl, jl = Nl = null, vd(e), t))) for (e = 0; e < t.length; e++) vd(t[e]);
    }
  }
  function zr(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[an] || null;
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
  var Zs = false;
  if (ia) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      Zs = true;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    Zs = false;
  }
  var Oa = null, Fs = null, Ji = null;
  function Sd() {
    if (Ji) return Ji;
    var t, e = Fs, n = e.length, l, i = "value" in Oa ? Oa.value : Oa.textContent, u = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === i[u - l]; l++) ;
    return Ji = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Ii(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function to() {
    return true;
  }
  function xd() {
    return false;
  }
  function ln(t) {
    function e(n, l, i, u, d) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var v in t) t.hasOwnProperty(v) && (n = t[v], this[v] = n ? n(u) : u[v]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? to : xd, this.isPropagationStopped = xd, this;
    }
    return y(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = to);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = to);
    }, persist: function() {
    }, isPersistent: to }), e;
  }
  var al = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, eo = ln(al), kr = y({}, al, { view: 0, detail: 0 }), ey = ln(kr), Ws, Js, Dr, no = y({}, kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Dr && (Dr && t.type === "mousemove" ? (Ws = t.screenX - Dr.screenX, Js = t.screenY - Dr.screenY) : Js = Ws = 0, Dr = t), Ws);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Js;
  } }), Td = ln(no), ny = y({}, no, { dataTransfer: 0 }), ay = ln(ny), ly = y({}, kr, { relatedTarget: 0 }), Is = ln(ly), ry = y({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), iy = ln(ry), oy = y({}, al, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), sy = ln(oy), uy = y({}, al, { data: 0 }), Ed = ln(uy), cy = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, fy = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, dy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function py(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = dy[t]) ? !!e[t] : false;
  }
  function tu() {
    return py;
  }
  var hy = y({}, kr, { key: function(t) {
    if (t.key) {
      var e = cy[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = Ii(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fy[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tu, charCode: function(t) {
    return t.type === "keypress" ? Ii(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Ii(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), my = ln(hy), gy = y({}, no, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cd = ln(gy), yy = y({}, kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tu }), vy = ln(yy), by = y({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sy = ln(by), xy = y({}, no, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Ty = ln(xy), Ey = y({}, al, { newState: 0, oldState: 0 }), Cy = ln(Ey), wy = [9, 13, 27, 32], eu = ia && "CompositionEvent" in window, Br = null;
  ia && "documentMode" in document && (Br = document.documentMode);
  var Ay = ia && "TextEvent" in window && !Br, wd = ia && (!eu || Br && 8 < Br && 11 >= Br), Ad = " ", Rd = false;
  function Md(t, e) {
    switch (t) {
      case "keyup":
        return wy.indexOf(e.keyCode) !== -1;
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
  function Od(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ul = false;
  function Ry(t, e) {
    switch (t) {
      case "compositionend":
        return Od(e);
      case "keypress":
        return e.which !== 32 ? null : (Rd = true, Ad);
      case "textInput":
        return t = e.data, t === Ad && Rd ? null : t;
      default:
        return null;
    }
  }
  function My(t, e) {
    if (Ul) return t === "compositionend" || !eu && Md(t, e) ? (t = Sd(), Ji = Fs = Oa = null, Ul = false, t) : null;
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
        return wd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Oy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function zd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Oy[t.type] : e === "textarea";
  }
  function _d(t, e, n, l) {
    Nl ? jl ? jl.push(l) : jl = [l] : Nl = l, e = $o(e, "onChange"), 0 < e.length && (n = new eo("onChange", "change", null, n, l), t.push({ event: n, listeners: e }));
  }
  var Nr = null, jr = null;
  function zy(t) {
    am(t, 0);
  }
  function ao(t) {
    var e = Or(t);
    if (dd(e)) return t;
  }
  function kd(t, e) {
    if (t === "change") return e;
  }
  var Dd = false;
  if (ia) {
    var nu;
    if (ia) {
      var au = "oninput" in document;
      if (!au) {
        var Bd = document.createElement("div");
        Bd.setAttribute("oninput", "return;"), au = typeof Bd.oninput == "function";
      }
      nu = au;
    } else nu = false;
    Dd = nu && (!document.documentMode || 9 < document.documentMode);
  }
  function Nd() {
    Nr && (Nr.detachEvent("onpropertychange", jd), jr = Nr = null);
  }
  function jd(t) {
    if (t.propertyName === "value" && ao(jr)) {
      var e = [];
      _d(e, jr, t, Qs(t)), bd(zy, e);
    }
  }
  function _y(t, e, n) {
    t === "focusin" ? (Nd(), Nr = e, jr = n, Nr.attachEvent("onpropertychange", jd)) : t === "focusout" && Nd();
  }
  function ky(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ao(jr);
  }
  function Dy(t, e) {
    if (t === "click") return ao(e);
  }
  function By(t, e) {
    if (t === "input" || t === "change") return ao(e);
  }
  function Ny(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var un = typeof Object.is == "function" ? Object.is : Ny;
  function Ur(t, e) {
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
  function Ud(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Hd(t, e) {
    var n = Ud(t);
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
      n = Ud(n);
    }
  }
  function Ld(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Ld(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function $d(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Fi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Fi(t.document);
    }
    return e;
  }
  function lu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  function jy(t, e) {
    var n = $d(e);
    e = t.focusedElem;
    var l = t.selectionRange;
    if (n !== e && e && e.ownerDocument && Ld(e.ownerDocument.documentElement, e)) {
      if (l !== null && lu(e)) {
        if (t = l.start, n = l.end, n === void 0 && (n = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length);
        else if (n = (t = e.ownerDocument || document) && t.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var i = e.textContent.length, u = Math.min(l.start, i);
          l = l.end === void 0 ? u : Math.min(l.end, i), !n.extend && u > l && (i = l, l = u, u = i), i = Hd(e, u);
          var d = Hd(e, l);
          i && d && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== d.node || n.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), n.removeAllRanges(), u > l ? (n.addRange(t), n.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; n = n.parentNode; ) n.nodeType === 1 && t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) n = t[e], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Uy = ia && "documentMode" in document && 11 >= document.documentMode, Hl = null, ru = null, Hr = null, iu = false;
  function qd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    iu || Hl == null || Hl !== Fi(l) || (l = Hl, "selectionStart" in l && lu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Hr && Ur(Hr, l) || (Hr = l, l = $o(ru, "onSelect"), 0 < l.length && (e = new eo("onSelect", "select", null, e, n), t.push({ event: e, listeners: l }), e.target = Hl)));
  }
  function ll(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ll = { animationend: ll("Animation", "AnimationEnd"), animationiteration: ll("Animation", "AnimationIteration"), animationstart: ll("Animation", "AnimationStart"), transitionrun: ll("Transition", "TransitionRun"), transitionstart: ll("Transition", "TransitionStart"), transitioncancel: ll("Transition", "TransitionCancel"), transitionend: ll("Transition", "TransitionEnd") }, ou = {}, Gd = {};
  ia && (Gd = document.createElement("div").style, "AnimationEvent" in window || (delete Ll.animationend.animation, delete Ll.animationiteration.animation, delete Ll.animationstart.animation), "TransitionEvent" in window || delete Ll.transitionend.transition);
  function rl(t) {
    if (ou[t]) return ou[t];
    if (!Ll[t]) return t;
    var e = Ll[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in Gd) return ou[t] = e[n];
    return t;
  }
  var Yd = rl("animationend"), Vd = rl("animationiteration"), Xd = rl("animationstart"), Hy = rl("transitionrun"), Ly = rl("transitionstart"), $y = rl("transitioncancel"), Pd = rl("transitionend"), Qd = /* @__PURE__ */ new Map(), Kd = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
  function Gn(t, e) {
    Qd.set(t, e), nl(e, [t]);
  }
  var En = [], $l = 0, su = 0;
  function lo() {
    for (var t = $l, e = su = $l = 0; e < t; ) {
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
      u !== 0 && Zd(n, i, u);
    }
  }
  function ro(t, e, n, l) {
    En[$l++] = t, En[$l++] = e, En[$l++] = n, En[$l++] = l, su |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function uu(t, e, n, l) {
    return ro(t, e, n, l), io(t);
  }
  function za(t, e) {
    return ro(t, null, null, e), io(t);
  }
  function Zd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = false, u = t.return; u !== null; ) u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = true)), t = u, u = u.return;
    i && e !== null && t.tag === 3 && (u = t.stateNode, i = 31 - wt(n), u = u.hiddenUpdates, t = u[i], t === null ? u[i] = [e] : t.push(e), e.lane = n | 536870912);
  }
  function io(t) {
    if (50 < ui) throw ui = 0, mc = null, Error(s(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ql = {}, Fd = /* @__PURE__ */ new WeakMap();
  function Cn(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Fd.get(t);
      return n !== void 0 ? n : (e = { value: t, source: e, stack: J(e) }, Fd.set(t, e), e);
    }
    return { value: t, source: e, stack: J(e) };
  }
  var Gl = [], Yl = 0, oo = null, so = 0, wn = [], An = 0, il = null, sa = 1, ua = "";
  function ol(t, e) {
    Gl[Yl++] = so, Gl[Yl++] = oo, oo = t, so = e;
  }
  function Wd(t, e, n) {
    wn[An++] = sa, wn[An++] = ua, wn[An++] = il, il = t;
    var l = sa;
    t = ua;
    var i = 32 - wt(l) - 1;
    l &= ~(1 << i), n += 1;
    var u = 32 - wt(e) + i;
    if (30 < u) {
      var d = i - i % 5;
      u = (l & (1 << d) - 1).toString(32), l >>= d, i -= d, sa = 1 << 32 - wt(e) + i | n << i | l, ua = u + t;
    } else sa = 1 << u | n << i | l, ua = t;
  }
  function cu(t) {
    t.return !== null && (ol(t, 1), Wd(t, 1, 0));
  }
  function fu(t) {
    for (; t === oo; ) oo = Gl[--Yl], Gl[Yl] = null, so = Gl[--Yl], Gl[Yl] = null;
    for (; t === il; ) il = wn[--An], wn[An] = null, ua = wn[--An], wn[An] = null, sa = wn[--An], wn[An] = null;
  }
  var Ze = null, He = null, qt = false, Yn = null, Qn = false, du = Error(s(519));
  function sl(t) {
    var e = Error(s(418, ""));
    throw qr(Cn(e, t)), du;
  }
  function Jd(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[Xe] = t, e[an] = l, n) {
      case "dialog":
        Ut("cancel", e), Ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < fi.length; n++) Ut(fi[n], e);
        break;
      case "source":
        Ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Ut("error", e), Ut("load", e);
        break;
      case "details":
        Ut("toggle", e);
        break;
      case "input":
        Ut("invalid", e), pd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true), Zi(e);
        break;
      case "select":
        Ut("invalid", e);
        break;
      case "textarea":
        Ut("invalid", e), md(e, l.value, l.defaultValue, l.children), Zi(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === true || om(e.textContent, n) ? (l.popover != null && (Ut("beforetoggle", e), Ut("toggle", e)), l.onScroll != null && Ut("scroll", e), l.onScrollEnd != null && Ut("scrollend", e), l.onClick != null && (e.onclick = qo), e = true) : e = false, e || sl(t);
  }
  function Id(t) {
    for (Ze = t.return; Ze; ) switch (Ze.tag) {
      case 3:
      case 27:
        Qn = true;
        return;
      case 5:
      case 13:
        Qn = false;
        return;
      default:
        Ze = Ze.return;
    }
  }
  function Lr(t) {
    if (t !== Ze) return false;
    if (!qt) return Id(t), qt = true, false;
    var e = false, n;
    if ((n = t.tag !== 3 && t.tag !== 27) && ((n = t.tag === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || kc(t.type, t.memoizedProps)), n = !n), n && (e = true), e && He && sl(t), Id(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (n = t.data, n === "/$") {
            if (e === 0) {
              He = Xn(t.nextSibling);
              break t;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        He = null;
      }
    } else He = Ze ? Xn(t.stateNode.nextSibling) : null;
    return true;
  }
  function $r() {
    He = Ze = null, qt = false;
  }
  function qr(t) {
    Yn === null ? Yn = [t] : Yn.push(t);
  }
  var Gr = Error(s(460)), tp = Error(s(474)), pu = { then: function() {
  } };
  function ep(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function uo() {
  }
  function np(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(uo, uo), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, t === Gr ? Error(s(483)) : t;
      default:
        if (typeof e.status == "string") e.then(uo, uo);
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
            throw t = e.reason, t === Gr ? Error(s(483)) : t;
        }
        throw Yr = e, Gr;
    }
  }
  var Yr = null;
  function ap() {
    if (Yr === null) throw Error(s(459));
    var t = Yr;
    return Yr = null, t;
  }
  var Vl = null, Vr = 0;
  function co(t) {
    var e = Vr;
    return Vr += 1, Vl === null && (Vl = []), np(Vl, t, e);
  }
  function Xr(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function fo(t, e) {
    throw e.$$typeof === f ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function lp(t) {
    var e = t._init;
    return e(t._payload);
  }
  function rp(t) {
    function e(k, M) {
      if (t) {
        var j = k.deletions;
        j === null ? (k.deletions = [M], k.flags |= 16) : j.push(M);
      }
    }
    function n(k, M) {
      if (!t) return null;
      for (; M !== null; ) e(k, M), M = M.sibling;
      return null;
    }
    function l(k) {
      for (var M = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? M.set(k.key, k) : M.set(k.index, k), k = k.sibling;
      return M;
    }
    function i(k, M) {
      return k = Ga(k, M), k.index = 0, k.sibling = null, k;
    }
    function u(k, M, j) {
      return k.index = j, t ? (j = k.alternate, j !== null ? (j = j.index, j < M ? (k.flags |= 33554434, M) : j) : (k.flags |= 33554434, M)) : (k.flags |= 1048576, M);
    }
    function d(k) {
      return t && k.alternate === null && (k.flags |= 33554434), k;
    }
    function v(k, M, j, F) {
      return M === null || M.tag !== 6 ? (M = oc(j, k.mode, F), M.return = k, M) : (M = i(M, j), M.return = k, M);
    }
    function T(k, M, j, F) {
      var ft = j.type;
      return ft === g ? K(k, M, j.props.children, F, j.key) : M !== null && (M.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === q && lp(ft) === M.type) ? (M = i(M, j.props), Xr(M, j), M.return = k, M) : (M = zo(j.type, j.key, j.props, null, k.mode, F), Xr(M, j), M.return = k, M);
    }
    function O(k, M, j, F) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = sc(j, k.mode, F), M.return = k, M) : (M = i(M, j.children || []), M.return = k, M);
    }
    function K(k, M, j, F, ft) {
      return M === null || M.tag !== 7 ? (M = vl(j, k.mode, F, ft), M.return = k, M) : (M = i(M, j), M.return = k, M);
    }
    function tt(k, M, j) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = oc("" + M, k.mode, j), M.return = k, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case p:
            return j = zo(M.type, M.key, M.props, null, k.mode, j), Xr(j, M), j.return = k, j;
          case h:
            return M = sc(M, k.mode, j), M.return = k, M;
          case q:
            var F = M._init;
            return M = F(M._payload), tt(k, M, j);
        }
        if (st(M) || V(M)) return M = vl(M, k.mode, j, null), M.return = k, M;
        if (typeof M.then == "function") return tt(k, co(M), j);
        if (M.$$typeof === _) return tt(k, Ro(k, M), j);
        fo(k, M);
      }
      return null;
    }
    function $(k, M, j, F) {
      var ft = M !== null ? M.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return ft !== null ? null : v(k, M, "" + j, F);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            return j.key === ft ? T(k, M, j, F) : null;
          case h:
            return j.key === ft ? O(k, M, j, F) : null;
          case q:
            return ft = j._init, j = ft(j._payload), $(k, M, j, F);
        }
        if (st(j) || V(j)) return ft !== null ? null : K(k, M, j, F, null);
        if (typeof j.then == "function") return $(k, M, co(j), F);
        if (j.$$typeof === _) return $(k, M, Ro(k, j), F);
        fo(k, j);
      }
      return null;
    }
    function Q(k, M, j, F, ft) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return k = k.get(j) || null, v(M, k, "" + F, ft);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case p:
            return k = k.get(F.key === null ? j : F.key) || null, T(M, k, F, ft);
          case h:
            return k = k.get(F.key === null ? j : F.key) || null, O(M, k, F, ft);
          case q:
            var Bt = F._init;
            return F = Bt(F._payload), Q(k, M, j, F, ft);
        }
        if (st(F) || V(F)) return k = k.get(j) || null, K(M, k, F, ft, null);
        if (typeof F.then == "function") return Q(k, M, j, co(F), ft);
        if (F.$$typeof === _) return Q(k, M, j, Ro(M, F), ft);
        fo(M, F);
      }
      return null;
    }
    function mt(k, M, j, F) {
      for (var ft = null, Bt = null, gt = M, xt = M = 0, Ne = null; gt !== null && xt < j.length; xt++) {
        gt.index > xt ? (Ne = gt, gt = null) : Ne = gt.sibling;
        var Gt = $(k, gt, j[xt], F);
        if (Gt === null) {
          gt === null && (gt = Ne);
          break;
        }
        t && gt && Gt.alternate === null && e(k, gt), M = u(Gt, M, xt), Bt === null ? ft = Gt : Bt.sibling = Gt, Bt = Gt, gt = Ne;
      }
      if (xt === j.length) return n(k, gt), qt && ol(k, xt), ft;
      if (gt === null) {
        for (; xt < j.length; xt++) gt = tt(k, j[xt], F), gt !== null && (M = u(gt, M, xt), Bt === null ? ft = gt : Bt.sibling = gt, Bt = gt);
        return qt && ol(k, xt), ft;
      }
      for (gt = l(gt); xt < j.length; xt++) Ne = Q(gt, k, xt, j[xt], F), Ne !== null && (t && Ne.alternate !== null && gt.delete(Ne.key === null ? xt : Ne.key), M = u(Ne, M, xt), Bt === null ? ft = Ne : Bt.sibling = Ne, Bt = Ne);
      return t && gt.forEach(function(Za) {
        return e(k, Za);
      }), qt && ol(k, xt), ft;
    }
    function At(k, M, j, F) {
      if (j == null) throw Error(s(151));
      for (var ft = null, Bt = null, gt = M, xt = M = 0, Ne = null, Gt = j.next(); gt !== null && !Gt.done; xt++, Gt = j.next()) {
        gt.index > xt ? (Ne = gt, gt = null) : Ne = gt.sibling;
        var Za = $(k, gt, Gt.value, F);
        if (Za === null) {
          gt === null && (gt = Ne);
          break;
        }
        t && gt && Za.alternate === null && e(k, gt), M = u(Za, M, xt), Bt === null ? ft = Za : Bt.sibling = Za, Bt = Za, gt = Ne;
      }
      if (Gt.done) return n(k, gt), qt && ol(k, xt), ft;
      if (gt === null) {
        for (; !Gt.done; xt++, Gt = j.next()) Gt = tt(k, Gt.value, F), Gt !== null && (M = u(Gt, M, xt), Bt === null ? ft = Gt : Bt.sibling = Gt, Bt = Gt);
        return qt && ol(k, xt), ft;
      }
      for (gt = l(gt); !Gt.done; xt++, Gt = j.next()) Gt = Q(gt, k, xt, Gt.value, F), Gt !== null && (t && Gt.alternate !== null && gt.delete(Gt.key === null ? xt : Gt.key), M = u(Gt, M, xt), Bt === null ? ft = Gt : Bt.sibling = Gt, Bt = Gt);
      return t && gt.forEach(function(tb) {
        return e(k, tb);
      }), qt && ol(k, xt), ft;
    }
    function be(k, M, j, F) {
      if (typeof j == "object" && j !== null && j.type === g && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            t: {
              for (var ft = j.key; M !== null; ) {
                if (M.key === ft) {
                  if (ft = j.type, ft === g) {
                    if (M.tag === 7) {
                      n(k, M.sibling), F = i(M, j.props.children), F.return = k, k = F;
                      break t;
                    }
                  } else if (M.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === q && lp(ft) === M.type) {
                    n(k, M.sibling), F = i(M, j.props), Xr(F, j), F.return = k, k = F;
                    break t;
                  }
                  n(k, M);
                  break;
                } else e(k, M);
                M = M.sibling;
              }
              j.type === g ? (F = vl(j.props.children, k.mode, F, j.key), F.return = k, k = F) : (F = zo(j.type, j.key, j.props, null, k.mode, F), Xr(F, j), F.return = k, k = F);
            }
            return d(k);
          case h:
            t: {
              for (ft = j.key; M !== null; ) {
                if (M.key === ft) if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                  n(k, M.sibling), F = i(M, j.children || []), F.return = k, k = F;
                  break t;
                } else {
                  n(k, M);
                  break;
                }
                else e(k, M);
                M = M.sibling;
              }
              F = sc(j, k.mode, F), F.return = k, k = F;
            }
            return d(k);
          case q:
            return ft = j._init, j = ft(j._payload), be(k, M, j, F);
        }
        if (st(j)) return mt(k, M, j, F);
        if (V(j)) {
          if (ft = V(j), typeof ft != "function") throw Error(s(150));
          return j = ft.call(j), At(k, M, j, F);
        }
        if (typeof j.then == "function") return be(k, M, co(j), F);
        if (j.$$typeof === _) return be(k, M, Ro(k, j), F);
        fo(k, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, M !== null && M.tag === 6 ? (n(k, M.sibling), F = i(M, j), F.return = k, k = F) : (n(k, M), F = oc(j, k.mode, F), F.return = k, k = F), d(k)) : n(k, M);
    }
    return function(k, M, j, F) {
      try {
        Vr = 0;
        var ft = be(k, M, j, F);
        return Vl = null, ft;
      } catch (gt) {
        if (gt === Gr) throw gt;
        var Bt = zn(29, gt, null, k.mode);
        return Bt.lanes = F, Bt.return = k, Bt;
      } finally {
      }
    };
  }
  var ul = rp(true), ip = rp(false), Xl = dt(null), po = dt(0);
  function op(t, e) {
    t = Sa, Rt(po, t), Rt(Xl, e), Sa = t | e.baseLanes;
  }
  function hu() {
    Rt(po, Sa), Rt(Xl, Xl.current);
  }
  function mu() {
    Sa = po.current, Ct(Xl), Ct(po);
  }
  var Rn = dt(null), Kn = null;
  function _a(t) {
    var e = t.alternate;
    Rt(ze, ze.current & 1), Rt(Rn, t), Kn === null && (e === null || Xl.current !== null || e.memoizedState !== null) && (Kn = t);
  }
  function sp(t) {
    if (t.tag === 22) {
      if (Rt(ze, ze.current), Rt(Rn, t), Kn === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Kn = t);
      }
    } else ka();
  }
  function ka() {
    Rt(ze, ze.current), Rt(Rn, Rn.current);
  }
  function ca(t) {
    Ct(Rn), Kn === t && (Kn = null), Ct(ze);
  }
  var ze = dt(0);
  function ho(t) {
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
  var qy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(n, l) {
      t.push(l);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(n) {
        return n();
      });
    };
  }, Gy = a3.unstable_scheduleCallback, Yy = a3.unstable_NormalPriority, _e = { $$typeof: _, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function gu() {
    return { controller: new qy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Pr(t) {
    t.refCount--, t.refCount === 0 && Gy(Yy, function() {
      t.controller.abort();
    });
  }
  var Qr = null, yu = 0, Pl = 0, Ql = null;
  function Vy(t, e) {
    if (Qr === null) {
      var n = Qr = [];
      yu = 0, Pl = Ec(), Ql = { status: "pending", value: void 0, then: function(l) {
        n.push(l);
      } };
    }
    return yu++, e.then(up, up), e;
  }
  function up() {
    if (--yu === 0 && Qr !== null) {
      Ql !== null && (Ql.status = "fulfilled");
      var t = Qr;
      Qr = null, Pl = 0, Ql = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Xy(t, e) {
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
  var cp = G.S;
  G.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Vy(t, e), cp !== null && cp(t, e);
  };
  var cl = dt(null);
  function vu() {
    var t = cl.current;
    return t !== null ? t : re.pooledCache;
  }
  function mo(t, e) {
    e === null ? Rt(cl, cl.current) : Rt(cl, e.pool);
  }
  function fp() {
    var t = vu();
    return t === null ? null : { parent: _e._currentValue, pool: t };
  }
  var Da = 0, Dt = null, Ft = null, we = null, go = false, Kl = false, fl = false, yo = 0, Kr = 0, Zl = null, Py = 0;
  function Te() {
    throw Error(s(321));
  }
  function bu(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!un(t[n], e[n])) return false;
    return true;
  }
  function Su(t, e, n, l, i, u) {
    return Da = u, Dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, G.H = t === null || t.memoizedState === null ? dl : Ba, fl = false, u = n(l, i), fl = false, Kl && (u = pp(e, n, l, i)), dp(t), u;
  }
  function dp(t) {
    G.H = Zn;
    var e = Ft !== null && Ft.next !== null;
    if (Da = 0, we = Ft = Dt = null, go = false, Kr = 0, Zl = null, e) throw Error(s(300));
    t === null || De || (t = t.dependencies, t !== null && Ao(t) && (De = true));
  }
  function pp(t, e, n, l) {
    Dt = t;
    var i = 0;
    do {
      if (Kl && (Zl = null), Kr = 0, Kl = false, 25 <= i) throw Error(s(301));
      if (i += 1, we = Ft = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      G.H = pl, u = e(n, l);
    } while (Kl);
    return u;
  }
  function Qy() {
    var t = G.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Zr(e) : e, t = t.useState()[0], (Ft !== null ? Ft.memoizedState : null) !== t && (Dt.flags |= 1024), e;
  }
  function xu() {
    var t = yo !== 0;
    return yo = 0, t;
  }
  function Tu(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Eu(t) {
    if (go) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      go = false;
    }
    Da = 0, we = Ft = Dt = null, Kl = false, Kr = yo = 0, Zl = null;
  }
  function rn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return we === null ? Dt.memoizedState = we = t : we = we.next = t, we;
  }
  function Ae() {
    if (Ft === null) {
      var t = Dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ft.next;
    var e = we === null ? Dt.memoizedState : we.next;
    if (e !== null) we = e, Ft = t;
    else {
      if (t === null) throw Dt.alternate === null ? Error(s(467)) : Error(s(310));
      Ft = t, t = { memoizedState: Ft.memoizedState, baseState: Ft.baseState, baseQueue: Ft.baseQueue, queue: Ft.queue, next: null }, we === null ? Dt.memoizedState = we = t : we = we.next = t;
    }
    return we;
  }
  var vo;
  vo = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Zr(t) {
    var e = Kr;
    return Kr += 1, Zl === null && (Zl = []), t = np(Zl, t, e), e = Dt, (we === null ? e.memoizedState : we.next) === null && (e = e.alternate, G.H = e === null || e.memoizedState === null ? dl : Ba), t;
  }
  function bo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Zr(t);
      if (t.$$typeof === _) return Pe(t);
    }
    throw Error(s(438, String(t)));
  }
  function Cu(t) {
    var e = null, n = Dt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = Dt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(i) {
        return i.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = vo(), Dt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = H;
    return e.index++, n;
  }
  function fa(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function So(t) {
    var e = Ae();
    return wu(e, Ft, t);
  }
  function wu(t, e, n) {
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
      var v = d = null, T = null, O = e, K = false;
      do {
        var tt = O.lane & -536870913;
        if (tt !== O.lane ? (Lt & tt) === tt : (Da & tt) === tt) {
          var $ = O.revertLane;
          if ($ === 0) T !== null && (T = T.next = { lane: 0, revertLane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), tt === Pl && (K = true);
          else if ((Da & $) === $) {
            O = O.next, $ === Pl && (K = true);
            continue;
          } else tt = { lane: 0, revertLane: O.revertLane, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, T === null ? (v = T = tt, d = u) : T = T.next = tt, Dt.lanes |= $, Ya |= $;
          tt = O.action, fl && n(u, tt), u = O.hasEagerState ? O.eagerState : n(u, tt);
        } else $ = { lane: tt, revertLane: O.revertLane, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }, T === null ? (v = T = $, d = u) : T = T.next = $, Dt.lanes |= tt, Ya |= tt;
        O = O.next;
      } while (O !== null && O !== e);
      if (T === null ? d = u : T.next = v, !un(u, t.memoizedState) && (De = true, K && (n = Ql, n !== null))) throw n;
      t.memoizedState = u, t.baseState = d, t.baseQueue = T, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Au(t) {
    var e = Ae(), n = e.queue;
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
  function hp(t, e, n) {
    var l = Dt, i = Ae(), u = qt;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !un((Ft || i).memoizedState, n);
    if (d && (i.memoizedState = n, De = true), i = i.queue, Ou(yp.bind(null, l, i, t), [t]), i.getSnapshot !== e || d || we !== null && we.memoizedState.tag & 1) {
      if (l.flags |= 2048, Fl(9, gp.bind(null, l, i, n, e), { destroy: void 0 }, null), re === null) throw Error(s(349));
      u || Da & 60 || mp(l, e, n);
    }
    return n;
  }
  function mp(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Dt.updateQueue, e === null ? (e = vo(), Dt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function gp(t, e, n, l) {
    e.value = n, e.getSnapshot = l, vp(e) && bp(t);
  }
  function yp(t, e, n) {
    return n(function() {
      vp(e) && bp(t);
    });
  }
  function vp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !un(t, n);
    } catch {
      return true;
    }
  }
  function bp(t) {
    var e = za(t, 2);
    e !== null && Fe(e, t, 2);
  }
  function Ru(t) {
    var e = rn();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), fl) {
        ht(true);
        try {
          n();
        } finally {
          ht(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: t }, e;
  }
  function Sp(t, e, n, l) {
    return t.baseState = n, wu(t, Ft, typeof l == "function" ? l : fa);
  }
  function Ky(t, e, n, l, i) {
    if (Eo(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var u = { payload: i, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(d) {
        u.listeners.push(d);
      } };
      G.T !== null ? n(true) : u.isTransition = false, l(u), n = e.pending, n === null ? (u.next = e.pending = u, xp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function xp(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var u = G.T, d = {};
      G.T = d;
      try {
        var v = n(i, l), T = G.S;
        T !== null && T(d, v), Tp(t, e, v);
      } catch (O) {
        Mu(t, e, O);
      } finally {
        G.T = u;
      }
    } else try {
      u = n(i, l), Tp(t, e, u);
    } catch (O) {
      Mu(t, e, O);
    }
  }
  function Tp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
      Ep(t, e, l);
    }, function(l) {
      return Mu(t, e, l);
    }) : Ep(t, e, n);
  }
  function Ep(t, e, n) {
    e.status = "fulfilled", e.value = n, Cp(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, xp(t, n)));
  }
  function Mu(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, Cp(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Cp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function wp(t, e) {
    return e;
  }
  function Ap(t, e) {
    if (qt) {
      var n = re.formState;
      if (n !== null) {
        t: {
          var l = Dt;
          if (qt) {
            if (He) {
              e: {
                for (var i = He, u = Qn; i.nodeType !== 8; ) {
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
                He = Xn(i.nextSibling), l = i.data === "F!";
                break t;
              }
            }
            sl(l);
          }
          l = false;
        }
        l && (e = n[0]);
      }
    }
    return n = rn(), n.memoizedState = n.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: wp, lastRenderedState: e }, n.queue = l, n = Vp.bind(null, Dt, l), l.dispatch = n, l = Ru(false), u = Bu.bind(null, Dt, false, l.queue), l = rn(), i = { state: e, dispatch: null, action: t, pending: null }, l.queue = i, n = Ky.bind(null, Dt, i, u, n), i.dispatch = n, l.memoizedState = t, [e, n, false];
  }
  function Rp(t) {
    var e = Ae();
    return Mp(e, Ft, t);
  }
  function Mp(t, e, n) {
    e = wu(t, e, wp)[0], t = So(fa)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? Zr(e) : e;
    var l = Ae(), i = l.queue, u = i.dispatch;
    return n !== l.memoizedState && (Dt.flags |= 2048, Fl(9, Zy.bind(null, i, n), { destroy: void 0 }, null)), [e, u, t];
  }
  function Zy(t, e) {
    t.action = e;
  }
  function Op(t) {
    var e = Ae(), n = Ft;
    if (n !== null) return Mp(e, n, t);
    Ae(), e = e.memoizedState, n = Ae();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, false];
  }
  function Fl(t, e, n, l) {
    return t = { tag: t, create: e, inst: n, deps: l, next: null }, e = Dt.updateQueue, e === null && (e = vo(), Dt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function zp() {
    return Ae().memoizedState;
  }
  function xo(t, e, n, l) {
    var i = rn();
    Dt.flags |= t, i.memoizedState = Fl(1 | e, n, { destroy: void 0 }, l === void 0 ? null : l);
  }
  function To(t, e, n, l) {
    var i = Ae();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Ft !== null && l !== null && bu(l, Ft.memoizedState.deps) ? i.memoizedState = Fl(e, n, u, l) : (Dt.flags |= t, i.memoizedState = Fl(1 | e, n, u, l));
  }
  function _p(t, e) {
    xo(8390656, 8, t, e);
  }
  function Ou(t, e) {
    To(2048, 8, t, e);
  }
  function kp(t, e) {
    return To(4, 2, t, e);
  }
  function Dp(t, e) {
    return To(4, 4, t, e);
  }
  function Bp(t, e) {
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
  function Np(t, e, n) {
    n = n != null ? n.concat([t]) : null, To(4, 4, Bp.bind(null, e, t), n);
  }
  function zu() {
  }
  function jp(t, e) {
    var n = Ae();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && bu(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Up(t, e) {
    var n = Ae();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && bu(e, l[1])) return l[0];
    if (l = t(), fl) {
      ht(true);
      try {
        t();
      } finally {
        ht(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function _u(t, e, n) {
    return n === void 0 || Da & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = Lh(), Dt.lanes |= t, Ya |= t, n);
  }
  function Hp(t, e, n, l) {
    return un(n, e) ? n : Xl.current !== null ? (t = _u(t, n, l), un(t, e) || (De = true), t) : Da & 42 ? (t = Lh(), Dt.lanes |= t, Ya |= t, e) : (De = true, t.memoizedState = n);
  }
  function Lp(t, e, n, l, i) {
    var u = rt.p;
    rt.p = u !== 0 && 8 > u ? u : 8;
    var d = G.T, v = {};
    G.T = v, Bu(t, false, e, n);
    try {
      var T = i(), O = G.S;
      if (O !== null && O(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var K = Xy(T, l);
        Fr(t, e, K, pn(t));
      } else Fr(t, e, l, pn(t));
    } catch (tt) {
      Fr(t, e, { then: function() {
      }, status: "rejected", reason: tt }, pn());
    } finally {
      rt.p = u, G.T = d;
    }
  }
  function Fy() {
  }
  function ku(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var i = $p(t).queue;
    Lp(t, i, e, St, n === null ? Fy : function() {
      return qp(t), n(l);
    });
  }
  function $p(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: St, baseState: St, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: St }, next: null };
    var n = {};
    return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function qp(t) {
    var e = $p(t).next.queue;
    Fr(t, e, {}, pn());
  }
  function Du() {
    return Pe(gi);
  }
  function Gp() {
    return Ae().memoizedState;
  }
  function Yp() {
    return Ae().memoizedState;
  }
  function Wy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pn();
          t = Ua(n);
          var l = Ha(e, t, n);
          l !== null && (Fe(l, e, n), Ir(l, e, n)), e = { cache: gu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Jy(t, e, n) {
    var l = pn();
    n = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null }, Eo(t) ? Xp(e, n) : (n = uu(t, e, n, l), n !== null && (Fe(n, t, l), Pp(n, e, l)));
  }
  function Vp(t, e, n) {
    var l = pn();
    Fr(t, e, n, l);
  }
  function Fr(t, e, n, l) {
    var i = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null };
    if (Eo(t)) Xp(e, i);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var d = e.lastRenderedState, v = u(d, n);
        if (i.hasEagerState = true, i.eagerState = v, un(v, d)) return ro(t, e, i, 0), re === null && lo(), false;
      } catch {
      } finally {
      }
      if (n = uu(t, e, i, l), n !== null) return Fe(n, t, l), Pp(n, e, l), true;
    }
    return false;
  }
  function Bu(t, e, n, l) {
    if (l = { lane: 2, revertLane: Ec(), action: l, hasEagerState: false, eagerState: null, next: null }, Eo(t)) {
      if (e) throw Error(s(479));
    } else e = uu(t, n, l, 2), e !== null && Fe(e, t, 2);
  }
  function Eo(t) {
    var e = t.alternate;
    return t === Dt || e !== null && e === Dt;
  }
  function Xp(t, e) {
    Kl = go = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Pp(t, e, n) {
    if (n & 4194176) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, ad(t, n);
    }
  }
  var Zn = { readContext: Pe, use: bo, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useLayoutEffect: Te, useInsertionEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useSyncExternalStore: Te, useId: Te };
  Zn.useCacheRefresh = Te, Zn.useMemoCache = Te, Zn.useHostTransitionStatus = Te, Zn.useFormState = Te, Zn.useActionState = Te, Zn.useOptimistic = Te;
  var dl = { readContext: Pe, use: bo, useCallback: function(t, e) {
    return rn().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Pe, useEffect: _p, useImperativeHandle: function(t, e, n) {
    n = n != null ? n.concat([t]) : null, xo(4194308, 4, Bp.bind(null, e, t), n);
  }, useLayoutEffect: function(t, e) {
    return xo(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    xo(4, 2, t, e);
  }, useMemo: function(t, e) {
    var n = rn();
    e = e === void 0 ? null : e;
    var l = t();
    if (fl) {
      ht(true);
      try {
        t();
      } finally {
        ht(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }, useReducer: function(t, e, n) {
    var l = rn();
    if (n !== void 0) {
      var i = n(e);
      if (fl) {
        ht(true);
        try {
          n(e);
        } finally {
          ht(false);
        }
      }
    } else i = e;
    return l.memoizedState = l.baseState = i, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, l.queue = t, t = t.dispatch = Jy.bind(null, Dt, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var e = rn();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = Ru(t);
    var e = t.queue, n = Vp.bind(null, Dt, e);
    return e.dispatch = n, [t.memoizedState, n];
  }, useDebugValue: zu, useDeferredValue: function(t, e) {
    var n = rn();
    return _u(n, t, e);
  }, useTransition: function() {
    var t = Ru(false);
    return t = Lp.bind(null, Dt, t.queue, true, false), rn().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, n) {
    var l = Dt, i = rn();
    if (qt) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = e(), re === null) throw Error(s(349));
      Lt & 60 || mp(l, e, n);
    }
    i.memoizedState = n;
    var u = { value: n, getSnapshot: e };
    return i.queue = u, _p(yp.bind(null, l, u, t), [t]), l.flags |= 2048, Fl(9, gp.bind(null, l, u, n, e), { destroy: void 0 }, null), n;
  }, useId: function() {
    var t = rn(), e = re.identifierPrefix;
    if (qt) {
      var n = ua, l = sa;
      n = (l & ~(1 << 32 - wt(l) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = yo++, 0 < n && (e += "H" + n.toString(32)), e += ":";
    } else n = Py++, e = ":" + e + "r" + n.toString(32) + ":";
    return t.memoizedState = e;
  }, useCacheRefresh: function() {
    return rn().memoizedState = Wy.bind(null, Dt);
  } };
  dl.useMemoCache = Cu, dl.useHostTransitionStatus = Du, dl.useFormState = Ap, dl.useActionState = Ap, dl.useOptimistic = function(t) {
    var e = rn();
    e.memoizedState = e.baseState = t;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = n, e = Bu.bind(null, Dt, true, n), n.dispatch = e, [t, e];
  };
  var Ba = { readContext: Pe, use: bo, useCallback: jp, useContext: Pe, useEffect: Ou, useImperativeHandle: Np, useInsertionEffect: kp, useLayoutEffect: Dp, useMemo: Up, useReducer: So, useRef: zp, useState: function() {
    return So(fa);
  }, useDebugValue: zu, useDeferredValue: function(t, e) {
    var n = Ae();
    return Hp(n, Ft.memoizedState, t, e);
  }, useTransition: function() {
    var t = So(fa)[0], e = Ae().memoizedState;
    return [typeof t == "boolean" ? t : Zr(t), e];
  }, useSyncExternalStore: hp, useId: Gp };
  Ba.useCacheRefresh = Yp, Ba.useMemoCache = Cu, Ba.useHostTransitionStatus = Du, Ba.useFormState = Rp, Ba.useActionState = Rp, Ba.useOptimistic = function(t, e) {
    var n = Ae();
    return Sp(n, Ft, t, e);
  };
  var pl = { readContext: Pe, use: bo, useCallback: jp, useContext: Pe, useEffect: Ou, useImperativeHandle: Np, useInsertionEffect: kp, useLayoutEffect: Dp, useMemo: Up, useReducer: Au, useRef: zp, useState: function() {
    return Au(fa);
  }, useDebugValue: zu, useDeferredValue: function(t, e) {
    var n = Ae();
    return Ft === null ? _u(n, t, e) : Hp(n, Ft.memoizedState, t, e);
  }, useTransition: function() {
    var t = Au(fa)[0], e = Ae().memoizedState;
    return [typeof t == "boolean" ? t : Zr(t), e];
  }, useSyncExternalStore: hp, useId: Gp };
  pl.useCacheRefresh = Yp, pl.useMemoCache = Cu, pl.useHostTransitionStatus = Du, pl.useFormState = Op, pl.useActionState = Op, pl.useOptimistic = function(t, e) {
    var n = Ae();
    return Ft !== null ? Sp(n, Ft, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  };
  function Nu(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : y({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var ju = { isMounted: function(t) {
    return (t = t._reactInternals) ? W(t) === t : false;
  }, enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var l = pn(), i = Ua(l);
    i.payload = e, n != null && (i.callback = n), e = Ha(t, i, l), e !== null && (Fe(e, t, l), Ir(e, t, l));
  }, enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var l = pn(), i = Ua(l);
    i.tag = 1, i.payload = e, n != null && (i.callback = n), e = Ha(t, i, l), e !== null && (Fe(e, t, l), Ir(e, t, l));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = pn(), l = Ua(n);
    l.tag = 2, e != null && (l.callback = e), e = Ha(t, l, n), e !== null && (Fe(e, t, n), Ir(e, t, n));
  } };
  function Qp(t, e, n, l, i, u, d) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, d) : e.prototype && e.prototype.isPureReactComponent ? !Ur(n, l) || !Ur(i, u) : true;
  }
  function Kp(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && ju.enqueueReplaceState(e, e.state, null);
  }
  function hl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = y({}, n));
      for (var i in t) n[i] === void 0 && (n[i] = t[i]);
    }
    return n;
  }
  var Co = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Zp(t) {
    Co(t);
  }
  function Fp(t) {
    console.error(t);
  }
  function Wp(t) {
    Co(t);
  }
  function wo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Jp(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Uu(t, e, n) {
    return n = Ua(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      wo(t, e);
    }, n;
  }
  function Ip(t) {
    return t = Ua(t), t.tag = 3, t;
  }
  function th(t, e, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      t.payload = function() {
        return i(u);
      }, t.callback = function() {
        Jp(e, n, l);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
      Jp(e, n, l), typeof i != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
      var v = l.stack;
      this.componentDidCatch(l.value, { componentStack: v !== null ? v : "" });
    });
  }
  function Iy(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Jr(e, n, i, true), n = Rn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Kn === null ? vc() : n.alternate === null && ve === 0 && (ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === pu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Sc(t, l, i)), false;
          case 22:
            return n.flags |= 65536, l === pu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Sc(t, l, i)), false;
        }
        throw Error(s(435, n.tag));
      }
      return Sc(t, l, i), vc(), false;
    }
    if (qt) return e = Rn.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== du && (t = Error(s(422), { cause: l }), qr(Cn(t, n)))) : (l !== du && (e = Error(s(423), { cause: l }), qr(Cn(e, n))), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Cn(l, n), i = Uu(t.stateNode, l, i), Ju(t, i), ve !== 4 && (ve = 2)), false;
    var u = Error(s(520), { cause: l });
    if (u = Cn(u, n), oi === null ? oi = [u] : oi.push(u), ve !== 4 && (ve = 2), e === null) return true;
    l = Cn(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = Uu(n.stateNode, l, t), Ju(n, t), false;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Va === null || !Va.has(u)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Ip(i), th(i, t, n, l), Ju(n, i), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var eh = Error(s(461)), De = false;
  function Le(t, e, n, l) {
    e.child = t === null ? ip(e, null, n, l) : ul(e, t.child, n, l);
  }
  function nh(t, e, n, l, i) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var v in l) v !== "ref" && (d[v] = l[v]);
    } else d = l;
    return gl(e), l = Su(t, e, n, d, u, i), v = xu(), t !== null && !De ? (Tu(t, e, i), da(t, e, i)) : (qt && v && cu(e), e.flags |= 1, Le(t, e, l, i), e.child);
  }
  function ah(t, e, n, l, i) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !ic(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, lh(t, e, u, l, i)) : (t = zo(n.type, null, l, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Pu(t, i)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ur, n(d, l) && t.ref === e.ref) return da(t, e, i);
    }
    return e.flags |= 1, t = Ga(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function lh(t, e, n, l, i) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ur(u, l) && t.ref === e.ref) if (De = false, e.pendingProps = l = u, Pu(t, i)) t.flags & 131072 && (De = true);
      else return e.lanes = t.lanes, da(t, e, i);
    }
    return Hu(t, e, n, l, i);
  }
  function rh(t, e, n) {
    var l = e.pendingProps, i = l.children, u = (e.stateNode._pendingVisibility & 2) !== 0, d = t !== null ? t.memoizedState : null;
    if (Wr(t, e), l.mode === "hidden" || u) {
      if (e.flags & 128) {
        if (l = d !== null ? d.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, u = 0; i !== null; ) u = u | i.lanes | i.childLanes, i = i.sibling;
          e.childLanes = u & ~l;
        } else e.childLanes = 0, e.child = null;
        return ih(t, e, l, n);
      }
      if (n & 536870912) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mo(e, d !== null ? d.cachePool : null), d !== null ? op(e, d) : hu(), sp(e);
      else return e.lanes = e.childLanes = 536870912, ih(t, e, d !== null ? d.baseLanes | n : n, n);
    } else d !== null ? (mo(e, d.cachePool), op(e, d), ka(), e.memoizedState = null) : (t !== null && mo(e, null), hu(), ka());
    return Le(t, e, i, n), e.child;
  }
  function ih(t, e, n, l) {
    var i = vu();
    return i = i === null ? null : { parent: _e._currentValue, pool: i }, e.memoizedState = { baseLanes: n, cachePool: i }, t !== null && mo(e, null), hu(), sp(e), t !== null && Jr(t, e, l, true), null;
  }
  function Wr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function Hu(t, e, n, l, i) {
    return gl(e), n = Su(t, e, n, l, void 0, i), l = xu(), t !== null && !De ? (Tu(t, e, i), da(t, e, i)) : (qt && l && cu(e), e.flags |= 1, Le(t, e, n, i), e.child);
  }
  function oh(t, e, n, l, i, u) {
    return gl(e), e.updateQueue = null, n = pp(e, l, n, i), dp(t), l = xu(), t !== null && !De ? (Tu(t, e, u), da(t, e, u)) : (qt && l && cu(e), e.flags |= 1, Le(t, e, n, u), e.child);
  }
  function sh(t, e, n, l, i) {
    if (gl(e), e.stateNode === null) {
      var u = ql, d = n.contextType;
      typeof d == "object" && d !== null && (u = Pe(d)), u = new n(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ju, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Fu(e), d = n.contextType, u.context = typeof d == "object" && d !== null ? Pe(d) : ql, u.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Nu(e, n, d, l), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && ju.enqueueReplaceState(u, u.state, null), ei(e, l, u, i), ti(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      u = e.stateNode;
      var v = e.memoizedProps, T = hl(n, v);
      u.props = T;
      var O = u.context, K = n.contextType;
      d = ql, typeof K == "object" && K !== null && (d = Pe(K));
      var tt = n.getDerivedStateFromProps;
      K = typeof tt == "function" || typeof u.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || O !== d) && Kp(e, u, l, d), ja = false;
      var $ = e.memoizedState;
      u.state = $, ei(e, l, u, i), ti(), O = e.memoizedState, v || $ !== O || ja ? (typeof tt == "function" && (Nu(e, n, tt, l), O = e.memoizedState), (T = ja || Qp(e, n, T, l, $, O, d)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = O), u.props = l, u.state = O, u.context = d, l = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      u = e.stateNode, Wu(t, e), d = e.memoizedProps, K = hl(n, d), u.props = K, tt = e.pendingProps, $ = u.context, O = n.contextType, T = ql, typeof O == "object" && O !== null && (T = Pe(O)), v = n.getDerivedStateFromProps, (O = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== tt || $ !== T) && Kp(e, u, l, T), ja = false, $ = e.memoizedState, u.state = $, ei(e, l, u, i), ti();
      var Q = e.memoizedState;
      d !== tt || $ !== Q || ja || t !== null && t.dependencies !== null && Ao(t.dependencies) ? (typeof v == "function" && (Nu(e, n, v, l), Q = e.memoizedState), (K = ja || Qp(e, n, K, l, $, Q, T) || t !== null && t.dependencies !== null && Ao(t.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, Q, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, Q, T)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && $ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && $ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = Q), u.props = l, u.state = Q, u.context = T, l = K) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && $ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && $ === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return u = l, Wr(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = ul(e, t.child, null, i), e.child = ul(e, null, n, i)) : Le(t, e, n, i), e.memoizedState = u.state, t = e.child) : t = da(t, e, i), t;
  }
  function uh(t, e, n, l) {
    return $r(), e.flags |= 256, Le(t, e, n, l), e.child;
  }
  var Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $u(t) {
    return { baseLanes: t, cachePool: fp() };
  }
  function qu(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= _n), t;
  }
  function ch(t, e, n) {
    var l = e.pendingProps, i = false, u = (e.flags & 128) !== 0, d;
    if ((d = u) || (d = t !== null && t.memoizedState === null ? false : (ze.current & 2) !== 0), d && (i = true, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (qt) {
        if (i ? _a(e) : ka(), qt) {
          var v = He, T;
          if (T = v) {
            t: {
              for (T = v, v = Qn; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (T = Xn(T.nextSibling), T === null) {
                  v = null;
                  break t;
                }
              }
              v = T;
            }
            v !== null ? (e.memoizedState = { dehydrated: v, treeContext: il !== null ? { id: sa, overflow: ua } : null, retryLane: 536870912 }, T = zn(18, null, null, 0), T.stateNode = v, T.return = e, e.child = T, Ze = e, He = null, T = true) : T = false;
          }
          T || sl(e);
        }
        if (v = e.memoizedState, v !== null && (v = v.dehydrated, v !== null)) return v.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
        ca(e);
      }
      return v = l.children, l = l.fallback, i ? (ka(), i = e.mode, v = Yu({ mode: "hidden", children: v }, i), l = vl(l, i, n, null), v.return = e, l.return = e, v.sibling = l, e.child = v, i = e.child, i.memoizedState = $u(n), i.childLanes = qu(t, d, n), e.memoizedState = Lu, l) : (_a(e), Gu(e, v));
    }
    if (T = t.memoizedState, T !== null && (v = T.dehydrated, v !== null)) {
      if (u) e.flags & 256 ? (_a(e), e.flags &= -257, e = Vu(t, e, n)) : e.memoizedState !== null ? (ka(), e.child = t.child, e.flags |= 128, e = null) : (ka(), i = l.fallback, v = e.mode, l = Yu({ mode: "visible", children: l.children }, v), i = vl(i, v, n, null), i.flags |= 2, l.return = e, i.return = e, l.sibling = i, e.child = l, ul(e, t.child, null, n), l = e.child, l.memoizedState = $u(n), l.childLanes = qu(t, d, n), e.memoizedState = Lu, e = i);
      else if (_a(e), v.data === "$!") {
        if (d = v.nextSibling && v.nextSibling.dataset, d) var O = d.dgst;
        d = O, l = Error(s(419)), l.stack = "", l.digest = d, qr({ value: l, source: null, stack: null }), e = Vu(t, e, n);
      } else if (De || Jr(t, e, n, false), d = (n & t.childLanes) !== 0, De || d) {
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
          if (l = l & (d.suspendedLanes | n) ? 0 : l, l !== 0 && l !== T.retryLane) throw T.retryLane = l, za(t, l), Fe(d, t, l), eh;
        }
        v.data === "$?" || vc(), e = Vu(t, e, n);
      } else v.data === "$?" ? (e.flags |= 128, e.child = t.child, e = hv.bind(null, t), v._reactRetry = e, e = null) : (t = T.treeContext, He = Xn(v.nextSibling), Ze = e, qt = true, Yn = null, Qn = false, t !== null && (wn[An++] = sa, wn[An++] = ua, wn[An++] = il, sa = t.id, ua = t.overflow, il = e), e = Gu(e, l.children), e.flags |= 4096);
      return e;
    }
    return i ? (ka(), i = l.fallback, v = e.mode, T = t.child, O = T.sibling, l = Ga(T, { mode: "hidden", children: l.children }), l.subtreeFlags = T.subtreeFlags & 31457280, O !== null ? i = Ga(O, i) : (i = vl(i, v, n, null), i.flags |= 2), i.return = e, l.return = e, l.sibling = i, e.child = l, l = i, i = e.child, v = t.child.memoizedState, v === null ? v = $u(n) : (T = v.cachePool, T !== null ? (O = _e._currentValue, T = T.parent !== O ? { parent: O, pool: O } : T) : T = fp(), v = { baseLanes: v.baseLanes | n, cachePool: T }), i.memoizedState = v, i.childLanes = qu(t, d, n), e.memoizedState = Lu, l) : (_a(e), n = t.child, t = n.sibling, n = Ga(n, { mode: "visible", children: l.children }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Gu(t, e) {
    return e = Yu({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Yu(t, e) {
    return jh(t, e, 0, null);
  }
  function Vu(t, e, n) {
    return ul(e, t.child, null, n), t = Gu(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function fh(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Ku(t.return, e, n);
  }
  function Xu(t, e, n, l, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: i } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = i);
  }
  function dh(t, e, n) {
    var l = e.pendingProps, i = l.revealOrder, u = l.tail;
    if (Le(t, e, l.children, n), l = ze.current, l & 2) l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && fh(t, n, e);
        else if (t.tag === 19) fh(t, n, e);
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
    switch (Rt(ze, l), i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; ) t = n.alternate, t !== null && ho(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Xu(e, false, i, n, u);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && ho(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Xu(e, true, n, null, u);
        break;
      case "together":
        Xu(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function da(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Ya |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (Jr(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, n = Ga(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = Ga(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Pu(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && Ao(t)));
  }
  function tv(t, e, n) {
    switch (e.tag) {
      case 3:
        bn(e, e.stateNode.containerInfo), Na(e, _e, t.memoizedState.cache), $r();
        break;
      case 27:
      case 5:
        Ht(e);
        break;
      case 4:
        bn(e, e.stateNode.containerInfo);
        break;
      case 10:
        Na(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (_a(e), e.flags |= 128, null) : n & e.child.childLanes ? ch(t, e, n) : (_a(e), t = da(t, e, n), t !== null ? t.sibling : null);
        _a(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Jr(t, e, n, false), l = (n & e.childLanes) !== 0), i) {
          if (l) return dh(t, e, n);
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Rt(ze, ze.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, rh(t, e, n);
      case 24:
        Na(e, _e, t.memoizedState.cache);
    }
    return da(t, e, n);
  }
  function ph(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) De = true;
    else {
      if (!Pu(t, n) && !(e.flags & 128)) return De = false, tv(t, e, n);
      De = !!(t.flags & 131072);
    }
    else De = false, qt && e.flags & 1048576 && Wd(e, so, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, i = l._init;
          if (l = i(l._payload), e.type = l, typeof l == "function") ic(l) ? (t = hl(l, t), e.tag = 1, e = sh(null, e, l, t, n)) : (e.tag = 0, e = Hu(null, e, l, t, n));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === A) {
                e.tag = 11, e = nh(null, e, l, t, n);
                break t;
              } else if (i === D) {
                e.tag = 14, e = ah(null, e, l, t, n);
                break t;
              }
            }
            throw e = it(l) || l, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Hu(t, e, e.type, e.pendingProps, n);
      case 1:
        return l = e.type, i = hl(l, e.pendingProps), sh(t, e, l, i, n);
      case 3:
        t: {
          if (bn(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
          var u = e.pendingProps;
          i = e.memoizedState, l = i.element, Wu(t, e), ei(e, u, null, n);
          var d = e.memoizedState;
          if (u = d.cache, Na(e, _e, u), u !== i.cache && Zu(e, [_e], n, true), ti(), u = d.element, i.isDehydrated) if (i = { element: u, isDehydrated: false, cache: d.cache }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
            e = uh(t, e, u, n);
            break t;
          } else if (u !== l) {
            l = Cn(Error(s(424)), e), qr(l), e = uh(t, e, u, n);
            break t;
          } else for (He = Xn(e.stateNode.containerInfo.firstChild), Ze = e, qt = true, Yn = null, Qn = true, n = ip(e, null, u, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if ($r(), u === l) {
              e = da(t, e, n);
              break t;
            }
            Le(t, e, u, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Wr(t, e), t === null ? (n = gm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : qt || (n = e.type, t = e.pendingProps, l = Go($t.current).createElement(n), l[Xe] = e, l[an] = t, $e(l, n, t), ke(l), e.stateNode = l) : e.memoizedState = gm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Ht(e), t === null && qt && (l = e.stateNode = pm(e.type, e.pendingProps, $t.current), Ze = e, Qn = true, He = Xn(l.firstChild)), l = e.pendingProps.children, t !== null || qt ? Le(t, e, l, n) : e.child = ul(e, null, l, n), Wr(t, e), e.child;
      case 5:
        return t === null && qt && ((i = l = He) && (l = zv(l, e.type, e.pendingProps, Qn), l !== null ? (e.stateNode = l, Ze = e, He = Xn(l.firstChild), Qn = false, i = true) : i = false), i || sl(e)), Ht(e), i = e.type, u = e.pendingProps, d = t !== null ? t.memoizedProps : null, l = u.children, kc(i, u) ? l = null : d !== null && kc(i, d) && (e.flags |= 32), e.memoizedState !== null && (i = Su(t, e, Qy, null, null, n), gi._currentValue = i), Wr(t, e), Le(t, e, l, n), e.child;
      case 6:
        return t === null && qt && ((t = n = He) && (n = _v(n, e.pendingProps, Qn), n !== null ? (e.stateNode = n, Ze = e, He = null, t = true) : t = false), t || sl(e)), null;
      case 13:
        return ch(t, e, n);
      case 4:
        return bn(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = ul(e, null, l, n) : Le(t, e, l, n), e.child;
      case 11:
        return nh(t, e, e.type, e.pendingProps, n);
      case 7:
        return Le(t, e, e.pendingProps, n), e.child;
      case 8:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return l = e.pendingProps, Na(e, e.type, l.value), Le(t, e, l.children, n), e.child;
      case 9:
        return i = e.type._context, l = e.pendingProps.children, gl(e), i = Pe(i), l = l(i), e.flags |= 1, Le(t, e, l, n), e.child;
      case 14:
        return ah(t, e, e.type, e.pendingProps, n);
      case 15:
        return lh(t, e, e.type, e.pendingProps, n);
      case 19:
        return dh(t, e, n);
      case 22:
        return rh(t, e, n);
      case 24:
        return gl(e), l = Pe(_e), t === null ? (i = vu(), i === null && (i = re, u = gu(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), e.memoizedState = { parent: l, cache: i }, Fu(e), Na(e, _e, i)) : (t.lanes & n && (Wu(t, e), ei(e, null, null, n), ti()), i = t.memoizedState, u = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Na(e, _e, l)) : (l = u.cache, Na(e, _e, l), l !== i.cache && Zu(e, [_e], n, true))), Le(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  var Qu = dt(null), ml = null, pa = null;
  function Na(t, e, n) {
    Rt(Qu, e._currentValue), e._currentValue = n;
  }
  function ha(t) {
    t._currentValue = Qu.current, Ct(Qu);
  }
  function Ku(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Zu(t, e, n, l) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var d = i.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var v = u;
          u = i;
          for (var T = 0; T < e.length; T++) if (v.context === e[T]) {
            u.lanes |= n, v = u.alternate, v !== null && (v.lanes |= n), Ku(u.return, n, t), l || (d = null);
            break t;
          }
          u = v.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(s(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), Ku(d, n, t), d = null;
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
  function Jr(t, e, n, l) {
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
          var v = i.type;
          un(i.pendingProps.value, d.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (i === Oe.current) {
        if (d = i.alternate, d === null) throw Error(s(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(gi) : t = [gi]);
      }
      i = i.return;
    }
    t !== null && Zu(e, t, n, l), e.flags |= 262144;
  }
  function Ao(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!un(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function gl(t) {
    ml = t, pa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Pe(t) {
    return hh(ml, t);
  }
  function Ro(t, e) {
    return ml === null && gl(t), hh(t, e);
  }
  function hh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, pa === null) {
      if (t === null) throw Error(s(308));
      pa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else pa = pa.next = e;
    return n;
  }
  var ja = false;
  function Fu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Wu(t, e) {
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
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = io(t), Zd(t, null, n), e;
    }
    return ro(t, l, e, n), io(t);
  }
  function Ir(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194176) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, ad(t, n);
    }
  }
  function Ju(t, e) {
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
  var Iu = false;
  function ti() {
    if (Iu) {
      var t = Ql;
      if (t !== null) throw t;
    }
  }
  function ei(t, e, n, l) {
    Iu = false;
    var i = t.updateQueue;
    ja = false;
    var u = i.firstBaseUpdate, d = i.lastBaseUpdate, v = i.shared.pending;
    if (v !== null) {
      i.shared.pending = null;
      var T = v, O = T.next;
      T.next = null, d === null ? u = O : d.next = O, d = T;
      var K = t.alternate;
      K !== null && (K = K.updateQueue, v = K.lastBaseUpdate, v !== d && (v === null ? K.firstBaseUpdate = O : v.next = O, K.lastBaseUpdate = T));
    }
    if (u !== null) {
      var tt = i.baseState;
      d = 0, K = O = T = null, v = u;
      do {
        var $ = v.lane & -536870913, Q = $ !== v.lane;
        if (Q ? (Lt & $) === $ : (l & $) === $) {
          $ !== 0 && $ === Pl && (Iu = true), K !== null && (K = K.next = { lane: 0, tag: v.tag, payload: v.payload, callback: null, next: null });
          t: {
            var mt = t, At = v;
            $ = e;
            var be = n;
            switch (At.tag) {
              case 1:
                if (mt = At.payload, typeof mt == "function") {
                  tt = mt.call(be, tt, $);
                  break t;
                }
                tt = mt;
                break t;
              case 3:
                mt.flags = mt.flags & -65537 | 128;
              case 0:
                if (mt = At.payload, $ = typeof mt == "function" ? mt.call(be, tt, $) : mt, $ == null) break t;
                tt = y({}, tt, $);
                break t;
              case 2:
                ja = true;
            }
          }
          $ = v.callback, $ !== null && (t.flags |= 64, Q && (t.flags |= 8192), Q = i.callbacks, Q === null ? i.callbacks = [$] : Q.push($));
        } else Q = { lane: $, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, K === null ? (O = K = Q, T = tt) : K = K.next = Q, d |= $;
        if (v = v.next, v === null) {
          if (v = i.shared.pending, v === null) break;
          Q = v, v = Q.next, Q.next = null, i.lastBaseUpdate = Q, i.shared.pending = null;
        }
      } while (true);
      K === null && (T = tt), i.baseState = T, i.firstBaseUpdate = O, i.lastBaseUpdate = K, u === null && (i.shared.lanes = 0), Ya |= d, t.lanes = d, t.memoizedState = tt;
    }
  }
  function mh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function gh(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) mh(n[t], e);
  }
  function ni(t, e) {
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
    } catch (v) {
      ee(e, e.return, v);
    }
  }
  function La(t, e, n) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst, v = d.destroy;
            if (v !== void 0) {
              d.destroy = void 0, i = e;
              var T = n;
              try {
                v();
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
  function yh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gh(e, n);
      } catch (l) {
        ee(t, t.return, l);
      }
    }
  }
  function vh(t, e, n) {
    n.props = hl(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      ee(t, e, l);
    }
  }
  function yl(t, e) {
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
  function bh(t) {
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
  function Sh(t, e, n) {
    try {
      var l = t.stateNode;
      wv(l, t.type, n, e), l[an] = e;
    } catch (i) {
      ee(t, t.return, i);
    }
  }
  function xh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function tc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ec(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = qo));
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (ec(t, e, n), t = t.sibling; t !== null; ) ec(t, e, n), t = t.sibling;
  }
  function Mo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (Mo(t, e, n), t = t.sibling; t !== null; ) Mo(t, e, n), t = t.sibling;
  }
  var ma = false, ye = false, nc = false, Th = typeof WeakSet == "function" ? WeakSet : Set, Be = null, Eh = false;
  function ev(t, e) {
    if (t = t.containerInfo, zc = Ko, t = $d(t), lu(t)) {
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
          var d = 0, v = -1, T = -1, O = 0, K = 0, tt = t, $ = null;
          e: for (; ; ) {
            for (var Q; tt !== n || i !== 0 && tt.nodeType !== 3 || (v = d + i), tt !== u || l !== 0 && tt.nodeType !== 3 || (T = d + l), tt.nodeType === 3 && (d += tt.nodeValue.length), (Q = tt.firstChild) !== null; ) $ = tt, tt = Q;
            for (; ; ) {
              if (tt === t) break e;
              if ($ === n && ++O === i && (v = d), $ === u && ++K === l && (T = d), (Q = tt.nextSibling) !== null) break;
              tt = $, $ = tt.parentNode;
            }
            tt = Q;
          }
          n = v === -1 || T === -1 ? null : { start: v, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_c = { focusedElem: t, selectionRange: n }, Ko = false, Be = e; Be !== null; ) if (e = Be, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Be = t;
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
              var mt = hl(n.type, i, n.elementType === n.type);
              t = l.getSnapshotBeforeUpdate(mt, u), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (At) {
              ee(n, n.return, At);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Nc(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Nc(t);
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
    return mt = Eh, Eh = false, mt;
  }
  function Ch(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ya(t, n), l & 4 && ni(5, n);
        break;
      case 1:
        if (ya(t, n), l & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (v) {
          ee(n, n.return, v);
        }
        else {
          var i = hl(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (v) {
            ee(n, n.return, v);
          }
        }
        l & 64 && yh(n), l & 512 && yl(n, n.return);
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
            gh(l, t);
          } catch (v) {
            ee(n, n.return, v);
          }
        }
        break;
      case 26:
        ya(t, n), l & 512 && yl(n, n.return);
        break;
      case 27:
      case 5:
        ya(t, n), e === null && l & 4 && bh(n), l & 512 && yl(n, n.return);
        break;
      case 12:
        ya(t, n);
        break;
      case 13:
        ya(t, n), l & 4 && Rh(t, n);
        break;
      case 22:
        if (i = n.memoizedState !== null || ma, !i) {
          e = e !== null && e.memoizedState !== null || ye;
          var u = ma, d = ye;
          ma = i, (ye = e) && !d ? $a(t, n, (n.subtreeFlags & 8772) !== 0) : ya(t, n), ma = u, ye = d;
        }
        l & 512 && (n.memoizedProps.mode === "manual" ? yl(n, n.return) : cn(n, n.return));
        break;
      default:
        ya(t, n);
    }
  }
  function wh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, wh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Gs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Re = null, fn = false;
  function ga(t, e, n) {
    for (n = n.child; n !== null; ) Ah(t, e, n), n = n.sibling;
  }
  function Ah(t, e, n) {
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
        var l = Re, i = fn;
        for (Re = n.stateNode, ga(t, e, n), n = n.stateNode, e = n.attributes; e.length; ) n.removeAttributeNode(e[0]);
        Gs(n), Re = l, fn = i;
        break;
      case 5:
        ye || cn(n, e);
      case 6:
        i = Re;
        var u = fn;
        if (Re = null, ga(t, e, n), Re = i, fn = u, Re !== null) if (fn) try {
          t = Re, l = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l);
        } catch (d) {
          ee(n, e, d);
        }
        else try {
          Re.removeChild(n.stateNode);
        } catch (d) {
          ee(n, e, d);
        }
        break;
      case 18:
        Re !== null && (fn ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Bc(e.parentNode, n) : e.nodeType === 1 && Bc(e, n), Si(e)) : Bc(Re, n.stateNode));
        break;
      case 4:
        l = Re, i = fn, Re = n.stateNode.containerInfo, fn = true, ga(t, e, n), Re = l, fn = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ye || La(2, n, e), ye || La(4, n, e), ga(t, e, n);
        break;
      case 1:
        ye || (cn(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && vh(n, e, l)), ga(t, e, n);
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
  function Rh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Si(t);
    } catch (n) {
      ee(e, e.return, n);
    }
  }
  function nv(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Th()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Th()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function ac(t, e) {
    var n = nv(t);
    e.forEach(function(l) {
      var i = mv.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Mn(t, e) {
    var n = e.deletions;
    if (n !== null) for (var l = 0; l < n.length; l++) {
      var i = n[l], u = t, d = e, v = d;
      t: for (; v !== null; ) {
        switch (v.tag) {
          case 27:
          case 5:
            Re = v.stateNode, fn = false;
            break t;
          case 3:
            Re = v.stateNode.containerInfo, fn = true;
            break t;
          case 4:
            Re = v.stateNode.containerInfo, fn = true;
            break t;
        }
        v = v.return;
      }
      if (Re === null) throw Error(s(160));
      Ah(u, d, i), Re = null, fn = false, u = i.alternate, u !== null && (u.return = null), i.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) Mh(e, t), e = e.sibling;
  }
  var Vn = null;
  function Mh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Mn(e, t), On(t), l & 4 && (La(3, t, t.return), ni(3, t), La(5, t, t.return));
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
                  u = i.getElementsByTagName("title")[0], (!u || u[Mr] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(u, i.querySelector("head > title"))), $e(u, l, n), u[Xe] = t, ke(u), l = u;
                  break t;
                case "link":
                  var d = bm("link", "href", i).get(l + (n.href || ""));
                  if (d) {
                    for (var v = 0; v < d.length; v++) if (u = d[v], u.getAttribute("href") === (n.href == null ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      d.splice(v, 1);
                      break e;
                    }
                  }
                  u = i.createElement(l), $e(u, l, n), i.head.appendChild(u);
                  break;
                case "meta":
                  if (d = bm("meta", "content", i).get(l + (n.content || ""))) {
                    for (v = 0; v < d.length; v++) if (u = d[v], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      d.splice(v, 1);
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
          } else Sm(i, t.type, t.stateNode);
          else t.stateNode = vm(i, l, t.memoizedProps);
          else u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? Sm(i, t.type, t.stateNode) : vm(i, l, t.memoizedProps)) : l === null && t.stateNode !== null && Sh(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          i = t.stateNode, u = t.memoizedProps;
          try {
            for (var T = i.firstChild; T; ) {
              var O = T.nextSibling, K = T.nodeName;
              T[Mr] || K === "HEAD" || K === "BODY" || K === "SCRIPT" || K === "STYLE" || K === "LINK" && T.rel.toLowerCase() === "stylesheet" || i.removeChild(T), T = O;
            }
            for (var tt = t.type, $ = i.attributes; $.length; ) i.removeAttributeNode($[0]);
            $e(i, tt, u), i[Xe] = t, i[an] = u;
          } catch (mt) {
            ee(t, t.return, mt);
          }
        }
      case 5:
        if (Mn(e, t), On(t), l & 512 && (ye || n === null || cn(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            Bl(i, "");
          } catch (mt) {
            ee(t, t.return, mt);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, Sh(t, i, n !== null ? n.memoizedProps : i)), l & 1024 && (nc = true);
        break;
      case 6:
        if (Mn(e, t), On(t), l & 4) {
          if (t.stateNode === null) throw Error(s(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (mt) {
            ee(t, t.return, mt);
          }
        }
        break;
      case 3:
        if (Xo = null, i = Vn, Vn = Yo(e.containerInfo), Mn(e, t), Vn = i, On(t), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Si(e.containerInfo);
        } catch (mt) {
          ee(t, t.return, mt);
        }
        nc && (nc = false, Oh(t));
        break;
      case 4:
        l = Vn, Vn = Yo(t.stateNode.containerInfo), Mn(e, t), On(t), Vn = l;
        break;
      case 12:
        Mn(e, t), On(t);
        break;
      case 13:
        Mn(e, t), On(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (dc = Ue()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ac(t, l)));
        break;
      case 22:
        if (l & 512 && (ye || n === null || cn(n, n.return)), T = t.memoizedState !== null, O = n !== null && n.memoizedState !== null, K = ma, tt = ye, ma = K || T, ye = tt || O, Mn(e, t), ye = tt, ma = K, On(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, l & 8192 && (e._visibility = T ? e._visibility & -2 : e._visibility | 1, T && (e = ma || ye, n === null || O || e || Wl(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual")) t: for (n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
            if (n === null) {
              O = n = e;
              try {
                if (i = O.stateNode, T) u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                else {
                  d = O.stateNode, v = O.memoizedProps.style;
                  var Q = v != null && v.hasOwnProperty("display") ? v.display : null;
                  d.style.display = Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                }
              } catch (mt) {
                ee(O, O.return, mt);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              O = e;
              try {
                O.stateNode.nodeValue = T ? "" : O.memoizedProps;
              } catch (mt) {
                ee(O, O.return, mt);
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
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ac(t, n))));
        break;
      case 19:
        Mn(e, t), On(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ac(t, l)));
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
              if (xh(n)) {
                var l = n;
                break t;
              }
              n = n.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var i = l.stateNode, u = tc(t);
              Mo(t, u, i);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (Bl(d, ""), l.flags &= -33);
              var v = tc(t);
              Mo(t, v, d);
              break;
            case 3:
            case 4:
              var T = l.stateNode.containerInfo, O = tc(t);
              ec(t, O, T);
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
  function Oh(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      Oh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function ya(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Ch(t, e.alternate, e), e = e.sibling;
  }
  function Wl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          La(4, e, e.return), Wl(e);
          break;
        case 1:
          cn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && vh(e, e.return, n), Wl(e);
          break;
        case 26:
        case 27:
        case 5:
          cn(e, e.return), Wl(e);
          break;
        case 22:
          cn(e, e.return), e.memoizedState === null && Wl(e);
          break;
        default:
          Wl(e);
      }
      t = t.sibling;
    }
  }
  function $a(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, i = t, u = e, d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          $a(i, u, n), ni(4, u);
          break;
        case 1:
          if ($a(i, u, n), l = u, i = l.stateNode, typeof i.componentDidMount == "function") try {
            i.componentDidMount();
          } catch (O) {
            ee(l, l.return, O);
          }
          if (l = u, i = l.updateQueue, i !== null) {
            var v = l.stateNode;
            try {
              var T = i.shared.hiddenCallbacks;
              if (T !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < T.length; i++) mh(T[i], v);
            } catch (O) {
              ee(l, l.return, O);
            }
          }
          n && d & 64 && yh(u), yl(u, u.return);
          break;
        case 26:
        case 27:
        case 5:
          $a(i, u, n), n && l === null && d & 4 && bh(u), yl(u, u.return);
          break;
        case 12:
          $a(i, u, n);
          break;
        case 13:
          $a(i, u, n), n && d & 4 && Rh(i, u);
          break;
        case 22:
          u.memoizedState === null && $a(i, u, n), yl(u, u.return);
          break;
        default:
          $a(i, u, n);
      }
      e = e.sibling;
    }
  }
  function lc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Pr(n));
  }
  function rc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Pr(t));
  }
  function qa(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) zh(t, e, n, l), e = e.sibling;
  }
  function zh(t, e, n, l) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qa(t, e, n, l), i & 2048 && ni(9, e);
        break;
      case 3:
        qa(t, e, n, l), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Pr(t)));
        break;
      case 12:
        if (i & 2048) {
          qa(t, e, n, l), t = e.stateNode;
          try {
            var u = e.memoizedProps, d = u.id, v = u.onPostCommit;
            typeof v == "function" && v(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (T) {
            ee(e, e.return, T);
          }
        } else qa(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, e.memoizedState !== null ? u._visibility & 4 ? qa(t, e, n, l) : ai(t, e) : u._visibility & 4 ? qa(t, e, n, l) : (u._visibility |= 4, Jl(t, e, n, l, (e.subtreeFlags & 10256) !== 0)), i & 2048 && lc(e.alternate, e);
        break;
      case 24:
        qa(t, e, n, l), i & 2048 && rc(e.alternate, e);
        break;
      default:
        qa(t, e, n, l);
    }
  }
  function Jl(t, e, n, l, i) {
    for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t, d = e, v = n, T = l, O = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Jl(u, d, v, T, i), ni(8, d);
          break;
        case 23:
          break;
        case 22:
          var K = d.stateNode;
          d.memoizedState !== null ? K._visibility & 4 ? Jl(u, d, v, T, i) : ai(u, d) : (K._visibility |= 4, Jl(u, d, v, T, i)), i && O & 2048 && lc(d.alternate, d);
          break;
        case 24:
          Jl(u, d, v, T, i), i && O & 2048 && rc(d.alternate, d);
          break;
        default:
          Jl(u, d, v, T, i);
      }
      e = e.sibling;
    }
  }
  function ai(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, l = e, i = l.flags;
      switch (l.tag) {
        case 22:
          ai(n, l), i & 2048 && lc(l.alternate, l);
          break;
        case 24:
          ai(n, l), i & 2048 && rc(l.alternate, l);
          break;
        default:
          ai(n, l);
      }
      e = e.sibling;
    }
  }
  var li = 8192;
  function Il(t) {
    if (t.subtreeFlags & li) for (t = t.child; t !== null; ) _h(t), t = t.sibling;
  }
  function _h(t) {
    switch (t.tag) {
      case 26:
        Il(t), t.flags & li && t.memoizedState !== null && Vv(Vn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Il(t);
        break;
      case 3:
      case 4:
        var e = Vn;
        Vn = Yo(t.stateNode.containerInfo), Il(t), Vn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = li, li = 16777216, Il(t), li = e) : Il(t));
        break;
      default:
        Il(t);
    }
  }
  function kh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ri(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, Bh(l, t);
      }
      kh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Dh(t), t = t.sibling;
  }
  function Dh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ri(t), t.flags & 2048 && La(9, t, t.return);
        break;
      case 3:
        ri(t);
        break;
      case 12:
        ri(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, Oo(t)) : ri(t);
        break;
      default:
        ri(t);
    }
  }
  function Oo(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, Bh(l, t);
      }
      kh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          La(8, e, e.return), Oo(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 4 && (n._visibility &= -5, Oo(e));
          break;
        default:
          Oo(e);
      }
      t = t.sibling;
    }
  }
  function Bh(t, e) {
    for (; Be !== null; ) {
      var n = Be;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          La(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Pr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Be = l;
      else t: for (n = t; Be !== null; ) {
        l = Be;
        var i = l.sibling, u = l.return;
        if (wh(l), l === n) {
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
  function av(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zn(t, e, n, l) {
    return new av(t, e, n, l);
  }
  function ic(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ga(t, e) {
    var n = t.alternate;
    return n === null ? (n = zn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 31457280, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Nh(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function zo(t, e, n, l, i, u) {
    var d = 0;
    if (l = t, typeof t == "function") ic(t) && (d = 1);
    else if (typeof t == "string") d = Gv(t, n, ce.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case g:
        return vl(n.children, i, u, e);
      case m:
        d = 8, i |= 24;
        break;
      case S:
        return t = zn(12, n, e, i | 2), t.elementType = S, t.lanes = u, t;
      case x:
        return t = zn(13, n, e, i), t.elementType = x, t.lanes = u, t;
      case N:
        return t = zn(19, n, e, i), t.elementType = N, t.lanes = u, t;
      case B:
        return jh(n, i, u, e);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case b:
          case _:
            d = 10;
            break t;
          case w:
            d = 9;
            break t;
          case A:
            d = 11;
            break t;
          case D:
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
  function vl(t, e, n, l) {
    return t = zn(7, t, l, e), t.lanes = n, t;
  }
  function jh(t, e, n, l) {
    t = zn(22, t, l, e), t.elementType = B, t.lanes = n;
    var i = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (!(i._pendingVisibility & 2)) {
        var d = za(u, 2);
        d !== null && (i._pendingVisibility |= 2, Fe(d, u, 2));
      }
    }, attach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (i._pendingVisibility & 2) {
        var d = za(u, 2);
        d !== null && (i._pendingVisibility &= -3, Fe(d, u, 2));
      }
    } };
    return t.stateNode = i, t;
  }
  function oc(t, e, n) {
    return t = zn(6, t, null, e), t.lanes = n, t;
  }
  function sc(t, e, n) {
    return e = zn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  function va(t) {
    t.flags |= 4;
  }
  function Uh(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !xm(e)) {
      if (e = Rn.current, e !== null && ((Lt & 4194176) === Lt ? Kn !== null : (Lt & 62914560) !== Lt && !(Lt & 536870912) || e !== Kn)) throw Yr = pu, tp;
      t.flags |= 8192;
    }
  }
  function _o(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ed() : 536870912, t.lanes |= e, er |= e);
  }
  function ii(t, e) {
    if (!qt) switch (t.tailMode) {
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
  function lv(t, e, n) {
    var l = e.pendingProps;
    switch (fu(e), e.tag) {
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
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ha(_e), Ge(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Lr(e) ? va(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Yn !== null && (gc(Yn), Yn = null))), he(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (va(e), n !== null ? (he(e), Uh(e, n)) : (he(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (va(e), he(e), Uh(e, n)) : (he(e), e.flags &= -16777217) : (t.memoizedProps !== l && va(e), he(e), e.flags &= -16777217), null;
      case 27:
        fe(e), n = $t.current;
        var i = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && va(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return he(e), null;
          }
          t = ce.current, Lr(e) ? Jd(e) : (t = pm(i, l, n), e.stateNode = t, va(e));
        }
        return he(e), null;
      case 5:
        if (fe(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && va(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return he(e), null;
          }
          if (t = ce.current, Lr(e)) Jd(e);
          else {
            switch (i = Go($t.current), t) {
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
            t[Xe] = e, t[an] = l;
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
          if (t = $t.current, Lr(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = Ze, i !== null) switch (i.tag) {
              case 27:
              case 5:
                l = i.memoizedProps;
            }
            t[Xe] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === true || om(t.nodeValue, n)), t || sl(e);
          } else t = Go(t).createTextNode(l), t[Xe] = e, e.stateNode = t;
        }
        return he(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = Lr(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(s(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Xe] = e;
            } else $r(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            he(e), i = false;
          } else Yn !== null && (gc(Yn), Yn = null), i = true;
          if (!i) return e.flags & 256 ? (ca(e), e) : (ca(e), null);
        }
        if (ca(e), e.flags & 128) return e.lanes = n, e;
        if (n = l !== null, t = t !== null && t.memoizedState !== null, n) {
          l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), _o(e, e.updateQueue), he(e), null;
      case 4:
        return Ge(), t === null && Rc(e.stateNode.containerInfo), he(e), null;
      case 10:
        return ha(e.type), he(e), null;
      case 19:
        if (Ct(ze), i = e.memoizedState, i === null) return he(e), null;
        if (l = (e.flags & 128) !== 0, u = i.rendering, u === null) if (l) ii(i, false);
        else {
          if (ve !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = ho(t), u !== null) {
              for (e.flags |= 128, ii(i, false), t = u.updateQueue, e.updateQueue = t, _o(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) Nh(n, t), n = n.sibling;
              return Rt(ze, ze.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && Ue() > ko && (e.flags |= 128, l = true, ii(i, false), e.lanes = 4194304);
        }
        else {
          if (!l) if (t = ho(u), t !== null) {
            if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, _o(e, t), ii(i, true), i.tail === null && i.tailMode === "hidden" && !u.alternate && !qt) return he(e), null;
          } else 2 * Ue() - i.renderingStartTime > ko && n !== 536870912 && (e.flags |= 128, l = true, ii(i, false), e.lanes = 4194304);
          i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Ue(), e.sibling = null, t = ze.current, Rt(ze, l ? t & 1 | 2 : t & 1), e) : (he(e), null);
      case 22:
      case 23:
        return ca(e), mu(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? n & 536870912 && !(e.flags & 128) && (he(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : he(e), n = e.updateQueue, n !== null && _o(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && Ct(cl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ha(_e), he(e), null;
      case 25:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function rv(t, e) {
    switch (fu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ha(_e), Ge(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return fe(e), null;
      case 13:
        if (ca(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(s(340));
          $r();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ct(ze), null;
      case 4:
        return Ge(), null;
      case 10:
        return ha(e.type), null;
      case 22:
      case 23:
        return ca(e), mu(), t !== null && Ct(cl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ha(_e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hh(t, e) {
    switch (fu(e), e.tag) {
      case 3:
        ha(_e), Ge();
        break;
      case 26:
      case 27:
      case 5:
        fe(e);
        break;
      case 4:
        Ge();
        break;
      case 13:
        ca(e);
        break;
      case 19:
        Ct(ze);
        break;
      case 10:
        ha(e.type);
        break;
      case 22:
      case 23:
        ca(e), mu(), t !== null && Ct(cl);
        break;
      case 24:
        ha(_e);
    }
  }
  var iv = { getCacheForType: function(t) {
    var e = Pe(_e), n = e.data.get(t);
    return n === void 0 && (n = t(), e.data.set(t, n)), n;
  } }, ov = typeof WeakMap == "function" ? WeakMap : Map, me = 0, re = null, Nt = null, Lt = 0, ie = 0, dn = null, ba = false, tr = false, uc = false, Sa = 0, ve = 0, Ya = 0, bl = 0, cc = 0, _n = 0, er = 0, oi = null, Fn = null, fc = false, dc = 0, ko = 1 / 0, Do = null, Va = null, Bo = false, Sl = null, si = 0, pc = 0, hc = null, ui = 0, mc = null;
  function pn() {
    if (me & 2 && Lt !== 0) return Lt & -Lt;
    if (G.T !== null) {
      var t = Pl;
      return t !== 0 ? t : Ec();
    }
    return rd();
  }
  function Lh() {
    _n === 0 && (_n = !(Lt & 536870912) || qt ? td() : 536870912);
    var t = Rn.current;
    return t !== null && (t.flags |= 32), _n;
  }
  function Fe(t, e, n) {
    (t === re && ie === 2 || t.cancelPendingCommit !== null) && (nr(t, 0), xa(t, Lt, _n, false)), Rr(t, n), (!(me & 2) || t !== re) && (t === re && (!(me & 2) && (bl |= n), ve === 4 && xa(t, Lt, _n, false)), Wn(t));
  }
  function $h(t, e, n) {
    if (me & 6) throw Error(s(327));
    var l = !n && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Pn(t, e), i = l ? cv(t, e) : bc(t, e, true), u = l;
    do {
      if (i === 0) {
        tr && !l && xa(t, e, 0, false);
        break;
      } else if (i === 6) xa(t, e, 0, !ba);
      else {
        if (n = t.current.alternate, u && !sv(n)) {
          i = bc(t, e, false), u = false;
          continue;
        }
        if (i === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var d = 0;
          else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            e = d;
            t: {
              var v = t;
              i = oi;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (nr(v, d).flags |= 256), d = bc(v, d, false), d !== 2) {
                if (uc && !T) {
                  v.errorRecoveryDisabledLanes |= u, bl |= u, i = 4;
                  break t;
                }
                u = Fn, Fn = i, u !== null && gc(u);
              }
              i = d;
            }
            if (u = false, i !== 2) continue;
          }
        }
        if (i === 1) {
          nr(t, 0), xa(t, e, 0, true);
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
          if (l.finishedWork = n, l.finishedLanes = e, (e & 62914560) === e && (u = dc + 300 - Ue(), 10 < u)) {
            if (xa(l, e, _n, !ba), Sn(l, 0) !== 0) break t;
            l.timeoutHandle = cm(qh.bind(null, l, n, Fn, Do, fc, e, _n, bl, er, ba, 2, -0, 0), u);
            break t;
          }
          qh(l, n, Fn, Do, fc, e, _n, bl, er, ba, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Wn(t);
  }
  function gc(t) {
    Fn === null ? Fn = t : Fn.push.apply(Fn, t);
  }
  function qh(t, e, n, l, i, u, d, v, T, O, K, tt, $) {
    var Q = e.subtreeFlags;
    if ((Q & 8192 || (Q & 16785408) === 16785408) && (mi = { stylesheets: null, count: 0, unsuspend: Yv }, _h(e), e = Xv(), e !== null)) {
      t.cancelPendingCommit = e(Kh.bind(null, t, n, l, i, d, v, T, 1, tt, $)), xa(t, u, d, !O);
      return;
    }
    Kh(t, n, l, i, d, v, T, K, tt, $);
  }
  function sv(t) {
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
    e &= ~cc, e &= ~bl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var u = 31 - wt(i), d = 1 << u;
      l[u] = -1, i &= ~d;
    }
    n !== 0 && nd(t, n, e);
  }
  function No() {
    return me & 6 ? true : (ci(0), false);
  }
  function yc() {
    if (Nt !== null) {
      if (ie === 0) var t = Nt.return;
      else t = Nt, pa = ml = null, Eu(t), Vl = null, Vr = 0, t = Nt;
      for (; t !== null; ) Hh(t.alternate, t), t = t.return;
      Nt = null;
    }
  }
  function nr(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Rv(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), yc(), re = t, Nt = n = Ga(t.current, null), Lt = e, ie = 0, dn = null, ba = false, tr = Pn(t, e), uc = false, er = _n = cc = bl = Ya = ve = 0, Fn = oi = null, fc = false, e & 8 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var i = 31 - wt(l), u = 1 << i;
      e |= t[i], l &= ~u;
    }
    return Sa = e, lo(), n;
  }
  function Gh(t, e) {
    Dt = null, G.H = Zn, e === Gr ? (e = ap(), ie = 3) : e === tp ? (e = ap(), ie = 4) : ie = e === eh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, dn = e, Nt === null && (ve = 1, wo(t, Cn(e, t.current)));
  }
  function Yh() {
    var t = G.H;
    return G.H = Zn, t === null ? Zn : t;
  }
  function Vh() {
    var t = G.A;
    return G.A = iv, t;
  }
  function vc() {
    ve = 4, ba || (Lt & 4194176) !== Lt && Rn.current !== null || (tr = true), !(Ya & 134217727) && !(bl & 134217727) || re === null || xa(re, Lt, _n, false);
  }
  function bc(t, e, n) {
    var l = me;
    me |= 2;
    var i = Yh(), u = Vh();
    (re !== t || Lt !== e) && (Do = null, nr(t, e)), e = false;
    var d = ve;
    t: do
      try {
        if (ie !== 0 && Nt !== null) {
          var v = Nt, T = dn;
          switch (ie) {
            case 8:
              yc(), d = 6;
              break t;
            case 3:
            case 2:
            case 6:
              Rn.current === null && (e = true);
              var O = ie;
              if (ie = 0, dn = null, ar(t, v, T, O), n && tr) {
                d = 0;
                break t;
              }
              break;
            default:
              O = ie, ie = 0, dn = null, ar(t, v, T, O);
          }
        }
        uv(), d = ve;
        break;
      } catch (K) {
        Gh(t, K);
      }
    while (true);
    return e && t.shellSuspendCounter++, pa = ml = null, me = l, G.H = i, G.A = u, Nt === null && (re = null, Lt = 0, lo()), d;
  }
  function uv() {
    for (; Nt !== null; ) Xh(Nt);
  }
  function cv(t, e) {
    var n = me;
    me |= 2;
    var l = Yh(), i = Vh();
    re !== t || Lt !== e ? (Do = null, ko = Ue() + 500, nr(t, e)) : tr = Pn(t, e);
    t: do
      try {
        if (ie !== 0 && Nt !== null) {
          e = Nt;
          var u = dn;
          e: switch (ie) {
            case 1:
              ie = 0, dn = null, ar(t, e, u, 1);
              break;
            case 2:
              if (ep(u)) {
                ie = 0, dn = null, Ph(e);
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
              ep(u) ? (ie = 0, dn = null, Ph(e)) : (ie = 0, dn = null, ar(t, e, u, 7));
              break;
            case 5:
              var d = null;
              switch (Nt.tag) {
                case 26:
                  d = Nt.memoizedState;
                case 5:
                case 27:
                  var v = Nt;
                  if (!d || xm(d)) {
                    ie = 0, dn = null;
                    var T = v.sibling;
                    if (T !== null) Nt = T;
                    else {
                      var O = v.return;
                      O !== null ? (Nt = O, jo(O)) : Nt = null;
                    }
                    break e;
                  }
              }
              ie = 0, dn = null, ar(t, e, u, 5);
              break;
            case 6:
              ie = 0, dn = null, ar(t, e, u, 6);
              break;
            case 8:
              yc(), ve = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        fv();
        break;
      } catch (K) {
        Gh(t, K);
      }
    while (true);
    return pa = ml = null, G.H = l, G.A = i, me = n, Nt !== null ? 0 : (re = null, Lt = 0, lo(), ve);
  }
  function fv() {
    for (; Nt !== null && !Tt(); ) Xh(Nt);
  }
  function Xh(t) {
    var e = ph(t.alternate, t, Sa);
    t.memoizedProps = t.pendingProps, e === null ? jo(t) : Nt = e;
  }
  function Ph(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = oh(n, e, e.pendingProps, e.type, void 0, Lt);
        break;
      case 11:
        e = oh(n, e, e.pendingProps, e.type.render, e.ref, Lt);
        break;
      case 5:
        Eu(e);
      default:
        Hh(n, e), e = Nt = Nh(e, Sa), e = ph(n, e, Sa);
    }
    t.memoizedProps = t.pendingProps, e === null ? jo(t) : Nt = e;
  }
  function ar(t, e, n, l) {
    pa = ml = null, Eu(e), Vl = null, Vr = 0;
    var i = e.return;
    try {
      if (Iy(t, i, e, n, Lt)) {
        ve = 1, wo(t, Cn(n, t.current)), Nt = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw Nt = i, u;
      ve = 1, wo(t, Cn(n, t.current)), Nt = null;
      return;
    }
    e.flags & 32768 ? (qt || l === 1 ? t = true : tr || Lt & 536870912 ? t = false : (ba = t = true, (l === 2 || l === 3 || l === 6) && (l = Rn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Qh(e, t)) : jo(e);
  }
  function jo(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Qh(e, ba);
        return;
      }
      t = e.return;
      var n = lv(e.alternate, e, Sa);
      if (n !== null) {
        Nt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Nt = e;
        return;
      }
      Nt = e = t;
    } while (e !== null);
    ve === 0 && (ve = 5);
  }
  function Qh(t, e) {
    do {
      var n = rv(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Nt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Nt = t;
        return;
      }
      Nt = t = n;
    } while (t !== null);
    ve = 6, Nt = null;
  }
  function Kh(t, e, n, l, i, u, d, v, T, O) {
    var K = G.T, tt = rt.p;
    try {
      rt.p = 2, G.T = null, dv(t, e, n, l, tt, i, u, d, v, T, O);
    } finally {
      G.T = K, rt.p = tt;
    }
  }
  function dv(t, e, n, l, i, u, d, v) {
    do
      lr();
    while (Sl !== null);
    if (me & 6) throw Error(s(327));
    var T = t.finishedWork;
    if (l = t.finishedLanes, T === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, T === t.current) throw Error(s(177));
    t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
    var O = T.lanes | T.childLanes;
    if (O |= su, V0(t, l, O, u, d, v), t === re && (Nt = re = null, Lt = 0), !(T.subtreeFlags & 10256) && !(T.flags & 10256) || Bo || (Bo = true, pc = O, hc = n, gv(_t, function() {
      return lr(), null;
    })), n = (T.flags & 15990) !== 0, T.subtreeFlags & 15990 || n ? (n = G.T, G.T = null, u = rt.p, rt.p = 2, d = me, me |= 4, ev(t, T), Mh(T, t), jy(_c, t.containerInfo), Ko = !!zc, _c = zc = null, t.current = T, Ch(t, T.alternate, T), $n(), me = d, rt.p = u, G.T = n) : t.current = T, Bo ? (Bo = false, Sl = t, si = l) : Zh(t, O), O = t.pendingLanes, O === 0 && (Va = null), pt(T.stateNode), Wn(t), e !== null) for (i = t.onRecoverableError, T = 0; T < e.length; T++) O = e[T], i(O.value, { componentStack: O.stack });
    return si & 3 && lr(), O = t.pendingLanes, l & 4194218 && O & 42 ? t === mc ? ui++ : (ui = 0, mc = t) : ui = 0, ci(0), null;
  }
  function Zh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Pr(e)));
  }
  function lr() {
    if (Sl !== null) {
      var t = Sl, e = pc;
      pc = 0;
      var n = ld(si), l = G.T, i = rt.p;
      try {
        if (rt.p = 32 > n ? 32 : n, G.T = null, Sl === null) var u = false;
        else {
          n = hc, hc = null;
          var d = Sl, v = si;
          if (Sl = null, si = 0, me & 6) throw Error(s(331));
          var T = me;
          if (me |= 4, Dh(d.current), zh(d, d.current, v, n), me = T, ci(0, false), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(te, d);
          } catch {
          }
          u = true;
        }
        return u;
      } finally {
        rt.p = i, G.T = l, Zh(t, e);
      }
    }
    return false;
  }
  function Fh(t, e, n) {
    e = Cn(n, e), e = Uu(t.stateNode, e, 2), t = Ha(t, e, 2), t !== null && (Rr(t, 2), Wn(t));
  }
  function ee(t, e, n) {
    if (t.tag === 3) Fh(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Fh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Va === null || !Va.has(l))) {
          t = Cn(n, t), n = Ip(2), l = Ha(e, n, 2), l !== null && (th(n, l, e, t), Rr(l, 2), Wn(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function Sc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new ov();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (uc = true, i.add(n), t = pv.bind(null, t, e, n), e.then(t, t));
  }
  function pv(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, re === t && (Lt & n) === n && (ve === 4 || ve === 3 && (Lt & 62914560) === Lt && 300 > Ue() - dc ? !(me & 2) && nr(t, 0) : cc |= n, er === Lt && (er = 0)), Wn(t);
  }
  function Wh(t, e) {
    e === 0 && (e = ed()), t = za(t, e), t !== null && (Rr(t, e), Wn(t));
  }
  function hv(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Wh(t, n);
  }
  function mv(t, e) {
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
    l !== null && l.delete(e), Wh(t, n);
  }
  function gv(t, e) {
    return je(t, e);
  }
  var Uo = null, rr = null, xc = false, Ho = false, Tc = false, xl = 0;
  function Wn(t) {
    t !== rr && t.next === null && (rr === null ? Uo = rr = t : rr = rr.next = t), Ho = true, xc || (xc = true, vv(yv));
  }
  function ci(t, e) {
    if (!Tc && Ho) {
      Tc = true;
      do
        for (var n = false, l = Uo; l !== null; ) {
          if (t !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var d = l.suspendedLanes, v = l.pingedLanes;
              u = (1 << 31 - wt(42 | t) + 1) - 1, u &= i & ~(d & ~v), u = u & 201326677 ? u & 201326677 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, tm(l, u));
          } else u = Lt, u = Sn(l, l === re ? u : 0), !(u & 3) || Pn(l, u) || (n = true, tm(l, u));
          l = l.next;
        }
      while (n);
      Tc = false;
    }
  }
  function yv() {
    Ho = xc = false;
    var t = 0;
    xl !== 0 && (Av() && (t = xl), xl = 0);
    for (var e = Ue(), n = null, l = Uo; l !== null; ) {
      var i = l.next, u = Jh(l, e);
      u === 0 ? (l.next = null, n === null ? Uo = i : n.next = i, i === null && (rr = n)) : (n = l, (t !== 0 || u & 3) && (Ho = true)), l = i;
    }
    ci(t);
  }
  function Jh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - wt(u), v = 1 << d, T = i[d];
      T === -1 ? (!(v & n) || v & l) && (i[d] = qn(v, e)) : T <= e && (t.expiredLanes |= v), u &= ~v;
    }
    if (e = re, n = Lt, n = Sn(t, t === e ? n : 0), l = t.callbackNode, n === 0 || t === e && ie === 2 || t.cancelPendingCommit !== null) return l !== null && l !== null && en(l), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Pn(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && en(l), ld(n)) {
        case 2:
        case 8:
          n = Mt;
          break;
        case 32:
          n = _t;
          break;
        case 268435456:
          n = Ot;
          break;
        default:
          n = _t;
      }
      return l = Ih.bind(null, t), n = je(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && en(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ih(t, e) {
    var n = t.callbackNode;
    if (lr() && t.callbackNode !== n) return null;
    var l = Lt;
    return l = Sn(t, t === re ? l : 0), l === 0 ? null : ($h(t, l, e), Jh(t, Ue()), t.callbackNode != null && t.callbackNode === n ? Ih.bind(null, t) : null);
  }
  function tm(t, e) {
    if (lr()) return null;
    $h(t, e, true);
  }
  function vv(t) {
    Mv(function() {
      me & 6 ? je(ut, t) : t();
    });
  }
  function Ec() {
    return xl === 0 && (xl = td()), xl;
  }
  function em(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Wi("" + t);
  }
  function nm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function bv(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var u = em((i[an] || null).action), d = l.submitter;
      d && (e = (e = d[an] || null) ? em(e.formAction) : d.getAttribute("formAction"), e !== null && (u = e, d = null));
      var v = new eo("action", "action", null, l, i);
      t.push({ event: v, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (xl !== 0) {
            var T = d ? nm(i, d) : new FormData(i);
            ku(n, { pending: true, data: T, method: i.method, action: u }, null, T);
          }
        } else typeof u == "function" && (v.preventDefault(), T = d ? nm(i, d) : new FormData(i), ku(n, { pending: true, data: T, method: i.method, action: u }, u, T));
      }, currentTarget: i }] });
    }
  }
  for (var Cc = 0; Cc < Kd.length; Cc++) {
    var wc = Kd[Cc], Sv = wc.toLowerCase(), xv = wc[0].toUpperCase() + wc.slice(1);
    Gn(Sv, "on" + xv);
  }
  Gn(Yd, "onAnimationEnd"), Gn(Vd, "onAnimationIteration"), Gn(Xd, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(Hy, "onTransitionRun"), Gn(Ly, "onTransitionStart"), Gn($y, "onTransitionCancel"), Gn(Pd, "onTransitionEnd"), kl("onMouseEnter", ["mouseout", "mouseover"]), kl("onMouseLeave", ["mouseout", "mouseover"]), kl("onPointerEnter", ["pointerout", "pointerover"]), kl("onPointerLeave", ["pointerout", "pointerover"]), nl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), nl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), nl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), nl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), nl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));
  function am(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e) for (var d = l.length - 1; 0 <= d; d--) {
          var v = l[d], T = v.instance, O = v.currentTarget;
          if (v = v.listener, T !== u && i.isPropagationStopped()) break t;
          u = v, i.currentTarget = O;
          try {
            u(i);
          } catch (K) {
            Co(K);
          }
          i.currentTarget = null, u = T;
        }
        else for (d = 0; d < l.length; d++) {
          if (v = l[d], T = v.instance, O = v.currentTarget, v = v.listener, T !== u && i.isPropagationStopped()) break t;
          u = v, i.currentTarget = O;
          try {
            u(i);
          } catch (K) {
            Co(K);
          }
          i.currentTarget = null, u = T;
        }
      }
    }
  }
  function Ut(t, e) {
    var n = e[qs];
    n === void 0 && (n = e[qs] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (lm(e, t, 2, false), n.add(l));
  }
  function Ac(t, e, n) {
    var l = 0;
    e && (l |= 4), lm(n, t, l, e);
  }
  var Lo = "_reactListening" + Math.random().toString(36).slice(2);
  function Rc(t) {
    if (!t[Lo]) {
      t[Lo] = true, od.forEach(function(n) {
        n !== "selectionchange" && (Tv.has(n) || Ac(n, false, t), Ac(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Lo] || (e[Lo] = true, Ac("selectionchange", false, e));
    }
  }
  function lm(t, e, n, l) {
    switch (Rm(e)) {
      case 2:
        var i = Kv;
        break;
      case 8:
        i = Zv;
        break;
      default:
        i = $c;
    }
    n = i.bind(null, e, n, t), i = void 0, !Zs || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), l ? i !== void 0 ? t.addEventListener(e, n, { capture: true, passive: i }) : t.addEventListener(e, n, true) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, false);
  }
  function Mc(t, e, n, l, i) {
    var u = l;
    if (!(e & 1) && !(e & 2) && l !== null) t: for (; ; ) {
      if (l === null) return;
      var d = l.tag;
      if (d === 3 || d === 4) {
        var v = l.stateNode.containerInfo;
        if (v === i || v.nodeType === 8 && v.parentNode === i) break;
        if (d === 4) for (d = l.return; d !== null; ) {
          var T = d.tag;
          if ((T === 3 || T === 4) && (T = d.stateNode.containerInfo, T === i || T.nodeType === 8 && T.parentNode === i)) return;
          d = d.return;
        }
        for (; v !== null; ) {
          if (d = el(v), d === null) return;
          if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
            l = u = d;
            continue t;
          }
          v = v.parentNode;
        }
      }
      l = l.return;
    }
    bd(function() {
      var O = u, K = Qs(n), tt = [];
      t: {
        var $ = Qd.get(t);
        if ($ !== void 0) {
          var Q = eo, mt = t;
          switch (t) {
            case "keypress":
              if (Ii(n) === 0) break t;
            case "keydown":
            case "keyup":
              Q = my;
              break;
            case "focusin":
              mt = "focus", Q = Is;
              break;
            case "focusout":
              mt = "blur", Q = Is;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Is;
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
              Q = Td;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = ay;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = vy;
              break;
            case Yd:
            case Vd:
            case Xd:
              Q = iy;
              break;
            case Pd:
              Q = Sy;
              break;
            case "scroll":
            case "scrollend":
              Q = ey;
              break;
            case "wheel":
              Q = Ty;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = sy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Cd;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Cy;
          }
          var At = (e & 4) !== 0, be = !At && (t === "scroll" || t === "scrollend"), k = At ? $ !== null ? $ + "Capture" : null : $;
          At = [];
          for (var M = O, j; M !== null; ) {
            var F = M;
            if (j = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || j === null || k === null || (F = zr(M, k), F != null && At.push(di(M, F, j))), be) break;
            M = M.return;
          }
          0 < At.length && ($ = new Q($, mt, null, n, K), tt.push({ event: $, listeners: At }));
        }
      }
      if (!(e & 7)) {
        t: {
          if ($ = t === "mouseover" || t === "pointerover", Q = t === "mouseout" || t === "pointerout", $ && n !== Ps && (mt = n.relatedTarget || n.fromElement) && (el(mt) || mt[Ol])) break t;
          if ((Q || $) && ($ = K.window === K ? K : ($ = K.ownerDocument) ? $.defaultView || $.parentWindow : window, Q ? (mt = n.relatedTarget || n.toElement, Q = O, mt = mt ? el(mt) : null, mt !== null && (be = W(mt), At = mt.tag, mt !== be || At !== 5 && At !== 27 && At !== 6) && (mt = null)) : (Q = null, mt = O), Q !== mt)) {
            if (At = Td, F = "onMouseLeave", k = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (At = Cd, F = "onPointerLeave", k = "onPointerEnter", M = "pointer"), be = Q == null ? $ : Or(Q), j = mt == null ? $ : Or(mt), $ = new At(F, M + "leave", Q, n, K), $.target = be, $.relatedTarget = j, F = null, el(K) === O && (At = new At(k, M + "enter", mt, n, K), At.target = j, At.relatedTarget = be, F = At), be = F, Q && mt) e: {
              for (At = Q, k = mt, M = 0, j = At; j; j = ir(j)) M++;
              for (j = 0, F = k; F; F = ir(F)) j++;
              for (; 0 < M - j; ) At = ir(At), M--;
              for (; 0 < j - M; ) k = ir(k), j--;
              for (; M--; ) {
                if (At === k || k !== null && At === k.alternate) break e;
                At = ir(At), k = ir(k);
              }
              At = null;
            }
            else At = null;
            Q !== null && rm(tt, $, Q, At, false), mt !== null && be !== null && rm(tt, be, mt, At, true);
          }
        }
        t: {
          if ($ = O ? Or(O) : window, Q = $.nodeName && $.nodeName.toLowerCase(), Q === "select" || Q === "input" && $.type === "file") var ft = kd;
          else if (zd($)) if (Dd) ft = By;
          else {
            ft = ky;
            var Bt = _y;
          }
          else Q = $.nodeName, !Q || Q.toLowerCase() !== "input" || $.type !== "checkbox" && $.type !== "radio" ? O && Xs(O.elementType) && (ft = kd) : ft = Dy;
          if (ft && (ft = ft(t, O))) {
            _d(tt, ft, n, K);
            break t;
          }
          Bt && Bt(t, $, O), t === "focusout" && O && $.type === "number" && O.memoizedProps.value != null && Vs($, "number", $.value);
        }
        switch (Bt = O ? Or(O) : window, t) {
          case "focusin":
            (zd(Bt) || Bt.contentEditable === "true") && (Hl = Bt, ru = O, Hr = null);
            break;
          case "focusout":
            Hr = ru = Hl = null;
            break;
          case "mousedown":
            iu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            iu = false, qd(tt, n, K);
            break;
          case "selectionchange":
            if (Uy) break;
          case "keydown":
          case "keyup":
            qd(tt, n, K);
        }
        var gt;
        if (eu) t: {
          switch (t) {
            case "compositionstart":
              var xt = "onCompositionStart";
              break t;
            case "compositionend":
              xt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              xt = "onCompositionUpdate";
              break t;
          }
          xt = void 0;
        }
        else Ul ? Md(t, n) && (xt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (xt = "onCompositionStart");
        xt && (wd && n.locale !== "ko" && (Ul || xt !== "onCompositionStart" ? xt === "onCompositionEnd" && Ul && (gt = Sd()) : (Oa = K, Fs = "value" in Oa ? Oa.value : Oa.textContent, Ul = true)), Bt = $o(O, xt), 0 < Bt.length && (xt = new Ed(xt, t, null, n, K), tt.push({ event: xt, listeners: Bt }), gt ? xt.data = gt : (gt = Od(n), gt !== null && (xt.data = gt)))), (gt = Ay ? Ry(t, n) : My(t, n)) && (xt = $o(O, "onBeforeInput"), 0 < xt.length && (Bt = new Ed("onBeforeInput", "beforeinput", null, n, K), tt.push({ event: Bt, listeners: xt }), Bt.data = gt)), bv(tt, t, O, n, K);
      }
      am(tt, e);
    });
  }
  function di(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function $o(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, u = i.stateNode;
      i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = zr(t, n), i != null && l.unshift(di(t, i, u)), i = zr(t, e), i != null && l.push(di(t, i, u))), t = t.return;
    }
    return l;
  }
  function ir(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function rm(t, e, n, l, i) {
    for (var u = e._reactName, d = []; n !== null && n !== l; ) {
      var v = n, T = v.alternate, O = v.stateNode;
      if (v = v.tag, T !== null && T === l) break;
      v !== 5 && v !== 26 && v !== 27 || O === null || (T = O, i ? (O = zr(n, u), O != null && d.unshift(di(n, O, T))) : i || (O = zr(n, u), O != null && d.push(di(n, O, T)))), n = n.return;
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var Ev = /\r\n?/g, Cv = /\u0000|\uFFFD/g;
  function im(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ev, `
`).replace(Cv, "");
  }
  function om(t, e) {
    return e = im(e), im(t) === e;
  }
  function qo() {
  }
  function Wt(t, e, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Bl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Bl(t, "" + l);
        break;
      case "className":
        Ki(t, "class", l);
        break;
      case "tabIndex":
        Ki(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ki(t, n, l);
        break;
      case "style":
        yd(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Ki(t, "data", l);
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
        l = Wi("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (e !== "input" && Wt(t, e, "name", i.name, i, null), Wt(t, e, "formEncType", i.formEncType, i, null), Wt(t, e, "formMethod", i.formMethod, i, null), Wt(t, e, "formTarget", i.formTarget, i, null)) : (Wt(t, e, "encType", i.encType, i, null), Wt(t, e, "method", i.method, i, null), Wt(t, e, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Wi("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = qo);
        break;
      case "onScroll":
        l != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ut("scrollend", t);
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
        n = Wi("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        Ut("beforetoggle", t), Ut("toggle", t), Qi(t, "popover", l);
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
        Qi(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = I0.get(n) || n, Qi(t, n, l));
    }
  }
  function Oc(t, e, n, l, i, u) {
    switch (n) {
      case "style":
        yd(t, l, u);
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
        typeof l == "string" ? Bl(t, l) : (typeof l == "number" || typeof l == "bigint") && Bl(t, "" + l);
        break;
      case "onScroll":
        l != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ut("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = qo);
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
        if (!sd.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), u = t[an] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof l == "function")) {
            typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, i);
            break t;
          }
          n in t ? t[n] = l : l === true ? t.setAttribute(n, "") : Qi(t, n, l);
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
        Ut("error", t), Ut("load", t);
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
              Wt(t, e, u, d, n, null);
          }
        }
        i && Wt(t, e, "srcSet", n.srcSet, n, null), l && Wt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Ut("invalid", t);
        var v = u = d = i = null, T = null, O = null;
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
              v = K;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (K != null) throw Error(s(137, e));
              break;
            default:
              Wt(t, e, l, K, n, null);
          }
        }
        pd(t, u, v, T, O, d, i, false), Zi(t);
        return;
      case "select":
        Ut("invalid", t), l = d = u = null;
        for (i in n) if (n.hasOwnProperty(i) && (v = n[i], v != null)) switch (i) {
          case "value":
            u = v;
            break;
          case "defaultValue":
            d = v;
            break;
          case "multiple":
            l = v;
          default:
            Wt(t, e, i, v, n, null);
        }
        e = u, n = d, t.multiple = !!l, e != null ? Dl(t, !!l, e, false) : n != null && Dl(t, !!l, n, true);
        return;
      case "textarea":
        Ut("invalid", t), u = i = l = null;
        for (d in n) if (n.hasOwnProperty(d) && (v = n[d], v != null)) switch (d) {
          case "value":
            l = v;
            break;
          case "defaultValue":
            i = v;
            break;
          case "children":
            u = v;
            break;
          case "dangerouslySetInnerHTML":
            if (v != null) throw Error(s(91));
            break;
          default:
            Wt(t, e, d, v, n, null);
        }
        md(t, l, i, u), Zi(t);
        return;
      case "option":
        for (T in n) if (n.hasOwnProperty(T) && (l = n[T], l != null)) switch (T) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            Wt(t, e, T, l, n, null);
        }
        return;
      case "dialog":
        Ut("cancel", t), Ut("close", t);
        break;
      case "iframe":
      case "object":
        Ut("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < fi.length; l++) Ut(fi[l], t);
        break;
      case "image":
        Ut("error", t), Ut("load", t);
        break;
      case "details":
        Ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ut("error", t), Ut("load", t);
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
            Wt(t, e, O, l, n, null);
        }
        return;
      default:
        if (Xs(e)) {
          for (K in n) n.hasOwnProperty(K) && (l = n[K], l !== void 0 && Oc(t, e, K, l, n, void 0));
          return;
        }
    }
    for (v in n) n.hasOwnProperty(v) && (l = n[v], l != null && Wt(t, e, v, l, n, null));
  }
  function wv(t, e, n, l) {
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
        var i = null, u = null, d = null, v = null, T = null, O = null, K = null;
        for (Q in n) {
          var tt = n[Q];
          if (n.hasOwnProperty(Q) && tt != null) switch (Q) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              T = tt;
            default:
              l.hasOwnProperty(Q) || Wt(t, e, Q, null, l, tt);
          }
        }
        for (var $ in l) {
          var Q = l[$];
          if (tt = n[$], l.hasOwnProperty($) && (Q != null || tt != null)) switch ($) {
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
              v = Q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Q != null) throw Error(s(137, e));
              break;
            default:
              Q !== tt && Wt(t, e, $, Q, l, tt);
          }
        }
        Ys(t, d, v, T, O, K, u, i);
        return;
      case "select":
        Q = d = v = $ = null;
        for (u in n) if (T = n[u], n.hasOwnProperty(u) && T != null) switch (u) {
          case "value":
            break;
          case "multiple":
            Q = T;
          default:
            l.hasOwnProperty(u) || Wt(t, e, u, null, l, T);
        }
        for (i in l) if (u = l[i], T = n[i], l.hasOwnProperty(i) && (u != null || T != null)) switch (i) {
          case "value":
            $ = u;
            break;
          case "defaultValue":
            v = u;
            break;
          case "multiple":
            d = u;
          default:
            u !== T && Wt(t, e, i, u, l, T);
        }
        e = v, n = d, l = Q, $ != null ? Dl(t, !!n, $, false) : !!l != !!n && (e != null ? Dl(t, !!n, e, true) : Dl(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        Q = $ = null;
        for (v in n) if (i = n[v], n.hasOwnProperty(v) && i != null && !l.hasOwnProperty(v)) switch (v) {
          case "value":
            break;
          case "children":
            break;
          default:
            Wt(t, e, v, null, l, i);
        }
        for (d in l) if (i = l[d], u = n[d], l.hasOwnProperty(d) && (i != null || u != null)) switch (d) {
          case "value":
            $ = i;
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
            i !== u && Wt(t, e, d, i, l, u);
        }
        hd(t, $, Q);
        return;
      case "option":
        for (var mt in n) if ($ = n[mt], n.hasOwnProperty(mt) && $ != null && !l.hasOwnProperty(mt)) switch (mt) {
          case "selected":
            t.selected = false;
            break;
          default:
            Wt(t, e, mt, null, l, $);
        }
        for (T in l) if ($ = l[T], Q = n[T], l.hasOwnProperty(T) && $ !== Q && ($ != null || Q != null)) switch (T) {
          case "selected":
            t.selected = $ && typeof $ != "function" && typeof $ != "symbol";
            break;
          default:
            Wt(t, e, T, $, l, Q);
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
        for (var At in n) $ = n[At], n.hasOwnProperty(At) && $ != null && !l.hasOwnProperty(At) && Wt(t, e, At, null, l, $);
        for (O in l) if ($ = l[O], Q = n[O], l.hasOwnProperty(O) && $ !== Q && ($ != null || Q != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            if ($ != null) throw Error(s(137, e));
            break;
          default:
            Wt(t, e, O, $, l, Q);
        }
        return;
      default:
        if (Xs(e)) {
          for (var be in n) $ = n[be], n.hasOwnProperty(be) && $ !== void 0 && !l.hasOwnProperty(be) && Oc(t, e, be, void 0, l, $);
          for (K in l) $ = l[K], Q = n[K], !l.hasOwnProperty(K) || $ === Q || $ === void 0 && Q === void 0 || Oc(t, e, K, $, l, Q);
          return;
        }
    }
    for (var k in n) $ = n[k], n.hasOwnProperty(k) && $ != null && !l.hasOwnProperty(k) && Wt(t, e, k, null, l, $);
    for (tt in l) $ = l[tt], Q = n[tt], !l.hasOwnProperty(tt) || $ === Q || $ == null && Q == null || Wt(t, e, tt, $, l, Q);
  }
  var zc = null, _c = null;
  function Go(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function um(t, e) {
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
  function kc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Dc = null;
  function Av() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Dc ? false : (Dc = t, true) : (Dc = null, false);
  }
  var cm = typeof setTimeout == "function" ? setTimeout : void 0, Rv = typeof clearTimeout == "function" ? clearTimeout : void 0, fm = typeof Promise == "function" ? Promise : void 0, Mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof fm < "u" ? function(t) {
    return fm.resolve(null).then(t).catch(Ov);
  } : cm;
  function Ov(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Bc(t, e) {
    var n = e, l = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (l === 0) {
          t.removeChild(i), Si(e);
          return;
        }
        l--;
      } else n !== "$" && n !== "$?" && n !== "$!" || l++;
      n = i;
    } while (n);
    Si(e);
  }
  function Nc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nc(n), Gs(n);
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
  function zv(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Mr]) switch (e) {
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
  function _v(t, e, n) {
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
  function dm(t) {
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
  function pm(t, e, n) {
    switch (e = Go(n), t) {
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
  var kn = /* @__PURE__ */ new Map(), hm = /* @__PURE__ */ new Set();
  function Yo(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var Ta = rt.d;
  rt.d = { f: kv, r: Dv, D: Bv, C: Nv, L: jv, m: Uv, X: Lv, S: Hv, M: $v };
  function kv() {
    var t = Ta.f(), e = No();
    return t || e;
  }
  function Dv(t) {
    var e = zl(t);
    e !== null && e.tag === 5 && e.type === "form" ? qp(e) : Ta.r(t);
  }
  var or = typeof document > "u" ? null : document;
  function mm(t, e, n) {
    var l = or;
    if (l && typeof e == "string" && e) {
      var i = Tn(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), hm.has(i) || (hm.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), $e(e, "link", t), ke(e), l.head.appendChild(e)));
    }
  }
  function Bv(t) {
    Ta.D(t), mm("dns-prefetch", t, null);
  }
  function Nv(t, e) {
    Ta.C(t, e), mm("preconnect", t, e);
  }
  function jv(t, e, n) {
    Ta.L(t, e, n);
    var l = or;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + Tn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Tn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Tn(n.imageSizes) + '"]')) : i += '[href="' + Tn(t) + '"]';
      var u = i;
      switch (e) {
        case "style":
          u = sr(t);
          break;
        case "script":
          u = ur(t);
      }
      kn.has(u) || (t = y({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), kn.set(u, t), l.querySelector(i) !== null || e === "style" && l.querySelector(pi(u)) || e === "script" && l.querySelector(hi(u)) || (e = l.createElement("link"), $e(e, "link", t), ke(e), l.head.appendChild(e)));
    }
  }
  function Uv(t, e) {
    Ta.m(t, e);
    var n = or;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + Tn(l) + '"][href="' + Tn(t) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ur(t);
      }
      if (!kn.has(u) && (t = y({ rel: "modulepreload", href: t }, e), kn.set(u, t), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(hi(u))) return;
        }
        l = n.createElement("link"), $e(l, "link", t), ke(l), n.head.appendChild(l);
      }
    }
  }
  function Hv(t, e, n) {
    Ta.S(t, e, n);
    var l = or;
    if (l && t) {
      var i = _l(l).hoistableStyles, u = sr(t);
      e = e || "default";
      var d = i.get(u);
      if (!d) {
        var v = { loading: 0, preload: null };
        if (d = l.querySelector(pi(u))) v.loading = 5;
        else {
          t = y({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = kn.get(u)) && jc(t, n);
          var T = d = l.createElement("link");
          ke(T), $e(T, "link", t), T._p = new Promise(function(O, K) {
            T.onload = O, T.onerror = K;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Vo(d, e, l);
        }
        d = { type: "stylesheet", instance: d, count: 1, state: v }, i.set(u, d);
      }
    }
  }
  function Lv(t, e) {
    Ta.X(t, e);
    var n = or;
    if (n && t) {
      var l = _l(n).hoistableScripts, i = ur(t), u = l.get(i);
      u || (u = n.querySelector(hi(i)), u || (t = y({ src: t, async: true }, e), (e = kn.get(i)) && Uc(t, e), u = n.createElement("script"), ke(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function $v(t, e) {
    Ta.M(t, e);
    var n = or;
    if (n && t) {
      var l = _l(n).hoistableScripts, i = ur(t), u = l.get(i);
      u || (u = n.querySelector(hi(i)), u || (t = y({ src: t, async: true, type: "module" }, e), (e = kn.get(i)) && Uc(t, e), u = n.createElement("script"), ke(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function gm(t, e, n, l) {
    var i = (i = $t.current) ? Yo(i) : null;
    if (!i) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = sr(n.href), n = _l(i).hoistableStyles, l = n.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = sr(n.href);
          var u = _l(i).hoistableStyles, d = u.get(t);
          if (d || (i = i.ownerDocument || i, d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(t, d), (u = i.querySelector(pi(t))) && !u._p && (d.instance = u, d.state.loading = 5), kn.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, kn.set(t, n), u || qv(i, t, n, d.state))), e && l === null) throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ur(n), n = _l(i).hoistableScripts, l = n.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function sr(t) {
    return 'href="' + Tn(t) + '"';
  }
  function pi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ym(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qv(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), $e(e, "link", n), ke(e), t.head.appendChild(e));
  }
  function ur(t) {
    return '[src="' + Tn(t) + '"]';
  }
  function hi(t) {
    return "script[async]" + t;
  }
  function vm(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + Tn(n.href) + '"]');
        if (l) return e.instance = l, ke(l), l;
        var i = y({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return l = (t.ownerDocument || t).createElement("style"), ke(l), $e(l, "style", i), Vo(l, n.precedence, t), e.instance = l;
      case "stylesheet":
        i = sr(n.href);
        var u = t.querySelector(pi(i));
        if (u) return e.state.loading |= 4, e.instance = u, ke(u), u;
        l = ym(n), (i = kn.get(i)) && jc(l, i), u = (t.ownerDocument || t).createElement("link"), ke(u);
        var d = u;
        return d._p = new Promise(function(v, T) {
          d.onload = v, d.onerror = T;
        }), $e(u, "link", l), e.state.loading |= 4, Vo(u, n.precedence, t), e.instance = u;
      case "script":
        return u = ur(n.src), (i = t.querySelector(hi(u))) ? (e.instance = i, ke(i), i) : (l = n, (i = kn.get(u)) && (l = y({}, n), Uc(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), ke(i), $e(i, "link", l), t.head.appendChild(i), e.instance = i);
      case "void":
        return null;
      default:
        throw Error(s(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (l = e.instance, e.state.loading |= 4, Vo(l, n.precedence, t));
    return e.instance;
  }
  function Vo(t, e, n) {
    for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = l.length ? l[l.length - 1] : null, u = i, d = 0; d < l.length; d++) {
      var v = l[d];
      if (v.dataset.precedence === e) u = v;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function jc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Uc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Xo = null;
  function bm(t, e, n) {
    if (Xo === null) {
      var l = /* @__PURE__ */ new Map(), i = Xo = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else i = Xo, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Mr] || u[Xe] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(e) || "";
        d = t + d;
        var v = l.get(d);
        v ? v.push(u) : l.set(d, [u]);
      }
    }
    return l;
  }
  function Sm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function Gv(t, e, n) {
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
  function xm(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var mi = null;
  function Yv() {
  }
  function Vv(t, e, n) {
    if (mi === null) throw Error(s(475));
    var l = mi;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && !(e.state.loading & 4)) {
      if (e.instance === null) {
        var i = sr(n.href), u = t.querySelector(pi(i));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Po.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, ke(u);
          return;
        }
        u = t.ownerDocument || t, n = ym(n), (i = kn.get(i)) && jc(n, i), u = u.createElement("link"), ke(u);
        var d = u;
        d._p = new Promise(function(v, T) {
          d.onload = v, d.onerror = T;
        }), $e(u, "link", n), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (l.count++, e = Po.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Xv() {
    if (mi === null) throw Error(s(475));
    var t = mi;
    return t.stylesheets && t.count === 0 && Hc(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Hc(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Po() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Hc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Qo = null;
  function Hc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Qo = /* @__PURE__ */ new Map(), e.forEach(Pv, t), Qo = null, Po.call(t));
  }
  function Pv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Qo.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Qo.set(t, n);
        for (var i = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < i.length; u++) {
          var d = i[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), l = d);
        }
        l && n.set(null, l);
      }
      i = e.instance, d = i.getAttribute("data-precedence"), u = n.get(d) || l, u === l && n.set(null, i), n.set(d, i), this.count++, l = Po.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var gi = { $$typeof: _, Provider: null, Consumer: null, _currentValue: St, _currentValue2: St, _threadCount: 0 };
  function Qv(t, e, n, l, i, u, d, v) {
    this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $s(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $s(0), this.hiddenUpdates = $s(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(t, e, n, l, i, u, d, v, T, O, K, tt) {
    return t = new Qv(t, e, n, d, v, T, O, tt), e = 1, u === true && (e |= 24), u = zn(3, null, null, e), t.current = u, u.stateNode = t, e = gu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = { element: l, isDehydrated: n, cache: e }, Fu(u), t;
  }
  function Em(t) {
    return t ? (t = ql, t) : ql;
  }
  function Cm(t, e, n, l, i, u) {
    i = Em(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ua(e), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = Ha(t, l, e), n !== null && (Fe(n, t, e), Ir(n, t, e));
  }
  function wm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Lc(t, e) {
    wm(t, e), (t = t.alternate) && wm(t, e);
  }
  function Am(t) {
    if (t.tag === 13) {
      var e = za(t, 67108864);
      e !== null && Fe(e, t, 67108864), Lc(t, 67108864);
    }
  }
  var Ko = true;
  function Kv(t, e, n, l) {
    var i = G.T;
    G.T = null;
    var u = rt.p;
    try {
      rt.p = 2, $c(t, e, n, l);
    } finally {
      rt.p = u, G.T = i;
    }
  }
  function Zv(t, e, n, l) {
    var i = G.T;
    G.T = null;
    var u = rt.p;
    try {
      rt.p = 8, $c(t, e, n, l);
    } finally {
      rt.p = u, G.T = i;
    }
  }
  function $c(t, e, n, l) {
    if (Ko) {
      var i = qc(l);
      if (i === null) Mc(t, e, l, Zo, n), Mm(t, l);
      else if (Wv(i, t, e, n, l)) l.stopPropagation();
      else if (Mm(t, l), e & 4 && -1 < Fv.indexOf(t)) {
        for (; i !== null; ) {
          var u = zl(i);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var d = Zt(u.pendingLanes);
                if (d !== 0) {
                  var v = u;
                  for (v.pendingLanes |= 2, v.entangledLanes |= 2; d; ) {
                    var T = 1 << 31 - wt(d);
                    v.entanglements[1] |= T, d &= ~T;
                  }
                  Wn(u), !(me & 6) && (ko = Ue() + 500, ci(0));
                }
              }
              break;
            case 13:
              v = za(u, 2), v !== null && Fe(v, u, 2), No(), Lc(u, 2);
          }
          if (u = qc(l), u === null && Mc(t, e, l, Zo, n), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else Mc(t, e, l, null, n);
    }
  }
  function qc(t) {
    return t = Qs(t), Gc(t);
  }
  var Zo = null;
  function Gc(t) {
    if (Zo = null, t = el(t), t !== null) {
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
    return Zo = t, null;
  }
  function Rm(t) {
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
        switch (ct()) {
          case ut:
            return 2;
          case Mt:
            return 8;
          case _t:
          case kt:
            return 32;
          case Ot:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yc = false, Xa = null, Pa = null, Qa = null, yi = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), Ka = [], Fv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Mm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xa = null;
        break;
      case "dragenter":
      case "dragleave":
        Pa = null;
        break;
      case "mouseover":
      case "mouseout":
        Qa = null;
        break;
      case "pointerover":
      case "pointerout":
        yi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(e.pointerId);
    }
  }
  function bi(t, e, n, l, i, u) {
    return t === null || t.nativeEvent !== u ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: u, targetContainers: [i] }, e !== null && (e = zl(e), e !== null && Am(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Wv(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return Xa = bi(Xa, t, e, n, l, i), true;
      case "dragenter":
        return Pa = bi(Pa, t, e, n, l, i), true;
      case "mouseover":
        return Qa = bi(Qa, t, e, n, l, i), true;
      case "pointerover":
        var u = i.pointerId;
        return yi.set(u, bi(yi.get(u) || null, t, e, n, l, i)), true;
      case "gotpointercapture":
        return u = i.pointerId, vi.set(u, bi(vi.get(u) || null, t, e, n, l, i)), true;
    }
    return false;
  }
  function Om(t) {
    var e = el(t.target);
    if (e !== null) {
      var n = W(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = et(n), e !== null) {
            t.blockedOn = e, X0(t.priority, function() {
              if (n.tag === 13) {
                var l = pn(), i = za(n, l);
                i !== null && Fe(i, n, l), Lc(n, l);
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
  function Fo(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = qc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        Ps = l, n.target.dispatchEvent(l), Ps = null;
      } else return e = zl(n), e !== null && Am(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function zm(t, e, n) {
    Fo(t) && n.delete(e);
  }
  function Jv() {
    Yc = false, Xa !== null && Fo(Xa) && (Xa = null), Pa !== null && Fo(Pa) && (Pa = null), Qa !== null && Fo(Qa) && (Qa = null), yi.forEach(zm), vi.forEach(zm);
  }
  function Wo(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Yc || (Yc = true, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, Jv)));
  }
  var Jo = null;
  function _m(t) {
    Jo !== t && (Jo = t, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, function() {
      Jo === t && (Jo = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], l = t[e + 1], i = t[e + 2];
        if (typeof l != "function") {
          if (Gc(l || n) === null) continue;
          break;
        }
        var u = zl(n);
        u !== null && (t.splice(e, 3), e -= 3, ku(u, { pending: true, data: i, method: n.method, action: l }, l, i));
      }
    }));
  }
  function Si(t) {
    function e(T) {
      return Wo(T, t);
    }
    Xa !== null && Wo(Xa, t), Pa !== null && Wo(Pa, t), Qa !== null && Wo(Qa, t), yi.forEach(e), vi.forEach(e);
    for (var n = 0; n < Ka.length; n++) {
      var l = Ka[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ka.length && (n = Ka[0], n.blockedOn === null); ) Om(n), n.blockedOn === null && Ka.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (l = 0; l < n.length; l += 3) {
      var i = n[l], u = n[l + 1], d = i[an] || null;
      if (typeof u == "function") d || _m(n);
      else if (d) {
        var v = null;
        if (u && u.hasAttribute("formAction")) {
          if (i = u, d = u[an] || null) v = d.formAction;
          else if (Gc(i) !== null) continue;
        } else v = d.action;
        typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3), l -= 3), _m(n);
      }
    }
  }
  function Vc(t) {
    this._internalRoot = t;
  }
  Io.prototype.render = Vc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var n = e.current, l = pn();
    Cm(n, l, t, e, null, null);
  }, Io.prototype.unmount = Vc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t.tag === 0 && lr(), Cm(t.current, 2, null, t, null, null), No(), e[Ol] = null;
    }
  };
  function Io(t) {
    this._internalRoot = t;
  }
  Io.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = rd();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ka.length && e !== 0 && e < Ka[n].priority; n++) ;
      Ka.splice(n, 0, t), n === 0 && Om(t);
    }
  };
  var km = r.version;
  if (km !== "19.0.0") throw Error(s(527, km, "19.0.0"));
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = L(e), t = t !== null ? ot(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Iv = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: G, findFiberByHostInstance: el, reconcilerVersion: "19.0.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ts.isDisabled && ts.supportsFiber) try {
      te = ts.inject(Iv), Kt = ts;
    } catch {
    }
  }
  return Ti.createRoot = function(t, e) {
    if (!c(t)) throw Error(s(299));
    var n = false, l = "", i = Zp, u = Fp, d = Wp, v = null;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)), e = Tm(t, 1, false, null, null, n, l, i, u, d, v, null), t[Ol] = e.current, Rc(t.nodeType === 8 ? t.parentNode : t), new Vc(e);
  }, Ti.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(s(299));
    var l = false, i = "", u = Zp, d = Fp, v = Wp, T = null, O = null;
    return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks), n.formState !== void 0 && (O = n.formState)), e = Tm(t, 1, true, e, n ?? null, l, i, u, d, v, T, O), e.context = Em(null), n = e.current, l = pn(), i = Ua(l), i.callback = null, Ha(n, i, l), e.current.lanes = l, Rr(e, l), Wn(e), t[Ol] = e.current, Rc(t), new Io(e);
  }, Ti.version = "19.0.0", Ti;
}
var Gm;
function ub() {
  if (Gm) return Qc.exports;
  Gm = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Qc.exports = sb(), Qc.exports;
}
var cb = ub();
const Bi = { black: "#000", white: "#fff" }, cr = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, fr = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, dr = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, pr = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, hr = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, Ei = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, fb = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Rl(a3, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${a3}`);
  return r.forEach((s) => o.searchParams.append("args[]", s)), `Minified MUI error #${a3}; visit ${o} for the full message.`;
}
const Rs = "$$material";
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(a3) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var s in o) ({}).hasOwnProperty.call(o, s) && (a3[s] = o[s]);
    }
    return a3;
  }, vs.apply(null, arguments);
}
function db(a3) {
  if (a3.sheet) return a3.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === a3) return document.styleSheets[r];
}
function pb(a3) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a3.key), a3.nonce !== void 0 && r.setAttribute("nonce", a3.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var hb = function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pb(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = db(c);
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
}(), Ke = "-ms-", bs = "-moz-", Xt = "-webkit-", Vg = "comm", Rf = "rule", Mf = "decl", mb = "@import", Xg = "@keyframes", gb = "@layer", yb = Math.abs, Ms = String.fromCharCode, vb = Object.assign;
function bb(a3, r) {
  return qe(a3, 0) ^ 45 ? (((r << 2 ^ qe(a3, 0)) << 2 ^ qe(a3, 1)) << 2 ^ qe(a3, 2)) << 2 ^ qe(a3, 3) : 0;
}
function Pg(a3) {
  return a3.trim();
}
function Sb(a3, r) {
  return (a3 = r.exec(a3)) ? a3[0] : a3;
}
function Pt(a3, r, o) {
  return a3.replace(r, o);
}
function uf(a3, r) {
  return a3.indexOf(r);
}
function qe(a3, r) {
  return a3.charCodeAt(r) | 0;
}
function Ni(a3, r, o) {
  return a3.slice(r, o);
}
function In(a3) {
  return a3.length;
}
function Of(a3) {
  return a3.length;
}
function es(a3, r) {
  return r.push(a3), a3;
}
function xb(a3, r) {
  return a3.map(r).join("");
}
var Os = 1, xr = 1, Qg = 0, on = 0, Me = 0, wr = "";
function zs(a3, r, o, s, c, f, p) {
  return { value: a3, root: r, parent: o, type: s, props: c, children: f, line: Os, column: xr, length: p, return: "" };
}
function Ci(a3, r) {
  return vb(zs("", null, null, "", null, null, 0), a3, { length: -a3.length }, r);
}
function Tb() {
  return Me;
}
function Eb() {
  return Me = on > 0 ? qe(wr, --on) : 0, xr--, Me === 10 && (xr = 1, Os--), Me;
}
function gn() {
  return Me = on < Qg ? qe(wr, on++) : 0, xr++, Me === 10 && (xr = 1, Os++), Me;
}
function aa() {
  return qe(wr, on);
}
function ps() {
  return on;
}
function Li(a3, r) {
  return Ni(wr, a3, r);
}
function ji(a3) {
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
function Kg(a3) {
  return Os = xr = 1, Qg = In(wr = a3), on = 0, [];
}
function Zg(a3) {
  return wr = "", a3;
}
function hs(a3) {
  return Pg(Li(on - 1, cf(a3 === 91 ? a3 + 2 : a3 === 40 ? a3 + 1 : a3)));
}
function Cb(a3) {
  for (; (Me = aa()) && Me < 33; ) gn();
  return ji(a3) > 2 || ji(Me) > 3 ? "" : " ";
}
function wb(a3, r) {
  for (; --r && gn() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); ) ;
  return Li(a3, ps() + (r < 6 && aa() == 32 && gn() == 32));
}
function cf(a3) {
  for (; gn(); ) switch (Me) {
    case a3:
      return on;
    case 34:
    case 39:
      a3 !== 34 && a3 !== 39 && cf(Me);
      break;
    case 40:
      a3 === 41 && cf(a3);
      break;
    case 92:
      gn();
      break;
  }
  return on;
}
function Ab(a3, r) {
  for (; gn() && a3 + Me !== 57; ) if (a3 + Me === 84 && aa() === 47) break;
  return "/*" + Li(r, on - 1) + "*" + Ms(a3 === 47 ? a3 : gn());
}
function Rb(a3) {
  for (; !ji(aa()); ) gn();
  return Li(a3, on);
}
function Mb(a3) {
  return Zg(ms("", null, null, null, [""], a3 = Kg(a3), 0, [0], a3));
}
function ms(a3, r, o, s, c, f, p, h, g) {
  for (var m = 0, S = 0, b = p, w = 0, _ = 0, A = 0, x = 1, N = 1, D = 1, q = 0, B = "", H = c, R = f, V = s, Z = B; N; ) switch (A = q, q = gn()) {
    case 40:
      if (A != 108 && qe(Z, b - 1) == 58) {
        uf(Z += Pt(hs(q), "&", "&\f"), "&\f") != -1 && (D = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      Z += hs(q);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      Z += Cb(A);
      break;
    case 92:
      Z += wb(ps() - 1, 7);
      continue;
    case 47:
      switch (aa()) {
        case 42:
        case 47:
          es(Ob(Ab(gn(), ps()), r, o), g);
          break;
        default:
          Z += "/";
      }
      break;
    case 123 * x:
      h[m++] = In(Z) * D;
    case 125 * x:
    case 59:
    case 0:
      switch (q) {
        case 0:
        case 125:
          N = 0;
        case 59 + S:
          D == -1 && (Z = Pt(Z, /\f/g, "")), _ > 0 && In(Z) - b && es(_ > 32 ? Vm(Z + ";", s, o, b - 1) : Vm(Pt(Z, " ", "") + ";", s, o, b - 2), g);
          break;
        case 59:
          Z += ";";
        default:
          if (es(V = Ym(Z, r, o, m, S, c, h, B, H = [], R = [], b), f), q === 123) if (S === 0) ms(Z, r, V, V, H, f, b, h, R);
          else switch (w === 99 && qe(Z, 3) === 110 ? 100 : w) {
            case 100:
            case 108:
            case 109:
            case 115:
              ms(a3, V, V, s && es(Ym(a3, V, V, 0, 0, c, h, B, c, H = [], b), R), c, R, b, h, s ? H : R);
              break;
            default:
              ms(Z, V, V, V, [""], R, 0, h, R);
          }
      }
      m = S = _ = 0, x = D = 1, B = Z = "", b = p;
      break;
    case 58:
      b = 1 + In(Z), _ = A;
    default:
      if (x < 1) {
        if (q == 123) --x;
        else if (q == 125 && x++ == 0 && Eb() == 125) continue;
      }
      switch (Z += Ms(q), q * x) {
        case 38:
          D = S > 0 ? 1 : (Z += "\f", -1);
          break;
        case 44:
          h[m++] = (In(Z) - 1) * D, D = 1;
          break;
        case 64:
          aa() === 45 && (Z += hs(gn())), w = aa(), S = b = In(B = Z += Rb(ps())), q++;
          break;
        case 45:
          A === 45 && In(Z) == 2 && (x = 0);
      }
  }
  return f;
}
function Ym(a3, r, o, s, c, f, p, h, g, m, S) {
  for (var b = c - 1, w = c === 0 ? f : [""], _ = Of(w), A = 0, x = 0, N = 0; A < s; ++A) for (var D = 0, q = Ni(a3, b + 1, b = yb(x = p[A])), B = a3; D < _; ++D) (B = Pg(x > 0 ? w[D] + " " + q : Pt(q, /&\f/g, w[D]))) && (g[N++] = B);
  return zs(a3, r, o, c === 0 ? Rf : h, g, m, S);
}
function Ob(a3, r, o) {
  return zs(a3, r, o, Vg, Ms(Tb()), Ni(a3, 2, -2), 0);
}
function Vm(a3, r, o, s) {
  return zs(a3, r, o, Mf, Ni(a3, 0, s), Ni(a3, s + 1, -1), s);
}
function br(a3, r) {
  for (var o = "", s = Of(a3), c = 0; c < s; c++) o += r(a3[c], c, a3, r) || "";
  return o;
}
function zb(a3, r, o, s) {
  switch (a3.type) {
    case gb:
      if (a3.children.length) break;
    case mb:
    case Mf:
      return a3.return = a3.return || a3.value;
    case Vg:
      return "";
    case Xg:
      return a3.return = a3.value + "{" + br(a3.children, s) + "}";
    case Rf:
      a3.value = a3.props.join(",");
  }
  return In(o = br(a3.children, s)) ? a3.return = a3.value + "{" + o + "}" : "";
}
function _b(a3) {
  var r = Of(a3);
  return function(o, s, c, f) {
    for (var p = "", h = 0; h < r; h++) p += a3[h](o, s, c, f) || "";
    return p;
  };
}
function kb(a3) {
  return function(r) {
    r.root || (r = r.return) && a3(r);
  };
}
function Fg(a3) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = a3(o)), r[o];
  };
}
var Db = function(r, o, s) {
  for (var c = 0, f = 0; c = f, f = aa(), c === 38 && f === 12 && (o[s] = 1), !ji(f); ) gn();
  return Li(r, on);
}, Bb = function(r, o) {
  var s = -1, c = 44;
  do
    switch (ji(c)) {
      case 0:
        c === 38 && aa() === 12 && (o[s] = 1), r[s] += Db(on - 1, o, s);
        break;
      case 2:
        r[s] += hs(c);
        break;
      case 4:
        if (c === 44) {
          r[++s] = aa() === 58 ? "&\f" : "", o[s] = r[s].length;
          break;
        }
      default:
        r[s] += Ms(c);
    }
  while (c = gn());
  return r;
}, Nb = function(r, o) {
  return Zg(Bb(Kg(r), o));
}, Xm = /* @__PURE__ */ new WeakMap(), jb = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var o = r.value, s = r.parent, c = r.column === s.column && r.line === s.line; s.type !== "rule"; ) if (s = s.parent, !s) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Xm.get(s)) && !c) {
      Xm.set(r, true);
      for (var f = [], p = Nb(o, f), h = s.props, g = 0, m = 0; g < p.length; g++) for (var S = 0; S < h.length; S++, m++) r.props[m] = f[g] ? p[g].replace(/&\f/g, h[S]) : h[S] + " " + p[g];
    }
  }
}, Ub = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Wg(a3, r) {
  switch (bb(a3, r)) {
    case 5103:
      return Xt + "print-" + a3 + a3;
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
      return Xt + a3 + a3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Xt + a3 + bs + a3 + Ke + a3 + a3;
    case 6828:
    case 4268:
      return Xt + a3 + Ke + a3 + a3;
    case 6165:
      return Xt + a3 + Ke + "flex-" + a3 + a3;
    case 5187:
      return Xt + a3 + Pt(a3, /(\w+).+(:[^]+)/, Xt + "box-$1$2" + Ke + "flex-$1$2") + a3;
    case 5443:
      return Xt + a3 + Ke + "flex-item-" + Pt(a3, /flex-|-self/, "") + a3;
    case 4675:
      return Xt + a3 + Ke + "flex-line-pack" + Pt(a3, /align-content|flex-|-self/, "") + a3;
    case 5548:
      return Xt + a3 + Ke + Pt(a3, "shrink", "negative") + a3;
    case 5292:
      return Xt + a3 + Ke + Pt(a3, "basis", "preferred-size") + a3;
    case 6060:
      return Xt + "box-" + Pt(a3, "-grow", "") + Xt + a3 + Ke + Pt(a3, "grow", "positive") + a3;
    case 4554:
      return Xt + Pt(a3, /([^-])(transform)/g, "$1" + Xt + "$2") + a3;
    case 6187:
      return Pt(Pt(Pt(a3, /(zoom-|grab)/, Xt + "$1"), /(image-set)/, Xt + "$1"), a3, "") + a3;
    case 5495:
    case 3959:
      return Pt(a3, /(image-set\([^]*)/, Xt + "$1$`$1");
    case 4968:
      return Pt(Pt(a3, /(.+:)(flex-)?(.*)/, Xt + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Xt + a3 + a3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Pt(a3, /(.+)-inline(.+)/, Xt + "$1$2") + a3;
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
          return Pt(a3, /(.+:)(.+)-([^]+)/, "$1" + Xt + "$2-$3$1" + bs + (qe(a3, r + 3) == 108 ? "$3" : "$2-$3")) + a3;
        case 115:
          return ~uf(a3, "stretch") ? Wg(Pt(a3, "stretch", "fill-available"), r) + a3 : a3;
      }
      break;
    case 4949:
      if (qe(a3, r + 1) !== 115) break;
    case 6444:
      switch (qe(a3, In(a3) - 3 - (~uf(a3, "!important") && 10))) {
        case 107:
          return Pt(a3, ":", ":" + Xt) + a3;
        case 101:
          return Pt(a3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Xt + (qe(a3, 14) === 45 ? "inline-" : "") + "box$3$1" + Xt + "$2$3$1" + Ke + "$2box$3") + a3;
      }
      break;
    case 5936:
      switch (qe(a3, r + 11)) {
        case 114:
          return Xt + a3 + Ke + Pt(a3, /[svh]\w+-[tblr]{2}/, "tb") + a3;
        case 108:
          return Xt + a3 + Ke + Pt(a3, /[svh]\w+-[tblr]{2}/, "tb-rl") + a3;
        case 45:
          return Xt + a3 + Ke + Pt(a3, /[svh]\w+-[tblr]{2}/, "lr") + a3;
      }
      return Xt + a3 + Ke + a3 + a3;
  }
  return a3;
}
var Hb = function(r, o, s, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Mf:
      r.return = Wg(r.value, r.length);
      break;
    case Xg:
      return br([Ci(r, { value: Pt(r.value, "@", "@" + Xt) })], c);
    case Rf:
      if (r.length) return xb(r.props, function(f) {
        switch (Sb(f, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return br([Ci(r, { props: [Pt(f, /:(read-\w+)/, ":" + bs + "$1")] })], c);
          case "::placeholder":
            return br([Ci(r, { props: [Pt(f, /:(plac\w+)/, ":" + Xt + "input-$1")] }), Ci(r, { props: [Pt(f, /:(plac\w+)/, ":" + bs + "$1")] }), Ci(r, { props: [Pt(f, /:(plac\w+)/, Ke + "input-$1")] })], c);
        }
        return "";
      });
  }
}, Lb = [Hb], $b = function(r) {
  var o = r.key;
  if (o === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(x) {
      var N = x.getAttribute("data-emotion");
      N.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || Lb, f = {}, p, h = [];
  p = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function(x) {
    for (var N = x.getAttribute("data-emotion").split(" "), D = 1; D < N.length; D++) f[N[D]] = true;
    h.push(x);
  });
  var g, m = [jb, Ub];
  {
    var S, b = [zb, kb(function(x) {
      S.insert(x);
    })], w = _b(m.concat(c, b)), _ = function(N) {
      return br(Mb(N), w);
    };
    g = function(N, D, q, B) {
      S = q, _(N ? N + "{" + D.styles + "}" : D.styles), B && (A.inserted[D.name] = true);
    };
  }
  var A = { key: o, sheet: new hb({ key: o, container: p, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: f, registered: {}, insert: g };
  return A.sheet.hydrate(h), A;
}, Wc = { exports: {} }, Qt = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Pm;
function qb() {
  if (Pm) return Qt;
  Pm = 1;
  var a3 = typeof Symbol == "function" && Symbol.for, r = a3 ? Symbol.for("react.element") : 60103, o = a3 ? Symbol.for("react.portal") : 60106, s = a3 ? Symbol.for("react.fragment") : 60107, c = a3 ? Symbol.for("react.strict_mode") : 60108, f = a3 ? Symbol.for("react.profiler") : 60114, p = a3 ? Symbol.for("react.provider") : 60109, h = a3 ? Symbol.for("react.context") : 60110, g = a3 ? Symbol.for("react.async_mode") : 60111, m = a3 ? Symbol.for("react.concurrent_mode") : 60111, S = a3 ? Symbol.for("react.forward_ref") : 60112, b = a3 ? Symbol.for("react.suspense") : 60113, w = a3 ? Symbol.for("react.suspense_list") : 60120, _ = a3 ? Symbol.for("react.memo") : 60115, A = a3 ? Symbol.for("react.lazy") : 60116, x = a3 ? Symbol.for("react.block") : 60121, N = a3 ? Symbol.for("react.fundamental") : 60117, D = a3 ? Symbol.for("react.responder") : 60118, q = a3 ? Symbol.for("react.scope") : 60119;
  function B(R) {
    if (typeof R == "object" && R !== null) {
      var V = R.$$typeof;
      switch (V) {
        case r:
          switch (R = R.type, R) {
            case g:
            case m:
            case s:
            case f:
            case c:
            case b:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case h:
                case S:
                case A:
                case _:
                case p:
                  return R;
                default:
                  return V;
              }
          }
        case o:
          return V;
      }
    }
  }
  function H(R) {
    return B(R) === m;
  }
  return Qt.AsyncMode = g, Qt.ConcurrentMode = m, Qt.ContextConsumer = h, Qt.ContextProvider = p, Qt.Element = r, Qt.ForwardRef = S, Qt.Fragment = s, Qt.Lazy = A, Qt.Memo = _, Qt.Portal = o, Qt.Profiler = f, Qt.StrictMode = c, Qt.Suspense = b, Qt.isAsyncMode = function(R) {
    return H(R) || B(R) === g;
  }, Qt.isConcurrentMode = H, Qt.isContextConsumer = function(R) {
    return B(R) === h;
  }, Qt.isContextProvider = function(R) {
    return B(R) === p;
  }, Qt.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === r;
  }, Qt.isForwardRef = function(R) {
    return B(R) === S;
  }, Qt.isFragment = function(R) {
    return B(R) === s;
  }, Qt.isLazy = function(R) {
    return B(R) === A;
  }, Qt.isMemo = function(R) {
    return B(R) === _;
  }, Qt.isPortal = function(R) {
    return B(R) === o;
  }, Qt.isProfiler = function(R) {
    return B(R) === f;
  }, Qt.isStrictMode = function(R) {
    return B(R) === c;
  }, Qt.isSuspense = function(R) {
    return B(R) === b;
  }, Qt.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === s || R === m || R === f || R === c || R === b || R === w || typeof R == "object" && R !== null && (R.$$typeof === A || R.$$typeof === _ || R.$$typeof === p || R.$$typeof === h || R.$$typeof === S || R.$$typeof === N || R.$$typeof === D || R.$$typeof === q || R.$$typeof === x);
  }, Qt.typeOf = B, Qt;
}
var Qm;
function Gb() {
  return Qm || (Qm = 1, Wc.exports = qb()), Wc.exports;
}
var Jc, Km;
function Yb() {
  if (Km) return Jc;
  Km = 1;
  var a3 = Gb(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, o = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, s = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, c = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, f = {};
  f[a3.ForwardRef] = s, f[a3.Memo] = c;
  function p(A) {
    return a3.isMemo(A) ? c : f[A.$$typeof] || r;
  }
  var h = Object.defineProperty, g = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, w = Object.prototype;
  function _(A, x, N) {
    if (typeof x != "string") {
      if (w) {
        var D = b(x);
        D && D !== w && _(A, D, N);
      }
      var q = g(x);
      m && (q = q.concat(m(x)));
      for (var B = p(A), H = p(x), R = 0; R < q.length; ++R) {
        var V = q[R];
        if (!o[V] && !(N && N[V]) && !(H && H[V]) && !(B && B[V])) {
          var Z = S(x, V);
          try {
            h(A, V, Z);
          } catch {
          }
        }
      }
    }
    return A;
  }
  return Jc = _, Jc;
}
Yb();
var Vb = true;
function Jg(a3, r, o) {
  var s = "";
  return o.split(" ").forEach(function(c) {
    a3[c] !== void 0 ? r.push(a3[c] + ";") : c && (s += c + " ");
  }), s;
}
var zf = function(r, o, s) {
  var c = r.key + "-" + o.name;
  (s === false || Vb === false) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
}, Ig = function(r, o, s) {
  zf(r, o, s);
  var c = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var f = o;
    do
      r.insert(o === f ? "." + c : "", f, r.sheet, true), f = f.next;
    while (f !== void 0);
  }
};
function Xb(a3) {
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
var Pb = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Qb = /[A-Z]|^ms/g, Kb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, t0 = function(r) {
  return r.charCodeAt(1) === 45;
}, Zm = function(r) {
  return r != null && typeof r != "boolean";
}, Ic = Fg(function(a3) {
  return t0(a3) ? a3 : a3.replace(Qb, "-$&").toLowerCase();
}), Fm = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string") return o.replace(Kb, function(s, c, f) {
        return ta = { name: c, styles: f, next: ta }, c;
      });
  }
  return Pb[r] !== 1 && !t0(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Ui(a3, r, o) {
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
      return Zb(a3, r, o);
    }
    case "function": {
      if (a3 !== void 0) {
        var g = ta, m = o(a3);
        return ta = g, Ui(a3, r, m);
      }
      break;
    }
  }
  var S = o;
  if (r == null) return S;
  var b = r[S];
  return b !== void 0 ? b : S;
}
function Zb(a3, r, o) {
  var s = "";
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) s += Ui(a3, r, o[c]) + ";";
  else for (var f in o) {
    var p = o[f];
    if (typeof p != "object") {
      var h = p;
      r != null && r[h] !== void 0 ? s += f + "{" + r[h] + "}" : Zm(h) && (s += Ic(f) + ":" + Fm(f, h) + ";");
    } else if (Array.isArray(p) && typeof p[0] == "string" && (r == null || r[p[0]] === void 0)) for (var g = 0; g < p.length; g++) Zm(p[g]) && (s += Ic(f) + ":" + Fm(f, p[g]) + ";");
    else {
      var m = Ui(a3, r, p);
      switch (f) {
        case "animation":
        case "animationName": {
          s += Ic(f) + ":" + m + ";";
          break;
        }
        default:
          s += f + "{" + m + "}";
      }
    }
  }
  return s;
}
var Wm = /label:\s*([^\s;{]+)\s*(;|$)/g, ta;
function _s(a3, r, o) {
  if (a3.length === 1 && typeof a3[0] == "object" && a3[0] !== null && a3[0].styles !== void 0) return a3[0];
  var s = true, c = "";
  ta = void 0;
  var f = a3[0];
  if (f == null || f.raw === void 0) s = false, c += Ui(o, r, f);
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a3.length; h++) if (c += Ui(o, r, a3[h]), s) {
    var g = f;
    c += g[h];
  }
  Wm.lastIndex = 0;
  for (var m = "", S; (S = Wm.exec(c)) !== null; ) m += "-" + S[1];
  var b = Xb(c) + m;
  return { name: b, styles: c, next: ta };
}
var Fb = function(r) {
  return r();
}, Wb = sf.useInsertionEffect ? sf.useInsertionEffect : false, e0 = Wb || Fb, n0 = C.createContext(typeof HTMLElement < "u" ? $b({ key: "css" }) : null);
n0.Provider;
var a0 = function(r) {
  return C.forwardRef(function(o, s) {
    var c = C.useContext(n0);
    return r(o, c, s);
  });
}, _f = C.createContext({}), kf = {}.hasOwnProperty, ff = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Jb = function(r, o) {
  var s = {};
  for (var c in o) kf.call(o, c) && (s[c] = o[c]);
  return s[ff] = r, s;
}, Ib = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return zf(o, s, c), e0(function() {
    return Ig(o, s, c);
  }), null;
}, t1 = a0(function(a3, r, o) {
  var s = a3.css;
  typeof s == "string" && r.registered[s] !== void 0 && (s = r.registered[s]);
  var c = a3[ff], f = [s], p = "";
  typeof a3.className == "string" ? p = Jg(r.registered, f, a3.className) : a3.className != null && (p = a3.className + " ");
  var h = _s(f, void 0, C.useContext(_f));
  p += r.key + "-" + h.name;
  var g = {};
  for (var m in a3) kf.call(a3, m) && m !== "css" && m !== ff && (g[m] = a3[m]);
  return g.className = p, o && (g.ref = o), C.createElement(C.Fragment, null, C.createElement(Ib, { cache: r, serialized: h, isStringTag: typeof c == "string" }), C.createElement(c, g));
}), e1 = t1, Jm = function(r, o) {
  var s = arguments;
  if (o == null || !kf.call(o, "css")) return C.createElement.apply(void 0, s);
  var c = s.length, f = new Array(c);
  f[0] = e1, f[1] = Jb(r, o);
  for (var p = 2; p < c; p++) f[p] = s[p];
  return C.createElement.apply(null, f);
};
(function(a3) {
  var r;
  r || (r = a3.JSX || (a3.JSX = {}));
})(Jm || (Jm = {}));
function Df() {
  for (var a3 = arguments.length, r = new Array(a3), o = 0; o < a3; o++) r[o] = arguments[o];
  return _s(r);
}
function $i() {
  var a3 = Df.apply(void 0, arguments), r = "animation-" + a3.name;
  return { name: r, styles: "@keyframes " + r + "{" + a3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var n1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, a1 = Fg(function(a3) {
  return n1.test(a3) || a3.charCodeAt(0) === 111 && a3.charCodeAt(1) === 110 && a3.charCodeAt(2) < 91;
}), l1 = a1, r1 = function(r) {
  return r !== "theme";
}, Im = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? l1 : r1;
}, tg = function(r, o, s) {
  var c;
  if (o) {
    var f = o.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(p) {
      return r.__emotion_forwardProp(p) && f(p);
    } : f;
  }
  return typeof c != "function" && s && (c = r.__emotion_forwardProp), c;
}, i1 = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return zf(o, s, c), e0(function() {
    return Ig(o, s, c);
  }), null;
}, o1 = function a(r, o) {
  var s = r.__emotion_real === r, c = s && r.__emotion_base || r, f, p;
  o !== void 0 && (f = o.label, p = o.target);
  var h = tg(r, o, s), g = h || Im(c), m = !g("as");
  return function() {
    var S = arguments, b = s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && b.push("label:" + f + ";"), S[0] == null || S[0].raw === void 0) b.push.apply(b, S);
    else {
      var w = S[0];
      b.push(w[0]);
      for (var _ = S.length, A = 1; A < _; A++) b.push(S[A], w[A]);
    }
    var x = a0(function(N, D, q) {
      var B = m && N.as || c, H = "", R = [], V = N;
      if (N.theme == null) {
        V = {};
        for (var Z in N) V[Z] = N[Z];
        V.theme = C.useContext(_f);
      }
      typeof N.className == "string" ? H = Jg(D.registered, R, N.className) : N.className != null && (H = N.className + " ");
      var it = _s(b.concat(R), D.registered, V);
      H += D.key + "-" + it.name, p !== void 0 && (H += " " + p);
      var G = m && h === void 0 ? Im(B) : g, y = {};
      for (var P in N) m && P === "as" || G(P) && (y[P] = N[P]);
      return y.className = H, q && (y.ref = q), C.createElement(C.Fragment, null, C.createElement(i1, { cache: D, serialized: it, isStringTag: typeof B == "string" }), C.createElement(B, y));
    });
    return x.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = c, x.__emotion_styles = b, x.__emotion_forwardProp = h, Object.defineProperty(x, "toString", { value: function() {
      return "." + p;
    } }), x.withComponent = function(N, D) {
      var q = a(N, vs({}, o, D, { shouldForwardProp: tg(x, D, true) }));
      return q.apply(void 0, b);
    }, x;
  };
}, s1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], df = o1.bind(null);
s1.forEach(function(a3) {
  df[a3] = df(a3);
});
/**
* @mui/styled-engine v6.4.3
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function l0(a3, r) {
  return df(a3, r);
}
function u1(a3, r) {
  Array.isArray(a3.__emotion_styles) && (a3.__emotion_styles = r(a3.__emotion_styles));
}
const eg = [];
function ng(a3) {
  return eg[0] = a3, _s(eg);
}
var tf = { exports: {} }, Jt = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ag;
function c1() {
  if (ag) return Jt;
  ag = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), _ = Symbol.for("react.client.reference");
  function A(x) {
    if (typeof x == "object" && x !== null) {
      var N = x.$$typeof;
      switch (N) {
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
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  return Jt.ContextConsumer = f, Jt.ContextProvider = p, Jt.Element = a3, Jt.ForwardRef = h, Jt.Fragment = o, Jt.Lazy = b, Jt.Memo = S, Jt.Portal = r, Jt.Profiler = c, Jt.StrictMode = s, Jt.Suspense = g, Jt.SuspenseList = m, Jt.isContextConsumer = function(x) {
    return A(x) === f;
  }, Jt.isContextProvider = function(x) {
    return A(x) === p;
  }, Jt.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a3;
  }, Jt.isForwardRef = function(x) {
    return A(x) === h;
  }, Jt.isFragment = function(x) {
    return A(x) === o;
  }, Jt.isLazy = function(x) {
    return A(x) === b;
  }, Jt.isMemo = function(x) {
    return A(x) === S;
  }, Jt.isPortal = function(x) {
    return A(x) === r;
  }, Jt.isProfiler = function(x) {
    return A(x) === c;
  }, Jt.isStrictMode = function(x) {
    return A(x) === s;
  }, Jt.isSuspense = function(x) {
    return A(x) === g;
  }, Jt.isSuspenseList = function(x) {
    return A(x) === m;
  }, Jt.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === c || x === s || x === g || x === m || x === w || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === S || x.$$typeof === p || x.$$typeof === f || x.$$typeof === h || x.$$typeof === _ || x.getModuleId !== void 0);
  }, Jt.typeOf = A, Jt;
}
var lg;
function f1() {
  return lg || (lg = 1, tf.exports = c1()), tf.exports;
}
var r0 = f1();
function ea(a3) {
  if (typeof a3 != "object" || a3 === null) return false;
  const r = Object.getPrototypeOf(a3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a3) && !(Symbol.iterator in a3);
}
function i0(a3) {
  if (C.isValidElement(a3) || r0.isValidElementType(a3) || !ea(a3)) return a3;
  const r = {};
  return Object.keys(a3).forEach((o) => {
    r[o] = i0(a3[o]);
  }), r;
}
function yn(a3, r, o = { clone: true }) {
  const s = o.clone ? { ...a3 } : a3;
  return ea(a3) && ea(r) && Object.keys(r).forEach((c) => {
    C.isValidElement(r[c]) || r0.isValidElementType(r[c]) ? s[c] = r[c] : ea(r[c]) && Object.prototype.hasOwnProperty.call(a3, c) && ea(a3[c]) ? s[c] = yn(a3[c], r[c], o) : o.clone ? s[c] = ea(r[c]) ? i0(r[c]) : r[c] : s[c] = r[c];
  }), s;
}
const d1 = (a3) => {
  const r = Object.keys(a3).map((o) => ({ key: o, val: a3[o] })) || [];
  return r.sort((o, s) => o.val - s.val), r.reduce((o, s) => ({ ...o, [s.key]: s.val }), {});
};
function p1(a3) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = "px", step: s = 5, ...c } = a3, f = d1(r), p = Object.keys(f);
  function h(w) {
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o})`;
  }
  function g(w) {
    return `@media (max-width:${(typeof r[w] == "number" ? r[w] : w) - s / 100}${o})`;
  }
  function m(w, _) {
    const A = p.indexOf(_);
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o}) and (max-width:${(A !== -1 && typeof r[p[A]] == "number" ? r[p[A]] : _) - s / 100}${o})`;
  }
  function S(w) {
    return p.indexOf(w) + 1 < p.length ? m(w, p[p.indexOf(w) + 1]) : h(w);
  }
  function b(w) {
    const _ = p.indexOf(w);
    return _ === 0 ? h(p[1]) : _ === p.length - 1 ? g(p[_]) : m(w, p[p.indexOf(w) + 1]).replace("@media", "@media not all and");
  }
  return { keys: p, values: f, up: h, down: g, between: m, only: S, not: b, unit: o, ...c };
}
function h1(a3, r) {
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
function m1(a3, r) {
  return r === "@" || r.startsWith("@") && (a3.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function g1(a3, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, s, c] = o, f = Number.isNaN(+s) ? s || 0 : +s;
  return a3.containerQueries(c).up(f);
}
function y1(a3) {
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
const v1 = { borderRadius: 4 };
function zi(a3, r) {
  return r ? yn(a3, r, { clone: false }) : a3;
}
const ks = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, rg = { keys: ["xs", "sm", "md", "lg", "xl"], up: (a3) => `@media (min-width:${ks[a3]}px)` }, b1 = { containerQueries: (a3) => ({ up: (r) => {
  let o = typeof r == "number" ? r : ks[r] || r;
  return typeof o == "number" && (o = `${o}px`), a3 ? `@container ${a3} (min-width:${o})` : `@container (min-width:${o})`;
} }) };
function Aa(a3, r, o) {
  const s = a3.theme || {};
  if (Array.isArray(r)) {
    const f = s.breakpoints || rg;
    return r.reduce((p, h, g) => (p[f.up(f.keys[g])] = o(r[g]), p), {});
  }
  if (typeof r == "object") {
    const f = s.breakpoints || rg;
    return Object.keys(r).reduce((p, h) => {
      if (m1(f.keys, h)) {
        const g = g1(s.containerQueries ? s : b1, h);
        g && (p[g] = o(r[h], h));
      } else if (Object.keys(f.values || ks).includes(h)) {
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
function S1(a3 = {}) {
  var _a;
  return ((_a = a3.keys) == null ? void 0 : _a.reduce((o, s) => {
    const c = a3.up(s);
    return o[c] = {}, o;
  }, {})) || {};
}
function x1(a3, r) {
  return a3.reduce((o, s) => {
    const c = o[s];
    return (!c || Object.keys(c).length === 0) && delete o[s], o;
  }, r);
}
function vt(a3) {
  if (typeof a3 != "string") throw new Error(Rl(7));
  return a3.charAt(0).toUpperCase() + a3.slice(1);
}
function Ds(a3, r, o = true) {
  if (!r || typeof r != "string") return null;
  if (a3 && a3.vars && o) {
    const s = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a3);
    if (s != null) return s;
  }
  return r.split(".").reduce((s, c) => s && s[c] != null ? s[c] : null, a3);
}
function Ss(a3, r, o, s = o) {
  let c;
  return typeof a3 == "function" ? c = a3(o) : Array.isArray(a3) ? c = a3[o] || s : c = Ds(a3, o) || s, r && (c = r(c, s, a3)), c;
}
function Ee(a3) {
  const { prop: r, cssProperty: o = a3.prop, themeKey: s, transform: c } = a3, f = (p) => {
    if (p[r] == null) return null;
    const h = p[r], g = p.theme, m = Ds(g, s) || {};
    return Aa(p, h, (b) => {
      let w = Ss(m, c, b);
      return b === w && typeof b == "string" && (w = Ss(m, c, `${r}${b === "default" ? "" : vt(b)}`, b)), o === false ? w : { [o]: w };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function T1(a3) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = a3(o)), r[o]);
}
const E1 = { m: "margin", p: "padding" }, C1 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, ig = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, w1 = T1((a3) => {
  if (a3.length > 2) if (ig[a3]) a3 = ig[a3];
  else return [a3];
  const [r, o] = a3.split(""), s = E1[r], c = C1[o] || "";
  return Array.isArray(c) ? c.map((f) => s + f) : [s + c];
}), Bf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Nf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Bf, ...Nf];
function qi(a3, r, o, s) {
  const c = Ds(a3, r, true) ?? o;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string") return f;
    const p = Math.abs(f), h = c[p];
    return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof c == "function" ? c : () => {
  };
}
function jf(a3) {
  return qi(a3, "spacing", 8);
}
function Gi(a3, r) {
  return typeof r == "string" || r == null ? r : a3(r);
}
function A1(a3, r) {
  return (o) => a3.reduce((s, c) => (s[c] = Gi(r, o), s), {});
}
function R1(a3, r, o, s) {
  if (!r.includes(o)) return null;
  const c = w1(o), f = A1(c, s), p = a3[o];
  return Aa(a3, p, f);
}
function o0(a3, r) {
  const o = jf(a3.theme);
  return Object.keys(a3).map((s) => R1(a3, r, s, o)).reduce(zi, {});
}
function Se(a3) {
  return o0(a3, Bf);
}
Se.propTypes = {};
Se.filterProps = Bf;
function xe(a3) {
  return o0(a3, Nf);
}
xe.propTypes = {};
xe.filterProps = Nf;
function s0(a3 = 8, r = jf({ spacing: a3 })) {
  if (a3.mui) return a3;
  const o = (...s) => (s.length === 0 ? [1] : s).map((f) => {
    const p = r(f);
    return typeof p == "number" ? `${p}px` : p;
  }).join(" ");
  return o.mui = true, o;
}
function Bs(...a3) {
  const r = a3.reduce((s, c) => (c.filterProps.forEach((f) => {
    s[f] = c;
  }), s), {}), o = (s) => Object.keys(s).reduce((c, f) => r[f] ? zi(c, r[f](s)) : c, {});
  return o.propTypes = {}, o.filterProps = a3.reduce((s, c) => s.concat(c.filterProps), []), o;
}
function Nn(a3) {
  return typeof a3 != "number" ? a3 : `${a3}px solid`;
}
function Ln(a3, r) {
  return Ee({ prop: a3, themeKey: "borders", transform: r });
}
const M1 = Ln("border", Nn), O1 = Ln("borderTop", Nn), z1 = Ln("borderRight", Nn), _1 = Ln("borderBottom", Nn), k1 = Ln("borderLeft", Nn), D1 = Ln("borderColor"), B1 = Ln("borderTopColor"), N1 = Ln("borderRightColor"), j1 = Ln("borderBottomColor"), U1 = Ln("borderLeftColor"), H1 = Ln("outline", Nn), L1 = Ln("outlineColor"), Ns = (a3) => {
  if (a3.borderRadius !== void 0 && a3.borderRadius !== null) {
    const r = qi(a3.theme, "shape.borderRadius", 4), o = (s) => ({ borderRadius: Gi(r, s) });
    return Aa(a3, a3.borderRadius, o);
  }
  return null;
};
Ns.propTypes = {};
Ns.filterProps = ["borderRadius"];
Bs(M1, O1, z1, _1, k1, D1, B1, N1, j1, U1, Ns, H1, L1);
const js = (a3) => {
  if (a3.gap !== void 0 && a3.gap !== null) {
    const r = qi(a3.theme, "spacing", 8), o = (s) => ({ gap: Gi(r, s) });
    return Aa(a3, a3.gap, o);
  }
  return null;
};
js.propTypes = {};
js.filterProps = ["gap"];
const Us = (a3) => {
  if (a3.columnGap !== void 0 && a3.columnGap !== null) {
    const r = qi(a3.theme, "spacing", 8), o = (s) => ({ columnGap: Gi(r, s) });
    return Aa(a3, a3.columnGap, o);
  }
  return null;
};
Us.propTypes = {};
Us.filterProps = ["columnGap"];
const Hs = (a3) => {
  if (a3.rowGap !== void 0 && a3.rowGap !== null) {
    const r = qi(a3.theme, "spacing", 8), o = (s) => ({ rowGap: Gi(r, s) });
    return Aa(a3, a3.rowGap, o);
  }
  return null;
};
Hs.propTypes = {};
Hs.filterProps = ["rowGap"];
const $1 = Ee({ prop: "gridColumn" }), q1 = Ee({ prop: "gridRow" }), G1 = Ee({ prop: "gridAutoFlow" }), Y1 = Ee({ prop: "gridAutoColumns" }), V1 = Ee({ prop: "gridAutoRows" }), X1 = Ee({ prop: "gridTemplateColumns" }), P1 = Ee({ prop: "gridTemplateRows" }), Q1 = Ee({ prop: "gridTemplateAreas" }), K1 = Ee({ prop: "gridArea" });
Bs(js, Us, Hs, $1, q1, G1, Y1, V1, X1, P1, Q1, K1);
function Sr(a3, r) {
  return r === "grey" ? r : a3;
}
const Z1 = Ee({ prop: "color", themeKey: "palette", transform: Sr }), F1 = Ee({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Sr }), W1 = Ee({ prop: "backgroundColor", themeKey: "palette", transform: Sr });
Bs(Z1, F1, W1);
function mn(a3) {
  return a3 <= 1 && a3 !== 0 ? `${a3 * 100}%` : a3;
}
const J1 = Ee({ prop: "width", transform: mn }), Uf = (a3) => {
  if (a3.maxWidth !== void 0 && a3.maxWidth !== null) {
    const r = (o) => {
      var _a, _b2, _c, _d, _e;
      const s = ((_c = (_b2 = (_a = a3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c[o]) || ks[o];
      return s ? ((_e = (_d = a3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${s}${a3.theme.breakpoints.unit}` } : { maxWidth: s } : { maxWidth: mn(o) };
    };
    return Aa(a3, a3.maxWidth, r);
  }
  return null;
};
Uf.filterProps = ["maxWidth"];
const I1 = Ee({ prop: "minWidth", transform: mn }), tS = Ee({ prop: "height", transform: mn }), eS = Ee({ prop: "maxHeight", transform: mn }), nS = Ee({ prop: "minHeight", transform: mn });
Ee({ prop: "size", cssProperty: "width", transform: mn });
Ee({ prop: "size", cssProperty: "height", transform: mn });
const aS = Ee({ prop: "boxSizing" });
Bs(J1, Uf, I1, tS, eS, nS, aS);
const Yi = { border: { themeKey: "borders", transform: Nn }, borderTop: { themeKey: "borders", transform: Nn }, borderRight: { themeKey: "borders", transform: Nn }, borderBottom: { themeKey: "borders", transform: Nn }, borderLeft: { themeKey: "borders", transform: Nn }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Nn }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Ns }, color: { themeKey: "palette", transform: Sr }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Sr }, backgroundColor: { themeKey: "palette", transform: Sr }, p: { style: xe }, pt: { style: xe }, pr: { style: xe }, pb: { style: xe }, pl: { style: xe }, px: { style: xe }, py: { style: xe }, padding: { style: xe }, paddingTop: { style: xe }, paddingRight: { style: xe }, paddingBottom: { style: xe }, paddingLeft: { style: xe }, paddingX: { style: xe }, paddingY: { style: xe }, paddingInline: { style: xe }, paddingInlineStart: { style: xe }, paddingInlineEnd: { style: xe }, paddingBlock: { style: xe }, paddingBlockStart: { style: xe }, paddingBlockEnd: { style: xe }, m: { style: Se }, mt: { style: Se }, mr: { style: Se }, mb: { style: Se }, ml: { style: Se }, mx: { style: Se }, my: { style: Se }, margin: { style: Se }, marginTop: { style: Se }, marginRight: { style: Se }, marginBottom: { style: Se }, marginLeft: { style: Se }, marginX: { style: Se }, marginY: { style: Se }, marginInline: { style: Se }, marginInlineStart: { style: Se }, marginInlineEnd: { style: Se }, marginBlock: { style: Se }, marginBlockStart: { style: Se }, marginBlockEnd: { style: Se }, displayPrint: { cssProperty: false, transform: (a3) => ({ "@media print": { display: a3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: js }, rowGap: { style: Hs }, columnGap: { style: Us }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: mn }, maxWidth: { style: Uf }, minWidth: { transform: mn }, height: { transform: mn }, maxHeight: { transform: mn }, minHeight: { transform: mn }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function lS(...a3) {
  const r = a3.reduce((s, c) => s.concat(Object.keys(c)), []), o = new Set(r);
  return a3.every((s) => o.size === Object.keys(s).length);
}
function rS(a3, r) {
  return typeof a3 == "function" ? a3(r) : a3;
}
function iS() {
  function a3(o, s, c, f) {
    const p = { [o]: s, theme: c }, h = f[o];
    if (!h) return { [o]: s };
    const { cssProperty: g = o, themeKey: m, transform: S, style: b } = h;
    if (s == null) return null;
    if (m === "typography" && s === "inherit") return { [o]: s };
    const w = Ds(c, m) || {};
    return b ? b(p) : Aa(p, s, (A) => {
      let x = Ss(w, S, A);
      return A === x && typeof A == "string" && (x = Ss(w, S, `${o}${A === "default" ? "" : vt(A)}`, A)), g === false ? x : { [g]: x };
    });
  }
  function r(o) {
    const { sx: s, theme: c = {} } = o || {};
    if (!s) return null;
    const f = c.unstable_sxConfig ?? Yi;
    function p(h) {
      let g = h;
      if (typeof h == "function") g = h(c);
      else if (typeof h != "object") return h;
      if (!g) return null;
      const m = S1(c.breakpoints), S = Object.keys(m);
      let b = m;
      return Object.keys(g).forEach((w) => {
        const _ = rS(g[w], c);
        if (_ != null) if (typeof _ == "object") if (f[w]) b = zi(b, a3(w, _, c, f));
        else {
          const A = Aa({ theme: c }, _, (x) => ({ [w]: x }));
          lS(A, _) ? b[w] = r({ sx: _, theme: c }) : b = zi(b, A);
        }
        else b = zi(b, a3(w, _, c, f));
      }), h1(c, x1(S, b));
    }
    return Array.isArray(s) ? s.map(p) : p(s);
  }
  return r;
}
const Ml = iS();
Ml.filterProps = ["sx"];
function oS(a3, r) {
  var _a;
  const o = this;
  if (o.vars) {
    if (!((_a = o.colorSchemes) == null ? void 0 : _a[a3]) || typeof o.getColorSchemeSelector != "function") return {};
    let s = o.getColorSchemeSelector(a3);
    return s === "&" ? r : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), { [s]: r });
  }
  return o.palette.mode === a3 ? r : {};
}
function Hf(a3 = {}, ...r) {
  const { breakpoints: o = {}, palette: s = {}, spacing: c, shape: f = {}, ...p } = a3, h = p1(o), g = s0(c);
  let m = yn({ breakpoints: h, direction: "ltr", components: {}, palette: { mode: "light", ...s }, spacing: g, shape: { ...v1, ...f } }, p);
  return m = y1(m), m.applyStyles = oS, m = r.reduce((S, b) => yn(S, b), m), m.unstable_sxConfig = { ...Yi, ...p == null ? void 0 : p.unstable_sxConfig }, m.unstable_sx = function(b) {
    return Ml({ sx: b, theme: this });
  }, m;
}
function sS(a3) {
  return Object.keys(a3).length === 0;
}
function uS(a3 = null) {
  const r = C.useContext(_f);
  return !r || sS(r) ? a3 : r;
}
const cS = Hf();
function Lf(a3 = cS) {
  return uS(a3);
}
const fS = (a3) => {
  var _a;
  const r = { systemProps: {}, otherProps: {} }, o = ((_a = a3 == null ? void 0 : a3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? Yi;
  return Object.keys(a3).forEach((s) => {
    o[s] ? r.systemProps[s] = a3[s] : r.otherProps[s] = a3[s];
  }), r;
};
function u0(a3) {
  const { sx: r, ...o } = a3, { systemProps: s, otherProps: c } = fS(o);
  let f;
  return Array.isArray(r) ? f = [s, ...r] : typeof r == "function" ? f = (...p) => {
    const h = r(...p);
    return ea(h) ? { ...s, ...h } : s;
  } : f = { ...s, ...r }, { ...c, sx: f };
}
const og = (a3) => a3, dS = () => {
  let a3 = og;
  return { configure(r) {
    a3 = r;
  }, generate(r) {
    return a3(r);
  }, reset() {
    a3 = og;
  } };
}, c0 = dS();
function f0(a3) {
  var r, o, s = "";
  if (typeof a3 == "string" || typeof a3 == "number") s += a3;
  else if (typeof a3 == "object") if (Array.isArray(a3)) {
    var c = a3.length;
    for (r = 0; r < c; r++) a3[r] && (o = f0(a3[r])) && (s && (s += " "), s += o);
  } else for (o in a3) a3[o] && (s && (s += " "), s += o);
  return s;
}
function Et() {
  for (var a3, r, o = 0, s = "", c = arguments.length; o < c; o++) (a3 = arguments[o]) && (r = f0(a3)) && (s && (s += " "), s += r);
  return s;
}
function pS(a3 = {}) {
  const { themeId: r, defaultTheme: o, defaultClassName: s = "MuiBox-root", generateClassName: c } = a3, f = l0("div", { shouldForwardProp: (h) => h !== "theme" && h !== "sx" && h !== "as" })(Ml);
  return C.forwardRef(function(g, m) {
    const S = Lf(o), { className: b, component: w = "div", ..._ } = u0(g);
    return z.jsx(f, { as: w, ref: m, className: Et(b, c ? c(s) : s), theme: r && S[r] || S, ..._ });
  });
}
const hS = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function ue(a3, r, o = "Mui") {
  const s = hS[r];
  return s ? `${o}-${s}` : `${c0.generate(a3)}-${r}`;
}
function oe(a3, r, o = "Mui") {
  const s = {};
  return r.forEach((c) => {
    s[c] = ue(a3, c, o);
  }), s;
}
function d0(a3) {
  const { variants: r, ...o } = a3, s = { variants: r, style: ng(o), isProcessed: true };
  return s.style === o || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = ng(c.style));
  }), s;
}
const mS = Hf();
function ef(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
function gS(a3) {
  return a3 ? (r, o) => o[a3] : null;
}
function yS(a3, r, o) {
  a3.theme = SS(a3.theme) ? o : a3.theme[r] || a3.theme;
}
function gs(a3, r) {
  const o = typeof r == "function" ? r(a3) : r;
  if (Array.isArray(o)) return o.flatMap((s) => gs(a3, s));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed) s = o.style;
    else {
      const { variants: c, ...f } = o;
      s = f;
    }
    return p0(a3, o.variants, [s]);
  }
  return (o == null ? void 0 : o.isProcessed) ? o.style : o;
}
function p0(a3, r, o = []) {
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
function vS(a3 = {}) {
  const { themeId: r, defaultTheme: o = mS, rootShouldForwardProp: s = ef, slotShouldForwardProp: c = ef } = a3;
  function f(h) {
    yS(h, r, o);
  }
  return (h, g = {}) => {
    u1(h, (R) => R.filter((V) => V !== Ml));
    const { name: m, slot: S, skipVariantsResolver: b, skipSx: w, overridesResolver: _ = gS(TS(S)), ...A } = g, x = b !== void 0 ? b : S && S !== "Root" && S !== "root" || false, N = w || false;
    let D = ef;
    S === "Root" || S === "root" ? D = s : S ? D = c : xS(h) && (D = void 0);
    const q = l0(h, { shouldForwardProp: D, label: bS(), ...A }), B = (R) => {
      if (typeof R == "function" && R.__emotion_real !== R) return function(Z) {
        return gs(Z, R);
      };
      if (ea(R)) {
        const V = d0(R);
        return V.variants ? function(it) {
          return gs(it, V);
        } : V.style;
      }
      return R;
    }, H = (...R) => {
      const V = [], Z = R.map(B), it = [];
      if (V.push(f), m && _ && it.push(function(lt) {
        var _a, _b2;
        const I = (_b2 = (_a = lt.theme.components) == null ? void 0 : _a[m]) == null ? void 0 : _b2.styleOverrides;
        if (!I) return null;
        const Y = {};
        for (const U in I) Y[U] = gs(lt, I[U]);
        return _(lt, Y);
      }), m && !x && it.push(function(lt) {
        var _a, _b2, _c;
        const I = (_c = (_b2 = (_a = lt.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[m]) == null ? void 0 : _c.variants;
        return I ? p0(lt, I) : null;
      }), N || it.push(Ml), Array.isArray(Z[0])) {
        const P = Z.shift(), lt = new Array(V.length).fill(""), at = new Array(it.length).fill("");
        let I;
        I = [...lt, ...P, ...at], I.raw = [...lt, ...P.raw, ...at], V.unshift(I);
      }
      const G = [...V, ...Z, ...it], y = q(...G);
      return h.muiName && (y.muiName = h.muiName), y;
    };
    return q.withConfig && (H.withConfig = q.withConfig), H;
  };
}
function bS(a3, r) {
  return void 0;
}
function SS(a3) {
  for (const r in a3) return false;
  return true;
}
function xS(a3) {
  return typeof a3 == "string" && a3.charCodeAt(0) > 96;
}
function TS(a3) {
  return a3 && a3.charAt(0).toLowerCase() + a3.slice(1);
}
function xs(a3, r) {
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
          o[c][g] = xs(f[g], p[g]);
        }
      }
    } else o[c] === void 0 && (o[c] = a3[c]);
  }
  return o;
}
function ES(a3) {
  const { theme: r, name: o, props: s } = a3;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps ? s : xs(r.components[o].defaultProps, s);
}
function CS({ props: a3, name: r, defaultTheme: o, themeId: s }) {
  let c = Lf(o);
  return c = c[s] || c, ES({ theme: c, name: r, props: a3 });
}
const Hi = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function yr(a3, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a3, o));
}
function $f(a3, r = 0, o = 1) {
  return yr(a3, r, o);
}
function wS(a3) {
  a3 = a3.slice(1);
  const r = new RegExp(`.{1,${a3.length >= 6 ? 2 : 1}}`, "g");
  let o = a3.match(r);
  return o && o[0].length === 1 && (o = o.map((s) => s + s)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((s, c) => c < 3 ? parseInt(s, 16) : Math.round(parseInt(s, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ja(a3) {
  if (a3.type) return a3;
  if (a3.charAt(0) === "#") return Ja(wS(a3));
  const r = a3.indexOf("("), o = a3.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o)) throw new Error(Rl(9, a3));
  let s = a3.substring(r + 1, a3.length - 1), c;
  if (o === "color") {
    if (s = s.split(" "), c = s.shift(), s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c)) throw new Error(Rl(10, c));
  } else s = s.split(",");
  return s = s.map((f) => parseFloat(f)), { type: o, values: s, colorSpace: c };
}
const AS = (a3) => {
  const r = Ja(a3);
  return r.values.slice(0, 3).map((o, s) => r.type.includes("hsl") && s !== 0 ? `${o}%` : o).join(" ");
}, wi = (a3, r) => {
  try {
    return AS(a3);
  } catch {
    return a3;
  }
};
function Ls(a3) {
  const { type: r, colorSpace: o } = a3;
  let { values: s } = a3;
  return r.includes("rgb") ? s = s.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (s[1] = `${s[1]}%`, s[2] = `${s[2]}%`), r.includes("color") ? s = `${o} ${s.join(" ")}` : s = `${s.join(", ")}`, `${r}(${s})`;
}
function h0(a3) {
  a3 = Ja(a3);
  const { values: r } = a3, o = r[0], s = r[1] / 100, c = r[2] / 100, f = s * Math.min(c, 1 - c), p = (m, S = (m + o / 30) % 12) => c - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let h = "rgb";
  const g = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return a3.type === "hsla" && (h += "a", g.push(r[3])), Ls({ type: h, values: g });
}
function pf(a3) {
  a3 = Ja(a3);
  let r = a3.type === "hsl" || a3.type === "hsla" ? Ja(h0(a3)).values : a3.values;
  return r = r.map((o) => (a3.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function RS(a3, r) {
  const o = pf(a3), s = pf(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function Ra(a3, r) {
  return a3 = Ja(a3), r = $f(r), (a3.type === "rgb" || a3.type === "hsl") && (a3.type += "a"), a3.type === "color" ? a3.values[3] = `/${r}` : a3.values[3] = r, Ls(a3);
}
function ns(a3, r, o) {
  try {
    return Ra(a3, r);
  } catch {
    return a3;
  }
}
function Ia(a3, r) {
  if (a3 = Ja(a3), r = $f(r), a3.type.includes("hsl")) a3.values[2] *= 1 - r;
  else if (a3.type.includes("rgb") || a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] *= 1 - r;
  return Ls(a3);
}
function ne(a3, r, o) {
  try {
    return Ia(a3, r);
  } catch {
    return a3;
  }
}
function tl(a3, r) {
  if (a3 = Ja(a3), r = $f(r), a3.type.includes("hsl")) a3.values[2] += (100 - a3.values[2]) * r;
  else if (a3.type.includes("rgb")) for (let o = 0; o < 3; o += 1) a3.values[o] += (255 - a3.values[o]) * r;
  else if (a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] += (1 - a3.values[o]) * r;
  return Ls(a3);
}
function ae(a3, r, o) {
  try {
    return tl(a3, r);
  } catch {
    return a3;
  }
}
function m0(a3, r = 0.15) {
  return pf(a3) > 0.5 ? Ia(a3, r) : tl(a3, r);
}
function as(a3, r, o) {
  try {
    return m0(a3, r);
  } catch {
    return a3;
  }
}
function sg(...a3) {
  return a3.reduce((r, o) => o == null ? r : function(...c) {
    r.apply(this, c), o.apply(this, c);
  }, () => {
  });
}
function g0(a3, r = 166) {
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
function Ie(a3) {
  return a3 && a3.ownerDocument || document;
}
function Tr(a3) {
  return Ie(a3).defaultView || window;
}
function hf(a3, r) {
  typeof a3 == "function" ? a3(r) : a3 && (a3.current = r);
}
let ug = 0;
function MS(a3) {
  const [r, o] = C.useState(a3), s = a3 || r;
  return C.useEffect(() => {
    r == null && (ug += 1, o(`mui-${ug}`));
  }, [r]), s;
}
const OS = { ...sf }, cg = OS.useId;
function zS(a3) {
  if (cg !== void 0) {
    const r = cg();
    return a3 ?? r;
  }
  return MS(a3);
}
function y0({ controlled: a3, default: r, name: o, state: s = "value" }) {
  const { current: c } = C.useRef(a3 !== void 0), [f, p] = C.useState(r), h = c ? a3 : f, g = C.useCallback((m) => {
    c || p(m);
  }, []);
  return [h, g];
}
function tn(a3) {
  const r = C.useRef(a3);
  return Hi(() => {
    r.current = a3;
  }), C.useRef((...o) => (0, r.current)(...o)).current;
}
function Hn(...a3) {
  return C.useMemo(() => a3.every((r) => r == null) ? null : (r) => {
    a3.forEach((o) => {
      hf(o, r);
    });
  }, a3);
}
const fg = {};
function v0(a3, r) {
  const o = C.useRef(fg);
  return o.current === fg && (o.current = a3(r)), o;
}
const _S = [];
function kS(a3) {
  C.useEffect(a3, _S);
}
class qf {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qf();
  }
  start(r, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, r);
  }
}
function Gf() {
  const a3 = v0(qf.create).current;
  return kS(a3.disposeEffect), a3;
}
function Ts(a3) {
  try {
    return a3.matches(":focus-visible");
  } catch {
  }
  return false;
}
function DS(a3 = window) {
  const r = a3.document.documentElement.clientWidth;
  return a3.innerWidth - r;
}
const BS = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", whiteSpace: "nowrap", width: "1px" };
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
function NS(a3) {
  return typeof a3 == "string";
}
function b0(a3, r, o) {
  return a3 === void 0 || NS(a3) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function Al(a3, r = []) {
  if (a3 === void 0) return {};
  const o = {};
  return Object.keys(a3).filter((s) => s.match(/^on[A-Z]/) && typeof a3[s] == "function" && !r.includes(s)).forEach((s) => {
    o[s] = a3[s];
  }), o;
}
function dg(a3) {
  if (a3 === void 0) return {};
  const r = {};
  return Object.keys(a3).filter((o) => !(o.match(/^on[A-Z]/) && typeof a3[o] == "function")).forEach((o) => {
    r[o] = a3[o];
  }), r;
}
function S0(a3) {
  const { getSlotProps: r, additionalProps: o, externalSlotProps: s, externalForwardedProps: c, className: f } = a3;
  if (!r) {
    const _ = Et(o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), A = { ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, x = { ...o, ...c, ...s };
    return _.length > 0 && (x.className = _), Object.keys(A).length > 0 && (x.style = A), { props: x, internalRef: void 0 };
  }
  const p = Al({ ...c, ...s }), h = dg(s), g = dg(c), m = r(p), S = Et(m == null ? void 0 : m.className, o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), b = { ...m == null ? void 0 : m.style, ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, w = { ...m, ...o, ...g, ...h };
  return S.length > 0 && (w.className = S), Object.keys(b).length > 0 && (w.style = b), { props: w, internalRef: m.ref };
}
function x0(a3, r, o) {
  return typeof a3 == "function" ? a3(r, o) : a3;
}
function hn(a3) {
  var _a;
  const { elementType: r, externalSlotProps: o, ownerState: s, skipResolvingSlotProps: c = false, ...f } = a3, p = c ? {} : x0(o, s), { props: h, internalRef: g } = S0({ ...f, externalSlotProps: p }), m = Hn(g, p == null ? void 0 : p.ref, (_a = a3.additionalProps) == null ? void 0 : _a.ref);
  return b0(r, { ...h, ref: m }, s);
}
function Vi(a3) {
  var _a;
  return parseInt(C.version, 10) >= 19 ? ((_a = a3 == null ? void 0 : a3.props) == null ? void 0 : _a.ref) || null : (a3 == null ? void 0 : a3.ref) || null;
}
const jS = C.createContext(), Yf = () => C.useContext(jS) ?? false, US = C.createContext(void 0);
function HS(a3) {
  const { theme: r, name: o, props: s } = a3;
  if (!r || !r.components || !r.components[o]) return s;
  const c = r.components[o];
  return c.defaultProps ? xs(c.defaultProps, s) : !c.styleOverrides && !c.variants ? xs(c, s) : s;
}
function LS({ props: a3, name: r }) {
  const o = C.useContext(US);
  return HS({ props: a3, name: r, theme: { components: o } });
}
const pg = { theme: void 0 };
function $S(a3) {
  let r, o;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== o) && (pg.theme = c.theme, f = d0(a3(pg)), r = f, o = c.theme), f;
  };
}
function qS(a3 = "") {
  function r(...s) {
    if (!s.length) return "";
    const c = s[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a3 ? `${a3}-` : ""}${c}${r(...s.slice(1))})` : `, ${c}`;
  }
  return (s, ...c) => `var(--${a3 ? `${a3}-` : ""}${s}${r(...c)})`;
}
const hg = (a3, r, o, s = []) => {
  let c = a3;
  r.forEach((f, p) => {
    p === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = o : c && typeof c == "object" && (c[f] = o) : c && typeof c == "object" && (c[f] || (c[f] = s.includes(f) ? [] : {}), c = c[f]);
  });
}, GS = (a3, r, o) => {
  function s(c, f = [], p = []) {
    Object.entries(c).forEach(([h, g]) => {
      (!o || o && !o([...f, h])) && g != null && (typeof g == "object" && Object.keys(g).length > 0 ? s(g, [...f, h], Array.isArray(g) ? [...p, h] : p) : r([...f, h], g, p));
    });
  }
  s(a3);
}, YS = (a3, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) => a3.includes(s)) || a3[a3.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function nf(a3, r) {
  const { prefix: o, shouldSkipGeneratingVar: s } = r || {}, c = {}, f = {}, p = {};
  return GS(a3, (h, g, m) => {
    if ((typeof g == "string" || typeof g == "number") && (!s || !s(h, g))) {
      const S = `--${o ? `${o}-` : ""}${h.join("-")}`, b = YS(h, g);
      Object.assign(c, { [S]: b }), hg(f, h, `var(${S})`, m), hg(p, h, `var(${S}, ${b})`, m);
    }
  }, (h) => h[0] === "vars"), { css: c, vars: f, varsWithDefaults: p };
}
function VS(a3, r = {}) {
  const { getSelector: o = N, disableCssColorScheme: s, colorSchemeSelector: c } = r, { colorSchemes: f = {}, components: p, defaultColorScheme: h = "light", ...g } = a3, { vars: m, css: S, varsWithDefaults: b } = nf(g, r);
  let w = b;
  const _ = {}, { [h]: A, ...x } = f;
  if (Object.entries(x || {}).forEach(([B, H]) => {
    const { vars: R, css: V, varsWithDefaults: Z } = nf(H, r);
    w = yn(w, Z), _[B] = { css: V, vars: R };
  }), A) {
    const { css: B, vars: H, varsWithDefaults: R } = nf(A, r);
    w = yn(w, R), _[h] = { css: B, vars: H };
  }
  function N(B, H) {
    var _a, _b2;
    let R = c;
    if (c === "class" && (R = ".%s"), c === "data" && (R = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (R = `[${c}="%s"]`), B) {
      if (R === "media") return a3.defaultColorScheme === B ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = f[B]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || B})`]: { ":root": H } };
      if (R) return a3.defaultColorScheme === B ? `:root, ${R.replace("%s", String(B))}` : R.replace("%s", String(B));
    }
    return ":root";
  }
  return { vars: w, generateThemeVars: () => {
    let B = { ...m };
    return Object.entries(_).forEach(([, { vars: H }]) => {
      B = yn(B, H);
    }), B;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const B = [], H = a3.defaultColorScheme || "light";
    function R(it, G) {
      Object.keys(G).length && B.push(typeof it == "string" ? { [it]: { ...G } } : it);
    }
    R(o(void 0, { ...S }), S);
    const { [H]: V, ...Z } = _;
    if (V) {
      const { css: it } = V, G = (_b2 = (_a = f[H]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, y = !s && G ? { colorScheme: G, ...it } : { ...it };
      R(o(H, { ...y }), y);
    }
    return Object.entries(Z).forEach(([it, { css: G }]) => {
      var _a2, _b3;
      const y = (_b3 = (_a2 = f[it]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, P = !s && y ? { colorScheme: y, ...G } : { ...G };
      R(o(it, { ...P }), P);
    }), B;
  } };
}
function XS(a3) {
  return function(o) {
    return a3 === "media" ? `@media (prefers-color-scheme: ${o})` : a3 ? a3.startsWith("data-") && !a3.includes("%s") ? `[${a3}="${o}"] &` : a3 === "class" ? `.${o} &` : a3 === "data" ? `[data-${o}] &` : `${a3.replace("%s", o)} &` : "&";
  };
}
function T0() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Bi.white, default: Bi.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const PS = T0();
function E0() {
  return { text: { primary: Bi.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Bi.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const mg = E0();
function gg(a3, r, o, s) {
  const c = s.light || s, f = s.dark || s * 1.5;
  a3[r] || (a3.hasOwnProperty(o) ? a3[r] = a3[o] : r === "light" ? a3.light = tl(a3.main, c) : r === "dark" && (a3.dark = Ia(a3.main, f)));
}
function QS(a3 = "light") {
  return a3 === "dark" ? { main: dr[200], light: dr[50], dark: dr[400] } : { main: dr[700], light: dr[400], dark: dr[800] };
}
function KS(a3 = "light") {
  return a3 === "dark" ? { main: fr[200], light: fr[50], dark: fr[400] } : { main: fr[500], light: fr[300], dark: fr[700] };
}
function ZS(a3 = "light") {
  return a3 === "dark" ? { main: cr[500], light: cr[300], dark: cr[700] } : { main: cr[700], light: cr[400], dark: cr[800] };
}
function FS(a3 = "light") {
  return a3 === "dark" ? { main: pr[400], light: pr[300], dark: pr[700] } : { main: pr[700], light: pr[500], dark: pr[900] };
}
function WS(a3 = "light") {
  return a3 === "dark" ? { main: hr[400], light: hr[300], dark: hr[700] } : { main: hr[800], light: hr[500], dark: hr[900] };
}
function JS(a3 = "light") {
  return a3 === "dark" ? { main: Ei[400], light: Ei[300], dark: Ei[700] } : { main: "#ed6c02", light: Ei[500], dark: Ei[900] };
}
function Vf(a3) {
  const { mode: r = "light", contrastThreshold: o = 3, tonalOffset: s = 0.2, ...c } = a3, f = a3.primary || QS(r), p = a3.secondary || KS(r), h = a3.error || ZS(r), g = a3.info || FS(r), m = a3.success || WS(r), S = a3.warning || JS(r);
  function b(x) {
    return RS(x, mg.text.primary) >= o ? mg.text.primary : PS.text.primary;
  }
  const w = ({ color: x, name: N, mainShade: D = 500, lightShade: q = 300, darkShade: B = 700 }) => {
    if (x = { ...x }, !x.main && x[D] && (x.main = x[D]), !x.hasOwnProperty("main")) throw new Error(Rl(11, N ? ` (${N})` : "", D));
    if (typeof x.main != "string") throw new Error(Rl(12, N ? ` (${N})` : "", JSON.stringify(x.main)));
    return gg(x, "light", q, s), gg(x, "dark", B, s), x.contrastText || (x.contrastText = b(x.main)), x;
  };
  let _;
  return r === "light" ? _ = T0() : r === "dark" && (_ = E0()), yn({ common: { ...Bi }, mode: r, primary: w({ color: f, name: "primary" }), secondary: w({ color: p, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: w({ color: h, name: "error" }), warning: w({ color: S, name: "warning" }), info: w({ color: g, name: "info" }), success: w({ color: m, name: "success" }), grey: fb, contrastThreshold: o, getContrastText: b, augmentColor: w, tonalOffset: s, ..._ }, c);
}
function IS(a3) {
  const r = {};
  return Object.entries(a3).forEach((s) => {
    const [c, f] = s;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function tx(a3, r) {
  return { toolbar: { minHeight: 56, [a3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [a3.up("sm")]: { minHeight: 64 } }, ...r };
}
function ex(a3) {
  return Math.round(a3 * 1e5) / 1e5;
}
const yg = { textTransform: "uppercase" }, vg = '"Roboto", "Helvetica", "Arial", sans-serif';
function nx(a3, r) {
  const { fontFamily: o = vg, fontSize: s = 14, fontWeightLight: c = 300, fontWeightRegular: f = 400, fontWeightMedium: p = 500, fontWeightBold: h = 700, htmlFontSize: g = 16, allVariants: m, pxToRem: S, ...b } = typeof r == "function" ? r(a3) : r, w = s / 14, _ = S || ((N) => `${N / g * w}rem`), A = (N, D, q, B, H) => ({ fontFamily: o, fontWeight: N, fontSize: _(D), lineHeight: q, ...o === vg ? { letterSpacing: `${ex(B / D)}em` } : {}, ...H, ...m }), x = { h1: A(c, 96, 1.167, -1.5), h2: A(c, 60, 1.2, -0.5), h3: A(f, 48, 1.167, 0), h4: A(f, 34, 1.235, 0.25), h5: A(f, 24, 1.334, 0), h6: A(p, 20, 1.6, 0.15), subtitle1: A(f, 16, 1.75, 0.15), subtitle2: A(p, 14, 1.57, 0.1), body1: A(f, 16, 1.5, 0.15), body2: A(f, 14, 1.43, 0.15), button: A(p, 14, 1.75, 0.4, yg), caption: A(f, 12, 1.66, 0.4), overline: A(f, 12, 2.66, 1, yg), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return yn({ htmlFontSize: g, pxToRem: _, fontFamily: o, fontSize: s, fontWeightLight: c, fontWeightRegular: f, fontWeightMedium: p, fontWeightBold: h, ...x }, b, { clone: false });
}
const ax = 0.2, lx = 0.14, rx = 0.12;
function de(...a3) {
  return [`${a3[0]}px ${a3[1]}px ${a3[2]}px ${a3[3]}px rgba(0,0,0,${ax})`, `${a3[4]}px ${a3[5]}px ${a3[6]}px ${a3[7]}px rgba(0,0,0,${lx})`, `${a3[8]}px ${a3[9]}px ${a3[10]}px ${a3[11]}px rgba(0,0,0,${rx})`].join(",");
}
const ix = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ox = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, sx = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function bg(a3) {
  return `${Math.round(a3)}ms`;
}
function ux(a3) {
  if (!a3) return 0;
  const r = a3 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function cx(a3) {
  const r = { ...ox, ...a3.easing }, o = { ...sx, ...a3.duration };
  return { getAutoHeightDuration: ux, create: (c = ["all"], f = {}) => {
    const { duration: p = o.standard, easing: h = r.easeInOut, delay: g = 0, ...m } = f;
    return (Array.isArray(c) ? c : [c]).map((S) => `${S} ${typeof p == "string" ? p : bg(p)} ${h} ${typeof g == "string" ? g : bg(g)}`).join(",");
  }, ...a3, easing: r, duration: o };
}
const fx = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function dx(a3) {
  return ea(a3) || typeof a3 > "u" || typeof a3 == "string" || typeof a3 == "boolean" || typeof a3 == "number" || Array.isArray(a3);
}
function C0(a3 = {}) {
  const r = { ...a3 };
  function o(s) {
    const c = Object.entries(s);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !dx(h) || p.startsWith("unstable_") ? delete s[p] : ea(h) && (s[p] = { ...h }, o(s[p]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function mf(a3 = {}, ...r) {
  const { breakpoints: o, mixins: s = {}, spacing: c, palette: f = {}, transitions: p = {}, typography: h = {}, shape: g, ...m } = a3;
  if (a3.vars) throw new Error(Rl(20));
  const S = Vf(f), b = Hf(a3);
  let w = yn(b, { mixins: tx(b.breakpoints, s), palette: S, shadows: ix.slice(), typography: nx(S, h), transitions: cx(p), zIndex: { ...fx } });
  return w = yn(w, m), w = r.reduce((_, A) => yn(_, A), w), w.unstable_sxConfig = { ...Yi, ...m == null ? void 0 : m.unstable_sxConfig }, w.unstable_sx = function(A) {
    return Ml({ sx: A, theme: this });
  }, w.toRuntimeSource = C0, w;
}
function gf(a3) {
  let r;
  return a3 < 1 ? r = 5.11916 * a3 ** 2 : r = 4.5 * Math.log(a3 + 1) + 2, Math.round(r * 10) / 1e3;
}
const px = [...Array(25)].map((a3, r) => {
  if (r === 0) return "none";
  const o = gf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function w0(a3) {
  return { inputPlaceholder: a3 === "dark" ? 0.5 : 0.42, inputUnderline: a3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: a3 === "dark" ? 0.2 : 0.12, switchTrack: a3 === "dark" ? 0.3 : 0.38 };
}
function A0(a3) {
  return a3 === "dark" ? px : [];
}
function hx(a3) {
  const { palette: r = { mode: "light" }, opacity: o, overlays: s, ...c } = a3, f = Vf(r);
  return { palette: f, opacity: { ...w0(f.mode), ...o }, overlays: s || A0(f.mode), ...c };
}
function mx(a3) {
  var _a;
  return !!a3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a3[0].match(/sxConfig$/) || a3[0] === "palette" && !!((_a = a3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const gx = (a3) => [...[...Array(25)].map((r, o) => `--${a3 ? `${a3}-` : ""}overlays-${o}`), `--${a3 ? `${a3}-` : ""}palette-AppBar-darkBg`, `--${a3 ? `${a3}-` : ""}palette-AppBar-darkColor`], yx = (a3) => (r, o) => {
  const s = a3.rootSelector || ":root", c = a3.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (f = `[${c}="%s"]`), a3.defaultColorScheme === r) {
    if (r === "dark") {
      const p = {};
      return gx(a3.cssVarPrefix).forEach((h) => {
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
function vx(a3, r) {
  r.forEach((o) => {
    a3[o] || (a3[o] = {});
  });
}
function X(a3, r, o) {
  !a3[r] && o && (a3[r] = o);
}
function Ai(a3) {
  return typeof a3 != "string" || !a3.startsWith("hsl") ? a3 : h0(a3);
}
function Ea(a3, r) {
  `${r}Channel` in a3 || (a3[`${r}Channel`] = wi(Ai(a3[r])));
}
function bx(a3) {
  return typeof a3 == "number" ? `${a3}px` : typeof a3 == "string" || typeof a3 == "function" || Array.isArray(a3) ? a3 : "8px";
}
const Jn = (a3) => {
  try {
    return a3();
  } catch {
  }
}, Sx = (a3 = "mui") => qS(a3);
function af(a3, r, o, s) {
  if (!r) return;
  r = r === true ? {} : r;
  const c = s === "dark" ? "dark" : "light";
  if (!o) {
    a3[s] = hx({ ...r, palette: { mode: c, ...r == null ? void 0 : r.palette } });
    return;
  }
  const { palette: f, ...p } = mf({ ...o, palette: { mode: c, ...r == null ? void 0 : r.palette } });
  return a3[s] = { ...r, palette: f, opacity: { ...w0(c), ...r == null ? void 0 : r.opacity }, overlays: (r == null ? void 0 : r.overlays) || A0(c) }, p;
}
function xx(a3 = {}, ...r) {
  const { colorSchemes: o = { light: true }, defaultColorScheme: s, disableCssColorScheme: c = false, cssVarPrefix: f = "mui", shouldSkipGeneratingVar: p = mx, colorSchemeSelector: h = o.light && o.dark ? "media" : void 0, rootSelector: g = ":root", ...m } = a3, S = Object.keys(o)[0], b = s || (o.light && S !== "light" ? "light" : S), w = Sx(f), { [b]: _, light: A, dark: x, ...N } = o, D = { ...N };
  let q = _;
  if ((b === "dark" && !("dark" in o) || b === "light" && !("light" in o)) && (q = true), !q) throw new Error(Rl(21, b));
  const B = af(D, q, m, b);
  A && !D.light && af(D, A, void 0, "light"), x && !D.dark && af(D, x, void 0, "dark");
  let H = { defaultColorScheme: b, ...B, cssVarPrefix: f, colorSchemeSelector: h, rootSelector: g, getCssVar: w, colorSchemes: D, font: { ...IS(B.typography), ...B.font }, spacing: bx(m.spacing) };
  Object.keys(H.colorSchemes).forEach((G) => {
    const y = H.colorSchemes[G].palette, P = (lt) => {
      const at = lt.split("-"), I = at[1], Y = at[2];
      return w(lt, y[I][Y]);
    };
    if (y.mode === "light" && (X(y.common, "background", "#fff"), X(y.common, "onBackground", "#000")), y.mode === "dark" && (X(y.common, "background", "#000"), X(y.common, "onBackground", "#fff")), vx(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      X(y.Alert, "errorColor", ne(y.error.light, 0.6)), X(y.Alert, "infoColor", ne(y.info.light, 0.6)), X(y.Alert, "successColor", ne(y.success.light, 0.6)), X(y.Alert, "warningColor", ne(y.warning.light, 0.6)), X(y.Alert, "errorFilledBg", P("palette-error-main")), X(y.Alert, "infoFilledBg", P("palette-info-main")), X(y.Alert, "successFilledBg", P("palette-success-main")), X(y.Alert, "warningFilledBg", P("palette-warning-main")), X(y.Alert, "errorFilledColor", Jn(() => y.getContrastText(y.error.main))), X(y.Alert, "infoFilledColor", Jn(() => y.getContrastText(y.info.main))), X(y.Alert, "successFilledColor", Jn(() => y.getContrastText(y.success.main))), X(y.Alert, "warningFilledColor", Jn(() => y.getContrastText(y.warning.main))), X(y.Alert, "errorStandardBg", ae(y.error.light, 0.9)), X(y.Alert, "infoStandardBg", ae(y.info.light, 0.9)), X(y.Alert, "successStandardBg", ae(y.success.light, 0.9)), X(y.Alert, "warningStandardBg", ae(y.warning.light, 0.9)), X(y.Alert, "errorIconColor", P("palette-error-main")), X(y.Alert, "infoIconColor", P("palette-info-main")), X(y.Alert, "successIconColor", P("palette-success-main")), X(y.Alert, "warningIconColor", P("palette-warning-main")), X(y.AppBar, "defaultBg", P("palette-grey-100")), X(y.Avatar, "defaultBg", P("palette-grey-400")), X(y.Button, "inheritContainedBg", P("palette-grey-300")), X(y.Button, "inheritContainedHoverBg", P("palette-grey-A100")), X(y.Chip, "defaultBorder", P("palette-grey-400")), X(y.Chip, "defaultAvatarColor", P("palette-grey-700")), X(y.Chip, "defaultIconColor", P("palette-grey-700")), X(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), X(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), X(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), X(y.LinearProgress, "primaryBg", ae(y.primary.main, 0.62)), X(y.LinearProgress, "secondaryBg", ae(y.secondary.main, 0.62)), X(y.LinearProgress, "errorBg", ae(y.error.main, 0.62)), X(y.LinearProgress, "infoBg", ae(y.info.main, 0.62)), X(y.LinearProgress, "successBg", ae(y.success.main, 0.62)), X(y.LinearProgress, "warningBg", ae(y.warning.main, 0.62)), X(y.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), X(y.Slider, "primaryTrack", ae(y.primary.main, 0.62)), X(y.Slider, "secondaryTrack", ae(y.secondary.main, 0.62)), X(y.Slider, "errorTrack", ae(y.error.main, 0.62)), X(y.Slider, "infoTrack", ae(y.info.main, 0.62)), X(y.Slider, "successTrack", ae(y.success.main, 0.62)), X(y.Slider, "warningTrack", ae(y.warning.main, 0.62));
      const lt = as(y.background.default, 0.8);
      X(y.SnackbarContent, "bg", lt), X(y.SnackbarContent, "color", Jn(() => y.getContrastText(lt))), X(y.SpeedDialAction, "fabHoverBg", as(y.background.paper, 0.15)), X(y.StepConnector, "border", P("palette-grey-400")), X(y.StepContent, "border", P("palette-grey-400")), X(y.Switch, "defaultColor", P("palette-common-white")), X(y.Switch, "defaultDisabledColor", P("palette-grey-100")), X(y.Switch, "primaryDisabledColor", ae(y.primary.main, 0.62)), X(y.Switch, "secondaryDisabledColor", ae(y.secondary.main, 0.62)), X(y.Switch, "errorDisabledColor", ae(y.error.main, 0.62)), X(y.Switch, "infoDisabledColor", ae(y.info.main, 0.62)), X(y.Switch, "successDisabledColor", ae(y.success.main, 0.62)), X(y.Switch, "warningDisabledColor", ae(y.warning.main, 0.62)), X(y.TableCell, "border", ae(ns(y.divider, 1), 0.88)), X(y.Tooltip, "bg", ns(y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      X(y.Alert, "errorColor", ae(y.error.light, 0.6)), X(y.Alert, "infoColor", ae(y.info.light, 0.6)), X(y.Alert, "successColor", ae(y.success.light, 0.6)), X(y.Alert, "warningColor", ae(y.warning.light, 0.6)), X(y.Alert, "errorFilledBg", P("palette-error-dark")), X(y.Alert, "infoFilledBg", P("palette-info-dark")), X(y.Alert, "successFilledBg", P("palette-success-dark")), X(y.Alert, "warningFilledBg", P("palette-warning-dark")), X(y.Alert, "errorFilledColor", Jn(() => y.getContrastText(y.error.dark))), X(y.Alert, "infoFilledColor", Jn(() => y.getContrastText(y.info.dark))), X(y.Alert, "successFilledColor", Jn(() => y.getContrastText(y.success.dark))), X(y.Alert, "warningFilledColor", Jn(() => y.getContrastText(y.warning.dark))), X(y.Alert, "errorStandardBg", ne(y.error.light, 0.9)), X(y.Alert, "infoStandardBg", ne(y.info.light, 0.9)), X(y.Alert, "successStandardBg", ne(y.success.light, 0.9)), X(y.Alert, "warningStandardBg", ne(y.warning.light, 0.9)), X(y.Alert, "errorIconColor", P("palette-error-main")), X(y.Alert, "infoIconColor", P("palette-info-main")), X(y.Alert, "successIconColor", P("palette-success-main")), X(y.Alert, "warningIconColor", P("palette-warning-main")), X(y.AppBar, "defaultBg", P("palette-grey-900")), X(y.AppBar, "darkBg", P("palette-background-paper")), X(y.AppBar, "darkColor", P("palette-text-primary")), X(y.Avatar, "defaultBg", P("palette-grey-600")), X(y.Button, "inheritContainedBg", P("palette-grey-800")), X(y.Button, "inheritContainedHoverBg", P("palette-grey-700")), X(y.Chip, "defaultBorder", P("palette-grey-700")), X(y.Chip, "defaultAvatarColor", P("palette-grey-300")), X(y.Chip, "defaultIconColor", P("palette-grey-300")), X(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), X(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), X(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), X(y.LinearProgress, "primaryBg", ne(y.primary.main, 0.5)), X(y.LinearProgress, "secondaryBg", ne(y.secondary.main, 0.5)), X(y.LinearProgress, "errorBg", ne(y.error.main, 0.5)), X(y.LinearProgress, "infoBg", ne(y.info.main, 0.5)), X(y.LinearProgress, "successBg", ne(y.success.main, 0.5)), X(y.LinearProgress, "warningBg", ne(y.warning.main, 0.5)), X(y.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), X(y.Slider, "primaryTrack", ne(y.primary.main, 0.5)), X(y.Slider, "secondaryTrack", ne(y.secondary.main, 0.5)), X(y.Slider, "errorTrack", ne(y.error.main, 0.5)), X(y.Slider, "infoTrack", ne(y.info.main, 0.5)), X(y.Slider, "successTrack", ne(y.success.main, 0.5)), X(y.Slider, "warningTrack", ne(y.warning.main, 0.5));
      const lt = as(y.background.default, 0.98);
      X(y.SnackbarContent, "bg", lt), X(y.SnackbarContent, "color", Jn(() => y.getContrastText(lt))), X(y.SpeedDialAction, "fabHoverBg", as(y.background.paper, 0.15)), X(y.StepConnector, "border", P("palette-grey-600")), X(y.StepContent, "border", P("palette-grey-600")), X(y.Switch, "defaultColor", P("palette-grey-300")), X(y.Switch, "defaultDisabledColor", P("palette-grey-600")), X(y.Switch, "primaryDisabledColor", ne(y.primary.main, 0.55)), X(y.Switch, "secondaryDisabledColor", ne(y.secondary.main, 0.55)), X(y.Switch, "errorDisabledColor", ne(y.error.main, 0.55)), X(y.Switch, "infoDisabledColor", ne(y.info.main, 0.55)), X(y.Switch, "successDisabledColor", ne(y.success.main, 0.55)), X(y.Switch, "warningDisabledColor", ne(y.warning.main, 0.55)), X(y.TableCell, "border", ne(ns(y.divider, 1), 0.68)), X(y.Tooltip, "bg", ns(y.grey[700], 0.92));
    }
    Ea(y.background, "default"), Ea(y.background, "paper"), Ea(y.common, "background"), Ea(y.common, "onBackground"), Ea(y, "divider"), Object.keys(y).forEach((lt) => {
      const at = y[lt];
      lt !== "tonalOffset" && at && typeof at == "object" && (at.main && X(y[lt], "mainChannel", wi(Ai(at.main))), at.light && X(y[lt], "lightChannel", wi(Ai(at.light))), at.dark && X(y[lt], "darkChannel", wi(Ai(at.dark))), at.contrastText && X(y[lt], "contrastTextChannel", wi(Ai(at.contrastText))), lt === "text" && (Ea(y[lt], "primary"), Ea(y[lt], "secondary")), lt === "action" && (at.active && Ea(y[lt], "active"), at.selected && Ea(y[lt], "selected")));
    });
  }), H = r.reduce((G, y) => yn(G, y), H);
  const R = { prefix: f, disableCssColorScheme: c, shouldSkipGeneratingVar: p, getSelector: yx(H) }, { vars: V, generateThemeVars: Z, generateStyleSheets: it } = VS(H, R);
  return H.vars = V, Object.entries(H.colorSchemes[H.defaultColorScheme]).forEach(([G, y]) => {
    H[G] = y;
  }), H.generateThemeVars = Z, H.generateStyleSheets = it, H.generateSpacing = function() {
    return s0(m.spacing, jf(this));
  }, H.getColorSchemeSelector = XS(h), H.spacing = H.generateSpacing(), H.shouldSkipGeneratingVar = p, H.unstable_sxConfig = { ...Yi, ...m == null ? void 0 : m.unstable_sxConfig }, H.unstable_sx = function(y) {
    return Ml({ sx: y, theme: this });
  }, H.toRuntimeSource = C0, H;
}
function Sg(a3, r, o) {
  a3.colorSchemes && o && (a3.colorSchemes[r] = { ...o !== true && o, palette: Vf({ ...o === true ? {} : o.palette, mode: r }) });
}
function R0(a3 = {}, ...r) {
  const { palette: o, cssVariables: s = false, colorSchemes: c = o ? void 0 : { light: true }, defaultColorScheme: f = o == null ? void 0 : o.mode, ...p } = a3, h = f || "light", g = c == null ? void 0 : c[h], m = { ...c, ...o ? { [h]: { ...typeof g != "boolean" && g, palette: o } } : void 0 };
  if (s === false) {
    if (!("colorSchemes" in a3)) return mf(a3, ...r);
    let S = o;
    "palette" in a3 || m[h] && (m[h] !== true ? S = m[h].palette : h === "dark" && (S = { mode: "dark" }));
    const b = mf({ ...a3, palette: S }, ...r);
    return b.defaultColorScheme = h, b.colorSchemes = m, b.palette.mode === "light" && (b.colorSchemes.light = { ...m.light !== true && m.light, palette: b.palette }, Sg(b, "dark", m.dark)), b.palette.mode === "dark" && (b.colorSchemes.dark = { ...m.dark !== true && m.dark, palette: b.palette }, Sg(b, "light", m.light)), b;
  }
  return !o && !("light" in m) && h === "light" && (m.light = true), xx({ ...p, colorSchemes: m, defaultColorScheme: h, ...typeof s != "boolean" && s }, ...r);
}
const Xf = R0();
function Xi() {
  const a3 = Lf(Xf);
  return a3[Rs] || a3;
}
function Tx({ props: a3, name: r }) {
  return CS({ props: a3, name: r, defaultTheme: Xf, themeId: Rs });
}
function Pf(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
const Qf = (a3) => Pf(a3) && a3 !== "classes", bt = vS({ themeId: Rs, defaultTheme: Xf, rootShouldForwardProp: Qf });
function Ex() {
  return u0;
}
const Yt = $S;
function ge(a3) {
  return LS(a3);
}
function Cx(a3) {
  return ue("MuiSvgIcon", a3);
}
oe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const wx = (a3) => {
  const { color: r, fontSize: o, classes: s } = a3, c = { root: ["root", r !== "inherit" && `color${vt(r)}`, `fontSize${vt(o)}`] };
  return pe(c, Cx, s);
}, Ax = bt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.color !== "inherit" && r[`color${vt(o.color)}`], r[`fontSize${vt(o.fontSize)}`]];
} })(Yt(({ theme: a3 }) => {
  var _a, _b2, _c, _d, _e, _f2, _g2, _h, _i2, _j, _k, _l, _m, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = a3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c = (_b2 = (a3.vars ?? a3).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = a3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g2 = a3.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = a3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((a3.vars ?? a3).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a2, _b3;
    return { props: { color: r }, style: { color: (_b3 = (_a2 = (a3.vars ?? a3).palette) == null ? void 0 : _a2[r]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k = (a3.vars ?? a3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m = (a3.vars ?? a3).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), yf = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSvgIcon" }), { children: c, className: f, color: p = "inherit", component: h = "svg", fontSize: g = "medium", htmlColor: m, inheritViewBox: S = false, titleAccess: b, viewBox: w = "0 0 24 24", ..._ } = s, A = C.isValidElement(c) && c.type === "svg", x = { ...s, color: p, component: h, fontSize: g, instanceFontSize: r.fontSize, inheritViewBox: S, viewBox: w, hasSvgAsChild: A }, N = {};
  S || (N.viewBox = w);
  const D = wx(x);
  return z.jsxs(Ax, { as: h, className: Et(D.root, f), focusable: "false", color: m, "aria-hidden": b ? void 0 : true, role: b ? "img" : void 0, ref: o, ...N, ..._, ...A && c.props, ownerState: x, children: [A ? c.props.children : c, b ? z.jsx("title", { children: b }) : null] });
});
yf.muiName = "SvgIcon";
function la(a3, r) {
  function o(s, c) {
    return z.jsx(yf, { "data-testid": `${r}Icon`, ref: c, ...s, children: a3 });
  }
  return o.muiName = yf.muiName, C.memo(C.forwardRef(o));
}
function M0(a3, r) {
  if (a3 == null) return {};
  var o = {};
  for (var s in a3) if ({}.hasOwnProperty.call(a3, s)) {
    if (r.indexOf(s) !== -1) continue;
    o[s] = a3[s];
  }
  return o;
}
function vf(a3, r) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, vf(a3, r);
}
function O0(a3, r) {
  a3.prototype = Object.create(r.prototype), a3.prototype.constructor = a3, vf(a3, r);
}
var z0 = Yg();
const ls = Gg(z0), xg = { disabled: false }, Es = na.createContext(null);
var Rx = function(r) {
  return r.scrollTop;
}, Ri = "unmounted", Tl = "exited", El = "entering", vr = "entered", bf = "exiting", ra = function(a3) {
  O0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = c, h = p && !p.isMounting ? s.enter : s.appear, g;
    return f.appearStatus = null, s.in ? h ? (g = Tl, f.appearStatus = El) : g = vr : s.unmountOnExit || s.mountOnEnter ? g = Ri : g = Tl, f.state = { status: g }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var p = c.in;
    return p && f.status === Ri ? { status: Tl } : null;
  };
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, o.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var p = this.state.status;
      this.props.in ? p !== El && p !== vr && (f = El) : (p === El || p === vr) && (f = bf);
    }
    this.updateStatus(false, f);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var c = this.props.timeout, f, p, h;
    return f = p = h = c, c != null && typeof c != "number" && (f = c.exit, p = c.enter, h = c.appear !== void 0 ? c.appear : p), { exit: f, enter: p, appear: h };
  }, o.updateStatus = function(c, f) {
    if (c === void 0 && (c = false), f !== null) if (this.cancelNextCallback(), f === El) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var p = this.props.nodeRef ? this.props.nodeRef.current : ls.findDOMNode(this);
        p && Rx(p);
      }
      this.performEnter(c);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Tl && this.setState({ status: Ri });
  }, o.performEnter = function(c) {
    var f = this, p = this.props.enter, h = this.context ? this.context.isMounting : c, g = this.props.nodeRef ? [h] : [ls.findDOMNode(this), h], m = g[0], S = g[1], b = this.getTimeouts(), w = h ? b.appear : b.enter;
    if (!c && !p || xg.disabled) {
      this.safeSetState({ status: vr }, function() {
        f.props.onEntered(m);
      });
      return;
    }
    this.props.onEnter(m, S), this.safeSetState({ status: El }, function() {
      f.props.onEntering(m, S), f.onTransitionEnd(w, function() {
        f.safeSetState({ status: vr }, function() {
          f.props.onEntered(m, S);
        });
      });
    });
  }, o.performExit = function() {
    var c = this, f = this.props.exit, p = this.getTimeouts(), h = this.props.nodeRef ? void 0 : ls.findDOMNode(this);
    if (!f || xg.disabled) {
      this.safeSetState({ status: Tl }, function() {
        c.props.onExited(h);
      });
      return;
    }
    this.props.onExit(h), this.safeSetState({ status: bf }, function() {
      c.props.onExiting(h), c.onTransitionEnd(p.exit, function() {
        c.safeSetState({ status: Tl }, function() {
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
    var p = this.props.nodeRef ? this.props.nodeRef.current : ls.findDOMNode(this), h = c == null && !this.props.addEndListener;
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
    if (c === Ri) return null;
    var f = this.props, p = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var h = M0(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return na.createElement(Es.Provider, { value: null }, typeof p == "function" ? p(c, h) : na.cloneElement(na.Children.only(p), h));
  }, r;
}(na.Component);
ra.contextType = Es;
ra.propTypes = {};
function mr() {
}
ra.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: mr, onEntering: mr, onEntered: mr, onExit: mr, onExiting: mr, onExited: mr };
ra.UNMOUNTED = Ri;
ra.EXITED = Tl;
ra.ENTERING = El;
ra.ENTERED = vr;
ra.EXITING = bf;
function Mx(a3) {
  if (a3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a3;
}
function Kf(a3, r) {
  var o = function(f) {
    return r && C.isValidElement(f) ? r(f) : f;
  }, s = /* @__PURE__ */ Object.create(null);
  return a3 && C.Children.map(a3, function(c) {
    return c;
  }).forEach(function(c) {
    s[c.key] = o(c);
  }), s;
}
function Ox(a3, r) {
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
function wl(a3, r, o) {
  return o[r] != null ? o[r] : a3.props[r];
}
function zx(a3, r) {
  return Kf(a3.children, function(o) {
    return C.cloneElement(o, { onExited: r.bind(null, o), in: true, appear: wl(o, "appear", a3), enter: wl(o, "enter", a3), exit: wl(o, "exit", a3) });
  });
}
function _x(a3, r, o) {
  var s = Kf(a3.children), c = Ox(r, s);
  return Object.keys(c).forEach(function(f) {
    var p = c[f];
    if (C.isValidElement(p)) {
      var h = f in r, g = f in s, m = r[f], S = C.isValidElement(m) && !m.props.in;
      g && (!h || S) ? c[f] = C.cloneElement(p, { onExited: o.bind(null, p), in: true, exit: wl(p, "exit", a3), enter: wl(p, "enter", a3) }) : !g && h && !S ? c[f] = C.cloneElement(p, { in: false }) : g && h && C.isValidElement(m) && (c[f] = C.cloneElement(p, { onExited: o.bind(null, p), in: m.props.in, exit: wl(p, "exit", a3), enter: wl(p, "enter", a3) }));
    }
  }), c;
}
var kx = Object.values || function(a3) {
  return Object.keys(a3).map(function(r) {
    return a3[r];
  });
}, Dx = { component: "div", childFactory: function(r) {
  return r;
} }, Zf = function(a3) {
  O0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = f.handleExited.bind(Mx(f));
    return f.state = { contextValue: { isMounting: true }, handleExited: p, firstRender: true }, f;
  }
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, o.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(c, f) {
    var p = f.children, h = f.handleExited, g = f.firstRender;
    return { children: g ? zx(c, h) : _x(c, p, h), firstRender: false };
  }, o.handleExited = function(c, f) {
    var p = Kf(this.props.children);
    c.key in p || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(h) {
      var g = vs({}, h.children);
      return delete g[c.key], { children: g };
    }));
  }, o.render = function() {
    var c = this.props, f = c.component, p = c.childFactory, h = M0(c, ["component", "childFactory"]), g = this.state.contextValue, m = kx(this.state.children).map(p);
    return delete h.appear, delete h.enter, delete h.exit, f === null ? na.createElement(Es.Provider, { value: g }, m) : na.createElement(Es.Provider, { value: g }, na.createElement(f, h, m));
  }, r;
}(na.Component);
Zf.propTypes = {};
Zf.defaultProps = Dx;
const _0 = (a3) => a3.scrollTop;
function Cs(a3, r) {
  const { timeout: o, easing: s, style: c = {} } = a3;
  return { duration: c.transitionDuration ?? (typeof o == "number" ? o : o[r.mode] || 0), easing: c.transitionTimingFunction ?? (typeof s == "object" ? s[r.mode] : s), delay: c.transitionDelay };
}
function Bx(a3) {
  return ue("MuiPaper", a3);
}
oe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Nx = (a3) => {
  const { square: r, elevation: o, variant: s, classes: c } = a3, f = { root: ["root", s, !r && "rounded", s === "elevation" && `elevation${o}`] };
  return pe(f, Bx, c);
}, jx = bt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], !o.square && r.rounded, o.variant === "elevation" && r[`elevation${o.elevation}`]];
} })(Yt(({ theme: a3 }) => ({ backgroundColor: (a3.vars || a3).palette.background.paper, color: (a3.vars || a3).palette.text.primary, transition: a3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: a3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(a3.vars || a3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Ar = C.forwardRef(function(r, o) {
  var _a;
  const s = ge({ props: r, name: "MuiPaper" }), c = Xi(), { className: f, component: p = "div", elevation: h = 1, square: g = false, variant: m = "elevation", ...S } = s, b = { ...s, component: p, elevation: h, square: g, variant: m }, w = Nx(b);
  return z.jsx(jx, { as: p, ownerState: b, className: Et(w.root, f), ref: o, ...S, style: { ...m === "elevation" && { "--Paper-shadow": (c.vars || c).shadows[h], ...c.vars && { "--Paper-overlay": (_a = c.vars.overlays) == null ? void 0 : _a[h] }, ...!c.vars && c.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Ra("#fff", gf(h))}, ${Ra("#fff", gf(h))})` } }, ...S.style } });
});
function jn(a3, r) {
  const { className: o, elementType: s, ownerState: c, externalForwardedProps: f, internalForwardedProps: p, shouldForwardComponentProp: h = false, ...g } = r, { component: m, slots: S = { [a3]: void 0 }, slotProps: b = { [a3]: void 0 }, ...w } = f, _ = S[a3] || s, A = x0(b[a3], c), { props: { component: x, ...N }, internalRef: D } = S0({ className: o, ...g, externalForwardedProps: a3 === "root" ? w : void 0, externalSlotProps: A }), q = Hn(D, A == null ? void 0 : A.ref, r.ref), B = a3 === "root" ? x || m : x, H = b0(_, { ...a3 === "root" && !m && !S[a3] && p, ...a3 !== "root" && !S[a3] && p, ...N, ...B && !h && { as: B }, ...B && h && { component: B }, ref: q }, c);
  return [_, H];
}
class ws {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new ws();
  }
  static use() {
    const r = v0(ws.create).current, [o, s] = C.useState(false);
    return r.shouldMount = o, r.setShouldMount = s, C.useEffect(r.mountEffect, [o]), r;
  }
  mount() {
    return this.mounted || (this.mounted = Hx(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Ux() {
  return ws.use();
}
function Hx() {
  let a3, r;
  const o = new Promise((s, c) => {
    a3 = s, r = c;
  });
  return o.resolve = a3, o.reject = r, o;
}
function Lx(a3) {
  const { className: r, classes: o, pulsate: s = false, rippleX: c, rippleY: f, rippleSize: p, in: h, onExited: g, timeout: m } = a3, [S, b] = C.useState(false), w = Et(r, o.ripple, o.rippleVisible, s && o.ripplePulsate), _ = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c }, A = Et(o.child, S && o.childLeaving, s && o.childPulsate);
  return !h && !S && b(true), C.useEffect(() => {
    if (!h && g != null) {
      const x = setTimeout(g, m);
      return () => {
        clearTimeout(x);
      };
    }
  }, [g, h, m]), z.jsx("span", { className: w, style: _, children: z.jsx("span", { className: A }) });
}
const Bn = oe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Sf = 550, $x = 80, qx = $i`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Gx = $i`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Yx = $i`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Vx = bt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), Xx = bt(Lx, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Bn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qx};
    animation-duration: ${Sf}ms;
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
    animation-name: ${Gx};
    animation-duration: ${Sf}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  & .${Bn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Yx};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Px = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTouchRipple" }), { center: c = false, classes: f = {}, className: p, ...h } = s, [g, m] = C.useState([]), S = C.useRef(0), b = C.useRef(null);
  C.useEffect(() => {
    b.current && (b.current(), b.current = null);
  }, [g]);
  const w = C.useRef(false), _ = Gf(), A = C.useRef(null), x = C.useRef(null), N = C.useCallback((H) => {
    const { pulsate: R, rippleX: V, rippleY: Z, rippleSize: it, cb: G } = H;
    m((y) => [...y, z.jsx(Xx, { classes: { ripple: Et(f.ripple, Bn.ripple), rippleVisible: Et(f.rippleVisible, Bn.rippleVisible), ripplePulsate: Et(f.ripplePulsate, Bn.ripplePulsate), child: Et(f.child, Bn.child), childLeaving: Et(f.childLeaving, Bn.childLeaving), childPulsate: Et(f.childPulsate, Bn.childPulsate) }, timeout: Sf, pulsate: R, rippleX: V, rippleY: Z, rippleSize: it }, S.current)]), S.current += 1, b.current = G;
  }, [f]), D = C.useCallback((H = {}, R = {}, V = () => {
  }) => {
    const { pulsate: Z = false, center: it = c || R.pulsate, fakeElement: G = false } = R;
    if ((H == null ? void 0 : H.type) === "mousedown" && w.current) {
      w.current = false;
      return;
    }
    (H == null ? void 0 : H.type) === "touchstart" && (w.current = true);
    const y = G ? null : x.current, P = y ? y.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let lt, at, I;
    if (it || H === void 0 || H.clientX === 0 && H.clientY === 0 || !H.clientX && !H.touches) lt = Math.round(P.width / 2), at = Math.round(P.height / 2);
    else {
      const { clientX: Y, clientY: U } = H.touches && H.touches.length > 0 ? H.touches[0] : H;
      lt = Math.round(Y - P.left), at = Math.round(U - P.top);
    }
    if (it) I = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const Y = Math.max(Math.abs((y ? y.clientWidth : 0) - lt), lt) * 2 + 2, U = Math.max(Math.abs((y ? y.clientHeight : 0) - at), at) * 2 + 2;
      I = Math.sqrt(Y ** 2 + U ** 2);
    }
    (H == null ? void 0 : H.touches) ? A.current === null && (A.current = () => {
      N({ pulsate: Z, rippleX: lt, rippleY: at, rippleSize: I, cb: V });
    }, _.start($x, () => {
      A.current && (A.current(), A.current = null);
    })) : N({ pulsate: Z, rippleX: lt, rippleY: at, rippleSize: I, cb: V });
  }, [c, N, _]), q = C.useCallback(() => {
    D({}, { pulsate: true });
  }, [D]), B = C.useCallback((H, R) => {
    if (_.clear(), (H == null ? void 0 : H.type) === "touchend" && A.current) {
      A.current(), A.current = null, _.start(0, () => {
        B(H, R);
      });
      return;
    }
    A.current = null, m((V) => V.length > 0 ? V.slice(1) : V), b.current = R;
  }, [_]);
  return C.useImperativeHandle(o, () => ({ pulsate: q, start: D, stop: B }), [q, D, B]), z.jsx(Vx, { className: Et(Bn.root, f.root, p), ref: x, ...h, children: z.jsx(Zf, { component: null, exit: true, children: g }) });
});
function Qx(a3) {
  return ue("MuiButtonBase", a3);
}
const Kx = oe("MuiButtonBase", ["root", "disabled", "focusVisible"]), Zx = (a3) => {
  const { disabled: r, focusVisible: o, focusVisibleClassName: s, classes: c } = a3, p = pe({ root: ["root", r && "disabled", o && "focusVisible"] }, Qx, c);
  return o && s && (p.root += ` ${s}`), p;
}, Fx = bt("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (a3, r) => r.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${Kx.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), Pi = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiButtonBase" }), { action: c, centerRipple: f = false, children: p, className: h, component: g = "button", disabled: m = false, disableRipple: S = false, disableTouchRipple: b = false, focusRipple: w = false, focusVisibleClassName: _, LinkComponent: A = "a", onBlur: x, onClick: N, onContextMenu: D, onDragLeave: q, onFocus: B, onFocusVisible: H, onKeyDown: R, onKeyUp: V, onMouseDown: Z, onMouseLeave: it, onMouseUp: G, onTouchEnd: y, onTouchMove: P, onTouchStart: lt, tabIndex: at = 0, TouchRippleProps: I, touchRippleRef: Y, type: U, ...J } = s, W = C.useRef(null), et = Ux(), E = Hn(et.ref, Y), [L, ot] = C.useState(false);
  m && L && ot(false), C.useImperativeHandle(c, () => ({ focusVisible: () => {
    ot(true), W.current.focus();
  } }), []);
  const st = et.shouldMount && !S && !m;
  C.useEffect(() => {
    L && w && !S && et.pulsate();
  }, [S, w, L, et]);
  const rt = Ca(et, "start", Z, b), St = Ca(et, "stop", D, b), nt = Ca(et, "stop", q, b), yt = Ca(et, "stop", G, b), dt = Ca(et, "stop", (Tt) => {
    L && Tt.preventDefault(), it && it(Tt);
  }, b), Ct = Ca(et, "start", lt, b), Rt = Ca(et, "stop", y, b), ce = Ca(et, "stop", P, b), It = Ca(et, "stop", (Tt) => {
    Ts(Tt.target) || ot(false), x && x(Tt);
  }, false), $t = tn((Tt) => {
    W.current || (W.current = Tt.currentTarget), Ts(Tt.target) && (ot(true), H && H(Tt)), B && B(Tt);
  }), Oe = () => {
    const Tt = W.current;
    return g && g !== "button" && !(Tt.tagName === "A" && Tt.href);
  }, bn = tn((Tt) => {
    w && !Tt.repeat && L && Tt.key === " " && et.stop(Tt, () => {
      et.start(Tt);
    }), Tt.target === Tt.currentTarget && Oe() && Tt.key === " " && Tt.preventDefault(), R && R(Tt), Tt.target === Tt.currentTarget && Oe() && Tt.key === "Enter" && !m && (Tt.preventDefault(), N && N(Tt));
  }), Ge = tn((Tt) => {
    w && Tt.key === " " && L && !Tt.defaultPrevented && et.stop(Tt, () => {
      et.pulsate(Tt);
    }), V && V(Tt), N && Tt.target === Tt.currentTarget && Oe() && Tt.key === " " && !Tt.defaultPrevented && N(Tt);
  });
  let Ht = g;
  Ht === "button" && (J.href || J.to) && (Ht = A);
  const fe = {};
  Ht === "button" ? (fe.type = U === void 0 ? "button" : U, fe.disabled = m) : (!J.href && !J.to && (fe.role = "button"), m && (fe["aria-disabled"] = m));
  const sn = Hn(o, W), je = { ...s, centerRipple: f, component: g, disabled: m, disableRipple: S, disableTouchRipple: b, focusRipple: w, tabIndex: at, focusVisible: L }, en = Zx(je);
  return z.jsxs(Fx, { as: Ht, className: Et(en.root, h), ownerState: je, onBlur: It, onClick: N, onContextMenu: St, onFocus: $t, onKeyDown: bn, onKeyUp: Ge, onMouseDown: rt, onMouseLeave: dt, onMouseUp: yt, onDragLeave: nt, onTouchEnd: Rt, onTouchMove: ce, onTouchStart: Ct, ref: sn, tabIndex: m ? -1 : at, type: U, ...fe, ...J, children: [p, st ? z.jsx(Px, { ref: E, center: f, ...I }) : null] });
});
function Ca(a3, r, o, s = false) {
  return tn((c) => (o && o(c), s || a3[r](c), true));
}
function Wx(a3) {
  return typeof a3.main == "string";
}
function Jx(a3, r = []) {
  if (!Wx(a3)) return false;
  for (const o of r) if (!a3.hasOwnProperty(o) || typeof a3[o] != "string") return false;
  return true;
}
function vn(a3 = []) {
  return ([, r]) => r && Jx(r, a3);
}
function Ix(a3) {
  return ue("MuiAlert", a3);
}
const Tg = oe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function t2(a3) {
  return ue("MuiCircularProgress", a3);
}
oe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Fa = 44, xf = $i`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Tf = $i`
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
`, e2 = typeof xf != "string" ? Df`
        animation: ${xf} 1.4s linear infinite;
      ` : null, n2 = typeof Tf != "string" ? Df`
        animation: ${Tf} 1.4s ease-in-out infinite;
      ` : null, a2 = (a3) => {
  const { classes: r, variant: o, color: s, disableShrink: c } = a3, f = { root: ["root", o, `color${vt(s)}`], svg: ["svg"], circle: ["circle", `circle${vt(o)}`, c && "circleDisableShrink"] };
  return pe(f, t2, r);
}, l2 = bt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`color${vt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: e2 || { animation: `${xf} 1.4s linear infinite` } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } }))] }))), r2 = bt("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (a3, r) => r.svg })({ display: "block" }), i2 = bt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.circle, r[`circle${vt(o.variant)}`], o.disableShrink && r.circleDisableShrink];
} })(Yt(({ theme: a3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: n2 || { animation: `${Tf} 1.4s ease-in-out infinite` } }] }))), o2 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiCircularProgress" }), { className: c, color: f = "primary", disableShrink: p = false, size: h = 40, style: g, thickness: m = 3.6, value: S = 0, variant: b = "indeterminate", ...w } = s, _ = { ...s, color: f, disableShrink: p, size: h, thickness: m, value: S, variant: b }, A = a2(_), x = {}, N = {}, D = {};
  if (b === "determinate") {
    const q = 2 * Math.PI * ((Fa - m) / 2);
    x.strokeDasharray = q.toFixed(3), D["aria-valuenow"] = Math.round(S), x.strokeDashoffset = `${((100 - S) / 100 * q).toFixed(3)}px`, N.transform = "rotate(-90deg)";
  }
  return z.jsx(l2, { className: Et(A.root, c), style: { width: h, height: h, ...N, ...g }, ownerState: _, ref: o, role: "progressbar", ...D, ...w, children: z.jsx(r2, { className: A.svg, ownerState: _, viewBox: `${Fa / 2} ${Fa / 2} ${Fa} ${Fa}`, children: z.jsx(i2, { className: A.circle, style: x, ownerState: _, cx: Fa, cy: Fa, r: (Fa - m) / 2, fill: "none", strokeWidth: m }) }) });
});
function s2(a3) {
  return ue("MuiIconButton", a3);
}
const Eg = oe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), u2 = (a3) => {
  const { classes: r, disabled: o, color: s, edge: c, size: f, loading: p } = a3, h = { root: ["root", p && "loading", o && "disabled", s !== "default" && `color${vt(s)}`, c && `edge${vt(c)}`, `size${vt(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return pe(h, s2, r);
}, c2 = bt(Pi, { name: "MuiIconButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.loading && r.loading, o.color !== "default" && r[`color${vt(o.color)}`], o.edge && r[`edge${vt(o.edge)}`], r[`size${vt(o.size)}`]];
} })(Yt(({ theme: a3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: a3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (a3.vars || a3).palette.action.active, transition: a3.transitions.create("background-color", { duration: a3.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette.action.active, a3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Yt(({ theme: a3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${(a3.vars || a3).palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra((a3.vars || a3).palette[r].main, a3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: a3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: a3.typography.pxToRem(28) } }], [`&.${Eg.disabled}`]: { backgroundColor: "transparent", color: (a3.vars || a3).palette.action.disabled }, [`&.${Eg.loading}`]: { color: "transparent" } }))), f2 = bt("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (a3, r) => r.loadingIndicator })(({ theme: a3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (a3.vars || a3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), d2 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiIconButton" }), { edge: c = false, children: f, className: p, color: h = "default", disabled: g = false, disableFocusRipple: m = false, size: S = "medium", id: b, loading: w = null, loadingIndicator: _, ...A } = s, x = zS(b), N = _ ?? z.jsx(o2, { "aria-labelledby": x, color: "inherit", size: 16 }), D = { ...s, edge: c, color: h, disabled: g, disableFocusRipple: m, loading: w, loadingIndicator: N, size: S }, q = u2(D);
  return z.jsxs(c2, { id: w ? x : b, className: Et(q.root, p), centerRipple: true, focusRipple: !m, disabled: g || w, ref: o, ...A, ownerState: D, children: [typeof w == "boolean" && z.jsx("span", { className: q.loadingWrapper, style: { display: "contents" }, children: z.jsx(f2, { className: q.loadingIndicator, ownerState: D, children: w && N }) }), f] });
}), p2 = la(z.jsx("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), h2 = la(z.jsx("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), m2 = la(z.jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), g2 = la(z.jsx("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), y2 = la(z.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), v2 = (a3) => {
  const { variant: r, color: o, severity: s, classes: c } = a3, f = { root: ["root", `color${vt(o || s)}`, `${r}${vt(o || s)}`, `${r}`], icon: ["icon"], message: ["message"], action: ["action"] };
  return pe(f, Ix, c);
}, b2 = bt(Ar, { name: "MuiAlert", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`${o.variant}${vt(o.color || o.severity)}`]];
} })(Yt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? Ia : tl, o = a3.palette.mode === "light" ? tl : Ia;
  return { ...a3.typography.body2, backgroundColor: "transparent", display: "flex", padding: "6px 16px", variants: [...Object.entries(a3.palette).filter(vn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "standard" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), backgroundColor: a3.vars ? a3.vars.palette.Alert[`${s}StandardBg`] : o(a3.palette[s].light, 0.9), [`& .${Tg.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(vn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "outlined" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), border: `1px solid ${(a3.vars || a3).palette[s].light}`, [`& .${Tg.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(vn(["dark"])).map(([s]) => ({ props: { colorSeverity: s, variant: "filled" }, style: { fontWeight: a3.typography.fontWeightMedium, ...a3.vars ? { color: a3.vars.palette.Alert[`${s}FilledColor`], backgroundColor: a3.vars.palette.Alert[`${s}FilledBg`] } : { backgroundColor: a3.palette.mode === "dark" ? a3.palette[s].dark : a3.palette[s].main, color: a3.palette.getContrastText(a3.palette[s].main) } } }))] };
})), S2 = bt("div", { name: "MuiAlert", slot: "Icon", overridesResolver: (a3, r) => r.icon })({ marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: 0.9 }), x2 = bt("div", { name: "MuiAlert", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0", minWidth: 0, overflow: "auto" }), T2 = bt("div", { name: "MuiAlert", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8 }), Cg = { success: z.jsx(p2, { fontSize: "inherit" }), warning: z.jsx(h2, { fontSize: "inherit" }), error: z.jsx(m2, { fontSize: "inherit" }), info: z.jsx(g2, { fontSize: "inherit" }) }, k0 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAlert" }), { action: c, children: f, className: p, closeText: h = "Close", color: g, components: m = {}, componentsProps: S = {}, icon: b, iconMapping: w = Cg, onClose: _, role: A = "alert", severity: x = "success", slotProps: N = {}, slots: D = {}, variant: q = "standard", ...B } = s, H = { ...s, color: g, severity: x, variant: q, colorSeverity: g || x }, R = v2(H), V = { slots: { closeButton: m.CloseButton, closeIcon: m.CloseIcon, ...D }, slotProps: { ...S, ...N } }, [Z, it] = jn("root", { ref: o, shouldForwardComponentProp: true, className: Et(R.root, p), elementType: b2, externalForwardedProps: { ...V, ...B }, ownerState: H, additionalProps: { role: A, elevation: 0 } }), [G, y] = jn("icon", { className: R.icon, elementType: S2, externalForwardedProps: V, ownerState: H }), [P, lt] = jn("message", { className: R.message, elementType: x2, externalForwardedProps: V, ownerState: H }), [at, I] = jn("action", { className: R.action, elementType: T2, externalForwardedProps: V, ownerState: H }), [Y, U] = jn("closeButton", { elementType: d2, externalForwardedProps: V, ownerState: H }), [J, W] = jn("closeIcon", { elementType: y2, externalForwardedProps: V, ownerState: H });
  return z.jsxs(Z, { ...it, children: [b !== false ? z.jsx(G, { ...y, children: b || w[x] || Cg[x] }) : null, z.jsx(P, { ...lt, children: f }), c != null ? z.jsx(at, { ...I, children: c }) : null, c == null && _ ? z.jsx(at, { ...I, children: z.jsx(Y, { size: "small", "aria-label": h, title: h, color: "inherit", onClick: _, ...U, children: z.jsx(J, { fontSize: "small", ...W }) }) }) : null] });
});
function E2(a3) {
  return ue("MuiTypography", a3);
}
oe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const C2 = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, w2 = Ex(), A2 = (a3) => {
  const { align: r, gutterBottom: o, noWrap: s, paragraph: c, variant: f, classes: p } = a3, h = { root: ["root", f, a3.align !== "inherit" && `align${vt(r)}`, o && "gutterBottom", s && "noWrap", c && "paragraph"] };
  return pe(h, E2, p);
}, R2 = bt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.variant && r[o.variant], o.align !== "inherit" && r[`align${vt(o.align)}`], o.noWrap && r.noWrap, o.gutterBottom && r.gutterBottom, o.paragraph && r.paragraph];
} })(Yt(({ theme: a3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(a3.typography).filter(([r, o]) => r !== "inherit" && o && typeof o == "object").map(([r, o]) => ({ props: { variant: r }, style: o })), ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(((_a = a3.palette) == null ? void 0 : _a.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${vt(r)}` }, style: { color: (a3.vars || a3).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), wg = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, Er = C.forwardRef(function(r, o) {
  const { color: s, ...c } = ge({ props: r, name: "MuiTypography" }), f = !C2[s], p = w2({ ...c, ...f && { color: s } }), { align: h = "inherit", className: g, component: m, gutterBottom: S = false, noWrap: b = false, paragraph: w = false, variant: _ = "body1", variantMapping: A = wg, ...x } = p, N = { ...p, align: h, color: s, className: g, component: m, gutterBottom: S, noWrap: b, paragraph: w, variant: _, variantMapping: A }, D = m || (w ? "p" : A[_] || wg[_]) || "span", q = A2(N);
  return z.jsx(R2, { as: D, ref: o, className: Et(q.root, g), ...x, ownerState: N, style: { ...h !== "inherit" && { "--Typography-textAlign": h }, ...x.style } });
});
function M2(a3) {
  return ue("MuiAppBar", a3);
}
oe("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const O2 = (a3) => {
  const { color: r, position: o, classes: s } = a3, c = { root: ["root", `color${vt(r)}`, `position${vt(o)}`] };
  return pe(c, M2, s);
}, Ag = (a3, r) => a3 ? `${a3 == null ? void 0 : a3.replace(")", "")}, ${r})` : r, z2 = bt(Ar, { name: "MuiAppBar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`position${vt(o.position)}`], r[`color${vt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", flexShrink: 0, variants: [{ props: { position: "fixed" }, style: { position: "fixed", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0, "@media print": { position: "absolute" } } }, { props: { position: "absolute" }, style: { position: "absolute", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "sticky" }, style: { position: "sticky", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "static" }, style: { position: "static" } }, { props: { position: "relative" }, style: { position: "relative" } }, { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } }, { props: { color: "default" }, style: { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[100], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[100]), ...a3.applyStyles("dark", { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[900], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[900]) }) } }, ...Object.entries(a3.palette).filter(vn(["contrastText"])).map(([r]) => ({ props: { color: r }, style: { "--AppBar-background": (a3.vars ?? a3).palette[r].main, "--AppBar-color": (a3.vars ?? a3).palette[r].contrastText } })), { props: (r) => r.enableColorOnDark === true && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" } }, { props: (r) => r.enableColorOnDark === false && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundColor: a3.vars ? Ag(a3.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null, color: a3.vars ? Ag(a3.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null }) } }, { props: { color: "transparent" }, style: { "--AppBar-background": "transparent", "--AppBar-color": "inherit", backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundImage: "none" }) } }] }))), _2 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAppBar" }), { className: c, color: f = "primary", enableColorOnDark: p = false, position: h = "fixed", ...g } = s, m = { ...s, color: f, position: h, enableColorOnDark: p }, S = O2(m);
  return z.jsx(z2, { square: true, component: "header", ownerState: m, elevation: 4, className: Et(S.root, c, h === "fixed" && "mui-fixed"), ref: o, ...g });
});
function k2(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
const D2 = C.forwardRef(function(r, o) {
  const { children: s, container: c, disablePortal: f = false } = r, [p, h] = C.useState(null), g = Hn(C.isValidElement(s) ? Vi(s) : null, o);
  if (Hi(() => {
    f || h(k2(c) || document.body);
  }, [c, f]), Hi(() => {
    if (p && !f) return hf(o, p), () => {
      hf(o, null);
    };
  }, [o, p, f]), f) {
    if (C.isValidElement(s)) {
      const m = { ref: g };
      return C.cloneElement(s, m);
    }
    return s;
  }
  return p && z0.createPortal(s, p);
});
function ys(a3) {
  return typeof a3 == "string";
}
function D0({ props: a3, states: r, muiFormControl: o }) {
  return r.reduce((s, c) => (s[c] = a3[c], o && typeof a3[c] > "u" && (s[c] = o[c]), s), {});
}
const B2 = C.createContext(void 0);
function Ff() {
  return C.useContext(B2);
}
const N2 = la(z.jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function j2(a3) {
  return ue("MuiAvatar", a3);
}
oe("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const U2 = (a3) => {
  const { classes: r, variant: o, colorDefault: s } = a3;
  return pe({ root: ["root", o, s && "colorDefault"], img: ["img"], fallback: ["fallback"] }, j2, r);
}, H2 = bt("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], o.colorDefault && r.colorDefault];
} })(Yt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: a3.typography.fontFamily, fontSize: a3.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (a3.vars || a3).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (a3.vars || a3).palette.background.default, ...a3.vars ? { backgroundColor: a3.vars.palette.Avatar.defaultBg } : { backgroundColor: a3.palette.grey[400], ...a3.applyStyles("dark", { backgroundColor: a3.palette.grey[600] }) } } }] }))), L2 = bt("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (a3, r) => r.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), $2 = bt(N2, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (a3, r) => r.fallback })({ width: "75%", height: "75%" });
function q2({ crossOrigin: a3, referrerPolicy: r, src: o, srcSet: s }) {
  const [c, f] = C.useState(false);
  return C.useEffect(() => {
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
const G2 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiAvatar" }), { alt: c, children: f, className: p, component: h = "div", slots: g = {}, slotProps: m = {}, imgProps: S, sizes: b, src: w, srcSet: _, variant: A = "circular", ...x } = s;
  let N = null;
  const D = { ...s, component: h, variant: A }, q = q2({ ...S, ...typeof m.img == "function" ? m.img(D) : m.img, src: w, srcSet: _ }), B = w || _, H = B && q !== "error";
  D.colorDefault = !H, delete D.ownerState;
  const R = U2(D), [V, Z] = jn("img", { className: R.img, elementType: L2, externalForwardedProps: { slots: g, slotProps: { img: { ...S, ...m.img } } }, additionalProps: { alt: c, src: w, srcSet: _, sizes: b }, ownerState: D });
  return H ? N = z.jsx(V, { ...Z }) : f || f === 0 ? N = f : B && c ? N = c[0] : N = z.jsx($2, { ownerState: D, className: R.fallback }), z.jsx(H2, { as: h, className: Et(R.root, p), ref: o, ...x, ownerState: D, children: N });
}), Y2 = { entering: { opacity: 1 }, entered: { opacity: 1 } }, V2 = C.forwardRef(function(r, o) {
  const s = Xi(), c = { enter: s.transitions.duration.enteringScreen, exit: s.transitions.duration.leavingScreen }, { addEndListener: f, appear: p = true, children: h, easing: g, in: m, onEnter: S, onEntered: b, onEntering: w, onExit: _, onExited: A, onExiting: x, style: N, timeout: D = c, TransitionComponent: q = ra, ...B } = r, H = C.useRef(null), R = Hn(H, Vi(h), o), V = (I) => (Y) => {
    if (I) {
      const U = H.current;
      Y === void 0 ? I(U) : I(U, Y);
    }
  }, Z = V(w), it = V((I, Y) => {
    _0(I);
    const U = Cs({ style: N, timeout: D, easing: g }, { mode: "enter" });
    I.style.webkitTransition = s.transitions.create("opacity", U), I.style.transition = s.transitions.create("opacity", U), S && S(I, Y);
  }), G = V(b), y = V(x), P = V((I) => {
    const Y = Cs({ style: N, timeout: D, easing: g }, { mode: "exit" });
    I.style.webkitTransition = s.transitions.create("opacity", Y), I.style.transition = s.transitions.create("opacity", Y), _ && _(I);
  }), lt = V(A), at = (I) => {
    f && f(H.current, I);
  };
  return z.jsx(q, { appear: p, in: m, nodeRef: H, onEnter: it, onEntered: G, onEntering: Z, onExit: P, onExited: lt, onExiting: y, addEndListener: at, timeout: D, ...B, children: (I, { ownerState: Y, ...U }) => C.cloneElement(h, { style: { opacity: 0, visibility: I === "exited" && !m ? "hidden" : void 0, ...Y2[I], ...N, ...h.props.style }, ref: R, ...U }) });
});
function X2(a3) {
  return ue("MuiBackdrop", a3);
}
oe("MuiBackdrop", ["root", "invisible"]);
const P2 = (a3) => {
  const { classes: r, invisible: o } = a3;
  return pe({ root: ["root", o && "invisible"] }, X2, r);
}, Q2 = bt("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.invisible && r.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), K2 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiBackdrop" }), { children: c, className: f, component: p = "div", invisible: h = false, open: g, components: m = {}, componentsProps: S = {}, slotProps: b = {}, slots: w = {}, TransitionComponent: _, transitionDuration: A, ...x } = s, N = { ...s, component: p, invisible: h }, D = P2(N), q = { transition: _, root: m.Root, ...w }, B = { ...S, ...b }, H = { slots: q, slotProps: B }, [R, V] = jn("root", { elementType: Q2, externalForwardedProps: H, className: Et(D.root, f), ownerState: N }), [Z, it] = jn("transition", { elementType: V2, externalForwardedProps: H, ownerState: N });
  return z.jsx(Z, { in: g, timeout: A, ...x, ...it, children: z.jsx(R, { "aria-hidden": true, ...V, classes: D, ref: o, children: c }) });
}), Z2 = oe("MuiBox", ["root"]), F2 = R0(), wa = pS({ themeId: Rs, defaultTheme: F2, defaultClassName: Z2.root, generateClassName: c0.generate });
function W2(a3) {
  return ue("PrivateSwitchBase", a3);
}
oe("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const J2 = (a3) => {
  const { classes: r, checked: o, disabled: s, edge: c } = a3, f = { root: ["root", o && "checked", s && "disabled", c && `edge${vt(c)}`], input: ["input"] };
  return pe(f, W2, r);
}, I2 = bt(Pi)({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "start" && r.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "end" && r.size !== "small", style: { marginRight: -12 } }] }), tT = bt("input", { shouldForwardProp: Qf })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), eT = C.forwardRef(function(r, o) {
  const { autoFocus: s, checked: c, checkedIcon: f, className: p, defaultChecked: h, disabled: g, disableFocusRipple: m = false, edge: S = false, icon: b, id: w, inputProps: _, inputRef: A, name: x, onBlur: N, onChange: D, onFocus: q, readOnly: B, required: H = false, tabIndex: R, type: V, value: Z, ...it } = r, [G, y] = y0({ controlled: c, default: !!h, name: "SwitchBase", state: "checked" }), P = Ff(), lt = (et) => {
    q && q(et), P && P.onFocus && P.onFocus(et);
  }, at = (et) => {
    N && N(et), P && P.onBlur && P.onBlur(et);
  }, I = (et) => {
    if (et.nativeEvent.defaultPrevented) return;
    const E = et.target.checked;
    y(E), D && D(et, E);
  };
  let Y = g;
  P && typeof Y > "u" && (Y = P.disabled);
  const U = V === "checkbox" || V === "radio", J = { ...r, checked: G, disabled: Y, disableFocusRipple: m, edge: S }, W = J2(J);
  return z.jsxs(I2, { component: "span", className: Et(W.root, p), centerRipple: true, focusRipple: !m, disabled: Y, tabIndex: null, role: void 0, onFocus: lt, onBlur: at, ownerState: J, ref: o, ...it, children: [z.jsx(tT, { autoFocus: s, checked: c, defaultChecked: h, className: W.input, disabled: Y, id: U ? w : void 0, name: x, onChange: I, readOnly: B, ref: A, required: H, ownerState: J, tabIndex: R, type: V, ...V === "checkbox" && Z === void 0 ? {} : { value: Z }, ..._ }), G ? f : b] });
});
function Rg(a3) {
  return a3.substring(2).toLowerCase();
}
function nT(a3, r) {
  return r.documentElement.clientWidth < a3.clientX || r.documentElement.clientHeight < a3.clientY;
}
function aT(a3) {
  const { children: r, disableReactTree: o = false, mouseEvent: s = "onClick", onClickAway: c, touchEvent: f = "onTouchEnd" } = a3, p = C.useRef(false), h = C.useRef(null), g = C.useRef(false), m = C.useRef(false);
  C.useEffect(() => (setTimeout(() => {
    g.current = true;
  }, 0), () => {
    g.current = false;
  }), []);
  const S = Hn(Vi(r), h), b = tn((A) => {
    const x = m.current;
    m.current = false;
    const N = Ie(h.current);
    if (!g.current || !h.current || "clientX" in A && nT(A, N)) return;
    if (p.current) {
      p.current = false;
      return;
    }
    let D;
    A.composedPath ? D = A.composedPath().includes(h.current) : D = !N.documentElement.contains(A.target) || h.current.contains(A.target), !D && (o || !x) && c(A);
  }), w = (A) => (x) => {
    m.current = true;
    const N = r.props[A];
    N && N(x);
  }, _ = { ref: S };
  return f !== false && (_[f] = w(f)), C.useEffect(() => {
    if (f !== false) {
      const A = Rg(f), x = Ie(h.current), N = () => {
        p.current = true;
      };
      return x.addEventListener(A, b), x.addEventListener("touchmove", N), () => {
        x.removeEventListener(A, b), x.removeEventListener("touchmove", N);
      };
    }
  }, [b, f]), s !== false && (_[s] = w(s)), C.useEffect(() => {
    if (s !== false) {
      const A = Rg(s), x = Ie(h.current);
      return x.addEventListener(A, b), () => {
        x.removeEventListener(A, b);
      };
    }
  }, [b, s]), C.cloneElement(r, _);
}
function lT(a3) {
  const r = Ie(a3);
  return r.body === a3 ? Tr(a3).innerWidth > r.documentElement.clientWidth : a3.scrollHeight > a3.clientHeight;
}
function _i(a3, r) {
  r ? a3.setAttribute("aria-hidden", "true") : a3.removeAttribute("aria-hidden");
}
function Mg(a3) {
  return parseInt(Tr(a3).getComputedStyle(a3).paddingRight, 10) || 0;
}
function rT(a3) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a3.tagName), s = a3.tagName === "INPUT" && a3.getAttribute("type") === "hidden";
  return o || s;
}
function Og(a3, r, o, s, c) {
  const f = [r, o, ...s];
  [].forEach.call(a3.children, (p) => {
    const h = !f.includes(p), g = !rT(p);
    h && g && _i(p, c);
  });
}
function lf(a3, r) {
  let o = -1;
  return a3.some((s, c) => r(s) ? (o = c, true) : false), o;
}
function iT(a3, r) {
  const o = [], s = a3.container;
  if (!r.disableScrollLock) {
    if (lT(s)) {
      const p = DS(Tr(s));
      o.push({ value: s.style.paddingRight, property: "padding-right", el: s }), s.style.paddingRight = `${Mg(s) + p}px`;
      const h = Ie(s).querySelectorAll(".mui-fixed");
      [].forEach.call(h, (g) => {
        o.push({ value: g.style.paddingRight, property: "padding-right", el: g }), g.style.paddingRight = `${Mg(g) + p}px`;
      });
    }
    let f;
    if (s.parentNode instanceof DocumentFragment) f = Ie(s).body;
    else {
      const p = s.parentElement, h = Tr(s);
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
function oT(a3) {
  const r = [];
  return [].forEach.call(a3.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && r.push(o);
  }), r;
}
class sT {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, o) {
    let s = this.modals.indexOf(r);
    if (s !== -1) return s;
    s = this.modals.length, this.modals.push(r), r.modalRef && _i(r.modalRef, false);
    const c = oT(o);
    Og(o, r.mount, r.modalRef, c, true);
    const f = lf(this.containers, (p) => p.container === o);
    return f !== -1 ? (this.containers[f].modals.push(r), s) : (this.containers.push({ modals: [r], container: o, restore: null, hiddenSiblings: c }), s);
  }
  mount(r, o) {
    const s = lf(this.containers, (f) => f.modals.includes(r)), c = this.containers[s];
    c.restore || (c.restore = iT(c, o));
  }
  remove(r, o = true) {
    const s = this.modals.indexOf(r);
    if (s === -1) return s;
    const c = lf(this.containers, (p) => p.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(s, 1), f.modals.length === 0) f.restore && f.restore(), r.modalRef && _i(r.modalRef, o), Og(f.container, r.mount, r.modalRef, f.hiddenSiblings, false), this.containers.splice(c, 1);
    else {
      const p = f.modals[f.modals.length - 1];
      p.modalRef && _i(p.modalRef, false);
    }
    return s;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const uT = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function cT(a3) {
  const r = parseInt(a3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a3.contentEditable === "true" || (a3.nodeName === "AUDIO" || a3.nodeName === "VIDEO" || a3.nodeName === "DETAILS") && a3.getAttribute("tabindex") === null ? 0 : a3.tabIndex : r;
}
function fT(a3) {
  if (a3.tagName !== "INPUT" || a3.type !== "radio" || !a3.name) return false;
  const r = (s) => a3.ownerDocument.querySelector(`input[type="radio"]${s}`);
  let o = r(`[name="${a3.name}"]:checked`);
  return o || (o = r(`[name="${a3.name}"]`)), o !== a3;
}
function dT(a3) {
  return !(a3.disabled || a3.tagName === "INPUT" && a3.type === "hidden" || fT(a3));
}
function pT(a3) {
  const r = [], o = [];
  return Array.from(a3.querySelectorAll(uT)).forEach((s, c) => {
    const f = cT(s);
    f === -1 || !dT(s) || (f === 0 ? r.push(s) : o.push({ documentOrder: c, tabIndex: f, node: s }));
  }), o.sort((s, c) => s.tabIndex === c.tabIndex ? s.documentOrder - c.documentOrder : s.tabIndex - c.tabIndex).map((s) => s.node).concat(r);
}
function hT() {
  return true;
}
function mT(a3) {
  const { children: r, disableAutoFocus: o = false, disableEnforceFocus: s = false, disableRestoreFocus: c = false, getTabbable: f = pT, isEnabled: p = hT, open: h } = a3, g = C.useRef(false), m = C.useRef(null), S = C.useRef(null), b = C.useRef(null), w = C.useRef(null), _ = C.useRef(false), A = C.useRef(null), x = Hn(Vi(r), A), N = C.useRef(null);
  C.useEffect(() => {
    !h || !A.current || (_.current = !o);
  }, [o, h]), C.useEffect(() => {
    if (!h || !A.current) return;
    const B = Ie(A.current);
    return A.current.contains(B.activeElement) || (A.current.hasAttribute("tabIndex") || A.current.setAttribute("tabIndex", "-1"), _.current && A.current.focus()), () => {
      c || (b.current && b.current.focus && (g.current = true, b.current.focus()), b.current = null);
    };
  }, [h]), C.useEffect(() => {
    if (!h || !A.current) return;
    const B = Ie(A.current), H = (Z) => {
      N.current = Z, !(s || !p() || Z.key !== "Tab") && B.activeElement === A.current && Z.shiftKey && (g.current = true, S.current && S.current.focus());
    }, R = () => {
      var _a, _b2;
      const Z = A.current;
      if (Z === null) return;
      if (!B.hasFocus() || !p() || g.current) {
        g.current = false;
        return;
      }
      if (Z.contains(B.activeElement) || s && B.activeElement !== m.current && B.activeElement !== S.current) return;
      if (B.activeElement !== w.current) w.current = null;
      else if (w.current !== null) return;
      if (!_.current) return;
      let it = [];
      if ((B.activeElement === m.current || B.activeElement === S.current) && (it = f(A.current)), it.length > 0) {
        const G = !!(((_a = N.current) == null ? void 0 : _a.shiftKey) && ((_b2 = N.current) == null ? void 0 : _b2.key) === "Tab"), y = it[0], P = it[it.length - 1];
        typeof y != "string" && typeof P != "string" && (G ? P.focus() : y.focus());
      } else Z.focus();
    };
    B.addEventListener("focusin", R), B.addEventListener("keydown", H, true);
    const V = setInterval(() => {
      B.activeElement && B.activeElement.tagName === "BODY" && R();
    }, 50);
    return () => {
      clearInterval(V), B.removeEventListener("focusin", R), B.removeEventListener("keydown", H, true);
    };
  }, [o, s, c, p, h, f]);
  const D = (B) => {
    b.current === null && (b.current = B.relatedTarget), _.current = true, w.current = B.target;
    const H = r.props.onFocus;
    H && H(B);
  }, q = (B) => {
    b.current === null && (b.current = B.relatedTarget), _.current = true;
  };
  return z.jsxs(C.Fragment, { children: [z.jsx("div", { tabIndex: h ? 0 : -1, onFocus: q, ref: m, "data-testid": "sentinelStart" }), C.cloneElement(r, { ref: x, onFocus: D }), z.jsx("div", { tabIndex: h ? 0 : -1, onFocus: q, ref: S, "data-testid": "sentinelEnd" })] });
}
function gT(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
function yT(a3) {
  return a3 ? a3.props.hasOwnProperty("in") : false;
}
const zg = () => {
}, rs = new sT();
function vT(a3) {
  const { container: r, disableEscapeKeyDown: o = false, disableScrollLock: s = false, closeAfterTransition: c = false, onTransitionEnter: f, onTransitionExited: p, children: h, onClose: g, open: m, rootRef: S } = a3, b = C.useRef({}), w = C.useRef(null), _ = C.useRef(null), A = Hn(_, S), [x, N] = C.useState(!m), D = yT(h);
  let q = true;
  (a3["aria-hidden"] === "false" || a3["aria-hidden"] === false) && (q = false);
  const B = () => Ie(w.current), H = () => (b.current.modalRef = _.current, b.current.mount = w.current, b.current), R = () => {
    rs.mount(H(), { disableScrollLock: s }), _.current && (_.current.scrollTop = 0);
  }, V = tn(() => {
    const Y = gT(r) || B().body;
    rs.add(H(), Y), _.current && R();
  }), Z = () => rs.isTopModal(H()), it = tn((Y) => {
    w.current = Y, Y && (m && Z() ? R() : _.current && _i(_.current, q));
  }), G = C.useCallback(() => {
    rs.remove(H(), q);
  }, [q]);
  C.useEffect(() => () => {
    G();
  }, [G]), C.useEffect(() => {
    m ? V() : (!D || !c) && G();
  }, [m, G, D, c, V]);
  const y = (Y) => (U) => {
    var _a;
    (_a = Y.onKeyDown) == null ? void 0 : _a.call(Y, U), !(U.key !== "Escape" || U.which === 229 || !Z()) && (o || (U.stopPropagation(), g && g(U, "escapeKeyDown")));
  }, P = (Y) => (U) => {
    var _a;
    (_a = Y.onClick) == null ? void 0 : _a.call(Y, U), U.target === U.currentTarget && g && g(U, "backdropClick");
  };
  return { getRootProps: (Y = {}) => {
    const U = Al(a3);
    delete U.onTransitionEnter, delete U.onTransitionExited;
    const J = { ...U, ...Y };
    return { role: "presentation", ...J, onKeyDown: y(J), ref: A };
  }, getBackdropProps: (Y = {}) => {
    const U = Y;
    return { "aria-hidden": true, ...U, onClick: P(U), open: m };
  }, getTransitionProps: () => {
    const Y = () => {
      N(false), f && f();
    }, U = () => {
      N(true), p && p(), c && G();
    };
    return { onEnter: sg(Y, (h == null ? void 0 : h.props.onEnter) ?? zg), onExited: sg(U, (h == null ? void 0 : h.props.onExited) ?? zg) };
  }, rootRef: A, portalRef: it, isTopModal: Z, exited: x, hasTransition: D };
}
function bT(a3) {
  return ue("MuiModal", a3);
}
oe("MuiModal", ["root", "hidden", "backdrop"]);
const ST = (a3) => {
  const { open: r, exited: o, classes: s } = a3;
  return pe({ root: ["root", !r && o && "hidden"], backdrop: ["backdrop"] }, bT, s);
}, xT = bt("div", { name: "MuiModal", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, !o.open && o.exited && r.hidden];
} })(Yt(({ theme: a3 }) => ({ position: "fixed", zIndex: (a3.vars || a3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: "hidden" } }] }))), TT = bt(K2, { name: "MuiModal", slot: "Backdrop", overridesResolver: (a3, r) => r.backdrop })({ zIndex: -1 }), ET = C.forwardRef(function(r, o) {
  const s = ge({ name: "MuiModal", props: r }), { BackdropComponent: c = TT, BackdropProps: f, classes: p, className: h, closeAfterTransition: g = false, children: m, container: S, component: b, components: w = {}, componentsProps: _ = {}, disableAutoFocus: A = false, disableEnforceFocus: x = false, disableEscapeKeyDown: N = false, disablePortal: D = false, disableRestoreFocus: q = false, disableScrollLock: B = false, hideBackdrop: H = false, keepMounted: R = false, onBackdropClick: V, onClose: Z, onTransitionEnter: it, onTransitionExited: G, open: y, slotProps: P = {}, slots: lt = {}, theme: at, ...I } = s, Y = { ...s, closeAfterTransition: g, disableAutoFocus: A, disableEnforceFocus: x, disableEscapeKeyDown: N, disablePortal: D, disableRestoreFocus: q, disableScrollLock: B, hideBackdrop: H, keepMounted: R }, { getRootProps: U, getBackdropProps: J, getTransitionProps: W, portalRef: et, isTopModal: E, exited: L, hasTransition: ot } = vT({ ...Y, rootRef: o }), st = { ...Y, exited: L }, rt = ST(st), St = {};
  if (m.props.tabIndex === void 0 && (St.tabIndex = "-1"), ot) {
    const { onEnter: It, onExited: $t } = W();
    St.onEnter = It, St.onExited = $t;
  }
  const nt = { ...I, slots: { root: w.Root, backdrop: w.Backdrop, ...lt }, slotProps: { ..._, ...P } }, [yt, dt] = jn("root", { elementType: xT, externalForwardedProps: nt, getSlotProps: U, additionalProps: { ref: o, as: b }, ownerState: st, className: Et(h, rt == null ? void 0 : rt.root, !st.open && st.exited && (rt == null ? void 0 : rt.hidden)) }), [Ct, Rt] = jn("backdrop", { elementType: c, externalForwardedProps: nt, additionalProps: f, getSlotProps: (It) => J({ ...It, onClick: ($t) => {
    V && V($t), (It == null ? void 0 : It.onClick) && It.onClick($t);
  } }), className: Et(f == null ? void 0 : f.className, rt == null ? void 0 : rt.backdrop), ownerState: st }), ce = Hn(f == null ? void 0 : f.ref, Rt.ref);
  return !R && !y && (!ot || L) ? null : z.jsx(D2, { ref: et, container: S, disablePortal: D, children: z.jsxs(yt, { ...dt, children: [!H && c ? z.jsx(Ct, { ...Rt, ref: ce }) : null, z.jsx(mT, { disableEnforceFocus: x, disableAutoFocus: A, disableRestoreFocus: q, isEnabled: E, open: y, children: C.cloneElement(m, St) })] }) });
});
function CT(a3) {
  return ue("MuiFab", a3);
}
const _g = oe("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), wT = (a3) => {
  const { color: r, variant: o, classes: s, size: c } = a3, f = { root: ["root", o, `size${vt(c)}`, r === "inherit" ? "colorInherit" : r] }, p = pe(f, CT, s);
  return { ...s, ...p };
}, AT = bt(Pi, { name: "MuiFab", slot: "Root", shouldForwardProp: (a3) => Qf(a3) || a3 === "classes", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`size${vt(o.size)}`], o.color === "inherit" && r.colorInherit, r[vt(o.size)], r[o.color]];
} })(Yt(({ theme: a3 }) => {
  var _a, _b2;
  return { ...a3.typography.button, minHeight: 36, transition: a3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: a3.transitions.duration.short }), borderRadius: "50%", padding: 0, minWidth: 0, width: 56, height: 56, zIndex: (a3.vars || a3).zIndex.fab, boxShadow: (a3.vars || a3).shadows[6], "&:active": { boxShadow: (a3.vars || a3).shadows[12] }, color: a3.vars ? a3.vars.palette.text.primary : (_b2 = (_a = a3.palette).getContrastText) == null ? void 0 : _b2.call(_a, a3.palette.grey[300]), backgroundColor: (a3.vars || a3).palette.grey[300], "&:hover": { backgroundColor: (a3.vars || a3).palette.grey.A100, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette.grey[300] }, textDecoration: "none" }, [`&.${_g.focusVisible}`]: { boxShadow: (a3.vars || a3).shadows[6] }, variants: [{ props: { size: "small" }, style: { width: 40, height: 40 } }, { props: { size: "medium" }, style: { width: 48, height: 48 } }, { props: { variant: "extended" }, style: { borderRadius: 48 / 2, padding: "0 16px", width: "auto", minHeight: "auto", minWidth: 48, height: 48 } }, { props: { variant: "extended", size: "small" }, style: { width: "auto", padding: "0 8px", borderRadius: 34 / 2, minWidth: 34, height: 34 } }, { props: { variant: "extended", size: "medium" }, style: { width: "auto", padding: "0 16px", borderRadius: 40 / 2, minWidth: 40, height: 40 } }, { props: { color: "inherit" }, style: { color: "inherit" } }] };
}), Yt(({ theme: a3 }) => ({ variants: [...Object.entries(a3.palette).filter(vn(["dark", "contrastText"])).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].contrastText, backgroundColor: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: (a3.vars || a3).palette[r].dark, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette[r].main } } } }))] })), Yt(({ theme: a3 }) => ({ [`&.${_g.disabled}`]: { color: (a3.vars || a3).palette.action.disabled, boxShadow: (a3.vars || a3).shadows[0], backgroundColor: (a3.vars || a3).palette.action.disabledBackground } }))), B0 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFab" }), { children: c, className: f, color: p = "default", component: h = "button", disabled: g = false, disableFocusRipple: m = false, focusVisibleClassName: S, size: b = "large", variant: w = "circular", ..._ } = s, A = { ...s, color: p, component: h, disabled: g, disableFocusRipple: m, size: b, variant: w }, x = wT(A);
  return z.jsx(AT, { className: Et(x.root, f), component: h, disabled: g, focusRipple: !m, focusVisibleClassName: Et(x.focusVisible, S), ownerState: A, ref: o, ..._, classes: x, children: c });
});
function RT(a3) {
  return ue("MuiFormControlLabel", a3);
}
const Mi = oe("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), MT = (a3) => {
  const { classes: r, disabled: o, labelPlacement: s, error: c, required: f } = a3, p = { root: ["root", o && "disabled", `labelPlacement${vt(s)}`, c && "error", f && "required"], label: ["label", o && "disabled"], asterisk: ["asterisk", c && "error"] };
  return pe(p, RT, r);
}, OT = bt("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${Mi.label}`]: r.label }, r.root, r[`labelPlacement${vt(o.labelPlacement)}`]];
} })(Yt(({ theme: a3 }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${Mi.disabled}`]: { cursor: "default" }, [`& .${Mi.label}`]: { [`&.${Mi.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: r }) => r === "start" || r === "top" || r === "bottom", style: { marginLeft: 16 } }] }))), zT = bt("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (a3, r) => r.asterisk })(Yt(({ theme: a3 }) => ({ [`&.${Mi.error}`]: { color: (a3.vars || a3).palette.error.main } }))), Wa = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFormControlLabel" }), { checked: c, className: f, componentsProps: p = {}, control: h, disabled: g, disableTypography: m, inputRef: S, label: b, labelPlacement: w = "end", name: _, onChange: A, required: x, slots: N = {}, slotProps: D = {}, value: q, ...B } = s, H = Ff(), R = g ?? h.props.disabled ?? (H == null ? void 0 : H.disabled), V = x ?? h.props.required, Z = { disabled: R, required: V };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((Y) => {
    typeof h.props[Y] > "u" && typeof s[Y] < "u" && (Z[Y] = s[Y]);
  });
  const it = D0({ props: s, muiFormControl: H, states: ["error"] }), G = { ...s, disabled: R, labelPlacement: w, required: V, error: it.error }, y = MT(G), P = { slots: N, slotProps: { ...p, ...D } }, [lt, at] = jn("typography", { elementType: Er, externalForwardedProps: P, ownerState: G });
  let I = b;
  return I != null && I.type !== Er && !m && (I = z.jsx(lt, { component: "span", ...at, className: Et(y.label, at == null ? void 0 : at.className), children: I })), z.jsxs(OT, { className: Et(y.root, f), ownerState: G, ref: o, ...B, children: [C.cloneElement(h, Z), V ? z.jsxs("div", { children: [I, z.jsxs(zT, { ownerState: G, "aria-hidden": true, className: y.asterisk, children: ["\u2009", "*"] })] }) : I] });
});
function _T(a3) {
  return ue("MuiFormGroup", a3);
}
oe("MuiFormGroup", ["root", "row", "error"]);
const kT = (a3) => {
  const { classes: r, row: o, error: s } = a3;
  return pe({ root: ["root", o && "row", s && "error"] }, _T, r);
}, DT = bt("div", { name: "MuiFormGroup", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.row && r.row];
} })({ display: "flex", flexDirection: "column", flexWrap: "wrap", variants: [{ props: { row: true }, style: { flexDirection: "row" } }] }), N0 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiFormGroup" }), { className: c, row: f = false, ...p } = s, h = Ff(), g = D0({ props: s, muiFormControl: h, states: ["error"] }), m = { ...s, row: f, error: g.error }, S = kT(m);
  return z.jsx(DT, { className: Et(S.root, c), ownerState: m, ref: o, ...p });
});
function Ef(a3) {
  return `scale(${a3}, ${a3 ** 2})`;
}
const BT = { entering: { opacity: 1, transform: Ef(1) }, entered: { opacity: 1, transform: "none" } }, rf = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Cf = C.forwardRef(function(r, o) {
  const { addEndListener: s, appear: c = true, children: f, easing: p, in: h, onEnter: g, onEntered: m, onEntering: S, onExit: b, onExited: w, onExiting: _, style: A, timeout: x = "auto", TransitionComponent: N = ra, ...D } = r, q = Gf(), B = C.useRef(), H = Xi(), R = C.useRef(null), V = Hn(R, Vi(f), o), Z = (Y) => (U) => {
    if (Y) {
      const J = R.current;
      U === void 0 ? Y(J) : Y(J, U);
    }
  }, it = Z(S), G = Z((Y, U) => {
    _0(Y);
    const { duration: J, delay: W, easing: et } = Cs({ style: A, timeout: x, easing: p }, { mode: "enter" });
    let E;
    x === "auto" ? (E = H.transitions.getAutoHeightDuration(Y.clientHeight), B.current = E) : E = J, Y.style.transition = [H.transitions.create("opacity", { duration: E, delay: W }), H.transitions.create("transform", { duration: rf ? E : E * 0.666, delay: W, easing: et })].join(","), g && g(Y, U);
  }), y = Z(m), P = Z(_), lt = Z((Y) => {
    const { duration: U, delay: J, easing: W } = Cs({ style: A, timeout: x, easing: p }, { mode: "exit" });
    let et;
    x === "auto" ? (et = H.transitions.getAutoHeightDuration(Y.clientHeight), B.current = et) : et = U, Y.style.transition = [H.transitions.create("opacity", { duration: et, delay: J }), H.transitions.create("transform", { duration: rf ? et : et * 0.666, delay: rf ? J : J || et * 0.333, easing: W })].join(","), Y.style.opacity = 0, Y.style.transform = Ef(0.75), b && b(Y);
  }), at = Z(w), I = (Y) => {
    x === "auto" && q.start(B.current || 0, Y), s && s(R.current, Y);
  };
  return z.jsx(N, { appear: c, in: h, nodeRef: R, onEnter: G, onEntered: y, onEntering: it, onExit: lt, onExited: at, onExiting: P, addEndListener: I, timeout: x === "auto" ? null : x, ...D, children: (Y, { ownerState: U, ...J }) => C.cloneElement(f, { style: { opacity: 0, transform: Ef(0.75), visibility: Y === "exited" && !h ? "hidden" : void 0, ...BT[Y], ...A, ...f.props.style }, ref: V, ...J }) });
});
Cf && (Cf.muiSupportAuto = true);
function NT(a3, r, o = (s, c) => s === c) {
  return a3.length === r.length && a3.every((s, c) => o(s, r[c]));
}
const jT = 2;
function gr(a3, r, o, s, c) {
  return o === 1 ? Math.min(a3 + r, c) : Math.max(a3 - r, s);
}
function j0(a3, r) {
  return a3 - r;
}
function kg(a3, r) {
  const { index: o } = a3.reduce((s, c, f) => {
    const p = Math.abs(r - c);
    return s === null || p < s.distance || p === s.distance ? { distance: p, index: f } : s;
  }, null) ?? {};
  return o;
}
function is(a3, r) {
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
function As(a3, r, o) {
  return (a3 - r) * 100 / (o - r);
}
function UT(a3, r, o) {
  return (o - r) * a3 + r;
}
function HT(a3) {
  if (Math.abs(a3) < 1) {
    const o = a3.toExponential().split("e-"), s = o[0].split(".")[1];
    return (s ? s.length : 0) + parseInt(o[1], 10);
  }
  const r = a3.toString().split(".")[1];
  return r ? r.length : 0;
}
function LT(a3, r, o) {
  const s = Math.round((a3 - o) / r) * r + o;
  return Number(s.toFixed(HT(r)));
}
function Dg({ values: a3, newValue: r, index: o }) {
  const s = a3.slice();
  return s[o] = r, s.sort(j0);
}
function os({ sliderRef: a3, activeIndex: r, setActive: o }) {
  var _a, _b2, _c;
  const s = Ie(a3.current);
  (!((_a = a3.current) == null ? void 0 : _a.contains(s.activeElement)) || Number((_b2 = s == null ? void 0 : s.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== r) && ((_c = a3.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${r}"]`).focus()), o && o(r);
}
function ss(a3, r) {
  return typeof a3 == "number" && typeof r == "number" ? a3 === r : typeof a3 == "object" && typeof r == "object" ? NT(a3, r) : false;
}
const $T = { horizontal: { offset: (a3) => ({ left: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, "horizontal-reverse": { offset: (a3) => ({ right: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, vertical: { offset: (a3) => ({ bottom: `${a3}%` }), leap: (a3) => ({ height: `${a3}%` }) } }, qT = (a3) => a3;
let us;
function Bg() {
  return us === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? us = CSS.supports("touch-action", "none") : us = true), us;
}
function GT(a3) {
  const { "aria-labelledby": r, defaultValue: o, disabled: s = false, disableSwap: c = false, isRtl: f = false, marks: p = false, max: h = 100, min: g = 0, name: m, onChange: S, onChangeCommitted: b, orientation: w = "horizontal", rootRef: _, scale: A = qT, step: x = 1, shiftStep: N = 10, tabIndex: D, value: q } = a3, B = C.useRef(void 0), [H, R] = C.useState(-1), [V, Z] = C.useState(-1), [it, G] = C.useState(false), y = C.useRef(0), P = C.useRef(null), [lt, at] = y0({ controlled: q, default: o ?? g, name: "Slider" }), I = S && ((ct, ut, Mt) => {
    const _t = ct.nativeEvent || ct, kt = new _t.constructor(_t.type, _t);
    Object.defineProperty(kt, "target", { writable: true, value: { value: ut, name: m } }), P.current = ut, S(kt, ut, Mt);
  }), Y = Array.isArray(lt);
  let U = Y ? lt.slice().sort(j0) : [lt];
  U = U.map((ct) => ct == null ? g : yr(ct, g, h));
  const J = p === true && x !== null ? [...Array(Math.floor((h - g) / x) + 1)].map((ct, ut) => ({ value: g + x * ut })) : p || [], W = J.map((ct) => ct.value), [et, E] = C.useState(-1), L = C.useRef(null), ot = Hn(_, L), st = (ct) => (ut) => {
    var _a;
    const Mt = Number(ut.currentTarget.getAttribute("data-index"));
    Ts(ut.target) && E(Mt), Z(Mt), (_a = ct == null ? void 0 : ct.onFocus) == null ? void 0 : _a.call(ct, ut);
  }, rt = (ct) => (ut) => {
    var _a;
    Ts(ut.target) || E(-1), Z(-1), (_a = ct == null ? void 0 : ct.onBlur) == null ? void 0 : _a.call(ct, ut);
  }, St = (ct, ut) => {
    const Mt = Number(ct.currentTarget.getAttribute("data-index")), _t = U[Mt], kt = W.indexOf(_t);
    let Ot = ut;
    if (J && x == null) {
      const Ce = W[W.length - 1];
      Ot >= Ce ? Ot = Ce : Ot <= W[0] ? Ot = W[0] : Ot = Ot < _t ? W[kt - 1] : W[kt + 1];
    }
    if (Ot = yr(Ot, g, h), Y) {
      c && (Ot = yr(Ot, U[Mt - 1] || -1 / 0, U[Mt + 1] || 1 / 0));
      const Ce = Ot;
      Ot = Dg({ values: U, newValue: Ot, index: Mt });
      let Ye = Mt;
      c || (Ye = Ot.indexOf(Ce)), os({ sliderRef: L, activeIndex: Ye });
    }
    at(Ot), E(Mt), I && !ss(Ot, lt) && I(ct, Ot, Mt), b && b(ct, P.current ?? Ot);
  }, nt = (ct) => (ut) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(ut.key)) {
      ut.preventDefault();
      const Mt = Number(ut.currentTarget.getAttribute("data-index")), _t = U[Mt];
      let kt = null;
      if (x != null) {
        const Ot = ut.shiftKey ? N : x;
        switch (ut.key) {
          case "ArrowUp":
            kt = gr(_t, Ot, 1, g, h);
            break;
          case "ArrowRight":
            kt = gr(_t, Ot, f ? -1 : 1, g, h);
            break;
          case "ArrowDown":
            kt = gr(_t, Ot, -1, g, h);
            break;
          case "ArrowLeft":
            kt = gr(_t, Ot, f ? 1 : -1, g, h);
            break;
          case "PageUp":
            kt = gr(_t, N, 1, g, h);
            break;
          case "PageDown":
            kt = gr(_t, N, -1, g, h);
            break;
          case "Home":
            kt = g;
            break;
          case "End":
            kt = h;
            break;
        }
      } else if (J) {
        const Ot = W[W.length - 1], Ce = W.indexOf(_t), Ye = [f ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], te = [f ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        Ye.includes(ut.key) ? Ce === 0 ? kt = W[0] : kt = W[Ce - 1] : te.includes(ut.key) && (Ce === W.length - 1 ? kt = Ot : kt = W[Ce + 1]);
      }
      kt != null && St(ut, kt);
    }
    (_a = ct == null ? void 0 : ct.onKeyDown) == null ? void 0 : _a.call(ct, ut);
  };
  Hi(() => {
    var _a;
    s && L.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [s]), s && H !== -1 && R(-1), s && et !== -1 && E(-1);
  const yt = (ct) => (ut) => {
    var _a;
    (_a = ct.onChange) == null ? void 0 : _a.call(ct, ut), St(ut, ut.target.valueAsNumber);
  }, dt = C.useRef(void 0);
  let Ct = w;
  f && w === "horizontal" && (Ct += "-reverse");
  const Rt = ({ finger: ct, move: ut = false }) => {
    const { current: Mt } = L, { width: _t, height: kt, bottom: Ot, left: Ce } = Mt.getBoundingClientRect();
    let Ye;
    Ct.startsWith("vertical") ? Ye = (Ot - ct.y) / kt : Ye = (ct.x - Ce) / _t, Ct.includes("-reverse") && (Ye = 1 - Ye);
    let te;
    if (te = UT(Ye, g, h), x) te = LT(te, x, g);
    else {
      const pt = kg(W, te);
      te = W[pt];
    }
    te = yr(te, g, h);
    let Kt = 0;
    if (Y) {
      ut ? Kt = dt.current : Kt = kg(U, te), c && (te = yr(te, U[Kt - 1] || -1 / 0, U[Kt + 1] || 1 / 0));
      const pt = te;
      te = Dg({ values: U, newValue: te, index: Kt }), c && ut || (Kt = te.indexOf(pt), dt.current = Kt);
    }
    return { newValue: te, activeIndex: Kt };
  }, ce = tn((ct) => {
    const ut = is(ct, B);
    if (!ut) return;
    if (y.current += 1, ct.type === "mousemove" && ct.buttons === 0) {
      It(ct);
      return;
    }
    const { newValue: Mt, activeIndex: _t } = Rt({ finger: ut, move: true });
    os({ sliderRef: L, activeIndex: _t, setActive: R }), at(Mt), !it && y.current > jT && G(true), I && !ss(Mt, lt) && I(ct, Mt, _t);
  }), It = tn((ct) => {
    const ut = is(ct, B);
    if (G(false), !ut) return;
    const { newValue: Mt } = Rt({ finger: ut, move: true });
    R(-1), ct.type === "touchend" && Z(-1), b && b(ct, P.current ?? Mt), B.current = void 0, Oe();
  }), $t = tn((ct) => {
    if (s) return;
    Bg() || ct.preventDefault();
    const ut = ct.changedTouches[0];
    ut != null && (B.current = ut.identifier);
    const Mt = is(ct, B);
    if (Mt !== false) {
      const { newValue: kt, activeIndex: Ot } = Rt({ finger: Mt });
      os({ sliderRef: L, activeIndex: Ot, setActive: R }), at(kt), I && !ss(kt, lt) && I(ct, kt, Ot);
    }
    y.current = 0;
    const _t = Ie(L.current);
    _t.addEventListener("touchmove", ce, { passive: true }), _t.addEventListener("touchend", It, { passive: true });
  }), Oe = C.useCallback(() => {
    const ct = Ie(L.current);
    ct.removeEventListener("mousemove", ce), ct.removeEventListener("mouseup", It), ct.removeEventListener("touchmove", ce), ct.removeEventListener("touchend", It);
  }, [It, ce]);
  C.useEffect(() => {
    const { current: ct } = L;
    return ct.addEventListener("touchstart", $t, { passive: Bg() }), () => {
      ct.removeEventListener("touchstart", $t), Oe();
    };
  }, [Oe, $t]), C.useEffect(() => {
    s && Oe();
  }, [s, Oe]);
  const bn = (ct) => (ut) => {
    var _a;
    if ((_a = ct.onMouseDown) == null ? void 0 : _a.call(ct, ut), s || ut.defaultPrevented || ut.button !== 0) return;
    ut.preventDefault();
    const Mt = is(ut, B);
    if (Mt !== false) {
      const { newValue: kt, activeIndex: Ot } = Rt({ finger: Mt });
      os({ sliderRef: L, activeIndex: Ot, setActive: R }), at(kt), I && !ss(kt, lt) && I(ut, kt, Ot);
    }
    y.current = 0;
    const _t = Ie(L.current);
    _t.addEventListener("mousemove", ce, { passive: true }), _t.addEventListener("mouseup", It);
  }, Ge = As(Y ? U[0] : g, g, h), Ht = As(U[U.length - 1], g, h) - Ge, fe = (ct = {}) => {
    const ut = Al(ct), Mt = { onMouseDown: bn(ut || {}) }, _t = { ...ut, ...Mt };
    return { ...ct, ref: ot, ..._t };
  }, sn = (ct) => (ut) => {
    var _a;
    (_a = ct.onMouseOver) == null ? void 0 : _a.call(ct, ut);
    const Mt = Number(ut.currentTarget.getAttribute("data-index"));
    Z(Mt);
  }, je = (ct) => (ut) => {
    var _a;
    (_a = ct.onMouseLeave) == null ? void 0 : _a.call(ct, ut), Z(-1);
  }, en = (ct = {}) => {
    const ut = Al(ct), Mt = { onMouseOver: sn(ut || {}), onMouseLeave: je(ut || {}) };
    return { ...ct, ...ut, ...Mt };
  }, Tt = (ct) => ({ pointerEvents: H !== -1 && H !== ct ? "none" : void 0 });
  let $n;
  return w === "vertical" && ($n = f ? "vertical-rl" : "vertical-lr"), { active: H, axis: Ct, axisProps: $T, dragging: it, focusedThumbIndex: et, getHiddenInputProps: (ct = {}) => {
    const ut = Al(ct), Mt = { onChange: yt(ut || {}), onFocus: st(ut || {}), onBlur: rt(ut || {}), onKeyDown: nt(ut || {}) }, _t = { ...ut, ...Mt };
    return { tabIndex: D, "aria-labelledby": r, "aria-orientation": w, "aria-valuemax": A(h), "aria-valuemin": A(g), name: m, type: "range", min: a3.min, max: a3.max, step: a3.step === null && a3.marks ? "any" : a3.step ?? void 0, disabled: s, ...ct, ..._t, style: { ...BS, direction: f ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: $n } };
  }, getRootProps: fe, getThumbProps: en, marks: J, open: V, range: Y, rootRef: ot, trackLeap: Ht, trackOffset: Ge, values: U, getThumbStyle: Tt };
}
const YT = (a3) => !a3 || !ys(a3);
function VT(a3) {
  return ue("MuiSlider", a3);
}
const Un = oe("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), XT = (a3) => {
  const { open: r } = a3;
  return { offset: Et(r && Un.valueLabelOpen), circle: Un.valueLabelCircle, label: Un.valueLabelLabel };
};
function PT(a3) {
  const { children: r, className: o, value: s } = a3, c = XT(a3);
  return r ? C.cloneElement(r, { className: Et(r.props.className) }, z.jsxs(C.Fragment, { children: [r.props.children, z.jsx("span", { className: Et(c.offset, o), "aria-hidden": true, children: z.jsx("span", { className: c.circle, children: z.jsx("span", { className: c.label, children: s }) }) })] })) : null;
}
function Ng(a3) {
  return a3;
}
const QT = bt("span", { name: "MuiSlider", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`color${vt(o.color)}`], o.size !== "medium" && r[`size${vt(o.size)}`], o.marked && r.marked, o.orientation === "vertical" && r.vertical, o.track === "inverted" && r.trackInverted, o.track === false && r.trackFalse];
} })(Yt(({ theme: a3 }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${Un.disabled}`]: { pointerEvents: "none", cursor: "default", color: (a3.vars || a3).palette.grey[400] }, [`&.${Un.dragging}`]: { [`& .${Un.thumb}, & .${Un.track}`]: { transition: "none" } }, variants: [...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), KT = bt("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (a3, r) => r.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), ZT = bt("span", { name: "MuiSlider", slot: "Track", overridesResolver: (a3, r) => r.track })(Yt(({ theme: a3 }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: a3.transitions.create(["left", "width", "bottom", "height"], { duration: a3.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r, track: "inverted" }, style: { ...a3.vars ? { backgroundColor: a3.vars.palette.Slider[`${r}Track`], borderColor: a3.vars.palette.Slider[`${r}Track`] } : { backgroundColor: tl(a3.palette[r].main, 0.62), borderColor: tl(a3.palette[r].main, 0.62), ...a3.applyStyles("dark", { backgroundColor: Ia(a3.palette[r].main, 0.5) }), ...a3.applyStyles("dark", { borderColor: Ia(a3.palette[r].main, 0.5) }) } } }))] }))), FT = bt("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.thumb, r[`thumbColor${vt(o.color)}`], o.size !== "medium" && r[`thumbSize${vt(o.size)}`]];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: a3.transitions.create(["box-shadow", "left", "bottom"], { duration: a3.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (a3.vars || a3).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${Un.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(a3.palette).filter(vn()).map(([r]) => ({ props: { color: r }, style: { [`&:hover, &.${Un.focusVisible}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 8px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${Ra(a3.palette[r].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${Un.active}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 14px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${Ra(a3.palette[r].main, 0.16)}` } } } }))] }))), WT = bt(PT, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (a3, r) => r.valueLabel })(Yt(({ theme: a3 }) => ({ zIndex: 1, whiteSpace: "nowrap", ...a3.typography.body2, fontWeight: 500, transition: a3.transitions.create(["transform"], { duration: a3.transitions.duration.shortest }), position: "absolute", backgroundColor: (a3.vars || a3).palette.grey[600], borderRadius: 2, color: (a3.vars || a3).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${Un.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${Un.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: a3.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), JT = bt("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (a3) => Pf(a3) && a3 !== "markActive", overridesResolver: (a3, r) => {
  const { markActive: o } = a3;
  return [r.mark, o && r.markActive];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (a3.vars || a3).palette.background.paper, opacity: 0.8 } }] }))), IT = bt("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (a3) => Pf(a3) && a3 !== "markLabelActive", overridesResolver: (a3, r) => r.markLabel })(Yt(({ theme: a3 }) => ({ ...a3.typography.body2, color: (a3.vars || a3).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (a3.vars || a3).palette.text.primary } }] }))), tE = (a3) => {
  const { disabled: r, dragging: o, marked: s, orientation: c, track: f, classes: p, color: h, size: g } = a3, m = { root: ["root", r && "disabled", o && "dragging", s && "marked", c === "vertical" && "vertical", f === "inverted" && "trackInverted", f === false && "trackFalse", h && `color${vt(h)}`, g && `size${vt(g)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", r && "disabled", g && `thumbSize${vt(g)}`, h && `thumbColor${vt(h)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return pe(m, VT, p);
}, eE = ({ children: a3 }) => a3, ki = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSlider" }), c = Yf(), { "aria-label": f, "aria-valuetext": p, "aria-labelledby": h, component: g = "span", components: m = {}, componentsProps: S = {}, color: b = "primary", classes: w, className: _, disableSwap: A = false, disabled: x = false, getAriaLabel: N, getAriaValueText: D, marks: q = false, max: B = 100, min: H = 0, name: R, onChange: V, onChangeCommitted: Z, orientation: it = "horizontal", shiftStep: G = 10, size: y = "medium", step: P = 1, scale: lt = Ng, slotProps: at, slots: I, tabIndex: Y, track: U = "normal", value: J, valueLabelDisplay: W = "off", valueLabelFormat: et = Ng, ...E } = s, L = { ...s, isRtl: c, max: B, min: H, classes: w, disabled: x, disableSwap: A, orientation: it, marks: q, color: b, size: y, step: P, shiftStep: G, scale: lt, track: U, valueLabelDisplay: W, valueLabelFormat: et }, { axisProps: ot, getRootProps: st, getHiddenInputProps: rt, getThumbProps: St, open: nt, active: yt, axis: dt, focusedThumbIndex: Ct, range: Rt, dragging: ce, marks: It, values: $t, trackOffset: Oe, trackLeap: bn, getThumbStyle: Ge } = GT({ ...L, rootRef: o });
  L.marked = It.length > 0 && It.some((Vt) => Vt.label), L.dragging = ce, L.focusedThumbIndex = Ct;
  const Ht = tE(L), fe = (I == null ? void 0 : I.root) ?? m.Root ?? QT, sn = (I == null ? void 0 : I.rail) ?? m.Rail ?? KT, je = (I == null ? void 0 : I.track) ?? m.Track ?? ZT, en = (I == null ? void 0 : I.thumb) ?? m.Thumb ?? FT, Tt = (I == null ? void 0 : I.valueLabel) ?? m.ValueLabel ?? WT, $n = (I == null ? void 0 : I.mark) ?? m.Mark ?? JT, Ue = (I == null ? void 0 : I.markLabel) ?? m.MarkLabel ?? IT, ct = (I == null ? void 0 : I.input) ?? m.Input ?? "input", ut = (at == null ? void 0 : at.root) ?? S.root, Mt = (at == null ? void 0 : at.rail) ?? S.rail, _t = (at == null ? void 0 : at.track) ?? S.track, kt = (at == null ? void 0 : at.thumb) ?? S.thumb, Ot = (at == null ? void 0 : at.valueLabel) ?? S.valueLabel, Ce = (at == null ? void 0 : at.mark) ?? S.mark, Ye = (at == null ? void 0 : at.markLabel) ?? S.markLabel, te = (at == null ? void 0 : at.input) ?? S.input, Kt = hn({ elementType: fe, getSlotProps: st, externalSlotProps: ut, externalForwardedProps: E, additionalProps: { ...YT(fe) && { as: g } }, ownerState: { ...L, ...ut == null ? void 0 : ut.ownerState }, className: [Ht.root, _] }), pt = hn({ elementType: sn, externalSlotProps: Mt, ownerState: L, className: Ht.rail }), ht = hn({ elementType: je, externalSlotProps: _t, additionalProps: { style: { ...ot[dt].offset(Oe), ...ot[dt].leap(bn) } }, ownerState: { ...L, ..._t == null ? void 0 : _t.ownerState }, className: Ht.track }), wt = hn({ elementType: en, getSlotProps: St, externalSlotProps: kt, ownerState: { ...L, ...kt == null ? void 0 : kt.ownerState }, className: Ht.thumb }), jt = hn({ elementType: Tt, externalSlotProps: Ot, ownerState: { ...L, ...Ot == null ? void 0 : Ot.ownerState }, className: Ht.valueLabel }), le = hn({ elementType: $n, externalSlotProps: Ce, ownerState: L, className: Ht.mark }), Ve = hn({ elementType: Ue, externalSlotProps: Ye, ownerState: L, className: Ht.markLabel }), nn = hn({ elementType: ct, getSlotProps: rt, externalSlotProps: te, ownerState: L });
  return z.jsxs(fe, { ...Kt, children: [z.jsx(sn, { ...pt }), z.jsx(je, { ...ht }), It.filter((Vt) => Vt.value >= H && Vt.value <= B).map((Vt, Zt) => {
    const Sn = As(Vt.value, H, B), Pn = ot[dt].offset(Sn);
    let qn;
    return U === false ? qn = $t.includes(Vt.value) : qn = U === "normal" && (Rt ? Vt.value >= $t[0] && Vt.value <= $t[$t.length - 1] : Vt.value <= $t[0]) || U === "inverted" && (Rt ? Vt.value <= $t[0] || Vt.value >= $t[$t.length - 1] : Vt.value >= $t[0]), z.jsxs(C.Fragment, { children: [z.jsx($n, { "data-index": Zt, ...le, ...!ys($n) && { markActive: qn }, style: { ...Pn, ...le.style }, className: Et(le.className, qn && Ht.markActive) }), Vt.label != null ? z.jsx(Ue, { "aria-hidden": true, "data-index": Zt, ...Ve, ...!ys(Ue) && { markLabelActive: qn }, style: { ...Pn, ...Ve.style }, className: Et(Ht.markLabel, Ve.className, qn && Ht.markLabelActive), children: Vt.label }) : null] }, Zt);
  }), $t.map((Vt, Zt) => {
    const Sn = As(Vt, H, B), Pn = ot[dt].offset(Sn), qn = W === "off" ? eE : Tt;
    return z.jsx(qn, { ...!ys(qn) && { valueLabelFormat: et, valueLabelDisplay: W, value: typeof et == "function" ? et(lt(Vt), Zt) : et, index: Zt, open: nt === Zt || yt === Zt || W === "on", disabled: x }, ...jt, children: z.jsx(en, { "data-index": Zt, ...wt, className: Et(Ht.thumb, wt.className, yt === Zt && Ht.active, Ct === Zt && Ht.focusVisible), style: { ...Pn, ...Ge(Zt), ...wt.style }, children: z.jsx(ct, { "data-index": Zt, "aria-label": N ? N(Zt) : f, "aria-valuenow": lt(Vt), "aria-labelledby": h, "aria-valuetext": D ? D(lt(Vt), Zt) : p, value: $t[Zt], ...nn }) }) }, Zt);
  })] });
});
function nE(a3 = {}) {
  const { autoHideDuration: r = null, disableWindowBlurListener: o = false, onClose: s, open: c, resumeHideDuration: f } = a3, p = Gf();
  C.useEffect(() => {
    if (!c) return;
    function D(q) {
      q.defaultPrevented || q.key === "Escape" && (s == null ? void 0 : s(q, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", D), () => {
      document.removeEventListener("keydown", D);
    };
  }, [c, s]);
  const h = tn((D, q) => {
    s == null ? void 0 : s(D, q);
  }), g = tn((D) => {
    !s || D == null || p.start(D, () => {
      h(null, "timeout");
    });
  });
  C.useEffect(() => (c && g(r), p.clear), [c, r, g, p]);
  const m = (D) => {
    s == null ? void 0 : s(D, "clickaway");
  }, S = p.clear, b = C.useCallback(() => {
    r != null && g(f ?? r * 0.5);
  }, [r, f, g]), w = (D) => (q) => {
    const B = D.onBlur;
    B == null ? void 0 : B(q), b();
  }, _ = (D) => (q) => {
    const B = D.onFocus;
    B == null ? void 0 : B(q), S();
  }, A = (D) => (q) => {
    const B = D.onMouseEnter;
    B == null ? void 0 : B(q), S();
  }, x = (D) => (q) => {
    const B = D.onMouseLeave;
    B == null ? void 0 : B(q), b();
  };
  return C.useEffect(() => {
    if (!o && c) return window.addEventListener("focus", b), window.addEventListener("blur", S), () => {
      window.removeEventListener("focus", b), window.removeEventListener("blur", S);
    };
  }, [o, c, b, S]), { getRootProps: (D = {}) => {
    const q = { ...Al(a3), ...Al(D) };
    return { role: "presentation", ...D, ...q, onBlur: w(q), onFocus: _(q), onMouseEnter: A(q), onMouseLeave: x(q) };
  }, onClickAway: m };
}
function aE(a3) {
  return ue("MuiSnackbarContent", a3);
}
oe("MuiSnackbarContent", ["root", "message", "action"]);
const lE = (a3) => {
  const { classes: r } = a3;
  return pe({ root: ["root"], action: ["action"], message: ["message"] }, aE, r);
}, rE = bt(Ar, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (a3, r) => r.root })(Yt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? 0.8 : 0.98, o = m0(a3.palette.background.default, r);
  return { ...a3.typography.body2, color: a3.vars ? a3.vars.palette.SnackbarContent.color : a3.palette.getContrastText(o), backgroundColor: a3.vars ? a3.vars.palette.SnackbarContent.bg : o, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (a3.vars || a3).shape.borderRadius, flexGrow: 1, [a3.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), iE = bt("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0" }), oE = bt("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), sE = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSnackbarContent" }), { action: c, className: f, message: p, role: h = "alert", ...g } = s, m = s, S = lE(m);
  return z.jsxs(rE, { role: h, square: true, elevation: 6, className: Et(S.root, f), ownerState: m, ref: o, ...g, children: [z.jsx(iE, { className: S.message, ownerState: m, children: p }), c ? z.jsx(oE, { className: S.action, ownerState: m, children: c }) : null] });
});
function uE(a3) {
  return ue("MuiSnackbar", a3);
}
oe("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const cE = (a3) => {
  const { classes: r, anchorOrigin: o } = a3, s = { root: ["root", `anchorOrigin${vt(o.vertical)}${vt(o.horizontal)}`] };
  return pe(s, uE, r);
}, jg = bt("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`anchorOrigin${vt(o.anchorOrigin.vertical)}${vt(o.anchorOrigin.horizontal)}`]];
} })(Yt(({ theme: a3 }) => ({ zIndex: (a3.vars || a3).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: r }) => r.anchorOrigin.vertical === "top", style: { top: 8, [a3.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.vertical !== "top", style: { bottom: 8, [a3.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [a3.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [a3.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "center", style: { [a3.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), U0 = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSnackbar" }), c = Xi(), f = { enter: c.transitions.duration.enteringScreen, exit: c.transitions.duration.leavingScreen }, { action: p, anchorOrigin: { vertical: h, horizontal: g } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: m = null, children: S, className: b, ClickAwayListenerProps: w, ContentProps: _, disableWindowBlurListener: A = false, message: x, onBlur: N, onClose: D, onFocus: q, onMouseEnter: B, onMouseLeave: H, open: R, resumeHideDuration: V, TransitionComponent: Z = Cf, transitionDuration: it = f, TransitionProps: { onEnter: G, onExited: y, ...P } = {}, ...lt } = s, at = { ...s, anchorOrigin: { vertical: h, horizontal: g }, autoHideDuration: m, disableWindowBlurListener: A, TransitionComponent: Z, transitionDuration: it }, I = cE(at), { getRootProps: Y, onClickAway: U } = nE({ ...at }), [J, W] = C.useState(true), et = hn({ elementType: jg, getSlotProps: Y, externalForwardedProps: lt, ownerState: at, additionalProps: { ref: o }, className: [I.root, b] }), E = (ot) => {
    W(true), y && y(ot);
  }, L = (ot, st) => {
    W(false), G && G(ot, st);
  };
  return !R && J ? null : z.jsx(aT, { onClickAway: U, ...w, children: z.jsx(jg, { ...et, children: z.jsx(Z, { appear: true, in: R, timeout: it, direction: h === "top" ? "down" : "up", onEnter: L, onExited: E, ...P, children: S || z.jsx(sE, { message: x, action: p, ..._ }) }) }) });
});
function fE(a3) {
  return ue("MuiSwitch", a3);
}
const We = oe("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), dE = (a3) => {
  const { classes: r, edge: o, size: s, color: c, checked: f, disabled: p } = a3, h = { root: ["root", o && `edge${vt(o)}`, `size${vt(s)}`], switchBase: ["switchBase", `color${vt(c)}`, f && "checked", p && "disabled"], thumb: ["thumb"], track: ["track"], input: ["input"] }, g = pe(h, fE, r);
  return { ...r, ...g };
}, pE = bt("span", { name: "MuiSwitch", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.edge && r[`edge${vt(o.edge)}`], r[`size${vt(o.size)}`]];
} })({ display: "inline-flex", width: 34 + 12 * 2, height: 14 + 12 * 2, overflow: "hidden", padding: 12, boxSizing: "border-box", position: "relative", flexShrink: 0, zIndex: 0, verticalAlign: "middle", "@media print": { colorAdjust: "exact" }, variants: [{ props: { edge: "start" }, style: { marginLeft: -8 } }, { props: { edge: "end" }, style: { marginRight: -8 } }, { props: { size: "small" }, style: { width: 40, height: 24, padding: 7, [`& .${We.thumb}`]: { width: 16, height: 16 }, [`& .${We.switchBase}`]: { padding: 4, [`&.${We.checked}`]: { transform: "translateX(16px)" } } } }] }), hE = bt(eT, { name: "MuiSwitch", slot: "SwitchBase", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.switchBase, { [`& .${We.input}`]: r.input }, o.color !== "default" && r[`color${vt(o.color)}`]];
} })(Yt(({ theme: a3 }) => ({ position: "absolute", top: 0, left: 0, zIndex: 1, color: a3.vars ? a3.vars.palette.Switch.defaultColor : `${a3.palette.mode === "light" ? a3.palette.common.white : a3.palette.grey[300]}`, transition: a3.transitions.create(["left", "transform"], { duration: a3.transitions.duration.shortest }), [`&.${We.checked}`]: { transform: "translateX(20px)" }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch.defaultDisabledColor : `${a3.palette.mode === "light" ? a3.palette.grey[100] : a3.palette.grey[600]}` }, [`&.${We.checked} + .${We.track}`]: { opacity: 0.5 }, [`&.${We.disabled} + .${We.track}`]: { opacity: a3.vars ? a3.vars.opacity.switchTrackDisabled : `${a3.palette.mode === "light" ? 0.12 : 0.2}` }, [`& .${We.input}`]: { left: "-100%", width: "300%" } })), Yt(({ theme: a3 }) => ({ "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette.action.active, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, variants: [...Object.entries(a3.palette).filter(vn(["light"])).map(([r]) => ({ props: { color: r }, style: { [`&.${We.checked}`]: { color: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ra(a3.palette[r].main, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch[`${r}DisabledColor`] : `${a3.palette.mode === "light" ? tl(a3.palette[r].main, 0.62) : Ia(a3.palette[r].main, 0.55)}` } }, [`&.${We.checked} + .${We.track}`]: { backgroundColor: (a3.vars || a3).palette[r].main } } }))] }))), mE = bt("span", { name: "MuiSwitch", slot: "Track", overridesResolver: (a3, r) => r.track })(Yt(({ theme: a3 }) => ({ height: "100%", width: "100%", borderRadius: 14 / 2, zIndex: -1, transition: a3.transitions.create(["opacity", "background-color"], { duration: a3.transitions.duration.shortest }), backgroundColor: a3.vars ? a3.vars.palette.common.onBackground : `${a3.palette.mode === "light" ? a3.palette.common.black : a3.palette.common.white}`, opacity: a3.vars ? a3.vars.opacity.switchTrack : `${a3.palette.mode === "light" ? 0.38 : 0.3}` }))), gE = bt("span", { name: "MuiSwitch", slot: "Thumb", overridesResolver: (a3, r) => r.thumb })(Yt(({ theme: a3 }) => ({ boxShadow: (a3.vars || a3).shadows[1], backgroundColor: "currentColor", width: 20, height: 20, borderRadius: "50%" }))), Di = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiSwitch" }), { className: c, color: f = "primary", edge: p = false, size: h = "medium", sx: g, ...m } = s, S = { ...s, color: f, edge: p, size: h }, b = dE(S), w = z.jsx(gE, { className: b.thumb, ownerState: S });
  return z.jsxs(pE, { className: Et(b.root, c), sx: g, ownerState: S, children: [z.jsx(hE, { type: "checkbox", icon: w, checkedIcon: w, ref: o, ownerState: S, ...m, classes: { ...b, root: b.switchBase } }), z.jsx(mE, { className: b.track, ownerState: S })] });
});
function yE(a3) {
  return ue("MuiTab", a3);
}
const Dn = oe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), vE = (a3) => {
  const { classes: r, textColor: o, fullWidth: s, wrapped: c, icon: f, label: p, selected: h, disabled: g } = a3, m = { root: ["root", f && p && "labelIcon", `textColor${vt(o)}`, s && "fullWidth", c && "wrapped", h && "selected", g && "disabled"], icon: ["iconWrapper", "icon"] };
  return pe(m, yE, r);
}, bE = bt(Pi, { name: "MuiTab", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.label && o.icon && r.labelIcon, r[`textColor${vt(o.textColor)}`], o.fullWidth && r.fullWidth, o.wrapped && r.wrapped, { [`& .${Dn.iconWrapper}`]: r.iconWrapper }, { [`& .${Dn.icon}`]: r.icon }];
} })(Yt(({ theme: a3 }) => ({ ...a3.typography.button, maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center", lineHeight: 1.25, variants: [{ props: ({ ownerState: r }) => r.label && (r.iconPosition === "top" || r.iconPosition === "bottom"), style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.label && r.iconPosition !== "top" && r.iconPosition !== "bottom", style: { flexDirection: "row" } }, { props: ({ ownerState: r }) => r.icon && r.label, style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "top", style: { [`& > .${Dn.icon}`]: { marginBottom: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "bottom", style: { [`& > .${Dn.icon}`]: { marginTop: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "start", style: { [`& > .${Dn.icon}`]: { marginRight: a3.spacing(1) } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "end", style: { [`& > .${Dn.icon}`]: { marginLeft: a3.spacing(1) } } }, { props: { textColor: "inherit" }, style: { color: "inherit", opacity: 0.6, [`&.${Dn.selected}`]: { opacity: 1 }, [`&.${Dn.disabled}`]: { opacity: (a3.vars || a3).palette.action.disabledOpacity } } }, { props: { textColor: "primary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.primary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: { textColor: "secondary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.secondary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: ({ ownerState: r }) => r.fullWidth, style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" } }, { props: ({ ownerState: r }) => r.wrapped, style: { fontSize: a3.typography.pxToRem(12) } }] }))), cs = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTab" }), { className: c, disabled: f = false, disableFocusRipple: p = false, fullWidth: h, icon: g, iconPosition: m = "top", indicator: S, label: b, onChange: w, onClick: _, onFocus: A, selected: x, selectionFollowsFocus: N, textColor: D = "inherit", value: q, wrapped: B = false, ...H } = s, R = { ...s, disabled: f, disableFocusRipple: p, selected: x, icon: !!g, iconPosition: m, label: !!b, fullWidth: h, textColor: D, wrapped: B }, V = vE(R), Z = g && b && C.isValidElement(g) ? C.cloneElement(g, { className: Et(V.icon, g.props.className) }) : g, it = (y) => {
    !x && w && w(y, q), _ && _(y);
  }, G = (y) => {
    N && !x && w && w(y, q), A && A(y);
  };
  return z.jsxs(bE, { focusRipple: !p, className: Et(V.root, c), ref: o, role: "tab", "aria-selected": x, disabled: f, onClick: it, onFocus: G, ownerState: R, tabIndex: x ? 0 : -1, ...H, children: [m === "top" || m === "start" ? z.jsxs(C.Fragment, { children: [Z, b] }) : z.jsxs(C.Fragment, { children: [b, Z] }), S] });
});
function SE(a3) {
  return ue("MuiToolbar", a3);
}
oe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const xE = (a3) => {
  const { classes: r, disableGutters: o, variant: s } = a3;
  return pe({ root: ["root", !o && "gutters", s] }, SE, r);
}, TE = bt("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, !o.disableGutters && r.gutters, r[o.variant]];
} })(Yt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: a3.spacing(2), paddingRight: a3.spacing(2), [a3.breakpoints.up("sm")]: { paddingLeft: a3.spacing(3), paddingRight: a3.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: a3.mixins.toolbar }] }))), EE = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiToolbar" }), { className: c, component: f = "div", disableGutters: p = false, variant: h = "regular", ...g } = s, m = { ...s, component: f, disableGutters: p, variant: h }, S = xE(m);
  return z.jsx(TE, { as: f, className: Et(S.root, c), ref: o, ownerState: m, ...g });
}), CE = la(z.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), wE = la(z.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
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
  }, b = (w) => {
    if (m) {
      c(new Error("Animation cancelled"));
      return;
    }
    h === null && (h = w);
    const _ = Math.min(1, (w - h) / p);
    if (r[a3] = f(_) * (o - g) + g, _ >= 1) {
      requestAnimationFrame(() => {
        c(null);
      });
      return;
    }
    requestAnimationFrame(b);
  };
  return g === o ? (c(new Error("Element already at target position")), S) : (requestAnimationFrame(b), S);
}
const ME = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function OE(a3) {
  const { onChange: r, ...o } = a3, s = C.useRef(), c = C.useRef(null), f = () => {
    s.current = c.current.offsetHeight - c.current.clientHeight;
  };
  return Hi(() => {
    const p = g0(() => {
      const g = s.current;
      f(), g !== s.current && r(s.current);
    }), h = Tr(c.current);
    return h.addEventListener("resize", p), () => {
      p.clear(), h.removeEventListener("resize", p);
    };
  }, [r]), C.useEffect(() => {
    f(), r(s.current);
  }, [r]), z.jsx("div", { style: ME, ...o, ref: c });
}
function zE(a3) {
  return ue("MuiTabScrollButton", a3);
}
const _E = oe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), kE = (a3) => {
  const { classes: r, orientation: o, disabled: s } = a3;
  return pe({ root: ["root", o, s && "disabled"] }, zE, r);
}, DE = bt(Pi, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.orientation && r[o.orientation]];
} })({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${_E.disabled}`]: { opacity: 0 }, variants: [{ props: { orientation: "vertical" }, style: { width: "100%", height: 40, "& svg": { transform: "var(--TabScrollButton-svgRotate)" } } }] }), BE = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTabScrollButton" }), { className: c, slots: f = {}, slotProps: p = {}, direction: h, orientation: g, disabled: m, ...S } = s, b = Yf(), w = { isRtl: b, ...s }, _ = kE(w), A = f.StartScrollButtonIcon ?? CE, x = f.EndScrollButtonIcon ?? wE, N = hn({ elementType: A, externalSlotProps: p.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: w }), D = hn({ elementType: x, externalSlotProps: p.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: w });
  return z.jsx(DE, { component: "div", className: Et(_.root, c), ref: o, role: null, ownerState: w, tabIndex: null, ...S, style: { ...S.style, ...g === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${b ? -90 : 90}deg)` } }, children: h === "left" ? z.jsx(A, { ...N }) : z.jsx(x, { ...D }) });
});
function NE(a3) {
  return ue("MuiTabs", a3);
}
const of = oe("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Ug = (a3, r) => a3 === r ? a3.firstChild : r && r.nextElementSibling ? r.nextElementSibling : a3.firstChild, Hg = (a3, r) => a3 === r ? a3.lastChild : r && r.previousElementSibling ? r.previousElementSibling : a3.lastChild, fs = (a3, r, o) => {
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
}, jE = (a3) => {
  const { vertical: r, fixed: o, hideScrollbar: s, scrollableX: c, scrollableY: f, centered: p, scrollButtonsHideMobile: h, classes: g } = a3;
  return pe({ root: ["root", r && "vertical"], scroller: ["scroller", o && "fixed", s && "hideScrollbar", c && "scrollableX", f && "scrollableY"], flexContainer: ["flexContainer", r && "flexContainerVertical", p && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", h && "scrollButtonsHideMobile"], scrollableX: [c && "scrollableX"], hideScrollbar: [s && "hideScrollbar"] }, NE, g);
}, UE = bt("div", { name: "MuiTabs", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${of.scrollButtons}`]: r.scrollButtons }, { [`& .${of.scrollButtons}`]: o.scrollButtonsHideMobile && r.scrollButtonsHideMobile }, r.root, o.vertical && r.vertical];
} })(Yt(({ theme: a3 }) => ({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex", variants: [{ props: ({ ownerState: r }) => r.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.scrollButtonsHideMobile, style: { [`& .${of.scrollButtons}`]: { [a3.breakpoints.down("sm")]: { display: "none" } } } }] }))), HE = bt("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.scroller, o.fixed && r.fixed, o.hideScrollbar && r.hideScrollbar, o.scrollableX && r.scrollableX, o.scrollableY && r.scrollableY];
} })({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap", variants: [{ props: ({ ownerState: a3 }) => a3.fixed, style: { overflowX: "hidden", width: "100%" } }, { props: ({ ownerState: a3 }) => a3.hideScrollbar, style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, { props: ({ ownerState: a3 }) => a3.scrollableX, style: { overflowX: "auto", overflowY: "hidden" } }, { props: ({ ownerState: a3 }) => a3.scrollableY, style: { overflowY: "auto", overflowX: "hidden" } }] }), LE = bt("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.flexContainer, o.vertical && r.flexContainerVertical, o.centered && r.centered];
} })({ display: "flex", variants: [{ props: ({ ownerState: a3 }) => a3.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: a3 }) => a3.centered, style: { justifyContent: "center" } }] }), $E = bt("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (a3, r) => r.indicator })(Yt(({ theme: a3 }) => ({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: a3.transitions.create(), variants: [{ props: { indicatorColor: "primary" }, style: { backgroundColor: (a3.vars || a3).palette.primary.main } }, { props: { indicatorColor: "secondary" }, style: { backgroundColor: (a3.vars || a3).palette.secondary.main } }, { props: ({ ownerState: r }) => r.vertical, style: { height: "100%", width: 2, right: 0 } }] }))), qE = bt(OE)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), Lg = {}, GE = C.forwardRef(function(r, o) {
  const s = ge({ props: r, name: "MuiTabs" }), c = Xi(), f = Yf(), { "aria-label": p, "aria-labelledby": h, action: g, centered: m = false, children: S, className: b, component: w = "div", allowScrollButtonsMobile: _ = false, indicatorColor: A = "primary", onChange: x, orientation: N = "horizontal", ScrollButtonComponent: D = BE, scrollButtons: q = "auto", selectionFollowsFocus: B, slots: H = {}, slotProps: R = {}, TabIndicatorProps: V = {}, TabScrollButtonProps: Z = {}, textColor: it = "primary", value: G, variant: y = "standard", visibleScrollbar: P = false, ...lt } = s, at = y === "scrollable", I = N === "vertical", Y = I ? "scrollTop" : "scrollLeft", U = I ? "top" : "left", J = I ? "bottom" : "right", W = I ? "clientHeight" : "clientWidth", et = I ? "height" : "width", E = { ...s, component: w, allowScrollButtonsMobile: _, indicatorColor: A, orientation: N, vertical: I, scrollButtons: q, textColor: it, variant: y, visibleScrollbar: P, fixed: !at, hideScrollbar: at && !P, scrollableX: at && !I, scrollableY: at && I, centered: m && !at, scrollButtonsHideMobile: !_ }, L = jE(E), ot = hn({ elementType: H.StartScrollButtonIcon, externalSlotProps: R.startScrollButtonIcon, ownerState: E }), st = hn({ elementType: H.EndScrollButtonIcon, externalSlotProps: R.endScrollButtonIcon, ownerState: E }), [rt, St] = C.useState(false), [nt, yt] = C.useState(Lg), [dt, Ct] = C.useState(false), [Rt, ce] = C.useState(false), [It, $t] = C.useState(false), [Oe, bn] = C.useState({ overflow: "hidden", scrollbarWidth: 0 }), Ge = /* @__PURE__ */ new Map(), Ht = C.useRef(null), fe = C.useRef(null), sn = () => {
    const pt = Ht.current;
    let ht;
    if (pt) {
      const jt = pt.getBoundingClientRect();
      ht = { clientWidth: pt.clientWidth, scrollLeft: pt.scrollLeft, scrollTop: pt.scrollTop, scrollWidth: pt.scrollWidth, top: jt.top, bottom: jt.bottom, left: jt.left, right: jt.right };
    }
    let wt;
    if (pt && G !== false) {
      const jt = fe.current.children;
      if (jt.length > 0) {
        const le = jt[Ge.get(G)];
        wt = le ? le.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: ht, tabMeta: wt };
  }, je = tn(() => {
    const { tabsMeta: pt, tabMeta: ht } = sn();
    let wt = 0, jt;
    I ? (jt = "top", ht && pt && (wt = ht.top - pt.top + pt.scrollTop)) : (jt = f ? "right" : "left", ht && pt && (wt = (f ? -1 : 1) * (ht[jt] - pt[jt] + pt.scrollLeft)));
    const le = { [jt]: wt, [et]: ht ? ht[et] : 0 };
    if (typeof nt[jt] != "number" || typeof nt[et] != "number") yt(le);
    else {
      const Ve = Math.abs(nt[jt] - le[jt]), nn = Math.abs(nt[et] - le[et]);
      (Ve >= 1 || nn >= 1) && yt(le);
    }
  }), en = (pt, { animation: ht = true } = {}) => {
    ht ? RE(Y, Ht.current, pt, { duration: c.transitions.duration.standard }) : Ht.current[Y] = pt;
  }, Tt = (pt) => {
    let ht = Ht.current[Y];
    I ? ht += pt : ht += pt * (f ? -1 : 1), en(ht);
  }, $n = () => {
    const pt = Ht.current[W];
    let ht = 0;
    const wt = Array.from(fe.current.children);
    for (let jt = 0; jt < wt.length; jt += 1) {
      const le = wt[jt];
      if (ht + le[W] > pt) {
        jt === 0 && (ht = pt);
        break;
      }
      ht += le[W];
    }
    return ht;
  }, Ue = () => {
    Tt(-1 * $n());
  }, ct = () => {
    Tt($n());
  }, ut = C.useCallback((pt) => {
    bn({ overflow: null, scrollbarWidth: pt });
  }, []), Mt = () => {
    const pt = {};
    pt.scrollbarSizeListener = at ? z.jsx(qE, { onChange: ut, className: Et(L.scrollableX, L.hideScrollbar) }) : null;
    const wt = at && (q === "auto" && (dt || Rt) || q === true);
    return pt.scrollButtonStart = wt ? z.jsx(D, { slots: { StartScrollButtonIcon: H.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: ot }, orientation: N, direction: f ? "right" : "left", onClick: Ue, disabled: !dt, ...Z, className: Et(L.scrollButtons, Z.className) }) : null, pt.scrollButtonEnd = wt ? z.jsx(D, { slots: { EndScrollButtonIcon: H.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: st }, orientation: N, direction: f ? "left" : "right", onClick: ct, disabled: !Rt, ...Z, className: Et(L.scrollButtons, Z.className) }) : null, pt;
  }, _t = tn((pt) => {
    const { tabsMeta: ht, tabMeta: wt } = sn();
    if (!(!wt || !ht)) {
      if (wt[U] < ht[U]) {
        const jt = ht[Y] + (wt[U] - ht[U]);
        en(jt, { animation: pt });
      } else if (wt[J] > ht[J]) {
        const jt = ht[Y] + (wt[J] - ht[J]);
        en(jt, { animation: pt });
      }
    }
  }), kt = tn(() => {
    at && q !== false && $t(!It);
  });
  C.useEffect(() => {
    const pt = g0(() => {
      Ht.current && je();
    });
    let ht;
    const wt = (Ve) => {
      Ve.forEach((nn) => {
        nn.removedNodes.forEach((Vt) => {
          ht == null ? void 0 : ht.unobserve(Vt);
        }), nn.addedNodes.forEach((Vt) => {
          ht == null ? void 0 : ht.observe(Vt);
        });
      }), pt(), kt();
    }, jt = Tr(Ht.current);
    jt.addEventListener("resize", pt);
    let le;
    return typeof ResizeObserver < "u" && (ht = new ResizeObserver(pt), Array.from(fe.current.children).forEach((Ve) => {
      ht.observe(Ve);
    })), typeof MutationObserver < "u" && (le = new MutationObserver(wt), le.observe(fe.current, { childList: true })), () => {
      pt.clear(), jt.removeEventListener("resize", pt), le == null ? void 0 : le.disconnect(), ht == null ? void 0 : ht.disconnect();
    };
  }, [je, kt]), C.useEffect(() => {
    const pt = Array.from(fe.current.children), ht = pt.length;
    if (typeof IntersectionObserver < "u" && ht > 0 && at && q !== false) {
      const wt = pt[0], jt = pt[ht - 1], le = { root: Ht.current, threshold: 0.99 }, Ve = (Sn) => {
        Ct(!Sn[0].isIntersecting);
      }, nn = new IntersectionObserver(Ve, le);
      nn.observe(wt);
      const Vt = (Sn) => {
        ce(!Sn[0].isIntersecting);
      }, Zt = new IntersectionObserver(Vt, le);
      return Zt.observe(jt), () => {
        nn.disconnect(), Zt.disconnect();
      };
    }
  }, [at, q, It, S == null ? void 0 : S.length]), C.useEffect(() => {
    St(true);
  }, []), C.useEffect(() => {
    je();
  }), C.useEffect(() => {
    _t(Lg !== nt);
  }, [_t, nt]), C.useImperativeHandle(g, () => ({ updateIndicator: je, updateScrollButtons: kt }), [je, kt]);
  const Ot = z.jsx($E, { ...V, className: Et(L.indicator, V.className), ownerState: E, style: { ...nt, ...V.style } });
  let Ce = 0;
  const Ye = C.Children.map(S, (pt) => {
    if (!C.isValidElement(pt)) return null;
    const ht = pt.props.value === void 0 ? Ce : pt.props.value;
    Ge.set(ht, Ce);
    const wt = ht === G;
    return Ce += 1, C.cloneElement(pt, { fullWidth: y === "fullWidth", indicator: wt && !rt && Ot, selected: wt, selectionFollowsFocus: B, onChange: x, textColor: it, value: ht, ...Ce === 1 && G === false && !pt.props.tabIndex ? { tabIndex: 0 } : {} });
  }), te = (pt) => {
    const ht = fe.current, wt = Ie(ht).activeElement;
    if (wt.getAttribute("role") !== "tab") return;
    let le = N === "horizontal" ? "ArrowLeft" : "ArrowUp", Ve = N === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (N === "horizontal" && f && (le = "ArrowRight", Ve = "ArrowLeft"), pt.key) {
      case le:
        pt.preventDefault(), fs(ht, wt, Hg);
        break;
      case Ve:
        pt.preventDefault(), fs(ht, wt, Ug);
        break;
      case "Home":
        pt.preventDefault(), fs(ht, null, Ug);
        break;
      case "End":
        pt.preventDefault(), fs(ht, null, Hg);
        break;
    }
  }, Kt = Mt();
  return z.jsxs(UE, { className: Et(L.root, b), ownerState: E, ref: o, as: w, ...lt, children: [Kt.scrollButtonStart, Kt.scrollbarSizeListener, z.jsxs(HE, { className: L.scroller, ownerState: E, style: { overflow: Oe.overflow, [I ? `margin${f ? "Left" : "Right"}` : "marginBottom"]: P ? void 0 : -Oe.scrollbarWidth }, ref: Ht, children: [z.jsx(LE, { "aria-label": p, "aria-labelledby": h, "aria-orientation": N === "vertical" ? "vertical" : null, className: L.flexContainer, ownerState: E, onKeyDown: te, ref: fe, role: "tablist", children: Ye }), rt && Ot] }), Kt.scrollButtonEnd] });
}), H0 = C.createContext(null);
function YE() {
  const [a3, r] = C.useState(null);
  return C.useEffect(() => {
    r(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []), a3;
}
function VE(a3) {
  const { children: r, value: o } = a3, s = YE(), c = C.useMemo(() => ({ idPrefix: s, value: o }), [s, o]);
  return z.jsx(H0.Provider, { value: c, children: r });
}
function L0() {
  return C.useContext(H0);
}
function $0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-P-${r}`;
}
function q0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-T-${r}`;
}
const XE = C.forwardRef(function(r, o) {
  const { children: s, ...c } = r, f = L0();
  if (f === null) throw new TypeError("No TabContext provided");
  const p = C.Children.map(s, (h) => C.isValidElement(h) ? C.cloneElement(h, { "aria-controls": $0(f, h.props.value), id: q0(f, h.props.value) }) : null);
  return z.jsx(GE, { ...c, ref: o, value: f.value, children: p });
});
function PE(a3) {
  return ue("MuiTabPanel", a3);
}
oe("MuiTabPanel", ["root", "hidden"]);
const QE = (a3) => {
  const { classes: r, hidden: o } = a3;
  return pe({ root: ["root", o && "hidden"] }, PE, r);
}, KE = bt("div", { name: "MuiTabPanel", slot: "Root", overridesResolver: (a3, r) => r.root })(({ theme: a3 }) => ({ padding: a3.spacing(3) })), ds = C.forwardRef(function(r, o) {
  const s = Tx({ props: r, name: "MuiTabPanel" }), { children: c, className: f, value: p, keepMounted: h = false, ...g } = s, m = { ...s }, S = QE(m), b = L0();
  if (b === null) throw new TypeError("No TabContext provided");
  const w = $0(b, p), _ = q0(b, p);
  return z.jsx(KE, { "aria-labelledby": _, className: Et(S.root, f), hidden: p !== b.value, id: w, ref: o, role: "tabpanel", ownerState: m, ...g, children: (h || p === b.value) && c });
}), G0 = la(z.jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8" }), "Replay");
class Je {
  constructor(r, o) {
    __publicField(this, "x");
    __publicField(this, "y");
    this.x = r, this.y = o;
  }
  static new(r, o) {
    return new Je(r, o);
  }
  asKey() {
    return `coord[${this.x},${this.y}]`;
  }
  equals(r, o) {
    return r instanceof Je ? this.x === r.x && this.y === r.y : typeof r == "number" && typeof o == "number" ? this.x === r && this.y === o : false;
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
    return r instanceof Je ? this.position.equals(r) : this.position.equals(r, o);
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
    this.positions = [Je.new(5, 7), Je.new(5, 6), Je.new(5, 5)], this.direction = "right", this.lastTickDirection = "right", this.growth = 0, this.keyPressQueue = "", this.keyPressedThisTick = false;
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
        return Je.new(r.x - 1, r.y);
      case "down":
        return Je.new(r.x + 1, r.y);
      case "left":
        return Je.new(r.x, r.y - 1);
      case "right":
        return Je.new(r.x, r.y + 1);
      default:
        return r;
    }
  }
}
class wf {
  constructor(r, o = true) {
    __publicField(this, "gridSize");
    __publicField(this, "score");
    __publicField(this, "autoSpawnFood");
    __publicField(this, "snake");
    __publicField(this, "foods");
    this.gridSize = r, this.score = 0, this.autoSpawnFood = o, this.snake = new FE(), this.foods = [], this.autoSpawnFood && this.spawnFood();
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
  fakeEat() {
    this.snake.eat(), this.score += 1;
  }
  tick() {
    let r = 0;
    if (this.snake.isDead(this.gridSize, this.gridSize)) return r;
    this.snake.tick();
    const o = this.snake.getHead(), s = this.foods.filter((c) => c.isAt(o));
    return s.forEach((c) => {
      this.snake.eat();
    }), s.length > 0 && (this.autoSpawnFood && this.spawnFood(), this.score += s.length, r += s.length), this.foods = this.foods.filter((c) => !c.isAt(o)), r;
  }
  gameOver() {
    return this.snake.isDead(this.gridSize, this.gridSize);
  }
  getScore() {
    return this.score;
  }
  spawnFood() {
    let r = [];
    for (let p = 0; p < this.gridSize; p++) for (let h = 0; h < this.gridSize; h++) r.push(Je.new(p, h));
    let o = this.snake.getPositions().concat(this.foods.map((p) => p.getPosition()));
    const s = r.filter((p) => !o.some((h) => h.equals(p)));
    if (s.length === 0) return;
    const c = this.randomCoord(s), f = new ZE(c);
    this.foods.push(f);
  }
  randomCoord(r) {
    const o = Math.floor(Math.random() * r.length);
    return r[o];
  }
}
function Wf(a3, r, o, s, c = "1px solid black") {
  const [f, p] = a3, [h, g] = r.map((m) => `${m}px`);
  return z.jsx("div", { className: "grid", children: Array(f).fill(0).map((m, S) => z.jsx("div", { className: "row", children: Array(p).fill(0).map((b, w) => {
    const _ = new Je(S, w), A = o.get(_.asKey());
    return z.jsx(wa, { className: "cell", sx: { backgroundColor: A ?? s, height: h, width: g, border: c } }, w);
  }) }, S)) });
}
function WE() {
  const a3 = "#61dafb", r = "#ff6347", o = "#282c34", m = "#870089", [S, b] = C.useState(0), [w, _] = C.useState(300), [A, x] = C.useState(new wf(20)), [N, D] = C.useState(/* @__PURE__ */ new Map()), [q, B] = C.useState(false), H = () => Wf([20, 20], [30, 30], N, o, "1px solid black"), R = (G) => {
    const y = /* @__PURE__ */ new Map();
    for (const P of G.getSnakeCoords()) y.set(P.asKey(), a3);
    for (const P of G.getFoods()) y.set(P.getPosition().asKey(), r);
    return y;
  }, V = () => {
    const G = new wf(20);
    x(G), b(0), B(false), D(R(A));
  }, Z = C.useCallback((G) => {
    switch (G.key) {
      case "ArrowUp":
        A.setDirection("up");
        break;
      case "ArrowDown":
        A.setDirection("down");
        break;
      case "ArrowLeft":
        A.setDirection("left");
        break;
      case "ArrowRight":
        A.setDirection("right");
        break;
      case "r":
        V();
        break;
    }
  }, [A]);
  C.useEffect(() => (window.addEventListener("keydown", Z), () => {
    window.removeEventListener("keydown", Z);
  }), [A]), C.useEffect(() => {
    const G = setInterval(() => {
      const y = A.tick();
      b((P) => P + y), A.gameOver() && B(true), D(R(A));
    }, w);
    return () => {
      clearInterval(G);
    };
  }, [A, w]);
  const it = H();
  return z.jsxs(z.Fragment, { children: [z.jsx(U0, { open: q, autoHideDuration: 6e3, anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: z.jsxs(k0, { onClose: () => B(false), severity: "error", sx: { width: "100%" }, children: ["Game Over! Your score is ", S, "."] }) }), z.jsx(Ar, { elevation: 15, sx: { width: "640px" }, children: it }), z.jsx(wa, { component: "section", color: "secondary", sx: { p: "10px", width: "640px" }, children: z.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", margin: "0px" }, children: [z.jsx(ki, { "aria-label": "Speed", value: 300 - w, min: 10, max: 300, color: "secondary", onChange: (G) => {
    const y = G.target;
    _(300 - Number(y.value));
  }, marks: [{ value: 10, label: "Slow" }, { value: 300, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${m}` } } }), z.jsxs("div", { style: { margin: "0px", color: `${m}` }, children: ["Score: ", S, z.jsxs(B0, { color: "secondary", variant: "extended", sx: { fontSize: "0.65rem", color: `${m}` }, onClick: V, children: [z.jsx(G0, { sx: { ml: -1 } }), " Restart"] })] })] }) })] });
}
const JE = la(z.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z" }), "Info");
let se;
const Y0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Y0.decode();
let Oi = null;
function IE() {
  return (Oi === null || Oi.byteLength === 0) && (Oi = new Uint8Array(se.memory.buffer)), Oi;
}
function tC(a3, r) {
  return a3 = a3 >>> 0, Y0.decode(IE().subarray(a3, a3 + r));
}
let Cl = null;
function eC() {
  return (Cl === null || Cl.buffer.detached === true || Cl.buffer.detached === void 0 && Cl.buffer !== se.memory.buffer) && (Cl = new DataView(se.memory.buffer)), Cl;
}
function nC(a3, r) {
  a3 = a3 >>> 0;
  const o = eC(), s = [];
  for (let c = a3; c < a3 + 4 * r; c += 4) s.push(se.__wbindgen_export_0.get(o.getUint32(c, true)));
  return se.__externref_drop_slice(a3, r), s;
}
const $g = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => se.__wbg_coordrs_free(a3 >>> 0, 1));
class Jf {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create(Jf.prototype);
    return o.__wbg_ptr = r, $g.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $g.unregister(this), r;
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
const qg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => se.__wbg_terrarium_free(a3 >>> 0, 1));
class Cr {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create(Cr.prototype);
    return o.__wbg_ptr = r, qg.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qg.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    se.__wbg_terrarium_free(r, 0);
  }
  static new(r, o) {
    const s = se.terrarium_new(r, o);
    return Cr.__wrap(s);
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
    return Jf.__wrap(r);
  }, a3.wbg.__wbindgen_init_externref_table = function() {
    const r = se.__wbindgen_export_0, o = r.grow(4);
    r.set(0, void 0), r.set(o + 0, void 0), r.set(o + 1, null), r.set(o + 2, true), r.set(o + 3, false);
  }, a3.wbg.__wbindgen_throw = function(r, o) {
    throw new Error(tC(r, o));
  }, a3;
}
function rC(a3, r) {
  return se = a3.exports, If.__wbindgen_wasm_module = r, Cl = null, Oi = null, se.__wbindgen_start(), se;
}
async function If(a3) {
  if (se !== void 0) return se;
  typeof a3 < "u" && (Object.getPrototypeOf(a3) === Object.prototype ? { module_or_path: a3 } = a3 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof a3 > "u" && (a3 = new URL("/assets/wasm-frontman_bg-Bo8dvM5D.wasm", import.meta.url));
  const r = lC();
  (typeof a3 == "string" || typeof Request == "function" && a3 instanceof Request || typeof URL == "function" && a3 instanceof URL) && (a3 = fetch(a3));
  const { instance: o, module: s } = await aC(await a3, r);
  return rC(o, s);
}
const iC = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "#242424", border: "2px solid #000", boxShadow: 24, p: 4 };
function oC() {
  const f = Math.round(33.333333333333336), p = Math.round(1e3 / 30), h = "#ff6347", g = "#282c34", m = C.useRef(null), S = (J) => Je.new(J.x, J.y), b = (J) => Wf([30, 30], [f, p], J, g, "1px solid black"), w = (J) => {
    const W = /* @__PURE__ */ new Map();
    J.get_cells().map((et) => S(et)).forEach((et) => {
      W.set(et.asKey(), h);
    }), lt(W);
  }, _ = (J) => {
    J.tick(G), w(J);
  }, A = (J) => {
    y((W) => !W);
  }, x = (J) => {
    V((W) => !W);
  }, N = (J) => {
    const W = (et, E) => E < 0 || et < 0 || E >= 30 || et >= 30;
    if (m.current && Y !== null) {
      const et = m.current.getBoundingClientRect(), E = J.clientX - et.left, L = J.clientY - et.top, ot = Math.floor(E / (p + 1 * 1)), st = Math.floor(L / (f + 2 * 1));
      W(st, ot) || Y.toggle(st, ot), w(Y);
    }
  }, D = (J) => {
    J.key === " " && Y !== null && _(Y);
  }, q = () => z.jsx(ET, { open: at, onClose: () => I(false), "aria-labeledby": "help-modal", "aria-describedby": "help-modal-description", children: z.jsxs(wa, { sx: iC, children: [z.jsx(Er, { id: "modal-modal-title", variant: "h5", component: "h2", children: 'Interactive finite "Game of Life" toy' }), z.jsx(Er, { id: "modal-modal-title", variant: "h6", component: "h2", children: 'You can click on the grid to toggle the cells as "alive" or "dead". Pressing space will tick the simulation. There are toggles for whether the border is considered alive, and an auto-play feature with adjustable speed.' })] }) }), [B, H] = C.useState(false), [R, V] = C.useState(false), [Z, it] = C.useState(20), [G, y] = C.useState(false), [P, lt] = C.useState(/* @__PURE__ */ new Map()), [at, I] = C.useState(false), [Y, U] = C.useState(null);
  return C.useEffect(() => R ? () => {
  } : (window.addEventListener("keydown", D), () => {
    window.removeEventListener("keydown", D);
  }), [Y, R, G]), C.useEffect(() => {
    if (!R) return;
    const J = setInterval(() => {
      Y !== null && _(Y);
    }, 1e3 - 9 * Z);
    return () => clearInterval(J);
  }, [Y, R, Z, G]), If().then(() => {
    if (B) return;
    const J = Cr.new(30, 30);
    U(J), H(true);
  }), B ? z.jsxs("div", { style: { display: "flex" }, children: [q(), z.jsxs(N0, { children: [z.jsx(Wa, { control: z.jsx(Di, { checked: G, onChange: A }), label: "Border lives" }), z.jsx(Wa, { control: z.jsx(Di, { checked: R, onChange: x }), label: "Auto tick" }), z.jsxs(wa, { marginRight: "15px", children: ["Tick speed", z.jsx(ki, { ...R ? { disabled: false } : { disabled: true }, "aria-label": "auto tick speed", value: Z, min: 1, max: 100, onChange: (J, W) => it(Number(W)) })] }), z.jsxs(wa, { onClick: () => I(true), children: [z.jsx(JE, {}), " What gives?"] })] }), z.jsx(Ar, { elevation: 15, ref: m, onClick: N, style: { width: 1e3, height: 1e3 }, children: b(P) })] }) : z.jsx("div", { children: "Loading..." });
}
function sC() {
  const a3 = "#61dafb", r = "#870089", o = "#ff6347", s = "#282c34", w = "#870089", _ = (nt) => Je.new(nt.x, nt.y), A = (nt) => Wf([20, 20], [30, 30], nt, s, "1px solid black"), x = (nt, yt) => {
    const dt = yt.getSnakeCoords()[0];
    yt.getSnakeCoords().forEach((Ct) => {
      nt.set(Ct.x, Ct.y, D ? 1 : 0);
    }), nt.set(dt.x, dt.y, B ? 1 : 0), yt.getFoods().forEach((Ct) => {
      const Rt = Ct.getPosition();
      nt.set(Rt.x, Rt.y, R ? 1 : 0);
    }), nt.tick(false), N(nt, yt);
  }, N = (nt, yt) => {
    const dt = /* @__PURE__ */ new Map();
    nt.get_cells().map((Ct) => _(Ct)).forEach((Ct) => {
      dt.set(Ct.asKey(), o);
    }), yt.getSnakeCoords().forEach((Ct) => {
      dt.set(Ct.asKey(), a3);
    }), yt.getFoods().forEach((Ct) => {
      dt.set(Ct.getPosition().asKey(), r);
    }), E(dt);
  }, [D, q] = C.useState(false), [B, H] = C.useState(false), [R, V] = C.useState(false), [Z, it] = C.useState(3), [G, y] = C.useState(300), [P, lt] = C.useState(3e3), [at, I] = C.useState(false), [Y, U] = C.useState(null), [J, W] = C.useState(false), [et, E] = C.useState(/* @__PURE__ */ new Map()), [L, ot] = C.useState(null), st = () => {
    const nt = new wf(20);
    for (let dt = 0; dt < Z - 1; dt++) nt.spawnFood();
    U(nt), W(false);
    const yt = Cr.new(20, 20);
    ot(yt), N(yt, nt);
  }, rt = C.useCallback((nt) => {
    if (Y !== null) switch (nt.key) {
      case "ArrowUp":
        Y.setDirection("up");
        break;
      case "ArrowDown":
        Y.setDirection("down");
        break;
      case "ArrowLeft":
        Y.setDirection("left");
        break;
      case "ArrowRight":
        Y.setDirection("right");
        break;
      case "r":
        st();
        break;
    }
  }, [Y]);
  if (C.useEffect(() => (window.addEventListener("keydown", rt), () => {
    window.removeEventListener("keydown", rt);
  }), [Y, L]), C.useEffect(() => {
    const nt = setInterval(() => {
      if (!(L === null || Y === null)) if (Y.tick(), Y.gameOver()) W(true);
      else {
        const yt = Y.getSnakeCoords()[0];
        L.get_cells().map((dt) => _(dt)).filter((dt) => yt.equals(dt)).forEach((dt) => {
          L.set(dt.x, dt.y, 0), Y.fakeEat();
        }), N(L, Y);
      }
    }, G);
    return () => {
      clearInterval(nt);
    };
  }, [Y, L, G]), C.useEffect(() => {
    const nt = setInterval(() => {
      L === null || Y === null || x(L, Y);
    }, P);
    return () => {
      clearInterval(nt);
    };
  }, [Y, L, P, D, B, R]), If().then(() => {
    if (at) return;
    const nt = Cr.new(20, 20);
    ot(nt), I(true), st();
  }), !at) return z.jsx("div", { children: "Loading..." });
  if (Y === null) return z.jsx("div", { children: "Error: no game! :-(" });
  console.log(D, B, R);
  const St = A(et);
  return z.jsxs(z.Fragment, { children: [z.jsx(U0, { open: J, autoHideDuration: 6e3, anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: z.jsxs(k0, { onClose: () => W(false), severity: "error", sx: { width: "100%" }, children: ["Game Over! Your score is ", Y.getScore(), "."] }) }), z.jsx(Ar, { elevation: 15, sx: { width: "640px" }, children: St }), z.jsx(wa, { component: "section", color: "secondary", sx: { p: "10px", width: "640px" }, children: z.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", margin: "0px" }, children: [z.jsxs(N0, { sx: { width: "100%" }, children: [z.jsx(Wa, { control: z.jsx(ki, { value: 300 - G, min: 10, max: 300, color: "secondary", onChange: (nt) => {
    const yt = nt.target;
    y(300 - Number(yt.value));
  }, marks: [{ value: 10, label: "Slow" }, { value: 300, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${w}` } } }), labelPlacement: "start", label: "Snake speed" }), z.jsx(Wa, { control: z.jsx(ki, { value: 3e3 - P, min: 100, max: 3e3, color: "secondary", onChange: (nt) => {
    const yt = nt.target;
    lt(3e3 - Number(yt.value));
  }, marks: [{ value: 100, label: "Slow" }, { value: 3e3, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${w}` } } }), labelPlacement: "start", label: "GoL speed" }), z.jsx(Wa, { control: z.jsx(ki, { value: Z, min: 1, max: 20, step: 1, valueLabelDisplay: "auto", color: "secondary", onChange: (nt) => {
    const yt = nt.target;
    it(Number(yt.value));
  }, marks: [{ value: 0, label: "1" }, { value: 20, label: "20" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${w}` } } }), labelPlacement: "start", label: "Number of food" }), z.jsx(Wa, { control: z.jsx(Di, { value: D, onChange: (nt) => {
    q((yt) => !yt);
  }, sx: { marginRight: "20px" } }), labelPlacement: "start", label: "Snake counts as alive" }), z.jsx(Wa, { control: z.jsx(Di, { value: B, onChange: (nt) => {
    H((yt) => !yt);
  }, sx: { marginRight: "20px" } }), labelPlacement: "start", label: "Snake head counts as alive" }), z.jsx(Wa, { control: z.jsx(Di, { value: R, onChange: (nt) => {
    V((yt) => !yt);
  }, sx: { marginRight: "20px" } }), labelPlacement: "start", label: "Food counts as alive" })] }), z.jsxs("div", { style: { margin: "0px", color: `${w}` }, children: ["Score: ", Y.getScore(), z.jsxs(B0, { color: "secondary", variant: "extended", sx: { fontSize: "0.65rem", color: `${w}` }, onClick: st, children: [z.jsx(G0, { sx: { ml: -1 } }), " Restart"] })] })] }) })] });
}
function uC() {
  const r = "https://avatars.githubusercontent.com/u/19390975?s=400&u=1358e735334214fa0a842a63d949fe5363e88494&v=4", [o, s] = C.useState("start"), c = (f, p) => {
    s(p);
  };
  return z.jsxs(wa, { sx: { display: "flex" }, children: [z.jsx(_2, { position: "fixed", color: "primary", sx: { height: "62px" }, children: z.jsxs(EE, { sx: { display: "flex", justifyContent: "flex-end" }, children: [z.jsx(G2, { src: r, alt: "Martin Frisk", sx: { border: "2px solid#222222", marginRight: "20px" } }), z.jsx(Er, { variant: "h5", noWrap: true, component: "div", children: "mightypirate1" })] }) }), z.jsx(wa, { component: "nav", sx: { width: "1000px", marginTop: "62px", height: "80vh" }, children: z.jsxs(VE, { value: o, children: [z.jsx(wa, { sx: { borderBottom: 1, borderColor: "divider" }, children: z.jsxs(XE, { onChange: c, "aria-label": "lab API tabs example", children: [z.jsx(cs, { label: "Disclaimer", value: "start" }), z.jsx(cs, { label: "Snake", value: "snake" }), z.jsx(cs, { label: "Life", value: "life" }), z.jsx(cs, { label: "SnakeLife", value: "snake-life" })] }) }), z.jsxs(ds, { value: "start", children: [z.jsx(Er, { children: "I am not a frontender, as you well can tell!" }), "Either way, there are some toys on the tabs above."] }), z.jsx(ds, { value: "snake", children: z.jsx(WE, {}) }), z.jsx(ds, { value: "life", children: z.jsx(oC, {}) }), z.jsx(ds, { value: "snake-life", children: z.jsx(sC, {}) })] }) })] });
}
function cC() {
  return z.jsx(uC, {});
}
cb.createRoot(document.getElementById("root")).render(z.jsx(C.StrictMode, { children: z.jsx(cC, {}) }));
