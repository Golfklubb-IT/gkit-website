import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import GraphicFiller from '../components/GraphicFiller'
import '../App.css'

const Projects = () => {
    const projects = [
        {
            name: 'Søknadsportalen',
            description: 'Nettportal for håndtering av søknader, støtteordninger og medlemskap via brukervennlig webgrensesnitt.',
            link: '/apps/soknadsportalen'
        },
        {
            name: 'GolfTeam-Time',
            description: 'Tidregistrering og oppgavehåndtering for golfklubbers personale og frivillige team.',
            link: '/apps/golfteam-time'
        },
        {
            name: 'Frivillig-kalender',
            description: 'Digital kalender for planlegging av frivillig arbeid ved turneringer og arrangementer.',
            link: '/apps/frivillig-kalender'
        },
        {
            name: 'Workspace AI File Analyzer',
            description: 'AI-basert verktøy som analyserer dokumenter og produserer automatiske oppsummeringer.',
            link: '/apps/ai-file-analyzer'
        },
        {
            name: 'Golfbilkontroll',
            description: 'Oversikt over klubbens golfbiler med booking- og vedlikeholdsstyring.',
            link: '/apps/golfbilkontroll'
        },
        {
            name: 'Booking & Kalenderløsninger',
            description: 'Systemer for simulator, instruktør og frivillige timeplanlegging.',
            link: '/apps/booking-kalender'
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
                        <div key={index} className="project-card card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <Link to={project.link} className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.9rem' }}>
                                Les mer →
                            </Link>
                        </div>
                    ))}
                </div>

                <GraphicFiller index={4} style={{ marginTop: '4rem' }} />
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default Projects
