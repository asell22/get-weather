var React = require('react');
var PropTypes = require('react').PropTypes;

var navStyles = require('../styles/Nav');
var nav = navStyles.nav,
    color = navStyles.color,
    borderColor = navStyles.borderColor,
    margin = navStyles.margin;

var Nav = function(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" style={nav}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={color}>Get Weather</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form
            className="navbar-form navbar-right"
            onSubmit={props.onFormSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Petaluma, CA"
                style={margin}
                onChange={props.onUpdatePlace}
                value={props.place}
                />
            </div>
            <button type="submit" className="btn btn-default">Get Weather</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onUpdatePlace: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired
}

module.exports = Nav;