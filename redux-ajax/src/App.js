import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import Weather from './containers/Weather';
import Stocks from './containers/Stocks';
import Rhymes from './containers/Rhymes';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SearchBar />
        <div className="col-sm-4">
          <Weather />
        </div>
        <div className="col-sm-4">
          <Stocks />
        </div>
        <div className="col-sm-4">
          <Rhymes />
        </div>
      </div>
    );
  }
}

export default App;
