---
title: 'GymQuest'
badge: 'Full-Stack · TFG DAW'
year: '2024'
order: 4
featured: true
accentColor: 'indigo'
privateRepo: false
githubClientUrl: 'https://github.com/nblancoz/tfg-daw-frontend'
githubServerUrl: 'https://github.com/nblancoz/tfg-daw-backend'
description: 'Plataforma web para la planificación de rutinas de hipertrofia (PPL / Upper-Lower) y registro cuantitativo de sobrecarga progresiva y volumen de entrenamiento.'
architecture:
  backend:
    title: '// Diseño Hexagonal'
    description: 'Separación estricta entre dominio, casos de uso e infraestructura tanto en cliente como en servidor, permitiendo cambiar el ORM o la base de datos sin alterar las reglas de negocio.'
  frontend:
    title: '// Validación End-to-End'
    description: 'API RESTful en Express asegurada mediante esquemas de Zod y persistencia relacional en PostgreSQL alojada en NeonDB.'
stack:
  - 'Vite + React'
  - 'TypeScript'
  - 'Tailwind CSS'
  - 'Hexagonal Arch'
  - 'Express'
  - 'PostgreSQL (NeonDB)'
  - 'Zod'
---
