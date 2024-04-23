import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import usersReducer from './store/usersReducer';
import UsersList from './components/users/UsersList';

// Создаем Redux store
const store = createStore(usersReducer);

const App = () => (
  <Provider store={store}>
    <UsersList />
  </Provider>
);

export default App;
