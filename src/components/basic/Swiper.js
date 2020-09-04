import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

export default function SwiperWraper (props) {
  const spaceBetween = props.spaceBetween || 10
  const slidesPerView = props.slidesPerView || 5

  const slides = Array.isArray(props.children)
    ? props.children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
    : ''

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {slides}
    </Swiper>
  );
};