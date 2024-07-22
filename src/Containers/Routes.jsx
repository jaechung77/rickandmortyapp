import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from '../Components/List';
import Detail from '../Components/Detail';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default Routes;
