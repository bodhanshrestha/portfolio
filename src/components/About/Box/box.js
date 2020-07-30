import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Box = (props) => {
  return (
    <div className='box'>
      <div className='box-border'></div>
      <div className='box-Content'>
        <FontAwesomeIcon icon={props.icon} />
        <span className='mobile-text'>{props.title}</span>
      </div>
      <div className='ribbon'>
        {props.title}
        <div></div>
        <div></div>
        <span className='corner-ribbonF'></span>
        <span className='corner-ribbonS'></span>
      </div>
    </div>
  );
};

export default Box;
