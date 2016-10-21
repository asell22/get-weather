import React from 'react';
import Nav from '../components/Nav';

const NavContainer = React.createClass({

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
    this.context.router.push({
      pathname: '/forecast/' + this.state.place
    });

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

export default NavContainer;
