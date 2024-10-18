const initialState = {
  blogs: [],
  trendingBlogs: [],
  loading: false,
  error: null,
  comments: {}, // Adding a new field to store comments for each blog post
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BLOGS_SUCCESS':
      return { 
        ...state, 
        blogs: Array.isArray(action.payload) ? action.payload : [], 
        loading: false 
      };
      
    case 'FETCH_BLOGS_FAIL':
      return { ...state, error: action.payload, loading: false };

      case 'LIKE_BLOG_SUCCESS':
        console.log('Like blog success:', action.payload);
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog.id === action.payload.blogId
              ? { ...blog, likes: action.payload.likes, userHasLiked: action.payload.userHasLiked }
              : blog
          ),
        };
      
      
    case 'FETCH_TRENDING_BLOGS_SUCCESS':
      return { 
        ...state, 
        trendingBlogs: Array.isArray(action.payload) ? action.payload : [], 
        loading: false 
      };

    case 'CREATE_BLOG_SUCCESS':
      return { 
        ...state, 
        blogs: [action.payload.blog, ...state.blogs] 
      };

    // Handle fetching comments for a specific blog
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.blogId]: action.payload.comments, // Store comments by blog ID
        },
      };

      case 'ADD_COMMENT_SUCCESS':
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
            blog.id === action.payload.blogId
              ? { ...blog, comments: [...blog.comments, action.payload.comment] }
              : blog
          ),
        };

      case 'ADD_COMMENT_FAIL':
        return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default blogReducer;
