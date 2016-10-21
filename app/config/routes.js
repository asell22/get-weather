import React from 'react';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
var Main = require('../containers/Main');
import Home from '../containers/HomeContainer';
var Forecast = require('../containers/ForecastContainer');
var Detail = require('../containers/DetailContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forecast/:city" component={Forecast} />
      <Route path="detail/:city" component={Detail} />
    </Route>
  </Router>
);

export default routes
