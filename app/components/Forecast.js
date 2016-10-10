var React = require('react');
var PropTypes = require('react').PropTypes;
var moment = require('moment');


function Forecast(props) {
  var day = moment().month();
  console.log('Day of WeeK:', day);
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
