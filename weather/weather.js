const axios = require('axios');

const getWeather = async(query, lat, lon) => {
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ query }&lat=${ lat }&lon=${ lon }&units=metrics`,
        headers: { 'X-Rapidapi-Key': '7c540ced07mshbb9abb4ab7f4943p1348ebjsn506359307f69' }
    });

    const resp = await instance.get();
    return resp.data.main.temp;
};

module.exports = {
    getWeather
}