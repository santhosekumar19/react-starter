const initialState = {
  posts:[]
}
const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
       case 'GET_POST':
          return { ...state, loading: true };
    case'GET_POSTS' :
           return { ...state, loading: 'loaded', posts : action.json};
       default:
          return state;
     }
  };

export default rootReducer;