import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import GraphicFiller from '../components/GraphicFiller'
import Footer from '../components/Footer'
import '../App.css'

const Projects = () => {
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

    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '50vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>Våre <span className="text-gradient-yellow">Prosjekter</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', maxWidth: '700px', margin: '0 auto' }}>
                        Vi utvikler og drifter innovative løsninger for effektiv klubbadministrasjon
                    </p>
                </div>
            </section>

            <section className="container section-padding">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card card interactive-card" 
                            style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
                            onClick={() => window.location.href = project.link}
                        >
                            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <span className="project-icon" style={{ fontSize: '2rem' }}>{project.icon}</span>
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
                                            style={{ color: 'var(--color-gkit-green)', textDecoration: 'underline', fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}
                                        >
                                            Åpne app →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <GraphicFiller index={4} style={{ marginTop: '4rem' }} />
            </section>

            <Footer />
        </div>
    )
}

export default Projects
