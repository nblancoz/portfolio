---
title: 'GymQuest'
badge: 'Full-Stack · Capstone Project'
year: '2026'
order: 3
featured: true
accentColor: 'indigo'
privateRepo: false
githubClientUrl: 'https://github.com/nblancoz/tfg-daw-frontend'
githubServerUrl: 'https://github.com/nblancoz/tfg-daw-backend'
description: 'Web platform for hypertrophy training programming (PPL / Upper-Lower) and quantitative tracking of progressive overload and training volume.'
architecture:
  backend:
    title: '// Hexagonal Design'
    description: 'Strict separation between domain, use cases, and infrastructure on both client and server, allowing ORM or database swaps without altering business logic.'
  frontend:
    title: '// End-to-End Validation'
    description: 'RESTful API built with Express, secured via Zod schemas, and backed by relational persistence on NeonDB PostgreSQL.'
stack:
  - 'Vite + React'
  - 'TypeScript'
  - 'Tailwind CSS'
  - 'Hexagonal Arch'
  - 'Express'
  - 'PostgreSQL (NeonDB)'
  - 'Zod'
---
