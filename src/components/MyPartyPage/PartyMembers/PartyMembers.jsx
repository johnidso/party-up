import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import discordIcon from '../images/discordIcon.png';
import steamIcon from '../images/steamIcon.png'

function PartyMembers(props) {
    const history = useHistory();
    // component item for party display
    return(
        <section className="nes-container with-title partyResult" onClick={() => history.push(`/user/${props.userId}`)} >
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

export default PartyMembers;