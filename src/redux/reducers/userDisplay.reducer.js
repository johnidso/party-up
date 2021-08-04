const userDisplayReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.userDisplay
  export default userDisplayReducer;
  