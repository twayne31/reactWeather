var axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=84898e5a7d1d2c65b337e2021577a8ae&units=imperial`;

//

module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
       
        return axios.get(requestURL).then(function (res){
        //properly catch all errors

        //debugger;

        if (res.data.cod && res.data.message ){
            throw new Error(res.data.message)
        }else {
        return res.data.main.temp;
        }
        }, function (res){
        throw new Error(res.data.message)
        });
    }
}