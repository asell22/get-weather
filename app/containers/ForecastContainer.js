var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      list: []
    }
  },
  componentDidMount: function() {
    weatherHelpers.getFiveDayForecast(this.props.params.city).then(function(response) {
      this.setState({
        isLoading: false,
        list: response.data.list
      })
    }.bind(this))
  },
  render: function() {
    console.log('Rendering Forecast Component')
    return (
      <Forecast
        isLoading={this.state.isLoading}
        list={this.state.list}
      />
    )
  }
})

module.exports = ForecastContainer;
