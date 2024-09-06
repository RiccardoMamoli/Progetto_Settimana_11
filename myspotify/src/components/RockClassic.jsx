import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fillMusicSection } from "../redux/actions";
import SingleSong from "./SingleSong";

const RockClassic = () => {

    const tracks = useSelector((store) => store.singleArtist.rock)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fillMusicSection('Queen', 'DO_FETCH_ROCK'))
    }, [dispatch])


    return (
        <div className="col-10">
            <div id="rock">
                <h2>Rock Classics</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection">
                    {
                        tracks.slice(0, 4).map((track, index) => (
                            <SingleSong key={index} track={track} />
                        ))}
                </div>
            </div>
        </div>
    )

}

export default RockClassic;