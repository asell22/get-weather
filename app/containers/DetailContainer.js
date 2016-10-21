var React = require('react');
import CurrentDetails from '../components/CurrentDetails';
import ForecastDetails from '../components/ForecastDetails';

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
