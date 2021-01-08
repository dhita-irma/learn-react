import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    text: "",
    count: 0,
  }

  charChangedHandler = (s) => {
    this.setState({
      text: s,
      count: s.length,
    });
  }

  deleteCharHandler = (index) => {
    const text = this.state.text;
    const textArray = text.split('');
    textArray.splice(index, 1);

    this.setState({
      text: textArray.join(''),
      count: textArray.length,
    })
  }

  render() {

    let charsComp = null;

    if (this.state.count !== 0) {

      const charString = this.state.text.split('');       // Split chars into an array of its item
      charsComp = (
        <div>
          {/* Return a list of component that contain each character in the charString*/}
          {charString.map((c, i) => {
            if (c !== " ") {
              return <CharComponent 
                char={c} 
                key={i.toString()} 
                click={() => this.deleteCharHandler(i)}/>
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
          value={this.state.text}
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
