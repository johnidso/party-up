import { useParams } from "react-router-dom"


function CreateEvent() {
    const { attendeeId, attendeeName, gameId, gameImage } = useParams();
    return(
        <>
            <h2>New Event with {attendeeName}:</h2>
            <input className="nes-input"></input>
        </>
    )
}

export default CreateEvent;