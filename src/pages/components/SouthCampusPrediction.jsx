import { useEffect, useState } from 'react';
import { fetchSouthCampusPrediction } from '../../service/Api';
import { FaInfoCircle, FaSpinner } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

function SouthCampusPrediction() {
    const [southCampusPredictionInfo, setSouthCampusPredictionInfo] = useState({
            "timestamp": null,
            "people": 50,
            "stop": "N/A" // can be duncan hall or alma stop
        });

    useEffect(() => {
        fetchSouthCampusPrediction()
            .then(data => {
                var people = data.people;
                var stop = "Alma Stop";
                if (people < 0) {
                    people = -people; // make positive
                    stop = "Duncan Hall";
                }
                if (people > 80) {
                    people = 80; // cap at 80 people
                }

                setSouthCampusPredictionInfo({
                    "timestamp": data.timestamp,
                    "people": people,
                    "stop": stop,
                });
            })
            .catch(error => {
                console.error("Error fetching South Campus prediction:", error);
            });
        }, []);

    return (
        <span>
            <hr></hr>
            <p className="timestamp manual-p"> Showing Predictions for
                {southCampusPredictionInfo.timestamp ?
                    <span> {southCampusPredictionInfo.timestamp} </span>
                    :
                    <span> <FaSpinner className="spinner" /> </span>
                }
                <FaInfoCircle
                    data-tooltip-id="info-tooltip"
                    data-tooltip-content="Predicting number of people in line at shuttle stop based on rate of change of garage fullness."
                    className="text-blue-500 cursor-pointer text-xl"
                />

                <Tooltip id="info-tooltip" place="right" effect="solid" />
            </p>
            <h2 className="garage__name beta-flag">
                South Campus Garage Shuttle Line
                <span className="beta-badge">Beta</span>
            </h2>
            <p className="garage__text">
                <a className="garage__address" href="https://www.google.com/maps/place/1278 S. 10th Street, San Jose, CA 95112" target="_blank" rel="noopener noreferrer">
                    1278 S. 10th Street, San Jose, CA 95112
                </a>
                <span className="garage__fullness people-prediction">
                    {southCampusPredictionInfo.people} ppl.
                    <span className="prediction-stop">{southCampusPredictionInfo.stop}</span>
                </span>
            </p>
        </span>
    );
}

export default SouthCampusPrediction;