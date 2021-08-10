import { useDispatch } from "react-redux";
import steamIcon from '../images/steamIcon.png';
import discordIcon from '../images/discordIcon.png';

// displays users returned in the search results from MyPartyPage.jsx
function SearchResult (props){
    const dispatch = useDispatch();
    const friendId = props.userId;
    const addToParty = () => {
        dispatch({type:'ADD_TO_PARTY', payload: friendId});
    }
    return(
        <section className="nes-container with-title searchResult" onClick={() => history.push(`/user/${props.userId}`)} >
            <section className="title">
                <img className="nes-avatar is-rounded is-large avatar" src={props.avatar} />
                <span className='nes-text is-primary profileName'>{props.username}</span>
            </section>
            
            <section className="infoWrapper">
                <img className="platformIcon" src={steamIcon} />
                <span id="steamPersona">{props.steam_persona}</span>
                <br></br>
                <img className="platformIcon" src={discordIcon} />
                <span>{props.discord}</span>
            </section>
            
        </section>
    )
}

export default SearchResult;