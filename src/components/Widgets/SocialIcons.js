import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Icons = [
  { name: faFacebookF, url: 'https://www.facebook.com/bodhanshrestha' },
  { name: faTwitter, url: 'https://twitter.com/BodhanShrestha' },
  {
    name: faLinkedinIn,
    url: 'https://www.linkedin.com/in/bodhan-shrestha-9220a019b/',
  },
  { name: faInstagram, url: 'https://www.instagram.com/shrestha_bodhan/' },
];
function SocialIcons() {
  return (
    <div className='socialIcons'>
      <ul className='Icons'>
        {Icons.map(({ name, url }, i) => (
          <li key={i}>
            <a rel='noreferrer noopener' target='_blank' href={url}>
              <FontAwesomeIcon icon={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
