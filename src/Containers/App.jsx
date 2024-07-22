import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../ApolloClient/client';
import List from '../Components/List';
import Detail from '../Components/Detail';

import classes from './App.module.scss';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
