import axios from "axios";
import { takeEvery, put } from "@redux-saga/core/effects";

function* librarySaga () {
    yield takeEvery('GET_GAMES', fetchGames);
}
 
function* fetchGames() {
    // get all of a user's games from the Steam API
    try {
        const games = yield axios.get('/api/games');
        yield console.log(games.data);
        yield put({ type: 'SET_GAMES', payload: games.data });
    } catch (err) {
        console.log('Error getting user games', err);
    }
}

export default librarySaga;