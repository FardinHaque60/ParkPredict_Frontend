import './DataViz.css';
import '../styles/General.css';
import Chart from '../components/Chart';
import Chart_1 from '../components/Chart_1';

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
                <hr></hr>
                <h2 className="south-campus-title"> South Campus Graphs <span className="beta-badge">Beta</span></h2>
                <Chart_1 
                    chartType="southCampusData" 
                    graphLabel="South Campus Garage Fullness" 
                    y_axis_label="Fullness (%)"
                />
                <Chart_1 
                    chartType="southCampusPredictions" 
                    graphLabel="South Campus Garage Predicted Shuttle Line" 
                    y_axis_label="People Count"
                />
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