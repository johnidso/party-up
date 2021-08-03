import { useDispatch, useSelector } from "react-redux";


function LibraryList() {
    const dispatch=useDispatch();
    const games = useSelector(store => store.games)

    return(
        <section>

        </section>
    )
}