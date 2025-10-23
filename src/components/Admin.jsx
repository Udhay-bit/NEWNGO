import React, { useState, useEffect } from 'react'
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc,
  query, 
  orderBy 
} from 'firebase/firestore'
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { auth, db } from '../firebase-config'
import NGOForm from './NGOForm'
import NGOTable from './NGOTable'
import FeedbackList from './FeedbackList'
import Chatbot from './Chatbot'

const Admin = () => {
  const [user, setUser] = useState(null)
  const [ngos, setNgos] = useState([])
  const [feedback, setFeedback] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      const ngoQuery = query(collection(db, 'ngos'), orderBy('name'))
      const feedbackQuery = query(collection(db, 'feedback'), orderBy('createdAt'))
      
      const unsubscribeNgos = onSnapshot(ngoQuery, (snapshot) => {
        setNgos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
      
      const unsubscribeFeedback = onSnapshot(feedbackQuery, (snapshot) => {
        setFeedback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })

      return () => {
        unsubscribeNgos()
        unsubscribeFeedback()
      }
    }
  }, [user])

  const handleSignOut = async () => {
    await signOut(auth)
  }

  if (loading) {
    return <div className="container">Loading...</div>
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <div className="container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleSignOut} className="btn">
          Sign out
        </button>
      </div>

      <div className="grid two">
        <div>
          <h2>Add NGO</h2>
          <NGOForm />
        </div>
        <div>
          <h2>Feedback</h2>
          <FeedbackList feedback={feedback} />
        </div>
      </div>

      <h2>All NGOs</h2>
      <NGOTable ngos={ngos} />
      
      <Chatbot />
    </div>
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Signing in...')
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setStatus('Signed in successfully!')
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <div className="container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit} className="card form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn primary">
          Sign in
        </button>
        <p className="status">{status}</p>
      </form>
    </div>
  )
}

export default Admin
