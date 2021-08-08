import { useSelector } from "react-redux";
import { useState } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";


function LibraryList() {
    const library = useSelector(store => store.library);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    let emptySearch = '';

    const handleChange = event => {
        const value = event.target.value;
        setSearch(value);
    }

    const searchLibrary = (searchTerm) => {
        let search = searchTerm.toUpperCase();
        let results = [];
        for (let game of library) {
            let gameName =  game.name.toUpperCase();
            if (search && gameName.includes(search)) {
                results.push(game);
            }
        }
        setSearchResults(results);
        console.log(results);
    }

    const handleSearch = () => {
        searchLibrary(search);
        setSearch(emptySearch);
    }

    const clearSearch = () => {
        setSearchResults([]);
    }

    return(
        <section>
            <h1>My Library</h1>
            <section id='searchSection'>
            <input type="text" id="searchIn" value={search} className="nes-input" placeholder="search games" onChange={handleChange}></input>
            <button className="nes-btn" id="clearButton" onClick={clearSearch}>Clear</button>
            <button className="nes-btn" id="searchButton" onClick={handleSearch}>Search</button>
            {searchResults.map(game => {                
                return (
                    <LibraryItem key={game.appid} gameId={game.appid} img={game.img_logo_url} />
                )                
            })}
            </section>
            <h1>Recently Played</h1>
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