import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weather:[]
    }
  }

  componentDidMount(){
    fetch("http://api.openweathermap.org/data/2.5/weather?id=7872756&appid=f04826057701fdaf14bbacf1ee8c24cb")
      .then(response => response.json())
      .then(response => {
          const weather = response.weather[0].main;
          console.log(weather[0].main)
          this.setState({
            weather: weather
          })
      })
  }

// componentDidMount() {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(response => response.json())
//             .then(response => {
//                 const {memes} = response.data
//                 this.setState({ allMemeImgs: memes })
//             })
//     }

  render() {
    return (
      <div className="App">
        <h1>{this.state.weather}</h1>
      </div>
    );
  }
}

export default App;
