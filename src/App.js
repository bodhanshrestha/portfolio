import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/header';
import Body from './components/routes';
function App() {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
