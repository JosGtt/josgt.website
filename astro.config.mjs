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
   site: 'https://www.josgt.website',     // o tu dominio
  base: '/portafolio', 
});
