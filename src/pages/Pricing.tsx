import { useEffect } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { updateMetaTags, generateSchemaMarkup, serviceSchema } from '../utils/seoUtils'
import '../App.css'

interface PricingTier {
  name: string
  description: string
  price: string
  period: string
  features: {
    name: string
    included: boolean
  }[]
  highlighted: boolean
  cta: string
  ctaAction: string
}

const Pricing = () => {
  useEffect(() => {
    // Update SEO meta tags
    updateMetaTags({
      title: 'Transparent Prising | Golfklubbens IT',
      description: 'Enkel og transparent prising for alle produkter og tjenester. Starter fra $99/mnd. Ingen skjulte kostnader. Non-profit rabatter og custom enterprise løsninger tilgjengelig.',
      keywords: ['prising', 'kostnad', 'pris', 'Google Workspace', 'ClubsiteCMS', 'golfklubb'],
      url: 'https://golfklubb-it-website.web.app/pricing'
    })

    // Add Service schema for pricing information
    generateSchemaMarkup('Product', serviceSchema(
      'Golfklubbens IT Services',
      'Komplette IT-løsninger for golfklubber med transparent prising',
      'https://golfklubb-it-website.web.app/images/og-image.png',
      'https://golfklubb-it-website.web.app/pricing'
    ))
  }, [])
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      description: 'Perfekt for små klubber som ønsker å komme i gang',
      price: 'Fra $99',
      period: 'per måned',
      highlighted: false,
      cta: 'Kom i gang',
      ctaAction: '/contact',
      features: [
        { name: 'Google Workspace (5 brukere)', included: true },
        { name: 'ClubsiteCMS grunnleggende', included: true },
        { name: 'Scangolf integrasjon', included: true },
        { name: 'E-postsupport', included: true },
        { name: 'Prioritert support', included: false },
        { name: 'Custom domain', included: false },
        { name: 'API access', included: false },
        { name: 'Training & onboarding', included: false }
      ]
    },
    {
      name: 'Professional',
      description: 'Vår mest populære plan for etablerte klubber',
      price: 'Fra $299',
      period: 'per måned',
      highlighted: true,
      cta: 'Start gratis prøveperiode',
      ctaAction: '/contact',
      features: [
        { name: 'Google Workspace (20 brukere)', included: true },
        { name: 'ClubsiteCMS avansert', included: true },
        { name: 'Scangolf integrasjon', included: true },
        { name: 'GolfTeamTime tidstyping', included: true },
        { name: 'BookingKalender', included: true },
        { name: 'Prioritert telefonspport', included: true },
        { name: 'Custom domain + SSL', included: true },
        { name: 'Training & onboarding', included: true }
      ]
    },
    {
      name: 'Enterprise',
      description: 'Fullstendig løsning med alle produkter og prioritetsstøtte',
      price: 'Tilpasset',
      period: 'kontakt for detaljer',
      highlighted: false,
      cta: 'Kontakt for tilbud',
      ctaAction: '/contact',
      features: [
        { name: 'Google Workspace (ubegrenset)', included: true },
        { name: 'Alle produkter & apps', included: true },
        { name: 'Golfbilkontroll flåtestyring', included: true },
        { name: 'AIFileAnalyzer dokumentanalyse', included: true },
        { name: 'FrivilligKalender frivillighet', included: true },
        { name: '24/7 dedikert support', included: true },
        { name: 'Custom integrasjoner', included: true },
        { name: 'Årlige strategisessjoner', included: true }
      ]
    }
  ]

  const productFeatures = [
    {
      product: 'Google Workspace',
      description: 'Sikker e-post, fillagring og samarbeid',
      basePricing: '$6-18',
      unit: 'per bruker/mnd',
      features: ['Gmail', 'Drive', 'Calendar', 'Meet', 'Docs', 'Sheets'],
      availability: 'Alle planer'
    },
    {
      product: 'ClubsiteCMS',
      description: 'Nettsted og innholdsstyring',
      basePricing: 'Fra $149',
      unit: 'per måned',
      features: ['Innholdsstyring', 'Scangolf integrasjon', 'Responsive design', 'SEO optimalisert', 'E-postsupport'],
      availability: 'Starter +'
    },
    {
      product: 'GolfTeamTime',
      description: 'Automatisert tidtaking og turneringsstyring',
      basePricing: 'Fra $99',
      unit: 'per måned',
      features: ['Tidtaking', 'Lagkompetisjon', 'Scorekort', 'Resultater', 'Statistikk'],
      availability: 'Professional +'
    },
    {
      product: 'Golfbilkontroll',
      description: 'Flåtestyring og vedlikeholdsstyring',
      basePricing: 'Fra $79',
      unit: 'per måned',
      features: ['Kjøretøyregister', 'Vedlikeholdssporing', 'Kostnadsanalyse', 'Rapporter', 'Dashboard'],
      availability: 'Professional +'
    },
    {
      product: 'BookingKalender',
      description: 'Automatisert booking og arrangementsadministrasjon',
      basePricing: 'Fra $89',
      unit: 'per måned',
      features: ['Banebooking', 'Arrangement', 'Påminnelser', 'Kapasitetsstyring', 'Rapporter'],
      availability: 'Professional +'
    },
    {
      product: 'FrivilligKalender',
      description: 'Frivillighetskoordinering og rekruttering',
      basePricing: 'Fra $69',
      unit: 'per måned',
      features: ['Frivilligregister', 'Skiftplanlegging', 'Påminnelser', 'Rapporter', 'Evalueringer'],
      availability: 'Professional +'
    },
    {
      product: 'AIFileAnalyzer',
      description: 'AI-drevet dokumentanalyse og oppsummering',
      basePricing: 'Fra $49',
      unit: 'per måned',
      features: ['Dokumentanalyse', 'Tekstekstraksjon', 'Oppsummering', 'OCR', 'Datakategorisering'],
      availability: 'Professional +'
    }
  ]

  const discounts = [
    {
      title: 'Non-Profit rabatt',
      description: 'Golfklubber som er medlem av anerkjente golforganisasjoner eller samfunnsrettede klubber',
      discount: '20-30%'
    },
    {
      title: 'Årsavtale rabatt',
      description: 'Ved betaling av helt år på forhånd',
      discount: '10%'
    },
    {
      title: 'Volumrabatt',
      description: 'For flere klubber eller organisasjoner',
      discount: '15-25%'
    },
    {
      title: 'Utprøving',
      description: 'Gratis eller rabattert prøveperiode på 30 dager',
      discount: '100% eller 50%'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Enkel og transparent prising</h1>
            <p className="lead">Velg planen som passer din klubbs behov. Alle planer inkluderer support og kan oppgraderes når som helst.</p>
          </section>

          {/* Pricing Tiers */}
          <section className="pricing-section">
            <div className="grid pricing-grid">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`pricing-card ${tier.highlighted ? 'featured' : ''}`}
                  style={{
                    border: tier.highlighted ? '2px solid #0066cc' : '1px solid #ddd',
                    borderRadius: '12px',
                    padding: '2rem',
                    backgroundColor: tier.highlighted ? '#f0f7ff' : '#fff',
                    boxShadow: tier.highlighted ? '0 8px 24px rgba(0, 102, 204, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tier.highlighted && (
                    <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0066cc', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                      MEST POPULÆR
                    </div>
                  )}

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>{tier.description}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0066cc' }}>
                      {tier.price}
                    </div>
                    <p style={{ color: '#999', fontSize: '0.95rem' }}>{tier.period}</p>
                  </div>

                  <a
                    href={tier.ctaAction}
                    className="btn-primary"
                    style={{
                      display: 'inline-block',
                      marginBottom: '2rem',
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: tier.highlighted ? '#0066cc' : '#f0f0f0',
                      color: tier.highlighted ? 'white' : '#333',
                      padding: '0.75rem'
                    }}
                  >
                    {tier.cta}
                  </a>

                  <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem' }}>
                    {tier.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '1rem',
                          fontSize: '0.95rem',
                          color: feature.included ? '#333' : '#999'
                        }}
                      >
                        {feature.included ? (
                          <Check size={20} style={{ color: '#0066cc', flexShrink: 0 }} />
                        ) : (
                          <X size={20} style={{ color: '#ccc', flexShrink: 0 }} />
                        )}
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Product Breakdown */}
          <section className="products-breakdown-section">
            <h2>Produktoversikt</h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>Her er alle produktene og deres enkeltpris hvis du ønsker å velge individuelt:</p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Produkt</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Beskrivelse</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Pris</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Tilgjengelig i</th>
                  </tr>
                </thead>
                <tbody>
                  {productFeatures.map((product, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #ddd', ':hover': { backgroundColor: '#f9f9f9' } }}>
                      <td style={{ padding: '1rem', fontWeight: '600' }}>{product.product}</td>
                      <td style={{ padding: '1rem', color: '#666' }}>{product.description}</td>
                      <td style={{ padding: '1rem', fontWeight: '500', color: '#0066cc' }}>
                        {product.basePricing}<br /><span style={{ fontSize: '0.85rem', color: '#999' }}>{product.unit}</span>
                      </td>
                      <td style={{ padding: '1rem' }}>{product.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Discounts & Offers */}
          <section className="discounts-section">
            <h2>Rabatter & Tilbud</h2>
            <div className="grid">
              {discounts.map((discount, index) => (
                <div key={index} className="feature-card">
                  <h3>{discount.title}</h3>
                  <p>{discount.description}</p>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0066cc', marginTop: '1rem' }}>
                    {discount.discount}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2>Pris-FAQ</h2>
            <div className="faq-container">
              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Hva er inkludert i alle planene?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Alle planer inkluderer teknisk support, sikkerheitsoppdateringer, og tilgang til vår dokumentasjon. Professional og Enterprise planer inkluderer også telefonsupport og opplæring.
                </p>
              </details>

              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Kan vi skifte plan senere?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Ja, absolutt! Du kan oppgradere eller nedgradere din plan når som helst. Vi justerer faktureringen forholdsmessig.
                </p>
              </details>

              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Hva slags betalingsmåter aksepterer dere?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Vi aksepterer kredittkort, bankoverføring og andre betalingsmåter. Alle transaksjoner er sikre og krypterte.
                </p>
              </details>

              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Er det oppsettsgebyr eller skjulte kostnader?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Nei, ingen oppsettsgebyr eller skjulte kostnader. Prisen du ser er det du betaler. Vi tilbyr gratis oppsetting og migrering for de fleste planer.
                </p>
              </details>

              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Hva hvis jeg trenger en custom løsning?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Vi tilbyr custom enterprise løsninger. Kontakt oss for å diskutere dine spesifikke behov, og vi lager et tilpasset tilbud.
                </p>
              </details>

              <details className="faq-item" style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
                  Er det pengebaktilbud?
                </summary>
                <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>
                  Ja, vi tilbyr 30-dagers pengebakgaranti hvis du ikke er fornøyd. Ingen spørsmål stilt.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section" style={{ backgroundColor: '#0066cc', color: 'white', padding: '3rem', borderRadius: '10px', marginTop: '3rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Klar til å komme i gang?</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Velg din plan eller kontakt oss for et tilpasset tilbud</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', color: '#0066cc', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>
                Kontakt oss <ArrowRight size={18} />
              </a>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', border: '2px solid white' }}>
                Gratis demo
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pricing
