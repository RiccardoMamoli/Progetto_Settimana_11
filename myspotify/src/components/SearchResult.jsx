import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchResult = () => {

    const searchResults = useSelector((store) => store.searched.results)

    return (
        <>
            <Row>
                <div className="col-10">
                    <div id="rock">
                        <h2> Your Favorite Tracks</h2>
                        <div className="py-3">
                            <div className="boxLiked p-4">

                                <div className="search-results">
                                    <h2>Search Results</h2>
                                    {searchResults && searchResults.length > 0 ? (
                                        <ul>
                                            {searchResults.map((track, index) => (
                                                <li key={index}>
                                                    <img src={track.album.cover_medium} alt={track.title} />
                                                    <p>{track.title} by {track.artist.name}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No results found</p>
                                    )}
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        </>
    )

}

export default SearchResult;