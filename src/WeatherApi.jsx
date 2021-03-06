import React from "react";
import "./Weather.css";

function Weather(props) {
  return (
    <div className="weather-card">
      <div className="day">
        {props.weather.day}
      </div>
      <div className="icon">
        <img src={props.weather.icon} alt="icono clima" className="clima-icono" />
      </div>
      <div>
        <span className="max">{props.weather.max}°</span>
        <span className="min">{props.weather.min}°</span>
      </div>
    </div>
  );
}
export default Weather;
