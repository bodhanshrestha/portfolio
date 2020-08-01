import React from 'react';
import Education from './Education';
import SmallBoy from '../../assets/img/smallBoy.png';
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
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-9'>
            <div className='childContent'>
              <p>
                Since Childhood, Playing games and listening to muisc in the
                web. I get addicted in the technology. After then I usually
                explore the games as well as Internet World.Slowly time passes ,
                I completed my secondary Level Education. Then started science
                course.Computer Subject was included in that course.So
                Programming becomes easier slowly.
              </p>
              <p>
                In bachelor level, At first I was involved in the Unity Course (
                Game Environment Development ). But I change my decision and
                started my course in web Development. For this HTML and CSS
                becomes easier because I already have the concept of HTML and
                CSS from secondary level.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-3'>
            <div
              className='smallImg'
              style={{ background: `url(${SmallBoy})` }}
            ></div>
          </div>
        </div>
      </div>
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
