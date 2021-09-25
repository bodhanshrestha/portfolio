import React, { useEffect } from 'react';
import DetailedContent from './Contact/DetailedContent';
import FeaturedProject from './Project/FeaturedProject';
import ContactContainer from './Contact/ContactContainer';
import Quotes from '../Quotes/index';
import ToTop from '../Helper/ToTop';
import Footer from '../Footer';
function Index() {
	useEffect(() => {
		document.body.style.overflowY = 'scroll';
	}, []);

	return (
		<div className='home'>
			<DetailedContent />
			<FeaturedProject />
			<Quotes />
			<ContactContainer />
			<ToTop />
			<Footer />
		</div>
	);
}

export default Index;
