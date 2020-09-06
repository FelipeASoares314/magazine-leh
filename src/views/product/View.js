import React, { Component } from 'react';

import './View.css';

import Navbar from '../../components/layouts/Navbar'
import DefaultPage from '../../components/pages/default/DefaultPage';
import ViewProduct from '../../components/view/products/ViewProduct';

export default class ViewProductPage extends Component {
  render () {
    return (
      <div className="App">
        <Navbar id="navbar" />

        <DefaultPage>
          <ViewProduct productID={this.props.match.params.id} />
        </DefaultPage>
      </div>
    )
  }
}