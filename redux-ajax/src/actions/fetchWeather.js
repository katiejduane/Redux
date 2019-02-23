import axios from 'axios';

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKEY}&zip=`;

// remember, action creator functions MUST return an object with a property of TYPE (may also include payload)
function fetchWeather(zipCode){
    console.log(zipCode);
    const data = axios.get(weatherUrl+zipCode);
    
    return{
        type: 'GET_WEATHER',
        payload: data
    }
}

export default fetchWeather;