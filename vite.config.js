import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // library mode
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/index.js'),
  //     name: 'MyReactTailwindPackage',
  //     fileName: (format) => `my-react-tailwind-package.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'], // React va ReactDOM tashqi paketlar
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM',
  //       },
  //     },
  //   },
  // },

  // static mode
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  plugins: [react()],
})
