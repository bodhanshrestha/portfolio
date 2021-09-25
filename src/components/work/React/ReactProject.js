import React from 'react';
import WorkContents from '../../Widgets/WorkContentsMagnifier';
import movie from '../../assets/img/appImg/2020-07-24_19-42-42.png';
import weather from '../../assets/img/appImg/2020-07-24_19-43-01.png';
import ToTop from '../../Helper/ToTop';
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
				detail='This the Weather App Used to Find the current weather of your city'
				left={true}
				right={true}
			/>
			<WorkContents
				title='Movie App'
				bg={movie}
				url={`${movieURL}`}
				detail='This the Movie Searching App Used to Find the available movies'
				left={false}
				right={false}
				margin={140}
			/>
			<ToTop />
		</div>
	);
};

export default ReactProject;
