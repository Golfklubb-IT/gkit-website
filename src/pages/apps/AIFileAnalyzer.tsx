import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const AIFileAnalyzer = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Workspace AI File Analyzer</span><br />
                        Smart dokumentanalyse
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        AI-basert verktøy som analyserer dokumenter og produserer automatiske oppsummeringer.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Prøv gratis</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/ai-file-analyzer.png"
                        alt="AI File Analyzer Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🤖</div>
                        <h3>Automatisk Analyse</h3>
                        <p>Last opp PDF-er, Word-dokumenter eller regneark. AI-en analyserer innholdet umiddelbart.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📝</div>
                        <h3>Sammendrag</h3>
                        <p>Få korte, presise sammendrag av lange dokumenter. Spar tid på lesing.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔍</div>
                        <h3>Nøkkelinnsikt</h3>
                        <p>Trekk ut viktige datoer, beløp og beslutninger automatisk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">☁️</div>
                        <h3>Google Drive Integrasjon</h3>
                        <p>Fungerer direkte i din Google Workspace. Analyser filer rett fra Drive.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⚡ Spar Tid</h4>
                            <p>Gå gjennom store dokumentmengder på minutter i stedet for timer.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🧠 Bedre Beslutninger</h4>
                            <p>Få rask oversikt over fakta før styremøter og forhandlinger.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikkert</h4>
                            <p>Dine data forlater aldri din sikre Google Cloud-sone.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Vil du teste AI?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Kontakt oss for en demo av AI File Analyzer.
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

export default AIFileAnalyzer
