import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmlBeautifier from "astro-html-beautifier";
import svgSprite from "astro-svg-sprite";

let mainJsData = '';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  integrations: [tailwind({
    applyBaseStyles: false
  }), htmlBeautifier({
    extra_liners: [],
    indent_inner_html: true
  }), svgSprite({
    include: ["./src/svg_sprite"],
    emitFile: {
      compress: "standard",
      path: "assets/sprite"
    }
  })],
  site: "https://ami-AVK.github.io",
  base: "/",
  build: {
    inlineStylesheets: 'never',
    assets: "assets/js"
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          plugins: [{
            name: 'my-plugin',
            generateBundle: function (opt, bundle, isWrite) {
              if (!isWrite) return;
              Object.keys(bundle).filter(item => !item.includes('chunks')).forEach(bKey => {
                // берём наш файл в который мы положили все скрипты и сохраняем код в "mainJsData"
                if (bKey.includes('assets/js/temp_file_main') && bundle[bKey].code.length) {
                  mainJsData = bundle[bKey].code;
                  delete bundle[bKey];
                }
                // прописываем все скрипты в основные файлы
                if (mainJsData.length && bKey.includes('assets/js/hoisted')) {
                  bundle[bKey].code = mainJsData;
                }
              });
            }
          }],
          extend: true,
          inlineDynamicImports: false,
          dynamicImportInCjs: false,
          manualChunks: function manualChunks(id) {
            // перенаправим модули, страницы и компоненты в наш файл
            if (id.includes('node_modules')) {
              return 'temp_file_main';
            } else if (id.includes('pages') || id.includes('layouts') || id.includes('components')) {
              return 'temp_file_main';
            }
            // else if (id.includes('hoisted')) {
            // return 'hoisted';
            // }
          },
          entryFileNames: 'assets/js/hoisted.js',
          assetFileNames: chunkInfo => {
            // запишем все итили в один файл
            if (chunkInfo.type === 'asset') return 'assets/css/style.[ext]';
            return 'assets/css/[name].[ext]';
          }
        }
      }
    }
  }
});