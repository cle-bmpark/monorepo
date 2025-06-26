import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [API_URL]: {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
        'API-Version': process.env.NEXT_PUBLIC_API_VERSION,
      },
    },
  },
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
