import React, { Component } from 'react';
import { connect } from 'react-redux';
// Weather needs to know about redux, the reason is that
// the weather state is going to be updated by a searchbar,
// and the search bar is a peer, not a parent

class Weather extends Component{
    render(){
        console.log(this.props.weatherData)
        return(
            <h1>Weather Component!</h1>
        )
    }
}

function mapStateToProps(state){
    // always returns an object
    return{
        weatherData: state
    }

}

// connect takes a max or 2 args:
// 1. the map/state function
// 2. the map/dispatch action function

export default connect(mapStateToProps)(Weather);

// Inside of Redux somewhere there is a function called connect with two callbacks, 
// the first gets sent to the store, second goes to dispatch