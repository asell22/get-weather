var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      list: [],
      city: ''
    }
  },
  componentDidMount: function() {
    weatherHelpers.getFiveDayForecast(this.props.params.city).then(function(response) {
      this.setState({
        isLoading: false,
        list: response.data.list,
        city: response.data.city.name + ', ' + response.data.city.country,
      })
    }.bind(this))
  },
  componentWillReceiveProps: function(nextProps) {
    weatherHelpers.getFiveDayForecast(nextProps.params.city).then(function(response) {
      this.setState({
        isLoading: false,
        list: response.data.list,
        city: response.data.city.name + ', ' + response.data.city.country,
      })
    }.bind(this))
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        list={this.state.list}
        city={this.state.city}
        key={this.props.location.key}
      />
    )
  }
})

module.exports = ForecastContainer;
