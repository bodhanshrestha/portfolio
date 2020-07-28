import React, { Component } from 'react';
import Details from './Details';
import ProgressBar from './Progress/progressbar';
export default class about extends Component {
  state = {
    //About Section Props
    firstName: 'Bodhan',
    lastName: 'Shrestha',
    address: 'Jorpati',
    enrolled:
      'BSc CSIT (Bachelors in Computer Science and Information Technology)',
    college: 'St.Lawrence College',
    profession: 'Web Developer and Web Designer',

    //Contact props
    phoneNo: '9860075925',
    email: 'bodhanshrestha@gmail.com',
    twitterUrl: '',
    facebookUrl: 'https://www.facebook.com/bodhanshrestha/',
    googleUrl: '',
    linkedInUrl: 'https://www.linkedin.com/',
  };

  render() {
    const {
      firstName,
      lastName,
      Address,
      enrolled,
      college,
      profession,
    } = this.state;

    return (
      <div className='about'>
        <div className='curser'></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              {/* Right Background Image of About */}
            </div>
            {/* Detail Component */}
            <div className='col-lg-6 col-md-12'>
              <Details
                firstname={firstName}
                lastname={lastName}
                address={Address}
                enrolled={enrolled}
                college={college}
                profession={profession}
              />
            </div>
          </div>
        </div>

        <ProgressBar />
      </div>
    );
  }
}
