const axios = require('axios');
const API_Key = require('../../key');

function getCurrentWeather(location) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&units=imperial&APPID='+API_Key);
};

function getFiveDayForecast(location) {
  return axios.get('   http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&type=accurate&cnt=5&units=imperial&APPID='+API_Key);
}

var helpers = {
  getWeatherData(location) {
    return axios.all([getCurrentWeather(location), getFiveDayForecast(location)])
  }
};

export default helpers;
