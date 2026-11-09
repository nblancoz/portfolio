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
    '/en/experiencia': '/en/experience',
    '/en/proyectos': '/en/projects',
    '/en/estudios': '/en/education',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
