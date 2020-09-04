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
      <div className="col-12 text-muted">
        {props.label}
      </div>

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