import React from 'react';
import Product from './Product';
import { Link, Route, Switch } from 'react-router-dom';

const Products = () => {
  return (
    <div class="page__content">
      <h1>Products</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li class="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          <span>Select a product, please</span>
        </Route>
        <Route path="/products/:productId" component={Product} />
      </Switch>
    </div>
  );
};

export default Products;
