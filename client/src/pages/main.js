import React from "react";
import Titles from "../components/title";
import Form from "../components/form";
import Weather from "../components/weather";

const Api_Key = "aff037fa8290bec3cb782b39075bc667";

 class Main extends React.Component {
    
getWeather = async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;
  const country = event.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  
  const response = await api_call.json();
  
  console.log(response);
  
}

   render() {
    return (
     <div>
      <Titles />
      
      <Form getWeather={this.getWeather}/> {/*setting up a prop*/}

      <Weather />
     </div>
    ) 
  }
}
export default Main;