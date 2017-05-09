import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {

  render() {
    return(
      <div>
        <a href="#">HOME</a>
        <a href="#">RADIO</a>
        <a href="#">SPECTRUM</a>
        <a href="#">HEATMAP</a>
        <a href="#">ABOUT</a>
      </div>
    );
  }

}

export default Navbar;
