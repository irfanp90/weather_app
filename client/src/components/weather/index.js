
import React from 'react';
const Weather = props => (
      <div>
         {props.city && props.country && <p> City,Country: {props.city}, {props.country}</p>}
        {props.temperature && <p>Current Temperature: {props.temperature} F</p>}
        {props.temperatureMax && <p>High Temperature: {props.temperatureMax} F</p>}
        {props.temperatureMin && <p>Low Temperature: {props.temperatureMin} F</p>}
        {props.humidity && <p>Humidity: {props.humidity} %</p>}
        {props.description && <p>Detail: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
        </div>
   )

export default Weather;