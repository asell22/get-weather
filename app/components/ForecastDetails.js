import React from 'react';
import { merge } from 'lodash';

const iconStyle = require('../styles/Detail').icon,
      dateStyle = require('../styles/Detail').date,
      center = require('../styles/index').center,
      header = require('../styles/Detail').header;

function ForecastDetails({ details }) {
  const { icon, date, city, description, max, min, humidity } = details;
  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={icon} style={merge({}, iconStyle, {marginTop:'20px'})}></i>
        <h2 style={dateStyle}>{date}</h2>
        <h1 style={header}>{city}</h1>
        <h1 style={header}>{description}</h1>
        <h1 style={header}>max temp: {max} degrees</h1>
        <h1 style={header}>min temp: {min} degrees</h1>
        <h1 style={header}>humidity: {humidity} degrees</h1>
      </div>
    </div>
  )
}

export default ForecastDetails;
