import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import companyConfig from '../config/companyConfig'
import '../App.css'

function Home() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const services = [
        {
            icon: '⚙️',
            title: 'GolfBox-automatisering',
            description: 'Sømløs integrasjon og automatisering av GolfBox for effektiv drift av turneringer, starttider og medlemsdata.',
            link: '/products/golfbox',
            features: ['Auto-sync', 'Analytics', 'Live resultater']
        },
        {
            icon: '☁️',
            title: 'Google Workspace for klubber',
            description: 'Profesjonell digital arbeidsflate med e-post, dokumenter, kalender og samarbeidsverktøy tilpasset golfklubber.',
            link: '/products/workspace',
            features: ['E-post @dinklubb.no', 'Google Drive', 'Meet & Calendar']
        },
        {
            icon: '🌐',
            title: 'ClubsiteCMS drift og integrasjoner',
            description: 'Administrasjon og vedlikehold av klubbens nettsted med integrasjoner mot medlemssystemer og turneringsdata.',
            link: '/products/clubsite',
            features: ['45+ klubber', 'Scangolf partner', 'Integrasjoner']
        },
        {
            icon: '🔌',
            title: 'API-utvikling og systemforvaltning',
            description: 'Skreddersydde API-er som kobler sammen klubbens ulike systemer for bedre dataflyt og automatisering.',
            link: '/services',
            features: ['Custom APIs', 'System-integrasjon', 'Automatisering']
        },
        {
            icon: '📺',
            title: 'Digital skilting og dataflyt',
            description: 'Moderne løsninger for digital informasjon og sanntidsoppdateringer på skjermer rundt om på klubben.',
            link: '/products/signage',
            features: ['Live tee-tider', 'Væroppdateringer', 'Sponsorannonser']
        },
        {
            icon: '🏆',
            title: 'Turneringsteknologi og SoMe-innhold',
            description: 'Avanserte verktøy for turneringsadministrasjon og automatisk publisering av resultater på sosiale medier.',
            link: '/services',
            features: ['Live score', 'SoMe-publisering', 'Turneringsadmin']
        }
    ]

    const projects = [
        {
            name: 'Søknadsportalen',
            description: 'Nettportal for håndtering av søknader, støtteordninger og medlemskap via brukervennlig webgrensesnitt.',
            status: 'live',
            link: '/apps/soknadsportalen',
            externalUrl: 'https://soknadsportalen.web.app/',
            icon: '📝'
        },
        {
            name: 'GolfTeam-Time',
            description: 'Tidregistrering og oppgavehåndtering for golfklubbers personale og frivillige team.',
            status: 'live',
            link: '/apps/golfteam-time',
            externalUrl: 'https://golfteam-time-eur.web.app',
            icon: '⏱️'
        },
        {
            name: 'Frivillig-kalender',
            description: 'Digital kalender for planlegging av frivillig arbeid ved turneringer og arrangementer.',
            status: 'testing',
            link: '/apps/frivillig-kalender',
            icon: '📅'
        },
        {
            name: 'Workspace AI File Analyzer',
            description: 'AI-basert verktøy som analyserer dokumenter og produserer automatiske oppsummeringer.',
            status: 'testing',
            link: '/apps/ai-file-analyzer',
            icon: '🤖'
        },
        {
            name: 'Golfbilkontroll',
            description: 'Oversikt over klubbens golfbiler med booking- og vedlikeholdsstyring.',
            status: 'testing',
            link: '/apps/golfbilkontroll',
            icon: '🚗'
        },
        {
            name: 'Booking & Kalenderløsninger',
            description: 'Systemer for simulator, instruktør og frivillige timeplanlegging.',
            status: 'testing',
            link: '/apps/booking-kalender',
            icon: '📱'
        }
    ]

    const whyGkit = [
        'Spisskompetanse på norske golfklubber',
        'Dyp erfaring med tekniske systemer klubber bruker hver dag',
        'Profesjonell drift, struktur og leveransekvalitet',
        'Effektive prosesser og automasjoner som sparer klubber tid og penger'
    ]

    return (
        <div className="app">
            {/* Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" id="hjem">
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Stabil drift.</span><br />
                        <span className="text-gradient-green">Smarte systemer.</span><br />
                        Golfklubbens IT-partner.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', maxWidth: '600px', margin: '1.5rem auto' }}>
                        Vi tar ansvar for teknologien, slik at dere kan bruke tiden på klubben, banen og medlemmene.
                    </p>
                    <div className="section-title fade-in">
                        <h2>Hva kan vi <span className="text-gradient-green">løse for dere?</span></h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '700px', margin: '0 auto' }}>
                            Fra automatisering av kjedelige oppgaver til nye inntektsstrømmer via digitale flater.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="service-card card interactive-card" 
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => window.location.href = service.link}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="card-hover-info">
                                    <ul className="feature-chips">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="prosjekter">
                <div className="container">
                    <div className="section-title fade-in">
                        <h2>Våre <span className="text-gradient-yellow">Prosjekter</span></h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '700px', margin: '0 auto' }}>
                            Vi utvikler og drifter innovative løsninger for effektiv klubbadministrasjon
                        </p>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="project-card card interactive-card" 
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => window.location.href = project.link}
                            >
                                <div className="card-header">
                                    <span className="project-icon">{project.icon}</span>
                                    <span className={`status-badge status-${project.status}`}>
                                        {project.status === 'live' ? '🟢 Live' : '🟡 Testing'}
                                    </span>
                                </div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="card-hover-info">
                                    <div className="hover-actions">
                                        <span className="info-text">
                                            {project.status === 'live' ? 'Klikk for detaljer' : 'Under utvikling'}
                                        </span>
                                        {project.externalUrl && (
                                            <a 
                                                href={project.externalUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="external-link-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Åpne app →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="om">
                <div className="container">
                    <div className="about-content">
                        <div className="section-title fade-in">
                            <h2>Hvorfor <span className="text-gradient-green">GKIT?</span></h2>
                        </div>
                        <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-gray-light)', textAlign: 'center' }}>
                            GKIT er en spesialisert IT-partner for norske golfklubber. Vi kombinerer teknisk
                            kompetanse, bransjeforståelse og moderne løsningstenking for å skape trygg drift
                            og smartere systemer.
                        </p>
                        <ul className="why-list">
                            {whyGkit.map((item, index) => (
                                <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Blog/Insights Section */}
            <section className="blog" id="innsikt" style={{ background: 'var(--color-bg-dark)' }}>
                <div className="container">
                    <div className="section-title fade-in">
                        <h2>Siste <span className="text-gradient-green">Innsikt</span></h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '700px', margin: '0 auto' }}>
                            Nyheter, tips og trender for moderne golfklubbdrift
                        </p>
                    </div>
                    <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        {/* Note: In production, this would fetch from the Google Apps Script URL */}
                        {[
                            {
                                id: "1",
                                title: "Hvorfor 2025 er året for digitalisering av golfklubben",
                                date: "2025-01-15",
                                category: "Teknologi",
                                summary: "En gjennomgang av de viktigste trendene innen golf-IT og hvordan din klubb kan spare tid.",
                                imageUrl: "https://placehold.co/600x400/1a1a1a/4CAF50?text=Digitalisering"
                            },
                            {
                                id: "2",
                                title: "Slik sparer Ski GK 200 timer i året",
                                date: "2025-02-01",
                                category: "Case Study",
                                summary: "En dybdykk i hvordan automatisering av golfbil-utleie endret hverdagen.",
                                imageUrl: "https://placehold.co/600x400/1a1a1a/FFD43B?text=Ski+GK+Case"
                            },
                            {
                                id: "3",
                                title: "Google Workspace vs. Microsoft 365 for Golfklubber",
                                date: "2025-02-10",
                                category: "Guide",
                                summary: "Hva bør du velge? Vi sammenligner pris, funksjonalitet og brukervennlighet.",
                                imageUrl: "https://placehold.co/600x400/1a1a1a/4CAF50?text=Google+vs+MS"
                            }
                        ].map((post, index) => (
                            <div key={index} className="blog-card card" style={{ padding: '0', overflow: 'hidden', animationDelay: `${index * 0.1}s` }}>
                                <div className="blog-image" style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                                </div>
                                <div className="blog-content" style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-gkit-green)' }}>
                                        <span>{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{post.title}</h3>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-light)', marginBottom: '1rem' }}>{post.summary}</p>
                                    <a href="#" style={{ fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        Les mer <span>→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="kontakt">
                <div className="container">
                    <div className="contact-content" style={{ maxWidth: '800px' }}>
                        <div className="section-title fade-in">
                            <h2>Ta <span className="text-gradient-green">Kontakt</span></h2>
                            <p style={{ color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                                Fyll ut skjemaet, så tar vi kontakt for en uforpliktende prat om hvordan vi kan hjelpe din klubb.
                            </p>
                        </div>

                        <ContactForm />

                        <div className="contact-info" style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '3rem', fontSize: '0.9rem' }}>
                            <div style={{ opacity: 0.7 }}>
                                <p>Eller send e-post direkte:</p>
                                <a href={`mailto:${companyConfig.email}`} style={{ color: 'var(--color-gkit-green)' }}>{companyConfig.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700' }}>
                        <span className="text-gradient-green">{companyConfig.shortName}</span> – {companyConfig.name}
                    </p>
                    <p>© {companyConfig.copyrightYear} {companyConfig.name}. {companyConfig.tagline} {companyConfig.slogan}.</p>
                    <div className="footer-links">
                        <a href="#hjem">Hjem</a>
                        <a href="#tjenester">Tjenester</a>
                        <a href="#prosjekter">Prosjekter</a>
                        <a href="#om">Om oss</a>
                        <a href="#kontakt">Kontakt</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
