import React from 'react';
import './Result.css';

const Result = props => {
  const {error, city, sunrise, sunset, temp, pressure, wind, date} = props.weather

  let content = null;

  if(!error && city){

    const sunriseTime = new Date(sunrise*1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset*1000).toLocaleTimeString();

    content = (
      <div>
        <h3>Wyszukiwanie dla miasta: {city}</h3>
        <h4>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp.toFixed(0)}°C</h4>
        <h4>Wschód słońca: {sunriseTime}</h4>
        <h4>Zachód słońca: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <h4>Aktualne ciśnienie: {pressure} hPa</h4>
      </div>
    )
  }
  return ( 
    <div className="weather--result">
      {error ? `Nie mam w bazie ${city}`: content}
    </div>
  );
}
 
export default Result;