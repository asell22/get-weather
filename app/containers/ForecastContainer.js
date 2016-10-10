var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');
var moment = require('moment');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      list: [],
      city: ''
    }
  },

  addDatesToWeatherObjects: function(list) {
    var day = new Date(Date.now())

    return list.map(function(obj, indx) {
      var date = moment(day).add(indx, 'day').format('dddd, MMM D');
      obj.date = date;
    });
  },

  apiRequest: function(city) {
    weatherHelpers.getWeatherData(city).then(function(response) {
      var list = [];
      list = list.concat(response[0].data).concat(response[1].data.list);
      this.addDatesToWeatherObjects(list)

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
