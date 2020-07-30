import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ScrollTop from './components/scrollToTop';
ReactDOM.render(
  <HashRouter>
    <ScrollTop />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
