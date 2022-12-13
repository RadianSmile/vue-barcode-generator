import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import pkg from './package.json';


export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'VueBarcodeGenerator',
      fileName: (format) => `VueBarcodeGenerator.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue","jsbarcode"],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          jsbarcode : 'JsBarcode'
        },
      },
    },
  }
})
