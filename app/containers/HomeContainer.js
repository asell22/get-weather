var React = require('react');
var Home = require('../components/Home');


var HomeContainer = React.createClass({
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
