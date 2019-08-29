import React from 'react';
const formStyle = {
  
  boxSizing: "border-box",
  border: "none",
  borderBottom: "4px solid mediumspringgreen",
  backgroundColor: "darkslategray",
  color:"mediumspringgreen",
  fontSize: "20px",

}
const buttonStyle ={
  boxShadow: "3px 3px 0.5px 0.25px black",
}

const Form = props => (
    <div>
    <form onSubmit={props.getWeather}>
        <input style={formStyle} type="text" name="city" placeholder="City..." /> 
        {/* <input type="text" name="country" placeholder="Country..." /> */}
        <button  style ={buttonStyle}className= "btn-success"><i className="fas fa-search"/></button>
      </form>
      </div>
  )

export default Form;