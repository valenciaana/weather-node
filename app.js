const axios = require('axios');

const place = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Location for search weather',
        demand: true
    }
}).argv;

/*
place.getLatLon(argv.location).then(
    resp => { console.log(resp); }
);
*/
//weather.getWeather('London', '51.51', '-0.13').then(resp => { console.log(resp); });
const getInfo = async(location) => {

    try {
        const coords = await place.getLatLon(argv.location);
        const temp = await weather.getWeather(coords.name, coords.lat, coords.lon);
        return `El clima de ${ argv.location } es de ${temp}ºF`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ argv.location }, traza del error: ${e}`;
    }


}

getInfo(argv.location)
    .then(
        resp => { console.log(resp); }
    )
    .catch(
        error => { console.log(error); }
    );