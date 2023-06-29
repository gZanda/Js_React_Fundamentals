// ChildComponent.js

import React from 'react';
// Import useContext
import { useContext } from 'react';
// Impport the Context we created
import { AppContext } from './UseContextParent';

//No props
const ContextChild = () => {

    const {username} = useContext(AppContext);

    return(

        <h1>{username}</h1>

    ) 

}

export default ContextChild;