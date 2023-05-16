// userActions.js
const fetchUsersRequest = () => {
    return {
      type: 'FETCH_USERS_REQUEST'
    };
  };
  
  const fetchUsersSuccess = (users) => {
    return {
      type: 'FETCH_USERS_SUCCESS',
      payload: users
    };
  };
  
  const fetchUsersFailure = (error) => {
    return {
      type: 'FETCH_USERS_FAILURE',
      payload: error
    };
  };
  
  export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest());
      fetch('http://localhost:5000/Users')
        .then(response => response.json())
        .then(data => {
          dispatch(fetchUsersSuccess(data));
        })
        .catch(error => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };