import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout';
import LNPage from './containers/LifeNightPage/LNPage';


/**
 * * App class: holds the the page 
 * * call the page manager and layout
 * ? create file of const like scrollspeed
 */
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Layout>
          <LNPage scrollspeed={10}/>
        </Layout>
      </div>
    );
  }
}

export default App;
