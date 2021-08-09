import axios from 'axios';
import { takeLatest, put } from '@redux-saga/core/effects';

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('UPDATE_USER', updateUser);
  yield takeLatest('GET_MEMBERS', getMembers);
}

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* updateUser(action) {
  try {
    yield axios.put('/api/user', action.payload);
    yield put({type: 'FETCH_USER'});
  } catch (error) {
    console.log('Saga: error updating user profile', error);
  }
}

function* getMembers() {
  try{
    const response = yield axios.get('/api/member');
    yield put({type:'SET_MEMBERS', payload:response.data});
  } catch (error) {
    console.log('Saga: error getting members', error);
  }
}

export default userSaga;
