const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'COUNTER/DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'COUNTER/RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
