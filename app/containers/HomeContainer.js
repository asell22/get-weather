import React from 'react';
import Home from '../components/Home';

const HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      place: ''
    }
  },
  handleUpdatePlace(evt) {
    this.setState({
      place: evt.target.value
    })
  },
  handleFormSubmit() {
    let place = this.state.place || 'Petaluma, CA';
    this.context.router.push({
      pathname: `/forecast/${place}`
    });

    this.setState({
      place: ''
    })
  },
  render() {
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
