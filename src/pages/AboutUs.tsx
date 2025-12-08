import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'

const AboutUs = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Om oss</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi er Golfklubbens IT-partner - spesialisert på teknologi for norske golfklubber.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Vår misjon</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '3rem' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'center' }}>
                        Vi tar ansvar for teknologien, slik at golfklubber kan bruke tiden på det som betyr noe: 
                        <strong style={{ color: 'var(--color-gkit-green)' }}> klubben, banen og medlemmene.</strong>
                    </p>
                </div>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🎯</div>
                        <h3>Fokus på golf</h3>
                        <p>Vi forstår golfklubbenes utfordringer fordi vi jobber utelukkende med klubber. Vi snakker deres språk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔧</div>
                        <h3>Praktisk IT</h3>
                        <p>Ikke komplisert teori - vi løser konkrete problemer som påvirker daglig drift og inntekter.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📈</div>
                        <h3>Vekst og effektivitet</h3>
                        <p>Vi hjelper klubber å automatisere oppgaver, øke inntekter og skape bedre medlemsopplevelse.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🤝</div>
                        <h3>Langsiktig partnerskap</h3>
                        <p>Vi er ikke leverandør som forsvinner - vi blir din IT-partner som du kan stole på år etter år.</p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Våre verdier</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Pålitelighet</h4>
                        <p>Vi leverer det vi lover, på avtalt tid og kostnader. Klubber kan bygge sine systemer på oss.</p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Transparens</h4>
                        <p>Vi forklarer hva vi gjør, hvorfor og hva det koster. Ingen skjulte avgifter eller overraskelser.</p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Innovasjon</h4>
                        <p>Vi følger utviklingen og tilbyr klubber de beste løsningene - fra automatisering til nye inntektskilder.</p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Kundefokus</h4>
                        <p>Klubbens suksess er vår suksess. Vi jobber for å løse problemene som faktisk påvirker dere.</p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Erfaring og kompetanse</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-gkit-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                45+
                            </div>
                            <p style={{ color: 'var(--color-gray-light)' }}>Norske klubber på ClubsiteCMS</p>
                        </div>

                        <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-gkit-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                500+
                            </div>
                            <p style={{ color: 'var(--color-gray-light)' }}>Automatiseringer gjennomført</p>
                        </div>

                        <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-gkit-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                10+ år
                            </div>
                            <p style={{ color: 'var(--color-gray-light)' }}>Erfaring i golfbransjen</p>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)', lineHeight: '1.8', marginTop: '3rem', textAlign: 'center' }}>
                        Vi jobber kun med golfklubber og forstår deres behov fra A til Å. Vår erfaring gjør at vi kan løse problemer 
                        raskt og effektivt - og ofte finne løsninger klubbene ikke engang tenkte var mulig.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar til å snakke med oss?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        La oss diskutere hvordan vi kan hjelpe din klubb.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2025 Golfklubbens IT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default AboutUs
