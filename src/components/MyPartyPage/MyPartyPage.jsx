import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResult/SearchResult";
import PartyMembers from "./PartyMembers/PartyMembers";

function MyPartyPage() {
    const dispatch = useDispatch();
    const userResults = useSelector(store => store.userDisplay);
    const party = useSelector(store => store.party);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch({type:'GET_PARTY'});
    }, []);

    const searchUsers = (event) => {
        event.preventDefault();
        dispatch({type:'GET_USERS', payload: searchQuery});
        setSearchQuery('');
    }

    const handleChange = (event) =>{
        setSearchQuery(event.target.value);
    }

    return(
        <>
            <h2>My Party</h2>
            {party.map(partyMember => {
                return (
                    <PartyMembers key={partyMember.friend_id} userId={partyMember.friend_id} username={partyMember.username} avatar={partyMember.avatar} />
                )
            })}
            <h2>Search Users</h2>
            <input className="nes-input" value={searchQuery} placeholder="search username" onChange={handleChange}></input>
            <button className="nes-btn is-primary" onClick={searchUsers}>Search</button>
            {userResults.map(user => {
                return (
                    <SearchResult key={user.id} userId={user.id} username={user.username} avatar={user.avatar} />
                )
            })}
        </>
    )
}

export default MyPartyPage;