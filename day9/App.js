import React from "react";
import  ReactDOM  from "react-dom/client";
//import  {ReactDOM}  from "react-dom/client"; // don't use beacause react-dom is exported defaultly


//React element
const jsxheading= <h1 id="heading">Wlcome jsx</h1>

// React component

const HeadingComponent = () =>{
    return <h1 className="comp1">Namste React</h1>
}

const Heading = () =>  <h1 className="comp2">hello Heading without return<HeadingComponent /></h1>

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);