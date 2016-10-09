var React = require('react');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    }
  },
  render: function() {
    // console.log(this.props)
    return (
      <Forecast isLoading={this.state.isLoading}/>
    )
  }
})

module.exports = ForecastContainer;
