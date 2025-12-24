import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const SponsorDugnad = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Sponsor & Dugnad</span><br />
                        Organiser klubbens viktigste ressurser
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        En webapp for å organisere sponsoravtaler og dugnader (frivillig innsats) i klubben. Gir full kontroll over avtaler, kontakter og oppgaver.
                    </p>
                    <div className="hero-cta">
                        <a href="https://sponsor-dugnad.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne appen</a>
                        <a href="#kontakt" className="btn btn-secondary">Be om demo</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/sponsor_dugnad.png"
                        alt="Sponsor & Dugnad Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🤝</div>
                        <h3>Sponsorhåndtering</h3>
                        <p>Oversikt over alle sponsoravtaler, kontaktpersoner og gjenytelser. Glem aldri en faktura eller en logo-plassering.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">👷</div>
                        <h3>Dugnadsplanlegging</h3>
                        <p>Planlegg dugnader med enkel påmelding for medlemmer. Fordel oppgaver og hold oversikt over hvem som kommer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⏱️</div>
                        <h3>Timeføring</h3>
                        <p>Frivillige kan enkelt føre timer for sin innsats, noe som gir klubben verdifull statistikk for støtteordninger.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapportering</h3>
                        <p>Generer rapporter over sponsorinntekter og frivillig innsats med få klikk. Perfekt for styremøter og årsmeldinger.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div className="card glass" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h2>Klar for å profesjonalisere klubbdriften?</h2>
                    <p style={{ marginBottom: '2rem' }}>Sponsor & Dugnad hjelper dere å få mer ut av klubbens relasjoner og frivillighet.</p>
                    <Link to="/contact" className="btn btn-primary">Kontakt oss for en demo</Link>
                </div>
            </section>
        </div>
    )
}

export default SponsorDugnad
