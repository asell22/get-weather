var React = require('react');
var Nav = require('../components/Nav');
var weatherHelpers = require('../utils/weatherHelpers');

var NavContainer = React.createClass({
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
  handleFormSubmit: function(evt) {
    evt.preventDefault();
    var place = this.state.place;
    this.context.router.push({
      pathname: '/forecast/' + place
    });
    weatherHelpers.getFiveDayForecast(this.state.place);
    console.log(this.state.place);
    this.setState({
      place: ''
    })
  },
  render: function() {
    return (
      <Nav
        onFormSubmit={this.handleFormSubmit}
        onUpdatePlace={this.handleUpdatePlace}
        place={this.state.place}
      />
    )
  }
})

module.exports = NavContainer;
