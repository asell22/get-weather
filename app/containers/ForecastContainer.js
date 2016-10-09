var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    }
  },
  componentDidMount: function() {
    weatherHelpers.getFiveDayForecast(this.props.params.city).then(function(data) {
      console.log('From FORECAST container:', data);
      this.setState({
        isLoading: false
      })
    }.bind(this))
  },
  render: function() {
    console.log('Rendering Forecast Component')
    return (
      <Forecast isLoading={this.state.isLoading}/>
    )
  }
})

module.exports = ForecastContainer;
