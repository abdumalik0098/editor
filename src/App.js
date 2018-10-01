import React, { Component } from 'react';
import './App.css';
import TodoAdd from "./containers/TodoAdd";


class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoAdd/>
      </div>
    );
  }
}

export default App
