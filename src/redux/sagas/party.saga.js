import axios from 'axios';
import { takeEvery, put, call } from '@redux-saga/core/effects';

function* partySaga() {
    yield takeEvery('GET_PARTY', getParty);
    yield takeEvery('ADD_TO_PARTY', addToParty);
    yield takeEvery('DELETE_FROM_PARTY', deleteFromParty)
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

function* deleteFromParty (action) {
  try {
    yield axios.delete(`/api/party/${action.payload}`);
    yield put({type: GET_PARTY});
  }catch (error) {
    console.log('Saga: error removing party member', error);
  }
}


  export default partySaga;