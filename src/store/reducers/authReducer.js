const initialState = {
    user: null,
    token: null,
    error: null,
    isAuthenticated: false, // Add this flag
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.payload.userData, // Store user data
          token: action.payload.token,   // Store the token
          isAuthenticated: true,         // Set authenticated flag
          error: null,                   // Clear any error
        };
  
      case 'LOGIN_FAIL':
      case 'SIGNUP_FAIL':
        return {
          ...state,
          error: action.payload,         // Store error message
          user: null,                    // Clear user on failure
          token: null,                   // Clear token on failure
          isAuthenticated: false,        // Set authenticated flag to false
        };
  
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,        // Clear authentication on logout
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  