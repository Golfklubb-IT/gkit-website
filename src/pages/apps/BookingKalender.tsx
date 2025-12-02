import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const BookingKalender = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Booking & Kalender</span><br />
                        For simulator og instruktør
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Systemer for simulator, instruktør og frivillige timeplanlegging.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Kom i gang</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/booking-kalender.png"
                        alt="Booking & Kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>Simulator-booking</h3>
                        <p>La medlemmer booke simulatortimer selv, døgnet rundt. Integrert med betaling og adgangskontroll.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Pro-timer</h3>
                        <p>Kalender for instruktører. Medlemmer booker timer, kurs og pakketilbud direkte.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏢</div>
                        <h3>Møterom & Selskapslokaler</h3>
                        <p>Administrer utleie av klubbhus og møterom. Hold oversikt over arrangementer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Integrasjoner</h3>
                        <p>Synkroniser med GolfBox, Google Calendar og regnskapssystem.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Økt Belegg</h4>
                            <p>Enkel booking senker terskelen for å bestille. Fyll opp ledig kapasitet.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏱️ Mindre Administrasjon</h4>
                            <p>Slipp telefoner og e-poster. Alt skjer automatisk.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💳 Sikker Betaling</h4>
                            <p>Ta betalt ved booking. Reduser "no-shows" og tapte inntekter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere bedre booking?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi skreddersyr en løsning for din klubb.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default BookingKalender
