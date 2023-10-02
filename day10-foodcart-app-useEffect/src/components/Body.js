import Restrocard from "./Restro-card";
import restObj from "../utils/mock"
import { useState } from "react"


const Body = () =>{

    const [state, setState] = useState(restObj)

    return(
        
        <div className="restro-container" >
            <div className="Filt-btn" onClick={()=>{
                const filterlist=state.filter((data)=>data.rating > 4)
                setState(filterlist);
            }}>Filter by resturant</div>
            {
               state.map((restcard)=><Restrocard key={restcard.name} restData={restcard}/>)
            }
        </div>
       
    )
}
export default Body;