import React from "react";
import { ReactDOM } from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"}, "hello react");
//console.log(heading); // this will return a object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);