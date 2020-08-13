import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModel from '../../Contact/model';
const ContainerDetail = ({ que, btn, click }) => (
  <div className='circle' onClick={click}>
    <div className='border-Box'></div>
    <div className='textBtn'>
      <span>{que}</span>
      <h1>{btn}</h1>
    </div>
  </div>
);

function ContactContainer() {
  const [visible, setVisible] = useState(false);
  const openModel = () => setVisible(true);
  const closeModal = () => setVisible(false);
  return (
    <div className='container mt-5 mb-5'>
      <div className='row mb-5'>
        <div className='col-6 col-md-6'>
          <div className='Containedcircle'>
            <Link to='/about'>
              <ContainerDetail que='Continue Exploring ?' btn='About Me' />
            </Link>
          </div>
        </div>
        <div className='col-6 col-md-6'>
          <div className='Containedcircle'>
            <ContainerDetail
              que='Intrested ?'
              btn='Contact Me'
              click={() => openModel()}
            />
          </div>
        </div>
      </div>
      <ContactModel visible={visible} closeModal={closeModal} />
      {/* <div className='explore'>
        <div className='exploreH'>
          <div>Explore More</div>
        </div>
      </div> */}
    </div>
  );
}

export default ContactContainer;
