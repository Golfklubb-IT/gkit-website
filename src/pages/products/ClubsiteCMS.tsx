import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const ClubsiteCMS = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">ClubsiteCMS</span><br />
                        Implementering, integrasjon og drift
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi implementerer og drifter ClubsiteCMS for golfklubber. 45+ klubber på løsningen. Rask oppstart (2–4 dager) med norsk support.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Kontakt oss – vi setter opp alt</a>
                        <a href="#referanser" className="btn btn-secondary">Se referanser</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/path/to/clubsite_cms.png"
                        alt="ClubsiteCMS Dashboard"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Hva vi tilbyr</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🌐</div>
                        <h3>Drift & Vedlikehold</h3>
                        <p>Vi sørger for at nettsiden din alltid er oppdatert og fungerer optimalt i partnerskap med Scangolf.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🔗</div>
                        <h3>Sømløs Integrasjon</h3>
                        <p>Vi kobler nettsiden mot GolfBox, kalendere og andre systemer for automatisk oppdatering av innhold.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🛠️</div>
                        <h3>Skreddersøm</h3>
                        <p>Vi bygger tilpassede moduler og funksjonalitet som dekker klubbens unike behov og ønsker.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🤝</div>
                        <h3>Support & Rådgivning</h3>
                        <p>Teknisk bistand og strategisk rådgivning for redaktører og administratorer i klubben.</p>
                    </div>
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '3rem' }}>Moduler (valgfrie)</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📰</div>
                        <h4>Nettside/CMS</h4>
                        <p>Nyheter, artikler, dokumentarkiv, roller/rettigheter, enkel editor.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">⛳</div>
                        <h4>GolfBox embed</h4>
                        <p>Tee-times, startlister og resultater fra GolfBox – alltid oppdatert.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📅</div>
                        <h4>Kalender/Arrangementer</h4>
                        <p>Kurs, turneringer, styremøter. Synk til Google Calendar ved behov.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📸</div>
                        <h4>Media/Galleri</h4>
                        <p>Responsivt galleri, automatisk bildekomprimering, video-embed.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">💳</div>
                        <h4>Påmelding & Betaling</h4>
                        <p>Påmeldingsskjema m/betaling (Vipps/Stripe/Netaxept) for kurs og arrangementer.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">🧩</div>
                        <h4>Integrasjoner</h4>
                        <p>Signage/Display, Søknadsportalen, Google Workspace, e-postgrupper.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>CS Booking (Simulator & Instruktør)</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Dekning</h4>
                        <p>15+ sentre, 75+ simulatorer, 40+ instruktører på CS Booking.</p>
                    </div>
                    <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Funksjoner</h4>
                        <p>Kalender, betaling, kvittering, instruktørbooking, varsler, rapporter.</p>
                    </div>
                    <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Vår rolle</h4>
                        <p>Vi setter opp, integrerer mot nettsiden, og gir support for drift og oppdateringer.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" id="referanser">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>45+ Norske Golfklubber</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', maxWidth: '900px', margin: '0 auto 3rem' }}>
                    Losby, Bærum, Asker, Vestfold, Grimstad, Hauger, Kristiansand, Drøbak, Ski, Grini, Haga, Kjekstad m.fl.
                </p>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Losby • Bærum • Asker</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Vestfold • Grimstad • Hauger</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Kristiansand • Drøbak • Ski</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Grini • Haga • Kjekstad</div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <a href="https://clubsite.no/referanser" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>Se alle 45+ referanseklubber →</a>
                </p>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✨ Enkelt å Bruke</h4>
                            <p>Hvis du kan bruke Word, kan du oppdatere nettsiden. Ingen koding nødvendig.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📱 Mobilvennlig</h4>
                            <p>Perfekt visning på mobil, nettbrett og PC. Responsivt design som standard.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikker & Rask</h4>
                            <p>Hostet på Microsoft Azure. GDPR-kompatibel. Daglig backup. Lynrask lastetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Full Support</h4>
                            <p>Telefon- og e-poststøtte. Vi fikser problemer, oppdaterer systemet, og utvikler nye funksjoner.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvem utvikler ClubsiteCMS?</h4>
                        <p>ClubsiteCMS utvikles av <strong>Scangolf</strong>. Golfklubbens IT leverer implementasjon, integrasjoner og drift for klubber.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor raskt kan vi gå live?</h4>
                        <p>Typisk 2–4 dager uten migrering. Med migrering av innhold/filer: 1–2 uker avhengig av omfang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Lisens prises av Scangolf (kontakt <a href="tel:+4741520802" style={{ color: 'var(--color-gkit-green)' }}>415 20 802</a> / <a href="mailto:post@scangolf.no" style={{ color: 'var(--color-gkit-green)' }}>post@scangolf.no</a>). Vi fakturerer timer/fastpris for implementasjon, integrasjoner og løpende drift/support.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan dere migrere gammel nettside?</h4>
                        <p>Ja. Vi håndterer flytting av innhold, dokumenter og media, og rydder i strukturen samtidig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Får vi norsk support?</h4>
                        <p>Ja, Golfklubbens IT leverer norsk support, feilretting og endringer. Vi koordinerer med Scangolf ved behov.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere integrasjoner?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper klubber med ClubsiteCMS-integrasjoner og konsulentbistand.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss
                        </Link>
                        <a href="https://clubsite.no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Besøk clubsite.no
                        </a>
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

export default ClubsiteCMS
