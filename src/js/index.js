//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SimpleCounter } from "./component/SimpleCounter.jsx";

let counter = 0;
setInterval(() => {
  const paddedCounter = counter.toString().padStart(6, "0");
  ReactDOM.render(<SimpleCounter counter={paddedCounter} />, document.querySelector("#app"));
  counter++;
}, 1000);


