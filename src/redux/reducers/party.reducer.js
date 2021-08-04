const partyReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PARTY':
        return action.payload;
      default:
        return state;
    }
  };
    // playlist will be on the redux state at:
    // state.party
  export default partyReducer;