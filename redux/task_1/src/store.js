import { createStore, combineReducers } from 'redux';
import languageReducer from './reducer';
import cartReducer from './reducer';
import userReducer from './reducer';

const rootReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;
