import React from 'react'

import './ProductCard.css'

import { Card } from 'react-bootstrap'

export default function ProductCard (props) {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={props.imgURL} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
        <Card.Title>R${props.price}</Card.Title>
      </Card.Body>
    </Card >
  )
}