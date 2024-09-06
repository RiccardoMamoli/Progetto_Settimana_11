import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { selectedTrack, addToFavAction, removeFromFavAction } from "../redux/actions";

const SearchResults = () => {
    const searchResults = useSelector((store) => store.searched.result.data) || [];
    const favoriteTracks = useSelector((store) => store.liked.fav) || [];
    const dispatch = useDispatch();

    const isFavorite = (trackId) => {
        return favoriteTracks.some(track => track.id === trackId);
    };

    const handleClick = (track) => {
        dispatch(selectedTrack(track));
    };

    const handleFavoriteToggle = (track) => {
        if (isFavorite(track.id)) {
            dispatch(removeFromFavAction(track));
        } else {
            dispatch(addToFavAction(track));
        }
    };

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
                            <h2>Search Results</h2>
                            <div className="py-3">
                                <div className="boxLiked p-4">
                                    {searchResults.length === 0 ? (
                                        <p>No results found.</p>
                                    ) : (
                                        searchResults.map((track, index) => (
                                            <Row
                                                key={track.id}
                                                className="py-2 text-light library-row"
                                                onClick={() => handleClick(track)}
                                            >
                                                <Col lg={3} className="d-flex align-items-center justify-content-center">
                                                    <p className="me-4"> {index + 1} </p>
                                                    <div className="imageLibrary">
                                                        <img src={track.album.cover_medium} alt={track.title} />
                                                    </div>
                                                </Col>
                                                <Col lg={4} className="d-flex align-items-center justify-content-start">
                                                    <div>
                                                        <p className="fs-4">{track.artist.name}</p>
                                                        <p>{track.title}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={3} className="d-flex align-items-center justify-content-start">
                                                    <p>{track.album.title}</p>
                                                </Col>
                                                <Col lg={2} className="d-flex align-items-center justify-content-center">
                                                    <p>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</p>
                                                    <div className="addIcon d-flex align-items-center ps-3 pt-1">
                                                        <i
                                                            className={`${isFavorite(track.id) ? 'bi bi-check-circle' : 'bi bi-plus-circle'}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleFavoriteToggle(track);
                                                            }}

                                                        ></i>
                                                    </div>
                                                </Col>

                                            </Row>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </main>
        </>
    );
}

export default SearchResults;
