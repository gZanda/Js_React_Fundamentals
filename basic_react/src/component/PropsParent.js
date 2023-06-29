// ParentComponent.js

import React from 'react';
import ChildComponent from './PropsChild';

const ParentComponent = () => {

    let message = 'Hello, World!';

    return (

    <div>
        <ChildComponent message={message} />
    </div>

    )
}

export default ParentComponent;