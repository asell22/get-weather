import React from 'react';
import Home from '../components/Home';

const HomeContainer = React.createClass({
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
  handleFormSubmit: function() {
    var place = this.state.place;
    this.context.router.push({
      pathname: '/forecast/' + place
    });

    this.setState({
      place: ''
    })
  },
  render: function() {
    return (
      <Home
        onUpdatePlace={this.handleUpdatePlace}
        onFormSubmit={this.handleFormSubmit}
        place={this.state.place}
      />
    )
  }
})

export default HomeContainer;
