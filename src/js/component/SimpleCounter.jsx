import React from "react";
import PropTypes from "prop-types"; 
import { counter } from "@fortawesome/fontawesome-svg-core";


export function SimpleCounter(props) {
    // Pad the counter string with leading zeros to ensure it has 6 digits
    const paddedCounter = props.counter.padStart(6, "0");
  
    // Split the padded counter string into individual digits
    const digits = paddedCounter.split("").map((digit, index) => (
      <div key={index} className={`digit${index + 1}`}>
        {digit}
      </div>
    ));
  
    return (
      <div className="bigBox">
        <div className="clock">
          <i className="fa-regular fa-clock"></i>
        </div>
        {digits}
      </div>
    );
  }
  
  SimpleCounter.propTypes = {
    counter: PropTypes.string.isRequired
  };