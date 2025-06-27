module.exports = {
  petstore: {
    input: {
      target: 'https://petstore.swagger.io/v2/swagger.json',
    },
    output: {
      baseUrl: 'https://petstore.swagger.io/v2',
      mode: 'tags-split',
      target: './src/api/generated',
      schemas: './src/api/models',
      client: 'react-query',
      mock: false,
      mutator: {
        path: './src/api/instance.ts',
        name: 'instance',
      },
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          options: {
            staleTime: 10000,
          },
        },
      },
    },
  },
};
