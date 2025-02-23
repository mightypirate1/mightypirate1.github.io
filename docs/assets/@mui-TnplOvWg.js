var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as m, j as S, R as on } from "./react-BepuaRmd.js";
import { c as _ } from "./clsx-B-dksMZM.js";
import { n as nn, s as sn, T as an, k as Lt, c as To } from "./@emotion-DWG83qPc.js";
import "./react-dom-DRl0nMg-.js";
import { T as ln, a as cn } from "./react-transition-group-hO07pk2U.js";
function bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Mt = { black: "#000", white: "#fff" }, vt = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, St = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, xt = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, Ct = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, wt = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, $t = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, un = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function mt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => r.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const er = "$$material";
/**
* @mui/styled-engine v6.4.3
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function Ro(e, t) {
  return nn(e, t);
}
function dn(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Wr = [];
function Vr(e) {
  return Wr[0] = e, sn(Wr);
}
var ur = { exports: {} }, oe = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var _r;
function pn() {
  if (_r) return oe;
  _r = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
  function h(d) {
    if (typeof d == "object" && d !== null) {
      var C = d.$$typeof;
      switch (C) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case c:
            case u:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case l:
                case i:
                case p:
                case g:
                  return d;
                case s:
                  return d;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return oe.ContextConsumer = s, oe.ContextProvider = l, oe.Element = e, oe.ForwardRef = i, oe.Fragment = r, oe.Lazy = p, oe.Memo = g, oe.Portal = t, oe.Profiler = n, oe.StrictMode = o, oe.Suspense = c, oe.SuspenseList = u, oe.isContextConsumer = function(d) {
    return h(d) === s;
  }, oe.isContextProvider = function(d) {
    return h(d) === l;
  }, oe.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, oe.isForwardRef = function(d) {
    return h(d) === i;
  }, oe.isFragment = function(d) {
    return h(d) === r;
  }, oe.isLazy = function(d) {
    return h(d) === p;
  }, oe.isMemo = function(d) {
    return h(d) === g;
  }, oe.isPortal = function(d) {
    return h(d) === t;
  }, oe.isProfiler = function(d) {
    return h(d) === n;
  }, oe.isStrictMode = function(d) {
    return h(d) === o;
  }, oe.isSuspense = function(d) {
    return h(d) === c;
  }, oe.isSuspenseList = function(d) {
    return h(d) === u;
  }, oe.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === c || d === u || d === f || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === g || d.$$typeof === l || d.$$typeof === s || d.$$typeof === i || d.$$typeof === y || d.getModuleId !== void 0);
  }, oe.typeOf = h, oe;
}
var Ur;
function fn() {
  return Ur || (Ur = 1, ur.exports = pn()), ur.exports;
}
var Po = fn();
function Ke(e) {
  if (typeof e != "object" || e === null) return false;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function $o(e) {
  if (m.isValidElement(e) || Po.isValidElementType(e) || !Ke(e)) return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = $o(e[r]);
  }), t;
}
function Ee(e, t, r = { clone: true }) {
  const o = r.clone ? { ...e } : e;
  return Ke(e) && Ke(t) && Object.keys(t).forEach((n) => {
    m.isValidElement(t[n]) || Po.isValidElementType(t[n]) ? o[n] = t[n] : Ke(t[n]) && Object.prototype.hasOwnProperty.call(e, n) && Ke(e[n]) ? o[n] = Ee(e[n], t[n], r) : r.clone ? o[n] = Ke(t[n]) ? $o(t[n]) : t[n] : o[n] = t[n];
  }), o;
}
const gn = (e) => {
  const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
  return t.sort((r, o) => r.val - o.val), t.reduce((r, o) => ({ ...r, [o.key]: o.val }), {});
};
function mn(e) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: r = "px", step: o = 5, ...n } = e, s = gn(t), l = Object.keys(s);
  function i(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - o / 100}${r})`;
  }
  function u(f, y) {
    const h = l.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r}) and (max-width:${(h !== -1 && typeof t[l[h]] == "number" ? t[l[h]] : y) - o / 100}${r})`;
  }
  function g(f) {
    return l.indexOf(f) + 1 < l.length ? u(f, l[l.indexOf(f) + 1]) : i(f);
  }
  function p(f) {
    const y = l.indexOf(f);
    return y === 0 ? i(l[1]) : y === l.length - 1 ? c(l[y]) : u(f, l[l.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return { keys: l, values: s, up: i, down: c, between: u, only: g, not: p, unit: r, ...n };
}
function hn(e, t) {
  if (!e.containerQueries) return t;
  const r = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, n) => {
    var _a2, _b;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((_a2 = o.match(s)) == null ? void 0 : _a2[1]) || 0) - +(((_b = n.match(s)) == null ? void 0 : _b[1]) || 0);
  });
  return r.length ? r.reduce((o, n) => {
    const s = t[n];
    return delete o[n], o[n] = s, o;
  }, { ...t }) : t;
}
function bn(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function yn(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, o, n] = r, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(n).up(s);
}
function vn(e) {
  const t = (s, l) => s.replace("@media", l ? `@container ${l}` : "@container");
  function r(s, l) {
    s.up = (...i) => t(e.breakpoints.up(...i), l), s.down = (...i) => t(e.breakpoints.down(...i), l), s.between = (...i) => t(e.breakpoints.between(...i), l), s.only = (...i) => t(e.breakpoints.only(...i), l), s.not = (...i) => {
      const c = t(e.breakpoints.not(...i), l);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, n = (s) => (r(o, s), o);
  return r(n), { ...e, containerQueries: n };
}
const Sn = { borderRadius: 4 };
function Et(e, t) {
  return t ? Ee(e, t, { clone: false }) : e;
}
const tr = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Kr = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e) => `@media (min-width:${tr[e]}px)` }, xn = { containerQueries: (e) => ({ up: (t) => {
  let r = typeof t == "number" ? t : tr[t] || t;
  return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
} }) };
function ot(e, t, r) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || Kr;
    return t.reduce((l, i, c) => (l[s.up(s.keys[c])] = r(t[c]), l), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || Kr;
    return Object.keys(t).reduce((l, i) => {
      if (bn(s.keys, i)) {
        const c = yn(o.containerQueries ? o : xn, i);
        c && (l[c] = r(t[i], i));
      } else if (Object.keys(s.values || tr).includes(i)) {
        const c = s.up(i);
        l[c] = r(t[i], i);
      } else {
        const c = i;
        l[c] = t[c];
      }
      return l;
    }, {});
  }
  return r(t);
}
function Cn(e = {}) {
  var _a2;
  return ((_a2 = e.keys) == null ? void 0 : _a2.reduce((r, o) => {
    const n = e.up(o);
    return r[n] = {}, r;
  }, {})) || {};
}
function wn(e, t) {
  return e.reduce((r, o) => {
    const n = r[o];
    return (!n || Object.keys(n).length === 0) && delete r[o], r;
  }, t);
}
function N(e) {
  if (typeof e != "string") throw new Error(mt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rr(e, t, r = true) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`.split(".").reduce((n, s) => n && n[s] ? n[s] : null, e);
    if (o != null) return o;
  }
  return t.split(".").reduce((o, n) => o && o[n] != null ? o[n] : null, e);
}
function Xt(e, t, r, o = r) {
  let n;
  return typeof e == "function" ? n = e(r) : Array.isArray(e) ? n = e[r] || o : n = rr(e, r) || o, t && (n = t(n, o, e)), n;
}
function me(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: o, transform: n } = e, s = (l) => {
    if (l[t] == null) return null;
    const i = l[t], c = l.theme, u = rr(c, o) || {};
    return ot(l, i, (p) => {
      let f = Xt(u, n, p);
      return p === f && typeof p == "string" && (f = Xt(u, n, `${t}${p === "default" ? "" : N(p)}`, p)), r === false ? f : { [r]: f };
    });
  };
  return s.propTypes = {}, s.filterProps = [t], s;
}
function kn(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Tn = { m: "margin", p: "padding" }, Rn = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Gr = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, Pn = kn((e) => {
  if (e.length > 2) if (Gr[e]) e = Gr[e];
  else return [e];
  const [t, r] = e.split(""), o = Tn[t], n = Rn[r] || "";
  return Array.isArray(n) ? n.map((s) => o + s) : [o + n];
}), Tr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Rr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Tr, ...Rr];
function zt(e, t, r, o) {
  const n = rr(e, t, true) ?? r;
  return typeof n == "number" || typeof n == "string" ? (s) => typeof s == "string" ? s : typeof n == "string" ? `calc(${s} * ${n})` : n * s : Array.isArray(n) ? (s) => {
    if (typeof s == "string") return s;
    const l = Math.abs(s), i = n[l];
    return s >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
  } : typeof n == "function" ? n : () => {
  };
}
function Pr(e) {
  return zt(e, "spacing", 8);
}
function Ot(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function $n(e, t) {
  return (r) => e.reduce((o, n) => (o[n] = Ot(t, r), o), {});
}
function An(e, t, r, o) {
  if (!t.includes(r)) return null;
  const n = Pn(r), s = $n(n, o), l = e[r];
  return ot(e, l, s);
}
function Ao(e, t) {
  const r = Pr(e.theme);
  return Object.keys(e).map((o) => An(e, t, o, r)).reduce(Et, {});
}
function de(e) {
  return Ao(e, Tr);
}
de.propTypes = {};
de.filterProps = Tr;
function pe(e) {
  return Ao(e, Rr);
}
pe.propTypes = {};
pe.filterProps = Rr;
function Bo(e = 8, t = Pr({ spacing: e })) {
  if (e.mui) return e;
  const r = (...o) => (o.length === 0 ? [1] : o).map((s) => {
    const l = t(s);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return r.mui = true, r;
}
function or(...e) {
  const t = e.reduce((o, n) => (n.filterProps.forEach((s) => {
    o[s] = n;
  }), o), {}), r = (o) => Object.keys(o).reduce((n, s) => t[s] ? Et(n, t[s](o)) : n, {});
  return r.propTypes = {}, r.filterProps = e.reduce((o, n) => o.concat(n.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function He(e, t) {
  return me({ prop: e, themeKey: "borders", transform: t });
}
const Bn = He("border", Fe), In = He("borderTop", Fe), En = He("borderRight", Fe), Mn = He("borderBottom", Fe), Ln = He("borderLeft", Fe), zn = He("borderColor"), On = He("borderTopColor"), Nn = He("borderRightColor"), jn = He("borderBottomColor"), Fn = He("borderLeftColor"), Dn = He("outline", Fe), Hn = He("outlineColor"), nr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = zt(e.theme, "shape.borderRadius", 4), r = (o) => ({ borderRadius: Ot(t, o) });
    return ot(e, e.borderRadius, r);
  }
  return null;
};
nr.propTypes = {};
nr.filterProps = ["borderRadius"];
or(Bn, In, En, Mn, Ln, zn, On, Nn, jn, Fn, nr, Dn, Hn);
const sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = zt(e.theme, "spacing", 8), r = (o) => ({ gap: Ot(t, o) });
    return ot(e, e.gap, r);
  }
  return null;
};
sr.propTypes = {};
sr.filterProps = ["gap"];
const ar = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = zt(e.theme, "spacing", 8), r = (o) => ({ columnGap: Ot(t, o) });
    return ot(e, e.columnGap, r);
  }
  return null;
};
ar.propTypes = {};
ar.filterProps = ["columnGap"];
const ir = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = zt(e.theme, "spacing", 8), r = (o) => ({ rowGap: Ot(t, o) });
    return ot(e, e.rowGap, r);
  }
  return null;
};
ir.propTypes = {};
ir.filterProps = ["rowGap"];
const Wn = me({ prop: "gridColumn" }), Vn = me({ prop: "gridRow" }), _n = me({ prop: "gridAutoFlow" }), Un = me({ prop: "gridAutoColumns" }), Kn = me({ prop: "gridAutoRows" }), Gn = me({ prop: "gridTemplateColumns" }), Yn = me({ prop: "gridTemplateRows" }), Xn = me({ prop: "gridTemplateAreas" }), qn = me({ prop: "gridArea" });
or(sr, ar, ir, Wn, Vn, _n, Un, Kn, Gn, Yn, Xn, qn);
function Rt(e, t) {
  return t === "grey" ? t : e;
}
const Qn = me({ prop: "color", themeKey: "palette", transform: Rt }), Zn = me({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Rt }), Jn = me({ prop: "backgroundColor", themeKey: "palette", transform: Rt });
or(Qn, Zn, Jn);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const es = me({ prop: "width", transform: Ie }), $r = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var _a2, _b, _c, _d, _e;
      const o = ((_c = (_b = (_a2 = e.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[r]) || tr[r];
      return o ? ((_e = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${o}${e.theme.breakpoints.unit}` } : { maxWidth: o } : { maxWidth: Ie(r) };
    };
    return ot(e, e.maxWidth, t);
  }
  return null;
};
$r.filterProps = ["maxWidth"];
const ts = me({ prop: "minWidth", transform: Ie }), rs = me({ prop: "height", transform: Ie }), os = me({ prop: "maxHeight", transform: Ie }), ns = me({ prop: "minHeight", transform: Ie });
me({ prop: "size", cssProperty: "width", transform: Ie });
me({ prop: "size", cssProperty: "height", transform: Ie });
const ss = me({ prop: "boxSizing" });
or(es, $r, ts, rs, os, ns, ss);
const Nt = { border: { themeKey: "borders", transform: Fe }, borderTop: { themeKey: "borders", transform: Fe }, borderRight: { themeKey: "borders", transform: Fe }, borderBottom: { themeKey: "borders", transform: Fe }, borderLeft: { themeKey: "borders", transform: Fe }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Fe }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: nr }, color: { themeKey: "palette", transform: Rt }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Rt }, backgroundColor: { themeKey: "palette", transform: Rt }, p: { style: pe }, pt: { style: pe }, pr: { style: pe }, pb: { style: pe }, pl: { style: pe }, px: { style: pe }, py: { style: pe }, padding: { style: pe }, paddingTop: { style: pe }, paddingRight: { style: pe }, paddingBottom: { style: pe }, paddingLeft: { style: pe }, paddingX: { style: pe }, paddingY: { style: pe }, paddingInline: { style: pe }, paddingInlineStart: { style: pe }, paddingInlineEnd: { style: pe }, paddingBlock: { style: pe }, paddingBlockStart: { style: pe }, paddingBlockEnd: { style: pe }, m: { style: de }, mt: { style: de }, mr: { style: de }, mb: { style: de }, ml: { style: de }, mx: { style: de }, my: { style: de }, margin: { style: de }, marginTop: { style: de }, marginRight: { style: de }, marginBottom: { style: de }, marginLeft: { style: de }, marginX: { style: de }, marginY: { style: de }, marginInline: { style: de }, marginInlineStart: { style: de }, marginInlineEnd: { style: de }, marginBlock: { style: de }, marginBlockStart: { style: de }, marginBlockEnd: { style: de }, displayPrint: { cssProperty: false, transform: (e) => ({ "@media print": { display: e } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: sr }, rowGap: { style: ir }, columnGap: { style: ar }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Ie }, maxWidth: { style: $r }, minWidth: { transform: Ie }, height: { transform: Ie }, maxHeight: { transform: Ie }, minHeight: { transform: Ie }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function as(...e) {
  const t = e.reduce((o, n) => o.concat(Object.keys(n)), []), r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function is(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ls() {
  function e(r, o, n, s) {
    const l = { [r]: o, theme: n }, i = s[r];
    if (!i) return { [r]: o };
    const { cssProperty: c = r, themeKey: u, transform: g, style: p } = i;
    if (o == null) return null;
    if (u === "typography" && o === "inherit") return { [r]: o };
    const f = rr(n, u) || {};
    return p ? p(l) : ot(l, o, (h) => {
      let d = Xt(f, g, h);
      return h === d && typeof h == "string" && (d = Xt(f, g, `${r}${h === "default" ? "" : N(h)}`, h)), c === false ? d : { [c]: d };
    });
  }
  function t(r) {
    const { sx: o, theme: n = {} } = r || {};
    if (!o) return null;
    const s = n.unstable_sxConfig ?? Nt;
    function l(i) {
      let c = i;
      if (typeof i == "function") c = i(n);
      else if (typeof i != "object") return i;
      if (!c) return null;
      const u = Cn(n.breakpoints), g = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((f) => {
        const y = is(c[f], n);
        if (y != null) if (typeof y == "object") if (s[f]) p = Et(p, e(f, y, n, s));
        else {
          const h = ot({ theme: n }, y, (d) => ({ [f]: d }));
          as(h, y) ? p[f] = t({ sx: y, theme: n }) : p = Et(p, h);
        }
        else p = Et(p, e(f, y, n, s));
      }), hn(n, wn(g, p));
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const ht = ls();
ht.filterProps = ["sx"];
function cs(e, t) {
  var _a2;
  const r = this;
  if (r.vars) {
    if (!((_a2 = r.colorSchemes) == null ? void 0 : _a2[e]) || typeof r.getColorSchemeSelector != "function") return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), { [o]: t });
  }
  return r.palette.mode === e ? t : {};
}
function Ar(e = {}, ...t) {
  const { breakpoints: r = {}, palette: o = {}, spacing: n, shape: s = {}, ...l } = e, i = mn(r), c = Bo(n);
  let u = Ee({ breakpoints: i, direction: "ltr", components: {}, palette: { mode: "light", ...o }, spacing: c, shape: { ...Sn, ...s } }, l);
  return u = vn(u), u.applyStyles = cs, u = t.reduce((g, p) => Ee(g, p), u), u.unstable_sxConfig = { ...Nt, ...l == null ? void 0 : l.unstable_sxConfig }, u.unstable_sx = function(p) {
    return ht({ sx: p, theme: this });
  }, u;
}
function us(e) {
  return Object.keys(e).length === 0;
}
function ds(e = null) {
  const t = m.useContext(an);
  return !t || us(t) ? e : t;
}
const ps = Ar();
function Br(e = ps) {
  return ds(e);
}
const fs = (e) => {
  var _a2;
  const t = { systemProps: {}, otherProps: {} }, r = ((_a2 = e == null ? void 0 : e.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Nt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Io(e) {
  const { sx: t, ...r } = e, { systemProps: o, otherProps: n } = fs(r);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...l) => {
    const i = t(...l);
    return Ke(i) ? { ...o, ...i } : o;
  } : s = { ...o, ...t }, { ...n, sx: s };
}
const Yr = (e) => e, gs = () => {
  let e = Yr;
  return { configure(t) {
    e = t;
  }, generate(t) {
    return e(t);
  }, reset() {
    e = Yr;
  } };
}, Eo = gs();
function ms(e = {}) {
  const { themeId: t, defaultTheme: r, defaultClassName: o = "MuiBox-root", generateClassName: n } = e, s = Ro("div", { shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as" })(ht);
  return m.forwardRef(function(c, u) {
    const g = Br(r), { className: p, component: f = "div", ...y } = Io(c);
    return S.jsx(s, { as: f, ref: u, className: _(p, n ? n(o) : o), theme: t && g[t] || g, ...y });
  });
}
const hs = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function ue(e, t, r = "Mui") {
  const o = hs[t];
  return o ? `${r}-${o}` : `${Eo.generate(e)}-${t}`;
}
function ce(e, t, r = "Mui") {
  const o = {};
  return t.forEach((n) => {
    o[n] = ue(e, n, r);
  }), o;
}
function Mo(e) {
  const { variants: t, ...r } = e, o = { variants: t, style: Vr(r), isProcessed: true };
  return o.style === r || t && t.forEach((n) => {
    typeof n.style != "function" && (n.style = Vr(n.style));
  }), o;
}
const bs = Ar();
function dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ys(e) {
  return e ? (t, r) => r[e] : null;
}
function vs(e, t, r) {
  e.theme = Cs(e.theme) ? r : e.theme[t] || e.theme;
}
function Gt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r)) return r.flatMap((o) => Gt(e, o));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed) o = r.style;
    else {
      const { variants: n, ...s } = r;
      o = s;
    }
    return Lo(e, r.variants, [o]);
  }
  return (r == null ? void 0 : r.isProcessed) ? r.style : r;
}
function Lo(e, t, r = []) {
  var _a2;
  let o;
  e: for (let n = 0; n < t.length; n += 1) {
    const s = t[n];
    if (typeof s.props == "function") {
      if (o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }), !s.props(o)) continue;
    } else for (const l in s.props) if (e[l] !== s.props[l] && ((_a2 = e.ownerState) == null ? void 0 : _a2[l]) !== s.props[l]) continue e;
    typeof s.style == "function" ? (o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }), r.push(s.style(o))) : r.push(s.style);
  }
  return r;
}
function Ss(e = {}) {
  const { themeId: t, defaultTheme: r = bs, rootShouldForwardProp: o = dr, slotShouldForwardProp: n = dr } = e;
  function s(i) {
    vs(i, t, r);
  }
  return (i, c = {}) => {
    dn(i, (T) => T.filter((E) => E !== ht));
    const { name: u, slot: g, skipVariantsResolver: p, skipSx: f, overridesResolver: y = ys(ks(g)), ...h } = c, d = p !== void 0 ? p : g && g !== "Root" && g !== "root" || false, C = f || false;
    let x = dr;
    g === "Root" || g === "root" ? x = o : g ? x = n : ws(i) && (x = void 0);
    const R = Ro(i, { shouldForwardProp: x, label: xs(), ...h }), k = (T) => {
      if (typeof T == "function" && T.__emotion_real !== T) return function(z) {
        return Gt(z, T);
      };
      if (Ke(T)) {
        const E = Mo(T);
        return E.variants ? function(W) {
          return Gt(W, E);
        } : E.style;
      }
      return T;
    }, v = (...T) => {
      const E = [], z = T.map(k), W = [];
      if (E.push(s), u && y && W.push(function(I) {
        var _a2, _b;
        const B = (_b = (_a2 = I.theme.components) == null ? void 0 : _a2[u]) == null ? void 0 : _b.styleOverrides;
        if (!B) return null;
        const L = {};
        for (const F in B) L[F] = Gt(I, B[F]);
        return y(I, L);
      }), u && !d && W.push(function(I) {
        var _a2, _b, _c;
        const B = (_c = (_b = (_a2 = I.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[u]) == null ? void 0 : _c.variants;
        return B ? Lo(I, B) : null;
      }), C || W.push(ht), Array.isArray(z[0])) {
        const w = z.shift(), I = new Array(E.length).fill(""), $ = new Array(W.length).fill("");
        let B;
        B = [...I, ...w, ...$], B.raw = [...I, ...w.raw, ...$], E.unshift(B);
      }
      const j = [...E, ...z, ...W], a = R(...j);
      return i.muiName && (a.muiName = i.muiName), a;
    };
    return R.withConfig && (v.withConfig = R.withConfig), v;
  };
}
function xs(e, t) {
  return void 0;
}
function Cs(e) {
  for (const t in e) return false;
  return true;
}
function ws(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function ks(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function qt(e, t) {
  const r = { ...t };
  for (const o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
    const n = o;
    if (n === "components" || n === "slots") r[n] = { ...e[n], ...r[n] };
    else if (n === "componentsProps" || n === "slotProps") {
      const s = e[n], l = t[n];
      if (!l) r[n] = s || {};
      else if (!s) r[n] = l;
      else {
        r[n] = { ...l };
        for (const i in s) if (Object.prototype.hasOwnProperty.call(s, i)) {
          const c = i;
          r[n][c] = qt(s[c], l[c]);
        }
      }
    } else r[n] === void 0 && (r[n] = e[n]);
  }
  return r;
}
function Ts(e) {
  const { theme: t, name: r, props: o } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? o : qt(t.components[r].defaultProps, o);
}
function Rs({ props: e, name: t, defaultTheme: r, themeId: o }) {
  let n = Br(r);
  return n = n[o] || n, Ts({ theme: n, name: t, props: e });
}
const Ir = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Tt(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Er(e, t = 0, r = 1) {
  return Tt(e, t, r);
}
function Ps(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, n) => n < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ut(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return ut(Ps(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r)) throw new Error(mt(9, e));
  let o = e.substring(t + 1, e.length - 1), n;
  if (r === "color") {
    if (o = o.split(" "), n = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(n)) throw new Error(mt(10, n));
  } else o = o.split(",");
  return o = o.map((s) => parseFloat(s)), { type: r, values: o, colorSpace: n };
}
const $s = (e) => {
  const t = ut(e);
  return t.values.slice(0, 3).map((r, o) => t.type.includes("hsl") && o !== 0 ? `${r}%` : r).join(" ");
}, At = (e, t) => {
  try {
    return $s(e);
  } catch {
    return e;
  }
};
function lr(e) {
  const { type: t, colorSpace: r } = e;
  let { values: o } = e;
  return t.includes("rgb") ? o = o.map((n, s) => s < 3 ? parseInt(n, 10) : n) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function zo(e) {
  e = ut(e);
  const { values: t } = e, r = t[0], o = t[1] / 100, n = t[2] / 100, s = o * Math.min(n, 1 - n), l = (u, g = (u + r / 30) % 12) => n - s * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let i = "rgb";
  const c = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (i += "a", c.push(t[3])), lr({ type: i, values: c });
}
function hr(e) {
  e = ut(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ut(zo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function As(e, t) {
  const r = hr(e), o = hr(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function nt(e, t) {
  return e = ut(e), t = Er(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lr(e);
}
function Dt(e, t, r) {
  try {
    return nt(e, t);
  } catch {
    return e;
  }
}
function dt(e, t) {
  if (e = ut(e), t = Er(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return lr(e);
}
function ne(e, t, r) {
  try {
    return dt(e, t);
  } catch {
    return e;
  }
}
function pt(e, t) {
  if (e = ut(e), t = Er(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return lr(e);
}
function se(e, t, r) {
  try {
    return pt(e, t);
  } catch {
    return e;
  }
}
function Oo(e, t = 0.15) {
  return hr(e) > 0.5 ? dt(e, t) : pt(e, t);
}
function Ht(e, t, r) {
  try {
    return Oo(e, t);
  } catch {
    return e;
  }
}
function No(e, t = 166) {
  let r;
  function o(...n) {
    const s = () => {
      e.apply(this, n);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(r);
  }, o;
}
function rt(e) {
  return e && e.ownerDocument || document;
}
function jo(e) {
  return rt(e).defaultView || window;
}
function Bs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Xr = 0;
function Is(e) {
  const [t, r] = m.useState(e), o = e || t;
  return m.useEffect(() => {
    t == null && (Xr += 1, r(`mui-${Xr}`));
  }, [t]), o;
}
const Es = { ...on }, qr = Es.useId;
function Ms(e) {
  if (qr !== void 0) {
    const t = qr();
    return e ?? t;
  }
  return Is(e);
}
function Fo({ controlled: e, default: t, name: r, state: o = "value" }) {
  const { current: n } = m.useRef(e !== void 0), [s, l] = m.useState(t), i = n ? e : s, c = m.useCallback((u) => {
    n || l(u);
  }, []);
  return [i, c];
}
function Me(e) {
  const t = m.useRef(e);
  return Ir(() => {
    t.current = e;
  }), m.useRef((...r) => (0, t.current)(...r)).current;
}
function bt(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Bs(r, t);
    });
  }, e);
}
const Qr = {};
function Do(e, t) {
  const r = m.useRef(Qr);
  return r.current === Qr && (r.current = e(t)), r;
}
const Ls = [];
function zs(e) {
  m.useEffect(e, Ls);
}
class Mr {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Mr();
  }
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Lr() {
  const e = Do(Mr.create).current;
  return zs(e.disposeEffect), e;
}
function Qt(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return false;
}
const Os = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", whiteSpace: "nowrap", width: "1px" };
function fe(e, t, r = void 0) {
  const o = {};
  for (const n in e) {
    const s = e[n];
    let l = "", i = true;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (l += (i === true ? "" : " ") + t(u), i = false, r && r[u] && (l += " " + r[u]));
    }
    o[n] = l;
  }
  return o;
}
function Ns(e) {
  return typeof e == "string";
}
function Ho(e, t, r) {
  return e === void 0 || Ns(e) ? t : { ...t, ownerState: { ...t.ownerState, ...r } };
}
function Pt(e, t = []) {
  if (e === void 0) return {};
  const r = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    r[o] = e[o];
  }), r;
}
function Zr(e) {
  if (e === void 0) return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Wo(e) {
  const { getSlotProps: t, additionalProps: r, externalSlotProps: o, externalForwardedProps: n, className: s } = e;
  if (!t) {
    const y = _(r == null ? void 0 : r.className, s, n == null ? void 0 : n.className, o == null ? void 0 : o.className), h = { ...r == null ? void 0 : r.style, ...n == null ? void 0 : n.style, ...o == null ? void 0 : o.style }, d = { ...r, ...n, ...o };
    return y.length > 0 && (d.className = y), Object.keys(h).length > 0 && (d.style = h), { props: d, internalRef: void 0 };
  }
  const l = Pt({ ...n, ...o }), i = Zr(o), c = Zr(n), u = t(l), g = _(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className, o == null ? void 0 : o.className), p = { ...u == null ? void 0 : u.style, ...r == null ? void 0 : r.style, ...n == null ? void 0 : n.style, ...o == null ? void 0 : o.style }, f = { ...u, ...r, ...c, ...i };
  return g.length > 0 && (f.className = g), Object.keys(p).length > 0 && (f.style = p), { props: f, internalRef: u.ref };
}
function Vo(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Be(e) {
  var _a2;
  const { elementType: t, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: n = false, ...s } = e, l = n ? {} : Vo(r, o), { props: i, internalRef: c } = Wo({ ...s, externalSlotProps: l }), u = bt(c, l == null ? void 0 : l.ref, (_a2 = e.additionalProps) == null ? void 0 : _a2.ref);
  return Ho(t, { ...i, ref: u }, o);
}
function _o(e) {
  var _a2;
  return parseInt(m.version, 10) >= 19 ? ((_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const js = m.createContext(), zr = () => m.useContext(js) ?? false, Fs = m.createContext(void 0);
function Ds(e) {
  const { theme: t, name: r, props: o } = e;
  if (!t || !t.components || !t.components[r]) return o;
  const n = t.components[r];
  return n.defaultProps ? qt(n.defaultProps, o) : !n.styleOverrides && !n.variants ? qt(n, o) : o;
}
function Hs({ props: e, name: t }) {
  const r = m.useContext(Fs);
  return Ds({ props: e, name: t, theme: { components: r } });
}
const Jr = { theme: void 0 };
function Ws(e) {
  let t, r;
  return function(n) {
    let s = t;
    return (s === void 0 || n.theme !== r) && (Jr.theme = n.theme, s = Mo(e(Jr)), t = s, r = n.theme), s;
  };
}
function Vs(e = "") {
  function t(...o) {
    if (!o.length) return "";
    const n = o[0];
    return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${n}${t(...o.slice(1))})` : `, ${n}`;
  }
  return (o, ...n) => `var(--${e ? `${e}-` : ""}${o}${t(...n)})`;
}
const eo = (e, t, r, o = []) => {
  let n = e;
  t.forEach((s, l) => {
    l === t.length - 1 ? Array.isArray(n) ? n[Number(s)] = r : n && typeof n == "object" && (n[s] = r) : n && typeof n == "object" && (n[s] || (n[s] = o.includes(s) ? [] : {}), n = n[s]);
  });
}, _s = (e, t, r) => {
  function o(n, s = [], l = []) {
    Object.entries(n).forEach(([i, c]) => {
      (!r || r && !r([...s, i])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...s, i], Array.isArray(c) ? [...l, i] : l) : t([...s, i], c, l));
    });
  }
  o(e);
}, Us = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function pr(e, t) {
  const { prefix: r, shouldSkipGeneratingVar: o } = t || {}, n = {}, s = {}, l = {};
  return _s(e, (i, c, u) => {
    if ((typeof c == "string" || typeof c == "number") && (!o || !o(i, c))) {
      const g = `--${r ? `${r}-` : ""}${i.join("-")}`, p = Us(i, c);
      Object.assign(n, { [g]: p }), eo(s, i, `var(${g})`, u), eo(l, i, `var(${g}, ${p})`, u);
    }
  }, (i) => i[0] === "vars"), { css: n, vars: s, varsWithDefaults: l };
}
function Ks(e, t = {}) {
  const { getSelector: r = C, disableCssColorScheme: o, colorSchemeSelector: n } = t, { colorSchemes: s = {}, components: l, defaultColorScheme: i = "light", ...c } = e, { vars: u, css: g, varsWithDefaults: p } = pr(c, t);
  let f = p;
  const y = {}, { [i]: h, ...d } = s;
  if (Object.entries(d || {}).forEach(([k, v]) => {
    const { vars: T, css: E, varsWithDefaults: z } = pr(v, t);
    f = Ee(f, z), y[k] = { css: E, vars: T };
  }), h) {
    const { css: k, vars: v, varsWithDefaults: T } = pr(h, t);
    f = Ee(f, T), y[i] = { css: k, vars: v };
  }
  function C(k, v) {
    var _a2, _b;
    let T = n;
    if (n === "class" && (T = ".%s"), n === "data" && (T = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (T = `[${n}="%s"]`), k) {
      if (T === "media") return e.defaultColorScheme === k ? ":root" : { [`@media (prefers-color-scheme: ${((_b = (_a2 = s[k]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || k})`]: { ":root": v } };
      if (T) return e.defaultColorScheme === k ? `:root, ${T.replace("%s", String(k))}` : T.replace("%s", String(k));
    }
    return ":root";
  }
  return { vars: f, generateThemeVars: () => {
    let k = { ...u };
    return Object.entries(y).forEach(([, { vars: v }]) => {
      k = Ee(k, v);
    }), k;
  }, generateStyleSheets: () => {
    var _a2, _b;
    const k = [], v = e.defaultColorScheme || "light";
    function T(W, j) {
      Object.keys(j).length && k.push(typeof W == "string" ? { [W]: { ...j } } : W);
    }
    T(r(void 0, { ...g }), g);
    const { [v]: E, ...z } = y;
    if (E) {
      const { css: W } = E, j = (_b = (_a2 = s[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, a = !o && j ? { colorScheme: j, ...W } : { ...W };
      T(r(v, { ...a }), a);
    }
    return Object.entries(z).forEach(([W, { css: j }]) => {
      var _a3, _b2;
      const a = (_b2 = (_a3 = s[W]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, w = !o && a ? { colorScheme: a, ...j } : { ...j };
      T(r(W, { ...w }), w);
    }), k;
  } };
}
function Gs(e) {
  return function(r) {
    return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function Uo() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: Mt.white, default: Mt.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const Ys = Uo();
function Ko() {
  return { text: { primary: Mt.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: Mt.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const to = Ko();
function ro(e, t, r, o) {
  const n = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = pt(e.main, n) : t === "dark" && (e.dark = dt(e.main, s)));
}
function Xs(e = "light") {
  return e === "dark" ? { main: xt[200], light: xt[50], dark: xt[400] } : { main: xt[700], light: xt[400], dark: xt[800] };
}
function qs(e = "light") {
  return e === "dark" ? { main: St[200], light: St[50], dark: St[400] } : { main: St[500], light: St[300], dark: St[700] };
}
function Qs(e = "light") {
  return e === "dark" ? { main: vt[500], light: vt[300], dark: vt[700] } : { main: vt[700], light: vt[400], dark: vt[800] };
}
function Zs(e = "light") {
  return e === "dark" ? { main: Ct[400], light: Ct[300], dark: Ct[700] } : { main: Ct[700], light: Ct[500], dark: Ct[900] };
}
function Js(e = "light") {
  return e === "dark" ? { main: wt[400], light: wt[300], dark: wt[700] } : { main: wt[800], light: wt[500], dark: wt[900] };
}
function ea(e = "light") {
  return e === "dark" ? { main: $t[400], light: $t[300], dark: $t[700] } : { main: "#ed6c02", light: $t[500], dark: $t[900] };
}
function Or(e) {
  const { mode: t = "light", contrastThreshold: r = 3, tonalOffset: o = 0.2, ...n } = e, s = e.primary || Xs(t), l = e.secondary || qs(t), i = e.error || Qs(t), c = e.info || Zs(t), u = e.success || Js(t), g = e.warning || ea(t);
  function p(d) {
    return As(d, to.text.primary) >= r ? to.text.primary : Ys.text.primary;
  }
  const f = ({ color: d, name: C, mainShade: x = 500, lightShade: R = 300, darkShade: k = 700 }) => {
    if (d = { ...d }, !d.main && d[x] && (d.main = d[x]), !d.hasOwnProperty("main")) throw new Error(mt(11, C ? ` (${C})` : "", x));
    if (typeof d.main != "string") throw new Error(mt(12, C ? ` (${C})` : "", JSON.stringify(d.main)));
    return ro(d, "light", R, o), ro(d, "dark", k, o), d.contrastText || (d.contrastText = p(d.main)), d;
  };
  let y;
  return t === "light" ? y = Uo() : t === "dark" && (y = Ko()), Ee({ common: { ...Mt }, mode: t, primary: f({ color: s, name: "primary" }), secondary: f({ color: l, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: f({ color: i, name: "error" }), warning: f({ color: g, name: "warning" }), info: f({ color: c, name: "info" }), success: f({ color: u, name: "success" }), grey: un, contrastThreshold: r, getContrastText: p, augmentColor: f, tonalOffset: o, ...y }, n);
}
function ta(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [n, s] = o;
    typeof s == "object" && (t[n] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function ra(e, t) {
  return { toolbar: { minHeight: 56, [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e.up("sm")]: { minHeight: 64 } }, ...t };
}
function oa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const oo = { textTransform: "uppercase" }, no = '"Roboto", "Helvetica", "Arial", sans-serif';
function na(e, t) {
  const { fontFamily: r = no, fontSize: o = 14, fontWeightLight: n = 300, fontWeightRegular: s = 400, fontWeightMedium: l = 500, fontWeightBold: i = 700, htmlFontSize: c = 16, allVariants: u, pxToRem: g, ...p } = typeof t == "function" ? t(e) : t, f = o / 14, y = g || ((C) => `${C / c * f}rem`), h = (C, x, R, k, v) => ({ fontFamily: r, fontWeight: C, fontSize: y(x), lineHeight: R, ...r === no ? { letterSpacing: `${oa(k / x)}em` } : {}, ...v, ...u }), d = { h1: h(n, 96, 1.167, -1.5), h2: h(n, 60, 1.2, -0.5), h3: h(s, 48, 1.167, 0), h4: h(s, 34, 1.235, 0.25), h5: h(s, 24, 1.334, 0), h6: h(l, 20, 1.6, 0.15), subtitle1: h(s, 16, 1.75, 0.15), subtitle2: h(l, 14, 1.57, 0.1), body1: h(s, 16, 1.5, 0.15), body2: h(s, 14, 1.43, 0.15), button: h(l, 14, 1.75, 0.4, oo), caption: h(s, 12, 1.66, 0.4), overline: h(s, 12, 2.66, 1, oo), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Ee({ htmlFontSize: c, pxToRem: y, fontFamily: r, fontSize: o, fontWeightLight: n, fontWeightRegular: s, fontWeightMedium: l, fontWeightBold: i, ...d }, p, { clone: false });
}
const sa = 0.2, aa = 0.14, ia = 0.12;
function le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${aa})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ia})`].join(",");
}
const la = ["none", le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ca = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, ua = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function so(e) {
  return `${Math.round(e)}ms`;
}
function da(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function pa(e) {
  const t = { ...ca, ...e.easing }, r = { ...ua, ...e.duration };
  return { getAutoHeightDuration: da, create: (n = ["all"], s = {}) => {
    const { duration: l = r.standard, easing: i = t.easeInOut, delay: c = 0, ...u } = s;
    return (Array.isArray(n) ? n : [n]).map((g) => `${g} ${typeof l == "string" ? l : so(l)} ${i} ${typeof c == "string" ? c : so(c)}`).join(",");
  }, ...e, easing: t, duration: r };
}
const fa = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function ga(e) {
  return Ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Go(e = {}) {
  const t = { ...e };
  function r(o) {
    const n = Object.entries(o);
    for (let s = 0; s < n.length; s++) {
      const [l, i] = n[s];
      !ga(i) || l.startsWith("unstable_") ? delete o[l] : Ke(i) && (o[l] = { ...i }, r(o[l]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function br(e = {}, ...t) {
  const { breakpoints: r, mixins: o = {}, spacing: n, palette: s = {}, transitions: l = {}, typography: i = {}, shape: c, ...u } = e;
  if (e.vars) throw new Error(mt(20));
  const g = Or(s), p = Ar(e);
  let f = Ee(p, { mixins: ra(p.breakpoints, o), palette: g, shadows: la.slice(), typography: na(g, i), transitions: pa(l), zIndex: { ...fa } });
  return f = Ee(f, u), f = t.reduce((y, h) => Ee(y, h), f), f.unstable_sxConfig = { ...Nt, ...u == null ? void 0 : u.unstable_sxConfig }, f.unstable_sx = function(h) {
    return ht({ sx: h, theme: this });
  }, f.toRuntimeSource = Go, f;
}
function yr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ma = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const r = yr(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Yo(e) {
  return { inputPlaceholder: e === "dark" ? 0.5 : 0.42, inputUnderline: e === "dark" ? 0.7 : 0.42, switchTrackDisabled: e === "dark" ? 0.2 : 0.12, switchTrack: e === "dark" ? 0.3 : 0.38 };
}
function Xo(e) {
  return e === "dark" ? ma : [];
}
function ha(e) {
  const { palette: t = { mode: "light" }, opacity: r, overlays: o, ...n } = e, s = Or(t);
  return { palette: s, opacity: { ...Yo(s.mode), ...r }, overlays: o || Xo(s.mode), ...n };
}
function ba(e) {
  var _a2;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((_a2 = e[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ya = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], va = (e) => (t, r) => {
  const o = e.rootSelector || ":root", n = e.colorSchemeSelector;
  let s = n;
  if (n === "class" && (s = ".%s"), n === "data" && (s = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (s = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return ya(e.cssVarPrefix).forEach((i) => {
        l[i] = r[i], delete r[i];
      }), s === "media" ? { [o]: r, "@media (prefers-color-scheme: dark)": { [o]: l } } : s ? { [s.replace("%s", t)]: l, [`${o}, ${s.replace("%s", t)}`]: r } : { [o]: { ...r, ...l } };
    }
    if (s && s !== "media") return `${o}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [o]: r } };
    if (s) return s.replace("%s", String(t));
  }
  return o;
};
function Sa(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Bt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : zo(e);
}
function et(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = At(Bt(e[t])));
}
function xa(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ue = (e) => {
  try {
    return e();
  } catch {
  }
}, Ca = (e = "mui") => Vs(e);
function fr(e, t, r, o) {
  if (!t) return;
  t = t === true ? {} : t;
  const n = o === "dark" ? "dark" : "light";
  if (!r) {
    e[o] = ha({ ...t, palette: { mode: n, ...t == null ? void 0 : t.palette } });
    return;
  }
  const { palette: s, ...l } = br({ ...r, palette: { mode: n, ...t == null ? void 0 : t.palette } });
  return e[o] = { ...t, palette: s, opacity: { ...Yo(n), ...t == null ? void 0 : t.opacity }, overlays: (t == null ? void 0 : t.overlays) || Xo(n) }, l;
}
function wa(e = {}, ...t) {
  const { colorSchemes: r = { light: true }, defaultColorScheme: o, disableCssColorScheme: n = false, cssVarPrefix: s = "mui", shouldSkipGeneratingVar: l = ba, colorSchemeSelector: i = r.light && r.dark ? "media" : void 0, rootSelector: c = ":root", ...u } = e, g = Object.keys(r)[0], p = o || (r.light && g !== "light" ? "light" : g), f = Ca(s), { [p]: y, light: h, dark: d, ...C } = r, x = { ...C };
  let R = y;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (R = true), !R) throw new Error(mt(21, p));
  const k = fr(x, R, u, p);
  h && !x.light && fr(x, h, void 0, "light"), d && !x.dark && fr(x, d, void 0, "dark");
  let v = { defaultColorScheme: p, ...k, cssVarPrefix: s, colorSchemeSelector: i, rootSelector: c, getCssVar: f, colorSchemes: x, font: { ...ta(k.typography), ...k.font }, spacing: xa(u.spacing) };
  Object.keys(v.colorSchemes).forEach((j) => {
    const a = v.colorSchemes[j].palette, w = (I) => {
      const $ = I.split("-"), B = $[1], L = $[2];
      return f(I, a[B][L]);
    };
    if (a.mode === "light" && (b(a.common, "background", "#fff"), b(a.common, "onBackground", "#000")), a.mode === "dark" && (b(a.common, "background", "#000"), b(a.common, "onBackground", "#fff")), Sa(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      b(a.Alert, "errorColor", ne(a.error.light, 0.6)), b(a.Alert, "infoColor", ne(a.info.light, 0.6)), b(a.Alert, "successColor", ne(a.success.light, 0.6)), b(a.Alert, "warningColor", ne(a.warning.light, 0.6)), b(a.Alert, "errorFilledBg", w("palette-error-main")), b(a.Alert, "infoFilledBg", w("palette-info-main")), b(a.Alert, "successFilledBg", w("palette-success-main")), b(a.Alert, "warningFilledBg", w("palette-warning-main")), b(a.Alert, "errorFilledColor", Ue(() => a.getContrastText(a.error.main))), b(a.Alert, "infoFilledColor", Ue(() => a.getContrastText(a.info.main))), b(a.Alert, "successFilledColor", Ue(() => a.getContrastText(a.success.main))), b(a.Alert, "warningFilledColor", Ue(() => a.getContrastText(a.warning.main))), b(a.Alert, "errorStandardBg", se(a.error.light, 0.9)), b(a.Alert, "infoStandardBg", se(a.info.light, 0.9)), b(a.Alert, "successStandardBg", se(a.success.light, 0.9)), b(a.Alert, "warningStandardBg", se(a.warning.light, 0.9)), b(a.Alert, "errorIconColor", w("palette-error-main")), b(a.Alert, "infoIconColor", w("palette-info-main")), b(a.Alert, "successIconColor", w("palette-success-main")), b(a.Alert, "warningIconColor", w("palette-warning-main")), b(a.AppBar, "defaultBg", w("palette-grey-100")), b(a.Avatar, "defaultBg", w("palette-grey-400")), b(a.Button, "inheritContainedBg", w("palette-grey-300")), b(a.Button, "inheritContainedHoverBg", w("palette-grey-A100")), b(a.Chip, "defaultBorder", w("palette-grey-400")), b(a.Chip, "defaultAvatarColor", w("palette-grey-700")), b(a.Chip, "defaultIconColor", w("palette-grey-700")), b(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(a.LinearProgress, "primaryBg", se(a.primary.main, 0.62)), b(a.LinearProgress, "secondaryBg", se(a.secondary.main, 0.62)), b(a.LinearProgress, "errorBg", se(a.error.main, 0.62)), b(a.LinearProgress, "infoBg", se(a.info.main, 0.62)), b(a.LinearProgress, "successBg", se(a.success.main, 0.62)), b(a.LinearProgress, "warningBg", se(a.warning.main, 0.62)), b(a.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.11)`), b(a.Slider, "primaryTrack", se(a.primary.main, 0.62)), b(a.Slider, "secondaryTrack", se(a.secondary.main, 0.62)), b(a.Slider, "errorTrack", se(a.error.main, 0.62)), b(a.Slider, "infoTrack", se(a.info.main, 0.62)), b(a.Slider, "successTrack", se(a.success.main, 0.62)), b(a.Slider, "warningTrack", se(a.warning.main, 0.62));
      const I = Ht(a.background.default, 0.8);
      b(a.SnackbarContent, "bg", I), b(a.SnackbarContent, "color", Ue(() => a.getContrastText(I))), b(a.SpeedDialAction, "fabHoverBg", Ht(a.background.paper, 0.15)), b(a.StepConnector, "border", w("palette-grey-400")), b(a.StepContent, "border", w("palette-grey-400")), b(a.Switch, "defaultColor", w("palette-common-white")), b(a.Switch, "defaultDisabledColor", w("palette-grey-100")), b(a.Switch, "primaryDisabledColor", se(a.primary.main, 0.62)), b(a.Switch, "secondaryDisabledColor", se(a.secondary.main, 0.62)), b(a.Switch, "errorDisabledColor", se(a.error.main, 0.62)), b(a.Switch, "infoDisabledColor", se(a.info.main, 0.62)), b(a.Switch, "successDisabledColor", se(a.success.main, 0.62)), b(a.Switch, "warningDisabledColor", se(a.warning.main, 0.62)), b(a.TableCell, "border", se(Dt(a.divider, 1), 0.88)), b(a.Tooltip, "bg", Dt(a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      b(a.Alert, "errorColor", se(a.error.light, 0.6)), b(a.Alert, "infoColor", se(a.info.light, 0.6)), b(a.Alert, "successColor", se(a.success.light, 0.6)), b(a.Alert, "warningColor", se(a.warning.light, 0.6)), b(a.Alert, "errorFilledBg", w("palette-error-dark")), b(a.Alert, "infoFilledBg", w("palette-info-dark")), b(a.Alert, "successFilledBg", w("palette-success-dark")), b(a.Alert, "warningFilledBg", w("palette-warning-dark")), b(a.Alert, "errorFilledColor", Ue(() => a.getContrastText(a.error.dark))), b(a.Alert, "infoFilledColor", Ue(() => a.getContrastText(a.info.dark))), b(a.Alert, "successFilledColor", Ue(() => a.getContrastText(a.success.dark))), b(a.Alert, "warningFilledColor", Ue(() => a.getContrastText(a.warning.dark))), b(a.Alert, "errorStandardBg", ne(a.error.light, 0.9)), b(a.Alert, "infoStandardBg", ne(a.info.light, 0.9)), b(a.Alert, "successStandardBg", ne(a.success.light, 0.9)), b(a.Alert, "warningStandardBg", ne(a.warning.light, 0.9)), b(a.Alert, "errorIconColor", w("palette-error-main")), b(a.Alert, "infoIconColor", w("palette-info-main")), b(a.Alert, "successIconColor", w("palette-success-main")), b(a.Alert, "warningIconColor", w("palette-warning-main")), b(a.AppBar, "defaultBg", w("palette-grey-900")), b(a.AppBar, "darkBg", w("palette-background-paper")), b(a.AppBar, "darkColor", w("palette-text-primary")), b(a.Avatar, "defaultBg", w("palette-grey-600")), b(a.Button, "inheritContainedBg", w("palette-grey-800")), b(a.Button, "inheritContainedHoverBg", w("palette-grey-700")), b(a.Chip, "defaultBorder", w("palette-grey-700")), b(a.Chip, "defaultAvatarColor", w("palette-grey-300")), b(a.Chip, "defaultIconColor", w("palette-grey-300")), b(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(a.LinearProgress, "primaryBg", ne(a.primary.main, 0.5)), b(a.LinearProgress, "secondaryBg", ne(a.secondary.main, 0.5)), b(a.LinearProgress, "errorBg", ne(a.error.main, 0.5)), b(a.LinearProgress, "infoBg", ne(a.info.main, 0.5)), b(a.LinearProgress, "successBg", ne(a.success.main, 0.5)), b(a.LinearProgress, "warningBg", ne(a.warning.main, 0.5)), b(a.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.13)`), b(a.Slider, "primaryTrack", ne(a.primary.main, 0.5)), b(a.Slider, "secondaryTrack", ne(a.secondary.main, 0.5)), b(a.Slider, "errorTrack", ne(a.error.main, 0.5)), b(a.Slider, "infoTrack", ne(a.info.main, 0.5)), b(a.Slider, "successTrack", ne(a.success.main, 0.5)), b(a.Slider, "warningTrack", ne(a.warning.main, 0.5));
      const I = Ht(a.background.default, 0.98);
      b(a.SnackbarContent, "bg", I), b(a.SnackbarContent, "color", Ue(() => a.getContrastText(I))), b(a.SpeedDialAction, "fabHoverBg", Ht(a.background.paper, 0.15)), b(a.StepConnector, "border", w("palette-grey-600")), b(a.StepContent, "border", w("palette-grey-600")), b(a.Switch, "defaultColor", w("palette-grey-300")), b(a.Switch, "defaultDisabledColor", w("palette-grey-600")), b(a.Switch, "primaryDisabledColor", ne(a.primary.main, 0.55)), b(a.Switch, "secondaryDisabledColor", ne(a.secondary.main, 0.55)), b(a.Switch, "errorDisabledColor", ne(a.error.main, 0.55)), b(a.Switch, "infoDisabledColor", ne(a.info.main, 0.55)), b(a.Switch, "successDisabledColor", ne(a.success.main, 0.55)), b(a.Switch, "warningDisabledColor", ne(a.warning.main, 0.55)), b(a.TableCell, "border", ne(Dt(a.divider, 1), 0.68)), b(a.Tooltip, "bg", Dt(a.grey[700], 0.92));
    }
    et(a.background, "default"), et(a.background, "paper"), et(a.common, "background"), et(a.common, "onBackground"), et(a, "divider"), Object.keys(a).forEach((I) => {
      const $ = a[I];
      I !== "tonalOffset" && $ && typeof $ == "object" && ($.main && b(a[I], "mainChannel", At(Bt($.main))), $.light && b(a[I], "lightChannel", At(Bt($.light))), $.dark && b(a[I], "darkChannel", At(Bt($.dark))), $.contrastText && b(a[I], "contrastTextChannel", At(Bt($.contrastText))), I === "text" && (et(a[I], "primary"), et(a[I], "secondary")), I === "action" && ($.active && et(a[I], "active"), $.selected && et(a[I], "selected")));
    });
  }), v = t.reduce((j, a) => Ee(j, a), v);
  const T = { prefix: s, disableCssColorScheme: n, shouldSkipGeneratingVar: l, getSelector: va(v) }, { vars: E, generateThemeVars: z, generateStyleSheets: W } = Ks(v, T);
  return v.vars = E, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([j, a]) => {
    v[j] = a;
  }), v.generateThemeVars = z, v.generateStyleSheets = W, v.generateSpacing = function() {
    return Bo(u.spacing, Pr(this));
  }, v.getColorSchemeSelector = Gs(i), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = l, v.unstable_sxConfig = { ...Nt, ...u == null ? void 0 : u.unstable_sxConfig }, v.unstable_sx = function(a) {
    return ht({ sx: a, theme: this });
  }, v.toRuntimeSource = Go, v;
}
function ao(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = { ...r !== true && r, palette: Or({ ...r === true ? {} : r.palette, mode: t }) });
}
function qo(e = {}, ...t) {
  const { palette: r, cssVariables: o = false, colorSchemes: n = r ? void 0 : { light: true }, defaultColorScheme: s = r == null ? void 0 : r.mode, ...l } = e, i = s || "light", c = n == null ? void 0 : n[i], u = { ...n, ...r ? { [i]: { ...typeof c != "boolean" && c, palette: r } } : void 0 };
  if (o === false) {
    if (!("colorSchemes" in e)) return br(e, ...t);
    let g = r;
    "palette" in e || u[i] && (u[i] !== true ? g = u[i].palette : i === "dark" && (g = { mode: "dark" }));
    const p = br({ ...e, palette: g }, ...t);
    return p.defaultColorScheme = i, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = { ...u.light !== true && u.light, palette: p.palette }, ao(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = { ...u.dark !== true && u.dark, palette: p.palette }, ao(p, "light", u.light)), p;
  }
  return !r && !("light" in u) && i === "light" && (u.light = true), wa({ ...l, colorSchemes: u, defaultColorScheme: i, ...typeof o != "boolean" && o }, ...t);
}
const Nr = qo();
function cr() {
  const e = Br(Nr);
  return e[er] || e;
}
function ka({ props: e, name: t }) {
  return Rs({ props: e, name: t, defaultTheme: Nr, themeId: er });
}
function jr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Fr = (e) => jr(e) && e !== "classes", H = Ss({ themeId: er, defaultTheme: Nr, rootShouldForwardProp: Fr });
function Ta() {
  return Io;
}
const ee = Ws;
function he(e) {
  return Hs(e);
}
function Ra(e) {
  return ue("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Pa = (e) => {
  const { color: t, fontSize: r, classes: o } = e, n = { root: ["root", t !== "inherit" && `color${N(t)}`, `fontSize${N(r)}`] };
  return fe(n, Ra, o);
}, $a = H("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.color !== "inherit" && t[`color${N(r.color)}`], t[`fontSize${N(r.fontSize)}`]];
} })(ee(({ theme: e }) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a2 = e.transitions) == null ? void 0 : _a2.create) == null ? void 0 : _d.call(_a2, "fill", { duration: (_c = (_b = (e.vars ?? e).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (t) => !t.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f = (_e = e.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g = e.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = e.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => {
    var _a3, _b2;
    return { props: { color: t }, style: { color: (_b2 = (_a3 = (e.vars ?? e).palette) == null ? void 0 : _a3[t]) == null ? void 0 : _b2.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (e.vars ?? e).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n2 = (_m = (e.vars ?? e).palette) == null ? void 0 : _m.action) == null ? void 0 : _n2.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), vr = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiSvgIcon" }), { children: n, className: s, color: l = "inherit", component: i = "svg", fontSize: c = "medium", htmlColor: u, inheritViewBox: g = false, titleAccess: p, viewBox: f = "0 0 24 24", ...y } = o, h = m.isValidElement(n) && n.type === "svg", d = { ...o, color: l, component: i, fontSize: c, instanceFontSize: t.fontSize, inheritViewBox: g, viewBox: f, hasSvgAsChild: h }, C = {};
  g || (C.viewBox = f);
  const x = Pa(d);
  return S.jsxs($a, { as: i, className: _(x.root, s), focusable: "false", color: u, "aria-hidden": p ? void 0 : true, role: p ? "img" : void 0, ref: r, ...C, ...y, ...h && n.props, ownerState: d, children: [h ? n.props.children : n, p ? S.jsx("title", { children: p }) : null] });
});
vr.muiName = "SvgIcon";
function st(e, t) {
  function r(o, n) {
    return S.jsx(vr, { "data-testid": `${t}Icon`, ref: n, ...o, children: e });
  }
  return r.muiName = vr.muiName, m.memo(m.forwardRef(r));
}
const Aa = (e) => e.scrollTop;
function io(e, t) {
  const { timeout: r, easing: o, style: n = {} } = e;
  return { duration: n.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0), easing: n.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o), delay: n.transitionDelay };
}
function Ba(e) {
  return ue("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Ia = (e) => {
  const { square: t, elevation: r, variant: o, classes: n } = e, s = { root: ["root", o, !t && "rounded", o === "elevation" && `elevation${r}`] };
  return fe(s, Ba, n);
}, Ea = H("div", { name: "MuiPaper", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
} })(ee(({ theme: e }) => ({ backgroundColor: (e.vars || e).palette.background.paper, color: (e.vars || e).palette.text.primary, transition: e.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: t }) => !t.square, style: { borderRadius: e.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(e.vars || e).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Dr = m.forwardRef(function(t, r) {
  var _a2;
  const o = he({ props: t, name: "MuiPaper" }), n = cr(), { className: s, component: l = "div", elevation: i = 1, square: c = false, variant: u = "elevation", ...g } = o, p = { ...o, component: l, elevation: i, square: c, variant: u }, f = Ia(p);
  return S.jsx(Ea, { as: l, ownerState: p, className: _(f.root, s), ref: r, ...g, style: { ...u === "elevation" && { "--Paper-shadow": (n.vars || n).shadows[i], ...n.vars && { "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[i] }, ...!n.vars && n.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${nt("#fff", yr(i))}, ${nt("#fff", yr(i))})` } }, ...g.style } });
});
function ct(e, t) {
  const { className: r, elementType: o, ownerState: n, externalForwardedProps: s, internalForwardedProps: l, shouldForwardComponentProp: i = false, ...c } = t, { component: u, slots: g = { [e]: void 0 }, slotProps: p = { [e]: void 0 }, ...f } = s, y = g[e] || o, h = Vo(p[e], n), { props: { component: d, ...C }, internalRef: x } = Wo({ className: r, ...c, externalForwardedProps: e === "root" ? f : void 0, externalSlotProps: h }), R = bt(x, h == null ? void 0 : h.ref, t.ref), k = e === "root" ? d || u : d, v = Ho(y, { ...e === "root" && !u && !g[e] && l, ...e !== "root" && !g[e] && l, ...C, ...k && !i && { as: k }, ...k && i && { component: k }, ref: R }, n);
  return [y, v];
}
class Zt {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new Zt();
  }
  static use() {
    const t = Do(Zt.create).current, [r, o] = m.useState(false);
    return t.shouldMount = r, t.setShouldMount = o, m.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = La(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var _a2;
      return (_a2 = this.ref.current) == null ? void 0 : _a2.pulsate(...t);
    });
  }
}
function Ma() {
  return Zt.use();
}
function La() {
  let e, t;
  const r = new Promise((o, n) => {
    e = o, t = n;
  });
  return r.resolve = e, r.reject = t, r;
}
function za(e) {
  const { className: t, classes: r, pulsate: o = false, rippleX: n, rippleY: s, rippleSize: l, in: i, onExited: c, timeout: u } = e, [g, p] = m.useState(false), f = _(t, r.ripple, r.rippleVisible, o && r.ripplePulsate), y = { width: l, height: l, top: -(l / 2) + s, left: -(l / 2) + n }, h = _(r.child, g && r.childLeaving, o && r.childPulsate);
  return !i && !g && p(true), m.useEffect(() => {
    if (!i && c != null) {
      const d = setTimeout(c, u);
      return () => {
        clearTimeout(d);
      };
    }
  }, [c, i, u]), S.jsx("span", { className: f, style: y, children: S.jsx("span", { className: h }) });
}
const je = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Sr = 550, Oa = 80, Na = Lt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ja = Lt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Fa = Lt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Da = H("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), Ha = H(za, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${je.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Na};
    animation-duration: ${Sr}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${je.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${je.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${je.childLeaving} {
    opacity: 0;
    animation-name: ${ja};
    animation-duration: ${Sr}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${je.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Fa};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Wa = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiTouchRipple" }), { center: n = false, classes: s = {}, className: l, ...i } = o, [c, u] = m.useState([]), g = m.useRef(0), p = m.useRef(null);
  m.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const f = m.useRef(false), y = Lr(), h = m.useRef(null), d = m.useRef(null), C = m.useCallback((v) => {
    const { pulsate: T, rippleX: E, rippleY: z, rippleSize: W, cb: j } = v;
    u((a) => [...a, S.jsx(Ha, { classes: { ripple: _(s.ripple, je.ripple), rippleVisible: _(s.rippleVisible, je.rippleVisible), ripplePulsate: _(s.ripplePulsate, je.ripplePulsate), child: _(s.child, je.child), childLeaving: _(s.childLeaving, je.childLeaving), childPulsate: _(s.childPulsate, je.childPulsate) }, timeout: Sr, pulsate: T, rippleX: E, rippleY: z, rippleSize: W }, g.current)]), g.current += 1, p.current = j;
  }, [s]), x = m.useCallback((v = {}, T = {}, E = () => {
  }) => {
    const { pulsate: z = false, center: W = n || T.pulsate, fakeElement: j = false } = T;
    if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
      f.current = false;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (f.current = true);
    const a = j ? null : d.current, w = a ? a.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let I, $, B;
    if (W || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) I = Math.round(w.width / 2), $ = Math.round(w.height / 2);
    else {
      const { clientX: L, clientY: F } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      I = Math.round(L - w.left), $ = Math.round(F - w.top);
    }
    if (W) B = Math.sqrt((2 * w.width ** 2 + w.height ** 2) / 3), B % 2 === 0 && (B += 1);
    else {
      const L = Math.max(Math.abs((a ? a.clientWidth : 0) - I), I) * 2 + 2, F = Math.max(Math.abs((a ? a.clientHeight : 0) - $), $) * 2 + 2;
      B = Math.sqrt(L ** 2 + F ** 2);
    }
    (v == null ? void 0 : v.touches) ? h.current === null && (h.current = () => {
      C({ pulsate: z, rippleX: I, rippleY: $, rippleSize: B, cb: E });
    }, y.start(Oa, () => {
      h.current && (h.current(), h.current = null);
    })) : C({ pulsate: z, rippleX: I, rippleY: $, rippleSize: B, cb: E });
  }, [n, C, y]), R = m.useCallback(() => {
    x({}, { pulsate: true });
  }, [x]), k = m.useCallback((v, T) => {
    if (y.clear(), (v == null ? void 0 : v.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        k(v, T);
      });
      return;
    }
    h.current = null, u((E) => E.length > 0 ? E.slice(1) : E), p.current = T;
  }, [y]);
  return m.useImperativeHandle(r, () => ({ pulsate: R, start: x, stop: k }), [R, x, k]), S.jsx(Da, { className: _(je.root, s.root, l), ref: d, ...i, children: S.jsx(ln, { component: null, exit: true, children: c }) });
});
function Va(e) {
  return ue("MuiButtonBase", e);
}
const _a = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ua = (e) => {
  const { disabled: t, focusVisible: r, focusVisibleClassName: o, classes: n } = e, l = fe({ root: ["root", t && "disabled", r && "focusVisible"] }, Va, n);
  return r && o && (l.root += ` ${o}`), l;
}, Ka = H("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${_a.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), jt = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiButtonBase" }), { action: n, centerRipple: s = false, children: l, className: i, component: c = "button", disabled: u = false, disableRipple: g = false, disableTouchRipple: p = false, focusRipple: f = false, focusVisibleClassName: y, LinkComponent: h = "a", onBlur: d, onClick: C, onContextMenu: x, onDragLeave: R, onFocus: k, onFocusVisible: v, onKeyDown: T, onKeyUp: E, onMouseDown: z, onMouseLeave: W, onMouseUp: j, onTouchEnd: a, onTouchMove: w, onTouchStart: I, tabIndex: $ = 0, TouchRippleProps: B, touchRippleRef: L, type: F, ...q } = o, U = m.useRef(null), O = Ma(), re = bt(O.ref, L), [K, Se] = m.useState(false);
  u && K && Se(false), m.useImperativeHandle(n, () => ({ focusVisible: () => {
    Se(true), U.current.focus();
  } }), []);
  const Ge = O.shouldMount && !g && !u;
  m.useEffect(() => {
    K && f && !g && O.pulsate();
  }, [g, f, K, O]);
  const at = tt(O, "start", z, p), it = tt(O, "stop", x, p), $e = tt(O, "stop", R, p), Ye = tt(O, "stop", j, p), ze = tt(O, "stop", (V) => {
    K && V.preventDefault(), W && W(V);
  }, p), We = tt(O, "start", I, p), Oe = tt(O, "stop", a, p), Ve = tt(O, "stop", w, p), Ce = tt(O, "stop", (V) => {
    Qt(V.target) || Se(false), d && d(V);
  }, false), ye = Me((V) => {
    U.current || (U.current = V.currentTarget), Qt(V.target) && (Se(true), v && v(V)), k && k(V);
  }), ke = () => {
    const V = U.current;
    return c && c !== "button" && !(V.tagName === "A" && V.href);
  }, ft = Me((V) => {
    f && !V.repeat && K && V.key === " " && O.stop(V, () => {
      O.start(V);
    }), V.target === V.currentTarget && ke() && V.key === " " && V.preventDefault(), T && T(V), V.target === V.currentTarget && ke() && V.key === "Enter" && !u && (V.preventDefault(), C && C(V));
  }), Xe = Me((V) => {
    f && V.key === " " && K && !V.defaultPrevented && O.stop(V, () => {
      O.pulsate(V);
    }), E && E(V), C && V.target === V.currentTarget && ke() && V.key === " " && !V.defaultPrevented && C(V);
  });
  let te = c;
  te === "button" && (q.href || q.to) && (te = h);
  const ve = {};
  te === "button" ? (ve.type = F === void 0 ? "button" : F, ve.disabled = u) : (!q.href && !q.to && (ve.role = "button"), u && (ve["aria-disabled"] = u));
  const qe = bt(r, U), Ae = { ...o, centerRipple: s, component: c, disabled: u, disableRipple: g, disableTouchRipple: p, focusRipple: f, tabIndex: $, focusVisible: K }, _e = Ua(Ae);
  return S.jsxs(Ka, { as: te, className: _(_e.root, i), ownerState: Ae, onBlur: Ce, onClick: C, onContextMenu: it, onFocus: ye, onKeyDown: ft, onKeyUp: Xe, onMouseDown: at, onMouseLeave: ze, onMouseUp: Ye, onDragLeave: $e, onTouchEnd: Oe, onTouchMove: Ve, onTouchStart: We, ref: qe, tabIndex: u ? -1 : $, type: F, ...ve, ...q, children: [l, Ge ? S.jsx(Wa, { ref: re, center: s, ...B }) : null] });
});
function tt(e, t, r, o = false) {
  return Me((n) => (r && r(n), o || e[t](n), true));
}
function Ga(e) {
  return typeof e.main == "string";
}
function Ya(e, t = []) {
  if (!Ga(e)) return false;
  for (const r of t) if (!e.hasOwnProperty(r) || typeof e[r] != "string") return false;
  return true;
}
function Le(e = []) {
  return ([, t]) => t && Ya(t, e);
}
function Xa(e) {
  return ue("MuiAlert", e);
}
const lo = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function qa(e) {
  return ue("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const lt = 44, xr = Lt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Cr = Lt`
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
`, Qa = typeof xr != "string" ? To`
        animation: ${xr} 1.4s linear infinite;
      ` : null, Za = typeof Cr != "string" ? To`
        animation: ${Cr} 1.4s ease-in-out infinite;
      ` : null, Ja = (e) => {
  const { classes: t, variant: r, color: o, disableShrink: n } = e, s = { root: ["root", r, `color${N(o)}`], svg: ["svg"], circle: ["circle", `circle${N(r)}`, n && "circleDisableShrink"] };
  return fe(s, qa, t);
}, ei = H("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[r.variant], t[`color${N(r.color)}`]];
} })(ee(({ theme: e }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: e.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: Qa || { animation: `${xr} 1.4s linear infinite` } }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } }))] }))), ti = H("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (e, t) => t.svg })({ display: "block" }), ri = H("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.circle, t[`circle${N(r.variant)}`], r.disableShrink && t.circleDisableShrink];
} })(ee(({ theme: e }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: e.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: t }) => t.variant === "indeterminate" && !t.disableShrink, style: Za || { animation: `${Cr} 1.4s ease-in-out infinite` } }] }))), oi = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiCircularProgress" }), { className: n, color: s = "primary", disableShrink: l = false, size: i = 40, style: c, thickness: u = 3.6, value: g = 0, variant: p = "indeterminate", ...f } = o, y = { ...o, color: s, disableShrink: l, size: i, thickness: u, value: g, variant: p }, h = Ja(y), d = {}, C = {}, x = {};
  if (p === "determinate") {
    const R = 2 * Math.PI * ((lt - u) / 2);
    d.strokeDasharray = R.toFixed(3), x["aria-valuenow"] = Math.round(g), d.strokeDashoffset = `${((100 - g) / 100 * R).toFixed(3)}px`, C.transform = "rotate(-90deg)";
  }
  return S.jsx(ei, { className: _(h.root, n), style: { width: i, height: i, ...C, ...c }, ownerState: y, ref: r, role: "progressbar", ...x, ...f, children: S.jsx(ti, { className: h.svg, ownerState: y, viewBox: `${lt / 2} ${lt / 2} ${lt} ${lt}`, children: S.jsx(ri, { className: h.circle, style: d, ownerState: y, cx: lt, cy: lt, r: (lt - u) / 2, fill: "none", strokeWidth: u }) }) });
});
function ni(e) {
  return ue("MuiIconButton", e);
}
const co = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), si = (e) => {
  const { classes: t, disabled: r, color: o, edge: n, size: s, loading: l } = e, i = { root: ["root", l && "loading", r && "disabled", o !== "default" && `color${N(o)}`, n && `edge${N(n)}`, `size${N(s)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return fe(i, ni, t);
}, ai = H(jt, { name: "MuiIconButton", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${N(r.color)}`], r.edge && t[`edge${N(r.edge)}`], t[`size${N(r.size)}`]];
} })(ee(({ theme: e }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: e.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (e.vars || e).palette.action.active, transition: e.transitions.create("background-color", { duration: e.transitions.duration.shortest }), variants: [{ props: (t) => !t.disableRipple, style: { "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette.action.active, e.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), ee(({ theme: e }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: e.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: e.typography.pxToRem(28) } }], [`&.${co.disabled}`]: { backgroundColor: "transparent", color: (e.vars || e).palette.action.disabled }, [`&.${co.loading}`]: { color: "transparent" } }))), ii = H("span", { name: "MuiIconButton", slot: "LoadingIndicator", overridesResolver: (e, t) => t.loadingIndicator })(({ theme: e }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (e.vars || e).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), li = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiIconButton" }), { edge: n = false, children: s, className: l, color: i = "default", disabled: c = false, disableFocusRipple: u = false, size: g = "medium", id: p, loading: f = null, loadingIndicator: y, ...h } = o, d = Ms(p), C = y ?? S.jsx(oi, { "aria-labelledby": d, color: "inherit", size: 16 }), x = { ...o, edge: n, color: i, disabled: c, disableFocusRipple: u, loading: f, loadingIndicator: C, size: g }, R = si(x);
  return S.jsxs(ai, { id: f ? d : p, className: _(R.root, l), centerRipple: true, focusRipple: !u, disabled: c || f, ref: r, ...h, ownerState: x, children: [typeof f == "boolean" && S.jsx("span", { className: R.loadingWrapper, style: { display: "contents" }, children: S.jsx(ii, { className: R.loadingIndicator, ownerState: x, children: f && C }) }), s] });
}), ci = st(S.jsx("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), ui = st(S.jsx("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), di = st(S.jsx("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), pi = st(S.jsx("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), fi = st(S.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), gi = (e) => {
  const { variant: t, color: r, severity: o, classes: n } = e, s = { root: ["root", `color${N(r || o)}`, `${t}${N(r || o)}`, `${t}`], icon: ["icon"], message: ["message"], action: ["action"] };
  return fe(s, Xa, n);
}, mi = H(Dr, { name: "MuiAlert", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[r.variant], t[`${r.variant}${N(r.color || r.severity)}`]];
} })(ee(({ theme: e }) => {
  const t = e.palette.mode === "light" ? dt : pt, r = e.palette.mode === "light" ? pt : dt;
  return { ...e.typography.body2, backgroundColor: "transparent", display: "flex", padding: "6px 16px", variants: [...Object.entries(e.palette).filter(Le(["light"])).map(([o]) => ({ props: { colorSeverity: o, variant: "standard" }, style: { color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6), backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9), [`& .${lo.icon}`]: e.vars ? { color: e.vars.palette.Alert[`${o}IconColor`] } : { color: e.palette[o].main } } })), ...Object.entries(e.palette).filter(Le(["light"])).map(([o]) => ({ props: { colorSeverity: o, variant: "outlined" }, style: { color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6), border: `1px solid ${(e.vars || e).palette[o].light}`, [`& .${lo.icon}`]: e.vars ? { color: e.vars.palette.Alert[`${o}IconColor`] } : { color: e.palette[o].main } } })), ...Object.entries(e.palette).filter(Le(["dark"])).map(([o]) => ({ props: { colorSeverity: o, variant: "filled" }, style: { fontWeight: e.typography.fontWeightMedium, ...e.vars ? { color: e.vars.palette.Alert[`${o}FilledColor`], backgroundColor: e.vars.palette.Alert[`${o}FilledBg`] } : { backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main, color: e.palette.getContrastText(e.palette[o].main) } } }))] };
})), hi = H("div", { name: "MuiAlert", slot: "Icon", overridesResolver: (e, t) => t.icon })({ marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: 0.9 }), bi = H("div", { name: "MuiAlert", slot: "Message", overridesResolver: (e, t) => t.message })({ padding: "8px 0", minWidth: 0, overflow: "auto" }), yi = H("div", { name: "MuiAlert", slot: "Action", overridesResolver: (e, t) => t.action })({ display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8 }), uo = { success: S.jsx(ci, { fontSize: "inherit" }), warning: S.jsx(ui, { fontSize: "inherit" }), error: S.jsx(di, { fontSize: "inherit" }), info: S.jsx(pi, { fontSize: "inherit" }) }, yc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiAlert" }), { action: n, children: s, className: l, closeText: i = "Close", color: c, components: u = {}, componentsProps: g = {}, icon: p, iconMapping: f = uo, onClose: y, role: h = "alert", severity: d = "success", slotProps: C = {}, slots: x = {}, variant: R = "standard", ...k } = o, v = { ...o, color: c, severity: d, variant: R, colorSeverity: c || d }, T = gi(v), E = { slots: { closeButton: u.CloseButton, closeIcon: u.CloseIcon, ...x }, slotProps: { ...g, ...C } }, [z, W] = ct("root", { ref: r, shouldForwardComponentProp: true, className: _(T.root, l), elementType: mi, externalForwardedProps: { ...E, ...k }, ownerState: v, additionalProps: { role: h, elevation: 0 } }), [j, a] = ct("icon", { className: T.icon, elementType: hi, externalForwardedProps: E, ownerState: v }), [w, I] = ct("message", { className: T.message, elementType: bi, externalForwardedProps: E, ownerState: v }), [$, B] = ct("action", { className: T.action, elementType: yi, externalForwardedProps: E, ownerState: v }), [L, F] = ct("closeButton", { elementType: li, externalForwardedProps: E, ownerState: v }), [q, U] = ct("closeIcon", { elementType: fi, externalForwardedProps: E, ownerState: v });
  return S.jsxs(z, { ...W, children: [p !== false ? S.jsx(j, { ...a, children: p || f[d] || uo[d] }) : null, S.jsx(w, { ...I, children: s }), n != null ? S.jsx($, { ...B, children: n }) : null, n == null && y ? S.jsx($, { ...B, children: S.jsx(L, { size: "small", "aria-label": i, title: i, color: "inherit", onClick: y, ...F, children: S.jsx(q, { fontSize: "small", ...U }) }) }) : null] });
});
function vi(e) {
  return ue("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Si = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, xi = Ta(), Ci = (e) => {
  const { align: t, gutterBottom: r, noWrap: o, paragraph: n, variant: s, classes: l } = e, i = { root: ["root", s, e.align !== "inherit" && `align${N(t)}`, r && "gutterBottom", o && "noWrap", n && "paragraph"] };
  return fe(i, vi, l);
}, wi = H("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${N(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
} })(ee(({ theme: e }) => {
  var _a2;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({ props: { variant: t }, style: r })), ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), ...Object.entries(((_a2 = e.palette) == null ? void 0 : _a2.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({ props: { color: `text${N(t)}` }, style: { color: (e.vars || e).palette.text[t] } })), { props: ({ ownerState: t }) => t.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: t }) => t.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: t }) => t.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: t }) => t.paragraph, style: { marginBottom: 16 } }] };
})), po = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, fo = m.forwardRef(function(t, r) {
  const { color: o, ...n } = he({ props: t, name: "MuiTypography" }), s = !Si[o], l = xi({ ...n, ...s && { color: o } }), { align: i = "inherit", className: c, component: u, gutterBottom: g = false, noWrap: p = false, paragraph: f = false, variant: y = "body1", variantMapping: h = po, ...d } = l, C = { ...l, align: i, color: o, className: c, component: u, gutterBottom: g, noWrap: p, paragraph: f, variant: y, variantMapping: h }, x = u || (f ? "p" : h[y] || po[y]) || "span", R = Ci(C);
  return S.jsx(wi, { as: x, ref: r, className: _(R.root, c), ...d, ownerState: C, style: { ...i !== "inherit" && { "--Typography-textAlign": i }, ...d.style } });
});
function ki(e) {
  return ue("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Ti = (e) => {
  const { color: t, position: r, classes: o } = e, n = { root: ["root", `color${N(t)}`, `position${N(r)}`] };
  return fe(n, ki, o);
}, go = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, Ri = H(Dr, { name: "MuiAppBar", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`position${N(r.position)}`], t[`color${N(r.color)}`]];
} })(ee(({ theme: e }) => ({ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", flexShrink: 0, variants: [{ props: { position: "fixed" }, style: { position: "fixed", zIndex: (e.vars || e).zIndex.appBar, top: 0, left: "auto", right: 0, "@media print": { position: "absolute" } } }, { props: { position: "absolute" }, style: { position: "absolute", zIndex: (e.vars || e).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "sticky" }, style: { position: "sticky", zIndex: (e.vars || e).zIndex.appBar, top: 0, left: "auto", right: 0 } }, { props: { position: "static" }, style: { position: "static" } }, { props: { position: "relative" }, style: { position: "relative" } }, { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } }, { props: { color: "default" }, style: { "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100], "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[100]), ...e.applyStyles("dark", { "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900], "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[900]) }) } }, ...Object.entries(e.palette).filter(Le(["contrastText"])).map(([t]) => ({ props: { color: t }, style: { "--AppBar-background": (e.vars ?? e).palette[t].main, "--AppBar-color": (e.vars ?? e).palette[t].contrastText } })), { props: (t) => t.enableColorOnDark === true && !["inherit", "transparent"].includes(t.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" } }, { props: (t) => t.enableColorOnDark === false && !["inherit", "transparent"].includes(t.color), style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...e.applyStyles("dark", { backgroundColor: e.vars ? go(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null, color: e.vars ? go(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null }) } }, { props: { color: "transparent" }, style: { "--AppBar-background": "transparent", "--AppBar-color": "inherit", backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)", ...e.applyStyles("dark", { backgroundImage: "none" }) } }] }))), vc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiAppBar" }), { className: n, color: s = "primary", enableColorOnDark: l = false, position: i = "fixed", ...c } = o, u = { ...o, color: s, position: i, enableColorOnDark: l }, g = Ti(u);
  return S.jsx(Ri, { square: true, component: "header", ownerState: u, elevation: 4, className: _(g.root, n, i === "fixed" && "mui-fixed"), ref: r, ...c });
});
function Yt(e) {
  return typeof e == "string";
}
function Qo({ props: e, states: t, muiFormControl: r }) {
  return t.reduce((o, n) => (o[n] = e[n], r && typeof e[n] > "u" && (o[n] = r[n]), o), {});
}
const Pi = m.createContext(void 0);
function Hr() {
  return m.useContext(Pi);
}
const $i = st(S.jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), "Person");
function Ai(e) {
  return ue("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Bi = (e) => {
  const { classes: t, variant: r, colorDefault: o } = e;
  return fe({ root: ["root", r, o && "colorDefault"], img: ["img"], fallback: ["fallback"] }, Ai, t);
}, Ii = H("div", { name: "MuiAvatar", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
} })(ee(({ theme: e }) => ({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: e.typography.fontFamily, fontSize: e.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none", variants: [{ props: { variant: "rounded" }, style: { borderRadius: (e.vars || e).shape.borderRadius } }, { props: { variant: "square" }, style: { borderRadius: 0 } }, { props: { colorDefault: true }, style: { color: (e.vars || e).palette.background.default, ...e.vars ? { backgroundColor: e.vars.palette.Avatar.defaultBg } : { backgroundColor: e.palette.grey[400], ...e.applyStyles("dark", { backgroundColor: e.palette.grey[600] }) } } }] }))), Ei = H("img", { name: "MuiAvatar", slot: "Img", overridesResolver: (e, t) => t.img })({ width: "100%", height: "100%", textAlign: "center", objectFit: "cover", color: "transparent", textIndent: 1e4 }), Mi = H($i, { name: "MuiAvatar", slot: "Fallback", overridesResolver: (e, t) => t.fallback })({ width: "75%", height: "75%" });
function Li({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: o }) {
  const [n, s] = m.useState(false);
  return m.useEffect(() => {
    if (!r && !o) return;
    s(false);
    let l = true;
    const i = new Image();
    return i.onload = () => {
      l && s("loaded");
    }, i.onerror = () => {
      l && s("error");
    }, i.crossOrigin = e, i.referrerPolicy = t, i.src = r, o && (i.srcset = o), () => {
      l = false;
    };
  }, [e, t, r, o]), n;
}
const Sc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiAvatar" }), { alt: n, children: s, className: l, component: i = "div", slots: c = {}, slotProps: u = {}, imgProps: g, sizes: p, src: f, srcSet: y, variant: h = "circular", ...d } = o;
  let C = null;
  const x = { ...o, component: i, variant: h }, R = Li({ ...g, ...typeof u.img == "function" ? u.img(x) : u.img, src: f, srcSet: y }), k = f || y, v = k && R !== "error";
  x.colorDefault = !v, delete x.ownerState;
  const T = Bi(x), [E, z] = ct("img", { className: T.img, elementType: Ei, externalForwardedProps: { slots: c, slotProps: { img: { ...g, ...u.img } } }, additionalProps: { alt: n, src: f, srcSet: y, sizes: p }, ownerState: x });
  return v ? C = S.jsx(E, { ...z }) : s || s === 0 ? C = s : k && n ? C = n[0] : C = S.jsx(Mi, { ownerState: x, className: T.fallback }), S.jsx(Ii, { as: i, className: _(T.root, l), ref: r, ...d, ownerState: x, children: C });
}), zi = ce("MuiBox", ["root"]), Oi = qo(), xc = ms({ themeId: er, defaultTheme: Oi, defaultClassName: zi.root, generateClassName: Eo.generate });
function Ni(e) {
  return ue("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const ji = (e) => {
  const { classes: t, checked: r, disabled: o, edge: n } = e, s = { root: ["root", r && "checked", o && "disabled", n && `edge${N(n)}`], input: ["input"] };
  return fe(s, Ni, t);
}, Fi = H(jt)({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: e, ownerState: t }) => e === "start" && t.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: e, ownerState: t }) => e === "end" && t.size !== "small", style: { marginRight: -12 } }] }), Di = H("input", { shouldForwardProp: Fr })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), Hi = m.forwardRef(function(t, r) {
  const { autoFocus: o, checked: n, checkedIcon: s, className: l, defaultChecked: i, disabled: c, disableFocusRipple: u = false, edge: g = false, icon: p, id: f, inputProps: y, inputRef: h, name: d, onBlur: C, onChange: x, onFocus: R, readOnly: k, required: v = false, tabIndex: T, type: E, value: z, ...W } = t, [j, a] = Fo({ controlled: n, default: !!i, name: "SwitchBase", state: "checked" }), w = Hr(), I = (O) => {
    R && R(O), w && w.onFocus && w.onFocus(O);
  }, $ = (O) => {
    C && C(O), w && w.onBlur && w.onBlur(O);
  }, B = (O) => {
    if (O.nativeEvent.defaultPrevented) return;
    const re = O.target.checked;
    a(re), x && x(O, re);
  };
  let L = c;
  w && typeof L > "u" && (L = w.disabled);
  const F = E === "checkbox" || E === "radio", q = { ...t, checked: j, disabled: L, disableFocusRipple: u, edge: g }, U = ji(q);
  return S.jsxs(Fi, { component: "span", className: _(U.root, l), centerRipple: true, focusRipple: !u, disabled: L, tabIndex: null, role: void 0, onFocus: I, onBlur: $, ownerState: q, ref: r, ...W, children: [S.jsx(Di, { autoFocus: o, checked: n, defaultChecked: i, className: U.input, disabled: L, id: F ? f : void 0, name: d, onChange: B, readOnly: k, ref: h, required: v, ownerState: q, tabIndex: T, type: E, ...E === "checkbox" && z === void 0 ? {} : { value: z }, ...y }), j ? s : p] });
});
function mo(e) {
  return e.substring(2).toLowerCase();
}
function Wi(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Vi(e) {
  const { children: t, disableReactTree: r = false, mouseEvent: o = "onClick", onClickAway: n, touchEvent: s = "onTouchEnd" } = e, l = m.useRef(false), i = m.useRef(null), c = m.useRef(false), u = m.useRef(false);
  m.useEffect(() => (setTimeout(() => {
    c.current = true;
  }, 0), () => {
    c.current = false;
  }), []);
  const g = bt(_o(t), i), p = Me((h) => {
    const d = u.current;
    u.current = false;
    const C = rt(i.current);
    if (!c.current || !i.current || "clientX" in h && Wi(h, C)) return;
    if (l.current) {
      l.current = false;
      return;
    }
    let x;
    h.composedPath ? x = h.composedPath().includes(i.current) : x = !C.documentElement.contains(h.target) || i.current.contains(h.target), !x && (r || !d) && n(h);
  }), f = (h) => (d) => {
    u.current = true;
    const C = t.props[h];
    C && C(d);
  }, y = { ref: g };
  return s !== false && (y[s] = f(s)), m.useEffect(() => {
    if (s !== false) {
      const h = mo(s), d = rt(i.current), C = () => {
        l.current = true;
      };
      return d.addEventListener(h, p), d.addEventListener("touchmove", C), () => {
        d.removeEventListener(h, p), d.removeEventListener("touchmove", C);
      };
    }
  }, [p, s]), o !== false && (y[o] = f(o)), m.useEffect(() => {
    if (o !== false) {
      const h = mo(o), d = rt(i.current);
      return d.addEventListener(h, p), () => {
        d.removeEventListener(h, p);
      };
    }
  }, [p, o]), m.cloneElement(t, y);
}
function _i(e) {
  return ue("MuiFab", e);
}
const ho = ce("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Ui = (e) => {
  const { color: t, variant: r, classes: o, size: n } = e, s = { root: ["root", r, `size${N(n)}`, t === "inherit" ? "colorInherit" : t] }, l = fe(s, _i, o);
  return { ...o, ...l };
}, Ki = H(jt, { name: "MuiFab", slot: "Root", shouldForwardProp: (e) => Fr(e) || e === "classes", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[r.variant], t[`size${N(r.size)}`], r.color === "inherit" && t.colorInherit, t[N(r.size)], t[r.color]];
} })(ee(({ theme: e }) => {
  var _a2, _b;
  return { ...e.typography.button, minHeight: 36, transition: e.transitions.create(["background-color", "box-shadow", "border-color"], { duration: e.transitions.duration.short }), borderRadius: "50%", padding: 0, minWidth: 0, width: 56, height: 56, zIndex: (e.vars || e).zIndex.fab, boxShadow: (e.vars || e).shadows[6], "&:active": { boxShadow: (e.vars || e).shadows[12] }, color: e.vars ? e.vars.palette.text.primary : (_b = (_a2 = e.palette).getContrastText) == null ? void 0 : _b.call(_a2, e.palette.grey[300]), backgroundColor: (e.vars || e).palette.grey[300], "&:hover": { backgroundColor: (e.vars || e).palette.grey.A100, "@media (hover: none)": { backgroundColor: (e.vars || e).palette.grey[300] }, textDecoration: "none" }, [`&.${ho.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] }, variants: [{ props: { size: "small" }, style: { width: 40, height: 40 } }, { props: { size: "medium" }, style: { width: 48, height: 48 } }, { props: { variant: "extended" }, style: { borderRadius: 48 / 2, padding: "0 16px", width: "auto", minHeight: "auto", minWidth: 48, height: 48 } }, { props: { variant: "extended", size: "small" }, style: { width: "auto", padding: "0 8px", borderRadius: 34 / 2, minWidth: 34, height: 34 } }, { props: { variant: "extended", size: "medium" }, style: { width: "auto", padding: "0 16px", borderRadius: 40 / 2, minWidth: 40, height: 40 } }, { props: { color: "inherit" }, style: { color: "inherit" } }] };
}), ee(({ theme: e }) => ({ variants: [...Object.entries(e.palette).filter(Le(["dark", "contrastText"])).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].contrastText, backgroundColor: (e.vars || e).palette[t].main, "&:hover": { backgroundColor: (e.vars || e).palette[t].dark, "@media (hover: none)": { backgroundColor: (e.vars || e).palette[t].main } } } }))] })), ee(({ theme: e }) => ({ [`&.${ho.disabled}`]: { color: (e.vars || e).palette.action.disabled, boxShadow: (e.vars || e).shadows[0], backgroundColor: (e.vars || e).palette.action.disabledBackground } }))), Cc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiFab" }), { children: n, className: s, color: l = "default", component: i = "button", disabled: c = false, disableFocusRipple: u = false, focusVisibleClassName: g, size: p = "large", variant: f = "circular", ...y } = o, h = { ...o, color: l, component: i, disabled: c, disableFocusRipple: u, size: p, variant: f }, d = Ui(h);
  return S.jsx(Ki, { className: _(d.root, s), component: i, disabled: c, focusRipple: !u, focusVisibleClassName: _(d.focusVisible, g), ownerState: h, ref: r, ...y, classes: d, children: n });
});
function Gi(e) {
  return ue("MuiFormControlLabel", e);
}
const It = ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Yi = (e) => {
  const { classes: t, disabled: r, labelPlacement: o, error: n, required: s } = e, l = { root: ["root", r && "disabled", `labelPlacement${N(o)}`, n && "error", s && "required"], label: ["label", r && "disabled"], asterisk: ["asterisk", n && "error"] };
  return fe(l, Gi, t);
}, Xi = H("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [{ [`& .${It.label}`]: t.label }, t.root, t[`labelPlacement${N(r.labelPlacement)}`]];
} })(ee(({ theme: e }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${It.disabled}`]: { cursor: "default" }, [`& .${It.label}`]: { [`&.${It.disabled}`]: { color: (e.vars || e).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: t }) => t === "start" || t === "top" || t === "bottom", style: { marginLeft: 16 } }] }))), qi = H("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (e, t) => t.asterisk })(ee(({ theme: e }) => ({ [`&.${It.error}`]: { color: (e.vars || e).palette.error.main } }))), wc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiFormControlLabel" }), { checked: n, className: s, componentsProps: l = {}, control: i, disabled: c, disableTypography: u, inputRef: g, label: p, labelPlacement: f = "end", name: y, onChange: h, required: d, slots: C = {}, slotProps: x = {}, value: R, ...k } = o, v = Hr(), T = c ?? i.props.disabled ?? (v == null ? void 0 : v.disabled), E = d ?? i.props.required, z = { disabled: T, required: E };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((L) => {
    typeof i.props[L] > "u" && typeof o[L] < "u" && (z[L] = o[L]);
  });
  const W = Qo({ props: o, muiFormControl: v, states: ["error"] }), j = { ...o, disabled: T, labelPlacement: f, required: E, error: W.error }, a = Yi(j), w = { slots: C, slotProps: { ...l, ...x } }, [I, $] = ct("typography", { elementType: fo, externalForwardedProps: w, ownerState: j });
  let B = p;
  return B != null && B.type !== fo && !u && (B = S.jsx(I, { component: "span", ...$, className: _(a.label, $ == null ? void 0 : $.className), children: B })), S.jsxs(Xi, { className: _(a.root, s), ownerState: j, ref: r, ...k, children: [m.cloneElement(i, z), E ? S.jsxs("div", { children: [B, S.jsxs(qi, { ownerState: j, "aria-hidden": true, className: a.asterisk, children: ["\u2009", "*"] })] }) : B] });
});
function Qi(e) {
  return ue("MuiFormGroup", e);
}
ce("MuiFormGroup", ["root", "row", "error"]);
const Zi = (e) => {
  const { classes: t, row: r, error: o } = e;
  return fe({ root: ["root", r && "row", o && "error"] }, Qi, t);
}, Ji = H("div", { name: "MuiFormGroup", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.row && t.row];
} })({ display: "flex", flexDirection: "column", flexWrap: "wrap", variants: [{ props: { row: true }, style: { flexDirection: "row" } }] }), kc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiFormGroup" }), { className: n, row: s = false, ...l } = o, i = Hr(), c = Qo({ props: o, muiFormControl: i, states: ["error"] }), u = { ...o, row: s, error: c.error }, g = Zi(u);
  return S.jsx(Ji, { className: _(g.root, n), ownerState: u, ref: r, ...l });
});
function wr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const el = { entering: { opacity: 1, transform: wr(1) }, entered: { opacity: 1, transform: "none" } }, gr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), kr = m.forwardRef(function(t, r) {
  const { addEndListener: o, appear: n = true, children: s, easing: l, in: i, onEnter: c, onEntered: u, onEntering: g, onExit: p, onExited: f, onExiting: y, style: h, timeout: d = "auto", TransitionComponent: C = cn, ...x } = t, R = Lr(), k = m.useRef(), v = cr(), T = m.useRef(null), E = bt(T, _o(s), r), z = (L) => (F) => {
    if (L) {
      const q = T.current;
      F === void 0 ? L(q) : L(q, F);
    }
  }, W = z(g), j = z((L, F) => {
    Aa(L);
    const { duration: q, delay: U, easing: O } = io({ style: h, timeout: d, easing: l }, { mode: "enter" });
    let re;
    d === "auto" ? (re = v.transitions.getAutoHeightDuration(L.clientHeight), k.current = re) : re = q, L.style.transition = [v.transitions.create("opacity", { duration: re, delay: U }), v.transitions.create("transform", { duration: gr ? re : re * 0.666, delay: U, easing: O })].join(","), c && c(L, F);
  }), a = z(u), w = z(y), I = z((L) => {
    const { duration: F, delay: q, easing: U } = io({ style: h, timeout: d, easing: l }, { mode: "exit" });
    let O;
    d === "auto" ? (O = v.transitions.getAutoHeightDuration(L.clientHeight), k.current = O) : O = F, L.style.transition = [v.transitions.create("opacity", { duration: O, delay: q }), v.transitions.create("transform", { duration: gr ? O : O * 0.666, delay: gr ? q : q || O * 0.333, easing: U })].join(","), L.style.opacity = 0, L.style.transform = wr(0.75), p && p(L);
  }), $ = z(f), B = (L) => {
    d === "auto" && R.start(k.current || 0, L), o && o(T.current, L);
  };
  return S.jsx(C, { appear: n, in: i, nodeRef: T, onEnter: j, onEntered: a, onEntering: W, onExit: I, onExited: $, onExiting: w, addEndListener: B, timeout: d === "auto" ? null : d, ...x, children: (L, { ownerState: F, ...q }) => m.cloneElement(s, { style: { opacity: 0, transform: wr(0.75), visibility: L === "exited" && !i ? "hidden" : void 0, ...el[L], ...h, ...s.props.style }, ref: E, ...q }) });
});
kr && (kr.muiSupportAuto = true);
function tl(e, t, r = (o, n) => o === n) {
  return e.length === t.length && e.every((o, n) => r(o, t[n]));
}
const rl = 2;
function kt(e, t, r, o, n) {
  return r === 1 ? Math.min(e + t, n) : Math.max(e - t, o);
}
function Zo(e, t) {
  return e - t;
}
function bo(e, t) {
  const { index: r } = e.reduce((o, n, s) => {
    const l = Math.abs(t - n);
    return o === null || l < o.distance || l === o.distance ? { distance: l, index: s } : o;
  }, null) ?? {};
  return r;
}
function Wt(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let o = 0; o < r.changedTouches.length; o += 1) {
      const n = r.changedTouches[o];
      if (n.identifier === t.current) return { x: n.clientX, y: n.clientY };
    }
    return false;
  }
  return { x: e.clientX, y: e.clientY };
}
function Jt(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function ol(e, t, r) {
  return (r - t) * e + t;
}
function nl(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), o = r[0].split(".")[1];
    return (o ? o.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function sl(e, t, r) {
  const o = Math.round((e - r) / t) * t + r;
  return Number(o.toFixed(nl(t)));
}
function yo({ values: e, newValue: t, index: r }) {
  const o = e.slice();
  return o[r] = t, o.sort(Zo);
}
function Vt({ sliderRef: e, activeIndex: t, setActive: r }) {
  var _a2, _b, _c;
  const o = rt(e.current);
  (!((_a2 = e.current) == null ? void 0 : _a2.contains(o.activeElement)) || Number((_b = o == null ? void 0 : o.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), r && r(t);
}
function _t(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? tl(e, t) : false;
}
const al = { horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, "horizontal-reverse": { offset: (e) => ({ right: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) } }, il = (e) => e;
let Ut;
function vo() {
  return Ut === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Ut = CSS.supports("touch-action", "none") : Ut = true), Ut;
}
function ll(e) {
  const { "aria-labelledby": t, defaultValue: r, disabled: o = false, disableSwap: n = false, isRtl: s = false, marks: l = false, max: i = 100, min: c = 0, name: u, onChange: g, onChangeCommitted: p, orientation: f = "horizontal", rootRef: y, scale: h = il, step: d = 1, shiftStep: C = 10, tabIndex: x, value: R } = e, k = m.useRef(void 0), [v, T] = m.useState(-1), [E, z] = m.useState(-1), [W, j] = m.useState(false), a = m.useRef(0), w = m.useRef(null), [I, $] = Fo({ controlled: R, default: r ?? c, name: "Slider" }), B = g && ((A, P, G) => {
    const Q = A.nativeEvent || A, X = new Q.constructor(Q.type, Q);
    Object.defineProperty(X, "target", { writable: true, value: { value: P, name: u } }), w.current = P, g(X, P, G);
  }), L = Array.isArray(I);
  let F = L ? I.slice().sort(Zo) : [I];
  F = F.map((A) => A == null ? c : Tt(A, c, i));
  const q = l === true && d !== null ? [...Array(Math.floor((i - c) / d) + 1)].map((A, P) => ({ value: c + d * P })) : l || [], U = q.map((A) => A.value), [O, re] = m.useState(-1), K = m.useRef(null), Se = bt(y, K), Ge = (A) => (P) => {
    var _a2;
    const G = Number(P.currentTarget.getAttribute("data-index"));
    Qt(P.target) && re(G), z(G), (_a2 = A == null ? void 0 : A.onFocus) == null ? void 0 : _a2.call(A, P);
  }, at = (A) => (P) => {
    var _a2;
    Qt(P.target) || re(-1), z(-1), (_a2 = A == null ? void 0 : A.onBlur) == null ? void 0 : _a2.call(A, P);
  }, it = (A, P) => {
    const G = Number(A.currentTarget.getAttribute("data-index")), Q = F[G], X = U.indexOf(Q);
    let Y = P;
    if (q && d == null) {
      const xe = U[U.length - 1];
      Y >= xe ? Y = xe : Y <= U[0] ? Y = U[0] : Y = Y < Q ? U[X - 1] : U[X + 1];
    }
    if (Y = Tt(Y, c, i), L) {
      n && (Y = Tt(Y, F[G - 1] || -1 / 0, F[G + 1] || 1 / 0));
      const xe = Y;
      Y = yo({ values: F, newValue: Y, index: G });
      let Te = G;
      n || (Te = Y.indexOf(xe)), Vt({ sliderRef: K, activeIndex: Te });
    }
    $(Y), re(G), B && !_t(Y, I) && B(A, Y, G), p && p(A, w.current ?? Y);
  }, $e = (A) => (P) => {
    var _a2;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(P.key)) {
      P.preventDefault();
      const G = Number(P.currentTarget.getAttribute("data-index")), Q = F[G];
      let X = null;
      if (d != null) {
        const Y = P.shiftKey ? C : d;
        switch (P.key) {
          case "ArrowUp":
            X = kt(Q, Y, 1, c, i);
            break;
          case "ArrowRight":
            X = kt(Q, Y, s ? -1 : 1, c, i);
            break;
          case "ArrowDown":
            X = kt(Q, Y, -1, c, i);
            break;
          case "ArrowLeft":
            X = kt(Q, Y, s ? 1 : -1, c, i);
            break;
          case "PageUp":
            X = kt(Q, C, 1, c, i);
            break;
          case "PageDown":
            X = kt(Q, C, -1, c, i);
            break;
          case "Home":
            X = c;
            break;
          case "End":
            X = i;
            break;
        }
      } else if (q) {
        const Y = U[U.length - 1], xe = U.indexOf(Q), Te = [s ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], ge = [s ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        Te.includes(P.key) ? xe === 0 ? X = U[0] : X = U[xe - 1] : ge.includes(P.key) && (xe === U.length - 1 ? X = Y : X = U[xe + 1]);
      }
      X != null && it(P, X);
    }
    (_a2 = A == null ? void 0 : A.onKeyDown) == null ? void 0 : _a2.call(A, P);
  };
  Ir(() => {
    var _a2;
    o && K.current.contains(document.activeElement) && ((_a2 = document.activeElement) == null ? void 0 : _a2.blur());
  }, [o]), o && v !== -1 && T(-1), o && O !== -1 && re(-1);
  const Ye = (A) => (P) => {
    var _a2;
    (_a2 = A.onChange) == null ? void 0 : _a2.call(A, P), it(P, P.target.valueAsNumber);
  }, ze = m.useRef(void 0);
  let We = f;
  s && f === "horizontal" && (We += "-reverse");
  const Oe = ({ finger: A, move: P = false }) => {
    const { current: G } = K, { width: Q, height: X, bottom: Y, left: xe } = G.getBoundingClientRect();
    let Te;
    We.startsWith("vertical") ? Te = (Y - A.y) / X : Te = (A.x - xe) / Q, We.includes("-reverse") && (Te = 1 - Te);
    let ge;
    if (ge = ol(Te, c, i), d) ge = sl(ge, d, c);
    else {
      const M = bo(U, ge);
      ge = U[M];
    }
    ge = Tt(ge, c, i);
    let Re = 0;
    if (L) {
      P ? Re = ze.current : Re = bo(F, ge), n && (ge = Tt(ge, F[Re - 1] || -1 / 0, F[Re + 1] || 1 / 0));
      const M = ge;
      ge = yo({ values: F, newValue: ge, index: Re }), n && P || (Re = ge.indexOf(M), ze.current = Re);
    }
    return { newValue: ge, activeIndex: Re };
  }, Ve = Me((A) => {
    const P = Wt(A, k);
    if (!P) return;
    if (a.current += 1, A.type === "mousemove" && A.buttons === 0) {
      Ce(A);
      return;
    }
    const { newValue: G, activeIndex: Q } = Oe({ finger: P, move: true });
    Vt({ sliderRef: K, activeIndex: Q, setActive: T }), $(G), !W && a.current > rl && j(true), B && !_t(G, I) && B(A, G, Q);
  }), Ce = Me((A) => {
    const P = Wt(A, k);
    if (j(false), !P) return;
    const { newValue: G } = Oe({ finger: P, move: true });
    T(-1), A.type === "touchend" && z(-1), p && p(A, w.current ?? G), k.current = void 0, ke();
  }), ye = Me((A) => {
    if (o) return;
    vo() || A.preventDefault();
    const P = A.changedTouches[0];
    P != null && (k.current = P.identifier);
    const G = Wt(A, k);
    if (G !== false) {
      const { newValue: X, activeIndex: Y } = Oe({ finger: G });
      Vt({ sliderRef: K, activeIndex: Y, setActive: T }), $(X), B && !_t(X, I) && B(A, X, Y);
    }
    a.current = 0;
    const Q = rt(K.current);
    Q.addEventListener("touchmove", Ve, { passive: true }), Q.addEventListener("touchend", Ce, { passive: true });
  }), ke = m.useCallback(() => {
    const A = rt(K.current);
    A.removeEventListener("mousemove", Ve), A.removeEventListener("mouseup", Ce), A.removeEventListener("touchmove", Ve), A.removeEventListener("touchend", Ce);
  }, [Ce, Ve]);
  m.useEffect(() => {
    const { current: A } = K;
    return A.addEventListener("touchstart", ye, { passive: vo() }), () => {
      A.removeEventListener("touchstart", ye), ke();
    };
  }, [ke, ye]), m.useEffect(() => {
    o && ke();
  }, [o, ke]);
  const ft = (A) => (P) => {
    var _a2;
    if ((_a2 = A.onMouseDown) == null ? void 0 : _a2.call(A, P), o || P.defaultPrevented || P.button !== 0) return;
    P.preventDefault();
    const G = Wt(P, k);
    if (G !== false) {
      const { newValue: X, activeIndex: Y } = Oe({ finger: G });
      Vt({ sliderRef: K, activeIndex: Y, setActive: T }), $(X), B && !_t(X, I) && B(P, X, Y);
    }
    a.current = 0;
    const Q = rt(K.current);
    Q.addEventListener("mousemove", Ve, { passive: true }), Q.addEventListener("mouseup", Ce);
  }, Xe = Jt(L ? F[0] : c, c, i), te = Jt(F[F.length - 1], c, i) - Xe, ve = (A = {}) => {
    const P = Pt(A), G = { onMouseDown: ft(P || {}) }, Q = { ...P, ...G };
    return { ...A, ref: Se, ...Q };
  }, qe = (A) => (P) => {
    var _a2;
    (_a2 = A.onMouseOver) == null ? void 0 : _a2.call(A, P);
    const G = Number(P.currentTarget.getAttribute("data-index"));
    z(G);
  }, Ae = (A) => (P) => {
    var _a2;
    (_a2 = A.onMouseLeave) == null ? void 0 : _a2.call(A, P), z(-1);
  }, _e = (A = {}) => {
    const P = Pt(A), G = { onMouseOver: qe(P || {}), onMouseLeave: Ae(P || {}) };
    return { ...A, ...P, ...G };
  }, V = (A) => ({ pointerEvents: v !== -1 && v !== A ? "none" : void 0 });
  let Qe;
  return f === "vertical" && (Qe = s ? "vertical-rl" : "vertical-lr"), { active: v, axis: We, axisProps: al, dragging: W, focusedThumbIndex: O, getHiddenInputProps: (A = {}) => {
    const P = Pt(A), G = { onChange: Ye(P || {}), onFocus: Ge(P || {}), onBlur: at(P || {}), onKeyDown: $e(P || {}) }, Q = { ...P, ...G };
    return { tabIndex: x, "aria-labelledby": t, "aria-orientation": f, "aria-valuemax": h(i), "aria-valuemin": h(c), name: u, type: "range", min: e.min, max: e.max, step: e.step === null && e.marks ? "any" : e.step ?? void 0, disabled: o, ...A, ...Q, style: { ...Os, direction: s ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: Qe } };
  }, getRootProps: ve, getThumbProps: _e, marks: q, open: E, range: L, rootRef: Se, trackLeap: te, trackOffset: Xe, values: F, getThumbStyle: V };
}
const cl = (e) => !e || !Yt(e);
function ul(e) {
  return ue("MuiSlider", e);
}
const De = ce("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), dl = (e) => {
  const { open: t } = e;
  return { offset: _(t && De.valueLabelOpen), circle: De.valueLabelCircle, label: De.valueLabelLabel };
};
function pl(e) {
  const { children: t, className: r, value: o } = e, n = dl(e);
  return t ? m.cloneElement(t, { className: _(t.props.className) }, S.jsxs(m.Fragment, { children: [t.props.children, S.jsx("span", { className: _(n.offset, r), "aria-hidden": true, children: S.jsx("span", { className: n.circle, children: S.jsx("span", { className: n.label, children: o }) }) })] })) : null;
}
function So(e) {
  return e;
}
const fl = H("span", { name: "MuiSlider", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`color${N(r.color)}`], r.size !== "medium" && t[`size${N(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === false && t.trackFalse];
} })(ee(({ theme: e }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${De.disabled}`]: { pointerEvents: "none", cursor: "default", color: (e.vars || e).palette.grey[400] }, [`&.${De.dragging}`]: { [`& .${De.thumb}, & .${De.track}`]: { transition: "none" } }, variants: [...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), gl = H("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (e, t) => t.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), ml = H("span", { name: "MuiSlider", slot: "Track", overridesResolver: (e, t) => t.track })(ee(({ theme: e }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: e.transitions.create(["left", "width", "bottom", "height"], { duration: e.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t, track: "inverted" }, style: { ...e.vars ? { backgroundColor: e.vars.palette.Slider[`${t}Track`], borderColor: e.vars.palette.Slider[`${t}Track`] } : { backgroundColor: pt(e.palette[t].main, 0.62), borderColor: pt(e.palette[t].main, 0.62), ...e.applyStyles("dark", { backgroundColor: dt(e.palette[t].main, 0.5) }), ...e.applyStyles("dark", { borderColor: dt(e.palette[t].main, 0.5) }) } } }))] }))), hl = H("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.thumb, t[`thumbColor${N(r.color)}`], r.size !== "medium" && t[`thumbSize${N(r.size)}`]];
} })(ee(({ theme: e }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: e.transitions.create(["box-shadow", "left", "bottom"], { duration: e.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (e.vars || e).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${De.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(e.palette).filter(Le()).map(([t]) => ({ props: { color: t }, style: { [`&:hover, &.${De.focusVisible}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${nt(e.palette[t].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${De.active}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${nt(e.palette[t].main, 0.16)}` } } } }))] }))), bl = H(pl, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel })(ee(({ theme: e }) => ({ zIndex: 1, whiteSpace: "nowrap", ...e.typography.body2, fontWeight: 500, transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }), position: "absolute", backgroundColor: (e.vars || e).palette.grey[600], borderRadius: 2, color: (e.vars || e).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${De.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${De.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), yl = H("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (e) => jr(e) && e !== "markActive", overridesResolver: (e, t) => {
  const { markActive: r } = e;
  return [t.mark, r && t.markActive];
} })(ee(({ theme: e }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 } }] }))), vl = H("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (e) => jr(e) && e !== "markLabelActive", overridesResolver: (e, t) => t.markLabel })(ee(({ theme: e }) => ({ ...e.typography.body2, color: (e.vars || e).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (e.vars || e).palette.text.primary } }] }))), Sl = (e) => {
  const { disabled: t, dragging: r, marked: o, orientation: n, track: s, classes: l, color: i, size: c } = e, u = { root: ["root", t && "disabled", r && "dragging", o && "marked", n === "vertical" && "vertical", s === "inverted" && "trackInverted", s === false && "trackFalse", i && `color${N(i)}`, c && `size${N(c)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", t && "disabled", c && `thumbSize${N(c)}`, i && `thumbColor${N(i)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return fe(u, ul, l);
}, xl = ({ children: e }) => e, Tc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiSlider" }), n = zr(), { "aria-label": s, "aria-valuetext": l, "aria-labelledby": i, component: c = "span", components: u = {}, componentsProps: g = {}, color: p = "primary", classes: f, className: y, disableSwap: h = false, disabled: d = false, getAriaLabel: C, getAriaValueText: x, marks: R = false, max: k = 100, min: v = 0, name: T, onChange: E, onChangeCommitted: z, orientation: W = "horizontal", shiftStep: j = 10, size: a = "medium", step: w = 1, scale: I = So, slotProps: $, slots: B, tabIndex: L, track: F = "normal", value: q, valueLabelDisplay: U = "off", valueLabelFormat: O = So, ...re } = o, K = { ...o, isRtl: n, max: k, min: v, classes: f, disabled: d, disableSwap: h, orientation: W, marks: R, color: p, size: a, step: w, shiftStep: j, scale: I, track: F, valueLabelDisplay: U, valueLabelFormat: O }, { axisProps: Se, getRootProps: Ge, getHiddenInputProps: at, getThumbProps: it, open: $e, active: Ye, axis: ze, focusedThumbIndex: We, range: Oe, dragging: Ve, marks: Ce, values: ye, trackOffset: ke, trackLeap: ft, getThumbStyle: Xe } = ll({ ...K, rootRef: r });
  K.marked = Ce.length > 0 && Ce.some((ae) => ae.label), K.dragging = Ve, K.focusedThumbIndex = We;
  const te = Sl(K), ve = (B == null ? void 0 : B.root) ?? u.Root ?? fl, qe = (B == null ? void 0 : B.rail) ?? u.Rail ?? gl, Ae = (B == null ? void 0 : B.track) ?? u.Track ?? ml, _e = (B == null ? void 0 : B.thumb) ?? u.Thumb ?? hl, V = (B == null ? void 0 : B.valueLabel) ?? u.ValueLabel ?? bl, Qe = (B == null ? void 0 : B.mark) ?? u.Mark ?? yl, yt = (B == null ? void 0 : B.markLabel) ?? u.MarkLabel ?? vl, A = (B == null ? void 0 : B.input) ?? u.Input ?? "input", P = ($ == null ? void 0 : $.root) ?? g.root, G = ($ == null ? void 0 : $.rail) ?? g.rail, Q = ($ == null ? void 0 : $.track) ?? g.track, X = ($ == null ? void 0 : $.thumb) ?? g.thumb, Y = ($ == null ? void 0 : $.valueLabel) ?? g.valueLabel, xe = ($ == null ? void 0 : $.mark) ?? g.mark, Te = ($ == null ? void 0 : $.markLabel) ?? g.markLabel, ge = ($ == null ? void 0 : $.input) ?? g.input, Re = Be({ elementType: ve, getSlotProps: Ge, externalSlotProps: P, externalForwardedProps: re, additionalProps: { ...cl(ve) && { as: c } }, ownerState: { ...K, ...P == null ? void 0 : P.ownerState }, className: [te.root, y] }), M = Be({ elementType: qe, externalSlotProps: G, ownerState: K, className: te.rail }), D = Be({ elementType: Ae, externalSlotProps: Q, additionalProps: { style: { ...Se[ze].offset(ke), ...Se[ze].leap(ft) } }, ownerState: { ...K, ...Q == null ? void 0 : Q.ownerState }, className: te.track }), Z = Be({ elementType: _e, getSlotProps: it, externalSlotProps: X, ownerState: { ...K, ...X == null ? void 0 : X.ownerState }, className: te.thumb }), J = Be({ elementType: V, externalSlotProps: Y, ownerState: { ...K, ...Y == null ? void 0 : Y.ownerState }, className: te.valueLabel }), ie = Be({ elementType: Qe, externalSlotProps: xe, ownerState: K, className: te.mark }), Pe = Be({ elementType: yt, externalSlotProps: Te, ownerState: K, className: te.markLabel }), Ze = Be({ elementType: A, getSlotProps: at, externalSlotProps: ge, ownerState: K });
  return S.jsxs(ve, { ...Re, children: [S.jsx(qe, { ...M }), S.jsx(Ae, { ...D }), Ce.filter((ae) => ae.value >= v && ae.value <= k).map((ae, be) => {
    const gt = Jt(ae.value, v, k), Ft = Se[ze].offset(gt);
    let Je;
    return F === false ? Je = ye.includes(ae.value) : Je = F === "normal" && (Oe ? ae.value >= ye[0] && ae.value <= ye[ye.length - 1] : ae.value <= ye[0]) || F === "inverted" && (Oe ? ae.value <= ye[0] || ae.value >= ye[ye.length - 1] : ae.value >= ye[0]), S.jsxs(m.Fragment, { children: [S.jsx(Qe, { "data-index": be, ...ie, ...!Yt(Qe) && { markActive: Je }, style: { ...Ft, ...ie.style }, className: _(ie.className, Je && te.markActive) }), ae.label != null ? S.jsx(yt, { "aria-hidden": true, "data-index": be, ...Pe, ...!Yt(yt) && { markLabelActive: Je }, style: { ...Ft, ...Pe.style }, className: _(te.markLabel, Pe.className, Je && te.markLabelActive), children: ae.label }) : null] }, be);
  }), ye.map((ae, be) => {
    const gt = Jt(ae, v, k), Ft = Se[ze].offset(gt), Je = U === "off" ? xl : V;
    return S.jsx(Je, { ...!Yt(Je) && { valueLabelFormat: O, valueLabelDisplay: U, value: typeof O == "function" ? O(I(ae), be) : O, index: be, open: $e === be || Ye === be || U === "on", disabled: d }, ...J, children: S.jsx(_e, { "data-index": be, ...Z, className: _(te.thumb, Z.className, Ye === be && te.active, We === be && te.focusVisible), style: { ...Ft, ...Xe(be), ...Z.style }, children: S.jsx(A, { "data-index": be, "aria-label": C ? C(be) : s, "aria-valuenow": I(ae), "aria-labelledby": i, "aria-valuetext": x ? x(I(ae), be) : l, value: ye[be], ...Ze }) }) }, be);
  })] });
});
function Cl(e = {}) {
  const { autoHideDuration: t = null, disableWindowBlurListener: r = false, onClose: o, open: n, resumeHideDuration: s } = e, l = Lr();
  m.useEffect(() => {
    if (!n) return;
    function x(R) {
      R.defaultPrevented || R.key === "Escape" && (o == null ? void 0 : o(R, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [n, o]);
  const i = Me((x, R) => {
    o == null ? void 0 : o(x, R);
  }), c = Me((x) => {
    !o || x == null || l.start(x, () => {
      i(null, "timeout");
    });
  });
  m.useEffect(() => (n && c(t), l.clear), [n, t, c, l]);
  const u = (x) => {
    o == null ? void 0 : o(x, "clickaway");
  }, g = l.clear, p = m.useCallback(() => {
    t != null && c(s ?? t * 0.5);
  }, [t, s, c]), f = (x) => (R) => {
    const k = x.onBlur;
    k == null ? void 0 : k(R), p();
  }, y = (x) => (R) => {
    const k = x.onFocus;
    k == null ? void 0 : k(R), g();
  }, h = (x) => (R) => {
    const k = x.onMouseEnter;
    k == null ? void 0 : k(R), g();
  }, d = (x) => (R) => {
    const k = x.onMouseLeave;
    k == null ? void 0 : k(R), p();
  };
  return m.useEffect(() => {
    if (!r && n) return window.addEventListener("focus", p), window.addEventListener("blur", g), () => {
      window.removeEventListener("focus", p), window.removeEventListener("blur", g);
    };
  }, [r, n, p, g]), { getRootProps: (x = {}) => {
    const R = { ...Pt(e), ...Pt(x) };
    return { role: "presentation", ...x, ...R, onBlur: f(R), onFocus: y(R), onMouseEnter: h(R), onMouseLeave: d(R) };
  }, onClickAway: u };
}
function wl(e) {
  return ue("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const kl = (e) => {
  const { classes: t } = e;
  return fe({ root: ["root"], action: ["action"], message: ["message"] }, wl, t);
}, Tl = H(Dr, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (e, t) => t.root })(ee(({ theme: e }) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98, r = Oo(e.palette.background.default, t);
  return { ...e.typography.body2, color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(r), backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : r, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (e.vars || e).shape.borderRadius, flexGrow: 1, [e.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), Rl = H("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (e, t) => t.message })({ padding: "8px 0" }), Pl = H("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (e, t) => t.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), $l = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiSnackbarContent" }), { action: n, className: s, message: l, role: i = "alert", ...c } = o, u = o, g = kl(u);
  return S.jsxs(Tl, { role: i, square: true, elevation: 6, className: _(g.root, s), ownerState: u, ref: r, ...c, children: [S.jsx(Rl, { className: g.message, ownerState: u, children: l }), n ? S.jsx(Pl, { className: g.action, ownerState: u, children: n }) : null] });
});
function Al(e) {
  return ue("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const Bl = (e) => {
  const { classes: t, anchorOrigin: r } = e, o = { root: ["root", `anchorOrigin${N(r.vertical)}${N(r.horizontal)}`] };
  return fe(o, Al, t);
}, xo = H("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`anchorOrigin${N(r.anchorOrigin.vertical)}${N(r.anchorOrigin.horizontal)}`]];
} })(ee(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top", style: { top: 8, [e.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top", style: { bottom: 8, [e.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [e.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [e.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center", style: { [e.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), Rc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiSnackbar" }), n = cr(), s = { enter: n.transitions.duration.enteringScreen, exit: n.transitions.duration.leavingScreen }, { action: l, anchorOrigin: { vertical: i, horizontal: c } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: u = null, children: g, className: p, ClickAwayListenerProps: f, ContentProps: y, disableWindowBlurListener: h = false, message: d, onBlur: C, onClose: x, onFocus: R, onMouseEnter: k, onMouseLeave: v, open: T, resumeHideDuration: E, TransitionComponent: z = kr, transitionDuration: W = s, TransitionProps: { onEnter: j, onExited: a, ...w } = {}, ...I } = o, $ = { ...o, anchorOrigin: { vertical: i, horizontal: c }, autoHideDuration: u, disableWindowBlurListener: h, TransitionComponent: z, transitionDuration: W }, B = Bl($), { getRootProps: L, onClickAway: F } = Cl({ ...$ }), [q, U] = m.useState(true), O = Be({ elementType: xo, getSlotProps: L, externalForwardedProps: I, ownerState: $, additionalProps: { ref: r }, className: [B.root, p] }), re = (Se) => {
    U(true), a && a(Se);
  }, K = (Se, Ge) => {
    U(false), j && j(Se, Ge);
  };
  return !T && q ? null : S.jsx(Vi, { onClickAway: F, ...f, children: S.jsx(xo, { ...O, children: S.jsx(z, { appear: true, in: T, timeout: W, direction: i === "top" ? "down" : "up", onEnter: K, onExited: re, ...w, children: g || S.jsx($l, { message: d, action: l, ...y }) }) }) });
});
function Il(e) {
  return ue("MuiSwitch", e);
}
const we = ce("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), El = (e) => {
  const { classes: t, edge: r, size: o, color: n, checked: s, disabled: l } = e, i = { root: ["root", r && `edge${N(r)}`, `size${N(o)}`], switchBase: ["switchBase", `color${N(n)}`, s && "checked", l && "disabled"], thumb: ["thumb"], track: ["track"], input: ["input"] }, c = fe(i, Il, t);
  return { ...t, ...c };
}, Ml = H("span", { name: "MuiSwitch", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.edge && t[`edge${N(r.edge)}`], t[`size${N(r.size)}`]];
} })({ display: "inline-flex", width: 34 + 12 * 2, height: 14 + 12 * 2, overflow: "hidden", padding: 12, boxSizing: "border-box", position: "relative", flexShrink: 0, zIndex: 0, verticalAlign: "middle", "@media print": { colorAdjust: "exact" }, variants: [{ props: { edge: "start" }, style: { marginLeft: -8 } }, { props: { edge: "end" }, style: { marginRight: -8 } }, { props: { size: "small" }, style: { width: 40, height: 24, padding: 7, [`& .${we.thumb}`]: { width: 16, height: 16 }, [`& .${we.switchBase}`]: { padding: 4, [`&.${we.checked}`]: { transform: "translateX(16px)" } } } }] }), Ll = H(Hi, { name: "MuiSwitch", slot: "SwitchBase", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.switchBase, { [`& .${we.input}`]: t.input }, r.color !== "default" && t[`color${N(r.color)}`]];
} })(ee(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, zIndex: 1, color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`, transition: e.transitions.create(["left", "transform"], { duration: e.transitions.duration.shortest }), [`&.${we.checked}`]: { transform: "translateX(20px)" }, [`&.${we.disabled}`]: { color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}` }, [`&.${we.checked} + .${we.track}`]: { opacity: 0.5 }, [`&.${we.disabled} + .${we.track}`]: { opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}` }, [`& .${we.input}`]: { left: "-100%", width: "300%" } })), ee(({ theme: e }) => ({ "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette.action.active, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, variants: [...Object.entries(e.palette).filter(Le(["light"])).map(([t]) => ({ props: { color: t }, style: { [`&.${we.checked}`]: { color: (e.vars || e).palette[t].main, "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette[t].main, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${we.disabled}`]: { color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? pt(e.palette[t].main, 0.62) : dt(e.palette[t].main, 0.55)}` } }, [`&.${we.checked} + .${we.track}`]: { backgroundColor: (e.vars || e).palette[t].main } } }))] }))), zl = H("span", { name: "MuiSwitch", slot: "Track", overridesResolver: (e, t) => t.track })(ee(({ theme: e }) => ({ height: "100%", width: "100%", borderRadius: 14 / 2, zIndex: -1, transition: e.transitions.create(["opacity", "background-color"], { duration: e.transitions.duration.shortest }), backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`, opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}` }))), Ol = H("span", { name: "MuiSwitch", slot: "Thumb", overridesResolver: (e, t) => t.thumb })(ee(({ theme: e }) => ({ boxShadow: (e.vars || e).shadows[1], backgroundColor: "currentColor", width: 20, height: 20, borderRadius: "50%" }))), Pc = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiSwitch" }), { className: n, color: s = "primary", edge: l = false, size: i = "medium", sx: c, ...u } = o, g = { ...o, color: s, edge: l, size: i }, p = El(g), f = S.jsx(Ol, { className: p.thumb, ownerState: g });
  return S.jsxs(Ml, { className: _(p.root, n), sx: c, ownerState: g, children: [S.jsx(Ll, { type: "checkbox", icon: f, checkedIcon: f, ref: r, ownerState: g, ...u, classes: { ...p, root: p.switchBase } }), S.jsx(zl, { className: p.track, ownerState: g })] });
});
function Nl(e) {
  return ue("MuiTab", e);
}
const Ne = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), jl = (e) => {
  const { classes: t, textColor: r, fullWidth: o, wrapped: n, icon: s, label: l, selected: i, disabled: c } = e, u = { root: ["root", s && l && "labelIcon", `textColor${N(r)}`, o && "fullWidth", n && "wrapped", i && "selected", c && "disabled"], icon: ["iconWrapper", "icon"] };
  return fe(u, Nl, t);
}, Fl = H(jt, { name: "MuiTab", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.label && r.icon && t.labelIcon, t[`textColor${N(r.textColor)}`], r.fullWidth && t.fullWidth, r.wrapped && t.wrapped, { [`& .${Ne.iconWrapper}`]: t.iconWrapper }, { [`& .${Ne.icon}`]: t.icon }];
} })(ee(({ theme: e }) => ({ ...e.typography.button, maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center", lineHeight: 1.25, variants: [{ props: ({ ownerState: t }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"), style: { flexDirection: "column" } }, { props: ({ ownerState: t }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom", style: { flexDirection: "row" } }, { props: ({ ownerState: t }) => t.icon && t.label, style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 } }, { props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "top", style: { [`& > .${Ne.icon}`]: { marginBottom: 6 } } }, { props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "bottom", style: { [`& > .${Ne.icon}`]: { marginTop: 6 } } }, { props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "start", style: { [`& > .${Ne.icon}`]: { marginRight: e.spacing(1) } } }, { props: ({ ownerState: t, iconPosition: r }) => t.icon && t.label && r === "end", style: { [`& > .${Ne.icon}`]: { marginLeft: e.spacing(1) } } }, { props: { textColor: "inherit" }, style: { color: "inherit", opacity: 0.6, [`&.${Ne.selected}`]: { opacity: 1 }, [`&.${Ne.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity } } }, { props: { textColor: "primary" }, style: { color: (e.vars || e).palette.text.secondary, [`&.${Ne.selected}`]: { color: (e.vars || e).palette.primary.main }, [`&.${Ne.disabled}`]: { color: (e.vars || e).palette.text.disabled } } }, { props: { textColor: "secondary" }, style: { color: (e.vars || e).palette.text.secondary, [`&.${Ne.selected}`]: { color: (e.vars || e).palette.secondary.main }, [`&.${Ne.disabled}`]: { color: (e.vars || e).palette.text.disabled } } }, { props: ({ ownerState: t }) => t.fullWidth, style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" } }, { props: ({ ownerState: t }) => t.wrapped, style: { fontSize: e.typography.pxToRem(12) } }] }))), $c = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiTab" }), { className: n, disabled: s = false, disableFocusRipple: l = false, fullWidth: i, icon: c, iconPosition: u = "top", indicator: g, label: p, onChange: f, onClick: y, onFocus: h, selected: d, selectionFollowsFocus: C, textColor: x = "inherit", value: R, wrapped: k = false, ...v } = o, T = { ...o, disabled: s, disableFocusRipple: l, selected: d, icon: !!c, iconPosition: u, label: !!p, fullWidth: i, textColor: x, wrapped: k }, E = jl(T), z = c && p && m.isValidElement(c) ? m.cloneElement(c, { className: _(E.icon, c.props.className) }) : c, W = (a) => {
    !d && f && f(a, R), y && y(a);
  }, j = (a) => {
    C && !d && f && f(a, R), h && h(a);
  };
  return S.jsxs(Fl, { focusRipple: !l, className: _(E.root, n), ref: r, role: "tab", "aria-selected": d, disabled: s, onClick: W, onFocus: j, ownerState: T, tabIndex: d ? 0 : -1, ...v, children: [u === "top" || u === "start" ? S.jsxs(m.Fragment, { children: [z, p] }) : S.jsxs(m.Fragment, { children: [p, z] }), g] });
});
function Dl(e) {
  return ue("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Hl = (e) => {
  const { classes: t, disableGutters: r, variant: o } = e;
  return fe({ root: ["root", !r && "gutters", o] }, Dl, t);
}, Wl = H("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
} })(ee(({ theme: e }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: t }) => !t.disableGutters, style: { paddingLeft: e.spacing(2), paddingRight: e.spacing(2), [e.breakpoints.up("sm")]: { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: e.mixins.toolbar }] }))), Ac = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiToolbar" }), { className: n, component: s = "div", disableGutters: l = false, variant: i = "regular", ...c } = o, u = { ...o, component: s, disableGutters: l, variant: i }, g = Hl(u);
  return S.jsx(Wl, { as: s, className: _(g.root, n), ref: r, ownerState: u, ...c });
}), Vl = st(S.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), _l = st(S.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
function Ul(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Kl(e, t, r, o = {}, n = () => {
}) {
  const { ease: s = Ul, duration: l = 300 } = o;
  let i = null;
  const c = t[e];
  let u = false;
  const g = () => {
    u = true;
  }, p = (f) => {
    if (u) {
      n(new Error("Animation cancelled"));
      return;
    }
    i === null && (i = f);
    const y = Math.min(1, (f - i) / l);
    if (t[e] = s(y) * (r - c) + c, y >= 1) {
      requestAnimationFrame(() => {
        n(null);
      });
      return;
    }
    requestAnimationFrame(p);
  };
  return c === r ? (n(new Error("Element already at target position")), g) : (requestAnimationFrame(p), g);
}
const Gl = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function Yl(e) {
  const { onChange: t, ...r } = e, o = m.useRef(), n = m.useRef(null), s = () => {
    o.current = n.current.offsetHeight - n.current.clientHeight;
  };
  return Ir(() => {
    const l = No(() => {
      const c = o.current;
      s(), c !== o.current && t(o.current);
    }), i = jo(n.current);
    return i.addEventListener("resize", l), () => {
      l.clear(), i.removeEventListener("resize", l);
    };
  }, [t]), m.useEffect(() => {
    s(), t(o.current);
  }, [t]), S.jsx("div", { style: Gl, ...r, ref: n });
}
function Xl(e) {
  return ue("MuiTabScrollButton", e);
}
const ql = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Ql = (e) => {
  const { classes: t, orientation: r, disabled: o } = e;
  return fe({ root: ["root", r, o && "disabled"] }, Xl, t);
}, Zl = H(jt, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.orientation && t[r.orientation]];
} })({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${ql.disabled}`]: { opacity: 0 }, variants: [{ props: { orientation: "vertical" }, style: { width: "100%", height: 40, "& svg": { transform: "var(--TabScrollButton-svgRotate)" } } }] }), Jl = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiTabScrollButton" }), { className: n, slots: s = {}, slotProps: l = {}, direction: i, orientation: c, disabled: u, ...g } = o, p = zr(), f = { isRtl: p, ...o }, y = Ql(f), h = s.StartScrollButtonIcon ?? Vl, d = s.EndScrollButtonIcon ?? _l, C = Be({ elementType: h, externalSlotProps: l.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: f }), x = Be({ elementType: d, externalSlotProps: l.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: f });
  return S.jsx(Zl, { component: "div", className: _(y.root, n), ref: r, role: null, ownerState: f, tabIndex: null, ...g, style: { ...g.style, ...c === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${p ? -90 : 90}deg)` } }, children: i === "left" ? S.jsx(h, { ...C }) : S.jsx(d, { ...x }) });
});
function ec(e) {
  return ue("MuiTabs", e);
}
const mr = ce("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Co = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, wo = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Kt = (e, t, r) => {
  let o = false, n = r(e, t);
  for (; n; ) {
    if (n === e.firstChild) {
      if (o) return;
      o = true;
    }
    const s = n.disabled || n.getAttribute("aria-disabled") === "true";
    if (!n.hasAttribute("tabindex") || s) n = r(e, n);
    else {
      n.focus();
      return;
    }
  }
}, tc = (e) => {
  const { vertical: t, fixed: r, hideScrollbar: o, scrollableX: n, scrollableY: s, centered: l, scrollButtonsHideMobile: i, classes: c } = e;
  return fe({ root: ["root", t && "vertical"], scroller: ["scroller", r && "fixed", o && "hideScrollbar", n && "scrollableX", s && "scrollableY"], flexContainer: ["flexContainer", t && "flexContainerVertical", l && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", i && "scrollButtonsHideMobile"], scrollableX: [n && "scrollableX"], hideScrollbar: [o && "hideScrollbar"] }, ec, c);
}, rc = H("div", { name: "MuiTabs", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [{ [`& .${mr.scrollButtons}`]: t.scrollButtons }, { [`& .${mr.scrollButtons}`]: r.scrollButtonsHideMobile && t.scrollButtonsHideMobile }, t.root, r.vertical && t.vertical];
} })(ee(({ theme: e }) => ({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex", variants: [{ props: ({ ownerState: t }) => t.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: t }) => t.scrollButtonsHideMobile, style: { [`& .${mr.scrollButtons}`]: { [e.breakpoints.down("sm")]: { display: "none" } } } }] }))), oc = H("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.scroller, r.fixed && t.fixed, r.hideScrollbar && t.hideScrollbar, r.scrollableX && t.scrollableX, r.scrollableY && t.scrollableY];
} })({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap", variants: [{ props: ({ ownerState: e }) => e.fixed, style: { overflowX: "hidden", width: "100%" } }, { props: ({ ownerState: e }) => e.hideScrollbar, style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, { props: ({ ownerState: e }) => e.scrollableX, style: { overflowX: "auto", overflowY: "hidden" } }, { props: ({ ownerState: e }) => e.scrollableY, style: { overflowY: "auto", overflowX: "hidden" } }] }), nc = H("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.flexContainer, r.vertical && t.flexContainerVertical, r.centered && t.centered];
} })({ display: "flex", variants: [{ props: ({ ownerState: e }) => e.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: e }) => e.centered, style: { justifyContent: "center" } }] }), sc = H("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (e, t) => t.indicator })(ee(({ theme: e }) => ({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: e.transitions.create(), variants: [{ props: { indicatorColor: "primary" }, style: { backgroundColor: (e.vars || e).palette.primary.main } }, { props: { indicatorColor: "secondary" }, style: { backgroundColor: (e.vars || e).palette.secondary.main } }, { props: ({ ownerState: t }) => t.vertical, style: { height: "100%", width: 2, right: 0 } }] }))), ac = H(Yl)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), ko = {}, ic = m.forwardRef(function(t, r) {
  const o = he({ props: t, name: "MuiTabs" }), n = cr(), s = zr(), { "aria-label": l, "aria-labelledby": i, action: c, centered: u = false, children: g, className: p, component: f = "div", allowScrollButtonsMobile: y = false, indicatorColor: h = "primary", onChange: d, orientation: C = "horizontal", ScrollButtonComponent: x = Jl, scrollButtons: R = "auto", selectionFollowsFocus: k, slots: v = {}, slotProps: T = {}, TabIndicatorProps: E = {}, TabScrollButtonProps: z = {}, textColor: W = "primary", value: j, variant: a = "standard", visibleScrollbar: w = false, ...I } = o, $ = a === "scrollable", B = C === "vertical", L = B ? "scrollTop" : "scrollLeft", F = B ? "top" : "left", q = B ? "bottom" : "right", U = B ? "clientHeight" : "clientWidth", O = B ? "height" : "width", re = { ...o, component: f, allowScrollButtonsMobile: y, indicatorColor: h, orientation: C, vertical: B, scrollButtons: R, textColor: W, variant: a, visibleScrollbar: w, fixed: !$, hideScrollbar: $ && !w, scrollableX: $ && !B, scrollableY: $ && B, centered: u && !$, scrollButtonsHideMobile: !y }, K = tc(re), Se = Be({ elementType: v.StartScrollButtonIcon, externalSlotProps: T.startScrollButtonIcon, ownerState: re }), Ge = Be({ elementType: v.EndScrollButtonIcon, externalSlotProps: T.endScrollButtonIcon, ownerState: re }), [at, it] = m.useState(false), [$e, Ye] = m.useState(ko), [ze, We] = m.useState(false), [Oe, Ve] = m.useState(false), [Ce, ye] = m.useState(false), [ke, ft] = m.useState({ overflow: "hidden", scrollbarWidth: 0 }), Xe = /* @__PURE__ */ new Map(), te = m.useRef(null), ve = m.useRef(null), qe = () => {
    const M = te.current;
    let D;
    if (M) {
      const J = M.getBoundingClientRect();
      D = { clientWidth: M.clientWidth, scrollLeft: M.scrollLeft, scrollTop: M.scrollTop, scrollWidth: M.scrollWidth, top: J.top, bottom: J.bottom, left: J.left, right: J.right };
    }
    let Z;
    if (M && j !== false) {
      const J = ve.current.children;
      if (J.length > 0) {
        const ie = J[Xe.get(j)];
        Z = ie ? ie.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: D, tabMeta: Z };
  }, Ae = Me(() => {
    const { tabsMeta: M, tabMeta: D } = qe();
    let Z = 0, J;
    B ? (J = "top", D && M && (Z = D.top - M.top + M.scrollTop)) : (J = s ? "right" : "left", D && M && (Z = (s ? -1 : 1) * (D[J] - M[J] + M.scrollLeft)));
    const ie = { [J]: Z, [O]: D ? D[O] : 0 };
    if (typeof $e[J] != "number" || typeof $e[O] != "number") Ye(ie);
    else {
      const Pe = Math.abs($e[J] - ie[J]), Ze = Math.abs($e[O] - ie[O]);
      (Pe >= 1 || Ze >= 1) && Ye(ie);
    }
  }), _e = (M, { animation: D = true } = {}) => {
    D ? Kl(L, te.current, M, { duration: n.transitions.duration.standard }) : te.current[L] = M;
  }, V = (M) => {
    let D = te.current[L];
    B ? D += M : D += M * (s ? -1 : 1), _e(D);
  }, Qe = () => {
    const M = te.current[U];
    let D = 0;
    const Z = Array.from(ve.current.children);
    for (let J = 0; J < Z.length; J += 1) {
      const ie = Z[J];
      if (D + ie[U] > M) {
        J === 0 && (D = M);
        break;
      }
      D += ie[U];
    }
    return D;
  }, yt = () => {
    V(-1 * Qe());
  }, A = () => {
    V(Qe());
  }, P = m.useCallback((M) => {
    ft({ overflow: null, scrollbarWidth: M });
  }, []), G = () => {
    const M = {};
    M.scrollbarSizeListener = $ ? S.jsx(ac, { onChange: P, className: _(K.scrollableX, K.hideScrollbar) }) : null;
    const Z = $ && (R === "auto" && (ze || Oe) || R === true);
    return M.scrollButtonStart = Z ? S.jsx(x, { slots: { StartScrollButtonIcon: v.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: Se }, orientation: C, direction: s ? "right" : "left", onClick: yt, disabled: !ze, ...z, className: _(K.scrollButtons, z.className) }) : null, M.scrollButtonEnd = Z ? S.jsx(x, { slots: { EndScrollButtonIcon: v.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: Ge }, orientation: C, direction: s ? "left" : "right", onClick: A, disabled: !Oe, ...z, className: _(K.scrollButtons, z.className) }) : null, M;
  }, Q = Me((M) => {
    const { tabsMeta: D, tabMeta: Z } = qe();
    if (!(!Z || !D)) {
      if (Z[F] < D[F]) {
        const J = D[L] + (Z[F] - D[F]);
        _e(J, { animation: M });
      } else if (Z[q] > D[q]) {
        const J = D[L] + (Z[q] - D[q]);
        _e(J, { animation: M });
      }
    }
  }), X = Me(() => {
    $ && R !== false && ye(!Ce);
  });
  m.useEffect(() => {
    const M = No(() => {
      te.current && Ae();
    });
    let D;
    const Z = (Pe) => {
      Pe.forEach((Ze) => {
        Ze.removedNodes.forEach((ae) => {
          D == null ? void 0 : D.unobserve(ae);
        }), Ze.addedNodes.forEach((ae) => {
          D == null ? void 0 : D.observe(ae);
        });
      }), M(), X();
    }, J = jo(te.current);
    J.addEventListener("resize", M);
    let ie;
    return typeof ResizeObserver < "u" && (D = new ResizeObserver(M), Array.from(ve.current.children).forEach((Pe) => {
      D.observe(Pe);
    })), typeof MutationObserver < "u" && (ie = new MutationObserver(Z), ie.observe(ve.current, { childList: true })), () => {
      M.clear(), J.removeEventListener("resize", M), ie == null ? void 0 : ie.disconnect(), D == null ? void 0 : D.disconnect();
    };
  }, [Ae, X]), m.useEffect(() => {
    const M = Array.from(ve.current.children), D = M.length;
    if (typeof IntersectionObserver < "u" && D > 0 && $ && R !== false) {
      const Z = M[0], J = M[D - 1], ie = { root: te.current, threshold: 0.99 }, Pe = (gt) => {
        We(!gt[0].isIntersecting);
      }, Ze = new IntersectionObserver(Pe, ie);
      Ze.observe(Z);
      const ae = (gt) => {
        Ve(!gt[0].isIntersecting);
      }, be = new IntersectionObserver(ae, ie);
      return be.observe(J), () => {
        Ze.disconnect(), be.disconnect();
      };
    }
  }, [$, R, Ce, g == null ? void 0 : g.length]), m.useEffect(() => {
    it(true);
  }, []), m.useEffect(() => {
    Ae();
  }), m.useEffect(() => {
    Q(ko !== $e);
  }, [Q, $e]), m.useImperativeHandle(c, () => ({ updateIndicator: Ae, updateScrollButtons: X }), [Ae, X]);
  const Y = S.jsx(sc, { ...E, className: _(K.indicator, E.className), ownerState: re, style: { ...$e, ...E.style } });
  let xe = 0;
  const Te = m.Children.map(g, (M) => {
    if (!m.isValidElement(M)) return null;
    const D = M.props.value === void 0 ? xe : M.props.value;
    Xe.set(D, xe);
    const Z = D === j;
    return xe += 1, m.cloneElement(M, { fullWidth: a === "fullWidth", indicator: Z && !at && Y, selected: Z, selectionFollowsFocus: k, onChange: d, textColor: W, value: D, ...xe === 1 && j === false && !M.props.tabIndex ? { tabIndex: 0 } : {} });
  }), ge = (M) => {
    const D = ve.current, Z = rt(D).activeElement;
    if (Z.getAttribute("role") !== "tab") return;
    let ie = C === "horizontal" ? "ArrowLeft" : "ArrowUp", Pe = C === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (C === "horizontal" && s && (ie = "ArrowRight", Pe = "ArrowLeft"), M.key) {
      case ie:
        M.preventDefault(), Kt(D, Z, wo);
        break;
      case Pe:
        M.preventDefault(), Kt(D, Z, Co);
        break;
      case "Home":
        M.preventDefault(), Kt(D, null, Co);
        break;
      case "End":
        M.preventDefault(), Kt(D, null, wo);
        break;
    }
  }, Re = G();
  return S.jsxs(rc, { className: _(K.root, p), ownerState: re, ref: r, as: f, ...I, children: [Re.scrollButtonStart, Re.scrollbarSizeListener, S.jsxs(oc, { className: K.scroller, ownerState: re, style: { overflow: ke.overflow, [B ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: w ? void 0 : -ke.scrollbarWidth }, ref: te, children: [S.jsx(nc, { "aria-label": l, "aria-labelledby": i, "aria-orientation": C === "vertical" ? "vertical" : null, className: K.flexContainer, ownerState: re, onKeyDown: ge, ref: ve, role: "tablist", children: Te }), at && Y] }), Re.scrollButtonEnd] });
}), Jo = m.createContext(null);
function lc() {
  const [e, t] = m.useState(null);
  return m.useEffect(() => {
    t(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []), e;
}
function Bc(e) {
  const { children: t, value: r } = e, o = lc(), n = m.useMemo(() => ({ idPrefix: o, value: r }), [o, r]);
  return S.jsx(Jo.Provider, { value: n, children: t });
}
function en() {
  return m.useContext(Jo);
}
function tn(e, t) {
  const { idPrefix: r } = e;
  return r === null ? null : `${e.idPrefix}-P-${t}`;
}
function rn(e, t) {
  const { idPrefix: r } = e;
  return r === null ? null : `${e.idPrefix}-T-${t}`;
}
const Ic = m.forwardRef(function(t, r) {
  const { children: o, ...n } = t, s = en();
  if (s === null) throw new TypeError("No TabContext provided");
  const l = m.Children.map(o, (i) => m.isValidElement(i) ? m.cloneElement(i, { "aria-controls": tn(s, i.props.value), id: rn(s, i.props.value) }) : null);
  return S.jsx(ic, { ...n, ref: r, value: s.value, children: l });
});
function cc(e) {
  return ue("MuiTabPanel", e);
}
ce("MuiTabPanel", ["root", "hidden"]);
const uc = (e) => {
  const { classes: t, hidden: r } = e;
  return fe({ root: ["root", r && "hidden"] }, cc, t);
}, dc = H("div", { name: "MuiTabPanel", slot: "Root", overridesResolver: (e, t) => t.root })(({ theme: e }) => ({ padding: e.spacing(3) })), Ec = m.forwardRef(function(t, r) {
  const o = ka({ props: t, name: "MuiTabPanel" }), { children: n, className: s, value: l, keepMounted: i = false, ...c } = o, u = { ...o }, g = uc(u), p = en();
  if (p === null) throw new TypeError("No TabContext provided");
  const f = tn(p, l), y = rn(p, l);
  return S.jsx(dc, { "aria-labelledby": y, className: _(g.root, s), hidden: l !== p.value, id: f, ref: r, role: "tabpanel", ownerState: u, ...c, children: (i || l === p.value) && n });
}), Mc = st(S.jsx("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8" }), "Replay");
export {
  yc as A,
  xc as B,
  Cc as F,
  Dr as P,
  Mc as R,
  Rc as S,
  Ac as T,
  Tc as a,
  kc as b,
  wc as c,
  Pc as d,
  vc as e,
  Sc as f,
  bc as g,
  fo as h,
  Bc as i,
  Ic as j,
  $c as k,
  Ec as l
};
