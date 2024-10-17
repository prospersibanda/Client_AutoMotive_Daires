import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers
import blogReducer from './reducers/blogReducer';
import authReducer from './reducers/authReducer';
import commentReducer from './reducers/commentReducer';

// Combine the reducers
const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  comments: commentReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
