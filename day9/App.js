import React from "react";
import  ReactDOM  from "react-dom/client";
//import  {ReactDOM}  from "react-dom/client"; // don't use beacause react-dom is exported defaultly

const title = <h1>Hi i am react element</h1>

const Component = () =>{
    return (
        <h1>I am another component</h1>
    )
}
// valid perfect react component
const Heading = () =>{
    return (
        <div>
            {title}
            {Component()}
            <Component />
            <Component></Component> 
        <h1>Namste React day9</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);