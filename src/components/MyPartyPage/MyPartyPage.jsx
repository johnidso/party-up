import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResult/SearchResult";


function MyPartyPage() {
    const dispatch = useDispatch();
    const userResults = useSelector(store => store.userDisplay);
    const [searchQuery, setSearchQuery] = useState('');

    // useEffect(() => {
    //     dispatch({type:'GET_PARTY'});
    // }, []);

    const searchUsers = (event) => {
        event.preventDefault();
        console.log('Dispatching query for', searchQuery);
        dispatch({type:'GET_USERS', payload: searchQuery});
        setSearchQuery('');
    }

    const handleChange = (event) =>{
        setSearchQuery(event.target.value);
        console.log(searchQuery);
    }

    return(
        <>
            <p>My Party</p>
            <input className="nes-input" value={searchQuery} placeholder="search username" onChange={handleChange}></input>
            <button className="nes-btn is-primary" onClick={searchUsers}>Search</button>
            {userResults.map(user => {
                return (
                    <SearchResult key={user.id} username={user.username} avatar={user.avatar} />
                )
            })}
        </>
    )
}

export default MyPartyPage;