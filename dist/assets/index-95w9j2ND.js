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
  var _a, _t2, _f, _e2, _i2, _s2, _r2, _n2, _l, _pe_instances, o_fn, a_fn, u_fn, _t3, _f2, _e3, _i3, _s3, _r3, _n3, _l2, _o, _a2, _u, __, _h, _d, _v, _p, _c, _m, _zr_instances, E_fn, x_fn, y_fn, g_fn, w_fn, b_fn, _t4, _f3, _e4, _i4, _s4, _r4, _n4;
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
  const fr = "5";
  typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(fr);
  let et = false, lr = false;
  function or() {
    et = true;
  }
  or();
  const ar = 1, ur = 2, cr = 16, _r = 2, dr = 4, hr = 8, vr = 2, R = /* @__PURE__ */ Symbol(), pr = "http://www.w3.org/1999/xhtml", Et = false;
  var gt = Array.isArray, gr = Array.prototype.indexOf, je = Array.prototype.includes, wt = Array.from, wr = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, cn = Object.getOwnPropertyDescriptors, yr = Object.prototype, br = Array.prototype, Ct = Object.getPrototypeOf, Gt = Object.isExtensible;
  function mr(e) {
    return e();
  }
  function xt(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  function _n() {
    var e, t, n = new Promise((r, i) => {
      e = r, t = i;
    });
    return {
      promise: n,
      resolve: e,
      reject: t
    };
  }
  function dn(e, t) {
    if (Array.isArray(e)) return e;
    if (!(Symbol.iterator in e)) return Array.from(e);
    const n = [];
    for (const r of e) if (n.push(r), n.length === t) break;
    return n;
  }
  const C = 2, kt = 4, tt = 8, hn = 1 << 24, le = 16, Q = 32, Ae = 64, Mt = 128, H = 512, F = 1024, I = 2048, oe = 4096, z = 8192, ie = 16384, Nt = 32768, We = 65536, Xt = 1 << 17, vn = 1 << 18, Ye = 1 << 19, pn = 1 << 20, he = 1 << 25, ke = 32768, St = 1 << 21, Lt = 1 << 22, ve = 1 << 23, Be = /* @__PURE__ */ Symbol("$state"), Er = /* @__PURE__ */ Symbol("legacy props"), xr = /* @__PURE__ */ Symbol(""), Re = new class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function kr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Sr() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function Ar(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Tr() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Or(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Pr() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Fr() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Rr() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Dr() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function Cr() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  function Mr() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function gn(e) {
    return e === this.v;
  }
  function Nr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function wn(e) {
    return !Nr(e, this.v);
  }
  let T = null;
  function qe(e) {
    T = e;
  }
  function It(e, t = false, n) {
    T = {
      p: T,
      i: false,
      c: null,
      e: null,
      s: e,
      x: null,
      l: et && !t ? {
        s: null,
        u: null,
        $: []
      } : null
    };
  }
  function Ut(e) {
    var t = T, n = t.e;
    if (n !== null) {
      t.e = null;
      for (var r of n) Ln(r);
    }
    return t.i = true, T = t.p, {};
  }
  function nt() {
    return !et || T !== null && T.l === null;
  }
  let De = [];
  function Lr() {
    var e = De;
    De = [], xt(e);
  }
  function me(e) {
    if (De.length === 0) {
      var t = De;
      queueMicrotask(() => {
        t === De && Lr();
      });
    }
    De.push(e);
  }
  function yn(e) {
    var t = b;
    if (t === null) return w.f |= ve, e;
    if ((t.f & Nt) === 0) {
      if ((t.f & Mt) === 0) throw e;
      t.b.error(e);
    } else ze(e, t);
  }
  function ze(e, t) {
    for (; t !== null; ) {
      if ((t.f & Mt) !== 0) try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
      t = t.parent;
    }
    throw e;
  }
  const Ir = -7169;
  function O(e, t) {
    e.f = e.f & Ir | t;
  }
  function Bt(e) {
    (e.f & H) !== 0 || e.deps === null ? O(e, F) : O(e, oe);
  }
  function bn(e) {
    if (e !== null) for (const t of e) (t.f & C) === 0 || (t.f & ke) === 0 || (t.f ^= ke, bn(t.deps));
  }
  function mn(e, t, n) {
    (e.f & I) !== 0 ? t.add(e) : (e.f & oe) !== 0 && n.add(e), bn(e.deps), O(e, F);
  }
  const lt = /* @__PURE__ */ new Set();
  let S = null, Z = null, X = [], jt = null, At = false;
  const _pe = class _pe {
    constructor() {
      __privateAdd(this, _pe_instances);
      __publicField(this, "committed", false);
      __publicField(this, "current", /* @__PURE__ */ new Map());
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      __privateAdd(this, _t2, /* @__PURE__ */ new Set());
      __privateAdd(this, _f, /* @__PURE__ */ new Set());
      __privateAdd(this, _e2, 0);
      __privateAdd(this, _i2, 0);
      __privateAdd(this, _s2, null);
      __privateAdd(this, _r2, /* @__PURE__ */ new Set());
      __privateAdd(this, _n2, /* @__PURE__ */ new Set());
      __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
      __publicField(this, "is_fork", false);
      __privateAdd(this, _l, false);
    }
    is_deferred() {
      return this.is_fork || __privateGet(this, _i2) > 0;
    }
    process(t) {
      var _a3;
      X = [], this.apply();
      var n = [], r = [];
      for (const i of t) __privateMethod(this, _pe_instances, o_fn).call(this, i, n, r);
      if (this.is_deferred()) {
        __privateMethod(this, _pe_instances, a_fn).call(this, r), __privateMethod(this, _pe_instances, a_fn).call(this, n);
        for (const i of this.skipped_effects) kn(i);
      } else {
        for (const i of __privateGet(this, _t2)) i();
        __privateGet(this, _t2).clear(), __privateGet(this, _e2) === 0 && __privateMethod(this, _pe_instances, u_fn).call(this), S = null, Zt(r), Zt(n), (_a3 = __privateGet(this, _s2)) == null ? void 0 : _a3.resolve();
      }
      Z = null;
    }
    capture(t, n) {
      n !== R && !this.previous.has(t) && this.previous.set(t, n), (t.f & ve) === 0 && (this.current.set(t, t.v), Z == null ? void 0 : Z.set(t, t.v));
    }
    activate() {
      S = this, this.apply();
    }
    deactivate() {
      S === this && (S = null, Z = null);
    }
    flush() {
      if (this.activate(), X.length > 0) {
        if (Ur(), S !== null && S !== this) return;
      } else __privateGet(this, _e2) === 0 && this.process([]);
      this.deactivate();
    }
    discard() {
      for (const t of __privateGet(this, _f)) t(this);
      __privateGet(this, _f).clear();
    }
    increment(t) {
      __privateSet(this, _e2, __privateGet(this, _e2) + 1), t && __privateSet(this, _i2, __privateGet(this, _i2) + 1);
    }
    decrement(t) {
      __privateSet(this, _e2, __privateGet(this, _e2) - 1), t && __privateSet(this, _i2, __privateGet(this, _i2) - 1), !__privateGet(this, _l) && (__privateSet(this, _l, true), me(() => {
        __privateSet(this, _l, false), this.is_deferred() ? X.length > 0 && this.flush() : this.revive();
      }));
    }
    revive() {
      for (const t of __privateGet(this, _r2)) __privateGet(this, _n2).delete(t), O(t, I), fe(t);
      for (const t of __privateGet(this, _n2)) O(t, oe), fe(t);
      this.flush();
    }
    oncommit(t) {
      __privateGet(this, _t2).add(t);
    }
    ondiscard(t) {
      __privateGet(this, _f).add(t);
    }
    settled() {
      return (__privateGet(this, _s2) ?? __privateSet(this, _s2, _n())).promise;
    }
    static ensure() {
      if (S === null) {
        const t = S = new _pe();
        lt.add(S), me(() => {
          S === t && t.flush();
        });
      }
      return S;
    }
    apply() {
    }
  };
  _t2 = new WeakMap();
  _f = new WeakMap();
  _e2 = new WeakMap();
  _i2 = new WeakMap();
  _s2 = new WeakMap();
  _r2 = new WeakMap();
  _n2 = new WeakMap();
  _l = new WeakMap();
  _pe_instances = new WeakSet();
  o_fn = function(t, n, r) {
    t.f ^= F;
    for (var i = t.first, s = null; i !== null; ) {
      var f = i.f, l = (f & (Q | Ae)) !== 0, a = l && (f & F) !== 0, o = a || (f & z) !== 0 || this.skipped_effects.has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= F : s !== null && (f & (kt | tt | hn)) !== 0 ? s.b.defer_effect(i) : (f & kt) !== 0 ? n.push(i) : it(i) && ((f & le) !== 0 && __privateGet(this, _n2).add(i), Qe(i));
        var _ = i.first;
        if (_ !== null) {
          i = _;
          continue;
        }
      }
      var d = i.parent;
      for (i = i.next; i === null && d !== null; ) d === s && (s = null), i = d.next, d = d.parent;
    }
  };
  a_fn = function(t) {
    for (var n = 0; n < t.length; n += 1) mn(t[n], __privateGet(this, _r2), __privateGet(this, _n2));
  };
  u_fn = function() {
    var _a3;
    if (lt.size > 1) {
      this.previous.clear();
      var t = Z, n = true;
      for (const i of lt) {
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
          var r = X;
          X = [];
          const l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (const o of s) En(o, f, l, a);
          if (X.length > 0) {
            S = i, i.apply();
            for (const o of X) __privateMethod(_a3 = i, _pe_instances, o_fn).call(_a3, o, [], []);
            i.deactivate();
          }
          X = r;
        }
      }
      S = null, Z = t;
    }
    this.committed = true, lt.delete(this);
  };
  let pe = _pe;
  function Ur() {
    At = true;
    var e = null;
    try {
      for (var t = 0; X.length > 0; ) {
        var n = pe.ensure();
        if (t++ > 1e3) {
          var r, i;
          Br();
        }
        n.process(X), ge.clear();
      }
    } finally {
      At = false, jt = null;
    }
  }
  function Br() {
    try {
      Pr();
    } catch (e) {
      ze(e, jt);
    }
  }
  let re = null;
  function Zt(e) {
    var t = e.length;
    if (t !== 0) {
      for (var n = 0; n < t; ) {
        var r = e[n++];
        if ((r.f & (ie | z)) === 0 && it(r) && (re = /* @__PURE__ */ new Set(), Qe(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Bn(r) : r.fn = null), (re == null ? void 0 : re.size) > 0)) {
          ge.clear();
          for (const i of re) {
            if ((i.f & (ie | z)) !== 0) continue;
            const s = [
              i
            ];
            let f = i.parent;
            for (; f !== null; ) re.has(f) && (re.delete(f), s.push(f)), f = f.parent;
            for (let l = s.length - 1; l >= 0; l--) {
              const a = s[l];
              (a.f & (ie | z)) === 0 && Qe(a);
            }
          }
          re.clear();
        }
      }
      re = null;
    }
  }
  function En(e, t, n, r) {
    if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const i of e.reactions) {
      const s = i.f;
      (s & C) !== 0 ? En(i, t, n, r) : (s & (Lt | le)) !== 0 && (s & I) === 0 && xn(i, t, r) && (O(i, I), fe(i));
    }
  }
  function xn(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null) for (const i of e.deps) {
      if (je.call(t, i)) return true;
      if ((i.f & C) !== 0 && xn(i, t, n)) return n.set(i, true), true;
    }
    return n.set(e, false), false;
  }
  function fe(e) {
    for (var t = jt = e; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (At && t === b && (n & le) !== 0 && (n & vn) === 0) return;
      if ((n & (Ae | Q)) !== 0) {
        if ((n & F) === 0) return;
        t.f ^= F;
      }
    }
    X.push(t);
  }
  function kn(e) {
    if (!((e.f & Q) !== 0 && (e.f & F) !== 0)) {
      O(e, F);
      for (var t = e.first; t !== null; ) kn(t), t = t.next;
    }
  }
  function jr(e) {
    let t = 0, n = Se(0), r;
    return () => {
      $t() && (p(n), ti(() => (t === 0 && (r = be(() => e(() => Ze(n)))), t += 1, () => {
        me(() => {
          t -= 1, t === 0 && (r == null ? void 0 : r(), r = void 0, Ze(n));
        });
      })));
    };
  }
  var Wr = We | Ye | Mt;
  function qr(e, t, n) {
    new zr(e, t, n);
  }
  class zr {
    constructor(t, n, r) {
      __privateAdd(this, _zr_instances);
      __publicField(this, "parent");
      __publicField(this, "is_pending", false);
      __privateAdd(this, _t3);
      __privateAdd(this, _f2, null);
      __privateAdd(this, _e3);
      __privateAdd(this, _i3);
      __privateAdd(this, _s3);
      __privateAdd(this, _r3, null);
      __privateAdd(this, _n3, null);
      __privateAdd(this, _l2, null);
      __privateAdd(this, _o, null);
      __privateAdd(this, _a2, null);
      __privateAdd(this, _u, 0);
      __privateAdd(this, __, 0);
      __privateAdd(this, _h, false);
      __privateAdd(this, _d, false);
      __privateAdd(this, _v, /* @__PURE__ */ new Set());
      __privateAdd(this, _p, /* @__PURE__ */ new Set());
      __privateAdd(this, _c, null);
      __privateAdd(this, _m, jr(() => (__privateSet(this, _c, Se(__privateGet(this, _u))), () => {
        __privateSet(this, _c, null);
      })));
      __privateSet(this, _t3, t), __privateSet(this, _e3, n), __privateSet(this, _i3, r), this.parent = b.b, this.is_pending = !!__privateGet(this, _e3).pending, __privateSet(this, _s3, Yt(() => {
        b.b = this;
        {
          var i = __privateMethod(this, _zr_instances, y_fn).call(this);
          try {
            __privateSet(this, _r3, Y(() => r(i)));
          } catch (s) {
            this.error(s);
          }
          __privateGet(this, __) > 0 ? __privateMethod(this, _zr_instances, w_fn).call(this) : this.is_pending = false;
        }
        return () => {
          var _a3;
          (_a3 = __privateGet(this, _a2)) == null ? void 0 : _a3.remove();
        };
      }, Wr));
    }
    defer_effect(t) {
      mn(t, __privateGet(this, _v), __privateGet(this, _p));
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!__privateGet(this, _e3).pending;
    }
    update_pending_count(t) {
      __privateMethod(this, _zr_instances, b_fn).call(this, t), __privateSet(this, _u, __privateGet(this, _u) + t), !(!__privateGet(this, _c) || __privateGet(this, _h)) && (__privateSet(this, _h, true), me(() => {
        __privateSet(this, _h, false), __privateGet(this, _c) && Ve(__privateGet(this, _c), __privateGet(this, _u));
      }));
    }
    get_effect_pending() {
      return __privateGet(this, _m).call(this), p(__privateGet(this, _c));
    }
    error(t) {
      var n = __privateGet(this, _e3).onerror;
      let r = __privateGet(this, _e3).failed;
      if (__privateGet(this, _d) || !n && !r) throw t;
      __privateGet(this, _r3) && (j(__privateGet(this, _r3)), __privateSet(this, _r3, null)), __privateGet(this, _n3) && (j(__privateGet(this, _n3)), __privateSet(this, _n3, null)), __privateGet(this, _l2) && (j(__privateGet(this, _l2)), __privateSet(this, _l2, null));
      var i = false, s = false;
      const f = () => {
        if (i) {
          Mr();
          return;
        }
        i = true, s && Cr(), pe.ensure(), __privateSet(this, _u, 0), __privateGet(this, _l2) !== null && Ee(__privateGet(this, _l2), () => {
          __privateSet(this, _l2, null);
        }), this.is_pending = this.has_pending_snippet(), __privateSet(this, _r3, __privateMethod(this, _zr_instances, g_fn).call(this, () => (__privateSet(this, _d, false), Y(() => __privateGet(this, _i3).call(this, __privateGet(this, _t3)))))), __privateGet(this, __) > 0 ? __privateMethod(this, _zr_instances, w_fn).call(this) : this.is_pending = false;
      };
      me(() => {
        try {
          s = true, n == null ? void 0 : n(t, f), s = false;
        } catch (l) {
          ze(l, __privateGet(this, _s3) && __privateGet(this, _s3).parent);
        }
        r && __privateSet(this, _l2, __privateMethod(this, _zr_instances, g_fn).call(this, () => {
          pe.ensure(), __privateSet(this, _d, true);
          try {
            return Y(() => {
              r(__privateGet(this, _t3), () => t, () => f);
            });
          } catch (l) {
            return ze(l, __privateGet(this, _s3).parent), null;
          } finally {
            __privateSet(this, _d, false);
          }
        }));
      });
    }
  }
  _t3 = new WeakMap();
  _f2 = new WeakMap();
  _e3 = new WeakMap();
  _i3 = new WeakMap();
  _s3 = new WeakMap();
  _r3 = new WeakMap();
  _n3 = new WeakMap();
  _l2 = new WeakMap();
  _o = new WeakMap();
  _a2 = new WeakMap();
  _u = new WeakMap();
  __ = new WeakMap();
  _h = new WeakMap();
  _d = new WeakMap();
  _v = new WeakMap();
  _p = new WeakMap();
  _c = new WeakMap();
  _m = new WeakMap();
  _zr_instances = new WeakSet();
  E_fn = function() {
    try {
      __privateSet(this, _r3, Y(() => __privateGet(this, _i3).call(this, __privateGet(this, _t3))));
    } catch (t) {
      this.error(t);
    }
  };
  x_fn = function() {
    const t = __privateGet(this, _e3).pending;
    t && (__privateSet(this, _n3, Y(() => t(__privateGet(this, _t3)))), me(() => {
      var n = __privateMethod(this, _zr_instances, y_fn).call(this);
      __privateSet(this, _r3, __privateMethod(this, _zr_instances, g_fn).call(this, () => (pe.ensure(), Y(() => __privateGet(this, _i3).call(this, n))))), __privateGet(this, __) > 0 ? __privateMethod(this, _zr_instances, w_fn).call(this) : (Ee(__privateGet(this, _n3), () => {
        __privateSet(this, _n3, null);
      }), this.is_pending = false);
    }));
  };
  y_fn = function() {
    var t = __privateGet(this, _t3);
    return this.is_pending && (__privateSet(this, _a2, se()), __privateGet(this, _t3).before(__privateGet(this, _a2)), t = __privateGet(this, _a2)), t;
  };
  g_fn = function(t) {
    var n = b, r = w, i = T;
    ne(__privateGet(this, _s3)), G(__privateGet(this, _s3)), qe(__privateGet(this, _s3).ctx);
    try {
      return t();
    } catch (s) {
      return yn(s), null;
    } finally {
      ne(n), G(r), qe(i);
    }
  };
  w_fn = function() {
    const t = __privateGet(this, _e3).pending;
    __privateGet(this, _r3) !== null && (__privateSet(this, _o, document.createDocumentFragment()), __privateGet(this, _o).append(__privateGet(this, _a2)), qn(__privateGet(this, _r3), __privateGet(this, _o))), __privateGet(this, _n3) === null && __privateSet(this, _n3, Y(() => t(__privateGet(this, _t3))));
  };
  b_fn = function(t) {
    var _a3;
    if (!this.has_pending_snippet()) {
      this.parent && __privateMethod(_a3 = this.parent, _zr_instances, b_fn).call(_a3, t);
      return;
    }
    if (__privateSet(this, __, __privateGet(this, __) + t), __privateGet(this, __) === 0) {
      this.is_pending = false;
      for (const n of __privateGet(this, _v)) O(n, I), fe(n);
      for (const n of __privateGet(this, _p)) O(n, oe), fe(n);
      __privateGet(this, _v).clear(), __privateGet(this, _p).clear(), __privateGet(this, _n3) && Ee(__privateGet(this, _n3), () => {
        __privateSet(this, _n3, null);
      }), __privateGet(this, _o) && (__privateGet(this, _t3).before(__privateGet(this, _o)), __privateSet(this, _o, null));
    }
  };
  function Vr(e, t, n, r) {
    const i = nt() ? yt : Wt;
    var s = e.filter((u) => !u.settled);
    if (n.length === 0 && s.length === 0) {
      r(t.map(i));
      return;
    }
    var f = S, l = b, a = $r(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((u) => u.promise)) : null;
    function _(u) {
      a();
      try {
        r(u);
      } catch (h) {
        (l.f & ie) === 0 && ze(h, l);
      }
      f == null ? void 0 : f.deactivate(), Tt();
    }
    if (n.length === 0) {
      o.then(() => _(t.map(i)));
      return;
    }
    function d() {
      a(), Promise.all(n.map((u) => Yr(u))).then((u) => _([
        ...t.map(i),
        ...u
      ])).catch((u) => ze(u, l));
    }
    o ? o.then(d) : d();
  }
  function $r() {
    var e = b, t = w, n = T, r = S;
    return function(s = true) {
      ne(e), G(t), qe(n), s && (r == null ? void 0 : r.activate());
    };
  }
  function Tt() {
    ne(null), G(null), qe(null);
  }
  function yt(e) {
    var t = C | I, n = w !== null && (w.f & C) !== 0 ? w : null;
    return b !== null && (b.f |= Ye), {
      ctx: T,
      deps: null,
      effects: null,
      equals: gn,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: R,
      wv: 0,
      parent: n ?? b,
      ac: null
    };
  }
  function Yr(e, t, n) {
    let r = b;
    r === null && Sr();
    var i = r.b, s = void 0, f = Se(R), l = !w, a = /* @__PURE__ */ new Map();
    return ei(() => {
      var _a3;
      var o = _n();
      s = o.promise;
      try {
        Promise.resolve(e()).then(o.resolve, o.reject).then(() => {
          _ === S && _.committed && _.deactivate(), Tt();
        });
      } catch (h) {
        o.reject(h), Tt();
      }
      var _ = S;
      if (l) {
        var d = i.is_rendered();
        i.update_pending_count(1), _.increment(d), (_a3 = a.get(_)) == null ? void 0 : _a3.reject(Re), a.delete(_), a.set(_, o);
      }
      const u = (h, c = void 0) => {
        if (_.activate(), c) c !== Re && (f.f |= ve, Ve(f, c));
        else {
          (f.f & ve) !== 0 && (f.f ^= ve), Ve(f, h);
          for (const [g, y] of a) {
            if (a.delete(g), g === _) break;
            y.reject(Re);
          }
        }
        l && (i.update_pending_count(-1), _.decrement(d));
      };
      o.promise.then(u, (h) => u(null, h || "unknown"));
    }), Nn(() => {
      for (const o of a.values()) o.reject(Re);
    }), new Promise((o) => {
      function _(d) {
        function u() {
          d === s ? o(f) : _(s);
        }
        d.then(u, u);
      }
      _(s);
    });
  }
  function Sn(e) {
    const t = yt(e);
    return zn(t), t;
  }
  function Wt(e) {
    const t = yt(e);
    return t.equals = wn, t;
  }
  function An(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) j(t[n]);
    }
  }
  function Hr(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & C) === 0) return (t.f & ie) === 0 ? t : null;
      t = t.parent;
    }
    return null;
  }
  function qt(e) {
    var t, n = b;
    ne(Hr(e));
    try {
      e.f &= ~ke, An(e), t = Hn(e);
    } finally {
      ne(n);
    }
    return t;
  }
  function Tn(e) {
    var t = qt(e);
    if (!e.equals(t) && (e.wv = $n(), (!(S == null ? void 0 : S.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
      O(e, F);
      return;
    }
    we || (Z !== null ? ($t() || (S == null ? void 0 : S.is_fork)) && Z.set(e, t) : Bt(e));
  }
  let Ot = /* @__PURE__ */ new Set();
  const ge = /* @__PURE__ */ new Map();
  let On = false;
  function Se(e, t) {
    var n = {
      f: 0,
      v: e,
      reactions: null,
      equals: gn,
      rv: 0,
      wv: 0
    };
    return n;
  }
  function _e(e, t) {
    const n = Se(e);
    return zn(n), n;
  }
  function Ce(e, t = false, n = true) {
    var _a3;
    const r = Se(e);
    return t || (r.equals = wn), et && n && T !== null && T.l !== null && ((_a3 = T.l).s ?? (_a3.s = [])).push(r), r;
  }
  function D(e, t, n = false) {
    w !== null && (!J || (w.f & Xt) !== 0) && nt() && (w.f & (C | le | Lt | Xt)) !== 0 && (K === null || !je.call(K, e)) && Dr();
    let r = n ? Me(t) : t;
    return Ve(e, r);
  }
  function Ve(e, t) {
    if (!e.equals(t)) {
      var n = e.v;
      we ? ge.set(e, t) : ge.set(e, n), e.v = t;
      var r = pe.ensure();
      if (r.capture(e, n), (e.f & C) !== 0) {
        const i = e;
        (e.f & I) !== 0 && qt(i), Bt(i);
      }
      e.wv = $n(), Pn(e, I), nt() && b !== null && (b.f & F) !== 0 && (b.f & (Q | Ae)) === 0 && ($ === null ? ii([
        e
      ]) : $.push(e)), !r.is_fork && Ot.size > 0 && !On && Kr();
    }
    return t;
  }
  function Kr() {
    On = false;
    for (const e of Ot) (e.f & F) !== 0 && O(e, oe), it(e) && Qe(e);
    Ot.clear();
  }
  function Ze(e) {
    D(e, e.v + 1);
  }
  function Pn(e, t) {
    var n = e.reactions;
    if (n !== null) for (var r = nt(), i = n.length, s = 0; s < i; s++) {
      var f = n[s], l = f.f;
      if (!(!r && f === b)) {
        var a = (l & I) === 0;
        if (a && O(f, t), (l & C) !== 0) {
          var o = f;
          Z == null ? void 0 : Z.delete(o), (l & ke) === 0 && (l & H && (f.f |= ke), Pn(o, oe));
        } else a && ((l & le) !== 0 && re !== null && re.add(f), fe(f));
      }
    }
  }
  function Me(e) {
    if (typeof e != "object" || e === null || Be in e) return e;
    const t = Ct(e);
    if (t !== yr && t !== br) return e;
    var n = /* @__PURE__ */ new Map(), r = gt(e), i = _e(0), s = xe, f = (l) => {
      if (xe === s) return l();
      var a = w, o = xe;
      G(null), tn(s);
      var _ = l();
      return G(a), tn(o), _;
    };
    return r && n.set("length", _e(e.length)), new Proxy(e, {
      defineProperty(l, a, o) {
        (!("value" in o) || o.configurable === false || o.enumerable === false || o.writable === false) && Fr();
        var _ = n.get(a);
        return _ === void 0 ? _ = f(() => {
          var d = _e(o.value);
          return n.set(a, d), d;
        }) : D(_, o.value, true), true;
      },
      deleteProperty(l, a) {
        var o = n.get(a);
        if (o === void 0) {
          if (a in l) {
            const _ = f(() => _e(R));
            n.set(a, _), Ze(i);
          }
        } else D(o, R), Ze(i);
        return true;
      },
      get(l, a, o) {
        var _a3;
        if (a === Be) return e;
        var _ = n.get(a), d = a in l;
        if (_ === void 0 && (!d || ((_a3 = Ue(l, a)) == null ? void 0 : _a3.writable)) && (_ = f(() => {
          var h = Me(d ? l[a] : R), c = _e(h);
          return c;
        }), n.set(a, _)), _ !== void 0) {
          var u = p(_);
          return u === R ? void 0 : u;
        }
        return Reflect.get(l, a, o);
      },
      getOwnPropertyDescriptor(l, a) {
        var o = Reflect.getOwnPropertyDescriptor(l, a);
        if (o && "value" in o) {
          var _ = n.get(a);
          _ && (o.value = p(_));
        } else if (o === void 0) {
          var d = n.get(a), u = d == null ? void 0 : d.v;
          if (d !== void 0 && u !== R) return {
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
        if (a === Be) return true;
        var o = n.get(a), _ = o !== void 0 && o.v !== R || Reflect.has(l, a);
        if (o !== void 0 || b !== null && (!_ || ((_a3 = Ue(l, a)) == null ? void 0 : _a3.writable))) {
          o === void 0 && (o = f(() => {
            var u = _ ? Me(l[a]) : R, h = _e(u);
            return h;
          }), n.set(a, o));
          var d = p(o);
          if (d === R) return false;
        }
        return _;
      },
      set(l, a, o, _) {
        var _a3;
        var d = n.get(a), u = a in l;
        if (r && a === "length") for (var h = o; h < d.v; h += 1) {
          var c = n.get(h + "");
          c !== void 0 ? D(c, R) : h in l && (c = f(() => _e(R)), n.set(h + "", c));
        }
        if (d === void 0) (!u || ((_a3 = Ue(l, a)) == null ? void 0 : _a3.writable)) && (d = f(() => _e(void 0)), D(d, Me(o)), n.set(a, d));
        else {
          u = d.v !== R;
          var g = f(() => Me(o));
          D(d, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(l, a);
        if ((y == null ? void 0 : y.set) && y.set.call(_, o), !u) {
          if (r && typeof a == "string") {
            var N = n.get("length"), v = Number(a);
            Number.isInteger(v) && v >= N.v && D(N, v + 1);
          }
          Ze(i);
        }
        return true;
      },
      ownKeys(l) {
        p(i);
        var a = Reflect.ownKeys(l).filter((d) => {
          var u = n.get(d);
          return u === void 0 || u.v !== R;
        });
        for (var [o, _] of n) _.v !== R && !(o in l) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        Rr();
      }
    });
  }
  var Jt, Fn, Rn, Dn;
  function Gr() {
    if (Jt === void 0) {
      Jt = window, Fn = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, n = Text.prototype;
      Rn = Ue(t, "firstChild").get, Dn = Ue(t, "nextSibling").get, Gt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Gt(n) && (n.__t = void 0);
    }
  }
  function se(e = "") {
    return document.createTextNode(e);
  }
  function zt(e) {
    return Rn.call(e);
  }
  function rt(e) {
    return Dn.call(e);
  }
  function te(e, t) {
    return zt(e);
  }
  function ut(e, t = false) {
    {
      var n = zt(e);
      return n instanceof Comment && n.data === "" ? rt(n) : n;
    }
  }
  function Ne(e, t = 1, n = false) {
    let r = e;
    for (; t--; ) r = rt(r);
    return r;
  }
  function Xr(e) {
    e.textContent = "";
  }
  function Cn() {
    return false;
  }
  function Vt(e) {
    var t = w, n = b;
    G(null), ne(null);
    try {
      return e();
    } finally {
      G(t), ne(n);
    }
  }
  function Mn(e) {
    b === null && (w === null && Or(), Tr()), we && Ar();
  }
  function Zr(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
  }
  function ae(e, t, n) {
    var r = b;
    r !== null && (r.f & z) !== 0 && (e |= z);
    var i = {
      ctx: T,
      deps: null,
      nodes: null,
      f: e | I | H,
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
      Qe(i), i.f |= Nt;
    } catch (l) {
      throw j(i), l;
    }
    else t !== null && fe(i);
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & Ye) === 0 && (s = s.first, (e & le) !== 0 && (e & We) !== 0 && s !== null && (s.f |= We)), s !== null && (s.parent = r, r !== null && Zr(s, r), w !== null && (w.f & C) !== 0 && (e & Ae) === 0)) {
      var f = w;
      (f.effects ?? (f.effects = [])).push(s);
    }
    return i;
  }
  function $t() {
    return w !== null && !J;
  }
  function Nn(e) {
    const t = ae(tt, null, false);
    return O(t, F), t.teardown = e, t;
  }
  function Qt(e) {
    Mn();
    var t = b.f, n = !w && (t & Q) !== 0 && (t & Nt) === 0;
    if (n) {
      var r = T;
      (r.e ?? (r.e = [])).push(e);
    } else return Ln(e);
  }
  function Ln(e) {
    return ae(kt | pn, e, false);
  }
  function Jr(e) {
    return Mn(), ae(tt | pn, e, true);
  }
  function Qr(e) {
    pe.ensure();
    const t = ae(Ae | Ye, e, true);
    return (n = {}) => new Promise((r) => {
      n.outro ? Ee(t, () => {
        j(t), r(void 0);
      }) : (j(t), r(void 0));
    });
  }
  function ei(e) {
    return ae(Lt | Ye, e, true);
  }
  function ti(e, t = 0) {
    return ae(tt | t, e, true);
  }
  function Je(e, t = [], n = [], r = []) {
    Vr(r, t, n, (i) => {
      ae(tt, () => e(...i.map(p)), true);
    });
  }
  function Yt(e, t = 0) {
    var n = ae(le | t, e, true);
    return n;
  }
  function Y(e) {
    return ae(Q | Ye, e, true);
  }
  function In(e) {
    var t = e.teardown;
    if (t !== null) {
      const n = we, r = w;
      en(true), G(null);
      try {
        t.call(null);
      } finally {
        en(n), G(r);
      }
    }
  }
  function Un(e, t = false) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
      const i = n.ac;
      i !== null && Vt(() => {
        i.abort(Re);
      });
      var r = n.next;
      (n.f & Ae) !== 0 ? n.parent = null : j(n, t), n = r;
    }
  }
  function ni(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next;
      (t.f & Q) === 0 && j(t), t = n;
    }
  }
  function j(e, t = true) {
    var n = false;
    (t || (e.f & vn) !== 0) && e.nodes !== null && e.nodes.end !== null && (ri(e.nodes.start, e.nodes.end), n = true), Un(e, t && !n), pt(e, 0), O(e, ie);
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const s of r) s.stop();
    In(e);
    var i = e.parent;
    i !== null && i.first !== null && Bn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
  }
  function ri(e, t) {
    for (; e !== null; ) {
      var n = e === t ? null : rt(e);
      e.remove(), e = n;
    }
  }
  function Bn(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
  }
  function Ee(e, t, n = true) {
    var r = [];
    jn(e, r, true);
    var i = () => {
      n && j(e), t && t();
    }, s = r.length;
    if (s > 0) {
      var f = () => --s || i();
      for (var l of r) l.out(f);
    } else i();
  }
  function jn(e, t, n) {
    if ((e.f & z) === 0) {
      e.f ^= z;
      var r = e.nodes && e.nodes.t;
      if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
      for (var i = e.first; i !== null; ) {
        var s = i.next, f = (i.f & We) !== 0 || (i.f & Q) !== 0 && (e.f & le) !== 0;
        jn(i, t, f ? n : false), i = s;
      }
    }
  }
  function Ht(e) {
    Wn(e, true);
  }
  function Wn(e, t) {
    if ((e.f & z) !== 0) {
      e.f ^= z, (e.f & F) === 0 && (O(e, I), fe(e));
      for (var n = e.first; n !== null; ) {
        var r = n.next, i = (n.f & We) !== 0 || (n.f & Q) !== 0;
        Wn(n, i ? t : false), n = r;
      }
      var s = e.nodes && e.nodes.t;
      if (s !== null) for (const f of s) (f.is_global || t) && f.in();
    }
  }
  function qn(e, t) {
    if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : rt(n);
      t.append(n), n = i;
    }
  }
  let ct = false, we = false;
  function en(e) {
    we = e;
  }
  let w = null, J = false;
  function G(e) {
    w = e;
  }
  let b = null;
  function ne(e) {
    b = e;
  }
  let K = null;
  function zn(e) {
    w !== null && (K === null ? K = [
      e
    ] : K.push(e));
  }
  let B = null, W = 0, $ = null;
  function ii(e) {
    $ = e;
  }
  let Vn = 1, ye = 0, xe = ye;
  function tn(e) {
    xe = e;
  }
  function $n() {
    return ++Vn;
  }
  function it(e) {
    var t = e.f;
    if ((t & I) !== 0) return true;
    if (t & C && (e.f &= ~ke), (t & oe) !== 0) {
      for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (it(s) && Tn(s), s.wv > e.wv) return true;
      }
      (t & H) !== 0 && Z === null && O(e, F);
    }
    return false;
  }
  function Yn(e, t, n = true) {
    var r = e.reactions;
    if (r !== null && !(K !== null && je.call(K, e))) for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & C) !== 0 ? Yn(s, t, false) : t === s && (n ? O(s, I) : (s.f & F) !== 0 && O(s, oe), fe(s));
    }
  }
  function Hn(e) {
    var _a3;
    var t = B, n = W, r = $, i = w, s = K, f = T, l = J, a = xe, o = e.f;
    B = null, W = 0, $ = null, w = (o & (Q | Ae)) === 0 ? e : null, K = null, qe(e.ctx), J = false, xe = ++ye, e.ac !== null && (Vt(() => {
      e.ac.abort(Re);
    }), e.ac = null);
    try {
      e.f |= St;
      var _ = e.fn, d = _(), u = e.deps, h = S == null ? void 0 : S.is_fork;
      if (B !== null) {
        var c;
        if (h || pt(e, W), u !== null && W > 0) for (u.length = W + B.length, c = 0; c < B.length; c++) u[W + c] = B[c];
        else e.deps = u = B;
        if ($t() && (e.f & H) !== 0) for (c = W; c < u.length; c++) ((_a3 = u[c]).reactions ?? (_a3.reactions = [])).push(e);
      } else !h && u !== null && W < u.length && (pt(e, W), u.length = W);
      if (nt() && $ !== null && !J && u !== null && (e.f & (C | oe | I)) === 0) for (c = 0; c < $.length; c++) Yn($[c], e);
      if (i !== null && i !== e) {
        if (ye++, i.deps !== null) for (let g = 0; g < n; g += 1) i.deps[g].rv = ye;
        if (t !== null) for (const g of t) g.rv = ye;
        $ !== null && (r === null ? r = $ : r.push(...$));
      }
      return (e.f & ve) !== 0 && (e.f ^= ve), d;
    } catch (g) {
      return yn(g);
    } finally {
      e.f ^= St, B = t, W = n, $ = r, w = i, K = s, qe(f), J = l, xe = a;
    }
  }
  function si(e, t) {
    let n = t.reactions;
    if (n !== null) {
      var r = gr.call(n, e);
      if (r !== -1) {
        var i = n.length - 1;
        i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
      }
    }
    if (n === null && (t.f & C) !== 0 && (B === null || !je.call(B, t))) {
      var s = t;
      (s.f & H) !== 0 && (s.f ^= H, s.f &= ~ke), Bt(s), An(s), pt(s, 0);
    }
  }
  function pt(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) si(e, n[r]);
  }
  function Qe(e) {
    var t = e.f;
    if ((t & ie) === 0) {
      O(e, F);
      var n = b, r = ct;
      b = e, ct = true;
      try {
        (t & (le | hn)) !== 0 ? ni(e) : Un(e), In(e);
        var i = Hn(e);
        e.teardown = typeof i == "function" ? i : null, e.wv = Vn;
        var s;
        Et && lr && (e.f & I) !== 0 && e.deps;
      } finally {
        ct = r, b = n;
      }
    }
  }
  function p(e) {
    var t = e.f, n = (t & C) !== 0;
    if (w !== null && !J) {
      var r = b !== null && (b.f & ie) !== 0;
      if (!r && (K === null || !je.call(K, e))) {
        var i = w.deps;
        if ((w.f & St) !== 0) e.rv < ye && (e.rv = ye, B === null && i !== null && i[W] === e ? W++ : B === null ? B = [
          e
        ] : B.push(e));
        else {
          (w.deps ?? (w.deps = [])).push(e);
          var s = e.reactions;
          s === null ? e.reactions = [
            w
          ] : je.call(s, w) || s.push(w);
        }
      }
    }
    if (we && ge.has(e)) return ge.get(e);
    if (n) {
      var f = e;
      if (we) {
        var l = f.v;
        return ((f.f & F) === 0 && f.reactions !== null || Gn(f)) && (l = qt(f)), ge.set(f, l), l;
      }
      var a = (f.f & H) === 0 && !J && w !== null && (ct || (w.f & H) !== 0), o = f.deps === null;
      it(f) && (a && (f.f |= H), Tn(f)), a && !o && Kn(f);
    }
    if (Z == null ? void 0 : Z.has(e)) return Z.get(e);
    if ((e.f & ve) !== 0) throw e.v;
    return e.v;
  }
  function Kn(e) {
    if (e.deps !== null) {
      e.f |= H;
      for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & C) !== 0 && (t.f & H) === 0 && Kn(t);
    }
  }
  function Gn(e) {
    if (e.v === R) return true;
    if (e.deps === null) return false;
    for (const t of e.deps) if (ge.has(t) || (t.f & C) !== 0 && Gn(t)) return true;
    return false;
  }
  function be(e) {
    var t = J;
    try {
      return J = true, e();
    } finally {
      J = t;
    }
  }
  function Xn(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (Be in e) Pt(e);
      else if (!Array.isArray(e)) for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Be in n && Pt(n);
      }
    }
  }
  function Pt(e, t = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime();
      for (let r in e) try {
        Pt(e[r], t);
      } catch {
      }
      const n = Ct(e);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = cn(n);
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
  const fi = /* @__PURE__ */ new Set(), nn = /* @__PURE__ */ new Set();
  function li(e, t, n, r = {}) {
    function i(s) {
      if (r.capture || Ge.call(t, s), !s.cancelBubble) return Vt(() => n == null ? void 0 : n.call(this, s));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? me(() => {
      t.addEventListener(e, i, r);
    }) : t.addEventListener(e, i, r), i;
  }
  function Ke(e, t, n, r, i) {
    var s = {
      capture: r,
      passive: i
    }, f = li(e, t, n, s);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Nn(() => {
      t.removeEventListener(e, f, s);
    });
  }
  let rn = null;
  function Ge(e) {
    var _a3;
    var t = this, n = t.ownerDocument, r = e.type, i = ((_a3 = e.composedPath) == null ? void 0 : _a3.call(e)) || [], s = i[0] || e.target;
    rn = e;
    var f = 0, l = rn === e && e.__root;
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
      wr(e, "currentTarget", {
        configurable: true,
        get() {
          return s || n;
        }
      });
      var _ = w, d = b;
      G(null), ne(null);
      try {
        for (var u, h = []; s !== null; ) {
          var c = s.assignedSlot || s.parentNode || s.host || null;
          try {
            var g = s["__" + r];
            g != null && (!s.disabled || e.target === s) && g.call(s, e);
          } catch (y) {
            u ? h.push(y) : u = y;
          }
          if (e.cancelBubble || c === t || c === null) break;
          s = c;
        }
        if (u) {
          for (let y of h) queueMicrotask(() => {
            throw y;
          });
          throw u;
        }
      } finally {
        e.__root = t, delete e.currentTarget, G(_), ne(d);
      }
    }
  }
  function oi(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
  }
  function Kt(e, t) {
    var n = b;
    n.nodes === null && (n.nodes = {
      start: e,
      end: t,
      a: null,
      t: null
    });
  }
  function Te(e, t) {
    var n = (t & vr) !== 0, r, i = !e.startsWith("<!>");
    return () => {
      r === void 0 && (r = oi(i ? e : "<!>" + e), r = zt(r));
      var s = n || Fn ? document.importNode(r, true) : r.cloneNode(true);
      return Kt(s, s), s;
    };
  }
  function sn(e = "") {
    {
      var t = se(e + "");
      return Kt(t, t), t;
    }
  }
  function _t() {
    var e = document.createDocumentFragment(), t = document.createComment(""), n = se();
    return e.append(t, n), Kt(t, n), e;
  }
  function q(e, t) {
    e !== null && e.before(t);
  }
  const ai = [
    "touchstart",
    "touchmove"
  ];
  function ui(e) {
    return ai.includes(e);
  }
  function Ft(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
  }
  function ci(e, t) {
    return _i(e, t);
  }
  const Pe = /* @__PURE__ */ new Map();
  function _i(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = true }) {
    Gr();
    var l = /* @__PURE__ */ new Set(), a = (d) => {
      for (var u = 0; u < d.length; u++) {
        var h = d[u];
        if (!l.has(h)) {
          l.add(h);
          var c = ui(h);
          t.addEventListener(h, Ge, {
            passive: c
          });
          var g = Pe.get(h);
          g === void 0 ? (document.addEventListener(h, Ge, {
            passive: c
          }), Pe.set(h, 1)) : Pe.set(h, g + 1);
        }
      }
    };
    a(wt(fi)), nn.add(a);
    var o = void 0, _ = Qr(() => {
      var d = n ?? t.appendChild(se());
      return qr(d, {
        pending: () => {
        }
      }, (u) => {
        if (s) {
          It({});
          var h = T;
          h.c = s;
        }
        i && (r.$$events = i), o = e(u, r) || {}, s && Ut();
      }), () => {
        var _a3;
        for (var u of l) {
          t.removeEventListener(u, Ge);
          var h = Pe.get(u);
          --h === 0 ? (document.removeEventListener(u, Ge), Pe.delete(u)) : Pe.set(u, h);
        }
        nn.delete(a), d !== n && ((_a3 = d.parentNode) == null ? void 0 : _a3.removeChild(d));
      };
    });
    return di.set(o, _), o;
  }
  let di = /* @__PURE__ */ new WeakMap();
  class hi {
    constructor(t, n = true) {
      __publicField(this, "anchor");
      __privateAdd(this, _t4, /* @__PURE__ */ new Map());
      __privateAdd(this, _f3, /* @__PURE__ */ new Map());
      __privateAdd(this, _e4, /* @__PURE__ */ new Map());
      __privateAdd(this, _i4, /* @__PURE__ */ new Set());
      __privateAdd(this, _s4, true);
      __privateAdd(this, _r4, () => {
        var t = S;
        if (__privateGet(this, _t4).has(t)) {
          var n = __privateGet(this, _t4).get(t), r = __privateGet(this, _f3).get(n);
          if (r) Ht(r), __privateGet(this, _i4).delete(n);
          else {
            var i = __privateGet(this, _e4).get(n);
            i && (__privateGet(this, _f3).set(n, i.effect), __privateGet(this, _e4).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
          }
          for (const [s, f] of __privateGet(this, _t4)) {
            if (__privateGet(this, _t4).delete(s), s === t) break;
            const l = __privateGet(this, _e4).get(f);
            l && (j(l.effect), __privateGet(this, _e4).delete(f));
          }
          for (const [s, f] of __privateGet(this, _f3)) {
            if (s === n || __privateGet(this, _i4).has(s)) continue;
            const l = () => {
              if (Array.from(__privateGet(this, _t4).values()).includes(s)) {
                var o = document.createDocumentFragment();
                qn(f, o), o.append(se()), __privateGet(this, _e4).set(s, {
                  effect: f,
                  fragment: o
                });
              } else j(f);
              __privateGet(this, _i4).delete(s), __privateGet(this, _f3).delete(s);
            };
            __privateGet(this, _s4) || !r ? (__privateGet(this, _i4).add(s), Ee(f, l, false)) : l();
          }
        }
      });
      __privateAdd(this, _n4, (t) => {
        __privateGet(this, _t4).delete(t);
        const n = Array.from(__privateGet(this, _t4).values());
        for (const [r, i] of __privateGet(this, _e4)) n.includes(r) || (j(i.effect), __privateGet(this, _e4).delete(r));
      });
      this.anchor = t, __privateSet(this, _s4, n);
    }
    ensure(t, n) {
      var r = S, i = Cn();
      if (n && !__privateGet(this, _f3).has(t) && !__privateGet(this, _e4).has(t)) if (i) {
        var s = document.createDocumentFragment(), f = se();
        s.append(f), __privateGet(this, _e4).set(t, {
          effect: Y(() => n(f)),
          fragment: s
        });
      } else __privateGet(this, _f3).set(t, Y(() => n(this.anchor)));
      if (__privateGet(this, _t4).set(r, t), i) {
        for (const [l, a] of __privateGet(this, _f3)) l === t ? r.skipped_effects.delete(a) : r.skipped_effects.add(a);
        for (const [l, a] of __privateGet(this, _e4)) l === t ? r.skipped_effects.delete(a.effect) : r.skipped_effects.add(a.effect);
        r.oncommit(__privateGet(this, _r4)), r.ondiscard(__privateGet(this, _n4));
      } else __privateGet(this, _r4).call(this);
    }
  }
  _t4 = new WeakMap();
  _f3 = new WeakMap();
  _e4 = new WeakMap();
  _i4 = new WeakMap();
  _s4 = new WeakMap();
  _r4 = new WeakMap();
  _n4 = new WeakMap();
  function vi(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  function pi() {
    const e = T;
    return e === null && kr(), (t, n, r) => {
      var _a3;
      const i = (_a3 = e.s.$$events) == null ? void 0 : _a3[t];
      if (i) {
        const s = gt(i) ? i.slice() : [
          i
        ], f = vi(t, n, r);
        for (const l of s) l.call(e.x, f);
        return !f.defaultPrevented;
      }
      return true;
    };
  }
  function Le(e, t, n = false) {
    var r = new hi(e), i = n ? We : 0;
    function s(f, l) {
      r.ensure(f, l);
    }
    Yt(() => {
      var f = false;
      t((l, a = true) => {
        f = true, s(a, l);
      }), f || s(false, null);
    }, i);
  }
  function Zn(e, t) {
    return t;
  }
  function gi(e, t, n) {
    for (var r = [], i = t.length, s, f = t.length, l = 0; l < i; l++) {
      let d = t[l];
      Ee(d, () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var u = e.outrogroups;
            Rt(wt(s.done)), u.delete(s), u.size === 0 && (e.outrogroups = null);
          }
        } else f -= 1;
      }, false);
    }
    if (f === 0) {
      var a = r.length === 0 && n !== null;
      if (a) {
        var o = n, _ = o.parentNode;
        Xr(_), _.append(o), e.items.clear();
      }
      Rt(t, !a);
    } else s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
  }
  function Rt(e, t = true) {
    for (var n = 0; n < e.length; n++) j(e[n], t);
  }
  var fn;
  function Jn(e, t, n, r, i, s = null) {
    var f = e, l = /* @__PURE__ */ new Map();
    {
      var a = e;
      f = a.appendChild(se());
    }
    var o = null, _ = Wt(() => {
      var y = n();
      return gt(y) ? y : y == null ? [] : wt(y);
    }), d, u = true;
    function h() {
      g.fallback = o, wi(g, d, f, t, r), o !== null && (d.length === 0 ? (o.f & he) === 0 ? Ht(o) : (o.f ^= he, Xe(o, null, f)) : Ee(o, () => {
        o = null;
      }));
    }
    var c = Yt(() => {
      d = p(_);
      for (var y = d.length, N = /* @__PURE__ */ new Set(), v = S, m = Cn(), E = 0; E < y; E += 1) {
        var P = d[E], L = r(P, E), k = u ? null : l.get(L);
        k ? (k.v && Ve(k.v, P), k.i && Ve(k.i, E), m && v.skipped_effects.delete(k.e)) : (k = yi(l, u ? f : fn ?? (fn = se()), P, L, E, i, t, n), u || (k.e.f |= he), l.set(L, k)), N.add(L);
      }
      if (y === 0 && s && !o && (u ? o = Y(() => s(f)) : (o = Y(() => s(fn ?? (fn = se()))), o.f |= he)), !u) if (m) {
        for (const [A, ee] of l) N.has(A) || v.skipped_effects.add(ee.e);
        v.oncommit(h), v.ondiscard(() => {
        });
      } else h();
      p(_);
    }), g = {
      effect: c,
      items: l,
      outrogroups: null,
      fallback: o
    };
    u = false;
  }
  function He(e) {
    for (; e !== null && (e.f & Q) === 0; ) e = e.next;
    return e;
  }
  function wi(e, t, n, r, i) {
    var _a3;
    var s = t.length, f = e.items, l = He(e.effect.first), a, o = null, _ = [], d = [], u, h, c, g;
    for (g = 0; g < s; g += 1) {
      if (u = t[g], h = i(u, g), c = f.get(h).e, e.outrogroups !== null) for (const A of e.outrogroups) A.pending.delete(c), A.done.delete(c);
      if ((c.f & he) !== 0) if (c.f ^= he, c === l) Xe(c, null, n);
      else {
        var y = o ? o.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), de(e, o, c), de(e, c, y), Xe(c, y, n), o = c, _ = [], d = [], l = He(o.next);
        continue;
      }
      if ((c.f & z) !== 0 && Ht(c), c !== l) {
        if (a !== void 0 && a.has(c)) {
          if (_.length < d.length) {
            var N = d[0], v;
            o = N.prev;
            var m = _[0], E = _[_.length - 1];
            for (v = 0; v < _.length; v += 1) Xe(_[v], N, n);
            for (v = 0; v < d.length; v += 1) a.delete(d[v]);
            de(e, m.prev, E.next), de(e, o, m), de(e, E, N), l = N, o = E, g -= 1, _ = [], d = [];
          } else a.delete(c), Xe(c, l, n), de(e, c.prev, c.next), de(e, c, o === null ? e.effect.first : o.next), de(e, o, c), o = c;
          continue;
        }
        for (_ = [], d = []; l !== null && l !== c; ) (a ?? (a = /* @__PURE__ */ new Set())).add(l), d.push(l), l = He(l.next);
        if (l === null) continue;
      }
      (c.f & he) === 0 && _.push(c), o = c, l = He(c.next);
    }
    if (e.outrogroups !== null) {
      for (const A of e.outrogroups) A.pending.size === 0 && (Rt(wt(A.done)), (_a3 = e.outrogroups) == null ? void 0 : _a3.delete(A));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (l !== null || a !== void 0) {
      var P = [];
      if (a !== void 0) for (c of a) (c.f & z) === 0 && P.push(c);
      for (; l !== null; ) (l.f & z) === 0 && l !== e.fallback && P.push(l), l = He(l.next);
      var L = P.length;
      if (L > 0) {
        var k = s === 0 ? n : null;
        gi(e, P, k);
      }
    }
  }
  function yi(e, t, n, r, i, s, f, l) {
    var a = (f & ar) !== 0 ? (f & cr) === 0 ? Ce(n, false, false) : Se(n) : null, o = (f & ur) !== 0 ? Se(i) : null;
    return {
      v: a,
      i: o,
      e: Y(() => (s(t, a ?? n, o ?? i, l), () => {
        e.delete(r);
      }))
    };
  }
  function Xe(e, t, n) {
    if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & he) === 0 ? t.nodes.start : n; r !== null; ) {
      var f = rt(r);
      if (s.before(r), r === i) return;
      r = f;
    }
  }
  function de(e, t, n) {
    t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
  }
  const bi = /* @__PURE__ */ Symbol("is custom element"), mi = /* @__PURE__ */ Symbol("is html");
  function bt(e, t, n, r) {
    var i = Ei(e);
    i[t] !== (i[t] = n) && (t === "loading" && (e[xr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && xi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }
  function Ei(e) {
    return e.__attributes ?? (e.__attributes = {
      [bi]: e.nodeName.includes("-"),
      [mi]: e.namespaceURI === pr
    });
  }
  var ln = /* @__PURE__ */ new Map();
  function xi(e) {
    var t = e.getAttribute("is") || e.nodeName, n = ln.get(t);
    if (n) return n;
    ln.set(t, n = []);
    for (var r, i = e, s = Element.prototype; s !== i; ) {
      r = cn(i);
      for (var f in r) r[f].set && n.push(f);
      i = Ct(i);
    }
    return n;
  }
  function Qn(e = false) {
    const t = T, n = t.l.u;
    if (!n) return;
    let r = () => Xn(t.s);
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
    n.b.length && Jr(() => {
      on(t, r), xt(n.b);
    }), Qt(() => {
      const i = be(() => n.m.map(mr));
      return () => {
        for (const s of i) typeof s == "function" && s();
      };
    }), n.a.length && Qt(() => {
      on(t, r), xt(n.a);
    });
  }
  function on(e, t) {
    if (e.l.s) for (const n of e.l.s) p(n);
    t();
  }
  function ki(e, t) {
    var _a3;
    var n = (_a3 = e.$$events) == null ? void 0 : _a3[t.type], r = gt(n) ? n.slice() : n == null ? [] : [
      n
    ];
    for (var i of r) i.call(this, t);
  }
  let ot = false;
  function Si(e) {
    var t = ot;
    try {
      return ot = false, [
        e(),
        ot
      ];
    } finally {
      ot = t;
    }
  }
  function dt(e, t, n, r) {
    var _a3;
    var i = !et || (n & _r) !== 0, s = (n & hr) !== 0, f = r, l = true, a = () => (l && (l = false, f = r), f), o;
    {
      var _ = Be in e || Er in e;
      o = ((_a3 = Ue(e, t)) == null ? void 0 : _a3.set) ?? (_ && t in e ? (v) => e[t] = v : void 0);
    }
    var d, u = false;
    [d, u] = Si(() => e[t]);
    var h;
    if (i ? h = () => {
      var v = e[t];
      return v === void 0 ? a() : (l = true, v);
    } : h = () => {
      var v = e[t];
      return v !== void 0 && (f = void 0), v === void 0 ? f : v;
    }, i && (n & dr) === 0) return h;
    if (o) {
      var c = e.$$legacy;
      return (function(v, m) {
        return arguments.length > 0 ? ((!i || !m || c || u) && o(m ? h() : v), v) : h();
      });
    }
    var g = false, y = Wt(() => (g = false, h()));
    p(y);
    var N = b;
    return (function(v, m) {
      if (arguments.length > 0) {
        const E = m ? p(y) : i && s ? Me(v) : v;
        return D(y, E), g = true, f !== void 0 && (f = E), v;
      }
      return we && g || (N.f & ie) !== 0 ? y.v : p(y);
    });
  }
  var Ai = Te('<div style="display: inline; cursor: pointer;"> </div>'), Ti = Te('<div style="padding-left: 1em;"></div>'), Oi = Te('<div><div><!> <div style="display: inline;"> </div></div> <!></div>');
  function er(e, t) {
    It(t, false);
    let n = dt(t, "name", 8), r = dt(t, "node", 8), i = dt(t, "popcapPak", 8), s = Ce(false), f = r() instanceof i().Entry;
    const l = pi();
    function a(v) {
      f && l("view", {
        node: r()
      });
    }
    function o() {
      f || D(s, !p(s));
    }
    Qn();
    var _ = Oi(), d = te(_), u = te(d);
    {
      var h = (v) => {
        var m = Ai(), E = te(m);
        Je(() => Ft(E, p(s) ? "-" : "+")), Ke("click", m, o), Ke("keypress", m, o), q(v, m);
      };
      Le(u, (v) => {
        f || v(h);
      });
    }
    var c = Ne(u, 2), g = te(c), y = Ne(d, 2);
    {
      var N = (v) => {
        var m = Ti();
        Jn(m, 5, () => (Xn(r()), be(() => Object.entries(r()))), Zn, (E, P, L, k) => {
          var A = Sn(() => dn(p(P), 2));
          let ee = () => p(A)[0], st = () => p(A)[1];
          var ue = _t(), U = ut(ue);
          er(U, {
            get name() {
              return ee();
            },
            get node() {
              return st();
            },
            get popcapPak() {
              return i();
            },
            $$events: {
              view(V) {
                ki.call(this, t, V);
              }
            }
          }), q(E, ue);
        }), q(v, m);
      };
      Le(y, (v) => {
        p(s) && v(N);
      });
    }
    Je(() => Ft(g, n())), Ke("click", c, a), Ke("keypress", c, a), q(e, _), Ut();
  }
  var Pi = Te("<img/>"), Fi = Te('<audio controls="controls" type="audio/mp3"></audio>'), Ri = Te('<div style="display:flex; flex-direction: column; flex: 1;"><div><label for="load-file">Choose a PAK file:</label> <input type="file" id="load-file" name="load-file"/></div> <div style="display: flex; flex: 1; overflow: hidden;"><div style="flex: 2; display: flex; flex-direction: column;"><h2>Directory</h2> <div style="flex-grow: 1; flex-basis: auto; overflow-y: scroll; height: 0px;"></div></div> <div style="flex: 5; display: flex; align-items: center; justify-content: center;"><!></div></div></div>');
  function Di(e, t) {
    It(t, false);
    let n = dt(t, "popcapPak", 8), r = Ce({}), i = Ce(null), s = Ce(null), f = Ce(null);
    async function l(v) {
      let E = v.target.files[0];
      D(r, {}), E.arrayBuffer().catch(console.error).then((P) => {
        let L = new (n()).Pak(P), k = {};
        for (let A = 0; A < L.length; A++) {
          let ee = L.entry(A), ue = ee.path().split(/[\\\/]/), U = k;
          for (let V = 0; V < ue.length; V++) {
            let ce = ue[V];
            V + 1 < ue.length ? (U[ce] = U[ce] || {}, U = U[ce]) : U[ce] = ee;
          }
        }
        console.log(k), D(r, k);
      });
    }
    function a(v) {
      let m = v.detail.node;
      D(f, m.name());
      let E = p(f).endsWith(".png") || p(f).endsWith(".gif"), P = p(f).endsWith(".txt") || p(f).endsWith(".xml"), L = p(f).endsWith(".ogg") || p(f).endsWith(".au");
      E ? D(i, "image") : P ? D(i, "text") : L ? D(i, "sound") : D(i, "unknown"), D(s, m.readFileData());
    }
    Qn();
    var o = Ri(), _ = te(o), d = Ne(te(_), 2), u = Ne(_, 2), h = te(u), c = Ne(te(h), 2);
    Jn(c, 5, () => (p(r), be(() => Object.entries(p(r)))), Zn, (v, m) => {
      var E = Sn(() => dn(p(m), 2));
      let P = () => p(E)[0], L = () => p(E)[1];
      er(v, {
        get name() {
          return P();
        },
        get node() {
          return L();
        },
        get popcapPak() {
          return n();
        },
        $$events: {
          view: a
        }
      });
    });
    var g = Ne(h, 2), y = te(g);
    {
      var N = (v) => {
        var m = _t(), E = ut(m);
        {
          var P = (k) => {
            var A = Pi();
            Je((ee) => {
              bt(A, "alt", p(f)), bt(A, "src", ee);
            }, [
              () => (p(s), be(() => URL.createObjectURL(new Blob([
                p(s).buffer
              ]))))
            ]), q(k, A);
          }, L = (k) => {
            var A = _t(), ee = ut(A);
            {
              var st = (U) => {
                var V = sn();
                Je((ce) => Ft(V, ce), [
                  () => (p(s), be(() => String.fromCharCode(...p(s))))
                ]), q(U, V);
              }, ue = (U) => {
                var V = _t(), ce = ut(V);
                {
                  var rr = (Oe) => {
                    var ft = Fi();
                    Je((sr) => bt(ft, "src", sr), [
                      () => (p(s), be(() => URL.createObjectURL(new Blob([
                        p(s).buffer
                      ]))))
                    ]), q(Oe, ft);
                  }, ir = (Oe) => {
                    var ft = sn("Unknown File Type");
                    q(Oe, ft);
                  };
                  Le(ce, (Oe) => {
                    p(i) == "sound" ? Oe(rr) : Oe(ir, false);
                  }, true);
                }
                q(U, V);
              };
              Le(ee, (U) => {
                p(i) == "text" ? U(st) : U(ue, false);
              }, true);
            }
            q(k, A);
          };
          Le(E, (k) => {
            p(i) == "image" ? k(P) : k(L, false);
          });
        }
        q(v, m);
      };
      Le(y, (v) => {
        p(s) != null && v(N);
      });
    }
    Ke("change", d, l), q(e, o), Ut();
  }
  const Ci = "" + new URL("popcap_pak_wasm_bg-DGmXgP24.wasm", import.meta.url).href, Mi = async (e = {}, t) => {
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
  class $e {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create($e.prototype);
      return n.__wbg_ptr = t, an.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, an.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_entry_free(t, 0);
    }
    name() {
      let t, n;
      try {
        const s = x.entry_name(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Ie(r, i);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    name_lossy() {
      let t, n;
      try {
        const s = x.entry_name_lossy(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Ie(r, i);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    name_raw() {
      const t = x.entry_name_raw(this.__wbg_ptr);
      if (t[3]) throw Fe(t[2]);
      var n = ht(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    path() {
      let t, n;
      try {
        const s = x.entry_path(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Fe(s[2]);
        return t = r, n = i, Ie(r, i);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    path_lossy() {
      let t, n;
      try {
        const r = x.entry_path_lossy(this.__wbg_ptr);
        return t = r[0], n = r[1], Ie(r[0], r[1]);
      } finally {
        x.__wbindgen_free(t, n, 1);
      }
    }
    path_raw() {
      const t = x.entry_path_raw(this.__wbg_ptr);
      var n = ht(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    readFileData() {
      const t = x.entry_readFileData(this.__wbg_ptr);
      if (t[3]) throw Fe(t[2]);
      var n = ht(t[0], t[1]).slice();
      return x.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
  }
  Symbol.dispose && ($e.prototype[Symbol.dispose] = $e.prototype.free);
  class Dt {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, un.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      x.__wbg_pak_free(t, 0);
    }
    entry(t) {
      return x.pak_entry(this.__wbg_ptr, t);
    }
    get length() {
      return x.pak_length(this.__wbg_ptr) >>> 0;
    }
    constructor(t) {
      const n = x.pak_new(t);
      if (n[2]) throw Fe(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, un.register(this, this.__wbg_ptr, this), this;
    }
  }
  Symbol.dispose && (Dt.prototype[Symbol.dispose] = Dt.prototype.free);
  function Ni(e, t) {
    return Error(Ie(e, t));
  }
  function Li(e) {
    return e === void 0;
  }
  function Ii(e, t) {
    throw new Error(Ie(e, t));
  }
  function Ui(e) {
    return $e.__wrap(e);
  }
  function Bi(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function ji(e) {
    return e.length;
  }
  function Wi(e) {
    return new Uint8Array(e);
  }
  function qi(e, t, n) {
    Uint8Array.prototype.set.call(ht(e, t), n);
  }
  function zi() {
    const e = x.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  const an = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_entry_free(e >>> 0, 1)), un = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => x.__wbg_pak_free(e >>> 0, 1));
  function ht(e, t) {
    return e = e >>> 0, tr().subarray(e / 1, e / 1 + t);
  }
  function Ie(e, t) {
    return e = e >>> 0, $i(e, t);
  }
  let at = null;
  function tr() {
    return (at === null || at.byteLength === 0) && (at = new Uint8Array(x.memory.buffer)), at;
  }
  function Fe(e) {
    const t = x.__wbindgen_externrefs.get(e);
    return x.__externref_table_dealloc(e), t;
  }
  let vt = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  vt.decode();
  const Vi = 2146435072;
  let mt = 0;
  function $i(e, t) {
    return mt += t, mt >= Vi && (vt = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), vt.decode(), mt = t), vt.decode(tr().subarray(e, e + t));
  }
  let x;
  function Yi(e) {
    x = e;
  }
  URL = globalThis.URL;
  const M = await Mi({
    "./popcap_pak_wasm_bg.js": {
      __wbg_entry_new: Ui,
      __wbg_new_dd2b680c8bf6ae29: Wi,
      __wbg_length_32ed9a279acd054c: ji,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: qi,
      __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: Bi,
      __wbg___wbindgen_throw_be289d5034ed271b: Ii,
      __wbg_Error_8c4e43fe74559d73: Ni,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: Li,
      __wbindgen_init_externref_table: zi
    }
  }, Ci), Hi = M.memory, Ki = M.__wbg_entry_free, Gi = M.__wbg_pak_free, Xi = M.entry_name, Zi = M.entry_name_lossy, Ji = M.entry_name_raw, Qi = M.entry_path, es = M.entry_path_lossy, ts = M.entry_path_raw, ns = M.entry_readFileData, rs = M.pak_entry, is = M.pak_length, ss = M.pak_new, fs = M.__wbindgen_externrefs, ls = M.__externref_table_dealloc, os = M.__wbindgen_free, nr = M.__wbindgen_start, as = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: ls,
    __wbg_entry_free: Ki,
    __wbg_pak_free: Gi,
    __wbindgen_externrefs: fs,
    __wbindgen_free: os,
    __wbindgen_start: nr,
    entry_name: Xi,
    entry_name_lossy: Zi,
    entry_name_raw: Ji,
    entry_path: Qi,
    entry_path_lossy: es,
    entry_path_raw: ts,
    entry_readFileData: ns,
    memory: Hi,
    pak_entry: rs,
    pak_length: is,
    pak_new: ss
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Yi(as);
  nr();
  const us = Object.freeze(Object.defineProperty({
    __proto__: null,
    Entry: $e,
    Pak: Dt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var cs = Te('<div style="margin: 0.2em; display: flex; flex: 1;"><!></div>');
  function _s(e) {
    var t = cs(), n = te(t);
    Di(n, {
      get popcapPak() {
        return us;
      }
    }), q(e, t);
  }
  ci(_s, {
    target: document.body
  });
})();
