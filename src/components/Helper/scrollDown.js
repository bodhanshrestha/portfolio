import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
const ToTop = () => {
  return (
    <div className='newBtn'>
      Scroll Down &nbsp; &nbsp;
      <FontAwesomeIcon icon={faLongArrowAltUp} />
    </div>
  );
};

export default ToTop;
