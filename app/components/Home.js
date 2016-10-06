var React = require('react');
var background = require('../styles').background;

function Home() {
  return (
    <div style={background}>
      <div className="container">
        <h2>Enter a City and State</h2>
        <input type="text" className="form-control" placeholder="Petaluma, CA"/>
      </div>
    </div>
  )
}

module.exports = Home;
