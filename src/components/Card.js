import React from "react";
import { Link } from "react-router-dom";



function Card (props) {
    let burger = props.burger
    return (
        
        <div className="card">
            <Link className="btn btn-primary btn-dark m-5" to={`/burger/${burger.id}`}>
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
                <h5 className="card-title">{burger.burger_name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
            </div>

     
      
            
          </Link>

        </div>
        
    );
}

    export default Card;    
    