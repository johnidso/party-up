import axios from 'axios';
import { takeEvery, put } from '@redux-saga/core/effects';

function* userDisplaySaga() {
    yield takeEvery('GET_USERS', getUsers);
    yield takeEvery('GET_USER_BY_ID', getUserById)
  }

// GET USERS saga to handle user search requests
function* getUsers(action) {
    const searchQuery = action.payload;
    try {
      const users = yield axios.get(`/api/user/search/?user=${searchQuery}`);
      yield put({type: 'SET_USERS', payload: users.data})
    } catch (error) {
      console.log('Get users search error', error);
    }
  }

  function* getUserById(action) {
    const userId = action.payload;
    try {
      const user = yield axios.get(`/api/user/byId/${userId}`);
      yield put({type: 'SET_USER_BY_ID', payload: user.data[0]})
      yield put({type:'GET_MEMBER_PLAYLIST', payload: user.data[0].steam_id})
    } catch (error) {
      console.log('Get other user by ID error', error);
    }
  }

  export default userDisplaySaga;