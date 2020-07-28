import React from 'react';

const progressList = ({ name, per }) => {
  return (
    <div
      className='progressList'
      style={{
        width: `${per}%`,
      }}
    >
      <div className='name'>{name}</div>
      <div className='sliderBar'></div>
      <div className='per'>{per}</div>
    </div>
  );
};

export default progressList;
