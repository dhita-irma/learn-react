import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: '28'},
      {id: '2', name: 'Manu', age: '29'},
      {id: '3', name: 'Dhita', age: '25'},
    ],
    otherState: 'see other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: '28'},
        {name: 'Manu', age: '29'},
        {name: 'Tsuki', age: '27'},
      ]
    })
  }


  nameChangedHandler = (event, id) => {

    // Returns the index of person with id in the argument 
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Creata a variable container a NEW object of the person (using spread)
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alternative, less modern approach 
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;             // Not a good practice, bc this is mutable 
    // const persons = this.state.persons.slice();     // Create a copy of array (good practice / immutable fashion)
    const persons = [...this.state.persons];           // Crate a spread of array (good practice / immutable fashion)
    persons.splice(personIndex, 1);                    // Delete person on index personIndex
    this.setState({persons: persons})                  // Update state
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // React handles render function to convert JSX into:
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
