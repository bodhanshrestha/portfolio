import React from 'react';
import Modal from 'react-awesome-modal';
import Social from '../Widgets/SocialIcons';
const model = ({ visible, closeModal }) => {
  return (
    <Modal
      visible={visible}
      width='80%'
      height='80%'
      effect='fadeInUp'
      onClickAway={() => closeModal()}
    >
      <div className='contactModel'>
        <h1>Contact</h1>

        <p>
          Thanks for taking the time to reach out. How can I help you today?
        </p>
        <div className='phone'>
          <strong>Phone no :</strong>
          &nbsp;
          <span>9880967785</span>
        </div>

        <div className='email'>
          <a href='mailTo:bodhanshrestha@gmail.com'>Mail Me</a>
        </div>
        <div className='medias'>
          <h1>Social Medias</h1>
          <Social />
        </div>

        <div className='close' onClick={() => closeModal()}>
          Close
        </div>
      </div>
    </Modal>
  );
};

export default model;
