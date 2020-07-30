import React from 'react';
import Education from './Education';

const Edu = [
  {
    name: 'Hilary High School',
    location: 'Gaurinagar,Chabahil',
    level: 'Secondary Level',
    date: '2006-2015',
  },
  {
    name: 'St.Lawrence College',
    location: 'Chabahil',
    level: 'Higher Level',
    date: '2015-2017',
    enrolled: 'Enroll in Science ',
  },
  {
    name: 'St.Lawrence College',
    location: 'Chabahil',
    level: 'Bachelor Level',
    date: '2017-2021',
    enrolled: 'Enroll in Bsc.Csit ',
  },
];
const Past = () => {
  return (
    <div className='past'>
      <h1>Past</h1>
      <div className='pastContents'>
        <div className='small'>
          <ul>
            <h1>Education</h1>
            {Edu.map((edu, i) => (
              <Education {...edu} key={i} />
            ))}
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Past;
