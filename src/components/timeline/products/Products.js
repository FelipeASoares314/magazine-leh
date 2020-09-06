import React, { Component } from 'react';

import './Products.css'

import productsService from '../../../service/Products'

import Loader from '../../basic/Loader'
import Swiper from '../../basic/Swiper'
import ProductCard from '../../cards/ProductCard'

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

    return this.state.products
      .map((section, index) => {
        const products = section.products
          .map((product, index) => <ProductCard key={index} {...product} />)

        const marginTop = index > 0
          ? <div className="mt-4" />
          : null

        return (
          <div key={section.label}>
            {marginTop}
            <Swiper label={section.label} >
              {products}
            </Swiper>
          </div>
        )
      })
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