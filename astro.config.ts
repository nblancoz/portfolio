import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  redirects: {
    '/experiencia': '/experience',
    '/proyectos': '/projects',
    '/estudios': '/education',
    '/contacto': '/contact',
    '/en/experiencia': '/en/experience',
    '/en/proyectos': '/en/projects',
    '/en/estudios': '/en/education',
    '/en/contacto': '/en/contact',
  },
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      cors: true,
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
