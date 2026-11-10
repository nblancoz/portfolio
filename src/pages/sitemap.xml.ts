import type { APIRoute } from 'astro';

export const prerender = false;

interface RouteDefinition {
  en: string;
  es: string;
  priority: string;
  changefreq: string;
}

const routes: RouteDefinition[] = [
  {
    en: '/',
    es: '/es',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    en: '/experience',
    es: '/es/experience',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    en: '/projects',
    es: '/es/projects',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    en: '/education',
    es: '/es/education',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    en: '/contact',
    es: '/es/contact',
    priority: '0.8',
    changefreq: 'monthly',
  },
];

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = site ? site.origin : url.origin;

  const urlEntries = routes
    .flatMap((route) => [
      {
        loc: `${baseUrl}${route.en}`,
        lang: 'en',
        alternate: `${baseUrl}${route.es}`,
        alternateLang: 'es',
        defaultUrl: `${baseUrl}${route.en}`,
        priority: route.priority,
        changefreq: route.changefreq,
      },
      {
        loc: `${baseUrl}${route.es}`,
        lang: 'es',
        alternate: `${baseUrl}${route.en}`,
        alternateLang: 'en',
        defaultUrl: `${baseUrl}${route.en}`,
        priority: route.priority,
        changefreq: route.changefreq,
      },
    ])
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <xhtml:link rel="alternate" hreflang="${entry.lang}" href="${entry.loc}" />
    <xhtml:link rel="alternate" hreflang="${entry.alternateLang}" href="${entry.alternate}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.defaultUrl}" />
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
