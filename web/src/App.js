import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout';
import LNPage from './containers/LifeNightPage/LNPage';

/**
 * ! remove the css from App and append to StartPart 
 * * background to demonstration  
 */


/**
 * App class: holds the the page 
 * call the page manager and layout
 * TODO: append pagemanager
 */
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Layout>
          <LNPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
