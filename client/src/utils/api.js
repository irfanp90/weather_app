import axios from "axios";
const Api_Key = aff037fa8290bec3cb782b39075bc667;

export default {
  // Gets weather
  
  getWeather: async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
  
    const response = await api_call.json();
    
    console.log(response);
  },

};