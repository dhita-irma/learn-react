import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

import './App.css';
import './UserOutput/UserOutput.css';


class App extends Component {
  state = {
    authors: [
      {name:'Haruki Murakami', age:'71', country:'Japan'},
      {name:'George R. R. Martin', age:'72', country:'United States'},
      {name:'J. K. Rowling', age:'55', country:'United Kingdom'},
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({
      authors: [
        {name: event.target.value, age:'71', country:'Japan'},
        {name:'George R. R. Martin', age:'72', country:'United States'},
        {name:'J. K. Rowling', age:'55', country:'United Kingdom'},
      ]
    })
  }

  render() {

    const style = {
      display: 'inline-flex',
      color: 'blue'
    }

    return (
      <div className="App">
        <h4 style={style}>Change 1st Author's Name  
        <UserInput
          name={this.state.authors[0].name}
          changed={this.nameChangedHandler}/>
        </h4>
        <UserOutput
          name={this.state.authors[0].name}
          age={this.state.authors[0].age}
          country={this.state.authors[0].country}/>
        <UserOutput
          name={this.state.authors[1].name}
          age={this.state.authors[1].age}
          country={this.state.authors[1].country}/>
        <UserOutput
          name={this.state.authors[2].name}
          age={this.state.authors[2].age}
          country={this.state.authors[2].country}/>
      </div>
    );
  }
}

export default App;
