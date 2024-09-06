import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH, fillMusicSection } from "../redux/actions";
import { useState } from "react";


const CustomSidebar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            dispatch(fillMusicSection(searchTerm, SEARCH));
            setSearchTerm('');
            navigate('/search-results');
        }
    };


    return (
        <aside className="col col-2">
            <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
                <div className="container flex-column align-items-start">
                    <Link className="navbar-brand" to={'/'}>
                        <img
                            src="/assets/logo/logo.png"
                            alt="Spotify Logo"
                            width="131"
                            height="40"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul className="ps-0">
                                <li>
                                    <Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        to={'/'}
                                    >
                                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        to={'/library'}
                                    >
                                        <i className="bi bi-book-fill"></i>&nbsp; Your Library
                                    </Link>
                                </li>
                                <li>
                                    <form className="input-group mt-3" onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary btn-sm h-100"
                                                type="submit"
                                            >
                                                GO
                                            </button>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav-btn">
                    <button className="btn signup-btn" type="button">Sign Up</button>
                    <button className="btn login-btn" type="button">Login</button>
                    <a href="#void">Cookie Policy</a> |
                    <a href="#void"> Privacy</a>
                </div>
            </nav>
        </aside>
    );
}

export default CustomSidebar;
