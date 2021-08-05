const memberPlaylistReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEMBER_PLAYLIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.memberPlaylist
  export default memberPlaylistReducer;