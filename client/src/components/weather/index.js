
import React from 'react';
const Weather = (props) => {
  return(
      <div>
        
        {props.city && props.country && <p> City,Country: {props.city}, {props.country}</p>}
       
       {props.temperature && <p>Temperature: {props.temperature}</p>}
       
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        
        </div>
   )
}
export default Weather;