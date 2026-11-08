import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    roleContext: z.string().optional(),
    location: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    order: z.number(),
    skills: z.array(z.string()),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string(),
    year: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    accentColor: z.enum(['emerald', 'indigo', 'amber']).default('emerald'),
    privateRepo: z.boolean().default(false),
    privateRepoLabel: z.string().optional(),
    githubUrl: z.string().url().optional(),
    githubClientUrl: z.string().url().optional(),
    githubServerUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    architecture: z
      .object({
        backend: z.object({
          title: z.string(),
          description: z.string(),
        }),
        frontend: z.object({
          title: z.string(),
          description: z.string(),
        }),
      })
      .optional(),
    stack: z.array(z.string()),
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
