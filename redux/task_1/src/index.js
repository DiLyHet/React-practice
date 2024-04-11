import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from './actions';
import { addProduct, removeProduct } from './actions';
import { setUser, removeUser } from './actions';

export const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>French</button>
      <button onClick={() => handleLanguageChange('it')}>Italian</button>
      <button onClick={() => handleLanguageChange('ukr')}>Ukrainian</button>
    </div>
  );
};






export const Cart = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div>
      <button onClick={() => handleAddProduct({ id: 1, name: 'milk' })}>Add Milk to Cart</button>
      <button onClick={() => handleRemoveProduct(1)}>Remove Milk from Cart</button>
    </div>
  );
};





export const UserProfile = () => {
  const dispatch = useDispatch();

  const handleSetUser = (userData) => {
    dispatch(setUser(userData));
  };

  const handleRemoveUser = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <button onClick={() => handleSetUser({ name: 'Bob' })}>Set User</button>
      <button onClick={handleRemoveUser}>Remove User</button>
    </div>
  );
};
