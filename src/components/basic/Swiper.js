import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import './Swiper.css'

export default function SwiperWraper (props) {
  const spaceBetween = props.spaceBetween || 10
  const slidesPerView = props.slidesPerView || 4

  const slides = Array.isArray(props.children)
    ? props.children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
    : ''

  return (
    <div className="row">
      <div className="mr-auto text-muted mb-1 swiper-label">
        {props.label}
      </div>

      {/* <div id="control text-muted mb-1">
        <button className="control-button mr-2 ripple">&lt;</button>
        <button className="control-button ripple">&gt;</button>
      </div> */}

      <Swiper
        className="col-12"
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        {slides}
      </Swiper>
    </div>
  );
};