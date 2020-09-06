import React from 'react';

import Home from '../views/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}]

export default function Routes () {
  const renderedRoutes = routes
    .map(route => <Route key={route.name} path={route.path}>{route.component}</Route>)

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