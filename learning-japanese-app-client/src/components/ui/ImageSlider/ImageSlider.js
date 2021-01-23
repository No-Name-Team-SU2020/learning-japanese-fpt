import React from 'react';
import './ImageSlider.css';
import { Avatar } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { quotes } from '../../../temporary-data/data';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const ImageSlider = () => {
  return (
    <div className="custom-image-slider" style={{ background: `url('https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-japanese-style-zephyr-romantic-japan-image_16882.jpg` }} >
      <Slider {...settings}>
        {
          quotes.map(quote => <div key={quote.id} className="text-white text-center px-3 pt-5 mt-3">
            <Avatar src={quote.avatar} className="mx-auto quote-avatar" sizes="" />
            <p className="lead h-80">
              {quote.title}
            </p>
            <h5> - {quote.name} </h5>
          </div>)
        }
      </Slider>
    </div>
  );
}

export default ImageSlider;
