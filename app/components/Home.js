var React = require('react');
var merge = require('lodash/merge')
var styles = require('../styles');
var background = styles.background;
var content = styles.content;
var center = styles.header
var input = styles.input
var color = styles.color

function Home() {
  return (
    <div style={background}>
      <div className="container" style={content}>
        <h2 style={center}>Enter a City and State</h2>
        <input type="text" className="form-control" style={merge({}, input, color)} placeholder="Petaluma, CA"/>
        <button className="btn btn-success">Get Weather</button>
      </div>
    </div>
  )
}

module.exports = Home;
