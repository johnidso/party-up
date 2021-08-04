import { useSelector } from "react-redux";


function PartyMembers(props) {
    // component item for party display
    return(
        <section className="nes-container" >
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            <p>{props.username}</p>
        </section>
    )
}

export default PartyMembers;