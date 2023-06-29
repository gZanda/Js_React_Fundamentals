// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './UseContextChild';
// Import createContext
import { createContext } from 'react';

// Instead of working with PROPS, we are going to make a GLOBAL collection of STATES
// Create a Context
export const AppContext = createContext(null);

const ContexParent = () => {

    // State
    let [username, setUsername] = useState("A");

    return (

        <AppContext.Provider value={{username, setUsername}}>
            <ChildComponent />
        </AppContext.Provider>

    )
}

export default ContexParent;