// userReducer.js
const initialState = {
    Users: [],
    isLoading: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          users: action.payload,
          isLoading: false,
          error: null
        };
      case 'FETCH_USERS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;