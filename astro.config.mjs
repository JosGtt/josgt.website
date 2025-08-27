// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'en',
    routes: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwind()],
  },
  site: 'https://www.josgt.website',
  // base dinámico: si no se define ASTRO_BASE se usa '/'
  base: process.env.ASTRO_BASE ?? '/',
});
