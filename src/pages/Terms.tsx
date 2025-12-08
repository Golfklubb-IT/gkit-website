import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'

const Terms = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '50vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Vilkår og betingelser</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Juridiske vilkår for bruk av våre tjenester
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="container section-padding">
                <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>1. Avtalevilkår</h2>
                        <p>
                            Disse vilkårene regulerer avtalen mellom Golfklubbens IT AS (heretter "Leverandør") og kunden (heretter "Klubben"). 
                            Ved å bruke våre tjenester, godtar Klubben disse vilkårene i sin helhet.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>2. Tjenestebeskrivelse</h2>
                        <p>
                            Leverandør tilbyr IT-tjenester for golfklubber, inkludert men ikke begrenset til:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                            <li>GolfBox-integrasjon og automatisering</li>
                            <li>Google Workspace-oppsett og migrering</li>
                            <li>ClubsiteCMS drift og optimalisering</li>
                            <li>Digital skilting og løsninger</li>
                            <li>Support og vedlikehold</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>3. Betaling</h2>
                        <p>
                            Priser og betalingsbetingelser spesifiseres i hver avtale. Betaling skal gjøres innen avtalt tidsfrist. 
                            Leverandør forbeholder seg retten til å suspendere tjenester ved ubetalte fakturaer.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>4. Immaterielle rettigheter</h2>
                        <p>
                            Alle rettigheter til kode, dokumentasjon og systemer som utvikles av Leverandør forblir eiendom av Leverandør, 
                            med mindre annet er avtalt skriftlig.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>5. Ansvar og ansvarsbegrensning</h2>
                        <p>
                            Leverandør ytes ikke ansvarlig for indirekte tap, tapt inntekt eller dataforringelse. 
                            Leverandørs maksimale ansvar er begrenset til det beløp Klubben har betalt for tjenestene siste 12 måneder.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>6. Sikkerhet og datasikkerhet</h2>
                        <p>
                            Leverandør forplikter seg til å behandle all data i samsvar med GDPR og gjeldende norsk datasikkerhetslovgivning. 
                            Klubben er ansvarlig for sikre passord og tilgangskontroll til sine systemer.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>7. Oppetid og support</h2>
                        <p>
                            Leverandør tilbyr support på avtalt servicenivå. Vi sikter på 99% oppetid, men kan ikke garantere 100% tilgjengelighet. 
                            Vedlikehold kan påvirke tjenestenes tilgjengelighet.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>8. Avslutning av avtale</h2>
                        <p>
                            Begge parter kan si opp avtalen med 30 dagers skriftlig varsel, med mindre annet er avtalt. 
                            Ved oppsigelse skal Leverandør gjøre data tilgjengelige for Klubben.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>9. Endringer av vilkår</h2>
                        <p>
                            Leverandør forbeholder seg retten til å endre disse vilkårene. Klubben vil få skriftlig varsel om vesentlige endringer.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem', padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                        <h3>Har du spørsmål?</h3>
                        <p>
                            Hvis du har spørsmål om disse vilkårene, kontakt oss på{' '}
                            <Link to="/contact" style={{ color: 'var(--color-gkit-green)' }}>
                                kontaktsiden
                            </Link>
                            .
                        </p>
                    </div>
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

export default Terms
