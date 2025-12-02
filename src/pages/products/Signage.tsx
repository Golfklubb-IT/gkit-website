import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Signage = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Digital Signage</span><br />
                        Profesjonell kommunikasjon. Alltid oppdatert.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Infoskjermer som viser tee-tider, værmelding, resultater og sponsorer. Automatisk oppdatert fra GolfBox og andre kilder.
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
                        src="/images/products/digital_signage.png"
                        alt="Digital Signage Display"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva viser skjermene?</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⏰</div>
                        <h3>Dagens Tee-tider</h3>
                        <p>Oppdatert automatisk fra GolfBox. Vis neste spillere, tilgjengelige tider, og klubbinformasjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🌦️</div>
                        <h3>Vær & Baneforhold</h3>
                        <p>Lokal værmelding, UV-indeks, og dagens banestatus. Automatisk fra meteorologiske kilder.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏆</div>
                        <h3>Turneringsresultater</h3>
                        <p>Live score, leaderboards, og resultatlister. Hentet direkte fra GolfBox.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📢</div>
                        <h3>Annonser & Sponsorer</h3>
                        <p>Roterende annonser for sponsorer, arrangementer og klubbtilbud. Enkel oppdatering fra CMS.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🎯 Profesjonell Profil</h4>
                            <p>Moderne, elegant løsning som gir klubben et profesjonelt uttrykk.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💰 Sponsorinntekter</h4>
                            <p>Ny inntektskilde. Selg annonseplass til lokale bedrifter og leverandører.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔄 Automatisk Oppdatering</h4>
                            <p>Ingen manuell oppdatering. Alt hentes fra GolfBox, værdata og CMS.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Full Support</h4>
                            <p>Vi leverer hardware, installerer, og holder alt oppdatert. Dere slipper tekniske bekymringer.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Interessert i infoskjermer?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi demonstrerer løsningen på din klubb.
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

export default Signage
