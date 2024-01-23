import React from 'react';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [
        {
          id: '1',
          name: 'iPhone 11',
          price: '999',
        },
        {
          id: '2',
          name: 'iPad Pro',
          price: '799',
        },
      ],
    };
  }

  render() {
    const total = this.state.cartItems.reduce((tempTotal, item) => tempTotal + parseFloat(item.price), 0);


    return (
      <div className="products">
        <ul className="products__list">
          {this.state.cartItems.map(item => (
            <li className="products__list-item" key={item.id}>
              <span className="products__item-name">{item.name}</span>
              <span className="products__item-price">{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="products__total">{`Total: ${total}`}</div>
      </div>
    );
  }
}
