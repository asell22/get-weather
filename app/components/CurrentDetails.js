var React = require('react');
var merge = require('lodash/merge');

var icon = require('../styles/Detail').icon;
var date = require('../styles/Detail').date;
var center = require('../styles/index').center;
var header = require('../styles/Detail').header;

function CurrentDetails(props) {
  var details = props.details;

  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={details.icon} style={icon}></i>
        <h2 style={date}>{details.date}</h2>
        <h1 style={header}>{details.city}</h1>
        <h1 style={header}>{details.description}</h1>
        <h1 style={header}>temp: {details.temp} degrees</h1>
        <h1 style={header}>humidity: {details.humidity}%</h1>
      </div>
    </div>
  )
}

module.exports = CurrentDetails;
