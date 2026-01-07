import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const AIFileAnalyzer = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Workspace AI File Analyzer</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Smart dokumentanalyse
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        AI-basert verktøy som analyserer dokumenter og produserer automatiske oppsummeringer. Spar tid på administrasjon og få rask innsikt i store datamengder.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Prøv gratis</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/ai-file-analyzer.png"
                        alt="AI File Analyzer Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Problemet og løsningen</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Uten AI File Analyzer */}
                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', border: '2px solid rgba(244, 67, 54, 0.3)', borderRadius: '12px' }}>
                        <h3 style={{ color: '#F44336', marginBottom: '1.5rem' }}>🚫 Manuell dokumentanalyse</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Styreleder må lese alle dokumenter før møte</li>
                            <li>• Budsjett-gjennomgang tar timer</li>
                            <li>• Møtereferat må skrives manuelt</li>
                            <li>• Viktige datoer og beløp blir oversett</li>
                            <li>• Lange møter pga. dokumentgjennomgang</li>
                            <li>• Ingen elektronisk arkiv av oppsummeringer</li>
                            <li>• Ineffektiv forberedelse før møter</li>
                            <li>• Dårlige beslutninger pga. manglende oversikt</li>
                        </ul>
                    </div>

                    {/* Med AI File Analyzer */}
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', border: '2px solid var(--color-gkit-green)', borderRadius: '12px' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>✅ Med AI File Analyzer</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Automatisk oppsummering av alle dokumenter</li>
                            <li>• Budsjett-analyse på minutter</li>
                            <li>• Møtereferat genereres automatisk</li>
                            <li>• Alle viktige datoer og beløp ekstrahert</li>
                            <li>• Korte, fokuserte møter</li>
                            <li>• Elektronisk arkiv av oppsummeringer</li>
                            <li>• Perfekt forberedelse før møter</li>
                            <li>• Informerte, bedre beslutninger</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>8 AI-styrte funksjoner for smartere dokumenthåndtering</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🤖</div>
                        <h3>Automatisk oppsummering</h3>
                        <p style={{ marginBottom: '1rem' }}>Kort sammendrag av PDF og Word:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Eksekutiv sammendrag (1-2 avsnitt)</li>
                            <li>• Bullet-point oversikt av hovedpunkter</li>
                            <li>• Sjøkart med konklusjoner</li>
                            <li>• Språk: Norsk, Engelsk, Svensk</li>
                            <li>• Tilpasset lengde (kort/medium/lang)</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Budsjett- og økonomibanalyse</h3>
                        <p style={{ marginBottom: '1rem' }}>Automatisk analyse av regnskapsdokumenter:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Utlegg av inntekter og kostnader</li>
                            <li>• Sammenligning år-på-år</li>
                            <li>• Avviksanalyse (budsjett vs faktisk)</li>
                            <li>• Grafisk presentasjon av data</li>
                            <li>• Signaler på unormale avvik</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📋</div>
                        <h3>Møtereferat-generering</h3>
                        <p style={{ marginBottom: '1rem' }}>Automatiske møtereferat:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Transkribering av møteopptakelser</li>
                            <li>• Automatisk struktur (dagsorden, vedtak, ansvar)</li>
                            <li>• Ansvarspunkter med personer</li>
                            <li>• Oppfølging av tidligere vedtak</li>
                            <li>• PDF/Word-eksport</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔍</div>
                        <h3>Nøkkelinnsikt-ekstraksjon</h3>
                        <p style={{ marginBottom: '1rem' }}>Intelligente datasøk:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Ekseksjon av datoer og tidsfrist</li>
                            <li>• Utvinning av beløp og pengestrøm</li>
                            <li>• Identifikasjon av kritiske beslutninger</li>
                            <li>• Risikodeteksjon</li>
                            <li>• Automatisk tagging av innhold</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Google Drive integrasjon</h3>
                        <p style={{ marginBottom: '1rem' }}>Seamless Google Workspace-funksjon:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Analyser filer direkte fra Drive</li>
                            <li>• Google Docs/Sheets/Slides-støtte</li>
                            <li>• Lagre oppsummeringer i Drive-mapper</li>
                            <li>• Automatisk dokumentkopling</li>
                            <li>• Deling av oppsummeringer med team</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Sammenligning av dokumenter</h3>
                        <p style={{ marginBottom: '1rem' }}>Analyser flere dokumenter samtidig:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Sammenlign budsjetter fra år til år</li>
                            <li>• Gjennomgang av konkurrerende tilbud</li>
                            <li>• Analyse av møtereferat fra møter</li>
                            <li>• Identifikasjon av mønstre og trender</li>
                            <li>• Visualisering av endringer</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🗂️</div>
                        <h3>Elektronisk arkiv</h3>
                        <p style={{ marginBottom: '1rem' }}>Organisering av oppsummeringer:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Alle oppsummeringer lagres automatisk</li>
                            <li>• Søkbar arkiv med tags</li>
                            <li>• Versjonsstyring av dokumenter</li>
                            <li>• Tilgangs-kontroll per person</li>
                            <li>• Automatisk slet av gamle versjoner</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔐</div>
                        <h3>Sikkerhet og GDPR</h3>
                        <p style={{ marginBottom: '1rem' }}>Beskyttelse av sensitive data:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Google Cloud-basert (GDPR-godkjent)</li>
                            <li>• Kryptering av data i transit og rest</li>
                            <li>• Loggering av alle aksesser</li>
                            <li>• Rolle-basert tilgangskontroll</li>
                            <li>• Sikker sletting av dokumenter</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>6 praktiske brukstilfeller på din klubb</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📊 Styremøte-forberedelse</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Styreleder laster opp alle møte-dokumenter før møte. AI genererer oppsummeringer, budsjett-analyse og ansvarspunkter fra forrige møte. 30 min lesing blir 5 minutter.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>💰 Budsjett-gjennomgang</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>CFO laster opp årets regnskap. AI analyserer inntekter, kostnader, avvik fra budsjett, og lager visuell rapport. Styre får oppdatert status på 2 minutter.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📝 Møtereferat-generering</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Admin spiller inn møte-opptaket eller laster opp notater. AI genererer strukturert referat med dagsorden, vedtak, og ansvarspunkter. Admin godkjenner og sender ut.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🤝 Avtale-gjennomgang</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Styreleder mottar sponsoravtale fra eksterne. AI trekker ut viktige vilkår, datoer, og beløp. Styre får oversikt før forhandling.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📋 Sammenlikning av tilbud</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Klubben har mottatt 3 tilbud for ny golf-simulator. Admin laster opp alle 3 PDF-er. AI sammenlikner pris, vilkår, leveringstid og tekniske spesifikasjoner i en tabell.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🗂️ Årlig arkiv-gjennomgang</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Klubben har 52 møtereferater fra året. AI genererer årlig oppsummering med alle viktige hendelser, vedtak og økonomisk resultat.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Økonomisk verdi for klubben</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⏱️ Tidsbesparelser</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• <strong>5-8 timer/måned</strong> på møte-forberedelse</li>
                                <li>• <strong>3-4 timer/måned</strong> på budsjett-gjennomgang</li>
                                <li>• <strong>2 timer/møte</strong> på referat-skriving</li>
                                <li>• <strong>Total: 15-25 timer/måned</strong></li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>💡 Bedre beslutninger</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• Styreleder bedre forberedt</li>
                                <li>• Alle møte-dokument tolket riktig</li>
                                <li>• Mindre risiko for oversettelser</li>
                                <li>• Raskere møter (30-40% kortere)</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📈 Eksempel: Tidsbesparelse</h4>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Typisk klubb med styre og utsendinger:</p>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• <strong>Møte-forberedelse:</strong> 6 timer × kr 400/time = kr 2.400/måned</li>
                            <li>• <strong>Budsjett-gjennomgang:</strong> 3 timer × kr 400/time = kr 1.200/måned</li>
                            <li>• <strong>Referat-skriving:</strong> 2 timer/møte × 12 møter = 24 timer × kr 300/time = kr 7.200/måned</li>
                            <li>• <strong>Samlet tidsbesparelse:</strong> kr 10.800/måned = <strong>kr 129.600/år</strong></li>
                            <li>• <strong>Pluss: Bedre møter og decisions</strong> (vurdert konservativt) = <strong>+kr 50-100k økt inntekt/år</strong></li>
                            <li>• <strong>TOTAL ÅRLIG GEVINST:</strong> <strong>kr 180-230.000</strong></li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', borderRadius: '12px', border: '2px solid rgba(244, 67, 54, 0.3)' }}>
                        <h4 style={{ color: '#F44336', marginBottom: '1rem' }}>🎯 Payback-periode</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Med systemkostnad på ca kr 5-10k årlig, oppnår klubben full ROI på første måned. Utrolig verdiskaping.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⚡ Spar Tid</h4>
                            <p>Gå gjennom store dokumentmengder på minutter i stedet for timer.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🧠 Bedre Beslutninger</h4>
                            <p>Få rask oversikt over fakta før styremøter og forhandlinger.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikkert</h4>
                            <p>Dine data forlater aldri din sikre Google Cloud-sone.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>10 spørsmål vi får om AI File Analyzer</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>1. Når kan vi teste AI File Analyzer?</h4>
                        <p>Beta-testing pågår nå. Kontakt oss for tilgang til test-versjonen. Pilot-klubber får gratis tilgang første 3 måneder mens vi refiner systemet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>2. Hvilke filtyper støttes?</h4>
                        <p>PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), og alle Google Workspace-formater (Docs, Sheets, Slides, Drive). Flere formater legges til - kontakt oss hvis du har spesifikke behov.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>3. Er dokumentene mine sikre?</h4>
                        <p>100% sikkerhet. All prosessering skjer innenfor din Google Cloud-sone. Data deles aldri med tredjeparter. Kryptering både i transit og rest. GDPR-godkjent og sertifisert.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>4. Hva med sensitive informasjon?</h4>
                        <p>AI rediger automatisk sensitive data (personnummer, bankkonto, etc.) fra oppsummeringer. Du kan også manuelt markere felt som skal holdes privat. Fullkommen kontroll over hva som deles.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>5. Hvor nøyaktig er AI-oppsummeringene?</h4>
                        <p>Veldig nøyaktig (95%+). Systemet bruker advanced LLM-modeller med kontroll-mekanismer. Admin sjekker alltid oppsummering før bruk. Vi vedlikeholder en tilbakemeldings-mekanisme for å forbedre nøyaktighet over tid.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>6. Kan AI skrive møtereferater?</h4>
                        <p>Ja! Du kan opplaste møteopptaket eller notater. AI transkriberer, strukturerer og lager referat med dagsorden, vedtak og ansvarspunkter. Admin godkjenner før det sendes ut. Sparer 1-2 timer per møte.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>7. Hva koster systemet?</h4>
                        <p>Prismodellen er under sluttfinalisering. Forventet kostnad er kr 5-15k årlig basert på bruk. Beta-testere får spesielle pilotergepriser. Kontakt oss for mer detaljer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>8. Integreres det med Google Workspace?</h4>
                        <p>Ja, fullstendig integrasjon! Åpne AI File Analyzer rett fra Google Drive, analyser filer direkte, og lagre oppsummeringer tilbake i Drive. Bruk Google Docs for å redigere oppsummeringer. Seamless opplevelse.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>9. Kan vi dele oppsummeringer med medlemmer?</h4>
                        <p>Ja, med tilgangskontroll. Du setter hvem som skal se hver oppsummering (styre, admin, alle medlemmer, etc.). Oppsummeringer lagres i Google Drive og deles via standard Google-deling. Versjonskontroll på alle dokumenter.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>10. Hva hvis AI gjør feil?</h4>
                        <p>Admin kan alltid redigere og godkjenne før bruk. Vi lagrer feedback når AI gjør feil, og bruker det til å forbedre modellen. AI er et verktøy for å *spare tid*, ikke for å erstatte menneskelig kontroll. Alltid menneskelig kvalitetssikring.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Vil du teste AI?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Kontakt oss for en demo av AI File Analyzer.
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

export default AIFileAnalyzer
