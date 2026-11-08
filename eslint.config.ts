import eslintPluginAstro from 'eslint-plugin-astro';
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
