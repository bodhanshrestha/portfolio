import React, { useEffect } from 'react';
import DetailedContent from './DetailedContent';
import FeaturedProject from './FeaturedProject';
import ContactContainer from './ContactContainer';
import Quotes from '../Quotes/index';
import ToTop from '../ToTop';
function Index() {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <div className='home'>
      <DetailedContent />
      <FeaturedProject />
      <Quotes />
      <ContactContainer />
      <ToTop />
    </div>
  );
}

export default Index;
