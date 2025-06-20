import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }: { headers?: Record<string, string> }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.NEXT_PUBLIC_API_TOKEN,
      'API-Version': process.env.NEXT_PUBLIC_API_VERSION,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
