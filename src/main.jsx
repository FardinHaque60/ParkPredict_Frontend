import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import './index.css'
import Home from './pages/home/Home'
import MinHome from './pages/min-home/MinHome'
import DataViz from './pages/data_viz/DataViz'
import Policy from './pages/sms_policy/Policy'
import About from './pages/about/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MinHome />} />
        <Route path="/alt-home" element={<Home />} />
        <Route path="/data-viz" element={<DataViz />} />
        <Route path="/sms-policy" element={<Policy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Analytics />
  </StrictMode>
)
