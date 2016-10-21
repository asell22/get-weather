var React = require('react');
var merge = require('lodash/merge');

var icon = require('../styles/Detail').icon;
var date = require('../styles/Detail').date;
var center = require('../styles/index').center;
var header = require('../styles/Detail').header;

function ForecastDetails(props) {
  console.log('FORECAST DEETS:', props);
  var details = props.details;
  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={details.icon} style={merge({}, icon, {marginTop:'20px'})}></i>
        <h2 style={date}>{details.date}</h2>
        <h1 style={header}>{details.city}</h1>
        <h1 style={header}>{details.description}</h1>
        <h1 style={header}>max temp: {details.max} degrees</h1>
        <h1 style={header}>min temp: {details.min} degrees</h1>
        <h1 style={header}>humidity: {details.humidity} degrees</h1>
      </div>
    </div>
  )
}

module.exports = ForecastDetails;
