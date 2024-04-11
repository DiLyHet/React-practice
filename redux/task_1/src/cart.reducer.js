import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;