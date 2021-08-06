import axios from 'axios';
import { takeEvery, put, call } from '@redux-saga/core/effects';

function* eventSaga() {
    // yield takeEvery('GET_EVENTS', getEvents);
    yield takeEvery('ADD_EVENT', addEvent);
  }

// GET USERS saga to handle user search requests
// function* getEvents() {
//     try {
//       const event = yield axios.get('/api/event');
//       console.log('EVENTs:', event.data);
//       yield put({type: 'SET_EVENTS', payload: event.data})
//     } catch (error) {
//       console.log('Get user events error', error);
//     }
//   }

function* addEvent (action) {
    try {
        console.log('In addEvent saga', action.payload);
        yield call(axios.post, '/api/event', action.payload);
        // yield put({type:'GET_EVENTS'});
    } catch (error){
        console.log('Error adding new event', error);
    }
}

  export default eventSaga;