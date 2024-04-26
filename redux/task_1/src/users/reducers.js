import {
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
  } from './actions';
  
  const initialState = {
    userData: null,
    isFetching: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_DATA_REQUEST:
        return { ...state, isFetching: true, error: null };
      case FETCH_USER_DATA_SUCCESS:
        return { ...state, isFetching: false, userData: action.payload, error: null };
      case FETCH_USER_DATA_FAILURE:
        return { ...state, isFetching: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  