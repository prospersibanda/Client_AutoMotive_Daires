const initialState = {
    comments: [],
    loading: false,
    error: null,
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, comments: action.payload, loading: false };
      case 'FETCH_COMMENTS_FAIL':
        return { ...state, error: action.payload, loading: false };
      case 'ADD_COMMENT_SUCCESS':
        return { ...state, comments: [...state.comments, action.payload.comment] };
      default:
        return state;
    }
  };
  
  export default commentReducer;
  