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
    const [selectedDate, handleDateChange] = useState(new Date());
    const { attendeeId, attendeeName, gameId, gameImg } = useParams();
    const emptyEvent = {attendeeId: '', eventDateTime: '', playlistId: ''};
    const [newEvent, setNewEvent] = useState(emptyEvent);
    
    console.log(gameId);

    useEffect(() => {
        setNewEvent({
            ...newEvent, ['attendeeId']: attendeeId, ['playlistId']: gameId, ['eventDateTime']: selectedDate
        });
    }, [handleDateChange]);

    const createEvent = () => {
        console.log(attendeeId, gameId, selectedDate);
        dispatch({type:'ADD_EVENT', payload: newEvent});
        console.log('DISPATCHING EVENT:', newEvent);
        history.push('/schedule');
    }

    return(
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
            <h3>New Event!</h3>
            <section className="nes-container with-title">
                <p className="title">Game Time</p>
                <DateTimePicker
                    disablePast
                    className="datePicker"
                    inputVariant="standard"
                    value={selectedDate}
                    onChange={handleDateChange}
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
                <p>{attendeeName}</p>
            </section>
            <button className="nes-btn">Back</button>
            <button className="nes-btn is-primary" onClick={createEvent}>Invite!</button>
        

            
            </MuiPickersUtilsProvider>
        </>
    )
}

export default CreateEvent;