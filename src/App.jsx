import { useState } from 'react'
import './App.css'

function App() {
  const [predictionTime, setPredictionTime] = useState('')
  const [predictionResult, setPredictionResult] = useState(null)

  // Dummy garage data
  const garages = [
    {
      name: 'South Garage',
      address: '377 S. 7th St., San Jose, CA 95112',
      link: 'https://maps.google.com/?q=377+S+7th+St,+San+Jose,+CA+95112',
      fullness: 44,
    },
    {
      name: 'West Garage',
      address: '350 S. 4th St., San Jose, CA 95112',
      link: 'https://maps.google.com/?q=350+S+4th+St,+San+Jose,+CA+95112',
      fullness: 18,
    },
    {
      name: 'North Garage',
      address: '65 S. 10th St., San Jose, CA 95112',
      link: 'https://maps.google.com/?q=65+S+10th+St,+San+Jose,+CA+95112',
      fullness: 16,
    },
    {
      name: 'South Campus Garage',
      address: '1278 S. 10th Street, San Jose, CA 95112',
      link: 'https://maps.google.com/?q=1278+S+10th+Street,+San+Jose,+CA+95112',
      fullness: 0,
    },
  ]

  const handlePrediction = (e) => {
    e.preventDefault()
    // Dummy prediction result
    setPredictionResult('Predicted fullness: 35%')
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-title">SJSU</div>
      </header>
      <main className="main-content">
        <section className="fullness-section">
          <h2>Parking Garage Fullness</h2>
          <a href="https://www.sjsu.edu/parking/index.php" target="_blank" rel="noopener noreferrer" className="parking-link">Parking Services</a>
          <div className="last-updated">Last updated 2025-5-30 2:25:00 PM <a href="#" className="refresh-link">Refresh</a></div>
          <div className="garage-list">
            {garages.map((garage) => (
              <div className="garage-row" key={garage.name}>
                <div className="garage-info">
                  <div className="garage-name">{garage.name}</div>
                  <a href={garage.link} target="_blank" rel="noopener noreferrer" className="garage-address">
                    <span role="img" aria-label="location">📍</span> {garage.address}
                  </a>
                </div>
                <div className="garage-fullness">{garage.fullness} %</div>
              </div>
            ))}
          </div>
        </section>
        <section className="prediction-section">
          <h3>Predict Fullness</h3>
          <form onSubmit={handlePrediction} className="prediction-form">
            <label htmlFor="prediction-time">Select Date & Time:</label>
            <input
              type="datetime-local"
              id="prediction-time"
              value={predictionTime}
              onChange={(e) => setPredictionTime(e.target.value)}
              required
            />
            <button type="submit">Get Prediction</button>
          </form>
          {predictionResult && <div className="prediction-result">{predictionResult}</div>}
        </section>
        <section className="shuttle-section">
          <h3>Parking Shuttles</h3>
          <div>During Fall and Spring semesters, parking shuttles run regularly from parking lots to campus.</div>
          <div className="shuttle-links">
            <a href="https://sjsu.transloc.com/routes" target="_blank" rel="noopener noreferrer">Realtime Shuttle Location</a>
            <br />
            <a href="https://www.sjsu.edu/parking/help/shuttle.php" target="_blank" rel="noopener noreferrer">SJSU Shuttle Information</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
