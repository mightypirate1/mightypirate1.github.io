var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function $v(a3, r) {
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
function Og(a3) {
  return a3 && a3.__esModule && Object.prototype.hasOwnProperty.call(a3, "default") ? a3.default : a3;
}
var Bc = { exports: {} }, gi = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sm;
function qv() {
  if (Sm) return gi;
  Sm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, c, f) {
    var p = null;
    if (f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      f = {};
      for (var h in c) h !== "key" && (f[h] = c[h]);
    } else f = c;
    return c = f.ref, { $$typeof: a3, type: s, key: p, ref: c !== void 0 ? c : null, props: f };
  }
  return gi.Fragment = r, gi.jsx = o, gi.jsxs = o, gi;
}
var xm;
function Yv() {
  return xm || (xm = 1, Bc.exports = qv()), Bc.exports;
}
var U = Yv(), Nc = { exports: {} }, Rt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Tm;
function Gv() {
  if (Tm) return Rt;
  Tm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), T = Symbol.iterator;
  function E(C) {
    return C === null || typeof C != "object" ? null : (C = T && C[T] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var D = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, M = Object.assign, S = {};
  function N(C, j, st) {
    this.props = C, this.context = j, this.refs = S, this.updater = st || D;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(C, j) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, j, "setState");
  }, N.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function B() {
  }
  B.prototype = N.prototype;
  function G(C, j, st) {
    this.props = C, this.context = j, this.refs = S, this.updater = st || D;
  }
  var $ = G.prototype = new B();
  $.constructor = G, M($, N.prototype), $.isPureReactComponent = true;
  var H = Array.isArray, w = { H: null, A: null, T: null, S: null }, Z = Object.prototype.hasOwnProperty;
  function K(C, j, st, ft, lt, Ct) {
    return st = Ct.ref, { $$typeof: a3, type: C, key: j, ref: st !== void 0 ? st : null, props: Ct };
  }
  function rt(C, j) {
    return K(C.type, j, void 0, void 0, void 0, C.props);
  }
  function Q(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a3;
  }
  function v(C) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(st) {
      return j[st];
    });
  }
  var P = /\/+/g;
  function I(C, j) {
    return typeof C == "object" && C !== null && C.key != null ? v("" + C.key) : j.toString(36);
  }
  function at() {
  }
  function W(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(at, at) : (C.status = "pending", C.then(function(j) {
          C.status === "pending" && (C.status = "fulfilled", C.value = j);
        }, function(j) {
          C.status === "pending" && (C.status = "rejected", C.reason = j);
        })), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function tt(C, j, st, ft, lt) {
    var Ct = typeof C;
    (Ct === "undefined" || Ct === "boolean") && (C = null);
    var mt = false;
    if (C === null) mt = true;
    else switch (Ct) {
      case "bigint":
      case "string":
      case "number":
        mt = true;
        break;
      case "object":
        switch (C.$$typeof) {
          case a3:
          case r:
            mt = true;
            break;
          case x:
            return mt = C._init, tt(mt(C._payload), j, st, ft, lt);
        }
    }
    if (mt) return lt = lt(C), mt = ft === "" ? "." + I(C, 0) : ft, H(lt) ? (st = "", mt != null && (st = mt.replace(P, "$&/") + "/"), tt(lt, j, st, "", function(jt) {
      return jt;
    })) : lt != null && (Q(lt) && (lt = rt(lt, st + (lt.key == null || C && C.key === lt.key ? "" : ("" + lt.key).replace(P, "$&/") + "/") + mt)), j.push(lt)), 1;
    mt = 0;
    var re = ft === "" ? "." : ft + ":";
    if (H(C)) for (var Et = 0; Et < C.length; Et++) ft = C[Et], Ct = re + I(ft, Et), mt += tt(ft, j, st, Ct, lt);
    else if (Et = E(C), typeof Et == "function") for (C = Et.call(C), Et = 0; !(ft = C.next()).done; ) ft = ft.value, Ct = re + I(ft, Et++), mt += tt(ft, j, st, Ct, lt);
    else if (Ct === "object") {
      if (typeof C.then == "function") return tt(W(C), j, st, ft, lt);
      throw j = String(C), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    }
    return mt;
  }
  function L(C, j, st) {
    if (C == null) return C;
    var ft = [], lt = 0;
    return tt(C, ft, "", "", function(Ct) {
      return j.call(st, Ct, lt++);
    }), ft;
  }
  function nt(C) {
    if (C._status === -1) {
      var j = C._result;
      j = j(), j.then(function(st) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = st);
      }, function(st) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = st);
      }), C._status === -1 && (C._status = 0, C._result = j);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var J = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C), error: C });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function et() {
  }
  return Rt.Children = { map: L, forEach: function(C, j, st) {
    L(C, function() {
      j.apply(this, arguments);
    }, st);
  }, count: function(C) {
    var j = 0;
    return L(C, function() {
      j++;
    }), j;
  }, toArray: function(C) {
    return L(C, function(j) {
      return j;
    }) || [];
  }, only: function(C) {
    if (!Q(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, Rt.Component = N, Rt.Fragment = o, Rt.Profiler = c, Rt.PureComponent = G, Rt.StrictMode = s, Rt.Suspense = g, Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Rt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Rt.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Rt.cloneElement = function(C, j, st) {
    if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
    var ft = M({}, C.props), lt = C.key, Ct = void 0;
    if (j != null) for (mt in j.ref !== void 0 && (Ct = void 0), j.key !== void 0 && (lt = "" + j.key), j) !Z.call(j, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && j.ref === void 0 || (ft[mt] = j[mt]);
    var mt = arguments.length - 2;
    if (mt === 1) ft.children = st;
    else if (1 < mt) {
      for (var re = Array(mt), Et = 0; Et < mt; Et++) re[Et] = arguments[Et + 2];
      ft.children = re;
    }
    return K(C.type, lt, void 0, void 0, Ct, ft);
  }, Rt.createContext = function(C) {
    return C = { $$typeof: p, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }, C.Provider = C, C.Consumer = { $$typeof: f, _context: C }, C;
  }, Rt.createElement = function(C, j, st) {
    var ft, lt = {}, Ct = null;
    if (j != null) for (ft in j.key !== void 0 && (Ct = "" + j.key), j) Z.call(j, ft) && ft !== "key" && ft !== "__self" && ft !== "__source" && (lt[ft] = j[ft]);
    var mt = arguments.length - 2;
    if (mt === 1) lt.children = st;
    else if (1 < mt) {
      for (var re = Array(mt), Et = 0; Et < mt; Et++) re[Et] = arguments[Et + 2];
      lt.children = re;
    }
    if (C && C.defaultProps) for (ft in mt = C.defaultProps, mt) lt[ft] === void 0 && (lt[ft] = mt[ft]);
    return K(C, Ct, void 0, void 0, null, lt);
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(C) {
    return { $$typeof: h, render: C };
  }, Rt.isValidElement = Q, Rt.lazy = function(C) {
    return { $$typeof: x, _payload: { _status: -1, _result: C }, _init: nt };
  }, Rt.memo = function(C, j) {
    return { $$typeof: m, type: C, compare: j === void 0 ? null : j };
  }, Rt.startTransition = function(C) {
    var j = w.T, st = {};
    w.T = st;
    try {
      var ft = C(), lt = w.S;
      lt !== null && lt(st, ft), typeof ft == "object" && ft !== null && typeof ft.then == "function" && ft.then(et, J);
    } catch (Ct) {
      J(Ct);
    } finally {
      w.T = j;
    }
  }, Rt.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, Rt.use = function(C) {
    return w.H.use(C);
  }, Rt.useActionState = function(C, j, st) {
    return w.H.useActionState(C, j, st);
  }, Rt.useCallback = function(C, j) {
    return w.H.useCallback(C, j);
  }, Rt.useContext = function(C) {
    return w.H.useContext(C);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(C, j) {
    return w.H.useDeferredValue(C, j);
  }, Rt.useEffect = function(C, j) {
    return w.H.useEffect(C, j);
  }, Rt.useId = function() {
    return w.H.useId();
  }, Rt.useImperativeHandle = function(C, j, st) {
    return w.H.useImperativeHandle(C, j, st);
  }, Rt.useInsertionEffect = function(C, j) {
    return w.H.useInsertionEffect(C, j);
  }, Rt.useLayoutEffect = function(C, j) {
    return w.H.useLayoutEffect(C, j);
  }, Rt.useMemo = function(C, j) {
    return w.H.useMemo(C, j);
  }, Rt.useOptimistic = function(C, j) {
    return w.H.useOptimistic(C, j);
  }, Rt.useReducer = function(C, j, st) {
    return w.H.useReducer(C, j, st);
  }, Rt.useRef = function(C) {
    return w.H.useRef(C);
  }, Rt.useState = function(C) {
    return w.H.useState(C);
  }, Rt.useSyncExternalStore = function(C, j, st) {
    return w.H.useSyncExternalStore(C, j, st);
  }, Rt.useTransition = function() {
    return w.H.useTransition();
  }, Rt.version = "19.0.0", Rt;
}
var Cm;
function hf() {
  return Cm || (Cm = 1, Nc.exports = Gv()), Nc.exports;
}
var O = hf();
const In = Og(O), Wc = $v({ __proto__: null, default: In }, [O]);
var Uc = { exports: {} }, yi = {}, Hc = { exports: {} }, jc = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Em;
function Vv() {
  return Em || (Em = 1, function(a3) {
    function r(L, nt) {
      var J = L.length;
      L.push(nt);
      t: for (; 0 < J; ) {
        var et = J - 1 >>> 1, C = L[et];
        if (0 < c(C, nt)) L[et] = nt, L[J] = C, J = et;
        else break t;
      }
    }
    function o(L) {
      return L.length === 0 ? null : L[0];
    }
    function s(L) {
      if (L.length === 0) return null;
      var nt = L[0], J = L.pop();
      if (J !== nt) {
        L[0] = J;
        t: for (var et = 0, C = L.length, j = C >>> 1; et < j; ) {
          var st = 2 * (et + 1) - 1, ft = L[st], lt = st + 1, Ct = L[lt];
          if (0 > c(ft, J)) lt < C && 0 > c(Ct, ft) ? (L[et] = Ct, L[lt] = J, et = lt) : (L[et] = ft, L[st] = J, et = st);
          else if (lt < C && 0 > c(Ct, J)) L[et] = Ct, L[lt] = J, et = lt;
          else break t;
        }
      }
      return nt;
    }
    function c(L, nt) {
      var J = L.sortIndex - nt.sortIndex;
      return J !== 0 ? J : L.id - nt.id;
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
    var g = [], m = [], x = 1, T = null, E = 3, D = false, M = false, S = false, N = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function $(L) {
      for (var nt = o(m); nt !== null; ) {
        if (nt.callback === null) s(m);
        else if (nt.startTime <= L) s(m), nt.sortIndex = nt.expirationTime, r(g, nt);
        else break;
        nt = o(m);
      }
    }
    function H(L) {
      if (S = false, $(L), !M) if (o(g) !== null) M = true, W();
      else {
        var nt = o(m);
        nt !== null && tt(H, nt.startTime - L);
      }
    }
    var w = false, Z = -1, K = 5, rt = -1;
    function Q() {
      return !(a3.unstable_now() - rt < K);
    }
    function v() {
      if (w) {
        var L = a3.unstable_now();
        rt = L;
        var nt = true;
        try {
          t: {
            M = false, S && (S = false, B(Z), Z = -1), D = true;
            var J = E;
            try {
              e: {
                for ($(L), T = o(g); T !== null && !(T.expirationTime > L && Q()); ) {
                  var et = T.callback;
                  if (typeof et == "function") {
                    T.callback = null, E = T.priorityLevel;
                    var C = et(T.expirationTime <= L);
                    if (L = a3.unstable_now(), typeof C == "function") {
                      T.callback = C, $(L), nt = true;
                      break e;
                    }
                    T === o(g) && s(g), $(L);
                  } else s(g);
                  T = o(g);
                }
                if (T !== null) nt = true;
                else {
                  var j = o(m);
                  j !== null && tt(H, j.startTime - L), nt = false;
                }
              }
              break t;
            } finally {
              T = null, E = J, D = false;
            }
            nt = void 0;
          }
        } finally {
          nt ? P() : w = false;
        }
      }
    }
    var P;
    if (typeof G == "function") P = function() {
      G(v);
    };
    else if (typeof MessageChannel < "u") {
      var I = new MessageChannel(), at = I.port2;
      I.port1.onmessage = v, P = function() {
        at.postMessage(null);
      };
    } else P = function() {
      N(v, 0);
    };
    function W() {
      w || (w = true, P());
    }
    function tt(L, nt) {
      Z = N(function() {
        L(a3.unstable_now());
      }, nt);
    }
    a3.unstable_IdlePriority = 5, a3.unstable_ImmediatePriority = 1, a3.unstable_LowPriority = 4, a3.unstable_NormalPriority = 3, a3.unstable_Profiling = null, a3.unstable_UserBlockingPriority = 2, a3.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, a3.unstable_continueExecution = function() {
      M || D || (M = true, W());
    }, a3.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < L ? Math.floor(1e3 / L) : 5;
    }, a3.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, a3.unstable_getFirstCallbackNode = function() {
      return o(g);
    }, a3.unstable_next = function(L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var nt = 3;
          break;
        default:
          nt = E;
      }
      var J = E;
      E = nt;
      try {
        return L();
      } finally {
        E = J;
      }
    }, a3.unstable_pauseExecution = function() {
    }, a3.unstable_requestPaint = function() {
    }, a3.unstable_runWithPriority = function(L, nt) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var J = E;
      E = L;
      try {
        return nt();
      } finally {
        E = J;
      }
    }, a3.unstable_scheduleCallback = function(L, nt, J) {
      var et = a3.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? et + J : et) : J = et, L) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = J + C, L = { id: x++, callback: nt, priorityLevel: L, startTime: J, expirationTime: C, sortIndex: -1 }, J > et ? (L.sortIndex = J, r(m, L), o(g) === null && L === o(m) && (S ? (B(Z), Z = -1) : S = true, tt(H, J - et))) : (L.sortIndex = C, r(g, L), M || D || (M = true, W())), L;
    }, a3.unstable_shouldYield = Q, a3.unstable_wrapCallback = function(L) {
      var nt = E;
      return function() {
        var J = E;
        E = nt;
        try {
          return L.apply(this, arguments);
        } finally {
          E = J;
        }
      };
    };
  }(jc)), jc;
}
var Am;
function Xv() {
  return Am || (Am = 1, Hc.exports = Vv()), Hc.exports;
}
var Lc = { exports: {} }, Ze = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var wm;
function Qv() {
  if (wm) return Ze;
  wm = 1;
  var a3 = hf();
  function r(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++) m += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = { d: { f: o, r: function() {
    throw Error(r(522));
  }, D: o, C: o, L: o, m: o, X: o, S: o, M: o }, p: 0, findDOMNode: null }, c = Symbol.for("react.portal");
  function f(g, m, x) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: T == null ? null : "" + T, children: g, containerInfo: m, implementation: x };
  }
  var p = a3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ze.createPortal = function(g, m) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
    return f(g, m, null, x);
  }, Ze.flushSync = function(g) {
    var m = p.T, x = s.p;
    try {
      if (p.T = null, s.p = 2, g) return g();
    } finally {
      p.T = m, s.p = x, s.d.f();
    }
  }, Ze.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(g, m));
  }, Ze.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, Ze.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var x = m.as, T = h(x, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, D = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      x === "style" ? s.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: T, integrity: E, fetchPriority: D }) : x === "script" && s.d.X(g, { crossOrigin: T, integrity: E, fetchPriority: D, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, Ze.preinitModule = function(g, m) {
    if (typeof g == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var x = h(m.as, m.crossOrigin);
        s.d.M(g, { crossOrigin: x, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && s.d.M(g);
  }, Ze.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var x = m.as, T = h(x, m.crossOrigin);
      s.d.L(g, x, { crossOrigin: T, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, Ze.preloadModule = function(g, m) {
    if (typeof g == "string") if (m) {
      var x = h(m.as, m.crossOrigin);
      s.d.m(g, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: x, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else s.d.m(g);
  }, Ze.requestFormReset = function(g) {
    s.d.r(g);
  }, Ze.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, Ze.useFormState = function(g, m, x) {
    return p.H.useFormState(g, m, x);
  }, Ze.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Ze.version = "19.0.0", Ze;
}
var Rm;
function zg() {
  if (Rm) return Lc.exports;
  Rm = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Lc.exports = Qv(), Lc.exports;
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
var Mm;
function Zv() {
  if (Mm) return yi;
  Mm = 1;
  var a3 = Xv(), r = hf(), o = zg();
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
  var f = Symbol.for("react.element"), p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.consumer"), D = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.for("react.memo_cache_sentinel"), w = Symbol.iterator;
  function Z(t) {
    return t === null || typeof t != "object" ? null : (t = w && t[w] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var K = Symbol.for("react.client.reference");
  function rt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === K ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case g:
        return "Fragment";
      case h:
        return "Portal";
      case x:
        return "Profiler";
      case m:
        return "StrictMode";
      case S:
        return "Suspense";
      case N:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case D:
        return (t.displayName || "Context") + ".Provider";
      case E:
        return (t._context.displayName || "Context") + ".Consumer";
      case M:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case B:
        return e = t.displayName || null, e !== null ? e : rt(t.type) || "Memo";
      case G:
        e = t._payload, t = t._init;
        try {
          return rt(t(e));
        } catch {
        }
    }
    return null;
  }
  var Q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.assign, P, I;
  function at(t) {
    if (P === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      P = e && e[1] || "", I = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + P + t + I;
  }
  var W = false;
  function tt(t, e) {
    if (!t || W) return "";
    W = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var F = function() {
              throw Error();
            };
            if (Object.defineProperty(F.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(F, []);
              } catch (Y) {
                var k = Y;
              }
              Reflect.construct(t, [], F);
            } else {
              try {
                F.call();
              } catch (Y) {
                k = Y;
              }
              t.call(F.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Y) {
              k = Y;
            }
            (F = t()) && typeof F.catch == "function" && F.catch(function() {
            });
          }
        } catch (Y) {
          if (Y && k && typeof Y.stack == "string") return [Y.stack, k.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      i && i.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = l.DetermineComponentFrameRoot(), d = u[0], y = u[1];
      if (d && y) {
        var b = d.split(`
`), R = y.split(`
`);
        for (i = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; i < R.length && !R[i].includes("DetermineComponentFrameRoot"); ) i++;
        if (l === b.length || i === R.length) for (l = b.length - 1, i = R.length - 1; 1 <= l && 0 <= i && b[l] !== R[i]; ) i--;
        for (; 1 <= l && 0 <= i; l--, i--) if (b[l] !== R[i]) {
          if (l !== 1 || i !== 1) do
            if (l--, i--, 0 > i || b[l] !== R[i]) {
              var V = `
` + b[l].replace(" at new ", " at ");
              return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), V;
            }
          while (1 <= l && 0 <= i);
          break;
        }
      }
    } finally {
      W = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? at(n) : "";
  }
  function L(t) {
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
        return t = tt(t.type, false), t;
      case 11:
        return t = tt(t.type.render, false), t;
      case 1:
        return t = tt(t.type, true), t;
      default:
        return "";
    }
  }
  function nt(t) {
    try {
      var e = "";
      do
        e += L(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function J(t) {
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
  function C(t) {
    if (J(t) !== t) throw Error(s(188));
  }
  function j(t) {
    var e = t.alternate;
    if (!e) {
      if (e = J(t), e === null) throw Error(s(188));
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
          if (u === n) return C(i), t;
          if (u === l) return C(i), e;
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
  function st(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = st(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var ft = Array.isArray, lt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ct = { pending: false, data: null, method: null, action: null }, mt = [], re = -1;
  function Et(t) {
    return { current: t };
  }
  function jt(t) {
    0 > re || (t.current = mt[re], mt[re] = null, re--);
  }
  function Dt(t, e) {
    re++, mt[re] = t.current, t.current = e;
  }
  var pe = Et(null), Se = Et(null), Qt = Et(null), Oe = Et(null);
  function vn(t, e) {
    switch (Dt(Qt, e), Dt(Se, t), Dt(pe, null), t = e.nodeType, t) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Ph(e) : 0;
        break;
      default:
        if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI) t = Ph(t), e = Fh(t, e);
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
    jt(pe), Dt(pe, e);
  }
  function Ye() {
    jt(pe), jt(Se), jt(Qt);
  }
  function Ut(t) {
    t.memoizedState !== null && Dt(Oe, t);
    var e = pe.current, n = Fh(e, t.type);
    e !== n && (Dt(Se, t), Dt(pe, n));
  }
  function oe(t) {
    Se.current === t && (jt(pe), jt(Se)), Oe.current === t && (jt(Oe), fi._currentValue = Ct);
  }
  var rn = Object.prototype.hasOwnProperty, Ue = a3.unstable_scheduleCallback, Je = a3.unstable_cancelCallback, vt = a3.unstable_shouldYield, Hn = a3.unstable_requestPaint, He = a3.unstable_now, ot = a3.unstable_getCurrentPriorityLevel, it = a3.unstable_ImmediatePriority, At = a3.unstable_UserBlockingPriority, Mt = a3.unstable_NormalPriority, Ot = a3.unstable_LowPriority, wt = a3.unstable_IdlePriority, Ee = a3.log, Ge = a3.unstable_setDisableYieldValue, Jt = null, Zt = null;
  function ct(t) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function") try {
      Zt.onCommitFiberRoot(Jt, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  function dt(t) {
    if (typeof Ee == "function" && Ge(t), Zt && typeof Zt.setStrictMode == "function") try {
      Zt.setStrictMode(Jt, t);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : Ve, Bt = Math.log, ne = Math.LN2;
  function Ve(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Bt(t) / ne | 0) | 0;
  }
  var Ie = 128, qt = 4194304;
  function Kt(t) {
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
  function bn(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var l = 0, i = t.suspendedLanes, u = t.pingedLanes, d = t.warmLanes;
    t = t.finishedLanes !== 0;
    var y = n & 134217727;
    return y !== 0 ? (n = y & ~i, n !== 0 ? l = Kt(n) : (u &= y, u !== 0 ? l = Kt(u) : t || (d = y & ~d, d !== 0 && (l = Kt(d))))) : (y = n & ~i, y !== 0 ? l = Kt(y) : u !== 0 ? l = Kt(u) : t || (d = n & ~d, d !== 0 && (l = Kt(d)))), l === 0 ? 0 : e !== 0 && e !== l && !(e & i) && (i = l & -l, d = e & -e, i >= d || i === 32 && (d & 4194176) !== 0) ? e : l;
  }
  function Gn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function jn(t, e) {
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
  function qf() {
    var t = Ie;
    return Ie <<= 1, !(Ie & 4194176) && (Ie = 128), t;
  }
  function Yf() {
    var t = qt;
    return qt <<= 1, !(qt & 62914560) && (qt = 4194304), t;
  }
  function Os(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Tr(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function O0(t, e, n, l, i, u) {
    var d = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var y = t.entanglements, b = t.expirationTimes, R = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var V = 31 - St(n), F = 1 << V;
      y[V] = 0, b[V] = -1;
      var k = R[V];
      if (k !== null) for (R[V] = null, V = 0; V < k.length; V++) {
        var Y = k[V];
        Y !== null && (Y.lane &= -536870913);
      }
      n &= ~F;
    }
    l !== 0 && Gf(t, l, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e));
  }
  function Gf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - St(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194218;
  }
  function Vf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - St(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function Xf(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Qf() {
    var t = lt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : hm(t.type));
  }
  function z0(t, e) {
    var n = lt.p;
    try {
      return lt.p = t, e();
    } finally {
      lt.p = n;
    }
  }
  var Aa = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + Aa, tn = "__reactProps$" + Aa, wl = "__reactContainer$" + Aa, zs = "__reactEvents$" + Aa, _0 = "__reactListeners$" + Aa, D0 = "__reactHandles$" + Aa, Zf = "__reactResources$" + Aa, Cr = "__reactMarker$" + Aa;
  function _s(t) {
    delete t[Xe], delete t[tn], delete t[zs], delete t[_0], delete t[D0];
  }
  function Ja(t) {
    var e = t[Xe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[wl] || n[Xe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Ih(t); t !== null; ) {
          if (n = t[Xe]) return n;
          t = Ih(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Rl(t) {
    if (t = t[Xe] || t[wl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Er(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ml(t) {
    var e = t[Zf];
    return e || (e = t[Zf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function De(t) {
    t[Cr] = true;
  }
  var Kf = /* @__PURE__ */ new Set(), Pf = {};
  function Ia(t, e) {
    Ol(t, e), Ol(t + "Capture", e);
  }
  function Ol(t, e) {
    for (Pf[t] = e, t = 0; t < e.length; t++) Kf.add(e[t]);
  }
  var ea = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ff = {}, Wf = {};
  function B0(t) {
    return rn.call(Wf, t) ? true : rn.call(Ff, t) ? false : k0.test(t) ? Wf[t] = true : (Ff[t] = true, false);
  }
  function Ui(t, e, n) {
    if (B0(e)) if (n === null) t.removeAttribute(e);
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
  function Hi(t, e, n) {
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
  function na(t, e, n, l) {
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
  function Sn(t) {
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
  function Jf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function N0(t) {
    var e = Jf(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), l = "" + t[e];
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
  function ji(t) {
    t._valueTracker || (t._valueTracker = N0(t));
  }
  function If(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), l = "";
    return t && (l = Jf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), true) : false;
  }
  function Li(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var U0 = /[\n"\\]/g;
  function xn(t) {
    return t.replace(U0, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ds(t, e, n, l, i, u, d, y) {
    t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Sn(e)) : t.value !== "" + Sn(e) && (t.value = "" + Sn(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? ks(t, d, Sn(e)) : n != null ? ks(t, d, Sn(n)) : l != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Sn(y) : t.removeAttribute("name");
  }
  function td(t, e, n, l, i, u, d, y) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) return;
      n = n != null ? "" + Sn(n) : "", e = e != null ? "" + Sn(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = y ? t.checked : !!l, t.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d);
  }
  function ks(t, e, n) {
    e === "number" && Li(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function zl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++) e["$" + n[i]] = true;
      for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && l && (t[n].defaultSelected = true);
    } else {
      for (n = "" + Sn(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = true, l && (t[i].defaultSelected = true);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = true);
    }
  }
  function ed(t, e, n) {
    if (e != null && (e = "" + Sn(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Sn(n) : "";
  }
  function nd(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (ft(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = Sn(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l);
  }
  function _l(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var H0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ad(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || H0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function ld(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (t = t.style, n != null) {
      for (var l in n) !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e) l = e[i], e.hasOwnProperty(i) && n[i] !== l && ad(t, i, l);
    } else for (var u in e) e.hasOwnProperty(u) && ad(t, u, e[u]);
  }
  function Bs(t) {
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
  var j0 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), L0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $i(t) {
    return L0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Ns = null;
  function Us(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Dl = null, kl = null;
  function rd(t) {
    var e = Rl(t);
    if (e && (t = e.stateNode)) {
      var n = t[tn] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ds(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + xn("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[tn] || null;
                if (!i) throw Error(s(90));
                Ds(l, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
              }
            }
            for (e = 0; e < n.length; e++) l = n[e], l.form === t.form && If(l);
          }
          break t;
        case "textarea":
          ed(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && zl(t, !!n.multiple, e, false);
      }
    }
  }
  var Hs = false;
  function id(t, e, n) {
    if (Hs) return t(e, n);
    Hs = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Hs = false, (Dl !== null || kl !== null) && (Eo(), Dl && (e = Dl, t = kl, kl = Dl = null, rd(e), t))) for (e = 0; e < t.length; e++) rd(t[e]);
    }
  }
  function Ar(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[tn] || null;
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
  var js = false;
  if (ea) try {
    var wr = {};
    Object.defineProperty(wr, "passive", { get: function() {
      js = true;
    } }), window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, wr);
  } catch {
    js = false;
  }
  var wa = null, Ls = null, qi = null;
  function od() {
    if (qi) return qi;
    var t, e = Ls, n = e.length, l, i = "value" in wa ? wa.value : wa.textContent, u = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === i[u - l]; l++) ;
    return qi = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Yi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Gi() {
    return true;
  }
  function sd() {
    return false;
  }
  function en(t) {
    function e(n, l, i, u, d) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var y in t) t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Gi : sd, this.isPropagationStopped = sd, this;
    }
    return v(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Gi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Gi);
    }, persist: function() {
    }, isPersistent: Gi }), e;
  }
  var tl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vi = en(tl), Rr = v({}, tl, { view: 0, detail: 0 }), $0 = en(Rr), $s, qs, Mr, Xi = v({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gs, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Mr && (Mr && t.type === "mousemove" ? ($s = t.screenX - Mr.screenX, qs = t.screenY - Mr.screenY) : qs = $s = 0, Mr = t), $s);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : qs;
  } }), ud = en(Xi), q0 = v({}, Xi, { dataTransfer: 0 }), Y0 = en(q0), G0 = v({}, Rr, { relatedTarget: 0 }), Ys = en(G0), V0 = v({}, tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), X0 = en(V0), Q0 = v({}, tl, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), Z0 = en(Q0), K0 = v({}, tl, { data: 0 }), cd = en(K0), P0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, F0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, W0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function J0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = W0[t]) ? !!e[t] : false;
  }
  function Gs() {
    return J0;
  }
  var I0 = v({}, Rr, { key: function(t) {
    if (t.key) {
      var e = P0[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = Yi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? F0[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gs, charCode: function(t) {
    return t.type === "keypress" ? Yi(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Yi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), ty = en(I0), ey = v({}, Xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fd = en(ey), ny = v({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gs }), ay = en(ny), ly = v({}, tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ry = en(ly), iy = v({}, Xi, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), oy = en(iy), sy = v({}, tl, { newState: 0, oldState: 0 }), uy = en(sy), cy = [9, 13, 27, 32], Vs = ea && "CompositionEvent" in window, Or = null;
  ea && "documentMode" in document && (Or = document.documentMode);
  var fy = ea && "TextEvent" in window && !Or, dd = ea && (!Vs || Or && 8 < Or && 11 >= Or), pd = " ", hd = false;
  function md(t, e) {
    switch (t) {
      case "keyup":
        return cy.indexOf(e.keyCode) !== -1;
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
  function gd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Bl = false;
  function dy(t, e) {
    switch (t) {
      case "compositionend":
        return gd(e);
      case "keypress":
        return e.which !== 32 ? null : (hd = true, pd);
      case "textInput":
        return t = e.data, t === pd && hd ? null : t;
      default:
        return null;
    }
  }
  function py(t, e) {
    if (Bl) return t === "compositionend" || !Vs && md(t, e) ? (t = od(), qi = Ls = wa = null, Bl = false, t) : null;
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
        return dd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var hy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function yd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!hy[t.type] : e === "textarea";
  }
  function vd(t, e, n, l) {
    Dl ? kl ? kl.push(l) : kl = [l] : Dl = l, e = Oo(e, "onChange"), 0 < e.length && (n = new Vi("onChange", "change", null, n, l), t.push({ event: n, listeners: e }));
  }
  var zr = null, _r = null;
  function my(t) {
    Vh(t, 0);
  }
  function Qi(t) {
    var e = Er(t);
    if (If(e)) return t;
  }
  function bd(t, e) {
    if (t === "change") return e;
  }
  var Sd = false;
  if (ea) {
    var Xs;
    if (ea) {
      var Qs = "oninput" in document;
      if (!Qs) {
        var xd = document.createElement("div");
        xd.setAttribute("oninput", "return;"), Qs = typeof xd.oninput == "function";
      }
      Xs = Qs;
    } else Xs = false;
    Sd = Xs && (!document.documentMode || 9 < document.documentMode);
  }
  function Td() {
    zr && (zr.detachEvent("onpropertychange", Cd), _r = zr = null);
  }
  function Cd(t) {
    if (t.propertyName === "value" && Qi(_r)) {
      var e = [];
      vd(e, _r, t, Us(t)), id(my, e);
    }
  }
  function gy(t, e, n) {
    t === "focusin" ? (Td(), zr = e, _r = n, zr.attachEvent("onpropertychange", Cd)) : t === "focusout" && Td();
  }
  function yy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Qi(_r);
  }
  function vy(t, e) {
    if (t === "click") return Qi(e);
  }
  function by(t, e) {
    if (t === "input" || t === "change") return Qi(e);
  }
  function Sy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var on = typeof Object.is == "function" ? Object.is : Sy;
  function Dr(t, e) {
    if (on(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return false;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!rn.call(e, i) || !on(t[i], e[i])) return false;
    }
    return true;
  }
  function Ed(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ad(t, e) {
    var n = Ed(t);
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
      n = Ed(n);
    }
  }
  function wd(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? wd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Rd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Li(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Li(t.document);
    }
    return e;
  }
  function Zs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  function xy(t, e) {
    var n = Rd(e);
    e = t.focusedElem;
    var l = t.selectionRange;
    if (n !== e && e && e.ownerDocument && wd(e.ownerDocument.documentElement, e)) {
      if (l !== null && Zs(e)) {
        if (t = l.start, n = l.end, n === void 0 && (n = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length);
        else if (n = (t = e.ownerDocument || document) && t.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var i = e.textContent.length, u = Math.min(l.start, i);
          l = l.end === void 0 ? u : Math.min(l.end, i), !n.extend && u > l && (i = l, l = u, u = i), i = Ad(e, u);
          var d = Ad(e, l);
          i && d && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== d.node || n.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), n.removeAllRanges(), u > l ? (n.addRange(t), n.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; n = n.parentNode; ) n.nodeType === 1 && t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) n = t[e], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ty = ea && "documentMode" in document && 11 >= document.documentMode, Nl = null, Ks = null, kr = null, Ps = false;
  function Md(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ps || Nl == null || Nl !== Li(l) || (l = Nl, "selectionStart" in l && Zs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), kr && Dr(kr, l) || (kr = l, l = Oo(Ks, "onSelect"), 0 < l.length && (e = new Vi("onSelect", "select", null, e, n), t.push({ event: e, listeners: l }), e.target = Nl)));
  }
  function el(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ul = { animationend: el("Animation", "AnimationEnd"), animationiteration: el("Animation", "AnimationIteration"), animationstart: el("Animation", "AnimationStart"), transitionrun: el("Transition", "TransitionRun"), transitionstart: el("Transition", "TransitionStart"), transitioncancel: el("Transition", "TransitionCancel"), transitionend: el("Transition", "TransitionEnd") }, Fs = {}, Od = {};
  ea && (Od = document.createElement("div").style, "AnimationEvent" in window || (delete Ul.animationend.animation, delete Ul.animationiteration.animation, delete Ul.animationstart.animation), "TransitionEvent" in window || delete Ul.transitionend.transition);
  function nl(t) {
    if (Fs[t]) return Fs[t];
    if (!Ul[t]) return t;
    var e = Ul[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in Od) return Fs[t] = e[n];
    return t;
  }
  var zd = nl("animationend"), _d = nl("animationiteration"), Dd = nl("animationstart"), Cy = nl("transitionrun"), Ey = nl("transitionstart"), Ay = nl("transitioncancel"), kd = nl("transitionend"), Bd = /* @__PURE__ */ new Map(), Nd = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
  function Ln(t, e) {
    Bd.set(t, e), Ia(e, [t]);
  }
  var Tn = [], Hl = 0, Ws = 0;
  function Zi() {
    for (var t = Hl, e = Ws = Hl = 0; e < t; ) {
      var n = Tn[e];
      Tn[e++] = null;
      var l = Tn[e];
      Tn[e++] = null;
      var i = Tn[e];
      Tn[e++] = null;
      var u = Tn[e];
      if (Tn[e++] = null, l !== null && i !== null) {
        var d = l.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i;
      }
      u !== 0 && Ud(n, i, u);
    }
  }
  function Ki(t, e, n, l) {
    Tn[Hl++] = t, Tn[Hl++] = e, Tn[Hl++] = n, Tn[Hl++] = l, Ws |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Js(t, e, n, l) {
    return Ki(t, e, n, l), Pi(t);
  }
  function Ra(t, e) {
    return Ki(t, null, null, e), Pi(t);
  }
  function Ud(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = false, u = t.return; u !== null; ) u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = true)), t = u, u = u.return;
    i && e !== null && t.tag === 3 && (u = t.stateNode, i = 31 - St(n), u = u.hiddenUpdates, t = u[i], t === null ? u[i] = [e] : t.push(e), e.lane = n | 536870912);
  }
  function Pi(t) {
    if (50 < li) throw li = 0, lc = null, Error(s(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var jl = {}, Hd = /* @__PURE__ */ new WeakMap();
  function Cn(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Hd.get(t);
      return n !== void 0 ? n : (e = { value: t, source: e, stack: nt(e) }, Hd.set(t, e), e);
    }
    return { value: t, source: e, stack: nt(e) };
  }
  var Ll = [], $l = 0, Fi = null, Wi = 0, En = [], An = 0, al = null, aa = 1, la = "";
  function ll(t, e) {
    Ll[$l++] = Wi, Ll[$l++] = Fi, Fi = t, Wi = e;
  }
  function jd(t, e, n) {
    En[An++] = aa, En[An++] = la, En[An++] = al, al = t;
    var l = aa;
    t = la;
    var i = 32 - St(l) - 1;
    l &= ~(1 << i), n += 1;
    var u = 32 - St(e) + i;
    if (30 < u) {
      var d = i - i % 5;
      u = (l & (1 << d) - 1).toString(32), l >>= d, i -= d, aa = 1 << 32 - St(e) + i | n << i | l, la = u + t;
    } else aa = 1 << u | n << i | l, la = t;
  }
  function Is(t) {
    t.return !== null && (ll(t, 1), jd(t, 1, 0));
  }
  function tu(t) {
    for (; t === Fi; ) Fi = Ll[--$l], Ll[$l] = null, Wi = Ll[--$l], Ll[$l] = null;
    for (; t === al; ) al = En[--An], En[An] = null, la = En[--An], En[An] = null, aa = En[--An], En[An] = null;
  }
  var Pe = null, je = null, Lt = false, $n = null, Vn = false, eu = Error(s(519));
  function rl(t) {
    var e = Error(s(418, ""));
    throw Ur(Cn(e, t)), eu;
  }
  function Ld(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[Xe] = t, e[tn] = l, n) {
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
        for (n = 0; n < ii.length; n++) Nt(ii[n], e);
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
        Nt("invalid", e), td(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true), ji(e);
        break;
      case "select":
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), nd(e, l.value, l.defaultValue, l.children), ji(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === true || Kh(e.textContent, n) ? (l.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)), l.onScroll != null && Nt("scroll", e), l.onScrollEnd != null && Nt("scrollend", e), l.onClick != null && (e.onclick = zo), e = true) : e = false, e || rl(t);
  }
  function $d(t) {
    for (Pe = t.return; Pe; ) switch (Pe.tag) {
      case 3:
      case 27:
        Vn = true;
        return;
      case 5:
      case 13:
        Vn = false;
        return;
      default:
        Pe = Pe.return;
    }
  }
  function Br(t) {
    if (t !== Pe) return false;
    if (!Lt) return $d(t), Lt = true, false;
    var e = false, n;
    if ((n = t.tag !== 3 && t.tag !== 27) && ((n = t.tag === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || xc(t.type, t.memoizedProps)), n = !n), n && (e = true), e && je && rl(t), $d(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (n = t.data, n === "/$") {
            if (e === 0) {
              je = Yn(t.nextSibling);
              break t;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        je = null;
      }
    } else je = Pe ? Yn(t.stateNode.nextSibling) : null;
    return true;
  }
  function Nr() {
    je = Pe = null, Lt = false;
  }
  function Ur(t) {
    $n === null ? $n = [t] : $n.push(t);
  }
  var Hr = Error(s(460)), qd = Error(s(474)), nu = { then: function() {
  } };
  function Yd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ji() {
  }
  function Gd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ji, Ji), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, t === Hr ? Error(s(483)) : t;
      default:
        if (typeof e.status == "string") e.then(Ji, Ji);
        else {
          if (t = ae, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
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
            throw t = e.reason, t === Hr ? Error(s(483)) : t;
        }
        throw jr = e, Hr;
    }
  }
  var jr = null;
  function Vd() {
    if (jr === null) throw Error(s(459));
    var t = jr;
    return jr = null, t;
  }
  var ql = null, Lr = 0;
  function Ii(t) {
    var e = Lr;
    return Lr += 1, ql === null && (ql = []), Gd(ql, t, e);
  }
  function $r(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function to(t, e) {
    throw e.$$typeof === f ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Xd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Qd(t) {
    function e(z, A) {
      if (t) {
        var _ = z.deletions;
        _ === null ? (z.deletions = [A], z.flags |= 16) : _.push(A);
      }
    }
    function n(z, A) {
      if (!t) return null;
      for (; A !== null; ) e(z, A), A = A.sibling;
      return null;
    }
    function l(z) {
      for (var A = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? A.set(z.key, z) : A.set(z.index, z), z = z.sibling;
      return A;
    }
    function i(z, A) {
      return z = La(z, A), z.index = 0, z.sibling = null, z;
    }
    function u(z, A, _) {
      return z.index = _, t ? (_ = z.alternate, _ !== null ? (_ = _.index, _ < A ? (z.flags |= 33554434, A) : _) : (z.flags |= 33554434, A)) : (z.flags |= 1048576, A);
    }
    function d(z) {
      return t && z.alternate === null && (z.flags |= 33554434), z;
    }
    function y(z, A, _, X) {
      return A === null || A.tag !== 6 ? (A = Fu(_, z.mode, X), A.return = z, A) : (A = i(A, _), A.return = z, A);
    }
    function b(z, A, _, X) {
      var ut = _.type;
      return ut === g ? V(z, A, _.props.children, X, _.key) : A !== null && (A.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === G && Xd(ut) === A.type) ? (A = i(A, _.props), $r(A, _), A.return = z, A) : (A = bo(_.type, _.key, _.props, null, z.mode, X), $r(A, _), A.return = z, A);
    }
    function R(z, A, _, X) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation ? (A = Wu(_, z.mode, X), A.return = z, A) : (A = i(A, _.children || []), A.return = z, A);
    }
    function V(z, A, _, X, ut) {
      return A === null || A.tag !== 7 ? (A = ml(_, z.mode, X, ut), A.return = z, A) : (A = i(A, _), A.return = z, A);
    }
    function F(z, A, _) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = Fu("" + A, z.mode, _), A.return = z, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case p:
            return _ = bo(A.type, A.key, A.props, null, z.mode, _), $r(_, A), _.return = z, _;
          case h:
            return A = Wu(A, z.mode, _), A.return = z, A;
          case G:
            var X = A._init;
            return A = X(A._payload), F(z, A, _);
        }
        if (ft(A) || Z(A)) return A = ml(A, z.mode, _, null), A.return = z, A;
        if (typeof A.then == "function") return F(z, Ii(A), _);
        if (A.$$typeof === D) return F(z, go(z, A), _);
        to(z, A);
      }
      return null;
    }
    function k(z, A, _, X) {
      var ut = A !== null ? A.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return ut !== null ? null : y(z, A, "" + _, X);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case p:
            return _.key === ut ? b(z, A, _, X) : null;
          case h:
            return _.key === ut ? R(z, A, _, X) : null;
          case G:
            return ut = _._init, _ = ut(_._payload), k(z, A, _, X);
        }
        if (ft(_) || Z(_)) return ut !== null ? null : V(z, A, _, X, null);
        if (typeof _.then == "function") return k(z, A, Ii(_), X);
        if (_.$$typeof === D) return k(z, A, go(z, _), X);
        to(z, _);
      }
      return null;
    }
    function Y(z, A, _, X, ut) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return z = z.get(_) || null, y(A, z, "" + X, ut);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case p:
            return z = z.get(X.key === null ? _ : X.key) || null, b(A, z, X, ut);
          case h:
            return z = z.get(X.key === null ? _ : X.key) || null, R(A, z, X, ut);
          case G:
            var _t = X._init;
            return X = _t(X._payload), Y(z, A, _, X, ut);
        }
        if (ft(X) || Z(X)) return z = z.get(_) || null, V(A, z, X, ut, null);
        if (typeof X.then == "function") return Y(z, A, _, Ii(X), ut);
        if (X.$$typeof === D) return Y(z, A, _, go(A, X), ut);
        to(A, X);
      }
      return null;
    }
    function pt(z, A, _, X) {
      for (var ut = null, _t = null, ht = A, yt = A = 0, Ne = null; ht !== null && yt < _.length; yt++) {
        ht.index > yt ? (Ne = ht, ht = null) : Ne = ht.sibling;
        var $t = k(z, ht, _[yt], X);
        if ($t === null) {
          ht === null && (ht = Ne);
          break;
        }
        t && ht && $t.alternate === null && e(z, ht), A = u($t, A, yt), _t === null ? ut = $t : _t.sibling = $t, _t = $t, ht = Ne;
      }
      if (yt === _.length) return n(z, ht), Lt && ll(z, yt), ut;
      if (ht === null) {
        for (; yt < _.length; yt++) ht = F(z, _[yt], X), ht !== null && (A = u(ht, A, yt), _t === null ? ut = ht : _t.sibling = ht, _t = ht);
        return Lt && ll(z, yt), ut;
      }
      for (ht = l(ht); yt < _.length; yt++) Ne = Y(ht, z, yt, _[yt], X), Ne !== null && (t && Ne.alternate !== null && ht.delete(Ne.key === null ? yt : Ne.key), A = u(Ne, A, yt), _t === null ? ut = Ne : _t.sibling = Ne, _t = Ne);
      return t && ht.forEach(function(Qa) {
        return e(z, Qa);
      }), Lt && ll(z, yt), ut;
    }
    function Tt(z, A, _, X) {
      if (_ == null) throw Error(s(151));
      for (var ut = null, _t = null, ht = A, yt = A = 0, Ne = null, $t = _.next(); ht !== null && !$t.done; yt++, $t = _.next()) {
        ht.index > yt ? (Ne = ht, ht = null) : Ne = ht.sibling;
        var Qa = k(z, ht, $t.value, X);
        if (Qa === null) {
          ht === null && (ht = Ne);
          break;
        }
        t && ht && Qa.alternate === null && e(z, ht), A = u(Qa, A, yt), _t === null ? ut = Qa : _t.sibling = Qa, _t = Qa, ht = Ne;
      }
      if ($t.done) return n(z, ht), Lt && ll(z, yt), ut;
      if (ht === null) {
        for (; !$t.done; yt++, $t = _.next()) $t = F(z, $t.value, X), $t !== null && (A = u($t, A, yt), _t === null ? ut = $t : _t.sibling = $t, _t = $t);
        return Lt && ll(z, yt), ut;
      }
      for (ht = l(ht); !$t.done; yt++, $t = _.next()) $t = Y(ht, z, yt, $t.value, X), $t !== null && (t && $t.alternate !== null && ht.delete($t.key === null ? yt : $t.key), A = u($t, A, yt), _t === null ? ut = $t : _t.sibling = $t, _t = $t);
      return t && ht.forEach(function(Lv) {
        return e(z, Lv);
      }), Lt && ll(z, yt), ut;
    }
    function ge(z, A, _, X) {
      if (typeof _ == "object" && _ !== null && _.type === g && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case p:
            t: {
              for (var ut = _.key; A !== null; ) {
                if (A.key === ut) {
                  if (ut = _.type, ut === g) {
                    if (A.tag === 7) {
                      n(z, A.sibling), X = i(A, _.props.children), X.return = z, z = X;
                      break t;
                    }
                  } else if (A.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === G && Xd(ut) === A.type) {
                    n(z, A.sibling), X = i(A, _.props), $r(X, _), X.return = z, z = X;
                    break t;
                  }
                  n(z, A);
                  break;
                } else e(z, A);
                A = A.sibling;
              }
              _.type === g ? (X = ml(_.props.children, z.mode, X, _.key), X.return = z, z = X) : (X = bo(_.type, _.key, _.props, null, z.mode, X), $r(X, _), X.return = z, z = X);
            }
            return d(z);
          case h:
            t: {
              for (ut = _.key; A !== null; ) {
                if (A.key === ut) if (A.tag === 4 && A.stateNode.containerInfo === _.containerInfo && A.stateNode.implementation === _.implementation) {
                  n(z, A.sibling), X = i(A, _.children || []), X.return = z, z = X;
                  break t;
                } else {
                  n(z, A);
                  break;
                }
                else e(z, A);
                A = A.sibling;
              }
              X = Wu(_, z.mode, X), X.return = z, z = X;
            }
            return d(z);
          case G:
            return ut = _._init, _ = ut(_._payload), ge(z, A, _, X);
        }
        if (ft(_)) return pt(z, A, _, X);
        if (Z(_)) {
          if (ut = Z(_), typeof ut != "function") throw Error(s(150));
          return _ = ut.call(_), Tt(z, A, _, X);
        }
        if (typeof _.then == "function") return ge(z, A, Ii(_), X);
        if (_.$$typeof === D) return ge(z, A, go(z, _), X);
        to(z, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, A !== null && A.tag === 6 ? (n(z, A.sibling), X = i(A, _), X.return = z, z = X) : (n(z, A), X = Fu(_, z.mode, X), X.return = z, z = X), d(z)) : n(z, A);
    }
    return function(z, A, _, X) {
      try {
        Lr = 0;
        var ut = ge(z, A, _, X);
        return ql = null, ut;
      } catch (ht) {
        if (ht === Hr) throw ht;
        var _t = On(29, ht, null, z.mode);
        return _t.lanes = X, _t.return = z, _t;
      } finally {
      }
    };
  }
  var il = Qd(true), Zd = Qd(false), Yl = Et(null), eo = Et(0);
  function Kd(t, e) {
    t = ma, Dt(eo, t), Dt(Yl, e), ma = t | e.baseLanes;
  }
  function au() {
    Dt(eo, ma), Dt(Yl, Yl.current);
  }
  function lu() {
    ma = eo.current, jt(Yl), jt(eo);
  }
  var wn = Et(null), Xn = null;
  function Ma(t) {
    var e = t.alternate;
    Dt(ze, ze.current & 1), Dt(wn, t), Xn === null && (e === null || Yl.current !== null || e.memoizedState !== null) && (Xn = t);
  }
  function Pd(t) {
    if (t.tag === 22) {
      if (Dt(ze, ze.current), Dt(wn, t), Xn === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Xn = t);
      }
    } else Oa();
  }
  function Oa() {
    Dt(ze, ze.current), Dt(wn, wn.current);
  }
  function ra(t) {
    jt(wn), Xn === t && (Xn = null), jt(ze);
  }
  var ze = Et(0);
  function no(t) {
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
  var wy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(n, l) {
      t.push(l);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(n) {
        return n();
      });
    };
  }, Ry = a3.unstable_scheduleCallback, My = a3.unstable_NormalPriority, _e = { $$typeof: D, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function ru() {
    return { controller: new wy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function qr(t) {
    t.refCount--, t.refCount === 0 && Ry(My, function() {
      t.controller.abort();
    });
  }
  var Yr = null, iu = 0, Gl = 0, Vl = null;
  function Oy(t, e) {
    if (Yr === null) {
      var n = Yr = [];
      iu = 0, Gl = dc(), Vl = { status: "pending", value: void 0, then: function(l) {
        n.push(l);
      } };
    }
    return iu++, e.then(Fd, Fd), e;
  }
  function Fd() {
    if (--iu === 0 && Yr !== null) {
      Vl !== null && (Vl.status = "fulfilled");
      var t = Yr;
      Yr = null, Gl = 0, Vl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function zy(t, e) {
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
  var Wd = Q.S;
  Q.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Oy(t, e), Wd !== null && Wd(t, e);
  };
  var ol = Et(null);
  function ou() {
    var t = ol.current;
    return t !== null ? t : ae.pooledCache;
  }
  function ao(t, e) {
    e === null ? Dt(ol, ol.current) : Dt(ol, e.pool);
  }
  function Jd() {
    var t = ou();
    return t === null ? null : { parent: _e._currentValue, pool: t };
  }
  var za = 0, zt = null, Pt = null, Ae = null, lo = false, Xl = false, sl = false, ro = 0, Gr = 0, Ql = null, _y = 0;
  function xe() {
    throw Error(s(321));
  }
  function su(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!on(t[n], e[n])) return false;
    return true;
  }
  function uu(t, e, n, l, i, u) {
    return za = u, zt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Q.H = t === null || t.memoizedState === null ? ul : _a, sl = false, u = n(l, i), sl = false, Xl && (u = tp(e, n, l, i)), Id(t), u;
  }
  function Id(t) {
    Q.H = Qn;
    var e = Pt !== null && Pt.next !== null;
    if (za = 0, Ae = Pt = zt = null, lo = false, Gr = 0, Ql = null, e) throw Error(s(300));
    t === null || ke || (t = t.dependencies, t !== null && mo(t) && (ke = true));
  }
  function tp(t, e, n, l) {
    zt = t;
    var i = 0;
    do {
      if (Xl && (Ql = null), Gr = 0, Xl = false, 25 <= i) throw Error(s(301));
      if (i += 1, Ae = Pt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Q.H = cl, u = e(n, l);
    } while (Xl);
    return u;
  }
  function Dy() {
    var t = Q.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vr(e) : e, t = t.useState()[0], (Pt !== null ? Pt.memoizedState : null) !== t && (zt.flags |= 1024), e;
  }
  function cu() {
    var t = ro !== 0;
    return ro = 0, t;
  }
  function fu(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function du(t) {
    if (lo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      lo = false;
    }
    za = 0, Ae = Pt = zt = null, Xl = false, Gr = ro = 0, Ql = null;
  }
  function nn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? zt.memoizedState = Ae = t : Ae = Ae.next = t, Ae;
  }
  function we() {
    if (Pt === null) {
      var t = zt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Pt.next;
    var e = Ae === null ? zt.memoizedState : Ae.next;
    if (e !== null) Ae = e, Pt = t;
    else {
      if (t === null) throw zt.alternate === null ? Error(s(467)) : Error(s(310));
      Pt = t, t = { memoizedState: Pt.memoizedState, baseState: Pt.baseState, baseQueue: Pt.baseQueue, queue: Pt.queue, next: null }, Ae === null ? zt.memoizedState = Ae = t : Ae = Ae.next = t;
    }
    return Ae;
  }
  var io;
  io = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Vr(t) {
    var e = Gr;
    return Gr += 1, Ql === null && (Ql = []), t = Gd(Ql, t, e), e = zt, (Ae === null ? e.memoizedState : Ae.next) === null && (e = e.alternate, Q.H = e === null || e.memoizedState === null ? ul : _a), t;
  }
  function oo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vr(t);
      if (t.$$typeof === D) return Qe(t);
    }
    throw Error(s(438, String(t)));
  }
  function pu(t) {
    var e = null, n = zt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = zt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(i) {
        return i.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = io(), zt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = H;
    return e.index++, n;
  }
  function ia(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function so(t) {
    var e = we();
    return hu(e, Pt, t);
  }
  function hu(t, e, n) {
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
      var y = d = null, b = null, R = e, V = false;
      do {
        var F = R.lane & -536870913;
        if (F !== R.lane ? (Ht & F) === F : (za & F) === F) {
          var k = R.revertLane;
          if (k === 0) b !== null && (b = b.next = { lane: 0, revertLane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), F === Gl && (V = true);
          else if ((za & k) === k) {
            R = R.next, k === Gl && (V = true);
            continue;
          } else F = { lane: 0, revertLane: R.revertLane, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }, b === null ? (y = b = F, d = u) : b = b.next = F, zt.lanes |= k, $a |= k;
          F = R.action, sl && n(u, F), u = R.hasEagerState ? R.eagerState : n(u, F);
        } else k = { lane: F, revertLane: R.revertLane, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }, b === null ? (y = b = k, d = u) : b = b.next = k, zt.lanes |= F, $a |= F;
        R = R.next;
      } while (R !== null && R !== e);
      if (b === null ? d = u : b.next = y, !on(u, t.memoizedState) && (ke = true, V && (n = Vl, n !== null))) throw n;
      t.memoizedState = u, t.baseState = d, t.baseQueue = b, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function mu(t) {
    var e = we(), n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, i = n.pending, u = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = i = i.next;
      do
        u = t(u, d.action), d = d.next;
      while (d !== i);
      on(u, e.memoizedState) || (ke = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function ep(t, e, n) {
    var l = zt, i = we(), u = Lt;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !on((Pt || i).memoizedState, n);
    if (d && (i.memoizedState = n, ke = true), i = i.queue, vu(lp.bind(null, l, i, t), [t]), i.getSnapshot !== e || d || Ae !== null && Ae.memoizedState.tag & 1) {
      if (l.flags |= 2048, Zl(9, ap.bind(null, l, i, n, e), { destroy: void 0 }, null), ae === null) throw Error(s(349));
      u || za & 60 || np(l, e, n);
    }
    return n;
  }
  function np(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = zt.updateQueue, e === null ? (e = io(), zt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function ap(t, e, n, l) {
    e.value = n, e.getSnapshot = l, rp(e) && ip(t);
  }
  function lp(t, e, n) {
    return n(function() {
      rp(e) && ip(t);
    });
  }
  function rp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !on(t, n);
    } catch {
      return true;
    }
  }
  function ip(t) {
    var e = Ra(t, 2);
    e !== null && Fe(e, t, 2);
  }
  function gu(t) {
    var e = nn();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), sl) {
        dt(true);
        try {
          n();
        } finally {
          dt(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: t }, e;
  }
  function op(t, e, n, l) {
    return t.baseState = n, hu(t, Pt, typeof l == "function" ? l : ia);
  }
  function ky(t, e, n, l, i) {
    if (fo(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var u = { payload: i, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(d) {
        u.listeners.push(d);
      } };
      Q.T !== null ? n(true) : u.isTransition = false, l(u), n = e.pending, n === null ? (u.next = e.pending = u, sp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function sp(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var u = Q.T, d = {};
      Q.T = d;
      try {
        var y = n(i, l), b = Q.S;
        b !== null && b(d, y), up(t, e, y);
      } catch (R) {
        yu(t, e, R);
      } finally {
        Q.T = u;
      }
    } else try {
      u = n(i, l), up(t, e, u);
    } catch (R) {
      yu(t, e, R);
    }
  }
  function up(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
      cp(t, e, l);
    }, function(l) {
      return yu(t, e, l);
    }) : cp(t, e, n);
  }
  function cp(t, e, n) {
    e.status = "fulfilled", e.value = n, fp(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, sp(t, n)));
  }
  function yu(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, fp(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function fp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function dp(t, e) {
    return e;
  }
  function pp(t, e) {
    if (Lt) {
      var n = ae.formState;
      if (n !== null) {
        t: {
          var l = zt;
          if (Lt) {
            if (je) {
              e: {
                for (var i = je, u = Vn; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break e;
                  }
                  if (i = Yn(i.nextSibling), i === null) {
                    i = null;
                    break e;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                je = Yn(i.nextSibling), l = i.data === "F!";
                break t;
              }
            }
            rl(l);
          }
          l = false;
        }
        l && (e = n[0]);
      }
    }
    return n = nn(), n.memoizedState = n.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: dp, lastRenderedState: e }, n.queue = l, n = _p.bind(null, zt, l), l.dispatch = n, l = gu(false), u = Cu.bind(null, zt, false, l.queue), l = nn(), i = { state: e, dispatch: null, action: t, pending: null }, l.queue = i, n = ky.bind(null, zt, i, u, n), i.dispatch = n, l.memoizedState = t, [e, n, false];
  }
  function hp(t) {
    var e = we();
    return mp(e, Pt, t);
  }
  function mp(t, e, n) {
    e = hu(t, e, dp)[0], t = so(ia)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? Vr(e) : e;
    var l = we(), i = l.queue, u = i.dispatch;
    return n !== l.memoizedState && (zt.flags |= 2048, Zl(9, By.bind(null, i, n), { destroy: void 0 }, null)), [e, u, t];
  }
  function By(t, e) {
    t.action = e;
  }
  function gp(t) {
    var e = we(), n = Pt;
    if (n !== null) return mp(e, n, t);
    we(), e = e.memoizedState, n = we();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, false];
  }
  function Zl(t, e, n, l) {
    return t = { tag: t, create: e, inst: n, deps: l, next: null }, e = zt.updateQueue, e === null && (e = io(), zt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function yp() {
    return we().memoizedState;
  }
  function uo(t, e, n, l) {
    var i = nn();
    zt.flags |= t, i.memoizedState = Zl(1 | e, n, { destroy: void 0 }, l === void 0 ? null : l);
  }
  function co(t, e, n, l) {
    var i = we();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Pt !== null && l !== null && su(l, Pt.memoizedState.deps) ? i.memoizedState = Zl(e, n, u, l) : (zt.flags |= t, i.memoizedState = Zl(1 | e, n, u, l));
  }
  function vp(t, e) {
    uo(8390656, 8, t, e);
  }
  function vu(t, e) {
    co(2048, 8, t, e);
  }
  function bp(t, e) {
    return co(4, 2, t, e);
  }
  function Sp(t, e) {
    return co(4, 4, t, e);
  }
  function xp(t, e) {
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
  function Tp(t, e, n) {
    n = n != null ? n.concat([t]) : null, co(4, 4, xp.bind(null, e, t), n);
  }
  function bu() {
  }
  function Cp(t, e) {
    var n = we();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && su(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Ep(t, e) {
    var n = we();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && su(e, l[1])) return l[0];
    if (l = t(), sl) {
      dt(true);
      try {
        t();
      } finally {
        dt(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function Su(t, e, n) {
    return n === void 0 || za & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = wh(), zt.lanes |= t, $a |= t, n);
  }
  function Ap(t, e, n, l) {
    return on(n, e) ? n : Yl.current !== null ? (t = Su(t, n, l), on(t, e) || (ke = true), t) : za & 42 ? (t = wh(), zt.lanes |= t, $a |= t, e) : (ke = true, t.memoizedState = n);
  }
  function wp(t, e, n, l, i) {
    var u = lt.p;
    lt.p = u !== 0 && 8 > u ? u : 8;
    var d = Q.T, y = {};
    Q.T = y, Cu(t, false, e, n);
    try {
      var b = i(), R = Q.S;
      if (R !== null && R(y, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var V = zy(b, l);
        Xr(t, e, V, fn(t));
      } else Xr(t, e, l, fn(t));
    } catch (F) {
      Xr(t, e, { then: function() {
      }, status: "rejected", reason: F }, fn());
    } finally {
      lt.p = u, Q.T = d;
    }
  }
  function Ny() {
  }
  function xu(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var i = Rp(t).queue;
    wp(t, i, e, Ct, n === null ? Ny : function() {
      return Mp(t), n(l);
    });
  }
  function Rp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: Ct, baseState: Ct, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: Ct }, next: null };
    var n = {};
    return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Mp(t) {
    var e = Rp(t).next.queue;
    Xr(t, e, {}, fn());
  }
  function Tu() {
    return Qe(fi);
  }
  function Op() {
    return we().memoizedState;
  }
  function zp() {
    return we().memoizedState;
  }
  function Uy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = fn();
          t = Ba(n);
          var l = Na(e, t, n);
          l !== null && (Fe(l, e, n), Kr(l, e, n)), e = { cache: ru() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Hy(t, e, n) {
    var l = fn();
    n = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null }, fo(t) ? Dp(e, n) : (n = Js(t, e, n, l), n !== null && (Fe(n, t, l), kp(n, e, l)));
  }
  function _p(t, e, n) {
    var l = fn();
    Xr(t, e, n, l);
  }
  function Xr(t, e, n, l) {
    var i = { lane: l, revertLane: 0, action: n, hasEagerState: false, eagerState: null, next: null };
    if (fo(t)) Dp(e, i);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var d = e.lastRenderedState, y = u(d, n);
        if (i.hasEagerState = true, i.eagerState = y, on(y, d)) return Ki(t, e, i, 0), ae === null && Zi(), false;
      } catch {
      } finally {
      }
      if (n = Js(t, e, i, l), n !== null) return Fe(n, t, l), kp(n, e, l), true;
    }
    return false;
  }
  function Cu(t, e, n, l) {
    if (l = { lane: 2, revertLane: dc(), action: l, hasEagerState: false, eagerState: null, next: null }, fo(t)) {
      if (e) throw Error(s(479));
    } else e = Js(t, n, l, 2), e !== null && Fe(e, t, 2);
  }
  function fo(t) {
    var e = t.alternate;
    return t === zt || e !== null && e === zt;
  }
  function Dp(t, e) {
    Xl = lo = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function kp(t, e, n) {
    if (n & 4194176) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Vf(t, n);
    }
  }
  var Qn = { readContext: Qe, use: oo, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useLayoutEffect: xe, useInsertionEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useSyncExternalStore: xe, useId: xe };
  Qn.useCacheRefresh = xe, Qn.useMemoCache = xe, Qn.useHostTransitionStatus = xe, Qn.useFormState = xe, Qn.useActionState = xe, Qn.useOptimistic = xe;
  var ul = { readContext: Qe, use: oo, useCallback: function(t, e) {
    return nn().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Qe, useEffect: vp, useImperativeHandle: function(t, e, n) {
    n = n != null ? n.concat([t]) : null, uo(4194308, 4, xp.bind(null, e, t), n);
  }, useLayoutEffect: function(t, e) {
    return uo(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    uo(4, 2, t, e);
  }, useMemo: function(t, e) {
    var n = nn();
    e = e === void 0 ? null : e;
    var l = t();
    if (sl) {
      dt(true);
      try {
        t();
      } finally {
        dt(false);
      }
    }
    return n.memoizedState = [l, e], l;
  }, useReducer: function(t, e, n) {
    var l = nn();
    if (n !== void 0) {
      var i = n(e);
      if (sl) {
        dt(true);
        try {
          n(e);
        } finally {
          dt(false);
        }
      }
    } else i = e;
    return l.memoizedState = l.baseState = i, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, l.queue = t, t = t.dispatch = Hy.bind(null, zt, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var e = nn();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = gu(t);
    var e = t.queue, n = _p.bind(null, zt, e);
    return e.dispatch = n, [t.memoizedState, n];
  }, useDebugValue: bu, useDeferredValue: function(t, e) {
    var n = nn();
    return Su(n, t, e);
  }, useTransition: function() {
    var t = gu(false);
    return t = wp.bind(null, zt, t.queue, true, false), nn().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, n) {
    var l = zt, i = nn();
    if (Lt) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = e(), ae === null) throw Error(s(349));
      Ht & 60 || np(l, e, n);
    }
    i.memoizedState = n;
    var u = { value: n, getSnapshot: e };
    return i.queue = u, vp(lp.bind(null, l, u, t), [t]), l.flags |= 2048, Zl(9, ap.bind(null, l, u, n, e), { destroy: void 0 }, null), n;
  }, useId: function() {
    var t = nn(), e = ae.identifierPrefix;
    if (Lt) {
      var n = la, l = aa;
      n = (l & ~(1 << 32 - St(l) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = ro++, 0 < n && (e += "H" + n.toString(32)), e += ":";
    } else n = _y++, e = ":" + e + "r" + n.toString(32) + ":";
    return t.memoizedState = e;
  }, useCacheRefresh: function() {
    return nn().memoizedState = Uy.bind(null, zt);
  } };
  ul.useMemoCache = pu, ul.useHostTransitionStatus = Tu, ul.useFormState = pp, ul.useActionState = pp, ul.useOptimistic = function(t) {
    var e = nn();
    e.memoizedState = e.baseState = t;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = n, e = Cu.bind(null, zt, true, n), n.dispatch = e, [t, e];
  };
  var _a = { readContext: Qe, use: oo, useCallback: Cp, useContext: Qe, useEffect: vu, useImperativeHandle: Tp, useInsertionEffect: bp, useLayoutEffect: Sp, useMemo: Ep, useReducer: so, useRef: yp, useState: function() {
    return so(ia);
  }, useDebugValue: bu, useDeferredValue: function(t, e) {
    var n = we();
    return Ap(n, Pt.memoizedState, t, e);
  }, useTransition: function() {
    var t = so(ia)[0], e = we().memoizedState;
    return [typeof t == "boolean" ? t : Vr(t), e];
  }, useSyncExternalStore: ep, useId: Op };
  _a.useCacheRefresh = zp, _a.useMemoCache = pu, _a.useHostTransitionStatus = Tu, _a.useFormState = hp, _a.useActionState = hp, _a.useOptimistic = function(t, e) {
    var n = we();
    return op(n, Pt, t, e);
  };
  var cl = { readContext: Qe, use: oo, useCallback: Cp, useContext: Qe, useEffect: vu, useImperativeHandle: Tp, useInsertionEffect: bp, useLayoutEffect: Sp, useMemo: Ep, useReducer: mu, useRef: yp, useState: function() {
    return mu(ia);
  }, useDebugValue: bu, useDeferredValue: function(t, e) {
    var n = we();
    return Pt === null ? Su(n, t, e) : Ap(n, Pt.memoizedState, t, e);
  }, useTransition: function() {
    var t = mu(ia)[0], e = we().memoizedState;
    return [typeof t == "boolean" ? t : Vr(t), e];
  }, useSyncExternalStore: ep, useId: Op };
  cl.useCacheRefresh = zp, cl.useMemoCache = pu, cl.useHostTransitionStatus = Tu, cl.useFormState = gp, cl.useActionState = gp, cl.useOptimistic = function(t, e) {
    var n = we();
    return Pt !== null ? op(n, Pt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  };
  function Eu(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : v({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Au = { isMounted: function(t) {
    return (t = t._reactInternals) ? J(t) === t : false;
  }, enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var l = fn(), i = Ba(l);
    i.payload = e, n != null && (i.callback = n), e = Na(t, i, l), e !== null && (Fe(e, t, l), Kr(e, t, l));
  }, enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var l = fn(), i = Ba(l);
    i.tag = 1, i.payload = e, n != null && (i.callback = n), e = Na(t, i, l), e !== null && (Fe(e, t, l), Kr(e, t, l));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = fn(), l = Ba(n);
    l.tag = 2, e != null && (l.callback = e), e = Na(t, l, n), e !== null && (Fe(e, t, n), Kr(e, t, n));
  } };
  function Bp(t, e, n, l, i, u, d) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, d) : e.prototype && e.prototype.isPureReactComponent ? !Dr(n, l) || !Dr(i, u) : true;
  }
  function Np(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Au.enqueueReplaceState(e, e.state, null);
  }
  function fl(t, e) {
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
  var po = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Up(t) {
    po(t);
  }
  function Hp(t) {
    console.error(t);
  }
  function jp(t) {
    po(t);
  }
  function ho(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Lp(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function wu(t, e, n) {
    return n = Ba(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ho(t, e);
    }, n;
  }
  function $p(t) {
    return t = Ba(t), t.tag = 3, t;
  }
  function qp(t, e, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      t.payload = function() {
        return i(u);
      }, t.callback = function() {
        Lp(e, n, l);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
      Lp(e, n, l), typeof i != "function" && (qa === null ? qa = /* @__PURE__ */ new Set([this]) : qa.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
    });
  }
  function jy(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Zr(e, n, i, true), n = wn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Xn === null ? oc() : n.alternate === null && me === 0 && (me = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === nu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), uc(t, l, i)), false;
          case 22:
            return n.flags |= 65536, l === nu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), uc(t, l, i)), false;
        }
        throw Error(s(435, n.tag));
      }
      return uc(t, l, i), oc(), false;
    }
    if (Lt) return e = wn.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== eu && (t = Error(s(422), { cause: l }), Ur(Cn(t, n)))) : (l !== eu && (e = Error(s(423), { cause: l }), Ur(Cn(e, n))), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Cn(l, n), i = wu(t.stateNode, l, i), qu(t, i), me !== 4 && (me = 2)), false;
    var u = Error(s(520), { cause: l });
    if (u = Cn(u, n), ni === null ? ni = [u] : ni.push(u), me !== 4 && (me = 2), e === null) return true;
    l = Cn(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = wu(n.stateNode, l, t), qu(n, t), false;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (qa === null || !qa.has(u)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = $p(i), qp(i, t, n, l), qu(n, i), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Yp = Error(s(461)), ke = false;
  function Le(t, e, n, l) {
    e.child = t === null ? Zd(e, null, n, l) : il(e, t.child, n, l);
  }
  function Gp(t, e, n, l, i) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var y in l) y !== "ref" && (d[y] = l[y]);
    } else d = l;
    return pl(e), l = uu(t, e, n, d, u, i), y = cu(), t !== null && !ke ? (fu(t, e, i), oa(t, e, i)) : (Lt && y && Is(e), e.flags |= 1, Le(t, e, l, i), e.child);
  }
  function Vp(t, e, n, l, i) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Pu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, Xp(t, e, u, l, i)) : (t = bo(n.type, null, l, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Nu(t, i)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Dr, n(d, l) && t.ref === e.ref) return oa(t, e, i);
    }
    return e.flags |= 1, t = La(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Xp(t, e, n, l, i) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Dr(u, l) && t.ref === e.ref) if (ke = false, e.pendingProps = l = u, Nu(t, i)) t.flags & 131072 && (ke = true);
      else return e.lanes = t.lanes, oa(t, e, i);
    }
    return Ru(t, e, n, l, i);
  }
  function Qp(t, e, n) {
    var l = e.pendingProps, i = l.children, u = (e.stateNode._pendingVisibility & 2) !== 0, d = t !== null ? t.memoizedState : null;
    if (Qr(t, e), l.mode === "hidden" || u) {
      if (e.flags & 128) {
        if (l = d !== null ? d.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, u = 0; i !== null; ) u = u | i.lanes | i.childLanes, i = i.sibling;
          e.childLanes = u & ~l;
        } else e.childLanes = 0, e.child = null;
        return Zp(t, e, l, n);
      }
      if (n & 536870912) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ao(e, d !== null ? d.cachePool : null), d !== null ? Kd(e, d) : au(), Pd(e);
      else return e.lanes = e.childLanes = 536870912, Zp(t, e, d !== null ? d.baseLanes | n : n, n);
    } else d !== null ? (ao(e, d.cachePool), Kd(e, d), Oa(), e.memoizedState = null) : (t !== null && ao(e, null), au(), Oa());
    return Le(t, e, i, n), e.child;
  }
  function Zp(t, e, n, l) {
    var i = ou();
    return i = i === null ? null : { parent: _e._currentValue, pool: i }, e.memoizedState = { baseLanes: n, cachePool: i }, t !== null && ao(e, null), au(), Pd(e), t !== null && Zr(t, e, l, true), null;
  }
  function Qr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function Ru(t, e, n, l, i) {
    return pl(e), n = uu(t, e, n, l, void 0, i), l = cu(), t !== null && !ke ? (fu(t, e, i), oa(t, e, i)) : (Lt && l && Is(e), e.flags |= 1, Le(t, e, n, i), e.child);
  }
  function Kp(t, e, n, l, i, u) {
    return pl(e), e.updateQueue = null, n = tp(e, l, n, i), Id(t), l = cu(), t !== null && !ke ? (fu(t, e, u), oa(t, e, u)) : (Lt && l && Is(e), e.flags |= 1, Le(t, e, n, u), e.child);
  }
  function Pp(t, e, n, l, i) {
    if (pl(e), e.stateNode === null) {
      var u = jl, d = n.contextType;
      typeof d == "object" && d !== null && (u = Qe(d)), u = new n(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Au, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Lu(e), d = n.contextType, u.context = typeof d == "object" && d !== null ? Qe(d) : jl, u.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Eu(e, n, d, l), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && Au.enqueueReplaceState(u, u.state, null), Fr(e, l, u, i), Pr(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      u = e.stateNode;
      var y = e.memoizedProps, b = fl(n, y);
      u.props = b;
      var R = u.context, V = n.contextType;
      d = jl, typeof V == "object" && V !== null && (d = Qe(V));
      var F = n.getDerivedStateFromProps;
      V = typeof F == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || R !== d) && Np(e, u, l, d), ka = false;
      var k = e.memoizedState;
      u.state = k, Fr(e, l, u, i), Pr(), R = e.memoizedState, y || k !== R || ka ? (typeof F == "function" && (Eu(e, n, F, l), R = e.memoizedState), (b = ka || Bp(e, n, b, l, k, R, d)) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = R), u.props = l, u.state = R, u.context = d, l = b) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      u = e.stateNode, $u(t, e), d = e.memoizedProps, V = fl(n, d), u.props = V, F = e.pendingProps, k = u.context, R = n.contextType, b = jl, typeof R == "object" && R !== null && (b = Qe(R)), y = n.getDerivedStateFromProps, (R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== F || k !== b) && Np(e, u, l, b), ka = false, k = e.memoizedState, u.state = k, Fr(e, l, u, i), Pr();
      var Y = e.memoizedState;
      d !== F || k !== Y || ka || t !== null && t.dependencies !== null && mo(t.dependencies) ? (typeof y == "function" && (Eu(e, n, y, l), Y = e.memoizedState), (V = ka || Bp(e, n, V, l, k, Y, b) || t !== null && t.dependencies !== null && mo(t.dependencies)) ? (R || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, Y, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, Y, b)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && k === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && k === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = Y), u.props = l, u.state = Y, u.context = b, l = V) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && k === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && k === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return u = l, Qr(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = il(e, t.child, null, i), e.child = il(e, null, n, i)) : Le(t, e, n, i), e.memoizedState = u.state, t = e.child) : t = oa(t, e, i), t;
  }
  function Fp(t, e, n, l) {
    return Nr(), e.flags |= 256, Le(t, e, n, l), e.child;
  }
  var Mu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ou(t) {
    return { baseLanes: t, cachePool: Jd() };
  }
  function zu(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= zn), t;
  }
  function Wp(t, e, n) {
    var l = e.pendingProps, i = false, u = (e.flags & 128) !== 0, d;
    if ((d = u) || (d = t !== null && t.memoizedState === null ? false : (ze.current & 2) !== 0), d && (i = true, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Lt) {
        if (i ? Ma(e) : Oa(), Lt) {
          var y = je, b;
          if (b = y) {
            t: {
              for (b = y, y = Vn; b.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (b = Yn(b.nextSibling), b === null) {
                  y = null;
                  break t;
                }
              }
              y = b;
            }
            y !== null ? (e.memoizedState = { dehydrated: y, treeContext: al !== null ? { id: aa, overflow: la } : null, retryLane: 536870912 }, b = On(18, null, null, 0), b.stateNode = y, b.return = e, e.child = b, Pe = e, je = null, b = true) : b = false;
          }
          b || rl(e);
        }
        if (y = e.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return y.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
        ra(e);
      }
      return y = l.children, l = l.fallback, i ? (Oa(), i = e.mode, y = Du({ mode: "hidden", children: y }, i), l = ml(l, i, n, null), y.return = e, l.return = e, y.sibling = l, e.child = y, i = e.child, i.memoizedState = Ou(n), i.childLanes = zu(t, d, n), e.memoizedState = Mu, l) : (Ma(e), _u(e, y));
    }
    if (b = t.memoizedState, b !== null && (y = b.dehydrated, y !== null)) {
      if (u) e.flags & 256 ? (Ma(e), e.flags &= -257, e = ku(t, e, n)) : e.memoizedState !== null ? (Oa(), e.child = t.child, e.flags |= 128, e = null) : (Oa(), i = l.fallback, y = e.mode, l = Du({ mode: "visible", children: l.children }, y), i = ml(i, y, n, null), i.flags |= 2, l.return = e, i.return = e, l.sibling = i, e.child = l, il(e, t.child, null, n), l = e.child, l.memoizedState = Ou(n), l.childLanes = zu(t, d, n), e.memoizedState = Mu, e = i);
      else if (Ma(e), y.data === "$!") {
        if (d = y.nextSibling && y.nextSibling.dataset, d) var R = d.dgst;
        d = R, l = Error(s(419)), l.stack = "", l.digest = d, Ur({ value: l, source: null, stack: null }), e = ku(t, e, n);
      } else if (ke || Zr(t, e, n, false), d = (n & t.childLanes) !== 0, ke || d) {
        if (d = ae, d !== null) {
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
          if (l = l & (d.suspendedLanes | n) ? 0 : l, l !== 0 && l !== b.retryLane) throw b.retryLane = l, Ra(t, l), Fe(d, t, l), Yp;
        }
        y.data === "$?" || oc(), e = ku(t, e, n);
      } else y.data === "$?" ? (e.flags |= 128, e.child = t.child, e = Iy.bind(null, t), y._reactRetry = e, e = null) : (t = b.treeContext, je = Yn(y.nextSibling), Pe = e, Lt = true, $n = null, Vn = false, t !== null && (En[An++] = aa, En[An++] = la, En[An++] = al, aa = t.id, la = t.overflow, al = e), e = _u(e, l.children), e.flags |= 4096);
      return e;
    }
    return i ? (Oa(), i = l.fallback, y = e.mode, b = t.child, R = b.sibling, l = La(b, { mode: "hidden", children: l.children }), l.subtreeFlags = b.subtreeFlags & 31457280, R !== null ? i = La(R, i) : (i = ml(i, y, n, null), i.flags |= 2), i.return = e, l.return = e, l.sibling = i, e.child = l, l = i, i = e.child, y = t.child.memoizedState, y === null ? y = Ou(n) : (b = y.cachePool, b !== null ? (R = _e._currentValue, b = b.parent !== R ? { parent: R, pool: R } : b) : b = Jd(), y = { baseLanes: y.baseLanes | n, cachePool: b }), i.memoizedState = y, i.childLanes = zu(t, d, n), e.memoizedState = Mu, l) : (Ma(e), n = t.child, t = n.sibling, n = La(n, { mode: "visible", children: l.children }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function _u(t, e) {
    return e = Du({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Du(t, e) {
    return Ch(t, e, 0, null);
  }
  function ku(t, e, n) {
    return il(e, t.child, null, n), t = _u(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Jp(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Hu(t.return, e, n);
  }
  function Bu(t, e, n, l, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: i } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = i);
  }
  function Ip(t, e, n) {
    var l = e.pendingProps, i = l.revealOrder, u = l.tail;
    if (Le(t, e, l.children, n), l = ze.current, l & 2) l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Jp(t, n, e);
        else if (t.tag === 19) Jp(t, n, e);
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
    switch (Dt(ze, l), i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; ) t = n.alternate, t !== null && no(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Bu(e, false, i, n, u);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && no(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Bu(e, true, n, null, u);
        break;
      case "together":
        Bu(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function oa(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), $a |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (Zr(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, n = La(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = La(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Nu(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && mo(t)));
  }
  function Ly(t, e, n) {
    switch (e.tag) {
      case 3:
        vn(e, e.stateNode.containerInfo), Da(e, _e, t.memoizedState.cache), Nr();
        break;
      case 27:
      case 5:
        Ut(e);
        break;
      case 4:
        vn(e, e.stateNode.containerInfo);
        break;
      case 10:
        Da(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Ma(e), e.flags |= 128, null) : n & e.child.childLanes ? Wp(t, e, n) : (Ma(e), t = oa(t, e, n), t !== null ? t.sibling : null);
        Ma(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Zr(t, e, n, false), l = (n & e.childLanes) !== 0), i) {
          if (l) return Ip(t, e, n);
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Dt(ze, ze.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Qp(t, e, n);
      case 24:
        Da(e, _e, t.memoizedState.cache);
    }
    return oa(t, e, n);
  }
  function th(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) ke = true;
    else {
      if (!Nu(t, n) && !(e.flags & 128)) return ke = false, Ly(t, e, n);
      ke = !!(t.flags & 131072);
    }
    else ke = false, Lt && e.flags & 1048576 && jd(e, Wi, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, i = l._init;
          if (l = i(l._payload), e.type = l, typeof l == "function") Pu(l) ? (t = fl(l, t), e.tag = 1, e = Pp(null, e, l, t, n)) : (e.tag = 0, e = Ru(null, e, l, t, n));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === M) {
                e.tag = 11, e = Gp(null, e, l, t, n);
                break t;
              } else if (i === B) {
                e.tag = 14, e = Vp(null, e, l, t, n);
                break t;
              }
            }
            throw e = rt(l) || l, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ru(t, e, e.type, e.pendingProps, n);
      case 1:
        return l = e.type, i = fl(l, e.pendingProps), Pp(t, e, l, i, n);
      case 3:
        t: {
          if (vn(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
          var u = e.pendingProps;
          i = e.memoizedState, l = i.element, $u(t, e), Fr(e, u, null, n);
          var d = e.memoizedState;
          if (u = d.cache, Da(e, _e, u), u !== i.cache && ju(e, [_e], n, true), Pr(), u = d.element, i.isDehydrated) if (i = { element: u, isDehydrated: false, cache: d.cache }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
            e = Fp(t, e, u, n);
            break t;
          } else if (u !== l) {
            l = Cn(Error(s(424)), e), Ur(l), e = Fp(t, e, u, n);
            break t;
          } else for (je = Yn(e.stateNode.containerInfo.firstChild), Pe = e, Lt = true, $n = null, Vn = true, n = Zd(e, null, u, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nr(), u === l) {
              e = oa(t, e, n);
              break t;
            }
            Le(t, e, u, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Qr(t, e), t === null ? (n = am(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Lt || (n = e.type, t = e.pendingProps, l = _o(Qt.current).createElement(n), l[Xe] = e, l[tn] = t, $e(l, n, t), De(l), e.stateNode = l) : e.memoizedState = am(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Ut(e), t === null && Lt && (l = e.stateNode = tm(e.type, e.pendingProps, Qt.current), Pe = e, Vn = true, je = Yn(l.firstChild)), l = e.pendingProps.children, t !== null || Lt ? Le(t, e, l, n) : e.child = il(e, null, l, n), Qr(t, e), e.child;
      case 5:
        return t === null && Lt && ((i = l = je) && (l = mv(l, e.type, e.pendingProps, Vn), l !== null ? (e.stateNode = l, Pe = e, je = Yn(l.firstChild), Vn = false, i = true) : i = false), i || rl(e)), Ut(e), i = e.type, u = e.pendingProps, d = t !== null ? t.memoizedProps : null, l = u.children, xc(i, u) ? l = null : d !== null && xc(i, d) && (e.flags |= 32), e.memoizedState !== null && (i = uu(t, e, Dy, null, null, n), fi._currentValue = i), Qr(t, e), Le(t, e, l, n), e.child;
      case 6:
        return t === null && Lt && ((t = n = je) && (n = gv(n, e.pendingProps, Vn), n !== null ? (e.stateNode = n, Pe = e, je = null, t = true) : t = false), t || rl(e)), null;
      case 13:
        return Wp(t, e, n);
      case 4:
        return vn(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = il(e, null, l, n) : Le(t, e, l, n), e.child;
      case 11:
        return Gp(t, e, e.type, e.pendingProps, n);
      case 7:
        return Le(t, e, e.pendingProps, n), e.child;
      case 8:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Le(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return l = e.pendingProps, Da(e, e.type, l.value), Le(t, e, l.children, n), e.child;
      case 9:
        return i = e.type._context, l = e.pendingProps.children, pl(e), i = Qe(i), l = l(i), e.flags |= 1, Le(t, e, l, n), e.child;
      case 14:
        return Vp(t, e, e.type, e.pendingProps, n);
      case 15:
        return Xp(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ip(t, e, n);
      case 22:
        return Qp(t, e, n);
      case 24:
        return pl(e), l = Qe(_e), t === null ? (i = ou(), i === null && (i = ae, u = ru(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), e.memoizedState = { parent: l, cache: i }, Lu(e), Da(e, _e, i)) : (t.lanes & n && ($u(t, e), Fr(e, null, null, n), Pr()), i = t.memoizedState, u = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Da(e, _e, l)) : (l = u.cache, Da(e, _e, l), l !== i.cache && ju(e, [_e], n, true))), Le(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  var Uu = Et(null), dl = null, sa = null;
  function Da(t, e, n) {
    Dt(Uu, e._currentValue), e._currentValue = n;
  }
  function ua(t) {
    t._currentValue = Uu.current, jt(Uu);
  }
  function Hu(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ju(t, e, n, l) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var d = i.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var y = u;
          u = i;
          for (var b = 0; b < e.length; b++) if (y.context === e[b]) {
            u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), Hu(u.return, n, t), l || (d = null);
            break t;
          }
          u = y.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(s(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), Hu(d, n, t), d = null;
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
          on(i.pendingProps.value, d.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (i === Oe.current) {
        if (d = i.alternate, d === null) throw Error(s(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(fi) : t = [fi]);
      }
      i = i.return;
    }
    t !== null && ju(e, t, n, l), e.flags |= 262144;
  }
  function mo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!on(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function pl(t) {
    dl = t, sa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Qe(t) {
    return eh(dl, t);
  }
  function go(t, e) {
    return dl === null && pl(t), eh(t, e);
  }
  function eh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, sa === null) {
      if (t === null) throw Error(s(308));
      sa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else sa = sa.next = e;
    return n;
  }
  var ka = false;
  function Lu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function $u(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Ba(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Na(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, fe & 2) {
      var i = l.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = Pi(t), Ud(t, null, n), e;
    }
    return Ki(t, l, e, n), Pi(t);
  }
  function Kr(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194176) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Vf(t, n);
    }
  }
  function qu(t, e) {
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
  var Yu = false;
  function Pr() {
    if (Yu) {
      var t = Vl;
      if (t !== null) throw t;
    }
  }
  function Fr(t, e, n, l) {
    Yu = false;
    var i = t.updateQueue;
    ka = false;
    var u = i.firstBaseUpdate, d = i.lastBaseUpdate, y = i.shared.pending;
    if (y !== null) {
      i.shared.pending = null;
      var b = y, R = b.next;
      b.next = null, d === null ? u = R : d.next = R, d = b;
      var V = t.alternate;
      V !== null && (V = V.updateQueue, y = V.lastBaseUpdate, y !== d && (y === null ? V.firstBaseUpdate = R : y.next = R, V.lastBaseUpdate = b));
    }
    if (u !== null) {
      var F = i.baseState;
      d = 0, V = R = b = null, y = u;
      do {
        var k = y.lane & -536870913, Y = k !== y.lane;
        if (Y ? (Ht & k) === k : (l & k) === k) {
          k !== 0 && k === Gl && (Yu = true), V !== null && (V = V.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
          t: {
            var pt = t, Tt = y;
            k = e;
            var ge = n;
            switch (Tt.tag) {
              case 1:
                if (pt = Tt.payload, typeof pt == "function") {
                  F = pt.call(ge, F, k);
                  break t;
                }
                F = pt;
                break t;
              case 3:
                pt.flags = pt.flags & -65537 | 128;
              case 0:
                if (pt = Tt.payload, k = typeof pt == "function" ? pt.call(ge, F, k) : pt, k == null) break t;
                F = v({}, F, k);
                break t;
              case 2:
                ka = true;
            }
          }
          k = y.callback, k !== null && (t.flags |= 64, Y && (t.flags |= 8192), Y = i.callbacks, Y === null ? i.callbacks = [k] : Y.push(k));
        } else Y = { lane: k, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, V === null ? (R = V = Y, b = F) : V = V.next = Y, d |= k;
        if (y = y.next, y === null) {
          if (y = i.shared.pending, y === null) break;
          Y = y, y = Y.next, Y.next = null, i.lastBaseUpdate = Y, i.shared.pending = null;
        }
      } while (true);
      V === null && (b = F), i.baseState = b, i.firstBaseUpdate = R, i.lastBaseUpdate = V, u === null && (i.shared.lanes = 0), $a |= d, t.lanes = d, t.memoizedState = F;
    }
  }
  function nh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function ah(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) nh(n[t], e);
  }
  function Wr(t, e) {
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
      It(e, e.return, y);
    }
  }
  function Ua(t, e, n) {
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
              var b = n;
              try {
                y();
              } catch (R) {
                It(i, b, R);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (R) {
      It(e, e.return, R);
    }
  }
  function lh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ah(e, n);
      } catch (l) {
        It(t, t.return, l);
      }
    }
  }
  function rh(t, e, n) {
    n.props = fl(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      It(t, e, l);
    }
  }
  function hl(t, e) {
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
      It(t, e, u);
    }
  }
  function sn(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null) if (typeof l == "function") try {
      l();
    } catch (i) {
      It(t, e, i);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (i) {
      It(t, e, i);
    }
    else n.current = null;
  }
  function ih(t) {
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
      It(t, t.return, i);
    }
  }
  function oh(t, e, n) {
    try {
      var l = t.stateNode;
      cv(l, t.type, n, e), l[tn] = e;
    } catch (i) {
      It(t, t.return, i);
    }
  }
  function sh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function Gu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || sh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Vu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = zo));
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (Vu(t, e, n), t = t.sibling; t !== null; ) Vu(t, e, n), t = t.sibling;
  }
  function yo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null)) for (yo(t, e, n), t = t.sibling; t !== null; ) yo(t, e, n), t = t.sibling;
  }
  var ca = false, he = false, Xu = false, uh = typeof WeakSet == "function" ? WeakSet : Set, Be = null, ch = false;
  function $y(t, e) {
    if (t = t.containerInfo, bc = Ho, t = Rd(t), Zs(t)) {
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
          var d = 0, y = -1, b = -1, R = 0, V = 0, F = t, k = null;
          e: for (; ; ) {
            for (var Y; F !== n || i !== 0 && F.nodeType !== 3 || (y = d + i), F !== u || l !== 0 && F.nodeType !== 3 || (b = d + l), F.nodeType === 3 && (d += F.nodeValue.length), (Y = F.firstChild) !== null; ) k = F, F = Y;
            for (; ; ) {
              if (F === t) break e;
              if (k === n && ++R === i && (y = d), k === u && ++V === l && (b = d), (Y = F.nextSibling) !== null) break;
              F = k, k = F.parentNode;
            }
            F = Y;
          }
          n = y === -1 || b === -1 ? null : { start: y, end: b };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Sc = { focusedElem: t, selectionRange: n }, Ho = false, Be = e; Be !== null; ) if (e = Be, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Be = t;
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
              var pt = fl(n.type, i, n.elementType === n.type);
              t = l.getSnapshotBeforeUpdate(pt, u), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (Tt) {
              It(n, n.return, Tt);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Ec(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ec(t);
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
    return pt = ch, ch = false, pt;
  }
  function fh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        da(t, n), l & 4 && Wr(5, n);
        break;
      case 1:
        if (da(t, n), l & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (y) {
          It(n, n.return, y);
        }
        else {
          var i = fl(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (y) {
            It(n, n.return, y);
          }
        }
        l & 64 && lh(n), l & 512 && hl(n, n.return);
        break;
      case 3:
        if (da(t, n), l & 64 && (l = n.updateQueue, l !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            ah(l, t);
          } catch (y) {
            It(n, n.return, y);
          }
        }
        break;
      case 26:
        da(t, n), l & 512 && hl(n, n.return);
        break;
      case 27:
      case 5:
        da(t, n), e === null && l & 4 && ih(n), l & 512 && hl(n, n.return);
        break;
      case 12:
        da(t, n);
        break;
      case 13:
        da(t, n), l & 4 && hh(t, n);
        break;
      case 22:
        if (i = n.memoizedState !== null || ca, !i) {
          e = e !== null && e.memoizedState !== null || he;
          var u = ca, d = he;
          ca = i, (he = e) && !d ? Ha(t, n, (n.subtreeFlags & 8772) !== 0) : da(t, n), ca = u, he = d;
        }
        l & 512 && (n.memoizedProps.mode === "manual" ? hl(n, n.return) : sn(n, n.return));
        break;
      default:
        da(t, n);
    }
  }
  function dh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, dh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && _s(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Re = null, un = false;
  function fa(t, e, n) {
    for (n = n.child; n !== null; ) ph(t, e, n), n = n.sibling;
  }
  function ph(t, e, n) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") try {
      Zt.onCommitFiberUnmount(Jt, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        he || sn(n, e), fa(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        he || sn(n, e);
        var l = Re, i = un;
        for (Re = n.stateNode, fa(t, e, n), n = n.stateNode, e = n.attributes; e.length; ) n.removeAttributeNode(e[0]);
        _s(n), Re = l, un = i;
        break;
      case 5:
        he || sn(n, e);
      case 6:
        i = Re;
        var u = un;
        if (Re = null, fa(t, e, n), Re = i, un = u, Re !== null) if (un) try {
          t = Re, l = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l);
        } catch (d) {
          It(n, e, d);
        }
        else try {
          Re.removeChild(n.stateNode);
        } catch (d) {
          It(n, e, d);
        }
        break;
      case 18:
        Re !== null && (un ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Cc(e.parentNode, n) : e.nodeType === 1 && Cc(e, n), mi(e)) : Cc(Re, n.stateNode));
        break;
      case 4:
        l = Re, i = un, Re = n.stateNode.containerInfo, un = true, fa(t, e, n), Re = l, un = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        he || Ua(2, n, e), he || Ua(4, n, e), fa(t, e, n);
        break;
      case 1:
        he || (sn(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && rh(n, e, l)), fa(t, e, n);
        break;
      case 21:
        fa(t, e, n);
        break;
      case 22:
        he || sn(n, e), he = (l = he) || n.memoizedState !== null, fa(t, e, n), he = l;
        break;
      default:
        fa(t, e, n);
    }
  }
  function hh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      mi(t);
    } catch (n) {
      It(e, e.return, n);
    }
  }
  function qy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new uh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new uh()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Qu(t, e) {
    var n = qy(t);
    e.forEach(function(l) {
      var i = tv.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Rn(t, e) {
    var n = e.deletions;
    if (n !== null) for (var l = 0; l < n.length; l++) {
      var i = n[l], u = t, d = e, y = d;
      t: for (; y !== null; ) {
        switch (y.tag) {
          case 27:
          case 5:
            Re = y.stateNode, un = false;
            break t;
          case 3:
            Re = y.stateNode.containerInfo, un = true;
            break t;
          case 4:
            Re = y.stateNode.containerInfo, un = true;
            break t;
        }
        y = y.return;
      }
      if (Re === null) throw Error(s(160));
      ph(u, d, i), Re = null, un = false, u = i.alternate, u !== null && (u.return = null), i.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) mh(e, t), e = e.sibling;
  }
  var qn = null;
  function mh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rn(e, t), Mn(t), l & 4 && (Ua(3, t, t.return), Wr(3, t), Ua(5, t, t.return));
        break;
      case 1:
        Rn(e, t), Mn(t), l & 512 && (he || n === null || sn(n, n.return)), l & 64 && ca && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = qn;
        if (Rn(e, t), Mn(t), l & 512 && (he || n === null || sn(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null) if (l === null) if (t.stateNode === null) {
            t: {
              l = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
              e: switch (l) {
                case "title":
                  u = i.getElementsByTagName("title")[0], (!u || u[Cr] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(u, i.querySelector("head > title"))), $e(u, l, n), u[Xe] = t, De(u), l = u;
                  break t;
                case "link":
                  var d = im("link", "href", i).get(l + (n.href || ""));
                  if (d) {
                    for (var y = 0; y < d.length; y++) if (u = d[y], u.getAttribute("href") === (n.href == null ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      d.splice(y, 1);
                      break e;
                    }
                  }
                  u = i.createElement(l), $e(u, l, n), i.head.appendChild(u);
                  break;
                case "meta":
                  if (d = im("meta", "content", i).get(l + (n.content || ""))) {
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
              u[Xe] = t, De(u), l = u;
            }
            t.stateNode = l;
          } else om(i, t.type, t.stateNode);
          else t.stateNode = rm(i, l, t.memoizedProps);
          else u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? om(i, t.type, t.stateNode) : rm(i, l, t.memoizedProps)) : l === null && t.stateNode !== null && oh(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          i = t.stateNode, u = t.memoizedProps;
          try {
            for (var b = i.firstChild; b; ) {
              var R = b.nextSibling, V = b.nodeName;
              b[Cr] || V === "HEAD" || V === "BODY" || V === "SCRIPT" || V === "STYLE" || V === "LINK" && b.rel.toLowerCase() === "stylesheet" || i.removeChild(b), b = R;
            }
            for (var F = t.type, k = i.attributes; k.length; ) i.removeAttributeNode(k[0]);
            $e(i, F, u), i[Xe] = t, i[tn] = u;
          } catch (pt) {
            It(t, t.return, pt);
          }
        }
      case 5:
        if (Rn(e, t), Mn(t), l & 512 && (he || n === null || sn(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            _l(i, "");
          } catch (pt) {
            It(t, t.return, pt);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, oh(t, i, n !== null ? n.memoizedProps : i)), l & 1024 && (Xu = true);
        break;
      case 6:
        if (Rn(e, t), Mn(t), l & 4) {
          if (t.stateNode === null) throw Error(s(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (pt) {
            It(t, t.return, pt);
          }
        }
        break;
      case 3:
        if (Bo = null, i = qn, qn = Do(e.containerInfo), Rn(e, t), qn = i, Mn(t), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
          mi(e.containerInfo);
        } catch (pt) {
          It(t, t.return, pt);
        }
        Xu && (Xu = false, gh(t));
        break;
      case 4:
        l = qn, qn = Do(t.stateNode.containerInfo), Rn(e, t), Mn(t), qn = l;
        break;
      case 12:
        Rn(e, t), Mn(t);
        break;
      case 13:
        Rn(e, t), Mn(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ec = He()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Qu(t, l)));
        break;
      case 22:
        if (l & 512 && (he || n === null || sn(n, n.return)), b = t.memoizedState !== null, R = n !== null && n.memoizedState !== null, V = ca, F = he, ca = V || b, he = F || R, Rn(e, t), he = F, ca = V, Mn(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, l & 8192 && (e._visibility = b ? e._visibility & -2 : e._visibility | 1, b && (e = ca || he, n === null || R || e || Kl(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual")) t: for (n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
            if (n === null) {
              R = n = e;
              try {
                if (i = R.stateNode, b) u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                else {
                  d = R.stateNode, y = R.memoizedProps.style;
                  var Y = y != null && y.hasOwnProperty("display") ? y.display : null;
                  d.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                }
              } catch (pt) {
                It(R, R.return, pt);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              R = e;
              try {
                R.stateNode.nodeValue = b ? "" : R.memoizedProps;
              } catch (pt) {
                It(R, R.return, pt);
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
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Qu(t, n))));
        break;
      case 19:
        Rn(e, t), Mn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Qu(t, l)));
        break;
      case 21:
        break;
      default:
        Rn(e, t), Mn(t);
    }
  }
  function Mn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (sh(n)) {
                var l = n;
                break t;
              }
              n = n.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var i = l.stateNode, u = Gu(t);
              yo(t, u, i);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (_l(d, ""), l.flags &= -33);
              var y = Gu(t);
              yo(t, y, d);
              break;
            case 3:
            case 4:
              var b = l.stateNode.containerInfo, R = Gu(t);
              Vu(t, R, b);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (V) {
        It(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function gh(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      gh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function da(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) fh(t, e.alternate, e), e = e.sibling;
  }
  function Kl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ua(4, e, e.return), Kl(e);
          break;
        case 1:
          sn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && rh(e, e.return, n), Kl(e);
          break;
        case 26:
        case 27:
        case 5:
          sn(e, e.return), Kl(e);
          break;
        case 22:
          sn(e, e.return), e.memoizedState === null && Kl(e);
          break;
        default:
          Kl(e);
      }
      t = t.sibling;
    }
  }
  function Ha(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, i = t, u = e, d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ha(i, u, n), Wr(4, u);
          break;
        case 1:
          if (Ha(i, u, n), l = u, i = l.stateNode, typeof i.componentDidMount == "function") try {
            i.componentDidMount();
          } catch (R) {
            It(l, l.return, R);
          }
          if (l = u, i = l.updateQueue, i !== null) {
            var y = l.stateNode;
            try {
              var b = i.shared.hiddenCallbacks;
              if (b !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++) nh(b[i], y);
            } catch (R) {
              It(l, l.return, R);
            }
          }
          n && d & 64 && lh(u), hl(u, u.return);
          break;
        case 26:
        case 27:
        case 5:
          Ha(i, u, n), n && l === null && d & 4 && ih(u), hl(u, u.return);
          break;
        case 12:
          Ha(i, u, n);
          break;
        case 13:
          Ha(i, u, n), n && d & 4 && hh(i, u);
          break;
        case 22:
          u.memoizedState === null && Ha(i, u, n), hl(u, u.return);
          break;
        default:
          Ha(i, u, n);
      }
      e = e.sibling;
    }
  }
  function Zu(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && qr(n));
  }
  function Ku(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qr(t));
  }
  function ja(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) yh(t, e, n, l), e = e.sibling;
  }
  function yh(t, e, n, l) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ja(t, e, n, l), i & 2048 && Wr(9, e);
        break;
      case 3:
        ja(t, e, n, l), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && qr(t)));
        break;
      case 12:
        if (i & 2048) {
          ja(t, e, n, l), t = e.stateNode;
          try {
            var u = e.memoizedProps, d = u.id, y = u.onPostCommit;
            typeof y == "function" && y(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (b) {
            It(e, e.return, b);
          }
        } else ja(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, e.memoizedState !== null ? u._visibility & 4 ? ja(t, e, n, l) : Jr(t, e) : u._visibility & 4 ? ja(t, e, n, l) : (u._visibility |= 4, Pl(t, e, n, l, (e.subtreeFlags & 10256) !== 0)), i & 2048 && Zu(e.alternate, e);
        break;
      case 24:
        ja(t, e, n, l), i & 2048 && Ku(e.alternate, e);
        break;
      default:
        ja(t, e, n, l);
    }
  }
  function Pl(t, e, n, l, i) {
    for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t, d = e, y = n, b = l, R = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Pl(u, d, y, b, i), Wr(8, d);
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          d.memoizedState !== null ? V._visibility & 4 ? Pl(u, d, y, b, i) : Jr(u, d) : (V._visibility |= 4, Pl(u, d, y, b, i)), i && R & 2048 && Zu(d.alternate, d);
          break;
        case 24:
          Pl(u, d, y, b, i), i && R & 2048 && Ku(d.alternate, d);
          break;
        default:
          Pl(u, d, y, b, i);
      }
      e = e.sibling;
    }
  }
  function Jr(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, l = e, i = l.flags;
      switch (l.tag) {
        case 22:
          Jr(n, l), i & 2048 && Zu(l.alternate, l);
          break;
        case 24:
          Jr(n, l), i & 2048 && Ku(l.alternate, l);
          break;
        default:
          Jr(n, l);
      }
      e = e.sibling;
    }
  }
  var Ir = 8192;
  function Fl(t) {
    if (t.subtreeFlags & Ir) for (t = t.child; t !== null; ) vh(t), t = t.sibling;
  }
  function vh(t) {
    switch (t.tag) {
      case 26:
        Fl(t), t.flags & Ir && t.memoizedState !== null && Ov(qn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Fl(t);
        break;
      case 3:
      case 4:
        var e = qn;
        qn = Do(t.stateNode.containerInfo), Fl(t), qn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Ir, Ir = 16777216, Fl(t), Ir = e) : Fl(t));
        break;
      default:
        Fl(t);
    }
  }
  function bh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ti(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, xh(l, t);
      }
      bh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Sh(t), t = t.sibling;
  }
  function Sh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ti(t), t.flags & 2048 && Ua(9, t, t.return);
        break;
      case 3:
        ti(t);
        break;
      case 12:
        ti(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, vo(t)) : ti(t);
        break;
      default:
        ti(t);
    }
  }
  function vo(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var l = e[n];
        Be = l, xh(l, t);
      }
      bh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ua(8, e, e.return), vo(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 4 && (n._visibility &= -5, vo(e));
          break;
        default:
          vo(e);
      }
      t = t.sibling;
    }
  }
  function xh(t, e) {
    for (; Be !== null; ) {
      var n = Be;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ua(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Be = l;
      else t: for (n = t; Be !== null; ) {
        l = Be;
        var i = l.sibling, u = l.return;
        if (dh(l), l === n) {
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
  function Yy(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function On(t, e, n, l) {
    return new Yy(t, e, n, l);
  }
  function Pu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function La(t, e) {
    var n = t.alternate;
    return n === null ? (n = On(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 31457280, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Th(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function bo(t, e, n, l, i, u) {
    var d = 0;
    if (l = t, typeof t == "function") Pu(t) && (d = 1);
    else if (typeof t == "string") d = Rv(t, n, pe.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case g:
        return ml(n.children, i, u, e);
      case m:
        d = 8, i |= 24;
        break;
      case x:
        return t = On(12, n, e, i | 2), t.elementType = x, t.lanes = u, t;
      case S:
        return t = On(13, n, e, i), t.elementType = S, t.lanes = u, t;
      case N:
        return t = On(19, n, e, i), t.elementType = N, t.lanes = u, t;
      case $:
        return Ch(n, i, u, e);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case T:
          case D:
            d = 10;
            break t;
          case E:
            d = 9;
            break t;
          case M:
            d = 11;
            break t;
          case B:
            d = 14;
            break t;
          case G:
            d = 16, l = null;
            break t;
        }
        d = 29, n = Error(s(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return e = On(d, n, e, i), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function ml(t, e, n, l) {
    return t = On(7, t, l, e), t.lanes = n, t;
  }
  function Ch(t, e, n, l) {
    t = On(22, t, l, e), t.elementType = $, t.lanes = n;
    var i = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (!(i._pendingVisibility & 2)) {
        var d = Ra(u, 2);
        d !== null && (i._pendingVisibility |= 2, Fe(d, u, 2));
      }
    }, attach: function() {
      var u = i._current;
      if (u === null) throw Error(s(456));
      if (i._pendingVisibility & 2) {
        var d = Ra(u, 2);
        d !== null && (i._pendingVisibility &= -3, Fe(d, u, 2));
      }
    } };
    return t.stateNode = i, t;
  }
  function Fu(t, e, n) {
    return t = On(6, t, null, e), t.lanes = n, t;
  }
  function Wu(t, e, n) {
    return e = On(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  function pa(t) {
    t.flags |= 4;
  }
  function Eh(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !sm(e)) {
      if (e = wn.current, e !== null && ((Ht & 4194176) === Ht ? Xn !== null : (Ht & 62914560) !== Ht && !(Ht & 536870912) || e !== Xn)) throw jr = nu, qd;
      t.flags |= 8192;
    }
  }
  function So(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yf() : 536870912, t.lanes |= e, Jl |= e);
  }
  function ei(t, e) {
    if (!Lt) switch (t.tailMode) {
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
  function ce(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e) for (var i = t.child; i !== null; ) n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 31457280, l |= i.flags & 31457280, i.return = t, i = i.sibling;
    else for (i = t.child; i !== null; ) n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function Gy(t, e, n) {
    var l = e.pendingProps;
    switch (tu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ce(e), null;
      case 1:
        return ce(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ua(_e), Ye(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Br(e) ? pa(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, $n !== null && (rc($n), $n = null))), ce(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (pa(e), n !== null ? (ce(e), Eh(e, n)) : (ce(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (pa(e), ce(e), Eh(e, n)) : (ce(e), e.flags &= -16777217) : (t.memoizedProps !== l && pa(e), ce(e), e.flags &= -16777217), null;
      case 27:
        oe(e), n = Qt.current;
        var i = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && pa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return ce(e), null;
          }
          t = pe.current, Br(e) ? Ld(e) : (t = tm(i, l, n), e.stateNode = t, pa(e));
        }
        return ce(e), null;
      case 5:
        if (oe(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && pa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return ce(e), null;
          }
          if (t = pe.current, Br(e)) Ld(e);
          else {
            switch (i = _o(Qt.current), t) {
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
            t[Xe] = e, t[tn] = l;
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
            t && pa(e);
          }
        }
        return ce(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && pa(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (t = Qt.current, Br(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = Pe, i !== null) switch (i.tag) {
              case 27:
              case 5:
                l = i.memoizedProps;
            }
            t[Xe] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === true || Kh(t.nodeValue, n)), t || rl(e);
          } else t = _o(t).createTextNode(l), t[Xe] = e, e.stateNode = t;
        }
        return ce(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = Br(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(s(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Xe] = e;
            } else Nr(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            ce(e), i = false;
          } else $n !== null && (rc($n), $n = null), i = true;
          if (!i) return e.flags & 256 ? (ra(e), e) : (ra(e), null);
        }
        if (ra(e), e.flags & 128) return e.lanes = n, e;
        if (n = l !== null, t = t !== null && t.memoizedState !== null, n) {
          l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), So(e, e.updateQueue), ce(e), null;
      case 4:
        return Ye(), t === null && gc(e.stateNode.containerInfo), ce(e), null;
      case 10:
        return ua(e.type), ce(e), null;
      case 19:
        if (jt(ze), i = e.memoizedState, i === null) return ce(e), null;
        if (l = (e.flags & 128) !== 0, u = i.rendering, u === null) if (l) ei(i, false);
        else {
          if (me !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = no(t), u !== null) {
              for (e.flags |= 128, ei(i, false), t = u.updateQueue, e.updateQueue = t, So(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) Th(n, t), n = n.sibling;
              return Dt(ze, ze.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && He() > xo && (e.flags |= 128, l = true, ei(i, false), e.lanes = 4194304);
        }
        else {
          if (!l) if (t = no(u), t !== null) {
            if (e.flags |= 128, l = true, t = t.updateQueue, e.updateQueue = t, So(e, t), ei(i, true), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Lt) return ce(e), null;
          } else 2 * He() - i.renderingStartTime > xo && n !== 536870912 && (e.flags |= 128, l = true, ei(i, false), e.lanes = 4194304);
          i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = He(), e.sibling = null, t = ze.current, Dt(ze, l ? t & 1 | 2 : t & 1), e) : (ce(e), null);
      case 22:
      case 23:
        return ra(e), lu(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? n & 536870912 && !(e.flags & 128) && (ce(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e), n = e.updateQueue, n !== null && So(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && jt(ol), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ua(_e), ce(e), null;
      case 25:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function Vy(t, e) {
    switch (tu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ua(_e), Ye(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return oe(e), null;
      case 13:
        if (ra(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(s(340));
          Nr();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return jt(ze), null;
      case 4:
        return Ye(), null;
      case 10:
        return ua(e.type), null;
      case 22:
      case 23:
        return ra(e), lu(), t !== null && jt(ol), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ua(_e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ah(t, e) {
    switch (tu(e), e.tag) {
      case 3:
        ua(_e), Ye();
        break;
      case 26:
      case 27:
      case 5:
        oe(e);
        break;
      case 4:
        Ye();
        break;
      case 13:
        ra(e);
        break;
      case 19:
        jt(ze);
        break;
      case 10:
        ua(e.type);
        break;
      case 22:
      case 23:
        ra(e), lu(), t !== null && jt(ol);
        break;
      case 24:
        ua(_e);
    }
  }
  var Xy = { getCacheForType: function(t) {
    var e = Qe(_e), n = e.data.get(t);
    return n === void 0 && (n = t(), e.data.set(t, n)), n;
  } }, Qy = typeof WeakMap == "function" ? WeakMap : Map, fe = 0, ae = null, kt = null, Ht = 0, le = 0, cn = null, ha = false, Wl = false, Ju = false, ma = 0, me = 0, $a = 0, gl = 0, Iu = 0, zn = 0, Jl = 0, ni = null, Zn = null, tc = false, ec = 0, xo = 1 / 0, To = null, qa = null, Co = false, yl = null, ai = 0, nc = 0, ac = null, li = 0, lc = null;
  function fn() {
    if (fe & 2 && Ht !== 0) return Ht & -Ht;
    if (Q.T !== null) {
      var t = Gl;
      return t !== 0 ? t : dc();
    }
    return Qf();
  }
  function wh() {
    zn === 0 && (zn = !(Ht & 536870912) || Lt ? qf() : 536870912);
    var t = wn.current;
    return t !== null && (t.flags |= 32), zn;
  }
  function Fe(t, e, n) {
    (t === ae && le === 2 || t.cancelPendingCommit !== null) && (Il(t, 0), ga(t, Ht, zn, false)), Tr(t, n), (!(fe & 2) || t !== ae) && (t === ae && (!(fe & 2) && (gl |= n), me === 4 && ga(t, Ht, zn, false)), Kn(t));
  }
  function Rh(t, e, n) {
    if (fe & 6) throw Error(s(327));
    var l = !n && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Gn(t, e), i = l ? Py(t, e) : sc(t, e, true), u = l;
    do {
      if (i === 0) {
        Wl && !l && ga(t, e, 0, false);
        break;
      } else if (i === 6) ga(t, e, 0, !ha);
      else {
        if (n = t.current.alternate, u && !Zy(n)) {
          i = sc(t, e, false), u = false;
          continue;
        }
        if (i === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var d = 0;
          else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            e = d;
            t: {
              var y = t;
              i = ni;
              var b = y.current.memoizedState.isDehydrated;
              if (b && (Il(y, d).flags |= 256), d = sc(y, d, false), d !== 2) {
                if (Ju && !b) {
                  y.errorRecoveryDisabledLanes |= u, gl |= u, i = 4;
                  break t;
                }
                u = Zn, Zn = i, u !== null && rc(u);
              }
              i = d;
            }
            if (u = false, i !== 2) continue;
          }
        }
        if (i === 1) {
          Il(t, 0), ga(t, e, 0, true);
          break;
        }
        t: {
          switch (l = t, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194176) === e) {
                ga(l, e, zn, !ha);
                break t;
              }
              break;
            case 2:
              Zn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (l.finishedWork = n, l.finishedLanes = e, (e & 62914560) === e && (u = ec + 300 - He(), 10 < u)) {
            if (ga(l, e, zn, !ha), bn(l, 0) !== 0) break t;
            l.timeoutHandle = Wh(Mh.bind(null, l, n, Zn, To, tc, e, zn, gl, Jl, ha, 2, -0, 0), u);
            break t;
          }
          Mh(l, n, Zn, To, tc, e, zn, gl, Jl, ha, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Kn(t);
  }
  function rc(t) {
    Zn === null ? Zn = t : Zn.push.apply(Zn, t);
  }
  function Mh(t, e, n, l, i, u, d, y, b, R, V, F, k) {
    var Y = e.subtreeFlags;
    if ((Y & 8192 || (Y & 16785408) === 16785408) && (ci = { stylesheets: null, count: 0, unsuspend: Mv }, vh(e), e = zv(), e !== null)) {
      t.cancelPendingCommit = e(Nh.bind(null, t, n, l, i, d, y, b, 1, F, k)), ga(t, u, d, !R);
      return;
    }
    Nh(t, n, l, i, d, y, b, V, F, k);
  }
  function Zy(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var l = 0; l < n.length; l++) {
        var i = n[l], u = i.getSnapshot;
        i = i.value;
        try {
          if (!on(u(), i)) return false;
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
  function ga(t, e, n, l) {
    e &= ~Iu, e &= ~gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var u = 31 - St(i), d = 1 << u;
      l[u] = -1, i &= ~d;
    }
    n !== 0 && Gf(t, n, e);
  }
  function Eo() {
    return fe & 6 ? true : (ri(0), false);
  }
  function ic() {
    if (kt !== null) {
      if (le === 0) var t = kt.return;
      else t = kt, sa = dl = null, du(t), ql = null, Lr = 0, t = kt;
      for (; t !== null; ) Ah(t.alternate, t), t = t.return;
      kt = null;
    }
  }
  function Il(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, dv(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), ic(), ae = t, kt = n = La(t.current, null), Ht = e, le = 0, cn = null, ha = false, Wl = Gn(t, e), Ju = false, Jl = zn = Iu = gl = $a = me = 0, Zn = ni = null, tc = false, e & 8 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var i = 31 - St(l), u = 1 << i;
      e |= t[i], l &= ~u;
    }
    return ma = e, Zi(), n;
  }
  function Oh(t, e) {
    zt = null, Q.H = Qn, e === Hr ? (e = Vd(), le = 3) : e === qd ? (e = Vd(), le = 4) : le = e === Yp ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, cn = e, kt === null && (me = 1, ho(t, Cn(e, t.current)));
  }
  function zh() {
    var t = Q.H;
    return Q.H = Qn, t === null ? Qn : t;
  }
  function _h() {
    var t = Q.A;
    return Q.A = Xy, t;
  }
  function oc() {
    me = 4, ha || (Ht & 4194176) !== Ht && wn.current !== null || (Wl = true), !($a & 134217727) && !(gl & 134217727) || ae === null || ga(ae, Ht, zn, false);
  }
  function sc(t, e, n) {
    var l = fe;
    fe |= 2;
    var i = zh(), u = _h();
    (ae !== t || Ht !== e) && (To = null, Il(t, e)), e = false;
    var d = me;
    t: do
      try {
        if (le !== 0 && kt !== null) {
          var y = kt, b = cn;
          switch (le) {
            case 8:
              ic(), d = 6;
              break t;
            case 3:
            case 2:
            case 6:
              wn.current === null && (e = true);
              var R = le;
              if (le = 0, cn = null, tr(t, y, b, R), n && Wl) {
                d = 0;
                break t;
              }
              break;
            default:
              R = le, le = 0, cn = null, tr(t, y, b, R);
          }
        }
        Ky(), d = me;
        break;
      } catch (V) {
        Oh(t, V);
      }
    while (true);
    return e && t.shellSuspendCounter++, sa = dl = null, fe = l, Q.H = i, Q.A = u, kt === null && (ae = null, Ht = 0, Zi()), d;
  }
  function Ky() {
    for (; kt !== null; ) Dh(kt);
  }
  function Py(t, e) {
    var n = fe;
    fe |= 2;
    var l = zh(), i = _h();
    ae !== t || Ht !== e ? (To = null, xo = He() + 500, Il(t, e)) : Wl = Gn(t, e);
    t: do
      try {
        if (le !== 0 && kt !== null) {
          e = kt;
          var u = cn;
          e: switch (le) {
            case 1:
              le = 0, cn = null, tr(t, e, u, 1);
              break;
            case 2:
              if (Yd(u)) {
                le = 0, cn = null, kh(e);
                break;
              }
              e = function() {
                le === 2 && ae === t && (le = 7), Kn(t);
              }, u.then(e, e);
              break t;
            case 3:
              le = 7;
              break t;
            case 4:
              le = 5;
              break t;
            case 7:
              Yd(u) ? (le = 0, cn = null, kh(e)) : (le = 0, cn = null, tr(t, e, u, 7));
              break;
            case 5:
              var d = null;
              switch (kt.tag) {
                case 26:
                  d = kt.memoizedState;
                case 5:
                case 27:
                  var y = kt;
                  if (!d || sm(d)) {
                    le = 0, cn = null;
                    var b = y.sibling;
                    if (b !== null) kt = b;
                    else {
                      var R = y.return;
                      R !== null ? (kt = R, Ao(R)) : kt = null;
                    }
                    break e;
                  }
              }
              le = 0, cn = null, tr(t, e, u, 5);
              break;
            case 6:
              le = 0, cn = null, tr(t, e, u, 6);
              break;
            case 8:
              ic(), me = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Fy();
        break;
      } catch (V) {
        Oh(t, V);
      }
    while (true);
    return sa = dl = null, Q.H = l, Q.A = i, fe = n, kt !== null ? 0 : (ae = null, Ht = 0, Zi(), me);
  }
  function Fy() {
    for (; kt !== null && !vt(); ) Dh(kt);
  }
  function Dh(t) {
    var e = th(t.alternate, t, ma);
    t.memoizedProps = t.pendingProps, e === null ? Ao(t) : kt = e;
  }
  function kh(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Kp(n, e, e.pendingProps, e.type, void 0, Ht);
        break;
      case 11:
        e = Kp(n, e, e.pendingProps, e.type.render, e.ref, Ht);
        break;
      case 5:
        du(e);
      default:
        Ah(n, e), e = kt = Th(e, ma), e = th(n, e, ma);
    }
    t.memoizedProps = t.pendingProps, e === null ? Ao(t) : kt = e;
  }
  function tr(t, e, n, l) {
    sa = dl = null, du(e), ql = null, Lr = 0;
    var i = e.return;
    try {
      if (jy(t, i, e, n, Ht)) {
        me = 1, ho(t, Cn(n, t.current)), kt = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw kt = i, u;
      me = 1, ho(t, Cn(n, t.current)), kt = null;
      return;
    }
    e.flags & 32768 ? (Lt || l === 1 ? t = true : Wl || Ht & 536870912 ? t = false : (ha = t = true, (l === 2 || l === 3 || l === 6) && (l = wn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Bh(e, t)) : Ao(e);
  }
  function Ao(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Bh(e, ha);
        return;
      }
      t = e.return;
      var n = Gy(e.alternate, e, ma);
      if (n !== null) {
        kt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        kt = e;
        return;
      }
      kt = e = t;
    } while (e !== null);
    me === 0 && (me = 5);
  }
  function Bh(t, e) {
    do {
      var n = Vy(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, kt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        kt = t;
        return;
      }
      kt = t = n;
    } while (t !== null);
    me = 6, kt = null;
  }
  function Nh(t, e, n, l, i, u, d, y, b, R) {
    var V = Q.T, F = lt.p;
    try {
      lt.p = 2, Q.T = null, Wy(t, e, n, l, F, i, u, d, y, b, R);
    } finally {
      Q.T = V, lt.p = F;
    }
  }
  function Wy(t, e, n, l, i, u, d, y) {
    do
      er();
    while (yl !== null);
    if (fe & 6) throw Error(s(327));
    var b = t.finishedWork;
    if (l = t.finishedLanes, b === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, b === t.current) throw Error(s(177));
    t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
    var R = b.lanes | b.childLanes;
    if (R |= Ws, O0(t, l, R, u, d, y), t === ae && (kt = ae = null, Ht = 0), !(b.subtreeFlags & 10256) && !(b.flags & 10256) || Co || (Co = true, nc = R, ac = n, ev(Mt, function() {
      return er(), null;
    })), n = (b.flags & 15990) !== 0, b.subtreeFlags & 15990 || n ? (n = Q.T, Q.T = null, u = lt.p, lt.p = 2, d = fe, fe |= 4, $y(t, b), mh(b, t), xy(Sc, t.containerInfo), Ho = !!bc, Sc = bc = null, t.current = b, fh(t, b.alternate, b), Hn(), fe = d, lt.p = u, Q.T = n) : t.current = b, Co ? (Co = false, yl = t, ai = l) : Uh(t, R), R = t.pendingLanes, R === 0 && (qa = null), ct(b.stateNode), Kn(t), e !== null) for (i = t.onRecoverableError, b = 0; b < e.length; b++) R = e[b], i(R.value, { componentStack: R.stack });
    return ai & 3 && er(), R = t.pendingLanes, l & 4194218 && R & 42 ? t === lc ? li++ : (li = 0, lc = t) : li = 0, ri(0), null;
  }
  function Uh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, qr(e)));
  }
  function er() {
    if (yl !== null) {
      var t = yl, e = nc;
      nc = 0;
      var n = Xf(ai), l = Q.T, i = lt.p;
      try {
        if (lt.p = 32 > n ? 32 : n, Q.T = null, yl === null) var u = false;
        else {
          n = ac, ac = null;
          var d = yl, y = ai;
          if (yl = null, ai = 0, fe & 6) throw Error(s(331));
          var b = fe;
          if (fe |= 4, Sh(d.current), yh(d, d.current, y, n), fe = b, ri(0, false), Zt && typeof Zt.onPostCommitFiberRoot == "function") try {
            Zt.onPostCommitFiberRoot(Jt, d);
          } catch {
          }
          u = true;
        }
        return u;
      } finally {
        lt.p = i, Q.T = l, Uh(t, e);
      }
    }
    return false;
  }
  function Hh(t, e, n) {
    e = Cn(n, e), e = wu(t.stateNode, e, 2), t = Na(t, e, 2), t !== null && (Tr(t, 2), Kn(t));
  }
  function It(t, e, n) {
    if (t.tag === 3) Hh(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Hh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (qa === null || !qa.has(l))) {
          t = Cn(n, t), n = $p(2), l = Na(e, n, 2), l !== null && (qp(n, l, e, t), Tr(l, 2), Kn(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function uc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Qy();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (Ju = true, i.add(n), t = Jy.bind(null, t, e, n), e.then(t, t));
  }
  function Jy(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, ae === t && (Ht & n) === n && (me === 4 || me === 3 && (Ht & 62914560) === Ht && 300 > He() - ec ? !(fe & 2) && Il(t, 0) : Iu |= n, Jl === Ht && (Jl = 0)), Kn(t);
  }
  function jh(t, e) {
    e === 0 && (e = Yf()), t = Ra(t, e), t !== null && (Tr(t, e), Kn(t));
  }
  function Iy(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), jh(t, n);
  }
  function tv(t, e) {
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
    l !== null && l.delete(e), jh(t, n);
  }
  function ev(t, e) {
    return Ue(t, e);
  }
  var wo = null, nr = null, cc = false, Ro = false, fc = false, vl = 0;
  function Kn(t) {
    t !== nr && t.next === null && (nr === null ? wo = nr = t : nr = nr.next = t), Ro = true, cc || (cc = true, av(nv));
  }
  function ri(t, e) {
    if (!fc && Ro) {
      fc = true;
      do
        for (var n = false, l = wo; l !== null; ) {
          if (t !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var d = l.suspendedLanes, y = l.pingedLanes;
              u = (1 << 31 - St(42 | t) + 1) - 1, u &= i & ~(d & ~y), u = u & 201326677 ? u & 201326677 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, qh(l, u));
          } else u = Ht, u = bn(l, l === ae ? u : 0), !(u & 3) || Gn(l, u) || (n = true, qh(l, u));
          l = l.next;
        }
      while (n);
      fc = false;
    }
  }
  function nv() {
    Ro = cc = false;
    var t = 0;
    vl !== 0 && (fv() && (t = vl), vl = 0);
    for (var e = He(), n = null, l = wo; l !== null; ) {
      var i = l.next, u = Lh(l, e);
      u === 0 ? (l.next = null, n === null ? wo = i : n.next = i, i === null && (nr = n)) : (n = l, (t !== 0 || u & 3) && (Ro = true)), l = i;
    }
    ri(t);
  }
  function Lh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - St(u), y = 1 << d, b = i[d];
      b === -1 ? (!(y & n) || y & l) && (i[d] = jn(y, e)) : b <= e && (t.expiredLanes |= y), u &= ~y;
    }
    if (e = ae, n = Ht, n = bn(t, t === e ? n : 0), l = t.callbackNode, n === 0 || t === e && le === 2 || t.cancelPendingCommit !== null) return l !== null && l !== null && Je(l), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Gn(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && Je(l), Xf(n)) {
        case 2:
        case 8:
          n = At;
          break;
        case 32:
          n = Mt;
          break;
        case 268435456:
          n = wt;
          break;
        default:
          n = Mt;
      }
      return l = $h.bind(null, t), n = Ue(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && Je(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function $h(t, e) {
    var n = t.callbackNode;
    if (er() && t.callbackNode !== n) return null;
    var l = Ht;
    return l = bn(t, t === ae ? l : 0), l === 0 ? null : (Rh(t, l, e), Lh(t, He()), t.callbackNode != null && t.callbackNode === n ? $h.bind(null, t) : null);
  }
  function qh(t, e) {
    if (er()) return null;
    Rh(t, e, true);
  }
  function av(t) {
    pv(function() {
      fe & 6 ? Ue(it, t) : t();
    });
  }
  function dc() {
    return vl === 0 && (vl = qf()), vl;
  }
  function Yh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $i("" + t);
  }
  function Gh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function lv(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var u = Yh((i[tn] || null).action), d = l.submitter;
      d && (e = (e = d[tn] || null) ? Yh(e.formAction) : d.getAttribute("formAction"), e !== null && (u = e, d = null));
      var y = new Vi("action", "action", null, l, i);
      t.push({ event: y, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (vl !== 0) {
            var b = d ? Gh(i, d) : new FormData(i);
            xu(n, { pending: true, data: b, method: i.method, action: u }, null, b);
          }
        } else typeof u == "function" && (y.preventDefault(), b = d ? Gh(i, d) : new FormData(i), xu(n, { pending: true, data: b, method: i.method, action: u }, u, b));
      }, currentTarget: i }] });
    }
  }
  for (var pc = 0; pc < Nd.length; pc++) {
    var hc = Nd[pc], rv = hc.toLowerCase(), iv = hc[0].toUpperCase() + hc.slice(1);
    Ln(rv, "on" + iv);
  }
  Ln(zd, "onAnimationEnd"), Ln(_d, "onAnimationIteration"), Ln(Dd, "onAnimationStart"), Ln("dblclick", "onDoubleClick"), Ln("focusin", "onFocus"), Ln("focusout", "onBlur"), Ln(Cy, "onTransitionRun"), Ln(Ey, "onTransitionStart"), Ln(Ay, "onTransitionCancel"), Ln(kd, "onTransitionEnd"), Ol("onMouseEnter", ["mouseout", "mouseover"]), Ol("onMouseLeave", ["mouseout", "mouseover"]), Ol("onPointerEnter", ["pointerout", "pointerover"]), Ol("onPointerLeave", ["pointerout", "pointerover"]), Ia("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ia("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ia("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ia("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ia("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ia("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ov = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));
  function Vh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e) for (var d = l.length - 1; 0 <= d; d--) {
          var y = l[d], b = y.instance, R = y.currentTarget;
          if (y = y.listener, b !== u && i.isPropagationStopped()) break t;
          u = y, i.currentTarget = R;
          try {
            u(i);
          } catch (V) {
            po(V);
          }
          i.currentTarget = null, u = b;
        }
        else for (d = 0; d < l.length; d++) {
          if (y = l[d], b = y.instance, R = y.currentTarget, y = y.listener, b !== u && i.isPropagationStopped()) break t;
          u = y, i.currentTarget = R;
          try {
            u(i);
          } catch (V) {
            po(V);
          }
          i.currentTarget = null, u = b;
        }
      }
    }
  }
  function Nt(t, e) {
    var n = e[zs];
    n === void 0 && (n = e[zs] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Xh(e, t, 2, false), n.add(l));
  }
  function mc(t, e, n) {
    var l = 0;
    e && (l |= 4), Xh(n, t, l, e);
  }
  var Mo = "_reactListening" + Math.random().toString(36).slice(2);
  function gc(t) {
    if (!t[Mo]) {
      t[Mo] = true, Kf.forEach(function(n) {
        n !== "selectionchange" && (ov.has(n) || mc(n, false, t), mc(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Mo] || (e[Mo] = true, mc("selectionchange", false, e));
    }
  }
  function Xh(t, e, n, l) {
    switch (hm(e)) {
      case 2:
        var i = kv;
        break;
      case 8:
        i = Bv;
        break;
      default:
        i = Oc;
    }
    n = i.bind(null, e, n, t), i = void 0, !js || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), l ? i !== void 0 ? t.addEventListener(e, n, { capture: true, passive: i }) : t.addEventListener(e, n, true) : i !== void 0 ? t.addEventListener(e, n, { passive: i }) : t.addEventListener(e, n, false);
  }
  function yc(t, e, n, l, i) {
    var u = l;
    if (!(e & 1) && !(e & 2) && l !== null) t: for (; ; ) {
      if (l === null) return;
      var d = l.tag;
      if (d === 3 || d === 4) {
        var y = l.stateNode.containerInfo;
        if (y === i || y.nodeType === 8 && y.parentNode === i) break;
        if (d === 4) for (d = l.return; d !== null; ) {
          var b = d.tag;
          if ((b === 3 || b === 4) && (b = d.stateNode.containerInfo, b === i || b.nodeType === 8 && b.parentNode === i)) return;
          d = d.return;
        }
        for (; y !== null; ) {
          if (d = Ja(y), d === null) return;
          if (b = d.tag, b === 5 || b === 6 || b === 26 || b === 27) {
            l = u = d;
            continue t;
          }
          y = y.parentNode;
        }
      }
      l = l.return;
    }
    id(function() {
      var R = u, V = Us(n), F = [];
      t: {
        var k = Bd.get(t);
        if (k !== void 0) {
          var Y = Vi, pt = t;
          switch (t) {
            case "keypress":
              if (Yi(n) === 0) break t;
            case "keydown":
            case "keyup":
              Y = ty;
              break;
            case "focusin":
              pt = "focus", Y = Ys;
              break;
            case "focusout":
              pt = "blur", Y = Ys;
              break;
            case "beforeblur":
            case "afterblur":
              Y = Ys;
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
              Y = ud;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Y0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = ay;
              break;
            case zd:
            case _d:
            case Dd:
              Y = X0;
              break;
            case kd:
              Y = ry;
              break;
            case "scroll":
            case "scrollend":
              Y = $0;
              break;
            case "wheel":
              Y = oy;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Z0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = fd;
              break;
            case "toggle":
            case "beforetoggle":
              Y = uy;
          }
          var Tt = (e & 4) !== 0, ge = !Tt && (t === "scroll" || t === "scrollend"), z = Tt ? k !== null ? k + "Capture" : null : k;
          Tt = [];
          for (var A = R, _; A !== null; ) {
            var X = A;
            if (_ = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || _ === null || z === null || (X = Ar(A, z), X != null && Tt.push(oi(A, X, _))), ge) break;
            A = A.return;
          }
          0 < Tt.length && (k = new Y(k, pt, null, n, V), F.push({ event: k, listeners: Tt }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (k = t === "mouseover" || t === "pointerover", Y = t === "mouseout" || t === "pointerout", k && n !== Ns && (pt = n.relatedTarget || n.fromElement) && (Ja(pt) || pt[wl])) break t;
          if ((Y || k) && (k = V.window === V ? V : (k = V.ownerDocument) ? k.defaultView || k.parentWindow : window, Y ? (pt = n.relatedTarget || n.toElement, Y = R, pt = pt ? Ja(pt) : null, pt !== null && (ge = J(pt), Tt = pt.tag, pt !== ge || Tt !== 5 && Tt !== 27 && Tt !== 6) && (pt = null)) : (Y = null, pt = R), Y !== pt)) {
            if (Tt = ud, X = "onMouseLeave", z = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (Tt = fd, X = "onPointerLeave", z = "onPointerEnter", A = "pointer"), ge = Y == null ? k : Er(Y), _ = pt == null ? k : Er(pt), k = new Tt(X, A + "leave", Y, n, V), k.target = ge, k.relatedTarget = _, X = null, Ja(V) === R && (Tt = new Tt(z, A + "enter", pt, n, V), Tt.target = _, Tt.relatedTarget = ge, X = Tt), ge = X, Y && pt) e: {
              for (Tt = Y, z = pt, A = 0, _ = Tt; _; _ = ar(_)) A++;
              for (_ = 0, X = z; X; X = ar(X)) _++;
              for (; 0 < A - _; ) Tt = ar(Tt), A--;
              for (; 0 < _ - A; ) z = ar(z), _--;
              for (; A--; ) {
                if (Tt === z || z !== null && Tt === z.alternate) break e;
                Tt = ar(Tt), z = ar(z);
              }
              Tt = null;
            }
            else Tt = null;
            Y !== null && Qh(F, k, Y, Tt, false), pt !== null && ge !== null && Qh(F, ge, pt, Tt, true);
          }
        }
        t: {
          if (k = R ? Er(R) : window, Y = k.nodeName && k.nodeName.toLowerCase(), Y === "select" || Y === "input" && k.type === "file") var ut = bd;
          else if (yd(k)) if (Sd) ut = by;
          else {
            ut = yy;
            var _t = gy;
          }
          else Y = k.nodeName, !Y || Y.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? R && Bs(R.elementType) && (ut = bd) : ut = vy;
          if (ut && (ut = ut(t, R))) {
            vd(F, ut, n, V);
            break t;
          }
          _t && _t(t, k, R), t === "focusout" && R && k.type === "number" && R.memoizedProps.value != null && ks(k, "number", k.value);
        }
        switch (_t = R ? Er(R) : window, t) {
          case "focusin":
            (yd(_t) || _t.contentEditable === "true") && (Nl = _t, Ks = R, kr = null);
            break;
          case "focusout":
            kr = Ks = Nl = null;
            break;
          case "mousedown":
            Ps = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ps = false, Md(F, n, V);
            break;
          case "selectionchange":
            if (Ty) break;
          case "keydown":
          case "keyup":
            Md(F, n, V);
        }
        var ht;
        if (Vs) t: {
          switch (t) {
            case "compositionstart":
              var yt = "onCompositionStart";
              break t;
            case "compositionend":
              yt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              yt = "onCompositionUpdate";
              break t;
          }
          yt = void 0;
        }
        else Bl ? md(t, n) && (yt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (yt = "onCompositionStart");
        yt && (dd && n.locale !== "ko" && (Bl || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && Bl && (ht = od()) : (wa = V, Ls = "value" in wa ? wa.value : wa.textContent, Bl = true)), _t = Oo(R, yt), 0 < _t.length && (yt = new cd(yt, t, null, n, V), F.push({ event: yt, listeners: _t }), ht ? yt.data = ht : (ht = gd(n), ht !== null && (yt.data = ht)))), (ht = fy ? dy(t, n) : py(t, n)) && (yt = Oo(R, "onBeforeInput"), 0 < yt.length && (_t = new cd("onBeforeInput", "beforeinput", null, n, V), F.push({ event: _t, listeners: yt }), _t.data = ht)), lv(F, t, R, n, V);
      }
      Vh(F, e);
    });
  }
  function oi(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Oo(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, u = i.stateNode;
      i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Ar(t, n), i != null && l.unshift(oi(t, i, u)), i = Ar(t, e), i != null && l.push(oi(t, i, u))), t = t.return;
    }
    return l;
  }
  function ar(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qh(t, e, n, l, i) {
    for (var u = e._reactName, d = []; n !== null && n !== l; ) {
      var y = n, b = y.alternate, R = y.stateNode;
      if (y = y.tag, b !== null && b === l) break;
      y !== 5 && y !== 26 && y !== 27 || R === null || (b = R, i ? (R = Ar(n, u), R != null && d.unshift(oi(n, R, b))) : i || (R = Ar(n, u), R != null && d.push(oi(n, R, b)))), n = n.return;
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var sv = /\r\n?/g, uv = /\u0000|\uFFFD/g;
  function Zh(t) {
    return (typeof t == "string" ? t : "" + t).replace(sv, `
`).replace(uv, "");
  }
  function Kh(t, e) {
    return e = Zh(e), Zh(t) === e;
  }
  function zo() {
  }
  function Ft(t, e, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || _l(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && _l(t, "" + l);
        break;
      case "className":
        Hi(t, "class", l);
        break;
      case "tabIndex":
        Hi(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hi(t, n, l);
        break;
      case "style":
        ld(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Hi(t, "data", l);
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
        l = $i("" + l), t.setAttribute(n, l);
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
        l = $i("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = zo);
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
        n = $i("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        Nt("beforetoggle", t), Nt("toggle", t), Ui(t, "popover", l);
        break;
      case "xlinkActuate":
        na(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        na(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        na(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        na(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        na(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        na(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        na(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        na(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        na(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ui(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = j0.get(n) || n, Ui(t, n, l));
    }
  }
  function vc(t, e, n, l, i, u) {
    switch (n) {
      case "style":
        ld(t, l, u);
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
        typeof l == "string" ? _l(t, l) : (typeof l == "number" || typeof l == "bigint") && _l(t, "" + l);
        break;
      case "onScroll":
        l != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Nt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = zo);
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
        if (!Pf.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), u = t[tn] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof l == "function")) {
            typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, i);
            break t;
          }
          n in t ? t[n] = l : l === true ? t.setAttribute(n, "") : Ui(t, n, l);
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
        var y = u = d = i = null, b = null, R = null;
        for (l in n) if (n.hasOwnProperty(l)) {
          var V = n[l];
          if (V != null) switch (l) {
            case "name":
              i = V;
              break;
            case "type":
              d = V;
              break;
            case "checked":
              b = V;
              break;
            case "defaultChecked":
              R = V;
              break;
            case "value":
              u = V;
              break;
            case "defaultValue":
              y = V;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (V != null) throw Error(s(137, e));
              break;
            default:
              Ft(t, e, l, V, n, null);
          }
        }
        td(t, u, y, b, R, d, i, false), ji(t);
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
        e = u, n = d, t.multiple = !!l, e != null ? zl(t, !!l, e, false) : n != null && zl(t, !!l, n, true);
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
        nd(t, l, i, u), ji(t);
        return;
      case "option":
        for (b in n) if (n.hasOwnProperty(b) && (l = n[b], l != null)) switch (b) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            Ft(t, e, b, l, n, null);
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
        for (l = 0; l < ii.length; l++) Nt(ii[l], t);
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
        for (R in n) if (n.hasOwnProperty(R) && (l = n[R], l != null)) switch (R) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, e));
          default:
            Ft(t, e, R, l, n, null);
        }
        return;
      default:
        if (Bs(e)) {
          for (V in n) n.hasOwnProperty(V) && (l = n[V], l !== void 0 && vc(t, e, V, l, n, void 0));
          return;
        }
    }
    for (y in n) n.hasOwnProperty(y) && (l = n[y], l != null && Ft(t, e, y, l, n, null));
  }
  function cv(t, e, n, l) {
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
        var i = null, u = null, d = null, y = null, b = null, R = null, V = null;
        for (Y in n) {
          var F = n[Y];
          if (n.hasOwnProperty(Y) && F != null) switch (Y) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              b = F;
            default:
              l.hasOwnProperty(Y) || Ft(t, e, Y, null, l, F);
          }
        }
        for (var k in l) {
          var Y = l[k];
          if (F = n[k], l.hasOwnProperty(k) && (Y != null || F != null)) switch (k) {
            case "type":
              u = Y;
              break;
            case "name":
              i = Y;
              break;
            case "checked":
              R = Y;
              break;
            case "defaultChecked":
              V = Y;
              break;
            case "value":
              d = Y;
              break;
            case "defaultValue":
              y = Y;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Y != null) throw Error(s(137, e));
              break;
            default:
              Y !== F && Ft(t, e, k, Y, l, F);
          }
        }
        Ds(t, d, y, b, R, V, u, i);
        return;
      case "select":
        Y = d = y = k = null;
        for (u in n) if (b = n[u], n.hasOwnProperty(u) && b != null) switch (u) {
          case "value":
            break;
          case "multiple":
            Y = b;
          default:
            l.hasOwnProperty(u) || Ft(t, e, u, null, l, b);
        }
        for (i in l) if (u = l[i], b = n[i], l.hasOwnProperty(i) && (u != null || b != null)) switch (i) {
          case "value":
            k = u;
            break;
          case "defaultValue":
            y = u;
            break;
          case "multiple":
            d = u;
          default:
            u !== b && Ft(t, e, i, u, l, b);
        }
        e = y, n = d, l = Y, k != null ? zl(t, !!n, k, false) : !!l != !!n && (e != null ? zl(t, !!n, e, true) : zl(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        Y = k = null;
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
            k = i;
            break;
          case "defaultValue":
            Y = i;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(s(91));
            break;
          default:
            i !== u && Ft(t, e, d, i, l, u);
        }
        ed(t, k, Y);
        return;
      case "option":
        for (var pt in n) if (k = n[pt], n.hasOwnProperty(pt) && k != null && !l.hasOwnProperty(pt)) switch (pt) {
          case "selected":
            t.selected = false;
            break;
          default:
            Ft(t, e, pt, null, l, k);
        }
        for (b in l) if (k = l[b], Y = n[b], l.hasOwnProperty(b) && k !== Y && (k != null || Y != null)) switch (b) {
          case "selected":
            t.selected = k && typeof k != "function" && typeof k != "symbol";
            break;
          default:
            Ft(t, e, b, k, l, Y);
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
        for (var Tt in n) k = n[Tt], n.hasOwnProperty(Tt) && k != null && !l.hasOwnProperty(Tt) && Ft(t, e, Tt, null, l, k);
        for (R in l) if (k = l[R], Y = n[R], l.hasOwnProperty(R) && k !== Y && (k != null || Y != null)) switch (R) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (k != null) throw Error(s(137, e));
            break;
          default:
            Ft(t, e, R, k, l, Y);
        }
        return;
      default:
        if (Bs(e)) {
          for (var ge in n) k = n[ge], n.hasOwnProperty(ge) && k !== void 0 && !l.hasOwnProperty(ge) && vc(t, e, ge, void 0, l, k);
          for (V in l) k = l[V], Y = n[V], !l.hasOwnProperty(V) || k === Y || k === void 0 && Y === void 0 || vc(t, e, V, k, l, Y);
          return;
        }
    }
    for (var z in n) k = n[z], n.hasOwnProperty(z) && k != null && !l.hasOwnProperty(z) && Ft(t, e, z, null, l, k);
    for (F in l) k = l[F], Y = n[F], !l.hasOwnProperty(F) || k === Y || k == null && Y == null || Ft(t, e, F, k, l, Y);
  }
  var bc = null, Sc = null;
  function _o(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ph(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Fh(t, e) {
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
  function xc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = null;
  function fv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Tc ? false : (Tc = t, true) : (Tc = null, false);
  }
  var Wh = typeof setTimeout == "function" ? setTimeout : void 0, dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Jh = typeof Promise == "function" ? Promise : void 0, pv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jh < "u" ? function(t) {
    return Jh.resolve(null).then(t).catch(hv);
  } : Wh;
  function hv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cc(t, e) {
    var n = e, l = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (l === 0) {
          t.removeChild(i), mi(e);
          return;
        }
        l--;
      } else n !== "$" && n !== "$?" && n !== "$!" || l++;
      n = i;
    } while (n);
    mi(e);
  }
  function Ec(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ec(n), _s(n);
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
  function mv(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Cr]) switch (e) {
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
      if (t = Yn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function gv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Yn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Yn(t) {
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
  function Ih(t) {
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
  function tm(t, e, n) {
    switch (e = _o(n), t) {
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
  var _n = /* @__PURE__ */ new Map(), em = /* @__PURE__ */ new Set();
  function Do(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var ya = lt.d;
  lt.d = { f: yv, r: vv, D: bv, C: Sv, L: xv, m: Tv, X: Ev, S: Cv, M: Av };
  function yv() {
    var t = ya.f(), e = Eo();
    return t || e;
  }
  function vv(t) {
    var e = Rl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mp(e) : ya.r(t);
  }
  var lr = typeof document > "u" ? null : document;
  function nm(t, e, n) {
    var l = lr;
    if (l && typeof e == "string" && e) {
      var i = xn(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), em.has(i) || (em.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), $e(e, "link", t), De(e), l.head.appendChild(e)));
    }
  }
  function bv(t) {
    ya.D(t), nm("dns-prefetch", t, null);
  }
  function Sv(t, e) {
    ya.C(t, e), nm("preconnect", t, e);
  }
  function xv(t, e, n) {
    ya.L(t, e, n);
    var l = lr;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + xn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + xn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + xn(n.imageSizes) + '"]')) : i += '[href="' + xn(t) + '"]';
      var u = i;
      switch (e) {
        case "style":
          u = rr(t);
          break;
        case "script":
          u = ir(t);
      }
      _n.has(u) || (t = v({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), _n.set(u, t), l.querySelector(i) !== null || e === "style" && l.querySelector(si(u)) || e === "script" && l.querySelector(ui(u)) || (e = l.createElement("link"), $e(e, "link", t), De(e), l.head.appendChild(e)));
    }
  }
  function Tv(t, e) {
    ya.m(t, e);
    var n = lr;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + xn(l) + '"][href="' + xn(t) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ir(t);
      }
      if (!_n.has(u) && (t = v({ rel: "modulepreload", href: t }, e), _n.set(u, t), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ui(u))) return;
        }
        l = n.createElement("link"), $e(l, "link", t), De(l), n.head.appendChild(l);
      }
    }
  }
  function Cv(t, e, n) {
    ya.S(t, e, n);
    var l = lr;
    if (l && t) {
      var i = Ml(l).hoistableStyles, u = rr(t);
      e = e || "default";
      var d = i.get(u);
      if (!d) {
        var y = { loading: 0, preload: null };
        if (d = l.querySelector(si(u))) y.loading = 5;
        else {
          t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = _n.get(u)) && Ac(t, n);
          var b = d = l.createElement("link");
          De(b), $e(b, "link", t), b._p = new Promise(function(R, V) {
            b.onload = R, b.onerror = V;
          }), b.addEventListener("load", function() {
            y.loading |= 1;
          }), b.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, ko(d, e, l);
        }
        d = { type: "stylesheet", instance: d, count: 1, state: y }, i.set(u, d);
      }
    }
  }
  function Ev(t, e) {
    ya.X(t, e);
    var n = lr;
    if (n && t) {
      var l = Ml(n).hoistableScripts, i = ir(t), u = l.get(i);
      u || (u = n.querySelector(ui(i)), u || (t = v({ src: t, async: true }, e), (e = _n.get(i)) && wc(t, e), u = n.createElement("script"), De(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function Av(t, e) {
    ya.M(t, e);
    var n = lr;
    if (n && t) {
      var l = Ml(n).hoistableScripts, i = ir(t), u = l.get(i);
      u || (u = n.querySelector(ui(i)), u || (t = v({ src: t, async: true, type: "module" }, e), (e = _n.get(i)) && wc(t, e), u = n.createElement("script"), De(u), $e(u, "link", t), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, l.set(i, u));
    }
  }
  function am(t, e, n, l) {
    var i = (i = Qt.current) ? Do(i) : null;
    if (!i) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = rr(n.href), n = Ml(i).hoistableStyles, l = n.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = rr(n.href);
          var u = Ml(i).hoistableStyles, d = u.get(t);
          if (d || (i = i.ownerDocument || i, d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(t, d), (u = i.querySelector(si(t))) && !u._p && (d.instance = u, d.state.loading = 5), _n.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, _n.set(t, n), u || wv(i, t, n, d.state))), e && l === null) throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ir(n), n = Ml(i).hoistableScripts, l = n.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function rr(t) {
    return 'href="' + xn(t) + '"';
  }
  function si(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function lm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function wv(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), $e(e, "link", n), De(e), t.head.appendChild(e));
  }
  function ir(t) {
    return '[src="' + xn(t) + '"]';
  }
  function ui(t) {
    return "script[async]" + t;
  }
  function rm(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + xn(n.href) + '"]');
        if (l) return e.instance = l, De(l), l;
        var i = v({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return l = (t.ownerDocument || t).createElement("style"), De(l), $e(l, "style", i), ko(l, n.precedence, t), e.instance = l;
      case "stylesheet":
        i = rr(n.href);
        var u = t.querySelector(si(i));
        if (u) return e.state.loading |= 4, e.instance = u, De(u), u;
        l = lm(n), (i = _n.get(i)) && Ac(l, i), u = (t.ownerDocument || t).createElement("link"), De(u);
        var d = u;
        return d._p = new Promise(function(y, b) {
          d.onload = y, d.onerror = b;
        }), $e(u, "link", l), e.state.loading |= 4, ko(u, n.precedence, t), e.instance = u;
      case "script":
        return u = ir(n.src), (i = t.querySelector(ui(u))) ? (e.instance = i, De(i), i) : (l = n, (i = _n.get(u)) && (l = v({}, n), wc(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), De(i), $e(i, "link", l), t.head.appendChild(i), e.instance = i);
      case "void":
        return null;
      default:
        throw Error(s(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (l = e.instance, e.state.loading |= 4, ko(l, n.precedence, t));
    return e.instance;
  }
  function ko(t, e, n) {
    for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = l.length ? l[l.length - 1] : null, u = i, d = 0; d < l.length; d++) {
      var y = l[d];
      if (y.dataset.precedence === e) u = y;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Ac(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function wc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Bo = null;
  function im(t, e, n) {
    if (Bo === null) {
      var l = /* @__PURE__ */ new Map(), i = Bo = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else i = Bo, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Cr] || u[Xe] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(e) || "";
        d = t + d;
        var y = l.get(d);
        y ? y.push(u) : l.set(d, [u]);
      }
    }
    return l;
  }
  function om(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function Rv(t, e, n) {
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
  function sm(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var ci = null;
  function Mv() {
  }
  function Ov(t, e, n) {
    if (ci === null) throw Error(s(475));
    var l = ci;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && !(e.state.loading & 4)) {
      if (e.instance === null) {
        var i = rr(n.href), u = t.querySelector(si(i));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = No.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, De(u);
          return;
        }
        u = t.ownerDocument || t, n = lm(n), (i = _n.get(i)) && Ac(n, i), u = u.createElement("link"), De(u);
        var d = u;
        d._p = new Promise(function(y, b) {
          d.onload = y, d.onerror = b;
        }), $e(u, "link", n), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (l.count++, e = No.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function zv() {
    if (ci === null) throw Error(s(475));
    var t = ci;
    return t.stylesheets && t.count === 0 && Rc(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Rc(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function No() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Rc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Uo = null;
  function Rc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Uo = /* @__PURE__ */ new Map(), e.forEach(_v, t), Uo = null, No.call(t));
  }
  function _v(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Uo.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Uo.set(t, n);
        for (var i = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < i.length; u++) {
          var d = i[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), l = d);
        }
        l && n.set(null, l);
      }
      i = e.instance, d = i.getAttribute("data-precedence"), u = n.get(d) || l, u === l && n.set(null, i), n.set(d, i), this.count++, l = No.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var fi = { $$typeof: D, Provider: null, Consumer: null, _currentValue: Ct, _currentValue2: Ct, _threadCount: 0 };
  function Dv(t, e, n, l, i, u, d, y) {
    this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Os(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Os(0), this.hiddenUpdates = Os(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function um(t, e, n, l, i, u, d, y, b, R, V, F) {
    return t = new Dv(t, e, n, d, y, b, R, F), e = 1, u === true && (e |= 24), u = On(3, null, null, e), t.current = u, u.stateNode = t, e = ru(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = { element: l, isDehydrated: n, cache: e }, Lu(u), t;
  }
  function cm(t) {
    return t ? (t = jl, t) : jl;
  }
  function fm(t, e, n, l, i, u) {
    i = cm(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ba(e), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = Na(t, l, e), n !== null && (Fe(n, t, e), Kr(n, t, e));
  }
  function dm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Mc(t, e) {
    dm(t, e), (t = t.alternate) && dm(t, e);
  }
  function pm(t) {
    if (t.tag === 13) {
      var e = Ra(t, 67108864);
      e !== null && Fe(e, t, 67108864), Mc(t, 67108864);
    }
  }
  var Ho = true;
  function kv(t, e, n, l) {
    var i = Q.T;
    Q.T = null;
    var u = lt.p;
    try {
      lt.p = 2, Oc(t, e, n, l);
    } finally {
      lt.p = u, Q.T = i;
    }
  }
  function Bv(t, e, n, l) {
    var i = Q.T;
    Q.T = null;
    var u = lt.p;
    try {
      lt.p = 8, Oc(t, e, n, l);
    } finally {
      lt.p = u, Q.T = i;
    }
  }
  function Oc(t, e, n, l) {
    if (Ho) {
      var i = zc(l);
      if (i === null) yc(t, e, l, jo, n), mm(t, l);
      else if (Uv(i, t, e, n, l)) l.stopPropagation();
      else if (mm(t, l), e & 4 && -1 < Nv.indexOf(t)) {
        for (; i !== null; ) {
          var u = Rl(i);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var d = Kt(u.pendingLanes);
                if (d !== 0) {
                  var y = u;
                  for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
                    var b = 1 << 31 - St(d);
                    y.entanglements[1] |= b, d &= ~b;
                  }
                  Kn(u), !(fe & 6) && (xo = He() + 500, ri(0));
                }
              }
              break;
            case 13:
              y = Ra(u, 2), y !== null && Fe(y, u, 2), Eo(), Mc(u, 2);
          }
          if (u = zc(l), u === null && yc(t, e, l, jo, n), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else yc(t, e, l, null, n);
    }
  }
  function zc(t) {
    return t = Us(t), _c(t);
  }
  var jo = null;
  function _c(t) {
    if (jo = null, t = Ja(t), t !== null) {
      var e = J(t);
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
    return jo = t, null;
  }
  function hm(t) {
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
        switch (ot()) {
          case it:
            return 2;
          case At:
            return 8;
          case Mt:
          case Ot:
            return 32;
          case wt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Dc = false, Ya = null, Ga = null, Va = null, di = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), Xa = [], Nv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function mm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ya = null;
        break;
      case "dragenter":
      case "dragleave":
        Ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Va = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(e.pointerId);
    }
  }
  function hi(t, e, n, l, i, u) {
    return t === null || t.nativeEvent !== u ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: u, targetContainers: [i] }, e !== null && (e = Rl(e), e !== null && pm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Uv(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return Ya = hi(Ya, t, e, n, l, i), true;
      case "dragenter":
        return Ga = hi(Ga, t, e, n, l, i), true;
      case "mouseover":
        return Va = hi(Va, t, e, n, l, i), true;
      case "pointerover":
        var u = i.pointerId;
        return di.set(u, hi(di.get(u) || null, t, e, n, l, i)), true;
      case "gotpointercapture":
        return u = i.pointerId, pi.set(u, hi(pi.get(u) || null, t, e, n, l, i)), true;
    }
    return false;
  }
  function gm(t) {
    var e = Ja(t.target);
    if (e !== null) {
      var n = J(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = et(n), e !== null) {
            t.blockedOn = e, z0(t.priority, function() {
              if (n.tag === 13) {
                var l = fn(), i = Ra(n, l);
                i !== null && Fe(i, n, l), Mc(n, l);
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
  function Lo(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = zc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        Ns = l, n.target.dispatchEvent(l), Ns = null;
      } else return e = Rl(n), e !== null && pm(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function ym(t, e, n) {
    Lo(t) && n.delete(e);
  }
  function Hv() {
    Dc = false, Ya !== null && Lo(Ya) && (Ya = null), Ga !== null && Lo(Ga) && (Ga = null), Va !== null && Lo(Va) && (Va = null), di.forEach(ym), pi.forEach(ym);
  }
  function $o(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Dc || (Dc = true, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, Hv)));
  }
  var qo = null;
  function vm(t) {
    qo !== t && (qo = t, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, function() {
      qo === t && (qo = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], l = t[e + 1], i = t[e + 2];
        if (typeof l != "function") {
          if (_c(l || n) === null) continue;
          break;
        }
        var u = Rl(n);
        u !== null && (t.splice(e, 3), e -= 3, xu(u, { pending: true, data: i, method: n.method, action: l }, l, i));
      }
    }));
  }
  function mi(t) {
    function e(b) {
      return $o(b, t);
    }
    Ya !== null && $o(Ya, t), Ga !== null && $o(Ga, t), Va !== null && $o(Va, t), di.forEach(e), pi.forEach(e);
    for (var n = 0; n < Xa.length; n++) {
      var l = Xa[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Xa.length && (n = Xa[0], n.blockedOn === null); ) gm(n), n.blockedOn === null && Xa.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (l = 0; l < n.length; l += 3) {
      var i = n[l], u = n[l + 1], d = i[tn] || null;
      if (typeof u == "function") d || vm(n);
      else if (d) {
        var y = null;
        if (u && u.hasAttribute("formAction")) {
          if (i = u, d = u[tn] || null) y = d.formAction;
          else if (_c(i) !== null) continue;
        } else y = d.action;
        typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3), l -= 3), vm(n);
      }
    }
  }
  function kc(t) {
    this._internalRoot = t;
  }
  Yo.prototype.render = kc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var n = e.current, l = fn();
    fm(n, l, t, e, null, null);
  }, Yo.prototype.unmount = kc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t.tag === 0 && er(), fm(t.current, 2, null, t, null, null), Eo(), e[wl] = null;
    }
  };
  function Yo(t) {
    this._internalRoot = t;
  }
  Yo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Qf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Xa.length && e !== 0 && e < Xa[n].priority; n++) ;
      Xa.splice(n, 0, t), n === 0 && gm(t);
    }
  };
  var bm = r.version;
  if (bm !== "19.0.0") throw Error(s(527, bm, "19.0.0"));
  lt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = j(e), t = t !== null ? st(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var jv = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: Q, findFiberByHostInstance: Ja, reconcilerVersion: "19.0.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      Jt = Go.inject(jv), Zt = Go;
    } catch {
    }
  }
  return yi.createRoot = function(t, e) {
    if (!c(t)) throw Error(s(299));
    var n = false, l = "", i = Up, u = Hp, d = jp, y = null;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (y = e.unstable_transitionCallbacks)), e = um(t, 1, false, null, null, n, l, i, u, d, y, null), t[wl] = e.current, gc(t.nodeType === 8 ? t.parentNode : t), new kc(e);
  }, yi.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(s(299));
    var l = false, i = "", u = Up, d = Hp, y = jp, b = null, R = null;
    return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (b = n.unstable_transitionCallbacks), n.formState !== void 0 && (R = n.formState)), e = um(t, 1, true, e, n ?? null, l, i, u, d, y, b, R), e.context = cm(null), n = e.current, l = fn(), i = Ba(l), i.callback = null, Na(n, i, l), e.current.lanes = l, Tr(e, l), Kn(e), t[wl] = e.current, gc(t), new Yo(e);
  }, yi.version = "19.0.0", yi;
}
var Om;
function Kv() {
  if (Om) return Uc.exports;
  Om = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (r) {
      console.error(r);
    }
  }
  return a3(), Uc.exports = Zv(), Uc.exports;
}
var Pv = Kv();
const wi = { black: "#000", white: "#fff" }, or = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, sr = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, ur = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, cr = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, fr = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, vi = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Fv = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Cl(a3, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${a3}`);
  return r.forEach((s) => o.searchParams.append("args[]", s)), `Minified MUI error #${a3}; visit ${o} for the full message.`;
}
const hs = "$$material";
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(a3) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var s in o) ({}).hasOwnProperty.call(o, s) && (a3[s] = o[s]);
    }
    return a3;
  }, ls.apply(null, arguments);
}
function Wv(a3) {
  if (a3.sheet) return a3.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === a3) return document.styleSheets[r];
}
function Jv(a3) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a3.key), a3.nonce !== void 0 && r.setAttribute("nonce", a3.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Iv = function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jv(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = Wv(c);
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
}(), Ke = "-ms-", rs = "-moz-", Yt = "-webkit-", _g = "comm", mf = "rule", gf = "decl", tb = "@import", Dg = "@keyframes", eb = "@layer", nb = Math.abs, ms = String.fromCharCode, ab = Object.assign;
function lb(a3, r) {
  return qe(a3, 0) ^ 45 ? (((r << 2 ^ qe(a3, 0)) << 2 ^ qe(a3, 1)) << 2 ^ qe(a3, 2)) << 2 ^ qe(a3, 3) : 0;
}
function kg(a3) {
  return a3.trim();
}
function rb(a3, r) {
  return (a3 = r.exec(a3)) ? a3[0] : a3;
}
function Gt(a3, r, o) {
  return a3.replace(r, o);
}
function Jc(a3, r) {
  return a3.indexOf(r);
}
function qe(a3, r) {
  return a3.charCodeAt(r) | 0;
}
function Ri(a3, r, o) {
  return a3.slice(r, o);
}
function Fn(a3) {
  return a3.length;
}
function yf(a3) {
  return a3.length;
}
function Vo(a3, r) {
  return r.push(a3), a3;
}
function ib(a3, r) {
  return a3.map(r).join("");
}
var gs = 1, Sr = 1, Bg = 0, ln = 0, Me = 0, xr = "";
function ys(a3, r, o, s, c, f, p) {
  return { value: a3, root: r, parent: o, type: s, props: c, children: f, line: gs, column: Sr, length: p, return: "" };
}
function bi(a3, r) {
  return ab(ys("", null, null, "", null, null, 0), a3, { length: -a3.length }, r);
}
function ob() {
  return Me;
}
function sb() {
  return Me = ln > 0 ? qe(xr, --ln) : 0, Sr--, Me === 10 && (Sr = 1, gs--), Me;
}
function hn() {
  return Me = ln < Bg ? qe(xr, ln++) : 0, Sr++, Me === 10 && (Sr = 1, gs++), Me;
}
function ta() {
  return qe(xr, ln);
}
function Io() {
  return ln;
}
function zi(a3, r) {
  return Ri(xr, a3, r);
}
function Mi(a3) {
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
function Ng(a3) {
  return gs = Sr = 1, Bg = Fn(xr = a3), ln = 0, [];
}
function Ug(a3) {
  return xr = "", a3;
}
function ts(a3) {
  return kg(zi(ln - 1, Ic(a3 === 91 ? a3 + 2 : a3 === 40 ? a3 + 1 : a3)));
}
function ub(a3) {
  for (; (Me = ta()) && Me < 33; ) hn();
  return Mi(a3) > 2 || Mi(Me) > 3 ? "" : " ";
}
function cb(a3, r) {
  for (; --r && hn() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); ) ;
  return zi(a3, Io() + (r < 6 && ta() == 32 && hn() == 32));
}
function Ic(a3) {
  for (; hn(); ) switch (Me) {
    case a3:
      return ln;
    case 34:
    case 39:
      a3 !== 34 && a3 !== 39 && Ic(Me);
      break;
    case 40:
      a3 === 41 && Ic(a3);
      break;
    case 92:
      hn();
      break;
  }
  return ln;
}
function fb(a3, r) {
  for (; hn() && a3 + Me !== 57; ) if (a3 + Me === 84 && ta() === 47) break;
  return "/*" + zi(r, ln - 1) + "*" + ms(a3 === 47 ? a3 : hn());
}
function db(a3) {
  for (; !Mi(ta()); ) hn();
  return zi(a3, ln);
}
function pb(a3) {
  return Ug(es("", null, null, null, [""], a3 = Ng(a3), 0, [0], a3));
}
function es(a3, r, o, s, c, f, p, h, g) {
  for (var m = 0, x = 0, T = p, E = 0, D = 0, M = 0, S = 1, N = 1, B = 1, G = 0, $ = "", H = c, w = f, Z = s, K = $; N; ) switch (M = G, G = hn()) {
    case 40:
      if (M != 108 && qe(K, T - 1) == 58) {
        Jc(K += Gt(ts(G), "&", "&\f"), "&\f") != -1 && (B = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      K += ts(G);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      K += ub(M);
      break;
    case 92:
      K += cb(Io() - 1, 7);
      continue;
    case 47:
      switch (ta()) {
        case 42:
        case 47:
          Vo(hb(fb(hn(), Io()), r, o), g);
          break;
        default:
          K += "/";
      }
      break;
    case 123 * S:
      h[m++] = Fn(K) * B;
    case 125 * S:
    case 59:
    case 0:
      switch (G) {
        case 0:
        case 125:
          N = 0;
        case 59 + x:
          B == -1 && (K = Gt(K, /\f/g, "")), D > 0 && Fn(K) - T && Vo(D > 32 ? _m(K + ";", s, o, T - 1) : _m(Gt(K, " ", "") + ";", s, o, T - 2), g);
          break;
        case 59:
          K += ";";
        default:
          if (Vo(Z = zm(K, r, o, m, x, c, h, $, H = [], w = [], T), f), G === 123) if (x === 0) es(K, r, Z, Z, H, f, T, h, w);
          else switch (E === 99 && qe(K, 3) === 110 ? 100 : E) {
            case 100:
            case 108:
            case 109:
            case 115:
              es(a3, Z, Z, s && Vo(zm(a3, Z, Z, 0, 0, c, h, $, c, H = [], T), w), c, w, T, h, s ? H : w);
              break;
            default:
              es(K, Z, Z, Z, [""], w, 0, h, w);
          }
      }
      m = x = D = 0, S = B = 1, $ = K = "", T = p;
      break;
    case 58:
      T = 1 + Fn(K), D = M;
    default:
      if (S < 1) {
        if (G == 123) --S;
        else if (G == 125 && S++ == 0 && sb() == 125) continue;
      }
      switch (K += ms(G), G * S) {
        case 38:
          B = x > 0 ? 1 : (K += "\f", -1);
          break;
        case 44:
          h[m++] = (Fn(K) - 1) * B, B = 1;
          break;
        case 64:
          ta() === 45 && (K += ts(hn())), E = ta(), x = T = Fn($ = K += db(Io())), G++;
          break;
        case 45:
          M === 45 && Fn(K) == 2 && (S = 0);
      }
  }
  return f;
}
function zm(a3, r, o, s, c, f, p, h, g, m, x) {
  for (var T = c - 1, E = c === 0 ? f : [""], D = yf(E), M = 0, S = 0, N = 0; M < s; ++M) for (var B = 0, G = Ri(a3, T + 1, T = nb(S = p[M])), $ = a3; B < D; ++B) ($ = kg(S > 0 ? E[B] + " " + G : Gt(G, /&\f/g, E[B]))) && (g[N++] = $);
  return ys(a3, r, o, c === 0 ? mf : h, g, m, x);
}
function hb(a3, r, o) {
  return ys(a3, r, o, _g, ms(ob()), Ri(a3, 2, -2), 0);
}
function _m(a3, r, o, s) {
  return ys(a3, r, o, gf, Ri(a3, 0, s), Ri(a3, s + 1, -1), s);
}
function gr(a3, r) {
  for (var o = "", s = yf(a3), c = 0; c < s; c++) o += r(a3[c], c, a3, r) || "";
  return o;
}
function mb(a3, r, o, s) {
  switch (a3.type) {
    case eb:
      if (a3.children.length) break;
    case tb:
    case gf:
      return a3.return = a3.return || a3.value;
    case _g:
      return "";
    case Dg:
      return a3.return = a3.value + "{" + gr(a3.children, s) + "}";
    case mf:
      a3.value = a3.props.join(",");
  }
  return Fn(o = gr(a3.children, s)) ? a3.return = a3.value + "{" + o + "}" : "";
}
function gb(a3) {
  var r = yf(a3);
  return function(o, s, c, f) {
    for (var p = "", h = 0; h < r; h++) p += a3[h](o, s, c, f) || "";
    return p;
  };
}
function yb(a3) {
  return function(r) {
    r.root || (r = r.return) && a3(r);
  };
}
function Hg(a3) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = a3(o)), r[o];
  };
}
var vb = function(r, o, s) {
  for (var c = 0, f = 0; c = f, f = ta(), c === 38 && f === 12 && (o[s] = 1), !Mi(f); ) hn();
  return zi(r, ln);
}, bb = function(r, o) {
  var s = -1, c = 44;
  do
    switch (Mi(c)) {
      case 0:
        c === 38 && ta() === 12 && (o[s] = 1), r[s] += vb(ln - 1, o, s);
        break;
      case 2:
        r[s] += ts(c);
        break;
      case 4:
        if (c === 44) {
          r[++s] = ta() === 58 ? "&\f" : "", o[s] = r[s].length;
          break;
        }
      default:
        r[s] += ms(c);
    }
  while (c = hn());
  return r;
}, Sb = function(r, o) {
  return Ug(bb(Ng(r), o));
}, Dm = /* @__PURE__ */ new WeakMap(), xb = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var o = r.value, s = r.parent, c = r.column === s.column && r.line === s.line; s.type !== "rule"; ) if (s = s.parent, !s) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Dm.get(s)) && !c) {
      Dm.set(r, true);
      for (var f = [], p = Sb(o, f), h = s.props, g = 0, m = 0; g < p.length; g++) for (var x = 0; x < h.length; x++, m++) r.props[m] = f[g] ? p[g].replace(/&\f/g, h[x]) : h[x] + " " + p[g];
    }
  }
}, Tb = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function jg(a3, r) {
  switch (lb(a3, r)) {
    case 5103:
      return Yt + "print-" + a3 + a3;
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
      return Yt + a3 + a3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Yt + a3 + rs + a3 + Ke + a3 + a3;
    case 6828:
    case 4268:
      return Yt + a3 + Ke + a3 + a3;
    case 6165:
      return Yt + a3 + Ke + "flex-" + a3 + a3;
    case 5187:
      return Yt + a3 + Gt(a3, /(\w+).+(:[^]+)/, Yt + "box-$1$2" + Ke + "flex-$1$2") + a3;
    case 5443:
      return Yt + a3 + Ke + "flex-item-" + Gt(a3, /flex-|-self/, "") + a3;
    case 4675:
      return Yt + a3 + Ke + "flex-line-pack" + Gt(a3, /align-content|flex-|-self/, "") + a3;
    case 5548:
      return Yt + a3 + Ke + Gt(a3, "shrink", "negative") + a3;
    case 5292:
      return Yt + a3 + Ke + Gt(a3, "basis", "preferred-size") + a3;
    case 6060:
      return Yt + "box-" + Gt(a3, "-grow", "") + Yt + a3 + Ke + Gt(a3, "grow", "positive") + a3;
    case 4554:
      return Yt + Gt(a3, /([^-])(transform)/g, "$1" + Yt + "$2") + a3;
    case 6187:
      return Gt(Gt(Gt(a3, /(zoom-|grab)/, Yt + "$1"), /(image-set)/, Yt + "$1"), a3, "") + a3;
    case 5495:
    case 3959:
      return Gt(a3, /(image-set\([^]*)/, Yt + "$1$`$1");
    case 4968:
      return Gt(Gt(a3, /(.+:)(flex-)?(.*)/, Yt + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Yt + a3 + a3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Gt(a3, /(.+)-inline(.+)/, Yt + "$1$2") + a3;
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
      if (Fn(a3) - 1 - r > 6) switch (qe(a3, r + 1)) {
        case 109:
          if (qe(a3, r + 4) !== 45) break;
        case 102:
          return Gt(a3, /(.+:)(.+)-([^]+)/, "$1" + Yt + "$2-$3$1" + rs + (qe(a3, r + 3) == 108 ? "$3" : "$2-$3")) + a3;
        case 115:
          return ~Jc(a3, "stretch") ? jg(Gt(a3, "stretch", "fill-available"), r) + a3 : a3;
      }
      break;
    case 4949:
      if (qe(a3, r + 1) !== 115) break;
    case 6444:
      switch (qe(a3, Fn(a3) - 3 - (~Jc(a3, "!important") && 10))) {
        case 107:
          return Gt(a3, ":", ":" + Yt) + a3;
        case 101:
          return Gt(a3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Yt + (qe(a3, 14) === 45 ? "inline-" : "") + "box$3$1" + Yt + "$2$3$1" + Ke + "$2box$3") + a3;
      }
      break;
    case 5936:
      switch (qe(a3, r + 11)) {
        case 114:
          return Yt + a3 + Ke + Gt(a3, /[svh]\w+-[tblr]{2}/, "tb") + a3;
        case 108:
          return Yt + a3 + Ke + Gt(a3, /[svh]\w+-[tblr]{2}/, "tb-rl") + a3;
        case 45:
          return Yt + a3 + Ke + Gt(a3, /[svh]\w+-[tblr]{2}/, "lr") + a3;
      }
      return Yt + a3 + Ke + a3 + a3;
  }
  return a3;
}
var Cb = function(r, o, s, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case gf:
      r.return = jg(r.value, r.length);
      break;
    case Dg:
      return gr([bi(r, { value: Gt(r.value, "@", "@" + Yt) })], c);
    case mf:
      if (r.length) return ib(r.props, function(f) {
        switch (rb(f, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return gr([bi(r, { props: [Gt(f, /:(read-\w+)/, ":" + rs + "$1")] })], c);
          case "::placeholder":
            return gr([bi(r, { props: [Gt(f, /:(plac\w+)/, ":" + Yt + "input-$1")] }), bi(r, { props: [Gt(f, /:(plac\w+)/, ":" + rs + "$1")] }), bi(r, { props: [Gt(f, /:(plac\w+)/, Ke + "input-$1")] })], c);
        }
        return "";
      });
  }
}, Eb = [Cb], Ab = function(r) {
  var o = r.key;
  if (o === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(S) {
      var N = S.getAttribute("data-emotion");
      N.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || Eb, f = {}, p, h = [];
  p = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function(S) {
    for (var N = S.getAttribute("data-emotion").split(" "), B = 1; B < N.length; B++) f[N[B]] = true;
    h.push(S);
  });
  var g, m = [xb, Tb];
  {
    var x, T = [mb, yb(function(S) {
      x.insert(S);
    })], E = gb(m.concat(c, T)), D = function(N) {
      return gr(pb(N), E);
    };
    g = function(N, B, G, $) {
      x = G, D(N ? N + "{" + B.styles + "}" : B.styles), $ && (M.inserted[B.name] = true);
    };
  }
  var M = { key: o, sheet: new Iv({ key: o, container: p, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: f, registered: {}, insert: g };
  return M.sheet.hydrate(h), M;
}, $c = { exports: {} }, Xt = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var km;
function wb() {
  if (km) return Xt;
  km = 1;
  var a3 = typeof Symbol == "function" && Symbol.for, r = a3 ? Symbol.for("react.element") : 60103, o = a3 ? Symbol.for("react.portal") : 60106, s = a3 ? Symbol.for("react.fragment") : 60107, c = a3 ? Symbol.for("react.strict_mode") : 60108, f = a3 ? Symbol.for("react.profiler") : 60114, p = a3 ? Symbol.for("react.provider") : 60109, h = a3 ? Symbol.for("react.context") : 60110, g = a3 ? Symbol.for("react.async_mode") : 60111, m = a3 ? Symbol.for("react.concurrent_mode") : 60111, x = a3 ? Symbol.for("react.forward_ref") : 60112, T = a3 ? Symbol.for("react.suspense") : 60113, E = a3 ? Symbol.for("react.suspense_list") : 60120, D = a3 ? Symbol.for("react.memo") : 60115, M = a3 ? Symbol.for("react.lazy") : 60116, S = a3 ? Symbol.for("react.block") : 60121, N = a3 ? Symbol.for("react.fundamental") : 60117, B = a3 ? Symbol.for("react.responder") : 60118, G = a3 ? Symbol.for("react.scope") : 60119;
  function $(w) {
    if (typeof w == "object" && w !== null) {
      var Z = w.$$typeof;
      switch (Z) {
        case r:
          switch (w = w.type, w) {
            case g:
            case m:
            case s:
            case f:
            case c:
            case T:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case h:
                case x:
                case M:
                case D:
                case p:
                  return w;
                default:
                  return Z;
              }
          }
        case o:
          return Z;
      }
    }
  }
  function H(w) {
    return $(w) === m;
  }
  return Xt.AsyncMode = g, Xt.ConcurrentMode = m, Xt.ContextConsumer = h, Xt.ContextProvider = p, Xt.Element = r, Xt.ForwardRef = x, Xt.Fragment = s, Xt.Lazy = M, Xt.Memo = D, Xt.Portal = o, Xt.Profiler = f, Xt.StrictMode = c, Xt.Suspense = T, Xt.isAsyncMode = function(w) {
    return H(w) || $(w) === g;
  }, Xt.isConcurrentMode = H, Xt.isContextConsumer = function(w) {
    return $(w) === h;
  }, Xt.isContextProvider = function(w) {
    return $(w) === p;
  }, Xt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }, Xt.isForwardRef = function(w) {
    return $(w) === x;
  }, Xt.isFragment = function(w) {
    return $(w) === s;
  }, Xt.isLazy = function(w) {
    return $(w) === M;
  }, Xt.isMemo = function(w) {
    return $(w) === D;
  }, Xt.isPortal = function(w) {
    return $(w) === o;
  }, Xt.isProfiler = function(w) {
    return $(w) === f;
  }, Xt.isStrictMode = function(w) {
    return $(w) === c;
  }, Xt.isSuspense = function(w) {
    return $(w) === T;
  }, Xt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === s || w === m || w === f || w === c || w === T || w === E || typeof w == "object" && w !== null && (w.$$typeof === M || w.$$typeof === D || w.$$typeof === p || w.$$typeof === h || w.$$typeof === x || w.$$typeof === N || w.$$typeof === B || w.$$typeof === G || w.$$typeof === S);
  }, Xt.typeOf = $, Xt;
}
var Bm;
function Rb() {
  return Bm || (Bm = 1, $c.exports = wb()), $c.exports;
}
var qc, Nm;
function Mb() {
  if (Nm) return qc;
  Nm = 1;
  var a3 = Rb(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, o = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, s = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, c = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, f = {};
  f[a3.ForwardRef] = s, f[a3.Memo] = c;
  function p(M) {
    return a3.isMemo(M) ? c : f[M.$$typeof] || r;
  }
  var h = Object.defineProperty, g = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, T = Object.getPrototypeOf, E = Object.prototype;
  function D(M, S, N) {
    if (typeof S != "string") {
      if (E) {
        var B = T(S);
        B && B !== E && D(M, B, N);
      }
      var G = g(S);
      m && (G = G.concat(m(S)));
      for (var $ = p(M), H = p(S), w = 0; w < G.length; ++w) {
        var Z = G[w];
        if (!o[Z] && !(N && N[Z]) && !(H && H[Z]) && !($ && $[Z])) {
          var K = x(S, Z);
          try {
            h(M, Z, K);
          } catch {
          }
        }
      }
    }
    return M;
  }
  return qc = D, qc;
}
Mb();
var Ob = true;
function Lg(a3, r, o) {
  var s = "";
  return o.split(" ").forEach(function(c) {
    a3[c] !== void 0 ? r.push(a3[c] + ";") : c && (s += c + " ");
  }), s;
}
var vf = function(r, o, s) {
  var c = r.key + "-" + o.name;
  (s === false || Ob === false) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
}, $g = function(r, o, s) {
  vf(r, o, s);
  var c = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var f = o;
    do
      r.insert(o === f ? "." + c : "", f, r.sheet, true), f = f.next;
    while (f !== void 0);
  }
};
function zb(a3) {
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
var _b = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Db = /[A-Z]|^ms/g, kb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qg = function(r) {
  return r.charCodeAt(1) === 45;
}, Um = function(r) {
  return r != null && typeof r != "boolean";
}, Yc = Hg(function(a3) {
  return qg(a3) ? a3 : a3.replace(Db, "-$&").toLowerCase();
}), Hm = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string") return o.replace(kb, function(s, c, f) {
        return Wn = { name: c, styles: f, next: Wn }, c;
      });
  }
  return _b[r] !== 1 && !qg(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Oi(a3, r, o) {
  if (o == null) return "";
  var s = o;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var c = o;
      if (c.anim === 1) return Wn = { name: c.name, styles: c.styles, next: Wn }, c.name;
      var f = o;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0) for (; p !== void 0; ) Wn = { name: p.name, styles: p.styles, next: Wn }, p = p.next;
        var h = f.styles + ";";
        return h;
      }
      return Bb(a3, r, o);
    }
    case "function": {
      if (a3 !== void 0) {
        var g = Wn, m = o(a3);
        return Wn = g, Oi(a3, r, m);
      }
      break;
    }
  }
  var x = o;
  if (r == null) return x;
  var T = r[x];
  return T !== void 0 ? T : x;
}
function Bb(a3, r, o) {
  var s = "";
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) s += Oi(a3, r, o[c]) + ";";
  else for (var f in o) {
    var p = o[f];
    if (typeof p != "object") {
      var h = p;
      r != null && r[h] !== void 0 ? s += f + "{" + r[h] + "}" : Um(h) && (s += Yc(f) + ":" + Hm(f, h) + ";");
    } else if (Array.isArray(p) && typeof p[0] == "string" && (r == null || r[p[0]] === void 0)) for (var g = 0; g < p.length; g++) Um(p[g]) && (s += Yc(f) + ":" + Hm(f, p[g]) + ";");
    else {
      var m = Oi(a3, r, p);
      switch (f) {
        case "animation":
        case "animationName": {
          s += Yc(f) + ":" + m + ";";
          break;
        }
        default:
          s += f + "{" + m + "}";
      }
    }
  }
  return s;
}
var jm = /label:\s*([^\s;{]+)\s*(;|$)/g, Wn;
function vs(a3, r, o) {
  if (a3.length === 1 && typeof a3[0] == "object" && a3[0] !== null && a3[0].styles !== void 0) return a3[0];
  var s = true, c = "";
  Wn = void 0;
  var f = a3[0];
  if (f == null || f.raw === void 0) s = false, c += Oi(o, r, f);
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a3.length; h++) if (c += Oi(o, r, a3[h]), s) {
    var g = f;
    c += g[h];
  }
  jm.lastIndex = 0;
  for (var m = "", x; (x = jm.exec(c)) !== null; ) m += "-" + x[1];
  var T = zb(c) + m;
  return { name: T, styles: c, next: Wn };
}
var Nb = function(r) {
  return r();
}, Ub = Wc.useInsertionEffect ? Wc.useInsertionEffect : false, Yg = Ub || Nb, Gg = O.createContext(typeof HTMLElement < "u" ? Ab({ key: "css" }) : null);
Gg.Provider;
var Vg = function(r) {
  return O.forwardRef(function(o, s) {
    var c = O.useContext(Gg);
    return r(o, c, s);
  });
}, bf = O.createContext({}), Sf = {}.hasOwnProperty, tf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Hb = function(r, o) {
  var s = {};
  for (var c in o) Sf.call(o, c) && (s[c] = o[c]);
  return s[tf] = r, s;
}, jb = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return vf(o, s, c), Yg(function() {
    return $g(o, s, c);
  }), null;
}, Lb = Vg(function(a3, r, o) {
  var s = a3.css;
  typeof s == "string" && r.registered[s] !== void 0 && (s = r.registered[s]);
  var c = a3[tf], f = [s], p = "";
  typeof a3.className == "string" ? p = Lg(r.registered, f, a3.className) : a3.className != null && (p = a3.className + " ");
  var h = vs(f, void 0, O.useContext(bf));
  p += r.key + "-" + h.name;
  var g = {};
  for (var m in a3) Sf.call(a3, m) && m !== "css" && m !== tf && (g[m] = a3[m]);
  return g.className = p, o && (g.ref = o), O.createElement(O.Fragment, null, O.createElement(jb, { cache: r, serialized: h, isStringTag: typeof c == "string" }), O.createElement(c, g));
}), $b = Lb, Lm = function(r, o) {
  var s = arguments;
  if (o == null || !Sf.call(o, "css")) return O.createElement.apply(void 0, s);
  var c = s.length, f = new Array(c);
  f[0] = $b, f[1] = Hb(r, o);
  for (var p = 2; p < c; p++) f[p] = s[p];
  return O.createElement.apply(null, f);
};
(function(a3) {
  var r;
  r || (r = a3.JSX || (a3.JSX = {}));
})(Lm || (Lm = {}));
function xf() {
  for (var a3 = arguments.length, r = new Array(a3), o = 0; o < a3; o++) r[o] = arguments[o];
  return vs(r);
}
function _i() {
  var a3 = xf.apply(void 0, arguments), r = "animation-" + a3.name;
  return { name: r, styles: "@keyframes " + r + "{" + a3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var qb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yb = Hg(function(a3) {
  return qb.test(a3) || a3.charCodeAt(0) === 111 && a3.charCodeAt(1) === 110 && a3.charCodeAt(2) < 91;
}), Gb = Yb, Vb = function(r) {
  return r !== "theme";
}, $m = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? Gb : Vb;
}, qm = function(r, o, s) {
  var c;
  if (o) {
    var f = o.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(p) {
      return r.__emotion_forwardProp(p) && f(p);
    } : f;
  }
  return typeof c != "function" && s && (c = r.__emotion_forwardProp), c;
}, Xb = function(r) {
  var o = r.cache, s = r.serialized, c = r.isStringTag;
  return vf(o, s, c), Yg(function() {
    return $g(o, s, c);
  }), null;
}, Qb = function a(r, o) {
  var s = r.__emotion_real === r, c = s && r.__emotion_base || r, f, p;
  o !== void 0 && (f = o.label, p = o.target);
  var h = qm(r, o, s), g = h || $m(c), m = !g("as");
  return function() {
    var x = arguments, T = s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && T.push("label:" + f + ";"), x[0] == null || x[0].raw === void 0) T.push.apply(T, x);
    else {
      var E = x[0];
      T.push(E[0]);
      for (var D = x.length, M = 1; M < D; M++) T.push(x[M], E[M]);
    }
    var S = Vg(function(N, B, G) {
      var $ = m && N.as || c, H = "", w = [], Z = N;
      if (N.theme == null) {
        Z = {};
        for (var K in N) Z[K] = N[K];
        Z.theme = O.useContext(bf);
      }
      typeof N.className == "string" ? H = Lg(B.registered, w, N.className) : N.className != null && (H = N.className + " ");
      var rt = vs(T.concat(w), B.registered, Z);
      H += B.key + "-" + rt.name, p !== void 0 && (H += " " + p);
      var Q = m && h === void 0 ? $m($) : g, v = {};
      for (var P in N) m && P === "as" || Q(P) && (v[P] = N[P]);
      return v.className = H, G && (v.ref = G), O.createElement(O.Fragment, null, O.createElement(Xb, { cache: B, serialized: rt, isStringTag: typeof $ == "string" }), O.createElement($, v));
    });
    return S.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", S.defaultProps = r.defaultProps, S.__emotion_real = S, S.__emotion_base = c, S.__emotion_styles = T, S.__emotion_forwardProp = h, Object.defineProperty(S, "toString", { value: function() {
      return "." + p;
    } }), S.withComponent = function(N, B) {
      var G = a(N, ls({}, o, B, { shouldForwardProp: qm(S, B, true) }));
      return G.apply(void 0, T);
    }, S;
  };
}, Zb = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], ef = Qb.bind(null);
Zb.forEach(function(a3) {
  ef[a3] = ef(a3);
});
/**
* @mui/styled-engine v6.4.3
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function Xg(a3, r) {
  return ef(a3, r);
}
function Kb(a3, r) {
  Array.isArray(a3.__emotion_styles) && (a3.__emotion_styles = r(a3.__emotion_styles));
}
const Ym = [];
function Gm(a3) {
  return Ym[0] = a3, vs(Ym);
}
var Gc = { exports: {} }, Wt = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Vm;
function Pb() {
  if (Vm) return Wt;
  Vm = 1;
  var a3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), D = Symbol.for("react.client.reference");
  function M(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case a3:
          switch (S = S.type, S) {
            case o:
            case c:
            case s:
            case g:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case p:
                case h:
                case T:
                case x:
                  return S;
                case f:
                  return S;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  return Wt.ContextConsumer = f, Wt.ContextProvider = p, Wt.Element = a3, Wt.ForwardRef = h, Wt.Fragment = o, Wt.Lazy = T, Wt.Memo = x, Wt.Portal = r, Wt.Profiler = c, Wt.StrictMode = s, Wt.Suspense = g, Wt.SuspenseList = m, Wt.isContextConsumer = function(S) {
    return M(S) === f;
  }, Wt.isContextProvider = function(S) {
    return M(S) === p;
  }, Wt.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a3;
  }, Wt.isForwardRef = function(S) {
    return M(S) === h;
  }, Wt.isFragment = function(S) {
    return M(S) === o;
  }, Wt.isLazy = function(S) {
    return M(S) === T;
  }, Wt.isMemo = function(S) {
    return M(S) === x;
  }, Wt.isPortal = function(S) {
    return M(S) === r;
  }, Wt.isProfiler = function(S) {
    return M(S) === c;
  }, Wt.isStrictMode = function(S) {
    return M(S) === s;
  }, Wt.isSuspense = function(S) {
    return M(S) === g;
  }, Wt.isSuspenseList = function(S) {
    return M(S) === m;
  }, Wt.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === c || S === s || S === g || S === m || S === E || typeof S == "object" && S !== null && (S.$$typeof === T || S.$$typeof === x || S.$$typeof === p || S.$$typeof === f || S.$$typeof === h || S.$$typeof === D || S.getModuleId !== void 0);
  }, Wt.typeOf = M, Wt;
}
var Xm;
function Fb() {
  return Xm || (Xm = 1, Gc.exports = Pb()), Gc.exports;
}
var Qg = Fb();
function Jn(a3) {
  if (typeof a3 != "object" || a3 === null) return false;
  const r = Object.getPrototypeOf(a3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a3) && !(Symbol.iterator in a3);
}
function Zg(a3) {
  if (O.isValidElement(a3) || Qg.isValidElementType(a3) || !Jn(a3)) return a3;
  const r = {};
  return Object.keys(a3).forEach((o) => {
    r[o] = Zg(a3[o]);
  }), r;
}
function mn(a3, r, o = { clone: true }) {
  const s = o.clone ? { ...a3 } : a3;
  return Jn(a3) && Jn(r) && Object.keys(r).forEach((c) => {
    O.isValidElement(r[c]) || Qg.isValidElementType(r[c]) ? s[c] = r[c] : Jn(r[c]) && Object.prototype.hasOwnProperty.call(a3, c) && Jn(a3[c]) ? s[c] = mn(a3[c], r[c], o) : o.clone ? s[c] = Jn(r[c]) ? Zg(r[c]) : r[c] : s[c] = r[c];
  }), s;
}
const Wb = (a3) => {
  const r = Object.keys(a3).map((o) => ({ key: o, val: a3[o] })) || [];
  return r.sort((o, s) => o.val - s.val), r.reduce((o, s) => ({ ...o, [s.key]: s.val }), {});
};
function Jb(a3) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = "px", step: s = 5, ...c } = a3, f = Wb(r), p = Object.keys(f);
  function h(E) {
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${o})`;
  }
  function g(E) {
    return `@media (max-width:${(typeof r[E] == "number" ? r[E] : E) - s / 100}${o})`;
  }
  function m(E, D) {
    const M = p.indexOf(D);
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${o}) and (max-width:${(M !== -1 && typeof r[p[M]] == "number" ? r[p[M]] : D) - s / 100}${o})`;
  }
  function x(E) {
    return p.indexOf(E) + 1 < p.length ? m(E, p[p.indexOf(E) + 1]) : h(E);
  }
  function T(E) {
    const D = p.indexOf(E);
    return D === 0 ? h(p[1]) : D === p.length - 1 ? g(p[D]) : m(E, p[p.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return { keys: p, values: f, up: h, down: g, between: m, only: x, not: T, unit: o, ...c };
}
function Ib(a3, r) {
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
function t1(a3, r) {
  return r === "@" || r.startsWith("@") && (a3.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function e1(a3, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, s, c] = o, f = Number.isNaN(+s) ? s || 0 : +s;
  return a3.containerQueries(c).up(f);
}
function n1(a3) {
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
const a1 = { borderRadius: 4 };
function Ai(a3, r) {
  return r ? mn(a3, r, { clone: false }) : a3;
}
const bs = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Qm = { keys: ["xs", "sm", "md", "lg", "xl"], up: (a3) => `@media (min-width:${bs[a3]}px)` }, l1 = { containerQueries: (a3) => ({ up: (r) => {
  let o = typeof r == "number" ? r : bs[r] || r;
  return typeof o == "number" && (o = `${o}px`), a3 ? `@container ${a3} (min-width:${o})` : `@container (min-width:${o})`;
} }) };
function xa(a3, r, o) {
  const s = a3.theme || {};
  if (Array.isArray(r)) {
    const f = s.breakpoints || Qm;
    return r.reduce((p, h, g) => (p[f.up(f.keys[g])] = o(r[g]), p), {});
  }
  if (typeof r == "object") {
    const f = s.breakpoints || Qm;
    return Object.keys(r).reduce((p, h) => {
      if (t1(f.keys, h)) {
        const g = e1(s.containerQueries ? s : l1, h);
        g && (p[g] = o(r[h], h));
      } else if (Object.keys(f.values || bs).includes(h)) {
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
function r1(a3 = {}) {
  var _a;
  return ((_a = a3.keys) == null ? void 0 : _a.reduce((o, s) => {
    const c = a3.up(s);
    return o[c] = {}, o;
  }, {})) || {};
}
function i1(a3, r) {
  return a3.reduce((o, s) => {
    const c = o[s];
    return (!c || Object.keys(c).length === 0) && delete o[s], o;
  }, r);
}
function gt(a3) {
  if (typeof a3 != "string") throw new Error(Cl(7));
  return a3.charAt(0).toUpperCase() + a3.slice(1);
}
function Ss(a3, r, o = true) {
  if (!r || typeof r != "string") return null;
  if (a3 && a3.vars && o) {
    const s = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a3);
    if (s != null) return s;
  }
  return r.split(".").reduce((s, c) => s && s[c] != null ? s[c] : null, a3);
}
function is(a3, r, o, s = o) {
  let c;
  return typeof a3 == "function" ? c = a3(o) : Array.isArray(a3) ? c = a3[o] || s : c = Ss(a3, o) || s, r && (c = r(c, s, a3)), c;
}
function Te(a3) {
  const { prop: r, cssProperty: o = a3.prop, themeKey: s, transform: c } = a3, f = (p) => {
    if (p[r] == null) return null;
    const h = p[r], g = p.theme, m = Ss(g, s) || {};
    return xa(p, h, (T) => {
      let E = is(m, c, T);
      return T === E && typeof T == "string" && (E = is(m, c, `${r}${T === "default" ? "" : gt(T)}`, T)), o === false ? E : { [o]: E };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function o1(a3) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = a3(o)), r[o]);
}
const s1 = { m: "margin", p: "padding" }, u1 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Zm = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, c1 = o1((a3) => {
  if (a3.length > 2) if (Zm[a3]) a3 = Zm[a3];
  else return [a3];
  const [r, o] = a3.split(""), s = s1[r], c = u1[o] || "";
  return Array.isArray(c) ? c.map((f) => s + f) : [s + c];
}), Tf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Cf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Tf, ...Cf];
function Di(a3, r, o, s) {
  const c = Ss(a3, r, true) ?? o;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string") return f;
    const p = Math.abs(f), h = c[p];
    return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof c == "function" ? c : () => {
  };
}
function Ef(a3) {
  return Di(a3, "spacing", 8);
}
function ki(a3, r) {
  return typeof r == "string" || r == null ? r : a3(r);
}
function f1(a3, r) {
  return (o) => a3.reduce((s, c) => (s[c] = ki(r, o), s), {});
}
function d1(a3, r, o, s) {
  if (!r.includes(o)) return null;
  const c = c1(o), f = f1(c, s), p = a3[o];
  return xa(a3, p, f);
}
function Kg(a3, r) {
  const o = Ef(a3.theme);
  return Object.keys(a3).map((s) => d1(a3, r, s, o)).reduce(Ai, {});
}
function ye(a3) {
  return Kg(a3, Tf);
}
ye.propTypes = {};
ye.filterProps = Tf;
function ve(a3) {
  return Kg(a3, Cf);
}
ve.propTypes = {};
ve.filterProps = Cf;
function Pg(a3 = 8, r = Ef({ spacing: a3 })) {
  if (a3.mui) return a3;
  const o = (...s) => (s.length === 0 ? [1] : s).map((f) => {
    const p = r(f);
    return typeof p == "number" ? `${p}px` : p;
  }).join(" ");
  return o.mui = true, o;
}
function xs(...a3) {
  const r = a3.reduce((s, c) => (c.filterProps.forEach((f) => {
    s[f] = c;
  }), s), {}), o = (s) => Object.keys(s).reduce((c, f) => r[f] ? Ai(c, r[f](s)) : c, {});
  return o.propTypes = {}, o.filterProps = a3.reduce((s, c) => s.concat(c.filterProps), []), o;
}
function Bn(a3) {
  return typeof a3 != "number" ? a3 : `${a3}px solid`;
}
function Un(a3, r) {
  return Te({ prop: a3, themeKey: "borders", transform: r });
}
const p1 = Un("border", Bn), h1 = Un("borderTop", Bn), m1 = Un("borderRight", Bn), g1 = Un("borderBottom", Bn), y1 = Un("borderLeft", Bn), v1 = Un("borderColor"), b1 = Un("borderTopColor"), S1 = Un("borderRightColor"), x1 = Un("borderBottomColor"), T1 = Un("borderLeftColor"), C1 = Un("outline", Bn), E1 = Un("outlineColor"), Ts = (a3) => {
  if (a3.borderRadius !== void 0 && a3.borderRadius !== null) {
    const r = Di(a3.theme, "shape.borderRadius", 4), o = (s) => ({ borderRadius: ki(r, s) });
    return xa(a3, a3.borderRadius, o);
  }
  return null;
};
Ts.propTypes = {};
Ts.filterProps = ["borderRadius"];
xs(p1, h1, m1, g1, y1, v1, b1, S1, x1, T1, Ts, C1, E1);
const Cs = (a3) => {
  if (a3.gap !== void 0 && a3.gap !== null) {
    const r = Di(a3.theme, "spacing", 8), o = (s) => ({ gap: ki(r, s) });
    return xa(a3, a3.gap, o);
  }
  return null;
};
Cs.propTypes = {};
Cs.filterProps = ["gap"];
const Es = (a3) => {
  if (a3.columnGap !== void 0 && a3.columnGap !== null) {
    const r = Di(a3.theme, "spacing", 8), o = (s) => ({ columnGap: ki(r, s) });
    return xa(a3, a3.columnGap, o);
  }
  return null;
};
Es.propTypes = {};
Es.filterProps = ["columnGap"];
const As = (a3) => {
  if (a3.rowGap !== void 0 && a3.rowGap !== null) {
    const r = Di(a3.theme, "spacing", 8), o = (s) => ({ rowGap: ki(r, s) });
    return xa(a3, a3.rowGap, o);
  }
  return null;
};
As.propTypes = {};
As.filterProps = ["rowGap"];
const A1 = Te({ prop: "gridColumn" }), w1 = Te({ prop: "gridRow" }), R1 = Te({ prop: "gridAutoFlow" }), M1 = Te({ prop: "gridAutoColumns" }), O1 = Te({ prop: "gridAutoRows" }), z1 = Te({ prop: "gridTemplateColumns" }), _1 = Te({ prop: "gridTemplateRows" }), D1 = Te({ prop: "gridTemplateAreas" }), k1 = Te({ prop: "gridArea" });
xs(Cs, Es, As, A1, w1, R1, M1, O1, z1, _1, D1, k1);
function yr(a3, r) {
  return r === "grey" ? r : a3;
}
const B1 = Te({ prop: "color", themeKey: "palette", transform: yr }), N1 = Te({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: yr }), U1 = Te({ prop: "backgroundColor", themeKey: "palette", transform: yr });
xs(B1, N1, U1);
function pn(a3) {
  return a3 <= 1 && a3 !== 0 ? `${a3 * 100}%` : a3;
}
const H1 = Te({ prop: "width", transform: pn }), Af = (a3) => {
  if (a3.maxWidth !== void 0 && a3.maxWidth !== null) {
    const r = (o) => {
      var _a, _b2, _c, _d, _e;
      const s = ((_c = (_b2 = (_a = a3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c[o]) || bs[o];
      return s ? ((_e = (_d = a3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${s}${a3.theme.breakpoints.unit}` } : { maxWidth: s } : { maxWidth: pn(o) };
    };
    return xa(a3, a3.maxWidth, r);
  }
  return null;
};
Af.filterProps = ["maxWidth"];
const j1 = Te({ prop: "minWidth", transform: pn }), L1 = Te({ prop: "height", transform: pn }), $1 = Te({ prop: "maxHeight", transform: pn }), q1 = Te({ prop: "minHeight", transform: pn });
Te({ prop: "size", cssProperty: "width", transform: pn });
Te({ prop: "size", cssProperty: "height", transform: pn });
const Y1 = Te({ prop: "boxSizing" });
xs(H1, Af, j1, L1, $1, q1, Y1);
const Bi = { border: { themeKey: "borders", transform: Bn }, borderTop: { themeKey: "borders", transform: Bn }, borderRight: { themeKey: "borders", transform: Bn }, borderBottom: { themeKey: "borders", transform: Bn }, borderLeft: { themeKey: "borders", transform: Bn }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Bn }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Ts }, color: { themeKey: "palette", transform: yr }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: yr }, backgroundColor: { themeKey: "palette", transform: yr }, p: { style: ve }, pt: { style: ve }, pr: { style: ve }, pb: { style: ve }, pl: { style: ve }, px: { style: ve }, py: { style: ve }, padding: { style: ve }, paddingTop: { style: ve }, paddingRight: { style: ve }, paddingBottom: { style: ve }, paddingLeft: { style: ve }, paddingX: { style: ve }, paddingY: { style: ve }, paddingInline: { style: ve }, paddingInlineStart: { style: ve }, paddingInlineEnd: { style: ve }, paddingBlock: { style: ve }, paddingBlockStart: { style: ve }, paddingBlockEnd: { style: ve }, m: { style: ye }, mt: { style: ye }, mr: { style: ye }, mb: { style: ye }, ml: { style: ye }, mx: { style: ye }, my: { style: ye }, margin: { style: ye }, marginTop: { style: ye }, marginRight: { style: ye }, marginBottom: { style: ye }, marginLeft: { style: ye }, marginX: { style: ye }, marginY: { style: ye }, marginInline: { style: ye }, marginInlineStart: { style: ye }, marginInlineEnd: { style: ye }, marginBlock: { style: ye }, marginBlockStart: { style: ye }, marginBlockEnd: { style: ye }, displayPrint: { cssProperty: false, transform: (a3) => ({ "@media print": { display: a3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Cs }, rowGap: { style: As }, columnGap: { style: Es }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: pn }, maxWidth: { style: Af }, minWidth: { transform: pn }, height: { transform: pn }, maxHeight: { transform: pn }, minHeight: { transform: pn }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function G1(...a3) {
  const r = a3.reduce((s, c) => s.concat(Object.keys(c)), []), o = new Set(r);
  return a3.every((s) => o.size === Object.keys(s).length);
}
function V1(a3, r) {
  return typeof a3 == "function" ? a3(r) : a3;
}
function X1() {
  function a3(o, s, c, f) {
    const p = { [o]: s, theme: c }, h = f[o];
    if (!h) return { [o]: s };
    const { cssProperty: g = o, themeKey: m, transform: x, style: T } = h;
    if (s == null) return null;
    if (m === "typography" && s === "inherit") return { [o]: s };
    const E = Ss(c, m) || {};
    return T ? T(p) : xa(p, s, (M) => {
      let S = is(E, x, M);
      return M === S && typeof M == "string" && (S = is(E, x, `${o}${M === "default" ? "" : gt(M)}`, M)), g === false ? S : { [g]: S };
    });
  }
  function r(o) {
    const { sx: s, theme: c = {} } = o || {};
    if (!s) return null;
    const f = c.unstable_sxConfig ?? Bi;
    function p(h) {
      let g = h;
      if (typeof h == "function") g = h(c);
      else if (typeof h != "object") return h;
      if (!g) return null;
      const m = r1(c.breakpoints), x = Object.keys(m);
      let T = m;
      return Object.keys(g).forEach((E) => {
        const D = V1(g[E], c);
        if (D != null) if (typeof D == "object") if (f[E]) T = Ai(T, a3(E, D, c, f));
        else {
          const M = xa({ theme: c }, D, (S) => ({ [E]: S }));
          G1(M, D) ? T[E] = r({ sx: D, theme: c }) : T = Ai(T, M);
        }
        else T = Ai(T, a3(E, D, c, f));
      }), Ib(c, i1(x, T));
    }
    return Array.isArray(s) ? s.map(p) : p(s);
  }
  return r;
}
const El = X1();
El.filterProps = ["sx"];
function Q1(a3, r) {
  var _a;
  const o = this;
  if (o.vars) {
    if (!((_a = o.colorSchemes) == null ? void 0 : _a[a3]) || typeof o.getColorSchemeSelector != "function") return {};
    let s = o.getColorSchemeSelector(a3);
    return s === "&" ? r : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), { [s]: r });
  }
  return o.palette.mode === a3 ? r : {};
}
function wf(a3 = {}, ...r) {
  const { breakpoints: o = {}, palette: s = {}, spacing: c, shape: f = {}, ...p } = a3, h = Jb(o), g = Pg(c);
  let m = mn({ breakpoints: h, direction: "ltr", components: {}, palette: { mode: "light", ...s }, spacing: g, shape: { ...a1, ...f } }, p);
  return m = n1(m), m.applyStyles = Q1, m = r.reduce((x, T) => mn(x, T), m), m.unstable_sxConfig = { ...Bi, ...p == null ? void 0 : p.unstable_sxConfig }, m.unstable_sx = function(T) {
    return El({ sx: T, theme: this });
  }, m;
}
function Z1(a3) {
  return Object.keys(a3).length === 0;
}
function K1(a3 = null) {
  const r = O.useContext(bf);
  return !r || Z1(r) ? a3 : r;
}
const P1 = wf();
function Rf(a3 = P1) {
  return K1(a3);
}
const F1 = (a3) => {
  var _a;
  const r = { systemProps: {}, otherProps: {} }, o = ((_a = a3 == null ? void 0 : a3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? Bi;
  return Object.keys(a3).forEach((s) => {
    o[s] ? r.systemProps[s] = a3[s] : r.otherProps[s] = a3[s];
  }), r;
};
function Fg(a3) {
  const { sx: r, ...o } = a3, { systemProps: s, otherProps: c } = F1(o);
  let f;
  return Array.isArray(r) ? f = [s, ...r] : typeof r == "function" ? f = (...p) => {
    const h = r(...p);
    return Jn(h) ? { ...s, ...h } : s;
  } : f = { ...s, ...r }, { ...c, sx: f };
}
const Km = (a3) => a3, W1 = () => {
  let a3 = Km;
  return { configure(r) {
    a3 = r;
  }, generate(r) {
    return a3(r);
  }, reset() {
    a3 = Km;
  } };
}, Wg = W1();
function Jg(a3) {
  var r, o, s = "";
  if (typeof a3 == "string" || typeof a3 == "number") s += a3;
  else if (typeof a3 == "object") if (Array.isArray(a3)) {
    var c = a3.length;
    for (r = 0; r < c; r++) a3[r] && (o = Jg(a3[r])) && (s && (s += " "), s += o);
  } else for (o in a3) a3[o] && (s && (s += " "), s += o);
  return s;
}
function xt() {
  for (var a3, r, o = 0, s = "", c = arguments.length; o < c; o++) (a3 = arguments[o]) && (r = Jg(a3)) && (s && (s += " "), s += r);
  return s;
}
function J1(a3 = {}) {
  const { themeId: r, defaultTheme: o, defaultClassName: s = "MuiBox-root", generateClassName: c } = a3, f = Xg("div", { shouldForwardProp: (h) => h !== "theme" && h !== "sx" && h !== "as" })(El);
  return O.forwardRef(function(g, m) {
    const x = Rf(o), { className: T, component: E = "div", ...D } = Fg(g);
    return U.jsx(f, { as: E, ref: m, className: xt(T, c ? c(s) : s), theme: r && x[r] || x, ...D });
  });
}
const I1 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function de(a3, r, o = "Mui") {
  const s = I1[r];
  return s ? `${o}-${s}` : `${Wg.generate(a3)}-${r}`;
}
function ue(a3, r, o = "Mui") {
  const s = {};
  return r.forEach((c) => {
    s[c] = de(a3, c, o);
  }), s;
}
function Ig(a3) {
  const { variants: r, ...o } = a3, s = { variants: r, style: Gm(o), isProcessed: true };
  return s.style === o || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = Gm(c.style));
  }), s;
}
const tS = wf();
function Vc(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
function eS(a3) {
  return a3 ? (r, o) => o[a3] : null;
}
function nS(a3, r, o) {
  a3.theme = rS(a3.theme) ? o : a3.theme[r] || a3.theme;
}
function ns(a3, r) {
  const o = typeof r == "function" ? r(a3) : r;
  if (Array.isArray(o)) return o.flatMap((s) => ns(a3, s));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed) s = o.style;
    else {
      const { variants: c, ...f } = o;
      s = f;
    }
    return t0(a3, o.variants, [s]);
  }
  return (o == null ? void 0 : o.isProcessed) ? o.style : o;
}
function t0(a3, r, o = []) {
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
function aS(a3 = {}) {
  const { themeId: r, defaultTheme: o = tS, rootShouldForwardProp: s = Vc, slotShouldForwardProp: c = Vc } = a3;
  function f(h) {
    nS(h, r, o);
  }
  return (h, g = {}) => {
    Kb(h, (w) => w.filter((Z) => Z !== El));
    const { name: m, slot: x, skipVariantsResolver: T, skipSx: E, overridesResolver: D = eS(oS(x)), ...M } = g, S = T !== void 0 ? T : x && x !== "Root" && x !== "root" || false, N = E || false;
    let B = Vc;
    x === "Root" || x === "root" ? B = s : x ? B = c : iS(h) && (B = void 0);
    const G = Xg(h, { shouldForwardProp: B, label: lS(), ...M }), $ = (w) => {
      if (typeof w == "function" && w.__emotion_real !== w) return function(K) {
        return ns(K, w);
      };
      if (Jn(w)) {
        const Z = Ig(w);
        return Z.variants ? function(rt) {
          return ns(rt, Z);
        } : Z.style;
      }
      return w;
    }, H = (...w) => {
      const Z = [], K = w.map($), rt = [];
      if (Z.push(f), m && D && rt.push(function(I) {
        var _a, _b2;
        const W = (_b2 = (_a = I.theme.components) == null ? void 0 : _a[m]) == null ? void 0 : _b2.styleOverrides;
        if (!W) return null;
        const tt = {};
        for (const L in W) tt[L] = ns(I, W[L]);
        return D(I, tt);
      }), m && !S && rt.push(function(I) {
        var _a, _b2, _c;
        const W = (_c = (_b2 = (_a = I.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[m]) == null ? void 0 : _c.variants;
        return W ? t0(I, W) : null;
      }), N || rt.push(El), Array.isArray(K[0])) {
        const P = K.shift(), I = new Array(Z.length).fill(""), at = new Array(rt.length).fill("");
        let W;
        W = [...I, ...P, ...at], W.raw = [...I, ...P.raw, ...at], Z.unshift(W);
      }
      const Q = [...Z, ...K, ...rt], v = G(...Q);
      return h.muiName && (v.muiName = h.muiName), v;
    };
    return G.withConfig && (H.withConfig = G.withConfig), H;
  };
}
function lS(a3, r) {
  return void 0;
}
function rS(a3) {
  for (const r in a3) return false;
  return true;
}
function iS(a3) {
  return typeof a3 == "string" && a3.charCodeAt(0) > 96;
}
function oS(a3) {
  return a3 && a3.charAt(0).toLowerCase() + a3.slice(1);
}
function os(a3, r) {
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
          o[c][g] = os(f[g], p[g]);
        }
      }
    } else o[c] === void 0 && (o[c] = a3[c]);
  }
  return o;
}
function sS(a3) {
  const { theme: r, name: o, props: s } = a3;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps ? s : os(r.components[o].defaultProps, s);
}
function uS({ props: a3, name: r, defaultTheme: o, themeId: s }) {
  let c = Rf(o);
  return c = c[s] || c, sS({ theme: c, name: r, props: a3 });
}
const Mf = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function hr(a3, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a3, o));
}
function Of(a3, r = 0, o = 1) {
  return hr(a3, r, o);
}
function cS(a3) {
  a3 = a3.slice(1);
  const r = new RegExp(`.{1,${a3.length >= 6 ? 2 : 1}}`, "g");
  let o = a3.match(r);
  return o && o[0].length === 1 && (o = o.map((s) => s + s)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((s, c) => c < 3 ? parseInt(s, 16) : Math.round(parseInt(s, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Pa(a3) {
  if (a3.type) return a3;
  if (a3.charAt(0) === "#") return Pa(cS(a3));
  const r = a3.indexOf("("), o = a3.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o)) throw new Error(Cl(9, a3));
  let s = a3.substring(r + 1, a3.length - 1), c;
  if (o === "color") {
    if (s = s.split(" "), c = s.shift(), s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c)) throw new Error(Cl(10, c));
  } else s = s.split(",");
  return s = s.map((f) => parseFloat(f)), { type: o, values: s, colorSpace: c };
}
const fS = (a3) => {
  const r = Pa(a3);
  return r.values.slice(0, 3).map((o, s) => r.type.includes("hsl") && s !== 0 ? `${o}%` : o).join(" ");
}, Si = (a3, r) => {
  try {
    return fS(a3);
  } catch {
    return a3;
  }
};
function ws(a3) {
  const { type: r, colorSpace: o } = a3;
  let { values: s } = a3;
  return r.includes("rgb") ? s = s.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (s[1] = `${s[1]}%`, s[2] = `${s[2]}%`), r.includes("color") ? s = `${o} ${s.join(" ")}` : s = `${s.join(", ")}`, `${r}(${s})`;
}
function e0(a3) {
  a3 = Pa(a3);
  const { values: r } = a3, o = r[0], s = r[1] / 100, c = r[2] / 100, f = s * Math.min(c, 1 - c), p = (m, x = (m + o / 30) % 12) => c - f * Math.max(Math.min(x - 3, 9 - x, 1), -1);
  let h = "rgb";
  const g = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return a3.type === "hsla" && (h += "a", g.push(r[3])), ws({ type: h, values: g });
}
function nf(a3) {
  a3 = Pa(a3);
  let r = a3.type === "hsl" || a3.type === "hsla" ? Pa(e0(a3)).values : a3.values;
  return r = r.map((o) => (a3.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function dS(a3, r) {
  const o = nf(a3), s = nf(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function Ta(a3, r) {
  return a3 = Pa(a3), r = Of(r), (a3.type === "rgb" || a3.type === "hsl") && (a3.type += "a"), a3.type === "color" ? a3.values[3] = `/${r}` : a3.values[3] = r, ws(a3);
}
function Xo(a3, r, o) {
  try {
    return Ta(a3, r);
  } catch {
    return a3;
  }
}
function Fa(a3, r) {
  if (a3 = Pa(a3), r = Of(r), a3.type.includes("hsl")) a3.values[2] *= 1 - r;
  else if (a3.type.includes("rgb") || a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] *= 1 - r;
  return ws(a3);
}
function te(a3, r, o) {
  try {
    return Fa(a3, r);
  } catch {
    return a3;
  }
}
function Wa(a3, r) {
  if (a3 = Pa(a3), r = Of(r), a3.type.includes("hsl")) a3.values[2] += (100 - a3.values[2]) * r;
  else if (a3.type.includes("rgb")) for (let o = 0; o < 3; o += 1) a3.values[o] += (255 - a3.values[o]) * r;
  else if (a3.type.includes("color")) for (let o = 0; o < 3; o += 1) a3.values[o] += (1 - a3.values[o]) * r;
  return ws(a3);
}
function ee(a3, r, o) {
  try {
    return Wa(a3, r);
  } catch {
    return a3;
  }
}
function n0(a3, r = 0.15) {
  return nf(a3) > 0.5 ? Fa(a3, r) : Wa(a3, r);
}
function Qo(a3, r, o) {
  try {
    return n0(a3, r);
  } catch {
    return a3;
  }
}
function a0(a3, r = 166) {
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
function Sa(a3) {
  return a3 && a3.ownerDocument || document;
}
function l0(a3) {
  return Sa(a3).defaultView || window;
}
function pS(a3, r) {
  typeof a3 == "function" ? a3(r) : a3 && (a3.current = r);
}
let Pm = 0;
function hS(a3) {
  const [r, o] = O.useState(a3), s = a3 || r;
  return O.useEffect(() => {
    r == null && (Pm += 1, o(`mui-${Pm}`));
  }, [r]), s;
}
const mS = { ...Wc }, Fm = mS.useId;
function gS(a3) {
  if (Fm !== void 0) {
    const r = Fm();
    return a3 ?? r;
  }
  return hS(a3);
}
function r0({ controlled: a3, default: r, name: o, state: s = "value" }) {
  const { current: c } = O.useRef(a3 !== void 0), [f, p] = O.useState(r), h = c ? a3 : f, g = O.useCallback((m) => {
    c || p(m);
  }, []);
  return [h, g];
}
function gn(a3) {
  const r = O.useRef(a3);
  return Mf(() => {
    r.current = a3;
  }), O.useRef((...o) => (0, r.current)(...o)).current;
}
function Al(...a3) {
  return O.useMemo(() => a3.every((r) => r == null) ? null : (r) => {
    a3.forEach((o) => {
      pS(o, r);
    });
  }, a3);
}
const Wm = {};
function i0(a3, r) {
  const o = O.useRef(Wm);
  return o.current === Wm && (o.current = a3(r)), o;
}
const yS = [];
function vS(a3) {
  O.useEffect(a3, yS);
}
class zf {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new zf();
  }
  start(r, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, r);
  }
}
function _f() {
  const a3 = i0(zf.create).current;
  return vS(a3.disposeEffect), a3;
}
function ss(a3) {
  try {
    return a3.matches(":focus-visible");
  } catch {
  }
  return false;
}
const bS = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", whiteSpace: "nowrap", width: "1px" };
function be(a3, r, o = void 0) {
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
function SS(a3) {
  return typeof a3 == "string";
}
function o0(a3, r, o) {
  return a3 === void 0 || SS(a3) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function vr(a3, r = []) {
  if (a3 === void 0) return {};
  const o = {};
  return Object.keys(a3).filter((s) => s.match(/^on[A-Z]/) && typeof a3[s] == "function" && !r.includes(s)).forEach((s) => {
    o[s] = a3[s];
  }), o;
}
function Jm(a3) {
  if (a3 === void 0) return {};
  const r = {};
  return Object.keys(a3).filter((o) => !(o.match(/^on[A-Z]/) && typeof a3[o] == "function")).forEach((o) => {
    r[o] = a3[o];
  }), r;
}
function s0(a3) {
  const { getSlotProps: r, additionalProps: o, externalSlotProps: s, externalForwardedProps: c, className: f } = a3;
  if (!r) {
    const D = xt(o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), M = { ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, S = { ...o, ...c, ...s };
    return D.length > 0 && (S.className = D), Object.keys(M).length > 0 && (S.style = M), { props: S, internalRef: void 0 };
  }
  const p = vr({ ...c, ...s }), h = Jm(s), g = Jm(c), m = r(p), x = xt(m == null ? void 0 : m.className, o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, s == null ? void 0 : s.className), T = { ...m == null ? void 0 : m.style, ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...s == null ? void 0 : s.style }, E = { ...m, ...o, ...g, ...h };
  return x.length > 0 && (E.className = x), Object.keys(T).length > 0 && (E.style = T), { props: E, internalRef: m.ref };
}
function u0(a3, r, o) {
  return typeof a3 == "function" ? a3(r, o) : a3;
}
function dn(a3) {
  var _a;
  const { elementType: r, externalSlotProps: o, ownerState: s, skipResolvingSlotProps: c = false, ...f } = a3, p = c ? {} : u0(o, s), { props: h, internalRef: g } = s0({ ...f, externalSlotProps: p }), m = Al(g, p == null ? void 0 : p.ref, (_a = a3.additionalProps) == null ? void 0 : _a.ref);
  return o0(r, { ...h, ref: m }, s);
}
function c0(a3) {
  var _a;
  return parseInt(O.version, 10) >= 19 ? ((_a = a3 == null ? void 0 : a3.props) == null ? void 0 : _a.ref) || null : (a3 == null ? void 0 : a3.ref) || null;
}
const xS = O.createContext(), Df = () => O.useContext(xS) ?? false, TS = O.createContext(void 0);
function CS(a3) {
  const { theme: r, name: o, props: s } = a3;
  if (!r || !r.components || !r.components[o]) return s;
  const c = r.components[o];
  return c.defaultProps ? os(c.defaultProps, s) : !c.styleOverrides && !c.variants ? os(c, s) : s;
}
function ES({ props: a3, name: r }) {
  const o = O.useContext(TS);
  return CS({ props: a3, name: r, theme: { components: o } });
}
const Im = { theme: void 0 };
function AS(a3) {
  let r, o;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== o) && (Im.theme = c.theme, f = Ig(a3(Im)), r = f, o = c.theme), f;
  };
}
function wS(a3 = "") {
  function r(...s) {
    if (!s.length) return "";
    const c = s[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a3 ? `${a3}-` : ""}${c}${r(...s.slice(1))})` : `, ${c}`;
  }
  return (s, ...c) => `var(--${a3 ? `${a3}-` : ""}${s}${r(...c)})`;
}
const tg = (a3, r, o, s = []) => {
  let c = a3;
  r.forEach((f, p) => {
    p === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = o : c && typeof c == "object" && (c[f] = o) : c && typeof c == "object" && (c[f] || (c[f] = s.includes(f) ? [] : {}), c = c[f]);
  });
}, RS = (a3, r, o) => {
  function s(c, f = [], p = []) {
    Object.entries(c).forEach(([h, g]) => {
      (!o || o && !o([...f, h])) && g != null && (typeof g == "object" && Object.keys(g).length > 0 ? s(g, [...f, h], Array.isArray(g) ? [...p, h] : p) : r([...f, h], g, p));
    });
  }
  s(a3);
}, MS = (a3, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) => a3.includes(s)) || a3[a3.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Xc(a3, r) {
  const { prefix: o, shouldSkipGeneratingVar: s } = r || {}, c = {}, f = {}, p = {};
  return RS(a3, (h, g, m) => {
    if ((typeof g == "string" || typeof g == "number") && (!s || !s(h, g))) {
      const x = `--${o ? `${o}-` : ""}${h.join("-")}`, T = MS(h, g);
      Object.assign(c, { [x]: T }), tg(f, h, `var(${x})`, m), tg(p, h, `var(${x}, ${T})`, m);
    }
  }, (h) => h[0] === "vars"), { css: c, vars: f, varsWithDefaults: p };
}
function OS(a3, r = {}) {
  const { getSelector: o = N, disableCssColorScheme: s, colorSchemeSelector: c } = r, { colorSchemes: f = {}, components: p, defaultColorScheme: h = "light", ...g } = a3, { vars: m, css: x, varsWithDefaults: T } = Xc(g, r);
  let E = T;
  const D = {}, { [h]: M, ...S } = f;
  if (Object.entries(S || {}).forEach(([$, H]) => {
    const { vars: w, css: Z, varsWithDefaults: K } = Xc(H, r);
    E = mn(E, K), D[$] = { css: Z, vars: w };
  }), M) {
    const { css: $, vars: H, varsWithDefaults: w } = Xc(M, r);
    E = mn(E, w), D[h] = { css: $, vars: H };
  }
  function N($, H) {
    var _a, _b2;
    let w = c;
    if (c === "class" && (w = ".%s"), c === "data" && (w = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (w = `[${c}="%s"]`), $) {
      if (w === "media") return a3.defaultColorScheme === $ ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = f[$]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || $})`]: { ":root": H } };
      if (w) return a3.defaultColorScheme === $ ? `:root, ${w.replace("%s", String($))}` : w.replace("%s", String($));
    }
    return ":root";
  }
  return { vars: E, generateThemeVars: () => {
    let $ = { ...m };
    return Object.entries(D).forEach(([, { vars: H }]) => {
      $ = mn($, H);
    }), $;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const $ = [], H = a3.defaultColorScheme || "light";
    function w(rt, Q) {
      Object.keys(Q).length && $.push(typeof rt == "string" ? { [rt]: { ...Q } } : rt);
    }
    w(o(void 0, { ...x }), x);
    const { [H]: Z, ...K } = D;
    if (Z) {
      const { css: rt } = Z, Q = (_b2 = (_a = f[H]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, v = !s && Q ? { colorScheme: Q, ...rt } : { ...rt };
      w(o(H, { ...v }), v);
    }
    return Object.entries(K).forEach(([rt, { css: Q }]) => {
      var _a2, _b3;
      const v = (_b3 = (_a2 = f[rt]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, P = !s && v ? { colorScheme: v, ...Q } : { ...Q };
      w(o(rt, { ...P }), P);
    }), $;
  } };
}
function zS(a3) {
  return function(o) {
    return a3 === "media" ? `@media (prefers-color-scheme: ${o})` : a3 ? a3.startsWith("data-") && !a3.includes("%s") ? `[${a3}="${o}"] &` : a3 === "class" ? `.${o} &` : a3 === "data" ? `[data-${o}] &` : `${a3.replace("%s", o)} &` : "&";
  };
}
function f0() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: wi.white, default: wi.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const _S = f0();
function d0() {
  return { text: { primary: wi.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: wi.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const eg = d0();
function ng(a3, r, o, s) {
  const c = s.light || s, f = s.dark || s * 1.5;
  a3[r] || (a3.hasOwnProperty(o) ? a3[r] = a3[o] : r === "light" ? a3.light = Wa(a3.main, c) : r === "dark" && (a3.dark = Fa(a3.main, f)));
}
function DS(a3 = "light") {
  return a3 === "dark" ? { main: ur[200], light: ur[50], dark: ur[400] } : { main: ur[700], light: ur[400], dark: ur[800] };
}
function kS(a3 = "light") {
  return a3 === "dark" ? { main: sr[200], light: sr[50], dark: sr[400] } : { main: sr[500], light: sr[300], dark: sr[700] };
}
function BS(a3 = "light") {
  return a3 === "dark" ? { main: or[500], light: or[300], dark: or[700] } : { main: or[700], light: or[400], dark: or[800] };
}
function NS(a3 = "light") {
  return a3 === "dark" ? { main: cr[400], light: cr[300], dark: cr[700] } : { main: cr[700], light: cr[500], dark: cr[900] };
}
function US(a3 = "light") {
  return a3 === "dark" ? { main: fr[400], light: fr[300], dark: fr[700] } : { main: fr[800], light: fr[500], dark: fr[900] };
}
function HS(a3 = "light") {
  return a3 === "dark" ? { main: vi[400], light: vi[300], dark: vi[700] } : { main: "#ed6c02", light: vi[500], dark: vi[900] };
}
function kf(a3) {
  const { mode: r = "light", contrastThreshold: o = 3, tonalOffset: s = 0.2, ...c } = a3, f = a3.primary || DS(r), p = a3.secondary || kS(r), h = a3.error || BS(r), g = a3.info || NS(r), m = a3.success || US(r), x = a3.warning || HS(r);
  function T(S) {
    return dS(S, eg.text.primary) >= o ? eg.text.primary : _S.text.primary;
  }
  const E = ({ color: S, name: N, mainShade: B = 500, lightShade: G = 300, darkShade: $ = 700 }) => {
    if (S = { ...S }, !S.main && S[B] && (S.main = S[B]), !S.hasOwnProperty("main")) throw new Error(Cl(11, N ? ` (${N})` : "", B));
    if (typeof S.main != "string") throw new Error(Cl(12, N ? ` (${N})` : "", JSON.stringify(S.main)));
    return ng(S, "light", G, s), ng(S, "dark", $, s), S.contrastText || (S.contrastText = T(S.main)), S;
  };
  let D;
  return r === "light" ? D = f0() : r === "dark" && (D = d0()), mn({ common: { ...wi }, mode: r, primary: E({ color: f, name: "primary" }), secondary: E({ color: p, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: E({ color: h, name: "error" }), warning: E({ color: x, name: "warning" }), info: E({ color: g, name: "info" }), success: E({ color: m, name: "success" }), grey: Fv, contrastThreshold: o, getContrastText: T, augmentColor: E, tonalOffset: s, ...D }, c);
}
function jS(a3) {
  const r = {};
  return Object.entries(a3).forEach((s) => {
    const [c, f] = s;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function LS(a3, r) {
  return { toolbar: { minHeight: 56, [a3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [a3.up("sm")]: { minHeight: 64 } }, ...r };
}
function $S(a3) {
  return Math.round(a3 * 1e5) / 1e5;
}
const ag = { textTransform: "uppercase" }, lg = '"Roboto", "Helvetica", "Arial", sans-serif';
function qS(a3, r) {
  const { fontFamily: o = lg, fontSize: s = 14, fontWeightLight: c = 300, fontWeightRegular: f = 400, fontWeightMedium: p = 500, fontWeightBold: h = 700, htmlFontSize: g = 16, allVariants: m, pxToRem: x, ...T } = typeof r == "function" ? r(a3) : r, E = s / 14, D = x || ((N) => `${N / g * E}rem`), M = (N, B, G, $, H) => ({ fontFamily: o, fontWeight: N, fontSize: D(B), lineHeight: G, ...o === lg ? { letterSpacing: `${$S($ / B)}em` } : {}, ...H, ...m }), S = { h1: M(c, 96, 1.167, -1.5), h2: M(c, 60, 1.2, -0.5), h3: M(f, 48, 1.167, 0), h4: M(f, 34, 1.235, 0.25), h5: M(f, 24, 1.334, 0), h6: M(p, 20, 1.6, 0.15), subtitle1: M(f, 16, 1.75, 0.15), subtitle2: M(p, 14, 1.57, 0.1), body1: M(f, 16, 1.5, 0.15), body2: M(f, 14, 1.43, 0.15), button: M(p, 14, 1.75, 0.4, ag), caption: M(f, 12, 1.66, 0.4), overline: M(f, 12, 2.66, 1, ag), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return mn({ htmlFontSize: g, pxToRem: D, fontFamily: o, fontSize: s, fontWeightLight: c, fontWeightRegular: f, fontWeightMedium: p, fontWeightBold: h, ...S }, T, { clone: false });
}
const YS = 0.2, GS = 0.14, VS = 0.12;
function se(...a3) {
  return [`${a3[0]}px ${a3[1]}px ${a3[2]}px ${a3[3]}px rgba(0,0,0,${YS})`, `${a3[4]}px ${a3[5]}px ${a3[6]}px ${a3[7]}px rgba(0,0,0,${GS})`, `${a3[8]}px ${a3[9]}px ${a3[10]}px ${a3[11]}px rgba(0,0,0,${VS})`].join(",");
}
const XS = ["none", se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], QS = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, ZS = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function rg(a3) {
  return `${Math.round(a3)}ms`;
}
function KS(a3) {
  if (!a3) return 0;
  const r = a3 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function PS(a3) {
  const r = { ...QS, ...a3.easing }, o = { ...ZS, ...a3.duration };
  return { getAutoHeightDuration: KS, create: (c = ["all"], f = {}) => {
    const { duration: p = o.standard, easing: h = r.easeInOut, delay: g = 0, ...m } = f;
    return (Array.isArray(c) ? c : [c]).map((x) => `${x} ${typeof p == "string" ? p : rg(p)} ${h} ${typeof g == "string" ? g : rg(g)}`).join(",");
  }, ...a3, easing: r, duration: o };
}
const FS = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function WS(a3) {
  return Jn(a3) || typeof a3 > "u" || typeof a3 == "string" || typeof a3 == "boolean" || typeof a3 == "number" || Array.isArray(a3);
}
function p0(a3 = {}) {
  const r = { ...a3 };
  function o(s) {
    const c = Object.entries(s);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !WS(h) || p.startsWith("unstable_") ? delete s[p] : Jn(h) && (s[p] = { ...h }, o(s[p]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function af(a3 = {}, ...r) {
  const { breakpoints: o, mixins: s = {}, spacing: c, palette: f = {}, transitions: p = {}, typography: h = {}, shape: g, ...m } = a3;
  if (a3.vars) throw new Error(Cl(20));
  const x = kf(f), T = wf(a3);
  let E = mn(T, { mixins: LS(T.breakpoints, s), palette: x, shadows: XS.slice(), typography: qS(x, h), transitions: PS(p), zIndex: { ...FS } });
  return E = mn(E, m), E = r.reduce((D, M) => mn(D, M), E), E.unstable_sxConfig = { ...Bi, ...m == null ? void 0 : m.unstable_sxConfig }, E.unstable_sx = function(M) {
    return El({ sx: M, theme: this });
  }, E.toRuntimeSource = p0, E;
}
function lf(a3) {
  let r;
  return a3 < 1 ? r = 5.11916 * a3 ** 2 : r = 4.5 * Math.log(a3 + 1) + 2, Math.round(r * 10) / 1e3;
}
const JS = [...Array(25)].map((a3, r) => {
  if (r === 0) return "none";
  const o = lf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function h0(a3) {
  return { inputPlaceholder: a3 === "dark" ? 0.5 : 0.42, inputUnderline: a3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: a3 === "dark" ? 0.2 : 0.12, switchTrack: a3 === "dark" ? 0.3 : 0.38 };
}
function m0(a3) {
  return a3 === "dark" ? JS : [];
}
function IS(a3) {
  const { palette: r = { mode: "light" }, opacity: o, overlays: s, ...c } = a3, f = kf(r);
  return { palette: f, opacity: { ...h0(f.mode), ...o }, overlays: s || m0(f.mode), ...c };
}
function t2(a3) {
  var _a;
  return !!a3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a3[0].match(/sxConfig$/) || a3[0] === "palette" && !!((_a = a3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const e2 = (a3) => [...[...Array(25)].map((r, o) => `--${a3 ? `${a3}-` : ""}overlays-${o}`), `--${a3 ? `${a3}-` : ""}palette-AppBar-darkBg`, `--${a3 ? `${a3}-` : ""}palette-AppBar-darkColor`], n2 = (a3) => (r, o) => {
  const s = a3.rootSelector || ":root", c = a3.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (f = `[${c}="%s"]`), a3.defaultColorScheme === r) {
    if (r === "dark") {
      const p = {};
      return e2(a3.cssVarPrefix).forEach((h) => {
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
function a2(a3, r) {
  r.forEach((o) => {
    a3[o] || (a3[o] = {});
  });
}
function q(a3, r, o) {
  !a3[r] && o && (a3[r] = o);
}
function xi(a3) {
  return typeof a3 != "string" || !a3.startsWith("hsl") ? a3 : e0(a3);
}
function va(a3, r) {
  `${r}Channel` in a3 || (a3[`${r}Channel`] = Si(xi(a3[r])));
}
function l2(a3) {
  return typeof a3 == "number" ? `${a3}px` : typeof a3 == "string" || typeof a3 == "function" || Array.isArray(a3) ? a3 : "8px";
}
const Pn = (a3) => {
  try {
    return a3();
  } catch {
  }
}, r2 = (a3 = "mui") => wS(a3);
function Qc(a3, r, o, s) {
  if (!r) return;
  r = r === true ? {} : r;
  const c = s === "dark" ? "dark" : "light";
  if (!o) {
    a3[s] = IS({ ...r, palette: { mode: c, ...r == null ? void 0 : r.palette } });
    return;
  }
  const { palette: f, ...p } = af({ ...o, palette: { mode: c, ...r == null ? void 0 : r.palette } });
  return a3[s] = { ...r, palette: f, opacity: { ...h0(c), ...r == null ? void 0 : r.opacity }, overlays: (r == null ? void 0 : r.overlays) || m0(c) }, p;
}
function i2(a3 = {}, ...r) {
  const { colorSchemes: o = { light: true }, defaultColorScheme: s, disableCssColorScheme: c = false, cssVarPrefix: f = "mui", shouldSkipGeneratingVar: p = t2, colorSchemeSelector: h = o.light && o.dark ? "media" : void 0, rootSelector: g = ":root", ...m } = a3, x = Object.keys(o)[0], T = s || (o.light && x !== "light" ? "light" : x), E = r2(f), { [T]: D, light: M, dark: S, ...N } = o, B = { ...N };
  let G = D;
  if ((T === "dark" && !("dark" in o) || T === "light" && !("light" in o)) && (G = true), !G) throw new Error(Cl(21, T));
  const $ = Qc(B, G, m, T);
  M && !B.light && Qc(B, M, void 0, "light"), S && !B.dark && Qc(B, S, void 0, "dark");
  let H = { defaultColorScheme: T, ...$, cssVarPrefix: f, colorSchemeSelector: h, rootSelector: g, getCssVar: E, colorSchemes: B, font: { ...jS($.typography), ...$.font }, spacing: l2(m.spacing) };
  Object.keys(H.colorSchemes).forEach((Q) => {
    const v = H.colorSchemes[Q].palette, P = (I) => {
      const at = I.split("-"), W = at[1], tt = at[2];
      return E(I, v[W][tt]);
    };
    if (v.mode === "light" && (q(v.common, "background", "#fff"), q(v.common, "onBackground", "#000")), v.mode === "dark" && (q(v.common, "background", "#000"), q(v.common, "onBackground", "#fff")), a2(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      q(v.Alert, "errorColor", te(v.error.light, 0.6)), q(v.Alert, "infoColor", te(v.info.light, 0.6)), q(v.Alert, "successColor", te(v.success.light, 0.6)), q(v.Alert, "warningColor", te(v.warning.light, 0.6)), q(v.Alert, "errorFilledBg", P("palette-error-main")), q(v.Alert, "infoFilledBg", P("palette-info-main")), q(v.Alert, "successFilledBg", P("palette-success-main")), q(v.Alert, "warningFilledBg", P("palette-warning-main")), q(v.Alert, "errorFilledColor", Pn(() => v.getContrastText(v.error.main))), q(v.Alert, "infoFilledColor", Pn(() => v.getContrastText(v.info.main))), q(v.Alert, "successFilledColor", Pn(() => v.getContrastText(v.success.main))), q(v.Alert, "warningFilledColor", Pn(() => v.getContrastText(v.warning.main))), q(v.Alert, "errorStandardBg", ee(v.error.light, 0.9)), q(v.Alert, "infoStandardBg", ee(v.info.light, 0.9)), q(v.Alert, "successStandardBg", ee(v.success.light, 0.9)), q(v.Alert, "warningStandardBg", ee(v.warning.light, 0.9)), q(v.Alert, "errorIconColor", P("palette-error-main")), q(v.Alert, "infoIconColor", P("palette-info-main")), q(v.Alert, "successIconColor", P("palette-success-main")), q(v.Alert, "warningIconColor", P("palette-warning-main")), q(v.AppBar, "defaultBg", P("palette-grey-100")), q(v.Avatar, "defaultBg", P("palette-grey-400")), q(v.Button, "inheritContainedBg", P("palette-grey-300")), q(v.Button, "inheritContainedHoverBg", P("palette-grey-A100")), q(v.Chip, "defaultBorder", P("palette-grey-400")), q(v.Chip, "defaultAvatarColor", P("palette-grey-700")), q(v.Chip, "defaultIconColor", P("palette-grey-700")), q(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), q(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), q(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), q(v.LinearProgress, "primaryBg", ee(v.primary.main, 0.62)), q(v.LinearProgress, "secondaryBg", ee(v.secondary.main, 0.62)), q(v.LinearProgress, "errorBg", ee(v.error.main, 0.62)), q(v.LinearProgress, "infoBg", ee(v.info.main, 0.62)), q(v.LinearProgress, "successBg", ee(v.success.main, 0.62)), q(v.LinearProgress, "warningBg", ee(v.warning.main, 0.62)), q(v.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), q(v.Slider, "primaryTrack", ee(v.primary.main, 0.62)), q(v.Slider, "secondaryTrack", ee(v.secondary.main, 0.62)), q(v.Slider, "errorTrack", ee(v.error.main, 0.62)), q(v.Slider, "infoTrack", ee(v.info.main, 0.62)), q(v.Slider, "successTrack", ee(v.success.main, 0.62)), q(v.Slider, "warningTrack", ee(v.warning.main, 0.62));
      const I = Qo(v.background.default, 0.8);
      q(v.SnackbarContent, "bg", I), q(v.SnackbarContent, "color", Pn(() => v.getContrastText(I))), q(v.SpeedDialAction, "fabHoverBg", Qo(v.background.paper, 0.15)), q(v.StepConnector, "border", P("palette-grey-400")), q(v.StepContent, "border", P("palette-grey-400")), q(v.Switch, "defaultColor", P("palette-common-white")), q(v.Switch, "defaultDisabledColor", P("palette-grey-100")), q(v.Switch, "primaryDisabledColor", ee(v.primary.main, 0.62)), q(v.Switch, "secondaryDisabledColor", ee(v.secondary.main, 0.62)), q(v.Switch, "errorDisabledColor", ee(v.error.main, 0.62)), q(v.Switch, "infoDisabledColor", ee(v.info.main, 0.62)), q(v.Switch, "successDisabledColor", ee(v.success.main, 0.62)), q(v.Switch, "warningDisabledColor", ee(v.warning.main, 0.62)), q(v.TableCell, "border", ee(Xo(v.divider, 1), 0.88)), q(v.Tooltip, "bg", Xo(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      q(v.Alert, "errorColor", ee(v.error.light, 0.6)), q(v.Alert, "infoColor", ee(v.info.light, 0.6)), q(v.Alert, "successColor", ee(v.success.light, 0.6)), q(v.Alert, "warningColor", ee(v.warning.light, 0.6)), q(v.Alert, "errorFilledBg", P("palette-error-dark")), q(v.Alert, "infoFilledBg", P("palette-info-dark")), q(v.Alert, "successFilledBg", P("palette-success-dark")), q(v.Alert, "warningFilledBg", P("palette-warning-dark")), q(v.Alert, "errorFilledColor", Pn(() => v.getContrastText(v.error.dark))), q(v.Alert, "infoFilledColor", Pn(() => v.getContrastText(v.info.dark))), q(v.Alert, "successFilledColor", Pn(() => v.getContrastText(v.success.dark))), q(v.Alert, "warningFilledColor", Pn(() => v.getContrastText(v.warning.dark))), q(v.Alert, "errorStandardBg", te(v.error.light, 0.9)), q(v.Alert, "infoStandardBg", te(v.info.light, 0.9)), q(v.Alert, "successStandardBg", te(v.success.light, 0.9)), q(v.Alert, "warningStandardBg", te(v.warning.light, 0.9)), q(v.Alert, "errorIconColor", P("palette-error-main")), q(v.Alert, "infoIconColor", P("palette-info-main")), q(v.Alert, "successIconColor", P("palette-success-main")), q(v.Alert, "warningIconColor", P("palette-warning-main")), q(v.AppBar, "defaultBg", P("palette-grey-900")), q(v.AppBar, "darkBg", P("palette-background-paper")), q(v.AppBar, "darkColor", P("palette-text-primary")), q(v.Avatar, "defaultBg", P("palette-grey-600")), q(v.Button, "inheritContainedBg", P("palette-grey-800")), q(v.Button, "inheritContainedHoverBg", P("palette-grey-700")), q(v.Chip, "defaultBorder", P("palette-grey-700")), q(v.Chip, "defaultAvatarColor", P("palette-grey-300")), q(v.Chip, "defaultIconColor", P("palette-grey-300")), q(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), q(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), q(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), q(v.LinearProgress, "primaryBg", te(v.primary.main, 0.5)), q(v.LinearProgress, "secondaryBg", te(v.secondary.main, 0.5)), q(v.LinearProgress, "errorBg", te(v.error.main, 0.5)), q(v.LinearProgress, "infoBg", te(v.info.main, 0.5)), q(v.LinearProgress, "successBg", te(v.success.main, 0.5)), q(v.LinearProgress, "warningBg", te(v.warning.main, 0.5)), q(v.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), q(v.Slider, "primaryTrack", te(v.primary.main, 0.5)), q(v.Slider, "secondaryTrack", te(v.secondary.main, 0.5)), q(v.Slider, "errorTrack", te(v.error.main, 0.5)), q(v.Slider, "infoTrack", te(v.info.main, 0.5)), q(v.Slider, "successTrack", te(v.success.main, 0.5)), q(v.Slider, "warningTrack", te(v.warning.main, 0.5));
      const I = Qo(v.background.default, 0.98);
      q(v.SnackbarContent, "bg", I), q(v.SnackbarContent, "color", Pn(() => v.getContrastText(I))), q(v.SpeedDialAction, "fabHoverBg", Qo(v.background.paper, 0.15)), q(v.StepConnector, "border", P("palette-grey-600")), q(v.StepContent, "border", P("palette-grey-600")), q(v.Switch, "defaultColor", P("palette-grey-300")), q(v.Switch, "defaultDisabledColor", P("palette-grey-600")), q(v.Switch, "primaryDisabledColor", te(v.primary.main, 0.55)), q(v.Switch, "secondaryDisabledColor", te(v.secondary.main, 0.55)), q(v.Switch, "errorDisabledColor", te(v.error.main, 0.55)), q(v.Switch, "infoDisabledColor", te(v.info.main, 0.55)), q(v.Switch, "successDisabledColor", te(v.success.main, 0.55)), q(v.Switch, "warningDisabledColor", te(v.warning.main, 0.55)), q(v.TableCell, "border", te(Xo(v.divider, 1), 0.68)), q(v.Tooltip, "bg", Xo(v.grey[700], 0.92));
    }
    va(v.background, "default"), va(v.background, "paper"), va(v.common, "background"), va(v.common, "onBackground"), va(v, "divider"), Object.keys(v).forEach((I) => {
      const at = v[I];
      I !== "tonalOffset" && at && typeof at == "object" && (at.main && q(v[I], "mainChannel", Si(xi(at.main))), at.light && q(v[I], "lightChannel", Si(xi(at.light))), at.dark && q(v[I], "darkChannel", Si(xi(at.dark))), at.contrastText && q(v[I], "contrastTextChannel", Si(xi(at.contrastText))), I === "text" && (va(v[I], "primary"), va(v[I], "secondary")), I === "action" && (at.active && va(v[I], "active"), at.selected && va(v[I], "selected")));
    });
  }), H = r.reduce((Q, v) => mn(Q, v), H);
  const w = { prefix: f, disableCssColorScheme: c, shouldSkipGeneratingVar: p, getSelector: n2(H) }, { vars: Z, generateThemeVars: K, generateStyleSheets: rt } = OS(H, w);
  return H.vars = Z, Object.entries(H.colorSchemes[H.defaultColorScheme]).forEach(([Q, v]) => {
    H[Q] = v;
  }), H.generateThemeVars = K, H.generateStyleSheets = rt, H.generateSpacing = function() {
    return Pg(m.spacing, Ef(this));
  }, H.getColorSchemeSelector = zS(h), H.spacing = H.generateSpacing(), H.shouldSkipGeneratingVar = p, H.unstable_sxConfig = { ...Bi, ...m == null ? void 0 : m.unstable_sxConfig }, H.unstable_sx = function(v) {
    return El({ sx: v, theme: this });
  }, H.toRuntimeSource = p0, H;
}
function ig(a3, r, o) {
  a3.colorSchemes && o && (a3.colorSchemes[r] = { ...o !== true && o, palette: kf({ ...o === true ? {} : o.palette, mode: r }) });
}
function g0(a3 = {}, ...r) {
  const { palette: o, cssVariables: s = false, colorSchemes: c = o ? void 0 : { light: true }, defaultColorScheme: f = o == null ? void 0 : o.mode, ...p } = a3, h = f || "light", g = c == null ? void 0 : c[h], m = { ...c, ...o ? { [h]: { ...typeof g != "boolean" && g, palette: o } } : void 0 };
  if (s === false) {
    if (!("colorSchemes" in a3)) return af(a3, ...r);
    let x = o;
    "palette" in a3 || m[h] && (m[h] !== true ? x = m[h].palette : h === "dark" && (x = { mode: "dark" }));
    const T = af({ ...a3, palette: x }, ...r);
    return T.defaultColorScheme = h, T.colorSchemes = m, T.palette.mode === "light" && (T.colorSchemes.light = { ...m.light !== true && m.light, palette: T.palette }, ig(T, "dark", m.dark)), T.palette.mode === "dark" && (T.colorSchemes.dark = { ...m.dark !== true && m.dark, palette: T.palette }, ig(T, "light", m.light)), T;
  }
  return !o && !("light" in m) && h === "light" && (m.light = true), i2({ ...p, colorSchemes: m, defaultColorScheme: h, ...typeof s != "boolean" && s }, ...r);
}
const Bf = g0();
function Rs() {
  const a3 = Rf(Bf);
  return a3[hs] || a3;
}
function o2({ props: a3, name: r }) {
  return uS({ props: a3, name: r, defaultTheme: Bf, themeId: hs });
}
function Nf(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
const Uf = (a3) => Nf(a3) && a3 !== "classes", bt = aS({ themeId: hs, defaultTheme: Bf, rootShouldForwardProp: Uf });
function s2() {
  return Fg;
}
const Vt = AS;
function Ce(a3) {
  return ES(a3);
}
function u2(a3) {
  return de("MuiSvgIcon", a3);
}
ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const c2 = (a3) => {
  const { color: r, fontSize: o, classes: s } = a3, c = { root: ["root", r !== "inherit" && `color${gt(r)}`, `fontSize${gt(o)}`] };
  return be(c, u2, s);
}, f2 = bt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.color !== "inherit" && r[`color${gt(o.color)}`], r[`fontSize${gt(o.fontSize)}`]];
} })(Vt(({ theme: a3 }) => {
  var _a, _b2, _c, _d, _e, _f2, _g2, _h, _i2, _j, _k, _l, _m2, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = a3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c = (_b2 = (a3.vars ?? a3).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = a3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g2 = a3.typography) == null ? void 0 : _g2.pxToRem) == null ? void 0 : _h.call(_g2, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = a3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((a3.vars ?? a3).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a2, _b3;
    return { props: { color: r }, style: { color: (_b3 = (_a2 = (a3.vars ?? a3).palette) == null ? void 0 : _a2[r]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k = (a3.vars ?? a3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m2 = (a3.vars ?? a3).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), rf = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiSvgIcon" }), { children: c, className: f, color: p = "inherit", component: h = "svg", fontSize: g = "medium", htmlColor: m, inheritViewBox: x = false, titleAccess: T, viewBox: E = "0 0 24 24", ...D } = s, M = O.isValidElement(c) && c.type === "svg", S = { ...s, color: p, component: h, fontSize: g, instanceFontSize: r.fontSize, inheritViewBox: x, viewBox: E, hasSvgAsChild: M }, N = {};
  x || (N.viewBox = E);
  const B = c2(S);
  return U.jsxs(f2, { as: h, className: xt(B.root, f), focusable: "false", color: m, "aria-hidden": T ? void 0 : true, role: T ? "img" : void 0, ref: o, ...N, ...D, ...M && c.props, ownerState: S, children: [M ? c.props.children : c, T ? U.jsx("title", { children: T }) : null] });
});
rf.muiName = "SvgIcon";
function Ca(a3, r) {
  function o(s, c) {
    return U.jsx(rf, { "data-testid": `${r}Icon`, ref: c, ...s, children: a3 });
  }
  return o.muiName = rf.muiName, O.memo(O.forwardRef(o));
}
function y0(a3, r) {
  if (a3 == null) return {};
  var o = {};
  for (var s in a3) if ({}.hasOwnProperty.call(a3, s)) {
    if (r.indexOf(s) !== -1) continue;
    o[s] = a3[s];
  }
  return o;
}
function of(a3, r) {
  return of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, of(a3, r);
}
function v0(a3, r) {
  a3.prototype = Object.create(r.prototype), a3.prototype.constructor = a3, of(a3, r);
}
var d2 = zg();
const Zo = Og(d2), og = { disabled: false }, us = In.createContext(null);
var p2 = function(r) {
  return r.scrollTop;
}, Ti = "unmounted", bl = "exited", Sl = "entering", mr = "entered", sf = "exiting", Ea = function(a3) {
  v0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = c, h = p && !p.isMounting ? s.enter : s.appear, g;
    return f.appearStatus = null, s.in ? h ? (g = bl, f.appearStatus = Sl) : g = mr : s.unmountOnExit || s.mountOnEnter ? g = Ti : g = bl, f.state = { status: g }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var p = c.in;
    return p && f.status === Ti ? { status: bl } : null;
  };
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, o.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var p = this.state.status;
      this.props.in ? p !== Sl && p !== mr && (f = Sl) : (p === Sl || p === mr) && (f = sf);
    }
    this.updateStatus(false, f);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var c = this.props.timeout, f, p, h;
    return f = p = h = c, c != null && typeof c != "number" && (f = c.exit, p = c.enter, h = c.appear !== void 0 ? c.appear : p), { exit: f, enter: p, appear: h };
  }, o.updateStatus = function(c, f) {
    if (c === void 0 && (c = false), f !== null) if (this.cancelNextCallback(), f === Sl) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var p = this.props.nodeRef ? this.props.nodeRef.current : Zo.findDOMNode(this);
        p && p2(p);
      }
      this.performEnter(c);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === bl && this.setState({ status: Ti });
  }, o.performEnter = function(c) {
    var f = this, p = this.props.enter, h = this.context ? this.context.isMounting : c, g = this.props.nodeRef ? [h] : [Zo.findDOMNode(this), h], m = g[0], x = g[1], T = this.getTimeouts(), E = h ? T.appear : T.enter;
    if (!c && !p || og.disabled) {
      this.safeSetState({ status: mr }, function() {
        f.props.onEntered(m);
      });
      return;
    }
    this.props.onEnter(m, x), this.safeSetState({ status: Sl }, function() {
      f.props.onEntering(m, x), f.onTransitionEnd(E, function() {
        f.safeSetState({ status: mr }, function() {
          f.props.onEntered(m, x);
        });
      });
    });
  }, o.performExit = function() {
    var c = this, f = this.props.exit, p = this.getTimeouts(), h = this.props.nodeRef ? void 0 : Zo.findDOMNode(this);
    if (!f || og.disabled) {
      this.safeSetState({ status: bl }, function() {
        c.props.onExited(h);
      });
      return;
    }
    this.props.onExit(h), this.safeSetState({ status: sf }, function() {
      c.props.onExiting(h), c.onTransitionEnd(p.exit, function() {
        c.safeSetState({ status: bl }, function() {
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
    var p = this.props.nodeRef ? this.props.nodeRef.current : Zo.findDOMNode(this), h = c == null && !this.props.addEndListener;
    if (!p || h) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var g = this.props.nodeRef ? [this.nextCallback] : [p, this.nextCallback], m = g[0], x = g[1];
      this.props.addEndListener(m, x);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, o.render = function() {
    var c = this.state.status;
    if (c === Ti) return null;
    var f = this.props, p = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var h = y0(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return In.createElement(us.Provider, { value: null }, typeof p == "function" ? p(c, h) : In.cloneElement(In.Children.only(p), h));
  }, r;
}(In.Component);
Ea.contextType = us;
Ea.propTypes = {};
function dr() {
}
Ea.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: dr, onEntering: dr, onEntered: dr, onExit: dr, onExiting: dr, onExited: dr };
Ea.UNMOUNTED = Ti;
Ea.EXITED = bl;
Ea.ENTERING = Sl;
Ea.ENTERED = mr;
Ea.EXITING = sf;
function h2(a3) {
  if (a3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a3;
}
function Hf(a3, r) {
  var o = function(f) {
    return r && O.isValidElement(f) ? r(f) : f;
  }, s = /* @__PURE__ */ Object.create(null);
  return a3 && O.Children.map(a3, function(c) {
    return c;
  }).forEach(function(c) {
    s[c.key] = o(c);
  }), s;
}
function m2(a3, r) {
  a3 = a3 || {}, r = r || {};
  function o(x) {
    return x in r ? r[x] : a3[x];
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
function Tl(a3, r, o) {
  return o[r] != null ? o[r] : a3.props[r];
}
function g2(a3, r) {
  return Hf(a3.children, function(o) {
    return O.cloneElement(o, { onExited: r.bind(null, o), in: true, appear: Tl(o, "appear", a3), enter: Tl(o, "enter", a3), exit: Tl(o, "exit", a3) });
  });
}
function y2(a3, r, o) {
  var s = Hf(a3.children), c = m2(r, s);
  return Object.keys(c).forEach(function(f) {
    var p = c[f];
    if (O.isValidElement(p)) {
      var h = f in r, g = f in s, m = r[f], x = O.isValidElement(m) && !m.props.in;
      g && (!h || x) ? c[f] = O.cloneElement(p, { onExited: o.bind(null, p), in: true, exit: Tl(p, "exit", a3), enter: Tl(p, "enter", a3) }) : !g && h && !x ? c[f] = O.cloneElement(p, { in: false }) : g && h && O.isValidElement(m) && (c[f] = O.cloneElement(p, { onExited: o.bind(null, p), in: m.props.in, exit: Tl(p, "exit", a3), enter: Tl(p, "enter", a3) }));
    }
  }), c;
}
var v2 = Object.values || function(a3) {
  return Object.keys(a3).map(function(r) {
    return a3[r];
  });
}, b2 = { component: "div", childFactory: function(r) {
  return r;
} }, jf = function(a3) {
  v0(r, a3);
  function r(s, c) {
    var f;
    f = a3.call(this, s, c) || this;
    var p = f.handleExited.bind(h2(f));
    return f.state = { contextValue: { isMounting: true }, handleExited: p, firstRender: true }, f;
  }
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, o.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(c, f) {
    var p = f.children, h = f.handleExited, g = f.firstRender;
    return { children: g ? g2(c, h) : y2(c, p, h), firstRender: false };
  }, o.handleExited = function(c, f) {
    var p = Hf(this.props.children);
    c.key in p || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(h) {
      var g = ls({}, h.children);
      return delete g[c.key], { children: g };
    }));
  }, o.render = function() {
    var c = this.props, f = c.component, p = c.childFactory, h = y0(c, ["component", "childFactory"]), g = this.state.contextValue, m = v2(this.state.children).map(p);
    return delete h.appear, delete h.enter, delete h.exit, f === null ? In.createElement(us.Provider, { value: g }, m) : In.createElement(us.Provider, { value: g }, In.createElement(f, h, m));
  }, r;
}(In.Component);
jf.propTypes = {};
jf.defaultProps = b2;
const S2 = (a3) => a3.scrollTop;
function sg(a3, r) {
  const { timeout: o, easing: s, style: c = {} } = a3;
  return { duration: c.transitionDuration ?? (typeof o == "number" ? o : o[r.mode] || 0), easing: c.transitionTimingFunction ?? (typeof s == "object" ? s[r.mode] : s), delay: c.transitionDelay };
}
function x2(a3) {
  return de("MuiPaper", a3);
}
ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const T2 = (a3) => {
  const { square: r, elevation: o, variant: s, classes: c } = a3, f = { root: ["root", s, !r && "rounded", s === "elevation" && `elevation${o}`] };
  return be(f, x2, c);
}, C2 = bt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], !o.square && r.rounded, o.variant === "elevation" && r[`elevation${o.elevation}`]];
} })(Vt(({ theme: a3 }) => ({ backgroundColor: (a3.vars || a3).palette.background.paper, color: (a3.vars || a3).palette.text.primary, transition: a3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: a3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(a3.vars || a3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Ms = O.forwardRef(function(r, o) {
  var _a;
  const s = Ce({ props: r, name: "MuiPaper" }), c = Rs(), { className: f, component: p = "div", elevation: h = 1, square: g = false, variant: m = "elevation", ...x } = s, T = { ...s, component: p, elevation: h, square: g, variant: m }, E = T2(T);
  return U.jsx(C2, { as: p, ownerState: T, className: xt(E.root, f), ref: o, ...x, style: { ...m === "elevation" && { "--Paper-shadow": (c.vars || c).shadows[h], ...c.vars && { "--Paper-overlay": (_a = c.vars.overlays) == null ? void 0 : _a[h] }, ...!c.vars && c.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${Ta("#fff", lf(h))}, ${Ta("#fff", lf(h))})` } }, ...x.style } });
});
function Ka(a3, r) {
  const { className: o, elementType: s, ownerState: c, externalForwardedProps: f, internalForwardedProps: p, shouldForwardComponentProp: h = false, ...g } = r, { component: m, slots: x = { [a3]: void 0 }, slotProps: T = { [a3]: void 0 }, ...E } = f, D = x[a3] || s, M = u0(T[a3], c), { props: { component: S, ...N }, internalRef: B } = s0({ className: o, ...g, externalForwardedProps: a3 === "root" ? E : void 0, externalSlotProps: M }), G = Al(B, M == null ? void 0 : M.ref, r.ref), $ = a3 === "root" ? S || m : S, H = o0(D, { ...a3 === "root" && !m && !x[a3] && p, ...a3 !== "root" && !x[a3] && p, ...N, ...$ && !h && { as: $ }, ...$ && h && { component: $ }, ref: G }, c);
  return [D, H];
}
class cs {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new cs();
  }
  static use() {
    const r = i0(cs.create).current, [o, s] = O.useState(false);
    return r.shouldMount = o, r.setShouldMount = s, O.useEffect(r.mountEffect, [o]), r;
  }
  mount() {
    return this.mounted || (this.mounted = A2(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
function E2() {
  return cs.use();
}
function A2() {
  let a3, r;
  const o = new Promise((s, c) => {
    a3 = s, r = c;
  });
  return o.resolve = a3, o.reject = r, o;
}
function w2(a3) {
  const { className: r, classes: o, pulsate: s = false, rippleX: c, rippleY: f, rippleSize: p, in: h, onExited: g, timeout: m } = a3, [x, T] = O.useState(false), E = xt(r, o.ripple, o.rippleVisible, s && o.ripplePulsate), D = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c }, M = xt(o.child, x && o.childLeaving, s && o.childPulsate);
  return !h && !x && T(true), O.useEffect(() => {
    if (!h && g != null) {
      const S = setTimeout(g, m);
      return () => {
        clearTimeout(S);
      };
    }
  }, [g, h, m]), U.jsx("span", { className: E, style: D, children: U.jsx("span", { className: M }) });
}
const kn = ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), uf = 550, R2 = 80, M2 = _i`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, O2 = _i`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, z2 = _i`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _2 = bt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), D2 = bt(w2, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${kn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${M2};
    animation-duration: ${uf}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  &.${kn.ripplePulsate} {
    animation-duration: ${({ theme: a3 }) => a3.transitions.duration.shorter}ms;
  }

  & .${kn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${kn.childLeaving} {
    opacity: 0;
    animation-name: ${O2};
    animation-duration: ${uf}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  & .${kn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${z2};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, k2 = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiTouchRipple" }), { center: c = false, classes: f = {}, className: p, ...h } = s, [g, m] = O.useState([]), x = O.useRef(0), T = O.useRef(null);
  O.useEffect(() => {
    T.current && (T.current(), T.current = null);
  }, [g]);
  const E = O.useRef(false), D = _f(), M = O.useRef(null), S = O.useRef(null), N = O.useCallback((H) => {
    const { pulsate: w, rippleX: Z, rippleY: K, rippleSize: rt, cb: Q } = H;
    m((v) => [...v, U.jsx(D2, { classes: { ripple: xt(f.ripple, kn.ripple), rippleVisible: xt(f.rippleVisible, kn.rippleVisible), ripplePulsate: xt(f.ripplePulsate, kn.ripplePulsate), child: xt(f.child, kn.child), childLeaving: xt(f.childLeaving, kn.childLeaving), childPulsate: xt(f.childPulsate, kn.childPulsate) }, timeout: uf, pulsate: w, rippleX: Z, rippleY: K, rippleSize: rt }, x.current)]), x.current += 1, T.current = Q;
  }, [f]), B = O.useCallback((H = {}, w = {}, Z = () => {
  }) => {
    const { pulsate: K = false, center: rt = c || w.pulsate, fakeElement: Q = false } = w;
    if ((H == null ? void 0 : H.type) === "mousedown" && E.current) {
      E.current = false;
      return;
    }
    (H == null ? void 0 : H.type) === "touchstart" && (E.current = true);
    const v = Q ? null : S.current, P = v ? v.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let I, at, W;
    if (rt || H === void 0 || H.clientX === 0 && H.clientY === 0 || !H.clientX && !H.touches) I = Math.round(P.width / 2), at = Math.round(P.height / 2);
    else {
      const { clientX: tt, clientY: L } = H.touches && H.touches.length > 0 ? H.touches[0] : H;
      I = Math.round(tt - P.left), at = Math.round(L - P.top);
    }
    if (rt) W = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const tt = Math.max(Math.abs((v ? v.clientWidth : 0) - I), I) * 2 + 2, L = Math.max(Math.abs((v ? v.clientHeight : 0) - at), at) * 2 + 2;
      W = Math.sqrt(tt ** 2 + L ** 2);
    }
    (H == null ? void 0 : H.touches) ? M.current === null && (M.current = () => {
      N({ pulsate: K, rippleX: I, rippleY: at, rippleSize: W, cb: Z });
    }, D.start(R2, () => {
      M.current && (M.current(), M.current = null);
    })) : N({ pulsate: K, rippleX: I, rippleY: at, rippleSize: W, cb: Z });
  }, [c, N, D]), G = O.useCallback(() => {
    B({}, { pulsate: true });
  }, [B]), $ = O.useCallback((H, w) => {
    if (D.clear(), (H == null ? void 0 : H.type) === "touchend" && M.current) {
      M.current(), M.current = null, D.start(0, () => {
        $(H, w);
      });
      return;
    }
    M.current = null, m((Z) => Z.length > 0 ? Z.slice(1) : Z), T.current = w;
  }, [D]);
  return O.useImperativeHandle(o, () => ({ pulsate: G, start: B, stop: $ }), [G, B, $]), U.jsx(_2, { className: xt(kn.root, f.root, p), ref: S, ...h, children: U.jsx(jf, { component: null, exit: true, children: g }) });
});
function B2(a3) {
  return de("MuiButtonBase", a3);
}
const N2 = ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), U2 = (a3) => {
  const { disabled: r, focusVisible: o, focusVisibleClassName: s, classes: c } = a3, p = be({ root: ["root", r && "disabled", o && "focusVisible"] }, B2, c);
  return o && s && (p.root += ` ${s}`), p;
}, H2 = bt("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (a3, r) => r.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${N2.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), Ni = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiButtonBase" }), { action: c, centerRipple: f = false, children: p, className: h, component: g = "button", disabled: m = false, disableRipple: x = false, disableTouchRipple: T = false, focusRipple: E = false, focusVisibleClassName: D, LinkComponent: M = "a", onBlur: S, onClick: N, onContextMenu: B, onDragLeave: G, onFocus: $, onFocusVisible: H, onKeyDown: w, onKeyUp: Z, onMouseDown: K, onMouseLeave: rt, onMouseUp: Q, onTouchEnd: v, onTouchMove: P, onTouchStart: I, tabIndex: at = 0, TouchRippleProps: W, touchRippleRef: tt, type: L, ...nt } = s, J = O.useRef(null), et = E2(), C = Al(et.ref, tt), [j, st] = O.useState(false);
  m && j && st(false), O.useImperativeHandle(c, () => ({ focusVisible: () => {
    st(true), J.current.focus();
  } }), []);
  const ft = et.shouldMount && !x && !m;
  O.useEffect(() => {
    j && E && !x && et.pulsate();
  }, [x, E, j, et]);
  const lt = ba(et, "start", K, T), Ct = ba(et, "stop", B, T), mt = ba(et, "stop", G, T), re = ba(et, "stop", Q, T), Et = ba(et, "stop", (vt) => {
    j && vt.preventDefault(), rt && rt(vt);
  }, T), jt = ba(et, "start", I, T), Dt = ba(et, "stop", v, T), pe = ba(et, "stop", P, T), Se = ba(et, "stop", (vt) => {
    ss(vt.target) || st(false), S && S(vt);
  }, false), Qt = gn((vt) => {
    J.current || (J.current = vt.currentTarget), ss(vt.target) && (st(true), H && H(vt)), $ && $(vt);
  }), Oe = () => {
    const vt = J.current;
    return g && g !== "button" && !(vt.tagName === "A" && vt.href);
  }, vn = gn((vt) => {
    E && !vt.repeat && j && vt.key === " " && et.stop(vt, () => {
      et.start(vt);
    }), vt.target === vt.currentTarget && Oe() && vt.key === " " && vt.preventDefault(), w && w(vt), vt.target === vt.currentTarget && Oe() && vt.key === "Enter" && !m && (vt.preventDefault(), N && N(vt));
  }), Ye = gn((vt) => {
    E && vt.key === " " && j && !vt.defaultPrevented && et.stop(vt, () => {
      et.pulsate(vt);
    }), Z && Z(vt), N && vt.target === vt.currentTarget && Oe() && vt.key === " " && !vt.defaultPrevented && N(vt);
  });
  let Ut = g;
  Ut === "button" && (nt.href || nt.to) && (Ut = M);
  const oe = {};
  Ut === "button" ? (oe.type = L === void 0 ? "button" : L, oe.disabled = m) : (!nt.href && !nt.to && (oe.role = "button"), m && (oe["aria-disabled"] = m));
  const rn = Al(o, J), Ue = { ...s, centerRipple: f, component: g, disabled: m, disableRipple: x, disableTouchRipple: T, focusRipple: E, tabIndex: at, focusVisible: j }, Je = U2(Ue);
  return U.jsxs(H2, { as: Ut, className: xt(Je.root, h), ownerState: Ue, onBlur: Se, onClick: N, onContextMenu: Ct, onFocus: Qt, onKeyDown: vn, onKeyUp: Ye, onMouseDown: lt, onMouseLeave: Et, onMouseUp: re, onDragLeave: mt, onTouchEnd: Dt, onTouchMove: pe, onTouchStart: jt, ref: rn, tabIndex: m ? -1 : at, type: L, ...oe, ...nt, children: [p, ft ? U.jsx(k2, { ref: C, center: f, ...W }) : null] });
});
function ba(a3, r, o, s = false) {
  return gn((c) => (o && o(c), s || a3[r](c), true));
}
function j2(a3) {
  return typeof a3.main == "string";
}
function L2(a3, r = []) {
  if (!j2(a3)) return false;
  for (const o of r) if (!a3.hasOwnProperty(o) || typeof a3[o] != "string") return false;
  return true;
}
function yn(a3 = []) {
  return ([, r]) => r && L2(r, a3);
}
function $2(a3) {
  return de("MuiAlert", a3);
}
const ug = ue("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function q2(a3) {
  return de("MuiCircularProgress", a3);
}
ue("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Za = 44, cf = _i`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ff = _i`
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
`, Y2 = typeof cf != "string" ? xf`
        animation: ${cf} 1.4s linear infinite;
      ` : null, G2 = typeof ff != "string" ? xf`
        animation: ${ff} 1.4s ease-in-out infinite;
      ` : null, V2 = (a3) => {
  const { classes: r, variant: o, color: s, disableShrink: c } = a3, f = { root: ["root", o, `color${gt(s)}`], svg: ["svg"], circle: ["circle", `circle${gt(o)}`, c && "circleDisableShrink"] };
  return be(f, q2, r);
}, X2 = bt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`color${gt(o.color)}`]];
} })(Vt(({ theme: a3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: Y2 || { animation: `${cf} 1.4s linear infinite` } }, ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } }))] }))), Q2 = bt("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (a3, r) => r.svg })({ display: "block" }), Z2 = bt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.circle, r[`circle${gt(o.variant)}`], o.disableShrink && r.circleDisableShrink];
} })(Vt(({ theme: a3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: G2 || { animation: `${ff} 1.4s ease-in-out infinite` } }] }))), K2 = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiCircularProgress" }), { className: c, color: f = "primary", disableShrink: p = false, size: h = 40, style: g, thickness: m = 3.6, value: x = 0, variant: T = "indeterminate", ...E } = s, D = { ...s, color: f, disableShrink: p, size: h, thickness: m, value: x, variant: T }, M = V2(D), S = {}, N = {}, B = {};
  if (T === "determinate") {
    const G = 2 * Math.PI * ((Za - m) / 2);
    S.strokeDasharray = G.toFixed(3), B["aria-valuenow"] = Math.round(x), S.strokeDashoffset = `${((100 - x) / 100 * G).toFixed(3)}px`, N.transform = "rotate(-90deg)";
  }
  return U.jsx(X2, { className: xt(M.root, c), style: { width: h, height: h, ...N, ...g }, ownerState: D, ref: o, role: "progressbar", ...B, ...E, children: U.jsx(Q2, { className: M.svg, ownerState: D, viewBox: `${Za / 2} ${Za / 2} ${Za} ${Za}`, children: U.jsx(Z2, { className: M.circle, style: S, ownerState: D, cx: Za, cy: Za, r: (Za - m) / 2, fill: "none", strokeWidth: m }) }) });
});
function P2(a3) {
  return de("MuiIconButton", a3);
}
const cg = ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), F2 = (a3) => {
  const { classes: r, disabled: o, color: s, edge: c, size: f, loading: p } = a3, h = { root: ["root", p && "loading", o && "disabled", s !== "default" && `color${gt(s)}`, c && `edge${gt(c)}`, `size${gt(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return be(h, P2, r);
}, W2 = bt(Ni, { name: "MuiIconButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.loading && r.loading, o.color !== "default" && r[`color${gt(o.color)}`], o.edge && r[`edge${gt(o.edge)}`], r[`size${gt(o.size)}`]];
} })(Vt(({ theme: a3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: a3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (a3.vars || a3).palette.action.active, transition: a3.transitions.create("background-color", { duration: a3.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ta(a3.palette.action.active, a3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), Vt(({ theme: a3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${(a3.vars || a3).palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ta((a3.vars || a3).palette[r].main, a3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: a3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: a3.typography.pxToRem(28) } }], [`&.${cg.disabled}`]: { backgroundColor: "transparent", color: (a3.vars || a3).palette.action.disabled }, [`&.${cg.loading}`]: { color: "transparent" } }))), J2 = bt("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (a3, r) => r.loadingIndicator })(({ theme: a3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (a3.vars || a3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), I2 = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiIconButton" }), { edge: c = false, children: f, className: p, color: h = "default", disabled: g = false, disableFocusRipple: m = false, size: x = "medium", id: T, loading: E = null, loadingIndicator: D, ...M } = s, S = gS(T), N = D ?? U.jsx(K2, { "aria-labelledby": S, color: "inherit", size: 16 }), B = { ...s, edge: c, color: h, disabled: g, disableFocusRipple: m, loading: E, loadingIndicator: N, size: x }, G = F2(B);
  return U.jsxs(W2, { id: E ? S : T, className: xt(G.root, p), centerRipple: true, focusRipple: !m, disabled: g || E, ref: o, ...M, ownerState: B, children: [typeof E == "boolean" && U.jsx("span", { className: G.loadingWrapper, style: { display: "contents" }, children: U.jsx(J2, { className: G.loadingIndicator, ownerState: B, children: E && N }) }), f] });
}), tx = Ca(U.jsx("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), ex = Ca(U.jsx("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), nx = Ca(U.jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), ax = Ca(U.jsx("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), lx = Ca(U.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), rx = (a3) => {
  const { variant: r, color: o, severity: s, classes: c } = a3, f = { root: ["root", `color${gt(o || s)}`, `${r}${gt(o || s)}`, `${r}`], icon: ["icon"], message: ["message"], action: ["action"] };
  return be(f, $2, c);
}, ix = bt(Ms, { name: "MuiAlert", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`${o.variant}${gt(o.color || o.severity)}`]];
} })(Vt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? Fa : Wa, o = a3.palette.mode === "light" ? Wa : Fa;
  return { ...a3.typography.body2, backgroundColor: "transparent", display: "flex", padding: "6px 16px", variants: [...Object.entries(a3.palette).filter(yn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "standard" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), backgroundColor: a3.vars ? a3.vars.palette.Alert[`${s}StandardBg`] : o(a3.palette[s].light, 0.9), [`& .${ug.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(yn(["light"])).map(([s]) => ({ props: { colorSeverity: s, variant: "outlined" }, style: { color: a3.vars ? a3.vars.palette.Alert[`${s}Color`] : r(a3.palette[s].light, 0.6), border: `1px solid ${(a3.vars || a3).palette[s].light}`, [`& .${ug.icon}`]: a3.vars ? { color: a3.vars.palette.Alert[`${s}IconColor`] } : { color: a3.palette[s].main } } })), ...Object.entries(a3.palette).filter(yn(["dark"])).map(([s]) => ({ props: { colorSeverity: s, variant: "filled" }, style: { fontWeight: a3.typography.fontWeightMedium, ...a3.vars ? { color: a3.vars.palette.Alert[`${s}FilledColor`], backgroundColor: a3.vars.palette.Alert[`${s}FilledBg`] } : { backgroundColor: a3.palette.mode === "dark" ? a3.palette[s].dark : a3.palette[s].main, color: a3.palette.getContrastText(a3.palette[s].main) } } }))] };
})), ox = bt("div", { name: "MuiAlert", slot: "Icon", overridesResolver: (a3, r) => r.icon })({ marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: 0.9 }), sx = bt("div", { name: "MuiAlert", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0", minWidth: 0, overflow: "auto" }), ux = bt("div", { name: "MuiAlert", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8 }), fg = { success: U.jsx(tx, { fontSize: "inherit" }), warning: U.jsx(ex, { fontSize: "inherit" }), error: U.jsx(nx, { fontSize: "inherit" }), info: U.jsx(ax, { fontSize: "inherit" }) }, cx = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiAlert" }), { action: c, children: f, className: p, closeText: h = "Close", color: g, components: m = {}, componentsProps: x = {}, icon: T, iconMapping: E = fg, onClose: D, role: M = "alert", severity: S = "success", slotProps: N = {}, slots: B = {}, variant: G = "standard", ...$ } = s, H = { ...s, color: g, severity: S, variant: G, colorSeverity: g || S }, w = rx(H), Z = { slots: { closeButton: m.CloseButton, closeIcon: m.CloseIcon, ...B }, slotProps: { ...x, ...N } }, [K, rt] = Ka("root", { ref: o, shouldForwardComponentProp: true, className: xt(w.root, p), elementType: ix, externalForwardedProps: { ...Z, ...$ }, ownerState: H, additionalProps: { role: M, elevation: 0 } }), [Q, v] = Ka("icon", { className: w.icon, elementType: ox, externalForwardedProps: Z, ownerState: H }), [P, I] = Ka("message", { className: w.message, elementType: sx, externalForwardedProps: Z, ownerState: H }), [at, W] = Ka("action", { className: w.action, elementType: ux, externalForwardedProps: Z, ownerState: H }), [tt, L] = Ka("closeButton", { elementType: I2, externalForwardedProps: Z, ownerState: H }), [nt, J] = Ka("closeIcon", { elementType: lx, externalForwardedProps: Z, ownerState: H });
  return U.jsxs(K, { ...rt, children: [T !== false ? U.jsx(Q, { ...v, children: T || E[S] || fg[S] }) : null, U.jsx(P, { ...I, children: f }), c != null ? U.jsx(at, { ...W, children: c }) : null, c == null && D ? U.jsx(at, { ...W, children: U.jsx(tt, { size: "small", "aria-label": h, title: h, color: "inherit", onClick: D, ...L, children: U.jsx(nt, { fontSize: "small", ...J }) }) }) : null] });
});
function fx(a3) {
  return de("MuiTypography", a3);
}
ue("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const dx = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, px = s2(), hx = (a3) => {
  const { align: r, gutterBottom: o, noWrap: s, paragraph: c, variant: f, classes: p } = a3, h = { root: ["root", f, a3.align !== "inherit" && `align${gt(r)}`, o && "gutterBottom", s && "noWrap", c && "paragraph"] };
  return be(h, fx, p);
}, mx = bt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.variant && r[o.variant], o.align !== "inherit" && r[`align${gt(o.align)}`], o.noWrap && r.noWrap, o.gutterBottom && r.gutterBottom, o.paragraph && r.paragraph];
} })(Vt(({ theme: a3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(a3.typography).filter(([r, o]) => r !== "inherit" && o && typeof o == "object").map(([r, o]) => ({ props: { variant: r }, style: o })), ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), ...Object.entries(((_a = a3.palette) == null ? void 0 : _a.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${gt(r)}` }, style: { color: (a3.vars || a3).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), dg = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, fs = O.forwardRef(function(r, o) {
  const { color: s, ...c } = Ce({ props: r, name: "MuiTypography" }), f = !dx[s], p = px({ ...c, ...f && { color: s } }), { align: h = "inherit", className: g, component: m, gutterBottom: x = false, noWrap: T = false, paragraph: E = false, variant: D = "body1", variantMapping: M = dg, ...S } = p, N = { ...p, align: h, color: s, className: g, component: m, gutterBottom: x, noWrap: T, paragraph: E, variant: D, variantMapping: M }, B = m || (E ? "p" : M[D] || dg[D]) || "span", G = hx(N);
  return U.jsx(mx, { as: B, ref: o, className: xt(G.root, g), ...S, ownerState: N, style: { ...h !== "inherit" && { "--Typography-textAlign": h }, ...S.style } });
});
function gx(a3) {
  return de("MuiAppBar", a3);
}
ue("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const yx = (a3) => {
  const { color: r, position: o, classes: s } = a3, c = { root: ["root", `color${gt(r)}`, `position${gt(o)}`] };
  return be(c, gx, s);
}, pg = (a3, r) => a3 ? `${a3 == null ? void 0 : a3.replace(")", "")}, ${r})` : r, vx = bt(Ms, { name: "MuiAppBar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`position${gt(o.position)}`], r[`color${gt(o.color)}`]];
} })(Vt(({ theme: a3 }) => ({ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", flexShrink: 0, variants: [{ props: { position: "fixed" }, style: { position: "fixed", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0, "@media print": { position: "absolute" } } }, { props: { position: "absolute" }, style: { position: "absolute", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "sticky" }, style: { position: "sticky", zIndex: (a3.vars || a3).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "static" }, style: { position: "static" } }, { props: { position: "relative" }, style: { position: "relative" } }, { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } }, { props: { color: "default" }, style: { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[100], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[100]), ...a3.applyStyles("dark", { "--AppBar-background": a3.vars ? a3.vars.palette.AppBar.defaultBg : a3.palette.grey[900], "--AppBar-color": a3.vars ? a3.vars.palette.text.primary : a3.palette.getContrastText(a3.palette.grey[900]) }) } }, ...Object.entries(a3.palette).filter(yn(["contrastText"])).map(([r]) => ({ props: { color: r }, style: { "--AppBar-background": (a3.vars ?? a3).palette[r].main, "--AppBar-color": (a3.vars ?? a3).palette[r].contrastText } })), { props: (r) => r.enableColorOnDark === true && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" } }, { props: (r) => r.enableColorOnDark === false && !["inherit", "transparent"].includes(r.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundColor: a3.vars ? pg(a3.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null, color: a3.vars ? pg(a3.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null }) } }, { props: { color: "transparent" }, style: { "--AppBar-background": "transparent", "--AppBar-color": "inherit", backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...a3.applyStyles("dark", { backgroundImage: "none" }) } }] }))), bx = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiAppBar" }), { className: c, color: f = "primary", enableColorOnDark: p = false, position: h = "fixed", ...g } = s, m = { ...s, color: f, position: h, enableColorOnDark: p }, x = yx(m);
  return U.jsx(vx, { square: true, component: "header", ownerState: m, elevation: 4, className: xt(x.root, c, h === "fixed" && "mui-fixed"), ref: o, ...g });
});
function as(a3) {
  return typeof a3 == "string";
}
function b0({ props: a3, states: r, muiFormControl: o }) {
  return r.reduce((s, c) => (s[c] = a3[c], o && typeof a3[c] > "u" && (s[c] = o[c]), s), {});
}
const Sx = O.createContext(void 0);
function Lf() {
  return O.useContext(Sx);
}
const xx = Ca(U.jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function Tx(a3) {
  return de("MuiAvatar", a3);
}
ue("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Cx = (a3) => {
  const { classes: r, variant: o, colorDefault: s } = a3;
  return be({ root: ["root", o, s && "colorDefault"], img: ["img"], fallback: ["fallback"] }, Tx, r);
}, Ex = bt("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], o.colorDefault && r.colorDefault];
} })(Vt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: a3.typography.fontFamily, fontSize: a3.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (a3.vars || a3).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (a3.vars || a3).palette.background.default, ...a3.vars ? { backgroundColor: a3.vars.palette.Avatar.defaultBg } : { backgroundColor: a3.palette.grey[400], ...a3.applyStyles("dark", { backgroundColor: a3.palette.grey[600] }) } } }] }))), Ax = bt("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (a3, r) => r.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), wx = bt(xx, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (a3, r) => r.fallback })({ width: "75%", height: "75%" });
function Rx({ crossOrigin: a3, referrerPolicy: r, src: o, srcSet: s }) {
  const [c, f] = O.useState(false);
  return O.useEffect(() => {
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
const Mx = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiAvatar" }), { alt: c, children: f, className: p, component: h = "div", slots: g = {}, slotProps: m = {}, imgProps: x, sizes: T, src: E, srcSet: D, variant: M = "circular", ...S } = s;
  let N = null;
  const B = { ...s, component: h, variant: M }, G = Rx({ ...x, ...typeof m.img == "function" ? m.img(B) : m.img, src: E, srcSet: D }), $ = E || D, H = $ && G !== "error";
  B.colorDefault = !H, delete B.ownerState;
  const w = Cx(B), [Z, K] = Ka("img", { className: w.img, elementType: Ax, externalForwardedProps: { slots: g, slotProps: { img: { ...x, ...m.img } } }, additionalProps: { alt: c, src: E, srcSet: D, sizes: T }, ownerState: B });
  return H ? N = U.jsx(Z, { ...K }) : f || f === 0 ? N = f : $ && c ? N = c[0] : N = U.jsx(wx, { ownerState: B, className: w.fallback }), U.jsx(Ex, { as: h, className: xt(w.root, p), ref: o, ...S, ownerState: B, children: N });
}), Ox = ue("MuiBox", ["root"]), zx = g0(), br = J1({ themeId: hs, defaultTheme: zx, defaultClassName: Ox.root, generateClassName: Wg.generate });
function _x(a3) {
  return de("PrivateSwitchBase", a3);
}
ue("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Dx = (a3) => {
  const { classes: r, checked: o, disabled: s, edge: c } = a3, f = { root: ["root", o && "checked", s && "disabled", c && `edge${gt(c)}`], input: ["input"] };
  return be(f, _x, r);
}, kx = bt(Ni)({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "start" && r.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: a3, ownerState: r }) => a3 === "end" && r.size !== "small", style: { marginRight: -12 } }] }), Bx = bt("input", { shouldForwardProp: Uf })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), Nx = O.forwardRef(function(r, o) {
  const { autoFocus: s, checked: c, checkedIcon: f, className: p, defaultChecked: h, disabled: g, disableFocusRipple: m = false, edge: x = false, icon: T, id: E, inputProps: D, inputRef: M, name: S, onBlur: N, onChange: B, onFocus: G, readOnly: $, required: H = false, tabIndex: w, type: Z, value: K, ...rt } = r, [Q, v] = r0({ controlled: c, default: !!h, name: "SwitchBase", state: "checked" }), P = Lf(), I = (et) => {
    G && G(et), P && P.onFocus && P.onFocus(et);
  }, at = (et) => {
    N && N(et), P && P.onBlur && P.onBlur(et);
  }, W = (et) => {
    if (et.nativeEvent.defaultPrevented) return;
    const C = et.target.checked;
    v(C), B && B(et, C);
  };
  let tt = g;
  P && typeof tt > "u" && (tt = P.disabled);
  const L = Z === "checkbox" || Z === "radio", nt = { ...r, checked: Q, disabled: tt, disableFocusRipple: m, edge: x }, J = Dx(nt);
  return U.jsxs(kx, { component: "span", className: xt(J.root, p), centerRipple: true, focusRipple: !m, disabled: tt, tabIndex: null, role: void 0, onFocus: I, onBlur: at, ownerState: nt, ref: o, ...rt, children: [U.jsx(Bx, { autoFocus: s, checked: c, defaultChecked: h, className: J.input, disabled: tt, id: L ? E : void 0, name: S, onChange: W, readOnly: $, ref: M, required: H, ownerState: nt, tabIndex: w, type: Z, ...Z === "checkbox" && K === void 0 ? {} : { value: K }, ...D }), Q ? f : T] });
});
function hg(a3) {
  return a3.substring(2).toLowerCase();
}
function Ux(a3, r) {
  return r.documentElement.clientWidth < a3.clientX || r.documentElement.clientHeight < a3.clientY;
}
function Hx(a3) {
  const { children: r, disableReactTree: o = false, mouseEvent: s = "onClick", onClickAway: c, touchEvent: f = "onTouchEnd" } = a3, p = O.useRef(false), h = O.useRef(null), g = O.useRef(false), m = O.useRef(false);
  O.useEffect(() => (setTimeout(() => {
    g.current = true;
  }, 0), () => {
    g.current = false;
  }), []);
  const x = Al(c0(r), h), T = gn((M) => {
    const S = m.current;
    m.current = false;
    const N = Sa(h.current);
    if (!g.current || !h.current || "clientX" in M && Ux(M, N)) return;
    if (p.current) {
      p.current = false;
      return;
    }
    let B;
    M.composedPath ? B = M.composedPath().includes(h.current) : B = !N.documentElement.contains(M.target) || h.current.contains(M.target), !B && (o || !S) && c(M);
  }), E = (M) => (S) => {
    m.current = true;
    const N = r.props[M];
    N && N(S);
  }, D = { ref: x };
  return f !== false && (D[f] = E(f)), O.useEffect(() => {
    if (f !== false) {
      const M = hg(f), S = Sa(h.current), N = () => {
        p.current = true;
      };
      return S.addEventListener(M, T), S.addEventListener("touchmove", N), () => {
        S.removeEventListener(M, T), S.removeEventListener("touchmove", N);
      };
    }
  }, [T, f]), s !== false && (D[s] = E(s)), O.useEffect(() => {
    if (s !== false) {
      const M = hg(s), S = Sa(h.current);
      return S.addEventListener(M, T), () => {
        S.removeEventListener(M, T);
      };
    }
  }, [T, s]), O.cloneElement(r, D);
}
function jx(a3) {
  return de("MuiFab", a3);
}
const mg = ue("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Lx = (a3) => {
  const { color: r, variant: o, classes: s, size: c } = a3, f = { root: ["root", o, `size${gt(c)}`, r === "inherit" ? "colorInherit" : r] }, p = be(f, jx, s);
  return { ...s, ...p };
}, $x = bt(Ni, { name: "MuiFab", slot: "Root", shouldForwardProp: (a3) => Uf(a3) || a3 === "classes", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[o.variant], r[`size${gt(o.size)}`], o.color === "inherit" && r.colorInherit, r[gt(o.size)], r[o.color]];
} })(Vt(({ theme: a3 }) => {
  var _a, _b2;
  return { ...a3.typography.button, minHeight: 36, transition: a3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: a3.transitions.duration.short }), borderRadius: "50%", padding: 0, minWidth: 0, width: 56, height: 56, zIndex: (a3.vars || a3).zIndex.fab, boxShadow: (a3.vars || a3).shadows[6], "&:active": { boxShadow: (a3.vars || a3).shadows[12] }, color: a3.vars ? a3.vars.palette.text.primary : (_b2 = (_a = a3.palette).getContrastText) == null ? void 0 : _b2.call(_a, a3.palette.grey[300]), backgroundColor: (a3.vars || a3).palette.grey[300], "&:hover": { backgroundColor: (a3.vars || a3).palette.grey.A100, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette.grey[300] }, textDecoration: "none" }, [`&.${mg.focusVisible}`]: { boxShadow: (a3.vars || a3).shadows[6] }, variants: [{ props: { size: "small" }, style: { width: 40, height: 40 } }, { props: { size: "medium" }, style: { width: 48, height: 48 } }, { props: { variant: "extended" }, style: { borderRadius: 48 / 2, padding: "0 16px", width: "auto", minHeight: "auto", minWidth: 48, height: 48 } }, { props: { variant: "extended", size: "small" }, style: { width: "auto", padding: "0 8px", borderRadius: 34 / 2, minWidth: 34, height: 34 } }, { props: { variant: "extended", size: "medium" }, style: { width: "auto", padding: "0 16px", borderRadius: 40 / 2, minWidth: 40, height: 40 } }, { props: { color: "inherit" }, style: { color: "inherit" } }] };
}), Vt(({ theme: a3 }) => ({ variants: [...Object.entries(a3.palette).filter(yn(["dark", "contrastText"])).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].contrastText, backgroundColor: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: (a3.vars || a3).palette[r].dark, "@media (hover: none)": { backgroundColor: (a3.vars || a3).palette[r].main } } } }))] })), Vt(({ theme: a3 }) => ({ [`&.${mg.disabled}`]: { color: (a3.vars || a3).palette.action.disabled, boxShadow: (a3.vars || a3).shadows[0], backgroundColor: (a3.vars || a3).palette.action.disabledBackground } }))), qx = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiFab" }), { children: c, className: f, color: p = "default", component: h = "button", disabled: g = false, disableFocusRipple: m = false, focusVisibleClassName: x, size: T = "large", variant: E = "circular", ...D } = s, M = { ...s, color: p, component: h, disabled: g, disableFocusRipple: m, size: T, variant: E }, S = Lx(M);
  return U.jsx($x, { className: xt(S.root, f), component: h, disabled: g, focusRipple: !m, focusVisibleClassName: xt(S.focusVisible, x), ownerState: M, ref: o, ...D, classes: S, children: c });
});
function Yx(a3) {
  return de("MuiFormControlLabel", a3);
}
const Ci = ue("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Gx = (a3) => {
  const { classes: r, disabled: o, labelPlacement: s, error: c, required: f } = a3, p = { root: ["root", o && "disabled", `labelPlacement${gt(s)}`, c && "error", f && "required"], label: ["label", o && "disabled"], asterisk: ["asterisk", c && "error"] };
  return be(p, Yx, r);
}, Vx = bt("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${Ci.label}`]: r.label }, r.root, r[`labelPlacement${gt(o.labelPlacement)}`]];
} })(Vt(({ theme: a3 }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${Ci.disabled}`]: { cursor: "default" }, [`& .${Ci.label}`]: { [`&.${Ci.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: r }) => r === "start" || r === "top" || r === "bottom", style: { marginLeft: 16 } }] }))), Xx = bt("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (a3, r) => r.asterisk })(Vt(({ theme: a3 }) => ({ [`&.${Ci.error}`]: { color: (a3.vars || a3).palette.error.main } }))), gg = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiFormControlLabel" }), { checked: c, className: f, componentsProps: p = {}, control: h, disabled: g, disableTypography: m, inputRef: x, label: T, labelPlacement: E = "end", name: D, onChange: M, required: S, slots: N = {}, slotProps: B = {}, value: G, ...$ } = s, H = Lf(), w = g ?? h.props.disabled ?? (H == null ? void 0 : H.disabled), Z = S ?? h.props.required, K = { disabled: w, required: Z };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((tt) => {
    typeof h.props[tt] > "u" && typeof s[tt] < "u" && (K[tt] = s[tt]);
  });
  const rt = b0({ props: s, muiFormControl: H, states: ["error"] }), Q = { ...s, disabled: w, labelPlacement: E, required: Z, error: rt.error }, v = Gx(Q), P = { slots: N, slotProps: { ...p, ...B } }, [I, at] = Ka("typography", { elementType: fs, externalForwardedProps: P, ownerState: Q });
  let W = T;
  return W != null && W.type !== fs && !m && (W = U.jsx(I, { component: "span", ...at, className: xt(v.label, at == null ? void 0 : at.className), children: W })), U.jsxs(Vx, { className: xt(v.root, f), ownerState: Q, ref: o, ...$, children: [O.cloneElement(h, K), Z ? U.jsxs("div", { children: [W, U.jsxs(Xx, { ownerState: Q, "aria-hidden": true, className: v.asterisk, children: ["\u2009", "*"] })] }) : W] });
});
function Qx(a3) {
  return de("MuiFormGroup", a3);
}
ue("MuiFormGroup", ["root", "row", "error"]);
const Zx = (a3) => {
  const { classes: r, row: o, error: s } = a3;
  return be({ root: ["root", o && "row", s && "error"] }, Qx, r);
}, Kx = bt("div", { name: "MuiFormGroup", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.row && r.row];
} })({ display: "flex", flexDirection: "column", flexWrap: "wrap", variants: [{ props: { row: true }, style: { flexDirection: "row" } }] }), Px = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiFormGroup" }), { className: c, row: f = false, ...p } = s, h = Lf(), g = b0({ props: s, muiFormControl: h, states: ["error"] }), m = { ...s, row: f, error: g.error }, x = Zx(m);
  return U.jsx(Kx, { className: xt(x.root, c), ownerState: m, ref: o, ...p });
});
function df(a3) {
  return `scale(${a3}, ${a3 ** 2})`;
}
const Fx = { entering: { opacity: 1, transform: df(1) }, entered: { opacity: 1, transform: "none" } }, Zc = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), pf = O.forwardRef(function(r, o) {
  const { addEndListener: s, appear: c = true, children: f, easing: p, in: h, onEnter: g, onEntered: m, onEntering: x, onExit: T, onExited: E, onExiting: D, style: M, timeout: S = "auto", TransitionComponent: N = Ea, ...B } = r, G = _f(), $ = O.useRef(), H = Rs(), w = O.useRef(null), Z = Al(w, c0(f), o), K = (tt) => (L) => {
    if (tt) {
      const nt = w.current;
      L === void 0 ? tt(nt) : tt(nt, L);
    }
  }, rt = K(x), Q = K((tt, L) => {
    S2(tt);
    const { duration: nt, delay: J, easing: et } = sg({ style: M, timeout: S, easing: p }, { mode: "enter" });
    let C;
    S === "auto" ? (C = H.transitions.getAutoHeightDuration(tt.clientHeight), $.current = C) : C = nt, tt.style.transition = [H.transitions.create("opacity", { duration: C, delay: J }), H.transitions.create("transform", { duration: Zc ? C : C * 0.666, delay: J, easing: et })].join(","), g && g(tt, L);
  }), v = K(m), P = K(D), I = K((tt) => {
    const { duration: L, delay: nt, easing: J } = sg({ style: M, timeout: S, easing: p }, { mode: "exit" });
    let et;
    S === "auto" ? (et = H.transitions.getAutoHeightDuration(tt.clientHeight), $.current = et) : et = L, tt.style.transition = [H.transitions.create("opacity", { duration: et, delay: nt }), H.transitions.create("transform", { duration: Zc ? et : et * 0.666, delay: Zc ? nt : nt || et * 0.333, easing: J })].join(","), tt.style.opacity = 0, tt.style.transform = df(0.75), T && T(tt);
  }), at = K(E), W = (tt) => {
    S === "auto" && G.start($.current || 0, tt), s && s(w.current, tt);
  };
  return U.jsx(N, { appear: c, in: h, nodeRef: w, onEnter: Q, onEntered: v, onEntering: rt, onExit: I, onExited: at, onExiting: P, addEndListener: W, timeout: S === "auto" ? null : S, ...B, children: (tt, { ownerState: L, ...nt }) => O.cloneElement(f, { style: { opacity: 0, transform: df(0.75), visibility: tt === "exited" && !h ? "hidden" : void 0, ...Fx[tt], ...M, ...f.props.style }, ref: Z, ...nt }) });
});
pf && (pf.muiSupportAuto = true);
function Wx(a3, r, o = (s, c) => s === c) {
  return a3.length === r.length && a3.every((s, c) => o(s, r[c]));
}
const Jx = 2;
function pr(a3, r, o, s, c) {
  return o === 1 ? Math.min(a3 + r, c) : Math.max(a3 - r, s);
}
function S0(a3, r) {
  return a3 - r;
}
function yg(a3, r) {
  const { index: o } = a3.reduce((s, c, f) => {
    const p = Math.abs(r - c);
    return s === null || p < s.distance || p === s.distance ? { distance: p, index: f } : s;
  }, null) ?? {};
  return o;
}
function Ko(a3, r) {
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
function ds(a3, r, o) {
  return (a3 - r) * 100 / (o - r);
}
function Ix(a3, r, o) {
  return (o - r) * a3 + r;
}
function tT(a3) {
  if (Math.abs(a3) < 1) {
    const o = a3.toExponential().split("e-"), s = o[0].split(".")[1];
    return (s ? s.length : 0) + parseInt(o[1], 10);
  }
  const r = a3.toString().split(".")[1];
  return r ? r.length : 0;
}
function eT(a3, r, o) {
  const s = Math.round((a3 - o) / r) * r + o;
  return Number(s.toFixed(tT(r)));
}
function vg({ values: a3, newValue: r, index: o }) {
  const s = a3.slice();
  return s[o] = r, s.sort(S0);
}
function Po({ sliderRef: a3, activeIndex: r, setActive: o }) {
  var _a, _b2, _c;
  const s = Sa(a3.current);
  (!((_a = a3.current) == null ? void 0 : _a.contains(s.activeElement)) || Number((_b2 = s == null ? void 0 : s.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== r) && ((_c = a3.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${r}"]`).focus()), o && o(r);
}
function Fo(a3, r) {
  return typeof a3 == "number" && typeof r == "number" ? a3 === r : typeof a3 == "object" && typeof r == "object" ? Wx(a3, r) : false;
}
const nT = { horizontal: { offset: (a3) => ({ left: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, "horizontal-reverse": { offset: (a3) => ({ right: `${a3}%` }), leap: (a3) => ({ width: `${a3}%` }) }, vertical: { offset: (a3) => ({ bottom: `${a3}%` }), leap: (a3) => ({ height: `${a3}%` }) } }, aT = (a3) => a3;
let Wo;
function bg() {
  return Wo === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Wo = CSS.supports("touch-action", "none") : Wo = true), Wo;
}
function lT(a3) {
  const { "aria-labelledby": r, defaultValue: o, disabled: s = false, disableSwap: c = false, isRtl: f = false, marks: p = false, max: h = 100, min: g = 0, name: m, onChange: x, onChangeCommitted: T, orientation: E = "horizontal", rootRef: D, scale: M = aT, step: S = 1, shiftStep: N = 10, tabIndex: B, value: G } = a3, $ = O.useRef(void 0), [H, w] = O.useState(-1), [Z, K] = O.useState(-1), [rt, Q] = O.useState(false), v = O.useRef(0), P = O.useRef(null), [I, at] = r0({ controlled: G, default: o ?? g, name: "Slider" }), W = x && ((ot, it, At) => {
    const Mt = ot.nativeEvent || ot, Ot = new Mt.constructor(Mt.type, Mt);
    Object.defineProperty(Ot, "target", { writable: true, value: { value: it, name: m } }), P.current = it, x(Ot, it, At);
  }), tt = Array.isArray(I);
  let L = tt ? I.slice().sort(S0) : [I];
  L = L.map((ot) => ot == null ? g : hr(ot, g, h));
  const nt = p === true && S !== null ? [...Array(Math.floor((h - g) / S) + 1)].map((ot, it) => ({ value: g + S * it })) : p || [], J = nt.map((ot) => ot.value), [et, C] = O.useState(-1), j = O.useRef(null), st = Al(D, j), ft = (ot) => (it) => {
    var _a;
    const At = Number(it.currentTarget.getAttribute("data-index"));
    ss(it.target) && C(At), K(At), (_a = ot == null ? void 0 : ot.onFocus) == null ? void 0 : _a.call(ot, it);
  }, lt = (ot) => (it) => {
    var _a;
    ss(it.target) || C(-1), K(-1), (_a = ot == null ? void 0 : ot.onBlur) == null ? void 0 : _a.call(ot, it);
  }, Ct = (ot, it) => {
    const At = Number(ot.currentTarget.getAttribute("data-index")), Mt = L[At], Ot = J.indexOf(Mt);
    let wt = it;
    if (nt && S == null) {
      const Ee = J[J.length - 1];
      wt >= Ee ? wt = Ee : wt <= J[0] ? wt = J[0] : wt = wt < Mt ? J[Ot - 1] : J[Ot + 1];
    }
    if (wt = hr(wt, g, h), tt) {
      c && (wt = hr(wt, L[At - 1] || -1 / 0, L[At + 1] || 1 / 0));
      const Ee = wt;
      wt = vg({ values: L, newValue: wt, index: At });
      let Ge = At;
      c || (Ge = wt.indexOf(Ee)), Po({ sliderRef: j, activeIndex: Ge });
    }
    at(wt), C(At), W && !Fo(wt, I) && W(ot, wt, At), T && T(ot, P.current ?? wt);
  }, mt = (ot) => (it) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(it.key)) {
      it.preventDefault();
      const At = Number(it.currentTarget.getAttribute("data-index")), Mt = L[At];
      let Ot = null;
      if (S != null) {
        const wt = it.shiftKey ? N : S;
        switch (it.key) {
          case "ArrowUp":
            Ot = pr(Mt, wt, 1, g, h);
            break;
          case "ArrowRight":
            Ot = pr(Mt, wt, f ? -1 : 1, g, h);
            break;
          case "ArrowDown":
            Ot = pr(Mt, wt, -1, g, h);
            break;
          case "ArrowLeft":
            Ot = pr(Mt, wt, f ? 1 : -1, g, h);
            break;
          case "PageUp":
            Ot = pr(Mt, N, 1, g, h);
            break;
          case "PageDown":
            Ot = pr(Mt, N, -1, g, h);
            break;
          case "Home":
            Ot = g;
            break;
          case "End":
            Ot = h;
            break;
        }
      } else if (nt) {
        const wt = J[J.length - 1], Ee = J.indexOf(Mt), Ge = [f ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], Jt = [f ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        Ge.includes(it.key) ? Ee === 0 ? Ot = J[0] : Ot = J[Ee - 1] : Jt.includes(it.key) && (Ee === J.length - 1 ? Ot = wt : Ot = J[Ee + 1]);
      }
      Ot != null && Ct(it, Ot);
    }
    (_a = ot == null ? void 0 : ot.onKeyDown) == null ? void 0 : _a.call(ot, it);
  };
  Mf(() => {
    var _a;
    s && j.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [s]), s && H !== -1 && w(-1), s && et !== -1 && C(-1);
  const re = (ot) => (it) => {
    var _a;
    (_a = ot.onChange) == null ? void 0 : _a.call(ot, it), Ct(it, it.target.valueAsNumber);
  }, Et = O.useRef(void 0);
  let jt = E;
  f && E === "horizontal" && (jt += "-reverse");
  const Dt = ({ finger: ot, move: it = false }) => {
    const { current: At } = j, { width: Mt, height: Ot, bottom: wt, left: Ee } = At.getBoundingClientRect();
    let Ge;
    jt.startsWith("vertical") ? Ge = (wt - ot.y) / Ot : Ge = (ot.x - Ee) / Mt, jt.includes("-reverse") && (Ge = 1 - Ge);
    let Jt;
    if (Jt = Ix(Ge, g, h), S) Jt = eT(Jt, S, g);
    else {
      const ct = yg(J, Jt);
      Jt = J[ct];
    }
    Jt = hr(Jt, g, h);
    let Zt = 0;
    if (tt) {
      it ? Zt = Et.current : Zt = yg(L, Jt), c && (Jt = hr(Jt, L[Zt - 1] || -1 / 0, L[Zt + 1] || 1 / 0));
      const ct = Jt;
      Jt = vg({ values: L, newValue: Jt, index: Zt }), c && it || (Zt = Jt.indexOf(ct), Et.current = Zt);
    }
    return { newValue: Jt, activeIndex: Zt };
  }, pe = gn((ot) => {
    const it = Ko(ot, $);
    if (!it) return;
    if (v.current += 1, ot.type === "mousemove" && ot.buttons === 0) {
      Se(ot);
      return;
    }
    const { newValue: At, activeIndex: Mt } = Dt({ finger: it, move: true });
    Po({ sliderRef: j, activeIndex: Mt, setActive: w }), at(At), !rt && v.current > Jx && Q(true), W && !Fo(At, I) && W(ot, At, Mt);
  }), Se = gn((ot) => {
    const it = Ko(ot, $);
    if (Q(false), !it) return;
    const { newValue: At } = Dt({ finger: it, move: true });
    w(-1), ot.type === "touchend" && K(-1), T && T(ot, P.current ?? At), $.current = void 0, Oe();
  }), Qt = gn((ot) => {
    if (s) return;
    bg() || ot.preventDefault();
    const it = ot.changedTouches[0];
    it != null && ($.current = it.identifier);
    const At = Ko(ot, $);
    if (At !== false) {
      const { newValue: Ot, activeIndex: wt } = Dt({ finger: At });
      Po({ sliderRef: j, activeIndex: wt, setActive: w }), at(Ot), W && !Fo(Ot, I) && W(ot, Ot, wt);
    }
    v.current = 0;
    const Mt = Sa(j.current);
    Mt.addEventListener("touchmove", pe, { passive: true }), Mt.addEventListener("touchend", Se, { passive: true });
  }), Oe = O.useCallback(() => {
    const ot = Sa(j.current);
    ot.removeEventListener("mousemove", pe), ot.removeEventListener("mouseup", Se), ot.removeEventListener("touchmove", pe), ot.removeEventListener("touchend", Se);
  }, [Se, pe]);
  O.useEffect(() => {
    const { current: ot } = j;
    return ot.addEventListener("touchstart", Qt, { passive: bg() }), () => {
      ot.removeEventListener("touchstart", Qt), Oe();
    };
  }, [Oe, Qt]), O.useEffect(() => {
    s && Oe();
  }, [s, Oe]);
  const vn = (ot) => (it) => {
    var _a;
    if ((_a = ot.onMouseDown) == null ? void 0 : _a.call(ot, it), s || it.defaultPrevented || it.button !== 0) return;
    it.preventDefault();
    const At = Ko(it, $);
    if (At !== false) {
      const { newValue: Ot, activeIndex: wt } = Dt({ finger: At });
      Po({ sliderRef: j, activeIndex: wt, setActive: w }), at(Ot), W && !Fo(Ot, I) && W(it, Ot, wt);
    }
    v.current = 0;
    const Mt = Sa(j.current);
    Mt.addEventListener("mousemove", pe, { passive: true }), Mt.addEventListener("mouseup", Se);
  }, Ye = ds(tt ? L[0] : g, g, h), Ut = ds(L[L.length - 1], g, h) - Ye, oe = (ot = {}) => {
    const it = vr(ot), At = { onMouseDown: vn(it || {}) }, Mt = { ...it, ...At };
    return { ...ot, ref: st, ...Mt };
  }, rn = (ot) => (it) => {
    var _a;
    (_a = ot.onMouseOver) == null ? void 0 : _a.call(ot, it);
    const At = Number(it.currentTarget.getAttribute("data-index"));
    K(At);
  }, Ue = (ot) => (it) => {
    var _a;
    (_a = ot.onMouseLeave) == null ? void 0 : _a.call(ot, it), K(-1);
  }, Je = (ot = {}) => {
    const it = vr(ot), At = { onMouseOver: rn(it || {}), onMouseLeave: Ue(it || {}) };
    return { ...ot, ...it, ...At };
  }, vt = (ot) => ({ pointerEvents: H !== -1 && H !== ot ? "none" : void 0 });
  let Hn;
  return E === "vertical" && (Hn = f ? "vertical-rl" : "vertical-lr"), { active: H, axis: jt, axisProps: nT, dragging: rt, focusedThumbIndex: et, getHiddenInputProps: (ot = {}) => {
    const it = vr(ot), At = { onChange: re(it || {}), onFocus: ft(it || {}), onBlur: lt(it || {}), onKeyDown: mt(it || {}) }, Mt = { ...it, ...At };
    return { tabIndex: B, "aria-labelledby": r, "aria-orientation": E, "aria-valuemax": M(h), "aria-valuemin": M(g), name: m, type: "range", min: a3.min, max: a3.max, step: a3.step === null && a3.marks ? "any" : a3.step ?? void 0, disabled: s, ...ot, ...Mt, style: { ...bS, direction: f ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: Hn } };
  }, getRootProps: oe, getThumbProps: Je, marks: nt, open: Z, range: tt, rootRef: st, trackLeap: Ut, trackOffset: Ye, values: L, getThumbStyle: vt };
}
const rT = (a3) => !a3 || !as(a3);
function iT(a3) {
  return de("MuiSlider", a3);
}
const Nn = ue("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), oT = (a3) => {
  const { open: r } = a3;
  return { offset: xt(r && Nn.valueLabelOpen), circle: Nn.valueLabelCircle, label: Nn.valueLabelLabel };
};
function sT(a3) {
  const { children: r, className: o, value: s } = a3, c = oT(a3);
  return r ? O.cloneElement(r, { className: xt(r.props.className) }, U.jsxs(O.Fragment, { children: [r.props.children, U.jsx("span", { className: xt(c.offset, o), "aria-hidden": true, children: U.jsx("span", { className: c.circle, children: U.jsx("span", { className: c.label, children: s }) }) })] })) : null;
}
function Sg(a3) {
  return a3;
}
const uT = bt("span", { name: "MuiSlider", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`color${gt(o.color)}`], o.size !== "medium" && r[`size${gt(o.size)}`], o.marked && r.marked, o.orientation === "vertical" && r.vertical, o.track === "inverted" && r.trackInverted, o.track === false && r.trackFalse];
} })(Vt(({ theme: a3 }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${Nn.disabled}`]: { pointerEvents: "none", cursor: "default", color: (a3.vars || a3).palette.grey[400] }, [`&.${Nn.dragging}`]: { [`& .${Nn.thumb}, & .${Nn.track}`]: { transition: "none" } }, variants: [...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { color: (a3.vars || a3).palette[r].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), cT = bt("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (a3, r) => r.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), fT = bt("span", { name: "MuiSlider", slot: "Track", overridesResolver: (a3, r) => r.track })(Vt(({ theme: a3 }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: a3.transitions.create(["left", "width", "bottom", "height"], { duration: a3.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r, track: "inverted" }, style: { ...a3.vars ? { backgroundColor: a3.vars.palette.Slider[`${r}Track`], borderColor: a3.vars.palette.Slider[`${r}Track`] } : { backgroundColor: Wa(a3.palette[r].main, 0.62), borderColor: Wa(a3.palette[r].main, 0.62), ...a3.applyStyles("dark", { backgroundColor: Fa(a3.palette[r].main, 0.5) }), ...a3.applyStyles("dark", { borderColor: Fa(a3.palette[r].main, 0.5) }) } } }))] }))), dT = bt("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.thumb, r[`thumbColor${gt(o.color)}`], o.size !== "medium" && r[`thumbSize${gt(o.size)}`]];
} })(Vt(({ theme: a3 }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: a3.transitions.create(["box-shadow", "left", "bottom"], { duration: a3.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (a3.vars || a3).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${Nn.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(a3.palette).filter(yn()).map(([r]) => ({ props: { color: r }, style: { [`&:hover, &.${Nn.focusVisible}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 8px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${Ta(a3.palette[r].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${Nn.active}`]: { ...a3.vars ? { boxShadow: `0px 0px 0px 14px rgba(${a3.vars.palette[r].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${Ta(a3.palette[r].main, 0.16)}` } } } }))] }))), pT = bt(sT, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (a3, r) => r.valueLabel })(Vt(({ theme: a3 }) => ({ zIndex: 1, whiteSpace: "nowrap", ...a3.typography.body2, fontWeight: 500, transition: a3.transitions.create(["transform"], { duration: a3.transitions.duration.shortest }), position: "absolute", backgroundColor: (a3.vars || a3).palette.grey[600], borderRadius: 2, color: (a3.vars || a3).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${Nn.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${Nn.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: a3.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), hT = bt("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (a3) => Nf(a3) && a3 !== "markActive", overridesResolver: (a3, r) => {
  const { markActive: o } = a3;
  return [r.mark, o && r.markActive];
} })(Vt(({ theme: a3 }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (a3.vars || a3).palette.background.paper, opacity: 0.8 } }] }))), mT = bt("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (a3) => Nf(a3) && a3 !== "markLabelActive", overridesResolver: (a3, r) => r.markLabel })(Vt(({ theme: a3 }) => ({ ...a3.typography.body2, color: (a3.vars || a3).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (a3.vars || a3).palette.text.primary } }] }))), gT = (a3) => {
  const { disabled: r, dragging: o, marked: s, orientation: c, track: f, classes: p, color: h, size: g } = a3, m = { root: ["root", r && "disabled", o && "dragging", s && "marked", c === "vertical" && "vertical", f === "inverted" && "trackInverted", f === false && "trackFalse", h && `color${gt(h)}`, g && `size${gt(g)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", r && "disabled", g && `thumbSize${gt(g)}`, h && `thumbColor${gt(h)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return be(m, iT, p);
}, yT = ({ children: a3 }) => a3, x0 = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiSlider" }), c = Df(), { "aria-label": f, "aria-valuetext": p, "aria-labelledby": h, component: g = "span", components: m = {}, componentsProps: x = {}, color: T = "primary", classes: E, className: D, disableSwap: M = false, disabled: S = false, getAriaLabel: N, getAriaValueText: B, marks: G = false, max: $ = 100, min: H = 0, name: w, onChange: Z, onChangeCommitted: K, orientation: rt = "horizontal", shiftStep: Q = 10, size: v = "medium", step: P = 1, scale: I = Sg, slotProps: at, slots: W, tabIndex: tt, track: L = "normal", value: nt, valueLabelDisplay: J = "off", valueLabelFormat: et = Sg, ...C } = s, j = { ...s, isRtl: c, max: $, min: H, classes: E, disabled: S, disableSwap: M, orientation: rt, marks: G, color: T, size: v, step: P, shiftStep: Q, scale: I, track: L, valueLabelDisplay: J, valueLabelFormat: et }, { axisProps: st, getRootProps: ft, getHiddenInputProps: lt, getThumbProps: Ct, open: mt, active: re, axis: Et, focusedThumbIndex: jt, range: Dt, dragging: pe, marks: Se, values: Qt, trackOffset: Oe, trackLeap: vn, getThumbStyle: Ye } = lT({ ...j, rootRef: o });
  j.marked = Se.length > 0 && Se.some((qt) => qt.label), j.dragging = pe, j.focusedThumbIndex = jt;
  const Ut = gT(j), oe = (W == null ? void 0 : W.root) ?? m.Root ?? uT, rn = (W == null ? void 0 : W.rail) ?? m.Rail ?? cT, Ue = (W == null ? void 0 : W.track) ?? m.Track ?? fT, Je = (W == null ? void 0 : W.thumb) ?? m.Thumb ?? dT, vt = (W == null ? void 0 : W.valueLabel) ?? m.ValueLabel ?? pT, Hn = (W == null ? void 0 : W.mark) ?? m.Mark ?? hT, He = (W == null ? void 0 : W.markLabel) ?? m.MarkLabel ?? mT, ot = (W == null ? void 0 : W.input) ?? m.Input ?? "input", it = (at == null ? void 0 : at.root) ?? x.root, At = (at == null ? void 0 : at.rail) ?? x.rail, Mt = (at == null ? void 0 : at.track) ?? x.track, Ot = (at == null ? void 0 : at.thumb) ?? x.thumb, wt = (at == null ? void 0 : at.valueLabel) ?? x.valueLabel, Ee = (at == null ? void 0 : at.mark) ?? x.mark, Ge = (at == null ? void 0 : at.markLabel) ?? x.markLabel, Jt = (at == null ? void 0 : at.input) ?? x.input, Zt = dn({ elementType: oe, getSlotProps: ft, externalSlotProps: it, externalForwardedProps: C, additionalProps: { ...rT(oe) && { as: g } }, ownerState: { ...j, ...it == null ? void 0 : it.ownerState }, className: [Ut.root, D] }), ct = dn({ elementType: rn, externalSlotProps: At, ownerState: j, className: Ut.rail }), dt = dn({ elementType: Ue, externalSlotProps: Mt, additionalProps: { style: { ...st[Et].offset(Oe), ...st[Et].leap(vn) } }, ownerState: { ...j, ...Mt == null ? void 0 : Mt.ownerState }, className: Ut.track }), St = dn({ elementType: Je, getSlotProps: Ct, externalSlotProps: Ot, ownerState: { ...j, ...Ot == null ? void 0 : Ot.ownerState }, className: Ut.thumb }), Bt = dn({ elementType: vt, externalSlotProps: wt, ownerState: { ...j, ...wt == null ? void 0 : wt.ownerState }, className: Ut.valueLabel }), ne = dn({ elementType: Hn, externalSlotProps: Ee, ownerState: j, className: Ut.mark }), Ve = dn({ elementType: He, externalSlotProps: Ge, ownerState: j, className: Ut.markLabel }), Ie = dn({ elementType: ot, getSlotProps: lt, externalSlotProps: Jt, ownerState: j });
  return U.jsxs(oe, { ...Zt, children: [U.jsx(rn, { ...ct }), U.jsx(Ue, { ...dt }), Se.filter((qt) => qt.value >= H && qt.value <= $).map((qt, Kt) => {
    const bn = ds(qt.value, H, $), Gn = st[Et].offset(bn);
    let jn;
    return L === false ? jn = Qt.includes(qt.value) : jn = L === "normal" && (Dt ? qt.value >= Qt[0] && qt.value <= Qt[Qt.length - 1] : qt.value <= Qt[0]) || L === "inverted" && (Dt ? qt.value <= Qt[0] || qt.value >= Qt[Qt.length - 1] : qt.value >= Qt[0]), U.jsxs(O.Fragment, { children: [U.jsx(Hn, { "data-index": Kt, ...ne, ...!as(Hn) && { markActive: jn }, style: { ...Gn, ...ne.style }, className: xt(ne.className, jn && Ut.markActive) }), qt.label != null ? U.jsx(He, { "aria-hidden": true, "data-index": Kt, ...Ve, ...!as(He) && { markLabelActive: jn }, style: { ...Gn, ...Ve.style }, className: xt(Ut.markLabel, Ve.className, jn && Ut.markLabelActive), children: qt.label }) : null] }, Kt);
  }), Qt.map((qt, Kt) => {
    const bn = ds(qt, H, $), Gn = st[Et].offset(bn), jn = J === "off" ? yT : vt;
    return U.jsx(jn, { ...!as(jn) && { valueLabelFormat: et, valueLabelDisplay: J, value: typeof et == "function" ? et(I(qt), Kt) : et, index: Kt, open: mt === Kt || re === Kt || J === "on", disabled: S }, ...Bt, children: U.jsx(Je, { "data-index": Kt, ...St, className: xt(Ut.thumb, St.className, re === Kt && Ut.active, jt === Kt && Ut.focusVisible), style: { ...Gn, ...Ye(Kt), ...St.style }, children: U.jsx(ot, { "data-index": Kt, "aria-label": N ? N(Kt) : f, "aria-valuenow": I(qt), "aria-labelledby": h, "aria-valuetext": B ? B(I(qt), Kt) : p, value: Qt[Kt], ...Ie }) }) }, Kt);
  })] });
});
function vT(a3 = {}) {
  const { autoHideDuration: r = null, disableWindowBlurListener: o = false, onClose: s, open: c, resumeHideDuration: f } = a3, p = _f();
  O.useEffect(() => {
    if (!c) return;
    function B(G) {
      G.defaultPrevented || G.key === "Escape" && (s == null ? void 0 : s(G, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", B), () => {
      document.removeEventListener("keydown", B);
    };
  }, [c, s]);
  const h = gn((B, G) => {
    s == null ? void 0 : s(B, G);
  }), g = gn((B) => {
    !s || B == null || p.start(B, () => {
      h(null, "timeout");
    });
  });
  O.useEffect(() => (c && g(r), p.clear), [c, r, g, p]);
  const m = (B) => {
    s == null ? void 0 : s(B, "clickaway");
  }, x = p.clear, T = O.useCallback(() => {
    r != null && g(f ?? r * 0.5);
  }, [r, f, g]), E = (B) => (G) => {
    const $ = B.onBlur;
    $ == null ? void 0 : $(G), T();
  }, D = (B) => (G) => {
    const $ = B.onFocus;
    $ == null ? void 0 : $(G), x();
  }, M = (B) => (G) => {
    const $ = B.onMouseEnter;
    $ == null ? void 0 : $(G), x();
  }, S = (B) => (G) => {
    const $ = B.onMouseLeave;
    $ == null ? void 0 : $(G), T();
  };
  return O.useEffect(() => {
    if (!o && c) return window.addEventListener("focus", T), window.addEventListener("blur", x), () => {
      window.removeEventListener("focus", T), window.removeEventListener("blur", x);
    };
  }, [o, c, T, x]), { getRootProps: (B = {}) => {
    const G = { ...vr(a3), ...vr(B) };
    return { role: "presentation", ...B, ...G, onBlur: E(G), onFocus: D(G), onMouseEnter: M(G), onMouseLeave: S(G) };
  }, onClickAway: m };
}
function bT(a3) {
  return de("MuiSnackbarContent", a3);
}
ue("MuiSnackbarContent", ["root", "message", "action"]);
const ST = (a3) => {
  const { classes: r } = a3;
  return be({ root: ["root"], action: ["action"], message: ["message"] }, bT, r);
}, xT = bt(Ms, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (a3, r) => r.root })(Vt(({ theme: a3 }) => {
  const r = a3.palette.mode === "light" ? 0.8 : 0.98, o = n0(a3.palette.background.default, r);
  return { ...a3.typography.body2, color: a3.vars ? a3.vars.palette.SnackbarContent.color : a3.palette.getContrastText(o), backgroundColor: a3.vars ? a3.vars.palette.SnackbarContent.bg : o, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (a3.vars || a3).shape.borderRadius, flexGrow: 1, [a3.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), TT = bt("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (a3, r) => r.message })({ padding: "8px 0" }), CT = bt("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (a3, r) => r.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), ET = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiSnackbarContent" }), { action: c, className: f, message: p, role: h = "alert", ...g } = s, m = s, x = ST(m);
  return U.jsxs(xT, { role: h, square: true, elevation: 6, className: xt(x.root, f), ownerState: m, ref: o, ...g, children: [U.jsx(TT, { className: x.message, ownerState: m, children: p }), c ? U.jsx(CT, { className: x.action, ownerState: m, children: c }) : null] });
});
function AT(a3) {
  return de("MuiSnackbar", a3);
}
ue("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const wT = (a3) => {
  const { classes: r, anchorOrigin: o } = a3, s = { root: ["root", `anchorOrigin${gt(o.vertical)}${gt(o.horizontal)}`] };
  return be(s, AT, r);
}, xg = bt("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, r[`anchorOrigin${gt(o.anchorOrigin.vertical)}${gt(o.anchorOrigin.horizontal)}`]];
} })(Vt(({ theme: a3 }) => ({ zIndex: (a3.vars || a3).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: r }) => r.anchorOrigin.vertical === "top", style: { top: 8, [a3.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.vertical !== "top", style: { bottom: 8, [a3.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [a3.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [a3.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: r }) => r.anchorOrigin.horizontal === "center", style: { [a3.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), RT = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiSnackbar" }), c = Rs(), f = { enter: c.transitions.duration.enteringScreen, exit: c.transitions.duration.leavingScreen }, { action: p, anchorOrigin: { vertical: h, horizontal: g } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: m = null, children: x, className: T, ClickAwayListenerProps: E, ContentProps: D, disableWindowBlurListener: M = false, message: S, onBlur: N, onClose: B, onFocus: G, onMouseEnter: $, onMouseLeave: H, open: w, resumeHideDuration: Z, TransitionComponent: K = pf, transitionDuration: rt = f, TransitionProps: { onEnter: Q, onExited: v, ...P } = {}, ...I } = s, at = { ...s, anchorOrigin: { vertical: h, horizontal: g }, autoHideDuration: m, disableWindowBlurListener: M, TransitionComponent: K, transitionDuration: rt }, W = wT(at), { getRootProps: tt, onClickAway: L } = vT({ ...at }), [nt, J] = O.useState(true), et = dn({ elementType: xg, getSlotProps: tt, externalForwardedProps: I, ownerState: at, additionalProps: { ref: o }, className: [W.root, T] }), C = (st) => {
    J(true), v && v(st);
  }, j = (st, ft) => {
    J(false), Q && Q(st, ft);
  };
  return !w && nt ? null : U.jsx(Hx, { onClickAway: L, ...E, children: U.jsx(xg, { ...et, children: U.jsx(K, { appear: true, in: w, timeout: rt, direction: h === "top" ? "down" : "up", onEnter: j, onExited: C, ...P, children: x || U.jsx(ET, { message: S, action: p, ...D }) }) }) });
});
function MT(a3) {
  return de("MuiSwitch", a3);
}
const We = ue("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), OT = (a3) => {
  const { classes: r, edge: o, size: s, color: c, checked: f, disabled: p } = a3, h = { root: ["root", o && `edge${gt(o)}`, `size${gt(s)}`], switchBase: ["switchBase", `color${gt(c)}`, f && "checked", p && "disabled"], thumb: ["thumb"], track: ["track"], input: ["input"] }, g = be(h, MT, r);
  return { ...r, ...g };
}, zT = bt("span", { name: "MuiSwitch", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.edge && r[`edge${gt(o.edge)}`], r[`size${gt(o.size)}`]];
} })({ display: "inline-flex", width: 34 + 12 * 2, height: 14 + 12 * 2, overflow: "hidden", padding: 12, boxSizing: "border-box", position: "relative", flexShrink: 0, zIndex: 0, verticalAlign: "middle", "@media print": { colorAdjust: "exact" }, variants: [{ props: { edge: "start" }, style: { marginLeft: -8 } }, { props: { edge: "end" }, style: { marginRight: -8 } }, { props: { size: "small" }, style: { width: 40, height: 24, padding: 7, [`& .${We.thumb}`]: { width: 16, height: 16 }, [`& .${We.switchBase}`]: { padding: 4, [`&.${We.checked}`]: { transform: "translateX(16px)" } } } }] }), _T = bt(Nx, { name: "MuiSwitch", slot: "SwitchBase", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.switchBase, { [`& .${We.input}`]: r.input }, o.color !== "default" && r[`color${gt(o.color)}`]];
} })(Vt(({ theme: a3 }) => ({ position: "absolute", top: 0, left: 0, zIndex: 1, color: a3.vars ? a3.vars.palette.Switch.defaultColor : `${a3.palette.mode === "light" ? a3.palette.common.white : a3.palette.grey[300]}`, transition: a3.transitions.create(["left", "transform"], { duration: a3.transitions.duration.shortest }), [`&.${We.checked}`]: { transform: "translateX(20px)" }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch.defaultDisabledColor : `${a3.palette.mode === "light" ? a3.palette.grey[100] : a3.palette.grey[600]}` }, [`&.${We.checked} + .${We.track}`]: { opacity: 0.5 }, [`&.${We.disabled} + .${We.track}`]: { opacity: a3.vars ? a3.vars.opacity.switchTrackDisabled : `${a3.palette.mode === "light" ? 0.12 : 0.2}` }, [`& .${We.input}`]: { left: "-100%", width: "300%" } })), Vt(({ theme: a3 }) => ({ "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ta(a3.palette.action.active, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, variants: [...Object.entries(a3.palette).filter(yn(["light"])).map(([r]) => ({ props: { color: r }, style: { [`&.${We.checked}`]: { color: (a3.vars || a3).palette[r].main, "&:hover": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette[r].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : Ta(a3.palette[r].main, a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${We.disabled}`]: { color: a3.vars ? a3.vars.palette.Switch[`${r}DisabledColor`] : `${a3.palette.mode === "light" ? Wa(a3.palette[r].main, 0.62) : Fa(a3.palette[r].main, 0.55)}` } }, [`&.${We.checked} + .${We.track}`]: { backgroundColor: (a3.vars || a3).palette[r].main } } }))] }))), DT = bt("span", { name: "MuiSwitch", slot: "Track", overridesResolver: (a3, r) => r.track })(Vt(({ theme: a3 }) => ({ height: "100%", width: "100%", borderRadius: 14 / 2, zIndex: -1, transition: a3.transitions.create(["opacity", "background-color"], { duration: a3.transitions.duration.shortest }), backgroundColor: a3.vars ? a3.vars.palette.common.onBackground : `${a3.palette.mode === "light" ? a3.palette.common.black : a3.palette.common.white}`, opacity: a3.vars ? a3.vars.opacity.switchTrack : `${a3.palette.mode === "light" ? 0.38 : 0.3}` }))), kT = bt("span", { name: "MuiSwitch", slot: "Thumb", overridesResolver: (a3, r) => r.thumb })(Vt(({ theme: a3 }) => ({ boxShadow: (a3.vars || a3).shadows[1], backgroundColor: "currentColor", width: 20, height: 20, borderRadius: "50%" }))), Tg = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiSwitch" }), { className: c, color: f = "primary", edge: p = false, size: h = "medium", sx: g, ...m } = s, x = { ...s, color: f, edge: p, size: h }, T = OT(x), E = U.jsx(kT, { className: T.thumb, ownerState: x });
  return U.jsxs(zT, { className: xt(T.root, c), sx: g, ownerState: x, children: [U.jsx(_T, { type: "checkbox", icon: E, checkedIcon: E, ref: o, ownerState: x, ...m, classes: { ...T, root: T.switchBase } }), U.jsx(DT, { className: T.track, ownerState: x })] });
});
function BT(a3) {
  return de("MuiTab", a3);
}
const Dn = ue("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), NT = (a3) => {
  const { classes: r, textColor: o, fullWidth: s, wrapped: c, icon: f, label: p, selected: h, disabled: g } = a3, m = { root: ["root", f && p && "labelIcon", `textColor${gt(o)}`, s && "fullWidth", c && "wrapped", h && "selected", g && "disabled"], icon: ["iconWrapper", "icon"] };
  return be(m, BT, r);
}, UT = bt(Ni, { name: "MuiTab", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.label && o.icon && r.labelIcon, r[`textColor${gt(o.textColor)}`], o.fullWidth && r.fullWidth, o.wrapped && r.wrapped, { [`& .${Dn.iconWrapper}`]: r.iconWrapper }, { [`& .${Dn.icon}`]: r.icon }];
} })(Vt(({ theme: a3 }) => ({ ...a3.typography.button, maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center", lineHeight: 1.25, variants: [{ props: ({ ownerState: r }) => r.label && (r.iconPosition === "top" || r.iconPosition === "bottom"), style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.label && r.iconPosition !== "top" && r.iconPosition !== "bottom", style: { flexDirection: "row" } }, { props: ({ ownerState: r }) => r.icon && r.label, style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "top", style: { [`& > .${Dn.icon}`]: { marginBottom: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "bottom", style: { [`& > .${Dn.icon}`]: { marginTop: 6 } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "start", style: { [`& > .${Dn.icon}`]: { marginRight: a3.spacing(1) } } }, { props: ({ ownerState: r, iconPosition: o }) => r.icon && r.label && o === "end", style: { [`& > .${Dn.icon}`]: { marginLeft: a3.spacing(1) } } }, { props: { textColor: "inherit" }, style: { color: "inherit", opacity: 0.6, [`&.${Dn.selected}`]: { opacity: 1 }, [`&.${Dn.disabled}`]: { opacity: (a3.vars || a3).palette.action.disabledOpacity } } }, { props: { textColor: "primary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.primary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: { textColor: "secondary" }, style: { color: (a3.vars || a3).palette.text.secondary, [`&.${Dn.selected}`]: { color: (a3.vars || a3).palette.secondary.main }, [`&.${Dn.disabled}`]: { color: (a3.vars || a3).palette.text.disabled } } }, { props: ({ ownerState: r }) => r.fullWidth, style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" } }, { props: ({ ownerState: r }) => r.wrapped, style: { fontSize: a3.typography.pxToRem(12) } }] }))), Kc = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiTab" }), { className: c, disabled: f = false, disableFocusRipple: p = false, fullWidth: h, icon: g, iconPosition: m = "top", indicator: x, label: T, onChange: E, onClick: D, onFocus: M, selected: S, selectionFollowsFocus: N, textColor: B = "inherit", value: G, wrapped: $ = false, ...H } = s, w = { ...s, disabled: f, disableFocusRipple: p, selected: S, icon: !!g, iconPosition: m, label: !!T, fullWidth: h, textColor: B, wrapped: $ }, Z = NT(w), K = g && T && O.isValidElement(g) ? O.cloneElement(g, { className: xt(Z.icon, g.props.className) }) : g, rt = (v) => {
    !S && E && E(v, G), D && D(v);
  }, Q = (v) => {
    N && !S && E && E(v, G), M && M(v);
  };
  return U.jsxs(UT, { focusRipple: !p, className: xt(Z.root, c), ref: o, role: "tab", "aria-selected": S, disabled: f, onClick: rt, onFocus: Q, ownerState: w, tabIndex: S ? 0 : -1, ...H, children: [m === "top" || m === "start" ? U.jsxs(O.Fragment, { children: [K, T] }) : U.jsxs(O.Fragment, { children: [T, K] }), x] });
});
function HT(a3) {
  return de("MuiToolbar", a3);
}
ue("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const jT = (a3) => {
  const { classes: r, disableGutters: o, variant: s } = a3;
  return be({ root: ["root", !o && "gutters", s] }, HT, r);
}, LT = bt("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, !o.disableGutters && r.gutters, r[o.variant]];
} })(Vt(({ theme: a3 }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: a3.spacing(2), paddingRight: a3.spacing(2), [a3.breakpoints.up("sm")]: { paddingLeft: a3.spacing(3), paddingRight: a3.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: a3.mixins.toolbar }] }))), $T = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiToolbar" }), { className: c, component: f = "div", disableGutters: p = false, variant: h = "regular", ...g } = s, m = { ...s, component: f, disableGutters: p, variant: h }, x = jT(m);
  return U.jsx(LT, { as: f, className: xt(x.root, c), ref: o, ownerState: m, ...g });
}), qT = Ca(U.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), YT = Ca(U.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
function GT(a3) {
  return (1 + Math.sin(Math.PI * a3 - Math.PI / 2)) / 2;
}
function VT(a3, r, o, s = {}, c = () => {
}) {
  const { ease: f = GT, duration: p = 300 } = s;
  let h = null;
  const g = r[a3];
  let m = false;
  const x = () => {
    m = true;
  }, T = (E) => {
    if (m) {
      c(new Error("Animation cancelled"));
      return;
    }
    h === null && (h = E);
    const D = Math.min(1, (E - h) / p);
    if (r[a3] = f(D) * (o - g) + g, D >= 1) {
      requestAnimationFrame(() => {
        c(null);
      });
      return;
    }
    requestAnimationFrame(T);
  };
  return g === o ? (c(new Error("Element already at target position")), x) : (requestAnimationFrame(T), x);
}
const XT = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function QT(a3) {
  const { onChange: r, ...o } = a3, s = O.useRef(), c = O.useRef(null), f = () => {
    s.current = c.current.offsetHeight - c.current.clientHeight;
  };
  return Mf(() => {
    const p = a0(() => {
      const g = s.current;
      f(), g !== s.current && r(s.current);
    }), h = l0(c.current);
    return h.addEventListener("resize", p), () => {
      p.clear(), h.removeEventListener("resize", p);
    };
  }, [r]), O.useEffect(() => {
    f(), r(s.current);
  }, [r]), U.jsx("div", { style: XT, ...o, ref: c });
}
function ZT(a3) {
  return de("MuiTabScrollButton", a3);
}
const KT = ue("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), PT = (a3) => {
  const { classes: r, orientation: o, disabled: s } = a3;
  return be({ root: ["root", o, s && "disabled"] }, ZT, r);
}, FT = bt(Ni, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.root, o.orientation && r[o.orientation]];
} })({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${KT.disabled}`]: { opacity: 0 }, variants: [{ props: { orientation: "vertical" }, style: { width: "100%", height: 40, "& svg": { transform: "var(--TabScrollButton-svgRotate)" } } }] }), WT = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiTabScrollButton" }), { className: c, slots: f = {}, slotProps: p = {}, direction: h, orientation: g, disabled: m, ...x } = s, T = Df(), E = { isRtl: T, ...s }, D = PT(E), M = f.StartScrollButtonIcon ?? qT, S = f.EndScrollButtonIcon ?? YT, N = dn({ elementType: M, externalSlotProps: p.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: E }), B = dn({ elementType: S, externalSlotProps: p.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: E });
  return U.jsx(FT, { component: "div", className: xt(D.root, c), ref: o, role: null, ownerState: E, tabIndex: null, ...x, style: { ...x.style, ...g === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${T ? -90 : 90}deg)` } }, children: h === "left" ? U.jsx(M, { ...N }) : U.jsx(S, { ...B }) });
});
function JT(a3) {
  return de("MuiTabs", a3);
}
const Pc = ue("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Cg = (a3, r) => a3 === r ? a3.firstChild : r && r.nextElementSibling ? r.nextElementSibling : a3.firstChild, Eg = (a3, r) => a3 === r ? a3.lastChild : r && r.previousElementSibling ? r.previousElementSibling : a3.lastChild, Jo = (a3, r, o) => {
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
}, IT = (a3) => {
  const { vertical: r, fixed: o, hideScrollbar: s, scrollableX: c, scrollableY: f, centered: p, scrollButtonsHideMobile: h, classes: g } = a3;
  return be({ root: ["root", r && "vertical"], scroller: ["scroller", o && "fixed", s && "hideScrollbar", c && "scrollableX", f && "scrollableY"], flexContainer: ["flexContainer", r && "flexContainerVertical", p && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", h && "scrollButtonsHideMobile"], scrollableX: [c && "scrollableX"], hideScrollbar: [s && "hideScrollbar"] }, JT, g);
}, tC = bt("div", { name: "MuiTabs", slot: "Root", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [{ [`& .${Pc.scrollButtons}`]: r.scrollButtons }, { [`& .${Pc.scrollButtons}`]: o.scrollButtonsHideMobile && r.scrollButtonsHideMobile }, r.root, o.vertical && r.vertical];
} })(Vt(({ theme: a3 }) => ({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex", variants: [{ props: ({ ownerState: r }) => r.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: r }) => r.scrollButtonsHideMobile, style: { [`& .${Pc.scrollButtons}`]: { [a3.breakpoints.down("sm")]: { display: "none" } } } }] }))), eC = bt("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.scroller, o.fixed && r.fixed, o.hideScrollbar && r.hideScrollbar, o.scrollableX && r.scrollableX, o.scrollableY && r.scrollableY];
} })({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap", variants: [{ props: ({ ownerState: a3 }) => a3.fixed, style: { overflowX: "hidden", width: "100%" } }, { props: ({ ownerState: a3 }) => a3.hideScrollbar, style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, { props: ({ ownerState: a3 }) => a3.scrollableX, style: { overflowX: "auto", overflowY: "hidden" } }, { props: ({ ownerState: a3 }) => a3.scrollableY, style: { overflowY: "auto", overflowX: "hidden" } }] }), nC = bt("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: (a3, r) => {
  const { ownerState: o } = a3;
  return [r.flexContainer, o.vertical && r.flexContainerVertical, o.centered && r.centered];
} })({ display: "flex", variants: [{ props: ({ ownerState: a3 }) => a3.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: a3 }) => a3.centered, style: { justifyContent: "center" } }] }), aC = bt("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (a3, r) => r.indicator })(Vt(({ theme: a3 }) => ({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: a3.transitions.create(), variants: [{ props: { indicatorColor: "primary" }, style: { backgroundColor: (a3.vars || a3).palette.primary.main } }, { props: { indicatorColor: "secondary" }, style: { backgroundColor: (a3.vars || a3).palette.secondary.main } }, { props: ({ ownerState: r }) => r.vertical, style: { height: "100%", width: 2, right: 0 } }] }))), lC = bt(QT)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), Ag = {}, rC = O.forwardRef(function(r, o) {
  const s = Ce({ props: r, name: "MuiTabs" }), c = Rs(), f = Df(), { "aria-label": p, "aria-labelledby": h, action: g, centered: m = false, children: x, className: T, component: E = "div", allowScrollButtonsMobile: D = false, indicatorColor: M = "primary", onChange: S, orientation: N = "horizontal", ScrollButtonComponent: B = WT, scrollButtons: G = "auto", selectionFollowsFocus: $, slots: H = {}, slotProps: w = {}, TabIndicatorProps: Z = {}, TabScrollButtonProps: K = {}, textColor: rt = "primary", value: Q, variant: v = "standard", visibleScrollbar: P = false, ...I } = s, at = v === "scrollable", W = N === "vertical", tt = W ? "scrollTop" : "scrollLeft", L = W ? "top" : "left", nt = W ? "bottom" : "right", J = W ? "clientHeight" : "clientWidth", et = W ? "height" : "width", C = { ...s, component: E, allowScrollButtonsMobile: D, indicatorColor: M, orientation: N, vertical: W, scrollButtons: G, textColor: rt, variant: v, visibleScrollbar: P, fixed: !at, hideScrollbar: at && !P, scrollableX: at && !W, scrollableY: at && W, centered: m && !at, scrollButtonsHideMobile: !D }, j = IT(C), st = dn({ elementType: H.StartScrollButtonIcon, externalSlotProps: w.startScrollButtonIcon, ownerState: C }), ft = dn({ elementType: H.EndScrollButtonIcon, externalSlotProps: w.endScrollButtonIcon, ownerState: C }), [lt, Ct] = O.useState(false), [mt, re] = O.useState(Ag), [Et, jt] = O.useState(false), [Dt, pe] = O.useState(false), [Se, Qt] = O.useState(false), [Oe, vn] = O.useState({ overflow: "hidden", scrollbarWidth: 0 }), Ye = /* @__PURE__ */ new Map(), Ut = O.useRef(null), oe = O.useRef(null), rn = () => {
    const ct = Ut.current;
    let dt;
    if (ct) {
      const Bt = ct.getBoundingClientRect();
      dt = { clientWidth: ct.clientWidth, scrollLeft: ct.scrollLeft, scrollTop: ct.scrollTop, scrollWidth: ct.scrollWidth, top: Bt.top, bottom: Bt.bottom, left: Bt.left, right: Bt.right };
    }
    let St;
    if (ct && Q !== false) {
      const Bt = oe.current.children;
      if (Bt.length > 0) {
        const ne = Bt[Ye.get(Q)];
        St = ne ? ne.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: dt, tabMeta: St };
  }, Ue = gn(() => {
    const { tabsMeta: ct, tabMeta: dt } = rn();
    let St = 0, Bt;
    W ? (Bt = "top", dt && ct && (St = dt.top - ct.top + ct.scrollTop)) : (Bt = f ? "right" : "left", dt && ct && (St = (f ? -1 : 1) * (dt[Bt] - ct[Bt] + ct.scrollLeft)));
    const ne = { [Bt]: St, [et]: dt ? dt[et] : 0 };
    if (typeof mt[Bt] != "number" || typeof mt[et] != "number") re(ne);
    else {
      const Ve = Math.abs(mt[Bt] - ne[Bt]), Ie = Math.abs(mt[et] - ne[et]);
      (Ve >= 1 || Ie >= 1) && re(ne);
    }
  }), Je = (ct, { animation: dt = true } = {}) => {
    dt ? VT(tt, Ut.current, ct, { duration: c.transitions.duration.standard }) : Ut.current[tt] = ct;
  }, vt = (ct) => {
    let dt = Ut.current[tt];
    W ? dt += ct : dt += ct * (f ? -1 : 1), Je(dt);
  }, Hn = () => {
    const ct = Ut.current[J];
    let dt = 0;
    const St = Array.from(oe.current.children);
    for (let Bt = 0; Bt < St.length; Bt += 1) {
      const ne = St[Bt];
      if (dt + ne[J] > ct) {
        Bt === 0 && (dt = ct);
        break;
      }
      dt += ne[J];
    }
    return dt;
  }, He = () => {
    vt(-1 * Hn());
  }, ot = () => {
    vt(Hn());
  }, it = O.useCallback((ct) => {
    vn({ overflow: null, scrollbarWidth: ct });
  }, []), At = () => {
    const ct = {};
    ct.scrollbarSizeListener = at ? U.jsx(lC, { onChange: it, className: xt(j.scrollableX, j.hideScrollbar) }) : null;
    const St = at && (G === "auto" && (Et || Dt) || G === true);
    return ct.scrollButtonStart = St ? U.jsx(B, { slots: { StartScrollButtonIcon: H.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: st }, orientation: N, direction: f ? "right" : "left", onClick: He, disabled: !Et, ...K, className: xt(j.scrollButtons, K.className) }) : null, ct.scrollButtonEnd = St ? U.jsx(B, { slots: { EndScrollButtonIcon: H.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: ft }, orientation: N, direction: f ? "left" : "right", onClick: ot, disabled: !Dt, ...K, className: xt(j.scrollButtons, K.className) }) : null, ct;
  }, Mt = gn((ct) => {
    const { tabsMeta: dt, tabMeta: St } = rn();
    if (!(!St || !dt)) {
      if (St[L] < dt[L]) {
        const Bt = dt[tt] + (St[L] - dt[L]);
        Je(Bt, { animation: ct });
      } else if (St[nt] > dt[nt]) {
        const Bt = dt[tt] + (St[nt] - dt[nt]);
        Je(Bt, { animation: ct });
      }
    }
  }), Ot = gn(() => {
    at && G !== false && Qt(!Se);
  });
  O.useEffect(() => {
    const ct = a0(() => {
      Ut.current && Ue();
    });
    let dt;
    const St = (Ve) => {
      Ve.forEach((Ie) => {
        Ie.removedNodes.forEach((qt) => {
          dt == null ? void 0 : dt.unobserve(qt);
        }), Ie.addedNodes.forEach((qt) => {
          dt == null ? void 0 : dt.observe(qt);
        });
      }), ct(), Ot();
    }, Bt = l0(Ut.current);
    Bt.addEventListener("resize", ct);
    let ne;
    return typeof ResizeObserver < "u" && (dt = new ResizeObserver(ct), Array.from(oe.current.children).forEach((Ve) => {
      dt.observe(Ve);
    })), typeof MutationObserver < "u" && (ne = new MutationObserver(St), ne.observe(oe.current, { childList: true })), () => {
      ct.clear(), Bt.removeEventListener("resize", ct), ne == null ? void 0 : ne.disconnect(), dt == null ? void 0 : dt.disconnect();
    };
  }, [Ue, Ot]), O.useEffect(() => {
    const ct = Array.from(oe.current.children), dt = ct.length;
    if (typeof IntersectionObserver < "u" && dt > 0 && at && G !== false) {
      const St = ct[0], Bt = ct[dt - 1], ne = { root: Ut.current, threshold: 0.99 }, Ve = (bn) => {
        jt(!bn[0].isIntersecting);
      }, Ie = new IntersectionObserver(Ve, ne);
      Ie.observe(St);
      const qt = (bn) => {
        pe(!bn[0].isIntersecting);
      }, Kt = new IntersectionObserver(qt, ne);
      return Kt.observe(Bt), () => {
        Ie.disconnect(), Kt.disconnect();
      };
    }
  }, [at, G, Se, x == null ? void 0 : x.length]), O.useEffect(() => {
    Ct(true);
  }, []), O.useEffect(() => {
    Ue();
  }), O.useEffect(() => {
    Mt(Ag !== mt);
  }, [Mt, mt]), O.useImperativeHandle(g, () => ({ updateIndicator: Ue, updateScrollButtons: Ot }), [Ue, Ot]);
  const wt = U.jsx(aC, { ...Z, className: xt(j.indicator, Z.className), ownerState: C, style: { ...mt, ...Z.style } });
  let Ee = 0;
  const Ge = O.Children.map(x, (ct) => {
    if (!O.isValidElement(ct)) return null;
    const dt = ct.props.value === void 0 ? Ee : ct.props.value;
    Ye.set(dt, Ee);
    const St = dt === Q;
    return Ee += 1, O.cloneElement(ct, { fullWidth: v === "fullWidth", indicator: St && !lt && wt, selected: St, selectionFollowsFocus: $, onChange: S, textColor: rt, value: dt, ...Ee === 1 && Q === false && !ct.props.tabIndex ? { tabIndex: 0 } : {} });
  }), Jt = (ct) => {
    const dt = oe.current, St = Sa(dt).activeElement;
    if (St.getAttribute("role") !== "tab") return;
    let ne = N === "horizontal" ? "ArrowLeft" : "ArrowUp", Ve = N === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (N === "horizontal" && f && (ne = "ArrowRight", Ve = "ArrowLeft"), ct.key) {
      case ne:
        ct.preventDefault(), Jo(dt, St, Eg);
        break;
      case Ve:
        ct.preventDefault(), Jo(dt, St, Cg);
        break;
      case "Home":
        ct.preventDefault(), Jo(dt, null, Cg);
        break;
      case "End":
        ct.preventDefault(), Jo(dt, null, Eg);
        break;
    }
  }, Zt = At();
  return U.jsxs(tC, { className: xt(j.root, T), ownerState: C, ref: o, as: E, ...I, children: [Zt.scrollButtonStart, Zt.scrollbarSizeListener, U.jsxs(eC, { className: j.scroller, ownerState: C, style: { overflow: Oe.overflow, [W ? `margin${f ? "Left" : "Right"}` : "marginBottom"]: P ? void 0 : -Oe.scrollbarWidth }, ref: Ut, children: [U.jsx(nC, { "aria-label": p, "aria-labelledby": h, "aria-orientation": N === "vertical" ? "vertical" : null, className: j.flexContainer, ownerState: C, onKeyDown: Jt, ref: oe, role: "tablist", children: Ge }), lt && wt] }), Zt.scrollButtonEnd] });
}), T0 = O.createContext(null);
function iC() {
  const [a3, r] = O.useState(null);
  return O.useEffect(() => {
    r(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []), a3;
}
function oC(a3) {
  const { children: r, value: o } = a3, s = iC(), c = O.useMemo(() => ({ idPrefix: s, value: o }), [s, o]);
  return U.jsx(T0.Provider, { value: c, children: r });
}
function C0() {
  return O.useContext(T0);
}
function E0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-P-${r}`;
}
function A0(a3, r) {
  const { idPrefix: o } = a3;
  return o === null ? null : `${a3.idPrefix}-T-${r}`;
}
const sC = O.forwardRef(function(r, o) {
  const { children: s, ...c } = r, f = C0();
  if (f === null) throw new TypeError("No TabContext provided");
  const p = O.Children.map(s, (h) => O.isValidElement(h) ? O.cloneElement(h, { "aria-controls": E0(f, h.props.value), id: A0(f, h.props.value) }) : null);
  return U.jsx(rC, { ...c, ref: o, value: f.value, children: p });
});
function uC(a3) {
  return de("MuiTabPanel", a3);
}
ue("MuiTabPanel", ["root", "hidden"]);
const cC = (a3) => {
  const { classes: r, hidden: o } = a3;
  return be({ root: ["root", o && "hidden"] }, uC, r);
}, fC = bt("div", { name: "MuiTabPanel", slot: "Root", overridesResolver: (a3, r) => r.root })(({ theme: a3 }) => ({ padding: a3.spacing(3) })), Fc = O.forwardRef(function(r, o) {
  const s = o2({ props: r, name: "MuiTabPanel" }), { children: c, className: f, value: p, keepMounted: h = false, ...g } = s, m = { ...s }, x = cC(m), T = C0();
  if (T === null) throw new TypeError("No TabContext provided");
  const E = E0(T, p), D = A0(T, p);
  return U.jsx(fC, { "aria-labelledby": D, className: xt(x.root, f), hidden: p !== T.value, id: E, ref: o, role: "tabpanel", ownerState: m, ...g, children: (h || p === T.value) && c });
}), dC = Ca(U.jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8" }), "Replay");
class an {
  constructor(r, o) {
    __publicField(this, "x");
    __publicField(this, "y");
    this.x = r, this.y = o;
  }
  static new(r, o) {
    return new an(r, o);
  }
  asKey() {
    return `coord[${this.x},${this.y}]`;
  }
  equals(r, o) {
    return r instanceof an ? this.x === r.x && this.y === r.y : typeof r == "number" && typeof o == "number" ? this.x === r && this.y === o : false;
  }
}
class pC {
  constructor(r) {
    __publicField(this, "position");
    this.position = r;
  }
  getPosition() {
    return this.position;
  }
  isAt(r, o) {
    return r instanceof an ? this.position.equals(r) : this.position.equals(r, o);
  }
}
class hC {
  constructor() {
    __publicField(this, "direction");
    __publicField(this, "positions");
    __publicField(this, "lastTickDirection");
    __publicField(this, "growth");
    __publicField(this, "keyPressQueue");
    __publicField(this, "keyPressedThisTick");
    this.positions = [an.new(5, 7), an.new(5, 6), an.new(5, 5)], this.direction = "right", this.lastTickDirection = "right", this.growth = 0, this.keyPressQueue = "", this.keyPressedThisTick = false;
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
        return an.new(r.x - 1, r.y);
      case "down":
        return an.new(r.x + 1, r.y);
      case "left":
        return an.new(r.x, r.y - 1);
      case "right":
        return an.new(r.x, r.y + 1);
      default:
        return r;
    }
  }
}
class wg {
  constructor(r) {
    __publicField(this, "gridSize");
    __publicField(this, "snake");
    __publicField(this, "foods");
    this.gridSize = r, this.snake = new hC(), this.foods = [], this.spawnFood();
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
    const r = this.uniqueRandomCoord(), o = new pC(r);
    this.foods.push(o);
  }
  uniqueRandomCoord() {
    let r;
    do {
      const o = Math.floor(Math.random() * this.gridSize), s = Math.floor(Math.random() * this.gridSize);
      r = an.new(o, s);
    } while (this.snake.getPositions().some((o) => o.equals(r)) || this.foods.some((o) => o.isAt(r)));
    return r;
  }
}
function w0(a3, r, o, s, c = "1px solid black") {
  const [f, p] = a3, [h, g] = r.map((m) => `${m}px`);
  return U.jsx("div", { className: "grid", children: Array(f).fill(0).map((m, x) => U.jsx("div", { className: "row", children: Array(p).fill(0).map((T, E) => {
    const D = new an(x, E), M = o.get(D.asKey());
    return U.jsx(br, { className: "cell", sx: { backgroundColor: M ?? s, height: h, width: g, border: c } }, E);
  }) }, x)) });
}
function mC() {
  const a3 = "#61dafb", r = "#ff6347", o = "#282c34", h = "#870089", [g, m] = O.useState(0), [x, T] = O.useState(300), [E, D] = O.useState(new wg(20)), [M, S] = O.useState(/* @__PURE__ */ new Map()), [N, B] = O.useState(false), G = () => w0([20, 20], [30, 30], M, o), $ = (K) => {
    const rt = /* @__PURE__ */ new Map();
    for (const Q of K.getSnakeCoords()) rt.set(Q.asKey(), a3);
    for (const Q of K.getFoods()) rt.set(Q.getPosition().asKey(), r);
    return rt;
  }, H = () => {
    const K = new wg(20);
    D(K), m(0), B(false), S($(E));
  }, w = O.useCallback((K) => {
    switch (K.key) {
      case "ArrowUp":
        E.setDirection("up");
        break;
      case "ArrowDown":
        E.setDirection("down");
        break;
      case "ArrowLeft":
        E.setDirection("left");
        break;
      case "ArrowRight":
        E.setDirection("right");
        break;
      case "r":
        H();
        break;
    }
  }, [E]);
  O.useEffect(() => (window.addEventListener("keydown", w), () => {
    window.removeEventListener("keydown", w);
  }), [E]), O.useEffect(() => {
    const K = setInterval(() => {
      const rt = E.tick();
      m((Q) => Q + rt), E.gameOver() && B(true), S($(E));
    }, x);
    return () => {
      clearInterval(K);
    };
  }, [E, x]);
  const Z = G();
  return U.jsxs(U.Fragment, { children: [U.jsx(RT, { open: N, autoHideDuration: 6e3, anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: U.jsxs(cx, { onClose: () => B(false), severity: "error", sx: { width: "100%" }, children: ["Game Over! Your score is ", g, "."] }) }), U.jsx(Ms, { elevation: 15, children: Z }), U.jsx(br, { component: "section", color: "secondary", sx: { p: "10px" }, children: U.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", margin: "0px" }, children: [U.jsx(x0, { "aria-label": "Speed", value: 300 - x, min: 10, max: 300, color: "secondary", onChange: (K) => {
    const rt = K.target;
    T(300 - Number(rt.value));
  }, marks: [{ value: 10, label: "Slow" }, { value: 300, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${h}` } } }), U.jsxs("div", { style: { margin: "0px", color: `${h}` }, children: ["Score: ", g, U.jsxs(qx, { color: "secondary", variant: "extended", sx: { fontSize: "0.65rem", color: `${h}` }, onClick: H, children: [U.jsx(dC, { sx: { ml: -1 } }), " Restart"] })] })] }) })] });
}
let ie;
const R0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && R0.decode();
let Ei = null;
function gC() {
  return (Ei === null || Ei.byteLength === 0) && (Ei = new Uint8Array(ie.memory.buffer)), Ei;
}
function yC(a3, r) {
  return a3 = a3 >>> 0, R0.decode(gC().subarray(a3, a3 + r));
}
let xl = null;
function vC() {
  return (xl === null || xl.buffer.detached === true || xl.buffer.detached === void 0 && xl.buffer !== ie.memory.buffer) && (xl = new DataView(ie.memory.buffer)), xl;
}
function bC(a3, r) {
  a3 = a3 >>> 0;
  const o = vC(), s = [];
  for (let c = a3; c < a3 + 4 * r; c += 4) s.push(ie.__wbindgen_export_0.get(o.getUint32(c, true)));
  return ie.__externref_drop_slice(a3, r), s;
}
const Rg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => ie.__wbg_coordrs_free(a3 >>> 0, 1));
class $f {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create($f.prototype);
    return o.__wbg_ptr = r, Rg.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rg.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    ie.__wbg_coordrs_free(r, 0);
  }
  get x() {
    return ie.__wbg_get_coordrs_x(this.__wbg_ptr) >>> 0;
  }
  set x(r) {
    ie.__wbg_set_coordrs_x(this.__wbg_ptr, r);
  }
  get y() {
    return ie.__wbg_get_coordrs_y(this.__wbg_ptr) >>> 0;
  }
  set y(r) {
    ie.__wbg_set_coordrs_y(this.__wbg_ptr, r);
  }
}
const Mg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a3) => ie.__wbg_terrarium_free(a3 >>> 0, 1));
class ps {
  static __wrap(r) {
    r = r >>> 0;
    const o = Object.create(ps.prototype);
    return o.__wbg_ptr = r, Mg.register(o, o.__wbg_ptr, o), o;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mg.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    ie.__wbg_terrarium_free(r, 0);
  }
  static new(r, o) {
    const s = ie.terrarium_new(r, o);
    return ps.__wrap(s);
  }
  toggle(r, o) {
    ie.terrarium_toggle(this.__wbg_ptr, r, o);
  }
  set(r, o, s) {
    ie.terrarium_set(this.__wbg_ptr, r, o, s);
  }
  get_cells() {
    const r = ie.terrarium_get_cells(this.__wbg_ptr);
    var o = bC(r[0], r[1]).slice();
    return ie.__wbindgen_free(r[0], r[1] * 4, 4), o;
  }
  tick(r) {
    ie.terrarium_tick(this.__wbg_ptr, r);
  }
}
async function SC(a3, r) {
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
function xC() {
  const a3 = {};
  return a3.wbg = {}, a3.wbg.__wbg_coordrs_new = function(r) {
    return $f.__wrap(r);
  }, a3.wbg.__wbindgen_init_externref_table = function() {
    const r = ie.__wbindgen_export_0, o = r.grow(4);
    r.set(0, void 0), r.set(o + 0, void 0), r.set(o + 1, null), r.set(o + 2, true), r.set(o + 3, false);
  }, a3.wbg.__wbindgen_throw = function(r, o) {
    throw new Error(yC(r, o));
  }, a3;
}
function TC(a3, r) {
  return ie = a3.exports, M0.__wbindgen_wasm_module = r, xl = null, Ei = null, ie.__wbindgen_start(), ie;
}
async function M0(a3) {
  if (ie !== void 0) return ie;
  typeof a3 < "u" && (Object.getPrototypeOf(a3) === Object.prototype ? { module_or_path: a3 } = a3 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof a3 > "u" && (a3 = new URL("/assets/wasm-frontman_bg-DCABOm35.wasm", import.meta.url));
  const r = xC();
  (typeof a3 == "string" || typeof Request == "function" && a3 instanceof Request || typeof URL == "function" && a3 instanceof URL) && (a3 = fetch(a3));
  const { instance: o, module: s } = await SC(await a3, r);
  return TC(o, s);
}
function CC() {
  const f = Math.round(33.333333333333336), p = Math.round(1e3 / 30), h = "#ff6347", g = "#282c34", m = O.useRef(null), x = (W) => an.new(W.x, W.y), T = (W) => w0([30, 30], [f, p], W, g, "1px solid black"), E = (W) => {
    const tt = /* @__PURE__ */ new Map();
    W.get_cells().map((L) => x(L)).forEach((L) => {
      tt.set(L.asKey(), h);
    }), P(tt);
  }, D = (W) => {
    W.tick(rt), E(W);
  }, M = (W) => {
    Q((tt) => !tt);
  }, S = (W) => {
    w((tt) => !tt);
  }, N = (W) => {
    const tt = (L, nt) => nt < 0 || L < 0 || nt >= 30 || L >= 30;
    if (m.current && I !== null) {
      const L = m.current.getBoundingClientRect(), nt = W.clientX - L.left, J = W.clientY - L.top, et = Math.floor(nt / (p + 1 * 1)), C = Math.floor(J / (f + 2 * 1));
      tt(C, et) || I.toggle(C, et), E(I);
    }
  }, B = (W) => {
    W.key === " " && I !== null && D(I);
  }, [G, $] = O.useState(false), [H, w] = O.useState(false), [Z, K] = O.useState(20), [rt, Q] = O.useState(false), [v, P] = O.useState(/* @__PURE__ */ new Map()), [I, at] = O.useState(null);
  return O.useEffect(() => H ? () => {
  } : (window.addEventListener("keydown", B), () => {
    window.removeEventListener("keydown", B);
  }), [I, H, rt]), O.useEffect(() => {
    if (!H) return;
    const W = setInterval(() => {
      I !== null && D(I);
    }, 1e3 - 9 * Z);
    return () => clearInterval(W);
  }, [I, H, Z, rt]), M0().then(() => {
    if (G) return;
    const W = ps.new(30, 30);
    at(W), $(true);
  }), G ? U.jsxs("div", { style: { display: "flex" }, children: [U.jsxs(Px, { children: [U.jsx(gg, { control: U.jsx(Tg, { checked: rt, onChange: M }), label: "Border lives" }), U.jsx(gg, { control: U.jsx(Tg, { checked: H, onChange: S }), label: "Auto tick" }), U.jsxs(br, { marginRight: "15px", children: ["Tick speed", U.jsx(x0, { ...H ? { disabled: false } : { disabled: true }, "aria-label": "auto tick speed", value: Z, min: 1, max: 100, onChange: (W, tt) => K(Number(tt)) })] })] }), U.jsx("div", { ref: m, onClick: N, style: { width: 1e3, height: 1e3 }, children: T(v) })] }) : U.jsx("div", { children: "Loading..." });
}
function EC() {
  const r = "https://avatars.githubusercontent.com/u/19390975?s=400&u=1358e735334214fa0a842a63d949fe5363e88494&v=4", [o, s] = O.useState("start"), c = (f, p) => {
    s(p);
  };
  return U.jsxs(br, { sx: { display: "flex" }, children: [U.jsx(bx, { position: "fixed", color: "primary", sx: { height: "65px" }, children: U.jsxs($T, { sx: { display: "flex", justifyContent: "flex-end" }, children: [U.jsx(Mx, { src: r, alt: "Martin Frisk", sx: { border: "2px solid#222222", marginRight: "20px" } }), U.jsx(fs, { variant: "h5", noWrap: true, component: "div", children: "mightypirate1" })] }) }), U.jsx(br, { component: "nav", sx: { width: "100hh", marginTop: "65px" }, children: U.jsxs(oC, { value: o, children: [U.jsx(br, { sx: { borderBottom: 1, borderColor: "divider" }, children: U.jsxs(sC, { onChange: c, "aria-label": "lab API tabs example", children: [U.jsx(Kc, { label: "Disclaimer", value: "start" }), U.jsx(Kc, { label: "Snake", value: "snake" }), U.jsx(Kc, { label: "Life", value: "life" })] }) }), U.jsxs(Fc, { value: "start", children: [U.jsx(fs, { children: "I am not a frontender, as you well can tell!" }), "Either way, there are some toys on the tabs above."] }), U.jsx(Fc, { value: "snake", children: U.jsx(mC, {}) }), U.jsx(Fc, { value: "life", children: U.jsx(CC, {}) })] }) })] });
}
function AC() {
  return U.jsx(EC, {});
}
Pv.createRoot(document.getElementById("root")).render(U.jsx(O.StrictMode, { children: U.jsx(AC, {}) }));
