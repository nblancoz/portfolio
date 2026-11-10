---
title: 'Omek BioTech — Regulatory MedTech Platform'
badge: 'Enterprise · HealthTech B2B'
year: '2024'
order: 5
featured: true
accentColor: 'emerald'
privateRepo: true
privateRepoLabel: 'Repo Privado (Cliente · Omek BioTech)'
description: 'Backend serverless de plataforma B2B en healthtech/medtech para la gestión y aceleración de proyectos de certificación regulatoria de productos sanitarios (FDA 510(k), MDR/CE) mediante flujos asistidos por IA y arquitectura distribuida en el Edge.'
architecture:
  backend:
    title: '// API Serverless & Cloudflare Workers'
    description: 'Arquitectura RESTful construida con TypeScript y Hono sobre Cloudflare Workers. Implementación de lógica de negocio en múltiples dominios (proyectos, certificaciones, validaciones, documentos, usuarios, expertos, suscripciones y facturación) con autenticación JWT, bcrypt y sesiones por rol.'
  frontend:
    title: '// Persistencia D1, Caché KV & OpenAI'
    description: 'Modelado relacional con Prisma ORM sobre Cloudflare D1 (SQL serverless) con esquema y migraciones continuas, validación estricta de contratos con esquemas Zod en middleware, lectura/escritura de resultados en Cloudflare KV e integración de flujos de IA con OpenAI.'
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
