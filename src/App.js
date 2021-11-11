import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAccess from './components/StrictAccess';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>

          <Route
            exact
            path="/users/:id"
            render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> }
          />
          <Route
            path="/strict-access"
            render={ () => (
            <StrictAccess user={ { username: 'joao', password: '1234' } } />
            )}
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />

        </Switch>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>

      </BrowserRouter>
    );
  }
}

export default App;
