import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import LibraryList from '../LibraryList/LibraryList';

function PlaylistPage() {
    const dispatch = useDispatch();
    // Dispatch to get all user's steam games from API
    useEffect(() => {
        dispatch({type:'GET_GAMES'});
    }, []);
    return(
        <>
            <p>playlist</p>
            <p>search</p>
            <LibraryList />
        </>
    )
}

export default PlaylistPage;