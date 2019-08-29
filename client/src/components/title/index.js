import React from 'react';
import clouds from "../../images/weather.jpg";
const headerStyle = {
  backgroundImage: `url(${clouds})`,
  maxWidth: "100vw",
  height: "calc(25vw)",
  backgroundSize: "cover",
  position: "relative",
  fontFamily: "'Palanquin Dark', sans-serif",
  fontWeight: "bold",
  fontSize: "60px",
  padding: "100px 75px 100px 190px",
  color: "mediumspringgreen",
  textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
  borderStyle: "solid",
  

}
const Titles = () => (
    <div style={headerStyle}>
      <p>Weather Application!! </p>
      <h1>Get the weather you need... </h1>
    </div>
  )

export default Titles;