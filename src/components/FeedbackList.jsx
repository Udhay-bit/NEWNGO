import React from 'react'

const FeedbackList = ({ feedback }) => {
  return (
    <div className="stack">
      {feedback.map(item => (
        <div key={item.id} className="card">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'start', gap: '16px' }}>
            <div>
              <strong>{item.suggestedName || '(no name)'}</strong>
              <span className="badge" style={{ marginLeft: '8px' }}>
                {item.status || 'pending'}
              </span>
              <div className="muted">{item.userEmail || ''}</div>
              <p>{item.reason || ''}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedbackList
