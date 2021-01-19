import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    const toggleBtnRef = React.createRef(null);

    // With argument: useEffect run only when state in argument array gets updated 
    useEffect(() => {
      console.log('[Cockpit.js] useEffect!')

      // Http request... 
      // const timer = setTimeout(() => {
      //   alert('Saved data to cloud!');
      // }, 1000);

      toggleBtnRef.current.click();
      // Runs when the component gets unmounted
      return () => {
        // clearTimeout(timer);
        console.log('[Cockpit.js] clean up work in useEffect');
      }
    }, [props.persons]);


    // No arguments: useEffect runs every time component get mounted 
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect!');
    });

    const assignedClasses = [];
    let btnClass = '';

    // Set button color to red when Persons is shown
    if (props.showPersons) {
        btnClass = classes.Red; 
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Click the button bellow!</p>
            <button ref={toggleBtnRef} className={btnClass} alt={props.showPersons.toString()} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);
