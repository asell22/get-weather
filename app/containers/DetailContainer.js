var React = require('react');

var DetailContainer = React.createClass({
  render: function() {
    var details = this.props.location.state.details;
    console.log(details);
    return (
      <div style={{paddingTop: '100px'}}>
        <p>{details.city}</p>
        <p>{details.weather}</p>
        <p>{details.max}</p>
        <p>{details.min}</p>
        <p>{details.humidity}</p>
      </div>
    )
  }
})

module.exports = DetailContainer;
