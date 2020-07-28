import React from 'react';
import { Button } from 'react-bootstrap';
const Details = ({
  firstname,
  lastname,
  address,
  enrolled,
  college,
  profession,
}) => {
  return (
    <div className='details'>
      <p className='aboutTitle'>
        Hello, I'm <br />
        <span>{firstname}</span>
        <span> {lastname}</span>
        .
        <br />A {profession}.
        <br />
        Currently I'm enrolled at {college} on course of {enrolled}
      </p>
      <p className='aboutquote'>
        Within a years of experience as a Web developer, I have acquired the
        skills and knowledge necessary to make your project a success. I enjoy
        every step of the design ,development process, from research, discussion
        and collaboration.
      </p>
      <a href='https://mega.nz/file/6twSyCKK#Yt_fegDlzPmGKAsGcc_4Vxl3AXHLjMN0mTJS_9_d_cc'>
        View my resume<Button className='btn'>Here</Button>
      </a>
    </div>
  );
};

export default Details;
