import axios from 'axios';
import { takeEvery, put } from '@redux-saga/core/effects';

function* memberPlaylistSaga () {
    yield takeEvery('GET_MEMBER_PLAYLIST', getMemberPlaylist);
}

function* getMemberPlaylist(action) {
    try {
        const playlist = yield axios.get(`/api/member/playlist/${action.payload}`);
        yield put({ type: 'SET_MEMBER_PLAYLIST', payload: playlist.data });
    } catch (err) {
        console.log('Error getting member playlist', err);
    }
}

export default memberPlaylistSaga;