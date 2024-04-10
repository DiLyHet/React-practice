import { ADD_USER, DELETE_USER } from './users.reducer';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});
