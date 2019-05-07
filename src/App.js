import React, { Component } from 'react';
import './App.css';
import CityWeather from './CityWeather'
import Navbar from './Navbar'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Navbar />
        <CityWeather id="5128638" />
        <CityWeather id="2643743" />
        <CityWeather id="2950159" />
      </div>
    );
  }
}

export default App;
