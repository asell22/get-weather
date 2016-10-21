var React = require('react');
import Nav from './NavContainer';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
