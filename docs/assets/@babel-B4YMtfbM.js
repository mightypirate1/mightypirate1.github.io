function i() {
  return i = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, i.apply(null, arguments);
}
function s(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t) if ({}.hasOwnProperty.call(t, n)) {
    if (e.indexOf(n) !== -1) continue;
    r[n] = t[n];
  }
  return r;
}
function o(t, e) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, o(t, e);
}
function a(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, o(t, e);
}
function u(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
export {
  i as _,
  a,
  s as b,
  u as c
};
