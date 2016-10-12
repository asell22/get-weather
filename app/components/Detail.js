var React = require('react');

function Detail(props) {
  var details = props.details
  console.log(props)
  if (details.type === 'current') {
    return (
      <div style={{paddingTop: '300px'}}>
        <i className={details.icon}></i>
        <h1>{details.city}</h1>
        <h3>{details.description}</h3>
        <h3>{details.temp}</h3>
        <h3>{details.humidity}</h3>
      </div>
    )
  } else {
    return (
      <div style={{paddingTop: '100px'}}>
        <i className={details.icon}></i>
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
