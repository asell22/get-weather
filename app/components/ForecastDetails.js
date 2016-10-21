import React from 'react';
import { merge } from 'lodash';
import { iconStyle, dateStyle, headerStyle } from '../styles/Detail';
import { center } from '../styles/index';

function ForecastDetails({ details }) {
  const { icon, date, city, description, max, min, humidity } = details;
  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={icon} style={merge({}, iconStyle, {marginTop:'20px'})}></i>
        <h2 style={dateStyle}>{date}</h2>
        <h1 style={headerStyle}>{city}</h1>
        <h1 style={headerStyle}>{description}</h1>
        <h1 style={headerStyle}>max temp: {max} degrees</h1>
        <h1 style={headerStyle}>min temp: {min} degrees</h1>
        <h1 style={headerStyle}>humidity: {humidity} degrees</h1>
      </div>
    </div>
  )
}

export default ForecastDetails;
