import { createStore } from 'redux';
import './index.scss';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';



export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const initialState = {
  history: []
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: state.history.concat(1)
      };
    case DECREMENT:
      return {
        ...state,
        history: state.history.concat(-1)
      };
    case RESET:
      return {
        history: []
      };
    default:
      return state;
  }
};
export const store = createStore(counterReducer);
