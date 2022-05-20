import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import postCssPxToRem from 'postcss-pxtorem';
import autoprefixer from "autoprefixer";
import styleImport from "vite-plugin-style-import";
// import vitePluginImp from "vite-plugin-imp";

const publicPath = '/m/';

export default defineConfig({
  base: '/',
  optimizeDeps: {
    entries: 'vant/es/**/*.js'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 为了编写模板组件
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    // { find: /^~/, replacement: "" }, 
    // alias: [{ find: '@', replacement: path.resolve(__dirname, "src")}],
  },
  plugins: [
    vue(),
    // 按需加载
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/less`,
        },
      ],
    }),
  ],
  
  server: {
    host: true,
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        // autoprefixer(),
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['van-button']
        })
      ]
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          // hack: `true; @import (reference) "${path.resolve('src/utils/utils.less')}";`,
          hack: `true; @import "./src/utils/utils.less";`,
        },
        javascriptEnabled: true,
      },
    }
  },
});
