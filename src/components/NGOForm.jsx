import React, { useState } from 'react'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'

const NGOForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'education',
    contact: '',
    website: '',
    donationLink: '',
    description: ''
  })
  const [editId, setEditId] = useState(null)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(editId ? 'Updating...' : 'Adding...')
    
    try {
      if (editId) {
        await updateDoc(doc(db, 'ngos', editId), formData)
        setEditId(null)
      } else {
        await addDoc(collection(db, 'ngos'), formData)
      }
      
      setFormData({
        name: '',
        category: 'education',
        contact: '',
        website: '',
        donationLink: '',
        description: ''
      })
      setStatus('Saved.')
    } catch (err) {
      setStatus('Error saving. See console.')
      console.error(err)
    }
  }

  const handleCancel = () => {
    setEditId(null)
    setFormData({
      name: '',
      category: 'education',
      contact: '',
      website: '',
      donationLink: '',
      description: ''
    })
    setStatus('')
  }

  return (
    <form onSubmit={handleSubmit} className="card form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="environment">Environment</option>
          <option value="poverty">Poverty Alleviation</option>
          <option value="animals">Animal Welfare</option>
          <option value="disaster">Disaster Relief</option>
        </select>
      </div>
      
      <div className="field">
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="email"
          value={formData.contact}
          onChange={handleChange}
          placeholder="contact@example.org"
        />
      </div>
      
      <div className="field">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>
      
      <div className="field">
        <label htmlFor="donationLink">Donation link</label>
        <input
          id="donationLink"
          name="donationLink"
          type="url"
          value={formData.donationLink}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>
      
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="row">
        <button type="submit" className="btn primary">
          {editId ? 'Update' : 'Add'}
        </button>
        {editId && (
          <button type="button" onClick={handleCancel} className="btn">
            Cancel
          </button>
        )}
      </div>
      
      <p className="status">{status}</p>
    </form>
  )
}

export default NGOForm
