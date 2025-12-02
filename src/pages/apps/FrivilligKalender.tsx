import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const FrivilligKalender = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Frivillig-kalender</span><br />
                        Planlegg frivillig arbeid
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Digital kalender for planlegging av frivillig arbeid ved turneringer og arrangementer.
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
                        src="/images/apps/frivillig-kalender.png"
                        alt="Frivillig-kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Vaktlister</h3>
                        <p>Sett opp vaktlister for turneringer, dugnader og arrangementer. Frivillige melder seg på selv.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔔</div>
                        <h3>Varsling</h3>
                        <p>Automatiske påminnelser på SMS og e-post før vakten starter. Reduserer "no-shows".</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏆</div>
                        <h3>Turneringsoversikt</h3>
                        <p>Koble vaktlistene direkte mot turneringskalenderen i GolfBox.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎁</div>
                        <h3>Belønningssystem</h3>
                        <p>Hold oversikt over hvem som bidrar mest, og premier innsatsen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🙌 Enklere for Frivillige</h4>
                            <p>Frivillige velger vakter som passer dem. Ingen masete telefoner.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏱️ Spar Tid for Administrasjonen</h4>
                            <p>Slipp Excel-ark og manuelle lister. Systemet holder orden for deg.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Bedre Oppmøte</h4>
                            <p>Påminnelser og enkel oversikt sikrer at folk møter opp når de skal.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Organiser dugnaden bedre?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Ta kontakt for en uforpliktende prat.
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

export default FrivilligKalender
