import React, { Component } from 'react';
import './App.css';
import TicTacToe from './TicTacToe/containers/Board-container'
class App extends Component {
  state = {
    name: '@facup3'
  }

  clicked = () =>{
    this.setState(
      {
        name: this.state.name + "🚀"
      }
    )
  }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Rock the code 🤟</h1>
        <TicTacToe />
      </div>
    );
  }
}

export default App;
