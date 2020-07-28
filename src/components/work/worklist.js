import React from 'react';

const worklist = ({
  name,
  projectDetail1,
  projectDetail2,
  projectDetail3,
  bg,
  color,
}) => {
  return (
    <div className='linkedProject'>
      <div className='row'>
        <div className='col-sm-4 imageBlock'>
          <div
            className='projectImage'
            style={{
              backgroundImage: `url(${bg})`,
            }}
          ></div>
        </div>
        <div className='col-sm-8'>
          <div
            className='detail'
            style={{
              color: color,
            }}
          >
            <h1>{name}</h1>
            <ul>
              <li>{projectDetail1}</li>
              {projectDetail2 ? <li>{projectDetail2}</li> : null}
              {projectDetail3 ? <li>{projectDetail3}</li> : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default worklist;
