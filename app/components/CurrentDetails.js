import React from 'react';
import { merge } from 'lodash';

var iconStyle = require('../styles/Detail').icon;
var dateStyle = require('../styles/Detail').date;
var center = require('../styles/index').center;
var header = require('../styles/Detail').header;

function CurrentDetails({details}) {
  const { icon, date, city, description, temp, humidity } = details;
  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={icon} style={iconStyle}></i>
        <h2 style={dateStyle}>{date}</h2>
        <h1 style={header}>{city}</h1>
        <h1 style={header}>{description}</h1>
        <h1 style={header}>temp: {temp} degrees</h1>
        <h1 style={header}>humidity: {humidity}%</h1>
      </div>
    </div>
  )
}

export default CurrentDetails;
