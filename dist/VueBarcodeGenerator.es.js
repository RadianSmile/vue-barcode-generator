import { defineComponent as v, ref as d, onMounted as m, openBlock as f, createElementBlock as h, createElementVNode as e, withDirectives as i, vModelText as b, vModelSelect as y, withKeys as C, pushScopeId as D, popScopeId as E } from "vue";
import p from "jsbarcode";
const o = (t) => (D("data-v-dc8b6750"), t = t(), E(), t), B = { class: "barcode-generator-container" }, O = /* @__PURE__ */ o(() => /* @__PURE__ */ e("br", null, null, -1)), g = /* @__PURE__ */ o(() => /* @__PURE__ */ e("br", null, null, -1)), x = /* @__PURE__ */ o(() => /* @__PURE__ */ e("br", null, null, -1)), V = /* @__PURE__ */ o(() => /* @__PURE__ */ e("option", { value: "CODE128" }, "Auto Detect", -1)), k = /* @__PURE__ */ o(() => /* @__PURE__ */ e("option", { value: "CODE128A" }, "CODE128 A", -1)), w = /* @__PURE__ */ o(() => /* @__PURE__ */ e("option", { value: "CODE128B" }, "CODE128 B", -1)), S = /* @__PURE__ */ o(() => /* @__PURE__ */ e("option", { value: "CODE128C" }, "CODE128 C", -1)), A = [
  V,
  k,
  w,
  S
], G = /* @__PURE__ */ o(() => /* @__PURE__ */ e("br", null, null, -1)), I = ["onKeyup"], K = {
  name: "VueBarcodeGenerator",
  inheritAttrs: !1,
  customOptions: {}
}, M = /* @__PURE__ */ v({
  ...K,
  setup(t) {
    const s = "example", n = d(null), r = d(""), l = d("CODE128");
    m(() => {
      p(n.value, s, {
        format: l.value
      });
    });
    function _() {
      window.console.log(n.value);
      try {
        p(n.value, String(r.value), {
          format: l.value
        });
      } catch (a) {
        console.log(a), a && alert(`Error: ${a}`);
      }
    }
    return (a, c) => (f(), h("div", B, [
      e("img", {
        class: "barcode-displayer",
        ref_key: "barcodeDisplayer",
        ref: n
      }, null, 512),
      O,
      g,
      i(e("input", {
        type: "text",
        "onUpdate:modelValue": c[0] || (c[0] = (u) => r.value = u),
        placeholder: s
      }, null, 512), [
        [b, r.value]
      ]),
      x,
      i(e("select", {
        "onUpdate:modelValue": c[1] || (c[1] = (u) => l.value = u)
      }, A, 512), [
        [y, l.value]
      ]),
      G,
      e("input", {
        type: "button",
        onClick: _,
        onKeyup: C(_, ["enter"]),
        value: "Generate"
      }, null, 40, I)
    ]));
  }
});
const T = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [r, l] of s)
    n[r] = l;
  return n;
}, N = /* @__PURE__ */ T(M, [["__scopeId", "data-v-dc8b6750"]]);
export {
  N as VueBarcodeGenerator
};
