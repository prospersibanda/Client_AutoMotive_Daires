import { createStore, combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';

// Combine reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
  categories: categoryReducer,
  auth: authReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
