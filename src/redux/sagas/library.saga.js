import axios from "axios";
import { takeEvery, put } from "@redux-saga/core/effects";

function* librarySaga () {
    yield takeEvery('GET_GAMES', fetchGames);
}
 
function* fetchGames() {
    // get all of a user's games from the Steam API
    try {
        const library = yield axios.get('/api/games');
        yield put({ type: 'SET_GAMES', payload: library.data.response.games });
        // yield console.log(library.data.response.games);
    } catch (err) {
        console.log('Error getting user games', err);
    }
}

export default librarySaga;