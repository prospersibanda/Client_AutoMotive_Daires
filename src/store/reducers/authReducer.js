const initialState = {
  user:
    localStorage.getItem("user") && localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("token") || null,
  error: null,
  isAuthenticated: !!localStorage.getItem("token"), // Set to true if a token exists in localStorage
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_REQUEST":
      return {
        ...state,
        loading: true, // Set loading to true
        error: null, // Clear previous errors
      };

    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.userData));
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false, // Set loading to false
        error: null,
      };

    case "SIGNUP_FAIL":
      return {
        ...state,
        error: action.payload, // Set the error message
        isAuthenticated: false,
        user: null,
        token: null,
        loading: false, // Set loading to false after error
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true, // Set loading to true when request is initiated
        error: null, // Clear any previous errors
      };

    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.userData));
      return {
        ...state,
        user: action.payload.userData,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false, // Set loading to false on success
        error: null,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        error: action.payload, // Set the error message from action.payload
        isAuthenticated: false,
        user: null,
        token: null,
        loading: false, // Set loading to false on failure
      };

    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
        loading: false, // Ensure loading is false on logout
      };

    default:
      return state;
  }
};

export default authReducer;
