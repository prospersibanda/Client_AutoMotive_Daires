// authReducer.js

const initialState = {
    user: null,   // Stores the signed-up user info
    isLoggedIn: false, // Tracks login status
    error: null, // For handling errors
  };
  
  // Action Types
  const SIGNUP = 'SIGNUP';
  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';
  
  // Reducer
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          error: null,
        };
      case LOGIN:
        // Validate login credentials
        if (
          state.user &&
          state.user.email === action.payload.email &&
          state.user.password === action.payload.password
        ) {
          return {
            ...state,
            isLoggedIn: true,
            error: null,
          };
        } else {
          return {
            ...state,
            error: 'Invalid email or password',
          };
        }
      case LOGOUT:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  // Action Creators
  export const signup = (userData) => ({
    type: SIGNUP,
    payload: userData,
  });
  
  export const login = (credentials) => ({
    type: LOGIN,
    payload: credentials,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  
  export default authReducer;
  