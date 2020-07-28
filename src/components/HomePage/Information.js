import React from 'react';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './HellloContent';
const Information = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='informationUser'>
      Hello , I'm Bodhan Shrestha
      <br />
      <Button
        variant='primary'
        onClick={() => setModalShow(true)}
        className='customBTN'
      >
        Wanna Say Hello
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <br />
    </div>
  );
};

export default Information;
