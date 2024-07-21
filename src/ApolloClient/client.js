import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
