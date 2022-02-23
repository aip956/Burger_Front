// Import useState hook
import React, { useState } from "react";
import Card from "../components/Card";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

// Destructure out props, including router prop history
const Form = ( { initialBurger, handleSubmit, buttonLabel, history} ) => {
    // The Form Data State

    // Initialize the form with the initialBurger state
    const [formData, setFormData] = useState(initialBurger);

    // Functions

    // Standard React Form HandleChange Function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Function to run when form is submitted
    const handleSubmission = (event) => {
        // prevent form refresh
        event.preventDefault();
        // pass formData to handleSubmit prop function
        handleSubmit(formData);
        // push user back to main page
        history.push("/");
    };
// Our Form, an input for the burger fields and submit button
    return (
        <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmission}>
            <label for="burger_name">Burger Name</label>
                <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Burger Name"
                defaultValue={formData.burger_name}
                name="burger_name"
                />
            <label for="meat">Meat/Patty</label>
                <input
                type="text"
                onChange={handleChange}
                placeholder="Patty Type"
                defaultValue={formData.meat}
                name="meat"
                />
            <label for="cheese">Cheese</label>
                <input
                type="text"
                onChange={handleChange}
                placeholder="Cheese"
                defaultValue={formData.cheese}
                name="cheese"
                />
            <label for="veggie">Veggie</label>
            <input
            type="text"
            onChange={handleChange}
            placeholder="veggie"
            defaultValue={formData.veggie}
            name="veggie"
            />
            <label for="user_id">Eater ID</label>
                <input
                type="text"
                onChange={handleChange}
                placeholder="user_id"
               defaultValue={formData.user_id}
               name="user_id"
               />    
            <input className="btn btn-dark m-5" type="submit" value={buttonLabel}  />
            <button className="btn btn-dark m-5">Go Back to Burger List</button>
        </form>
        </div>
    )
};

export default withAuthenticationRequired(Form, {
        onRedirecting: () => <Loading />,
      });