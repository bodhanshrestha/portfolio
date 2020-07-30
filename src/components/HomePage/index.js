import React, { useEffect } from 'react';
import DetailedContent from './DetailedContent';
import FeaturedProject from './FeaturedProject';
import ContactContainer from './ContactContainer';

function Index() {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <div className='home'>
      <DetailedContent />
      <FeaturedProject />
      <ContactContainer />
    </div>
  );
}

export default Index;
