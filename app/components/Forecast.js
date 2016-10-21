import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const styles = require('../styles/Forecast');

const bg = styles.background,
    header = styles.header,
    listStyle = styles.list,
    icon = styles.icon,
    dateStyle = styles.date,
    loading = styles.loading;

function Forecast({ isLoading, list, city, onDetailClick }) {
  return (
    isLoading ?
    <div style={loading}>Loading...</div> :
    <div style={bg} className="container">
      <h1 style={header}>{city}</h1>
      <ul className="row">
        {list.map(function(obj,indx) {
          let prefix = obj.weather[0].icon.includes('n') ? 'wi wi-owm-night-' : 'wi wi-owm-day-';
          let date = obj.date;
          let description = obj.weather[0].description;

          if (obj.main) {
            let temp = obj.main.temp;
            let humidity = obj.main.humidity;

            var details = {
              type: 'current',
              city,
              date,
              description,
              temp,
              humidity,
              icon: prefix + obj.weather[0].id
            }
          } else {
            let max = obj.temp.max;
            let min = obj.temp.min;
            let humidity = obj.humidity;

            var details = {
              type: 'forecast',
              city,
              date,
              description,
              max,
              min,
              humidity,
              icon: prefix + obj.weather[0].id
            }
          }

        return <li onClick={function() {onDetailClick(details)}} key={obj.listId} className="col-xs-4" style={listStyle}> <i className={prefix + obj.weather[0].id} style={icon}></i><span style={dateStyle}>{obj.date}</span></li>
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

// module.exports = Forecast;
export default Forecast;
