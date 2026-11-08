import eslintPluginAstro from 'eslint-plugin-astro';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: ['dist/', '.astro/', '.vercel/', 'node_modules/', 'pnpm-lock.yaml'],
  },
  // TypeScript recommended configs
  ...tseslint.configs.recommended,
  // Astro recommended configs
  ...eslintPluginAstro.configs.recommended,
  // Tailwind CSS configs
  {
    files: ['**/*.{astro,ts,tsx,js,jsx}'],
    plugins: {
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: 'src/styles/global.css',
      },
    },
    rules: {
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
