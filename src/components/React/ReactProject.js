import React from 'react';
import WorkContents from '../Widgets/WorkContents';
import movie from '../assets/img/appImg/2020-07-24_19-42-42.png';
import weather from '../assets/img/appImg/2020-07-24_19-43-01.png';
import ToTop from '../ToTop';
const weatherURL = 'https://shrestha8050.github.io/Weather/';
const movieURL = 'https://shrestha8050.github.io/Movie-Finder/#/';

const ReactProject = () => {
  return (
    <div className='reactProject'>
      <h1>React Projects</h1>
      <WorkContents
        title='Weather App'
        bg={weather}
        url={`${weatherURL}`}
        detail='This the Weather App Used to Find the current weater of your ccity'
        left={true}
        right={true}
      />
      <WorkContents
        title='Movie App'
        bg={movie}
        url={`${movieURL}`}
        detail='This the Weather App Used to Find the current weater of your ccity'
        left={false}
        right={false}
        margin={140}
      />
      <ToTop />
    </div>
  );
};

export default ReactProject;
