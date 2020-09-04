import React from 'react';

import StarRatings from 'react-star-ratings';

export default function Ratings ({
  rating,
  starRatedColor = '#0b64ad',
  starDimension = '20px',
  starSpacing = '5px'
} = {}) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor={starRatedColor}
      starDimension={starDimension}
      starSpacing={starSpacing}
    />
  );
}