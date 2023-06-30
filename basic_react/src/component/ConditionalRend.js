import React from "react";
import { useState } from "react";

function ConditionalRend() { 

    // State
    const [isTrue, setIsTrue] = useState(true);

    // TRUE
    // Anonymous function to change state on event
    if(isTrue){
        return(
            <div>
                <button onClick={()=>setIsTrue(!isTrue)} > Change State </button>
                <h1> This is True </h1>
            </div>
        )
    }
    // FALSE
    // Anonymous function to change state on event
    else{
        return(
            <div>
                <button onClick={()=>setIsTrue(!isTrue)} > Change State </button>
                <h1> This is False </h1>
            </div>
        )
    }
}

export default ConditionalRend;