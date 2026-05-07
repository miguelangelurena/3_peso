import { j as b } from "./jsx-runtime.D9-ZS7W_.js";
import { r as m } from "./index.CYEHnncN.js";
import { B as S } from "./index.W_-EYB-v.js";
var v = (t, o, i, s, a, n, l, p) => {
    let r = document.documentElement,
      d = ["light", "dark"];
    function u(e) {
      (Array.isArray(t) ? t : [t]).forEach((c) => {
        let g = c === "class",
          x = g && n ? a.map((f) => n[f] || f) : a;
        g
          ? (r.classList.remove(...x), r.classList.add(e))
          : r.setAttribute(c, e);
      }),
        h(e);
    }
    function h(e) {
      p && d.includes(e) && (r.style.colorScheme = e);
    }
    function y() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (s) u(s);
    else
      try {
        let e = localStorage.getItem(o) || i,
          c = l && e === "system" ? y() : e;
        u(c);
      } catch {}
  },
  E = m.createContext(void 0),
  k = { setTheme: (t) => {}, themes: [] },
  w = () => {
    var t;
    return (t = m.useContext(E)) != null ? t : k;
  };
m.memo(
  ({
    forcedTheme: t,
    storageKey: o,
    attribute: i,
    enableSystem: s,
    enableColorScheme: a,
    defaultTheme: n,
    value: l,
    themes: p,
    nonce: r,
    scriptProps: d,
  }) => {
    let u = JSON.stringify([i, o, n, t, p, l, s, a]).slice(1, -1);
    return m.createElement("script", {
      ...d,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? r : "",
      dangerouslySetInnerHTML: { __html: `(${v.toString()})(${u})` },
    });
  },
);
const N = ({ ...t }) => {
  const { theme: o = "system" } = w();
  return b.jsx(S, {
    theme: o,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...t,
  });
};
export { N as Toaster };
