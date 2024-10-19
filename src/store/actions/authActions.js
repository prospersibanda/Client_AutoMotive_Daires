import api from "./api"; // Import the configured Axios instance

// Login action
export const login = (userCredentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/api/auth/login", userCredentials); // Backend API call
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        userData: data.userData, // User data from the response
        token: data.token, // Token from the response
      },
    });
    localStorage.setItem("token", data.token); // Store token in localStorage
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response?.data?.message || "Login failed", // Handle error
    });
  }
};

// Signup action
export const signup = (userData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await api.post("/api/auth/signup", userData, config); // Call backend

    // Dispatch success action
    dispatch({ type: "SIGNUP_SUCCESS", payload: data });

    // Optionally log or handle the success message here
    console.log(data.message);
  } catch (error) {
    // Dispatch failure action
    dispatch({
      type: "SIGNUP_FAIL",
      payload: error.response?.data?.message || "Signup failed",
    });
  }
};

// Fetch current logged-in user
export const fetchCurrentUser = () => async (dispatch) => {
  try {
    const { data } = await api.get("/api/auth/me"); // Call to get the current user's info
    dispatch({ type: "FETCH_USER_SUCCESS", payload: data }); // Dispatch success
  } catch (error) {
    dispatch({
      type: "FETCH_USER_FAIL",
      payload: error.message, // Handle error
    });
  }
};

// Helper function to safely parse JSON
const safeJSONParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null; // Return null if parsing fails
  }
};

// Check if token exists and load user info
export const loadUserFromStorage = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const user = safeJSONParse(localStorage.getItem("user")); // Use safeJSONParse for user data

  if (token && user) {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token,
        userData: user,
      },
    });
  }
};

// Action to clear the auth state (i.e., logout)
export const logout = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("token");

  // Dispatch an action to clear user data from Redux store
  dispatch({ type: "LOGOUT_SUCCESS" });
};
