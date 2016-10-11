var React = require('react');
var PropTypes = require('react').PropTypes;

function Forecast(props) {
  console.log('Props:', props);

  return (
    props.isLoading ?
    <div style={{paddingTop: '100px'}}>Loading...</div> :
    <div style={{paddingTop: '100px'}}>
      <h1>{props.city}</h1>
      <ul>
        {props.list.map(function(obj,indx) {
          return <li key={obj.listId}>{obj.date} - WEATHER ICON: {obj.weather[0].id} <i className={"wi wi-owm-" + obj.weather[0].id} style={{fontSize: '100px'}}></i></li>
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
