import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
function HoverDetails({ url }) {
  return (
    <div className='hoverDetails'>
      <div>
        <a href={`${url}`} rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faShareSquare} className='hoverIcon' />
        </a>

        <CopyToClipboard text={url}>
          <FontAwesomeIcon
            icon={faLink}
            className='hoverIcon'
            onClick={() => {
              alert(
                `You have copied the URL of the featured project \n ${url}`
              );
            }}
          />
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default HoverDetails;
