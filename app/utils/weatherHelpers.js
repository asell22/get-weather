const axios = require('axios');
const API_Key = require('../../key');

const getCurrentWeather = (location) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&units=imperial&APPID=${API_Key}`)
};

const getFiveDayForecast = (location) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&cnt=5&units=imperial&APPID=${API_Key}`)
}

const helpers = {
  getWeatherData(location) {
    return axios.all([getCurrentWeather(location), getFiveDayForecast(location)])
  }
};

export default helpers;
