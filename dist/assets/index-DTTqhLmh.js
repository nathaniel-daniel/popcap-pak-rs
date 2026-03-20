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
  var _a, _e2, _o, _t2, _f, _r2, _n2, _i2, _s2, _l, _a2, _de_instances, u_fn, __fn, d_fn, h_fn, c_fn, _e3, _o2, _t3, _f2, _r3, _n3, _i3, _s3, _l2, _a3, _u, __, _d, _h, _c, _y, _Hr_instances, b_fn, m_fn, E_fn, g_fn, v_fn, p_fn, w_fn, _b, _e4, _o3, _t4, _f3, _r4, _n4, _i4;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
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
  const sr = "5";
  typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(sr);
  let Je = false, fr = false;
  function lr() {
    Je = true;
  }
  lr();
  const or = 1, ar = 2, ur = 16, cr = 2, _r = 4, dr = 8, hr = 2, C = /* @__PURE__ */ Symbol(), cn = "http://www.w3.org/1999/xhtml", vr = false;
  var vt = Array.isArray, pr = Array.prototype.indexOf, Ue = Array.prototype.includes, pt = Array.from, gr = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, _n = Object.getOwnPropertyDescriptors, wr = Object.prototype, yr = Array.prototype, Ft = Object.getPrototypeOf, Yt = Object.isExtensible;
  const br = () => {
  };
  function mr(e) {
    return e();
  }
  function mt(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  function dn() {
    var e, t, n = new Promise((r, i) => {
      e = r, t = i;
    });
    return {
      promise: n,
      resolve: e,
      reject: t
    };
  }
  function hn(e, t) {
    if (Array.isArray(e)) return e;
    if (!(Symbol.iterator in e)) return Array.from(e);
    const n = [];
    for (const r of e) if (n.push(r), n.length === t) break;
    return n;
  }
  const D = 2, Xe = 4, Qe = 8, vn = 1 << 24, ve = 16, Q = 32, xe = 64, Et = 128, H = 512, P = 1024, I = 2048, te = 4096, z = 8192, Y = 16384, Ae = 32768, Gt = 1 << 25, je = 65536, Kt = 1 << 17, Er = 1 << 18, $e = 1 << 19, pn = 1 << 20, se = 1 << 25, ke = 65536, xt = 1 << 21, Dt = 1 << 22, ce = 1 << 23, Ie = /* @__PURE__ */ Symbol("$state"), xr = /* @__PURE__ */ Symbol("legacy props"), kr = /* @__PURE__ */ Symbol(""), ie = new class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Sr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Ar() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function Tr(e, t, n) {
    throw new Error("https://svelte.dev/e/each_key_duplicate");
  }
  function Or(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Pr() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Rr(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Fr() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Dr() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Mr() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Cr() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function Nr() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  function Lr() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function gn(e) {
    return e === this.v;
  }
  function Ir(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function wn(e) {
    return !Ir(e, this.v);
  }
  let R = null;
  function Be(e) {
    R = e;
  }
  function Mt(e, t = false, n) {
    R = {
      p: R,
      i: false,
      c: null,
      e: null,
      s: e,
      x: null,
      r: y,
      l: Je && !t ? {
        s: null,
        u: null,
        $: []
      } : null
    };
  }
  function Ct(e) {
    var t = R, n = t.e;
    if (n !== null) {
      t.e = null;
      for (var r of n) jn(r);
    }
    return t.i = true, R = t.p, {};
  }
  function et() {
    return !Je || R !== null && R.l === null;
  }
  let Re = [];
  function Ur() {
    var e = Re;
    Re = [], mt(e);
  }
  function be(e) {
    if (Re.length === 0) {
      var t = Re;
      queueMicrotask(() => {
        t === Re && Ur();
      });
    }
    Re.push(e);
  }
  function yn(e) {
    var t = y;
    if (t === null) return w.f |= ce, e;
    if ((t.f & Ae) === 0 && (t.f & Xe) === 0) throw e;
    ue(e, t);
  }
  function ue(e, t) {
    for (; t !== null; ) {
      if ((t.f & Et) !== 0) {
        if ((t.f & Ae) === 0) throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
  const jr = -7169;
  function O(e, t) {
    e.f = e.f & jr | t;
  }
  function Nt(e) {
    (e.f & H) !== 0 || e.deps === null ? O(e, P) : O(e, te);
  }
  function bn(e) {
    if (e !== null) for (const t of e) (t.f & D) === 0 || (t.f & ke) === 0 || (t.f ^= ke, bn(t.deps));
  }
  function mn(e, t, n) {
    (e.f & I) !== 0 ? t.add(e) : (e.f & te) !== 0 && n.add(e), bn(e.deps), O(e, P);
  }
  let it = false;
  function Br(e) {
    var t = it;
    try {
      return it = false, [
        e(),
        it
      ];
    } finally {
      it = t;
    }
  }
  const ge = /* @__PURE__ */ new Set();
  let A = null, Z = null, kt = null, wt = false, Fe = null, ot = null;
  var Xt = 0;
  let Wr = 1;
  const _de = class _de {
    constructor() {
      __privateAdd(this, _de_instances);
      __publicField(this, "id", Wr++);
      __publicField(this, "current", /* @__PURE__ */ new Map());
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      __privateAdd(this, _e2, /* @__PURE__ */ new Set());
      __privateAdd(this, _o, /* @__PURE__ */ new Set());
      __privateAdd(this, _t2, 0);
      __privateAdd(this, _f, 0);
      __privateAdd(this, _r2, null);
      __privateAdd(this, _n2, []);
      __privateAdd(this, _i2, /* @__PURE__ */ new Set());
      __privateAdd(this, _s2, /* @__PURE__ */ new Set());
      __privateAdd(this, _l, /* @__PURE__ */ new Map());
      __publicField(this, "is_fork", false);
      __privateAdd(this, _a2, false);
    }
    skip_effect(t) {
      __privateGet(this, _l).has(t) || __privateGet(this, _l).set(t, {
        d: [],
        m: []
      });
    }
    unskip_effect(t) {
      var n = __privateGet(this, _l).get(t);
      if (n) {
        __privateGet(this, _l).delete(t);
        for (var r of n.d) O(r, I), this.schedule(r);
        for (r of n.m) O(r, te), this.schedule(r);
      }
    }
    capture(t, n) {
      n !== C && !this.previous.has(t) && this.previous.set(t, n), (t.f & ce) === 0 && (this.current.set(t, t.v), Z == null ? void 0 : Z.set(t, t.v));
    }
    activate() {
      A = this;
    }
    deactivate() {
      A = null, Z = null;
    }
    flush() {
      try {
        wt = true, A = this, __privateMethod(this, _de_instances, __fn).call(this);
      } finally {
        Xt = 0, kt = null, Fe = null, ot = null, wt = false, A = null, Z = null, _e.clear();
      }
    }
    discard() {
      for (const t of __privateGet(this, _o)) t(this);
      __privateGet(this, _o).clear(), ge.delete(this);
    }
    increment(t) {
      __privateSet(this, _t2, __privateGet(this, _t2) + 1), t && __privateSet(this, _f, __privateGet(this, _f) + 1);
    }
    decrement(t, n) {
      __privateSet(this, _t2, __privateGet(this, _t2) - 1), t && __privateSet(this, _f, __privateGet(this, _f) - 1), !(__privateGet(this, _a2) || n) && (__privateSet(this, _a2, true), be(() => {
        __privateSet(this, _a2, false), this.flush();
      }));
    }
    transfer_effects(t, n) {
      for (const r of t) __privateGet(this, _i2).add(r);
      for (const r of n) __privateGet(this, _s2).add(r);
      t.clear(), n.clear();
    }
    oncommit(t) {
      __privateGet(this, _e2).add(t);
    }
    ondiscard(t) {
      __privateGet(this, _o).add(t);
    }
    settled() {
      return (__privateGet(this, _r2) ?? __privateSet(this, _r2, dn())).promise;
    }
    static ensure() {
      if (A === null) {
        const t = A = new _de();
        wt || (ge.add(A), be(() => {
          A === t && t.flush();
        }));
      }
      return A;
    }
    apply() {
      {
        Z = null;
        return;
      }
    }
    schedule(t) {
      var _a4;
      if (kt = t, ((_a4 = t.b) == null ? void 0 : _a4.is_pending) && (t.f & (Xe | Qe | vn)) !== 0 && (t.f & Ae) === 0) {
        t.b.defer_effect(t);
        return;
      }
      for (var n = t; n.parent !== null; ) {
        n = n.parent;
        var r = n.f;
        if (Fe !== null && n === y && (w === null || (w.f & D) === 0)) return;
        if ((r & (xe | Q)) !== 0) {
          if ((r & P) === 0) return;
          n.f ^= P;
        }
      }
      __privateGet(this, _n2).push(n);
    }
  };
  _e2 = new WeakMap();
  _o = new WeakMap();
  _t2 = new WeakMap();
  _f = new WeakMap();
  _r2 = new WeakMap();
  _n2 = new WeakMap();
  _i2 = new WeakMap();
  _s2 = new WeakMap();
  _l = new WeakMap();
  _a2 = new WeakMap();
  _de_instances = new WeakSet();
  u_fn = function() {
    return this.is_fork || __privateGet(this, _f) > 0;
  };
  __fn = function() {
    var _a4, _b2;
    if (Xt++ > 1e3 && (ge.delete(this), zr()), !__privateMethod(this, _de_instances, u_fn).call(this)) {
      for (const f of __privateGet(this, _i2)) __privateGet(this, _s2).delete(f), O(f, I), this.schedule(f);
      for (const f of __privateGet(this, _s2)) O(f, te), this.schedule(f);
    }
    const t = __privateGet(this, _n2);
    __privateSet(this, _n2, []), this.apply();
    var n = Fe = [], r = [], i = ot = [];
    for (const f of t) try {
      __privateMethod(this, _de_instances, d_fn).call(this, f, n, r);
    } catch (o) {
      throw Sn(f), o;
    }
    if (A = null, i.length > 0) {
      var s = _de.ensure();
      for (const f of i) s.schedule(f);
    }
    if (Fe = null, ot = null, __privateMethod(this, _de_instances, u_fn).call(this)) {
      __privateMethod(this, _de_instances, h_fn).call(this, r), __privateMethod(this, _de_instances, h_fn).call(this, n);
      for (const [f, o] of __privateGet(this, _l)) kn(f, o);
    } else {
      __privateGet(this, _t2) === 0 && ge.delete(this), __privateGet(this, _i2).clear(), __privateGet(this, _s2).clear();
      for (const f of __privateGet(this, _e2)) f(this);
      __privateGet(this, _e2).clear(), Zt(r), Zt(n), (_a4 = __privateGet(this, _r2)) == null ? void 0 : _a4.resolve();
    }
    var l = A;
    if (__privateGet(this, _n2).length > 0) {
      const f = l ?? (l = this);
      __privateGet(f, _n2).push(...__privateGet(this, _n2).filter((o) => !__privateGet(f, _n2).includes(o)));
    }
    l !== null && (ge.add(l), __privateMethod(_b2 = l, _de_instances, __fn).call(_b2)), ge.has(this) || __privateMethod(this, _de_instances, c_fn).call(this);
  };
  d_fn = function(t, n, r) {
    t.f ^= P;
    for (var i = t.first; i !== null; ) {
      var s = i.f, l = (s & (Q | xe)) !== 0, f = l && (s & P) !== 0, o = f || (s & z) !== 0 || __privateGet(this, _l).has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= P : (s & Xe) !== 0 ? n.push(i) : nt(i) && ((s & ve) !== 0 && __privateGet(this, _s2).add(i), ze(i));
        var a = i.first;
        if (a !== null) {
          i = a;
          continue;
        }
      }
      for (; i !== null; ) {
        var c = i.next;
        if (c !== null) {
          i = c;
          break;
        }
        i = i.parent;
      }
    }
  };
  h_fn = function(t) {
    for (var n = 0; n < t.length; n += 1) mn(t[n], __privateGet(this, _i2), __privateGet(this, _s2));
  };
  c_fn = function() {
    var _a4;
    for (const o of ge) {
      var t = o.id < this.id, n = [];
      for (const [a, c] of this.current) {
        if (o.current.has(a)) if (t && c !== o.current.get(a)) o.current.set(a, c);
        else continue;
        n.push(a);
      }
      var r = [
        ...o.current.keys()
      ].filter((a) => !this.current.has(a));
      if (r.length === 0) t && o.discard();
      else if (n.length > 0) {
        o.activate();
        var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
        for (var l of n) En(l, r, i, s);
        if (__privateGet(o, _n2).length > 0) {
          o.apply();
          for (var f of __privateGet(o, _n2)) __privateMethod(_a4 = o, _de_instances, d_fn).call(_a4, f, [], []);
          __privateSet(o, _n2, []);
        }
        o.deactivate();
      }
    }
  };
  let de = _de;
  function zr() {
    try {
      Fr();
    } catch (e) {
      ue(e, kt);
    }
  }
  let re = null;
  function Zt(e) {
    var t = e.length;
    if (t !== 0) {
      for (var n = 0; n < t; ) {
        var r = e[n++];
        if ((r.f & (Y | z)) === 0 && nt(r) && (re = /* @__PURE__ */ new Set(), ze(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Wn(r), (re == null ? void 0 : re.size) > 0)) {
          _e.clear();
          for (const i of re) {
            if ((i.f & (Y | z)) !== 0) continue;
            const s = [
              i
            ];
            let l = i.parent;
            for (; l !== null; ) re.has(l) && (re.delete(l), s.push(l)), l = l.parent;
            for (let f = s.length - 1; f >= 0; f--) {
              const o = s[f];
              (o.f & (Y | z)) === 0 && ze(o);
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
      (s & D) !== 0 ? En(i, t, n, r) : (s & (Dt | ve)) !== 0 && (s & I) === 0 && xn(i, t, r) && (O(i, I), Lt(i));
    }
  }
  function xn(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null) for (const i of e.deps) {
      if (Ue.call(t, i)) return true;
      if ((i.f & D) !== 0 && xn(i, t, n)) return n.set(i, true), true;
    }
    return n.set(e, false), false;
  }
  function Lt(e) {
    A.schedule(e);
  }
  function kn(e, t) {
    if (!((e.f & Q) !== 0 && (e.f & P) !== 0)) {
      (e.f & I) !== 0 ? t.d.push(e) : (e.f & te) !== 0 && t.m.push(e), O(e, P);
      for (var n = e.first; n !== null; ) kn(n, t), n = n.next;
    }
  }
  function Sn(e) {
    O(e, P);
    for (var t = e.first; t !== null; ) Sn(t), t = t.next;
  }
  function qr(e) {
    let t = 0, n = Se(0), r;
    return () => {
      Wt() && (g(n), li(() => (t === 0 && (r = ye(() => e(() => Ge(n)))), t += 1, () => {
        be(() => {
          t -= 1, t === 0 && (r == null ? void 0 : r(), r = void 0, Ge(n));
        });
      })));
    };
  }
  var $r = je | $e;
  function Vr(e, t, n, r) {
    new Hr(e, t, n, r);
  }
  class Hr {
    constructor(t, n, r, i) {
      __privateAdd(this, _Hr_instances);
      __publicField(this, "parent");
      __publicField(this, "is_pending", false);
      __publicField(this, "transform_error");
      __privateAdd(this, _e3);
      __privateAdd(this, _o2, null);
      __privateAdd(this, _t3);
      __privateAdd(this, _f2);
      __privateAdd(this, _r3);
      __privateAdd(this, _n3, null);
      __privateAdd(this, _i3, null);
      __privateAdd(this, _s3, null);
      __privateAdd(this, _l2, null);
      __privateAdd(this, _a3, 0);
      __privateAdd(this, _u, 0);
      __privateAdd(this, __, false);
      __privateAdd(this, _d, /* @__PURE__ */ new Set());
      __privateAdd(this, _h, /* @__PURE__ */ new Set());
      __privateAdd(this, _c, null);
      __privateAdd(this, _y, qr(() => (__privateSet(this, _c, Se(__privateGet(this, _a3))), () => {
        __privateSet(this, _c, null);
      })));
      var _a4;
      __privateSet(this, _e3, t), __privateSet(this, _t3, n), __privateSet(this, _f2, (s) => {
        var l = y;
        l.b = this, l.f |= Et, r(s);
      }), this.parent = y.b, this.transform_error = i ?? ((_a4 = this.parent) == null ? void 0 : _a4.transform_error) ?? ((s) => s), __privateSet(this, _r3, zt(() => {
        __privateMethod(this, _Hr_instances, g_fn).call(this);
      }, $r));
    }
    defer_effect(t) {
      mn(t, __privateGet(this, _d), __privateGet(this, _h));
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!__privateGet(this, _t3).pending;
    }
    update_pending_count(t, n) {
      __privateMethod(this, _Hr_instances, w_fn).call(this, t, n), __privateSet(this, _a3, __privateGet(this, _a3) + t), !(!__privateGet(this, _c) || __privateGet(this, __)) && (__privateSet(this, __, true), be(() => {
        __privateSet(this, __, false), __privateGet(this, _c) && We(__privateGet(this, _c), __privateGet(this, _a3));
      }));
    }
    get_effect_pending() {
      return __privateGet(this, _y).call(this), g(__privateGet(this, _c));
    }
    error(t) {
      var n = __privateGet(this, _t3).onerror;
      let r = __privateGet(this, _t3).failed;
      if (!n && !r) throw t;
      __privateGet(this, _n3) && (B(__privateGet(this, _n3)), __privateSet(this, _n3, null)), __privateGet(this, _i3) && (B(__privateGet(this, _i3)), __privateSet(this, _i3, null)), __privateGet(this, _s3) && (B(__privateGet(this, _s3)), __privateSet(this, _s3, null));
      var i = false, s = false;
      const l = () => {
        if (i) {
          Lr();
          return;
        }
        i = true, s && Nr(), __privateGet(this, _s3) !== null && me(__privateGet(this, _s3), () => {
          __privateSet(this, _s3, null);
        }), __privateMethod(this, _Hr_instances, p_fn).call(this, () => {
          __privateMethod(this, _Hr_instances, g_fn).call(this);
        });
      }, f = (o) => {
        try {
          s = true, n == null ? void 0 : n(o, l), s = false;
        } catch (a) {
          ue(a, __privateGet(this, _r3) && __privateGet(this, _r3).parent);
        }
        r && __privateSet(this, _s3, __privateMethod(this, _Hr_instances, p_fn).call(this, () => {
          try {
            return V(() => {
              var a = y;
              a.b = this, a.f |= Et, r(__privateGet(this, _e3), () => o, () => l);
            });
          } catch (a) {
            return ue(a, __privateGet(this, _r3).parent), null;
          }
        }));
      };
      be(() => {
        var o;
        try {
          o = this.transform_error(t);
        } catch (a) {
          ue(a, __privateGet(this, _r3) && __privateGet(this, _r3).parent);
          return;
        }
        o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(f, (a) => ue(a, __privateGet(this, _r3) && __privateGet(this, _r3).parent)) : f(o);
      });
    }
  }
  _e3 = new WeakMap();
  _o2 = new WeakMap();
  _t3 = new WeakMap();
  _f2 = new WeakMap();
  _r3 = new WeakMap();
  _n3 = new WeakMap();
  _i3 = new WeakMap();
  _s3 = new WeakMap();
  _l2 = new WeakMap();
  _a3 = new WeakMap();
  _u = new WeakMap();
  __ = new WeakMap();
  _d = new WeakMap();
  _h = new WeakMap();
  _c = new WeakMap();
  _y = new WeakMap();
  _Hr_instances = new WeakSet();
  b_fn = function() {
    try {
      __privateSet(this, _n3, V(() => __privateGet(this, _f2).call(this, __privateGet(this, _e3))));
    } catch (t) {
      this.error(t);
    }
  };
  m_fn = function(t) {
    const n = __privateGet(this, _t3).failed;
    n && __privateSet(this, _s3, V(() => {
      n(__privateGet(this, _e3), () => t, () => () => {
      });
    }));
  };
  E_fn = function() {
    const t = __privateGet(this, _t3).pending;
    t && (this.is_pending = true, __privateSet(this, _i3, V(() => t(__privateGet(this, _e3)))), be(() => {
      var n = __privateSet(this, _l2, document.createDocumentFragment()), r = fe();
      n.append(r), __privateSet(this, _n3, __privateMethod(this, _Hr_instances, p_fn).call(this, () => V(() => __privateGet(this, _f2).call(this, r)))), __privateGet(this, _u) === 0 && (__privateGet(this, _e3).before(n), __privateSet(this, _l2, null), me(__privateGet(this, _i3), () => {
        __privateSet(this, _i3, null);
      }), __privateMethod(this, _Hr_instances, v_fn).call(this, A));
    }));
  };
  g_fn = function() {
    try {
      if (this.is_pending = this.has_pending_snippet(), __privateSet(this, _u, 0), __privateSet(this, _a3, 0), __privateSet(this, _n3, V(() => {
        __privateGet(this, _f2).call(this, __privateGet(this, _e3));
      })), __privateGet(this, _u) > 0) {
        var t = __privateSet(this, _l2, document.createDocumentFragment());
        Vt(__privateGet(this, _n3), t);
        const n = __privateGet(this, _t3).pending;
        __privateSet(this, _i3, V(() => n(__privateGet(this, _e3))));
      } else __privateMethod(this, _Hr_instances, v_fn).call(this, A);
    } catch (n) {
      this.error(n);
    }
  };
  v_fn = function(t) {
    this.is_pending = false, t.transfer_effects(__privateGet(this, _d), __privateGet(this, _h));
  };
  p_fn = function(t) {
    var n = y, r = w, i = R;
    ne(__privateGet(this, _r3)), K(__privateGet(this, _r3)), Be(__privateGet(this, _r3).ctx);
    try {
      return de.ensure(), t();
    } catch (s) {
      return yn(s), null;
    } finally {
      ne(n), K(r), Be(i);
    }
  };
  w_fn = function(t, n) {
    var _a4;
    if (!this.has_pending_snippet()) {
      this.parent && __privateMethod(_a4 = this.parent, _Hr_instances, w_fn).call(_a4, t, n);
      return;
    }
    __privateSet(this, _u, __privateGet(this, _u) + t), __privateGet(this, _u) === 0 && (__privateMethod(this, _Hr_instances, v_fn).call(this, n), __privateGet(this, _i3) && me(__privateGet(this, _i3), () => {
      __privateSet(this, _i3, null);
    }), __privateGet(this, _l2) && (__privateGet(this, _e3).before(__privateGet(this, _l2)), __privateSet(this, _l2, null)));
  };
  function Yr(e, t, n, r) {
    const i = et() ? gt : It;
    var s = e.filter((d) => !d.settled);
    if (n.length === 0 && s.length === 0) {
      r(t.map(i));
      return;
    }
    var l = y, f = Gr(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((d) => d.promise)) : null;
    function a(d) {
      f();
      try {
        r(d);
      } catch (v) {
        (l.f & Y) === 0 && ue(v, l);
      }
      dt();
    }
    if (n.length === 0) {
      o.then(() => a(t.map(i)));
      return;
    }
    var c = An();
    function _() {
      Promise.all(n.map((d) => Kr(d))).then((d) => a([
        ...t.map(i),
        ...d
      ])).catch((d) => ue(d, l)).finally(() => c());
    }
    o ? o.then(() => {
      f(), _(), dt();
    }) : _();
  }
  function Gr() {
    var e = y, t = w, n = R, r = A;
    return function(s = true) {
      ne(e), K(t), Be(n), s && (e.f & Y) === 0 && (r == null ? void 0 : r.activate(), r == null ? void 0 : r.apply());
    };
  }
  function dt(e = true) {
    ne(null), K(null), Be(null), e && (A == null ? void 0 : A.deactivate());
  }
  function An() {
    var e = y.b, t = A, n = e.is_rendered();
    return e.update_pending_count(1, t), t.increment(n), (r = false) => {
      e.update_pending_count(-1, t), t.decrement(n, r);
    };
  }
  function gt(e) {
    var t = D | I, n = w !== null && (w.f & D) !== 0 ? w : null;
    return y !== null && (y.f |= $e), {
      ctx: R,
      deps: null,
      effects: null,
      equals: gn,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: C,
      wv: 0,
      parent: n ?? y,
      ac: null
    };
  }
  function Kr(e, t, n) {
    let r = y;
    r === null && Ar();
    var i = void 0, s = Se(C), l = !w, f = /* @__PURE__ */ new Map();
    return fi(() => {
      var _a4;
      var o = y, a = dn();
      i = a.promise;
      try {
        Promise.resolve(e()).then(a.resolve, a.reject).finally(dt);
      } catch (v) {
        a.reject(v), dt();
      }
      var c = A;
      if (l) {
        if ((o.f & Ae) !== 0) var _ = An();
        if (r.b.is_rendered()) (_a4 = f.get(c)) == null ? void 0 : _a4.reject(ie), f.delete(c);
        else {
          for (const v of f.values()) v.reject(ie);
          f.clear();
        }
        f.set(c, a);
      }
      const d = (v, u = void 0) => {
        if (_) {
          var p = u === ie;
          _(p);
        }
        if (!(u === ie || (o.f & Y) !== 0)) {
          if (c.activate(), u) s.f |= ce, We(s, u);
          else {
            (s.f & ce) !== 0 && (s.f ^= ce), We(s, v);
            for (const [m, E] of f) {
              if (f.delete(m), m === c) break;
              E.reject(ie);
            }
          }
          c.deactivate();
        }
      };
      a.promise.then(d, (v) => d(null, v || "unknown"));
    }), Un(() => {
      for (const o of f.values()) o.reject(ie);
    }), new Promise((o) => {
      function a(c) {
        function _() {
          c === i ? o(s) : a(i);
        }
        c.then(_, _);
      }
      a(i);
    });
  }
  function Tn(e) {
    const t = gt(e);
    return $n(t), t;
  }
  function It(e) {
    const t = gt(e);
    return t.equals = wn, t;
  }
  function Xr(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) B(t[n]);
    }
  }
  function Zr(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & D) === 0) return (t.f & Y) === 0 ? t : null;
      t = t.parent;
    }
    return null;
  }
  function Ut(e) {
    var t, n = y;
    ne(Zr(e));
    try {
      e.f &= ~ke, Xr(e), t = Gn(e);
    } finally {
      ne(n);
    }
    return t;
  }
  function On(e) {
    var t = e.v, n = Ut(e);
    if (!e.equals(n) && (e.wv = Hn(), (!(A == null ? void 0 : A.is_fork) || e.deps === null) && (e.v = n, A == null ? void 0 : A.capture(e, t), e.deps === null))) {
      O(e, P);
      return;
    }
    he || (Z !== null ? (Wt() || (A == null ? void 0 : A.is_fork)) && Z.set(e, n) : Nt(e));
  }
  function Jr(e) {
    var _a4, _b2;
    if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && ((_a4 = t.teardown) == null ? void 0 : _a4.call(t), (_b2 = t.ac) == null ? void 0 : _b2.abort(ie), t.teardown = br, t.ac = null, Ze(t, 0), qt(t));
  }
  function Pn(e) {
    if (e.effects !== null) for (const t of e.effects) t.teardown && ze(t);
  }
  let St = /* @__PURE__ */ new Set();
  const _e = /* @__PURE__ */ new Map();
  let Rn = false;
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
  function oe(e, t) {
    const n = Se(e);
    return $n(n), n;
  }
  function De(e, t = false, n = true) {
    var _a4;
    const r = Se(e);
    return t || (r.equals = wn), Je && n && R !== null && R.l !== null && ((_a4 = R.l).s ?? (_a4.s = [])).push(r), r;
  }
  function N(e, t, n = false) {
    w !== null && (!J || (w.f & Kt) !== 0) && et() && (w.f & (D | ve | Dt | Kt)) !== 0 && (G === null || !Ue.call(G, e)) && Cr();
    let r = n ? Me(t) : t;
    return We(e, r, ot);
  }
  function We(e, t, n = null) {
    if (!e.equals(t)) {
      var r = e.v;
      he ? _e.set(e, t) : _e.set(e, r), e.v = t;
      var i = de.ensure();
      if (i.capture(e, r), (e.f & D) !== 0) {
        const s = e;
        (e.f & I) !== 0 && Ut(s), Z === null && Nt(s);
      }
      e.wv = Hn(), Fn(e, I, n), et() && y !== null && (y.f & P) !== 0 && (y.f & (Q | xe)) === 0 && ($ === null ? ui([
        e
      ]) : $.push(e)), !i.is_fork && St.size > 0 && !Rn && Qr();
    }
    return t;
  }
  function Qr() {
    Rn = false;
    for (const e of St) (e.f & P) !== 0 && O(e, te), nt(e) && ze(e);
    St.clear();
  }
  function Ge(e) {
    N(e, e.v + 1);
  }
  function Fn(e, t, n) {
    var r = e.reactions;
    if (r !== null) for (var i = et(), s = r.length, l = 0; l < s; l++) {
      var f = r[l], o = f.f;
      if (!(!i && f === y)) {
        var a = (o & I) === 0;
        if (a && O(f, t), (o & D) !== 0) {
          var c = f;
          Z == null ? void 0 : Z.delete(c), (o & ke) === 0 && (o & H && (f.f |= ke), Fn(c, te, n));
        } else if (a) {
          var _ = f;
          (o & ve) !== 0 && re !== null && re.add(_), n !== null ? n.push(_) : Lt(_);
        }
      }
    }
  }
  function Me(e) {
    if (typeof e != "object" || e === null || Ie in e) return e;
    const t = Ft(e);
    if (t !== wr && t !== yr) return e;
    var n = /* @__PURE__ */ new Map(), r = vt(e), i = oe(0), s = Ee, l = (f) => {
      if (Ee === s) return f();
      var o = w, a = Ee;
      K(null), tn(s);
      var c = f();
      return K(o), tn(a), c;
    };
    return r && n.set("length", oe(e.length)), new Proxy(e, {
      defineProperty(f, o, a) {
        (!("value" in a) || a.configurable === false || a.enumerable === false || a.writable === false) && Dr();
        var c = n.get(o);
        return c === void 0 ? l(() => {
          var _ = oe(a.value);
          return n.set(o, _), _;
        }) : N(c, a.value, true), true;
      },
      deleteProperty(f, o) {
        var a = n.get(o);
        if (a === void 0) {
          if (o in f) {
            const c = l(() => oe(C));
            n.set(o, c), Ge(i);
          }
        } else N(a, C), Ge(i);
        return true;
      },
      get(f, o, a) {
        var _a4;
        if (o === Ie) return e;
        var c = n.get(o), _ = o in f;
        if (c === void 0 && (!_ || ((_a4 = Le(f, o)) == null ? void 0 : _a4.writable)) && (c = l(() => {
          var v = Me(_ ? f[o] : C), u = oe(v);
          return u;
        }), n.set(o, c)), c !== void 0) {
          var d = g(c);
          return d === C ? void 0 : d;
        }
        return Reflect.get(f, o, a);
      },
      getOwnPropertyDescriptor(f, o) {
        var a = Reflect.getOwnPropertyDescriptor(f, o);
        if (a && "value" in a) {
          var c = n.get(o);
          c && (a.value = g(c));
        } else if (a === void 0) {
          var _ = n.get(o), d = _ == null ? void 0 : _.v;
          if (_ !== void 0 && d !== C) return {
            enumerable: true,
            configurable: true,
            value: d,
            writable: true
          };
        }
        return a;
      },
      has(f, o) {
        var _a4;
        if (o === Ie) return true;
        var a = n.get(o), c = a !== void 0 && a.v !== C || Reflect.has(f, o);
        if (a !== void 0 || y !== null && (!c || ((_a4 = Le(f, o)) == null ? void 0 : _a4.writable))) {
          a === void 0 && (a = l(() => {
            var d = c ? Me(f[o]) : C, v = oe(d);
            return v;
          }), n.set(o, a));
          var _ = g(a);
          if (_ === C) return false;
        }
        return c;
      },
      set(f, o, a, c) {
        var _a4;
        var _ = n.get(o), d = o in f;
        if (r && o === "length") for (var v = a; v < _.v; v += 1) {
          var u = n.get(v + "");
          u !== void 0 ? N(u, C) : v in f && (u = l(() => oe(C)), n.set(v + "", u));
        }
        if (_ === void 0) (!d || ((_a4 = Le(f, o)) == null ? void 0 : _a4.writable)) && (_ = l(() => oe(void 0)), N(_, Me(a)), n.set(o, _));
        else {
          d = _.v !== C;
          var p = l(() => Me(a));
          N(_, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, o);
        if ((m == null ? void 0 : m.set) && m.set.call(c, a), !d) {
          if (r && typeof o == "string") {
            var E = n.get("length"), h = Number(o);
            Number.isInteger(h) && h >= E.v && N(E, h + 1);
          }
          Ge(i);
        }
        return true;
      },
      ownKeys(f) {
        g(i);
        var o = Reflect.ownKeys(f).filter((_) => {
          var d = n.get(_);
          return d === void 0 || d.v !== C;
        });
        for (var [a, c] of n) c.v !== C && !(a in f) && o.push(a);
        return o;
      },
      setPrototypeOf() {
        Mr();
      }
    });
  }
  var Jt, Dn, Mn, Cn;
  function ei() {
    if (Jt === void 0) {
      Jt = window, Dn = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, n = Text.prototype;
      Mn = Le(t, "firstChild").get, Cn = Le(t, "nextSibling").get, Yt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Yt(n) && (n.__t = void 0);
    }
  }
  function fe(e = "") {
    return document.createTextNode(e);
  }
  function jt(e) {
    return Mn.call(e);
  }
  function tt(e) {
    return Cn.call(e);
  }
  function ee(e, t) {
    return jt(e);
  }
  function Nn(e, t = false) {
    {
      var n = jt(e);
      return n instanceof Comment && n.data === "" ? tt(n) : n;
    }
  }
  function Ce(e, t = 1, n = false) {
    let r = e;
    for (; t--; ) r = tt(r);
    return r;
  }
  function ti(e) {
    e.textContent = "";
  }
  function Ln() {
    return false;
  }
  function ni(e, t, n) {
    return document.createElementNS(cn, e, void 0);
  }
  function Bt(e) {
    var t = w, n = y;
    K(null), ne(null);
    try {
      return e();
    } finally {
      K(t), ne(n);
    }
  }
  function In(e) {
    y === null && (w === null && Rr(), Pr()), he && Or();
  }
  function ri(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
  }
  function le(e, t) {
    var n = y;
    n !== null && (n.f & z) !== 0 && (e |= z);
    var r = {
      ctx: R,
      deps: null,
      nodes: null,
      f: e | I | H,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: n,
      b: n && n.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    }, i = r;
    if ((e & Xe) !== 0) Fe !== null ? Fe.push(r) : de.ensure().schedule(r);
    else if (t !== null) {
      try {
        ze(r);
      } catch (l) {
        throw B(r), l;
      }
      i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & $e) === 0 && (i = i.first, (e & ve) !== 0 && (e & je) !== 0 && i !== null && (i.f |= je));
    }
    if (i !== null && (i.parent = n, n !== null && ri(i, n), w !== null && (w.f & D) !== 0 && (e & xe) === 0)) {
      var s = w;
      (s.effects ?? (s.effects = [])).push(i);
    }
    return r;
  }
  function Wt() {
    return w !== null && !J;
  }
  function Un(e) {
    const t = le(Qe, null);
    return O(t, P), t.teardown = e, t;
  }
  function Qt(e) {
    In();
    var t = y.f, n = !w && (t & Q) !== 0 && (t & Ae) === 0;
    if (n) {
      var r = R;
      (r.e ?? (r.e = [])).push(e);
    } else return jn(e);
  }
  function jn(e) {
    return le(Xe | pn, e);
  }
  function ii(e) {
    return In(), le(Qe | pn, e);
  }
  function si(e) {
    de.ensure();
    const t = le(xe | $e, e);
    return (n = {}) => new Promise((r) => {
      n.outro ? me(t, () => {
        B(t), r(void 0);
      }) : (B(t), r(void 0));
    });
  }
  function fi(e) {
    return le(Dt | $e, e);
  }
  function li(e, t = 0) {
    return le(Qe | t, e);
  }
  function Ke(e, t = [], n = [], r = []) {
    Yr(r, t, n, (i) => {
      le(Qe, () => e(...i.map(g)));
    });
  }
  function zt(e, t = 0) {
    var n = le(ve | t, e);
    return n;
  }
  function V(e) {
    return le(Q | $e, e);
  }
  function Bn(e) {
    var t = e.teardown;
    if (t !== null) {
      const n = he, r = w;
      en(true), K(null);
      try {
        t.call(null);
      } finally {
        en(n), K(r);
      }
    }
  }
  function qt(e, t = false) {
    var n = e.first;
    for (e.first = e.last = null; n !== null; ) {
      const i = n.ac;
      i !== null && Bt(() => {
        i.abort(ie);
      });
      var r = n.next;
      (n.f & xe) !== 0 ? n.parent = null : B(n, t), n = r;
    }
  }
  function oi(e) {
    for (var t = e.first; t !== null; ) {
      var n = t.next;
      (t.f & Q) === 0 && B(t), t = n;
    }
  }
  function B(e, t = true) {
    var n = false;
    (t || (e.f & Er) !== 0) && e.nodes !== null && e.nodes.end !== null && (ai(e.nodes.start, e.nodes.end), n = true), O(e, Gt), qt(e, t && !n), Ze(e, 0);
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const s of r) s.stop();
    Bn(e), e.f ^= Gt, e.f |= Y;
    var i = e.parent;
    i !== null && i.first !== null && Wn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
  }
  function ai(e, t) {
    for (; e !== null; ) {
      var n = e === t ? null : tt(e);
      e.remove(), e = n;
    }
  }
  function Wn(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
  }
  function me(e, t, n = true) {
    var r = [];
    zn(e, r, true);
    var i = () => {
      n && B(e), t && t();
    }, s = r.length;
    if (s > 0) {
      var l = () => --s || i();
      for (var f of r) f.out(l);
    } else i();
  }
  function zn(e, t, n) {
    if ((e.f & z) === 0) {
      e.f ^= z;
      var r = e.nodes && e.nodes.t;
      if (r !== null) for (const f of r) (f.is_global || n) && t.push(f);
      for (var i = e.first; i !== null; ) {
        var s = i.next, l = (i.f & je) !== 0 || (i.f & Q) !== 0 && (e.f & ve) !== 0;
        zn(i, t, l ? n : false), i = s;
      }
    }
  }
  function $t(e) {
    qn(e, true);
  }
  function qn(e, t) {
    if ((e.f & z) !== 0) {
      e.f ^= z, (e.f & P) === 0 && (O(e, I), de.ensure().schedule(e));
      for (var n = e.first; n !== null; ) {
        var r = n.next, i = (n.f & je) !== 0 || (n.f & Q) !== 0;
        qn(n, i ? t : false), n = r;
      }
      var s = e.nodes && e.nodes.t;
      if (s !== null) for (const l of s) (l.is_global || t) && l.in();
    }
  }
  function Vt(e, t) {
    if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : tt(n);
      t.append(n), n = i;
    }
  }
  let at = false, he = false;
  function en(e) {
    he = e;
  }
  let w = null, J = false;
  function K(e) {
    w = e;
  }
  let y = null;
  function ne(e) {
    y = e;
  }
  let G = null;
  function $n(e) {
    w !== null && (G === null ? G = [
      e
    ] : G.push(e));
  }
  let j = null, W = 0, $ = null;
  function ui(e) {
    $ = e;
  }
  let Vn = 1, we = 0, Ee = we;
  function tn(e) {
    Ee = e;
  }
  function Hn() {
    return ++Vn;
  }
  function nt(e) {
    var t = e.f;
    if ((t & I) !== 0) return true;
    if (t & D && (e.f &= ~ke), (t & te) !== 0) {
      for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (nt(s) && On(s), s.wv > e.wv) return true;
      }
      (t & H) !== 0 && Z === null && O(e, P);
    }
    return false;
  }
  function Yn(e, t, n = true) {
    var r = e.reactions;
    if (r !== null && !(G !== null && Ue.call(G, e))) for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & D) !== 0 ? Yn(s, t, false) : t === s && (n ? O(s, I) : (s.f & P) !== 0 && O(s, te), Lt(s));
    }
  }
  function Gn(e) {
    var _a4;
    var t = j, n = W, r = $, i = w, s = G, l = R, f = J, o = Ee, a = e.f;
    j = null, W = 0, $ = null, w = (a & (Q | xe)) === 0 ? e : null, G = null, Be(e.ctx), J = false, Ee = ++we, e.ac !== null && (Bt(() => {
      e.ac.abort(ie);
    }), e.ac = null);
    try {
      e.f |= xt;
      var c = e.fn, _ = c();
      e.f |= Ae;
      var d = e.deps, v = A == null ? void 0 : A.is_fork;
      if (j !== null) {
        var u;
        if (v || Ze(e, W), d !== null && W > 0) for (d.length = W + j.length, u = 0; u < j.length; u++) d[W + u] = j[u];
        else e.deps = d = j;
        if (Wt() && (e.f & H) !== 0) for (u = W; u < d.length; u++) ((_a4 = d[u]).reactions ?? (_a4.reactions = [])).push(e);
      } else !v && d !== null && W < d.length && (Ze(e, W), d.length = W);
      if (et() && $ !== null && !J && d !== null && (e.f & (D | te | I)) === 0) for (u = 0; u < $.length; u++) Yn($[u], e);
      if (i !== null && i !== e) {
        if (we++, i.deps !== null) for (let p = 0; p < n; p += 1) i.deps[p].rv = we;
        if (t !== null) for (const p of t) p.rv = we;
        $ !== null && (r === null ? r = $ : r.push(...$));
      }
      return (e.f & ce) !== 0 && (e.f ^= ce), _;
    } catch (p) {
      return yn(p);
    } finally {
      e.f ^= xt, j = t, W = n, $ = r, w = i, G = s, Be(l), J = f, Ee = o;
    }
  }
  function ci(e, t) {
    let n = t.reactions;
    if (n !== null) {
      var r = pr.call(n, e);
      if (r !== -1) {
        var i = n.length - 1;
        i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
      }
    }
    if (n === null && (t.f & D) !== 0 && (j === null || !Ue.call(j, t))) {
      var s = t;
      (s.f & H) !== 0 && (s.f ^= H, s.f &= ~ke), Nt(s), Jr(s), Ze(s, 0);
    }
  }
  function Ze(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) ci(e, n[r]);
  }
  function ze(e) {
    var t = e.f;
    if ((t & Y) === 0) {
      O(e, P);
      var n = y, r = at;
      y = e, at = true;
      try {
        (t & (ve | vn)) !== 0 ? oi(e) : qt(e), Bn(e);
        var i = Gn(e);
        e.teardown = typeof i == "function" ? i : null, e.wv = Vn;
        var s;
        vr && fr && (e.f & I) !== 0 && e.deps;
      } finally {
        at = r, y = n;
      }
    }
  }
  function g(e) {
    var t = e.f, n = (t & D) !== 0;
    if (w !== null && !J) {
      var r = y !== null && (y.f & Y) !== 0;
      if (!r && (G === null || !Ue.call(G, e))) {
        var i = w.deps;
        if ((w.f & xt) !== 0) e.rv < we && (e.rv = we, j === null && i !== null && i[W] === e ? W++ : j === null ? j = [
          e
        ] : j.push(e));
        else {
          (w.deps ?? (w.deps = [])).push(e);
          var s = e.reactions;
          s === null ? e.reactions = [
            w
          ] : Ue.call(s, w) || s.push(w);
        }
      }
    }
    if (he && _e.has(e)) return _e.get(e);
    if (n) {
      var l = e;
      if (he) {
        var f = l.v;
        return ((l.f & P) === 0 && l.reactions !== null || Xn(l)) && (f = Ut(l)), _e.set(l, f), f;
      }
      var o = (l.f & H) === 0 && !J && w !== null && (at || (w.f & H) !== 0), a = (l.f & Ae) === 0;
      nt(l) && (o && (l.f |= H), On(l)), o && !a && (Pn(l), Kn(l));
    }
    if (Z == null ? void 0 : Z.has(e)) return Z.get(e);
    if ((e.f & ce) !== 0) throw e.v;
    return e.v;
  }
  function Kn(e) {
    if (e.f |= H, e.deps !== null) for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & H) === 0 && (Pn(t), Kn(t));
  }
  function Xn(e) {
    if (e.v === C) return true;
    if (e.deps === null) return false;
    for (const t of e.deps) if (_e.has(t) || (t.f & D) !== 0 && Xn(t)) return true;
    return false;
  }
  function ye(e) {
    var t = J;
    try {
      return J = true, e();
    } finally {
      J = t;
    }
  }
  function Zn(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (Ie in e) At(e);
      else if (!Array.isArray(e)) for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ie in n && At(n);
      }
    }
  }
  function At(e, t = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
      t.add(e), e instanceof Date && e.getTime();
      for (let r in e) try {
        At(e[r], t);
      } catch {
      }
      const n = Ft(e);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = _n(n);
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
  const st = /* @__PURE__ */ Symbol("events"), _i = /* @__PURE__ */ new Set(), nn = /* @__PURE__ */ new Set();
  function di(e, t, n, r = {}) {
    function i(s) {
      if (r.capture || Tt.call(t, s), !s.cancelBubble) return Bt(() => n == null ? void 0 : n.call(this, s));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? be(() => {
      t.addEventListener(e, i, r);
    }) : t.addEventListener(e, i, r), i;
  }
  function He(e, t, n, r, i) {
    var s = {
      capture: r,
      passive: i
    }, l = di(e, t, n, s);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Un(() => {
      t.removeEventListener(e, l, s);
    });
  }
  let rn = null;
  function Tt(e) {
    var _a4, _b2;
    var t = this, n = t.ownerDocument, r = e.type, i = ((_a4 = e.composedPath) == null ? void 0 : _a4.call(e)) || [], s = i[0] || e.target;
    rn = e;
    var l = 0, f = rn === e && e[st];
    if (f) {
      var o = i.indexOf(f);
      if (o !== -1 && (t === document || t === window)) {
        e[st] = t;
        return;
      }
      var a = i.indexOf(t);
      if (a === -1) return;
      o <= a && (l = o);
    }
    if (s = i[l] || e.target, s !== t) {
      gr(e, "currentTarget", {
        configurable: true,
        get() {
          return s || n;
        }
      });
      var c = w, _ = y;
      K(null), ne(null);
      try {
        for (var d, v = []; s !== null; ) {
          var u = s.assignedSlot || s.parentNode || s.host || null;
          try {
            var p = (_b2 = s[st]) == null ? void 0 : _b2[r];
            p != null && (!s.disabled || e.target === s) && p.call(s, e);
          } catch (m) {
            d ? v.push(m) : d = m;
          }
          if (e.cancelBubble || u === t || u === null) break;
          s = u;
        }
        if (d) {
          for (let m of v) queueMicrotask(() => {
            throw m;
          });
          throw d;
        }
      } finally {
        e[st] = t, delete e.currentTarget, K(c), ne(_);
      }
    }
  }
  const hi = ((_b = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : _b.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    createHTML: (e) => e
  });
  function vi(e) {
    return (hi == null ? void 0 : hi.createHTML(e)) ?? e;
  }
  function pi(e) {
    var t = ni("template");
    return t.innerHTML = vi(e.replaceAll("<!>", "<!---->")), t.content;
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
  function Te(e, t) {
    var n = (t & hr) !== 0, r, i = !e.startsWith("<!>");
    return () => {
      r === void 0 && (r = pi(i ? e : "<!>" + e), r = jt(r));
      var s = n || Dn ? document.importNode(r, true) : r.cloneNode(true);
      return Ht(s, s), s;
    };
  }
  function sn(e = "") {
    {
      var t = fe(e + "");
      return Ht(t, t), t;
    }
  }
  function Jn() {
    var e = document.createDocumentFragment(), t = document.createComment(""), n = fe();
    return e.append(t, n), Ht(t, n), e;
  }
  function X(e, t) {
    e !== null && e.before(t);
  }
  const gi = [
    "touchstart",
    "touchmove"
  ];
  function wi(e) {
    return gi.includes(e);
  }
  function Ot(e, t) {
    var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
    n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
  }
  function yi(e, t) {
    return bi(e, t);
  }
  const ft = /* @__PURE__ */ new Map();
  function bi(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = true, transformError: f }) {
    ei();
    var o = void 0, a = si(() => {
      var c = n ?? t.appendChild(fe());
      Vr(c, {
        pending: () => {
        }
      }, (v) => {
        Mt({});
        var u = R;
        s && (u.c = s), i && (r.$$events = i), o = e(v, r) || {}, Ct();
      }, f);
      var _ = /* @__PURE__ */ new Set(), d = (v) => {
        for (var u = 0; u < v.length; u++) {
          var p = v[u];
          if (!_.has(p)) {
            _.add(p);
            var m = wi(p);
            for (const b of [
              t,
              document
            ]) {
              var E = ft.get(b);
              E === void 0 && (E = /* @__PURE__ */ new Map(), ft.set(b, E));
              var h = E.get(p);
              h === void 0 ? (b.addEventListener(p, Tt, {
                passive: m
              }), E.set(p, 1)) : E.set(p, h + 1);
            }
          }
        }
      };
      return d(pt(_i)), nn.add(d), () => {
        var _a4;
        for (var v of _) for (const m of [
          t,
          document
        ]) {
          var u = ft.get(m), p = u.get(v);
          --p == 0 ? (m.removeEventListener(v, Tt), u.delete(v), u.size === 0 && ft.delete(m)) : u.set(v, p);
        }
        nn.delete(d), c !== n && ((_a4 = c.parentNode) == null ? void 0 : _a4.removeChild(c));
      };
    });
    return mi.set(o, a), o;
  }
  let mi = /* @__PURE__ */ new WeakMap();
  class Ei {
    constructor(t, n = true) {
      __publicField(this, "anchor");
      __privateAdd(this, _e4, /* @__PURE__ */ new Map());
      __privateAdd(this, _o3, /* @__PURE__ */ new Map());
      __privateAdd(this, _t4, /* @__PURE__ */ new Map());
      __privateAdd(this, _f3, /* @__PURE__ */ new Set());
      __privateAdd(this, _r4, true);
      __privateAdd(this, _n4, (t) => {
        if (__privateGet(this, _e4).has(t)) {
          var n = __privateGet(this, _e4).get(t), r = __privateGet(this, _o3).get(n);
          if (r) $t(r), __privateGet(this, _f3).delete(n);
          else {
            var i = __privateGet(this, _t4).get(n);
            i && (__privateGet(this, _o3).set(n, i.effect), __privateGet(this, _t4).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
          }
          for (const [s, l] of __privateGet(this, _e4)) {
            if (__privateGet(this, _e4).delete(s), s === t) break;
            const f = __privateGet(this, _t4).get(l);
            f && (B(f.effect), __privateGet(this, _t4).delete(l));
          }
          for (const [s, l] of __privateGet(this, _o3)) {
            if (s === n || __privateGet(this, _f3).has(s)) continue;
            const f = () => {
              if (Array.from(__privateGet(this, _e4).values()).includes(s)) {
                var a = document.createDocumentFragment();
                Vt(l, a), a.append(fe()), __privateGet(this, _t4).set(s, {
                  effect: l,
                  fragment: a
                });
              } else B(l);
              __privateGet(this, _f3).delete(s), __privateGet(this, _o3).delete(s);
            };
            __privateGet(this, _r4) || !r ? (__privateGet(this, _f3).add(s), me(l, f, false)) : f();
          }
        }
      });
      __privateAdd(this, _i4, (t) => {
        __privateGet(this, _e4).delete(t);
        const n = Array.from(__privateGet(this, _e4).values());
        for (const [r, i] of __privateGet(this, _t4)) n.includes(r) || (B(i.effect), __privateGet(this, _t4).delete(r));
      });
      this.anchor = t, __privateSet(this, _r4, n);
    }
    ensure(t, n) {
      var r = A, i = Ln();
      if (n && !__privateGet(this, _o3).has(t) && !__privateGet(this, _t4).has(t)) if (i) {
        var s = document.createDocumentFragment(), l = fe();
        s.append(l), __privateGet(this, _t4).set(t, {
          effect: V(() => n(l)),
          fragment: s
        });
      } else __privateGet(this, _o3).set(t, V(() => n(this.anchor)));
      if (__privateGet(this, _e4).set(r, t), i) {
        for (const [f, o] of __privateGet(this, _o3)) f === t ? r.unskip_effect(o) : r.skip_effect(o);
        for (const [f, o] of __privateGet(this, _t4)) f === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
        r.oncommit(__privateGet(this, _n4)), r.ondiscard(__privateGet(this, _i4));
      } else __privateGet(this, _n4).call(this, r);
    }
  }
  _e4 = new WeakMap();
  _o3 = new WeakMap();
  _t4 = new WeakMap();
  _f3 = new WeakMap();
  _r4 = new WeakMap();
  _n4 = new WeakMap();
  _i4 = new WeakMap();
  function xi(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  function ki() {
    const e = R;
    return e === null && Sr(), (t, n, r) => {
      var _a4;
      const i = (_a4 = e.s.$$events) == null ? void 0 : _a4[t];
      if (i) {
        const s = vt(i) ? i.slice() : [
          i
        ], l = xi(t, n, r);
        for (const f of s) f.call(e.x, l);
        return !l.defaultPrevented;
      }
      return true;
    };
  }
  function ht(e, t, n = false) {
    var r = new Ei(e), i = n ? je : 0;
    function s(l, f) {
      r.ensure(l, f);
    }
    zt(() => {
      var l = false;
      t((f, o = 0) => {
        l = true, s(o, f);
      }), l || s(-1, null);
    }, i);
  }
  function Qn(e, t) {
    return t;
  }
  function Si(e, t, n) {
    for (var r = [], i = t.length, s, l = t.length, f = 0; f < i; f++) {
      let _ = t[f];
      me(_, () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var d = e.outrogroups;
            Pt(e, pt(s.done)), d.delete(s), d.size === 0 && (e.outrogroups = null);
          }
        } else l -= 1;
      }, false);
    }
    if (l === 0) {
      var o = r.length === 0 && n !== null;
      if (o) {
        var a = n, c = a.parentNode;
        ti(c), c.append(a), e.items.clear();
      }
      Pt(e, t, !o);
    } else s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
  }
  function Pt(e, t, n = true) {
    var r;
    if (e.pending.size > 0) {
      r = /* @__PURE__ */ new Set();
      for (const l of e.pending.values()) for (const f of l) r.add(e.items.get(f).e);
    }
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      if (r == null ? void 0 : r.has(s)) {
        s.f |= se;
        const l = document.createDocumentFragment();
        Vt(s, l);
      } else B(t[i], n);
    }
  }
  var fn;
  function er(e, t, n, r, i, s = null) {
    var l = e, f = /* @__PURE__ */ new Map();
    {
      var o = e;
      l = o.appendChild(fe());
    }
    var a = null, c = It(() => {
      var h = n();
      return vt(h) ? h : h == null ? [] : pt(h);
    }), _, d = /* @__PURE__ */ new Map(), v = true;
    function u(h) {
      (E.effect.f & Y) === 0 && (E.pending.delete(h), E.fallback = a, Ai(E, _, l, t, r), a !== null && (_.length === 0 ? (a.f & se) === 0 ? $t(a) : (a.f ^= se, Ye(a, null, l)) : me(a, () => {
        a = null;
      })));
    }
    function p(h) {
      E.pending.delete(h);
    }
    var m = zt(() => {
      _ = g(c);
      for (var h = _.length, b = /* @__PURE__ */ new Set(), k = A, M = Ln(), F = 0; F < h; F += 1) {
        var q = _[F], T = r(q, F), x = v ? null : f.get(T);
        x ? (x.v && We(x.v, q), x.i && We(x.i, F), M && k.unskip_effect(x.e)) : (x = Ti(f, v ? l : fn ?? (fn = fe()), q, T, F, i, t, n), v || (x.e.f |= se), f.set(T, x)), b.add(T);
      }
      if (h === 0 && s && !a && (v ? a = V(() => s(l)) : (a = V(() => s(fn ?? (fn = fe()))), a.f |= se)), h > b.size && Tr(), !v) if (d.set(k, b), M) {
        for (const [L, U] of f) b.has(L) || k.skip_effect(U.e);
        k.oncommit(u), k.ondiscard(p);
      } else u(k);
      g(c);
    }), E = {
      effect: m,
      items: f,
      pending: d,
      outrogroups: null,
      fallback: a
    };
    v = false;
  }
  function Ve(e) {
    for (; e !== null && (e.f & Q) === 0; ) e = e.next;
    return e;
  }
  function Ai(e, t, n, r, i) {
    var _a4;
    var s = t.length, l = e.items, f = Ve(e.effect.first), o, a = null, c = [], _ = [], d, v, u, p;
    for (p = 0; p < s; p += 1) {
      if (d = t[p], v = i(d, p), u = l.get(v).e, e.outrogroups !== null) for (const T of e.outrogroups) T.pending.delete(u), T.done.delete(u);
      if ((u.f & z) !== 0 && $t(u), (u.f & se) !== 0) if (u.f ^= se, u === f) Ye(u, null, n);
      else {
        var m = a ? a.next : f;
        u === e.effect.last && (e.effect.last = u.prev), u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), ae(e, a, u), ae(e, u, m), Ye(u, m, n), a = u, c = [], _ = [], f = Ve(a.next);
        continue;
      }
      if (u !== f) {
        if (o !== void 0 && o.has(u)) {
          if (c.length < _.length) {
            var E = _[0], h;
            a = E.prev;
            var b = c[0], k = c[c.length - 1];
            for (h = 0; h < c.length; h += 1) Ye(c[h], E, n);
            for (h = 0; h < _.length; h += 1) o.delete(_[h]);
            ae(e, b.prev, k.next), ae(e, a, b), ae(e, k, E), f = E, a = k, p -= 1, c = [], _ = [];
          } else o.delete(u), Ye(u, f, n), ae(e, u.prev, u.next), ae(e, u, a === null ? e.effect.first : a.next), ae(e, a, u), a = u;
          continue;
        }
        for (c = [], _ = []; f !== null && f !== u; ) (o ?? (o = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Ve(f.next);
        if (f === null) continue;
      }
      (u.f & se) === 0 && c.push(u), a = u, f = Ve(u.next);
    }
    if (e.outrogroups !== null) {
      for (const T of e.outrogroups) T.pending.size === 0 && (Pt(e, pt(T.done)), (_a4 = e.outrogroups) == null ? void 0 : _a4.delete(T));
      e.outrogroups.size === 0 && (e.outrogroups = null);
    }
    if (f !== null || o !== void 0) {
      var M = [];
      if (o !== void 0) for (u of o) (u.f & z) === 0 && M.push(u);
      for (; f !== null; ) (f.f & z) === 0 && f !== e.fallback && M.push(f), f = Ve(f.next);
      var F = M.length;
      if (F > 0) {
        var q = s === 0 ? n : null;
        Si(e, M, q);
      }
    }
  }
  function Ti(e, t, n, r, i, s, l, f) {
    var o = (l & or) !== 0 ? (l & ur) === 0 ? De(n, false, false) : Se(n) : null, a = (l & ar) !== 0 ? Se(i) : null;
    return {
      v: o,
      i: a,
      e: V(() => (s(t, o ?? n, a ?? i, f), () => {
        e.delete(r);
      }))
    };
  }
  function Ye(e, t, n) {
    if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & se) === 0 ? t.nodes.start : n; r !== null; ) {
      var l = tt(r);
      if (s.before(r), r === i) return;
      r = l;
    }
  }
  function ae(e, t, n) {
    t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
  }
  const Oi = /* @__PURE__ */ Symbol("is custom element"), Pi = /* @__PURE__ */ Symbol("is html");
  function yt(e, t, n, r) {
    var i = Ri(e);
    i[t] !== (i[t] = n) && (t === "loading" && (e[kr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Fi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
  }
  function Ri(e) {
    return e.__attributes ?? (e.__attributes = {
      [Oi]: e.nodeName.includes("-"),
      [Pi]: e.namespaceURI === cn
    });
  }
  var ln = /* @__PURE__ */ new Map();
  function Fi(e) {
    var t = e.getAttribute("is") || e.nodeName, n = ln.get(t);
    if (n) return n;
    ln.set(t, n = []);
    for (var r, i = e, s = Element.prototype; s !== i; ) {
      r = _n(i);
      for (var l in r) r[l].set && n.push(l);
      i = Ft(i);
    }
    return n;
  }
  function tr(e = false) {
    const t = R, n = t.l.u;
    if (!n) return;
    let r = () => Zn(t.s);
    if (e) {
      let i = 0, s = {};
      const l = gt(() => {
        let f = false;
        const o = t.s;
        for (const a in o) o[a] !== s[a] && (s[a] = o[a], f = true);
        return f && i++, i;
      });
      r = () => g(l);
    }
    n.b.length && ii(() => {
      on(t, r), mt(n.b);
    }), Qt(() => {
      const i = ye(() => n.m.map(mr));
      return () => {
        for (const s of i) typeof s == "function" && s();
      };
    }), n.a.length && Qt(() => {
      on(t, r), mt(n.a);
    });
  }
  function on(e, t) {
    if (e.l.s) for (const n of e.l.s) g(n);
    t();
  }
  function Di(e, t) {
    var _a4;
    var n = (_a4 = e.$$events) == null ? void 0 : _a4[t.type], r = vt(n) ? n.slice() : n == null ? [] : [
      n
    ];
    for (var i of r) i.call(this, t);
  }
  function ut(e, t, n, r) {
    var _a4;
    var i = !Je || (n & cr) !== 0, s = (n & dr) !== 0, l = r, f = true, o = () => (f && (f = false, l = r), l);
    let a;
    {
      var c = Ie in e || xr in e;
      a = ((_a4 = Le(e, t)) == null ? void 0 : _a4.set) ?? (c && t in e ? (h) => e[t] = h : void 0);
    }
    var _, d = false;
    [_, d] = Br(() => e[t]);
    var v;
    if (i ? v = () => {
      var h = e[t];
      return h === void 0 ? o() : (f = true, h);
    } : v = () => {
      var h = e[t];
      return h !== void 0 && (l = void 0), h === void 0 ? l : h;
    }, i && (n & _r) === 0) return v;
    if (a) {
      var u = e.$$legacy;
      return (function(h, b) {
        return arguments.length > 0 ? ((!i || !b || u || d) && a(b ? v() : h), h) : v();
      });
    }
    var p = false, m = It(() => (p = false, v()));
    g(m);
    var E = y;
    return (function(h, b) {
      if (arguments.length > 0) {
        const k = b ? g(m) : i && s ? Me(h) : h;
        return N(m, k), p = true, l !== void 0 && (l = k), h;
      }
      return he && p || (E.f & Y) !== 0 ? m.v : g(m);
    });
  }
  var Mi = Te('<div style="display: inline; cursor: pointer;"> </div>'), Ci = Te('<div style="padding-left: 1em;"></div>'), Ni = Te('<div><div><!> <div style="display: inline;"> </div></div> <!></div>');
  function nr(e, t) {
    Mt(t, false);
    let n = ut(t, "name", 8), r = ut(t, "node", 8), i = ut(t, "popcapPak", 8), s = De(false), l = r() instanceof i().Entry;
    const f = ki();
    function o(h) {
      l && f("view", {
        node: r()
      });
    }
    function a() {
      l || N(s, !g(s));
    }
    tr();
    var c = Ni(), _ = ee(c), d = ee(_);
    {
      var v = (h) => {
        var b = Mi(), k = ee(b);
        Ke(() => Ot(k, g(s) ? "-" : "+")), He("click", b, a), He("keypress", b, a), X(h, b);
      };
      ht(d, (h) => {
        l || h(v);
      });
    }
    var u = Ce(d, 2), p = ee(u), m = Ce(_, 2);
    {
      var E = (h) => {
        var b = Ci();
        er(b, 5, () => (Zn(r()), ye(() => Object.entries(r()))), Qn, (k, M, F, q) => {
          var T = Tn(() => hn(g(M), 2));
          let x = () => g(T)[0], L = () => g(T)[1];
          var U = Jn(), pe = Nn(U);
          nr(pe, {
            get name() {
              return x();
            },
            get node() {
              return L();
            },
            get popcapPak() {
              return i();
            },
            $$events: {
              view(Oe) {
                Di.call(this, t, Oe);
              }
            }
          }), X(k, U);
        }), X(h, b);
      };
      ht(m, (h) => {
        g(s) && h(E);
      });
    }
    Ke(() => Ot(p, n())), He("click", u, o), He("keypress", u, o), X(e, c), Ct();
  }
  var Li = Te("<img/>"), Ii = Te('<audio controls="controls" type="audio/mp3"></audio>'), Ui = Te('<div style="display:flex; flex-direction: column; flex: 1;"><div><label for="load-file">Choose a PAK file:</label> <input type="file" id="load-file" name="load-file"/></div> <div style="display: flex; flex: 1; overflow: hidden;"><div style="flex: 2; display: flex; flex-direction: column;"><h2>Directory</h2> <div style="flex-grow: 1; flex-basis: auto; overflow-y: scroll; height: 0px;"></div></div> <div style="flex: 5; display: flex; align-items: center; justify-content: center;"><!></div></div></div>');
  function ji(e, t) {
    Mt(t, false);
    let n = ut(t, "popcapPak", 8), r = De({}), i = De(null), s = De(null), l = De(null);
    async function f(h) {
      let k = h.target.files[0];
      N(r, {}), k.arrayBuffer().catch(console.error).then((M) => {
        let F = new (n()).Pak(M), q = {};
        for (let T = 0; T < F.length; T++) {
          let x = F.entry(T), U = x.path().split(/[\\\/]/), pe = q;
          for (let Oe = 0; Oe < U.length; Oe++) {
            let rt = U[Oe];
            Oe + 1 < U.length ? (pe[rt] = pe[rt] || {}, pe = pe[rt]) : pe[rt] = x;
          }
        }
        console.log(q), N(r, q);
      });
    }
    function o(h) {
      let b = h.detail.node;
      N(l, b.name());
      let k = g(l).endsWith(".png") || g(l).endsWith(".gif"), M = g(l).endsWith(".txt") || g(l).endsWith(".xml"), F = g(l).endsWith(".ogg") || g(l).endsWith(".au");
      k ? N(i, "image") : M ? N(i, "text") : F ? N(i, "sound") : N(i, "unknown"), N(s, b.readFileData());
    }
    tr();
    var a = Ui(), c = ee(a), _ = Ce(ee(c), 2), d = Ce(c, 2), v = ee(d), u = Ce(ee(v), 2);
    er(u, 5, () => (g(r), ye(() => Object.entries(g(r)))), Qn, (h, b) => {
      var k = Tn(() => hn(g(b), 2));
      let M = () => g(k)[0], F = () => g(k)[1];
      nr(h, {
        get name() {
          return M();
        },
        get node() {
          return F();
        },
        get popcapPak() {
          return n();
        },
        $$events: {
          view: o
        }
      });
    });
    var p = Ce(v, 2), m = ee(p);
    {
      var E = (h) => {
        var b = Jn(), k = Nn(b);
        {
          var M = (x) => {
            var L = Li();
            Ke((U) => {
              yt(L, "alt", g(l)), yt(L, "src", U);
            }, [
              () => (g(s), ye(() => URL.createObjectURL(new Blob([
                g(s).buffer
              ]))))
            ]), X(x, L);
          }, F = (x) => {
            var L = sn();
            Ke((U) => Ot(L, U), [
              () => (g(s), ye(() => String.fromCharCode(...g(s))))
            ]), X(x, L);
          }, q = (x) => {
            var L = Ii();
            Ke((U) => yt(L, "src", U), [
              () => (g(s), ye(() => URL.createObjectURL(new Blob([
                g(s).buffer
              ]))))
            ]), X(x, L);
          }, T = (x) => {
            var L = sn("Unknown File Type");
            X(x, L);
          };
          ht(k, (x) => {
            g(i) == "image" ? x(M) : g(i) == "text" ? x(F, 1) : g(i) == "sound" ? x(q, 2) : x(T, -1);
          });
        }
        X(h, b);
      };
      ht(m, (h) => {
        g(s) != null && h(E);
      });
    }
    He("change", _, f), X(e, a), Ct();
  }
  const Bi = "" + new URL("popcap_pak_wasm_bg-uGLp1wrt.wasm", import.meta.url).href, Wi = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let i;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const s = atob(r);
        i = new Uint8Array(s.length);
        for (let l = 0; l < s.length; l++) i[l] = s.charCodeAt(l);
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
  class qe {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(qe.prototype);
      return n.__wbg_ptr = t, an.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, an.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      S.__wbg_entry_free(t, 0);
    }
    name() {
      let t, n;
      try {
        const s = S.entry_name(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Pe(s[2]);
        return t = r, n = i, Ne(r, i);
      } finally {
        S.__wbindgen_free(t, n, 1);
      }
    }
    name_lossy() {
      let t, n;
      try {
        const s = S.entry_name_lossy(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Pe(s[2]);
        return t = r, n = i, Ne(r, i);
      } finally {
        S.__wbindgen_free(t, n, 1);
      }
    }
    name_raw() {
      const t = S.entry_name_raw(this.__wbg_ptr);
      if (t[3]) throw Pe(t[2]);
      var n = ct(t[0], t[1]).slice();
      return S.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    path() {
      let t, n;
      try {
        const s = S.entry_path(this.__wbg_ptr);
        var r = s[0], i = s[1];
        if (s[3]) throw r = 0, i = 0, Pe(s[2]);
        return t = r, n = i, Ne(r, i);
      } finally {
        S.__wbindgen_free(t, n, 1);
      }
    }
    path_lossy() {
      let t, n;
      try {
        const r = S.entry_path_lossy(this.__wbg_ptr);
        return t = r[0], n = r[1], Ne(r[0], r[1]);
      } finally {
        S.__wbindgen_free(t, n, 1);
      }
    }
    path_raw() {
      const t = S.entry_path_raw(this.__wbg_ptr);
      var n = ct(t[0], t[1]).slice();
      return S.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    readFileData() {
      const t = S.entry_readFileData(this.__wbg_ptr);
      if (t[3]) throw Pe(t[2]);
      var n = ct(t[0], t[1]).slice();
      return S.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
  }
  Symbol.dispose && (qe.prototype[Symbol.dispose] = qe.prototype.free);
  class Rt {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, un.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      S.__wbg_pak_free(t, 0);
    }
    entry(t) {
      return S.pak_entry(this.__wbg_ptr, t);
    }
    get length() {
      return S.pak_length(this.__wbg_ptr) >>> 0;
    }
    constructor(t) {
      const n = S.pak_new(t);
      if (n[2]) throw Pe(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, un.register(this, this.__wbg_ptr, this), this;
    }
  }
  Symbol.dispose && (Rt.prototype[Symbol.dispose] = Rt.prototype.free);
  function zi(e, t) {
    return Error(Ne(e, t));
  }
  function qi(e) {
    return e === void 0;
  }
  function $i(e, t) {
    throw new Error(Ne(e, t));
  }
  function Vi(e) {
    return qe.__wrap(e);
  }
  function Hi(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function Yi(e) {
    return e.length;
  }
  function Gi(e) {
    return new Uint8Array(e);
  }
  function Ki(e, t, n) {
    Uint8Array.prototype.set.call(ct(e, t), n);
  }
  function Xi() {
    const e = S.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  const an = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => S.__wbg_entry_free(e >>> 0, 1)), un = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => S.__wbg_pak_free(e >>> 0, 1));
  function ct(e, t) {
    return e = e >>> 0, rr().subarray(e / 1, e / 1 + t);
  }
  function Ne(e, t) {
    return e = e >>> 0, Ji(e, t);
  }
  let lt = null;
  function rr() {
    return (lt === null || lt.byteLength === 0) && (lt = new Uint8Array(S.memory.buffer)), lt;
  }
  function Pe(e) {
    const t = S.__wbindgen_externrefs.get(e);
    return S.__externref_table_dealloc(e), t;
  }
  let _t = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  _t.decode();
  const Zi = 2146435072;
  let bt = 0;
  function Ji(e, t) {
    return bt += t, bt >= Zi && (_t = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), _t.decode(), bt = t), _t.decode(rr().subarray(e, e + t));
  }
  let S;
  function Qi(e) {
    S = e;
  }
  URL = globalThis.URL;
  const es = await Wi({
    "./popcap_pak_wasm_bg.js": {
      __wbg_entry_new: Vi,
      __wbg_new_5f486cdf45a04d78: Gi,
      __wbg_length_ea16607d7b61445b: Yi,
      __wbg_prototypesetcall_d62e5099504357e6: Ki,
      __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: Hi,
      __wbg___wbindgen_throw_6ddd609b62940d55: $i,
      __wbg_Error_83742b46f01ce22d: zi,
      __wbg___wbindgen_is_undefined_52709e72fb9f179c: qi,
      __wbindgen_init_externref_table: Xi
    }
  }, Bi), { memory: ts, __wbg_entry_free: ns, __wbg_pak_free: rs, entry_name: is, entry_name_lossy: ss, entry_name_raw: fs, entry_path: ls, entry_path_lossy: os, entry_path_raw: as, entry_readFileData: us, pak_entry: cs, pak_length: _s, pak_new: ds, __wbindgen_externrefs: hs, __externref_table_dealloc: vs, __wbindgen_free: ps, __wbindgen_start: ir } = es, gs = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: vs,
    __wbg_entry_free: ns,
    __wbg_pak_free: rs,
    __wbindgen_externrefs: hs,
    __wbindgen_free: ps,
    __wbindgen_start: ir,
    entry_name: is,
    entry_name_lossy: ss,
    entry_name_raw: fs,
    entry_path: ls,
    entry_path_lossy: os,
    entry_path_raw: as,
    entry_readFileData: us,
    memory: ts,
    pak_entry: cs,
    pak_length: _s,
    pak_new: ds
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Qi(gs);
  ir();
  const ws = Object.freeze(Object.defineProperty({
    __proto__: null,
    Entry: qe,
    Pak: Rt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var ys = Te('<div style="margin: 0.2em; display: flex; flex: 1;"><!></div>');
  function bs(e) {
    var t = ys(), n = ee(t);
    ji(n, {
      get popcapPak() {
        return ws;
      }
    }), X(e, t);
  }
  yi(bs, {
    target: document.body
  });
})();
