
import React from 'react';
const Weather = props => (
      <div className="data">
        
      {props.city && props.country && <p>  City,Country: <span className="info"> {props.city}, {props.country}</span><hr></hr></p>}
      {props.temperature && <p> Current Temperature: <span className="info"> {props.temperature}° F </span><hr></hr></p>}
      {props.temperatureMax && <p> High Temperature: <span className="info"> {props.temperatureMax}° F</span><hr></hr></p>}
      {props.temperatureMin && <p>Low Temperature: <span className="info"> {props.temperatureMin}° F</span><hr></hr></p>}
      {props.humidity && <p>Humidity: <span className="info">{props.humidity} %</span><hr></hr></p>}
      {props.description && <p>Detail: <span className="info"> {props.description}</span></p>}
      {props.error && <p>{props.error}</p>}
        </div>
        
   )

export default Weather;