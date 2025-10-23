import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="container">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>NGO Directory</h1>
          <p className="subtitle">Discover and support verified NGOs</p>
        </Link>
        <nav>
          <Link to="/" className="nav-link">Browse NGOs</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
