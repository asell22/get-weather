var React = require('react');
var PropTypes = require('react').PropTypes;
var Link = require('react-router').Link

var styles = require('../styles/Forecast');

var bg = styles.background,
    header = styles.header,
    list = styles.list,
    icon = styles.icon,
    dateStyle = styles.date;

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
          var date = obj.date;
          var description = obj.description;

          if (obj.main) {
            var temp = obj.main.temp;
            var humidity = obj.main.humidity;

            var details = {
              type: 'current',
              city: city,
              date: date,
              description: description,
              temp: temp,
              humidity: humidity,
              icon: prefix + obj.weather[0].id
            }
          } else {
            var max = obj.temp.max;
            var min = obj.temp.min;
            var humidity = obj.humidity;

            var details = {
              type: 'forecast',
              city: city,
              date: date,
              description: description,
              max: max,
              min: min,
              humidity: humidity,
              icon: prefix + obj.weather[0].id
            }
          }

        return <li onClick={function() {props.onDetailClick(details)}} key={obj.listId} className="col-xs-4" style={list}> <i className={prefix + obj.weather[0].id} style={icon}></i><span style={dateStyle}>{obj.date}</span></li>
        })}
      </ul>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onDetailClick: PropTypes.func.isRequired
}

module.exports = Forecast;
