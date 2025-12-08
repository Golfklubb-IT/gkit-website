import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import '../../App.css'

const WorkspaceTools = () => {
    const [expandedTool, setExpandedTool] = useState<string | null>(null)

    const tools = [
        {
            id: 'gmail',
            icon: '📧',
            title: 'Gmail Business',
            short: 'Profesjonell e-post med @dinklub.no',
            full: 'Profesjonell e-post med @dinklub.no. Ingen annonser, kraftig søk, spam- og virusbeskyttelse. 30 GB (gratis) eller ubegrenset (Business Standard). Tilgjengelig fra mobil, nettbrett og PC.'
        },
        {
            id: 'drive',
            icon: '💾',
            title: 'Google Drive',
            short: 'Ubegrenset lagring i Business Standard',
            full: 'Ubegrenset lagring i Business Standard. Tilgjengelig fra mobil, nettbrett og PC. Automatisk backup. Del filer sikkert med lenker. Søk i alle dokumenter, inkludert PDF-er og bilder.'
        },
        {
            id: 'meet',
            icon: '📹',
            title: 'Google Meet',
            short: 'Videomøter for styremøter og kurs',
            full: 'Videomøter for styremøter, medlemsmøter og kurs. Opptil 100 (gratis) eller 250 deltakere (Business). Opptak inkludert i Business Plus. Ingen nedlasting nødvendig. Fungerer i nettleser.'
        },
        {
            id: 'shared-drives',
            icon: '📁',
            title: 'Shared Drives',
            short: 'Felles områder for styret og komiteer',
            full: 'Felles områder for styret, komiteer og arrangementer. Alle dokumenter eies av klubben, ikke enkeltpersoner. Perfekt for kontinuitet når tillitsvalgte bytter. Kun i Business Standard/Plus.'
        },
        {
            id: 'calendar',
            icon: '📅',
            title: 'Google Calendar',
            short: 'Felles kalendere for alle grupper',
            full: 'Felles kalendere for styret, komiteer og arrangementer. Synkroniser med GolfBox. Automatiske påminnelser og invitasjoner. Del kalendere med medlemmer og eksterne.'
        },
        {
            id: 'docs',
            icon: '📄',
            title: 'Google Docs & Sheets',
            short: 'Samarbeid om dokumenter i sanntid',
            full: 'Samarbeid om dokumenter og regneark i sanntid. Flere kan redigere samtidig. Versjonskontroll og kommentarer. Ingen e-post med vedlegg. Åpner og redigerer Word/Excel direkte.'
        },
        {
            id: 'forms',
            icon: '📝',
            title: 'Google Forms',
            short: 'Lag påmeldingsskjema og søknader',
            full: 'Lag påmeldingsskjema, søknader, evalueringer. Svar samles automatisk i Google Sheets. Perfekt for turneringer og arrangementer. Kan integreres med GolfBox og nettsiden.'
        },
        {
            id: 'sites',
            icon: '🌐',
            title: 'Google Sites',
            short: 'Bygg internt intranet for styret',
            full: 'Bygg internt intranet for styret og ansatte. Del dokumenter, nyheter og prosedyrer. Ingen teknisk kunnskap nødvendig. Drag-and-drop editor. Mobilvennlig automatisk.'
        },
        {
            id: 'admin',
            icon: '⚙️',
            title: 'Admin Console',
            short: 'Styr brukere og sikkerhet fra ett sted',
            full: 'Styr brukere, grupper, sikkerhet og tilganger fra ett sted. Enkel onboarding av nye brukere. 2-faktor autentisering og rapportering. Overvåk bruk og aktivitet. Sett policies for hele klubben.'
        },
        {
            id: 'security',
            icon: '🔐',
            title: 'Sikkerhet & GDPR',
            short: 'GDPR-kompatibel og kryptert',
            full: 'Kryptert lagring og overføring. 2-faktor autentisering. Admin-kontroll over data. GDPR-kompatibel. Backup og gjenoppretting. Google oppfyller alle norske og europeiske krav til datasikkerhet.'
        }
    ]

    const toggleTool = (id: string) => {
        setExpandedTool(expandedTool === id ? null : id)
    }

    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Alt du trenger i én pakke</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        10 kraftige verktøy for moderne klubbdrift. Fra e-post til videomøter, dokumentsamarbeid og sikkerhet.
                    </p>
                    <div className="hero-cta">
                        <Link to="/products/workspace" className="btn btn-primary">Se full pakke</Link>
                        <a href="#sammenligning" className="btn btn-secondary">Sammenlign pakker</a>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Verktøy & Funksjoner</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {tools.map(tool => (
                        <div
                            key={tool.id}
                            onClick={() => toggleTool(tool.id)}
                            className="service-card glass"
                            style={{
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: expandedTool === tool.id ? 'scale(1.02)' : 'scale(1)',
                                borderTop: expandedTool === tool.id ? '3px solid var(--color-gkit-green)' : '3px solid transparent'
                            }}
                        >
                            <div className="service-icon">{tool.icon}</div>
                            <h3>{tool.title}</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                {expandedTool === tool.id ? tool.full : tool.short}
                            </p>
                            <div style={{ 
                                textAlign: 'center', 
                                color: 'var(--color-gkit-green)', 
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}>
                                {expandedTool === tool.id ? '▲ Lukk' : '▼ Les mer'}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }} id="sammenligning">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Sammenligning av pakker</h2>

                <div style={{ overflowX: 'auto', maxWidth: '1200px', margin: '0 auto' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        background: 'var(--color-bg-light)',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ background: 'rgba(76, 175, 80, 0.1)' }}>
                                <th style={{ padding: '1.5rem', textAlign: 'left', borderBottom: '2px solid rgba(76, 175, 80, 0.3)' }}>
                                    Feature
                                </th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(76, 175, 80, 0.3)' }}>
                                    Gratis (Nonprofit)
                                </th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(76, 175, 80, 0.3)', background: 'rgba(76, 175, 80, 0.15)' }}>
                                    Business Standard
                                </th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(76, 175, 80, 0.3)' }}>
                                    Business Plus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>E-post (@dinklub.no)</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✅</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}>✅</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✅</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Lagring per bruker</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>30 GB</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}><strong>Ubegrenset</strong></td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>5 TB</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Meet deltakere</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>100</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}><strong>250</strong></td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>250</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Opptak (Meet)</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}>❌</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✅</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Shared Drives</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}><strong>✅</strong></td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✅</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Google Vault (arkiv)</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>❌</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(76, 175, 80, 0.05)' }}>❌</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✅</td>
                            </tr>
                            <tr style={{ background: 'rgba(76, 175, 80, 0.1)' }}>
                                <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>Pris (nonprofit)</td>
                                <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>0 kr</td>
                                <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 'bold', background: 'rgba(76, 175, 80, 0.2)' }}>~385 kr/år</td>
                                <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>~640 kr/år</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                        💡 <strong>Anbefaling:</strong> Business Standard gir best verdi for de fleste golfklubber
                    </p>
                    <Link to="/products/workspace-nonprofit" className="btn btn-primary">
                        Se non-profit priser
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger du hjelp med å velge?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg med å finne riktig pakke for din klubb.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss for veiledning
                        </Link>
                        <Link to="/products/workspace" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Tilbake til hovedside
                        </Link>
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

export default WorkspaceTools
