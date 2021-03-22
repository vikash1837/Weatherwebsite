import React,{Component} from 'react';
import "./App.css";
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

const API_KEY="858f140441918598133e4120a444bca3";

class App extends Component{
  state={
    temp:"",
    city:"",
    country:"", 
    humidity:"",
    windspeed:"",
    desc:"",
    date:"",
    time:"",
    error:"",    
  }
  getWeather=async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(!city && !country){
      this.setState({
        temp:"",
        city:"",
        country:"",
        humidity:"",
        windspeed:"",
        desc:"",
        date:"",
        time:"",
        error:"Please Enter Valid Credentails ....",
      })
    }else{
      this.setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        windspeed:data.wind.speed,
        desc:data.weather[0].description,
        date:new Date().toDateString(),
        time:new Date().toLocaleTimeString(),
        error:"",
      })
    }
    
  }
  render(){
    return(
      <div>
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      windspeed={this.state.windspeed}
      desc={this.state.desc}
      date={this.state.date}
      time={this.state.time}
      error={this.state.error}

      />
      </div>
    )
  }
}
export default App;