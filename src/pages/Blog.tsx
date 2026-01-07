import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const blogPosts = [
    // CASE STUDIES
    {
      id: '1',
      title: 'Ski GK sparer 200+ timer årlig med digital golfbilflåte',
      date: '2025-02-01',
      category: 'Case Study',
      summary: 'Fra Excel og papir til fullautomatisert booking og vedlikehold. Se hvordan Ski Golfklubb transformerte sin golfbil-administrasjon.',
      image: 'https://placehold.co/600x400/1a1a1a/FFD43B?text=Ski+GK+Case',
      content: 'Ski Golfklubb, en av Norges største og eldeste klubber, hadde tradisjonelt håndtert sin 12-bilsflåte med Excel-ark og papirnotater. Det tok administrasjonen 3-4 timer per uke på å håndtere bookinger, vedlikehold, og konflikter. Med implementering av Golfbilkontroll sparte klubben 200+ timer årlig – og medlemmene fikk bedre service.'
    },
    {
      id: '2',
      title: 'Bærum GK: Fra møtelokalekaos til perfekt tidsplanlegging',
      date: '2025-02-08',
      category: 'Case Study',
      summary: 'Hvordan FrivilligKalender endret tilliten blant frivillige og reduserte no-shows med 40%.',
      image: 'https://placehold.co/600x400/1a1a1a/FF6B6B?text=Bærum+GK+Case',
      content: 'Bærum GK kjempet med frivillig-koordinering. Hver uke ble det kaosu med glemmte vakter, dårlige kommunikasjon, og frivillige som trakk seg. Med FrivilligKalender fikk de automatiske varsler, transparens, og et belønningssystem som gjorde frivillig-arbeid morsomt igjen.'
    },
    {
      id: '3',
      title: 'Losby GK: Simulator-bookinger fra 40% til 85% belegg',
      date: '2025-02-15',
      category: 'Case Study',
      summary: 'Booking-Kalender gjorde det enkelt for medlemmer å booke simulator-timer, og resultatet var mer enn fordoblet inntekt.',
      image: 'https://placehold.co/600x400/1a1a1a/4ECDC4?text=Losby+GK+Case',
      content: 'Losby GK hadde 2 nye golf-simulatorer men lav bruk (40% belegg). Med manuell booking via telefon og e-post var det friksjon. Booking-Kalender gjorde det mulig for medlemmer å booke 24/7. Resultatet: 85% belegg, kr 150k ekstra inntekt per år, og medlemstilfredsstillelse som steg drastisk.'
    },

    // GOOGLE WORKSPACE GUIDES
    {
      id: '4',
      title: 'Google for Nonprofits: Gratis Google Workspace for din klubb',
      date: '2025-02-20',
      category: 'Guide',
      summary: 'Steg-for-steg guide til å søke om og implementere Google Workspace gratis for ideelle organisasjoner.',
      image: 'https://placehold.co/600x400/1a1a1a/4CAF50?text=Google+Nonprofits',
      content: 'Er din golfklubb registrert som ideell organisasjon? Då kan du få Google Workspace gratis! Vi viser deg nøyaktig hvordan du søker, hva du får, og hvordan du setter det opp på 30 minutter.'
    },
    {
      id: '5',
      title: 'Slik bruker du Google Calendar for klubbplanlegging',
      date: '2025-02-25',
      category: 'Guide',
      summary: 'Turneringer, møter, vedlikehold – hold alt på ett sted. En praktisk guide til kalenderbruk for golfklubber.',
      image: 'https://placehold.co/600x400/1a1a1a/5DADE2?text=Google+Calendar',
      content: 'Google Calendar er kraftfullere enn de fleste klubber forstår. Med riktig oppsett kan du koordinere alle klubbaktiviteter, send automatiske varsler, og gi medlemmer oversikt. Her er vår beste praksis.'
    },
    {
      id: '6',
      title: 'Google Drive for klubbdokumentasjon: Styrearkiv som fungerer',
      date: '2025-03-02',
      category: 'Guide',
      summary: 'Strømlinjeform styreforberedelser, møtereferater og arkivering med Google Drive.',
      image: 'https://placehold.co/600x400/1a1a1a/52BE80?text=Google+Drive',
      content: 'Fra papir-arkiv til digitalt system. Vi viser hvordan du organiserer møtereferater, budsjett, kontrakter og annen dokumentasjon så alt er søkbart og tilgjengelig når du trenger det.'
    },
    {
      id: '7',
      title: 'Google Forms for medlemsundersøkelser: Hva mener medlemmene dine egentlig?',
      date: '2025-03-05',
      category: 'Guide',
      summary: 'Bruk Google Forms til å samle feedback, måle tilfredshet, og ta bedre styrebeslutninger basert på data.',
      image: 'https://placehold.co/600x400/1a1a1a/45B649?text=Google+Forms',
      content: 'Mange klubber gjetter på medlemmenes ønsker. Med Google Forms får du faktisk data. Vi viser deg templates for tilfredsthetsundersøkelser, medlems-preferanser, og behovsanalyser.'
    },
    {
      id: '8',
      title: 'Gmail-tips for klubbadministratorer: Organisering, automatisering og effektivitet',
      date: '2025-03-08',
      category: 'Guide',
      summary: 'Fra 200 ulesne e-poster til inbox zero. Praktiske Gmail-tips som sparer time hver uke.',
      image: 'https://placehold.co/600x400/1a1a1a/48C774?text=Gmail+Tips',
      content: 'E-poster er et sortiario for adminstrasjonen. Med riktig Gmail-setup (labels, templates, filters, canned responses) kan du kutte e-post-tid dramatisk og unngå viktige beskjeder.'
    },

    // CLUBSITECMS GUIDES
    {
      id: '9',
      title: 'ClubsiteCMS for nybegynnere: Slik lager du hjemmesiden på 1 time',
      date: '2025-03-10',
      category: 'Guide',
      summary: 'Uten HTML-kunnskap? Ingen problem. ClubsiteCMS er så enkelt at hvem som helst kan oppdatere klubbsiden.',
      image: 'https://placehold.co/600x400/1a1a1a/FF9F2E?text=ClubsiteCMS+Basics',
      content: 'ClubsiteCMS er designet for golfklubber som ikke har IT-ressurser. Vi viser deg kort hvordan du endrer innhold, legger til bilder, og oppdaterer nyheter – alt uten å måtte spørre en webdesigner.'
    },
    {
      id: '10',
      title: 'Integrasjon av Booking-Kalender med ClubsiteCMS: Automatiske turnering-opptak',
      date: '2025-03-13',
      category: 'Guide',
      summary: 'Gjør det mulig for medlemmer å melde seg på turneringer direkte fra klubbsiden – auto-synk med startlister.',
      image: 'https://placehold.co/600x400/1a1a1a/F26522?text=Integration',
      content: 'Med integrering mellom Booking-Kalender og ClubsiteCMS kan medlemmer melde seg på turneringer direkte fra klubbens hjemmeside. Vi viser teknisk oppsett og konfigurering.'
    },
    {
      id: '11',
      title: 'ClubsiteCMS SEO: Slik gjør du klubbsiden synlig i Google',
      date: '2025-03-16',
      category: 'Guide',
      summary: 'Få flere medlemmer gjennom organisk Google-søk. SEO-guiden for golfklubber.',
      image: 'https://placehold.co/600x400/1a1a1a/FB4141?text=ClubsiteCMS+SEO',
      content: 'Alle golfklubber bør rangere for "golfklubb [by]" på Google. Vi viser deg hvordan du bruker ClubsiteCMS best-practice til å forbedre SEO og få flere henvendelser fra potensielle medlemmer.'
    },
    {
      id: '12',
      title: 'Digital Signage på klubben: Vise turneringer, nyheter og resultater i sanntid',
      date: '2025-03-19',
      category: 'Guide',
      summary: 'Plasser skjermer på lobbyen som viser live turnering-data, ranking, og nyheter – alt synkronisert automatisk.',
      image: 'https://placehold.co/600x400/1a1a1a/6C40C7?text=Digital+Signage',
      content: 'Digital signage er ikke bare pent å se på – det driver engagement. Vi viser hvordan du setter opp skjermer som automatisk viser turnering-resultater, påmeldingslister, og klubbnyheter fra ClubsiteCMS.'
    },

    // PRODUCT HOW-TO ARTICLES
    {
      id: '13',
      title: 'GolfTeamTime: Lønn på minuttet – slik implementerer du tidsregistrering',
      date: '2025-03-22',
      category: 'Guide',
      summary: 'Fra papirark til automatisk lønnsystem. Implementerings-guide for tidsregistrering.',
      image: 'https://placehold.co/600x400/1a1a1a/A569BD?text=GolfTeamTime',
      content: 'Med GolfTeamTime kan ansatte og frivillige registrere tid direkte i mobil-appen. Vi viser oppsett, integrering med lønnsystemer, og hvordan du får 100% nøyaktighet i oppgjørene.'
    },
    {
      id: '14',
      title: 'FrivilligKalender: Bygge et kultur hvor frivillige vil være med',
      date: '2025-03-25',
      category: 'Guide',
      summary: 'Ikke bare administrasjon – et belønningssystem som gjør frivillig-arbeid morsomt.',
      image: 'https://placehold.co/600x400/1a1a1a/E74C3C?text=FrivilligKalender',
      content: 'Mange klubber sliter med frivillig-rekruttering. FrivilligKalender har ett built-in belønningssystem (poeng, medaljer, ranking) som gjør frivillig-arbeid til en kompetisjon. Vi viser hvordan du bruker det maksimalt.'
    },
    {
      id: '15',
      title: 'AI File Analyzer for styremøter: Forberedelse på 5 minutter',
      date: '2025-03-28',
      category: 'Guide',
      summary: 'Styreleder? La AI generere oppsummeringer, budsjett-analyser og møtereferater automatisk.',
      image: 'https://placehold.co/600x400/1a1a1a/2E86AB?text=AI+Analyzer',
      content: 'Styreleder bruker gjerne 5-10 timer på å forberede seg til møte. Med AI File Analyzer kan du laste opp dokumenter og få automatiske oppsummeringer på 5 minutter. Vi viser praktiske eksempler fra virkelige klubber.'
    },
    {
      id: '16',
      title: 'Golfbilkontroll: Smart vedlikehold – reduser reparasjonskosten med 40%',
      date: '2025-03-31',
      category: 'Guide',
      summary: 'Forebyggende vedlikehold i stedet for akutt reparasjon. Systemets største lønnsomhet.',
      image: 'https://placehold.co/600x400/1a1a1a/27AE60?text=Golfbilkontroll',
      content: 'Mange klubber fikser biler på reaktiv basis. Golfbilkontroll varsler automatisk om vedlikehold før problemet oppstår. Vi viser hvordan planlagt vedlikehold sparer både penger og nedetid.'
    },
    {
      id: '17',
      title: 'Teknologi for turneringsledelse: Fra påmelding til resultater',
      date: '2025-04-02',
      category: 'Guide',
      summary: 'Hele turnerings-livssyklusen: påmelding, startlister, live-scorekort, resultat-publish.',
      image: 'https://placehold.co/600x400/1a1a1a/D68910?text=Tournament',
      content: 'Moderne turneringsledelse er ikke papirbasert. Vi viser hvordan du bruker Booking-Kalender, GolfBox og andre systemer for å håndtere hele turnerings-prosessen digitalt.'
    },

    // TREND ARTICLES
    {
      id: '18',
      title: 'Digitalisering av golfklubber: Trendrapport 2026',
      date: '2025-04-05',
      category: 'Teknologi',
      summary: 'Hvilke klubber leder og hvilke henger etter? En analyse av digitaliserings-trenden i norsk golf.',
      image: 'https://placehold.co/600x400/1a1a1a/1E8449?text=Trend+2026',
      content: 'Vi analyserte 50+ golfklubber og fant at de som digitaliserte har 30-40% bedre medlemstilfredshet. Her er trendene som former golfklubbene i 2026.'
    },
    {
      id: '19',
      title: 'Kunstig intelligens kommer til golfklubbene – og det er billigere enn du tror',
      date: '2025-04-08',
      category: 'Teknologi',
      summary: 'Fra møtereferater til medlems-analyse. Hva AI kan gjøre for din klubb i 2026.',
      image: 'https://placehold.co/600x400/1a1a1a/0E6251?text=AI+Golf',
      content: 'AI er ikke bare for store bedrifter. Små golfklubber kan bruke AI til møtereferater, budsjett-analyse, og medlems-insights. Vi viser praksis-eksempler.'
    },
    {
      id: '20',
      title: 'Sikkerhet og medlems-personvern: Krav du må møte som golfklubb',
      date: '2025-04-10',
      category: 'Teknologi',
      summary: 'GDPR, personvernsfolk og medlems-tillit. En guide til sikkerhet for golfklubber.',
      image: 'https://placehold.co/600x400/1a1a1a/186A3B?text=Security',
      content: 'Med medlems-data digitalisert kommer ansvar. Vi gjennomgår GDPR, sikkerhet, og best-practice for golfklubber som håndterer sensitive data.'
    }
  ]

  const categories = ['Alle', 'Case Study', 'Guide', 'Teknologi']

  const filteredPosts = selectedCategory === null || selectedCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-content fade-in-up">
          <h1>
            <span className="text-gradient-green">Innsikt & Nyheter</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
            Tips, trender og case studies for moderne golfklubbdrift
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          {/* Kategorifilter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Alle' ? null : category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '20px',
                  border: selectedCategory === category || (category === 'Alle' && selectedCategory === null)
                    ? '2px solid var(--color-gkit-green)'
                    : '2px solid rgba(255,255,255,0.2)',
                  background: selectedCategory === category || (category === 'Alle' && selectedCategory === null)
                    ? 'rgba(76, 175, 80, 0.1)'
                    : 'transparent',
                  color: 'var(--color-gray-light)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="blog-card card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  animationDelay: `${index * 0.1}s`,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(76, 175, 80, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="blog-image" style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-gkit-green)', fontWeight: '600', textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-light)' }}>
                      {new Date(post.date).toLocaleDateString('no-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: '#fff' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
                    {post.summary}
                  </p>
                  <a href="#" style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-gkit-green)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Les mer <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--color-gray-light)', fontSize: '1.1rem' }}>
                Ingen artikler i denne kategorien ennå.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Blog
