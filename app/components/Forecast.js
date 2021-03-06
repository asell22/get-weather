import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { backgroundStyle, headerStyle, listStyle, iconStyle, dateStyle, loadingStyle } = require('../styles/Forecast');

const Forecast = ({ isLoading, list, city, onDetailClick }) => {
  return (
    isLoading ?
    <div style={loadingStyle}>Loading...</div> :
    <div style={backgroundStyle} className="container">
      <h1 style={headerStyle}>{city}</h1>
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

        return <li onClick={function() {onDetailClick(details)}} key={obj.listId} className="col-xs-4" style={listStyle}> <i className={prefix + obj.weather[0].id} style={iconStyle}></i><span style={dateStyle}>{obj.date}</span></li>
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

export default Forecast;
