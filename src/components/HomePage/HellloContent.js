import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const HellloContent = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h4>
            Thanks for taking the time to reach out. How can I help you today?
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='userInput'>
          <input type='text' name='name' id='name' placeholder='Full Name' />
          <input type='email' name='email' placeholder='Email' />
        </div>

        <div className='textarea'>
          <textarea
            name='Message'
            rows='10'
            placeholder='Enter your Message'
            style={{
              width: '100%',
              padding: '10px',
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HellloContent;
