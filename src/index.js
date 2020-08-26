import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/Helper/scrollToTop';
import Header from './components/Header/header';
import Body from './components/routes';
import './index.scss';

function App() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.querySelector('.header').style.padding = '12px 40px';
      } else {
        document.querySelector('.header').style.padding = '15px 30px';
      }

      var height =
        document.body.scrollTop || document.documentElement.scrollTop;

      var totalHeight =
        document.body.clientHeight || document.documentElement.clientHeight;

      var totalHeight = totalHeight - 605;
      var client = (height / totalHeight) * 100;
      document.querySelector('.window-bar').style.width = `${client}%`;

      if (
        document.body.scrollTop > totalHeight - 100 ||
        document.documentElement.scrollTop > totalHeight - 100
      ) {
        document.querySelector('.newBtn').style.display = 'none';
      } else {
        document.querySelector('.newBtn').style.display = 'block';
      }
    }

    const curser = document.querySelector('.curser');

    document.addEventListener('mousemove', (e) => {
      curser.setAttribute(
        'style',
        'top:' +
          (e.pageY - 20) +
          'px;left:' +
          (e.pageX + 20) +
          'px; transition:60ms;'
      );
    });
    document.addEventListener('click', () => {
      curser.classList.add('expand');
      setTimeout(() => {
        curser.classList.remove('expand');
      }, 500);
    });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Body />
      <div className='curser'></div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
