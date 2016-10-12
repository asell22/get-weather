var React = require('react');

var DetailContainer = React.createClass({
  render: function() {
    var details = this.props.location.state.details;
    console.log(details);
    return (
      <div style={{paddingTop: '100px'}}>
        <h1>DETAIL</h1>
      </div>
    )
  }
})

module.exports = DetailContainer;
