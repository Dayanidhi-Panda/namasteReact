import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header-card";
import Body from "./components/Body";


const SearchBar = () =>{
    return(
        <div className="sear-bar">
        <input type="text" name="search" aria-label="search resturant" />
        </div>
    )
}


const AppLayout = () =>{
    return (
        <div className="applayout">
            <Header />
            <SearchBar />
            <Body />
            
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);