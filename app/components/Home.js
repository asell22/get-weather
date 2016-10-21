import React, { PropTypes } from 'react';
import { merge } from 'lodash';

const styles = require('../styles');
const background = styles.background,
      content = styles.content,
      header = styles.header,
      input = styles.input,
      center = styles.center,
      button = styles.button;

var Home = function({ onFormSubmit, onUpdatePlace, place}) {

  return (
    <div style={background}>
      <div className="container" style={content}>
        <h2 style={header}>Enter a City and State</h2>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="form-control"
            style={merge({}, input, center)}
            placeholder="Petaluma, CA"
            onChange={onUpdatePlace}
            value={place}
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

export default Home;
