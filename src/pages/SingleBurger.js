import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// Destructure the props needed to get our burger, including router prop match

const SingleBurger = ( { burgers, match, edit, deleteBurger }) => {
    const id = parseInt(match.params.id);
    const burger = burgers.find((burger) => burger.id === id);

    // Styles
    const div = {
        textAlign: "center",
        border: "3px solid green",
        margin: "30px auto",
        width: "80%",
    };        

    return (
    <div style={div}>
        <h1>Burger: {burger.burger_name}</h1>
        <h2>Patty: {burger.meat}</h2>
        <h2>Cheese: {burger.cheese}</h2>
        <h2>Veggie: {burger.veggie}</h2>
        <h2>Eater ID: {burger.user_id}</h2>

        <Button onClick={(event) => edit(burger)}>Edit</Button>
        <Button onClick={(event) => deleteBurger(burger)}>Delete</Button>
        <Link to="/"><Button>Back to Burger List</Button></Link>



    </div>
        )
};

export default SingleBurger;