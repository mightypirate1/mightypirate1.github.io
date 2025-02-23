var I = { exports: {} }, U = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var A;
function W() {
  return A || (A = 1, function(u) {
    function g(e, a) {
      var n = e.length;
      e.push(a);
      e: for (; 0 < n; ) {
        var l = n - 1 >>> 1, r = e[l];
        if (0 < y(r, a)) e[l] = a, e[n] = r, n = l;
        else break e;
      }
    }
    function c(e) {
      return e.length === 0 ? null : e[0];
    }
    function k(e) {
      if (e.length === 0) return null;
      var a = e[0], n = e.pop();
      if (n !== a) {
        e[0] = n;
        e: for (var l = 0, r = e.length, T = r >>> 1; l < T; ) {
          var C = 2 * (l + 1) - 1, F = e[C], b = C + 1, S = e[b];
          if (0 > y(F, n)) b < r && 0 > y(S, F) ? (e[l] = S, e[b] = n, l = b) : (e[l] = F, e[C] = n, l = C);
          else if (b < r && 0 > y(S, n)) e[l] = S, e[b] = n, l = b;
          else break e;
        }
      }
      return a;
    }
    function y(e, a) {
      var n = e.sortIndex - a.sortIndex;
      return n !== 0 ? n : e.id - a.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      u.unstable_now = function() {
        return J.now();
      };
    } else {
      var j = Date, K = j.now();
      u.unstable_now = function() {
        return j.now() - K;
      };
    }
    var f = [], s = [], O = 1, i = null, t = 3, m = false, o = false, v = false, E = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function w(e) {
      for (var a = c(s); a !== null; ) {
        if (a.callback === null) k(s);
        else if (a.startTime <= e) k(s), a.sortIndex = a.expirationTime, g(f, a);
        else break;
        a = c(s);
      }
    }
    function q(e) {
      if (v = false, w(e), !o) if (c(f) !== null) o = true, R();
      else {
        var a = c(s);
        a !== null && D(q, a.startTime - e);
      }
    }
    var P = false, d = -1, Y = 5, B = -1;
    function M() {
      return !(u.unstable_now() - B < Y);
    }
    function H() {
      if (P) {
        var e = u.unstable_now();
        B = e;
        var a = true;
        try {
          e: {
            o = false, v && (v = false, N(d), d = -1), m = true;
            var n = t;
            try {
              n: {
                for (w(e), i = c(f); i !== null && !(i.expirationTime > e && M()); ) {
                  var l = i.callback;
                  if (typeof l == "function") {
                    i.callback = null, t = i.priorityLevel;
                    var r = l(i.expirationTime <= e);
                    if (e = u.unstable_now(), typeof r == "function") {
                      i.callback = r, w(e), a = true;
                      break n;
                    }
                    i === c(f) && k(f), w(e);
                  } else k(f);
                  i = c(f);
                }
                if (i !== null) a = true;
                else {
                  var T = c(s);
                  T !== null && D(q, T.startTime - e), a = false;
                }
              }
              break e;
            } finally {
              i = null, t = n, m = false;
            }
            a = void 0;
          }
        } finally {
          a ? _() : P = false;
        }
      }
    }
    var _;
    if (typeof Q == "function") _ = function() {
      Q(H);
    };
    else if (typeof MessageChannel < "u") {
      var z = new MessageChannel(), V = z.port2;
      z.port1.onmessage = H, _ = function() {
        V.postMessage(null);
      };
    } else _ = function() {
      E(H, 0);
    };
    function R() {
      P || (P = true, _());
    }
    function D(e, a) {
      d = E(function() {
        e(u.unstable_now());
      }, a);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(e) {
      e.callback = null;
    }, u.unstable_continueExecution = function() {
      o || m || (o = true, R());
    }, u.unstable_forceFrameRate = function(e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < e ? Math.floor(1e3 / e) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return t;
    }, u.unstable_getFirstCallbackNode = function() {
      return c(f);
    }, u.unstable_next = function(e) {
      switch (t) {
        case 1:
        case 2:
        case 3:
          var a = 3;
          break;
        default:
          a = t;
      }
      var n = t;
      t = a;
      try {
        return e();
      } finally {
        t = n;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(e, a) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = t;
      t = e;
      try {
        return a();
      } finally {
        t = n;
      }
    }, u.unstable_scheduleCallback = function(e, a, n) {
      var l = u.unstable_now();
      switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? l + n : l) : n = l, e) {
        case 1:
          var r = -1;
          break;
        case 2:
          r = 250;
          break;
        case 5:
          r = 1073741823;
          break;
        case 4:
          r = 1e4;
          break;
        default:
          r = 5e3;
      }
      return r = n + r, e = { id: O++, callback: a, priorityLevel: e, startTime: n, expirationTime: r, sortIndex: -1 }, n > l ? (e.sortIndex = n, g(s, e), c(f) === null && e === c(s) && (v ? (N(d), d = -1) : v = true, D(q, n - l))) : (e.sortIndex = r, g(f, e), o || m || (o = true, R())), e;
    }, u.unstable_shouldYield = M, u.unstable_wrapCallback = function(e) {
      var a = t;
      return function() {
        var n = t;
        t = a;
        try {
          return e.apply(this, arguments);
        } finally {
          t = n;
        }
      };
    };
  }(U)), U;
}
var G;
function X() {
  return G || (G = 1, I.exports = W()), I.exports;
}
export {
  X as r
};
