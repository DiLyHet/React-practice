import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>-</button>
      <span className="counter__value" onClick={reset}>{count}</span>
      <button className="counter__button" onClick={increment}>+</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
