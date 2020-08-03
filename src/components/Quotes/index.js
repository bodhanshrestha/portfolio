import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    axios.get('https://quotes.rest/qod?category=inspire').then((res) => {
      setQuote(res.data.contents.quotes[0]);
    });
  }, []);

  return (
    <>
      {quote.length > 0 ? (
        <div className='quotes'>
          <span style={{ zIndex: '50', fontSize: '0.9em', fontWeight: 'bold' }}>
            <img
              src='https://theysaidso.com/branding/theysaidso.png'
              height='20'
              width='20'
              alt='theysaidso.com'
            />
            <a
              href='https://theysaidso.com'
              title='Powered by quotes from theysaidso.com'
              style={{
                color: '#ccc',
                marginLeft: '4px',
                verticalAlign: 'middle',
              }}
              rel='noopener noreferrer'
              target='_blank'
            >
              They Said So®
            </a>
          </span>
          <div className='container'>
            <div className='title'>{quote.title}</div>
            <a href={quote.permalink} rel='noopener noreferrer' target='_blank'>
              <div
                className=' quoteOfDay'
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${quote.background})`,
                }}
              >
                <span>Aurther : {quote.author}</span>

                <p>{quote.quote}</p>

                <span></span>
              </div>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Index;
