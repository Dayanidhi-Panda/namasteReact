import React from "react";
import  ReactDOM  from "react-dom/client";
//import  {ReactDOM}  from "react-dom/client"; // don't use beacause react-dom is exported defaultly


const restObj = [
 {   
    id:"1",
name:"KFC",
rating: "4.6",
 },   
 {   
    id:"2",
name:"Beriyani by kilo",
rating: "3.6",
 },
 {   
    id:"3",
    name:"Hydrabadi biriyani",
    rating: "2.6",
     }
]

const Header = () =>{
    return (
        <div className="header">
            <div className="image-logo">
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

const SearchBar = () =>{
    return(
        <div className="sear-bar">
        <input type="text" name="search" aria-label="search resturant" />
        </div>
    )
}

// using normal props
// const Restrocard = (props) =>{
//     return(
//         <div className="restro-card" style={{backgroundColor: "gray"}}>
//             <img alt="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" />
//             <h2>{props.resName}</h2>
//             <h4>rating: {props.rating}</h4>
//         </div>
       
//     )
// }

// using destructering 1st method
// const Restrocard = ({resName, rating}) =>{
//     return(
//         <div className="restro-card" style={{backgroundColor: "gray"}}>
//             <img alt="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" />
//             <h2>{resName}</h2>
//             <h4>rating: {rating}</h4>
//         </div>
       
//     )
// }

// using destructering 2nd method
const Restrocard = (props) =>{
    const {restData} = props;
    const {name,rating} = restData
    return(
        <div className="restro-card" style={{backgroundColor: "gray"}}>
            <img alt="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" />
            <h2>{name}</h2>
            <h4>rating: {rating}</h4>
        </div>
       
    )
}

// const Body = (props) =>{
//     return(
//         <div className="restro-container" >
//             <Restrocard restData={restObj[0]}/>
//             <Restrocard restData={restObj[1]}/>
//             <Restrocard restData={restObj[2]}/>
//         </div>
       
//     )
// }

//using loop

// const Body = (props) =>{
//     return(
//         <div className="restro-container" >
//             {
//                restObj.map(restcard=><Restrocard key={restcard.id} restData={restcard}/>)
//             }
//         </div>
       
//     )
// }

// using index as a key
const Body = (props) =>{
    return(
        <div className="restro-container" >
            {
               restObj.map((restcard,index)=><Restrocard key={index} restData={restcard}/>)
            }
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