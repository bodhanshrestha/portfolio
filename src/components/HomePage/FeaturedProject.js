import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg1 from '../assets/img/p1.png';
import bg2 from '../assets/img/c3.png';
import bg3 from '../assets/img/p3.png';
import bg4 from '../assets/img/p4.png';
import bg5 from '../assets/img/p5.png';
import HoverDetail from './HoverDetails';
import { Link } from 'react-router-dom';
const URL = 'http://bodhanshrestha.com.np';
const Project = [
  { name: 'NGO', url: `${URL}/ngo/`, bg: bg2 },
  { name: 'News', url: `${URL}/news/`, bg: bg4 },
  { name: 'Charity', url: `${URL}/charity/`, bg: bg5 },
  { name: 'Cooperate Site', url: `${URL}/fluxo/`, bg: bg3 },
  { name: 'Celebrity', url: `${URL}/burbank/`, bg: bg1 },
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
        <h1
          style={{
            width: '100%',
            textAlign: 'left',
            padding: '0 40px',
          }}
        >
          <div className='featured'>
            <span></span>
            <span></span>
            Featured Projects
          </div>
        </h1>
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
