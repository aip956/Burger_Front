// Import useState hook
import React, { useState } from "react";

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
            <label for="user_id">Eater ID</label>
                <input
                type="text"
                onChange={handleChange}
                placeholder="user_id"
               defaultValue={formData.user_id}
               name="user_id"
               />    
            <input type="submit" value={buttonLabel} />
            <button>Go Back to Burger List</button>
        </form>
    )
};

export default Form;