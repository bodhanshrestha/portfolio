import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
const ToTop = () => {
  const [show, setShow] = useState('0.5');
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1024) {
      setShow('0');
    } else {
      setShow('0.5');
    }
  }, []);
  return (
    <div className='newBtn' style={{ opacity: show }}>
      Scroll Down &nbsp; &nbsp;
      <FontAwesomeIcon icon={faLongArrowAltUp} />
    </div>
  );
};

export default ToTop;
