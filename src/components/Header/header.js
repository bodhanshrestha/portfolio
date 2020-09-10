import React from 'react';

import HeaderContent from './HeaderContent';
const Header = () => {
  return (
    <>
      <header className='header'>
        <HeaderContent />
        <hr className='window-bar' />
      </header>
    </>
  );
};

export default Header;
