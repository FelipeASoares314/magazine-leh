import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class ViewProduct extends Component {
  render () {
    return (
      <Card>
        {this.props.productID}
      </Card>
    )
  }
}