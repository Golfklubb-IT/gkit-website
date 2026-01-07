import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Golfbilkontroll = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Golfbilkontroll</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Oversikt over golfbiler
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Oversikt over klubbens golfbiler med booking- og vedlikeholdsstyring. Hold full kontroll på flåten, utleie og servicebehov.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om demo</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfbilkontroll.png"
                        alt="Golfbilkontroll Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Problemet og løsningen</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Uten Golfbilkontroll */}
                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', border: '2px solid rgba(244, 67, 54, 0.3)', borderRadius: '12px' }}>
                        <h3 style={{ color: '#F44336', marginBottom: '1.5rem' }}>🚫 Uten digital kontroll</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Papirbasert booking eller Excel-ark</li>
                            <li>• Manuelle nøkkelsystemer som misforvaltes</li>
                            <li>• Vedlikehold glemmes eller kommer for sent</li>
                            <li>• Ingen oversikt over bilstatus eller batteri</li>
                            <li>• Dobbeltbookinger og konflikter</li>
                            <li>• Kostbare driftsforstyrrelser</li>
                            <li>• Ingen dokumentasjon av bruk/skader</li>
                            <li>• Misforstå innkobler og oppladning</li>
                        </ul>
                    </div>

                    {/* Med Golfbilkontroll */}
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', border: '2px solid var(--color-gkit-green)', borderRadius: '12px' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>✅ Med Golfbilkontroll</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Sanntid digital booking for alle biler</li>
                            <li>• Smartlås og digitale nøkkelsystem</li>
                            <li>• Automatiske vedlikeholdsvarsel</li>
                            <li>• Sanntids statusovervåking</li>
                            <li>• Ingen dobbeltbookinger</li>
                            <li>• Forebyggende vedlikehold</li>
                            <li>• Automatisk skade-/bruksrapportering</li>
                            <li>• Optimal ressursbruk og utnyttelse</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>8 funksjoner som gjør golfbilflåten smartere</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🚗</div>
                        <h3>Flåteoversikt i sanntid</h3>
                        <p style={{ marginBottom: '1rem' }}>Alle biler på ett oversiktlig dashboard:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Aktiv/ledig status</li>
                            <li>• Batteripersentasil (for el-biler)</li>
                            <li>• Brennstoffnivå</li>
                            <li>• Gjeldende bookinger</li>
                            <li>• Vedlikeholdsstatus</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Medlemmerbooking</h3>
                        <p style={{ marginBottom: '1rem' }}>Integrert booking for medlemmer:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Velg dato, tid og biltype</li>
                            <li>• 18-hulls eller 9-hulls runder</li>
                            <li>• Automatisk prisberegning</li>
                            <li>• Betaling via Vipps/kort</li>
                            <li>• SMS/email-bekreftelse</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔧</div>
                        <h3>Vedlikeholdsplanlegging</h3>
                        <p style={{ marginBottom: '1rem' }}>Forebyggende vedlikehold:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Automatiske servicevarsler</li>
                            <li>• Vedlikehold etter kjøring/timer</li>
                            <li>• Sikkerhetsjekklister</li>
                            <li>• Historikk over alle reparasjoner</li>
                            <li>• Driftsstatus og sikkerhet</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Bruks- og inntektsrapporter</h3>
                        <p style={{ marginBottom: '1rem' }}>Detaljert analyse av bilparken:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Utnyttelsesgrad per bil</li>
                            <li>• Månedlig inntekt per bil</li>
                            <li>• Høypunkter og trendanalyse</li>
                            <li>• Medlem-/gjestebookinger</li>
                            <li>• Vedlikeholdskostnader</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔑</div>
                        <h3>Smartlås & digital nøkkel</h3>
                        <p style={{ marginBottom: '1rem' }}>Moderne låsystem:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• NFC eller app-basert åpning</li>
                            <li>• Tidsbaserte låseperioder</li>
                            <li>• Midtstasjonssendor for nøkkeltrekk</li>
                            <li>• Alle åpninger logges</li>
                            <li>• Trygg og sporbar</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⚡</div>
                        <h3>Lade- og strømstyring</h3>
                        <p style={{ marginBottom: '1rem' }}>Optimal batteri og strøm:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Batteriovergang og diagnose</li>
                            <li>• Ladestasjon-kontroll</li>
                            <li>• Automatisk notis ved lavt batteri</li>
                            <li>• Effektivitetsanalyse</li>
                            <li>• Strømkostnadssporing</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🐛</div>
                        <h3>Skade- og problemrapporter</h3>
                        <p style={{ marginBottom: '1rem' }}>Dokumentasjon og ansvar:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Medlemmer rapporterer skader via app</li>
                            <li>• Automatisk bildfoto-dokumentasjon</li>
                            <li>• Systemgenert rapport for admin</li>
                            <li>• Tidstempling og sporbarhet</li>
                            <li>• Forsikrings-integrasjon</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobil-first app</h3>
                        <p style={{ marginBottom: '1rem' }}>Tilgjengelig overalt:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• iOS og Android native apps</li>
                            <li>• Offline-funksjonalitet</li>
                            <li>• Push-varsler om bookinger</li>
                            <li>• GPS-navigering til bil</li>
                            <li>• En-tap bokser og åpning</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>6 praktiske brukstilfeller på din klubb</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📞 Medlemmer sjekker tilgjengelighet</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Medlemmer åpner appen, ser ledige biler i dag, booker én og betaler automatisk via Vipps. Ingen kontakt med admin nødvendig.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🚨 Vedlikeholdsvarsel</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Systemet varsler automatisk når en bil nærmer seg servicetidspunkt (f.eks. hver 5000 km). Admin planlegger servicetid i systemet, og bilen låses fra booking.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⚡ Elektrobil-lading</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>System varsler når batteri er lavt, og prioriterer biler som må være klar til neste booking. Automatisk logging av strømkostnader per bil.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🐛 Skade-dokumentasjon</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Medlem rapporterer skade via app med foto og beskrivelse. System dokumenterer tidspunkt og medlem. Admin får automatisk varsling og kan igangsette reparasjon.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📊 Månedsrapport til styre</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Styre får automatisk rapport med bilparks utnyttelse, inntekter, vedlikeholdskostnader og problemer. Grunnlag for prisbeslutninger og investeringer.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🔒 Sikkerhet og ansvar</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Alle nøkkelbehov er digitale med sporing. Hvis skade oppstår, vet du hvem som hadde bilen. System integrer med forsikring for erstatning.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Økonomisk verdi for klubben</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⬆️ Økt inntekt</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• <strong>20-30% økning</strong> i bilparks utnyttelse</li>
                                <li>• Medlemmer booker digitalt uten "kø"</li>
                                <li>• Færre ledige bilslots</li>
                                <li>• Automatisk betaling = ingen fakturering</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⬇️ Reduserte kostnader</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• <strong>30-40% færre reparasjoner</strong> (forebyggende vedlikeholding)</li>
                                <li>• Mindre nedetid per bil</li>
                                <li>• Bedre leverandørkjøp-kontrakter</li>
                                <li>• <strong>5-10 timer</strong> administrativ tidsbesparelse</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📈 Eksempel: 5-bilsflåte</h4>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Gjennomsnittsclub med 5 biler, som leies ut gjennomsnittlig 3 ganger per dag:</p>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• <strong>Dagens inntekt:</strong> 5 biler × 3 leieavtaler × kr 250 = kr 3.750/dag = kr 93.750/måned</li>
                            <li>• <strong>Med Golfbilkontroll:</strong> +25% utnyttelse = kr 116.875/måned</li>
                            <li>• <strong>Månedsgevinst:</strong> kr 23.125 i tilleggsinntekter + kr 5-10k spare på vedlikehold</li>
                            <li>• <strong>Årlig gevinst:</strong> kr 280.000 + (kr 60-120k vedlikeholdsbesparelse) = <strong>kr 340.000-400.000</strong></li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', borderRadius: '12px', border: '2px solid rgba(244, 67, 54, 0.3)' }}>
                        <h4 style={{ color: '#F44336', marginBottom: '1rem' }}>🎯 Payback-periode</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Med typisk systemkostnad på kr 50-80k årlig, oppnår klubben full dekking av investering innen 1-2 måneder. Resten er ren profitt.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💰 Økt Inntekt</h4>
                            <p>Bedre utnyttelse av bilparken gir høyere leieinntekter.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Lavere Kostnader</h4>
                            <p>Forebyggende vedlikehold reduserer dyre reparasjoner og nedetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>😊 Fornøyde Spillere</h4>
                            <p>Alltid fungerende biler tilgjengelig når de trengs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>10 spørsmål vi får om Golfbilkontroll</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>1. Når lanseres Golfbilkontroll?</h4>
                        <p>Pilot-testing med utvalgte klubber pågår nå. Lansering planlagt Q2 2026. Vi søker 5-10 pilot-klubber som vil testes systemet grundig og få spesielle betingelser. Interessert? Kontakt oss!</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>2. Hva er kostnad for systemet?</h4>
                        <p>Typisk kostnad er kr 50-80k årlig (avhengig av antall biler og funksjoner). Pilot-klubber får 40-50% rabatt første år. Siden systemet regner seg inn på 1-2 måneder (gjennom inntektsøkning og kostnadsbesparelse), blir ROI veldig positiv. Vi tilbyr også månedlig betalingsmodell hvis ønskelig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>3. Må vi installere GPS på alle bilene?</h4>
                        <p>Nei. Grunnsystemet fungerer uten GPS. GPS er et valgfritt tillegg for sanntids-sporing, geofencing og navigationshjelp. Mange klubber starter uten GPS og legger det til senere. OBD2-sensorer (som plugger i bilens diagnostikk-port) kan også brukes for kostnadseffektiv tracking.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>4. Hvordan integreres med Booking-Kalender?</h4>
                        <p>Golfbilkontroll og Booking-Kalender snakker sammen via API. Når medlem booker turnering i Booking-Kalender, kan system automatisk reservere ønsket antall biler for den datoen. Omvendt vises bilstatus i bookingsystemet. Semlost integrering.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>5. Kan vi låse biler med smartlås?</h4>
                        <p>Ja! Vi støtter både NFC-kort (som oppbygde nøkkler), app-basert åpning (Bluetooth), og kombi-løsninger. Smartlåsen plugges på bilens eksisterende lås og kan styres via system. Alle låseåpninger logges med tidsstempel og medlem-ID. Total sporbarhet og sikkerhet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>6. Hvordan håndteres benzin/strøm-kostnader?</h4>
                        <p>Systemet kan integreres med el-biler for å logge strømkostnader per lading. For bensinbiler kan admin manuelt legge inn tankinger eller koble til fuelcard-API. Alle kostnader knyttest til bilens leieavtaler, så du vet nøyaktig kostnads-struktur per member eller periode.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>7. Hvordan rapporteres skader eller problemer?</h4>
                        <p>Medlemmer åpner app, går til "Rapporter problem", tar bilder av skaden, skriver beskrivelse. System lagrer alt med tidsstempel, lokasjon og medlem-ID. Admin får øyeblikkelig varsling via SMS/email og kan starte reparasjonsprosess. Automatisk integrasjon med forsikringsselskap for dokumentasjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>8. Hvilke rapporter får vi som admin?</h4>
                        <p>Daglige: Antall bookinger, inntekter, biler i service. Ukentlige: Utnyttelsesgrad per bil, vedlikeholdsstatus, inntektstrend. Månedlige: Fullstendig flåteanalyse, kostnader, profitabilitet per bil, medlems-statistikk. Alt eksporterbar til Excel for videre analyse eller styrereportasje.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>9. Fungerer systemet hvis medlem er offline?</h4>
                        <p>Mobil-appen har offline-modus som cachet bilstatus og bookinger lokalt. Når internettet kommer tilbake, synkroniseres alt automatisk. Smartlås virker via Bluetooth selv uten mobildata (NFC-kort fungerer alltid). Systemet er designet for høy reliability.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>10. Hva hvis klubben allerede har eget bookingsystem?</h4>
                        <p>Vi kan integrere Golfbilkontroll med eksisterende systemer via API. Eller dere kan gradvis migrere til vår platform. Vi tilbyr også hybrid-løsninger der Golfbilkontroll er en modul som fungerer sammen med ditt eksisterende system. Kontakt oss for tilpasset løsning.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Få kontroll på bilparken?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi viser deg hvordan Golfbilkontroll fungerer.
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

export default Golfbilkontroll
