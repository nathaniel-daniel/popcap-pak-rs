var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
(async () => {
  var _a, _e2, _t2, _r2, _n2, _o, _s, _i2, _J_instances, f_fn, l_fn, a_fn, u_fn, c_fn, _e3, _t3, _r3, _n3, _o2, _s2, _i3, _f, _l, _a2, _u, _c, __, _h, _d, _y, _Hr_instances, b_fn, m_fn, g_fn, v_fn, p_fn, w_fn, _e4, _t4, _r4, _n4, _o3, _s3, _i4;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
      for (const i of s) if (i.type === "childList") for (const f of i.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(s) {
      const i = {};
      return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(s) {
      if (s.ep) return;
      s.ep = true;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  const ur = "5";
  typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(ur);
  let Je = false, cr = false;
  function _r() {
    Je = true;
  }
  _r();
  const dr = 1, hr = 2, vr = 16, pr = 2, gr = 4, wr = 8, yr = 2, M = /* @__PURE__ */ Symbol(), br = "http://www.w3.org/1999/xhtml", kt = false;
  var pt = Array.isArray, mr = Array.prototype.indexOf, gt = Array.from, Er = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, on = Object.getOwnPropertyDescriptors, xr = Object.prototype, kr = Array.prototype, Ct = Object.getPrototypeOf, Yt = Object.isExtensible;
  function Sr(e) {
    return e();
  }
  function St(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  function an() {
    var e, t, n = new Promise((r, s) => {
      e = r, t = s;
    });
    return {
      promise: n,
      resolve: e,
      reject: t
    };
  }
  function un(e, t) {
    if (Array.isArray(e)) return e;
    if (!(Symbol.iterator in e)) return Array.from(e);
    const n = [];
    for (const r of e) if (n.push(r), n.length === t) break;
    return n;
  }
  const P = 2, cn = 4, wt = 8, Ar = 1 << 24, le = 16, oe = 32, ke = 64, yt = 128, G = 512, N = 1024, W = 2048, te = 4096, V = 8192, ie = 16384, Mt = 32768, Be = 65536, Ht = 1 << 17, _n = 1 << 18, Ve = 1 << 19, dn = 1 << 20, he = 1 << 25, me = 32768, At = 1 << 21, Nt = 1 << 22, ve = 1 << 23, Ue = /* @__PURE__ */ Symbol("$state"), Tr = /* @__PURE__ */ Symbol("legacy props"), Or = /* @__PURE__ */ Symbol(""), Pe = new class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Fr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Pr() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function Rr(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Dr() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Cr(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Mr() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Nr() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Lr() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Ir() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function Ur() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  function Br() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function hn(e) {
    return e === this.v;
  }
  function jr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function vn(e) {
    return !jr(e, this.v);
  }
  let T = null;
  function je(e) {
    T = e;
  }
  function Lt(e, t = false, n) {
    T = {
      p: T,
      i: false,
      c: null,
      e: null,
      s: e,
      x: null,
      l: Je && !t ? {
        s: null,
        u: null,
        $: []
      } : null
    };
  }
  function It(e) {
    var t = T, n = t.e;
    if (n !== null) {
      t.e = null;
      for (var r of n) Pn(r);
    }
    return t.i = true, T = t.p, {};
  }
  function et() {
    return !Je || T !== null && T.l === null;
  }
  let Re = [];
  function Wr() {
    var e = Re;
    Re = [], St(e);
  }
  function bt(e) {
    if (Re.length === 0) {
      var t = Re;
      queueMicrotask(() => {
        t === Re && Wr();
      });
    }
    Re.push(e);
  }
  function pn(e) {
    var t = w;
    if (t === null) return g.f |= ve, e;
    if ((t.f & Mt) === 0) {
      if ((t.f & yt) === 0) throw e;
      t.b.error(e);
    } else We(e, t);
  }
  function We(e, t) {
    for (; t !== null; ) {
      if ((t.f & yt) !== 0) try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
      t = t.parent;
    }
    throw e;
  }
  const st = /* @__PURE__ */ new Set();
  let S = null, K = null, X = [], Ut = null, Tt = false;
  const _J = class _J {
    constructor() {
      __privateAdd(this, _J_instances);
      __publicField(this, "committed", false);
      __publicField(this, "current", /* @__PURE__ */ new Map());
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      __privateAdd(this, _e2, /* @__PURE__ */ new Set());
      __privateAdd(this, _t2, /* @__PURE__ */ new Set());
      __privateAdd(this, _r2, 0);
      __privateAdd(this, _n2, 0);
      __privateAdd(this, _o, null);
      __privateAdd(this, _s, /* @__PURE__ */ new Set());
      __privateAdd(this, _i2, /* @__PURE__ */ new Set());
      __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
      __publicField(this, "is_fork", false);
    }
    is_deferred() {
      return this.is_fork || __privateGet(this, _n2) > 0;
    }
    process(t) {
      var _a3;
      X = [], this.apply();
      var n = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const r of t) __privateMethod(this, _J_instances, f_fn).call(this, r, n);
      this.is_fork || __privateMethod(this, _J_instances, u_fn).call(this), this.is_deferred() ? (__privateMethod(this, _J_instances, l_fn).call(this, n.effects), __privateMethod(this, _J_instances, l_fn).call(this, n.render_effects)) : (S = null, Kt(n.render_effects), Kt(n.effects), (_a3 = __privateGet(this, _o)) == null ? void 0 : _a3.resolve()), K = null;
    }
    capture(t, n) {
      this.previous.has(t) || this.previous.set(t, n), (t.f & ve) === 0 && (this.current.set(t, t.v), K == null ? void 0 : K.set(t, t.v));
    }
    activate() {
      S = this, this.apply();
    }
    deactivate() {
      S === this && (S = null, K = null);
    }
    flush() {
      if (this.activate(), X.length > 0) {
        if (qr(), S !== null && S !== this) return;
      } else __privateGet(this, _r2) === 0 && this.process([]);
      this.deactivate();
    }
    discard() {
      for (const t of __privateGet(this, _t2)) t(this);
      __privateGet(this, _t2).clear();
    }
    increment(t) {
      __privateSet(this, _r2, __privateGet(this, _r2) + 1), t && __privateSet(this, _n2, __privateGet(this, _n2) + 1);
    }
    decrement(t) {
      __privateSet(this, _r2, __privateGet(this, _r2) - 1), t && __privateSet(this, _n2, __privateGet(this, _n2) - 1), this.revive();
    }
    revive() {
      for (const t of __privateGet(this, _s)) __privateGet(this, _i2).delete(t), L(t, W), Ee(t);
      for (const t of __privateGet(this, _i2)) L(t, te), Ee(t);
      this.flush();
    }
    oncommit(t) {
      __privateGet(this, _e2).add(t);
    }
    ondiscard(t) {
      __privateGet(this, _t2).add(t);
    }
    settled() {
      return (__privateGet(this, _o) ?? __privateSet(this, _o, an())).promise;
    }
    static ensure() {
      if (S === null) {
        const t = S = new _J();
        st.add(S), _J.enqueue(() => {
          S === t && t.flush();
        });
      }
      return S;
    }
    static enqueue(t) {
      bt(t);
    }
    apply() {
    }
  };
  _e2 = new WeakMap();
  _t2 = new WeakMap();
  _r2 = new WeakMap();
  _n2 = new WeakMap();
  _o = new WeakMap();
  _s = new WeakMap();
  _i2 = new WeakMap();
  _J_instances = new WeakSet();
  f_fn = function(t, n) {
    var _a3;
    t.f ^= N;
    for (var r = t.first; r !== null; ) {
      var s = r.f, i = (s & (oe | ke)) !== 0, f = i && (s & N) !== 0, l = f || (s & V) !== 0 || this.skipped_effects.has(r);
      if ((r.f & yt) !== 0 && ((_a3 = r.b) == null ? void 0 : _a3.is_pending()) && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !l && r.fn !== null) {
        i ? r.f ^= N : (s & cn) !== 0 ? n.effects.push(r) : nt(r) && ((r.f & le) !== 0 && __privateGet(this, _s).add(r), Ze(r));
        var a = r.first;
        if (a !== null) {
          r = a;
          continue;
        }
      }
      var o = r.parent;
      for (r = r.next; r === null && o !== null; ) o === n.effect && (__privateMethod(this, _J_instances, l_fn).call(this, n.effects), __privateMethod(this, _J_instances, l_fn).call(this, n.render_effects), n = n.parent), r = o.next, o = o.parent;
    }
  };
  l_fn = function(t) {
    for (const n of t) (n.f & W) !== 0 ? __privateGet(this, _s).add(n) : (n.f & te) !== 0 && __privateGet(this, _i2).add(n), __privateMethod(this, _J_instances, a_fn).call(this, n.deps), L(n, N);
  };
  a_fn = function(t) {
    if (t !== null) for (const n of t) (n.f & P) === 0 || (n.f & me) === 0 || (n.f ^= me, __privateMethod(this, _J_instances, a_fn).call(this, n.deps));
  };
  u_fn = function() {
    if (__privateGet(this, _n2) === 0) {
      for (const t of __privateGet(this, _e2)) t();
      __privateGet(this, _e2).clear();
    }
    __privateGet(this, _r2) === 0 && __privateMethod(this, _J_instances, c_fn).call(this);
  };
  c_fn = function() {
    var _a3;
    if (st.size > 1) {
      this.previous.clear();
      var t = K, n = true, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of st) {
        if (i === this) {
          n = false;
          continue;
        }
        const f = [];
        for (const [a, o] of this.current) {
          if (i.current.has(a)) if (n && o !== i.current.get(a)) i.current.set(a, o);
          else continue;
          f.push(a);
        }
        if (f.length === 0) continue;
        const l = [
          ...i.current.keys()
        ].filter((a) => !this.current.has(a));
        if (l.length > 0) {
          var s = X;
          X = [];
          const a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (const c of f) gn(c, l, a, o);
          if (X.length > 0) {
            S = i, i.apply();
            for (const c of X) __privateMethod(_a3 = i, _J_instances, f_fn).call(_a3, c, r);
            i.deactivate();
          }
          X = s;
        }
      }
      S = null, K = t;
    }
    this.committed = true, st.delete(this);
  };
  let J = _J;
  function qr() {
    var e = ye;
    Tt = true;
    var t = null;
    try {
      var n = 0;
      for (ht(true); X.length > 0; ) {
        var r = J.ensure();
        if (n++ > 1e3) {
          var s, i;
          zr();
        }
        r.process(X), pe.clear();
      }
    } finally {
      Tt = false, ht(e), Ut = null;
    }
  }
  function zr() {
    try {
      Mr();
    } catch (e) {
      We(e, Ut);
    }
  }
  let re = null;
  function Kt(e) {
    var t = e.length;
    if (t !== 0) {
      for (var n = 0; n < t; ) {
        var r = e[n++];
        if ((r.f & (ie | V)) === 0 && nt(r) && (re = /* @__PURE__ */ new Set(), Ze(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Cn(r) : r.fn = null), (re == null ? void 0 : re.size) > 0)) {
          pe.clear();
          for (const s of re) {
            if ((s.f & (ie | V)) !== 0) continue;
            const i = [
              s
            ];
            let f = s.parent;
            for (; f !== null; ) re.has(f) && (re.delete(f), i.push(f)), f = f.parent;
            for (let l = i.length - 1; l >= 0; l--) {
              const a = i[l];
              (a.f & (ie | V)) === 0 && Ze(a);
            }
          }
          re.clear();
        }
      }
      re = null;
    }
  }
  function gn(e, t, n, r) {
    if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
      const i = s.f;
      (i & P) !== 0 ? gn(s, t, n, r) : (i & (Nt | le)) !== 0 && (i & W) === 0 && wn(s, t, r) && (L(s, W), Ee(s));
    }
  }
  function wn(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null) for (const s of e.deps) {
      if (t.includes(s)) return true;
      if ((s.f & P) !== 0 && wn(s, t, n)) return n.set(s, true), true;
    }
    return n.set(e, false), false;
  }
  function Ee(e) {
    for (var t = Ut = e; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (Tt && t === w && (n & le) !== 0 && (n & _n) === 0) return;
      if ((n & (ke | oe)) !== 0) {
        if ((n & N) === 0) return;
        t.f ^= N;
      }
    }
    X.push(t);
  }
  function Vr(e) {
    let t = 0, n = xe(0), r;
    return () => {
      Qe() && (p(n), si(() => (t === 0 && (r = ge(() => e(() => Ke(n)))), t += 1, () => {
        bt(() => {
          t -= 1, t === 0 && (r == null ? void 0 : r(), r = void 0, Ke(n));
        });
      })));
    };
  }
  var $r = Be | Ve | yt;
  function Yr(e, t, n) {
    new Hr(e, t, n);
  }
  class Hr {
    constructor(t, n, r) {
      __privateAdd(this, _Hr_instances);
      __publicField(this, "parent");
      __privateAdd(this, _e3, false);
      __privateAdd(this, _t3);
      __privateAdd(this, _r3, null);
      __privateAdd(this, _n3);
      __privateAdd(this, _o2);
      __privateAdd(this, _s2);
      __privateAdd(this, _i3, null);
      __privateAdd(this, _f, null);
      __privateAdd(this, _l, null);
      __privateAdd(this, _a2, null);
      __privateAdd(this, _u, null);
      __privateAdd(this, _c, 0);
      __privateAdd(this, __, 0);
      __privateAdd(this, _h, false);
      __privateAdd(this, _d, null);
      __privateAdd(this, _y, Vr(() => (__privateSet(this, _d, xe(__privateGet(this, _c))), () => {
        __privateSet(this, _d, null);
      })));
      __privateSet(this, _t3, t), __privateSet(this, _n3, n), __privateSet(this, _o2, r), this.parent = w.b, __privateSet(this, _e3, !!__privateGet(this, _n3).pending), __privateSet(this, _s2, zt(() => {
        w.b = this;
        {
          var s = __privateMethod(this, _Hr_instances, g_fn).call(this);
          try {
            __privateSet(this, _i3, H(() => r(s)));
          } catch (i) {
            this.error(i);
          }
          __privateGet(this, __) > 0 ? __privateMethod(this, _Hr_instances, p_fn).call(this) : __privateSet(this, _e3, false);
        }
        return () => {
          var _a3;
          (_a3 = __privateGet(this, _u)) == null ? void 0 : _a3.remove();
        };
      }, $r));
    }
    is_pending() {
      return __privateGet(this, _e3) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!__privateGet(this, _n3).pending;
    }
    update_pending_count(t) {
      __privateMethod(this, _Hr_instances, w_fn).call(this, t), __privateSet(this, _c, __privateGet(this, _c) + t), __privateGet(this, _d) && qe(__privateGet(this, _d), __privateGet(this, _c));
    }
    get_effect_pending() {
      return __privateGet(this, _y).call(this), p(__privateGet(this, _d));
    }
    error(t) {
      var n = __privateGet(this, _n3).onerror;
      let r = __privateGet(this, _n3).failed;
      if (__privateGet(this, _h) || !n && !r) throw t;
      __privateGet(this, _i3) && (j(__privateGet(this, _i3)), __privateSet(this, _i3, null)), __privateGet(this, _f) && (j(__privateGet(this, _f)), __privateSet(this, _f, null)), __privateGet(this, _l) && (j(__privateGet(this, _l)), __privateSet(this, _l, null));
      var s = false, i = false;
      const f = () => {
        if (s) {
          Br();
          return;
        }
        s = true, i && Ur(), J.ensure(), __privateSet(this, _c, 0), __privateGet(this, _l) !== null && we(__privateGet(this, _l), () => {
          __privateSet(this, _l, null);
        }), __privateSet(this, _e3, this.has_pending_snippet()), __privateSet(this, _i3, __privateMethod(this, _Hr_instances, v_fn).call(this, () => (__privateSet(this, _h, false), H(() => __privateGet(this, _o2).call(this, __privateGet(this, _t3)))))), __privateGet(this, __) > 0 ? __privateMethod(this, _Hr_instances, p_fn).call(this) : __privateSet(this, _e3, false);
      };
      var l = g;
      try {
        B(null), i = true, n == null ? void 0 : n(t, f), i = false;
      } catch (a) {
        We(a, __privateGet(this, _s2) && __privateGet(this, _s2).parent);
      } finally {
        B(l);
      }
      r && bt(() => {
        __privateSet(this, _l, __privateMethod(this, _Hr_instances, v_fn).call(this, () => {
          J.ensure(), __privateSet(this, _h, true);
          try {
            return H(() => {
              r(__privateGet(this, _t3), () => t, () => f);
            });
          } catch (a) {
            return We(a, __privateGet(this, _s2).parent), null;
          } finally {
            __privateSet(this, _h, false);
          }
        }));
      });
    }
  }
  _e3 = new WeakMap();
  _t3 = new WeakMap();
  _r3 = new WeakMap();
  _n3 = new WeakMap();
  _o2 = new WeakMap();
  _s2 = new WeakMap();
  _i3 = new WeakMap();
  _f = new WeakMap();
  _l = new WeakMap();
  _a2 = new WeakMap();
  _u = new WeakMap();
  _c = new WeakMap();
  __ = new WeakMap();
  _h = new WeakMap();
  _d = new WeakMap();
  _y = new WeakMap();
  _Hr_instances = new WeakSet();
  b_fn = function() {
    try {
      __privateSet(this, _i3, H(() => __privateGet(this, _o2).call(this, __privateGet(this, _t3))));
    } catch (t) {
      this.error(t);
    }
    __privateSet(this, _e3, false);
  };
  m_fn = function() {
    const t = __privateGet(this, _n3).pending;
    t && (__privateSet(this, _f, H(() => t(__privateGet(this, _t3)))), J.enqueue(() => {
      var n = __privateMethod(this, _Hr_instances, g_fn).call(this);
      __privateSet(this, _i3, __privateMethod(this, _Hr_instances, v_fn).call(this, () => (J.ensure(), H(() => __privateGet(this, _o2).call(this, n))))), __privateGet(this, __) > 0 ? __privateMethod(this, _Hr_instances, p_fn).call(this) : (we(__privateGet(this, _f), () => {
        __privateSet(this, _f, null);
      }), __privateSet(this, _e3, false));
    }));
  };
  g_fn = function() {
    var t = __privateGet(this, _t3);
    return __privateGet(this, _e3) && (__privateSet(this, _u, se()), __privateGet(this, _t3).before(__privateGet(this, _u)), t = __privateGet(this, _u)), t;
  };
  v_fn = function(t) {
    var n = w, r = g, s = T;
    ne(__privateGet(this, _s2)), B(__privateGet(this, _s2)), je(__privateGet(this, _s2).ctx);
    try {
      return t();
    } catch (i) {
      return pn(i), null;
    } finally {
      ne(n), B(r), je(s);
    }
  };
  p_fn = function() {
    const t = __privateGet(this, _n3).pending;
    __privateGet(this, _i3) !== null && (__privateSet(this, _a2, document.createDocumentFragment()), __privateGet(this, _a2).append(__privateGet(this, _u)), Ln(__privateGet(this, _i3), __privateGet(this, _a2))), __privateGet(this, _f) === null && __privateSet(this, _f, H(() => t(__privateGet(this, _t3))));
  };
  w_fn = function(t) {
    var _a3;
    if (!this.has_pending_snippet()) {
      this.parent && __privateMethod(_a3 = this.parent, _Hr_instances, w_fn).call(_a3, t);
      return;
    }
    __privateSet(this, __, __privateGet(this, __) + t), __privateGet(this, __) === 0 && (__privateSet(this, _e3, false), __privateGet(this, _f) && we(__privateGet(this, _f), () => {
      __privateSet(this, _f, null);
    }), __privateGet(this, _a2) && (__privateGet(this, _t3).before(__privateGet(this, _a2)), __privateSet(this, _a2, null)));
  };
  function Kr(e, t, n, r) {
    const s = et() ? mt : Bt;
    if (n.length === 0 && e.length === 0) {
      r(t.map(s));
      return;
    }
    var i = S, f = w, l = Gr();
    function a() {
      Promise.all(n.map((o) => Qr(o))).then((o) => {
        l();
        try {
          r([
            ...t.map(s),
            ...o
          ]);
        } catch (c) {
          (f.f & ie) === 0 && We(c, f);
        }
        i == null ? void 0 : i.deactivate(), dt();
      }).catch((o) => {
        We(o, f);
      });
    }
    e.length > 0 ? Promise.all(e).then(() => {
      l();
      try {
        return a();
      } finally {
        i == null ? void 0 : i.deactivate(), dt();
      }
    }) : a();
  }
  function Gr() {
    var e = w, t = g, n = T, r = S;
    return function(i = true) {
      ne(e), B(t), je(n), i && (r == null ? void 0 : r.activate());
    };
  }
  function dt() {
    ne(null), B(null), je(null);
  }
  function mt(e) {
    var t = P | W, n = g !== null && (g.f & P) !== 0 ? g : null;
    return w !== null && (w.f |= Ve), {
      ctx: T,
      deps: null,
      effects: null,
      equals: hn,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: M,
      wv: 0,
      parent: n ?? w,
      ac: null
    };
  }
  function Qr(e, t) {
    let n = w;
    n === null && Pr();
    var r = n.b, s = void 0, i = xe(M), f = !g, l = /* @__PURE__ */ new Map();
    return ii(() => {
      var _a3;
      var a = an();
      s = a.promise;
      try {
        Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
          o === S && o.committed && o.deactivate(), dt();
        });
      } catch (u) {
        a.reject(u), dt();
      }
      var o = S;
      if (f) {
        var c = !r.is_pending();
        r.update_pending_count(1), o.increment(c), (_a3 = l.get(o)) == null ? void 0 : _a3.reject(Pe), l.delete(o), l.set(o, a);
      }
      const d = (u, h = void 0) => {
        if (o.activate(), h) h !== Pe && (i.f |= ve, qe(i, h));
        else {
          (i.f & ve) !== 0 && (i.f ^= ve), qe(i, u);
          for (const [_, b] of l) {
            if (l.delete(_), _ === o) break;
            b.reject(Pe);
          }
        }
        f && (r.update_pending_count(-1), o.decrement(c));
      };
      a.promise.then(d, (u) => d(null, u || "unknown"));
    }), Fn(() => {
      for (const a of l.values()) a.reject(Pe);
    }), new Promise((a) => {
      function o(c) {
        function d() {
          c === s ? a(i) : o(s);
        }
        c.then(d, d);
      }
      o(s);
    });
  }
  function yn(e) {
    const t = mt(e);
    return In(t), t;
  }
  function Bt(e) {
    const t = mt(e);
    return t.equals = vn, t;
  }
  function bn(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) j(t[n]);
    }
  }
  function Xr(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & P) === 0) return (t.f & ie) === 0 ? t : null;
      t = t.parent;
    }
    return null;
  }
  function jt(e) {
    var t, n = w;
    ne(Xr(e));
    try {
      e.f &= ~me, bn(e), t = Wn(e);
    } finally {
      ne(n);
    }
    return t;
  }
  function mn(e) {
    var t = jt(e);
    if (e.equals(t) || ((S == null ? void 0 : S.is_fork) || (e.v = t), e.wv = Bn()), !Se) if (K !== null) (Qe() || (S == null ? void 0 : S.is_fork)) && K.set(e, t);
    else {
      var n = (e.f & G) === 0 ? te : N;
      L(e, n);
    }
  }
  let Ot = /* @__PURE__ */ new Set();
  const pe = /* @__PURE__ */ new Map();
  let En = false;
  function xe(e, t) {
    var n = {
      f: 0,
      v: e,
      reactions: null,
      equals: hn,
      rv: 0,
      wv: 0
    };
    return n;
  }
  function _e(e, t) {
    const n = xe(e);
    return In(n), n;
  }
  function De(e, t = false, n = true) {
    var _a3;
    const r = xe(e);
    return t || (r.equals = vn), Je && n && T !== null && T.l !== null && ((_a3 = T.l).s ?? (_a3.s = [])).push(r), r;
  }
  function F(e, t, n = false) {
    g !== null && (!ee || (g.f & Ht) !== 0) && et() && (g.f & (P | le | Nt | Ht)) !== 0 && !(fe == null ? void 0 : fe.includes(e)) && Ir();
    let r = n ? Ce(t) : t;
    return qe(e, r);
  }
  function qe(e, t) {
    if (!e.equals(t)) {
      var n = e.v;
      Se ? pe.set(e, t) : pe.set(e, n), e.v = t;
      var r = J.ensure();
      r.capture(e, n), (e.f & P) !== 0 && ((e.f & W) !== 0 && jt(e), L(e, (e.f & G) !== 0 ? N : te)), e.wv = Bn(), xn(e, W), et() && w !== null && (w.f & N) !== 0 && (w.f & (oe | ke)) === 0 && (Y === null ? oi([
        e
      ]) : Y.push(e)), !r.is_fork && Ot.size > 0 && !En && Zr();
    }
    return t;
  }
  function Zr() {
    En = false;
    var e = ye;
    ht(true);
    const t = Array.from(Ot);
    try {
      for (const n of t) (n.f & N) !== 0 && L(n, te), nt(n) && Ze(n);
    } finally {
      ht(e);
    }
    Ot.clear();
  }
  function Ke(e) {
    F(e, e.v + 1);
  }
  function xn(e, t) {
    var n = e.reactions;
    if (n !== null) for (var r = et(), s = n.length, i = 0; i < s; i++) {
      var f = n[i], l = f.f;
      if (!(!r && f === w)) {
        var a = (l & W) === 0;
        if (a && L(f, t), (l & P) !== 0) {
          var o = f;
          K == null ? void 0 : K.delete(o), (l & me) === 0 && (l & G && (f.f |= me), xn(o, te));
        } else a && ((l & le) !== 0 && re !== null && re.add(f), Ee(f));
      }
    }
  }
  function Ce(e) {
    if (typeof e != "object" || e === null || Ue in e) return e;
    const t = Ct(e);
    if (t !== xr && t !== kr) return e;
    var n = /* @__PURE__ */ new Map(), r = pt(e), s = _e(0), i = be, f = (l) => {
      if (be === i) return l();
      var a = g, o = be;
      B(null), Zt(i);
      var c = l();
      return B(a), Zt(o), c;
    };
    return r && n.set("length", _e(e.length)), new Proxy(e, {
      defineProperty(l, a, o) {
        (!("value" in o) || o.configurable === false || o.enumerable === false || o.writable === false) && Nr();
        var c = n.get(a);
        return c === void 0 ? c = f(() => {
          var d = _e(o.value);
          return n.set(a, d), d;
        }) : F(c, o.value, true), true;
      },
      deleteProperty(l, a) {
        var o = n.get(a);
        if (o === void 0) {
          if (a in l) {
            const c = f(() => _e(M));
            n.set(a, c), Ke(s);
          }
        } else F(o, M), Ke(s);
        return true;
      },
      get(l, a, o) {
        var _a3;
        if (a === Ue) return e;
        var c = n.get(a), d = a in l;
        if (c === void 0 && (!d || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable)) && (c = f(() => {
          var h = Ce(d ? l[a] : M), _ = _e(h);
          return _;
        }), n.set(a, c)), c !== void 0) {
          var u = p(c);
          return u === M ? void 0 : u;
        }
        return Reflect.get(l, a, o);
      },
      getOwnPropertyDescriptor(l, a) {
        var o = Reflect.getOwnPropertyDescriptor(l, a);
        if (o && "value" in o) {
          var c = n.get(a);
          c && (o.value = p(c));
        } else if (o === void 0) {
          var d = n.get(a), u = d == null ? void 0 : d.v;
          if (d !== void 0 && u !== M) return {
            enumerable: true,
            configurable: true,
            value: u,
            writable: true
          };
        }
        return o;
      },
      has(l, a) {
        var _a3;
        if (a === Ue) return true;
        var o = n.get(a), c = o !== void 0 && o.v !== M || Reflect.has(l, a);
        if (o !== void 0 || w !== null && (!c || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable))) {
          o === void 0 && (o = f(() => {
            var u = c ? Ce(l[a]) : M, h = _e(u);
            return h;
          }), n.set(a, o));
          var d = p(o);
          if (d === M) return false;
        }
        return c;
      },
      set(l, a, o, c) {
        var _a3;
        var d = n.get(a), u = a in l;
        if (r && a === "length") for (var h = o; h < d.v; h += 1) {
          var _ = n.get(h + "");
          _ !== void 0 ? F(_, M) : h in l && (_ = f(() => _e(M)), n.set(h + "", _));
        }
        if (d === void 0) (!u || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable)) && (d = f(() => _e(void 0)), F(d, Ce(o)), n.set(a, d));
        else {
          u = d.v !== M;
          var b = f(() => Ce(o));
          F(d, b);
        }
        var y = Reflect.getOwnPropertyDescriptor(l, a);
        if ((y == null ? void 0 : y.set) && y.set.call(c, o), !u) {
          if (r && typeof a == "string") {
            var D = n.get("length"), v = Number(a);
            Number.isInteger(v) && v >= D.v && F(D, v + 1);
          }
          Ke(s);
        }
        return true;
      },
      ownKeys(l) {
        p(s);
        var a = Reflect.ownKeys(l).filter((d) => {
          var u = n.get(d);
          return u === void 0 || u.v !== M;
        });
        for (var [o, c] of n) c.v !== M && !(o in l) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        Lr();
      }
    });
  }
  var Gt, kn, Sn, An;
  function Jr() {
    if (Gt === void 0) {
      Gt = window, kn = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, n = Text.prototype;
      Sn = Ie(t, "firstChild").get, An = Ie(t, "nextSibling").get, Yt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Yt(n) && (n.__t = void 0);
    }
  }
  function se(e = "") {
    return document.createTextNode(e);
  }
  function Wt(e) {
    return Sn.call(e);
  }
  function tt(e) {
    return An.call(e);
  }
  function Z(e, t) {
    return Wt(e);
  }
  function ot(e, t = false) {
    {
      var n = Wt(e);
      return n instanceof Comment && n.data === "" ? tt(n) : n;
    }
  }
  function Me(e, t = 1, n = false) {
    let r = e;
    for (; t--; ) r = tt(r);
    return r;
  }
  function ei(e) {
    e.textContent = "";
  }
  function Tn() {
    return false;
  }
  function qt(e) {
    var t = g, n = w;
    B(null), ne(null);
    try {
      return e();
    } finally {
      B(t), ne(n);
    }
  }
  function On(e) {
    w === null && (g === null && Cr(), Dr()), Se && Rr();
  }
  function ti(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
  }
  function ae(e, t, n) {
    var r = w;
    r !== null && (r.f & V) !== 0 && (e |= V);
    var s = {
      ctx: T,
      deps: null,
      nodes: null,
      f: e | W | G,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: r,
      b: r && r.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    if (n) try {
      Ze(s), s.f |= Mt;
    } catch (l) {
      throw j(s), l;
    }
    else t !== null && Ee(s);
    var i = s;
    if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & Ve) === 0 && (i = i.first, (e & le) !== 0 && (e & Be) !== 0 && i !== null && (i.f |= Be)), i !== null && (i.parent = r, r !== null && ti(i, r), g !== null && (g.f & P) !== 0 && (e & ke) === 0)) {
      var f = g;
      (f.effects ?? (f.effects = [])).push(i);
    }
    return s;
  }
  function Qe() {
    return g !== null && !ee;
  }
  function Fn(e) {
    const t = ae(wt, null, false);
    return L(t, N), t.teardown = e, t;
  }
  function Qt(e) {
    On();
    var t = w.f, n = !g && (t & oe) !== 0 && (t & Mt) === 0;
    if (n) {
      var r = T;
      (r.e ?? (r.e = [])).push(e);
    } else return Pn(e);
  }
  function Pn(e) {
    return ae(cn | dn, e, false);
  }
  function ni(e) {
    return On(), ae(wt | dn, e, true);
  }
  function ri(e) {
    J.ensure();
    const t = ae(ke | Ve, e, true);
    return (n = {}) => new Promise((r) => {
      n.outro ? we(t, () => {
        j(t), r(void 0);
      }) : (j(t), r(void 0));
    });
  }
  function ii(e) {
    return ae(Nt | Ve, e, true);
  }
  function si(e, t = 0) {
    return ae(wt | t, e, true);
  }
  function Ge(e, t = [], n = [], r = []) {
    Kr(r, t, n, (s) => {
      ae(wt, () => e(...s.map(p)), true);
    });
  }
  function zt(e, t = 0) {
    var n = ae(le | t, e, true);
    return n;
  }
  function H(e) {
    return ae(oe | Ve, e, true);
  }
  function Rn(e) {
    var t = e.teardown;
    if (t !== null) {
      const n = Se, r = g;
      Xt(true), B(null);
      try {
        t.call(null);
      } finally {
        Xt(n), B(r);
      }
    }
  }
  function Dn(e, t = false) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
      const s = n.ac;
      s !== null && qt(() => {
        s.abort(Pe);
      });
      var r = n.next;
      (n.f & ke) !== 0 ? n.parent = null : j(n, t), n = r;
    }
  }
  function fi(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next;
      (t.f & oe) === 0 && j(t), t = n;
    }
  }
  function j(e, t = true) {
    var n = false;
    (t || (e.f & _n) !== 0) && e.nodes !== null && e.nodes.end !== null && (li(e.nodes.start, e.nodes.end), n = true), Dn(e, t && !n), vt(e, 0), L(e, ie);
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const i of r) i.stop();
    Rn(e);
    var s = e.parent;
    s !== null && s.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
  }
  function li(e, t) {
    for (; e !== null; ) {
      var n = e === t ? null : tt(e);
      e.remove(), e = n;
    }
  }
  function Cn(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
  }
  function we(e, t, n = true) {
    var r = [];
    Mn(e, r, true);
    var s = () => {
      n && j(e), t && t();
    }, i = r.length;
    if (i > 0) {
      var f = () => --i || s();
      for (var l of r) l.out(f);
    } else s();
  }
  function Mn(e, t, n) {
    if ((e.f & V) === 0) {
      e.f ^= V;
      var r = e.nodes && e.nodes.t;
      if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
      for (var s = e.first; s !== null; ) {
        var i = s.next, f = (s.f & Be) !== 0 || (s.f & oe) !== 0 && (e.f & le) !== 0;
        Mn(s, t, f ? n : false), s = i;
      }
    }
  }
  function Vt(e) {
    Nn(e, true);
  }
  function Nn(e, t) {
    if ((e.f & V) !== 0) {
      e.f ^= V, (e.f & N) === 0 && (L(e, W), Ee(e));
      for (var n = e.first; n !== null; ) {
        var r = n.next, s = (n.f & Be) !== 0 || (n.f & oe) !== 0;
        Nn(n, s ? t : false), n = r;
      }
      var i = e.nodes && e.nodes.t;
      if (i !== null) for (const f of i) (f.is_global || t) && f.in();
    }
  }
  function Ln(e, t) {
    if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : tt(n);
      t.append(n), n = s;
    }
  }
  let ye = false;
  function ht(e) {
    ye = e;
  }
  let Se = false;
  function Xt(e) {
    Se = e;
  }
  let g = null, ee = false;
  function B(e) {
    g = e;
  }
  let w = null;
  function ne(e) {
    w = e;
  }
  let fe = null;
  function In(e) {
    g !== null && (fe === null ? fe = [
      e
    ] : fe.push(e));
  }
  let I = null, q = 0, Y = null;
  function oi(e) {
    Y = e;
  }
  let Un = 1, Xe = 0, be = Xe;
  function Zt(e) {
    be = e;
  }
  function Bn() {
    return ++Un;
  }
  function nt(e) {
    var t = e.f;
    if ((t & W) !== 0) return true;
    if (t & P && (e.f &= ~me), (t & te) !== 0) {
      var n = e.deps;
      if (n !== null) for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if (nt(i) && mn(i), i.wv > e.wv) return true;
      }
      (t & G) !== 0 && K === null && L(e, N);
    }
    return false;
  }
  function jn(e, t, n = true) {
    var r = e.reactions;
    if (r !== null && !(fe == null ? void 0 : fe.includes(e))) for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & P) !== 0 ? jn(i, t, false) : t === i && (n ? L(i, W) : (i.f & N) !== 0 && L(i, te), Ee(i));
    }
  }
  function Wn(e) {
    var _a3;
    var t = I, n = q, r = Y, s = g, i = fe, f = T, l = ee, a = be, o = e.f;
    I = null, q = 0, Y = null, g = (o & (oe | ke)) === 0 ? e : null, fe = null, je(e.ctx), ee = false, be = ++Xe, e.ac !== null && (qt(() => {
      e.ac.abort(Pe);
    }), e.ac = null);
    try {
      e.f |= At;
      var c = e.fn, d = c(), u = e.deps;
      if (I !== null) {
        var h;
        if (vt(e, q), u !== null && q > 0) for (u.length = q + I.length, h = 0; h < I.length; h++) u[q + h] = I[h];
        else e.deps = u = I;
        if (Qe() && (e.f & G) !== 0) for (h = q; h < u.length; h++) ((_a3 = u[h]).reactions ?? (_a3.reactions = [])).push(e);
      } else u !== null && q < u.length && (vt(e, q), u.length = q);
      if (et() && Y !== null && !ee && u !== null && (e.f & (P | te | W)) === 0) for (h = 0; h < Y.length; h++) jn(Y[h], e);
      return s !== null && s !== e && (Xe++, Y !== null && (r === null ? r = Y : r.push(...Y))), (e.f & ve) !== 0 && (e.f ^= ve), d;
    } catch (_) {
      return pn(_);
    } finally {
      e.f ^= At, I = t, q = n, Y = r, g = s, fe = i, je(f), ee = l, be = a;
    }
  }
  function ai(e, t) {
    let n = t.reactions;
    if (n !== null) {
      var r = mr.call(n, e);
      if (r !== -1) {
        var s = n.length - 1;
        s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
      }
    }
    n === null && (t.f & P) !== 0 && (I === null || !I.includes(t)) && (L(t, te), (t.f & G) !== 0 && (t.f ^= G, t.f &= ~me), bn(t), vt(t, 0));
  }
  function vt(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) ai(e, n[r]);
  }
  function Ze(e) {
    var t = e.f;
    if ((t & ie) === 0) {
      L(e, N);
      var n = w, r = ye;
      w = e, ye = true;
      try {
        (t & (le | Ar)) !== 0 ? fi(e) : Dn(e), Rn(e);
        var s = Wn(e);
        e.teardown = typeof s == "function" ? s : null, e.wv = Un;
        var i;
        kt && cr && (e.f & W) !== 0 && e.deps;
      } finally {
        ye = r, w = n;
      }
    }
  }
  function p(e) {
    var t = e.f, n = (t & P) !== 0;
    if (g !== null && !ee) {
      var r = w !== null && (w.f & ie) !== 0;
      if (!r && !(fe == null ? void 0 : fe.includes(e))) {
        var s = g.deps;
        if ((g.f & At) !== 0) e.rv < Xe && (e.rv = Xe, I === null && s !== null && s[q] === e ? q++ : I === null ? I = [
          e
        ] : I.includes(e) || I.push(e));
        else {
          (g.deps ?? (g.deps = [])).push(e);
          var i = e.reactions;
          i === null ? e.reactions = [
            g
          ] : i.includes(g) || i.push(g);
        }
      }
    }
    if (Se) {
      if (pe.has(e)) return pe.get(e);
      if (n) {
        var f = e, l = f.v;
        return ((f.f & N) === 0 && f.reactions !== null || zn(f)) && (l = jt(f)), pe.set(f, l), l;
      }
    } else n && (!(K == null ? void 0 : K.has(e)) || (S == null ? void 0 : S.is_fork) && !Qe()) && (f = e, nt(f) && mn(f), ye && Qe() && (f.f & G) === 0 && qn(f));
    if (K == null ? void 0 : K.has(e)) return K.get(e);
    if ((e.f & ve) !== 0) throw e.v;
    return e.v;
  }
  function qn(e) {
    if (e.deps !== null) {
      e.f ^= G;
      for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & P) !== 0 && (t.f & G) === 0 && qn(t);
    }
  }
  function zn(e) {
    if (e.v === M) return true;
    if (e.deps === null) return false;
    for (const t of e.deps) if (pe.has(t) || (t.f & P) !== 0 && zn(t)) return true;
    return false;
  }
  function ge(e) {
    var t = ee;
    try {
      return ee = true, e();
    } finally {
      ee = t;
    }
  }
  const ui = -7169;
  function L(e, t) {
    e.f = e.f & ui | t;
  }
  function Vn(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (Ue in e) Ft(e);
      else if (!Array.isArray(e)) for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ue in n && Ft(n);
      }
    }
  }
  function Ft(e, t = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime();
      for (let r in e) try {
        Ft(e[r], t);
      } catch {
      }
      const n = Ct(e);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = on(n);
        for (let s in r) {
          const i = r[s].get;
          if (i) try {
            i.call(e);
          } catch {
          }
        }
      }
    }
  }
  const ci = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
  function _i(e, t, n, r = {}) {
    function s(i) {
      if (r.capture || Ye.call(t, i), !i.cancelBubble) return qt(() => n == null ? void 0 : n.call(this, i));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? bt(() => {
      t.addEventListener(e, s, r);
    }) : t.addEventListener(e, s, r), s;
  }
  function $e(e, t, n, r, s) {
    var i = {
      capture: r,
      passive: s
    }, f = _i(e, t, n, i);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Fn(() => {
      t.removeEventListener(e, f, i);
    });
  }
  let en = null;
  function Ye(e) {
    var _a3;
    var t = this, n = t.ownerDocument, r = e.type, s = ((_a3 = e.composedPath) == null ? void 0 : _a3.call(e)) || [], i = s[0] || e.target;
    en = e;
    var f = 0, l = en === e && e.__root;
    if (l) {
      var a = s.indexOf(l);
      if (a !== -1 && (t === document || t === window)) {
        e.__root = t;
        return;
      }
      var o = s.indexOf(t);
      if (o === -1) return;
      a <= o && (f = a);
    }
    if (i = s[f] || e.target, i !== t) {
      Er(e, "currentTarget", {
        configurable: true,
        get() {
          return i || n;
        }
      });
      var c = g, d = w;
      B(null), ne(null);
      try {
        for (var u, h = []; i !== null; ) {
          var _ = i.assignedSlot || i.parentNode || i.host || null;
          try {
            var b = i["__" + r];
            b != null && (!i.disabled || e.target === i) && b.call(i, e);
          } catch (y) {
            u ? h.push(y) : u = y;
          }
          if (e.cancelBubble || _ === t || _ === null) break;
          i = _;
        }
        if (u) {
          for (let y of h) queueMicrotask(() => {
            throw y;
          });
          throw u;
        }
      } finally {
        e.__root = t, delete e.currentTarget, B(c), ne(d);
      }
    }
  }
  function di(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
  }
  function $t(e, t) {
    var n = w;
    n.nodes === null && (n.nodes = {
      start: e,
      end: t,
      a: null,
      t: null
    });
  }
  function Ae(e, t) {
    var n = (t & yr) !== 0, r, s = !e.startsWith("<!>");
    return () => {
      r === void 0 && (r = di(s ? e : "<!>" + e), r = Wt(r));
      var i = n || kn ? document.importNode(r, true) : r.cloneNode(true);
      return $t(i, i), i;
    };
  }
  function tn(e = "") {
    {
      var t = se(e + "");
      return $t(t, t), t;
    }
  }
  function at() {
    var e = document.createDocumentFragment(), t = document.createComment(""), n = se();
    return e.append(t, n), $t(t, n), e;
  }
  function z(e, t) {
    e !== null && e.before(t);
  }
  const hi = [
    "touchstart",
    "touchmove"
  ];
  function vi(e) {
    return hi.includes(e);
  }
  function Pt(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
  }
  function pi(e, t) {
    return gi(e, t);
  }
  const Oe = /* @__PURE__ */ new Map();
  function gi(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: f = true }) {
    Jr();
    var l = /* @__PURE__ */ new Set(), a = (d) => {
      for (var u = 0; u < d.length; u++) {
        var h = d[u];
        if (!l.has(h)) {
          l.add(h);
          var _ = vi(h);
          t.addEventListener(h, Ye, {
            passive: _
          });
          var b = Oe.get(h);
          b === void 0 ? (document.addEventListener(h, Ye, {
            passive: _
          }), Oe.set(h, 1)) : Oe.set(h, b + 1);
        }
      }
    };
    a(gt(ci)), Jt.add(a);
    var o = void 0, c = ri(() => {
      var d = n ?? t.appendChild(se());
      return Yr(d, {
        pending: () => {
        }
      }, (u) => {
        if (i) {
          Lt({});
          var h = T;
          h.c = i;
        }
        s && (r.$$events = s), o = e(u, r) || {}, i && It();
      }), () => {
        var _a3;
        for (var u of l) {
          t.removeEventListener(u, Ye);
          var h = Oe.get(u);
          --h === 0 ? (document.removeEventListener(u, Ye), Oe.delete(u)) : Oe.set(u, h);
        }
        Jt.delete(a), d !== n && ((_a3 = d.parentNode) == null ? void 0 : _a3.removeChild(d));
      };
    });
    return wi.set(o, c), o;
  }
  let wi = /* @__PURE__ */ new WeakMap();
  class yi {
    constructor(t, n = true) {
      __publicField(this, "anchor");
      __privateAdd(this, _e4, /* @__PURE__ */ new Map());
      __privateAdd(this, _t4, /* @__PURE__ */ new Map());
      __privateAdd(this, _r4, /* @__PURE__ */ new Map());
      __privateAdd(this, _n4, /* @__PURE__ */ new Set());
      __privateAdd(this, _o3, true);
      __privateAdd(this, _s3, () => {
        var t = S;
        if (__privateGet(this, _e4).has(t)) {
          var n = __privateGet(this, _e4).get(t), r = __privateGet(this, _t4).get(n);
          if (r) Vt(r), __privateGet(this, _n4).delete(n);
          else {
            var s = __privateGet(this, _r4).get(n);
            s && (__privateGet(this, _t4).set(n, s.effect), __privateGet(this, _r4).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
          }
          for (const [i, f] of __privateGet(this, _e4)) {
            if (__privateGet(this, _e4).delete(i), i === t) break;
            const l = __privateGet(this, _r4).get(f);
            l && (j(l.effect), __privateGet(this, _r4).delete(f));
          }
          for (const [i, f] of __privateGet(this, _t4)) {
            if (i === n || __privateGet(this, _n4).has(i)) continue;
            const l = () => {
              if (Array.from(__privateGet(this, _e4).values()).includes(i)) {
                var o = document.createDocumentFragment();
                Ln(f, o), o.append(se()), __privateGet(this, _r4).set(i, {
                  effect: f,
                  fragment: o
                });
              } else j(f);
              __privateGet(this, _n4).delete(i), __privateGet(this, _t4).delete(i);
            };
            __privateGet(this, _o3) || !r ? (__privateGet(this, _n4).add(i), we(f, l, false)) : l();
          }
        }
      });
      __privateAdd(this, _i4, (t) => {
        __privateGet(this, _e4).delete(t);
        const n = Array.from(__privateGet(this, _e4).values());
        for (const [r, s] of __privateGet(this, _r4)) n.includes(r) || (j(s.effect), __privateGet(this, _r4).delete(r));
      });
      this.anchor = t, __privateSet(this, _o3, n);
    }
    ensure(t, n) {
      var r = S, s = Tn();
      if (n && !__privateGet(this, _t4).has(t) && !__privateGet(this, _r4).has(t)) if (s) {
        var i = document.createDocumentFragment(), f = se();
        i.append(f), __privateGet(this, _r4).set(t, {
          effect: H(() => n(f)),
          fragment: i
        });
      } else __privateGet(this, _t4).set(t, H(() => n(this.anchor)));
      if (__privateGet(this, _e4).set(r, t), s) {
        for (const [l, a] of __privateGet(this, _t4)) l === t ? r.skipped_effects.delete(a) : r.skipped_effects.add(a);
        for (const [l, a] of __privateGet(this, _r4)) l === t ? r.skipped_effects.delete(a.effect) : r.skipped_effects.add(a.effect);
        r.oncommit(__privateGet(this, _s3)), r.ondiscard(__privateGet(this, _i4));
      } else __privateGet(this, _s3).call(this);
    }
  }
  _e4 = new WeakMap();
  _t4 = new WeakMap();
  _r4 = new WeakMap();
  _n4 = new WeakMap();
  _o3 = new WeakMap();
  _s3 = new WeakMap();
  _i4 = new WeakMap();
  function bi(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  function mi() {
    const e = T;
    return e === null && Fr(), (t, n, r) => {
      var _a3;
      const s = (_a3 = e.s.$$events) == null ? void 0 : _a3[t];
      if (s) {
        const i = pt(s) ? s.slice() : [
          s
        ], f = bi(t, n, r);
        for (const l of i) l.call(e.x, f);
        return !f.defaultPrevented;
      }
      return true;
    };
  }
  function Ne(e, t, n = false) {
    var r = new yi(e), s = n ? Be : 0;
    function i(f, l) {
      r.ensure(f, l);
    }
    zt(() => {
      var f = false;
      t((l, a = true) => {
        f = true, i(a, l);
      }), f || i(false, null);
    }, s);
  }
  function $n(e, t) {
    return t;
  }
  function Ei(e, t, n) {
    for (var r = [], s = t.length, i, f = t.length, l = 0; l < s; l++) {
      let d = t[l];
      we(d, () => {
        if (i) {
          if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
            var u = e.outrogroups;
            Rt(gt(i.done)), u.delete(i), u.size === 0 && (e.outrogroups = null);
          }
        } else f -= 1;
      }, false);
    }
    if (f === 0) {
      var a = r.length === 0 && n !== null;
      if (a) {
        var o = n, c = o.parentNode;
        ei(c), c.append(o), e.items.clear();
      }
      Rt(t, !a);
    } else i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
  }
  function Rt(e, t = true) {
    for (var n = 0; n < e.length; n++) j(e[n], t);
  }
  var nn;
  function Yn(e, t, n, r, s, i = null) {
    var f = e, l = /* @__PURE__ */ new Map();
    {
      var a = e;
      f = a.appendChild(se());
    }
    var o = null, c = Bt(() => {
      var y = n();
      return pt(y) ? y : y == null ? [] : gt(y);
    }), d, u = true;
    function h() {
      b.fallback = o, xi(b, d, f, t, r), o !== null && (d.length === 0 ? (o.f & he) === 0 ? Vt(o) : (o.f ^= he, He(o, null, f)) : we(o, () => {
        o = null;
      }));
    }
    var _ = zt(() => {
      d = p(c);
      for (var y = d.length, D = /* @__PURE__ */ new Set(), v = S, m = Tn(), E = 0; E < y; E += 1) {
        var O = d[E], C = r(O, E), k = u ? null : l.get(C);
        k ? (k.v && qe(k.v, O), k.i && qe(k.i, E), m && v.skipped_effects.delete(k.e)) : (k = ki(l, u ? f : nn ?? (nn = se()), O, C, E, s, t, n), u || (k.e.f |= he), l.set(C, k)), D.add(C);
      }
      if (y === 0 && i && !o && (u ? o = H(() => i(f)) : (o = H(() => i(nn ?? (nn = se()))), o.f |= he)), !u) if (m) {
        for (const [A, Q] of l) D.has(A) || v.skipped_effects.add(Q.e);
        v.oncommit(h), v.ondiscard(() => {
        });
      } else h();
      p(c);
    }), b = {
      effect: _,
      items: l,
      outrogroups: null,
      fallback: o
    };
    u = false;
  }
  function xi(e, t, n, r, s) {
    var _a3;
    var i = t.length, f = e.items, l = e.effect.first, a, o = null, c = [], d = [], u, h, _, b;
    for (b = 0; b < i; b += 1) {
      if (u = t[b], h = s(u, b), _ = f.get(h).e, e.outrogroups !== null) for (const A of e.outrogroups) A.pending.delete(_), A.done.delete(_);
      if ((_.f & he) !== 0) if (_.f ^= he, _ === l) He(_, null, n);
      else {
        var y = o ? o.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), de(e, o, _), de(e, _, y), He(_, y, n), o = _, c = [], d = [], l = o.next;
        continue;
      }
      if ((_.f & V) !== 0 && Vt(_), _ !== l) {
        if (a !== void 0 && a.has(_)) {
          if (c.length < d.length) {
            var D = d[0], v;
            o = D.prev;
            var m = c[0], E = c[c.length - 1];
            for (v = 0; v < c.length; v += 1) He(c[v], D, n);
            for (v = 0; v < d.length; v += 1) a.delete(d[v]);
            de(e, m.prev, E.next), de(e, o, m), de(e, E, D), l = D, o = E, b -= 1, c = [], d = [];
          } else a.delete(_), He(_, l, n), de(e, _.prev, _.next), de(e, _, o === null ? e.effect.first : o.next), de(e, o, _), o = _;
          continue;
        }
        for (c = [], d = []; l !== null && l !== _; ) (a ?? (a = /* @__PURE__ */ new Set())).add(l), d.push(l), l = l.next;
        if (l === null) continue;
      }
      (_.f & he) === 0 && c.push(_), o = _, l = _.next;
    }
    if (e.outrogroups !== null) {
      for (const A of e.outrogroups) A.pending.size === 0 && (Rt(gt(A.done)), (_a3 = e.outrogroups) == null ? void 0 : _a3.delete(A));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (l !== null || a !== void 0) {
      var O = [];
      if (a !== void 0) for (_ of a) (_.f & V) === 0 && O.push(_);
      for (; l !== null; ) (l.f & V) === 0 && l !== e.fallback && O.push(l), l = l.next;
      var C = O.length;
      if (C > 0) {
        var k = i === 0 ? n : null;
        Ei(e, O, k);
      }
    }
  }
  function ki(e, t, n, r, s, i, f, l) {
    var a = (f & dr) !== 0 ? (f & vr) === 0 ? De(n, false, false) : xe(n) : null, o = (f & hr) !== 0 ? xe(s) : null;
    return {
      v: a,
      i: o,
      e: H(() => (i(t, a ?? n, o ?? s, l), () => {
        e.delete(r);
      }))
    };
  }
  function He(e, t, n) {
    if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && (t.f & he) === 0 ? t.nodes.start : n; r !== null; ) {
      var f = tt(r);
      if (i.before(r), r === s) return;
      r = f;
    }
  }
  function de(e, t, n) {
    t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
  }
  const Si = /* @__PURE__ */ Symbol("is custom element"), Ai = /* @__PURE__ */ Symbol("is html");
  function Et(e, t, n, r) {
    var s = Ti(e);
    s[t] !== (s[t] = n) && (t === "loading" && (e[Or] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Oi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }
  function Ti(e) {
    return e.__attributes ?? (e.__attributes = {
      [Si]: e.nodeName.includes("-"),
      [Ai]: e.namespaceURI === br
    });
  }
  var rn = /* @__PURE__ */ new Map();
  function Oi(e) {
    var t = e.getAttribute("is") || e.nodeName, n = rn.get(t);
    if (n) return n;
    rn.set(t, n = []);
    for (var r, s = e, i = Element.prototype; i !== s; ) {
      r = on(s);
      for (var f in r) r[f].set && n.push(f);
      s = Ct(s);
    }
    return n;
  }
  function Hn(e = false) {
    const t = T, n = t.l.u;
    if (!n) return;
    let r = () => Vn(t.s);
    if (e) {
      let s = 0, i = {};
      const f = mt(() => {
        let l = false;
        const a = t.s;
        for (const o in a) a[o] !== i[o] && (i[o] = a[o], l = true);
        return l && s++, s;
      });
      r = () => p(f);
    }
    n.b.length && ni(() => {
      sn(t, r), St(n.b);
    }), Qt(() => {
      const s = ge(() => n.m.map(Sr));
      return () => {
        for (const i of s) typeof i == "function" && i();
      };
    }), n.a.length && Qt(() => {
      sn(t, r), St(n.a);
    });
  }
  function sn(e, t) {
    if (e.l.s) for (const n of e.l.s) p(n);
    t();
  }
  function Fi(e, t) {
    var _a3;
    var n = (_a3 = e.$$events) == null ? void 0 : _a3[t.type], r = pt(n) ? n.slice() : n == null ? [] : [
      n
    ];
    for (var s of r) s.call(this, t);
  }
  let ft = false;
  function Pi(e) {
    var t = ft;
    try {
      return ft = false, [
        e(),
        ft
      ];
    } finally {
      ft = t;
    }
  }
  function ut(e, t, n, r) {
    var _a3;
    var s = !Je || (n & pr) !== 0, i = (n & wr) !== 0, f = r, l = true, a = () => (l && (l = false, f = r), f), o;
    {
      var c = Ue in e || Tr in e;
      o = ((_a3 = Ie(e, t)) == null ? void 0 : _a3.set) ?? (c && t in e ? (v) => e[t] = v : void 0);
    }
    var d, u = false;
    [d, u] = Pi(() => e[t]);
    var h;
    if (s ? h = () => {
      var v = e[t];
      return v === void 0 ? a() : (l = true, v);
    } : h = () => {
      var v = e[t];
      return v !== void 0 && (f = void 0), v === void 0 ? f : v;
    }, s && (n & gr) === 0) return h;
    if (o) {
      var _ = e.$$legacy;
      return (function(v, m) {
        return arguments.length > 0 ? ((!s || !m || _ || u) && o(m ? h() : v), v) : h();
      });
    }
    var b = false, y = Bt(() => (b = false, h()));
    p(y);
    var D = w;
    return (function(v, m) {
      if (arguments.length > 0) {
        const E = m ? p(y) : s && i ? Ce(v) : v;
        return F(y, E), b = true, f !== void 0 && (f = E), v;
      }
      return Se && b || (D.f & ie) !== 0 ? y.v : p(y);
    });
  }
  var Ri = Ae('<div style="display: inline; cursor: pointer;"> </div>'), Di = Ae('<div style="padding-left: 1em;"></div>'), Ci = Ae('<div><div><!> <div style="display: inline;"> </div></div> <!></div>');
  function Kn(e, t) {
    Lt(t, false);
    let n = ut(t, "name", 8), r = ut(t, "node", 8), s = ut(t, "popcapPak", 8), i = De(false), f = r() instanceof s().Entry;
    const l = mi();
    function a(v) {
      f && l("view", {
        node: r()
      });
    }
    function o() {
      f || F(i, !p(i));
    }
    Hn();
    var c = Ci(), d = Z(c), u = Z(d);
    {
      var h = (v) => {
        var m = Ri(), E = Z(m);
        Ge(() => Pt(E, p(i) ? "-" : "+")), $e("click", m, o), $e("keypress", m, o), z(v, m);
      };
      Ne(u, (v) => {
        f || v(h);
      });
    }
    var _ = Me(u, 2), b = Z(_), y = Me(d, 2);
    {
      var D = (v) => {
        var m = Di();
        Yn(m, 5, () => (Vn(r()), ge(() => Object.entries(r()))), $n, (E, O, C, k) => {
          var A = yn(() => un(p(O), 2));
          let Q = () => p(A)[0], rt = () => p(A)[1];
          var ue = at(), U = ot(ue);
          Kn(U, {
            get name() {
              return Q();
            },
            get node() {
              return rt();
            },
            get popcapPak() {
              return s();
            },
            $$events: {
              view($) {
                Fi.call(this, t, $);
              }
            }
          }), z(E, ue);
        }), z(v, m);
      };
      Ne(y, (v) => {
        p(i) && v(D);
      });
    }
    Ge(() => Pt(b, n())), $e("click", _, a), $e("keypress", _, a), z(e, c), It();
  }
  var Mi = Ae("<img/>"), Ni = Ae('<audio controls="controls" type="audio/mp3"></audio>'), Li = Ae('<div style="display:flex; flex-direction: column; flex: 1;"><div><label for="load-file">Choose a PAK file:</label> <input type="file" id="load-file" name="load-file"/></div> <div style="display: flex; flex: 1; overflow: hidden;"><div style="flex: 2; display: flex; flex-direction: column;"><h2>Directory</h2> <div style="flex-grow: 1; flex-basis: auto; overflow-y: scroll; height: 0px;"></div></div> <div style="flex: 5; display: flex; align-items: center; justify-content: center;"><!></div></div></div>');
  function Ii(e, t) {
    Lt(t, false);
    let n = ut(t, "popcapPak", 8), r = De({}), s = De(null), i = De(null), f = De(null);
    async function l(v) {
      let E = v.target.files[0];
      F(r, {}), E.arrayBuffer().catch(console.error).then((O) => {
        let C = new (n()).Pak(O), k = {};
        for (let A = 0; A < C.length; A++) {
          let Q = C.entry(A), ue = Q.path().split(/[\\\/]/), U = k;
          for (let $ = 0; $ < ue.length; $++) {
            let ce = ue[$];
            $ + 1 < ue.length ? (U[ce] = U[ce] || {}, U = U[ce]) : U[ce] = Q;
          }
        }
        console.log(k), F(r, k);
      });
    }
    function a(v) {
      let m = v.detail.node;
      F(f, m.name());
      let E = p(f).endsWith(".png") || p(f).endsWith(".gif"), O = p(f).endsWith(".txt") || p(f).endsWith(".xml"), C = p(f).endsWith(".ogg") || p(f).endsWith(".au");
      E ? F(s, "image") : O ? F(s, "text") : C ? F(s, "sound") : F(s, "unknown"), F(i, m.readFileData());
    }
    Hn();
    var o = Li(), c = Z(o), d = Me(Z(c), 2), u = Me(c, 2), h = Z(u), _ = Me(Z(h), 2);
    Yn(_, 5, () => (p(r), ge(() => Object.entries(p(r)))), $n, (v, m) => {
      var E = yn(() => un(p(m), 2));
      let O = () => p(E)[0], C = () => p(E)[1];
      Kn(v, {
        get name() {
          return O();
        },
        get node() {
          return C();
        },
        get popcapPak() {
          return n();
        },
        $$events: {
          view: a
        }
      });
    });
    var b = Me(h, 2), y = Z(b);
    {
      var D = (v) => {
        var m = at(), E = ot(m);
        {
          var O = (k) => {
            var A = Mi();
            Ge((Q) => {
              Et(A, "alt", p(f)), Et(A, "src", Q);
            }, [
              () => (p(i), ge(() => URL.createObjectURL(new Blob([
                p(i).buffer
              ]))))
            ]), z(k, A);
          }, C = (k) => {
            var A = at(), Q = ot(A);
            {
              var rt = (U) => {
                var $ = tn();
                Ge((ce) => Pt($, ce), [
                  () => (p(i), ge(() => String.fromCharCode(...p(i))))
                ]), z(U, $);
              }, ue = (U) => {
                var $ = at(), ce = ot($);
                {
                  var lr = (Te) => {
                    var it = Ni();
                    Ge((ar) => Et(it, "src", ar), [
                      () => (p(i), ge(() => URL.createObjectURL(new Blob([
                        p(i).buffer
                      ]))))
                    ]), z(Te, it);
                  }, or = (Te) => {
                    var it = tn("Unknown File Type");
                    z(Te, it);
                  };
                  Ne(ce, (Te) => {
                    p(s) == "sound" ? Te(lr) : Te(or, false);
                  }, true);
                }
                z(U, $);
              };
              Ne(Q, (U) => {
                p(s) == "text" ? U(rt) : U(ue, false);
              }, true);
            }
            z(k, A);
          };
          Ne(E, (k) => {
            p(s) == "image" ? k(O) : k(C, false);
          });
        }
        z(v, m);
      };
      Ne(y, (v) => {
        p(i) != null && v(D);
      });
    }
    $e("change", d, l), z(e, o), It();
  }
  const Ui = "" + new URL("popcap_pak_wasm_bg-72QsE0QA.wasm", import.meta.url).href, Bi = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let s;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const i = atob(r);
        s = new Uint8Array(i.length);
        for (let f = 0; f < i.length; f++) s[f] = i.charCodeAt(f);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(s, e);
    } else {
      const r = await fetch(t), s = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
      else {
        const i = await r.arrayBuffer();
        n = await WebAssembly.instantiate(i, e);
      }
    }
    return n.instance.exports;
  };
  let x;
  function Gn(e) {
    x = e;
  }
  function ct(e, t) {
    return e = e >>> 0, Qn().subarray(e / 1, e / 1 + t);
  }
  function Le(e, t) {
    return e = e >>> 0, Wi(e, t);
  }
  let lt = null;
  function Qn() {
    return (lt === null || lt.byteLength === 0) && (lt = new Uint8Array(x.memory.buffer)), lt;
  }
  function Fe(e) {
    const t = x.__wbindgen_externrefs.get(e);
    return x.__externref_table_dealloc(e), t;
  }
  let _t = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  _t.decode();
  const ji = 2146435072;
  let xt = 0;
  function Wi(e, t) {
    return xt += t, xt >= ji && (_t = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), _t.decode(), xt = t), _t.decode(Qn().subarray(e, e + t));
  }
  const fn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_entry_free(e >>> 0, 1)), ln = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_pak_free(e >>> 0, 1));
  class ze {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(ze.prototype);
      return n.__wbg_ptr = t, fn.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_entry_free(t, 0);
    }
    name_lossy() {
      let t, n;
      try {
        const i = x.entry_name_lossy(this.__wbg_ptr);
        var r = i[0], s = i[1];
        if (i[3]) throw r = 0, s = 0, Fe(i[2]);
        return t = r, n = s, Le(r, s);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    path_lossy() {
      let t, n;
      try {
        const r = x.entry_path_lossy(this.__wbg_ptr);
        return t = r[0], n = r[1], Le(r[0], r[1]);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    readFileData() {
      const t = x.entry_readFileData(this.__wbg_ptr);
      if (t[3]) throw Fe(t[2]);
      var n = ct(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    name() {
      let t, n;
      try {
        const i = x.entry_name(this.__wbg_ptr);
        var r = i[0], s = i[1];
        if (i[3]) throw r = 0, s = 0, Fe(i[2]);
        return t = r, n = s, Le(r, s);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    path() {
      let t, n;
      try {
        const i = x.entry_path(this.__wbg_ptr);
        var r = i[0], s = i[1];
        if (i[3]) throw r = 0, s = 0, Fe(i[2]);
        return t = r, n = s, Le(r, s);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    name_raw() {
      const t = x.entry_name_raw(this.__wbg_ptr);
      if (t[3]) throw Fe(t[2]);
      var n = ct(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    path_raw() {
      const t = x.entry_path_raw(this.__wbg_ptr);
      var n = ct(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
  }
  Symbol.dispose && (ze.prototype[Symbol.dispose] = ze.prototype.free);
  class Dt {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ln.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_pak_free(t, 0);
    }
    constructor(t) {
      const n = x.pak_new(t);
      if (n[2]) throw Fe(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, ln.register(this, this.__wbg_ptr, this), this;
    }
    entry(t) {
      return x.pak_entry(this.__wbg_ptr, t);
    }
    get length() {
      return x.pak_length(this.__wbg_ptr) >>> 0;
    }
  }
  Symbol.dispose && (Dt.prototype[Symbol.dispose] = Dt.prototype.free);
  function Xn(e, t) {
    return Error(Le(e, t));
  }
  function Zn(e) {
    return e === void 0;
  }
  function Jn(e, t) {
    throw new Error(Le(e, t));
  }
  function er(e) {
    return ze.__wrap(e);
  }
  function tr(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function nr(e) {
    return e.length;
  }
  function rr(e) {
    return new Uint8Array(e);
  }
  function ir(e, t, n) {
    Uint8Array.prototype.set.call(ct(e, t), n);
  }
  function sr() {
    const e = x.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const R = await Bi({
    "./popcap_pak_wasm_bg.js": {
      __wbg_entry_new: er,
      __wbg_new_6421f6084cc5bc5a: rr,
      __wbg_length_22ac23eaec9d8053: nr,
      __wbg_prototypesetcall_dfe9b766cdc1f1fd: ir,
      __wbg_instanceof_ArrayBuffer_f3320d2419cd0355: tr,
      __wbg___wbindgen_throw_dd24417ed36fc46e: Jn,
      __wbg_Error_52673b7de5a0ca89: Xn,
      __wbg___wbindgen_is_undefined_f6b95eab589e0269: Zn,
      __wbindgen_init_externref_table: sr
    }
  }, Ui), qi = R.memory, zi = R.__wbg_entry_free, Vi = R.__wbg_pak_free, $i = R.entry_name, Yi = R.entry_name_lossy, Hi = R.entry_name_raw, Ki = R.entry_path, Gi = R.entry_path_lossy, Qi = R.entry_path_raw, Xi = R.entry_readFileData, Zi = R.pak_entry, Ji = R.pak_length, es = R.pak_new, ts = R.__wbindgen_externrefs, ns = R.__externref_table_dealloc, rs = R.__wbindgen_free, fr = R.__wbindgen_start, is = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: ns,
    __wbg_entry_free: zi,
    __wbg_pak_free: Vi,
    __wbindgen_externrefs: ts,
    __wbindgen_free: rs,
    __wbindgen_start: fr,
    entry_name: $i,
    entry_name_lossy: Yi,
    entry_name_raw: Hi,
    entry_path: Ki,
    entry_path_lossy: Gi,
    entry_path_raw: Qi,
    entry_readFileData: Xi,
    memory: qi,
    pak_entry: Zi,
    pak_length: Ji,
    pak_new: es
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Gn(is);
  fr();
  const ss = Object.freeze(Object.defineProperty({
    __proto__: null,
    Entry: ze,
    Pak: Dt,
    __wbg_Error_52673b7de5a0ca89: Xn,
    __wbg___wbindgen_is_undefined_f6b95eab589e0269: Zn,
    __wbg___wbindgen_throw_dd24417ed36fc46e: Jn,
    __wbg_entry_new: er,
    __wbg_instanceof_ArrayBuffer_f3320d2419cd0355: tr,
    __wbg_length_22ac23eaec9d8053: nr,
    __wbg_new_6421f6084cc5bc5a: rr,
    __wbg_prototypesetcall_dfe9b766cdc1f1fd: ir,
    __wbg_set_wasm: Gn,
    __wbindgen_init_externref_table: sr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var fs = Ae('<div style="margin: 0.2em; display: flex; flex: 1;"><!></div>');
  function ls(e) {
    var t = fs(), n = Z(t);
    Ii(n, {
      get popcapPak() {
        return ss;
      }
    }), z(e, t);
  }
  pi(ls, {
    target: document.body
  });
})();
