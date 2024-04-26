export const getWeatherData = () => async dispatch => {
    try {
      const response = await fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities');
      const data = await response.json();
      dispatch({ type: 'GET_WEATHER_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_WEATHER_DATA_ERROR', payload: error.message });
    }
  };
  