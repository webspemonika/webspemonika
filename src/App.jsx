// routing setup file.............................
import React from 'react';
import "./css/app.css"
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import FrontEndLayout from './layout/FrontEndLayout';
import HomePage from './pages/HomePage';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontEndLayout />} >
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;