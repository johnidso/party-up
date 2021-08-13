import { useState } from 'react';
import { useDispatch } from 'react-redux';

// component used to display library items across search and recently played 
function LibraryItem(props) {
    const dispatch = useDispatch();
    const [isOnPlaylist, setIsOnPlaylist] = useState(false);
    
    // on + button click, add that game to the user's playlist
    const addToPlaylist = () => {
        console.log(props);
        dispatch({type:'ADD_PLAYLIST_GAME',payload: props})
        setIsOnPlaylist(true);
        props.clearSearch();
    }
    return(
        <section
            className="nes-container playlistItem"
            style={{ 
                backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${props.gameId}/${props.img}.jpg")` 
              }}
            >
            <button className="nes-btn is-success selectorBtn" onClick={addToPlaylist}>
                { isOnPlaylist ? <i className="nes-icon is-small star"></i> : <aside>+</aside> }
            </button>
        </section>
    )
}

export default LibraryItem;