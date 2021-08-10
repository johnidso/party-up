import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function PartyMembers(props) {
    const history = useHistory();
    // component item for party display
    return(
        <section className="nes-container with-title partyResult" onClick={() => history.push(`/user/${props.userId}`)} >
            <p className="title">
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            {props.username}</p>
            <section className="imageWrapper">
                
            </section>
            <section className="infoWrapper">

                <span id="steamPersona">{props.steam_persona}</span>
                <br></br>
                <span>Discord:</span>
                <span>{props.discord}</span>
            </section>
            
        </section>
    )
}

export default PartyMembers;