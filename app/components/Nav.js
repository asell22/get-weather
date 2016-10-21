import React, { PropTypes } from 'react';

import { nav, color, margin } from '../styles/Nav';

const Nav = ({ onFormSubmit, onUpdatePlace, place }) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" style={nav}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={color}>Get Weather</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form
            className="navbar-form navbar-right"
            onSubmit={onFormSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Petaluma, CA"
                style={margin}
                onChange={onUpdatePlace}
                value={place}
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

export default Nav;
