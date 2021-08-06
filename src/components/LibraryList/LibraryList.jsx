import { useSelector } from "react-redux";
import { useState } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";


function LibraryList() {
    const library = useSelector(store => store.library);
    const [search, setSearch] = useState('');
    let emptySearch = '';

    const handleChange = event => {
        const value = event.target.value;
        setSearch(value);
    }

    return(
        <section>
            <h1>My Library</h1>
            <section id='searchSection'>
            <input type="text" id="searchIn" value={search} className="nes-input" placeholder="search games" onChange={handleChange}></input>
            <button className="nes-btn" id="searchButton" >Search</button>
            </section>
            {library.map(game => {
                if (game.playtime_2weeks) {
                    return (
                        <LibraryItem key={game.appid} gameId={game.appid} img={game.img_logo_url} />
                    )
                } 
            })}
        </section>
    )
}

export default LibraryList;