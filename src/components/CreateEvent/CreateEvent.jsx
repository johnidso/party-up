import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { useParams } from "react-router-dom";
import './CreateEvent.css';

function CreateEvent() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const { attendeeId, attendeeName, gameId, gameImg } = useParams();

    return(
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
            <h3>New Event!</h3>
            <section className="nes-container with-title">
                <p className="title">Game Time</p>
                <DateTimePicker
                    autoOk
                    disablePast
                    className="datePicker"
                    inputVariant="standard"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </section>
            <section
                        className="nes-container playlistItem"
                        style={{ 
                        backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${gameId}/${gameImg}.jpg")` 
                        }}
                    ></section>
            <section className="nes-container with-title playlistItem">
                <p className="title">In your party</p>
                <p>{attendeeName}</p>
            </section>
            <button className="nes-btn">Back</button>
            <button className="nes-btn is-primary" onClick={() => console.log(selectedDate)}>Invite!</button>
        

            
            </MuiPickersUtilsProvider>
        </>
    )
}

export default CreateEvent;