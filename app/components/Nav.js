var React = require('react');
var nav = require('../styles/Nav').nav;
var color = require('../styles/Nav').color
var borderColor = require('../styles/Nav').borderColor
var margin = require('../styles/Nav').margin

function Nav() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" style={nav}>
     <div className="container">
       <div className="navbar-header">
          <a className="navbar-brand" href="#" style={color}>Get Weather</a>
       </div>
       <div id="navbar" className="navbar-collapse collapse">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Petaluma, CA" style={margin}/>
            </div>
            <button type="submit" className="btn btn-default">Get Weather</button>
          </form>
       </div>
     </div>
   </nav>
  )
}

module.exports = Nav;
