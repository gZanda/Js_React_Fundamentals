import React from "react";
import { useState } from "react";

// UseState - Uma forma de modificar dinamicamente elementos no HTML sem precisar de seletores JS

function StateHook() {
    // UseState Variable ( instead of: let counter = 0 )
    // Usa "setCounter" para alterar seu valor
    // useState = Inicial
    // Variáveis com USESTATE e SET
    let [counter, setCounter] = useState(0);
    let [userInput, setUserInput] = useState("Input");

    // Função de Alterar Input
    // event já carrega automaticamente um input (pois é da TAG e do Event "onChange")
    const alter = (event) => {
        const newValue = event.target.value;
        setUserInput(newValue);
    };

    // Função de Incrementar um
    const plusOne = (event) => {
        setCounter(counter + 1);
    };

    // Eventos "onClick" e "onChange" dão trigger nas funções acima
    // No REACT é normal fazer os eventos chamarem as funções diretamente no Front com JSX
    return (
        <div>
            {counter}
            <br></br>
            <br></br>
            <button onClick={plusOne}> INCREMENT :3 </button>
            <br></br>
            <br></br>
            {userInput}
            <br></br>
            <br></br>
            <input placeholder="Enter..." onChange={alter} />
        </div>
    );
}

export default StateHook;
