import { j as pt } from "./jsx-runtime.D9-ZS7W_.js";
import { u as Ni } from "./useAppStore.7wmxbUAo.js";
import {
  t as $,
  d as bn,
  n as Dn,
  p as g,
  e as ot,
  g as I,
  v as Wi,
  h as _i,
  j as Y,
  k as $i,
  l as Se,
  o as Ot,
  s as ht,
  q as L,
  w as Hi,
  K as Rn,
  x as Gi,
  y as Ve,
  z as we,
  A as En,
  B as Ki,
  C as zi,
  D as Xi,
  E as Yi,
  F as qi,
  G as Mn,
  H as Ft,
  I as X,
  J as O,
  L as qt,
  N as Zi,
  f as V,
  m as rt,
  i as C,
  r as Ji,
  b as D,
  O as Ln,
  P as _,
  Q as w,
  R as Ut,
  S as Bn,
  T as Qi,
  U as ts,
  V as jn,
  W as kn,
  X as Zt,
  Y as In,
  Z as Dt,
  M as On,
  a as es,
  _ as Fn,
  $ as Jt,
  u as ns,
  a0 as Un,
} from "./use-constant.fKAHoPwr.js";
import { r as x } from "./index.CYEHnncN.js";
function is(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map(),
    n = (...i) => t(...i);
  return new Proxy(n, {
    get: (i, s) =>
      s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
  });
}
function Tt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const Nt = (t) => Array.isArray(t);
function Nn(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function at(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Ae(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, i) => {
      (e[0][i] = n.get()), (e[1][i] = n.getVelocity());
    }),
    e
  );
}
function Qt(t, e, n, i) {
  if (typeof e == "function") {
    const [s, a] = Ae(i);
    e = e(n !== void 0 ? n : t.custom, s, a);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [s, a] = Ae(i);
    e = e(n !== void 0 ? n : t.custom, s, a);
  }
  return e;
}
function St(t, e, n) {
  const i = t.getProps();
  return Qt(i, e, n !== void 0 ? n : i.custom, t);
}
const te = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ee = ["initial", ...te],
  ss = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  os = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  rs = { type: "keyframes", duration: 0.8 },
  as = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ls = (t, { keyframes: e }) =>
    e.length > 2 ? rs : $.has(t) ? (t.startsWith("scale") ? os(e[1]) : ss) : as;
