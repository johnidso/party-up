

function SearchResult (props){
    return(
        <section className="nes-container" >
            <img className="nes-avatar is-rounded is-large" src={props.avatar} />
            <p>{props.username}</p>
        </section>
    )
}

export default SearchResult;