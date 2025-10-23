import React from 'react'
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const NGOTable = ({ ngos }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Delete this NGO?')) {
      try {
        await deleteDoc(doc(db, 'ngos', id))
      } catch (err) {
        console.error(err)
      }
    }
  }

  const handleEdit = async (id) => {
    try {
      const docRef = doc(db, 'ngos', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        // This would need to be connected to the form component
        console.log('Edit NGO:', docSnap.data())
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Contact</th>
            <th>Website</th>
            <th>Donation</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map(ngo => (
            <tr key={ngo.id}>
              <td>{ngo.name || ''}</td>
              <td><span className="badge">{ngo.category || ''}</span></td>
              <td>{ngo.contact || ''}</td>
              <td>
                {ngo.website ? (
                  <a href={ngo.website} target="_blank" rel="noopener">
                    Website
                  </a>
                ) : ''}
              </td>
              <td>
                {ngo.donationLink ? (
                  <a href={ngo.donationLink} target="_blank" rel="noopener">
                    Donate
                  </a>
                ) : ''}
              </td>
              <td>{ngo.description || ''}</td>
              <td>
                <div className="row">
                  <button 
                    className="btn" 
                    onClick={() => handleEdit(ngo.id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn danger" 
                    onClick={() => handleDelete(ngo.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NGOTable
