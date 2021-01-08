import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    text: null, 
    count: 0,
  }

  charChangedHandler = (s) => {
    this.setState({
      text: s,
      count: s.length,
    });
  }

  render() {

    let charsComp = null;

    if (this.state.count !== 0) {

      const charString = this.state.text.split('');       // Split chars into an array of its item
      charsComp = (
        <div>
          {charString.map((c) => {
            if (c !== " ") {
              return <CharComponent char={c}/>
            } else {
              return null
            }
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>

        <input
          className='userInput'
          onChange={(event) => this.charChangedHandler(event.target.value)}/>
        <p>{this.state.count}</p>

        <ValidationComponent
          count={this.state.count}/>

        {charsComp}
      </div>
    );
  }
}

export default App;
