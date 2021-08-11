import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import LibraryList from "./LibraryList/LibraryList";
import './PlaylistPage.css';

function PlaylistPage() {
    const dispatch = useDispatch();
    const playlist = useSelector(store => store.playlist);
    // Dispatch to get all user's steam games from API
    useEffect(() => {
        dispatch({type:'GET_GAMES'});
        dispatch({type:'GET_PLAYLIST'});
    }, []);

    const removeFromPlaylist = (action) => {
        dispatch({type: 'DELETE_PLAYLIST_GAME', payload: action.target.id});
    }

    return(
        <section className="contentWrapper">
            <h1>I'm Playing</h1>
            {(playlist.length===0) &&
                <section className="nes-container" id="emptyPlaylistMessage">
                    Add games to show your friends what you're playing!
                </section>
                }
            {playlist.map(game => {
                return(
                    <section
                        className="nes-container playlistItem"
                        key={game.id}
                        style={{ 
                        backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${game.game_id}/${game.image}.jpg")` 
                        }}
                    >
                        <button className="nes-btn is-warning selectorBtn" id={game.game_id} onClick={removeFromPlaylist}><i className="nes-icon close is-small"></i></button>
                    </section>
                )
            })}

            <LibraryList />
        </section>
    )
}

export default PlaylistPage;