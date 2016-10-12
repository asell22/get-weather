var React = require('react');
var PropTypes = require('react').PropTypes;
var Link = require('react-router').Link

var styles = require('../styles/Forecast'),
    bg = styles.background,
    header = styles.header,
    list = styles.list,
    icon = styles.icon,
    date = styles.date;

function Forecast(props) {
  console.log('Props:', props);

  return (
    props.isLoading ?
    <div style={bg}>Loading...</div> :
    <div style={bg} className="container">
      <h1 style={header}>{props.city}</h1>
      <ul className="row">
        {props.list.map(function(obj,indx) {
          var prefix = obj.weather[0].icon.includes('n') ? 'wi wi-owm-night-' : 'wi wi-owm-day-';
          var city = props.city;
          var weather = obj.weather[0].description;
          var max = obj.main === undefined ? obj.temp.max : obj.main.temp_max;
          var min = obj.main === undefined ? obj.temp.min : obj.main.temp_min;
          var humidity = obj.main === undefined ? obj.humidity : obj.main.humidity;

          var details = {
            city: city,
            weather: weather,
            max: max,
            min: min,
            humidity: humidity
          }

          return <li onClick={props.onDetailClick} key={obj.listId} className="col-xs-4" style={list}> <i className={prefix + obj.weather[0].id} style={icon}></i><span style={date}>{obj.date}</span></li>
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
