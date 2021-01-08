import React from 'react';

const inlineBox = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center', 
    margin: '16px',
    border: '1px solid black'
};

const charComponent = (props) => {
    return <div style={inlineBox} onClick={props.click}>{props.char}</div>
};

export default charComponent;