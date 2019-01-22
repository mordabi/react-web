import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BackGround from './assets/Resources/background_image.png'
import Layout from './containers/Layout/Layout'

/**
 * ! remove the css from App and remove to StartPart 
 * 
 */
var sectionStyle = {
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundImage:`url(${BackGround})`
};

/**
 * App class: holds the the page 
 * call the page manager and layout
 * TODO: append pagemanager
 */
class App extends Component {
  
  render() {
    return (
      <div className="App" style={sectionStyle}>
        <Layout/>
      </div>
    );
  }
}

export default App;
