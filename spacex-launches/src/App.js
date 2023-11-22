// App.js
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
};

export default App;
