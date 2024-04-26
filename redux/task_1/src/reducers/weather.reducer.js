// src/reducers/weather.reducer.js
const initialState = {
    cities: [],
    error: null
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_WEATHER_DATA_SUCCESS':
        return {
          ...state,
          cities: action.payload,
          error: null
        };
      case 'GET_WEATHER_DATA_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  