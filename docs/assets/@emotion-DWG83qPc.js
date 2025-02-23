import "./hoist-non-react-statics-C48UpQYE.js";
import { R as q, r as g } from "./react-BepuaRmd.js";
import { _ as he } from "./@babel-B4YMtfbM.js";
import { s as O, c as me, m as pe, a as ge, r as ye, R as ve, b as be, K as xe, d as P, e as c, W as o, D as we, f as Se, g as ke, h as Ce, i as w, M as p, j as G, k as V, l as $, n as Pe, o as ee, t as te, p as Ae, q as M, u as Ee, v as Te, w as re } from "./stylis-DDa9OTMq.js";
function Re(t2) {
  if (t2.sheet) return t2.sheet;
  for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === t2) return document.styleSheets[e];
}
function _e(t2) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t2.key), t2.nonce !== void 0 && e.setAttribute("nonce", t2.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var Oe = function() {
  function t2(r) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var e = t2.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_e(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Re(a);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, t2;
}();
function ne(t2) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t2(r)), e[r];
  };
}
var $e = function(e, r, n) {
  for (var a = 0, i = 0; a = i, i = M(), a === 38 && i === 12 && (r[n] = 1), !te(i); ) ee();
  return Te(e, re);
}, Ie = function(e, r) {
  var n = -1, a = 44;
  do
    switch (te(a)) {
      case 0:
        a === 38 && M() === 12 && (r[n] = 1), e[n] += $e(re - 1, r, n);
        break;
      case 2:
        e[n] += Ee(a);
        break;
      case 4:
        if (a === 44) {
          e[++n] = M() === 58 ? "&\f" : "", r[n] = e[n].length;
          break;
        }
      default:
        e[n] += Ae(a);
    }
  while (a = ee());
  return e;
}, Ne = function(e, r) {
  return Se(Ie(ke(e), r));
}, X = /* @__PURE__ */ new WeakMap(), Me = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var r = e.value, n = e.parent, a = e.column === n.column && e.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !X.get(n)) && !a) {
      X.set(e, true);
      for (var i = [], s = Ne(r, i), l = n.props, f = 0, u = 0; f < s.length; f++) for (var m = 0; m < l.length; m++, u++) e.props[u] = i[f] ? s[f].replace(/&\f/g, l[m]) : l[m] + " " + s[f];
    }
  }
}, Fe = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function ae(t2, e) {
  switch (Ce(t2, e)) {
    case 5103:
      return o + "print-" + t2 + t2;
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
      return o + t2 + t2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return o + t2 + $ + t2 + p + t2 + t2;
    case 6828:
    case 4268:
      return o + t2 + p + t2 + t2;
    case 6165:
      return o + t2 + p + "flex-" + t2 + t2;
    case 5187:
      return o + t2 + c(t2, /(\w+).+(:[^]+)/, o + "box-$1$2" + p + "flex-$1$2") + t2;
    case 5443:
      return o + t2 + p + "flex-item-" + c(t2, /flex-|-self/, "") + t2;
    case 4675:
      return o + t2 + p + "flex-line-pack" + c(t2, /align-content|flex-|-self/, "") + t2;
    case 5548:
      return o + t2 + p + c(t2, "shrink", "negative") + t2;
    case 5292:
      return o + t2 + p + c(t2, "basis", "preferred-size") + t2;
    case 6060:
      return o + "box-" + c(t2, "-grow", "") + o + t2 + p + c(t2, "grow", "positive") + t2;
    case 4554:
      return o + c(t2, /([^-])(transform)/g, "$1" + o + "$2") + t2;
    case 6187:
      return c(c(c(t2, /(zoom-|grab)/, o + "$1"), /(image-set)/, o + "$1"), t2, "") + t2;
    case 5495:
    case 3959:
      return c(t2, /(image-set\([^]*)/, o + "$1$`$1");
    case 4968:
      return c(c(t2, /(.+:)(flex-)?(.*)/, o + "box-pack:$3" + p + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + o + t2 + t2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return c(t2, /(.+)-inline(.+)/, o + "$1$2") + t2;
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
      if (G(t2) - 1 - e > 6) switch (w(t2, e + 1)) {
        case 109:
          if (w(t2, e + 4) !== 45) break;
        case 102:
          return c(t2, /(.+:)(.+)-([^]+)/, "$1" + o + "$2-$3$1" + $ + (w(t2, e + 3) == 108 ? "$3" : "$2-$3")) + t2;
        case 115:
          return ~V(t2, "stretch") ? ae(c(t2, "stretch", "fill-available"), e) + t2 : t2;
      }
      break;
    case 4949:
      if (w(t2, e + 1) !== 115) break;
    case 6444:
      switch (w(t2, G(t2) - 3 - (~V(t2, "!important") && 10))) {
        case 107:
          return c(t2, ":", ":" + o) + t2;
        case 101:
          return c(t2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + o + (w(t2, 14) === 45 ? "inline-" : "") + "box$3$1" + o + "$2$3$1" + p + "$2box$3") + t2;
      }
      break;
    case 5936:
      switch (w(t2, e + 11)) {
        case 114:
          return o + t2 + p + c(t2, /[svh]\w+-[tblr]{2}/, "tb") + t2;
        case 108:
          return o + t2 + p + c(t2, /[svh]\w+-[tblr]{2}/, "tb-rl") + t2;
        case 45:
          return o + t2 + p + c(t2, /[svh]\w+-[tblr]{2}/, "lr") + t2;
      }
      return o + t2 + p + t2 + t2;
  }
  return t2;
}
var Le = function(e, r, n, a) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case we:
      e.return = ae(e.value, e.length);
      break;
    case xe:
      return O([P(e, { value: c(e.value, "@", "@" + o) })], a);
    case ve:
      if (e.length) return be(e.props, function(i) {
        switch (Pe(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return O([P(e, { props: [c(i, /:(read-\w+)/, ":" + $ + "$1")] })], a);
          case "::placeholder":
            return O([P(e, { props: [c(i, /:(plac\w+)/, ":" + o + "input-$1")] }), P(e, { props: [c(i, /:(plac\w+)/, ":" + $ + "$1")] }), P(e, { props: [c(i, /:(plac\w+)/, p + "input-$1")] })], a);
        }
        return "";
      });
  }
}, ze = [Le], We = function(e) {
  var r = e.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var d = h.getAttribute("data-emotion");
      d.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var a = e.stylisPlugins || ze, i = {}, s, l = [];
  s = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(h) {
    for (var d = h.getAttribute("data-emotion").split(" "), v = 1; v < d.length; v++) i[d[v]] = true;
    l.push(h);
  });
  var f, u = [Me, Fe];
  {
    var m, y = [ge, ye(function(h) {
      m.insert(h);
    })], E = pe(u.concat(a, y)), I = function(d) {
      return O(me(d), E);
    };
    f = function(d, v, S, k) {
      m = S, I(d ? d + "{" + v.styles + "}" : v.styles), k && (x.inserted[v.name] = true);
    };
  }
  var x = { key: r, sheet: new Oe({ key: r, container: s, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: i, registered: {}, insert: f };
  return x.sheet.hydrate(l), x;
}, De = true;
function ie(t2, e, r) {
  var n = "";
  return r.split(" ").forEach(function(a) {
    t2[a] !== void 0 ? e.push(t2[a] + ";") : a && (n += a + " ");
  }), n;
}
var L = function(e, r, n) {
  var a = e.key + "-" + r.name;
  (n === false || De === false) && e.registered[a] === void 0 && (e.registered[a] = r.styles);
}, se = function(e, r, n) {
  L(e, r, n);
  var a = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var i = r;
    do
      e.insert(r === i ? "." + a : "", i, e.sheet, true), i = i.next;
    while (i !== void 0);
  }
};
function He(t2) {
  for (var e = 0, r, n = 0, a = t2.length; a >= 4; ++n, a -= 4) r = t2.charCodeAt(n) & 255 | (t2.charCodeAt(++n) & 255) << 8 | (t2.charCodeAt(++n) & 255) << 16 | (t2.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, e = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      e ^= (t2.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (t2.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= t2.charCodeAt(n) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Ue = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, qe = /[A-Z]|^ms/g, Ge = /_EMO_([^_]+?)_([^]*?)_EMO_/g, oe = function(e) {
  return e.charCodeAt(1) === 45;
}, B = function(e) {
  return e != null && typeof e != "boolean";
}, N = ne(function(t2) {
  return oe(t2) ? t2 : t2.replace(qe, "-$&").toLowerCase();
}), j = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string") return r.replace(Ge, function(n, a, i) {
        return b = { name: a, styles: i, next: b }, a;
      });
  }
  return Ue[e] !== 1 && !oe(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function A(t2, e, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return b = { name: a.name, styles: a.styles, next: b }, a.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0) for (; s !== void 0; ) b = { name: s.name, styles: s.styles, next: b }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Ve(t2, e, r);
    }
    case "function": {
      if (t2 !== void 0) {
        var f = b, u = r(t2);
        return b = f, A(t2, e, u);
      }
      break;
    }
  }
  var m = r;
  if (e == null) return m;
  var y = e[m];
  return y !== void 0 ? y : m;
}
function Ve(t2, e, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += A(t2, e, r[a]) + ";";
  else for (var i in r) {
    var s = r[i];
    if (typeof s != "object") {
      var l = s;
      e != null && e[l] !== void 0 ? n += i + "{" + e[l] + "}" : B(l) && (n += N(i) + ":" + j(i, l) + ";");
    } else if (Array.isArray(s) && typeof s[0] == "string" && (e == null || e[s[0]] === void 0)) for (var f = 0; f < s.length; f++) B(s[f]) && (n += N(i) + ":" + j(i, s[f]) + ";");
    else {
      var u = A(t2, e, s);
      switch (i) {
        case "animation":
        case "animationName": {
          n += N(i) + ":" + u + ";";
          break;
        }
        default:
          n += i + "{" + u + "}";
      }
    }
  }
  return n;
}
var Y = /label:\s*([^\s;{]+)\s*(;|$)/g, b;
function z(t2, e, r) {
  if (t2.length === 1 && typeof t2[0] == "object" && t2[0] !== null && t2[0].styles !== void 0) return t2[0];
  var n = true, a = "";
  b = void 0;
  var i = t2[0];
  if (i == null || i.raw === void 0) n = false, a += A(r, e, i);
  else {
    var s = i;
    a += s[0];
  }
  for (var l = 1; l < t2.length; l++) if (a += A(r, e, t2[l]), n) {
    var f = i;
    a += f[l];
  }
  Y.lastIndex = 0;
  for (var u = "", m; (m = Y.exec(a)) !== null; ) u += "-" + m[1];
  var y = He(a) + u;
  return { name: y, styles: a, next: b };
}
var Xe = function(e) {
  return e();
}, Be = q.useInsertionEffect ? q.useInsertionEffect : false, ce = Be || Xe, le = g.createContext(typeof HTMLElement < "u" ? We({ key: "css" }) : null);
le.Provider;
var fe = function(e) {
  return g.forwardRef(function(r, n) {
    var a = g.useContext(le);
    return e(r, a, n);
  });
}, de = g.createContext({}), W = {}.hasOwnProperty, F = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", je = function(e, r) {
  var n = {};
  for (var a in r) W.call(r, a) && (n[a] = r[a]);
  return n[F] = e, n;
}, Ye = function(e) {
  var r = e.cache, n = e.serialized, a = e.isStringTag;
  return L(r, n, a), ce(function() {
    return se(r, n, a);
  }), null;
}, Ke = fe(function(t2, e, r) {
  var n = t2.css;
  typeof n == "string" && e.registered[n] !== void 0 && (n = e.registered[n]);
  var a = t2[F], i = [n], s = "";
  typeof t2.className == "string" ? s = ie(e.registered, i, t2.className) : t2.className != null && (s = t2.className + " ");
  var l = z(i, void 0, g.useContext(de));
  s += e.key + "-" + l.name;
  var f = {};
  for (var u in t2) W.call(t2, u) && u !== "css" && u !== F && (f[u] = t2[u]);
  return f.className = s, r && (f.ref = r), g.createElement(g.Fragment, null, g.createElement(Ye, { cache: e, serialized: l, isStringTag: typeof a == "string" }), g.createElement(a, f));
}), Je = Ke, K = function(e, r) {
  var n = arguments;
  if (r == null || !W.call(r, "css")) return g.createElement.apply(void 0, n);
  var a = n.length, i = new Array(a);
  i[0] = Je, i[1] = je(e, r);
  for (var s = 2; s < a; s++) i[s] = n[s];
  return g.createElement.apply(null, i);
};
(function(t2) {
  var e;
  e || (e = t2.JSX || (t2.JSX = {}));
})(K || (K = {}));
function Ze() {
  for (var t2 = arguments.length, e = new Array(t2), r = 0; r < t2; r++) e[r] = arguments[r];
  return z(e);
}
function ft() {
  var t2 = Ze.apply(void 0, arguments), e = "animation-" + t2.name;
  return { name: e, styles: "@keyframes " + e + "{" + t2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Qe = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, et = ne(function(t2) {
  return Qe.test(t2) || t2.charCodeAt(0) === 111 && t2.charCodeAt(1) === 110 && t2.charCodeAt(2) < 91;
}), tt = et, rt = function(e) {
  return e !== "theme";
}, J = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? tt : rt;
}, Z = function(e, r, n) {
  var a;
  if (r) {
    var i = r.shouldForwardProp;
    a = e.__emotion_forwardProp && i ? function(s) {
      return e.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && n && (a = e.__emotion_forwardProp), a;
}, nt = function(e) {
  var r = e.cache, n = e.serialized, a = e.isStringTag;
  return L(r, n, a), ce(function() {
    return se(r, n, a);
  }), null;
}, at = function t(e, r) {
  var n = e.__emotion_real === e, a = n && e.__emotion_base || e, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var l = Z(e, r, n), f = l || J(a), u = !f("as");
  return function() {
    var m = arguments, y = n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (i !== void 0 && y.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0) y.push.apply(y, m);
    else {
      var E = m[0];
      y.push(E[0]);
      for (var I = m.length, x = 1; x < I; x++) y.push(m[x], E[x]);
    }
    var h = fe(function(d, v, S) {
      var k = u && d.as || a, C = "", D = [], T = d;
      if (d.theme == null) {
        T = {};
        for (var H in d) T[H] = d[H];
        T.theme = g.useContext(de);
      }
      typeof d.className == "string" ? C = ie(v.registered, D, d.className) : d.className != null && (C = d.className + " ");
      var U = z(y.concat(D), v.registered, T);
      C += v.key + "-" + U.name, s !== void 0 && (C += " " + s);
      var ue = u && l === void 0 ? J(k) : f, R = {};
      for (var _ in d) u && _ === "as" || ue(_) && (R[_] = d[_]);
      return R.className = C, S && (R.ref = S), g.createElement(g.Fragment, null, g.createElement(nt, { cache: v, serialized: U, isStringTag: typeof k == "string" }), g.createElement(k, R));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", h.defaultProps = e.defaultProps, h.__emotion_real = h, h.__emotion_base = a, h.__emotion_styles = y, h.__emotion_forwardProp = l, Object.defineProperty(h, "toString", { value: function() {
      return "." + s;
    } }), h.withComponent = function(d, v) {
      var S = t(d, he({}, r, v, { shouldForwardProp: Z(h, v, true) }));
      return S.apply(void 0, y);
    }, h;
  };
}, it = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], Q = at.bind(null);
it.forEach(function(t2) {
  Q[t2] = Q(t2);
});
export {
  de as T,
  Ze as c,
  ft as k,
  Q as n,
  z as s
};
