import React from "react";
import Burger from "../components/burger";
import Card from "../components/Card";

  // Styling 
  const h1 = {
    textAlign: "center",
    margin: "10px",
  }

const AllBurgers = (props) => {
    // For each burger in the array, render Burger component

    return (
        <>
        <h1 style={h1}>My Burger List</h1>
    <div className="d-flex justify-content-evenly flex-wrap">
   { props.burgers.map((burger) => {
   return <Card burger={burger} key={burger.id} /> })};
    </div> 
    </>
    )
};

export default AllBurgers;