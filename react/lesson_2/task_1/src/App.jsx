import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <div class="page">
      <BrowserRouter>
        <ul class="navigation">
          <li class="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li class="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
