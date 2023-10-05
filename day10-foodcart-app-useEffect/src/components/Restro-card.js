const Restrocard = (props) =>{
    const {restData} = props;
    const {title} = restData
    return(
        <div className="restro-card" style={{backgroundColor: "gray"}}>
            <img alt="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" />
            <h2>{title}</h2>
        </div>
       
    )
}
export default Restrocard;