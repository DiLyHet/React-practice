import { SET_USER, REMOVE_USER } from './user.actions';

const initialUserState = null;

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
