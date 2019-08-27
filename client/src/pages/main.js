import React from "react";
import Titles from "../components/title";
import Form from "../components/form";
import Weather from "../components/weather";
  class Main extends React.Component {
   render() {
    return (
     <div>
      <Titles />
      
      <Form />

      <Weather />
     </div>
    ) 
  }
}
export default Main;