import React from "react";
import Titles from "../components/title";
import Form from "../components/form";
import Weather from "../components/weather";

const Api_Key = "aff037fa8290bec3cb782b39075bc667";

 class Main extends React.Component {
   state = {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     error: undefined
   }
    
getWeather = async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;
  // const country = event.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=imperial`);
  
  const response = await api_call.json();
  if (city){
  console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      error:""
    });
  }else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      error:"PLEASE ENTER A CITY..."
    });
  }
  
}

    

   render() {
    return (
     <div>
      <Titles />
      
      <Form getWeather={this.getWeather}/> {/*setting up a prop*/}

      <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        error={this.state.error}
      />
     </div>
    ) 
  }
}
export default Main;