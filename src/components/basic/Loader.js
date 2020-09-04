import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

export default class App extends Component {
  //other logic
  render ({ type = 'ThreeDots', color = '#1f1d19', height = 50, width = 50, timeout = 10000 } = {}) {
    return (
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={timeout}
      />
    );
  }
}