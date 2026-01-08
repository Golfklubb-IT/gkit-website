import { useEffect } from 'react'
import { Mail, Phone, HelpCircle, FileText, AlertCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { updateMetaTags, generateSchemaMarkup, faqSchema, localBusinessSchema } from '../utils/seoUtils'
import '../App.css'

interface SupportCategory {
  id: string
  title: string
  items: {
    question: string
    answer: string
  }[]
}

const Support = () => {
  useEffect(() => {
    // Update SEO meta tags
    updateMetaTags({
      title: 'Kundesupport & Ressurser | Golfklubbens IT',
      description: 'Komplett kundesupport med 25+ FAQ-er, kontaktmetoder, dokumentasjon og implementeringsveiledninger for alle produkter fra Golfklubbens IT.',
      keywords: ['kundesupport', 'FAQ', 'hjelp', 'dokumentasjon', 'golfklubb', 'IT'],
      url: 'https://golfklubb-it-website.web.app/support'
    })

    // Add FAQ and Local Business schemas
    const allFaqs = [
      { question: 'Hva er fordelen med Google Workspace for golfklubber?', answer: 'Google Workspace gir sikker e-post, lagring, og samarbeidsverktøy spesielt designet for organisasjoner. For golfklubber tilbyr vi særlige priser gjennom Non-Profit programmet.' },
      { question: 'Hvordan kommer vi i gang med Google Workspace?', answer: 'Vi hjelper med hele prosessen: domeneregistrering, brukeropprett, e-postmigrasjon og opplæring av ditt team.' },
      { question: 'Hva er ClubsiteCMS?', answer: 'Det er et innholdssystem spesielt designet for golfklubber til å administrere nettsiden, medlem informasjon og arrangementer.' },
      { question: 'Kan jeg oppdatere nettsiden selv?', answer: 'Ja, ClubsiteCMS har et brukervennlig interface der klubblederen kan oppdatere innhold uten teknisk erfaring.' }
    ]
    generateSchemaMarkup('Product', faqSchema(allFaqs))
    generateSchemaMarkup('LocalBusiness', localBusinessSchema)
  }, [])
  const faqCategories: SupportCategory[] = [
    {
      id: 'workspace',
      title: 'Google Workspace',
      items: [
        {
          question: 'Hva er fordelen med Google Workspace for golfklubber?',
          answer: 'Google Workspace gir sikker e-post, lagring, og samarbeidsverktøy spesielt designet for organisasjoner. For golfklubber tilbyr vi særlige priser gjennom Non-Profit programmet.'
        },
        {
          question: 'Hvordan kommer vi i gang med Google Workspace?',
          answer: 'Vi hjelper med hele prosessen: domeneregistrering, brukeropprett, e-postmigrasjon og opplæring av ditt team.'
        },
        {
          question: 'Hvor mye koster Google Workspace?',
          answer: 'Prising varierer fra $6-18 per bruker per måned. Golfklubber som er medlem av Non-Profit programmet får rabatt.'
        },
        {
          question: 'Kan vi migrere fra eksisterende e-postsystem?',
          answer: 'Ja, vi håndterer sikker migrering fra Outlook, Gmail eller andre systemer uten datatap.'
        },
        {
          question: 'Hva om vi har sikkerhetsspørsmål?',
          answer: 'Google Workspace har enterprise-klasse sikkerhet med 2FA, SAML, og data-kryptering. Vi kan også sette opp sikkerhetspolicyer for din klubb.'
        }
      ]
    },
    {
      id: 'clubsitecms',
      title: 'ClubsiteCMS',
      items: [
        {
          question: 'Hva er ClubsiteCMS?',
          answer: 'Det er et innholdssystem spesielt designet for golfklubber til å administrere nettsiden, medlem informasjon og arrangementer.'
        },
        {
          question: 'Kan jeg oppdatere nettsiden selv?',
          answer: 'Ja, ClubsiteCMS har et brukervennlig interface der klubblederen kan oppdatere innhold uten teknisk erfaring.'
        },
        {
          question: 'Hva med integrering med Scangolf?',
          answer: 'Vi har fullstendig integrasjon med Scangolf for golfresultater, handicap og turneringsinformasjon som automatisk vises på nettsiden.'
        },
        {
          question: 'Er det søkemotoroptimalisert?',
          answer: 'Ja, ClubsiteCMS er bygget med SEO best practices og hjelper klubben å rangere høyere i Google.'
        },
        {
          question: 'Hva hvis jeg trenger hjelp?',
          answer: 'Vi tilbyr telefonskontakt, e-postsupport og kan gjøre endringer for deg hvis det trengs.'
        }
      ]
    },
    {
      id: 'products',
      title: 'Produkter & Apps',
      items: [
        {
          question: 'Hva er GolfTeamTime?',
          answer: 'En tidtakingsapp som sparer klubber hundrevis av timer ved å automatisere turneringsstyring og lagkompetisjonoppfølging.'
        },
        {
          question: 'Hva er Golfbilkontroll?',
          answer: 'Flåtestyringssystem for golfklubber som administrerer klubbens kjøretøyer, vedlikehold og kostnader effektivt.'
        },
        {
          question: 'Kan jeg bruke AIFileAnalyzer for PDF-er?',
          answer: 'Ja, AIFileAnalyzer bruker kunstig intelligens til å analysere dokumenter, uttrakte data og oppsummere innhold automatisk.'
        },
        {
          question: 'Hva er FrivilligKalender?',
          answer: 'En frivillighetskoordinasjonsapp som gjør det enkelt å rekruttere, registrere og administrere frivilliges innsats.'
        },
        {
          question: 'Hvordan fungerer BookingKalender?',
          answer: 'Automatisert bookingsystem for baneoppsettinger, baneopplysninger, turneringer og andre klubbeventmenter med påminnelser.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Prising & Betaling',
      items: [
        {
          question: 'Hva er prisingsmodellen?',
          answer: 'Vi tilbyr fleksibel prising basert på klubbens størrelse og behov. Kontakt oss for et tilpasset tilbud.'
        },
        {
          question: 'Finnes det rabatter for små klubber?',
          answer: 'Ja, vi har spesielle priser for mindre klubber og non-profit organisasjoner.'
        },
        {
          question: 'Kan vi prøve gratis først?',
          answer: 'Ja, mange produkter har gratis prøveperioder. Kontakt oss for å få tilgang.'
        },
        {
          question: 'Hva er inkludert i standardpakken?',
          answer: 'Standardpakken inkluderer Google Workspace, ClubsiteCMS, og valgt antall av våre produkter med support.'
        },
        {
          question: 'Kan vi oppgradere eller nedgradere når som helst?',
          answer: 'Ja, du kan når som helst justere din pakke. Vi fakturerer bare for det du bruker.'
        }
      ]
    },
    {
      id: 'integration',
      title: 'Integrering & Kompatibilitet',
      items: [
        {
          question: 'Hva er kompatibel med Scangolf?',
          answer: 'ClubsiteCMS, GolfTeamTime, GolfChart og BookingKalender integrerer direkte med Scangolf API.'
        },
        {
          question: 'Fungerer dette med vår eksisterende hjemmeside?',
          answer: 'Ja, vi kan integrere med de fleste plattformer eller bytte til vår moderne løsning.'
        },
        {
          question: 'Kan vi koble andre systemer?',
          answer: 'Vi har REST API og kan integrere med de fleste tredjepartssystemer klubben bruker.'
        },
        {
          question: 'Hva hvis vi bruker Booking.com eller andre bookingplattformer?',
          answer: 'Vi kan synkronisere med Booking.com og andre for å holde tilgjengelighet oppdatert.'
        },
        {
          question: 'Er det API dokumentasjon?',
          answer: 'Ja, fullstendig API-dokumentasjon er tilgjengelig i vår developer portal med eksempler og testverktøy.'
        }
      ]
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'E-post',
      value: 'support@golfklubb-it.no',
      description: 'Send oss en e-post for spørsmål eller problemer'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+47 XXX XX XXX',
      description: 'Ring oss på kontortid (mnd-fre 09:00-16:00)'
    },
    {
      icon: AlertCircle,
      title: 'Status Page',
      value: 'status.golfklubb-it.no',
      description: 'Sjekk systemets driftsstatus her'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Kundesupport & Ressurser</h1>
            <p className="lead">Vi er her for å hjelpe din klubb med alle spørsmål og problemer. Velg en kategori nedenfor eller kontakt oss direkte.</p>
          </section>

          {/* Contact Methods */}
          <section className="support-contact-section">
            <h2>Kontakt oss</h2>
            <div className="grid">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div key={index} className="feature-card">
                    <div className="icon-container">
                      <IconComponent size={32} style={{ color: '#0066cc' }} />
                    </div>
                    <h3>{method.title}</h3>
                    <p className="value">{method.value}</p>
                    <p className="description">{method.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* FAQ by Category */}
          <section className="faq-section">
            <h2 style={{ marginBottom: '2rem' }}>Ofte stillte spørsmål</h2>
            <div className="faq-container">
              {faqCategories.map((category) => (
                <div key={category.id} className="faq-category" style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0066cc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={24} />
                    {category.title}
                  </h3>
                  <div className="faq-items">
                    {category.items.map((item, idx) => (
                      <details key={idx} className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                        <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                          {item.question}
                        </summary>
                        <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documentation Links */}
          <section className="documentation-section">
            <h2>Dokumentasjon & Ressurser</h2>
            <div className="grid">
              <div className="feature-card">
                <div className="icon-container">
                  <FileText size={32} style={{ color: '#0066cc' }} />
                </div>
                <h3>Implementeringsveiledninger</h3>
                <p>Trinn-for-trinn guider for å få i gang hver av våre produkter</p>
                <a href="#" className="btn-link">Les guide →</a>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <FileText size={32} style={{ color: '#0066cc' }} />
                </div>
                <h3>Video Tutorials</h3>
                <p>Se hvordan du bruker hver funksjon med våre praktiske video-veiledninger</p>
                <a href="#" className="btn-link">Se videoer →</a>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <FileText size={32} style={{ color: '#0066cc' }} />
                </div>
                <h3>API Dokumentasjon</h3>
                <p>Fullstendig referanse for utviklere som vil integrere med våre systemer</p>
                <a href="#" className="btn-link">Les API docs →</a>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <FileText size={32} style={{ color: '#0066cc' }} />
                </div>
                <h3>Sikkerhetsguide</h3>
                <p>Best practices for sikkerhet, GDPR-samsvar og databeskyttelse</p>
                <a href="#" className="btn-link">Les sikkerhetsguide →</a>
              </div>
            </div>
          </section>

          {/* Support Form CTA */}
          <section className="support-cta-section" style={{ backgroundColor: '#f5f5f5', padding: '3rem', borderRadius: '10px', marginTop: '3rem', textAlign: 'center' }}>
            <h2>Trenger du personlig hjelp?</h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>Fylles ut en supportanmodning, og vi kontakter deg innen 24 timer</p>
            <a href="/contact" className="btn-primary">Send supportanmodning</a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Support
