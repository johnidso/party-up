const libraryReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GAMES':
        return action.payload;
      default:
        return state;
    }
  };
    // library will be on the redux state at:
    // state.library
  export default libraryReducer;