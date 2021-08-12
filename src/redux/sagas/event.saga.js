import axios from 'axios';
import { takeEvery, put, call } from '@redux-saga/core/effects';

function* eventSaga() {
    yield takeEvery('GET_EVENTS', getEvents);
    yield takeEvery('ADD_EVENT', addEvent);
    yield takeEvery('DELETE_EVENT', deleteEvent);
  }

// Get events to display users schedule
function* getEvents() {
    try {
      const event = yield axios.get('/api/event');
      yield put({type: 'SET_EVENTS', payload: event.data})
    } catch (error) {
      console.log('Get user events error', error);
    }
  }

function* addEvent (action) {
    try {
        yield call(axios.post, '/api/event', action.payload);
        yield put({type:'GET_EVENTS'});
    } catch (error){
        console.log('Error adding new event', error);
    }
}

function* deleteEvent(action) {
    try {
        yield axios.delete(`/api/event/${action.payload}`);
        yield put({type: 'GET_EVENTS'});
    } catch (error) { 
        console.log('Error deleting event', error);
    }
}

  export default eventSaga;