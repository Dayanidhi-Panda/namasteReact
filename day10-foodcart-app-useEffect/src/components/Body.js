import Restrocard from "./Restro-card";
import restObj from "../utils/mock"
import { useEffect, useState } from "react"


const Body = () =>{

    const [state, setState] = useState(restObj)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
        const data = response.json();
        console.log(data)
        setState(data)
    }

    return(
        
        <div className="restro-container" >
            <div className="Filt-btn" onClick={()=>{
                const filterlist=state.filter((data)=>data.rating > 4)
                setState(filterlist);
            }}>Filter by resturant</div>
            {
               state.map((restcard)=><Restrocard key={restcard.id} restData={restcard}/>)
            }
        </div>
       
    )
}
export default Body;