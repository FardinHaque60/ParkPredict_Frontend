// TODO add footer
import './Home.css';

function Home() {
    return (
        <div className="main-container">
            {/* header */}
            <header className="sjsu-header u-bg--dark" role="banner">
                <div className="wrap">
                    <a className="sjsu-title" href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                        SJSU
                    </a>
                </div>
            </header>
            <span className="sjsu-gradientbar"></span>
            <main className="sjsu-main"></main>
            {/* main content */}
            <div className="wrap">
                <h1 className="parking-title">
                    Parking Garage Fullness
                </h1>
                {/* column headers */}
                <div className="garages__header">
                    <div>
                        <h2 className="parking-services">
                            <a href="https://www.sjsu.edu/parking/index.php" target="_blank" rel="noopener noreferrer">
                                Parking Services
                            </a>
                            | 
                            <a href="/data-viz">
                                Stats for nerds
                            </a>
                        </h2>
                    </div>
                    <div className="columns">
                        {/* TODO add refresh icon */}
                        <p className="column__name">Fullness at <b>6:28 AM</b></p>
                        {/* TODO convert to field and add tooltip */}
                        <p className="column__name">Fullness at <b>9:28 AM</b></p>
                    </div>
                </div>
                {/* start garages */}
                <div className="garage">
                    <p></p>
                    <h2 className="garage__name">South Garage</h2>
                    <p className="garage__section">
                        <a className="garage__address" href="https://www.google.com/maps/place/377 S. 7th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            377 S. 7th St., San Jose, CA 95112
                        </a>
                        <span className="garage__stats">
                            <span className="garage__percentage">34 %</span>
                            <span className="garage__percentage">20 %</span>
                        </span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">West Garage</h2>
                    <p className="garage__section">
                        <a className="garage__address" href="https://www.google.com/maps/place/350 S. 4th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            350 S. 4th St., San Jose, CA 95112
                        </a>
                        <span className="garage__stats">
                            <span className="garage__percentage">34 %</span>
                            <span className="garage__percentage">20 %</span>
                        </span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">North Garage</h2>
                    <p className="garage__section">
                        <a className="garage__address" href="https://www.google.com/maps/place/65 S. 10th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            65 S. 10th St., San Jose, CA 95112
                        </a>
                        <span className="garage__stats">
                            <span className="garage__percentage">34 %</span>
                            <span className="garage__percentage">20 %</span>
                        </span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">South Campus Garage</h2>
                    <p className="garage__section">
                        <a className="garage__address" href="https://www.google.com/maps/place/1278 S. 10th Street, San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            1278 S. 10th Street, San Jose, CA 95112
                        </a>
                        <span className="garage__stats">
                            <span className="garage__percentage">34 %</span>
                            <span className="garage__percentage">N/A</span>
                        </span>
                    </p>
                    <p></p>
                </div>
                {/* end garages */}
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
        </div>
    );
}

export default Home;