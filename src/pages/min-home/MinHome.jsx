/* minimal home display for initial load, just shows predicted values */
import '../styles/HomeStyles.css';
import TopBar from '../components/TopBar';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PredictObj } from '../../service/ResponseObjs';
import { fetchPredictions, fetchQuickPredictions } from '../../service/Api';
import { DateTime } from 'luxon';
import { FaArrowRight, FaEdit, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

function MinHome() {
    const [predictionTime, setPredictionTime] = useState(DateTime.now().setZone("America/Los_Angeles"));
    const [predictions, setPredictions] = useState(PredictObj);
    // State for edit icon, check, x icon, etc.
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editableTime, setEditableTime] = useState(predictionTime.toFormat('HH:mm'));

    useEffect(() => {
        fetchQuickPredictions(predictionTime, setPredictionTime, setPredictions, setIsLoading);
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleConfirm = async () => {
        setIsLoading(true);
        await fetchPredictions(editableTime, setPredictionTime, setPredictions, setIsLoading);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

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

                <p className="timestamp">
                    Showing Predictions for {predictionTime.toFormat('yyyy-M-dd')}&nbsp;
                    {isEditing ? (
                    <span> 
                        <input
                            type="time"
                            value={editableTime}
                            onChange={(e) => setEditableTime(e.target.value)}
                            autoFocus
                        />
                        <span className="icon-group">
                            {isLoading ?  (
                            <span className="spinner-container">
                                <FaSpinner className="spinner" />
                            </span>
                            ) : (
                            <>
                                <FaCheck className="icon confirm-icon" onClick={handleConfirm} />
                                <FaTimes className="icon cancel-icon" onClick={handleCancel} />
                            </>
                            )}
                        </span>
                    </span>
                    ) : (
                    <>
                        {predictionTime.toFormat('h:mm:ss a')}
                        {isLoading ? (
                        <span className="spinner-container">
                            <FaSpinner className="spinner" />
                        </span>
                        ) : (
                            <FaEdit className="icon edit-icon" onClick={handleEdit } />
                        )}
                    </>
                    )}
                </p>
                <div className="garage">
                    <p></p>
                    <h2 className="garage__name">South Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/377 S. 7th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            377 S. 7th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{Math.floor(predictions["South Garage"])} %</span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">West Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/350 S. 4th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            350 S. 4th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{Math.floor(predictions["West Garage"])} %</span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">North Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/65 S. 10th St., San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            65 S. 10th St., San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">{Math.floor(predictions["North Garage"])} %</span>
                    </p>
                    <p></p>

                    <h2 className="garage__name">South Campus Garage</h2>
                    <p className="garage__text">
                        <a className="garage__address" href="https://www.google.com/maps/place/1278 S. 10th Street, San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                            1278 S. 10th Street, San Jose, CA 95112
                        </a>
                        <span className="garage__fullness">N/A</span>
                    </p>
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
        </div>
    );
}

export default MinHome;