import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';


const CustomPlayer = () => {

    const track = useSelector((store) => store.track.selected)

    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <div className="col-lg-10 offset-lg-2">
                    <Row className="h-100 d-flex align-items-center">
                        <Col lg={1}>
                            <div className='imagePlayer'>
                                <img src={track.album.cover_medium} alt='pic' />
                            </div>
                        </Col>
                        <Col lg={3} className='text-light'>
                            <div>
                                <p> {track.artist.name}</p>
                            </div>
                            <div>
                                <p> {track.title}</p>
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