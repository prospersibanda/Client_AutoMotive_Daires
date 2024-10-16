const initialState = {
  user: localStorage.getItem('user') && localStorage.getItem('user') !== 'undefined' 
    ? JSON.parse(localStorage.getItem('user')) 
    : null,
  token: localStorage.getItem('token') || null,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'), // Set to true if a token exists in localStorage
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      localStorage.setItem('token', action.payload.token); // Save token to localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.userData)); // Save user to localStorage
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };

    case 'LOGOUT':
      localStorage.removeItem('token'); // Remove token from localStorage on logout
      localStorage.removeItem('user');  // Remove user from localStorage on logout
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
