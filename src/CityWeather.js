import React, {Component} from "react";

class CityWeather extends Component {
    constructor(){
        super();
        this.state = {
          weather:[],
          icon: "",
          city: ""
        }
      }
    
      componentDidMount(){
        console.log(this.props.id);
        fetch("http://api.openweathermap.org/data/2.5/weather?id=" + this.props.id + "&appid=f04826057701fdaf14bbacf1ee8c24cb")
          .then(response => response.json())
          .then(response => {
              const weather = response.weather[0].main;
              const icon = response.weather[0].icon;
              const city = response.name;
              this.setState({
                weather: weather,
                icon: "http://openweathermap.org/img/w/" + icon + ".png",
                city: city
              })
          })
      }

    render(){
        return(
            <div>
                <h1>{this.state.city}</h1>
                <h2>{this.state.weather}</h2>
                <img className="icon" src={this.state.icon} alt={this.state.weather}/>
            </div> 
        )
    }
}

export default CityWeather;