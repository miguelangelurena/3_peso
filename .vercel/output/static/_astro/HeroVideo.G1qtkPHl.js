import { j as b } from "./jsx-runtime.D9-ZS7W_.js";
import { r as y } from "./index.CYEHnncN.js";
import { u as Ji } from "./useAppStore.7wmxbUAo.js";
const Qi = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ws = (...t) =>
    t
      .filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n)
      .join(" ")
      .trim();
var to = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const eo = y.forwardRef(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: s,
      className: i = "",
      children: r,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    y.createElement(
      "svg",
      {
        ref: l,
        ...to,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: s ? (Number(n) * 24) / Number(e) : n,
        className: ws("lucide", i),
        ...a,
      },
      [
        ...o.map(([u, c]) => y.createElement(u, c)),
        ...(Array.isArray(r) ? r : [r]),
      ],
    ),
);
const no = (t, e) => {
  const n = y.forwardRef(({ className: s, ...i }, r) =>
    y.createElement(eo, {
      ref: r,
      iconNode: e,
      className: ws(`lucide-${Qi(t)}`, s),
      ...i,
    }),
  );
  return (n.displayName = `${t}`), n;
};
const so = no("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }],
]);
function io(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map(),
    n = (...s) => t(...s);
  return new Proxy(n, {
    get: (s, i) =>
      i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
  });
}
function Gt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const me = (t) => Array.isArray(t);
function As(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function bt(t) {
  return typeof t == "string" || Array.isArray(t);
}
function dn(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      (e[0][s] = n.get()), (e[1][s] = n.getVelocity());
    }),
    e
  );
}
function Re(t, e, n, s) {
  if (typeof e == "function") {
    const [i, r] = dn(s);
    e = e(n !== void 0 ? n : t.custom, i, r);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [i, r] = dn(s);
    e = e(n !== void 0 ? n : t.custom, i, r);
  }
  return e;
}
function Xt(t, e, n) {
  const s = t.getProps();
  return Re(s, e, n !== void 0 ? n : s.custom, t);
}
const Ee = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Le = ["initial", ...Ee],
  Dt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  at = new Set(Dt),
  G = (t) => t * 1e3,
  X = (t) => t / 1e3,
  oo = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ro = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ao = { type: "keyframes", duration: 0.8 },
  lo = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  uo = (t, { keyframes: e }) =>
    e.length > 2
      ? ao
      : at.has(t)
        ? t.startsWith("scale")
          ? ro(e[1])
          : oo
        : lo;
