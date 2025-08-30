import { fetchData } from '../../service/Api';
import { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
    TimeScale,
    TimeSeriesScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import zoomPlugin from 'chartjs-plugin-zoom';
import { DateTime } from 'luxon';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Register all the necessary components for Chart.js
ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
    TimeScale,
    TimeSeriesScale,
    zoomPlugin
);

function Chart({ garage }) {
    const GARAGE_NAME = garage; // TODO update to passed variable
    const [actualData, setActualFullness] = useState({
        label: 'Actual Data',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        showLine: true,
    });
    const [predictionData, setPredictionData] = useState({
        label: 'Prediction Data',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        showLine: true,
    });

    const [datasetVisibility, setDatasetVisibility] = useState({
        realData: true,
        predictionData: true,
    });
    const [chartData, setChartData] = useState({ datasets: [] });
    const [currentDay, setCurrentDay] = useState(DateTime.now().setZone("America/Los_Angeles"));

    const fetchDataForDate = async (date) => {
        try {
            const response = await fetchData(GARAGE_NAME, date.toFormat("yyyy-M-d"));
            const actual_data = response.data.actual_data;
            const predicted_data = response.data.prediction_data;
            const formattedActualData = actual_data.map(entry => ({
                x: new Date(entry.timestamp),
                y: entry.fullness
            }));
            setActualFullness(prev => ({
                ...prev,
                data: formattedActualData
            }));
            setDatasetVisibility((prevState) => ({
                ...prevState,
                ["realData"]: true,
            }));

            const formattedPredictonData = predicted_data.map(entry => ({
                x: new Date(entry.timestamp),
                y: entry.fullness
            }));
            setPredictionData(prev => ({
                ...prev,
                data: formattedPredictonData
            }));
            setDatasetVisibility((prevState) => ({
                ...prevState,
                ["predictionData"]: true,
            }));
        } catch (error) {
            console.error("Error fetching initial data:", error);
        }
    };

    useEffect(() => {
        fetchDataForDate(currentDay);
    }, []);

    useEffect(() => {
        const visibleDatasets = [];
        if (datasetVisibility.realData) {
            visibleDatasets.push(actualData);
        }
        if (datasetVisibility.predictionData) {
            visibleDatasets.push(predictionData);
        }
        setChartData({ datasets: visibleDatasets });
    }, [datasetVisibility]);


    // handle checkbox toggle
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setDatasetVisibility((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handlePrevDay = () => {
        setCurrentDay(prevDay => prevDay.minus({ days: 1 })); // update display date
        fetchDataForDate(currentDay.minus({ days: 1 })); // update chart data
    };

    const handleNextDay = () => {
        setCurrentDay(prevDay => prevDay.plus({ days: 1 }));
        fetchDataForDate(currentDay.plus({ days: 1 }));
    };

    // define chart minX and maxX
    const minX = currentDay.set({ hour: 6, minute: 0, second: 0, millisecond: 0 }).toJSDate();
    const maxX = currentDay.set({ hour: 23, minute: 0, second: 0, millisecond: 0 }).toJSDate();

    const options = {
        scales: {
            x: {
                type: 'time', 
                time: { unit: 'hour', tooltipFormat: 'MMM d, h:mm a', displayFormats: { hour: 'h:mm a' }},
                title: { display: true, text: 'Timestamp' },
            },
            y: { title: { display: true, text: 'Fullness (%)' } },
        },
        plugins: {
            title: { 
                display: true, 
                text: `${GARAGE_NAME} Actual vs. Predicted Fullness`,
                font: { size: 16 }
            },
            zoom: { 
                pan: { 
                    enabled: true, 
                    mode: 'xy',
                }, 
                zoom: { 
                    wheel: { enabled: true }, 
                    pinch: { enabled: true },
                    mode: 'xy',
                },
                limits: {
                  x: { min: minX, max: maxX },
                  y: { min: 0, max: 110 },
                },
            },
            legend: { display: false }
        },
    };
    return (
        <div>
            {/* chart render */}
            {chartData.datasets && chartData.datasets.length > 0 && chartData.datasets.some(ds => ds.data && ds.data.length > 0) ? (
                <Scatter data={chartData} options={options}/>
            ) : (
                <p style={{ textAlign: 'center', margin: '2rem 0' }}>No data for this date, try another day.</p>
            )}
            {/* chart controls */}
            <div className="chart-controls">
                {/* date selection */}
                <div className="date-toggle">
                    <FaArrowLeft className="data-icon right-left-arrows" onClick={handlePrevDay} />
                    <p style={{ textAlign: 'center' }}>{currentDay.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <FaArrowRight className="data-icon right-left-arrows" onClick={handleNextDay} />
                </div>

                {/* checkboxes */}
                <div className="checkbox-group">
                    <p className="actual-checkbox">
                        <input
                            className="data-icon"
                            type="checkbox"
                            name="realData"
                            checked={datasetVisibility.realData}
                            onChange={handleCheckboxChange}
                        />
                        Show Actual Fullness
                    </p>
                    <p className="predicted-checkbox">
                        <input
                            className="data-icon"
                            type="checkbox"
                            name="predictionData"
                            checked={datasetVisibility.predictionData}
                            onChange={handleCheckboxChange}
                        />
                        Show Predicted Fullness
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Chart;