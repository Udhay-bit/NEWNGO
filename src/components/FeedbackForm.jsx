import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    suggestedName: '',
    userEmail: '',
    reason: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    
    try {
      const payload = {
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      
      await addDoc(collection(db, 'feedback'), payload)
      setFormData({ suggestedName: '', userEmail: '', reason: '' })
      setStatus('Thank you! Your suggestion was submitted.')
    } catch (err) {
      setStatus('Error submitting feedback. Please try again.')
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card form">
      <div className="field">
        <label htmlFor="suggestedName">NGO name</label>
        <input
          id="suggestedName"
          name="suggestedName"
          type="text"
          value={formData.suggestedName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="field">
        <label htmlFor="userEmail">Your email</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="field">
        <label htmlFor="reason">Why do you recommend this NGO?</label>
        <textarea
          id="reason"
          name="reason"
          rows="4"
          value={formData.reason}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" className="btn primary">
        Submit suggestion
      </button>
      
      <p className="status">{status}</p>
    </form>
  )
}

export default FeedbackForm
