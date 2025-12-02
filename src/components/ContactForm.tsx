import { useState } from 'react'
import type { FormEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import '../App.css'

interface FormData {
    name: string
    email: string
    club: string
    interest: string
    message: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        club: '',
        interest: 'GolfBox Automatisering',
        message: ''
    })

    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            // Write directly to Firestore
            await addDoc(collection(db, 'leads'), {
                name: formData.name,
                email: formData.email,
                club: formData.club,
                interest: formData.interest,
                message: formData.message,
                status: 'new',
                createdAt: serverTimestamp()
            })

            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                club: '',
                interest: 'GolfBox Automatisering',
                message: ''
            })
        } catch (err: any) {
            console.error('Error submitting form:', err)
            setError('Det oppsto en feil. Prøv igjen eller send e-post til kontakt@golfklubb-it.com')
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="glass" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>✅ Takk!</h3>
                <p style={{ marginBottom: '2rem' }}>Vi har mottatt din henvendelse og kontakter deg snart.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                >
                    Send ny henvendelse
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form glass">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Navn *</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-post *</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="club">Klubb / Bedrift *</label>
                <input
                    type="text"
                    id="club"
                    value={formData.club}
                    onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="interest">Hva er du interessert i? *</label>
                <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                >
                    <option value="GolfBox Automatisering">GolfBox Automatisering</option>
                    <option value="Digital Signage">Digital Signage</option>
                    <option value="Google Workspace">Google Workspace</option>
                    <option value="ClubsiteCMS">ClubsiteCMS</option>
                    <option value="Annet">Annet</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Melding</label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Fortell oss om dine behov..."
                />
            </div>

            {error && (
                <div style={{ padding: '1rem', background: 'rgba(244, 67, 54, 0.1)', border: '1px solid #f44336', borderRadius: '8px', marginBottom: '1rem' }}>
                    <p style={{ color: '#f44336', margin: 0 }}>{error}</p>
                </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sender...' : 'Send henvendelse'}
            </button>
        </form>
    )
}

export default ContactForm
