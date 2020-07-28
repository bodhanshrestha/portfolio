import React from 'react';
import ProgressList from './progressList';
const progressbar = () => {
  return (
    <div className='progressBar'>
      <h1>Progress bar</h1>
      <p>Developing skills over time</p>
      <ProgressList name='css' per='90' />
      <ProgressList name='html' per='80' />
      <ProgressList name='javascript' per='70' />
      <ProgressList name='jquery' per='50' />
      <ProgressList name='react ' per='50' />
    </div>
  );
};

export default progressbar;
