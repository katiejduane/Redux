import React, { Component } from 'react';
import { connect } from 'react-redux';
// Weather needs to know about redux, the reason is that
// the weather state is going to be updated by a searchbar,
// and the search bar is a peer, not a parent

class Weather extends Component{
    render(){
        console.log(this.props.weatherData)
        let city = '';
        let desc = '';
        let temp = '';
        let humidity = '';
        let windSpeed = '';

        if(this.props.weatherData !== null){
            console.log('hooray!')
            city = this.props.weatherData.name;
            desc = this.props.weatherData.weather[0].main;
            temp = this.props.weatherData.main.temp;
            humidity = this.props.weatherData.main.humidity;
            windSpeed = this.props.weatherData.wind.speed;
        }
        return(
            <div className="weather-shiz">
                <h1>Weather</h1>
                <ul>
                    <li>City: {city} </li>
                    <li>Looks like: {desc} </li>
                    <li>Temperature: {temp} </li>
                    <li>Humidty: {humidity}% </li>
                    <li>Windspeed: {windSpeed} mph</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    // always returns an object
    return{
        weatherData: state.weather
    }

}

// connect takes a max or 2 args:
// 1. the map/state function
// 2. the map/dispatch action function

export default connect(mapStateToProps)(Weather);

// Inside of Redux somewhere there is a function called connect with two callbacks, 
// the first gets sent to the store, second goes to dispatch
