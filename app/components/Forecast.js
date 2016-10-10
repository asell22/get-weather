var React = require('react');
var PropTypes = require('react').PropTypes;

function getWeekDay(num) {
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[num];
}

function Forecast(props) {
  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={{paddingTop: '100px'}}>
      <h1>{props.city}</h1>
      <ul>
        
      </ul>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
