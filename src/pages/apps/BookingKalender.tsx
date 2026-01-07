import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const BookingKalender = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Booking & Kalender</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        For simulator og instruktør
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Systemer for simulator, instruktør og frivillige timeplanlegging. Skreddersydde løsninger tilpasset klubbens spesifikke behov.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Kom i gang</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/booking-kalender.png"
                        alt="Booking & Kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Problemet og løsningen</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Uten Booking-Kalender */}
                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', border: '2px solid rgba(244, 67, 54, 0.3)', borderRadius: '12px' }}>
                        <h3 style={{ color: '#F44336', marginBottom: '1.5rem' }}>🚫 Manuelle bookingreserver</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Telefon eller e-post for reservering</li>
                            <li>• Admin må sjekke kalender og bekrefte</li>
                            <li>• Dobbeltbookinger oppstår</li>
                            <li>• Medlemmer vet ikke tilgjengelighet</li>
                            <li>• Betaling må håndteres separat</li>
                            <li>• "No-shows" fordi ingen reminder</li>
                            <li>• Ingen real-time integrasjon</li>
                            <li>• Tidsforbrukende administrasjon</li>
                        </ul>
                    </div>

                    {/* Med Booking-Kalender */}
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', border: '2px solid var(--color-gkit-green)', borderRadius: '12px' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1.5rem' }}>✅ Med Booking-Kalender</h3>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• Self-service booking 24/7</li>
                            <li>• Automatisk tilgjengelighets-sjekk</li>
                            <li>• Ingen dobbeltbookinger</li>
                            <li>• Medlemmer ser real-time ledighet</li>
                            <li>• Automatisk betalingskontroll</li>
                            <li>• Automatiske SMS/email-remindere</li>
                            <li>• Live integrasjon med alle systemer</li>
                            <li>• Minimal administrativ innsats</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>8 funksjoner for smarter kalenderadministrasjon</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>Simulator-booking</h3>
                        <p style={{ marginBottom: '1rem' }}>Medlemmer booker simulatortimer:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Velg dato, tid, trainer og type økt</li>
                            <li>• Se alle tilgjengelige simulatorer</li>
                            <li>• Pakketilbud og kuponger</li>
                            <li>• Automatisk betalingskontroll</li>
                            <li>• SMS-bekreftelse og reminder</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Instruktør-booking</h3>
                        <p style={{ marginBottom: '1rem' }}>Pro-timer og lesoner:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Medlemmer booker lesoner med PRO</li>
                            <li>• Valg av instruktør og emne</li>
                            <li>• Lesontakst og kutsystem</li>
                            <li>• Integrasjon med GolfBox</li>
                            <li>• Lesonevalueringslogging</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏆</div>
                        <h3>Turnering-booking</h3>
                        <p style={{ marginBottom: '1rem' }}>Turneringer og konkurranser:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Automatisk påmelding og start-tider</li>
                            <li>• Integrasjon med Golfbilkontroll</li>
                            <li>• Automatiske startlister</li>
                            <li>• Resultattilmelding og ranking</li>
                            <li>• Hendelse-notifikasjon</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏢</div>
                        <h3>Møterom & lokaler</h3>
                        <p style={{ marginBottom: '1rem' }}>Klubbhus og andre lokaler:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Utleie av møterom, restaurant, klubbhus</li>
                            <li>• Håndtering av arrangementer</li>
                            <li>• Automatisk betaling og avbooking</li>
                            <li>• Kalkkulering av kostnader</li>
                            <li>• Medlem-oversikt</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔔</div>
                        <h3>Automatiske varsler</h3>
                        <p style={{ marginBottom: '1rem' }}>Reduser no-shows:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• SMS ved booking-bekreftelse</li>
                            <li>• Email-reminder 24 timer før</li>
                            <li>• SMS-påminnelse 1 time før</li>
                            <li>• Automatisk kansellering etter no-show</li>
                            <li>• Tunebare varsellmaler</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💳</div>
                        <h3>Betalingsintegrasjon</h3>
                        <p style={{ marginBottom: '1rem' }}>Fleksibel betaling:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Vipps, Stripe, Nets, Kredittkort</li>
                            <li>• Automatisk betalingskontroll</li>
                            <li>• Fakturering til medlemskonto</li>
                            <li>• Rabatt- og kupongsystem</li>
                            <li>• Betalingshistorikk per medlem</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Systemintegrasjoner</h3>
                        <p style={{ marginBottom: '1rem' }}>Seamless samarbeid:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• GolfBox-integrasjon for medlemsdata</li>
                            <li>• Google Calendar sync</li>
                            <li>• Regnskapssystem-eksport</li>
                            <li>• Søknadsportalen-integrasjon</li>
                            <li>• API for custom integrering</li>
                        </ul>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapporter & analyse</h3>
                        <p style={{ marginBottom: '1rem' }}>Data-driven innsikt:</p>
                        <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-gray-light)' }}>
                            <li>• Belegg og bruk per time/dag/måned</li>
                            <li>• Inntektsanalyse per simulattor/instruktør</li>
                            <li>• No-show-statistikk</li>
                            <li>• Medlemsaktivitet</li>
                            <li>• Trend-analyse og prognose</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>6 praktiske brukstilfeller på din klubb</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📱 Medlem booker simulator</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Medlem åpner app, velger dato og tid, ser ledigeitimmer, betaler automatisk via Vipps. Får SMS-bekreftelse og automatisk reminder dagen etter.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏫 Booking av pro-lesoner</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Medlem booker leson med PRO direkte i appen. PRO-kalender oppdateres automatisk. Leson lagres i GolfBox som statistikk på medlem.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏆 Turneringspåmelding</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Medlem melder seg på turnering via appen, blir automatisk lagt inn i GolfBox med start-tid. Får SMS-reminder 24 timer før start.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🏠 Møterom-reservering</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Admin booker møterom for styre- eller komitemøter. System håndterer betaling og sender tilgangs-kort til alle deltakere.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📊 Månedsrapport til styret</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Systemet genererer automatisk rapport med simulator-belegg, inntekter, no-show-rate og populære timeslot. Grunnlag for prisdiskusjoner.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>🔄 Google Calendar sync</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Pro og admin får automatisk Google Calendar-sync. Alle bookinger, møter og oppgaver vises i samme kalender. Ingen doble systemer.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Økonomisk verdi for klubben</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⬆️ Økt belegg</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• <strong>15-25% økning</strong> i simulator-bookinger</li>
                                <li>• Self-service senker reserveringshinder</li>
                                <li>• Fylling av ledig kapasitet</li>
                                <li>• Automatisk betalingskontroll</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>⬇️ Redusert no-show</h4>
                            <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                                <li>• <strong>30-50% færre no-shows</strong> (SMS-reminders)</li>
                                <li>• Automatisk kansellering av no-show</li>
                                <li>• Gjennomsnittlig no-show er 10-15%</li>
                                <li>• Medfører tapte inntekter</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>📈 Eksempel: Simulator-booking</h4>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Klubb med 2 simulatorer, åpen 8 timer/dag:</p>
                        <ul style={{ lineHeight: '1.8', color: 'var(--color-gray-light)' }}>
                            <li>• <strong>Dagens inntekt:</strong> 2 sim × 8 timer × kr 150/time × 70% belegg = kr 1.680/dag = kr 40.320/måned</li>
                            <li>• <strong>Med Booking-Kalender:</strong> +20% belegg + 40% redusert no-show = kr 1.680 × 1.20 × 1.40 = kr 2.822/dag</li>
                            <li>• <strong>Månedsgevinst:</strong> (kr 2.822 - kr 1.680) × 22 arbeidsdager = <strong>kr 25.128/måned</strong></li>
                            <li>• <strong>Årlig gevinst:</strong> kr 25.128 × 12 = <strong>kr 301.536/år</strong></li>
                            <li>• <strong>Admin-besparelser:</strong> Minst 8 timer/uke, som er kr 40k/år (på kr 250/time)</li>
                            <li>• <strong>TOTAL ÅRLIG GEVINST:</strong> kr 340.000+ (før systemkostnad)</li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(244, 67, 54, 0.1)', borderRadius: '12px', border: '2px solid rgba(244, 67, 54, 0.3)' }}>
                        <h4 style={{ color: '#F44336', marginBottom: '1rem' }}>🎯 Payback-periode</h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>Med systemkostnad på ca kr 20-30k årlig, oppnår klubben full dekking innen 1 måned. Alle inntekter etter det er ren profitt + tidsbesparing.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Økt Belegg</h4>
                            <p>Enkel booking senker terskelen for å bestille. Fyll opp ledig kapasitet.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏱️ Mindre Administrasjon</h4>
                            <p>Slipp telefoner og e-poster. Alt skjer automatisk.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💳 Sikker Betaling</h4>
                            <p>Ta betalt ved booking. Reduser "no-shows" og tapte inntekter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>10 spørsmål vi får om Booking-Kalender</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>1. Når lanseres Booking-Kalender?</h4>
                        <p>Beta-testing med pilot-klubber pågår nå. Lansering planlagt Q2 2026. Vi søker 3-5 pilot-klubber som vil teste og få 50% rabatt første året. Interessert? Kontakt oss!</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>2. Hva koster systemet?</h4>
                        <p>Typisk kostnad er kr 20-30k årlig for mindre klubber. Avhengig av antall simulatorer, møterom og integrasjoner. Mange klubber tjener inn det innen første måned gjennom økt belegg og færre no-shows.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>3. Kan vi integrere med GolfBox?</h4>
                        <p>Ja! Booking-Kalender integreres direkte med GolfBox. Medlemsdata synkroniseres automatisk, lesoner loggeses i GolfBox-statistikk, og påmeldinger til turneringer oppdateres i GolfBox-startlister. Seamless integrasjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>4. Hva med Google Calendar-synkronisering?</h4>
                        <p>Pro og admin kan aktivere Google Calendar-sync. Alle bookinger, møter og oppgaver synkroniseres automatisk. Én kalender for alt - ingen doble systemer. Fungerer begge veier (endringer i Google Calendar oppdateres i Booking-Kalender).</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>5. Hvilke betalingssystem er støttet?</h4>
                        <p>Vipps, Stripe, Nets og kredittkort. Du kan velge kombinasjon og konfigurere automatisk betaling ved booking eller fakturering til medlemskonto. SMS-påminnelse sendes ved ikke betaling.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>6. Kan vi redusere no-shows?</h4>
                        <p>Ja! Automatiske varsler reduserer no-shows med 30-50%: SMS-bekreftelse ved booking, email-reminder 24 timer før, SMS-påminnelse 1 time før. Systemet kan også automatisk kansellere og åpne slottet ved no-show.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>7. Hvordan håndteres rabatter og kuponger?</h4>
                        <p>Systemet støtter rabatt- og kupongsystem. Du kan lage kampanjer som "3x simulator for 2" eller sesongkuponger. Rabattene beregnes automatisk ved booking. Statistikk viser bruksrate og ROI per kampanje.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>8. Kan vi synkronisere pro-kalendere?</h4>
                        <p>Ja! Hver PRO får sin egen kalender. System varsler PRO via SMS når medlem booker leson. PRO kan oppdatere kalender direkte i systemet (eller via Google Calendar sync). Automatisk koordinering av lesontider og medlemsforeløp.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>9. Hvordan eksporteres data for regnskapsystem?</h4>
                        <p>Systemet eksporterer alle transaksjoner i Excel- eller CSV-format. Du kan også integrere direkte med regnskapssystemet ditt via API. Hver booking har reference-ID som kan linkes til ditt regnskap.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>10. Kan vi håndtere paket-kjøp eller member-abonnementer?</h4>
                        <p>Ja! Systemet støtter både paketter (f.eks. "10 simulator-timer for kr 1200") og abonnementer ("Ubegrenset simulator for kr 199/måned"). Medlemmer velger pakke eller abonnement ved booking, og det trekkes automatisk fra gjeldende saldo.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere bedre booking?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi skreddersyr en løsning for din klubb.
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

export default BookingKalender
