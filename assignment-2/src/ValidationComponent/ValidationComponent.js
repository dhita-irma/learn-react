import React from 'react';


const validationComponent = (props) => {
    if (props.count >= 5) {
        return <p>Text is long enough</p>
    } else {
        return <p>Text too short</p>
    }
};

export default validationComponent;