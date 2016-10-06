var React = require('react');
var merge = require('lodash/merge')
var styles = require('../styles');
var background = styles.background;
var content = styles.content;
var header = styles.header;
var input = styles.input;
var center = styles.center;
var button = styles.button

function Home() {
  return (
    <div style={background}>
      <div className="container" style={content}>
        <h2 style={header}>Enter a City and State</h2>
        <input type="text" className="form-control" style={merge({}, input, center)} placeholder="Petaluma, CA"/>
        <button className="btn btn-success"  style={merge({}, button, center)}>Get Weather</button>
      </div>
    </div>
  )
}

module.exports = Home;
