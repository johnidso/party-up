import axios from 'axios';
import { takeEvery, put, call } from '@redux-saga/core/effects';

function* partySaga() {
    yield takeEvery('GET_PARTY', getParty);
    yield takeEvery('ADD_TO_PARTY', addToParty);
  }

// GET USERS saga to handle user search requests
function* getParty() {
    try {
      const party = yield axios.get('/api/party');
      yield put({type: 'SET_PARTY', payload: party.data})
    } catch (error) {
      console.log('Get party members search error', error);
    }
  }

function* addToParty (action) {
    try {
        yield call(axios.post, '/api/party', {id: action.payload});
        yield put({type:'GET_PARTY'});
    } catch (error){
        console.log('Error adding new party member', error);
    }
}



  export default partySaga;