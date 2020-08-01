import React from 'react';
import Involved from './Involved';
import Education from '../Past/Education';
import webPic from '../../assets/img/backgg.png';
const Present = () => {
  return (
    <div className='present'>
      <h1>Present</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6'>
            <div
              className='presentImg'
              style={{ background: `url(${webPic})` }}
            ></div>
          </div>
          <div className='col-12 col-sm-12 col-md-6'>
            <div className='childContent'>
              <p>
                Recently, I completed my Web Designing Course in &nbsp;
                <a
                  href='https://broadwayinfosys.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  BROADWAY INFOSYS NEPAL
                </a>
                &nbsp;. From this Course I gain necessary knowledge for Web
                designing. Practicing regularly gives me the confidence for
                inspiring others and work properly in merited way in Web
                Designing.
              </p>
              <p>
                Gradually practicing helps me to build static web sites but i'm
                not satisfied only on that. So, I took online crash courses from
                Udemy/Lynda Courses for Full stack Developer . As&nbsp;
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                  Javascript
                </a>
                &nbsp; is familier from before, Javascript Stack ( used for
                easier and faster deployment of full-stack web applications/
                mobile application development ). I am practicing&nbsp;
                <a href='https://reactjs.org/'>REACT</a>&nbsp; for developing
                web application.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='presentContents'>
        <div className='small'>
          <ul>
            <h1>Education</h1>
            <Education
              name='St.Lawrence College'
              location='Chabahil'
              level='Bachelor Level'
              date='2017-2021'
              enrolled='Enrolled'
            />
          </ul>
        </div>
        <div className='involved'>
          <Involved />
        </div>
      </div>
    </div>
  );
};

export default Present;
