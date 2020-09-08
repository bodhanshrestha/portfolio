import React from 'react';
import Modal from 'react-awesome-modal';
import Social from '../Widgets/SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faMapMarkedAlt,
  faEnvelope,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
const Icons = ({ name }) => <FontAwesomeIcon icon={name} />;
const Model = ({ visible, closeModal }) => {
  return (
    <Modal
      visible={visible}
      width='70%'
      height='90%'
      effect='fadeInUp'
      onClickAway={() => closeModal()}
    >
      <div className='contactModel'>
        <h1>Contact</h1>
        <p>
          Thanks for taking the time to reach out. How can I help you today?
        </p>

        <div className='container'>
          <div className='row'>
            <div className='col-3 col-md-3  col-lg-3 col-sm-3 text-right'>
              <div className='medias'>
                <Social />
              </div>
            </div>
            <div className='col-9 col-md-9 col-sm-9 col-lg-5 text-left right'>
              <div className='details'>
                <h4>
                  <Icons name={faMobileAlt} />
                  <div className='name'>Phone no :</div>
                  <strong> 9880967785</strong>
                </h4>

                <h4>
                  <Icons name={faMapMarkedAlt} />
                  <div className='name'>Location :</div>
                  <strong> Jorpati,Kathmandu</strong>
                </h4>

                <h4>
                  <Icons name={faEnvelope} />
                  <div className='name'>E-mail :</div>
                  <strong className='mail'> bodhanshrestha@gmail.com</strong>
                </h4>
              </div>
              <div className='email'>
                <a href='mailTo:bodhanshrestha@gmail.com'>Mail Me</a>
                <a href='' className='getInTouch'>
                  {' '}
                  Get In Touch
                </a>
              </div>
            </div>
            <div className='col-0 col-md-0 col-lg-4 col-sm-0 map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.84410042866!2d85.36262137677767!3d27.725605698180868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bbeb021a8c3%3A0xf5da322eefd636cd!2sJorpati%2C%2044600!5e0!3m2!1sen!2snp!4v1599361778388!5m2!1sen!2snp'
                width='100%'
                height='100%'
                aria-hidden='false'
              ></iframe>
            </div>
          </div>

          <div className='close' onClick={() => closeModal()}>
            <Icons name={faTimes} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Model;
