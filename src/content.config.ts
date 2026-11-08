import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    order: z.number(),
    skills: z.array(z.string()),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/education' }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    period: z.string(),
    modality: z.string(),
    order: z.number(),
    description: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = {
  experience,
  projects,
  education,
};
