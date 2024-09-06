import {useDispatch} from 'react-redux'
import { selectedTrack } from '../redux/actions';

const SingleSong = ({ track }) => {

    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(selectedTrack(track))
    }

    
    return (
        <div className="col text-center customCard" onClick={handleClick}>
            <img
                className="img-fluid"
                src={track.album.cover_medium}
                alt="track"
            />
            <p>
                Track: "{track.title}"<br />
                Artist: {track.artist.name}
            </p>
        </div>
    )
}

export default SingleSong