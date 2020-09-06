import React from 'react'

import './ProductCard.css'
import Rating from '../basic/Ratings'

import { Card } from 'react-bootstrap'
import { formatBRL } from '../utils/currency'
import { Link } from 'react-router-dom'

export default function ProductCard (props) {
  const productLink = `/products/${props.id}`

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={props.imgURL} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted product-card-name">
          <Link className="product-link" to={productLink}>{props.name}</Link>
        </Card.Subtitle>
        <Rating rating={props.rating} />
        <Card.Title>{formatBRL(props.price)}</Card.Title>
      </Card.Body>
    </Card >
  )
}