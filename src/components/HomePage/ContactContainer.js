import React from 'react';
import { Link } from 'react-router-dom';
const ContainerDetail = ({ que, btn, click }) => (
  <div className='circle' onClick={click}>
    <div className='textBtn'>
      <span>{que}</span>
      <h1>{btn}</h1>
    </div>
  </div>
);

const contact = () => {
  alert('Hello');
};
function ContactContainer() {
  return (
    <div className='container-fluid homepageContact'>
      <div className='row '>
        <div className=' col-12 col-md-4   Containedcircle '>
          <Link to='/about'>
            <ContainerDetail que='Continue Exploring ?' btn='About Me' />
          </Link>
        </div>
        <div className=' col-12 col-md-4  Containedcircle  '></div>
        <div className=' col-12 col-md-4  Containedcircle  '>
          <ContainerDetail que='Intrested ?' btn='Contact Me' click={contact} />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
