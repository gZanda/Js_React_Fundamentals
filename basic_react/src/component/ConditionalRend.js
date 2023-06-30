import React from "react";
import { useState } from "react";

function ConditionalRend() { 

    const [isTrue, setIsTrue] = useState(true);

    if(isTrue){
        return(
            <div>
                <button onClick={()=>setIsTrue(!isTrue)} > Change State </button>
                <h1> This is True </h1>
            </div>
        )
    }
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