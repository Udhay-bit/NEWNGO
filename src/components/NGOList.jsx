import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, addDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase-config'
import NGOCard from './NGOCard'
import FeedbackForm from './FeedbackForm'
import Chatbot from './Chatbot'

const NGOList = () => {
  const [ngos, setNgos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'ngos'), orderBy('category'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ngoData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setNgos(ngoData)
    })

    return () => unsubscribe()
  }, [])

  const filteredNgos = ngos.filter(ngo => {
    const matchesSearch = !searchTerm || 
      ngo.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = !selectedCategory || ngo.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All categories</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="environment">Environment</option>
          <option value="poverty">Poverty Alleviation</option>
          <option value="animals">Animal Welfare</option>
          <option value="disaster">Disaster Relief</option>
        </select>
      </div>

      <section id="ngo-section">
        <div className="grid" id="ngo-list">
          {filteredNgos.map(ngo => (
            <NGOCard key={ngo.id} ngo={ngo} />
          ))}
        </div>
      </section>

      <section id="feedback-section">
        <h2>Suggest an NGO</h2>
        <FeedbackForm />
      </section>

      <Chatbot />
    </div>
  )
}

export default NGOList
