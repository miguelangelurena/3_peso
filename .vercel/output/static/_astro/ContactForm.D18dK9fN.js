import { j as w } from "./jsx-runtime.D9-ZS7W_.js";
import { R as re, r as d, a as Sa } from "./index.CYEHnncN.js";
import { r as an, R as Ca, t as _s } from "./index.W_-EYB-v.js";
var kr = (e) => e.type === "checkbox",
  Et = (e) => e instanceof Date,
  ke = (e) => e == null;
const co = (e) => typeof e == "object";
var pe = (e) => !ke(e) && !Array.isArray(e) && co(e) && !Et(e),
  lo = (e) =>
    pe(e) && e.target ? (kr(e.target) ? e.target.checked : e.target.value) : e,
  Ea = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  uo = (e, t) => e.has(Ea(t)),
  ka = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return pe(t) && t.hasOwnProperty("isPrototypeOf");
  },
  es =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Te(e) {
  let t;
  const r = Array.isArray(e),
    n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(es && (e instanceof Blob || n)) && (r || pe(e)))
    if (((t = r ? [] : {}), !r && !ka(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = Te(e[s]));
  else return e;
  return t;
}
var cn = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  de = (e) => e === void 0,
  O = (e, t, r) => {
    if (!t || !pe(e)) return r;
    const n = cn(t.split(/[,[\].]+?/)).reduce((s, o) => (ke(s) ? s : s[o]), e);
    return de(n) || n === e ? (de(e[t]) ? r : e[t]) : n;
  },
  Oe = (e) => typeof e == "boolean",
  ts = (e) => /^\w*$/.test(e),
  fo = (e) => cn(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  oe = (e, t, r) => {
    let n = -1;
    const s = ts(t) ? [t] : fo(t),
      o = s.length,
      i = o - 1;
    for (; ++n < o; ) {
      const a = s[n];
      let c = r;
      if (n !== i) {
        const l = e[a];
        c = pe(l) || Array.isArray(l) ? l : isNaN(+s[n + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = c), (e = e[a]);
    }
    return e;
  };
const Wr = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Le = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  et = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  ho = re.createContext(null),
  ln = () => re.useContext(ho),
  Aa = (e) => {
    const { children: t, ...r } = e;
    return re.createElement(ho.Provider, { value: r }, t);
  };
var po = (e, t, r, n = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const o in e)
      Object.defineProperty(s, o, {
        get: () => {
          const i = o;
          return (
            t._proxyFormState[i] !== Le.all &&
              (t._proxyFormState[i] = !n || Le.all),
            r && (r[i] = !0),
            e[i]
          );
        },
      });
    return s;
  },
  Re = (e) => pe(e) && !Object.keys(e).length,
  mo = (e, t, r, n) => {
    r(e);
    const { name: s, ...o } = e;
    return (
      Re(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((i) => t[i] === (!n || Le.all))
    );
  },
  lr = (e) => (Array.isArray(e) ? e : [e]),
  go = (e, t, r) =>
    !e ||
    !t ||
    e === t ||
    lr(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function rs(e) {
  const t = re.useRef(e);
  (t.current = e),
    re.useEffect(() => {
      const r =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
function Ta(e) {
  const t = ln(),
    { control: r = t.control, disabled: n, name: s, exact: o } = e || {},
    [i, a] = re.useState(r._formState),
    c = re.useRef(!0),
    l = re.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    u = re.useRef(s);
  return (
    (u.current = s),
    rs({
      disabled: n,
      next: (f) =>
        c.current &&
        go(u.current, f.name, o) &&
        mo(f, l.current, r._updateFormState) &&
        a({ ...r._formState, ...f }),
      subject: r._subjects.state,
    }),
    re.useEffect(
      () => (
        (c.current = !0),
        l.current.isValid && r._updateValid(!0),
        () => {
          c.current = !1;
        }
      ),
      [r],
    ),
    re.useMemo(() => po(i, r, l.current, !1), [i, r])
  );
}
var qe = (e) => typeof e == "string",
  vo = (e, t, r, n, s) =>
    qe(e)
      ? (n && t.watch.add(e), O(r, e, s))
      : Array.isArray(e)
        ? e.map((o) => (n && t.watch.add(o), O(r, o)))
        : (n && (t.watchAll = !0), r);
function Ra(e) {
  const t = ln(),
    {
      control: r = t.control,
      name: n,
      defaultValue: s,
      disabled: o,
      exact: i,
    } = e || {},
    a = re.useRef(n);
  (a.current = n),
    rs({
      disabled: o,
      subject: r._subjects.values,
      next: (u) => {
        go(a.current, u.name, i) &&
          l(Te(vo(a.current, r._names, u.values || r._formValues, !1, s)));
      },
    });
  const [c, l] = re.useState(r._getWatch(n, s));
  return re.useEffect(() => r._removeUnmounted()), c;
}
function Oa(e) {
  const t = ln(),
    { name: r, disabled: n, control: s = t.control, shouldUnregister: o } = e,
    i = uo(s._names.array, r),
    a = Ra({
      control: s,
      name: r,
      defaultValue: O(s._formValues, r, O(s._defaultValues, r, e.defaultValue)),
      exact: !0,
    }),
    c = Ta({ control: s, name: r, exact: !0 }),
    l = re.useRef(
      s.register(r, {
        ...e.rules,
        value: a,
        ...(Oe(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    ),
    u = re.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!O(c.errors, r) },
            isDirty: { enumerable: !0, get: () => !!O(c.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!O(c.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!O(c.validatingFields, r),
            },
            error: { enumerable: !0, get: () => O(c.errors, r) },
          },
        ),
      [c, r],
    ),
    f = re.useMemo(
      () => ({
        name: r,
        value: a,
        ...(Oe(n) || c.disabled ? { disabled: c.disabled || n } : {}),
        onChange: (v) =>
          l.current.onChange({
            target: { value: lo(v), name: r },
            type: Wr.CHANGE,
          }),
        onBlur: () =>
          l.current.onBlur({
            target: { value: O(s._formValues, r), name: r },
            type: Wr.BLUR,
          }),
        ref: (v) => {
          const g = O(s._fields, r);
          g &&
            v &&
            (g._f.ref = {
              focus: () => v.focus(),
              select: () => v.select(),
              setCustomValidity: (b) => v.setCustomValidity(b),
              reportValidity: () => v.reportValidity(),
            });
        },
      }),
      [r, s._formValues, n, c.disabled, a, s._fields],
    );
  return (
    re.useEffect(() => {
      const v = s._options.shouldUnregister || o,
        g = (b, h) => {
          const m = O(s._fields, b);
          m && m._f && (m._f.mount = h);
        };
      if ((g(r, !0), v)) {
        const b = Te(O(s._options.defaultValues, r));
        oe(s._defaultValues, r, b),
          de(O(s._formValues, r)) && oe(s._formValues, r, b);
      }
      return () => {
        (i ? v && !s._state.action : v) ? s.unregister(r) : g(r, !1);
      };
    }, [r, s, i, o]),
    re.useEffect(() => {
      Oe(n) &&
        O(s._fields, r) &&
        s._updateDisabledField({
          disabled: n,
          fields: s._fields,
          name: r,
          value: O(s._fields, r)._f.value,
        });
    }, [n, r, s]),
    re.useMemo(() => ({ field: f, formState: c, fieldState: u }), [f, c, u])
  );
}
const Na = (e) => e.render(Oa(e));
var yo = (e, t, r, n, s) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: s || !0 },
        }
      : {},
  Ss = (e) => ({
    isOnSubmit: !e || e === Le.onSubmit,
    isOnBlur: e === Le.onBlur,
    isOnChange: e === Le.onChange,
    isOnAll: e === Le.all,
    isOnTouch: e === Le.onTouched,
  }),
  Cs = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length)),
      ));
const ur = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = O(e, s);
    if (o) {
      const { _f: i, ...a } = o;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !n) return !0;
        if (i.ref && t(i.ref, i.name) && !n) return !0;
        if (ur(a, t)) break;
      } else if (pe(a) && ur(a, t)) break;
    }
  }
};
var Pa = (e, t, r) => {
    const n = lr(O(e, r));
    return oe(n, "root", t[r]), oe(e, r, n), e;
  },
  ns = (e) => e.type === "file",
  Ue = (e) => typeof e == "function",
  Ur = (e) => {
    if (!es) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Fr = (e) => qe(e),
  ss = (e) => e.type === "radio",
  Hr = (e) => e instanceof RegExp;
const Es = { value: !1, isValid: !1 },
  ks = { value: !0, isValid: !0 };
var bo = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !de(e[0].attributes.value)
        ? de(e[0].value) || e[0].value === ""
          ? ks
          : { value: e[0].value, isValid: !0 }
        : ks
      : Es;
  }
  return Es;
};
const As = { isValid: !1, value: null };
var xo = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        As,
      )
    : As;
function Ts(e, t, r = "validate") {
  if (Fr(e) || (Array.isArray(e) && e.every(Fr)) || (Oe(e) && !e))
    return { type: r, message: Fr(e) ? e : "", ref: t };
}
var It = (e) => (pe(e) && !Hr(e) ? e : { value: e, message: "" }),
  Rs = async (e, t, r, n, s) => {
    const {
        ref: o,
        refs: i,
        required: a,
        maxLength: c,
        minLength: l,
        min: u,
        max: f,
        pattern: v,
        validate: g,
        name: b,
        valueAsNumber: h,
        mount: m,
        disabled: _,
      } = e._f,
      y = O(t, b);
    if (!m || _) return {};
    const C = i ? i[0] : o,
      A = (T) => {
        n &&
          C.reportValidity &&
          (C.setCustomValidity(Oe(T) ? "" : T || ""), C.reportValidity());
      },
      E = {},
      F = ss(o),
      j = kr(o),
      W = F || j,
      J =
        ((h || ns(o)) && de(o.value) && de(y)) ||
        (Ur(o) && o.value === "") ||
        y === "" ||
        (Array.isArray(y) && !y.length),
      q = yo.bind(null, b, r, E),
      ne = (T, D, L, K = et.maxLength, $ = et.minLength) => {
        const G = T ? D : L;
        E[b] = { type: T ? K : $, message: G, ref: o, ...q(T ? K : $, G) };
      };
    if (
      s
        ? !Array.isArray(y) || !y.length
        : a &&
          ((!W && (J || ke(y))) ||
            (Oe(y) && !y) ||
            (j && !bo(i).isValid) ||
            (F && !xo(i).isValid))
    ) {
      const { value: T, message: D } = Fr(a)
        ? { value: !!a, message: a }
        : It(a);
      if (
        T &&
        ((E[b] = {
          type: et.required,
          message: D,
          ref: C,
          ...q(et.required, D),
        }),
        !r)
      )
        return A(D), E;
    }
    if (!J && (!ke(u) || !ke(f))) {
      let T, D;
      const L = It(f),
        K = It(u);
      if (!ke(y) && !isNaN(y)) {
        const $ = o.valueAsNumber || (y && +y);
        ke(L.value) || (T = $ > L.value), ke(K.value) || (D = $ < K.value);
      } else {
        const $ = o.valueAsDate || new Date(y),
          G = (ue) => new Date(new Date().toDateString() + " " + ue),
          Z = o.type == "time",
          te = o.type == "week";
        qe(L.value) &&
          y &&
          (T = Z
            ? G(y) > G(L.value)
            : te
              ? y > L.value
              : $ > new Date(L.value)),
          qe(K.value) &&
            y &&
            (D = Z
              ? G(y) < G(K.value)
              : te
                ? y < K.value
                : $ < new Date(K.value));
      }
      if ((T || D) && (ne(!!T, L.message, K.message, et.max, et.min), !r))
        return A(E[b].message), E;
    }
    if ((c || l) && !J && (qe(y) || (s && Array.isArray(y)))) {
      const T = It(c),
        D = It(l),
        L = !ke(T.value) && y.length > +T.value,
        K = !ke(D.value) && y.length < +D.value;
      if ((L || K) && (ne(L, T.message, D.message), !r))
        return A(E[b].message), E;
    }
    if (v && !J && qe(y)) {
      const { value: T, message: D } = It(v);
      if (
        Hr(T) &&
        !y.match(T) &&
        ((E[b] = { type: et.pattern, message: D, ref: o, ...q(et.pattern, D) }),
        !r)
      )
        return A(D), E;
    }
    if (g) {
      if (Ue(g)) {
        const T = await g(y, t),
          D = Ts(T, C);
        if (D && ((E[b] = { ...D, ...q(et.validate, D.message) }), !r))
          return A(D.message), E;
      } else if (pe(g)) {
        let T = {};
        for (const D in g) {
          if (!Re(T) && !r) break;
          const L = Ts(await g[D](y, t), C, D);
          L &&
            ((T = { ...L, ...q(D, L.message) }), A(L.message), r && (E[b] = T));
        }
        if (!Re(T) && ((E[b] = { ref: C, ...T }), !r)) return E;
      }
    }
    return A(!0), E;
  };
