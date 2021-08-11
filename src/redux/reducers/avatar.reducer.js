const avatarReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_AVATAR':
        return action.payload;
      default:
        return state;
    }
  };
    // store will be on the redux state at:
    // state.avatar
  export default avatarReducer;