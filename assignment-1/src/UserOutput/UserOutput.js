import React from 'react';


const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello, I'm {props.name}</p>
            <p>I'm {props.age} years old and I'm from {props.country}</p>
        </div>
    )
};

export default userOutput;