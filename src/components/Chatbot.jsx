import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    // Load Botpress chatbot scripts
    const script1 = document.createElement('script')
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js'
    script1.async = true
    
    const script2 = document.createElement('script')
    script2.src = 'https://files.bpcontent.cloud/2025/10/22/16/20251022163802-PMVH6LIT.js'
    script2.defer = true
    
    document.head.appendChild(script1)
    document.head.appendChild(script2)
    
    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null // This component doesn't render anything visible
}

export default Chatbot
