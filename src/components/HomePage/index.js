import React, { useEffect } from 'react';
import DetailedContent from './DetailedContent';
import FeaturedProject from './FeaturedProject';
import ContactContainer from './ContactContainer';
import Quotes from '../Quotes/index';
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
    </div>
  );
}

export default Index;
