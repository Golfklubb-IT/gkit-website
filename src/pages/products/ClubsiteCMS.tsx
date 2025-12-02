import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const ClubsiteCMS = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">ClubsiteCMS</span><br />
                        Din klubbs digitale hjemme.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Profesjonell nettside med nyheter, bildegalleri, kalender og medlemsinformasjon. Enkel å oppdatere, kraftig i funksjon.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Se demo</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/path/to/clubsite_cms.png"
                        alt="ClubsiteCMS Dashboard"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva kan systemet?</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📰</div>
                        <h3>Nyheter & Artikler</h3>
                        <p>Publiser nyheter, turneringsresultater, og kunngjøringer. Enkel editor, ingen teknisk kunnskap nødvendig.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📸</div>
                        <h3>Bildegalleri</h3>
                        <p>Last opp bilder fra turneringer og arrangementer. Automatisk bildekomprimering og responsivt galleri.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Arrangementskalender</h3>
                        <p>Oversikt over turneringer, kurs, og styremøter. Synkroniseres med Google Calendar.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>GolfBox Integrasjon</h3>
                        <p>Automatisk visning av tee-tider, starttider, og resultatlister. Alltid oppdatert fra GolfBox.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✨ Enkelt å Bruke</h4>
                            <p>Hvis du kan bruke Word, kan du oppdatere nettsiden. Ingen koding nødvendig.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📱 Mobilvennlig</h4>
                            <p>Perfekt visning på mobil, nettbrett og PC. Responsivt design som standard.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikker & Rask</h4>
                            <p>Hostet på Microsoft Azure. GDPR-kompatibel. Daglig backup. Lynrask lastetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Full Support</h4>
                            <p>Telefon- og e-poststøtte. Vi fikser problemer, oppdaterer systemet, og utvikler nye funksjoner.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for ny nettside?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp og tilpasser ClubsiteCMS for din klubb.
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

export default ClubsiteCMS
