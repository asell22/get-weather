import React from 'react';
import NavContainer from './NavContainer';

const Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavContainer />
        {this.props.children}
      </div>
    )
  }
});

export default Main;
