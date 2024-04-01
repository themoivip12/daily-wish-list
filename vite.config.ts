import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        {
          logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
        },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    React(),
  ],
  resolve: {
    alias: [
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: 'pages',
        replacement: resolve(__dirname, 'src/app/pages'),
      },
      {
        find: 'app',
        replacement: resolve(__dirname, 'src/app'),
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store'),
      },
      {
        find: 'locales',
        replacement: resolve(__dirname, 'src/locales'),
      },
      {
        find: 'types',
        replacement: resolve(__dirname, 'src/types'),
      },
      {
        find: 'service',
        replacement: resolve(__dirname, 'src/service'),
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, 'src/utils'),
      },

      // Các alias khác...
    ],
  },
});
