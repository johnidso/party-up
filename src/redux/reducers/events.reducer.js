const eventsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EVENTS':
        return action.payload;
      default:
        return state;
    }
  };
    // store will be on the redux state at:
    // state.events
  export default eventsReducer;