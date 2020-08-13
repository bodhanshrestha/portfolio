import React from 'react';

import {
  GlassMagnifier,
  MagnifierContainer,
  MagnifierPreview,
} from 'react-image-magnifiers';

const WorkContents = ({ title, bg, url, detail, left, right, margin }) => {
  return (
    <div
      className='completedProjects'
      style={{
        marginTop: `${margin}px`,
      }}
    >
      <div className='container-fluid'>
        <div className='row no-gutters'>
          {left ? (
            <div className='col-md-8 col-lg-8'>
              <div className='projectImageFull'>
                <MagnifierContainer>
                  <GlassMagnifier
                    imageSrc={`${bg}`}
                    imageAlt='Example'
                    magnifierBorderSize='0'
                    magnifierSize='30%'
                  />
                </MagnifierContainer>
              </div>
            </div>
          ) : (
            <div className='col-md-4 col-lg-4'>
              <div className='projectInfo'>
                <h1>{title}</h1>
                <p>{detail}</p>
                <div className='fieldVisit'>
                  <a rel='noreferrer noopener' target='_blank' href={url}>
                    Visit
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          )}
          {right ? (
            <div className='col-md-4 col-lg-4'>
              <div className='projectInfo'>
                <h1>{title}</h1>
                <p>{detail}</p>

                <div className='fieldVisit'>
                  <a rel='noreferrer noopener' target='_blank' href={url}>
                    Visit
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className='col-md-8 col-lg-8'>
              <div className='projectImageFull'>
                <MagnifierContainer>
                  <div className='example-class'>
                    <MagnifierPreview imageSrc='./image.jpg' />
                  </div>

                  <GlassMagnifier
                    imageSrc={`${bg}`}
                    imageAlt='Example'
                    magnifierBorderSize='0'
                    magnifierSize='30%'
                  />
                </MagnifierContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkContents;
