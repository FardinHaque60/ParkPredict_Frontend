import './DataViz.css';
import '../styles/General.css';
import Chart from '../components/Chart';

function DataViz() {
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
                    Data Visualization
                </h1>
                <Chart garage="North Garage" />
                <Chart garage="West Garage" />
                <Chart garage="South Garage" />
                <div className="return-link">
                    <h2 className="parking-services">
                        <a href="/">
                            Return to dashboard
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default DataViz;