import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TransferList from './options/TransferList';
import optionsReducer from './store/optionsReducer';

const store = createStore(optionsReducer);

const App = () => (
  <Provider store={store}>
    <TransferList />
  </Provider>
);

export default App;
