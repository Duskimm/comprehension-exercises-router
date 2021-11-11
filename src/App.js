import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
      </BrowserRouter>
    );
  }
}

export default App;
