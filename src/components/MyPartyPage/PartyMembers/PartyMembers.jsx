import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import discordIcon from '../images/discordIcon.png';
import steamIcon from '../images/steamIcon.png'

function PartyMembers(props) {
    // Displays the user's party members they've selected
    const dispatch = useDispatch();
    const history = useHistory();
    const removePartyMember = () => {
        dispatch({type: 'DELETE_FROM_PARTY', payload: props.userId});
    }
    return(
        <section className="nes-container with-title partyResult"  >
            <section className="title" onClick={() => history.push(`/user/${props.userId}`)}>
                <img className="nes-avatar is-rounded is-large avatar" src={props.avatar} />
                <span className='nes-text is-primary profileName'>{props.username}</span>
            </section>
            <button className="nes-btn is-warning selectorBtn" id={props.userId} onClick={removePartyMember} ><i className="nes-icon close is-small"></i></button>
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

export default PartyMembers;