# nicolasblanco.dev

Personal engineering portfolio of **Nicolás Blanco Zappalà**, Software Engineer at Capgemini. Built with Astro 5, Tailwind CSS v4, TypeScript, and serverless edge architecture on Vercel.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-emerald?style=flat-square)](./LICENSE)

---

## Architecture & Principles

- **Framework**: Astro 5 configured in SSR mode (`output: 'server'`) with `@astrojs/vercel` adapter for serverless API endpoints and lightning-fast edge delivery.
- **Styling**: Tailwind CSS v4 powered by the official `@tailwindcss/vite` plugin, customized with terminal aesthetics, emerald accents, and dark theme consistency.
- **Internationalization (i18n)**: Native bilingual routing (`/` for Spanish default, `/en` for English) with strict JSON locale symmetry across all views.
- **Type Safety**: End-to-end type safety using strict TypeScript schemas and Astro Content Collections backed by Zod validators.
- **Contact Pipeline**: SSR endpoint (`POST /api/contact`) backed by the Resend SDK, secured with honeypot bot mitigation, length constraints, and HTML entity sanitization.
- **SEO & Social**: Automated multilingual sitemap (`/sitemap.xml`) with `xhtml:link` alternates, standard `robots.txt`, dynamic JSON-LD Schema.org structured data, and high-resolution OpenGraph cards (1200 × 630 px).

---

## Tech Stack

| Domain                | Technology                                                        |
| --------------------- | ----------------------------------------------------------------- |
| **Core Framework**    | [Astro 5](https://astro.build/)                                   |
| **Runtime & Hosting** | [Vercel](https://vercel.com/) (Serverless Functions)              |
| **Styling**           | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` |
| **Typography**        | Inter Variable & JetBrains Mono (`@fontsource`)                   |
| **Email Service**     | [Resend](https://resend.com/) + Custom Adaptive Template          |
| **Validation**        | [Zod](https://zod.dev/)                                           |
| **Analytics**         | `@vercel/analytics` + `@vercel/speed-insights`                    |
| **DNS & Perimeter**   | Cloudflare DNS (DMARC, SPF, DKIM) + WAF Rate Limiting             |

---

## Project Structure

```text
portfolio/
├── public/                     # Static public assets
│   ├── favicon.svg             # Vector favicon
│   ├── logo.png                # Monogram logo
│   ├── og-image.png            # 1200x630 social preview card
│   └── robots.txt              # Search engine crawling rules
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── home/               # Hero, Bento, Snapshots
│   │   ├── icons/              # Dedicated SVG icon components
│   │   └── views/              # View controllers per page
│   ├── content/                # Content collections (Markdown)
│   │   ├── education/          # ES/EN education records
│   │   ├── experience/         # ES/EN career history
│   │   └── projects/           # ES/EN project architectures
│   ├── i18n/                   # Internationalization utilities
│   ├── layouts/                # BaseLayout with SEO & JSON-LD
│   ├── locales/                # Bilingual translation dictionaries
│   │   ├── en.json
│   │   └── es.json
│   ├── pages/                  # File-based routes & API endpoints
│   │   ├── api/contact.ts      # Contact form submission handler
│   │   ├── 404.astro           # Custom terminal 404 page
│   │   ├── sitemap.xml.ts      # Dynamic multilingual XML sitemap
│   │   └── en/                 # English route mirrors
│   ├── styles/global.css       # Tailwind CSS v4 entrypoint
│   └── templates/              # Transactional email templates
├── astro.config.ts             # Astro & Vite configuration
└── package.json
```

---

## Security & Reliability

- **Bot & Spam Mitigation**: Form submissions include a hidden honeypot trap (`company_website`) executing silent drops on automated bot crawlers without consuming Resend API quotas.
- **Input Sanitization**: All user-provided fields undergo HTML entity escaping before email compilation to neutralize Cross-Site Scripting (XSS).
- **Edge Rate Limiting**: Endpoint abuse is mitigated via Cloudflare WAF rate limiting rules on `/api/contact`.
- **Email Deliverability**: Remitter verification with SPF, DKIM, and explicit DMARC policies ensures direct delivery to primary inboxes.

---

## License

Copyright (c) 2026 Nicolás Blanco Zappalà. Todos los derechos reservados / All rights reserved.

The source code in this repository is made publicly viewable for personal reference, inspection, and technical audit purposes only. No permission is granted to copy, reproduce, distribute, or create derivative works from the code, design, branding, or written content without prior written permission. See [LICENSE](./LICENSE) for details.
