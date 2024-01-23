import React from 'react';

export default class CartTitle extends React.Component {
  render() {
    return <div className="cart-title">{`${this.props.userData}, you added 2 items`}</div>;
  }
}
