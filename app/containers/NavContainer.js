var React = require('react');
var Nav = require('../components/Nav');

var NavContainer = React.createClass({
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
