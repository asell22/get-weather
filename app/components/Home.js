var React = require('react');
var styles = require('../styles');
var background = styles.background;
var content = styles.content;
var center = styles.header

function Home() {
  return (
    <div style={background}>
      <div className="container" style={content}>
        <h2 style={center}>Enter a City and State</h2>
        <input type="text" className="form-control" placeholder="Petaluma, CA"/>
        <button className="btn btn-success">Get Weather</button>
      </div>
    </div>
  )
}

module.exports = Home;
