import nextJsConfig from '@repo/eslint-config/next-mjs';

export default [
  ...nextJsConfig,
  {
    ignores: ['src/graphql/generated/**/*.tsx'],
  },
];
