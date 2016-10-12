var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var Home = require('../containers/HomeContainer');
var Forecast = require('../containers/ForecastContainer');
var Detail = require('../components/Detail');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forecast/:city" component={Forecast} />
      <Route path="detail/:city" component={Detail} />
    </Route>
  </Router>
);

module.exports = routes;
