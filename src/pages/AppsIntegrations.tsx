import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

const appsReady = [
    { name: 'GolfChart MultiClub', url: 'https://golfchart.web.app/', status: 'Live', description: 'Komplett oversikt over klubbens baner, hull og statistikk.' },
    { name: 'Søknadsportalen', url: 'https://soknadsportalen.web.app/', status: 'Live', description: 'Elektronisk håndtering av søknader for medlemskap og støtte.' },
    { name: 'Sponsor Dugnad', url: 'https://sponsor-dugnad.web.app', status: 'Live', description: 'Verktøy for å administrere sponsoravtaler og dugnadsarbeid.' },
    { name: 'GolfTeam-Time', url: 'https://golfteam-time-eur.web.app', status: 'Live', description: 'Tidregistrering og oppgavehåndtering for ansatte og frivillige.' },
    { name: 'Loftlogic Display', url: 'https://loftlogic-display.web.app', status: 'Live', description: 'Digital skilting for klubbhus, range og proshop.' },
    { name: 'Golfklubbens IT Website', url: 'https://golfklubb-it-website.web.app', status: 'Live', description: 'Vår egen plattform for informasjon og kundekontakt.' }
]

const docsAndGuides = [
    { name: 'Workspace Setup Guide', url: 'https://golfklubb-it.github.io/workspace-setup-gkit/', type: 'Setup' },
    { name: 'Digital Signage App', url: 'https://golfklubb-it.github.io/GKIT-DigitalSignage-APP/', type: 'Docs' },
    { name: 'Golfklubbens IT Website Docs', url: 'https://golfklubb-it.github.io/gkit-website/', type: 'Docs' }
]

const golfChartResources = [
    { name: 'User App', url: 'https://GolfChart-MultiClub.web.app', type: 'Public' },
    { name: 'Admin Panel', url: 'https://GolfChart-MultiClub.web.app/admin/', type: 'Admin' },
    { name: 'Documentation', url: 'https://golfklubb-it.github.io/GolfChart-MultiClub/', type: 'Docs' },
    { name: 'GitHub', url: 'https://github.com/Owe-S/GolfChart-MultiClub', type: 'Repo' }
]

const scangolfLinks = [
    { name: 'ClubsiteCMS', url: 'https://clubsite.no/' },
    { name: 'Scangolf Om Oss', url: 'https://clubsite.no/scangolf' },
    { name: 'Clubsite Booking', url: 'https://clubsite.no/booking' },
    { name: 'Referanseklubber (45+)', url: 'https://clubsite.no/referanser' }
]

const golfboxLinks = [
    { name: 'Help Center', url: 'https://golfbox.zendesk.com/hc/no' },
    { name: 'Tilleggsmoduler & Priser', url: 'https://golfbox.zendesk.com/hc/no/articles/200196637-Tilleggsmoduler-til-GolfBox-Prisliste' },
    { name: 'ProPlanner', url: 'https://golfbox.net/golfbox-proplanner' },
    { name: 'Yield Management', url: 'https://golfbox.zendesk.com/hc/no/articles/200198887-Endre-fra-3-til-5-priser-pr-dag-i-Yield-Management' },
    { name: 'Veiledninger', url: 'https://golfbox.zendesk.com/hc/no/categories/200020057-Veiledninger' }
]

const paymentLinks = [
    { name: 'Nets Easy (Nexi) API', url: 'https://developer.nexigroup.com/nexi-checkout/en-EU/api/' },
    { name: 'EBS / Nayax', url: 'https://ebsdigital.no/bransjer/betalingslosninger-for-golfklubber/' },
    { name: 'Vipps', url: 'https://vippsmobilepay.com/nb-NO' }
]

const fundraisingLinks = [
    { name: 'Spleis (innsamling)', url: 'https://www.spleis.no/' },
    { name: 'Grasrotandelen', url: 'https://www.norsk-tipping.no/grasrotandelen/for-lag-og-foreninger' }
]

const cardStyle = {
    padding: '1.5rem',
    background: 'rgba(76, 175, 80, 0.05)',
    borderRadius: '12px',
    borderLeft: '4px solid var(--color-gkit-green)',
    marginBottom: '1rem'
}

const AppsIntegrations = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '50vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Apper & Integrasjoner</span><br />
                        Alt vi leverer, testet og klart.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', maxWidth: '820px', margin: '1.5rem auto' }}>
                        Oversikt over alle apper, partnere og integrasjoner vi jobber med. Bruk listen til å teste, evaluere og forstå hva som kan leveres til din klubb.
                    </p>
                    <div className="hero-cta">
                        <Link to="/#kontakt" className="btn btn-primary">Kontakt oss</Link>
                        <Link to="/services" className="btn btn-secondary">Se tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Apper klare til test</h2>
                <div className="services-grid">
                    {appsReady.map((app) => (
                        <div key={app.url} className="service-card glass">
                            <div className="service-icon">✅</div>
                            <h3>{app.name}</h3>
                            <p style={{ minHeight: '48px' }}>{app.description}</p>
                            <p style={{ color: 'var(--color-gray-light)', marginBottom: '0.75rem' }}>Status: {app.status}</p>
                            <a href={app.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Åpne</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Dokumentasjon & guider</h2>
                <div className="services-grid">
                    {docsAndGuides.map((doc) => (
                        <div key={doc.url} className="service-card glass">
                            <div className="service-icon">📖</div>
                            <h3>{doc.name}</h3>
                            <p style={{ color: 'var(--color-gray-light)' }}>{doc.type}</p>
                            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Åpne</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>GolfChart Multi-Club</h2>
                <div className="services-grid">
                    {golfChartResources.map((item) => (
                        <div key={item.url} className="service-card glass">
                            <div className="service-icon">📊</div>
                            <h3>{item.name}</h3>
                            <p style={{ color: 'var(--color-gray-light)' }}>{item.type}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Åpne</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Partner-apper og systemer</h2>
                <div className="services-grid">
                    <div className="service-card glass" style={{ gridColumn: 'span 2' }}>
                        <div className="service-icon">🤝</div>
                        <h3>Scangolf / ClubsiteCMS</h3>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Norges ledende golfplattform med 45+ klubber. Vi leverer integrasjoner, konsulentbistand og support.</p>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {scangolfLinks.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>
                                    {link.name} →
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="service-card glass" style={{ gridColumn: 'span 2' }}>
                        <div className="service-icon">⛳</div>
                        <h3>GolfBox Integrasjoner</h3>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Turneringsmodul, integrasjoner og yield management. Vi har lang erfaring med oppsett og drift.</p>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {golfboxLinks.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>
                                    {link.name} →
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Betaling & finansiering</h2>
                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">💳</div>
                        <h3>Betalingsløsninger</h3>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {paymentLinks.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>
                                    {link.name} →
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🤲</div>
                        <h3>Fundraising</h3>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {fundraisingLinks.map((link) => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>
                                    {link.name} →
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Vil du teste eller integrere?</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp demo, integrasjoner og onboarding. Ta kontakt, så prioriterer vi klubben din.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Kontakt oss
                        </Link>
                        <Link to="/services" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Se tjenester
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AppsIntegrations
