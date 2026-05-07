import { j as h } from "./jsx-runtime.D9-ZS7W_.js";
import { r } from "./index.CYEHnncN.js";
import {
  u as x,
  M as E,
  m as I,
  i as g,
  f as w,
  a as S,
  b,
  c as C,
  r as v,
} from "./use-constant.fKAHoPwr.js";
function V(e) {
  const s = x(() => I(e)),
    { isStatic: u } = r.useContext(E);
  if (u) {
    const [, n] = r.useState(e);
    r.useEffect(() => s.on("change", n), []);
  }
  return s;
}
function d(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function M(e, s = {}) {
  const { isStatic: u } = r.useContext(E),
    n = r.useRef(null),
    t = V(g(e) ? d(e.get()) : e),
    c = r.useRef(t.get()),
    o = r.useRef(() => {}),
    l = () => {
      const i = n.current;
      i && i.time === 0 && i.sample(b.delta),
        f(),
        (n.current = C({
          keyframes: [t.get(), c.current],
          velocity: t.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...s,
          onUpdate: o.current,
        }));
    },
    f = () => {
      n.current && n.current.stop();
    };
  return (
    r.useInsertionEffect(
      () =>
        t.attach(
          (i, a) =>
            u ? a(i) : ((c.current = i), (o.current = a), w.update(l), t.get()),
          f,
        ),
      [JSON.stringify(s)],
    ),
    S(() => {
      if (g(e)) return e.on("change", (i) => t.set(d(i)));
    }, [t]),
    t
  );
}
const R = { some: 0, all: 1 };
function j(e, s, { root: u, margin: n, amount: t = "some" } = {}) {
  const c = v(e),
    o = new WeakMap(),
    l = (i) => {
      i.forEach((a) => {
        const p = o.get(a.target);
        if (a.isIntersecting !== !!p)
          if (a.isIntersecting) {
            const m = s(a);
            typeof m == "function" ? o.set(a.target, m) : f.unobserve(a.target);
          } else p && (p(a), o.delete(a.target));
      });
    },
    f = new IntersectionObserver(l, {
      root: u,
      rootMargin: n,
      threshold: typeof t == "number" ? t : R[t],
    });
  return c.forEach((i) => f.observe(i)), () => f.disconnect();
}
function A(e, { root: s, margin: u, amount: n, once: t = !1 } = {}) {
  const [c, o] = r.useState(!1);
  return (
    r.useEffect(() => {
      if (!e.current || (t && c)) return;
      const l = () => (o(!0), t ? void 0 : () => o(!1)),
        f = { root: (s && s.current) || void 0, margin: u, amount: n };
      return j(e.current, l, f);
    }, [s, e, u, t, n]),
    c
  );
}
function D({ value: e, direction: s = "up", className: u }) {
  const n = r.useRef(null),
    t = V(s === "down" ? e : 0),
    c = M(t, { damping: 100, stiffness: 100 }),
    o = A(n, { once: !0, margin: "-100px" });
  return (
    r.useEffect(() => {
      o && t.set(s === "down" ? 0 : e);
    }, [t, o]),
    r.useEffect(
      () =>
        c.on("change", (l) => {
          n.current && (n.current.textContent = l.toFixed(0));
        }),
      [c],
    ),
    h.jsx("span", { className: u, ref: n })
  );
}
export { D as default };
