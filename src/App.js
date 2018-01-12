import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    input: []
  }

  onChangeHandler = (event) => {
    this.setState({ input: event.target.value.split('') });
  }

  render() {
    let chars = null;

    if (this.state.input.length > 0) {
      chars = (
        <div>
          {this.state.input.map((char, index) => {
            return <Char key={`${char}${index}`} char={char} />
          })}
        </div>
      );
    }

    const inputLength = this.state.input.length

    return (
      <div className="App">
        <input type="text" placeholder="Enter some text" onChange={this.onChangeHandler} />
        <Validation length={inputLength} />
        <div>
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
