const ADD_USER = 'users/ADD_USER';
const DELETE_USER = 'users/DELETE_USER';

const initialState = {
  usersList: []
};

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default usersReducer;
