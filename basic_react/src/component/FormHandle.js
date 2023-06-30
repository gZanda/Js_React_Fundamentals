import React, { useState } from 'react';

function Form() {

    // States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        // Don't refresh the page on form submission
        e.preventDefault();
        // Print the Values of the STATES
        console.log('Submitted:', name + " : " + email);

        // Create a new object with the values of the states
        // JSON
        const blog = { name, email };
        // Print the JSON
        console.log(blog);

        // Reset States
        setName('');
        setEmail('');
    };

    // Using anonymous functions to set the NAME and EMAIL states with "onChange" event
    return (
        <form onSubmit={handleSubmit}>
        
        <label>
            Name:
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <br />
        <br />

        <label>
            Email:
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
