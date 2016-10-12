var React = require('react');

function Detail(props) {
  if (props.type === 'current') {
    return (
      <h1 style={{paddingTop: '100px'}}>Current Weather</h1>
    )
  } else {
    return (
      <h1 style={{paddingTop: '100px'}}>Forecasted Weather</h1>
    )
  }
}

module.exports = Detail
