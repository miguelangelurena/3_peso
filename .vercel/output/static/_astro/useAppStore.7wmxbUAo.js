import { R as u } from "./index.CYEHnncN.js";
const S = (e) => {
    let t;
    const o = new Set(),
      c = (s, i) => {
        const n = typeof s == "function" ? s(t) : s;
        if (!Object.is(n, t)) {
          const l = t;
          (t =
            (i ?? (typeof n != "object" || n === null))
              ? n
              : Object.assign({}, t, n)),
            o.forEach((b) => b(t, l));
        }
      },
      a = () => t,
      r = {
        setState: c,
        getState: a,
        getInitialState: () => d,
        subscribe: (s) => (o.add(s), () => o.delete(s)),
      },
      d = (t = e(c, a, r));
    return r;
  },
  f = (e) => (e ? S(e) : S),
  g = (e) => e;
function p(e, t = g) {
  const o = u.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState()),
  );
  return u.useDebugValue(o), o;
}
const I = (e) => {
    const t = f(e),
      o = (c) => p(t, c);
    return Object.assign(o, t), o;
  },
  j = (e) => I,
  h = j()((e) => ({
    heroVideoLoaded: !1,
    setHeroVideoLoaded: (t) => e({ heroVideoLoaded: t }),
  }));
export { h as u };
