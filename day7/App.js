import React from "react";
import  ReactDOM  from "react-dom/client";
//import  {ReactDOM}  from "react-dom/client"; // don't use beacause react-dom is exported defaultly

// jsx > babel trnspiles it to create the reactelement > react js object > html element
const jsxheading= <h1 id="heading">Wlcome jsx</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);