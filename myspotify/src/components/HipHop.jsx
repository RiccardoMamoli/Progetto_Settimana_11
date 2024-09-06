import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fillMusicSection } from "../redux/actions";
import SingleSong from "./SingleSong";

const HipHop = () => {

    const tracks = useSelector((store) => store.singleArtist.rap)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fillMusicSection('Eminem' , 'DO_FETCH_RAP'))
    }, [dispatch])


    return (
        <div className="col-10">
            <div id="hiphop">
                <h2>#HipHop</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection">
                    {
                         tracks.slice(0, 4).map((track, index) => (
                            <SingleSong key={index} track={track} />
                        ))}
                </div>
            </div>
        </div>
    )

}

export default HipHop;