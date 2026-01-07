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

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Om Scangolf - Vår Partner</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: 'rgba(76, 175, 80, 0.08)', borderLeft: '5px solid var(--color-gkit-green)', borderRadius: '8px', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        <strong>Scangolf</strong> er Norges ledende leverandør av golfclub-løsninger. Med over <strong>25 års erfaring</strong> i golf-industrien og <strong>45+ norske golfklubber</strong> som brukere, er de en solid og pålitelig partner.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '6px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>25+ År</h4>
                            <p>Erfaring som ledende leverandør av golf-løsninger</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '6px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>45+ Klubber</h4>
                            <p>Aktive norske golfklubber på ClubsiteCMS</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '6px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Azure Hosting</h4>
                            <p>Microsoft Azure infrastruktur, GDPR-kompatibel</p>
                        </div>
                    </div>
                    <h4 style={{ marginBottom: '1rem' }}>Vår Partnership:</h4>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Golfklubbens IT er sertifisert partner for Scangolf ClubsiteCMS</strong>. Vi tilbyr:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                        <li>✓ Integrasjoner med våre egne løsninger (Signage, Søknadsportalen, Booking-Kalender, Google Workspace)</li>
                        <li>✓ Konsulentbistand ved implementasjon og oppstart</li>
                        <li>✓ Opplæring av klubbens personale og redaktører</li>
                        <li>✓ Løpende teknisk support og feilretting</li>
                        <li>✓ Custom-modifikasjoner og tilpasset funksjonalitet</li>
                    </ul>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva får dere med ClubsiteCMS?</h2>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                        ClubsiteCMS er en komplett løsning for klubbens nettside og interne kommunikasjon. Her er de viktigste funksjonene:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📰 Nyheter & Blogg</h4>
                            <p>Publiser nyheter, artikler og blogginnlegg. Enkelt editor, planlagt publisering, tagging og kategorisering.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📁 Dokumentarkiv</h4>
                            <p>Sentralisert arkiv for protokoller, vedtekter, årsmeldinger, budsjetter og andre viktige dokumenter.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>⛳ Banemodul</h4>
                            <p>Håndtering av banedata, handicap, regler, og baneinformasjon for medlemmer og gjester.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📚 Kurs & Opplæring</h4>
                            <p>Administrer golfkurs, instruktørundervisning, booking av ressurser og deltakerlister.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🏆 Turneringer</h4>
                            <p>Administrer turnering, melding, påmelding, startlister, resultater og premieutdeling.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📅 Dynamisk Kalender</h4>
                            <p>Sentralisert kalender for arrangementer, turneringer, styremøter, og fellesarrangementer.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📸 Fotoalbum & Bildearkiv</h4>
                            <p>Deling av klubbfoto, arrangementer, turneringer. Automatisk komprimering, responsivt galleri.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>👥 Kontaktlister</h4>
                            <p>Medlemslister, frivillig-oversikt, styremedlemmer, instruktører. Organisert og søkbar.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🛒 Enkel Nettbutikk</h4>
                            <p>Produktkatalog, handlekurv, betaling via Vipps/Stripe, og ordreoversikt for kundeservice.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🍽️ Restaurant/Kafe</h4>
                            <p>Meny, bestilling, eventuelt integrasjon med bestillings- og betalingssystemer.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>📋 Skjemagenerator</h4>
                            <p>Drag-and-drop bygger for egendefinerte skjemaer - ingen kodingskunnskap nødvendig.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', borderTop: '3px solid var(--color-gkit-green)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>🎨 Dynamisk Layoutplassering</h4>
                            <p>Drag-and-drop element-plassering, tilpasset responsivt design, og visuelle builder for hele nettsiden.</p>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                        Se komplett oversikt på <a href="https://clubsite.no/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none' }}>clubsite.no</a>
                    </p>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Vår Integrasjoner Med ClubsiteCMS</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    Vi knytte ClubsiteCMS mot andre GKIT-løsninger for en helhetlig og integrert klubbhverdag:
                </p>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🔗 Søknadsportalen ↔ ClubsiteCMS</h4>
                        <p>Søknader fra medlemmer og frivillige vises automatisk på klubbens nettside i eget administrasjons-avsnitt. Fullt integrasjon av søknads-data.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📺 Display/Signage ↔ ClubsiteCMS</h4>
                        <p>Digital skilting på klubben får live-oppdateringer direkte fra ClubsiteCMS. Nyheter, arrangementer, resultater vises på displayene automatisk.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📅 Booking-Kalender ↔ ClubsiteCMS</h4>
                        <p>Turneringer, kurs og arrangementer synkroniseres automatisk mellom systemene. Endringer i en plass oppdateres overalt.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🌐 Google Workspace ↔ ClubsiteCMS</h4>
                        <p>Teamkalendere, dokumenter og e-postgrupper integreres for bedre samarbeid. Klubben får en samlet digital arbeidsflate.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📊 Analytics ↔ ClubsiteCMS</h4>
                        <p>Besøksstatistikk, brukeraktivitet og innholdsanalyse hjelper klubben å forstå hva som fungerer og hvor man bør forbedre.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>CS Booking - Simulator & Instruktørbooking</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                        Scangolfs spesialiserte bookingsystem for simulatorer og instruktørundervisning.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📊 Dekning i Norge</h4>
                            <p>15+ golfsentre, 61 simulatorer, 36 instruktører bruker CS Booking aktivt.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>⚙️ Automatisert Håndtering</h4>
                            <p>Automatisk timetabell, instruktør-matching basert på ekspertise, SMS-påminnelser, betalingsintegrasjon.</p>
                        </div>
                        <div style={{ padding: '1.2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', border: '1px solid rgba(76,175,80,0.3)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📈 Rapporter & Statistikk</h4>
                            <p>Detaljerte rapporter over bookinger, instruksjonsinntekter, og brukeraktivitet for bedre planning.</p>
                        </div>
                    </div>
                    <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>Hovedfunksjoner:</h4>
                    <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px', marginBottom: '2rem' }}>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8', columns: 2, columnGap: '2rem' }}>
                            <li>✓ Sanntidstimetabell for simulatorer</li>
                            <li>✓ Instruktørbooking med matching</li>
                            <li>✓ Betalingsintegrasjon</li>
                            <li>✓ SMS-varsler til medlemmer</li>
                            <li>✓ Automatisk fakturering</li>
                            <li>✓ Statistikk og analyser</li>
                            <li>✓ Integrert med ClubsiteCMS</li>
                            <li>✓ Mobil-vennlig booking-app</li>
                        </ul>
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                        Interessert i CS Booking? Kontakt <a href="tel:+4741520802" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none' }}>Scangolf: +47 415 20 802</a> eller <a href="https://clubsite.no/booking" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)', textDecoration: 'none' }}>les mer på clubsite.no/booking</a>
                    </p>
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
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

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
