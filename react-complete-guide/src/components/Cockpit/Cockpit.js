import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    // Set button color to red when Persons is shown
    if (props.showPersons) {
        btnClass = classes.Red; 
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Click the button bellow!</p>
            <button className={btnClass} alt={props.showPersons} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;