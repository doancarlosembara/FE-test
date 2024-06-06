import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      ziggy: path.resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.m.js'),
    },
  },
  build: {
    rollupOptions: {
      external: [
        '/public/build/assets/logoCVMebel.jpg',
        '/public/build/assets/logoCVMebel-nobg.png'
      ],
    },
  },
});
