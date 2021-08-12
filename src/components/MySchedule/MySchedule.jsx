import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { parseISO } from "date-fns/fp";
import './MySchedule.css';

function MySchedule() {
    const dispatch=useDispatch();
    const events = useSelector(store => store.events);
    const members = useSelector(store => store.members);
    const {format} = require('date-fns');

    useEffect(() => {
        dispatch({type:'GET_EVENTS'});
        dispatch({type:'GET_MEMBERS'});
    }, []);

    const findUsername = (searchId) => {
        for(let member of members){
            if (member.id == searchId){
                return member.username;
            }
        }
    }

    const deleteEvent = (event) => {
        event.preventDefault();
        dispatch({type:'DELETE_EVENT', payload: event.target.id});
    }

    return(
        <section className="contentWrapper">
            <h1>Upcoming Events</h1>
            {events.map(event => {
                let attendee = findUsername(event.attendee_id);
                return(
                <section key={event.id} className="nes-container eventContainer">
                    <span className="nes-text is-primary">{format(parseISO(event.event_time), 'h:mmaa, MMM d')}</span>
                    <p>with {attendee}</p>
                    <button className="nes-btn is-error eventBtn" id={event.id} onClick={deleteEvent} >Cancel</button>
                    <section 
                        className="nes-container with-title scheduleItem" 
                        style={{ 
                            backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${event.game_id}/${event.image}.jpg")` 
                            }}
                        ></section>
                    
                </section>
                )
            })}
        </section>
    )
}

export default MySchedule;