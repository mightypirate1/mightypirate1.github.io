var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as r, r as l } from "./react-BepuaRmd.js";
import { c as ne } from "./react-dom-DRl0nMg-.js";
import { B as P, S as ie, A as oe, P as ae, a as Y, F as ce, R as le, b as de, c as U, d as $, e as ue, T as he, f as fe, h as K, i as ge, j as we, k as I, l as W } from "./@mui-TnplOvWg.js";
import "./scheduler-BNqrtbQi.js";
import "./clsx-B-dksMZM.js";
import "./@emotion-DWG83qPc.js";
import "./hoist-non-react-statics-C48UpQYE.js";
import "./react-is-CnyDuYXe.js";
import "./@babel-B4YMtfbM.js";
import "./stylis-DDa9OTMq.js";
import "./react-transition-group-hO07pk2U.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const c of i) if (c.type === "childList") for (const g of c.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && n(g);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const c = {};
    return i.integrity && (c.integrity = i.integrity), i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? c.credentials = "include" : i.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const c = t(i);
    fetch(i.href, c);
  }
})();
class u {
  constructor(e, t) {
    __publicField(this, "x");
    __publicField(this, "y");
    this.x = e, this.y = t;
  }
  static new(e, t) {
    return new u(e, t);
  }
  asKey() {
    return `coord[${this.x},${this.y}]`;
  }
  equals(e, t) {
    return e instanceof u ? this.x === e.x && this.y === e.y : typeof e == "number" && typeof t == "number" ? this.x === e && this.y === t : false;
  }
}
class pe {
  constructor(e) {
    __publicField(this, "position");
    this.position = e;
  }
  getPosition() {
    return this.position;
  }
  isAt(e, t) {
    return e instanceof u ? this.position.equals(e) : this.position.equals(e, t);
  }
}
class _e {
  constructor() {
    __publicField(this, "direction");
    __publicField(this, "positions");
    __publicField(this, "lastTickDirection");
    __publicField(this, "growth");
    __publicField(this, "keyPressQueue");
    __publicField(this, "keyPressedThisTick");
    this.positions = [u.new(5, 7), u.new(5, 6), u.new(5, 5)], this.direction = "right", this.lastTickDirection = "right", this.growth = 0, this.keyPressQueue = "", this.keyPressedThisTick = false;
  }
  getHead() {
    return this.positions[0];
  }
  getPositions() {
    return this.positions.slice();
  }
  tick() {
    this.lastTickDirection = this.direction;
    const e = this.getTickedHead();
    if (this.positions.unshift(e), this.growth == 0 ? this.positions.pop() : this.growth -= 1, this.keyPressQueue !== "") {
      this.keyPressedThisTick = false;
      const t = this.keyPressQueue;
      this.keyPressQueue = "", this.setDirection(t);
    }
    this.keyPressedThisTick = false;
  }
  eat() {
    this.growth += 1;
  }
  isDead(e, t) {
    const n = this.getHead();
    return n.x < 0 || n.x >= e || n.y < 0 || n.y >= t ? true : this.positions.slice(1).some((c) => c.equals(n));
  }
  setDirection(e) {
    if (!this.keyPressedThisTick) {
      if (this.oppositeDirection(this.lastTickDirection, e)) return;
      this.direction = e, this.keyPressedThisTick = true;
      return;
    }
    this.keyPressQueue = e;
  }
  oppositeDirection(e, t) {
    return e === "up" && t === "down" || e === "down" && t === "up" || e === "left" && t === "right" || e === "right" && t === "left";
  }
  getTickedHead() {
    const e = this.getHead();
    switch (this.direction) {
      case "up":
        return u.new(e.x - 1, e.y);
      case "down":
        return u.new(e.x + 1, e.y);
      case "left":
        return u.new(e.x, e.y - 1);
      case "right":
        return u.new(e.x, e.y + 1);
      default:
        return e;
    }
  }
}
class N {
  constructor(e) {
    __publicField(this, "gridSize");
    __publicField(this, "snake");
    __publicField(this, "foods");
    this.gridSize = e, this.snake = new _e(), this.foods = [], this.spawnFood();
  }
  getSnakeCoords() {
    return this.snake.getPositions();
  }
  setDirection(e) {
    this.snake.setDirection(e);
  }
  getFoods() {
    return this.foods;
  }
  tick() {
    let e = 0;
    if (this.snake.isDead(this.gridSize, this.gridSize)) return e;
    this.snake.tick();
    const t = this.snake.getHead(), n = this.foods.filter((i) => i.isAt(t));
    return n.forEach((i) => {
      this.snake.eat();
    }), n.length > 0 && (this.spawnFood(), e += n.length), this.foods = this.foods.filter((i) => !i.isAt(t)), e;
  }
  gameOver() {
    return this.snake.isDead(this.gridSize, this.gridSize);
  }
  spawnFood() {
    const e = this.uniqueRandomCoord(), t = new pe(e);
    this.foods.push(t);
  }
  uniqueRandomCoord() {
    let e;
    do {
      const t = Math.floor(Math.random() * this.gridSize), n = Math.floor(Math.random() * this.gridSize);
      e = u.new(t, n);
    } while (this.snake.getPositions().some((t) => t.equals(e)) || this.foods.some((t) => t.isAt(e)));
    return e;
  }
}
function J(s, e, t, n, i = "1px solid black") {
  const [c, g] = s, [x, S] = e.map((p) => `${p}px`);
  return r.jsx("div", { className: "grid", children: Array(c).fill(0).map((p, b) => r.jsx("div", { className: "row", children: Array(g).fill(0).map((A, d) => {
    const j = new u(b, d), T = t.get(j.asKey());
    return r.jsx(P, { className: "cell", sx: { backgroundColor: T ?? n, height: x, width: S, border: i } }, d);
  }) }, b)) });
}
function ye() {
  const s = "#61dafb", e = "#ff6347", t = "#282c34", x = "#870089", [S, p] = l.useState(0), [b, A] = l.useState(300), [d, j] = l.useState(new N(20)), [T, D] = l.useState(/* @__PURE__ */ new Map()), [E, C] = l.useState(false), z = () => J([20, 20], [30, 30], T, t), R = (h) => {
    const f = /* @__PURE__ */ new Map();
    for (const k of h.getSnakeCoords()) f.set(k.asKey(), s);
    for (const k of h.getFoods()) f.set(k.getPosition().asKey(), e);
    return f;
  }, _ = () => {
    const h = new N(20);
    j(h), p(0), C(false), D(R(d));
  }, L = l.useCallback((h) => {
    switch (h.key) {
      case "ArrowUp":
        d.setDirection("up");
        break;
      case "ArrowDown":
        d.setDirection("down");
        break;
      case "ArrowLeft":
        d.setDirection("left");
        break;
      case "ArrowRight":
        d.setDirection("right");
        break;
      case "r":
        _();
        break;
    }
  }, [d]);
  l.useEffect(() => (window.addEventListener("keydown", L), () => {
    window.removeEventListener("keydown", L);
  }), [d]), l.useEffect(() => {
    const h = setInterval(() => {
      const f = d.tick();
      p((k) => k + f), d.gameOver() && C(true), D(R(d));
    }, b);
    return () => {
      clearInterval(h);
    };
  }, [d, b]);
  const F = z();
  return r.jsxs(r.Fragment, { children: [r.jsx(ie, { open: E, autoHideDuration: 6e3, anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: r.jsxs(oe, { onClose: () => C(false), severity: "error", sx: { width: "100%" }, children: ["Game Over! Your score is ", S, "."] }) }), r.jsx(ae, { elevation: 15, children: F }), r.jsx(P, { component: "section", color: "secondary", sx: { p: "10px" }, children: r.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", margin: "0px" }, children: [r.jsx(Y, { "aria-label": "Speed", value: 300 - b, min: 10, max: 300, color: "secondary", onChange: (h) => {
    const f = h.target;
    A(300 - Number(f.value));
  }, marks: [{ value: 10, label: "Slow" }, { value: 300, label: "Fast" }], sx: { marginRight: "20px", marginLeft: "10px", "& .MuiSlider-markLabel": { fontSize: "1.0rem", color: `${x}` } } }), r.jsxs("div", { style: { margin: "0px", color: `${x}` }, children: ["Score: ", S, r.jsxs(ce, { color: "secondary", variant: "extended", sx: { fontSize: "0.65rem", color: `${x}` }, onClick: _, children: [r.jsx(le, { sx: { ml: -1 } }), " Restart"] })] })] }) })] });
}
let o;
const X = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && X.decode();
let M = null;
function me() {
  return (M === null || M.byteLength === 0) && (M = new Uint8Array(o.memory.buffer)), M;
}
function be(s, e) {
  return s = s >>> 0, X.decode(me().subarray(s, s + e));
}
let v = null;
function xe() {
  return (v === null || v.buffer.detached === true || v.buffer.detached === void 0 && v.buffer !== o.memory.buffer) && (v = new DataView(o.memory.buffer)), v;
}
function ke(s, e) {
  s = s >>> 0;
  const t = xe(), n = [];
  for (let i = s; i < s + 4 * e; i += 4) n.push(o.__wbindgen_export_0.get(t.getUint32(i, true)));
  return o.__externref_drop_slice(s, e), n;
}
const Q = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => o.__wbg_coordrs_free(s >>> 0, 1));
class H {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(H.prototype);
    return t.__wbg_ptr = e, Q.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    o.__wbg_coordrs_free(e, 0);
  }
  get x() {
    return o.__wbg_get_coordrs_x(this.__wbg_ptr) >>> 0;
  }
  set x(e) {
    o.__wbg_set_coordrs_x(this.__wbg_ptr, e);
  }
  get y() {
    return o.__wbg_get_coordrs_y(this.__wbg_ptr) >>> 0;
  }
  set y(e) {
    o.__wbg_set_coordrs_y(this.__wbg_ptr, e);
  }
}
const V = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((s) => o.__wbg_terrarium_free(s >>> 0, 1));
class q {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(q.prototype);
    return t.__wbg_ptr = e, V.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, V.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    o.__wbg_terrarium_free(e, 0);
  }
  static new(e, t) {
    const n = o.terrarium_new(e, t);
    return q.__wrap(n);
  }
  toggle(e, t) {
    o.terrarium_toggle(this.__wbg_ptr, e, t);
  }
  set(e, t, n) {
    o.terrarium_set(this.__wbg_ptr, e, t, n);
  }
  get_cells() {
    const e = o.terrarium_get_cells(this.__wbg_ptr);
    var t = ke(e[0], e[1]).slice();
    return o.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  tick(e) {
    o.terrarium_tick(this.__wbg_ptr, e);
  }
}
async function ve(s, e) {
  if (typeof Response == "function" && s instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(s, e);
    } catch (n) {
      if (s.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const t = await s.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(s, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: s } : t;
  }
}
function Se() {
  const s = {};
  return s.wbg = {}, s.wbg.__wbg_coordrs_new = function(e) {
    return H.__wrap(e);
  }, s.wbg.__wbindgen_init_externref_table = function() {
    const e = o.__wbindgen_export_0, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }, s.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(be(e, t));
  }, s;
}
function je(s, e) {
  return o = s.exports, Z.__wbindgen_wasm_module = e, v = null, M = null, o.__wbindgen_start(), o;
}
async function Z(s) {
  if (o !== void 0) return o;
  typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module_or_path: s } = s : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof s > "u" && (s = new URL("/assets/wasm-frontman_bg-Bo8dvM5D.wasm", import.meta.url));
  const e = Se();
  (typeof s == "string" || typeof Request == "function" && s instanceof Request || typeof URL == "function" && s instanceof URL) && (s = fetch(s));
  const { instance: t, module: n } = await ve(await s, e);
  return je(t, n);
}
function Ce() {
  const c = Math.round(33.333333333333336), g = Math.round(1e3 / 30), x = "#ff6347", S = "#282c34", p = l.useRef(null), b = (a) => u.new(a.x, a.y), A = (a) => J([30, 30], [c, g], a, S, "1px solid black"), d = (a) => {
    const w = /* @__PURE__ */ new Map();
    a.get_cells().map((m) => b(m)).forEach((m) => {
      w.set(m.asKey(), x);
    }), te(w);
  }, j = (a) => {
    a.tick(f), d(a);
  }, T = (a) => {
    k((w) => !w);
  }, D = (a) => {
    L((w) => !w);
  }, E = (a) => {
    const w = (m, O) => O < 0 || m < 0 || O >= 30 || m >= 30;
    if (p.current && y !== null) {
      const m = p.current.getBoundingClientRect(), O = a.clientX - m.left, re = a.clientY - m.top, B = Math.floor(O / (g + 1 * 1)), G = Math.floor(re / (c + 2 * 1));
      w(G, B) || y.toggle(G, B), d(y);
    }
  }, C = (a) => {
    a.key === " " && y !== null && j(y);
  }, [z, R] = l.useState(false), [_, L] = l.useState(false), [F, h] = l.useState(20), [f, k] = l.useState(false), [ee, te] = l.useState(/* @__PURE__ */ new Map()), [y, se] = l.useState(null);
  return l.useEffect(() => _ ? () => {
  } : (window.addEventListener("keydown", C), () => {
    window.removeEventListener("keydown", C);
  }), [y, _, f]), l.useEffect(() => {
    if (!_) return;
    const a = setInterval(() => {
      y !== null && j(y);
    }, 1e3 - 9 * F);
    return () => clearInterval(a);
  }, [y, _, F, f]), Z().then(() => {
    if (z) return;
    const a = q.new(30, 30);
    se(a), R(true);
  }), z ? r.jsxs("div", { style: { display: "flex" }, children: [r.jsxs(de, { children: [r.jsx(U, { control: r.jsx($, { checked: f, onChange: T }), label: "Border lives" }), r.jsx(U, { control: r.jsx($, { checked: _, onChange: D }), label: "Auto tick" }), r.jsxs(P, { marginRight: "15px", children: ["Tick speed", r.jsx(Y, { ..._ ? { disabled: false } : { disabled: true }, "aria-label": "auto tick speed", value: F, min: 1, max: 100, onChange: (a, w) => h(Number(w)) })] })] }), r.jsx("div", { ref: p, onClick: E, style: { width: 1e3, height: 1e3 }, children: A(ee) })] }) : r.jsx("div", { children: "Loading..." });
}
function Pe() {
  const e = "https://avatars.githubusercontent.com/u/19390975?s=400&u=1358e735334214fa0a842a63d949fe5363e88494&v=4", [t, n] = l.useState("start"), i = (c, g) => {
    n(g);
  };
  return r.jsxs(P, { sx: { display: "flex" }, children: [r.jsx(ue, { position: "fixed", color: "primary", sx: { height: "65px" }, children: r.jsxs(he, { sx: { display: "flex", justifyContent: "flex-end" }, children: [r.jsx(fe, { src: e, alt: "Martin Frisk", sx: { border: "2px solid#222222", marginRight: "20px" } }), r.jsx(K, { variant: "h5", noWrap: true, component: "div", children: "mightypirate1" })] }) }), r.jsx(P, { component: "nav", sx: { width: "100hh", marginTop: "65px" }, children: r.jsxs(ge, { value: t, children: [r.jsx(P, { sx: { borderBottom: 1, borderColor: "divider" }, children: r.jsxs(we, { onChange: i, "aria-label": "lab API tabs example", children: [r.jsx(I, { label: "Disclaimer", value: "start" }), r.jsx(I, { label: "Snake", value: "snake" }), r.jsx(I, { label: "Life", value: "life" })] }) }), r.jsxs(W, { value: "start", children: [r.jsx(K, { children: "I am not a frontender, as you well can tell!" }), "Either way, there are some toys on the tabs above."] }), r.jsx(W, { value: "snake", children: r.jsx(ye, {}) }), r.jsx(W, { value: "life", children: r.jsx(Ce, {}) })] }) })] });
}
function Te() {
  return r.jsx(Pe, {});
}
ne.createRoot(document.getElementById("root")).render(r.jsx(l.StrictMode, { children: r.jsx(Te, {}) }));
