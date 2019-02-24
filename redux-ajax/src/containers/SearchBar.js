import React, { Component } from 'react';

// SearchBar needs to know about redux, it doesn't care about the data/
// does not need state, but it does need the dispatcher, because when
// the user searches, it needs to fire a functions that the dispatcher
// will send to update the weather reducer.

import { connect } from 'react-redux';
// ^^ because we need the dispatcher!, we need bindActionCreators
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/fetchWeather';
import fetchRhymes from '../actions/fetchRhymes';

class SearchBar extends Component{

    handleWeather=(e)=>{
        e.preventDefault();
        const zipCode = document.getElementById('weather-input').value;
        this.props.fetchWeather(zipCode);
    }

    handleRhymes=(e)=>{
        e.preventDefault();
        const word = document.getElementById('word-input').value;
        this.props.fetchRhymes(word);
    }

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="horses.com">Trick-or-Treat?</a>
                    </div>
                    <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input id="weather-input" type="text" className="form-control" placeholder="Search for weather" />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                    <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input id="stock-input" type="text" className="form-control" placeholder="Search for stock" />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                    <form onSubmit={this.handleRhymes} className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input id="word-input" type="text" className="form-control" placeholder="Search for rhymes" />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        fetchWeather: fetchWeather,
        fetchRhymes: fetchRhymes
    }, dispatcher)
}
// we want to call the fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);

