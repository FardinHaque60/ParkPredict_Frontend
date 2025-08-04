// TODO make requests to cron job to get live fullness data and add tool tips
/* regular home view with live fullness and predictions */
import './Home.css';
import '../styles/HomeStyles.css';
import TopBar from '../components/TopBar';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuickPredictions, fetchPredictions } from '../../service/Api';
import { FaArrowLeft, FaEdit, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';
import { PredictObj } from '../../service/ResponseObjs';
import { DateTime } from 'luxon';

function Home() {
    const [predictionTime, setPredictionTime] = useState(DateTime.now().setZone("America/Los_Angeles"));
    const [predictions, setPredictions] = useState(PredictObj);
    // state for editing time
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editableTime, setEditableTime] = useState(predictionTime.toFormat('HH:mm'));

    const getLiveFullness = async () => {
        // TODO make request to backend/database to get live scraped data
    };

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
            {/* main content */}
            <div className="wrap">
                <h1 className="parking-title">
                    Parking Garage Fullness 
                    <Link className="arrow-link" to="/"><FaArrowLeft /></Link>
                </h1>
                {/* column headers */}
                <div className="garages__header">
                    <div>
                        <h2 className="header-links">
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
                        <p className="column__name">Fullness at <b>6:28 AM</b></p>
                        <p className="column__name">
                            Fullness at&nbsp;
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
                                <b>{predictionTime.toFormat('h:mm a')}</b>
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
                            <span className="garage__percentage">
                                {}
                                {Math.floor(predictions["South Garage"])} %
                            </span>
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
                            <span className="garage__percentage">{Math.floor(predictions["West Garage"])} %</span>
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
                            <span className="garage__percentage">{Math.floor(predictions["North Garage"])} %</span>
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