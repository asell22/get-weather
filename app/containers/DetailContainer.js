var React = require('react');

var Detail = React.createClass({
  getInitialState: function() {
    return {
      details: {}
    }
  },
  render: function() {
    console.log(this.props.location.state.details)
    return <p style={{paddingTop: '100px'}}>Detail</p>
  }
})

module.exports = Detail;
