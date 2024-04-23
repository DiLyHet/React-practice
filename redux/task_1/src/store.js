import { createStore, combineReducers } from 'redux';
import userReducer from './users/users.reducer';
import counterReducer from './counter/counter.reducer'

const appReducer = combineReducers({
  users: userReducer,
  counter: counterReducer
});

const store = createStore(appReducer);

export default store;
