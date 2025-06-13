'use client';

import client from '@/../apollo-client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

export default function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
