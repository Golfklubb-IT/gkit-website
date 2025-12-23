import { useEffect } from 'react'
import '../styles/wireframe-light.css'

function Home() {
    useEffect(() => {
        document.documentElement.style.backgroundColor = '#FFFFFF'
        document.body.style.backgroundColor = '#FFFFFF'
    }, [])

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#111827', fontFamily: 'Inter, Arial, sans-serif' }}>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { background-color: #FFFFFF !important; color: #111827 !important; }
                body { font-family: Inter, Arial, sans-serif; }
                a { color: #0057D9; text-decoration: none; }
                a:hover { text-decoration: underline; }
            `}</style>

            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '1rem 1.5rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0057D9' }}>GKIT</div>
                    <nav style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Home</a>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Services</a>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</a>
                    </nav>
                </div>
            </header>

            {/* SECTION 1: HERO */}
            <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 1.5rem', textAlign: 'center', borderTop: 'none' }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#9CA3AF', marginBottom: '1rem' }}>
                        Solutions for Modern Golf Clubs
                    </p>
                    <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 2.25rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                        Stabil drift. Smarte systemer.
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#4B5563', marginBottom: '2rem' }}>
                        Golfklubbens IT leverer digital modernisering, stabil drift og smarte systemer for norske golfklubber.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0057D9', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }}>
                            Kom i gang
                        </button>
                        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#FFFFFF', color: '#0057D9', borderRadius: '0.5rem', border: '1px solid #0057D9', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }}>
                            Les mer
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SERVICE CARDS */}
            <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 1.5rem', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                            Våre Tjenester
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563' }}>
                            Komplett løsning for klubb drift og digital transformasjon
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>⚙️</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>System Drift</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>Stabil og sikker drift av GolfBox, ClubsiteCMS og andre kritiske systemer for klubben.</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>☁️</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Google Workspace</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>Implementasjon og support for Google Workspace, e-post, dokumenter og samarbeid.</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>🔐</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Sikkerhet & Support</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>24/7 teknisk support, sikkerhetskontroller og løpende vedlikehold av IT-infrastruktur.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BENEFITS LIST */}
            <section style={{ backgroundColor: '#F7F9FC', padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                            Hvorfor velge oss?
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563' }}>
                            Erfaring fra 50+ golfklubber i Norge
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Golf-spesifik ekspertise</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Vi forstår de unike behovene til golfklubber og deres medlemmer.</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Driftssikkerhet 99,9%</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Redundante systemer og backup sikrer din klubbs IT-løsninger alltid er tilgjengelig.</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Lokalt support team</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Norsktalende tekniker og support på norsk arbeidstid og tidssone.</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Skalbar og fleksibel</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Fra små klubber til store organisasjoner, vi tilpasser løsninger etter dine behov.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CASE CARDS */}
            <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 1.5rem', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                            Referanser
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563' }}>
                            Se hvordan vi har hjulpet andre klubber
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ width: '100%', height: '7rem', borderRadius: '0.5rem', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '0.75rem' }}>[CASE STUDY 1 - GOLF CLUB]</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Golfklubb A - Systemintegrasjon</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>Migrert fra legacy-systemer til moderne cloud-løsning. Resultater: 40% kostnadsreduksjon, økt medlemstilfredshet.</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ width: '100%', height: '7rem', borderRadius: '0.5rem', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '0.75rem' }}>[CASE STUDY 2 - GOOGLE WORKSPACE]</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Golfklubb B - Google Workspace</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>Implementasjon av Google Workspace for 25 staff. Bedre samarbeid, sikkerhet og tilgjengelighet fra alle enheter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PRODUCTS LIST */}
            <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 1.5rem', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                            Produkter & Integrasjoner
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563' }}>
                            Vi arbeider med og støtter disse løsningene
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>⛳</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>GolfBox</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Administrasjon av golfklubber - medlemskap, tee-tider, turnering og resultat.</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>🌐</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>ClubsiteCMS</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Modern website og CMS for klubbens web-tilstedeværelse og kommunikasjon.</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>📧</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Google Workspace</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>E-post, dokumner, kalender og samarbeid for hele organisasjonen din.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CONTACT FOOTER */}
            <footer style={{ backgroundColor: '#F7F9FC', padding: '3rem 1.5rem', marginTop: '2rem', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Klar for å modernisere din klubb?</h2>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Ta kontakt med oss for en gratis konsultasjon og demo av våre løsninger.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column', justifyContent: 'center' }}>
                            <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0057D9', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }}>
                                Kontakt oss
                            </button>
                            <a href="#" style={{ fontSize: '0.875rem', color: '#4B5563', textDecoration: 'underline', textDecorationOffset: '0.25rem' }}>Se priser</a>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
                        <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>© 2025 Golfklubbens IT. Alle rettigheter reservert.</p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Personvern</a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Vilkår</a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Kontakt</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
