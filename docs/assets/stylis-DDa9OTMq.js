var dr = "-ms-", kr = "-moz-", lr = "-webkit-", Q = "comm", V = "rule", X = "decl", y = "@import", rr = "@keyframes", ar = "@layer", nr = Math.abs, U = String.fromCharCode, er = Object.assign;
function wr(r, a) {
  return l(r, 0) ^ 45 ? (((a << 2 ^ l(r, 0)) << 2 ^ l(r, 1)) << 2 ^ l(r, 2)) << 2 ^ l(r, 3) : 0;
}
function _(r) {
  return r.trim();
}
function gr(r, a) {
  return (r = a.exec(r)) ? r[0] : r;
}
function L(r, a, e) {
  return r.replace(a, e);
}
function cr(r, a) {
  return r.indexOf(a);
}
function l(r, a) {
  return r.charCodeAt(a) | 0;
}
function j(r, a, e) {
  return r.slice(a, e);
}
function E(r) {
  return r.length;
}
function Z(r) {
  return r.length;
}
function K(r, a) {
  return a.push(r), r;
}
function pr(r, a) {
  return r.map(a).join("");
}
var W = 1, T = 1, $ = 0, h = 0, s = 0, x = "";
function Y(r, a, e, c, t, d, w) {
  return { value: r, root: a, parent: e, type: c, props: t, children: d, line: W, column: T, length: w, return: "" };
}
function mr(r, a) {
  return er(Y("", null, null, "", null, null, 0), r, { length: -r.length }, a);
}
function sr() {
  return s;
}
function tr() {
  return s = h > 0 ? l(x, --h) : 0, T--, s === 10 && (T = 1, W--), s;
}
function b() {
  return s = h < $ ? l(x, h++) : 0, T++, s === 10 && (T = 1, W++), s;
}
function R() {
  return l(x, h);
}
function D() {
  return h;
}
function q(r, a) {
  return j(x, r, a);
}
function F(r) {
  switch (r) {
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
function ir(r) {
  return W = T = 1, $ = E(x = r), h = 0, [];
}
function ur(r) {
  return x = "", r;
}
function B(r) {
  return _(q(h - 1, P(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function fr(r) {
  for (; (s = R()) && s < 33; ) b();
  return F(r) > 2 || F(s) > 3 ? "" : " ";
}
function or(r, a) {
  for (; --a && b() && !(s < 48 || s > 102 || s > 57 && s < 65 || s > 70 && s < 97); ) ;
  return q(r, D() + (a < 6 && R() == 32 && b() == 32));
}
function P(r) {
  for (; b(); ) switch (s) {
    case r:
      return h;
    case 34:
    case 39:
      r !== 34 && r !== 39 && P(s);
      break;
    case 40:
      r === 41 && P(r);
      break;
    case 92:
      b();
      break;
  }
  return h;
}
function hr(r, a) {
  for (; b() && r + s !== 57; ) if (r + s === 84 && R() === 47) break;
  return "/*" + q(a, h - 1) + "*" + U(r === 47 ? r : b());
}
function vr(r) {
  for (; !F(R()); ) b();
  return q(r, h);
}
function Er(r) {
  return ur(N("", null, null, null, [""], r = ir(r), 0, [0], r));
}
function N(r, a, e, c, t, d, w, f, S) {
  for (var A = 0, p = 0, i = w, M = 0, C = 0, g = 0, v = 1, z = 1, o = 1, u = 0, m = "", I = t, O = d, k = c, n = m; z; ) switch (g = u, u = b()) {
    case 40:
      if (g != 108 && l(n, i - 1) == 58) {
        cr(n += L(B(u), "&", "&\f"), "&\f") != -1 && (o = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      n += B(u);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      n += fr(g);
      break;
    case 92:
      n += or(D() - 1, 7);
      continue;
    case 47:
      switch (R()) {
        case 42:
        case 47:
          K(br(hr(b(), D()), a, e), S);
          break;
        default:
          n += "/";
      }
      break;
    case 123 * v:
      f[A++] = E(n) * o;
    case 125 * v:
    case 59:
    case 0:
      switch (u) {
        case 0:
        case 125:
          z = 0;
        case 59 + p:
          o == -1 && (n = L(n, /\f/g, "")), C > 0 && E(n) - i && K(C > 32 ? H(n + ";", c, e, i - 1) : H(L(n, " ", "") + ";", c, e, i - 2), S);
          break;
        case 59:
          n += ";";
        default:
          if (K(k = G(n, a, e, A, p, t, f, m, I = [], O = [], i), d), u === 123) if (p === 0) N(n, a, k, k, I, d, i, f, O);
          else switch (M === 99 && l(n, 3) === 110 ? 100 : M) {
            case 100:
            case 108:
            case 109:
            case 115:
              N(r, k, k, c && K(G(r, k, k, 0, 0, t, f, m, t, I = [], i), O), t, O, i, f, c ? I : O);
              break;
            default:
              N(n, k, k, k, [""], O, 0, f, O);
          }
      }
      A = p = C = 0, v = o = 1, m = n = "", i = w;
      break;
    case 58:
      i = 1 + E(n), C = g;
    default:
      if (v < 1) {
        if (u == 123) --v;
        else if (u == 125 && v++ == 0 && tr() == 125) continue;
      }
      switch (n += U(u), u * v) {
        case 38:
          o = p > 0 ? 1 : (n += "\f", -1);
          break;
        case 44:
          f[A++] = (E(n) - 1) * o, o = 1;
          break;
        case 64:
          R() === 45 && (n += B(b())), M = R(), p = i = E(m = n += vr(D())), u++;
          break;
        case 45:
          g === 45 && E(n) == 2 && (v = 0);
      }
  }
  return d;
}
function G(r, a, e, c, t, d, w, f, S, A, p) {
  for (var i = t - 1, M = t === 0 ? d : [""], C = Z(M), g = 0, v = 0, z = 0; g < c; ++g) for (var o = 0, u = j(r, i + 1, i = nr(v = w[g])), m = r; o < C; ++o) (m = _(v > 0 ? M[o] + " " + u : L(u, /&\f/g, M[o]))) && (S[z++] = m);
  return Y(r, a, e, t === 0 ? V : f, S, A, p);
}
function br(r, a, e) {
  return Y(r, a, e, Q, U(sr()), j(r, 2, -2), 0);
}
function H(r, a, e, c) {
  return Y(r, a, e, X, j(r, 0, c), j(r, c + 1, -1), c);
}
function J(r, a) {
  for (var e = "", c = Z(r), t = 0; t < c; t++) e += a(r[t], t, r, a) || "";
  return e;
}
function Mr(r, a, e, c) {
  switch (r.type) {
    case ar:
      if (r.children.length) break;
    case y:
    case X:
      return r.return = r.return || r.value;
    case Q:
      return "";
    case rr:
      return r.return = r.value + "{" + J(r.children, c) + "}";
    case V:
      r.value = r.props.join(",");
  }
  return E(e = J(r.children, c)) ? r.return = r.value + "{" + e + "}" : "";
}
function Or(r) {
  var a = Z(r);
  return function(e, c, t, d) {
    for (var w = "", f = 0; f < a; f++) w += r[f](e, c, t, d) || "";
    return w;
  };
}
function Rr(r) {
  return function(a) {
    a.root || (a = a.return) && r(a);
  };
}
export {
  X as D,
  rr as K,
  dr as M,
  V as R,
  lr as W,
  Mr as a,
  pr as b,
  Er as c,
  mr as d,
  L as e,
  ur as f,
  ir as g,
  wr as h,
  l as i,
  E as j,
  cr as k,
  kr as l,
  Or as m,
  gr as n,
  b as o,
  U as p,
  R as q,
  Rr as r,
  J as s,
  F as t,
  B as u,
  q as v,
  h as w
};
