import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const HeaderContent = () => {
  const [work, setWork] = useState(true);
  const [about, setAbout] = useState(true);
  const [middleContent, setMiddleContent] = useState(false);
  return (
    <>
      <div className='left'>
        <NavLink
          to='/'
          onClick={() => {
            setWork(true);
            setAbout(true);
            setMiddleContent(false);
          }}
        >
          <FontAwesomeIcon icon={faHome} className='homeBTN' />
          <div className='nameFlowDiv'>
            <div className='nameFlow'>
              <span>Bodhan</span> <span>Shrestha</span>
            </div>
          </div>
        </NavLink>
      </div>
      <div className='middle'>
        <ul
          className={
            middleContent ? 'activeMiddleContent' : 'hiddenMiddleContent'
          }
        >
          {about ? (
            <li>
              <NavLink
                to='/Work'
                onClick={() => {
                  setWork(false);
                  setAbout(true);
                  setMiddleContent(true);
                }}
              >
                Work
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>
      <div className='right'>
        <ul>
          {work ? (
            <li>
              <NavLink
                to='/Work'
                onClick={() => {
                  setWork(false);
                  setAbout(true);
                  setMiddleContent(true);
                }}
              >
                Work
                <span></span>
              </NavLink>
            </li>
          ) : null}
          {about ? (
            <li>
              <NavLink
                to='/about'
                onClick={() => {
                  setWork(true);
                  setAbout(false);
                  setMiddleContent(true);
                }}
              >
                About
                <span></span>
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default HeaderContent;
