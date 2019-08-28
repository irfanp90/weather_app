import React from "react";
import Titles from "../components/title";
import Form from "../components/form";
import Weather from "../components/weather";

const Api_Key = "aff037fa8290bec3cb782b39075bc667";

 class Main extends React.Component {
   state = {
     temperature: undefined,
     temperatureMax: undefined,
     temperatureMin: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
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
      temperatureMax: response.main.temp_max,
      temperatureMin: response.main.temp_min, 
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error:""
    });
  }else{
    this.setState({
      temperature: undefined,
      temperatureMax: undefined,
      temperatureMin: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:"PLEASE ENTER A CITY..."
    });
  }
  
}

    

   render() {
    return (
     <div>
       <br></br>
       <br></br>
      <Titles />
      <br></br>
      <Form getWeather={this.getWeather}/> {/*setting up a prop*/}
      <br></br>
      <Weather 
        temperature={this.state.temperature}
        temperatureMax={this.state.temperatureMax}
        temperatureMin={this.state.temperatureMin}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
      />
     </div>
    ) 
  }
}
export default Main;