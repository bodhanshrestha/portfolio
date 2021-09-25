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
			<a href='https://mega.nz/file/b4IFia6T#b4B8NTT_DUVP8fBMYzBmD_xHUGThKBiBIz_ZpJnW12A'>
				View my resume<Button className='btn'>Here</Button>
			</a>
		</div>
	);
};

export default Details;
