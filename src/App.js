import React, { Component } from 'react';
import './App.css';
import CityWeather from './CityWeather'

class App extends Component {
  render() {
    const today = new Date().toLocaleDateString("en-GB");
    return (
      <div className="App">
        <h1>Weather on {today}</h1>
        <CityWeather id="5128638" />
        <CityWeather id="2643743" />
        <CityWeather id="3614789" />
      </div>
    );
  }
}

export default App;
