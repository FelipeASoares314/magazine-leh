import React from 'react';

import Home from '../views/home/Home';
import ProductView from '../views/product/View';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routes = [{
  path: '/',
  name: 'Home',
  exact: true,
  component: Home
}, {
  path: '/products/:id',
  name: 'ProductsView',
  component: ProductView
}]

export default function Routes () {
  const renderedRoutes = routes
    .map((route, index) =>
      <Route
        key={index}
        {...route}
      />
    )

  return (
    <Router>
      <div>
        <Switch>
          {renderedRoutes}
        </Switch>
      </div>
    </Router>
  )
}