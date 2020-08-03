import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const ToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='topBtn' onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ToTop;
