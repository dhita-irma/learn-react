import React, { Fragment } from 'react';
import Aux from '../../../hoc/Auxiliary';

import classes from './Person.css'

const person = (props) => {
    return (
        <Fragment>
            <p key="i1" onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p key="i2">{props.children}</p>
            <input key="i3" type="text" onChange={props.changed} value={props.name}/>
        </Fragment>
    );
};

export default person;
