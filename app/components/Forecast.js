var React = require('react');
var PropTypes = require('react').PropTypes;

var styles = require('../styles/Forecast');
var bg = styles.background;
var header = styles.header;

function Forecast(props) {
  console.log('Props:', props);

  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={bg}>
      <h1 style={header}>{props.city}</h1>
      <ul>
        {props.list.map(function(obj,indx) {
          var prefix = obj.weather[0].icon.includes('n') ? 'wi wi-owm-night-' : 'wi wi-owm-day-';
          return <li key={obj.listId}>{obj.date} - WEATHER ICON: {obj.weather[0].icon} <i className={prefix + obj.weather[0].id} style={{fontSize: '100px', color: '#ddd'}}></i></li>
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
