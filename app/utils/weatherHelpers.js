var axios = require('axios');
var API_Key = require('../../key');

var helpers = {
  getCurrentWeather: function (location) {
    // fetch data from OpenWeather Api
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&type=accurate&units=imperial&APPID='+API_Key).then(function(data) {
      console.log('DATA:', data);
    })
  }
};

module.exports = helpers;
