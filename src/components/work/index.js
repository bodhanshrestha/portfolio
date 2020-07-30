import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkList from './worklist';
import broadwayImg from '../assets/img/broad.png';
import Portfolio from './portfolio';
import reactLogo from '../assets/img/logo512.png';
const Index = () => {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <div className='project'>
      <div className='projectComponents'>
        <Link to='/reactProject'>
          <WorkList
            name='React Js'
            bg={reactLogo}
            projectDetail1='Work done during practice'
            color='white'
          />
        </Link>
        <Link to='/broadway'>
          <WorkList
            name='Broadway'
            projectDetail1='Practice in institution'
            projectDetail2='ThemeForest Websites'
            color='white'
            bg={broadwayImg}
          />
        </Link>
      </div>
      <Portfolio />
    </div>
  );
};

export default Index;
