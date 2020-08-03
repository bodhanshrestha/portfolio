import React, { useState } from 'react';
import Html from '../../assets/svg/involved/html5.svg';
import CSS from '../../assets/svg/involved/css3.svg';
import Javascript from '../../assets/svg/involved/js.svg';
import AI from '../../assets/svg/involved/ai.svg';
import PS from '../../assets/svg/involved/ps.svg';
import XD from '../../assets/svg/involved//xd.svg';
import DW from '../../assets/svg/involved/dreamweaver.svg';
import WEB from '../../assets/svg/involved/web.svg';
import SUBLIME from '../../assets/svg/involved/sublime-text.svg';
import VISUAL from '../../assets/svg/involved/visual-studio-code-1.svg';
import Graphics from '../../assets/svg/involved/graphic.svg';
import Editor from '../../assets/svg/involved/editor.svg';
import REACT from '../../assets/svg/involved/react.svg';
const SKILLS = ({ icon, alt, per, show }) => (
  <div className='inv-skills'>
    <img src={`${icon}`} alt={alt} />
    {show ? (
      <div className='skill-bar'>
        <div className='per' style={{ width: `${per}%` }}>
          {per}%
        </div>
      </div>
    ) : null}
  </div>
);
const Involved = () => {
  const Web = [
    { icon: Html, alt: 'Html5', per: '90' },
    { icon: CSS, alt: 'Css3', per: '80' },
    { icon: Javascript, alt: 'Javascript', per: '70' },
    { icon: REACT, alt: 'ReactJs', per: '50' },
  ];
  const GraphicsData = [
    { icon: AI, alt: 'Adobe Illustrator', per: '60' },
    { icon: PS, alt: 'Adobe Photoshop', per: '70' },
    { icon: XD, alt: 'Adobe XD', per: '60' },
  ];
  const [show, setShow] = useState(false);
  const [prev, setPrev] = useState(true);
  return (
    <div className='inv'>
      <h1>
        Involved In With &nbsp;
        {prev ? (
          <div
            className='skill-btn'
            onClick={() => {
              setShow(true);
              setPrev(false);
            }}
          >
            Experience
          </div>
        ) : (
          <div
            className='skill-btn'
            onClick={() => {
              setShow(false);
              setPrev(true);
            }}
            style={{
              background: '#12171d',
            }}
          >
            Hide Experience
          </div>
        )}
      </h1>
      <div className='container'>
        <div className='box-involved'>
          {/* Graphics Design */}

          <div className='row'>
            <div className='col-12  col-md-3 inv-head-web'>
              <img src={`${Graphics}`} alt='Graphics Design' />
              <h3>Graphics Design</h3>
            </div>
            <div className='col-12 col-md-9 inv-web'>
              {GraphicsData.map((item, i) => (
                <SKILLS {...item} show={show} />
              ))}
            </div>
          </div>

          {/* Web Development */}

          <div className='row'>
            <div className='col-12  col-md-3 inv-head-web'>
              <img src={`${WEB}`} alt='Web Design and Development' />
              <h3>Web Development</h3>
            </div>
            <div className='col-12 col-md-9 inv-web'>
              {Web.map((item, i) => (
                <SKILLS {...item} show={show} key={i} />
              ))}
            </div>
          </div>

          {/* Editors */}

          <div className='row'>
            <div className='col-12  col-md-3 inv-head-web'>
              <img src={`${Editor}`} alt='Web Design and Development' />
              <h3>Web Editor Tools</h3>
            </div>
            <div className='col-12 col-md-9 inv-web'>
              <img src={`${VISUAL}`} alt='Visual Studio Code' />
              <img src={`${SUBLIME}`} alt='Sublime Text' />
              <img src={`${DW}`} alt='Adobe Dreamweaver' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involved;
