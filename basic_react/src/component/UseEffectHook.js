import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// UseEffect - A function that will be called when a page RE-RENDER

function EffectDemonstration(){

    // State - OBS: Usar um setState faz a página Recarregar
    const [data, setData] = useState("");

    // O que estiver aqui dentro vai ser invocado sempre a página RE-RENDER
    useEffect(() => {

        // Fetch para uma API aleatória
        axios
            // GET
            .get("https://jsonplaceholder.typicode.com/comments")
            // Display
            .then((response)=>{setData(response.data[0].email);
            console.log("API called");
        });

        // [] indica que esse UseEffect não é afetado por nenhum Re-Render
    }, []);

    return (
        <div>
            {data}
        </div>
    );


}

export default EffectDemonstration;