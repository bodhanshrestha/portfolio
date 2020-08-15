import React from 'react';
import WorkContents from '../../Widgets/WorkContentsMagnifier';
import NGO from '../../assets/img/websites/2020-07-24_18-34-39.png';
import CHARITY from '../../assets/img/websites/2020-07-24_18-26-47.png';
import Fluxo from '../../assets/img/websites/2020-07-24_18-28-42.png';
import NEWS from '../../assets/img/websites/2020-07-24_18-29-56.png';
import PORTO from '../../assets/img/websites/2020-07-24_18-36-00.png';
import TRAVELO from '../../assets/img/websites/2020-07-24_18-38-46.png';
import TRAX from '../../assets/img/websites/2020-07-24_20-54-05.png';
import CELEB from '../../assets/img/websites/2020-07-24_181-16-43.png';
import ToTop from '../../Helper/ToTop';

const URL = 'http://bodhanshrestha.com.np/';
const Project = [
  {
    name: 'NGO',
    url: `${URL}/ngo/`,
    bg: `${NGO}`,
    left: true,
    right: true,
  },
  {
    name: 'News',
    url: `${URL}/news/`,
    bg: `${NEWS}`,
    left: false,
    right: false,
    margin: 60,
  },
  {
    name: 'Charity',
    url: `${URL}/charity/`,
    bg: `${CHARITY}`,
    left: true,
    right: true,
    margin: 60,
  },
  {
    name: 'Cooperate Site',
    url: `${URL}/fluxo/`,
    bg: `${Fluxo}`,
    left: false,
    right: false,
    margin: 60,
  },
  {
    name: 'Cooperate Site',
    url: `${URL}/porto/`,
    bg: `${PORTO}`,
    left: true,
    right: true,
    margin: 60,
  },
  {
    name: 'Cooperate Site',
    url: `${URL}/trax/`,
    bg: `${TRAX}`,
    left: false,
    right: false,
    margin: 60,
  },
  {
    name: 'Travel agency',
    url: `${URL}/travelo/`,
    bg: `${TRAVELO}`,
    left: true,
    right: true,
    margin: 60,
  },
  {
    name: 'Celebrity',
    url: `${URL}/burbank/`,
    bg: `${CELEB}`,
    left: false,
    right: false,
    margin: 60,
  },
];
const ProjectLists = () =>
  Project.map(({ name, url, bg, left, right, margin }, i) => (
    <WorkContents
      title={name}
      url={url}
      bg={bg}
      left={left}
      right={right}
      margin={margin}
      key={i}
    />
  ));
const broadway = () => {
  return (
    <div className='broadwayProjects'>
      <h1>Broadway Projects</h1>
      <ul>
        <ProjectLists />
      </ul>
      <ToTop />
    </div>
  );
};

export default broadway;
