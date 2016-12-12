import React, { Component } from 'react';
import main from './main.png';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main_img">
        <img draggable="false" alt="main_img" src={main}/>
      </div>
    );
  }
}

export default Main;
