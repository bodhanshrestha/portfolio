import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Particles from '../ParticleJS/particle';
export default function FullNav({ open, children, close }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className='full_nav'>
      <div className='background'>
        <Particles />
      </div>
      <div className='top_right'>
        <FontAwesomeIcon icon={faTimes} onClick={close} />
      </div>
      {children}
    </div>,
    document.getElementById('portal')
  );
}
