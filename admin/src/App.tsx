import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import './App.css';

interface ContentItem {
  id: string;
  title: string;
  name?: string;
  description?: string;
  [key: string]: any;
}

interface FormData {
  [key: string]: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<string>('home');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [showForm, setShowForm] = useState(false);

  // Check auth on mount
  useEffect(() => {
    console.log('🔍 Checking Firebase initialization...');
    console.log('Auth object:', auth);
    console.log('DB object:', db);
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('👤 Auth state changed:', user?.email || 'Not authenticated');
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
      setItems(data.filter(item => item.id !== '_metadata'));
      console.log(`✅ Loaded ${collectionName}:`, data);
    } catch (error) {
      console.error('Error loading collection:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      const result = await signInWithPopup(auth, provider);
      console.log('✅ Login successful:', result.user.email);
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      alert(`Login failed: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleNewItem = () => {
    setEditingItem(null);
    setFormData({});
    setShowForm(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setFormData({ ...item });
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (!formData.title && !formData.name) {
        alert('Title or Name is required');
        return;
      }

      const docRef = editingItem ? doc(db, selectedCollection, editingItem.id) : collection(db, selectedCollection);
      const dataToSave = {
        ...formData,
        updatedAt: new Date(),
      };

      if (editingItem) {
        await updateDoc(docRef as any, dataToSave);
        console.log('✅ Updated:', editingItem.id);
      } else {
        const newDoc = await addDoc(docRef as any, { ...dataToSave, createdAt: new Date() });
        console.log('✅ Created:', newDoc.id);
      }

      setShowForm(false);
      loadCollection(selectedCollection);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving item');
    }
  };

  const handleDelete = async (item: ContentItem) => {
    if (confirm(`Delete "${item.title || item.name}"?`)) {
      try {
        await deleteDoc(doc(db, selectedCollection, item.id));
        console.log('✅ Deleted:', item.id);
        loadCollection(selectedCollection);
      } catch (error) {
        console.error('Error deleting:', error);
        alert('Error deleting item');
      }
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
        <div style={{ fontSize: '12px', color: '#ccc', marginTop: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>
          <p>🔧 Debug Info:</p>
          <p>• Firebase Auth: {auth ? '✅ Loaded' : '❌ Not loaded'}</p>
          <p>• Firebase Firestore: {db ? '✅ Loaded' : '❌ Not loaded'}</p>
          <p>• Check console (F12) for detailed logs</p>
        </div>
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
          <div className="content-header">
            <h2>{selectedCollection.charAt(0).toUpperCase() + selectedCollection.slice(1)}</h2>
            {!showForm && <button onClick={handleNewItem} className="btn btn-primary">+ New Item</button>}
          </div>
          
          {showForm ? (
            <div className="editor">
              <h3>{editingItem ? 'Edit Item' : 'Create New Item'}</h3>
              <div className="form-group">
                <label>Title / Name</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title || formData.name || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              {selectedCollection === 'solutions' && (
                <>
                  <div className="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      name="category"
                      placeholder="e.g., Collaboration"
                      value={formData.category || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      placeholder="e.g., Fra kr 29/bruker/måned"
                      value={formData.price || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {selectedCollection === 'apps' && (
                <div className="form-group">
                  <label>Status</label>
                  <select name="status" value={formData.status || 'active'} onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}>
                    <option value="active">Active</option>
                    <option value="beta">Beta</option>
                    <option value="planned">Planned</option>
                  </select>
                </div>
              )}
              <div className="form-actions">
                <button onClick={handleSave} className="btn btn-primary">Save</button>
                <button onClick={() => setShowForm(false)} className="btn btn-secondary">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="list">
              {items.length === 0 ? (
                <p>No items yet. Create your first entry!</p>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <h3>{item.title || item.name}</h3>
                      <p>{item.description}</p>
                      {item.category && <p className="meta">📁 {item.category}</p>}
                      {item.status && <p className="meta">📊 {item.status}</p>}
                      <div className="item-actions">
                        <button onClick={() => handleEdit(item)} className="btn btn-primary">Edit</button>
                        <button onClick={() => handleDelete(item)} className="btn btn-danger">Delete</button>
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
