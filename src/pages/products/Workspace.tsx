import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Workspace = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Google Workspace Business</span><br />
                        for Golfklubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Profesjonell e-post, ubegrenset lagring, videomøter med 250 deltakere. Alt klubben trenger for moderne drift.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om tilbud</a>
                        <Link to="/products/workspace-nonprofit" className="btn btn-secondary">Se non-profit rabatt</Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvorfor Google Workspace?</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">📧</div>
                        <h3>Profesjonell E-post</h3>
                        <p>@dinklub.no for alle ansatte og tillitsvalgte. Gmail-kvalitet uten annonser. Spam- og virusbeskyttelse inkludert.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💼</div>
                        <h3>Ubegrenset Lagring</h3>
                        <p>Google Drive med ubegrenset plass. Alle dokumenter, bilder og videoer på ett sted. Tilgjengelig overalt.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">👥</div>
                        <h3>Samarbeid i Sanntid</h3>
                        <p>Flere personer kan redigere samme dokument samtidig. Ingen e-post med vedlegg fram og tilbake.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔐</div>
                        <h3>Sikkerhet & GDPR</h3>
                        <p>2-faktor autentisering, kryptert lagring, backup, admin-kontroll. Fullt GDPR-kompatibel.</p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva inkluderer pakken?</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
                            <h4>Gmail Business</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Profesjonell e-post med søk og organisering
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💾</div>
                            <h4>Google Drive</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Ubegrenset lagringsplass i skyen
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📹</div>
                            <h4>Google Meet</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Videomøter for opptil 250 deltakere
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                            <h4>Google Calendar</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Felles kalendere for styret og grupper
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                            <h4>Google Docs/Sheets</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Dokumenter og regneark med sanntidssamarbeid
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
                            <h4>Admin Console</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Enkel brukerstyring og sikkerhetskontroll
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/products/workspace-tools" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>
                            Se alle verktøy og funksjoner →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Prismodell</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <div className="service-card glass">
                            <h3 style={{ color: 'var(--color-gkit-green)' }}>Business Standard</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1.5rem 0', color: 'var(--color-gkit-green)' }}>
                                10,80 EUR
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                per bruker/måned
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Ubegrenset lagring</li>
                                <li>Meet (250 deltakere)</li>
                                <li>Shared Drives</li>
                                <li>Admin Console</li>
                                <li>24/7 support</li>
                            </ul>
                        </div>

                        <div className="service-card glass" style={{ borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h3 style={{ color: 'var(--color-gkit-green)' }}>Business Plus</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1.5rem 0', color: 'var(--color-gkit-green)' }}>
                                18 EUR
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                per bruker/måned
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Alt i Business Standard +</li>
                                <li>5 TB lagring per bruker</li>
                                <li>Google Vault (arkiv)</li>
                                <li>Avansert sikkerhet</li>
                                <li>Meet opptak</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Eksempel:</strong> 10 brukere = 1.296 EUR/år (ca. 14.500 kr/år)
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>
                            💡 Er klubben ideell/non-profit?
                        </p>
                        <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                            Dere kan kvalifisere for gratis eller 75% rabatt
                        </p>
                        <Link to="/products/workspace-nonprofit" className="btn btn-primary">
                            Se gratis og rabatterte alternativer
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvorfor velge oss?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Komplett oppsett</h4>
                            <p>Domenekonfigurasjon, brukeropprettelse, sikkerhet. Vi setter opp alt.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Migrering fra Outlook/Office</h4>
                            <p>Vi flytter e-post, kontakter og kalender. Ingen nedetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Opplæring</h4>
                            <p>Veiledning til administratorer og brukere.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Support</h4>
                            <p>Norsk support ved behov.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/products/workspace-migration" className="btn btn-secondary">
                            Les mer om migrering og oppsett →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å modernisere?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi lager et tilpasset tilbud for din klubb.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss for tilbud
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 Golfklubbens IT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default Workspace
