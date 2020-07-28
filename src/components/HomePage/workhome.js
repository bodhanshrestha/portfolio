import React from 'react';
import { Link } from 'react-router-dom';

const workhome = () => {
  return (
    <div className='workhome'>
      <h1>My Recent Work</h1>
      <p>
        Here are a few design projects I've worked on recently. Want to see
        more?
      </p>
      <ul>
        <li>
          <Link to='/work'>Personal Projects</Link>
        </li>
        <li>
          <Link to='/broadway'>Broadway Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default workhome;
