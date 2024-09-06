import RockClassic from "./RockClassic"
import PopCulture from "./PopCulture"
import HipHop from "./HipHop"

const Home = () => {

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
                <div className="row">
                    <RockClassic />
                </div>
                <div className="row">
                    <PopCulture />
                </div>
                <div className="row">
                  <HipHop />
                </div>
            </main>
        </>
    )
}

export default Home;
