import React from 'react'

import './ProductCard.css'
import Rating from '../basic/Ratings'

import { Card } from 'react-bootstrap'
import { formatBRL } from '../utils/currency'

export default function ProductCard (props) {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={props.imgURL} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted product-card-name">{props.name}</Card.Subtitle>
        <Rating rating={props.rating} />
        <Card.Title>{formatBRL(props.price)}</Card.Title>
      </Card.Body>
    </Card >
  )
}