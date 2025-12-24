import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfChart = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfChart MultiClub</span><br />
                        Deling av golfdata på tvers av klubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Et flerklubb-system for deling av golfdata på tvers av klubber. Inneholder en medlems-app for spillere og et admin-panel for klubbledelse.
                    </p>
                    <div className="hero-cta">
                        <a href="https://GolfChart-MultiClub.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne medlems-app</a>
                        <a href="https://GolfChart-MultiClub.web.app/admin/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Admin Panel</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfchart.png"
                        alt="GolfChart MultiClub Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Datadeling</h3>
                        <p>Sømløs deling av banedata, hullinformasjon og statistikk på tvers av samarbeidende klubber.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Medlems-app</h3>
                        <p>En brukervennlig app for spillere som gir tilgang til baneguider, statistikk og klubbinformasjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🛠️</div>
                        <h3>Admin-panel</h3>
                        <p>Kraftig verktøy for klubbledelsen til å administrere banedata, brukere og se innsikt i bruksmønstre.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>GitHub Integrasjon</h3>
                        <p>Prosjektet er åpent for videreutvikling og integrasjon med andre systemer via vårt GitHub-repository.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div className="card glass" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h2>Interessert i GolfChart?</h2>
                    <p style={{ marginBottom: '2rem' }}>Vi hjelper deg med oppsett og tilpasning for din klubb eller klubbgruppe.</p>
                    <Link to="/contact" className="btn btn-primary">Kontakt oss for en prat</Link>
                </div>
            </section>
        </div>
    )
}

export default GolfChart
