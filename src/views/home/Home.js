import React from 'react';
import './Home.css';

import Navbar from '../../components/layouts/Navbar'
import Products from '../../components/timeline/products/Products'
import DefaultPage from '../../components/pages/default/DefaultPage'

export default function Home () {
  return (
    <div className="App">
      <Navbar id="navbar" />

      <DefaultPage>
        <Products id="products" />
      </DefaultPage>
    </div>
  )
}