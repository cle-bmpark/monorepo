import nextJsConfig from '@repo/eslint-config/next';

export default [
  {
    ignores: ['src/api/generated/**', 'src/api/models/**', 'orval.config.js'],
  },
  ...nextJsConfig,
];
