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
                        <a href="https://loftlogic-display.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne demo</a>
                        <a href="https://golfklubb-it.github.io/GKIT-DigitalSignage-APP/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Les dokumentasjon</a>
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
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🖥️</div>
                        <h3>Oppsett & Drift</h3>
                        <p>Vi setter opp og drifter infoskjermer for klubbhus, range og proshop, tilpasset deres lokaler.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>GolfBox Integrasjon</h3>
                        <p>Automatisk visning av starttider, resultatlister og turneringsinfo direkte fra GolfBox.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">ℹ️</div>
                        <h3>Klubbinformasjon</h3>
                        <p>Visning av værdata, banestatus, åpningstider og viktig klubbinformasjon i sanntid.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Sponsorvisning</h3>
                        <p>Gi sponsorene deres ekstra synlighet med profesjonell visning av logoer og reklamebudskap.</p>
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

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hardware & Tekniske Krav</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🖥️ Display</h4>
                            <p>Moderne TV eller digital signage-skjerm (42"-55" anbefalt)</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>4K eller Full HD</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📱 Strømenhet</h4>
                            <p>Android TV-boks eller Raspberry Pi med Kodi</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>Wi-Fi eller kabel-internett</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🔌 Strøm</h4>
                            <p>Strømkabel og monteringsutstyr</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>Plug-and-play setup</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📡 Internett</h4>
                            <p>Stabil bredbands-forbindelse</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)' }}>Min 5 Mbps</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Innholdstyper & Integrasjoner</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h4 style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--color-gkit-green)' }}>Hva kan vises på skjermen?</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Turneringer & Arrangementer</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Fra Booking-Kalender</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Nyheter & Kunngjøringer</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Fra ClubsiteCMS</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Bane-Status</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Ledige baner, vedlikehold</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Værvarsel</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Sanntids værdata</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Turneringer & Resultater</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Fra GolfBox</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <p>✓ <strong>Sponsorkampanjer</strong></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)' }}>Logoer og annonser</p>
                        </div>
                    </div>
                    <h4 style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--color-gkit-green)' }}>System-Integrasjoner</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📋 ClubsiteCMS</h4>
                            <p>Nyheter, arrangementer og kunngjøringer oppdateres automatisk.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📅 Booking-Kalender</h4>
                            <p>Turneringer, kurs og møter synkroniseres i real-time.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>⛳ GolfBox</h4>
                            <p>Start-tider, resultater og turneringsoversikter automatisk.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🌐 Google Calendar</h4>
                            <p>Team-kalendre og møtetider kan vises på displayene.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🌤️ Værdata</h4>
                            <p>Sanntids værvarsel fra eksterne kilder.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderLeft: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📊 Analytics</h4>
                            <p>Se hvilken innhold som engasjerer medlemmene mest.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller på Klubben</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🏛️ Klubbhus/Lobby</h4>
                            <p>Turneringer, værvarsel, arrangementer og sponsorkampanjer.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🏪 Pro-shop</h4>
                            <p>Nye produkter, kampanjer og spesial-tilbud på neste arrangement.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🍽️ Klubbrestaurant</h4>
                            <p>Dagens spesialtilbud, turnering-info, turneringer som vises live.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🏌️ Startplan/Range</h4>
                            <p>Live startlister, poengstillinger, værvarsel og bankestatus.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🎯 Treningsområde</h4>
                            <p>Instruksjon-tips, golfkurs-info, og øvings-utsendinger.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📺 Møterom</h4>
                            <p>Styremøter, årsmøter, medlemsmøter - lyd/video og dokumentering.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Administrasjon & Styring</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Web-basert administrasjonspanel</strong> som lar klubben enkelt styre innholdet på displayene:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div>
                            <p>✓ Drag-and-drop layout</p>
                        </div>
                        <div>
                            <p>✓ Content-rotasjon planning</p>
                        </div>
                        <div>
                            <p>✓ Planering av spesial-kampanjer</p>
                        </div>
                        <div>
                            <p>✓ Real-time oppdateringer</p>
                        </div>
                        <div>
                            <p>✓ Multi-display styring</p>
                        </div>
                        <div>
                            <p>✓ Statistikk & rapporter</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                        Ingen teknisk kunnskap nødvendig. Admin-panelet er intuitiv og brukervennlig.
                    </p>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster Digital Signage?</h4>
                        <p>Kontakt oss for tilbud basert på antall skjermer og funksjoner. Vi tilbyr både kjøp og leasing.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva slags hardware trenger vi?</h4>
                        <p>Vi leverer komplett pakke: skjerm, Android TV-boks eller Raspberry Pi, monteringsutstyr og kabler. Alt plug-and-play.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi tilpasse innholdet selv?</h4>
                        <p>Ja! Administrasjonspanel lar dere enkelt endre annonser, meldinger og layout. Ingen teknisk kunnskap nødvendig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Fungerer det med GolfBox?</h4>
                        <p>Ja, automatisk integrasjon med GolfBox for tee-tider, resultater og turneringsoversikter.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar installasjon?</h4>
                        <p>1 dag for oppsett på klubben. Vi installerer, konfigurerer og lærer opp ditt personale.</p>
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
                    <p>© 2025 Golfklubbens IT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default Signage
