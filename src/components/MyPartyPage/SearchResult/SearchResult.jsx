import { useDispatch } from "react-redux";

// displays users returned in the search results from MyPartyPage.jsx
function SearchResult (props){
    const dispatch = useDispatch();
    const friendId = props.userId;
    const addToParty = () => {
        dispatch({type:'ADD_TO_PARTY', payload: friendId});
    }
    return(
        <section className="nes-container with-title searchResult" >
            <p className="title">{props.username}</p>
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            <button className="nes-btn is-success" onClick={addToParty}>+</button>
        </section>
    )
}

export default SearchResult;