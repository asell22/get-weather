var React = require('react');
var PropTypes = require('react').PropTypes;

var styles = require('../styles/Forecast');
var bg = styles.background;
var header = styles.header;
var list = styles.list;
var icon = styles.icon;

function Forecast(props) {
  console.log('Props:', props);

  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={bg} className="container">
      <h1 style={header}>{props.city}</h1>
      <ul className="row">
        {props.list.map(function(obj,indx) {
          var prefix = obj.weather[0].icon.includes('n') ? 'wi wi-owm-night-' : 'wi wi-owm-day-';
          return <li key={obj.listId} className="col-md-4" style={list}> <i className={prefix + obj.weather[0].id} style={icon}></i>{obj.date}</li>
        })}
      </ul>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
