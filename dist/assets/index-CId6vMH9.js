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
  var _a, _t2, _f, _e, _i2, _s, _r, _n2, _ee_instances, l_fn, o_fn, a_fn, u_fn, _t3, _f2, _e2, _i3, _s2, _r2, _n3, _l, _o, _a2, _u, _c, _d, _h, _v, __, _b, _Xr_instances, m_fn, E_fn, w_fn, p_fn, g_fn, y_fn, _t4, _f3, _e3, _i4, _s3, _r3, _n4;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const f of s.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(i) {
      if (i.ep) return;
      i.ep = true;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  const hr = "5";
  typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(hr);
  let Ze = false, vr = false;
  function pr() {
    Ze = true;
  }
  pr();
  const gr = 1, wr = 2, yr = 16, br = 2, mr = 4, Er = 8, xr = 2, P = /* @__PURE__ */ Symbol(), kr = "http://www.w3.org/1999/xhtml", Et = false;
  var pt = Array.isArray, Sr = Array.prototype.indexOf, gt = Array.from, Ar = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, un = Object.getOwnPropertyDescriptors, Tr = Object.prototype, Or = Array.prototype, Dt = Object.getPrototypeOf, Kt = Object.isExtensible;
  function Fr(e) {
    return e();
  }
  function xt(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  function cn() {
    var e, t, n = new Promise((r, i) => {
      e = r, t = i;
    });
    return {
      promise: n,
      resolve: e,
      reject: t
    };
  }
  function _n(e, t) {
    if (Array.isArray(e)) return e;
    if (!(Symbol.iterator in e)) return Array.from(e);
    const n = [];
    for (const r of e) if (n.push(r), n.length === t) break;
    return n;
  }
  const D = 2, kt = 4, Je = 8, dn = 1 << 24, le = 16, oe = 32, Se = 64, Ct = 128, K = 512, L = 1024, U = 2048, ae = 4096, V = 8192, re = 16384, Mt = 32768, Be = 65536, Gt = 1 << 17, hn = 1 << 18, Ve = 1 << 19, vn = 1 << 20, ve = 1 << 25, xe = 32768, St = 1 << 21, Nt = 1 << 22, pe = 1 << 23, Ue = /* @__PURE__ */ Symbol("$state"), Pr = /* @__PURE__ */ Symbol("legacy props"), Rr = /* @__PURE__ */ Symbol(""), Pe = new class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Dr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Cr() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function Mr(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Nr() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Lr(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Ir() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Ur() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Br() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function jr() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function Wr() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  function qr() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function pn(e) {
    return e === this.v;
  }
  function zr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function gn(e) {
    return !zr(e, this.v);
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
      l: Ze && !t ? {
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
      for (var r of n) Mn(r);
    }
    return t.i = true, T = t.p, {};
  }
  function et() {
    return !Ze || T !== null && T.l === null;
  }
  let Re = [];
  function Vr() {
    var e = Re;
    Re = [], xt(e);
  }
  function wt(e) {
    if (Re.length === 0) {
      var t = Re;
      queueMicrotask(() => {
        t === Re && Vr();
      });
    }
    Re.push(e);
  }
  function wn(e) {
    var t = y;
    if (t === null) return g.f |= pe, e;
    if ((t.f & Mt) === 0) {
      if ((t.f & Ct) === 0) throw e;
      t.b.error(e);
    } else We(e, t);
  }
  function We(e, t) {
    for (; t !== null; ) {
      if ((t.f & Ct) !== 0) try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
      t = t.parent;
    }
    throw e;
  }
  const $r = -7169;
  function F(e, t) {
    e.f = e.f & $r | t;
  }
  function Ut(e) {
    (e.f & K) !== 0 || e.deps === null ? F(e, L) : F(e, ae);
  }
  function yn(e) {
    if (e !== null) for (const t of e) (t.f & D) === 0 || (t.f & xe) === 0 || (t.f ^= xe, yn(t.deps));
  }
  function bn(e, t, n) {
    (e.f & U) !== 0 ? t.add(e) : (e.f & ae) !== 0 && n.add(e), yn(e.deps), F(e, L);
  }
  const st = /* @__PURE__ */ new Set();
  let A = null, G = null, Z = [], Bt = null, At = false;
  const _ee = class _ee {
    constructor() {
      __privateAdd(this, _ee_instances);
      __publicField(this, "committed", false);
      __publicField(this, "current", /* @__PURE__ */ new Map());
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      __privateAdd(this, _t2, /* @__PURE__ */ new Set());
      __privateAdd(this, _f, /* @__PURE__ */ new Set());
      __privateAdd(this, _e, 0);
      __privateAdd(this, _i2, 0);
      __privateAdd(this, _s, null);
      __privateAdd(this, _r, /* @__PURE__ */ new Set());
      __privateAdd(this, _n2, /* @__PURE__ */ new Set());
      __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
      __publicField(this, "is_fork", false);
    }
    is_deferred() {
      return this.is_fork || __privateGet(this, _i2) > 0;
    }
    process(t) {
      var _a3;
      Z = [], this.apply();
      var n = [], r = [];
      for (const i of t) __privateMethod(this, _ee_instances, l_fn).call(this, i, n, r);
      this.is_fork || __privateMethod(this, _ee_instances, a_fn).call(this), this.is_deferred() ? (__privateMethod(this, _ee_instances, o_fn).call(this, r), __privateMethod(this, _ee_instances, o_fn).call(this, n)) : (A = null, Qt(r), Qt(n), (_a3 = __privateGet(this, _s)) == null ? void 0 : _a3.resolve()), G = null;
    }
    capture(t, n) {
      n !== P && !this.previous.has(t) && this.previous.set(t, n), (t.f & pe) === 0 && (this.current.set(t, t.v), G == null ? void 0 : G.set(t, t.v));
    }
    activate() {
      A = this, this.apply();
    }
    deactivate() {
      A === this && (A = null, G = null);
    }
    flush() {
      if (this.activate(), Z.length > 0) {
        if (Yr(), A !== null && A !== this) return;
      } else __privateGet(this, _e) === 0 && this.process([]);
      this.deactivate();
    }
    discard() {
      for (const t of __privateGet(this, _f)) t(this);
      __privateGet(this, _f).clear();
    }
    increment(t) {
      __privateSet(this, _e, __privateGet(this, _e) + 1), t && __privateSet(this, _i2, __privateGet(this, _i2) + 1);
    }
    decrement(t) {
      __privateSet(this, _e, __privateGet(this, _e) - 1), t && __privateSet(this, _i2, __privateGet(this, _i2) - 1), this.revive();
    }
    revive() {
      for (const t of __privateGet(this, _r)) __privateGet(this, _n2).delete(t), F(t, U), fe(t);
      for (const t of __privateGet(this, _n2)) F(t, ae), fe(t);
      this.flush();
    }
    oncommit(t) {
      __privateGet(this, _t2).add(t);
    }
    ondiscard(t) {
      __privateGet(this, _f).add(t);
    }
    settled() {
      return (__privateGet(this, _s) ?? __privateSet(this, _s, cn())).promise;
    }
    static ensure() {
      if (A === null) {
        const t = A = new _ee();
        st.add(A), _ee.enqueue(() => {
          A === t && t.flush();
        });
      }
      return A;
    }
    static enqueue(t) {
      wt(t);
    }
    apply() {
    }
  };
  _t2 = new WeakMap();
  _f = new WeakMap();
  _e = new WeakMap();
  _i2 = new WeakMap();
  _s = new WeakMap();
  _r = new WeakMap();
  _n2 = new WeakMap();
  _ee_instances = new WeakSet();
  l_fn = function(t, n, r) {
    t.f ^= L;
    for (var i = t.first, s = null; i !== null; ) {
      var f = i.f, l = (f & (oe | Se)) !== 0, a = l && (f & L) !== 0, o = a || (f & V) !== 0 || this.skipped_effects.has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= L : s !== null && (f & (kt | Je | dn)) !== 0 ? s.b.defer_effect(i) : (f & kt) !== 0 ? n.push(i) : nt(i) && ((f & le) !== 0 && __privateGet(this, _r).add(i), Xe(i));
        var u = i.first;
        if (u !== null) {
          i = u;
          continue;
        }
      }
      var c = i.parent;
      for (i = i.next; i === null && c !== null; ) c === s && (s = null), i = c.next, c = c.parent;
    }
  };
  o_fn = function(t) {
    for (var n = 0; n < t.length; n += 1) bn(t[n], __privateGet(this, _r), __privateGet(this, _n2));
  };
  a_fn = function() {
    if (__privateGet(this, _i2) === 0) {
      for (const t of __privateGet(this, _t2)) t();
      __privateGet(this, _t2).clear();
    }
    __privateGet(this, _e) === 0 && __privateMethod(this, _ee_instances, u_fn).call(this);
  };
  u_fn = function() {
    var _a3;
    if (st.size > 1) {
      this.previous.clear();
      var t = G, n = true;
      for (const i of st) {
        if (i === this) {
          n = false;
          continue;
        }
        const s = [];
        for (const [l, a] of this.current) {
          if (i.current.has(l)) if (n && a !== i.current.get(l)) i.current.set(l, a);
          else continue;
          s.push(l);
        }
        if (s.length === 0) continue;
        const f = [
          ...i.current.keys()
        ].filter((l) => !this.current.has(l));
        if (f.length > 0) {
          var r = Z;
          Z = [];
          const l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (const o of s) mn(o, f, l, a);
          if (Z.length > 0) {
            A = i, i.apply();
            for (const o of Z) __privateMethod(_a3 = i, _ee_instances, l_fn).call(_a3, o, [], []);
            i.deactivate();
          }
          Z = r;
        }
      }
      A = null, G = t;
    }
    this.committed = true, st.delete(this);
  };
  let ee = _ee;
  function Yr() {
    var e = me;
    At = true;
    var t = null;
    try {
      var n = 0;
      for (ht(true); Z.length > 0; ) {
        var r = ee.ensure();
        if (n++ > 1e3) {
          var i, s;
          Hr();
        }
        r.process(Z), ge.clear();
      }
    } finally {
      At = false, ht(e), Bt = null;
    }
  }
  function Hr() {
    try {
      Ir();
    } catch (e) {
      We(e, Bt);
    }
  }
  let ne = null;
  function Qt(e) {
    var t = e.length;
    if (t !== 0) {
      for (var n = 0; n < t; ) {
        var r = e[n++];
        if ((r.f & (re | V)) === 0 && nt(r) && (ne = /* @__PURE__ */ new Set(), Xe(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? In(r) : r.fn = null), (ne == null ? void 0 : ne.size) > 0)) {
          ge.clear();
          for (const i of ne) {
            if ((i.f & (re | V)) !== 0) continue;
            const s = [
              i
            ];
            let f = i.parent;
            for (; f !== null; ) ne.has(f) && (ne.delete(f), s.push(f)), f = f.parent;
            for (let l = s.length - 1; l >= 0; l--) {
              const a = s[l];
              (a.f & (re | V)) === 0 && Xe(a);
            }
          }
          ne.clear();
        }
      }
      ne = null;
    }
  }
  function mn(e, t, n, r) {
    if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const i of e.reactions) {
      const s = i.f;
      (s & D) !== 0 ? mn(i, t, n, r) : (s & (Nt | le)) !== 0 && (s & U) === 0 && En(i, t, r) && (F(i, U), fe(i));
    }
  }
  function En(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null) for (const i of e.deps) {
      if (t.includes(i)) return true;
      if ((i.f & D) !== 0 && En(i, t, n)) return n.set(i, true), true;
    }
    return n.set(e, false), false;
  }
  function fe(e) {
    for (var t = Bt = e; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (At && t === y && (n & le) !== 0 && (n & hn) === 0) return;
      if ((n & (Se | oe)) !== 0) {
        if ((n & L) === 0) return;
        t.f ^= L;
      }
    }
    Z.push(t);
  }
  function Kr(e) {
    let t = 0, n = ke(0), r;
    return () => {
      Vt() && (p(n), ai(() => (t === 0 && (r = ye(() => e(() => Ke(n)))), t += 1, () => {
        wt(() => {
          t -= 1, t === 0 && (r == null ? void 0 : r(), r = void 0, Ke(n));
        });
      })));
    };
  }
  var Gr = Be | Ve | Ct;
  function Qr(e, t, n) {
    new Xr(e, t, n);
  }
  class Xr {
    constructor(t, n, r) {
      __privateAdd(this, _Xr_instances);
      __publicField(this, "parent");
      __publicField(this, "is_pending", false);
      __privateAdd(this, _t3);
      __privateAdd(this, _f2, null);
      __privateAdd(this, _e2);
      __privateAdd(this, _i3);
      __privateAdd(this, _s2);
      __privateAdd(this, _r2, null);
      __privateAdd(this, _n3, null);
      __privateAdd(this, _l, null);
      __privateAdd(this, _o, null);
      __privateAdd(this, _a2, null);
      __privateAdd(this, _u, 0);
      __privateAdd(this, _c, 0);
      __privateAdd(this, _d, false);
      __privateAdd(this, _h, /* @__PURE__ */ new Set());
      __privateAdd(this, _v, /* @__PURE__ */ new Set());
      __privateAdd(this, __, null);
      __privateAdd(this, _b, Kr(() => (__privateSet(this, __, ke(__privateGet(this, _u))), () => {
        __privateSet(this, __, null);
      })));
      __privateSet(this, _t3, t), __privateSet(this, _e2, n), __privateSet(this, _i3, r), this.parent = y.b, this.is_pending = !!__privateGet(this, _e2).pending, __privateSet(this, _s2, $t(() => {
        y.b = this;
        {
          var i = __privateMethod(this, _Xr_instances, w_fn).call(this);
          try {
            __privateSet(this, _r2, H(() => r(i)));
          } catch (s) {
            this.error(s);
          }
          __privateGet(this, _c) > 0 ? __privateMethod(this, _Xr_instances, g_fn).call(this) : this.is_pending = false;
        }
        return () => {
          var _a3;
          (_a3 = __privateGet(this, _a2)) == null ? void 0 : _a3.remove();
        };
      }, Gr));
    }
    defer_effect(t) {
      bn(t, __privateGet(this, _h), __privateGet(this, _v));
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!__privateGet(this, _e2).pending;
    }
    update_pending_count(t) {
      __privateMethod(this, _Xr_instances, y_fn).call(this, t), __privateSet(this, _u, __privateGet(this, _u) + t), __privateGet(this, __) && qe(__privateGet(this, __), __privateGet(this, _u));
    }
    get_effect_pending() {
      return __privateGet(this, _b).call(this), p(__privateGet(this, __));
    }
    error(t) {
      var n = __privateGet(this, _e2).onerror;
      let r = __privateGet(this, _e2).failed;
      if (__privateGet(this, _d) || !n && !r) throw t;
      __privateGet(this, _r2) && (W(__privateGet(this, _r2)), __privateSet(this, _r2, null)), __privateGet(this, _n3) && (W(__privateGet(this, _n3)), __privateSet(this, _n3, null)), __privateGet(this, _l) && (W(__privateGet(this, _l)), __privateSet(this, _l, null));
      var i = false, s = false;
      const f = () => {
        if (i) {
          qr();
          return;
        }
        i = true, s && Wr(), ee.ensure(), __privateSet(this, _u, 0), __privateGet(this, _l) !== null && be(__privateGet(this, _l), () => {
          __privateSet(this, _l, null);
        }), this.is_pending = this.has_pending_snippet(), __privateSet(this, _r2, __privateMethod(this, _Xr_instances, p_fn).call(this, () => (__privateSet(this, _d, false), H(() => __privateGet(this, _i3).call(this, __privateGet(this, _t3)))))), __privateGet(this, _c) > 0 ? __privateMethod(this, _Xr_instances, g_fn).call(this) : this.is_pending = false;
      };
      var l = g;
      try {
        j(null), s = true, n == null ? void 0 : n(t, f), s = false;
      } catch (a) {
        We(a, __privateGet(this, _s2) && __privateGet(this, _s2).parent);
      } finally {
        j(l);
      }
      r && wt(() => {
        __privateSet(this, _l, __privateMethod(this, _Xr_instances, p_fn).call(this, () => {
          ee.ensure(), __privateSet(this, _d, true);
          try {
            return H(() => {
              r(__privateGet(this, _t3), () => t, () => f);
            });
          } catch (a) {
            return We(a, __privateGet(this, _s2).parent), null;
          } finally {
            __privateSet(this, _d, false);
          }
        }));
      });
    }
  }
  _t3 = new WeakMap();
  _f2 = new WeakMap();
  _e2 = new WeakMap();
  _i3 = new WeakMap();
  _s2 = new WeakMap();
  _r2 = new WeakMap();
  _n3 = new WeakMap();
  _l = new WeakMap();
  _o = new WeakMap();
  _a2 = new WeakMap();
  _u = new WeakMap();
  _c = new WeakMap();
  _d = new WeakMap();
  _h = new WeakMap();
  _v = new WeakMap();
  __ = new WeakMap();
  _b = new WeakMap();
  _Xr_instances = new WeakSet();
  m_fn = function() {
    try {
      __privateSet(this, _r2, H(() => __privateGet(this, _i3).call(this, __privateGet(this, _t3))));
    } catch (t) {
      this.error(t);
    }
  };
  E_fn = function() {
    const t = __privateGet(this, _e2).pending;
    t && (__privateSet(this, _n3, H(() => t(__privateGet(this, _t3)))), ee.enqueue(() => {
      var n = __privateMethod(this, _Xr_instances, w_fn).call(this);
      __privateSet(this, _r2, __privateMethod(this, _Xr_instances, p_fn).call(this, () => (ee.ensure(), H(() => __privateGet(this, _i3).call(this, n))))), __privateGet(this, _c) > 0 ? __privateMethod(this, _Xr_instances, g_fn).call(this) : (be(__privateGet(this, _n3), () => {
        __privateSet(this, _n3, null);
      }), this.is_pending = false);
    }));
  };
  w_fn = function() {
    var t = __privateGet(this, _t3);
    return this.is_pending && (__privateSet(this, _a2, ie()), __privateGet(this, _t3).before(__privateGet(this, _a2)), t = __privateGet(this, _a2)), t;
  };
  p_fn = function(t) {
    var n = y, r = g, i = T;
    te(__privateGet(this, _s2)), j(__privateGet(this, _s2)), je(__privateGet(this, _s2).ctx);
    try {
      return t();
    } catch (s) {
      return wn(s), null;
    } finally {
      te(n), j(r), je(i);
    }
  };
  g_fn = function() {
    const t = __privateGet(this, _e2).pending;
    __privateGet(this, _r2) !== null && (__privateSet(this, _o, document.createDocumentFragment()), __privateGet(this, _o).append(__privateGet(this, _a2)), jn(__privateGet(this, _r2), __privateGet(this, _o))), __privateGet(this, _n3) === null && __privateSet(this, _n3, H(() => t(__privateGet(this, _t3))));
  };
  y_fn = function(t) {
    var _a3;
    if (!this.has_pending_snippet()) {
      this.parent && __privateMethod(_a3 = this.parent, _Xr_instances, y_fn).call(_a3, t);
      return;
    }
    if (__privateSet(this, _c, __privateGet(this, _c) + t), __privateGet(this, _c) === 0) {
      this.is_pending = false;
      for (const n of __privateGet(this, _h)) F(n, U), fe(n);
      for (const n of __privateGet(this, _v)) F(n, ae), fe(n);
      __privateGet(this, _h).clear(), __privateGet(this, _v).clear(), __privateGet(this, _n3) && be(__privateGet(this, _n3), () => {
        __privateSet(this, _n3, null);
      }), __privateGet(this, _o) && (__privateGet(this, _t3).before(__privateGet(this, _o)), __privateSet(this, _o, null));
    }
  };
  function Zr(e, t, n, r) {
    const i = et() ? yt : jt;
    if (n.length === 0 && e.length === 0) {
      r(t.map(i));
      return;
    }
    var s = A, f = y, l = Jr();
    function a() {
      Promise.all(n.map((o) => ei(o))).then((o) => {
        l();
        try {
          r([
            ...t.map(i),
            ...o
          ]);
        } catch (u) {
          (f.f & re) === 0 && We(u, f);
        }
        s == null ? void 0 : s.deactivate(), dt();
      }).catch((o) => {
        We(o, f);
      });
    }
    e.length > 0 ? Promise.all(e).then(() => {
      l();
      try {
        return a();
      } finally {
        s == null ? void 0 : s.deactivate(), dt();
      }
    }) : a();
  }
  function Jr() {
    var e = y, t = g, n = T, r = A;
    return function(s = true) {
      te(e), j(t), je(n), s && (r == null ? void 0 : r.activate());
    };
  }
  function dt() {
    te(null), j(null), je(null);
  }
  function yt(e) {
    var t = D | U, n = g !== null && (g.f & D) !== 0 ? g : null;
    return y !== null && (y.f |= Ve), {
      ctx: T,
      deps: null,
      effects: null,
      equals: pn,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: P,
      wv: 0,
      parent: n ?? y,
      ac: null
    };
  }
  function ei(e, t, n) {
    let r = y;
    r === null && Cr();
    var i = r.b, s = void 0, f = ke(P), l = !g, a = /* @__PURE__ */ new Map();
    return oi(() => {
      var _a3;
      var o = cn();
      s = o.promise;
      try {
        Promise.resolve(e()).then(o.resolve, o.reject).then(() => {
          u === A && u.committed && u.deactivate(), dt();
        });
      } catch (h) {
        o.reject(h), dt();
      }
      var u = A;
      if (l) {
        var c = i.is_rendered();
        i.update_pending_count(1), u.increment(c), (_a3 = a.get(u)) == null ? void 0 : _a3.reject(Pe), a.delete(u), a.set(u, o);
      }
      const _ = (h, d = void 0) => {
        if (u.activate(), d) d !== Pe && (f.f |= pe, qe(f, d));
        else {
          (f.f & pe) !== 0 && (f.f ^= pe), qe(f, h);
          for (const [b, w] of a) {
            if (a.delete(b), b === u) break;
            w.reject(Pe);
          }
        }
        l && (i.update_pending_count(-1), u.decrement(c));
      };
      o.promise.then(_, (h) => _(null, h || "unknown"));
    }), Cn(() => {
      for (const o of a.values()) o.reject(Pe);
    }), new Promise((o) => {
      function u(c) {
        function _() {
          c === s ? o(f) : u(s);
        }
        c.then(_, _);
      }
      u(s);
    });
  }
  function xn(e) {
    const t = yt(e);
    return Wn(t), t;
  }
  function jt(e) {
    const t = yt(e);
    return t.equals = gn, t;
  }
  function kn(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) W(t[n]);
    }
  }
  function ti(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & D) === 0) return (t.f & re) === 0 ? t : null;
      t = t.parent;
    }
    return null;
  }
  function Wt(e) {
    var t, n = y;
    te(ti(e));
    try {
      e.f &= ~xe, kn(e), t = $n(e);
    } finally {
      te(n);
    }
    return t;
  }
  function Sn(e) {
    var t = Wt(e);
    if (!e.equals(t) && (e.wv = zn(), (!(A == null ? void 0 : A.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
      F(e, L);
      return;
    }
    we || (G !== null ? (Vt() || (A == null ? void 0 : A.is_fork)) && G.set(e, t) : Ut(e));
  }
  let Tt = /* @__PURE__ */ new Set();
  const ge = /* @__PURE__ */ new Map();
  let An = false;
  function ke(e, t) {
    var n = {
      f: 0,
      v: e,
      reactions: null,
      equals: pn,
      rv: 0,
      wv: 0
    };
    return n;
  }
  function de(e, t) {
    const n = ke(e);
    return Wn(n), n;
  }
  function De(e, t = false, n = true) {
    var _a3;
    const r = ke(e);
    return t || (r.equals = gn), Ze && n && T !== null && T.l !== null && ((_a3 = T.l).s ?? (_a3.s = [])).push(r), r;
  }
  function R(e, t, n = false) {
    g !== null && (!Q || (g.f & Gt) !== 0) && et() && (g.f & (D | le | Nt | Gt)) !== 0 && !(se == null ? void 0 : se.includes(e)) && jr();
    let r = n ? Ce(t) : t;
    return qe(e, r);
  }
  function qe(e, t) {
    if (!e.equals(t)) {
      var n = e.v;
      we ? ge.set(e, t) : ge.set(e, n), e.v = t;
      var r = ee.ensure();
      if (r.capture(e, n), (e.f & D) !== 0) {
        const i = e;
        (e.f & U) !== 0 && Wt(i), Ut(i);
      }
      e.wv = zn(), Tn(e, U), et() && y !== null && (y.f & L) !== 0 && (y.f & (oe | Se)) === 0 && (Y === null ? _i([
        e
      ]) : Y.push(e)), !r.is_fork && Tt.size > 0 && !An && ni();
    }
    return t;
  }
  function ni() {
    An = false;
    var e = me;
    ht(true);
    const t = Array.from(Tt);
    try {
      for (const n of t) (n.f & L) !== 0 && F(n, ae), nt(n) && Xe(n);
    } finally {
      ht(e);
    }
    Tt.clear();
  }
  function Ke(e) {
    R(e, e.v + 1);
  }
  function Tn(e, t) {
    var n = e.reactions;
    if (n !== null) for (var r = et(), i = n.length, s = 0; s < i; s++) {
      var f = n[s], l = f.f;
      if (!(!r && f === y)) {
        var a = (l & U) === 0;
        if (a && F(f, t), (l & D) !== 0) {
          var o = f;
          G == null ? void 0 : G.delete(o), (l & xe) === 0 && (l & K && (f.f |= xe), Tn(o, ae));
        } else a && ((l & le) !== 0 && ne !== null && ne.add(f), fe(f));
      }
    }
  }
  function Ce(e) {
    if (typeof e != "object" || e === null || Ue in e) return e;
    const t = Dt(e);
    if (t !== Tr && t !== Or) return e;
    var n = /* @__PURE__ */ new Map(), r = pt(e), i = de(0), s = Ee, f = (l) => {
      if (Ee === s) return l();
      var a = g, o = Ee;
      j(null), en(s);
      var u = l();
      return j(a), en(o), u;
    };
    return r && n.set("length", de(e.length)), new Proxy(e, {
      defineProperty(l, a, o) {
        (!("value" in o) || o.configurable === false || o.enumerable === false || o.writable === false) && Ur();
        var u = n.get(a);
        return u === void 0 ? u = f(() => {
          var c = de(o.value);
          return n.set(a, c), c;
        }) : R(u, o.value, true), true;
      },
      deleteProperty(l, a) {
        var o = n.get(a);
        if (o === void 0) {
          if (a in l) {
            const u = f(() => de(P));
            n.set(a, u), Ke(i);
          }
        } else R(o, P), Ke(i);
        return true;
      },
      get(l, a, o) {
        var _a3;
        if (a === Ue) return e;
        var u = n.get(a), c = a in l;
        if (u === void 0 && (!c || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable)) && (u = f(() => {
          var h = Ce(c ? l[a] : P), d = de(h);
          return d;
        }), n.set(a, u)), u !== void 0) {
          var _ = p(u);
          return _ === P ? void 0 : _;
        }
        return Reflect.get(l, a, o);
      },
      getOwnPropertyDescriptor(l, a) {
        var o = Reflect.getOwnPropertyDescriptor(l, a);
        if (o && "value" in o) {
          var u = n.get(a);
          u && (o.value = p(u));
        } else if (o === void 0) {
          var c = n.get(a), _ = c == null ? void 0 : c.v;
          if (c !== void 0 && _ !== P) return {
            enumerable: true,
            configurable: true,
            value: _,
            writable: true
          };
        }
        return o;
      },
      has(l, a) {
        var _a3;
        if (a === Ue) return true;
        var o = n.get(a), u = o !== void 0 && o.v !== P || Reflect.has(l, a);
        if (o !== void 0 || y !== null && (!u || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable))) {
          o === void 0 && (o = f(() => {
            var _ = u ? Ce(l[a]) : P, h = de(_);
            return h;
          }), n.set(a, o));
          var c = p(o);
          if (c === P) return false;
        }
        return u;
      },
      set(l, a, o, u) {
        var _a3;
        var c = n.get(a), _ = a in l;
        if (r && a === "length") for (var h = o; h < c.v; h += 1) {
          var d = n.get(h + "");
          d !== void 0 ? R(d, P) : h in l && (d = f(() => de(P)), n.set(h + "", d));
        }
        if (c === void 0) (!_ || ((_a3 = Ie(l, a)) == null ? void 0 : _a3.writable)) && (c = f(() => de(void 0)), R(c, Ce(o)), n.set(a, c));
        else {
          _ = c.v !== P;
          var b = f(() => Ce(o));
          R(c, b);
        }
        var w = Reflect.getOwnPropertyDescriptor(l, a);
        if ((w == null ? void 0 : w.set) && w.set.call(u, o), !_) {
          if (r && typeof a == "string") {
            var M = n.get("length"), v = Number(a);
            Number.isInteger(v) && v >= M.v && R(M, v + 1);
          }
          Ke(i);
        }
        return true;
      },
      ownKeys(l) {
        p(i);
        var a = Reflect.ownKeys(l).filter((c) => {
          var _ = n.get(c);
          return _ === void 0 || _.v !== P;
        });
        for (var [o, u] of n) u.v !== P && !(o in l) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        Br();
      }
    });
  }
  var Xt, On, Fn, Pn;
  function ri() {
    if (Xt === void 0) {
      Xt = window, On = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, n = Text.prototype;
      Fn = Ie(t, "firstChild").get, Pn = Ie(t, "nextSibling").get, Kt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Kt(n) && (n.__t = void 0);
    }
  }
  function ie(e = "") {
    return document.createTextNode(e);
  }
  function qt(e) {
    return Fn.call(e);
  }
  function tt(e) {
    return Pn.call(e);
  }
  function J(e, t) {
    return qt(e);
  }
  function ot(e, t = false) {
    {
      var n = qt(e);
      return n instanceof Comment && n.data === "" ? tt(n) : n;
    }
  }
  function Me(e, t = 1, n = false) {
    let r = e;
    for (; t--; ) r = tt(r);
    return r;
  }
  function ii(e) {
    e.textContent = "";
  }
  function Rn() {
    return false;
  }
  function zt(e) {
    var t = g, n = y;
    j(null), te(null);
    try {
      return e();
    } finally {
      j(t), te(n);
    }
  }
  function Dn(e) {
    y === null && (g === null && Lr(), Nr()), we && Mr();
  }
  function si(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
  }
  function ue(e, t, n) {
    var r = y;
    r !== null && (r.f & V) !== 0 && (e |= V);
    var i = {
      ctx: T,
      deps: null,
      nodes: null,
      f: e | U | K,
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
      Xe(i), i.f |= Mt;
    } catch (l) {
      throw W(i), l;
    }
    else t !== null && fe(i);
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & Ve) === 0 && (s = s.first, (e & le) !== 0 && (e & Be) !== 0 && s !== null && (s.f |= Be)), s !== null && (s.parent = r, r !== null && si(s, r), g !== null && (g.f & D) !== 0 && (e & Se) === 0)) {
      var f = g;
      (f.effects ?? (f.effects = [])).push(s);
    }
    return i;
  }
  function Vt() {
    return g !== null && !Q;
  }
  function Cn(e) {
    const t = ue(Je, null, false);
    return F(t, L), t.teardown = e, t;
  }
  function Zt(e) {
    Dn();
    var t = y.f, n = !g && (t & oe) !== 0 && (t & Mt) === 0;
    if (n) {
      var r = T;
      (r.e ?? (r.e = [])).push(e);
    } else return Mn(e);
  }
  function Mn(e) {
    return ue(kt | vn, e, false);
  }
  function fi(e) {
    return Dn(), ue(Je | vn, e, true);
  }
  function li(e) {
    ee.ensure();
    const t = ue(Se | Ve, e, true);
    return (n = {}) => new Promise((r) => {
      n.outro ? be(t, () => {
        W(t), r(void 0);
      }) : (W(t), r(void 0));
    });
  }
  function oi(e) {
    return ue(Nt | Ve, e, true);
  }
  function ai(e, t = 0) {
    return ue(Je | t, e, true);
  }
  function Ge(e, t = [], n = [], r = []) {
    Zr(r, t, n, (i) => {
      ue(Je, () => e(...i.map(p)), true);
    });
  }
  function $t(e, t = 0) {
    var n = ue(le | t, e, true);
    return n;
  }
  function H(e) {
    return ue(oe | Ve, e, true);
  }
  function Nn(e) {
    var t = e.teardown;
    if (t !== null) {
      const n = we, r = g;
      Jt(true), j(null);
      try {
        t.call(null);
      } finally {
        Jt(n), j(r);
      }
    }
  }
  function Ln(e, t = false) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
      const i = n.ac;
      i !== null && zt(() => {
        i.abort(Pe);
      });
      var r = n.next;
      (n.f & Se) !== 0 ? n.parent = null : W(n, t), n = r;
    }
  }
  function ui(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next;
      (t.f & oe) === 0 && W(t), t = n;
    }
  }
  function W(e, t = true) {
    var n = false;
    (t || (e.f & hn) !== 0) && e.nodes !== null && e.nodes.end !== null && (ci(e.nodes.start, e.nodes.end), n = true), Ln(e, t && !n), vt(e, 0), F(e, re);
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const s of r) s.stop();
    Nn(e);
    var i = e.parent;
    i !== null && i.first !== null && In(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
  }
  function ci(e, t) {
    for (; e !== null; ) {
      var n = e === t ? null : tt(e);
      e.remove(), e = n;
    }
  }
  function In(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
  }
  function be(e, t, n = true) {
    var r = [];
    Un(e, r, true);
    var i = () => {
      n && W(e), t && t();
    }, s = r.length;
    if (s > 0) {
      var f = () => --s || i();
      for (var l of r) l.out(f);
    } else i();
  }
  function Un(e, t, n) {
    if ((e.f & V) === 0) {
      e.f ^= V;
      var r = e.nodes && e.nodes.t;
      if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
      for (var i = e.first; i !== null; ) {
        var s = i.next, f = (i.f & Be) !== 0 || (i.f & oe) !== 0 && (e.f & le) !== 0;
        Un(i, t, f ? n : false), i = s;
      }
    }
  }
  function Yt(e) {
    Bn(e, true);
  }
  function Bn(e, t) {
    if ((e.f & V) !== 0) {
      e.f ^= V, (e.f & L) === 0 && (F(e, U), fe(e));
      for (var n = e.first; n !== null; ) {
        var r = n.next, i = (n.f & Be) !== 0 || (n.f & oe) !== 0;
        Bn(n, i ? t : false), n = r;
      }
      var s = e.nodes && e.nodes.t;
      if (s !== null) for (const f of s) (f.is_global || t) && f.in();
    }
  }
  function jn(e, t) {
    if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : tt(n);
      t.append(n), n = i;
    }
  }
  let me = false;
  function ht(e) {
    me = e;
  }
  let we = false;
  function Jt(e) {
    we = e;
  }
  let g = null, Q = false;
  function j(e) {
    g = e;
  }
  let y = null;
  function te(e) {
    y = e;
  }
  let se = null;
  function Wn(e) {
    g !== null && (se === null ? se = [
      e
    ] : se.push(e));
  }
  let I = null, q = 0, Y = null;
  function _i(e) {
    Y = e;
  }
  let qn = 1, Qe = 0, Ee = Qe;
  function en(e) {
    Ee = e;
  }
  function zn() {
    return ++qn;
  }
  function nt(e) {
    var t = e.f;
    if ((t & U) !== 0) return true;
    if (t & D && (e.f &= ~xe), (t & ae) !== 0) {
      for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (nt(s) && Sn(s), s.wv > e.wv) return true;
      }
      (t & K) !== 0 && G === null && F(e, L);
    }
    return false;
  }
  function Vn(e, t, n = true) {
    var r = e.reactions;
    if (r !== null && !(se == null ? void 0 : se.includes(e))) for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & D) !== 0 ? Vn(s, t, false) : t === s && (n ? F(s, U) : (s.f & L) !== 0 && F(s, ae), fe(s));
    }
  }
  function $n(e) {
    var _a3;
    var t = I, n = q, r = Y, i = g, s = se, f = T, l = Q, a = Ee, o = e.f;
    I = null, q = 0, Y = null, g = (o & (oe | Se)) === 0 ? e : null, se = null, je(e.ctx), Q = false, Ee = ++Qe, e.ac !== null && (zt(() => {
      e.ac.abort(Pe);
    }), e.ac = null);
    try {
      e.f |= St;
      var u = e.fn, c = u(), _ = e.deps;
      if (I !== null) {
        var h;
        if (vt(e, q), _ !== null && q > 0) for (_.length = q + I.length, h = 0; h < I.length; h++) _[q + h] = I[h];
        else e.deps = _ = I;
        if (Vt() && (e.f & K) !== 0) for (h = q; h < _.length; h++) ((_a3 = _[h]).reactions ?? (_a3.reactions = [])).push(e);
      } else _ !== null && q < _.length && (vt(e, q), _.length = q);
      if (et() && Y !== null && !Q && _ !== null && (e.f & (D | ae | U)) === 0) for (h = 0; h < Y.length; h++) Vn(Y[h], e);
      return i !== null && i !== e && (Qe++, Y !== null && (r === null ? r = Y : r.push(...Y))), (e.f & pe) !== 0 && (e.f ^= pe), c;
    } catch (d) {
      return wn(d);
    } finally {
      e.f ^= St, I = t, q = n, Y = r, g = i, se = s, je(f), Q = l, Ee = a;
    }
  }
  function di(e, t) {
    let n = t.reactions;
    if (n !== null) {
      var r = Sr.call(n, e);
      if (r !== -1) {
        var i = n.length - 1;
        i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
      }
    }
    if (n === null && (t.f & D) !== 0 && (I === null || !I.includes(t))) {
      var s = t;
      (s.f & K) !== 0 && (s.f ^= K, s.f &= ~xe), Ut(s), kn(s), vt(s, 0);
    }
  }
  function vt(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) di(e, n[r]);
  }
  function Xe(e) {
    var t = e.f;
    if ((t & re) === 0) {
      F(e, L);
      var n = y, r = me;
      y = e, me = true;
      try {
        (t & (le | dn)) !== 0 ? ui(e) : Ln(e), Nn(e);
        var i = $n(e);
        e.teardown = typeof i == "function" ? i : null, e.wv = qn;
        var s;
        Et && vr && (e.f & U) !== 0 && e.deps;
      } finally {
        me = r, y = n;
      }
    }
  }
  function p(e) {
    var t = e.f, n = (t & D) !== 0;
    if (g !== null && !Q) {
      var r = y !== null && (y.f & re) !== 0;
      if (!r && !(se == null ? void 0 : se.includes(e))) {
        var i = g.deps;
        if ((g.f & St) !== 0) e.rv < Qe && (e.rv = Qe, I === null && i !== null && i[q] === e ? q++ : I === null ? I = [
          e
        ] : I.includes(e) || I.push(e));
        else {
          (g.deps ?? (g.deps = [])).push(e);
          var s = e.reactions;
          s === null ? e.reactions = [
            g
          ] : s.includes(g) || s.push(g);
        }
      }
    }
    if (we && ge.has(e)) return ge.get(e);
    if (n) {
      var f = e;
      if (we) {
        var l = f.v;
        return ((f.f & L) === 0 && f.reactions !== null || Hn(f)) && (l = Wt(f)), ge.set(f, l), l;
      }
      var a = (f.f & K) === 0 && !Q && g !== null && (me || (g.f & K) !== 0), o = f.deps === null;
      nt(f) && (a && (f.f |= K), Sn(f)), a && !o && Yn(f);
    }
    if (G == null ? void 0 : G.has(e)) return G.get(e);
    if ((e.f & pe) !== 0) throw e.v;
    return e.v;
  }
  function Yn(e) {
    if (e.deps !== null) {
      e.f |= K;
      for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & K) === 0 && Yn(t);
    }
  }
  function Hn(e) {
    if (e.v === P) return true;
    if (e.deps === null) return false;
    for (const t of e.deps) if (ge.has(t) || (t.f & D) !== 0 && Hn(t)) return true;
    return false;
  }
  function ye(e) {
    var t = Q;
    try {
      return Q = true, e();
    } finally {
      Q = t;
    }
  }
  function Kn(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (Ue in e) Ot(e);
      else if (!Array.isArray(e)) for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ue in n && Ot(n);
      }
    }
  }
  function Ot(e, t = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime();
      for (let r in e) try {
        Ot(e[r], t);
      } catch {
      }
      const n = Dt(e);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = un(n);
        for (let i in r) {
          const s = r[i].get;
          if (s) try {
            s.call(e);
          } catch {
          }
        }
      }
    }
  }
  const hi = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Set();
  function vi(e, t, n, r = {}) {
    function i(s) {
      if (r.capture || Ye.call(t, s), !s.cancelBubble) return zt(() => n == null ? void 0 : n.call(this, s));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wt(() => {
      t.addEventListener(e, i, r);
    }) : t.addEventListener(e, i, r), i;
  }
  function $e(e, t, n, r, i) {
    var s = {
      capture: r,
      passive: i
    }, f = vi(e, t, n, s);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Cn(() => {
      t.removeEventListener(e, f, s);
    });
  }
  let nn = null;
  function Ye(e) {
    var _a3;
    var t = this, n = t.ownerDocument, r = e.type, i = ((_a3 = e.composedPath) == null ? void 0 : _a3.call(e)) || [], s = i[0] || e.target;
    nn = e;
    var f = 0, l = nn === e && e.__root;
    if (l) {
      var a = i.indexOf(l);
      if (a !== -1 && (t === document || t === window)) {
        e.__root = t;
        return;
      }
      var o = i.indexOf(t);
      if (o === -1) return;
      a <= o && (f = a);
    }
    if (s = i[f] || e.target, s !== t) {
      Ar(e, "currentTarget", {
        configurable: true,
        get() {
          return s || n;
        }
      });
      var u = g, c = y;
      j(null), te(null);
      try {
        for (var _, h = []; s !== null; ) {
          var d = s.assignedSlot || s.parentNode || s.host || null;
          try {
            var b = s["__" + r];
            b != null && (!s.disabled || e.target === s) && b.call(s, e);
          } catch (w) {
            _ ? h.push(w) : _ = w;
          }
          if (e.cancelBubble || d === t || d === null) break;
          s = d;
        }
        if (_) {
          for (let w of h) queueMicrotask(() => {
            throw w;
          });
          throw _;
        }
      } finally {
        e.__root = t, delete e.currentTarget, j(u), te(c);
      }
    }
  }
  function pi(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
  }
  function Ht(e, t) {
    var n = y;
    n.nodes === null && (n.nodes = {
      start: e,
      end: t,
      a: null,
      t: null
    });
  }
  function Ae(e, t) {
    var n = (t & xr) !== 0, r, i = !e.startsWith("<!>");
    return () => {
      r === void 0 && (r = pi(i ? e : "<!>" + e), r = qt(r));
      var s = n || On ? document.importNode(r, true) : r.cloneNode(true);
      return Ht(s, s), s;
    };
  }
  function rn(e = "") {
    {
      var t = ie(e + "");
      return Ht(t, t), t;
    }
  }
  function at() {
    var e = document.createDocumentFragment(), t = document.createComment(""), n = ie();
    return e.append(t, n), Ht(t, n), e;
  }
  function z(e, t) {
    e !== null && e.before(t);
  }
  const gi = [
    "touchstart",
    "touchmove"
  ];
  function wi(e) {
    return gi.includes(e);
  }
  function Ft(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
  }
  function yi(e, t) {
    return bi(e, t);
  }
  const Oe = /* @__PURE__ */ new Map();
  function bi(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = true }) {
    ri();
    var l = /* @__PURE__ */ new Set(), a = (c) => {
      for (var _ = 0; _ < c.length; _++) {
        var h = c[_];
        if (!l.has(h)) {
          l.add(h);
          var d = wi(h);
          t.addEventListener(h, Ye, {
            passive: d
          });
          var b = Oe.get(h);
          b === void 0 ? (document.addEventListener(h, Ye, {
            passive: d
          }), Oe.set(h, 1)) : Oe.set(h, b + 1);
        }
      }
    };
    a(gt(hi)), tn.add(a);
    var o = void 0, u = li(() => {
      var c = n ?? t.appendChild(ie());
      return Qr(c, {
        pending: () => {
        }
      }, (_) => {
        if (s) {
          Lt({});
          var h = T;
          h.c = s;
        }
        i && (r.$$events = i), o = e(_, r) || {}, s && It();
      }), () => {
        var _a3;
        for (var _ of l) {
          t.removeEventListener(_, Ye);
          var h = Oe.get(_);
          --h === 0 ? (document.removeEventListener(_, Ye), Oe.delete(_)) : Oe.set(_, h);
        }
        tn.delete(a), c !== n && ((_a3 = c.parentNode) == null ? void 0 : _a3.removeChild(c));
      };
    });
    return mi.set(o, u), o;
  }
  let mi = /* @__PURE__ */ new WeakMap();
  class Ei {
    constructor(t, n = true) {
      __publicField(this, "anchor");
      __privateAdd(this, _t4, /* @__PURE__ */ new Map());
      __privateAdd(this, _f3, /* @__PURE__ */ new Map());
      __privateAdd(this, _e3, /* @__PURE__ */ new Map());
      __privateAdd(this, _i4, /* @__PURE__ */ new Set());
      __privateAdd(this, _s3, true);
      __privateAdd(this, _r3, () => {
        var t = A;
        if (__privateGet(this, _t4).has(t)) {
          var n = __privateGet(this, _t4).get(t), r = __privateGet(this, _f3).get(n);
          if (r) Yt(r), __privateGet(this, _i4).delete(n);
          else {
            var i = __privateGet(this, _e3).get(n);
            i && (__privateGet(this, _f3).set(n, i.effect), __privateGet(this, _e3).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
          }
          for (const [s, f] of __privateGet(this, _t4)) {
            if (__privateGet(this, _t4).delete(s), s === t) break;
            const l = __privateGet(this, _e3).get(f);
            l && (W(l.effect), __privateGet(this, _e3).delete(f));
          }
          for (const [s, f] of __privateGet(this, _f3)) {
            if (s === n || __privateGet(this, _i4).has(s)) continue;
            const l = () => {
              if (Array.from(__privateGet(this, _t4).values()).includes(s)) {
                var o = document.createDocumentFragment();
                jn(f, o), o.append(ie()), __privateGet(this, _e3).set(s, {
                  effect: f,
                  fragment: o
                });
              } else W(f);
              __privateGet(this, _i4).delete(s), __privateGet(this, _f3).delete(s);
            };
            __privateGet(this, _s3) || !r ? (__privateGet(this, _i4).add(s), be(f, l, false)) : l();
          }
        }
      });
      __privateAdd(this, _n4, (t) => {
        __privateGet(this, _t4).delete(t);
        const n = Array.from(__privateGet(this, _t4).values());
        for (const [r, i] of __privateGet(this, _e3)) n.includes(r) || (W(i.effect), __privateGet(this, _e3).delete(r));
      });
      this.anchor = t, __privateSet(this, _s3, n);
    }
    ensure(t, n) {
      var r = A, i = Rn();
      if (n && !__privateGet(this, _f3).has(t) && !__privateGet(this, _e3).has(t)) if (i) {
        var s = document.createDocumentFragment(), f = ie();
        s.append(f), __privateGet(this, _e3).set(t, {
          effect: H(() => n(f)),
          fragment: s
        });
      } else __privateGet(this, _f3).set(t, H(() => n(this.anchor)));
      if (__privateGet(this, _t4).set(r, t), i) {
        for (const [l, a] of __privateGet(this, _f3)) l === t ? r.skipped_effects.delete(a) : r.skipped_effects.add(a);
        for (const [l, a] of __privateGet(this, _e3)) l === t ? r.skipped_effects.delete(a.effect) : r.skipped_effects.add(a.effect);
        r.oncommit(__privateGet(this, _r3)), r.ondiscard(__privateGet(this, _n4));
      } else __privateGet(this, _r3).call(this);
    }
  }
  _t4 = new WeakMap();
  _f3 = new WeakMap();
  _e3 = new WeakMap();
  _i4 = new WeakMap();
  _s3 = new WeakMap();
  _r3 = new WeakMap();
  _n4 = new WeakMap();
  function xi(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  function ki() {
    const e = T;
    return e === null && Dr(), (t, n, r) => {
      var _a3;
      const i = (_a3 = e.s.$$events) == null ? void 0 : _a3[t];
      if (i) {
        const s = pt(i) ? i.slice() : [
          i
        ], f = xi(t, n, r);
        for (const l of s) l.call(e.x, f);
        return !f.defaultPrevented;
      }
      return true;
    };
  }
  function Ne(e, t, n = false) {
    var r = new Ei(e), i = n ? Be : 0;
    function s(f, l) {
      r.ensure(f, l);
    }
    $t(() => {
      var f = false;
      t((l, a = true) => {
        f = true, s(a, l);
      }), f || s(false, null);
    }, i);
  }
  function Gn(e, t) {
    return t;
  }
  function Si(e, t, n) {
    for (var r = [], i = t.length, s, f = t.length, l = 0; l < i; l++) {
      let c = t[l];
      be(c, () => {
        if (s) {
          if (s.pending.delete(c), s.done.add(c), s.pending.size === 0) {
            var _ = e.outrogroups;
            Pt(gt(s.done)), _.delete(s), _.size === 0 && (e.outrogroups = null);
          }
        } else f -= 1;
      }, false);
    }
    if (f === 0) {
      var a = r.length === 0 && n !== null;
      if (a) {
        var o = n, u = o.parentNode;
        ii(u), u.append(o), e.items.clear();
      }
      Pt(t, !a);
    } else s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
  }
  function Pt(e, t = true) {
    for (var n = 0; n < e.length; n++) W(e[n], t);
  }
  var sn;
  function Qn(e, t, n, r, i, s = null) {
    var f = e, l = /* @__PURE__ */ new Map();
    {
      var a = e;
      f = a.appendChild(ie());
    }
    var o = null, u = jt(() => {
      var w = n();
      return pt(w) ? w : w == null ? [] : gt(w);
    }), c, _ = true;
    function h() {
      b.fallback = o, Ai(b, c, f, t, r), o !== null && (c.length === 0 ? (o.f & ve) === 0 ? Yt(o) : (o.f ^= ve, He(o, null, f)) : be(o, () => {
        o = null;
      }));
    }
    var d = $t(() => {
      c = p(u);
      for (var w = c.length, M = /* @__PURE__ */ new Set(), v = A, m = Rn(), E = 0; E < w; E += 1) {
        var O = c[E], N = r(O, E), k = _ ? null : l.get(N);
        k ? (k.v && qe(k.v, O), k.i && qe(k.i, E), m && v.skipped_effects.delete(k.e)) : (k = Ti(l, _ ? f : sn ?? (sn = ie()), O, N, E, i, t, n), _ || (k.e.f |= ve), l.set(N, k)), M.add(N);
      }
      if (w === 0 && s && !o && (_ ? o = H(() => s(f)) : (o = H(() => s(sn ?? (sn = ie()))), o.f |= ve)), !_) if (m) {
        for (const [S, X] of l) M.has(S) || v.skipped_effects.add(X.e);
        v.oncommit(h), v.ondiscard(() => {
        });
      } else h();
      p(u);
    }), b = {
      effect: d,
      items: l,
      outrogroups: null,
      fallback: o
    };
    _ = false;
  }
  function Ai(e, t, n, r, i) {
    var _a3;
    var s = t.length, f = e.items, l = e.effect.first, a, o = null, u = [], c = [], _, h, d, b;
    for (b = 0; b < s; b += 1) {
      if (_ = t[b], h = i(_, b), d = f.get(h).e, e.outrogroups !== null) for (const S of e.outrogroups) S.pending.delete(d), S.done.delete(d);
      if ((d.f & ve) !== 0) if (d.f ^= ve, d === l) He(d, null, n);
      else {
        var w = o ? o.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), he(e, o, d), he(e, d, w), He(d, w, n), o = d, u = [], c = [], l = o.next;
        continue;
      }
      if ((d.f & V) !== 0 && Yt(d), d !== l) {
        if (a !== void 0 && a.has(d)) {
          if (u.length < c.length) {
            var M = c[0], v;
            o = M.prev;
            var m = u[0], E = u[u.length - 1];
            for (v = 0; v < u.length; v += 1) He(u[v], M, n);
            for (v = 0; v < c.length; v += 1) a.delete(c[v]);
            he(e, m.prev, E.next), he(e, o, m), he(e, E, M), l = M, o = E, b -= 1, u = [], c = [];
          } else a.delete(d), He(d, l, n), he(e, d.prev, d.next), he(e, d, o === null ? e.effect.first : o.next), he(e, o, d), o = d;
          continue;
        }
        for (u = [], c = []; l !== null && l !== d; ) (a ?? (a = /* @__PURE__ */ new Set())).add(l), c.push(l), l = l.next;
        if (l === null) continue;
      }
      (d.f & ve) === 0 && u.push(d), o = d, l = d.next;
    }
    if (e.outrogroups !== null) {
      for (const S of e.outrogroups) S.pending.size === 0 && (Pt(gt(S.done)), (_a3 = e.outrogroups) == null ? void 0 : _a3.delete(S));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (l !== null || a !== void 0) {
      var O = [];
      if (a !== void 0) for (d of a) (d.f & V) === 0 && O.push(d);
      for (; l !== null; ) (l.f & V) === 0 && l !== e.fallback && O.push(l), l = l.next;
      var N = O.length;
      if (N > 0) {
        var k = s === 0 ? n : null;
        Si(e, O, k);
      }
    }
  }
  function Ti(e, t, n, r, i, s, f, l) {
    var a = (f & gr) !== 0 ? (f & yr) === 0 ? De(n, false, false) : ke(n) : null, o = (f & wr) !== 0 ? ke(i) : null;
    return {
      v: a,
      i: o,
      e: H(() => (s(t, a ?? n, o ?? i, l), () => {
        e.delete(r);
      }))
    };
  }
  function He(e, t, n) {
    if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & ve) === 0 ? t.nodes.start : n; r !== null; ) {
      var f = tt(r);
      if (s.before(r), r === i) return;
      r = f;
    }
  }
  function he(e, t, n) {
    t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
  }
  const Oi = /* @__PURE__ */ Symbol("is custom element"), Fi = /* @__PURE__ */ Symbol("is html");
  function bt(e, t, n, r) {
    var i = Pi(e);
    i[t] !== (i[t] = n) && (t === "loading" && (e[Rr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ri(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }
  function Pi(e) {
    return e.__attributes ?? (e.__attributes = {
      [Oi]: e.nodeName.includes("-"),
      [Fi]: e.namespaceURI === kr
    });
  }
  var fn = /* @__PURE__ */ new Map();
  function Ri(e) {
    var t = e.getAttribute("is") || e.nodeName, n = fn.get(t);
    if (n) return n;
    fn.set(t, n = []);
    for (var r, i = e, s = Element.prototype; s !== i; ) {
      r = un(i);
      for (var f in r) r[f].set && n.push(f);
      i = Dt(i);
    }
    return n;
  }
  function Xn(e = false) {
    const t = T, n = t.l.u;
    if (!n) return;
    let r = () => Kn(t.s);
    if (e) {
      let i = 0, s = {};
      const f = yt(() => {
        let l = false;
        const a = t.s;
        for (const o in a) a[o] !== s[o] && (s[o] = a[o], l = true);
        return l && i++, i;
      });
      r = () => p(f);
    }
    n.b.length && fi(() => {
      ln(t, r), xt(n.b);
    }), Zt(() => {
      const i = ye(() => n.m.map(Fr));
      return () => {
        for (const s of i) typeof s == "function" && s();
      };
    }), n.a.length && Zt(() => {
      ln(t, r), xt(n.a);
    });
  }
  function ln(e, t) {
    if (e.l.s) for (const n of e.l.s) p(n);
    t();
  }
  function Di(e, t) {
    var _a3;
    var n = (_a3 = e.$$events) == null ? void 0 : _a3[t.type], r = pt(n) ? n.slice() : n == null ? [] : [
      n
    ];
    for (var i of r) i.call(this, t);
  }
  let ft = false;
  function Ci(e) {
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
    var i = !Ze || (n & br) !== 0, s = (n & Er) !== 0, f = r, l = true, a = () => (l && (l = false, f = r), f), o;
    {
      var u = Ue in e || Pr in e;
      o = ((_a3 = Ie(e, t)) == null ? void 0 : _a3.set) ?? (u && t in e ? (v) => e[t] = v : void 0);
    }
    var c, _ = false;
    [c, _] = Ci(() => e[t]);
    var h;
    if (i ? h = () => {
      var v = e[t];
      return v === void 0 ? a() : (l = true, v);
    } : h = () => {
      var v = e[t];
      return v !== void 0 && (f = void 0), v === void 0 ? f : v;
    }, i && (n & mr) === 0) return h;
    if (o) {
      var d = e.$$legacy;
      return (function(v, m) {
        return arguments.length > 0 ? ((!i || !m || d || _) && o(m ? h() : v), v) : h();
      });
    }
    var b = false, w = jt(() => (b = false, h()));
    p(w);
    var M = y;
    return (function(v, m) {
      if (arguments.length > 0) {
        const E = m ? p(w) : i && s ? Ce(v) : v;
        return R(w, E), b = true, f !== void 0 && (f = E), v;
      }
      return we && b || (M.f & re) !== 0 ? w.v : p(w);
    });
  }
  var Mi = Ae('<div style="display: inline; cursor: pointer;"> </div>'), Ni = Ae('<div style="padding-left: 1em;"></div>'), Li = Ae('<div><div><!> <div style="display: inline;"> </div></div> <!></div>');
  function Zn(e, t) {
    Lt(t, false);
    let n = ut(t, "name", 8), r = ut(t, "node", 8), i = ut(t, "popcapPak", 8), s = De(false), f = r() instanceof i().Entry;
    const l = ki();
    function a(v) {
      f && l("view", {
        node: r()
      });
    }
    function o() {
      f || R(s, !p(s));
    }
    Xn();
    var u = Li(), c = J(u), _ = J(c);
    {
      var h = (v) => {
        var m = Mi(), E = J(m);
        Ge(() => Ft(E, p(s) ? "-" : "+")), $e("click", m, o), $e("keypress", m, o), z(v, m);
      };
      Ne(_, (v) => {
        f || v(h);
      });
    }
    var d = Me(_, 2), b = J(d), w = Me(c, 2);
    {
      var M = (v) => {
        var m = Ni();
        Qn(m, 5, () => (Kn(r()), ye(() => Object.entries(r()))), Gn, (E, O, N, k) => {
          var S = xn(() => _n(p(O), 2));
          let X = () => p(S)[0], rt = () => p(S)[1];
          var ce = at(), B = ot(ce);
          Zn(B, {
            get name() {
              return X();
            },
            get node() {
              return rt();
            },
            get popcapPak() {
              return i();
            },
            $$events: {
              view($) {
                Di.call(this, t, $);
              }
            }
          }), z(E, ce);
        }), z(v, m);
      };
      Ne(w, (v) => {
        p(s) && v(M);
      });
    }
    Ge(() => Ft(b, n())), $e("click", d, a), $e("keypress", d, a), z(e, u), It();
  }
  var Ii = Ae("<img/>"), Ui = Ae('<audio controls="controls" type="audio/mp3"></audio>'), Bi = Ae('<div style="display:flex; flex-direction: column; flex: 1;"><div><label for="load-file">Choose a PAK file:</label> <input type="file" id="load-file" name="load-file"/></div> <div style="display: flex; flex: 1; overflow: hidden;"><div style="flex: 2; display: flex; flex-direction: column;"><h2>Directory</h2> <div style="flex-grow: 1; flex-basis: auto; overflow-y: scroll; height: 0px;"></div></div> <div style="flex: 5; display: flex; align-items: center; justify-content: center;"><!></div></div></div>');
  function ji(e, t) {
    Lt(t, false);
    let n = ut(t, "popcapPak", 8), r = De({}), i = De(null), s = De(null), f = De(null);
    async function l(v) {
      let E = v.target.files[0];
      R(r, {}), E.arrayBuffer().catch(console.error).then((O) => {
        let N = new (n()).Pak(O), k = {};
        for (let S = 0; S < N.length; S++) {
          let X = N.entry(S), ce = X.path().split(/[\\\/]/), B = k;
          for (let $ = 0; $ < ce.length; $++) {
            let _e4 = ce[$];
            $ + 1 < ce.length ? (B[_e4] = B[_e4] || {}, B = B[_e4]) : B[_e4] = X;
          }
        }
        console.log(k), R(r, k);
      });
    }
    function a(v) {
      let m = v.detail.node;
      R(f, m.name());
      let E = p(f).endsWith(".png") || p(f).endsWith(".gif"), O = p(f).endsWith(".txt") || p(f).endsWith(".xml"), N = p(f).endsWith(".ogg") || p(f).endsWith(".au");
      E ? R(i, "image") : O ? R(i, "text") : N ? R(i, "sound") : R(i, "unknown"), R(s, m.readFileData());
    }
    Xn();
    var o = Bi(), u = J(o), c = Me(J(u), 2), _ = Me(u, 2), h = J(_), d = Me(J(h), 2);
    Qn(d, 5, () => (p(r), ye(() => Object.entries(p(r)))), Gn, (v, m) => {
      var E = xn(() => _n(p(m), 2));
      let O = () => p(E)[0], N = () => p(E)[1];
      Zn(v, {
        get name() {
          return O();
        },
        get node() {
          return N();
        },
        get popcapPak() {
          return n();
        },
        $$events: {
          view: a
        }
      });
    });
    var b = Me(h, 2), w = J(b);
    {
      var M = (v) => {
        var m = at(), E = ot(m);
        {
          var O = (k) => {
            var S = Ii();
            Ge((X) => {
              bt(S, "alt", p(f)), bt(S, "src", X);
            }, [
              () => (p(s), ye(() => URL.createObjectURL(new Blob([
                p(s).buffer
              ]))))
            ]), z(k, S);
          }, N = (k) => {
            var S = at(), X = ot(S);
            {
              var rt = (B) => {
                var $ = rn();
                Ge((_e4) => Ft($, _e4), [
                  () => (p(s), ye(() => String.fromCharCode(...p(s))))
                ]), z(B, $);
              }, ce = (B) => {
                var $ = at(), _e4 = ot($);
                {
                  var cr = (Te) => {
                    var it = Ui();
                    Ge((dr) => bt(it, "src", dr), [
                      () => (p(s), ye(() => URL.createObjectURL(new Blob([
                        p(s).buffer
                      ]))))
                    ]), z(Te, it);
                  }, _r4 = (Te) => {
                    var it = rn("Unknown File Type");
                    z(Te, it);
                  };
                  Ne(_e4, (Te) => {
                    p(i) == "sound" ? Te(cr) : Te(_r4, false);
                  }, true);
                }
                z(B, $);
              };
              Ne(X, (B) => {
                p(i) == "text" ? B(rt) : B(ce, false);
              }, true);
            }
            z(k, S);
          };
          Ne(E, (k) => {
            p(i) == "image" ? k(O) : k(N, false);
          });
        }
        z(v, m);
      };
      Ne(w, (v) => {
        p(s) != null && v(M);
      });
    }
    $e("change", c, l), z(e, o), It();
  }
  const Wi = "" + new URL("popcap_pak_wasm_bg-72QsE0QA.wasm", import.meta.url).href, qi = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let i;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const s = atob(r);
        i = new Uint8Array(s.length);
        for (let f = 0; f < s.length; f++) i[f] = s.charCodeAt(f);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(i, e);
    } else {
      const r = await fetch(t), i = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
      else {
        const s = await r.arrayBuffer();
        n = await WebAssembly.instantiate(s, e);
      }
    }
    return n.instance.exports;
  };
  let x;
  function Jn(e) {
    x = e;
  }
  function ct(e, t) {
    return e = e >>> 0, er().subarray(e / 1, e / 1 + t);
  }
  function Le(e, t) {
    return e = e >>> 0, Vi(e, t);
  }
  let lt = null;
  function er() {
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
  const zi = 2146435072;
  let mt = 0;
  function Vi(e, t) {
    return mt += t, mt >= zi && (_t = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), _t.decode(), mt = t), _t.decode(er().subarray(e, e + t));
  }
  const on = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_entry_free(e >>> 0, 1)), an = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_pak_free(e >>> 0, 1));
  class ze {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(ze.prototype);
      return n.__wbg_ptr = t, on.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, on.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_entry_free(t, 0);
    }
    name_lossy() {
      let t, n;
      try {
        const s = x.entry_name_lossy(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Le(r, i);
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
        const s = x.entry_name(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Le(r, i);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    path() {
      let t, n;
      try {
        const s = x.entry_path(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Le(r, i);
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
  class Rt {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, an.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_pak_free(t, 0);
    }
    constructor(t) {
      const n = x.pak_new(t);
      if (n[2]) throw Fe(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, an.register(this, this.__wbg_ptr, this), this;
    }
    entry(t) {
      return x.pak_entry(this.__wbg_ptr, t);
    }
    get length() {
      return x.pak_length(this.__wbg_ptr) >>> 0;
    }
  }
  Symbol.dispose && (Rt.prototype[Symbol.dispose] = Rt.prototype.free);
  function tr(e, t) {
    return Error(Le(e, t));
  }
  function nr(e) {
    return e === void 0;
  }
  function rr(e, t) {
    throw new Error(Le(e, t));
  }
  function ir(e) {
    return ze.__wrap(e);
  }
  function sr(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function fr(e) {
    return e.length;
  }
  function lr(e) {
    return new Uint8Array(e);
  }
  function or(e, t, n) {
    Uint8Array.prototype.set.call(ct(e, t), n);
  }
  function ar() {
    const e = x.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const C = await qi({
    "./popcap_pak_wasm_bg.js": {
      __wbg_entry_new: ir,
      __wbg_new_6421f6084cc5bc5a: lr,
      __wbg_length_22ac23eaec9d8053: fr,
      __wbg_prototypesetcall_dfe9b766cdc1f1fd: or,
      __wbg_instanceof_ArrayBuffer_f3320d2419cd0355: sr,
      __wbg___wbindgen_throw_dd24417ed36fc46e: rr,
      __wbg_Error_52673b7de5a0ca89: tr,
      __wbg___wbindgen_is_undefined_f6b95eab589e0269: nr,
      __wbindgen_init_externref_table: ar
    }
  }, Wi), $i = C.memory, Yi = C.__wbg_entry_free, Hi = C.__wbg_pak_free, Ki = C.entry_name, Gi = C.entry_name_lossy, Qi = C.entry_name_raw, Xi = C.entry_path, Zi = C.entry_path_lossy, Ji = C.entry_path_raw, es = C.entry_readFileData, ts = C.pak_entry, ns = C.pak_length, rs = C.pak_new, is = C.__wbindgen_externrefs, ss = C.__externref_table_dealloc, fs = C.__wbindgen_free, ur = C.__wbindgen_start, ls = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: ss,
    __wbg_entry_free: Yi,
    __wbg_pak_free: Hi,
    __wbindgen_externrefs: is,
    __wbindgen_free: fs,
    __wbindgen_start: ur,
    entry_name: Ki,
    entry_name_lossy: Gi,
    entry_name_raw: Qi,
    entry_path: Xi,
    entry_path_lossy: Zi,
    entry_path_raw: Ji,
    entry_readFileData: es,
    memory: $i,
    pak_entry: ts,
    pak_length: ns,
    pak_new: rs
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Jn(ls);
  ur();
  const os = Object.freeze(Object.defineProperty({
    __proto__: null,
    Entry: ze,
    Pak: Rt,
    __wbg_Error_52673b7de5a0ca89: tr,
    __wbg___wbindgen_is_undefined_f6b95eab589e0269: nr,
    __wbg___wbindgen_throw_dd24417ed36fc46e: rr,
    __wbg_entry_new: ir,
    __wbg_instanceof_ArrayBuffer_f3320d2419cd0355: sr,
    __wbg_length_22ac23eaec9d8053: fr,
    __wbg_new_6421f6084cc5bc5a: lr,
    __wbg_prototypesetcall_dfe9b766cdc1f1fd: or,
    __wbg_set_wasm: Jn,
    __wbindgen_init_externref_table: ar
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var as = Ae('<div style="margin: 0.2em; display: flex; flex: 1;"><!></div>');
  function us(e) {
    var t = as(), n = J(t);
    ji(n, {
      get popcapPak() {
        return os;
      }
    }), z(e, t);
  }
  yi(us, {
    target: document.body
  });
})();
