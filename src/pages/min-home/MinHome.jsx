/* minimal home display for initial load, just shows predicted values */
import '../styles/HomeStyles.css';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import EditableTime from '../components/EditableTime';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PredictObj } from '../../service/ResponseObjs';
import { fetchQuickPredictions } from '../../service/Api';
import { DateTime } from 'luxon';
import { FaArrowRight } from 'react-icons/fa';
import SouthCampusPrediction from '../components/SouthCampusPrediction';

function MinHome() {
    const [predictionTime, setPredictionTime] = useState(DateTime.now().setZone("America/Los_Angeles"));
    const [predictions, setPredictions] = useState(PredictObj);
    const [isLoading, setIsLoading] = useState(true);
    const [fridayWeekend, setFridayWeekend] = useState(false); // Indicates if the current day is Friday or weekend

    useEffect(() => {
        fetchQuickPredictions(predictionTime, setPredictionTime, setPredictions, setIsLoading);
        const day = predictionTime.weekday;
        setFridayWeekend(day === 5 || day === 6 || day === 7);
    }, []);

    return (
        <div className="main-container">
            <TopBar />
            <div className="wrap">
                <h1 className="parking-title">
                    Parking Garage Fullness
                    <Link className="arrow-link" to="/alt-home"><FaArrowRight /></Link>
                </h1>
                <h2 className="parking-services">
                    <a href="https://www.sjsu.edu/parking/index.php" target="_blank" rel="noopener noreferrer">
                        Parking Services
                    </a>
                    | 
                    <a href="/data-viz">
                        Stats for nerds
                    </a>
                </h2>
                <div className="timestamp manual-p">
                    Showing Predictions for {predictionTime.toFormat('yyyy-M-d')}&nbsp;
                        <EditableTime
                            predictionTime={predictionTime}
                            setPredictionTime={setPredictionTime}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            setPredictions={setPredictions}
                        >
                            <b>{predictionTime.toFormat('h:mm:ss a')}</b>
                        </EditableTime>
                    {fridayWeekend && <div className="o-alert u-color--yellow">
                        <div className="o-alert__panel">
                        </div>
                        <p className="o-alert__title">
                        Prediction Availability
                        </p>
                        <p className="o-alert__text">
                        Predictions are most accurate Monday - Thursday. All garages are generally available on Fridays and weekends, so predictions are not necessary.
                        </p>
                    </div>}
                </div>
                <div className="garage">
                    <p></p>
                    <h2 className="garage__name">South Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/377 S. 7th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            377 S. 7th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{predictions["South Garage"]} %</span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">West Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/350 S. 4th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            350 S. 4th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{predictions["West Garage"]} %</span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">North Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/65 S. 10th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            65 S. 10th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{predictions["North Garage"]} %</span>
                    </p>
                    <p></p>
                    <SouthCampusPrediction />
                    <p></p>
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
            <Footer />
        </div>
    );
}

export default MinHome;