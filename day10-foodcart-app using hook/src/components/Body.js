import Restrocard from "./Restro-card";
import restObj from "../utils/mock"

const Body = () =>{
    return(
        
        <div className="restro-container" >
            {
               restObj.map((restcard)=><Restrocard key={restcard.name} restData={restcard}/>)
            }
        </div>
       
    )
}
export default Body;