var React = require('react');
var Nav = require('../components/Nav');

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
