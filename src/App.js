// Import All Our Components
import AllBurgers from "./pages/AllBurgers";
import SingleBurger from "./pages/SingleBurger";
import Form from "./pages/Form";

// Burger from https://www.youtube.com/watch?v=GGkBwpxV7AI
// Burger Menu imports
import Navbar from "./components/Nav/Navbar";
import Button from 'react-bootstrap/Button';
import buttonbox from "./components/button-box";
import BootNav from "./components/BootNav/BootNav";

// Import React and hooks
import React , { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";


function App(props) {




  // const button = {
  //   backgroundColor: "navy",
  //   display: "block",
  //   margin: "auto",
  // };

  //  State & Other Variables

  // API URL
  const url = "https://burger-be.herokuapp.com/burgers/";
  
  //  State to hold the list of burgers
  const [burgers, setBurgers] = useState([]);

  // Object that represents a new burger
  const nullBurger = {
    burger_name: "",
    meat: "",
    cheese: "",
    veggie: "",
    user_id: "",
  };

  // Const state to hold burger to edit
  const [targetBurger, setTargetBurger] = useState(nullBurger);

  // Functions

  // Function to get list of burgers from API
const getBurgers = async ()  => {
  const response = await fetch(url);
  const data = await response.json();
  setBurgers(data);
};

// Function to add a burger from form data
const addBurgers = async (newBurger)  => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBurger),
  });
// Get updated list of burgers after form
getBurgers();
};

// Function to select burger to edit
const getTargetBurger = (burger) => {
  setTargetBurger(burger);
  props.history.push("/edit");
};

// Function to edit burger on form submission
const updateBurger = async (burger)  => {
  const response = await fetch(url + burger.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(burger),
  });
// Get updated list of burgers after form
getBurgers();
};

// Function to delete burger on form submission
const deleteBurger = async (burger)  => {
  const response = await fetch(url + burger.id + "/", {
    method: "delete",
  });
// Get updated list of burgers after form
getBurgers();
props.history.push("/");
};



  // useEffects
useEffect(() => {
  getBurgers();
}, []);

  // returned JSX
  return (
    <>
    <BootNav />
    <div>
      

      <div style={buttonbox}>
      
      </div>
  
      <Switch>
        <Route

          exact 
          path="/"
          render={(routerProps) => <AllBurgers {...routerProps} burgers={burgers} />}
        />
        <Route
          path="/burger/:id"
          render={(routerProps) => (
            <SingleBurger
              {...routerProps}
              burgers={burgers}
              edit={getTargetBurger}
              deleteBurger={deleteBurger}
            />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form 
            {...routerProps}
            initialBurger={nullBurger}
            handleSubmit={addBurgers}
            buttonLabel="Make a burger!"
      

            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form 
            {...routerProps}
            initialBurger={targetBurger}
            handleSubmit={updateBurger}
            buttonLabel="Update a burger!"
           
            />
          )}
        />
         
      </Switch>
    </div>
    </>
  );
}

export default App;
