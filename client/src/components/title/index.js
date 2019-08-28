import React from 'react';
import clouds from "../../images/clouds.jpg";
const headerStyle = {
  backgroundImage: `url(${clouds})`,
  maxWidth: "100vw",
  height: "calc(20vw)",
  backgroundSize: "cover",
  

}
const Titles = () => (
    <div style={headerStyle}>
      <h1>Weather Application!! </h1>
      <p>Get the weather you need... </p>
    </div>
  )

export default Titles;