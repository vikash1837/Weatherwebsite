import React from 'react';
import "./Form.css";

const Form =props=>{
    return(
        <form className="form" onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City...."/>
            <input type="text" name="country" placeholder="Country...."/>
            <button>Get Weather</button>
        </form>
    )
};
export default Form;