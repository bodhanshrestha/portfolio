import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faMapMarkedAlt,
  faClock,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
const Education = ({ name, location, level, date, enrolled }) => {
  return (
    <li className='edu'>
      <div className='row'>
        <div className='col-6 edu-level' style={{ textAlign: 'right' }}>
          <span>
            <FontAwesomeIcon icon={faUserGraduate} />
            {level}
          </span>
        </div>
        <div className='col-6' style={{ textAlign: 'left' }}>
          <div className='row'>
            <div className='col-12 edu-name'>{name}</div>

            {enrolled ? (
              <div className='col-12 edu-enrolled'>
                <cite>
                  <FontAwesomeIcon icon={faBookOpen} />
                  &nbsp;--&nbsp;
                  {enrolled}
                </cite>
              </div>
            ) : null}

            <div className='col-12 edu-date'>
              <cite>
                <FontAwesomeIcon icon={faClock} />
                &nbsp;--&nbsp;
                {date}
              </cite>
            </div>
            <div className='col-12 edu-location'>
              <cite>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                &nbsp;--&nbsp;
                {location}
              </cite>
            </div>
          </div>
        </div>
      </div>
      <br />
    </li>
  );
};

export default Education;
