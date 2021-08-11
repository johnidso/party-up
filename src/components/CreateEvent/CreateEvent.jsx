import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState, useEffect } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { useHistory, useParams } from "react-router-dom";
import './CreateEvent.css';
import { useDispatch } from 'react-redux';

function CreateEvent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(date);
    const { attendeeId, attendeeName, gameId, gameImg } = useParams();
    const emptyEvent = {attendeeId: '', eventDateTime: '', playlistId: ''};
    const [newEvent, setNewEvent] = useState(emptyEvent);
    
    useEffect(() => {
        setNewEvent({
            ...newEvent, ['attendeeId']: attendeeId, ['playlistId']: gameId, ['eventDateTime']: selectedDate
        });
    }, [selectedDate]);

    const createEvent = () => {
        console.log(attendeeId, gameId, selectedDate);
        dispatch({type:'ADD_EVENT', payload: newEvent});
        history.push('/schedule');
    }

    

    return(
        <section className="contentWrapper">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
            <h1>New Event!</h1>
            <section className="nes-container with-title">
                <p className="title" onClick= {()=>console.log(newEvent)}>Game Time</p>
                <DateTimePicker
                    disablePast
                    className="datePicker"
                    inputVariant="standard"
                    value={selectedDate}
                    onChange={setSelectedDate}
                />
            </section>
            <section
                        className="nes-container with-title playlistItem"
                        style={{ 
                        backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${gameId}/${gameImg}.jpg")` 
                        }}
                    >
                        <p className="title">Playing</p>
                    </section>
            <section className="nes-container with-title playlistItem">
                <p className="title">In your party</p>
                <p className="nes-text is-primary">{attendeeName}</p>
            </section>
            <button className="nes-btn" onClick={()=>history.goBack()}>Back</button>
            <button className="nes-btn is-primary" id="inviteBtn" onClick={createEvent}>Invite!</button>
        

            
            </MuiPickersUtilsProvider>
        </section>
    )
}

export default CreateEvent;