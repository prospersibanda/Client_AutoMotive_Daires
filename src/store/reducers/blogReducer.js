const initialState = {
    blogs: [],
    trendingBlogs: [],
    loading: false,
    error: null,
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BLOGS_SUCCESS':
        return { ...state, blogs: action.payload, loading: false };
      case 'FETCH_BLOGS_FAIL':
        return { ...state, error: action.payload, loading: false };
      case 'LIKE_BLOG_SUCCESS':
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog.id === action.payload.blogId
              ? { ...blog, likes: action.payload.likes }
              : blog
          ),
        };
      case 'FETCH_TRENDING_BLOGS_SUCCESS':
        return { ...state, trendingBlogs: action.payload, loading: false };
      case 'CREATE_BLOG_SUCCESS':
        return { ...state, blogs: [action.payload.blog, ...state.blogs] };
      default:
        return state;
    }
  };
  
  export default blogReducer;
  