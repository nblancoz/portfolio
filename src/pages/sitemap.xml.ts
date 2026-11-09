import type { APIRoute } from 'astro';

export const prerender = false;

interface RouteDefinition {
  es: string;
  en: string;
  priority: string;
  changefreq: string;
}

const routes: RouteDefinition[] = [
  {
    es: '/',
    en: '/en',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    es: '/experience',
    en: '/en/experience',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    es: '/projects',
    en: '/en/projects',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    es: '/education',
    en: '/en/education',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    es: '/contact',
    en: '/en/contact',
    priority: '0.8',
    changefreq: 'monthly',
  },
];

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = site ? site.origin : url.origin;

  const urlEntries = routes
    .flatMap((route) => [
      {
        loc: `${baseUrl}${route.es}`,
        lang: 'es',
        alternate: `${baseUrl}${route.en}`,
        alternateLang: 'en',
        priority: route.priority,
        changefreq: route.changefreq,
      },
      {
        loc: `${baseUrl}${route.en}`,
        lang: 'en',
        alternate: `${baseUrl}${route.es}`,
        alternateLang: 'es',
        priority: route.priority,
        changefreq: route.changefreq,
      },
    ])
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <xhtml:link rel="alternate" hreflang="${entry.lang}" href="${entry.loc}" />
    <xhtml:link rel="alternate" hreflang="${entry.alternateLang}" href="${entry.alternate}" />
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

