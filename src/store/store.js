<<<<<<< HEAD
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
=======
import { createStore, combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';
>>>>>>> adf7854e0ec4d706e66bb64ef4286f27d0a2e096

// Import your reducers
import blogReducer from './reducers/blogReducer';
import authReducer from './reducers/authReducer';
import commentReducer from './reducers/commentReducer';

// Combine the reducers
const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
<<<<<<< HEAD
  comments: commentReducer,
=======
  categories: categoryReducer,
  auth: authReducer,
>>>>>>> adf7854e0ec4d706e66bb64ef4286f27d0a2e096
});

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
