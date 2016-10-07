var React = require('react');
var navStyles = require('../styles/Nav');

var nav = navStyles.nav,
    color = navStyles.color,
    borderColor = navStyles.borderColor,
    margin = navStyles.margin;

var NavContainer = React.createClass({
  getInitialState: function() {
    return {
      place: ''
    }
  },
  handleUpdatePlace: function(evt) {
    this.setState({
      place: evt.target.value
    })
  },
  handleFormSubmit: function(evt) {
    evt.preventDefault();
    console.log(this.state.place);
    this.setState({
      place: ''
    })
  },
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" style={nav}>
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" style={color}>Get Weather</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <form
              className="navbar-form navbar-right"
              onSubmit={this.handleFormSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Petaluma, CA"
                  style={margin}
                  onChange={this.handleUpdatePlace}
                  value={this.state.place}
                  />
              </div>
              <button type="submit" className="btn btn-default">Get Weather</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = NavContainer;
