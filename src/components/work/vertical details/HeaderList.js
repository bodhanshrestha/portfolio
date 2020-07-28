import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../Icons';
const PersonalListVertical = ({ title, align, spanTitle, date, icon }) => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{
        background: `linear-gradient(145deg, #46b893, #53daae)`,
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      iconStyle={{
        fontSize: '25px',
      }}
      position={align}
      icon={<Icon pic={icon} />}
    >
      <h3
        className='vertical-timeline-element-title '
        style={{
          padding: '0 0 10px 0',
        }}
      >
        {title}
      </h3>
      <div>{spanTitle}</div>
    </VerticalTimelineElement>
  );
};
export default PersonalListVertical;
