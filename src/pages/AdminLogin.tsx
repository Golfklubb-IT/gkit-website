import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'
import '../styles/AdminLogin.css'

export default function AdminLogin() {
  const navigate = useNavigate()
  const auth = getAuth()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if already logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        // Redirect to admin if already logged in
        setTimeout(() => navigate('/admin'), 500)
      }
    })

    return () => unsubscribe()
  }, [auth, navigate])

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError(null)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      // Navigation will happen via useEffect above
    } catch (err: any) {
      console.error('Sign in error:', err)
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-redirecting">
          <p>Redirecting to admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-content">
          <h1>🏌️ Golfklubb IT Admin</h1>
          <p>Sign in to manage content</p>

          {error && (
            <div className="admin-login-error">
              <p>{error}</p>
            </div>
          )}

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="admin-login-button"
          >
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <div className="admin-login-footer">
            <p>Only authorized administrators can access this panel.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
