import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/scrollToTop';
ReactDOM.render(
  <BrowserRouter>
    <ScrollTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
