import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="column">
        <CartTitle userData={this.props.userData} />
        <ProductsList />
      </div>
    );
  }
}
