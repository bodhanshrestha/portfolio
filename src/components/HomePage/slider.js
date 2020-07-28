import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg1 from '../assets/img/c1.jpg';
import bg2 from '../assets/img/c2.jpg';
import bg3 from '../assets/img/c3.png';
import bg4 from '../assets/img/c4.jpg';
import bg5 from '../assets/img/c5.jpg';
import bg6 from '../assets/img/c6.jpg';
const SliderDetail = ({ background, content }) => (
  <div
    className='sliderDetail'
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <h3>{content}</h3>
  </div>
);
export default class slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      focusOnSelect: true,
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
      <div>
        <Slider {...settings}>
          <SliderDetail background={bg1} content='1' />
          <SliderDetail background={bg2} content='2' />
          <SliderDetail background={bg3} content='3' />
          <SliderDetail background={bg4} content='4' />
          <SliderDetail background={bg5} content='5' />
          <SliderDetail background={bg6} content='6' />
        </Slider>
      </div>
    );
  }
}
