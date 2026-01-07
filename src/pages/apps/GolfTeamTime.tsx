import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfTeamTime = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfTeam-Time</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Tidregistrering for klubben
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Enkel tidregistrering og oppgavehåndtering for golfklubbens personale og frivillige team.
                    </p>
                    <div className="hero-cta">
                        <a href="https://golfteam-time-eur.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne appen</a>
                        <a href="#kontakt" className="btn btn-secondary">Kom i gang</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfteam-time.png"
                        alt="GolfTeam-Time Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⏱️</div>
                        <h3>Tidregistrering</h3>
                        <p>Enkel og rask registrering av timer for både fast ansatte og frivillige teammedlemmer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📋</div>
                        <h3>Oppgavehåndtering</h3>
                        <p>Full kontroll på oppgaver og prosjekter. Fordel ressurser der det trengs mest på banen eller i klubbhuset.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Ressursoversikt</h3>
                        <p>Få sanntidsoversikt over hvem som jobber med hva, og planlegg bemanningen mer effektivt.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobilvennlig</h3>
                        <p>Appen er optimalisert for bruk på farten, slik at ansatte kan registrere timer direkte fra banen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Problemet vi løser</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '2rem', background: 'rgba(255, 87, 34, 0.1)', borderRadius: '8px', borderLeft: '5px solid #FF5722' }}>
                        <h4 style={{ color: '#FF5722', marginBottom: '1rem' }}>❌ Før - Uoversiktlig:</h4>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>Timelistter på papir og Post-its</li>
                            <li>Usikker data i Excel-ark</li>
                            <li>Ingen oversikt over hvem som gjorde hva</li>
                            <li>Lønnskjøring blir omstendelig</li>
                            <li>Oppgaver faller mellom to stoler</li>
                            <li>Ingen historikk over aktiviteter</li>
                        </ul>
                    </div>
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px', borderLeft: '5px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>✅ Etter - Kontrollert:</h4>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>Digital tidsregistrering fra dag en</li>
                            <li>Pålitelig, sikker data</li>
                            <li>Full dokumentasjon av arbeid</li>
                            <li>Automatisk lønns-eksport</li>
                            <li>Oppgavene er tydelig fordelt</li>
                            <li>Fullstendig historikk & rapporter</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Detaljerte Funksjoner</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>⏱️ Tidsregistrering</h4>
                            <p style={{ marginBottom: '1rem' }}>Start/stopp timer direkte i appen.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Enkel start/stopp-knapp</li>
                                <li>✓ Manuell timelengde-innføring</li>
                                <li>✓ Pause-funksjonalitet</li>
                                <li>✓ Automatisk runding (15 min)</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📋 Oppgavehåndtering</h4>
                            <p style={{ marginBottom: '1rem' }}>Tildel og spor oppgaver på klubben.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Opprett oppgaver (gardening, vedlikehold, etc.)</li>
                                <li>✓ Prioritering (urgent, normal, low)</li>
                                <li>✓ Tildelinger til personer</li>
                                <li>✓ Status-tracking (todo, in progress, done)</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🏷️ Arbeidskategorier</h4>
                            <p style={{ marginBottom: '1rem' }}>Klassifiser arbeid for bedre rapportering.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Banevedlikehold</li>
                                <li>✓ Klubbhus-drift</li>
                                <li>✓ Admin & kontor</li>
                                <li>✓ Undervisning & trening</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>👥 Teamoversikt</h4>
                            <p style={{ marginBottom: '1rem' }}>Se hvem som jobber når og med hva.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Aktiv timer-oversikt</li>
                                <li>✓ Daglig aktivitet-log</li>
                                <li>✓ Ukentlig timesum</li>
                                <li>✓ Månedlige rapporter</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>💰 Lønnssystem-integrasjon</h4>
                            <p style={{ marginBottom: '1rem' }}>Eksporter direkte til lønnssystem.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Eksport til Excel/CSV</li>
                                <li>✓ Direkte API-integrasjon</li>
                                <li>✓ Satts per oppgave/kategori</li>
                                <li>✓ Overtime-tracking</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📊 Rapporter & Analytics</h4>
                            <p style={{ marginBottom: '1rem' }}>Detaljert innsikt i tidsbruk.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Timesum per person</li>
                                <li>✓ Timesum per oppgave</li>
                                <li>✓ Timesum per kategori</li>
                                <li>✓ Tidsperiode-analyse</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📱 Mobil-Optimalisert</h4>
                            <p style={{ marginBottom: '1rem' }}>Designet for arbeid på farten.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Full responsiv webapp</li>
                                <li>✓ Native app (iOS/Android)</li>
                                <li>✓ Offline-funksjonalitet</li>
                                <li>✓ GPS-lokasjon (valgfritt)</li>
                            </ul>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🔐 Admin-Kontroll</h4>
                            <p style={{ marginBottom: '1rem' }}>Full styring for administrator.</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginLeft: '1rem' }}>
                                <li>✓ Bruker-roller og tilganger</li>
                                <li>✓ Godkjenning av timer</li>
                                <li>✓ Justering av poster</li>
                                <li>✓ Historikk & audit-logg</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏌️ Banevedlikehold</h4>
                        <p>Registrer timer for gress-klipping, greens-stell, vedlikehold av bunkers og fairway.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Greens-klipping" tar 8 timer per uke, spor hvem som gjorde det</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🍽️ Klubbhus-drift</h4>
                        <p>Timer for barmann, betjening, rensing, inventar-kontroll og lager-oppgjøring.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Fredag-bartender" 6 timer, "Cleaning" 4 timer</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📚 Undervisning & Trening</h4>
                        <p>Registrer timer for instruktører, assistenter, og cours-ledere.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Junior-kurs" (instruktør 6 timer, assistent 8 timer)</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏆 Turneringsleding</h4>
                        <p>Registrer timer for stevne-administratorer, dommere, og arrangør-assistenter.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Ski Open" - 15 timer setup, 20 timer running, 5 timer cleanup</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📋 Admin & Kontor</h4>
                        <p>Spor administratorer som gjør kontorarbeid, bookkeeping, og styresaker.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Styrearbeid", "Regnskap", "Medlems-registrering"</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.08)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🎯 Spesialprosjekter</h4>
                        <p>Spor timer på renovation, oppgradering, eller større vedlikehold.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--color-gray-light)' }}>Eksempel: "Starter-hus painting" (3 frivillige, 8 timer hver)</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Økonomisk Verdi</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        GolfTeam-Time gir klubben merkbar ROI gjennom automatisering og bedre ressurs-planlegging:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>8 timer</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>Spart per lønnskjøring</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>100%</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>Nøyaktig timesjekk</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)', fontWeight: 'bold' }}>0 feil</p>
                            <p style={{ color: 'var(--color-gray-light)' }}>I lønnsberegning</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                        Beregning: Hvis klubben har 3-4 ansatte, tar manual lønnskjøring ca. 8 timer per måned (manuelle timelister, Excel-kalkulering, dobbeltsjekk). GolfTeam-Time reduserer dette til 30 minutter.
                    </p>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når lanseres GolfTeam-Time?</h4>
                        <p>Appen er under aktiv testing med pilot-klubber. Vi lanserer fullt i Q1 2025. Ta kontakt for tidlig tilgang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvem kan registrere timer?</h4>
                        <p>Alle som jobber for eller frivillig for klubben - ansatte, instruktører, og frivillige hjelpehjul. Admin kontrollerer hvem som har tilgang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan ansatte registrere timer fra mobilen?</h4>
                        <p>Ja! Full webapp og native app for iOS/Android. Ansatte kan starte/stoppe timer direkte fra banen med en enkelt knapp.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan eksporterer vi til lønnssystem?</h4>
                        <p>Vi tilbyr automatisk eksport til Excel/CSV, eller direkte API-integrasjon med lønnsleverandører som Visma, Tripletex, etc. Spørsmål oss om din leverandør!</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan admin godkjenne timer før eksport?</h4>
                        <p>Ja! Admin har komplett kontroll. Alle timer som registreres må godkjennes før de sendes videre til lønnsystemet. Mulighet for manuell justering også.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva med ovartid-tracking?</h4>
                        <p>Systemet track automatisk overtid basert på arbeidstimane du definerer. Admin kan sette regler for hva som er overtid og hvordan det skal betales.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi spore aktivitet per kategori/oppgave?</h4>
                        <p>Ja! Timer kategoriseres per oppgave (f.eks. "Greens-klipping", "Bar-tjeneste", "Adminarbeid"). Rapporter viser eksakt tidsbruk per kategori.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis noen glemmer å registrere timer?</h4>
                        <p>Admin kan manuelt legge inn timer i etterkant med fult historikk. Timer vises i audit-loggen, slik at det er transparent hvem som gjorde endringen og når.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Sikkerhet - hvem ser timedata?</h4>
                        <p>Kun admin og den enkelte person ser egne timer. Rapporter kan krypteres og er GDPR-kompatible. Alt data lagres sikkert på Microsoft Azure.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Kontakt oss for prising. Baseres på antall aktive brukere og om du trenger API-integrasjon. Vi tilbyr både abonnement og engangsbetaling.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Få kontroll på tiden?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper dere i gang med GolfTeam-Time.
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

export default GolfTeamTime
