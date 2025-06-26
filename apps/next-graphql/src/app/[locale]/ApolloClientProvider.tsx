'use client';

import React from 'react';

import { ApolloProvider } from '@apollo/client';

import client from '@/../apollo-client';

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

export default function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
