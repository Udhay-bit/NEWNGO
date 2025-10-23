import React from 'react'

const NGOCard = ({ ngo }) => {
  return (
    <div className="card ngo-card">
      <h3>{ngo.name || 'Unnamed'}</h3>
      <span className="badge">{ngo.category || 'Uncategorized'}</span>
      <p>{ngo.description || ''}</p>
      
      {(ngo.website || ngo.donationLink) && (
        <div className="row">
          {ngo.website && (
            <a 
              href={ngo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              Website
            </a>
          )}
          {ngo.donationLink && (
            <a 
              href={ngo.donationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn primary"
            >
              Donate
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default NGOCard
