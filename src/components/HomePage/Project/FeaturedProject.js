import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CELEB from '../../assets/img/p1.png';
import CHARITY from '../../assets/img/p2.png';
import SITE from '../../assets/img/p3.png';
import NEWS from '../../assets/img/p4.png';
import NGO from '../../assets/img/p5.png';
import HoverDetail from './HoverDetails';

const URL = 'http://bodhanshrestha.com.np';
const Project = [
  { name: 'NGO', url: `${URL}/ngo/`, bg: NGO },
  { name: 'News', url: `${URL}/news/`, bg: NEWS },
  { name: 'Charity', url: `${URL}/charity/`, bg: CHARITY },
  { name: 'Cooperate Site', url: `${URL}/fluxo/`, bg: SITE },
  { name: 'Celebrity', url: `${URL}/burbank/`, bg: CELEB },
];
const SliderDetail = ({ background, url }) => (
  <div
    className='sliderDetail'
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <HoverDetail url={url} />
  </div>
);
export default class slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className='featuredProject'>
        <div
          style={{
            width: '100%',
            padding: '0 40px',
          }}
        >
          <div className='featured'>
            <span></span>
            <span></span>
            Gimpse of Completed Projects
          </div>
        </div>
        <hr
          style={{
            width: '95%',
            height: '2px',
            margin: 'auto',
            background: 'gray',
          }}
        />
        <Slider {...settings}>
          {Project.map(({ bg, name, url }, i) => (
            <SliderDetail background={bg} name={name} url={url} key={i} />
          ))}
        </Slider>
        <div className='forMoreProjects'>
          <h6 style={{ padding: '0 0 20px 0' }}>
            Here are a few design projects I've worked on recently. Want to see
            more?
          </h6>
          <Link to='/work'>For More Projects</Link>
        </div>
      </div>
    );
  }
}
