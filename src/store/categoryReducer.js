const initialState = {
    categories: [
      {
        id: 1,
        image: 'https://example.com/category-sportscars.jpg',
        title: 'Sports Cars',
        description: 'High-performance cars designed for speed and handling.',
      },
      {
        id: 2,
        image: 'https://example.com/category-electric.jpg',
        title: 'Electric Cars',
        description: 'Eco-friendly cars powered by electricity with zero emissions.',
      },
      {
        id: 3,
        image: 'https://example.com/category-suvs.jpg',
        title: 'SUVs',
        description: 'Versatile vehicles with extra space and off-road capability.',
      },
      {
        id: 4,
        image: 'https://example.com/category-luxury.jpg',
        title: 'Luxury Cars',
        description: 'Cars that combine performance with unmatched comfort and luxury.',
      },
      {
        id: 5,
        image: 'https://example.com/category-maintenance.jpg',
        title: 'Car Maintenance',
        description: 'Everything you need to know to keep your car in peak condition.',
      },
    ],
  };
  
  const ADD_CATEGORY = 'ADD_CATEGORY';
  const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
  const DELETE_CATEGORY = 'DELETE_CATEGORY';
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      case UPDATE_CATEGORY:
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === action.payload.id ? action.payload : category
          ),
        };
      case DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter((category) => category.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: category,
  });
  
  export const updateCategory = (category) => ({
    type: UPDATE_CATEGORY,
    payload: category,
  });
  
  export const deleteCategory = (id) => ({
    type: DELETE_CATEGORY,
    payload: id,
  });
  
  export default categoryReducer;
  