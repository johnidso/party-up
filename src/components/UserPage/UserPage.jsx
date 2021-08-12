import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import './UserPage.css';
import steamIcon from '../MyPartyPage/images/steamIcon.png';
import discordIcon from '../MyPartyPage/images/discordIcon.png';


function UserPage () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(store => store.otherUser);
    const playlist = useSelector(store => store.memberPlaylist)
    const history = useHistory();

    useEffect(() => {
        dispatch({type:'GET_USER_BY_ID', payload: id})
    }, []);

    return (
        <section className="contentWrapper">
            <section id="greeting" className="message-list">
                <img id="greetingImg" className="nes-avatar is-rounded is-large" src={user.avatar} />
                <section id="greetingMessage" className="nes-balloon from-left">
                    <p>Hello there!</p>
                </section>
            </section>
            <p>{user.username} is playing...</p>
            {playlist.map(game => {
                return(
                    <section
                        className="nes-container playlistItem"
                        key={game.id}
                        style={{ 
                        backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${game.game_id}/${game.image}.jpg")` 
                        }}
                    >
                        <button className="nes-btn is-primary selectorBtn" onClick={() => history.push(`/event/new/${id}/${user.username}/${game.game_id}/${game.image}/`)}>Party Up!</button>
                    </section>
                )
            })}
                <section className="nes-container with-title is-centered infoWrapper">
                    <p className='title'>Accounts</p>
                    <a href={user.profile_url}>
                        <img className="platformIcon" src={steamIcon} />
                        <span id="steamPersona">{user.persona}</span>
                    </a>
                    
                    <br></br>
                    <img className="platformIcon" src={discordIcon} />
                    <span>{user.discord_id}</span>
                </section>
        </section>
    )
}

export default UserPage;