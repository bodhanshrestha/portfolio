import React from 'react';
import DetailedContent from './DetailedContent';
import FeaturedProject from './FeaturedProject';
import ContactContainer from './ContactContainer';

function index() {
  return (
    <div className='home'>
      <DetailedContent />
      <FeaturedProject />
      <ContactContainer />
    </div>
  );
}

export default index;
