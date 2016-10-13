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
          <h1 style={header}>{details.date}</h1>
          <h1 style={header}>{details.city}</h1>
          <h1 style={header}>{details.description}</h1>
          <h1 style={header}>{details.temp}</h1>
          <h1 style={header}>{details.humidity}</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{paddingTop: '100px'}} className="container">
        <i className={details.icon} style={icon}></i>
        <h1 style={header}>{details.date}</h1>
        <h1>{details.city}</h1>
        <h3>{details.description}</h3>
        <h3>{details.min}</h3>
        <h3>{details.max}</h3>
        <h3>{details.humidity}</h3>
      </div>
    )
  }
}

module.exports = Detail
