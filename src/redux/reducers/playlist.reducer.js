const playlistReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PLAYLIST':
        return action.payload;
      default:
        return state;
    }
  };
    // playlist will be on the redux state at:
    // state.playlist
  export default playlistReducer;