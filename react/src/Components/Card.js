 import "./Card.css";
 
function Card ({ Name, Work}) {
    return (
        <div className="card"> 
        <img 
         src="Tommy.png"
        width="200px"
        />
            <h1>{Name}</h1>
            <p>{Work}</p>
        </div>
    );
    }
    export default Card;
   
  