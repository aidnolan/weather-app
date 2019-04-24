import React, {Component} from "react";

class CityWeather extends Component {
    constructor(){
        super();
        this.state = {
          weather:[],
          icon: "",
          city: "",
          tempMin: "",
          tempMax: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?id=" + this.props.id + "&appid=f04826057701fdaf14bbacf1ee8c24cb")
          .then(response => response.json())
          .then(response => {
              const weather = response.weather[0].main;
              const icon = response.weather[0].icon;
              const city = response.name;
              const tempMin = Math.round(response.main.temp_min - 273.15);
              const tempMax = Math.round(response.main.temp_max - 273.15);
              this.setState({
                weather: weather,
                icon: "https://openweathermap.org/img/w/" + icon + ".png",
                city: city,
                tempMin: tempMin,
                tempMax: tempMax
              })
          })
    }

    handleClick(){
        console.log("worked");
    }

    render(){
        return(
            <div className="container">
                <h1>{this.state.city}</h1>
                <h2>{this.state.weather}</h2>
                <img className="icon" src={this.state.icon} alt={this.state.weather}/>
                <h3>Min: {this.state.tempMin}°C</h3><h3>Max: {this.state.tempMax}°C</h3>
                <br />
                <button onClick={this.handleClick}>Next City</button>
            </div> 
        )
    }
}

export default CityWeather;