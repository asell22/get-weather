var React = require('react');
var Home = require('../components/Home');
var weatherHelpers = require('../utils/weatherHelpers');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      place: ''
    }
  },
  handleUpdatePlace: function(evt) {
    this.setState({
      place: evt.target.value
    })
  },
  handleButtonClick: function() {
    var place = this.state.place;
    this.context.router.push({
      pathname: '/forecast/' + place
    })
    weatherHelpers.getFiveDayForecast(this.state.place)
    console.log(this.state.place);
    this.setState({
      place: ''
    })
  },
  render: function() {
    return (
      <Home
        onUpdatePlace={this.handleUpdatePlace}
        onButtonClick={this.handleButtonClick}
        place={this.state.place}
      />
    )
  }
})

module.exports = HomeContainer;
