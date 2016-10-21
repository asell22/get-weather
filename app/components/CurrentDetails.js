import React from 'react';
import { merge } from 'lodash';

import { iconStyle, dateStyle, headerStyle } from '../styles/Detail'
import { center } from '../styles/index';

function CurrentDetails({details}) {
  const { icon, date, city, description, temp, humidity } = details;
  return (
    <div style={{paddingTop: '100px'}} className="container">
      <div style={merge({}, center, {textAlign: 'center'})}>
        <i className={icon} style={iconStyle}></i>
        <h2 style={dateStyle}>{date}</h2>
        <h1 style={headerStyle}>{city}</h1>
        <h1 style={headerStyle}>{description}</h1>
        <h1 style={headerStyle}>temp: {temp} degrees</h1>
        <h1 style={headerStyle}>humidity: {humidity}%</h1>
      </div>
    </div>
  )
}

export default CurrentDetails;
