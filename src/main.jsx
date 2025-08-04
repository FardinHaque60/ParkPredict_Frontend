import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import MinHome from './pages/min-home/MinHome'
import DataViz from './pages/data_viz/DataViz'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MinHome />} />
        <Route path="/alt-home" element={<Home />} />
        <Route path="/data-viz" element={<DataViz />} />
      </Routes>
    </Router>
  </StrictMode>
)
