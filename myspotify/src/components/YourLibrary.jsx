import { Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { useDispatch  } from "react-redux";
import { selectedTrack } from "../redux/actions";

const YourLibrary = () => {
    const likedTrack = useSelector((store) => store.liked.fav)
    const dispatch = useDispatch()
    const handleClick = (track) =>{
        dispatch(selectedTrack(track))
    }

    return (
        <>
            <main className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="#void">TRENDING</a>
                        <a href="#void">PODCAST</a>
                        <a href="#void">MOODS AND GENRES</a>
                        <a href="#void">NEW RELEASES</a>
                        <a href="#void">DISCOVER</a>
                    </div>
                </div>

                <Row>
                    <div className="col-10">
                        <div id="rock">
                            <h2> Your Favorite Tracks</h2>
                            <div className="py-3">
                                <div className="boxLiked p-4">
                                    {likedTrack.length === 0 ?



                                        (<p> It's a bit empty here. Don't be shy.</p>)

                                        :

                                        (
                                            likedTrack.map((track, index) => (
                                                <Row className="py-2 text-light library-row" onClick={() => handleClick(track)}>
                                                    <Col lg={3} className="d-flex align-items-center justify-content-center">
                                                        <p className="me-4"> {index + 1} </p>
                                                        <div className="imageLibrary">
                                                            <img src={track.album.cover_medium} alt="img" />
                                                        </div>

                                                    </Col>
                                                    <Col lg={4} className="d-flex align-items-center justify-content-start">
                                                        <div>
                                                            <div>
                                                                <p className="fs-4">{track.artist.name}</p>
                                                            </div>
                                                            <div>
                                                                <p>{track.title}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3} className="d-flex align-items-center justify-content-start">
                                                        <div>
                                                            <div>
                                                                <p>{track.album.title}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={2} className="d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <div>
                                                            <p>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</p>

                                                            </div>
                                                        </div>
                                                    </Col>



                                                </Row>
                                            ))
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

            </main>
        </>
    )

}

export default YourLibrary;