import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './HomePage';
import Work from './work';
import About from './About';
import ReactProject from './React/ReactProject';
import Broadway from './work/broadway';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className='page'>
    <CSSTransition
      key={location.key}
      classNames='fade'
      timeout={300}
      unmountOnExit
    >
      <Switch location={location}>
        <Route path='/broadway' component={Broadway} />
        <Route path='/reactProject' component={ReactProject} />
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
      <AnimatedSwitch />
    </div>
  );
}

export default routes;
