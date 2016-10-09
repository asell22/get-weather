var React = require('react');
var PropTypes = require('react').PropTypes;

function Forecast(props) {
  console.log('Props from FORECAST component:', props);
  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={{paddingTop: '100px'}}>Forecast Component</div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired
}

module.exports = Forecast;