function Ia(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = de(e) ? n++ : e[t[n++]];
  return e;
}
function Ma(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !de(e[t])) return !1;
  return !0;
}
function ye(e, t) {
  const r = Array.isArray(t) ? t : ts(t) ? [t] : fo(t),
    n = r.length === 1 ? e : Ia(e, r),
    s = r.length - 1,
    o = r[s];
  return (
    n && delete n[o],
    s !== 0 &&
      ((pe(n) && Re(n)) || (Array.isArray(n) && Ma(n))) &&
      ye(e, r.slice(0, -1)),
    e
  );
}
var wn = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const o of e) o.next && o.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  jn = (e) => ke(e) || !co(e);
function ht(e, t) {
  if (jn(e) || jn(t)) return e === t;
  if (Et(e) && Et(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const s of r) {
    const o = e[s];
    if (!n.includes(s)) return !1;
    if (s !== "ref") {
      const i = t[s];
      if (
        (Et(o) && Et(i)) ||
        (pe(o) && pe(i)) ||
        (Array.isArray(o) && Array.isArray(i))
          ? !ht(o, i)
          : o !== i
      )
        return !1;
    }
  }
  return !0;
}
var wo = (e) => e.type === "select-multiple",
  ja = (e) => ss(e) || kr(e),
  _n = (e) => Ur(e) && e.isConnected,
  _o = (e) => {
    for (const t in e) if (Ue(e[t])) return !0;
    return !1;
  };
function qr(e, t = {}) {
  const r = Array.isArray(e);
  if (pe(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (pe(e[n]) && !_o(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), qr(e[n], t[n]))
        : ke(e[n]) || (t[n] = !0);
  return t;
}
function So(e, t, r) {
  const n = Array.isArray(e);
  if (pe(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || (pe(e[s]) && !_o(e[s]))
        ? de(t) || jn(r[s])
          ? (r[s] = Array.isArray(e[s]) ? qr(e[s], []) : { ...qr(e[s]) })
          : So(e[s], ke(t) ? {} : t[s], r[s])
        : (r[s] = !ht(e[s], t[s]));
  return r;
}
var Xt = (e, t) => So(e, t, qr(t)),
  Co = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    de(e)
      ? e
      : t
        ? e === ""
          ? NaN
          : e && +e
        : r && qe(e)
          ? new Date(e)
          : n
            ? n(e)
            : e;
function Sn(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return ns(t)
      ? t.files
      : ss(t)
        ? xo(e.refs).value
        : wo(t)
          ? [...t.selectedOptions].map(({ value: r }) => r)
          : kr(t)
            ? bo(e.refs).value
            : Co(de(t.value) ? e.ref.value : t.value, e);
}
var Da = (e, t, r, n) => {
    const s = {};
    for (const o of e) {
      const i = O(t, o);
      i && oe(s, o, i._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: n,
    };
  },
  Jt = (e) =>
    de(e)
      ? e
      : Hr(e)
        ? e.source
        : pe(e)
          ? Hr(e.value)
            ? e.value.source
            : e.value
          : e;
const Os = "AsyncFunction";
var Va = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Ue(e.validate) && e.validate.constructor.name === Os) ||
      (pe(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Os))
    ),
  La = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ns(e, t, r) {
  const n = O(e, r);
  if (n || ts(r)) return { error: n, name: r };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."),
      i = O(t, o),
      a = O(e, o);
    if (i && !Array.isArray(i) && r !== o) return { name: r };
    if (a && a.type) return { name: o, error: a };
    s.pop();
  }
  return { name: r };
}
var Fa = (e, t, r, n, s) =>
    s.isOnAll
      ? !1
      : !r && s.isOnTouch
        ? !(t || e)
        : (r ? n.isOnBlur : s.isOnBlur)
          ? !e
          : (r ? n.isOnChange : s.isOnChange)
            ? e
            : !0,
  $a = (e, t) => !cn(O(e, t)).length && ye(e, t);
const Za = {
  mode: Le.onSubmit,
  reValidateMode: Le.onChange,
  shouldFocusError: !0,
};
function Ba(e = {}) {
  let t = { ...Za, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Ue(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    s =
      pe(t.defaultValues) || pe(t.values)
        ? Te(t.defaultValues || t.values) || {}
        : {},
    o = t.shouldUnregister ? {} : Te(s),
    i = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    l = 0;
  const u = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { values: wn(), array: wn(), state: wn() },
    v = Ss(t.mode),
    g = Ss(t.reValidateMode),
    b = t.criteriaMode === Le.all,
    h = (p) => (x) => {
      clearTimeout(l), (l = setTimeout(p, x));
    },
    m = async (p) => {
      if (!t.disabled && (u.isValid || p)) {
        const x = t.resolver ? Re((await W()).errors) : await q(n, !0);
        x !== r.isValid && f.state.next({ isValid: x });
      }
    },
    _ = (p, x) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((p || Array.from(a.mount)).forEach((S) => {
          S && (x ? oe(r.validatingFields, S, x) : ye(r.validatingFields, S));
        }),
        f.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Re(r.validatingFields),
        }));
    },
    y = (p, x = [], S, I, N = !0, R = !0) => {
      if (I && S && !t.disabled) {
        if (((i.action = !0), R && Array.isArray(O(n, p)))) {
          const B = S(O(n, p), I.argA, I.argB);
          N && oe(n, p, B);
        }
        if (R && Array.isArray(O(r.errors, p))) {
          const B = S(O(r.errors, p), I.argA, I.argB);
          N && oe(r.errors, p, B), $a(r.errors, p);
        }
        if (u.touchedFields && R && Array.isArray(O(r.touchedFields, p))) {
          const B = S(O(r.touchedFields, p), I.argA, I.argB);
          N && oe(r.touchedFields, p, B);
        }
        u.dirtyFields && (r.dirtyFields = Xt(s, o)),
          f.state.next({
            name: p,
            isDirty: T(p, x),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else oe(o, p, x);
    },
    C = (p, x) => {
      oe(r.errors, p, x), f.state.next({ errors: r.errors });
    },
    A = (p) => {
      (r.errors = p), f.state.next({ errors: r.errors, isValid: !1 });
    },
    E = (p, x, S, I) => {
      const N = O(n, p);
      if (N) {
        const R = O(o, p, de(S) ? O(s, p) : S);
        de(R) || (I && I.defaultChecked) || x
          ? oe(o, p, x ? R : Sn(N._f))
          : K(p, R),
          i.mount && m();
      }
    },
    F = (p, x, S, I, N) => {
      let R = !1,
        B = !1;
      const ee = { name: p };
      if (!t.disabled) {
        const xe = !!(O(n, p) && O(n, p)._f && O(n, p)._f.disabled);
        if (!S || I) {
          u.isDirty &&
            ((B = r.isDirty),
            (r.isDirty = ee.isDirty = T()),
            (R = B !== ee.isDirty));
          const we = xe || ht(O(s, p), x);
          (B = !!(!xe && O(r.dirtyFields, p))),
            we || xe ? ye(r.dirtyFields, p) : oe(r.dirtyFields, p, !0),
            (ee.dirtyFields = r.dirtyFields),
            (R = R || (u.dirtyFields && B !== !we));
        }
        if (S) {
          const we = O(r.touchedFields, p);
          we ||
            (oe(r.touchedFields, p, S),
            (ee.touchedFields = r.touchedFields),
            (R = R || (u.touchedFields && we !== S)));
        }
        R && N && f.state.next(ee);
      }
      return R ? ee : {};
    },
    j = (p, x, S, I) => {
      const N = O(r.errors, p),
        R = u.isValid && Oe(x) && r.isValid !== x;
      if (
        (t.delayError && S
          ? ((c = h(() => C(p, S))), c(t.delayError))
          : (clearTimeout(l),
            (c = null),
            S ? oe(r.errors, p, S) : ye(r.errors, p)),
        (S ? !ht(N, S) : N) || !Re(I) || R)
      ) {
        const B = {
          ...I,
          ...(R && Oe(x) ? { isValid: x } : {}),
          errors: r.errors,
          name: p,
        };
        (r = { ...r, ...B }), f.state.next(B);
      }
    },
    W = async (p) => {
      _(p, !0);
      const x = await t.resolver(
        o,
        t.context,
        Da(p || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return _(p), x;
    },
    J = async (p) => {
      const { errors: x } = await W(p);
      if (p)
        for (const S of p) {
          const I = O(x, S);
          I ? oe(r.errors, S, I) : ye(r.errors, S);
        }
      else r.errors = x;
      return x;
    },
    q = async (p, x, S = { valid: !0 }) => {
      for (const I in p) {
        const N = p[I];
        if (N) {
          const { _f: R, ...B } = N;
          if (R) {
            const ee = a.array.has(R.name),
              xe = N._f && Va(N._f);
            xe && u.validatingFields && _([I], !0);
            const we = await Rs(N, o, b, t.shouldUseNativeValidation && !x, ee);
            if (
              (xe && u.validatingFields && _([I]),
              we[R.name] && ((S.valid = !1), x))
            )
              break;
            !x &&
              (O(we, R.name)
                ? ee
                  ? Pa(r.errors, we, R.name)
                  : oe(r.errors, R.name, we[R.name])
                : ye(r.errors, R.name));
          }
          !Re(B) && (await q(B, x, S));
        }
      }
      return S.valid;
    },
    ne = () => {
      for (const p of a.unMount) {
        const x = O(n, p);
        x &&
          (x._f.refs ? x._f.refs.every((S) => !_n(S)) : !_n(x._f.ref)) &&
          De(p);
      }
      a.unMount = new Set();
    },
    T = (p, x) => !t.disabled && (p && x && oe(o, p, x), !ht(ge(), s)),
    D = (p, x, S) =>
      vo(p, a, { ...(i.mount ? o : de(x) ? s : qe(p) ? { [p]: x } : x) }, S, x),
    L = (p) => cn(O(i.mount ? o : s, p, t.shouldUnregister ? O(s, p, []) : [])),
    K = (p, x, S = {}) => {
      const I = O(n, p);
      let N = x;
      if (I) {
        const R = I._f;
        R &&
          (!R.disabled && oe(o, p, Co(x, R)),
          (N = Ur(R.ref) && ke(x) ? "" : x),
          wo(R.ref)
            ? [...R.ref.options].forEach(
                (B) => (B.selected = N.includes(B.value)),
              )
            : R.refs
              ? kr(R.ref)
                ? R.refs.length > 1
                  ? R.refs.forEach(
                      (B) =>
                        (!B.defaultChecked || !B.disabled) &&
                        (B.checked = Array.isArray(N)
                          ? !!N.find((ee) => ee === B.value)
                          : N === B.value),
                    )
                  : R.refs[0] && (R.refs[0].checked = !!N)
                : R.refs.forEach((B) => (B.checked = B.value === N))
              : ns(R.ref)
                ? (R.ref.value = "")
                : ((R.ref.value = N),
                  R.ref.type || f.values.next({ name: p, values: { ...o } })));
      }
      (S.shouldDirty || S.shouldTouch) &&
        F(p, N, S.shouldTouch, S.shouldDirty, !0),
        S.shouldValidate && ue(p);
    },
    $ = (p, x, S) => {
      for (const I in x) {
        const N = x[I],
          R = `${p}.${I}`,
          B = O(n, R);
        (a.array.has(p) || pe(N) || (B && !B._f)) && !Et(N)
          ? $(R, N, S)
          : K(R, N, S);
      }
    },
    G = (p, x, S = {}) => {
      const I = O(n, p),
        N = a.array.has(p),
        R = Te(x);
      oe(o, p, R),
        N
          ? (f.array.next({ name: p, values: { ...o } }),
            (u.isDirty || u.dirtyFields) &&
              S.shouldDirty &&
              f.state.next({
                name: p,
                dirtyFields: Xt(s, o),
                isDirty: T(p, R),
              }))
          : I && !I._f && !ke(R)
            ? $(p, R, S)
            : K(p, R, S),
        Cs(p, a) && f.state.next({ ...r }),
        f.values.next({ name: i.mount ? p : void 0, values: { ...o } });
    },
    Z = async (p) => {
      i.mount = !0;
      const x = p.target;
      let S = x.name,
        I = !0;
      const N = O(n, S),
        R = () => (x.type ? Sn(N._f) : lo(p)),
        B = (ee) => {
          I =
            Number.isNaN(ee) ||
            (Et(ee) && isNaN(ee.getTime())) ||
            ht(ee, O(o, S, ee));
        };
      if (N) {
        let ee, xe;
        const we = R(),
          Ct = p.type === Wr.BLUR || p.type === Wr.FOCUS_OUT,
          xa =
            (!La(N._f) && !t.resolver && !O(r.errors, S) && !N._f.deps) ||
            Fa(Ct, O(r.touchedFields, S), r.isSubmitted, g, v),
          bn = Cs(S, a, Ct);
        oe(o, S, we),
          Ct
            ? (N._f.onBlur && N._f.onBlur(p), c && c(0))
            : N._f.onChange && N._f.onChange(p);
        const xn = F(S, we, Ct, !1),
          wa = !Re(xn) || bn;
        if (
          (!Ct && f.values.next({ name: S, type: p.type, values: { ...o } }),
          xa)
        )
          return (
            u.isValid && (t.mode === "onBlur" ? Ct && m() : m()),
            wa && f.state.next({ name: S, ...(bn ? {} : xn) })
          );
        if ((!Ct && bn && f.state.next({ ...r }), t.resolver)) {
          const { errors: xs } = await W([S]);
          if ((B(we), I)) {
            const _a = Ns(r.errors, n, S),
              ws = Ns(xs, n, _a.name || S);
            (ee = ws.error), (S = ws.name), (xe = Re(xs));
          }
        } else
          _([S], !0),
            (ee = (await Rs(N, o, b, t.shouldUseNativeValidation))[S]),
            _([S]),
            B(we),
            I && (ee ? (xe = !1) : u.isValid && (xe = await q(n, !0)));
        I && (N._f.deps && ue(N._f.deps), j(S, xe, ee, xn));
      }
    },
    te = (p, x) => {
      if (O(r.errors, x) && p.focus) return p.focus(), 1;
    },
    ue = async (p, x = {}) => {
      let S, I;
      const N = lr(p);
      if (t.resolver) {
        const R = await J(de(p) ? p : N);
        (S = Re(R)), (I = p ? !N.some((B) => O(R, B)) : S);
      } else
        p
          ? ((I = (
              await Promise.all(
                N.map(async (R) => {
                  const B = O(n, R);
                  return await q(B && B._f ? { [R]: B } : B);
                }),
              )
            ).every(Boolean)),
            !(!I && !r.isValid) && m())
          : (I = S = await q(n));
      return (
        f.state.next({
          ...(!qe(p) || (u.isValid && S !== r.isValid) ? {} : { name: p }),
          ...(t.resolver || !p ? { isValid: S } : {}),
          errors: r.errors,
        }),
        x.shouldFocus && !I && ur(n, te, p ? N : a.mount),
        I
      );
    },
    ge = (p) => {
      const x = { ...(i.mount ? o : s) };
      return de(p) ? x : qe(p) ? O(x, p) : p.map((S) => O(x, S));
    },
    ct = (p, x) => ({
      invalid: !!O((x || r).errors, p),
      isDirty: !!O((x || r).dirtyFields, p),
      error: O((x || r).errors, p),
      isValidating: !!O(r.validatingFields, p),
      isTouched: !!O((x || r).touchedFields, p),
    }),
    St = (p) => {
      p && lr(p).forEach((x) => ye(r.errors, x)),
        f.state.next({ errors: p ? r.errors : {} });
    },
    je = (p, x, S) => {
      const I = (O(n, p, { _f: {} })._f || {}).ref,
        N = O(r.errors, p) || {},
        { ref: R, message: B, type: ee, ...xe } = N;
      oe(r.errors, p, { ...xe, ...x, ref: I }),
        f.state.next({ name: p, errors: r.errors, isValid: !1 }),
        S && S.shouldFocus && I && I.focus && I.focus();
    },
    lt = (p, x) =>
      Ue(p)
        ? f.values.subscribe({ next: (S) => p(D(void 0, x), S) })
        : D(p, x, !0),
    De = (p, x = {}) => {
      for (const S of p ? lr(p) : a.mount)
        a.mount.delete(S),
          a.array.delete(S),
          x.keepValue || (ye(n, S), ye(o, S)),
          !x.keepError && ye(r.errors, S),
          !x.keepDirty && ye(r.dirtyFields, S),
          !x.keepTouched && ye(r.touchedFields, S),
          !x.keepIsValidating && ye(r.validatingFields, S),
          !t.shouldUnregister && !x.keepDefaultValue && ye(s, S);
      f.values.next({ values: { ...o } }),
        f.state.next({ ...r, ...(x.keepDirty ? { isDirty: T() } : {}) }),
        !x.keepIsValid && m();
    },
    z = ({ disabled: p, name: x, field: S, fields: I, value: N }) => {
      if ((Oe(p) && i.mount) || p) {
        const R = p ? void 0 : de(N) ? Sn(S ? S._f : O(I, x)._f) : N;
        (p || (!p && !de(R))) && oe(o, x, R), F(x, R, !1, !1, !0);
      }
    },
    ce = (p, x = {}) => {
      let S = O(n, p);
      const I = Oe(x.disabled) || Oe(t.disabled);
      return (
        oe(n, p, {
          ...(S || {}),
          _f: {
            ...(S && S._f ? S._f : { ref: { name: p } }),
            name: p,
            mount: !0,
            ...x,
          },
        }),
        a.mount.add(p),
        S
          ? z({
              field: S,
              disabled: Oe(x.disabled) ? x.disabled : t.disabled,
              name: p,
              value: x.value,
            })
          : E(p, !0, x.value),
        {
          ...(I ? { disabled: x.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!x.required,
                min: Jt(x.min),
                max: Jt(x.max),
                minLength: Jt(x.minLength),
                maxLength: Jt(x.maxLength),
                pattern: Jt(x.pattern),
              }
            : {}),
          name: p,
          onChange: Z,
          onBlur: Z,
          ref: (N) => {
            if (N) {
              ce(p, x), (S = O(n, p));
              const R =
                  (de(N.value) &&
                    N.querySelectorAll &&
                    N.querySelectorAll("input,select,textarea")[0]) ||
                  N,
                B = ja(R),
                ee = S._f.refs || [];
              if (B ? ee.find((xe) => xe === R) : R === S._f.ref) return;
              oe(n, p, {
                _f: {
                  ...S._f,
                  ...(B
                    ? {
                        refs: [
                          ...ee.filter(_n),
                          R,
                          ...(Array.isArray(O(s, p)) ? [{}] : []),
                        ],
                        ref: { type: R.type, name: p },
                      }
                    : { ref: R }),
                },
              }),
                E(p, !1, void 0, R);
            } else
              (S = O(n, p, {})),
                S._f && (S._f.mount = !1),
                (t.shouldUnregister || x.shouldUnregister) &&
                  !(uo(a.array, p) && i.action) &&
                  a.unMount.add(p);
          },
        }
      );
    },
    be = () => t.shouldFocusError && ur(n, te, a.mount),
    ie = (p) => {
      Oe(p) &&
        (f.state.next({ disabled: p }),
        ur(
          n,
          (x, S) => {
            const I = O(n, S);
            I &&
              ((x.disabled = I._f.disabled || p),
              Array.isArray(I._f.refs) &&
                I._f.refs.forEach((N) => {
                  N.disabled = I._f.disabled || p;
                }));
          },
          0,
          !1,
        ));
    },
    ae = (p, x) => async (S) => {
      let I;
      if (
        (S &&
          (S.preventDefault && S.preventDefault(), S.persist && S.persist()),
        t.disabled)
      ) {
        x && (await x({ ...r.errors }, S));
        return;
      }
      let N = Te(o);
      if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: R, values: B } = await W();
        (r.errors = R), (N = B);
      } else await q(n);
      if ((ye(r.errors, "root"), Re(r.errors))) {
        f.state.next({ errors: {} });
        try {
          await p(N, S);
        } catch (R) {
          I = R;
        }
      } else x && (await x({ ...r.errors }, S)), be(), setTimeout(be);
      if (
        (f.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Re(r.errors) && !I,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        I)
      )
        throw I;
    },
    he = (p, x = {}) => {
      O(n, p) &&
        (de(x.defaultValue)
          ? G(p, Te(O(s, p)))
          : (G(p, x.defaultValue), oe(s, p, Te(x.defaultValue))),
        x.keepTouched || ye(r.touchedFields, p),
        x.keepDirty ||
          (ye(r.dirtyFields, p),
          (r.isDirty = x.defaultValue ? T(p, Te(O(s, p))) : T())),
        x.keepError || (ye(r.errors, p), u.isValid && m()),
        f.state.next({ ...r }));
    },
    Ee = (p, x = {}) => {
      const S = p ? Te(p) : s,
        I = Te(S),
        N = Re(p),
        R = N ? s : I;
      if ((x.keepDefaultValues || (s = S), !x.keepValues)) {
        if (x.keepDirtyValues) {
          const B = new Set([...a.mount, ...Object.keys(Xt(s, o))]);
          for (const ee of Array.from(B))
            O(r.dirtyFields, ee) ? oe(R, ee, O(o, ee)) : G(ee, O(R, ee));
        } else {
          if (es && de(p))
            for (const B of a.mount) {
              const ee = O(n, B);
              if (ee && ee._f) {
                const xe = Array.isArray(ee._f.refs)
                  ? ee._f.refs[0]
                  : ee._f.ref;
                if (Ur(xe)) {
                  const we = xe.closest("form");
                  if (we) {
                    we.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (o = t.shouldUnregister ? (x.keepDefaultValues ? Te(s) : {}) : Te(R)),
          f.array.next({ values: { ...R } }),
          f.values.next({ values: { ...R } });
      }
      (a = {
        mount: x.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (i.mount = !u.isValid || !!x.keepIsValid || !!x.keepDirtyValues),
        (i.watch = !!t.shouldUnregister),
        f.state.next({
          submitCount: x.keepSubmitCount ? r.submitCount : 0,
          isDirty: N
            ? !1
            : x.keepDirty
              ? r.isDirty
              : !!(x.keepDefaultValues && !ht(p, s)),
          isSubmitted: x.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: N
            ? {}
            : x.keepDirtyValues
              ? x.keepDefaultValues && o
                ? Xt(s, o)
                : r.dirtyFields
              : x.keepDefaultValues && p
                ? Xt(s, p)
                : x.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: x.keepTouched ? r.touchedFields : {},
          errors: x.keepErrors ? r.errors : {},
          isSubmitSuccessful: x.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    We = (p, x) => Ee(Ue(p) ? p(o) : p, x);
  return {
    control: {
      register: ce,
      unregister: De,
      getFieldState: ct,
      handleSubmit: ae,
      setError: je,
      _executeSchema: W,
      _getWatch: D,
      _getDirty: T,
      _updateValid: m,
      _removeUnmounted: ne,
      _updateFieldArray: y,
      _updateDisabledField: z,
      _getFieldArray: L,
      _reset: Ee,
      _resetDefaultValues: () =>
        Ue(t.defaultValues) &&
        t.defaultValues().then((p) => {
          We(p, t.resetOptions), f.state.next({ isLoading: !1 });
        }),
      _updateFormState: (p) => {
        r = { ...r, ...p };
      },
      _disableForm: ie,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: A,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return i;
      },
      set _state(p) {
        i = p;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(p) {
        a = p;
      },
      get _formState() {
        return r;
      },
      set _formState(p) {
        r = p;
      },
      get _options() {
        return t;
      },
      set _options(p) {
        t = { ...t, ...p };
      },
    },
    trigger: ue,
    register: ce,
    handleSubmit: ae,
    watch: lt,
    setValue: G,
    getValues: ge,
    reset: We,
    resetField: he,
    clearErrors: St,
    unregister: De,
    setError: je,
    setFocus: (p, x = {}) => {
      const S = O(n, p),
        I = S && S._f;
      if (I) {
        const N = I.refs ? I.refs[0] : I.ref;
        N.focus && (N.focus(), x.shouldSelect && Ue(N.select) && N.select());
      }
    },
    getFieldState: ct,
  };
}
function za(e = {}) {
  const t = re.useRef(void 0),
    r = re.useRef(void 0),
    [n, s] = re.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Ue(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Ue(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Ba(e), formState: n });
  const o = t.current.control;
  return (
    (o._options = e),
    rs({
      subject: o._subjects.state,
      next: (i) => {
        mo(i, o._proxyFormState, o._updateFormState, !0) &&
          s({ ...o._formState });
      },
    }),
    re.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    re.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const i = o._getDirty();
        i !== n.isDirty && o._subjects.state.next({ isDirty: i });
      }
    }, [o, n.isDirty]),
    re.useEffect(() => {
      e.values && !ht(e.values, r.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (r.current = e.values),
          s((i) => ({ ...i })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    re.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    re.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    re.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (t.current.formState = po(n, o)),
    t.current
  );
}
const Ps = (e, t, r) => {
    if (e && "reportValidity" in e) {
      const n = O(r, t);
      e.setCustomValidity((n && n.message) || ""), e.reportValidity();
    }
  },
  Eo = (e, t) => {
    for (const r in t.fields) {
      const n = t.fields[r];
      n && n.ref && "reportValidity" in n.ref
        ? Ps(n.ref, r, e)
        : n.refs && n.refs.forEach((s) => Ps(s, r, e));
    }
  },
  Wa = (e, t) => {
    t.shouldUseNativeValidation && Eo(e, t);
    const r = {};
    for (const n in e) {
      const s = O(t.fields, n),
        o = Object.assign(e[n] || {}, { ref: s && s.ref });
      if (Ua(t.names || Object.keys(e), n)) {
        const i = Object.assign({}, O(r, n));
        oe(i, "root", o), oe(r, n, i);
      } else oe(r, n, o);
    }
    return r;
  },
  Ua = (e, t) => e.some((r) => r.startsWith(t + "."));
var Ha = function (e, t) {
    for (var r = {}; e.length; ) {
      var n = e[0],
        s = n.code,
        o = n.message,
        i = n.path.join(".");
      if (!r[i])
        if ("unionErrors" in n) {
          var a = n.unionErrors[0].errors[0];
          r[i] = { message: a.message, type: a.code };
        } else r[i] = { message: o, type: s };
      if (
        ("unionErrors" in n &&
          n.unionErrors.forEach(function (u) {
            return u.errors.forEach(function (f) {
              return e.push(f);
            });
          }),
        t)
      ) {
        var c = r[i].types,
          l = c && c[n.code];
        r[i] = yo(i, t, r, s, l ? [].concat(l, n.message) : n.message);
      }
      e.shift();
    }
    return r;
  },
  qa = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      function (n, s, o) {
        try {
          return Promise.resolve(
            (function (i, a) {
              try {
                var c = Promise.resolve(
                  e[r.mode === "sync" ? "parse" : "parseAsync"](n, t),
                ).then(function (l) {
                  return (
                    o.shouldUseNativeValidation && Eo({}, o),
                    { errors: {}, values: r.raw ? n : l }
                  );
                });
              } catch (l) {
                return a(l);
              }
              return c && c.then ? c.then(void 0, a) : c;
            })(0, function (i) {
              if (
                (function (a) {
                  return Array.isArray(a?.errors);
                })(i)
              )
                return {
                  values: {},
                  errors: Wa(
                    Ha(
                      i.errors,
                      !o.shouldUseNativeValidation && o.criteriaMode === "all",
                    ),
                    o,
                  ),
                };
              throw i;
            }),
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }
    );
  },
  se;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  (e.assertNever = r),
    (e.arrayToEnum = (s) => {
      const o = {};
      for (const i of s) o[i] = i;
      return o;
    }),
    (e.getValidEnumValues = (s) => {
      const o = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        i = {};
      for (const a of o) i[a] = s[a];
      return e.objectValues(i);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (o) {
        return s[o];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const o = [];
            for (const i in s)
              Object.prototype.hasOwnProperty.call(s, i) && o.push(i);
            return o;
          }),
    (e.find = (s, o) => {
      for (const i of s) if (o(i)) return i;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function n(s, o = " | ") {
    return s.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(o);
  }
  (e.joinValues = n),
    (e.jsonStringifyReplacer = (s, o) =>
      typeof o == "bigint" ? o.toString() : o);
})(se || (se = {}));
var Dn;
(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r });
})(Dn || (Dn = {}));
const M = se.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  nt = (e) => {
    switch (typeof e) {
      case "undefined":
        return M.undefined;
      case "string":
        return M.string;
      case "number":
        return isNaN(e) ? M.nan : M.number;
      case "boolean":
        return M.boolean;
      case "function":
        return M.function;
      case "bigint":
        return M.bigint;
      case "symbol":
        return M.symbol;
      case "object":
        return Array.isArray(e)
          ? M.array
          : e === null
            ? M.null
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? M.promise
              : typeof Map < "u" && e instanceof Map
                ? M.map
                : typeof Set < "u" && e instanceof Set
                  ? M.set
                  : typeof Date < "u" && e instanceof Date
                    ? M.date
                    : M.object;
      default:
        return M.unknown;
    }
  },
  k = se.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Ga = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Pe extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n];
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  format(t) {
    const r =
        t ||
        function (o) {
          return o.message;
        },
      n = { _errors: [] },
      s = (o) => {
        for (const i of o.issues)
          if (i.code === "invalid_union") i.unionErrors.map(s);
          else if (i.code === "invalid_return_type") s(i.returnTypeError);
          else if (i.code === "invalid_arguments") s(i.argumentsError);
          else if (i.path.length === 0) n._errors.push(r(i));
          else {
            let a = n,
              c = 0;
            for (; c < i.path.length; ) {
              const l = i.path[c];
              c === i.path.length - 1
                ? ((a[l] = a[l] || { _errors: [] }), a[l]._errors.push(r(i)))
                : (a[l] = a[l] || { _errors: [] }),
                (a = a[l]),
                c++;
            }
          }
      };
    return s(this), n;
  }
  static assert(t) {
    if (!(t instanceof Pe)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, se.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {},
      n = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((r[s.path[0]] = r[s.path[0]] || []), r[s.path[0]].push(t(s)))
        : n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Pe.create = (e) => new Pe(e);
const zt = (e, t) => {
  let r;
  switch (e.code) {
    case k.invalid_type:
      e.received === M.undefined
        ? (r = "Required")
        : (r = `Expected ${e.expected}, received ${e.received}`);
      break;
    case k.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, se.jsonStringifyReplacer)}`;
      break;
    case k.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${se.joinValues(e.keys, ", ")}`;
      break;
    case k.invalid_union:
      r = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${se.joinValues(e.options)}`;
      break;
    case k.invalid_enum_value:
      r = `Invalid enum value. Expected ${se.joinValues(e.options)}, received '${e.received}'`;
      break;
    case k.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case k.invalid_return_type:
      r = "Invalid function return type";
      break;
    case k.invalid_date:
      r = "Invalid date";
      break;
    case k.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((r = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
            ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
            : "endsWith" in e.validation
              ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
              : se.assertNever(e.validation)
        : e.validation !== "regex"
          ? (r = `Invalid ${e.validation}`)
          : (r = "Invalid");
      break;
    case k.too_small:
      e.type === "array"
        ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
        : e.type === "string"
          ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
          : e.type === "number"
            ? (r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
            : e.type === "date"
              ? (r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
              : (r = "Invalid input");
      break;
    case k.too_big:
      e.type === "array"
        ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
        : e.type === "string"
          ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
          : e.type === "number"
            ? (r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
            : e.type === "bigint"
              ? (r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
              : e.type === "date"
                ? (r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                : (r = "Invalid input");
      break;
    case k.custom:
      r = "Invalid input";
      break;
    case k.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case k.not_finite:
      r = "Number must be finite";
      break;
    default:
      (r = t.defaultError), se.assertNever(e);
  }
  return { message: r };
};
let ko = zt;
function Ka(e) {
  ko = e;
}
function Gr() {
  return ko;
}
const Kr = (e) => {
    const { data: t, path: r, errorMaps: n, issueData: s } = e,
      o = [...r, ...(s.path || [])],
      i = { ...s, path: o };
    if (s.message !== void 0) return { ...s, path: o, message: s.message };
    let a = "";
    const c = n
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of c) a = l(i, { data: t, defaultError: a }).message;
    return { ...s, path: o, message: a };
  },
  Ya = [];
function P(e, t) {
  const r = Gr(),
    n = Kr({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        r,
        r === zt ? void 0 : zt,
      ].filter((s) => !!s),
    });
  e.common.issues.push(n);
}
class Se {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted") return H;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r) {
      const o = await s.key,
        i = await s.value;
      n.push({ key: o, value: i });
    }
    return Se.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: i } = s;
      if (o.status === "aborted" || i.status === "aborted") return H;
      o.status === "dirty" && t.dirty(),
        i.status === "dirty" && t.dirty(),
        o.value !== "__proto__" &&
          (typeof i.value < "u" || s.alwaysSet) &&
          (n[o.value] = i.value);
    }
    return { status: t.value, value: n };
  }
}
const H = Object.freeze({ status: "aborted" }),
  Lt = (e) => ({ status: "dirty", value: e }),
  Ae = (e) => ({ status: "valid", value: e }),
  Vn = (e) => e.status === "aborted",
  Ln = (e) => e.status === "dirty",
  At = (e) => e.status === "valid",
  dr = (e) => typeof Promise < "u" && e instanceof Promise;
function Yr(e, t, r, n) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return t.get(e);
}
function Ao(e, t, r, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return t.set(e, r), r;
}
var V;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) => (typeof t == "string" ? t : t?.message));
})(V || (V = {}));
var rr, nr;
class Ye {
  constructor(t, r, n, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = r),
      (this._path = n),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Is = (e, t) => {
  if (At(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new Pe(e.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function Y(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: r,
    required_error: n,
    description: s,
  } = e;
  if (t && (r || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (i, a) => {
          var c, l;
          const { message: u } = e;
          return i.code === "invalid_enum_value"
            ? { message: u ?? a.defaultError }
            : typeof a.data > "u"
              ? {
                  message:
                    (c = u ?? n) !== null && c !== void 0 ? c : a.defaultError,
                }
              : i.code !== "invalid_type"
                ? { message: a.defaultError }
                : {
                    message:
                      (l = u ?? r) !== null && l !== void 0
                        ? l
                        : a.defaultError,
                  };
        },
        description: s,
      };
}
class Q {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return nt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return (
      r || {
        common: t.parent.common,
        data: t.data,
        parsedType: nt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Se(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: nt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (dr(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const s = {
        common: {
          issues: [],
          async: (n = r?.async) !== null && n !== void 0 ? n : !1,
          contextualErrorMap: r?.errorMap,
        },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: nt(t),
      },
      o = this._parseSync({ data: t, path: s.path, parent: s });
    return Is(s, o);
  }
  "~validate"(t) {
    var r, n;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: nt(t),
    };
    if (!this["~standard"].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: s });
        return At(o) ? { value: o.value } : { issues: s.common.issues };
      } catch (o) {
        !(
          (n =
            (r = o?.message) === null || r === void 0
              ? void 0
              : r.toLowerCase()) === null || n === void 0
        ) &&
          n.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: s }).then((o) =>
      At(o) ? { value: o.value } : { issues: s.common.issues },
    );
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
        common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: nt(t),
      },
      s = this._parse({ data: t, path: n.path, parent: n }),
      o = await (dr(s) ? s : Promise.resolve(s));
    return Is(n, o);
  }
  refine(t, r) {
    const n = (s) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
          ? r(s)
          : r;
    return this._refinement((s, o) => {
      const i = t(s),
        a = () => o.addIssue({ code: k.custom, ...n(s) });
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((c) => (c ? !0 : (a(), !1)))
        : i
          ? !0
          : (a(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) =>
      t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1),
    );
  }
  _refinement(t) {
    return new Ze({
      schema: this,
      typeName: U.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (r) => this["~validate"](r),
      });
  }
  optional() {
    return Ge.create(this, this._def);
  }
  nullable() {
    return vt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $e.create(this);
  }
  promise() {
    return Ut.create(this, this._def);
  }
  or(t) {
    return mr.create([this, t], this._def);
  }
  and(t) {
    return gr.create(this, t, this._def);
  }
  transform(t) {
    return new Ze({
      ...Y(this._def),
      schema: this,
      typeName: U.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new wr({
      ...Y(this._def),
      innerType: this,
      defaultValue: r,
      typeName: U.ZodDefault,
    });
  }
  brand() {
    return new os({ typeName: U.ZodBranded, type: this, ...Y(this._def) });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new _r({
      ...Y(this._def),
      innerType: this,
      catchValue: r,
      typeName: U.ZodCatch,
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return Ar.create(this, t);
  }
  readonly() {
    return Sr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Xa = /^c[^\s-]{8,}$/i,
  Ja = /^[0-9a-z]+$/,
  Qa = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  ec =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  tc = /^[a-z0-9_-]{21}$/i,
  rc = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  nc =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  sc =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  oc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Cn;
const ic =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ac =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  cc =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  lc =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  uc = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  dc = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  To =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  fc = new RegExp(`^${To}$`);
function Ro(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function hc(e) {
  return new RegExp(`^${Ro(e)}$`);
}
function Oo(e) {
  let t = `${To}T${Ro(e)}`;
  const r = [];
  return (
    r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${r.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function pc(e, t) {
  return !!(
    ((t === "v4" || !t) && ic.test(e)) ||
    ((t === "v6" || !t) && cc.test(e))
  );
}
function mc(e, t) {
  if (!rc.test(e)) return !1;
  try {
    const [r] = e.split("."),
      n = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      s = JSON.parse(atob(n));
    return !(
      typeof s != "object" ||
      s === null ||
      !s.typ ||
      !s.alg ||
      (t && s.alg !== t)
    );
  } catch {
    return !1;
  }
}
function gc(e, t) {
  return !!(
    ((t === "v4" || !t) && ac.test(e)) ||
    ((t === "v6" || !t) && lc.test(e))
  );
}
class Fe extends Q {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== M.string)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        P(o, {
          code: k.invalid_type,
          expected: M.string,
          received: o.parsedType,
        }),
        H
      );
    }
    const n = new Se();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            code: k.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            code: k.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "length") {
        const i = t.data.length > o.value,
          a = t.data.length < o.value;
        (i || a) &&
          ((s = this._getOrReturnCtx(t, s)),
          i
            ? P(s, {
                code: k.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : a &&
              P(s, {
                code: k.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          n.dirty());
      } else if (o.kind === "email")
        sc.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "email",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "emoji")
        Cn || (Cn = new RegExp(oc, "u")),
          Cn.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            P(s, {
              validation: "emoji",
              code: k.invalid_string,
              message: o.message,
            }),
            n.dirty());
      else if (o.kind === "uuid")
        ec.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "uuid",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "nanoid")
        tc.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "nanoid",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "cuid")
        Xa.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "cuid",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "cuid2")
        Ja.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "cuid2",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "ulid")
        Qa.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            validation: "ulid",
            code: k.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            P(s, {
              validation: "url",
              code: k.invalid_string,
              message: o.message,
            }),
            n.dirty();
        }
      else
        o.kind === "regex"
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              P(s, {
                validation: "regex",
                code: k.invalid_string,
                message: o.message,
              }),
              n.dirty()))
          : o.kind === "trim"
            ? (t.data = t.data.trim())
            : o.kind === "includes"
              ? t.data.includes(o.value, o.position) ||
                ((s = this._getOrReturnCtx(t, s)),
                P(s, {
                  code: k.invalid_string,
                  validation: { includes: o.value, position: o.position },
                  message: o.message,
                }),
                n.dirty())
              : o.kind === "toLowerCase"
                ? (t.data = t.data.toLowerCase())
                : o.kind === "toUpperCase"
                  ? (t.data = t.data.toUpperCase())
                  : o.kind === "startsWith"
                    ? t.data.startsWith(o.value) ||
                      ((s = this._getOrReturnCtx(t, s)),
                      P(s, {
                        code: k.invalid_string,
                        validation: { startsWith: o.value },
                        message: o.message,
                      }),
                      n.dirty())
                    : o.kind === "endsWith"
                      ? t.data.endsWith(o.value) ||
                        ((s = this._getOrReturnCtx(t, s)),
                        P(s, {
                          code: k.invalid_string,
                          validation: { endsWith: o.value },
                          message: o.message,
                        }),
                        n.dirty())
                      : o.kind === "datetime"
                        ? Oo(o).test(t.data) ||
                          ((s = this._getOrReturnCtx(t, s)),
                          P(s, {
                            code: k.invalid_string,
                            validation: "datetime",
                            message: o.message,
                          }),
                          n.dirty())
                        : o.kind === "date"
                          ? fc.test(t.data) ||
                            ((s = this._getOrReturnCtx(t, s)),
                            P(s, {
                              code: k.invalid_string,
                              validation: "date",
                              message: o.message,
                            }),
                            n.dirty())
                          : o.kind === "time"
                            ? hc(o).test(t.data) ||
                              ((s = this._getOrReturnCtx(t, s)),
                              P(s, {
                                code: k.invalid_string,
                                validation: "time",
                                message: o.message,
                              }),
                              n.dirty())
                            : o.kind === "duration"
                              ? nc.test(t.data) ||
                                ((s = this._getOrReturnCtx(t, s)),
                                P(s, {
                                  validation: "duration",
                                  code: k.invalid_string,
                                  message: o.message,
                                }),
                                n.dirty())
                              : o.kind === "ip"
                                ? pc(t.data, o.version) ||
                                  ((s = this._getOrReturnCtx(t, s)),
                                  P(s, {
                                    validation: "ip",
                                    code: k.invalid_string,
                                    message: o.message,
                                  }),
                                  n.dirty())
                                : o.kind === "jwt"
                                  ? mc(t.data, o.alg) ||
                                    ((s = this._getOrReturnCtx(t, s)),
                                    P(s, {
                                      validation: "jwt",
                                      code: k.invalid_string,
                                      message: o.message,
                                    }),
                                    n.dirty())
                                  : o.kind === "cidr"
                                    ? gc(t.data, o.version) ||
                                      ((s = this._getOrReturnCtx(t, s)),
                                      P(s, {
                                        validation: "cidr",
                                        code: k.invalid_string,
                                        message: o.message,
                                      }),
                                      n.dirty())
                                    : o.kind === "base64"
                                      ? uc.test(t.data) ||
                                        ((s = this._getOrReturnCtx(t, s)),
                                        P(s, {
                                          validation: "base64",
                                          code: k.invalid_string,
                                          message: o.message,
                                        }),
                                        n.dirty())
                                      : o.kind === "base64url"
                                        ? dc.test(t.data) ||
                                          ((s = this._getOrReturnCtx(t, s)),
                                          P(s, {
                                            validation: "base64url",
                                            code: k.invalid_string,
                                            message: o.message,
                                          }),
                                          n.dirty())
                                        : se.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: k.invalid_string,
      ...V.errToObj(n),
    });
  }
  _addCheck(t) {
    return new Fe({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...V.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...V.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...V.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...V.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...V.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...V.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...V.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...V.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...V.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...V.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...V.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...V.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...V.errToObj(t) });
  }
  datetime(t) {
    var r, n;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          offset: (r = t?.offset) !== null && r !== void 0 ? r : !1,
          local: (n = t?.local) !== null && n !== void 0 ? n : !1,
          ...V.errToObj(t?.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          ...V.errToObj(t?.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...V.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: "regex", regex: t, ...V.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r?.position,
      ...V.errToObj(r?.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: "startsWith", value: t, ...V.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: "endsWith", value: t, ...V.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t, ...V.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t, ...V.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: "length", value: t, ...V.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, V.errToObj(t));
  }
  trim() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Fe.create = (e) => {
  var t;
  return new Fe({
    checks: [],
    typeName: U.ZodString,
    coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
    ...Y(e),
  });
};
function vc(e, t) {
  const r = (e.toString().split(".")[1] || "").length,
    n = (t.toString().split(".")[1] || "").length,
    s = r > n ? r : n,
    o = parseInt(e.toFixed(s).replace(".", "")),
    i = parseInt(t.toFixed(s).replace(".", ""));
  return (o % i) / Math.pow(10, s);
}
class pt extends Q {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== M.number)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        P(o, {
          code: k.invalid_type,
          expected: M.number,
          received: o.parsedType,
        }),
        H
      );
    }
    let n;
    const s = new Se();
    for (const o of this._def.checks)
      o.kind === "int"
        ? se.isInteger(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, {
            code: k.invalid_type,
            expected: "integer",
            received: "float",
            message: o.message,
          }),
          s.dirty())
        : o.kind === "min"
          ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            P(n, {
              code: k.too_small,
              minimum: o.value,
              type: "number",
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            s.dirty())
          : o.kind === "max"
            ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
              ((n = this._getOrReturnCtx(t, n)),
              P(n, {
                code: k.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "multipleOf"
              ? vc(t.data, o.value) !== 0 &&
                ((n = this._getOrReturnCtx(t, n)),
                P(n, {
                  code: k.not_multiple_of,
                  multipleOf: o.value,
                  message: o.message,
                }),
                s.dirty())
              : o.kind === "finite"
                ? Number.isFinite(t.data) ||
                  ((n = this._getOrReturnCtx(t, n)),
                  P(n, { code: k.not_finite, message: o.message }),
                  s.dirty())
                : se.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, V.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, V.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, V.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, V.toString(r));
  }
  setLimit(t, r, n, s) {
    return new pt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: r, inclusive: n, message: V.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new pt({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: V.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: V.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: V.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: V.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: V.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(r),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: V.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: V.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: V.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && se.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min"
        ? (r === null || n.value > r) && (r = n.value)
        : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
pt.create = (e) =>
  new pt({
    checks: [],
    typeName: U.ZodNumber,
    coerce: e?.coerce || !1,
    ...Y(e),
  });
class mt extends Q {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== M.bigint) return this._getInvalidInput(t);
    let n;
    const s = new Se();
    for (const o of this._def.checks)
      o.kind === "min"
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          P(n, {
            code: k.too_small,
            type: "bigint",
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "max"
          ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            P(n, {
              code: k.too_big,
              type: "bigint",
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            s.dirty())
          : o.kind === "multipleOf"
            ? t.data % o.value !== BigInt(0) &&
              ((n = this._getOrReturnCtx(t, n)),
              P(n, {
                code: k.not_multiple_of,
                multipleOf: o.value,
                message: o.message,
              }),
              s.dirty())
            : se.assertNever(o);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return (
      P(r, {
        code: k.invalid_type,
        expected: M.bigint,
        received: r.parsedType,
      }),
      H
    );
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, V.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, V.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, V.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, V.toString(r));
  }
  setLimit(t, r, n, s) {
    return new mt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: r, inclusive: n, message: V.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new mt({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(r),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
mt.create = (e) => {
  var t;
  return new mt({
    checks: [],
    typeName: U.ZodBigInt,
    coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
    ...Y(e),
  });
};
class fr extends Q {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== M.boolean)
    ) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.boolean,
          received: n.parsedType,
        }),
        H
      );
    }
    return Ae(t.data);
  }
}
fr.create = (e) =>
  new fr({ typeName: U.ZodBoolean, coerce: e?.coerce || !1, ...Y(e) });
class Tt extends Q {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== M.date)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        P(o, {
          code: k.invalid_type,
          expected: M.date,
          received: o.parsedType,
        }),
        H
      );
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return P(o, { code: k.invalid_date }), H;
    }
    const n = new Se();
    let s;
    for (const o of this._def.checks)
      o.kind === "min"
        ? t.data.getTime() < o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          P(s, {
            code: k.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: "date",
          }),
          n.dirty())
        : o.kind === "max"
          ? t.data.getTime() > o.value &&
            ((s = this._getOrReturnCtx(t, s)),
            P(s, {
              code: k.too_big,
              message: o.message,
              inclusive: !0,
              exact: !1,
              maximum: o.value,
              type: "date",
            }),
            n.dirty())
          : se.assertNever(o);
    return { status: n.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Tt({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: V.toString(r),
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: V.toString(r),
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
Tt.create = (e) =>
  new Tt({ checks: [], coerce: e?.coerce || !1, typeName: U.ZodDate, ...Y(e) });
class Xr extends Q {
  _parse(t) {
    if (this._getType(t) !== M.symbol) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.symbol,
          received: n.parsedType,
        }),
        H
      );
    }
    return Ae(t.data);
  }
}
Xr.create = (e) => new Xr({ typeName: U.ZodSymbol, ...Y(e) });
class hr extends Q {
  _parse(t) {
    if (this._getType(t) !== M.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.undefined,
          received: n.parsedType,
        }),
        H
      );
    }
    return Ae(t.data);
  }
}
hr.create = (e) => new hr({ typeName: U.ZodUndefined, ...Y(e) });
class pr extends Q {
  _parse(t) {
    if (this._getType(t) !== M.null) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.null,
          received: n.parsedType,
        }),
        H
      );
    }
    return Ae(t.data);
  }
}
pr.create = (e) => new pr({ typeName: U.ZodNull, ...Y(e) });
class Wt extends Q {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Ae(t.data);
  }
}
Wt.create = (e) => new Wt({ typeName: U.ZodAny, ...Y(e) });
class kt extends Q {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Ae(t.data);
  }
}
kt.create = (e) => new kt({ typeName: U.ZodUnknown, ...Y(e) });
class st extends Q {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return (
      P(r, { code: k.invalid_type, expected: M.never, received: r.parsedType }),
      H
    );
  }
}
st.create = (e) => new st({ typeName: U.ZodNever, ...Y(e) });
class Jr extends Q {
  _parse(t) {
    if (this._getType(t) !== M.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.void,
          received: n.parsedType,
        }),
        H
      );
    }
    return Ae(t.data);
  }
}
Jr.create = (e) => new Jr({ typeName: U.ZodVoid, ...Y(e) });
class $e extends Q {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t),
      s = this._def;
    if (r.parsedType !== M.array)
      return (
        P(r, {
          code: k.invalid_type,
          expected: M.array,
          received: r.parsedType,
        }),
        H
      );
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value,
        a = r.data.length < s.exactLength.value;
      (i || a) &&
        (P(r, {
          code: i ? k.too_big : k.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: i ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (s.minLength !== null &&
        r.data.length < s.minLength.value &&
        (P(r, {
          code: k.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        n.dirty()),
      s.maxLength !== null &&
        r.data.length > s.maxLength.value &&
        (P(r, {
          code: k.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((i, a) => s.type._parseAsync(new Ye(r, i, r.path, a))),
      ).then((i) => Se.mergeArray(n, i));
    const o = [...r.data].map((i, a) =>
      s.type._parseSync(new Ye(r, i, r.path, a)),
    );
    return Se.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new $e({
      ...this._def,
      minLength: { value: t, message: V.toString(r) },
    });
  }
  max(t, r) {
    return new $e({
      ...this._def,
      maxLength: { value: t, message: V.toString(r) },
    });
  }
  length(t, r) {
    return new $e({
      ...this._def,
      exactLength: { value: t, message: V.toString(r) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
$e.create = (e, t) =>
  new $e({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: U.ZodArray,
    ...Y(t),
  });
function Vt(e) {
  if (e instanceof fe) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Ge.create(Vt(n));
    }
    return new fe({ ...e._def, shape: () => t });
  } else
    return e instanceof $e
      ? new $e({ ...e._def, type: Vt(e.element) })
      : e instanceof Ge
        ? Ge.create(Vt(e.unwrap()))
        : e instanceof vt
          ? vt.create(Vt(e.unwrap()))
          : e instanceof Xe
            ? Xe.create(e.items.map((t) => Vt(t)))
            : e;
}
class fe extends Q {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      r = se.objectKeys(t);
    return (this._cached = { shape: t, keys: r });
  }
  _parse(t) {
    if (this._getType(t) !== M.object) {
      const l = this._getOrReturnCtx(t);
      return (
        P(l, {
          code: k.invalid_type,
          expected: M.object,
          received: l.parsedType,
        }),
        H
      );
    }
    const { status: n, ctx: s } = this._processInputParams(t),
      { shape: o, keys: i } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof st && this._def.unknownKeys === "strip")
    )
      for (const l in s.data) i.includes(l) || a.push(l);
    const c = [];
    for (const l of i) {
      const u = o[l],
        f = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Ye(s, f, s.path, l)),
        alwaysSet: l in s.data,
      });
    }
    if (this._def.catchall instanceof st) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (l === "strict")
        a.length > 0 &&
          (P(s, { code: k.unrecognized_keys, keys: a }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const f = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(new Ye(s, f, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const u of c) {
              const f = await u.key,
                v = await u.value;
              l.push({ key: f, value: v, alwaysSet: u.alwaysSet });
            }
            return l;
          })
          .then((l) => Se.mergeObjectSync(n, l))
      : Se.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      V.errToObj,
      new fe({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (r, n) => {
                var s, o, i, a;
                const c =
                  (i =
                    (o = (s = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(s, r, n).message) !== null && i !== void 0
                    ? i
                    : n.defaultError;
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = V.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : c,
                    }
                  : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new fe({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new fe({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new fe({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new fe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: U.ZodObject,
    });
  }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  catchall(t) {
    return new fe({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      se.objectKeys(t).forEach((n) => {
        t[n] && this.shape[n] && (r[n] = this.shape[n]);
      }),
      new fe({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      se.objectKeys(this.shape).forEach((n) => {
        t[n] || (r[n] = this.shape[n]);
      }),
      new fe({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return Vt(this);
  }
  partial(t) {
    const r = {};
    return (
      se.objectKeys(this.shape).forEach((n) => {
        const s = this.shape[n];
        t && !t[n] ? (r[n] = s) : (r[n] = s.optional());
      }),
      new fe({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      se.objectKeys(this.shape).forEach((n) => {
        if (t && !t[n]) r[n] = this.shape[n];
        else {
          let o = this.shape[n];
          for (; o instanceof Ge; ) o = o._def.innerType;
          r[n] = o;
        }
      }),
      new fe({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return No(se.objectKeys(this.shape));
  }
}
fe.create = (e, t) =>
  new fe({
    shape: () => e,
    unknownKeys: "strip",
    catchall: st.create(),
    typeName: U.ZodObject,
    ...Y(t),
  });
fe.strictCreate = (e, t) =>
  new fe({
    shape: () => e,
    unknownKeys: "strict",
    catchall: st.create(),
    typeName: U.ZodObject,
    ...Y(t),
  });
fe.lazycreate = (e, t) =>
  new fe({
    shape: e,
    unknownKeys: "strip",
    catchall: st.create(),
    typeName: U.ZodObject,
    ...Y(t),
  });
class mr extends Q {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = this._def.options;
    function s(o) {
      for (const a of o) if (a.result.status === "valid") return a.result;
      for (const a of o)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((a) => new Pe(a.ctx.common.issues));
      return P(r, { code: k.invalid_union, unionErrors: i }), H;
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (o) => {
          const i = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await o._parseAsync({
              data: r.data,
              path: r.path,
              parent: i,
            }),
            ctx: i,
          };
        }),
      ).then(s);
    {
      let o;
      const i = [];
      for (const c of n) {
        const l = { ...r, common: { ...r.common, issues: [] }, parent: null },
          u = c._parseSync({ data: r.data, path: r.path, parent: l });
        if (u.status === "valid") return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: l }),
          l.common.issues.length && i.push(l.common.issues);
      }
      if (o) return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((c) => new Pe(c));
      return P(r, { code: k.invalid_union, unionErrors: a }), H;
    }
  }
  get options() {
    return this._def.options;
  }
}
mr.create = (e, t) => new mr({ options: e, typeName: U.ZodUnion, ...Y(t) });
const rt = (e) =>
  e instanceof yr
    ? rt(e.schema)
    : e instanceof Ze
      ? rt(e.innerType())
      : e instanceof br
        ? [e.value]
        : e instanceof gt
          ? e.options
          : e instanceof xr
            ? se.objectValues(e.enum)
            : e instanceof wr
              ? rt(e._def.innerType)
              : e instanceof hr
                ? [void 0]
                : e instanceof pr
                  ? [null]
                  : e instanceof Ge
                    ? [void 0, ...rt(e.unwrap())]
                    : e instanceof vt
                      ? [null, ...rt(e.unwrap())]
                      : e instanceof os || e instanceof Sr
                        ? rt(e.unwrap())
                        : e instanceof _r
                          ? rt(e._def.innerType)
                          : [];
class un extends Q {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== M.object)
      return (
        P(r, {
          code: k.invalid_type,
          expected: M.object,
          received: r.parsedType,
        }),
        H
      );
    const n = this.discriminator,
      s = r.data[n],
      o = this.optionsMap.get(s);
    return o
      ? r.common.async
        ? o._parseAsync({ data: r.data, path: r.path, parent: r })
        : o._parseSync({ data: r.data, path: r.path, parent: r })
      : (P(r, {
          code: k.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }),
        H);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, r, n) {
    const s = new Map();
    for (const o of r) {
      const i = rt(o.shape[t]);
      if (!i.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
        );
      for (const a of i) {
        if (s.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(a)}`,
          );
        s.set(a, o);
      }
    }
    return new un({
      typeName: U.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...Y(n),
    });
  }
}
function Fn(e, t) {
  const r = nt(e),
    n = nt(t);
  if (e === t) return { valid: !0, data: e };
  if (r === M.object && n === M.object) {
    const s = se.objectKeys(t),
      o = se.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      i = { ...e, ...t };
    for (const a of o) {
      const c = Fn(e[a], t[a]);
      if (!c.valid) return { valid: !1 };
      i[a] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === M.array && n === M.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o],
        a = t[o],
        c = Fn(i, a);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === M.date && n === M.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class gr extends Q {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      s = (o, i) => {
        if (Vn(o) || Vn(i)) return H;
        const a = Fn(o.value, i.value);
        return a.valid
          ? ((Ln(o) || Ln(i)) && r.dirty(), { status: r.value, value: a.data })
          : (P(n, { code: k.invalid_intersection_types }), H);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([o, i]) => s(o, i))
      : s(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
}
gr.create = (e, t, r) =>
  new gr({ left: e, right: t, typeName: U.ZodIntersection, ...Y(r) });
class Xe extends Q {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== M.array)
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.array,
          received: n.parsedType,
        }),
        H
      );
    if (n.data.length < this._def.items.length)
      return (
        P(n, {
          code: k.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        H
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (P(n, {
        code: k.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const o = [...n.data]
      .map((i, a) => {
        const c = this._def.items[a] || this._def.rest;
        return c ? c._parse(new Ye(n, i, n.path, a)) : null;
      })
      .filter((i) => !!i);
    return n.common.async
      ? Promise.all(o).then((i) => Se.mergeArray(r, i))
      : Se.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Xe({ ...this._def, rest: t });
  }
}
Xe.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Xe({ items: e, typeName: U.ZodTuple, rest: null, ...Y(t) });
};
class vr extends Q {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== M.object)
      return (
        P(n, {
          code: k.invalid_type,
          expected: M.object,
          received: n.parsedType,
        }),
        H
      );
    const s = [],
      o = this._def.keyType,
      i = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: o._parse(new Ye(n, a, n.path, a)),
        value: i._parse(new Ye(n, n.data[a], n.path, a)),
        alwaysSet: a in n.data,
      });
    return n.common.async
      ? Se.mergeObjectAsync(r, s)
      : Se.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof Q
      ? new vr({ keyType: t, valueType: r, typeName: U.ZodRecord, ...Y(n) })
      : new vr({
          keyType: Fe.create(),
          valueType: t,
          typeName: U.ZodRecord,
          ...Y(r),
        });
  }
}
class Qr extends Q {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== M.map)
      return (
        P(n, { code: k.invalid_type, expected: M.map, received: n.parsedType }),
        H
      );
    const s = this._def.keyType,
      o = this._def.valueType,
      i = [...n.data.entries()].map(([a, c], l) => ({
        key: s._parse(new Ye(n, a, n.path, [l, "key"])),
        value: o._parse(new Ye(n, c, n.path, [l, "value"])),
      }));
    if (n.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const l = await c.key,
            u = await c.value;
          if (l.status === "aborted" || u.status === "aborted") return H;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(),
            a.set(l.value, u.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = new Map();
      for (const c of i) {
        const l = c.key,
          u = c.value;
        if (l.status === "aborted" || u.status === "aborted") return H;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(),
          a.set(l.value, u.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Qr.create = (e, t, r) =>
  new Qr({ valueType: t, keyType: e, typeName: U.ZodMap, ...Y(r) });
class Rt extends Q {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== M.set)
      return (
        P(n, { code: k.invalid_type, expected: M.set, received: n.parsedType }),
        H
      );
    const s = this._def;
    s.minSize !== null &&
      n.data.size < s.minSize.value &&
      (P(n, {
        code: k.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      r.dirty()),
      s.maxSize !== null &&
        n.data.size > s.maxSize.value &&
        (P(n, {
          code: k.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        r.dirty());
    const o = this._def.valueType;
    function i(c) {
      const l = new Set();
      for (const u of c) {
        if (u.status === "aborted") return H;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) =>
      o._parse(new Ye(n, c, n.path, l)),
    );
    return n.common.async ? Promise.all(a).then((c) => i(c)) : i(a);
  }
  min(t, r) {
    return new Rt({
      ...this._def,
      minSize: { value: t, message: V.toString(r) },
    });
  }
  max(t, r) {
    return new Rt({
      ...this._def,
      maxSize: { value: t, message: V.toString(r) },
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Rt.create = (e, t) =>
  new Rt({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: U.ZodSet,
    ...Y(t),
  });
class Ft extends Q {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== M.function)
      return (
        P(r, {
          code: k.invalid_type,
          expected: M.function,
          received: r.parsedType,
        }),
        H
      );
    function n(a, c) {
      return Kr({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Gr(),
          zt,
        ].filter((l) => !!l),
        issueData: { code: k.invalid_arguments, argumentsError: c },
      });
    }
    function s(a, c) {
      return Kr({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Gr(),
          zt,
        ].filter((l) => !!l),
        issueData: { code: k.invalid_return_type, returnTypeError: c },
      });
    }
    const o = { errorMap: r.common.contextualErrorMap },
      i = r.data;
    if (this._def.returns instanceof Ut) {
      const a = this;
      return Ae(async function (...c) {
        const l = new Pe([]),
          u = await a._def.args.parseAsync(c, o).catch((g) => {
            throw (l.addIssue(n(c, g)), l);
          }),
          f = await Reflect.apply(i, this, u);
        return await a._def.returns._def.type.parseAsync(f, o).catch((g) => {
          throw (l.addIssue(s(f, g)), l);
        });
      });
    } else {
      const a = this;
      return Ae(function (...c) {
        const l = a._def.args.safeParse(c, o);
        if (!l.success) throw new Pe([n(c, l.error)]);
        const u = Reflect.apply(i, this, l.data),
          f = a._def.returns.safeParse(u, o);
        if (!f.success) throw new Pe([s(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Ft({ ...this._def, args: Xe.create(t).rest(kt.create()) });
  }
  returns(t) {
    return new Ft({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new Ft({
      args: t || Xe.create([]).rest(kt.create()),
      returns: r || kt.create(),
      typeName: U.ZodFunction,
      ...Y(n),
    });
  }
}
class yr extends Q {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
yr.create = (e, t) => new yr({ getter: e, typeName: U.ZodLazy, ...Y(t) });
class br extends Q {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          received: r.data,
          code: k.invalid_literal,
          expected: this._def.value,
        }),
        H
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
br.create = (e, t) => new br({ value: e, typeName: U.ZodLiteral, ...Y(t) });
function No(e, t) {
  return new gt({ values: e, typeName: U.ZodEnum, ...Y(t) });
}
class gt extends Q {
  constructor() {
    super(...arguments), rr.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return (
        P(r, {
          expected: se.joinValues(n),
          received: r.parsedType,
          code: k.invalid_type,
        }),
        H
      );
    }
    if (
      (Yr(this, rr) || Ao(this, rr, new Set(this._def.values)),
      !Yr(this, rr).has(t.data))
    ) {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return (
        P(r, { received: r.data, code: k.invalid_enum_value, options: n }), H
      );
    }
    return Ae(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return gt.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return gt.create(
      this.options.filter((n) => !t.includes(n)),
      { ...this._def, ...r },
    );
  }
}
rr = new WeakMap();
gt.create = No;
class xr extends Q {
  constructor() {
    super(...arguments), nr.set(this, void 0);
  }
  _parse(t) {
    const r = se.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(t);
    if (n.parsedType !== M.string && n.parsedType !== M.number) {
      const s = se.objectValues(r);
      return (
        P(n, {
          expected: se.joinValues(s),
          received: n.parsedType,
          code: k.invalid_type,
        }),
        H
      );
    }
    if (
      (Yr(this, nr) ||
        Ao(this, nr, new Set(se.getValidEnumValues(this._def.values))),
      !Yr(this, nr).has(t.data))
    ) {
      const s = se.objectValues(r);
      return (
        P(n, { received: n.data, code: k.invalid_enum_value, options: s }), H
      );
    }
    return Ae(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
nr = new WeakMap();
xr.create = (e, t) => new xr({ values: e, typeName: U.ZodNativeEnum, ...Y(t) });
class Ut extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== M.promise && r.common.async === !1)
      return (
        P(r, {
          code: k.invalid_type,
          expected: M.promise,
          received: r.parsedType,
        }),
        H
      );
    const n = r.parsedType === M.promise ? r.data : Promise.resolve(r.data);
    return Ae(
      n.then((s) =>
        this._def.type.parseAsync(s, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        }),
      ),
    );
  }
}
Ut.create = (e, t) => new Ut({ type: e, typeName: U.ZodPromise, ...Y(t) });
class Ze extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === U.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      s = this._def.effect || null,
      o = {
        addIssue: (i) => {
          P(n, i), i.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), s.type === "preprocess")) {
      const i = s.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(i).then(async (a) => {
          if (r.value === "aborted") return H;
          const c = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n,
          });
          return c.status === "aborted"
            ? H
            : c.status === "dirty" || r.value === "dirty"
              ? Lt(c.value)
              : c;
        });
      {
        if (r.value === "aborted") return H;
        const a = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? H
          : a.status === "dirty" || r.value === "dirty"
            ? Lt(a.value)
            : a;
      }
    }
    if (s.type === "refinement") {
      const i = (a) => {
        const c = s.refinement(a, o);
        if (n.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? H
          : (a.status === "dirty" && r.dirty(),
            i(a.value),
            { status: r.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((a) =>
            a.status === "aborted"
              ? H
              : (a.status === "dirty" && r.dirty(),
                i(a.value).then(() => ({ status: r.value, value: a.value }))),
          );
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!At(i)) return i;
        const a = s.transform(i.value, o);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: r.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((i) =>
            At(i)
              ? Promise.resolve(s.transform(i.value, o)).then((a) => ({
                  status: r.value,
                  value: a,
                }))
              : i,
          );
    se.assertNever(s);
  }
}
Ze.create = (e, t, r) =>
  new Ze({ schema: e, typeName: U.ZodEffects, effect: t, ...Y(r) });
Ze.createWithPreprocess = (e, t, r) =>
  new Ze({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: U.ZodEffects,
    ...Y(r),
  });
class Ge extends Q {
  _parse(t) {
    return this._getType(t) === M.undefined
      ? Ae(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ge.create = (e, t) =>
  new Ge({ innerType: e, typeName: U.ZodOptional, ...Y(t) });
class vt extends Q {
  _parse(t) {
    return this._getType(t) === M.null
      ? Ae(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vt.create = (e, t) =>
  new vt({ innerType: e, typeName: U.ZodNullable, ...Y(t) });
class wr extends Q {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return (
      r.parsedType === M.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
wr.create = (e, t) =>
  new wr({
    innerType: e,
    typeName: U.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...Y(t),
  });
class _r extends Q {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = { ...r, common: { ...r.common, issues: [] } },
      s = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return dr(s)
      ? s.then((o) => ({
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Pe(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Pe(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
_r.create = (e, t) =>
  new _r({
    innerType: e,
    typeName: U.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...Y(t),
  });
class en extends Q {
  _parse(t) {
    if (this._getType(t) !== M.nan) {
      const n = this._getOrReturnCtx(t);
      return (
        P(n, { code: k.invalid_type, expected: M.nan, received: n.parsedType }),
        H
      );
    }
    return { status: "valid", value: t.data };
  }
}
en.create = (e) => new en({ typeName: U.ZodNaN, ...Y(e) });
const yc = Symbol("zod_brand");
class os extends Q {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = r.data;
    return this._def.type._parse({ data: n, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ar extends Q {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return o.status === "aborted"
          ? H
          : o.status === "dirty"
            ? (r.dirty(), Lt(o.value))
            : this._def.out._parseAsync({
                data: o.value,
                path: n.path,
                parent: n,
              });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      });
      return s.status === "aborted"
        ? H
        : s.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: s.value })
          : this._def.out._parseSync({
              data: s.value,
              path: n.path,
              parent: n,
            });
    }
  }
  static create(t, r) {
    return new Ar({ in: t, out: r, typeName: U.ZodPipeline });
  }
}
class Sr extends Q {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      n = (s) => (At(s) && (s.value = Object.freeze(s.value)), s);
    return dr(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Sr.create = (e, t) =>
  new Sr({ innerType: e, typeName: U.ZodReadonly, ...Y(t) });
function Po(e, t = {}, r) {
  return e
    ? Wt.create().superRefine((n, s) => {
        var o, i;
        if (!e(n)) {
          const a =
              typeof t == "function"
                ? t(n)
                : typeof t == "string"
                  ? { message: t }
                  : t,
            c =
              (i = (o = a.fatal) !== null && o !== void 0 ? o : r) !== null &&
              i !== void 0
                ? i
                : !0,
            l = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...l, fatal: c });
        }
      })
    : Wt.create();
}
const bc = { object: fe.lazycreate };
var U;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(U || (U = {}));
const xc = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Po((r) => r instanceof e, t),
  Io = Fe.create,
  Mo = pt.create,
  wc = en.create,
  _c = mt.create,
  jo = fr.create,
  Sc = Tt.create,
  Cc = Xr.create,
  Ec = hr.create,
  kc = pr.create,
  Ac = Wt.create,
  Tc = kt.create,
  Rc = st.create,
  Oc = Jr.create,
  Nc = $e.create,
  Pc = fe.create,
  Ic = fe.strictCreate,
  Mc = mr.create,
  jc = un.create,
  Dc = gr.create,
  Vc = Xe.create,
  Lc = vr.create,
  Fc = Qr.create,
  $c = Rt.create,
  Zc = Ft.create,
  Bc = yr.create,
  zc = br.create,
  Wc = gt.create,
  Uc = xr.create,
  Hc = Ut.create,
  Ms = Ze.create,
  qc = Ge.create,
  Gc = vt.create,
  Kc = Ze.createWithPreprocess,
  Yc = Ar.create,
  Xc = () => Io().optional(),
  Jc = () => Mo().optional(),
  Qc = () => jo().optional(),
  el = {
    string: (e) => Fe.create({ ...e, coerce: !0 }),
    number: (e) => pt.create({ ...e, coerce: !0 }),
    boolean: (e) => fr.create({ ...e, coerce: !0 }),
    bigint: (e) => mt.create({ ...e, coerce: !0 }),
    date: (e) => Tt.create({ ...e, coerce: !0 }),
  },
  tl = H;
var Qt = Object.freeze({
  __proto__: null,
  defaultErrorMap: zt,
  setErrorMap: Ka,
  getErrorMap: Gr,
  makeIssue: Kr,
  EMPTY_PATH: Ya,
  addIssueToContext: P,
  ParseStatus: Se,
  INVALID: H,
  DIRTY: Lt,
  OK: Ae,
  isAborted: Vn,
  isDirty: Ln,
  isValid: At,
  isAsync: dr,
  get util() {
    return se;
  },
  get objectUtil() {
    return Dn;
  },
  ZodParsedType: M,
  getParsedType: nt,
  ZodType: Q,
  datetimeRegex: Oo,
  ZodString: Fe,
  ZodNumber: pt,
  ZodBigInt: mt,
  ZodBoolean: fr,
  ZodDate: Tt,
  ZodSymbol: Xr,
  ZodUndefined: hr,
  ZodNull: pr,
  ZodAny: Wt,
  ZodUnknown: kt,
  ZodNever: st,
  ZodVoid: Jr,
  ZodArray: $e,
  ZodObject: fe,
  ZodUnion: mr,
  ZodDiscriminatedUnion: un,
  ZodIntersection: gr,
  ZodTuple: Xe,
  ZodRecord: vr,
  ZodMap: Qr,
  ZodSet: Rt,
  ZodFunction: Ft,
  ZodLazy: yr,
  ZodLiteral: br,
  ZodEnum: gt,
  ZodNativeEnum: xr,
  ZodPromise: Ut,
  ZodEffects: Ze,
  ZodTransformer: Ze,
  ZodOptional: Ge,
  ZodNullable: vt,
  ZodDefault: wr,
  ZodCatch: _r,
  ZodNaN: en,
  BRAND: yc,
  ZodBranded: os,
  ZodPipeline: Ar,
  ZodReadonly: Sr,
  custom: Po,
  Schema: Q,
  ZodSchema: Q,
  late: bc,
  get ZodFirstPartyTypeKind() {
    return U;
  },
  coerce: el,
  any: Ac,
  array: Nc,
  bigint: _c,
  boolean: jo,
  date: Sc,
  discriminatedUnion: jc,
  effect: Ms,
  enum: Wc,
  function: Zc,
  instanceof: xc,
  intersection: Dc,
  lazy: Bc,
  literal: zc,
  map: Fc,
  nan: wc,
  nativeEnum: Uc,
  never: Rc,
  null: kc,
  nullable: Gc,
  number: Mo,
  object: Pc,
  oboolean: Qc,
  onumber: Jc,
  optional: qc,
  ostring: Xc,
  pipeline: Yc,
  preprocess: Kc,
  promise: Hc,
  record: Lc,
  set: $c,
  strictObject: Ic,
  string: Io,
  symbol: Cc,
  transformer: Ms,
  tuple: Vc,
  undefined: Ec,
  union: Mc,
  unknown: Tc,
  void: Oc,
  NEVER: tl,
  ZodIssueCode: k,
  quotelessJson: Ga,
  ZodError: Pe,
});
function js(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Do(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const o = js(s, t);
      return !r && typeof o == "function" && (r = !0), o;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          typeof o == "function" ? o() : js(e[s], null);
        }
      };
  };
}
function _e(...e) {
  return d.useCallback(Do(...e), e);
}
var Ot = d.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    s = d.Children.toArray(r),
    o = s.find(nl);
  if (o) {
    const i = o.props.children,
      a = s.map((c) =>
        c === o
          ? d.Children.count(i) > 1
            ? d.Children.only(null)
            : d.isValidElement(i)
              ? i.props.children
              : null
          : c,
      );
    return w.jsx($n, {
      ...n,
      ref: t,
      children: d.isValidElement(i) ? d.cloneElement(i, void 0, a) : null,
    });
  }
  return w.jsx($n, { ...n, ref: t, children: r });
});
Ot.displayName = "Slot";
var $n = d.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (d.isValidElement(r)) {
    const s = ol(r);
    return d.cloneElement(r, { ...sl(n, r.props), ref: t ? Do(t, s) : s });
  }
  return d.Children.count(r) > 1 ? d.Children.only(null) : null;
});
$n.displayName = "SlotClone";
var rl = ({ children: e }) => w.jsx(w.Fragment, { children: e });
function nl(e) {
  return d.isValidElement(e) && e.type === rl;
}
function sl(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n],
      o = t[n];
    /^on[A-Z]/.test(n)
      ? s && o
        ? (r[n] = (...a) => {
            o(...a), s(...a);
          })
        : s && (r[n] = s)
      : n === "style"
        ? (r[n] = { ...s, ...o })
        : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ol(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function Vo(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Vo(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Lo() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Vo(e)) && (n && (n += " "), (n += t));
  return n;
}
const Ds = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Vs = Lo,
  Fo = (e, t) => (r) => {
    var n;
    if (t?.variants == null) return Vs(e, r?.class, r?.className);
    const { variants: s, defaultVariants: o } = t,
      i = Object.keys(s).map((l) => {
        const u = r?.[l],
          f = o?.[l];
        if (u === null) return null;
        const v = Ds(u) || Ds(f);
        return s[l][v];
      }),
      a =
        r &&
        Object.entries(r).reduce((l, u) => {
          let [f, v] = u;
          return v === void 0 || (l[f] = v), l;
        }, {}),
      c =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((l, u) => {
              let { class: f, className: v, ...g } = u;
              return Object.entries(g).every((b) => {
                let [h, m] = b;
                return Array.isArray(m)
                  ? m.includes({ ...o, ...a }[h])
                  : { ...o, ...a }[h] === m;
              })
                ? [...l, f, v]
                : l;
            }, []);
    return Vs(e, i, c, r?.class, r?.className);
  },
  is = "-",
  il = (e) => {
    const t = cl(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(is);
        return a[0] === "" && a.length !== 1 && a.shift(), $o(a, t) || al(i);
      },
      getConflictingClassGroupIds: (i, a) => {
        const c = r[i] || [];
        return a && n[i] ? [...c, ...n[i]] : c;
      },
    };
  },
  $o = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      s = n ? $o(e.slice(1), n) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const o = e.join(is);
    return t.validators.find(({ validator: i }) => i(o))?.classGroupId;
  },
  Ls = /^\[(.+)\]$/,
  al = (e) => {
    if (Ls.test(e)) {
      const t = Ls.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  cl = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      ul(Object.entries(e.classGroups), r).forEach(([o, i]) => {
        Zn(i, n, o, t);
      }),
      n
    );
  },
  Zn = (e, t, r, n) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const o = s === "" ? t : Fs(t, s);
        o.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (ll(s)) {
          Zn(s(n), t, r, n);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([o, i]) => {
        Zn(i, Fs(t, o), r, n);
      });
    });
  },
  Fs = (e, t) => {
    let r = e;
    return (
      t.split(is).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  ll = (e) => e.isThemeGetter,
  ul = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const s = n.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, a]) => [t + i, a]),
                  )
                : o,
          );
          return [r, s];
        })
      : e,
  dl = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const s = (o, i) => {
      r.set(o, i), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    };
    return {
      get(o) {
        let i = r.get(o);
        if (i !== void 0) return i;
        if ((i = n.get(o)) !== void 0) return s(o, i), i;
      },
      set(o, i) {
        r.has(o) ? r.set(o, i) : s(o, i);
      },
    };
  },
  Zo = "!",
  fl = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      s = t[0],
      o = t.length,
      i = (a) => {
        const c = [];
        let l = 0,
          u = 0,
          f;
        for (let m = 0; m < a.length; m++) {
          let _ = a[m];
          if (l === 0) {
            if (_ === s && (n || a.slice(m, m + o) === t)) {
              c.push(a.slice(u, m)), (u = m + o);
              continue;
            }
            if (_ === "/") {
              f = m;
              continue;
            }
          }
          _ === "[" ? l++ : _ === "]" && l--;
        }
        const v = c.length === 0 ? a : a.substring(u),
          g = v.startsWith(Zo),
          b = g ? v.substring(1) : v,
          h = f && f > u ? f - u : void 0;
        return {
          modifiers: c,
          hasImportantModifier: g,
          baseClassName: b,
          maybePostfixModifierPosition: h,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: i }) : i;
  },
  hl = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  pl = (e) => ({ cache: dl(e.cacheSize), parseClassName: fl(e), ...il(e) }),
  ml = /\s+/,
  gl = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = t,
      o = [],
      i = e.trim().split(ml);
    let a = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const l = i[c],
        {
          modifiers: u,
          hasImportantModifier: f,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        } = r(l);
      let b = !!g,
        h = n(b ? v.substring(0, g) : v);
      if (!h) {
        if (!b) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = n(v)), !h)) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        b = !1;
      }
      const m = hl(u).join(":"),
        _ = f ? m + Zo : m,
        y = _ + h;
      if (o.includes(y)) continue;
      o.push(y);
      const C = s(h, b);
      for (let A = 0; A < C.length; ++A) {
        const E = C[A];
        o.push(_ + E);
      }
      a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function vl() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bo(t)) && (n && (n += " "), (n += r));
  return n;
}
const Bo = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bo(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function yl(e, ...t) {
  let r,
    n,
    s,
    o = i;
  function i(c) {
    const l = t.reduce((u, f) => f(u), e());
    return (r = pl(l)), (n = r.cache.get), (s = r.cache.set), (o = a), a(c);
  }
  function a(c) {
    const l = n(c);
    if (l) return l;
    const u = gl(c, r);
    return s(c, u), u;
  }
  return function () {
    return o(vl.apply(null, arguments));
  };
}
const le = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  zo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  bl = /^\d+\/\d+$/,
  xl = new Set(["px", "full", "screen"]),
  wl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _l =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Sl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Cl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  El =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tt = (e) => $t(e) || xl.has(e) || bl.test(e),
  ut = (e) => qt(e, "length", Il),
  $t = (e) => !!e && !Number.isNaN(Number(e)),
  En = (e) => qt(e, "number", $t),
  er = (e) => !!e && Number.isInteger(Number(e)),
  kl = (e) => e.endsWith("%") && $t(e.slice(0, -1)),
  X = (e) => zo.test(e),
  dt = (e) => wl.test(e),
  Al = new Set(["length", "size", "percentage"]),
  Tl = (e) => qt(e, Al, Wo),
  Rl = (e) => qt(e, "position", Wo),
  Ol = new Set(["image", "url"]),
  Nl = (e) => qt(e, Ol, jl),
  Pl = (e) => qt(e, "", Ml),
  tr = () => !0,
  qt = (e, t, r) => {
    const n = zo.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  Il = (e) => _l.test(e) && !Sl.test(e),
  Wo = () => !1,
  Ml = (e) => Cl.test(e),
  jl = (e) => El.test(e),
  Dl = () => {
    const e = le("colors"),
      t = le("spacing"),
      r = le("blur"),
      n = le("brightness"),
      s = le("borderColor"),
      o = le("borderRadius"),
      i = le("borderSpacing"),
      a = le("borderWidth"),
      c = le("contrast"),
      l = le("grayscale"),
      u = le("hueRotate"),
      f = le("invert"),
      v = le("gap"),
      g = le("gradientColorStops"),
      b = le("gradientColorStopPositions"),
      h = le("inset"),
      m = le("margin"),
      _ = le("opacity"),
      y = le("padding"),
      C = le("saturate"),
      A = le("scale"),
      E = le("sepia"),
      F = le("skew"),
      j = le("space"),
      W = le("translate"),
      J = () => ["auto", "contain", "none"],
      q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ne = () => ["auto", X, t],
      T = () => [X, t],
      D = () => ["", tt, ut],
      L = () => ["auto", $t, X],
      K = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      G = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Z = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      te = () => ["", "0", X],
      ue = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ge = () => [$t, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [tr],
        spacing: [tt, ut],
        blur: ["none", "", dt, X],
        brightness: ge(),
        borderColor: [e],
        borderRadius: ["none", "", "full", dt, X],
        borderSpacing: T(),
        borderWidth: D(),
        contrast: ge(),
        grayscale: te(),
        hueRotate: ge(),
        invert: te(),
        gap: T(),
        gradientColorStops: [e],
        gradientColorStopPositions: [kl, ut],
        inset: ne(),
        margin: ne(),
        opacity: ge(),
        padding: T(),
        saturate: ge(),
        scale: ge(),
        sepia: te(),
        skew: ge(),
        space: T(),
        translate: T(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [dt] }],
        "break-after": [{ "break-after": ue() }],
        "break-before": [{ "break-before": ue() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...K(), X] }],
        overflow: [{ overflow: q() }],
        "overflow-x": [{ "overflow-x": q() }],
        "overflow-y": [{ "overflow-y": q() }],
        overscroll: [{ overscroll: J() }],
        "overscroll-x": [{ "overscroll-x": J() }],
        "overscroll-y": [{ "overscroll-y": J() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [h] }],
        "inset-x": [{ "inset-x": [h] }],
        "inset-y": [{ "inset-y": [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", er, X] }],
        basis: [{ basis: ne() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: te() }],
        shrink: [{ shrink: te() }],
        order: [{ order: ["first", "last", "none", er, X] }],
        "grid-cols": [{ "grid-cols": [tr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", er, X] }, X] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [tr] }],
        "row-start-end": [{ row: ["auto", { span: [er, X] }, X] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [v] }],
        "gap-x": [{ "gap-x": [v] }],
        "gap-y": [{ "gap-y": [v] }],
        "justify-content": [{ justify: ["normal", ...Z()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...Z(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...Z(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [y] }],
        px: [{ px: [y] }],
        py: [{ py: [y] }],
        ps: [{ ps: [y] }],
        pe: [{ pe: [y] }],
        pt: [{ pt: [y] }],
        pr: [{ pr: [y] }],
        pb: [{ pb: [y] }],
        pl: [{ pl: [y] }],
        m: [{ m: [m] }],
        mx: [{ mx: [m] }],
        my: [{ my: [m] }],
        ms: [{ ms: [m] }],
        me: [{ me: [m] }],
        mt: [{ mt: [m] }],
        mr: [{ mr: [m] }],
        mb: [{ mb: [m] }],
        ml: [{ ml: [m] }],
        "space-x": [{ "space-x": [j] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [j] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [dt] },
              dt,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", dt, ut] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              En,
            ],
          },
        ],
        "font-family": [{ font: [tr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", $t, En] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              tt,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [_] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [_] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", tt, ut] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", tt, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: T() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [_] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...K(), Rl] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Tl] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Nl,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [_] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [_] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [tt, X] }],
        "outline-w": [{ outline: [tt, ut] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: D() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [_] }],
        "ring-offset-w": [{ "ring-offset": [tt, ut] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", dt, Pl] }],
        "shadow-color": [{ shadow: [tr] }],
        opacity: [{ opacity: [_] }],
        "mix-blend": [{ "mix-blend": [...G(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": G() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", dt, X] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [C] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [_] }],
        "backdrop-saturate": [{ "backdrop-saturate": [C] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: ge() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: ge() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [A] }],
        "scale-x": [{ "scale-x": [A] }],
        "scale-y": [{ "scale-y": [A] }],
        rotate: [{ rotate: [er, X] }],
        "translate-x": [{ "translate-x": [W] }],
        "translate-y": [{ "translate-y": [W] }],
        "skew-x": [{ "skew-x": [F] }],
        "skew-y": [{ "skew-y": [F] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": T() }],
        "scroll-mx": [{ "scroll-mx": T() }],
        "scroll-my": [{ "scroll-my": T() }],
        "scroll-ms": [{ "scroll-ms": T() }],
        "scroll-me": [{ "scroll-me": T() }],
        "scroll-mt": [{ "scroll-mt": T() }],
        "scroll-mr": [{ "scroll-mr": T() }],
        "scroll-mb": [{ "scroll-mb": T() }],
        "scroll-ml": [{ "scroll-ml": T() }],
        "scroll-p": [{ "scroll-p": T() }],
        "scroll-px": [{ "scroll-px": T() }],
        "scroll-py": [{ "scroll-py": T() }],
        "scroll-ps": [{ "scroll-ps": T() }],
        "scroll-pe": [{ "scroll-pe": T() }],
        "scroll-pt": [{ "scroll-pt": T() }],
        "scroll-pr": [{ "scroll-pr": T() }],
        "scroll-pb": [{ "scroll-pb": T() }],
        "scroll-pl": [{ "scroll-pl": T() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [tt, ut, En] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Vl = yl(Dl);
function Ce(...e) {
  return Vl(Lo(e));
}
const Ll = Fo(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Uo = d.forwardRef(
    ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, o) => {
      const i = n ? Ot : "button";
      return w.jsx(i, {
        className: Ce(Ll({ variant: t, size: r, className: e })),
        ref: o,
        ...s,
      });
    },
  );
Uo.displayName = "Button";
var Fl = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  me = Fl.reduce((e, t) => {
    const r = d.forwardRef((n, s) => {
      const { asChild: o, ...i } = n,
        a = o ? Ot : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(a, { ...i, ref: s })
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function $l(e, t) {
  e && an.flushSync(() => e.dispatchEvent(t));
}
var Zl = "Label",
  Ho = d.forwardRef((e, t) =>
    w.jsx(me.label, {
      ...e,
      ref: t,
      onMouseDown: (r) => {
        r.target.closest("button, input, select, textarea") ||
          (e.onMouseDown?.(r),
          !r.defaultPrevented && r.detail > 1 && r.preventDefault());
      },
    }),
  );
Ho.displayName = Zl;
var qo = Ho;
const Bl = Fo(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Go = d.forwardRef(({ className: e, ...t }, r) =>
    w.jsx(qo, { ref: r, className: Ce(Bl(), e), ...t }),
  );
Go.displayName = qo.displayName;
const zl = Aa,
  Ko = d.createContext({}),
  Yo = d.createContext({}),
  Ir = ({ ...e }) =>
    w.jsx(Ko.Provider, {
      value: { name: e.name },
      children: w.jsx(Na, { ...e }),
    }),
  dn = () => {
    const e = d.useContext(Ko),
      t = d.useContext(Yo),
      { getFieldState: r, formState: n } = ln(),
      s = r(e.name, n);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: o } = t;
    return {
      id: o,
      name: e.name,
      formItemId: `${o}-form-item`,
      formDescriptionId: `${o}-form-item-description`,
      formMessageId: `${o}-form-item-message`,
      ...s,
    };
  },
  sr = d.forwardRef(({ className: e, ...t }, r) => {
    const n = d.useId();
    return w.jsx(Yo.Provider, {
      value: { id: n },
      children: w.jsx("div", { ref: r, className: Ce("space-y-2", e), ...t }),
    });
  });
sr.displayName = "FormItem";
const or = d.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: s } = dn();
  return w.jsx(Go, {
    ref: r,
    className: Ce(n && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
or.displayName = "FormLabel";
const ir = d.forwardRef(({ ...e }, t) => {
  const {
    error: r,
    formItemId: n,
    formDescriptionId: s,
    formMessageId: o,
  } = dn();
  return w.jsx(Ot, {
    ref: t,
    id: n,
    "aria-describedby": r ? `${s} ${o}` : `${s}`,
    "aria-invalid": !!r,
    ...e,
  });
});
ir.displayName = "FormControl";
const Bn = d.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = dn();
  return w.jsx("p", {
    ref: r,
    id: n,
    className: Ce("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
Bn.displayName = "FormDescription";
const ar = d.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: o } = dn(),
    i = s ? String(s?.message) : t;
  return i
    ? w.jsx("p", {
        ref: n,
        id: o,
        className: Ce("text-[0.8rem] font-medium text-destructive", e),
        ...r,
        children: i,
      })
    : null;
});
ar.displayName = "FormMessage";
const zn = d.forwardRef(({ className: e, type: t, ...r }, n) =>
  w.jsx("input", {
    type: t,
    className: Ce(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: n,
    ...r,
  }),
);
zn.displayName = "Input";
function as(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    s,
    o;
  for (o = 0; o < n.length; o++)
    (s = n[o]), !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var Wl = ["color"],
  Ul = d.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      s = as(e, Wl);
    return d.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        { ref: t },
      ),
      d.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  Hl = ["color"],
  Xo = d.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      s = as(e, Hl);
    return d.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        { ref: t },
      ),
      d.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  ql = ["color"],
  Gl = d.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      s = as(e, ql);
    return d.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        { ref: t },
      ),
      d.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
function $s(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function ve(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((e?.(s), r === !1 || !s.defaultPrevented)) return t?.(s);
  };
}
function cs(e, t = []) {
  let r = [];
  function n(o, i) {
    const a = d.createContext(i),
      c = r.length;
    r = [...r, i];
    const l = (f) => {
      const { scope: v, children: g, ...b } = f,
        h = v?.[e]?.[c] || a,
        m = d.useMemo(() => b, Object.values(b));
      return w.jsx(h.Provider, { value: m, children: g });
    };
    l.displayName = o + "Provider";
    function u(f, v) {
      const g = v?.[e]?.[c] || a,
        b = d.useContext(g);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [l, u];
  }
  const s = () => {
    const o = r.map((i) => d.createContext(i));
    return function (a) {
      const c = a?.[e] || o;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (s.scopeName = e), [n, Kl(s, ...t)];
}
function Kl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (o) {
      const i = n.reduce((a, { useScope: c, scopeName: l }) => {
        const f = c(o)[`__scope${l}`];
        return { ...a, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Yl(e) {
  const t = e + "CollectionProvider",
    [r, n] = cs(t),
    [s, o] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (g) => {
      const { scope: b, children: h } = g,
        m = re.useRef(null),
        _ = re.useRef(new Map()).current;
      return w.jsx(s, { scope: b, itemMap: _, collectionRef: m, children: h });
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    c = re.forwardRef((g, b) => {
      const { scope: h, children: m } = g,
        _ = o(a, h),
        y = _e(b, _.collectionRef);
      return w.jsx(Ot, { ref: y, children: m });
    });
  c.displayName = a;
  const l = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    f = re.forwardRef((g, b) => {
      const { scope: h, children: m, ..._ } = g,
        y = re.useRef(null),
        C = _e(b, y),
        A = o(l, h);
      return (
        re.useEffect(
          () => (
            A.itemMap.set(y, { ref: y, ..._ }),
            () => {
              A.itemMap.delete(y);
            }
          ),
        ),
        w.jsx(Ot, { [u]: "", ref: C, children: m })
      );
    });
  f.displayName = l;
  function v(g) {
    const b = o(e + "CollectionConsumer", g);
    return re.useCallback(() => {
      const m = b.collectionRef.current;
      if (!m) return [];
      const _ = Array.from(m.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (A, E) => _.indexOf(A.ref.current) - _.indexOf(E.ref.current),
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: i, Slot: c, ItemSlot: f }, v, n];
}
var Xl = d.createContext(void 0);
function Jl(e) {
  const t = d.useContext(Xl);
  return e || t || "ltr";
}
function ot(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...r) =>
          t.current?.(...r),
      [],
    )
  );
}
function Ql(e, t = globalThis?.document) {
  const r = ot(e);
  d.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var eu = "DismissableLayer",
  Wn = "dismissableLayer.update",
  tu = "dismissableLayer.pointerDownOutside",
  ru = "dismissableLayer.focusOutside",
  Zs,
  Jo = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Qo = d.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: o,
        onInteractOutside: i,
        onDismiss: a,
        ...c
      } = e,
      l = d.useContext(Jo),
      [u, f] = d.useState(null),
      v = u?.ownerDocument ?? globalThis?.document,
      [, g] = d.useState({}),
      b = _e(t, (j) => f(j)),
      h = Array.from(l.layers),
      [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = h.indexOf(m),
      y = u ? h.indexOf(u) : -1,
      C = l.layersWithOutsidePointerEventsDisabled.size > 0,
      A = y >= _,
      E = ou((j) => {
        const W = j.target,
          J = [...l.branches].some((q) => q.contains(W));
        !A || J || (s?.(j), i?.(j), j.defaultPrevented || a?.());
      }, v),
      F = iu((j) => {
        const W = j.target;
        [...l.branches].some((q) => q.contains(W)) ||
          (o?.(j), i?.(j), j.defaultPrevented || a?.());
      }, v);
    return (
      Ql((j) => {
        y === l.layers.size - 1 &&
          (n?.(j), !j.defaultPrevented && a && (j.preventDefault(), a()));
      }, v),
      d.useEffect(() => {
        if (u)
          return (
            r &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Zs = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Bs(),
            () => {
              r &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = Zs);
            }
          );
      }, [u, v, r, l]),
      d.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Bs());
        },
        [u, l],
      ),
      d.useEffect(() => {
        const j = () => g({});
        return (
          document.addEventListener(Wn, j),
          () => document.removeEventListener(Wn, j)
        );
      }, []),
      w.jsx(me.div, {
        ...c,
        ref: b,
        style: {
          pointerEvents: C ? (A ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ve(e.onFocusCapture, F.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: ve(
          e.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
Qo.displayName = eu;
var nu = "DismissableLayerBranch",
  su = d.forwardRef((e, t) => {
    const r = d.useContext(Jo),
      n = d.useRef(null),
      s = _e(t, n);
    return (
      d.useEffect(() => {
        const o = n.current;
        if (o)
          return (
            r.branches.add(o),
            () => {
              r.branches.delete(o);
            }
          );
      }, [r.branches]),
      w.jsx(me.div, { ...e, ref: s })
    );
  });
su.displayName = nu;
function ou(e, t = globalThis?.document) {
  const r = ot(e),
    n = d.useRef(!1),
    s = d.useRef(() => {});
  return (
    d.useEffect(() => {
      const o = (a) => {
          if (a.target && !n.current) {
            let c = function () {
              ei(tu, r, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = c),
                t.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", s.current);
          n.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", s.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function iu(e, t = globalThis?.document) {
  const r = ot(e),
    n = d.useRef(!1);
  return (
    d.useEffect(() => {
      const s = (o) => {
        o.target &&
          !n.current &&
          ei(ru, r, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function Bs() {
  const e = new CustomEvent(Wn);
  document.dispatchEvent(e);
}
function ei(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }),
    n ? $l(s, o) : s.dispatchEvent(o);
}
var kn = 0;
function au() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? zs()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? zs()),
      kn++,
      () => {
        kn === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          kn--;
      }
    );
  }, []);
}
function zs() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var An = "focusScope.autoFocusOnMount",
  Tn = "focusScope.autoFocusOnUnmount",
  Ws = { bubbles: !1, cancelable: !0 },
  cu = "FocusScope",
  ti = d.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        ...i
      } = e,
      [a, c] = d.useState(null),
      l = ot(s),
      u = ot(o),
      f = d.useRef(null),
      v = _e(t, (h) => c(h)),
      g = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    d.useEffect(() => {
      if (n) {
        let h = function (C) {
            if (g.paused || !a) return;
            const A = C.target;
            a.contains(A) ? (f.current = A) : ft(f.current, { select: !0 });
          },
          m = function (C) {
            if (g.paused || !a) return;
            const A = C.relatedTarget;
            A !== null && (a.contains(A) || ft(f.current, { select: !0 }));
          },
          _ = function (C) {
            if (document.activeElement === document.body)
              for (const E of C) E.removedNodes.length > 0 && ft(a);
          };
        document.addEventListener("focusin", h),
          document.addEventListener("focusout", m);
        const y = new MutationObserver(_);
        return (
          a && y.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", h),
              document.removeEventListener("focusout", m),
              y.disconnect();
          }
        );
      }
    }, [n, a, g.paused]),
      d.useEffect(() => {
        if (a) {
          Hs.add(g);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const _ = new CustomEvent(An, Ws);
            a.addEventListener(An, l),
              a.dispatchEvent(_),
              _.defaultPrevented ||
                (lu(pu(ri(a)), { select: !0 }),
                document.activeElement === h && ft(a));
          }
          return () => {
            a.removeEventListener(An, l),
              setTimeout(() => {
                const _ = new CustomEvent(Tn, Ws);
                a.addEventListener(Tn, u),
                  a.dispatchEvent(_),
                  _.defaultPrevented || ft(h ?? document.body, { select: !0 }),
                  a.removeEventListener(Tn, u),
                  Hs.remove(g);
              }, 0);
          };
        }
      }, [a, l, u, g]);
    const b = d.useCallback(
      (h) => {
        if ((!r && !n) || g.paused) return;
        const m = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
          _ = document.activeElement;
        if (m && _) {
          const y = h.currentTarget,
            [C, A] = uu(y);
          C && A
            ? !h.shiftKey && _ === A
              ? (h.preventDefault(), r && ft(C, { select: !0 }))
              : h.shiftKey &&
                _ === C &&
                (h.preventDefault(), r && ft(A, { select: !0 }))
            : _ === y && h.preventDefault();
        }
      },
      [r, n, g.paused],
    );
    return w.jsx(me.div, { tabIndex: -1, ...i, ref: v, onKeyDown: b });
  });
ti.displayName = cu;
function lu(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((ft(n, { select: t }), document.activeElement !== r)) return;
}
function uu(e) {
  const t = ri(e),
    r = Us(t, e),
    n = Us(t.reverse(), e);
  return [r, n];
}
function ri(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const s = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Us(e, t) {
  for (const r of e) if (!du(r, { upTo: t })) return r;
}
function du(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function fu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && fu(e) && t && e.select();
  }
}
var Hs = hu();
function hu() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), (e = qs(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = qs(e, t)), e[0]?.resume();
    },
  };
}
function qs(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function pu(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Me = globalThis?.document ? d.useLayoutEffect : () => {},
  mu = Sa.useId || (() => {}),
  gu = 0;
function ls(e) {
  const [t, r] = d.useState(mu());
  return (
    Me(() => {
      r((n) => n ?? String(gu++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const vu = ["top", "right", "bottom", "left"],
  yt = Math.min,
  Ne = Math.max,
  tn = Math.round,
  Mr = Math.floor,
  Ke = (e) => ({ x: e, y: e }),
  yu = { left: "right", right: "left", bottom: "top", top: "bottom" },
  bu = { start: "end", end: "start" };
function Un(e, t, r) {
  return Ne(e, yt(t, r));
}
function it(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function at(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function us(e) {
  return e === "x" ? "y" : "x";
}
function ds(e) {
  return e === "y" ? "height" : "width";
}
function bt(e) {
  return ["top", "bottom"].includes(at(e)) ? "y" : "x";
}
function fs(e) {
  return us(bt(e));
}
function xu(e, t, r) {
  r === void 0 && (r = !1);
  const n = Gt(e),
    s = fs(e),
    o = ds(s);
  let i =
    s === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return t.reference[o] > t.floating[o] && (i = rn(i)), [i, rn(i)];
}
function wu(e) {
  const t = rn(e);
  return [Hn(e), t, Hn(t)];
}
function Hn(e) {
  return e.replace(/start|end/g, (t) => bu[t]);
}
function _u(e, t, r) {
  const n = ["left", "right"],
    s = ["right", "left"],
    o = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? s : n) : t ? n : s;
    case "left":
    case "right":
      return t ? o : i;
    default:
      return [];
  }
}
function Su(e, t, r, n) {
  const s = Gt(e);
  let o = _u(at(e), r === "start", n);
  return (
    s && ((o = o.map((i) => i + "-" + s)), t && (o = o.concat(o.map(Hn)))), o
  );
}
function rn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yu[t]);
}
function Cu(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function ni(e) {
  return typeof e != "number"
    ? Cu(e)
    : { top: e, right: e, bottom: e, left: e };
}
function nn(e) {
  const { x: t, y: r, width: n, height: s } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function Gs(e, t, r) {
  let { reference: n, floating: s } = e;
  const o = bt(t),
    i = fs(t),
    a = ds(i),
    c = at(t),
    l = o === "y",
    u = n.x + n.width / 2 - s.width / 2,
    f = n.y + n.height / 2 - s.height / 2,
    v = n[a] / 2 - s[a] / 2;
  let g;
  switch (c) {
    case "top":
      g = { x: u, y: n.y - s.height };
      break;
    case "bottom":
      g = { x: u, y: n.y + n.height };
      break;
    case "right":
      g = { x: n.x + n.width, y: f };
      break;
    case "left":
      g = { x: n.x - s.width, y: f };
      break;
    default:
      g = { x: n.x, y: n.y };
  }
  switch (Gt(t)) {
    case "start":
      g[i] -= v * (r && l ? -1 : 1);
      break;
    case "end":
      g[i] += v * (r && l ? -1 : 1);
      break;
  }
  return g;
}
const Eu = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: s = "absolute",
      middleware: o = [],
      platform: i,
    } = r,
    a = o.filter(Boolean),
    c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: f } = Gs(l, n, c),
    v = n,
    g = {},
    b = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: m, fn: _ } = a[h],
      {
        x: y,
        y: C,
        data: A,
        reset: E,
      } = await _({
        x: u,
        y: f,
        initialPlacement: n,
        placement: v,
        strategy: s,
        middlewareData: g,
        rects: l,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = y ?? u),
      (f = C ?? f),
      (g = { ...g, [m]: { ...g[m], ...A } }),
      E &&
        b <= 50 &&
        (b++,
        typeof E == "object" &&
          (E.placement && (v = E.placement),
          E.rects &&
            (l =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : E.rects),
          ({ x: u, y: f } = Gs(l, v, c))),
        (h = -1));
  }
  return { x: u, y: f, placement: v, strategy: s, middlewareData: g };
};
async function Cr(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: s, platform: o, rects: i, elements: a, strategy: c } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: f = "floating",
      altBoundary: v = !1,
      padding: g = 0,
    } = it(t, e),
    b = ni(g),
    m = a[v ? (f === "floating" ? "reference" : "floating") : f],
    _ = nn(
      await o.getClippingRect({
        element:
          (r = await (o.isElement == null ? void 0 : o.isElement(m))) == null ||
          r
            ? m
            : m.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: l,
        rootBoundary: u,
        strategy: c,
      }),
    ),
    y =
      f === "floating"
        ? { x: n, y: s, width: i.floating.width, height: i.floating.height }
        : i.reference,
    C = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    A = (await (o.isElement == null ? void 0 : o.isElement(C)))
      ? (await (o.getScale == null ? void 0 : o.getScale(C))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = nn(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: C,
            strategy: c,
          })
        : y,
    );
  return {
    top: (_.top - E.top + b.top) / A.y,
    bottom: (E.bottom - _.bottom + b.bottom) / A.y,
    left: (_.left - E.left + b.left) / A.x,
    right: (E.right - _.right + b.right) / A.x,
  };
}
const ku = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: s,
          rects: o,
          platform: i,
          elements: a,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = it(e, t) || {};
      if (l == null) return {};
      const f = ni(u),
        v = { x: r, y: n },
        g = fs(s),
        b = ds(g),
        h = await i.getDimensions(l),
        m = g === "y",
        _ = m ? "top" : "left",
        y = m ? "bottom" : "right",
        C = m ? "clientHeight" : "clientWidth",
        A = o.reference[b] + o.reference[g] - v[g] - o.floating[b],
        E = v[g] - o.reference[g],
        F = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
      let j = F ? F[C] : 0;
      (!j || !(await (i.isElement == null ? void 0 : i.isElement(F)))) &&
        (j = a.floating[C] || o.floating[b]);
      const W = A / 2 - E / 2,
        J = j / 2 - h[b] / 2 - 1,
        q = yt(f[_], J),
        ne = yt(f[y], J),
        T = q,
        D = j - h[b] - ne,
        L = j / 2 - h[b] / 2 + W,
        K = Un(T, L, D),
        $ =
          !c.arrow &&
          Gt(s) != null &&
          L !== K &&
          o.reference[b] / 2 - (L < T ? q : ne) - h[b] / 2 < 0,
        G = $ ? (L < T ? L - T : L - D) : 0;
      return {
        [g]: v[g] + G,
        data: {
          [g]: K,
          centerOffset: L - K - G,
          ...($ && { alignmentOffset: G }),
        },
        reset: $,
      };
    },
  }),
  Au = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: s,
              middlewareData: o,
              rects: i,
              initialPlacement: a,
              platform: c,
              elements: l,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: f = !0,
              fallbackPlacements: v,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: h = !0,
              ...m
            } = it(e, t);
          if ((r = o.arrow) != null && r.alignmentOffset) return {};
          const _ = at(s),
            y = bt(a),
            C = at(a) === a,
            A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            E = v || (C || !h ? [rn(a)] : wu(a)),
            F = b !== "none";
          !v && F && E.push(...Su(a, h, b, A));
          const j = [a, ...E],
            W = await Cr(t, m),
            J = [];
          let q = ((n = o.flip) == null ? void 0 : n.overflows) || [];
          if ((u && J.push(W[_]), f)) {
            const L = xu(s, i, A);
            J.push(W[L[0]], W[L[1]]);
          }
          if (
            ((q = [...q, { placement: s, overflows: J }]),
            !J.every((L) => L <= 0))
          ) {
            var ne, T;
            const L = (((ne = o.flip) == null ? void 0 : ne.index) || 0) + 1,
              K = j[L];
            if (K)
              return {
                data: { index: L, overflows: q },
                reset: { placement: K },
              };
            let $ =
              (T = q
                .filter((G) => G.overflows[0] <= 0)
                .sort((G, Z) => G.overflows[1] - Z.overflows[1])[0]) == null
                ? void 0
                : T.placement;
            if (!$)
              switch (g) {
                case "bestFit": {
                  var D;
                  const G =
                    (D = q
                      .filter((Z) => {
                        if (F) {
                          const te = bt(Z.placement);
                          return te === y || te === "y";
                        }
                        return !0;
                      })
                      .map((Z) => [
                        Z.placement,
                        Z.overflows
                          .filter((te) => te > 0)
                          .reduce((te, ue) => te + ue, 0),
                      ])
                      .sort((Z, te) => Z[1] - te[1])[0]) == null
                      ? void 0
                      : D[0];
                  G && ($ = G);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (s !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Ks(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Ys(e) {
  return vu.some((t) => e[t] >= 0);
}
const Tu = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: r } = t,
          { strategy: n = "referenceHidden", ...s } = it(e, t);
        switch (n) {
          case "referenceHidden": {
            const o = await Cr(t, { ...s, elementContext: "reference" }),
              i = Ks(o, r.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Ys(i) },
            };
          }
          case "escaped": {
            const o = await Cr(t, { ...s, altBoundary: !0 }),
              i = Ks(o, r.floating);
            return { data: { escapedOffsets: i, escaped: Ys(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Ru(e, t) {
  const { placement: r, platform: n, elements: s } = e,
    o = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)),
    i = at(r),
    a = Gt(r),
    c = bt(r) === "y",
    l = ["left", "top"].includes(i) ? -1 : 1,
    u = o && c ? -1 : 1,
    f = it(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: b,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof b == "number" && (g = a === "end" ? b * -1 : b),
    c ? { x: g * u, y: v * l } : { x: v * l, y: g * u }
  );
}
const Ou = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: s, y: o, placement: i, middlewareData: a } = t,
            c = await Ru(t, e);
          return i === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: s + c.x, y: o + c.y, data: { ...c, placement: i } };
        },
      }
    );
  },
  Nu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: s } = t,
            {
              mainAxis: o = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (m) => {
                  let { x: _, y } = m;
                  return { x: _, y };
                },
              },
              ...c
            } = it(e, t),
            l = { x: r, y: n },
            u = await Cr(t, c),
            f = bt(at(s)),
            v = us(f);
          let g = l[v],
            b = l[f];
          if (o) {
            const m = v === "y" ? "top" : "left",
              _ = v === "y" ? "bottom" : "right",
              y = g + u[m],
              C = g - u[_];
            g = Un(y, g, C);
          }
          if (i) {
            const m = f === "y" ? "top" : "left",
              _ = f === "y" ? "bottom" : "right",
              y = b + u[m],
              C = b - u[_];
            b = Un(y, b, C);
          }
          const h = a.fn({ ...t, [v]: g, [f]: b });
          return {
            ...h,
            data: { x: h.x - r, y: h.y - n, enabled: { [v]: o, [f]: i } },
          };
        },
      }
    );
  },
  Pu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: s, rects: o, middlewareData: i } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = it(e, t),
            u = { x: r, y: n },
            f = bt(s),
            v = us(f);
          let g = u[v],
            b = u[f];
          const h = it(a, t),
            m =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            const C = v === "y" ? "height" : "width",
              A = o.reference[v] - o.floating[C] + m.mainAxis,
              E = o.reference[v] + o.reference[C] - m.mainAxis;
            g < A ? (g = A) : g > E && (g = E);
          }
          if (l) {
            var _, y;
            const C = v === "y" ? "width" : "height",
              A = ["top", "left"].includes(at(s)),
              E =
                o.reference[f] -
                o.floating[C] +
                ((A && ((_ = i.offset) == null ? void 0 : _[f])) || 0) +
                (A ? 0 : m.crossAxis),
              F =
                o.reference[f] +
                o.reference[C] +
                (A ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) -
                (A ? m.crossAxis : 0);
            b < E ? (b = E) : b > F && (b = F);
          }
          return { [v]: g, [f]: b };
        },
      }
    );
  },
  Iu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: s, rects: o, platform: i, elements: a } = t,
            { apply: c = () => {}, ...l } = it(e, t),
            u = await Cr(t, l),
            f = at(s),
            v = Gt(s),
            g = bt(s) === "y",
            { width: b, height: h } = o.floating;
          let m, _;
          f === "top" || f === "bottom"
            ? ((m = f),
              (_ =
                v ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((_ = f), (m = v === "end" ? "top" : "bottom"));
          const y = h - u.top - u.bottom,
            C = b - u.left - u.right,
            A = yt(h - u[m], y),
            E = yt(b - u[_], C),
            F = !t.middlewareData.shift;
          let j = A,
            W = E;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (W = C),
            (n = t.middlewareData.shift) != null && n.enabled.y && (j = y),
            F && !v)
          ) {
            const q = Ne(u.left, 0),
              ne = Ne(u.right, 0),
              T = Ne(u.top, 0),
              D = Ne(u.bottom, 0);
            g
              ? (W =
                  b - 2 * (q !== 0 || ne !== 0 ? q + ne : Ne(u.left, u.right)))
              : (j =
                  h - 2 * (T !== 0 || D !== 0 ? T + D : Ne(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: W, availableHeight: j });
          const J = await i.getDimensions(a.floating);
          return b !== J.width || h !== J.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function fn() {
  return typeof window < "u";
}
function Kt(e) {
  return si(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ie(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Qe(e) {
  var t;
  return (t = (si(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function si(e) {
  return fn() ? e instanceof Node || e instanceof Ie(e).Node : !1;
}
function Be(e) {
  return fn() ? e instanceof Element || e instanceof Ie(e).Element : !1;
}
function Je(e) {
  return fn() ? e instanceof HTMLElement || e instanceof Ie(e).HTMLElement : !1;
}
function Xs(e) {
  return !fn() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ie(e).ShadowRoot;
}
function Tr(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: s } = ze(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(s)
  );
}
function Mu(e) {
  return ["table", "td", "th"].includes(Kt(e));
}
function hn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hs(e) {
  const t = ps(),
    r = Be(e) ? ze(e) : e;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n),
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n),
    )
  );
}
function ju(e) {
  let t = xt(e);
  for (; Je(t) && !Ht(t); ) {
    if (hs(t)) return t;
    if (hn(t)) return null;
    t = xt(t);
  }
  return null;
}
function ps() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ht(e) {
  return ["html", "body", "#document"].includes(Kt(e));
}
function ze(e) {
  return Ie(e).getComputedStyle(e);
}
function pn(e) {
  return Be(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function xt(e) {
  if (Kt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Xs(e) && e.host) || Qe(e);
  return Xs(t) ? t.host : t;
}
function oi(e) {
  const t = xt(e);
  return Ht(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Je(t) && Tr(t)
      ? t
      : oi(t);
}
function Er(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = oi(e),
    o = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Ie(s);
  if (o) {
    const a = qn(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Tr(s) ? s : [],
      a && r ? Er(a) : [],
    );
  }
  return t.concat(s, Er(s, [], r));
}
function qn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ii(e) {
  const t = ze(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const s = Je(e),
    o = s ? e.offsetWidth : r,
    i = s ? e.offsetHeight : n,
    a = tn(r) !== o || tn(n) !== i;
  return a && ((r = o), (n = i)), { width: r, height: n, $: a };
}
function ms(e) {
  return Be(e) ? e : e.contextElement;
}
function Zt(e) {
  const t = ms(e);
  if (!Je(t)) return Ke(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: s, $: o } = ii(t);
  let i = (o ? tn(r.width) : r.width) / n,
    a = (o ? tn(r.height) : r.height) / s;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const Du = Ke(0);
function ai(e) {
  const t = Ie(e);
  return !ps() || !t.visualViewport
    ? Du
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Vu(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== Ie(e)) ? !1 : t;
}
function Nt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(),
    o = ms(e);
  let i = Ke(1);
  t && (n ? Be(n) && (i = Zt(n)) : (i = Zt(e)));
  const a = Vu(o, r, n) ? ai(o) : Ke(0);
  let c = (s.left + a.x) / i.x,
    l = (s.top + a.y) / i.y,
    u = s.width / i.x,
    f = s.height / i.y;
  if (o) {
    const v = Ie(o),
      g = n && Be(n) ? Ie(n) : n;
    let b = v,
      h = qn(b);
    for (; h && n && g !== b; ) {
      const m = Zt(h),
        _ = h.getBoundingClientRect(),
        y = ze(h),
        C = _.left + (h.clientLeft + parseFloat(y.paddingLeft)) * m.x,
        A = _.top + (h.clientTop + parseFloat(y.paddingTop)) * m.y;
      (c *= m.x),
        (l *= m.y),
        (u *= m.x),
        (f *= m.y),
        (c += C),
        (l += A),
        (b = Ie(h)),
        (h = qn(b));
    }
  }
  return nn({ width: u, height: f, x: c, y: l });
}
function gs(e, t) {
  const r = pn(e).scrollLeft;
  return t ? t.left + r : Nt(Qe(e)).left + r;
}
function ci(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    s = n.left + t.scrollLeft - (r ? 0 : gs(e, n)),
    o = n.top + t.scrollTop;
  return { x: s, y: o };
}
function Lu(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: s } = e;
  const o = s === "fixed",
    i = Qe(n),
    a = t ? hn(t.floating) : !1;
  if (n === i || (a && o)) return r;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Ke(1);
  const u = Ke(0),
    f = Je(n);
  if (
    (f || (!f && !o)) &&
    ((Kt(n) !== "body" || Tr(i)) && (c = pn(n)), Je(n))
  ) {
    const g = Nt(n);
    (l = Zt(n)), (u.x = g.x + n.clientLeft), (u.y = g.y + n.clientTop);
  }
  const v = i && !f && !o ? ci(i, c, !0) : Ke(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + v.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + v.y,
  };
}
function Fu(e) {
  return Array.from(e.getClientRects());
}
function $u(e) {
  const t = Qe(e),
    r = pn(e),
    n = e.ownerDocument.body,
    s = Ne(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    o = Ne(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + gs(e);
  const a = -r.scrollTop;
  return (
    ze(n).direction === "rtl" && (i += Ne(t.clientWidth, n.clientWidth) - s),
    { width: s, height: o, x: i, y: a }
  );
}
function Zu(e, t) {
  const r = Ie(e),
    n = Qe(e),
    s = r.visualViewport;
  let o = n.clientWidth,
    i = n.clientHeight,
    a = 0,
    c = 0;
  if (s) {
    (o = s.width), (i = s.height);
    const l = ps();
    (!l || (l && t === "fixed")) && ((a = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: o, height: i, x: a, y: c };
}
function Bu(e, t) {
  const r = Nt(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    o = Je(e) ? Zt(e) : Ke(1),
    i = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    c = s * o.x,
    l = n * o.y;
  return { width: i, height: a, x: c, y: l };
}
function Js(e, t, r) {
  let n;
  if (t === "viewport") n = Zu(e, r);
  else if (t === "document") n = $u(Qe(e));
  else if (Be(t)) n = Bu(t, r);
  else {
    const s = ai(e);
    n = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return nn(n);
}
function li(e, t) {
  const r = xt(e);
  return r === t || !Be(r) || Ht(r)
    ? !1
    : ze(r).position === "fixed" || li(r, t);
}
function zu(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Er(e, [], !1).filter((a) => Be(a) && Kt(a) !== "body"),
    s = null;
  const o = ze(e).position === "fixed";
  let i = o ? xt(e) : e;
  for (; Be(i) && !Ht(i); ) {
    const a = ze(i),
      c = hs(i);
    !c && a.position === "fixed" && (s = null),
      (
        o
          ? !c && !s
          : (!c &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Tr(i) && !c && li(e, i))
      )
        ? (n = n.filter((u) => u !== i))
        : (s = a),
      (i = xt(i));
  }
  return t.set(e, n), n;
}
function Wu(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: s } = e;
  const i = [
      ...(r === "clippingAncestors"
        ? hn(t)
          ? []
          : zu(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = i[0],
    c = i.reduce(
      (l, u) => {
        const f = Js(t, u, s);
        return (
          (l.top = Ne(f.top, l.top)),
          (l.right = yt(f.right, l.right)),
          (l.bottom = yt(f.bottom, l.bottom)),
          (l.left = Ne(f.left, l.left)),
          l
        );
      },
      Js(t, a, s),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function Uu(e) {
  const { width: t, height: r } = ii(e);
  return { width: t, height: r };
}
function Hu(e, t, r) {
  const n = Je(t),
    s = Qe(t),
    o = r === "fixed",
    i = Nt(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = Ke(0);
  if (n || (!n && !o))
    if (((Kt(t) !== "body" || Tr(s)) && (a = pn(t)), n)) {
      const v = Nt(t, !0, o, t);
      (c.x = v.x + t.clientLeft), (c.y = v.y + t.clientTop);
    } else s && (c.x = gs(s));
  const l = s && !n && !o ? ci(s, a) : Ke(0),
    u = i.left + a.scrollLeft - c.x - l.x,
    f = i.top + a.scrollTop - c.y - l.y;
  return { x: u, y: f, width: i.width, height: i.height };
}
function Rn(e) {
  return ze(e).position === "static";
}
function Qs(e, t) {
  if (!Je(e) || ze(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Qe(e) === r && (r = r.ownerDocument.body), r;
}
function ui(e, t) {
  const r = Ie(e);
  if (hn(e)) return r;
  if (!Je(e)) {
    let s = xt(e);
    for (; s && !Ht(s); ) {
      if (Be(s) && !Rn(s)) return s;
      s = xt(s);
    }
    return r;
  }
  let n = Qs(e, t);
  for (; n && Mu(n) && Rn(n); ) n = Qs(n, t);
  return n && Ht(n) && Rn(n) && !hs(n) ? r : n || ju(e) || r;
}
const qu = async function (e) {
  const t = this.getOffsetParent || ui,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: Hu(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function Gu(e) {
  return ze(e).direction === "rtl";
}
const Ku = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lu,
  getDocumentElement: Qe,
  getClippingRect: Wu,
  getOffsetParent: ui,
  getElementRects: qu,
  getClientRects: Fu,
  getDimensions: Uu,
  getScale: Zt,
  isElement: Be,
  isRTL: Gu,
};
function Yu(e, t) {
  let r = null,
    n;
  const s = Qe(e);
  function o() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), (r = null);
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), o();
    const { left: l, top: u, width: f, height: v } = e.getBoundingClientRect();
    if ((a || t(), !f || !v)) return;
    const g = Mr(u),
      b = Mr(s.clientWidth - (l + f)),
      h = Mr(s.clientHeight - (u + v)),
      m = Mr(l),
      y = {
        rootMargin: -g + "px " + -b + "px " + -h + "px " + -m + "px",
        threshold: Ne(0, yt(1, c)) || 1,
      };
    let C = !0;
    function A(E) {
      const F = E[0].intersectionRatio;
      if (F !== c) {
        if (!C) return i();
        F
          ? i(!1, F)
          : (n = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      C = !1;
    }
    try {
      r = new IntersectionObserver(A, { ...y, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(A, y);
    }
    r.observe(e);
  }
  return i(!0), o;
}
function Xu(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: o = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = n,
    l = ms(e),
    u = s || o ? [...(l ? Er(l) : []), ...Er(t)] : [];
  u.forEach((_) => {
    s && _.addEventListener("scroll", r, { passive: !0 }),
      o && _.addEventListener("resize", r);
  });
  const f = l && a ? Yu(l, r) : null;
  let v = -1,
    g = null;
  i &&
    ((g = new ResizeObserver((_) => {
      let [y] = _;
      y &&
        y.target === l &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var C;
          (C = g) == null || C.observe(t);
        }))),
        r();
    })),
    l && !c && g.observe(l),
    g.observe(t));
  let b,
    h = c ? Nt(e) : null;
  c && m();
  function m() {
    const _ = Nt(e);
    h &&
      (_.x !== h.x ||
        _.y !== h.y ||
        _.width !== h.width ||
        _.height !== h.height) &&
      r(),
      (h = _),
      (b = requestAnimationFrame(m));
  }
  return (
    r(),
    () => {
      var _;
      u.forEach((y) => {
        s && y.removeEventListener("scroll", r),
          o && y.removeEventListener("resize", r);
      }),
        f?.(),
        (_ = g) == null || _.disconnect(),
        (g = null),
        c && cancelAnimationFrame(b);
    }
  );
}
const Ju = Ou,
  Qu = Nu,
  ed = Au,
  td = Iu,
  rd = Tu,
  eo = ku,
  nd = Pu,
  sd = (e, t, r) => {
    const n = new Map(),
      s = { platform: Ku, ...r },
      o = { ...s.platform, _c: n };
    return Eu(e, t, { ...s, platform: o });
  };
var $r = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
function sn(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!sn(e[n], t[n])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (r = s.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const o = s[n];
      if (!(o === "_owner" && e.$$typeof) && !sn(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function di(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function to(e, t) {
  const r = di(e);
  return Math.round(t * r) / r;
}
function On(e) {
  const t = d.useRef(e);
  return (
    $r(() => {
      t.current = e;
    }),
    t
  );
}
function od(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: s,
      elements: { reference: o, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, f] = d.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [v, g] = d.useState(n);
  sn(v, n) || g(n);
  const [b, h] = d.useState(null),
    [m, _] = d.useState(null),
    y = d.useCallback((Z) => {
      Z !== F.current && ((F.current = Z), h(Z));
    }, []),
    C = d.useCallback((Z) => {
      Z !== j.current && ((j.current = Z), _(Z));
    }, []),
    A = o || b,
    E = i || m,
    F = d.useRef(null),
    j = d.useRef(null),
    W = d.useRef(u),
    J = c != null,
    q = On(c),
    ne = On(s),
    T = On(l),
    D = d.useCallback(() => {
      if (!F.current || !j.current) return;
      const Z = { placement: t, strategy: r, middleware: v };
      ne.current && (Z.platform = ne.current),
        sd(F.current, j.current, Z).then((te) => {
          const ue = { ...te, isPositioned: T.current !== !1 };
          L.current &&
            !sn(W.current, ue) &&
            ((W.current = ue),
            an.flushSync(() => {
              f(ue);
            }));
        });
    }, [v, t, r, ne, T]);
  $r(() => {
    l === !1 &&
      W.current.isPositioned &&
      ((W.current.isPositioned = !1), f((Z) => ({ ...Z, isPositioned: !1 })));
  }, [l]);
  const L = d.useRef(!1);
  $r(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    [],
  ),
    $r(() => {
      if ((A && (F.current = A), E && (j.current = E), A && E)) {
        if (q.current) return q.current(A, E, D);
        D();
      }
    }, [A, E, D, q, J]);
  const K = d.useMemo(
      () => ({ reference: F, floating: j, setReference: y, setFloating: C }),
      [y, C],
    ),
    $ = d.useMemo(() => ({ reference: A, floating: E }), [A, E]),
    G = d.useMemo(() => {
      const Z = { position: r, left: 0, top: 0 };
      if (!$.floating) return Z;
      const te = to($.floating, u.x),
        ue = to($.floating, u.y);
      return a
        ? {
            ...Z,
            transform: "translate(" + te + "px, " + ue + "px)",
            ...(di($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: te, top: ue };
    }, [r, a, $.floating, u.x, u.y]);
  return d.useMemo(
    () => ({ ...u, update: D, refs: K, elements: $, floatingStyles: G }),
    [u, D, K, $, G],
  );
}
const id = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: s } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? eo({ element: n.current, padding: s }).fn(r)
            : {}
          : n
            ? eo({ element: n, padding: s }).fn(r)
            : {};
      },
    };
  },
  ad = (e, t) => ({ ...Ju(e), options: [e, t] }),
  cd = (e, t) => ({ ...Qu(e), options: [e, t] }),
  ld = (e, t) => ({ ...nd(e), options: [e, t] }),
  ud = (e, t) => ({ ...ed(e), options: [e, t] }),
  dd = (e, t) => ({ ...td(e), options: [e, t] }),
  fd = (e, t) => ({ ...rd(e), options: [e, t] }),
  hd = (e, t) => ({ ...id(e), options: [e, t] });
var pd = "Arrow",
  fi = d.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: s = 5, ...o } = e;
    return w.jsx(me.svg, {
      ...o,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
fi.displayName = pd;
var md = fi;
function gd(e) {
  const [t, r] = d.useState(void 0);
  return (
    Me(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const o = s[0];
          let i, a;
          if ("borderBoxSize" in o) {
            const c = o.borderBoxSize,
              l = Array.isArray(c) ? c[0] : c;
            (i = l.inlineSize), (a = l.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          r({ width: i, height: a });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
var vs = "Popper",
  [hi, pi] = cs(vs),
  [vd, mi] = hi(vs),
  gi = (e) => {
    const { __scopePopper: t, children: r } = e,
      [n, s] = d.useState(null);
    return w.jsx(vd, { scope: t, anchor: n, onAnchorChange: s, children: r });
  };
gi.displayName = vs;
var vi = "PopperAnchor",
  yi = d.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e,
      o = mi(vi, r),
      i = d.useRef(null),
      a = _e(t, i);
    return (
      d.useEffect(() => {
        o.onAnchorChange(n?.current || i.current);
      }),
      n ? null : w.jsx(me.div, { ...s, ref: a })
    );
  });
yi.displayName = vi;
var ys = "PopperContent",
  [yd, bd] = hi(ys),
  bi = d.forwardRef((e, t) => {
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: s = 0,
        align: o = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: f = "partial",
        hideWhenDetached: v = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: b,
        ...h
      } = e,
      m = mi(ys, r),
      [_, y] = d.useState(null),
      C = _e(t, (z) => y(z)),
      [A, E] = d.useState(null),
      F = gd(A),
      j = F?.width ?? 0,
      W = F?.height ?? 0,
      J = n + (o !== "center" ? "-" + o : ""),
      q =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      ne = Array.isArray(l) ? l : [l],
      T = ne.length > 0,
      D = { padding: q, boundary: ne.filter(wd), altBoundary: T },
      {
        refs: L,
        floatingStyles: K,
        placement: $,
        isPositioned: G,
        middlewareData: Z,
      } = od({
        strategy: "fixed",
        placement: J,
        whileElementsMounted: (...z) =>
          Xu(...z, { animationFrame: g === "always" }),
        elements: { reference: m.anchor },
        middleware: [
          ad({ mainAxis: s + W, alignmentAxis: i }),
          c &&
            cd({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? ld() : void 0,
              ...D,
            }),
          c && ud({ ...D }),
          dd({
            ...D,
            apply: ({
              elements: z,
              rects: ce,
              availableWidth: be,
              availableHeight: ie,
            }) => {
              const { width: ae, height: he } = ce.reference,
                Ee = z.floating.style;
              Ee.setProperty("--radix-popper-available-width", `${be}px`),
                Ee.setProperty("--radix-popper-available-height", `${ie}px`),
                Ee.setProperty("--radix-popper-anchor-width", `${ae}px`),
                Ee.setProperty("--radix-popper-anchor-height", `${he}px`);
            },
          }),
          A && hd({ element: A, padding: a }),
          _d({ arrowWidth: j, arrowHeight: W }),
          v && fd({ strategy: "referenceHidden", ...D }),
        ],
      }),
      [te, ue] = _i($),
      ge = ot(b);
    Me(() => {
      G && ge?.();
    }, [G, ge]);
    const ct = Z.arrow?.x,
      St = Z.arrow?.y,
      je = Z.arrow?.centerOffset !== 0,
      [lt, De] = d.useState();
    return (
      Me(() => {
        _ && De(window.getComputedStyle(_).zIndex);
      }, [_]),
      w.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: G ? K.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: lt,
          "--radix-popper-transform-origin": [
            Z.transformOrigin?.x,
            Z.transformOrigin?.y,
          ].join(" "),
          ...(Z.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: w.jsx(yd, {
          scope: r,
          placedSide: te,
          onArrowChange: E,
          arrowX: ct,
          arrowY: St,
          shouldHideArrow: je,
          children: w.jsx(me.div, {
            "data-side": te,
            "data-align": ue,
            ...h,
            ref: C,
            style: { ...h.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
bi.displayName = ys;
var xi = "PopperArrow",
  xd = { top: "bottom", right: "left", bottom: "top", left: "right" },
  wi = d.forwardRef(function (t, r) {
    const { __scopePopper: n, ...s } = t,
      o = bd(xi, n),
      i = xd[o.placedSide];
    return w.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: w.jsx(md, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
wi.displayName = xi;
function wd(e) {
  return e !== null;
}
var _d = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: s } = t,
      i = s.arrow?.centerOffset !== 0,
      a = i ? 0 : e.arrowWidth,
      c = i ? 0 : e.arrowHeight,
      [l, u] = _i(r),
      f = { start: "0%", center: "50%", end: "100%" }[u],
      v = (s.arrow?.x ?? 0) + a / 2,
      g = (s.arrow?.y ?? 0) + c / 2;
    let b = "",
      h = "";
    return (
      l === "bottom"
        ? ((b = i ? f : `${v}px`), (h = `${-c}px`))
        : l === "top"
          ? ((b = i ? f : `${v}px`), (h = `${n.floating.height + c}px`))
          : l === "right"
            ? ((b = `${-c}px`), (h = i ? f : `${g}px`))
            : l === "left" &&
              ((b = `${n.floating.width + c}px`), (h = i ? f : `${g}px`)),
      { data: { x: b, y: h } }
    );
  },
});
function _i(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Sd = gi,
  Cd = yi,
  Ed = bi,
  kd = wi,
  Ad = "Portal",
  Si = d.forwardRef((e, t) => {
    const { container: r, ...n } = e,
      [s, o] = d.useState(!1);
    Me(() => o(!0), []);
    const i = r || (s && globalThis?.document?.body);
    return i ? Ca.createPortal(w.jsx(me.div, { ...n, ref: t }), i) : null;
  });
Si.displayName = Ad;
function ro({ prop: e, defaultProp: t, onChange: r = () => {} }) {
  const [n, s] = Td({ defaultProp: t, onChange: r }),
    o = e !== void 0,
    i = o ? e : n,
    a = ot(r),
    c = d.useCallback(
      (l) => {
        if (o) {
          const f = typeof l == "function" ? l(e) : l;
          f !== e && a(f);
        } else s(l);
      },
      [o, e, s, a],
    );
  return [i, c];
}
function Td({ defaultProp: e, onChange: t }) {
  const r = d.useState(e),
    [n] = r,
    s = d.useRef(n),
    o = ot(t);
  return (
    d.useEffect(() => {
      s.current !== n && (o(n), (s.current = n));
    }, [n, s, o]),
    r
  );
}
function Rd(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var Od = "VisuallyHidden",
  Ci = d.forwardRef((e, t) =>
    w.jsx(me.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Ci.displayName = Od;
var Nd = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Mt = new WeakMap(),
  jr = new WeakMap(),
  Dr = {},
  Nn = 0,
  Ei = function (e) {
    return e && (e.host || Ei(e.parentNode));
  },
  Pd = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = Ei(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  Id = function (e, t, r, n) {
    var s = Pd(t, Array.isArray(e) ? e : [e]);
    Dr[r] || (Dr[r] = new WeakMap());
    var o = Dr[r],
      i = [],
      a = new Set(),
      c = new Set(s),
      l = function (f) {
        !f || a.has(f) || (a.add(f), l(f.parentNode));
      };
    s.forEach(l);
    var u = function (f) {
      !f ||
        c.has(f) ||
        Array.prototype.forEach.call(f.children, function (v) {
          if (a.has(v)) u(v);
          else
            try {
              var g = v.getAttribute(n),
                b = g !== null && g !== "false",
                h = (Mt.get(v) || 0) + 1,
                m = (o.get(v) || 0) + 1;
              Mt.set(v, h),
                o.set(v, m),
                i.push(v),
                h === 1 && b && jr.set(v, !0),
                m === 1 && v.setAttribute(r, "true"),
                b || v.setAttribute(n, "true");
            } catch (_) {
              console.error("aria-hidden: cannot operate on ", v, _);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      Nn++,
      function () {
        i.forEach(function (f) {
          var v = Mt.get(f) - 1,
            g = o.get(f) - 1;
          Mt.set(f, v),
            o.set(f, g),
            v || (jr.has(f) || f.removeAttribute(n), jr.delete(f)),
            g || f.removeAttribute(r);
        }),
          Nn--,
          Nn ||
            ((Mt = new WeakMap()),
            (Mt = new WeakMap()),
            (jr = new WeakMap()),
            (Dr = {}));
      }
    );
  },
  Md = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      s = Nd(e);
    return s
      ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))),
        Id(n, s, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  He = function () {
    return (
      (He =
        Object.assign ||
        function (t) {
          for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
          return t;
        }),
      He.apply(this, arguments)
    );
  };
function ki(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
        (r[n[s]] = e[n[s]]);
  return r;
}
function jd(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, o; n < s; n++)
      (o || !(n in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var Zr = "right-scroll-bar-position",
  Br = "width-before-scroll-bar",
  Dd = "with-scroll-bars-hidden",
  Vd = "--removed-body-scroll-bar-size";
function Pn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ld(e, t) {
  var r = d.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && ((r.value = n), r.callback(n, s));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var Fd = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
  no = new WeakMap();
function $d(e, t) {
  var r = Ld(null, function (n) {
    return e.forEach(function (s) {
      return Pn(s, n);
    });
  });
  return (
    Fd(
      function () {
        var n = no.get(r);
        if (n) {
          var s = new Set(n),
            o = new Set(e),
            i = r.current;
          s.forEach(function (a) {
            o.has(a) || Pn(a, null);
          }),
            o.forEach(function (a) {
              s.has(a) || Pn(a, i);
            });
        }
        no.set(r, e);
      },
      [e],
    ),
    r
  );
}
function Zd(e) {
  return e;
}
function Bd(e, t) {
  t === void 0 && (t = Zd);
  var r = [],
    n = !1,
    s = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (o) {
        var i = t(o, n);
        return (
          r.push(i),
          function () {
            r = r.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (n = !0; r.length; ) {
          var i = r;
          (r = []), i.forEach(o);
        }
        r = {
          push: function (a) {
            return o(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (o) {
        n = !0;
        var i = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(o), (i = r);
        }
        var c = function () {
            var u = i;
            (i = []), u.forEach(o);
          },
          l = function () {
            return Promise.resolve().then(c);
          };
        l(),
          (r = {
            push: function (u) {
              i.push(u), l();
            },
            filter: function (u) {
              return (i = i.filter(u)), r;
            },
          });
      },
    };
  return s;
}
function zd(e) {
  e === void 0 && (e = {});
  var t = Bd(null);
  return (t.options = He({ async: !0, ssr: !1 }, e)), t;
}
var Ai = function (e) {
  var t = e.sideCar,
    r = ki(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return d.createElement(n, He({}, r));
};
Ai.isSideCarExport = !0;
function Wd(e, t) {
  return e.useMedium(t), Ai;
}
var Ti = zd(),
  In = function () {},
  mn = d.forwardRef(function (e, t) {
    var r = d.useRef(null),
      n = d.useState({
        onScrollCapture: In,
        onWheelCapture: In,
        onTouchMoveCapture: In,
      }),
      s = n[0],
      o = n[1],
      i = e.forwardProps,
      a = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      f = e.shards,
      v = e.sideCar,
      g = e.noIsolation,
      b = e.inert,
      h = e.allowPinchZoom,
      m = e.as,
      _ = m === void 0 ? "div" : m,
      y = e.gapMode,
      C = ki(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      A = v,
      E = $d([r, t]),
      F = He(He({}, C), s);
    return d.createElement(
      d.Fragment,
      null,
      u &&
        d.createElement(A, {
          sideCar: Ti,
          removeScrollBar: l,
          shards: f,
          noIsolation: g,
          inert: b,
          setCallbacks: o,
          allowPinchZoom: !!h,
          lockRef: r,
          gapMode: y,
        }),
      i
        ? d.cloneElement(d.Children.only(a), He(He({}, F), { ref: E }))
        : d.createElement(_, He({}, F, { className: c, ref: E }), a),
    );
  });
mn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
mn.classNames = { fullWidth: Br, zeroRight: Zr };
var Ud = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Hd() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ud();
  return t && e.setAttribute("nonce", t), e;
}
function qd(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Gd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kd = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = Hd()) && (qd(t, r), Gd(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Yd = function () {
    var e = Kd();
    return function (t, r) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  Ri = function () {
    var e = Yd(),
      t = function (r) {
        var n = r.styles,
          s = r.dynamic;
        return e(n, s), null;
      };
    return t;
  },
  Xd = { left: 0, top: 0, right: 0, gap: 0 },
  Mn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Jd = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Mn(r), Mn(n), Mn(s)];
  },
  Qd = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Xd;
    var t = Jd(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  ef = Ri(),
  Bt = "data-scroll-locked",
  tf = function (e, t, r, n) {
    var s = e.left,
      o = e.top,
      i = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          Dd,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          Bt,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  o,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(a, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Zr,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          Br,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Zr, " .")
        .concat(
          Zr,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Br, " .")
        .concat(
          Br,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          Bt,
          `] {
    `,
        )
        .concat(Vd, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  so = function () {
    var e = parseInt(document.body.getAttribute(Bt) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  rf = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(Bt, (so() + 1).toString()),
        function () {
          var e = so() - 1;
          e <= 0
            ? document.body.removeAttribute(Bt)
            : document.body.setAttribute(Bt, e.toString());
        }
      );
    }, []);
  },
  nf = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      s = n === void 0 ? "margin" : n;
    rf();
    var o = d.useMemo(
      function () {
        return Qd(s);
      },
      [s],
    );
    return d.createElement(ef, { styles: tf(o, !t, s, r ? "" : "!important") });
  },
  Gn = !1;
if (typeof window < "u")
  try {
    var Vr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Gn = !0), !0;
      },
    });
    window.addEventListener("test", Vr, Vr),
      window.removeEventListener("test", Vr, Vr);
  } catch {
    Gn = !1;
  }
var jt = Gn ? { passive: !1 } : !1,
  sf = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Oi = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !sf(e) && r[t] === "visible")
    );
  },
  of = function (e) {
    return Oi(e, "overflowY");
  },
  af = function (e) {
    return Oi(e, "overflowX");
  },
  oo = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var s = Ni(e, n);
      if (s) {
        var o = Pi(e, n),
          i = o[1],
          a = o[2];
        if (i > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  cf = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  lf = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Ni = function (e, t) {
    return e === "v" ? of(t) : af(t);
  },
  Pi = function (e, t) {
    return e === "v" ? cf(t) : lf(t);
  },
  uf = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  df = function (e, t, r, n, s) {
    var o = uf(e, window.getComputedStyle(t).direction),
      i = o * n,
      a = r.target,
      c = t.contains(a),
      l = !1,
      u = i > 0,
      f = 0,
      v = 0;
    do {
      var g = Pi(e, a),
        b = g[0],
        h = g[1],
        m = g[2],
        _ = h - m - o * b;
      (b || _) && Ni(e, a) && ((f += _), (v += b)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return ((u && Math.abs(f) < 1) || (!u && Math.abs(v) < 1)) && (l = !0), l;
  },
  Lr = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  io = function (e) {
    return [e.deltaX, e.deltaY];
  },
  ao = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ff = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  hf = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  pf = 0,
  Dt = [];
function mf(e) {
  var t = d.useRef([]),
    r = d.useRef([0, 0]),
    n = d.useRef(),
    s = d.useState(pf++)[0],
    o = d.useState(Ri)[0],
    i = d.useRef(e);
  d.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var h = jd([e.lockRef.current], (e.shards || []).map(ao), !0).filter(
            Boolean,
          );
          return (
            h.forEach(function (m) {
              return m.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                h.forEach(function (m) {
                  return m.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = d.useCallback(function (h, m) {
      if (
        ("touches" in h && h.touches.length === 2) ||
        (h.type === "wheel" && h.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var _ = Lr(h),
        y = r.current,
        C = "deltaX" in h ? h.deltaX : y[0] - _[0],
        A = "deltaY" in h ? h.deltaY : y[1] - _[1],
        E,
        F = h.target,
        j = Math.abs(C) > Math.abs(A) ? "h" : "v";
      if ("touches" in h && j === "h" && F.type === "range") return !1;
      var W = oo(j, F);
      if (!W) return !0;
      if ((W ? (E = j) : ((E = j === "v" ? "h" : "v"), (W = oo(j, F))), !W))
        return !1;
      if (
        (!n.current && "changedTouches" in h && (C || A) && (n.current = E), !E)
      )
        return !0;
      var J = n.current || E;
      return df(J, m, h, J === "h" ? C : A);
    }, []),
    c = d.useCallback(function (h) {
      var m = h;
      if (!(!Dt.length || Dt[Dt.length - 1] !== o)) {
        var _ = "deltaY" in m ? io(m) : Lr(m),
          y = t.current.filter(function (E) {
            return (
              E.name === m.type &&
              (E.target === m.target || m.target === E.shadowParent) &&
              ff(E.delta, _)
            );
          })[0];
        if (y && y.should) {
          m.cancelable && m.preventDefault();
          return;
        }
        if (!y) {
          var C = (i.current.shards || [])
              .map(ao)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(m.target);
              }),
            A = C.length > 0 ? a(m, C[0]) : !i.current.noIsolation;
          A && m.cancelable && m.preventDefault();
        }
      }
    }, []),
    l = d.useCallback(function (h, m, _, y) {
      var C = { name: h, delta: m, target: _, should: y, shadowParent: gf(_) };
      t.current.push(C),
        setTimeout(function () {
          t.current = t.current.filter(function (A) {
            return A !== C;
          });
        }, 1);
    }, []),
    u = d.useCallback(function (h) {
      (r.current = Lr(h)), (n.current = void 0);
    }, []),
    f = d.useCallback(function (h) {
      l(h.type, io(h), h.target, a(h, e.lockRef.current));
    }, []),
    v = d.useCallback(function (h) {
      l(h.type, Lr(h), h.target, a(h, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      Dt.push(o),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", c, jt),
      document.addEventListener("touchmove", c, jt),
      document.addEventListener("touchstart", u, jt),
      function () {
        (Dt = Dt.filter(function (h) {
          return h !== o;
        })),
          document.removeEventListener("wheel", c, jt),
          document.removeEventListener("touchmove", c, jt),
          document.removeEventListener("touchstart", u, jt);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    b = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    b ? d.createElement(o, { styles: hf(s) }) : null,
    g ? d.createElement(nf, { gapMode: e.gapMode }) : null,
  );
}
function gf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const vf = Wd(Ti, mf);
var Ii = d.forwardRef(function (e, t) {
  return d.createElement(mn, He({}, e, { ref: t, sideCar: vf }));
});
Ii.classNames = mn.classNames;
var yf = [" ", "Enter", "ArrowUp", "ArrowDown"],
  bf = [" ", "Enter"],
  Rr = "Select",
  [gn, vn, xf] = Yl(Rr),
  [Yt] = cs(Rr, [xf, pi]),
  yn = pi(),
  [wf, wt] = Yt(Rr),
  [_f, Sf] = Yt(Rr),
  Mi = (e) => {
    const {
        __scopeSelect: t,
        children: r,
        open: n,
        defaultOpen: s,
        onOpenChange: o,
        value: i,
        defaultValue: a,
        onValueChange: c,
        dir: l,
        name: u,
        autoComplete: f,
        disabled: v,
        required: g,
        form: b,
      } = e,
      h = yn(t),
      [m, _] = d.useState(null),
      [y, C] = d.useState(null),
      [A, E] = d.useState(!1),
      F = Jl(l),
      [j = !1, W] = ro({ prop: n, defaultProp: s, onChange: o }),
      [J, q] = ro({ prop: i, defaultProp: a, onChange: c }),
      ne = d.useRef(null),
      T = m ? b || !!m.closest("form") : !0,
      [D, L] = d.useState(new Set()),
      K = Array.from(D)
        .map(($) => $.props.value)
        .join(";");
    return w.jsx(Sd, {
      ...h,
      children: w.jsxs(wf, {
        required: g,
        scope: t,
        trigger: m,
        onTriggerChange: _,
        valueNode: y,
        onValueNodeChange: C,
        valueNodeHasChildren: A,
        onValueNodeHasChildrenChange: E,
        contentId: ls(),
        value: J,
        onValueChange: q,
        open: j,
        onOpenChange: W,
        dir: F,
        triggerPointerDownPosRef: ne,
        disabled: v,
        children: [
          w.jsx(gn.Provider, {
            scope: t,
            children: w.jsx(_f, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: d.useCallback(($) => {
                L((G) => new Set(G).add($));
              }, []),
              onNativeOptionRemove: d.useCallback(($) => {
                L((G) => {
                  const Z = new Set(G);
                  return Z.delete($), Z;
                });
              }, []),
              children: r,
            }),
          }),
          T
            ? w.jsxs(
                oa,
                {
                  "aria-hidden": !0,
                  required: g,
                  tabIndex: -1,
                  name: u,
                  autoComplete: f,
                  value: J,
                  onChange: ($) => q($.target.value),
                  disabled: v,
                  form: b,
                  children: [
                    J === void 0 ? w.jsx("option", { value: "" }) : null,
                    Array.from(D),
                  ],
                },
                K,
              )
            : null,
        ],
      }),
    });
  };
Mi.displayName = Rr;
var ji = "SelectTrigger",
  Di = d.forwardRef((e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...s } = e,
      o = yn(r),
      i = wt(ji, r),
      a = i.disabled || n,
      c = _e(t, i.onTriggerChange),
      l = vn(r),
      u = d.useRef("touch"),
      [f, v, g] = ia((h) => {
        const m = l().filter((C) => !C.disabled),
          _ = m.find((C) => C.value === i.value),
          y = aa(m, h, _);
        y !== void 0 && i.onValueChange(y.value);
      }),
      b = (h) => {
        a || (i.onOpenChange(!0), g()),
          h &&
            (i.triggerPointerDownPosRef.current = {
              x: Math.round(h.pageX),
              y: Math.round(h.pageY),
            });
      };
    return w.jsx(Cd, {
      asChild: !0,
      ...o,
      children: w.jsx(me.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": sa(i.value) ? "" : void 0,
        ...s,
        ref: c,
        onClick: ve(s.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && b(h);
        }),
        onPointerDown: ve(s.onPointerDown, (h) => {
          u.current = h.pointerType;
          const m = h.target;
          m.hasPointerCapture(h.pointerId) &&
            m.releasePointerCapture(h.pointerId),
            h.button === 0 &&
              h.ctrlKey === !1 &&
              h.pointerType === "mouse" &&
              (b(h), h.preventDefault());
        }),
        onKeyDown: ve(s.onKeyDown, (h) => {
          const m = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) &&
            h.key.length === 1 &&
            v(h.key),
            !(m && h.key === " ") &&
              yf.includes(h.key) &&
              (b(), h.preventDefault());
        }),
      }),
    });
  });
Di.displayName = ji;
var Vi = "SelectValue",
  Li = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        className: n,
        style: s,
        children: o,
        placeholder: i = "",
        ...a
      } = e,
      c = wt(Vi, r),
      { onValueNodeHasChildrenChange: l } = c,
      u = o !== void 0,
      f = _e(t, c.onValueNodeChange);
    return (
      Me(() => {
        l(u);
      }, [l, u]),
      w.jsx(me.span, {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: sa(c.value) ? w.jsx(w.Fragment, { children: i }) : o,
      })
    );
  });
Li.displayName = Vi;
var Cf = "SelectIcon",
  Fi = d.forwardRef((e, t) => {
    const { __scopeSelect: r, children: n, ...s } = e;
    return w.jsx(me.span, {
      "aria-hidden": !0,
      ...s,
      ref: t,
      children: n || "▼",
    });
  });
Fi.displayName = Cf;
var Ef = "SelectPortal",
  $i = (e) => w.jsx(Si, { asChild: !0, ...e });
$i.displayName = Ef;
var Pt = "SelectContent",
  Zi = d.forwardRef((e, t) => {
    const r = wt(Pt, e.__scopeSelect),
      [n, s] = d.useState();
    if (
      (Me(() => {
        s(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const o = n;
      return o
        ? an.createPortal(
            w.jsx(Bi, {
              scope: e.__scopeSelect,
              children: w.jsx(gn.Slot, {
                scope: e.__scopeSelect,
                children: w.jsx("div", { children: e.children }),
              }),
            }),
            o,
          )
        : null;
    }
    return w.jsx(zi, { ...e, ref: t });
  });
Zi.displayName = Pt;
var Ve = 10,
  [Bi, _t] = Yt(Pt),
  kf = "SelectContentImpl",
  zi = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        position: n = "item-aligned",
        onCloseAutoFocus: s,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        side: a,
        sideOffset: c,
        align: l,
        alignOffset: u,
        arrowPadding: f,
        collisionBoundary: v,
        collisionPadding: g,
        sticky: b,
        hideWhenDetached: h,
        avoidCollisions: m,
        ..._
      } = e,
      y = wt(Pt, r),
      [C, A] = d.useState(null),
      [E, F] = d.useState(null),
      j = _e(t, (z) => A(z)),
      [W, J] = d.useState(null),
      [q, ne] = d.useState(null),
      T = vn(r),
      [D, L] = d.useState(!1),
      K = d.useRef(!1);
    d.useEffect(() => {
      if (C) return Md(C);
    }, [C]),
      au();
    const $ = d.useCallback(
        (z) => {
          const [ce, ...be] = T().map((he) => he.ref.current),
            [ie] = be.slice(-1),
            ae = document.activeElement;
          for (const he of z)
            if (
              he === ae ||
              (he?.scrollIntoView({ block: "nearest" }),
              he === ce && E && (E.scrollTop = 0),
              he === ie && E && (E.scrollTop = E.scrollHeight),
              he?.focus(),
              document.activeElement !== ae)
            )
              return;
        },
        [T, E],
      ),
      G = d.useCallback(() => $([W, C]), [$, W, C]);
    d.useEffect(() => {
      D && G();
    }, [D, G]);
    const { onOpenChange: Z, triggerPointerDownPosRef: te } = y;
    d.useEffect(() => {
      if (C) {
        let z = { x: 0, y: 0 };
        const ce = (ie) => {
            z = {
              x: Math.abs(Math.round(ie.pageX) - (te.current?.x ?? 0)),
              y: Math.abs(Math.round(ie.pageY) - (te.current?.y ?? 0)),
            };
          },
          be = (ie) => {
            z.x <= 10 && z.y <= 10
              ? ie.preventDefault()
              : C.contains(ie.target) || Z(!1),
              document.removeEventListener("pointermove", ce),
              (te.current = null);
          };
        return (
          te.current !== null &&
            (document.addEventListener("pointermove", ce),
            document.addEventListener("pointerup", be, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ce),
              document.removeEventListener("pointerup", be, { capture: !0 });
          }
        );
      }
    }, [C, Z, te]),
      d.useEffect(() => {
        const z = () => Z(!1);
        return (
          window.addEventListener("blur", z),
          window.addEventListener("resize", z),
          () => {
            window.removeEventListener("blur", z),
              window.removeEventListener("resize", z);
          }
        );
      }, [Z]);
    const [ue, ge] = ia((z) => {
        const ce = T().filter((ae) => !ae.disabled),
          be = ce.find((ae) => ae.ref.current === document.activeElement),
          ie = aa(ce, z, be);
        ie && setTimeout(() => ie.ref.current.focus());
      }),
      ct = d.useCallback(
        (z, ce, be) => {
          const ie = !K.current && !be;
          ((y.value !== void 0 && y.value === ce) || ie) &&
            (J(z), ie && (K.current = !0));
        },
        [y.value],
      ),
      St = d.useCallback(() => C?.focus(), [C]),
      je = d.useCallback(
        (z, ce, be) => {
          const ie = !K.current && !be;
          ((y.value !== void 0 && y.value === ce) || ie) && ne(z);
        },
        [y.value],
      ),
      lt = n === "popper" ? Kn : Wi,
      De =
        lt === Kn
          ? {
              side: a,
              sideOffset: c,
              align: l,
              alignOffset: u,
              arrowPadding: f,
              collisionBoundary: v,
              collisionPadding: g,
              sticky: b,
              hideWhenDetached: h,
              avoidCollisions: m,
            }
          : {};
    return w.jsx(Bi, {
      scope: r,
      content: C,
      viewport: E,
      onViewportChange: F,
      itemRefCallback: ct,
      selectedItem: W,
      onItemLeave: St,
      itemTextRefCallback: je,
      focusSelectedItem: G,
      selectedItemText: q,
      position: n,
      isPositioned: D,
      searchRef: ue,
      children: w.jsx(Ii, {
        as: Ot,
        allowPinchZoom: !0,
        children: w.jsx(ti, {
          asChild: !0,
          trapped: y.open,
          onMountAutoFocus: (z) => {
            z.preventDefault();
          },
          onUnmountAutoFocus: ve(s, (z) => {
            y.trigger?.focus({ preventScroll: !0 }), z.preventDefault();
          }),
          children: w.jsx(Qo, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            onFocusOutside: (z) => z.preventDefault(),
            onDismiss: () => y.onOpenChange(!1),
            children: w.jsx(lt, {
              role: "listbox",
              id: y.contentId,
              "data-state": y.open ? "open" : "closed",
              dir: y.dir,
              onContextMenu: (z) => z.preventDefault(),
              ..._,
              ...De,
              onPlaced: () => L(!0),
              ref: j,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ..._.style,
              },
              onKeyDown: ve(_.onKeyDown, (z) => {
                const ce = z.ctrlKey || z.altKey || z.metaKey;
                if (
                  (z.key === "Tab" && z.preventDefault(),
                  !ce && z.key.length === 1 && ge(z.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key))
                ) {
                  let ie = T()
                    .filter((ae) => !ae.disabled)
                    .map((ae) => ae.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(z.key) &&
                      (ie = ie.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(z.key))
                  ) {
                    const ae = z.target,
                      he = ie.indexOf(ae);
                    ie = ie.slice(he + 1);
                  }
                  setTimeout(() => $(ie)), z.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
zi.displayName = kf;
var Af = "SelectItemAlignedPosition",
  Wi = d.forwardRef((e, t) => {
    const { __scopeSelect: r, onPlaced: n, ...s } = e,
      o = wt(Pt, r),
      i = _t(Pt, r),
      [a, c] = d.useState(null),
      [l, u] = d.useState(null),
      f = _e(t, (j) => u(j)),
      v = vn(r),
      g = d.useRef(!1),
      b = d.useRef(!0),
      {
        viewport: h,
        selectedItem: m,
        selectedItemText: _,
        focusSelectedItem: y,
      } = i,
      C = d.useCallback(() => {
        if (o.trigger && o.valueNode && a && l && h && m && _) {
          const j = o.trigger.getBoundingClientRect(),
            W = l.getBoundingClientRect(),
            J = o.valueNode.getBoundingClientRect(),
            q = _.getBoundingClientRect();
          if (o.dir !== "rtl") {
            const ae = q.left - W.left,
              he = J.left - ae,
              Ee = j.left - he,
              We = j.width + Ee,
              Or = Math.max(We, W.width),
              Nr = window.innerWidth - Ve,
              Pr = $s(he, [Ve, Math.max(Ve, Nr - Or)]);
            (a.style.minWidth = We + "px"), (a.style.left = Pr + "px");
          } else {
            const ae = W.right - q.right,
              he = window.innerWidth - J.right - ae,
              Ee = window.innerWidth - j.right - he,
              We = j.width + Ee,
              Or = Math.max(We, W.width),
              Nr = window.innerWidth - Ve,
              Pr = $s(he, [Ve, Math.max(Ve, Nr - Or)]);
            (a.style.minWidth = We + "px"), (a.style.right = Pr + "px");
          }
          const ne = v(),
            T = window.innerHeight - Ve * 2,
            D = h.scrollHeight,
            L = window.getComputedStyle(l),
            K = parseInt(L.borderTopWidth, 10),
            $ = parseInt(L.paddingTop, 10),
            G = parseInt(L.borderBottomWidth, 10),
            Z = parseInt(L.paddingBottom, 10),
            te = K + $ + D + Z + G,
            ue = Math.min(m.offsetHeight * 5, te),
            ge = window.getComputedStyle(h),
            ct = parseInt(ge.paddingTop, 10),
            St = parseInt(ge.paddingBottom, 10),
            je = j.top + j.height / 2 - Ve,
            lt = T - je,
            De = m.offsetHeight / 2,
            z = m.offsetTop + De,
            ce = K + $ + z,
            be = te - ce;
          if (ce <= je) {
            const ae = ne.length > 0 && m === ne[ne.length - 1].ref.current;
            a.style.bottom = "0px";
            const he = l.clientHeight - h.offsetTop - h.offsetHeight,
              Ee = Math.max(lt, De + (ae ? St : 0) + he + G),
              We = ce + Ee;
            a.style.height = We + "px";
          } else {
            const ae = ne.length > 0 && m === ne[0].ref.current;
            a.style.top = "0px";
            const Ee = Math.max(je, K + h.offsetTop + (ae ? ct : 0) + De) + be;
            (a.style.height = Ee + "px"), (h.scrollTop = ce - je + h.offsetTop);
          }
          (a.style.margin = `${Ve}px 0`),
            (a.style.minHeight = ue + "px"),
            (a.style.maxHeight = T + "px"),
            n?.(),
            requestAnimationFrame(() => (g.current = !0));
        }
      }, [v, o.trigger, o.valueNode, a, l, h, m, _, o.dir, n]);
    Me(() => C(), [C]);
    const [A, E] = d.useState();
    Me(() => {
      l && E(window.getComputedStyle(l).zIndex);
    }, [l]);
    const F = d.useCallback(
      (j) => {
        j && b.current === !0 && (C(), y?.(), (b.current = !1));
      },
      [C, y],
    );
    return w.jsx(Rf, {
      scope: r,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: F,
      children: w.jsx("div", {
        ref: c,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: A,
        },
        children: w.jsx(me.div, {
          ...s,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
        }),
      }),
    });
  });
Wi.displayName = Af;
var Tf = "SelectPopperPosition",
  Kn = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        align: n = "start",
        collisionPadding: s = Ve,
        ...o
      } = e,
      i = yn(r);
    return w.jsx(Ed, {
      ...i,
      ...o,
      ref: t,
      align: n,
      collisionPadding: s,
      style: {
        boxSizing: "border-box",
        ...o.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Kn.displayName = Tf;
var [Rf, bs] = Yt(Pt, {}),
  Yn = "SelectViewport",
  Ui = d.forwardRef((e, t) => {
    const { __scopeSelect: r, nonce: n, ...s } = e,
      o = _t(Yn, r),
      i = bs(Yn, r),
      a = _e(t, o.onViewportChange),
      c = d.useRef(0);
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: n,
        }),
        w.jsx(gn.Slot, {
          scope: r,
          children: w.jsx(me.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...s,
            ref: a,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...s.style,
            },
            onScroll: ve(s.onScroll, (l) => {
              const u = l.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: v } = i;
              if (v?.current && f) {
                const g = Math.abs(c.current - u.scrollTop);
                if (g > 0) {
                  const b = window.innerHeight - Ve * 2,
                    h = parseFloat(f.style.minHeight),
                    m = parseFloat(f.style.height),
                    _ = Math.max(h, m);
                  if (_ < b) {
                    const y = _ + g,
                      C = Math.min(b, y),
                      A = y - C;
                    (f.style.height = C + "px"),
                      f.style.bottom === "0px" &&
                        ((u.scrollTop = A > 0 ? A : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              c.current = u.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Ui.displayName = Yn;
var Hi = "SelectGroup",
  [Of, Nf] = Yt(Hi),
  Pf = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      s = ls();
    return w.jsx(Of, {
      scope: r,
      id: s,
      children: w.jsx(me.div, {
        role: "group",
        "aria-labelledby": s,
        ...n,
        ref: t,
      }),
    });
  });
Pf.displayName = Hi;
var qi = "SelectLabel",
  Gi = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      s = Nf(qi, r);
    return w.jsx(me.div, { id: s.id, ...n, ref: t });
  });
Gi.displayName = qi;
var on = "SelectItem",
  [If, Ki] = Yt(on),
  Yi = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        value: n,
        disabled: s = !1,
        textValue: o,
        ...i
      } = e,
      a = wt(on, r),
      c = _t(on, r),
      l = a.value === n,
      [u, f] = d.useState(o ?? ""),
      [v, g] = d.useState(!1),
      b = _e(t, (y) => c.itemRefCallback?.(y, n, s)),
      h = ls(),
      m = d.useRef("touch"),
      _ = () => {
        s || (a.onValueChange(n), a.onOpenChange(!1));
      };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return w.jsx(If, {
      scope: r,
      value: n,
      disabled: s,
      textId: h,
      isSelected: l,
      onItemTextChange: d.useCallback((y) => {
        f((C) => C || (y?.textContent ?? "").trim());
      }, []),
      children: w.jsx(gn.ItemSlot, {
        scope: r,
        value: n,
        disabled: s,
        textValue: u,
        children: w.jsx(me.div, {
          role: "option",
          "aria-labelledby": h,
          "data-highlighted": v ? "" : void 0,
          "aria-selected": l && v,
          "data-state": l ? "checked" : "unchecked",
          "aria-disabled": s || void 0,
          "data-disabled": s ? "" : void 0,
          tabIndex: s ? void 0 : -1,
          ...i,
          ref: b,
          onFocus: ve(i.onFocus, () => g(!0)),
          onBlur: ve(i.onBlur, () => g(!1)),
          onClick: ve(i.onClick, () => {
            m.current !== "mouse" && _();
          }),
          onPointerUp: ve(i.onPointerUp, () => {
            m.current === "mouse" && _();
          }),
          onPointerDown: ve(i.onPointerDown, (y) => {
            m.current = y.pointerType;
          }),
          onPointerMove: ve(i.onPointerMove, (y) => {
            (m.current = y.pointerType),
              s
                ? c.onItemLeave?.()
                : m.current === "mouse" &&
                  y.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: ve(i.onPointerLeave, (y) => {
            y.currentTarget === document.activeElement && c.onItemLeave?.();
          }),
          onKeyDown: ve(i.onKeyDown, (y) => {
            (c.searchRef?.current !== "" && y.key === " ") ||
              (bf.includes(y.key) && _(), y.key === " " && y.preventDefault());
          }),
        }),
      }),
    });
  });
Yi.displayName = on;
var cr = "SelectItemText",
  Xi = d.forwardRef((e, t) => {
    const { __scopeSelect: r, className: n, style: s, ...o } = e,
      i = wt(cr, r),
      a = _t(cr, r),
      c = Ki(cr, r),
      l = Sf(cr, r),
      [u, f] = d.useState(null),
      v = _e(
        t,
        (_) => f(_),
        c.onItemTextChange,
        (_) => a.itemTextRefCallback?.(_, c.value, c.disabled),
      ),
      g = u?.textContent,
      b = d.useMemo(
        () =>
          w.jsx(
            "option",
            { value: c.value, disabled: c.disabled, children: g },
            c.value,
          ),
        [c.disabled, c.value, g],
      ),
      { onNativeOptionAdd: h, onNativeOptionRemove: m } = l;
    return (
      Me(() => (h(b), () => m(b)), [h, m, b]),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(me.span, { id: c.textId, ...o, ref: v }),
          c.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? an.createPortal(o.children, i.valueNode)
            : null,
        ],
      })
    );
  });
Xi.displayName = cr;
var Ji = "SelectItemIndicator",
  Qi = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Ki(Ji, r).isSelected
      ? w.jsx(me.span, { "aria-hidden": !0, ...n, ref: t })
      : null;
  });
Qi.displayName = Ji;
var Xn = "SelectScrollUpButton",
  ea = d.forwardRef((e, t) => {
    const r = _t(Xn, e.__scopeSelect),
      n = bs(Xn, e.__scopeSelect),
      [s, o] = d.useState(!1),
      i = _e(t, n.onScrollButtonChange);
    return (
      Me(() => {
        if (r.viewport && r.isPositioned) {
          let a = function () {
            const l = c.scrollTop > 0;
            o(l);
          };
          const c = r.viewport;
          return (
            a(),
            c.addEventListener("scroll", a),
            () => c.removeEventListener("scroll", a)
          );
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? w.jsx(ra, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: c } = r;
              a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
            },
          })
        : null
    );
  });
ea.displayName = Xn;
var Jn = "SelectScrollDownButton",
  ta = d.forwardRef((e, t) => {
    const r = _t(Jn, e.__scopeSelect),
      n = bs(Jn, e.__scopeSelect),
      [s, o] = d.useState(!1),
      i = _e(t, n.onScrollButtonChange);
    return (
      Me(() => {
        if (r.viewport && r.isPositioned) {
          let a = function () {
            const l = c.scrollHeight - c.clientHeight,
              u = Math.ceil(c.scrollTop) < l;
            o(u);
          };
          const c = r.viewport;
          return (
            a(),
            c.addEventListener("scroll", a),
            () => c.removeEventListener("scroll", a)
          );
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? w.jsx(ra, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: c } = r;
              a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
            },
          })
        : null
    );
  });
ta.displayName = Jn;
var ra = d.forwardRef((e, t) => {
    const { __scopeSelect: r, onAutoScroll: n, ...s } = e,
      o = _t("SelectScrollButton", r),
      i = d.useRef(null),
      a = vn(r),
      c = d.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      d.useEffect(() => () => c(), [c]),
      Me(() => {
        a()
          .find((u) => u.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [a]),
      w.jsx(me.div, {
        "aria-hidden": !0,
        ...s,
        ref: t,
        style: { flexShrink: 0, ...s.style },
        onPointerDown: ve(s.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(n, 50));
        }),
        onPointerMove: ve(s.onPointerMove, () => {
          o.onItemLeave?.(),
            i.current === null && (i.current = window.setInterval(n, 50));
        }),
        onPointerLeave: ve(s.onPointerLeave, () => {
          c();
        }),
      })
    );
  }),
  Mf = "SelectSeparator",
  na = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return w.jsx(me.div, { "aria-hidden": !0, ...n, ref: t });
  });
na.displayName = Mf;
var Qn = "SelectArrow",
  jf = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      s = yn(r),
      o = wt(Qn, r),
      i = _t(Qn, r);
    return o.open && i.position === "popper"
      ? w.jsx(kd, { ...s, ...n, ref: t })
      : null;
  });
jf.displayName = Qn;
function sa(e) {
  return e === "" || e === void 0;
}
var oa = d.forwardRef((e, t) => {
  const { value: r, ...n } = e,
    s = d.useRef(null),
    o = _e(t, s),
    i = Rd(r);
  return (
    d.useEffect(() => {
      const a = s.current,
        c = window.HTMLSelectElement.prototype,
        u = Object.getOwnPropertyDescriptor(c, "value").set;
      if (i !== r && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(a, r), a.dispatchEvent(f);
      }
    }, [i, r]),
    w.jsx(Ci, {
      asChild: !0,
      children: w.jsx("select", { ...n, ref: o, defaultValue: r }),
    })
  );
});
oa.displayName = "BubbleSelect";
function ia(e) {
  const t = ot(e),
    r = d.useRef(""),
    n = d.useRef(0),
    s = d.useCallback(
      (i) => {
        const a = r.current + i;
        t(a),
          (function c(l) {
            (r.current = l),
              window.clearTimeout(n.current),
              l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
          })(a);
      },
      [t],
    ),
    o = d.useCallback(() => {
      (r.current = ""), window.clearTimeout(n.current);
    }, []);
  return d.useEffect(() => () => window.clearTimeout(n.current), []), [r, s, o];
}
function aa(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    o = r ? e.indexOf(r) : -1;
  let i = Df(e, Math.max(o, 0));
  s.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find((l) =>
    l.textValue.toLowerCase().startsWith(s.toLowerCase()),
  );
  return c !== r ? c : void 0;
}
function Df(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Vf = Mi,
  ca = Di,
  Lf = Li,
  Ff = Fi,
  $f = $i,
  la = Zi,
  Zf = Ui,
  ua = Gi,
  da = Yi,
  Bf = Xi,
  zf = Qi,
  fa = ea,
  ha = ta,
  pa = na;
const Wf = Vf,
  Uf = Lf,
  ma = d.forwardRef(({ className: e, children: t, ...r }, n) =>
    w.jsxs(ca, {
      ref: n,
      className: Ce(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...r,
      children: [
        t,
        w.jsx(Ff, {
          asChild: !0,
          children: w.jsx(Xo, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
ma.displayName = ca.displayName;
const ga = d.forwardRef(({ className: e, ...t }, r) =>
  w.jsx(fa, {
    ref: r,
    className: Ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(Gl, { className: "h-4 w-4" }),
  }),
);
ga.displayName = fa.displayName;
const va = d.forwardRef(({ className: e, ...t }, r) =>
  w.jsx(ha, {
    ref: r,
    className: Ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: w.jsx(Xo, { className: "h-4 w-4" }),
  }),
);
va.displayName = ha.displayName;
const ya = d.forwardRef(
  ({ className: e, children: t, position: r = "popper", ...n }, s) =>
    w.jsx($f, {
      children: w.jsxs(la, {
        ref: s,
        className: Ce(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          r === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: r,
        ...n,
        children: [
          w.jsx(ga, {}),
          w.jsx(Zf, {
            className: Ce(
              "p-1",
              r === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          w.jsx(va, {}),
        ],
      }),
    }),
);
ya.displayName = la.displayName;
const Hf = d.forwardRef(({ className: e, ...t }, r) =>
  w.jsx(ua, {
    ref: r,
    className: Ce("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  }),
);
Hf.displayName = ua.displayName;
const zr = d.forwardRef(({ className: e, children: t, ...r }, n) =>
  w.jsxs(da, {
    ref: n,
    className: Ce(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...r,
    children: [
      w.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: w.jsx(zf, { children: w.jsx(Ul, { className: "h-4 w-4" }) }),
      }),
      w.jsx(Bf, { children: t }),
    ],
  }),
);
zr.displayName = da.displayName;
const qf = d.forwardRef(({ className: e, ...t }, r) =>
  w.jsx(pa, { ref: r, className: Ce("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
qf.displayName = pa.displayName;
const ba = d.forwardRef(({ className: e, ...t }, r) =>
  w.jsx("textarea", {
    className: Ce(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...t,
  }),
);
ba.displayName = "Textarea";
const Gf = Qt.object({
    name: Qt.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50),
    contactMethod: Qt.enum(["email", "instagram", "phone"], {
      required_error: "Selecciona una forma de contacto",
    }),
    contactDetail: Qt.string(),
    message: Qt.string().min(
      10,
      "El mensaje debe tener al menos 10 caracteres",
    ),
  })
    .refine(
      (e) => {
        const { contactMethod: t, contactDetail: r } = e;
        return t === "instagram"
          ? r.length >= 1
          : t === "email" || t === "phone"
            ? r.length >= 5
            : !0;
      },
      {
        message:
          "El campo debe cumplir con la longitud mínima requerida para el método de contacto seleccionado.",
        path: ["contactDetail"],
      },
    )
    .refine(
      (e) => {
        const { contactMethod: t, contactDetail: r } = e;
        return t === "email"
          ? /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(r)
          : t === "phone"
            ? /^\d+$/.test(r)
            : !0;
      },
      {
        message:
          "Introduce un dato válido para el método de contacto seleccionado.",
        path: ["contactDetail"],
      },
    ),
  Jf = () => {
    const e = za({
        resolver: qa(Gf),
        defaultValues: {
          name: "",
          contactMethod: "email",
          contactDetail: "",
          message: "",
        },
      }),
      t = e.watch("contactMethod"),
      r = () => (t === "phone" ? "tel" : "text"),
      n = () =>
        t === "email"
          ? "Correo Electrónico"
          : t === "instagram"
            ? "Usuario de Instagram"
            : t === "phone"
              ? "Número de Teléfono"
              : "Detalle de Contacto",
      s = () =>
        t === "email"
          ? "tuemail@ejemplo.com"
          : t === "instagram"
            ? "@tuUsuarioDeInstagram"
            : t === "phone"
              ? "1234567890"
              : "Introduce tu contacto",
      o = async (i) =>
        (
          await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(i),
          })
        ).ok
          ? (e.reset(), _s("Mensaje enviado correctamente"))
          : _s.error("Error al enviar el mensaje, intenta de nuevo");
    return w.jsx(zl, {
      ...e,
      children: w.jsxs("form", {
        onSubmit: e.handleSubmit(o),
        className: "space-y-8",
        children: [
          w.jsx(Ir, {
            control: e.control,
            name: "name",
            render: ({ field: i }) =>
              w.jsxs(sr, {
                children: [
                  w.jsx(or, { children: "Nombre*" }),
                  w.jsx(ir, {
                    children: w.jsx(zn, { placeholder: "Tu nombre", ...i }),
                  }),
                  w.jsx(ar, {}),
                ],
              }),
          }),
          w.jsx(Ir, {
            control: e.control,
            name: "contactMethod",
            render: ({ field: i }) =>
              w.jsxs(sr, {
                children: [
                  w.jsx(or, { children: "Forma de Contacto*" }),
                  w.jsx(ir, {
                    children: w.jsxs(Wf, {
                      value: i.value,
                      onValueChange: i.onChange,
                      children: [
                        w.jsx(ma, {
                          children: w.jsx(Uf, {
                            placeholder: "Selecciona una opción",
                          }),
                        }),
                        w.jsxs(ya, {
                          children: [
                            w.jsx(zr, { value: "email", children: "Email" }),
                            w.jsx(zr, {
                              value: "instagram",
                              children: "Instagram",
                            }),
                            w.jsx(zr, { value: "phone", children: "Teléfono" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  w.jsx(Bn, {
                    children: "Elige cómo prefieres que te contacten.",
                  }),
                  w.jsx(ar, {}),
                ],
              }),
          }),
          w.jsx(Ir, {
            control: e.control,
            name: "contactDetail",
            render: ({ field: i }) =>
              w.jsxs(sr, {
                children: [
                  w.jsxs(or, { children: [n(), "*"] }),
                  w.jsx(ir, {
                    children: w.jsx(zn, {
                      type: r(),
                      placeholder: s(),
                      ...i,
                      onKeyPress: (a) => {
                        t === "phone" &&
                          !/\d/.test(a.key) &&
                          a.preventDefault();
                      },
                    }),
                  }),
                  w.jsx(ar, {}),
                ],
              }),
          }),
          w.jsx(Ir, {
            control: e.control,
            name: "message",
            render: ({ field: i }) =>
              w.jsxs(sr, {
                children: [
                  w.jsx(or, { children: "Mensaje*" }),
                  w.jsx(ir, {
                    children: w.jsx(ba, {
                      placeholder: "Escribe tu mensaje aquí...",
                      ...i,
                      className: "min-h-[140px]",
                    }),
                  }),
                  w.jsx(Bn, { children: "Describe tu consulta o mensaje." }),
                  w.jsx(ar, {}),
                ],
              }),
          }),
          w.jsx(Uo, { type: "submit", children: "Enviar" }),
        ],
      }),
    });
  };
export { Jf as ContactForm };
