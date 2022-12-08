# vue-barcode-generator

Bar code generator for Vue 3, bases on [JsBarcode](https://github.com/lindell/JsBarcode).

A sample project showing how to build vue 3 component library with Vite, Vue, and Typescript.

## Installation

Please clone this repo, then install thie npm package locally. 

```shell
git clone https://github.com/radiansmile/vue-barcode-generator

cd [your project]

npm install [path/to/vue-barcode-generator]
``` 


## Dev Commands

```shell
npm run dev 
npm run build
```


## Usage

```js
import { createApp } from 'vue';


import VueBarcodeGenerator from '@radiansmile/vue-barcode-generator';


const app = createApp({});

app.component(VueBarcodeGenerator.name, VueBarcodeGenerator);
```

```html
<!-- index.html -->

<!-- JsBarcode is external dependency. -->
<script src="https://unpkg.com/jsbarcode@3.11.5/dist/JsBarcode.all.min.js" crossorigin="anonymous"></script>

```vue
<!-- your.vue -->

<template>
    <vue-barcode-generator></vue-barcode-generator>
</template>

<style lang="scss">
    // import my css if you need.
    import "@radiansmile/vue-barcode-generator/dist/style.css"
</style>


```
## Known issue 

Projects start with latest vite configuration (`$ npm create vite@latest #(3.2.1)
`) + TS mode might encounter import problem. And there is not much information in community for this.


## Browser support

Same as Vue 3.



## License

[MIT](https://opensource.org/licenses/MIT) © 