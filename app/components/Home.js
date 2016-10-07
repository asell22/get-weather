var React = require('react');

var merge = require('lodash/merge');
var styles = require('../styles');

var background = styles.background,
    content = styles.content,
    header = styles.header,
    input = styles.input,
    center = styles.center,
    button = styles.button;

var Home = React.createClass({
  render: function() {
    return (
      <div style={background}>
        <div className="container" style={content}>
          <h2 style={header}>Enter a City and State</h2>
          <input
            type="text"
            className="form-control"
            style={merge({}, input, center)}
            placeholder="Petaluma, CA"
            onChange={this.props.onUpdatePlace}
            value={this.props.place}
          />
          <button
            className="btn btn-success"
            style={merge({}, button, center)}
            onClick={this.props.onButtonClick}> Get Weather
          </button>
        </div>
      </div>
    )
  }
});

module.exports = Home;
