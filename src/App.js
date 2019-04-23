import React, { Component } from 'react';
import './App.css';
import CityWeather from './CityWeather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CityWeather id="5128638" />
        <CityWeather id="2643743" />
        <CityWeather id="6618607" />
      </div>
    );
  }
}

export default App;
