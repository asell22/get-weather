var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    var details = this.props.location.state.details;
    
    return (
      <Detail type={details.type}/>
    )
  }
})

module.exports = DetailContainer;
