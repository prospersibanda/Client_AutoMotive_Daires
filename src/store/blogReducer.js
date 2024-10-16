const initialState = {
    blogPosts: [
      {
        id: 1,
        image: '/src/assets/best_sport_cars.jpg',
        title: 'The Best Sports Cars of 2024',
        shortDescription: 'A quick overview of the top sports cars launching in 2024.',
        longDescription: 'In-depth analysis of features, performance, and pricing of the best sports cars of 2024.',
        likeCount: 150,
        shares: 30,
        bookmarks: 20,
        isBookmarked: true,
        comments: [
          {
            userId: 1,
            userName: 'CarLover123',
            userProfilePicture: 'https://example.com/user1.jpg',
            comment: 'Great insights! Can’t wait for the new Ferrari.',
          },
        ],
        author: {
          profilePicture: '/src/assets/author1.jpg',
          name: 'John Doe',
        },
        datePosted: '2024-10-01',
        readTime: '8 min',
        category: 'Sports Cars',
        isTrending: true,
      },
      {
        id: 2,
        image: '/src/assets/electric-car-charging-stations.jpg',
        title: 'Electric Cars You Should Know About',
        shortDescription: 'These electric cars are changing the game in 2024.',
        longDescription: 'An in-depth look at the newest electric cars, their range, features, and affordability.',
        likeCount: 200,
        shares: 50,
        bookmarks: 35,
        isBookmarked: false,
        comments: [
          {
            userId: 2,
            userName: 'EcoDrive',
            userProfilePicture: 'https://example.com/user2.jpg',
            comment: 'I’m excited about the future of electric vehicles!',
          },
        ],
        author: {
          profilePicture: '/src/assets/author1.jpg',
          name: 'Jane Smith',
        },
        datePosted: '2024-09-15',
        readTime: '10 min',
        category: 'Electric Cars',
        isTrending: false,
      },
      {
        id: 3,
        image: '/src/assets/affordable_suvs.jpg',
        title: 'Top 5 Affordable SUVs',
        shortDescription: 'A rundown of the most affordable SUVs with the best features.',
        longDescription: 'A detailed review of the top 5 affordable SUVs for families and adventurers alike.',
        likeCount: 120,
        shares: 25,
        bookmarks: 18,
        isBookmarked: true,
        comments: [],
        author: {
          profilePicture: '/src/assets/author1.jpg',
          name: 'Mike Johnson',
        },
        datePosted: '2024-08-22',
        readTime: '7 min',
        category: 'SUVs',
        isTrending: true,
      },
      {
        id: 4,
        image: '/src/assets/luxury_cars.jpg',
        title: 'Luxury Cars: The Ultimate Driving Experience',
        shortDescription: 'Luxury cars that redefine comfort and performance.',
        longDescription: 'A comprehensive guide to the best luxury cars of the year, featuring top brands like Rolls Royce and Bentley.',
        likeCount: 300,
        shares: 100,
        bookmarks: 90,
        isBookmarked: false,
        comments: [
          {
            userId: 3,
            userName: 'LuxuryLover',
            userProfilePicture: 'https://example.com/user3.jpg',
            comment: 'I love the new Bentley design!',
          },
        ],
        author: {
          profilePicture: '/src/assets/author1.jpg',
          name: 'Anna Williams',
        },
        datePosted: '2024-07-30',
        readTime: '15 min',
        category: 'Luxury Cars',
        isTrending: true,
      },
      {
        id: 5,
        image: '/src/assets/maintain_car.jpg',
        title: 'How to Maintain Your Car in Top Condition',
        shortDescription: 'Essential tips and tricks for keeping your car in peak performance.',
        longDescription: 'From regular maintenance checks to seasonal care, this guide will help you keep your car running smoothly all year round.',
        likeCount: 90,
        shares: 10,
        bookmarks: 12,
        isBookmarked: true,
        comments: [
          {
            userId: 4,
            userName: 'CarCarePro',
            userProfilePicture: 'https://example.com/user4.jpg',
            comment: 'Great advice! I’ve been doing these and my car feels brand new.',
          },
        ],
        author: {
          profilePicture: '/src/assets/author1.jpg',
          name: 'Chris Roberts',
        },
        datePosted: '2024-09-01',
        readTime: '6 min',
        category: 'Car Maintenance',
        isTrending: false,
      },
    ],
  };
  
  const ADD_BLOG_POST = 'ADD_BLOG_POST';
  const UPDATE_BLOG = 'UPDATE_BLOG';
  const DELETE_BLOG = 'DELETE_BLOG';
  const UPDATE_LIKE = 'UPDATE_LIKE';
const UPDATE_SHARE = 'UPDATE_SHARE';
const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BLOG_POST:
        return {
          ...state,
          blogPosts: [...state.blogPosts, action.payload],
        };
      case UPDATE_BLOG:
        return {
          ...state,
          blogPosts: state.blogPosts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };
      case DELETE_BLOG:
        return {
          ...state,
          blogPosts: state.blogPosts.filter((post) => post.id !== action.payload),
        };
      case UPDATE_LIKE:
        return {
        ...state,
        blogPosts: state.blogPosts.map((post) =>
          post.id === action.payload.id
            ? { ...post, likeCount: action.payload.likeCount }
            : post
        ),
      };
      case UPDATE_SHARE:
        return {
        ...state,
        blogPosts: state.blogPosts.map((post) =>
          post.id === action.payload.id
            ? { ...post, shares: action.payload.shares }
            : post
        ),
      };
      case TOGGLE_BOOKMARK:
        return {
        ...state,
        blogPosts: state.blogPosts.map((post) =>
          post.id === action.payload.id
            ? { ...post, isBookmarked: !post.isBookmarked }
            : post
        ),
      };
      default:
        return state;
    }
  };
  
  export const addBlogPost = (blog) => ({
    type: ADD_BLOG_POST,
    payload: blog,
  });
  
  export const updateBlog = (blog) => ({
    type: UPDATE_BLOG,
    payload: blog,
  });
  
  export const deleteBlog = (id) => ({
    type: DELETE_BLOG,
    payload: id,
  });

  export const updateLike = (id, likeCount) => ({
    type: UPDATE_LIKE,
    payload: { id, likeCount },
  });
  
  export const updateShare = (id, shares) => ({
    type: UPDATE_SHARE,
    payload: { id, shares },
  });
  
  export const toggleBookmark = (id) => ({
    type: TOGGLE_BOOKMARK,
    payload: { id },
  });
  
  export default blogReducer;
  