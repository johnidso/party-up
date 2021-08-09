import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResult/SearchResult";
import PartyMembers from "./PartyMembers/PartyMembers";
import './MyPartyPage.css';

function MyPartyPage() {
    const dispatch = useDispatch();
    const memberResults = useSelector(store => store.userDisplay);
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
            <h1>My Party</h1>
            {party.map(partyMember => {
                return (
                    <PartyMembers key={partyMember.friend_id} userId={partyMember.friend_id} username={partyMember.username} avatar={partyMember.avatar} />
                )
            })}
            <input className="nes-input" id="searchIn" value={searchQuery} placeholder="search username" onChange={handleChange}></input>
            <button className="nes-btn is-primary" id="searchBtn" onClick={searchUsers}>Search</button>
            {memberResults.map(member => {
                return (
                    <SearchResult key={member.id} userId={member.id} username={member.username} avatar={member.avatar} />
                )
            })}
        </>
    )
}

export default MyPartyPage;