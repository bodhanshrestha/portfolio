import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../../Widgets/SocialIcons';
function DetailedContent() {
  return (
    <div className='homeContainer'>
      <div className='container detailCon'>
        <div className='row no-gutters'>
          <div className='col-md-7'>
            <div className='detail'>
              <h3>
                Hi , I'm
                <strong>Bodhan Shrestha</strong>
              </h3>
              <p>Web Designer and Developer from Kathmandu,Nepal</p>
              <Link to='/about'>
                <button className='detailBTN'>More Details</button>
              </Link>
              <SocialIcons />
            </div>
          </div>
          <div className='col-md-5'>
            <Link to='/about'>
              <div className='image'></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedContent;
