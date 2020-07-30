import React from 'react';
import Involved from './Involved';
import Education from '../Past/Education';
const Present = () => {
  return (
    <div className='present'>
      <h1>Present</h1>
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
