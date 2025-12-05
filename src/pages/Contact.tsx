import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import companyConfig from '../config/companyConfig'
import '../App.css'

const Contact = () => {
  return (
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
      <section className="contact" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="contact-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem', alignItems: 'start' }}>
              {/* Kontaktform */}
              <div>
                <h2 style={{ marginBottom: '2rem' }}>Send oss en melding</h2>
                <ContactForm />
              </div>

              {/* Kontaktinfo */}
              <div>
                <h2 style={{ marginBottom: '2rem' }}>Kontaktinformasjon</h2>
                
                {/* Email */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>E-post</h4>
                  <a href={`mailto:${companyConfig.email}`} style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontSize: '1.1rem' }}>
                    {companyConfig.email}
                  </a>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    For generelle henvendelser
                  </p>
                </div>

                {/* Telefon */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Telefon</h4>
                  <a href={`tel:${companyConfig.phone.replace(/\s/g, '')}`} style={{ color: 'var(--color-gkit-green)', textDecoration: 'none', fontSize: '1.1rem' }}>
                    {companyConfig.phone}
                  </a>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Support: {companyConfig.supportHours}
                  </p>
                </div>

                {/* Adresse */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Besøksadresse</h4>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                    {companyConfig.address}
                  </p>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>
                    Org.nr: {companyConfig.organizationNumber}
                  </p>
                </div>

                {/* Åpningstider */}
                <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Responstid</h4>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '1rem' }}>
                    {companyConfig.supportHours} - Vi svarer normalt innen 24 timer på hverdager
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>
              
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar det å få svar?</h4>
                  <p style={{ color: 'var(--color-gray-light)' }}>
                    Vi svarer på alle henvendelser innen 24 timer på hverdager. For hastesaker, ring oss direkte på {companyConfig.phone}.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Tilbyr dere gratis konsultasjon?</h4>
                  <p style={{ color: 'var(--color-gray-light)' }}>
                    Ja! Vi tilbyr en uforpliktende 30-minutters konsultasjon for å forstå din klubbs behov. Fyll ut skjemaet, så tar vi kontakt.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan dere hjelpe oss selv om vi bruker annen plattform?</h4>
                  <p style={{ color: 'var(--color-gray-light)' }}>
                    Absolutt! Vi har erfaring med GolfBox, ClubsiteCMS, Google Workspace og mange andre systemer. Vi kan hjelpe deg uansett hvor du er i dag.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er prisen?</h4>
                  <p style={{ color: 'var(--color-gray-light)' }}>
                    Prisene varierer basert på dine behov. Ring oss for et konkret tilbud, eller fyll ut skjemaet med så mye informasjon som mulig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
