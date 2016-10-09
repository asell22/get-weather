var React = require('react');

function Forecast(props) {
  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={{paddingTop: '100px'}}>Forecast Component</div>
  )
}

module.exports = Forecast;
