import './LibraryItem.css';
import { useDispatch } from 'react-redux';

function LibraryItem(props) {
    const dispatch = useDispatch();
    
    // on + button click, add that game to the user's playlist
    const addToPlaylist = () => {
        console.log(props);
        dispatch({type:'ADD_PLAYLIST_GAME',payload: props})
    }
    return(
        <section
            className="nes-container libraryItem"
            style={{ 
                backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${props.gameId}/${props.img}.jpg")` 
              }}
            >
            <button className="nes-btn is-success selectorBtn" onClick={addToPlaylist}>+</button>
        </section>
    )
}

export default LibraryItem;