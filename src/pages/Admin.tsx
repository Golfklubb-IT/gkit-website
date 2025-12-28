import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut, User } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import '../styles/Admin.css'

export default function Admin() {
  const navigate = useNavigate()
  const auth = getAuth()
  const db = getFirestore()
  const [user, setUser] = useState<User | null>(null)
  const [collections, setCollections] = useState<{ [key: string]: any[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCollection, setActiveCollection] = useState<string | null>(null)

  // Check authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        loadCollections()
      } else {
        navigate('/admin-login')
      }
    })

    return () => unsubscribe()
  }, [auth, navigate])

  // Load all collections
  const loadCollections = async () => {
    try {
      setLoading(true)
      const collectionsToLoad = ['home', 'solutions', 'apps']
      const newCollections: { [key: string]: any[] } = {}

      for (const collName of collectionsToLoad) {
        const snapshot = await getDocs(collection(db, collName))
        newCollections[collName] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      }

      setCollections(newCollections)
      setActiveCollection(collectionsToLoad[0])
      setError(null)
    } catch (err) {
      console.error('Error loading collections:', err)
      setError('Failed to load collections')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-loading">Loading admin panel...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-title">
          <h1>🏌️ Admin Panel</h1>
          <p>Firestore Collections Manager</p>
        </div>
        <div className="admin-user-menu">
          <span className="admin-user-email">{user.email}</span>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="admin-content">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <h3>Collections</h3>
            {Object.keys(collections).map(collName => (
              <button
                key={collName}
                className={`admin-nav-item ${activeCollection === collName ? 'active' : ''}`}
                onClick={() => setActiveCollection(collName)}
              >
                {collName}
                <span className="admin-nav-count">
                  ({collections[collName].length})
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Panel */}
        <main className="admin-main">
          {error && (
            <div className="admin-error">
              <p>{error}</p>
              <button onClick={loadCollections}>Retry</button>
            </div>
          )}

          {activeCollection && collections[activeCollection] && (
            <div className="admin-collection">
              <h2>{activeCollection} Collection</h2>
              <div className="admin-documents">
                {collections[activeCollection].length === 0 ? (
                  <p className="admin-empty">No documents in this collection</p>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Document ID</th>
                        <th>Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collections[activeCollection].map(doc => (
                        <tr key={doc.id}>
                          <td className="admin-doc-id">{doc.id}</td>
                          <td>
                            <details>
                              <summary>View</summary>
                              <pre className="admin-json">
                                {JSON.stringify(doc, null, 2)}
                              </pre>
                            </details>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
