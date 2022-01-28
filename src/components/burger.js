import React from "react";
import { Link } from "react-router-dom";

// Destructure the burger from props

const Burger = ({ burger }) => {
    // Style
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };

    return (
    <div style={div}>
        <Link to={`/burger/${burger.id}`}>
            <h1>Burger: {burger.burger_name}</h1>
            <h1>Patty: {burger.meat}</h1>
        </Link>
    </div>
        );
};

export default Burger;