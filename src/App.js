import React, { Component } from 'react';

import Navbar from './navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p className="title">VIRAL LABORATORIES</p>
      </div>
    );
  }
}

export default App;
