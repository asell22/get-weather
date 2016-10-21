import React from 'react';
import Nav from './NavContainer';

const Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

export default Main;
