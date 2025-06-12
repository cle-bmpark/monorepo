'use client';

import client from '@/../apollo-client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';

interface ApolloClientPriverProps {
  children: React.ReactNode;
}

export default function ApolloClientPriver({ children }: ApolloClientPriverProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
