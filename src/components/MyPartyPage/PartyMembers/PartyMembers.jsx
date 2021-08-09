import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function PartyMembers(props) {
    const history = useHistory();
    // component item for party display
    return(
        <section className="nes-container partyResult" onClick={() => history.push(`/user/${props.userId}`)} >
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            <p>{props.username}</p>
        </section>
    )
}

export default PartyMembers;