import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterMoment from '@material-ui/lab/AdapterMoment';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import { useParams } from "react-router-dom";


function CreateEvent() {
    const date = new Date();
    const { attendeeId, attendeeName, gameId, gameImage } = useParams();
    return(
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <h2>New Event with {attendeeName}:</h2>
                <input className="nes-input" ></input>
                <MobileDateTimePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
            </LocalizationProvider>
    )
}

export default CreateEvent;