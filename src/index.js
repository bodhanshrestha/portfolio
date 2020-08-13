import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ScrollTop from './components/Helper/scrollToTop';
import Header from './components/Header/header';
import Body from './components/routes';
import './index.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

ReactDOM.render(
  <HashRouter>
    <ScrollTop />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
