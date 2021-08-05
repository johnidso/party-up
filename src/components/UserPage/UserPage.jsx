import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function UserPage () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(store => store.otherUser);
    const playlist = useSelector(store => store.memberPlaylist)

    useEffect(() => {
        dispatch({type:'GET_USER_BY_ID', payload: id})
    }, []);

    return (
        <>
            {playlist.map(game => {
                return(
                    <section
                        className="nes-container playlistItem"
                        key={game.id}
                        style={{ 
                        backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${game.game_id}/${game.image}.jpg")` 
                        }}
                    >
                        <button className="nes-btn is-warning"><i className="nes-icon close is-small"></i></button>
                    </section>
                )
            })}
        </>
    )
}

export default UserPage;