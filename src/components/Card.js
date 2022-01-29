import React from "react";
import { Link } from "react-router-dom";



function Card (props) {
    let burger = props.burger
    return (
        
        <div className="card">
            <Link className="btn btn-dark m-5" to={`/burger/${burger.id}`}>
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
                <h1 className="card-title">{burger.burger_name}</h1>
                <h3 className="card-title">Patty: {burger.meat}</h3>
                      
            </div>

     
      
            
          </Link>

        </div>
        
    );
}

    export default Card;    
    