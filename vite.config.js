import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

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
      ziggy: `${__dirname}/vendor/tightenco/ziggy/dist/index.esm.js`,
    },
  },
  build: {
    rollupOptions: {
      external: ['/public/build/assets/logoCVMebel.jpg']
    },
    rollupOptions: {
      external: ['/public/build/assets/logoCVMebel-nobg.png']
    }
  }
});
