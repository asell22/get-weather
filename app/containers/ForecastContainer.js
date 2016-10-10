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
      var list = [];
      list = list.concat(response[0].data).concat(response[1].data.list)
      console.log('List:', list);
      console.log(this.props)
      // console.log('Response:', response);
      this.setState({
        isLoading: false,
        list: list,
        city: this.props.params.city,
      })
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
