export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const fetchUserDataRequest = () => ({
  type: FETCH_USER_DATA_REQUEST
});

export const fetchUserDataSuccess = userData => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData
});

export const fetchUserDataFailure = error => ({
  type: FETCH_USER_DATA_FAILURE,
  payload: error
});

export const fetchUserData = username => {
  return dispatch => {
    dispatch(fetchUserDataRequest());
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed with status:', response.status);
        }
      })
      .then(data => {
        dispatch(fetchUserDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchUserDataFailure(error.message));
      });
  };
};
