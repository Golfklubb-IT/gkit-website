import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const WorkspaceNonprofit = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Google Workspace</span><br />
                        Gratis eller 75% Rabatt for Ideelle Golfklubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Kvalifiserer klubben din? Få Google Workspace Business gratis (opptil 2.000 brukere) eller med 75% rabatt.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Sjekk kvalifikasjon</a>
                        <a href="#soknad" className="btn btn-secondary">Vi hjelper med søknaden</a>
                    </div>
                </div>
            </section>

            {/* What is Google for Nonprofits */}
            <section className="container section-padding">
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Hva er Google for Nonprofits?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', lineHeight: '1.8' }}>
                        Google for Nonprofits gir ideelle organisasjoner gratis eller sterkt rabatterte Google-tjenester. 
                        Norske golfklubber som er registrert som frivillige lag og foreninger kan kvalifisere.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva får du?</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🎁</div>
                        <h3>Gratis Google Workspace</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <li>Gmail Business (@dinklub.no)</li>
                            <li>30 GB lagring per bruker</li>
                            <li>Google Meet (100 deltakere)</li>
                            <li>Google Docs, Sheets, Slides</li>
                            <li>Google Calendar</li>
                            <li><strong>Maks 2.000 brukere</strong></li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-gkit-green)' }}>0 kr/år</strong>
                        </div>
                    </div>

                    <div className="service-card glass" style={{ borderTop: '3px solid var(--color-gkit-green)' }}>
                        <div className="service-icon">💼</div>
                        <h3>Business Standard (75% rabatt)</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <li>Alt i gratis-pakken +</li>
                            <li><strong>Ubegrenset lagring</strong></li>
                            <li>Google Meet (250 deltakere)</li>
                            <li>Shared Drives</li>
                            <li>Admin Console</li>
                            <li>Premium support</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-gkit-green)' }}>~2,70 EUR/bruker/mnd</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginTop: '0.5rem' }}>
                                (ca. 385 kr/bruker/år)
                            </p>
                        </div>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔒</div>
                        <h3>Business Plus (75% rabatt)</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <li>Alt i Business Standard +</li>
                            <li>Google Vault (e-arkiv)</li>
                            <li>Avansert sikkerhet</li>
                            <li>5 TB lagring per bruker</li>
                            <li>Opptak av videomøter</li>
                            <li>eDiscovery & retention</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-gkit-green)' }}>~4,50 EUR/bruker/mnd</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginTop: '0.5rem' }}>
                                (ca. 640 kr/bruker/år)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualification Requirements */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Kvalifikasjonskrav</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Registrert som frivillig organisasjon/idrettslag</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Non-profit formål (ikke kommersiell drift)</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Har org.nummer og BankID</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Har eget domene (dinklub.no)</h4>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '8px' }}>
                            <h4>❌ Ikke for kommersielle golfselskaper/AS</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '8px' }}>
                            <h4>❌ Ikke for statlige/kommunale organisasjoner</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }} id="soknad">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Søknadsprosess</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
                        <h3>Verifisering</h3>
                        <p>Registrer organisasjonen hos Google for Nonprofits. Vi hjelper med dokumentasjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
                        <h3>Godkjenning</h3>
                        <p>Google verifiserer non-profit status. Tar typisk 1-2 uker.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
                        <h3>Aktivering</h3>
                        <p>Vi setter opp Workspace med rabattkode og konfigurerer alle tjenester.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4️⃣</div>
                        <h3>Opplæring</h3>
                        <p>Vi guider administratorer gjennom systemet og gir brukeropplæring.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                        <strong>Estimert tid:</strong> 2-4 uker fra søknad til livegang
                    </p>
                </div>
            </section>

            {/* What We Help With */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva hjelper vi med?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Søknadshjelp og dokumentasjon</h4>
                            <p>Vi fyller ut skjema og samler nødvendig dokumentasjon.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Verifisering av non-profit status</h4>
                            <p>Vi sikrer at klubben oppfyller alle krav før søknad.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Oppsett av Workspace med rabatt</h4>
                            <p>Vi aktiverer rabattkode og setter opp alle tjenester.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Domenekonfigurasjon og migrering</h4>
                            <p>Vi flytter e-post og data fra gammelt system.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Opplæring og support</h4>
                            <p>Veiledning til administratorer og brukere.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Må vi kvalifisere på nytt hvert år?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Nei, når klubben er godkjent beholder dere statusen så lenge dere oppfyller kravene.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hva skjer hvis vi vokser over 2.000 brukere?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Dere kan oppgradere til Business Standard med 75% rabatt.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Kan vi kombinere gratis og betalte brukere?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Ja, f.eks. gratis for tillitsvalgte og rabattert Business Standard for ansatte.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å søke?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg gjennom hele prosessen.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss for søknadshjelp
                        </Link>
                        <Link to="/products/workspace" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Tilbake til hovedside
                        </Link>
                    </div>
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

export default WorkspaceNonprofit
