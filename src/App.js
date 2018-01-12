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

  removeHandler(id) {
    const input = this.state.input;
    input.splice(parseInt(id.substr(1), 10), 1);
    const newInput = input;
    this.setState({ input: newInput });
  }

  render() {
    let chars = null;

    if (this.state.input.length > 0) {
      chars = (
        <div>
          {this.state.input.map((char, index) => {
            return <Char key={`${char}${index}`} char={char} clicked={() => this.removeHandler(`${char}${index}`)} />
          })}
        </div>
      );
    }

    const inputLength = this.state.input.length

    return (
      <div className="App">
        <input type="text" placeholder="Enter some text" onChange={this.onChangeHandler} value={this.state.input.join('')} />
        <Validation length={inputLength} />
        <div>
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
