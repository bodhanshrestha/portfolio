import React, { useState, useEffect } from 'react';
import Box from './Box/box';
import {
  faHistory,
  faFilePdf,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import Past from './Past/Past';
import Present from './Present/Present';
import ContactModel from '../Contact/model';
import ToTop from '../Helper/ToTop';
const Index = () => {
  const [about] = useState([
    { id: 1, title: 'My Story', icon: faHistory },
    { id: 2, title: 'My Present', icon: faSmile },
    { id: 3, title: 'My Resume', icon: faFilePdf },
  ]);

  const [show, setShow] = useState(false);

  const [CSSShow, setCSSShow] = useState(false);

  const [howItWorks] = useState(React.createRef());

  const scrollDown = () => {
    window.scroll({
      top: howItWorks.current.offsetTop + 100,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [visible, setVisible] = useState(false);

  const openModel = () => setVisible(true);

  const closeModal = () => setVisible(false);

  useEffect(() => {
    window.scrollTo({
      top: '100px',
      left: 0,
      behavior: 'smooth',
    });

    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className='about'>
      <div className='container'>
        <div className='about-detail'>
          <h1>About</h1>
          <p>
            If you're just curious about my past,my present or you just want to
            grab my résumé,
            <br /> you're in the right spot.
          </p>
        </div>
        <div className='mainDisplay'>
          <div
            className='box-Container'
            onClick={() => {
              scrollDown();
              setShow(true);
              setCSSShow(true);
              document.body.style.overflowY = 'scroll';
            }}
          >
            <Box {...about[0]} />
          </div>
          <div
            className='box-Container'
            onClick={() => {
              scrollDown();
              setShow(false);
              setCSSShow(true);
              document.body.style.overflowY = 'scroll';
            }}
          >
            <Box {...about[1]} />
          </div>
          <div className='box-Container'>
            <Box {...about[2]} />
          </div>
        </div>
        <div className='contact-ab'>
          <div className='btn-contact mb-5' onClick={() => openModel()}>
            Contact Me
          </div>
          <ContactModel visible={visible} closeModal={closeModal} />
        </div>

        <div className='detailedAbout' ref={howItWorks}>
          <div className={CSSShow ? 'activeAbout' : 'hideAbout'}>
            {show ? <Past /> : <Present />}
          </div>
        </div>
      </div>
      <ToTop />
    </div>
  );
};

export default Index;
