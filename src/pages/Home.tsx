import { useEffect, useState, useRef } from 'react'
import '../styles/wireframe-light.css'

function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        document.documentElement.style.backgroundColor = '#FFFFFF'
        document.body.style.backgroundColor = '#FFFFFF'
    }, [])

    const handleScroll = (e) => {
        const container = e.target
        const cardWidth = window.innerWidth
        const scrollLeft = container.scrollLeft
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(newIndex)
    }

    const scrollToCard = (index) => {
        if (scrollContainerRef.current) {
            const cardWidth = window.innerWidth
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            })
        }
    }

    const cards = [
        {
            id: 1,
            title: 'Stabil drift. Smarte systemer.',
            subtitle: 'Solutions for Modern Golf Clubs',
            description: 'Golfklubbens IT leverer digital modernisering, stabil drift og smarte systemer for norske golfklubber.',
            cta: 'Kom i gang',
            type: 'hero'
        },
        {
            id: 2,
            title: 'Våre Tjenester',
            services: [
                { icon: '⚙️', name: 'System Drift', desc: 'Stabil og sikker drift av GolfBox, ClubsiteCMS og andre kritiske systemer.' },
                { icon: '☁️', name: 'Google Workspace', desc: 'Implementasjon og support for Google Workspace, e-post, dokumenter og samarbeid.' },
                { icon: '🔐', name: 'Sikkerhet & Support', desc: '24/7 teknisk support, sikkerhetskontroller og løpende vedlikehold.' }
            ],
            type: 'services'
        },
        {
            id: 3,
            title: 'Hvorfor velge oss?',
            benefits: [
                { icon: '✓', title: 'Golf-spesifik ekspertise', desc: 'Vi forstår de unike behovene til golfklubber og deres medlemmer.' },
                { icon: '✓', title: 'Driftssikkerhet 99,9%', desc: 'Redundante systemer og backup sikrer din klubbs IT-løsninger alltid er tilgjengelig.' },
                { icon: '✓', title: 'Lokalt support team', desc: 'Norsktalende tekniker og support på norsk arbeidstid og tidssone.' },
                { icon: '✓', title: 'Skalbar og fleksibel', desc: 'Fra små klubber til store organisasjoner, vi tilpasser løsninger etter dine behov.' }
            ],
            type: 'benefits'
        },
        {
            id: 4,
            title: 'Referanser',
            cases: [
                { name: 'Golfklubb A', project: 'Systemintegrasjon', result: '40% kostnadsreduksjon' },
                { name: 'Golfklubb B', project: 'Google Workspace', result: 'Bedre samarbeid & sikkerhet' }
            ],
            type: 'cases'
        },
        {
            id: 5,
            title: 'Produkter & Integrasjoner',
            products: [
                { icon: '⛳', name: 'GolfBox', desc: 'Administrasjon av golfklubber - medlemskap, tee-tider, turnering og resultat.' },
                { icon: '🌐', name: 'ClubsiteCMS', desc: 'Modern website og CMS for klubbens web-tilstedeværelse og kommunikasjon.' },
                { icon: '📧', name: 'Google Workspace', desc: 'E-post, dokumenter, kalender og samarbeid for hele organisasjonen din.' }
            ],
            type: 'products'
        },
        {
            id: 6,
            title: 'Klar for å modernisere din klubb?',
            subtitle: 'Ta kontakt for gratis konsultasjon',
            cta: 'Kontakt oss nå',
            type: 'contact'
        }
    ]

    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827', fontFamily: 'Inter, Arial, sans-serif', overflow: 'hidden' }}>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { background-color: #FFFFFF !important; color: #111827 !important; }
                body { font-family: Inter, Arial, sans-serif; }
                a { color: #0057D9; text-decoration: none; }
                a:hover { text-decoration: underline; }
                .card-stack-container {
                    width: 100vw;
                    height: 100vh;
                    overflow-x: auto;
                    overflow-y: hidden;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                }
                .card-stack-container::-webkit-scrollbar { display: none; }
                .card-slide {
                    width: 100vw;
                    height: 100vh;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    scroll-snap-align: start;
                    overflow-y: auto;
                }
            `}</style>

            {/* MAIN CARD STACK CONTAINER */}
            <div
                ref={scrollContainerRef}
                className="card-stack-container"
                onScroll={handleScroll}
                style={{ display: 'flex' }}
            >
                {/* CARD 1: HERO */}
                <div className="card-slide" style={{ background: 'linear-gradient(135deg, #0057D9 0%, #003BA3 100%)' }}>
                    <div style={{ maxWidth: '32rem', textAlign: 'center', color: '#FFFFFF' }}>
                        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1rem', opacity: 0.9 }}>
                            {cards[0].subtitle}
                        </p>
                        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '700', marginBottom: '1rem', lineHeight: 1.2 }}>
                            {cards[0].title}
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: '2rem', opacity: 0.95, lineHeight: 1.6 }}>
                            {cards[0].description}
                        </p>
                        <button style={{ padding: '1rem 2rem', backgroundColor: '#FFFFFF', color: '#0057D9', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                            {cards[0].cta}
                        </button>
                    </div>
                    <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#FFFFFF', opacity: 0.7 }}>
                        ← Swipe →
                    </div>
                </div>

                {/* CARD 2: SERVICES */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '48rem', width: '100%' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', textAlign: 'center' }}>
                            {cards[1].title}
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '2rem', textAlign: 'center' }}>
                            Komplett løsning for klubb drift
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cards[1].services.map((service, idx) => (
                                <div key={idx} style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', transition: 'all 0.3s' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{service.icon}</div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{service.name}</h3>
                                    <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 3: BENEFITS */}
                <div className="card-slide" style={{ backgroundColor: '#F7F9FC' }}>
                    <div style={{ maxWidth: '48rem', width: '100%' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', textAlign: 'center' }}>
                            {cards[2].title}
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '2rem', textAlign: 'center' }}>
                            50+ golfklubber stoler på oss
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cards[2].benefits.map((benefit, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#0057D9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', flexShrink: 0, fontSize: '1.25rem' }}>
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{benefit.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.5 }}>{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 4: CASE STUDIES */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '48rem', width: '100%' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', textAlign: 'center' }}>
                            {cards[3].title}
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '2rem', textAlign: 'center' }}>
                            Se hvordan vi har hjulpet andre
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cards[3].cases.map((caseItem, idx) => (
                                <div key={idx} style={{ padding: '2rem', borderRadius: '0.75rem', backgroundColor: '#F3F4F6', borderLeft: '4px solid #0057D9' }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{caseItem.name}</h3>
                                    <p style={{ fontSize: '0.875rem', color: '#4B5563', marginBottom: '0.75rem' }}>{caseItem.project}</p>
                                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#0057D9' }}>📈 {caseItem.result}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 5: PRODUCTS */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '48rem', width: '100%' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', textAlign: 'center' }}>
                            {cards[4].title}
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '2rem', textAlign: 'center' }}>
                            Løsninger vi jobber med
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {cards[4].products.map((product, idx) => (
                                <div key={idx} style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>{product.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{product.name}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{product.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 6: CONTACT */}
                <div className="card-slide" style={{ background: 'linear-gradient(135deg, #0057D9 0%, #003BA3 100%)' }}>
                    <div style={{ maxWidth: '32rem', textAlign: 'center', color: '#FFFFFF' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', marginBottom: '1rem' }}>
                            {cards[5].title}
                        </h2>
                        <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.95, lineHeight: 1.6 }}>
                            {cards[5].subtitle}
                        </p>
                        <button style={{ padding: '1rem 2rem', backgroundColor: '#FFFFFF', color: '#0057D9', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                            {cards[5].cta}
                        </button>
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.75rem', opacity: 0.8 }}>
                            <p>© 2025 Golfklubbens IT</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVIGATION DOTS */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 50,
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: '0.75rem 1rem',
                borderRadius: '2rem',
                backdropFilter: 'blur(10px)'
            }}>
                {cards.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        style={{
                            width: idx === activeIndex ? '1.5rem' : '0.75rem',
                            height: '0.75rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            backgroundColor: idx === activeIndex ? '#0057D9' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        aria-label={`Go to card ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
