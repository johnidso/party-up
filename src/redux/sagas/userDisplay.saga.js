import axios from 'axios';
import { takeEvery, put } from '@redux-saga/core/effects';

function* userDisplaySaga() {
    yield takeEvery('GET_USERS', getUsers);
  }

// GET USERS saga to handle user search requests
function* getUsers(action) {
    const searchQuery = action.payload;
    console.log('In getUsers, logging searchQuery:', searchQuery);
    try {
      const users = yield axios.get(`/api/user/search/?user=${searchQuery}`);
      console.log('USER SEARCH:', users.data);
      yield put({type: 'SET_USERS', payload: users.data})
    } catch (error) {
      console.log('Get users search error', error);
    }
  }

  export default userDisplaySaga;