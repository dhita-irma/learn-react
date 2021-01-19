import React from 'react';
import Aux from '../../../hoc/Auxiliary';

import withClass from '../../../hoc/withClass'
import classes from './Person.css'

const person = (props) => {
    return (
        <Aux>
            <p key="i1" onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p key="i2">{props.children}</p>
            <input key="i3" type="text" onChange={props.changed} value={props.name}/>
        </Aux>
    );
};

export default withClass(person, classes.Person);
