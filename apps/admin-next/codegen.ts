import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://monitoring-admin-playground.onrender.com/graphql',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
