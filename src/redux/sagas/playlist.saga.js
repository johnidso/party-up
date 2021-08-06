import axios from "axios";
import { takeEvery, put, call} from "@redux-saga/core/effects";

function* playlistSaga () {
    yield takeEvery('ADD_PLAYLIST_GAME', addPlaylistGame);
    yield takeEvery('GET_PLAYLIST', getPlaylist);
    yield takeEvery('DELETE_PLAYLIST_GAME', deletePlaylistGame)
}
 
function* addPlaylistGame(action) {
    try {
        yield call(axios.post, '/api/playlist', action.payload);
        yield put({type:'GET_PLAYLIST'})
    } catch (err) {
        console.log('Error adding playlist item', err);
    }
}

function* getPlaylist() {
    try {
        const playlist = yield axios.get('/api/playlist');
        yield put({ type: 'SET_PLAYLIST', payload: playlist.data });
    } catch (err) {
        console.log('Error getting user playlist', err);
    }
}

function* deletePlaylistGame(action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/playlist/${action.payload}`);
        yield put({type:'GET_PLAYLIST'});
    } catch (err) {
        console.log('Error deleting playlist item', err);
    }
}

export default playlistSaga;