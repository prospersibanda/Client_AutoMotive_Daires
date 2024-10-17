const initialState = {
    user: null,
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
        return { ...state, user: action.payload.userData, token: action.payload.token };
      case 'LOGIN_FAIL':
      case 'SIGNUP_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  