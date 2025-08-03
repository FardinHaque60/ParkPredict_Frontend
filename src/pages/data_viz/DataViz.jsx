import './DataViz.css';

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
                    Data Visualization Coming Soon!
                </h1>
                {/* column headers */}
                <div className="garages__header">
                    <div>
                        <h2 className="parking-services">
                            <a href="/">
                                Return to dashboard
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default DataViz;