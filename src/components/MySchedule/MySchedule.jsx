import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function MySchedule() {
    const dispatch=useDispatch();
    const events = useSelector(store => store.events);
    console.log(events);

    useEffect(() => {
        dispatch({type:'GET_EVENTS'});
    }, []);

    return(
        <>
            <h1>Upcoming Events</h1>
            {events.map(event => {
                return(
                <section>
                    <p> at {event.event_time} with User</p>
                    <section 
                        className="nes-container with-title playlistItem" 
                        style={{ 
                            backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${event.game_id}/${event.image}.jpg")` 
                            }}
                        ></section>
                </section>
                )
            })}
        </>
    )
}

export default MySchedule;