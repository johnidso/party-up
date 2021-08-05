import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";


function UserPage () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(store => store.otherUser);
    const playlist = useSelector(store => store.memberPlaylist)
    const history = useHistory();

    useEffect(() => {
        dispatch({type:'GET_USER_BY_ID', payload: id})
    }, []);

    console.log(playlist);

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
                        <button className="nes-btn is-primary" onClick={() => history.push(`/event/new/${id}/${user.username}/${game.game_id}/${game.image}`)}>Party Up!</button>
                    </section>
                )
            })}
        </>
    )
}

export default UserPage;