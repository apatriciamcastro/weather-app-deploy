const request = require ('request')

// Goal: Add new data to forecast
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to GitLab and deploy to Heroku
// 4. Test your work in the live app


const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9a0bf19a7ea34b1fa05df9e14ff1709e/'+ latitude + ',' + longitude +'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services.')
        } else if(body.error) {
            callback('Unable to find location. Try again.')
        } else {
            callback(undefined,
                body.daily.data[0].summary +
                'It is currently ' + body.currently.temperature +
                'ºC outside. There is a ' +
                body.currently.precipProbability +
                '% chance of rain.' + 'The highest temperature will be ' + 
                body.daily.data[0].temperatureHigh + 'ºC.' +
                'And the lowest will be ' + body.daily.data [0].temperatureLow + 'ºC.'           
            )
        }
    })
}
module.exports = forecast
