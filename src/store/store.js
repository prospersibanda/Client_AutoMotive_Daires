import { createStore, combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';

// Combine reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
  categories: categoryReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
