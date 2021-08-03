import axios from "axios";
import { takeEvery } from "redux-saga/effects";


function* librarySaga () {
    yield takeEvery('GET_GAMES', fetchGames);
}

function* fetchGames() {
    // get all of a user's games from the Steam API
    try {
        const games = yield axios.get('/api/games');
    } catch (err) {
        console.log('Error getting user games', err);
    }
}