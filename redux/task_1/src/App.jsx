import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UsersList from './users/UsersList';
import Pagination from './users/Pagination';

import users from './usersData';

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';

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

const initialState = {
  users: {
    usersList: users,
    currentPage: 0,
  },
};

const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(state);
  switch (action.type) {
    case INCREMENT:
      return {...state, users: {...state.users, currentPage: state.users.currentPage +1}};
    case DECREMENT:
        return {...state, users: {...state.users, currentPage: state.users.currentPage -1}};
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <UsersList />
  </Provider>
);

export default App;
