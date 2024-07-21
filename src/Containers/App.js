import React from 'react';
import classes from './App.module.scss';
import { client } from '../ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import List from '../Components/List';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={classes.app}>
        <List />
      </div>
    </ApolloProvider>
  );
}

export default App;
