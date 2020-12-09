const axios = require('axios');

const getLatLon = async(location) => {

    const encoURL = encodeURI(location);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encoURL }`,
        headers: { 'X-Rapidapi-Key': '7c540ced07mshbb9abb4ab7f4943p1348ebjsn506359307f69' }
    });

    const resp = await instance.get();

    if (resp.data == null || resp.data.length == 0) {
        throw new Error(`No hay resultados para ${location}`)
    }

    const name = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        name,
        lat,
        lon
    }
}

module.exports = {
    getLatLon
}