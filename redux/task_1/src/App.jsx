import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UsersList from './users/UsersList';
import Pagination from './users/Pagination';

// Импорт списка пользователей
import users from './usersData'; // Предполагается, что массив пользователей находится в файле usersData.js или аналогичном

const initialState = {
  users: {
    usersList: users,
    currentPage: 0, // Начальная страница
  },
};

const rootReducer = (state = initialState, action) => {
  // Редукторы и действия
  return state;
};

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <UsersList />
    <Pagination />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;