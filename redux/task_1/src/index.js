import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(addProduct({id: 1, name: 'milk'}));
store.dispatch(addProduct({id: 2, name: 'water'}));
store.dispatch(removeProduct(2));
store.dispatch(addProduct({id: 3, name: 'banana'}));