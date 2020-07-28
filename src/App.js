import React from 'react';
import './App.scss';
import Header from './components/header';
import Body from './components/routes';
function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
