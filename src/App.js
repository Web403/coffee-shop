import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/navbar.css';
import navbar from './Components/navbar';
import body from './Components/body';
import './Components/body.css'

class App extends Component {
  render() {
    return (
        navbar()
    );
  }
}

export default App;
