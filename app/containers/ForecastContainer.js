import React from 'react';
import Forecast from '../components/Forecast';
import helpers from '../utils/weatherHelpers';
import moment from 'moment';
import { v4 } from 'node-uuid';

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true,
      list: [],
      city: ''
    }
  },
  handleDetailClick(details) {
    var city = this.state.city;
    this.context.router.push({
      pathname: '/detail/' + city,
      state: {details: details}
    })
  },
  addDatesToWeatherObjects(list) {
    var day = new Date(Date.now())

    return list.map(function(obj, indx) {
      var date = moment(day).add(indx, 'day').format('dddd, MMM D');
      if (indx === 0) {
        obj.date = 'Current Weather'
      } else {
        obj.date = date;
      }
      obj.listId = v4();
    });
  },

  apiRequest(city) {
    helpers.getWeatherData(city).then(function(response) {
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

  componentDidMount() {
    this.apiRequest(this.props.params.city);
  },

  componentWillReceiveProps(nextProps) {
    this.apiRequest(nextProps.params.city)
  },

  render() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        list={this.state.list}
        city={this.state.city}
        onDetailClick={this.handleDetailClick}
      />
    )
  }
})

export default ForecastContainer;
