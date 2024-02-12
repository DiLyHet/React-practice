import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import User from './User';

export default function App() {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users/:userId" component={User} />
            <Route exact path="/">
              <span>Select a user please</span>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
