const memberReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEMBERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.members
  export default memberReducer;