<template>
  <div class="barcode-generator-container">
    <img class="barcode-displayer" ref="barcodeDisplayer" /><br />

    <br />

    <input type="text" v-model="barcodeText" :placeholder="initBarCode" />

    <br />

    <select v-model="barcodeType">
      <option value="CODE128">Auto Detect</option>
      <option value="CODE128A">CODE128 A</option>
      <option value="CODE128B">CODE128 B</option>
      <option value="CODE128C">CODE128 C</option>
    </select>

    <br />

    <input
      type="button"
      @click="generateBarcode"
      @keyup.enter="generateBarcode"
      value="Generate"
    />
  </div>
</template>

<style lang="scss" scoped>
.barcode-generator-container {
  * {
    color: aqua;
  }
}
</style>

<script lang="ts">
// define component name
// https://stackoverflow.com/a/68377928/2103503
export default {
  name: "VueBarcodeGenerator",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import JsBarcode from "jsbarcode";

const initBarCode = "example";

const barcodeDisplayer = ref(null);
const barcodeText = ref<string>("");
const barcodeType = ref<string>("CODE128");

onMounted(() => {
  JsBarcode(barcodeDisplayer.value, initBarCode, {
    format: barcodeType.value,
  });
});

function generateBarcode() {
  window.console.log(barcodeDisplayer.value);
  try {
    JsBarcode(barcodeDisplayer.value, String(barcodeText.value), {
      format: barcodeType.value,
    });
  } catch (message /* TODO: replace any type*/) {
    console.log(message);
    if (message) {
      alert(`Error: ${message}`);
    }
  }
}
</script>
