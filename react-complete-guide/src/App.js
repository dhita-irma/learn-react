import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Dhita', age: '25'},
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: 'Max', age: '28'},
        {name: 'Manu', age: '29'},
        {name: 'Tsuki', age: '27'},
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Dhita and I'm learning React</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
