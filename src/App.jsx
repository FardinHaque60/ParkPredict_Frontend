// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import DataViz from './pages/data_viz/DataViz'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-viz" element={<DataViz />} />
      </Routes>
    </Router>
  )
}

export default App
