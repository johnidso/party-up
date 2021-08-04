import { useDispatch } from "react-redux";




function SearchResult (props){
    const dispatch = useDispatch();
    const friendId = props.userId;
    const addToParty = () => {
        dispatch({type:'ADD_TO_PARTY', payload: friendId})
        console.log('Dispatching', friendId);
    }
    return(
        <section className="nes-container" >
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            <p>{props.username}</p>
            <button className="nes-btn is-success" onClick={addToParty}>+</button>
        </section>
    )
}

export default SearchResult;