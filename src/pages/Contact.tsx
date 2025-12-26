import SEOMeta from '../components/SEOMeta'
import { contactPointSchema, breadcrumbSchema } from '../utils/seoSchemas'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import companyConfig from '../config/companyConfig'
import '../App.css'

const Contact = () => {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Kontakt', path: '/contact' }
  ]

  return (
    <SEOMeta
      title="Kontakt Golfklubbens IT | Support & Spørsmål"
      description="Kontakt oss for spørsmål, demo eller hjelp. Responstid under 24 timer på hverdager. E-post, telefon og fysisk adresse."
      keywords={['kontakt', 'support', 'golfklubb it', 'demo', 'hjelp']}
      ogImage="/images/og-image.jpg"
      twitterCreator="@golfklubbIT"
      schemas={[
        contactPointSchema({
          contactType: 'Customer Service',
          telephone: companyConfig.phone,
          email: companyConfig.email,
          url: 'https://golfklubb-it-website.web.app/contact'
        }),
        breadcrumbSchema(breadcrumbs)
      ]}
      breadcrumbs={breadcrumbs}
    >
    <div className="app">
      <header className="header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content fade-in-up">
          <h1>
            Ta <span className="text-gradient-green">Kontakt</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
            Har dere spørsmål eller ønsker en demo? Vi er her for å hjelpe din golfklubb med digital modernisering.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Send oss en melding</h2>
          <div style={{ background: 'var(--color-bg-dark)', padding: '2rem', borderRadius: '12px', boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}>
            {/* Full bredde skjema */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Compact Contact Footer (dark theme) */}
      <section style={{ background: 'var(--color-bg-dark)', padding: '1.25rem 1.5rem 1.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'start' }}>
          <div style={{ lineHeight: 1.5 }}>
            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.35rem' }}>Golfklubbens IT</h3>
            <p style={{ color: 'var(--color-gray-light)', margin: 0 }}>Stabil drift. Smarte systemer.</p>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.35rem' }}>Kontakt</h3>
            <p style={{ color: 'var(--color-gray-light)', margin: 0 }}>{companyConfig.email}</p>
            <p style={{ color: 'var(--color-gray-light)', margin: '0.2rem 0 0' }}>{companyConfig.phone}</p>
            <p style={{ color: 'var(--color-gray-light)', margin: '0.2rem 0 0' }}>{companyConfig.address}</p>
            <p style={{ color: 'var(--color-gray-light)', margin: '0.2rem 0 0' }}>Org.nr: {companyConfig.organizationNumber}</p>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.35rem' }}>Support</h3>
            <p style={{ color: 'var(--color-gray-light)', margin: 0 }}>Responstid: {companyConfig.supportHours}</p>
            <p style={{ color: 'var(--color-gray-light)', margin: '0.2rem 0 0' }}>Vi svarer normalt innen 24 timer på hverdager.</p>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.35rem' }}>Snarveier</h3>
            <p style={{ margin: 0 }}><a href="/" style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>Hjem</a></p>
            <p style={{ margin: 0 }}><a href="/products/workspace" style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>Google Workspace</a></p>
            <p style={{ margin: 0 }}><a href="/products/clubsitecms" style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>ClubsiteCMS</a></p>
            <p style={{ margin: 0 }}><a href="/products/signage" style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>Digital skilting</a></p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '1rem', color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>
          © 2025 Golfklubbens IT – Stabil drift. Smarte systemer.
        </div>
      </section>
    </div>
    </SEOMeta>
  )
}

export default Contact
