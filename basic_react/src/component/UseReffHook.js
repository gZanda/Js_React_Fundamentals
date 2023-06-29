import React from "react";
import { useRef } from "react";

function UseReffDemonstration(){

    // In REACT we don't use code like in JS: document.getEelementById;
    // So, to modify elements like the "input":
    const inputRef = useRef(null);

    // Function to handle it
    const handleClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    }

    return(

        <div>
            <h1> Demonstration </h1>
            <input type="text" placeholder="Enter..." ref={inputRef} ></input>
            <button onClick={handleClick} > Change </button>
        </div>

    )

}

export default UseReffDemonstration;