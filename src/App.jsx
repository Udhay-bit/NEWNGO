import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NGOList from './components/NGOList'
import Admin from './components/Admin'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<NGOList />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
