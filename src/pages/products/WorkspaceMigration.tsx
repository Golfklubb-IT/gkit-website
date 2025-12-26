import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'
import Navbar from '../../components/Navbar'
import '../../App.css'

const WorkspaceMigration = () => {
    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Produkter', path: '/products' },
        { name: 'Workspace Migrering', path: '/products/workspace-migration' }
    ]

    return (
        <SEOMeta
            title="Workspace Migrering | Sikker overgang til Google Workspace"
            description="Profesjonell migrering til Google Workspace for golfklubber. Vi håndterer hele prosessen fra planlegging til implementering."
            keywords={['workspace', 'migrering', 'google', 'e-post', 'golfklubb']}
            ogImage="/images/og-image.jpg"
            schemas={[
                softwareApplicationSchema({
                    name: 'Workspace Migrering',
                    description: 'Profesjonell migrering til Google Workspace',
                    url: 'https://golfklubb-it-website.web.app/products/workspace-migration'
                }),
                breadcrumbSchema(breadcrumbs)
            ]}
            breadcrumbs={breadcrumbs}
        >
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Sømløs Overgang</span><br />
                        til Google Workspace
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi migrerer e-post, kontakter og kalender fra Outlook/Office 365. Ingen nedetid. Ingen tap av data.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om migreringsplan</a>
                        <a href="#prosess" className="btn btn-secondary">Se vår prosess</a>
                    </div>
                </div>
            </section>

            {/* 4-Step Process */}
            <section className="container section-padding" id="prosess">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Vår 4-stegs prosess</h2>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <div className="service-card glass">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
                            <h3>Kartlegging (1 uke)</h3>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Gjennomgang av nåværende oppsett</li>
                                <li>Antall brukere og e-postvolum</li>
                                <li>Domeneverifisering og DNS</li>
                                <li>Migreringsplan med tidsestimat</li>
                            </ul>
                        </div>

                        <div className="service-card glass">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
                            <h3>Oppsett (1-2 uker)</h3>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Opprett Workspace-konto (med rabatt)</li>
                                <li>Konfigurer domene (@dinklub.no)</li>
                                <li>Opprett brukerkontoer og grupper</li>
                                <li>Sikkerhet (2FA, admin-regler)</li>
                                <li>Test-migrering med pilotgruppe</li>
                            </ul>
                        </div>

                        <div className="service-card glass">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
                            <h3>Migrering (1 uke)</h3>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Migrer e-post, kontakter, kalender</li>
                                <li>Bevarer mappestruktur og historikk</li>
                                <li>Parallellkjøring (begge systemer aktive)</li>
                                <li>Verifisering av data-integritet</li>
                                <li>Ingen nedetid for brukere</li>
                            </ul>
                        </div>

                        <div className="service-card glass">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4️⃣</div>
                            <h3>Opplæring & Support (1-2 uker)</h3>
                            <ul style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <li>Administratoropplæring (Admin Console)</li>
                                <li>Brukeropplæring (Gmail, Drive, Meet)</li>
                                <li>Dokumentasjon og beste praksis</li>
                                <li>30 dagers post-migrering support</li>
                                <li>Planlegg avvikling av gammelt system</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>
                            Total tid: 2-4 uker fra start til avsluttet
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                            Vi tilpasser tidsplanen etter klubbens behov og aktivitetsnivå
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Migrate */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva migrerer vi?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ E-post</h4>
                            <p>Alle e-poster, mapper og vedlegg. Full historikk bevares.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Kontakter</h4>
                            <p>Personlige og delte kontaktlister overføres automatisk.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Kalender</h4>
                            <p>Avtaler, påminnelser og delte kalendere med full historikk.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Filer</h4>
                            <p>OneDrive/SharePoint til Google Drive. Mapper og deling bevares.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Grupper</h4>
                            <p>E-postgrupper og distribusjonstlister overføres automatisk.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Migrations */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Vanlige migreringer vi håndterer</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="service-card glass">
                        <div className="service-icon">📧</div>
                        <h3>Outlook/Exchange</h3>
                        <p>Fra on-premise eller Exchange Online til Gmail Business.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">☁️</div>
                        <h3>Office 365</h3>
                        <p>Komplett overgang fra Microsoft 365 til Google Workspace.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🌐</div>
                        <h3>Webmail</h3>
                        <p>Fra One.com, Domeneshop eller annen webmail til Gmail.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📮</div>
                        <h3>IMAP/POP3</h3>
                        <p>Standardprotokoller for e-post migreres sømløst.</p>
                    </div>
                </div>
            </section>

            {/* Office Files */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Hva med Microsoft Office-filer?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', lineHeight: '1.8' }}>
                        Google Workspace kan åpne og redigere Word, Excel og PowerPoint direkte. 
                        Du kan også fortsette å bruke Office 365 ved siden av Workspace hvis ønskelig. 
                        Vi hjelper deg med å velge beste løsning for klubben.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål - Migrering</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Mister vi e-post under migreringen?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Nei, vi kjører parallellmigrasjon. Begge systemer er aktive samtidig. Ingen data går tapt.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hvor langt tilbake migrerer dere e-post?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Vi migrerer all historikk (typisk 5-10 år+). Ingen tidsgrense. Alt bevares.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Må brukerne gjøre noe?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Minimalt. Vi setter opp alt. De logger inn med ny adresse etter cutover. Vi gir opplæring.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hva skjer med gamle @outlook.com-adresser?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Vi setter opp videresending så e-post til gamle adresser fortsatt mottas i Gmail.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hvor mye koster migreringen?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Fra 15.000 kr for små klubber (10-20 brukere) til 40.000 kr for store klubber (100+ brukere). 
                            Inkluderer alt fra kartlegging til opplæring.
                        </p>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Sikkerhet under migrering</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🔒</div>
                        <h3>Kryptert Overføring</h3>
                        <p>All data overføres kryptert via TLS/SSL.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🚫</div>
                        <h3>Ingen Lagring</h3>
                        <p>Ingen data lagres hos oss under migreringen.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔑</div>
                        <h3>Sikre API-er</h3>
                        <p>Tilgang kun via offisielle Google og Microsoft API-er.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📋</div>
                        <h3>Loggføring</h3>
                        <p>All aktivitet logges for sporbarhet.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">✅</div>
                        <h3>GDPR-Kompatibel</h3>
                        <p>Prosessen oppfyller alle norske og europeiske krav.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for migrering?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi lager en skreddersydd plan for din klubb.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Be om migreringsplan
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
        </SEOMeta>
    )
}

export default WorkspaceMigration
