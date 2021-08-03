import { useSelector } from "react-redux";
import LibraryItem from "../LibraryItem/LibraryItem";


function LibraryList() {
    const library = useSelector(store => store.library);

    // const handleClick = () => {
    //     console.log(library.response.games);
    // }
    return(
        <section>
            <p>My Library</p>
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