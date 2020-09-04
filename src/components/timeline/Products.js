import React, { Component } from 'react';

import './Products.css'

import productsService from '../../service/Products'

import Loader from '../basic/Loader'
import Swiper from '../basic/Swiper'
import ProductCard from '../cards/ProductCard'

export default class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      products: [],
      error: null
    }
  }

  componentDidMount () {
    productsService.fetch()
      .then(products => this.setState({ products }))
      .catch(error => this.setState({ error }))
      .finally(_ => this.setState({ loaded: true }))
  }

  renderProducts () {
    if (!this.state.loaded) return ''

    const products = this.state.products
      .map((product, index) => <ProductCard key={index} {...product} />)

    return (
      <Swiper>
        {products}
      </Swiper>
    )
  }

  render () {
    const loader = this.state.loaded ? '' : <Loader />
    const products = this.renderProducts()

    return (
      <div className="products">
        {products}
        {loader}
      </div>
    )
  }
}