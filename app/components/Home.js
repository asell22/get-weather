var React = require('react');
var PropTypes = require('react').PropTypes;
var merge = require('lodash/merge');

var styles = require('../styles');
var background = styles.background,
    content = styles.content,
    header = styles.header,
    input = styles.input,
    center = styles.center,
    button = styles.button;

var Home = function(props) {
  return (
    <div style={background}>
      <div className="container" style={content}>
        <h2 style={header}>Enter a City and State</h2>
        <form onSubmit={props.onFormSubmit}>
          <input
            type="text"
            className="form-control"
            style={merge({}, input, center)}
            placeholder="Petaluma, CA"
            onChange={props.onUpdatePlace}
            value={props.place}
          />
          <button
            className="btn btn-success"
            style={merge({}, button, center)}
          >
            Get Weather
          </button>
        </form>
      </div>
    </div>
  )
};

Home.propTypes = {
  onUpdatePlace: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired
}

module.exports = Home;
