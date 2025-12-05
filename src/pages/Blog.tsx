import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const blogPosts = [
    {
      id: '1',
      title: 'Hvorfor 2025 er året for digitalisering av golfklubben',
      date: '2025-01-15',
      category: 'Teknologi',
      summary: 'En gjennomgang av de viktigste trendene innen golf-IT og hvordan din klubb kan spare tid.',
      image: 'https://placehold.co/600x400/1a1a1a/4CAF50?text=Digitalisering',
      content: 'Digitalisering er ikke lenger en valgfri service - det er en nødvendighet. Les hvorfor 2025 blir vendepunktet for norske golfklubber.'
    },
    {
      id: '2',
      title: 'Slik sparer Ski GK 200 timer i året',
      date: '2025-02-01',
      category: 'Case Study',
      summary: 'En dybdykk i hvordan automatisering av golfbil-utleie endret hverdagen.',
      image: 'https://placehold.co/600x400/1a1a1a/FFD43B?text=Ski+GK+Case',
      content: 'Se hvordan Ski Golfklubb bruker smarte systemer til å spare 200 timer årlig på golfbil-administrasjon.'
    },
    {
      id: '3',
      title: 'Google Workspace vs. Microsoft 365 for Golfklubber',
      date: '2025-02-10',
      category: 'Guide',
      summary: 'Hva bør du velge? Vi sammenligner pris, funksjonalitet og brukervennlighet.',
      image: 'https://placehold.co/600x400/1a1a1a/4CAF50?text=Google+vs+MS',
      content: 'En grundig sammenligning av de to største produktivitetsplattformene for norske golfklubber.'
    }
  ]

  const categories = ['Alle', ...new Set(blogPosts.map(post => post.category))]

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
