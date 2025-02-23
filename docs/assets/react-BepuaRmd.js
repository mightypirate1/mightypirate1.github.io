import { g as et } from "./@mui-TnplOvWg.js";
function rt(l, y) {
  for (var E = 0; E < y.length; E++) {
    const _ = y[E];
    if (typeof _ != "string" && !Array.isArray(_)) {
      for (const p in _) if (p !== "default" && !(p in l)) {
        const a = Object.getOwnPropertyDescriptor(_, p);
        a && Object.defineProperty(l, p, a.get ? a : { enumerable: true, get: () => _[p] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var h = { exports: {} }, C = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var D;
function nt() {
  if (D) return C;
  D = 1;
  var l = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function E(_, p, a) {
    var T = null;
    if (a !== void 0 && (T = "" + a), p.key !== void 0 && (T = "" + p.key), "key" in p) {
      a = {};
      for (var m in p) m !== "key" && (a[m] = p[m]);
    } else a = p;
    return p = a.ref, { $$typeof: l, type: _, key: T, ref: p !== void 0 ? p : null, props: a };
  }
  return C.Fragment = y, C.jsx = E, C.jsxs = E, C;
}
var U;
function ot() {
  return U || (U = 1, h.exports = nt()), h.exports;
}
var ct = ot(), O = { exports: {} }, o = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var z;
function ut() {
  if (z) return o;
  z = 1;
  var l = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function Q(t) {
    return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var H = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, N = {};
  function R(t, e, r) {
    this.props = t, this.context = e, this.refs = N, this.updater = r || H;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  }, R.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = R.prototype;
  function j(t, e, r) {
    this.props = t, this.context = e, this.refs = N, this.updater = r || H;
  }
  var S = j.prototype = new Y();
  S.constructor = j, k(S, R.prototype), S.isPureReactComponent = true;
  var M = Array.isArray, i = { H: null, A: null, T: null, S: null }, q = Object.prototype.hasOwnProperty;
  function w(t, e, r, n, s, f) {
    return r = f.ref, { $$typeof: l, type: t, key: e, ref: r !== void 0 ? r : null, props: f };
  }
  function X(t, e) {
    return w(t.type, e, void 0, void 0, void 0, t.props);
  }
  function x(t) {
    return typeof t == "object" && t !== null && t.$$typeof === l;
  }
  function Z(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(r) {
      return e[r];
    });
  }
  var L = /\/+/g;
  function g(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Z("" + t.key) : e.toString(36);
  }
  function b() {
  }
  function F(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(b, b) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function d(t, e, r, n, s) {
    var f = typeof t;
    (f === "undefined" || f === "boolean") && (t = null);
    var u = false;
    if (t === null) u = true;
    else switch (f) {
      case "bigint":
      case "string":
      case "number":
        u = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case l:
          case y:
            u = true;
            break;
          case P:
            return u = t._init, d(u(t._payload), e, r, n, s);
        }
    }
    if (u) return s = s(t), u = n === "" ? "." + g(t, 0) : n, M(s) ? (r = "", u != null && (r = u.replace(L, "$&/") + "/"), d(s, e, r, "", function(tt) {
      return tt;
    })) : s != null && (x(s) && (s = X(s, r + (s.key == null || t && t.key === s.key ? "" : ("" + s.key).replace(L, "$&/") + "/") + u)), e.push(s)), 1;
    u = 0;
    var v = n === "" ? "." : n + ":";
    if (M(t)) for (var c = 0; c < t.length; c++) n = t[c], f = v + g(n, c), u += d(n, e, r, f, s);
    else if (c = Q(t), typeof c == "function") for (t = c.call(t), c = 0; !(n = t.next()).done; ) n = n.value, f = v + g(n, c++), u += d(n, e, r, f, s);
    else if (f === "object") {
      if (typeof t.then == "function") return d(F(t), e, r, n, s);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return u;
  }
  function A(t, e, r) {
    if (t == null) return t;
    var n = [], s = 0;
    return d(t, n, "", "", function(f) {
      return e.call(r, f, s++);
    }), n;
  }
  function K(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r);
      }, function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var I = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function V() {
  }
  return o.Children = { map: A, forEach: function(t, e, r) {
    A(t, function() {
      e.apply(this, arguments);
    }, r);
  }, count: function(t) {
    var e = 0;
    return A(t, function() {
      e++;
    }), e;
  }, toArray: function(t) {
    return A(t, function(e) {
      return e;
    }) || [];
  }, only: function(t) {
    if (!x(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } }, o.Component = R, o.Fragment = E, o.Profiler = p, o.PureComponent = j, o.StrictMode = _, o.Suspense = B, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, o.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, o.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, o.cloneElement = function(t, e, r) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var n = k({}, t.props), s = t.key, f = void 0;
    if (e != null) for (u in e.ref !== void 0 && (f = void 0), e.key !== void 0 && (s = "" + e.key), e) !q.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (n[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
      for (var v = Array(u), c = 0; c < u; c++) v[c] = arguments[c + 2];
      n.children = v;
    }
    return w(t.type, s, void 0, void 0, f, n);
  }, o.createContext = function(t) {
    return t = { $$typeof: T, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = t, t.Consumer = { $$typeof: a, _context: t }, t;
  }, o.createElement = function(t, e, r) {
    var n, s = {}, f = null;
    if (e != null) for (n in e.key !== void 0 && (f = "" + e.key), e) q.call(e, n) && n !== "key" && n !== "__self" && n !== "__source" && (s[n] = e[n]);
    var u = arguments.length - 2;
    if (u === 1) s.children = r;
    else if (1 < u) {
      for (var v = Array(u), c = 0; c < u; c++) v[c] = arguments[c + 2];
      s.children = v;
    }
    if (t && t.defaultProps) for (n in u = t.defaultProps, u) s[n] === void 0 && (s[n] = u[n]);
    return w(t, f, void 0, void 0, null, s);
  }, o.createRef = function() {
    return { current: null };
  }, o.forwardRef = function(t) {
    return { $$typeof: m, render: t };
  }, o.isValidElement = x, o.lazy = function(t) {
    return { $$typeof: P, _payload: { _status: -1, _result: t }, _init: K };
  }, o.memo = function(t, e) {
    return { $$typeof: W, type: t, compare: e === void 0 ? null : e };
  }, o.startTransition = function(t) {
    var e = i.T, r = {};
    i.T = r;
    try {
      var n = t(), s = i.S;
      s !== null && s(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(V, I);
    } catch (f) {
      I(f);
    } finally {
      i.T = e;
    }
  }, o.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, o.use = function(t) {
    return i.H.use(t);
  }, o.useActionState = function(t, e, r) {
    return i.H.useActionState(t, e, r);
  }, o.useCallback = function(t, e) {
    return i.H.useCallback(t, e);
  }, o.useContext = function(t) {
    return i.H.useContext(t);
  }, o.useDebugValue = function() {
  }, o.useDeferredValue = function(t, e) {
    return i.H.useDeferredValue(t, e);
  }, o.useEffect = function(t, e) {
    return i.H.useEffect(t, e);
  }, o.useId = function() {
    return i.H.useId();
  }, o.useImperativeHandle = function(t, e, r) {
    return i.H.useImperativeHandle(t, e, r);
  }, o.useInsertionEffect = function(t, e) {
    return i.H.useInsertionEffect(t, e);
  }, o.useLayoutEffect = function(t, e) {
    return i.H.useLayoutEffect(t, e);
  }, o.useMemo = function(t, e) {
    return i.H.useMemo(t, e);
  }, o.useOptimistic = function(t, e) {
    return i.H.useOptimistic(t, e);
  }, o.useReducer = function(t, e, r) {
    return i.H.useReducer(t, e, r);
  }, o.useRef = function(t) {
    return i.H.useRef(t);
  }, o.useState = function(t) {
    return i.H.useState(t);
  }, o.useSyncExternalStore = function(t, e, r) {
    return i.H.useSyncExternalStore(t, e, r);
  }, o.useTransition = function() {
    return i.H.useTransition();
  }, o.version = "19.0.0", o;
}
var J;
function st() {
  return J || (J = 1, O.exports = ut()), O.exports;
}
var G = st();
const it = et(G), pt = rt({ __proto__: null, default: it }, [G]);
export {
  pt as R,
  st as a,
  it as b,
  ct as j,
  G as r
};
