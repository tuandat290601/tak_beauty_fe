import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Admin } from './pages';
import { Footer, Header } from './components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-datetime/css/react-datetime.css';

import './App.sass';

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
