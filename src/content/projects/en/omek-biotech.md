---
title: 'Omek BioTech — Regulatory MedTech Platform'
badge: 'Enterprise · HealthTech B2B'
year: '2024'
order: 5
featured: true
accentColor: 'emerald'
privateRepo: true
privateRepoLabel: 'Private Repo (Client · Omek BioTech)'
description: 'Serverless backend for a B2B healthtech/medtech platform streamlining regulatory certification workflows for medical devices (FDA 510(k), MDR/CE) using AI assistance and distributed Edge architecture.'
architecture:
  backend:
    title: '// Serverless API & Cloudflare Workers'
    description: 'High-performance REST API built with TypeScript and Hono on Cloudflare Workers. Engineered multi-domain business logic (regulatory projects, validation pipelines, technical documentation, billing) with JWT, bcrypt, and role-based session authorization.'
  frontend:
    title: '// D1 Persistence, KV Cache & OpenAI'
    description: 'Relational data modeling with Prisma ORM on Cloudflare D1 (serverless SQL) with automated schema migrations, strict contract validation via Zod middleware, ultra-low-latency caching with Cloudflare KV, and AI-assisted workflows powered by OpenAI.'
stack:
  - 'TypeScript'
  - 'Hono'
  - 'Cloudflare Workers'
  - 'Cloudflare D1 (SQL)'
  - 'Prisma ORM'
  - 'Cloudflare KV'
  - 'OpenAI'
  - 'Zod'
  - 'JWT'
  - 'GitHub Actions'
---
