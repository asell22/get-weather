var axios = require('axios');
var API_Key = require('../../key');

var helpers = {
  getCurrentWeather: function (location) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&units=imperial&APPID='+API_Key).then(function(data) {
      console.log('DATA:', data);
    })
  },
  getFiveDayForecast: function(location) {
    return axios.get('   http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&type=accurate&cnt=5&units=imperial&APPID='+API_Key).then(function(data) {
      console.log('FIVE DAY FORECAST:', data);
    })
  }
};

module.exports = helpers;
