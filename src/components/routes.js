import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './HomePage';
import Work from './work';
import About from './About';
import ReactProject from './work/React/ReactProject';
import Broadway from './work/BroadWay/broadway';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Down from './Helper/scrollDown';
import underConstruction from './Not Found/underConstruction';
import Particles from './ParticleJS/particle';
import MernProject from './work/mern/ReactProject';

const AnimatedSwitch = withRouter(({ location }) => (
	<TransitionGroup className='page'>
		<CSSTransition
			key={location.key}
			classNames='fade'
			timeout={300}
			unmountOnExit>
			<Switch location={location}>
				<Route path='/reactProject' component={ReactProject} />
				<Route path='/broadway' component={Broadway} />
				<Route path='/mern' component={MernProject} />
				<Route path='/underConstruction' component={underConstruction} />
				<Route path='/about' component={About} />
				<Route path='/work' component={Work} />
				<Route path='/' exact component={Home} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));
function routes() {
	return (
		<div className='body-section'>
			<div className='background'>
				<Particles />
			</div>
			<AnimatedSwitch />
			<Down />
		</div>
	);
}

export default routes;