function ne(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Wn = (t) => /^0[^.\s]+$/u.test(t);
function us(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || Wn(t)
      : !0;
}
const _n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  cs = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hs(t) {
  const e = cs.exec(t);
  if (!e) return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function $n(t, e, n = 1) {
  const [i, s] = hs(t);
  if (!i) return;
  const a = window.getComputedStyle(e).getPropertyValue(i);
  if (a) {
    const o = a.trim();
    return _n(o) ? parseFloat(o) : o;
  }
  return bn(s) ? $n(s, e, n + 1) : s;
}
const Hn = (t) => (e) => e.test(t),
  ds = { test: (t) => t === "auto", parse: (t) => t },
  Gn = [Dn, g, ot, I, Wi, _i, ds],
  Ce = (t) => Gn.find(Hn(t)),
  fs = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ms(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [i] = n.match($i) || [];
  if (!i) return t;
  const s = n.replace(i, "");
  let a = fs.has(e) ? 1 : 0;
  return i !== n && (a *= 100), e + "(" + a + s + ")";
}
const ps = /\b([a-z-]*)\(.*?\)/gu,
  Wt = {
    ...Y,
    getAnimatableNone: (t) => {
      const e = t.match(ps);
      return e ? e.map(ms).join(" ") : t;
    },
  },
  gs = {
    borderWidth: g,
    borderTopWidth: g,
    borderRightWidth: g,
    borderBottomWidth: g,
    borderLeftWidth: g,
    borderRadius: g,
    radius: g,
    borderTopLeftRadius: g,
    borderTopRightRadius: g,
    borderBottomRightRadius: g,
    borderBottomLeftRadius: g,
    width: g,
    maxWidth: g,
    height: g,
    maxHeight: g,
    top: g,
    right: g,
    bottom: g,
    left: g,
    padding: g,
    paddingTop: g,
    paddingRight: g,
    paddingBottom: g,
    paddingLeft: g,
    margin: g,
    marginTop: g,
    marginRight: g,
    marginBottom: g,
    marginLeft: g,
    backgroundPositionX: g,
    backgroundPositionY: g,
  },
  ys = {
    rotate: I,
    rotateX: I,
    rotateY: I,
    rotateZ: I,
    scale: ht,
    scaleX: ht,
    scaleY: ht,
    scaleZ: ht,
    skew: I,
    skewX: I,
    skewY: I,
    distance: g,
    translateX: g,
    translateY: g,
    translateZ: g,
    x: g,
    y: g,
    z: g,
    perspective: g,
    transformPerspective: g,
    opacity: Ot,
    originX: Se,
    originY: Se,
    originZ: g,
  },
  be = { ...Dn, transform: Math.round },
  ie = {
    ...gs,
    ...ys,
    zIndex: be,
    size: g,
    fillOpacity: Ot,
    strokeOpacity: Ot,
    numOctaves: be,
  },
  vs = {
    ...ie,
    color: L,
    backgroundColor: L,
    outlineColor: L,
    fill: L,
    stroke: L,
    borderColor: L,
    borderTopColor: L,
    borderRightColor: L,
    borderBottomColor: L,
    borderLeftColor: L,
    filter: Wt,
    WebkitFilter: Wt,
  },
  se = (t) => vs[t];
function Kn(t, e) {
  let n = se(t);
  return (
    n !== Wt && (n = Y), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const xs = new Set(["auto", "none", "0"]);
function Ps(t, e, n) {
  let i = 0,
    s;
  for (; i < t.length && !s; ) {
    const a = t[i];
    typeof a == "string" && !xs.has(a) && Hi(a).values.length && (s = t[i]),
      i++;
  }
  if (s && n) for (const a of e) t[a] = Kn(n, s);
}
class zn extends Rn {
  constructor(e, n, i, s, a) {
    super(e, n, i, s, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && ((u = u.trim()), bn(u))) {
        const c = $n(u, n.current);
        c !== void 0 && (e[l] = c),
          l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Gi.has(i) || e.length !== 2)) return;
    const [s, a] = e,
      o = Ce(s),
      r = Ce(a);
    if (o !== r)
      if (Ve(o) && Ve(r))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      i = [];
    for (let s = 0; s < e.length; s++) us(e[s]) && i.push(s);
    i.length && Ps(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = we[i](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: i, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const a = n.getValue(i);
    a && a.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    (s[o] = we[i](n.measureViewportBox(), window.getComputedStyle(n.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const Ts = new Set(["opacity", "clipPath", "filter", "transform"]);
function oe(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Ss = { linearEasing: void 0 };
function Vs(t, e) {
  const n = oe(t);
  return () => {
    var i;
    return (i = Ss[e]) !== null && i !== void 0 ? i : n();
  };
}
const gt = Vs(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Xn(t) {
  return !!(
    (typeof t == "function" && gt()) ||
    !t ||
    (typeof t == "string" && (t in _t || gt())) ||
    En(t) ||
    (Array.isArray(t) && t.every(Xn))
  );
}
const Q = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
  _t = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Q([0, 0.65, 0.55, 1]),
    circOut: Q([0.55, 0, 1, 0.45]),
    backIn: Q([0.31, 0.01, 0.66, -0.59]),
    backOut: Q([0.33, 1.53, 0.69, 0.99]),
  };
function Yn(t, e) {
  if (t)
    return typeof t == "function" && gt()
      ? Ki(t, e)
      : En(t)
        ? Q(t)
        : Array.isArray(t)
          ? t.map((n) => Yn(n, e) || _t.easeOut)
          : _t[t];
}
function ws(
  t,
  e,
  n,
  {
    delay: i = 0,
    duration: s = 300,
    repeat: a = 0,
    repeatType: o = "loop",
    ease: r = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Yn(r, s);
  return (
    Array.isArray(c) && (u.easing = c),
    t.animate(u, {
      delay: i,
      duration: s,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: a + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function De(t, e) {
  (t.timeline = e), (t.onfinish = null);
}
const As = oe(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  yt = 10,
  Cs = 2e4;
function bs(t) {
  return Zi(t.type) || t.type === "spring" || !Xn(t.ease);
}
function Ds(t, e) {
  const n = new qt({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let a = 0;
  for (; !i.done && a < Cs; ) (i = n.sample(a)), s.push(i.value), (a += yt);
  return { times: void 0, keyframes: s, duration: a - yt, ease: "linear" };
}
const qn = { anticipate: qi, backInOut: Yi, circInOut: Xi };
function Rs(t) {
  return t in qn;
}
class Re extends zi {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: a } = this.options;
    (this.resolver = new zn(
      a,
      (o, r) => this.onKeyframesResolved(o, r),
      n,
      i,
      s,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var i;
    let {
      duration: s = 300,
      times: a,
      ease: o,
      type: r,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((i = l.owner) === null || i === void 0) && i.current)) return !1;
    if (
      (typeof o == "string" && gt() && Rs(o) && (o = qn[o]), bs(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: m,
          element: p,
          ...v
        } = this.options,
        y = Ds(e, v);
      (e = y.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (s = y.duration),
        (a = y.times),
        (o = y.ease),
        (r = "keyframes");
    }
    const h = ws(l.owner.current, u, e, {
      ...this.options,
      duration: s,
      times: a,
      ease: o,
    });
    return (
      (h.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (De(h, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (h.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Mn(e, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: h, duration: s, times: a, type: r, ease: o, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: n } = e;
    return Ft(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: n } = e;
    return Ft(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: i } = n;
    i.currentTime = X(e);
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
    const { animation: i } = n;
    i.playbackRate = e;
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
      if (!n) return O;
      const { animation: i } = n;
      De(i, e);
    }
    return O;
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
      keyframes: i,
      duration: s,
      type: a,
      ease: o,
      times: r,
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
        m = new qt({
          ...f,
          keyframes: i,
          duration: s,
          type: a,
          ease: o,
          times: r,
          isGenerator: !0,
        }),
        p = X(this.time);
      u.setWithVelocity(m.sample(p - yt).value, m.sample(p).value, yt);
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
      name: i,
      repeatDelay: s,
      repeatType: a,
      damping: o,
      type: r,
    } = e;
    return (
      As() &&
      i &&
      Ts.has(i) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !s &&
      a !== "mirror" &&
      o !== 0 &&
      r !== "inertia"
    );
  }
}
const Es = oe(() => window.ScrollTimeline !== void 0);
class Ms {
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
    for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = n;
  }
  attachTimeline(e, n) {
    const i = this.animations.map((s) =>
      Es() && s.attachTimeline ? s.attachTimeline(e) : n(s),
    );
    return () => {
      i.forEach((s, a) => {
        s && s(), this.animations[a].stop();
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
function Ls({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: s,
  repeat: a,
  repeatType: o,
  repeatDelay: r,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const re =
    (t, e, n, i = {}, s, a) =>
    (o) => {
      const r = ne(i, t) || {},
        l = r.delay || i.delay || 0;
      let { elapsed: u = 0 } = i;
      u = u - X(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...r,
        delay: -u,
        onUpdate: (d) => {
          e.set(d), r.onUpdate && r.onUpdate(d);
        },
        onComplete: () => {
          o(), r.onComplete && r.onComplete();
        },
        name: t,
        motionValue: e,
        element: a ? void 0 : s,
      };
      Ls(r) || (c = { ...c, ...ls(t, c) }),
        c.duration && (c.duration = X(c.duration)),
        c.repeatDelay && (c.repeatDelay = X(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let h = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (h = !0)),
        h && !a && e.get() !== void 0)
      ) {
        const d = Mn(c.keyframes, r);
        if (d !== void 0)
          return (
            V.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new Ms([])
          );
      }
      return !a && Re.supports(c) ? new Re(c) : new qt(c);
    },
  Bs = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  js = (t) => (Nt(t) ? t[t.length - 1] || 0 : t);
function ks(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, rt(n));
}
function Is(t, e) {
  const n = St(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...a } = n || {};
  a = { ...a, ...i };
  for (const o in a) {
    const r = js(a[o]);
    ks(t, o, r);
  }
}
const ae = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Os = "framerAppearId",
  Zn = "data-" + ae(Os);
function Jn(t) {
  return t.props[Zn];
}
function Fs(t) {
  return !!(C(t) && t.add);
}
function $t(t, e) {
  const n = t.getValue("willChange");
  if (Fs(n)) return n.add(e);
}
function Us({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), i;
}
function Qn(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var a;
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...l } = e;
  i && (o = i);
  const u = [],
    c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const d = t.getValue(
        h,
        (a = t.latestValues[h]) !== null && a !== void 0 ? a : null,
      ),
      f = l[h];
    if (f === void 0 || (c && Us(c, h))) continue;
    const m = { delay: n, ...ne(o || {}, h) };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const y = Jn(t);
      if (y) {
        const P = window.MotionHandoffAnimation(y, h, V);
        P !== null && ((m.startTime = P), (p = !0));
      }
    }
    $t(t, h),
      d.start(
        re(h, d, f, t.shouldReduceMotion && $.has(h) ? { type: !1 } : m, t, p),
      );
    const v = d.animation;
    v && u.push(v);
  }
  return (
    r &&
      Promise.all(u).then(() => {
        V.update(() => {
          r && Is(t, r);
        });
      }),
    u
  );
}
function Ht(t, e, n = {}) {
  var i;
  const s = St(
    t,
    e,
    n.type === "exit"
      ? (i = t.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0,
  );
  let { transition: a = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (a = n.transitionOverride);
  const o = s ? () => Promise.all(Qn(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: h,
              staggerDirection: d,
            } = a;
            return Ns(t, e, c + u, h, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = a;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => c());
  } else return Promise.all([o(), r(n.delay)]);
}
function Ns(t, e, n = 0, i = 0, s = 1, a) {
  const o = [],
    r = (t.variantChildren.size - 1) * i,
    l = s === 1 ? (u = 0) => u * i : (u = 0) => r - u * i;
  return (
    Array.from(t.variantChildren)
      .sort(Ws)
      .forEach((u, c) => {
        u.notify("AnimationStart", e),
          o.push(
            Ht(u, e, { ...a, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", e),
            ),
          );
      }),
    Promise.all(o)
  );
}
function Ws(t, e) {
  return t.sortNodePosition(e);
}
function _s(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((a) => Ht(t, a, n));
    i = Promise.all(s);
  } else if (typeof e == "string") i = Ht(t, e, n);
  else {
    const s = typeof e == "function" ? St(t, e, n.custom) : e;
    i = Promise.all(Qn(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const $s = ee.length;
function ti(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? ti(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < $s; n++) {
    const i = ee[n],
      s = t.props[i];
    (at(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const Hs = [...te].reverse(),
  Gs = te.length;
function Ks(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: i }) => _s(t, n, i)));
}
function zs(t) {
  let e = Ks(t),
    n = Ee(),
    i = !0;
  const s = (l) => (u, c) => {
    var h;
    const d = St(
      t,
      c,
      l === "exit"
        ? (h = t.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0,
    );
    if (d) {
      const { transition: f, transitionEnd: m, ...p } = d;
      u = { ...u, ...p, ...m };
    }
    return u;
  };
  function a(l) {
    e = l(t);
  }
  function o(l) {
    const { props: u } = t,
      c = ti(t.parent) || {},
      h = [],
      d = new Set();
    let f = {},
      m = 1 / 0;
    for (let v = 0; v < Gs; v++) {
      const y = Hs[v],
        P = n[y],
        T = u[y] !== void 0 ? u[y] : c[y],
        A = at(T),
        j = y === l ? P.isActive : null;
      j === !1 && (m = v);
      let ct = T === c[y] && T !== u[y] && A;
      if (
        (ct && i && t.manuallyAnimateOnMount && (ct = !1),
        (P.protectedKeys = { ...f }),
        (!P.isActive && j === null) ||
          (!T && !P.prevProp) ||
          Tt(T) ||
          typeof T == "boolean")
      )
        continue;
      const ye = Xs(P.prevProp, T);
      let At = ye || (y === l && P.isActive && !ct && A) || (v > m && A),
        ve = !1;
      const xe = Array.isArray(T) ? T : [T];
      let Z = xe.reduce(s(y), {});
      j === !1 && (Z = {});
      const { prevResolvedValues: Pe = {} } = P,
        Ui = { ...Pe, ...Z },
        Te = (b) => {
          (At = !0),
            d.has(b) && ((ve = !0), d.delete(b)),
            (P.needsAnimating[b] = !0);
          const k = t.getValue(b);
          k && (k.liveStyle = !1);
        };
      for (const b in Ui) {
        const k = Z[b],
          Ct = Pe[b];
        if (f.hasOwnProperty(b)) continue;
        let bt = !1;
        Nt(k) && Nt(Ct) ? (bt = !Nn(k, Ct)) : (bt = k !== Ct),
          bt
            ? k != null
              ? Te(b)
              : d.add(b)
            : k !== void 0 && d.has(b)
              ? Te(b)
              : (P.protectedKeys[b] = !0);
      }
      (P.prevProp = T),
        (P.prevResolvedValues = Z),
        P.isActive && (f = { ...f, ...Z }),
        i && t.blockInitialAnimation && (At = !1),
        At &&
          (!(ct && ye) || ve) &&
          h.push(...xe.map((b) => ({ animation: b, options: { type: y } })));
    }
    if (d.size) {
      const v = {};
      d.forEach((y) => {
        const P = t.getBaseTarget(y),
          T = t.getValue(y);
        T && (T.liveStyle = !0), (v[y] = P ?? null);
      }),
        h.push({ animation: v });
    }
    let p = !!h.length;
    return (
      i &&
        (u.initial === !1 || u.initial === u.animate) &&
        !t.manuallyAnimateOnMount &&
        (p = !1),
      (i = !1),
      p ? e(h) : Promise.resolve()
    );
  }
  function r(l, u) {
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
    setActive: r,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      (n = Ee()), (i = !0);
    },
  };
}
function Xs(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Nn(e, t) : !1;
}
function U(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ee() {
  return {
    animate: U(!0),
    whileInView: U(),
    whileHover: U(),
    whileTap: U(),
    whileDrag: U(),
    whileFocus: U(),
    exit: U(),
  };
}
class F {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class Ys extends F {
  constructor(e) {
    super(e), e.animationState || (e.animationState = zs(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Tt(e) && (this.unmountControls = e.subscribe(this.node));
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
let qs = 0;
class Zs extends F {
  constructor() {
    super(...arguments), (this.id = qs++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const Js = { animation: { Feature: Ys }, exit: { Feature: Zs } },
  B = { x: !1, y: !1 };
function ei() {
  return B.x || B.y;
}
function ni(t, e) {
  const n = Ji(t),
    i = new AbortController(),
    s = { passive: !0, ...e, signal: i.signal };
  return [n, s, () => i.abort()];
}
function Me(t) {
  return (e) => {
    e.pointerType === "touch" || ei() || t(e);
  };
}
function Qs(t, e, n = {}) {
  const [i, s, a] = ni(t, n),
    o = Me((r) => {
      const { target: l } = r,
        u = e(r);
      if (!u || !l) return;
      const c = Me((h) => {
        u(h), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, s);
    });
  return (
    i.forEach((r) => {
      r.addEventListener("pointerenter", o, s);
    }),
    a
  );
}
const le = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  tt = new WeakSet();
function Le(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Rt(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const to = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = Le(() => {
      if (tt.has(n)) return;
      Rt(n, "down");
      const s = Le(() => {
          Rt(n, "up");
        }),
        a = () => Rt(n, "cancel");
      n.addEventListener("keyup", s, e), n.addEventListener("blur", a, e);
    });
    n.addEventListener("keydown", i, e),
      n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
  },
  eo = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function no(t) {
  return eo.has(t.tagName) || t.tabIndex !== -1;
}
const ii = (t, e) => (e ? (t === e ? !0 : ii(t, e.parentElement)) : !1);
function Be(t) {
  return le(t) && !ei();
}
function io(t, e, n = {}) {
  const [i, s, a] = ni(t, n),
    o = (r) => {
      const l = r.currentTarget;
      if (!Be(r) || tt.has(l)) return;
      tt.add(l);
      const u = e(r),
        c = (f, m) => {
          window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", d),
            !(!Be(f) || !tt.has(l)) &&
              (tt.delete(l), u && u(f, { success: m }));
        },
        h = (f) => {
          c(f, n.useGlobalTarget || ii(l, f.target));
        },
        d = (f) => {
          c(f, !1);
        };
      window.addEventListener("pointerup", h, s),
        window.addEventListener("pointercancel", d, s);
    };
  return (
    i.forEach((r) => {
      no(r) || (r.tabIndex = 0),
        (n.useGlobalTarget ? window : r).addEventListener("pointerdown", o, s),
        r.addEventListener("focus", (u) => to(u, s), s);
    }),
    a
  );
}
function so(t) {
  return t === "x" || t === "y"
    ? B[t]
      ? null
      : ((B[t] = !0),
        () => {
          B[t] = !1;
        })
    : B.x || B.y
      ? null
      : ((B.x = B.y = !0),
        () => {
          B.x = B.y = !1;
        });
}
function ut(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const oo = (t) => (e) => le(e) && t(e, ut(e));
function lt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function nt(t, e, n, i) {
  return lt(t, e, oo(n), i);
}
const je = (t, e) => Math.abs(t - e);
function ro(t, e) {
  const n = je(t.x, e.x),
    i = je(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class si {
  constructor(
    e,
    n,
    { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: a = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Mt(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          f = ro(h.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !f) return;
        const { point: m } = h,
          { timestamp: p } = D;
        this.history.push({ ...m, timestamp: p });
        const { onStart: v, onMove: y } = this.handlers;
        d ||
          (v && v(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, d) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Et(d, this.transformPagePoint)),
          V.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, d) => {
        this.end();
        const { onEnd: f, onSessionEnd: m, resumeAnimation: p } = this.handlers;
        if (
          (this.dragSnapToOrigin && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = Mt(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Et(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && f && f(h, v), m && m(h, v);
      }),
      !le(e))
    )
      return;
    (this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.contextWindow = s || window);
    const o = ut(e),
      r = Et(o, this.transformPagePoint),
      { point: l } = r,
      { timestamp: u } = D;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Mt(r, this.history)),
      (this.removeListeners = Ln(
        nt(this.contextWindow, "pointermove", this.handlePointerMove),
        nt(this.contextWindow, "pointerup", this.handlePointerUp),
        nt(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), _(this.updatePoint);
  }
}
function Et(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ke(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Mt({ point: t }, e) {
  return {
    point: t,
    delta: ke(t, oi(e)),
    offset: ke(t, ao(e)),
    velocity: lo(e, 0.1),
  };
}
function ao(t) {
  return t[0];
}
function oi(t) {
  return t[t.length - 1];
}
function lo(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    i = null;
  const s = oi(t);
  for (; n >= 0 && ((i = t[n]), !(s.timestamp - i.timestamp > X(e))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const a = Ft(s.timestamp - i.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - i.x) / a, y: (s.y - i.y) / a };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function H(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const ri = 1e-4,
  uo = 1 - ri,
  co = 1 + ri,
  ai = 0.01,
  ho = 0 - ai,
  fo = 0 + ai;
function R(t) {
  return t.max - t.min;
}
function mo(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ie(t, e, n, i = 0.5) {
  (t.origin = i),
    (t.originPoint = w(e.min, e.max, t.origin)),
    (t.scale = R(n) / R(e)),
    (t.translate = w(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= uo && t.scale <= co) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= ho && t.translate <= fo) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function it(t, e, n, i) {
  Ie(t.x, e.x, n.x, i ? i.originX : void 0),
    Ie(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Oe(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + R(e));
}
function po(t, e, n) {
  Oe(t.x, e.x, n.x), Oe(t.y, e.y, n.y);
}
function Fe(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + R(e));
}
function st(t, e, n) {
  Fe(t.x, e.x, n.x), Fe(t.y, e.y, n.y);
}
function go(t, { min: e, max: n }, i) {
  return (
    e !== void 0 && t < e
      ? (t = i ? w(e, t, i.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = i ? w(n, t, i.max) : Math.min(t, n)),
    t
  );
}
function Ue(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function yo(t, { top: e, left: n, bottom: i, right: s }) {
  return { x: Ue(t.x, n, s), y: Ue(t.y, e, i) };
}
function Ne(t, e) {
  let n = e.min - t.min,
    i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function vo(t, e) {
  return { x: Ne(t.x, e.x), y: Ne(t.y, e.y) };
}
function xo(t, e) {
  let n = 0.5;
  const i = R(t),
    s = R(e);
  return (
    s > i
      ? (n = Ut(e.min, e.max - i, t.min))
      : i > s && (n = Ut(t.min, t.max - s, e.min)),
    Bn(0, 1, n)
  );
}
function Po(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Gt = 0.35;
function To(t = Gt) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Gt),
    { x: We(t, "left", "right"), y: We(t, "top", "bottom") }
  );
}
function We(t, e, n) {
  return { min: _e(t, e), max: _e(t, n) };
}
function _e(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const $e = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  G = () => ({ x: $e(), y: $e() }),
  He = () => ({ min: 0, max: 0 }),
  S = () => ({ x: He(), y: He() });
function M(t) {
  return [t("x"), t("y")];
}
function li({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function So({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Vo(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function Lt(t) {
  return t === void 0 || t === 1;
}
function Kt({ scale: t, scaleX: e, scaleY: n }) {
  return !Lt(t) || !Lt(e) || !Lt(n);
}
function N(t) {
  return (
    Kt(t) ||
    ui(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function ui(t) {
  return Ge(t.x) || Ge(t.y);
}
function Ge(t) {
  return t && t !== "0%";
}
function vt(t, e, n) {
  const i = t - n,
    s = e * i;
  return n + s;
}
function Ke(t, e, n, i, s) {
  return s !== void 0 && (t = vt(t, s, i)), vt(t, n, i) + e;
}
function zt(t, e = 0, n = 1, i, s) {
  (t.min = Ke(t.min, e, n, i, s)), (t.max = Ke(t.max, e, n, i, s));
}
function ci(t, { x: e, y: n }) {
  zt(t.x, e.translate, e.scale, e.originPoint),
    zt(t.y, n.translate, n.scale, n.originPoint);
}
const ze = 0.999999999999,
  Xe = 1.0000000000001;
function wo(t, e, n, i = !1) {
  const s = n.length;
  if (!s) return;
  e.x = e.y = 1;
  let a, o;
  for (let r = 0; r < s; r++) {
    (a = n[r]), (o = a.projectionDelta);
    const { visualElement: l } = a.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (i &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        z(t, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), ci(t, o)),
      i && N(a.latestValues) && z(t, a.latestValues));
  }
  e.x < Xe && e.x > ze && (e.x = 1), e.y < Xe && e.y > ze && (e.y = 1);
}
function K(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function Ye(t, e, n, i, s = 0.5) {
  const a = w(t.min, t.max, s);
  zt(t, e, n, a, i);
}
function z(t, e) {
  Ye(t.x, e.x, e.scaleX, e.scale, e.originX),
    Ye(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function hi(t, e) {
  return li(Vo(t.getBoundingClientRect(), e));
}
function Ao(t, e, n) {
  const i = hi(t, n),
    { scroll: s } = e;
  return s && (K(i.x, s.offset.x), K(i.y, s.offset.y)), i;
}
const di = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Co = new WeakMap();
class bo {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = S()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (c) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ut(c).point);
      },
      a = (c, h) => {
        const { drag: d, dragPropagation: f, onDragStart: m } = this.getProps();
        if (
          d &&
          !f &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = so(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          M((v) => {
            let y = this.getAxisMotionValue(v).get() || 0;
            if (ot.test(y)) {
              const { projection: P } = this.visualElement;
              if (P && P.layout) {
                const T = P.layout.layoutBox[v];
                T && (y = R(T) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[v] = y;
          }),
          m && V.postRender(() => m(c, h)),
          $t(this.visualElement, "transform");
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      o = (c, h) => {
        const {
          dragPropagation: d,
          dragDirectionLock: f,
          onDirectionLock: m,
          onDrag: p,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: v } = h;
        if (f && this.currentDirection === null) {
          (this.currentDirection = Do(v)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, v),
          this.updateAxis("y", h.point, v),
          this.visualElement.render(),
          p && p(c, h);
      },
      r = (c, h) => this.stop(c, h),
      l = () =>
        M((c) => {
          var h;
          return (
            this.getAnimationState(c) === "paused" &&
            ((h = this.getAxisMotionValue(c).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new si(
      e,
      {
        onSessionStart: s,
        onStart: a,
        onMove: o,
        onSessionEnd: r,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: di(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !dt(e, s, this.currentDirection)) return;
    const a = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    this.constraints &&
      this.constraints[e] &&
      (o = go(o, this.constraints[e], this.elastic[e])),
      a.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
      a = this.constraints;
    n && H(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = yo(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = To(i)),
      a !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        M((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Po(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !H(e)) return !1;
    const i = e.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const a = Ao(i, s.root, this.visualElement.getTransformPagePoint());
    let o = vo(s.layout.layoutBox, a);
    if (n) {
      const r = n(So(o));
      (this.hasMutatedConstraints = !!r), r && (o = li(r));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: a,
        dragSnapToOrigin: o,
        onDragTransitionEnd: r,
      } = this.getProps(),
      l = this.constraints || {},
      u = M((c) => {
        if (!dt(c, n, this.currentDirection)) return;
        let h = (l && l[c]) || {};
        o && (h = { min: 0, max: 0 });
        const d = s ? 200 : 1e6,
          f = s ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: i ? e[c] : 0,
            bounceStiffness: d,
            bounceDamping: f,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...h,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(r);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return (
      $t(this.visualElement, e), i.start(re(e, i, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    M((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    M((e) => {
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
      i = this.visualElement.getProps(),
      s = i[n];
    return (
      s ||
      this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    M((n) => {
      const { drag: i } = this.getProps();
      if (!dt(n, i, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: r } = s.layout.layoutBox[n];
        a.set(e[n] - w(o, r, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!H(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    M((o) => {
      const r = this.getAxisMotionValue(o);
      if (r && this.constraints !== !1) {
        const l = r.get();
        s[o] = xo({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      M((o) => {
        if (!dt(o, e, null)) return;
        const r = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        r.set(w(l, u, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Co.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = nt(e, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      i = () => {
        const { dragConstraints: l } = this.getProps();
        H(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      a = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      V.read(i);
    const o = lt(window, "resize", () => this.scalePositionWithinConstraints()),
      r = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (M((c) => {
              const h = this.getAxisMotionValue(c);
              h &&
                ((this.originPoint[c] += l[c].translate),
                h.set(h.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      o(), n(), a(), r && r();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: s = !1,
        dragConstraints: a = !1,
        dragElastic: o = Gt,
        dragMomentum: r = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: a,
      dragElastic: o,
      dragMomentum: r,
    };
  }
}
function dt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Do(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class Ro extends F {
  constructor(e) {
    super(e),
      (this.removeGroupControls = O),
      (this.removeListeners = O),
      (this.controls = new bo(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || O);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const qe = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Eo extends F {
  constructor() {
    super(...arguments), (this.removePointerDownListener = O);
  }
  onPointerDown(e) {
    this.session = new si(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: di(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: i,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: qe(e),
      onStart: qe(n),
      onMove: i,
      onEnd: (a, o) => {
        delete this.session, s && V.postRender(() => s(a, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = nt(this.node.current, "pointerdown", (e) =>
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
const ue = x.createContext(null);
function Mo() {
  const t = x.useContext(ue);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: i } = t,
    s = x.useId();
  x.useEffect(() => i(s), []);
  const a = x.useCallback(() => n && n(s), [s, n]);
  return !e && n ? [!1, a] : [!0];
}
const fi = x.createContext({}),
  mi = x.createContext({}),
  ft = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ze(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const J = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (g.test(t)) t = parseFloat(t);
        else return t;
      const n = Ze(t, e.target.x),
        i = Ze(t, e.target.y);
      return `${n}% ${i}%`;
    },
  },
  Lo = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t,
        s = Y.parse(t);
      if (s.length > 5) return i;
      const a = Y.createTransformer(t),
        o = typeof s[0] != "number" ? 1 : 0,
        r = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (s[0 + o] /= r), (s[1 + o] /= l);
      const u = w(r, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        a(s)
      );
    },
  },
  xt = {};
function Bo(t) {
  Object.assign(xt, t);
}
const { schedule: ce } = Qi(queueMicrotask, !1);
class jo extends x.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: i,
        layoutId: s,
      } = this.props,
      { projection: a } = e;
    Bo(ko),
      a &&
        (n.group && n.group.add(a),
        i && i.register && s && i.register(a),
        a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ft.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: i,
        drag: s,
        isPresent: a,
      } = this.props,
      o = i.projection;
    return (
      o &&
        ((o.isPresent = a),
        s || e.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== a &&
          (a
            ? o.promote()
            : o.relegate() ||
              V.postRender(() => {
                const r = o.getStack();
                (!r || !r.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      ce.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: i,
      } = this.props,
      { projection: s } = e;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function pi(t) {
  const [e, n] = Mo(),
    i = x.useContext(fi);
  return pt.jsx(jo, {
    ...t,
    layoutGroup: i,
    switchLayoutGroup: x.useContext(mi),
    isPresent: e,
    safeToRemove: n,
  });
}
const ko = {
    borderRadius: {
      ...J,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomLeftRadius: J,
    borderBottomRightRadius: J,
    boxShadow: Lo,
  },
  gi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Io = gi.length,
  Je = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Qe = (t) => typeof t == "number" || g.test(t);
function Oo(t, e, n, i, s, a) {
  s
    ? ((t.opacity = w(0, n.opacity !== void 0 ? n.opacity : 1, Fo(i))),
      (t.opacityExit = w(e.opacity !== void 0 ? e.opacity : 1, 0, Uo(i))))
    : a &&
      (t.opacity = w(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        i,
      ));
  for (let o = 0; o < Io; o++) {
    const r = `border${gi[o]}Radius`;
    let l = tn(e, r),
      u = tn(n, r);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Qe(l) === Qe(u)
        ? ((t[r] = Math.max(w(Je(l), Je(u), i), 0)),
          (ot.test(u) || ot.test(l)) && (t[r] += "%"))
        : (t[r] = u);
  }
  (e.rotate || n.rotate) && (t.rotate = w(e.rotate || 0, n.rotate || 0, i));
}
function tn(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Fo = yi(0, 0.5, ts),
  Uo = yi(0.5, 0.95, O);
function yi(t, e, n) {
  return (i) => (i < t ? 0 : i > e ? 1 : n(Ut(t, e, i)));
}
function en(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function E(t, e) {
  en(t.x, e.x), en(t.y, e.y);
}
function nn(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function sn(t, e, n, i, s) {
  return (
    (t -= e), (t = vt(t, 1 / n, i)), s !== void 0 && (t = vt(t, 1 / s, i)), t
  );
}
function No(t, e = 0, n = 1, i = 0.5, s, a = t, o = t) {
  if (
    (ot.test(e) &&
      ((e = parseFloat(e)), (e = w(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let r = w(a.min, a.max, i);
  t === a && (r -= e),
    (t.min = sn(t.min, e, n, r, s)),
    (t.max = sn(t.max, e, n, r, s));
}
function on(t, e, [n, i, s], a, o) {
  No(t, e[n], e[i], e[s], e.scale, a, o);
}
const Wo = ["x", "scaleX", "originX"],
  _o = ["y", "scaleY", "originY"];
function rn(t, e, n, i) {
  on(t.x, e, Wo, n ? n.x : void 0, i ? i.x : void 0),
    on(t.y, e, _o, n ? n.y : void 0, i ? i.y : void 0);
}
function an(t) {
  return t.translate === 0 && t.scale === 1;
}
function vi(t) {
  return an(t.x) && an(t.y);
}
function ln(t, e) {
  return t.min === e.min && t.max === e.max;
}
function $o(t, e) {
  return ln(t.x, e.x) && ln(t.y, e.y);
}
function un(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function xi(t, e) {
  return un(t.x, e.x) && un(t.y, e.y);
}
function cn(t) {
  return R(t.x) / R(t.y);
}
function hn(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class Ho {
  constructor() {
    this.members = [];
  }
  add(e) {
    jn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (kn(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0) return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const a = this.members[s];
      if (a.isPresent !== !1) {
        i = a;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
      i.instance && i.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = i),
        n && (e.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((e.snapshot = i.snapshot),
          (e.snapshot.latestValues = i.animationValues || i.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
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
function Go(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x,
    a = t.y.translate / e.y,
    o = n?.z || 0;
  if (
    ((s || a || o) && (i = `translate3d(${s}px, ${a}px, ${o}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
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
    u && (i = `perspective(${u}px) ${i}`),
      c && (i += `rotate(${c}deg) `),
      h && (i += `rotateX(${h}deg) `),
      d && (i += `rotateY(${d}deg) `),
      f && (i += `skewX(${f}deg) `),
      m && (i += `skewY(${m}deg) `);
  }
  const r = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return (r !== 1 || l !== 1) && (i += `scale(${r}, ${l})`), i || "none";
}
const Ko = (t, e) => t.depth - e.depth;
class zo {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    jn(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    kn(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Ko),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function mt(t) {
  const e = C(t) ? t.get() : t;
  return Bs(e) ? e.toValue() : e;
}
function Xo(t, e) {
  const n = Zt.now(),
    i = ({ timestamp: s }) => {
      const a = s - n;
      a >= e && (_(i), t(a - e));
    };
  return V.read(i, !0), () => _(i);
}
function Yo(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function qo(t, e, n) {
  const i = C(t) ? t : rt(t);
  return i.start(re("", i, e, n)), i.animation;
}
const W = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  et = typeof window < "u" && window.MotionDebug !== void 0,
  Bt = ["", "X", "Y", "Z"],
  Zo = { visibility: "hidden" },
  dn = 1e3;
let Jo = 0;
function jt(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && ((n[t] = s[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Pi(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Jn(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: a } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(s || a));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Pi(i);
}
function Ti({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, r = e?.()) {
      (this.id = Jo++),
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
            et &&
              (W.totalNodes =
                W.resolvedTargetDeltas =
                W.recalculatedProjection =
                  0),
            this.nodes.forEach(er),
            this.nodes.forEach(rr),
            this.nodes.forEach(ar),
            this.nodes.forEach(nr),
            et && window.MotionDebug.record(W);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = r ? r.root || r : this),
        (this.path = r ? [...r.path, r] : []),
        (this.parent = r),
        (this.depth = r ? r.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zo());
    }
    addEventListener(o, r) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new In()),
        this.eventHandlers.get(o).add(r)
      );
    }
    notifyListeners(o, ...r) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...r);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, r = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Yo(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        r && (u || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h;
        const d = () => (this.root.updateBlockedByResize = !1);
        t(o, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = Xo(d, 250)),
            ft.hasAnimatedSinceResize &&
              ((ft.hasAnimatedSinceResize = !1), this.nodes.forEach(mn));
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
              const p =
                  this.options.transition || c.getDefaultTransition() || dr,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } =
                  c.getProps(),
                P = !this.targetLayout || !xi(this.targetLayout, m) || f,
                T = !d && f;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                T ||
                (d && (P || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, T);
                const A = { ...ne(p, "layout"), onPlay: v, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                d || mn(this),
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
        _(this.updateProjection);
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
        this.nodes && this.nodes.forEach(lr),
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
          Pi(this),
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
      const { layoutId: r, layout: l } = this.options;
      if (r === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fn);
        return;
      }
      this.isUpdating || this.nodes.forEach(sr),
        (this.isUpdating = !1),
        this.nodes.forEach(or),
        this.nodes.forEach(Qo),
        this.nodes.forEach(tr),
        this.clearAllSnapshots();
      const r = Zt.now();
      (D.delta = Bn(0, 1e3 / 60, r - D.timestamp)),
        (D.timestamp = r),
        (D.isProcessing = !0),
        Dt.update.process(D),
        Dt.preRender.process(D),
        Dt.render.process(D),
        (D.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ce.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ir), this.sharedNodes.forEach(ur);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
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
        (this.layoutCorrected = S()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: r } = this.options;
      r &&
        r.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let r = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (r = !1),
        r)
      ) {
        const l = i(this.instance);
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
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        r = this.projectionDelta && !vi(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (r || N(this.latestValues) || c) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const r = this.measurePageBox();
      let l = this.removeElementScroll(r);
      return (
        o && (l = this.removeTransform(l)),
        fr(l),
        {
          animationId: this.root.animationId,
          measuredBox: r,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: r } = this.options;
      if (!r) return S();
      const l = r.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(mr)
        )
      ) {
        const { scroll: c } = this.root;
        c && (K(l.x, c.offset.x), K(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var r;
      const l = S();
      if ((E(l, o), !((r = this.scroll) === null || r === void 0) && r.wasRoot))
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: h, options: d } = c;
        c !== this.root &&
          h &&
          d.layoutScroll &&
          (h.wasRoot && E(l, o), K(l.x, h.offset.x), K(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(o, r = !1) {
      const l = S();
      E(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !r &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          z(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          N(c.latestValues) && z(l, c.latestValues);
      }
      return N(this.latestValues) && z(l, this.latestValues), l;
    }
    removeTransform(o) {
      const r = S();
      E(r, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !N(u.latestValues)) continue;
        Kt(u.latestValues) && u.updateSnapshot();
        const c = S(),
          h = u.measurePageBox();
        E(c, h),
          rn(r, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return N(this.latestValues) && rn(r, this.latestValues), r;
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
        this.relativeParent.resolvedRelativeTargetAt !== D.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var r;
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
          (!((r = this.parent) === null || r === void 0) &&
            r.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (
          ((this.resolvedRelativeTargetAt = D.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1
            ? ((this.relativeParent = f),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = S()),
              (this.relativeTargetOrigin = S()),
              st(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              E(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = S()), (this.targetWithTransforms = S())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                po(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : E(this.target, this.layout.layoutBox),
                  ci(this.target, this.targetDelta))
                : E(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = S()),
                (this.relativeTargetOrigin = S()),
                st(this.relativeTargetOrigin, this.target, f.target),
                E(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          et && W.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Kt(this.parent.latestValues) ||
          ui(this.parent.latestValues)
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
      const r = this.getLead(),
        l = !!this.resumingFrom || this !== r;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === D.timestamp && (u = !1),
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
      E(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      wo(this.layoutCorrected, this.treeScale, this.path, l),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = S()));
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (nn(this.prevProjectionDelta.x, this.projectionDelta.x),
          nn(this.prevProjectionDelta.y, this.projectionDelta.y)),
        it(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !hn(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hn(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        et && W.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var r;
      if (
        ((r = this.options.visualElement) === null ||
          r === void 0 ||
          r.scheduleRender(),
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
      (this.prevProjectionDelta = G()),
        (this.projectionDelta = G()),
        (this.projectionDeltaWithTransform = G());
    }
    setAnimationOrigin(o, r = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        h = G();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !r);
      const d = S(),
        f = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        p = f !== m,
        v = this.getStack(),
        y = !v || v.members.length <= 1,
        P = !!(p && !y && this.options.crossfade === !0 && !this.path.some(hr));
      this.animationProgress = 0;
      let T;
      (this.mixTargetDelta = (A) => {
        const j = A / 1e3;
        pn(h.x, o.x, j),
          pn(h.y, o.y, j),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (st(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cr(this.relativeTarget, this.relativeTargetOrigin, d, j),
            T && $o(this.relativeTarget, T) && (this.isProjectionDirty = !1),
            T || (T = S()),
            E(T, this.relativeTarget)),
          p &&
            ((this.animationValues = c), Oo(c, u, this.latestValues, j, P, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
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
          (_(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          (ft.hasAnimatedSinceResize = !0),
            (this.currentAnimation = qo(0, dn, {
              ...o,
              onUpdate: (r) => {
                this.mixTargetDelta(r), o.onUpdate && o.onUpdate(r);
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
        (this.mixTargetDelta && this.mixTargetDelta(dn),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: r,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!r || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Si(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || S();
          const h = R(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + h);
          const d = R(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
        }
        E(r, l),
          z(r, c),
          it(this.projectionDeltaWithTransform, this.layoutCorrected, r, c);
      }
    }
    registerSharedNode(o, r) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Ho()),
        this.sharedNodes.get(o).add(r);
      const u = r.options.initialPromotionConfig;
      r.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(r)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: r } = this.options;
      return r
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: r } = this.options;
      return r
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: r, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        r && this.setOptions({ transition: r });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let r = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (r = !0),
        !r)
      )
        return;
      const u = {};
      l.z && jt("z", o, u, this.animationValues);
      for (let c = 0; c < Bt.length; c++)
        jt(`rotate${Bt[c]}`, o, u, this.animationValues),
          jt(`skew${Bt[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var r, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Zo;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = mt(o?.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return (
          this.options.layoutId &&
            ((p.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (p.pointerEvents = mt(o?.pointerEvents) || "")),
          this.hasProjected &&
            !N(this.latestValues) &&
            ((p.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          p
        );
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Go(
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
                    (r = d.opacity) !== null && r !== void 0
                      ? r
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
      for (const p in xt) {
        if (d[p] === void 0) continue;
        const { correct: v, applyTo: y } = xt[p],
          P = u.transform === "none" ? d[p] : v(d[p], h);
        if (y) {
          const T = y.length;
          for (let A = 0; A < T; A++) u[y[A]] = P;
        } else u[p] = P;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = h === this ? mt(o?.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var r;
        return (r = o.currentAnimation) === null || r === void 0
          ? void 0
          : r.stop();
      }),
        this.root.nodes.forEach(fn),
        this.root.sharedNodes.clear();
    }
  };
}
function Qo(t) {
  t.updateLayout();
}
function tr(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout,
      { animationType: a } = t.options,
      o = n.source !== t.layout.source;
    a === "size"
      ? M((h) => {
          const d = o ? n.measuredBox[h] : n.layoutBox[h],
            f = R(d);
          (d.min = i[h].min), (d.max = d.min + f);
        })
      : Si(a, n.layoutBox, i) &&
        M((h) => {
          const d = o ? n.measuredBox[h] : n.layoutBox[h],
            f = R(i[h]);
          (d.max = d.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + f));
        });
    const r = G();
    it(r, i, n.layoutBox);
    const l = G();
    o ? it(l, t.applyTransform(s, !0), n.measuredBox) : it(l, i, n.layoutBox);
    const u = !vi(r);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const m = S();
          st(m, n.layoutBox, d.layoutBox);
          const p = S();
          st(p, i, f.layoutBox),
            xi(m, p) || (c = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = p),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = h));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: l,
      layoutDelta: r,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function er(t) {
  et && W.totalNodes++,
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
function nr(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ir(t) {
  t.clearSnapshot();
}
function fn(t) {
  t.clearMeasurements();
}
function sr(t) {
  t.isLayoutDirty = !1;
}
function or(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function mn(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function rr(t) {
  t.resolveTargetDelta();
}
function ar(t) {
  t.calcProjection();
}
function lr(t) {
  t.resetSkewAndRotation();
}
function ur(t) {
  t.removeLeadSnapshot();
}
function pn(t, e, n) {
  (t.translate = w(e.translate, 0, n)),
    (t.scale = w(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function gn(t, e, n, i) {
  (t.min = w(e.min, n.min, i)), (t.max = w(e.max, n.max, i));
}
function cr(t, e, n, i) {
  gn(t.x, e.x, n.x, i), gn(t.y, e.y, n.y, i);
}
function hr(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const dr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yn = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  vn = yn("applewebkit/") && !yn("chrome/") ? Math.round : O;
function xn(t) {
  (t.min = vn(t.min)), (t.max = vn(t.max));
}
function fr(t) {
  xn(t.x), xn(t.y);
}
function Si(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !mo(cn(e), cn(n), 0.2))
  );
}
function mr(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const pr = Ti({
    attachResizeListener: (t, e) => lt(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  kt = { current: void 0 },
  Vi = Ti({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!kt.current) {
        const t = new pr({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (kt.current = t);
      }
      return kt.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  gr = {
    pan: { Feature: Eo },
    drag: { Feature: Ro, ProjectionNode: Vi, MeasureLayout: pi },
  };
function Pn(t, e, n) {
  const { props: i } = t;
  t.animationState &&
    i.whileHover &&
    t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    a = i[s];
  a && V.postRender(() => a(e, ut(e)));
}
class yr extends F {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Qs(
        e,
        (n) => (Pn(this.node, n, "Start"), (i) => Pn(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class vr extends F {
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
    this.unmount = Ln(
      lt(this.node.current, "focus", () => this.onFocus()),
      lt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Tn(t, e, n) {
  const { props: i } = t;
  t.animationState &&
    i.whileTap &&
    t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    a = i[s];
  a && V.postRender(() => a(e, ut(e)));
}
class xr extends F {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = io(
        e,
        (n) => (
          Tn(this.node, n, "Start"),
          (i, { success: s }) => Tn(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Xt = new WeakMap(),
  It = new WeakMap(),
  Pr = (t) => {
    const e = Xt.get(t.target);
    e && e(t);
  },
  Tr = (t) => {
    t.forEach(Pr);
  };
function Sr({ root: t, ...e }) {
  const n = t || document;
  It.has(n) || It.set(n, {});
  const i = It.get(n),
    s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Tr, { root: t, ...e })), i[s];
}
function Vr(t, e, n) {
  const i = Sr(e);
  return (
    Xt.set(t, n),
    i.observe(t),
    () => {
      Xt.delete(t), i.unobserve(t);
    }
  );
}
const wr = { some: 0, all: 1 };
class Ar extends F {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: i, amount: s = "some", once: a } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof s == "number" ? s : wr[s],
      },
      r = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), a && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(),
          d = u ? c : h;
        d && d(l);
      };
    return Vr(this.node.current, o, r);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Cr(e, n)) && this.startObserver();
  }
  unmount() {}
}
function Cr({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const br = {
    inView: { Feature: Ar },
    tap: { Feature: xr },
    focus: { Feature: vr },
    hover: { Feature: yr },
  },
  Dr = { layout: { ProjectionNode: Vi, MeasureLayout: pi } },
  Vt = x.createContext({}),
  wi = x.createContext({ strict: !1 });
function Rr(t, e, n, i, s) {
  var a, o;
  const { visualElement: r } = x.useContext(Vt),
    l = x.useContext(wi),
    u = x.useContext(ue),
    c = x.useContext(On).reducedMotion,
    h = x.useRef(null);
  (i = i || l.renderer),
    !h.current &&
      i &&
      (h.current = i(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = h.current,
    f = x.useContext(mi);
  d &&
    !d.projection &&
    s &&
    (d.type === "html" || d.type === "svg") &&
    Er(h.current, n, s, f);
  const m = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && m.current && d.update(n, u);
  });
  const p = n[Zn],
    v = x.useRef(
      !!p &&
        !(
          !((a = window.MotionHandoffIsComplete) === null || a === void 0) &&
          a.call(window, p)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, p)),
    );
  return (
    es(() => {
      d &&
        ((m.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        ce.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    x.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var y;
            (y = window.MotionHandoffMarkAsComplete) === null ||
              y === void 0 ||
              y.call(window, p);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function Er(t, e, n, i) {
  const {
    layoutId: s,
    layout: a,
    drag: o,
    dragConstraints: r,
    layoutScroll: l,
    layoutRoot: u,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : Ai(t.parent),
  )),
    t.projection.setOptions({
      layoutId: s,
      layout: a,
      alwaysMeasureLayout: !!o || (r && H(r)),
      visualElement: t,
      animationType: typeof a == "string" ? a : "both",
      initialPromotionConfig: i,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Ai(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Ai(t.parent);
}
function Mr(t, e, n) {
  return x.useCallback(
    (i) => {
      i && t.mount && t.mount(i),
        e && (i ? e.mount(i) : e.unmount()),
        n && (typeof n == "function" ? n(i) : H(n) && (n.current = i));
    },
    [e],
  );
}
function wt(t) {
  return Tt(t.animate) || ee.some((e) => at(t[e]));
}
function Ci(t) {
  return !!(wt(t) || t.variants);
}
function Lr(t, e) {
  if (wt(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || at(n) ? n : void 0,
      animate: at(i) ? i : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Br(t) {
  const { initial: e, animate: n } = Lr(t, x.useContext(Vt));
  return x.useMemo(() => ({ initial: e, animate: n }), [Sn(e), Sn(n)]);
}
function Sn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Vn = {
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
  q = {};
for (const t in Vn) q[t] = { isEnabled: (e) => Vn[t].some((n) => !!e[n]) };
function jr(t) {
  for (const e in t) q[e] = { ...q[e], ...t[e] };
}
const kr = Symbol.for("motionComponentSymbol");
function Ir({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: i,
  Component: s,
}) {
  t && jr(t);
  function a(r, l) {
    let u;
    const c = { ...x.useContext(On), ...r, layoutId: Or(r) },
      { isStatic: h } = c,
      d = Br(r),
      f = i(r, h);
    if (!h && Fn) {
      Fr();
      const m = Ur(c);
      (u = m.MeasureLayout),
        (d.visualElement = Rr(s, f, c, e, m.ProjectionNode));
    }
    return pt.jsxs(Vt.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? pt.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(s, r, Mr(f, d.visualElement, l), f, h, d.visualElement),
      ],
    });
  }
  const o = x.forwardRef(a);
  return (o[kr] = s), o;
}
function Or({ layoutId: t }) {
  const e = x.useContext(fi).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Fr(t, e) {
  x.useContext(wi).strict;
}
function Ur(t) {
  const { drag: e, layout: n } = q;
  if (!e && !n) return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout:
      e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const Nr = [
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
function he(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Nr.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function bi(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const a in n) t.style.setProperty(a, n[a]);
}
const Di = new Set([
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
function Ri(t, e, n, i) {
  bi(t, e, void 0, i);
  for (const s in e.attrs) t.setAttribute(Di.has(s) ? s : ae(s), e.attrs[s]);
}
function Ei(t, { layout: e, layoutId: n }) {
  return (
    $.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!xt[t] || t === "opacity"))
  );
}
function de(t, e, n) {
  var i;
  const { style: s } = t,
    a = {};
  for (const o in s)
    (C(s[o]) ||
      (e.style && C(e.style[o])) ||
      Ei(o, t) ||
      ((i = n?.getValue(o)) === null || i === void 0 ? void 0 : i.liveStyle) !==
        void 0) &&
      (a[o] = s[o]);
  return a;
}
function Mi(t, e, n) {
  const i = de(t, e, n);
  for (const s in t)
    if (C(t[s]) || C(e[s])) {
      const a =
        Jt.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      i[a] = t[s];
    }
  return i;
}
function Wr(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  i,
  s,
  a,
) {
  const o = { latestValues: _r(i, s, a, t), renderState: e() };
  return n && (o.mount = (r) => n(i, r, o)), o;
}
const Li = (t) => (e, n) => {
  const i = x.useContext(Vt),
    s = x.useContext(ue),
    a = () => Wr(t, e, i, s);
  return n ? a() : ns(a);
};
function _r(t, e, n, i) {
  const s = {},
    a = i(t, {});
  for (const d in a) s[d] = mt(a[d]);
  let { initial: o, animate: r } = t;
  const l = wt(t),
    u = Ci(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), r === void 0 && (r = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? r : o;
  if (h && typeof h != "boolean" && !Tt(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const m = Qt(t, d[f]);
      if (m) {
        const { transitionEnd: p, transition: v, ...y } = m;
        for (const P in y) {
          let T = y[P];
          if (Array.isArray(T)) {
            const A = c ? T.length - 1 : 0;
            T = T[A];
          }
          T !== null && (s[P] = T);
        }
        for (const P in p) s[P] = p[P];
      }
    }
  }
  return s;
}
const fe = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Bi = () => ({ ...fe(), attrs: {} }),
  ji = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  $r = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Hr = Jt.length;
function Gr(t, e, n) {
  let i = "",
    s = !0;
  for (let a = 0; a < Hr; a++) {
    const o = Jt[a],
      r = t[o];
    if (r === void 0) continue;
    let l = !0;
    if (
      (typeof r == "number"
        ? (l = r === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(r) === 0),
      !l || n)
    ) {
      const u = ji(r, ie[o]);
      if (!l) {
        s = !1;
        const c = $r[o] || o;
        i += `${c}(${u}) `;
      }
      n && (e[o] = u);
    }
  }
  return (i = i.trim()), n ? (i = n(e, s ? "" : i)) : s && (i = "none"), i;
}
function me(t, e, n) {
  const { style: i, vars: s, transformOrigin: a } = t;
  let o = !1,
    r = !1;
  for (const l in e) {
    const u = e[l];
    if ($.has(l)) {
      o = !0;
      continue;
    } else if (Un(l)) {
      s[l] = u;
      continue;
    } else {
      const c = ji(u, ie[l]);
      l.startsWith("origin") ? ((r = !0), (a[l] = c)) : (i[l] = c);
    }
  }
  if (
    (e.transform ||
      (o || n
        ? (i.transform = Gr(e, t.transform, n))
        : i.transform && (i.transform = "none")),
    r)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = a;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
function wn(t, e, n) {
  return typeof t == "string" ? t : g.transform(e + n * t);
}
function Kr(t, e, n) {
  const i = wn(e, t.x, t.width),
    s = wn(n, t.y, t.height);
  return `${i} ${s}`;
}
const zr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Xr = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Yr(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const a = s ? zr : Xr;
  t[a.offset] = g.transform(-i);
  const o = g.transform(e),
    r = g.transform(n);
  t[a.array] = `${o} ${r}`;
}
function pe(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: i,
    originX: s,
    originY: a,
    pathLength: o,
    pathSpacing: r = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  h,
) {
  if ((me(t, u, h), c)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: d, style: f, dimensions: m } = t;
  d.transform && (m && (f.transform = d.transform), delete d.transform),
    m &&
      (s !== void 0 || a !== void 0 || f.transform) &&
      (f.transformOrigin = Kr(
        m,
        s !== void 0 ? s : 0.5,
        a !== void 0 ? a : 0.5,
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    i !== void 0 && (d.scale = i),
    o !== void 0 && Yr(d, o, r, l, !1);
}
const ge = (t) => typeof t == "string" && t.toLowerCase() === "svg",
  qr = {
    useVisualState: Li({
      scrapeMotionValuesFromProps: Mi,
      createRenderState: Bi,
      onMount: (t, e, { renderState: n, latestValues: i }) => {
        V.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          V.render(() => {
            pe(n, i, ge(e.tagName), t.transformTemplate), Ri(e, n);
          });
      },
    }),
  },
  Zr = {
    useVisualState: Li({
      scrapeMotionValuesFromProps: de,
      createRenderState: fe,
    }),
  };
function ki(t, e, n) {
  for (const i in e) !C(e[i]) && !Ei(i, n) && (t[i] = e[i]);
}
function Jr({ transformTemplate: t }, e) {
  return x.useMemo(() => {
    const n = fe();
    return me(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Qr(t, e) {
  const n = t.style || {},
    i = {};
  return ki(i, n, t), Object.assign(i, Jr(t, e)), i;
}
function ta(t, e) {
  const n = {},
    i = Qr(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
const ea = new Set([
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
function Pt(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    ea.has(t)
  );
}
let Ii = (t) => !Pt(t);
function na(t) {
  t && (Ii = (e) => (e.startsWith("on") ? !Pt(e) : t(e)));
}
try {
  na(require("@emotion/is-prop-valid").default);
} catch {}
function ia(t, e, n) {
  const i = {};
  for (const s in t)
    (s === "values" && typeof t.values == "object") ||
      ((Ii(s) ||
        (n === !0 && Pt(s)) ||
        (!e && !Pt(s)) ||
        (t.draggable && s.startsWith("onDrag"))) &&
        (i[s] = t[s]));
  return i;
}
function sa(t, e, n, i) {
  const s = x.useMemo(() => {
    const a = Bi();
    return (
      pe(a, e, ge(i), t.transformTemplate),
      { ...a.attrs, style: { ...a.style } }
    );
  }, [e]);
  if (t.style) {
    const a = {};
    ki(a, t.style, t), (s.style = { ...a, ...s.style });
  }
  return s;
}
function oa(t = !1) {
  return (n, i, s, { latestValues: a }, o) => {
    const l = (he(n) ? sa : ta)(i, a, o, n),
      u = ia(i, typeof n == "string", t),
      c = n !== x.Fragment ? { ...u, ...l, ref: s } : {},
      { children: h } = i,
      d = x.useMemo(() => (C(h) ? h.get() : h), [h]);
    return x.createElement(n, { ...c, children: d });
  };
}
function ra(t, e) {
  return function (i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(he(i) ? qr : Zr),
      preloadedFeatures: t,
      useRender: oa(s),
      createVisualElement: e,
      Component: i,
    };
    return Ir(o);
  };
}
const Yt = { current: null },
  Oi = { current: !1 };
function aa() {
  if (((Oi.current = !0), !!Fn))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Yt.current = t.matches);
      t.addListener(e), e();
    } else Yt.current = !1;
}
function la(t, e, n) {
  for (const i in e) {
    const s = e[i],
      a = n[i];
    if (C(s)) t.addValue(i, s);
    else if (C(a)) t.addValue(i, rt(s, { owner: t }));
    else if (a !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, rt(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const An = new WeakMap(),
  ua = [...Gn, L, Y],
  ca = (t) => ua.find(Hn(t)),
  Cn = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class ha {
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: i,
      reducedMotionConfig: s,
      blockInitialAnimation: a,
      visualState: o,
    },
    r = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Rn),
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
        const d = Zt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), V.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = r),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = wt(n)),
      (this.isVariantNode = Ci(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && C(f) && f.set(l[d], !1);
    }
  }
  mount(e) {
    (this.current = e),
      An.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      Oi.current || aa(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Yt.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    An.delete(this.current),
      this.projection && this.projection.unmount(),
      _(this.notifyUpdate),
      _(this.render),
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
    const i = $.has(e),
      s = n.on("change", (r) => {
        (this.latestValues[e] = r),
          this.props.onUpdate && V.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      a = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        s(), a(), o && o(), n.owner && n.stop();
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
    for (e in q) {
      const n = q[e];
      if (!n) continue;
      const { isEnabled: i, Feature: s } = n;
      if (
        (!this.features[e] &&
          s &&
          i(this.props) &&
          (this.features[e] = new s(this)),
        this.features[e])
      ) {
        const a = this.features[e];
        a.isMounted ? a.update() : (a.mount(), (a.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : S();
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
    for (let i = 0; i < Cn.length; i++) {
      const s = Cn[i];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const a = "on" + s,
        o = e[a];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = la(
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
    const i = this.values.get(e);
    n !== i &&
      (i && this.removeValue(e),
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
    let i = this.values.get(e);
    return (
      i === void 0 &&
        n !== void 0 &&
        ((i = rt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, i)),
      i
    );
  }
  readValue(e, n) {
    var i;
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (i = this.getBaseTargetFromProps(this.props, e)) !== null &&
            i !== void 0
          ? i
          : this.readValueFromInstance(this.current, e, this.options);
    return (
      s != null &&
        (typeof s == "string" && (_n(s) || Wn(s))
          ? (s = parseFloat(s))
          : !ca(s) && Y.test(n) && (s = Kn(e, n)),
        this.setBaseTarget(e, C(s) ? s.get() : s)),
      C(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const o = Qt(
        this.props,
        i,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (s = o[e]);
    }
    if (i && s !== void 0) return s;
    const a = this.getBaseTargetFromProps(this.props, e);
    return a !== void 0 && !C(a)
      ? a
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new In()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Fi extends ha {
  constructor() {
    super(...arguments), (this.KeyframeResolver = zn);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    C(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function da(t) {
  return window.getComputedStyle(t);
}
class fa extends Fi {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = bi);
  }
  readValueFromInstance(e, n) {
    if ($.has(n)) {
      const i = se(n);
      return (i && i.default) || 0;
    } else {
      const i = da(e),
        s = (Un(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return hi(e, n);
  }
  build(e, n, i) {
    me(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return de(e, n, i);
  }
}
class ma extends Fi {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = S);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if ($.has(n)) {
      const i = se(n);
      return (i && i.default) || 0;
    }
    return (n = Di.has(n) ? n : ae(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Mi(e, n, i);
  }
  build(e, n, i) {
    pe(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    Ri(e, n, i, s);
  }
  mount(e) {
    (this.isSVGTag = ge(e.tagName)), super.mount(e);
  }
}
const pa = (t, e) =>
    he(t) ? new ma(e) : new fa(e, { allowProjection: t !== x.Fragment }),
  ga = ra({ ...Js, ...br, ...gr, ...Dr }, pa),
  ya = is(ga),
  Aa = ({ children: t, headerAnimation: e = !0 }) => {
    const { heroVideoLoaded: n } = Ni();
    return pt.jsx(ya.header, {
      className:
        "fixed top-0 z-30 w-full border-b border-slate-800 bg-dark/85 px-8 py-1 text-white backdrop-blur-md transition-all",
      initial: e ? { y: "-100px" } : void 0,
      animate: e ? { y: n ? "0" : void 0 } : void 0,
      exit: e ? { y: "-100px" } : void 0,
      children: t,
    });
  };
export { Aa as default };
