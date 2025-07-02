import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="main-container">
            {/* Meta tags and links should be placed in index.html or managed with react-helmet */}
            <header className="sjsu-header u-bg--dark" role="banner">
                <div className="wrap">
                    <a className="sjsu-title" href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                        SJSU
                    </a>
                </div>
            </header>

            <span className="sjsu-gradientbar"></span>
            <main className="sjsu-main"></main>
            <div className="wrap">
                <h1 className="parking-title">
                    Parking Garage Fullness
                </h1>
                <h2 className="parking-services">
                    <a href="https://www.sjsu.edu/parking/index.php" target="_blank" rel="noopener noreferrer">
                        Parking Services
                    </a>
                </h2>
                <p className="timestamp">
                    Last updated 2025-2-14 6:28:00 AM
                    <Link className="btn btn-primary" to="/GarageStatusPlain" style={{ width: "100%" }}>
                        Refresh
                    </Link>
                </p>
                <div className="garage">
                    <h2 className="garage__name">South Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/377 S. 7th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            377 S. 7th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">34 %</span>
                    </p>

                    <h2 className="garage__name">West Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/350 S. 4th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            350 S. 4th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">13 %</span>
                    </p>

                    <h2 className="garage__name">North Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/65 S. 10th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            65 S. 10th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">5 %</span>
                    </p>

                    <h2 className="garage__name">South Campus Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/1278 S. 10th Street, San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            1278 S. 10th Street, San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">0 %</span>
                    </p>
                </div>
                <h2>Parking Shuttles</h2>
                <p className="u-lift">
                    During Fall and Spring semesters, parking shuttles run regularly from parking lots to campus.
                </p>
                <p>
                    <a href="https://sjsu.transloc.com/routes" target="_blank" rel="noopener noreferrer">
                        Realtime Shuttle Location
                    </a>
                </p>
                <p>
                    <a href="https://www.sjsu.edu/parking/help/shuttle.php" target="_blank" rel="noopener noreferrer">
                        SJSU Shuttle Information
                    </a>
                </p>
            </div>
            <br />
            <div className="row">
                <div className="form-group"></div>
            </div>
            {/* Scripts and <body> tags are not used in React components */}
            {/* Navbar and alert placeholders */}
            <div className="container"></div>
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/"></a>
                    </div>
                </div>
            </div>
            <div className="alert alert-dismissable"></div>
        </div>
    );
}

export default Home;