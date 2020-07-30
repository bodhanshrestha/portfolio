import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class header extends Component {
  state = {
    work: true,
    about: true,
    middleContent: false,
  };

  render() {
    return (
      <header>
        <div className='header'>
          <div className='left'>
            <NavLink
              to='/'
              onClick={() =>
                this.setState({ work: true, about: true, middleContent: false })
              }
            >
              <FontAwesomeIcon icon={faHome} className='homeBTN' />
              <div className='nameFlowDiv'>
                <div className='nameFlow'>
                  <span>Bodhan</span> <span>Shrestha</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className='middle'>
            <ul
              className={
                this.state.middleContent
                  ? 'activeMiddleContent'
                  : 'hiddenMiddleContent'
              }
            >
              {this.state.about ? (
                <li>
                  <NavLink
                    to='/Work'
                    onClick={() =>
                      this.setState({
                        work: false,
                        about: true,
                        middleContent: true,
                      })
                    }
                  >
                    Work
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
          <div className='right'>
            <ul>
              {this.state.work ? (
                <li>
                  <NavLink
                    to='/Work'
                    onClick={() =>
                      this.setState({
                        work: false,
                        about: true,
                        middleContent: true,
                      })
                    }
                  >
                    Work
                    <span></span>
                  </NavLink>
                </li>
              ) : null}
              {this.state.about ? (
                <li>
                  <NavLink
                    to='/about'
                    onClick={() =>
                      this.setState({
                        work: true,
                        about: false,
                        middleContent: true,
                      })
                    }
                  >
                    About
                    <span></span>
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
