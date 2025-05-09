import { useEffect } from 'react'
import { analytics } from './config/firebase'
import { logEvent } from 'firebase/analytics'

function App() {
  useEffect(() => {
    // Log page view
    logEvent(analytics, 'page_view')
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to Nirvana
        </h1>
        <p className="text-center text-gray-600">
          Your React + Tailwind + Firebase project is ready!
        </p>
      </div>
    </div>
  )
}

export default App 