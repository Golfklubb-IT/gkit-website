import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const FrivilligKalender = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Frivillig-kalender</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Planlegg frivillig arbeid
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Digital kalender for planlegging av frivillig arbeid ved turneringer og arrangementer. Gjør det enkelt for medlemmer å melde seg på vakter.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Se demo</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/frivillig-kalender.png"
                        alt="Frivillig-kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Vaktlister</h3>
                        <p>Sett opp vaktlister for turneringer, dugnader og arrangementer. Frivillige melder seg på selv.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔔</div>
                        <h3>Varsling</h3>
                        <p>Automatiske påminnelser på SMS og e-post før vakten starter. Reduserer "no-shows".</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏆</div>
                        <h3>Turneringsoversikt</h3>
                        <p>Koble vaktlistene direkte mot turneringskalenderen i GolfBox.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎁</div>
                        <h3>Belønningssystem</h3>
                        <p>Hold oversikt over hvem som bidrar mest, og premier innsatsen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Problemet vi løser</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '2rem', background: 'rgba(255, 87, 34, 0.1)', borderRadius: '8px', borderLeft: '5px solid #FF5722' }}>
                        <h4 style={{ color: '#FF5722', marginBottom: '1rem' }}>❌ Før - Kaotisk:</h4>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>Excel-ark som sendes fram og tilbake</li>
                            <li>Manuell telefonkontakt til frivillige</li>
                            <li>Masse no-shows fordi folk glemmer</li>
                            <li>Dårlig oversikt over hvem som har gjort hva</li>
                            <li>Styremedlem bruker timer på administrasjon</li>
                            <li>Uklar dokumentasjon av frivillig innsats</li>
                        </ul>
                    </div>
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px', borderLeft: '5px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>✅ Etter - Organisert:</h4>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>Digital vaktkalender alle kan se</li>
                            <li>Frivillige melder seg på selv online</li>
                            <li>Automatiske SMS/e-post påminnelser</li>
                            <li>Full statistikk over innsats</li>
                            <li>Admin bruker 30 min i stedet for timer</li>
                            <li>Dokumentert frivillig innsats for årsrapporten</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Detaljerte Funksjoner</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📅 Vaktkalender</h4>
                            <p style={{ marginBottom: '1rem' }}>Opprett turneringer, arrangementer og dugnader direkte i systemet.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Drag-and-drop vakt-opprettelse</li>
                                <li>✓ Gjenta vakter (ukentlig, månedlig)</li>
                                <li>✓ Spesifikasjoner per vakt (antall trengs)</li>
                                <li>✓ Kunnskravskravkrav (erfaring, opplæring)</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🙋 Påmelding & Avmelding</h4>
                            <p style={{ marginBottom: '1rem' }}>Frivillige melder seg enkelt på og av vakter.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Enkel webapp for mobil</li>
                                <li>✓ "Vis alle ledige vakter"-visning</li>
                                <li>✓ Historikk av tidligere vakter</li>
                                <li>✓ Ønskelister og preferanser</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🔔 Intelligente Varsler</h4>
                            <p style={{ marginBottom: '1rem' }}>Automatiske påminnelser når vakten nærmer seg.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ SMS 24 timer før</li>
                                <li>✓ E-post 1 uke før</li>
                                <li>✓ SMS 2 timer før (oppfrisking)</li>
                                <li>✓ Google Calendar-synk</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📊 Statistikk & Rapporter</h4>
                            <p style={{ marginBottom: '1rem' }}>Detaljert oversikt over frivillig innsats.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Totalt timer per person</li>
                                <li>✓ Vakter gjennomført vs. avbrutt</li>
                                <li>✓ "Topp frivillige"-liste</li>
                                <li>✓ Eksport til Excel/PDF</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🏆 Belønningssystem</h4>
                            <p style={{ marginBottom: '1rem' }}>Gi poeng og anerkjennelse for innsats.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Poeng per vakt</li>
                                <li>✓ Multiplikatorer (difficult shifts)</li>
                                <li>✓ Medalje-system</li>
                                <li>✓ Årlig rankering & priser</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🔗 Integrasjoner</h4>
                            <p style={{ marginBottom: '1rem' }}>Koblet mot resten av systemet.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ GolfBox-arrangementer</li>
                                <li>✓ Booking-Kalender</li>
                                <li>✓ Google Calendar</li>
                                <li>✓ Google Workspace</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📱 Mobil-Første Design</h4>
                            <p style={{ marginBottom: '1rem' }}>Optimalisert for frivillige på farten.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Responsiv webapp</li>
                                <li>✓ Native app (iOS/Android)</li>
                                <li>✓ Push-notifikasjoner</li>
                                <li>✓ Offline-modus</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🛡️ Admin-Kontroll</h4>
                            <p style={{ marginBottom: '1rem' }}>Komplett kontroll for klubbadministrator.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Godkjenn/avslå påmeldinger</li>
                                <li>✓ Manuel påmelding av personer</li>
                                <li>✓ Erstatningsfordeling</li>
                                <li>✓ Tilgangskontroll & roller</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏌️ Turneringer</h4>
                        <p>Organiser flaggbærer, scorere, starter og andre vakter for store turneringer.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Ski GK Open Cup" trenger 50 frivillige fordelt på 4 dager</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🧑‍💼 Styre & Driftsarbeid</h4>
                        <p>Vakt-planlegg for styremøter, årsmøter, vedlikehold av anlegg.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Bane-vedlikehold" hver lørdag, trenger 2-3 personer</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🎓 Kurs & Opplæring</h4>
                        <p>Vakt for instruktører, assistenter, og praktikanter under kurs.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Junior-kurs sommer" trenger 1 instruktør og 2 assistenter</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🍽️ Club House Drift</h4>
                        <p>Vakt for barmann, servering, rensing etter arrangementer.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Fredags-bar" trenger 3 frivillige hver uke</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🌱 Dugnad & Prosjekter</h4>
                        <p>Organisér store dugnad for vedlikehold, renovering, eller miljøprosjekter.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Høst-vedlikehold" - 30 frivillige over en dag</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🎉 Sosiale Arrangementer</h4>
                        <p>Vakt for arrangering av fester, sommerfest, julebord, etc.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Sommerfest 2025" - planlegg 6 uker i forveien</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Økonomisk Verdi</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        Frivillig-kalender sparer klubben både tid og penger:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>5-10 timer</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>Spart per arrangement</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>30%</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>Færre no-shows</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>100%</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>Dokumentasjon</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                        Beregning: En stor turnering med 50 frivillige som krever telefonering, e-posting og koordinering tar 8-10 timer. Frivillig-kalender gjør det på 30 minutter.
                    </p>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når kan vi begynne å bruke Frivillig-kalender?</h4>
                        <p>Systemet er under testing med pilot-klubber. Vi tar gjerne kontakt om å inkludere din klubb. Forventet fullt launched Q1 2025.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor enkelt er det å sette opp vaktlister?</h4>
                        <p>Veldig enkelt. Du lager en ny "vakt", skriver hvem som skal gjøres (f.eks. "Flaggbærer" eller "Scorere"), og hvor mange personer du trenger. Systemet håndterer resten.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan varsles frivillige?</h4>
                        <p>Automatisk. 1 uke før: e-post. 24 timer før: SMS. 2 timer før: SMS påminnelse. Frivillige kan også se sin kalender i appen og på Google Calendar.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva skjer hvis noen melder seg av på siste minutt?</h4>
                        <p>Systemet varsler andre frivillige og har en "erstattings-køen" av mennesker interessert i å fylle posisjonen. Admin kan også manuelt påmeldte noen hvis det trengs.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi se statistikk over frivillig innsats?</h4>
                        <p>Ja! Dashboard viser detaljert statistikk: hvem som har gjort flest timer, hvilke vakter de har gjennomført, no-shows, osv. Perfekt for årsrapporten og til å dele ut priser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Fungerer det på mobil?</h4>
                        <p>Ja! Frivillige melder seg på og av fra telefonen sin. Vi har både responsive webapp og native app for iOS og Android.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi bruke det for andre ting enn turneringer?</h4>
                        <p>Absolutt! Bruk det for: dugnad, vedlikehold, stevne-arbeid, kursinstruktør-vakter, bararbeid, arrangementshjelp, etc. Alle typer av frivillig arbeid kan planlegges.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva med belønningssystemet - er det obligatorisk?</h4>
                        <p>Nei. Du kan bruke Frivillig-kalender uten belønningssystem. Men mange klubber bruker det for å motivere frivillige - poeng kan trekkes i "Frivillig of the Year"-konkurranse eller premieres med gavekort.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Integrerer det med Google Workspace?</h4>
                        <p>Ja! Vakter legges automatisk i Google Calendar til frivillige, slik de kan se det sammen med sitt øvrige arbeid. All kommunikasjon kan også gå gjennom Google Chat/Gmail.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Kontakt oss for prising. Baseres på antall aktive frivillige og antall vakter per år. Vi tilbyr både abonnement og engangsbetaling.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Organiser dugnaden bedre?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Ta kontakt for en uforpliktende prat.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default FrivilligKalender
