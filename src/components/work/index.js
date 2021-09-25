import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkList from './worklistBlock';
import broadwayImg from '../assets/img/broad.png';
import Portfolio from './portfolioTimeline';
import reactLogo from '../assets/img/logo512.png';
import MERNlogo from '../assets/img/me.png';
import ToTop from '../Helper/ToTop';
const Index = () => {
	useEffect(() => {
		document.body.style.overflowY = 'scroll';
	}, []);

	return (
		<div className='project'>
			<div className='projectComponents'>
				<Link to='/reactProject'>
					<WorkList
						name='React Js'
						bg={reactLogo}
						projectDetail1='Work done during practice'
						projectDetail2='Use of API'
						color='white'
					/>
				</Link>
				<Link to='/broadway'>
					<WorkList
						name='Broadway'
						projectDetail1='Practice in institution For Frontend Development'
						projectDetail2='ThemeForest Websites(Copyright Included)'
						color='white'
						bg={broadwayImg}
					/>
				</Link>
				<Link to='/mern'>
					<WorkList
						name='MERN STACK'
						projectDetail1='Fully Functioning Web Application'
						projectDetail2='Practicing .......'
						color='white'
						bg={MERNlogo}
					/>
				</Link>
			</div>
			<Portfolio />
			<ToTop />
		</div>
	);
};

export default Index;
