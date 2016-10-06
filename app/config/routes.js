var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');

var routes = (
  <Router>
    <Route path="/" component={Main}/>
  </Router>
);


module.exports = routes;
