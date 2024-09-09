import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavAction, addToFavAction } from '../redux/actions';


const CustomPlayer = () => {

    const dispatch = useDispatch()
    const track = useSelector((store) => store.track.selected)
    const image = track ? track.album.cover_medium : '';
    const nameArtist = (track && track.artist) ? track.artist.name : '';
    const nameSong = (track && track.title) ? track.title : '';
    const likedTracks = useSelector((store) => store.liked.fav)
    const isFav = track && likedTracks.find((FavTrack) => FavTrack.id === track.id)





    return (
        <Container fluid className="fixed-bottom bg-container">
            <Row className="h-100">
                <div className="col-lg-10 offset-lg-2">
                    <Row className="h-100 d-flex align-items-center">
                        <Col lg={1}>
                            <div className='imagePlayer'>
                                {
                                    track ? (
                                        <img src={image} alt='pic' />

                                    ) : (
                                        <div className='w-100 h-100 bg-dark'>

                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                        <Col lg={2} className='text-light'>
                            <div>
                                <p> {nameArtist}</p>
                            </div>
                            <div>
                                <p> {nameSong}</p>
                            </div>
                        </Col>
                        <Col lg={1} className='text-light'>
                            <div className='addIcon'>

                                <i className={isFav ? "bi bi-check-circle" : 'bi bi-plus-circle'} onClick={() => {

                                    isFav ?
                                        dispatch(removeFromFavAction(track))
                                        :
                                        dispatch(addToFavAction(track))

                                }}></i>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 playerControls">
                            <div className="d-flex">
                                <a href="#void">
                                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                                </a>
                                <a href="#void">
                                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                                </a>
                                <a href="#void">
                                    <img src="assets/playerbuttons/play.png" alt="play" />
                                </a>
                                <a href="#void">
                                    <img src="assets/playerbuttons/next.png" alt="next" />
                                </a>
                                <a href="#void">
                                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                                </a>
                            </div>

                                <div className="progress mt-3">
                                    <div role="progressbar"></div>
                                </div>

                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default CustomPlayer;