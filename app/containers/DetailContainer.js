var React = require('react');
var Detail = require('../components/Detail');
var CurrentDetails = require('../components/CurrentDetails');
var ForecastDetails = require('../components/ForecastDetails');

var DetailContainer = React.createClass({
  render: function() {
    var details = this.props.location.state.details;

    if (details.type === 'current') {
      return <CurrentDetails details={details} />
    } else {
      return <ForecastDetails details={details} />
    }
  }
})

module.exports = DetailContainer;
