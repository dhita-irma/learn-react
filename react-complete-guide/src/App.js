import React, { Component } from 'react';


import Person from './Person/Person';
import './App.css';

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
    // console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Maximilian';
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
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}/>
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm Dhita and I'm learning React</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
