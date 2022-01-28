import React from "react";
import Burger from "../components/burger";

const AllBurgers = (props) => {
    // For each burger in the array, render Burger component

    return props.burgers.map((burger) => <Burger burger={burger} key={burger.id} />);
    
};

export default AllBurgers;