var React = require('react');
var merge = require('lodash/merge');

var icon = require('../styles/Detail').icon;
var header = require('../styles/Forecast').header;
var center = require('../styles/index').center;

function Detail(props) {
  var details = props.details
  console.log(props)
  if (details.type === 'current') {
    return (
      <div style={{paddingTop: '100px'}} className="container">
        <div style={merge({}, center, {textAlign: 'center'})}>
          <i className={details.icon} style={icon}></i>
          <h2 style={header}>{details.date}</h2>
          <h1 style={header}>{details.city}</h1>
          <h1 style={header}>{details.description}</h1>
          <h1 style={header}>temp: {details.temp} degrees</h1>
          <h1 style={header}>humidity: {details.humidity}%</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{paddingTop: '100px'}} className="container">
        <div style={merge({}, center, {textAlign: 'center'})}>
          <i className={details.icon} style={icon}></i>
          <h2 style={header}>{details.date}</h2>
          <h1 style={header}>{details.city}</h1>
          <h1 style={header}>{details.description}</h1>
          <h1 style={header}>max temp: {details.max} degrees</h1>
          <h1 style={header}>min temp: {details.min} degrees</h1>
          <h1 style={header}>humidity: {details.humidity} degrees</h1>
        </div>
      </div>
    )
  }
}

module.exports = Detail
