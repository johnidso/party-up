

const otherUserReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_BY_ID':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.otherUser
  export default otherUserReducer;