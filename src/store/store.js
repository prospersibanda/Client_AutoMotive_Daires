import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import { composeWithDevTools } from '@redux-devtools/extension'; // Correct import for redux dev tools

// Import your reducers
import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';
import categoryReducer from './reducers/categoryReducer';

// Combine the reducers
const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  categories: categoryReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Apply middleware with devtools
);

export default store;
