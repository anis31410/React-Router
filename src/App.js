import React from 'react';

import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
            <NavLink exact to="/"> Accueil </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </BrowserRouter>
      );
  }
}

export default App;

