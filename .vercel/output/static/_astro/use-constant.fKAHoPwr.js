import { r as G } from "./index.CYEHnncN.js";
const Se = [
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
  Ts = new Set(Se),
  ae = (e) => e * 1e3,
  V = (e) => e / 1e3,
  Ze = { useManualTiming: !1 },
  He = (e) => e !== null;
function Fe(e, { repeat: t, repeatType: s = "loop" }, n) {
  const r = e.filter(He),
    i = t && s !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return !i || n === void 0 ? r[i] : n;
}
const N = (e) => e;
let Pe = N;
function Je(e) {
  let t = new Set(),
    s = new Set(),
    n = !1,
    r = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(o);
  }
  const l = {
    schedule: (c, u = !1, d = !1) => {
      const b = d && n ? t : s;
      return u && i.add(c), b.has(c) || b.add(c), c;
    },
    cancel: (c) => {
      s.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((o = c), n)) {
        r = !0;
        return;
      }
      (n = !0),
        ([t, s] = [s, t]),
        s.clear(),
        t.forEach(a),
        (n = !1),
        r && ((r = !1), l.process(c));
    },
  };
  return l;
}
const L = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Qe = 40;
function et(e, t) {
  let s = !1,
    n = !0;
  const r = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (s = !0),
    o = L.reduce((p, T) => ((p[T] = Je(i)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: d,
      postRender: m,
    } = o,
    b = () => {
      const p = performance.now();
      (s = !1),
        (r.delta = n ? 1e3 / 60 : Math.max(Math.min(p - r.timestamp, Qe), 1)),
        (r.timestamp = p),
        (r.isProcessing = !0),
        a.process(r),
        l.process(r),
        c.process(r),
        u.process(r),
        d.process(r),
        m.process(r),
        (r.isProcessing = !1),
        s && t && ((n = !1), e(b));
    },
    M = () => {
      (s = !0), (n = !0), r.isProcessing || e(b);
    };
  return {
    schedule: L.reduce((p, T) => {
      const S = o[T];
      return (p[T] = (F, h = !1, y = !1) => (s || M(), S.schedule(F, h, y))), p;
    }, {}),
    cancel: (p) => {
      for (let T = 0; T < L.length; T++) o[L[T]].cancel(p);
    },
    state: r,
    steps: o,
  };
}
const {
    schedule: U,
    cancel: tt,
    state: W,
    steps: xs,
  } = et(typeof requestAnimationFrame < "u" ? requestAnimationFrame : N, !0),
  we = (e, t, s) =>
    (((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e,
  st = 1e-7,
  nt = 12;
function rt(e, t, s, n, r) {
  let i,
    o,
    a = 0;
  do (o = t + (s - t) / 2), (i = we(o, n, r) - e), i > 0 ? (s = o) : (t = o);
  while (Math.abs(i) > st && ++a < nt);
  return o;
}
function _(e, t, s, n) {
  if (e === t && s === n) return N;
  const r = (i) => rt(i, 0, 1, e, s);
  return (i) => (i === 0 || i === 1 ? i : we(r(i), t, n));
}
const De = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Re = (e) => (t) => 1 - e(1 - t),
  Ee = _(0.33, 1.53, 0.69, 0.99),
  le = Re(Ee),
  it = De(le),
  ot = (e) =>
    (e *= 2) < 1 ? 0.5 * le(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ce = (e) => 1 - Math.sin(Math.acos(e)),
  at = Re(ce),
  lt = De(ce),
  Ce = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ms = Ce("--"),
  ct = Ce("var(--"),
  ut = (e) => (ct(e) ? ht.test(e.split("/*")[0].trim()) : !1),
  ht =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  C = (e, t, s) => (s > t ? t : s < e ? e : s),
  $ = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ke = { ...$, transform: (e) => C(0, 1, e) },
  As = { ...$, default: 1 },
  B = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ss = B("deg"),
  I = B("%"),
  ft = B("px"),
  Fs = B("vh"),
  Ps = B("vw"),
  ws = {
    ...I,
    parse: (e) => I.parse(e) / 100,
    transform: (e) => I.transform(e * 100),
  },
  Ds = new Set([
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
  Rs = (e) => e === $ || e === ft,
  pe = (e, t) => parseFloat(e.split(", ")[t]),
  me =
    (e, t) =>
    (s, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const r = n.match(/^matrix3d\((.+)\)$/u);
      if (r) return pe(r[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/u);
        return i ? pe(i[1], e) : 0;
      }
    },
  dt = new Set(["x", "y", "z"]),
  pt = Se.filter((e) => !dt.has(e));
function mt(e) {
  const t = [];
  return (
    pt.forEach((s) => {
      const n = e.getValue(s);
      n !== void 0 &&
        (t.push([s, n.get()]), n.set(s.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const z = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: s = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(s),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: s = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(s),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: me(4, 13),
  y: me(5, 14),
};
z.translateX = z.x;
z.translateY = z.y;
const R = new Set();
let te = !1,
  se = !1;
function Ve() {
  if (se) {
    const e = Array.from(R).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      s = new Map();
    t.forEach((n) => {
      const r = mt(n);
      r.length && (s.set(n, r), n.render());
    }),
      e.forEach((n) => n.measureInitialState()),
      t.forEach((n) => {
        n.render();
        const r = s.get(n);
        r &&
          r.forEach(([i, o]) => {
            var a;
            (a = n.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((n) => n.measureEndState()),
      e.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      });
  }
  (se = !1), (te = !1), R.forEach((e) => e.complete()), R.clear();
}
function Ie() {
  R.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (se = !0);
  });
}
function gt() {
  Ie(), Ve();
}
class yt {
  constructor(t, s, n, r, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = s),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (R.add(this), te || ((te = !0), U.read(Ie), U.resolveKeyframes(Ve)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: s,
      element: n,
      motionValue: r,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = r?.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (n && s) {
            const l = n.readValue(s, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), r && o === void 0 && r.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      R.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), R.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const O = (e) => Math.round(e * 1e5) / 1e5,
  Oe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vt(e) {
  return e == null;
}
const bt =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ue = (e, t) => (s) =>
    !!(
      (typeof s == "string" && bt.test(s) && s.startsWith(e)) ||
      (t && !vt(s) && Object.prototype.hasOwnProperty.call(s, t))
    ),
  ke = (e, t, s) => (n) => {
    if (typeof n != "string") return n;
    const [r, i, o, a] = n.match(Oe);
    return {
      [e]: parseFloat(r),
      [t]: parseFloat(i),
      [s]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Tt = (e) => C(0, 255, e),
  H = { ...$, transform: (e) => Math.round(Tt(e)) },
  D = {
    test: ue("rgb", "red"),
    parse: ke("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: s, alpha: n = 1 }) =>
      "rgba(" +
      H.transform(e) +
      ", " +
      H.transform(t) +
      ", " +
      H.transform(s) +
      ", " +
      O(Ke.transform(n)) +
      ")",
  };
function xt(e) {
  let t = "",
    s = "",
    n = "",
    r = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (s = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (r = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (s = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (r = e.substring(4, 5)),
        (t += t),
        (s += s),
        (n += n),
        (r += r)),
    {
      red: parseInt(t, 16),
      green: parseInt(s, 16),
      blue: parseInt(n, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  );
}
const ne = { test: ue("#"), parse: xt, transform: D.transform },
  K = {
    test: ue("hsl", "hue"),
    parse: ke("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: s, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      I.transform(O(t)) +
      ", " +
      I.transform(O(s)) +
      ", " +
      O(Ke.transform(n)) +
      ")",
  },
  k = {
    test: (e) => D.test(e) || ne.test(e) || K.test(e),
    parse: (e) =>
      D.test(e) ? D.parse(e) : K.test(e) ? K.parse(e) : ne.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? D.transform(e)
          : K.transform(e),
  },
  Mt =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function At(e) {
  var t, s;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Oe)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((s = e.match(Mt)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const Ne = "number",
  _e = "color",
  St = "var",
  Ft = "var(",
  ge = "${}",
  Pt =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function X(e) {
  const t = e.toString(),
    s = [],
    n = { color: [], number: [], var: [] },
    r = [];
  let i = 0;
  const a = t
    .replace(
      Pt,
      (l) => (
        k.test(l)
          ? (n.color.push(i), r.push(_e), s.push(k.parse(l)))
          : l.startsWith(Ft)
            ? (n.var.push(i), r.push(St), s.push(l))
            : (n.number.push(i), r.push(Ne), s.push(parseFloat(l))),
        ++i,
        ge
      ),
    )
    .split(ge);
  return { values: s, split: a, indexes: n, types: r };
}
function Be(e) {
  return X(e).values;
}
function Le(e) {
  const { split: t, types: s } = X(e),
    n = t.length;
  return (r) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += t[o]), r[o] !== void 0)) {
        const a = s[o];
        a === Ne
          ? (i += O(r[o]))
          : a === _e
            ? (i += k.transform(r[o]))
            : (i += r[o]);
      }
    return i;
  };
}
const wt = (e) => (typeof e == "number" ? 0 : e);
function Dt(e) {
  const t = Be(e);
  return Le(e)(t.map(wt));
}
const qe = {
  test: At,
  parse: Be,
  createTransformer: Le,
  getAnimatableNone: Dt,
};
function Ge(e) {
  return typeof e == "function";
}
let q;
function Rt() {
  q = void 0;
}
const E = {
    now: () => (
      q === void 0 &&
        E.set(
          W.isProcessing || Ze.useManualTiming
            ? W.timestamp
            : performance.now(),
        ),
      q
    ),
    set: (e) => {
      (q = e), queueMicrotask(Rt);
    },
  },
  ye = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (qe.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Et(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let s = 0; s < e.length; s++) if (e[s] !== t) return !0;
}
function Ct(e, t, s, n) {
  const r = e[0];
  if (r === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = ye(r, t),
    a = ye(i, t);
  return !o || !a ? !1 : Et(e) || ((s === "spring" || Ge(s)) && n);
}
const Kt = 40;
class Vt {
  constructor({
    autoplay: t = !0,
    delay: s = 0,
    type: n = "keyframes",
    repeat: r = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = E.now()),
      (this.options = {
        autoplay: t,
        delay: s,
        type: n,
        repeat: r,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Kt
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && gt(), this._resolved;
  }
  onKeyframesResolved(t, s) {
    (this.resolvedAt = E.now()), (this.hasAttemptedResolve = !0);
    const {
      name: n,
      type: r,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Ct(t, n, r, i))
      if (o) this.options.duration = 0;
      else {
        l?.(Fe(t, this.options, s)), a?.(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, s);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: s, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, s) {
    return this.currentFinishedPromise.then(t, s);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const he = (e, t, s) => {
    const n = t - e;
    return n === 0 ? 1 : (s - e) / n;
  },
  It = (e, t, s = 10) => {
    let n = "";
    const r = Math.max(Math.round(t / s), 2);
    for (let i = 0; i < r; i++) n += e(he(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Ue(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ot = 5;
function We(e, t, s) {
  const n = Math.max(t - Ot, 0);
  return Ue(s - e(n), t - n);
}
const g = {
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
  J = 0.001;
function kt({
  duration: e = g.duration,
  bounce: t = g.bounce,
  velocity: s = g.velocity,
  mass: n = g.mass,
}) {
  let r,
    i,
    o = 1 - t;
  (o = C(g.minDamping, g.maxDamping, o)),
    (e = C(g.minDuration, g.maxDuration, V(e))),
    o < 1
      ? ((r = (c) => {
          const u = c * o,
            d = u * e,
            m = u - s,
            b = re(c, o),
            M = Math.exp(-d);
          return J - (m / b) * M;
        }),
        (i = (c) => {
          const d = c * o * e,
            m = d * s + s,
            b = Math.pow(o, 2) * Math.pow(c, 2) * e,
            M = Math.exp(-d),
            v = re(Math.pow(c, 2), o);
          return ((-r(c) + J > 0 ? -1 : 1) * ((m - b) * M)) / v;
        }))
      : ((r = (c) => {
          const u = Math.exp(-c * e),
            d = (c - s) * e + 1;
          return -J + u * d;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            d = (s - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = _t(r, i, a);
  if (((e = ae(e)), isNaN(l)))
    return { stiffness: g.stiffness, damping: g.damping, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: o * 2 * Math.sqrt(n * c), duration: e };
  }
}
const Nt = 12;
function _t(e, t, s) {
  let n = s;
  for (let r = 1; r < Nt; r++) n = n - e(n) / t(n);
  return n;
}
function re(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ie = 2e4;
function ze(e) {
  let t = 0;
  const s = 50;
  let n = e.next(t);
  for (; !n.done && t < ie; ) (t += s), (n = e.next(t));
  return t >= ie ? 1 / 0 : t;
}
const Bt = ["duration", "bounce"],
  Lt = ["stiffness", "damping", "mass"];
function ve(e, t) {
  return t.some((s) => e[s] !== void 0);
}
function qt(e) {
  let t = {
    velocity: g.velocity,
    stiffness: g.stiffness,
    damping: g.damping,
    mass: g.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ve(e, Lt) && ve(e, Bt))
    if (e.visualDuration) {
      const s = e.visualDuration,
        n = (2 * Math.PI) / (s * 1.2),
        r = n * n,
        i = 2 * C(0.05, 1, 1 - e.bounce) * Math.sqrt(r);
      t = { ...t, mass: g.mass, stiffness: r, damping: i };
    } else {
      const s = kt(e);
      (t = { ...t, ...s, mass: g.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Xe(e = g.visualDuration, t = g.bounce) {
  const s =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: n, restDelta: r } = s;
  const i = s.keyframes[0],
    o = s.keyframes[s.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: d,
      velocity: m,
      isResolvedFromDuration: b,
    } = qt({ ...s, velocity: -V(s.velocity || 0) }),
    M = m || 0,
    v = c / (2 * Math.sqrt(l * u)),
    x = o - i,
    p = V(Math.sqrt(l / u)),
    T = Math.abs(x) < 5;
  n || (n = T ? g.restSpeed.granular : g.restSpeed.default),
    r || (r = T ? g.restDelta.granular : g.restDelta.default);
  let S;
  if (v < 1) {
    const h = re(p, v);
    S = (y) => {
      const A = Math.exp(-v * p * y);
      return (
        o - A * (((M + v * p * x) / h) * Math.sin(h * y) + x * Math.cos(h * y))
      );
    };
  } else if (v === 1) S = (h) => o - Math.exp(-p * h) * (x + (M + p * x) * h);
  else {
    const h = p * Math.sqrt(v * v - 1);
    S = (y) => {
      const A = Math.exp(-v * p * y),
        f = Math.min(h * y, 300);
      return (
        o - (A * ((M + v * p * x) * Math.sinh(f) + h * x * Math.cosh(f))) / h
      );
    };
  }
  const F = {
    calculatedDuration: (b && d) || null,
    next: (h) => {
      const y = S(h);
      if (b) a.done = h >= d;
      else {
        let A = 0;
        v < 1 && (A = h === 0 ? ae(M) : We(S, h, y));
        const f = Math.abs(A) <= n,
          P = Math.abs(o - y) <= r;
        a.done = f && P;
      }
      return (a.value = a.done ? o : y), a;
    },
    toString: () => {
      const h = Math.min(ze(F), ie),
        y = It((A) => F.next(h * A).value, h, 30);
      return h + "ms " + y;
    },
  };
  return F;
}
function be({
  keyframes: e,
  velocity: t = 0,
  power: s = 0.8,
  timeConstant: n = 325,
  bounceDamping: r = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    m = { done: !1, value: d },
    b = (f) => (a !== void 0 && f < a) || (l !== void 0 && f > l),
    M = (f) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - f) < Math.abs(l - f)
          ? a
          : l;
  let v = s * t;
  const x = d + v,
    p = o === void 0 ? x : o(x);
  p !== x && (v = p - d);
  const T = (f) => -v * Math.exp(-f / n),
    S = (f) => p + T(f),
    F = (f) => {
      const P = T(f),
        w = S(f);
      (m.done = Math.abs(P) <= c), (m.value = m.done ? p : w);
    };
  let h, y;
  const A = (f) => {
    b(m.value) &&
      ((h = f),
      (y = Xe({
        keyframes: [m.value, M(m.value)],
        velocity: We(S, f, m.value),
        damping: r,
        stiffness: i,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (f) => {
        let P = !1;
        return (
          !y && h === void 0 && ((P = !0), F(f), A(f)),
          h !== void 0 && f >= h ? y.next(f - h) : (!P && F(f), m)
        );
      },
    }
  );
}
const Gt = _(0.42, 0, 1, 1),
  Ut = _(0, 0, 0.58, 1),
  Ye = _(0.42, 0, 0.58, 1),
  Wt = (e) => Array.isArray(e) && typeof e[0] != "number",
  zt = (e) => Array.isArray(e) && typeof e[0] == "number",
  Xt = {
    linear: N,
    easeIn: Gt,
    easeInOut: Ye,
    easeOut: Ut,
    circIn: ce,
    circInOut: lt,
    circOut: at,
    backIn: le,
    backInOut: it,
    backOut: Ee,
    anticipate: ot,
  },
  Te = (e) => {
    if (zt(e)) {
      Pe(e.length === 4);
      const [t, s, n, r] = e;
      return _(t, s, n, r);
    } else if (typeof e == "string") return Xt[e];
    return e;
  },
  Yt = (e, t) => (s) => t(e(s)),
  fe = (...e) => e.reduce(Yt),
  Z = (e, t, s) => e + (t - e) * s;
function Q(e, t, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? e + (t - e) * 6 * s
      : s < 1 / 2
        ? t
        : s < 2 / 3
          ? e + (t - e) * (2 / 3 - s) * 6
          : e
  );
}
function jt({ hue: e, saturation: t, lightness: s, alpha: n }) {
  (e /= 360), (t /= 100), (s /= 100);
  let r = 0,
    i = 0,
    o = 0;
  if (!t) r = i = o = s;
  else {
    const a = s < 0.5 ? s * (1 + t) : s + t - s * t,
      l = 2 * s - a;
    (r = Q(l, a, e + 1 / 3)), (i = Q(l, a, e)), (o = Q(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: n,
  };
}
function Y(e, t) {
  return (s) => (s > 0 ? t : e);
}
const ee = (e, t, s) => {
    const n = e * e,
      r = s * (t * t - n) + n;
    return r < 0 ? 0 : Math.sqrt(r);
  },
  $t = [ne, D, K],
  Zt = (e) => $t.find((t) => t.test(e));
function xe(e) {
  const t = Zt(e);
  if (!t) return !1;
  let s = t.parse(e);
  return t === K && (s = jt(s)), s;
}
const Me = (e, t) => {
    const s = xe(e),
      n = xe(t);
    if (!s || !n) return Y(e, t);
    const r = { ...s };
    return (i) => (
      (r.red = ee(s.red, n.red, i)),
      (r.green = ee(s.green, n.green, i)),
      (r.blue = ee(s.blue, n.blue, i)),
      (r.alpha = Z(s.alpha, n.alpha, i)),
      D.transform(r)
    );
  },
  oe = new Set(["none", "hidden"]);
function Ht(e, t) {
  return oe.has(e) ? (s) => (s <= 0 ? e : t) : (s) => (s >= 1 ? t : e);
}
function Jt(e, t) {
  return (s) => Z(e, t, s);
}
function de(e) {
  return typeof e == "number"
    ? Jt
    : typeof e == "string"
      ? ut(e)
        ? Y
        : k.test(e)
          ? Me
          : ts
      : Array.isArray(e)
        ? je
        : typeof e == "object"
          ? k.test(e)
            ? Me
            : Qt
          : Y;
}
function je(e, t) {
  const s = [...e],
    n = s.length,
    r = e.map((i, o) => de(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < n; o++) s[o] = r[o](i);
    return s;
  };
}
function Qt(e, t) {
  const s = { ...e, ...t },
    n = {};
  for (const r in s)
    e[r] !== void 0 && t[r] !== void 0 && (n[r] = de(e[r])(e[r], t[r]));
  return (r) => {
    for (const i in n) s[i] = n[i](r);
    return s;
  };
}
function es(e, t) {
  var s;
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][r[o]],
      l = (s = e.values[a]) !== null && s !== void 0 ? s : 0;
    (n[i] = l), r[o]++;
  }
  return n;
}
const ts = (e, t) => {
  const s = qe.createTransformer(t),
    n = X(e),
    r = X(t);
  return n.indexes.var.length === r.indexes.var.length &&
    n.indexes.color.length === r.indexes.color.length &&
    n.indexes.number.length >= r.indexes.number.length
    ? (oe.has(e) && !r.values.length) || (oe.has(t) && !n.values.length)
      ? Ht(e, t)
      : fe(je(es(n, r), r.values), s)
    : Y(e, t);
};
function $e(e, t, s) {
  return typeof e == "number" && typeof t == "number" && typeof s == "number"
    ? Z(e, t, s)
    : de(e)(e, t);
}
function ss(e, t, s) {
  const n = [],
    r = s || $e,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = r(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || N : t;
      a = fe(l, a);
    }
    n.push(a);
  }
  return n;
}
function ns(e, t, { clamp: s = !0, ease: n, mixer: r } = {}) {
  const i = e.length;
  if ((Pe(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = ss(t, n, r),
    a = o.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const d = he(e[u], e[u + 1], c);
      return o[u](d);
    };
  return s ? (c) => l(C(e[0], e[i - 1], c)) : l;
}
function rs(e, t) {
  const s = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const r = he(0, t, n);
    e.push(Z(s, 1, r));
  }
}
function is(e) {
  const t = [0];
  return rs(t, e.length - 1), t;
}
function os(e, t) {
  return e.map((s) => s * t);
}
function as(e, t) {
  return e.map(() => t || Ye).splice(0, e.length - 1);
}
function j({
  duration: e = 300,
  keyframes: t,
  times: s,
  ease: n = "easeInOut",
}) {
  const r = Wt(n) ? n.map(Te) : Te(n),
    i = { done: !1, value: t[0] },
    o = os(s && s.length === t.length ? s : is(t), e),
    a = ns(o, t, { ease: Array.isArray(r) ? r : as(t, r) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const ls = (e) => {
    const t = ({ timestamp: s }) => e(s);
    return {
      start: () => U.update(t, !0),
      stop: () => tt(t),
      now: () => (W.isProcessing ? W.timestamp : E.now()),
    };
  },
  cs = { decay: be, inertia: be, tween: j, keyframes: j, spring: Xe },
  us = (e) => e / 100;
class hs extends Vt {
  constructor(t) {
    super(t),
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
    const { name: s, motionValue: n, element: r, keyframes: i } = this.options,
      o = r?.KeyframeResolver || yt,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new o(i, a, s, n, r)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(t) {
    const {
        type: s = "keyframes",
        repeat: n = 0,
        repeatDelay: r = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Ge(s) ? s : cs[s] || j;
    let l, c;
    a !== j &&
      typeof t[0] != "number" &&
      ((l = fe(us, $e(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = ze(u));
    const { calculatedDuration: d } = u,
      m = d + r,
      b = m * (n + 1) - r;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: m,
      totalDuration: b,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, s = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: f } = this.options;
      return { done: !0, value: f[f.length - 1] };
    }
    const {
      finalKeyframe: r,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: d,
    } = n;
    if (this.startTime === null) return i.next(0);
    const {
      delay: m,
      repeat: b,
      repeatType: M,
      repeatDelay: v,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      s
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - m * (this.speed >= 0 ? 1 : -1),
      T = this.speed >= 0 ? p < 0 : p > u;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let S = this.currentTime,
      F = i;
    if (b) {
      const f = Math.min(this.currentTime, u) / d;
      let P = Math.floor(f),
        w = f % 1;
      !w && f >= 1 && (w = 1),
        w === 1 && P--,
        (P = Math.min(P, b + 1)),
        P % 2 &&
          (M === "reverse"
            ? ((w = 1 - w), v && (w -= v / d))
            : M === "mirror" && (F = o)),
        (S = C(0, 1, w) * d);
    }
    const h = T ? { done: !1, value: l[0] } : F.next(S);
    a && (h.value = a(h.value));
    let { done: y } = h;
    !T &&
      c !== null &&
      (y = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && y));
    return (
      A && r !== void 0 && (h.value = Fe(l, this.options, r)),
      x && x(h.value),
      A && this.finish(),
      h
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? V(t.calculatedDuration) : 0;
  }
  get time() {
    return V(this.currentTime);
  }
  set time(t) {
    (t = ae(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const s = this.playbackSpeed !== t;
    (this.playbackSpeed = t), s && (this.time = V(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = ls, onPlay: s, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), s && s();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = r)
        : (this.startTime = n ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
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
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
function Es(e) {
  return new hs(e);
}
function fs(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ds(e, t) {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}
class ps {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return fs(this.subscriptions, t), () => ds(this.subscriptions, t);
  }
  notify(t, s, n) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](t, s, n);
      else
        for (let i = 0; i < r; i++) {
          const o = this.subscriptions[i];
          o && o(t, s, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ae = 30,
  ms = (e) => !isNaN(parseFloat(e));
class gs {
  constructor(t, s = {}) {
    (this.version = "11.14.4"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (n, r = !0) => {
        const i = E.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          r &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = s.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = E.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = ms(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, s) {
    this.events[t] || (this.events[t] = new ps());
    const n = this.events[t].add(s);
    return t === "change"
      ? () => {
          n(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, s) {
    (this.passiveEffect = t), (this.stopPassiveEffect = s);
  }
  set(t, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(t, s)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, s, n) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t, s = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = E.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ae
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Ae);
    return Ue(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = t(s)),
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
function Cs(e, t) {
  return new gs(e, t);
}
const Ks = (e) => !!(e && e.getVelocity);
function Vs(e, t, s) {
  var n;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let r = document;
    const i = (n = void 0) !== null && n !== void 0 ? n : r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Is = G.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ys = typeof window < "u",
  Os = ys ? G.useLayoutEffect : G.useEffect;
function ks(e) {
  const t = G.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
export {
  Se as $,
  zt as A,
  It as B,
  Vt as C,
  lt as D,
  it as E,
  ot as F,
  Fe as G,
  V as H,
  ae as I,
  N as J,
  yt as K,
  hs as L,
  Is as M,
  Ge as N,
  fe as O,
  tt as P,
  Z as Q,
  he as R,
  C as S,
  et as T,
  at as U,
  fs as V,
  ds as W,
  E as X,
  ps as Y,
  xs as Z,
  ys as _,
  Os as a,
  Ms as a0,
  W as b,
  Es as c,
  ut as d,
  I as e,
  U as f,
  Ss as g,
  Fs as h,
  Ks as i,
  qe as j,
  Oe as k,
  ws as l,
  Cs as m,
  $ as n,
  Ke as o,
  ft as p,
  k as q,
  Vs as r,
  As as s,
  Ts as t,
  ks as u,
  Ps as v,
  X as w,
  Ds as x,
  Rs as y,
  z,
};
