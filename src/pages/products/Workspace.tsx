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
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi leverer</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🛠️</div>
                        <h3>Oppsett & Administrasjon</h3>
                        <p>Vi setter opp og administrerer Google Workspace for klubben, inkludert domeneoppsett og brukerhåndtering.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🚚</div>
                        <h3>Sømløs Migrering</h3>
                        <p>Vi flytter e-post og data fra deres nåværende systemer til Google Workspace uten nedetid eller tap av data.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🛡️</div>
                        <h3>Sikkerhet & Tilgang</h3>
                        <p>Vi sørger for riktig sikkerhetsoppsett og tilgangsstyring, slik at klubbens data er trygg og kun tilgjengelig for de rette personene.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Opplæring & Support</h3>
                        <p>Vi gir ansatte og frivillige opplæring i bruk av Google Drive, Docs, Sheets og Meet for mer effektivt samarbeid.</p>
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

            {/* Google for Nonprofits */}
            <section className="container section-padding" style={{ background: 'rgba(255, 193, 7, 0.05)', borderLeft: '5px solid var(--color-accent-yellow)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ marginBottom: '0.5rem' }}>🎯 Google Workspace for Nonprofits</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>
                            Alle norske ideelle organisasjoner kvalifiserer - GRATIS eller rabattert
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>✅ Hva får dere?</h3>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            For ideelle organisasjoner i Norge tilbyr Google rabatterte eller helt gratis løsninger:
                        </p>
                        <ul style={{ fontSize: '1rem', lineHeight: '2', marginBottom: '1.5rem' }}>
                            <li><strong>Workspace Nonprofits (Gratis):</strong> Gmail, Drive (30 GB), Docs, Sheets, Slides, Meet, Calendar</li>
                            <li><strong>Business Standard (75% rabatt):</strong> Alle funksjoner + 2 TB lagring, 150-personers møter, opptak</li>
                            <li><strong>Business Plus (72% rabatt):</strong> Alle funksjoner + 5 TB lagring, 500-personers møter, arkivering</li>
                        </ul>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                            Vi håndterer hele prosessen: søknad, verifisering gjennom Goodstack og oppsett.
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>❓ Hvem kvalifiserer?</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>✅ Kvalifisert:</strong> Registrerte ideelle organisasjoner (ideell foreninger, golfklubber med org.nr)
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>❌ Ikke kvalifisert:</strong> Kommersielle selskaper, offentlige etater, private skoler
                        </p>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                            Vi hjelper dere med å avklare om dere kvalifiserer og håndterer hele søknadsprosessen.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.1rem', marginRight: '1rem', marginBottom: '1rem' }}>
                            Kontakt oss for gjennomgang →
                        </Link>
                        <a href="mailto:post@golfklubbens-it.no" className="btn btn-secondary" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            E-post: post@golfklubbens-it.no
                        </a>
                    </div>
                </div>
            </section>

            {/* 5-Step Application Process */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Søknadsprosessen - 5 enkle steg</h2>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>1</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Sjekk krav</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>
                                Vi sjekker om dere kvalifiserer som ideell organisasjon
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>2</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Søk Google</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>
                                Vi sender søknaden på vegne av klubben
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>3</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Verifisering</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>
                                Goodstack verifiserer (2-14 hverdager)
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>4</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Aktiver</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>
                                Vi aktiverer produktene i konsollen
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>5</div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Driftsett</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>
                                Vi setter opp og leverer support
                            </p>
                        </div>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                            <strong>Dere gjør ingenting</strong> - vi håndterer hele prosessen fra søknad til drift.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reference Links */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nyttige ressurser</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>📌 Google for Nonprofits</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><a href="https://www.google.com/nonprofits/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Offisielt program</a></li>
                            <li><a href="https://support.google.com/nonprofits/?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Support (Norsk)</a></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>✅ Kvalifikasjon & søknad</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><a href="https://support.google.com/nonprofits/answer/3215869?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Krav for søknad</a></li>
                            <li><a href="https://support.google.com/nonprofits/answer/12172927?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Finn skatte-ID</a></li>
                            <li><a href="https://support.google.com/nonprofits/answer/3367223?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Søknadsprosess</a></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>🔍 Verifisering (Goodstack)</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><a href="https://support.google.com/nonprofits/answer/12016036?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Om Goodstack</a></li>
                            <li><a href="https://support.google.com/nonprofits/answer/1614637?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Sjekk søknadsstatus</a></li>
                            <li><a href="https://goodstack.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ Goodstack.org</a></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>⚙️ Aktivering & oppsett</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><a href="https://support.google.com/nonprofits/answer/3367631?hl=no" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontWeight: 'bold' }}>→ 5 steg oppsett</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ - Nonprofits */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gkit-green)' }}>💰 Hva koster Google Workspace for ideelle organisasjoner?</h4>
                        <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
                            <strong>Gratis!</strong> Business Starter er donert av Google til registrerte ideelle organisasjoner. Business Standard og Plus er rabattert (75-72% rabatt). Kontakt oss for å avklare hvilket plan som passer best for din klubb.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gkit-green)' }}>📝 Hva må vi gjøre for å søke?</h4>
                        <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
                            Ingenting! Vi håndterer hele søknadsprosessen for dere. Vi trenger organisasjonsnummeret og dokumentasjon på ideell status (som regel enkelt), og så sender vi søknaden til Google gjennom Goodstack-partneren.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gkit-green)' }}>⏱️ Hvor lang tid tar søknadsprosessen?</h4>
                        <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
                            Fra vi sender søknaden til Google godkjenner dere tar det vanligvis 2-14 hverdager. I løpet av den tiden får dere svar fra Goodstack om dere kvalifiserer. Vi setter deretter opp alt og leverer support.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gkit-green)' }}>🙋 Kan dere hjelpe oss hvis vi ikke kvalifiserer?</h4>
                        <p style={{ marginBottom: '0', lineHeight: '1.6' }}>
                            Ja! Selv om dere ikke kvalifiserer for den gratis versjonen, tilbyr vi fortsatt Business Standard og Plus til rabatterte priser fra Google. Vi kan også hjelpe dere med å undersøke om dere kan registreres som ideell organisasjon.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Prismodell</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '3rem 2rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '12px', textAlign: 'center', borderTop: '4px solid var(--color-gkit-green)' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-gkit-green)' }}>📧 Tilpasset prismodell</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Prisen på Google Workspace avhenger av:
                        </p>
                        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto', fontSize: '1rem', lineHeight: '2', marginBottom: '2rem' }}>
                            <li>✓ Antall brukere i klubben</li>
                            <li>✓ Hvilken plan (Starter/Standard/Plus)</li>
                            <li>✓ Om dere kvalifiserer som nonprofit (gratis/rabattert)</li>
                            <li>✓ Migrerings- og oppsettskostnader</li>
                        </ul>
                        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: 'var(--color-gray-light)' }}>
                            Vi lager et personlig tilbud basert på deres behov.
                        </p>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ marginRight: '1rem', marginBottom: '1rem', fontSize: '1rem' }}>
                            Be om tilbud via skjema →
                        </Link>
                        <a href="mailto:post@golfklubbens-it.no" className="btn btn-secondary" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
                            E-post: post@golfklubbens-it.no
                        </a>
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
