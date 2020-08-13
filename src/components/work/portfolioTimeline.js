import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Contents from './vertical details/Contents';
import ContentItems from './ContentItemsAll';
const portfolio = () => {
  return (
    <div className='DetailedPortfolio'>
      <VerticalTimeline>
        {ContentItems.map((data, i) => (
          <Contents key={i} {...data} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default portfolio;