function je(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const co = { useManualTiming: !1 },
  ho = (t) => t !== null;
function Yt(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(ho),
    r = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !r || s === void 0 ? i[r] : s;
}
const k = (t) => t;
let bs = k;
function fo(t) {
  let e = new Set(),
    n = new Set(),
    s = !1,
    i = !1;
  const r = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    r.has(u) && (l.schedule(u), t()), u(o);
  }
  const l = {
    schedule: (u, c = !1, h = !1) => {
      const f = h && s ? e : n;
      return c && r.add(u), f.has(u) || f.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), r.delete(u);
    },
    process: (u) => {
      if (((o = u), s)) {
        i = !0;
        return;
      }
      (s = !0),
        ([e, n] = [n, e]),
        n.clear(),
        e.forEach(a),
        (s = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const jt = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  mo = 40;
function Vs(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    r = () => (n = !0),
    o = jt.reduce((p, v) => ((p[v] = fo(r)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: h,
      postRender: d,
    } = o,
    f = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, mo), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        h.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(f));
    },
    m = () => {
      (n = !0), (s = !0), i.isProcessing || t(f);
    };
  return {
    schedule: jt.reduce((p, v) => {
      const x = o[v];
      return (p[v] = (A, S = !1, V = !1) => (n || m(), x.schedule(A, S, V))), p;
    }, {}),
    cancel: (p) => {
      for (let v = 0; v < jt.length; v++) o[jt[v]].cancel(p);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: C,
    cancel: Q,
    state: L,
    steps: ee,
  } = Vs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : k, !0),
  Cs = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  po = 1e-7,
  go = 12;
function yo(t, e, n, s, i) {
  let r,
    o,
    a = 0;
  do (o = e + (n - e) / 2), (r = Cs(o, s, i) - t), r > 0 ? (n = o) : (e = o);
  while (Math.abs(r) > po && ++a < go);
  return o;
}
function Rt(t, e, n, s) {
  if (t === e && n === s) return k;
  const i = (r) => yo(r, 0, 1, t, n);
  return (r) => (r === 0 || r === 1 ? r : Cs(i(r), e, s));
}
const Ms = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Ds = (t) => (e) => 1 - t(1 - e),
  Rs = Rt(0.33, 1.53, 0.69, 0.99),
  Fe = Ds(Rs),
  Es = Ms(Fe),
  Ls = (t) =>
    (t *= 2) < 1 ? 0.5 * Fe(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  ke = (t) => 1 - Math.sin(Math.acos(t)),
  js = Ds(ke),
  Fs = Ms(ke),
  ks = (t) => /^0[^.\s]+$/u.test(t);
function vo(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || ks(t)
      : !0;
}
const Bs = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  Is = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Os = Is("--"),
  xo = Is("var(--"),
  Be = (t) => (xo(t) ? To.test(t.split("/*")[0].trim()) : !1),
  To =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Po = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function So(t) {
  const e = Po.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function Ns(t, e, n = 1) {
  const [s, i] = So(t);
  if (!s) return;
  const r = window.getComputedStyle(e).getPropertyValue(s);
  if (r) {
    const o = r.trim();
    return Bs(o) ? parseFloat(o) : o;
  }
  return Be(i) ? Ns(i, e, n + 1) : i;
}
const Y = (t, e, n) => (n > e ? e : n < t ? t : n),
  yt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Vt = { ...yt, transform: (t) => Y(0, 1, t) },
  Ft = { ...yt, default: 1 },
  Et = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  q = Et("deg"),
  W = Et("%"),
  P = Et("px"),
  wo = Et("vh"),
  Ao = Et("vw"),
  fn = {
    ...W,
    parse: (t) => W.parse(t) / 100,
    transform: (t) => W.transform(t * 100),
  },
  bo = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  mn = (t) => t === yt || t === P,
  pn = (t, e) => parseFloat(t.split(", ")[e]),
  gn =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const i = s.match(/^matrix3d\((.+)\)$/u);
      if (i) return pn(i[1], e);
      {
        const r = s.match(/^matrix\((.+)\)$/u);
        return r ? pn(r[1], t) : 0;
      }
    },
  Vo = new Set(["x", "y", "z"]),
  Co = Dt.filter((t) => !Vo.has(t));
function Mo(t) {
  const e = [];
  return (
    Co.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const mt = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: gn(4, 13),
  y: gn(5, 14),
};
mt.translateX = mt.x;
mt.translateY = mt.y;
const Us = (t) => (e) => e.test(t),
  Do = { test: (t) => t === "auto", parse: (t) => t },
  _s = [yt, P, W, q, Ao, wo, Do],
  yn = (t) => _s.find(Us(t)),
  rt = new Set();
let pe = !1,
  ge = !1;
function Ks() {
  if (ge) {
    const t = Array.from(rt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    e.forEach((s) => {
      const i = Mo(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([r, o]) => {
            var a;
            (a = s.getValue(r)) === null || a === void 0 || a.set(o);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (ge = !1), (pe = !1), rt.forEach((t) => t.complete()), rt.clear();
}
function Ws() {
  rt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ge = !0);
  });
}
function Ro() {
  Ws(), Ks();
}
class Ie {
  constructor(e, n, s, i, r, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = r),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (rt.add(this), pe || ((pe = !0), C.read(Ws), C.resolveKeyframes(Ks)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    for (let r = 0; r < e.length; r++)
      if (e[r] === null)
        if (r === 0) {
          const o = i?.get(),
            a = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0]);
        } else e[r] = e[r - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      rt.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), rt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Pt = (t) => Math.round(t * 1e5) / 1e5,
  Oe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Eo(t) {
  return t == null;
}
const Lo =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ne = (t, e) => (n) =>
    !!(
      (typeof n == "string" && Lo.test(n) && n.startsWith(t)) ||
      (e && !Eo(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  $s = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, r, o, a] = s.match(Oe);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(r),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  jo = (t) => Y(0, 255, t),
  ne = { ...yt, transform: (t) => Math.round(jo(t)) },
  ot = {
    test: Ne("rgb", "red"),
    parse: $s("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      ne.transform(t) +
      ", " +
      ne.transform(e) +
      ", " +
      ne.transform(n) +
      ", " +
      Pt(Vt.transform(s)) +
      ")",
  };
function Fo(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ye = { test: Ne("#"), parse: Fo, transform: ot.transform },
  ut = {
    test: Ne("hsl", "hue"),
    parse: $s("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      W.transform(Pt(e)) +
      ", " +
      W.transform(Pt(n)) +
      ", " +
      Pt(Vt.transform(s)) +
      ")",
  },
  j = {
    test: (t) => ot.test(t) || ye.test(t) || ut.test(t),
    parse: (t) =>
      ot.test(t) ? ot.parse(t) : ut.test(t) ? ut.parse(t) : ye.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? ot.transform(t)
          : ut.transform(t),
  },
  ko =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Bo(t) {
  var e, n;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(Oe)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(ko)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const zs = "number",
  Hs = "color",
  Io = "var",
  Oo = "var(",
  vn = "${}",
  No =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ct(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let r = 0;
  const a = e
    .replace(
      No,
      (l) => (
        j.test(l)
          ? (s.color.push(r), i.push(Hs), n.push(j.parse(l)))
          : l.startsWith(Oo)
            ? (s.var.push(r), i.push(Io), n.push(l))
            : (s.number.push(r), i.push(zs), n.push(parseFloat(l))),
        ++r,
        vn
      ),
    )
    .split(vn);
  return { values: n, split: a, indexes: s, types: i };
}
function Gs(t) {
  return Ct(t).values;
}
function Xs(t) {
  const { split: e, types: n } = Ct(t),
    s = e.length;
  return (i) => {
    let r = "";
    for (let o = 0; o < s; o++)
      if (((r += e[o]), i[o] !== void 0)) {
        const a = n[o];
        a === zs
          ? (r += Pt(i[o]))
          : a === Hs
            ? (r += j.transform(i[o]))
            : (r += i[o]);
      }
    return r;
  };
}
const Uo = (t) => (typeof t == "number" ? 0 : t);
function _o(t) {
  const e = Gs(t);
  return Xs(t)(e.map(Uo));
}
const tt = {
    test: Bo,
    parse: Gs,
    createTransformer: Xs,
    getAnimatableNone: _o,
  },
  Ko = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wo(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(Oe) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let r = Ko.has(e) ? 1 : 0;
  return s !== n && (r *= 100), e + "(" + r + i + ")";
}
const $o = /\b([a-z-]*)\(.*?\)/gu,
  ve = {
    ...tt,
    getAnimatableNone: (t) => {
      const e = t.match($o);
      return e ? e.map(Wo).join(" ") : t;
    },
  },
  zo = {
    borderWidth: P,
    borderTopWidth: P,
    borderRightWidth: P,
    borderBottomWidth: P,
    borderLeftWidth: P,
    borderRadius: P,
    radius: P,
    borderTopLeftRadius: P,
    borderTopRightRadius: P,
    borderBottomRightRadius: P,
    borderBottomLeftRadius: P,
    width: P,
    maxWidth: P,
    height: P,
    maxHeight: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    backgroundPositionX: P,
    backgroundPositionY: P,
  },
  Ho = {
    rotate: q,
    rotateX: q,
    rotateY: q,
    rotateZ: q,
    scale: Ft,
    scaleX: Ft,
    scaleY: Ft,
    scaleZ: Ft,
    skew: q,
    skewX: q,
    skewY: q,
    distance: P,
    translateX: P,
    translateY: P,
    translateZ: P,
    x: P,
    y: P,
    z: P,
    perspective: P,
    transformPerspective: P,
    opacity: Vt,
    originX: fn,
    originY: fn,
    originZ: P,
  },
  xn = { ...yt, transform: Math.round },
  Ue = {
    ...zo,
    ...Ho,
    zIndex: xn,
    size: P,
    fillOpacity: Vt,
    strokeOpacity: Vt,
    numOctaves: xn,
  },
  Go = {
    ...Ue,
    color: j,
    backgroundColor: j,
    outlineColor: j,
    fill: j,
    stroke: j,
    borderColor: j,
    borderTopColor: j,
    borderRightColor: j,
    borderBottomColor: j,
    borderLeftColor: j,
    filter: ve,
    WebkitFilter: ve,
  },
  _e = (t) => Go[t];
function Ys(t, e) {
  let n = _e(t);
  return (
    n !== ve && (n = tt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const Xo = new Set(["auto", "none", "0"]);
function Yo(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const r = t[s];
    typeof r == "string" && !Xo.has(r) && Ct(r).values.length && (i = t[s]),
      s++;
  }
  if (i && n) for (const r of e) t[r] = Ys(n, i);
}
class qs extends Ie {
  constructor(e, n, s, i, r) {
    super(e, n, s, i, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && ((u = u.trim()), Be(u))) {
        const c = Ns(u, n.current);
        c !== void 0 && (e[l] = c),
          l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !bo.has(s) || e.length !== 2)) return;
    const [i, r] = e,
      o = yn(i),
      a = yn(r);
    if (o !== a)
      if (mn(o) && mn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) vo(e[i]) && s.push(i);
    s.length && Yo(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = mt[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const r = n.getValue(s);
    r && r.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = mt[s](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ke(t) {
  return typeof t == "function";
}
let It;
function qo() {
  It = void 0;
}
const $ = {
    now: () => (
      It === void 0 &&
        $.set(
          L.isProcessing || co.useManualTiming
            ? L.timestamp
            : performance.now(),
        ),
      It
    ),
    set: (t) => {
      (It = t), queueMicrotask(qo);
    },
  },
  Tn = (t, e) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (tt.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function Zo(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Jo(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const r = t[t.length - 1],
    o = Tn(i, e),
    a = Tn(r, e);
  return !o || !a ? !1 : Zo(t) || ((n === "spring" || Ke(n)) && s);
}
const Qo = 40;
class Zs {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: r = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = $.now()),
      (this.options = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: r,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Qo
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ro(), this._resolved;
  }
  onKeyframesResolved(e, n) {
    (this.resolvedAt = $.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: i,
      velocity: r,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Jo(e, s, i, r))
      if (o) this.options.duration = 0;
      else {
        l?.(Yt(e, this.options, n)), a?.(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 &&
      ((this._resolved = { keyframes: e, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const pt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  },
  Js = (t, e, n = 10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let r = 0; r < i; r++) s += t(pt(0, i - 1, r)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  };
function Qs(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const tr = 5;
function ti(t, e, n) {
  const s = Math.max(e - tr, 0);
  return Qs(n - t(s), e - s);
}
const D = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  se = 0.001;
function er({
  duration: t = D.duration,
  bounce: e = D.bounce,
  velocity: n = D.velocity,
  mass: s = D.mass,
}) {
  let i,
    r,
    o = 1 - e;
  (o = Y(D.minDamping, D.maxDamping, o)),
    (t = Y(D.minDuration, D.maxDuration, X(t))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            h = c * t,
            d = c - n,
            f = xe(u, o),
            m = Math.exp(-h);
          return se - (d / f) * m;
        }),
        (r = (u) => {
          const h = u * o * t,
            d = h * n + n,
            f = Math.pow(o, 2) * Math.pow(u, 2) * t,
            m = Math.exp(-h),
            g = xe(Math.pow(u, 2), o);
          return ((-i(u) + se > 0 ? -1 : 1) * ((d - f) * m)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            h = (u - n) * t + 1;
          return -se + c * h;
        }),
        (r = (u) => {
          const c = Math.exp(-u * t),
            h = (n - u) * (t * t);
          return c * h;
        }));
  const a = 5 / t,
    l = sr(i, r, a);
  if (((t = G(t)), isNaN(l)))
    return { stiffness: D.stiffness, damping: D.damping, duration: t };
  {
    const u = Math.pow(l, 2) * s;
    return { stiffness: u, damping: o * 2 * Math.sqrt(s * u), duration: t };
  }
}
const nr = 12;
function sr(t, e, n) {
  let s = n;
  for (let i = 1; i < nr; i++) s = s - t(s) / e(s);
  return s;
}
function xe(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Te = 2e4;
function ei(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Te; ) (e += n), (s = t.next(e));
  return e >= Te ? 1 / 0 : e;
}
const ir = ["duration", "bounce"],
  or = ["stiffness", "damping", "mass"];
function Pn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function rr(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Pn(t, or) && Pn(t, ir))
    if (t.visualDuration) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        r = 2 * Y(0.05, 1, 1 - t.bounce) * Math.sqrt(i);
      e = { ...e, mass: D.mass, stiffness: i, damping: r };
    } else {
      const n = er(t);
      (e = { ...e, ...n, mass: D.mass }), (e.isResolvedFromDuration = !0);
    }
  return e;
}
function ni(t = D.visualDuration, e = D.bounce) {
  const n =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: s, restDelta: i } = n;
  const r = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: h,
      velocity: d,
      isResolvedFromDuration: f,
    } = rr({ ...n, velocity: -X(n.velocity || 0) }),
    m = d || 0,
    g = u / (2 * Math.sqrt(l * c)),
    T = o - r,
    p = X(Math.sqrt(l / c)),
    v = Math.abs(T) < 5;
  s || (s = v ? D.restSpeed.granular : D.restSpeed.default),
    i || (i = v ? D.restDelta.granular : D.restDelta.default);
  let x;
  if (g < 1) {
    const S = xe(p, g);
    x = (V) => {
      const E = Math.exp(-g * p * V);
      return (
        o - E * (((m + g * p * T) / S) * Math.sin(S * V) + T * Math.cos(S * V))
      );
    };
  } else if (g === 1) x = (S) => o - Math.exp(-p * S) * (T + (m + p * T) * S);
  else {
    const S = p * Math.sqrt(g * g - 1);
    x = (V) => {
      const E = Math.exp(-g * p * V),
        w = Math.min(S * V, 300);
      return (
        o - (E * ((m + g * p * T) * Math.sinh(w) + S * T * Math.cosh(w))) / S
      );
    };
  }
  const A = {
    calculatedDuration: (f && h) || null,
    next: (S) => {
      const V = x(S);
      if (f) a.done = S >= h;
      else {
        let E = 0;
        g < 1 && (E = S === 0 ? G(m) : ti(x, S, V));
        const w = Math.abs(E) <= s,
          I = Math.abs(o - V) <= i;
        a.done = w && I;
      }
      return (a.value = a.done ? o : V), a;
    },
    toString: () => {
      const S = Math.min(ei(A), Te),
        V = Js((E) => A.next(S * E).value, S, 30);
      return S + "ms " + V;
    },
  };
  return A;
}
function Sn({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: r = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const h = t[0],
    d = { done: !1, value: h },
    f = (w) => (a !== void 0 && w < a) || (l !== void 0 && w > l),
    m = (w) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - w) < Math.abs(l - w)
          ? a
          : l;
  let g = n * e;
  const T = h + g,
    p = o === void 0 ? T : o(T);
  p !== T && (g = p - h);
  const v = (w) => -g * Math.exp(-w / s),
    x = (w) => p + v(w),
    A = (w) => {
      const I = v(w),
        N = x(w);
      (d.done = Math.abs(I) <= u), (d.value = d.done ? p : N);
    };
  let S, V;
  const E = (w) => {
    f(d.value) &&
      ((S = w),
      (V = ni({
        keyframes: [d.value, m(d.value)],
        velocity: ti(x, w, d.value),
        damping: i,
        stiffness: r,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (w) => {
        let I = !1;
        return (
          !V && S === void 0 && ((I = !0), A(w), E(w)),
          S !== void 0 && w >= S ? V.next(w - S) : (!I && A(w), d)
        );
      },
    }
  );
}
const ar = Rt(0.42, 0, 1, 1),
  lr = Rt(0, 0, 0.58, 1),
  si = Rt(0.42, 0, 0.58, 1),
  ur = (t) => Array.isArray(t) && typeof t[0] != "number",
  We = (t) => Array.isArray(t) && typeof t[0] == "number",
  cr = {
    linear: k,
    easeIn: ar,
    easeInOut: si,
    easeOut: lr,
    circIn: ke,
    circInOut: Fs,
    circOut: js,
    backIn: Fe,
    backInOut: Es,
    backOut: Rs,
    anticipate: Ls,
  },
  wn = (t) => {
    if (We(t)) {
      bs(t.length === 4);
      const [e, n, s, i] = t;
      return Rt(e, n, s, i);
    } else if (typeof t == "string") return cr[t];
    return t;
  },
  hr = (t, e) => (n) => e(t(n)),
  Z = (...t) => t.reduce(hr),
  M = (t, e, n) => t + (e - t) * n;
function ie(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function dr({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    r = 0,
    o = 0;
  if (!e) i = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = ie(l, a, t + 1 / 3)), (r = ie(l, a, t)), (o = ie(l, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: s,
  };
}
function Ut(t, e) {
  return (n) => (n > 0 ? e : t);
}
const oe = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  fr = [ye, ot, ut],
  mr = (t) => fr.find((e) => e.test(t));
function An(t) {
  const e = mr(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === ut && (n = dr(n)), n;
}
const bn = (t, e) => {
    const n = An(t),
      s = An(e);
    if (!n || !s) return Ut(t, e);
    const i = { ...n };
    return (r) => (
      (i.red = oe(n.red, s.red, r)),
      (i.green = oe(n.green, s.green, r)),
      (i.blue = oe(n.blue, s.blue, r)),
      (i.alpha = M(n.alpha, s.alpha, r)),
      ot.transform(i)
    );
  },
  Pe = new Set(["none", "hidden"]);
function pr(t, e) {
  return Pe.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function gr(t, e) {
  return (n) => M(t, e, n);
}
function $e(t) {
  return typeof t == "number"
    ? gr
    : typeof t == "string"
      ? Be(t)
        ? Ut
        : j.test(t)
          ? bn
          : xr
      : Array.isArray(t)
        ? ii
        : typeof t == "object"
          ? j.test(t)
            ? bn
            : yr
          : Ut;
}
function ii(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((r, o) => $e(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < s; o++) n[o] = i[o](r);
    return n;
  };
}
function yr(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = $e(t[i])(t[i], e[i]));
  return (i) => {
    for (const r in s) n[r] = s[r](i);
    return n;
  };
}
function vr(t, e) {
  var n;
  const s = [],
    i = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < e.values.length; r++) {
    const o = e.types[r],
      a = t.indexes[o][i[o]],
      l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    (s[r] = l), i[o]++;
  }
  return s;
}
const xr = (t, e) => {
  const n = tt.createTransformer(e),
    s = Ct(t),
    i = Ct(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Pe.has(t) && !i.values.length) || (Pe.has(e) && !s.values.length)
      ? pr(t, e)
      : Z(ii(vr(s, i), i.values), n)
    : Ut(t, e);
};
function oi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? M(t, e, n)
    : $e(t)(t, e);
}
function Tr(t, e, n) {
  const s = [],
    i = n || oi,
    r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || k : e;
      a = Z(l, a);
    }
    s.push(a);
  }
  return s;
}
function Pr(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const r = t.length;
  if ((bs(r === e.length), r === 1)) return () => e[0];
  if (r === 2 && t[0] === t[1]) return () => e[1];
  t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const o = Tr(e, s, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < t.length - 2 && !(u < t[c + 1]); c++);
      const h = pt(t[c], t[c + 1], u);
      return o[c](h);
    };
  return n ? (u) => l(Y(t[0], t[r - 1], u)) : l;
}
function Sr(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = pt(0, e, s);
    t.push(M(n, 1, i));
  }
}
function wr(t) {
  const e = [0];
  return Sr(e, t.length - 1), e;
}
function Ar(t, e) {
  return t.map((n) => n * e);
}
function br(t, e) {
  return t.map(() => e || si).splice(0, t.length - 1);
}
function _t({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = ur(s) ? s.map(wn) : wn(s),
    r = { done: !1, value: e[0] },
    o = Ar(n && n.length === e.length ? n : wr(e), t),
    a = Pr(o, e, { ease: Array.isArray(i) ? i : br(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((r.value = a(l)), (r.done = l >= t), r),
  };
}
const Vr = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => C.update(e, !0),
      stop: () => Q(e),
      now: () => (L.isProcessing ? L.timestamp : $.now()),
    };
  },
  Cr = { decay: Sn, inertia: Sn, tween: _t, keyframes: _t, spring: ni },
  Mr = (t) => t / 100;
class ze extends Zs {
  constructor(e) {
    super(e),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: s, element: i, keyframes: r } = this.options,
      o = i?.KeyframeResolver || Ie,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(r, a, n, s, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(e) {
    const {
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: i = 0,
        repeatType: r,
        velocity: o = 0,
      } = this.options,
      a = Ke(n) ? n : Cr[n] || _t;
    let l, u;
    a !== _t &&
      typeof e[0] != "number" &&
      ((l = Z(Mr, oi(e[0], e[1]))), (e = [0, 100]));
    const c = a({ ...this.options, keyframes: e });
    r === "mirror" &&
      (u = a({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = ei(c));
    const { calculatedDuration: h } = c,
      d = h + i,
      f = d * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: f,
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !e
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: w } = this.options;
      return { done: !0, value: w[w.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: r,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: h,
    } = s;
    if (this.startTime === null) return r.next(0);
    const {
      delay: d,
      repeat: f,
      repeatType: m,
      repeatDelay: g,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = e)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      v = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let x = this.currentTime,
      A = r;
    if (f) {
      const w = Math.min(this.currentTime, c) / h;
      let I = Math.floor(w),
        N = w % 1;
      !N && w >= 1 && (N = 1),
        N === 1 && I--,
        (I = Math.min(I, f + 1)),
        I % 2 &&
          (m === "reverse"
            ? ((N = 1 - N), g && (N -= g / h))
            : m === "mirror" && (A = o)),
        (x = Y(0, 1, N) * h);
    }
    const S = v ? { done: !1, value: l[0] } : A.next(x);
    a && (S.value = a(S.value));
    let { done: V } = S;
    !v &&
      u !== null &&
      (V = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && V));
    return (
      E && i !== void 0 && (S.value = Yt(l, this.options, i)),
      T && T(S.value),
      E && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: e } = this;
    return e ? X(e.calculatedDuration) : 0;
  }
  get time() {
    return X(this.currentTime);
  }
  set time(e) {
    (e = G(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (this.playbackSpeed = e), n && (this.time = X(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: e = Vr, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = s ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
}
const Dr = new Set(["opacity", "clipPath", "filter", "transform"]);
function He(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Rr = { linearEasing: void 0 };
function Er(t, e) {
  const n = He(t);
  return () => {
    var s;
    return (s = Rr[e]) !== null && s !== void 0 ? s : n();
  };
}
const Kt = Er(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function ri(t) {
  return !!(
    (typeof t == "function" && Kt()) ||
    !t ||
    (typeof t == "string" && (t in Se || Kt())) ||
    We(t) ||
    (Array.isArray(t) && t.every(ri))
  );
}
const xt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  Se = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xt([0, 0.65, 0.55, 1]),
    circOut: xt([0.55, 0, 1, 0.45]),
    backIn: xt([0.31, 0.01, 0.66, -0.59]),
    backOut: xt([0.33, 1.53, 0.69, 0.99]),
  };
function ai(t, e) {
  if (t)
    return typeof t == "function" && Kt()
      ? Js(t, e)
      : We(t)
        ? xt(t)
        : Array.isArray(t)
          ? t.map((n) => ai(n, e) || Se.easeOut)
          : Se[t];
}
function Lr(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: r = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = ai(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    t.animate(u, {
      delay: s,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: r + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function Vn(t, e) {
  (t.timeline = e), (t.onfinish = null);
}
const jr = He(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Wt = 10,
  Fr = 2e4;
function kr(t) {
  return Ke(t.type) || t.type === "spring" || !ri(t.ease);
}
function Br(t, e) {
  const n = new ze({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let r = 0;
  for (; !s.done && r < Fr; ) (s = n.sample(r)), i.push(s.value), (r += Wt);
  return { times: void 0, keyframes: i, duration: r - Wt, ease: "linear" };
}
const li = { anticipate: Ls, backInOut: Es, circInOut: Fs };
function Ir(t) {
  return t in li;
}
class Cn extends Zs {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: r } = this.options;
    (this.resolver = new qs(
      r,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      s,
      i,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var s;
    let {
      duration: i = 300,
      times: r,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((s = l.owner) === null || s === void 0) && s.current)) return !1;
    if (
      (typeof o == "string" && Kt() && Ir(o) && (o = li[o]), kr(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: m,
          element: g,
          ...T
        } = this.options,
        p = Br(e, T);
      (e = p.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (i = p.duration),
        (r = p.times),
        (o = p.ease),
        (a = "keyframes");
    }
    const h = Lr(l.owner.current, u, e, {
      ...this.options,
      duration: i,
      times: r,
      ease: o,
    });
    return (
      (h.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Vn(h, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (h.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Yt(e, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: h, duration: i, times: r, type: a, ease: o, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: n } = e;
    return X(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: n } = e;
    return X(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: s } = n;
    s.currentTime = G(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e) return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e) return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e) return null;
    const { animation: n } = e;
    return n.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n) return k;
      const { animation: s } = n;
      Vn(s, e);
    }
    return k;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: s,
      duration: i,
      type: r,
      ease: o,
      times: a,
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: h,
          element: d,
          ...f
        } = this.options,
        m = new ze({
          ...f,
          keyframes: s,
          duration: i,
          type: r,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        g = G(this.time);
      u.setWithVelocity(m.sample(g - Wt).value, m.sample(g).value, Wt);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const {
      motionValue: n,
      name: s,
      repeatDelay: i,
      repeatType: r,
      damping: o,
      type: a,
    } = e;
    return (
      jr() &&
      s &&
      Dr.has(s) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      r !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const Or = He(() => window.ScrollTimeline !== void 0);
class Nr {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((i) =>
      Or() && i.attachTimeline ? i.attachTimeline(e) : n(i),
    );
    return () => {
      s.forEach((i, r) => {
        i && i(), this.animations[r].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Ur({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: r,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Ge =
    (t, e, n, s = {}, i, r) =>
    (o) => {
      const a = je(s, t) || {},
        l = a.delay || s.delay || 0;
      let { elapsed: u = 0 } = s;
      u = u - G(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          e.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          o(), a.onComplete && a.onComplete();
        },
        name: t,
        motionValue: e,
        element: r ? void 0 : i,
      };
      Ur(a) || (c = { ...c, ...uo(t, c) }),
        c.duration && (c.duration = G(c.duration)),
        c.repeatDelay && (c.repeatDelay = G(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let h = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (h = !0)),
        h && !r && e.get() !== void 0)
      ) {
        const d = Yt(c.keyframes, a);
        if (d !== void 0)
          return (
            C.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new Nr([])
          );
      }
      return !r && Cn.supports(c) ? new Cn(c) : new ze(c);
    },
  _r = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  Kr = (t) => (me(t) ? t[t.length - 1] || 0 : t);
function Xe(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Ye(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class qe {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Xe(this.subscriptions, e), () => Ye(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let r = 0; r < i; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Mn = 30,
  Wr = (t) => !isNaN(parseFloat(t));
class $r {
  constructor(e, n = {}) {
    (this.version = "11.13.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        const r = $.now();
        this.updatedAt !== r && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = $.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = Wr(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new qe());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          s(),
            C.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(e, n = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = $.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Mn
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Mn);
    return Qs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Mt(t, e) {
  return new $r(t, e);
}
function zr(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Mt(n));
}
function Hr(t, e) {
  const n = Xt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...r } = n || {};
  r = { ...r, ...s };
  for (const o in r) {
    const a = Kr(r[o]);
    zr(t, o, a);
  }
}
const Ze = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Gr = "framerAppearId",
  ui = "data-" + Ze(Gr);
function ci(t) {
  return t.props[ui];
}
const F = (t) => !!(t && t.getVelocity);
function Xr(t) {
  return !!(F(t) && t.add);
}
function we(t, e) {
  const n = t.getValue("willChange");
  if (Xr(n)) return n.add(e);
}
function Yr({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function hi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var r;
  let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  s && (o = s);
  const u = [],
    c = i && t.animationState && t.animationState.getState()[i];
  for (const h in l) {
    const d = t.getValue(
        h,
        (r = t.latestValues[h]) !== null && r !== void 0 ? r : null,
      ),
      f = l[h];
    if (f === void 0 || (c && Yr(c, h))) continue;
    const m = { delay: n, ...je(o || {}, h) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const p = ci(t);
      if (p) {
        const v = window.MotionHandoffAnimation(p, h, C);
        v !== null && ((m.startTime = v), (g = !0));
      }
    }
    we(t, h),
      d.start(
        Ge(h, d, f, t.shouldReduceMotion && at.has(h) ? { type: !1 } : m, t, g),
      );
    const T = d.animation;
    T && u.push(T);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        C.update(() => {
          a && Hr(t, a);
        });
      }),
    u
  );
}
function Ae(t, e, n = {}) {
  var s;
  const i = Xt(
    t,
    e,
    n.type === "exit"
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0,
  );
  let { transition: r = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = i ? () => Promise.all(hi(t, i, n)) : () => Promise.resolve(),
    a =
      t.variantChildren && t.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: h,
              staggerDirection: d,
            } = r;
            return qr(t, e, c + u, h, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = r;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function qr(t, e, n = 0, s = 0, i = 1, r) {
  const o = [],
    a = (t.variantChildren.size - 1) * s,
    l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return (
    Array.from(t.variantChildren)
      .sort(Zr)
      .forEach((u, c) => {
        u.notify("AnimationStart", e),
          o.push(
            Ae(u, e, { ...r, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", e),
            ),
          );
      }),
    Promise.all(o)
  );
}
function Zr(t, e) {
  return t.sortNodePosition(e);
}
function Jr(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((r) => Ae(t, r, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = Ae(t, e, n);
  else {
    const i = typeof e == "function" ? Xt(t, e, n.custom) : e;
    s = Promise.all(hi(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const Qr = Le.length;
function di(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? di(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Qr; n++) {
    const s = Le[n],
      i = t.props[s];
    (bt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const ta = [...Ee].reverse(),
  ea = Ee.length;
function na(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => Jr(t, n, s)));
}
function sa(t) {
  let e = na(t),
    n = Dn(),
    s = !0;
  const i = (l) => (u, c) => {
    var h;
    const d = Xt(
      t,
      c,
      l === "exit"
        ? (h = t.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0,
    );
    if (d) {
      const { transition: f, transitionEnd: m, ...g } = d;
      u = { ...u, ...g, ...m };
    }
    return u;
  };
  function r(l) {
    e = l(t);
  }
  function o(l) {
    const { props: u } = t,
      c = di(t.parent) || {},
      h = [],
      d = new Set();
    let f = {},
      m = 1 / 0;
    for (let T = 0; T < ea; T++) {
      const p = ta[T],
        v = n[p],
        x = u[p] !== void 0 ? u[p] : c[p],
        A = bt(x),
        S = p === l ? v.isActive : null;
      S === !1 && (m = T);
      let V = x === c[p] && x !== u[p] && A;
      if (
        (V && s && t.manuallyAnimateOnMount && (V = !1),
        (v.protectedKeys = { ...f }),
        (!v.isActive && S === null) ||
          (!x && !v.prevProp) ||
          Gt(x) ||
          typeof x == "boolean")
      )
        continue;
      const E = ia(v.prevProp, x);
      let w = E || (p === l && v.isActive && !V && A) || (T > m && A),
        I = !1;
      const N = Array.isArray(x) ? x : [x];
      let lt = N.reduce(i(p), {});
      S === !1 && (lt = {});
      const { prevResolvedValues: cn = {} } = v,
        Zi = { ...cn, ...lt },
        hn = (B) => {
          (w = !0),
            d.has(B) && ((I = !0), d.delete(B)),
            (v.needsAnimating[B] = !0);
          const z = t.getValue(B);
          z && (z.liveStyle = !1);
        };
      for (const B in Zi) {
        const z = lt[B],
          Qt = cn[B];
        if (f.hasOwnProperty(B)) continue;
        let te = !1;
        me(z) && me(Qt) ? (te = !As(z, Qt)) : (te = z !== Qt),
          te
            ? z != null
              ? hn(B)
              : d.add(B)
            : z !== void 0 && d.has(B)
              ? hn(B)
              : (v.protectedKeys[B] = !0);
      }
      (v.prevProp = x),
        (v.prevResolvedValues = lt),
        v.isActive && (f = { ...f, ...lt }),
        s && t.blockInitialAnimation && (w = !1),
        w &&
          (!(V && E) || I) &&
          h.push(...N.map((B) => ({ animation: B, options: { type: p } })));
    }
    if (d.size) {
      const T = {};
      d.forEach((p) => {
        const v = t.getBaseTarget(p),
          x = t.getValue(p);
        x && (x.liveStyle = !0), (T[p] = v ?? null);
      }),
        h.push({ animation: T });
    }
    let g = !!h.length;
    return (
      s &&
        (u.initial === !1 || u.initial === u.animate) &&
        !t.manuallyAnimateOnMount &&
        (g = !1),
      (s = !1),
      g ? e(h) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = t.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var f;
        return (f = d.animationState) === null || f === void 0
          ? void 0
          : f.setActive(l, u);
      }),
      (n[l].isActive = u);
    const h = o(l);
    for (const d in n) n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      (n = Dn()), (s = !0);
    },
  };
}
function ia(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !As(e, t) : !1;
}
function nt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Dn() {
  return {
    animate: nt(!0),
    whileInView: nt(),
    whileHover: nt(),
    whileTap: nt(),
    whileDrag: nt(),
    whileFocus: nt(),
    exit: nt(),
  };
}
class et {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class oa extends et {
  constructor(e) {
    super(e), e.animationState || (e.animationState = sa(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Gt(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let ra = 0;
class aa extends et {
  constructor() {
    super(...arguments), (this.id = ra++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const la = { animation: { Feature: oa }, exit: { Feature: aa } },
  K = { x: !1, y: !1 };
function fi() {
  return K.x || K.y;
}
function ua(t) {
  return t === "x" || t === "y"
    ? K[t]
      ? null
      : ((K[t] = !0),
        () => {
          K[t] = !1;
        })
    : K.x || K.y
      ? null
      : ((K.x = K.y = !0),
        () => {
          K.x = K.y = !1;
        });
}
const mi = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function Lt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const ca = (t) => (e) => mi(e) && t(e, Lt(e));
function H(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function J(t, e, n, s) {
  return H(t, e, ca(n), s);
}
const Rn = (t, e) => Math.abs(t - e);
function ha(t, e) {
  const n = Rn(t.x, e.x),
    s = Rn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class pi {
  constructor(
    e,
    n,
    { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: r = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = ae(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          f = ha(h.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !f) return;
        const { point: m } = h,
          { timestamp: g } = L;
        this.history.push({ ...m, timestamp: g });
        const { onStart: T, onMove: p } = this.handlers;
        d ||
          (T && T(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, d) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = re(d, this.transformPagePoint)),
          C.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, d) => {
        this.end();
        const { onEnd: f, onSessionEnd: m, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = ae(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : re(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && f && f(h, T), m && m(h, T);
      }),
      !mi(e))
    )
      return;
    (this.dragSnapToOrigin = r),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.contextWindow = i || window);
    const o = Lt(e),
      a = re(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = L;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, ae(a, this.history)),
      (this.removeListeners = Z(
        J(this.contextWindow, "pointermove", this.handlePointerMove),
        J(this.contextWindow, "pointerup", this.handlePointerUp),
        J(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Q(this.updatePoint);
  }
}
function re(t, e) {
  return e ? { point: e(t.point) } : t;
}
function En(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ae({ point: t }, e) {
  return {
    point: t,
    delta: En(t, gi(e)),
    offset: En(t, da(e)),
    velocity: fa(e, 0.1),
  };
}
function da(t) {
  return t[0];
}
function gi(t) {
  return t[t.length - 1];
}
function fa(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = gi(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > G(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const r = X(i.timestamp - s.timestamp);
  if (r === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - s.x) / r, y: (i.y - s.y) / r };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function ct(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const yi = 1e-4,
  ma = 1 - yi,
  pa = 1 + yi,
  vi = 0.01,
  ga = 0 - vi,
  ya = 0 + vi;
function O(t) {
  return t.max - t.min;
}
function va(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ln(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = M(e.min, e.max, t.origin)),
    (t.scale = O(n) / O(e)),
    (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= ma && t.scale <= pa) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= ga && t.translate <= ya) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function St(t, e, n, s) {
  Ln(t.x, e.x, n.x, s ? s.originX : void 0),
    Ln(t.y, e.y, n.y, s ? s.originY : void 0);
}
function jn(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + O(e));
}
function xa(t, e, n) {
  jn(t.x, e.x, n.x), jn(t.y, e.y, n.y);
}
function Fn(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + O(e));
}
function wt(t, e, n) {
  Fn(t.x, e.x, n.x), Fn(t.y, e.y, n.y);
}
function Ta(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? M(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function kn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Pa(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: kn(t.x, n, i), y: kn(t.y, e, s) };
}
function Bn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Sa(t, e) {
  return { x: Bn(t.x, e.x), y: Bn(t.y, e.y) };
}
function wa(t, e) {
  let n = 0.5;
  const s = O(t),
    i = O(e);
  return (
    i > s
      ? (n = pt(e.min, e.max - s, t.min))
      : s > i && (n = pt(t.min, t.max - i, e.min)),
    Y(0, 1, n)
  );
}
function Aa(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const be = 0.35;
function ba(t = be) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = be),
    { x: In(t, "left", "right"), y: In(t, "top", "bottom") }
  );
}
function In(t, e, n) {
  return { min: On(t, e), max: On(t, n) };
}
function On(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Nn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ht = () => ({ x: Nn(), y: Nn() }),
  Un = () => ({ min: 0, max: 0 }),
  R = () => ({ x: Un(), y: Un() });
function _(t) {
  return [t("x"), t("y")];
}
function xi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Va({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Ca(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function le(t) {
  return t === void 0 || t === 1;
}
function Ve({ scale: t, scaleX: e, scaleY: n }) {
  return !le(t) || !le(e) || !le(n);
}
function st(t) {
  return (
    Ve(t) ||
    Ti(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function Ti(t) {
  return _n(t.x) || _n(t.y);
}
function _n(t) {
  return t && t !== "0%";
}
function $t(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function Kn(t, e, n, s, i) {
  return i !== void 0 && (t = $t(t, i, s)), $t(t, n, s) + e;
}
function Ce(t, e = 0, n = 1, s, i) {
  (t.min = Kn(t.min, e, n, s, i)), (t.max = Kn(t.max, e, n, s, i));
}
function Pi(t, { x: e, y: n }) {
  Ce(t.x, e.translate, e.scale, e.originPoint),
    Ce(t.y, n.translate, n.scale, n.originPoint);
}
const Wn = 0.999999999999,
  $n = 1.0000000000001;
function Ma(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < i; a++) {
    (r = n[a]), (o = r.projectionDelta);
    const { visualElement: l } = r.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (s &&
        r.options.layoutScroll &&
        r.scroll &&
        r !== r.root &&
        ft(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), Pi(t, o)),
      s && st(r.latestValues) && ft(t, r.latestValues));
  }
  e.x < $n && e.x > Wn && (e.x = 1), e.y < $n && e.y > Wn && (e.y = 1);
}
function dt(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function zn(t, e, n, s, i = 0.5) {
  const r = M(t.min, t.max, i);
  Ce(t, e, n, r, s);
}
function ft(t, e) {
  zn(t.x, e.x, e.scaleX, e.scale, e.originX),
    zn(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Si(t, e) {
  return xi(Ca(t.getBoundingClientRect(), e));
}
function Da(t, e, n) {
  const s = Si(t, n),
    { scroll: i } = e;
  return i && (dt(s.x, i.offset.x), dt(s.y, i.offset.y)), s;
}
const wi = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Ra = new WeakMap();
class Ea {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = R()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Lt(c).point);
      },
      r = (c, h) => {
        const { drag: d, dragPropagation: f, onDragStart: m } = this.getProps();
        if (
          d &&
          !f &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ua(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _((T) => {
            let p = this.getAxisMotionValue(T).get() || 0;
            if (W.test(p)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const x = v.layout.layoutBox[T];
                x && (p = O(x) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[T] = p;
          }),
          m && C.postRender(() => m(c, h)),
          we(this.visualElement, "transform");
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      o = (c, h) => {
        const {
          dragPropagation: d,
          dragDirectionLock: f,
          onDirectionLock: m,
          onDrag: g,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: T } = h;
        if (f && this.currentDirection === null) {
          (this.currentDirection = La(T)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, T),
          this.updateAxis("y", h.point, T),
          this.visualElement.render(),
          g && g(c, h);
      },
      a = (c, h) => this.stop(c, h),
      l = () =>
        _((c) => {
          var h;
          return (
            this.getAnimationState(c) === "paused" &&
            ((h = this.getAxisMotionValue(c).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new pi(
      e,
      {
        onSessionStart: i,
        onStart: r,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: wi(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: r } = this.getProps();
    r && C.postRender(() => r(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !kt(e, i, this.currentDirection)) return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (o = Ta(o, this.constraints[e], this.elastic[e])),
      r.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
      r = this.constraints;
    n && ct(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = Pa(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = ba(s)),
      r !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Aa(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ct(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const r = Da(s, i.root, this.visualElement.getTransformPagePoint());
    let o = Sa(i.layout.layoutBox, r);
    if (n) {
      const a = n(Va(o));
      (this.hasMutatedConstraints = !!a), a && (o = xi(a));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: r,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = _((c) => {
        if (!kt(c, n, this.currentDirection)) return;
        let h = (l && l[c]) || {};
        o && (h = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          f = i ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: s ? e[c] : 0,
            bounceStiffness: d,
            bounceDamping: f,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...r,
            ...h,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      we(this.visualElement, e), s.start(Ge(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    _((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    _((n) => {
      const { drag: s } = this.getProps();
      if (!kt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        r = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        r.set(e[n] - M(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ct(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = wa({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      _((o) => {
        if (!kt(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(M(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ra.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = J(e, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        ct(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      r = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      C.read(s);
    const o = H(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_((c) => {
              const h = this.getAxisMotionValue(c);
              h &&
                ((this.originPoint[c] += l[c].translate),
                h.set(h.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      o(), n(), r(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: r = !1,
        dragElastic: o = be,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function kt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function La(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class ja extends et {
  constructor(e) {
    super(e),
      (this.removeGroupControls = k),
      (this.removeListeners = k),
      (this.controls = new Ea(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || k);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Hn = (t) => (e, n) => {
  t && C.postRender(() => t(e, n));
};
class Fa extends et {
  constructor() {
    super(...arguments), (this.removePointerDownListener = k);
  }
  onPointerDown(e) {
    this.session = new pi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wi(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Hn(e),
      onStart: Hn(n),
      onMove: s,
      onEnd: (r, o) => {
        delete this.session, i && C.postRender(() => i(r, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = J(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const qt = y.createContext(null);
function ka() {
  const t = y.useContext(qt);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = y.useId();
  y.useEffect(() => s(i), []);
  const r = y.useCallback(() => n && n(i), [i, n]);
  return !e && n ? [!1, r] : [!0];
}
const Je = y.createContext({}),
  Ai = y.createContext({}),
  Ot = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gn(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const vt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (P.test(t)) t = parseFloat(t);
        else return t;
      const n = Gn(t, e.target.x),
        s = Gn(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Ba = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = tt.parse(t);
      if (i.length > 5) return s;
      const r = tt.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = M(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        r(i)
      );
    },
  },
  zt = {};
function Ia(t) {
  Object.assign(zt, t);
}
const { schedule: Qe } = Vs(queueMicrotask, !1);
class Oa extends y.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: r } = e;
    Ia(Na),
      r &&
        (n.group && n.group.add(r),
        s && s.register && i && s.register(r),
        r.root.didUpdate(),
        r.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        r.setOptions({
          ...r.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ot.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: r,
      } = this.props,
      o = s.projection;
    return (
      o &&
        ((o.isPresent = r),
        i || e.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== r &&
          (r
            ? o.promote()
            : o.relegate() ||
              C.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      Qe.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function bi(t) {
  const [e, n] = ka(),
    s = y.useContext(Je);
  return b.jsx(Oa, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: y.useContext(Ai),
    isPresent: e,
    safeToRemove: n,
  });
}
const Na = {
    borderRadius: {
      ...vt,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: vt,
    borderTopRightRadius: vt,
    borderBottomLeftRadius: vt,
    borderBottomRightRadius: vt,
    boxShadow: Ba,
  },
  Vi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Ua = Vi.length,
  Xn = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Yn = (t) => typeof t == "number" || P.test(t);
function _a(t, e, n, s, i, r) {
  i
    ? ((t.opacity = M(0, n.opacity !== void 0 ? n.opacity : 1, Ka(s))),
      (t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, Wa(s))))
    : r &&
      (t.opacity = M(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        s,
      ));
  for (let o = 0; o < Ua; o++) {
    const a = `border${Vi[o]}Radius`;
    let l = qn(e, a),
      u = qn(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Yn(l) === Yn(u)
        ? ((t[a] = Math.max(M(Xn(l), Xn(u), s), 0)),
          (W.test(u) || W.test(l)) && (t[a] += "%"))
        : (t[a] = u);
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s));
}
function qn(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Ka = Ci(0, 0.5, js),
  Wa = Ci(0.5, 0.95, k);
function Ci(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(pt(t, e, s)));
}
function Zn(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function U(t, e) {
  Zn(t.x, e.x), Zn(t.y, e.y);
}
function Jn(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function Qn(t, e, n, s, i) {
  return (
    (t -= e), (t = $t(t, 1 / n, s)), i !== void 0 && (t = $t(t, 1 / i, s)), t
  );
}
function $a(t, e = 0, n = 1, s = 0.5, i, r = t, o = t) {
  if (
    (W.test(e) && ((e = parseFloat(e)), (e = M(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = M(r.min, r.max, s);
  t === r && (a -= e),
    (t.min = Qn(t.min, e, n, a, i)),
    (t.max = Qn(t.max, e, n, a, i));
}
function ts(t, e, [n, s, i], r, o) {
  $a(t, e[n], e[s], e[i], e.scale, r, o);
}
const za = ["x", "scaleX", "originX"],
  Ha = ["y", "scaleY", "originY"];
function es(t, e, n, s) {
  ts(t.x, e, za, n ? n.x : void 0, s ? s.x : void 0),
    ts(t.y, e, Ha, n ? n.y : void 0, s ? s.y : void 0);
}
function ns(t) {
  return t.translate === 0 && t.scale === 1;
}
function Mi(t) {
  return ns(t.x) && ns(t.y);
}
function ss(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Ga(t, e) {
  return ss(t.x, e.x) && ss(t.y, e.y);
}
function is(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function Di(t, e) {
  return is(t.x, e.x) && is(t.y, e.y);
}
function os(t) {
  return O(t.x) / O(t.y);
}
function rs(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class Xa {
  constructor() {
    this.members = [];
  }
  add(e) {
    Xe(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (Ye(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const r = this.members[i];
      if (r.isPresent !== !1) {
        s = r;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ya(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    r = t.y.translate / e.y,
    o = n?.z || 0;
  if (
    ((i || r || o) && (s = `translate3d(${i}px, ${r}px, ${o}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: h,
      rotateY: d,
      skewX: f,
      skewY: m,
    } = n;
    u && (s = `perspective(${u}px) ${s}`),
      c && (s += `rotate(${c}deg) `),
      h && (s += `rotateX(${h}deg) `),
      d && (s += `rotateY(${d}deg) `),
      f && (s += `skewX(${f}deg) `),
      m && (s += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const qa = (t, e) => t.depth - e.depth;
class Za {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Xe(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    Ye(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(qa),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function Nt(t) {
  const e = F(t) ? t.get() : t;
  return _r(e) ? e.toValue() : e;
}
function Ja(t, e) {
  const n = $.now(),
    s = ({ timestamp: i }) => {
      const r = i - n;
      r >= e && (Q(s), t(r - e));
    };
  return C.read(s, !0), () => Q(s);
}
function Qa(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function tl(t, e, n) {
  const s = F(t) ? t : Mt(t);
  return s.start(Ge("", s, e, n)), s.animation;
}
const it = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Tt = typeof window < "u" && window.MotionDebug !== void 0,
  ue = ["", "X", "Y", "Z"],
  el = { visibility: "hidden" },
  as = 1e3;
let nl = 0;
function ce(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Ri(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = ci(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", C, !(i || r));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Ri(s);
}
function Ei({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = e?.()) {
      (this.id = nl++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Tt &&
              (it.totalNodes =
                it.resolvedTargetDeltas =
                it.recalculatedProjection =
                  0),
            this.nodes.forEach(ol),
            this.nodes.forEach(cl),
            this.nodes.forEach(hl),
            this.nodes.forEach(rl),
            Tt && window.MotionDebug.record(it);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Za());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new qe()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Qa(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h;
        const d = () => (this.root.updateBlockedByResize = !1);
        t(o, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = Ja(d, 250)),
            Ot.hasAnimatedSinceResize &&
              ((Ot.hasAnimatedSinceResize = !1), this.nodes.forEach(us));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: f,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || gl,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } =
                  c.getProps(),
                v = !this.targetLayout || !Di(this.targetLayout, m) || f,
                x = !d && f;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                x ||
                (d && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, x);
                const A = { ...je(g, "layout"), onPlay: T, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                d || us(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Q(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(dl),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ri(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        (h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ls);
        return;
      }
      this.isUpdating || this.nodes.forEach(ll),
        (this.isUpdating = !1),
        this.nodes.forEach(ul),
        this.nodes.forEach(sl),
        this.nodes.forEach(il),
        this.clearAllSnapshots();
      const a = $.now();
      (L.delta = Y(0, 1e3 / 60, a - L.timestamp)),
        (L.timestamp = a),
        (L.isProcessing = !0),
        ee.update.process(L),
        ee.preRender.process(L),
        ee.render.process(L),
        (L.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Qe.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(al), this.sharedNodes.forEach(fl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        C.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      C.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = R()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Mi(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || st(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        yl(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return R();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(vl)
        )
      ) {
        const { scroll: c } = this.root;
        c && (dt(l.x, c.offset.x), dt(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = R();
      if ((U(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot))
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: h, options: d } = c;
        c !== this.root &&
          h &&
          d.layoutScroll &&
          (h.wasRoot && U(l, o), dt(l.x, h.offset.x), dt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = R();
      U(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ft(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          st(c.latestValues) && ft(l, c.latestValues);
      }
      return st(this.latestValues) && ft(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = R();
      U(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !st(u.latestValues)) continue;
        Ve(u.latestValues) && u.updateSnapshot();
        const c = R(),
          h = u.measurePageBox();
        U(c, h),
          es(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return st(this.latestValues) && es(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (
          ((this.resolvedRelativeTargetAt = L.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1
            ? ((this.relativeParent = f),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = R()),
              (this.relativeTargetOrigin = R()),
              wt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              U(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = R()), (this.targetWithTransforms = R())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                xa(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : U(this.target, this.layout.layoutBox),
                  Pi(this.target, this.targetDelta))
                : U(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = f),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = R()),
                (this.relativeTargetOrigin = R()),
                wt(this.relativeTargetOrigin, this.target, f.target),
                U(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Tt && it.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ve(this.parent.latestValues) ||
          Ti(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === L.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || h))
      )
        return;
      U(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      Ma(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = R()));
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Jn(this.prevProjectionDelta.x, this.projectionDelta.x),
          Jn(this.prevProjectionDelta.y, this.projectionDelta.y)),
        St(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !rs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !rs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Tt && it.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ht()),
        (this.projectionDelta = ht()),
        (this.projectionDeltaWithTransform = ht());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        h = ht();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = R(),
        f = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = f !== m,
        T = this.getStack(),
        p = !T || T.members.length <= 1,
        v = !!(g && !p && this.options.crossfade === !0 && !this.path.some(pl));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (A) => {
        const S = A / 1e3;
        cs(h.x, o.x, S),
          cs(h.y, o.y, S),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (wt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ml(this.relativeTarget, this.relativeTargetOrigin, d, S),
            x && Ga(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = R()),
            U(x, this.relativeTarget)),
          g &&
            ((this.animationValues = c), _a(c, u, this.latestValues, S, v, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Q(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = C.update(() => {
          (Ot.hasAnimatedSinceResize = !0),
            (this.currentAnimation = tl(0, as, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(as),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Li(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || R();
          const h = O(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + h);
          const d = O(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
        }
        U(a, l),
          ft(a, c),
          St(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Xa()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && ce("z", o, u, this.animationValues);
      for (let c = 0; c < ue.length; c++)
        ce(`rotate${ue[c]}`, o, u, this.animationValues),
          ce(`skew${ue[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return el;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Nt(o?.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Nt(o?.pointerEvents) || "")),
          this.hasProjected &&
            !st(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ya(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: f, y: m } = this.projectionDelta;
      (u.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`),
        h.animationValues
          ? (u.opacity =
              h === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              h === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const g in zt) {
        if (d[g] === void 0) continue;
        const { correct: T, applyTo: p } = zt[g],
          v = u.transform === "none" ? d[g] : T(d[g], h);
        if (p) {
          const x = p.length;
          for (let A = 0; A < x; A++) u[p[A]] = v;
        } else u[g] = v;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = h === this ? Nt(o?.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ls),
        this.root.sharedNodes.clear();
    }
  };
}
function sl(t) {
  t.updateLayout();
}
function il(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: r } = t.options,
      o = n.source !== t.layout.source;
    r === "size"
      ? _((h) => {
          const d = o ? n.measuredBox[h] : n.layoutBox[h],
            f = O(d);
          (d.min = s[h].min), (d.max = d.min + f);
        })
      : Li(r, n.layoutBox, s) &&
        _((h) => {
          const d = o ? n.measuredBox[h] : n.layoutBox[h],
            f = O(s[h]);
          (d.max = d.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + f));
        });
    const a = ht();
    St(a, s, n.layoutBox);
    const l = ht();
    o ? St(l, t.applyTransform(i, !0), n.measuredBox) : St(l, s, n.layoutBox);
    const u = !Mi(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const m = R();
          wt(m, n.layoutBox, d.layoutBox);
          const g = R();
          wt(g, s, f.layoutBox),
            Di(m, g) || (c = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = h));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function ol(t) {
  Tt && it.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function rl(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function al(t) {
  t.clearSnapshot();
}
function ls(t) {
  t.clearMeasurements();
}
function ll(t) {
  t.isLayoutDirty = !1;
}
function ul(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function us(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function cl(t) {
  t.resolveTargetDelta();
}
function hl(t) {
  t.calcProjection();
}
function dl(t) {
  t.resetSkewAndRotation();
}
function fl(t) {
  t.removeLeadSnapshot();
}
function cs(t, e, n) {
  (t.translate = M(e.translate, 0, n)),
    (t.scale = M(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function hs(t, e, n, s) {
  (t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s));
}
function ml(t, e, n, s) {
  hs(t.x, e.x, n.x, s), hs(t.y, e.y, n.y, s);
}
function pl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const gl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ds = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  fs = ds("applewebkit/") && !ds("chrome/") ? Math.round : k;
function ms(t) {
  (t.min = fs(t.min)), (t.max = fs(t.max));
}
function yl(t) {
  ms(t.x), ms(t.y);
}
function Li(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !va(os(e), os(n), 0.2))
  );
}
function vl(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const xl = Ei({
    attachResizeListener: (t, e) => H(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  he = { current: void 0 },
  ji = Ei({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!he.current) {
        const t = new xl({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (he.current = t);
      }
      return he.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Tl = {
    pan: { Feature: Fa },
    drag: { Feature: ja, ProjectionNode: ji, MeasureLayout: bi },
  };
function Pl(t, e, n) {
  var s;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let i = document;
    const r = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(t);
    return r ? Array.from(r) : [];
  }
  return Array.from(t);
}
function ps(t) {
  return (e) => {
    e.pointerType === "touch" || fi() || t(e);
  };
}
function Sl(t, e, n = {}) {
  const s = new AbortController(),
    i = { passive: !0, ...n, signal: s.signal },
    r = ps((o) => {
      const { target: a } = o,
        l = e(o);
      if (!l || !a) return;
      const u = ps((c) => {
        l(c), a.removeEventListener("pointerleave", u);
      });
      a.addEventListener("pointerleave", u, i);
    });
  return (
    Pl(t).forEach((o) => {
      o.addEventListener("pointerenter", r, i);
    }),
    () => s.abort()
  );
}
function gs(t, e, n) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", n);
  const i = s[n ? "onHoverStart" : "onHoverEnd"];
  i && C.postRender(() => i(e, Lt(e)));
}
class wl extends et {
  mount() {
    const { current: e, props: n } = this.node;
    e &&
      (this.unmount = Sl(
        e,
        (s) => (gs(this.node, s, !0), (i) => gs(this.node, i, !1)),
        { passive: !n.onHoverStart && !n.onHoverEnd },
      ));
  }
  unmount() {}
}
class Al extends et {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Z(
      H(this.node.current, "focus", () => this.onFocus()),
      H(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Fi = (t, e) => (e ? (t === e ? !0 : Fi(t, e.parentElement)) : !1);
function de(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, Lt(n));
}
class bl extends et {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = k),
      (this.removeEndListeners = k),
      (this.removeAccessibleListeners = k),
      (this.startPointerPress = (e, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const s = this.node.getProps(),
          r = J(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: h,
                } = this.node.getProps(),
                d = !h && !Fi(this.node.current, a.target) ? c : u;
              d && C.update(() => d(a, l));
            },
            { passive: !(s.onTap || s.onPointerUp) },
          ),
          o = J(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        (this.removeEndListeners = Z(r, o)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (r) => {
            if (r.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                de("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && C.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = H(this.node.current, "keyup", o)),
              de("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = H(this.node.current, "keydown", e),
          s = () => {
            this.isPressing && de("cancel", (r, o) => this.cancelPress(r, o));
          },
          i = H(this.node.current, "blur", s);
        this.removeAccessibleListeners = Z(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      s && C.postRender(() => s(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !fi()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && C.postRender(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = J(
        e.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(e.onTapStart || e.onPointerStart) },
      ),
      s = H(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Z(n, s);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Me = new WeakMap(),
  fe = new WeakMap(),
  Vl = (t) => {
    const e = Me.get(t.target);
    e && e(t);
  },
  Cl = (t) => {
    t.forEach(Vl);
  };
function Ml({ root: t, ...e }) {
  const n = t || document;
  fe.has(n) || fe.set(n, {});
  const s = fe.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Cl, { root: t, ...e })), s[i];
}
function Dl(t, e, n) {
  const s = Ml(e);
  return (
    Me.set(t, n),
    s.observe(t),
    () => {
      Me.delete(t), s.unobserve(t);
    }
  );
}
const Rl = { some: 0, all: 1 };
class El extends et {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: r } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : Rl[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), r && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(),
          d = u ? c : h;
        d && d(l);
      };
    return Dl(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ll(e, n)) && this.startObserver();
  }
  unmount() {}
}
function Ll({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const jl = {
    inView: { Feature: El },
    tap: { Feature: bl },
    focus: { Feature: Al },
    hover: { Feature: wl },
  },
  Fl = { layout: { ProjectionNode: ji, MeasureLayout: bi } },
  tn = y.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Zt = y.createContext({}),
  en = typeof window < "u",
  ki = en ? y.useLayoutEffect : y.useEffect,
  Bi = y.createContext({ strict: !1 });
function kl(t, e, n, s, i) {
  var r, o;
  const { visualElement: a } = y.useContext(Zt),
    l = y.useContext(Bi),
    u = y.useContext(qt),
    c = y.useContext(tn).reducedMotion,
    h = y.useRef();
  (s = s || l.renderer),
    !h.current &&
      s &&
      (h.current = s(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = h.current,
    f = y.useContext(Ai);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    Bl(h.current, n, i, f);
  const m = y.useRef(!1);
  y.useInsertionEffect(() => {
    d && m.current && d.update(n, u);
  });
  const g = n[ui],
    T = y.useRef(
      !!g &&
        !(
          !((r = window.MotionHandoffIsComplete) === null || r === void 0) &&
          r.call(window, g)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, g)),
    );
  return (
    ki(() => {
      d &&
        ((m.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Qe.render(d.render),
        T.current && d.animationState && d.animationState.animateChanges());
    }),
    y.useEffect(() => {
      d &&
        (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, g);
          }),
          (T.current = !1)));
    }),
    d
  );
}
function Bl(t, e, n, s) {
  const {
    layoutId: i,
    layout: r,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : Ii(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: r,
      alwaysMeasureLayout: !!o || (a && ct(a)),
      visualElement: t,
      animationType: typeof r == "string" ? r : "both",
      initialPromotionConfig: s,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Ii(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Ii(t.parent);
}
function Il(t, e, n) {
  return y.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : ct(n) && (n.current = s));
    },
    [e],
  );
}
function Jt(t) {
  return Gt(t.animate) || Le.some((e) => bt(t[e]));
}
function Oi(t) {
  return !!(Jt(t) || t.variants);
}
function Ol(t, e) {
  if (Jt(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || bt(n) ? n : void 0,
      animate: bt(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Nl(t) {
  const { initial: e, animate: n } = Ol(t, y.useContext(Zt));
  return y.useMemo(() => ({ initial: e, animate: n }), [ys(e), ys(n)]);
}
function ys(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const vs = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gt = {};
for (const t in vs) gt[t] = { isEnabled: (e) => vs[t].some((n) => !!e[n]) };
function Ul(t) {
  for (const e in t) gt[e] = { ...gt[e], ...t[e] };
}
const _l = Symbol.for("motionComponentSymbol");
function Kl({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i,
}) {
  t && Ul(t);
  function r(a, l) {
    let u;
    const c = { ...y.useContext(tn), ...a, layoutId: Wl(a) },
      { isStatic: h } = c,
      d = Nl(a),
      f = s(a, h);
    if (!h && en) {
      $l();
      const m = zl(c);
      (u = m.MeasureLayout),
        (d.visualElement = kl(i, f, c, e, m.ProjectionNode));
    }
    return b.jsxs(Zt.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? b.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, a, Il(f, d.visualElement, l), f, h, d.visualElement),
      ],
    });
  }
  const o = y.forwardRef(r);
  return (o[_l] = i), o;
}
function Wl({ layoutId: t }) {
  const e = y.useContext(Je).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function $l(t, e) {
  y.useContext(Bi).strict;
}
function zl(t) {
  const { drag: e, layout: n } = gt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout:
      e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const Hl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function nn(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Hl.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Ni(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const r in n) t.style.setProperty(r, n[r]);
}
const Ui = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function _i(t, e, n, s) {
  Ni(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Ui.has(i) ? i : Ze(i), e.attrs[i]);
}
function Ki(t, { layout: e, layoutId: n }) {
  return (
    at.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!zt[t] || t === "opacity"))
  );
}
function sn(t, e, n) {
  var s;
  const { style: i } = t,
    r = {};
  for (const o in i)
    (F(i[o]) ||
      (e.style && F(e.style[o])) ||
      Ki(o, t) ||
      ((s = n?.getValue(o)) === null || s === void 0 ? void 0 : s.liveStyle) !==
        void 0) &&
      (r[o] = i[o]);
  return r;
}
function Wi(t, e, n) {
  const s = sn(t, e, n);
  for (const i in t)
    if (F(t[i]) || F(e[i])) {
      const r =
        Dt.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[r] = t[i];
    }
  return s;
}
function on(t) {
  const e = y.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
function Gl(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  s,
  i,
  r,
) {
  const o = { latestValues: Xl(s, i, r, t), renderState: e() };
  return n && (o.mount = (a) => n(s, a, o)), o;
}
const $i = (t) => (e, n) => {
  const s = y.useContext(Zt),
    i = y.useContext(qt),
    r = () => Gl(t, e, s, i);
  return n ? r() : on(r);
};
function Xl(t, e, n, s) {
  const i = {},
    r = s(t, {});
  for (const d in r) i[d] = Nt(r[d]);
  let { initial: o, animate: a } = t;
  const l = Jt(t),
    u = Oi(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? a : o;
  if (h && typeof h != "boolean" && !Gt(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const m = Re(t, d[f]);
      if (m) {
        const { transitionEnd: g, transition: T, ...p } = m;
        for (const v in p) {
          let x = p[v];
          if (Array.isArray(x)) {
            const A = c ? x.length - 1 : 0;
            x = x[A];
          }
          x !== null && (i[v] = x);
        }
        for (const v in g) i[v] = g[v];
      }
    }
  }
  return i;
}
const rn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  zi = () => ({ ...rn(), attrs: {} }),
  Hi = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Yl = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ql = Dt.length;
function Zl(t, e, n) {
  let s = "",
    i = !0;
  for (let r = 0; r < ql; r++) {
    const o = Dt[r],
      a = t[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Hi(a, Ue[o]);
      if (!l) {
        i = !1;
        const c = Yl[o] || o;
        s += `${c}(${u}) `;
      }
      n && (e[o] = u);
    }
  }
  return (s = s.trim()), n ? (s = n(e, i ? "" : s)) : i && (s = "none"), s;
}
function an(t, e, n) {
  const { style: s, vars: i, transformOrigin: r } = t;
  let o = !1,
    a = !1;
  for (const l in e) {
    const u = e[l];
    if (at.has(l)) {
      o = !0;
      continue;
    } else if (Os(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Hi(u, Ue[l]);
      l.startsWith("origin") ? ((a = !0), (r[l] = c)) : (s[l] = c);
    }
  }
  if (
    (e.transform ||
      (o || n
        ? (s.transform = Zl(e, t.transform, n))
        : s.transform && (s.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = r;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
function xs(t, e, n) {
  return typeof t == "string" ? t : P.transform(e + n * t);
}
function Jl(t, e, n) {
  const s = xs(e, t.x, t.width),
    i = xs(n, t.y, t.height);
  return `${s} ${i}`;
}
const Ql = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  tu = { offset: "strokeDashoffset", array: "strokeDasharray" };
function eu(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const r = i ? Ql : tu;
  t[r.offset] = P.transform(-s);
  const o = P.transform(e),
    a = P.transform(n);
  t[r.array] = `${o} ${a}`;
}
function ln(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: r,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  h,
) {
  if ((an(t, u, h), c)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: d, style: f, dimensions: m } = t;
  d.transform && (m && (f.transform = d.transform), delete d.transform),
    m &&
      (i !== void 0 || r !== void 0 || f.transform) &&
      (f.transformOrigin = Jl(
        m,
        i !== void 0 ? i : 0.5,
        r !== void 0 ? r : 0.5,
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    o !== void 0 && eu(d, o, a, l, !1);
}
const un = (t) => typeof t == "string" && t.toLowerCase() === "svg",
  nu = {
    useVisualState: $i({
      scrapeMotionValuesFromProps: Wi,
      createRenderState: zi,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        C.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          C.render(() => {
            ln(n, s, un(e.tagName), t.transformTemplate), _i(e, n);
          });
      },
    }),
  },
  su = {
    useVisualState: $i({
      scrapeMotionValuesFromProps: sn,
      createRenderState: rn,
    }),
  };
function Gi(t, e, n) {
  for (const s in e) !F(e[s]) && !Ki(s, n) && (t[s] = e[s]);
}
function iu({ transformTemplate: t }, e) {
  return y.useMemo(() => {
    const n = rn();
    return an(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function ou(t, e) {
  const n = t.style || {},
    s = {};
  return Gi(s, n, t), Object.assign(s, iu(t, e)), s;
}
function ru(t, e) {
  const n = {},
    s = ou(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const au = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ht(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    au.has(t)
  );
}
let Xi = (t) => !Ht(t);
function lu(t) {
  t && (Xi = (e) => (e.startsWith("on") ? !Ht(e) : t(e)));
}
try {
  lu(require("@emotion/is-prop-valid").default);
} catch {}
function uu(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((Xi(i) ||
        (n === !0 && Ht(i)) ||
        (!e && !Ht(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
function cu(t, e, n, s) {
  const i = y.useMemo(() => {
    const r = zi();
    return (
      ln(r, e, un(s), t.transformTemplate),
      { ...r.attrs, style: { ...r.style } }
    );
  }, [e]);
  if (t.style) {
    const r = {};
    Gi(r, t.style, t), (i.style = { ...r, ...i.style });
  }
  return i;
}
function hu(t = !1) {
  return (n, s, i, { latestValues: r }, o) => {
    const l = (nn(n) ? cu : ru)(s, r, o, n),
      u = uu(s, typeof n == "string", t),
      c = n !== y.Fragment ? { ...u, ...l, ref: i } : {},
      { children: h } = s,
      d = y.useMemo(() => (F(h) ? h.get() : h), [h]);
    return y.createElement(n, { ...c, children: d });
  };
}
function du(t, e) {
  return function (s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(nn(s) ? nu : su),
      preloadedFeatures: t,
      useRender: hu(i),
      createVisualElement: e,
      Component: s,
    };
    return Kl(o);
  };
}
const De = { current: null },
  Yi = { current: !1 };
function fu() {
  if (((Yi.current = !0), !!en))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (De.current = t.matches);
      t.addListener(e), e();
    } else De.current = !1;
}
function mu(t, e, n) {
  for (const s in e) {
    const i = e[s],
      r = n[s];
    if (F(i)) t.addValue(s, i);
    else if (F(r)) t.addValue(s, Mt(i, { owner: t }));
    else if (r !== i)
      if (t.hasValue(s)) {
        const o = t.getValue(s);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = t.getStaticValue(s);
        t.addValue(s, Mt(o !== void 0 ? o : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Ts = new WeakMap(),
  pu = [..._s, j, tt],
  gu = (t) => pu.find(Us(t)),
  Ps = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class yu {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      blockInitialAnimation: r,
      visualState: o,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ie),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = $.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), C.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = Jt(n)),
      (this.isVariantNode = Oi(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && F(f) && f.set(l[d], !1);
    }
  }
  mount(e) {
    (this.current = e),
      Ts.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      Yi.current || fu(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : De.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ts.delete(this.current),
      this.projection && this.projection.unmount(),
      Q(this.notifyUpdate),
      Q(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = at.has(e),
      i = n.on("change", (a) => {
        (this.latestValues[e] = a),
          this.props.onUpdate && C.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      r = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        i(), r(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in gt) {
      const n = gt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < Ps.length; s++) {
      const i = Ps[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const r = "on" + i,
        o = e[r];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = mu(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = Mt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    var s;
    let i =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (s = this.getBaseTargetFromProps(this.props, e)) !== null &&
            s !== void 0
          ? s
          : this.readValueFromInstance(this.current, e, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Bs(i) || ks(i))
          ? (i = parseFloat(i))
          : !gu(i) && tt.test(n) && (i = Ys(e, n)),
        this.setBaseTarget(e, F(i) ? i.get() : i)),
      F(i) ? i.get() : i
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const o = Re(
        this.props,
        s,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[e]);
    }
    if (s && i !== void 0) return i;
    const r = this.getBaseTargetFromProps(this.props, e);
    return r !== void 0 && !F(r)
      ? r
      : this.initialValues[e] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new qe()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class qi extends yu {
  constructor() {
    super(...arguments), (this.KeyframeResolver = qs);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function vu(t) {
  return window.getComputedStyle(t);
}
class xu extends qi {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ni);
  }
  readValueFromInstance(e, n) {
    if (at.has(n)) {
      const s = _e(n);
      return (s && s.default) || 0;
    } else {
      const s = vu(e),
        i = (Os(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Si(e, n);
  }
  build(e, n, s) {
    an(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return sn(e, n, s);
  }
}
class Tu extends qi {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = R);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (at.has(n)) {
      const s = _e(n);
      return (s && s.default) || 0;
    }
    return (n = Ui.has(n) ? n : Ze(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Wi(e, n, s);
  }
  build(e, n, s) {
    ln(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    _i(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = un(e.tagName)), super.mount(e);
  }
}
const Pu = (t, e) =>
    nn(t) ? new Tu(e) : new xu(e, { allowProjection: t !== y.Fragment }),
  Su = du({ ...la, ...jl, ...Tl, ...Fl }, Pu),
  At = io(Su);
class wu extends y.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Au({ children: t, isPresent: e }) {
  const n = y.useId(),
    s = y.useRef(null),
    i = y.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: r } = y.useContext(tn);
  return (
    y.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (e || !s.current || !o || !a) return;
      s.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        r && (c.nonce = r),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [e]),
    b.jsx(wu, {
      isPresent: e,
      childRef: s,
      sizeRef: i,
      children: y.cloneElement(t, { ref: s }),
    })
  );
}
const bu = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: r,
  mode: o,
}) => {
  const a = on(Vu),
    l = y.useId(),
    u = y.useCallback(
      (h) => {
        a.set(h, !0);
        for (const d of a.values()) if (!d) return;
        s && s();
      },
      [a, s],
    ),
    c = y.useMemo(
      () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (h) => (a.set(h, !1), () => a.delete(h)),
      }),
      r ? [Math.random(), u] : [n, u],
    );
  return (
    y.useMemo(() => {
      a.forEach((h, d) => a.set(d, !1));
    }, [n]),
    y.useEffect(() => {
      !n && !a.size && s && s();
    }, [n]),
    o === "popLayout" && (t = b.jsx(Au, { isPresent: n, children: t })),
    b.jsx(qt.Provider, { value: c, children: t })
  );
};
function Vu() {
  return new Map();
}
const Bt = (t) => t.key || "";
function Ss(t) {
  const e = [];
  return (
    y.Children.forEach(t, (n) => {
      y.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Cu = ({
    children: t,
    exitBeforeEnter: e,
    custom: n,
    initial: s = !0,
    onExitComplete: i,
    presenceAffectsLayout: r = !0,
    mode: o = "sync",
  }) => {
    const a = y.useMemo(() => Ss(t), [t]),
      l = a.map(Bt),
      u = y.useRef(!0),
      c = y.useRef(a),
      h = on(() => new Map()),
      [d, f] = y.useState(a),
      [m, g] = y.useState(a);
    ki(() => {
      (u.current = !1), (c.current = a);
      for (let v = 0; v < m.length; v++) {
        const x = Bt(m[v]);
        l.includes(x) ? h.delete(x) : h.get(x) !== !0 && h.set(x, !1);
      }
    }, [m, l.length, l.join("-")]);
    const T = [];
    if (a !== d) {
      let v = [...a];
      for (let x = 0; x < m.length; x++) {
        const A = m[x],
          S = Bt(A);
        l.includes(S) || (v.splice(x, 0, A), T.push(A));
      }
      o === "wait" && T.length && (v = T), g(Ss(v)), f(a);
      return;
    }
    const { forceRender: p } = y.useContext(Je);
    return b.jsx(b.Fragment, {
      children: m.map((v) => {
        const x = Bt(v),
          A = a === m || l.includes(x),
          S = () => {
            if (h.has(x)) h.set(x, !0);
            else return;
            let V = !0;
            h.forEach((E) => {
              E || (V = !1);
            }),
              V && (p?.(), g(c.current), i && i());
          };
        return b.jsx(
          bu,
          {
            isPresent: A,
            initial: !u.current || s ? void 0 : !1,
            custom: A ? void 0 : n,
            presenceAffectsLayout: r,
            mode: o,
            onExitComplete: A ? void 0 : S,
            children: v,
          },
          x,
        );
      }),
    });
  },
  Mu = (t) =>
    b.jsxs(At.svg, {
      xmlns: "http://www.w3.org/2000/svg",
      width: 90,
      height: 30,
      fill: "none",
      viewBox: "0 0 340 168",
      ...t,
      children: [
        b.jsx("path", {
          fill: "#fff",
          d: "m85.94 165.57.35.12.44.43.27.94v.27l-.31.35-.2.14-.68.07-.39.01-1.01-.2-.55-.13-1.31-.47-.45-.18-.56-.26-.22-.11-.07-.19.03-.09.44-.19 1.26-.36.63-.17 1.07-.12.5-.02m2.34-44.82.55.18.05.07.18.47.09.29.26.89.14.49.33 1.24.17.66.38 1.54.39 1.6.9 3.83.45 1.98.95 4.25.47 2.13.9 4.18.43 2.04.74 3.64.17.86.29 1.52.35 1.96.1.58.12.87.08.85v.59l-.3 1.08-.2.53-.63.96-.35.45-.9.79-.47.37-1.09.58-.56.26-1.2.35-.61.14-1.25.08-.63.01-1.23-.22-.61-.15-1.14-.56-.12-.07-.33-.43-.18-.26-.42-.78-.22-.44-.5-1.11-.26-.59-.58-1.41-.29-.74-.97-2.56-.69-1.94-2.21-6.6-.7-2.2-1.32-4.11-.64-1.98-1.1-3.39-.25-.78-.45-1.37-.21-.65-.35-1.06-.16-.49-.24-.7-.21-.6-.08-.23.11-.45.1-.23.49-.45.29-.22.88-.45 1.73-.67 1.11-.36 1.74-.78.37-.18.5-.32.32-.36v-.13l.32-.3.2-.15.64-.32.7-.32 1.91-.59.96-.27 1.78-.3.39-.05M92 156l-.71.29-.29.43v.28l.11.53.18.18.43.29H92l.71-.29.29-.43V157l-.29-.71-.43-.29m181.18-18.72 1.04.37.27.11 1.22.36.69.2 1.88.52.99.26 2.3.6 3.65.91.99.24 1.65.41.77.2 1.21.31.55.15.8.24.35.11.41.17.15.08.04.11-.02.05-.31.06-.19.03-.62.03-1.28.02h-.62l-1.51-.11-.79-.07-1.7-.22-1.7-.24-3.08-.7-1.35-.37-2.58-1.06-.59-.27-.97-.53-1.01-.74-.37-.37-.45-.49-.17-.2-.05-.19.03-.06m16.19-134 .43.07.73.29.85.69.21.26.81.45.48.21 1.37.36.76.17 1.96.28 3.62.34 2.06.14 3.87.52 1.9.3 3.54.84 1.74.46 3.22 1.17 1.57.62 2.89 1.48 1.41.78 2.57 1.8 1.25.94 2.24 2.12 1.08 1.1 1.92 2.43.92 1.26 1.59 2.75.76 1.42 1.26 3.07.59 1.57.94 3.39.43 1.73.61 3.7.26 1.89.29 4.02.1 2.05-.05 4.33-.06 2.2-.38 4.64-.23 2.37-.7 4.95-1.42 7.79-.58 2.76-1.36 5.46-.7 2.72-1.6 5.31-.83 2.63-1.8 5.09-.93 2.51-1.97 4.77-1.01 2.34-2.11 4.38-1.07 2.13-2.21 3.91-1.11 1.88-2.27 3.34-3.45 4.29-1.15 1.26-2.45 2.22-1.25 1.06-2.63 1.81-1.33.85-2.76 1.39-1.39.64-2.84.96-1.43.42-2.89.52-1.45.2-2.9.05-1.45-.03-2.87-.41-1.42-.27-2.8-.89-1.69-.62-3.18-1.68-1.56-.91-2.87-2.22-1.4-1.18-2.54-2.72-1.22-1.42-2.19-3.18-1.04-1.65-1.8-3.6-.85-1.84-1.38-3.98-.64-2.03-.95-4.31-.9-6.79-.06-.85-.05-2.1-.01-1.11.05-2.59.04-1.34.15-3 .09-1.54.25-3.34.27-3.41.79-7.57 1.53-11.93.16-1.09.64-2.74.37-1.44.98-3.25 1.06-3.32 2.71-7.12.7-1.73 1.41-3.27.71-1.58 1.35-2.77.67-1.3 1.19-2.02.29-.44.52-.71.7-.76.08-.07.28-.34.16-.19.39-.54 1.15-1.7-.54.93-.48 1.16v.3l.61.55.96.44.71.25 1.53.48.93.25 1.94.47 1.07.21 2.1.43.96.19 1.84.36.76.16 1.39.27.47.1.77.15.09.02.81-.36.69-.58-.19.38-.72 1.38-1.29 2.29-1.23 2.09-2.31 4.66-1.12 2.39-2.06 5.11-.99 2.6-1.72 5.35-2.11 8.05-.32 1.45-.56 3.35-.28 1.73-.46 3.77-.43 3.83-.52 8.07-.09 1.99-.09 3.82-.03 1.87.05 3.44.05 1.65.21 2.86.49 3.41.37 1.65 1.26 3.35.71 1.65 1.77 3.11.93 1.49 2.07 2.52 3.21 2.75.98.59 1.37.76.62.31.99.2.49.04 1.07-.32.58-.22 1.57-.81.58-.3 1.17-.81.59-.44 1.19-1.08 1.19-1.15 2.41-3.04 1.19-1.63 2.37-3.89 1.17-2.04 2.26-4.61 1.11-2.39 2.09-5.18 1.02-2.66 1.85-5.62.9-2.86 1.55-5.92 1.93-9.06.45-2.53.61-4.83.26-2.37.22-4.49.07-2.2-.15-4.1-.12-2-.51-3.66-.31-1.77-.87-3.17-.48-1.52-1.22-2.63-.65-1.24-1.56-2.03L311.5 29l-1.29-.8-3.08-1.25-1.59-.57-3.26-.72-1.59-.29-2.88-.09-.67.03-1.16.18-1.43.48-.7.38-.2.14.78-.69.12-.42-.24-.21-.69-.41-.71-.25-.78-.27-.48-.15-1.05-.32-.63-.19-3.44-.99-1.96-.52-.84-.2-1.58-.34-.66-.11-1.26-.16-.52-.02-.99.01-.4.07-.77.19-.32.15-1.14.8-.25.36.28-.53.19-.45.13-.82.02-.42-.22-.97-.71-1.9-.48-1.14-.42-1.93-.12-.92.34-1.66.27-.81 1.19-1.62 2.81-2.62 1.16-.94 2.45-1.4 1.22-.61 2.33-.7 1.11-.25m-21.11 111.55-.11.32.16 1.02.14.56.56 1.4.32.73.85 1.61.46.81 1.03 1.65.54.82 1.11 1.53.56.74 1.08 1.25.53.57.95.8 1.15.51h.22l.11-.32.01-.21-.27-.71-.19-.39-.65-1.06-.38-.57-1.01-1.37-.97-1.28-2-2.91-.47-.7-.81-1.29-.9-1.57-.23-.43-.43-.69-.22-.31-.38-.43-.19-.17-.29-.12M56.97 27.17l.64.09 1.14.51 1.39 1.31.34.52.6.65.33.26 1.02.18.31.01.8-.05.43-.04 1.1-.16.6-.09 1.48-.27 2.72-.51 1.26-.23 2.73-.4 1.39-.18 2.95-.27 2.98-.25 6.18-.16 3.06-.02 5.78.31 1.38.11 2.56.3 3.43.58 1.54.33 3.04.95 1.52.51 2.95 1.28 1.47.68 2.82 1.59 1.39.83 2.63 1.86 1.29.96 2.4 2.08 1.17 1.07 2.11 2.29 1.02 1.16 1.78 2.44 2.24 3.8.68 1.36.94 2.16.42 1.04.51 2 .21 1.04.2 2.44.04.66.04 1.53.02 2.64v.99l-.03 2.49-.07 1.4-.07 1.34-.35 2.14-.22 1.04-.75 2.04-1.71 3.65-.49.98-1.34 2.15-.73 1.09-1.72 2.31-1.81 2.33-4.4 4.75-2.26 2.33-4.77 4.19-1.18.98-2.31 1.72-3.29 2.14-2.19 1.27-4.6 2.38-2.32 1.17-4.75 2.15-2.37 1.05-4.72 1.86-2.34.88-4.51 1.52-2.21.7-4.13 1.11-2.01.5-3.57.64-1.7.26-2.84.13h-.65l-1.15-.11-.54-.07-.9-.26-.5-.18-.88-.58-.42-.31-.69-.8-.65-.84-.67-2.07-.23-1.06.25-2.09.13-.5.44-.91.97-1.17.48-.42 1.64-.95 2.63-1.17.41-.14 1.18-.54.63-.3 1.47-.8 4.66-2.86.74-.5 1.44-.9.03-.02-.56.35-1.3.85-.42.3-.69.52-.12.15-.09.23.17.01.49-.05.46-.12 3.2-1.23 2.46-1.24 1.15-.68 2.21-1.37.75-.59.69-.57.21-.23.33-.43v-.14l-.27-.67.64-.14.55-.16 1.56-.57.84-.33 1.98-.87 3.2-1.55 2.68-1.37 5.1-3.42 1.24-.89 2.32-1.88 1.14-.96 2.09-1.96 1.01-.99 1.78-1.98.86-.99 1.43-1.96.66-.96 1.02-1.86 1-2.63.32-1.28.38-2.41.07-.54.05-.89-.07-.88-.11-.36-.36-1.39-.55-2.35-.19-.87-.76-1.71-.43-.85-1.21-1.64-.65-.81-1.6-1.54-.85-.76-1.94-1.4-1.01-.68-2.24-1.22-1.15-.59-2.48-1.02-1.27-.48-2.66-.78-4.16-.84-.81-.12-1.83-.11-.94-.03-2 .07-2.03.1-4.15.61-1 .18-1.91.45-.92.23-1.65.54-.79.27-1.3.6-1.43.96-.14.13.48-.68.1-.35-.1-.11-.29-.17-.31-.04-.74-.06h-.55l-1.17.08-.54.14-.16.12-.25.27-.02.19.02.43.11.27.25.51-.41-.19-.34-.11-.94-.06h-.52l-1.28.13-.68.1-1.57.33-.82.18-1.81.51-.94.27-2.02.68-6.64 2.63-1.13.49-2.01.82-.97.39-1.73.61-.83.27-1.47.4-.71.17-1.24.18-.6.07-1.05-.02-.5-.04-.88-.23-2.15-1.42-.5-.55-.65-1.21-.28-.62-.22-1.32-.05-.67.21-1.41.16-.71.62-1.46.37-.73 1.02-1.48.56-.75 1.41-1.48.76-.74 1.78-1.45 3.08-2.12 1.18-.73 1.76-1.2.79-.57 1.08-.97.46-.47.52-.88.29-1.34v-.73l.4-1.35.25-.66.82-1.17.46-.56 1.12-.94.59-.43 1.3-.65.67-.29 1.37-.32.68-.11m65.38 75.59v.24l-.04.15-.29.48-.77 1.01-.25.3-1.08.92-.62.51-1.67 1.22-.89.64-2.03 1.4-1.05.7-2.19 1.42-1.09.7-2.13 1.32-1.04.63-1.85 1.06-.87.49-1.36.68-1.25.44h-.16l-.24-.24-.11-.14-.06-.42v-.11l.34-.37.21-.2.7-.5 3-1.72.58-.29 1.54-.88.82-.48 1.82-1.16 5.48-3.82.74-.55 1.29-.94.62-.45 1.06-.71.5-.33.8-.48.37-.21.55-.24.24-.1h.27m208.64-46.23-.11.06-.19.29-.27 1.59v.18l-.1.8-.07.46-.23 1.31-.13.72-.33 1.76-.18.93-.43 2.13-.22 1.11-.77 3.69-.57 2.68-.57 2.72-1.28 5.83-.64 2.93-1.31 5.84-.65 2.86-1.23 5.27-.29 1.25-1.31 5.38-.24.93-.41 1.56-.5 1.79-.22.73-.37 1.25-.17.6-.27 1-.24.93-.2 1.16-.05.46.19.28.69-.46.12-.13.48-1.01.26-.61.69-1.8.36-.98.82-2.35.42-1.22.87-2.66.39-1.23.87-3.11.45-1.65.95-3.76.48-1.94.98-4.17.48-2.12.95-4.32.46-2.16.87-4.24.42-2.09.73-3.9.34-1.88.54-3.31.54-4.05.13-1.3-.06-2.21-.04-.48-.15-.72-.32-.59-.13-.08M113.38 91.59l-1.3.8-.13.12-.54.38-.32.22-.88.56-.48.31-1.17.72-.62.37-1.41.85-1.47.88-3.45 2.02-1.78 1.03-3.8 2.18-1.92 1.09-3.77 2.13-1.85 1.03-3.38 1.85-.8.44-1.46.78-.7.38-1.23.64-.58.3-.95.48-1.06.49-.92.38-1.43.74-.3.17-.42.28-.26.3v.28l.57.18.39.03 1.42-.33.41-.12 1.53-.52 1.24-.48.65-.25 1.49-.62.79-.32 1.76-.77 1.49-.65 3.26-1.6 1.65-.84 3.41-1.86 1.71-.95 3.35-1.98 1.65-1 3.09-1.97 1.49-.97 2.61-1.83 1.22-.88 1.93-1.54.43-.36.69-.64.31-.31.45-.53.19-.24.18-.39-.06-.42-.18-.17M232.69.53l2.96 1.4.97.59 1.46 1.49.34.42.58 1 .27.53.49 1.27.23.68.4 1.62.2.86.35 2.03.17 1.07.33 2.51.47 4.36.16 1.61.37 2.76.19 1.3.42 2.12.21.98.47 1.45.74 1.39.51.56.45 1.13.14.56-.19 1.07-.16.52-.7.93-.4.44-1.09.73-.58.33-1.34.45-.69.18-1.46.09h-.74l-1.47-.33-2.06-1.07-.27-.2-.57-.66-.29-.37-.59-.97-.6-1.03-1.2-2.81-.6-1.51-1.11-3.53-1.43-5.79-.18-.87-.37-1.44-.19-.66-.4-1.01-.21-.45-.46-.59-.24-.24-.55-.17-.29-.03-.66.25-.34.17-.8.66-.42.38-.97 1.08-1.65 2.06-.64.84-.96 1.46-.43.7-.58 1.33-.25.66-.28 1.37-.16 2.3v.67l.09 1.17.07.57.31 1.04.19.51.64 1 .36.51 1.07 1.06.6.55 1.6 1.23.88.64 2.25 1.49 1.21.78 3 1.84 5.45 3.27 2.05 1.22 3.53 2.2 1.67 1.07 2.83 1.96 1.34.96 2.2 1.8 1.03.89 1.64 1.71.75.86 1.14 1.7.52.86.72 1.77.31.9.35 1.91.2 3.11v.9l-.15 1.62-.1.78-.37 1.48-.23.73-.65 1.47-1.32 2.34-.95 1.49-2.46 3.01-1.31 1.5-3.06 2.95-1.59 1.45-3.51 2.78-1.79 1.36-3.79 2.51-1.91 1.21-3.9 2.14-1.94 1.01-3.85 1.66-1.9.76-3.63 1.08-5.02.84-1.19.08-2.03.02-.96-.02-1.72-.19-.84-.12-1.59-.43-2.45-.92-1.28-.57-2.32-.63-.53-.11-.86-.06-.9.16-.09.05-.59.22-.36.12-1.07.35-.59.19-1.49.46-3.6 1.09-2.16.63-1.1.33-2.4.69-7.83 2.24-2.72.77-4.73 1.28-2.26.6-3.9.96-1.85.44-3.15.65-1.49.28-2.49.35-1.18.13-1.93.06-.9-.01-1.46-.22-.68-.15-1.08-.49-.5-.28-.79-.75-.24-.26-.42-.74-.2-.42-.37-1.12-.18-.62-.33-1.61-.16-.87-.3-2.17-.15-1.17-.28-2.84-.14-1.51-.29-3.6-.14-1.9-.28-4.45-.46-7.73-.13-2.37-.26-4.23-.13-2.07-.3-4.1-.15-2.08-.48-5.78-.22-2.6-.38-4.27-.22-2.41-.35-4.06-.16-1.91-.25-3.14-.11-1.47-.14-2.36-.06-1.09-.04-1.7-.01-.79.06-1.18.04-.39.15.05.63.02.4-.15.83-.41.41-.33.78-.73.29-.45.66-1.5-.13-.48.32.22-.2.89-.17.27.29.32.24.12 1.01.03.58-.02 1.61-.26 2.99-.69.15-.04.27.1.14.08.25.41.12.24.23.77.12.44.23 1.21.12.66.24 1.72.12.92.4 3.5.29 2.92.49 5.17.23 2.54.45 5.23.21 2.6.46 6.08.15 2.19.08 1.07.12 1.92.05.92.09 1.57.07 1.88.02.74.05 1.24.02.58.05.94.02.43.06.65.03.29.06.37.07.3.18-.18.27-1.05-.1 1.2-.29 1.8-.18.69-.28 1.04-.06.32-.06.48.07.05.22-.03.23-.19.54-.5.42-.42.27-.22-.18.56-.13.57-.13 1.62-.04.87.04 2.04.03 1.04.17 2.19.1 1.09.28 2.09.15 1.01.37 1.74.2.8.44 1.12.7.73h.1l.51-.08.31-.06.89-.18.49-.1 1.23-.27.65-.14 1.5-.35 1.58-.36 3.79-.91L172 94l2.19-.55 4.14-1 2-.48 3.47-.8.81-.18 1.42-.3.68-.15 1.12-.22.52-.11.77-.13.71-.08h.37l.58-.2.27-.14.43-.53.2-.32.31-.94.41-1.97.2-1.28.66-2.39.37-1.19 1.06-2.33.59-1.17 1.54-2.43 2.94-3.94.59-.73 1.08-1.24.53-.58.99-.96.48-.44.91-.69.44-.31.86-.43.84-.37h1.6l2.48 1.03.47.31.72.6.32.3.41.62.17.31.14.66-.09 1.09-.24 1.03-.69 2.16-.37 1.07-.88 2.06-.44.99-.95 1.69-1.35 1.85-.62.63-.91 1.48-.39.76-.44 1.57-.15.78.08 1.44.75 1.77.27.33.75.45.4.2.98.21.52.07 1.18-.03.62-.04 1.35-.24 1.39-.29 3.15-1.14 1.61-.65 3.39-1.76 1.7-.95 3.38-2.23 1.66-1.16 3.09-2.55 1.49-1.3 2.54-2.73 2.9-4.13.43-.8.55-1.16.22-.53.15-.82.02-.4-.25-.76-.79-1.37-.11-.16-.45-.46-.27-.25-.75-.62-.81-.66-2.33-1.69-1.25-.89-3-1.98-4.91-3.08-1.37-.83-3.77-2.37-2.27-1.51-2.2-1.48-3.64-2.8-1.7-1.37-2.68-2.64-1.23-1.31-1.78-2.59-.78-1.3-.94-2.65-.38-1.34-.17-2.82.01-1.43.53-3.08 1.54-5.04.33-.88.9-1.82.49-.91 1.19-1.85 1.25-1.85 3.13-3.55 1.63-1.72 3.62-3 .92-.69L219.4 4l2.77-1.5 1.61-.75 2.62-.96 1.24-.39 2.12-.26 1.02-.04M57.55 105.51l.27.24.2.88.04.49-.28 1.12-.98 1.56-.47.47-.75.5-.35.18-.53-.08-.23-.11-.29-.64-.12-.4-.06-1.22v-.69l.12-1.08.3-.73h.11l.65-.18 1.24-.43.48-.18M29.72 62.49l1.62.3 2.95 1.07 1.42.61 2.6 1.72 3.57 3.33 1.14 1.3 1.74 2.46.79 1.22 1.1 2.5.48 1.27.55 2.75.3 4.7-.01 2.03-.71 3.82-.46 1.87-1.52 3.41-.85 1.65-2.21 2.91-1.18 1.38-2.77 2.32-1.45 1.07-3.21 1.63-1.65.72-3.54.85-1.79.33-3.73-.02-1.88-.13-3.8-.97-1.04-.34-1.95-.84-.95-.45-1.78-1.04-1.72-1.08-2.9-2.68-1.35-1.41-2.1-3.21-.94-1.65-1.26-3.56-.52-1.81-.37-3.76-.07-1.89.56-3.78.41-1.88 1.54-3.64.46-.9 1.09-1.73 1.94-2.5 1.32-1.5 2.66-2.35 1.35-1.07 2.85-1.53 1.47-.68 3.2-.8 5.38-.47h1.86m157.79 34.13-1.76.26-.99.18-2.59.65-1.36.36-3.09.92-3.15.96-6.44 2.26-1.51.55-2.68 1.04-1.25.51-1.9.85-.41.19-.63.34-.27.16-.33.25-.12.11.02.15.45.09h.04l.32-.08.2-.06.63-.18.69-.2 2.12-.66 1.17-.36 2.87-.91 1.5-.48L169 102l1.69-.55 3.23-1 1.56-.48 2.74-.8 1.28-.36 1.93-.49.42-.11.64-.13.61-.08h.49l.97-.33 1.03-.81.12-.2-.02-.28-.05-.12-.41-.11-.25-.04M19.85 65.53l-1.05.23-2.26 1.17-1.12.66-2.07 1.72-.97.89-1.43 1.87-.3.46-.4.87-.25 1.2v.83l.45.99.3.38 1 .12.57-.05 1.53-.76 2.8-2.11.96-.84 2.04-1.17 1.01-.49 1.92-.44.92-.13 1.49.32.34.13.53.41.56.85.23.6-.28 1.5-.25.8-1.2 1.84-.71.96-2.08 2.12-4.05 3.4-.41.31-.63.61-.28.3-.35.6-.06 1.79.14.37.37.5.21.22.61.23.35.08.99-.01 2.06-.26 1.12-.18.56-.08-.03.01-.73.55v.33l.25.46.41.07.97.04.62-.17 2.03-.43 1.31-.19L28 89l.68-.05.23-.08.02-.06-.04-.15-.13-.11-.31-.25-.26-.16-1.28-.36.76.03.59.05 1.1.28.54.17.96.49.45.27.77.66.35.35.54.79.23.4.27.88.09.45-.05.92-.47 1.4-.39.73-1.38 1.33-.76.63-1.85 1.01-.96.45-1.98.53-2.71.05-.59-.12-1.05.01-.51.04-.86.26-.4.16-.64.46-.29.25-.39.6-.16.31-.1.66-.01.34.22.67.15.33.58.61 1.29.79.91.39 2.28.3 1.19.08 2.54-.27 1.26-.2 2.39-.78 1.14-.44 1.83-1.22.8-.65 1.92-2.02 2.44-3.09.5-.75.64-1.13.28-.52.23-.86.06-.42-.15-.83-.62-1.49-.48-.97-1.16-1.8-.61-.87-1.33-1.54-.69-.72-1.4-1.16-2.07-1.18-.44-.17-.62-.35-.28-.17-.32-.4-.13-.21-.04-.48.23-.86.31-.72.47-1.79.21-.92.23-1.94.09-.95-.03-1.72-.38-1.95-.21-.48-.3-.93-.15-.95.03-.15-.31-.32-.21-.17-.71-.33-.79-.33-2.3-.57-1.2-.26-2.48-.3-.59-.05-1.06-.01m59.35 32.69-.16.41-.74 1.06-.66.44-.32.01-.76.2-.75.31-.47.24-1.9 1.01 1.25-.71.6-.32.96-.45.92-.29h.36l.73-.47.81-1.11.17-.44.25-.21m257.76-18.43.15.22.19.71.07.39.03 1v.53l-.1 1.2-.13 1.24-.65 2.71-1.46 3.76-.65 1.21-1.2 2.71-.28.64-.44 1.18-.45 1.41-.19.76-.58 1.18-.16.25-.3.34-.44.22h-.27l-.42-.08-.18-.05-.11-.14v-.04l.24-.68.15-.43.49-1.33.27-.73 1.85-4.86.82-2.14 1.3-4.22.27-.97.37-1.64.24-1.75v-.81l.29-1.24-.02.25.02.31.18 1.39.22.79.79 2.87.33-2.84.08-1.88-.11-.98-.13-.32-.09-.16M76.5 72.39l.64 2.63 1.19 4.92.83 3.4.26 1.08.71 2.9.41 1.65.19.78.32 1.27.14.59.22.84.19.73.09.32-.14.6-.14.29-.7.58-.43.3-1.37.66-2.92 1.15-1.04.38-1.58.66-.71.31-.95.54-.4.25-.32.42.2.5.21.13.07.22-.02.1-.36.16-.23.08-.78.09-1.6.06-4.01.02-6.09-23.23-.89-3.48-.43-1.67-.71-2.9-.34-1.38-.54-2.35-.26-1.11-.38-1.85-.17-.86-.32-2.01-.08-.95-.02-.43.06-.56.25-.45.16-.1.94-.33.56-.19 1.56-.45.84-.24 1.99-.51 3.23-.79 8.06-1.88M249.36 84.5l.09.03.01.26-.01.15-.18.5-.42 1-.32.7-.75 1.11-.92.75h-.11l-.6.3-.35.19-.99.61-.52.34-1.24.85-2.01 1.46-1.52 1.15-3.09 2.11-1.51 1-2.69 1.62-.62.36-1.09.58-.52.26-.82.36-.37.15-.5.11-.2.02-.11-.19v-.11l.38-.43.24-.24.78-.65.43-.34 1.08-.78 1.84-1.22.65-.41 1.59-1.08.82-.56 1.76-1.26.89-.64 1.72-1.29 2.32-1.81.9-.73 1.5-1.21.71-.56 1.65-1.27.79-.57.36-.25.5-.27.21-.1m-15.68 3.61-.46.14-.26.09-.72.31-.4.17-1.04.49-1.95.94-2.51 1.25-.83.41-1.51.81-.72.4-1.2.72-.55.34-.76.54-.49.53-.01.29.18.3.15.1.75-.17.24-.08.63-.26.35-.14.88-.41.47-.23 1.17-.57.62-.31 1.49-.75.81-.41 1.53-.83.74-.42 1.29-.78.6-.37.89-.64.75-.68.22-.36.04-.36-.04-.06-.22-.01m-32.43-10.88-.13.12-.35.49-.36.56-.88 1.86-.45 1-.86 2.31-.98 3.33-.18.82-.22 1.24-.09.56-.06.76v.31l.09.29.07.09.23-.17.13-.13.34-.6.19-.35.44-1 .23-.55.78-2.14.87-2.7.51-1.72.23-.82.37-1.4.17-.64.19-.92.05-.66-.08-.08m84.21-22.11.02.24-.15.9-.1.53-.37 1.46-.22.8-.61 2.01-1.17 3.6-.42 1.23-.81 2.8-.39 1.43-.7 2.92-.33 1.45-.52 2.71-.48 3.43-.11 1.27-.25 2.14-.13 1-.27 1.58-.14.72-.27.99-.13.43-.23.38-.12.12-.18-.24-.09-.21-.11-.89-.04-.54-.02-1.58.01-.87.11-2.28.14-2.54.46-4.35.26-2.08.74-3.71.42-1.81 1.11-3.43 2.18-5.21.47-.99.77-1.5.36-.68.54-.87.24-.36.32-.27.13-.06M118 87l-.71.29-.29.43V88l.11.52.18.19.43.29h.28l.71-.29.29-.44V88l-.29-.71-.43-.29m156.78-43-.43.76-.24.48-.63 1.58-.33.87-.78 2.18-.4 1.15-.85 2.59-.86 2.66-1.66 5.65-.39 1.37-.68 2.57-.8 3.39-.46 2.13-.76 4.31-.34 2.11-.5 3.82-.1.9-.15 1.6-.06.77-.05 1.28-.02.59.04.88.19.79.1.14.19.08h.1l.19-.2.41-1.45.02-.17.12-.68.07-.4.22-1.08.11-.59.3-1.44.16-.75.38-1.73.39-1.8.94-4.24.49-2.19 1.64-7.09 1.08-4.53.52-2.2.95-3.84.23-.9.41-1.59.19-.76.34-1.27.16-.59.25-.9.28-.86.29-.77.37-1.06.15-.47.09-.56.01-.23-.19-.21-.59-.1M64.89 67.57l-.07.69-.02.42.09 1.28.06.7.24 1.71.5 2.86.21 1.09.37 1.84.18.87.31 1.45.15.68.38 1.58.22.77.11.35.19.48.09.2.17.24.52-.04.08-.08v-.81l-.02-.5-.17-1.52-.1-.82-.32-2.02-.18-1.05-.44-2.32-.24-1.18-.48-2.11-.24-1.01-.46-1.62-.22-.74-.38-.96-.43-.5m107.42-1.2.81.1 1.27.39.58.22.84.62.36.34.43.87.16.47.05 1.14-.31 2.02-.09.35-.42.67-.24.33-.73.63-.4.31-1.03.58-.55.28-1.32.53-.7.26-1.61.48-.84.23-1.89.42-.98.2-2.16.36-3.54.47-1.61.18-2.88.51-.65.13-1 .25-.39.14.33-.27.92-.51h.25l.36-.43.21-.69.09-.5.15-1.09.05-.65.07-1.38v-.76l-.07-2.9-.13-1.28-.14-.38-.34-.62-.27-.14-.61-.18H154l-.56.05.23-.05 1.56-.28.85-.15 2.07-.32 3.49-.47 1.6-.2 2.79-.27 1.32-.1 2.25-.06 1.06-.01m-16.59 5.34.33.73.13.43.14.66-.17-.7-1.12-2.08.12.12M169 71l-.71.29-.29.43V72l.11.52.18.19.43.29h.28l.71-.29.29-.44V72l-.29-.71-.44-.29M144 70l-.71.29-.29.43V71l.11.52.18.19.43.29h.28l.71-.29.29-.44V71l-.29-.71-.43-.29m-18.56-3-.39.53-.16.33-.14.92-.04.47.13.97.55 1.11.27.28.4.27.18.08.23-.15.09-.13.11-.63.04-.38.01-1.17v-.69l-.29-1.08L126 67m121.43-4.36-.17.49-.08.32-.09 1.12-.06 2.43v.98l.06 1.45.03.64.14.8.07.32.23.19.44-.38.27-.41.41-1.38.18-.73.11-1.48v-.69l-.29-1.52L248 63l-.17-.27-.27-.11M153 70.14l-.06-.06-.06-.09M256 55.71l.65.17.84.83.51 1.91v.74l-.1.93-.08.37-.3.21-.18.01-.57-.52-.32-.35-.89-1.23-.52-.74-.63-1.08-.24-.47-.07-.59.03-.24.49-.15M116.14 44.34l.05.31.06.2.31.63.19.36.56.95.32.52.83 1.28 1.54 2.29.55.81 1.48 2.31.79 1.35.37.64.49.98.32.9v.31l.31.49.76.33h.32l.26-.62.07-.39-.27-1.24-.25-.84-.84-1.86-.47-.95-1.18-1.93-.61-.96-1.38-1.8-2.16-2.35-.45-.43-.71-.62-.33-.27-.46-.32-.2-.11-.2-.01m-43.9-7.12-.5.04-1.36.25-.73.15-1.77.46-3.07.94-.75.25-1.77.69-.92.37-2.02.88-2.05.9-4.16 2.04-.99.5-1.81.96-.87.47-1.43.83-.65.39-.89.63-.57.62v.24l.42.17.3.02 1.17-.31.34-.12.87-.32.46-.18 1.12-.47.6-.25 1.4-.61 2.43-1.1 1.02-.47 2.36-1.03 1.22-.53 2.53-1.06 1.26-.52 2.39-.96L69 39.87l1.05-.39 1.55-.65.69-.31.87-.5.35-.22.23-.33.04-.14-.35-.15-.24-.05m137.88-17.42-.69.79-.21.28-.35.89-.16.49-.25 1.24-.29 4.54.01.76.04 1.21.02.55.06.78.04.33.08.33.05.11.11-.13.07-.12.16-.6.08-.36.2-1.09.11-.61.26-1.58.14-.86.32-2.11.09-.64.16-1.08.07-.5.09-.82.09-.75-.01-.78-.03-.29m-74.36 8.29-.43.36-.25.25.02-.05.45-.44.94-.61.04-.02m154.74.34-.05.16-.01-.21m0-.02v-.15l.03-.03m-154.55-.18.25-.14.46-.12m.67-.12h-.06l.05-.01m1.22-18.68 2.07 1.09.43.31.98.37.55.15 1.56.08h.44l1.08-.05.57-.04 2.1-.2 1.72-.2 3.04-.39 2.32-.31 3.97-.46 1.88-.2 3.16-.25 1.48-.1 2.43-.02 1.13.02 1.76.22.81.14 1.19.47.52.26.67.74.28.4.24 1.01-.04 1.84-.06.41-.45.78-.28.39-.92.77-.52.39-1.43.76-.78.38-1.97.77-1.05.39-2.54.79-1.34.39-3.14.82-1.65.42-3.78.86-6.42 1.35-4.02.8-1.27.26-4.58.89-3.75.68-1.76.31-2.88.44-1.33.2-2.14.2-.99.08-1.54-.01-.72-.04-1.1-.22-.51-.13-.81-.43-.39-.23-.66-.61-.75-.75-.73-1.41-.01-2.19.23-.76.44-1.07.26-.49.79-.76.48-.37 1.54-.75.45-.2 1.11-.46 2.03-.81 1.48-.58 2.89-1.63.66-.42 1.11-.82 1.18-1.12.55-.7 1.11-.93.56-.39 1.18-.32.6-.09m93.26.17-.06.05.15.71.11.44.44 1.34.25.73.67 1.79 1.2 3.01.43 1.06.83 1.89.4.9.69 1.45.33.66.48.85.42.45.05-.06-.06-.66-.06-.4-.26-1.24-.16-.67-.43-1.64-.23-.86-.56-1.9-.48-1.57-.89-2.48-.44-1.12-.8-1.56-.39-.67-.7-.63m-77.02 7.26-.13.04-.49.1-.27.06-.75.14-.81.15-2.26.39-1.21.2-2.85.45-4.61.7-1.58.23-2.96.5-1.43.25-2.45.49-1.13.23-1.65.43-.36.1-.5.18-.44.22-.16.15-.1.22-.01.09.18.1.13.04.46-.02 1-.16.17-.04.56-.11.32-.05 1.68-.29 3.59-.58 2.87-.44 1.48-.23 3.1-.46 1.55-.22 2.87-.5 1.38-.25 2.33-.49 1.08-.24 1.54-.43.32-.1.45-.18.35-.23.18-.29-.27-.26-1.17.11Z",
        }),
        b.jsx("path", {
          fill: "#fff",
          d: "M91 157v-.28l.29-.43.71-.29h.28l.43.29.29.71v.28l-.29.43-.71.29h-.28l-.43-.29-.18-.18M73.5 102.55l1.1-.7 2.06-1.09.47-.24.75-.31.76-.2.32-.01.66-.44.74-1.06.16-.41.52-.59.28-.24.6-.22.29-.06.47.19.32.79v.14l-.33.43-.21.23-.69.57-.75.59-2.21 1.37-1.15.68-2.46 1.24-3.2 1.23-.46.12-.49.05-.17-.01.09-.23.12-.15.69-.52.42-.3M22 89.23v-.33l.73-.55.46-.25 1.28-.31.67-.12 1.38.01 1.67.46.26.16.31.25.13.11.04.15-.02.06-.23.08L28 89l-.41.01-1.31.19-2.03.43-.62.17-.97-.04-.41-.07M117 88v-.28l.29-.43.71-.29h.28l.43.29.29.71v.27l-.29.44-.71.29h-.28l-.43-.29-.18-.19m220.58-5.89-.22-.79-.18-1.39-.02-.31.03-.49.15-.43.26-.27.44-.03.2.05.3.51.13.32.11.98-.08 1.88-.33 2.84-.79-2.87ZM151.31 80l.18-.69.29-1.8.21-2.46v-.68l.25-.7.16-.25.45.12.24.15.51.83.69 1.98.08.33.13.34.07.11.11-.09.05-.09.07-.52.08-1.26.04-.87-.39-1.81-.13-.43-.33-.73-.57-.84-.5-.5-.61-.76-.23-.34-.06-.47.04-.21.49-.23L154 68h.44l.61.18.27.14.34.62.14.38.13 1.28.07 2.9v.76l-.07 1.38-.05.65-.15 1.09-.09.5-.21.69-.36.43h-.25l-.92.51-1.51 1.24-.42.42-.54.5-.23.19-.22.03-.07-.05.06-.48.06-.32M168 72v-.28l.29-.43.71-.29h.27l.44.29.29.71v.27l-.29.44-.71.29h-.28l-.43-.29-.18-.19M143 71v-.28l.29-.43.71-.29h.28l.43.29.29.71v.27l-.29.44-.71.29h-.28l-.43-.29-.18-.19M52.5 55.31l.21-.2.65-.41.36-.2.91-.4.95-.4 2.33-.69 1.18-.32 2.28-.4.54-.07.96-.06 1.18.05.53.09.6.16.23.09-.06.2-.11.11-.77.31-2.02.62-1.64.48-2.83.71-1.33.32-2.05.37-.45.06-.72.07-.33.02-.44-.03-.18-.03-.14-.13-.03-.08m14.33-5.05-.11-.27-.02-.43.02-.19.25-.27.16-.12.54-.14 1.17-.08h.55l.74.06.31.04.29.17.1.11-.1.35-.54.77-.34.41-.77.65-.91.44h-.21l-.5-.44-.24-.27m83.52-18.54-.21-.48-.11-1.27.32-1.75.18-.42.25-.52.12-.21.16-.1h.08l.14.31.25.94.11.48.06 1.27-.17 1.75-.1.42-.15.52-.08.21-.14.1h-.08l-.2-.31-.11-.21M135 30.43v-.25l.46-.7.28-.37.8-.77.43-.36.87-.58 1.1-.4h.36l.13.5-.66 1.5-.29.45-.78.73-.41.33-.83.41-.4.15-.63-.02-.27-.08m146.59-1.77-1.07-.21-1.94-.47-.93-.25-1.53-.48-.71-.25-.96-.44-.61-.55v-.3l.48-1.16 1.15-1.97.46-.66 1.14-.8.32-.15.77-.19.4-.07.99-.01.52.02 1.26.16.66.11 1.58.34.84.2 1.96.52 3.44.99.63.19 1.05.32.48.15.78.27.71.25.69.41.24.21-.12.42-.9.8-.53.39-.58.6.01.41h.23l-.02.44-.64 1.06-.34.41-.72.61-.81.36-.09-.02-.77-.15-.47-.1-1.39-.27-.76-.16-1.84-.36-.96-.19-2.1-.43Z",
        }),
      ],
    }),
  Du = [
    { step: 0, duration: 2e3 },
    { step: 1, duration: 2e3 },
    { step: 2, duration: 0 },
  ],
  Ru = () => {
    const [t, e] = y.useState(0);
    return (
      y.useEffect(() => {
        const n = Du.reduce(
          (s, i) => {
            const r = setTimeout(() => e(i.step), s.total);
            return {
              total: s.total + i.duration,
              timeouts: [...s.timeouts, r],
            };
          },
          { total: 0, timeouts: [] },
        );
        return () => n.timeouts.forEach(clearTimeout);
      }, []),
      t
    );
  },
  Eu = ({ onLoaded: t }) =>
    b.jsxs("video", {
      className: "absolute -z-10 h-full w-full object-cover",
      muted: !0,
      autoPlay: !0,
      loop: !0,
      disablePictureInPicture: !0,
      playsInline: !0,
      onLoadedData: t,
      preload: "metadata",
      children: [
        b.jsx("source", { src: "/bg-video.webm", type: "video/webm" }),
        b.jsx("p", {
          children: "Your browser does not support the video tag.",
        }),
      ],
    }),
  Lu = () =>
    b.jsx("a", {
      href: "#about",
      className: "absolute bottom-4 animate-bounce",
      title: "Scroll down",
      children: b.jsx(so, { size: "48", className: "text-black" }),
    }),
  ju = ({ steps: t, videoLoaded: e }) =>
    t === 0
      ? b.jsx(Mu, {
          width: "290",
          height: "200",
          initial: { scale: 1, className: "animate-ping" },
          animate: {
            scale: [1, 1, 1.5, 1, 1.5],
            rotate: [0, 0, 0, 0, 10],
            y: [0, 0, 0, 0, -200],
            opacity: [0, 1, 1, 1, 0],
            className: [""],
          },
          transition: { ease: "easeInOut", duration: 2 },
        })
      : t > 0 && !e
        ? b.jsxs("div", {
            className: "text-center text-black",
            children: [
              b.jsx(At.p, {
                className: "font-cursive text-4xl font-bold md:text-6xl",
                initial: { y: -100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                children: "Llevando",
              }),
              b.jsx(At.p, {
                className:
                  "animate-pulse font-outline text-6xl font-bold uppercase md:text-8xl",
                initial: { x: -100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0.5 },
                children: "La Chercha",
              }),
              b.jsx(At.p, {
                className: "text-2xl md:text-4xl",
                initial: { y: 100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 1 },
                children: "A otro Level",
              }),
            ],
          })
        : null,
  Uu = () => {
    const t = Ru(),
      { heroVideoLoaded: e, setHeroVideoLoaded: n } = Ji();
    return b.jsxs("section", {
      className: "zdv-hero relative h-[75vh] max-h-[2600px] sm:h-[100vh]",
      id: "hero",
      children: [
        t === 2 &&
          b.jsxs("div", {
            className:
              "relative flex h-[75vh] max-h-[2600px] shrink-0 flex-col items-center justify-center text-white transition-all sm:h-[100vh]",
            children: [b.jsx(Eu, { onLoaded: () => n(!0) }), b.jsx(Lu, {})],
          }),
        b.jsx(
          At.div,
          {
            className:
              "absolute left-0 top-0 grid h-full w-full place-content-center transition-colors",
            exit: { opacity: 0 },
            transition: { duration: 1, ease: "easeInOut" },
            initial: { backgroundColor: "black" },
            animate: {
              backgroundColor: t === 0 ? "black" : "white",
              opacity: t === 2 && e ? 0 : 1,
              display: t === 2 && e ? "none" : "grid",
            },
            children: b.jsx(Cu, {
              children: b.jsx(ju, { steps: t, videoLoaded: e }),
            }),
          },
          "logo",
        ),
        b.jsx("span", { className: "hidden animate-ping" }),
      ],
    });
  };
export { Uu as HeroVideo };
