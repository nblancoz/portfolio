import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nicolasblanco.dev',
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  redirects: {
    '/en': '/',
    '/en/experience': '/experience',
    '/en/projects': '/projects',
    '/en/education': '/education',
    '/en/contact': '/contact',
    '/experiencia': '/es/experience',
    '/proyectos': '/es/projects',
    '/estudios': '/es/education',
    '/contacto': '/es/contact',
    '/es/experiencia': '/es/experience',
    '/es/proyectos': '/es/projects',
    '/es/estudios': '/es/education',
    '/es/contacto': '/es/contact',
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
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
