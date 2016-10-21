import React from 'react';
import CurrentDetails from '../components/CurrentDetails';
import ForecastDetails from '../components/ForecastDetails';

const DetailContainer = React.createClass({
  render() {
    var details = this.props.location.state.details;

    if (details.type === 'current') {
      return <CurrentDetails details={details} />
    } else {
      return <ForecastDetails details={details} />
    }
  }
})

export default DetailContainer;
