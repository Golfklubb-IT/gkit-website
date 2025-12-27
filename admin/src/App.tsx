import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import './App.css';

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  [key: string]: any;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<string>('home');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  // Check auth on mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Load collection data
  useEffect(() => {
    if (user) {
      loadCollection(selectedCollection);
    }
  }, [user, selectedCollection]);

  const loadCollection = async (collectionName: string) => {
    try {
      const snapshot = await getDocs(collection(db, collectionName));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContentItem[];
      setItems(data);
    } catch (error) {
      console.error('Error loading collection:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Add scopes
      provider.addScope('profile');
      provider.addScope('email');
      const result = await signInWithPopup(auth, provider);
      console.log('✅ Login successful:', result.user.email);
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      alert(`Login failed: ${error.message}\n\nMake sure:\n1. Google provider is enabled in Firebase Console\n2. OAuth consent screen is configured\n3. You're using an authorized email`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return <div className="container"><p>Loading...</p></div>;
  }

  if (!user) {
    return (
      <div className="container auth-container">
        <h1>🚀 GolfKlubb Admin Panel</h1>
        <p>Sign in with your Google account to manage content</p>
        <button onClick={handleLogin} className="btn btn-primary">Sign In with Google</button>
      </div>
    );
  }

  return (
    <div className="admin-app">
      <header className="admin-header">
        <h1>GolfKlubb Admin Panel</h1>
        <div className="user-info">
          <span>{user.email}</span>
          <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        </div>
      </header>

      <div className="admin-container">
        <aside className="sidebar">
          <nav>
            {['home', 'solutions', 'apps', 'blog'].map((col) => (
              <button
                key={col}
                className={`nav-button ${selectedCollection === col ? 'active' : ''}`}
                onClick={() => setSelectedCollection(col)}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </button>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <h2>{selectedCollection.charAt(0).toUpperCase() + selectedCollection.slice(1)}</h2>
          
          {editingItem ? (
            <div className="editor">
              <h3>Edit Item</h3>
              {/* Basic editor - can be expanded */}
              <button onClick={() => setEditingItem(null)} className="btn btn-secondary">Cancel</button>
            </div>
          ) : (
            <div className="list">
              {items.length === 0 ? (
                <p>No items yet. Create your first entry!</p>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="item-actions">
                        <button onClick={() => setEditingItem(item)} className="btn btn-primary">Edit</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
