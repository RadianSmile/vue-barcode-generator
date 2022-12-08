import { defineComponent as kt, ref as re, onMounted as It, openBlock as Dt, createElementBlock as Bt, createElementVNode as s, withDirectives as ze, vModelText as jt, vModelSelect as Lt, withKeys as Nt, pushScopeId as Ct, popScopeId as Gt } from "vue";
var _e = {}, q = {}, l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
function Ht(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Ft = function t(e, r) {
  Ht(this, t), this.data = e, this.text = r.text || e, this.options = r;
};
l.default = Ft;
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.CODE39 = void 0;
var Xt = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), zt = l, Ut = Vt(zt);
function Vt(t) {
  return t && t.__esModule ? t : { default: t };
}
function qt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Jt(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Kt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Qt = function(t) {
  Kt(e, t);
  function e(r, n) {
    return qt(this, e), r = r.toUpperCase(), n.mod43 && (r += Zt(en(r))), Jt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return Xt(e, [{
    key: "encode",
    value: function() {
      for (var n = ae("*"), a = 0; a < this.data.length; a++)
        n += ae(this.data[a]) + "0";
      return n += ae("*"), {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
    }
  }]), e;
}(Ut.default), ot = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"], Wt = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
function ae(t) {
  return Yt(ut(t));
}
function Yt(t) {
  return Wt[t].toString(2);
}
function Zt(t) {
  return ot[t];
}
function ut(t) {
  return ot.indexOf(t);
}
function en(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    e += ut(t[r]);
  return e = e % 43, e;
}
q.CODE39 = Qt;
var p = {}, ve = {}, M = {}, f = {};
Object.defineProperty(f, "__esModule", {
  value: !0
});
var B;
function ie(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ft = f.SET_A = 0, ct = f.SET_B = 1, lt = f.SET_C = 2;
f.SHIFT = 98;
var tn = f.START_A = 103, nn = f.START_B = 104, rn = f.START_C = 105;
f.MODULO = 103;
f.STOP = 106;
f.FNC1 = 207;
f.SET_BY_CODE = (B = {}, ie(B, tn, ft), ie(B, nn, ct), ie(B, rn, lt), B);
f.SWAP = {
  101: ft,
  100: ct,
  99: lt
};
f.A_START_CHAR = String.fromCharCode(208);
f.B_START_CHAR = String.fromCharCode(209);
f.C_START_CHAR = String.fromCharCode(210);
f.A_CHARS = "[\0-_\xC8-\xCF]";
f.B_CHARS = "[ -\x7F\xC8-\xCF]";
f.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";
f.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
Object.defineProperty(M, "__esModule", {
  value: !0
});
var an = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), on = l, un = fn(on), h = f;
function fn(t) {
  return t && t.__esModule ? t : { default: t };
}
function cn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ln(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function dn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var hn = function(t) {
  dn(e, t);
  function e(r, n) {
    cn(this, e);
    var a = ln(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.substring(1), n));
    return a.bytes = r.split("").map(function(i) {
      return i.charCodeAt(0);
    }), a;
  }
  return an(e, [{
    key: "valid",
    value: function() {
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
    }
  }, {
    key: "encode",
    value: function() {
      var n = this.bytes, a = n.shift() - 105, i = h.SET_BY_CODE[a];
      if (i === void 0)
        throw new RangeError("The encoding does not start with a start character.");
      this.shouldEncodeAsEan128() === !0 && n.unshift(h.FNC1);
      var o = e.next(n, 1, i);
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
        data: e.getBar(a) + o.result + e.getBar((o.checksum + a) % h.MODULO) + e.getBar(h.STOP)
      };
    }
  }, {
    key: "shouldEncodeAsEan128",
    value: function() {
      var n = this.options.ean128 || !1;
      return typeof n == "string" && (n = n.toLowerCase() === "true"), n;
    }
  }], [{
    key: "getBar",
    value: function(n) {
      return h.BARS[n] ? h.BARS[n].toString() : "";
    }
  }, {
    key: "correctIndex",
    value: function(n, a) {
      if (a === h.SET_A) {
        var i = n.shift();
        return i < 32 ? i + 64 : i - 32;
      } else
        return a === h.SET_B ? n.shift() - 32 : (n.shift() - 48) * 10 + n.shift() - 48;
    }
  }, {
    key: "next",
    value: function(n, a, i) {
      if (!n.length)
        return { result: "", checksum: 0 };
      var o = void 0, u = void 0;
      if (n[0] >= 200) {
        u = n.shift() - 105;
        var d = h.SWAP[u];
        d !== void 0 ? o = e.next(n, a + 1, d) : ((i === h.SET_A || i === h.SET_B) && u === h.SHIFT && (n[0] = i === h.SET_A ? n[0] > 95 ? n[0] - 96 : n[0] : n[0] < 32 ? n[0] + 96 : n[0]), o = e.next(n, a + 1, i));
      } else
        u = e.correctIndex(n, i), o = e.next(n, a + 1, i);
      var x = e.getBar(u), Mt = u * a;
      return {
        result: x + o.result,
        checksum: Mt + o.checksum
      };
    }
  }]), e;
}(un.default);
M.default = hn;
var se = {};
Object.defineProperty(se, "__esModule", {
  value: !0
});
var O = f, dt = function(e) {
  return e.match(new RegExp("^" + O.A_CHARS + "*"))[0].length;
}, ht = function(e) {
  return e.match(new RegExp("^" + O.B_CHARS + "*"))[0].length;
}, _t = function(e) {
  return e.match(new RegExp("^" + O.C_CHARS + "*"))[0];
};
function ye(t, e) {
  var r = e ? O.A_CHARS : O.B_CHARS, n = t.match(new RegExp("^(" + r + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
  if (n)
    return n[1] + String.fromCharCode(204) + vt(t.substring(n[1].length));
  var a = t.match(new RegExp("^" + r + "+"))[0];
  return a.length === t.length ? t : a + String.fromCharCode(e ? 205 : 206) + ye(t.substring(a.length), !e);
}
function vt(t) {
  var e = _t(t), r = e.length;
  if (r === t.length)
    return t;
  t = t.substring(r);
  var n = dt(t) >= ht(t);
  return e + String.fromCharCode(n ? 206 : 205) + ye(t, n);
}
se.default = function(t) {
  var e = void 0, r = _t(t).length;
  if (r >= 2)
    e = O.C_START_CHAR + vt(t);
  else {
    var n = dt(t) > ht(t);
    e = (n ? O.A_START_CHAR : O.B_START_CHAR) + ye(t, n);
  }
  return e.replace(
    /[\xCD\xCE]([^])[\xCD\xCE]/,
    function(a, i) {
      return String.fromCharCode(203) + i;
    }
  );
};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
var _n = M, vn = st(_n), sn = se, yn = st(sn);
function st(t) {
  return t && t.__esModule ? t : { default: t };
}
function pn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function oe(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function gn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var On = function(t) {
  gn(e, t);
  function e(r, n) {
    if (pn(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(r))
      var a = oe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, yn.default)(r), n));
    else
      var a = oe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return oe(a);
  }
  return e;
}(vn.default);
ve.default = On;
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
var En = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), bn = M, wn = mn(bn), Ue = f;
function mn(t) {
  return t && t.__esModule ? t : { default: t };
}
function $n(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function xn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var An = function(t) {
  xn(e, t);
  function e(r, n) {
    return $n(this, e), Sn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, Ue.A_START_CHAR + r, n));
  }
  return En(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + Ue.A_CHARS + "+$").test(this.data);
    }
  }]), e;
}(wn.default);
pe.default = An;
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
var Rn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Pn = M, Tn = Mn(Pn), Ve = f;
function Mn(t) {
  return t && t.__esModule ? t : { default: t };
}
function kn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function In(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Dn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Bn = function(t) {
  Dn(e, t);
  function e(r, n) {
    return kn(this, e), In(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, Ve.B_START_CHAR + r, n));
  }
  return Rn(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + Ve.B_CHARS + "+$").test(this.data);
    }
  }]), e;
}(Tn.default);
ge.default = Bn;
var Oe = {};
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
var jn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Ln = M, Nn = Cn(Ln), qe = f;
function Cn(t) {
  return t && t.__esModule ? t : { default: t };
}
function Gn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Fn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Xn = function(t) {
  Fn(e, t);
  function e(r, n) {
    return Gn(this, e), Hn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, qe.C_START_CHAR + r, n));
  }
  return jn(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + qe.C_CHARS + "+$").test(this.data);
    }
  }]), e;
}(Nn.default);
Oe.default = Xn;
Object.defineProperty(p, "__esModule", {
  value: !0
});
p.CODE128C = p.CODE128B = p.CODE128A = p.CODE128 = void 0;
var zn = ve, Un = J(zn), Vn = pe, qn = J(Vn), Jn = ge, Kn = J(Jn), Qn = Oe, Wn = J(Qn);
function J(t) {
  return t && t.__esModule ? t : { default: t };
}
p.CODE128 = Un.default;
p.CODE128A = qn.default;
p.CODE128B = Kn.default;
p.CODE128C = Wn.default;
var c = {}, Ee = {}, y = {};
Object.defineProperty(y, "__esModule", {
  value: !0
});
y.SIDE_BIN = "101";
y.MIDDLE_BIN = "01010";
y.BINARIES = {
  L: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  G: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ],
  R: [
    "1110010",
    "1100110",
    "1101100",
    "1000010",
    "1011100",
    "1001110",
    "1010000",
    "1000100",
    "1001000",
    "1110100"
  ],
  O: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  E: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ]
};
y.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
y.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"];
y.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
var K = {}, m = {};
Object.defineProperty(m, "__esModule", {
  value: !0
});
var Yn = y, Zn = function(e, r, n) {
  var a = e.split("").map(function(o, u) {
    return Yn.BINARIES[r[u]];
  }).map(function(o, u) {
    return o ? o[e[u]] : "";
  });
  if (n) {
    var i = e.length - 1;
    a = a.map(function(o, u) {
      return u < i ? o + n : o;
    });
  }
  return a.join("");
};
m.default = Zn;
Object.defineProperty(K, "__esModule", {
  value: !0
});
var er = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), A = y, tr = m, Je = yt(tr), nr = l, rr = yt(nr);
function yt(t) {
  return t && t.__esModule ? t : { default: t };
}
function ar(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ir(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function or(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ur = function(t) {
  or(e, t);
  function e(r, n) {
    ar(this, e);
    var a = ir(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.fontSize = !n.flat && n.fontSize > n.width * 10 ? n.width * 10 : n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return er(e, [{
    key: "encode",
    value: function() {
      return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
    }
  }, {
    key: "leftText",
    value: function(n, a) {
      return this.text.substr(n, a);
    }
  }, {
    key: "leftEncode",
    value: function(n, a) {
      return (0, Je.default)(n, a);
    }
  }, {
    key: "rightText",
    value: function(n, a) {
      return this.text.substr(n, a);
    }
  }, {
    key: "rightEncode",
    value: function(n, a) {
      return (0, Je.default)(n, a);
    }
  }, {
    key: "encodeGuarded",
    value: function() {
      var n = { fontSize: this.fontSize }, a = { height: this.guardHeight };
      return [{ data: A.SIDE_BIN, options: a }, { data: this.leftEncode(), text: this.leftText(), options: n }, { data: A.MIDDLE_BIN, options: a }, { data: this.rightEncode(), text: this.rightText(), options: n }, { data: A.SIDE_BIN, options: a }];
    }
  }, {
    key: "encodeFlat",
    value: function() {
      var n = [A.SIDE_BIN, this.leftEncode(), A.MIDDLE_BIN, this.rightEncode(), A.SIDE_BIN];
      return {
        data: n.join(""),
        text: this.text
      };
    }
  }]), e;
}(rr.default);
K.default = ur;
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
var fr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), j = function t(e, r, n) {
  e === null && (e = Function.prototype);
  var a = Object.getOwnPropertyDescriptor(e, r);
  if (a === void 0) {
    var i = Object.getPrototypeOf(e);
    return i === null ? void 0 : t(i, r, n);
  } else {
    if ("value" in a)
      return a.value;
    var o = a.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, cr = y, lr = K, dr = hr(lr);
function hr(t) {
  return t && t.__esModule ? t : { default: t };
}
function _r(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function sr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ke = function(e) {
  var r = e.substr(0, 12).split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a * 3 : n + a;
  }, 0);
  return (10 - r % 10) % 10;
}, yr = function(t) {
  sr(e, t);
  function e(r, n) {
    _r(this, e), r.search(/^[0-9]{12}$/) !== -1 && (r += Ke(r));
    var a = vr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.lastChar = n.lastChar, a;
  }
  return fr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === Ke(this.data);
    }
  }, {
    key: "leftText",
    value: function() {
      return j(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 1, 6);
    }
  }, {
    key: "leftEncode",
    value: function() {
      var n = this.data.substr(1, 6), a = cr.EAN13_STRUCTURE[this.data[0]];
      return j(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, n, a);
    }
  }, {
    key: "rightText",
    value: function() {
      return j(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 7, 6);
    }
  }, {
    key: "rightEncode",
    value: function() {
      var n = this.data.substr(7, 6);
      return j(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, n, "RRRRRR");
    }
  }, {
    key: "encodeGuarded",
    value: function() {
      var n = j(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "encodeGuarded", this).call(this);
      return this.options.displayValue && (n.unshift({
        data: "000000000000",
        text: this.text.substr(0, 1),
        options: { textAlign: "left", fontSize: this.fontSize }
      }), this.options.lastChar && (n.push({
        data: "00"
      }), n.push({
        data: "00000",
        text: this.options.lastChar,
        options: { fontSize: this.fontSize }
      }))), n;
    }
  }]), e;
}(dr.default);
Ee.default = yr;
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
var pr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), X = function t(e, r, n) {
  e === null && (e = Function.prototype);
  var a = Object.getOwnPropertyDescriptor(e, r);
  if (a === void 0) {
    var i = Object.getPrototypeOf(e);
    return i === null ? void 0 : t(i, r, n);
  } else {
    if ("value" in a)
      return a.value;
    var o = a.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, gr = K, Or = Er(gr);
function Er(t) {
  return t && t.__esModule ? t : { default: t };
}
function br(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function mr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Qe = function(e) {
  var r = e.substr(0, 7).split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a : n + a * 3;
  }, 0);
  return (10 - r % 10) % 10;
}, $r = function(t) {
  mr(e, t);
  function e(r, n) {
    return br(this, e), r.search(/^[0-9]{7}$/) !== -1 && (r += Qe(r)), wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return pr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === Qe(this.data);
    }
  }, {
    key: "leftText",
    value: function() {
      return X(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 0, 4);
    }
  }, {
    key: "leftEncode",
    value: function() {
      var n = this.data.substr(0, 4);
      return X(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, n, "LLLL");
    }
  }, {
    key: "rightText",
    value: function() {
      return X(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 4, 4);
    }
  }, {
    key: "rightEncode",
    value: function() {
      var n = this.data.substr(4, 4);
      return X(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, n, "RRRR");
    }
  }]), e;
}(Or.default);
be.default = $r;
var we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
var Sr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), xr = y, Ar = m, Rr = pt(Ar), Pr = l, Tr = pt(Pr);
function pt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Mr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ir(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Dr = function(e) {
  var r = e.split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a * 9 : n + a * 3;
  }, 0);
  return r % 10;
}, Br = function(t) {
  Ir(e, t);
  function e(r, n) {
    return Mr(this, e), kr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return Sr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{5}$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = xr.EAN5_STRUCTURE[Dr(this.data)];
      return {
        data: "1011" + (0, Rr.default)(this.data, n, "01"),
        text: this.text
      };
    }
  }]), e;
}(Tr.default);
we.default = Br;
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
var jr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Lr = y, Nr = m, Cr = gt(Nr), Gr = l, Hr = gt(Gr);
function gt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Fr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function zr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ur = function(t) {
  zr(e, t);
  function e(r, n) {
    return Fr(this, e), Xr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return jr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{2}$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = Lr.EAN2_STRUCTURE[parseInt(this.data) % 4];
      return {
        data: "1011" + (0, Cr.default)(this.data, n, "01"),
        text: this.text
      };
    }
  }]), e;
}(Hr.default);
me.default = Ur;
var C = {};
Object.defineProperty(C, "__esModule", {
  value: !0
});
var Vr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
C.checksum = le;
var qr = m, R = Ot(qr), Jr = l, Kr = Ot(Jr);
function Ot(t) {
  return t && t.__esModule ? t : { default: t };
}
function Qr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Yr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Zr = function(t) {
  Yr(e, t);
  function e(r, n) {
    Qr(this, e), r.search(/^[0-9]{11}$/) !== -1 && (r += le(r));
    var a = Wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.displayValue = n.displayValue, n.fontSize > n.width * 10 ? a.fontSize = n.width * 10 : a.fontSize = n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return Vr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == le(this.data);
    }
  }, {
    key: "encode",
    value: function() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
    }
  }, {
    key: "flatEncoding",
    value: function() {
      var n = "";
      return n += "101", n += (0, R.default)(this.data.substr(0, 6), "LLLLLL"), n += "01010", n += (0, R.default)(this.data.substr(6, 6), "RRRRRR"), n += "101", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function() {
      var n = [];
      return this.displayValue && n.push({
        data: "00000000",
        text: this.text.substr(0, 1),
        options: { textAlign: "left", fontSize: this.fontSize }
      }), n.push({
        data: "101" + (0, R.default)(this.data[0], "L"),
        options: { height: this.guardHeight }
      }), n.push({
        data: (0, R.default)(this.data.substr(1, 5), "LLLLL"),
        text: this.text.substr(1, 5),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: "01010",
        options: { height: this.guardHeight }
      }), n.push({
        data: (0, R.default)(this.data.substr(6, 5), "RRRRR"),
        text: this.text.substr(6, 5),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: (0, R.default)(this.data[11], "R") + "101",
        options: { height: this.guardHeight }
      }), this.displayValue && n.push({
        data: "00000000",
        text: this.text.substr(11, 1),
        options: { textAlign: "right", fontSize: this.fontSize }
      }), n;
    }
  }]), e;
}(Kr.default);
function le(t) {
  var e = 0, r;
  for (r = 1; r < 11; r += 2)
    e += parseInt(t[r]);
  for (r = 0; r < 11; r += 2)
    e += parseInt(t[r]) * 3;
  return (10 - e % 10) % 10;
}
C.default = Zr;
var $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
var ea = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), ta = m, na = Et(ta), ra = l, aa = Et(ra), ia = C;
function Et(t) {
  return t && t.__esModule ? t : { default: t };
}
function oa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ue(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ua(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var fa = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"], ca = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]], la = function(t) {
  ua(e, t);
  function e(r, n) {
    oa(this, e);
    var a = ue(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    if (a.isValid = !1, r.search(/^[0-9]{6}$/) !== -1)
      a.middleDigits = r, a.upcA = We(r, "0"), a.text = n.text || "" + a.upcA[0] + r + a.upcA[a.upcA.length - 1], a.isValid = !0;
    else if (r.search(/^[01][0-9]{7}$/) !== -1)
      if (a.middleDigits = r.substring(1, r.length - 1), a.upcA = We(a.middleDigits, r[0]), a.upcA[a.upcA.length - 1] === r[r.length - 1])
        a.isValid = !0;
      else
        return ue(a);
    else
      return ue(a);
    return a.displayValue = n.displayValue, n.fontSize > n.width * 10 ? a.fontSize = n.width * 10 : a.fontSize = n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return ea(e, [{
    key: "valid",
    value: function() {
      return this.isValid;
    }
  }, {
    key: "encode",
    value: function() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
    }
  }, {
    key: "flatEncoding",
    value: function() {
      var n = "";
      return n += "101", n += this.encodeMiddleDigits(), n += "010101", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function() {
      var n = [];
      return this.displayValue && n.push({
        data: "00000000",
        text: this.text[0],
        options: { textAlign: "left", fontSize: this.fontSize }
      }), n.push({
        data: "101",
        options: { height: this.guardHeight }
      }), n.push({
        data: this.encodeMiddleDigits(),
        text: this.text.substring(1, 7),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: "010101",
        options: { height: this.guardHeight }
      }), this.displayValue && n.push({
        data: "00000000",
        text: this.text[7],
        options: { textAlign: "right", fontSize: this.fontSize }
      }), n;
    }
  }, {
    key: "encodeMiddleDigits",
    value: function() {
      var n = this.upcA[0], a = this.upcA[this.upcA.length - 1], i = ca[parseInt(a)][parseInt(n)];
      return (0, na.default)(this.middleDigits, i);
    }
  }]), e;
}(aa.default);
function We(t, e) {
  for (var r = parseInt(t[t.length - 1]), n = fa[r], a = "", i = 0, o = 0; o < n.length; o++) {
    var u = n[o];
    u === "X" ? a += t[i++] : a += u;
  }
  return a = "" + e + a, "" + a + (0, ia.checksum)(a);
}
$e.default = la;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.UPCE = c.UPC = c.EAN2 = c.EAN5 = c.EAN8 = c.EAN13 = void 0;
var da = Ee, ha = k(da), _a = be, va = k(_a), sa = we, ya = k(sa), pa = me, ga = k(pa), Oa = C, Ea = k(Oa), ba = $e, wa = k(ba);
function k(t) {
  return t && t.__esModule ? t : { default: t };
}
c.EAN13 = ha.default;
c.EAN8 = va.default;
c.EAN5 = ya.default;
c.EAN2 = ga.default;
c.UPC = Ea.default;
c.UPCE = wa.default;
var T = {}, Q = {}, G = {};
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.START_BIN = "1010";
G.END_BIN = "11101";
G.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
Object.defineProperty(Q, "__esModule", {
  value: !0
});
var ma = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), z = G, $a = l, Sa = xa($a);
function xa(t) {
  return t && t.__esModule ? t : { default: t };
}
function Aa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ra(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Pa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ta = function(t) {
  Pa(e, t);
  function e() {
    return Aa(this, e), Ra(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return ma(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^([0-9]{2})+$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = this, a = this.data.match(/.{2}/g).map(function(i) {
        return n.encodePair(i);
      }).join("");
      return {
        data: z.START_BIN + a + z.END_BIN,
        text: this.text
      };
    }
  }, {
    key: "encodePair",
    value: function(n) {
      var a = z.BINARIES[n[1]];
      return z.BINARIES[n[0]].split("").map(function(i, o) {
        return (i === "1" ? "111" : "1") + (a[o] === "1" ? "000" : "0");
      }).join("");
    }
  }]), e;
}(Sa.default);
Q.default = Ta;
var Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
var Ma = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), ka = Q, Ia = Da(ka);
function Da(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ba(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ja(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function La(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ye = function(e) {
  var r = e.substr(0, 13).split("").map(function(n) {
    return parseInt(n, 10);
  }).reduce(function(n, a, i) {
    return n + a * (3 - i % 2 * 2);
  }, 0);
  return Math.ceil(r / 10) * 10 - r;
}, Na = function(t) {
  La(e, t);
  function e(r, n) {
    return Ba(this, e), r.search(/^[0-9]{13}$/) !== -1 && (r += Ye(r)), ja(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return Ma(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === Ye(this.data);
    }
  }]), e;
}(Ia.default);
Se.default = Na;
Object.defineProperty(T, "__esModule", {
  value: !0
});
T.ITF14 = T.ITF = void 0;
var Ca = Q, Ga = bt(Ca), Ha = Se, Fa = bt(Ha);
function bt(t) {
  return t && t.__esModule ? t : { default: t };
}
T.ITF = Ga.default;
T.ITF14 = Fa.default;
var v = {}, $ = {};
Object.defineProperty($, "__esModule", {
  value: !0
});
var Xa = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), za = l, Ua = Va(za);
function Va(t) {
  return t && t.__esModule ? t : { default: t };
}
function qa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ja(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ka(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Qa = function(t) {
  Ka(e, t);
  function e(r, n) {
    return qa(this, e), Ja(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return Xa(e, [{
    key: "encode",
    value: function() {
      for (var n = "110", a = 0; a < this.data.length; a++) {
        var i = parseInt(this.data[a]), o = i.toString(2);
        o = Wa(o, 4 - o.length);
        for (var u = 0; u < o.length; u++)
          n += o[u] == "0" ? "100" : "110";
      }
      return n += "1001", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]+$/) !== -1;
    }
  }]), e;
}(Ua.default);
function Wa(t, e) {
  for (var r = 0; r < e; r++)
    t = "0" + t;
  return t;
}
$.default = Qa;
var xe = {}, S = {};
Object.defineProperty(S, "__esModule", {
  value: !0
});
S.mod10 = Ya;
S.mod11 = Za;
function Ya(t) {
  for (var e = 0, r = 0; r < t.length; r++) {
    var n = parseInt(t[r]);
    (r + t.length) % 2 === 0 ? e += n : e += n * 2 % 10 + Math.floor(n * 2 / 10);
  }
  return (10 - e % 10) % 10;
}
function Za(t) {
  for (var e = 0, r = [2, 3, 4, 5, 6, 7], n = 0; n < t.length; n++) {
    var a = parseInt(t[t.length - 1 - n]);
    e += r[n % r.length] * a;
  }
  return (11 - e % 11) % 11;
}
Object.defineProperty(xe, "__esModule", {
  value: !0
});
var ei = $, ti = ri(ei), ni = S;
function ri(t) {
  return t && t.__esModule ? t : { default: t };
}
function ai(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ii(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function oi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ui = function(t) {
  oi(e, t);
  function e(r, n) {
    return ai(this, e), ii(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r + (0, ni.mod10)(r), n));
  }
  return e;
}(ti.default);
xe.default = ui;
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var fi = $, ci = di(fi), li = S;
function di(t) {
  return t && t.__esModule ? t : { default: t };
}
function hi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _i(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function vi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var si = function(t) {
  vi(e, t);
  function e(r, n) {
    return hi(this, e), _i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r + (0, li.mod11)(r), n));
  }
  return e;
}(ci.default);
Ae.default = si;
var Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
var yi = $, pi = gi(yi), Ze = S;
function gi(t) {
  return t && t.__esModule ? t : { default: t };
}
function Oi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ei(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function bi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var wi = function(t) {
  bi(e, t);
  function e(r, n) {
    return Oi(this, e), r += (0, Ze.mod10)(r), r += (0, Ze.mod10)(r), Ei(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return e;
}(pi.default);
Re.default = wi;
var Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
var mi = $, $i = Si(mi), et = S;
function Si(t) {
  return t && t.__esModule ? t : { default: t };
}
function xi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ri(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Pi = function(t) {
  Ri(e, t);
  function e(r, n) {
    return xi(this, e), r += (0, et.mod11)(r), r += (0, et.mod10)(r), Ai(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return e;
}($i.default);
Pe.default = Pi;
Object.defineProperty(v, "__esModule", {
  value: !0
});
v.MSI1110 = v.MSI1010 = v.MSI11 = v.MSI10 = v.MSI = void 0;
var Ti = $, Mi = H(Ti), ki = xe, Ii = H(ki), Di = Ae, Bi = H(Di), ji = Re, Li = H(ji), Ni = Pe, Ci = H(Ni);
function H(t) {
  return t && t.__esModule ? t : { default: t };
}
v.MSI = Mi.default;
v.MSI10 = Ii.default;
v.MSI11 = Bi.default;
v.MSI1010 = Li.default;
v.MSI1110 = Ci.default;
var W = {};
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.pharmacode = void 0;
var Gi = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Hi = l, Fi = Xi(Hi);
function Xi(t) {
  return t && t.__esModule ? t : { default: t };
}
function zi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Vi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var qi = function(t) {
  Vi(e, t);
  function e(r, n) {
    zi(this, e);
    var a = Ui(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.number = parseInt(r, 10), a;
  }
  return Gi(e, [{
    key: "encode",
    value: function() {
      for (var n = this.number, a = ""; !isNaN(n) && n != 0; )
        n % 2 === 0 ? (a = "11100" + a, n = (n - 2) / 2) : (a = "100" + a, n = (n - 1) / 2);
      return a = a.slice(0, -2), {
        data: a,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.number >= 3 && this.number <= 131070;
    }
  }]), e;
}(Fi.default);
W.pharmacode = qi;
var Y = {};
Object.defineProperty(Y, "__esModule", {
  value: !0
});
Y.codabar = void 0;
var Ji = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Ki = l, Qi = Wi(Ki);
function Wi(t) {
  return t && t.__esModule ? t : { default: t };
}
function Yi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function eo(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var to = function(t) {
  eo(e, t);
  function e(r, n) {
    Yi(this, e), r.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (r = "A" + r + "A");
    var a = Zi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.toUpperCase(), n));
    return a.text = a.options.text || a.text.replace(/[A-D]/g, ""), a;
  }
  return Ji(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      for (var n = [], a = this.getEncodings(), i = 0; i < this.data.length; i++)
        n.push(a[this.data.charAt(i)]), i !== this.data.length - 1 && n.push("0");
      return {
        text: this.text,
        data: n.join("")
      };
    }
  }, {
    key: "getEncodings",
    value: function() {
      return {
        0: "101010011",
        1: "101011001",
        2: "101001011",
        3: "110010101",
        4: "101101001",
        5: "110101001",
        6: "100101011",
        7: "100101101",
        8: "100110101",
        9: "110100101",
        "-": "101001101",
        $: "101100101",
        ":": "1101011011",
        "/": "1101101011",
        ".": "1101101101",
        "+": "1011011011",
        A: "1011001001",
        B: "1001001011",
        C: "1010010011",
        D: "1010011001"
      };
    }
  }]), e;
}(Qi.default);
Y.codabar = to;
var Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.GenericBarcode = void 0;
var no = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), ro = l, ao = io(ro);
function io(t) {
  return t && t.__esModule ? t : { default: t };
}
function oo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function uo(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function fo(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var co = function(t) {
  fo(e, t);
  function e(r, n) {
    return oo(this, e), uo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return no(e, [{
    key: "encode",
    value: function() {
      return {
        data: "10101010101010101010101010101010101010101",
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return !0;
    }
  }]), e;
}(ao.default);
Z.GenericBarcode = co;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
var lo = q, U = p, P = c, tt = T, L = v, ho = W, _o = Y, vo = Z;
_e.default = {
  CODE39: lo.CODE39,
  CODE128: U.CODE128,
  CODE128A: U.CODE128A,
  CODE128B: U.CODE128B,
  CODE128C: U.CODE128C,
  EAN13: P.EAN13,
  EAN8: P.EAN8,
  EAN5: P.EAN5,
  EAN2: P.EAN2,
  UPC: P.UPC,
  UPCE: P.UPCE,
  ITF14: tt.ITF14,
  ITF: tt.ITF,
  MSI: L.MSI,
  MSI10: L.MSI10,
  MSI11: L.MSI11,
  MSI1010: L.MSI1010,
  MSI1110: L.MSI1110,
  pharmacode: ho.pharmacode,
  codabar: _o.codabar,
  GenericBarcode: vo.GenericBarcode
};
var I = {};
Object.defineProperty(I, "__esModule", {
  value: !0
});
var so = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
};
I.default = function(t, e) {
  return so({}, t, e);
};
var Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.default = yo;
function yo(t) {
  var e = [];
  function r(n) {
    if (Array.isArray(n))
      for (var a = 0; a < n.length; a++)
        r(n[a]);
    else
      n.text = n.text || "", n.data = n.data || "", e.push(n);
  }
  return r(t), e;
}
var Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.default = po;
function po(t) {
  return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t;
}
var ke = {}, Ie = {}, ee = {};
Object.defineProperty(ee, "__esModule", {
  value: !0
});
ee.default = go;
function go(t) {
  var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
  for (var r in e)
    e.hasOwnProperty(r) && (r = e[r], typeof t[r] == "string" && (t[r] = parseInt(t[r], 10)));
  return typeof t.displayValue == "string" && (t.displayValue = t.displayValue != "false"), t;
}
var te = {};
Object.defineProperty(te, "__esModule", {
  value: !0
});
var Oo = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: !0,
  fontOptions: "",
  font: "monospace",
  text: void 0,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: void 0,
  marginBottom: void 0,
  marginLeft: void 0,
  marginRight: void 0,
  valid: function() {
  }
};
te.default = Oo;
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
var Eo = ee, bo = wt(Eo), wo = te, nt = wt(wo);
function wt(t) {
  return t && t.__esModule ? t : { default: t };
}
function mo(t) {
  var e = {};
  for (var r in nt.default)
    nt.default.hasOwnProperty(r) && (t.hasAttribute("jsbarcode-" + r.toLowerCase()) && (e[r] = t.getAttribute("jsbarcode-" + r.toLowerCase())), t.hasAttribute("data-" + r.toLowerCase()) && (e[r] = t.getAttribute("data-" + r.toLowerCase())));
  return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, bo.default)(e), e;
}
Ie.default = mo;
var De = {}, Be = {}, _ = {};
Object.defineProperty(_, "__esModule", {
  value: !0
});
_.getTotalWidthOfEncodings = _.calculateEncodingAttributes = _.getBarcodePadding = _.getEncodingHeight = _.getMaximumHeightOfEncodings = void 0;
var $o = I, So = xo($o);
function xo(t) {
  return t && t.__esModule ? t : { default: t };
}
function mt(t, e) {
  return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom;
}
function $t(t, e, r) {
  if (r.displayValue && e < t) {
    if (r.textAlign == "center")
      return Math.floor((t - e) / 2);
    if (r.textAlign == "left")
      return 0;
    if (r.textAlign == "right")
      return Math.floor(t - e);
  }
  return 0;
}
function Ao(t, e, r) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n], i = (0, So.default)(e, a.options), o;
    i.displayValue ? o = To(a.text, i, r) : o = 0;
    var u = a.data.length * i.width;
    a.width = Math.ceil(Math.max(o, u)), a.height = mt(a, i), a.barcodePadding = $t(o, u, i);
  }
}
function Ro(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    e += t[r].width;
  return e;
}
function Po(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r].height > e && (e = t[r].height);
  return e;
}
function To(t, e, r) {
  var n;
  if (r)
    n = r;
  else if (typeof document < "u")
    n = document.createElement("canvas").getContext("2d");
  else
    return 0;
  n.font = e.fontOptions + " " + e.fontSize + "px " + e.font;
  var a = n.measureText(t);
  if (!a)
    return 0;
  var i = a.width;
  return i;
}
_.getMaximumHeightOfEncodings = Po;
_.getEncodingHeight = mt;
_.getBarcodePadding = $t;
_.calculateEncodingAttributes = Ao;
_.getTotalWidthOfEncodings = Ro;
Object.defineProperty(Be, "__esModule", {
  value: !0
});
var Mo = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), ko = I, Io = Do(ko), fe = _;
function Do(t) {
  return t && t.__esModule ? t : { default: t };
}
function Bo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var jo = function() {
  function t(e, r, n) {
    Bo(this, t), this.canvas = e, this.encodings = r, this.options = n;
  }
  return Mo(t, [{
    key: "render",
    value: function() {
      if (!this.canvas.getContext)
        throw new Error("The browser does not support canvas.");
      this.prepareCanvas();
      for (var r = 0; r < this.encodings.length; r++) {
        var n = (0, Io.default)(this.options, this.encodings[r].options);
        this.drawCanvasBarcode(n, this.encodings[r]), this.drawCanvasText(n, this.encodings[r]), this.moveCanvasDrawing(this.encodings[r]);
      }
      this.restoreCanvas();
    }
  }, {
    key: "prepareCanvas",
    value: function() {
      var r = this.canvas.getContext("2d");
      r.save(), (0, fe.calculateEncodingAttributes)(this.encodings, this.options, r);
      var n = (0, fe.getTotalWidthOfEncodings)(this.encodings), a = (0, fe.getMaximumHeightOfEncodings)(this.encodings);
      this.canvas.width = n + this.options.marginLeft + this.options.marginRight, this.canvas.height = a, r.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (r.fillStyle = this.options.background, r.fillRect(0, 0, this.canvas.width, this.canvas.height)), r.translate(this.options.marginLeft, 0);
    }
  }, {
    key: "drawCanvasBarcode",
    value: function(r, n) {
      var a = this.canvas.getContext("2d"), i = n.data, o;
      r.textPosition == "top" ? o = r.marginTop + r.fontSize + r.textMargin : o = r.marginTop, a.fillStyle = r.lineColor;
      for (var u = 0; u < i.length; u++) {
        var d = u * r.width + n.barcodePadding;
        i[u] === "1" ? a.fillRect(d, o, r.width, r.height) : i[u] && a.fillRect(d, o, r.width, r.height * i[u]);
      }
    }
  }, {
    key: "drawCanvasText",
    value: function(r, n) {
      var a = this.canvas.getContext("2d"), i = r.fontOptions + " " + r.fontSize + "px " + r.font;
      if (r.displayValue) {
        var o, u;
        r.textPosition == "top" ? u = r.marginTop + r.fontSize - r.textMargin : u = r.height + r.textMargin + r.marginTop + r.fontSize, a.font = i, r.textAlign == "left" || n.barcodePadding > 0 ? (o = 0, a.textAlign = "left") : r.textAlign == "right" ? (o = n.width - 1, a.textAlign = "right") : (o = n.width / 2, a.textAlign = "center"), a.fillText(n.text, o, u);
      }
    }
  }, {
    key: "moveCanvasDrawing",
    value: function(r) {
      var n = this.canvas.getContext("2d");
      n.translate(r.width, 0);
    }
  }, {
    key: "restoreCanvas",
    value: function() {
      var r = this.canvas.getContext("2d");
      r.restore();
    }
  }]), t;
}();
Be.default = jo;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
var Lo = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), No = I, Co = Go(No), ce = _;
function Go(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ho(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var V = "http://www.w3.org/2000/svg", Fo = function() {
  function t(e, r, n) {
    Ho(this, t), this.svg = e, this.encodings = r, this.options = n, this.document = n.xmlDocument || document;
  }
  return Lo(t, [{
    key: "render",
    value: function() {
      var r = this.options.marginLeft;
      this.prepareSVG();
      for (var n = 0; n < this.encodings.length; n++) {
        var a = this.encodings[n], i = (0, Co.default)(this.options, a.options), o = this.createGroup(r, i.marginTop, this.svg);
        this.setGroupOptions(o, i), this.drawSvgBarcode(o, i, a), this.drawSVGText(o, i, a), r += a.width;
      }
    }
  }, {
    key: "prepareSVG",
    value: function() {
      for (; this.svg.firstChild; )
        this.svg.removeChild(this.svg.firstChild);
      (0, ce.calculateEncodingAttributes)(this.encodings, this.options);
      var r = (0, ce.getTotalWidthOfEncodings)(this.encodings), n = (0, ce.getMaximumHeightOfEncodings)(this.encodings), a = r + this.options.marginLeft + this.options.marginRight;
      this.setSvgAttributes(a, n), this.options.background && this.drawRect(0, 0, a, n, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
    }
  }, {
    key: "drawSvgBarcode",
    value: function(r, n, a) {
      var i = a.data, o;
      n.textPosition == "top" ? o = n.fontSize + n.textMargin : o = 0;
      for (var u = 0, d = 0, x = 0; x < i.length; x++)
        d = x * n.width + a.barcodePadding, i[x] === "1" ? u++ : u > 0 && (this.drawRect(d - n.width * u, o, n.width * u, n.height, r), u = 0);
      u > 0 && this.drawRect(d - n.width * (u - 1), o, n.width * u, n.height, r);
    }
  }, {
    key: "drawSVGText",
    value: function(r, n, a) {
      var i = this.document.createElementNS(V, "text");
      if (n.displayValue) {
        var o, u;
        i.setAttribute("style", "font:" + n.fontOptions + " " + n.fontSize + "px " + n.font), n.textPosition == "top" ? u = n.fontSize - n.textMargin : u = n.height + n.textMargin + n.fontSize, n.textAlign == "left" || a.barcodePadding > 0 ? (o = 0, i.setAttribute("text-anchor", "start")) : n.textAlign == "right" ? (o = a.width - 1, i.setAttribute("text-anchor", "end")) : (o = a.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", o), i.setAttribute("y", u), i.appendChild(this.document.createTextNode(a.text)), r.appendChild(i);
      }
    }
  }, {
    key: "setSvgAttributes",
    value: function(r, n) {
      var a = this.svg;
      a.setAttribute("width", r + "px"), a.setAttribute("height", n + "px"), a.setAttribute("x", "0px"), a.setAttribute("y", "0px"), a.setAttribute("viewBox", "0 0 " + r + " " + n), a.setAttribute("xmlns", V), a.setAttribute("version", "1.1"), a.setAttribute("style", "transform: translate(0,0)");
    }
  }, {
    key: "createGroup",
    value: function(r, n, a) {
      var i = this.document.createElementNS(V, "g");
      return i.setAttribute("transform", "translate(" + r + ", " + n + ")"), a.appendChild(i), i;
    }
  }, {
    key: "setGroupOptions",
    value: function(r, n) {
      r.setAttribute("style", "fill:" + n.lineColor + ";");
    }
  }, {
    key: "drawRect",
    value: function(r, n, a, i, o) {
      var u = this.document.createElementNS(V, "rect");
      return u.setAttribute("x", r), u.setAttribute("y", n), u.setAttribute("width", a), u.setAttribute("height", i), o.appendChild(u), u;
    }
  }]), t;
}();
je.default = Fo;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
var Xo = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
function zo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Uo = function() {
  function t(e, r, n) {
    zo(this, t), this.object = e, this.encodings = r, this.options = n;
  }
  return Xo(t, [{
    key: "render",
    value: function() {
      this.object.encodings = this.encodings;
    }
  }]), t;
}();
Le.default = Uo;
Object.defineProperty(De, "__esModule", {
  value: !0
});
var Vo = Be, qo = Ne(Vo), Jo = je, Ko = Ne(Jo), Qo = Le, Wo = Ne(Qo);
function Ne(t) {
  return t && t.__esModule ? t : { default: t };
}
De.default = { CanvasRenderer: qo.default, SVGRenderer: Ko.default, ObjectRenderer: Wo.default };
var D = {};
Object.defineProperty(D, "__esModule", {
  value: !0
});
function Ce(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ge(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function He(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Yo = function(t) {
  He(e, t);
  function e(r, n) {
    Ce(this, e);
    var a = Ge(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return a.name = "InvalidInputException", a.symbology = r, a.input = n, a.message = '"' + a.input + '" is not a valid input for ' + a.symbology, a;
  }
  return e;
}(Error), Zo = function(t) {
  He(e, t);
  function e() {
    Ce(this, e);
    var r = Ge(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.name = "InvalidElementException", r.message = "Not supported type to render on", r;
  }
  return e;
}(Error), eu = function(t) {
  He(e, t);
  function e() {
    Ce(this, e);
    var r = Ge(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.name = "NoElementException", r.message = "No element to render on.", r;
  }
  return e;
}(Error);
D.InvalidInputException = Yo;
D.InvalidElementException = Zo;
D.NoElementException = eu;
Object.defineProperty(ke, "__esModule", {
  value: !0
});
var tu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, nu = Ie, de = St(nu), ru = De, N = St(ru), au = D;
function St(t) {
  return t && t.__esModule ? t : { default: t };
}
function Fe(t) {
  if (typeof t == "string")
    return iu(t);
  if (Array.isArray(t)) {
    for (var e = [], r = 0; r < t.length; r++)
      e.push(Fe(t[r]));
    return e;
  } else {
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
      return ou(t);
    if (t && t.nodeName && t.nodeName.toLowerCase() === "svg" || typeof SVGElement < "u" && t instanceof SVGElement)
      return {
        element: t,
        options: (0, de.default)(t),
        renderer: N.default.SVGRenderer
      };
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
      return {
        element: t,
        options: (0, de.default)(t),
        renderer: N.default.CanvasRenderer
      };
    if (t && t.getContext)
      return {
        element: t,
        renderer: N.default.CanvasRenderer
      };
    if (t && (typeof t > "u" ? "undefined" : tu(t)) === "object" && !t.nodeName)
      return {
        element: t,
        renderer: N.default.ObjectRenderer
      };
    throw new au.InvalidElementException();
  }
}
function iu(t) {
  var e = document.querySelectorAll(t);
  if (e.length !== 0) {
    for (var r = [], n = 0; n < e.length; n++)
      r.push(Fe(e[n]));
    return r;
  }
}
function ou(t) {
  var e = document.createElement("canvas");
  return {
    element: e,
    options: (0, de.default)(t),
    renderer: N.default.CanvasRenderer,
    afterRender: function() {
      t.setAttribute("src", e.toDataURL());
    }
  };
}
ke.default = Fe;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
var uu = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
function fu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var cu = function() {
  function t(e) {
    fu(this, t), this.api = e;
  }
  return uu(t, [{
    key: "handleCatch",
    value: function(r) {
      if (r.name === "InvalidInputException")
        if (this.api._options.valid !== this.api._defaults.valid)
          this.api._options.valid(!1);
        else
          throw r.message;
      else
        throw r;
      this.api.render = function() {
      };
    }
  }, {
    key: "wrapBarcodeCall",
    value: function(r) {
      try {
        var n = r.apply(void 0, arguments);
        return this.api._options.valid(!0), n;
      } catch (a) {
        return this.handleCatch(a), this.api;
      }
    }
  }]), t;
}();
Xe.default = cu;
var lu = _e, w = E(lu), du = I, F = E(du), hu = Te, xt = E(hu), _u = Me, rt = E(_u), vu = ke, su = E(vu), yu = ee, pu = E(yu), gu = Xe, Ou = E(gu), At = D, Eu = te, Rt = E(Eu);
function E(t) {
  return t && t.__esModule ? t : { default: t };
}
var g = function() {
}, ne = function(e, r, n) {
  var a = new g();
  if (typeof e > "u")
    throw Error("No element to render on was provided.");
  return a._renderProperties = (0, su.default)(e), a._encodings = [], a._options = Rt.default, a._errorHandler = new Ou.default(a), typeof r < "u" && (n = n || {}, n.format || (n.format = Tt()), a.options(n)[n.format](r, n).render()), a;
};
ne.getModule = function(t) {
  return w.default[t];
};
for (var at in w.default)
  w.default.hasOwnProperty(at) && bu(w.default, at);
function bu(t, e) {
  g.prototype[e] = g.prototype[e.toUpperCase()] = g.prototype[e.toLowerCase()] = function(r, n) {
    var a = this;
    return a._errorHandler.wrapBarcodeCall(function() {
      n.text = typeof n.text > "u" ? void 0 : "" + n.text;
      var i = (0, F.default)(a._options, n);
      i = (0, pu.default)(i);
      var o = t[e], u = Pt(r, o, i);
      return a._encodings.push(u), a;
    });
  };
}
function Pt(t, e, r) {
  t = "" + t;
  var n = new e(t, r);
  if (!n.valid())
    throw new At.InvalidInputException(n.constructor.name, t);
  var a = n.encode();
  a = (0, xt.default)(a);
  for (var i = 0; i < a.length; i++)
    a[i].options = (0, F.default)(r, a[i].options);
  return a;
}
function Tt() {
  return w.default.CODE128 ? "CODE128" : Object.keys(w.default)[0];
}
g.prototype.options = function(t) {
  return this._options = (0, F.default)(this._options, t), this;
};
g.prototype.blank = function(t) {
  var e = new Array(t + 1).join("0");
  return this._encodings.push({ data: e }), this;
};
g.prototype.init = function() {
  if (!!this._renderProperties) {
    Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
    var t;
    for (var e in this._renderProperties) {
      t = this._renderProperties[e];
      var r = (0, F.default)(this._options, t.options);
      r.format == "auto" && (r.format = Tt()), this._errorHandler.wrapBarcodeCall(function() {
        var n = r.value, a = w.default[r.format.toUpperCase()], i = Pt(n, a, r);
        he(t, i, r);
      });
    }
  }
};
g.prototype.render = function() {
  if (!this._renderProperties)
    throw new At.NoElementException();
  if (Array.isArray(this._renderProperties))
    for (var t = 0; t < this._renderProperties.length; t++)
      he(this._renderProperties[t], this._encodings, this._options);
  else
    he(this._renderProperties, this._encodings, this._options);
  return this;
};
g.prototype._defaults = Rt.default;
function he(t, e, r) {
  e = (0, xt.default)(e);
  for (var n = 0; n < e.length; n++)
    e[n].options = (0, F.default)(r, e[n].options), (0, rt.default)(e[n].options);
  (0, rt.default)(r);
  var a = t.renderer, i = new a(t.element, e, r);
  i.render(), t.afterRender && t.afterRender();
}
typeof window < "u" && (window.JsBarcode = ne);
typeof jQuery < "u" && (jQuery.fn.JsBarcode = function(t, e) {
  var r = [];
  return jQuery(this).each(function() {
    r.push(this);
  }), ne(r, t, e);
});
var it = ne;
const b = (t) => (Ct("data-v-fcca75ac"), t = t(), Gt(), t), wu = { class: "barcode-generator-container" }, mu = /* @__PURE__ */ b(() => /* @__PURE__ */ s("br", null, null, -1)), $u = /* @__PURE__ */ b(() => /* @__PURE__ */ s("br", null, null, -1)), Su = /* @__PURE__ */ b(() => /* @__PURE__ */ s("br", null, null, -1)), xu = /* @__PURE__ */ b(() => /* @__PURE__ */ s("option", { value: "CODE128" }, "Auto Detect", -1)), Au = /* @__PURE__ */ b(() => /* @__PURE__ */ s("option", { value: "CODE128A" }, "CODE128 A", -1)), Ru = /* @__PURE__ */ b(() => /* @__PURE__ */ s("option", { value: "CODE128B" }, "CODE128 B", -1)), Pu = /* @__PURE__ */ b(() => /* @__PURE__ */ s("option", { value: "CODE128C" }, "CODE128 C", -1)), Tu = [
  xu,
  Au,
  Ru,
  Pu
], Mu = /* @__PURE__ */ b(() => /* @__PURE__ */ s("br", null, null, -1)), ku = ["onKeyup"], Iu = {
  name: "VueBarcodeGenerator",
  inheritAttrs: !1,
  customOptions: {}
}, Du = /* @__PURE__ */ kt({
  ...Iu,
  setup(t) {
    const e = "example", r = re(null), n = re(""), a = re("CODE128");
    It(() => {
      it(r.value, e, {
        format: a.value
      });
    });
    function i() {
      window.console.log(r.value);
      try {
        it(r.value, String(n.value), {
          format: a.value
        });
      } catch (o) {
        console.log(o), o && alert(`Error: ${o}`);
      }
    }
    return (o, u) => (Dt(), Bt("div", wu, [
      s("img", {
        class: "barcode-displayer",
        ref_key: "barcodeDisplayer",
        ref: r
      }, null, 512),
      mu,
      $u,
      ze(s("input", {
        type: "text",
        "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
        placeholder: e
      }, null, 512), [
        [jt, n.value]
      ]),
      Su,
      ze(s("select", {
        "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d)
      }, Tu, 512), [
        [Lt, a.value]
      ]),
      Mu,
      s("input", {
        type: "button",
        onClick: i,
        onKeyup: Nt(i, ["enter"]),
        value: "Generate"
      }, null, 40, ku)
    ]));
  }
});
const Bu = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Lu = /* @__PURE__ */ Bu(Du, [["__scopeId", "data-v-fcca75ac"]]);
export {
  Lu as VueBarcodeGenerator
};
