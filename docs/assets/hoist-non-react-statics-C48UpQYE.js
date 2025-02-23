import { r as w } from "./react-is-CnyDuYXe.js";
var c, d;
function A() {
  if (d) return c;
  d = 1;
  var u = w(), g = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, l = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, N = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, f = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, p = {};
  p[u.ForwardRef] = N, p[u.Memo] = f;
  function y(r) {
    return u.isMemo(r) ? f : p[r.$$typeof] || g;
  }
  var R = Object.defineProperty, j = Object.getOwnPropertyNames, v = Object.getOwnPropertySymbols, n = Object.getOwnPropertyDescriptor, _ = Object.getPrototypeOf, T = Object.prototype;
  function O(r, t, o) {
    if (typeof t != "string") {
      if (T) {
        var i = _(t);
        i && i !== T && O(r, i, o);
      }
      var a = j(t);
      v && (a = a.concat(v(t)));
      for (var P = y(r), S = y(t), s = 0; s < a.length; ++s) {
        var e = a[s];
        if (!l[e] && !(o && o[e]) && !(S && S[e]) && !(P && P[e])) {
          var b = n(t, e);
          try {
            R(r, e, b);
          } catch {
          }
        }
      }
    }
    return r;
  }
  return c = O, c;
}
A();
