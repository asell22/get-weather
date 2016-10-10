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

  apiRequest: function(city) {
    weatherHelpers.getWeatherData(city).then(function(response) {
      console.log('Response:', response);
      // this.setState({
      //   isLoading: false,
      //   list: response.data.list,
      //   city: response.data.city.name + ', ' + response.data.city.country,
      // })
    }.bind(this))
  },

  componentDidMount: function() {
    this.apiRequest(this.props.params.city);
  },

  componentWillReceiveProps: function(nextProps) {
    this.apiRequest(nextProps.params.city)
  },

  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        list={this.state.list}
        city={this.state.city}
      />
    )
  }
})

module.exports = ForecastContainer;
