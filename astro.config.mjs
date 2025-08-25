// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // <-- Asegúrate de tener esto:
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'en',
    routes: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://josgtt.github.io/nuevo-port/',
  base: '/nuevo-port/',
});
