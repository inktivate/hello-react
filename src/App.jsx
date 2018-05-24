import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Text(props) {
  return <span style={{color: props.color}}>{props.value}</span>
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, <Text color="blue" value="valued computer user" /></h1>
        <h2>Greetings from <Text color="orange" value="the code overlord" /></h2>
        <h3>I am quite <Text color="red" value="lonely" /> please send cake</h3>
      </div>
    );
  }
}

export default App;
