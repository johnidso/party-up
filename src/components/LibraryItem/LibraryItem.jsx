import { useDispatch } from "react-redux"


function LibraryItem(props) {

    return(
        <section 
            className="nes-container"
            style={{ 
                backgroundImage: `url("http://media.steampowered.com/steamcommunity/public/images/apps/${props.gameId}/${props.img}.jpg")` 
              }}
            >
            <button className="nes-btn is-success">+</button>
        </section>
    )
}

export default LibraryItem;