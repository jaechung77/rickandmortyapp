import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import { RestLink } from "apollo-link-rest";
import { HttpLink } from 'apollo-link-http';

// const restLink = new RestLink({
//   endpoints: {
//     openExchangeRate: 'https://open.exchangerate-api.com/v6/',
//   },
// });

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
