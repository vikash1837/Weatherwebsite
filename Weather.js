import React from 'react';
import './Weather.css';
const Weather=props=>{

    return(
        <div className="Weather-div">
        {props.date && <h3>Date : {props.date}</h3>}
        {props.time && <h3>Time : {props.time} (IST)</h3>} 
        {props.city &&props.country &&<h3>Location : {props.city},{props.country}</h3>}
        {props.temp && <h3>Temp : {props.temp} &deg;C</h3>}
        {props.humidity && <h3>Humidity : {props.humidity}&deg;</h3>}
        {props.windspeed &&<h3>Windspeed : {props.windspeed}mph</h3>}
        {props.desc && <h3>Weather Info : {props.desc}</h3>}
        {props.error && <h3 className="error">{props.error}</h3>}
        </div>
    
    )
};

export default Weather;