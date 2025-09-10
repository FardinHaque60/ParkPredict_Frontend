// chart component used for 1 dataset per graph
import { fetchSouthCampusGarageData } from '../../service/Api';
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
import { FaArrowLeft, FaArrowRight, FaSpinner, FaInfoCircle } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';

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

function Chart_1({ chartType, graphLabel, y_axis_label }) {
    var ENDPOINT = "south-campus-predictions";
    if (chartType === "southCampusData") {
        ENDPOINT = "south-campus-data";
    }

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        label: 'Actual Data',                        // TODO update
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        showLine: true,
    });

    const [chartData, setChartData] = useState({ datasets: [] });
    const [currentDay, setCurrentDay] = useState(DateTime.now().setZone("America/Los_Angeles"));

    const fetchDataForDate = async (date) => {
        setLoading(true);
        try {
            const response = await fetchSouthCampusGarageData(ENDPOINT, date.toFormat("yyyy-M-d"));
            // ENDPOINT expected to be "south-campus-predictions", "south-campus-data"
            const south_campus_data = response.data.south_campus_data;
            const formattedActualData = south_campus_data.map(entry => ({
                x: new Date(entry.timestamp),
                y: entry.fullness
            }));
            setData(prev => ({
                ...prev,
                data: formattedActualData
            }));
            // Use a useEffect to update chartData after data changes
        } catch (error) {
            console.error("Error fetching initial data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataForDate(currentDay);
    }, []);

    // update chartDate when data is set in above useEffect
    useEffect(() => {
        setChartData({ datasets: [data] });
    }, [data]);

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
                time: { unit: 'hour', tooltipFormat: 'MMM d, h:mm a', displayFormats: { hour: 'h:mm a' } },
                title: { display: true, text: 'Timestamp' },
            },
            y: { title: { display: true, text: `${y_axis_label}` } },
        },
        plugins: {
            title: {
                display: true,
                text: `${graphLabel}`,
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
                    y: { min: -80, max: 110 },
                },
            },
            legend: { display: false }
        },
    };
    return (
        <div>
            {/* chart render */}
            {loading ? (
                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <FaSpinner className="spinner" />
                </div>
            ) : chartData.datasets && chartData.datasets.length > 0 && chartData.datasets.some(ds => ds.data && ds.data.length > 0) ? (
                <Scatter data={chartData} options={options} />
            ) : (
                <p style={{ textAlign: 'center', margin: '2rem 0' }}>No data for this date, try another day.</p>
            )}
            {/* chart controls */}
            <div className="date-toggle-container">
                {/* date selection */}
                <div className="date-toggle">
                    <FaArrowLeft className="data-icon right-left-arrows" onClick={handlePrevDay} />
                    <p style={{ textAlign: 'center' }}>
                        {currentDay.toFormat('cccc, LLL d, yyyy')}
                    </p>
                    <FaArrowRight className="data-icon right-left-arrows" onClick={handleNextDay} />
                </div>
                {chartType === "southCampusPredictions" && 
                    (<p className="info-text">
                        <FaInfoCircle
                            data-tooltip-id="info-tooltip"
                            data-tooltip-content="Negative values represent people at Duncan Hall stop, positive values represent people at Alma Stop."
                        />
                        <ReactTooltip
                            id="info-tooltip"
                            place="bottom-end"
                            effect="solid"
                            style={{ maxWidth: '20em' }}
                        />
                    </p>
                )}
            </div>
            <hr />
        </div>
    )
}

export default Chart_1;